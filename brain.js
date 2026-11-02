// Answer engine: curated replies for common questions + keyword search over the
// Jazan University knowledge base (kb.js, generated from data/jazanu-site.md).
import { KB } from './kb.js';

export const ROBOT_NAME = 'جازي';

/* ---------------- Arabic text processing ---------------- */
export const normalize = (s) => s
  .replace(/[ً-ْٰـ]/g, '')
  .replace(/[إأآٱ]/g, 'ا')
  .replace(/ى/g, 'ي')
  .replace(/ة/g, 'ه')
  .replace(/ؤ/g, 'و')
  .replace(/ئ/g, 'ي')
  .toLowerCase();

const STOP = new Set(normalize(`من في على عن الى إلى ما ماذا كيف كم هل هي هو و او أو ثم مع ان أن إن لا لم لن عند التي الذي الذين هذا هذه ذلك تلك
  ايش وش شو ابي ابغى ابغي اريد أريد ممكن لو عطني اعطني قل لي لك عندي عندك فيه فيها يا بس كل بعض اي أي متى وين اين أين
  جامعه جامعة جازان الجامعه الجامعة بجامعه بجامعة تكلم حدثني اخبرني أخبرني معلومات معلومه عرفني عرّفني`).split(/\s+/));

const PREFIXES = ['وبال', 'وال', 'بال', 'كال', 'فال', 'لل', 'ال'];
const SUFFIXES = ['ات', 'ون', 'ين', 'ان', 'يه', 'ها', 'هم', 'ي', 'ه'];
function stem(t) {
  for (const p of PREFIXES) {
    if (t.startsWith(p) && t.length - p.length >= 3) { t = t.slice(p.length); break; }
  }
  for (const s of SUFFIXES) {
    if (t.endsWith(s) && t.length - s.length >= 3) { t = t.slice(0, -s.length); break; }
  }
  return t;
}

// query expansion: user wording -> words used in the data
const SYN = {
  مدير: ['رئيس'], رييس: ['رئيس'], عدد: ['ارقام', 'عدد'], كم: ['عدد'],
  تخصص: ['اقسام', 'برامج', 'قسم'], تخصصات: ['اقسام', 'برامج'], قسم: ['اقسام'],
  تسجيل: ['قبول', 'تسجيل'], تقديم: ['قبول'], اقديم: ['قبول'], التحاق: ['قبول', 'التحاق'],
  هاتف: ['اتصال', 'هاتف'], جوال: ['اتصال', 'هاتف'], تواصل: ['اتصال', 'تواصل'], ايميل: ['بريد'],
  مكان: ['موقع', 'مدينه'], موقع: ['موقع', 'مدينه'], مستشفي: ['مستشفي', 'طبيه'],
  ماجستير: ['ماجستير', 'دراسات', 'عليا'], دكتوراه: ['دكتوراه', 'دراسات', 'عليا'],
  منحه: ['منح', 'دولي'], منح: ['منح', 'دولي'], وظيفه: ['وظايف', 'توظيف'], وظايف: ['توظيف'],
  تصنيف: ['تصنيفات'], ترتيب: ['تصنيفات'], اعتماد: ['اعتماد'], دبلوم: ['دبلوم'],
};

export function tokens(text) {
  const out = [];
  for (const raw of normalize(text).split(/[^ء-ي0-9a-z]+/)) {
    if (!raw || STOP.has(raw)) continue;
    const s = stem(raw);
    out.push(s);
    for (const syn of SYN[raw] || SYN[s] || []) out.push(stem(normalize(syn)));
  }
  return out;
}

/* ---------------- BM25 index over sections ---------------- */
const docs = KB.map((sec) => {
  const titleT = tokens(sec.title);
  const bodyT = tokens(sec.path.join(' ') + ' ' + sec.facts.join(' '));
  const tf = new Map();
  for (const t of titleT) tf.set(t, (tf.get(t) || 0) + 4);
  for (const t of bodyT) tf.set(t, (tf.get(t) || 0) + 1);
  return { sec, tf, len: titleT.length * 4 + bodyT.length, factT: sec.facts.map((f) => new Set(tokens(f))) };
});
const avgLen = docs.reduce((a, d) => a + d.len, 0) / docs.length;
const df = new Map();
for (const d of docs) for (const t of d.tf.keys()) df.set(t, (df.get(t) || 0) + 1);
const idf = (t) => Math.log(1 + (docs.length - (df.get(t) || 0) + 0.5) / ((df.get(t) || 0) + 0.5));

function search(query) {
  const q = [...new Set(tokens(query))];
  if (!q.length) return null;
  let best = null;
  for (const d of docs) {
    let score = 0;
    for (const t of q) {
      const f = d.tf.get(t);
      if (f) score += idf(t) * (f * 2.2) / (f + 1.2 * (0.25 + 0.75 * d.len / avgLen));
    }
    if (!best || score > best.score) best = { d, score };
  }
  if (!best || best.score < 2.2) return null;
  const { d } = best;
  // rank facts inside the section by how many query words they share
  const ranked = d.sec.facts
    .map((f, i) => ({ f, i, s: q.reduce((a, t) => a + (d.factT[i].has(t) ? idf(t) : 0), 0) }))
    .sort((a, b) => b.s - a.s || a.i - b.i);
  // when the question names the section (e.g. "كلية الطب"), rank by the remaining words ("أقسام")
  const titleT = new Set(tokens(d.sec.title));
  const rest = q.filter((t) => !titleT.has(t));
  const byRest = d.sec.facts
    .map((f, i) => ({ f, i, s: rest.reduce((a, t) => a + (d.factT[i].has(t) ? idf(t) : 0), 0) }))
    .sort((a, b) => b.s - a.s || a.i - b.i);
  const pool = rest.length < q.length ? byRest : ranked;
  const picked = (pool[0].s > 0 ? pool.filter((x) => x.s > 0).slice(0, rest.length < q.length ? 2 : 3) : d.sec.facts.slice(0, 3).map((f, i) => ({ f, i })))
    .sort((a, b) => a.i - b.i)
    .map((x) => x.f);
  return { section: d.sec, facts: picked, score: best.score };
}

/* ---------------- curated answers ---------------- */
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const SRC = 'https://www.jazanu.edu.sa';

// order matters: first match wins
const INTENTS = [
  // small talk
  { re: /^(السلام|سلام)|السلام عليكم/, say: () => 'وعليكم السلام ورحمة الله وبركاته، حياك الله في جامعة جازان!', gesture: 'chest' },
  { re: /^(مرحبا|هلا|اهلا|هاي|صباح|مساء|يا هلا)/, say: () => pick(['هلا والله ومرحبا! وش تحب تعرف عن جامعة جازان؟', 'أهلاً وسهلاً! أنا جاهزة لأسئلتك عن الجامعة.']), gesture: 'wave' },
  { re: /(اسمك|من انت|مين انت|عرف بنفسك|وش انت|ايش انت|من تكون)/, say: () => `أنا ${ROBOT_NAME}، المساعدة الذكية لجامعة جازان. أقدر أجاوبك عن الكليات والقبول وأرقام الجامعة وخدماتها وطرق التواصل معها.`, gesture: 'presentR' },
  { re: /(كيف حالك|كيفك|شلونك|وش اخبارك|عساك|كيف الحال)/, say: () => 'الحمد لله بخير وعافية، الله يسلمك. وش أقدر أخدمك فيه؟', gesture: 'chest' },
  { re: /(شكرا|يعطيك العافيه|مشكور|تسلم|جزاك)/, say: () => 'العفو، الله يعافيك! في خدمتك دايماً.', gesture: 'chest' },
  { re: /(مع السلامه|باي|وداعا|في امان الله)/, say: () => 'في أمان الله، تشرفت فيك! ونتمنى نشوفك من طلاب جامعة جازان.', gesture: 'wave' },
  { re: /(ارقص|رقص|عرضه|ورني حركاتك)/, say: () => 'يالله! خلني أوريك حركاتي.', gesture: 'dance' },
  { re: /(الساعه كم|كم الساعه|الوقت الان)/, say: () => `الساعة الآن ${new Date().toLocaleTimeString('ar-SA', { hour: 'numeric', minute: '2-digit' })}.`, gesture: 'presentR' },
  { re: /(التاريخ اليوم|تاريخ اليوم|اي يوم اليوم|وش اليوم)/, say: () => `اليوم ${new Date().toLocaleDateString('ar-SA', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}.`, gesture: 'presentL' },

  // university facts (from data/jazanu-site.md)
  { re: /ملتقي|التحول الرقمي|قيمه واثر/, gesture: 'presentL', card: 'forum',
    say: () => 'ملتقى التحول الرقمي 2026 تنظمه جامعة جازان بشعار «قيمة وأثر». وتقدر تختبر معلوماتك في التحول الرقمي والأمن السيبراني والذكاء الاصطناعي في تحدي المعرفة معي.' },
  { re: /عرفني (ب|على )?(جامعه|الجامعه)|عن (جامعه جازان|الجامعه)|نبذه/, gesture: 'presentR', card: 'about',
    say: () => 'جامعة جازان جامعة حكومية أُنشئت بأمر ملكي عام 1426 للهجرة الموافق 2005 للميلاد، وتقع مدينتها الجامعية على ساحل البحر الأحمر شمال مدينة جازان. وتضم أكثر من 36 ألف طالب وطالبة، وحاصلة على الاعتماد المؤسسي الكامل.',
    src: `${SRC}/en/university-history` },
  { re: /(رييس|مدير) (الجامعه|جامعه)|من يرا?س الجامعه|رييس الجامعه/, gesture: 'presentR', card: 'president',
    say: () => 'بحسب أخبار الجامعة، رئيس جامعة جازان هو معالي الأستاذ الدكتور محمد بن حسن أبوراسين، وتولى رئاستها في مايو 2024م. وهو حاصل على الدكتوراه في الإرشاد النفسي من جامعة هَل في بريطانيا، وكان قبلها وكيلاً للجامعة للدراسات العليا والبحث العلمي.',
    src: `${SRC}/en/president` },
  { re: /(متي|سنه|تاريخ) (تاسست|تاسيس|انشات|انشاء|نشات)|تاسيس الجامعه|نشاه الجامعه|تاريخ الجامعه/, gesture: 'presentL', card: 'about',
    say: () => 'أُنشئت جامعة جازان بأمر ملكي عام 1426 للهجرة الموافق 2005 للميلاد. وبدأت بكليات الطب والهندسة وعلوم الحاسب وكلية المجتمع، ثم ضُمّت إليها كليات أخرى مثل كلية المعلمين وكليات التربية للبنات.',
    src: `${SRC}/en/university-history` },
  { re: /(كم|عدد) (طالب|الطلاب|طلاب|عضو|اعضاء|كليه|كليات|الكليات)|ارقام|احصاي|حجم الجامعه/, gesture: 'both', card: 'stats',
    say: () => 'بحسب الموقع الرسمي، تضم جامعة جازان أكثر من 36 ألف طالب وطالبة، و2,489 عضو هيئة تدريس، و1,706 موظفين إداريين، و14 كلية.',
    src: SRC + '/en' },
  { re: /(رويه|رسال(ه|ة)|قيم) الجامعه|رويتها|رسالتها|قيمها/, gesture: 'chest', card: 'vision',
    say: () => 'رؤية جامعة جازان: جامعة متميزة إقليمياً بمخرجاتها التعليمية وأبحاثها المبتكرة وخدماتها المجتمعية. ورسالتها: نعلّم ونبحث ونبتكر لنسهم في بناء مجتمع حيوي. وقيمها: المواطنة، والانتماء، والمسؤولية، والتميز، وبناء القدرات، والعمل الجماعي.',
    src: `${SRC}/en/university-history/vision-and-mission` },
  { re: /(ما هي|وش|ايش|اذكر|عدد) ?(ال)?كليات|كليات الجامعه|الكليات الموجوده/, gesture: 'presentL', card: 'colleges',
    say: () => 'من كليات جامعة جازان: الطب، وطب الأسنان، والتمريض والعلوم الصحية، والصيدلة، والصحة العامة وطب المناطق الحارة، والهندسة وعلوم الحاسب، والتصميم والعمارة، والأعمال، والعلوم، والتربية، والآداب والعلوم الإنسانية، والشريعة والقانون، والكلية التطبيقية، إضافة إلى كليات جامعية في فرسان والدرب والداير وأبوعريش وصبيا وكليات تطبيقية في العارضة وصامطة، وكلية التقنية الصناعية التطبيقية ببيش.',
    src: SRC + '/en' },
  { re: /(شروط|متطلبات) (القبول|التسجيل|الالتحاق)|كيف (اسجل|اقدم|التقديم|القبول)|القبول في الجامعه|النسبه الموزونه/, gesture: 'presentR', card: 'admission',
    say: () => 'أغلب القبول في البكالوريوس يتم عبر بوابة القبول الموحد. ومن أهم الشروط: شهادة الثانوية أو ما يعادلها وألا يكون مضى عليها أكثر من خمس سنوات، واجتياز اختباري القدرات العامة والتحصيلي، وأن يكون المتقدم لائقاً طبياً وحسن السيرة. والنسبة الموزونة الشائعة: ثلاثون بالمئة للثانوية، وثلاثون للقدرات، وأربعون للتحصيلي.',
    src: `${SRC}/en/colleges/sci/chem/admis-req` },
  { re: /(وين|اين|مكان|عنوان).*الجامعه|تقع الجامعه|المدينه الجامعيه|مساحه الجامعه/, gesture: 'presentL', card: 'campus',
    say: () => 'تقع المدينة الجامعية لجامعة جازان على ساحل البحر الأحمر شمال مدينة جازان، على أرض مساحتها تسعة ملايين متر مربع، ويضم الحرم المستشفى الجامعي ومرافق تعليمية وبحثية متعددة.',
    src: `${SRC}/en/university-history` },
  { re: /(رقم|هاتف|تلفون|جوال|تواصل|اتصال|التواصل|الاتصال|ايميل|بريد)/, gesture: 'presentR', card: 'contact',
    say: () => 'للتواصل مع جامعة جازان: الهاتف الموحد 0173295000، والفاكس 0173297003. ومكتب رئيس الجامعة في برج الجامعة بالدور السابع عشر، ويستقبل المراجعين أيام الاثنين والثلاثاء والأربعاء الساعة الواحدة ظهراً.',
    src: `${SRC}/en/contactinfo` },
  { re: /تصنيف|ترتيب الجامعه|كيو اس|qs|التايمز|times/, gesture: 'both', card: 'rankings',
    say: () => 'في تصنيف التايمز للجامعات 2023 جاءت جامعة جازان في الفئة من 401 إلى 500 عالمياً، والسابعة بين الجامعات السعودية. وفي تصنيف QS للمنطقة العربية 2023 جاءت في الفئة من 91 إلى 100، متقدمة ثلاثين مركزاً عن العام السابق.',
    src: 'https://jazanu.edu.sa/en/media-center/news/news44032405' },
  { re: /اعتماد|معتمده/, gesture: 'chest', card: 'about',
    say: () => 'جامعة جازان جامعة حكومية تحت مظلة وزارة التعليم، وحاصلة على الاعتماد المؤسسي الكامل من المركز الوطني للتقويم والاعتماد الأكاديمي التابع لهيئة تقويم التعليم والتدريب.',
    src: SRC },
  { re: /خدمات الكترونيه|الخدمات الالكترونيه|بلاك ?بورد|النظام الاكاديمي|التعلم الالكتروني|البريد الجامعي/, gesture: 'presentL', card: 'services',
    say: () => 'من الخدمات الإلكترونية في جامعة جازان: النظام الأكاديمي، ونظام التعلم الإلكتروني، ومنصة الخدمات الإلكترونية، والبريد الجامعي، إضافة إلى بوابة الدخول الموحد، وخدمة تواصل، وبوابة القبول الإلكترونية.',
    src: `${SRC}/en/e-services` },
];

export const factsOf = (title, n) => (KB.find((s) => s.title === title)?.facts || []).slice(0, n);
INTENTS.push({ re: /اخبار|الاخبار|جديد الجامعه/, gesture: 'nod', card: 'news', src: `${SRC}/ar/media-center/news`,
  say: () => 'من آخر أخبار جامعة جازان: ' + factsOf('الأخبار', 3).map((f) => f.split(' — ')[0]).join('، و') + '.' });
INTENTS.push({ re: /فعاليات|الفعاليات|انشطه/, gesture: 'nod', card: 'events', src: `${SRC}/ar/media-center/events`,
  say: () => 'من فعاليات جامعة جازان مؤخراً: ' + factsOf('الفعاليات', 3).map((f) => f.split(' — ')[0]).join('، و') + '.' });

const FALLBACK = [
  'ما لقيت معلومة مؤكدة عن هذا في بيانات جامعة جازان اللي عندي. جرّب تسألني عن الكليات، أو القبول، أو أرقام الجامعة، أو طرق التواصل.',
  'سؤال حلو! بس ما عندي عنه معلومة دقيقة. أقدر أفيدك عن كليات جامعة جازان وأقسامها وشروط القبول وخدماتها.',
];

const GESTURE_BY_TOPIC = [
  [/كليه|كليات/, 'presentL'], [/قبول|التحاق|تحويل/, 'presentR'], [/ارقام|عدد/, 'both'], [/اخبار|فعاليات/, 'nod'],
];

const SPOKEN_MAX = 320;
function shorten(text) {
  if (text.length <= SPOKEN_MAX) return text;
  const cut = text.slice(0, SPOKEN_MAX);
  const end = Math.max(cut.lastIndexOf('.'), cut.lastIndexOf('،'));
  return (end > 120 ? cut.slice(0, end) : cut) + '.';
}

/**
 * Returns { text, speak, gesture, src, card } for a user message.
 *  - card: id of a ready-made card in content.js, a { title, facts, src } card, or null
 *  - text: full answer shown in chat
 *  - speak: shorter version read aloud
 */
export function answer(question) {
  const n = normalize(question.trim());
  for (const it of INTENTS) {
    if (it.re.test(n)) {
      const t = it.say();
      return { text: t, speak: t, gesture: it.gesture, src: it.src, card: it.card || null };
    }
  }
  const hit = search(question);
  if (hit) {
    const { section, facts } = hit;
    const body = facts.map((f) => (/[.!؟]$/.test(f) ? f : f + '.')).join(' ');
    const heading = section.title.replace(/\s*\(.*?\)\s*/g, ' ').trim();
    const text = `${heading}: ${body}`;
    const topic = normalize(section.path.join(' ') + ' ' + section.title);
    const gesture = (GESTURE_BY_TOPIC.find(([re]) => re.test(topic)) || [null, 'presentR'])[1];
    return { text, speak: shorten(text), gesture, src: section.src, card: { title: heading, facts, src: section.src } };
  }
  const t = pick(FALLBACK);
  return { text: t, speak: t, gesture: 'shrug', card: null };
}
