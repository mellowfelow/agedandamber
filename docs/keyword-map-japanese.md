# Keyword Map — Japanese Whisky
**Site:** Aged & Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — nothing implemented yet. Review, flag changes, then I'll build.
**Methodology:** keyword-engine skill — KD 0–25 = T1, 26–40 = T2, 41–55 = T3 (supporting only), 56+ dropped.

## ⚠️ Same caveat as the other 3 whiskey batches: no SEMrush export exists

Every figure below is a web-research estimate. Flagged **[confirmed]** where real evidence of active sale/search was found, **[inferred]** where it's a reasonable guess. This category has an unusually high-confidence finding set — all 5 of the specific known-issue checks came back with direct citable evidence, not inference.

---

## Current-state audit (read this first)

- **0 of 30 Japanese products have any `seo` field.**
- **10 brand hubs exist, only 1 has FAQs** (Yamazaki) — worst FAQ coverage of any category so far.
- **Compliance/categorization issue confirmed real and non-trivial**: "Kavalan Classic Single Malt Whisky" is filed under `japanese-whisky`, but Kavalan is unambiguously Taiwanese (Yilan, Taiwan). Research confirms expert/press consensus treats it as its own category — and confirms at least one other retailer makes the exact same miscategorization mistake in the wild, so this isn't a hypothetical risk. Recommend moving it to its own Taiwanese/Asian-whisky bucket.
- **Nikka hub omits 5 of its 9 stocked SKUs** (Miyagikyo, Taketsuru, Yoichi, Coffey Grain not on the page at all) — including the two highest-priced items ($1,200 Taketsuru 21, $180 Yoichi 10). Confirmed as a significant miss: all three omitted names are independently, robustly searched, not just "Nikka" modifiers.
- **Hibiki hub has 2 problems at once**: promises a discontinued expression (17 Year, stopped 2018) as if available, and omits the actually-stocked Blossom Harmony Limited Edition — which has real, confirmed search/content demand.
- **Two-hub structural problem for Mars/Hombo distillery**: a "Mars Shinshu" hub references Komagatake/Maltage Cosmo (real, currently in production, genuinely stockable — not rarities) while a separate "Iwai" hub covers what's actually stocked (Iwai 45, Iwai Tradition). Needs a decision: stock Komagatake/Cosmo to match the hub's promise, or merge/rewrite.
- **Togouchi hub names the wrong age statements** — says "9 Year and 18 Year" (both real, but not stocked), while actual stock is Premium + 15 Year (also both real). Straightforward copy fix.
- **Japanese has zero subcategory hub pages** (Blended, Single Malt, Premium Japanese Whisky — all 3 missing).

---

## Category Page: `/shop/japanese-whisky/`

Primary: **buy japanese whisky online** (est. med vol, med-high comp, T2 — the bare "japanese whisky" head term is likely too competitive/dropped-tier for a boutique retailer; this transactional variant is a confirmed real retailer pattern)
Secondary (7): japanese whisky gift set (est. med vol, med comp, T1-T2) · japanese whisky for beginners / starter pack (est. med vol, low-med comp — **T1, confirmed real content format**) · japanese whisky under $100 / under $50 (est. med vol, low comp — **T1 quick win**, fits Toki/Iwai 45/Tradition well) · japanese single malt whisky (est. med-high vol, high comp, T2-T3) · japanese blended whisky (est. med vol, med comp, T2 — relevant to Togouchi/Tenjaku/Yamazakura/Akashi/Ao) · japanese whisky price guide (est. med vol, low-med comp — **T1-T2, strong new blog-post candidate**, not just a category term) · rare / allocated japanese whisky (est. low-med vol, low-med comp, T1-T2 — fits Yamazaki 18/Hakushu 18/Taketsuru 21)

⚠️ "japanese whisky brands" overlaps your existing "Japanese Whisky Brands Guide" post — don't target on the category page, use as an internal-link anchor only.

---

## Per-Brand Keywords

| Brand | Primary (est. demand/comp) | Secondary | Notes |
|---|---|---|---|
| **Nikka** | nikka whisky (H/H, T2-T3 — globally recognized, realistically hard to rank head-term) | nikka from the barrel (M-H/M, confirmed, "40th anniversary" 2025 coverage) · **nikka miyagikyo** (M/M, confirmed independently searched — 10 Year just returned in 2026 after a decade hiatus, timely hook) · **nikka taketsuru / pure malt** (M-H/M, confirmed, founder's-namesake product, most content-rich sub-term) · **nikka yoichi / yoichi 10 year** (M/M, confirmed, 2026 packaging refresh widely covered, price ~$148-177 matches your $180) · nikka days (L-M/L, confirmed entry blend, T1) · nikka coffey malt/grain (L-M/L-M) | **Confirmed significant hub miss** — Miyagikyo/Taketsuru/Yoichi are independently searched, not brand modifiers, and 2 of 3 have real 2026 news hooks |
| **Hibiki** | hibiki whisky (H/H, T3 — allocated, huge secondary-market attention, hard to rank) | hibiki 21 year (M/H, confirmed current, $850 plausible) · hibiki japanese harmony (H/H, T3, accessible core expression) · **hibiki blossom harmony** (M/L-M, confirmed real — MSRP $160, secondary ~$486, active multi-year retailer coverage — **not on hub, should be**) · hibiki 30 year (L/L-M, confirmed real but ultra-rare, T2 supporting only) | ⚠️ Hub's "17 Year" is **confirmed discontinued** (stopped 2018) — remove or caveat. "Master Select" is actually a Harmony travel-retail sub-variant, not a parallel tier — correct the framing |
| **The Yamazaki** | yamazaki whisky (H/H, T3 — hardest brand in the category to rank for) | yamazaki 12 (H/H, confirmed, post-2024 ~50% price hike widely covered) · yamazaki 18 (M-H/H, confirmed flagship collector bottle, $1,000 plausible) · yamazaki 12 vs 18 (M/M, confirmed real comparison format — **better blog angle than head terms**) · yamazaki distiller's reserve (M/M-H, confirmed most attainable SKU) | Treat as T3/supporting for head terms; real opportunity is long-tail comparison/price-guide content |
| **The Hakushu** | hakushu whisky (H/H, T3) | hakushu 12 (H/H, confirmed, briefly discontinued/reintroduced 2021) · hakushu 18 (M/H, confirmed, $1,500 plausible for current allocated stock) · **hakushu vs yamazaki** (M/M, confirmed real comparative content — "$10-20 cheaper, better value" — good blog angle) · is hakushu 12 worth it (L-M/L, confirmed actual published headline, good FAQ fodder) | Same T3 head-term logic as Yamazaki |
| **Mars Iwai / Mars Shinshu** | mars iwai whisky (L-M/L, T1) | mars iwai 45 (M/L, confirmed "one of the best values in Japanese whisky," ~$25-35 — good quick win) · mars iwai tradition (L-M/L, confirmed) · japanese whisky under $30 (M/L-M, confirmed real query this SKU set answers well) | See structural flag above re: the separate Mars Shinshu hub |
| **Kaiyo** | kaiyo whisky (L-M/L-M, T1-T2) | kaiyo mizunara oak (L-M/L, confirmed, mixed reviews/batch variation noted) · kaiyo cask strength (L/L, confirmed real distinct SKU) · mizunara oak whisky (M/M, confirmed — good shared LSI term across Kaiyo AND Yamazaki 18/Hakushu 18 content) | Kaiyo is a blending house, not a distillery — worth an entity-clarity note for AI-visibility/schema purposes |
| **Togouchi** | togouchi whisky (L-M/L, T1) | togouchi premium (L-M/L, confirmed real, current core release) · **togouchi 15 year** (L-M/L, confirmed real, current, actively sold) · togouchi 18 year (confirmed real, aged in a repurposed railway tunnel — good story hook, **not stocked**, flag as gap) | ⚠️ Hub currently names "9 Year and 18 Year" — both real but **neither is what you stock** (Premium + 15 Year are). Straightforward copy fix |
| **Suntory (World Whisky Ao)** | suntory ao / world whisky ao (M/L-M, confirmed real distinctive product, T1-T2) | world whisky (M/M, generic category term) · suntory ao review (L-M/L) | ⚠️ Minor factual nuance: Ao blends Scotch/Irish/Canadian/American/Japanese whiskies — not purely Japanese-distilled. Milder version of the Kavalan issue; Suntory markets it as "world whisky," not "Japanese," so lower urgency but worth a factual, low-key clarification on the PDP |
| **Suntory Toki** | suntory toki (H/M-H, confirmed "the #1 introduction to Japanese whisky," widely stocked under $50, T2) | toki whisky (H/M-H) · japanese whisky highball (M/M, confirmed Toki specifically recommended as a highball base — ties to blog gap #4) · best japanese whisky for beginners (M/M, confirmed Toki dominates these lists) · suntory toki review (M/M) | Strong, approachable brand — good anchor for beginner-intent content |
| **Tenjaku** | tenjaku whisky (L-M/L, T1) | tenjaku vs toki (L/L, confirmed real comparison content exists) · tenjaku review (L/L, confirmed moderate coverage) | |
| **Yamazakura** | yamazakura whisky (L/L — **inferred, sparse coverage found**, T1) | yamazakura fine blended (inferred, low-confidence) | Weakest data in this batch — worth a manual re-check of the actual product before committing keyword copy |
| **Akashi** | akashi whisky (M/L-M, confirmed, T1-T2) | white oak akashi (confirmed **same brand/product**, not a separate line — both names can be used as synonyms on the same PDP) · akashi single malt (confirmed a real, separate limited NAS expression exists — future line-extension candidate, not a current keyword target) | Good news: no naming conflict to resolve, just use both terms on one page |

---

## Phase 8 — Product Gap Analysis

### A) Real brands with apparent demand, not in your catalog at all

| Brand | Note |
|---|---|
| **Chichibu / Ichiro's Malt** | Confirmed H demand but effectively unstockable — cult status, ~60,000L/year production, routinely 4-figure secondary prices. **Best used as a blog/content topic** (cult scarcity narrative), not a realistic stocking target. |
| **Mars Tsunuki** | Confirmed real, M demand. Second Mars/Hombo distillery (Kagoshima), current releases include a 2025/2026 edition. Genuine gap, distinct from Iwai. |
| **Mars Komagatake / Maltage Cosmo** | Confirmed real, currently in production, **"a permanent part of the core range, readily available"** — not a rarity. Directly resolves the two-hub structural issue if stocked. |
| **Fuji (Kirin)** | Confirmed real, M-H demand and rising — Kirin's Mount Fuji/Gotemba distillery, actively pushed as an export brand (Fuji Single Malt, Single Blended, Sanroku, Sanroku 18 Year). **A major-conglomerate brand with zero presence in your inventory.** |
| **Nikka Pure Malt Red** | Confirmed real, currently in production, distinct flavor profile (Yoichi + Miyagikyo blend). Genuine gap. |
| Nikka Pure Malt White/Black | Confirmed real but **discontinued** — collector/nostalgia content only, not a stocking target. |

### B) Missing expressions within brands you already stock

| Brand (in catalog) | Missing expression | Status |
|---|---|---|
| Hibiki | Blossom Harmony (you stock it, hub omits it) | Confirmed real demand, MSRP $160/secondary ~$486 |
| Nikka | Miyagikyo, Taketsuru, Yoichi (all 3 stocked, hub omits all 3) | Confirmed independently-searched, includes your 2 highest-priced Nikka SKUs |
| Togouchi | 15 Year (you stock it, hub names 9/18 Year instead) | Straightforward copy correction |
| Mars/Hombo | Komagatake, Maltage Cosmo | Confirmed real, currently in production, not a rarity — resolves the two-hub problem if stocked |

**Priority read:** the Nikka and Hibiki hub omissions are pure copy fixes (you already stock these — just add them), zero stocking decision required, and should be the fastest wins in this whole batch. Fuji (Kirin) is the strongest new-brand case — a major producer with zero shelf presence.

---

## Blog Gap Check

Existing posts ("Best Japanese Whisky," "Japanese Whisky Brands Guide") don't overlap with any of these 4 confirmed gaps:

- **Why Is Japanese Whisky So Expensive?** — confirmed heavily published topic with a real structural answer (barley import dependency, faster angel's-share evaporation in Japan's climate, mizunara oak cost, aged-stock scarcity), not just hype content. Strong new-post candidate.
- **Japanese Whisky vs. Scotch** — confirmed, actively published even by major brands (Chivas Regal itself publishes this). Real distinct intent: legal-definition, peat/style, and aging-climate differences.
- **Why Is Japanese Whisky Hard to Find? (The Shortage)** — confirmed real, ongoing, newsworthy (2025 "Has Japanese whisky peaked?" coverage). Ties directly to your allocated inventory (Yamazaki 18, Hakushu 18, Taketsuru 21, Hibiki 21/30) — strong pillar-post candidate with lots of internal-link potential.
- **How to Drink Japanese Whisky (Mizuwari & Highball Culture)** — confirmed real and distinctly documented, ties naturally to Suntory Toki (marketed explicitly as a highball base) and Nikka Days.

---

## Other flags

1. **Kavalan miscategorization is a real compliance/trust issue, not just SEO** — move out of `japanese-whisky` into its own Taiwanese/Asian-whisky bucket, target "kavalan" + "taiwanese whisky" as its own cluster.
2. **Nikka and Hibiki hub fixes are the fastest wins in this batch** — no stocking decision needed, just add the already-stocked SKUs to the copy.
3. **Mars/Hombo two-hub problem needs a decision**: stock Komagatake/Cosmo (confirmed real, genuinely available) to match the existing hub's promise, or merge the two hubs and rewrite to match only what's stocked.
4. **Togouchi hub needs a straightforward correction** (9/18 Year → Premium/15 Year).
5. **All 3 Japanese subcategory hubs are missing** (Blended, Single Malt, Premium) — zero exist currently, worst coverage of any category.
6. **Yamazakura has the weakest data in this whole 4-category pass** — worth a manual double-check of the actual product before finalizing keyword copy.

## What to check

1. OK to move Kavalan to its own Taiwanese-whisky bucket (new category/subcategory, or a standalone page outside the whiskey categories)?
2. Fix the Nikka and Hibiki hub omissions now — no stocking decision needed, just copy?
3. Fix the Togouchi hub's named age statements to match actual stock (Premium/15 Year)?
4. Stock decision on Mars Komagatake/Maltage Cosmo — resolves the two-hub problem either way you go?
5. Stock decision on Fuji (Kirin), Nikka Pure Malt Red, Mars Tsunuki — or log to products-to-stock.md and proceed with SEO/copy on current stock?
6. Build the 4 blog gaps (Why So Expensive, vs. Scotch, Why Hard to Find, How to Drink)?
