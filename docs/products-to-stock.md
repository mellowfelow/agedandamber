# Products to Stock — Master List (Rum, Gin, Cognac, Bourbon, Scotch, Irish, Japanese, Vodka, Rye & Other Whiskey, Tequila & Mezcal, Fine Wine, Champagne & Sparkling Wine, Cider, Beer, Non-Alcoholic Beer/Cider/Spirits/Champagne/RTD/Wine, RTD & Liqueurs)

Consolidated from every "not currently in your catalog" and "missing expression within a brand you already carry" finding across every keyword batch processed so far. This is the running answer to "which products with real search demand should I add to inventory" — every item below carries genuine demand signal (SEMrush-sourced where available, web-research-confirmed and clearly flagged where not). KD = keyword difficulty (lower is easier to rank for). Volume floor applied: 50+; most items here are well above that.

**How to read this:** "Primary key" is the keyword you'd target on that product's page the moment it's stocked. "Support keys" are 5-6 secondary keywords ready to drop straight into the product's `seo` field — real/SEMrush-sourced where the source data had them, reasonable low-risk extensions (price/review/buy/near me/vs-sibling patterns) flagged with † where inferred to round out to a usable set. Combined vol = primary + support added together, a rough proxy for total addressable demand if the SKU is added. Every entry here is meant to make stocking the product a same-day SEO job — primary, secondary, and the reasoning are already done.

## Maintenance — keep this current

This is a **living document**, same as `blog-content-calendar.md`. Every time a new keyword batch/export is processed:
1. Add its "missing expression" and "unstocked brand" findings to the relevant category section below (create a new category section if needed).
2. Every new entry must carry: a primary keyword with real demand signal, a low-to-moderate KD, and 5-6 supporting keywords — not just a bare brand name. If the source data is thin, extend with the standard buy/price/review/near-me pattern and flag with †.
3. When a product from this list actually gets stocked, **delete its row** and go build its `seo` field in `products.ts` using exactly the primary/secondary already worked out here — don't re-research it.
4. Refresh the cross-category priority list at the bottom whenever a new category is added or a top item gets stocked.

---

## Cognac & Brandy

✅ **Fully stocked** (2026-08-28) — Martell Blue Swift, Martell Chanteloup XXO, Martell Cordon Bleu, Meukow VSOP, Le Portier Shay VSOP, ABK6 VSOP, Salignac VSOP, Villon VSOP, and Ararat VS Armenian Brandy are all now live in `products.ts` with brand hubs in `brandHubs.ts`. No open gaps remain in this category from this pass.

---

## Rum

✅ **Fully stocked** (2026-08-28) — Privateer, Pusser's, Koloa (Kaua'i Gold), Havana Club 7 Años, Brugal 1888, Cruzan 9 Spiced, Parrot Bay Coconut, Blue Chair Bay Coconut Spiced, Old Monk 7 Year, Tanduay 5 Years Dark, Siesta Key (Spiced + Toasted Coconut), Ten To One (Dark + White), Don Papa 7, Zaya 12 Gran Reserva, Ron Barceló Imperial, and Admiral Nelson Spiced are all now live in `products.ts` with brand hubs in `brandHubs.ts`. No open gaps remain in this category from this pass.

---

## Gin

✅ **Mostly stocked** (2026-08-28) — Barr Hill Tom Cat, Beefeater 24, Beefeater Pink, and Bombay Sapphire East are now live in `products.ts` (existing brand hubs already covered all four, no new hubs needed). Still open:

| Brand (in catalog) | Missing expression | Primary key | Support keys | Combined vol |
|---|---|---|---|---|
| Bombay Sapphire | Bombay Sapphire Premier Cru | bombay sapphire premier cru (210, KD 7) | bombay premier cru price† · buy bombay premier cru† | 210 |
| Ki No Bi | Ki No Bi Sei (navy-strength/travel-retail) | ki no bi sei† | long-tail, all under 20/row · ki no bi sei price† · buy ki no bi sei† | low but consistent |

**Out of scope / needs confirmation, not gin:** Drumshanbo also makes a whiskey (390, KD 15) and a vodka (110, KD 6) — only relevant if stocked under their own categories.

---

## Bourbon

✅ **Fully stocked** (2026-08-28) — every item identified in this pass is now live in `products.ts`: Old Forester (1897, 1920, Birthday Bourbon), 1792 (Full Proof, Single Barrel, Sweet Wheat), E.H. Taylor Four Grain, Elijah Craig 18 Year, Jim Beam Black, Bulleit 10 Year, Kentucky Owl Confiscated, Basil Hayden Toast, Booker's, Henry McKenna 10 Year, Very Old Barton, Old Rip Van Winkle 10 Year, Willett Pot Still Reserve, and Little Book — with 3 new brand hubs (Henry McKenna, Very Old Barton, Willett; the rest already had hubs). No open gaps remain in this category from this pass.

---

## Scotch

✅ **Fully stocked** (2026-08-28) — every item identified in this pass is now live in `products.ts`: Highland Park Viking Honour, Lagavulin (8 Year + Distillers Edition), Ardbeg Corryvreckan, Balvenie 14 Caribbean Cask, Glenlivet Founder's Reserve, Laphroaig Quarter Cask, Aberlour A'bunadh, Talisker 10, Glenmorangie (Lasanta — relaunched 2025 as a 15 Year — + 18 Year), Auchentoshan 12, Cragganmore 12, and Aberfeldy 12 — with 5 new brand hubs (Aberfeldy, Auchentoshan, Cragganmore, Talisker, Glenmorangie; the rest already had hubs). No open gaps remain in this category from this pass.

---

## Irish

✅ **Mostly stocked** (2026-08-28) — Red Spot 15 Year, Powers Gold Label, Jameson Caskmates IPA, Teeling Single Grain, Connemara Cask Strength, Tullamore D.E.W. 18 Year, Writers' Tears (Copper Pot Florio), Kilbeggan, Method and Madness, Dingle Single Malt, and (as of a later pass) Waterford Organic Gaia 1.1 are all now live in `products.ts` — with 5 new brand hubs (Dingle, Kilbeggan, Method and Madness, Writers' Tears, Waterford; the rest already had hubs). A real image surfaced for Waterford's Organic Gaia 1.1 in the general stock-photo batch, superseding the earlier "watch, don't stock" flag — the ownership situation is noted in the product copy but no longer a blocker since this is a clearly-labeled, real, currently-sold expression. Still open:

| Brand | Primary key | Support keys | Note |
|---|---|---|---|
| Roe & Co | roe & co† | roe and co price† · buy roe and co† | Real per web research, not found in the SEMrush data — lower confidence |

---

## Japanese

✅ **Fully stocked** (2026-08-28) — Mars Komagatake, Mars Tsunuki, Fuji Single Malt, Nikka Pure Malt Red, and Ichiro's Malt Chichibu Distillery II are all now live in `products.ts` — resolving the two-hub Mars problem (the Mars Shinshu hub copy is corrected to reflect real stock) and adding 2 new brand hubs (Fuji, Chichibu). Chichibu was originally flagged as "effectively unstockable" due to the original line's four-figure secondary prices, but the newly-introduced (2025) Distillery II release is a real, more attainable entry point — priced accordingly (~$200) and clearly framed as a debut sub-line, not the ultra-rare original. No open gaps remain in this category from this pass.

---

## Vodka

✅ **Fully stocked** (2026-08-28) — every item identified in this pass is now live in `products.ts`: Pinnacle (Whipped Cream, Cotton Candy, Cake), New Amsterdam Pink Whitney, Absolut Elyx, Grey Goose VX, Smirnoff (Green Apple, Whipped Cream), Cîroc Apple, Ketel One Peach & Orange Blossom, Svedka Blue Raspberry, Chopin Rye, Crystal Head Aurora, Deep Eddy Grapefruit, Prairie Organic Cucumber, plus new brands Beluga, SKYY (+ Infusions Raspberry), Effen, Burnett's (Original, Pink Lemonade, Raspberry), Żubrówka, Three Olives (Cherry, Grape), and Level Vodka — with 7 new brand hubs (Beluga, Burnett's, Effen, Level, SKYY, Three Olives, Żubrówka). No open gaps remain in this category from this pass.

---

## Rye & Other Whiskey

✅ **Fully stocked** (2026-08-28) — every item identified in this pass is now live in `products.ts`: Jack Daniel's Bonded, Crown Royal Salted Caramel, George Dickel Rye, Uncle Nearest (1820 + Rye), J.P. Wiser's Triple Barrel, Stranahan's Blue Peak, Westward Pinot Noir Cask, Old Overholt, Redemption Rye, Templeton Rye, Woodinville (Straight Rye + 6 Year + 8 Year Limited Edition), Wilderness Trail (Kentucky Straight + Bottled-in-Bond), Frey Ranch Bottled-in-Bond, Woodford Reserve Rye, Angel's Envy Rye, Alberta Premium, Lot No. 40, Journeyman Featherbone Bourbon, Lost Lantern, plus (in a later pass) Copperworks American Single Malt (Cask No. 160-2 Special Release), Westland American Single Malt, and WhistlePig FarmStock Rye — with 13 new brand hubs total (11 + Copperworks + Westland). No open gaps remain in this category from this pass.

**Checked and excluded:** Old Elk (wheated bourbon focus, not rye — doesn't fit this category). Filibuster Rye flagged as unconfirmed/lower-confidence, not included as a verified finding.

---

## Tequila & Mezcal

✅ **Fully stocked** (2026-08-28) — all 56 items identified in this pass are now live in `products.ts`, spanning every gap and new-brand candidate: Don Julio (Rosado, Primavera), Patrón (Extra Añejo, Gran Patrón Piedra, Gran Patrón Platinum, Roca Patrón Silver), Herradura (Ultra, Legend), José Cuervo Tradicional, Casamigos Mezcal, Clase Azul (Plata, Añejo, Gold, Mezcal Guerrero), Del Maguey (Tobalá, San Luis del Río, Santo Domingo Albarradas, Minero), Teremana Añejo, El Tesoro (Añejo, Extra Añejo), Espolòn Cristalino, Casa Dragones Joven, plus new brands Milagro, Olmeca Altos, Corralejo, Maestro Dobel, Astral, Dulce Vida, Suerte, Siete Leguas (Blanco, Reposado, Añejo), Tapatío, Volcán de Mi Tierra (Blanco, Reposado), Cabo Wabo (Blanco, Reposado), DeLeón (Blanco, Añejo), Avión, Padre Azul (Silver, Reposado, Añejo), Alipús (San Juan, San Andrés), Los Danzantes, Wahaka, Rey Campero, Fidencio, Marca Negra, Real Minero (Pechuga, Sierrudo), Sombra (Joven, Reposado), and Yuu Baal — with 21 new brand hubs. This is the single largest batch processed in the entire product-import project. No open gaps remain in this category from this pass.

**Checked and excluded:** El Padrino tequila (real brand, small footprint, no meaningful search-volume signal — lower priority, no image sourced). "Los Amantes" mezcal (no distinct, verifiable current brand found under this exact name).

---

## Fine Wine

✅ **Mostly stocked** (2026-08-28) — 28 of the items identified in this pass are now live in `products.ts`: Stella Rosa (Black, Peach), Bonterra (Rosé, Pinot Noir), Taylor Fladgate Chip Dry White Port, Kendall-Jackson Vintner's Reserve Sauvignon Blanc, Josh Cellars (Pinot Grigio, Rosé), Duckhorn Cabernet Sauvignon, Bogle (Cabernet Sauvignon, Pinot Noir, Merlot), 19 Crimes Cabernet Sauvignon, Barefoot Pinot Grigio, Bartenura Moscato, William Hill Cabernet Sauvignon, Robert Mondavi Cabernet Sauvignon, Austin Hope, Stags' Leap, Far Niente Chardonnay, Turley Zinfandel, Rombauer Zinfandel, Whitehaven Sauvignon Blanc, Kung Fu Girl Riesling, Cupcake Moscato, Sandeman Port, Kopke Port, Mirabeau Rosé, Badger Mountain Organic Riesling, and Cooper's Hawk Lux Ice Wine — with 20 new brand hubs. Still open (thin/no CSV volume, deferred pending a dedicated export): Lustau's other sherries, Graham's other ports, Dow's/Warre's/Cockburn's/Niepoort, Barbadillo/Valdespino/standalone Tío Pepe/Romate, Matua Sauvignon Blanc. **Belaire Sparkling Rosé** and **Barefoot Sparkling Wine** (Brut + Pink) moved to the Champagne & Sparkling section below since they're sparkling, not still wine.

---

## Champagne & Sparkling Wine

✅ **Mostly stocked** (2026-08-28) — 47 items identified in this pass are now live in `products.ts`: Moët Nectar Impérial, G.H. Mumm Cordon Rouge, Krug Clos d'Ambonnay, Perrier-Jouët Grand Brut, Piper-Heidsieck Rare, Veuve Clicquot Rich, Billecart-Salmon Demi-Sec, Mionetto Valdobbiadene Prosecco Superiore, Louis Roederer Brut Nature, Dom Ruinart Rosé, Taittinger (Nocturne + Comtes de Champagne Rosé), Anna de Codorníu, Schramsberg J. Schram, Jacquesson, Deutz (Brut Classic + Amour de Deutz + Rosé), Duval-Leroy, Philipponnat (Royale Réserve + Réserve Non Dosé), Mercier (Brut + Rosé), Bruno Paillard (Brut + Rosé), Henriot (Brut + Rosé), Josh Cellars (Prosecco + Rosé), Cupcake, Zonin (+ Rosé), Avissi (Extra Dry + DOC), Lunetta, La Vostra (+ Rosé), Riondo (Extra Dry + Rosé), Coppola, Asolo, Kim Crawford, Belaire, McBride Sisters (Brut + Rosé), and Barefoot Bubbly (Brut + Pink Moscato) — with 22 new brand hubs. In a later pass, **Gosset Grand Rosé Brut** and **Viarae Prosecco DOC** (a real alcoholic Prosecco co-founded by Issa Rae — a correction to this doc's earlier note miscategorizing it as non-alcoholic) were also added, with 2 more brand hubs. Still open (no image sourced this round): **Freixenet Prosecco** (CSV-backed, zero new-vendor risk — same brand already stocked in Cava) and **Ayala** (founded 1860, Aÿ Grand Cru).

**Checked and excluded:** Devaux (only thinly confirmed). Gramona and Juvé & Camps' broader ranges (couldn't independently confirm specific missing tiers). Dow's/Warre's/Cockburn's/Niepoort-equivalent situation doesn't apply here.

---

## Cider

✅ **Fully stocked** (2026-08-28) — Original Sin Black Widow, Downeast (Original Blend + Pumpkin Blend), ACE Pear, Bold Rock (Variety Pack + Virginia Apple + Imperial Cider), Magners, and Schilling Cider (Imperial Mango + Local Legend + Variety Pack) are all now live in `products.ts` — with 4 new brand hubs (Bold Rock, Magners, Original Sin, Schilling Cider). No open gaps remain in this category from this pass.

---

## Non-Alcoholic Beer & Cider

✅ **Mostly stocked** (2026-08-28) — Bud Light Zero, Go Brewing (New School Sour, Sunbeam Pils, Sunshine State Tropical IPA), BERO Noon Wheat (Tom Holland's NA beer brand), and Clausthaler (Original, Dry Hopped, Santa Clausthaler holiday seasonal) are all now live in `products.ts` — with 3 new brand hubs (Go Brewing, BERO, Clausthaler). Still open (no image sourced this round): **Blue Moon NA** (the alcoholic Blue Moon Belgian White is already stocked, but no non-alcoholic version image was in this batch).

---

## Beer

✅ **Fully stocked** (2026-08-28) — Deschutes Fresh Squeezed IPA, Samuel Adams Boston Lager, Sam Adams Octoberfest, Coronita, Bud Ice, Heineken Silver, Sierra Nevada Pilsner, Ballast Point Sculpin IPA, Ballast Point Grapefruit Sculpin IPA, Bell's Two Hearted Ale, and The Alchemist Heady Topper are all now live in `products.ts`, with new brand hubs added in `brandHubs.ts` for Deschutes, Ballast Point, and The Alchemist (Samuel Adams, Corona, Bud/Anheuser-Busch, Heineken, Sierra Nevada, and Bell's hubs already existed). Guinness 0 remains covered under the NA Beer & Cider category rather than here.

Still open (no image sourced this round): Sam Adams Summer Ale, Beck's / Amstel Light / Red Stripe / Tsingtao (Lager), Hoegaarden / Franziskaner / Weihenstephaner (wheat beer), North Coast Old Rasputin (Stout).

---

## Non-Alcoholic Spirits

✅ **Mostly stocked** (2026-08-28) — Lyre's Italian Spritz and Lyre's Amalfi Spritz were confirmed already live from an earlier pass. In this pass, **CleanCo / Clean T**, **Cut Above Whiskey**, and **Tanqueray 0.0%** were added, with 2 new brand hubs (CleanCo, Tanqueray under NA Spirits; Cut Above already had a hub). Still open (no image sourced this round): **Seedlip Spice 94** (the third leg of Seedlip's real 3-flavor range) and **Cut Above Gin**.

---

## Non-Alcoholic Champagne & Sparkling

✅ **Mostly stocked** (2026-08-28) — **Grüvi Bubbly Rosé** and **JOYUS Non-Alcoholic Sparkling Wine** (Seattle's first NA winery) are now live in `products.ts`, with 2 new brand hubs (Grüvi, JOYUS). Still open (no image sourced this round): **Lyre's Classico**, **Surely Sparkling Rosé**, and **French Bloom La Cuvée**.

---

## Non-Alcoholic RTD Cocktails

✅ **Mostly stocked** (2026-08-28) — **Lapo's Melograno Mule**, **De Soi Golden Hour**, and **Kin Euphorics** (Kin Spritz Energizing Flow + Lightwave) are all now live in `products.ts` — with 1 new brand hub (Kin Euphorics; Lapo's and De Soi already had hubs). Still open (no image sourced this round): Lapo's Espresso Martini/Amaro Cola/Citrus Spritz, Curious Elixirs' broader numbered range, De Soi Spritz Italiano/Haute Margarita, and Casamara Club.

---

## RTD & Liqueurs

✅ **Mostly stocked** (2026-08-28) — **BuzzBallz** (all 9 flavors: Berry Cherry Limeade, Chili Mango, Espresso Martini, Lime 'Rita, Peachballz, Pineapple Jalapeño, Strawberry 'Rita, Tequila 'Rita, Watermelon Smash), **Ramazzotti** (Amaro, Rosato, Sambuca), **Amarula** (Cream Liqueur + Vanilla Spice), **Chinola Passion Fruit Liqueur**, **Disaronno Velvet**, **Lina's Crema di Limoncello** (resolves the limoncello category gap), and 3 new DeKuyper flavors (Blue Curaçao, Razzmatazz, Watermelon Pucker) are all now live in `products.ts` — with 6 new brand hubs (BuzzBallz, Ramazzotti, Amarula, Chinola, Disaronno, Lina's; DeKuyper already had a hub). Still open (no image sourced this round): On The Rocks' and Cutwater's broader flavor ranges, White Claw founding flavors, Kahlúa Dunkin' Caramel Swirl, RumChata Limón, Tip Top's remaining 3 flavors, Underwood's sparkling extensions, Absolut Cocktails, Vizzy/Bud Light Seltzer, and Frangelico/Cynar/Suze/Licor 43/Sambuca (non-Ramazzotti).

**Note:** the Craft Cocktails research flagged that Babe wine may have been discontinued by AB InBev in 2023 per WebSearch — worth confirming with procurement before further investment in that SKU's copy.

---

## Non-Alcoholic Wine

Sourced from `keyword-map-na-wine.md`. Covers all 24 stocked NA Wine SKUs (Red, White, Rosé). Only category-level exports existed this round — no per-brand data.

### Missing expressions within brands you already stock

| Brand | Missing expression | Signal | Note |
|---|---|---|---|
| FRE (Cab, Chardonnay, Merlot, Rosé stocked) | **FRE Red Blend** | fre red blend (260, KD 12) + fre non-alcoholic red blend (210, KD 4) | Both CSV-backed, real Sutter Home SKU |
| FRE (as above) | FRE Sauvignon Blanc | fre non alcoholic wine (2,900, halo) | Real, widely distributed at Walmart/Amazon/Albertsons |
| Giesen (Rosé, Pinot Grigio, Red, Sauv Blanc stocked) | Giesen 0% Riesling + Giesen 0% Chardonnay | — | Both real, confirmed current SKUs (Chardonnay added Sept 2024), completing the brand's real 7-SKU 0% lineup |
| Leitz (Riesling, Rosé stocked) | **Leitz Pinot Noir** (still red) | — | Real, confirmed 100% Pinot Noir still red — would give Leitz its first stocked red |
| Surely (Rosé stocked) | Surely Cabernet Sauvignon, Sauvignon Blanc, Red Blend | — | All 3 real, confirmed current SKUs (Amazon listings) |
| Lautus (Sauv Blanc, Savvy Red stocked) | Lautus Chardonnay + Lautus Rosé (still) | — | Both real, confirmed current SKUs |
| Tomorrow Cellars (Red Blend stocked) | Tomorrow Cellars Rhône Blanc White | — | Real still-white sibling to the stocked red (Amazon "Duo 2 Pack" listing) |

### Brands with real demand, not in catalog at all

| Brand | Primary key (vol, KD) | Note |
|---|---|---|
| **Stella Rosa Naturals** | stella rosa non alcoholic wine (1,000, KD 6) | Real 0.3% ABV semi-sweet line, CSV-backed — strongest Part B finding by volume. **Caution:** confirm the alcoholic Stella Rosa isn't already stocked elsewhere before treating as a clean gap |
| **Zeronimo (Leonis Blend)** | zeronimo leonis blend non alcoholic wine (720, KD 9) | CSV-backed. Austrian family winery, 70+ year-old vines, winner of USA TODAY's 2026 Best Non-Alcoholic Wine |
| Torres Natureo | — | Real, Familia Torres (Spain), pioneer European dealcoholized-wine program since 2008; investing €6M (2024-2026) in a dedicated NA winery. No US-market CSV volume this pull |
| McGuigan Zero | — | Real, Hunter Valley Australia, 5-SKU range, 90+ point reviews. No US-market CSV volume this pull |

**Checked and excluded:** Josh Cellars NA (real but sparkling-only, already covered under NA Champagne & Sparkling). TÖST (real but a from-scratch tea/botanical beverage, not a wine — adjacent category, not a fit here).

**Priority:** FRE Red Blend and Leitz Pinot Noir are the clearest same-brand wins (both fill a real gap in an already-stocked, already-successful line). Stella Rosa Naturals and Zeronimo are the strongest new-brand picks, both CSV-backed.

✅ **Update (2026-08-28):** **JOYUS Non-Alcoholic Cabernet Sauvignon** (Seattle's first NA winery, sourced separately from the Jøyus Wine listing above — same brand) is now live in `products.ts`, with a new brand hub. Its sparkling companion, JOYUS Non-Alcoholic Sparkling Wine, was added under the Non-Alcoholic Champagne & Sparkling category instead, since it's sparkling rather than still wine.

---

## Bar Essentials

Sourced from `keyword-map-bar-essentials-bitters-vermouth.md` and `keyword-map-bar-essentials-mixers-glassware.md`. Covers all 52 stocked Bar Essentials SKUs across 6 subcategories (Bitters, Vermouth, Garnishes, Mixers & Syrups, Cocktail Mixes, Glassware & Barware) — the first non-drink-style category processed in this project.

### Missing expressions within brands you already stock

| Brand (in catalog) | Missing expression | Signal | Note |
|---|---|---|---|
| **Dolin** (Rouge stocked) | **Dolin Blanc** | CSV-backed, ~2,890 combined | Strongest Part A finding in this category |
| **Martini & Rossi** (Rosso stocked) | **Martini Bianco** | CSV-backed | Rivals the stocked Rosso's own volume |
| Angostura (Aromatic + Orange Bitters stocked) | Cocoa Bitters | CSV-backed, ~960 combined | Real, confirmed current SKU |
| Noilly Prat (Extra Dry stocked) | Ambré, Rouge | confirmed real | Both real, currently-sold expressions |
| Carpano Antica (stocked) | Carpano Bianco, Carpano Dry, Punt e Mes | confirmed real | Rounds out Carpano's real house range |
| Mezzetta (1 olive SKU stocked) | Other real olive lines | CSV-backed, ~1,090 combined | |
| Bittermens (1 flavor stocked) | 4 more real flavors | confirmed real | |
| Fee Brothers (1 flavor stocked) | Broader real lineup | confirmed real | |
| Dirty Sue (stocked) | Broader olive lineup | confirmed real | |
| Filthy (4 SKUs stocked) | Cocktail Onions, Cocktail Picks | confirmed real | |
| **Finest Call** (partial line stocked) | 9 real unstocked flavors — Bloody Mary, Sweet & Sour, Simple Syrup, Grenadine, Triple Sec, Piña Colada, fruit purées, Old Fashioned Mix, Mojito Mix | confirmed real | Single largest Part A cluster in this category by SKU count |
| Master of Mixes (partial line stocked) | 10 real unstocked flavors | confirmed real | |
| Zing Zang (partial line stocked) | Margarita, Michelada, Blazing Bloody Mary | confirmed real | |
| Fever-Tree (partial line stocked) | Elderflower Tonic, Sparkling Pink Grapefruit, Mediterranean Tonic, Sicilian Lemonade, Blood Orange Ginger Beer | confirmed real, 5 flavors | |
| Tillen Farms (1 SKU stocked) | Other real cherry lines | confirmed real | |

### Brands with real demand, not in catalog at all

| Brand | Primary key (vol, KD) | Note |
|---|---|---|
| **Topo Chico Hard Seltzer** | topo chico hard seltzer (9,900, KD 21) | **Largest single gap found in this entire Bar Essentials batch by volume** — the plain sparkling mineral water is a separate, already-considered non-alcoholic product, not conflated here |
| **Cocchi Vermouth di Torino / Americano** | — | CSV-backed, "strong finding" — respected Italian aromatized-wine house, zero shelf presence despite the stocked-vermouth category |
| Underberg | underberg (2,400) | CSV-backed digestive bitters |
| Cinzano | cinzano vermouth (880) | CSV-backed |
| **Yeti** (cocktail shaker) | yeti cocktail shaker (1,900) | CSV-backed |
| **Stanley** (cocktail shaker) | stanley cocktail shaker (720) | CSV-backed — "currently a cultural/viral product category" |
| OXO (cocktail shaker/jigger) | oxo cocktail shaker (480) | CSV-backed |
| Regan's / Scrappy's / The Bitter Truth | — | confirmed real; well-known craft bitters houses, none stocked |
| Punt e Mes / Lillet Blanc / Sable & Rosenfeld | — | confirmed real |
| Stirrings | — | confirmed real; margarita/old-fashioned mix line |
| Bundaberg Rum | — | confirmed real; same parent brand as the stocked Bundaberg ginger beer |
| Rose's / Torani | — | confirmed real |
| Riedel | — | confirmed real; glassware |
| Coca-Cola Signature Mixers | — | zero-volume this pull, flagged for a dedicated future export |
| Skinny Mixes / Skinnies | — | confirmed real |

**Checked and excluded:** "Luxardo's own olives" and "Tio Pepe cocktail onions" — both suggested as possible candidates during research briefing, both WebSearch-verified as not real products and dropped rather than force-fit.

**Priority:** Dolin Blanc and Martini Bianco are the clearest same-brand wins — both CSV-backed, both fill a real gap in an already-stocked vermouth line. Topo Chico Hard Seltzer is the standout new-brand pick by raw volume. Cocchi Vermouth di Torino/Americano is the strongest "real, respected brand entirely missing" case.

---

## Updated recommended stocking priority, across all 21 categories

1. **Martell Blue Swift** (Cognac) — ~22,000 combined vol, confirmed twice, T1
2. **Pinnacle Whipped Cream** (Vodka) — real demand exceeds the base brand's own keyword pool, only plain base stocked
3. **Highland Park Viking Honour** (Scotch) — real flagship 12yo, already named on your own live page
4. **Red Spot** (Irish) — real, ~$235, was already the headline name on your Spot Whiskey page copy
5. **Privateer** (Rum) — ~18,000 combined vol, T2, fits premium positioning
6. **Beluga** (Vodka) — 12,100 vol, KD 15, strongest new vodka-brand case
7. **Old Forester Whiskey Row trio** (Bourbon) — 1897/1910/1920, real standing SKUs, easy to source
8. **Booker's** (Bourbon) — real full SEMrush brand page exists, ~55K demand signal
9. **New Amsterdam Pink Whitney** (Vodka) — large combined demand, popular collab flavor
10. **Pusser's** (Rum) — ~7,300 combined vol, T1
11. **Martell XXO** (Cognac) — 8,100 vol, T1, bundles with Blue Swift decision
12. **Talisker** (Scotch) — strongest new-brand case, same tier as your existing Oban
13. **José Cuervo Tradicional** (Tequila) — fills the entire missing middle tier of the brand already anchoring the category
14. **Woodford Reserve Rye / Angel's Envy Rye** (Rye & Other Whiskey) — rye expressions from brands whose bourbon is already stocked, page infrastructure exists
15. **Volcán de Mi Tierra** (Tequila) — Clooney/Gerber LVMH-backed venture, direct cross-sell with stocked Casamigos
16. **Stella Rosa Black** (Fine Wine) — 22,200 combined vol, single strongest finding in the entire wine gap analysis, inside a brand already stocked
17. **William Hill** (Fine Wine) — strongest new-brand case in wine, real demand in both Cabernet Sauvignon and Chardonnay
18. **Bonterra Rosé / Pinot Noir** (Fine Wine) — both independently CSV-confirmed, lowest-risk pick in the wine batch, brand already stocked at 4 SKUs
19. **Moët Nectar Impérial / Ice Impérial** (Champagne) — ~6,970 combined vol, real demand on the brand with the biggest footprint in the whole Champagne catalog
20. **Freixenet Prosecco** (Champagne & Sparkling) — CSV-backed, zero new-vendor risk, same brand already stocked in Cava
21. **Josh Cellars Prosecco** (Champagne & Sparkling) — 2,900 vol, natural line extension of a brand already stocked at 5 SKUs
22. **Original Sin Black Widow** (Cider) — ~3,500+ combined, Original Sin's own actual best-selling flagship, not stocked at all
23. **Deschutes Fresh Squeezed IPA** (Beer) — ~6,000+ combined, CSV-backed, strongest unstocked-SKU signal in the whole Beer batch, same brewer already stocked
24. **Samuel Adams Boston Lager** (Beer) — ~10,000+ combined, the brand's actual flagship sits entirely unstocked in favor of the extreme-tier Utopias
25. **Seedlip Spice 94** (NA Spirits) — real third leg of an already-stocked 2-flavor range, fixes a live hook/inventory mismatch
26. **Lapo's real 6-SKU range** (NA RTD Cocktails) — brand already stocked at 1 of 6 real SKUs
27. **Lyre's Classico** (NA Champagne) — ~2,720 combined, strongest new-brand signal in the NA sparkling batch
28. **BuzzBallz Ready-to-Drink Cocktails** (RTD & Liqueurs) — 1,300 vol, CSV-backed, strongest unstocked-brand finding in the RTD batch
29. **On The Rocks real 9-SKU range** (RTD & Liqueurs) — brand already stocked at 2 of 9 real expressions
30. **FRE Red Blend** (Non-Alcoholic Wine) — CSV-backed, real Sutter Home SKU, fills a gap in an already-4-SKU-deep line
31. **Stella Rosa Naturals** (Non-Alcoholic Wine) — 1,000 vol, CSV-backed, strongest new-brand pick in the NA wine batch
32. **Dolin Blanc** (Bar Essentials) — CSV-backed, ~2,890 combined, strongest Part A finding in the Bar Essentials batch, brand already stocked
33. **Topo Chico Hard Seltzer** (Bar Essentials) — CSV-backed, 9,900 vol, largest single gap found in the entire Bar Essentials batch by volume
34. Everything else above ~2,000 combined vol / real-confirmed-but-thin is a reasonable second-tier candidate — see per-category tables above.

---

*Every category with keyword export data has now been batch-processed. This document remains a living reference — update it whenever a listed product is actually stocked (delete its row) or a new export surfaces further gaps.*
