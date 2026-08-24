# Keyword Map — Cognac & Brandy (Batch: Cognac)
**Site:** Aged & Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — nothing implemented yet. Review, flag changes, then I'll build.
**Methodology:** keyword-engine skill — KD 0–25 = T1, 26–40 = T2, 41–55 = T3 (supporting only), 56+ dropped. Max 5 secondary per cluster.
**Note:** this export appears to be one continuous cognac-category paste rather than separate per-brand pulls (unlike Rum/Gin), so brand clusters below are extracted from within it. It also looks like it may have been cut off mid-stream — let me know if there's more to paste.

**New this batch, per your instruction:** I checked inventory two ways — missing brands entirely, and missing *expressions within brands you already stock*. The second check caught the biggest finding in this whole batch.

---

## ⚠️ Headline finding: missing-expression gaps in your 4 existing cognac pages

Your `cognac-brandy` category has 26 products across ~19 brands, but only 4 brand pages exist (Hennessy, Rémy Martin, Courvoisier, Martell) — built earlier in this project from general knowledge, not from real inventory or keyword data. Cross-checking both against real stock now:

| Brand page | Currently says | Real stock includes | Gap |
|---|---|---|---|
| **Rémy Martin** | "VSOP, XO & 1738" | **Louis XIII Cognac ($4,300)** | Louis XIII isn't mentioned anywhere on the page — and "louis xiii cognac" (14,800 vol, KD 29) is a **bigger keyword than "rémy martin cognac" itself (5,400 vol)**. This is the single biggest miss in the batch. |
| Martell | "VSOP, Cordon Bleu & XO" | Real name is **"Cordon Bleu Extra"**, not "Cordon Bleu" | Small but real naming mismatch |
| Martell | (not mentioned) | — | **Martell Blue Swift is not stocked**, but "martell blue swift cognac" pulls 9,900 vol at KD 10 — an excellent T1 opportunity if you ever add it |
| Hennessy | "VS, VSOP, XO & Paradis" | **Hennessy Richard ($4,500)** | Richard isn't mentioned — lower search volume than Louis XIII, but still a real omitted SKU |
| Courvoisier | "VS, VSOP & XO" | **Courvoisier L'Essence ($4,200)** | Same pattern — ultra-premium SKU omitted from the page |

---

## Category Page: `/shop/cognac-brandy/`

Primary: **cognac** (110,000, KD 31, T2 — huge, unavoidable head term)
Secondary (5): what is cognac (14,800, KD 31) · cognac brands (12,100, KD 25) · vsop cognac (6,600, KD 10) · cognac vs brandy (5,400, KD 17) · xo cognac (2,400, KD 10)
FAQ candidates: what is cognac made of (1,900, KD 16) · is cognac brandy (1,900, KD 31) · difference between brandy and cognac (1,000, KD 12) · how is cognac made (1,000, KD 19) · what does cognac taste like (1,300, KD 9)

**Noise dropped:** "cognac leather" / "cognac couch" / "cognac boots" / "BMW cognac interior" (the color, not the spirit) — ~15 rows · "Brasserie Cognac" (NYC restaurant) — ~10 rows · "cognac queen lyrics" (song) · "2018 BMW X3 cognac seats" (car listings) · "lighthouse nicknamed Cognac" (unrelated trivia)

---

## Brand Pages — Upgrade Existing (4)

### Hennessy
Primary: **hennessy cognac** (18,100, KD 45 — above the T2 ceiling; kept as primary since there's no lower-KD substitute for the brand name itself, same situation as Mount Gay in the Rum batch)
Secondary (4): hennessy very special cognac (6,600, KD 30) · hennessy xo cognac (2,400, KD 13) · hennessy vsop cognac (1,300, KD 21) · cognac hennessy (880, KD 34)
**Fix:** add Hennessy Richard to the lineup (currently omitted).

### Rémy Martin
Primary: **remy martin cognac** (5,400, KD 20, T1)
Secondary (5): **louis xiii cognac (14,800, KD 29, T2 — bigger than the brand's own head term)** · louis 13 cognac (8,100, KD 17, T1) · louis xiii cognac price (4,400, KD 13, T1) · remy martin xo cognac (1,000, KD 25, T1) · remy martin 1738 accord royal cognac (2,400, KD 17, T1)
**Fix:** add Louis XIII as its own featured section — it's arguably deserving of consideration as a standalone page given its search volume nearly triples the parent brand's, but I'd keep it under the Rémy Martin hub for now since it's the same house. Your call if you want it split out later.
FAQ candidate: "Is Louis XIII made by Rémy Martin?" (real informational gap — many searchers don't know Louis XIII is a Rémy Martin release)

### Martell
Primary: **martell vsop cognac** (9,900, KD 11, T1)
Secondary (4): martell cognac (5,400, KD 11, T1) · martell cordon bleu cognac (2,400, KD 10, T1) · martell xo cognac (1,900, KD 9, T1) · martell cognac blue swift (1,000, KD 8, T1 — LSI/entity note only, not stocked)
**Fix:** correct "Cordon Bleu" → "Cordon Bleu Extra" to match the real product name.

### Courvoisier
Primary: **courvoisier cognac** (6,600, KD 28, T1)
Secondary (2): courvoisier vsop cognac (1,600, KD 16, T1) · courvoisier vs cognac (1,300, KD 8, T1)
**Fix:** add Courvoisier L'Essence to the lineup (currently omitted).

---

## Brand Pages — Build New (4, real keyword data + real stock)

### D'Ussé
Primary: **d'usse cognac** (5,400, KD 12, T1)
Secondary (4): dusse cognac (1,900, KD 29, T1) · d usse cognac (2,400, KD 10, T1) · d usse vsop cognac (1,600, KD 14, T1) · d'usse vsop cognac (2,400, KD 16, T1)
Real product: D'Ussé VSOP only (1 SKU). Known public fact worth a FAQ: D'Ussé is co-owned by Jay-Z — real, verifiable, good entity signal.

### Camus
Primary: **camus cognac** (1,900, KD 19, T1)
Real products: VSOP Elegance, XO Elegance (both stocked). Only one dedicated keyword row in this export — thin, but real inventory backs 2 SKUs.

### Hine
Primary: **hine cognac** (1,000, KD 16, T1)
Real products: Rare VSOP, H by Hine VSOP, Antique XO (3 SKUs stocked) — good inventory depth despite thin keyword data in this export.

### Pierre Ferrand
Primary: **pierre ferrand cognac** (1,900, KD 12, T1)
Real products: 10 Générations, 1840 Original Formula, XO (3 SKUs stocked) — same pattern, thin export data, real depth in stock.

**Flagged as thin:** Camus, Hine, and Pierre Ferrand all have real inventory (2–3 SKUs each) but only one usable keyword row apiece in this export — worth a dedicated pull each if you want them as deep as Hennessy/Rémy Martin eventually.

---

## Phase 8 — Product Gap Analysis

**A) Brands with real search demand, not in your catalog:**

| Brand | Vol | KD | Note |
|---|---|---|---|
| Meukow | 1,600 | 16 | French cognac house, family-owned since 1839 |
| ABK6 | 1,300 | 15 | Single-estate Cognac producer |
| Salignac | 1,300 | 7 | Historic cognac house |
| Villon | 1,300 | 8 | Newer cognac brand |
| Le Portier | 1,600 | 16 | Cognac brand |
| Ararat | 1,000 | 18 | **Flag: this is Armenian brandy, not French cognac** — real demand, but a different product category; only relevant if you'd stock it under a broader "brandy" positioning, not as a cognac. |

**B) Missing expressions within brands you already stock** (the new check per your instruction):

| Brand (in catalog) | Missing expression | Keyword | Vol | KD |
|---|---|---|---|---|
| Rémy Martin | **Louis XIII** — in stock, absent from page copy | louis xiii cognac | 14,800 | 29 |
| Hennessy | Richard — in stock, absent from page copy | (no dedicated keyword found in this export) | — | — |
| Courvoisier | L'Essence — in stock, absent from page copy | (no dedicated keyword found in this export) | — | — |
| Martell | Blue Swift — **not stocked**, real demand | martell blue swift cognac | 9,900 | 10 |

Louis XIII and Martell Blue Swift are the two genuinely actionable items here — one's an SEO fix (you already have the product, just add it to the page), the other's a stocking decision (you don't have the product, but the keyword is excellent: T1, high volume).

---

## What to check

1. Louis XIII — fold into the Rémy Martin page (my default), or worth its own dedicated page given it outranks the parent brand's own search volume?
2. Ararat — brandy, not cognac. Skip, or reposition as a broader "brandy" stocking decision?
3. Camus / Hine / Pierre Ferrand — fine to build with thin data now, or hold for dedicated exports?
4. Is there more to this export? It looked like it cut off mid-row.
