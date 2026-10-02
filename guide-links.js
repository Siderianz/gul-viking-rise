(function () {
  const root = document.getElementById("guide-directory");
  if (!root || !window.GUL_GUIDE_DATA) return;
  const groups = [
    {en:"Start Here",ru:"Начни здесь",test:/FAQ/},
    {en:"Battle & Builds",ru:"Битвы и сборки",test:/^1[AB]|^2[ABCD]/},
    {en:"Mounts & Equipment",ru:"Маунты и экипировка",test:/^4[AB]|^5[AB]/},
    {en:"Growth & Resources",ru:"Развитие и ресурсы",test:/^3\.|^7\.|^8\.|^9\.|^10\.|^11\./},
    {en:"Events & Packs",ru:"События и наборы",test:/^6[ABC]/},
    {en:"Skill Libraries",ru:"Библиотеки навыков",test:/Library/}
  ];
  const names = {
    "1A. How to PVP":["PvP Tactics","Тактика PvP"],
    "1B. Incoming Attack":["Defending an Attack","Защита от атак"],
    "2A. S2 SkillsSetups":["Season 2 Builds","Сборки сезона 2"],
    "2B. S3 SkillsSetups":["Season 3 Builds","Сборки сезона 3"],
    "2C. S4 SkillSetups":["Season 4 Builds","Сборки сезона 4"],
    "2D. S5 SkillSetups":["Season 5 Builds","Сборки сезона 5"],
    "3. Healing + Training Calculato":["Healing & Training","Лечение и тренировка"],
    "4A. Mounts":["Mounts","Маунты"],"4B. Mount Skills":["Mount Skills","Навыки маунтов"],
    "5A. Monster Gear":["Monster Gear","Экипировка против монстров"],"5B. Blessed Gear":["Blessed Gear","Благословенная экипировка"],
    "6A. Toy Event":["Toy Event","Событие Toy Event"],"6B. Emote Dash":["Emote Dash","Событие Emote Dash"],"6C. Packs":["Packs","Наборы"],
    "7. Skill Experience":["Skill Experience","Опыт навыков"],"8. Hero Experience":["Hero Experience","Опыт героев"],
    "9. Hero Fragments":["Hero Fragments","Фрагменты героев"],"10. Talents":["Talents","Таланты"],"11. Research Costs":["Research Costs","Стоимость исследований"],
    "Legendary Skill Library":["Legendary Skills","Легендарные навыки"],"Purple Skill Library":["Purple Skills","Фиолетовые навыки"],"Mount Skill Library":["Mount Skill Library","Библиотека навыков маунтов"]
  };
  const gids = {"FAQ":2111954173,"1A. How to PVP":1523164725,"1B. Incoming Attack":1248828739,"2A. S2 SkillsSetups":168361695,"2B. S3 SkillsSetups":1813536673,"2C. S4 SkillSetups":1289654924,"2D. S5 SkillSetups":2071879916,"Legendary Skill Library":515538320,"3. Healing + Training Calculato":555185700,"4A. Mounts":465460871,"4B. Mount Skills":287293481,"5A. Monster Gear":121066740,"5B. Blessed Gear":1767088694,"6A. Toy Event":2139906036,"6B. Emote Dash":531468202,"6C. Packs":545966724,"7. Skill Experience":91093379,"8. Hero Experience":634232399,"9. Hero Fragments":1703750651,"10. Talents":642249527,"11. Research Costs":447987650,"Purple Skill Library":991226090,"Mount Skill Library":77399238};
  function render(lang) {
    root.replaceChildren();
    const ru=lang==="ru";
    const languageIndex=["vi","tr","fr","id"].indexOf(lang);
    const label = text => window.GUL_GUIDE_LABELS?.[text]?.[languageIndex] || text;
    groups.forEach(group=>{
      const section=document.createElement("article"); section.className=group.en === "Start Here" ? "guide-start-strip" : "guide-link-group";
      const title=document.createElement("h2"); title.textContent=ru?group.ru:label(group.en); section.appendChild(title);
      window.GUL_GUIDE_DATA.sheets.filter(sheet=>group.test.test(sheet.name.trim())).forEach(sheet=>{
        const name=sheet.name.trim(); const a=document.createElement("a");
        a.href="https://docs.google.com/spreadsheets/d/1q49zHAj6hK8vT-AieP3fpKfMtoQGrmMfnsQCtGOAT1E/edit?gid="+gids[name]+"#gid="+gids[name];
        a.target="_blank"; a.rel="noopener noreferrer";
        a.textContent=(ru ? (names[name]?.[1] || name) : label(names[name]?.[0] || name))+" ↗"; section.appendChild(a);
      });
      root.appendChild(section);
    });
  }
  window.addEventListener("guild-language-change",event=>render(event.detail.lang));
  render(localStorage.getItem("guildLanguage")||"en");
})();



