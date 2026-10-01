# Project Context: Viking Rise Guild Website

## Summary

This is a static multi-page website for a Viking Rise guild. The goal is to build a polished, maintainable guild hub for applications, guides, achievements, media, kingdom structure, contacts, and useful links.

Project directory: `C:\Users\Sid\Desktop\gul`.

## Technology

- Plain HTML/CSS/JavaScript, no framework and no build step.
- Shared styles: `styles.css`.
- Shared site logic: `script.js`.
- Guide data: `guide-data.js`.
- Guide rendering: `guide-render.js`.
- Manual QA checklist: `TESTING_CHECKLIST.md`.
- Large source workbook: `GUL Ultimate Guide.xlsx`. It remains locally in the folder, but is ignored by `.gitignore` and removed from the Git index.

## Pages

- `index.html` - home page and language gate.
- `migration.html` - migration application.
- `achievements.html` - achievements.
- `media.html` - media.
- `guides.html` - guides from Excel/Google Sheet data.
- `kingdom.html` - guild structure.
- `contacts.html` - contacts and links.

## Assets

- `assets/guild-logo.gif` - original animated logo.
- `assets/guild-logo-source.png` - extracted source frame.
- `assets/guild-logo-cutout.png` - PNG logo used in the language gate.
- `assets/hero-viking-guild.png` - main hero background.
- `assets/officers-1.JPG`, `assets/officers-2.JPG` - original roster screenshots.
- `assets/officers/*.png` - cropped officer avatars.

## Current Roster

- R5: The Punisher.
- R4: THOR HUSKY, RocketStar, Winter Sandor, SuRTuR, береза, HellKatz, JaneFoster.
- R4 role descriptions are currently hidden. Officer cards show rank, avatar, and nickname.

## Page Architecture

The header, navigation, footer, and language switcher are rendered from `script.js`. This reduces duplicated layout and keeps navigation consistent across pages.

Each HTML page still contains basic header/footer markup as a fallback, but JavaScript replaces it with the centralized version on load.

`script.js` contains:

- `pages`, the page configuration array;
- `translations`, the RU/EN dictionary;
- `renderSharedLayout()` for header, navigation, and footer;
- `applyLanguage()` for text, placeholders, aria-labels, meta tags, and Open Graph tags;
- `initLanguageGate()` for the first-visit language selection overlay;
- `initLanguageControls()` for the header RU/EN switcher.

## Languages

Supported languages:

- `ru`;
- `en`.

The home page shows a language gate with two runes. On home page refresh, the gate appears again so users can choose a language again.

Inner pages use `localStorage.guildLanguage`, or Russian by default.

When adding translatable text:

1. Add `data-i18n="key.name"` in HTML.
2. Add `data-placeholder-i18n="key.name"` for placeholders.
3. Add `data-i18n-aria-label="key.name"` for aria-labels.
4. Add the key to both `translations.ru` and `translations.en` in `script.js`.

## Guides

`guides.html` loads:

1. `guide-data.js`;
2. `guide-render.js`;
3. `script.js`.

`guide-render.js` builds tabs, sections, cards, notes, chips, and tables from `guide-data.js`. The guide UI and some sheet names are localized. The workbook data itself mostly remains in the original source language.

The main guide CTA opens the Google Sheet instead of downloading the local Excel file, so the site does not have to serve a 94 MB workbook.

## Git and GitHub

Repository: `https://github.com/Siderianz/gul-viking-rise`

Important:

- `GUL Ultimate Guide.xlsx` has been removed from the Git index and added to `.gitignore`.
- The file still exists locally, but should be removed from GitHub on the next commit.
- Always check `git status --short` before pushing.

## Completed Work

- Created a multi-page static website.
- Added top navigation with all sections.
- Added a language gate with logo and runes.
- Added an RU/EN switcher in the header.
- Added roster avatars.
- Filled the kingdom structure page.
- Imported guide data from the Excel workbook.
- Rendered guide data as semantic sections instead of a raw Excel table.
- Converted the main pages to `data-i18n`.
- Added basic `meta description`, Open Graph, and favicon tags.
- Added visible `:focus-visible` styles.
- Added `TESTING_CHECKLIST.md`.

## Reference: friggirise.ru

The site `https://friggirise.ru/ru.html` was reviewed. It is a more production-oriented Viking Rise fan project.

Useful ideas from the reference:

- strong full-screen hero with high-quality background;
- clear first-screen branding/wordmark;
- multiple CTAs: open database, composition builder, commander synergies, gear calculator;
- "Tools" section as a grid of useful actions;
- hall of fame/supporter ranking;
- PWA manifest, service worker, and mobile web app meta;
- favicon and apple touch icon;
- Open Graph and Twitter Card;
- cookie/localStorage notice;
- analytics;
- legal/footer links: privacy, offer, contacts;
- performance handling: WebP, lazy/dynamic loading, reduced-motion support, lighter mobile mode.

Do not copy the design or code directly. Use it as a maturity benchmark and feature inspiration.

## Production-ready Improvements

### Priority 1: Publishing And Stability

- Configure GitHub Pages or another hosting provider.
- Add `README.md` with project overview, local preview instructions, and live URL.
- Add `404.html`.
- Add `robots.txt`.
- Add `sitemap.xml`.
- Confirm all relative links work on GitHub Pages.
- Remove the large Excel file from repository history if it becomes a problem. It was uploaded in the first commit even though it is now removed from the index.

### Priority 2: Data And Content

- Move guides from the monolithic `guide-data.js` into JSON or split files by section.
- Add a proper translation layer for guide data if true RU/EN content is required.
- Replace placeholder content with real guild information:
  - migration rules;
  - Discord/contacts;
  - achievements;
  - media;
  - candidate requirements.
- Add real home page CTAs: apply, open guides, contact R4/R5.

### Priority 3: Visual Quality

- Strengthen the first screen with more guild identity and less placeholder feel.
- Add distinct visual sections for key site functions.
- Add a "Quick Tools" section inspired by the reference site.
- Add a hall of fame or best players of the week/season block.
- Add real screenshots/media to the media section.
- Standardize card, table, and CTA design.

### Priority 4: Performance

- Compress large images.
- Add WebP/AVIF versions for hero and logo assets.
- Use `loading="lazy"` for secondary images.
- Check the size of `guild-logo.gif`; avoid using GIF as a primary hero asset.
- Split `guide-data.js` so guide data is not loaded on pages that do not need it.
- Add `defer` to scripts where loading order allows.

### Priority 5: Accessibility

- Check text contrast on the dark background.
- Add `aria-current="page"` to the active nav item.
- Test keyboard navigation.
- Test the language gate with keyboard only.
- Add meaningful alt text for all content images.
- Respect `prefers-reduced-motion` if complex animations are added.

### Priority 6: SEO And Social Sharing

- Add `twitter:card`.
- Add canonical URL after choosing the domain.
- Add `og:url` after deployment.
- Create a dedicated social preview image.
- `html lang` is updated via JS, but for future multilingual SEO, separate RU/EN URLs or route params would be better.

### Priority 7: PWA And Mobile Polish

- Add `manifest.webmanifest`.
- Add `theme-color`.
- Add apple touch icon.
- Consider a service worker only after assets stabilize.
- Test the site at 360, 390, 768, 1024, and 1440+ px widths.

### Priority 8: Forms And Integrations

- The migration form does not submit data yet.
- Possible integrations:
  - Google Forms;
  - Discord webhook;
  - Telegram bot;
  - GitHub Issues;
  - serverless endpoint.
- Add spam protection before making the form public.

### Priority 9: Development Quality

- Install Node.js and add basic checks:
  - HTML validator;
  - stylelint or prettier;
  - JS syntax check.
- Add `.editorconfig`.
- Add an npm script for a local static server.
- Run `TESTING_CHECKLIST.md` before pushing.

## Caution For Future Edits

- Do not delete `guide-data.js` unless the guides section is regenerated.
- Do not overwrite `assets/officers/*.png` without checking the avatars.
- Do not change `localStorage.guildLanguage` without updating both `script.js` and `guide-render.js`.
- When adding a new page, add it to `pages` and add translations in `script.js`.
- Add `data-i18n` and translation keys immediately for all new translatable text.
- Do not re-add `GUL Ultimate Guide.xlsx` to Git unless Git LFS is explicitly chosen.
