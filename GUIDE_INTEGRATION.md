# GUL guide experience

The Guides entry page contains category choices and search. Each topic opens on a separate article page. The public experience does not reproduce worksheets, source coordinates, formula text, or spreadsheet controls.

## Architecture

- `guides.html`: choices-only directory.
- `guide.html?topic=<slug>`: separate article with contents navigation and related topics.
- `guide-content/`: 23 domain models containing 55 semantic sections.
- `guide-experience.js` and `guide-experience.css`: directory, article components, lookups, and tools.
- `guide-calculator.js`: tested healing/training math.
- `guide-library/media/`: optimized game images supporting skill descriptions and examples.

The existing shared navigation and language controls remain. Article content is in English. Legacy worksheet hash links redirect to the corresponding new article. `script.js` maps the new article route to the existing Guides navigation item.

## Content

Battle instructions and defense response steps replace source rows. Seasonal commander pairings become army cards, and available skill names open their description images. Gear is organized by troop type and forge priority. Thirty equipment variants have stats transcribed and visually checked against their game images. Other tools include pack-price selection, event reward estimates, rarity-based growth lookups, multiple-mount XP lookup, and 22 research technologies.

The healing/training calculator uses resource inventory in billions and speedups in days. Whole-troop outputs round down, identify bottlenecks, and show resource/time use and training might. Each result uses the same inventory independently.

## Data handling

Raw exports remain offline reference material. Website content is reorganized around player tasks. Empty layout cells, source operating instructions, and formula expressions are not visitor content. Missing entries remain unavailable; zero remains zero. Existing listed values are not represented as current patch data. Image-only skill descriptions remain images, searchable by skill name.

The gear-material list and the independent conversion example for 59 gold pieces are separate datasets. Rates in that example must not be associated with an equipment item just because they shared a source row.

## Verification

All 23 articles loaded in the browser with their expected titles and section counts and no console errors. Checks cover source commander/skill mapping, missing versus zero XP, calculator examples and input boundaries, equipment image references, search, price/rarity/research selectors, pagination, image expansion, and responsive layouts.

Local preview: `http://127.0.0.1:4196/guides.html`. The GitHub publishing workflow has not been run.
