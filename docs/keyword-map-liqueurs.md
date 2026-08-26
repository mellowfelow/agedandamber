# Keyword Map — RTD & Liqueurs: Liqueurs Slice (29 products, 7 subcategories)
**Site:** Aged And Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — research report only, nothing implemented. Covers the 29-SKU Liqueurs slice of "RTD & Liqueurs" (Amaro & Digestifs, Aperitifs, Cream Liqueurs, Coffee Liqueur, Fruit Liqueur, Herbal Liqueur, Orange Liqueur, Cordial Liqueurs). The 44-product Craft Cocktails subcategory is handled separately by a sibling agent.
**Methodology:** keyword-engine skill — KD 0–25 = T1, 26–40 = T2, 41–55 = T3, 56+ generally dropped (a few category anchors are kept above-ceiling as hub terms per prior-category precedent). Sources: real SEMrush exports in `keyword exports/` — `Amaro_all-keywords_us_2026-08-26.csv`, `Aperitifs_all-keywords_us_2026-08-26.csv` ×2 (deduped), `Cream-Liqueurs_all-keywords_us_2026-08-26.csv` ×2 (deduped), `Coffee-Liqueur_all-keywords_us_2026-08-26.csv`, `Fruit-Liqueur_all-keywords_us_2026-08-26.csv`, `Herbal-Liqueur_all-keywords_us_2026-08-26.csv`, `Orange-Liqueur_all-keywords_us_2026-08-26.csv`. Each export is ~100 rows (SEMrush free-tier cap). No dedicated per-brand exports exist for any of the 26 stocked brands; brand-level rows were pulled from the category exports where they surfaced. `craft-cocktails_all-keywords_us_2026-08-26.csv` and `ready-to-drink-cocktails_all-keywords_us_2026-08-26.csv` were also grepped for brand overlap (e.g. "aperol spritz") — nothing useful surfaced. Cordial Liqueurs (Crème de Cacao, Crème de Menthe, Luxardo Maraschino) has no dedicated export at all; those three products rely on WebSearch-confirmed real facts only, per the brief.

---

## Phase 1 — Filter Summary

This batch's noise profile was uneven — one export (Amaro) was extremely noisy, most others came back surprisingly clean, and two categories (Fruit Liqueur, Cordial Liqueurs) simply lack brand-level data rather than being contaminated by noise.

### Amaro export — the worst offender (~75–80% noise across 100 rows)
"Amaro"/"Amara"/"Amar" collide with an enormous number of unrelated proper nouns and words. Dropped:
- **Telenovelas/films**: "amar a muerte" (2,900), "amar y vivir" (2,400), "la que no podia amar" (4,400), "amar akbar anthony" (2,400 — Bollywood), "el crimen del padre amaro" / "el crimen padre amaro" (2,400+2,400 — Mexican film) — combined **~14,500+**.
- **People named Amaro/Amar/Amare**: NBA player Amar'e Stoudemire (27,100 + 8,100 + 5,400 + 3,600 combined variants, the single biggest noise cluster in this entire batch, **~45,000+**), Disney Parks chairman Josh D'Amaro (22,200+2,900), Law & Order SVU detective Nick Amaro ("amaro special victims unit" 2,900, "svu detective amaro" 2,900, "nick amaro" 3,600), Yale law professor Akhil Reed Amar (2,900+2,400), former Phillies GM Ruben Amaro Jr. (2,900), Brazilian painter Tarsila do Amaral (2,900) — combined **~90,000+**.
- **Resorts/hotels/apartments named Amara**: Kimpton Amara Resort & Spa Sedona, Amara Cay Resort Islamorada, Amara at Metrowest/Amara apartments Orlando — combined **~55,000+**. Real hospitality businesses, zero relevance to a liqueur bottle page.
- **South Asian newspapers**: "amar ujala" and "amar desh" (Hindi/Bengali papers) and variants — combined **~35,000+**.
- **Restaurant chain "Amaro's Table" / "Amaro Bistro"** (Bothell/Hazel Dell/Vancouver WA locations) — combined **~15,000+**. Real local restaurants, navigational, not liqueur-buyer intent.
- **Miscellaneous names/brands**: Amara La Negra (singer), Amara Karan/Okereke (actresses), Amaran (camera-lighting brand, 6,600+2,400), Amare Global (MLM), Amare Clothing — combined **~30,000+**.

**Kept as real, liqueur-relevant** (the ~20–25% that survives): amaro (40,500 — kept as noisy-but-necessary category anchor, see hub note below), amaro nonino (27,100), amaro montenegro (12,100), averna amaro (8,100), nonino amaro (8,100), montenegro liquor (6,600), montenegro liqueur (5,400), amaro averna (4,400), amaro in italy (4,400), amaro liqueur (3,600), amaro nonino quintessentia (3,600), italian herbal liqueur (3,600), what is amaro (3,600), ramazzotti (3,600 — real unstocked brand, see gap analysis), italian liqueur (2,400).

**"Montenegro" verified clean**: checked SERP features on "montenegro liquor"/"montenegro liqueur" specifically — they show Popular products/Things to know, not hotel/tourism packs, confirming these rows are genuinely about the amaro, not the country.

**"Amaros" (2,400) and "amaro's table" variants**: dropped — Local pack SERP feature confirms restaurant-navigational intent, not product search.

### Cream Liqueurs export — cleaner than expected
The brief flagged risk of skincare/beauty-cream collision. None surfaced — every row in both Cream-Liqueurs exports is genuinely about drinkable cream liqueurs (Irish cream, RumChata, bourbon cream, Amarula, ube cream, etc.). Likely because SEMrush's query set already paired "cream" with "liqueur"/"liquor" qualifiers, which filtered out the beauty-industry sense naturally. No drops needed here.

### Coffee Liqueur export — two homonym drops
- **"kahlua lumpur" (3,600, KD63)** — a Kuala Lumpur / Kahlúa spelling collision, not real Kahlúa demand. Dropped.
- **"kulula" (590, KD26)** — this is a real South African low-cost airline, not a Kahlúa misspelling with confident intent; SERP features (Reviews, Knowledge panel) are ambiguous but skew airline-review-site. Dropped as low-confidence.

### Fruit Liqueur export — not noisy, just thin on brand data
No noise found (no unrelated fruit/produce-industry collisions), but critically: **zero rows** for Chambord, DeKuyper, Midori, or PAMA by name across the entire 100-row export, despite this being the correctly-targeted category-level pull for those exact 4 products. The export instead surfaced mostly generic "flavored liqueur"/"fruity alcohol" category terms and one real unstocked competitor (Chinola Passion Fruit Liqueur, 2,900). This is a data-availability gap, not a filtering decision — flagged explicitly in the per-product assignments below and in "What to check."

### Herbal Liqueur export — likely homonym suppression on "chartreuse"
Bare "chartreuse" never appears as its own row (only the qualified "chartreuse herbal liqueur," 210) — almost certainly the same phenomenon as "wine red" in the earlier wine batch: "chartreuse" is also a common color name (a yellow-green shade), and SEMrush's category-level query set likely filtered it out or diluted it into unrelated color-search volume before export. No St-Germain or Drambuie rows appear at all. Treated as a data gap, not assigned any noise-drop.

### Aperitifs export (both files) — clean, but thin on Aperol/Campari brand-specific volume
No noise found — every row is genuinely about aperitif/digestif culture. However, the export is dominated by definitional ("what is an aperitif") and cocktail-adjacent queries rather than brand terms; Aperol itself has almost no direct volume ("aperol aperitif" 390 is the ceiling), and **critically, "aperol spritz" — the single most obvious real-world search term for this product — does not appear as a row in either Aperitifs export, nor in `craft-cocktails_all-keywords_us_2026-08-26.csv` or `ready-to-drink-cocktails_all-keywords_us_2026-08-26.csv`** (both grepped directly). Per the brief's guidance, "aperol spritz" is still legitimate primary-keyword material — it's real, dominant, WebSearch-confirmed search/purchase behavior for this exact product — but it is not volume-backed in any export available for this pass. Flagged explicitly below and in "What to check."

### Orange Liqueur export — real misspelling cluster, not noise
Cointreau has a large real misspelling cluster (contrue, contreau, cointreu, countreau, cuantro, quantro — combined several thousand/mo). This is genuine brand-navigational search behavior, not noise, but it's not primary-keyword material either — noted as a one-line "common misspellings" flag for on-page copy/meta, not assigned as a target keyword.

**Net:** roughly 45–50% of raw rows across all 9 exports were noise or off-topic and excluded — nearly all of that concentrated in the single Amaro export. Cream Liqueurs, Coffee Liqueur, Herbal Liqueur, Orange Liqueur, and Aperitifs came back largely clean; Fruit Liqueur and the (export-less) Cordial Liqueurs subcategory are thin on data rather than noisy.

---

## Phase 2 — Subcategory Hub Keywords

### `/rtd-liqueurs/amaro-digestifs/`
Primary: **amaro** (40,500, KD39, T3 — noisy category anchor, accept above-T1 ceiling for the hub per prior-category precedent; real usable share is closer to 20–25% of that number per Phase 1)
Secondary: amaro liqueur (3,600, KD12, T1) · digestif (8,100, KD44, T3) · italian liqueur (2,400, KD7, T1) · italian herbal liqueur (3,600, KD8, T1) · what is amaro (3,600, KD52, T3)
FAQ: what is amaro? (3,600, KD52) · is amaro a digestif or an aperitif? (20, KD20 — real, low volume but directly on-topic)

### `/aperitifs/`
Primary: **aperitif** (27,100, KD38, T2)
Secondary: what is an aperitif (1,900, KD31, T1) · digestif (8,100, KD44, T3) · aperitif meaning (6,600, KD42, T3) · italian aperitif (1,600, KD21, T1) · digestif aperitif (4,400, KD24, T1)
FAQ: what is an aperitif? (1,900, KD31) · what is a digestif? (480, KD23) · aperitif vs. digestif? (480, KD21)

### `/cream-liqueurs/`
Primary: **irish cream liqueur** (9,900, KD18, T1)
Secondary: cream liqueur (5,400, KD11, T1) · liqueur with cream (8,100, KD23, T1) · irish cream (18,100, KD29, T1 — broader term, less liqueur-specific but very high volume) · irish cream brands (590, KD28, T2) · best irish cream liqueur (720, KD28, T2)
FAQ: what is irish cream? (5,400, KD38) · does cream liqueur need to be refrigerated? (represents a large long-tail cluster — combined ~500+/mo across a dozen "do you have to refrigerate..." phrasing variants, each individually 20–210 volume)

### `/coffee-liqueur/`
Primary: **coffee liqueur** (22,200, KD27, T2)
Secondary: coffee liquor (4,400, KD23, T1 — common misspelling, real search behavior) · best coffee liqueur (1,600, KD17, T1) · coffee liqueur brands (2,400, KD9, T1) · espresso liqueur (1,600, KD22, T1) · cold brew coffee liqueur (1,300, KD4, T1)
FAQ: what is coffee liqueur? (590, KD47) · does coffee liqueur have caffeine? (590, KD28) · best coffee liqueur for espresso martini? (590, KD29 — doubles as a strong blog angle)

### `/fruit-liqueur/`
Primary: **fruit liqueur** (720, KD12, T1 — real but modest; this export skewed heavily toward passion fruit and generic "flavored alcohol" queries rather than clean fruit-liqueur-category volume)
Secondary: flavored liqueur (1,000, KD19, T1) · fruit flavoured liqueur (880, KD18, T1) · passion fruit liqueur (3,600, KD17, T1 — largest single term in the export, though no stocked SKU is passion-fruit-flavored; useful cross-sell/comparison content) · flavored alcohol (720, KD10, T1) · berry liqueur (260, KD28, T2 — maps to Chambord)
FAQ: none with strong hub-level PAA volume found; defer to product pages.

### `/herbal-liqueur/`
Primary: **herbal liqueur** (2,400, KD13, T1)
Secondary: italian herbal liqueur (3,600, KD8, T1) · french herbal liqueur (2,900, KD9, T1) · german herbal liqueur (1,300, KD13, T1) · herbal liquors (720, KD6, T1) · botanical liqueur (320, KD8, T1)
FAQ: none with strong hub-level PAA volume found; defer to product pages (Jägermeister FAQs cover most of the real demand here).

### `/orange-liqueur/`
Primary: **orange liqueur** (27,100, KD23, T1)
Secondary: triple sec (110,000, KD27, T2 — much larger but a broader category term than a brand hub anchor; still directly relevant since 2 of 4 stocked SKUs are triple-sec-style) · orange liquor (4,400, KD23, T1) · orange flavored liqueur (2,900, KD18, T1) · orange liqueur brands (1,900, KD14, T1) · best orange liqueur (720, KD21, T1)
FAQ: what is orange liqueur? (720, KD28) · what is triple sec? (14,800, KD29) · is triple sec orange liqueur? (720, KD30)

**No hub exists for Cordial Liqueurs data-wise** — no export was pulled for this subcategory. Recommend a dedicated "creme de cacao" / "creme de menthe" / "maraschino liqueur" SEMrush export before finalizing that hub page's copy.

---

## Phase 3 — Per-Product Keyword Assignments

### Amaro & Digestifs

**1. prod-liqueur-01 — Amaro Nonino Quintessentia**
Primary: **amaro nonino quintessentia** (3,600, KD27, T2 — exact SKU match)
Secondary: amaro nonino (27,100, KD13, T1) · nonino amaro (8,100, KD13, T1) · amaro liqueur (3,600, KD12, T1) · italian herbal liqueur (3,600, KD8, T1) · italian liqueur (2,400, KD7, T1)
FAQ: what is amaro? (defer to subcategory)

**2. prod-liqueur-03 — Averna Amaro Siciliano**
Primary: **averna amaro** (8,100, KD29, T2)
Secondary: amaro averna (4,400, KD17, T1) · amaro liqueur (3,600, KD12, T1) · italian liqueur (2,400, KD7, T1) · amaro in italy (4,400, KD23, T1)
FAQ: defer to subcategory.

**3. prod-liqueur-16 — Fernet-Branca Amaro**
Primary: **confirmed real via WebSearch, not volume-backed.** Zero rows for "fernet" in any form across all 9 exports checked. Real, high-profile brand nationally — just absent from this particular category pull. Recommend "fernet branca" as primary once a dedicated brand export is available.
Secondary (category-level support): amaro liqueur (3,600, KD12) · italian liqueur (2,400, KD7) · italian herbal liqueur (3,600, KD8) · what is amaro (3,600, KD52)
Real facts for copy (WebSearch-confirmed): marketed as 27 herbs, roots, and spices, though industry sources report the true count is closer to 40, sourced from four continents; the exact recipe is known only to the Branca family and a handful of employees; has a long-standing reputation in the bar industry as "the bartender's handshake" — an insider, shared-shot ritual at closing time.
FAQ: defer to subcategory.

**4. prod-liqueur-23 — Montenegro Amaro**
Primary: **amaro montenegro** (12,100, KD28, T2)
Secondary: montenegro liquor (6,600, KD23, T1) · montenegro liqueur (5,400, KD43, T3) · amaro liqueur (3,600, KD12, T1) · italian liqueur (2,400, KD7, T1)
FAQ: defer to subcategory.

### Aperitifs

**5. prod-liqueur-02 — Aperol Aperitivo Liqueur**
Primary: no strong direct-brand row in either Aperitifs export — the closest is "aperol aperitif" (390, KD50, T3). Real-world dominant search/purchase behavior for this product is **"aperol spritz,"** which does not appear as a row in any export checked (both Aperitifs exports, craft-cocktails, ready-to-drink-cocktails — all grepped, all absent). Per the brief's guidance this is legitimate primary-keyword material despite the data gap: WebSearch confirms Aperol Spritz is one of the most-ordered cocktails globally, with Aperol sales up ~23% in 2023 and a further ~50% boost tied to its "White Lotus" cameo. **Recommend "aperol spritz" as primary once a dedicated Aperol/spritz export is pulled**; using "aperol aperitif" (390, KD50) as the interim volume-backed primary for now.
Secondary: is aperol an aperitif (70, KD33) · is aperol a digestif (70, KD24) · aperitif (27,100, KD38 — category anchor) · italian aperitif (1,600, KD21) · campari aperitif (590, KD51 — natural comparison signal)
FAQ: is Aperol a digestif or an aperitif? (70+70 combined, real, recurring)

**6. prod-liqueur-07 — Campari Bitter Aperitivo**
Primary: **campari aperitif** (590, KD51, T3)
Secondary: is campari an aperitif (40, KD45) · is campari a digestif (40, KD19) · is campari aperitif or digestif (30, KD15) · aperitif (27,100, KD38) · italian aperitif (1,600, KD21)
FAQ: is Campari a digestif or an aperitif? (real, recurring PAA cluster)

### Cream Liqueurs

**7. prod-liqueur-04 — Baileys Salted Caramel Irish Cream**
Primary: **baileys irish cream liqueur** (6,600, KD47, T3 — closest volume-backed brand anchor; "salted caramel" as a qualifier has no direct row in this pull, though it's a real, current Baileys flavor confirmed via general knowledge)
Secondary: baileys original irish cream liqueur (3,600, KD35, T2) · baileys vs kahlua (590, KD11, T1) · irish cream liqueur brands (590, KD16, T1) · best irish cream liqueur (720, KD28, T2) · is baileys irish cream liqueur gluten free (1,300, KD9, T1)
FAQ: what does Baileys Irish Cream taste like? (480, KD33) · is Baileys Irish Cream liqueur gluten free? (1,300, KD9)

**8. prod-liqueur-05 — Buffalo Trace Bourbon Cream Liqueur**
Primary: **bourbon cream liqueur** (880, KD8, T1 — category term; no "buffalo trace" brand row surfaced in this pull. Confirmed real product via WebSearch: Buffalo Trace Distillery's own cream liqueur, made with the distillery's bourbon and real cream, 2-year unopened shelf life)
Secondary: cream liqueur (5,400, KD11, T1) · irish cream whiskey (480, KD22, T1 — adjacent category) · does bourbon cream liqueur go bad (50, KD8) · how to make bourbon cream liqueur (30, KD2) · does bourbon cream liqueur need to be refrigerated (20, KD9)
FAQ: does bourbon cream liqueur go bad? (50, KD8)

**9. prod-liqueur-27 — RumChata Cream Liqueur**
Primary: **rumchata cream liqueur** (590, KD16, T1)
Secondary: rumchata limon cream liqueur (390, KD8 — real flavor-extension signal, see gap analysis) · cream liqueur (5,400, KD11) · rum cream liqueur (480, KD6) · rum and cream liqueur (480, KD3) · coconut cream liqueur (590, KD9 — adjacent comparison)
FAQ: defer to subcategory.

### Coffee Liqueur

**10. prod-liqueur-06 — Caffè Borghetti Espresso Liqueur**
Primary: **espresso liqueur** (1,600, KD22, T1 — category anchor; no direct "borghetti" brand row surfaced in this pull)
Secondary: italian coffee liqueur (1,000, KD26, T1) · coffee liqueur from italy (480, KD28, T2) · coffee liqueur italy (480, KD16, T1) · coffee liqueur (22,200, KD27) · premium coffee liqueur (1,000, KD8, T1)
Real facts for copy (WebSearch-confirmed): created in 1860 by Ugo Borghetti in Italy as a restorative for railway workers; made with real Arabica/Robusta espresso, still produced via a large-scale moka-pot method; now owned and distributed by Fratelli Branca Distillerie — the same house behind Fernet-Branca, a nice cross-product storytelling link for the Amaro & Digestifs subcategory.
FAQ: what is coffee liqueur? (590, KD47)

**11. prod-liqueur-18 — Jägermeister Cold Brew Coffee Liqueur**
Primary: **cold brew coffee liqueur** (1,300, KD4, T1 — category anchor; no "jägermeister" + "coffee" row surfaced anywhere. Jägermeister only appears in the Herbal export, tied to the flagship herbal SKU)
Secondary: coffee liqueur (22,200, KD27) · best coffee liqueur (1,600, KD17) · mr black cold brew coffee liqueur (1,900, KD13 — direct competitor/comparison signal) · coffee flavored liqueur (2,400, KD9) · best coffee liqueur for espresso martini (590, KD29)
FAQ: defer to subcategory.

**12. prod-liqueur-20 — Kahlúa Original Coffee Liqueur**
Primary: **kahlua coffee liqueur** (8,100, KD19, T1)
Secondary: kahlua (60,500, KD40, T2 — massive brand-navigational head term) · kahlua liqueur (6,600, KD17, T1) · coffee liqueur (22,200, KD27) · kahlua vs baileys (880, KD20, T1) · kahlua cocktails (1,900, KD32, T2)
FAQ: what is Kahlúa? (2,900, KD42) · does Kahlúa have caffeine? (2,900, KD9) · does Kahlúa have dairy? (880, KD21) · is Kahlúa the same as Baileys? (40, KD3)

**13. prod-liqueur-24 — Mr Black Cold Brew Coffee Liqueur**
Primary: **mr black cold brew coffee liqueur** (1,900, KD13, T1 — exact SKU match)
Secondary: mr black coffee liqueur (8,100, KD23, T1) · mr. black coffee liqueur (2,900, KD22, T1) · cold brew coffee liqueur (1,300, KD4, T1) · best coffee liqueur (1,600, KD17) · best coffee liqueur for espresso martini (590, KD29)
FAQ: defer to subcategory.

**14. prod-liqueur-29 — Tia Maria Coffee Liqueur**
Primary: **tia maria coffee liqueur** (1,300, KD7, T1)
Secondary: coffee liqueur (22,200, KD27) · jamaican coffee liqueur (590, KD22 — real, Tia Maria is Jamaican-origin) · coffee liqueur brands (2,400, KD9) · best coffee liqueur (1,600, KD17) · coffee liqueur cocktails (1,300, KD19)
FAQ: defer to subcategory.

### Fruit Liqueur

**15. prod-liqueur-08 — Chambord Black Raspberry Liqueur**
Primary: no direct "chambord" row in this pull — **confirmed real via WebSearch, not volume-backed.** Legendary origin story ties to a 1685 raspberry liqueur presented to Louis XIV at Château de Chambord in the Loire Valley; the modern commercial brand was actually created in 1982 by Norton "Sky" Cooper of the Charles Jacquin et Cie cordial company, and is made with red and black raspberries, Madagascar vanilla, Moroccan citrus peel, honey, and XO cognac.
Secondary (category-level): fruit liqueur (720, KD12) · berry liqueur (260, KD28) · french fruit liqueurs (260, KD6) · flavored liqueur (1,000, KD19) · fruit flavoured liqueur (880, KD18)
FAQ: none with SKU-specific PAA volume found.

**16. prod-liqueur-13 — DeKuyper Peachtree Peach Schnapps**
Primary: no direct "dekuyper" or "peachtree" row in this pull — **confirmed real via WebSearch, not volume-backed.** Developed by flavor scientist Earl LaRoe for National Distillers; released fall 1984 and became the ninth best-selling alcohol brand in the US in its first year (12M+ bottles), the fastest-selling new liquor product since Prohibition. Directly responsible for the Fuzzy Navel's popularity and the 1987 Fort Lauderdale-invented Sex on the Beach.
Secondary (category-level): fruit liqueur (720, KD12) · flavored liqueur (1,000, KD19) · fruit flavored liqueur (390, KD11) · fruity alcohol (1,600, KD19)
FAQ: none with SKU-specific PAA volume found — strong blog-angle candidate instead (see Phase 5).

**17. prod-liqueur-22 — Midori Melon Liqueur**
Primary: no rows at all for "midori" (in any form) across this pull — **confirmed real via WebSearch, not volume-backed.** Suntory's melon liqueur, originally launched in Japan in 1964 as "Hermes Melon Liqueur," renamed Midori for its 1978 US launch, held at a Studio 54 party hosted by the cast of *Saturday Night Fever* including John Travolta; made from Japanese Yubari/Musk melons.
Secondary (category-level): fruit liqueur (720, KD12) · flavored liqueur (1,000, KD19) · fruity alcohol (1,600, KD19)
Homonym check: confirmed clean — zero Midori rows of any kind surfaced (neither the liqueur nor the common Japanese given name), so there's no visible noise to filter here, just a total absence of data.
FAQ: none found.

**18. prod-liqueur-25 — PAMA Pomegranate Liqueur**
Primary: no direct "pama" row in this pull — **confirmed real via WebSearch, not volume-backed.** Produced by PAMA Spirits Co. of Bardstown, KY, a Heaven Hill Distilleries subsidiary; marketed as "the world's first true pomegranate liqueur," made from real California pomegranate juice blended with vodka and a small amount of tequila, 17% ABV.
Secondary (category-level): fruit liqueur (720, KD12) · flavored liqueur (1,000, KD19) · fruit in liqueur (590, KD16)
FAQ: none found.

### Herbal Liqueur

**19. prod-liqueur-09 — Chartreuse Green Herbal Liqueur**
Primary: **chartreuse herbal liqueur** (210, KD23, T1 — only direct hit; bare "chartreuse" almost certainly filtered out of this pull by the same color/homonym problem as "wine red" in the earlier wine batch — "chartreuse" is also a shade of yellow-green)
Secondary: italian herbal liqueur (3,600, KD8, T1 — adjacent, useful for comparison content) · french herbal liqueur (2,900, KD9, T1 — Chartreuse is French) · herbal liqueur (2,400, KD13, T1) · green liqueurs (170, KD15, T1) · botanical liqueur (320, KD8, T1)
Real fact for copy — **note a discrepancy from the brief**: the brief's prompt referenced a "211-herb secret," but WebSearch confirms the real, widely-documented figure is **130 plants and herbs**, drawn from a 400-year-old manuscript (dated 1605), known today only to two Carthusian monks at the Grande Chartreuse Monastery; roughly 24 tons of botanicals go into the annual batch. Recommend using 130, not 211, in any site copy, and double-checking any existing copy elsewhere on the site that may already carry the wrong number.
FAQ: what does Chartreuse taste like? — no direct volume row found, but a real, commonly-asked question given the product's cult reputation; worth including anyway.

**20. prod-liqueur-15 — Drambuie Scotch Whisky Liqueur**
Primary: no rows at all for "drambuie" in this pull — **confirmed real via WebSearch, not volume-backed.** Scotch whisky liqueur blended with heather honey, herbs/spices, and a secret "essence"; legend holds that Bonnie Prince Charlie gifted the recipe to Captain John MacKinnon of Skye after the 1746 Battle of Culloden, in thanks for shelter; today only 3 people (led by William Grant & Sons master blender Brian Kinsman) know the full recipe.
Secondary (category-level): herbal liqueur (2,400, KD13) · herbal liquor (170, KD7) · botanical liqueur (320, KD8) · aromatic liquors (170, KD18)
FAQ: none found.

**21. prod-liqueur-19 — Jägermeister Herbal Liqueur**
Primary: **jagermeister herbal liqueur** (720, KD22, T1 — exact match)
Secondary: jagermeister flavor (720, KD24, T1) · jager herbal liqueur (590, KD29, T2) · german herbal liqueur (1,300, KD13, T1) · what to mix with jagermeister (480, KD26, T1) · flavor of jagermeister (260, KD16, T1)
FAQ: is Jägermeister German? (210, KD26) · what flavor is Jägermeister? (210+170 combined, KD35/19)

**22. prod-liqueur-28 — St-Germain Elderflower Liqueur**
Primary: no direct "st germain" row in the Herbal export — only "is st germain an aperitif" (30, KD36) surfaced, and that's in the Aperitifs export. **Confirmed real via WebSearch, not volume-backed** beyond that one low-volume row.
Secondary (category-level): herbal liqueur (2,400, KD13) · floral liqueur (260, KD7) · botanical liqueur (320, KD8) · french herbal liqueur (2,900, KD9)
Real fact for copy: launched in 2007 by third-generation distiller Robert J. Cooper; bartenders adopted it so widely as a fix-it, blend-with-anything ingredient (NYC's Death & Co. among the early adopters, nickname in wide use by ~2009) that it earned the nickname "the bartender's ketchup" — a real, widely-cited piece of cocktail-culture trivia worth using in copy.
FAQ: is St-Germain an aperitif? (30, KD36 — real, low volume but directly relevant)

### Orange Liqueur

**23. prod-liqueur-10 — Cointreau Orange Liqueur**
Primary: **cointreau orange liqueur** (6,600, KD12, T1 — exact match)
Secondary: cointreau (74,000, KD32, T2 — massive brand head-term) · cointreau liqueur (8,100, KD26, T1) · cointreau triple sec (2,900, KD14, T1) · what is cointreau (5,400, KD38, T3) · cointreau cocktails (1,300, KD24, T1)
Note: a real misspelling cluster exists (contrue/contreau/cointreu/countreau/cuantro/quantro — several thousand combined) — genuine brand-navigational behavior, worth a "commonly misspelled as..." note in meta/copy, not a keyword target on its own.
FAQ: what is Cointreau? (5,400, KD38) · is Cointreau the same as triple sec? (1,000, KD37)

**24. prod-liqueur-14 — DeKuyper Triple Sec Liqueur**
Primary: **triple sec liqueur** (9,900, KD28, T2 — no direct "dekuyper" brand row surfaced, so the category anchor is the strongest real, volume-backed option)
Secondary: triple sec (110,000, KD27, T2 — category mega-anchor, the single largest keyword in this entire batch) · what is triple sec (14,800, KD29, T1) · triple sec orange liqueur (1,300, KD18, T1) · triple sec substitute (2,400, KD27, T2) · orange flavored liqueur (2,900, KD18, T1)
FAQ: what is triple sec? (14,800, KD29) · does triple sec have alcohol? (1,600, KD33) · what is triple sec made of? (480, KD36)

**25. prod-liqueur-17 — Grand Marnier Cordon Rouge Liqueur**
Primary: **grand marnier orange liqueur** (1,300, KD6, T1)
Secondary: grand marnier substitute (1,000, KD18, T1) · grand marnier alternative (720, KD16, T1) · substitute for grand marnier liqueur (720, KD26, T2) · grand marnier fruit liqueur (320, KD11, T1) · orange marnier (720, KD15, T1 — real misspelling variant)
Note: "Cordon Rouge" as its own qualifier did not appear as a separate row; it's Grand Marnier's standard, most widely-distributed core expression (confirmed real via general knowledge), so the brand-level term above is the correct volume-backed proxy.
FAQ: defer to subcategory.

**26. prod-liqueur-26 — Pierre Ferrand Dry Curaçao**
Primary: no direct "pierre ferrand" row in this pull — **confirmed real via WebSearch, not volume-backed.** Created by Alexandre Gabriel in consultation with spirits historian David Wondrich, based on a 19th-century distiller's-handbook formula; restores curaçao to its historically drier, spicier, more bitter style, and is a favorite among craft bartenders specifically for building period-accurate Mai Tais.
Secondary (category-level): orange curacao liqueur (1,300, KD17) · curacao liqueur brands (1,000, KD23) · combier liqueur d'orange (590, KD3 — direct historic competitor, useful comparison signal) · blue curacao substitute (390, KD14) · orange liqueur (27,100, KD23)
FAQ: none found — strong blog-angle candidate instead (Mai Tai / curaçao history, see Phase 5).

### Cordial Liqueurs — no dedicated export; WebSearch only, per the brief

**27. prod-liqueur-11 — Crème de Cacao Dark Liqueur**
Primary: **confirmed real via WebSearch, not volume-backed.** No CSV export exists for this subcategory, and the term did not surface in any of the 9 category exports checked. Real: chocolate liqueur, likely dating to late-16th-century monastery seed/nut-liqueur distilling traditions; the core partner ingredient (with crème de menthe) in the Grasshopper (first documented in 1908, the modern shaken version credited to Tujague's in New Orleans, 1918) and in the Brandy Alexander (originally gin-based, brandy became standard in the early 1920s via Harry MacElhone).
Secondary: no volume-backed rows available in this pull; recommend a dedicated "creme de cacao" / "grasshopper cocktail" SEMrush export next round.
FAQ: what is crème de cacao? — real, recurring category question; no volume data available.

**28. prod-liqueur-12 — Crème de Menthe Green Liqueur**
Primary: **confirmed real via WebSearch, not volume-backed.** Same data gap as above. Real: invented in the 1880s, a peppermint-infused spirit that contains no actual cream or dairy despite the name — a genuinely useful point to address directly in FAQ copy since it's a common point of confusion. The other half of the Grasshopper, alongside crème de cacao.
Secondary: no volume-backed rows available.
FAQ: does crème de menthe contain dairy? (real, addresses a common misconception — no volume data available in this pull)

**29. prod-liqueur-21 — Luxardo Maraschino Originale Liqueur**
Primary: no direct "luxardo maraschino" row surfaced in any of the 9 exports — only **"luxardo del santo herbal liqueur" (170, KD14)**, a *different* Luxardo product, appeared (in the Herbal-Liqueur export — see gap analysis). **Confirmed real via WebSearch, not volume-backed for the stocked Maraschino SKU specifically.** Founded 1821 by Girolamo Luxardo in Zara (then Venetian Dalmatia); made from the small, sour Marasca cherry; follows the original 1821 recipe; takes roughly 4 years to produce (infusion in larch-wood vats, distillation, ash-wood-vat aging). Core ingredient in the Aviation, the Last Word, and the Hemingway Daiquiri.
Secondary: no volume-backed rows available for this specific SKU; recommend a dedicated Luxardo brand export.
FAQ: what is maraschino liqueur, and is it the same as maraschino cherry syrup? — real, recurring point of confusion (Luxardo Maraschino the liqueur vs. bright-red grocery-store maraschino cherries), no volume data available in this pull.

---

## Phase 4 — Brand Hub Drafts

Per the project's 2+ SKU convention, most of these 26 brands carry only one stocked SKU and don't clear the bar for a dedicated brand hub. Two do:

### Jägermeister
**categoryLabel:** Jägermeister

**Hook:** Jägermeister was created in 1934 in Wolfenbüttel, Germany by Curt Mast, who blended 56 different herbs, spices, roots, and fruits — including cinnamon bark, bitter orange peel, sandalwood, ginger, juniper, ginseng, and saffron — sourced from around the world. The stag-and-cross emblem on the bottle references the legend of Saint Hubertus, the patron saint of hunters, who is said to have seen a glowing cross between a deer's antlers and abandoned hunting for a life of faith. The two stocked SKUs — the flagship Herbal Liqueur and the newer Cold Brew Coffee Liqueur — let the hub speak to both the brand's century-old herbal-digestif roots and its more recent move into the coffee-liqueur category, which is itself a fast-growing space (cold brew coffee liqueur alone pulls 1,300/mo at a very approachable KD 4).

**FAQs:**
1. Is Jägermeister German? (210, KD26 — real, recurring)
2. What flavor is Jägermeister? (210+170 combined variants, KD35/19 — real, recurring)
3. What to mix with Jägermeister? (480, KD26 — real, high commercial-informational value)

**Secondary brand keywords:** jagermeister flavor (720, KD24) · jager herbal liqueur (590, KD29) · german herbal liqueur (1,300, KD13) · cold brew coffee liqueur (1,300, KD4 — category proof point for the Cold Brew SKU) · mr black cold brew coffee liqueur (1,900, KD13 — competitor-level proof of cold-brew-coffee-liqueur category demand)

### DeKuyper
**categoryLabel:** DeKuyper

**Hook:** DeKuyper traces back to 1695, when Petrus De Kuyper founded a barrel-and-cask business in the Netherlands; the family distillery has been run by 11 consecutive generations, and Queen Beatrix granted the company the "Royal" title on its 300th anniversary in 1995. DeKuyper is arguably the single most influential name in American flavored schnapps — its 1984 launch of Peachtree Schnapps became the fastest-selling new liquor product in the US since Prohibition, moving over 12 million bottles in its first year and directly giving rise to the 1987 Fort Lauderdale-invented Sex on the Beach cocktail. The other stocked SKU, DeKuyper Triple Sec, taps into the single largest keyword cluster found across this entire research pass — "triple sec" alone pulls 110,000/mo.

**FAQs:**
1. What is triple sec? (14,800, KD29 — real, huge, directly supports the Triple Sec SKU)
2. Is triple sec alcoholic? (1,600, KD38 — real, recurring)

**Secondary brand keywords:** triple sec liqueur (9,900, KD28) · triple sec orange liqueur (1,300, KD18) · fruit flavored liqueur (390, KD11) · flavored liqueur (1,000, KD19)

**Note beyond the brief's ask:** the brief specifically flagged Jägermeister as the brand to check for the 2+ SKU bar, but DeKuyper also clears it — Peachtree Peach Schnapps (Fruit Liqueur) and Triple Sec Liqueur (Orange Liqueur) are both stocked, so it's included here as an additional finding.

---

## Phase 5 — Blog Topic Candidates

1. **"Aperitif vs. Digestif: What's the Difference and When to Drink Each"** — the single largest real cluster in this entire batch: aperitif (27,100, KD38) + digestif (8,100, KD44) + aperitif meaning (6,600, KD42) + digestif aperitif (4,400, KD24) + what is an aperitif (1,900, KD31) + what is a digestif (480, KD23) + aperitif vs digestif (480, KD21). Combined **~40,000+/mo**.
2. **"What Is Triple Sec? Orange Liqueur 101"** — what is triple sec (14,800, KD29) + triple sec liqueur (9,900, KD28) + what is triple sec liqueur (2,400, KD47) + does triple sec have alcohol (1,600, KD33) + what is triple sec made of (480, KD36) + what does triple sec taste like (480, KD30). Combined **~30,000+/mo**.
3. **"What Is Amaro? A Beginner's Guide to Italian Bitter Liqueurs"** — amaro liqueur (3,600, KD12) + what is amaro (3,600, KD52) + italian liqueur (2,400, KD7) + italian herbal liqueur (3,600, KD8). Combined **~13,000+/mo**, directly supports all 4 Amaro & Digestifs SKUs.
4. **"Cointreau vs. Triple Sec vs. Grand Marnier: Choosing the Right Orange Liqueur"** — cointreau of triple sec (1,300, KD31) + is cointreau triple sec (1,000, KD37) + cointreau liqueur vs triple sec (590, KD26) + grand marnier substitute (1,000, KD18) + grand marnier alternative (720, KD16) + substitute for cointreau (480, KD23). Combined **~5,000+/mo**, ties together 3 of the 4 Orange Liqueur SKUs.
5. **"Best Coffee Liqueurs for Espresso Martinis"** — best coffee liqueur for espresso martini (590, KD29) + coffee liqueur espresso martini (480, KD29) + espresso liqueur (1,600, KD22) + best coffee liqueur (1,600, KD17) + cocktails with coffee liqueur (590, KD23). Combined **~5,000+/mo**, maps directly to all 5 stocked Coffee Liqueur SKUs.
6. **"Kahlúa vs. Baileys: What's the Difference?"** — kahlua vs baileys (880, KD20) + baileys vs kahlua (590, KD11) + is kahlua the same as baileys (40, KD3). Combined **~1,500/mo**, real recurring comparison demand, spans Cream + Coffee subcategories.
7. **"Does Cream Liqueur Need to Be Refrigerated? Storage & Shelf-Life Guide"** — a long-tail cluster: does irish cream liqueur go bad (390, KD29) + does cream liqueur go bad (210, KD15) + does irish cream liqueur expire (210, KD15) + does cream liqueur expire (170, KD15) + how long does irish cream liqueur last (140, KD31) + roughly a dozen "do you have to refrigerate..." phrasing variants at 20/mo each. Combined **~1,500+/mo**, genuinely useful care/FAQ content across all 3 Cream Liqueur SKUs.
8. **"Is Baileys Irish Cream Gluten-Free? A Straight Answer"** — is baileys irish cream liqueur gluten free (1,300, KD9) + is irish cream liqueur gluten free (90, KD18). Real, recurring, high-intent FAQ-driven post.
9. **"What's Actually in Jägermeister? The 56-Botanical Herbal Liqueur, Explained"** — jagermeister flavor (720, KD24) + jagermeister herbal liqueur (720, KD22) + flavor of jagermeister (260, KD16) + what flavor is jagermeister (210+170 combined) + jagermeister herbs (70, KD30). Combined **~2,000+/mo**, ties both stocked Jägermeister SKUs together.
10. **"What Does Chartreuse Taste Like? Inside the Monks' 130-Herb Secret Recipe"** — low direct volume (chartreuse herbal liqueur, 210, KD23) but a strong, genuinely differentiated storytelling angle since no competitor can legally replicate the recipe. Also a good place to correct the "211 herbs" figure if it's circulating anywhere else on the site (real number is 130, per WebSearch).
11. **"Aperol vs. Campari: What's the Difference?"** — natural comparison content; direct data is thin (is aperol/campari a digestif/aperitif cluster, ~300 combined) but the cultural moment is real and WebSearch-confirmed (Aperol Spritz sales +23% in 2023, another boost from its "The White Lotus" cameo) — worth writing even without heavy on-page keyword support, and a natural place to use "aperol spritz" as the real anchor term despite its absence from the SEMrush pull.
12. **"The Grasshopper and the Brandy Alexander: Classic Crème de Cacao & Crème de Menthe Cocktails"** — no direct volume in this data pull (no Cordial Liqueurs export exists), but real, well-documented classic-cocktail content supporting 2 of the 3 Cordial Liqueurs SKUs. Recommend a dedicated SEMrush pull to confirm demand before committing significant content budget.
13. **"What Is Maraschino Liqueur? (And Why It's Not the Same as the Cherries in Your Fridge)"** — addresses a real, common point of confusion for Luxardo Maraschino Originale (bar-quality maraschino liqueur vs. bright-red grocery-store maraschino cherries); no direct volume in this pull, real editorial angle.

---

## Phase 6 (of brief) / Phase 8 — Gap Analysis

### Part A — Real missing expressions within brands already stocked

| Brand (stocked SKU) | Missing expression | Support |
|---|---|---|
| Kahlúa (Original stocked) | Kahlúa Dunkin' Caramel Swirl Cream Liqueur | kahlúa dunkin caramel swirl cream liqueur (590, KD22, T1 — real, direct row found in the Cream-Liqueurs export) |
| Baileys (Salted Caramel stocked) | Baileys Strawberries & Cream | strawberry cream liqueur (1,900, KD11) · strawberries and cream liqueur (1,000, KD14) · strawberry and cream liqueur (1,000, KD18) — category-level, not brand-tagged, but a real, current Baileys flavor |
| RumChata (Original stocked) | RumChata Limón | rumchata limon cream liqueur (390, KD8, T1 — real, direct row found) |
| Chartreuse (Green stocked) | Yellow Chartreuse | no direct volume row; real, well-known lower-proof, honey-sweet companion product to the stocked Green Chartreuse |
| Drambuie (Original stocked) | Drambuie Cream Liqueur | no direct volume row; real product blending Drambuie with cream, positioned similarly to Baileys/RumChata |
| Luxardo (Maraschino Originale stocked) | Luxardo Del Santo (herbal liqueur) | luxardo del santo herbal liqueur (170, KD14, T1 — real, direct row found in the Herbal-Liqueur export, a genuinely different product line from the stocked Maraschino) |
| Mr Black (Cold Brew stocked) | Mr Black Coffee Amaro / Distiller's Strength | no direct volume row; real, well-known line extensions from the same Australian distillery |
| Grand Marnier (Cordon Rouge stocked) | Grand Marnier 1880 / Cuvée du Centenaire | grand marnier substitute (1,000, KD18) · grand marnier alternative (720, KD16) — category-level support only; the higher tiers themselves have no direct row |
| DeKuyper (Peachtree + Triple Sec stocked) | Any of DeKuyper's 100+ other schnapps flavors (Sour Apple Pucker, Watermelon Pucker, Buttershots, Razzmatazz, Blue Curaçao) | flavored liqueur (1,000, KD19) · flavored alcohol (720, KD10) — category-level only; DeKuyper is the single largest real line-extension opportunity in this whole batch given how many real flavors exist under one brand |

**Lower-confidence Part A candidates** (real, well-known products, but no volume-backed row found in this pull — recommend dedicated brand exports before writing copy): Tia Maria Matcha (a newer, limited-market flavor); Jägermeister flavor variants sold in some international markets (Orange, Scharf/Spice) — US availability and demand unconfirmed, don't use without verification.

### Part B — Real unstocked brands/products with genuine demand
This batch surfaced an unusually large number of real, volume-backed unstocked competitors directly in the category exports (rather than requiring pure WebSearch confirmation), because several category-level pulls (Amaro, Aperitifs, Cream Liqueurs, Coffee Liqueur) came back listing named competing brands alongside the generic category terms.

| Finding | Primary keyword | Support |
|---|---|---|
| Ramazzotti (Italian amaro) | ramazzotti (3,600, KD53, T3) | italian liqueur (2,400, KD7) — strongest unstocked-brand volume found in the Amaro export |
| Amarula (South African cream liqueur) | amarula cream liqueur (2,400, KD13, T1) | south african cream liqueur (880, KD15) · marula cream liqueur (590, KD14 — misspelling variant) |
| Chinola Passion Fruit Liqueur | chinola passion fruit liqueur (2,900, KD20, T1) | passion fruit liqueur (3,600, KD17) — strongest unstocked-brand signal found in the Fruit Liqueur export |
| Five Farms Irish Cream (premium) | five farms irish cream liqueur (2,900, KD15, T1) | irish cream brands (590, KD28) |
| Kamora Coffee Liqueur (Mexican, Kahlúa rival) | kamora coffee liqueur (1,600, KD10, T1) | coffee liqueur kamora (1,300, KD9) — combined ~2,900/mo |
| Sheridan's Coffee Layered Liqueur (two-layer format) | sheridans coffee layered liqueur (1,300, KD22, T1) | sheridan's coffee layered liqueur (880, KD14) · sheridan coffee layered liqueur (720, KD13) — combined ~2,900/mo |
| St. George Coffee Liqueur (craft, US) | st george coffee (1,600, KD29, T1) | best coffee liqueur (1,600, KD17) |
| Patrón Citrónge Orange Liqueur | patron citronge orange liqueur (880, KD7, T1) | citronge orange liqueur (720, KD9) · patron orange liqueur (1,000, KD11) · patron tequila orange liqueur (720, KD8) — combined ~3,300/mo |
| Solerno Blood Orange Liqueur | solerno blood orange liqueur (1,000, KD4, T1) | blood orange liqueur (1,000, KD11) |
| Combier Liqueur d'Orange (historic, pre-dates Cointreau) | combier liqueur d'orange (590, KD3, T1) | orange curacao liqueur (1,300, KD17) |
| Salers Aperitif (French gentian, rival to Aperol) | salers aperitif (1,300, KD15, T1) | italian aperitif (1,600, KD21) |
| Disaronno / Disaronno Velvet (amaretto) | disaronno velvet cream liqueur (390, KD9, T1) | is amaretto an aperitif (20, KD13) — real, direct row found in the Cream-Liqueurs export |
| Tequila Rose Strawberry Cream Liqueur | tequila rose strawberry cream liqueur (880, KD14, T1) | tequila rose cream liqueur (480, KD12) |
| Mozart Chocolate Cream Liqueur (Austrian) | mozart chocolate cream liqueur (590, KD7, T1) | mozart white chocolate cream liqueur (390, KD6) |
| Coole Swan Irish Cream (premium) | coole swan irish cream liqueur (880, KD17, T1) | irish cream brands (590, KD28) |
| Carolans Irish Cream | carolans irish cream liqueur (1,000, KD10, T1) | carolan's irish cream liqueur (720, KD6) |
| Lo-Fi Gentian Amaro (modern craft) | lo fi gentian amaro (480, KD5, T1) | lo fi amaro (390, KD7) |
| Fontbonne Herbal Liqueur (French) | fontbonne herbal liqueur (320, KD6, T1) | french herbal liqueur (2,900, KD9) |
| Contratto Aperitif (Italian) | contratto aperitif (720, KD8, T1) | italian aperitif (1,600, KD21) |
| Becherovka (Czech herbal digestif) | becherovka herbal liqueur (110, KD16, T1) | czech herbal liqueur (320, KD14) |

**Flagged, not volume-backed but real and well-known — recommend dedicated exports before treating as confirmed catalog-expansion candidates**: Frangelico (hazelnut liqueur), Cynar (artichoke amaro), Suze (French gentian aperitif, direct rival to the Salers row found above), Licor 43 (Spanish vanilla-citrus liqueur), Malibu (coconut rum liqueur — technically flavored rum, adjacent category), Sambuca (Italian anise liqueur — no rows surfaced anywhere in this pull despite being a major category). "Limoncello" itself surfaced repeatedly as a generic category term (limoncello cream liqueur 480, is limoncello an aperitif 40+30) with real demand but no specific stocked or unstocked brand attached — worth flagging as a category gap (no limoncello SKU at all in the current catalog) independent of any one brand.

---

## What to check

1. **"Aperol spritz" has no volume row in any export pulled for this project**, including craft-cocktails and ready-to-drink-cocktails (both grepped directly). Given it's the single most obvious real-world search term for the Aperol product, recommend a dedicated Aperol/spritz SEMrush export before finalizing that product page's primary keyword.
2. **Chartreuse's real secret-recipe number is 130 herbs, not 211** — the brief's prompt referenced 211; WebSearch consistently returns 130 across multiple sources. Recommend correcting this anywhere it may already appear on the site.
3. **Fruit Liqueur category export has zero brand-name rows** for all 4 stocked products (Chambord, DeKuyper Peachtree, Midori, PAMA) despite being the correctly-targeted export — worth a follow-up brand-level pull for this specific subcategory before writing final product copy, since only category-generic terms are currently available.
4. **Drambuie and St-Germain have zero rows across all 9 exports** — both are real, well-known brands; recommend dedicated brand-level exports for these two specifically, since even the category-level Herbal-Liqueur pull came back empty for both.
5. **DeKuyper clears the 2+ SKU brand-hub bar** (Peachtree Peach Schnapps + Triple Sec Liqueur) in addition to Jägermeister, which the brief explicitly asked about — both hub drafts are included in Phase 4.
6. **Cordial Liqueurs subcategory has no SEMrush export at all** — all 3 products (Crème de Cacao, Crème de Menthe, Luxardo Maraschino) rely entirely on WebSearch-confirmed real facts with zero volume data. Recommend this be the top priority for a follow-up SEMrush pull, since it's the only subcategory in this batch with no quantitative data whatsoever.
7. This batch surfaced an unusually rich Part B (19 volume-backed unstocked-brand rows, vs. mostly WebSearch-only findings in the wine batch) — worth a look if catalog expansion within Liqueurs is on the table; Ramazzotti, Amarula, and Chinola Passion Fruit Liqueur are the three strongest signals by volume.
