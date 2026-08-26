# Keyword Map — Non-Alcoholic Champagne & Sparkling (22 SKUs, 3 Subcategories)
**Site:** Aged And Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — research report only, nothing implemented. Covers the full NA Champagne & Sparkling category (Non-Alcoholic Sparkling Wine ×10, Non-Alcoholic Sparkling Rosé ×8, Sparkling Grape Juice ×4). Fine Wine and Champagne are already fully SEO'd — see `keyword-map-wine-red.md` and `keyword-map-champagne-a-l.md` for the format/quality bar this report matches.
**Methodology:** Real SEMrush export data — `Non-Alcoholic-champagne_all-keywords_us_2026-08-26` (100 rows) + its `(1)` companion file (87 rows, mostly ultra-long-tail PAA phrasing, deduped against the first file), `Non-Alcoholic-sparkling-wine_all-keywords_us_2026-08-26` (100 rows), `Non-Alcoholic-sparkling-rose_all-keywords_us_2026-08-26` (100 rows), `sparkling-grape-juice_all-keywords_us_2026-08-26` (100 rows). No dedicated brand-level export exists for any of the 8 wine brands in this batch (Noughty, Château del ISH, FRE, Giesen, Leitz, BOLLE, French Bloom, Oddbird, Prima Pavé, Surely, Wölffer Estate) — where a brand surfaced in the category exports those real rows are used; where nothing surfaced, the product is marked **"confirmed real via WebSearch, not volume-backed"** and grounded with a real, sourced brand/production fact instead of a fabricated one. KD 0–20 = T1 Quick Win, 21–35 = T2 Worth Targeting, 36+ = T3/background only.
**Exact SKU names confirmed via `src/data/products.ts`:** prod-na-champ-18 = **Welch's Sparkling Red Grape Juice Cocktail** (25.4oz), prod-na-champ-19 = **Welch's Sparkling White Grape Juice** (25.4oz).

---

## Phase 1 — Filter Summary

This category was noisier than expected for a niche, but the noise clusters are narrower and easier to isolate than Champagne's song-lyric/color-word problem — mostly homonym brands, wrong-retailer navigational demand, and a literal-vs-figurative "grape juice" split.

**Sparkling water — 2,900 combined, single largest single-row drop.** `non alcoholic sparkling water` (2,900, KD27) is a different beverage category entirely (flavored fizzy water, e.g. LaCroix/Perrier-style), not a wine or grape-juice product. Dropped in full.

**Wrong-retailer navigational demand — ~3,200 combined, dropped (Aged And Amber isn't Trader Joe's or Walmart, so this volume can't convert on our pages).** Trader Joe's cluster (~2,250 combined): `trader joe's non alcoholic wine` (480, KD27), `trader joe's chardonnay` (320, KD22 — this is a regular *alcoholic* TJ's Chardonnay, doubly irrelevant), `sparkling juice trader joe's` (260, KD24), `non alcoholic wine trader joe's` (210, KD26), `trader joes white wine` (210, KD22 — also alcoholic), `trader joe's sparkling drinks` (110, KD26), `trader joes grape juice` (110, KD15), `trader joe's grape juice` (90, KD8), `does trader joe's have non alcoholic wine` (90, KD25), `trader joe's non alcoholic` (90, KD33), `champagne grapes trader joe's` (70, KD15 — about eating grapes, not the beverage). Walmart cluster (~950 combined): `walmart grape juice` (390, KD25), `grape juice at walmart` (170, KD21), `grape juice walmart` (140, KD24), `sparkling juice walmart` (140, KD35), `sparkling grape juice walmart` (110, KD27).

**Generic/literal grape-juice imagery, not sparkling-specific — ~1,030 combined.** `grape juice in bottle` (210, KD23), `simple grape juice` (140, KD16), `grape juiced` (140, KD20), `grape guice` (170, KD33 — misspelling), `cup of grape juice` (90, KD12), `grape juice glass` (70, KD23), `glass grape juice` (70, KD11), `glass of grape juice` (70, KD27), `grape juice in glass` (70, KD14). Same treatment as "wine glass" imagery noise in the Fine Wine batches — real search behavior, zero product-page relevance.

**"Free wine" homonym — 390 dropped.** `free wine` (390, KD28, Navigational intent) reads as people searching for free-sample/giveaway wine promotions, not the FRE brand (which is always written "FRE" or "fre" in its own real query cluster, never bare "free wine"). Dropped as a homonym, not folded into the FRE product pages.

**Cooking wine — 320 dropped.** `non alcoholic cooking wine` (320, KD12) is a recipe ingredient (deglazing, sauces), a different use-case product from a bottle meant for drinking or toasting — same treatment as red-wine-vinegar/cooking-wine exclusions in the Fine Wine reports.

**Celebrity/unrelated-brand homonym in the rosé export — ~250 combined, dropped.** `kylie wine` (110, KD23), `kylie minogue sparkling rose` (90, KD7), `kylie minogue rose wine` (50, KD18). Kylie Minogue Wines is a real celebrity-owned brand, but it's a standard *alcoholic* rosé/sparkling range — off-category for this NA report, and not stocked. Likely surfaced via SEMrush's "related searches" contamination on the sparkling-rosé query set.

**Ambiguous/unclear, dropped without confident attribution:** `libby rose` (90, KD31) — no confident match to any real, current NA brand found; could be Libbey Glass "Rosé" glassware or an unrelated name. Not used.

**Adjacent-category, excluded on category grounds rather than dropped as noise:** `kin bloom non-alcoholic alternative rosé` (390, KD13) is a real product (Kin Euphorics' "Bloom"), but it's a botanical/adaptogen wellness beverage, not a de-alcoholized or juice-based wine product — excluded from wine-keyword assignment; noted once in the gap analysis so it isn't silently lost.

**Zero/near-zero-volume PAA long tail (the `(1)` companion Champagne file, 87 rows):** the majority of rows sit at 0–20 volume — hyper-specific city-navigational variants (`where to buy non alcoholic champagne in bushwick/toronto/calgary/ontario/uk`, all 0 volume), a "was this halal/kosher/safe for X" cluster, and duplicate phrasing of rows already counted in the main file (e.g. `what is the best non alcoholic wine` at 210 appears in both). Kept in aggregate only, as FAQ/blog fodder — not assigned as page-level keywords.

**Kids'-party vs. adult "alternative to Champagne" intent (per brief instruction) — genuinely inseparable at the CSV level.** The bare head terms `sparkling grape juice` (5,400, KD22) and `sparkling grape juice drinks` (4,400, KD9) carry mixed SERP features (Recipes, Discussions and forums, Popular products) consistent with both family-celebration/kids'-birthday-party intent and adult mocktail/toast-alternative intent under the same query. There is no clean way to split this via SEMrush category data alone. **Recommendation:** keep hub-page copy broadly celebratory (toasts, holidays, family gatherings) rather than writing narrowly to either a bar-cart or a kids'-party angle — both real audiences are baked into the same search terms.

**Dry January / pregnancy-safe angle — kept per brief, genuinely real despite low individual volume.** `can a pregnant woman drink non alcoholic champagne` (20), `can i drink non alcoholic champagne while pregnant` (20), `is non alcoholic champagne safe during pregnancy` (20), `is it safe to drink non alcoholic champagne while pregnant` (20, KD18), `can pregnant women drink non alcoholic champagne` (20). Combined only ~100, but a real, recurring cluster — good FAQ/blog material, not noise, exactly as the brief anticipated.

**Kept, not filtered — real production-terminology terms used throughout below:** `dealcoholized wine` (2,400, KD23), `alcohol removed wine` (1,900, KD21) — these are the correct technical vocabulary for how nearly every SKU in this category is actually made, not marketing fluff.

**Net:** roughly 30–35% of raw rows across the five exports were noise or off-category and excluded from the tables below (sparkling water, wrong-retailer navigational, literal grape-juice imagery, "free wine"/cooking-wine/celebrity homonyms, near-zero PAA long tail).

---

## Phase 2 — Subcategory Hub Keyword Tables

### `/na-champagne-sparkling/non-alcoholic-sparkling-wine/`
Primary: **non alcoholic sparkling wine** (3,600, KD20) — the hyphenated variant `non-alcoholic sparkling wine` (390, KD18) is the same query, folded in.
Secondary: non alcoholic champagne (9,900, KD21 — broader category anchor, useful head term even though it points at Champagne-shaped SERPs) · dealcoholized wine (2,400, KD23) · alcohol removed wine (1,900, KD21) · sparkling non alcoholic wine (880, KD17) · alcohol free sparkling wine (480, KD16) · best non alcoholic sparkling wine (320, KD16)
FAQ: "Is non-alcoholic sparkling wine actually alcohol-free?" (composite, real recurring PAA: `does non alcoholic champagne have alcohol` 20/KD11 + `is champagne alcohol free` 40/KD13 + `can non alcoholic champagne make you drunk` 20/KD0 — answer factually: nearly all "non-alcoholic" sparkling wine legally retains a trace under 0.5% ABV, the same standard as fruit juice) · "What is dealcoholized wine?" (ties directly to `dealcoholized wine`, 2,400, KD23 — the real technical process term used by most brands in this category)

### `/na-champagne-sparkling/non-alcoholic-sparkling-rose/`
Primary: **non alcoholic sparkling rose** (480, KD21) — the reordered variant `sparkling rose non alcoholic` (210, KD20) is the same query, folded in.
Secondary: rose fizzy wine (4,400, KD18 — large real head term, genuinely used phrasing for sparkling rosé) · non alcoholic rose (1,000, KD17) · french sparkling rose (590, KD4) · non alcoholic rose wine (260, KD11) · rose sparkling (260, KD6) · best non alcoholic sparkling rose (50, KD5)
FAQ: no single strong SKU-agnostic PAA row surfaced for rosé specifically — defer to the sparkling-wine hub's "is it actually alcohol-free" FAQ, which applies equally here.

### `/na-champagne-sparkling/sparkling-grape-juice/`
Primary: **sparkling grape juice** (5,400, KD22)
Secondary: sparkling juice (5,400, KD15) · sparkling grape juice drinks (4,400, KD9) · sparkling white grape juice (590, KD13) · sparkling grape juice non alcoholic (590, KD16 — real search volume despite being tautological, since all grape juice is alcohol-free; worth a one-line clarifying note in hub copy) · non alcoholic sparkling grape juice (140, KD16) · sparkling grape juice near me (140, KD19)
FAQ: none with independent PAA-style volume found; the hub copy should carry the broad celebratory framing described in Phase 1 rather than a forced FAQ.

---

## Phase 3 — Per-Product Keyword Assignments

### Non-Alcoholic Sparkling Wine (10 SKUs)

**1. prod-na-04 — Noughty Alcohol-Free Sparkling Chardonnay Vegan Wine**
Primary: **noughty sparkling chardonnay** (390, KD14) — CSV-backed, exact match.
Secondary (5): noughty non alcoholic champagne (720, KD16) · noughty non alcoholic wine (720, KD30) · noughty wine (480, KD23) · noughty non-alcoholic sparkling chardonnay (170, KD12) · noughty (1,300, KD46 — background brand head term)
FAQ: none SKU-specific; defer to the Noughty brand hub below.

**2. prod-na-champ-01 — Château del ISH Non-Alcoholic Sparkling White**
Primary: no direct CSV row for "chateau del ish" / "del ish" across any of the 5 exports — **confirmed real via WebSearch, not volume-backed.** ISH was founded in Copenhagen in 2018 by Morten Sørensen as a mindful-drinking company; the Sparkling White is a demi-sec made from de-alcoholized Pinot Blanc and Silvaner grapes, and the brand has won 40+ international taste awards.
Secondary (5): non alcoholic sparkling wine (3,600, KD20) · alcohol free champagne (1,300, KD17) · sparkling non alcoholic wine (880, KD17) · best non alcoholic champagne (720, KD17) · non-alcoholic champagne (590, KD18)
FAQ: defer to the Château del ISH brand hub.

**3. prod-na-champ-02 — FRE Alcohol-Removed Sparkling Brut**
Primary: **fre sparkling brut** (480, KD10) — CSV-backed, exact match.
Secondary (5): fre wine (3,600, KD21) · fre non alcoholic wine (2,900, KD19) · fre non alcoholic champagne (480, KD10) · fre champagne (390, KD11) · sutter home fre brut non alcoholic champagne (170, KD11)
FAQ: "Does FRE wine have any alcohol?" (ties to `fre wine alcohol content`, 70, KD3 — CSV-backed, real) — answer: like nearly all alcohol-removed wines, FRE retains a trace typically under 0.5% ABV.

**4. prod-na-champ-03 — Giesen 0% Alcohol-Removed Sparkling Brut**
Primary: no direct CSV row for "giesen" + "brut"/"sparkling" — **confirmed real via WebSearch, not volume-backed.** Giesen 0% uses spinning-cone technology (aroma removed first, then alcohol, then recombined) on premium Marlborough, New Zealand fruit, and finishes at roughly 80% fewer calories than the 12.5% ABV original.
Secondary (5): non alcoholic sparkling wine (3,600, KD20) · alcohol removed wine (1,900, KD21) · sparkling non alcoholic wine (880, KD17) · alcohol free sparkling wine (480, KD16) · organic sparkling wine (480, KD6)
FAQ: defer to Phase 2 hub FAQ.

**5. prod-na-champ-04 — Leitz Eins-Zwei-Zero Sparkling Riesling**
Primary: no direct CSV row for "leitz" or "eins zwei zero" — **confirmed real via WebSearch, not volume-backed.** Josef Leitz's Rheingau, Germany estate removes alcohol via gentle vacuum distillation (not reverse osmosis), preserving green-apple/pear/Riesling-spice character; the range is Fair 'N Green sustainability-certified.
Secondary (5): non alcoholic sparkling wine (3,600, KD20) · alcohol removed wine (1,900, KD21) · sparkling brut (480, KD19) · organic sparkling wine (480, KD6) · non alcoholic chardonnay (320, KD15 — closest varietal-NA row in the data, background only, different grape)
FAQ: defer to Phase 2 hub FAQ.

**6. prod-na-champ-05 — BOLLE Non-Alcoholic Sparkling Blanc de Blancs**
Primary: no direct CSV row for "bolle" — **confirmed real via WebSearch, not volume-backed.** BOLLE is made via a patent-pending twice-fermented process from 80% Chardonnay/20% Silvaner — unlike most NA sparkling wines (grape juice or a dealcoholized base with added flavoring), BOLLE starts as real wine and ferments it a second time; it scored 91 points from Wine Enthusiast.
Secondary (5): non alcoholic sparkling wine (3,600, KD20) · sparkling chardonnay (390, KD14) · organic sparkling wine (480, KD6) · best non alcoholic champagne (720, KD17) · champagne alternative (140, KD5)
FAQ: defer to Phase 2 hub FAQ.

**7. prod-na-champ-08 — French Bloom Le Blanc Alcohol-Free Sparkling Wine**
Primary: **french bloom le blanc** (170, KD18) — CSV-backed, exact product-name match.
Secondary (5): french bloom (1,900, KD23) · french bloom non alcoholic (590, KD25) · french bloom non alcoholic wine (320, KD23) · french bloom non alcoholic champagne (260, KD22) · french bloom champagne (90, KD23)
FAQ: none SKU-specific; see French Bloom brand hub (founder/organic hook).

**8. prod-na-champ-13 — Oddbird Blanc de Blancs Non-Alcoholic Sparkling Wine**
Primary: no CSV row for "oddbird" across any export — **confirmed real via WebSearch, not volume-backed.** Founded in Sweden by Moa Gürbüzer; Blanc de Blancs is 100% Chardonnay/Colombard sourced from Languedoc-Roussillon, France, matured a full 12 months before alcohol removal for a more complex, authentic flavor than a typical dealcoholized wine.
Secondary (5): non alcoholic sparkling wine (3,600, KD20) · dealcoholized wine (2,400, KD23) · sparkling chardonnay (390, KD14) · organic sparkling wine (480, KD6) · champagne alternative (140, KD5)
FAQ: defer to Phase 2 hub FAQ.

**9. prod-na-champ-17 — Surely Non-Alcoholic Brut**
Primary: **surely non alcoholic wine** (320, KD13) — CSV-backed, closest available brand match (no "brut"-specific row surfaced).
Secondary (5): non alcoholic sparkling wine (3,600, KD20) · sparkling brut (480, KD19) · dealcoholized wine (2,400, KD23) · alcohol free sparkling wine (480, KD16) · sparkling non alcoholic wine (880, KD17)
FAQ: none forced. Brand hook (WebSearch-confirmed): Surely uses real alcohol-removed California wine, not a grape-juice base; the Brut is made from Sonoma-sourced grapes and won Silver at both the 2022 SF International Wine Competition and the 2022 NY World Wine & Spirits Competition.

**10. prod-na-champ-20 — Wölffer Estate Spring in a Bottle Sparkling Blanc de Blancs**
Primary: no CSV row for "spring in a bottle" + "blanc de blancs" — **confirmed real via WebSearch, not volume-backed** (the export only surfaced the sibling Rosé — see #21 below). Sourced from the Moselle Valley, Germany.
Secondary (5): non alcoholic sparkling wine (3,600, KD20) · dealcoholized wine (2,400, KD23) · organic sparkling wine (480, KD6) · sparkling chardonnay (390, KD14 — background, different varietal) · champagne alternative (140, KD5)
FAQ: defer to Wölffer Estate brand hub.

---

### Non-Alcoholic Sparkling Rosé (8 SKUs)

**11. prod-na-champ-06 — Château del ISH Non-Alcoholic Sparkling Rosé**
Primary: no CSV row — **confirmed real via WebSearch, not volume-backed.** Multi-award-winning; a de-alcoholized blend of Merlot and Pinot Noir.
Secondary (5): non alcoholic sparkling rose (480, KD21) · rose fizzy wine (4,400, KD18) · non alcoholic rose (1,000, KD17) · non alcoholic rose wine (260, KD11) · sparkling rose non alcoholic (210, KD20)
FAQ: defer to Château del ISH brand hub.

**12. prod-na-champ-07 — FRE Alcohol-Removed Sparkling Rosé**
Primary: **fre rose** (110, KD12) — CSV-backed, direct hit.
Secondary (5): fre wine (3,600, KD21) · fre non alcoholic wine (2,900, KD19) · fre champagne (390, KD11) · non alcoholic sparkling rose (480, KD21) · rose fizzy wine (4,400, KD18)
FAQ: none SKU-specific; defer to FRE brand hub.

**13. prod-na-champ-09 — French Bloom Le Rosé Alcohol-Free Sparkling Wine**
Primary: **french bloom le rose** (90, KD3) — CSV-backed, exact product-name match.
Secondary (5): french bloom (1,900, KD23) · french bloom rose (50, KD2) · french bloom non alcoholic (590, KD25) · non alcoholic sparkling rose (480, KD21) · french bloom non alcoholic wine (320, KD23)
FAQ: none SKU-specific; see French Bloom brand hub.

**14. prod-na-champ-11 — Leitz Eins-Zwei-Zero Sparkling Rosé**
Primary: no CSV row for a Leitz rosé specifically — **confirmed real via WebSearch, not volume-backed.** The Eins-Zwei-Zero range is best known for its Sparkling Riesling; the Rosé is a real, current line extension using the same Rheingau vacuum-distillation process.
Secondary (5): non alcoholic sparkling rose (480, KD21) · rose fizzy wine (4,400, KD18) · alcohol free rose (170, KD12) · non alcoholic rose wine (260, KD11) · low alcohol rose wine (140, KD3)
FAQ: defer to Phase 2 hub FAQ.

**15. prod-na-champ-12 — Noughty Alcohol-Free Sparkling Rosé**
Primary: **noughty sparkling rosé** (90, KD18) — CSV-backed, exact match.
Secondary (5): noughty non alcoholic sparkling rosé (110, KD15) · noughty alcohol-free sparkling rosé (70, KD15) · noughty non alcoholic champagne (720, KD16) · noughty non alcoholic wine (720, KD30) · noughty (1,300, KD46)
FAQ: none SKU-specific; see Noughty brand hub.

**16. prod-na-champ-14 — Oddbird Non-Alcoholic Sparkling Rosé**
Primary: no CSV row — **confirmed real via WebSearch, not volume-backed.**
Secondary (5): non alcoholic sparkling rose (480, KD21) · rose fizzy wine (4,400, KD18) · non alcoholic rose (1,000, KD17) · sparkling rose non alcoholic (210, KD20) · dealcoholized wine (2,400, KD23 — background)
FAQ: defer to Phase 2 hub FAQ.

**17. prod-na-champ-15 — Prima Pavé Non-Alcoholic Rosé Brut**
Primary: **prima pave rose brut** (140, KD1) — CSV-backed, exact SKU match.
Secondary (5): prima pave (390, KD6) · non alcoholic sparkling rose (480, KD21) · rose fizzy wine (4,400, KD18) · sparkling rose non alcoholic (210, KD20)
FAQ: none forced.

**18. prod-na-champ-21 — Wölffer Estate Spring in a Bottle Sparkling Rosé**
Primary: **spring in a bottle non alcoholic rose** (70, KD7) — CSV-backed, exact match.
Secondary (5): non alcoholic sparkling rose (480, KD21) · rose fizzy wine (4,400, KD18) · non alcoholic rose (1,000, KD17) · sparkling rose non alcoholic (210, KD20)
FAQ: none forced. Brand hook: sourced from Rheinhessen, Germany, produced under Wölffer Estate's direction.

---

### Sparkling Grape Juice (4 SKUs)

**19. prod-na-champ-10 — Kedem Sparkling White Grape Juice**
Primary: **kedem sparkling grape juice** (170, KD13) — CSV-backed; closest real head term for the brand (no "white"-specific qualifier row surfaced).
Secondary (5): sparkling white grape juice (590, KD13) · sparkling grape juice (5,400, KD22) · sparkling juice (5,400, KD15) · non alcoholic sparkling grape juice (140, KD16) · kedem sparkling concord grape juice (70, KD10 — a different, red/Concord SKU from the same brand; see Phase 8 gap note)
FAQ: none forced. Brand hook: Kedem, under the Herzog family's Royal Wine, produced the first kosher grape juice in the US in 1959.

**20. prod-na-champ-16 — St. Julian Sparkling White Grape Juice**
Primary: **st julian sparkling juice** (110, KD4) — CSV-backed, direct hit.
Secondary (4): sparkling white grape juice (590, KD13) · sparkling grape juice (5,400, KD22) · sparkling juice (5,400, KD15) · non alcoholic sparkling grape juice (140, KD16)
FAQ: none forced. Brand hook: St. Julian Winery, founded 1921 by Mariano Meconi in Paw Paw, Michigan, is Michigan's oldest and most-awarded winery, with 150+ products spanning wine, sparkling juice, spirits, and cider.

**21. prod-na-champ-18 — Welch's Sparkling Red Grape Juice Cocktail**
Primary: **welch's sparkling juice cocktail** (140, KD18) — CSV-backed, exact match to the product's own "Cocktail" naming.
Secondary (5): welch's red grape juice (260, KD11) · welch's sparkling red grape juice (140, KD11) · sparkling red grape juice (170, KD6) · sparkling red grape (170, KD8) · welch's non alcoholic sparkling juice cocktail (90, KD22)
FAQ: none forced. Brand hook: Welch's is a genuine farmer-owned cooperative — see Welch's brand hub.

**22. prod-na-champ-19 — Welch's Sparkling White Grape Juice**
Primary: **sparkling white grape juice** (590, KD13) — CSV-backed, strongest available head term (the tighter `welch's sparkling white grape juice` row exists too, at 210, KD20 — use as a close secondary).
Secondary (5): welch's sparkling white grape juice (210, KD20) · white grape juice sparkling (170, KD14) · welch's white grape sparkling juice (110, KD19) · sparkling white grape (90, KD8) · non alcoholic white grape juice (70, KD12)
FAQ: none forced.

---

## Phase 4 — Brand Hub Drafts

Eight brands clear the 2+ stocked SKU bar: **Château del ISH, FRE, French Bloom, Leitz, Noughty, Oddbird, Welch's, Wölffer Estate.**

### Château del ISH
**categoryLabel:** Non-Alcoholic Sparkling Wine
**Hook:** Founded in Copenhagen in 2018 by Morten Sørensen, ISH is a mindful-drinking company built around making it easy to say "yes" to going out — and "yes" to a productive day after. The Sparkling White is a demi-sec made from de-alcoholized Pinot Blanc and Silvaner grapes; the Sparkling Rosé is a de-alcoholized blend of Merlot and Pinot Noir. The brand has won 40+ international taste awards and has been called out as a New York Times favorite.
**Secondary keywords:** non alcoholic sparkling wine (3,600, KD20) · alcohol free champagne (1,300, KD17) · non-alcoholic champagne (590, KD18) · best non alcoholic champagne (720, KD17)
**FAQs:**
1. What is Château del ISH made from? — De-alcoholized Pinot Blanc and Silvaner for the White; de-alcoholized Merlot and Pinot Noir for the Rosé — real wine grapes, not a grape-juice base.
2. Is Château del ISH award-winning? — Yes; the brand has won 40+ international taste awards.

### FRE
**categoryLabel:** Non-Alcoholic Sparkling Wine / Rosé
**Hook:** Sutter Home has produced FRE since 1992 — making it one of the longest-running alcohol-removed wine lines in the US. The alcohol is stripped using centrifugal force combined with nitrogen gas and controlled temperature, leaving a trace typically under 0.5% ABV. FRE retail sales grew roughly 300% between 2019 and 2024 (about 30% a year), reflecting the category's broader growth.
**Secondary keywords:** fre wine (3,600, KD21) · fre non alcoholic wine (2,900, KD19) · fre non alcoholic champagne (480, KD10) · fre wine reviews (210, KD5)
**FAQs:**
1. Does FRE wine have any alcohol? (ties to `fre wine alcohol content`, 70, KD3 — CSV-backed) — Under 0.5% ABV, the same trace level as most alcohol-removed wines.
2. Who makes FRE wine? — Sutter Home Family Vineyards (Trinchero Family Wine & Spirits); FRE has grown into a standalone brand name in its own right.

### French Bloom
**categoryLabel:** Non-Alcoholic Sparkling Wine / Rosé
**Hook:** Founded by Maggie Frerejean-Taittinger and Constance Jablonski, French Bloom officially launched in October 2021 after more than two years of R&D, backed by Rodolphe Frerejean-Taittinger, CEO of Champagne Frerejean Frères. Positioned as a luxury alcohol-free alternative to Champagne, the brand's top-tier "La Cuvée" has been described by trade press as the world's most expensive alcohol-free wine — real proof the category can play at a premium price point, not just a supermarket one.
**Secondary keywords:** french bloom (1,900, KD23) · french bloom non alcoholic (590, KD25) · french bloom non alcoholic wine (320, KD23) · french bloom non alcoholic champagne (260, KD22)
**FAQs:**
1. Who founded French Bloom? — Maggie Frerejean-Taittinger and Constance Jablonski, launched October 2021.
2. Is French Bloom organic? — Yes, made from organically farmed French grapes.

### Leitz (Eins-Zwei-Zero)
**categoryLabel:** Non-Alcoholic Sparkling Wine / Rosé
**Hook:** Josef Leitz's Eins-Zwei-Zero range comes from his Rheingau, Germany estate, one of the region's most respected Riesling producers. Alcohol is removed through gentle vacuum distillation — not reverse osmosis or grape-juice blending — which the estate credits for preserving classic green-apple, pear, and Riesling-spice character. The range is Fair 'N Green sustainability-certified.
**Secondary keywords:** non alcoholic sparkling wine (3,600, KD20) · alcohol removed wine (1,900, KD21) · dealcoholized wine (2,400, KD23) · organic sparkling wine (480, KD6)
**FAQs:**
1. How is Leitz Eins-Zwei-Zero made alcohol-free? — The grapes are fully fermented into real Riesling first, then alcohol is removed via gentle vacuum distillation.
2. Where is Leitz from? — The Rheingau, one of Germany's most historically important Riesling regions.

### Noughty
**categoryLabel:** Non-Alcoholic Sparkling Wine / Rosé
**Hook:** Noughty is made by Thomson & Scott, founded in 2013 by Amanda Thomson — a former BBC arts journalist who trained at Le Cordon Bleu — with the explicit goal of creating the world's first premium non-alcoholic wine portfolio. Thomson & Scott is B Corp certified, and Noughty's wines are organic and vegan; the Sparkling Chardonnay was the brand's flagship launch wine.
**Secondary keywords:** noughty (1,300, KD46) · noughty non alcoholic champagne (720, KD16) · noughty non alcoholic wine (720, KD30) · noughty wine (480, KD23)
**FAQs:**
1. Who makes Noughty wine? — Thomson & Scott, founded by Amanda Thomson in 2013.
2. Is Noughty organic and vegan? — Yes to both.

### Oddbird
**categoryLabel:** Non-Alcoholic Sparkling Wine / Rosé
**Hook:** Oddbird was founded in Sweden by Moa Gürbüzer and has spent over a decade pushing the non-alcoholic wine category forward. Its Blanc de Blancs is 100% Chardonnay and Colombard sourced from Languedoc-Roussillon, France, matured a full 12 months before the alcohol is gently removed — a slower process the brand credits for a more complex, authentic flavor than a typical quick-dealcoholized wine.
**Secondary keywords:** non alcoholic sparkling wine (3,600, KD20) · dealcoholized wine (2,400, KD23) · sparkling chardonnay (390, KD14) · organic sparkling wine (480, KD6)
**FAQs:**
1. Where are Oddbird wines from? — The company is Swedish, but the wine itself is French — Languedoc-Roussillon fruit, fully matured before de-alcoholization.
2. What grapes make Oddbird Blanc de Blancs? — Chardonnay and Colombard.

### Welch's
**categoryLabel:** Sparkling Grape Juice
**Hook:** Welch's traces to 1869, when it was invented specifically as an unfermented, non-alcoholic grape juice for church communion services. It has been a genuine farmer-owned cooperative since 1956 (the National Grape Cooperative Association), today made up of roughly 650 grower-owners across New York, Pennsylvania, Washington, and Michigan producing about 320,000 tons of grapes a year. The two stocked SKUs use different grapes entirely: deep Concord grapes for the Red Grape Juice Cocktail, and Niagara-style white grapes for the White.
**Secondary keywords:** welch's sparkling juice (4,400, KD29) · welch's grape juice sparkling (2,900, KD22) · welch's sparkling grape juice (2,400, KD22) · welch's drink (390, KD7)
**FAQs:**
1. Is Welch's sparkling juice non-alcoholic? — Yes, always has been; it was invented specifically to be a non-fermenting grape juice.
2. Is Welch's farmer-owned? — Yes, owned by the National Grape Cooperative Association since 1956.

### Wölffer Estate
**categoryLabel:** Non-Alcoholic Sparkling Wine / Rosé
**Hook:** Wölffer Estate Vineyard has been a fixture of New York's East End (the Hamptons, Long Island) for more than 30 years, known for hospitality and innovation. The "Spring in a Bottle" non-alcoholic line is produced in Germany under the Wölffer name — Blanc de Blancs from Moselle Valley fruit, Rosé from Rheinhessen — extending the estate's reputation into the alcohol-free category rather than being made at the Long Island home estate itself.
**Secondary keywords:** non alcoholic sparkling wine (3,600, KD20) · non alcoholic sparkling rose (480, KD21) · rose fizzy wine (4,400, KD18) · spring in a bottle non alcoholic rose (70, KD7)
**FAQs:**
1. Where is Wölffer's Spring in a Bottle made? — In Germany (Moselle Valley for Blanc de Blancs, Rheinhessen for Rosé), under Wölffer Estate's direction.
2. What's the difference between the two Spring in a Bottle wines? — The Blanc de Blancs is a delicate, fruit-driven white; the Rosé shows strawberry and red-berry aromas with a fresh, dry finish.

---

## Phase 8 — Gap Analysis

### Part A — Real missing expressions within brands already stocked

| Brand (stocked SKU) | Missing expression | Signal |
|---|---|---|
| Surely (Brut stocked) | **Surely Sparkling Rosé** | `surely sparkling rosé` (90, KD12) + `surely sparkling rose` (70, KD12) ≈ 160 combined — real, current Surely SKU, not stocked |
| Giesen (Sparkling Brut stocked) | **Giesen 0% Rosé** | `giesen rose` (70, KD13) — WebSearch-confirmed real: Marlborough, NZ fruit, spinning-cone-technology alcohol removal, part of Giesen's current 0% range |
| Kedem (Sparkling White Grape Juice stocked) | **Kedem Sparkling Concord (red) Grape Juice** | `kedem sparkling concord grape juice` (70, KD10) — same brand, different grape/color, real and CSV-backed |
| French Bloom (Le Blanc + Le Rosé stocked) | **French Bloom La Cuvée** (prestige tier) | Not volume-backed in this pull, but real and well-covered — trade press (Forbes, Club Oenologique) has called it the most expensive alcohol-free wine made; a genuine premium-upsell opportunity |
| Noughty (Sparkling Chardonnay + Sparkling Rosé stocked) | Noughty **still** Chardonnay / still Rosé | Real, WebSearch-confirmed Thomson & Scott SKUs, but not "sparkling" — lower-confidence fit for this specific category; flag for a still-wine NA category if one exists |

### Part B — Real unstocked NA sparkling wine brands with genuine search demand

| Brand | Primary keyword | Support keywords | Notes |
|---|---|---|---|
| **Lyre's Classico** | lyre's non alcoholic classico sparkling wine 4 pack (2,400, KD15) | lyres classico (320, KD20) — **~2,720 combined, the single strongest Part B finding in this entire report** | Real, built non-alcoholic from the start (not dealcoholized); won a 2025 IWSC silver medal for NA white wine flavor |
| **Gruvi** | gruvi bubbly rose (210, KD3) | gruvi rose (70, KD2) — ~280 combined | Real, Colorado-based, sibling-founded; picked as a "best NA wine" by USA Today, Forbes, and Cosmopolitan |
| **Jøyus (Joyus) Wine** | joyous wine (170, KD15) | joyus wine (110, KD18) + jøyus non alcoholic wine (90, KD36) — ~370 combined | Real, Seattle's first NA winery, woman-owned; SF International Wine Competition award winner |
| **Stella Rosa Naturals** (NA line) | stella rosa black non-alcoholic (90, KD15) | stella rosa non alcoholic wine near me (70, KD6) — ~160 combined | Real, 0.3% ABV semi-sweet sparkling line. **Caution:** confirm the regular (alcoholic) Stella Rosa isn't already stocked elsewhere in the main wine catalog before adding this NA line, to avoid brand confusion |
| **Le Petit Béret** | — (no CSV row) | not volume-backed | Real, Occitanie, France; patented alcohol-free process; Blanc de Blancs + a Sparkling Rosé developed by Dominique Laporte, Best Sommelier of France; organic/vegan/halal-certified |
| **Proxies** | — (no CSV row) | not volume-backed | Real, Toronto, founded 2021; not dealcoholized — built from wine grapes, fruit, teas, and complex ferments; favored by sommeliers and chefs |
| **McGuigan Zero** | — (no CSV row; skews AU/UK market) | not volume-backed in a US pull | Real, Hunter Valley, Australia heritage winery (1880s roots); Zero Dry Sparkling uses spinning-cone de-alcoholization |

**Flagged, not verified — do not use without confirmation:** `ebbio sparkling rose` (50, KD4) and `nectarose non-alcoholic sparkling rose` (50, KD8) could not be confidently confirmed as real, current, distinct brands in this pass; both are low volume. `kin bloom non-alcoholic alternative rosé` (390, KD13) is a real product (Kin Euphorics) but a botanical/adaptogen beverage, not a wine — excluded from wine-brand gap consideration. **Ariel** (owned by J. Lohr, a real 1985-era reverse-osmosis NA wine pioneer) was also considered but its lineup (Cabernet Sauvignon, Chardonnay) is still wine, not sparkling — not a fit for this category.

---

## Phase 6 — Blog Topic Candidates

| Topic | Anchor keyword(s) | Notes |
|---|---|---|
| Is Non-Alcoholic Champagne a Real Thing? | is there a non alcoholic champagne (70) · is there non alcoholic champagne (70) · are there non alcoholic champagne (20) · does non alcoholic champagne exist (10) | Small individually (~170 combined) but a real, recurring skepticism cluster — a strong pillar-page angle exactly as the brief suggested |
| How Is the Alcohol Removed From Wine? (Vacuum Distillation vs. Spinning Cone vs. Twice-Fermented) | dealcoholized wine (2,400, KD23) · alcohol removed wine (1,900, KD21) | Ties directly to real, brand-confirmed production methods gathered in this report: Leitz = vacuum distillation, Giesen/McGuigan = spinning cone, BOLLE = twice-fermented, Proxies = built-from-scratch (no dealcoholization at all) — genuinely differentiates SKUs that otherwise look identical on a shelf |
| Best Non-Alcoholic Sparkling Wine for Toasts and Celebrations | best non alcoholic champagne (720, KD17) · best non alcoholic sparkling wine (320, KD16) · best non alcoholic bubbly (320, KD15) | Combined ~1,360; maps cleanly onto nearly every SKU in this batch |
| Non-Alcoholic Champagne and Pregnancy: What to Know | pregnancy PAA cluster (~100 combined, each 20 vol) | Real, low-volume-per-row but recurring; also ties to `is non alcoholic champagne halal` (20) and `can muslims drink non alcoholic champagne` (30) as a broader "who can safely drink this" FAQ pillar |
| Dry January and the Rise of Non-Alcoholic Sparkling Wine | best non alc wine (720, KD12) · best non alcoholic wines (480, KD14) | Seasonal buying-guide angle for the whole category, timed to January traffic |
| Sparkling Wine vs. Sparkling Grape Juice vs. Non-Alcoholic Champagne: What's the Difference | sparkling white wine is champagne (170, KD8) · what is non alcoholic champagne called (20) | Ties the three subcategory hubs together and resolves real category confusion |
| How to Pick a Non-Alcoholic Wine That Doesn't Taste "Fake" | best non alcoholic wine (4,400, KD16) · does non alcoholic champagne taste the same (20) · what does non alcoholic champagne taste like (20) | Addresses the single biggest consumer objection to the category with a real, sizeable anchor term |
| Kosher and Family-Friendly Sparkling Grape Juice for Every Celebration | sparkling grape juice (5,400, KD22) | Ties together the real brand stories found in this report: Kedem (first US kosher grape juice, 1959), Welch's (invented for communion, farmer-owned since 1956), St. Julian (Michigan's oldest winery, founded 1921) |

---

## What to Check

1. **Six SKUs have zero CSV-backed volume in any of the 5 exports** — Château del ISH (both SKUs), Leitz Rosé, Wölffer Blanc de Blancs, Oddbird (both SKUs), BOLLE, Giesen Brut all rely on WebSearch-confirmed facts plus category-level pooled keywords. A round of brand-specific SEMrush pulls (the same treatment given to whiskey and wine brands elsewhere on the site) would materially sharpen these product pages.
2. **Giesen 0% Rosé and Surely Sparkling Rosé** are the two strongest "same brand, missing SKU" findings (Part A) — worth a stocking conversation independent of SEO.
3. **Lyre's Classico** is the single strongest Part B (unstocked-brand) finding by a wide margin (~2,720 combined volume) — worth a stocking conversation.
4. **Stella Rosa Naturals** — verify the regular (alcoholic) Stella Rosa isn't already stocked elsewhere in the main wine catalog before treating the NA "Naturals" line as a clean, non-conflicting gap.
5. **Ebbio and NectaRose** — flagged uncertain in Part B; don't use either without independent verification that they're real, current, distinct products.
6. **"Sparkling grape juice" head terms carry mixed kid/adult intent** that can't be cleanly split via this SEMrush pull (see Phase 1) — keep hub copy broadly celebratory rather than skewing hard to either a bar-cart or a kids'-party framing.
7. **Kedem Concord (red) Grape Juice** and **French Bloom La Cuvée** are both real, plausible catalog additions flagged in Phase 8 Part A — worth a stocking conversation if a dedicated brand export is pulled later to confirm volume.
