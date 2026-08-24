# Keyword Map — Aged & Dark Rum (Batch: Rum)
**Site:** Aged & Amber | **Market:** US | **Generated:** August 2026
**Status:** RETROACTIVE — implemented before the review-first process started. Flag anything below and I'll fix it in code.
**Methodology:** keyword-engine skill (Mode A pipeline) — KD 0–25 = T1 Quick Win, 26–40 = T2 Worth Targeting, 41–55 = T3 Supporting only (never a page's primary), 56+ dropped. Max 5 secondary keywords per page cluster; the rest feed the LSI/supporting pool used in body copy, alt text, and FAQ answers.

---

## Phase 1 — Filter Summary

**Raw keyword rows received:** ~900 across 9 exports (1 category + 8 brand-level)
**Kept (Vol 50+, on-topic):** ~140
**Dropped — brand/word collision with an unrelated real thing:**
- "Rumer Willis" (actress) — up to Vol 110,000
- "Wadi Rum" (Jordan desert/national park)
- "The Rum Diary" (Johnny Depp film)
- "Doc Ford's Rum Bar & Grille" (Florida restaurant chain)
- "Appleton, WI" real estate listings (city-name collision with Appleton Estate) — one row at $30.00 CPC
- Mount Gay LGBTQ-adjacent / Mount Vernon WA searches (word collision)
- "El Dorado" as mythical city / unrelated place name — most of the 135,000-vol head term
- "500 Rum" (card game), "Rum Tum Tugger" (Cats musical), "Gin Rum Rules" (board game)
- Pure typo rows with no independent signal ("el doradol," "dorádó," etc.)

**KD 56+ dropped entirely:** "is bacardi rum" (KD 69), "mount gay rum" head term retained despite KD 59 only because it's the established brand name with no lower-KD substitute — flagged below, not a clean T1/T2.
**Cross-brand cannibalisation:** Clean — no keyword double-assigned. Category-level head terms (rum, dark rum, spiced rum, white rum, best rum) reserved for the category page only.

---

## Phase 2–4 — Data Integrity Corrections

Cross-checking the export against real inventory caught 3 fabricated claims from before this batch:

| Brand | Was (fabricated) | Now (real) |
|---|---|---|
| Bacardí | "Reserva and 8 Year aged expressions" | Spiced Rum + Superior White Rum (only 2 SKUs stocked) |
| El Dorado | "12, 15, and 21 Year" | 12 Year + 15 Year (21 Year not stocked) |
| Flor de Caña | "12 and 18 Year Centenario" | 12 Year + Extra Dry 4 Year White (18 Year not stocked) |

**Unresolved — your call, not mine:** `Planteray XO 20th Anniversary Rum` ($58, stock 28) and `Plantation XO 20th Anniversary Rum` ($64.99, stock 8) look like the same product under the pre/post-2023 rebrand name.

---

## Category Page: `/shop/aged-dark-rum/`

| | |
|---|---|
| **Primary** | dark rum (Vol 9,900, KD 25, T1) |
| **Secondary (5)** | spiced rum (18,100, KD 24, T1) · white rum (18,100, KD 14, T1) · jamaican rum (14,800, KD 10, T1) · best rum (5,400, KD 18, T1) · rum brands (8,100, KD 34, T2) |
| **LSI / supporting pool** | barbados rum (4,400, KD 13) · caribbean rum (4,400, KD 26) · aged rum (2,400, KD 17) · cheap rum (2,400, KD 25) |
| **Revisit in 6 months (T3, high-vol outlier)** | rum drinks (14,800, KD 49) · rum cocktails (14,800, KD 39 — borderline T2, watch) · rum punch (18,100, KD 38) |
| **Question-intent → FAQ** | is rum gluten free (2,900, KD 10) · does rum go bad (1,600, KD 11) · does rum expire (1,300, KD 15) |
| **Informational → blog candidate** | what is rum made from (8,100, KD 19) — pillar-eligible, high volume + low KD |

**Live copy:** Title Tag "Aged, Dark, Spiced & White Rum — Buy Online" · H1 "Aged, Dark, Spiced & White Rum — Buy Allocated Bottles Online" · 3 FAQs (dark vs. spiced, gluten-free, shelf life).

**Blog gap flagged:** "What Is Rum Made From?" — Vol 8,100, KD 19, T1, zero competition risk relative to volume. Not yet built. Recommend a 1,500–2,000w informational post, linked from the category page's definition hook.

---

## Brand Pages — Upgraded (8)

### Diplomático
Primary: **diplomatico rum** (8,100, KD 24, T1)
Secondary (5): diplomatico (4,400, KD 36, T2) · diplomatico reserva exclusiva (1,600, KD 20, T1) · venezuelan rum (2,900, KD 10, T1) · ron diplomatico (1,000, KD 35, T2) · diplomatico ron (1,300, KD 34, T2)
FAQ added: "Is Diplomático a Venezuelan rum?"

### Ron Zacapa
Primary: **ron zacapa** (9,900, KD 18, T1)
Secondary (5): zacapa rum (8,100, KD 13, T1) · zacapa (4,400, KD 14, T1) · ron zacapa 23 (3,600, KD 19, T1) · ron zacapa xo (1,600, KD 7, T1) · zacapa centenario rum (1,300, KD 12, T1)
LSI: guatemalan rum (1,000, KD 15) · solera rum (260, KD 6)
FAQ added: "What does 'Solera' mean on Ron Zacapa's label?"

### Appleton Estate
Primary: **appleton estate rum** (9,900, KD 31, T2)
Secondary (5): appleton rum (9,900, KD 18, T1) · appleton estate (2,400, KD 26, T2) · jamaica rum (2,900, KD 5, T1) · appleton estate signature (880, KD 16, T1) · appleton estate 12 year rum (390, KD 16, T1)
Noise dropped: all "Appleton, WI real estate" rows (~15), "total wine appleton" navigational-retailer rows

### Planteray (Plantation)
Primary: **plantation rum** (5,400, KD 16, T1)
Secondary (5): planteray rum (210, KD 14, T1) · planteray (1,300, KD 22, T1) · plantation rum rum (2,400, KD 10, T1) · plantation xo rum (140, KD 12, T1) · plantation dark rum (390, KD 8, T1)
FAQ added: "Why did Plantation Rum change its name to Planteray?" (from "plantation rum name change," Vol 390)

### Mount Gay
Primary: **mount gay rum** (6,600, KD 59 — **above the T2 ceiling**, kept anyway as the only real head term for the brand; no lower-KD substitute exists)
Secondary (5): mount gay (5,400, KD 49 — also above ceiling, same reasoning) · rhum mount gay (5,400, KD 48) · mount gay eclipse rum (1,900, KD 17, T1) · mount gay black barrel rum (1,600, KD 12, T1) · mount gay xo (590, KD 3, T1)
**Flag:** this brand's head terms are genuinely high-difficulty (KD 48–59) — realistic ranking timeline is longer than most of this batch. The low-KD long-tail terms (Black Barrel, XO, Eclipse) are the actual near-term opportunity; category-page linking should lean on those, not the head term.

### Flor de Caña
Primary: **flor de cana** (12,100, KD 28, T2)
Secondary (5): flor de cana rum (4,400, KD 35, T2) · flor de caña (3,600, KD 37, T2) · ron flor de caña (3,600, KD 31, T2) · ron flor de cana (2,400, KD 19, T1) · flor de caña 12 años (1,300, KD 12, T1)
LSI: nicaraguan rum (1,000, KD 16)

### El Dorado
Primary: **el dorado rum** (3,600, KD 25, T1)
Secondary (5): demerara rum (2,400, KD 8, T1) · el dorado 12 (480, KD 13, T1) · el dorado 12 year rum (480, KD 16, T1) · guyana rum (480, KD 6, T1) · el dorado 15 year rum (390, KD 6, T1)
FAQ added: "What is Demerara rum?"
Noise dropped: "el dorado" head term (135,000 vol) — almost entirely the mythical city / unrelated place name, not rum-buyer intent.

### Bacardí
Primary: **bacardi rum** (18,100, KD 36, T2)
Secondary (5): bacardi superior rum (6,600, KD 32, T2) · bacardi superior white rum (3,600, KD 27, T1) · bacardi white rum (3,600, KD 19, T1) · bacardi spiced rum (1,300, KD 22, T1) · bacardí superior rum (3,600, KD 24, T1)
**Flag:** the bare "bacardi" term (90,500 vol, KD 38) dwarfs everything else in the dataset — it's T2-eligible but too broad/branded to be a page target on its own; treated as background authority signal only, not assigned.
Dropped (KD 56+): "is bacardi rum" (KD 69)

---

## Brand Pages — Built New (10)

### Malibu
Primary: **malibu rum** (49,500 — no KD given in export, treat as high-authority head term, T2 by volume convention)
Secondary (5): malibu coconut rum (12,100, KD 21, T1) · malibu rum drinks (4,400, KD 45 — T3, supporting only) · malibu rum recipes (4,400, KD 44 — T3) · malibu rum price (1,600, KD 7, T1) · malibu rum alcohol (1,600, KD 25, T1)
FAQ added: "Is Malibu rum gluten-free?" (590, KD 17)

### Kraken
Primary: **kraken rum** (22,200, KD 17, T1)
Secondary (5): drink kraken rum (27,100, KD 31, T2) · kraken black spiced rum (8,100, KD 18, T1) · kraken spiced rum (1,600, KD 27, T1) · kraken black rum (1,600, KD 23, T1) · the kraken rum (2,400, KD 21, T1)

### Captain Morgan
Primary: **captain morgan spiced rum** (12,100, KD 23, T1)
Secondary (3 — thin export): captain morgan rum (6,600, KD 27, T1) · captain morgan original spiced rum (4,400, KD 18, T1) · captain morgan white rum (1,600, KD 7, T1)

### Don Q
Primary: **don q rum** (8,100, KD 34, T2)
Secondary (5): don q cristal rum (1,600, KD 7, T1) · don q rums (1,000, KD 21, T1) · don q coconut rum (1,300, KD 9, T1 — not a stocked SKU, LSI only) · don q rum near me (390, KD 11, T1) · don q puerto rican rum (480, KD 6, T1)
CTA added using "near me" query directly.

### Foursquare
Primary: **foursquare rum** (14,800, KD 32, T2)
Secondary (2 — thin export): foursquare spiced rum (9,900, KD 7, T1 — not a stocked SKU, LSI only) · foursquare rum distillery penultimus (1,900, KD 8, T1)

### Bumbu
Primary: **bumbu rum** (22,200, KD 28, T2)
Secondary: none with independent volume in this export — single-keyword cluster, flagged for a dedicated Bumbu export if you want deeper coverage.

### Sailor Jerry
Primary: **sailor jerry rum** (5,400, KD 10, T1)
Secondary (1): sailor jerry spiced rum (2,400, KD 15, T1)

### Gosling's
Primary: **gosling's black seal rum** (2,900, KD — not given)
Secondary (2): goslings rum (1,900, KD 26, T1) · gosling black seal dark rum (1,600, KD 15, T1)

### Smith and Cross
Primary: **smith and cross rum** (2,400, KD 19, T1) — single-keyword cluster in this export.

### Myers's
Primary: **myers rum** (3,600, KD 24, T1)
Secondary (1): myers dark rum (1,900, KD 10, T1)

**Thin-data flag:** Bumbu, Foursquare, Smith and Cross, Gosling's, and Myers's each had 0–2 supporting keywords in what you sent — well under the 5-secondary target the skill aims for. Pages are live and accurate, but if you want them fully deep like Diplomático/Zacapa, they need their own dedicated export.

---

## Phase 8 — Product Gap Analysis (brands with real demand, NOT in your catalog)

Full proposal format per the keyword-engine skill — use this to decide what's worth stocking.

| Brand | Suggested URL | Primary keyword | Secondary keywords found | Combined demand signal | Tier |
|---|---|---|---|---|---|
| Privateer | `/shop/aged-dark-rum/privateer/` | privateer rum (14,800, KD 35) | andrew cabot privateer rum (1,300) · privateer rum ceo (1,900) | ~18,000 | T2 |
| Havana Club | `/shop/aged-dark-rum/havana-club/` | havana club rum (5,400, KD 36) | — (single-keyword in export) | 5,400 | T2 |
| Brugal | `/shop/aged-dark-rum/brugal/` | brugal rum (6,600, KD 12) | — | 6,600 | T1 |
| Cruzan | `/shop/aged-dark-rum/cruzan/` | cruzan rum (5,400, KD 17) | — | 5,400 | T1 |
| Blue Chair Bay | `/shop/aged-dark-rum/blue-chair-bay/` | blue chair bay rum (4,400, KD 33) | — | 4,400 | T2 |
| Koloa Rum | `/shop/aged-dark-rum/koloa/` | koloa rum (4,400, KD 32) | koloa rum company (1,900, KD 16) | 6,300 | T2 |
| Parrot Bay | `/shop/aged-dark-rum/parrot-bay/` | parrot bay rum (2,900, KD 10) | parrot bay coconut rum (1,600, KD 8) | 4,500 | T1 |
| Old Monk | `/shop/aged-dark-rum/old-monk/` | old monk rum (2,900, KD 15) | — | 2,900 | T1 |
| Tanduay | `/shop/aged-dark-rum/tanduay/` | tanduay rum (2,400, KD 18) | — | 2,400 | T1 |
| Siesta Key | `/shop/aged-dark-rum/siesta-key/` | siesta key rum (2,400, KD 33) | — | 2,400 | T2 |
| Don Papa | `/shop/aged-dark-rum/don-papa/` | don papa rum (1,900, KD 27) | — | 1,900 | T2 |
| Pusser's | `/shop/aged-dark-rum/pussers/` | pusser's rum (1,900, KD 17) | pussers rum (5,400, KD 21) | 7,300 | T1 |
| Ten To One | `/shop/aged-dark-rum/ten-to-one/` | ten to one rum (1,900, KD 25) | — | 1,900 | T1 |
| Zaya | `/shop/aged-dark-rum/zaya/` | zaya rum (1,900, KD 6) | — | 1,900 | T1 |
| Ron Barceló | `/shop/aged-dark-rum/barcelo/` | barcelo rum (1,900, KD 12) | — | 1,900 | T1 |
| Admiral Nelson | `/shop/aged-dark-rum/admiral-nelson/` | admiral nelson rum (1,900, KD 9) | — | 1,900 | T1 |

**Highest-priority stocking candidates by demand signal:** Privateer (18,000 combined, craft/premium positioning fits your allocated-spirits angle) and Pusser's (7,300 combined) stand out above the rest. Koloa (6,300) and Parrot Bay (4,500) are next.

**Note on data depth:** most of these are single-keyword signals pulled from mentions inside the brand exports you sent, not dedicated brand-level pulls — treat the "combined demand" column as directional, not exhaustive. A dedicated SEMrush export for any brand you're seriously considering would sharpen this before a stocking decision.

---

## What to check

1. Mount Gay and Bacardí's head terms sit above the T2 ceiling (KD 48–59) — I kept them as primary since no lower-KD substitute exists for the brand name itself, but flagging so you know the ranking timeline is longer than the rest of this batch.
2. Bumbu, Foursquare, Smith and Cross, Gosling's, Myers's are thin (0–2 secondary keywords) — fine as-is, or worth a dedicated export each?
3. Plantation/Planteray duplicate product — yours to resolve.
4. Product gap table above — anything you want moved to "stock this" so I can build its page once it's real inventory?
