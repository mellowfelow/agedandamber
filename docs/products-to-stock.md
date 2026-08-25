# Products to Stock — Master List (Rum, Gin, Cognac, Bourbon, Scotch, Irish, Japanese, Vodka, Rye & Other Whiskey, Tequila & Mezcal)

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

### Missing expressions within brands you already stock (fix first — same brand page, just add the SKU)

| Brand (in catalog) | Missing expression | Primary key | Support keys | Combined vol |
|---|---|---|---|---|
| Martell | **Blue Swift** | martell blue swift (12,100, KD 18) | martell blue swift cognac (9,900, KD 10) · martell blue swift price† · martell blue swift review† · buy martell blue swift† · martell blue swift vs vsop† | ~22,000 |
| Martell | **XXO** | martell xxo (8,100, KD 11) | martell xxo cognac† · martell xxo price† · martell xxo review† · buy martell xxo† · martell xxo vs cordon bleu† | 8,100 |
| Martell | Cordon Bleu (base tier — you stock **Extra**) | martell cordon bleu (3,600, KD 12) | martell cordon bleu cognac 750ml (2,400, KD 10) · martell cordon bleu price† · martell cordon bleu vs extra† · buy martell cordon bleu† | ~6,000 |

### Brands with real demand, not in catalog at all

| Brand | Primary key (vol, KD) | Support keys | Note |
|---|---|---|---|
| Meukow | meukow cognac (1,600, KD 16) | meukow vsop† · meukow price† · buy meukow cognac† · meukow review† · meukow vs hennessy† | Family-owned French cognac house since 1839 |
| Le Portier | le portier cognac (1,600, KD 16) | le portier vsop† · le portier price† · buy le portier† · le portier review† | Cognac brand |
| ABK6 | abk6 cognac (1,300, KD 15) | abk6 vsop† · abk6 price† · buy abk6 cognac† · abk6 review† | Single-estate producer |
| Salignac | salignac cognac (1,300, KD 7) | salignac vsop† · salignac price† · buy salignac cognac† | Historic house, excellent KD |
| Villon | villon cognac (1,300, KD 8) | villon vsop† · villon price† · buy villon cognac† | Newer brand, excellent KD |
| Ararat | ararat brandy (1,000, KD 18) | ararat armenian brandy† · ararat price† · buy ararat brandy† | **Flag: Armenian brandy, not French cognac** — only relevant under a broader "brandy" umbrella |

**Priority:** Martell Blue Swift is the clear #1 — highest combined volume (~22,000), lowest effective KD, confirmed twice. XXO is a strong #2 for the same brand.

---

## Rum

### Brands with real demand, not in catalog at all

| Brand | Primary key (vol, KD) | Support keys | Combined vol | Tier |
|---|---|---|---|---|
| **Privateer** | privateer rum (14,800, KD 35) | andrew cabot privateer rum (1,300) · privateer rum ceo (1,900) · privateer rum price† · buy privateer rum† · privateer rum review† | ~18,000 | T2 — highest-priority candidate |
| **Pusser's** | pusser's rum (1,900, KD 17) | pussers rum (5,400, KD 21) · pusser's rum price† · buy pusser's rum† · pusser's rum review† · pusser's navy rum† | ~7,300 | T1 — second-highest priority |
| Koloa Rum | koloa rum (4,400, KD 32) | koloa rum company (1,900, KD 16) · koloa rum price† · buy koloa rum† · koloa rum review† | ~6,300 | T2 |
| Havana Club | havana club rum (5,400, KD 36) | havana club 7 anos† · havana club price† · buy havana club rum† · havana club review† | 5,400 | T2 |
| Brugal | brugal rum (6,600, KD 12) | brugal 1888† · brugal price† · buy brugal rum† · brugal review† | 6,600 | T1 — excellent KD |
| Cruzan | cruzan rum (5,400, KD 17) | cruzan 9 rum† · cruzan price† · buy cruzan rum† · cruzan review† | 5,400 | T1 |
| Parrot Bay | parrot bay rum (2,900, KD 10) | parrot bay coconut rum (1,600, KD 8) · parrot bay price† · buy parrot bay rum† | ~4,500 | T1 — excellent KD |
| Blue Chair Bay | blue chair bay rum (4,400, KD 33) | blue chair bay coconut spiced† · blue chair bay price† · buy blue chair bay rum† | 4,400 | T2 |
| Old Monk | old monk rum (2,900, KD 15) | old monk 7 year† · old monk price† · buy old monk rum† | 2,900 | T1 |
| Tanduay | tanduay rum (2,400, KD 18) | tanduay 5 years† · tanduay price† · buy tanduay rum† | 2,400 | T1 |
| Siesta Key | siesta key rum (2,400, KD 33) | siesta key spiced rum† · siesta key price† · buy siesta key rum† | 2,400 | T2 |
| Ten To One | ten to one rum (1,900, KD 25) | ten to one dark rum† · ten to one price† · buy ten to one rum† | 1,900 | T1 |
| Don Papa | don papa rum (1,900, KD 27) | don papa 7 rum† · don papa price† · buy don papa rum† | 1,900 | T2 |
| Zaya | zaya rum (1,900, KD 6) | zaya 12 rum† · zaya price† · buy zaya rum† | 1,900 | T1 — best KD in this list |
| Ron Barceló | barcelo rum (1,900, KD 12) | ron barcelo imperial† · barcelo price† · buy barcelo rum† | 1,900 | T1 |
| Admiral Nelson | admiral nelson rum (1,900, KD 9) | admiral nelson spiced rum† · admiral nelson price† · buy admiral nelson rum† | 1,900 | T1 |

Re-checked at the lower 500-vol threshold — no additional brands surfaced below the 1,900 floor already covered above.

---

## Gin

### Missing expressions within brands you already stock

| Brand (in catalog) | Missing expression | Primary key | Support keys | Combined vol |
|---|---|---|---|---|
| Barr Hill | Tom Cat Gin (barrel-aged) | barr hill tom cat gin (480, KD 11) | barr hill reserve tom cat gin (140, KD 3) · barr hill tom cat price† · buy barr hill tom cat† · barr hill tom cat review† | 620 |
| Beefeater | Beefeater 24 | beefeater 24 (480, KD 7) | beefeater 24 price† · buy beefeater 24† · beefeater 24 vs london dry† · beefeater 24 review† | 480 |
| Beefeater | Beefeater Pink Gin | beefeater pink gin (480, KD 7) | beefeater pink price† · buy beefeater pink gin† · beefeater pink gin review† | 480 |
| Bombay Sapphire | Bombay Sapphire East | bombay sapphire east (260, KD 6) | bombay sapphire east price† · buy bombay sapphire east† · bombay east vs original† | 260 |
| Bombay Sapphire | Bombay Sapphire Premier Cru | bombay sapphire premier cru (210, KD 7) | bombay premier cru price† · buy bombay premier cru† | 210 |
| Ki No Bi | Ki No Bi Sei (navy-strength/travel-retail) | ki no bi sei† | long-tail, all under 20/row · ki no bi sei price† · buy ki no bi sei† | low but consistent |

Every one of these is a line extension of a brand you already carry, not a new brand. All have excellent KD (single digits to low teens).

**Out of scope / needs confirmation, not gin:** Drumshanbo also makes a whiskey (390, KD 15) and a vodka (110, KD 6) — only relevant if stocked under their own categories.

---

## Bourbon

Sourced from real SEMrush data (`keyword-map-bourbon-v2.md`).

### Missing expressions within brands you already stock

| Brand (in catalog) | Missing expression | Primary key | Support keys | Note |
|---|---|---|---|---|
| Old Forester | **1920 (Birthday Bourbon-tier, standing SKU)** | old forester 1920 (real, standing Whiskey Row SKU, $60-70) | old forester 1920 prohibition style† · old forester 1920 price† · buy old forester 1920† · old forester 1920 review† | **1920's real keyword target (8,100 vol, KD 17 combined series) is bigger than the one SKU you stock (86 Proof)** |
| Old Forester | 1897, 1910 (Whiskey Row Series) | old forester 1897 bottled in bond† | old forester 1910 old fine whisky† · old forester whiskey row series† · old forester 1897 price† · buy old forester 1897† | Confirmed real, standing SKUs, $60-70 — low-friction, not rare hunt-bottles |
| Old Forester | Birthday Bourbon | old forester birthday bourbon (8,100, KD 17) | old forester birthday bourbon price† · old forester birthday bourbon release date† · buy old forester birthday bourbon† | Allocated annual Sept release, $700-1,000 — higher-effort opportunity, this is the brand's actual #1 keyword target |
| 1792 | Full Proof | 1792 full proof (confirmed real, ~$50) | 1792 full proof price† · buy 1792 full proof† · 1792 full proof review† · 1792 full proof vs single barrel† | All 3 1792 gaps confirmed real & priced, genuinely searched |
| 1792 | Single Barrel | 1792 single barrel (confirmed real, ~$45) | 1792 single barrel price† · buy 1792 single barrel† · 1792 single barrel review† | |
| 1792 | Sweet Wheat | 1792 sweet wheat (confirmed real, ~$75) | 1792 sweet wheat price† · buy 1792 sweet wheat† · 1792 sweet wheat review† | |
| E.H. Taylor | Four Grain | eh taylor four grain (confirmed real, highly allocated $550-2,000+) | eh taylor four grain price† · buy eh taylor four grain† · eh taylor four grain review† | |
| Elijah Craig | 18 Year | elijah craig 18 year (confirmed real, not stocked) | elijah craig 18 year price† · buy elijah craig 18† · elijah craig 18 review† | |
| Jim Beam | Black Label | jim beam black label (confirmed real, minor gap) | jim beam black price† · buy jim beam black† · jim beam black vs white† | |
| Bulleit | 10 Year | bulleit 10 year (confirmed real, minor gap) | bulleit 10 year price† · buy bulleit 10 year† · bulleit 10 vs bourbon† | |
| Kentucky Owl | Confiscated | kentucky owl confiscated (confirmed real, minor gap) | kentucky owl confiscated price† · buy kentucky owl confiscated† | |
| Basil Hayden | Toast | basil hayden toast (confirmed real bourbon) | basil hayden toast price† · buy basil hayden toast† · basil hayden toast review† | Dark Rye is real too but isn't a bourbon — a blend |

### Brands with real demand, not in catalog at all

| Brand | Primary key (vol, KD) | Support keys | Note |
|---|---|---|---|
| **Booker's** | booker's bourbon (12,100, KD 22) | booker's bourbon price† · buy booker's bourbon† · booker's batch† · booker's vs knob creek† · booker's review† | Full real SEMrush brand page exists (~55K combined demand signal). Beam family — natural fit alongside Jim Beam/Basil Hayden/Knob Creek. **Strongest new-brand case in Bourbon.** |
| **Henry McKenna 10 Year Bottled-in-Bond** | henry mckenna 10 year (confirmed real, $50-100) | henry mckenna bottled in bond† · henry mckenna price† · buy henry mckenna† · henry mckenna review† | Won "Best in Show Whiskey" 2019 SF World Spirits Competition. Heaven Hill family, same maker as Elijah Craig/Larceny/Old Fitzgerald |
| **Very Old Barton Bottled-in-Bond** | very old barton bottled in bond (confirmed real, $12-19) | very old barton price† · buy very old barton† · very old barton review† | Whisky Advocate's "Best Buy Whiskey of the Year." Good entry-price anchor |
| **Old Rip Van Winkle 10 Year** | old rip van winkle 10 year (confirmed real, ~$900-1,200 secondary) | old rip van winkle price† · buy old rip van winkle† · old rip van winkle vs pappy† | Extremely allocated. Natural adjacent SKU to your existing Pappy 15 Year |
| Willett Pot Still Reserve | willett pot still reserve (confirmed real) | willett pot still price† · buy willett pot still† · willett family estate† | Massive social/collector buzz, moderate competition |
| Little Book | little book bourbon (2,400, KD 7) | little book price† · buy little book bourbon† · little book batch† · little book vs booker's† | Booker Noe sub-brand — natural bundle if you stock Booker's |

**Priority:** Old Forester's Whiskey Row trio (1897/1910/1920) is the most actionable — real, standing SKUs, easy to source, and 1920 alone outranks your current Old Forester SKU. Booker's is the strongest new-brand case.

---

## Scotch

Sourced from real SEMrush data (`keyword-map-scotch-v2.md`).

### Missing expressions within brands you already stock

| Brand (in catalog) | Missing expression | Primary key | Support keys | Note |
|---|---|---|---|---|
| Highland Park | **Viking Honour (real 12 Year flagship)** | highland park viking honour (confirmed real, ~$55-65) | highland park 12 year† · highland park viking honour price† · buy highland park viking honour† · highland park 12 vs 18† | Currently named on your own hub page — **the single strongest expression gap in this whole whiskey pass** |
| Lagavulin | 8 Year | lagavulin 8 year (confirmed real, ~$69) | lagavulin 8 price† · buy lagavulin 8† · lagavulin 8 vs 16† | |
| Lagavulin | Distillers Edition | lagavulin distillers edition (confirmed real, ~$144) | lagavulin distillers edition price† · buy lagavulin distillers edition† | |
| Ardbeg | Corryvreckan, Wee Beastie, An Oa | ardbeg corryvreckan† | ardbeg wee beastie† · ardbeg an oa† · ardbeg corryvreckan price† · buy ardbeg corryvreckan† | Confirmed current core range, differentiated price points |
| Balvenie | Caribbean Cask 14 | balvenie 14 caribbean cask (confirmed real, ~$85) | balvenie caribbean cask price† · buy balvenie caribbean cask† · balvenie caribbean cask vs doublewood† | |
| Glenlivet | Founder's Reserve, Nadurra | glenlivet founder's reserve (confirmed real)† | glenlivet nadurra oloroso (confirmed real)† · glenlivet founder's reserve price† · buy glenlivet founder's reserve† | |
| Laphroaig | Quarter Cask | laphroaig quarter cask (confirmed real, popular) | laphroaig quarter cask price† · buy laphroaig quarter cask† · laphroaig quarter cask vs 10† | |
| Aberlour | A'bunadh | aberlour a'bunadh (confirmed real, cult favorite) | aberlour a'bunadh price† · buy aberlour a'bunadh† · aberlour a'bunadh batch† | You already have a dedicated blog post reviewing it but don't stock it |

### Brands with real demand, not in catalog at all

| Brand | Primary key (vol, KD) | Support keys | Note |
|---|---|---|---|
| **Talisker** | talisker 10 (confirmed strong candidate, web research) | talisker storm† · talisker skye† · talisker price† · buy talisker† · talisker review† | Diageo's most-visited distillery, same "Classic Malts" tier as your already-stocked Oban |
| Glenmorangie siblings | glenmorangie lasanta† | glenmorangie quinta ruban† · glenmorangie nectar d'or† · glenmorangie 18† · glenmorangie lasanta price† | You stock only "The Original" — hub already exists, low-effort expansion |
| Auchentoshan | auchentoshan 12† | auchentoshan american oak† · auchentoshan price† · buy auchentoshan† | Confirmed real Lowland distillery — you stock zero Lowland malts currently |
| Cragganmore | cragganmore 12† | cragganmore price† · buy cragganmore† | Diageo "Classic Malts," moderate demand, low competition |
| Aberfeldy | aberfeldy 12† | aberfeldy price† · buy aberfeldy† | Dewar's family, moderate demand, low competition |

**Priority:** Highland Park Viking Honour is the standout — real demand, moderate price, and it's already the headline name on your own live page.

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

Sourced from real SEMrush data (`keyword-map-vodka.md`).

### Missing expressions within brands you already stock

| Brand (in catalog) | Missing expression | Primary key | Support keys | Note |
|---|---|---|---|---|
| **Pinnacle** | **Whipped Cream** | pinnacle whipped vodka (5,400, KD 9) | pinnacle whipped cream price† · buy pinnacle whipped vodka† · pinnacle whipped cream drinks† · pinnacle whipped vs cotton candy† | **Real demand outweighs the base "pinnacle vodka" brand term's own secondary pool — strongest single gap in the whole Vodka batch.** Only the plain base is currently stocked |
| Pinnacle | Cotton Candy | pinnacle cotton candy vodka (1,300, KD 12) | pinnacle cotton candy price† · buy pinnacle cotton candy† | |
| Pinnacle | Birthday Cake | pinnacle cake vodka (720, KD 11) | pinnacle birthday cake price† · buy pinnacle cake vodka† | |
| **New Amsterdam** | **Pink Whitney** | new amsterdam pink whitney vodka (3,600, KD 10) | pink whitney price† · buy pink whitney vodka† · pink whitney vs new amsterdam† · pink whitney flavors† | Real, popular collab flavor (with Whitney Cummings) — large combined demand, not stocked at all |
| Absolut | Elyx | absolut elyx vodka (1,900, KD 12) | absolut elyx price† · buy absolut elyx† · absolut elyx vs absolut† | Premium copper-distilled line, not stocked |
| Grey Goose | VX | grey goose vx (590, KD 11) | grey goose vx price† · buy grey goose vx† | |
| Smirnoff | Green Apple | smirnoff green apple (1,900, KD 11) | smirnoff green apple price† · buy smirnoff green apple† | Large flavor line only partially stocked |
| Smirnoff | Whipped Cream, Vanilla, Kissed Caramel | smirnoff whipped cream vodka† | smirnoff vanilla vodka† · smirnoff kissed caramel vodka (real, 1,900/11)† | |
| Cîroc | Apple, Coconut, Mango, Watermelon | ciroc apple vodka† | ciroc coconut vodka† · ciroc mango vodka† · ciroc watermelon vodka† | Large flavor line only partially stocked |
| Ketel One | Peach and Orange Blossom | ketel one peach and orange blossom (480, KD 13) | ketel one peach orange price† · buy ketel one peach orange† | 3rd real botanical flavor, not stocked |
| Svedka | Blue Raspberry | svedka blue raspberry vodka (1,300, KD 9) | svedka blue raspberry price† · buy svedka blue raspberry† | |
| Chopin | Rye, Wheat | chopin rye vodka (210, KD 8) | chopin wheat vodka (90, KD 11) · chopin rye price† · buy chopin rye† | Only Potato stocked — Chopin's identity is offering all 3 base grains |
| Crystal Head | Aurora, Onyx | crystal head aurora (170, KD 8) | crystal head onyx (110, KD 14) · crystal head aurora price† · buy crystal head aurora† | Real limited-edition colorways |
| Deep Eddy | Grapefruit, Pineapple, Lime | deep eddy grapefruit vodka† | deep eddy pineapple vodka† · deep eddy lime vodka† | |
| Prairie Organic | Cucumber | prairie cucumber vodka (140, KD 4) | prairie cucumber price† · buy prairie cucumber vodka† | Real flavor line extension, not stocked |

### Brands with real demand, not in catalog at all

| Brand | Primary key (vol, KD) | Support keys | Note |
|---|---|---|---|
| **Beluga** | beluga vodka (12,100, KD 15) | beluga noble vodka† · beluga price† · buy beluga vodka† · beluga vs stolichnaya† · beluga review† | Premium Russian vodka, real and well-known — **strongest new-brand case in this batch** |
| **Skyy** | skyy vodka (12,100, KD 19) | skyy vodka price† · buy skyy vodka† · skyy vodka flavors† · skyy vs smirnoff† | Major mainstream brand, not stocked |
| **Effen** | effen vodka (5,400, KD 11) | effen black cherry† · effen price† · buy effen vodka† · effen review† | Real French vodka, excellent KD |
| **Burnett's** | burnett's vodka (6,600, KD 10) | burnett's flavors† · burnett's price† · buy burnett's vodka† · burnett's review† | Budget/value brand, excellent KD |
| **Zubrowka** | zubrowka bison grass vodka (4,400, KD 25) | zubrowka price† · buy zubrowka vodka† · zubrowka review† · bison grass vodka† | Real Polish specialty (bison grass), distinctive, no close competitor in current lineup |
| **Three Olives** | three olives vodka (3,600, KD 10) | three olives flavors† · three olives price† · buy three olives vodka† | Real, excellent KD |
| **Level Vodka** | level vodka† | level vodka price† · buy level vodka† · level vs absolut† | Absolut's own premium sister line — natural bundle since you already stock Absolut |

**Priority:** Pinnacle Whipped Cream is the standout — real demand that outweighs the parent brand's own secondary keyword pool, on a brand where you currently stock only the plain base. New Amsterdam Pink Whitney is a close second. Beluga is the strongest new-brand case.

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

## Updated recommended stocking priority, across all 10 categories

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
16. Everything else above ~2,000 combined vol / real-confirmed-but-thin is a reasonable second-tier candidate — see per-category tables above.

---

*This document will grow as remaining categories (Fine Wine, Champagne, Beer, Cider, RTD/Liqueurs, NA Wine/Champagne, NA RTD Cocktails) are batch-processed.*
