const pages = [
  { id: "home", href: "index.html", navKey: "nav.home", titleKey: "meta.homeTitle", descKey: "meta.homeDescription" },
  { id: "migration", href: "migration.html", navKey: "nav.migration", titleKey: "meta.migrationTitle", descKey: "meta.migrationDescription" },
  { id: "achievements", href: "achievements.html", navKey: "nav.achievements", titleKey: "meta.achievementsTitle", descKey: "meta.achievementsDescription" },
  { id: "media", href: "media.html", navKey: "nav.media", titleKey: "meta.mediaTitle", descKey: "meta.mediaDescription" },
  { id: "guides", href: "guides.html", navKey: "nav.guides", titleKey: "meta.guidesTitle", descKey: "meta.guidesDescription" },
  { id: "kingdom", href: "kingdom.html", navKey: "nav.kingdom", titleKey: "meta.kingdomTitle", descKey: "meta.kingdomDescription" },
  { id: "contacts", href: "contacts.html", navKey: "nav.contacts", titleKey: "meta.contactsTitle", descKey: "meta.contactsDescription" }
];

const translations = {
  ru: {
    "brand.title": "Гильдия Viking Rise",
    "brand.subtitle": "Королевство, рейды, союзники",
    "nav.home": "Главная",
    "nav.migration": "Заявка на миграцию",
    "nav.achievements": "Достижения",
    "nav.media": "Медиа",
    "nav.guides": "Гайды",
    "nav.kingdom": "Структура королевства",
    "nav.contacts": "Контакты и ссылки",
    "layout.homeAria": "Главная страница гильдии",
    "layout.navAria": "Основная навигация",
    "layout.language": "Язык",
    "layout.ru": "RU",
    "layout.en": "EN",
    "footer.note": "Сайт гильдии Viking Rise",
    "meta.homeTitle": "Гильдия Viking Rise",
    "meta.homeDescription": "Сайт гильдии Viking Rise: заявки, гайды, достижения, медиа, структура королевства и контакты.",
    "meta.migrationTitle": "Заявка на миграцию | Гильдия Viking Rise",
    "meta.migrationDescription": "Правила переезда, требования к игрокам и форма заявки на миграцию в гильдию Viking Rise.",
    "meta.achievementsTitle": "Достижения | Гильдия Viking Rise",
    "meta.achievementsDescription": "Победы, рекорды, сезонные результаты и важные даты гильдии Viking Rise.",
    "meta.mediaTitle": "Медиа | Гильдия Viking Rise",
    "meta.mediaDescription": "Скриншоты, видео, афиши и архив боевых событий гильдии Viking Rise.",
    "meta.guidesTitle": "Гайды | Гильдия Viking Rise",
    "meta.guidesDescription": "Гайды Viking Rise по PvP, навыкам, маунтам, экипировке, событиям и развитию.",
    "meta.kingdomTitle": "Структура королевства | Гильдия Viking Rise",
    "meta.kingdomDescription": "Состав руководства гильдии Viking Rise: лидер R5 и офицеры R4.",
    "meta.contactsTitle": "Контакты и ссылки | Гильдия Viking Rise",
    "meta.contactsDescription": "Контакты, ссылки, Discord, лидеры и полезные ресурсы гильдии Viking Rise.",
    "home.eyebrow": "Viking Rise Guild Hub",
    "home.heroTitle": "Дом гильдии для набора, координации и общей истории.",
    "home.heroText": "Здесь будет центр вашей гильдии: заявки для новых игроков, победы, медиаархив, полезные гайды, структура королевства и быстрые ссылки.",
    "home.apply": "Подать заявку",
    "home.guides": "Открыть гайды",
    "home.sectionsEyebrow": "Разделы",
    "home.sectionsTitle": "Навигация по штабу",
    "home.footer": "Скелет сайта для дальнейшего наполнения",
    "cards.migrationTitle": "Заявка на миграцию",
    "cards.migrationText": "Требования, анкета кандидата и статус рассмотрения.",
    "cards.achievementsTitle": "Достижения",
    "cards.achievementsText": "Вехи королевства, победы, рейтинги и важные даты.",
    "cards.mediaTitle": "Медиа",
    "cards.mediaText": "Скриншоты, видео, афиши событий и галерея битв.",
    "cards.guidesTitle": "Гайды",
    "cards.guidesText": "Сборки, развитие, PvP, события и памятки для новичков.",
    "cards.kingdomTitle": "Структура королевства",
    "cards.kingdomText": "Состав, роли, дипломатия и зоны ответственности.",
    "cards.contactsTitle": "Контакты и ссылки",
    "cards.contactsText": "Discord, игровые координаты, лидеры и внешние ресурсы.",
    "cards.open": "Перейти",
    "migration.eyebrow": "Заявка",
    "migration.title": "Заявка на миграцию",
    "migration.intro": "Раздел для правил переезда, требований к игрокам и формы анкеты.",
    "migration.requirementsTitle": "Требования",
    "migration.reqPower": "Минимальная сила игрока: указать позже.",
    "migration.reqActivity": "Активность в событиях и войнах королевства.",
    "migration.reqContact": "Связь через Discord или другой основной канал.",
    "migration.formTitle": "Анкета",
    "migration.nickname": "Игровой ник",
    "migration.playerId": "ID игрока",
    "migration.power": "Текущая сила",
    "migration.comment": "Комментарий",
    "migration.submit": "Отправить заявку",
    "migration.nicknamePlaceholder": "Например: Ragnar",
    "migration.playerIdPlaceholder": "Ваш ID",
    "migration.powerPlaceholder": "Например: 45M",
    "migration.commentPlaceholder": "Опыт, часовой пояс, цели миграции",
    "migration.footer": "Заявки рассматриваются офицерами",
    "achievements.eyebrow": "Зал славы",
    "achievements.title": "Достижения",
    "achievements.intro": "Место для побед, рекордов, сезонных результатов и важных дат гильдии.",
    "achievements.item1Title": "Победа в событии",
    "achievements.item1Text": "Добавьте описание, дату, участников и скриншоты.",
    "achievements.item2Title": "Рекорд силы",
    "achievements.item2Text": "Здесь можно вести общий прогресс гильдии и лучших игроков.",
    "achievements.item3Title": "Союзное событие",
    "achievements.item3Text": "Отмечайте дипломатические успехи и совместные кампании.",
    "achievements.footer": "Летопись побед",
    "media.eyebrow": "Медиа",
    "media.title": "Медиа",
    "media.intro": "Галерея для скриншотов, клипов, афиш и отчетов после событий.",
    "media.screenshots": "Скриншоты",
    "media.video": "Видео",
    "media.posters": "Афиши",
    "media.battles": "Архив битв",
    "media.footer": "Медиаархив пополняется",
    "guides.eyebrow": "GUL Ultimate Guide",
    "guides.title": "Гайды Viking Rise",
    "guides.intro": "Полная текстовая версия Excel-гайда для K709. Вкладки ниже повторяют листы оригинального документа: PvP, сезонные сборки, маунты, экипировка, события, опыт, фрагменты и исследования.",
    "guides.download": "Открыть Google-таблицу",
    "guides.original": "Открыть оригинал",
    "guides.calculator": "PvP калькулятор",
    "guides.workbook": "Книга гайда",
    "guides.loading": "Загрузка гайда",
    "guides.search": "Поиск",
    "guides.searchPlaceholder": "Навык, герой, событие",
    "guides.credit": "Источник: GUL Ultimate Guide. Credits: Thorbjørnsson.",
    "guides.tabsAria": "Вкладки гайда",
    "kingdom.eyebrow": "Структура",
    "kingdom.title": "Структура королевства",
    "kingdom.intro": "Состав руководства гильдии: лидер R5 и офицеры R4.",
    "kingdom.leaderEyebrow": "Лидер гильдии",
    "kingdom.leaderText": "Главный лидер гильдии. Приоритетные решения, стратегия, дипломатия и финальное слово по ключевым вопросам.",
    "kingdom.officersEyebrow": "Офицеры",
    "kingdom.officersTitle": "R4 состав",
    "kingdom.contactTitle": "Как обращаться",
    "kingdom.contactText": "По срочным вопросам пишите R5 или любому доступному R4. Для миграции, дипломатии и спорных решений лучше сразу указывать ник, координаты и краткое описание ситуации.",
    "kingdom.footer": "Порядок в королевстве",
    "contacts.eyebrow": "Контакты",
    "contacts.title": "Контакты и ссылки",
    "contacts.intro": "Быстрый доступ к каналам связи, лидерам, картам и внешним ресурсам.",
    "contacts.discordTitle": "Discord",
    "contacts.discordText": "Добавьте ссылку на сервер и правила входа.",
    "contacts.discordLink": "Ссылка будет здесь",
    "contacts.leadersTitle": "Лидеры",
    "contacts.leadersText": "Ники R5/R4, часовые пояса и зоны ответственности.",
    "contacts.leadersLink": "Список будет здесь",
    "contacts.resourcesTitle": "Ресурсы",
    "contacts.resourcesText": "Карта, таблицы, календарь событий и полезные сайты.",
    "contacts.resourcesLink": "Ссылки будут здесь",
    "contacts.footer": "Связь без лишних поисков"
  },
  en: {
    "brand.title": "Viking Rise Guild",
    "brand.subtitle": "Kingdom, raids, allies",
    "nav.home": "Home",
    "nav.migration": "Migration request",
    "nav.achievements": "Achievements",
    "nav.media": "Media",
    "nav.guides": "Guides",
    "nav.kingdom": "Kingdom structure",
    "nav.contacts": "Contacts and links",
    "layout.homeAria": "Guild home page",
    "layout.navAria": "Main navigation",
    "layout.language": "Language",
    "layout.ru": "RU",
    "layout.en": "EN",
    "footer.note": "Viking Rise guild website",
    "meta.homeTitle": "Viking Rise Guild",
    "meta.homeDescription": "Viking Rise guild website with applications, guides, achievements, media, kingdom structure, and contacts.",
    "meta.migrationTitle": "Migration request | Viking Rise Guild",
    "meta.migrationDescription": "Migration rules, player requirements, and application form for the Viking Rise guild.",
    "meta.achievementsTitle": "Achievements | Viking Rise Guild",
    "meta.achievementsDescription": "Victories, records, seasonal results, and important dates for the Viking Rise guild.",
    "meta.mediaTitle": "Media | Viking Rise Guild",
    "meta.mediaDescription": "Screenshots, videos, posters, and battle archive for the Viking Rise guild.",
    "meta.guidesTitle": "Guides | Viking Rise Guild",
    "meta.guidesDescription": "Viking Rise guides for PvP, skills, mounts, gear, events, and progression.",
    "meta.kingdomTitle": "Kingdom structure | Viking Rise Guild",
    "meta.kingdomDescription": "Viking Rise guild leadership roster: R5 leader and R4 officers.",
    "meta.contactsTitle": "Contacts and links | Viking Rise Guild",
    "meta.contactsDescription": "Contacts, links, Discord, leaders, and useful resources for the Viking Rise guild.",
    "home.eyebrow": "Viking Rise Guild Hub",
    "home.heroTitle": "A guild home for recruiting, coordination, and shared history.",
    "home.heroText": "This will be your guild center: applications for new players, victories, media archive, useful guides, kingdom structure, and quick links.",
    "home.apply": "Apply now",
    "home.guides": "Open guides",
    "home.sectionsEyebrow": "Sections",
    "home.sectionsTitle": "Guild headquarters navigation",
    "home.footer": "Website skeleton for future content",
    "cards.migrationTitle": "Migration request",
    "cards.migrationText": "Requirements, candidate form, and review status.",
    "cards.achievementsTitle": "Achievements",
    "cards.achievementsText": "Kingdom milestones, victories, rankings, and key dates.",
    "cards.mediaTitle": "Media",
    "cards.mediaText": "Screenshots, videos, event posters, and battle gallery.",
    "cards.guidesTitle": "Guides",
    "cards.guidesText": "Builds, growth, PvP, events, and notes for new players.",
    "cards.kingdomTitle": "Kingdom structure",
    "cards.kingdomText": "Roster, roles, diplomacy, and areas of responsibility.",
    "cards.contactsTitle": "Contacts and links",
    "cards.contactsText": "Discord, in-game coordinates, leaders, and external resources.",
    "cards.open": "Open",
    "migration.eyebrow": "Application",
    "migration.title": "Migration request",
    "migration.intro": "Rules for migration, player requirements, and the application form.",
    "migration.requirementsTitle": "Requirements",
    "migration.reqPower": "Minimum player power: to be defined later.",
    "migration.reqActivity": "Activity in events and kingdom wars.",
    "migration.reqContact": "Communication through Discord or another main channel.",
    "migration.formTitle": "Application form",
    "migration.nickname": "In-game nickname",
    "migration.playerId": "Player ID",
    "migration.power": "Current power",
    "migration.comment": "Comment",
    "migration.submit": "Submit application",
    "migration.nicknamePlaceholder": "Example: Ragnar",
    "migration.playerIdPlaceholder": "Your ID",
    "migration.powerPlaceholder": "Example: 45M",
    "migration.commentPlaceholder": "Experience, time zone, migration goals",
    "migration.footer": "Applications are reviewed by officers",
    "achievements.eyebrow": "Hall of Fame",
    "achievements.title": "Achievements",
    "achievements.intro": "A place for victories, records, seasonal results, and important guild dates.",
    "achievements.item1Title": "Event victory",
    "achievements.item1Text": "Add the description, date, participants, and screenshots.",
    "achievements.item2Title": "Power record",
    "achievements.item2Text": "Track guild progress and top players here.",
    "achievements.item3Title": "Alliance event",
    "achievements.item3Text": "Mark diplomatic wins and joint campaigns.",
    "achievements.footer": "Chronicle of victories",
    "media.eyebrow": "Media",
    "media.title": "Media",
    "media.intro": "Gallery for screenshots, clips, posters, and reports after events.",
    "media.screenshots": "Screenshots",
    "media.video": "Video",
    "media.posters": "Posters",
    "media.battles": "Battle archive",
    "media.footer": "Media archive in progress",
    "guides.eyebrow": "GUL Ultimate Guide",
    "guides.title": "Viking Rise Guides",
    "guides.intro": "Full text version of the K709 Excel guide. The tabs below follow the original document sheets: PvP, seasonal setups, mounts, gear, events, experience, fragments, and research.",
    "guides.download": "Open Google Sheet",
    "guides.original": "Open original",
    "guides.calculator": "PvP calculator",
    "guides.workbook": "Workbook",
    "guides.loading": "Loading guide",
    "guides.search": "Search",
    "guides.searchPlaceholder": "Skill, hero, event",
    "guides.credit": "Source: GUL Ultimate Guide. Credits: Thorbjørnsson.",
    "guides.tabsAria": "Guide tabs",
    "kingdom.eyebrow": "Structure",
    "kingdom.title": "Kingdom structure",
    "kingdom.intro": "Guild leadership roster: R5 leader and R4 officers.",
    "kingdom.leaderEyebrow": "Guild leader",
    "kingdom.leaderText": "Main guild leader. Priority decisions, strategy, diplomacy, and the final word on key matters.",
    "kingdom.officersEyebrow": "Officers",
    "kingdom.officersTitle": "R4 roster",
    "kingdom.contactTitle": "How to contact",
    "kingdom.contactText": "For urgent questions, message the R5 or any available R4. For migration, diplomacy, and disputed decisions, include your nickname, coordinates, and a short description.",
    "kingdom.footer": "Order in the kingdom",
    "contacts.eyebrow": "Contacts",
    "contacts.title": "Contacts and links",
    "contacts.intro": "Quick access to communication channels, leaders, maps, and external resources.",
    "contacts.discordTitle": "Discord",
    "contacts.discordText": "Add the server invite and entry rules.",
    "contacts.discordLink": "Link will be here",
    "contacts.leadersTitle": "Leaders",
    "contacts.leadersText": "R5/R4 nicknames, time zones, and areas of responsibility.",
    "contacts.leadersLink": "List will be here",
    "contacts.resourcesTitle": "Resources",
    "contacts.resourcesText": "Map, sheets, event calendar, and useful sites.",
    "contacts.resourcesLink": "Links will be here",
    "contacts.footer": "Contact without extra searching"
  }
};

function currentPage() {
  const file = location.pathname.split("/").pop() || "index.html";
  return pages.find((page) => page.href === file) || pages[0];
}

function t(lang, key) {
  return (translations[lang] && translations[lang][key]) || translations.ru[key] || key;
}

function renderSharedLayout() {
  const page = currentPage();
  const header = document.querySelector(".site-header");
  const footer = document.querySelector(".site-footer");

  if (header) {
    header.innerHTML = `
      <a class="brand" href="index.html" data-i18n-aria-label="layout.homeAria">
        <span class="brand-mark">VR</span>
        <span>
          <strong data-i18n="brand.title">Гильдия Viking Rise</strong>
          <small data-i18n="brand.subtitle">Королевство, рейды, союзники</small>
        </span>
      </a>
      <nav class="top-nav" data-i18n-aria-label="layout.navAria">
        ${pages.map((item) => `
          <a href="${item.href}" class="${item.id === page.id ? "active" : ""}" data-i18n="${item.navKey}">${t("ru", item.navKey)}</a>
        `).join("")}
      </nav>
      <div class="language-switcher" data-i18n-aria-label="layout.language" role="group">
        <button type="button" data-lang-switch="ru" data-i18n="layout.ru">RU</button>
        <button type="button" data-lang-switch="en" data-i18n="layout.en">EN</button>
      </div>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <span data-i18n="brand.title">Гильдия Viking Rise</span>
      <span data-i18n="${page.id}.footer">${t("ru", `${page.id}.footer`)}</span>
    `;
  }
}

function ensureMeta(name, attr, value) {
  let node = document.head.querySelector(`meta[${name}="${attr}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(name, attr);
    document.head.appendChild(node);
  }
  node.setAttribute("content", value);
}

function ensureHeadLinks() {
  if (!document.head.querySelector('link[rel="icon"]')) {
    const icon = document.createElement("link");
    icon.rel = "icon";
    icon.type = "image/png";
    icon.href = "assets/guild-logo-source.png";
    document.head.appendChild(icon);
  }
}

function applyMeta(lang) {
  const page = currentPage();
  const title = t(lang, page.titleKey);
  const description = t(lang, page.descKey);

  document.title = title;
  ensureMeta("name", "description", description);
  ensureMeta("property", "og:title", title);
  ensureMeta("property", "og:description", description);
  ensureMeta("property", "og:type", "website");
  ensureMeta("property", "og:image", "assets/hero-viking-guild.png");
}

function applyLanguage(lang) {
  const safeLang = translations[lang] ? lang : "ru";
  const dictionary = translations[safeLang];

  document.documentElement.lang = safeLang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-placeholder-i18n]").forEach((input) => {
    const key = input.dataset.placeholderI18n;
    if (dictionary[key]) {
      input.placeholder = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const key = node.dataset.i18nAriaLabel;
    if (dictionary[key]) {
      node.setAttribute("aria-label", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.classList.toggle("active", button.dataset.langSwitch === safeLang);
    button.setAttribute("aria-pressed", String(button.dataset.langSwitch === safeLang));
  });

  localStorage.setItem("guildLanguage", safeLang);
  applyMeta(safeLang);
  window.dispatchEvent(new CustomEvent("guild-language-change", { detail: { lang: safeLang } }));
}

function initLanguageControls() {
  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langSwitch));
  });
}

function initLanguageGate() {
  const gate = document.querySelector("[data-language-gate]");
  const savedLanguage = localStorage.getItem("guildLanguage") || "ru";

  applyLanguage(savedLanguage);

  if (!gate) return;

  document.body.classList.add("has-language-gate");
  document.querySelectorAll("[data-lang-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.langChoice);
      gate.classList.add("is-hidden");
      document.body.classList.remove("has-language-gate");
    });
  });
}

ensureHeadLinks();
renderSharedLayout();
initLanguageControls();
initLanguageGate();
