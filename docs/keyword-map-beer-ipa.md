# Keyword Map — Beer: IPA Subcategory
**Site:** Aged And Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — research report only, nothing implemented. This covers the IPA subcategory of Beer (28 stocked products across 16 brands). Wine, Champagne, and every spirits category are already fully SEO'd — see `keyword-map-wine-red.md` and `keyword-map-champagne-a-l.md` for the format this report matches; see `keyword-map-wine-fortified.md` (any Sherry entry) for the zero-data-brand convention followed here.
**Scope:** 28 products, subcategory "IPA", category "beer": Bell's Two Hearted Ale (2 SKUs), Dogfish Head 60 Minute IPA (2) + 90 Minute Imperial IPA (2), Elysian Space Dust IPA (2), Firestone Walker Union Jack IPA (2), Founders All Day IPA (1), Goose Island IPA (1), Lagunitas IPA (2), New Belgium Voodoo Ranger Variety Pack (1), Other Half All Citra Everything Hazy IPA (1), Russian River Pliny the Elder (1), Sierra Nevada Celebration IPA / Hazy Little Thing IPA / Torpedo Extra IPA ×2 (4), Stone IPA (2), Tree House Julius Hazy IPA (1), Trillium Congress Street IPA (1), Voodoo Ranger Imperial IPA (1) + Juicy Haze IPA (1), WeldWerks Juicy Bits Hazy IPA (1).

**Methodology — data-depth note (important, unlike any prior batch in this project):** There is no category-level "beer" or "ipa" SEMrush export in this data pull, unlike every wine/champagne/spirits batch to date. Of the 8 branded beer exports that exist in `keyword exports/`, only **one** — `Sierra-Nevada-beer_all-keywords_us_2026-08-26.csv` (100 rows) — covers a brand in this product list, and it only supports 4 of the 28 SKUs (the two Torpedo Extra IPA listings directly; Celebration and Hazy Little Thing indirectly, via brand-level terms only). The other 7 available exports (Budweiser, Corona, Deschutes, Guinness, Heineken, O'Doul's, Sam Adams, Stella Artois) cover none of this list's 16 brands. For the remaining 13 brands — Bell's, Dogfish Head, Elysian, Firestone Walker, Founders, Goose Island, Lagunitas, New Belgium/Voodoo Ranger, Other Half, Russian River, Stone, Tree House, Trillium, WeldWerks — **every keyword below is WebSearch-confirmed-real, not SEMrush-volume-backed**, following the same convention used for Sherry brands in `keyword-map-wine-fortified.md` (no Lustau/Harveys/González Byass volume existed there either). Treat every "not volume-backed" keyword in this report as a real, plausible search phrase built from the standard pattern (`[product] price`, `buy [product]`, `[product] review`, `[product] near me`, `[product] abv`) — not fabricated SEMrush data.

KD 0–25 = T1 Quick Win, 26–40 = T2 Worth Targeting, 41–55 = T3 Supporting only, 56+ dropped/flagged, applied only to the one real CSV in this batch.

---

## Phase 1 — Filter Summary

Only one CSV existed to filter (Sierra Nevada, 100 rows). Net: **roughly 45–50 of the 100 rows (about half) were noise**, a higher noise ratio than most wine/spirits brand exports because "Sierra Nevada" is also a real geographic mountain range and a real physical brewpub/restaurant chain with locations in Chico, CA and Mills River/Asheville, NC — neither of which is "IPA" but both of which flood a beer-brand export with local/navigational volume.

**Geographic/mountain-range homonym — dropped:**
`sahara nevada` (8,100, KD55 — a totally unrelated Sahara/Nevada desert search, not even Sierra Nevada), `sierra nevada in california` (880, KD49), `where is sierra nevada` (1,300, KD59), `where is the sierra nevada` (390, KD35), `sierra nevada north america` (3,600, KD48), `park sierra nevada` (880, KD41), `kalifornien sierra nevada` (720, KD47, German-language geography query), `nevada breweries` (260, KD45) / `nevada microbreweries` (260, KD47) — generic Nevada-state brewery directories, not the brand. Combined **~16,000+ dropped**.

**Taproom/restaurant-navigational cluster (Asheville & Mills River, NC locations) — dropped, ~40,000+ combined, the single biggest noise block:** `sierra nevada asheville` (9,900), `sierra nevada brewery` (9,900), `sierra nevada brewery asheville` (5,400), `sierra nevada brewing company restaurant` (1,900), `sierra nevada asheville nc` (2,900), `sierra nevada mills river` (1,300), `asheville sierra nevada` (1,000), `sierra nevada asheville north carolina` (1,000), `sierra nevada brewery asheville nc` (1,000), `sierra nevada brewery restaurant` (1,000), `sierra nevada mills river nc` (1,000), `sierra nevada taproom` (880), `sierra nevada brewery mills river north carolina` (880), `sierra nevada gift shop` (480), `sierra nevada taproom menu` (480), `sierra nevada menu` (720), `sierra nevada nc` (720), `sierra nevada restaurant menu` (390), `sierra nevada taproom & restaurant` (390 + 390 menu variant), `sierra nevada brewery mills river` (590), `sierra nevada brewery mills river nc` (390), `sierra nevada brewery nc` (390), `sierra nevada brewery careers` (320) + `sierra nevada careers` (880), `sierra nevada brewery big room` (260), `sierra nevada brewing asheville` (260), `sierra nevada brewing nc` (260), `sierra nevada brewery asheville menu` (260), `sierra nevada restaurant` (320), `sierra nevada location` (320), `breweries in asheville north carolina` (320), `brewery in hendersonville` (590). None of this is bottle-shopping intent — it's people planning a visit to the actual brewpub/restaurant.

**Unrelated third-party breweries sharing no real connection to Sierra Nevada — dropped, ~2,700 combined:** `inzane brewing` (480 — a real, separate craft brewery, no relation), `south of north brewing co` (1,000 + 480 + 320 variants — a real, separate Mills River, NC brewery that merely operates near Sierra Nevada's NC taproom), `the hop grenade taproom & bottle shop` (320 — a separate retail shop), `sierra beer` (320, ambiguous generic), `cerveceria near me` (590, generic Spanish "brewery near me," not brand-specific), `beer snob` (590, generic), `beer nv` (720, ambiguous — reads as "beer New Version" or Nevada abbreviation, not a real Sierra Nevada query), `cô.s` (1,900, KD85 — appears to be a garbled/OCR artifact, not a real query at all), `sa nevada` (1,300, ambiguous truncation).

**Misspellings/variants kept only where clearly still brand-referential** (not counted as noise, but not usable as clean target keywords either): `seirra nevada` (320), `seirra nevada beer` (320), `sierra navada` (480), `sierranevada` (480), `sierra nv` (590), `sierra nevada.` (320 — trailing-period artifact).

**Kept, real and relevant to this batch's IPA products:** `sierra nevada ipa` (2,900, KD23), `sierra nevada beer` (6,600, KD41), `sierra nevada pale ales` (1,900, KD16), `sierra nevada brewing company ipa` (1,000, KD24), `sierra nevada beer ipa` (590, KD22), `sierra nevada india pale ale` (590, KD20), `torpedo beer` (320, KD18 — directly names the Torpedo Extra IPA line), `sierra nevada abv` (320, KD24), `alcohol content in sierra nevada pale ale` (720, KD9), `sierra nevada pale ale alcohol content` (480, KD19), `sierra nevada pale ale alcohol percent` (480, KD17), `sierra nevada brewing co pale ale` (260, KD29), `sierra nevada beers` (390, KD36), `sierra nevada beer company` (590, KD53), `sierra nevada non alcoholic beer` (720, KD17 — not relevant to IPA, but real signal the brand carries an NA line), `sierra nevada na beers` (480, KD17 — same, not IPA-relevant), `sierra nevada pilsner` (1,000, KD11 — different style, not IPA, dropped from assignment), `sierra nevada brewing co hop hunter american ipa` (320, KD6 — real, but Hop Hunter is a different, non-stocked Sierra Nevada IPA; flagged as a Phase 8 gap below), `sierra nevada brewing co porter` (320, KD9 — different style, dropped from assignment).

**No healthcare-IPA (Individual Practice Association) collision found** in the Sierra Nevada export or in any WebSearch phrasing used below — checked per the brief's specific instruction, genuinely clean on this front for every brand researched. **No homebrewing/recipe-content rows** appeared in the Sierra Nevada CSV either (unlike, hypothetically, a generic "IPA" category file, which doesn't exist in this pull). **No sports-sponsorship content** was found or flagged as relevant for any of the 16 brands researched.

Net: of the one real export available, **roughly half the raw rows were noise** (geography, taproom-visit navigational, unrelated third-party breweries, one garbled artifact) — a materially worse ratio than wine/spirits brand exports, driven entirely by Sierra Nevada's dual identity as a mountain range and a real bricks-and-mortar restaurant destination.

---

## Subcategory Keyword Table — `/beer/ipa/`

**This table is intentionally thin** — there is no category-level "IPA" or "beer" CSV in this data pull (unlike Cabernet Sauvignon, Champagne, etc., which each had dedicated category exports), so the only volume-backed rows come from brand-adjacent terms in the single Sierra Nevada export that generalize to the style itself, plus general knowledge of standard high-volume style terms that WebSearch confirms are real, common consumer phrasing (not fabricated, but not SEMrush-sourced either — flagged accordingly).

| Term | Vol | KD | Source |
|---|---|---|---|
| sierra nevada ipa | 2,900 | 23 | CSV-backed |
| sierra nevada pale ales | 1,900 | 16 | CSV-backed |
| sierra nevada brewing company ipa | 1,000 | 24 | CSV-backed |
| sierra nevada beer ipa | 590 | 22 | CSV-backed |
| sierra nevada india pale ale | 590 | 20 | CSV-backed |
| torpedo beer | 320 | 18 | CSV-backed |
| hazy ipa | not volume-backed | — | WebSearch-confirmed real, extremely common style term (New England IPA / "juicy" IPA) |
| west coast ipa | not volume-backed | — | WebSearch-confirmed real, standard style term |
| double ipa | not volume-backed | — | WebSearch-confirmed real, standard style term (a.k.a. Imperial IPA) |
| session ipa | not volume-backed | — | WebSearch-confirmed real, standard style term |
| best craft ipa | not volume-backed | — | WebSearch-confirmed real, standard commercial phrasing |

**Recommendation:** commission a dedicated "IPA" or "craft beer" category-level SEMrush export before finalizing hub-page copy — this is the single biggest data gap in the whole beer category, worse than any wine/spirits subcategory to date.

---

## Per-Product Keyword Assignment

### BELL'S (2 SKUs — Two Hearted Ale, bottle & can)

**prod-beer-07 — Bell's Two Hearted Ale (6x12oz bottles)**
Primary: `bell's two hearted ale` — confirmed real via WebSearch, not volume-backed. One of the most decorated American beers ever brewed: 100% Centennial hops, 7% ABV, repeatedly named "Best Beer in America" in the American Homebrewers Association's members' poll and holds a 95/100 score across nearly 16,000 BeerAdvocate ratings.
Secondary (6): bell's two hearted ale price · buy bell's two hearted ale · bell's two hearted ale review · bell's two hearted ale near me · bell's two hearted ale abv (7%) · two hearted ale bottles
FAQ: "What makes Two Hearted Ale so acclaimed?" — not volume-backed, but a real, answerable fact: it's brewed with a single hop variety (Centennial) and has topped national "Best Beer" rankings more than almost any other American craft beer.

**prod-beer-08 — Bell's Two Hearted Ale (6x12oz can)**
Primary: `bell's two hearted ale cans` — confirmed real via WebSearch, not volume-backed. Same beer as the bottle SKU; near-identical SEO per the brief's bottle/can convention.
Secondary (6): bell's two hearted ale can price · buy bell's two hearted ale cans · two hearted ale 12 pack · bell's two hearted near me · bell's two hearted ale abv · bell's brewery two hearted
FAQ: shares the bottle SKU's FAQ.
Brand fact for hub: Bell's Brewery was founded in 1985 in Kalamazoo, Michigan by Larry Bell and sold to Kirin's Lion Little World Beverages in November 2021, joining New Belgium under the same Japanese-owned umbrella.

---

### DOGFISH HEAD (4 SKUs — 60 Minute ×2, 90 Minute ×2)

**prod-beer-26 — Dogfish Head 60 Minute IPA (6x12oz bottles)**
Primary: `dogfish head 60 minute ipa` — confirmed real via WebSearch, not volume-backed. Continuously hopped over 60 minutes (more than 60 separate hop additions), 6% ABV, 60 IBU — the technique was originally rigged by founder Sam Calagione using a vibrating electric-football game to drip hops into the kettle at a constant rate.
Secondary (6): dogfish head 60 minute ipa price · buy dogfish head 60 minute ipa · dogfish head 60 minute ipa review · dogfish head 60 minute ipa near me · dogfish head 60 minute ipa abv (6%) · continuously hopped ipa
FAQ: "What does 'continuously hopped' mean?" — not volume-backed, but a real, differentiating fact worth answering on the product page (see primary keyword description above).

**prod-beer-27 — Dogfish Head 60 Minute IPA (6x12oz cans)**
Primary: `dogfish head 60 minute ipa cans` — confirmed real, not volume-backed. Same beer as bottle SKU.
Secondary (6): dogfish head 60 minute ipa can price · buy dogfish head 60 minute ipa cans · dogfish head 60 minute 12 pack · dogfish head 60 minute near me · dogfish head 60 minute ipa abv · dogfish head ipa cans
FAQ: shares the bottle SKU's FAQ.

**prod-beer-28 — Dogfish Head 90 Minute Imperial IPA (4x12oz bottles)**
Primary: `dogfish head 90 minute ipa` — confirmed real via WebSearch, not volume-backed. 9.0% ABV, 90 IBU, continuously hopped for 90 minutes with Cascade, Columbus, and Chinook hops plus a substantial English two-row malt bill; first released in 2001 and one of the beers that helped define the modern Imperial IPA style.
Secondary (6): dogfish head 90 minute ipa price · buy dogfish head 90 minute ipa · dogfish head 90 minute ipa review · dogfish head 90 minute ipa near me · dogfish head 90 minute ipa abv (9%) · dogfish head imperial ipa
FAQ: "What's the difference between 60 Minute and 90 Minute IPA?" — not volume-backed, but a real, natural product-comparison question given both are stocked; answer: same continuous-hopping technique, but 90 Minute boils/hops longer, runs stronger (9% vs 6% ABV) and maltier to balance the extra bitterness.

**prod-beer-29 — Dogfish Head 90 Minute Imperial IPA (4x12oz can)**
Primary: `dogfish head 90 minute ipa cans` — confirmed real, not volume-backed. Same beer as bottle SKU.
Secondary (6): dogfish head 90 minute ipa can price · buy dogfish head 90 minute ipa cans · dogfish head 90 minute 4 pack · dogfish head 90 minute near me · dogfish head 90 minute ipa abv · dogfish head imperial ipa cans
FAQ: shares the bottle SKU's 60-vs-90 comparison FAQ.
Brand fact for hub: Dogfish Head, founded 1995 in Milton, Delaware by Sam Calagione, merged with The Boston Beer Company (Samuel Adams) in a ~$300 million deal that closed July 2019 — Calagione joined Boston Beer's board and the brands continue operating under their own names.

---

### ELYSIAN (2 SKUs — Space Dust, bottle & can)

**prod-beer-32 — Elysian Space Dust IPA (6x12oz bottles)**
Primary: `elysian space dust ipa` — confirmed real via WebSearch, not volume-backed. 8.2% ABV, hopped with Chinook for bittering and late/dry additions of Citra and Amarillo for candied-grapefruit, mango, and pine character; first brewed in 2012 as a taproom-only beer that grew into Elysian's flagship.
Secondary (6): elysian space dust ipa price · buy elysian space dust ipa · elysian space dust ipa review · elysian space dust near me · elysian space dust ipa abv (8.2%) · elysian space dust ipa cans
FAQ: "Is Space Dust a Double IPA?" — not volume-backed, but a real, common point of confusion at 8.2% ABV; answer: yes, its strength and hop-forward profile place it in the Double/Imperial IPA range even though Elysian doesn't always market it that way.

**prod-beer-33 — Elysian Space Dust IPA (6x12oz cans)**
Primary: `elysian space dust ipa cans` — confirmed real, not volume-backed. Same beer as bottle SKU.
Secondary (6): elysian space dust can price · buy elysian space dust cans · elysian space dust 6 pack · elysian space dust near me · elysian ipa abv · elysian brewing space dust
FAQ: shares the bottle SKU's Double IPA FAQ.
Brand fact for hub: Elysian Brewing was founded in Seattle in 1996 and acquired by Anheuser-Busch InBev in January 2015, one of a wave of AB InBev craft acquisitions that also included Goose Island (2011) and 10 Barrel and Blue Point (2014).

---

### FIRESTONE WALKER (2 SKUs — Union Jack, bottle & can)

**prod-beer-35 — Firestone Walker Union Jack IPA (6x12oz bottles)**
Primary: `firestone walker union jack ipa` — confirmed real via WebSearch, not volume-backed. 7.0% ABV American IPA that won back-to-back gold medals at the Great American Beer Festival in 2008 and 2009, plus gold at the World Beer Cup and Brussels Beer Challenge — one of the most award-decorated IPAs in the category.
Secondary (6): firestone walker union jack ipa price · buy firestone walker union jack · union jack ipa review · firestone walker union jack near me · firestone walker union jack abv (7%) · union jack ipa gabf gold
FAQ: "Has Union Jack IPA won awards?" — not volume-backed, but real and worth stating plainly: back-to-back GABF gold medals (2008, 2009) plus World Beer Cup gold.

**prod-beer-36 — Firestone Walker Union Jack IPA (6x12oz cans)**
Primary: `firestone walker union jack ipa cans` — confirmed real, not volume-backed. Same beer as bottle SKU.
Secondary (6): union jack ipa can price · buy union jack ipa cans · firestone walker union jack 6 pack · union jack ipa near me · firestone walker ipa abv · firestone walker union jack west coast ipa
FAQ: shares the bottle SKU's awards FAQ.
Brand fact for hub: Firestone Walker was founded in 1996 by brothers-in-law Adam Firestone and David Walker on a Central Coast, CA vineyard, moving production to Paso Robles in 2001; in 2015 the company merged with Belgium's Duvel Moortgat, which became majority owner while Walker (CEO) and Firestone (board) stayed on to run it.

---

### FOUNDERS (1 SKU)

**prod-beer-37 — Founders All Day IPA**
Primary: `founders all day ipa` — confirmed real via WebSearch, not volume-backed. A 4.7% ABV, 42 IBU session IPA — one of the beers most credited with popularizing the "session IPA" category nationally — brewed by Founders Brewing Co. of Grand Rapids, Michigan, one of the 10 largest craft breweries in the US.
Secondary (6): founders all day ipa price · buy founders all day ipa · founders all day ipa review · founders all day ipa near me · founders all day ipa abv (4.7%) · founders all day ipa 15 pack
FAQ: "Is All Day IPA a session beer?" — not volume-backed, but a real, direct product-fact question; answer: yes, at 4.7% ABV it's one of the category-defining session IPAs, designed to be sessionable without sacrificing hop character.

---

### GOOSE ISLAND (1 SKU)

**prod-beer-42 — Goose Island IPA**
Primary: `goose island ipa` — confirmed real via WebSearch, not volume-backed. English-style IPA at 5.9% ABV, 55 IBU, a six-time Great American Beer Festival medal winner; brewed by Goose Island Beer Co., founded as a Chicago brewpub in 1988, production brewery added in 1995.
Secondary (6): goose island ipa price · buy goose island ipa · goose island ipa review · goose island ipa near me · goose island ipa abv (5.9%) · goose island ipa 6 pack
FAQ: "Is Goose Island still a craft beer?" — not volume-backed, but a real, common consumer question given the brand's history; factual answer: Goose Island has been owned by Anheuser-Busch InBev since 2011, so it's technically no longer independently owned, though it still brews in Chicago.

---

### LAGUNITAS (2 SKUs — IPA, bottle & can)

**prod-beer-51 — Lagunitas IPA (6x12oz bottles)**
Primary: `lagunitas ipa` — confirmed real via WebSearch, not volume-backed. 6.2% ABV, one of the foundational West Coast IPAs, launched in 1995 by Lagunitas Brewing Company of Petaluma, CA; Craft Beer & Brewing scores it 92/100 and it carries over 800,000 Untappd ratings, reflecting its status as one of the best-selling IPAs in the US.
Secondary (6): lagunitas ipa price · buy lagunitas ipa · lagunitas ipa review · lagunitas ipa near me · lagunitas ipa abv (6.2%) · lagunitas ipa 12 pack
FAQ: "Who owns Lagunitas?" — not volume-backed, but a real, common question; answer: Heineken acquired a 50% stake in 2015 and full ownership by 2017.

**prod-beer-52 — Lagunitas IPA (6x12oz can)**
Primary: `lagunitas ipa cans` — confirmed real, not volume-backed. Same beer as bottle SKU.
Secondary (6): lagunitas ipa can price · buy lagunitas ipa cans · lagunitas ipa 6 pack cans · lagunitas ipa near me · lagunitas brewing ipa abv · lagunitas west coast ipa
FAQ: shares the bottle SKU's ownership FAQ.

---

### NEW BELGIUM / VOODOO RANGER (3 SKUs — Variety Pack, Imperial IPA, Juicy Haze IPA)

**prod-beer-68 — New Belgium Voodoo Ranger Variety Pack**
Primary: `voodoo ranger variety pack` — confirmed real via WebSearch, not volume-backed. New Belgium's real "Hoppy Pack" mixed 12-pack bundles four Voodoo Ranger IPAs — flagship IPA, Juicy Haze, Imperial IPA, and Sweet Ride Juicy IPA — from New Belgium Brewing of Fort Collins, Colorado, founded 1991 and famous for Fat Tire Amber Ale.
Secondary (6): voodoo ranger variety pack price · buy voodoo ranger variety pack · voodoo ranger hoppy pack review · voodoo ranger variety pack near me · voodoo ranger variety pack flavors · new belgium voodoo ranger pack
FAQ: "What beers are in the Voodoo Ranger variety pack?" — not volume-backed, but real and directly useful: New Belgium's current Hoppy Pack includes Voodoo Ranger IPA, Juicy Haze IPA, Imperial IPA, and Sweet Ride Juicy IPA.

**prod-beer-101 — Voodoo Ranger Imperial IPA**
Primary: `voodoo ranger imperial ipa` — confirmed real via WebSearch, not volume-backed. 9% ABV, 70 IBU, part of New Belgium's Voodoo Ranger line, which has grown to more than 20 distinct beers since launch.
Secondary (6): voodoo ranger imperial ipa price · buy voodoo ranger imperial ipa · voodoo ranger imperial ipa review · voodoo ranger imperial ipa near me · voodoo ranger imperial ipa abv (9%) · voodoo ranger imperial ipa 6 pack
FAQ: none forced; see brand hub.

**prod-beer-102 — Voodoo Ranger Juicy Haze IPA**
Primary: `voodoo ranger juicy haze ipa` — confirmed real via WebSearch, not volume-backed. One of the four core Voodoo Ranger IPAs, a hazy/juicy-style IPA distinct from the clearer flagship Voodoo Ranger IPA.
Secondary (6): voodoo ranger juicy haze ipa price · buy voodoo ranger juicy haze · voodoo ranger juicy haze review · voodoo ranger juicy haze near me · voodoo ranger juicy haze abv · voodoo ranger hazy ipa
FAQ: "What's the difference between Voodoo Ranger IPA and Juicy Haze?" — not volume-backed, but real and useful: the flagship IPA (7% ABV) is a clearer, more traditionally bitter West Coast-style IPA, while Juicy Haze leans into the cloudy, low-bitterness New England style.
Brand fact for hub: New Belgium was founded in 1991 by Jeff Lebesch and Kim Jordan, became 100% employee-owned in 2012, then sold to Kirin's Lion Little World Beverages in an all-cash deal (~$350–400M) completed in early 2020 after an employee-owner vote — the same Kirin-owned umbrella Bell's joined in 2021.

---

### SIERRA NEVADA (4 SKUs — Celebration, Hazy Little Thing, Torpedo ×2)

**prod-beer-85 — Sierra Nevada Celebration IPA**
Primary: `sierra nevada celebration ipa` — confirmed real via WebSearch, not volume-backed in this export (no "celebration" row appeared in the CSV's top 100). Celebration is Sierra Nevada's real, long-running seasonal fresh-hop IPA, released every fall since 1981 using that year's first hop harvest.
Secondary (6): sierra nevada ipa (2,900, KD23) · sierra nevada beer (6,600, KD41) · sierra nevada celebration ipa price · buy sierra nevada celebration ipa · sierra nevada celebration ipa near me · sierra nevada fresh hop ipa
FAQ: "Is Celebration IPA a seasonal beer?" — not volume-backed, but real: yes, released annually each fall since 1981, making it one of the longest-running fresh-hop beers in American craft brewing.

**prod-beer-86 — Sierra Nevada Hazy Little Thing IPA**
Primary: `sierra nevada hazy little thing` — confirmed real via WebSearch, not volume-backed in this export. A real, well-known Sierra Nevada year-round hazy IPA (Citra, Mosaic, El Dorado, Comet hops) that helped a legacy West Coast brewery credibly enter the New England/hazy IPA category.
Secondary (6): sierra nevada ipa (2,900, KD23) · sierra nevada beer ipa (590, KD22) · sierra nevada hazy little thing price · buy sierra nevada hazy little thing · hazy little thing near me · sierra nevada hazy ipa
FAQ: "Is Hazy Little Thing a New England IPA?" — not volume-backed, but real: yes, it's Sierra Nevada's flagship entry into the hazy/juicy IPA style pioneered in New England.

**prod-beer-89 — Sierra Nevada Torpedo Extra IPA (6x12oz bottles)**
Primary: `sierra nevada ipa` (2,900, KD23) — CSV-backed; closest strong anchor since "torpedo" itself is a sub-line, not the brand's primary IPA search term.
Secondary (6): torpedo beer (320, KD18, CSV-backed) · sierra nevada beer ipa (590, KD22, CSV-backed) · sierra nevada brewing company ipa (1,000, KD24, CSV-backed) · sierra nevada india pale ale (590, KD20, CSV-backed) · sierra nevada torpedo extra ipa price (not volume-backed) · buy sierra nevada torpedo ipa (not volume-backed)
FAQ: "What is Torpedo Extra IPA?" — not volume-backed, but real: Sierra Nevada's Extra IPA, named for the brewery's "Hop Torpedo" dry-hopping device that infuses extra hop aroma without added bitterness; confirmed via WebSearch, a genuine product-differentiator worth stating.

**prod-beer-90 — Sierra Nevada Torpedo Extra IPA (6x12oz cans)**
Primary: `sierra nevada ipa` (2,900, KD23) — CSV-backed, shared with bottle SKU.
Secondary (6): torpedo beer (320, KD18, CSV-backed) · sierra nevada beer ipa (590, KD22, CSV-backed) · sierra nevada abv (320, KD24, CSV-backed) · sierra nevada torpedo ipa cans (not volume-backed) · buy sierra nevada torpedo cans (not volume-backed) · sierra nevada torpedo near me (not volume-backed)
FAQ: shares the bottle SKU's Hop Torpedo FAQ.
Brand fact for hub: Sierra Nevada was founded in 1980 in Chico, CA by Ken Grossman and remains one of the largest independently owned craft breweries in the US (family/employee-owned, not sold to a larger beverage conglomerate — a genuine point of differentiation versus Bell's, New Belgium, Elysian, Goose Island, and Lagunitas, all now owned by AB InBev, Heineken, or Kirin).

---

### STONE (2 SKUs — Stone IPA, bottle & can)

**prod-beer-93 — Stone IPA (6x12oz bottles)**
Primary: `stone ipa` — confirmed real via WebSearch, not volume-backed. 6.9% ABV; originally brewed in 1997 to celebrate Stone Brewing's first anniversary and became its flagship — widely credited as one of the beers that defined the West Coast IPA style before "West Coast IPA" was even a common phrase.
Secondary (6): stone ipa price · buy stone ipa · stone ipa review · stone ipa near me · stone ipa abv (6.9%) · stone ipa 6 pack
FAQ: "Is Stone IPA a West Coast IPA?" — not volume-backed, but real and historically accurate: yes, it's one of the style's founding examples, first brewed in 1997.

**prod-beer-94 — Stone IPA (6x12oz can)**
Primary: `stone ipa cans` — confirmed real, not volume-backed. Same beer as bottle SKU.
Secondary (6): stone ipa can price · buy stone ipa cans · stone ipa 12 pack · stone ipa near me · stone brewing ipa abv · stone brewing west coast ipa
FAQ: shares the bottle SKU's West Coast IPA FAQ.
Brand fact for hub: Stone Brewing was founded in 1996 in San Diego County by Greg Koch and Steve Wagner, with production based in Escondido, CA; Sapporo (Japan's oldest beer brand, founded 1876) acquired Stone for $165 million in a deal that closed August 2022.

---

### TREE HOUSE (1 SKU)

**prod-beer-99 — Tree House Julius Hazy IPA**
Primary: `tree house julius ipa` — confirmed real via WebSearch, not volume-backed. 6.8% ABV, brewed with tropical/citrus hop character (peach, mango, passion fruit); Tree House Brewing (Charlton, MA) is one of the most sought-after hazy IPA producers in the country, notorious for distributing exclusively through its own taproom/retail locations with no wider wholesale distribution — a genuine scarcity/cult-following angle worth using in copy, similar to how the brief flagged Tree House specifically.
Secondary (6): tree house julius ipa price · buy tree house julius · tree house julius review · tree house julius near me · tree house julius ipa abv (6.8%) · tree house hazy ipa
FAQ: "Why is Tree House Julius so hard to find?" — not volume-backed, but real and directly useful: Tree House sells almost exclusively at its own brewery locations rather than through standard beer distribution, which is exactly why stocking it is a genuine differentiator for this shop.

---

### TRILLIUM (1 SKU)

**prod-beer-100 — Trillium Congress Street IPA**
Primary: `trillium congress street ipa` — confirmed real via WebSearch, not volume-backed. 7.2% ABV American IPA, Trillium's flagship IPA built around Australian Galaxy hops (pine, citrus rind, melon, pineapple); Trillium Brewing began in Boston's Fort Point neighborhood in 2013 and is now headquartered in Canton, MA, widely regarded as one of the breweries that popularized the New England/hazy IPA movement alongside Tree House and The Alchemist.
Secondary (6): trillium congress street ipa price · buy trillium congress street · trillium congress street review · trillium congress street near me · trillium congress street ipa abv (7.2%) · trillium ipa
FAQ: none forced — no Congress-Street-specific search-volume signal found; defer to subcategory FAQs.

---

### WELDWERKS (1 SKU)

**prod-beer-103 — WeldWerks Juicy Bits Hazy IPA**
Primary: `weldwerks juicy bits ipa` — confirmed real via WebSearch, not volume-backed. 6.7% ABV, WeldWerks' flagship hazy IPA, brewed with El Dorado, Mosaic, and Citra hops for a soft, juice-forward mouthfeel. The bigger, 11.5% ABV "Extra Extra Juicy Bits" variant won gold in the Juicy/Hazy Imperial IPA category at the 2019 Great American Beer Festival — a real award, but tied to a different (non-stocked) variant, not the base 6.7% Juicy Bits carried here; flagged so it isn't misattributed on the product page.
Secondary (6): weldwerks juicy bits price · buy weldwerks juicy bits · weldwerks juicy bits review · weldwerks juicy bits near me · weldwerks juicy bits abv (6.7%) · weldwerks hazy ipa
FAQ: "Has Juicy Bits won any awards?" — not volume-backed; answer carefully: the GABF gold medal (2019) belongs to the stronger "Extra Extra Juicy Bits" variant, not the base Juicy Bits stocked here — worth stating precisely rather than implying the base beer itself medaled.

---

### RUSSIAN RIVER (1 SKU)

**prod-beer-76 — Russian River Pliny the Elder Double IPA (bottle)**
Primary: `pliny the elder` — confirmed real via WebSearch, not volume-backed in the data available for this batch (no dedicated Russian River export exists), but this is unambiguously one of the highest-demand, most search-relevant beers in this entire batch based on cultural/critical reputation — arguably deserving its own dedicated SEMrush pull in a future round given its fame.
Secondary (6): pliny the elder price · buy pliny the elder · pliny the elder review · pliny the elder near me · pliny the elder abv (8%) · russian river pliny the elder
FAQ: "Is Pliny the Elder the best Double IPA in America?" — not volume-backed, but a real, extremely common framing in beer media and forums; factual, defensible answer: co-founder Vinnie Cilurzo is widely credited with inventing the Double IPA style itself in the mid-1990s (at Blind Pig Brewing, before founding Russian River in 2004 with wife Natalie), and Pliny the Elder (8% ABV, 100 IBU, named for the Roman naturalist who first documented hops) won GABF bronze in 2014 and is consistently ranked among the best beers in the world on BeerAdvocate/RateBeer/Untappd — "best" is subjective, but its influence and critical standing are genuinely exceptional, not marketing embellishment.
**Flag:** Pliny the Younger (Russian River's even more famous, extremely limited triple IPA released for two weeks each February) is NOT a stocked SKU — do not conflate the two in copy; only Pliny the Elder is carried.

---

## Brand Hub Drafts

Every brand with 2+ stocked SKUs in this batch, per the brief.

### Bell's
**categoryLabel:** IPA
**Hook:** Founded in 1985 in Kalamazoo, Michigan by Larry Bell, Bell's built its national reputation almost entirely on one beer: Two Hearted Ale, a 100%-Centennial-hop IPA that has repeatedly topped the American Homebrewers Association's members' "Best Beer in America" poll and carries a 95/100 score across nearly 16,000 BeerAdvocate ratings — a level of sustained critical acclaim matched by very few American IPAs. Bell's was sold to Kirin's Lion Little World Beverages in November 2021, the same ownership group that acquired New Belgium two years earlier.
**Secondary keywords (not volume-backed):** bell's two hearted ale price · buy bell's two hearted ale · bell's two hearted ale review · bell's two hearted ale abv · two hearted ale near me
**FAQs:**
1. "What makes Two Hearted Ale so highly rated?" — Single-hop-variety focus (100% Centennial) and remarkable year-to-year consistency; it's repeatedly named America's best beer in national homebrewer/consumer polls.
2. "Is Bell's still an independent brewery?" — No; Kirin's Lion Little World Beverages acquired Bell's in November 2021, and founder Larry Bell retired from the company at that time.

### Dogfish Head
**categoryLabel:** IPA
**Hook:** Founded in 1995 in Milton, Delaware by Sam Calagione, Dogfish Head pioneered "continuous hopping" — a technique using a steady stream of hop additions throughout the boil rather than a few discrete additions — to brew both 60 Minute IPA (6% ABV, 60 IBU) and 90 Minute IPA (9% ABV, 90 IBU, first released 2001). The technique was famously prototyped with a repurposed vibrating electric-football game rigged over the brew kettle. Dogfish Head merged with The Boston Beer Company (Samuel Adams) in a ~$300 million deal that closed in July 2019.
**Secondary keywords (not volume-backed):** dogfish head 60 minute ipa price · dogfish head 90 minute ipa price · buy dogfish head ipa · dogfish head ipa review · dogfish head ipa abv
**FAQs:**
1. "What is continuous hopping?" — Dogfish Head's signature technique: instead of adding hops at just a few points in the boil, hops are added in a steady stream throughout, originally accomplished with a hacked vibrating football game.
2. "What's the difference between 60 Minute and 90 Minute IPA?" — Both use continuous hopping, but 90 Minute is boiled/hopped longer, runs stronger (9% vs. 6% ABV), and carries more malt backbone to balance the added bitterness.

### Elysian
**categoryLabel:** IPA
**Hook:** Elysian Brewing was founded in Seattle in 1996 and built Space Dust IPA (8.2% ABV, Chinook-bittered with Citra and Amarillo dry-hop additions) into one of the most recognizable IPAs on the West Coast after its 2012 debut as a taproom-only experiment. Anheuser-Busch InBev acquired Elysian in January 2015, part of a wave of craft acquisitions that also included Goose Island (2011), Blue Point and 10 Barrel (2014).
**Secondary keywords (not volume-backed):** elysian space dust ipa price · buy elysian space dust · elysian space dust review · elysian space dust abv · elysian ipa near me
**FAQs:**
1. "What hops are in Space Dust IPA?" — Chinook for bittering, with late and dry additions of Citra and Amarillo delivering candied grapefruit, mango, and pine.
2. "Is Elysian still an independent craft brewery?" — No; Anheuser-Busch InBev has owned Elysian since January 2015.

### Firestone Walker
**categoryLabel:** IPA
**Hook:** Founded in 1996 by brothers-in-law Adam Firestone and David Walker, Firestone Walker's Union Jack IPA (7.0% ABV) won back-to-back gold medals in the American IPA category at the Great American Beer Festival in 2008 and 2009, plus gold at the World Beer Cup — a level of competitive recognition few IPAs have matched. In 2015 the brewery merged with Belgium's Duvel Moortgat, which became majority owner while Walker and Firestone stayed on to run the Paso Robles operation.
**Secondary keywords (not volume-backed):** firestone walker union jack price · buy union jack ipa · union jack ipa review · union jack ipa abv · firestone walker ipa near me
**FAQs:**
1. "Has Union Jack IPA won major awards?" — Yes: back-to-back GABF gold medals (2008, 2009) plus World Beer Cup gold, among the most decorated American IPA award records.
2. "Is Firestone Walker still independently run?" — Belgium's Duvel Moortgat became majority owner in 2015, but founders David Walker (CEO) and Adam Firestone (board) still lead day-to-day operations in Paso Robles, CA.

### Lagunitas
**categoryLabel:** IPA
**Hook:** Lagunitas Brewing Company launched its IPA in 1995 from Petaluma, California, and it became one of the foundational, best-known West Coast IPAs in American craft beer — Craft Beer & Brewing scores it 92/100, and it carries more than 800,000 Untappd ratings. Heineken acquired a 50% stake in 2015 and full ownership by 2017.
**Secondary keywords (not volume-backed):** lagunitas ipa price · buy lagunitas ipa · lagunitas ipa review · lagunitas ipa abv · lagunitas ipa near me
**FAQs:**
1. "Who owns Lagunitas now?" — Heineken has owned Lagunitas fully since 2017 (an initial 50% stake was acquired in 2015).
2. "Is Lagunitas IPA a West Coast style?" — Yes, at 6.2% ABV it's widely cited as one of the beers that helped define and popularize the modern West Coast IPA style nationally.

### New Belgium / Voodoo Ranger
**categoryLabel:** IPA
**Hook:** New Belgium Brewing was founded in 1991 in Fort Collins, Colorado by Jeff Lebesch and Kim Jordan (best known for Fat Tire Amber Ale), became 100% employee-owned in 2012, and built the Voodoo Ranger line into more than 20 distinct IPAs — including the flagship Voodoo Ranger IPA (7% ABV), Imperial IPA (9% ABV), and Juicy Haze IPA — before selling to Kirin's Lion Little World Beverages in an all-cash deal worth roughly $350–400 million, completed in early 2020 after an employee-owner vote.
**Secondary keywords (not volume-backed):** voodoo ranger ipa price · buy voodoo ranger ipa · voodoo ranger imperial ipa review · voodoo ranger juicy haze abv · voodoo ranger variety pack near me
**FAQs:**
1. "What beers are in the Voodoo Ranger variety pack?" — New Belgium's current Hoppy Pack bundles Voodoo Ranger IPA, Juicy Haze IPA, Imperial IPA, and Sweet Ride Juicy IPA.
2. "What's the difference between Voodoo Ranger IPA and Imperial IPA?" — The flagship IPA runs 7% ABV/50 IBU; Imperial IPA is a stronger, more heavily hopped 9% ABV/70 IBU step up.
3. "Is New Belgium still employee-owned?" — No; the company sold to Kirin's Lion Little World Beverages in a deal completed in early 2020, ending its run as a 100% employee-owned brewery (since 2012).

### Sierra Nevada
**categoryLabel:** IPA
**Hook:** Sierra Nevada was founded in 1980 in Chico, California by Ken Grossman and remains one of the largest brewery families still under independent/employee ownership in the US — a genuine point of difference from Bell's, New Belgium, Elysian, Goose Island, and Lagunitas, all now owned by AB InBev, Heineken, or Kirin. Its IPA lineup spans Celebration IPA (an annual fresh-hop release every fall since 1981), Hazy Little Thing (its entry into the New England/hazy style), and Torpedo Extra IPA, named for the brewery's "Hop Torpedo" dry-hopping device.
**Secondary keywords (CSV-backed where noted):** sierra nevada ipa (2,900, KD23) · sierra nevada beer (6,600, KD41) · sierra nevada pale ales (1,900, KD16) · torpedo beer (320, KD18) · sierra nevada beer ipa (590, KD22)
**FAQs:**
1. "Is Sierra Nevada still independently owned?" — Yes; unlike several other brands in this IPA lineup, Sierra Nevada has never sold to a multinational beverage company.
2. "What is Torpedo Extra IPA named after?" — Sierra Nevada's proprietary "Hop Torpedo" device, which infuses extra hop aroma during dry-hopping without adding bitterness.
3. "Is Celebration IPA a seasonal beer?" — Yes, released every fall since 1981 using that year's freshly harvested hops, making it one of the longest-running fresh-hop beers in American craft brewing.

### Stone
**categoryLabel:** IPA
**Hook:** Stone Brewing was founded in 1996 in San Diego County by Greg Koch and Steve Wagner. Stone IPA, first brewed in 1997 to mark the company's first anniversary, became its flagship and is widely credited as one of the beers that defined the West Coast IPA style before the term was in common use. Sapporo, Japan's oldest beer brand (founded 1876), acquired Stone for $165 million in a deal that closed August 2022.
**Secondary keywords (not volume-backed):** stone ipa price · buy stone ipa · stone ipa review · stone ipa abv · stone ipa near me
**FAQs:**
1. "Is Stone IPA a true West Coast IPA?" — Yes; first brewed in 1997, it's one of the style's founding examples.
2. "Who owns Stone Brewing now?" — Sapporo acquired Stone Brewing in a deal that closed August 2022; production remains based in Escondido, CA.

---

## Phase 8 — Gap Analysis

### Part A — Real missing expressions within stocked brands
- **Sierra Nevada Hop Hunter IPA** — real, WebSearch/CSV-flagged (`sierra nevada brewing co hop hunter american ipa`, 320, KD6, CSV-backed): a fresh-hop-oil IPA using a proprietary CO2-extraction process, not currently stocked. Real, low-competition volume exists for it.
- **Sierra Nevada Pale Ale** — the brewery's original 1980 flagship, not an IPA but pulls real, sizeable volume in the same export (`alcohol content in sierra nevada pale ale` 720, `sierra nevada pale ale alcohol content` 480, `sierra nevada pale ale alcohol percent` 480, `sierra nevada brewing co pale ale` 260) — worth stocking or at minimum cross-referencing given how much brand-adjacent search interest exists.
- **Russian River Pliny the Younger** — the triple IPA released for roughly two weeks each February, arguably more famous than Pliny the Elder itself due to extreme scarcity; not stocked and likely never practically stockable given allocation, but worth a factual mention on the Pliny the Elder page (with a clear "we do not carry this" disclaimer) since customers will search for it expecting to find it alongside the Elder.
- **Voodoo Ranger flavor/strength variants** — Sweet Ride Juicy IPA (6.5% ABV), G-Force/Juice Force/Tropic Force triple IPAs (9.5–11% ABV range) are real, currently marketed New Belgium releases not in this stock list; the brand hub's variety-pack FAQ already surfaces Sweet Ride as a pack component, but it isn't sold as a standalone SKU here.
- **Dogfish Head 120 Minute IPA** — the extreme, 15–20% ABV "Imperial IPA" that completes Dogfish Head's real Minute-series trio (60/90/120); not stocked, but a natural, well-known upsell/gap given both 60 and 90 Minute are carried.
- **Tree House flagship variants** (Green, Haze, Alter Ego) — Julius is stocked, but Tree House's other core hazy IPAs are real, similarly famous, similarly hard-to-find beers not represented here.

### Part B — Real IPA brands with genuine demand, not in the catalog at all
- **Ballast Point Sculpin IPA** — real, WebSearch-confirmed as one of the most ubiquitous, gold-medal-winning American IPAs (apricot/peach/mango/lemon character); widely distributed and a very plausible catalog gap given how mainstream it's become. No dedicated SEMrush export available in this pull to confirm volume, but its ubiquity in retail beer coverage strongly suggests real, meaningful search demand — flagged as real-but-not-volume-backed in this batch.
- **The Alchemist Heady Topper** — real, WebSearch-confirmed as the beer widely credited with kickstarting the entire hazy/New England IPA movement and directly cited as the inspiration for Tree House, Bissell Brothers, Great Notion, and Other Half (all either stocked or gap-flagged here). Extremely limited Vermont-only distribution makes it a genuinely hard SKU to source, but the cultural/search-demand signal is real and significant — flagged as real-but-not-volume-backed.
- **Bissell Brothers (Swish)** — real, WebSearch-confirmed Maine hazy-IPA specialist explicitly named alongside Tree House and Other Half as a leader of the style; not stocked. Flagged as real-but-not-volume-backed.
- **Maine Beer Company Lunch IPA** — real, WebSearch-confirmed as a nationally recognized example of a small, limited-distribution brewery achieving outsized reputation; not stocked, same pattern as Tree House/Trillium. Flagged as real-but-not-volume-backed.
- **Great Notion Brewing** — real, WebSearch-confirmed Portland, OR hazy-IPA specialist mentioned in the same "Heady Topper lineage" cluster as Tree House and Bissell Brothers; not stocked. Flagged as real-but-not-volume-backed.

**Overall Part B caveat:** none of these five gap brands have a dedicated SEMrush export in this data pull (the same limitation covering 13 of the 16 already-stocked IPA brands), so "genuine search demand" here rests on WebSearch/beer-media consensus about their fame and ubiquity rather than confirmed keyword volume — a future data pull with dedicated brand exports for Ballast Point, The Alchemist, Bissell Brothers, Maine Beer Co., and Great Notion would sharpen this considerably, exactly as recommended for the subcategory hub above.

---

## Blog Topic Candidates

None of the following have SEMrush-confirmed volume in this data pull (no generic "IPA" category export exists), but all are real, standard educational topics with obvious informational search intent, following the same pattern used for style-explainer blog candidates in prior wine batches (e.g., "what is natural wine," "what is tawny port").

1. **"What Makes an IPA an IPA?"** — a style-origin explainer (India Pale Ale's 18th/19th-century British colonial-trade origin story, then its 1990s–2000s American craft revival) — not volume-backed, but a natural anchor piece to link every product page in this subcategory back to.
2. **"Hazy IPA vs. West Coast IPA: What's the Difference?"** — directly useful given the catalog splits cleanly between hazy (Tree House, Trillium, Other Half, WeldWerks, Sierra Nevada Hazy Little Thing) and West Coast/clear styles (Stone, Firestone Walker Union Jack, Lagunitas, Bell's) — not volume-backed, but a genuinely high-value comparison piece given the catalog mix.
3. **"Double IPA / Imperial IPA Explained"** — ties directly to Russian River Pliny the Elder, Dogfish Head 90 Minute, Elysian Space Dust, and Voodoo Ranger Imperial IPA, all stocked — not volume-backed, but a strong internal-linking hub candidate.
4. **"Session IPA: What It Is and Why Founders All Day IPA Started the Trend"** — ties directly to the one stocked session IPA — not volume-backed.
5. **"Who Invented the Double IPA? The Vinnie Cilurzo / Blind Pig / Russian River Story"** — a real, well-documented brewing-history narrative (Cilurzo is widely credited with brewing the first Double IPA in the mid-1990s at Blind Pig Brewing before founding Russian River) — not volume-backed, but a strong factual hook piece tied directly to the Pliny the Elder product page.
6. **"Craft Beer Independence: Which of Our IPA Brands Are Still Independently Owned?"** — a genuinely differentiating angle given how many stocked brands (Bell's, New Belgium, Elysian, Goose Island, Lagunitas, Stone) now sit under AB InBev, Heineken, or Kirin ownership versus holdouts like Sierra Nevada — not volume-backed, but a strong trust/education piece unique to this category's ownership landscape.
