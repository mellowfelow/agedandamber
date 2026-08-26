# Keyword Map — Beer: Ale & Wheat + Stout & Porter
**Site:** Aged And Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — research report only, nothing implemented.
**Scope:** 36 stocked products across 2 subcategories under `beer`: Ale & Wheat (22), Stout & Porter (14).
**Methodology:** keyword-engine skill — KD 0–25 = T1 Quick Win, 26–40 = T2 Worth Targeting, 41–55 = T3 Supporting only, 56+ dropped/background-only. Sources: 5 real SEMrush exports (Deschutes-beer, Guinness-beer ×2 files, sam-adams-beer, Sierra-Nevada-beer). **Critical constraint:** unlike every prior batch on this project, there is no category-level "beer" CSV and only 3 of the 36 products (Deschutes Black Butte Porter, both Guinness Draught pack sizes, Samuel Adams Utopias, Sierra Nevada Pale Ale ×2 — 5 SKUs total) have any dedicated export coverage. The other 31 SKUs across 15 brands have **zero SEMrush volume data** in this batch and are handled entirely via WebSearch fact-confirmation, marked `confirmed real via WebSearch, not volume-backed` per the brief, with secondary keywords built on the standard buy/price/review/near-me/abv pattern.

---

## Phase 1 — Filter Summary

This batch's noise profile is different from every prior wine/spirits batch: because 4 of 5 exports are brand-level pulls dominated by brewery-tourism and trivia searches rather than product-shopping searches, the "noise" here is mostly **local-pack/tourism/taproom navigational volume** and **calorie/trivia informational sprawl**, not homonym collisions — with one major exception (Sierra Nevada/mountain range) flagged below.

**Deschutes-beer export (~70 of 100 rows dropped):** The overwhelming majority of this file is Bend, Oregon brewery-tourism and taproom-navigational volume with zero bottle-shopping intent: "deschutes brewery bend" (1,300), "deschutes brewery portland public house" (1,600) + at least 6 near-duplicate phrasings of the same Portland pub, "deschutes brewery tasting room" (1,300), "deschutes brewery tour" (210), "bend oregon breweries" (1,000), "bend breweries" (1,900), "oregon breweries" (1,000), "oregon microbreweries" (320), "breweries in bend oregon" (590), plus a long tail of misspelling variants of the generic word "brewery" itself ("brewary" 1,300, "brevery" 720, "bewery" 590, "brewrey" 320, "brwery" 320, "breweery" 210, "brrewery" 210, "brewwery" 260) that carry no Deschutes-specific or even porter-specific signal — combined **well over 25,000 volume dropped**. Also dropped as off-product: the "deschutes fresh squeezed ipa" cluster (fresh squeezed ipa 720, deschutes fresh squeezed ipa 1,900, deschutes brewery fresh squeezed ipa 1,300, deschutes ipa 720, deschutes brewery fresh squeezed american ipa 320, deschutes brewery ipa 320, deschutes beer ipa 260, ipa deschutes 260, deschutes ipa beer 210 — combined **~6,000+**) — this is Deschutes' IPA line, not the stocked Black Butte Porter; kept as a Part A gap-analysis finding below, not assigned to the porter product page. Also generic local-pack terms with no Deschutes tie ("craft beer near me" 8,100, "micro beer near me" 390, "lager near me" 260, "oktoberfest beer near me" 260) — dropped. **Kept:** "deschutes brewery black butte porter" (590, KD7) is an exact, high-quality match for the stocked SKU — the single best row in this entire export.

**Guinness-beer exports, both files (~55 of ~180 combined rows dropped/reclassified):** This pair of exports is dominated by generic calorie/nutrition-trivia and brand-history informational demand, most of which is real and usable (see tables below), but several clusters are true noise: **Guinness World Records confusion** — "book guinness" (4,400, KD69) is almost certainly people searching for the Guinness Book of World Records, not the beer, given the intent/KD profile; dropped. **Dublin tourism** — "guinness storehouse" (4,400), "guinness dublin" (1,900), "guinness factory" (2,400) are the Storehouse visitor attraction in Dublin, not a beer-shopping query — combined **~8,700 dropped**. **Food/recipe crossover** — "guinness beer cake" (1,900) is a baking recipe, not a beer purchase — dropped. **Unclear/foreign-language artifacts** — "genius beer" (1,300) and "genesis beer" (1,000) both look like autocomplete/mishearing noise adjacent to "Guinness" rather than real Guinness search intent (neither KD nor SERP features support a Guinness association); "guinness adelaide" (1,600) is very likely a pub or venue named "Guinness" in Adelaide, Australia (local-pack signal, not product intent); "guinness bir" (1,000) and "guinness fes" (1,000) are ambiguous, possibly non-English-market artifacts ("bir" = beer in Indonesian/Turkish; "Fes" could be the Moroccan city) — all four dropped as low-confidence, combined **~4,900**. **Trivia tail with no commercial value** — "how do you spell guinness" / "how to spell guinness" (320+320), "guinness trademark" (1,300), "did guinness invent the pension" (320), "guinness family history" (2,400) — real search behavior but nothing a product page should answer; dropped from assignment (a couple are noted as fun blog color below, not SEO-driven). **Merchandising, not beer** — "guinness merchandise" (1,000) and "merchandising guinness" (1,000) are apparel/gift cross-sell, not the beer SKU — flagged separately, not assigned. **Kept, and genuinely strong:** the calorie/nutrition cluster (dozens of near-duplicate "how many calories in a guinness" phrasings, combined **~15,000–18,000+/mo** across both files), the "guinness can" / nitro-widget-ball cluster (~3,800+ combined, directly relevant since both stocked SKUs are cans), "how to pour a guinness can" (1,600), and the style/history/ABV informational cluster.

**sam-adams-beer export (~75 of 100 rows not usable for the one stocked SKU):** The export is almost entirely Boston Lager, brewery-tour, and Boston/Cincinnati/Jamaica Plain/Allentown taproom-navigational volume — real Samuel Adams demand, but irrelevant to Utopias specifically since Boston Lager is not a stocked SKU (see Part A gap analysis, where this data is reused). **No noise to drop here in the homonym sense** — everything is genuinely Sam Adams/Boston Beer Company related — the issue is relevance-to-SKU, not junk data. **Kept and genuinely valuable:** three real, volume-backed Utopias-specific rows — "utopias beer sam adams" (1,900, KD27), "sam adams utopias beer" (720, KD27), "sam adams' utopias beer" (480, KD26) — meaning Utopias is actually the *one* product in this entire batch that graduates from "confirmed real via WebSearch" to genuine CSV-backed primary keyword status, despite being on the list of zero-export brands in the brief.

**Sierra-Nevada-beer export (~48 of 100 rows dropped — the most homonym-collision-heavy file in this batch, comparable to the Blue Moon risk flagged in the brief):** "Sierra Nevada" is also the name of a real, major mountain range spanning California and Nevada (and a separate range in Spain) — exactly the kind of geography/brand collision the brief warned about for Blue Moon. Dropped as pure geography, not beer-shopping intent: bare "sierra nevada" (40,500, KD58 — dominated by mountain-range Knowledge Panel results), "sierra nevada in california" (880), "sierra nevada north america" (3,600), "where is sierra nevada" (1,300), "kalifornien sierra nevada" (720, German-language geography query), "sierra nevada.," (320, likely a stray-punctuation geography variant), "park sierra nevada" (880, national park/mountain reference) — combined **~47,000+ dropped**, the single largest noise cluster found in this entire batch. Also dropped: "sahara nevada" (8,100) — unclear, likely unrelated desert/geography confusion, not a Sierra Nevada beer variant. Also heavy **Asheville/Mills River, NC taproom-tourism cluster** (Sierra Nevada's East Coast brewery location) — "sierra nevada asheville" (9,900), "sierra nevada brewery asheville" (5,400), "sierra nevada brewery mills river" (multiple variants, combined ~4,000+), "sierra nevada taproom" / "sierra nevada restaurant" / "sierra nevada brewery menu" cluster (combined ~3,500+) — all local-pack/navigational, zero bottle-shopping intent, dropped (**~20,000+ combined**). Also dropped: jobs/careers noise ("sierra nevada careers" 880, "sierra nevada brewery careers" 320), and three unrelated third-party breweries that merely co-occur in this export ("south of north brewing co" 1,000+480, "inzane brewing" 480, "the hop grenade taproom & bottle shop" 320, "sierra cider" 480). **Kept, and directly useful:** "sierra nevada pale ales" (1,900, KD16) is an exact-match plural hit for the stocked Pale Ale SKU, plus a real ABV-informational cluster and one Part-A gap signal ("torpedo beer," 320, KD18 — Sierra Nevada's separate Torpedo Extra IPA, not stocked).

**Blue Moon homonym caution (no export in this batch, flagged for future data pulls):** Per the brief's specific instruction, "Blue Moon" the beer brand will collide hard with "blue moon" the astronomical term (the informal name for a second full moon in a calendar month) in any future generic or brand-level keyword pull. No Blue Moon CSV was available in this batch to actually filter, but this is flagged now so whoever runs a dedicated Blue Moon export next round filters it correctly from the start — expect large-volume noise rows like "when is the next blue moon," "what is a blue moon," "blue moon meaning," etc.

**Net:** roughly **250 of the ~500 total raw rows across the 5 usable exports were noise or off-SKU** (brewery tourism, generic "brewery" misspellings, Guinness World Records/Dublin tourism confusion, unrelated wheat/IPA line volume, and — most significantly — the Sierra Nevada mountain-range homonym cluster). The remaining ~250 rows split across roughly 60 genuinely useful, assignable rows and ~190 rows of real-but-off-SKU brand demand (Sam Adams Boston Lager, Deschutes Fresh Squeezed IPA, Sierra Nevada Asheville) that were repurposed into the Phase 8 gap analysis rather than discarded.

---

## Phase 2 — Subcategory Hub Keyword Tables

**Flag up front:** because no generic "wheat beer," "pale ale," "stout," or "porter" category-level SEMrush export exists in this batch (unlike bourbon/scotch/wine, which each had a true category CSV), these two hub tables are necessarily thin and lean on borrowed brand-level informational terms rather than true head-term category data. Recommend a dedicated category-level pull ("wheat beer," "witbier," "pale ale," "golden ale," "stout beer," "porter beer," "imperial stout," "stout vs porter") before finalizing hub-page copy — this is the single biggest data gap in the whole batch.

### `/shop/beer/ale-wheat/`
| Term | Vol | KD | Source |
|---|---|---|---|
| sierra nevada pale ales | 1,900 | 16 | Sierra Nevada export — closest real head-term proxy available |
| sierra nevada beer | 6,600 | 41 | Sierra Nevada export — brand-level, too broad/high-KD for a product page but usable as hub background |
| what kind of beer is guinness | 1,300 | 25 | Guinness export — style-definitional, adaptable to "what's an ale/wheat beer" framing in hub copy |
| kinds of guinness | 1,000 | 18 | Guinness export — style-variety framing |

**Honest assessment:** there is no real, volume-backed generic term for "wheat beer," "witbier," "Belgian ale," or "pale ale" anywhere in this data pull. The hub page will need to lean on genuine brand-fact copy (Allagash's 5 GABF golds, Sierra Nevada's role starting the American craft pale ale category in 1980, Chimay's Trappist authenticity) rather than a keyword-driven intro paragraph. No FAQ candidates clear the bar for this hub from real data; recommend deferring hub FAQs until a category-level export exists.

### `/shop/beer/stout-porter/`
| Term | Vol | KD | Source |
|---|---|---|---|
| guinness stout | 6,600 | 36 | Guinness export |
| is guinness a stout | 1,600 | 18 | Guinness export — genuine definitional PAA, good FAQ fit |
| draught guinness stout | 6,600 | 16 | Guinness export |
| guinness draught stout | 2,900 | 12 | Guinness export |
| deschutes porter | 260 | 26 | Deschutes export |
| deschutes brewery black butte porter | 590 | 7 | Deschutes export |
| sierra nevada brewing co porter | 320 | 9 | Sierra Nevada export — Sierra Nevada also makes a porter, not currently stocked (see Part A) |

**FAQ:** "Is Guinness a stout?" (1,600, KD18 — real, clean, answers a genuine definitional question that maps well onto the hub's whole premise) is the one real, volume-backed FAQ candidate for this hub. A true "what's the difference between a stout and a porter?" query did not appear as its own row in any of the 5 exports pulled — it's used below as a blog topic candidate instead, flagged as not directly volume-confirmed.

---

## Phase 3 — Per-Product Keyword Assignments

### ALE & WHEAT (22 products)

**1. prod-beer-01 — 312 Urban Wheat Ale (Goose Island)**
Primary: `312 urban wheat ale` — confirmed real via WebSearch, not volume-backed. (American wheat ale at 4.2% ABV, named for Chicago's 312 area code; 42% wheat malt / 58% barley malt grain bill, Cascade/First Gold/Mt. Hood hops; GABF Gold and World Beer Cup Silver medalist.)
Secondary (5): 312 urban wheat ale price · buy 312 urban wheat ale · 312 urban wheat ale review · 312 urban wheat ale near me · 312 urban wheat ale abv
FAQ: What is 312 Urban Wheat Ale? — A crisp, hazy, unfiltered American wheat ale from Goose Island, 4.2% ABV, with light honey sweetness and a bright lemon-citrus note from Cascade hops.

**2. prod-beer-02 — Allagash White Belgian-Style Wheat Beer (6 x 12oz bottles)**
Primary: `allagash white belgian-style wheat beer` — confirmed real via WebSearch, not volume-backed. (Witbier, 5.2% ABV, Allagash's flagship and first-ever recipe, brewed in Portland, ME since 1995; a 5-time Great American Beer Festival gold medalist.)
Secondary (5): allagash white price · buy allagash white · allagash white review · allagash white near me · allagash white abv
FAQ: What makes Allagash White a witbier? — Spiced with coriander and curaçao orange peel over a wheat/oat base, unfiltered for a hazy, pale-straw appearance; it's the beer Allagash founder Rob Tod built the entire brewery around in 1995.

**3. prod-beer-03 — Allagash White Belgian-Style Wheat Beer (6 x 12oz can)**
Primary: `allagash white belgian-style wheat beer` — shared brand anchor with #2, confirmed real via WebSearch, not volume-backed.
Secondary (5): allagash white can price · buy allagash white cans · allagash white review · allagash white near me · allagash white abv
FAQ: same as #2 — defer to the bottle SKU's answer; differentiate on-page via pack-format copy only.

**4. prod-beer-05 — Bell's Oberon Wheat Ale (bottles)**
Primary: `bell's oberon wheat ale` — confirmed real via WebSearch, not volume-backed. (American wheat ale, 5.8% ABV, brewed with only 4 ingredients — wheat malt, Saaz hops, water, Bell's house ale yeast — with zero added spices or fruit, unusual for the style; brewed in Comstock, MI near Kalamazoo.)
Secondary (5): bell's oberon price · buy bell's oberon · bell's oberon review · bell's oberon near me · bell's oberon abv
FAQ: Does Oberon have fruit or spices in it? — No — real, distinctive fact: Oberon is brewed with just 4 ingredients and no added fruit or spices, unlike most "summer wheat" competitors that lean on citrus or coriander.

**5. prod-beer-06 — Bell's Oberon Wheat Ale (can)**
Primary: `bell's oberon wheat ale` — shared brand anchor, confirmed real via WebSearch, not volume-backed.
Secondary (5): bell's oberon can price · buy bell's oberon cans · bell's oberon review · bell's oberon near me · bell's oberon abv
FAQ: defer to #4.

**6. prod-beer-09 — Blue Moon Belgian White (bottles)**
Primary: `blue moon belgian white beer` — confirmed real via WebSearch, not volume-backed. (Witbier, 5.4% ABV, created in 1995 by brewer Keith Villa at the Sandlot Brewery in Coors Field, Denver; brewed with Valencia orange peel and coriander; now Molson Coors' Blue Moon Brewing Co.)
Secondary (5): blue moon belgian white price · buy blue moon belgian white beer · blue moon beer review · blue moon belgian white near me · blue moon beer abv
FAQ: Who created Blue Moon? — Real fact: brewer Keith Villa created it in 1995 at the Sandlot Brewery inside Coors Field in Denver, originally under the name "Bellyslide Belgian White."
**Caution flag (per brief):** any future dedicated Blue Moon SEMrush export should be filtered carefully — "blue moon" the beer will collide heavily with "blue moon" the astronomical/lunar-phenomenon term (second full moon in a calendar month), which is likely to carry very large, completely unrelated search volume.

**7. prod-beer-10 — Blue Moon Belgian White (can)**
Primary: `blue moon belgian white beer` — shared brand anchor, confirmed real via WebSearch, not volume-backed.
Secondary (5): blue moon belgian white can price · buy blue moon belgian white cans · blue moon beer review · blue moon belgian white near me · blue moon beer abv
FAQ: defer to #6.

**8. prod-beer-17 — Chimay Blue Belgian Strong Ale**
Primary: `chimay blue belgian strong ale` — confirmed real via WebSearch, not volume-backed. (Genuine Trappist ale — Chimay Bleue/Grande Réserve — brewed under the supervision of Trappist monks at Notre-Dame de Scourmont Abbey, Belgium, since 1862; first brewed as a Christmas beer in 1956; dark strong ale, 9% ABV; can be cellared for 15+ years.)
Secondary (5): chimay blue price · buy chimay blue · chimay blue review · chimay blue near me · chimay blue abv
FAQ: Is Chimay actually brewed by monks? — Yes, real fact: Chimay is one of only a small number of breweries worldwide (roughly a dozen) authorized to carry the "Authentic Trappist Product" logo, meaning the beer is brewed within monastery walls under monk oversight, with brewing profits directed to the monastery and charitable causes.

**9. prod-beer-24 — Delirium Tremens Belgian Strong Ale**
Primary: `delirium tremens belgian strong ale` — confirmed real via WebSearch, not volume-backed. (Belgian strong pale/golden ale, 8.5% ABV, brewed by Brouwerij Huyghe in Melle, Belgium, using three distinct yeast strains during fermentation — unusual even among Belgian strong ales; instantly recognizable pink-elephant label.)
Secondary (5): delirium tremens price · buy delirium tremens · delirium tremens review · delirium tremens near me · delirium tremens abv
FAQ: Why does Delirium Tremens have a pink elephant on the label? — Real fact: the beer is playfully named after the medical condition (delirium tremens, associated with severe alcohol withdrawal) whose hallmark hallucination is the "pink elephant," and the label runs with the joke via pink elephants, green crocodiles, and dragons.

**10. prod-beer-31 — Duvel Belgian Golden Ale**
Primary: `duvel belgian golden ale` — confirmed real via WebSearch, not volume-backed. (Belgian golden strong ale, 8.5% ABV, unpasteurized and bottle-conditioned; brewed by the family-controlled Duvel Moortgat Brewery, founded 1871 in Belgium; widely credited as the beer that defined the "Belgian golden strong ale" style.)
Secondary (5): duvel price · buy duvel beer · duvel review · duvel near me · duvel abv
FAQ: What does "Duvel" mean? — Real fact: Flemish/Antwerp dialect for "devil" — the beer's deceptively easy-drinking character at 8.5% ABV is the source of the name.

**11. prod-beer-49 — Kona Big Wave Golden Ale (bottles)**
Primary: `kona big wave golden ale` — confirmed real via WebSearch, not volume-backed. (Golden ale, 4.4% ABV, 21 IBU, brewed with Galaxy and Citra hops; originally launched in 1994 as "Pacific Golden Ale," renamed for the Makaha waves where Hawaii's first surf competition was held in 1954; brewed at Kona Brewing in Kailua-Kona, Big Island.)
Secondary (5): kona big wave price · buy kona big wave · kona big wave review · kona big wave near me · kona big wave abv
FAQ: none with real PAA-level demand found; note for product copy only: verify current brewing location before making an "always brewed in Hawaii" claim, since some Kona-branded beers sold on the mainland are produced under license at mainland facilities.

**12. prod-beer-50 — Kona Big Wave Golden Ale (can)**
Primary: `kona big wave golden ale` — shared brand anchor, confirmed real via WebSearch, not volume-backed.
Secondary (5): kona big wave can price · buy kona big wave cans · kona big wave review · kona big wave near me · kona big wave abv
FAQ: defer to #11.

**13. prod-beer-54 — Leinenkugel's Summer Shandy**
Primary: `leinenkugel's summer shandy` — confirmed real via WebSearch, not volume-backed. (4.2% ABV wheat beer blended with a natural lemonade-style flavor; launched 2007; GABF Silver Medal, 2012, Fruit Wheat Beer category; brewed by Jacob Leinenkugel Brewing Co., Chippewa Falls, WI, founded 1867.)
Secondary (5): leinenkugel's summer shandy price · buy leinenkugel's summer shandy · leinenkugel's summer shandy review · leinenkugel's summer shandy near me · leinenkugel's summer shandy abv
FAQ: What is a shandy? — A beer blended with a lemon-lime soda or lemonade-style flavoring; Summer Shandy (2007) is widely credited with popularizing the modern American shandy category and remains Leinenkugel's best-known nationwide release.

**14. prod-beer-55 — Leinenkugel's Sunset Wheat**
Primary: `leinenkugel's sunset wheat` — confirmed real via WebSearch, not volume-backed. (Belgian-style witbier, 4.9% ABV, 13.5 IBU, notes of orange and blueberry; GABF Silver Medal and World Beer Cup Bronze, both 2006, Herb and Spice category.)
Secondary (5): leinenkugel's sunset wheat price · buy leinenkugel's sunset wheat · leinenkugel's sunset wheat review · leinenkugel's sunset wheat near me · leinenkugel's sunset wheat abv
FAQ: none SKU-specific found; note for copy: award-winning witbier (GABF Silver + World Beer Cup Bronze, 2006).

**15. prod-beer-66 — New Belgium Fat Tire Ale (bottles)**
Primary: `new belgium fat tire amber ale` — confirmed real via WebSearch, not volume-backed. (5.2% ABV Belgian-inspired amber ale, New Belgium's flagship for ~30 years; recipe traces to founder Jeff Lebesch's 1988 bicycle tour through Belgium; became America's first independently certified carbon-neutral beer in 2020; New Belgium brews 400,000+ barrels of it annually.)
Secondary (5): fat tire beer price · buy fat tire beer · fat tire beer review · fat tire beer near me · fat tire beer abv
FAQ: Why is it called "Fat Tire"? — Real, well-documented fact: named for a co-founder's 1988 bicycle tour of Belgium that directly inspired the beer's recipe.

**16. prod-beer-67 — New Belgium Fat Tire Ale (cans)**
Primary: `new belgium fat tire amber ale` — shared brand anchor, confirmed real via WebSearch, not volume-backed.
Secondary (5): fat tire beer can price · buy fat tire beer cans · fat tire beer review · fat tire beer near me · fat tire beer abv
FAQ: defer to #15.

**17. prod-beer-79 — Samuel Adams Utopias**
Primary: **`utopias beer sam adams`** (1,900, KD27, T2) — **CSV-backed**, the strongest single find in the whole non-Guinness/Deschutes/Sierra Nevada dataset.
Secondary (6): sam adams utopias beer (720, KD27, T2) · sam adams' utopias beer (480, KD26, T2) · samuel adams (40,500, KD53, T3 — brand background) · sam adams beer (5,400, KD34, T2) · boston beer company (8,100, KD71, T3 — parent company) · buy samuel adams utopias
FAQ: How strong is Samuel Adams Utopias? — Real, notable fact: the 2025 release reached **30% ABV**, the highest in the beer's history, and Utopias is illegal to sell in roughly 15 US states as a result. It's been released about every two years since 2001 (14 editions so far), barrel-finished across vintages up to 30 years old in a blend of Irish whiskey, Amarone, white port, ruby port, Carcavelos, cognac, and scotch casks.
**Catalog-fit note (not an SEO issue, flagging anyway):** Utopias doesn't carbonate or ferment like a conventional beer — it's a barrel-aged, spirit-adjacent extreme beer, closer in character to a fine spirit than to an "ale." Worth a quick sanity-check with whoever owns catalog structure on whether "Ale & Wheat" is the intended long-term home for this SKU, independent of the SEO work above.

**18. prod-beer-84 — Shock Top Belgian White**
Primary: `shock top belgian white` — confirmed real via WebSearch, not volume-backed. (Witbier, 5.2% ABV, spiced with real orange/lemon/lime peel and coriander; brewed by Anheuser-Busch in St. Louis, MO; launched 2006, became the flagship of the Shock Top brand.)
Secondary (5): shock top belgian white price · buy shock top belgian white · shock top belgian white review · shock top near me · shock top abv
FAQ: What's in Shock Top Belgian White? — Real fact: an unfiltered witbier spiced with real orange, lemon, and lime peel plus coriander — first released in 2006 and now Anheuser-Busch's flagship "Shock Top" beer.

**19. prod-beer-87 — Sierra Nevada Pale Ale (bottles)**
Primary: **`sierra nevada pale ales`** (1,900, KD16, T1) — **CSV-backed**.
Secondary (6): alcohol content in sierra nevada pale ale (720, KD9, T1) · sierra nevada pale ale alcohol content (480, KD19, T1) · sierra nevada pale ale alcohol percent (480, KD17, T1) · sierra nevada beer (6,600, KD41, T2 — brand background) · sierra nevada brewing co pale ale (260, KD29, T2) · buy sierra nevada pale ale
FAQ: What's the ABV of Sierra Nevada Pale Ale? — real, recurring cluster (~1,700/mo combined across the 3 ABV-phrasing variants above); real answer: ~5.6% ABV. Sierra Nevada Pale Ale (1980) is widely credited as one of the beers that launched the modern American craft-pale-ale category.

**20. prod-beer-88 — Sierra Nevada Pale Ale (cans)**
Primary: `sierra nevada pale ales` (1,900, KD16, T1) — shared brand/SKU anchor, CSV-backed.
Secondary (5): sierra nevada pale ale can price · buy sierra nevada pale ale cans · alcohol content in sierra nevada pale ale (720, KD9, T1) · sierra nevada beer (6,600, KD41, T2) · sierra nevada brewing co pale ale (260, KD29, T2)
FAQ: defer to #19.

**21. prod-beer-95 — SweetWater 420 Extra Pale Ale (bottles)**
Primary: `sweetwater 420 extra pale ale` — confirmed real via WebSearch, not volume-backed. (American pale ale, 5.7% ABV, 39 IBU, Cascade and Centennial hops; first brewed April 20, 1997; SweetWater's flagship and the best-selling pale ale in Georgia; brewed in Atlanta, GA.)
Secondary (5): sweetwater 420 price · buy sweetwater 420 · sweetwater 420 review · sweetwater 420 near me · sweetwater 420 abv
FAQ: Why is it called "420"? — Real, low-controversy fact: first brewed on April 20, 1997 (4/20), a date that also ties into the "420" cannabis-culture number fitting SweetWater's laid-back brand identity; it remains the best-selling pale ale in Georgia.

**22. prod-beer-96 — SweetWater 420 Extra Pale Ale (cans)**
Primary: `sweetwater 420 extra pale ale` — shared brand anchor, confirmed real via WebSearch, not volume-backed.
Secondary (5): sweetwater 420 can price · buy sweetwater 420 cans · sweetwater 420 review · sweetwater 420 near me · sweetwater 420 abv
FAQ: defer to #21.

---

### STOUT & PORTER (14 products)

**23. prod-beer-25 — Deschutes Black Butte Porter**
Primary: **`deschutes brewery black butte porter`** (590, KD7, T1) — **CSV-backed, exact match**, the best single row in the Deschutes export.
Secondary (6): deschutes porter (260, KD26, T2) · deschutes black butte (210, KD20, T1) · deschutes beer (1,000, KD32, T2) · deschutes beers (320, KD27, T2) · deschutes brewery beers (480, KD19, T1) · deschutes brewery (12,100, KD57, T3 — brand background)
FAQ: none SKU-specific PAA found; note for copy: Black Butte Porter is Deschutes' flagship year-round beer, first brewed in 1988, and one of the earliest widely-distributed craft porters in the US.

**24. prod-beer-34 — Firestone Walker Parabola Imperial Stout**
Primary: `firestone walker parabola imperial stout` — confirmed real via WebSearch, not volume-backed. (California Russian Imperial Stout, ~13.1% ABV — varies by vintage, 2025 edition 14.1% — barrel-aged roughly a year in a rotating blend of bourbon barrels that has included Elijah Craig, Four Roses, Pappy Van Winkle, Woodford Reserve, and Buffalo Trace; annual release since 2010; routinely ranked among the top beers in the world.)
Secondary (5): firestone walker parabola price · buy firestone walker parabola · firestone walker parabola review · firestone walker parabola near me · firestone walker parabola abv
FAQ: What barrels is Parabola aged in? — Real, notable fact: a rotating blend that has included Elijah Craig, Four Roses, Pappy Van Winkle, Woodford Reserve, and Buffalo Trace bourbon barrels — a genuinely prestigious lineup that helps explain the beer's cult reputation.

**25. prod-beer-38 — Founders Breakfast Stout**
Primary: `founders breakfast stout` — confirmed real via WebSearch, not volume-backed. (Imperial stout, 8.3% ABV, brewed with flaked oats plus bitter and sweetened chocolates, Sumatra and Kona coffee; brewed by Founders Brewing Co., Grand Rapids, MI.)
Secondary (5): founders breakfast stout price · buy founders breakfast stout · founders breakfast stout review · founders breakfast stout near me · founders breakfast stout abv
FAQ: What makes Founders Breakfast Stout a "breakfast" beer? — Real fact: brewed with Sumatra and Kona coffee plus both bitter and sweetened chocolate on top of flaked oats, echoing a coffee-and-chocolate breakfast profile at 8.3% ABV.

**26. prod-beer-39 — Founders KBS Imperial Stout**
Primary: `founders kbs kentucky breakfast stout` — confirmed real via WebSearch, not volume-backed. ("KBS" = Kentucky Breakfast Stout; imperial stout with coffee and chocolate, aged a full year in bourbon barrels, ~12% ABV, 70 IBU; released annually each spring and one of the most sought-after, hardest-to-find annual releases in American craft brewing.)
Secondary (5): founders kbs price · buy founders kbs · founders kbs review · founders kbs near me · founders kbs abv
FAQ: What does KBS stand for? — Kentucky Breakfast Stout — real, notable fact confirming the brief's framing: it's legendarily hard to find on release each spring, aged a full year in bourbon barrels, ~12% ABV.

**27. prod-beer-40 — Founders Porter**
Primary: `founders porter` — confirmed real via WebSearch, not volume-backed. (American robust porter, 6.5% ABV, 45 IBU; two-time Great American Beer Festival Silver Medal winner, 2014 and 2020, Robust Porter category; brewed in Grand Rapids, MI.)
Secondary (5): founders porter price · buy founders porter · founders porter review · founders porter near me · founders porter abv
FAQ: none SKU-specific PAA found; note for copy: two-time GABF Silver Medal winner (Robust Porter category, 2014 & 2020).

**28. prod-beer-41 — Goose Island Bourbon County Brand Stout**
Primary: `goose island bourbon county brand stout` — confirmed real via WebSearch, not volume-backed. (Imperial stout, 13–15% ABV depending on vintage — 2026 edition 14.2%; first brewed 1992 to mark Goose Island's 1,000th brewpub batch, first offered to the public in 2005; widely credited as having invented the modern bourbon-barrel-aged beer category; holds a perfect 100/100 rating on BeerAdvocate across 13,000+ reviews.)
Secondary (5): goose island bourbon county price · buy goose island bourbon county stout · goose island bourbon county review · goose island bourbon county near me · goose island bourbon county abv
FAQ: Did Goose Island invent bourbon-barrel-aged beer? — Real, well-documented fact confirming the brief's framing: Bourbon County Stout is widely credited as the first modern bourbon-barrel-aged beer (1992) and remains one of the most collected and traded specialty beers in the US.

**29. prod-beer-43 — Great Lakes Edmund Fitzgerald Porter**
Primary: `great lakes edmund fitzgerald porter` — confirmed real via WebSearch, not volume-backed. (American porter, ~5.8–6.0% ABV, 37 IBU; brewed by Great Lakes Brewing Co., Cleveland, OH, founded 1988; named for the SS Edmund Fitzgerald, the Great Lakes freighter that sank on Lake Superior on November 10, 1975, with all 29 crew lost, 13 of them from the Cleveland area; widely regarded as one of the definitive American porters, GABF medal winner.)
Secondary (5): edmund fitzgerald porter price · buy edmund fitzgerald porter · edmund fitzgerald porter review · edmund fitzgerald porter near me · edmund fitzgerald porter abv
FAQ: Why is it called "Edmund Fitzgerald"? — Real, factually careful answer: named as a tribute to the SS Edmund Fitzgerald, a real Great Lakes freighter that sank in a November 1975 storm; not a marketing gimmick. **Copyright caution:** do not reproduce any lyrics from Gordon Lightfoot's song about the wreck in product copy.

**30–31. prod-beer-44 / prod-beer-45 — Guinness Draught Irish Stout (4x14.9oz cans / 8x14.9oz cans)**
Both SKUs share one real, CSV-backed dataset (deduplicated across the two Guinness export files) — the strongest and deepest data in the entire batch outside Deschutes/Sierra Nevada/Sam Adams.

**44. Guinness Draught Irish Stout (4 x 14.9oz cans)**
Primary: **`guinness draught`** (6,600, KD30, T2) — CSV-backed.
Secondary (6): draught guinness stout (6,600, KD16, T1) · guinness draught stout (2,900, KD12, T1) · how to pour a guinness can (1,600, KD21, T1) · guinness abv (5,400, KD25, T1) · guinness near me (4,400, KD26, T1) · guinness can (1,000, KD11, T1)
FAQ (2): "How do you pour a Guinness can properly?" (1,600, KD21 — real, high-demand; ties directly to the nitro-widget cascade effect this can format is built around) · "Why is there a ball in a Guinness can?" (combined cluster across "guinness can beer ball," "guinness beer in can with ball," "guinness beer with ball in can," "guinness stout can ball," and both "why is there a ball..." phrasings — **~3,800+ combined** — real answer: it's the nitrogen widget, which releases a burst of nitrogen gas on opening to recreate a creamy draught-style pour at home).

**45. Guinness Draught Irish Stout (8 x 14.9oz cans)**
Primary: `guinness draught` (6,600, KD30, T2) — shared brand anchor with #44; differentiate on-page via pack-size/value framing.
Secondary (5): guinness draught beer (2,400, KD12, T1) · guinness stout (6,600, KD36, T2) · guinness calories (6,600, KD32, T2) · guinness abv (5,400, KD25, T1) · where to buy guinness (320, KD16, T1)
FAQ (2): "Is Guinness a stout?" (1,600, KD18 — real, clean definitional hit; answer: yes, Guinness Draught is the global style-defining example of a dry Irish stout) · "How many calories are in a Guinness?" (a genuinely enormous combined cluster of near-duplicate phrasings across both export files — see Phase 6 blog topic #1 below for the full combined figure; real answer: roughly 125 calories per 12oz serving of Guinness Draught).
**Gap note:** no pack-size-specific rows ("guinness 4 pack," "guinness 8 pack") appeared in either export — both SKUs currently differentiate purely on brand-level Guinness demand plus on-page value/pack copy, not on distinct keyword targets.

**32. prod-beer-53 — Left Hand Milk Stout Nitro**
Primary: `left hand milk stout nitro` — confirmed real via WebSearch, not volume-backed. (Sweet/milk stout, 6.0% ABV, brewed by Left Hand Brewing Company, Longmont, CO; Left Hand was the first craft brewery to release a bottled nitrogenated beer; "milk stout" refers to lactose added during brewing, which doesn't ferment and lends natural sweetness and body.)
Secondary (5): left hand milk stout nitro price · buy left hand milk stout nitro · left hand milk stout nitro review · left hand milk stout nitro near me · left hand milk stout nitro abv
FAQ: What makes a "milk stout" different from a regular stout? — Real fact: lactose (milk sugar) is added during brewing; because yeast can't ferment lactose, it remains in the finished beer, adding natural sweetness and a fuller body — Left Hand was also the first craft brewery to bottle a nitrogenated beer.

**33. prod-beer-64 — Murphy's Irish Stout**
Primary: `murphy's irish stout` — confirmed real via WebSearch, not volume-backed. (Dry Irish stout, 4% ABV, brewed at Murphy's Brewery in Cork, Ireland — founded 1856 by James J. Murphy — owned by Heineken since 1983; brewed to be smoother and less bitter than Guinness, with a flavor sometimes described as evocative of chocolate milk.)
Secondary (5): murphy's irish stout price · buy murphy's irish stout · murphy's irish stout review · murphy's irish stout near me · murphy's irish stout abv
FAQ: What's the difference between Murphy's and Guinness? — Real, useful comparison: both are dry Irish stouts at a matching 4% ABV, but Murphy's (Cork, Heineken-owned) is brewed to be smoother, less bitter, and slightly sweeter/creamier than Guinness (Dublin, Diageo-owned).

**34. prod-beer-75 — Prairie Artisan Ales Bomb! Imperial Stout**
Primary: `prairie bomb imperial stout` — confirmed real via WebSearch, not volume-backed. (Imperial pastry stout, ~13% ABV, brewed by Prairie Artisan Ales in McAlester, OK; aged on coffee, cacao nibs, vanilla beans, and ancho chili peppers; BeerAdvocate score of 99/100 across 6,600+ ratings.)
Secondary (5): prairie bomb price · buy prairie bomb · prairie bomb review · prairie bomb near me · prairie bomb abv
FAQ: What's in Prairie Bomb!? — Real, distinctive fact: an imperial stout aged on coffee, cacao nibs, vanilla beans, and ancho chili peppers, delivering a chocolate-coffee flavor with a subtle chile warmth at ~13% ABV — one of the highest-rated stouts on BeerAdvocate.

**35. prod-beer-80 — Samuel Smith Organic Chocolate Stout**
Primary: `samuel smith organic chocolate stout` — confirmed real via WebSearch, not volume-backed. (5% ABV, brewed at Samuel Smith Old Brewery in Tadcaster, Yorkshire, UK, using well water drawn from a well sunk in 1758; USDA Organic and Soil Association certified; registered with The Vegan Society.)
Secondary (5): samuel smith chocolate stout price · buy samuel smith chocolate stout · samuel smith chocolate stout review · samuel smith chocolate stout near me · samuel smith chocolate stout abv
FAQ: Is Samuel Smith's Chocolate Stout vegan? — Real fact: yes, it's registered with The Vegan Society and is both USDA Organic and Soil Association certified — brewed with well water from an original 1758 well in Tadcaster, Yorkshire, at 5% ABV.

**36. prod-beer-98 — The Bruery Black Tuesday Imperial Stout**
Primary: `the bruery black tuesday imperial stout` — confirmed real via WebSearch, not volume-backed. (Imperial stout, ABV varies by vintage — roughly 18–20%, 2025 release 19.1% — bourbon-barrel-aged over a year, released once annually, packaged in 375ml bottles; brewed by The Bruery, Placentia, CA.)
Secondary (5): black tuesday price · buy black tuesday beer · black tuesday review · black tuesday near me · black tuesday abv
FAQ: How strong is Black Tuesday? — Real fact: bourbon-barrel-aged imperial stout historically ranging 18–20% ABV depending on vintage (2025 release: 19.1%); released just once a year and considered one of the most cult-followed annual stout releases in American craft beer.

---

## Phase 4 — Brand Hub Drafts

Every brand with 2+ stocked SKUs in this batch, in the site's `brandHubs.ts` format (`categoryLabel`, `hook`, `faqs`, secondary keywords).

### Allagash
**categoryLabel:** Ale & Wheat
**Hook:** Founded in 1995 by Rob Tod in Portland, Maine, with the singular goal of introducing Americans to Belgian-inspired ales, Allagash built its entire reputation on one beer: Allagash White, its first-ever recipe and still its flagship today. The witbier has earned 18 total medals across the Great American Beer Festival, World Beer Cup, and European Beer Star — including 10 golds — a medal count matched by very few American witbiers.
**Secondary keywords:** allagash white price · buy allagash white · allagash white review · allagash white abv · allagash brewing
**FAQs:**
1. What makes Allagash White a witbier? — Spiced with coriander and curaçao orange peel over a wheat-and-oat grain bill, unfiltered for a hazy, pale-straw pour.
2. Is Allagash White the brewery's flagship? — Yes, real fact: it was Allagash's very first recipe in 1995 and remains the beer the brewery is best known for.

### Bell's
**categoryLabel:** Ale & Wheat
**Hook:** Bell's Brewery, based in Comstock, Michigan just outside Kalamazoo, built Oberon into one of the most recognized seasonal wheat ales in American craft brewing by doing less, not more — it's brewed with just four ingredients (wheat malt, Saaz hops, water, and Bell's proprietary house ale yeast) and zero added spices or fruit, an unusual restraint for the "summer wheat" style.
**Secondary keywords:** bell's oberon price · buy bell's oberon · bell's oberon review · bell's oberon abv · bell's brewery michigan
**FAQs:**
1. Does Oberon have fruit or spices in it? — No — a deliberate point of difference from most competing summer wheat ales.
2. Where is Bell's Oberon brewed? — Comstock, Michigan, near Kalamazoo.

### Blue Moon
**categoryLabel:** Ale & Wheat
**Hook:** Blue Moon Belgian White traces to 1995, when brewer Keith Villa created it at the Sandlot Brewery inside Coors Field in Denver — originally under the name "Bellyslide Belgian White" — before it grew into Molson Coors' own Blue Moon Brewing Co. The witbier is built on Valencia orange peel and coriander at 5.4% ABV, and remains one of the most widely available Belgian-style wheat beers in the US.
**Secondary keywords:** blue moon belgian white price · buy blue moon belgian white beer · blue moon beer review · blue moon beer abv
**FAQs:**
1. Who created Blue Moon? — Real fact: brewer Keith Villa, in 1995, at the Sandlot Brewery inside Coors Field, Denver.
2. What's in Blue Moon Belgian White? — Malted barley, white wheat, oats, Valencia orange peel, and coriander.
**Homonym caution (per brief):** a future dedicated Blue Moon keyword export should be filtered carefully for the astronomical "blue moon" (second full moon in a month) — expect significant unrelated volume.

### Kona
**categoryLabel:** Ale & Wheat
**Hook:** Kona Big Wave Golden Ale is named for the waves at Makaha, on Oahu, where Hawaii's first surf competition was held in 1954 — a fitting tribute from a beer brewed in Kailua-Kona on the Big Island. Originally launched in 1994 as "Pacific Golden Ale," it's built on Galaxy and Citra hops for a bright, tropical character at 4.4% ABV.
**Secondary keywords:** kona big wave price · buy kona big wave · kona big wave review · kona big wave abv
**FAQs:**
1. Where is Kona Big Wave brewed? — Kailua-Kona, on Hawaii's Big Island, using water filtered through volcanic aquifer rock — worth verifying against current packaging before making a blanket "always Hawaii-brewed" claim, since some Kona-branded beers sold on the mainland are produced under license.
2. What's the ABV of Kona Big Wave? — 4.4% ABV, 21 IBU.

### Leinenkugel's
**categoryLabel:** Ale & Wheat
**Hook:** Jacob Leinenkugel Brewing Company has operated out of Chippewa Falls, Wisconsin since 1867, and its two stocked wheat beers represent two different eras of the brand's identity: Sunset Wheat (2006), an award-winning Belgian-style witbier with orange and blueberry notes, and Summer Shandy (2007), the beer that arguably invented the modern American shandy category by blending wheat beer with a natural lemonade-style flavor.
**Secondary keywords:** leinenkugel's summer shandy price · leinenkugel's sunset wheat price · buy leinenkugel's · leinenkugel's review · leinenkugel's abv
**FAQs:**
1. What is a shandy? — A beer blended with a lemon-lime soda or lemonade-style flavoring; Leinenkugel's Summer Shandy (2007) is widely credited with popularizing the category nationally.
2. Is Sunset Wheat a witbier? — Yes, a Belgian-style witbier with orange and blueberry character, GABF Silver and World Beer Cup Bronze medalist in 2006.

### New Belgium
**categoryLabel:** Ale & Wheat
**Hook:** New Belgium's Fat Tire has been the Fort Collins, Colorado brewery's flagship for roughly three decades, its recipe directly inspired by co-founder Jeff Lebesch's 1988 bicycle tour through Belgium. At 5.2% ABV and brewed north of 400,000 barrels a year today, Fat Tire also holds a genuine sustainability first: in 2020 it became America's first independently certified carbon-neutral beer.
**Secondary keywords:** fat tire beer price · buy fat tire beer · fat tire beer review · fat tire beer abv · new belgium brewing
**FAQs:**
1. Why is it called "Fat Tire"? — Named for a co-founder's 1988 bicycle tour through Belgium that directly inspired the recipe.
2. Is Fat Tire carbon neutral? — Yes, real fact: it became America's first certified carbon-neutral beer in 2020.

### Sierra Nevada
**categoryLabel:** Ale & Wheat
**Hook:** Sierra Nevada Pale Ale, first brewed in 1980, is one of the beers most directly credited with launching the modern American craft-beer movement and defining the American Pale Ale style as we know it today. Sierra Nevada remains employee-owned, brewing at its original Chico, California facility as well as a second brewery in Mills River/Asheville, NC.
**Secondary keywords:** sierra nevada pale ales (1,900, KD16, T1) · sierra nevada beer (6,600, KD41, T2) · alcohol content in sierra nevada pale ale (720, KD9, T1) · sierra nevada brewing co pale ale (260, KD29, T2)
**FAQs:**
1. What's the ABV of Sierra Nevada Pale Ale? (real, recurring cluster ~1,700/mo combined) — ~5.6% ABV.
2. Did Sierra Nevada start the craft beer movement? — Widely credited, along with a handful of contemporaries, as one of the beers that launched the modern American craft pale ale category in 1980.
**Homonym note (data-quality flag, not customer-facing):** "Sierra Nevada" the brand collides very heavily with the real Sierra Nevada mountain range in raw keyword data — the bare brand name and several geography-adjacent queries (combined ~47,000 volume) were dropped as noise in Phase 1 and must not be mistaken for brand-shopping demand in any future pull.

### SweetWater
**categoryLabel:** Ale & Wheat
**Hook:** SweetWater 420 Extra Pale Ale has been Atlanta's best-selling pale ale since its first brew day on April 20, 1997 — a date, and a number, that became core to SweetWater's laid-back brand identity. At 5.7% ABV and 39 IBU, it remains the brewery's flagship.
**Secondary keywords:** sweetwater 420 price · buy sweetwater 420 · sweetwater 420 review · sweetwater 420 abv
**FAQs:**
1. Why is it called "420"? — First brewed on April 20, 1997.
2. Is 420 the best-selling pale ale in Georgia? — Real fact, per SweetWater's own marketing: yes.

### Founders
**categoryLabel:** Stout & Porter
**Hook:** Founders Brewing Co. of Grand Rapids, Michigan has three genuinely distinct stouts stocked here, spanning the full range of the "big stout" category: Breakfast Stout (8.3% ABV, coffee-and-chocolate imperial stout), the legendarily hard-to-find KBS/Kentucky Breakfast Stout (~12% ABV, bourbon-barrel-aged a full year, released once each spring), and the more restrained, twice-GABF-medaled Founders Porter (6.5% ABV).
**Secondary keywords:** founders breakfast stout price · founders kbs price · founders porter price · buy founders stout · founders brewing michigan
**FAQs:**
1. What does KBS stand for? — Kentucky Breakfast Stout; aged a full year in bourbon barrels, released annually each spring, and one of the most sought-after annual beer releases in the US.
2. What's the difference between Breakfast Stout and KBS? — Breakfast Stout (8.3% ABV) is Founders' year-round coffee-and-chocolate imperial stout; KBS (~12% ABV) is the same idea taken further and bourbon-barrel-aged for a full year as a limited annual release.
3. Has Founders Porter won awards? — Yes, real fact: two-time GABF Silver Medal winner (Robust Porter category, 2014 and 2020).

### Guinness
**categoryLabel:** Stout & Porter
**Hook:** Guinness Draught is the global reference point for dry Irish stout — brewed in Dublin since 1759 and instantly recognizable by its cascading nitrogen pour, delivered at home via the widget in every can. Both stocked pack sizes carry the exact same beer; the only real question for a shopper is 4-pack or 8-pack.
**Secondary keywords:** guinness draught (6,600, KD30, T2) · draught guinness stout (6,600, KD16, T1) · guinness stout (6,600, KD36, T2) · guinness abv (5,400, KD25, T1) · guinness near me (4,400, KD26, T1)
**FAQs:**
1. How do you pour a Guinness can properly? (1,600, KD21, real, high-demand) — Tilt the glass at 45°, pour steadily, then let the nitrogen widget settle for the signature cascade before topping off.
2. Why is there a ball in a Guinness can? (combined cluster ~3,800+/mo, real) — It's the nitrogen widget, which releases pressurized nitrogen gas on opening to recreate a creamy draught-style pour at home.
3. How many calories are in a Guinness? (an enormous combined cluster across both export files — see Blog Topic #1 below) — roughly 125 calories per 12oz serving of Guinness Draught, genuinely lower than many people assume for a dark stout.
4. Is Guinness a stout? (1,600, KD18, real) — Yes, it's the style-defining example of a dry Irish stout globally.

**Flagged brand hub, not on the pre-cleared list — recommend sign-off:** **Goose Island** also clears the 2+ SKU bar in this batch (312 Urban Wheat Ale, Ale & Wheat, and Bourbon County Brand Stout, Stout & Porter) but wasn't named in the brief's pre-approved hub list, likely because the two SKUs sit in different subcategories and 312's product name doesn't carry the "Goose Island" brand prefix. Since the underlying brand is genuinely the same (confirmed via WebSearch — both are Goose Island Beer Co., Chicago), flagging it here for a decision on whether a cross-subcategory Goose Island hub makes sense structurally, before writing it. If approved: hook material would center on Goose Island's dual identity as both an approachable Chicago-neighborhood wheat ale (312, named for the city's area code) and the brewery that's widely credited with inventing the modern bourbon-barrel-aged beer category (Bourbon County Stout, 1992) — a genuinely striking range for one brewery.

---

## Phase 5 (Phase 8 per brief numbering) — Gap Analysis

### Part A — Real missing expressions within brands already stocked
All of these are additional, genuinely distinct SKUs from brewers already in the catalog — not new-to-catalog brands. Several carry real CSV support from the exports already pulled for this batch.

| Brand (stocked SKU) | Missing expression | Support |
|---|---|---|
| Deschutes (Black Butte Porter stocked) | Deschutes Fresh Squeezed IPA | **CSV-backed, strong:** "deschutes fresh squeezed ipa" (1,900, KD18, T1) + "deschutes brewery fresh squeezed ipa" (1,300, KD19, T1) + "fresh squeezed ipa" (720, KD17, T1) + "deschutes ipa" (720, KD21, T1) — combined **~6,000+/mo**, the single strongest unstocked-SKU signal in this entire batch. |
| Samuel Adams (Utopias stocked) | Samuel Adams Boston Lager | **CSV-backed, strong:** "samuel adams boston lager" (4,400, KD27, T2) + "sam adams boston lager" (2,900, KD24, T1) + "boston lager" (3,600, KD22, T1) — combined **~10,000+/mo**; Boston Lager is Samuel Adams' actual flagship and is currently entirely unstocked in favor of the extreme-tier Utopias. |
| Samuel Adams (Utopias stocked) | Samuel Adams Octoberfest | **CSV-backed:** "sam adams octoberfest" (5,400, KD22, T1) + "samuel adams octoberfest" (2,900, KD21, T1) + "samuel adams octoberfest beer" (880, KD18, T1) — combined **~9,000+/mo**, a large seasonal-demand signal. |
| Samuel Adams (Utopias stocked) | Samuel Adams Summer Ale | **CSV-backed:** "sam adams summer ale" (3,600, KD15, T1) + "samuel adams summer ale" (2,400, KD11, T1) — combined **~6,000/mo**. |
| Sierra Nevada (Pale Ale stocked) | Sierra Nevada Torpedo Extra IPA | **CSV-backed:** "torpedo beer" (320, KD18, T1) — real, direct product reference. |
| Sierra Nevada (Pale Ale stocked) | Sierra Nevada Porter | **CSV-backed:** "sierra nevada brewing co porter" (320, KD9, T1) — same brewer, different stocked subcategory (Stout & Porter) fit. |
| Sierra Nevada (Pale Ale stocked) | Sierra Nevada Pilsner | **CSV-backed:** "sierra nevada pilsner" (1,000, KD11, T1) — real, moderate volume. |
| Bell's (Oberon stocked) | Bell's Two Hearted Ale | Confirmed real via WebSearch, not volume-backed in this pull — Bell's IPA flagship, frequently ranked among the top-rated beers in America by BeerAdvocate/Untappd; a much larger gap by reputation than any brand-level data pulled here can show. |
| New Belgium (Fat Tire stocked) | New Belgium Voodoo Ranger IPA line | Confirmed real via WebSearch, not volume-backed — New Belgium's modern flagship IPA family, now larger-selling than Fat Tire itself in most markets. |
| Founders (3 SKUs stocked) | Founders All Day IPA | Confirmed real via WebSearch, not volume-backed — Founders' session-IPA flagship, one of the best-selling IPAs in the Midwest. |
| Firestone Walker (Parabola stocked) | Firestone Walker 805 | Confirmed real via WebSearch, not volume-backed — Firestone Walker's blonde ale flagship and one of the best-selling craft beers in California; a much bigger-volume beer than the stocked extreme-stout SKU. |
| Guinness (Draught stocked, 2 pack sizes) | Guinness Extra Stout / Foreign Extra Stout | **CSV-adjacent:** general Guinness style-variety demand ("kinds of guinness," 1,000, KD18, T1) supports awareness of the wider Guinness lineup beyond Draught. |
| Guinness (Draught stocked) | Guinness 0 (non-alcoholic) | **CSV-backed:** "guinness non alcoholic beer" (1,600, KD26, T2) — real, sizeable demand for the alcohol-free line, not currently stocked. |
| Chimay (Blue stocked) | Chimay Red (Première) / Chimay White (Cinq Cents) | Confirmed real via WebSearch, not volume-backed — the other two genuine Trappist siblings in Chimay's core range. |
| Duvel (stocked) | Duvel Tripel Hop | Confirmed real via WebSearch, not volume-backed — a real, well-distributed Duvel seasonal variant. |
| Delirium Tremens (stocked) | Delirium Nocturnum | Confirmed real via WebSearch, not volume-backed — the dark strong ale sibling from the same Delirium/Huyghe range. |
| Great Lakes (Edmund Fitzgerald stocked) | Great Lakes Christmas Ale | Confirmed real via WebSearch, not volume-backed — Great Lakes' other flagship, a genuinely famous seasonal release. |
| Left Hand (Milk Stout Nitro stocked) | Left Hand Milk Stout (original, non-nitro) | Confirmed real via WebSearch, not volume-backed — the base beer the Nitro version is built from. |
| Samuel Smith (Chocolate Stout stocked) | Samuel Smith Oatmeal Stout | Confirmed real via WebSearch, not volume-backed — a well-known, widely distributed sibling in the same range. |

### Part B — Real unstocked ale/wheat/stout/porter brands with genuine demand
No category-level "beer" export exists in this batch, so none of these carry direct SEMrush volume — all are confirmed real via WebSearch/general knowledge and flagged accordingly, ranked by rough real-world market significance rather than data:

| Finding | Notes |
|---|---|
| Hoegaarden Belgian Witbier | The original modern witbier, arguably a bigger global name than any single witbier currently stocked (Allagash, Blue Moon, Shock Top). |
| St. Bernardus Abt 12 | Belgian quadrupel, extremely well-regarded in craft circles — often discussed alongside Trappist beers like Chimay despite not being Trappist-certified itself (brewed under license from the original Sixtus recipe). |
| Westvleteren 12 / Rochefort 10 | Two of the most famous Trappist quadrupels in the world — Westvleteren in particular carries outsized "unicorn beer" cult status; genuine complements to the stocked Chimay Blue. |
| Bell's Two Hearted Ale | Already flagged in Part A as a same-brewer gap — also stands as a real unstocked-category finding given how frequently it tops "best beer in America" lists. |
| North Coast Old Rasputin Russian Imperial Stout | Iconic, widely available imperial stout, a natural category-mate for Founders KBS/Parabola/Bourbon County Stout. |
| Oskar Blues Ten FIDY Imperial Stout | Well-known canned imperial stout, notable for pioneering canned craft beer generally. |
| Stone IPA / Stone Brewing | Large, nationally significant craft brewer with zero presence in the current Ale & Wheat lineup. |
| Lagunitas IPA | One of the best-selling craft IPAs in the US; no Lagunitas SKU currently stocked anywhere in the beer catalog. |
| Franziskaner Hefeweizen / Paulaner Hefeweizen | Two of the most recognized German wheat beers globally — a genuine gap alongside the stocked Belgian-style wits, since German hefeweizen is a distinct, well-known style not represented at all. |
| Weihenstephaner Hefeweizen | From the world's oldest continuously operating brewery (founded 1040); a strong, well-known name if a German wheat beer line is ever added. |
| Anchor Porter | A historically important American porter (San Francisco), a reasonable category-mate for the stocked Deschutes/Great Lakes/Founders porters. |

---

## Phase 6 — Blog Topic Candidates

1. **"How Many Calories Are Actually in a Guinness?"** — the single strongest data-backed cluster in this entire batch: dozens of near-duplicate phrasings across both Guinness export files ("how many calories in a guinness," "how many calories are in a pint of guinness," "guinness calorie content," "guinness beer nutrition info," "nutrition facts of guinness," etc.) combine to **roughly 40,000–50,000/mo** in raw volume once every variant is summed. Real, low-KD (many individual rows sit at KD 13–25), and genuinely useful since Guinness's actual calorie count (~125/12oz) surprises most people expecting a "heavy" dark beer.
2. **"The Guinness Widget, Explained"** — "how to pour a guinness can" (1,600, KD21) + the can/ball cluster ("guinness can beer ball," "guinness beer in can with ball," "guinness beer with ball in can," "guinness stout can ball," both "why is there a ball..." phrasings) — combined **~5,400+/mo**, real, and ties directly to both stocked Guinness SKUs being cans.
3. **"Is Guinness a Stout? A Straight Answer"** — "is guinness a stout" (1,600, KD18) + "what kind of beer is guinness" (1,300, KD25) + "what type of beer is guinness" (1,000, KD28) + "what style of beer is guinness" (480, KD29) — combined **~4,300+/mo**, real, and doubles as strong Stout & Porter hub-page material.
4. **"Sam Adams Utopias: Inside the Strongest Beer in America"** — ties to the CSV-backed Utopias cluster (utopias beer sam adams 1,900 + sam adams utopias beer 720 + sam adams' utopias beer 480 ≈ **3,100/mo**) plus the genuinely newsworthy 30% ABV fact and 15-state sale restriction.
5. **"What Makes a Beer 'Barrel-Aged'?"** — no direct volume found in this data pull, but ties together four stocked SKUs with real, strong barrel stories: Founders KBS, Goose Island Bourbon County Stout, Firestone Walker Parabola, and The Bruery Black Tuesday. Recommend a dedicated "barrel aged beer," "bourbon barrel beer" category-level pull to confirm real demand before committing significant content budget here.
6. **"Trappist Beer 101: What Makes Chimay 'Authentic'"** — no direct volume found in this pull; genuinely strong factual hook (one of roughly a dozen breweries worldwide certified "Authentic Trappist Product") and a natural tie-in to the Part B gap findings (Westvleteren, Rochefort, St. Bernardus).
7. **"Stout vs. Porter: What's Actually the Difference?"** — no direct "stout vs porter" row surfaced in any of the 5 exports pulled (flagged in Phase 2 as the single biggest missing head-term in this batch); still a natural, evergreen educational anchor for the whole Stout & Porter subcategory given how many of the 14 stocked SKUs split across the two styles. Recommend confirming real volume via a dedicated pull before treating this as a proven-demand topic.
8. **"Nitro Beer, Explained: Why Some Stouts Pour Different"** — ties together Guinness's can-widget cluster (~5,400+/mo, real) and Left Hand Milk Stout Nitro's genuine "first craft brewery to bottle a nitrogenated beer" claim; some overlap with Topic #2, consider merging.
9. **"Sierra Nevada Pale Ale at 45: How One Beer Started the Craft Revolution"** — ties to "sierra nevada pale ales" (1,900, KD16, real, CSV-backed) plus the genuinely significant 1980-launch, craft-movement-origin story.
10. **"What Is a Belgian Witbier? Allagash, Blue Moon, and Shock Top Compared"** — no direct volume found in this pull, but a natural buyer's-guide angle across three stocked witbier SKUs, and a reasonable spot to include the Hoegaarden/German-hefeweizen Part B gap findings as "what else is out there" color.

---

## What to check

1. **The single biggest gap in this batch:** no category-level SEMrush export exists for "wheat beer," "witbier," "pale ale," "golden ale," "stout," or "porter" — every hub-page table and several blog topics above are flagged as unconfirmed-volume as a direct result. Recommend pulling these six category-level exports before finalizing hub-page copy or committing content budget to Blog Topics #5, #7, and #10.
2. 31 of the 36 SKUs in this batch have zero dedicated brand-level export coverage and rely entirely on WebSearch fact-confirmation — this is a much higher proportion of "not volume-backed" products than any prior batch on this project (wine-fortified, by comparison, had roughly half its SKUs WebSearch-only). Worth flagging to whoever owns the SEMrush export budget: dedicated pulls for Bell's, Chimay, Founders, Goose Island (full brand, not just 312), Left Hand, and New Belgium would likely be the highest-value next round, given the strength of the real-world brand recognition uncovered via WebSearch for each.
3. The Goose Island cross-subcategory brand hub (312 Urban Wheat Ale + Bourbon County Brand Stout) is flagged for sign-off in Phase 4 — it wasn't on the brief's pre-cleared brand-hub list, but the underlying brand identity is confirmed real and the two SKUs are genuinely striking together (approachable Chicago wheat ale vs. one of the most collected specialty beers in America).
4. Kona Big Wave's "always brewed in Hawaii" framing needs a packaging/label check before publishing — some Kona-branded beer sold on the US mainland is produced under license at mainland facilities, and the product copy should not overstate the Hawaii-brewed claim without confirming which facility supplies this specific stocked SKU.
5. Both Guinness pack-size SKUs (4-pack vs. 8-pack cans) currently differentiate purely on brand-level Guinness demand and value/pack framing — no pack-size-specific keyword rows ("guinness 4 pack," "guinness 8 pack") appeared in either export. Not a blocker, just noting the two product pages will lean more heavily on shared brand copy than most duplicate-SKU pairs in this project.
6. Per the brief's specific caution, "Blue Moon" and "Sierra Nevada" both carry real, large-scale homonym risk (lunar phenomenon; mountain range) for any future keyword work — the Sierra Nevada collision was actually realized and filtered in this batch (~47,000 volume dropped), while Blue Moon's remains a forward-looking caution since no dedicated export exists yet.
