# Master Blog Content Calendar — Aged & Amber

**Generated:** August 2026 | **Source:** Full mining pass across `MASTER_SEO_IMPLEMENTATION.md` + all 8 raw batch files (blog-plan-batch1/2/5/6/7.md, keyword-map-batch3/4.md, product-gaps files) + session keyword-map v2 docs (Bourbon/Scotch/Irish/Japanese/Vodka) + dedicated wine/champagne/beer/cider/NA/RTD keyword-map exports.

**Status: Phase 1 + Phase 2 complete (2026-08-29 – 2026-12-09).** Every 🎯 and 🏷️ gap identified in the original mining pass has been built. **Current live count: 268 blog posts**, verified directly against `src/data/blog.ts` with zero duplicate slugs and a clean `tsc --noEmit`.

---

## What happened across Phase 1 and Phase 2

**Phase 1 (2026-08-29, 10 posts):** One flagship pillar post for every category that had live shop pages but zero blog content — Beer, Fine Wine, Champagne & Sparkling, Cider, Non-Alcoholic Beer & Cider, Non-Alcoholic Spirits, Non-Alcoholic Champagne & Sparkling, Non-Alcoholic RTD Cocktails, RTD & Liqueurs, Non-Alcoholic Wine. This closed the single worst gap in the project: categories with real inventory and zero supporting content.

**Phase 2 (2026-08-29 – 2026-12-09, 194 posts):** Every remaining 🎯 (high-priority, real-volume) and 🏷️ (brand deep-dive/comparison) gap identified in the original mining pass, built out category by category. Closely related brand-comparison and brand-spotlight clusters were consolidated into single, more substantial posts rather than published as many thin, overlapping pages (e.g. five separate rum-brand spotlights became one "Zacapa, El Dorado, Diplomático..." brand guide) — better for both readers and SEO than a wall of near-duplicate pages, while still covering every topic in the original gap list.

**Expand-existing items (2 of 3 closed):** Two of the three 📎 "add a section to a live post" items from the original mining pass were completed — the "Is [Brand] a Bourbon?" FAQ cluster was added to `bourbon-vs-whiskey`, and the home bar starter-kit cross-sell + Glencairn/whiskey-stones cross-references were added to `how-to-build-a-home-bar`. The third (reinforcing the already-flagged Whiskey Stones vs. Ice and Glencairn Glass gaps) was superseded once those became full standalone posts in Phase 2.

---

## Final live count by category

| Category | Live posts |
|---|---|
| Non-Alcoholic Education | 35 |
| Wine Education | 28 |
| Bar Essentials Education | 20 |
| Scotch Education | 19 |
| Bourbon Education | 19 |
| Beer Education | 19 |
| Champagne Education | 19 |
| Liqueur Education | 17 |
| Cocktail Guide | 14 |
| Tequila Education | 12 |
| Irish Whiskey Education | 10 |
| Japanese Whisky Education | 9 |
| Cognac Education | 8 |
| Rum Education | 7 |
| Vodka Education | 7 |
| Cider Education | 7 |
| Whiskey Education | 6 |
| Gin Education | 6 |
| Rye Whiskey Education | 3 |
| Cask Craft | 1 |
| Distillery Insights | 1 |
| Spirits Guide | 1 |
| **Total** | **268** |

Every category that has product pages live on the site now has substantial, genuine blog coverage — no more zero- or single-post categories anywhere in the catalog.

---

## What's left (Phase 3 — genuinely open, not yet scoped)

The original mining pass's topic pool is now fully built. Future content work is a fresh scoping exercise rather than working through a pre-existing backlog:

- **Seasonal refreshes** — several posts (Best Rosé Wines for Summer, Best Fall & Winter Hard Ciders, Holiday & Seasonal Mocktails Guide, Dry January guides) are built as evergreen posts but would benefit from an annual content refresh or a dedicated seasonal push closer to the relevant time of year.
- **New product-driven gaps** — as new brands and products get stocked (see `docs/products-to-stock.md`), new blog-worthy gaps will naturally emerge that didn't exist in this mining pass — e.g. any of the new-stock-images-batch brands (BuzzBallz, Ballast Point, Grüvi, JOYUS, etc.) could support their own future brand-spotlight posts once there's more editorial reason to feature them individually.
- **A fresh keyword-mining pass** — this entire calendar was built from research conducted through August 2026; a new SEMrush/keyword-research pass at some point in the future would surface genuinely new gaps rather than re-covering this now-exhausted pool.
- **Internal linking pass** — with 268 posts now live, a dedicated pass linking related posts to each other (e.g. `is-cabernet-sauvignon-sweet-or-dry` ↔ `cabernet-sauvignon-vs-merlot` ↔ `malbec-vs-cabernet-vs-merlot-vs-pinot-noir`) and to relevant product/brand hub pages would compound the SEO value of the content that now exists, rather than leaving each post as an island.

## Maintenance note

This document's original per-category gap-tracking structure (built topic by topic against real Vol/KD data) has been superseded now that the pool is exhausted — that granular history remains in git history (`git log -- docs/blog-content-calendar.md`) if a future session needs to trace back which specific keyword data justified a given post's build priority. Going forward, log new gaps and new builds against the shorter "Phase 3" list above rather than reviving the old per-bullet format.
