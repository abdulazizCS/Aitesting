// Quiz bank from the Digital Transformation Forum 2026 games file ("تحديات قيمة وأثر").
// The first option of each question is the correct one; options are shuffled at runtime.
export const QUIZ = {
 "sources": {
  "nca": {
   "abbr": "NCA",
   "title": "الحقيبة التوعوية للجهات الوطنية",
   "url": "https://nca.gov.sa/ar/cyber-awareness/cybersecurity-awareness-toolkit/"
  },
  "cisa_phish": {
   "abbr": "CISA",
   "title": "التعرّف على التصيّد والإبلاغ عنه",
   "url": "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing"
  },
  "cisa_mfa": {
   "abbr": "CISA",
   "title": "فعّل التحقق متعدد العوامل",
   "url": "https://www.cisa.gov/secure-our-world/turn-mfa"
  },
  "cisa_best": {
   "abbr": "CISA",
   "title": "أفضل ممارسات الأمن السيبراني الأساسية",
   "url": "https://cisa.gov/sites/default/files/2024-12/Top-Cybersecurity-Best-Practices-Basic-Final-508.pdf"
  },
  "ftc": {
   "abbr": "FTC",
   "title": "احمِ نفسك من رسائل التصيّد",
   "url": "https://consumer.ftc.gov/consumer-alerts/2025/04/protect-yourself-phishing-scams"
  },
  "fcc": {
   "abbr": "FCC",
   "title": "«سرقة الشحن» Juice Jacking ونصائح تجنّبها",
   "url": "https://www.fcc.gov/juice-jacking-tips-to-avoid-it"
  },
  "nist": {
   "abbr": "NIST",
   "title": "مسرد مصطلحات الأمن السيبراني",
   "url": "https://csrc.nist.gov/glossary/term/phishing"
  },
  "sdaia": {
   "abbr": "سدايا",
   "title": "مبادئ أخلاقيات الذكاء الاصطناعي (الإصدار 1.0)",
   "url": "https://dgp.sdaia.gov.sa/wps/wcm/connect/4c56ed1c-1b82-447d-ac29-638f5f99c12e/ai-principles-EN.pdf?CACHEID=ROOTWORKSPACE-4c56ed1c-1b82-447d-ac29-638f5f99c12e-p3k51U9&CONVERT_TO=url&MOD=AJPERES"
  },
  "govuk": {
   "abbr": "GOV.UK",
   "title": "قياس نجاح الخدمة الرقمية",
   "url": "https://www.gov.uk/service-manual/measuring-success/using-data-to-improve-your-service-an-introduction"
  },
  "wcag": {
   "abbr": "W3C",
   "title": "إرشادات إتاحة محتوى الويب WCAG 2.2",
   "url": "https://www.w3.org/TR/WCAG22/"
  }
 },
 "questions": [
  {
   "q": "ما العلامة الأوضح على رسالة تصيّد؟",
   "options": [
    "استعجال وتهديد بعواقب فورية",
    "شعار الجهة في الرسالة",
    "أنها مكتوبة بالعربية"
   ],
   "answer": 0,
   "why": "الاستعجال والتهديد أبرز علامات التصيّد.",
   "src": "cisa_phish",
   "topic": "cyber"
  },
  {
   "q": "رسالة مشبوهة تبدو حقيقية… ما التصرف الصحيح؟",
   "options": [
    "التواصل مع الجهة عبر موقعها الرسمي",
    "الضغط على الرابط للتأكد",
    "الاتصال بالرقم الموجود في الرسالة"
   ],
   "answer": 0,
   "why": "القناة الرسمية التي تعرفها هي طريق التحقق.",
   "src": "ftc",
   "topic": "cyber"
  },
  {
   "q": "ما فائدة التحقق متعدد العوامل؟",
   "options": [
    "يحمي الحساب حتى لو سُرقت كلمة المرور",
    "يغني عن كلمة المرور",
    "يسرّع الاتصال بالإنترنت"
   ],
   "answer": 0,
   "why": "عامل إضافي يحمي حتى لو تسربت كلمة المرور.",
   "src": "cisa_mfa",
   "topic": "cyber"
  },
  {
   "q": "أيّ مما يلي ليس دليلًا كافيًا على سلامة الرسالة؟",
   "options": [
    "خلوّها من الأخطاء الإملائية",
    "وصولها داخل التطبيق الرسمي",
    "أنها لا تطلب بيانات سرية"
   ],
   "answer": 0,
   "why": "الرسائل الاحتيالية قد تخلو من الأخطاء.",
   "src": "cisa_phish",
   "topic": "cyber"
  },
  {
   "q": "أفضل طريقة لشحن الجوال في المطار؟",
   "options": [
    "مقبس الكهرباء مع شاحنك الخاص",
    "منفذ USB عام",
    "أي كيبل متاح"
   ],
   "answer": 0,
   "why": "الشاحن الخاص لا يتبادل البيانات.",
   "src": "fcc",
   "topic": "cyber"
  },
  {
   "q": "ظهرت رسالة «الوثوق بهذا الجهاز» أثناء الشحن العام… ماذا تختار؟",
   "options": [
    "شحن فقط",
    "مشاركة البيانات",
    "الوثوق دائمًا"
   ],
   "answer": 0,
   "why": "«شحن فقط» يمنع نقل البيانات.",
   "src": "fcc",
   "topic": "cyber"
  },
  {
   "q": "مبدأ «أقل الصلاحيات» يعني…",
   "options": [
    "منح المستخدم ما يحتاجه فقط لعمله",
    "منح الجميع صلاحية المدير",
    "إلغاء كل الصلاحيات"
   ],
   "answer": 0,
   "why": "امنح الصلاحيات بقدر الحاجة.",
   "src": "nist",
   "topic": "cyber"
  },
  {
   "q": "أيّ مما يلي من الممارسات الأساسية للأمن السيبراني؟",
   "options": [
    "النسخ الاحتياطي للبيانات",
    "تأجيل التحديثات",
    "مشاركة كلمة المرور مع الزملاء"
   ],
   "answer": 0,
   "why": "النسخ الاحتياطي يحميك من فقدان البيانات.",
   "src": "cisa_best",
   "topic": "cyber"
  },
  {
   "q": "أيّ مما يلي من مبادئ أخلاقيات الذكاء الاصطناعي لدى سدايا؟",
   "options": [
    "الشفافية والقابلية للتفسير",
    "السرعة بأي ثمن",
    "جمع أكبر قدر من البيانات"
   ],
   "answer": 0,
   "why": "الشفافية والقابلية للتفسير من مبادئ سدايا.",
   "src": "sdaia",
   "topic": "ai"
  },
  {
   "q": "كم عدد مبادئ أخلاقيات الذكاء الاصطناعي في إصدار سدايا الأول؟",
   "options": [
    "7",
    "3",
    "12"
   ],
   "answer": 0,
   "why": "سبعة مبادئ في الإصدار الأول.",
   "src": "sdaia",
   "topic": "ai"
  },
  {
   "q": "أيّ مبدأ يضمن معاملة الجميع دون تحيّز في أنظمة الذكاء الاصطناعي؟",
   "options": [
    "العدالة",
    "السرعة",
    "التسويق"
   ],
   "answer": 0,
   "why": "العدالة تمنع التحيّز في القرارات.",
   "src": "sdaia",
   "topic": "ai"
  },
  {
   "q": "ما المؤشر الذي يقيس نسبة من أنهوا الخدمة بنجاح؟",
   "options": [
    "نسبة الإكمال",
    "عدد الزيارات",
    "عدد الصفحات"
   ],
   "answer": 0,
   "why": "نسبة الإكمال تقيس من أنهى الخدمة.",
   "src": "govuk",
   "topic": "digital"
  },
  {
   "q": "أيّ مما يلي من المؤشرات الأربعة لنجاح الخدمة في دليل GOV.UK؟",
   "options": [
    "رضا المستفيد",
    "عدد الموظفين",
    "ألوان الواجهة"
   ],
   "answer": 0,
   "why": "رضا المستفيد من المؤشرات الأربعة.",
   "src": "govuk",
   "topic": "digital"
  },
  {
   "q": "ماذا تعني «نسبة الاستخدام الرقمي»؟",
   "options": [
    "نسبة من يختار القناة الرقمية بدل غيرها",
    "سرعة الموقع",
    "عدد التطبيقات"
   ],
   "answer": 0,
   "why": "الاستخدام الرقمي: من اختار القناة الرقمية.",
   "src": "govuk",
   "topic": "digital"
  },
  {
   "q": "ما المعيار الدولي لإتاحة المحتوى الرقمي لذوي الإعاقة؟",
   "options": [
    "WCAG",
    "HTTP",
    "USB"
   ],
   "answer": 0,
   "why": "WCAG هو معيار الإتاحة الدولي.",
   "src": "wcag",
   "topic": "digital"
  },
  {
   "q": "التصيّد بحسب تعريف NIST هو…",
   "options": [
    "انتحال جهة موثوقة للحصول على بيانات حساسة",
    "فيروس يبطئ الجهاز",
    "عطل في الشبكة"
   ],
   "answer": 0,
   "why": "انتحال جهة موثوقة لسرقة البيانات.",
   "src": "nist",
   "topic": "cyber"
  }
 ]
};
