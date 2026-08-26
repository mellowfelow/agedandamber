# Keyword Map — Non-Alcoholic Beer & Cider
**Site:** Aged And Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — research report only, nothing implemented. Covers the full NA Beer & Cider category: 15 stocked SKUs (14 NA beers across 11 brands, 1 NA cider). Fine Wine and Champagne are already fully SEO'd — see `keyword-map-wine-red.md` and `keyword-map-champagne-a-l.md` for the format this report matches.
**Methodology:** Real SEMrush export data — 2 category-level "non-alcoholic-beer" CSVs (100 rows each, deduped), 1 "non-alcoholic-cider" CSV (100 rows), and 11 brand-level CSVs (Athletic Brewing, Best Day Brewing, Budweiser-non-alcoholic, Corona ×2, Deschutes, Guinness ×2, Heineken, O'Douls, Partake Brewing, Sam Adams, Sierra Nevada, Stella Artois). KD 0–20 = T1 Quick Win, 21–35 = T2 Worth Targeting, 36+ = T3/background only. Where no SKU-specific row exists, marked **"confirmed real via WebSearch, not volume-backed."** No dedicated brand exports exist for the specific SKU sub-names "Just the Haze" (Sam Adams), "Trail Pass" (Sierra Nevada), or "Liberté" (Stella Artois) — those brand-level files return mostly the flagship alcoholic product's own search demand instead, flagged inline.
**Category note:** unlike prior wine/champagne batches, several brand exports here are **shared multi-brand files** (the Budweiser, O'Douls, and Best Day Brewing exports all pull in the same top-line "non alcoholic beer" category rows) — cross-referenced accordingly rather than double-counted.

---

## Phase 1 — Filter Summary

This category filtered differently than wine/champagne: less celebrity/song-title homonym noise, much more **brewery-tourism navigational noise** and **alcoholic-flagship-product noise** (since 8 of the 11 brands here are NA spinoffs of famous alcoholic beers, and their brand-level exports are dominated by search demand for the *original* beer, not the NA version).

**Alcoholic-flagship noise (the single largest category, likely 150,000+ combined across all brand files) — excluded because a sibling agent is covering the alcoholic Beer category separately with these same files:**
- **Budweiser:** the entire calorie/carb/ABV/nutrition cluster (`budweiser calories` 1,600, `budweiser alcohol percent` 1,300, `how many calories in a budweiser` 590, dozens of near-duplicate calorie/carb phrasings) — all about the flagship beer, zero NA relevance. Only rows with an explicit "zero," "non alcoholic," or "0.0" qualifier were kept.
- **Corona:** the entire alcohol-content/calories/"who owns Corona"/"where is Corona made"/gluten-free cluster across both Corona export files (`corona` 74,000, `corona beer` 33,100, `corona alcohol content` 5,400, and 60+ similar rows) — regular Corona Extra, not Corona Cero. Also dropped: `corona del mar newport beach california` (720, a Southern California place name) and the Chinese-character row `科罗纳` (880, foreign-language homonym).
- **Guinness:** the enormous calorie/ABV/history/"ball in the can"/pension-fund-trivia cluster across both files (`guinness` 90,500, `guinness calories` 6,600, `guinness stout history` 1,900, `why is there a ball in guinness beer` 390+390+390, etc.) — regular Guinness Draught Stout, not the NA Guinness 0.
- **Heineken:** the alcohol-content/logo/subsidiary/origin cluster (`heineken` 40,500, `heineken alcohol content` 2,900, `heineken subsidiaries` 1,300, `heineken logo` 1,600) plus a garbled spam-looking row (`casino020 orkenoy.com/pages/beer/cruks-omzeilen`, 590) and a Chinese-character row (`喜力`, 480) — dropped both as junk data.
- **Stella Artois:** the alcohol-percentage/calories/pronunciation/origin cluster (`stella` 90,500, `stella artois` 49,500, `alcohol percentage of stella beer` 1,600, `how to pronounce stella artois` 390) — regular Stella, not Liberté 0.0.
- **Sam Adams:** almost the entire export — Boston Lager, Octoberfest, Utopias, brewery-tour, and Boston Beer Company corporate content (`samuel adams` 40,500, `sam adams octoberfest` 5,400, `sam adams brewery tour` 1,600). Only 2 rows in the whole 100-row export touch the NA line at all.
- **Deschutes & Sierra Nevada — brewery-tourism/taproom navigational noise, a category not seen in prior wine/champagne batches:** both exports are dominated by physical-location and taproom queries with zero ecommerce-bottle-page relevance — `deschutes brewery portland` (2,900), `deschutes brewery bend` (1,300), `deschutes brewery tasting room` (1,300), `bend brewing company` (3,600), `sierra nevada asheville` (9,900), `sierra nevada brewing co sierra nevada way fletcher nc` (1,300), `sierra nevada taproom & restaurant menu` (390), `sierra nevada careers` (880), plus dozens of misspelling/local-pack variants. Combined, this is roughly **80,000+ volume across the two brands**, entirely irrelevant to a bottle retailer.

**"Zero" collision risk (flagged in the brief as a specific thing to check) — checked carefully, found clean.** Reviewed every "zero" row across the Budweiser, Heineken, and Guinness exports and the category files: no Coke Zero, Zero Motorcycles, or other unrelated "zero" branded content appeared anywhere in this data pull. Every "zero"/"0.0" row found (`bud zero`, `budweiser zero alcohol`, `heineken zero beer`, `guinness 0.0 non alcoholic beer`, `stella artois 0.0`) was genuinely about the beer brand's NA line. No collision noise to report here — a cleaner pull than the brief anticipated.

**Dry January / Sober October — checked, not present in this data pull.** Unlike the brief's expectation, neither the category-level nor any brand-level export contains a dedicated "dry january" or "sober october" row. The underlying seasonal demand is real (general knowledge) and still worth a blog angle, but it is **not volume-backed in this specific batch of exports** — flagged so nobody assumes a number that isn't there.

**Homebrewing / DIY NA-beer content — flagged as blog candidate per the brief, not product-page material.** `how to brew non alcoholic beer` (390, KD20), `how to make non alcoholic beer` (390, KD23), `how do they make non alcoholic beer` (590, KD28), `how do you make non alcoholic beer` (480, KD25), `how to make beer from non alcoholic beer` (390, KD21), `how to make alcoholic beer from non alcoholic beer` (390, KD24 — an ironic reverse-intent query, someone trying to re-add alcohol), `how do you make ginger beer non alcoholic` (170, KD32). Combined **~2,300+**, genuinely real and recurring, but educational/DIY rather than transactional.

**Pregnancy and recovery/sobriety clusters — kept per brief instruction as genuine purchase-adjacent informational content, not noise, but flagged for careful, non-medical-advice handling:**
- Pregnancy: `can you drink non alcoholic beer while pregnant` (880, KD15), `can pregnant women drink non alcoholic beer` (590, KD20), `is non alcoholic beer safe during pregnancy` (480, KD15), `can i drink non alcoholic beer while pregnant` (480, KD8), `can pregnant woman drink non alcohol beer` (320, KD24), `is non alcoholic beer safe for pregnancy` (320, KD14), plus a dozen more low-volume phrasing variants — combined well over **3,500**. Real demand; content should point to a doctor rather than assert medical fact (NA beer in the US legally contains up to 0.5% ABV, which is not universally agreed to be "safe" in pregnancy).
- Recovery/sobriety: `does drinking non alcoholic beer break sobriety` (320, KD4), `can alcoholics drink non alcoholic beer` (260, KD12), `should alcoholics drink non alcoholic beer` (210, KD7), `can non alcoholic beer get you drunk` (320, KD21), `can you get drunk on non alcoholic beer` (260, KD15). Combined **~1,400**. This ties directly into a real, catalog-specific fact (see O'Doul's FAQ below): O'Doul's and some NA beers are brewed to ~0.4% ABV, not 0.0%, which genuinely matters for someone in recovery — a legitimate, differentiating content angle, not clickbait.

**Minor/legal-purchase-age cluster — real, kept as hub-level FAQ material given the site's 21+ gate:** `can minors buy non alcoholic beer` (480, KD16), `do you have to be 21 to buy non-alcoholic beer` (320, KD9), `can you buy non alcoholic beer at 18` (480, KD6), `do you need an id to buy non alcoholic beer` (170, KD9). Genuinely useful to address given Aged And Amber's site-wide 21+ signature-verification gate, even though NA beer itself is legal for minors to purchase in most US states — worth a clear, accurate FAQ rather than silence.

**Gout cluster — real, niche, kept as a blog candidate:** `does non alcoholic beer cause gout` (210, KD7), `can non alcoholic beer cause gout` (210, KD3), `does non alcoholic beer affect gout` (210, KD12). Combined ~630, small but a genuinely underserved, specific health question.

**Ginger beer — different product entirely, dropped from product-page assignment.** `ginger beer non alcoholic` (2,400, KD10), `non alcoholic ginger beer` (1,600, KD9), `is ginger beer non alcoholic` (320, KD22) — ginger beer is a soda, not a beer style; zero relevance to any of the 15 stocked SKUs. Not used anywhere below.

**Apple cider (juice) homonym — the dominant noise pattern in the cider export, ~450,000+ combined dropped.** The `non-alcoholic-cider` export is almost entirely about literal fresh-pressed apple cider (the American non-alcoholic juice, not a spinoff of alcoholic hard cider): `cider` (368,000, KD73), `apple cider` (60,500, KD35), `apple and cider` (12,100, KD71), plus the enormous "cider vs. apple juice" difference-cluster (`what's the difference between apple juice and apple cider` 3,600, `difference between apple cider and apple juice` 2,400, `apple juice vs cider` 1,900, and a dozen more phrasing variants worth another 8,000+ combined). None of this is hard-cider-adjacent shopping intent — it's a totally different product category. Only the explicitly "non-alcoholic sparkling [apple] cider" branded subset (i.e., terms describing a dealcoholized version of alcoholic hard cider) was kept for the product page below.
**Also dropped from the cider file:** `original sin cider` (1,900, KD16) and `original sin hard cider` (1,000, KD8) — Original Sin is a real, established **alcoholic** hard cider brand; irrelevant to the stocked NA cider SKU.

**Partake — bare brand term is a generic-word homonym, dropped.** `partake` alone (14,800, KD65) is overwhelmingly the common English verb ("to partake in/of"), not brand navigational demand — confirmed by the SERP mix and by the presence of crossword-clue rows (`partaker of brews crossword` 20, `partaker of brews crossword clue` 20, `partaker of brews say` 20) riding the same term. Only rows with "brewing," "beer," "na," or "ipa" attached were treated as real Partake Brewing demand.

Net: roughly **55–60% of the total raw rows across all 17 exports pulled** were noise (alcoholic-flagship trivia, brewery tourism, apple-juice homonyms, generic-word collisions, garbled/spam rows, foreign-language duplicates) and excluded from the tables below — a notably higher noise rate than the wine/champagne batches, driven almost entirely by the fact that most of these brands' search demand belongs to their much bigger alcoholic sibling product.

---

## Category Keyword Table — `/na-beer-cider/non-alcoholic-beer/`

| Term | Vol | KD |
|---|---|---|
| non alcoholic beer | 60,500 | 38 |
| non alcoholic | 14,800 | 57 (background/root term — too broad to target directly) |
| best non alcoholic beer | 9,900 | 36 |
| alcohol free beer | 6,600 | 35 |
| best na beer | 6,600 | 48 |
| na beer | 6,600 | 35 |
| na beers | 5,400 | 39 |
| low alcohol beer | 5,400 | 14 |
| non alcoholic beers | 4,400 | 33 |
| near beer | 3,600 | 46 |
| non alcoholic beer near me | 3,600 | 15 |
| non-alcoholic beer | 3,600 | 38 |
| non alcoholic ipa | 2,400 | 26 |
| na beer brands | 1,900 | 33 |
| non alcoholic beer brands | 1,900 | 39 |
| non-alcoholic beer near me | 1,900 | 14 |
| no alcohol beer | 1,600 | 34 |
| non alcoholic liquor | 1,600 | 41 |
| best tasting non alcoholic beer | 1,300 | 37 |
| gluten free non alcoholic beer | 1,300 | 4 |
| non alcoholic malt beverage | 1,000 | 30 |
| non alcoholic stout | 1,000 | 15 |
| non alcoholic lager | 880 | 34 |
| non alcoholic pumpkin beer | 880 | 9 (seasonal, Oct/Nov spike) |
| non alcoholic stout beer | 880 | 22 |

**FAQs:** "Does non-alcoholic beer have alcohol in it?" (2,400, KD17 — real, high-value: US "non-alcoholic" beer legally allows up to 0.5% ABV, worth stating plainly on the hub) · "Is non-alcoholic beer bad for you?" (2,400, KD11) · "How is non-alcoholic beer made?" (1,300, KD32) · "Is NA beer bad for you?" (1,000, KD27) · "Can you drink non-alcoholic beer while pregnant?" (880, KD15 — point to a doctor, don't assert) · "What is non-alcoholic beer?" (590, KD44) · "How much alcohol is in non-alcoholic beer?" (480, KD17) · "Do you have to be 21 to buy non-alcoholic beer?" (320, KD9 — genuinely worth addressing given the site's 21+ gate).

**Noise flag:** none of the brewery-tourism, alcoholic-flagship-nutrition, or apple-juice-homonym terms above belong on this hub despite raw volume in their source exports — see Phase 1.

---

## Category Keyword Table — `/na-beer-cider/non-alcoholic-cider/`

Much thinner real signal than the beer hub — most of the source export is apple-juice homonym noise (see Phase 1). What's left after filtering:

| Term | Vol | KD |
|---|---|---|
| non alcoholic sparkling cider | 2,900 | 14 |
| non-alcoholic sparkling apple cider | 2,900 | 8 |
| sparkling apple cider non alcoholic | 1,900 | 7 |
| non alcoholic cider | 1,300 | 15 |
| non alcoholic apple cider | 880 | 8 |
| apple cider non alcoholic | 880 | 7 |
| sparkling cider non alcoholic | 590 | 6 |
| non-alcoholic cider | 480 | 12 |
| apple cider drinks non alcoholic | 590 | 25 |

**FAQ:** "Is non-alcoholic apple cider the same as regular apple cider?" (ties to `is apple cider alcoholic` 880/KD22 and `does apple cider have alcohol` 480/KD26) — genuinely necessary disambiguation: in the US, "apple cider" traditionally means unfiltered, non-alcoholic pressed juice, while this product is a sparkling, dealcoholized cider styled after alcoholic hard cider (0.0% ABV) — three different things share overlapping names, and the FAQ should say so plainly.

---

## Phase 3 — Per-Product Keyword Assignments

### 1. prod-na-beer-01 — Athletic Brewing Free Wave Hazy IPA
Primary: **athletic brewing free wave hazy ipa** (260, KD7, T1 — exact match)
Secondary: athletic free wave (480, KD8) · athletic brewing hazy ipa (260, KD8) · non alcoholic hazy ipa (590, KD21) · athletic brewing non alcoholic beer (2,400, KD72) · non alcoholic ipa (2,400, KD26) · athletic beer (9,900, KD51 — brand head term)
FAQ: none SKU-specific found; defer to the Athletic Brewing brand hub FAQs below.

### 2. prod-na-beer-02 — Athletic Brewing Run Wild IPA
Primary: **athletic brewing run wild ipa** (1,900, KD17, T1)
Secondary: athletic brewing run wild ipa non alcoholic beer (2,900, KD24) · run wild ipa (880, KD25) · athletic run wild (480, KD23) · athletic brewing company run wild ipa (590, KD22) · athletic brewing non-alcoholic run wild ipa (320, KD24) · athletic brewing co run wild ipa (210, KD24)
FAQ: none SKU-specific; defer to brand hub.

### 3. prod-na-beer-03 — Athletic Brewing Upside Dawn Golden Ale
Primary: **athletic brewing upside dawn** (590, KD17, T1)
Secondary: athletic brewing upside dawn golden ale can (320, KD13) · athletic brewing non-alcoholic upside dawn golden ale (260, KD15) · non alcoholic ale (320, KD31) · athletic brewing non alcoholic beer (2,400, KD72) · athletic brewing (33,100, KD65 — brand head term, background)
FAQ: none SKU-specific; defer to brand hub.

### 4. prod-na-beer-04 — Best Day Brewing Electro-Lime Mexican-Style Lager
Primary: **best day brewing electro lime** (320, KD14, T1 — exact match)
Secondary: best day brewing (5,400, KD35) · best day na beer (320, KD8) · best day non alcoholic beer (320, KD5) · non alcoholic lager (880, KD34) · na beer brands (1,900, KD33) · bestday brewing (320, KD47 — misspelling variant, background)
FAQ: none SKU-specific found.

### 5. prod-na-beer-05 — Budweiser Zero Non-Alcoholic Beer
Primary: **bud zero** (1,300, KD15, T1)
Secondary: budweiser non alcoholic beer (1,300, KD14) · budweiser zero alcohol (480, KD18) · budweiser non alcoholic (590, KD15) · budweiser zero beer (390, KD10) · non alcoholic budweiser (390, KD19) · budweiser zero non alcoholic beer (320, KD5)
FAQ: "Is Bud Zero really 0% alcohol?" (ties to the real, recurring `budweiser zero alcohol` / `bud zero alcohol content` 170/KD15 demand) — real answer: Budweiser Zero is brewed then alcohol-removed and labeled 0.0% ABV in the US.

### 6. prod-na-beer-06 — Corona Cero Non-Alcoholic Mexican Lager
Primary: **corona cero** (1,000, KD10, T1 — exact match, CSV-backed)
Secondary: corona non alcoholic beer (4,400, KD20) · corona na beer (1,900, KD20) · non alcoholic beer corona (1,000, KD18) · corona na (880, KD24) · does corona non alcoholic beer have alcohol (210, KD19)
FAQ: "Does Corona Cero have any alcohol?" (210, KD19, CSV-backed) — real answer: Corona Cero is brewed to 0.0% ABV, distinct from the flagship Corona Extra.

### 7. prod-na-beer-07 — Deschutes Black Butte Non-Alcoholic Porter
Primary: no direct volume-backed row for the NA-specific SKU — **confirmed real via WebSearch, not volume-backed.** Deschutes' non-alcoholic Black Butte Porter is a real spinoff of Black Butte Porter, one of the best-selling craft porters in the US.
Secondary (5): deschutes non alcoholic beer (390, KD18) · non alcoholic stout (1,000, KD15 — closest style-adjacent category term; porter and stout are commonly conflated in search) · non alcoholic stout beer (880, KD22) · deschutes beer (1,000, KD32) · deschutes brewery black butte porter (590, KD7 — regular alcoholic Porter; real brand-level proof, but a different, non-NA product — use cautiously in copy)
FAQ: none forced.
**Note:** the Deschutes export is almost entirely brewery-tourism/taproom navigational noise (see Phase 1) — this SKU has the thinnest real data of any beer in the batch. Recommend a dedicated "Deschutes non-alcoholic" or "Black Butte NA" SEMrush pull before finalizing copy.

### 8. prod-na-beer-08 — Guinness 0 Non-Alcoholic Draught Stout
Primary: **guinness non alcoholic beer** (1,600, KD26, T2)
Secondary: guinness 0.0 non alcoholic beer (880, KD22) · non alcoholic stout (1,000, KD15) · non alcoholic stout beer (880, KD22) · is guinness a stout (1,600, KD18 — brand-fact FAQ material) · draught guinness stout (6,600, KD16 — regular Guinness Draught, brand-level proof, different SKU)
FAQ: "Does Guinness 0 taste like real Guinness?" (ties to the large, real `what does guinness taste like` 2,900/KD19 demand cluster) — real answer: Guinness 0 is brewed the same way as Guinness Draught and then dealcoholized, keeping the roasted-malt character and the nitro-poured creamy head.

### 9. prod-na-beer-09 — Heineken 0.0 Non-Alcoholic Beer
Primary: **heineken 0.0 non alcohol beer** (3,600, KD12, T1)
Secondary: heineken 0.0 beer (2,400, KD22) · heineken non alcoholic beer (1,900, KD11) · heineken 0.0 non alcoholic beer (1,000, KD19) · heineken beer non alcoholic (720, KD9) · heineken zero alcohol beer (720, KD9) · heineken zero beer (590, KD7)
FAQ: none SKU-specific beyond the hub FAQs — the demand here is almost entirely navigational/transactional, not informational.

### 10. prod-na-beer-10 — O'Douls Premium Non-Alcoholic Beer
Primary: **o'doul's beer** (2,400, KD12, T1)
Secondary: o douls non alcoholic beer (880, KD6) · o'douls non alcoholic beer (880, KD17) · odouls (4,400, KD9) · o douls (2,400, KD9) · beer o'doul's (1,600, KD13) · non alcoholic beer o'doul's (720, KD9)
FAQ: "Does O'Doul's have any alcohol?" (ties to `does odouls have alcohol` 170, KD20, CSV-backed) — real, important answer: O'Doul's contains trace alcohol (about 0.4% ABV under federal labeling), unlike newer 0.0%-ABV brews such as Heineken 0.0 or Athletic Brewing — a genuinely material distinction for shoppers in recovery or otherwise avoiding all alcohol (see the Phase 1 sobriety-cluster note).

### 11. prod-na-beer-11 — Partake Brewing Pale Ale
Primary: **partake non alcoholic beer** (320, KD13, T1)
Secondary: partake brewing (880, KD11) · partake na beer (320, KD4) · partake beer (320, KD10) · partake brewing non alcoholic beer (110, KD14) · partake brewing pale ale (20, KD11 — exact SKU match, thin volume but a direct hit)
FAQ: none forced; this is the smallest, most niche brand in the batch (bare "partake" itself is excluded as a generic-word homonym — see Phase 1).

### 12. prod-na-beer-12 — Sam Adams Just the Haze Non-Alcoholic IPA
Primary: no direct row for "Just the Haze" — **confirmed real via WebSearch, not volume-backed.** Just the Haze is Samuel Adams' real non-alcoholic hazy IPA, one of the more prominent big-brewer NA launches; simply absent from this 100-row export (which is 98% flagship Boston Lager/Octoberfest/brewery-tour content).
Secondary (4): sam adams non alcoholic beer (880, KD9) · sam adams na beer (720, KD11) · non alcoholic hazy ipa (590, KD21) · non alcoholic ipa (2,400, KD26)
FAQ: none forced.
**Note:** recommend a dedicated "Sam Adams non alcoholic" or "just the haze" SEMrush pull — this export is almost entirely unusable for this SKU.

### 13. prod-na-beer-13 — Sierra Nevada Trail Pass IPA
Primary: no direct row for "Trail Pass" — **confirmed real via WebSearch, not volume-backed.** Trail Pass is Sierra Nevada's real NA IPA line (also sold in a Golden Ale/Amber variant); absent from this export.
Secondary (4): sierra nevada non alcoholic beer (720, KD17) · sierra nevada na beers (480, KD17) · non alcoholic ipa (2,400, KD26) · sierra nevada ipa (2,900, KD23 — regular alcoholic IPA, brand-level proof of demand, different product)
FAQ: none forced.
**Note:** like Deschutes, the Sierra Nevada export is dominated by brewery-tourism/taproom noise (Asheville, Mills River, restaurant menus) — recommend a dedicated "Sierra Nevada Trail Pass" pull.

### 14. prod-na-beer-14 — Stella Artois Liberté 0.0 Non-Alcoholic Beer
Primary: **stella artois non alcoholic** (320, KD7, T1)
Secondary: stella non alcoholic beer (720, KD9) · stella artois 0.0 (320, KD10) · non alcoholic lager (880, KD34) · stella artois (49,500, KD36 — brand head term, background only)
FAQ: none forced.
**Note:** "Liberté" — the SKU's actual sub-brand name — shows **zero dedicated search volume** anywhere in this export. Real shoppers search "stella artois non alcoholic" or "stella artois 0.0," not the French name. Recommend leading the page H1/title with the searched terms and treating "Liberté" as a secondary, descriptive mention rather than the primary on-page phrase.

### 15. prod-na-14 — Orchard Reserve Non-Alcoholic Apple Cider
Primary: **non alcoholic apple cider** (880, KD8, T1)
Secondary: non alcoholic cider (1,300, KD15) · non alcoholic sparkling cider (2,900, KD14) · non-alcoholic sparkling apple cider (2,900, KD8) · sparkling apple cider non alcoholic (1,900, KD7) · apple cider non alcoholic (880, KD7)
FAQ: "Is non-alcoholic apple cider the same as regular apple cider?" (ties to `is apple cider alcoholic` 880/KD22 and `does apple cider have alcohol` 480/KD26) — real answer: no — this product is a sparkling, dealcoholized cider styled after alcoholic hard cider (0.0% ABV), distinct from both traditional non-alcoholic pressed apple juice and from alcoholic hard cider.
**Note:** "Orchard Reserve" returns no dedicated brand search volume anywhere in the export — it reads as a private-label/store name rather than a nationally recognized brand. No brand-navigational keyword exists to target; lean entirely on the category and disambiguation terms above.

---

## Phase 4 — Brand Hub Drafts

Only **Athletic Brewing** clears the 2+ stocked SKU bar in this category (3 SKUs: Free Wave Hazy IPA, Run Wild IPA, Upside Dawn Golden Ale). Every other brand in this batch has exactly 1 stocked SKU, so no other brand hub is warranted per the standard threshold.

### Athletic Brewing
**categoryLabel:** Athletic Brewing

**Hook:** Athletic Brewing Company was founded in 2017 by Bill Shufelt — a former Wall Street analyst who quit drinking and couldn't find a genuinely good-tasting non-alcoholic beer — alongside brewmaster John Walker, based in Stratford, Connecticut, with a second brewery in San Diego. It's widely credited with kicking off the modern "good-tasting" NA beer boom in the US by brewing beers from the ground up with proprietary fermentation techniques, rather than simply stripping the alcohol out of a regular beer afterward. That approach shows up directly in the search data: "athletic brewing" alone pulls **33,100/mo**, more than 5x the volume of any other single NA beer brand in this batch, and dwarfs even the combined demand for Corona Cero, Heineken 0.0, and Guinness 0 together.

**FAQs:**
1. Who founded Athletic Brewing? (ties to `who owns athletic brewing`, 390, KD36) — Bill Shufelt and John Walker, founded 2017 in Stratford, Connecticut.
2. Is Athletic Brewing beer really non-alcoholic? (ties to the broad `athletic brewing non alcoholic beer` demand, 2,400, KD72) — Yes; all core Athletic Brewing beers are brewed to below 0.5% ABV, the US legal threshold for "non-alcoholic."
3. Does Athletic Brewing taste like real beer? — no direct SKU-level PAA row found, but a legitimate, high-value FAQ given the brand's entire reputation rests on taste; answer using the from-scratch-fermentation fact above rather than the "dealcoholized" method used by most legacy brewers.

**Secondary brand keywords:** athletic brewing (33,100, KD65) · athletic beer (9,900, KD51) · athletic brewing company (6,600, KD63) · athletic non alcoholic beer (4,400, KD59) · athletic brewing non alcoholic beer (2,400, KD72) · athletic ipa (1,300, KD15)

---

## Phase 8 — Gap Analysis

### Part A — Real missing expressions within brands already stocked

| Brand (stocked SKU) | Missing expression | Primary keyword | Support keywords |
|---|---|---|---|
| Budweiser (Zero stocked) | Bud Light Zero | bud light zero (590, KD15, T1) | bud light non alcoholic beer (590, KD29) · bud light na beer (320, KD28) · non alcoholic bud light (210, KD21) · bud light zero alcohol (140, KD15) — **strongest single Part A finding, ~1,850 combined**, a real, separate Anheuser-Busch NA SKU not currently stocked |
| Best Day Brewing (Electro-Lime Lager stocked) | Best Day Brewing Kölsch | best day brewing kolsch (260, KD4, T1) | best day brewing kölsch (170, KD3, accented-character duplicate) — real, combined ~430, a distinct stocked-brand flavor |
| Best Day Brewing (Electro-Lime Lager stocked) | Best Day Brewing Hazy IPA | best day brewing hazy ipa (170, KD14, T1) | craft na beer (590, KD29) — real, WebSearch-confirmed additional flavor in the brand's real lineup |
| Partake Brewing (Pale Ale stocked) | Partake Brewing IPA | partake ipa (170, KD9, T1) | partake brewing ipa (140, KD15) — real, combined ~310, a genuinely distinct stocked-brand SKU |
| Athletic Brewing (3 SKUs stocked) | Athletic Brewing Oktoberfest (seasonal) | athletic brewing oktoberfest (260, KD20, T1) | athletic oktoberfest (320, KD10) — real, seasonal, combined ~580 |
| Athletic Brewing (3 SKUs stocked) | Athletic Lite | athletic brewing lite (210, KD16, T1) | not otherwise volume-backed, but a real, current Athletic Brewing SKU |
| Athletic Brewing (3 SKUs stocked) | Athletic Brewing gluten-reduced line | athletic brewing gluten free (260, KD22, T1) | real, ties to a genuine product-line differentiator worth a copy mention even without a dedicated product page |
| Sierra Nevada (Trail Pass IPA stocked) | Trail Pass Golden Ale/Amber | — | not volume-backed in this export; WebSearch-confirmed real second flavor in the current Trail Pass lineup |
| O'Douls (Premium stocked) | O'Doul's Amber | — | not volume-backed in this export; WebSearch-confirmed real second O'Doul's flavor, lower confidence than the above findings |

### Part B — Real unstocked NA beer/cider brands with genuine search demand

| Brand | Primary keyword | Support keywords | Confidence |
|---|---|---|---|
| Blue Moon NA | blue moon non alcoholic beer (1,600, KD11, T1) | — | **CSV-backed**, category export — highest single unstocked-brand volume found in this batch |
| Clausthaler | clausthaler non alcoholic beer (1,300, KD15, T1) | — | **CSV-backed**, category export — long-established German NA beer brand |
| Coors Edge | coors non alcoholic beer (1,300, KD10, T1) | — | **CSV-backed**, category export |
| Bero (Tom Holland's NA beer) | tom holland non alcoholic beer (1,000, KD47, T3) | — | **CSV-backed**, category export — real celebrity-brand crossover (actor Tom Holland co-founded Bero, launched 2024); a genuinely timely pop-culture hook similar to the Snoop Dogg/19 Crimes pattern found in the wine batch |
| Go Brewing | go brewing (5,400, KD18, T1) | go brewed (2,400, KD13) · go na beer (170, KD7) · go brewery (260, KD25) | **CSV-backed**, category export — a well-regarded, founder-driven independent NA craft brewery; combined volume rivals several stocked brands |
| Busch NA | — | busch na calories (480, KD22) · calories in busch na (170, KD9) | **CSV-backed** (Budweiser export) but thin — only calorie-query volume, no direct "busch na beer" navigational row found |
| WellBeing Brewing, Bravus, Surreal Brewing | — | — | Real, known NA brewers per general knowledge, but **no CSV volume surfaced anywhere in this data pull** — do not present as high-demand without a dedicated export |
| Michelob Ultra NA | — | — | Real product per general knowledge; **no dedicated export was available and no rows appeared in the Budweiser file** — recommend a dedicated pull before using |

**Flagged, not verified — do not use without confirmation:** `big day brewing` (1,000, KD52) and `good day brew co` / `good day brewery` / `good day brewing` (880/480/260, from the Best Day Brewing export) — these read as either genuinely separate small NA brands or search-engine typo/confusion variants of "Best Day Brewing." Not confident enough to treat as either a real competitor or as Best Day's own misspelling traffic; recommend a manual SERP check before using either way. Similarly, `superbeer` (390, KD27) and `nr beer` (880, KD51) are ambiguous — possibly real niche brand names, possibly generic phrasing — flagged as uncertain rather than used.

---

## Blog Topic Candidates

| Topic | Anchor keyword(s) | Notes |
|---|---|---|
| Is non-alcoholic beer really alcohol-free? | does non alcoholic beer have alcohol (2,400, KD17) · does na beer have alcohol (720, KD20) · is there alcohol in non alcoholic beer (390, KD15) | Foundational pillar; ties directly to the O'Doul's 0.4%-ABV fact below |
| 0.0% vs. "non-alcoholic": what the label actually means | how much alcohol is in non alcoholic beer (480, KD17) · does odouls have alcohol (170, KD20) | Genuinely differentiating — most of this catalog's brands are true 0.0%, but O'Doul's is ~0.4%; worth spelling out once and linking from every product page |
| Is non-alcoholic beer safe during pregnancy? | can you drink non alcoholic beer while pregnant (880, KD15) · can pregnant women drink non alcoholic beer (590, KD20) · is non alcoholic beer safe during pregnancy (480, KD15) | Large, real, sensitive cluster (~3,500+ combined) — point to medical guidance, don't assert |
| How is non-alcoholic beer actually made? | how is non alcoholic beer made (1,300, KD32) · how do they make non alcoholic beer (590, KD28) | Sets up the Athletic Brewing (fermented-from-scratch) vs. dealcoholized-brewing distinction used across several brand hooks above |
| Does non-alcoholic beer break sobriety? | does drinking non alcoholic beer break sobriety (320, KD4) · can alcoholics drink non alcoholic beer (260, KD12) · should alcoholics drink non alcoholic beer (210, KD7) | Sensitive recovery-adjacent cluster (~800+ combined) — handle responsibly, cite the trace-alcohol distinction, don't give medical/recovery advice |
| Best non-alcoholic beers for Dry January | best non alcoholic beer (9,900, KD36) · best na beer (6,600, KD48) | Large real head-term demand, but note: no dedicated "dry january" row surfaced in this data pull (see Phase 1) — seasonal angle is real per general knowledge, just not volume-confirmed here |
| Non-alcoholic apple cider vs. hard cider vs. apple juice | is apple cider alcoholic (880, KD22) · does apple cider have alcohol (480, KD26) · is sparkling cider alcoholic (260, KD22) | Directly supports the single cider SKU; real, combined 1,600+, and a necessary disambiguation given three different products share overlapping names |
| Homebrewing non-alcoholic beer at home | how to brew non alcoholic beer (390, KD20) · how to make non alcoholic beer (390, KD23) · how do you make ginger beer non alcoholic (170, KD32) | Flagged in Phase 1 as DIY/educational, not product-page material — combined ~1,500+ |
| Non-alcoholic beer and gout: what the research actually says | does non alcoholic beer cause gout (210, KD7) · can non alcoholic beer cause gout (210, KD3) | Small (~630 combined) but genuinely underserved, specific health-question content |
| Meet Bero: the celebrity-backed NA beer everyone's asking about | tom holland non alcoholic beer (1,000, KD47) | Not a stocked brand — pure category-awareness/pop-culture content, useful top-of-funnel traffic play regardless |
| Athletic Brewing vs. everything else: why one NA beer brand dominates search | athletic brewing (33,100, KD65) vs. every other brand's much smaller volume in this batch | Comparison/brand-story angle, natural internal-linking hub for all 3 stocked Athletic SKUs |

---

## What to check

1. **Deschutes and Sierra Nevada both have unusually thin NA-specific data** — both brand exports are dominated by brewery-tourism/taproom navigational content (see Phase 1), leaving Black Butte NA Porter and Trail Pass IPA as the two weakest-supported product pages in this batch. Recommend a dedicated "[brand] non alcoholic" SEMrush pull for both before finalizing copy.
2. **Sam Adams export is almost entirely unusable for Just the Haze** — only 2 of 100 rows touch the NA line at all; same recommendation as above.
3. **"Liberté" (Stella Artois) carries zero search volume** — real shoppers search "stella artois non alcoholic" or "stella artois 0.0," never the French sub-brand name. Lead page copy with the searched terms.
4. **"Orchard Reserve" (the stocked NA cider) reads as a private-label name** — no brand-navigational search volume exists anywhere in the cider export. The product page has to work entirely off category/disambiguation terms; there's no brand-equity keyword to lean on.
5. **Bud Light Zero (Part A) and Blue Moon NA / Clausthaler / Coors Edge / Go Brewing (Part B) are the strongest gap findings in this report** — Bud Light Zero sits inside an already-stocked brand family (Budweiser); the four Part B brands each carry real, CSV-confirmed four-figure monthly volume and aren't in the catalog at all. Worth a stocking conversation independent of SEO.
6. **"Big Day Brewing" / "Good Day Brew Co" and "superbeer" / "nr beer" are flagged uncertain, not used** — could be real small brands or search-engine confusion/typo traffic around Best Day Brewing; don't use any of them in copy without a manual SERP check first.
7. **No Dry January / Sober October volume surfaced in this specific data pull**, unlike what the brief anticipated — the seasonal blog angle is still real and worth pursuing, just flagged as not volume-backed in this batch specifically.
8. **Bero (Tom Holland's brand) and Go Brewing are both real, current, and carry meaningful volume** (1,000/KD47 and 5,400/KD18 respectively) — worth knowing about for competitive-landscape awareness even though neither is a stocking recommendation from this pass.
