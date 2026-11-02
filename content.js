// Visual content shown next to Mohammed: topic buttons and information cards.
// Everything here comes from data/jazanu-site.md (the university website data) or
// the forum identity file. Edit this file to change what the screen shows.
import { factsOf } from './brain.js';

const JU = 'https://www.jazanu.edu.sa';

/* Topic buttons at the bottom of the screen.
 * ask: what is sent to Mohammed when the button is pressed. */
export const TOPICS = [
  { id: 'about', icon: '🏛️', label: 'عن الجامعة', ask: 'عرّفني بجامعة جازان باختصار' },
  { id: 'stats', icon: '📊', label: 'الجامعة في أرقام', ask: 'كم عدد الطلاب وأعضاء هيئة التدريس والكليات في جامعة جازان؟' },
  { id: 'colleges', icon: '🎓', label: 'الكليات', ask: 'ما هي كليات جامعة جازان؟' },
  { id: 'admission', icon: '📝', label: 'القبول', ask: 'ما شروط القبول في جامعة جازان؟' },
  { id: 'services', icon: '💻', label: 'الخدمات الرقمية', ask: 'ما هي الخدمات الإلكترونية في جامعة جازان؟' },
  { id: 'forum', icon: '✨', label: 'ملتقى التحول الرقمي', ask: 'عرّفني بملتقى التحول الرقمي 2026' },
  { id: 'rankings', icon: '🏆', label: 'التصنيفات', ask: 'ما تصنيف جامعة جازان؟' },
  { id: 'contact', icon: '📞', label: 'التواصل', ask: 'كيف أتواصل مع جامعة جازان؟' },
  { id: 'quiz', icon: '🎯', label: 'تحدي المعرفة', quiz: true },
];

/* Information cards. Types:
 *  stats  – animated counters      list  – chips       steps – numbered steps
 *  tiles  – touchable services     info  – icon lines  facts – plain facts
 * qr: shown so visitors can open the page on their phone. */
export const CARDS = {
  about: {
    type: 'info', icon: '🏛️', title: 'جامعة جازان',
    lines: [
      ['📅', 'أُنشئت بأمر ملكي عام 1426هـ (2005م)'],
      ['🌱', 'بدأت بكليات الطب والهندسة وعلوم الحاسب وكلية المجتمع'],
      ['✅', 'حاصلة على الاعتماد المؤسسي الكامل'],
      ['🌊', 'المدينة الجامعية على ساحل البحر الأحمر شمال جازان'],
    ],
    qr: { url: `${JU}/en/university-history`, label: 'نبذة عن الجامعة' },
  },
  stats: {
    type: 'stats', icon: '📊', title: 'الجامعة في أرقام',
    items: [
      { value: 36000, prefix: '+', label: 'طالب وطالبة' },
      { value: 2489, label: 'عضو هيئة تدريس' },
      { value: 1706, label: 'موظف إداري' },
      { value: 14, label: 'كلية' },
    ],
    note: 'المصدر: الموقع الرسمي لجامعة جازان',
  },
  president: {
    type: 'info', icon: '👤', title: 'رئيس الجامعة',
    lines: [
      ['🎓', 'أ.د. محمد بن حسن أبوراسين (بحسب أخبار الجامعة)'],
      ['📅', 'رئيساً للجامعة منذ مايو 2024م'],
      ['📜', 'دكتوراه في الإرشاد النفسي – جامعة هَل، بريطانيا'],
    ],
    qr: { url: `${JU}/en/president`, label: 'صفحة رئيس الجامعة' },
  },
  vision: {
    type: 'info', icon: '🎯', title: 'الرؤية والرسالة',
    lines: [
      ['👁️', 'الرؤية: جامعة متميزة إقليمياً بمخرجاتها التعليمية وأبحاثها المبتكرة وخدماتها المجتمعية'],
      ['🧭', 'الرسالة: نعلّم ونبحث ونبتكر لنسهم في بناء مجتمع حيوي'],
    ],
    chips: ['المواطنة', 'الانتماء', 'المسؤولية', 'التميز', 'بناء القدرات', 'العمل الجماعي'],
    qr: { url: `${JU}/en/university-history/vision-and-mission`, label: 'الرؤية والرسالة' },
  },
  colleges: {
    type: 'list', icon: '🎓', title: 'كليات الجامعة',
    chips: ['الطب', 'طب الأسنان', 'التمريض والعلوم الصحية', 'الصيدلة', 'الصحة العامة وطب المناطق الحارة', 'الهندسة وعلوم الحاسب',
      'التصميم والعمارة', 'الأعمال', 'العلوم', 'التربية', 'الآداب والعلوم الإنسانية', 'الشريعة والقانون', 'الكلية التطبيقية',
      'التقنية الصناعية التطبيقية ببيش', 'الكليات الجامعية: فرسان · الدرب · الداير · أبوعريش · صبيا', 'التطبيقية: العارضة · صامطة'],
    qr: { url: `${JU}/en`, label: 'موقع الجامعة' },
  },
  admission: {
    type: 'steps', icon: '📝', title: 'القبول في البكالوريوس',
    steps: ['التقديم عبر بوابة القبول الموحد', 'شهادة ثانوية لم يمضِ عليها أكثر من 5 سنوات', 'اجتياز اختباري القدرات والتحصيلي', 'تأكيد القبول خلال المهلة واستلام البطاقة الجامعية'],
    bars: [['الثانوية', 30], ['القدرات', 30], ['التحصيلي', 40]],
    barsTitle: 'النسبة الموزونة الشائعة',
    qr: { url: `${JU}/ar/e-services/registraionportal`, label: 'بوابة القبول' },
  },
  services: {
    type: 'tiles', icon: '💻', title: 'الخدمات الرقمية',
    tiles: [
      { icon: '🎓', label: 'النظام الأكاديمي', url: `${JU}/en/e-services` },
      { icon: '🖥️', label: 'التعلم الإلكتروني', url: `${JU}/en/e-services` },
      { icon: '🧩', label: 'منصة الخدمات EJUST', url: `${JU}/en/e-services` },
      { icon: '✉️', label: 'البريد الجامعي', url: `${JU}/ar/stu-email` },
      { icon: '🔐', label: 'الدخول الموحد', url: `${JU}/ar/e-services/sso` },
      { icon: '💬', label: 'خدمة تواصل', url: `${JU}/ar/e-services/twasul` },
      { icon: '📥', label: 'بوابة القبول', url: `${JU}/ar/e-services/registraionportal` },
      { icon: '🤖', label: 'JazanuBot', url: `${JU}/ar/e-services/jazanubot` },
    ],
    hint: 'المس أي خدمة لعرض رمز QR وفتحها على جوالك',
  },
  rankings: {
    type: 'stats', icon: '🏆', title: 'التصنيفات (2023)',
    items: [
      { text: '401–500', label: 'تصنيف التايمز عالمياً' },
      { value: 7, label: 'بين الجامعات السعودية (التايمز)' },
      { text: '91–100', label: 'QS للمنطقة العربية' },
    ],
    qr: { url: 'https://jazanu.edu.sa/en/media-center/news/news44032405', label: 'خبر التصنيفات' },
  },
  contact: {
    type: 'info', icon: '📞', title: 'التواصل مع الجامعة',
    lines: [
      ['☎️', 'الهاتف الموحد: 0173295000'],
      ['📠', 'الفاكس: 0173297003'],
      ['🏢', 'برج الجامعة – الدور 17 (مكتب رئيس الجامعة)'],
      ['🕐', 'استقبال المراجعين: الاثنين – الأربعاء، 1:00 ظهراً'],
    ],
    qr: { url: `${JU}/en/contactinfo`, label: 'صفحة التواصل' },
  },
  campus: {
    type: 'stats', icon: '🌊', title: 'المدينة الجامعية',
    items: [
      { value: 9, suffix: ' مليون م²', label: 'مساحة المدينة الجامعية' },
      { text: 'البحر الأحمر', label: 'على الساحل شمال جازان' },
    ],
    qr: { url: `${JU}/en/university-history`, label: 'عن المدينة الجامعية' },
  },
  forum: {
    type: 'info', icon: '✨', title: 'ملتقى التحول الرقمي 2026',
    subtitle: 'قيمة وأثر',
    lines: [
      ['🏛️', 'تنظمه جامعة جازان'],
      ['🎮', 'تحديات تفاعلية في الأمن السيبراني والذكاء الاصطناعي والخدمات الرقمية'],
    ],
    action: { label: '🎯 ابدأ تحدي المعرفة', quiz: true },
  },
  news: () => ({ type: 'facts', icon: '📰', title: 'آخر الأخبار', facts: factsOf('الأخبار', 4).map((f) => f.split(' — ')[0]), qr: { url: `${JU}/ar/media-center/news`, label: 'المركز الإعلامي' } }),
  events: () => ({ type: 'facts', icon: '📅', title: 'الفعاليات', facts: factsOf('الفعاليات', 4).map((f) => f.split(' — ')[0]), qr: { url: `${JU}/ar/media-center/events`, label: 'الفعاليات' } }),
};

// spoken fallback answers for topics that are not in the university data
export const LOCAL_ANSWERS = {
  forum: 'ملتقى التحول الرقمي 2026 تنظمه جامعة جازان بشعار «قيمة وأثر». وتقدر تختبر معلوماتك في التحول الرقمي والأمن السيبراني والذكاء الاصطناعي في تحدي المعرفة معي.',
};
