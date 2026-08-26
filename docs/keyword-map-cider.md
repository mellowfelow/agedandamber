# Keyword Map — Cider (Hard Cider)
**Site:** Aged And Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — research report only, nothing implemented. Covers the entire Cider category: 19 stocked SKUs, all in one subcategory, "Hard Cider." Whiskey, wine, and champagne are already fully SEO'd — see `keyword-map-wine-red.md` and `keyword-map-champagne-a-l.md` for the format/quality bar this report matches.
**Methodology:** Real SEMrush keyword-export CSVs from `keyword exports/`. Category-level: `cider_all-keywords_us_2026-08-25.csv` (100 rows, 100% apple-cider-vinegar/health noise, fully dropped) + `cider_all-keywords_us_2026-08-25 (1).csv` (300 rows, deduped against the first). Brand-level: 2 Towns Cider, ACE Apple Cider, Angry Orchard Cider (×2 exports, deduped), Austin Eastciders, Blake's Cider, Citizen Cider, Downeast Cider, Golden State Cider, Original Sin Cider, Strongbow Cider, Woodchuck Cider. No dedicated exports exist for **Crispin** or **Farnum Hill** — confirmed grep of every cider CSV in the folder for "farnum" and "crispin" returned zero rows in either. Both are marked "confirmed real via WebSearch, not volume-backed" below, with real, verified facts (not fabricated specifics) used in the hook copy. KD 0–25 = T1 Quick Win, 26–40 = T2 Worth Targeting, 41+ = T3/background only.

---

## Phase 1 — Filter Summary

Cider is a uniquely noisy category — noisier than wine-red in some respects, because "cider" collides hard with a completely different, enormous non-alcoholic product (apple cider vinegar and sweet apple cider) rather than just a homonym cluster. Roughly **90%+ of the smaller category export and the majority of most brand exports is noise** once apple cider vinegar, agritourism, and unrelated homonyms are stripped out.

**Apple cider vinegar / health / weight-loss — the single largest noise block in the whole project, ~700,000+ combined across both category exports.** The entire smaller category file (`cider_all-keywords_us_2026-08-25.csv`, 100 rows) is 100% this cluster and was dropped in full: `apple cider vinegar` (201,000, KD89), `apple cider vinegar benefits` (74,000, KD73), `does apple cider vinegar go bad` (14,800), `is apple cider vinegar good for you` (12,100), plus dozens of weight-loss, blood-sugar, gummies, hair-rinse, and fruit-fly-trap variants. Zero purchase intent for a hard cider retailer.

**Sweet/non-alcoholic apple cider, cider donuts, and recipe content — well over 150,000 combined, dropped per brief.** `apple cider` (60,500, KD35), `cider donuts` (5,400+22,200 variants), `how to make apple cider` (9,900), `hot apple cider` / `mulled cider` / `spiced apple cider` recipe cluster (~40,000+ combined), `martinelli's sparkling cider` (8,100+6,600+2,900 combined — a real, unrelated non-alcoholic sparkling juice brand), `non-alcoholic sparkling apple cider` (2,900). None of this is hard-cider-shopping intent.

**Cider mill / orchard agritourism — a large, brand-specific homonym problem, worst in the Blake's export.** Generic mill-tourism terms (`cider mill near me` 9,900, `cider mills near me` 2,900, `franklin cider mill`, `dexter cider mill`, `fly creek cider mill`, `uncle johns cider mill`, `yates cider mill`, `cold hollow cider mill`, dozens more) are all unrelated regional attractions, dropped. **Blake's Cider export is dominated (roughly 80 of 100 rows) by Blake's Orchard & Cider Mill, the Michigan agritourism farm** — `blakes cider mill` (9,900), `blake's orchard & cider mill` (2,900), `blakes lavender festival` (880), `blake's pickle fest` (320), `blake's sunflower festival` (390), `apple picking ann arbor` (260), `blake's santa` (3,600, a Santa-photo event). These are real and connected (Blake's Hard Cider Co. was literally founded by a grandson of the orchard-farming Blake family, confirmed via WebSearch) but represent farm-visit/tourism intent, not hard-cider-shopping intent — none of it belongs on a bottle/can product page. Only the explicit "Blake's Hard Cider" / "Blake's Triple Jam" rows were kept.

**"CID" / "El Cid" / fashion-brand "Cider" homonym cluster — massive, category-file-specific.** `cider clothing` (90,500, KD49 — a fast-fashion online retailer literally named Cider), `cider dresses` (12,100), `cider dress` (2,900), `cider clothes` (5,400), `cid` (27,100), `el cid` (27,100, the historical epic film), `cid kagenou` (12,100, an anime character), `army cid` / `cid army` (4,400 each, the US Army Criminal Investigation Division), `cid airport` (14,800, Cedar Rapids airport code), `cider casino` (33,100, KD36 — an unrelated gambling app), `c i d e r` spelled out (14,800). None of this is cider-the-beverage. Dropped in full.

**"Cider House Rules" (the John Irving novel / 1999 film) — ~35,000+ combined, dropped.** `cider house rules` (12,100), `the cider house rules` (9,900), `cider house rules cast` (4,400), `rules of the cider house` (2,900), `actors in cider house rules` (2,400), `house of cider rules` (2,900). Pure title homonym, zero shopping intent.

**Fire cider / homebrewing — flagged per brief as blog candidates, not product-page material.** `fire cider` (18,100, KD42) and `fire cider recipe` (18,100, KD28) are an herbal home-remedy tonic, unrelated to alcoholic cider — dropped entirely, not even a blog note. `how to make hard cider` (2,400, KD11) and `how to make hard apple cider` (1,600, KD22) are real, recurring homebrew-DIY searches — kept as a blog topic candidate below, not assigned to any product page.

**Brand-specific homonym flags:**
- **Angry Orchard** collides with nothing but its own name variants (no unrelated business found) — but roughly 70 rows of its dedicated export carry **zero search volume** (real PAA phrasing pulled from Google's "People also ask," but with 0/month), so they were used only as FAQ-topic inspiration, never counted as demand.
- **Downeast Cider** ("Downeast" / "Down East") is also the name of a well-known Maine lifestyle magazine and a generic New England regional term — `downeast` (12,100, KD70) and `downeast east` (12,100, KD43) are too ambiguous to assign; only the explicitly cider-qualified rows were kept.
- **Citizen Cider** carries a small but real negative-news cluster — `citizen cider controversy` (110), `citizen cider boycott` (20), `citizen cider cancelled` (20), `citizen cider allegations` (20), `citizen cider closing` (20). Flagged for awareness, not used in any marketing copy, and not independently verified — do not repeat any premise from these queries as fact.
- **Golden State Cider** export contains a long tail of keyboard-typo/scraping garbage with real-looking volume but no actual meaning (`cidwr`, `cidder`, `coider`, `cider]`, `ciderc`, `cieer`, `ciddr`, `cidrt` — each 70–260 vol) — dropped as noise, not real search behavior. Also dropped `dub golden state warriors` (140, NBA team homonym) and flagged `golden state cider lawsuit` (30) as sensitive/unverified.
- **ACE Cider** collides with unrelated "Ace" terms: `ace costume` (260, Halloween costume brand), `ace indica` (70, a cannabis strain), `ace brands` (90, a marketing agency), `aceale` (110, unrelated). Dropped.
- **2 Towns Ciderhouse** export is heavily diluted by unrelated independent cideries and retailer navigational terms sharing generic "cider house" language — `sisters cider house`, `bend cider co.`, `legend cider co talent taphouse`, `total wine cider`, `two rivers cider` (a *different*, Sacramento-based cidery) — all dropped as unrelated businesses, not 2 Towns-specific.
- **Original Sin Cider**: the export is dominated by **Black Widow**, Original Sin's blackberry-flavored flagship — a real, unstocked SKU (see Phase 8) — while the stocked plain Dry Cider has almost no SKU-exact volume of its own. Also dropped: `sinful original` (14,800, KD17) — appears to be an unrelated product/slang term with only a bare "AI Overview" SERP feature and no other cider-relevant signals; too ambiguous to claim as Original Sin brand demand.

Net: **roughly 85–90% of total raw rows across the category exports, and 60–80% of most brand exports, were noise** (apple cider vinegar, sweet cider recipes, cider mill tourism, fashion-brand "Cider," CID/El Cid, Cider House Rules, fire cider, unrelated homonym businesses) and excluded from the tables below.

---

## Category Keyword Table — `/cider/hard-cider/`

| Term | Vol | KD |
|---|---|---|
| hard cider | 27,100 | 24 |
| hard apple cider | 5,400 | 11 |
| hard cider brands | 4,400 | 26 |
| hard ciders | 2,400 | 10 |
| hard cider apple | 1,300 | 12 |
| unfiltered hard cider | 1,600 | 7 |
| unfiltered cider | 1,000 | 10 |
| alcoholic cider | 1,000 | 23 |
| alcoholic ciders | 480 | 17 |
| hard cider beer | 590 | 6 |
| craft hard cider | 390 | 16 |
| craft cider | 720 | 18 |
| seasonal hard cider | 390 | 21 |
| american hard cider | 260 | 27 |
| gluten free ciders | 320 | 4 |
| gluten free hard cider | 170 | 5 |
| gluten free hard ciders | 140 | 5 |
| cider gluten free | 480 | 5 |

**FAQs (real, recurring across multiple brand exports, not single-row artifacts):**
- **Is hard cider gluten free?** — combined signal across the category and Original Sin/Angry Orchard/Strongbow exports (`hard cider gluten free` 390 + `gluten free ciders` 320 + `cider gluten free` 480 + `gluten free hard cider` 170 + `gluten free hard ciders` 140 + brand-specific variants like `is angry orchard gluten free` 1,300 and `is strongbow cider gluten free` 140) ≈ **3,000+ combined**, the single strongest real informational cluster in the whole category. Answer factually: cider made purely from fermented apples is naturally gluten-free, though always worth confirming with the specific producer for shared-equipment risk.
- **How much alcohol is in hard cider (ABV)?** — no single big hub-level row, but an extremely consistent pattern repeats across nearly every brand export (`angry orchard abv` 1,600 + `angry orchard alcohol content` 1,000 + `angry orchard alcohol percentage` 1,300 + `angry orchard alcohol by volume` 1,900 + `strongbow abv` 140 + `strongbow alcohol content` 170 + `woodchuck alcohol` 40, etc.) — combined comfortably **7,000+** across the category. Real, recurring buyer question worth a hub-level answer (most hard ciders run 5–6.9% ABV, higher than most beer).
- **Is hard cider a beer or something else?** — real, recurring confusion pattern: `is angry orchard a beer` (1,000) + `is angry orchard beer` (40) + `what type of beer is angry orchard` (70) + `is angry orchard a beer or cider` (20) + `strongbow cider beer` (110). Worth a plain, direct hub answer: hard cider is fermented apple juice, brewed more like wine than beer, though often sold and served alongside beer.

**Not assigned to any product/hub keyword, but real and worth flagging separately:**
- `hard cider near me` (2,400, KD28) and dozens of "[brand] near me" / "cider mill near me" variants are local-intent, not ecommerce-shopping intent for a ship-anywhere retailer — cross-sell/local-SEO note only.
- `hard cider apples` (880, KD16) is about growing/selecting cider-apple varieties (agricultural/homebrew), not a shopping query — blog candidate, not hub copy.

---

## Per-Product Keyword Assignments

### 2 TOWNS CIDERHOUSE (1 product)

**1. prod-cider-01 — 2 Towns Ciderhouse BrightCider**
Primary: `2 towns ciderhouse` (5,400, KD30) — the strongest real, exact brand-navigational anchor; BrightCider-specific rows exist but carry far less volume.
Secondary (6): two towns cider (3,600, KD30) · 2 towns cider (1,900, KD21) · two towns ciderhouse (1,600, KD20) · 2towns cider (480, KD12) · 2 towns bright cider (110, KD6 — exact product-name match) · bright cider 2 towns (110, KD5)
FAQ: none with real SKU-specific PAA demand found. Factual note (WebSearch-confirmed): 2 Towns Ciderhouse was founded in 2010 by three Oregon State/University of Oregon friends (Lee Larsen, Dave Takush, Aaron Sarnoff-Wood) and is now America's largest craft cidery; BrightCider is their flagship, made with Newtown Pippin apples.

---

### ACE CIDER (3 products)

**2. prod-cider-02 — ACE Apple Hard Cider**
Primary: `ace hard cider` (480, KD6) — the closest real match to ACE's original/apple-flavored core product.
Secondary (6): ace cider (2,900, KD24) · ace ciders (320, KD18) · california ace cider (1,300, KD12) · ace apple cider (90, KD17) · ace apple hard cider (70, KD7 — exact match, low volume) · ace cider near me (260, KD13)
FAQ: none SKU-specific found.

**3. prod-cider-03 — ACE Mango Hard Cider**
Primary: `ace mango cider` (170, KD11) — CSV-backed, direct hit.
Secondary (5): ace mango (90, KD4) · ace cider (2,900, KD24) · ace ciders (320, KD18) · ace guava cider (590, KD12 — sibling flavor, proof of overall ACE-flavor demand) · ace pineapple hard cider (480, KD10 — sibling flavor)
FAQ: none forced.

**4. prod-cider-04 — ACE Pineapple Hard Cider**
Primary: `ace pineapple cider` (4,400, KD20) — by far the single strongest row in the entire ACE export.
Secondary (6): ace cider pineapple hard cider (1,000, KD9) · ace pineapple hard cider (480, KD10) · ace pineapple (590, KD11) · ace pineapple cider near me (480, KD17) · pineapple hard cider (590, KD9) · ace pineapple beer (320, KD11)
FAQ: none forced; product-copy note: `pineapple cider` (1,300, KD7) is real generic-category demand this SKU can also capture.

Sources: [Ace Cider (Wikipedia)](https://en.wikipedia.org/wiki/Ace_Cider) · [How Ace cider's founder fought to save his legacy brand (Press Democrat)](https://www.pressdemocrat.com/2026/03/19/ace-cider-king-sonoma-jeffrey-house/)

**ACE brand facts (WebSearch-confirmed, for hub use):** Founded by Jeffrey House in Sebastopol/Graton, California in July 1993 — the first California hard cider producer and among the first US cider companies formed after Prohibition. Opened the first modern cider-focused pub in the US in 1999. Sold to Vintage Wine Estates in November 2021 for $47.4 million; Vintage Wine Estates filed for Chapter 11 bankruptcy in July 2024 and moved to sell its assets, including ACE — worth confirming current ownership status before publishing brand copy.

---

### ANGRY ORCHARD (2 products)

**5. prod-cider-05 — Angry Orchard Crisp Apple Hard Cider**
Primary: `angry orchard crisp apple hard cider` (1,600, KD7) — CSV-backed, exact SKU match.
Secondary (6): angry orchard crisp apple (1,600, KD8) · angry orchard crisp apple cider (1,000, KD7) · crisp apple hard cider (1,600, KD8) · angry orchard hard cider (12,100, KD20 — brand halo) · angry orchard cider (6,600, KD23) · hard apple cider (5,400, KD11)
FAQ: "Is Angry Orchard gluten free?" (1,300, KD9 — CSV-backed, real, the single largest informational row in the Angry Orchard export). "How much alcohol is in Angry Orchard?" (170, KD5 — CSV-backed).

**6. prod-cider-06 — Angry Orchard Green Apple Hard Cider**
Primary: `angry orchard green apple hard cider` (260, KD10) — CSV-backed, exact SKU match.
Secondary (5): green apple angry orchard (480, KD7) · angry orchard hard cider (12,100, KD20) · angry orchard cider (6,600, KD23) · angry orchard flavors (1,300, KD39) · hard apple cider (5,400, KD11)
FAQ: "Is Angry Orchard a beer?" (1,000, KD27 — CSV-backed, real and recurring confusion). "Who owns Angry Orchard?" (170, KD6 — CSV-backed; real answer: The Boston Beer Company, makers of Samuel Adams).

Sources: [Angry Orchard (Wikipedia)](https://en.wikipedia.org/wiki/Angry_Orchard)

---

### AUSTIN EASTCIDERS (3 products)

**7. prod-cider-07 — Austin Eastciders Blood Orange Cider**
Primary: `austin eastcider blood orange hard cider` (260, KD6) — CSV-backed, strongest exact match.
Secondary (5): austin eastciders blood orange (210, KD6) · austin eastciders blood orange cider (140, KD2) · austin blood orange cider (110, KD2) · austin cider blood orange (110, KD6) · austin east blood orange cider (110, KD5)
FAQ: none forced.

**8. prod-cider-08 — Austin Eastciders Original Dry Cider**
Primary: `austin eastciders original dry cider` (110, KD12) — CSV-backed, exact match.
Secondary (5): austin eastciders (2,900, KD22 — main brand anchor) · austin east cider (1,000, KD13) · austin eastciders dry cider (30, KD6) · austin cider (390, KD17) · east austin cider (390, KD7)
FAQ: none forced.

**9. prod-cider-09 — Austin Eastciders Pineapple Cider**
Primary: `austin eastciders pineapple` (260, KD11) — CSV-backed, strongest exact match.
Secondary (5): pineapple cider austin (140, KD14) · austin pineapple cider (140, KD9) · austin eastciders pineapple cider (70, KD12) · austin east cider pineapple (70, KD12) · austin cider pineapple (70, KD12)
FAQ: none forced.

Sources: [Story — Austin Eastciders](https://austineastciders.com/pages/story) · [Old World Inspiration Meets Texas' Free Spirit (Cidercraft)](https://cidercraftmag.com/old-world-inspiration-meets-texas-free-spirit-with-austin-eastciders/)

**Austin Eastciders brand facts (WebSearch-confirmed, for hub use):** Founded in 2013 by Ed Gibson — who grew up in Bristol, England ("the Cider Capital of the World") and previously ran a specialist cider pub on a barge there — alongside beer-industry partner Mark King. Gibson moved to Austin in 2011 and started brewing in a shed at Flat Creek Estate Winery before founding the company and, eventually, its East Austin taproom (opened 2017).

---

### BLAKE'S CIDER (1 product)

**10. prod-cider-10 — Blake's Triple Jam Hard Cider**
Primary: `blake's triple jam` (880, KD6) — CSV-backed, exact SKU match and the strongest hard-cider-specific (non-agritourism) row in the export.
Secondary (5): blake's hard cider triple jam (480, KD8) · blake's triple jam cider (390, KD6) · blake's hard cider (5,400, KD15) · blakes hard cider (1,300, KD18) · blake hard cider (720, KD41)
FAQ: none forced. **Important disambiguation:** roughly 80 of the 100 rows in this export are about Blake's Orchard & Cider Mill, the Blake family's Michigan agritourism farm (cider mill, lavender festival, pickle fest, apple picking) — a real, related but distinct business (see Phase 1). None of that tourism volume was used here.

Sources: [From Farm To Table: The Story Of Blake's Hard Cider (Hop Culture)](https://www.hopculture.com/blakes-hard-lite-cider-apple-farm-michigan/) · [How a third-generation farmer turned his small family apple farm into a $54M cider business (Food Dive)](https://www.fooddive.com/news/blakes-apple-orchard-cider-company/729705/)

**Blake's brand facts (WebSearch-confirmed):** Blake Farms was founded in 1946 by Gerald and Lovey Blake in Armada, Michigan. Andrew Blake, a grandson of the founding farmers and a homebrew hobbyist, launched Blake's Hard Cider Co. on the family orchard in 2013 with the family's backing; it's since grown into Michigan's leading cider brand, distributed in 29 states.

---

### CITIZEN CIDER (1 product)

**11. prod-cider-11 — Citizen Cider Unified Press Hard Cider**
Primary: `citizen cider unified press hard cider` (170, KD4) — CSV-backed, exact match.
Secondary (5): citizen cider unified press (110, KD2) · citizen cider (3,600, KD46) · citizens cider vermont (1,900, KD29) · citizen cider burlington vt (1,600, KD44) · citizen cider menu (210, KD21)
FAQ: none forced. Factual note (WebSearch-confirmed): Citizen Cider was founded in 2011 in Burlington, Vermont by Justin Heilenbach, Bryan Holmes, and Kris Nelson; Unified Press was their debut cider and is made from 100% Vermont and New York apples, never from concentrate.

Sources: [Citizen Cider | The Making of Burlington, Vermont's Popular Hard Cider (New England)](https://newengland.com/travel/vermont/citizen-cider/)

---

### CRISPIN (1 product — no dedicated export; zero rows in any category file either)

**12. prod-cider-12 — Crispin Original Hard Cider**
Primary: `crispin original hard cider` — confirmed real via WebSearch, not volume-backed.
Secondary (5): hard cider brands (4,400, KD26) · hard apple cider (5,400, KD11) · unfiltered hard cider (1,600, KD7) · craft hard cider (390, KD16) · hard cider (27,100, KD24)
FAQ: none forced (no volume anywhere in the data pulled). Factual note (WebSearch-confirmed): Crispin Cider Company was founded in 2004 by Joe and Lesley Heron; Original is a 5.0% ABV cider made from fresh-pressed apples with no added sugar. Acquired by MillerCoors (now Molson Coors) in 2012; after a period of decline the brand relaunched in 2023 and is now produced by Minneapolis Cider Company.

Sources: [Crispin Hard Cider Company (Wikipedia)](https://en.wikipedia.org/wiki/Crispin_Hard_Cider_Company) · [Crispin Cider](https://crispincider.com/)

---

### DOWNEAST CIDER HOUSE (2 products)

**13. prod-cider-13 — Downeast Cider House Aloha Friday Cider**
Primary: `downeast aloha friday` (140, KD5) — CSV-backed, exact match.
Secondary (5): downeast cider (14,800, KD28) · downeast cider house (3,600, KD45) · downeast cider flavors (260, KD13) · downeast peach mango (320, KD12 — sibling flavor, brand proof) · down east cider (1,600, KD25)
FAQ: none forced.

**14. prod-cider-14 — Downeast Cider House Blackberry Cider**
Primary: `downeast blackberry cider` (720, KD6) — CSV-backed, exact match and the strongest single flavor-specific row in the export.
Secondary (5): downeast cider blackberry (140, KD5) · downeast cider (14,800, KD28) · downeast cider house (3,600, KD45) · downeast cider flavors (260, KD13) · down east cider (1,600, KD25)
FAQ: none forced.

**Disambiguation flag (Phase 1):** "Downeast" / "Down East" is also a well-known Maine lifestyle magazine and general New England regional term — `downeast` (12,100) and `downeast east` (12,100) are too ambiguous to assign to either product; only cider-qualified rows were used.

Sources: [Downeast Cider House](https://downeastcider.com/)

---

### FARNUM HILL (1 product — no dedicated export; zero rows in any category file either)

**15. prod-cider-15 — Farnum Hill Extra Dry Cider**
Primary: `farnum hill extra dry cider` — confirmed real via WebSearch, not volume-backed.
Secondary (5): hard cider (27,100, KD24) · craft cider (720, KD18) · unfiltered hard cider (1,600, KD7) · hard cider brands (4,400, KD26) · dry cider near me (70, KD19)
FAQ: none forced. **Genuinely useful, real factual hook (WebSearch-confirmed):** Farnum Hill Ciders is made at Poverty Lane Orchards in Lebanon, New Hampshire, run by Louisa Spencer and Stephen Wood on land the family has farmed since 1965. Starting in the late 1980s the orchard began deliberately planting true bittersweet and bittersharp cider-apple varieties (e.g., Dabinett, Yarlington Mill) — inedible, tannic apples grown specifically for cidermaking — rather than the eating/juice apples most American hard ciders are made from. That makes Farnum Hill one of the largest dedicated cider-apple growers in the US and a genuinely distinct, traditional-English-style product worth explaining on the product page even without search volume behind it.

Sources: [FH Ciders: Character Tastes Good (Poverty Lane Orchards)](http://www.povertylaneorchards.com/farnum-hill-ciders/the-ciders/) · [Farnum Hill Ciders](https://farnumhillciders.com/)

---

### GOLDEN STATE CIDER (1 product)

**16. prod-cider-16 — Golden State Cider Mighty Dry Cider**
Primary: `golden state cider mighty dry` (390, KD4) — CSV-backed, exact match.
Secondary (5): golden state mighty dry cider (260, KD5) · golden state cider (3,600, KD15) · mighty dry cider (110, KD7) · golden state cider mighty dry hard cider (110, KD7) · golden state cider taproom (390, KD27 — brand proof)
FAQ: none forced. Factual note (WebSearch-confirmed): Golden State Cider was founded in 2012 at Devoto Orchards in Sebastopol, California (Sonoma County). No confirmed ownership link to E&J Gallo was found via WebSearch — do not repeat that assumption if it surfaces elsewhere.

Sources: [Golden State Cider — The Barlow](https://thebarlow.net/pages/golden-state-cider)

---

### ORIGINAL SIN CIDER (1 product)

**17. prod-cider-17 — Original Sin Dry Cider**
No exact "original sin dry cider" row exists in the export — the export is dominated by **Black Widow**, Original Sin's real, unstocked blackberry-flavored flagship (see Phase 8).
Primary: `original sin cider` (1,900, KD16) — the strongest real, direct brand anchor available.
Secondary (5): original sin hard cider (1,000, KD8) · original dry cider (140, KD5 — closest generic match to this specific SKU) · gluten free hard cider (170, KD5) · original sin cider near me (70, KD10) · hard cider gluten free (390, KD6)
FAQ: "Is hard cider gluten free?" (390, KD6 — CSV-backed from this export; real, high-value, category-wide answer applies here too).
Factual note (WebSearch-confirmed): Original Sin is a New York cidery established in 1996, making cider from 100% freshly-pressed New York apples; it was an early cider fixture in NYC bars and music venues (CBGB's, Don Hill's) well before the modern craft-cider boom.

Sources: [Our Story — Original Sin Cider](https://www.originalsincider.com/our-story)

---

### STRONGBOW (1 product)

**18. prod-cider-18 — Strongbow Original Dry Hard Cider**
Primary: `strongbow original dry cider` (50, KD7) — CSV-backed, closest exact match.
Secondary (5): strongbow original dry hard cider (40, KD2) · strongbow cider (5,400, KD23) · strongbow hard cider (590, KD29) · strongbow original (40, KD3) · strong bow cider (480, KD23)
FAQ: "Is Strongbow cider gluten free?" (140, KD4 — CSV-backed, real). "What is the alcohol content of Strongbow cider?" (ties to a real cluster — `strongbow alcohol content` 170, `strongbow abv` 140, `alcohol content of strongbow` 140 — combined ~600, CSV-backed).
Factual note (WebSearch-confirmed): Strongbow dates to 1960 in the UK (H.P. Bulmer); Heineken has owned the brand outside a few markets since a 2008 acquisition, and Strongbow remains Heineken's leading global cider brand, sold in 40+ countries.

Sources: [Strongbow (cider) — Wikipedia](https://en.wikipedia.org/wiki/Strongbow_(cider))

---

### WOODCHUCK (1 product)

**19. prod-cider-19 — Woodchuck Amber Hard Cider**
Primary: `woodchuck amber cider` (390, KD10) — CSV-backed, strongest close match.
Secondary (5): woodchuck amber hard cider (260, KD6) · woodchuck amber (210, KD13) · woodchuck hard cider amber (90, KD12) · woodchuck hard cider (1,600, KD5) · woodchuck cider (4,400, KD11)
FAQ: none forced.
Factual note (WebSearch-confirmed): Woodchuck (Vermont Cider Company) was founded in 1991 in Proctorsville, Vermont by Joe Cerniglia, Barry Blake, and winemaker Greg Failing. Ownership passed to Irish drinks group C&C Group in 2012 ($305M) and then to Northeast Kingdom Drink Group in 2021 ($20M) — worth confirming current ownership status before publishing.

Sources: [Woodchuck Hard Cider (Wikipedia)](https://en.wikipedia.org/wiki/Woodchuck_Hard_Cider) · [C&C sells Woodchuck Cider for $20 million (Vermont Business Magazine)](https://vermontbiz.com/news/2021/march/17/cc-sells-woodchuck-cider-20-million-northeast-drinks)

---

## Brand Hub Drafts

Four brands clear the 2+ stocked SKU bar: **ACE** (3), **Angry Orchard** (2), **Austin Eastciders** (3), **Downeast Cider House** (2).

### ACE
**categoryLabel:** ACE Cider

**Hook:** Founded by Jeffrey House in Sebastopol/Graton, California in July 1993, ACE was the first California hard cider producer and one of the first cideries formed in the US after Prohibition — House even opened the first modern cider-focused pub in the country in 1999. The brand built its reputation on fruit-forward, easy-drinking ciders, and that pattern shows up directly in the real search data: Pineapple is by far ACE's biggest seller by search volume (`ace pineapple cider` alone pulls 4,400/mo), with Mango and the classic Apple close behind. ACE was sold to Vintage Wine Estates in 2021; that parent company filed for Chapter 11 bankruptcy in 2024, so current ownership is worth confirming before publishing.

**FAQs:**
1. "Is ACE Cider gluten free?" — Ties to the category-wide gluten-free cluster; ACE's fruit ciders are apple-based and naturally gluten-free, though always confirm current labeling.
2. "Where is ACE Cider made?" — Sonoma County, California (Sebastopol), where the brand has operated since 1993.

**Secondary brand keywords:** ace cider (2,900, KD24) · california ace cider (1,300, KD12) · ace ciders (320, KD18) · ace cider near me (260, KD13) · ace hard cider (480, KD6)

### Angry Orchard
**categoryLabel:** Angry Orchard

**Hook:** Angry Orchard is owned by The Boston Beer Company — the same brewer behind Samuel Adams — and launched in 2012 to bring craft-style, apple-forward hard cider to a mainstream audience; it's now one of the best-selling hard cider brands in the US. Crisp Apple, the flagship, and Green Apple, its tarter sibling, anchor the real search demand (`angry orchard hard cider` alone pulls 12,100/mo), and gluten-free status is by far the single most-asked real question about the brand (`is angry orchard gluten free` 1,300/mo).

**FAQs:**
1. "Is Angry Orchard gluten free?" (1,300, KD9 — CSV-backed) — Yes; it's made from fermented apples, not grain.
2. "Is Angry Orchard a beer?" (1,000, KD27 — CSV-backed) — No; it's a hard cider, fermented from apples rather than brewed from malted grain, though it's often sold and served alongside beer.
3. "Who owns Angry Orchard?" (170, KD6 — CSV-backed) — The Boston Beer Company (Samuel Adams).

**Secondary brand keywords:** angry orchard cider (6,600, KD23) · angry orchard cider company (6,600, KD21) · angry orchard flavors (1,300, KD39) · angry orchard abv (1,600, KD9) · angry orchard beer (4,400, KD14 — background head term only)

### Austin Eastciders
**categoryLabel:** Austin Eastciders

**Hook:** Founded in 2013 by Ed Gibson — who grew up in Bristol, England, "the cider capital of the world," and previously ran a specialist cider bar there — alongside beer-industry partner Mark King, Austin Eastciders set out to bring traditionally-inspired, less-sweet cider to the notoriously sweet-leaning US market, brewed in an unlikely home base: Austin, Texas. The three stocked flavors (Blood Orange, Original Dry, Pineapple) reflect that split identity — a genuinely dry, English-style base cider alongside bold, fruit-forward variants built for Texas heat.

**FAQs:**
1. "Where is Austin Eastciders made?" — Austin, Texas, at the brand's Springdale Road facility and taproom (opened 2017).
2. "Is Austin Eastciders Original Dry Cider sweet?" — No; it's built in the drier, more traditional English style founder Ed Gibson grew up with in Bristol, distinct from many mainstream American ciders.

**Secondary brand keywords:** austin eastciders (2,900, KD22) · austin east cider (1,000, KD13) · austin cider (390, KD17) · east austin cider (390, KD7) · austin ciders (140, KD21)

### Downeast Cider House
**categoryLabel:** Downeast Cider House

**Hook:** Downeast Cider House is a Boston-based cidery known for its distinctively unfiltered, cloudy-orange, half-gallon-jug-style cans — a deliberate departure from the clear, filtered look of most mainstream hard cider. Aloha Friday (pineapple) and Blackberry are two of the brand's rotating fruited flavors, sitting alongside its much larger Original Blend and seasonal Pumpkin/Winter Blend lines (see Phase 8 gap analysis — both carry real, currently-unstocked search demand). The brand name itself is worth a one-line disambiguation on the hub: "Downeast"/"Down East" is also a well-known Maine regional term and lifestyle magazine, unrelated to this cidery.

**FAQs:**
1. "Is Downeast Cider gluten free?" (260, KD19 — CSV-backed, real) — Ties to the category-wide gluten-free demand pattern.
2. "Where is Downeast Cider made?" — East Boston, Massachusetts.

**Secondary brand keywords:** downeast cider (14,800, KD28) · downeast cider house (3,600, KD45) · down east cider (1,600, KD25) · downeast cider flavors (260, KD13) · downeast brewery (720, KD32 — background)

---

## Phase 8 — Gap Analysis

### Part A — Real missing expressions within brands already stocked

| Brand (stocked SKUs) | Missing expression | Primary keyword | Support keywords |
|---|---|---|---|
| ACE (Apple, Mango, Pineapple) | ACE Pear Cider | ace pear cider (1,300, KD5, T1) | ace perry cider (1,000, KD8) · ace perry hard cider (320, KD10) · ace pear (110, KD7) — combined **~2,700+**, the strongest Part A finding in this batch |
| ACE (Apple, Mango, Pineapple) | ACE Guava Cider | ace guava cider (590, KD12, T1) | ace guava (140, KD8) |
| ACE (Apple, Mango, Pineapple) | ACE Pumpkin Cider | ace pumpkin cider (480, KD14, T1) | ace hard cider pumpkin (320, KD12) · ace pumpkin hard cider (90, KD11) |
| ACE (Apple, Mango, Pineapple) | ACE Peach Cider | ace peach cider (170, KD7, T1) | ace high peach cider (70, KD10) · ace imperial peach cider (110, KD9) |
| Angry Orchard (Crisp Apple, Green Apple) | Angry Orchard Rosé | angry orchard rose (590, KD9, T1) | rosé is a real, currently-produced Angry Orchard SKU; no other rows found but a genuine gap |
| Angry Orchard (Crisp Apple, Green Apple) | Angry Orchard Cinnful Apple | angry orchard cinnful apple (260, KD6, T1) | angry orchard flavors (1,300, KD39) |
| Angry Orchard (Crisp Apple, Green Apple) | Angry Orchard Strawberry | angry orchard strawberry hard cider cans (390, KD8, T1) | angry orchard flavors (1,300, KD39) |
| Austin Eastciders (Blood Orange, Original Dry, Pineapple) | Austin Eastciders Texas Honey Cider | texas honey cider (90, KD16, T1) | austin eastciders texas honey cider (140, KD6) · austin eastciders honey cider (110, KD2) — combined **~340** |
| Austin Eastciders (Blood Orange, Original Dry, Pineapple) | Austin Eastciders Churro Cider | churro cider (40, KD14, T1) | austin eastciders churro (70, KD8) · austin eastciders churro cider (40, KD14) — combined **~150** |
| Austin Eastciders (Blood Orange, Original Dry, Pineapple) | Austin Eastciders Blackberry Cider | austin eastciders blackberry (90, KD3, T1) | austin eastciders blackberry cider (30, KD3) |
| Downeast (Aloha Friday, Blackberry) | Downeast Pumpkin Blend / Winter Blend | downeast cider pumpkin (590, KD6, T1) | downeast pumpkin cider (590, KD7) · downeast cider winter blend (390, KD10) · downeast pumpkin blend (140, KD7) · downeast cider pumpkin blend (110, KD4) — **combined ~1,820, the strongest Part A finding across the whole report**, and a genuinely obvious seasonal-SKU gap |
| Downeast (Aloha Friday, Blackberry) | Downeast Original Blend | downeast original blend (210, KD4, T1) | downeast original cider (170, KD3) · downeast cider original blend (170, KD9) — combined **~550**; this is Downeast's actual flagship/best-seller and isn't stocked at all |
| Downeast (Aloha Friday, Blackberry) | Downeast Caramel Apple | downeast caramel apple (170, KD7, T1) | downeast caramel apple cider (170, KD9) |
| Downeast (Aloha Friday, Blackberry) | Downeast Peach Mango | downeast peach mango (320, KD12, T1) | real, single strong row |
| Downeast (Aloha Friday, Blackberry) | Downeast Pomegranate | downeast pomegranate cider (140, KD3, T1) | downeast pomegranate (110, KD7) |
| Original Sin (Dry Cider) | Original Sin Black Widow (blackberry) | original sin black widow cider (1,300, KD4, T1) | black widow cider (1,900, KD9) · original sin black widow (260, KD2) · original sin blackberry cider (90, KD4) — combined **~3,500+**, Original Sin's actual best-selling flagship and the dominant signal in its whole export, yet not stocked at all |

### Part B — Real unstocked cider brands with genuine search demand

| Brand | Primary keyword | Support keywords | Notes |
|---|---|---|---|
| Bold Rock Hard Cider | bold rock cider (5,400, KD26) | — | Real, WebSearch-confirmed: founded 2012 in Nellysford, Virginia; now America's largest independently-owned cidery (800,000+ cases/year), with a second cidery in Mills River, NC. Highest single volume of any unstocked cider brand found. |
| Strongbow's direct rival: Magners | magners cider (3,600, KD27) | — | Real, well-known Irish cider brand, also C&C Group-owned (same corporate family as Woodchuck's former owner) — a notable, sizeable competitive gap. |
| 1911 Established | 1911 cider (4,400, KD24) | — | Real, WebSearch-confirmed: made at an orchard in Lafayette, New York, part of Beak & Skiff Apple Orchards (100+ years old). |
| Schilling Cider | schilling cider (4,400, KD18) | — | Real, WebSearch-confirmed: Seattle-based, founded 2013 by Colin Schilling and Mark Kornei; runs the nation's largest craft-cider-selection cider house. |
| Stowe Cider | stowe cider (4,400, KD49) | — | Real, WebSearch-confirmed: Stowe, Vermont, founded 2013, known for drier-than-average ciders. High KD despite modest brand size. |
| Sociable Cider Werks / Minneapolis Cider Company | minneapolis cider company (6,600, KD28) | sociable cider werks (2,900, KD26) | Real, WebSearch-confirmed: Sociable Cider Werks founded 2013 in Minneapolis. **Cross-reference:** "Minneapolis Cider Company" is also the actual contract producer now making the stocked Crispin brand (see Crispin section above) — worth double-checking these two distinct entities don't get conflated in future keyword work. |
| Locust Cider | locust cider (2,900, KD37) | — | Real, WebSearch-confirmed: founded 2015 by brothers Jason and Patrick Spears, based in Woodinville, Washington. |
| Wild State Cider | wild state cider (3,600, KD33) | — | Real, WebSearch-confirmed: based in Duluth, Minnesota (not Utah, despite the brand name's "wild state" framing) — worth flagging so this doesn't get mis-located in future copy. |

**Highest-priority findings overall:** Original Sin's own Black Widow (Part A, ~3,500+ combined, inside an already-stocked brand whose stocked SKU is comparatively weak in the data) and Downeast's Pumpkin/Winter Blend seasonal line (Part A, ~1,820 combined) are the two strongest signals in this entire gap analysis — both are stocking questions as much as SEO ones. In Part B, Bold Rock (5,400, KD26) is the clearest whitespace candidate for a brand the site doesn't carry at all.

---

## Blog Topic Candidates

| Topic | Anchor keyword(s) | Notes |
|---|---|---|
| Is hard cider gluten free? | hard cider gluten free (390, KD6) · gluten free ciders (320, KD4) · cider gluten free (480, KD5) · is angry orchard gluten free (1,300, KD9) · is strongbow cider gluten free (140, KD4) | Combined **~3,000+**, the strongest real informational cluster in the category — pillar FAQ content, links out to nearly every product page |
| How much alcohol is in hard cider? | angry orchard abv (1,600, KD9) · angry orchard alcohol content (1,000, KD8) · angry orchard alcohol by volume (1,900, KD8) · strongbow abv (140, KD16) | No single big row, but the pattern repeats across almost every brand export — combined well over 7,000; genuinely useful buyer-education content |
| Hard Cider vs. Beer: What's the Difference? | is angry orchard a beer (1,000, KD27) · what type of beer is angry orchard (70, KD26) · strongbow cider beer (110, KD11) | Real, recurring confusion pattern across multiple brands — cider is fermented like wine, not brewed like beer |
| Hard Cider vs. Sweet (Non-Alcoholic) Apple Cider | what's the difference between apple juice and apple cider (3,600+2,900 combined, informational) | Flagged in Phase 1 as non-alcoholic-cider noise for product pages, but a real, useful disambiguation post given how easily customers could confuse the two categories when landing on a cider shop |
| How Is Hard Cider Made? | how to make hard cider (2,400, KD11) · how to make hard apple cider (1,600, KD22) | Flagged per brief as homebrew/DIY-adjacent — frame as consumer education ("how the category is made") rather than a homebrew how-to, or split into two posts if a true homebrew angle is wanted |
| What's the Best Cider Apple? Bittersweet vs. Dessert Apples | not volume-backed directly | Ties straight to the Farnum Hill product page's real bittersweet/bittersharp-apple story — a genuinely differentiated, currently-underused angle in the whole category |
| Best Fall & Winter Hard Ciders | downeast cider pumpkin (590, KD6) · angry orchard halloween pack (480, KD17) · seasonal hard cider (390, KD21) | Seasonal roundup content, ties to the Downeast Pumpkin/Winter Blend Phase 8 gap finding regardless of whether that SKU gets stocked |
| Hard Cider Brands Guide: Which One Should You Try? | hard cider brands (4,400, KD26) · hard ciders (2,400, KD10) | Broad comparison/roundup pillar page, links to every brand hub in this batch |

---

## What to check

1. **ACE Cider's parent (Vintage Wine Estates) filed Chapter 11 in July 2024** and was moving to sell its assets, including ACE — confirm current ownership/status before publishing brand-hub copy.
2. **Woodchuck's ownership changed hands in 2021** (C&C Group → Northeast Kingdom Drink Group) — confirm this is still current before publishing.
3. **Golden State Cider / E&J Gallo ownership** — no confirmed link found via WebSearch; do not state this as fact if it surfaces from another source without independent verification.
4. **Citizen Cider's negative-news cluster** (`citizen cider controversy`, `boycott`, `cancelled`, `allegations` — each low volume, 20–110) was flagged but not independently investigated. Do not reference any of it in marketing copy without separate verification of what it actually refers to.
5. **No dedicated brand exports exist for Crispin or Farnum Hill** — both product sections above run entirely on WebSearch-confirmed facts plus category-level pooled keywords rather than SKU-specific search volume. A dedicated SEMrush pull for either would materially improve those two pages, the same flag raised for thinly-supported brands in the Fine Wine and Champagne batches.
6. **Original Sin's stocked Dry Cider has almost no SKU-exact search volume** — the brand's real search demand is almost entirely about Black Widow (blackberry), a different, unstocked SKU (Phase 8, ~3,500+ combined). Worth a stocking conversation independent of any SEO consideration.
7. **Downeast's actual best-known SKU (Original Blend) and its seasonal Pumpkin/Winter Blend line are not stocked at all** (Phase 8, ~550 and ~1,820 combined respectively) — both are real, sizeable gaps inside a brand already carrying 2 SKUs.
8. **Bold Rock (5,400, KD26)** is the single strongest unstocked-brand signal found in this entire batch — worth a look if catalog expansion is on the table, the same way William Hill stood out in the Fine Wine red batch.
9. **"Minneapolis Cider Company" cross-reference** — this contract producer now makes the stocked Crispin brand, but also carries its own real search volume distinct from Sociable Cider Werks (a different Minneapolis cidery). Keep these two entities separate in any future keyword work.
