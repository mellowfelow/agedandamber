# Keyword Map — Non-Alcoholic Wine (24 SKUs, 3 Subcategories)
**Site:** Aged And Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — research report only, nothing implemented. Covers the full `na-wine` category (Non-Alcoholic Red Wine ×9, Non-Alcoholic White Wine ×9, Non-Alcoholic Rosé Wine ×6). Fine Wine, Champagne, and NA Champagne & Sparkling are already fully SEO'd — see `keyword-map-wine-red.md` and `keyword-map-na-champagne.md` for the format/quality bar this report matches.
**Methodology:** Real SEMrush export data — `non-alcoholic-wine_all-keywords_us_2026-08-26` (100 rows), its `(1)` companion file (100 rows, heavily overlapping head terms plus additional brand-level rows), and `non-alcoholic-red-wine_all-keywords_us_2026-08-26` (100 rows, ~60% row-for-row overlap with the `(1)` file). All three files were read in full and cross-referenced; duplicates across files are counted once. No dedicated brand-level export exists for any of the 11 brands in this batch (Ariel, FRE, Giesen, Lautus, Leitz, Luminara, Noughty, Oddbird, Saint Viviana, Surely, Tomorrow Cellars) — where a brand surfaced in the category exports those real rows are used; where nothing surfaced, the product is marked **"confirmed real via WebSearch, not volume-backed"** and grounded with a real, sourced brand/production fact instead of a fabricated one. KD 0–20 = T1 Quick Win, 21–35 = T2 Worth Targeting, 36+ = T3/background only.
**Cross-category note:** FRE, Giesen, Leitz, Noughty, Oddbird, and Surely also make non-alcoholic **sparkling** wine and already have brand hubs under `na-champagne-sparkling` in `src/data/brandHubs.ts` (`hubSlug: 'fre'`, `'leitz'`, `'noughty'`, `'oddbird'`, plus `'chateau-del-ish'`, `'french-bloom'`, `'welchs'`, `'wolffer-estate'`). **Giesen and Surely do not currently have a sparkling-category hub** (grep confirms no `giesen`/`surely` rows in `brandHubs.ts` at all) — so both need a brand hub drafted fresh here with no existing copy to avoid duplicating. The five brand hubs drafted below (Phase 4) are new entries under `na-wine`, framed around the still range, referencing but not repeating the sparkling hub's exact hook copy where one exists.

---

## Phase 1 — Filter Summary

This pull was cleaner than the Fine Wine or Champagne batches — the noise clusters are narrower and mostly fall into two buckets: cooking-substitute demand and wrong-retailer navigational demand — but three brand-collision checks specifically called out in the brief came back **negative** (no contamination found), which is worth documenting explicitly rather than silently.

**Cooking/recipe-substitute cluster — ~5,290 combined, dropped in full.** `red wine substitute` (1,600, KD40), `cooking substitutions for red wine` (880, KD31), `red wine alternative` (880, KD10 — ambiguous phrasing that reads as recipe-substitute intent in context, not a "look for an NA alternative to red wine" shopping query), `red wine replacement` (590, KD19), `non alcoholic mulled wine` (590, KD15 — a seasonal recipe, not a bottle-buying query), `dry red wine substitute` (390, KD20), `non alcoholic spiced wine` (320, KD17 — also recipe/seasonal), `can you use non alcoholic red wine for cooking` (40, KD1). Same treatment as the red-wine-vinegar/cooking-wine exclusions in the Fine Wine and NA Champagne reports — zero product-page relevance to a bottle meant for drinking.

**Wrong-retailer navigational demand — ~3,170 combined, dropped (Aged And Amber isn't Trader Joe's, Walmart, Target, Costco, Publix, Whole Foods, Total Wine, or Cooper's Hawk).** Trader Joe's cluster (~610): `trader joe's non alcoholic wine` (480, KD27), `does trader joe's have non alcoholic wine` (90, KD25), `does trader joe's sell non alcoholic wine` (40, KD20). Walmart cluster (~980): `non alcoholic wine walmart` (590, KD25), `walmart non alcoholic wine` (390, KD24). Plus `non alcoholic wine target` (260, KD23), `total wine non alcoholic wine` (480, KD16), `whole foods non alcoholic wine` (390, KD17), `non alcoholic wine publix` (320, KD17), `does costco sell non alcoholic wine` (90, KD15), `does cooper's hawk have non alcoholic wine` (40, KD8).

**"Free wine" / "free range wine" homonym — ~1,270 combined, dropped.** `free wine` (390, KD28, Navigational) reads as giveaway/free-sample-promotion searches, not the FRE brand (which always surfaces as "FRE" or "fre wine" in its own real cluster, never bare "free wine" — same conclusion as the NA Champagne report). `free range wine` (880, KD26, Navigational, carries a Knowledge panel SERP feature suggesting it resolves to a specific unrelated entity) is unrelated to any stocked brand or to FRE — dropped as noise.

**Vague/ambiguous generic terms — ~730 combined, dropped without confident attribution.** `not wine` (260, KD6, CPC $4.63 — an outlier CPC suggesting an unrelated, possibly legal or product-comparison intent, not NA-wine shopping), `alcoholic wine` (210, KD35 — literally the opposite of the category, likely confused/comparison search behavior), `red wine drink price` (260, KD28 — unclear intent, possibly cocktail-pricing noise). None used.

**Brand-collision checks specifically flagged in the brief — all came back clean in this pull:**
- **Ariel vs. the Disney character or the common first name:** zero contaminated rows found. Every "ariel" row in all three exports (`ariel non alcoholic wine` 720/KD6, `ariel chardonnay non alcoholic wine` 320/KD4, `ariel non alcoholic red wine` 210/KD7) is unambiguously wine-shopping intent — nothing to drop here.
- **Surely vs. the generic adverb:** the brand doesn't surface *at all* in these three exports (it appeared only in the earlier NA Champagne & Sparkling pull as `surely non alcoholic wine`, 320/KD13) — so there was no adverb-collision noise to filter, but also no fresh volume to draw on for the still Rosé; see Phase 3 below for how that's handled.
- **Lautus / Luminara / Saint Viviana as smaller/newer brands:** all three were WebSearch-verified as real, currently-sold brands (Lautus: founded 2017 by winemaker Reg Holder, South Africa's first de-alcoholized wine; Luminara: Napa Valley-appellated, spinning-cone technology; Saint Viviana: US brand built with a master sommelier). None showed any homonym risk in the CSV data — Lautus and Luminara have distinctive enough names that no noise surfaced, and Saint Viviana had zero CSV rows at all (not even noise — the brand simply doesn't have measurable search volume yet in this pull).

**Kept, not filtered — pregnancy and Dry January angle, real per brief.** `is it okay to drink non alcoholic wine while pregnant` (40), `can i drink non alcoholic wine while pregnant` (110, KD6), `can you have non alcoholic wine when pregnant` (70, KD7), `can a pregnant women drink non alcoholic wine` (40, KD5), `can you drink non alcoholic wine during pregnancy` (140, KD7), `is it ok/safe to drink non alcoholic wine while pregnant` (50 each), `is non alcoholic wine safe during pregnancy` (170, KD9), `can a pregnant woman drink non alcoholic wine` (50, KD11), `can pregnant women drink non alcoholic wine` (140, KD11), `non alcoholic wine for pregnant women` (590, KD3), `non alcoholic wine for pregnant` (390, KD6), `non alcoholic wine pregnancy` (720, KD11). Combined, this is the single largest informational cluster in the entire pull (**~2,100+**) — genuinely real and recurring, not noise. See Phase 6 blog topics.

**Kept, not filtered — real production-terminology used throughout below:** `dealcoholized wine` (2,400, KD21), `alcohol removed wine` (1,900, KD21), `de alcoholized wine` (210, KD18), `dealcoholized` (260, KD22) — correct technical vocabulary for how nearly every SKU in this category is actually made.

**Notable gap in this specific pull — zero rosé/rosé-adjacent rows.** Not one of the three exports read for this report contains a single row with "rose," "rosé," "blush," or "pink" in it. The `/non-alcoholic-rose-wine/` subcategory hub and all six rosé products below therefore borrow their hub-level keywords from the `Non-Alcoholic-sparkling-rose_all-keywords_us_2026-08-26` export used in the earlier NA Champagne & Sparkling report (`non alcoholic sparkling rose` 480/KD21, `rose fizzy wine` 4,400/KD18, `non alcoholic rose` 1,000/KD17, `non alcoholic rose wine` 260/KD11, `sparkling rose non alcoholic` 210/KD20). This cross-category reuse is justified, not lazy: four of the six stocked rosé SKUs (Leitz, Noughty, Oddbird, Surely) are explicitly described in their own on-site product copy as lightly sparkling/bubbly ("sparkling, pale-red rosé," "sparkling rosé," "sparkling, dry sparkling rosé," "bright, bubbly... crisp, dry, bubbly finish"), so "sparkling rosé" search demand is a genuine behavioral match even though these SKUs are merchandised under `na-wine` rather than `na-champagne-sparkling`. Flagged explicitly in "What to Check" below — a dedicated `non-alcoholic-rose-wine` SEMrush export would materially sharpen this subcategory.

**Net:** roughly 20–25% of unique rows across the three exports were noise (cooking-substitute, wrong-retailer, vague-generic, homonym) and excluded from the tables below; the remainder is real, usable demand.

---

## Phase 2 — Subcategory Hub Keyword Tables

Before the three subcategory tables, note the mega-volume category-level anchors that likely also feed the parent `/na-wine/` landing page itself: `non alcoholic wine` (33,100, KD24), `alcohol free wine` (5,400, KD22), `best non alcoholic wine` (4,400, KD16), `non-alcoholic wine` (3,600, KD23), `na wine` (1,600, KD13), `non alc wines` (1,900, KD27), `no alcohol wine` (1,300, KD13), `nonalcoholic wine` (1,300, KD24), `dealcoholized wine` (2,400, KD21), `alcohol removed wine` (1,900, KD21). These are too broad to assign to any one subcategory but are the real head terms driving traffic into the category as a whole.

### `/na-wine/non-alcoholic-red-wine/`
Primary: **non alcoholic red wine** (2,900, KD13)
Secondary: best non alcoholic red wine (1,000, KD14) · non alcoholic red wines (880, KD12) · red wine non alcoholic (720, KD7) · alcohol free red wine (480, KD6) · non-alcoholic red wine (320, KD11 — hyphenated variant) · non alcohol red wine (320, KD16) · non alcoholic cabernet sauvignon (320, KD7) · best na red wine (260, KD15) · good non alcoholic red wine (210, KD10) · non alcoholic cabernet (260, KD18)
FAQ: "Does non-alcoholic red wine have any alcohol?" (composite of `does non alcoholic wine have alcohol` 210/KD12 + `do non alcoholic wines have alcohol` 90/KD14 — answer factually: legally under 0.5% ABV, same standard as fruit juice) · "How is non-alcoholic wine made?" (ties to `how is non alcoholic wine made` 210/KD8 + `how non alcoholic wine is made` 140/KD7 — real, recurring; answer should note the different real methods used by stocked brands: reverse osmosis, spinning cone, vacuum distillation)

### `/na-wine/non-alcoholic-white-wine/`
Primary: **non alcoholic white wine** (1,300, KD14)
Secondary: best non alcoholic white wine (320, KD16) · best non alcoholic chardonnay (210, KD13) · giesen sauvignon blanc non alcoholic wine (480, KD13 — strong brand-level proof of NA Sauvignon Blanc demand, folds into the subcategory) · good non alcoholic wine (1,300, KD12 — broad but heavily white-wine-weighted in SERP intent) · nice non alcoholic wine (1,600, KD15) · wine without alcohol (880, KD19)
FAQ: "Does non-alcoholic wine taste like real wine?" (ties to `does non alcoholic wine taste the same` 40/KD5 + the broader "good/nice/best-tasting" cluster below in Phase 6 — answer honestly: quality varies significantly by production method and brand, addressed directly in blog content)

### `/na-wine/non-alcoholic-rose-wine/`
Primary: **non alcoholic rose** (1,000, KD17 — reused from the `Non-Alcoholic-sparkling-rose` export per the Phase 1 note above; no rosé row surfaced in this batch's three exports)
Secondary: rose fizzy wine (4,400, KD18) · non alcoholic sparkling rose (480, KD21) · non alcoholic rose wine (260, KD11) · sparkling rose non alcoholic (210, KD20)
FAQ: no independent PAA-style row found for still/rosé specifically in either this pull or the sparkling-rosé pull — defer to the Red Wine hub's "does it have alcohol" / "how is it made" FAQs, which apply equally here. **Recommend a dedicated `non-alcoholic-rose-wine` SEMrush export next round** — this subcategory currently has the thinnest direct data of the three.

---

## Phase 3 — Per-Product Keyword Assignments

### Non-Alcoholic Red Wine (9 SKUs)

**1. prod-na-wine-01 — Ariel Alcohol-Removed Cabernet Sauvignon**
Primary: **ariel non alcoholic red wine** (210, KD7) — CSV-backed, exact match.
Secondary (5): ariel non alcoholic wine (720, KD6) · non alcoholic cabernet sauvignon (320, KD7) · non alcoholic cabernet (260, KD18) · best non alcoholic red wine (1,000, KD14) · alcohol free red wine (480, KD6)
FAQ: none SKU-specific; defer to Red Wine subcategory FAQs.

**2. prod-na-wine-03 — FRE Alcohol-Removed Cabernet Sauvignon**
Primary: **fre cabernet sauvignon** (260, KD10) — CSV-backed; surfaced specifically in the `non-alcoholic-red-wine` export, a strong contextual match to this SKU.
Secondary (5): fre wine (3,600, KD21) · fre non alcoholic wine (2,900, KD19) · non alcoholic cabernet sauvignon (320, KD7) · is fre wine alcohol free (90, KD3) · is fre wine good (50, KD6)
FAQ: "Is FRE wine alcohol-free?" (90, KD3, CSV-backed) — under 0.5% ABV. "Is FRE wine good?" (50, KD6, CSV-backed) — real, recurring commercial-informational question.

**3. prod-na-wine-05 — FRE Alcohol-Removed Merlot**
Primary: no exact "fre merlot" row in this pull — **confirmed real via WebSearch, not volume-backed.** Sutter Home's FRE Merlot is fully fermented then dealcoholized via spinning cone, widely distributed alongside the rest of the FRE range.
Secondary (5): fre wine (3,600, KD21) · fre non alcoholic wine (2,900, KD19) · alcohol free red wine (480, KD6) · non alcoholic red wine (2,900, KD13) · best non alcoholic red wine (1,000, KD14)
FAQ: defer to Red Wine subcategory FAQs.

**4. prod-na-wine-09 — Giesen 0% Premium Red Blend**
Primary: no exact "giesen premium red" / "giesen red blend" row in this pull — **confirmed real via WebSearch, not volume-backed.** A Merlot/Cabernet Franc blend sourced from Marlborough and Waipara that won 95 points and a Gold Medal at the 2022 International Wine and Spirit Competition; at 27 calories per 5oz serve it has roughly 70% fewer calories than a standard 12.5% ABV red.
Secondary (5): giesen non alcoholic wine (1,900, KD15) · non alcoholic red wine (2,900, KD13) · alcohol free red wine (480, KD6) · dealcoholized wine (2,400, KD21) · best non alcoholic red wine (1,000, KD14)
FAQ: defer to Giesen brand hub / Red Wine subcategory FAQs.

**5. prod-na-wine-12 — Lautus Savvy Red Non-Alcoholic Red Blend**
Primary: **lautus savvy red non alcoholic red wine** (260, KD0) — CSV-backed, exact SKU match.
Secondary (5): lautus savvy red (210, KD4) · non alcoholic red wine (2,900, KD13) · alcohol free red wine (480, KD6) · non alcoholic red wines (880, KD12) · best non alcoholic red wine (1,000, KD14)
FAQ: none forced.

**6. prod-na-wine-18 — Noughty Alcohol-Free Rouge**
Primary: no exact "noughty rouge" row in this pull — **confirmed real via WebSearch, not volume-backed.** A genuinely rare fully-still (not lightly sparkling) alcohol-free red made from 100% Syrah grown on dryland-farmed vineyards in Darling, South Africa, aged in French oak, dealcoholized to under 0.5% ABV, roughly 14 calories per glass.
Secondary (5): noughty non alcoholic wine (720, KD24) · non alcoholic red wine (2,900, KD13) · alcohol free red wine (480, KD6) · dealcoholized wine (2,400, KD21) · best non alcoholic red wine (1,000, KD14)
FAQ: defer to Noughty brand hub.

**7. prod-na-wine-19 — Oddbird GSM Non-Alcoholic Red Wine**
Primary: **oddbird gsm non alcoholic red wine** (720, KD5) — CSV-backed, exact match; appears in both the `(1)` companion file and the dedicated red-wine export, the single strongest per-SKU signal in this entire report.
Secondary (5): oddbird non alcoholic wine (1,000, KD7) · non alcoholic red wine (2,900, KD13) · alcohol free red wine (480, KD6) · best non alcoholic red wine (1,000, KD14) · dealcoholized wine (2,400, KD21)
FAQ: "What does GSM stand for?" — no direct volume row but genuinely useful clarifying content (Grenache, Syrah, Mourvèdre — plus Carignan in Oddbird's specific blend).

**8. prod-na-wine-21 — Saint Viviana Non-Alcoholic Cabernet Sauvignon**
Primary: no CSV row for "saint viviana" anywhere in either pull — **confirmed real via WebSearch, not volume-backed.** A 100% Cabernet Sauvignon from Paso Robles, California, built from a high-end base wine specifically so little needs correcting after alcohol removal.
Secondary (5): non alcoholic cabernet sauvignon (320, KD7) · non alcoholic red wine (2,900, KD13) · best non alcoholic red wine (1,000, KD14) · alcohol free red wine (480, KD6) · non alcoholic cabernet (260, KD18)
FAQ: defer to Red Wine subcategory FAQs.

**9. prod-na-wine-24 — Tomorrow Cellars Non-Alcoholic Red Blend**
Primary: no CSV row — **confirmed real via WebSearch, not volume-backed.** Petite Sirah-based, aged 14 months in one-year-old French oak, then finished with a custom botanical blend (cassis, blueberry, cacao) developed with master mixologist Ian Blessing of All the Bitter; The New York Times has credited Tomorrow Cellars with having "cracked the code" on NA red wine.
Secondary (5): non alcoholic red wine (2,900, KD13) · alcohol free red wine (480, KD6) · best non alcoholic red wine (1,000, KD14) · non alcoholic wine brands (590, KD24) · non alcoholic red wines (880, KD12)
FAQ: "What's in Tomorrow Cellars' botanical blend?" — not volume-backed but a real, distinctive fact (cassis, blueberry, cacao) worth a short callout.

---

### Non-Alcoholic White Wine (9 SKUs)

**10. prod-na-wine-02 — Ariel Alcohol-Removed Chardonnay**
Primary: **ariel chardonnay non alcoholic wine** (320, KD4) — CSV-backed, exact match.
Secondary (5): ariel non alcoholic wine (720, KD6) · non alcoholic white wine (1,300, KD14) · best non alcoholic chardonnay (210, KD13) · best non alcoholic white wine (320, KD16) · nice non alcoholic wine (1,600, KD15)
FAQ: none SKU-specific.

**11. prod-na-wine-04 — FRE Alcohol-Removed Chardonnay**
Primary: no exact "fre chardonnay" row in this pull — **confirmed real via WebSearch, not volume-backed.** A widely-distributed Sutter Home FRE SKU using the same spinning-cone process as the rest of the range.
Secondary (5): fre wine (3,600, KD21) · fre non alcoholic wine (2,900, KD19) · best non alcoholic chardonnay (210, KD13) · non alcoholic white wine (1,300, KD14) · best non alcoholic white wine (320, KD16)
FAQ: defer to White Wine subcategory FAQs.

**12. prod-na-wine-08 — Giesen 0% Pinot Grigio**
Primary: no exact "giesen pinot grigio" row in this pull — **confirmed real via WebSearch, not volume-backed.** Sourced across Marlborough, Waipara, and Hawke's Bay; part of Giesen's core 0% lineup though Sauvignon Blanc (not Pinot Grigio) is the brand's single best-selling NA SKU.
Secondary (5): giesen non alcoholic wine (1,900, KD15) · non alcoholic white wine (1,300, KD14) · giesen sauvignon blanc non alcoholic wine (480, KD13 — brand-level proof, different SKU) · best non alcoholic white wine (320, KD16) · dealcoholized wine (2,400, KD21)
FAQ: defer to White Wine subcategory FAQs.

**13. prod-na-wine-10 — Giesen 0% Sauvignon Blanc**
Primary: **giesen sauvignon blanc non alcoholic wine** (480, KD13) — CSV-backed, exact match.
Secondary (5): giesen non alcoholic wine (1,900, KD15) · non alcoholic white wine (1,300, KD14) · best non alcoholic white wine (320, KD16) · nice non alcoholic wine (1,600, KD15) · dealcoholized wine (2,400, KD21)
FAQ: none forced; strong brand-hook fact for the Giesen hub — this is the #1 selling premium alcohol-removed wine in the US (WebSearch-confirmed).

**14. prod-na-wine-11 — Lautus Alcohol-Free Sauvignon Blanc**
Primary: no exact "lautus sauvignon blanc" row in this pull — **confirmed real via WebSearch, not volume-backed.** Also marketed as "Savvy White" in some listings; uses spinning cone technology twice (once for flavor capture, once for alcohol removal).
Secondary (5): lautus savvy red (210, KD4 — brand proof, different SKU) · lautus savvy red non alcoholic red wine (260, KD0 — brand proof) · non alcoholic white wine (1,300, KD14) · best non alcoholic white wine (320, KD16) · nice non alcoholic wine (1,600, KD15)
FAQ: defer to Lautus brand hub.

**15. prod-na-wine-13 — Leitz Eins-Zwei-Zero Riesling**
Primary: **leitz non alcoholic wine** (390, KD7) — CSV-backed; closest brand-level match (no "riesling"-specific row surfaced in this pull).
Secondary (5): non alcoholic white wine (1,300, KD14) · dealcoholized wine (2,400, KD21) · alcohol removed wine (1,900, KD21) · best non alcoholic white wine (320, KD16) · nice non alcoholic wine (1,600, KD15)
FAQ: "How is Leitz Eins-Zwei-Zero made alcohol-free?" — real, WebSearch-confirmed fact: fully fermented Riesling first, then gentle vacuum distillation (not reverse osmosis or spinning cone).

**16. prod-na-wine-15 — Luminara Alcohol-Removed Napa Valley Chardonnay**
Primary: no CSV row for "luminara" in either pull — **confirmed real via WebSearch, not volume-backed.** Marketed as the first alcohol-removed wine crafted entirely from Napa Valley-appellated fruit; uses spinning cone technology. Reviews are genuinely mixed — some praise its realistic tannin/body, others report sour or metallic off-notes — worth a balanced tone in copy rather than oversell.
Secondary (5): non alcoholic white wine (1,300, KD14) · best non alcoholic chardonnay (210, KD13) · dealcoholized wine (2,400, KD21) · alcohol removed wine (1,900, KD21) · best non alcoholic white wine (320, KD16)
FAQ: defer to White Wine subcategory FAQs (only 1 SKU stocked; no dedicated brand hub drafted below).

**17. prod-na-wine-16 — Noughty Alcohol-Free Chardonnay**
Primary: **noughty non alcoholic wine** (720, KD24) — CSV-backed; closest brand-level match (no "chardonnay"-specific row surfaced in this pull).
Secondary (5): non alcoholic white wine (1,300, KD14) · dealcoholized wine (2,400, KD21) · best non alcoholic chardonnay (210, KD13) · best non alcoholic white wine (320, KD16) · nice non alcoholic wine (1,600, KD15)
FAQ: defer to Noughty brand hub.
**Content-accuracy note:** this SKU's own on-site copy describes it as "pale and effervescent... designed to look and pour like a celebratory glass of Champagne," which is the same organic sparkling Chardonnay that anchors Noughty's `na-champagne-sparkling` hub — yet it's merchandised here under "Non-Alcoholic White Wine." Not something to fix via keywords, but worth flagging to whoever owns merchandising/site taxonomy.

**18. prod-na-wine-22 — Saint Viviana Non-Alcoholic Sauvignon Blanc**
Primary: no CSV row — **confirmed real via WebSearch, not volume-backed.** A Washington State Sauvignon Blanc, fresh and tart, built to satisfy serious Sauvignon Blanc drinkers rather than read as a diluted stand-in.
Secondary (5): non alcoholic white wine (1,300, KD14) · best non alcoholic white wine (320, KD16) · nice non alcoholic wine (1,600, KD15) · wine without alcohol (880, KD19) · good non alcoholic wine (1,300, KD12)
FAQ: defer to White Wine subcategory FAQs.

---

### Non-Alcoholic Rosé Wine (6 SKUs)

**19. prod-na-wine-06 — FRE Alcohol-Removed Rosé**
Primary: no exact row in this pull's three exports — reused from the earlier NA Champagne & Sparkling pull: **fre rose** (110, KD12, from the `Non-Alcoholic-sparkling-rose` export — same brand, cross-category reuse flagged).
Secondary (5): fre wine (3,600, KD21) · fre non alcoholic wine (2,900, KD19) · non alcoholic rose (1,000, KD17) · non alcoholic rose wine (260, KD11) · alcohol removed wine (1,900, KD21)
FAQ: defer to FRE brand hub.

**20. prod-na-wine-07 — Giesen 0% Dealcoholized Rosé**
Primary: no exact row — **confirmed real via WebSearch, not volume-backed.** Blends Marlborough fruit (crispness) with Waipara fruit (aromatic lift); part of Giesen's 7-SKU 0% lineup.
Secondary (5): giesen non alcoholic wine (1,900, KD15) · giesen sauvignon blanc non alcoholic wine (480, KD13 — brand proof) · non alcoholic rose (1,000, KD17) · rose fizzy wine (4,400, KD18) · dealcoholized wine (2,400, KD21)
FAQ: defer to Giesen brand hub.

**21. prod-na-wine-14 — Leitz Eins-Zwei-Zero Rosé**
Primary: no exact row — **confirmed real via WebSearch, not volume-backed.** 100% Pinot Noir, briefly macerated before pressing; the Eins-Zwei-Zero range is best known for its Riesling, but the Rosé is a real, current line extension using the same Rheingau vacuum-distillation process.
Secondary (5): leitz non alcoholic wine (390, KD7) · non alcoholic rose (1,000, KD17) · rose fizzy wine (4,400, KD18) · dealcoholized wine (2,400, KD21) · sparkling rose non alcoholic (210, KD20)
FAQ: defer to Leitz brand hub.

**22. prod-na-wine-17 — Noughty Alcohol-Free Rosé**
Primary: **noughty non alcoholic wine** (720, KD24) — CSV-backed; closest brand-level match (no rosé-specific row surfaced here).
Secondary (5): non alcoholic rose (1,000, KD17) · rose fizzy wine (4,400, KD18) · dealcoholized wine (2,400, KD21) · non alcoholic sparkling rose (480, KD21) · sparkling rose non alcoholic (210, KD20)
FAQ: defer to Noughty brand hub.

**23. prod-na-wine-20 — Oddbird Non-Alcoholic Rosé**
Primary: **oddbird non alcoholic wine** (1,000, KD7) — CSV-backed; closest brand-level match (no rosé-specific row surfaced here).
Secondary (5): non alcoholic rose (1,000, KD17) · rose fizzy wine (4,400, KD18) · dealcoholized wine (2,400, KD21) · non alcoholic sparkling rose (480, KD21) · alcohol removed wine (1,900, KD21)
FAQ: defer to Oddbird brand hub.

**24. prod-na-wine-23 — Surely Non-Alcoholic Rosé**
Primary: no CSV row for "surely" in this pull's three exports at all — reused from the earlier NA Champagne & Sparkling pull: **surely non alcoholic wine** (320, KD13, from the `Non-Alcoholic-sparkling-rose` export — cross-category reuse flagged, closest available brand-level proof).
Secondary (5): non alcoholic rose (1,000, KD17) · rose fizzy wine (4,400, KD18 — legitimately fitting; this SKU's own copy calls it "bright, bubbly... crisp, dry, bubbly finish") · non alcoholic sparkling rose (480, KD21) · alcohol removed wine (1,900, KD21)
FAQ: none forced. Brand hook (WebSearch-confirmed, reused from the NA Champagne report): Surely uses real alcohol-removed California wine, not a grape-juice base; this specific Rosé is made from 100% Barbera grapes sourced in Sonoma.

---

## Phase 4 — Brand Hub Drafts

Eight brands clear the 2+ stocked SKU bar for this category: **Ariel (2), FRE (4), Giesen (4), Lautus (2), Leitz (2), Noughty (3), Oddbird (2), Saint Viviana (2).** Luminara, Surely, and Tomorrow Cellars each have only 1 SKU stocked here and don't get a dedicated hub per the same threshold used in the Fine Wine and NA Champagne reports. Of the eight, FRE, Giesen, Leitz, Noughty, and Oddbird also sell sparkling wine with existing `na-champagne-sparkling` hubs — those five hooks below are written fresh around the *still* range and explicitly reference (without repeating) the sparkling sibling line; Ariel, Lautus, and Saint Viviana have no existing hub anywhere on the site.

### Ariel
**categoryLabel:** Non-Alcoholic Red & White Wine
**Hook:** Ariel Vineyards has been made by J. Lohr Vineyards & Wines since 1985 — seven years before FRE launched — making it one of the very first alcohol-removed wine brands sold in the US. Unlike most of the category, which uses spinning cone technology, Ariel relies on J. Lohr's own patented reverse osmosis process, drawing grapes from J. Lohr's 4,000+ certified-sustainable acres across Paso Robles and Monterey County's Arroyo Seco. The name comes from Shakespeare's ethereal spirit in *The Tempest*, and both stocked wines run at roughly a third of the calories of their alcoholic counterparts. J. Lohr gave the brand a full packaging and identity refresh in December 2024.
**Secondary keywords:** ariel non alcoholic wine (720, KD6) · ariel chardonnay non alcoholic wine (320, KD4) · ariel non alcoholic red wine (210, KD7)
**FAQs:**
1. Who makes Ariel wine? — J. Lohr Vineyards & Wines; Ariel dates to 1985, one of the original alcohol-removed wine brands in the US.
2. How is Ariel wine made alcohol-free? — Reverse osmosis, a process J. Lohr patented, rather than the spinning-cone method used by many competitors.

### FRE
**categoryLabel:** Non-Alcoholic Red, White & Rosé Wine
**Hook:** Sutter Home has produced FRE since 1992, making it one of the longest-running alcohol-removed wine lines in the US; alcohol is stripped using a spinning cone process combined with controlled temperature, leaving a trace typically under 0.5% ABV. FRE's retail sales grew roughly 300% between 2019 and 2024. The still range — Cabernet Sauvignon, Chardonnay, Merlot, Sauvignon Blanc, and Rosé — is the deepest still-wine lineup of any single NA brand in this shop; four of those five are stocked here. (FRE also makes a Sparkling Brut and Sparkling Rosé, stocked separately in the Champagne & Sparkling shop.)
**Secondary keywords:** fre wine (3,600, KD21) · fre non alcoholic wine (2,900, KD19) · fre cabernet sauvignon (260, KD10) · fre wine reviews (210, KD5) · fre non-alcoholic red blend (210, KD4 — different SKU, see gap analysis)
**FAQs:**
1. Does FRE wine have any alcohol? (ties to CSV-backed `is fre wine alcohol free`, 90/KD3) — under 0.5% ABV, the same trace level as most alcohol-removed wines.
2. Who makes FRE wine? — Sutter Home Family Vineyards (Trinchero Family Wine & Spirits).
3. Does FRE make a Sauvignon Blanc? — Yes, a real, widely distributed FRE SKU; not currently stocked here (see Phase 8, Part A).

### Giesen
**categoryLabel:** Non-Alcoholic Red, White & Rosé Wine
**Hook:** Giesen is New Zealand's largest family-owned winery and was the first New Zealand winery to install spinning cone technology, which separates fragrance and alcohol from the base wine under vacuum. The 0% range now spans seven varietals — Sparkling Brut, Sauvignon Blanc, Pinot Grigio, Riesling, Rosé, Premium Red, and Chardonnay (added September 2024) — four of which are stocked here, making it the broadest single-brand still-wine range in this category. Giesen 0% Sauvignon Blanc is the #1 selling premium alcohol-removed wine in the US, and the Premium Red won 95 points and a Gold Medal at the 2022 International Wine and Spirit Competition. (Giesen also makes a Sparkling Brut; this shop does not yet carry a dedicated Giesen sparkling hub.)
**Secondary keywords:** giesen non alcoholic wine (1,900, KD15) · giesen sauvignon blanc non alcoholic wine (480, KD13) · non alcoholic white wine (1,300, KD14) · non alcoholic red wine (2,900, KD13)
**FAQs:**
1. Is Giesen 0% really alcohol-free? — Not more than 0.5% ABV, the legal standard for "non-alcoholic" wine in the US, NZ, and Australia.
2. What's Giesen's best-selling 0% wine? — Sauvignon Blanc, the #1 selling premium alcohol-removed wine in the US.

### Lautus
**categoryLabel:** Non-Alcoholic Red & White Wine
**Hook:** Lautus was founded in South Africa in 2017 by winemaker Reg Holder — the country's first de-alcoholized wine producer — after his wife wanted a genuine wine experience while pregnant. Grapes are picked in two passes, some early for acidity and some at peak ripeness, then run through spinning cone technology twice: once to capture flavor, once to remove alcohol. The name is Latin for "pure, elegant, and sumptuous." Beyond the two SKUs stocked here, Lautus also makes a Chardonnay, a Rosé, and sparkling variants.
**Secondary keywords:** lautus savvy red (210, KD4) · lautus savvy red non alcoholic red wine (260, KD0) · non alcoholic red wine (2,900, KD13) · non alcoholic white wine (1,300, KD14)
**FAQs:**
1. Who founded Lautus? — Winemaker Reg Holder, South Africa, 2017; inspired by his pregnant wife wanting a real wine experience.
2. What does "Lautus" mean? — Latin for pure, elegant, and sumptuous.

### Leitz
**categoryLabel:** Non-Alcoholic White & Rosé Wine
**Hook:** Josef Leitz's Rheingau, Germany estate is one of the region's most respected Riesling producers, and its Eins-Zwei-Zero range removes alcohol through gentle vacuum distillation rather than reverse osmosis or spinning cone technology — a process the estate credits for preserving classic green-apple, pear, and Riesling-spice character. The range is Fair 'N Green sustainability-certified. Beyond the Riesling and Rosé stocked here, Leitz also produces a 100% Pinot Noir still red. (A Sparkling Riesling and Sparkling Rosé from the same estate are stocked separately in the Champagne & Sparkling shop.)
**Secondary keywords:** leitz non alcoholic wine (390, KD7) · dealcoholized wine (2,400, KD21) · alcohol removed wine (1,900, KD21) · non alcoholic white wine (1,300, KD14)
**FAQs:**
1. How is Leitz Eins-Zwei-Zero made alcohol-free? — The grapes are fully fermented into real wine first, then alcohol is removed via gentle vacuum distillation.
2. Where is Leitz from? — The Rheingau, one of Germany's most historically important Riesling regions.

### Noughty
**categoryLabel:** Non-Alcoholic Red, White & Rosé Wine
**Hook:** Noughty is made by Thomson & Scott, founded in 2013 by Amanda Thomson — a former BBC arts journalist trained at Le Cordon Bleu — with the explicit goal of building the world's first premium non-alcoholic wine portfolio. Thomson & Scott is B Corp certified and Noughty's wines are organic and vegan. The Rouge stocked here is a genuinely rare fully-still (not lightly sparkling) alcohol-free red made from 100% Syrah; the Chardonnay stocked in this shop's white-wine range is actually the same effervescent, Champagne-style pour that anchors Noughty's sparkling hub. Beyond the three SKUs here, Thomson & Scott also makes a distinct still Blanc de Blanc (45% Chardonnay / 55% Chenin Blanc) not currently stocked. (Sparkling Chardonnay and Sparkling Rosé from the same brand are stocked separately in the Champagne & Sparkling shop.)
**Secondary keywords:** noughty non alcoholic wine (720, KD24) · non alcoholic red wine (2,900, KD13) · dealcoholized wine (2,400, KD21) · non alcoholic white wine (1,300, KD14)
**FAQs:**
1. Who makes Noughty wine? — Thomson & Scott, founded by Amanda Thomson in 2013.
2. Is Noughty organic and vegan? — Yes to both.

### Oddbird
**categoryLabel:** Non-Alcoholic Red & Rosé Wine
**Hook:** Oddbird was founded in Sweden by Moa Gürbüzer and has spent over a decade pushing the non-alcoholic wine category forward. The GSM sources Grenache, Syrah, Mourvèdre, and Carignan from Saint-Chinian in the Languedoc-Roussillon region of France, using a patented gentle process to remove alcohol after full fermentation — a genuinely uncommon still-red style in a category dominated by whites and rosés. (A Blanc de Blancs sparkling wine from the same brand is stocked separately in the Champagne & Sparkling shop.)
**Secondary keywords:** oddbird gsm non alcoholic red wine (720, KD5) · oddbird non alcoholic wine (1,000, KD7) · non alcoholic red wine (2,900, KD13) · dealcoholized wine (2,400, KD21)
**FAQs:**
1. What does GSM stand for? — Grenache, Syrah, Mourvèdre (plus Carignan in Oddbird's specific blend).
2. Where are Oddbird wines from? — The company is Swedish, but the wine itself is French — Saint-Chinian, Languedoc-Roussillon.

### Saint Viviana
**categoryLabel:** Non-Alcoholic Red & White Wine
**Hook:** Saint Viviana is a US brand built around a year-long development process involving California and Pacific Northwest winemakers and a master sommelier, starting from high-end base wines specifically so little needs correcting after the alcohol is removed — a Paso Robles Cabernet Sauvignon and a Washington State Sauvignon Blanc. No dedicated SEMrush export or CSV volume exists for this brand yet in any pull to date; both facts above are WebSearch-confirmed rather than volume-backed.
**Secondary keywords:** none CSV-backed for this brand in either pull — non alcoholic cabernet sauvignon (320, KD7) and non alcoholic white wine (1,300, KD14) are the closest category-level proxies.
**FAQs:** none volume-backed; no PAA-style demand surfaced for this brand in this pull.

---

## Phase 8 — Gap Analysis

### Part A — Real missing expressions within brands already stocked

| Brand (stocked here) | Missing expression | Signal |
|---|---|---|
| FRE (Cab, Chardonnay, Merlot, Rosé stocked) | **FRE Sauvignon Blanc** | Real, WebSearch-confirmed, widely distributed at Walmart/Amazon/Albertsons; no direct CSV row, but `fre non alcoholic wine` (2,900, KD19) is the brand head term |
| FRE (Cab, Chardonnay, Merlot, Rosé stocked) | **FRE Red Blend** | `fre red blend` (260, KD12) + `fre non-alcoholic red blend` (210, KD4) — both CSV-backed, real Sutter Home SKU |
| Giesen (Rosé, Pinot Grigio, Premium Red, Sauvignon Blanc stocked) | **Giesen 0% Riesling** | Real, part of the confirmed 7-SKU 0% lineup (giesenwines.com/non-alcoholic-riesling); no CSV row in this pull |
| Giesen (Rosé, Pinot Grigio, Premium Red, Sauvignon Blanc stocked) | **Giesen 0% Chardonnay** | Real, launched September 2024 as the newest addition to the 0% range; no CSV row in this pull |
| Lautus (Sauvignon Blanc, Savvy Red stocked) | **Lautus Chardonnay** | Real, confirmed current SKU (~$20-26 retail); no CSV row |
| Lautus (Sauvignon Blanc, Savvy Red stocked) | **Lautus Rosé (still)** | Real, confirmed current SKU distinct from the sparkling Rosé; no CSV row |
| Leitz (Riesling, Rosé stocked) | **Leitz Pinot Noir (still red)** | Real, confirmed 100% Pinot Noir still red, sold in both bottle and can formats — would give Leitz its first stocked red |
| Noughty (Chardonnay, Rosé, Rouge stocked) | **Noughty Blanc de Blanc (still)** | Real, confirmed 45% Chardonnay / 55% Chenin Blanc still white — genuinely distinct from the stocked, effervescent-style "Chardonnay" |
| Luminara (Chardonnay stocked) | **Luminara Red Blend** | Real, confirmed via luminarawines.com ("Beyond Chardonnay, Luminara offers other Napa Valley appellated alcohol-removed wines including a Red Blend") |
| Surely (Rosé stocked) | **Surely Cabernet Sauvignon** | Real, confirmed launch 2022, 100% Sonoma Valley Cabernet Sauvignon; no CSV row in this pull |
| Surely (Rosé stocked) | **Surely Sauvignon Blanc** | Real, confirmed (Amazon: "De-alcoholized California Sauvignon Blanc"); no CSV row |
| Surely (Rosé stocked) | **Surely Red Blend** | Real, confirmed (Amazon: "Red Blend, Alcohol-Removed Red Wine"); no CSV row |
| Tomorrow Cellars (Red Blend stocked) | **Tomorrow Cellars Rhône Blanc White** | Real, confirmed via Amazon's "Duo 2 Pack: California Rhône Blanc White + Petite Sirah Red Blend" listing — a still-white sibling to the stocked red |

**No further gap found:** Ariel's confirmed lineup is exactly the two SKUs already stocked (Cabernet Sauvignon, Chardonnay) — no third J. Lohr Ariel SKU surfaced in this pass. Saint Viviana's confirmed lineup is likewise exactly the two SKUs stocked (Cabernet Sauvignon, Sauvignon Blanc) — no rosé or third varietal found despite a dedicated search.

### Part B — Real unstocked NA still-wine brands with genuine search demand

| Brand | Primary keyword | Support keywords | Notes |
|---|---|---|---|
| **Stella Rosa Naturals** | stella rosa non alcoholic wine (1,000, KD6) | — | Real, 0.3% ABV semi-sweet line — CSV-backed, the strongest single Part B finding in this pull by volume. **Caution:** confirm the regular (alcoholic) Stella Rosa isn't already stocked elsewhere in the main wine catalog before treating this as a clean gap (same caution flagged in the NA Champagne report) |
| **Zeronimo (Leonis Blend)** | zeronimo leonis blend non alcoholic wine (720, KD9) | — | Real, Austrian family winery Heribert Bayer; native Blaufränkisch, Zweigelt, and Cabernet Sauvignon from 70+ year-old vines, aged 24 months in new French oak; named winner of Best Non-Alcoholic Wine in USA TODAY's 2026 10Best Readers' Choice Awards. CSV-backed, second-strongest Part B finding |
| **Torres Natureo** | — (no US-market CSV row; skews EU) | not volume-backed in this pull | Real, Familia Torres (Spain); launched 2008, the pioneer dealcoholized-wine program in Europe. Full range: White (Muscat), Red (Garnacha/Syrah), Rosé, Chardonnay, Sparkling — plus a parallel Sangre de Toro 0.0 line. Torres is investing €6M (2024–2026) in a dedicated non-alcoholic winery |
| **McGuigan Zero** | — (no US-market CSV row; skews AU/UK) | not volume-backed in this pull | Real, McGuigan Wines (Hunter Valley, Australia); 5-SKU range (Shiraz, Sparkling, Rosé, Chardonnay, Sauvignon Blanc), spinning cone technology, under 0.05% ABV, 90+ point reviews |
| **NON** | non wine (320, KD33) | — | Real brand (Aaron Trotman, Melbourne, founded 2019), but **lower confidence as a direct match** — the phrase "non wine" is generic enough that this may not cleanly isolate to the brand. Worth noting for a different reason: NON is built via a verjuice-and-perfumery approach rather than dealcoholizing finished wine, a genuinely different production philosophy worth contrasting in blog content even if not stocked |

**Flagged, not a fit — do not use as a stocking or content gap without re-scoping:**
- **Josh Cellars** — `josh non alcoholic sparkling wine` (480, KD19) is CSV-backed and real (national launch June 2025, Glera grapes from Italy's Prosecco region, became the #1 fastest-growing domestic NA sparkling), but it is exclusively **sparkling** — it surfaced in this still-wine pull by SEMrush's related-query contamination, not because a still Josh Cellars NA wine exists. Not a Part B candidate for this category.
- **TÖST** — `tost non alcoholic wine` (480, KD22) is CSV-backed and real, but TÖST is a from-scratch white-tea-and-botanical beverage, not a dealcoholized or grape-based wine — same treatment as Kin Bloom in the NA Champagne report's gap analysis. Adjacent category, not a wine-brand gap.

---

## Phase 6 — Blog Topic Candidates

| Topic | Anchor keyword(s) | Notes |
|---|---|---|
| How Is the Alcohol Actually Removed From Wine? (Reverse Osmosis vs. Spinning Cone vs. Vacuum Distillation) | how is alcohol removed from wine (170, KD10) + how do you remove alcohol from wine (170, KD7) + how to remove alcohol from wine (170, KD12) + how to dealcoholize wine (140, KD8) + how is wine dealcoholized (260, KD4) + how do you dealcoholize wine (90, KD12) + how do they dealcoholized wine (70, KD2) + how is dealcoholized wine made (50, KD2) | Combined **~1,120+**; ties directly to real, brand-confirmed methods gathered in this report — Ariel = reverse osmosis, FRE/Giesen/Lautus = spinning cone, Leitz = vacuum distillation — genuinely differentiates SKUs that otherwise look identical on a shelf, same angle that worked well in the NA Champagne report |
| How Is Non-Alcoholic Wine Made? (Starting-From-Real-Wine Explainer) | how to make non alcoholic wine (390, KD8) + how do you make non alcoholic wine (260, KD7) + how non alcoholic wine is made (140, KD7) + how is non alcoholic wine made (210, KD8) + how do they make non alcoholic wine (90, KD3) | Combined **~1,090**; broader companion piece to the production-methods post above |
| Is Non-Alcoholic Wine Safe During Pregnancy? | non alcoholic wine pregnancy (720, KD11) + non alcoholic wine for pregnant women (590, KD3) + is non alcoholic wine safe during pregnancy (170, KD9) + can you drink non alcoholic wine during pregnancy (140, KD7) + can pregnant women drink non alcoholic wine (140, KD11) + can i drink non alcoholic wine while pregnant (110, KD6) + non alcoholic wine for pregnant (390, KD6) + several smaller 40-70 vol variants | Combined **~2,300+**, the single largest informational cluster in this entire pull — real, recurring, and exactly the angle the brief flagged as worth keeping |
| Does Non-Alcoholic Wine Have Any Alcohol? The 0.5% Rule Explained | does non alcoholic wine have alcohol (210, KD12) + do non alcoholic wines have alcohol (90, KD14) + does alcohol removed wine have alcohol (70, KD9) + is alcohol removed wine alcohol free (50, KD0) + is alcohol free wine really alcohol free (50, KD2) + what does alcohol removed wine mean (50, KD1) | Combined **~520**; directly answers the category's single most basic question with a factual, legally-grounded answer |
| Best Non-Alcoholic Wine for Every Occasion (Buying Guide) | best non alcoholic wine (4,400, KD16) + best non alcoholic red wine (1,000, KD14) + best non alcoholic white wine (320, KD16) + best na wine (720, KD13) + best alcohol free wine (480, KD13) | Huge combined anchor (**~6,900+**); maps cleanly to the whole 24-SKU catalog as a pillar/hub page |
| Is Non-Alcoholic Wine Good (or Bad) for You? | is non alcoholic wine good for you (140, KD27) + is non alcoholic wine bad for you (70, KD29) + is non alcoholic wine good for your liver (40, KD12) + is non alcoholic wine bad for your liver (110, KD14) + why is non alcoholic wine so bad for your liver (110, KD14) | Combined **~470**; genuine health-curiosity cluster — needs careful, factual, non-medical-advice framing |
| Does Non-Alcoholic Wine Actually Taste Like Real Wine? | nice non alcoholic wine (1,600, KD15) + good non alcoholic wine (1,300, KD12) + good tasting non alcoholic wine (210, KD17) + best tasting non alcoholic wine (260, KD10) + does non alcoholic wine taste the same (40, KD5) | Combined **~3,400+**; addresses the #1 objection to the category head-on, echoes Luminara's own mixed-review reality found during this research |
| Calories, Sugar, and Nutrition in Non-Alcoholic Wine | how many calories in non alcoholic wine (40, KD3) + is there a lot of sugar in alcohol free wine (40, KD2) | Individually small but real and recurring; ties to concrete brand facts gathered in this report (Giesen 27 cal/5oz, Tomorrow Cellars 10 cal/glass, Noughty Rouge ~14 cal/glass) |
| Dry January and Non-Alcoholic Wine: A Buyer's Guide | best non alcoholic wine (4,400, KD16) + non alc wines (1,900, KD27) | Seasonal buying-guide angle timed to January traffic; also ties to `vino sin alcohol` (1,000, KD17) — real Spanish-language search demand worth a bilingual content note for whoever owns broader content strategy |
| Non-Alcoholic Wine 101: What "Zero Proof," "Alcohol-Removed," and "Dealcoholized" Actually Mean | zero proof wine (320, KD23) + zero alcohol wine (720, KD20) + dealcoholized wine (2,400, KD21) + alcohol removed wine (1,900, KD21) | These terms map directly onto the site's own product badges (Zero Proof, Alcohol-Removed, Alcohol-Free, 0% Alcohol all appear across the 24 stocked SKUs) — a genuinely useful glossary post that also reinforces on-page badge language |

---

## What to Check

1. **The rosé subcategory has zero direct CSV volume in this pull** — all six rosé products and the `/non-alcoholic-rose-wine/` hub table borrow from the earlier `Non-Alcoholic-sparkling-rose` export. A dedicated `non-alcoholic-rose-wine` SEMrush export would materially sharpen this subcategory before finalizing copy.
2. **13 SKUs have zero CSV-backed volume in any of the three exports read for this report** — FRE Merlot, Giesen Premium Red, Giesen Pinot Grigio, Giesen Rosé, Lautus Sauvignon Blanc, Leitz Rosé, Luminara Chardonnay, Noughty Rouge, Saint Viviana (both SKUs), Tomorrow Cellars, FRE Chardonnay, FRE Rosé, Leitz Riesling — all rely on WebSearch-confirmed facts plus category-level pooled keywords. Brand-specific SEMrush pulls (the same treatment already given to whiskey and Fine Wine brands elsewhere on the site) would sharpen these product pages considerably.
3. **Saint Viviana has zero CSV volume of any kind** — not even noise. Recommend a dedicated export or a longer observation window before investing heavily in SEO copy for this brand relative to others in the batch.
4. **Site content quirk found during research, not a keyword issue:** Noughty's stocked "Chardonnay" (prod-na-wine-16) is, per its own on-site description, the same effervescent sparkling Chardonnay that anchors Noughty's `na-champagne-sparkling` brand hub — yet it's merchandised under "Non-Alcoholic White Wine" here. Worth flagging to whoever owns product taxonomy; not something SEO copy alone can resolve.
5. **Giesen and Surely have real, stocked sparkling wine but no existing `na-champagne-sparkling` brand hub** (confirmed via grep — only `fre`, `leitz`, `noughty`, `oddbird`, `chateau-del-ish`, `french-bloom`, `welchs`, `wolffer-estate` exist there). Worth a follow-up pass on that category once this one is implemented.
6. **Zeronimo (720, KD9) and Stella Rosa Naturals (1,000, KD6)** are the two strongest Part B (unstocked-brand) findings — both CSV-backed and real — worth a stocking conversation.
7. **13 real, confirmed Part A gaps** (missing expressions within brands already stocked) were found across 8 of the 11 brands in this batch — an unusually high hit rate compared to the Fine Wine and NA Champagne reports, suggesting this category's brands are actively expanding their lineups faster than the catalog has kept pace.
8. **"NON" (320, KD33) is flagged lower-confidence** — the query "non wine" is generic enough it may not cleanly isolate to the Aaron Trotman brand; don't use without independent verification if pursued further.
