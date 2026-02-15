// ===== i18n System =====
const translations = {
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    hero_available: "Disponible para nuevos proyectos",
    hero_greeting_1: "Hola soy Samuel Gómez",
    hero_greeting_2: "más conocido como ",
    hero_download: "Descargar CV",
    about_title: "Sobre mí",
    about_p1: 'Soy un <span class="text-white font-bold">QA Tester</span> con experiencia en pruebas web, asegurando la calidad de las aplicaciones antes de su lanzamiento. Me especializo en crear casos de prueba, <span class="text-midu-purple font-semibold">identificar y reportar errores</span>, y colaborar con equipos de desarrollo para optimizar productos. He trabajado con grandes empresas, asegurando que sus productos sean funcionales, eficientes y libres de errores antes de llegar a los usuarios finales.',
    about_p2: 'Destaco en la implementación de <span class="text-white font-bold">metodologías ágiles</span>, asegurando una comunicación fluida entre testers y desarrolladores. Tengo experiencia en <span class="text-midu-blue font-semibold">pruebas funcionales, de regresión y automatización</span>, así como en la interacción con clientes para entender sus necesidades y mejorar la usabilidad. Mi objetivo es elevar la calidad del software a través de pruebas rigurosas y un enfoque proactivo en la resolución de problemas.',
    skills_title_1: "Habilidades & ",
    skills_title_2: "Experiencia",
    skills_subtitle: "Mi trayectoria profesional y arsenal técnico",
    skills_path: "Trayectoria Profesional",
    job1_desc: "Durante mi tiempo en Webhelp, tuve la oportunidad de trabajar como QA Tester, donde adquirí experiencia en pruebas de software y aseguramiento de calidad en entornos web, móviles y de telefonía.",
    job2_date: "2025 - Actualmente",
    job2_desc: "En mi rol actual, trabajo como Programador y Analista de Datos, aprovechando herramientas de automatización e inteligencia artificial para resolver problemas complejos e impulsar el crecimiento de ventas de la empresa.",
    skills_languages: "Lenguajes",
    skills_frameworks: "Frameworks y Herramientas",
    skills_ecosystem: "Ecosistema y Diseño",
    projects_title_1: "Mis ",
    projects_title_2: "Proyectos",
    projects_subtitle: "Conoce algo sobre mi trabajo",
    project1_desc: "Encuentra las paletas de colores perfectas para tus proyectos.",
    project2_desc: "Página de aterrizaje de Julian RPO Trainer, un cliente satisfecho mostrando su propio portafolio de entrenamiento.",
    project3_desc: "Acorta tus enlaces de manera más eficiente para tus futuros clientes.",
    project4_desc: "Extrayendo las últimas noticias de Google e implementando IA para resumirlas.",
    project5_desc: "Elimina fondos de tus fotos completamente gratis y rápido.",
    project6_desc: "Obtén información de miles de empresas colombianas para saber si están liquidadas o activas, perfecto para limpiar tu base de datos.",
    contact_title: "Contacto",
    contact_subtitle: "Construyamos algo juntos",
    contact_name: "Tu Nombre",
    contact_email: "Tu Email",
    contact_message: "Tu Mensaje",
    contact_send: "Enviar mensaje",
    typing_base: "Soy un full stack dev pero también un ",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_available: "Available for new projects",
    hero_greeting_1: "Hi I'm Samuel Gómez",
    hero_greeting_2: "better known as ",
    hero_download: "Download CV",
    about_title: "About me",
    about_p1: 'I am a <span class="text-white font-bold">QA Tester</span> with experience in web testing, ensuring the quality of applications before their release. I specialize in creating test cases, <span class="text-midu-purple font-semibold">identifying and reporting errors</span>, and collaborating with development teams to optimize products. I have worked with large companies, ensuring that their products are functional, efficient, and bug-free before reaching end users.',
    about_p2: 'I excel in implementing <span class="text-white font-bold">agile methodologies</span>, ensuring fluid communication between testers and developers. I have experience in <span class="text-midu-blue font-semibold">functional, regression and automation testing</span>, as well as interacting with clients to understand their needs and improve usability. My goal is to elevate software quality through rigorous testing and a proactive approach to problem solving.',
    skills_title_1: "Skills & ",
    skills_title_2: "Experience",
    skills_subtitle: "My professional journey and technical arsenal",
    skills_path: "Professional Path",
    job1_desc: "During my time at Webhelp, I had the opportunity to work as a QA Tester, where I gained experience in software testing and quality assurance in web, mobile and telephony environments.",
    job2_date: "2025 - Currently",
    job2_desc: "In my current role, I work as a Programmer and Data Analyst, leveraging automation tools and artificial intelligence to solve complex problems and drive the company's sales growth.",
    skills_languages: "Languages",
    skills_frameworks: "Frameworks & Tools",
    skills_ecosystem: "Ecosystem & Design",
    projects_title_1: "My ",
    projects_title_2: "Projects",
    projects_subtitle: "Learn something about my work",
    project1_desc: "Find the perfect color palettes for your projects.",
    project2_desc: "Julian RPO Trainer's landing page, a satisfied client showcasing his own training portfolio.",
    project3_desc: "Shorten your links more efficiently for your future customers.",
    project4_desc: "Extracting the latest news from Google and implementing AI to summarize it.",
    project5_desc: "Remove backgrounds from your photos completely free and fast.",
    project6_desc: "Get information on thousands of Colombian companies to find out if they are liquidated or active, perfect for cleaning your database.",
    contact_title: "Contact",
    contact_subtitle: "Let's build something together",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_message: "Your Message",
    contact_send: "Send Signal",
    typing_base: "I am a full stack dev but also a ",
  }
};

let currentLang = "es";

function toggleLang() {
  currentLang = currentLang === "es" ? "en" : "es";
  document.documentElement.lang = currentLang;
  applyTranslations();
  updateLangButton();
  restartTyping();
}

function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => el.classList.add("lang-switching"));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.classList.add("lang-switching"));

  setTimeout(() => {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        if (t[key].includes("<span")) {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });
    document.querySelectorAll("[data-i18n]").forEach(el => el.classList.remove("lang-switching"));
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.classList.remove("lang-switching"));
  }, 200);
}

function updateLangButton() {
  const flag = currentLang === "es" ? "🇪🇸" : "🇬🇧";
  const label = currentLang.toUpperCase();
  const flagEl = document.getElementById("lang-flag");
  const labelEl = document.getElementById("lang-label");
  const flagElM = document.getElementById("lang-flag-mobile");
  const labelElM = document.getElementById("lang-label-mobile");
  if (flagEl) flagEl.textContent = flag;
  if (labelEl) labelEl.textContent = label;
  if (flagElM) flagElM.textContent = flag;
  if (labelElM) labelElM.textContent = label;
}

// ===== Mobile Menu =====
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (!menu) return;
  if (menu.style.maxHeight && menu.style.maxHeight !== "0px") {
    menu.style.maxHeight = "0px";
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
  }
}

// ===== Typing Animation =====
const textArray = [
  "QA tester",
  "Gamer",
  "Pro",
  "Genius"
];

let currentTextIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 40;
const pauseBetweenChanges = 1000;
let typingTimeout = null;

function getBaseText() {
  return translations[currentLang].typing_base;
}

function typeAndDelete() {
  const infoElement = document.getElementById("typing-text");
  if (!infoElement) return;

  const baseText = getBaseText();
  const suffix = textArray[currentTextIndex];

  if (isDeleting) {
    if (currentLetterIndex > 0) {
      currentLetterIndex--;
      infoElement.textContent = baseText + suffix.substring(0, currentLetterIndex);
    } else {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % textArray.length;
      typingTimeout = setTimeout(typeAndDelete, pauseBetweenChanges);
      return;
    }
  } else {
    if (currentLetterIndex < suffix.length) {
      currentLetterIndex++;
      infoElement.textContent = baseText + suffix.substring(0, currentLetterIndex);
    } else {
      typingTimeout = setTimeout(() => {
        isDeleting = true;
        typeAndDelete();
      }, pauseBetweenChanges);
      return;
    }
  }
  typingTimeout = setTimeout(typeAndDelete, isDeleting ? deletingSpeed : typingSpeed);
}

function restartTyping() {
  if (typingTimeout) clearTimeout(typingTimeout);
  currentLetterIndex = 0;
  isDeleting = false;
  typeAndDelete();
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  typeAndDelete();

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", () => {
      console.log("Form submitted");
    });
  }
});
