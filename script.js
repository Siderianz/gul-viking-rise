const pages = [
  { id: "home", href: "index.html", navKey: "nav.home", titleKey: "meta.homeTitle", descKey: "meta.homeDescription" },
  { id: "announcements", href: "announcements.html", navKey: "nav.announcements", titleKey: "meta.announcementsTitle", descKey: "meta.announcementsDescription" },
  { id: "kingdom", href: "kingdom.html", navKey: "nav.kingdom", titleKey: "meta.kingdomTitle", descKey: "meta.kingdomDescription" },
  { id: "migration", href: "migration.html", navKey: "nav.migration", titleKey: "meta.migrationTitle", descKey: "meta.migrationDescription" },
  { id: "achievements", href: "achievements.html", navKey: "nav.achievements", titleKey: "meta.achievementsTitle", descKey: "meta.achievementsDescription" },
  { id: "media", href: "media.html", navKey: "nav.media", titleKey: "meta.mediaTitle", descKey: "meta.mediaDescription" },
  { id: "guides", href: "guides.html", navKey: "nav.guides", titleKey: "meta.guidesTitle", descKey: "meta.guidesDescription" },
  { id: "contacts", href: "contacts.html", navKey: "nav.contacts", titleKey: "meta.contactsTitle", descKey: "meta.contactsDescription" }
];

const translations = {
  ru: {
    "announcements.eventsDesc": "Сборы, битвы королевства и встречи гильдии.",
    "announcements.remindersDesc": "Важное время и подготовка к предстоящим событиям.",
    "announcements.updatesDesc": "Важные вести от руководства GUL.",
    "announcements.status": "В ожидании новых вестей",
    "cards.announcementsTitle": "Следи за сигналом",
    "cards.announcementsText": "События, напоминания и вести из чертогов. Будь готов к следующему шагу GUL.",
    "cards.announcementsAction": "Читать объявления",
    "nav.announcements": "Объявления",
    "meta.announcementsTitle": "Объявления | GUL",
    "meta.announcementsDescription": "События, напоминания и новости гильдии GUL.",
    "announcements.eyebrow": "Вести из чертогов",
    "announcements.title": "Следи за сигналом",
    "announcements.intro": "События, напоминания и важные вести — всё для следующего шага GUL.",
    "announcements.events": "События",
    "announcements.reminders": "Напоминания",
    "announcements.updates": "Новости гильдии",
    "announcements.waitTitle": "Следующий призыв прозвучит здесь.",
    "announcements.waitText": "Новые объявления скоро появятся. Пока загляни в Discord гильдии, чтобы оставаться на связи.",
    "announcements.discord": "Открыть Discord",
    "announcements.footer": "События и вести GUL",
    "intro.tagline": "Здесь рождаются легенды.",
    "intro.languageQuestion": "На каком языке прозвучит твоя сага?",
    "brand.title": "GUL • Viking Rise",
    "brand.subtitle": "Одна гильдия. Одна сага.",
    "nav.home": "Главная",
    "nav.migration": "Миграция",
    "nav.achievements": "Достижения",
    "nav.media": "Медиа",
    "nav.guides": "Гайды",
    "nav.kingdom": "Руководство",
    "nav.contacts": "Связь",
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
    "home.eyebrow": "GUL • Viking Rise",
    "home.heroTitle": "Пусть вороны несут наше имя.",
    "home.heroText": "От фьордов до передовой. GUL сражается вместе, держит рубеж и оставляет свой след.",
    "home.apply": "Подать заявку",
    "home.guides": "Открыть гайды",
    "home.sectionsEyebrow": "За вратами",
    "home.sectionsTitle": "Выбери свой курс",
    "home.sectionsIntro": "Встань в строй. Вспомни битвы. Найди свой следующий шаг.",
    "home.footer": "Скелет сайта для дальнейшего наполнения",
    "cards.migrationTitle": "Держи курс на GUL",
    "cards.migrationText": "Новые берега. Надёжные союзники. Найди своё место в наших рядах — узнай требования и подай заявку на переход.",
    "cards.achievementsTitle": "Слава, добытая в бою",
    "cards.achievementsText": "Трофеи, добытые в бою. Победы, вписанные в нашу историю. След, который мы оставляем.",
    "cards.mediaTitle": "Сквозь огонь и фьорды",
    "cards.mediaText": "Алые паруса. Поднятые щиты. Незабываемые битвы. Взгляни на GUL глазами наших воинов.",
    "cards.guidesTitle": "Отточи своё мастерство",
    "cards.guidesText": "Прежде чем опустится топор, битва уже спланирована. Набирай силу и учись бить точно.",
    "cards.kingdomTitle": "Чертоги GUL",
    "cards.kingdomText": "За стеной щитов стоят те, кто ведёт вперёд. Познакомься с хранителями нашего королевства.",
    "cards.contactsTitle": "Отправь ворона",
    "cards.contactsText": "Даже за фьордами наши чертоги рядом. Обратись с вопросом, предложением или желанием вступить в наши ряды.",
    "cards.migrationAction": "Встать в строй",
    "cards.achievementsAction": "Наши победы",
    "cards.mediaAction": "Открыть галерею",
    "cards.guidesAction": "К военному столу",
    "cards.kingdomAction": "Наши лидеры",
    "cards.contactsAction": "Связаться",
    "cards.open": "Перейти",
    "migration.eyebrow": "Твой путь в GUL",
    "migration.title": "Новые берега. Новый союз.",
    "migration.intro": "Держи курс на GUL. Узнай, что мы ждём от союзников, и расскажи о себе нашим R4.",
    "migration.requirementsTitle": "Прежде чем поднять паруса",
    "migration.reqPower": "Требования к силе: уточни актуальный порог у R4.",
    "migration.reqActivity": "Будь рядом с гильдией в событиях и войнах королевства.",
    "migration.reqContact": "Оставайся на связи через Discord или основной канал гильдии.",
    "migration.reqRecord": "Приходи с чистой репутацией: без предательств, травли и намеренного вреда в прежнем королевстве.",
    "migration.formTitle": "Займи место в наших рядах",
    "migration.nickname": "Игровой ник",
    "migration.playerId": "ID игрока",
    "migration.power": "Текущая сила",
    "migration.comment": "Расскажи о себе",
    "migration.submit": "Подать заявку в GUL",
    "migration.nicknamePlaceholder": "Например: Ragnar",
    "migration.playerIdPlaceholder": "Ваш ID",
    "migration.powerPlaceholder": "Например: 45M",
    "migration.commentPlaceholder": "Твой опыт, часовой пояс и почему ты хочешь присоединиться к GUL",
    "migration.footer": "Заявки рассматриваются R4",
    "achievements.eyebrow": "Зал славы",
    "achievements.title": "Слава, добытая в бою",
    "achievements.intro": "Заслуженные знаки отличия. Новые места в рейтингах. Достигнутые рубежи. Здесь будут собраны награды GUL.",
    "achievements.item1Title": "Победа в событии",
    "achievements.item1Text": "Добавьте описание, дату, участников и скриншоты.",
    "achievements.item2Title": "Рекорд силы",
    "achievements.item2Text": "Здесь можно вести общий прогресс гильдии и лучших игроков.",
    "achievements.item3Title": "Союзное событие",
    "achievements.item3Text": "Отмечайте дипломатические успехи и совместные кампании.",
    "achievements.waitLabel": "Летопись пополняется",
    "achievements.waitTitle": "Следующая победа займёт место здесь.",
    "achievements.waitText": "Мы собираем наши награды. Скоро здесь появятся знаки отличия гильдии, места в рейтингах событий и достигнутые рубежи.",
    "achievements.waitReturn": "Возвращайся. Слава не заставит себя ждать.",
    "achievements.footer": "Летопись побед",
    "media.eyebrow": "Под нашим знаменем",
    "media.title": "Сквозь огонь и фьорды",
    "media.intro": "Наш мир глазами тех, кто вместе отправляется в поход и вступает в бой.",
    "media.screenshots": "Скриншоты",
    "media.video": "Видео",
    "media.posters": "Афиши",
    "media.battles": "Архив битв",
    "media.waitLabel": "В кадре — GUL",
    "media.waitTitle": "Некоторые моменты стоит увидеть.",
    "media.waitText": "Мы собираем кадры наших походов, битв и жизни гильдии. Скоро здесь появятся фотографии и видео GUL.",
    "media.waitReturn": "Первые кадры уже на горизонте.",
    "media.footer": "Галерея пополняется",
    "guides.footer": "GUL · Viking Rise",
    "guides.eyebrow": "GUL Ultimate Guide",
    "guides.title": "Гайды Viking Rise",
    "guides.intro": "Выбери тему и найди нужные советы по битвам, сборкам и развитию. Оригинальная таблица и PvP-калькулятор всегда под рукой.",
    "guides.fullWorkbook": "Оригинальная таблица — полная версия",
    "guides.download": "Открыть Google-таблицу",
    "guides.original": "Открыть оригинал",
    "guides.calculator": "PvP калькулятор",
    "guides.workbook": "Книга гайда",
    "guides.loading": "Загрузка гайда",
    "guides.search": "Поиск",
    "guides.searchPlaceholder": "Навык, герой, событие",
    "guides.credit": "Источник: GUL Ultimate Guide. Credits: Thorbjørnsson.",
    "guides.tabsAria": "Вкладки гайда",
    "kingdom.eyebrow": "У руля",
    "kingdom.title": "Чертоги GUL",
    "kingdom.intro": "Состав руководства гильдии: лидер R5 и офицеры R4.",
    "kingdom.leaderEyebrow": "Лидер гильдии",
    "kingdom.leaderContact": "Написать лидеру",
    "kingdom.leaderText": "У руля GUL. Заключает союзы, ведёт гильдию в бой и определяет курс королевства.",
    "kingdom.officersEyebrow": "Офицеры",
    "kingdom.officersTitle": "R4 состав",
    "kingdom.contactTitle": "Как обращаться",
    "kingdom.contactText": "По срочным вопросам пишите R5 или любому доступному R4. Для миграции, дипломатии и спорных решений лучше сразу указывать ник, координаты и краткое описание ситуации.",
    "kingdom.footer": "Порядок в королевстве",
    "contacts.eyebrow": "Связь с GUL",
    "contacts.title": "Отправь ворона",
    "contacts.intro": "Найди свою команду, свяжись с лидером или подготовься к следующему походу.",
    "contacts.discordTitle": "Наш общий зал",
    "contacts.discordText": "Присоединяйся к GUL в Discord — общайся с командой и оставайся на связи.",
    "contacts.discordLink": "Войти в Discord",
    "contacts.leadersTitle": "Напиши лидеру",
    "contacts.leadersText": "По вопросам миграции, союзов и гильдии напиши The Punisher в Telegram.",
    "contacts.leadersLink": "Открыть Telegram",
    "contacts.resourcesTitle": "К военному столу",
    "contacts.resourcesText": "Гайды, сборки и калькуляторы — всё, что нужно для подготовки к битве.",
    "contacts.resourcesLink": "Открыть гайды",
    "contacts.footer": "Связь без лишних поисков"
  },
  en: {
    "announcements.eventsDesc": "Rallies, kingdom battles, and guild gatherings.",
    "announcements.remindersDesc": "The times and preparations you need to remember.",
    "announcements.updatesDesc": "Important word from GUL leadership.",
    "announcements.status": "Awaiting the next dispatch",
    "cards.announcementsTitle": "Watch for the Signal",
    "cards.announcementsText": "Events, reminders, and word from the hall. Stay ready for the next move with GUL.",
    "cards.announcementsAction": "View Announcements",
    "nav.announcements": "Announcements",
    "meta.announcementsTitle": "Announcements | GUL",
    "meta.announcementsDescription": "Events, reminders, and guild news from GUL.",
    "announcements.eyebrow": "Word from the hall",
    "announcements.title": "Watch for the Signal",
    "announcements.intro": "Events, reminders, and important news. Everything you need for GUL’s next move.",
    "announcements.events": "Events",
    "announcements.reminders": "Reminders",
    "announcements.updates": "Guild Updates",
    "announcements.waitTitle": "The next call will sound here.",
    "announcements.waitText": "New announcements will appear soon. Until then, visit our guild Discord to stay connected.",
    "announcements.discord": "Open Discord",
    "announcements.footer": "Events and news from GUL",
    "intro.tagline": "Every legend begins here.",
    "intro.languageQuestion": "In which tongue shall your saga be told?",
    "brand.title": "GUL • Viking Rise",
    "brand.subtitle": "One guild. One saga.",
    "nav.home": "Home",
    "nav.migration": "Migration",
    "nav.achievements": "Achievements",
    "nav.media": "Media",
    "nav.guides": "Guides",
    "nav.kingdom": "Leadership",
    "nav.contacts": "Contact",
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
    "home.eyebrow": "GUL • Viking Rise",
    "home.heroTitle": "Let the ravens carry our name.",
    "home.heroText": "From the fjords to the front lines. GUL fights together, holds its ground, and leaves its mark.",
    "home.apply": "Apply now",
    "home.guides": "Open guides",
    "home.sectionsEyebrow": "Beyond the gates",
    "home.sectionsTitle": "Choose Your Course",
    "home.sectionsIntro": "Join the ranks. Relive the battles. Find your next move.",
    "home.footer": "Website skeleton for future content",
    "cards.migrationTitle": "Set Sail for GUL",
    "cards.migrationText": "New shores. Stronger allies. Find your place in our ranks—check the requirements and request your passage.",
    "cards.achievementsTitle": "Glory Hard-Won",
    "cards.achievementsText": "Trophies earned in battle. Victories carved into our history. This is the mark we leave.",
    "cards.mediaTitle": "Through Fire & Fjord",
    "cards.mediaText": "Red sails. Raised shields. Unforgettable battles. See GUL through the eyes of our warriors.",
    "cards.guidesTitle": "Sharpen Your Edge",
    "cards.guidesText": "Before the axe falls, the battle is planned. Build your strength and learn to strike with purpose.",
    "cards.kingdomTitle": "The Hall of GUL",
    "cards.kingdomText": "Behind every shield wall stand those who lead. Meet the guardians of our kingdom.",
    "cards.contactsTitle": "Send a Raven",
    "cards.contactsText": "Across the fjords, our halls are within reach. Bring your questions, your plans, or your pledge.",
    "cards.migrationAction": "Join the Ranks",
    "cards.achievementsAction": "See Our Victories",
    "cards.mediaAction": "Enter the Gallery",
    "cards.guidesAction": "Study the War Table",
    "cards.kingdomAction": "Meet the Leaders",
    "cards.contactsAction": "Make Contact",
    "cards.open": "Open",
    "migration.eyebrow": "Your passage to GUL",
    "migration.title": "New Shores. Stronger Allies.",
    "migration.intro": "Set your course for GUL. See what we ask of our allies, then tell our R4s what you bring to the ranks.",
    "migration.requirementsTitle": "Before You Set Sail",
    "migration.reqPower": "Power requirements: ask our R4s about the current threshold.",
    "migration.reqActivity": "Stand with the guild in events and kingdom wars.",
    "migration.reqContact": "Stay connected through Discord or our main guild channel.",
    "migration.reqRecord": "Arrive with a clean record: no history of betrayal, harassment, or deliberate disruption in your previous kingdom.",
    "migration.formTitle": "Claim Your Place",
    "migration.nickname": "In-game nickname",
    "migration.playerId": "Player ID",
    "migration.power": "Current power",
    "migration.comment": "What do you bring to GUL?",
    "migration.submit": "Apply to Join GUL",
    "migration.nicknamePlaceholder": "Example: Ragnar",
    "migration.playerIdPlaceholder": "Your ID",
    "migration.powerPlaceholder": "Example: 45M",
    "migration.commentPlaceholder": "Your experience, time zone, and why you want to join GUL",
    "migration.footer": "Applications are reviewed by R4s",
    "achievements.eyebrow": "Hall of Fame",
    "achievements.title": "Glory Hard-Won",
    "achievements.intro": "Badges earned. Ranks climbed. Milestones reached. The honours of GUL will stand here.",
    "achievements.item1Title": "Event victory",
    "achievements.item1Text": "Add the description, date, participants, and screenshots.",
    "achievements.item2Title": "Power record",
    "achievements.item2Text": "Track guild progress and top players here.",
    "achievements.item3Title": "Alliance event",
    "achievements.item3Text": "Mark diplomatic wins and joint campaigns.",
    "achievements.waitLabel": "The chronicle is taking shape",
    "achievements.waitTitle": "The next triumph belongs here.",
    "achievements.waitText": "Our honours are being gathered. Guild badges, event rankings, and hard-earned milestones will be displayed here soon.",
    "achievements.waitReturn": "Return soon. Glory is worth the wait.",
    "achievements.footer": "Chronicle of victories",
    "media.eyebrow": "Behind the banner",
    "media.title": "Through Fire & Fjord",
    "media.intro": "Our world, through the eyes of those who sail and fight together.",
    "media.screenshots": "Screenshots",
    "media.video": "Video",
    "media.posters": "Posters",
    "media.battles": "Battle archive",
    "media.waitLabel": "GUL in focus",
    "media.waitTitle": "Some moments deserve to be seen.",
    "media.waitText": "We are gathering scenes from our voyages, battles, and life in the guild. Photos and videos from GUL will land here soon.",
    "media.waitReturn": "The first glimpses are on the horizon.",
    "media.footer": "The gallery is taking shape",
    "guides.footer": "GUL · Viking Rise",
    "guides.eyebrow": "GUL Ultimate Guide",
    "guides.title": "Viking Rise Guides",
    "guides.intro": "Choose a topic and find advice on battles, builds, and growth. Keep the original workbook and PvP calculator close at hand.",
    "guides.fullWorkbook": "Original workbook — full version",
    "guides.download": "Open Google Sheet",
    "guides.original": "Open original",
    "guides.calculator": "PvP calculator",
    "guides.workbook": "Workbook",
    "guides.loading": "Loading guide",
    "guides.search": "Search",
    "guides.searchPlaceholder": "Skill, hero, event",
    "guides.credit": "Source: GUL Ultimate Guide. Credits: Thorbjørnsson.",
    "guides.tabsAria": "Guide tabs",
    "kingdom.eyebrow": "At the helm",
    "kingdom.title": "The Hall of GUL",
    "kingdom.intro": "Guild leadership roster: R5 leader and R4 officers.",
    "kingdom.leaderEyebrow": "Guild leader",
    "kingdom.leaderContact": "Message the Leader",
    "kingdom.leaderText": "At the helm of GUL. Forging alliances, leading the charge, and setting the course for the kingdom.",
    "kingdom.officersEyebrow": "Officers",
    "kingdom.officersTitle": "R4 roster",
    "kingdom.contactTitle": "How to contact",
    "kingdom.contactText": "For urgent questions, message the R5 or any available R4. For migration, diplomacy, and disputed decisions, include your nickname, coordinates, and a short description.",
    "kingdom.footer": "Order in the kingdom",
    "contacts.eyebrow": "Reach GUL",
    "contacts.title": "Send a Raven",
    "contacts.intro": "Find your crew, reach the leader, or prepare for your next campaign.",
    "contacts.discordTitle": "The Guild Hall",
    "contacts.discordText": "Join GUL on Discord. Meet the crew and stay connected with the guild.",
    "contacts.discordLink": "Join Our Discord",
    "contacts.leadersTitle": "A Word with the Leader",
    "contacts.leadersText": "For migration, alliances, or guild questions, message The Punisher on Telegram.",
    "contacts.leadersLink": "Message on Telegram",
    "contacts.resourcesTitle": "The War Table",
    "contacts.resourcesText": "Guides, builds, and calculators to help you prepare for battle.",
    "contacts.resourcesLink": "Explore the Guides",
    "contacts.footer": "Contact without extra searching"
  }
};

const languageNames = {ru:'Русский',en:'English',vi:'Tiếng Việt',tr:'Türkçe',fr:'Français',id:'Bahasa Indonesia'};
Object.entries(window.GUL_EXTRA_LANGUAGES || {}).forEach(([lang, dictionary]) => {
  translations[lang] = {...translations.en, ...dictionary};
  for (const section of ['announcements','migration','achievements','media','guides','kingdom','contacts']) {
    translations[lang]['cards.'+section+'Title'] = dictionary[section+'.title'];
    translations[lang]['cards.'+section+'Text'] = dictionary[section+'.intro'];
    translations[lang]['cards.'+section+'Action'] = dictionary['nav.'+(section === 'kingdom' ? 'kingdom' : section)];
    translations[lang]['meta.'+section+'Title'] = dictionary['nav.'+section] + ' | GUL';
    translations[lang]['meta.'+section+'Description'] = dictionary[section+'.intro'];
  }
  translations[lang]['meta.homeTitle'] = 'GUL • Viking Rise';
  translations[lang]['meta.homeDescription'] = dictionary['home.heroText'];
});
const socialCopy = {
 en:['Socials','Stay Connected','GUL Beyond the Battlefield','Find our crew on Discord, reach the leader on Telegram, and watch for GUL on YouTube.','The cameras are not rolling yet. Battles, highlights, and moments from GUL are coming soon.','Our next chapter is coming to YouTube.'],
 ru:['Соцсети','Оставайся на связи','GUL за пределами поля боя','Найди команду в Discord, свяжись с лидером в Telegram и жди GUL на YouTube.','Камеры пока не включены. Скоро здесь будут битвы, яркие моменты и жизнь GUL.','Новая глава GUL скоро на YouTube.'],
 vi:['Mạng xã hội','Giữ kết nối','GUL ngoài chiến trường','Gặp đồng đội trên Discord, liên hệ thủ lĩnh qua Telegram và đón chờ GUL trên YouTube.','Máy quay chưa bắt đầu. Trận chiến, khoảnh khắc nổi bật và đời sống GUL sẽ sớm xuất hiện.','Chương tiếp theo của GUL sắp đến YouTube.'],
 tr:['Sosyal Medya','Bağlantıda Kal','Savaş Alanının Ötesinde GUL','Discord’da ekiple buluş, Telegram’da lidere ulaş ve YouTube’da GUL’u bekle.','Kameralar henüz çalışmıyor. GUL savaşları ve unutulmaz anlar yakında burada.','GUL’un yeni bölümü yakında YouTube’da.'],
 fr:['Réseaux sociaux','Gardez le contact','GUL au-delà du champ de bataille','Retrouvez la guilde sur Discord, le chef sur Telegram et bientôt GUL sur YouTube.','Les caméras ne tournent pas encore. Batailles et temps forts de GUL arrivent bientôt.','Notre prochain chapitre arrive sur YouTube.'],
 id:['Media Sosial','Tetap Terhubung','GUL di Luar Medan Perang','Temui tim di Discord, hubungi pemimpin di Telegram, dan nantikan GUL di YouTube.','Kamera belum merekam. Pertempuran dan momen terbaik GUL segera hadir.','Bab berikutnya segera hadir di YouTube.']
};
Object.entries(socialCopy).forEach(([lang,copy]) => {
 Object.assign(translations[lang], {'nav.contacts':copy[0],'contacts.eyebrow':copy[1],'contacts.title':copy[2],'contacts.intro':copy[3],'contacts.youtubeTitle':'YouTube','contacts.youtubeText':copy[4],'contacts.youtubeStatus':copy[5],'cards.contactsTitle':copy[2],'cards.contactsText':copy[3],'cards.contactsAction':copy[0],'meta.contactsTitle':copy[0]+' | GUL','meta.contactsDescription':copy[3]});
});
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
        <img class="brand-emblem" src="assets/guild-logo-cutout.png" alt="GUL">
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
        <select data-language-select aria-label="Language">${Object.entries(languageNames).map(([code,name]) => `<option value="${code}">${name}</option>`).join("")}</select>
        
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

  document.querySelectorAll("[data-language-select]").forEach(select => { select.value = safeLang; select.setAttribute("aria-label", t(safeLang,"layout.language")); });
  localStorage.setItem("guildLanguage", safeLang);
  applyMeta(safeLang);
  window.dispatchEvent(new CustomEvent("guild-language-change", { detail: { lang: safeLang } }));
}

function initLanguageControls() {
  document.querySelectorAll("[data-language-select]").forEach(select => select.addEventListener("change", () => applyLanguage(select.value)));
  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langSwitch));
  });
}

function resolveInitialLanguage() {
  const saved = localStorage.getItem("guildLanguage");
  if (translations[saved]) return saved;
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language || "en"];
  for (const locale of preferred) {
    const base = locale.toLowerCase().split("-")[0];
    if (translations[base]) return base;
  }
  return "en";
}

function initLanguageGate() {
  const gate = document.querySelector("[data-language-gate]");
  const savedLanguage = resolveInitialLanguage();

  applyLanguage(savedLanguage);

  if (!gate) return;
  if (sessionStorage.getItem("guildWelcomeSeen") === "1") {
    gate.hidden = true;
    gate.inert = true;
    return;
  }

  const choices = gate.querySelector('[data-lang-choice]')?.parentElement;
  if (choices) {
    choices.innerHTML = Object.entries(languageNames).map(([code,name]) => `<button class="rune-button" type="button" data-lang-choice="${code}" aria-label="${name}">${name}</button>`).join('');
  }
  document.body.classList.add("has-language-gate");
  document.querySelectorAll("[data-lang-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      sessionStorage.setItem("guildWelcomeSeen", "1");
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

// Decorative harbor motion: only runs on the home page.
function initHarbor() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  document.querySelectorAll(".harbor-embers").forEach((container) => {
    const emberCount = container.closest(".battlefield-hero") ? 28 : 16;
    for (let index = 0; index < emberCount; index += 1) {
      const ember = document.createElement("i");
      ember.style.setProperty("--ember-x", `${(index * 17 + 9) % 100}%`);
      ember.style.setProperty("--ember-time", `${7 + index % 6}s`);
      ember.style.setProperty("--ember-delay", `${-index * 1.3}s`);
      container.appendChild(ember);
    }
  });
  document.querySelectorAll(".language-gate, .harbor-hero").forEach((scene) => {
    let pendingFrame = 0;
    scene.addEventListener("pointermove", (event) => {
      if (reducedMotion.matches || event.pointerType !== "mouse") return;
      cancelAnimationFrame(pendingFrame);
      pendingFrame = requestAnimationFrame(() => {
        const bounds = scene.getBoundingClientRect();
        const pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
        scene.style.setProperty("--beam-x", `${pointerX * 45}px`);
        scene.style.setProperty("--beam-y", `${pointerY * 30}px`);
        scene.style.setProperty("--beam-angle", `${pointerX * 20}deg`);
        scene.style.setProperty("--logo-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 10}deg`);
        scene.style.setProperty("--logo-y", `${-((event.clientY - bounds.top) / bounds.height - 0.5) * 6}deg`);
      });
    });
    scene.addEventListener("pointerleave", () => {
      cancelAnimationFrame(pendingFrame);
      scene.style.setProperty("--logo-x", "0deg");
      scene.style.setProperty("--logo-y", "0deg");
      scene.style.setProperty("--beam-x", "0px");
      scene.style.setProperty("--beam-y", "0px");
      scene.style.setProperty("--beam-angle", "0deg");
    });
  });
  const gate = document.querySelector("[data-language-gate]");
  if (gate) {
    document.querySelectorAll("[data-lang-choice]").forEach((button) => {
      button.addEventListener("click", () => {
        gate.inert = true;
        document.querySelector(".top-nav a")?.focus({ preventScroll: true });
      });
    });
  }
}
initHarbor();

function initSectionReveals() {
  const cards = document.querySelectorAll("body:has(.battlefield-hero) .feature-card");
  if (!cards.length || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting);
    visible.sort((a, b) => Number(a.target.dataset.revealOrder) - Number(b.target.dataset.revealOrder));
    visible.forEach((entry, index) => {
      entry.target.style.setProperty("--reveal-delay", `${index * 140}ms`);
      entry.target.classList.add("is-revealed");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  cards.forEach((card, index) => {
    card.dataset.revealOrder = String(index);
    card.classList.add("scroll-reveal");
    observer.observe(card);
    // Keyboard users should never focus an invisible link.
    card.addEventListener("focusin", () => {
      card.style.setProperty("--reveal-delay", "0ms");
      card.classList.add("is-revealed");
      observer.unobserve(card);
    });
  });
}
// Scroll-linked motion replaces the one-time reveal.
initScrollSections();

function initScrollSections() {
  const cards = [...document.querySelectorAll("body:has(.battlefield-hero) .feature-card")];
  if (!cards.length) return;
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;
  const update = () => {
    frame = 0;
    cards.forEach(card => {
      const bounds = card.getBoundingClientRect();
      const progress = Math.max(0,Math.min(1,(window.innerHeight - bounds.top)/(window.innerHeight*.35)));
      card.style.setProperty("--section-opacity",preference.matches ? 1 : .45 + .55*progress);
      card.style.setProperty("--section-rise",preference.matches ? "0px" : `${(1-progress)*22}px`);
    });
  };
  cards.forEach(card=>card.classList.add("scroll-linked-section"));
  const schedule = () => { if (!frame) frame=requestAnimationFrame(update); };
  window.addEventListener("scroll",schedule,{passive:true});
  window.addEventListener("resize",schedule);
  preference.addEventListener("change",schedule);
  update();
}


























