// Kiosk application: screens, touch controls, information cards, sessions, quiz.
// The 3D character (robot.js), the voice (voice.js) and the answers (brain.js,
// content.js, quiz.js) are separate modules; this file only wires them together.
import { Robot } from './robot.js';
import { createVoice } from './voice.js';
// local answers + knowledge base load in the background so the first screen appears faster
let brain = null;
const brainReady = import('./brain.js').then((m) => { brain = m; return m; });
import { TOPICS, CARDS } from './content.js';
import { QUIZ } from './quiz.js';

const $ = (s) => document.querySelector(s);
const app = $('#app');
const params = new URLSearchParams(location.search);

/* =====================================================================
 * Settings (saved on this screen) + link parameters
 * ===================================================================== */
const ELEVEN_AGENT_ID = 'agent_6001m674rt3gf7dbchmh7r82f8qa';
const store = {
  get(k, d) { try { const v = localStorage.getItem('m-' + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('m-' + k, JSON.stringify(v)); } catch { /* storage unavailable */ } },
};
const settings = {
  rotation: params.has('rotate') ? +params.get('rotate') : store.get('rotation', 0),
  volume: store.get('volume', 0.9),
  kiosk: params.has('kiosk') ? params.get('kiosk') !== '0' : store.get('kiosk', false),
  idleSecs: store.get('idleSecs', 60),
};
const USE_AGENT = !params.has('localvoice');
const save = () => Object.entries(settings).forEach(([k, v]) => store.set(k, v));

/* =====================================================================
 * Rotation and layout
 * ===================================================================== */
function applyRotation() {
  document.documentElement.classList.remove('rotation-90', 'rotation-180', 'rotation-270');
  if (settings.rotation) document.documentElement.classList.add(`rotation-${settings.rotation}`);
  const lbl = document.getElementById('rotateLabel');
  if (lbl) lbl.textContent = `${settings.rotation}°`;
}
const appSize = () => [app.clientWidth, app.clientHeight];
// screen point -> point inside the (possibly rotated) app
function toApp(cx, cy) {
  const [w, h] = appSize();
  switch (settings.rotation) {
    case 90: return [cy, innerWidth - cx];
    case 270: return [innerHeight - cy, cx];
    case 180: return [w - cx, h - cy];
    default: return [cx, cy];
  }
}
const isPortrait = () => app.classList.contains('portrait');

function layout() {
  const [w, h] = appSize();
  const portrait = h >= w * 1.05;
  app.classList.toggle('portrait', portrait);
  app.classList.toggle('landscape', !portrait);
  const dockH = $('.dock').offsetHeight;
  app.style.setProperty('--dock-h', `${dockH}px`);
  const top = $('.topbar').offsetHeight + $('.options').offsetHeight;
  app.style.setProperty('--top-h', `${top}px`);
  // the robot fills the stage between the options at the top and the microphone bar
  let rect;
  if (portrait) {
    rect = { x: 0, y: top, w, h: h - dockH - top };
  } else {
    const cardW = w * 0.43;
    rect = { x: 0, y: top, w: w - cardW, h: h - dockH - top };
  }
  Robot.setFrame(rect, w, h);
}
new ResizeObserver(layout).observe(app);
// the app never scrolls (focus or scrollIntoView could otherwise shift the whole screen)
app.addEventListener('scroll', () => { app.scrollTop = 0; app.scrollLeft = 0; });
addEventListener('resize', layout);

/* =====================================================================
 * Background motion (drifting squares, as in the forum identity)
 * ===================================================================== */
(() => {
  const fx = $('#bgfx');
  for (let i = 0; i < 14; i++) {
    const el = document.createElement('i');
    const s = 2 + Math.random() * 5;
    el.style.cssText = `--x:${Math.random() * 100}%;--s:${s}cqmin;--o:${(0.15 + Math.random() * 0.3).toFixed(2)};--d:${18 + Math.random() * 20}s;--dl:${-Math.random() * 30}s`;
    fx.appendChild(el);
  }
})();

/* =====================================================================
 * Sound effects (synthesised, no files needed)
 * ===================================================================== */
const Snd = (() => {
  let ctx = null;
  const tones = {
    tap: [[660, 0.05]], open: [[520, 0.06], [780, 0.08]], close: [[700, 0.05], [460, 0.07]],
    listen: [[600, 0.07], [900, 0.1]], send: [[900, 0.06], [600, 0.08]], start: [[440, 0.08], [660, 0.08], [880, 0.12]],
    right: [[660, 0.08], [880, 0.08], [1320, 0.16]], wrong: [[300, 0.12], [220, 0.18]], tick: [[1200, 0.03]],
    win: [[523, 0.1], [659, 0.1], [784, 0.1], [1046, 0.25]],
  };
  return {
    play(name) {
      if (!settings.volume) return;
      try {
        ctx ||= new AudioContext();
        let t = ctx.currentTime;
        for (const [f, d] of tones[name] || []) {
          const o = ctx.createOscillator(), g = ctx.createGain();
          o.type = 'sine';
          o.frequency.value = f;
          g.gain.setValueAtTime(0.0001, t);
          g.gain.exponentialRampToValueAtTime(0.12 * settings.volume, t + 0.01);
          g.gain.exponentialRampToValueAtTime(0.0001, t + d);
          o.connect(g).connect(ctx.destination);
          o.start(t);
          o.stop(t + d + 0.02);
          t += d * 0.9;
        }
      } catch { /* audio not available */ }
    },
  };
})();

/* =====================================================================
 * Anonymous usage statistics (kept on this device only, no personal data)
 * ===================================================================== */
const Stats = {
  data: store.get('stats', { sessions: 0, seconds: 0, questions: 0, voice: 0, quizzes: 0, topics: {} }),
  add(k, n = 1) { this.data[k] = (this.data[k] || 0) + n; store.set('stats', this.data); },
  topic(id) { this.data.topics[id] = (this.data.topics[id] || 0) + 1; store.set('stats', this.data); },
  text() {
    const d = this.data;
    const avg = d.sessions ? Math.round(d.seconds / d.sessions) : 0;
    const top = Object.entries(d.topics).sort((a, b) => b[1] - a[1]).slice(0, 5)
      .map(([id, n]) => `${TOPICS.find((t) => t.id === id)?.label || id}: ${n}`).join('، ') || '—';
    return `الجلسات: ${d.sessions} · متوسط مدة التفاعل: ${avg} ث\nالأسئلة: ${d.questions} (منها صوتية: ${d.voice}) · التحديات: ${d.quizzes}\nأكثر المواضيع: ${top}`;
  },
};

/* =====================================================================
 * Status, push-to-talk button, captions
 * ===================================================================== */
const STATUS_TEXT = { idle: 'جاهز', connecting: 'يتصل...', ready: 'الميكروفون متوقف', listening: 'تستمع إليك', thinking: 'تفكر...', speaking: 'تتحدث' };
const MIC_TEXT = {
  idle: ['المس الشاشة للبدء', 'ثم تحدث مع المساعدة الذكية مباشرة'],
  connecting: ['لحظة، أجهّز المحادثة...', ''],
  listening: ['تحدث الآن، المساعدة تستمع', 'لا حاجة للضغط على أي زر'],
  thinking: ['المساعدة تفكر...', ''],
  speaking: ['المساعدة تتحدث', 'يمكنك مقاطعتها بالكلام'],
  ready: ['الميكروفون متوقف', 'المس هنا لتشغيله'],
};
let uiState = 'idle';
function setUiState(s) {
  uiState = s;
  $('#status').dataset.state = s === 'ready' ? 'idle' : s;
  $('#statusText').textContent = STATUS_TEXT[s] || '';
  const mic = $('#micBtn');
  for (const c of ['listening', 'thinking', 'speaking']) mic.classList.toggle(c, s === c);
  mic.classList.toggle('muted', s === 'ready');
  $('#micSlash').hidden = s !== 'ready';
  const [label, hint] = MIC_TEXT[session.active ? s : 'idle'] || MIC_TEXT.idle;
  $('#micLabel').textContent = label;
  $('#micHint').textContent = hint;
  Robot.setState({ thinking: 'thinking', speaking: 'speaking' }[s] || (session.active ? 'idle' : 'attract'));
  if (s === 'speaking') touch();
}

// while listening hands-free, Mohammed turns attentive only when the visitor is actually talking
let heardAt = 0;
function micLoop() {
  const lvl = voice?.connected ? voice.inputLevel() : 0;
  if (lvl > 0.06) heardAt = performance.now();
  $('#micBtn').style.setProperty('--lvl', (0.3 + Math.min(1, lvl * 4) * 2.2).toFixed(2));
  if (uiState === 'listening') Robot.setState(performance.now() - heardAt < 1200 ? 'listening' : 'idle');
  requestAnimationFrame(micLoop);
}

const captionEl = $('#caption');
let captionTimer = 0, captionHide = 0;
function showCaption(text, who = 'bot') {
  clearInterval(captionTimer);
  clearTimeout(captionHide);
  captionEl.classList.toggle('user', who === 'user');
  captionEl.classList.add('show');
  const label = who === 'user' ? 'أنت:' : 'المساعدة:';
  const head = `<span class="who">${label}</span>`;
  if (who === 'user') {
    captionEl.innerHTML = `<span>${head}${esc(text)}</span>`;
    return;
  }
  // reveal the answer word by word, roughly at speaking pace
  const words = text.split(/\s+/);
  let n = 0;
  captionTimer = setInterval(() => {
    n++;
    captionEl.innerHTML = `<span>${head}${esc(words.slice(0, n).join(' '))}</span>`;
    if (n >= words.length) clearInterval(captionTimer);
  }, 330);
}
function hideCaption(delay = 2500) {
  clearTimeout(captionHide);
  captionHide = setTimeout(() => captionEl.classList.remove('show'), delay);
}
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* =====================================================================
 * Information cards
 * ===================================================================== */
const cardLayer = $('#cardLayer');
function qrSVG(url) {
  try {
    const q = window.qrcode(0, 'M');
    q.addData(url);
    q.make();
    return q.createSvgTag({ cellSize: 4, margin: 1, scalable: true });
  } catch { return ''; }
}
function cardHTML(c) {
  const i = (n) => `style="--i:${n}"`;
  let main = '';
  if (c.type === 'stats') {
    main = `<div class="stats">${c.items.map((s, n) => `<div class="stat" ${i(n)}><strong data-count="${s.value ?? ''}" data-prefix="${s.prefix || ''}" data-suffix="${s.suffix || ''}">${s.text || (s.prefix || '') + '0'}</strong><small>${esc(s.label)}</small></div>`).join('')}</div>`;
  } else if (c.type === 'info') {
    main = `<ul class="lines">${c.lines.map(([ic, t], n) => `<li ${i(n)}><span>${ic}</span><span>${esc(t)}</span></li>`).join('')}</ul>`;
  } else if (c.type === 'steps') {
    main = `<ol class="steps">${c.steps.map((t, n) => `<li ${i(n)}>${esc(t)}</li>`).join('')}</ol>`;
    if (c.bars) main += `<div class="bars"><h3>${esc(c.barsTitle || '')}</h3>${c.bars.map(([l, v]) => `<div class="bar"><span>${esc(l)}</span><div><i data-w="${v}"></i></div><b>${v}%</b></div>`).join('')}</div>`;
  } else if (c.type === 'tiles') {
    main = `<div class="tiles">${c.tiles.map((t, n) => `<button type="button" class="tile" ${i(n)} ${t.url ? `data-qr="${esc(t.url)}"` : `data-info="${esc(t.info || '')}"`} data-label="${esc(t.label)}"><span>${t.icon}</span>${esc(t.label)}</button>`).join('')}</div>`;
  } else if (c.type === 'facts') {
    main = `<ul class="lines">${c.facts.map((t, n) => `<li ${i(n)}><span>•</span><span>${esc(t)}</span></li>`).join('')}</ul>`;
  }
  if (c.type !== 'list' && c.chips) main += `<div class="chips">${c.chips.map((t, n) => `<span ${i(n)}>${esc(t)}</span>`).join('')}</div>`;
  if (c.type === 'list') main = `<div class="chips">${c.chips.map((t, n) => `<span ${i(n)}>${esc(t)}</span>`).join('')}</div>`;
  if (c.hint) main += `<p class="card-hint">${esc(c.hint)}</p>`;
  if (c.note) main += `<p class="card-note">${esc(c.note)}</p>`;
  if (c.action) main += `<div class="card-action"><button type="button" class="btn gold" data-action="quiz">${esc(c.action.label)}</button></div>`;
  const qr = c.qr ? `<div class="card-qr"><button type="button" class="qr" data-qr="${esc(c.qr.url)}" data-label="${esc(c.qr.label)}">${qrSVG(c.qr.url)}</button><span>📱 ${esc(c.qr.label)}</span></div>` : '';
  return `<article class="card"><div class="card-head"><div class="card-icon">${c.icon || '📌'}</div><h2>${esc(c.title)}${c.subtitle ? `<small>${esc(c.subtitle)}</small>` : ''}</h2><button type="button" class="card-close" data-action="close" aria-label="إغلاق">✕</button></div><div class="card-body"><div class="card-main">${main}</div>${qr}</div></article>`;
}

function showCard(spec) {
  let c = typeof spec === 'string' ? CARDS[spec] : spec;
  if (typeof c === 'function') c = c(brain?.factsOf || (() => []));
  if (!c) return;
  if (!c.type) { // a card built from the knowledge base search
    c = { type: 'facts', icon: '📌', title: c.title, facts: c.facts.slice(0, 3), qr: c.src ? { url: c.src, label: 'المصدر' } : null };
  }
  cardLayer.innerHTML = cardHTML(c);
  Snd.play('open');
  const card = cardLayer.firstElementChild;
  requestAnimationFrame(() => {
    app.style.setProperty('--card-h', isPortrait() ? `${card.offsetHeight + 8}px` : '0px');
    // counters and bars animate in
    card.querySelectorAll('[data-count]').forEach((el) => {
      const to = +el.dataset.count;
      if (!to) return;
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / 1400);
        el.textContent = el.dataset.prefix + Math.round(to * (1 - (1 - p) ** 3)).toLocaleString('en-US') + el.dataset.suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    card.querySelectorAll('[data-w]').forEach((el) => { el.style.width = el.dataset.w + '%'; });
  });
  // Mohammed points at the card and looks at it
  Robot.play('point', { dir: isPortrait() ? 'down' : 'right' });
  Robot.lookAt(isPortrait() ? 0 : 0.7, isPortrait() ? -0.75 : -0.1, 3);
}
function hideCard() {
  const card = cardLayer.firstElementChild;
  app.style.setProperty('--card-h', '0px');
  if (!card) return;
  card.classList.add('out');
  setTimeout(() => card.remove(), 300);
}
cardLayer.addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.action === 'close') { Snd.play('close'); hideCard(); }
  else if (b.dataset.action === 'quiz') startQuiz();
  else if (b.dataset.qr) openQR(b.dataset.qr, b.dataset.label);
  else if (b.dataset.info !== undefined) {
    // corner tiles: show what the corner contains
    Snd.play('tap');
    b.parentElement.querySelectorAll('.tile').forEach((t) => t.classList.toggle('on', t === b));
    const hint = b.closest('.card').querySelector('.card-hint');
    if (hint) hint.textContent = `${b.dataset.label}: ${b.dataset.info}`;
    touch();
  }
});

function openQR(url, label) {
  Snd.play('open');
  const z = $('#qrZoom');
  z.innerHTML = `<div class="qr">${qrSVG(url)}</div><b>${esc(label || '')}</b><span>امسح الرمز بكاميرا جوالك لفتح الصفحة</span><small>${esc(url.replace(/^https?:\/\//, ''))}</small><span>المس الشاشة للإغلاق</span>`;
  z.hidden = false;
}
$('#qrZoom').addEventListener('click', () => { $('#qrZoom').hidden = true; Snd.play('close'); });

/* =====================================================================
 * Voice and conversation
 * ===================================================================== */
let lastAnswer = '';
const voice = createVoice({
  agentId: USE_AGENT ? ELEVEN_AGENT_ID : '',
  onState: (s) => {
    if (s === 'off') { if (session.active && !quiz.on) setUiState('idle'); return; }
    setUiState(s);
    if (s === 'ready') hideCaption();
  },
  onUserText: (text) => {
    touch();
    Stats.add('questions');
    Stats.add('voice');
    showCaption(text, 'user');
    reactTo(text);
  },
  onAgentText: (text) => {
    lastAnswer = text;
    showCaption(text, 'bot');
  },
  onDisconnect: () => {
    // the connection dropped during a visit: reconnect quietly once
    if (session.active && !quiz.on && !session.ending) setTimeout(() => voice.connect({ silent: true }), 800);
  },
});
voice.setVolume(settings.volume);
Robot.setLipSource(() => voice.lipSample());

// matching card + gesture for a question (the spoken answer comes from the agent)
const NO_ANSWER = { card: null, gesture: 'smallNod', speak: 'لحظة من فضلك، أجهّز المعلومات.' };
function reactTo(text) {
  const a = brain ? brain.answer(text) : NO_ANSWER;
  if (a.card) setTimeout(() => showCard(a.card), 400);
  else hideCard();
  if (a.gesture && !a.card) Robot.play(a.gesture === 'shrug' ? 'smallNod' : a.gesture);
  return a;
}

async function ask(text, topicId) {
  text = text.trim();
  if (!text || !session.active) return;
  touch();
  Stats.add('questions');
  if (topicId) Stats.topic(topicId);
  showCaption(text, 'user');
  Snd.play('send');
  if (voice.connected) {
    reactTo(text);
    voice.sendText(text);
    return;
  }
  // offline / no agent: local answers + browser voice
  await brainReady;
  const a = reactTo(text);
  setUiState('thinking');
  await new Promise((r) => setTimeout(r, 500));
  speakLocal(a.speak);
}

async function speakLocal(text) {
  lastAnswer = text;
  setUiState('speaking');
  showCaption(text, 'bot');
  pauseLocalMic();
  await voice.speakLocal(text, Robot);
  if (uiState === 'speaking') {
    hideCaption();
    if (session.active && !quiz.on) resumeLocalMic(); else setUiState(session.active ? 'ready' : 'idle');
  }
}

/* hands-free listening without the agent: continuous browser speech recognition */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let rec = null, localMicWanted = true, localMicPaused = false;
function startLocalMic() {
  if (!SR || rec || !session.active || voice.connected || quiz.on) return false;
  rec = new SR();
  rec.lang = 'ar-SA';
  rec.continuous = true;
  rec.interimResults = true;
  rec.onresult = (e) => {
    let interim = '', finalText = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) finalText += e.results[i][0].transcript;
      else interim += e.results[i][0].transcript;
    }
    if (interim) { heardAt = performance.now(); showCaption(interim, 'user'); }
    if (finalText.trim()) { Stats.add('voice'); ask(finalText); }
  };
  // recognition stops by itself after silence: start it again while the visit goes on
  rec.onend = () => { rec = null; if (session.active && localMicWanted && !localMicPaused && !quiz.on) setTimeout(startLocalMic, 300); };
  rec.onerror = (e) => { if (e.error === 'not-allowed') { localMicWanted = false; setUiState('ready'); } };
  try { rec.start(); setUiState('listening'); return true; } catch { rec = null; return false; }
}
function stopLocalMic() { const r = rec; rec = null; r?.abort(); }
function pauseLocalMic() { localMicPaused = true; stopLocalMic(); }
function resumeLocalMic() {
  localMicPaused = false;
  if (localMicWanted && startLocalMic()) return;
  setUiState(localMicWanted && SR ? 'listening' : 'ready');
}

// the microphone bar: start a visit, or mute / unmute the microphone
$('#micBtn').addEventListener('click', async () => {
  if (!session.active) { await startSession(); return; }
  Snd.play('tap');
  if (voice.connected) { voice.setMic(!voice.micOn); return; }
  if (!SR) { openKeyboard(); return; }
  localMicWanted = !localMicWanted;
  if (localMicWanted) resumeLocalMic(); else { stopLocalMic(); setUiState('ready'); }
});

$('#replayBtn').addEventListener('click', () => {
  if (!session.active || !lastAnswer) return;
  Snd.play('tap');
  if (voice.connected) { voice.sendText('من فضلك أعد إجابتك الأخيرة باختصار'); showCaption('أعد الإجابة من فضلك', 'user'); }
  else speakLocal(lastAnswer);
});

/* topic buttons */
const topicsEl = $('#topics');
topicsEl.innerHTML = TOPICS.map((t) => `<button type="button" role="listitem" class="topic${t.quiz ? ' topic-quiz' : ''}" data-id="${t.id}">${t.icon} ${esc(t.label)}</button>`).join('');
topicsEl.addEventListener('click', async (e) => {
  const b = e.target.closest('.topic');
  if (!b) return;
  Snd.play('tap');
  const t = TOPICS.find((x) => x.id === b.dataset.id);
  if (!session.active) await startSession({ quiet: true });
  if (t.quiz) { startQuiz(); return; }
  topicsEl.querySelectorAll('.topic').forEach((x) => x.classList.toggle('active', x === b));
  ask(t.ask, t.id);
});

/* =====================================================================
 * Sessions: welcome screen → visit → back to welcome after inactivity
 * ===================================================================== */
const session = { active: false, started: 0, ending: false, lastTouch: 0 };
function touch() { session.lastTouch = Date.now(); }

async function startSession({ quiet = false } = {}) {
  if (session.active) return;
  Object.assign(session, { active: true, started: Date.now(), ending: false });
  touch();
  Stats.add('sessions');
  Snd.play('start');
  $('#attract').classList.add('hide');
  if (settings.kiosk) enterFullscreen();
  Robot.play('welcome');
  setUiState('idle');
  if (USE_AGENT) {
    setUiState('connecting');
    // the agent says its own greeting when it connects (unless a topic was pressed)
    if (await voice.connect({ silent: quiet })) return;
  }
  localMicWanted = true;
  if (quiet) resumeLocalMic();
  else speakLocal(`السلام عليكم! أنا المساعدة الذكية لجامعة جازان، حيّاك الله. تحدث معي مباشرة، أو اختر موضوعاً من الأعلى.`);
}

async function endSession() {
  if (!session.active) return;
  session.ending = true;
  Stats.add('seconds', Math.round((Date.now() - session.started) / 1000));
  closeQuiz(false);
  closeKeyboard();
  stopLocalMic();
  voice.stopLocal();
  await voice.disconnect();
  hideCard();
  captionEl.classList.remove('show');
  topicsEl.querySelectorAll('.topic').forEach((x) => x.classList.remove('active'));
  $('#idleWarn').hidden = true;
  $('#qrZoom').hidden = true;
  lastAnswer = '';
  Object.assign(session, { active: false, ending: false });
  setUiState('idle');
  $('#attract').classList.remove('hide');
  Robot.setState('attract');
}

$('#attract').addEventListener('pointerdown', () => startSession());
$('#homeBtn').addEventListener('click', () => { Snd.play('close'); endSession(); });

// inactivity: warn, then return to the welcome screen (ends the visitor's session)
let warnLeft = 0;
setInterval(() => {
  if (!session.active || ['thinking', 'speaking', 'connecting'].includes(uiState)) { if (session.active) touch(); return; }
  const idle = (Date.now() - session.lastTouch) / 1000;
  const warn = $('#idleWarn');
  if (idle > settings.idleSecs) {
    if (warn.hidden) { warn.hidden = false; warnLeft = 10; Snd.play('tick'); }
    $('#idleCount').textContent = warnLeft;
    if (--warnLeft < 0) endSession();
  }
}, 1000);
app.addEventListener('pointerdown', (e) => {
  touch();
  const [x, y] = toApp(e.clientX, e.clientY), [w, h] = appSize();
  Robot.setPointer((x / w) * 2 - 1, -(y / h) * 2 + 1);
  if (!$('#idleWarn').hidden && !e.target.closest('#idleWarn')) $('#idleWarn').hidden = true;
}, true);
$('#stayBtn').addEventListener('click', () => { $('#idleWarn').hidden = true; touch(); });

// touching Mohammed himself
Robot.canvas.addEventListener('click', (e) => {
  if (!session.active) return;
  const [x, y] = toApp(e.clientX, e.clientY), [w, h] = appSize();
  const part = Robot.hitTest((x / w) * 2 - 1, -(y / h) * 2 + 1);
  if (part) Robot.play(part === 'head' ? 'laugh' : part === 'antenna' ? 'surprised' : 'wave');
});

/* =====================================================================
 * On-screen keyboard (Arabic / English)
 * ===================================================================== */
const KEYS = {
  ar: ['ض ص ث ق ف غ ع ه خ ح ج', 'ش س ي ب ل ا ت ن م ك ط', 'ذ ئ ء ؤ ر لا ى ة و ز ظ د'],
  en: ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m'],
};
let kbdLang = 'ar';
const kbdInput = $('#kbdInput');
function renderKeys() {
  const rows = KEYS[kbdLang].map((r) => `<div class="vkbd-row">${r.split(' ').map((k) => `<button type="button" class="key" data-k="${k}">${k}</button>`).join('')}</div>`);
  rows.push(`<div class="vkbd-row"><button type="button" class="key mid" data-k="lang">${kbdLang === 'ar' ? 'English' : 'عربي'}</button><button type="button" class="key mid" data-k="؟">؟</button><button type="button" class="key wide" data-k="space">مسافة</button><button type="button" class="key mid" data-k="back">⌫</button><button type="button" class="key mid send" data-k="send">إرسال</button></div>`);
  $('#kbdKeys').innerHTML = rows.join('');
}
function openKeyboard() {
  if (!session.active) startSession({ quiet: true });
  renderKeys();
  kbdInput.readOnly = settings.kiosk;
  kbdInput.inputMode = settings.kiosk ? 'none' : 'text';
  $('#keyboard').hidden = false;
  Snd.play('open');
  if (!settings.kiosk) kbdInput.focus({ preventScroll: true });
}
function closeKeyboard() { $('#keyboard').hidden = true; kbdInput.value = ''; }
$('#kbdBtn').addEventListener('click', openKeyboard);
$('#kbdClose').addEventListener('click', () => { Snd.play('close'); closeKeyboard(); });
$('#kbdKeys').addEventListener('pointerdown', (e) => {
  const b = e.target.closest('.key');
  if (!b) return;
  e.preventDefault(); // keep focus/caret in the input
  Snd.play('tick');
  const k = b.dataset.k;
  if (k === 'lang') { kbdLang = kbdLang === 'ar' ? 'en' : 'ar'; renderKeys(); }
  else if (k === 'space') kbdInput.value += ' ';
  else if (k === 'back') kbdInput.value = kbdInput.value.slice(0, -1);
  else if (k === 'send') { const v = kbdInput.value; closeKeyboard(); ask(v); }
  else kbdInput.value += k;
  touch();
});
kbdInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { const v = kbdInput.value; closeKeyboard(); ask(v); } });

/* =====================================================================
 * Quiz «تحدي المعرفة»: 5 questions, 20 s each, 10 points per right answer
 * ===================================================================== */
const QUIZ_LEN = 5, QUIZ_SECS = 20;
const quiz = { on: false, list: [], i: 0, score: 0, timer: 0, left: 0, locked: false };
const quizEl = $('#quiz');
const shuffle = (a) => a.map((v) => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map((x) => x[1]);
const say = (t) => { lastAnswer = t; showCaption(t, 'bot'); setUiState('speaking'); return voice.speakLocal(t, Robot).then(() => { if (quiz.on && uiState === 'speaking') setUiState('ready'); }); };

async function startQuiz() {
  if (!session.active) await startSession({ quiet: true });
  // the quiz uses the built-in voice; pause the agent so it doesn't listen meanwhile
  if (voice.connected) await voice.disconnect();
  pauseLocalMic();
  hideCard();
  closeKeyboard();
  Stats.add('quizzes');
  Stats.topic('quiz');
  Object.assign(quiz, { on: true, list: shuffle(QUIZ.questions).slice(0, QUIZ_LEN), i: 0, score: 0 });
  quizEl.hidden = false;
  Snd.play('start');
  Robot.play('presentL');
  await say('يالله نبدأ تحدي المعرفة! خمسة أسئلة، ولكل إجابة صحيحة عشر نقاط.');
  if (quiz.on) showQuestion();
}

function showQuestion() {
  const q = quiz.list[quiz.i];
  const opts = shuffle(q.options.map((t, k) => ({ t, right: k === q.answer })));
  quiz.locked = false;
  quiz.left = QUIZ_SECS;
  quizEl.innerHTML = `<div class="quiz-top"><span>السؤال ${quiz.i + 1} من ${QUIZ_LEN}</span><b>${quiz.score} نقطة</b><button type="button" class="quiz-close" data-q="close">✕ إنهاء</button></div>
    <div class="timer" id="qTimer"><i></i></div><h2>${esc(q.q)}</h2>
    <div class="options">${opts.map((o, k) => `<button type="button" class="opt" style="--i:${k}" data-right="${o.right ? 1 : 0}"><b>${'أبج'[k]}</b>${esc(o.t)}</button>`).join('')}</div><div id="qWhy"></div>`;
  say(q.q);
  const bar = quizEl.querySelector('#qTimer i');
  clearInterval(quiz.timer);
  const t0 = performance.now();
  quiz.timer = setInterval(() => {
    const p = Math.max(0, 1 - (performance.now() - t0) / (QUIZ_SECS * 1000));
    bar.style.transform = `scaleX(${p})`;
    quizEl.querySelector('#qTimer')?.classList.toggle('low', p < 0.25);
    const secs = Math.ceil(p * QUIZ_SECS);
    if (secs !== quiz.left) { quiz.left = secs; if (secs <= 5 && secs > 0) Snd.play('tick'); }
    if (p <= 0) answerQuiz(null);
  }, 100);
}

async function answerQuiz(btn) {
  if (quiz.locked) return;
  quiz.locked = true;
  clearInterval(quiz.timer);
  touch();
  const q = quiz.list[quiz.i];
  const right = btn?.dataset.right === '1';
  quizEl.querySelectorAll('.opt').forEach((o) => { if (o.dataset.right === '1') o.classList.add('right'); });
  if (btn && !right) btn.classList.add('wrong');
  const src = QUIZ.sources[q.src];
  quizEl.querySelector('#qWhy').innerHTML = `<div class="why">${right ? '✅' : '💡'} ${esc(q.why)}${src ? `<small>📚 المصدر: ${esc(src.abbr)} – ${esc(src.title)}</small>` : ''}</div>`;
  if (right) {
    quiz.score += 10;
    quizEl.querySelector('.quiz-top b').textContent = `${quiz.score} نقطة`;
    Snd.play('right');
    Robot.play('celebrate');
    await say(['أحسنت! إجابة صحيحة.', 'ممتاز! عشر نقاط لك.', 'برافو عليك!'][Math.floor(Math.random() * 3)]);
  } else {
    Snd.play('wrong');
    Robot.play('shrug');
    await say(btn ? `للأسف لا. ${q.why}` : `انتهى الوقت! ${q.why}`);
  }
  if (!quiz.on) return;
  await new Promise((r) => setTimeout(r, 900));
  if (!quiz.on) return;
  if (++quiz.i < QUIZ_LEN) showQuestion();
  else showResult();
}

function showResult() {
  const max = QUIZ_LEN * 10, s = quiz.score;
  const stars = s >= max * 0.8 ? 3 : s >= max * 0.5 ? 2 : s > 0 ? 1 : 0;
  quizEl.innerHTML = `<div class="result"><div class="stars">${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}</div><div class="score">${s}</div><p>من ${max} نقطة</p>
    <div class="result-actions"><button type="button" class="btn gold" data-q="again">🔁 تحدٍّ جديد</button><button type="button" class="btn ghost" data-q="close">العودة للمساعدة</button></div></div>`;
  if (stars >= 2) { Snd.play('win'); confetti(); Robot.play('dance'); } else Robot.play('chest');
  say(stars === 3 ? `ما شاء الله! حصلت على ${s} نقطة من ${max}. أنت بطل التحول الرقمي!` : stars === 2 ? `أحسنت! حصلت على ${s} نقطة. أداء رائع!` : `حصلت على ${s} نقطة. جرّب مرة ثانية وأكيد بتتحسن!`);
}

function closeQuiz(resume = true) {
  if (!quiz.on) return;
  quiz.on = false;
  clearInterval(quiz.timer);
  quizEl.hidden = true;
  voice.stopLocal();
  setUiState('ready');
  if (resume && session.active) {
    if (USE_AGENT) voice.connect({ silent: true }).then((ok) => { if (!ok) resumeLocalMic(); });
    else resumeLocalMic();
  }
}
quizEl.addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.classList.contains('opt')) answerQuiz(b);
  else if (b.dataset.q === 'close') { Snd.play('close'); closeQuiz(); }
  else if (b.dataset.q === 'again') { quiz.on = false; startQuiz(); }
});
$('#quizBtn').addEventListener('click', () => { Snd.play('tap'); startQuiz(); });

function confetti() {
  const c = document.createElement('div');
  c.className = 'confetti';
  const colors = ['#2bb673', '#ffbd59', '#8aceff', '#ffffff'];
  for (let i = 0; i < 70; i++) {
    const p = document.createElement('i');
    p.style.cssText = `left:${Math.random() * 100}%;background:${colors[i % 4]};animation-duration:${2 + Math.random() * 2}s;animation-delay:${Math.random() * 0.6}s`;
    c.appendChild(p);
  }
  app.appendChild(c);
  setTimeout(() => c.remove(), 5000);
}

/* =====================================================================
 * Settings: side tab at the screen edge (also long-press the logo for 2 s, or F2)
 * ===================================================================== */
const settingsEl = $('#settings');
function openSettings() {
  $('#rotSeg').innerHTML = [0, 90, 180, 270].map((r) => `<button type="button" data-r="${r}" class="${r === settings.rotation ? 'on' : ''}">${r}°</button>`).join('');
  $('#kioskChk').checked = settings.kiosk;
  $('#idleSecs').value = settings.idleSecs;
  $('#statsOut').textContent = Stats.text();
  settingsEl.classList.add('open');
  app.classList.add('drawer-open');
  $('#settingsTab').setAttribute('aria-expanded', 'true');
}
function closeSettings() {
  settingsEl.classList.remove('open');
  app.classList.remove('drawer-open');
  $('#settingsTab').setAttribute('aria-expanded', 'false');
}
const settingsOpen = () => settingsEl.classList.contains('open');
$('#settingsTab').addEventListener('click', () => { Snd.play('tap'); settingsOpen() ? closeSettings() : openSettings(); });
$('#drawerShade').addEventListener('click', closeSettings);
let pressTimer = 0;
$('#brand').addEventListener('pointerdown', () => {
  $('#brand').classList.add('pressing');
  pressTimer = setTimeout(() => { $('#brand').classList.remove('pressing'); openSettings(); }, 2000);
});
['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => $('#brand').addEventListener(ev, () => { clearTimeout(pressTimer); $('#brand').classList.remove('pressing'); }));
$('#settingsClose').addEventListener('click', closeSettings);
function setRotation(r) {
  settings.rotation = ((r % 360) + 360) % 360;
  save();
  applyRotation();
  requestAnimationFrame(layout);
}
// visible rotate button: each press turns the page 90° (0 → 90 → 180 → 270)
$('#rotateBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  Snd.play('tap');
  setRotation(settings.rotation + 90);
  openSettings();
});
$('#rotSeg').addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  settings.rotation = +b.dataset.r;
  save();
  applyRotation();
  openSettings();
  requestAnimationFrame(layout);
});

/* volume controls in the header */
let volBeforeMute = 0.9;
function setVolume(v) {
  settings.volume = Math.round(Math.min(1, Math.max(0, v)) * 20) / 20;
  voice.setVolume(settings.volume);
  save();
  updateVolumeUI();
}
function updateVolumeUI() {
  const pct = Math.round(settings.volume * 100);
  $('#volTop').value = pct;
  $('#volLabel').textContent = `${pct}%`;
  $('#muteBtn').textContent = pct === 0 ? '🔇' : pct < 50 ? '🔉' : '🔊';
  $('#muteBtn').setAttribute('aria-label', pct === 0 ? 'تشغيل الصوت' : 'كتم الصوت');
}
$('#volTop').addEventListener('input', (e) => setVolume(e.target.value / 100));
$('#volDown').addEventListener('click', () => { setVolume(settings.volume - 0.1); Snd.play('tick'); });
$('#volUp').addEventListener('click', () => { setVolume(settings.volume + 0.1); Snd.play('tick'); });
$('#muteBtn').addEventListener('click', () => {
  if (settings.volume > 0) { volBeforeMute = settings.volume; setVolume(0); }
  else setVolume(volBeforeMute || 0.9);
});

/* full-screen toggle in the header */
const fsSupported = !!(document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen);
function updateFsUI() {
  const on = !!(document.fullscreenElement || document.webkitFullscreenElement);
  $('#fsTopBtn').hidden = !fsSupported;
  $('#fsLabel').textContent = on ? 'خروج من ملء الشاشة' : 'ملء الشاشة';
  $('#fsIcon').setAttribute('d', on ? 'M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5' : 'M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5');
}
$('#fsTopBtn').addEventListener('click', () => {
  Snd.play('tap');
  if (document.fullscreenElement || document.webkitFullscreenElement) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  else enterFullscreen();
});
document.addEventListener('fullscreenchange', () => { updateFsUI(); requestAnimationFrame(layout); });
document.addEventListener('webkitfullscreenchange', updateFsUI);
$('#kioskChk').addEventListener('change', (e) => { settings.kiosk = e.target.checked; save(); if (settings.kiosk) enterFullscreen(); });
$('#idleSecs').addEventListener('change', (e) => { settings.idleSecs = Math.max(20, +e.target.value || 60); save(); });
$('#statsReset').addEventListener('click', () => { Stats.data = { sessions: 0, seconds: 0, questions: 0, voice: 0, quizzes: 0, topics: {} }; store.set('stats', Stats.data); $('#statsOut').textContent = Stats.text(); });
$('#reloadBtn').addEventListener('click', () => location.reload());
$('#testBtn').addEventListener('click', async () => {
  const out = $('#testOut');
  out.textContent = 'جارِ الاختبار...';
  if (session.active) await endSession();
  const r = await voice.selfTest();
  const ok = (b) => (b ? '✅' : '❌');
  out.textContent = `${ok(navigator.onLine)} الاتصال بالإنترنت\n${ok(r.client)} تحميل مكتبة الصوت\n${ok(r.mic)} الميكروفون\n${ok(r.agent)} الاتصال بوكيل المحادثة (ElevenLabs)\n${r.agent ? 'جاهز للعرض.' : 'ستعمل المساعدة بالإجابات المحلية وصوت المتصفح.'}`;
});

/* =====================================================================
 * Kiosk mode: full screen, no context menu / shortcuts / back navigation
 * ===================================================================== */
function enterFullscreen() {
  const el = document.documentElement;
  if (!document.fullscreenElement) (el.requestFullscreen || el.webkitRequestFullscreen)?.call(el).catch?.(() => {});
}
addEventListener('contextmenu', (e) => e.preventDefault());
addEventListener('dragstart', (e) => e.preventDefault());
addEventListener('gesturestart', (e) => e.preventDefault());
addEventListener('keydown', (e) => {
  if (e.key === 'F2') { e.preventDefault(); settingsOpen() ? closeSettings() : openSettings(); return; }
  if (!settings.kiosk) return;
  const k = e.key.toLowerCase();
  const blocked = ['f5', 'f3', 'f6', 'f7', 'f12', 'browserback', 'browserforward'].includes(k)
    || ((e.ctrlKey || e.metaKey) && ['r', 'w', 'n', 't', 'p', 's', 'o', 'l', 'f', 'u', 'h', 'j', '+', '-', '=', '0'].includes(k))
    || (e.altKey && ['arrowleft', 'arrowright', 'home'].includes(k));
  if (blocked) e.preventDefault();
});
addEventListener('wheel', (e) => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
if (settings.kiosk) {
  history.pushState(null, '', location.href);
  addEventListener('popstate', () => history.pushState(null, '', location.href));
}

/* =====================================================================
 * Recovery: reload on lost graphics, on repeated errors, or after a long run
 * ===================================================================== */
addEventListener('robot-context-lost', () => setTimeout(() => location.reload(), 1500));
let errors = [];
addEventListener('error', () => {
  errors = errors.filter((t) => Date.now() - t < 60000).concat(Date.now());
  if (settings.kiosk && errors.length > 5 && !session.active) location.reload();
});
addEventListener('online', () => { if (session.active && USE_AGENT && !voice.connected && !quiz.on) voice.connect({ silent: true }); });
// daily refresh at night in kiosk mode keeps memory fresh on long exhibitions
setInterval(() => { if (settings.kiosk && !session.active && new Date().getHours() === 4) location.reload(); }, 30 * 60000);
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register('sw.js').catch(() => {});

/* =====================================================================
 * Start-up
 * ===================================================================== */
applyRotation();
updateVolumeUI();
updateFsUI();
layout();
micLoop();
$('#loaderBar').style.width = '70%';
Robot.onReady(() => {
  $('#loaderBar').style.width = '100%';
  setTimeout(() => { $('#loader').classList.add('hide'); layout(); }, 350);
  // after the first frame: fetch what is needed later (QR codes, voice client, answers)
  setTimeout(() => {
    const qr = document.createElement('script');
    qr.src = 'vendor/qrcode.js';
    document.head.appendChild(qr);
    voice.preload();
  }, 600);
  Robot.setState('attract');
});

window.mohammed = { Robot, voice, startSession, endSession, startQuiz, ask, showCard, settings };
