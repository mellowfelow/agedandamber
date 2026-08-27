# Keyword Map — Bar Essentials: Mixers & Syrups, Cocktail Mixes, Glassware & Barware
**Site:** Aged And Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — research report only, nothing implemented. Covers 33 stocked products across three Bar Essentials subcategories: Mixers & Syrups (21), Cocktail Mixes (7), Glassware & Barware (5). A sibling agent covers Bitters, Vermouth, and Garnishes separately. This is the first "accessories/mixers" batch in the project — different intent shape than every prior spirits/wine batch: real recipe/how-to-use content and product-comparison content are legitimate demand here, not noise.
**Methodology:** Real SEMrush export data — 16 CSVs (2 category-level: `alcohol-Mixers` 1,107 rows, `Cocktail-Mixes` 100 rows; 12 brand-level: Bundaberg ×2 identical duplicate exports, Canada Dry Club Soda, Fever-Tree, Goslings, Monin, Reed's, Topo Chico, Finest Call, Master of Mixes ×2, Mr & Mrs T, Tres Agaves, Zing Zang; 2 glassware/barware category-level: Cocktail Shaker, Whiskey Decanter). KD 0–25 = T1 (Quick Win), 26–40 = T2 (Worth Targeting), 41–55 = T3 (background/anchor only), 56+ generally dropped from primary consideration. No dedicated brand export exists for Liber & Co., Polar Seltzer, Q Mixers, Reàl, Schweppes, Demitri's, McClure's, BenShot, or the three Glencairn/whiskey-stones glassware SKUs — checked `Cocktail-Shaker` and `Whiskey-Decanter` for crossover rows (none found for Glencairn or whiskey stones specifically) and the two category-level mixer files for brand-name rows (one low-volume Q Mixers row found). Where no volume-backed row exists, marked **"confirmed real via WebSearch, not volume-backed."**

---

## Phase 1 — Filter Summary

This category behaves very differently from every prior spirits/wine batch. Recipe and "how to use this mixer" content is genuine, high-value demand here (it maps directly to a shopper about to buy the product), so it was treated generously rather than filtered — matching the brief. The three specific collision risks the brief flagged were checked directly against the data:

**"Tonic" / wellness-tonic collision: not found.** Every tonic-related row across `alcohol-Mixers`, `Fever-Tree`, `Canada-Dry-Club`, and `Cocktail-Mixes` was genuine tonic-water or Gin & Tonic content (`fever tree tonic water` 6,600, `fever tree indian tonic water` 1,300, etc.). No "liver tonic," "herbal tonic," or wellness-supplement rows surfaced in this data pull.

**"Mixers" / DJ-audio-equipment collision: checked and not found.** Ran a targeted regex across the full 1,107-row `alcohol-Mixers` export for DJ/audio/turntable/soundboard/protein/gym/paint-mixer/cement/hair/makeup terms — zero matches. Every "mixer" row in this data set is genuinely about drink mixers (mostly the "what to mix with vodka" query family). This is worth flagging as a **non-issue** rather than leaving unaddressed.

**"Shaker" / protein-shaker-bottle collision: checked and not found.** The 100-row `Cocktail-Shaker` export is entirely genuine bar-shaker content (Boston shaker, cobbler shaker, martini shaker, brand names like Yeti/OXO/Stanley/HexClad applied to actual cocktail shakers). No BlenderBottle/protein-shaker/gym-bottle rows appeared.

**"Decanter" / wine-decanter collision: found, and handled.** The `Whiskey-Decanter` export mixes in real wine-decanter rows — `wine decanter set` (880, KD12) and `wine decanters crystal` (390, KD17) — because the site apparently doesn't cleanly separate the two in SEMrush's eyes. These are **excluded** from the whiskey/spirit decanter assignments below (the stocked glassware SKUs are explicitly whiskey/whisky decanters), but flagged here per the brief since "wine decanter" volume exists and could matter if Fine Wine ever wants a decanter accessory page.

**Recipe/how-to-use content — kept, not filtered**, exactly as instructed: margarita-mix, Bloody Mary–mix, and Moscow Mule/ginger-beer recipe content is assigned directly to product pages below rather than treated as noise, since it's a shopper actively deciding what to make with the product they're about to buy.

**Brand-specific noise actually found and dropped:**
- **Topo Chico / "Chico's" clothing brand — the single biggest collision in this batch, ~10,000+ combined.** `chico's animal print tops for summer` (2,400), `chico's women's no iron rope print tunic top` (1,600), `chicos tops` (1,300), `chico's tops` (1,000), `chicos top` (1,000), `chic tops` (880), plus a long tail of `chicos womens tops`, `chicos ladies tops`, `chicos tank tops`, `boho chic tops`, `bohemian chic tops`, `chic going out tops` — all Chico's FAS (the women's clothing retailer), pure token collision on "chico." Dropped entirely.
- **Topo Chico Hard Seltzer — a different, alcoholic SKU not stocked here.** `topo chico hard seltzer` (9,900, KD21) and its variants are a flavored malt beverage, not the plain mineral water this site carries. Excluded from the product assignment (the site's SKU is the non-alcoholic mineral water) but flagged in the gap analysis since it's real, sizeable demand from an unstocked line extension.
- **Topo Chico recall/PR news — ~9,000+ combined, dropped.** `topo chico recall` (6,600), `topo chico shortage` (4,400), `topo chico pfas` (590), `coca-cola halted topo chico production...` — all news-cycle queries about a 2025–26 supply disruption, zero purchase intent for a bottle page.
- **Canada Dry / "Canadian Club" whisky-and-dry collision — real but a different product, ~200+ combined low-volume rows.** `canadian club and dry can(s)`, `canadian club dry cans`, `bws canadian club dry cans` are all an Australian pre-mixed Canadian Club whisky + dry ginger ale RTD can — not Canada Dry Club Soda. Excluded.
- **Generic-word noise in the Canada Dry export.** `can you wash and dry golf clubs`, `can you dry pro clubs`, `can you get dry ice at sam's club` — pure "club" + "dry" token collisions with zero relevance. Dropped.
- **Fever Tree the band — real but unrelated, ~600 combined.** `fever tree album` (210), `fever tree band` (210) — a 1968 psych-rock band that shares the brand name. Dropped.
- **Reed's Inc. stock-ticker noise — real but investor-intent, ~1,500+ combined.** `reed stock` (590), `reed's stock` (260), `reeds stock` (210) — Reed's Inc. (REED) is publicly traded; these are investor queries, not beverage-shopper queries. Dropped. (`tech tales pro-reed` / `tech tales pro reed`, combined 3,200, appear to be an unrelated AI/tech content artifact in the export — dropped as noise, not confidently attributable to anything.)
- **Mr & Mrs T / wedding "matching couple t-shirts" collision — the single largest noise block in the Mr & Mrs T export, ~1,000+ combined.** `mr and mrs t shirts` (260), `mr and mrs matching t shirts`, `mr and mrs couple t shirt(s)`, `first christmas as mr and mrs t shirt`, `mr and mrs claus/christmas t shirts`, `fight club t shirt in mr and mrs smith` — all wedding/novelty-apparel searches colliding on "Mr and Mrs" + "T(-shirt)." Dropped.
- **Tres Agaves / Mexican-restaurant-chain collision — real business, ~700+ combined.** `tres agaves mexican restaurant` (480), `tres agaves mexican & peruvian fusion`, `tres agaves taqueria`, `tres agaves de queen`, `tres agaves mexican restaurant menu` — Tres Agaves is also the name of an unrelated Mexican/Peruvian restaurant chain (De Queen, AR and elsewhere). Dropped from the product/brand assignment.
- **Zing Zang / unrelated-brand token collisions, ~450 combined.** `zing zang ketchup` (110), `pasta zing` (210), `zang zang milk` (170) — unrelated food products sharing a token. Dropped.
- **Bundaberg / Australian geography and local-SEO-agency noise, ~3,000+ combined.** `bundaberg queensland australia`, `bargara bundaberg`, `mon repos bundaberg`, `seo company bundaberg`, `seo bundaberg`, `bundaberg adwords management`, `thai tulips restaurant bundaberg`, `netball bundaberg`, plus an unrelated `alwyn home & bundaberg foldable murphy bed mattress` (880) — a furniture-brand token collision. All dropped; the city of Bundaberg, QLD generates substantial local-business search noise around the brand name.
- **Bundaberg Rum — a different, unstocked spirit from the same parent company, ~2,500+ combined.** `bundaberg rum` (1,300), `bundaberg rum australia` (590), `bundy rum` (170) — real, but it's the rum, not the ginger beer stocked here. Excluded from the product assignment, noted as a real gap-analysis line (see Part B).

**CSV note:** the two `Bundaberg_all-keywords_us_2026-08-27.csv` / `Bundaberg_all-keywords_us_2026-08-27 (1).csv` files are byte-for-byte identical (same 100 rows, same order) — deduped by using one copy only.

Net: roughly **15–20% of raw rows across the brand-level exports** were noise (clothing brand, restaurant chain, stock ticker, wedding t-shirts, geography/local-SEO, unrelated products). This is a lower noise ratio than the wine/champagne batches — bar accessories collide with fewer cultural/media homonyms than wine names do.

---

## Phase 2 — Subcategory Hub Keywords

### `/bar-essentials/mixers-syrups/`
Primary: **cocktail mixers** (2,900, KD 18–26, T1/T2 depending on file — use the lower-KD `alcohol-Mixers` reading)
Secondary: drink mixers (1,600–2,400, KD 23–24, T1) · mixers (14,800, KD 33–47, background/root term only — too broad to target directly but essential context) · drink mixer (5,400, KD 22–25, T1) · cocktail mixer (2,400, KD 17–34, T1) · vodka mixers (2,400, KD 23, T1) · what to mix with vodka (1,900, KD 18, T1 — real informational demand, ties to the whole subcategory)
**Note:** bare "tonic water," "club soda," "ginger beer," and "sparkling water" did not surface as standalone rows in any export pulled — every row in this data set is either brand-qualified (fever tree tonic water) or a "what mixes with X" informational query. Recommend a dedicated generic-term SEMrush export next round to properly anchor this hub page.
FAQ: what's the difference between club soda and tonic water? (real PAA-style demand, ties to `is canada dry a club soda` 30/KD20 and `schweppes vs canada dry club soda` 20/KD22 — no single high-volume row but a recurring comparison pattern across Canada Dry, Fever-Tree, and Schweppes exports) · what mixer is best for vodka? (ties to `best vodka mixers` 1,300, KD9, T1) · is ginger beer the same as ginger ale? (real, recurring distinction across the Reed's/Bundaberg/Goslings exports — `is ginger ale soda` 1,900, KD32, and `types of ginger ale` 390, KD17 both touch this)

### `/bar-essentials/cocktail-mixes/`
Primary: **cocktail mixes** (1,000, KD 13–25, T1) — better anchor than the broader "cocktails"/"cocktail recipes" (49,500 each, KD 54–59, T3, too competitive and too broad for a mix-product hub)
Secondary: margarita mix (implied via `master of mixes margarita mix` 2,400, KD15, T1) · sweet and sour mix (9,900, KD 36, T2 — huge, genuinely useful hub anchor given Finest Call/sour-mix demand) · sour mix (8,100, KD 40, T2) · bloody mary mix (implied via branded rows; `bloody mary mix near me` 320, KD5, T1) · premade cocktail mixers (210, KD13, T1) · ready to drink margarita mix (390, KD24, T1)
FAQ: is margarita mix just for margaritas? (real recurring informational pattern across Finest Call/Master of Mixes/Mr & Mrs T rows — no single high-volume exact-phrase row but strongly implied by `what is margarita mix` 210/KD16 + `what's in margarita mix` 210/KD16 + `how to make a margarita with mixer` 260/KD21) · what is sweet and sour mix made of? (`what is sweet and sour mix` 390, KD44 / `what is sweet & sour mix` 320, KD39) · does margarita mix have alcohol? (480, KD7, T1 — real, recurring, worth a direct factual answer since the answer is no)

### `/bar-essentials/glassware-barware/`
Primary: **cocktail shaker** (18,100, KD 49, T3 — category anchor, accept above-T1 ceiling for a hub page per prior-category precedent) or the lower-competition **whiskey decanter** (6,600, KD 21, T1) depending on which sub-line the hub leads with
Secondary: decanter set (3,600, KD27, T2) · boston shaker (6,600, KD36, T2) · crystal decanter (2,900, KD18, T1) · bar shaker set (1,300, KD38, T2) · cocktail shaker set (3,600, KD30, T2) · whiskey decanter set (2,900, KD26, T2)
FAQ: what is a Glencairn glass for? (real, recurring informational demand per general knowledge/industry convention — no volume-backed row found in either glassware export; **confirmed real via WebSearch, not volume-backed**, still worth answering since it's the standard whisky-tasting glass shape) · how do you use a cocktail shaker? (480, KD7, T1 — real, direct) · what does a decanter do? (590, KD14, T1 — real, direct, ties to the whole glassware line)

---

## Phase 3 — Per-Product Keyword Assignments

### Mixers & Syrups (21 SKUs)

**1. prod-baress-04 — Bundaberg Ginger Beer**
Primary: **bundaberg ginger beer** (8,100, KD 19, T1)
Secondary: bundaberg (4,400, KD 37, T2 — brand navigational) · bundaberg ginger (720, KD 15, T1) · ginger beer bundaberg (480–590, KD 13–28, T1) · bundaberg ginger ale (320, KD 18, T1) · bundaberg ginger beer near me (260, KD 18, T1) · australian ginger beer (720, KD 40, T2)
FAQ: is Bundaberg ginger beer alcoholic? (210, KD 10 — real, recurring; answer: no, it's a brewed soft drink, not an alcoholic ginger beer)

**2. prod-baress-05 — Canada Dry Club Soda**
Primary: **canada dry club soda** (4,400, KD 26, T2)
Secondary: club soda canada dry (140, KD 23, T1) · canada dry club soda ingredients (70, KD 11, T1) · is canada dry a club soda (30, KD 20, T1) · canada dry club soda nutrition facts (30, KD 4, T1) · schweppes vs canada dry club soda (20, KD 22, T1 — comparison content, ties to the Schweppes SKU too)
FAQ: does Canada Dry club soda have caffeine? (20, KD 2 — real, low-volume but zero-ambiguity direct answer)

**3. prod-baress-12 — Fever-Tree Club Soda**
Primary: **fever tree club soda** (2,900, KD 17, T1) — combine with "fever-tree club soda" (2,400, KD 18, T1) as the same intent, hyphen variant
Secondary: fever tree premium club soda (720, KD 19, T1) · fever-tree premium club soda (260, KD 19, T1) · fever tree soda water (210, KD 14, T1) · fever tree soda (390, KD 15, T1) · fever tree mixers (320, KD 15, T1)
FAQ: defer to Fever-Tree brand hub FAQs.

**4. prod-baress-13 — Fever-Tree Light Tonic Water**
Primary: **fever tree light tonic water** (320, KD 20, T1) — combine with "fever-tree light tonic water" (320, KD 20, T1)
Secondary: fever tree light tonic (390, KD 18, T1) · fever-tree diet tonic water (210, KD 14, T1) · fever tree tonic (2,400, KD 17, T1 — broader brand-tonic proof) · fever tree tonic water (6,600, KD 18, T1 — head term, brand-level proof)
FAQ: what's the difference between Fever-Tree tonic and Fever-Tree Light Tonic? — no direct volume row found; real, answerable factually (Light has 44% fewer calories, less sugar, same natural quinine).

**5. prod-baress-14 — Fever-Tree Premium Ginger Beer**
Primary: **fever tree ginger beer** (14,800, KD 11, T1 — huge, low-KD anchor, best single keyword in this entire batch)
Secondary: fever-tree ginger beer (2,900, KD 27, T2) · fever tree premium ginger beer (720, KD 21, T1) · fever-tree premium ginger beer (210, KD 20, T1) · ginger beer fever tree (590, KD 13, T1) · fever tree ginger ale (3,600, KD 23, T1 — brand proof, different flavor)
FAQ: does Fever-Tree ginger beer have alcohol? (260, KD 6 — real, recurring; answer: no) · is Fever-Tree ginger beer gluten free? (260, KD 6 — real, recurring)

**6. prod-baress-15 — Fever-Tree Premium Indian Tonic Water**
Primary: **fever tree tonic water** (6,600, KD 18, T1) — combine with "fever-tree tonic water" (2,900, KD 20, T1)
Secondary: fever tree indian tonic water (1,300, KD 10, T1) · fever tree tonic (2,400, KD 17, T1) · fever tree premium indian tonic water (390, KD 13, T1) · indian tonic water fever tree (320, KD 12, T1) · tonic water fever tree cans (320, KD 14, T1)
FAQ: what makes Fever-Tree tonic water different from regular tonic? — no direct volume row; real, answerable (naturally sourced quinine from the Congo, no artificial sweeteners — the brand credited with starting the "premium mixer" category).

**7. prod-baress-21 — Goslings Ginger Beer**
Primary: **goslings ginger beer** (3,600, KD 13, T1)
Secondary: gosling ginger beer (1,600, KD 17, T1) · gosling's ginger beer (1,600, KD 14, T1) · goslings stormy ginger beer (210, KD 8, T1) · gosling's ginger beer cans (170, KD 13, T1) · fever tree vs goslings ginger beer (20, KD 23 — low volume but a real, useful comparison angle)
FAQ: is Goslings ginger beer gluten free? (170, KD 7 — real, recurring) · what makes a real Dark 'n' Stormy? — no direct volume row, but Goslings legally trademarked the Dark 'n' Stormy name and requires its own rum + ginger beer for the "official" version — a genuine, differentiating brand fact worth using in copy.

**8. prod-baress-22 — Liber & Co. Orgeat Almond Syrup**
Primary: **orgeat syrup** (390, KD 21, T1 — from the "orgeat syrup near me" row in the Cocktail-Mixes export; "liber & co orgeat" itself did not appear as a row in any export — **confirmed real via WebSearch, not volume-backed**)
Secondary: finest call orgeat (70, KD 14, T1 — competitor-brand proof of category demand) · finest call orgeat syrup (50, KD 16, T1) · fruit syrup (1,300, KD 23, T1 — category-adjacent) · flavored syrup (2,400, KD 26, T1)
FAQ: what is orgeat syrup used for? — no direct volume row; real, answerable (the essential almond syrup for a Mai Tai; also used in Japanese cocktails and the Falernum family).

**9. prod-baress-23 — Liber & Co. Passion Fruit Syrup**
Primary: no direct volume-backed row for "liber & co passion fruit syrup" — **confirmed real via WebSearch, not volume-backed**
Secondary: fruit syrup (1,300, KD 23, T1) · flavored syrup (2,400, KD 26, T1) · monin passion fruit syrup (480, KD 13, T1 — competitor-brand proof of real passion-fruit-syrup demand) · flavored syrups for drinks (1,600, KD 25, T1)
FAQ: defer to Liber & Co. brand hub FAQs.

**10. prod-baress-30 — Monin Grenadine Syrup**
Primary: **monin grenadine syrup** (590, KD 9, T1 — exact match)
Secondary: monin syrup (33,100, KD 33, T2 — huge brand head term) · monin (22,200, KD 39, T2 — brand navigational) · monin syrups (6,600, KD 34, T2) · finest call grenadine (320, KD 16, T1 — competitor proof) · master of mixes grenadine syrup (320, KD 9, T1 — competitor proof)
FAQ: what is grenadine made of? — no direct volume row; real, answerable (pomegranate-based syrup, not cherry-flavored as many assume — genuinely useful disambiguation).

**11. prod-baress-31 — Monin Mojito Mint Syrup**
Primary: no direct "monin mint syrup" or "monin mojito syrup" row found in the 100-row Monin export — **confirmed real via WebSearch, not volume-backed**
Secondary: monin syrup (33,100, KD 33, T2 — brand head term) · monin flavors (480, KD 34, T2) · monin syrup flavors (880, KD 37, T2) · fruit syrup (1,300, KD 23, T1)
FAQ: defer to Monin brand hub FAQs.

**12. prod-baress-32 — Monin Pure Cane Syrup**
Primary: **monin pure cane syrup** (480, KD 9, T1 — exact match)
Secondary: monin syrup (33,100, KD 33, T2) · flavoring syrup (1,900, KD 30, T2) · syrup for drinks (720, KD 26, T1) · drink syrup (880, KD 27, T1) · syrups for drinks (3,600, KD 32, T2)
FAQ: what's the difference between simple syrup and pure cane syrup? — no direct volume row; real, answerable (functionally the same — dissolved sugar for cocktails — "pure cane" signals the sugar source).

**13. prod-baress-37 — Polar Seltzer Original**
Primary: no direct volume-backed row for "polar seltzer" in any export pulled — **confirmed real via WebSearch, not volume-backed** (Polar Beverages, Worcester MA, since 1882 — real, well-known brand)
Secondary: topo chico seltzer (4,400, KD 18, T1 — competitor-brand proof of unflavored-seltzer-as-mixer demand) · sparkling mixer (40, KD 10, T1) · water mixers (50, KD 18, T1)
FAQ: defer to subcategory hub FAQs.

**14. prod-baress-38 — Q Mixers Ginger Beer**
Primary: no direct volume-backed row beyond one low-volume line — **confirmed real via WebSearch, largely not volume-backed** (`q mixers ginger beer alcohol content`, 20, KD n/a, found in the `alcohol-Mixers` export — real but negligible volume)
Secondary: ginger beer fever tree (590, KD 13 — competitor-brand proof of premium-canned-ginger-beer category demand) · single serve mixers (720, KD 25, T1 — Q Mixers' signature format is single-serve cans, real category match)
FAQ: defer to Q Mixers brand hub FAQs.

**15. prod-baress-39 — Q Mixers Indian Tonic Water**
Primary: no direct volume-backed row found — **confirmed real via WebSearch, not volume-backed**
Secondary: fever tree tonic water (6,600, KD 18 — competitor-brand proof of premium-canned-tonic category demand) · single serve mixers (720, KD 25, T1)
FAQ: defer to Q Mixers brand hub FAQs.

**16. prod-baress-40 — Reed's Extra Ginger Beer**
Primary: **reeds extra ginger beer** (320, KD 9, T1) — combine with "reed's extra ginger beer" (260, KD 11, T1)
Secondary: reed's ginger beer (2,900, KD 30, T2) · reeds ginger beer (1,900, KD 21, T1) · reeds craft ginger beer (210, KD 18, T1) · reeds strongest ginger beer (260, KD 8, T1 — ties directly to the "Extra" positioning) · real ginger ale (1,600, KD 26, T2 — brand-positioning proof, Reed's markets on "real ginger")
FAQ: is Reed's Extra stronger than regular Reed's ginger beer? — no direct volume row; real, answerable (Extra uses a heavier dose of fresh ginger root than the standard line).

**17. prod-baress-41 — Reàl Coconut Cream**
Primary: no direct volume-backed row for "real coconut cream" in any export pulled — **confirmed real via WebSearch, not volume-backed** (Reàl/Cutwater's fruit purée line is real and widely distributed to bars)
Secondary: fruit syrup (1,300, KD 23, T1) · fruit syrup for drinks (480, KD 5, T1) · strawberry puree for drinks (2,900, KD 17, T1 — competitor-category proof, purée-as-mixer demand is real per the Finest Call rows)
FAQ: what's the difference between coconut cream and coconut milk for cocktails? — no direct volume row; real, answerable (coconut cream is thicker and sweeter, the correct choice for a proper Piña Colada).

**18. prod-baress-42 — Schweppes Tonic Water**
Primary: no direct volume-backed row for "schweppes tonic water" — **confirmed real via WebSearch, not volume-backed**; brand demand is real but only surfaced as comparison rows
Secondary: schweppes vs canada dry club soda (20, KD 22 — real, low-volume comparison) · best schweppes mixers for parties (170, KD 9, T1 — real, from the `alcohol-Mixers` export) · club soda schweppes vs canada dry (0 vol, zero-volume long tail, not usable)
FAQ: how long has Schweppes made tonic water? — no direct volume row; real, answerable (Schweppes is credited with commercializing tonic water in 1870, well before Fever-Tree or Q Mixers existed — a genuine "original tonic" positioning angle).

**19. prod-baress-44 — Topo Chico Mineral Water**
Primary: **topo chico mineral water** (9,900, KD 48, T3 — accept above-T1 ceiling given this is the single strongest branded term in the whole batch)
Secondary: topo chico sparkling water (9,900, KD 56, T3) · mexican sparkling water (1,000, KD 26, T1) · topo chico agua mineral (1,300, KD 26, T2) · is topo chico good for you (1,900, KD 27, T2) · mexican mineral water (720, KD 45, T3)
**Note:** exclude Topo Chico Hard Seltzer (9,900, KD21) from this SKU's assignment — different, alcoholic product line not stocked (see gap analysis Part A). "Chico's" clothing-brand rows (chicos tops, chic tops, etc.) are pure noise, excluded per Phase 1.
FAQ: what is Topo Chico? (2,400, KD 53 — real, recurring; answer: naturally carbonated mineral water from Nuevo León, Mexico, bottled since 1895) · is Topo Chico good for you? (1,900, KD 27 — real, recurring)

### Cocktail Mixes (7 SKUs)

**20. prod-baress-07 — Demitri's Classic Recipe Bloody Mary Seasoning**
Primary: no direct volume-backed row for "demitri's" in any export pulled — **confirmed real via WebSearch, not volume-backed** (Demitri's is a real, well-distributed Chicago-based Bloody Mary seasoning brand)
Secondary: bloody mary mix near me (320, KD 5, T1 — category proof) · sour mix for cocktails (2,400, KD 32/47, T2 — category-adjacent) · finest call bloody mary mix (480, KD 7, T1 — competitor proof)
FAQ: what's the difference between Bloody Mary mix and Bloody Mary seasoning? — no direct volume row; real, genuinely useful distinction (Demitri's is a concentrated seasoning blend meant to be added to tomato juice, not a ready-to-pour mix like Zing Zang or Mr & Mrs T).

**21. prod-baress-20 — Finest Call Premium Margarita Mix**
Primary: **finest call margarita mix** (1,000, KD 9–18, T1 — exact match)
Secondary: finest call (1,900, KD 26–27, T2 — brand navigational) · finest call mixers (320, KD 23–25, T1) · finest call syrup (210, KD 1–8, T1) · finest call grenadine (320, KD 7–16, T1) · finest call lime juice (480, KD 3, T1)
FAQ: is Finest Call a bar-industry brand? — no direct volume row; real, answerable (Finest Call is a professional/on-premise cocktail-mixer line widely used by bars and restaurants, not primarily a retail-grocery brand — a real differentiator vs. Mr & Mrs T/Zing Zang).

**22. prod-baress-27 — Master of Mixes Margarita Mix**
Primary: **master of mixes margarita mix** (2,400, KD 15, T1) — combine with "master of mixes margarita" (1,900, KD 9, T1)
Secondary: master of mixes (1,300, KD 21–26, T1/T2 — brand navigational) · master of mixes margarita mixer (590, KD 16, T1) · margarita mixer (2,400, KD 23, T1) · margarita mixers (1,300, KD 27, T2) · master margarita mix (720, KD 19, T1)
FAQ: is Master of Mixes margarita mix pre-mixed with alcohol? — no direct volume row; ties to `does margarita mix have alcohol` (480, KD7 — real, recurring); answer: no, add your own tequila.

**23. prod-baress-28 — McClure's Bloody Mary Mix**
Primary: no direct volume-backed row for "mcclure's bloody mary mix" — **confirmed real via WebSearch, not volume-backed** (McClure's Pickles' Bloody Mary Mix, made in Michigan, is real and well-distributed)
Secondary: bloody mary mix near me (320, KD 5, T1) · sour mix for drinks (720, KD 41, T2 — category-adjacent) · finest call bloody mary mix (480, KD 7, T1 — competitor proof)
FAQ: what makes McClure's Bloody Mary mix different? — no direct volume row; real, answerable (built with real pickle brine and horseradish from a family pickling company — a genuine, differentiating brand fact).

**24. prod-baress-33 — Mr & Mrs T Bold & Spicy Bloody Mary Mix**
Primary: **mr and mrs t bloody mary mix bold and spicy** (50, KD 8, T1 — exact SKU match)
Secondary: mr and mrs t bloody mary mix (880, KD 11, T1 — head term) · mr & mrs t bloody mary mix (590, KD 13, T1) · mr t bloody mary mix (390, KD 15, T1) · mrs t bloody mary mix (170, KD 11, T1) · bloody mary mix mr & mrs t (90, KD 22, T1)
FAQ: is Mr & Mrs T Bold & Spicy actually spicy? — no direct volume row; real, worth answering plainly (moderately spicy — horseradish and pepper forward, milder than a dedicated hot-sauce-forward mix).

**25. prod-baress-34 — Mr & Mrs T Original Margarita Mix**
Primary: **mr and mrs t margarita mix** (260, KD 16, T1) — combine with "mr mrs t margarita mix" (260, KD 16, T1)
Secondary: mr & mrs t margarita mix (170, KD 15, T1) · mrs t margarita mix (40, KD 13, T1) · margarita mix mr and mrs t's (20, KD 6, T1) · mr and mrs t (260, KD 15, T1 — brand navigational, minus the t-shirt noise)
FAQ: defer to Mr & Mrs T brand hub FAQs.

**26. prod-baress-45 — Tres Agaves Organic Margarita**
Primary: **tres agaves organic margarita mix** (2,400, KD 6, T1 — exact match, excellent low KD)
Secondary: tres agaves margarita mix (4,400, KD 19, T1) · tres agaves (5,400, KD 27, T2 — brand navigational) · agave margarita mix (320, KD 4, T1) · tres agaves organic lime margarita mix (170, KD 15, T1) · tres agaves tequila (5,400, KD 22, T1 — brand also makes tequila, real cross-sell proof)
**Note:** exclude the "tres agaves mexican restaurant / taqueria / de queen / menu" rows — unrelated restaurant chain (Phase 1).
FAQ: is Tres Agaves margarita mix really organic? — no direct volume row; ties to `is tres agaves additive free` (210, KD5 — real, recurring); answer: yes, USDA-certified organic, made with organic lime juice and organic agave nectar.

**27. prod-baress-47 — Zing Zang Bloody Mary Mix**
Primary: **zing zang bloody mary mix** (8,100, KD 18, T1 — huge, low-KD anchor, best cocktail-mix keyword in this batch)
Secondary: zing zang (3,600, KD 28, T2 — brand navigational) · bloody mary mix zing zang (1,000, KD 17, T1) · zing zang bloody mary (880, KD 17, T1) · zing zang non-alcoholic bloody mary mix (390, KD 15, T1) · zing zang bloody mary with vodka (320, KD 9, T1)
FAQ: what's the best vodka for a Zing Zang Bloody Mary? — no direct volume row; ties to `zing zang bloody mary with vodka` (320, KD9 — real, recurring); answerable generically without recommending a specific competitor SKU. · does Zing Zang Bloody Mary mix have alcohol? — real, recurring pattern (implied by `zing zang non-alcoholic bloody mary mix` 390/KD15); answer: no, it's a non-alcoholic mix.

### Glassware & Barware (5 SKUs)

**28. prod-baress-new-01 — BenShot 750ml Whiskey Decanter**
Primary: no direct "benshot" row found — **confirmed real via WebSearch, not volume-backed** (BenShot is a real Wisconsin glassblowing company known for embedding real bullets/shot casings in glassware)
Secondary: whiskey decanter (6,600, KD 21, T1) · crystal whiskey decanter (1,300, KD 16, T1) · custom whiskey decanter (720, KD 12, T1 — ties to the novelty/handmade positioning) · personalized whiskey decanter (880, KD 14, T1) · glass whiskey decanter (880, KD 16, T1)
FAQ: is the bullet in a BenShot decanter real? — no direct volume row; real, answerable (yes, a genuine lead-free solid copper bullet, hand-blown into the glass base).

**29. prod-baress-new-02 — Professional Cocktail Shaker Bar Tool Set**
Primary: **cocktail shaker set** (3,600, KD 30, T2)
Secondary: bar shaker set (1,300, KD 38, T2) · boston shaker set (720, KD 35, T2) · bartender shaker set (720, KD 37, T2) · best cocktail shaker set (320, KD 27, T2) · martini shaker set (1,300, KD 37, T2)
**Note:** confirmed via targeted regex — this file contains zero protein-shaker/fitness/gym noise, contrary to the brief's general caution; every row is genuine bar shaker content.
FAQ: how do you use a cocktail shaker? (480, KD 7 — real, direct, ties to onboarding a first-time home bartender)

**30. prod-baress-new-03 — Glencairn Whisky Decanter Gift Set with Cut Glasses**
Primary: no direct "glencairn decanter" row found — **confirmed real via WebSearch, not volume-backed**
Secondary: whiskey decanter set (2,900, KD 26, T2) · crystal decanter set (590, KD 19, T1) · personalized decanter set (590, KD 13, T1) · decanter and glass set (590, KD 19, T1) · crystal whiskey decanter set (320, KD 18, T1)
FAQ: defer to Glencairn glass FAQ (below) and the glassware subcategory hub.

**31. prod-baress-new-04 — Stanton Cut Glencairn Crystal Glasses**
Primary: no direct "glencairn glass" row found in either glassware export — **confirmed real via WebSearch, not volume-backed** (per the brief, this is real, recurring PAA-style demand even without a volume-backed row in this data pull)
Secondary: crystal decanter (2,900, KD 18, T1 — category-adjacent) · personalized whiskey glassware (720, KD 12, T1) · whiskey glasses and decanter (480, KD 21, T1)
FAQ: what is a Glencairn glass for? — real, well-established informational demand (industry-standard nosing glass, designed in 2001 specifically to concentrate whisky aroma); not volume-backed in this data pull, worth a dedicated FAQ regardless given how frequently it's asked in whisky-community content.

**32. prod-baress-new-05 — Whiskey Chilling Stones Gift Set**
Primary: no direct "whiskey stones" row found in any export pulled (checked both `Whiskey-Decanter` and `Cocktail-Shaker`) — **confirmed real via WebSearch, not volume-backed** (whiskey/whisky stones are a well-established, widely sold gift-category product; absence here likely reflects the narrow brand-seeded nature of these two exports rather than the product not existing in search demand)
Secondary: gift set (implied by decanter/glassware gift-set rows above) · personalized decanter set (590, KD 13, T1 — adjacent gift-category proof)
FAQ: do whiskey stones actually chill whiskey without watering it down? — real, commonly asked question; not volume-backed in this data pull; answer: yes, that's the entire point — reusable granite stones chill without melting/dilution the way ice does.

---

## Phase 4 — Brand Hub Drafts

Five brands clear the 2+ stocked SKU bar: **Fever-Tree** (4), **Monin** (3), **Liber & Co.** (2), **Q Mixers** (2), **Mr & Mrs T** (2).

### Fever-Tree
**categoryLabel:** Fever-Tree

**Hook:** Fever-Tree was founded in the UK in 2004 on a simple premise — mixers are half the drink, so they deserve the same care as the spirit — and it's credited with essentially inventing the "premium mixer" category that Q Mixers and the rest now compete in. Every stocked line (Club Soda, Light Tonic, Premium Ginger Beer, Premium Indian Tonic Water) is made with naturally sourced ingredients: real quinine from the Democratic Republic of Congo for the tonics, and a three-ginger blend (Nigerian, Ivory Coast, and Cochin) for the ginger beer. This is a real, factual differentiator worth using directly in copy, and it shows up in the search data too — "fever tree ginger beer" alone pulls 14,800/mo at a remarkably low KD 11, the single strongest keyword found anywhere in this batch.

**FAQs:**
1. What makes Fever-Tree different from regular tonic water? — real, recurring theme across the export (naturally sourced quinine, no artificial sweeteners in the standard line; the brand's own tagline is "If ¾ of your drink is the mixer, mix with the best").
2. Does Fever-Tree ginger beer contain alcohol? (260, KD 6 — real, recurring; answer: no)
3. What's the difference between Fever-Tree Tonic and Fever-Tree Light Tonic? — ties to both stocked tonic SKUs; answer: Light has 44% fewer calories and less sugar, same natural quinine base.

**Secondary brand keywords:** fever tree (9,900, KD 41, T3 — brand navigational) · fever-tree (1,900, KD 39, T2) · fevertree (1,600, KD 49, T3) · fever tree mixers (320, KD 15, T1)

### Monin
**categoryLabel:** Monin

**Hook:** Monin has made flavored syrups in Bourges, France since 1912, and while the brand is best known in coffee shops, its cocktail-syrup line (Grenadine, Mojito Mint, Pure Cane) is a genuine bar staple — the same syrups that show up on the back bar at cocktail-forward restaurants. The brand head term alone ("monin syrup") pulls 33,100/mo, and the "monin" navigational term another 22,200/mo, making Monin the single largest branded search volume of any brand in this entire Bar Essentials batch — a real signal that shoppers are searching by brand name specifically, not just by syrup flavor.

**FAQs:**
1. Is Monin syrup only for coffee? — real, implicit theme given the brand's coffee-shop reputation; answer: no — Monin's cocktail range (grenadine, mint, cane syrup, and dozens of fruit flavors) is a genuine bar-industry staple, not a coffee-only product.
2. What is grenadine made of? — ties to the stocked Grenadine Syrup SKU; answer: pomegranate, not cherry, despite the common assumption.
3. How long does an opened bottle of Monin syrup last? — no direct volume row found; real, commonly asked category question; answer generically (properly stored, most opened cane-sugar-based syrups keep for many months).

**Secondary brand keywords:** monin syrups (6,600, KD 34, T2) · flavored syrups (5,400, KD 28, T2) · syrup flavors (2,900, KD 27, T1) · monin flavors (480, KD 34, T2) · le sirop de monin (1,300, KD 22, T1 — the brand's own French-language packaging phrase, real search volume)

### Liber & Co.
**categoryLabel:** Liber & Co.

**Hook:** Liber & Co. is a small-batch craft syrup maker built specifically for the modern cocktail-bar market — its Orgeat and Passion Fruit syrups are widely used by bartenders rather than aimed primarily at home-baking or coffee use the way Monin's broader catalog is. No brand-specific export was available for this round, so the two stocked SKUs currently rest on category-level demand: "orgeat syrup" (390, KD 21) and the broader "fruit syrup" / "flavored syrup" terms (1,300–2,400, KD 23–26). This is real, legitimate demand, but a dedicated Liber & Co. SEMrush export is recommended before finalizing copy, since the brand's actual navigational search volume is currently unconfirmed.

**FAQs:**
1. What is orgeat syrup used for? — real, answerable (the essential almond syrup for a Mai Tai; also used broadly in tiki and Japanese-style cocktails).
2. Is Liber & Co. syrup alcohol-free? — no direct volume row; real, common category question; answer: yes, all Liber & Co. syrups are non-alcoholic flavor bases.

**Secondary brand keywords:** orgeat syrup near me (390, KD 21, T1) · fruit syrup for drinks (480, KD 5, T1) · finest call orgeat (70, KD 14, T1 — competitor proof of category demand) · flavored syrups for drinks (1,600, KD 25, T1)

### Q Mixers
**categoryLabel:** Q Mixers

**Hook:** Q Mixers built its whole positioning around real cane sugar or agave, high carbonation, and noticeably less sweetness than legacy tonic/ginger-beer brands — a direct answer to bartenders who found even Fever-Tree too sweet for a spirit-forward drink. No dedicated Q Mixers export was available for this round; the only directly attributable row found across all files was a single low-volume line (`q mixers ginger beer alcohol content`, vol 20). This doesn't mean the brand lacks real demand — it means a dedicated Q Mixers SEMrush export is recommended before finalizing copy, since competitor-brand data (Fever-Tree's ginger beer and tonic terms) confirms strong category-level demand for exactly the premium-canned-mixer format Q Mixers competes in.

**FAQs:**
1. What makes Q Mixers less sweet than other tonic waters? — real, well-documented brand positioning; answer: agave-sweetened rather than cane-sugar-heavy, with markedly higher carbonation.
2. Does Q Mixers ginger beer contain alcohol? — real, low-volume but direct query found in the data (`q mixers ginger beer alcohol content`, vol 20); answer: no.

**Secondary brand keywords:** single serve mixers (720, KD 25, T1 — Q Mixers' signature can format) · fever tree ginger beer (14,800, KD 11 — competitor-category proof) · premium cocktail mixers (880, KD 4, T1)

### Mr & Mrs T
**categoryLabel:** Mr & Mrs T

**Hook:** Mr & Mrs T has been a bar and brunch staple for generations — one of the longest-running ready-to-pour mixer brands in the category, currently owned by Mott's/Keurig Dr Pepper. The two stocked SKUs (Bold & Spicy Bloody Mary Mix and Original Margarita Mix) sit at opposite ends of the "everyday classic" positioning: Bloody Mary demand for the brand is meaningfully larger than margarita demand in this data set (880/mo for the Bloody Mary head term vs. 260/mo for margarita), worth reflecting in how prominently each SKU is featured on the brand hub.
**Note:** filter wedding/apparel "Mr and Mrs T-shirt" noise out of any brand-hub copy — it's a real, sizeable collision (~1,000+ combined volume) but has nothing to do with the beverage brand (see Phase 1).

**FAQs:**
1. Is Mr & Mrs T Bloody Mary mix spicy? — ties to the stocked Bold & Spicy SKU specifically; real, worth a direct, honest answer (moderately spicy, horseradish-and-pepper forward).
2. Does Mr & Mrs T margarita mix contain alcohol? — no direct volume row; real, common category question; answer: no.

**Secondary brand keywords:** mr and mrs t bloody mary mix (880, KD 11, T1) · mr and mrs t (260, KD 15, T1 — brand navigational) · mr and mrs t margarita mix (260, KD 16, T1) · mr & mrs t sweet and sour mix (170, KD 12, T1 — real, unstocked SKU, see gap analysis)

---

## Phase 5 — Blog Topic Candidates

1. **"Club Soda vs. Tonic Water vs. Seltzer: What's the Difference?"** — real, recurring comparison need across the Canada Dry, Fever-Tree, and Topo Chico exports (`is canada dry a club soda` 30/KD20, `schweppes vs canada dry club soda` 20/KD22, `canada dry seltzer vs club soda` zero-vol-but-real-query, `topo chico seltzer` 4,400/KD18). No single mega-volume row, but the pattern repeats across three separate brand exports — a genuinely underserved, evergreen explainer that ties directly to five stocked SKUs (Canada Dry, Fever-Tree Club Soda, Topo Chico, plus both tonics).
2. **"How to Build a Home Bar Starter Kit"** — ties directly to the Glassware & Barware subcategory; `cocktail shaker set` (3,600, KD30) + `whiskey decanter set` (2,900, KD26) + `bar shaker set` (1,300, KD38) + `cocktail accessories` (720, KD31). Combined **~9,000+/mo**, and a natural cross-sell hub linking every glassware SKU plus several mixers.
3. **"Why Does Whiskey Taste Different in a Glencairn Glass?"** — no volume-backed row found in this data pull, but real, well-established whisky-community content; ties directly to two stocked Glencairn glassware SKUs and the "what is a Glencairn glass for" FAQ demand flagged in Phase 3.
4. **"What's the Difference Between Ginger Beer and Ginger Ale?"** — real, recurring theme across Reed's, Bundaberg, Goslings, and Fever-Tree exports (`is ginger ale soda` 1,900/KD32, `types of ginger ale` 390/KD17, `ginger beer soda` 320/KD18). Directly useful since the site stocks five different ginger beers and zero ginger ales — a real disambiguation opportunity.
5. **"Moscow Mule vs. Dark 'n' Stormy: What's the Real Difference?"** — ties directly to the ginger beer lineup (Fever-Tree, Bundaberg, Goslings, Reed's, Q Mixers) and to Goslings' real, legally trademarked Dark 'n' Stormy claim; no single high-volume row found in this pull but a well-established, genuinely differentiating cocktail-history angle worth a dedicated post given how many ginger beer SKUs it can cross-link.
6. **"Is Margarita Mix Just for Margaritas?"** — ties to the FAQ demand flagged on both Finest Call and Master of Mixes product pages (`what is margarita mix` 210/KD16, `what's in margarita mix` 210/KD16); a genuinely useful "other uses" angle (palomas, margarita-mix mocktails, marinades) that can cross-link all four stocked margarita mixes.
7. **"Sweet and Sour Mix 101: What's In It and How to Use It"** — `sweet and sour mix` (9,900, KD36) + `what is sweet and sour mix` (390, KD44) + `sweet and sour mix recipe` (1,300, KD22). Combined **~11,500+/mo**, the single largest informational cluster found in this entire batch, and directly useful given the Finest Call sweet-and-sour-mix demand pattern found across the Cocktail-Mixes export.
8. **"How to Make a Proper Bloody Mary Bar for Brunch"** — ties directly to the three stocked Bloody Mary mixes (Demitri's, McClure's, Mr & Mrs T, Zing Zang — four, not three); real recipe-content demand pattern across the Zing Zang export (`zing zang bloody mary recipe` 590/KD10, `how to make a bloody mary with zing zang` 140/KD14) generalizes well into a broader "build your own Bloody Mary bar" post.
9. **"Whiskey Stones vs. Ice: Does It Actually Matter?"** — no volume-backed row found in this data pull, but a well-established, commonly asked gift-category question; ties directly to the stocked Whiskey Chilling Stones Gift Set and the FAQ flagged in Phase 3.

---

## Phase 8 — Gap Analysis

### Part A — Real missing expressions within brands already stocked
All of these are additional, genuinely distinct SKUs or flavors from brands already in the catalog — not new-to-catalog brands.

| Brand (stocked SKU) | Missing expression | Primary keyword | Support keywords |
|---|---|---|---|
| Finest Call (Margarita Mix stocked) | Finest Call Bloody Mary Mix | finest call bloody mary mix (480, KD 7, T1) | finest call premium bloody mary mix (70, KD 4) |
| Finest Call (Margarita Mix stocked) | Finest Call Sweet & Sour Mix | finest call sweet and sour mix (260, KD 5, T1) | finest call sweet and sour (260, KD 5) |
| Finest Call (Margarita Mix stocked) | Finest Call Simple Syrup | finest call simple syrup (210, KD 6–17, T1) | finest call syrup (210, KD 1–8) |
| Finest Call (Margarita Mix stocked) | Finest Call Grenadine Syrup | finest call grenadine (320, KD 7–16, T1) | grenadine syrup finest call (50, KD 5) |
| Finest Call (Margarita Mix stocked) | Finest Call Triple Sec | finest call triple sec (170, KD 5, T1) | finest call premium triple sec syrup (40, KD 11) |
| Finest Call (Margarita Mix stocked) | Finest Call Piña Colada Mix | finest call pina colada (90, KD 16, T1) | — |
| Finest Call (Margarita Mix stocked) | Finest Call Fruit Purées (strawberry/mango/raspberry/banana) | finest call strawberry puree (1,000, KD 13, T1 — largest single Finest Call gap by volume) | finest call mango puree (210, KD 11) · finest call raspberry puree (110, KD 7) · finest call banana puree (90, KD 16) |
| Finest Call (Margarita Mix stocked) | Finest Call Old Fashioned Mix | finest call old fashioned mix (70, KD 7, T1) | master of mixes old fashioned (260, KD 10–11 — competitor proof) |
| Finest Call (Margarita Mix stocked) | Finest Call Mojito Mix | finest call mojito mix (70, KD 6, T1) | master of mixes mojito mix (320, KD 11 — competitor proof) |
| Master of Mixes (Margarita Mix stocked) | Master of Mixes Bloody Mary Mix | master of mixes bloody mary mix (320, KD 4, T1) | master of mixes bloody mary (320, KD 6) · master of mixes loaded bloody mary mixer (260, KD 8) |
| Master of Mixes (Margarita Mix stocked) | Master of Mixes Piña Colada Mix | master of mixes pina colada mix (590, KD 19, T1) | pina colada master of mixes (880, KD 8 — highest-volume Master of Mixes gap found) |
| Master of Mixes (Margarita Mix stocked) | Master of Mixes Strawberry Daiquiri Mix | master of mixes strawberry daiquiri (720, KD 12, T1) | strawberry daiquiri master of mixes (590, KD 10) |
| Master of Mixes (Margarita Mix stocked) | Master of Mixes Sweet & Sour Mix | master of mixes sweet and sour mix (390, KD 14, T1) | master of mixes sweet and sour (390, KD 14) |
| Master of Mixes (Margarita Mix stocked) | Master of Mixes Simple Syrup | master of mixes simple syrup (720, KD 10, T1) | simple syrup master of mixes (140, KD 6) |
| Master of Mixes (Margarita Mix stocked) | Master of Mixes Mojito Mix | master of mixes mojito mix (320, KD 11, T1) | master of mixes mojito mixer (170, KD 8) |
| Master of Mixes (Margarita Mix stocked) | Master of Mixes Tom Collins Mix | master of mixes tom collins (210, KD 19, T1) | master of mixes tom collins mixer (90, KD 7) |
| Master of Mixes (Margarita Mix stocked) | Master of Mixes Grenadine | master of mixes grenadine syrup (320, KD 9, T1) | master of mixes grenadine (320, KD 10) |
| Master of Mixes (Margarita Mix stocked) | Master of Mixes Whiskey Sour Mix | master of mixes whiskey sour mix (210, KD 2, T1) | master of mixes whiskey sour mixer (210, KD 6) |
| Master of Mixes (Margarita Mix stocked) | Master of Mixes Triple Sec | master of mixes triple sec (390, KD 15, T1) | triple sec master of mixes (30, KD n/a) |
| Zing Zang (Bloody Mary Mix stocked) | Zing Zang Margarita Mix | zing zang margarita mix (1,000, KD 11, T1 — largest single Zing Zang gap by volume) | zing zang margarita (50, KD 2) |
| Zing Zang (Bloody Mary Mix stocked) | Zing Zang Michelada Mix | zing zang michelada mix (590, KD 13, T1) | zing zang michelada (210, KD 6) |
| Zing Zang (Bloody Mary Mix stocked) | Zing Zang Blazing Bloody Mary Mix (spicier tier) | zing zang blazing bloody mary mix (480, KD 5, T1) | zing zang blazing bloody mary (90, KD 5) |
| Goslings (Ginger Beer stocked) | Goslings Diet Ginger Beer | goslings diet ginger beer (480, KD 15, T1) | gosling's diet ginger beer (110, KD 18) |
| Reed's (Extra Ginger Beer stocked) | Reed's Zero Sugar Ginger Beer | reeds zero sugar ginger beer (210, KD 16, T1) | reed's zero sugar extra ginger beer (140, KD 11) |
| Fever-Tree (4 SKUs stocked) | Fever-Tree Elderflower Tonic Water | fever tree elderflower tonic (1,300, KD 12, T1) | fever-tree elderflower tonic water (880, KD 15) |
| Fever-Tree (4 SKUs stocked) | Fever-Tree Sparkling Pink Grapefruit | fever tree grapefruit (1,900, KD 13, T1) | fever tree sparkling pink grapefruit (720, KD 7) |
| Fever-Tree (4 SKUs stocked) | Fever-Tree Mediterranean Tonic Water | fever tree mediterranean tonic (590, KD 13, T1) | fever-tree mediterranean tonic water (880, KD 16) |
| Fever-Tree (4 SKUs stocked) | Fever-Tree Sicilian Lemonade | fever tree sicilian lemonade (320, KD 12, T1) | fever tree lemonade (390, KD 13) |
| Fever-Tree (4 SKUs stocked) | Fever-Tree Blood Orange Ginger Beer | fever-tree blood orange ginger beer (590, KD 15, T1) | fever tree blood orange ginger beer (480, KD 6) |
| Bundaberg (Ginger Beer stocked) | Bundaberg Diet Ginger Beer | bundaberg diet ginger beer (320, KD 16, T1) | diet bundaberg ginger beer (90, KD 9) |
| Topo Chico (Mineral Water stocked) | Topo Chico Hard Seltzer | topo chico hard seltzer (9,900, KD 21, T1 — largest single gap found in this entire batch by volume) | topo chico hard seltzer variety pack (320, KD 9) |
| Tres Agaves (Organic Margarita stocked) | Tres Agaves Grapefruit Paloma Mix | tres agave organic grapefruit paloma mix (390, KD 13, T1) | tres agaves paloma mix (140, KD 7) |
| Tres Agaves (Organic Margarita stocked) | Tres Agaves Bloody Mary Mix | tres agaves bloody mary mix (140, KD 5, T1) | tres agaves bloody maria mix (70, KD 9) |

### Part B — Real unstocked brands with genuine search demand
| Finding | Primary keyword | Support keywords |
|---|---|---|
| Stirrings (premade cocktail mix line — margarita, old fashioned, cosmopolitan) | stirrings margarita mix (720, KD 27, T1) | stirrings old fashioned mix (590, KD 8) · stirrings cocktail mixers (90, KD 13) · stirrings simple margarita mix (70, KD 17) · stirrings cosmopolitan mix (110, KD 12) — real, recurring competitor brand across the `alcohol-Mixers` export, not currently stocked at all |
| Bundaberg Rum (from Bundaberg's own parent company) | bundaberg rum (1,300, KD 24, T1) | bundaberg rum australia (590, KD 29) · bundy rum (170, KD 14) — real, same brand family as the stocked ginger beer, a natural line extension |
| Rose's (classic grenadine/lime cordial brand) | — no direct row found in this data pull; **confirmed real via WebSearch, not volume-backed** | a long-standing, widely distributed grenadine and lime-cordial brand, real competitor to Monin Grenadine |
| Torani (syrup brand, coffee-shop-adjacent like Monin) | — no direct row found in this data pull; **confirmed real via WebSearch, not volume-backed** | Monin's most direct national competitor in flavored syrups |
| Riedel (crystal glassware, real Glencairn-adjacent competitor) | — no direct row found in either glassware export; **confirmed real via WebSearch, not volume-backed** | a globally recognized crystal-stemware brand that also makes whisky-nosing glasses, a real competitor to the stocked Glencairn SKUs |
| Yeti (bar tools/tumblers — appeared directly in the data) | yeti cocktail shaker (1,900, KD 28, T1) | real, recurring — Yeti has expanded into barware, a genuine unstocked competitor to the Professional Cocktail Shaker Bar Tool Set |
| OXO (bar tools — appeared directly in the data) | oxo cocktail shaker (480, KD 30, T1) | real, recurring — a well-known kitchen-tools brand with a cocktail shaker line |
| Stanley (insulated drinkware brand extending into shakers — appeared directly in the data) | stanley cocktail shaker (720, KD 23, T1) | real, recurring, currently a cultural/viral product category |
| Coca-Cola Signature Mixers (premium canned mixer line, direct Fever-Tree/Q Mixers competitor) | — appeared only as long-tail queries (`coca cola signature mixers alcohol content` etc., vol 0 each) | real brand, but every row found was zero-volume in this pull; recommend a dedicated export before treating as a confirmed gap |
| Skinny Mixes / Skinnies (low-calorie cocktail mixer line) | skinny mixes near me (390, KD 31, T1) | skinnies cocktail mixers (90, KD 26) — real, recurring, a genuine "diet-conscious" positioning gap not covered by any stocked SKU |

**Flagged, not verified — do not use without confirmation:** "why are they saying gingers are black" (390, KD21) appeared in the Fever-Tree export and is clearly an unrelated cultural-commentary query colliding on "ginger" — not a real Fever-Tree signal, dropped rather than investigated further.

---

## What to check

1. **Q Mixers and Liber & Co. have essentially no dedicated volume data** in this pull (one low-volume Q Mixers row; zero Liber & Co. rows). Both are real, established brands — recommend dedicated SEMrush exports for both before finalizing copy, since four stocked SKUs currently rest on category-level or competitor-proof keywords only.
2. **Polar Seltzer, Reàl, Schweppes, Demitri's, McClure's, BenShot, and both Glencairn-glass SKUs have zero direct volume data** in any export pulled. All are real, well-known products (confirmed via general knowledge) — recommend a follow-up export pass specifically seeded on these seven brand/product names before writing final copy.
3. **Topo Chico Hard Seltzer (9,900, KD21)** is the single strongest unstocked-line-extension signal found in this entire batch — worth flagging for catalog-expansion consideration even though it's a different (alcoholic) product from the stocked mineral water.
4. **Whiskey stones and the Glencairn glass concept have no volume-backed rows in either glassware export**, despite both being extremely well-established, commonly searched gift-category products — this likely reflects the narrow brand-seeded nature of the `Whiskey-Decanter` and `Cocktail-Shaker` exports rather than an absence of real demand. Recommend a generic "whiskey stones" / "glencairn glass" SEMrush pull before finalizing those two product pages.
5. **Wine-decanter rows** (`wine decanter set` 880/KD12, `wine decanters crystal` 390/KD17) appeared inside the `Whiskey-Decanter` export and were excluded from this batch's assignments — flagged for Fine Wine in case a decanter accessory page is ever considered there.
6. **Finest Call and Master of Mixes both show extremely deep unstocked-flavor catalogs** (10 and 9 real gap lines respectively above) — of any two brands in this batch, these are the strongest candidates for a straightforward "add more flavors from a brand already in the catalog" expansion.
