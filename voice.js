// Voice for Mohammed.
//  - Human voice: an ElevenLabs conversational agent (voice + knowledge base live on
//    ElevenLabs; the page only needs the agent's public id, no secret key).
//  - Hands-free: once a visit starts the microphone stays open and the agent detects
//    when the visitor starts and stops talking. The mic can be muted from the screen.
//  - Fallback: the browser's own Arabic voice when the agent cannot be reached.

const CLIENT_URL = 'https://cdn.jsdelivr.net/npm/@elevenlabs/client@1.28.0/+esm';
const PTT_MAX_MS = 15000;      // a single question can't keep the mic open longer
const THINK_TIMEOUT_MS = 12000; // give up waiting for an answer after this

export function createVoice({ agentId, onState = () => {}, onUserText = () => {}, onAgentText = () => {}, onDisconnect = () => {} }) {
  let conv = null;
  let state = 'off';
  let volume = 1;
  let pttTimer = 0, thinkTimer = 0;
  let pttOn = false;
  let micOn = true;

  const set = (s) => { if (s !== state) { state = s; onState(s); } };

  /** silent: start without the spoken greeting (e.g. returning from the quiz) */
  async function connect({ silent = false } = {}) {
    if (conv) return true;
    if (!agentId) return false;
    set('connecting');
    try {
      const { Conversation } = await import(CLIENT_URL);
      conv = await Conversation.startSession({
        agentId,
        connectionType: 'webrtc',
        ...(silent ? { overrides: { agent: { firstMessage: '' } } } : {}),
        onModeChange: ({ mode }) => {
          if (mode === 'speaking') { clearTimeout(thinkTimer); set('speaking'); }
          else set(micOn || pttOn ? 'listening' : 'ready');
        },
        onMessage: ({ message, role, source }) => {
          if (!message) return;
          if ((role || source) === 'user') {
            onUserText(message);
            // the visitor finished a sentence: show "thinking" until the answer starts
            set('thinking');
            clearTimeout(thinkTimer);
            thinkTimer = setTimeout(() => { if (state === 'thinking') set(micOn ? 'listening' : 'ready'); }, THINK_TIMEOUT_MS);
          }
          else onAgentText(message);
        },
        onDisconnect: () => {
          conv = null;
          pttOn = false;
          set('off');
          onDisconnect();
        },
        onError: (m) => console.warn('ElevenLabs:', m),
      });
      conv.setMicMuted(!micOn);
      conv.setVolume({ volume });
      set(micOn ? 'listening' : 'ready');
      return true;
    } catch (err) {
      console.warn('ElevenLabs voice unavailable:', err);
      conv = null;
      set('off');
      return false;
    }
  }

  async function disconnect() {
    clearTimeout(pttTimer);
    clearTimeout(thinkTimer);
    pttOn = false;
    const c = conv;
    conv = null;
    set('off');
    try { await c?.endSession(); } catch { /* already closed */ }
  }

  function pttStart() {
    if (!conv) return false;
    pttOn = true;
    conv.setMicMuted(false);
    set('listening');
    clearTimeout(pttTimer);
    pttTimer = setTimeout(pttStop, PTT_MAX_MS);
    return true;
  }

  function pttStop() {
    if (!conv || !pttOn) return;
    pttOn = false;
    clearTimeout(pttTimer);
    conv.setMicMuted(true);
    set('thinking');
    clearTimeout(thinkTimer);
    thinkTimer = setTimeout(() => { if (state === 'thinking') set('ready'); }, THINK_TIMEOUT_MS);
  }

  function sendText(text) {
    if (!conv) return false;
    conv.sendUserMessage(text);
    set('thinking');
    clearTimeout(thinkTimer);
    thinkTimer = setTimeout(() => { if (state === 'thinking') set(micOn ? 'listening' : 'ready'); }, THINK_TIMEOUT_MS);
    return true;
  }

  // mouth shape from the real voice: loudness opens the jaw, low-frequency weight rounds the lips
  function lipSample() {
    if (!conv || state !== 'speaking') return null;
    const open = Math.min(1, conv.getOutputVolume() * 3.2);
    const fq = conv.getOutputByteFrequencyData();
    let round = 0;
    if (fq) {
      let lo = 0, hi = 0;
      for (let i = 2; i < 12; i++) lo += fq[i];
      for (let i = 24; i < 64; i++) hi += fq[i];
      round = Math.max(0, Math.min(0.8, (lo / 10 - hi / 40) / 160)) * open;
    }
    return [open, round];
  }

  /* ---------------- browser voice (fallback) ---------------- */
  const synth = window.speechSynthesis;
  let arVoice = null, localToken = 0;
  // prefer a female Arabic voice (Jazi is a woman)
  const FEMALE = /hoda|zariyah|salma|amina|amira|laila|layla|mariam|hala|noura|sara|female|woman/i;
  const MALE = /naayf|hamed|shakir|tarik|male|maged|omar/i;
  const pickVoice = () => {
    const ar = (synth?.getVoices() || []).filter((v) => /^ar/i.test(v.lang));
    const score = (v) => (/^ar[-_]SA/i.test(v.lang) ? 4 : 0) + (FEMALE.test(v.name) ? 3 : 0) - (MALE.test(v.name) ? 5 : 0) + (/natural|online|neural/i.test(v.name) ? 2 : 0);
    arVoice = ar.sort((a, b) => score(b) - score(a))[0] || null;
  };
  if (synth) { pickVoice(); synth.addEventListener?.('voiceschanged', pickVoice); }

  /** speak with the browser voice; robot gets letter-based lip sync */
  function speakLocal(text, robot) {
    const token = ++localToken;
    synth?.cancel();
    return new Promise((resolve) => {
      const done = () => { if (token === localToken) resolve(); };
      const est = 900 + text.length * 72;
      if (!synth || volume === 0) {
        robot.speakText(text, text.length / (est / 1000));
        setTimeout(done, est);
        return;
      }
      const parts = text.split(/(?<=[.!؟?،,])\s+/).filter(Boolean);
      let left = parts.length;
      const safety = setTimeout(done, est * 2.5);
      for (const part of parts) {
        const u = new SpeechSynthesisUtterance(part);
        u.lang = arVoice?.lang || 'ar-SA';
        if (arVoice) u.voice = arVoice;
        u.pitch = arVoice && FEMALE.test(arVoice.name) ? 1.05 : 1.25; // higher pitch if only a male voice exists
        u.volume = volume;
        u.onstart = () => robot.speakText(part);
        u.onboundary = (e) => robot.syncText(e.charIndex);
        u.onend = u.onerror = () => { if (--left <= 0) { clearTimeout(safety); done(); } };
        synth.speak(u);
      }
    });
  }
  function stopLocal() { localToken++; synth?.cancel(); }

  /** pre-show check: can we load the client, reach the agent and use the mic? */
  async function selfTest() {
    const r = { client: false, mic: false, agent: false };
    try { await import(CLIENT_URL); r.client = true; } catch { /* offline or blocked */ }
    try {
      const s = await navigator.mediaDevices.getUserMedia({ audio: true });
      s.getTracks().forEach((t) => t.stop());
      r.mic = true;
    } catch { /* no mic or permission */ }
    if (r.client && r.mic) {
      r.agent = await connect();
      if (r.agent) await disconnect();
    }
    return r;
  }

  return {
    get state() { return state; },
    get connected() { return !!conv; },
    get micOn() { return micOn; },
    /** hands-free microphone on/off */
    setMic(on) {
      micOn = on;
      conv?.setMicMuted(!on);
      if (state === 'listening' || state === 'ready') set(on ? 'listening' : 'ready');
    },
    connect, disconnect, pttStart, pttStop, sendText, lipSample, speakLocal, stopLocal, selfTest,
    /** microphone loudness 0..1 while listening (drives the button ring) */
    inputLevel() { try { return conv?.getInputVolume?.() ?? 0; } catch { return 0; } },
    setVolume(v) {
      volume = v;
      conv?.setVolume({ volume: v });
    },
  };
}
