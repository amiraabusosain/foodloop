// FoodLoop: responsive navigation, demo listing filters, and Arabic/English interface
const translations = {
"الرئيسية":"Home","تصفح التبرعات":"Browse donations","كيف تعمل المنصة؟":"How it works","أثرنا":"Our impact","تسجيل الدخول":"Log in","انضم إلينا":"Join us",
"طعام أكثر هدرًا أقل":"More food saved, less waste","الطعام الفائض اليوم،":"Surplus food today,","أملٌ لشخص آخر.":"can mean hope for someone else.",
"FoodLoop تربط المطاعم والمخابز والمتاجر بالجمعيات الخيرية ومنظمات رعاية الحيوان، لتصل الموارد المتاحة إلى من يستطيع الاستفادة منها.":"FoodLoop connects restaurants, bakeries, and stores with charities and animal-welfare organizations so available food reaches those who can use it.",
"اكتشف التبرعات":"Explore donations","ساهم معنا":"Make a difference","معًا نحو مجتمع أكثر استدامة":"Together for a more sustainable community","كل مساهمة تفرق":"Every contribution matters","خطوة نحو تقليل الهدر":"One step toward less waste","فائض اليوم":"Today's surplus","فرصة جديدة لصنع أثر":"A new chance to make an impact","متاح للتبرع":"Available to donate",
"من فائض إلى فائدة":"From surplus to purpose","بسهولة وموثوقية":"Simply and reliably","بخطوات بسيطة":"Simple steps","كيف تعمل":"How it works","نحوّل فائض الطعام إلى فرصة حقيقية للاستفادة منه.":"We turn surplus food into a real opportunity to help others.",
"أضف فائض الطعام":"List surplus food","تسجّل المنشأة نوع الطعام وكميته وموقعه والوقت المتاح للاستلام.":"Businesses list the food type, quantity, location, and pickup window.","اعثر على الجهة المناسبة":"Find the right organization","تساعد المنصة في اقتراح الجهات التي تتناسب احتياجاتها مع العرض.":"The platform helps match offers with organizations' needs.","احجز واستلم":"Reserve and collect","تُحجز الكمية وتُتابع عملية الاستلام حتى تأكيد اكتمالها.":"The food is reserved and tracked until collection is confirmed.",
"كلنا جزء من الحل":"We are all part of the solution","من يمكنه الانضمام؟":"Who can join?","صُممت المنصة لتسهيل التعاون بين الجهات التي لديها فائض والجهات القادرة على تحويله إلى منفعة.":"The platform makes it easier for businesses with surplus to work with organizations that can put it to good use.","اختر دورك وانضم":"Choose your role and join","المطاعم والمخابز":"Restaurants & bakeries","اعرض الفائض بدلًا من هدره.":"Share surplus instead of wasting it.","الجمعيات الخيرية":"Charities","اعثر على موارد تدعم عملك.":"Find resources to support your work.","منظمات رعاية الحيوان":"Animal-welfare groups","اعثر على الطعام الملائم للحيوانات.":"Find suitable food for animals.","المتطوعون":"Volunteers","ساعد في نقل التبرعات عند الحاجة.":"Help transport donations when needed.",
"ابدأ بخطوة صغيرة":"Start with one small step","الفائض عندك قد يصنع فرقًا كبيرًا.":"Your surplus can make a big difference.","انضم إلى FoodLoop وساهم في جعل الاستفادة من الطعام أسهل وأكثر تنظيمًا.":"Join FoodLoop and help make food recovery easier and more organized.","ابدأ الآن":"Get started","Good Food • Bigger Impact":"Good Food • Bigger Impact","مشروع تخرج تجريبي":"Graduation project prototype",
"فرص التبرع":"Donation opportunities","تصفّح فائض الطعام":"Browse surplus food","المتاح":"available","هذه بيانات تجريبية لتوضيح شكل صفحة التبرعات. ستُربط بقاعدة البيانات لاحقًا.":"These sample listings demonstrate the donations page. They will be connected to a database later.",
"ابحث عن نوع الطعام أو المنطقة...":"Search food type or area...","كل الأنواع":"All categories","مخبوزات":"Bakery","خضار وفواكه":"Fruit & vegetables","وجبات جاهزة":"Prepared meals","الأقرب للاستلام":"Pickup soonest","الكمية الأكبر":"Largest quantity","3 عروض متاحة":"3 listings available","بيانات تجريبية":"Sample data","متاح":"Available","متبقي 45 دقيقة":"45 minutes left","متبقي ساعتان":"2 hours left","متبقي 90 دقيقة":"90 minutes left","خبز عربي ومخبوزات":"Arabic bread and baked goods","إربد — الحي الشرقي":"Irbid — Eastern District","الكمية المتاحة":"Available quantity","30 ربطة":"30 bundles","الاستلام":"Pickup","من الموقع":"At location","طلب استلام":"Request pickup","خضار وفواكه متنوعة":"Mixed fruit and vegetables","عمّان — الجبيهة":"Amman — Jubaiha","18 كغم":"18 kg","بالتنسيق":"By arrangement","وجبات مغلفة":"Packaged meals","عمّان — تلاع العلي":"Amman — Tla' Al-Ali","12 وجبة":"12 meals","لم نعثر على عروض مطابقة":"No matching listings found","جرّب تغيير كلمات البحث أو خيارات التصفية.":"Try changing your search terms or filters.",
"أهلًا بعودتك":"Welcome back","كل خطوة صغيرة":"Every small step","تصنع أثرًا كبيرًا.":"creates a big impact.","تابع عروض الطعام والحجوزات ومساهماتك من مكان واحد.":"Track food listings, reservations, and your contributions in one place.","حسابك في FoodLoop":"Your FoodLoop account","أدخل بياناتك للمتابعة.":"Enter your details to continue.","البريد الإلكتروني":"Email address","كلمة المرور":"Password","أدخل كلمة المرور":"Enter your password","ليس لديك حساب؟":"Don't have an account?","أنشئ حسابًا جديدًا":"Create an account","واجهة تجريبية فقط — لم يتم ربط تسجيل الدخول بقاعدة بيانات بعد.":"Prototype only — login is not connected to a database yet.","انضم إلى مجتمعنا":"Join our community","معًا نقلل الهدر":"Together, we reduce waste","ونزيد الفائدة.":"and increase impact.","اختر نوع حسابك لتبدأ رحلتك في إنقاذ الطعام.":"Choose your account type to start rescuing food.","خطوة أولى نحو الأثر":"Your first step toward impact","أدخل المعلومات الأساسية للبدء.":"Enter basic information to get started.","الاسم أو اسم الجهة":"Name or organization","اكتب الاسم هنا":"Enter a name","نوع الحساب":"Account type","اختر نوع الحساب":"Choose account type","مطعم أو مخبز أو متجر":"Restaurant, bakery, or store","جمعية خيرية":"Charity","منظمة رعاية حيوان":"Animal-welfare organization","متطوع":"Volunteer","6 أحرف على الأقل":"At least 6 characters","إنشاء الحساب":"Create account","لديك حساب بالفعل؟":"Already have an account?","سجّل الدخول":"Log in","واجهة تجريبية فقط — لا تُرسل بياناتك إلى خادم.":"Prototype only — your data is not sent to a server.","الحقول صحيحة مبدئيًا. إنشاء الحساب الفعلي يحتاج إلى Backend وقاعدة بيانات.":"Fields look valid. Real account creation requires a backend and database.","تم التحقق من الحقول. تسجيل الدخول الفعلي يحتاج إلى Backend وقاعدة بيانات.":"Fields checked. Real login requires a backend and database.","→ العودة للرئيسية":"→ Back to home"
};

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  let language = localStorage.getItem("foodloop-language") || "ar";
  // Save the original Arabic text nodes so language can be switched repeatedly without losing content.
  const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeValue.trim()) textNodes.push({node, arabic: node.nodeValue});
  }
  function setLanguage(next) {
    language = next;
    const english = language === "en";
    document.documentElement.lang = language;
    document.documentElement.dir = english ? "ltr" : "rtl";
    body.classList.toggle("lang-en", english);
    document.querySelectorAll(".lang-toggle").forEach(button => {
      button.textContent = english ? "عربي" : "EN";
      button.setAttribute("aria-label", english ? "Switch to Arabic" : "Switch to English");
    });
    textNodes.forEach(({node, arabic}) => {
      const key = arabic.trim();
      if (english && translations[key]) {
        const leading = arabic.match(/^\s*/)?.[0] || "";
        const trailing = arabic.match(/\s*$/)?.[0] || "";
        node.nodeValue = leading + translations[key] + trailing;
      } else {
        node.nodeValue = arabic;
      }
    });
    const titles = {"index.html": {ar:"FoodLoop | أنقذ الطعام، واصنع أثرًا", en:"FoodLoop | Save food, make an impact"}, "donations.html": {ar:"التبرعات المتاحة | FoodLoop", en:"Available donations | FoodLoop"}, "login.html": {ar:"تسجيل الدخول | FoodLoop", en:"Log in | FoodLoop"}, "register.html": {ar:"إنشاء حساب | FoodLoop", en:"Create account | FoodLoop"}};
    const file = location.pathname.split("/").pop() || "index.html";
    if (titles[file]) document.title = titles[file][language];
    localStorage.setItem("foodloop-language", language);
    updateCount();
  }
  document.querySelectorAll(".lang-toggle").forEach(button => button.addEventListener("click", () => setLanguage(language === "ar" ? "en" : "ar")));
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  const cards = Array.from(document.querySelectorAll(".donation-card"));
  const search = document.getElementById("donationSearch");
  const category = document.getElementById("categoryFilter");
  const sort = document.getElementById("sortFilter");
  const grid = document.getElementById("donationsGrid");
  const count = document.getElementById("resultsCount");
  const empty = document.getElementById("emptyState");
  function updateCount(n = cards.filter(c => !c.classList.contains("hidden")).length) {
    if (count) count.textContent = language === "en" ? `${n} listings available` : `${n} عروض متاحة`;
    if (empty) {
      const heading = empty.querySelector("h3");
      const para = empty.querySelector("p");
      if (heading) heading.textContent = language === "en" ? "No matching listings found" : "لم نعثر على عروض مطابقة";
      if (para) para.textContent = language === "en" ? "Try changing your search terms or filters." : "جرّب تغيير كلمات البحث أو خيارات التصفية.";
    }
  }
  function filterDonations() {
    const term = (search?.value || "").trim().toLowerCase();
    const cat = category?.value || "all";
    let visible = cards.filter(card => {
      const text = `${card.dataset.name} ${card.dataset.location}`.toLowerCase();
      const matchesTerm = text.includes(term);
      const matchesCategory = cat === "all" || card.dataset.category === cat;
      card.classList.toggle("hidden", !(matchesTerm && matchesCategory));
      return matchesTerm && matchesCategory;
    });
    if (sort && grid) {
      visible.sort((a,b) => sort.value === "quantity" ? Number(b.dataset.quantity)-Number(a.dataset.quantity) : Number(a.dataset.minutes)-Number(b.dataset.minutes));
      visible.forEach(card => grid.appendChild(card));
    }
    updateCount(visible.length);
    if (empty) empty.classList.toggle("hidden", visible.length !== 0);
  }
  [search, category, sort].forEach(control => control?.addEventListener("input", filterDonations));
  const toast = document.getElementById("toast");
  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message; toast.classList.add("show"); clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
  }
  document.querySelectorAll(".reserve-btn").forEach(button => button.addEventListener("click", () => {
    const item = language === "en" ? (translations[button.dataset.item] || button.dataset.item) : button.dataset.item;
    showToast(language === "en" ? `Requesting pickup for "${item}" requires login. This is a demo.` : `طلب استلام "${item}" يحتاج إلى تسجيل الدخول. هذه نسخة تجريبية.`);
  }));
  document.getElementById("loginForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const message = document.getElementById("formMessage");
    if (message) message.textContent = language === "en" ? "Fields checked. Real login requires a backend and database." : "تم التحقق من الحقول. تسجيل الدخول الفعلي يحتاج إلى Backend وقاعدة بيانات.";
  });
  document.getElementById("registerForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const message = document.getElementById("registerMessage");
    if (message) message.textContent = language === "en" ? "Fields look valid. Real account creation requires a backend and database." : "الحقول صحيحة مبدئيًا. إنشاء الحساب الفعلي يحتاج إلى Backend وقاعدة بيانات.";
  });
  setLanguage(language);
});
