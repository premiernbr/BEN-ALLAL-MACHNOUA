const company = {
  phoneMain: "212642101754",
  phoneSecond: "212662733737",
  email: "0662.med.ali@gmail.com"
};

const translations = {
  fr: {
    navServices: "Services",
    navAbout: "À propos",
    navContact: "Contact",
    eyebrow: "S.A.R.L AU • Boujdour, Maroc",
    heroTitle: "BEN ALLAL MACHNOUA",
    heroSubtitle: "Travaux divers & études topographiques",
    heroText: "Société spécialisée dans les travaux divers et les études topographiques, implantée à Boujdour. Nous accompagnons les particuliers, les entreprises et les administrations avec rigueur et professionnalisme.",
    callBtn: "Appel direct",
    whatsappBtn: "WhatsApp",
    emailBtn: "Email",
    secondPhoneBtn: "Téléphone 2",
    mapsBtn: "Voir l'adresse",
    trust1: "Études topographiques",
    trust2: "Travaux divers",
    trust3: "Assistance technique",
    cardSubtitle: "Travaux divers & études topographiques",
    phoneMainLabel: "Téléphone principal",
    phoneSecondLabel: "Téléphone secondaire",
    emailLabel: "Email professionnel",
    servicesEyebrow: "Nos domaines d'expertise",
    servicesTitle: "Travaux divers & études topographiques",
    servicesIntro: "BEN ALLAL MACHNOUA met à votre disposition une expertise technique complète dans les domaines des travaux topographiques et des travaux divers, au service des administrations, des entreprises et des particuliers.",
    service1Title: "Études topographiques",
    service1Text: "Réalisation d'études topographiques précises pour vos projets d'aménagement, de construction ou de délimitation foncière.",
    service2Title: "Travaux divers",
    service2Text: "Exécution de travaux variés avec une approche rigoureuse, adaptée aux exigences de chaque projet et chantier.",
    service3Title: "Levés topographiques",
    service3Text: "Collecte et traitement des données de terrain pour une représentation précise et fiable de la réalité géographique.",
    service4Title: "Implantation des bornes",
    service4Text: "Matérialisation sur le terrain des points définis dans les plans et dossiers techniques, avec exactitude et conformité.",
    service5Title: "Plans topographiques",
    service5Text: "Élaboration de plans détaillés et normalisés, supports indispensables à tout projet d'ingénierie ou d'urbanisme.",
    service6Title: "Assistance technique",
    service6Text: "Accompagnement et conseil technique auprès des maîtres d'ouvrage, des administrations et des porteurs de projets.",
    aboutEyebrow: "Qui sommes-nous",
    aboutTitle: "Une société de confiance au service de vos projets",
    aboutText: "BEN ALLAL MACHNOUA S.A.R.L AU est une société marocaine basée à Boujdour, spécialisée dans les travaux divers et les études topographiques. Forte d'une expérience terrain et d'un engagement envers la qualité, elle intervient auprès des institutions publiques, des entreprises et des particuliers pour répondre à leurs besoins avec professionnalisme et fiabilité.",
    legalForm: "Forme juridique",
    cityLabel: "Ville",
    addressLabel: "Adresse",
    contactEyebrow: "Prenez contact",
    contactTitle: "Nous sommes à votre disposition",
    contactText: "Contactez BEN ALLAL MACHNOUA par téléphone, WhatsApp ou email pour toute demande d'information, de devis ou d'intervention technique.",
    footerNote: "BEN ALLAL MACHNOUA S.A.R.L AU — Tous droits réservés"
  },
  ar: {
    navServices: "الخدمات",
    navAbout: "من نحن",
    navContact: "التواصل",
    eyebrow: "شركة ذات مسؤولية محدودة بشريك وحيد • بوجدور، المغرب",
    heroTitle: "BEN ALLAL MACHNOUA",
    heroSubtitle: "أشغال متنوعة ودراسات طوبوغرافية",
    heroText: "شركة مغربية متخصصة في الأشغال المتنوعة والدراسات الطوبوغرافية، مقرها بوجدور. نُقدّم خدماتنا للأفراد والمقاولات والإدارات العمومية باحترافية عالية وجودة لا تُساوَم.",
    callBtn: "الإتصال المباشر",
    whatsappBtn: "واتساب",
    emailBtn: "البريد الإلكتروني",
    secondPhoneBtn: "الهاتف الثاني",
    mapsBtn: "عرض الموقع",
    trust1: "دراسات طوبوغرافية",
    trust2: "أشغال متنوعة",
    trust3: "مواكبة تقنية",
    cardSubtitle: "أشغال متنوعة ودراسات طوبوغرافية",
    phoneMainLabel: "الهاتف الرئيسي",
    phoneSecondLabel: "الهاتف الثاني",
    emailLabel: "البريد الإلكتروني المهني",
    servicesEyebrow: "مجالات خبرتنا",
    servicesTitle: "أشغال متنوعة ودراسات طوبوغرافية",
    servicesIntro: "تضع شركة BEN ALLAL MACHNOUA خبرتها التقنية الشاملة في مجال الأشغال الطوبوغرافية والأشغال المتنوعة في خدمة الإدارات والمقاولات والأفراد.",
    service1Title: "الدراسات الطوبوغرافية",
    service1Text: "إنجاز دراسات طوبوغرافية دقيقة لمشاريع التهيئة والبناء وتحديد الحدود العقارية.",
    service2Title: "الأشغال المتنوعة",
    service2Text: "تنفيذ أشغال متعددة بمقاربة صارمة ومتكيفة مع متطلبات كل مشروع وكل ورش.",
    service3Title: "الرفع الطوبوغرافي",
    service3Text: "جمع ومعالجة المعطيات الميدانية للحصول على تمثيل دقيق وموثوق للواقع الجغرافي.",
    service4Title: "غرس الحدود والعلامات",
    service4Text: "تجسيد النقط المحددة في التصاميم والملفات التقنية على الميدان بدقة وامتثال تامين.",
    service5Title: "التصاميم الطوبوغرافية",
    service5Text: "إعداد تصاميم مفصلة ومعيارية تُشكّل الركيزة الأساسية لكل مشروع هندسي أو عمراني.",
    service6Title: "المساعدة التقنية",
    service6Text: "تقديم الدعم والاستشارة التقنية لأصحاب المشاريع والإدارات والمقاولات عند كل الأوقات.",
    aboutEyebrow: "من نحن",
    aboutTitle: "شركة موثوقة في خدمة مشاريعكم",
    aboutText: "شركة BEN ALLAL MACHNOUA S.A.R.L AU شركة مغربية مقرها بوجدور، متخصصة في الأشغال المتنوعة والدراسات الطوبوغرافية. بفضل خبرة ميدانية راسخة والتزام ثابت بالجودة، تتدخل لدى المؤسسات العمومية والمقاولات والأفراد بمهنية ومصداقية عالية.",
    legalForm: "الشكل القانوني",
    cityLabel: "المدينة",
    addressLabel: "العنوان",
    contactEyebrow: "تواصلوا معنا",
    contactTitle: "نحن رهن إشارتكم",
    contactText: "تواصلوا مع شركة BEN ALLAL MACHNOUA عبر الهاتف أو الواتساب أو البريد الإلكتروني لأي استفسار أو طلب عرض سعر أو تدخل تقني.",
    footerNote: "BEN ALLAL MACHNOUA S.A.R.L AU — جميع الحقوق محفوظة"
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.fr;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dict[key]) node.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  const whatsappText = lang === "ar"
    ? "مرحباً، أرغب في الحصول على معلومات حول خدمات شركة BEN ALLAL MACHNOUA."
    : "Bonjour, je souhaite obtenir des informations sur les services de BEN ALLAL MACHNOUA.";

  const whatsappUrl = `https://wa.me/${company.phoneMain}?text=${encodeURIComponent(whatsappText)}`;
  document.querySelector(".floating-whatsapp").href = whatsappUrl;
  localStorage.setItem("preferredLanguage", lang);
}

const storedLanguage = localStorage.getItem("preferredLanguage");
const initialLanguage = storedLanguage || "fr";
setLanguage(initialLanguage);

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

document.getElementById("year").textContent = new Date().getFullYear();

function initPageEnhancements() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10 });

  document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(sec => navObserver.observe(sec));

  const topbar = document.querySelector(".topbar");
  window.addEventListener("scroll", () => {
    topbar.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });
}

if ("requestIdleCallback" in window) {
  requestIdleCallback(initPageEnhancements, { timeout: 1200 });
} else {
  window.addEventListener("load", () => setTimeout(initPageEnhancements, 0), { once: true });
}
