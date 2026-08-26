# Keyword Map — Non-Alcoholic RTD Cocktails
**Site:** Aged And Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — research report only, nothing implemented. Covers all 19 stocked SKUs across the 3 non-alcoholic RTD cocktail subcategories (Non-Alcoholic Cocktails, Non-Alcoholic Spritz, Non-Alcoholic Canned Cocktails). Fine Wine and Champagne are already fully SEO'd — see `keyword-map-wine-red.md` and `keyword-map-champagne-a-l.md` for the format/quality bar this report matches.
**Methodology:** Real SEMrush export data — 2 files: `Non-Alcoholic-Cocktails_all-keywords_us_2026-08-26.csv` (category-level, 200 rows) and `De-Soi_all-keywords_us_2026-08-26.csv` (brand-level, 100 rows, covers the 2 stocked De Soi SKUs). No dedicated brand export exists for the other 12 brands in this batch (Curious Elixirs, Free AF, Ghia, ISH, Lapo's, Lyre's, Mingle, Parch, Ritual Zero Proof, Hiyo, St. Agrestis) — the category file was checked for any brand-name rows that happen to surface (two did: Free AF, Ritual Zero Proof), and every other product's real-world existence and factual claims were confirmed via WebSearch rather than fabricated, flagged inline as **"confirmed real via WebSearch, not volume-backed."** KD 0–25 = T1 Quick Win, 26–40 = T2 Worth Targeting, 41+ = T3/background only.
**Naming correction:** prod-na-rtd-11 and prod-na-rtd-12 were listed with truncated names in the brief. Confirmed via `src/data/products.ts`: prod-na-rtd-11 is **Lapo's Non-Alcoholic Negroni** (subcategory: Non-Alcoholic Cocktails), prod-na-rtd-12 is **Lyre's Amalfi Spritz Non-Alcoholic Cocktail** (subcategory: Non-Alcoholic Spritz).

---

## Phase 1 — Filter Summary

This category behaved differently than wine/champagne: instead of one dominant homonym cluster, the noise is spread across several distinct buckets. Total file is ~200 rows in the category export + ~100 in the De Soi export; roughly **45–50% of the category file's raw rows** are DIY/recipe content or adjacent-but-off-scope category demand, not product-page material.

### Bucket 1 — DIY/recipe "how to make your own" cluster (the single largest bucket, ~**70,000 combined volume**)
Per the brief's own instruction, this is real demand but blog material, not product-page keywords: `mocktail recipes` (22,200, KD54), `easy mocktail recipes` (3,600, KD17), `easy mocktails` (3,600, KD20), `non alcoholic mocktail recipes` (3,600, KD40), `best mocktail recipes` (2,900, KD54), `recipe for non alcoholic` (4,400, KD34), `non alcoholic cocktail recipes` (1,900, KD39), `non alcoholic drink recipes` (1,900, KD35), `recipes for virgin drinks` (1,900, KD43), `mocktails recipes` (4,400, KD50), `drink recipes non alcoholic` (1,600, KD36), `mocktail drink recipes` (1,600, KD43), `mocktail recipe` (1,600, KD44), `mocktails recipes easy` (1,600, KD13), `virgin cocktail recipes` (1,600, KD35), `mocktail ideas` (1,600, KD50), `non alcoholic punch recipes` (1,000, KD30), `mocktail recipes easy` (1,000, KD16), `punch drink recipe non alcoholic` (880, KD29), `non alcoholic drinks recipes` (880, KD40), `great mocktail recipes` (880, KD37), `how to make mocktail drink` (720, KD38), `holiday mocktail recipes` (720, KD32), `good mocktail recipes` (720, KD49), `mocktail drinks recipe` (590, KD33), `how to make a mocktail` (590, KD44), `how to make mocktails` (590, KD25), `summer mocktail recipes` (590, KD9), `punch non alcoholic drinks` (590, KD28), `easy mocktails to make at home` (590, KD14), `simple non alcoholic drinks to make at home` (880, KD33), `easy non alcoholic drinks to make at home` (1,300, KD46), `simple mocktails` (720, KD16). Kept only as blog candidates (Phase 6 below); zero direct assignment to product pages.

### Bucket 2 — "Order at a bar" / social-context content (~9,000+ combined)
`mocktails to order at a bar` (1,300, KD19), `non alcoholic drinks to order at a bar` (1,300, KD5 — very low KD, genuine quick-win if pursued as a blog post), `virgin drinks to order at a bar` (720, KD15), `great virgin drinks` (2,400, KD47), `best virgin drinks` (720, KD30), `good virgin drinks` (720, KD22), `virgin drinks for party` (1,000, KD27). Real, but describes ordering at a venue, not buying a bottled/canned product — blog material.

### Bucket 3 — Kids/family content (~1,180 combined)
`childrens mocktails` (590, KD16), `mocktails for kids` (590, KD15). Real but low-priority; not assigned to any adult-beverage product page, noted as a very minor blog angle only.

### Bucket 4 — Off-scope adjacent-category demand (NOT the RTD cocktail category — flagged, not assigned)
- **NA seltzer / sparkling water** (~13,190 combined): `non alcoholic seltzer` (1,600, KD18), `non alcoholic seltzers` (590, KD13), `non alcoholic carbonated drinks` (2,400, KD30), `non alcoholic carbonated beverages` (1,300, KD40), `sparkling water drinks non alcoholic` (4,400, KD21), `non alcoholic sparkling beverages` (2,900, KD19). This is NA seltzer/water demand, a different product category from RTD cocktails — kept only as background context for the Spritz hub (some conceptual overlap on "sparkling"), not assigned to any SKU.
- **NA base spirits** (~18,300 combined): `non alcoholic spirits` (9,900, KD35), `non-alcoholic spirits` (1,600, KD39), `best non alcoholic spirits` (1,300, KD17), `alcohol free spirits` (1,000, KD24), `non alcohol spirits` (720, KD19), `sugar free spirit` (1,000, KD28), `non alcoholic spirit` (590, KD21), `non alcoholic liquor` (1,600, KD41), `non alcoholic liquor spirits` (590, KD32). This is NA gin/whiskey/tequila-alternative demand (a distinct site category), not RTD cocktails — several of our stocked brands (ISH, Ritual, Ghia) also sell straight NA spirits, so this is useful brand-level proof of demand but not assignable to the RTD SKUs stocked here.
- **NYT puzzle-clue collision** (~7,780 combined): `non alcoholic drink reminiscent of beer` (6,600, KD16), `non alcoholic drink reminiscent of beer nyt` (590, KD26), `non-alcoholic drink with a flavor reminiscent of beer` (590, KD15). This is a recurring NYT Connections/crossword clue (answer: "near beer"), zero purchase intent, and about NA beer besides. Dropped entirely.
- **Reversed-phrasing/unnatural head terms** (real volume, unusable as on-page copy): `alcoholic drink non` (40,500, KD50) and `beverage mocktail` (33,100, KD52) are SEMrush's way of bucketing awkward keyword variants of "non alcoholic drink" and "mocktail beverage" — real search volume backing the head terms, but not natural phrasing to write into copy. Counted toward general category-demand proof, not quoted verbatim.
- **Confirmed non-product noise:** `zero sugar alcoholic drinks` (880, KD25) — the keyword's own wording is about *alcoholic* drinks, opposite of this category; likely a SEMrush grouping artifact. `functional non-alcoholic beverage brand retail partner venues` (2,400, KD2) — a B2B/wholesale-outreach query, zero consumer-shopping relevance. `better than booze` (590, Navigational) — a specific third-party NA retailer's brand name, competitor-navigational, dropped.

### Bucket 5 — De Soi export: heavy homonym noise on the French phrase "de soi" ("of oneself")
The De Soi export (100 rows) is smaller and noisier proportionally than the category file — roughly a third of its rows are unrelated to the brand:
- **Spanish grammar/religious-text collision** (~260 combined): `de donde sois` (90, KD22), `de donde sois in english` (30, KD25), `de dónde sois` (30, KD21), `de que espiritu sois` (20, KD9), `de donde sois vosotros` (20, KD14), `de donde sois vosotros in english` (20, KD25), `por gracia sois salvos por medio de la fe` (30, KD17 — Ephesians 2:8 in Spanish). All are homonym collisions on the Spanish verb form "sois" ("you are," plural), zero brand relevance. Dropped.
- **French idiom / unrelated hotel collision** (~150 combined): `de la soie` (20, KD3), `de la soie hotel` (20, KD21), `de la soie hotel & travel` (20, KD21), `de la soie hotel hanoi` (20, KD22 — a real hotel in Hanoi named for the French word for "silk"), `a fleur de soi` (20, KD12), `a la recherche de soi` (20, KD9 — "in search of oneself"), `de soie meaning` (30, KD22). Dropped.
- **Unrelated/low-confidence business-name collisions** (~70 combined): `de soi 9 sauna` (20, KD10), `de soi bucuresti` (20, KD7), `de soi restaurant` (30, KD1). Dropped as very low-confidence coincidental name collisions, not the brand.
- **Uncertain, flagged not dropped:** `de sai` (320, KD33) — meaningfully higher volume than the noise above, but ambiguous; could be a name/place or a common misspelling of an unrelated term. Not confidently De Soi-related — excluded from assignment, flagged for a follow-up check rather than treated as brand volume.
- **Not filtered, per brief instruction — real, legitimate brand/founder facts confirmed via WebSearch:** De Soi's Katy Perry co-founder story, the "founded while both co-founders were pregnant" origin story, and the pregnancy-safety search cluster below are all genuine and used as hooks, matching how the wine/champagne batches treated Snoop Dogg/19 Crimes and Jay-Z/Armand de Brignac.
- **Real, kept — pregnancy-safety micro-cluster (~130 combined):** `de soi pregnancy` (20), `de soi pregnancy safe` (20), `de soi safe for pregnancy` (20), `can you drink de soi pregnant` (20), `de soi drink pregnancy` (20), `how many de soi can you drink` (30). Small individually, but a real, recurring, and directly relevant informational pattern given De Soi's own founding story — used as an FAQ below.

**Net:** roughly 45–50% of the category file and ~30% of the De Soi file were noise/off-scope/blog-only material by volume, consistent with the brief's expectation for this category.

---

## Phase 2 — Subcategory Hub Keyword Tables

### `/na-rtd-cocktails/non-alcoholic-cocktails/`
*(Curious Elixirs No. 1, Lapo's Non-Alcoholic Negroni, St. Agrestis Phony Negroni)*

Primary: **non alcoholic cocktails** (12,100, KD59, T3 — category anchor; accept above-T1 ceiling for a hub page per prior-category precedent)
Secondary: non alcoholic cocktail drinks (2,400, KD50) · virgin cocktails (2,400, KD33) · non alcoholic cocktail recipes (1,900, KD39 — blog-leaning but real hub-adjacent demand) · zero proof cocktails (1,000, KD26) · non alcoholic craft cocktails (720, KD27, Commercial) · non alcoholic negroni cocktail (590, KD25 — direct product-type match; 2 of the 3 SKUs on this hub are Negronis)
FAQ: What is a mocktail? (combined cluster: what is a mocktail 8,100 + what is the mocktail 8,100 + what are mocktails 1,600 + whats a mocktail 1,000 + what is mocktail drink 1,600 + what is a mocktail drink 1,300 + what is in a mocktail 720 ≈ **22,420 combined**, KD28–43 — the single largest informational cluster in this batch) · Do mocktails have alcohol? (1,000, KD14) · Are non-alcoholic cocktails actually good? — not volume-backed directly, but a real, recurring skepticism-driven question worth answering given how far the category has come (St. Agrestis and Ghia's award wins are good proof points).

### `/na-rtd-cocktails/non-alcoholic-spritz/`
*(De Soi Purple Lune, De Soi Très Rosé, Free AF Apero Spritz, Ghia Le Spritz, ISH SpritzISH, Lyre's Amalfi Spritz, Ritual Zero Proof Spritz)*

Primary: **non alcoholic aperitif** (1,600, KD15, T1, Commercial)
Secondary: non alcoholic apertif (590, KD7, T1 — common misspelling, real volume) · non-alcoholic apéritif (590, Commercial) · zero proof (4,400, KD57, T3 — broad, background/brand-positioning term) · alcohol alternatives (4,400, KD21, T1) · non alcoholic social tonic (2,900, KD34, T2 — some conceptual overlap, mainly serves the canned-cocktails hub but a legitimate secondary here too since several spritzes are functional/social-tonic-adjacent)
FAQ: no direct spritz-specific PAA row surfaced in this pull — recommend deferring FAQs to brand level (De Soi's pregnancy-safety FAQ, Ghia's award-win fact, Ritual's Diageo-acquisition fact) rather than forcing a generic hub FAQ. A dedicated "spritz" or "aperitif" brand/category SEMrush export would sharpen this hub considerably.

### `/na-rtd-cocktails/non-alcoholic-canned-cocktails/`
*(Free AF Non-Alcoholic Cuba Libre, ISH Lime Daiquiri, ISH Mojito, ISH Paloma, Mingle Cranberry Cosmo, Mingle Key Lime Margarita, Mingle Variety Pack, Parch Desert Margarita, Hiyo Social Tonic Variety Pack)*

Primary: **canned mocktails** (1,300, KD25, T1, Commercial)
Secondary: non carbonated canned cocktails (720, KD14, T1, Commercial — flag: most stocked SKUs here ARE carbonated/sparkling, verify fit per-SKU before using) · mojito cocktail non alcoholic (1,300, KD37, T2 — direct match for ISH Mojito) · non alcoholic social tonic (2,900, KD34, T2 — direct match for Hiyo) · social tonic (1,300, KD21, T1) · social tonics (590, KD33, T2) · non alcoholic craft cocktails (720, KD27, T2)
FAQ: What is a social tonic? (ties to combined social tonic cluster ≈ 4,790 — non alcoholic social tonic 2,900 + social tonic 1,300 + social tonics 590 — this is literally Hiyo's own coined category term and most shoppers landing on this hub won't know it yet, worth explaining once at the hub level).

---

## Phase 3 — Per-Product Keyword Assignments

### Non-Alcoholic Cocktails subcategory

**1. prod-na-rtd-01 — Curious Elixirs No. 1 Non-Alcoholic Cocktail**
Primary: `curious elixirs no 1` — confirmed real via WebSearch, not volume-backed. Founded by John Wiseman in 2015 as the original booze-free craft cocktail; No. 1 is a pomegranate-and-rhodiola take on a Negroni Sbagliato.
Secondary (5): non alcoholic negroni cocktail (590, KD25) · zero proof cocktails (1,000, KD26) · non alcoholic cocktail drinks (2,400, KD50) · virgin cocktails (2,400, KD33) · non alcoholic craft cocktails (720, KD27)
FAQ: none SKU-specific found; defer to subcategory hub FAQ ("what is a mocktail").

**11. prod-na-rtd-11 — Lapo's Non-Alcoholic Negroni**
Primary: `lapo's non alcoholic negroni` — confirmed real via WebSearch, not volume-backed. Won BevNET's Best New Product of 2024; the brand (fronted by Lapo Elkann, grandson of Gianni Agnelli and a Fiat/Stellantis heir) has grown 350% annually and is now in 2,000+ stores including Whole Foods, Target, and Total Wine.
Secondary (5): non alcoholic negroni cocktail (590, KD25 — CSV-backed, shared category-level term with St. Agrestis, both are real Negroni-style SKUs) · zero proof cocktails (1,000, KD26) · non alcoholic craft cocktails (720, KD27) · virgin cocktails (2,400, KD33) · alcohol alternatives (4,400, KD21)
FAQ: Who makes Lapo's Non-Alcoholic Negroni? — not volume-backed, but a genuine, legitimate celebrity/founder hook worth using (Lapo Elkann's name recognition is real and verifiable, unlike a fabricated tie-in).

**prod-na-rtd-c-02 — St. Agrestis Phony Negroni Non-Alcoholic Cocktail**
Primary: `st agrestis phony negroni` — confirmed real via WebSearch, not volume-backed. Named VinePair's 2025 Rising Drinks Brand of the Year and called the category's "crown jewel" NA Negroni; made at the brand's own Greenpoint, Brooklyn distillery from 30 real, raw, non-GMO botanicals sourced across 5 continents. Originally founded 2014 by sommeliers Nicholas Finger and Fairlie McCollough; the current ownership (Louis Catizone, Matt Catizone, Steven DeAngelo — Italian-American brothers with a genuine amaro-family food heritage) took over in 2017 and launched Phony Negroni in 2022.
Secondary (5): non alcoholic negroni cocktail (590, KD25 — shared with Lapo's) · zero proof cocktails (1,000, KD26) · non alcoholic craft cocktails (720, KD27) · virgin cocktails (2,400, KD33) · alcohol alternatives (4,400, KD21)
FAQ: What makes Phony Negroni different from a regular Negroni? — not volume-backed, but a natural, real product-page FAQ given the brand's own 30-botanical, Brooklyn-distillery story.

**Note on the two stocked Negronis:** since `non alcoholic negroni cocktail` (590, KD25) is a single shared category-level term, do not make it the *primary* for both — use brand-name primaries (as above) and let this term serve as a shared secondary/internal-link anchor between the two pages.

---

### Non-Alcoholic Spritz subcategory

**2. prod-na-rtd-02 — De Soi Purple Lune Non-Alcoholic Aperitif**
Primary: `de soi purple lune` (170, KD8, T1) — CSV-backed, exact match.
Secondary (6): de soi purple line (50, KD5 — common misspelling variant, real volume) · de soi (4,400, KD41, brand head term) · de soi drink (1,600, KD39) · de soi reviews (320, KD8) · de soi non alcoholic (110, KD12) · de soi katy perry (90, KD26 — real celebrity co-founder tie-in)
FAQ: "De Soi Purple Lune review" demand (30, KD7 — CSV-backed, direct SKU-level review search) · Is De Soi safe to drink while pregnant? (ties to the combined pregnancy micro-cluster in Phase 1, ≈130 volume — real and recurring; answer factually that De Soi is alcohol-free but contains adaptogenic/functional ingredients, and recommend the shopper check with their doctor rather than making a direct medical claim).

**3. prod-na-rtd-03 — De Soi Très Rosé Non-Alcoholic Aperitif**
Primary: `de soi tres rose` (170, KD18, T1) — CSV-backed, exact match.
Secondary (5): de soi tres rose reviews (40, KD10) · de soi tres rose product info and reviews (40, KD2) · de soi rose (40, KD15) · de soi rose review (20, KD4) · de soi (4,400, KD41)
FAQ: defer to Purple Lune / De Soi brand hub (pregnancy-safety, founder story).

**4. prod-na-rtd-04 — Free AF Apero Spritz Non-Alcoholic Cocktail**
Primary: `free af apero spritz` — confirmed real via WebSearch, not volume-backed at SKU level (it's the brand's actual flagship, styled as a non-alcoholic Aperol Spritz).
Secondary (5): free af drinks (590, KD22 — CSV-backed, brand-level) · non alcoholic aperitif (1,600, KD15) · non alcoholic apertif (590, KD7) · zero proof (4,400, KD57, background) · alcohol alternatives (4,400, KD21)
FAQ: none SKU-specific. Factual note: Free AF's flavors use a real, patented-feeling differentiator called "Afterglow™," a natural botanical-heat ingredient designed to mimic the warming sensation of alcohol — worth a product-page callout.

**6. prod-na-rtd-06 — Ghia Le Spritz Non-Alcoholic Aperitif**
Primary: `ghia le spritz` — confirmed real via WebSearch, not volume-backed. Launched 2021 as a canned RTD extension of Ghia's 2020 hero product, The Aperitif; founder Mélanie Masarin drew on childhood memories of Mediterranean aperitivo culture.
Secondary (5): non alcoholic aperitif (1,600, KD15) · non alcoholic apertif (590, KD7) · zero proof (4,400, KD57) · alcohol alternatives (4,400, KD21) · best non alcoholic spirits (1,300, KD17, background — Ghia is frequently listed in "best NA" roundups)
FAQ: none SKU-specific. Factual hook: Ghia's Le Spritz line was the first non-alcoholic brand ever to win Esquire's "Drink of the Year" award — real, WebSearch-confirmed, genuinely differentiating.

**10. prod-na-rtd-10 — ISH SpritzISH Non-Alcoholic Spritz**
Primary: `ish spritz` — confirmed real via WebSearch (SpritzISH is the brand's actual RTD spritz SKU name), not volume-backed.
Secondary (5): non alcoholic aperitif (1,600, KD15) · non alcoholic apertif (590, KD7) · zero proof (4,400, KD57) · canned mocktails (1,300, KD25 — cross-listing, it's both a spritz and a can) · alcohol alternatives (4,400, KD21)
FAQ: none SKU-specific.

**12. prod-na-rtd-12 — Lyre's Amalfi Spritz Non-Alcoholic Cocktail**
Primary: `lyres amalfi spritz` — confirmed real via WebSearch, not volume-backed. A gold-medal winner at both IWSC 2025 and The Low & No Masters 2025; bittersweet orange, peach, rhubarb, and elderflower notes; only 70 calories per can. Lyre's itself was founded in 2019 by Mark Livings and Carl Hartmann and is widely described as the global leader in NA spirits.
Secondary (5): non alcoholic aperitif (1,600, KD15) · canned mocktails (1,300, KD25) · non alcoholic apertif (590, KD7) · zero proof (4,400, KD57) · alcohol alternatives (4,400, KD21)
FAQ: none SKU-specific.

**17. prod-na-rtd-17 — Ritual Zero Proof Non-Alcoholic Spritz**
Primary: `ritual zero proof spritz` — confirmed real via WebSearch, not volume-backed at SKU level (brand-level rows below are CSV-backed). Ritual's RTD line launched 2026 with exactly three flavors: **Margarita, G&T, and Spritz** — only Spritz is stocked here (see Phase 8 gap analysis).
Secondary (5): ritual whiskey alternative (720, KD15 — CSV-backed, different Ritual product, real brand-level proof of demand) · ritual zero proof gin alternative (590, KD22 — CSV-backed, same) · non alcoholic aperitif (1,600, KD15) · zero proof (4,400, KD57) · zero proof cocktails (1,000, KD26)
FAQ: none SKU-specific. Factual note: Ritual Zero Proof was acquired by Diageo in September 2024 — the single largest corporate-validation event of any brand in this batch, worth a line in copy.

---

### Non-Alcoholic Canned Cocktails subcategory

**5. prod-na-rtd-05 — Free AF Non-Alcoholic Cuba Libre**
Primary: `free af cuba libre` — confirmed real via WebSearch, not volume-backed.
Secondary (4): free af drinks (590, KD22) · canned mocktails (1,300, KD25) · zero proof (4,400, KD57) · alcohol alternatives (4,400, KD21)
**Flag:** `non carbonated canned cocktails` (720, KD14) from the hub table should NOT be used here — a Cuba Libre is a cola-based, carbonated drink by definition; verify actual carbonation before assigning any "non-carbonated" language to this or any SKU.
FAQ: none SKU-specific.

**7. prod-na-rtd-07 — ISH Non-Alcoholic Lime Daiquiri**
Primary: `ish lime daiquiri` — confirmed real via WebSearch, not volume-backed.
Secondary (4): canned mocktails (1,300, KD25) · non carbonated canned cocktails (720, KD14) · zero proof cocktails (1,000, KD26) · virgin cocktails (2,400, KD33)
FAQ: none.

**8. prod-na-rtd-08 — ISH Non-Alcoholic Mojito**
Primary: `mojito cocktail non alcoholic` (1,300, KD37, T2) — CSV-backed, real, direct head-term match.
Secondary (4): canned mocktails (1,300, KD25) · virgin cocktails (2,400, KD33) · zero proof cocktails (1,000, KD26) · ish lime daiquiri (background, brand-line cross-sell, not volume-backed)
FAQ: none SKU-specific; defer to canned-cocktails hub.

**9. prod-na-rtd-09 — ISH Non-Alcoholic Paloma**
Primary: `ish paloma` — confirmed real via WebSearch, not volume-backed.
Secondary (4): canned mocktails (1,300, KD25) · virgin cocktails (2,400, KD33) · zero proof cocktails (1,000, KD26) · non alcoholic tequila (background, adjacent-category term — Paloma is tequila-style)
FAQ: none.

**13. prod-na-rtd-13 — Mingle Cranberry Cosmo Sparkling Mocktail**
Primary: `mingle cranberry cosmo` — confirmed real via WebSearch, not volume-backed.
Secondary (4): canned mocktails (1,300, KD25) · mocktails non alcoholic (590, KD39) · non alcoholic cocktail drinks (2,400, KD50) · mingle mocktails (background brand head term)
FAQ: none SKU-specific.

**14. prod-na-rtd-14 — Mingle Key Lime Margarita Sparkling Mocktail**
Primary: `mingle key lime margarita` — confirmed real via WebSearch (a genuinely recent Mingle flavor launch), not volume-backed.
Secondary (4): canned mocktails (1,300, KD25) · non alcoholic cocktail drinks (2,400, KD50) · non alcoholic tequila (background, adjacent) · mingle mocktails (background brand head term)
FAQ: none.

**15. prod-na-rtd-15 — Mingle Mocktails Variety Pack**
Primary: `mingle mocktails` — confirmed real via WebSearch (the brand's own head term), not volume-backed in this pull.
Secondary (4): canned mocktails (1,300, KD25) · mocktails non alcoholic (590, KD39) · best mocktails (4,400, KD43) · good mocktails (1,600, KD48)
FAQ: none SKU-specific — see Mingle brand hub below for the founder story and Bethenny Frankel partnership.

**16. prod-na-rtd-16 — Parch Desert Margarita Non-Alcoholic Cocktail**
Primary: `parch desert margarita` — confirmed real via WebSearch, not volume-backed. Real recipe: triple citrus (sour orange, sweet lime, tangerine juice), tamarind, and chamomile, inspired by the Mission Garden in Tucson.
Secondary (4): canned mocktails (1,300, KD25) · non alcoholic tequila (background, adjacent — Parch is agave-based) · non alcoholic cocktail drinks (2,400, KD50) · zero proof cocktails (1,000, KD26)
FAQ: none SKU-specific. Factual hook: Parch was co-founded by Ila Byrne and Rudy Aldana, both former Diageo spirits-industry veterans — Aldana has publicly said a cancer diagnosis and subsequent alcohol-free lifestyle change led him to found the brand. A real, credible, non-fabricated founder story.

**prod-na-rtd-c-01 — Hiyo Non-Alcoholic Social Tonic Variety Pack**
Primary: `non alcoholic social tonic` (2,900, KD34, T2) — CSV-backed, real, and this is literally Hiyo's own coined category term.
Secondary (5): social tonic (1,300, KD21) · social tonics (590, KD33) · canned mocktails (1,300, KD25) · best non alcoholic drinks (2,900, KD15) · alcohol alternatives (4,400, KD21)
FAQ: What is a social tonic? — ties to the combined ~4,790 cluster above; real, and worth explaining since most shoppers won't recognize the term yet. Founded 2021 by Evan Quinn and George Youmans after a family member's alcohol-related hospitalization in 2019; formulated with ashwagandha, L-theanine, lion's mane, lemon balm, passion flower, and ginger for a mood-lift effect the brand calls "the float."

---

## Phase 4 — Brand Hub Drafts

Four brands clear the 2+ stocked SKU bar: **De Soi** (2), **Free AF** (2), **ISH** (4), **Mingle** (3).

### De Soi
**categoryLabel:** De Soi
**Hook:** Co-founded in 2022 by pop star Katy Perry and Master Distiller Morgan McLachlan, De Soi ("of oneself" in French) grew out of the two women bonding over a shared love of spritzes while both were pregnant and unable to drink — a real, well-documented origin story, not a manufactured celebrity tie-in. The brand has since expanded to 6,000+ US retail doors including Target, Sprouts, and Publix, with a full lineup of four core flavors (Purple Lune, Golden Hour, Très Rosé, and Spritz Italiano) plus limited-run flavors like St. Moritz Mule and Champignon Dreams — only Purple Lune and Très Rosé are stocked here (see Phase 8 gap analysis).
**Secondary keywords:** de soi (4,400, KD41) · de soi drink (1,600, KD39) · de soi reviews (320, KD8) · de soi non alcoholic (110, KD12) · de soi katy perry (90, KD26)
**FAQs:**
1. Who founded De Soi? (ties to `de soi ceo`, 40, KD22, and general brand-navigational demand) — Katy Perry and Morgan McLachlan, co-founded 2022.
2. Is De Soi safe to drink while pregnant? (ties to the ~130-combined pregnancy micro-cluster) — De Soi is alcohol-free but contains functional/adaptogenic ingredients; recommend shoppers confirm with their doctor rather than stating a blanket medical claim.

### Free AF
**categoryLabel:** Free AF (AF Drinks)
**Hook:** Founded in 2020 by New Zealand entrepreneur Lisa King — who also founded Eat My Lunch, a social enterprise that has provided over 1.7 million free lunches to children in need — Free AF (branded "AF Drinks" internationally) became New Zealand's #1 non-alcoholic cocktail brand before expanding globally. Its defining, real differentiator is "Afterglow™," a proprietary natural botanical-heat extract designed to mimic the pleasant warmth of drinking alcohol.
**Secondary keywords:** free af drinks (590, KD22) · non alcoholic aperitif (1,600, KD15) · canned mocktails (1,300, KD25) · zero proof (4,400, KD57)
**FAQs:**
1. What is "Afterglow" in Free AF drinks? — A proprietary natural botanical-heat ingredient designed to mimic alcohol's warming sensation; not volume-backed, but a genuine differentiator unique to this brand.
2. Who makes Free AF? — Lisa King's AF Drinks Company, founded 2020 in New Zealand.

### ISH
**categoryLabel:** ISH
**Hook:** Founded in 2018 in Copenhagen by Morten Sørensen after he took a 100-day break from alcohol and found the alcohol-free options on the market lacking. Backed by a 2022 investment from Anora, ISH has won 40+ international taste awards and built out a full range spanning NA sparkling wines, three NA "spirits" styled after rum, gin, and tequila, and canned RTD cocktails — the 4 SKUs stocked here (Lime Daiquiri, Mojito, Paloma, SpritzISH) are its RTD cocktail line.
**Secondary keywords:** mojito cocktail non alcoholic (1,300, KD37) · canned mocktails (1,300, KD25) · non alcoholic aperitif (1,600, KD15) · zero proof cocktails (1,000, KD26)
**FAQs:**
1. Where is ISH from? — Copenhagen, Denmark; founded 2018 by Morten Sørensen.
2. Does ISH make anything besides canned cocktails? — Yes: the brand's full range also includes NA sparkling wines and three NA "spirits" (Caribbean Spiced Spirit, London Botanical Spirit, Mexican Agave Spirit) plus GinISH & Tonic — none of which are currently stocked here (see Phase 8).

### Mingle
**categoryLabel:** Mingle Mocktails
**Hook:** Founded in 2017 by Laura Taylor, who had been alcohol-free for 5+ years and grew tired of "boring seltzer" being her only option at social events. Mingle has since publicly partnered with Bethenny Frankel to push mocktails into the mainstream — a real, documented celebrity/business partnership, not a fabricated tie-in. The line is sparkling, juice-and-botanical-based, and spans flavors including Blackberry Hibiscus Bellini, Cranberry Cosmo, and the newer Key Lime Margarita.
**Secondary keywords:** canned mocktails (1,300, KD25) · mocktails non alcoholic (590, KD39) · best mocktails (4,400, KD43) · good mocktails (1,600, KD48)
**FAQs:**
1. Who founded Mingle Mocktails? — Laura Taylor, in 2017.
2. Is Bethenny Frankel involved with Mingle? — Yes, a real, publicized partnership aimed at bringing mocktails into the mainstream.

---

## Phase 8 — Gap Analysis

### Part A — Real missing expressions within brands already stocked
Every finding below is WebSearch-confirmed as a real, currently-sold SKU from a brand already in the catalog — not a new-to-catalog brand.

| Brand (stocked) | Missing expression(s) | Signal |
|---|---|---|
| De Soi (Purple Lune, Très Rosé stocked) | **Golden Hour**, **Spritz Italiano** (the brand's other two core flavors), plus limited-run **Haute Margarita**, **St. Moritz Mule**, and **Champignon Dreams** | CSV-backed: `de soi golden hour` (170, KD16) · `de soi spritz italiano` (260, KD13) · `de soi haute margarita` (170, KD14) · `de soi st moritz mule` (50, KD9). Champignon Dreams confirmed real via WebSearch, not volume-backed. Haute Margarita is a real, current, widely-stocked SKU (lime/agave/jalapeño, 60 cal) — the single strongest Part A finding for this brand. |
| Free AF (Apero Spritz, Cuba Libre stocked) | **Vodka Spritz**, **Paloma** — both real, currently-sold Free AF flavors per the brand's own site | Not volume-backed in this pull; confirmed real via WebSearch. |
| ISH (4 canned cocktails stocked) | **GinISH & Tonic** (a 4th real canned RTD cocktail in the same line) plus the brand's 3 NA "spirits" (Caribbean Spiced Spirit/rum, London Botanical Spirit/gin, Mexican Agave Spirit/tequila) and 2 NA sparkling wines | Not volume-backed; confirmed real via WebSearch. GinISH & Tonic is the closest, most direct gap — same RTD-can format as the 4 SKUs already stocked. |
| Lapo's (Negroni stocked) | **Espresso Martini, Melograno Mule, Amaro Cola, Citrus Spritz, Negroni Water** — the brand's real line has expanded to 6 total SKUs, of which only the original Negroni is stocked | **Strongest single Part A finding in this entire report.** Not volume-backed in this data pull, but confirmed real and current via WebSearch (BevNET/PR Newswire coverage of the full range) — 5 additional real, sellable SKUs from a brand already stocked. |
| Mingle (Cranberry Cosmo, Key Lime Margarita, Variety Pack stocked) | **Blackberry Hibiscus Bellini** — a real, current Mingle flavor not in the catalog outside the Variety Pack | Confirmed real via WebSearch, not volume-backed as a standalone-SKU row. |
| Parch (Desert Margarita stocked) | **Prickly Paloma**, **Spiced Piñarita** — the brand's other two real, currently-sold flavors | Confirmed real via WebSearch (drinkparch.com's own current lineup), not volume-backed in this pull. |
| Ritual Zero Proof (Spritz stocked) | **Margarita**, **G&T** — the other two-thirds of Ritual's real, newly-launched (2026) RTD line | Confirmed real via WebSearch (BevNET/Spirits Business launch coverage), not volume-backed yet in this pull — a genuinely new SKU family worth re-checking in a future SEMrush refresh once search volume accrues. |
| St. Agrestis (Phony Negroni stocked) | **Amaro Falso** (a non-alcoholic amaro, 20 real botanicals) and the **Phony Mezcal Negroni** variant | Confirmed real via WebSearch (stagrestis.com's own current product pages), not volume-backed. |
| Curious Elixirs (No. 1 stocked) | The brand's real numbered range continues through **No. 9** — confirmed flavors include No. 2 (Spicy Pineapple Margarita), No. 3 (Cucumber Collins), No. 4 (Sicilian Blood Orange Spritz), No. 5 (Smoked Cherry Chocolate Old Fashioned), No. 7 (Sparkling Champagne Cocktail), No. 8 (Mushroom Amaro) | Confirmed real via WebSearch, not volume-backed. A large, legitimate expansion opportunity from a single stocked SKU. |

### Part B — Real non-alcoholic RTD cocktail brands not in the catalog at all
None of these appeared in either source CSV (no dedicated export exists for them), so nothing below is volume-backed — every entry is confirmed real and currently sold via WebSearch, matching the brief's examples.

| Brand | What it is | Real signal |
|---|---|---|
| Kin Euphorics | Founded 2018 by Jen Batchelor and Matthew Cauble (Soylent co-founder); functional NA aperitif line (Kin Spritz, High Rhode, Dreamlight) using nootropics and adaptogens. Bella Hadid joined as co-founder/business partner in 2021 (she was not an original 2018 co-founder — get this distinction right if used in copy). | One of the most recognized names in the category; regularly appears in "best NA brands" roundups (Rolling Stone, Spoon University). |
| Everleaf | UK-founded (2019) NA aperitif brand from Paul Mathew; three-SKU range (Forest, Mountain, Marine), one of the UK's best-selling NA brands, now sold in the US. | Real, award-recognized, WebSearch-confirmed current range. |
| Wilderton | Hood River, Oregon-based; opened the US's first NA distillery-and-tasting-room in 2023; botanical spirits (not RTD cocktails per se, but a real, adjacent gap brand). | Real, WebSearch-confirmed. |
| Betty Buzz | Launched 2021 by actress Blake Lively; NA sparkling sodas/mixers (not full cocktails, but a genuine celebrity-founded adjacent brand worth flagging). | Real, WebSearch-confirmed; more mixer than RTD cocktail, so lower-priority fit for this specific category. |
| Surely | Texas-based NA wine brand (Blanc, Red Blend) — real and well-distributed, but it's NA wine, not RTD cocktails; flagged per the brief's example list but a weaker categorical fit than the others here. | Real, WebSearch-confirmed. |
| St. Agrestis's real competitor set — **Casamara Club** | Detroit-founded (2018) by Erica Johnson and Jason LaValla; "leisure soda" line plus a 2024-launched full NA cocktail, Superclasico (an Italian-amaro-style aperitivo). | Real, WebSearch-confirmed, one of VinePair's 2026 top-22 NA brands. |
| Aplós | Hemp-based NA aperitif co-founded by beverage-industry veterans Emily Onkey and David Fudge, developed with James Beard honoree Lynnette Marrero (Speed Rack co-founder). | Real, WebSearch-confirmed, featured in VinePair's 2026 top-22 list. |
| Figlia | A citrusy, bitter NA aperitivo positioned as a Campari alternative for home cocktail-making. | Real, WebSearch-confirmed. |
| Edna's Non-Alcoholic Cocktail Co. | Award-winning NA cocktail line that recently expanded with a Margarita RTD (per October 2025 BusinessWire coverage). | Real, WebSearch-confirmed, actively expanding. |

**Highest-priority findings overall:** Lapo's 5-SKU real expansion and Curious Elixirs' real 9-flavor numbered range (both Part A, inside brands already stocked) are the two strongest signals in this report — both represent a large amount of genuine, sellable, on-brand inventory that isn't in the catalog yet, independent of any keyword-volume argument. In Part B, Kin Euphorics and Casamara Club are the clearest brand-whitespace candidates given their category-leading recognition.

---

## Phase 6 — Blog Topic Candidates

1. **"What Is a Mocktail? A Complete Guide"** — the largest single informational cluster in this report: what is a mocktail (8,100, KD29) + what is the mocktail (8,100, KD43) + what are mocktails (1,600, KD28) + whats a mocktail (1,000, KD11) + what is mocktail drink (1,600, KD34) + what is a mocktail drink (1,300, KD33) + what is in a mocktail (720, KD29). Combined **~22,420/mo**. Foundational pillar page, links to every subcategory hub.
2. **"Do Non-Alcoholic Cocktails Actually Taste Good?"** — do mocktails have alcohol (1,000, KD14) + alcohol that doesn't taste like alcohol (880, KD13). Directly addresses the skepticism the brief flagged ("are non-alcoholic cocktails actually good").
3. **"Easy Mocktail Recipes to Make at Home"** — the largest raw-volume cluster in the whole file (~70,000 combined across dozens of recipe-phrased rows, see Phase 1 Bucket 1). A genuine pillar-content opportunity, but keep it recipe/lifestyle content that cross-sells the stocked RTD SKUs as shortcuts, not a product-page keyword target.
4. **"What to Order When You're Not Drinking: Best Non-Alcoholic Drinks at a Bar"** — non alcoholic drinks to order at a bar (1,300, KD5 — genuinely low competition) + mocktails to order at a bar (1,300, KD19) + virgin drinks to order at a bar (720, KD15) + great/best/good virgin drinks (2,400+720+720). Combined **~9,000+/mo**, low average KD, strong quick-win candidate.
5. **"Alcohol Alternatives 101: Zero Proof, Social Tonics, and Functional Beverages Explained"** — alcohol alternatives (4,400, KD21) + zero proof (4,400, KD57) + zero proof meaning (1,600, KD6) + what is zero proof (590, KD22) + social tonic (1,300, KD21) + non alcoholic functional beverages (1,900, KD13). Ties directly to Ritual Zero Proof, Hiyo, and the adaptogen-forward brands (De Soi, Parch, Curious Elixirs) in one explainer.
6. **"Sober Curious? A Beginner's Guide to Non-Alcoholic Cocktails"** — alcohol substitute (1,300, KD16) + drinks to replace alcohol (720, KD24) + alcohol replacement drinks (1,600, KD39) + best alcohol alternatives (720, KD32). Combined **~4,000+/mo**; genuinely relevant per the brief (sober-curious/Dry January lifestyle content is explicitly kept, not filtered).
7. **"Dry January Guide: Non-Alcoholic Cocktails Worth Stocking Your Bar With"** — seasonal pillar tying together the alcohol-alternative cluster above with the full product catalog; publish ahead of January for seasonal search lift (no direct January-specific row surfaced in this pull, but the underlying alcohol-alternative/zero-proof demand is real and evergreen).
8. **"Best Non-Alcoholic Cocktails for a Party"** — virgin drinks for party (1,000, KD27) + best non alcoholic drinks (2,900, KD15) + best mocktails (4,400, KD43). Combined **~8,300+/mo**, directly named in the brief's own example list.
9. **"Holiday & Seasonal Mocktails Guide"** — christmas virgin drinks (4,400, KD46) + holiday mocktails (1,600, KD37) + holiday virgin drinks (1,600, KD41) + summer mocktails (1,300, KD22) + winter mocktails (590, KD13) + ramadan mocktail easy (1,300, KD12). A genuine, evergreen seasonal-content calendar opportunity spanning multiple holidays.
10. **"Is It Safe to Drink Non-Alcoholic Aperitifs While Pregnant?"** — ties directly to the De Soi pregnancy micro-cluster (~130 combined) and the brand's own founding story (both co-founders were pregnant); a real, sensitive-but-legitimate informational angle — write carefully, recommend consulting a doctor rather than issuing blanket medical claims.
11. **"Mocktails for Kids: Family-Friendly Non-Alcoholic Drinks"** — childrens mocktails (590, KD16) + mocktails for kids (590, KD15). Low priority, low volume, but a real and easy supporting post.

---

## What to check

1. **No dedicated brand exports exist for 12 of the 19 SKUs' brands** (Curious Elixirs, Free AF, Ghia, ISH, Lapo's, Lyre's, Mingle, Parch, Ritual Zero Proof, Hiyo, St. Agrestis) — every primary keyword for those brands is WebSearch-confirmed-real rather than volume-backed. A dedicated SEMrush pull per brand (especially Lapo's, Ghia, and St. Agrestis, which show up repeatedly in "best of 2026" press coverage and likely carry real search volume) would materially sharpen this report.
2. **Ritual Zero Proof's RTD line launched in 2026** — Margarita and G&T (the other two RTD flavors alongside the stocked Spritz) are brand-new to market and may simply not have accrued search volume yet. Worth re-checking in 3–6 months rather than assuming zero real demand.
3. **Lapo's real 6-SKU range and Curious Elixirs' real 9-flavor range** are the two strongest Part A gap findings in this report — both represent large, verified, currently-sold expansion opportunities within brands already stocked, independent of the keyword-volume argument. Worth a stocking conversation.
4. **De Soi's "Haute Margarita" and "Champignon Dreams"** are real, current, widely-distributed SKUs (Total Wine, Sprouts, Amazon) not currently stocked — Haute Margarita in particular carries its own CSV-backed volume (170, KD14) despite not being in the catalog.
5. **The Kin Euphorics Bella Hadid fact needs care if used anywhere:** she joined as co-founder/business partner in 2021, three years after Jen Batchelor and Matthew Cauble founded the brand in 2018 — don't imply she was a founding co-founder from day one.
6. **`non carbonated canned cocktails` (720, KD14)** was pulled into the canned-cocktails hub table per the brief's instruction to check "spritz"-style collisions, but most SKUs in that subcategory (Mingle's sparkling mocktails, ISH's cans, Free AF's Cuba Libre) are actually carbonated — verify true carbonation per-SKU before assigning this term anywhere; it's flagged as a misfit for Free AF's Cuba Libre specifically in Phase 3.
7. **The De Soi export's "de sai" (320, KD33)** is a meaningfully-sized row that could not be confidently tied to the brand — recommend a manual SERP check before deciding whether it's brand-relevant or a genuine unrelated homonym.
8. **A dedicated "non-alcoholic spritz" or "non-alcoholic aperitif" category-level SEMrush export** does not exist yet and would likely sharpen the Non-Alcoholic Spritz hub considerably — right now that hub leans on the general cocktails file's aperitif-adjacent rows rather than spritz-specific volume.
