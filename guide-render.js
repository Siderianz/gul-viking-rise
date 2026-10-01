(function () {
  const data = window.GUL_GUIDE_DATA;
  const tabsRoot = document.getElementById("sheet-tabs");
  const content = document.getElementById("guide-content");
  const title = document.getElementById("active-sheet-title");
  const meta = document.getElementById("sheet-meta");
  const search = document.getElementById("guide-search");

  if (!data || !tabsRoot || !content) {
    return;
  }

  let activeIndex = 0;
  let currentLang = localStorage.getItem("guildLanguage") || "ru";

  const ui = {
    ru: {
      noResults: "Ничего не найдено.",
      sections: "разделов",
      rows: "строк из",
      intro: "Данные сгруппированы по смыслу из соответствующей вкладки оригинального гайда."
    },
    en: {
      noResults: "No results found.",
      sections: "sections",
      rows: "rows from",
      intro: "The data is grouped by meaning from the matching tab of the original guide."
    }
  };

  const sheetNamesRu = {
    "FAQ": "FAQ",
    "1A. How to PVP": "1A. Как играть PvP",
    "1B. Incoming Attack": "1B. Входящая атака",
    "2A. S2 SkillsSetups": "2A. S2 навыки и сборки",
    "2B. S3 SkillsSetups": "2B. S3 навыки и сборки",
    "2C. S4 SkillSetups": "2C. S4 навыки и сборки",
    "2D. S5 SkillSetups": "2D. S5 навыки и сборки",
    "Legendary Skill Library": "Библиотека легендарных навыков",
    "3. Healing + Training Calculato": "3. Лечение и тренировка",
    "4A. Mounts": "4A. Маунты",
    "4B. Mount Skills": "4B. Навыки маунтов",
    "5A. Monster Gear": "5A. Экипировка против монстров",
    "5B. Blessed Gear": "5B. Blessed Gear",
    "6A. Toy Event": "6A. Toy Event",
    "6B. Emote Dash": "6B. Emote Dash",
    "6C. Packs": "6C. Наборы",
    "7. Skill Experience": "7. Опыт навыков",
    "8. Hero Experience": "8. Опыт героев",
    "9. Hero Fragments": "9. Фрагменты героев",
    "10. Talents": "10. Таланты",
    "11. Research Costs": "11. Стоимость исследований",
    "Purple Skill Library": "Библиотека фиолетовых навыков",
    "Mount Skill Library": "Библиотека навыков маунтов"
  };

  const sectionNames = new Set([
    "Pikemen",
    "Archers",
    "Infantry",
    "Blue Skills",
    "Purple Skills",
    "Golden Skills",
    "Blue Heroes",
    "Purple Heroes",
    "Golden Heroes",
    "Blessed Gear",
    "Monster Gear",
    "Mounts",
    "Mount Skills",
    "Research Costs",
    "Toy Event",
    "Emote Dash",
    "Packs",
    "Links:"
  ]);

  function labelSheet(name) {
    const normalized = String(name || "").trim();
    return currentLang === "ru" ? sheetNamesRu[normalized] || normalized : normalized;
  }

  function clean(value) {
    return String(value || "").trim();
  }

  function filled(row) {
    return row.map(clean).filter(Boolean);
  }

  function formatCell(value) {
    const text = clean(value);
    if (/^-?\d+(\.\d+)?$/.test(text)) {
      const number = Number(text);
      if (Number.isFinite(number) && Math.abs(number) >= 1000) {
        return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
      }
    }
    return text;
  }

  function make(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function isLikelySection(row, index) {
    const values = filled(row);
    if (!values.length) return false;
    if (values.length === 1) {
      const text = values[0];
      return index === 0 || sectionNames.has(text) || /^[A-Z]\)|Priority #\d+|Season \d+|Top \d+|Links:|Notes:|Resources:|What /i.test(text);
    }
    return false;
  }

  function buildSections(rows) {
    const sections = [];
    let current = null;

    rows.forEach((row, index) => {
      const values = filled(row);
      if (!values.length) return;

      if (isLikelySection(row, index)) {
        current = { title: values[0], rows: [] };
        sections.push(current);
        return;
      }

      if (!current) {
        current = { title: "Overview", rows: [] };
        sections.push(current);
      }
      current.rows.push(row);
    });

    return sections;
  }

  function rowLooksTabular(row) {
    return filled(row).length >= 3;
  }

  function renderMatrix(rows) {
    const table = make("table", "guide-matrix");
    const maxCols = Math.max(1, ...rows.map((row) => row.length));
    const tbody = document.createElement("tbody");

    rows.forEach((row, rowIndex) => {
      const tr = document.createElement("tr");
      if (rowIndex === 0 || /commander|skill|level|xp|fragments|packs|technology|resource/i.test(filled(row).join(" "))) {
        tr.className = "matrix-head";
      }

      for (let index = 0; index < maxCols; index++) {
        const td = document.createElement(rowIndex === 0 ? "th" : "td");
        const value = formatCell(row[index]);
        td.textContent = value || "";
        if (!value) td.className = "empty";
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    const wrap = make("div", "guide-matrix-wrap");
    wrap.appendChild(table);
    return wrap;
  }

  function renderChips(rows) {
    const chips = make("div", "guide-chips");
    const seen = new Set();

    rows.flat().map(clean).filter(Boolean).forEach((value) => {
      if (seen.has(value) || value === "-") return;
      seen.add(value);
      chips.appendChild(make("span", "guide-chip", value));
    });

    return chips;
  }

  function renderTextRows(rows) {
    const list = make("div", "guide-notes");

    rows.forEach((row) => {
      const values = filled(row).map(formatCell);
      if (!values.length) return;

      if (values.length === 1) {
        list.appendChild(make("p", "", values[0]));
        return;
      }

      const item = make("div", "guide-note-pair");
      item.appendChild(make("strong", "", values[0]));
      item.appendChild(make("span", "", values.slice(1).join(" · ")));
      list.appendChild(item);
    });

    return list;
  }

  function renderHighlights(rows) {
    const highlights = rows
      .map(filled)
      .filter((values) => values.length && /total|priority|important|average|per 100|what mounts|what gear|what talents/i.test(values.join(" ")))
      .slice(0, 8);

    if (!highlights.length) return null;

    const grid = make("div", "guide-highlights");
    highlights.forEach((values) => {
      const card = make("article", "guide-highlight");
      card.appendChild(make("strong", "", values[0]));
      if (values.length > 1) {
        card.appendChild(make("p", "", values.slice(1).map(formatCell).join(" · ")));
      }
      grid.appendChild(card);
    });
    return grid;
  }

  function renderSection(section, sheetName) {
    const block = make("article", "guide-section-card");
    block.appendChild(make("h3", "", section.title));

    const rows = section.rows.filter((row) => filled(row).length);
    if (!rows.length) return block;

    const highlights = renderHighlights(rows);
    if (highlights) block.appendChild(highlights);

    const tabularRows = rows.filter(rowLooksTabular);
    const simpleRows = rows.filter((row) => !rowLooksTabular(row));
    const isLibrary = /library/i.test(sheetName) || section.title === "Links:";

    if (isLibrary) {
      block.appendChild(renderChips(rows));
      return block;
    }

    if (simpleRows.length) block.appendChild(renderTextRows(simpleRows));
    if (tabularRows.length) block.appendChild(renderMatrix(tabularRows));

    return block;
  }

  function visibleSheetIndexes(filter) {
    const query = filter.trim().toLowerCase();
    return data.sheets
      .map((sheet, index) => ({ sheet, index }))
      .filter(({ sheet }) => {
        if (!query) return true;
        const haystack = [sheet.name, labelSheet(sheet.name), sheet.rows.flat().join(" ")].join(" ").toLowerCase();
        return haystack.includes(query);
      })
      .map(({ index }) => index);
  }

  function renderTabs(filter = "") {
    const indexes = visibleSheetIndexes(filter);
    tabsRoot.textContent = "";

    if (indexes.length && !indexes.includes(activeIndex)) activeIndex = indexes[0];

    indexes.forEach((index) => {
      const sheet = data.sheets[index];
      const button = make("button", "sheet-tab", labelSheet(sheet.name));
      button.type = "button";
      button.role = "tab";
      button.ariaSelected = String(index === activeIndex);
      if (index === activeIndex) button.classList.add("active");
      button.addEventListener("click", () => {
        activeIndex = index;
        renderTabs(search.value);
        renderSheet();
      });
      tabsRoot.appendChild(button);
    });

    if (!indexes.length) {
      tabsRoot.appendChild(make("p", "workbook-empty", ui[currentLang].noResults));
    }
  }

  function renderSheet() {
    const sheet = data.sheets[activeIndex] || data.sheets[0];
    const rows = sheet.rows || [];
    const sections = buildSections(rows);

    title.textContent = labelSheet(sheet.name);
    meta.textContent = `${sections.length} ${ui[currentLang].sections} · ${rows.length} ${ui[currentLang].rows} ${data.source}`;
    content.textContent = "";

    const intro = make("div", "guide-sheet-intro");
    intro.appendChild(make("h3", "", labelSheet(sheet.name)));
    intro.appendChild(make("p", "", ui[currentLang].intro));
    content.appendChild(intro);

    const grid = make("div", "guide-section-stack");
    sections.forEach((section) => {
      grid.appendChild(renderSection(section, sheet.name));
    });
    content.appendChild(grid);
  }

  search?.addEventListener("input", () => {
    renderTabs(search.value);
    renderSheet();
  });

  window.addEventListener("guild-language-change", (event) => {
    currentLang = event.detail?.lang || localStorage.getItem("guildLanguage") || "ru";
    renderTabs(search.value);
    renderSheet();
  });

  renderTabs();
  renderSheet();
})();
