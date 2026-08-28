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

Sourced from real SEMrush data (`keyword-map-irish-v2.md`).

### Missing expressions within brands you already stock

| Brand (in catalog) | Missing expression | Primary key | Support keys | Note |
|---|---|---|---|---|
| Spot range | **Red Spot** | red spot whiskey (confirmed real, ~$235) | red spot 15 year† · red spot price† · buy red spot whiskey† · red spot vs green spot† | Was actively named on your hub's planned copy before this build corrected it to only Green/Yellow/Blue. **Highest-priority item in the whole Irish category.** |
| Powers | Gold Label | powers gold label (confirmed real, likely Powers' highest-volume search term) | powers gold label price† · buy powers gold label† · powers gold vs john's lane† | Entry blended expression, not stocked |
| Jameson | Caskmates | jameson caskmates (confirmed real, currently sold, $30-40) | jameson caskmates ipa† · jameson caskmates stout† · jameson caskmates price† · buy jameson caskmates† | |
| Teeling | Single Grain | teeling single grain (confirmed real, ~$40-50) | teeling single grain price† · buy teeling single grain† · teeling single grain vs small batch† | |
| Connemara | Cask Strength | connemara cask strength (confirmed real, steady demand) | connemara cask strength price† · buy connemara cask strength† | |
| Tullamore D.E.W. | 18 Year | tullamore dew 18 year (320, KD 6) | tullamore dew 18 price† · buy tullamore dew 18† · tullamore dew 18 vs 12† | |

### Brands with real demand, not in catalog at all

| Brand | Primary key | Support keys | Note |
|---|---|---|---|
| Writers' Tears | writers tears irish whiskey† | writers tears copper pot† · writers tears price† · buy writers tears† | Confirmed real (category-page LSI) |
| Kilbeggan | kilbeggan irish whiskey† | kilbeggan single malt (real)† · kilbeggan price† · buy kilbeggan† | Thin data — budget-accessible ~$24-31 |
| Method and Madness | method and madness irish whiskey† | method and madness single pot still† · method and madness price† | Confirmed real (single-pot-still subcategory keyword data) |
| Dingle, Roe & Co | dingle single malt† / roe & co† | dingle price† · roe and co price† · buy dingle whiskey† · buy roe and co† | Real per web research, not found in the SEMrush data — lower confidence |
| Waterford | waterford whiskey† | waterford price† · buy waterford whiskey† | Real cult following, but mid-acquisition (receivership → new owner, April 2026) — **watch, don't stock yet** |

**Priority:** Red Spot is the clearest "just go get it" case in this whole project.

---

## Japanese

Sourced from real SEMrush data (`keyword-map-japanese-v2.md`).

### Missing expressions within brands you already stock

| Brand (in catalog) | Missing expression | Primary key | Support keys | Note |
|---|---|---|---|---|
| Mars/Hombo (Iwai hub) | Mars Komagatake, Maltage Cosmo | mars komagatake (confirmed real, currently in production) | mars maltage cosmo† · mars komagatake price† · buy mars komagatake† · mars komagatake vs iwai† | "A permanent part of the core range, readily available in several international markets" — not a rarity. Resolves the two-hub Mars problem |
| Nikka | Pure Malt Red | nikka pure malt red (confirmed real, currently attainable) | nikka pure malt red price† · buy nikka pure malt red† · nikka pure malt red vs black† | Distinct flavor profile (Yoichi + Miyagikyo blend) |

### Brands with real demand, not in catalog at all

| Brand | Primary key | Support keys | Note |
|---|---|---|---|
| **Fuji (Kirin)** | fuji single malt† | fuji single blended† · fuji sanroku† · fuji price† · buy fuji whisky† | Confirmed real, M-H demand and rising — Kirin's Mount Fuji/Gotemba distillery, actively pushed as an export brand. Zero shelf presence currently |
| Mars Tsunuki | mars tsunuki single malt† | mars tsunuki price† · buy mars tsunuki† | Confirmed real, second Mars/Hombo distillery, current 2025/2026 releases |
| Chichibu / Ichiro's Malt | chichibu whisky† | ichiro's malt price† · ichiro's malt review† | Confirmed real but effectively unstockable at real volume (cult status, ~60,000L/year production, 4-figure secondary prices) — better as a blog topic than a stocking target |

**Priority:** Mars Komagatake/Maltage Cosmo is the cleanest win — resolves an existing site architecture problem (two Mars hubs) and is confirmed genuinely available, not rare.

---

## Vodka

✅ **Fully stocked** (2026-08-28) — every item identified in this pass is now live in `products.ts`: Pinnacle (Whipped Cream, Cotton Candy, Cake), New Amsterdam Pink Whitney, Absolut Elyx, Grey Goose VX, Smirnoff (Green Apple, Whipped Cream), Cîroc Apple, Ketel One Peach & Orange Blossom, Svedka Blue Raspberry, Chopin Rye, Crystal Head Aurora, Deep Eddy Grapefruit, Prairie Organic Cucumber, plus new brands Beluga, SKYY (+ Infusions Raspberry), Effen, Burnett's (Original, Pink Lemonade, Raspberry), Żubrówka, Three Olives (Cherry, Grape), and Level Vodka — with 7 new brand hubs (Beluga, Burnett's, Effen, Level, SKYY, Three Olives, Żubrówka). No open gaps remain in this category from this pass.

---

## Rye & Other Whiskey

Sourced from `MASTER_SEO_IMPLEMENTATION.md` Sections 6-7 + `product-gaps-batch4.md`, cross-checked against `products.ts` (59 stocked SKUs), WebSearch-verified where no SEMrush data existed.

### Missing expressions within brands you already stock

| Brand (in catalog) | Missing expression | Primary key | Support keys | Note |
|---|---|---|---|---|
| WhistlePig | FarmStock Rye | confirmed real via WebSearch | farmstock rye price† · farmstock rye review† · whistlepig farmstock beyond bonded† · buy whistlepig farmstock† · farmstock vs 10 year† · whistlepig farmstock near me† | Core ongoing line (blend of estate-grown rye + aged rye), distinct from the 5 WhistlePig SKUs already stocked |
| Jack Daniel's | Bonded | confirmed real via WebSearch | jack daniel's bonded price† · jack daniel's bonded review† · jack daniel's bonded vs single barrel† · buy jack daniel's bonded† · jack daniel's bottled in bond† | Real, currently-sold bottled-in-bond expression |
| Crown Royal | Salted Caramel | confirmed real via WebSearch | crown royal salted caramel price† · buy crown royal salted caramel† · crown royal salted caramel review† · crown royal salted caramel vs regal apple† | Popular flavored line extension, not stocked |
| George Dickel | Rye Whisky | confirmed real via WebSearch | george dickel rye price† · buy george dickel rye† · george dickel rye review† · george dickel rye vs bulleit† | Core rye SKU from a brand where you stock other Dickel expressions |
| Uncle Nearest | 1820 Single Barrel Edition | confirmed real via WebSearch | uncle nearest 1820 price† · buy uncle nearest 1820† · uncle nearest 1820 review† · uncle nearest 1820 vs 1856† | Premium single-barrel tier, not stocked |
| J.P. Wiser's | Triple Barrel Rye | confirmed real via WebSearch | jp wisers triple barrel price† · buy jp wisers triple barrel† · jp wisers triple barrel review† | Canadian rye line extension |
| Stranahan's | Blue Peak | confirmed real via WebSearch | stranahans blue peak price† · buy stranahans blue peak† · stranahans blue peak review† · stranahans blue peak vs original† | Colorado craft brand's premium expression |
| Westward | Pinot Noir Cask Finish | confirmed real via WebSearch | westward pinot noir cask price† · buy westward pinot noir cask† · westward pinot noir cask review† | Oregon American single malt, wine-cask finish |

### Brands with real demand, not in catalog at all

| Brand | Primary key | Support keys | Note |
|---|---|---|---|
| **Old Overholt** | old overholt rye† | old overholt price† · buy old overholt rye† · old overholt review† · old overholt vs rittenhouse† | America's oldest continuously-produced whiskey brand, budget rye staple |
| Redemption Rye | redemption rye† | redemption rye price† · buy redemption rye† · redemption rye review† | Established craft rye, widely available |
| Templeton Rye | templeton rye† | templeton rye price† · buy templeton rye† · templeton rye review† | "The Good Stuff" — Prohibition-era branding, well-known |
| Woodinville Straight Rye | woodinville rye† | woodinville rye price† · buy woodinville rye† · woodinville rye review† | Washington craft distillery, grain-to-glass |
| Wilderness Trail Rye | wilderness trail rye† | wilderness trail rye price† · buy wilderness trail rye† | Kentucky craft distillery, strong critical reputation |
| Frey Ranch Bottled-in-Bond Straight Rye | frey ranch bib rye† | frey ranch rye price† · buy frey ranch rye† | Nevada farm-to-bottle distillery, estate-grown grain |
| Woodford Reserve Rye | woodford reserve rye† | woodford reserve rye price† · buy woodford reserve rye† · woodford rye vs bourbon† | Major brand, you stock Woodford bourbon but not their rye |
| Angel's Envy Rye | angel's envy rye† | angel's envy rye price† · buy angel's envy rye† · angel's envy rye vs bourbon† | Rum/port-cask-finished rye, sibling to their stocked bourbon |
| Alberta Premium | alberta premium rye† | alberta premium price† · buy alberta premium† · alberta premium cask strength† | 100% rye Canadian whisky, cult favorite (Cask Strength variant especially) |
| Lot No. 40 | lot no 40 rye† | lot 40 price† · buy lot no 40† · lot 40 review† | Premium 100% rye Canadian whisky |
| Westland American Single Malt | westland american single malt† | westland price† · buy westland single malt† · westland review† | Seattle craft distillery, category leader in American single malt |
| Copperworks American Single Malt | copperworks single malt† | copperworks price† · buy copperworks single malt† | Seattle craft distillery, award-winning |
| Journeyman Distillery | journeyman whiskey† | journeyman featherbone bourbon† · journeyman price† · buy journeyman whiskey† | Michigan craft distillery, organic/rye-forward lineup |
| Lost Lantern | lost lantern whiskey† | lost lantern single cask† · lost lantern price† · buy lost lantern† | Independent bottler of American craft whiskey, collector interest |

**Checked and excluded:** Old Elk (wheated bourbon focus, not rye — doesn't fit this category). Filibuster Rye flagged as unconfirmed/lower-confidence, not included as a verified finding.

**Priority:** Woodford Reserve Rye and Angel's Envy Rye are the standout cases — both are rye expressions from brands whose bourbon you already stock, so the brand trust and page infrastructure already exist.

---

## Tequila & Mezcal

Sourced from `MASTER_SEO_IMPLEMENTATION.md` Section 8 + `product-gaps-batch5.md`, cross-checked against `products.ts` (46 tequila + 17 mezcal SKUs stocked), WebSearch-verified where no SEMrush data existed.

### Missing expressions within brands you already stock

| Brand (in catalog) | Missing expression | Primary key | Support keys | Note |
|---|---|---|---|---|
| Don Julio | Rosado | confirmed real via WebSearch | don julio rosado price† · don julio rosado review† · buy don julio rosado† · don julio rosado vs reposado† | Ruby Port-cask-finished reposado, gifting/visual appeal |
| Don Julio | Primavera | don julio primavera (2,900, KD 17) | don julio primavera price† · buy don julio primavera† · don julio primavera review† · don julio primavera vs reposado† | Seasonal orange-wine-cask reposado — already a validated keyword in the project's own docs |
| Patrón | Extra Añejo | patron extra anejo (2,400, KD 19) | patron extra anejo price† · buy patron extra anejo† · patron extra anejo review† · patron extra anejo vs anejo† | Core-range 3-year extra añejo, distinct from the stocked Gran Patrón Burdeos |
| Patrón | Gran Patrón Piedra | gran patron piedra (1,300, KD 14) | gran patron piedra price† · buy gran patron piedra† · gran patron piedra vs burdeos† | Tahona-only extra añejo, same ultra-premium tier as stocked Burdeos |
| Patrón | Gran Patrón Platinum | gran patron platinum (1,600, KD 15) | gran patron platinum price† · buy gran patron platinum† · gran patron platinum vs burdeos† | Triple-distilled silver in hand-blown decanter |
| Patrón | Roca Patrón Silver | patron roca (590, KD 16) | roca patron silver† · roca patron reposado† · roca patron price† · buy roca patron† | Tahona stone-crushed sub-line, distinct from Gran Patrón |
| Herradura | Ultra | confirmed real via WebSearch | herradura ultra price† · herradura ultra review† · herradura ultra vs suprema† · buy herradura ultra† | Crystal-clear filtered añejo (cristalino-style) |
| Herradura | Legend | confirmed real via WebSearch | herradura legend price† · herradura legend review† · herradura legend anejo† · buy herradura legend† | Ultra-premium añejo, Double Gold SFWSC 2023 |
| José Cuervo | Tradicional (Silver/Reposado/Cristalino) | confirmed real via WebSearch | jose cuervo tradicional reposado† · jose cuervo tradicional silver† · jose cuervo tradicional price† · jose cuervo tradicional review† | Big gap — numbered-bottle mid-tier line sits between the stocked entry-level Especial and top-tier Reserva de la Familia |
| Casamigos | Mezcal Joven | casamigos mezcal (3,600, KD 18) | casamigos mezcal price† · buy casamigos mezcal† · casamigos mezcal review† | Cross-sell: brand's own mezcal, not stocked despite stocking 3 Casamigos tequilas |
| Clase Azul | Plata | clase azul plata (720, KD 14) | clase azul plata price† · buy clase azul plata† · clase azul plata vs reposado† | Entry-point blanco in the ceramic-decanter family |
| Clase Azul | Añejo (Edición Indígena-Mazahua) | clase azul anejo (3,600, KD 21) | clase azul anejo price† · buy clase azul anejo† · clase azul anejo vs ultra† | Site jumps Reposado straight to Ultra Extra Añejo, skipping this tier |
| Clase Azul | Gold | clase azul gold (2,400, KD 20) | clase azul gold price† · buy clase azul gold† · clase azul gold vs ultra† | Joven blend of Plata + Reposado + 8-year extra añejo |
| Clase Azul | Mezcal (Durango/Guerrero/San Luis Potosí) | confirmed real via WebSearch | clase azul mezcal price† · buy clase azul mezcal† · clase azul mezcal san luis potosi† | Same cross-sell logic as Casamigos Mezcal |
| Del Maguey | Tobalá | del maguey tobala (720, KD 14) | del maguey tobala price† · buy del maguey tobala† · del maguey tobala vs chichicapa† | Wild-agave flagship rarity, one of the brand's best-known SKUs |
| Del Maguey | San Luis del Río | confirmed real via WebSearch | del maguey san luis del rio price† · buy del maguey san luis del rio† · del maguey san luis del rio review† | Single-village mezcal, frequently requested |
| Del Maguey | Santo Domingo Albarradas | confirmed real via WebSearch | santo domingo albarradas price† · buy del maguey albarradas† · del maguey albarradas review† | Floral/citrus espadín, top-3 seller per retailer listings |
| Del Maguey | Minero (Santa Catarina Minas) | confirmed real via WebSearch | del maguey minero price† · buy del maguey minero† · del maguey minero review† | Clay-pot-distilled, distinct production style from stocked SKUs |
| Teremana | Añejo | confirmed real via WebSearch | teremana anejo price† · buy teremana anejo† · teremana anejo vs reposado† | Dwayne Johnson brand's 3rd core expression — site stocks only Blanco + Reposado |
| El Tesoro | Añejo | confirmed real via WebSearch | el tesoro anejo price† · buy el tesoro anejo† · el tesoro anejo vs extra anejo† | Standard core-range tier skipped between stocked Reposado and Extra Añejo |
| Espolòn | Cristalino | confirmed real via WebSearch | espolon cristalino price† · buy espolon cristalino† · espolon cristalino vs anejo† | Charcoal-filtered añejo/extra añejo blend — would also strengthen a future cristalino subcategory page |
| Casa Dragones | Joven | confirmed real via WebSearch | casa dragones joven price† · buy casa dragones joven† · casa dragones joven review† | Brand's actual flagship/original release (96pts Wine Enthusiast) — site stocks Añejo Barrel Blend and Blanco but not the more famous original |

### Brands with real demand, not in catalog at all

| Brand | Primary key | Support keys | Note |
|---|---|---|---|
| **Milagro** | milagro tequila† | milagro tequila price† · buy milagro tequila† · milagro reposado† · milagro silver† · milagro anejo† | ~1M cases, fastest-growing reposado in the US — sits just below Don Julio/Clase Azul, no celebrity angle |
| **Olmeca Altos** | olmeca altos tequila† | olmeca altos price† · buy olmeca altos† · olmeca altos plata† · olmeca altos reposado† | 1.3M cases 2023, +12.3% growth — bartender-favorite value 100% agave |
| Corralejo | corralejo tequila† | corralejo tequila price† · buy corralejo tequila† · corralejo reposado† · corralejo anejo† | ~$30, historic 1996 Hacienda brand, ~70% of sales in the US |
| Maestro Dobel | maestro dobel diamante† | maestro dobel price† · buy maestro dobel† · dobel diamante review† · dobel tequila near me† | Beckmann family (Cuervo owners), category-inventing "world's first cristalino tequila" |
| Astral | astral tequila† | astral tequila price† · buy astral tequila† · astral blanco tequila† · astral tequila margarita† | Single-estate organic blue agave, margarita-forward positioning |
| Dulce Vida | dulce vida tequila† | dulce vida tequila price† · buy dulce vida tequila† · dulce vida organic tequila† | ~$25-35, Austin-based organic brand, value/organic niche |
| Suerte | suerte tequila† | suerte tequila price† · buy suerte tequila† · suerte tequila blanco† · suerte tequila reposado† | Award-winning tahona-crushed, additive-free — fits alongside stocked Fortaleza/G4 |
| Siete Leguas | siete leguas tequila† | siete leguas tequila price† · buy siete leguas† · siete leguas blanco† · siete leguas reposado† | Historic additive-free tahona-tradition brand, highly respected among enthusiasts |
| Tapatío | tapatio tequila† | tapatio tequila price† · buy tapatio tequila† · tapatio blanco† · tapatio anejo† | ~$25-35, cult-classic bartender favorite, same Camarena family lineage as stocked El Tesoro/Fortaleza/G4 |
| Volcán de Mi Tierra | volcan de mi tierra tequila† | volcan de mi tierra price† · buy volcan de mi tierra† · volcan blanco tequila† · volcan x.a. tequila† | Clooney & Gerber's second, LVMH-backed venture — same founders as stocked Casamigos, strong cross-sell |
| Cabo Wabo | cabo wabo tequila† | cabo wabo tequila price† · buy cabo wabo tequila† · cabo wabo reposado† · cabo wabo anejo† | ~$25-40, Sammy Hagar's original 1996 celebrity tequila, arguably the category's OG |
| DeLeón | deleon tequila† | deleon tequila price† · buy deleon tequila† · deleon blanco tequila† · deleon anejo† | Prestige tier, Diageo/Diddy joint venture (now Diageo sole-owned) — **flag: recent litigation/controversy is a brand-reputation consideration** |
| Avión | avion tequila† | avion tequila price† · buy avion tequila† · avion silver tequila† · avion reposado† | Mainstream premium, Pernod Ricard-owned, born from an HBO Entourage plotline |
| Padre Azul | padre azul tequila† | padre azul tequila price† · buy padre azul tequila† · padre azul reposado† | Ultra-premium/luxury, Austrian-founded, distinctive skull-motif bottle, smaller cult niche |
| Alipús | alipus mezcal† | alipus mezcal price† · buy alipus mezcal† · alipus san andres† · alipus san baltazar† | Top-10 best-selling/trending mezcal (US bar surveys), Los Danzantes-owned village-mezcal marketplace |
| Los Danzantes | los danzantes mezcal† | los danzantes mezcal price† · buy los danzantes mezcal† · los danzantes reposado† · los danzantes joven† | Top-10 bestselling/trending, pioneering 1997 Oaxaca brand, Emperador acquired 60% stake 2025 |
| Wahaka | wahaka mezcal† | wahaka mezcal price† · buy wahaka mezcal† · wahaka espadin† | Award-winning, broad varietal range including experimental "Vino de Mezcal" series |
| Rey Campero | rey campero mezcal† | rey campero mezcal price† · buy rey campero† · rey campero mexicano† · rey campero tobasiche† | Family-run Southern Highlands producer, 12 varietals, enthusiast/collector reputation |
| Fidencio | fidencio mezcal† | fidencio mezcal price† · buy fidencio mezcal† · fidencio clasico† · fidencio tobala† | 4th-generation Santiago Matatlán mezcalero, 9 varietals including Sin Humo and Pechuga |
| Marca Negra | marca negra mezcal† | marca negra mezcal price† · buy marca negra† · marca negra sierra negra† · marca negra espadin† | US market since 2011, wild/cultivated agave range, rotating limited batches for collectors |
| Real Minero | real minero mezcal† | real minero mezcal price† · buy real minero† · real minero pechuga† · real minero tobasiche† | Top-tier prestige — "considered by many one of the world's finest mezcal producers" |
| Sombra | sombra mezcal† | sombra mezcal price† · buy sombra mezcal† · sombra mezcal joven† · sombra mezcal cocktails† | Accessible/mixing tier, intensely smoky, joven-only, popular bar-menu staple |
| Yuu Baal | yuu baal mezcal† | yuu baal mezcal price† · buy yuu baal† · yuu baal espadin† · yuu baal anejo† | Oaxacan producer collective with barrel-aged Reposado/Añejo — differentiator vs. mostly-joven stocked mezcal |

**Checked and excluded:** El Padrino tequila (real brand, small footprint, no meaningful search-volume signal — lower priority). "Los Amantes" mezcal (no distinct, verifiable current brand found under this exact name).

**Priority:** José Cuervo Tradicional is the standout expression gap — it fills the entire missing middle tier of the brand you already anchor the category with. Volcán de Mi Tierra and Cabo Wabo are the strongest new-brand cases for a "celebrity tequila" content/stocking angle alongside the already-stocked 818/Cincoro/Lobos 1707.

---

## Fine Wine

Sourced from real SEMrush data across three docs (`keyword-map-wine-red.md`, `keyword-map-wine-white.md`, `keyword-map-wine-fortified.md`) — the first wine batch, covering all 128 stocked Fine Wine SKUs across 17 subcategories.

### Missing expressions within brands you already stock

| Brand (in catalog) | Missing expression | Primary key | Support keys | Note |
|---|---|---|---|---|
| **Stella Rosa** | **Stella Rosa Black** | stella rosa black (22,200, KD 25) | stella rosa black wine (3,600, KD 9) · stella rosa (27,100, halo) · stella rosa wine (40,500, halo) | **Single strongest combined volume in the entire Fine Wine gap analysis** — semi-sweet red flavor not stocked; you currently carry only the Moscato d'Asti and 2 rosé flavors of this brand |
| Stella Rosa | Peach / Pink / Red flavors | stella rosa red (2,400, KD 12) | stella rosa peach wine (1,300, KD 15) · stella rosa pink (1,000, KD 7) · stella rosa wine flavors (1,300, KD 7) | Real flavor-line extensions beyond Black |
| Bonterra | **Rosé** and **Pinot Noir** | organic rose wine (480, KD 7) · organic pinot noir (390, KD 19) | both independently CSV-backed real demand, not inferred | Both are genuine, already-validated keywords — easiest, lowest-risk stocking case in this whole gap table, on a brand you already carry 4 SKUs of |
| Taylor Fladgate | **Chip Dry White Port** | white port (1,600, KD 28) | white port wine (1,300, KD 12) · taylor fladgate port wine (1,900, halo) | World's first dry white port (1934) — real historical first, real CSV-backed category volume, not stocked |
| William Hill / Far Niente / Meiomi (Chardonnay gap) | see Part B — same brands, Chardonnay tier | — | — | Cross-reference: several Part B brands also have real missing-tier signal within categories you stock elsewhere |
| Kendall-Jackson (Vintner's Reserve Chardonnay) | Vintner's Reserve **Sauvignon Blanc** | kendall jackson sauvignon blanc (880, KD 10) | kendall jackson chardonnay (8,100, halo) · sauvignon blanc wine (8,100, KD 12) | Real, same-brand line extension |
| Josh Cellars (5 SKUs) | **Pinot Grigio** | josh cellars pinot grigio (720, KD 11) | josh pinot grigio (2,400, KD 12) · josh cellars pinot grigio 750ml (720, KD 9) | Rounds out the whole varietal range for a brand you already carry deeply |
| Duckhorn (owns Decoy) | Duckhorn **Cabernet Sauvignon** | duckhorn cabernet sauvignon (4,400, KD 13) | napa valley cabernet sauvignon (14,800, halo) | Flagship-tier SKU of a brand you stock the second-label (Decoy) of |
| William Hill / Robert Mondavi / etc. | — | — | — | See Part B — these are unstocked brands, not expressions of stocked ones |
| Bogle (Old Vine Zin) | Cabernet Sauvignon, Pinot Noir, Merlot | bogle cabernet sauvignon (2,400, KD 10) | bogle pinot noir (880, KD 9) · bogle merlot wine (170, KD 5) | Real, low-KD, same-brand range expansion |
| 19 Crimes (Red Blend) | Cabernet Sauvignon, Pinot Noir ("The Punishment") | 19 crimes cabernet sauvignon (1,300, KD 16) | 19 crimes pinot noir (320, KD 16) | Snoop Dogg brand halo already drives huge demand (19 crimes wine, 12,100) |
| Barefoot (Moscato) | Pinot Grigio, Riesling | barefoot pinot grigio (4,400, KD 12) | barefoot riesling (1,600, KD 14) · barefoot wine (27,100, halo) | Real flavor/varietal-line gaps |
| Bartenura (Rosé) | **Bartenura Moscato** | bartenura moscato (14,800, KD 14) | bartenura moscato d'asti (2,900, KD 21) · bartenura moscato wine (2,900, KD 5) | Strongest unstocked Moscato-brand signal — the well-known kosher-market anchor brand; you already carry Bartenura Rosé |
| Lustau (2 sherries) | Manzanilla Papirusa, Puerto Fino, Amontillado Los Arcos, Palo Cortado Península, Oloroso Don Nuño | — | real, directly from Lustau's own published Solera Reserva range | No CSV volume (Sherry export was unusually thin) but genuinely real, confirmed SKUs |
| Graham's (4 ports) | 30 & 40 Year Tawny, declared Vintage Port, Quinta dos Malvedos single quinta | tawny port (4,400, KD 20 — category pool) | — | No brand-specific CSV volume (cutoff artifact — dedicated Graham's export would sharpen this) |

### Brands with real demand, not in catalog at all

| Brand | Category | Primary key (vol, KD) | Support keys | Note |
|---|---|---|---|---|
| **William Hill** | Chardonnay & Cabernet Sauvignon | william hill cabernet sauvignon (18,100, KD 14) | william hill chardonnay (12,100, KD 26) · napa valley cabernet sauvignon (14,800, halo) | **Strongest unstocked-brand signal across the entire Fine Wine batch** — real demand in both a red and white tier |
| Robert Mondavi | Cabernet Sauvignon | robert mondavi cabernet sauvignon (2,900, KD 18) | robert mondavi private selection (1,600, KD —) | One of the most recognizable Napa names, currently absent entirely |
| Austin Hope | Cabernet Sauvignon | austin hope cabernet sauvignon (6,600, KD 11) | paso robles cabernet sauvignon (4,400, halo) | Excellent KD |
| Stags' Leap | Cabernet Sauvignon | stags leap cabernet sauvignon (3,600, KD 15) | napa valley cabernet sauvignon (14,800, halo) | |
| Far Niente | Chardonnay | far niente chardonnay (3,600, KD 17) | far niente chardonnay napa (480, KD 21) | |
| Turley | Zinfandel | turley zinfandel (1,000, KD 8) | old vine zinfandel (1,600, halo) | Cult Zin producer, excellent KD |
| Rombauer | Zinfandel (you stock their Chardonnay) | rombauer zinfandel (1,900, KD 18) | zinfandel red wine (2,400, halo) | Same-brand-different-varietal gap |
| Whitehaven / Matua | Sauvignon Blanc | whitehaven sauvignon blanc (5,400, KD 19) | matua sauvignon blanc (5,400, KD 8) | Two real, well-known NZ Sauvignon Blanc brands, neither stocked |
| Kung Fu Girl (Charles Smith) | Riesling | kung fu girl riesling (1,300, KD 16) | dry riesling (1,300, halo) | |
| Cupcake | Moscato & Rosé | cupcake moscato (5,400, KD 12) | cupcake rose wine (720, KD 11) | Large grocery-channel brand, real demand across two subcategories |
| Sandeman | Sherry & Port | sandeman port wine (1,300, KD 20) | — | Also makes sherry under the same house |
| Kopke | Port | kopke port wine (590, KD 16) | — | Oldest port house, founded 1638 |
| Mirabeau | Rosé | mirabeau rose wine (1,300, KD 9) | — | English-owned Provence estate |
| Belaire | Sparkling Rosé | belaire rose sparkling wine (480, KD 9) | — | Strong hip-hop/culture crossover recognition |
| Josh Cellars | Rosé (brand you already carry 5 SKUs of) | josh rose wine (590, KD 8) | — | Same-brand new-varietal case |
| Badger Mountain | Organic Wine | badger mountain organic wine (140, KD 3) | — | Washington's first organic winery, no-sulfite-added specialist |
| Cooper's Hawk / Warner | Icewine | cooper's hawk lux ice wine (140, KD 14) | warner ice wine (170, KD 9) | US-made icewine-style alternatives to the Canadian brands you stock |

**Checked and excluded/deferred:** Dow's, Warre's, Cockburn's, Niepoort (real major Douro port houses, no CSV volume found). Barbadillo, Valdespino, standalone Tío Pepe, Romate (real Jerez sherry houses, Sherry export too thin to show brand volume for anyone). Château d'Esclans' own flagship cuvée, Les Clans, and Garrus (real, confirmed SKUs of a brand you already carry 3 tiers of — Whispering Angel, Rock Angel, The Palm). Miraval's Muse and Studio tiers (real, confirmed, same brand).

**Priority:** Stella Rosa Black (22,200 combined) is the standout single finding in this entire category — a huge-demand flavor inside a brand you already stock. William Hill is the strongest new-brand case, with real signal in two different subcategories. Bonterra Rosé/Pinot Noir is the lowest-risk pick — both keywords are independently CSV-confirmed, not inferred.

---

## Champagne & Sparkling Wine

Sourced from real SEMrush data across three docs (`keyword-map-champagne-a-l.md`, `keyword-map-champagne-m-z.md`, `keyword-map-sparkling-wine.md`) — covering all 84 stocked Champagne & Sparkling SKUs. Note: a few brands got flagged as "unstocked" by one research agent simply because that brand's SKUs belonged to a sibling agent's scope (e.g. Louis Roederer, Laurent-Perrier, G.H. Mumm, Lanson, and Mumm Napa Rosé are all genuinely already stocked) — those false positives are excluded below.

### Missing expressions within brands you already stock

| Brand (in catalog) | Missing expression | Primary key | Support keys | Note |
|---|---|---|---|---|
| **Moët & Chandon** | **Nectar Impérial** (demi-sec) and **Ice Impérial** (made to serve over ice) | moet nectar imperial (1,300, KD 18) | moet chandon nectar imperial (1,300, KD 11) · moet ice (880, KD 19) · moet ice imperial (720, KD 18) | **Strongest single Part A finding in the whole Champagne batch** — ~6,970 combined volume, real, currently-sold, on the brand you already carry 3 SKUs of |
| G.H. Mumm | **Cordon Rouge** (the actual flagship, currently only RSRV Blanc de Blancs is stocked) | mumm cordon rouge (170, KD 13) | cordon rouge champagne (—) · gh mumm grand cordon (260, KD 11) | ~1,710 combined across the Cordon Rouge cluster — arguably a stronger case than the prestige tier you do stock |
| Krug | **Clos d'Ambonnay** (single-vineyard Blanc de Noirs sister wine to the stocked Clos du Mesnil) | krug clos d'ambonnay (480, KD 9) | champagne krug clos d'ambonnay (260, KD 14) · krug clos d'ambonnay champagne (170, KD 13) | ~1,090 combined, directly comparable to Clos du Mesnil's own numbers |
| **Freixenet** | **Freixenet Prosecco** (a real, separate line — you stock their Cava and Italian Rosé) | freixenet prosecco (1,600, KD 15) | — | **CSV-backed, zero new-vendor risk** — same brand, different subcategory |
| Perrier-Jouët | **Grand Brut** (the house's actual NV entry point) | perrier jouet grand brut (1,900, KD 16) | — | Real, sizeable, and notably more volume than either currently-stocked Perrier-Jouët SKU pulls individually |
| Piper-Heidsieck | **Rare** (prestige cuvée, 1928 origin, Marilyn Monroe association) | rare champagne (720, KD 20) | champagne rare (320, KD 17) · piper heidsieck rare (140, KD 7) | ~1,270 combined — strong for a single-SKU brand |
| Veuve Clicquot | **Rich** (demi-sec, designed for ice/cocktails) | veuve clicquot rich (1,000, KD 11) | — | Real, notable independent volume |
| Billecart-Salmon | **Demi-Sec** and **Brut Sous Bois** | billecart salmon demi sec champagne (260, KD 5) | billecart salmon brut sous bois (90, KD 6) | ~850 combined across both expressions |
| Mionetto | **Valdobbiadene Prosecco Superiore DOCG** (a real, confirmed higher tier — you stock only the DOC-level Brut/Rosé) | valdobbiadene prosecco superiore (880, KD 16) | — | Category-level volume maps directly onto this tier |
| Louis Roederer | **Brut Nature** (zero-dosage) | — | not volume-backed, WebSearch-confirmed real | Real, published expression |
| Ruinart | **Dom Ruinart Rosé** (sibling to the stocked Dom Ruinart Blanc de Blancs) | — | not volume-backed, WebSearch-confirmed real | Same-tier logic as the Krug Clos d'Ambonnay finding |
| Taittinger | **Comtes de Champagne Rosé** and **Nocturne** (off-dry/sec) | taittinger nocturne (50, KD 8) | — | Nocturne is small but real and exact-match |
| Codorníu | **Anna de Codorníu** (Brut/Rosé/Blanc de Noirs — Spain's best-selling Cava per Codorníu's own claim) | — | not volume-backed, WebSearch-confirmed real | Strongest brand-heritage angle in the Cava subcategory |
| Schramsberg | **J. Schram** prestige tier (incl. J. Schram Rosé) and **Blanc de Noirs** | — | not volume-backed, WebSearch-confirmed real | Schramsberg's own real, current range |

### Brands with real demand, not in catalog at all

| Brand | Category | Primary key (vol, KD) | Support keys | Note |
|---|---|---|---|---|
| Gosset | Champagne | — | not volume-backed; founded 1584, oldest wine house in Champagne (not just oldest Champagne house) | Real, well-documented |
| Jacquesson | Champagne | — | not volume-backed; founded 1798, known for numbered "700-series" Cuvée releases | Real, well-documented |
| Deutz | Champagne | — | not volume-backed; founded 1838, Aÿ Grand Cru, Amour de Deutz prestige cuvée | Real, well-documented |
| Ayala | Champagne | — | not volume-backed; founded 1860, Aÿ Grand Cru | Real, well-documented |
| Duval-Leroy | Champagne | — | not volume-backed; founded 1859, one of the last large independently/family-owned houses | Real, well-documented |
| Philipponnat | Champagne | — | not volume-backed; real, well-regarded grower-house, Clos des Goisses is a genuinely famous single-vineyard cuvée | Real, well-documented |
| Mercier | Champagne | — | not volume-backed; historic Épernay house, sister brand under LVMH alongside Moët, founded 1858 | Real, well-documented |
| Bruno Paillard | Champagne | — | not volume-backed; respected récoltant-manipulant house founded 1981 | Real, well-documented |
| Henriot | Champagne | — | not volume-backed; independent family house since 1808, owner of Bouchard Père & Fils in Burgundy | Real, well-documented |
| **Josh Cellars** | Prosecco | josh prosecco (2,900, KD 13) | — | You already stock 5 Josh Cellars wine SKUs — natural line extension |
| **Cupcake** | Prosecco | cupcake prosecco (2,400, KD 13) | — | Large-scale grocery-channel brand |
| Zonin | Prosecco | zonin prosecco (1,900, KD 14) | — | Major Veneto Prosecco house, real US distribution |
| Avissi | Prosecco | avissi prosecco (1,600, KD 13) | — | Real, established brand |
| Lunetta | Prosecco | lunetta prosecco (1,600, KD 12) | — | Cavit-owned, widely available |
| La Vostra | Prosecco | la vostra prosecco (1,600, KD 10) | — | Real, established brand |
| Riondo | Prosecco | riondo prosecco (1,300, KD 12) | — | Real, established brand |
| Coppola (Francis Ford) | Prosecco | coppola prosecco (1,000, KD 11) | — | Celebrity-adjacent (Francis Ford Coppola Winery) |
| Asolo | Prosecco | asolo prosecco (1,000, KD 24) | — | Asolo Prosecco Superiore DOCG, a distinct DOCG zone from Valdobbiadene |
| Kim Crawford | Prosecco | kim crawford prosecco (880, KD 10) | — | Major NZ wine brand's Prosecco extension |
| Belaire (Luc Belaire) | Sparkling Rosé | belaire rose sparkling wine (480, KD 8) | luc belaire rare rosé sparkling wine (320, KD 10) | Strong hip-hop/culture crossover recognition |
| McBride Sisters | Sparkling Rosé | mcbride sisters sparkling brut rose (210, KD 8) | — | Largest Black-owned wine company in the US |
| Barefoot | Sparkling Wine (general) | barefoot sparkling wine (480, KD 13) | — | Major grocery-channel brand's sparkling extension; you already stock 3 Barefoot Fine Wine SKUs |
| Viarae | Prosecco (non-alcoholic) | viarae prosecco (2,400, KD 24) | — | Growing NA-Prosecco alternative — a genuinely different product category worth its own stocking conversation |

**Checked and excluded:** Devaux (Champagne, only thinly confirmed — flag for a dedicated check). Gramona and Juvé & Camps' broader ranges (real but couldn't independently confirm specific missing tiers to the same standard as the rest of this table). Dow's/Warre's/Cockburn's/Niepoort-equivalent situation doesn't apply here — no similarly-thin Champagne export this round.

**Priority:** Moët Nectar Impérial/Ice Impérial (~6,970 combined) is the standout — real, sizeable demand on the brand with the biggest footprint in your catalog. Freixenet Prosecco is the lowest-risk pick (CSV-backed, zero new-vendor onboarding since you already carry the brand). Josh Cellars Prosecco and Cupcake Prosecco lead the real unstocked-brand candidates by volume.

---

## Cider

Sourced from `keyword-map-cider.md`. Covers all 19 stocked Hard Cider SKUs.

| Brand | Missing expression / New brand | Primary key | Support keys | Note |
|---|---|---|---|---|
| Original Sin (Dry stocked) | **Original Sin Black Widow** (blackberry) | original sin black widow cider (1,300, KD 4) | black widow cider (1,900, KD 9) · original sin black widow (260, KD 2) | **~3,500+ combined — Original Sin's own actual best-selling flagship, not stocked at all** |
| Downeast (Aloha Friday, Blackberry stocked) | **Downeast Original Blend** | downeast original blend (210, KD 4) | downeast original cider (170, KD 3) | Downeast's real flagship/best-seller, entirely unstocked |
| Downeast (as above) | Pumpkin Blend / Winter Blend (seasonal) | downeast cider pumpkin (590, KD 6) | downeast cider winter blend (390, KD 10) | ~1,820 combined, obvious seasonal-SKU gap |
| ACE (Apple, Mango, Pineapple stocked) | **ACE Pear Cider** | ace pear cider (1,300, KD 5) | ace perry cider (1,000, KD 8) | ~2,700+ combined |
| **Bold Rock Hard Cider** | new brand | bold rock cider (5,400, KD 26) | — | America's largest independently-owned cidery (800,000+ cases/yr) — strongest new-brand signal in this batch |
| Magners | new brand | magners cider (3,600, KD 27) | — | Real, well-known Irish cider, Strongbow's direct rival |
| Schilling Cider | new brand | schilling cider (4,400, KD 18) | — | Seattle-based, runs the nation's largest craft-cider-selection cider house |

**Priority:** Original Sin Black Widow and Downeast Original Blend are both cases of a brand's real flagship sitting entirely unstocked while a lesser SKU is carried — easiest wins in this category.

---

## Non-Alcoholic Beer & Cider

Sourced from `keyword-map-na-beer-cider.md`. Covers all 15 stocked NA beer/cider SKUs.

| Brand | Missing expression / New brand | Primary key | Support keys | Note |
|---|---|---|---|---|
| Budweiser (Zero stocked) | **Bud Light Zero** | bud light zero (590, KD 15) | bud light non alcoholic beer (590, KD 29) | ~1,850 combined, real separate AB SKU |
| Go Brewing | new brand | go brewing (5,400, KD 18) | go brewed (2,400, KD 13) | Independent NA craft brewery, volume rivals several stocked brands |
| Blue Moon NA | new brand | blue moon non alcoholic beer (1,600, KD 11) | — | Highest single unstocked-brand volume in this batch |
| Bero (Tom Holland) | new brand | tom holland non alcoholic beer (1,000, KD 47) | — | Real celebrity crossover (actor co-founded, launched 2024) |
| Clausthaler | new brand | clausthaler non alcoholic beer (1,300, KD 15) | — | Long-established German NA beer brand |

**Priority:** Bud Light Zero is the clearest same-brand win. Go Brewing and Blue Moon NA lead the new-brand candidates.

---

## Beer

Sourced from `keyword-map-beer-lager.md`, `keyword-map-beer-ipa.md`, `keyword-map-beer-ale-stout.md`. Covers all 105 stocked Beer SKUs. **Note:** no generic "beer" category export existed this round — most Part B findings below are WebSearch-confirmed rather than volume-backed; flagged inline.

| Brand | Missing expression / New brand | Primary key | Support keys | Note |
|---|---|---|---|---|
| **Deschutes** (Black Butte Porter stocked) | **Deschutes Fresh Squeezed IPA** | deschutes fresh squeezed ipa (1,900, KD 18) | deschutes brewery fresh squeezed ipa (1,300, KD 19) | **~6,000+ combined — the single strongest unstocked-SKU signal in the entire Beer batch, CSV-backed** |
| Samuel Adams (Utopias stocked) | **Samuel Adams Boston Lager** | samuel adams boston lager (4,400, KD 27) | sam adams boston lager (2,900, KD 24) | ~10,000+ combined — Sam Adams' actual flagship, currently unstocked in favor of the extreme-tier Utopias |
| Samuel Adams (as above) | Sam Adams Octoberfest / Summer Ale (seasonal) | sam adams octoberfest (5,400, KD 22) | sam adams summer ale (3,600, KD 15) | ~15,000 combined across both seasonals |
| Corona (Extra + Light stocked) | Coronita (7oz mini) | coronita beer (1,300, KD 14) | coronita alcohol content (1,900, KD 19) | Real, currently-sold SKU |
| Anheuser-Busch (Budweiser stocked) | Bud Ice | bud ice (6,600, KD 14) | bud ice beer (2,400, KD 19) | Real Busch-family SKU |
| Heineken (Original stocked) | Heineken Silver | heineken silver beer (720, KD 11) | — | Real, currently-marketed lower-ABV line |
| Guinness (Draught stocked) | Guinness 0 (non-alcoholic) | guinness non alcoholic beer (1,600, KD 26) | — | Real, sizeable demand — note this is separately stocked in the NA Beer & Cider category |
| **Bell's Two Hearted Ale** | new brand (Ale & Wheat subcat, Bell's Oberon already stocked) | — | confirmed real via WebSearch | Frequently ranked America's #1 beer in national polls; already added to the beer catalog and hub in this batch under IPA — flagging here since the Ale & Wheat gap analysis independently surfaced it too |
| Sierra Nevada Pilsner | same-brewer gap, no stocked Lager SKU | sierra nevada pilsner (1,000, KD 11) | — | Real product; Sierra Nevada currently has zero Lager-subcategory SKUs |
| Beck's / Amstel Light / Red Stripe / Tsingtao | new brands (Lager) | — | confirmed real via WebSearch, not volume-backed | Would round out the German/light/Caribbean/Asian lager sets alongside stocked Heineken/Stella/Peroni/Asahi/Sapporo/Kirin |
| Ballast Point Sculpin IPA | new brand | — | confirmed real via WebSearch, not volume-backed | One of the most ubiquitous, gold-medal-winning American IPAs |
| The Alchemist Heady Topper | new brand | — | confirmed real via WebSearch, not volume-backed | Credited with kickstarting the entire hazy/New England IPA movement |
| Hoegaarden / Franziskaner / Weihenstephaner | new brands (wheat beer) | — | confirmed real via WebSearch, not volume-backed | Would add the missing German-hefeweizen style alongside stocked Belgian witbiers |
| North Coast Old Rasputin | new brand (Stout) | — | confirmed real via WebSearch, not volume-backed | Iconic, widely available imperial stout |

**Priority:** Deschutes Fresh Squeezed IPA is the standout — real, CSV-backed, ~6,000+ combined, same brewer already stocked. Samuel Adams Boston Lager is the clearest "the flagship itself isn't stocked" case in the whole project.

---

## Non-Alcoholic Spirits

Sourced from `keyword-map-na-spirits.md`. Covers all 22 stocked NA Spirits SKUs.

| Brand | Missing expression / New brand | Primary key | Support keys | Note |
|---|---|---|---|---|
| **Seedlip** (Garden 108, Grove 42 stocked) | **Seedlip Spice 94** | seedlip spice (880, KD 19) | seedlip non alcoholic spirits (1,900, KD 15) | Real third leg of Seedlip's actual 3-flavor range — strongest Part A finding by volume; current hub copy was fixed this batch to only claim the 2 stocked ranges |
| Lyre's (3 SKUs stocked) | **Lyre's Italian Spritz** | lyre's italian spritz (1,600, KD 9) | lyres (2,900, KD 54) | Real product, standalone volume higher than several already-stocked Lyre's SKUs |
| Lyre's (as above) | Lyre's Amalfi Spritz | lyre's amalfi spritz (880, KD 8) | — | Same brand, same real gap category |
| Cut Above (Agave Blanco, Mezcal stocked) | Cut Above Whiskey + Gin | cut above whiskey (210, KD 4) | cut above gin (70, KD 3) | Real, confirmed 4th/5th SKUs in Cut Above's actual lineup |
| **CleanCo / Clean T** | new brand | clean t (260, KD 4) | cleanco clean t 750 ml (260, KD 3) | Founded 2019 by TV personality Spencer Matthews; ~950 combined, strongest unstocked-brand signal |
| Tanqueray 0.0% | new brand | tanqueray non alcoholic gin (210, KD 6) | — | Diageo-backed — notable since Diageo also owns Ritual and Seedlip, both already stocked |

**Priority:** Seedlip Spice 94 is the standout — fixes a real hook/inventory mismatch on an already-live hub page.

---

## Non-Alcoholic Champagne & Sparkling

Sourced from `keyword-map-na-champagne.md`. Covers all 22 stocked NA Champagne/Sparkling SKUs.

| Brand | Missing expression / New brand | Primary key | Support keys | Note |
|---|---|---|---|---|
| **Lyre's Classico** | new brand | lyre's non alcoholic classico sparkling wine 4 pack (2,400, KD 15) | lyres classico (320, KD 20) | **~2,720 combined — the single strongest Part B finding in this report.** Built non-alcoholic from the start (not dealcoholized); 2025 IWSC silver medal |
| Surely (Brut stocked) | Surely Sparkling Rosé | surely sparkling rosé (90, KD 12) | — | Real, current Surely SKU |
| French Bloom (Le Blanc + Le Rosé stocked) | French Bloom La Cuvée (prestige tier) | — | confirmed real via WebSearch, not volume-backed | Called the world's most expensive alcohol-free wine by trade press — genuine premium-upsell opportunity |
| Gruvi | new brand | gruvi bubbly rose (210, KD 3) | — | Colorado-based, picked as "best NA wine" by USA Today, Forbes, Cosmopolitan |
| Jøyus Wine | new brand | joyous wine (170, KD 15) | — | Seattle's first NA winery, woman-owned |

**Priority:** Lyre's Classico is the clear standout new-brand pick.

---

## Non-Alcoholic RTD Cocktails

Sourced from `keyword-map-na-rtd-cocktails.md`. Covers all 19 stocked NA RTD Cocktail SKUs.

| Brand | Missing expression / New brand | Primary key | Support keys | Note |
|---|---|---|---|---|
| **Lapo's** (Negroni stocked) | **5 more real SKUs**: Espresso Martini, Melograno Mule, Amaro Cola, Citrus Spritz, Negroni Water | — | confirmed real via WebSearch (BevNET/PR Newswire) | **Strongest Part A finding in this report** — the brand's real line has expanded to 6 total SKUs, only 1 stocked |
| **Curious Elixirs** (No. 1 stocked) | Real numbered range continues through No. 9 | — | confirmed real via WebSearch | Large, legitimate expansion opportunity from a single stocked SKU |
| De Soi (Purple Lune, Très Rosé stocked) | **Golden Hour**, **Spritz Italiano**, **Haute Margarita** | de soi golden hour (170, KD 16) | de soi spritz italiano (260, KD 13) · de soi haute margarita (170, KD 14) | Real, CSV-backed — Haute Margarita is the single strongest finding for this brand |
| **Kin Euphorics** | new brand | — | confirmed real via WebSearch | One of the most recognized names in the NA-functional-aperitif category |
| **Casamara Club** | new brand | — | confirmed real via WebSearch | Detroit-founded, one of VinePair's 2026 top-22 NA brands |

**Priority:** Lapo's real 6-SKU range and Curious Elixirs' real 9-flavor range are both cases of a brand already stocked carrying a fraction of its actual lineup — the easiest, lowest-risk expansions in this whole batch.

---

## RTD & Liqueurs

Sourced from `keyword-map-liqueurs.md` and `keyword-map-craft-cocktails.md`. Covers all 73 stocked RTD & Liqueurs SKUs (29 liqueurs across 7 subcategories + 44 Craft Cocktails).

### Missing expressions within brands you already stock

| Brand | Missing expression | Primary key | Support keys | Note |
|---|---|---|---|---|
| **On The Rocks** (Margarita, Old Fashioned stocked) | **7 more real expressions**: Cosmopolitan, Espresso Martini, Jalapeño Pineapple Margarita, Strawberry Daiquiri, Mai Tai, Aviation, Manhattan | — | confirmed real via WebSearch | Only 2 of the brand's 9 nationally available expressions are stocked — largest single-brand whitespace in this batch |
| **Cutwater** (8 SKUs stocked) | ~9 more real flavors: Watermelon/Grapefruit/Spicy Mango Margarita, Long Island Iced Tea, Bloody Mary, Old Fashioned, Espresso Martini, Vodka Soda, Vodka Lemonade | — | confirmed real via WebSearch | Real range extends well past an already-deep 8-SKU assortment |
| White Claw (Black Cherry, Variety Pack stocked) | Mango, Ruby Grapefruit, Lime (founding flavors) + White Claw Surge | — | confirmed real via WebSearch | Mango is reportedly White Claw's single best-selling standalone flavor |
| Kahlúa (Original stocked) | Kahlúa Dunkin' Caramel Swirl Cream Liqueur | kahlúa dunkin caramel swirl cream liqueur (590, KD 22) | — | Real, CSV-backed direct hit |
| DeKuyper (Peachtree + Triple Sec stocked) | Any of 100+ other real schnapps flavors (Sour Apple Pucker, Watermelon Pucker, Buttershots, Razzmatazz, Blue Curaçao) | flavored liqueur (1,000, KD 19) | — | Single largest real line-extension opportunity in the whole batch |
| RumChata (Original stocked) | RumChata Limón | rumchata limon cream liqueur (390, KD 8) | — | Real, CSV-backed direct hit |
| Tip Top Proper Cocktails (3 of 6 stocked) | Negroni, Manhattan, Daiquiri | — | confirmed real via WebSearch | Completes the brand's real 6-can lineup |
| Underwood (3 SKUs stocked) | The Bubbles (sparkling), Rosé Bubbles, Riesling Radler, Strawberry Cooler | — | confirmed real via WebSearch, re-verify current availability | — |

### Brands with real demand, not in catalog at all

| Brand | Primary key (vol, KD) | Support keys | Note |
|---|---|---|---|
| **BuzzBallz Ready-to-Drink Cocktails** | buzzballz ready to drink cocktails (1,300, KD 23) | — | **Strongest single unstocked-brand finding in the RTD batch, CSV-backed** |
| **Absolut Cocktails** | absolut cocktails (2,400, KD 21) | absolut espresso martini (1,300, KD 21) | Real Pernod Ricard RTD line built on Absolut Vodka, CSV-backed |
| **Ramazzotti** (Italian amaro) | ramazzotti (3,600, KD 53) | italian liqueur (2,400, KD 7) | Strongest unstocked-brand volume in the Amaro export |
| **Amarula** (South African cream liqueur) | amarula cream liqueur (2,400, KD 13) | south african cream liqueur (880, KD 15) | Real, CSV-backed |
| **Chinola Passion Fruit Liqueur** | chinola passion fruit liqueur (2,900, KD 20) | passion fruit liqueur (3,600, KD 17) | Strongest unstocked-brand signal in the Fruit Liqueur export |
| Disaronno / Disaronno Velvet | disaronno velvet cream liqueur (390, KD 9) | — | Real, CSV-backed — amaretto category entirely absent from the catalog |
| Vizzy Hard Seltzer | — | confirmed real via WebSearch | Molson Coors brand, vitamin-C positioning |
| Bud Light Seltzer | — | confirmed real via WebSearch | AB InBev hard seltzer, real and currently active |
| Frangelico / Cynar / Suze / Licor 43 / Sambuca | — | confirmed real via WebSearch, no CSV volume this pull | Well-known liqueurs entirely absent from the catalog — recommend dedicated exports before treating as confirmed demand |
| **Limoncello** (category gap, no specific brand) | limoncello cream liqueur (480) | is limoncello an aperitif (40+30) | Real demand exists but zero limoncello SKU of any brand currently in the catalog |

**Note:** the Craft Cocktails research flagged that Babe wine may have been discontinued by AB InBev in 2023 per WebSearch — worth confirming with procurement before further investment in that SKU's copy.

**Priority:** On The Rocks and Cutwater are both cases of a brand already stocked carrying a fraction of its real lineup — easiest, lowest-risk expansions. BuzzBallz and Absolut Cocktails are the standout new-brand picks, both CSV-backed.

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
