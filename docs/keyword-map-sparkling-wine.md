# Keyword Map — Champagne & Sparkling Wine Batch (Non-Champagne: Sparkling Wine, Prosecco, Cava, Sparkling Rosé)
**Site:** Aged & Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — research report only, nothing implemented.
**Scope:** 24 products across 4 subcategories under `champagne-sparkling`: Sparkling Wine (6), Prosecco (7), Cava (6), Sparkling Rosé (5). The Champagne subcategory itself (Armand de Brignac, Dom Pérignon, Krug, Veuve Clicquot, etc.) is out of scope for this report — covered separately.
**Methodology:** Real SEMrush export data (8 CSVs: `Prosecco_all-keywords_us_2026-08-25.csv`, `cava-wine_all-keywords_us_2026-08-25.csv`, `cava-champagne_all-keywords_us_2026-08-25.csv`, `Sparkling-Rosé_all-keywords_us_2026-08-25.csv`, `sparkling-wine_all-keywords_us_2026-08-25.csv` + `(1)`, and `champagne_all-keywords_us_2026-08-25.csv` + `(1)` skimmed only for Korbel-specific rows). None of the 24 products have a dedicated brand-level export — every primary keyword below is either a real CSV row (flagged "CSV-backed") or a real brand fact confirmed via WebSearch and explicitly marked **"confirmed real via WebSearch, not volume-backed."** KD 0–25 = T1 Quick Win, 26–40 = T2 Worth Targeting, 41–55 = T3 Supporting only, 56+ generally avoided.

---

## Phase 1 — Filter Summary

Four exports, four very different noise profiles. Total dropped/reclassified across all files: **roughly 150,000+ combined search volume**, dominated by two enormous non-wine homonym collisions in the Cava file and a real news event in the Prosecco file.

**Prosecco (`Prosecco_all-keywords_us_2026-08-25.csv`, 200 rows):**
- **Kirkland/Costco glass-shattering recall cluster (~50,000+ combined volume) — dropped.** This is a real 2025 news event (Costco recalled Kirkland Signature Prosecco Valdobbiadene over bottles shattering) generating huge volume with zero purchase intent for our stocked brands: `kirkland prosecco recall` (22,200, KD30), `costco prosecco recall` (6,600, KD48), `costco recalls prosecco` (5,400, KD43), `costco kirkland prosecco valdobbiadene recall` (4,400, KD46), `kirkland valdobbiadene prosecco recall` (3,600, KD46), `costco prosecco` (2,900, KD48), `kirkland prosecco` (2,400, KD25), `prosecco price costco` (2,400, KD43), plus half a dozen smaller variants and `calories in kirkland white label prosecco` (880, KD15). None of it is brand-page-usable.
- **Restaurant/café navigational names (~13,000 combined) — dropped.** `prosecco restaurant & pizzeria` (2,400), `prosecco chicago` (1,300), `prosecco trattoria` (1,000), `prosecco cafe palm beach gardens florida` (1,000), `prosecco cafe pga commons` (1,000), `prosecco restaurant` (1,000), `prosecco fresh italian kitchen las vegas nv` (880), `prosecco cafe` (880), `syltbar prosecco` (1,000) — all local business names, not the beverage.
- **Cocktail/recipe cluster (~42,000+ combined) — flagged as cross-sell/blog material, not assigned to product pages, per instructions.** `prosecco for hugo spritz` (12,100, KD9), `prosecco cocktails` (5,400, KD25), `prosecco aperol spritz` (2,900, KD64), `aperol spritz and prosecco` (2,900, KD43), `prosecco for spritz` (2,900, KD25), `prosecco bellini` (2,400, KD31), `prosecco mimosa` (1,600, KD23), `best prosecco for mimosas` (1,300, KD25), `pearls and prosecco bridal shower` (1,300, KD25 — wedding), `negroni sbagliato with prosecco` (1,000, KD37), and ~15 more spritz/bellini/mimosa variants. Real, sizeable, genuinely useful for a blog piece — see Blog Topics below — but not product-page keywords.
- **Misspelling cluster — not noise, just spelling variants of the head term.** `prosseco`, `proseco`, `procecco`, `persecco`, `presecco`, `peseco wine`, `per seco wine`, `perseco`, `preseco`, `processco` all independently carry 1,000–3,600 volume — SEMrush fuzzy-matches them to "prosecco" intent. Rolled into the category head-term note rather than assigned individually.
- **Unstocked-competitor brand rows** (Zonin, Riondo, Cupcake, Josh, Avissi, Lunetta, La Vostra, Asolo, Coppola, Maschio, Jeio, Zardetto, Cinzano, La Gioiosa, Belletti, Brilla, Borrasca, Chloe, Kim Crawford, Viarae non-alcoholic) were not filtered — fed into Phase 8 Part B instead.

**Cava (`cava-wine_all-keywords_us_2026-08-25.csv` + `cava-champagne_all-keywords_us_2026-08-25.csv`, 100 rows each, heavily overlapping — deduped):**
This was by far the noisiest file in the batch — **"cava" collides with three unrelated real things simultaneously.**
- **Cleveland Cavaliers NBA homonym (~8,000 combined) — dropped.** `did the cavs win last night` (2,400), `did the cavs win` (1,300), `did cavs win last night` (1,000), `did the cavs win tonight` (590), `cavs win` (320), `who's winning the cavs game` (260), `when did the cavs win the championship` (260), plus several more "cavs" variants — pure basketball, zero wine intent.
- **Wine caves / cellar tourism / restaurant names (~13,000 combined, the single largest noise cluster in the Cava file) — dropped.** `grotto wood-fired grill and wine cave eureka springs` (2,400) and its menu/photos variants, `wine cave` (1,900), `gloria ferrer champagne caves` (1,900 — a real winery cave tour, unrelated to Cava the wine), `the wine cave` (1,000), `bella vineyards and wine caves` (880), `la cave wine and food hideaway` (720), `napa valley wine caves` (480), `beer cave wine & spirits` (210), `total wine bee cave` (320 — TX location name), `champagne taittinger visites des caves de champagne reims` (260 — French cellar tours). None of this is about the Spanish sparkling wine.
- **CAVA the Mediterranean fast-casual restaurant chain (~1,800 combined) — dropped.** `what kind of food is cava` (590), `cava wine bar` (590), `cava wine bar & wood grille` (390), `what oil does cava use` (210) — this is the NASDAQ-listed restaurant chain, not the wine.
- **Cavas Wine Lodge, Mendoza (~1,470 combined) — dropped.** `cavas wine lodge` (1,000), `cavas wine lodge argentina` (260), `cavas wine lodge mendoza` (210) — a real Argentine luxury hotel, unrelated to Spanish Cava.
- **`caca wine` (18,100, KD22) — flagged, not used.** Almost certainly a SEMrush fuzzy-match/typo capture of "cava wine," but the literal string is a different (crude) word in Spanish; not a usable keyword regardless of volume.
- **Bare `cavas` (49,500, KD76) and its punctuation variants (`cava'`, `cavas]`, `cavas.`) — not assigned.** Dominated by ambiguous entity results (Cavaliers, the restaurant chain, plurals of "cave") and prohibitively high KD, the same treatment the sibling wine reports gave bare `port`/`rosé`.
- **Result: zero brand-specific rows survived for any of the 6 stocked Cava products** (Codorníu, Freixenet, Gramona, Juvé & Camps, Segura Viudas ×2) — the only near-brand hit in either file is `cava wine freixenet` (260, KD25) and an unrelated small producer, `papet del mas cava brut` (210, KD10, not stocked). Every Cava product below leans on category-level terms plus WebSearch-confirmed brand facts.

**Sparkling Rosé (`Sparkling-Rosé_all-keywords_us_2026-08-25.csv`, 100 rows):**
- **Jewelry/pet-product homonyms (~13,800 combined) — dropped.** `personalized sparkling rose gold glitter dog collar with leash` (9,900, KD19 — a dog collar), `sparkly rose` (2,400, KD45 — likely nail/jewelry), `bisoulovely mackenzie sparkle rose gold band` (1,000 — a ring), `rose gold sparkle` (480 — color/jewelry).
- **Adjacent-but-different products — dropped.** `tuscanini rose sparkling non alcoholic grape juice` (320 — kosher grape juice, not wine, same treatment as the sherry-vinegar/ice-cream noise in the Fine Wine batch), `welch's sparkling rose` (260 — Welch's grape juice brand), `moment strawberry rose botanical sparkling drink` (260 — a non-alcoholic botanical beverage), `xxl sparkling rose moscato brand website` (320 — low-quality/unclear).
- **Unstocked-competitor brand rows** (Belaire, Luc Belaire, Avaline, McBride Sisters, Bartenura, Banfi Rosa Regale, Stella Rosa, Mumm) fed into Phase 8 Part B rather than dropped.

**Sparkling Wine — general (`sparkling-wine_all-keywords_us_2026-08-25.csv` [100 rows, almost entirely "is champagne/sparkling wine the same" generic informational — excellent FAQ fodder, no noise to speak of] + `(1).csv` [200 rows, broader category + brand terms]):**
- **Champagne-generic noise, skimmed and dropped/ignored per the same categories the sibling Champagne report handles** (song lyrics — "Champagne Problems," "Champagne Supernova"; color/dress/glassware — `champagne color`, `champagne dress`, `champagne bridesmaid dresses`; region tourism). Not itemized here since this report only skimmed the Champagne exports for Korbel-specific rows.
- **Other drops:** `wine walmart` (590, KD42 — generic retailer nav), `lyre's non alcoholic classico sparkling wine 4 pack` (2,400 — a specific unrelated non-alc product), `sparkli sweets` (1,000, KD28 — unclear/likely artifact), `play champagne` (3,600, KD46 — ambiguous, likely unrelated entity).
- **Real signal kept:** the entire "is X the same as champagne" cluster (`is sparkling wine champagne` 1,900/KD15, `is champagne sparkling wine` 1,300/KD15, `what's the difference between champagne and sparkling wine` 1,600/KD4, etc.) is genuine, low-KD, high-value informational demand — used extensively below for hub FAQs and blog topics.

**Champagne exports (skimmed only, per instructions, for Korbel):** Both `champagne_all-keywords_us_2026-08-25.csv` (100 rows) and its `(1)` twin (300 rows) are dominated by the same noise categories flagged in the sibling Champagne report (Taylor Swift's "Champagne Problems," Oasis's "Champagne Supernova," champagne-as-color/dress, glassware, mimosa recipes, regional tourism) — not re-itemized here. **The one genuinely useful find:** a real, exact-match Korbel cluster surfaced despite Korbel not being true Champagne — see product #10 below.

---

## Subcategory Hub Keyword Tables

These 4 hub pages already exist under `champagne-sparkling` on the site.

### Sparkling Wine — `/champagne-sparkling/sparkling-wine/`
| Term | Vol | KD |
|---|---|---|
| sparkling wine | 27,100 | 23 |
| italian sparkling wine | 6,600 | 7 |
| spanish sparkling wine | 5,400 | 13 |
| sparkling red wine | 4,400 | 16 |
| spumante | 4,400 | 15 |
| sparkling white wine | 3,600 | 13 |
| non alcoholic sparkling wine | 3,600 | 20 |
| california sparkling wine | 1,900 | 12 |
| french sparkling wine | 1,900 | 7 |
| brut wine | 1,600 | 21 |
| best sparkling wine | 1,000 | 14 |

**FAQs:** "What's the difference between champagne and sparkling wine?" (1,600, KD4) · "Is sparkling wine the same as champagne?" (1,000, KD5) · "Is prosecco a sparkling wine?" (480, KD19) · "What is brut wine?" (320, KD17)
**Note:** the informational "is X the same as champagne" cluster across this file and the champagne skim is genuinely huge and low-KD — a strong pillar-page opportunity (see Blog Topics).

### Prosecco — `/champagne-sparkling/prosecco/`
| Term | Vol | KD |
|---|---|---|
| prosecco | 135,000 | 19 |
| prosecco wine | 22,200 | 29 |
| what is prosecco | 12,100 | 15 |
| prosecco vs champagne | 8,100 | 23 |
| is prosecco champagne | 8,100 | 25 |
| best prosecco | 3,600 | 24 |
| what is prosecco wine | 3,600 | 16 |
| is prosecco sweet | 1,900 | 6 |
| champagne vs prosecco | 1,900 | 22 |
| prosecco sparkling wine | 1,900 | 12 |
| italian prosecco | 1,600 | 9 |
| prosecco brands | 1,300 | 11 |
| difference between prosecco and champagne | 1,300 | 16 |
| prosecco doc | 1,300 | 20 |

**FAQs:** "Is prosecco sweet?" (1,900, KD6) · "What's the difference between champagne and prosecco?" (2,400, KD20) · "Is prosecco the same as champagne?" (1,000, KD18)

### Cava — `/champagne-sparkling/cava/`
| Term | Vol | KD |
|---|---|---|
| cava wine | 5,400 | 34 |
| spanish sparkling wine | 5,400 | 13 |
| cava sparkling wine | 2,900 | 24 |
| cava champagne (comparison intent) | 1,900 | 10 |
| cava brut | 1,300 | 11 |
| cava alcohol | 1,300 | 15 |
| sparkling cava | 1,000 | 19 |
| what is cava wine | 720 | 25 |
| spanish cava | 720 | 12 |
| best cava | 320 | 16 |
| best cava wine | 320 | 14 |
| cava vs champagne | 320 | 13 |
| catalan sparkling wine | 320 | 11 |

**FAQs:** "What is cava wine?" (720, KD25) · "What's the difference between cava and champagne?" (`cava vs champagne`, 320, KD13) · "Where is cava made?" (210, KD24)
**Note:** this is the thinnest, noisiest export in the batch — no brand or style-name volume at all beyond one weak Freixenet hit. Category copy carries almost the entire weight here.

### Sparkling Rosé — `/champagne-sparkling/sparkling-rose/`
| Term | Vol | KD |
|---|---|---|
| sparkling rose | 4,400 | 7 |
| rose fizzy wine | 4,400 | 18 |
| sparkling white wine | 3,600 | 12 |
| sparkling rose wine | 2,400 | 17 |
| rose sparkling wine | 1,300 | 12 |
| sparkling sweet wine | 1,300 | 8 |
| pink bubbly | 1,000 | 19 |
| best sparkling wine | 1,000 | 11 |
| sparkling roses | 720 | 8 |
| sparkling rosé | 590 | 26 |
| french sparkling rose | 590 | 4 |
| pink sparkling wine | 390 | 9 |
| italian sparkling rose | 390 | 7 |
| non alcoholic sparkling rose | 480 | 21 |

**FAQs:** none of the exact "is sparkling rosé sweet" phrasing surfaced in this export with usable volume; the adjacent still-rosé informational cluster (`is rose wine sweet`, 880, KD7, from the Fine Wine batch's Rosé export) is the closest real analog and is a reasonable cross-reference for hub copy, not a forced FAQ here.

---

## Per-Product Keyword Assignment

### SPARKLING WINE (6 products)

**prod-champ-26. Albert Bichot Crémant de Bourgogne Brut Réserve**
Primary: `albert bichot cremant de bourgogne` — confirmed real via WebSearch, not volume-backed. (Bichot family in Burgundy since 1350; the merchant house was founded 1831 by Bernard Bichot in Monthélie; the modern Maison Albert Bichot was shaped by his grandson at the turn of the 20th century. This Brut Réserve is organically farmed, a 60% Pinot Noir / 40% Chardonnay blend with oak-aged base wine and 15% reserve wines.)
Secondary (5): sparkling wine (27,100, KD23 — background) · french sparkling wine (1,900, KD7) · brut wine (1,600, KD21) · what is the difference between champagne and sparkling wine (1,600, KD4) · non alcoholic sparkling wine (3,600, KD20 — n/a, drop if not applicable; use `best sparkling wine` 1,000/KD14 instead)
FAQ: none Bichot-specific; category-level "What's the difference between champagne and sparkling wine?" applies, and pairs with a genuine content gap — see the Crémant note below.
**Data-depth flag:** zero "crémant" search volume of any kind surfaced anywhere across all 8 exports in this batch, despite Crémant de Bourgogne/Alsace being real, growing categories carried by 3 of our 24 SKUs (this product, Louis Bouillot, and both Lucien Albrecht SKUs). Worth a dedicated "crémant" SEMrush pull if you want this cluster to carry real volume rather than leaning entirely on the generic sparkling-wine pool.

**prod-champ-28. Chandon California Brut Classic**
Primary: `chandon sparkling wine` (720, KD17) — CSV-backed direct hit.
Secondary (5): chandon brut sparkling wine (480, KD9) · sparkling wine (27,100, KD23 — background) · california sparkling wine (1,900, KD12) · brut sparkling wine (1,300, KD19) · best sparkling wine (1,000, KD14)
FAQ: "What's the difference between champagne and sparkling wine?" (1,600, KD4).
**Homonym flag:** do not use bare `chandon champagne` (5,400, KD20) for this product — every one of those rows in the Champagne export refers to **Moët & Chandon** Champagne (a different LVMH sub-brand carried elsewhere on the site), not Domaine Chandon's California sparkling wine. Keep this product's keywords scoped to the "chandon sparkling wine" / "chandon brut sparkling wine" phrasing only.

**prod-champ-35. Korbel Brut California Champagne**
Primary: `korbel brut california champagne` (2,900, KD21) — CSV-backed **exact-match** hit, found in the Champagne export despite Korbel not being true Champagne.
Secondary (5): korbel champagne (12,100, KD34) · korbel sparkling champagne (4,400, KD32) · california champagne korbel (4,400, KD29) · korbel brut champagne (3,600, KD15) · sparkling wine (27,100, KD23 — background)
FAQ: "Why is Korbel labeled 'Champagne' if it's from California?" — real, useful, and factual, confirmed via WebSearch: the US and EU signed a 2006 wine-trade agreement banning new use of "Champagne" on non-French wine, but it carried a **grandfather clause** protecting US producers making sparkling wine labeled "Champagne" before that date — Korbel, labeling its wine "California Champagne" since the late 1800s, is one of the grandfathered brands. Federal rules also require the true place of origin (here, "California") to appear alongside the semi-generic term, which is exactly how Korbel's label reads. This is a strong, honest differentiator worth its own FAQ block.
Second FAQ candidate: "What's the difference between champagne and sparkling wine?" (1,600, KD4) — good general-education pairing.
**Data-depth flag:** Korbel's real range extends to Extra Dry, Brut Rosé, and a vintage "Natural'" bottling (all confirmed via Korbel's own site) beyond the single Brut SKU stocked — see Phase 8 Part A.

**prod-champ-39. Louis Bouillot Perle de Vigne Crémant de Bourgogne**
Primary: `louis bouillot perle de vigne` — confirmed real via WebSearch, not volume-backed. (Founded 1877 in Nuits-Saint-Georges by Jean Bouillot, one of the era's few merchants specializing in Crémant de Bourgogne; Perle de Vigne is the house's most universal, broadly appealing cuvée, blending Burgundy's four grapes — Chardonnay, Pinot Noir, Aligoté, Gamay — with a single fermentation/single year of aging for freshness. Crémant de Bourgogne itself became an AOC in 1975.)
Secondary (5): sparkling wine (27,100, KD23 — background) · french sparkling wine (1,900, KD7) · brut wine (1,600, KD21) · what is the difference between champagne and sparkling wine (1,600, KD4) · sparkling wine from france (720, KD9)
FAQ: none forced; shares the same "no crémant volume in this batch" flag as Albert Bichot above.

**prod-champ-41. Lucien Albrecht Crémant d'Alsace Brut**
Primary: `lucien albrecht cremant d'alsace` — confirmed real via WebSearch, not volume-backed. (The Albrecht family's Alsace winegrowing history traces to 1425; Maison Lucien Albrecht itself dates to 1698 in Orschwihr. Lucien Albrecht was one of the pioneering houses that pushed for AOC Crémant d'Alsace status, achieved in 1976.)
Secondary (5): sparkling wine (27,100, KD23 — background) · french sparkling wine (1,900, KD7) · brut wine (1,600, KD21) · what is the difference between champagne and sparkling wine (1,600, KD4) · sparkling white wine (3,600, KD13)
FAQ: none forced; see the combined Lucien Albrecht brand hub below.

**prod-champ-50. Schramsberg Blanc de Blancs Sparkling Wine**
Primary: `schramsberg blanc de blancs` — confirmed real via WebSearch, not volume-backed. (Jack and Jamie Davies bought the historic Schramsberg property in 1965 and set out to make true méthode champenoise sparkling wine in Napa; their 1969 Blanc de Blancs was served at President Nixon's 1972 "Toast to Peace" state dinner with Premier Zhou Enlai in Beijing — the first American wine ever served at a US presidential state function abroad, a tradition every president since has continued.)
Secondary (5): sparkling wine (27,100, KD23 — background) · california sparkling wine (1,900, KD12) · american sparkling wine (880, KD7) · best sparkling wine (1,000, KD14) · sparkling wine california (720, KD18)
FAQ: none Schramsberg-specific PAA found; the Nixon/Toast-to-Peace story is strong factual copy regardless of keyword volume.

---

### PROSECCO (7 products)

**prod-champ-27. Bottega Gold Prosecco**
Primary: `bottega gold prosecco` (720, KD15) — CSV-backed direct hit.
Secondary (5): prosecco (135,000, KD19 — background) · what is prosecco (12,100, KD15) · best prosecco (3,600, KD24) · italian prosecco (1,600, KD9) · prosecco brands (1,300, KD11)
FAQ: none Bottega-specific; category-level "Is prosecco sweet?" (1,900, KD6) applies.
Note: the gold bottle (representing the gilded tiles of Venice's St. Mark's Basilica) dates to 2004 and is the original golden-bottle sparkling wine — real, WebSearch-confirmed, strong visual/copy hook.

**prod-champ-36. La Marca Luminore Prosecco**
Primary: `la marca luminore prosecco` — confirmed real via WebSearch, not volume-backed (Luminore is La Marca's premium Conegliano Valdobbiadene DOCG tier, one step up from the DOC-level base Prosecco).
Secondary (5): la marca prosecco (33,100, KD32 — shared brand anchor) · lamarca prosecco (22,200, KD22) · la marca prosecco wine (1,300, KD21) · what is prosecco (12,100, KD15) · valdobbiadene prosecco superiore (880, KD16 — matches Luminore's real DOCG tier)
FAQ: none forced; see combined La Marca brand hub below.

**prod-champ-38. La Marca Prosecco**
Primary: `la marca prosecco` (33,100, KD32) — CSV-backed, by far the single largest brand-specific hit in this entire batch.
Secondary (5): lamarca prosecco (22,200, KD22) · lamarca prosecco wine (3,600, KD32) · la marca prosecco wine (1,300, KD21) · lamarca prosecco price (1,300, KD7) · la marca prosecco price (880, KD11)
FAQ: none La Marca-Prosecco-specific PAA; category-level "What is prosecco?" applies. Note: La Marca is the largest exporter of Prosecco into the US, founded 1968 as a cooperative of Veneto/Friuli-Venezia Giulia growers — real, WebSearch-confirmed.

**prod-champ-42. Mionetto Prosecco Brut**
Primary: `mionetto prosecco brut` (3,600, KD29) — CSV-backed direct hit.
Secondary (5): mionetto prosecco (12,100, KD38) · mionetto prosecco doc (1,300, KD28) · mionetto brut prosecco (1,000, KD28) · prosecco doc brut mionetto (1,000, KD28) · mionetto prosecco price (720, KD24)
FAQ: "Is prosecco sweet?" (1,900, KD6) — Brut is the driest style, good honest answer opportunity.
Note: Mionetto was founded 1887 by master winemaker Francesco Mionetto in Valdobbiadene, and is the only major Prosecco producer that bottles to order rather than ahead of demand — a real freshness-focused differentiator, WebSearch-confirmed.

**prod-champ-45. Nino Franco Rustico Valdobbiadene Prosecco Superiore**
Primary: `valdobbiadene prosecco superiore` (880, KD16) — CSV-backed, closest real category match (no Nino-Franco-specific volume in this export).
Secondary (5): prosecco superiore di valdobbiadene (720, KD8) · what is prosecco wine (3,600, KD16) · italian prosecco (1,600, KD9) · best prosecco (3,600, KD24) · prosecco doc (1,300, KD20 — background only; flag below)
FAQ: none Rustico-specific PAA found; a genuine, real informational gap worth writing anyway: "What's the difference between Prosecco DOC and Prosecco Superiore DOCG?" Rustico is a DOCG wine from the more restrictive, hillside Conegliano-Valdobbiadene zone, not the broader plains-based DOC.
**Historical flag:** Nino Franco, founded 1919 by Antonio Franco, is directly credited (via grandson Primo Franco's leadership from 1982) with helping establish the modern reputation and quality bar of Valdobbiadene DOCG Prosecco Superiore — a real, WebSearch-confirmed positioning claim worth using in product copy.

**prod-champ-48. Ruffino Prosecco**
Primary: `ruffino prosecco` (4,400, KD19) — CSV-backed strong hit.
Secondary (5): prosecco ruffino (880, KD14) · best prosecco (3,600, KD24) · prosecco brands (1,300, KD11) · what is prosecco wine (3,600, KD16) · italian prosecco (1,600, KD9)
FAQ: none Ruffino-specific PAA; category-level applies.
Note: Ruffino, founded 1877 in Tuscany by cousins Ilario and Leopoldo Ruffino and long famous for Chianti, only introduced its first-ever Prosecco DOC in 2011 — real, WebSearch-confirmed, a useful "even the Chianti house makes Prosecco" hook.

**prod-champ-49. Santa Margherita Prosecco Superiore DOCG**
Primary: `santa margherita prosecco` (1,000, KD6) — CSV-backed direct hit.
Secondary (5): valdobbiadene prosecco superiore (880, KD16) · prosecco superiore di valdobbiadene (720, KD8) · best prosecco (3,600, KD24) · italian prosecco (1,600, KD9) · prosecco doc (1,300, KD20 — background; flag DOC vs DOCG)
FAQ: "What's the difference between Prosecco DOC and DOCG?" — shared with Nino Franco above; Santa Margherita has a particularly strong claim to this answer, having begun producing in the Conegliano-Valdobbiadene zone in 1952 (founder Count Gaetano Marzotto) and celebrating 70 years of Prosecco Superiore DOCG production in 2022 — real, WebSearch-confirmed.

---

### CAVA (6 products)

**prod-champ-30. Codorníu Clásico Brut Cava**
Primary: `codorniu clasico brut cava` — confirmed real via WebSearch, not volume-backed. (Codorníu traces to 1551 near Barcelona — one of the oldest continuously operating companies in Spain — and in 1872 Josep Raventós made the first-ever bottle of Cava there using the traditional method; Clásico uses the three classic Penedès varieties, Macabeo/Xarel·lo/Parellada, aged 9 months on lees.)
Secondary (5): cava wine (5,400, KD34) · cava brut (1,300, KD11) · spanish cava (720, KD12) · what is cava wine (720, KD25) · brut cava (590, KD7)
FAQ: "What is cava wine?" (720, KD25).
Note: Codorníu is directly, verifiably the inventor of Cava as a category — the strongest brand-history hook in this entire subcategory.

**prod-champ-31. Freixenet Cordon Negro Brut Cava**
Primary: `cava wine freixenet` (260, KD25) — CSV-backed, the only near-brand-specific Cava hit found in either Cava export.
Secondary (5): cava wine (5,400, KD34) · spanish cava (720, KD12) · cava brut (1,300, KD11) · brut cava (590, KD7) · best cava (320, KD16)
FAQ: "What is cava wine?" (720, KD25).
Note: Cordón Negro launched in 1974 (its 50th anniversary was 2024), created by José Ferrer with its now-iconic frosted-black-matte bottle and minimalist gold label; it was also the first Cava fermented at a controlled temperature. By 1985 it had made Freixenet the top-selling Cava producer worldwide. All WebSearch-confirmed.
**Brand-halo flag:** `freixenet prosecco` (1,600, KD15) is a real, sizeable CSV hit — but it's for a Freixenet Prosecco line we don't stock, not this Cava. Usable only as background brand-recognition context, not a direct secondary for this product page.

**prod-champ-32. Freixenet Italian Rosé Sparkling Wine** *(Sparkling Rosé subcategory — see below)*

**prod-champ-33. Gramona Imperial Gran Reserva Cava**
Primary: `gramona imperial gran reserva cava` — confirmed real via WebSearch, not volume-backed. (Gramona has made wine in the Penedès since 1816, formalized as a family winery in 1881; the Gramona name first appeared on "Cava Champagne" bottles in 1921. Imperial Gran Reserva ages roughly 60 months on lees — an unusually long aging period even by Gran Reserva standards.)
Secondary (5): cava wine (5,400, KD34) · best cava wine (320, KD14) · cava brut (1,300, KD11) · spanish cava wine (320, KD9) · what is cava wine (720, KD25)
FAQ: "What is cava wine?" (720, KD25).
**Gap-analysis caveat:** Gramona's broader range (including the prestige III Lustros Brut Nature Gran Reserva cuvée) is real and WebSearch-confirmed to exist, but I did not find independent CSV or WebSearch volume data specific enough to responsibly quantify a "missing tier" recommendation the way I could for Freixenet/Mionetto/Segura Viudas below — flagged as a thinner finding in Phase 8 Part A.

**prod-champ-34. Juvé & Camps Reserva de la Familia Cava**
Primary: `juve camps reserva de la familia` — confirmed real via WebSearch, not volume-backed. (The Juvé family has grown grapes in Sant Sadurní d'Anoia since 1796; Joan Juvé married Teresa Camps in 1921 and released the first sparkling wine under the Juvé name that year. Reserva de la Familia was created in the mid-1970s — first released 1978 — originally just for the family's own table, and is today both the world's best-selling Cava Gran Reserva Brut Nature and the Cava regularly served at official Spanish royal-family banquets.)
Secondary (5): cava wine (5,400, KD34) · best cava (320, KD16) · cava brut (1,300, KD11) · spanish cava (720, KD12) · sparkling cava (1,000, KD19)
FAQ: "What is cava wine?" (720, KD25).
**Gap-analysis caveat:** same as Gramona — Juvé & Camps' broader range (Brut Nature, Rosé, Milesimé) is understood to be real but wasn't independently confirmed via WebSearch this session; flagged rather than asserted.

**prod-champ-51. Segura Viudas Brut Reserva Cava**
Primary: `segura viudas brut reserva cava` — confirmed real via WebSearch, not volume-backed. (Segura Viudas' Heredad estate buildings date as far back as the 11th century — originally a military watchtower, later a Catalan farmhouse; the modern winery and vineyards were established in 1959 in Torrelavit, Penedès.)
Secondary (5): cava wine (5,400, KD34) · cava brut (1,300, KD11) · spanish cava (720, KD12) · best cava (320, KD16) · brut cava (590, KD7)
FAQ: "What is cava wine?" (720, KD25).

**prod-champ-52. Segura Viudas Heredad Reserva Cava**
Primary: shared brand anchor with Brut Reserva above — differentiate via the "Heredad" tier name in title/copy.
Secondary (5): cava wine (5,400, KD34) · best cava wine (320, KD14) · cava brands (260, KD17) · spanish cava wine (320, KD9) · sparkling cava (1,000, KD19)
FAQ: none forced (avoid duplicate FAQ with the Brut Reserva page). Note: Reserva Heredad selects only the best wines of each vintage and ages a minimum of 24 months on lees, positioning it above the standard Brut Reserva in the house hierarchy — real, WebSearch-confirmed.

---

### SPARKLING ROSÉ (5 products)

**prod-champ-29. Chandon California Brut Rosé**
Primary: `chandon sparkling rose` (210, KD14) — CSV-backed direct hit.
Secondary (5): chandon rose sparkling wine (170, KD13) · sparkling rose (4,400, KD7) · sparkling rose wine (2,400, KD17) · rose sparkling wine (1,300, KD12) · pink sparkling wine (390, KD9)
FAQ: none forced; see combined Chandon note under the Brut Classic entry above regarding the Moët & Chandon homonym.

**prod-champ-32. Freixenet Italian Rosé Sparkling Wine**
Primary: `freixenet italian rose` — confirmed real via WebSearch, not volume-backed.
Secondary (5): sparkling rose (4,400, KD7) · italian sparkling rose (390, KD7) · pink sparkling wine (390, KD9) · rose fizzy wine (4,400, KD18) · sparkling rose wine (2,400, KD17)
FAQ: none forced.
Note: same Freixenet brand-halo caveat as Cordón Negro above — `freixenet prosecco` (1,600, KD15) is real volume but for a different, unstocked product line.

**prod-champ-37. La Marca Prosecco Rosé**
Primary: `la marca prosecco rose` (1,900, KD9) — CSV-backed strong hit.
Secondary (5): lamarca prosecco rose (1,900, KD10) · sparkling rose (4,400, KD7) · sparkling rose wine (2,400, KD17) · rose fizzy wine (4,400, KD18) · rose sparkling wine (1,300, KD12)
FAQ: none La-Marca-Rosé-specific PAA; skip rather than force.

**prod-champ-40. Lucien Albrecht Crémant d'Alsace Brut Rosé**
Primary: `lucien albrecht cremant d'alsace rose` — confirmed real via WebSearch, not volume-backed.
Secondary (5): sparkling rose (4,400, KD7) · french sparkling rose (590, KD4) · french sparkling rose wine (590, KD5) · sparkling rose wine (2,400, KD17) · rose sparkling wine (1,300, KD12)
FAQ: none forced; see combined Lucien Albrecht brand hub below.

**prod-champ-43. Mionetto Prosecco Rosé**
Primary: `mionetto prosecco rose` — confirmed real via WebSearch, not volume-backed (no exact-phrase CSV row surfaced for the Rosé specifically, unlike the strong Brut hits above).
Secondary (5): mionetto prosecco (12,100, KD38 — brand-halo background) · sparkling rose (4,400, KD7) · sparkling rose wine (2,400, KD17) · rose sparkling wine (1,300, KD12) · italian sparkling rose (390, KD7)
FAQ: none forced.

---

## Brand Hub Drafts

Every brand with 2+ stocked SKUs in this batch — six qualify, two more than the three named in the brief (Chandon and Freixenet each also have exactly 2 stocked SKUs spanning two subcategories).

### La Marca
**categoryLabel:** Prosecco & Sparkling Rosé
**Hook:** Founded in 1968 as a cooperative of Veneto and Friuli-Venezia Giulia growers, La Marca takes its name from "La Marca Trevigiana," the historic zone at the heart of Italy's Prosecco country. Today the cooperative spans nine wineries and roughly 9,000 hectares of vineyard, and is the single largest exporter of Prosecco into the United States.
**Secondary keywords:** la marca prosecco (33,100, KD32) · lamarca prosecco (22,200, KD22) · lamarca prosecco wine (3,600, KD32) · la marca prosecco rose (1,900, KD9) · lamarca prosecco rose (1,900, KD10)
**FAQs:**
1. "What's the difference between La Marca's Prosecco and Luminore?" — The base Prosecco is DOC-level, made under the broader Prosecco appellation; Luminore is La Marca's premium tier from the more restrictive, hillside Conegliano Valdobbiadene DOCG zone.
2. "Is prosecco sweet?" (1,900, KD6) — La Marca's core styles run Brut to Extra Dry, made using the Charmat (tank) method that preserves fresh fruit character over deep sweetness.
3. "Is La Marca Prosecco Rosé the same wine as the Brut?" — No; the Rosé blends in a small amount of red grape (typically Pinot Noir) for color and red-fruit character, a distinct SKU from the white Prosecco and Luminore.

### Segura Viudas
**categoryLabel:** Cava
**Hook:** The Segura Viudas estate — its Heredad buildings dating back to an 11th-century military watchtower later converted into a Catalan farmhouse — became a modern winery in 1959 in Torrelavit, in the heart of the Penedès. The house today produces a full range of traditional-method Cava, from everyday Brut Reserva to the estate-selected top tier, Reserva Heredad.
**Secondary keywords:** cava wine (5,400, KD34) · cava brut (1,300, KD11) · spanish cava (720, KD12) · best cava (320, KD16) · sparkling cava (1,000, KD19)
**FAQs:**
1. "What's the difference between Segura Viudas Brut Reserva and Heredad Reserva?" — Heredad Reserva selects only the best wines from each vintage and ages a minimum of 24 months on the lees — longer and more selective than the standard Brut Reserva, positioning it as the house's flagship.
2. "What is cava wine?" (720, KD25) — A Spanish sparkling wine made via the same traditional (bottle-fermented) method as Champagne, primarily from the Macabeo, Xarel·lo, and Parellada grapes of Catalonia's Penedès region.
(Note: Segura Viudas' broader US range also includes Aria Estate Brut/Extra Dry and a Brut Rosé — real, WebSearch-confirmed, not currently stocked; see Phase 8 below.)

### Lucien Albrecht
**categoryLabel:** Sparkling Wine & Sparkling Rosé (Crémant d'Alsace)
**Hook:** The Albrecht family's Alsace winegrowing roots trace to 1425; Maison Lucien Albrecht itself was founded in 1698 when Balthazar Albrecht settled in Orschwihr, south of Colmar. The house was one of the pioneering producers pushing for a formal Crémant d'Alsace appellation, achieved in 1976 — and remains family-owned and managed today.
**Secondary keywords:** sparkling wine (27,100, KD23) · french sparkling wine (1,900, KD7) · brut wine (1,600, KD21) · sparkling rose (4,400, KD7) · french sparkling rose (590, KD4)
**FAQs:**
1. "What is Crémant d'Alsace?" — Alsace's answer to Champagne: a traditional-method (bottle-fermented) sparkling wine made from Alsatian grapes — chiefly Pinot Blanc, Pinot Auxerrois, Pinot Gris, and Riesling for the white styles — under its own AOC since 1976.
2. "What's the difference between crémant and champagne?" — Both use the identical traditional (bottle-fermentation) method; the difference is purely geographic and grape-based — Champagne must come from the Champagne region using its permitted grapes, while Crémant d'Alsace comes from Alsace's own varieties, typically at a friendlier price point.
3. "Is Lucien Albrecht's rosé different from the Brut?" — Yes; the Brut Rosé incorporates Pinot Noir for color and red-berry character, distinct from the white (blanc) Crémant d'Alsace Brut.
**Data-depth flag:** zero "crémant" keyword volume surfaced anywhere in this batch's 8 exports — see the note under Albert Bichot above. A dedicated pull covering "crémant d'alsace" / "crémant de bourgogne" specifically would materially strengthen this hub.

### Mionetto
**categoryLabel:** Prosecco & Sparkling Rosé
**Hook:** Founded in 1887 by master winemaker Francesco Mionetto in Valdobbiadene — the historic, now UNESCO World Heritage heart of Prosecco country — Mionetto is distinctive for bottling to order rather than stockpiling ahead of demand, a freshness-first practice the house has maintained since its earliest days.
**Secondary keywords:** mionetto prosecco (12,100, KD38) · mionetto prosecco brut (3,600, KD29) · mionetto prosecco doc (1,300, KD28) · mionetto brut prosecco (1,000, KD28) · sparkling rose (4,400, KD7)
**FAQs:**
1. "Is prosecco sweet?" (1,900, KD6) — Mionetto's Brut is the driest style in the range; Extra Dry (not currently stocked) carries noticeably more residual sugar despite the counterintuitive name.
2. "What's the difference between Mionetto's Prosecco Brut and Prosecco Rosé?" — The Rosé blends in a portion of red grape for color and red-fruit character; both are DOC-level, made using the Charmat (tank) method.
(See Phase 8 below — Mionetto's real range also extends to a Valdobbiadene Prosecco Superiore DOCG tier, a step above what we stock.)

### Chandon
**categoryLabel:** Sparkling Wine & Sparkling Rosé
**Hook:** Founded in 1973 in Yountville by former Moët et Chandon market-development specialist John Wright, in partnership with the French Champagne house, Domaine Chandon California was the first French-owned sparkling wine producer in Napa Valley — deliberately named to signal both its French pedigree and its distinct, single-vineyard-driven California style.
**Secondary keywords:** chandon sparkling wine (720, KD17) · chandon brut sparkling wine (480, KD9) · chandon sparkling rose (210, KD14) · sparkling wine (27,100, KD23) · california sparkling wine (1,900, KD12)
**FAQs:**
1. "Is Chandon California the same as Moët & Chandon Champagne?" — Related but distinct: Chandon California is a sister house under the same Moët Hennessy ownership, making sparkling wine from Napa Valley (Los Carneros, Mt. Veeder, Yountville) fruit rather than true French Champagne.
2. "What's the difference between champagne and sparkling wine?" (1,600, KD4) — Chandon's Brut Classic and Brut Rosé are made using the same traditional method as Champagne, just outside the legally protected Champagne region.
**Homonym flag:** keep this hub's copy strictly to "chandon sparkling wine" phrasing — bare `chandon champagne` (5,400, KD20) in the Champagne export is entirely about Moët & Chandon, not this brand.
(See Phase 8 below — Chandon's real range also includes the prestige Étoile tier (Brut, Rosé, Tête de Cuvée) and a Réserve Pinot Noir Rosé, none currently stocked.)

### Freixenet
**categoryLabel:** Cava & Sparkling Rosé
**Hook:** Founded and bottling under its own name from 1914 by Pedro Ferrer Bosch and Dolors Sala Vivé, Freixenet became a household name in 1974 with the launch of Cordón Negro — José Ferrer's frosted-black-matte-bottle Cava that was the first Cava fermented at a controlled temperature. It became the top-selling imported sparkling wine in the US by 1983 and propelled Freixenet to the world's #1 Cava producer by 1985.
**Secondary keywords:** cava wine (5,400, KD34) · spanish cava (720, KD12) · cava wine freixenet (260, KD25) · sparkling rose (4,400, KD7) · italian sparkling rose (390, KD7)
**FAQs:**
1. "What makes Cordón Negro's bottle black?" — A deliberate 1974 design choice by José Ferrer; the frosted black-matte glass was a stylistic break from traditional Cava packaging and remains the brand's most recognizable signature 50 years later.
2. "What is cava wine?" (720, KD25) — A traditional-method Spanish sparkling wine from Catalonia's Penedès region, primarily Macabeo, Xarel·lo, and Parellada grapes.
(See Phase 8 below — Freixenet's real range also includes Carta Nevada (Brut, Semi-Seco, Seco, Sweet tiers) and the premium Elyssia line, plus a real, **CSV-backed** Prosecco line we don't currently stock at all.)

---

## Phase 8 — Gap Analysis

### Part A — Real missing expressions within brands already stocked

| Brand | Stocked | Real, confirmed missing expression(s) | Keyword signal |
|---|---|---|---|
| Freixenet | Cordón Negro Cava, Italian Rosé | Carta Nevada (Brut/Semi-Seco/Seco/Sweet tiers), Elyssia premium line, and a **separate Freixenet Prosecco line entirely** | **`freixenet prosecco` is CSV-backed at 1,600 (KD15)** — a genuinely strong, volume-backed case for adding a Freixenet Prosecco SKU, the single strongest Part-A finding in this batch |
| Mionetto | Prosecco Brut, Prosecco Rosé | Valdobbiadene Prosecco Superiore DOCG (a real, confirmed higher tier — appears as a distinct product on Mionetto's and retailers' own sites), Prosecco DOC Extra Dry, Organic Prosecco | `valdobbiadene prosecco superiore` (880, KD16) is real category-level volume that would map directly onto this tier |
| Segura Viudas | Brut Reserva, Heredad Reserva | Aria Estate Brut, Aria Estate Extra Dry, Brut Rosé (Trepat/Pinot Noir/Garnacha blend) | no dedicated CSV volume; WebSearch-confirmed real, directly from Segura Viudas' own current US import range |
| Chandon (California) | Brut Classic, Brut Rosé | The prestige Étoile tier (Étoile Brut, Étoile Rosé, Étoile Tête de Cuvée) and a Réserve Pinot Noir Rosé | no dedicated CSV volume; WebSearch-confirmed real, from Chandon's own site — Étoile is explicitly positioned as the "crowning jewel" above the core Brut/Rosé |
| Korbel | Brut only | Extra Dry, Brut Rosé, and a vintage "Natural'" bottling | no SKU-specific CSV volume beyond the strong Brut cluster already assigned; WebSearch-confirmed real, from Korbel's own site |
| Schramsberg | Blanc de Blancs only | Blanc de Noirs, Brut Rosé, Crémant Demi-Sec, and the prestige J. Schram tier (including a J. Schram Rosé) | no CSV volume; WebSearch-confirmed real, directly from Schramsberg's own current range |
| Codorníu | Clásico Brut only | Anna de Codorníu (Brut/Rosé/Blanc de Noirs — Spain's best-selling Cava, per Codorníu's own claim) | no CSV volume in this thin, noisy Cava export; WebSearch-confirmed real and well-documented — the strongest brand-heritage angle available for a stocking decision in this subcategory |
| Louis Bouillot | Perle de Vigne only | Perle de Molesme and Perle d'Aurore (rosé) — real named cuvées confirmed directly on Louis Bouillot's own site | no CSV volume (crémant category is entirely unmeasured in this batch) |
| Albert Bichot | Brut Réserve only | A Crémant de Bourgogne Brut **Rosé** — confirmed as a real, currently-listed SKU (surfaced directly in search results as a Wine.com product page) | no CSV volume |
| Gramona / Juvé & Camps | Imperial Gran Reserva / Reserva de la Familia (1 SKU each) | Both houses are understood to carry broader ranges (Gramona's prestige III Lustros Brut Nature Gran Reserva is real and well-documented; Juvé & Camps' Brut Nature and Rosé are referenced in passing across retailer listings), but I could not independently confirm a full, specific missing-tier list for either brand to the same standard as the entries above — flagged as a thinner finding, worth a dedicated brand pull if you want this depth |

### Part B — Real unstocked brands with genuine search demand

| Brand | Category | Primary keyword | Support | Tier |
|---|---|---|---|---|
| Zonin | Prosecco | zonin prosecco (1,900, KD14) | major Veneto Prosecco house, real US distribution | T1 |
| Riondo | Prosecco | riondo prosecco (1,300, KD12) | real, established Prosecco brand | T1 |
| Cupcake | Prosecco | cupcake prosecco (2,400, KD13) | large-scale, widely distributed grocery-channel brand | T1 |
| Josh Cellars | Prosecco | josh prosecco (2,900, KD13) | large-scale, widely distributed brand — highest single volume in this table | T1 |
| Avissi | Prosecco | avissi prosecco (1,600, KD13) | real, established Prosecco brand | T1 |
| Lunetta | Prosecco | lunetta prosecco (1,600, KD12) | Cavit-owned, widely available brand | T1 |
| La Vostra | Prosecco | la vostra prosecco (1,600, KD10) | real, established Prosecco brand | T1 |
| Coppola (Francis Ford) | Prosecco | coppola prosecco (1,000, KD11) | celebrity-adjacent (Francis Ford Coppola Winery), real distributed SKU | T1 |
| Asolo | Prosecco | asolo prosecco (1,000, KD24) | Asolo Prosecco Superiore DOCG — a real, distinct DOCG zone from Valdobbiadene | T1 |
| Brilla | Prosecco | brilla prosecco (1,000, KD8) | real, established Prosecco brand | T1 |
| Borrasca | Prosecco | borrasca prosecco (1,300, KD5) | real, low-KD brand | T1 |
| Kim Crawford | Prosecco | kim crawford prosecco (880, KD10) | major NZ wine brand's Prosecco extension | T1 |
| Chloe | Prosecco | chloe prosecco (880, KD14) | real, established brand | T1 |
| Maschio | Prosecco | maschio prosecco (880, KD19) | real, established Prosecco brand | T2 |
| Jeio (Bisol) | Prosecco | jeio prosecco (880, KD13) | Bisol family's Jeio Prosecco line, real | T2 |
| Zardetto | Prosecco | zardetto prosecco (720, KD21) | real, established Prosecco brand | T2 |
| La Gioiosa | Prosecco | la gioiosa prosecco (720, KD6) | real, low-KD brand | T1 |
| Cinzano | Prosecco | cinzano prosecco (590, KD10) | major Italian sparkling/vermouth house | T2 |
| Viarae | Prosecco (non-alcoholic) | viarae prosecco (2,400, KD24) | real, growing non-alcoholic Prosecco alternative — a genuinely different product category worth a separate stocking conversation | T2 |
| Belaire (Luc Belaire) | Sparkling Rosé / general | belaire rose sparkling wine (480, KD8) · luc belaire rare rosé sparkling wine (320, KD10) | strong hip-hop/culture crossover recognition | T1 |
| Mumm (Napa) | Sparkling Rosé | mumm sparkling brut rose (590, KD12) | real, established Napa producer; note this is Mumm Napa, distinct from the Champagne house G.H. Mumm covered elsewhere | T1 |
| Avaline | Sparkling Rosé | avaline rose (590, KD21) | celebrity-founded (Cameron Diaz/Katherine Power), already used as a Rosé-Wine hook in the Fine Wine batch — real crossover-adjacent demand | T2 |
| McBride Sisters | Sparkling Rosé | mcbride sisters sparkling brut rose (210, KD8) | largest Black-owned wine company in the US, real and notable | T2 |
| Bartenura | Sparkling Rosé | bartenura sparkling moscato rose (210, KD12) | already stocked in the Fine Wine batch's Rosé subcategory as a still rosé — this is their distinct sparkling moscato line | T2 |
| Banfi (Rosa Regale) | Sparkling Rosé | rosa regale sparkling red (720, KD5) | Banfi's sparkling Brachetto — already referenced as a still-wine cross-file signal in the Fine Wine batch | T2 |
| Andre | Sparkling Wine (general) | andre sparkling wine (590, KD22) | budget-tier, high-recognition brand | T2 |
| Gambino | Sparkling Wine (general) | gambino sparkling wine (720, KD2) | real brand, exceptionally low KD | T1 |
| Mawby | Sparkling Wine (general) | mawby sparkling wine (590, KD25) | Michigan traditional-method producer, real | T2 |
| Barefoot | Sparkling Wine (general) | barefoot sparkling wine (480, KD13) | major grocery-channel brand's sparkling extension | T1 |

**Highest-priority stocking candidates by demand + signal strength:** In Part A, **Freixenet Prosecco** stands alone as the strongest single finding — real CSV volume (1,600) inside a brand already stocked in a different subcategory, meaning zero new-vendor onboarding risk. In Part B, **Josh Cellars Prosecco** (2,900) and **Cupcake Prosecco** (2,400) lead by raw volume; **Zonin** and **Riondo** (the two brands the brief specifically flagged as examples worth checking) both cleared the bar with real, independent CSV volume (1,900 and 1,300 respectively).

---

## Blog Topic Candidates

| Topic | Anchor keyword(s) | Notes |
|---|---|---|
| Prosecco vs. Champagne: what's actually different? | prosecco vs champagne (8,100, KD23) · is prosecco champagne (8,100, KD25) · what is the difference between champagne and prosecco (2,400, KD20) | Single largest volume opportunity in the entire batch; supports the Prosecco hub and every Prosecco product page |
| What is Cava? Spain's answer to Champagne, explained | what is cava (12,100, KD59 — high KD, note) · cava wine (5,400, KD34) · what is cava wine (720, KD25) | High head-term KD, but the Cava export is otherwise so thin that a genuinely good pillar page is the best lever available for the whole subcategory |
| Is sparkling wine the same as Champagne? | is sparkling wine champagne (1,900, KD15) · is sparkling wine the same as champagne (1,000, KD5) · what's the difference between champagne and sparkling wine (1,600, KD4) | Huge combined volume at very low KD across the general Sparkling Wine export; strong, easy pillar-page win |
| What is Crémant? Champagne's French cousin, region by region | not volume-backed in any of the 8 exports in this batch | Genuine content gap flagged repeatedly above — worth writing regardless, since it directly supports 4 of the batch's 24 SKUs (Albert Bichot, Louis Bouillot, both Lucien Albrecht) and the entire Sparkling Wine hub has no other crémant-specific content to lean on |
| Why is Korbel called "Champagne" if it's from California? | korbel champagne (12,100, KD34) · korbel brut california champagne (2,900, KD21) | Real, exact-match volume plus a genuinely interesting, factual regulatory story (the 2006 US–EU grandfather clause) — strong single-product deep-dive that doubles as general wine-labeling education |
| Is prosecco sweet? A guide to Brut, Extra Dry, and Dry styles | is prosecco sweet (1,900, KD6) · prosecco doc (1,300, KD20) | Very low KD relative to volume; directly supports the Mionetto, Bottega, Ruffino, and La Marca product pages, which otherwise share a lot of overlapping secondary keywords |
| Prosecco Superiore DOCG vs. Prosecco DOC: does the label matter? | valdobbiadene prosecco superiore (880, KD16) · prosecco superiore di valdobbiadene (720, KD8) | Not huge volume, but directly and uniquely supports Nino Franco and Santa Margherita — the two DOCG-tier products in the batch — differentiating them from the five DOC-level Prosecco SKUs |
| Prosecco cocktails: Aperol Spritz, Bellini, and Mimosa, explained | prosecco for hugo spritz (12,100, KD9) · prosecco cocktails (5,400, KD25) · prosecco aperol spritz (2,900, KD64) · prosecco bellini (2,400, KD31) | The single largest raw-volume opportunity in this entire report by a wide margin (~40,000+ combined), explicitly flagged in Phase 1 as cross-sell content rather than product-page material — a natural, high-value blog/recipe hub linking back to every Prosecco product page |
| Sparkling rosé buying guide: dry vs. sweet, and where each style comes from | sparkling rose (4,400, KD7) · sparkling rose wine (2,400, KD17) · italian sparkling rose (390, KD7) · french sparkling rose (590, KD4) | Supports all 5 Sparkling Rosé SKUs, which currently span 4 different countries/styles (US, Italy, France, and — via Freixenet — Italy again) with no single unifying explainer |

---

## What to check

1. **The Cava export is the thinnest, noisiest file in the entire batch.** Zero brand-specific volume survived for any of the 6 stocked Cava products beyond one weak Freixenet row — a dedicated per-brand SEMrush pull (Codorníu, Freixenet, Gramona, Juvé & Camps, Segura Viudas) would meaningfully deepen this subcategory.
2. **"Crémant" itself carries zero measurable search volume anywhere across all 8 exports**, despite covering 4 of the batch's 24 SKUs (Albert Bichot, Louis Bouillot, both Lucien Albrecht). Worth a dedicated "crémant de bourgogne" / "crémant d'alsace" pull if you want this cluster to be volume-backed rather than leaning entirely on the generic sparkling-wine pool.
3. **Freixenet Prosecco is a real, CSV-backed (1,600 vol) gap** inside a brand you already carry in two other subcategories — the single strongest stocking signal in this whole report, flagged for a decision.
4. **The Kirkland/Costco Prosecco recall** is a large, real, very recent news event (~50,000+ combined search volume) with zero relevance to any stocked brand — confirmed as noise, but worth knowing it's driving a meaningful share of current "prosecco" category search traffic if you're watching rank movement.
5. **Chandon California vs. Moët & Chandon Champagne homonym** — flagged twice above; make sure category/product copy for the two Chandon California SKUs doesn't accidentally pull in Moët & Chandon Champagne keywords, which dominate the bare "chandon champagne" query.
6. **Korbel's "California Champagne" labeling** is a real, legally grandfathered exemption (2006 US–EU wine trade agreement) — genuinely useful, differentiated FAQ material, not spin.
7. **Gramona and Juvé & Camps gap-analysis entries are thinner than the others** — I could not independently confirm specific missing-tier details to the same standard as Freixenet/Mionetto/Segura Viudas/Chandon/Korbel/Schramsberg; flagged rather than asserted, worth a follow-up pass if you want full parity across all 6 Cava brands.
8. **Nino Franco and Santa Margherita share a real DOC-vs-DOCG differentiation opportunity** — both are the batch's only two Prosecco Superiore DOCG SKUs among five DOC-level competitors; the "what does DOCG mean" content angle is under-used elsewhere in the batch.
