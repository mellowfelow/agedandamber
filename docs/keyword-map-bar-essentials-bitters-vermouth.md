# Keyword Map — Bar Essentials: Bitters, Vermouth & Garnishes
**Site:** Aged And Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — research report only, nothing implemented. Covers the BITTERS, VERMOUTH, and GARNISHES subcategories of "Bar Essentials" (19 stocked products). A sibling agent covers Mixers & Syrups, Cocktail Mixes, and Glassware & Barware separately. Every other category on the site is already fully SEO'd — this report matches the format/quality bar of `keyword-map-wine-red.md` and `keyword-map-champagne-a-l.md`.
**Scope note vs. brief:** the brief describes "Filthy 3" stocked SKUs for the brand-hub instruction, but the actual product list has **4** Filthy products (Black Cherries, Blue Cheese Stuffed Olives, Olive Brine, Pimento Olives). Still ≥2, so it gets a hub regardless — flagging the count discrepancy in case a product was meant to be excluded.
**Category framing:** unlike whiskey/wine/tequila batches, this is a bar-accessories/cocktail-ingredient category — recipe and "how to use X" informational demand is genuinely large here and is treated as legitimate content, not noise, per the brief.
**Methodology:** real SEMrush keyword-export CSVs from `keyword exports/`. Brand-level exports used: Angostura, Carpano-Antica, Dolin-Vermouth, Martini-vermouth, Martini (×2, deduped), Luxardo, Mezzetta. Category-level exports used: bitters (×2, one 100-row + one 7,466-row pull, deduped), Vermouth (×2, deduped), cocktail-garnishes (100 rows). No dedicated brand export exists for Bittermens, Fee Brothers, Dirty Sue, Filthy, Tillen Farms, or Woodford Reserve (cherries) — real brand-name rows were pulled from the category-level bitters/garnishes files where they surfaced (mostly at 0–50 volume, i.e. present but below SEMrush's reporting floor), and WebSearch was used for factual grounding elsewhere, always flagged inline as **"confirmed real via WebSearch, not volume-backed."** KD bands follow prior-batch convention: 0–20 T1 Quick Win, 21–35 T2 Worth Targeting, 36+ T3/background only.

---

## Phase 1 — Filter Summary

### "Martini" — the dominant homonym risk in this whole report
Three Martini exports were pulled (`Martini-vermouth`, `Martini` ×1, `Martini` ×2/401-row dedupe file). The picture that emerged: **`Martini-vermouth_all-keywords` is genuinely clean** — nearly every row in its top 100 is real vermouth/Martini & Rossi-brand or dirty-martini-vermouth-ingredient demand (`martini and rossi vermouth` 1,900/KD18, `vermouth for martini` 2,400/KD18–27, `martini rosso vermouth` 1,300/KD6–24, `best vermouth for martini` 1,300/KD13–14). The bare **`Martini_all-keywords` files are almost entirely the cocktail and completely unrelated homonyms**, not the vermouth brand:
- **Espresso Martini / cocktail-recipe cluster — by far the largest volume in either file:** `espresso martini recipe` (201,000!), `pornstar martini` (201,000), `espresso martini` (135,000), `lemon drop martini` (90,500), `dirty martini recipe` (60,500), `martini recipe` (60,500), plus dozens more `how to make a[n] X martini` variants for chocolate, apple, cosmopolitan, gin, vodka, lychee, pickle, matcha, tiramisu, etc. This is real recipe-content demand for the **cocktail**, not the vermouth ingredient, and was excluded from all vermouth product/keyword assignments.
- **Racing team homonym:** `martini racing` (1,600, KD53) — the Martini livery/motorsport brand (F1, Porsche, WRC), unrelated to the vermouth despite sharing corporate ancestry in some markets. Dropped.
- **Firearms homonym:** `martini henry rifle` (3,600) + `martini henry` (2,900) — the Martini–Henry breech-loading rifle. Dropped.
- **Actor/celebrity name collisions:** `max martini` (27,100 — actor) + `max martini movies and tv shows` (4,400), `steven martini` (9,900 — actor) + `steven martini movies` (2,400), `stefanie martini` (14,800 — actress) + `stefanie martini nude` (1,600) + `stefanie martini movies and tv shows` (1,900), `nick martini` (1,600 — musician), `corrado martini` (1,300), `ryan martinie` (3,600 + `mudvayne bassist ryan martinie` 2,900 — Mudvayne's bassist), `john martinis`/`john m. martinis` (2,400+1,600). All dropped — zero purchase intent for vermouth.
- **Venue/restaurant/nightclub navigational names — large cluster:** `blue martini` (18,100) and its city variants (Naples, Miami, Orlando, Las Vegas, Fort Lauderdale — combined well over 15,000), `twigs bistro & martini bar` (6,600) + variants, `eddie martini's`/`eddie martini's steakhouse` (2,900 combined), `martini modern italian columbus` (1,900+5,400), `martini's seafood house` (1,900), `bleu martini` (Philadelphia, 1,600+1,600), `pink martini` (9,900 — a real band, not a bar, but same non-commercial pattern) + `pink martini band`/`pink martini tour`. None of this is vermouth-shopping intent.
- **Unrelated real brand/product collisions:** `louis martini winery`/`louis m martini cab sauv`/`louis m martini cabernet sauvignon` (combined ~7,800) — Louis M. Martini is a real, unrelated Napa Valley winery, not Martini & Rossi. `martini glasses`/`martini glass` (34,300 combined) — barware, a cross-sell note not a vermouth keyword. `martini nails` (1,900 — nail salon), `martini table` (2,900 — furniture), `martini lamp` (1,900 — home decor), `martini purse` (720), `martini golf tees` (1,600).
- **Kept from the noisy files despite the flood:** `martini and rossi vermouth` (1,900), `martini rossi vermouth` (1,900), `martini is vermouth` (2,400), `martini olives` (2,900) and `good olives for martinis` (1,300) — real, garnish-relevant. `filthy martini` (1,900, KD23) is flagged, not dropped — it's a real cocktail-slang term (an extra-dirty martini) that only partially overlaps with the Filthy brand's own garnish products; used cautiously, not as a direct Filthy-brand keyword.

### "Bitters" — cocktail bitters vs. digestive/herbal bitters, a real and large split
The 7,466-row `bitters_all-keywords (1)` export is dominated by **soursop bitters** — a Caribbean/Jamaican herbal digestive tonic, completely unrelated to cocktail bitters: `soursop bitters` (60,500!), `serene herbs soursop bitters` (12,100), `serene soursop bitters` (8,100), plus dozens of benefit/side-effect/review variants. This alone dwarfs every cocktail-bitters term in the file. Also dropped as digestive/herbal, not cocktail: `digestive bitters` (5,400, KD51) + `digestive bitters for digestion` (3,600) + `bitters and digestion` (1,900) + `urban moonshine digestive bitters` (1,000) + `black seed bitters` (1,300+1,000) + `swedish bitters` (1,900, KD19 — a specific Maria Treben-style herbal product). **Underberg** (`underberg bitters`, 2,400, KD19) sits in a genuine gray zone — it's marketed primarily as a digestif/hangover remedy but does see real cocktail use; flagged in Phase 8 Part B rather than assigned to any product page.
Also dropped: the generic-English "bitter/bitterness" cluster (taste adjective, not the product) — `bitter` (33,100), `bitters` bare term itself is contaminated by this (33,100, mixing product and adjective searches), `bitterness`/`bitterly`/`bitterness meaning`/`bitterness synonym`/`bitterness definition` (combined well over 20,000), `bitterness in the bible` cluster (~2,500), beer-brewing IBU terminology (`beer bitterness ibu` 1,300, `ibu bitterness` 1,300, `beer bitterness scale` 880), and cooking-bitterness-removal content (eggplant, cucumber, coffee — combined ~1,000+). Also dropped: Thai-language rows (`เหล้าบิตเตอร์` 18,100, `เหล้า บิต เตอร์` 3,600) — out of scope for a US English site. Also dropped: navigational venue/place names that happen to contain "bitters" — `bitters and bottles` (1,900, a bar), `herb and bitters seattle` (3,600, a bar), `bitters end bar` (1,900), `bitters recycling center` (1,900 — an actual recycling center), `bitters baits`/`bitters bait and tackle` (1,300+880 — a fishing-tackle shop), `blair at bitters` (880 — an apartment complex on Bitters Road, San Antonio). None of this has cocktail-bitters purchase intent.
**Kept and used throughout:** the real cocktail-bitters core — `angostura bitters` (40,500), `orange bitters` (6,600), `aromatic bitters` (3,600), `what are bitters`/`what is bitters` (8,100+4,400), `bitters for old fashioned` (2,400), `cocktail bitters` (2,400), `chocolate bitters` (2,900), `black walnut bitters` (2,400), `mole bitters` (1,300), `cardamom bitters` (1,000), `peychaud's bitters` (5,400) and its many misspelling variants, plus the full "how many dashes / does X expire / is X alcoholic" informational cluster — all genuinely useful, expected-common informational demand per the brief, not filtered as noise.

### Vermouth-specific noise
Relatively clean by comparison. Dropped: `strait of vermouth` (480+140+140 combined) — the Strait of Vermouth is a real navigational homonym on Google (an alternate/mistaken name overlap in some map data), zero relation to the beverage. Dropped cooking-context rows that are really about the same real ingredient but non-retail intent (e.g. `dry vermouth in cooking` 1,600, `drinks to make with vermouth` 40) were kept as blog fodder rather than product-page keywords per the brief's "recipe content is legitimate here" guidance — not deleted, just not assigned to a specific SKU. `lillet blanc vermouth` / `is lillet blanc a vermouth` rows are real and kept — flagged in Phase 8 Part B as a genuine unstocked-competitor signal, not filtered out.

### Garnishes-specific findings
The `cocktail-garnishes_all-keywords` export (100 rows) is **entirely oriented toward citrus/dehydrated-fruit garnish content** — orange twists, orange peel, dehydrated fruit, cocktail decorations. A direct grep of the full file for "cherry/cherries," "olive," "onion," and "brine" returned **zero rows** — none of the 9 stocked garnish SKUs (olives, olive juice/brine, cocktail cherries) have any representation in this particular export at all. That's a real, notable finding, not a filtering choice: cherries/olives/onions keyword demand for this report comes entirely from the Luxardo, Mezzetta, and Martini-family files instead (see product assignments below), and there is a genuine data gap for a dedicated "cocktail cherries" / "cocktail olives" / "cocktail onions" SEMrush pull next round.
"Filthy" and "Dirty Sue" brand names were checked for slang/unrelated collisions — none found in the actual export rows pulled (no adult-content or unrelated "dirty"/"filthy" slang surfaced at reportable volume in these particular files), so no filtering was needed there beyond the `filthy martini` dual-intent flag above.

**Net:** roughly half of the raw bitters-category volume (soursop/digestive/bitterness-as-a-word/venue-names) was noise and excluded; the vermouth and garnish exports were comparatively clean, with the garnish export's near-total lack of brand/product-specific rows being the headline finding of this Phase 1 pass.

---

## Category & Subcategory Hub Keywords

### `/bar-essentials/bitters/`
Primary: **cocktail bitters** (2,400, KD33) — safer commercial anchor than bare "bitters" (33,100, contaminated by the adjective and soursop/digestive noise documented above)
Secondary: angostura bitters (40,500, KD27 — background/root term, too brand-specific to be the hub's own primary but essential context) · what are bitters (8,100, KD31) · orange bitters (6,600, KD30) · aromatic bitters (3,600, KD35) · bitters for old fashioned (2,400, KD10) · old fashioned bitters (2,400, KD8) · chocolate bitters (2,900, KD17) · bitters for cocktails (1,300, KD30)
**FAQs:** "What are cocktail bitters?" (what are cocktail bitters, 260, KD28) · "How do you use bitters in a cocktail?" (how to use bitters, 110, KD15) · "Do bitters go bad / how long do they last?" (do bitters go bad 1,300/KD13 · do bitters expire 1,000/KD13 · how long do bitters last 320/KD11) · "How much alcohol is in bitters?" (bitters alcohol content 590/KD26 · alcohol percentage in bitters 480/KD23 — worth noting bitters are technically high-proof, ~35–45% ABV, despite being used in dashes) · "How much is a dash of bitters?" (how much is a dash of bitters, 720, KD20 — genuinely large, recurring practical question)
**Noise flag for hub copy:** do not use bare "bitters" as the page's targeted term or meta title anchor — its SERP is shared with soursop/digestive-bitters content and the dictionary word "bitter."

### `/bar-essentials/vermouth/`
Primary: **sweet vermouth** (22,200, KD17) and **dry vermouth** (22,200, KD14) — the two real commercial anchors; bare "vermouth" (60,500, KD38) is background/root only
Secondary: what is vermouth (14,800, KD35) · vermouth for martini (2,400, KD18–27) · best vermouth for martini (1,300, KD13–14) · italian vermouth (2,400, KD26) · french vermouth (1,300, KD25) · sweet vermouth cocktails (1,300, KD19) · dry vermouth cocktails (1,300, KD13) · vermouth brands (880, KD15)
**FAQs:** "What's the difference between sweet and dry vermouth?" (sweet vs dry vermouth 320/KD41 · dry vermouth vs sweet vermouth 320/KD37) · "Does vermouth go bad?" (does vermouth go bad 1,600/KD24 · can vermouth go bad 720/KD13) · "Does vermouth need to be refrigerated?" (720, KD16 — real and important: vermouth is fortified wine, not a spirit, and needs the fridge after opening, a genuinely common point of customer confusion) · "Is vermouth alcoholic?" (is vermouth alcohol 880/KD25 · is vermouth alcoholic 880/KD25–28) · "How long does vermouth last once opened?" (how long does vermouth last 590/KD18–21)

### `/bar-essentials/garnishes/`
Primary: **cocktail garnishes** (1,900, KD24)
Secondary: garnish for cocktail drinks (1,900, KD23) · cocktail garnish (1,300, KD28) · martini olives (2,900, KD20) · martini garnish (480, KD19) · dried fruit for cocktails (480, KD14) · drink garnishes (720, KD29)
**FAQs:** "What are good olives for a martini?" (good olives for martinis, 1,300, KD17) · "What's the difference between a regular martini and a dirty martini?" (olive in martini 1,600/KD33 · dry martini with olives 1,600/KD27 — real, high-value, ties directly to the Dirty Sue/Filthy olive-brine SKUs) · "How long do cocktail cherries/olives last once opened?" — not volume-backed in any export pulled, but a genuine, necessary practical FAQ for a garnish category (shelf life after opening is a real customer question even without search-volume evidence here).
**Data gap flag:** as noted in Phase 1, the dedicated `cocktail-garnishes` export has zero cherry/olive/onion/brine rows — this hub's table leans on the Martini-family and Luxardo/Mezzetta files instead. A dedicated "cocktail cherries" / "cocktail olives" SEMrush pull would materially strengthen this hub.

---

## Per-Product Keyword Assignment

### BITTERS

**1. prod-baress-01 — Angostura Aromatic Bitters**
Primary: `angostura aromatic bitters` (3,600, KD25) — CSV-backed, exact match.
Secondary (6): angostura bitters (40,500, KD27 — background head term) · angostura bitters aromatic (1,900, KD23) · bitters angostura aromatic (1,900, KD8) · aromatic bitters (3,600, KD35) · aromatic angostura bitters (320, KD13) · angostura bitters cocktails (1,900, KD26)
FAQs: "What is Angostura bitters?" (what is angostura bitters, 1,300, KD40) — CSV-backed. "Do Angostura bitters go bad?" (do angostura bitters go bad 590/KD12 + does angostura bitters go bad 210/KD11, combined ~800) — CSV-backed, real: no, high-proof bitters essentially don't spoil, though flavor can fade over years. "What's the difference between Angostura and Peychaud's bitters?" (peychaud's bitters vs angostura 480/KD19 + peychaud's bitters vs angostura bitters 390/KD28, combined ~870) — CSV-backed, real recurring comparison; cross-link to the Peychaud's product page below.

**2. prod-baress-02 — Angostura Orange Bitters**
Primary: `angostura orange bitters` (3,600, KD20) — CSV-backed, exact match.
Secondary (6): orange bitters (6,600, KD30) · angostura bitters orange (1,000, KD11) · what is orange bitters (320, KD22) · what are orange bitters (260, KD21) · angostura bitters vs orange bitters (170, KD11) · orange bitters vs angostura bitters (170, KD30)
FAQ: "What are orange bitters used for?" — real, standard cocktail-copy fact (not itself volume-backed as a phrase, but the underlying "what is/are orange bitters" demand above is): classic in a Martini, a "Corpse Reviver No. 2," and many Champagne cocktails.

**3. prod-baress-03 — Bittermens Xocolatl Mole Bitters**
Primary: `mole bitters` (1,300, KD27) — CSV-backed; closest real-volume match (no "bittermens" or "xocolatl" volume surfaced anywhere in either bitters export).
Secondary (5): chocolate bitters (2,900, KD17) · cocktail bitters (2,400, KD33) · bittermens (confirmed real via WebSearch, not volume-backed) · xocolatl mole bitters (confirmed real via WebSearch, not volume-backed) · aromatic bitters (3,600, KD35, background)
FAQ: "What are mole bitters?" — real, low/zero-reported-volume PAA-style query surfaced in the raw export (`what are mole bitters`, `what does mole bitters taste like`, `how to use mole bitters` all present at sub-10 rounding); factual answer: inspired by Mexican mole sauce, built on cacao, cinnamon, chile, and warm baking spices — Bittermens' flagship flavor since the company's 2007 founding by Avery and Janet Glasser.
Sources: [Bittermens Xocolatl Mole Bitters lineup — Amazon/Sazerac House variety listings](https://www.amazon.com/Bittermens-Variety-Pack-Elemakule-Grapefruit/dp/B0CHN6F3YV)

**4. prod-baress-11 — Fee Brothers Black Walnut Bitters**
Primary: `black walnut bitters` (2,400, KD5) — CSV-backed, exact match, very low difficulty.
Secondary (5): walnut bitters (1,300, KD5) · fee brothers bitters (1,600, KD20) · cocktail bitters (2,400, KD33) · cardamom bitters (1,000, KD6 — background; real, part of Fee Brothers' much larger lineup, see Phase 8) · aromatic bitters (3,600, KD35, background)
FAQ: none forced — no Black-Walnut-specific PAA volume found; "does Fee Brothers bitters have alcohol" surfaced at very low volume (50, KD10–20) if a low-priority FAQ is wanted.

**5. prod-baress-36 — Peychaud's Aromatic Bitters**
Primary: `peychaud's bitters` (5,400, KD28) — CSV-backed, strongest single row for this product.
Secondary (6): peychaud bitters (1,300, KD26) · peychauds bitters (1,300, KD24) · peychaud's bitters vs angostura (480, KD19) · peychaud's bitters vs angostura bitters (390, KD28) · what is peychaud's bitters (140, KD31) · what is peychaud bitters (70, KD13)
FAQ: "What is Peychaud's Bitters?" (140+110+70 combined, ~320 across spelling variants) — CSV-backed. Real, well-documented history: created in New Orleans between 1849–1857 by Creole apothecary Antoine Amédée Peychaud; gentian-based like Angostura but anise-and-mint forward; the bitters that gave the Sazerac its name and character. "What's the difference between Peychaud's and Angostura bitters?" — see Angostura Aromatic FAQ above, same ~870 combined volume, cross-link both directions.
Sources: [Peychaud's Bitters (Wikipedia)](https://en.wikipedia.org/wiki/Peychaud's_Bitters) · [Sazerac House Now Producing and Bottling Peychaud's Bitters](https://www.sazerachouse.com/media/press-releases/sazerac-house-now-producing-and-bottling-peychauds-bitters/)

---

### VERMOUTH

**6. prod-baress-06 — Carpano Antica Formula Sweet Vermouth**
Primary: `carpano antica formula sweet vermouth` (1,000, KD18) — CSV-backed, exact match.
Secondary (6): carpano antica (5,400, KD32) · carpano antica vermouth (1,600, KD21) · carpano antica formula vermouth (1,600, KD23) · carpano antica formula (880, KD20) · antica formula vermouth (880, KD14) · carpano vermouth (480, KD12)
FAQ: "What is Carpano Antica Formula?" (what is carpano antica, 110, KD19) — CSV-backed. Real, well-documented history: invented in 1786 in Turin by Antonio Benedetto Carpano — widely credited as the world's first sweet vermouth; his shop, across from the Royal Palace of Turin, reportedly stayed open 24 hours once the drink caught on with King Vittorio Amedeo III's household. Preserved today by Fratelli Branca Distillerie.
Sources: [6 Things You Should Know About Carpano Antica Formula (VinePair)](https://vinepair.com/articles/ntk-carpano-antica-formula/) · [Antonio Benedetto Carpano (Wikipedia)](https://en.wikipedia.org/wiki/Antonio_Benedetto_Carpano)

**7. prod-baress-09 — Dolin Dry Vermouth de Chambéry**
Primary: `dolin dry vermouth` (2,900, KD16) — CSV-backed, strongest row in the export.
Secondary (6): dolin vermouth (1,900, KD19) · dolin vermouth de chambery dry (880, KD18) · dolin dry vermouth de chambery (590, KD17) · dolin dry (480, KD23) · dolin (880, KD10) · dolin vermouth dry (590, KD14)
FAQ: none SKU-specific at real volume; a genuinely useful factual note regardless — Vermouth de Chambéry has held France's only Protected Designation of Origin (PDO) for vermouth since 1932, and Dolin (founded 1821, still run by the Sevez family) is the last remaining producer making it.

**8. prod-baress-10 — Dolin Rouge Sweet Vermouth de Chambéry**
Primary: `dolin rouge` (590, KD14) — CSV-backed, direct hit.
Secondary (5): dolin rouge vermouth (390, KD12) · vermouth rouge dolin (390, KD12) · dolin sweet vermouth (390, KD11) · dolin vermouth rouge (320, KD12) · dolin rouge sweet vermouth (210, KD12)
FAQ: none forced — defer to the vermouth hub's sweet-vs-dry FAQ.

**9. prod-baress-25 — Martini & Rossi Extra Dry Vermouth**
Primary: `martini and rossi extra dry vermouth` (720, KD16) — CSV-backed, exact match.
Secondary (6): martini rossi extra dry vermouth (480, KD15) · martini & rossi extra dry vermouth (390, KD9) · martini and rossi extra dry (390, KD16) · martini rossi extra dry (390, KD15) · martini and rossi vermouth dry (480, KD15) · martini rossi vermouth dry (320, KD12)
FAQ: "What's the best vermouth for a martini?" (best vermouth for martini, 1,300, KD13–14) — CSV-backed, real, high-value, directly transactional-adjacent; genuinely the strongest single cross-sell FAQ found for either Martini & Rossi product.

**10. prod-baress-26 — Martini & Rossi Rosso Sweet Vermouth**
Primary: `martini & rossi rosso` (1,000, KD11) — CSV-backed, direct hit.
Secondary (6): martini and rossi sweet vermouth (1,000, KD11–12) · martini rossi sweet vermouth (1,000, KD12–15) · martini rosso vermouth (1,300, KD6–24) · martini and rossi rosso sweet vermouth (720, KD8–12) · martini rossi rosso sweet vermouth (390–720, KD9) · martini rosso (1,600, KD15, background)
FAQ: "Is Martini Rosso a sweet vermouth?" (is martini rosso a sweet vermouth, 110, KD11) — CSV-backed, real, direct; answer: yes, Rosso is Martini & Rossi's sweet/red vermouth style, the original 1863 recipe created by co-founder Luigi Rossi.

**11. prod-baress-35 — Noilly Prat Original Dry Vermouth**
Primary: `noilly prat dry vermouth` (1,300, KD20) — CSV-backed, strongest row.
Secondary (5): noilly prat vermouth (880, KD11) · noilly prat extra dry vermouth (720, KD15 — see naming flag below) · dry vermouth (22,200, KD14, background) · dolin dry vermouth vs noilly prat (20, KD10 — real comparison, low volume) · vermouth de chambery (90, KD5, background/competitor context)
FAQ: none SKU-specific at meaningful volume.
**Naming flag:** Noilly Prat's real current range is actually **four** wines — Original Dry, Extra Dry (a simpler formulation built specifically for the American extra-dry martini market), Rouge, and Ambré (a richer, cinnamon-cardamom-vanilla oak-finished style, mostly European/distillery-only distribution) — confirmed via WebSearch. `noilly prat extra dry vermouth` (720, KD15) may or may not be the exact same liquid as the stocked "Original Dry" depending on current US labeling; verify before treating it as a secondary keyword for this SKU rather than a distinct product. Ambré and Rouge are real gap candidates either way — see Phase 8.
Sources: [Noilly Prat (Wikipedia)](https://en.wikipedia.org/wiki/Noilly_Prat) · [Noilly Prat Vermouth: Original Dry, Rouge, and Ambre differences (Alcademics)](https://alcademics.com/noilly-prat-vermouth-dry-rouge-ambre/)

---

### GARNISHES

**12. prod-baress-08 — Dirty Sue Premium Olive Juice**
Primary: `dirty sue olive juice` — confirmed real via WebSearch, not volume-backed (no "dirty sue" rows surfaced in any export pulled).
Secondary (5): martini olives (2,900, KD20) · good olives for martinis (1,300, KD17) · dry martini with olives (1,600, KD27) · olive in martini (1,600, KD33) · dirty martini vermouth (320, KD33 — background, cross-sell relevance)
FAQ: "What is olive brine/juice used for in a martini?" — real, standard category-education content: a dash to a full splash of the brine turns a standard martini "dirty," adding salinity and cloudiness; no direct search-volume row found, but a necessary product-page explainer regardless.
Factual note (WebSearch-confirmed): Dirty Sue is a Los Angeles-based, twice-filtered olive brine made specifically for dirty martinis, from olives sourced in southern Spain; the brand's broader real lineup also includes jalapeño olives, blue-cheese olives, garlic olives, pepperoncini, and cocktail onions (see Phase 8 Part A).

**13. prod-baress-16 — Filthy Black Cherries**
Primary: `filthy black cherries` — confirmed real via WebSearch, not volume-backed.
Secondary (5): cocktail cherries (not in any export at reportable volume, standard category term) · dark cherries for cocktails (320, KD18 — from the Luxardo export, generic garnish demand) · maraschino cherries in liqueur (320, KD28, background) · what are cocktail cherries (390, KD18 — from the Luxardo export) · filthy martini (1,900, KD23 — **use cautiously**, see Phase 1 dual-intent flag; it's cocktail slang for an extra-dirty martini, only loosely brand-relevant)
FAQ: none forced.

**14. prod-baress-17 — Filthy Blue Cheese Stuffed Olives**
Primary: `filthy blue cheese stuffed olives` — confirmed real via WebSearch, not volume-backed.
Secondary (5): mezzetta blue cheese stuffed olives (90, KD11 — competitor-brand row, useful as category-term proxy) · stuffed olives (mezzetta stuffed olives 140, KD12) · martini olives (2,900, KD20) · good olives for martinis (1,300, KD17) · blue cheese olives (not independently volumed; standard descriptive term)
FAQ: none forced.

**15. prod-baress-18 — Filthy Olive Brine**
Primary: `filthy olive brine` — confirmed real via WebSearch, not volume-backed.
Secondary (5): olive brine (not independently volumed in any export) · martini olives (2,900, KD20) · olive in martini (1,600, KD33) · good olives for martinis (1,300, KD17) · dry martini with olives (1,600, KD27)
FAQ: defer to the Dirty Sue FAQ above (near-identical use case — brine vs. juice naming is largely interchangeable in consumer search).

**16. prod-baress-19 — Filthy Pimento Olives**
Primary: `filthy pimento olives` — confirmed real via WebSearch, not volume-backed.
Secondary (4): pimento olives (standard descriptive term, not independently volumed) · martini olives (2,900, KD20) · dry martini with olives (1,600, KD27) · olive in martini (1,600, KD33)
FAQ: none forced.

**17. prod-baress-24 — Luxardo Maraschino Cherries**
Primary: `luxardo maraschino cherries` (12,100, KD31) — CSV-backed, strong, exact match.
Secondary (6): luxardo cherries (27,100, KD27) · luxardo cherry (3,600, KD27) · luxardo original maraschino cherries (590, KD22) · luxardo cocktail cherries (480, KD22) · dark maraschino cherries (590, KD24) · what are cocktail cherries (390, KD18)
FAQs: "What are Luxardo cherries?" (what are luxardo cherries, 210, KD14) — CSV-backed. "Why are Luxardo cherries so expensive?" (140, KD16) — CSV-backed, genuinely common consumer question; real answer: made from Marasca cherries in Italy using Luxardo's own 200-year-old proprietary process (whole cherries in thick syrup, not the bright-red dyed supermarket kind), a meaningfully different product from mass-market maraschino cherries. "Do Luxardo cherries have alcohol?" (170, KD15) — CSV-backed; real answer: no, the cherries themselves are non-alcoholic (this is distinct from the company's separately-stocked Luxardo Maraschino Liqueur).
**Critical scope flag:** the Luxardo export is a mixed file covering the whole Luxardo portfolio, not just the cherries. Rows that belong to the company's **liqueur** line (already stocked as a separate product elsewhere in the catalog, per the brief) were excluded from this product's keyword set: `luxardo maraschino liqueur` (6,600), `maraschino liqueur` (8,100), `luxardo limoncello` (720), `luxardo amaretto` (590), `luxardo sambuca` (260), `luxardo espresso liqueur` (480), `luxardo bitter bianco`/`luxardo bitter`/`luxardo bitter rosso` (1,600+390+390, an Aperol-style bitter aperitivo, unrelated to cocktail bitters despite the name), `luxardo aperitivo` (480), `luxardo amaro abano` (210), `luxardo del santo` (1,000), `luxardo triplum` (210). None of these belong on the Maraschino Cherries product page.
Sources: [Luxardo (company overview, general)](https://en.wikipedia.org/wiki/Luxardo)

**18. prod-baress-29 — Mezzetta Spanish Queen Olives**
Primary: `mezzetta olives` (1,000, KD16) — CSV-backed; closest real match (no exact "spanish queen olives" row in the export).
Secondary (5): mezzetta (3,600, KD26) · jarred olives (320, KD11) · jar of olives (390, KD6) · mezzetta martini olives (90, KD18) · mezzetta stuffed olives (140, KD12)
FAQ: none Spanish-Queen-specific found; "Spanish Queen" is a real, standard large-green-olive varietal name in the trade, not a Mezzetta-invented term — safe to use descriptively in copy without a citation.
Factual note (WebSearch-confirmed): Mezzetta was founded in 1935 by Italian immigrant Giuseppe Mezzetta in San Francisco's North Beach neighborhood, originally selling imported Mediterranean olives and peppers; still family-owned today, now run by the fourth generation from a facility in American Canyon, Napa County.

**19. prod-baress-43 — Tillen Farms Bada Bing Cherries**
Primary: `tillen farms bada bing cherries` — confirmed real via WebSearch, not volume-backed (no Tillen Farms rows surfaced in either garnish/bitters export).
Secondary (4): bada bing cherries (real product name, not independently volumed) · cocktail cherries (standard category term) · dark cherries for cocktails (320, KD18) · what are cocktail cherries (390, KD18)
FAQ: none forced.
Factual note (WebSearch-confirmed): Tillen Farms has made premium cocktail garnishes since 2004, sourcing cherries from Oregon's Willamette Valley; Bada Bing is their flagship pitted-and-stemmed cherry, alongside real sibling lines Merry Maraschino and Rainier Reserve (see Phase 8).

**20. prod-baress-46 — Woodford Reserve Bourbon Cherries**
Primary: `woodford reserve bourbon cherries` — confirmed real via WebSearch, not volume-backed.
Secondary (4): bourbon cherries (standard descriptive term, not independently volumed) · cocktail cherries (standard category term) · luxardo cherries (27,100, background/competitive context) · old fashioned with luxardo cherries (140, KD12 — shows real demand for the old-fashioned-plus-cherry pairing generally, useful cross-sell context even though it names a competitor)
FAQ: none forced.
Factual note (WebSearch-confirmed): produced by Brown-Forman under license from the Woodford Reserve bourbon brand; cherries are handpicked in Oregon and finished in Louisville, Kentucky — made by Bourbon Barrel Foods, not Brown-Forman's distillery operation directly.

---

## Brand Hub Drafts

Every stocked brand with 2+ SKUs in this batch: Angostura (2), Dolin (2), Martini & Rossi (2), Filthy (4 — see count flag in the header).

### Angostura
**categoryLabel:** Bitters
**Hook:** Founded in 1824 by Dr. Johann Gottlieb Benjamin Siegert, a German-born surgeon in Simón Bolívar's army, in the town of Angostura, Venezuela (renamed Ciudad Bolívar in 1846) — the family-owned House of Angostura relocated to Trinidad in 1875 amid regional unrest and remains headquartered there today. The exact recipe is a closely guarded secret known to only a handful of people at any time, and the bottle's oversized, comically mismatched label is a genuine 200-year-old production quirk rather than a deliberate design choice, by most accounts of the brand's own history. Aromatic Bitters (44.7% ABV, deceptively strong for something used a few dashes at a time) has been the house's core product since 1824; Orange Bitters followed in 2007, and Cocoa Bitters later still.
**Secondary keywords:** angostura bitters (40,500, KD27) · what is angostura (880, KD36) · what is angostura bitters (1,300, KD40) · aromatic bitters (3,600, KD35) · orange bitters (6,600, KD30)
**FAQs:**
1. "Is Angostura bitters alcoholic?" — Yes, notably so: Aromatic Bitters is 44.7% ABV, higher-proof than most spirits, despite being used only a few dashes at a time.
2. "Do Angostura bitters expire or go bad?" (do angostura bitters go bad 590/KD12 + does angostura bitters go bad 210/KD11, CSV-backed) — Effectively no; the high alcohol content preserves it indefinitely, though flavor intensity can mellow slightly over years.

### Dolin
**categoryLabel:** Vermouth
**Hook:** Founded in 1821 in Chambéry, Savoie, by distiller Joseph Chavasse, who built the house's style around real, locally macerated Alpine botanicals rather than pre-made extracts — a production method formalized in 1932 when Vermouth de Chambéry became the only vermouth style in the world to earn a French Protected Designation of Origin (PDO). Now run by the fifth generation of the Sevez family, Dolin is the last remaining producer still making authentic Vermouth de Chambéry, having survived the return of Savoy to France, both World Wars, and the 1944 bombing of Chambéry.
**Secondary keywords:** dolin vermouth (1,900, KD19) · dolin dry vermouth (2,900, KD16) · dolin (880, KD10) · french vermouth (1,300, KD25) · vermouth de chambery (90, KD5)
**FAQs:**
1. "What makes Vermouth de Chambéry different from other French vermouth?" — It's the only vermouth with a legal French PDO (since 1932), requiring production in Chambéry itself using real botanicals macerated on-site rather than concentrated extracts.
2. "Is Dolin family-owned?" — Yes, run by the Sevez family for five generations since 1905, and one of the very few genuinely independent vermouth houses left in France.

### Martini & Rossi
**categoryLabel:** Vermouth
**Hook:** Founded in July 1863 in Turin by Alessandro Martini, Teofilo Sola, and Luigi Rossi — building on an earlier 1847 vermouth-bottling venture in the town of Pessione — Martini & Rossi grew into the world's largest-volume vermouth producer. Rossi is credited with creating the original Rosso recipe that still anchors the sweet-vermouth line today. Bacardi Limited acquired Martini & Rossi in 1993, roughly doubling Bacardi's size at the time and pairing Martini's strong European standing with Bacardi's dominant US/Latin American presence.
**Secondary keywords:** martini and rossi vermouth (1,900, KD13–18) · martini rossi vermouth (1,900, KD18–19) · martini rosso (1,600, KD15) · martini bianco (1,000, KD15 — real, unstocked, see Phase 8) · best vermouth for martini (1,300, KD13–14)
**FAQs:**
1. "Is Martini & Rossi owned by Bacardi?" — Yes, since 1993; it's now part of Bacardi Limited's global portfolio alongside its own core rum brand.
2. "What's the difference between Martini & Rossi Rosso and Extra Dry?" — Rosso is the original 1863 sweet, red vermouth recipe (built for a Manhattan or a sweet martini); Extra Dry is the pale, crisp style built for the classic dry martini — the site stocks both.

### Filthy
**categoryLabel:** Garnishes
**Hook:** Founded by Daniel Singer, who set out to build a genuinely premium alternative to salad-jar olives and dyed dessert cherries, Filthy has become the industry-standard cocktail-garnish brand — served at leading bars, restaurants, hotels, and even on some airlines. Its olives are naturally cured rather than packed in salt and oil, so they don't leave the oily slick on a drink that cheaper jarred olives do; its cocktail onions are hand-selected for shape and color and made without artificial sweeteners or colors.
**Secondary keywords:** martini olives (2,900, KD20) · good olives for martinis (1,300, KD17) · dry martini with olives (1,600, KD27) · olive in martini (1,600, KD33) · stuffed olives (140, KD12 — from the Mezzetta competitor file, generic category proxy)
**FAQs:**
1. "What makes Filthy olives different from regular jarred olives?" — They're naturally cured rather than packed in salt brine and oil, so they don't leave an oily film on top of a cocktail — a real, brand-stated differentiator.
2. "Does Filthy make cocktail onions too?" — Yes; the brand's full real lineup extends beyond the four SKUs stocked here to include cocktail onions and other olive varieties (see Phase 8 Part A) — a real cross-sell/expansion opportunity.

---

## Phase 8 — Gap Analysis

### Part A — Real missing expressions within brands already stocked

| Brand | Stocked | Real, confirmed missing expression(s) | Keyword signal |
|---|---|---|---|
| Angostura | Aromatic, Orange | **Cocoa Bitters** — real, current third core flavor (added to expand the "classic three" range, made with Trinitario cocoa from Trinidad and Tobago) | CSV-backed: `angostura chocolate bitters` (480, KD13) + `angostura cocoa bitters` (480, KD13) = **~960 combined**, genuinely comparable to the stocked Orange Bitters' own individual rows |
| Bittermens | Xocolatl Mole only | Real core lineup also includes **Hopped Grapefruit**, **Elemakule Tiki**, **Hellfire Habanero**, and **Boston Bittahs** | Not volume-backed in this data pull (`tiki bitters`, 1,300/KD9, is the closest generic-category proxy); all four flavors WebSearch-confirmed as current, real Bittermens products |
| Fee Brothers | Black Walnut only | Real full lineup (15+ flavors) includes **Whiskey Barrel-Aged Bitters** (a seasonal, high-demand limited release) and **Cardamom Bitters** | CSV-backed: `cardamom bitters` (1,000, KD6) is real, generic-but-relevant volume; Whiskey Barrel-Aged is WebSearch-confirmed real, not volume-backed here |
| Dolin | Dry, Rouge | **Dolin Blanc** — the third leg of the real Dolin range, a lightly sweet white vermouth | **Strong finding, CSV-backed:** `dolin blanc` (1,900, KD11) + `dolin blanc vermouth` (880, KD7) + `dolin blanc vermouth de chambéry` (110, KD13) ≈ **~2,890 combined** — comparable to or stronger than the stocked Rouge's own numbers |
| Martini & Rossi | Extra Dry, Rosso | **Martini Bianco** — a real, current, well-known third core style | **Strong finding, CSV-backed:** `martini bianco` (1,000, KD15) alone rivals the stocked Rosso's strongest individual row |
| Noilly Prat | Original Dry only | **Ambré** (oak-finished, cinnamon/cardamom/vanilla, richer style) and **Rouge** — both real, current Noilly Prat wines | Not volume-backed in this pull; WebSearch-confirmed current range members. `noilly prat extra dry vermouth` (720, KD15) may be a labeling variant of the stocked Original Dry rather than a true gap — verify before treating as a distinct SKU opportunity |
| Carpano | Antica Formula (sweet) only | **Carpano Bianco** (a real, 1930s-era Italian white vermouth) and **Carpano Dry**; also **Punt e Mes**, the house's other historic aperitivo — all made by the same custodian, Fratelli Branca Distillerie | **CSV-backed, real:** `carpano antica formula bianco vermouth` (210, KD4) + `carpano antica bianco` (20, KD4) for Bianco; `carpano antica dry vermouth` (20, KD8) + `carpano antica dry` (20, KD11) for Dry — smaller volume but genuinely present, unlike most other gap rows in this table |
| Dirty Sue | Olive Juice only | Real broader lineup: **jalapeño olives, blue-cheese olives, garlic olives, pepperoncini, and cocktail onions** | Not volume-backed in these exports; WebSearch-confirmed current Dirty Sue product line |
| Filthy | Black Cherries, Blue Cheese Olives, Olive Brine, Pimento Olives | Real broader lineup includes **Filthy Cocktail Onions** (Dutch silver-skin pearl onions, made in Miami) and **Filthy Cocktail Picks** | Not volume-backed directly; WebSearch-confirmed real, current Filthy products, a genuine stocking-gap adjacent to the four SKUs already carried |
| Mezzetta | Spanish Queen Olives only | Real broader olive/onion lineup: **Castelvetrano Olives, Kalamata Olives, Garlic Stuffed Olives, and Cocktail Onions** | **CSV-backed, real:** `mezzetta castelvetrano olives` (210, KD15) · `mezzetta cocktail onions` (390, KD26) · `mezzetta garlic stuffed olives` (320, KD7) · `mezzetta kalamata olives` (170, KD7) — genuinely stronger combined signal (~1,090) than the stocked Spanish Queen SKU's own closest row |
| Tillen Farms | Bada Bing Cherries only | Real sibling cherry lines: **Merry Maraschino** and **Rainier Reserve** | Not volume-backed in these exports; WebSearch-confirmed current Tillen Farms cherry range |

### Part B — Real unstocked brands with genuine search demand

| Category | Brand | Signal | Notes |
|---|---|---|---|
| Bitters | **Underberg** | `underberg bitters` (2,400, KD19) — real, sizeable CSV volume | German digestif bitters with genuine cocktail crossover use; sits closer to the digestive-bitters intent flagged in Phase 1 than pure cocktail bitters, but the volume and brand recognition are real |
| Bitters | Regan's Orange Bitters No. 6 | Low-volume brand rows present (`where to buy regan's orange bitters`, ~0–20) | WebSearch-confirmed: created by Gaz Regan in 2005, widely credited as reigniting the modern bitters category and the current benchmark orange bitters |
| Bitters | Scrappy's Bitters | Low-volume brand rows present (`where to buy scrappy's bitters`, ~20) | WebSearch-confirmed real, wide artisanal flavor range (lavender, cardamom, grapefruit, chocolate) |
| Bitters | The Bitter Truth | Low-volume brand rows present (`where to buy bitter truth bitters`, ~20) | WebSearch-confirmed: founded 2006 in Munich, one of the first modern craft-bitters brands to go global |
| Vermouth/aperitif | **Cocchi Vermouth di Torino / Cocchi Americano** | `cocchi vermouth di torino` (3,600, KD13) + `cocchi vermouth` (1,000, KD11) + `cocchi americano substitute` (320, KD23) | **Strong CSV-backed finding** — real Italian aperitif-wine house, genuinely popular with the same craft-cocktail customer this category targets |
| Vermouth/aperitif | **Cinzano** | `cinzano vermouth` (880, KD13) | Strong CSV-backed finding — a major, well-known Italian vermouth house with zero SKUs currently stocked |
| Vermouth/aperitif | **Punt e Mes** | `punt e mes vermouth` (720, KD19) | Real, CSV-backed — note this is actually the **same producer as the stocked Carpano Antica Formula** (Fratelli Branca), so it's arguably a Part A within-house gap as much as a new-brand opportunity; listed here since it's a distinct product name |
| Vermouth/aperitif | **Lillet Blanc** | `lillet blanc vermouth` (90) + `lillet vermouth` (50) + `is lillet blanc a vermouth` (110–210 across two exports) | Real, though technically an aromatized wine rather than a true vermouth (a genuinely common point of customer confusion, worth a blog explainer) |
| Garnishes | **Sable & Rosenfeld** | Not present in any export pulled | WebSearch-confirmed real competitor in cocktail onions ("Tipsy Onions," vermouth-brined) and olives; no CSV signal found, flagged as a category-awareness note only |

**Correction to the brief's example:** the brief suggested checking for "Luxardo's own olives" and "Tio Pepe cocktail onions" as possible Part B candidates. Neither is real: WebSearch found no evidence Luxardo makes a cocktail-olive product (their real range is cherries, maraschino liqueur, and other Italian liqueurs/spirits only), and "Tio Pepe" is a real brand — but it's Gonzalez Byass's Fino sherry, not a cocktail-onion product; no "Tio Pepe cocktail onions" product exists. Both were dropped rather than force-fit into the gap table.

---

## Blog Topic Candidates

| Topic | Anchor keyword(s) | Notes |
|---|---|---|
| What are cocktail bitters, and how do they actually work? | what are bitters (8,100, KD31) · what are cocktail bitters (260, KD28) · what is bitters (4,400, KD13) | Foundational pillar page for the whole Bitters hub |
| Angostura vs. Peychaud's: what's actually different? | peychaud's bitters vs angostura (480, KD19) + peychaud's bitters vs angostura bitters (390, KD28) ≈ 870 combined | Directly supports both product pages; a real, recurring comparison question |
| How many dashes of bitters should you actually use? | how much is a dash of bitters (720, KD20) | Large, low-competition, genuinely practical — a strong quick-win candidate |
| Sweet vs. dry vermouth, explained | sweet vs dry vermouth (320, KD41) · dry vermouth vs sweet vermouth (320, KD37) | Supports every vermouth product page; foundational for the hub |
| Does vermouth go bad? How to store an opened bottle | does vermouth go bad (1,600, KD24) · does vermouth need to be refrigerated (720, KD16) · how long does vermouth last (590, KD18–21) | Large combined volume, genuinely low KD, high practical value — strong quick-win cluster |
| Cocktail bitters vs. digestive/herbal bitters — not the same thing | soursop bitters (60,500, KD27 — background awareness only, not a target) · digestive bitters (5,400, KD51) | Worth one clarifying post specifically because the raw keyword data shows real customer confusion between the two categories (see Phase 1); helps the site's cocktail-bitters pages avoid getting miscategorized in a reader's mind |
| What makes a martini "dirty"? Olive brine, explained | olive in martini (1,600, KD33) · dry martini with olives (1,600, KD27) · good olives for martinis (1,300, KD17) | Ties directly to the Dirty Sue and Filthy olive/brine product pages |
| Best garnishes for classic cocktails (Old Fashioned, Manhattan, Martini) | garnish for old fashioned (590, KD34) · cocktail garnish ideas (390, KD30) · martini garnish (480, KD19) | Cross-links cherries, olives, and citrus-garnish content across the whole Garnishes hub |
| Luxardo cherries vs. regular maraschino cherries: why the price gap? | why are luxardo cherries so expensive (140, KD16) · luxardo vs maraschino cherries (170, KD24) | Directly supports the Luxardo product page; a real, recurring consumer question |
| What is Vermouth de Chambéry, and why is Dolin the only one? | vermouth de chambery (90, KD5) | Small volume but a genuinely differentiated, PDO-backed brand story worth telling regardless |

---

## What to check

1. **Filthy SKU count** — the brief's brand-hub instruction says "Filthy 3," the actual product list has 4 (Black Cherries, Blue Cheese Stuffed Olives, Olive Brine, Pimento Olives). Confirm whether a product was meant to be excluded from this batch.
2. **Noilly Prat "Original Dry" vs. "Extra Dry" labeling** — real current Noilly Prat range includes both names; confirm whether the stocked "Original Dry Vermouth" SKU is the same liquid marketed as "Extra Dry" in some channels/older US labeling, or a genuinely distinct product, before assigning `noilly prat extra dry vermouth` (720, KD15) as a secondary keyword vs. treating it as a real Phase 8 gap.
3. **"Filthy martini" dual intent** — (1,900, KD23) is real cocktail slang (an extra-dirty martini) as much as it is brand-adjacent; use carefully in Filthy product copy, don't present it as a branded search term.
4. **Cocktail-garnishes export has zero cherry/olive/onion/brine rows** — a real, confirmed data gap (see Phase 1), not a filtering choice. A dedicated "cocktail cherries" / "cocktail olives" / "cocktail onions" SEMrush pull would materially strengthen 7 of the 9 garnish product pages, which currently lean on competitor-brand files (Luxardo, Mezzetta) and WebSearch alone.
5. **No dedicated brand exports exist for Bittermens, Fee Brothers, Dirty Sue, Filthy, Tillen Farms, or Woodford Reserve (cherries)** — all six brands' sections run substantially on WebSearch-confirmed facts rather than SKU-specific search volume. Matches the flag raised for several no-export brands in the Champagne and Fine Wine batches; a dedicated pull per brand would help most for Filthy (4 SKUs, the largest single brand in this batch) and Dirty Sue.
6. **Punt e Mes is the same producer as the stocked Carpano Antica Formula** (both made by Fratelli Branca Distillerie) — listed in Phase 8 Part B as an "unstocked brand" for completeness since it's a distinct product name with its own real CSV volume, but it's arguably better framed as a Carpano-family Part A gap when the stocking conversation happens.
7. **The brief's suggested Part B examples "Luxardo's own olives" and "Tio Pepe cocktail onions" are not real products** — see the correction note at the end of Phase 8 Part A/B. Worth flagging in case this assumption resurfaces in a future batch's brief.
8. **Underberg sits in a genuine gray zone** between cocktail and digestive bitters (2,400, KD19, real CSV volume) — a stocking/categorization call, not a pure keyword-research one.
