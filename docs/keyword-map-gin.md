# Keyword Map — Artisanal Gin (Batch: Gin)
**Site:** Aged & Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — nothing implemented yet. Review, flag changes, then I'll build.
**Methodology:** keyword-engine skill — KD 0–25 = T1 Quick Win, 26–40 = T2 Worth Targeting, 41–55 = T3 Supporting only (never primary), 56+ dropped. Max 5 secondary per page cluster.
**Source:** 1 category-level export + 8 brand-level exports (Tanqueray, Hendrick's, Aviation, Monkey 47, The Botanist, Roku, Empress 1908, Drumshanbo Gunpowder) + one supplementary Bumbu (rum) block that arrived in this paste — flagged separately at the bottom, since Bumbu belongs to the already-approved Rum batch.

---

## Phase 1 — Filter Summary

**Raw rows received:** ~750
**Dropped — word collision with something unrelated:**
- "Cotton gin" (Eli Whitney's device) — ~20 rows, up to Vol 12,100
- "Gin rummy" (the card game) — ~15 rows, up to Vol 12,100
- Gina Carano, Gina Rinehart (real people, name collision on "Gina") — 6 rows
- "Gino and Jasmine" (a reality TV couple) — 4 rows
- "Monkey Shoulder" (a different, unrelated Scotch whisky brand) — 1 row, real risk of brand confusion if kept near Monkey 47
- "Bumbo" (baby seat brand) and Indonesian cooking "bumbu" (spice paste — minyak bumbu, bumbu rendang, bumbu bali restaurant) — ~25 rows in the Bumbu block, genuine word collision
- Tanqueray's Bar & Grille (an Orlando restaurant) — 5 rows
- "The Botanist" as a TV show / profession — the bare head terms "botanist" (Vol 40,500, KD 74) and "the botanist" (Vol 33,100, KD 58) look dominated by the non-gin meaning given the unusually high KD for a niche gin brand — treated as unreliable, not assigned
- "Gunpowder whiskey," "drumshanbo vodka" tangents — kept as LSI notes, not primary (see Drumshanbo section)

**KD 56+ dropped:** aviation cocktail (KD 54, kept as blog-only per below since volume is too large to ignore) · "empress gin" bare (KD 56) · botanist bare terms (KD 58–74)

---

## Category Page: `/shop/artisanal-gin/`

Primary: **what is gin made from** (12,100, KD 22, T1) — informational, blog/pillar candidate, not the category page itself
Category page primary stays: **buy gin online** (already live, no new data conflicts it)
Secondary (5): what is gin (6,600, KD 27) · how is gin made (3,600, KD 15) · what is sloe gin (1,600, KD 26) · what is the difference between gin and vodka (1,000, KD 19) · london dry gin (14,800, KD 17 — genuinely huge, low-KD, currently unassigned to any page)

**Flag:** "london dry gin" (14,800, KD 17, T1) is a big opportunity with no natural home yet — it's a style, not a brand. Could become a new subcategory page (`/shop/artisanal-gin/london-dry/`) similar to how Scotch has Islay/Speyside/Campbeltown subcategory pages. Worth a decision before I build anything against it.

**FAQ candidates (question-intent, real volume):**
- Is gin gluten-free? (2,400, KD 10)
- Does gin go bad? (880, KD 6) / Does gin expire? (590, KD 7)
- Is gin good for you? (720, KD 18)
- How many calories in a gin and tonic? (1,000, KD 12)
- What does gin taste like? (2,400, KD 17)

**Blog gap flagged:** "What Is Gin Made From?" (12,100, KD 22) — mirrors the Rum batch's equivalent gap. High volume, low KD, zero current coverage.

---

## Brand Pages — Upgrade Existing (3 already live, thin data before)

### Empress 1908 (currently live with generic copy)
Primary: **empress 1908 gin** (6,600, KD 13, T1)
Secondary (5): purple gin (5,400, KD 9, T1) · indigo gin (2,900, KD 9, T1) · empress 1908 indigo gin (2,400, KD 35, T2) · empress indigo gin (1,900, KD 15, T1) · empress 1908 elderflower rose gin (390, KD 5, T1)
FAQ candidates: "What makes Empress gin purple?" (90, KD 19) · "Is Empress gin gluten-free?" (50, KD 11)
**Flag:** bare "empress gin" (22,200, KD 56) dropped — too broad/high-KD to be reliable brand signal, not assigned.

### Drumshanbo Gunpowder (currently live with generic copy)
Primary: **gunpowder gin** (4,400, KD 17, T1) — replaces the current primary, which was more generic
Secondary (5): drumshanbo gunpowder irish gin (3,600, KD 16, T1) · drumshanbo gin (2,400, KD 27, T1) · irish gin (2,400, KD 17, T1) · drumshanbo (1,600, KD 20, T1) · gunpowder irish gin (1,600, KD 8, T1)
**Flag — product gap, not stocked:** Drumshanbo also makes a whiskey ("drumshanbo whiskey," 390, KD 15) and a vodka ("drumshanbo sausage tree vodka," 110, KD 6). If you don't stock those, no action; if you do, they need their own pages.

### Bumbu — see the standalone note at the bottom; this data belongs to the Rum batch.

---

## Brand Pages — Build New (5, real search demand, currently zero page)

### Tanqueray
Primary: **tanqueray gin** (18,100, KD 29, T2)
Secondary (5): london dry gin (14,800, KD 17, T1 — shared with category, see flag above) · tanqueray 10 (2,900, KD 11, T1) · tanqueray no ten gin (1,000, KD 13, T1) · tanqueray rangpur (720, KD 7, T1) · tanqueray sevilla (320, KD 15, T1)

### Hendrick's
Primary: **hendricks gin** (27,100, KD 28, T2)
Secondary (5): hendrick's gin (6,600, KD 31, T2) · scottish gin (1,900, KD 5, T1) · hendrick's grand cabaret gin (480, KD 13, T1) · hendrick's orbium gin (260, KD 6, T1) · hendricks gin flavors (720, KD 19, T1)
**Huge FAQ bank opportunity:** dozens of Vol 20–260 questions — gluten-free, botanicals, calories, where it's made, "is Hendrick's a London Dry?" — enough for a genuinely deep FAQ section (10+ Q&As) rather than the usual 1–2.

### Aviation
Primary: **aviation gin** (12,100, KD 38, T2)
Secondary (4): aviation american gin (6,600, KD 27, T1) · american gin (720, KD 18, T1) · aviation gin price (210, KD 6, T1) · ryan reynolds gin (880, KD 45 — T3, entity note only, not a target keyword)
**Blog opportunity, separate from the brand page:** "Aviation Cocktail" (22,200, KD 54) + "aviation cocktail recipe" (6,600, KD 46) — both above the T2 ceiling individually, but combined volume is large enough to justify a recipe blog post that links to the Aviation gin brand page as its base spirit. Flagging for your call rather than building automatically, since a KD 54/46 post is a longer-term bet.

### Monkey 47
Primary: **monkey 47 gin** (8,100, KD 13, T1)
Secondary (5): monkey 47 (6,600, KD 13, T1) · monkey gin (1,900, KD 12, T1) · german gin (720, KD 7, T1) · monkey 47 schwarzwald dry gin (720, KD 13, T1) · monkey 47 gin price (480, KD 7, T1)
**Noise caught:** "monkey shoulder gin" (170, KD 3) is a *different, unrelated Scotch whisky brand* (Monkey Shoulder is a blended malt) — dropped, not conflated with Monkey 47.

### The Botanist
Primary: **botanist gin** (5,400, KD 28, T1) — using this instead of the bare "botanist" head terms (dropped above as unreliable)
Secondary (4): the botanist gin (4,400, KD 30, T1) · the botanist islay dry gin (720, KD 23, T1) · islay dry gin (390, KD 21, T1) · islay gin (170, KD 13, T1)

### Roku
Primary: **roku gin** (9,900, KD 17, T1)
Secondary (4): japanese gin (2,900, KD 22, T1) · suntory roku gin (880, KD 28, T1) · roku japanese gin (590, KD 15, T1) · roku gin price (480, KD 10, T1)

---

## Standalone note: Bumbu (Rum batch) enrichment data received in this paste

This export included a large Bumbu block that's about rum, not gin — it belongs to the already-approved and live Rum batch, where Bumbu currently has zero secondary keywords (flagged as thin in that review doc). Real usable data found here:

Primary (unchanged): **bumbu rum** (22,200, KD 28, T2)
New secondary now available (5): bumbu (6,600, KD 9, T1) · bumbu original rum (480, KD 16, T1) · bumbu xo rum (590, KD 20, T1) · bumbu rum price (590, KD 7, T1) · bumbu rum near me (260, KD 13, T1)
**Noise dropped:** the Indonesian cooking-paste collision (minyak bumbu, bumbu rendang, bumbu bali restaurant, bumbu sauce, bumbu seasoning — ~15 rows), the baby-seat "Bumbo" collision, and an unverified "Lil Wayne owns Bumbu" thread (several rows mention it, but I haven't independently confirmed this and won't put an unverified celebrity-ownership claim on a product page — flagging it here rather than writing it into copy).

I'll fold this into the Rum batch's Bumbu page once you confirm — separate small change, not part of this Gin batch.

---

## What to check

1. "London dry gin" (14,800, KD 17) — new subcategory page, or fold into the category page copy? It's currently homeless.
2. Aviation Cocktail blog post — worth building despite KD 54/46, or hold?
3. Drumshanbo whiskey/vodka — stocked or not? Determines if they need pages.
4. Bumbu enrichment — fine to apply to the live Rum page once you've reviewed this?
5. Hendrick's FAQ bank — want the full 10+ question treatment, or keep it to the usual 1–2?
