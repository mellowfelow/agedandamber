# Keyword Map — Scotch Whisky
**Site:** Aged & Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — nothing implemented yet. Review, flag changes, then I'll build.
**Methodology:** keyword-engine skill — KD 0–25 = T1, 26–40 = T2, 41–55 = T3 (supporting only), 56+ dropped.

## ⚠️ Same caveat as Bourbon: no SEMrush export exists for Scotch

Every figure below is a web-research estimate — Google autocomplete, "People also ask," competitive density (who's ranking), and verified real pricing/availability. Flagged **[confirmed]** where I found real evidence of active search/sale, **[inferred]** where it's a reasonable guess from the brand's stature alone.

---

## Current-state audit (read this first)

- **0 of 46 Scotch products have any `seo` field.**
- **16 brand hubs exist, only 4 have FAQs** (Macallan, Glenfiddich, Laphroaig, Aberlour).
- **3 confirmed duplicate products** — same real bottling listed twice at two prices (main catalog vs. "new arrivals" tail):
  - Aberlour 16 Year: $129 vs. $99.99
  - Glen Scotia Double Cask: $54 vs. $59.99
  - GlenDronach 15 Year Revival: $129 vs. $114.99
- **Scotch has the worst brand-hub over-promising of any category so far** — nearly every hub names 3–5 age statements/editions, of which typically only 1–2 are actually stocked.
- **Slug/name mismatch resolved (see below)** — Glenmorangie: the site's slug says "12 Year," the name field says "10 Year." Real-world answer: **the 12 is currently correct.** Glenmorangie officially rebranded "The Original" from a 10 Year to a 12 Year age statement in August 2024 — the slug is right, the name field is the stale one. Confirm which bottle you're actually sourcing before fixing, since 10-Year old stock is still sitting on some shelves.
- **Subcategory mis-tag:** Glen Scotia's original SKU is tagged `Single Malt Scotch` instead of `Campbeltown Scotch` (its duplicate is tagged correctly) — fix alongside the duplicate consolidation.
- **9 real, well-known Scotch brands not stocked at all**: Talisker, Auchentoshan, Cragganmore, Aberfeldy, Benromach, Tomatin, Craigellachie, plus Glenmorangie's real sibling expressions beyond "The Original."

---

## Category Page: `/shop/scotch-whisky/`

Primary: **scotch whisky** (est. very high vol, high comp — Dropped-tier as a ranking target, kept only as the page's semantic identity)
Secondary (6): buy scotch whisky online (est. med vol, med-high comp, T3) · peated scotch whisky (est. med vol, med comp — **T2, confirmed real distinct cluster**) · speyside single malt scotch (est. med-low vol, med comp, T2) · scotch whisky gift set (est. med vol, low-med comp — **T1, confirmed real seasonal retailer category**) · best scotch under $100 (est. med vol, med comp — **T2, confirmed heavily-written topic**) · blended scotch whisky (est. med vol, med comp, T2/T3)

No overlap with existing posts (Regions Explained, Best Scotch Whisky, Islay vs Speyside) — all category-page terms above are commercial/filter intent, distinct from that informational content.

---

## Per-Brand Keywords (24 brand clusters)

| Brand | Primary (est. demand/comp) | Secondary | Notes |
|---|---|---|---|
| **The Macallan** | macallan 12 (H/H, confirmed most-searched single malt globally) | macallan 18 (H/H, confirmed) · macallan double cask (M-H/M, confirmed) · macallan sherry oak (M/M, confirmed) · macallan 15 (M/M, confirmed) · macallan price (M-H/M) | "12 vs 18 vs 25" comparison already a blog post — internal-link, don't duplicate |
| **Glenfiddich** | glenfiddich 12 (H/H, confirmed top global seller) | glenfiddich 15 solera (M-H/M, confirmed) · glenfiddich 18 (M/M, confirmed) · glenfiddich 12 sherry cask (L-M/L, real newer SKU) · glenfiddich price (M/M) | "vs Glenlivet" already a blog post |
| **Johnnie Walker** | johnnie walker blue label (H/H, confirmed) | johnnie walker black label (H/H, confirmed) · johnnie walker double black (M/M, confirmed) · johnnie walker gold label reserve (M/M, confirmed) · johnnie walker blue label price (H/M-H) · johnnie walker gift set (M/M) | "Labels Ranked" already a blog post |
| **The Balvenie** | balvenie doublewood 12 (M-H/M, confirmed) | balvenie 21 portwood (M/M, confirmed) · balvenie 12 (M/M) · balvenie price (M/M) · **balvenie caribbean cask** (M/M, confirmed real standing SKU ~$85, **not stocked — strong gap**) · balvenie tun 1509 (L-M/L-M, confirmed real but limited-batch, weaker reliability case) | |
| **The Dalmore** | dalmore 12 (M/M, confirmed) | dalmore 15 (M/M) · dalmore price (M/M-H, luxury positioning) · dalmore king alexander iii (L/L, not stocked) · dalmore vs macallan (L-M/L) | |
| **Aberlour** | aberlour 16 (M/M, confirmed) | **aberlour a'bunadh** (M-H/M, confirmed cult favorite — **site has an A'bunadh review blog post but no A'bunadh SKU stocked**, content/inventory mismatch) · aberlour 12 (M/M, not stocked) · aberlour price (M/M) | ⚠️ Duplicate — consolidate $129/$99.99 listings first |
| **GlenDronach** | glendronach 15 revival (M/M, confirmed, matches your ~$119 range) | glendronach 18 allardice (M/M, confirmed) · glendronach 12 (M/M, not stocked) · glendronach price (M/M) | ⚠️ Duplicate — consolidate $129/$114.99; "Review" already a blog post |
| **Glen Scotia** | glen scotia double cask (L-M/L, lightly confirmed — far smaller than Springbank) | glen scotia victoriana (L/L, not stocked) · glen scotia 15 (L/L, not stocked) · glen scotia price (L-M/L) | ⚠️ Duplicate — consolidate $54/$59.99; fix subcategory tag to Campbeltown |
| **The Glenlivet** | glenlivet 12 (H/H, confirmed #1/#2 best-selling single malt globally) | glenlivet 14 cognac cask (M/M, confirmed real) · **glenlivet founder's reserve** (M/M, confirmed real, brand's actual entry-tier replacement in many markets, **not stocked — decent gap**) · **glenlivet nadurra** (M/L-M, confirmed real cask-strength line, cult following, **not stocked**) · glenlivet 18 (M/M, not stocked) | "vs Glenfiddich" already a blog post |
| **Ardbeg** | ardbeg 10 (H within niche/M-H, confirmed flagship) | ardbeg uigeadail (H within niche/M, confirmed — frequently named "world's best" in awards) · **ardbeg corryvreckan** (M-H/M, confirmed real current core range, **not stocked**) · **ardbeg wee beastie** (M/L-M, confirmed real entry-price core item, **not stocked**) · **ardbeg an oa** (M/L-M, confirmed real core item, **not stocked**) | All 3 gap items are current standing range, not rare drops |
| **Bowmore** | bowmore 12 (M-H/M, confirmed) | bowmore 15 (M/M, not stocked) · bowmore 18 (L-M/M, not stocked) · bowmore price (M/M) | |
| **Buchanan's** | buchanans 12 (M-H/M, confirmed — strong in Latin American/Hispanic-market search behavior) | buchanans deluxe (M/L-M, confirmed) · buchanans price (M/M) · buchanans 18 (L-M/M, not stocked) | Demand may skew Spanish-language ("buchanans precio") — worth separate research if targeting that audience |
| **Chivas Regal** | chivas regal 12 (H/H, confirmed globally iconic blend) | chivas regal 18 (M-H/M, confirmed) · chivas regal price (H/M-H) · chivas regal gift set (M/M) · chivas regal 25 (L-M/M, not stocked) | |
| **Deanston** | deanston 12 (L-M/L, confirmed, modest-volume Highland brand) | deanston virgin oak (L/L, not stocked) · deanston price (L-M/L) | Lower priority overall |
| **Dewar's** | dewars white label (M-H/M-H, confirmed top-selling blend in US specifically) | dewars 12 (M/M, not stocked) · dewars price (M/M) · dewars 18 (L/M, not stocked) | |
| **Glenfarclas** | glenfarclas 12 (M/M, confirmed well-regarded family-owned Speyside) | glenfarclas 105 (L-M/L, cult cask-strength, not stocked) · glenfarclas 15 (L-M/L-M, not stocked) · glenfarclas price (L-M/L) | |
| **Lagavulin** | lagavulin 16 (H within niche/M-H, confirmed iconic, pop-culture-boosted) | **lagavulin 8** (M/M, confirmed real current ~$69, **not stocked — strong gap**) · **lagavulin distillers edition** (M/M-H, confirmed real current ~$144, **not stocked**) · lagavulin vs laphroaig (M/L-M) | |
| **Laphroaig** | laphroaig 10 (H within niche/M, confirmed flagship) | laphroaig lore (M/M, confirmed real premium NAS) · **laphroaig quarter cask** (M/L-M, confirmed real popular variant, **not stocked — gap**) · laphroaig vs ardbeg (M/L-M) | |
| **Monkey Shoulder** | monkey shoulder (H/M, **confirmed literally the #1 best-selling Scotch at high-end bars per Drinks International 2018/2019, beating Johnnie Walker**) | monkey shoulder cocktails (M/L-M, confirmed — specifically marketed/searched for mixing) · monkey shoulder price (M-H/M) · monkey shoulder review (M/L-M) | Strongest single confirmed-demand fact in this whole batch |
| **The Singleton** | singleton 12 (M/M, confirmed, strongest in Asian markets, real US presence) | singleton of glendullan (L-M/L, confirmed alternate market naming) · singleton vs glenlivet (L/L) | |
| **Highland Park** | highland park 18 (M-H/M-H, confirmed award-winning) | **highland park 12 / viking honour** (M/M, confirmed — **this is the brand's actual flagship 12yo, ~$55-65, currently named on your hub but not stocked — the single strongest expression gap in this batch**) · highland park 25 (L/M-H, not stocked) · highland park price (M/M) | Top-priority stocking gap |
| **Oban** | oban 14 (M-H/M, confirmed "Classic Malts" entry, strong recognition) | oban 18 (M/M-H, confirmed) · oban little bay (L-M/L, not stocked) · oban vs talisker (L-M/L) | |
| **Port Charlotte (Bruichladdich)** | port charlotte 10 (M within niche/M, confirmed current flagship) | bruichladdich classic laddie (L-M/L, real unpeated sibling line, not stocked) · port charlotte vs octomore (L/L) | ⚠️ Naming clarity: recommend the PDP explicitly identify this as **Port Charlotte 10** (the peated line) to avoid confusion with unpeated Bruichladdich-proper |
| **Springbank** | springbank local barley (M within niche/L-M, confirmed real current annual series) | **springbank 10** (M-H/M, confirmed — **the brand's true volume-selling flagship, likely higher demand than the Local Barley variant you actually stock**) · springbank 15 (M/L-M, confirmed 2025 release) · springbank 18 (M/L-M, confirmed 2025 release) | Local Barley naming is accurate, not an error — see Section 5 |

---

## Phase 8 — Product Gap Analysis

### A) Real brands with apparent demand, not in your catalog at all

| Brand | Note |
|---|---|
| **Talisker** | Confirmed major gap. Diageo's most-visited distillery, consistently top-tier single malt, same "Classic Malts" tier as your already-stocked Oban. `talisker 10`, `talisker storm`, `talisker skye` all real, moderate-high demand. **Strongest new-brand case in this batch.** |
| **Glenmorangie siblings** | You stock only "The Original." Real, current, actively-sold: Lasanta (sherry-finished), Quinta Ruban (port-finished), Nectar D'Or (Sauternes-finished), Glenmorangie 18. Low-effort expansion — hub already exists. |
| **Auchentoshan** | Confirmed real Lowland distillery. Low-medium demand, low competition. You currently stock **zero Lowland malts**, and already run a Highland vs. Lowland content angle — this closes that regional gap. |
| **Cragganmore** | Confirmed real, one of Diageo's original "Classic Malts," Speyside. Moderate enthusiast-niche demand, low-medium competition. |
| **Aberfeldy** | Confirmed real, home of Dewar's World of Whiskies, ingredient in Dewar's blends. Low-medium demand, low competition, natural cross-sell since Dewar's is already stocked. |
| Benromach, Tomatin, Craigellachie | Confirmed real, actively sold, but enthusiast-only volume. Lower priority — worth noting, not urgent. |

### B) Missing expressions within brands you already stock

| Brand (in catalog) | Missing expression | Status |
|---|---|---|
| Highland Park | Viking Honour / 12 Year | **Top gap — this is the brand's actual flagship, currently named on your own hub page but not stocked** |
| Lagavulin | 8 Year, Distillers Edition | Both confirmed real, current, standing SKUs |
| Ardbeg | Corryvreckan, Wee Beastie, An Oa | All 3 confirmed current core range, differentiated price points |
| Balvenie | Caribbean Cask 14 | Confirmed real standing SKU ~$85 |
| Glenlivet | Founder's Reserve, Nadurra | Both confirmed real, current |
| Laphroaig | Quarter Cask | Confirmed real, popular |
| Springbank | Plain 10 Year (alongside Local Barley, not instead of) | Confirmed higher-demand than what's stocked |
| Aberlour | A'bunadh | ⚠️ Site already has a dedicated A'bunadh review blog post pointing at a product you don't sell — fix the mismatch either by stocking it or softening the post's framing |

**Priority read:** Highland Park Viking Honour is the single strongest gap in this entire batch — it's the brand's real flagship, already named on your own hub copy, and simply isn't in inventory. Talisker is the strongest new-brand case. The Aberlour A'bunadh content/inventory mismatch is a quick, cheap fix either way (stock it, or adjust the blog post).

---

## Blog Gap Check

Existing coverage (12 posts) is genuinely deep — most obvious topics are taken. Real remaining gaps:

- **Single Malt vs. Blended Scotch** — confirmed strong standalone topic, many dedicated competitor articles, production-method framing distinct from your existing region-based "Islay vs Speyside" post. **Genuine gap, high priority** (common beginner query).
- **What Does Peated Mean? / Peated Scotch Explained** — confirmed real, frequently searched (ppm, "what is peat"), not covered despite topical adjacency to Islay content. **Genuine gap**, good internal-link target from Ardbeg/Laphroaig/Lagavulin/Port Charlotte pages.
- **Scotch Age Statement / NAS Explained** — confirmed real, distinct, commonly searched. Not covered elsewhere. Solid secondary gap.

**Deprioritize:** "How Is Scotch Made" (may overlap your existing "What Is Scotch Whisky?" post — check its depth before commissioning) and "Highland vs Lowland Scotch" (almost certainly redundant with your existing "Regions Explained" post, which should already cover this as one of five regions — fold in as a section there instead of a new post).

---

## Other flags

1. **3 duplicate products to consolidate** before any SEO work: Aberlour 16 Year, Glen Scotia Double Cask, GlenDronach 15 Year Revival — same pattern as the Planteray/Plantation rum fix (merge, keep the more detailed listing, 301 redirect the other).
2. **Glen Scotia subcategory mis-tag** — fix alongside the duplicate consolidation (should be Campbeltown Scotch, not Single Malt Scotch).
3. **Glenmorangie slug/name conflict** — the "12" in the slug is likely correct per the 2024 official rebrand; the "10" in the name field is stale. Confirm which bottle you're sourcing before fixing.
4. **9 brand hubs missing entirely need to be weighed against 9 subcategory-hub gaps too** — Single Malt Scotch, Highland Scotch, and Aged and Premium Scotch subcategory hubs don't exist yet.
5. **Highland Park hub already promises Viking Honour** — this is the strongest single "just go stock it" case in the whole whiskey pass so far, stronger even than Bourbon's Pappy Van Winkle case in terms of low-friction upside (real flagship, moderate price, already implied on your own page).

## What to check

1. OK to consolidate the 3 duplicate products (merge to the more complete/accurate listing, add 301 redirects)?
2. Stock decision needed on: Highland Park Viking Honour, Talisker (new brand), Lagavulin 8/Distillers Edition, Ardbeg's 3 core-range gaps, Balvenie Caribbean Cask, Glenlivet Founder's Reserve/Nadurra, Aberlour A'bunadh (to match your existing blog post) — or proceed with SEO/copy work on current stock and log these to products-to-stock.md?
3. Fix Glen Scotia's subcategory tag now?
4. Confirm the Glenmorangie 10-vs-12 question — which bottle are you actually sourcing?
5. Build the 3 clean blog gaps (Single Malt vs Blended, What Does Peated Mean, Age Statement Explained)?
6. OK to build new hubs for the 9 unstocked-brand candidates only once/if you decide to stock them, or do you want research-only hub pages built now regardless (informational, no "buy" CTA) the way Ararat was flagged-but-skipped in Cognac?
