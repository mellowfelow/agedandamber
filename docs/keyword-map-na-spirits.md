# Keyword Map — Non-Alcoholic Spirits (22 SKUs, 4 Subcategories)
**Site:** Aged And Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — nothing implemented yet. Research report only; product SEO fields to be written separately.
**Methodology:** keyword-engine skill — KD 0–25 = T1, 26–40 = T2, 41–55 = T3, 56+ dropped (hub/anchor pages may accept above-T1 ceiling per prior-category precedent, e.g. `keyword-map-wine-red.md`). **Sources:** four real SEMrush category-level exports only — `Non-Alcoholic-Spirits_all-keywords_us_2026-08-26.csv` (101 rows), `Non-Alcoholic-whiskey_all-keywords_us_2026-08-26.csv` (101 rows), `Non-Alcoholic-gin_all-keywords_us_2026-08-26.csv` (101 rows), `Non-Alcoholic-tequila_all-keywords_us_2026-08-26.csv` (101 rows). **No brand-specific exports exist for any of the 12 brands in this category.** Where a stocked SKU had no volume-backed row in these four exports, its real-world existence and facts were confirmed via WebSearch and it is flagged inline as **"confirmed real via WebSearch, not volume-backed."**

---

## Phase 1 — Filter Summary

This category runs noisier than fine wine/champagne on a different axis: instead of homonym/lifestyle collisions, most noise here comes from (a) queries about the **real alcoholic product** with the same head term, (b) broad-match SEMrush artifacts, and (c) the three collision risks flagged in the brief.

**The single biggest offender — "peanut butter whiskey" cluster** (from `Non-Alcoholic-whiskey_all-keywords`): "peanut butter whiskey" (27,100, KD 17), "peanut butter flavored whiskey" (1,600, KD 16), "peanut whiskey" (590, KD 24), "penut butter whiskey" (210, KD 11) — **combined ~29,500/mo dropped.** This is 100% about Skrewball-style alcoholic peanut-butter-flavored whiskey liqueur; it dwarfs every real non-alcoholic-whiskey keyword in the same export (which tops out at "non alcoholic whiskey," 5,400) and has zero relevance to any stocked SKU. Noted separately below as a speculative, low-confidence blog angle only.

**Generic "spirits = alcohol category" collisions** (mostly from the general Non-Alcoholic-Spirits export, ironically): "spirits" (22,200, KD 65), "spirit liquor" (1,600, KD 52), "spirit drink"/"spirit drinks" (1,300 + 1,000, KD 54/38), "spirit alcohol" (1,300, KD 45), "what is a alcoholic spirit" (1,300, KD 27), "distilled liquor" (1,000, KD 60), "beverages spirits" (1,600, KD 50). These are about alcoholic spirits broadly (definitional/dictionary intent), not the non-alcoholic category — **combined ~28,900 dropped.**

**Broad-match reformulation noise**: "alcoholic drink non" (40,500, KD 50) reads like a SEMrush broad-match artifact of "non alcoholic drink[s]" rather than a real distinct query, and it (plus "non alcoholic drinks," "non alcoholic beverages," "non alcoholic drink," "non-alcoholic," "nonalcoholic," "non alcoholic," bare) spans the whole non-alcoholic-**beverage** universe (beer, wine, cider, mocktails) rather than spirits specifically — these categories are owned by other agents on this project. Kept only as top-of-funnel context, not assigned to any na-spirits page. **~90,000+ combined** in this bucket, none assigned.

**Mocktail/recipe informational cluster**: "cocktail virgin drinks" (12,100, KD 30), "non alcoholic cocktails" (12,100, KD 59 — drop, too competitive), "non alcoholic mixed drink(s)" (2,900 + 880), "good mocktails" (1,600, KD 48), "great virgin drinks" (2,400, KD 47), "fun non alcoholic drinks" (1,000, KD 52), "easy/simple non alcoholic drinks to make at home" (1,300 + 880). Real demand, but recipe/informational rather than product-page intent — routed to Phase 6 blog candidates, not assigned to product or hub pages.

**Real alcoholic-product collisions on brand-adjacent terms (tequila export)**: "danny trejo tequila" (140, KD 17) and "respeto tequila" (140, KD 15) are both real *alcoholic* tequila brands with no non-alcoholic connection — dropped. "costco faces a lawsuit alleging its tequila contains non-agave alcohol" (110) is a news-story query, dropped. "clear tequila," "gluten free tequila," "vegan tequila," "healthy tequila," "sugar free tequila," "tequila no sugar"/"no sugar tequila"/"tequila with no sugar," "agave reposado," "calories in reposado tequila" (combined ~2,600) are almost all about attributes of the *real* spirit, not the zero-proof category — kept only as low-confidence blog-adjacent mentions, not assigned to any product.

**Retailer/navigational noise**: "bevmo non alcoholic beer" (210, wrong subcategory entirely), "gin walmart"/"walmart gin" (110 + 70), "where to buy tanqueray non alcoholic gin" (70, real brand but not stocked — see Phase 8). Dropped.

**Ambiguous/foreign/unclear**: "g spirit" (1,300, KD 17 — unclear intent, possibly apparel or unrelated brand, not spirits-relevant), "green spirits" (70), "spirit gf" (110), "nachhaltiger gin" (110, German "sustainable gin," non-English/wrong-market), "what is a gin spiritual" (110), "healthiest organic gin without heavy metals" (110 — real but tangential news-adjacent query about the alcoholic product). All dropped from assignment.

### Brief-flagged collision risks — actual findings in this data
- **"Spiritless"** — no generic "spiritless"/lifeless-slang rows actually surfaced in any of the four exports; every row containing the string was legitimately brand-qualified ("spiritless kentucky 74," etc.). Filtered defensively anyway; flag for future exports if broader "spiritless" head-term data is pulled.
- **"Monday" (brand)** — same result: no day-of-the-week collisions appeared in these spirits-niche exports (unlike a generic "Monday" export would show). All "monday" rows found ("monday zero alcohol gin," "monday gin," "monday non alcoholic gin") are brand-qualified and kept.
- **"Free Spirits"** — this one *did* collide, and hard. "free drinks" (880, general CSV) and especially **"free gin" (2,400, KD 53 — the single highest-volume row in the entire gin export)** are generic "gin given away for free" queries, not the Free Spirits brand — dropped. "the free spirit" (880, KD 46) is generic lifestyle/motivational content — dropped. Kept only clearly brand+category-qualified rows: "free spirits bourbon" (880), "free spirits tequila" (480), "free spirits gin" (260), "free spirits the spirit of tequila" (90), "free spirits spirit of gin" (50), "free spirit bourbon" (210), "free spirit tequila" (110), "free spirit gin" (110), "free spirit non alcoholic" (90), "free spirits non alcoholic" (210, whiskey export), "free spirits reviews" (70).

**Net: roughly 45–50% of total raw rows across all four exports were noise** (real alcoholic products, broad-match beverage terms, recipe content routed to blog, retailer navigational, unclear/foreign) and excluded from the product/hub tables below.

---

## Phase 2 — Subcategory Hub Keywords

### `/na-spirits/non-alcoholic-tequila-alternative/`
Primary: **non alcoholic tequila** (5,400, KD 20, T1)
Secondary: zero proof tequila (1,300, KD 15, T1) · alcohol free tequila (880, KD 18, T1) · na tequila (720, KD 20, T1) · tequila alternative (390, KD 18, T1) · non alcoholic tequila alternative (110, KD 13, T1)
FAQ: what is non-alcoholic tequila made of? (ties to "non alcoholic agave spirit," 110, KD 10) · does non-alcoholic tequila taste like real tequila? (real, recurring informational pattern across "People also ask" SERP features on nearly every row in this export; no single dedicated row but consistent PAA presence)

### `/na-spirits/non-alcoholic-whiskey-alternative/`
Primary: **non alcoholic whiskey** (5,400, KD 21, T1)
Secondary: non alcoholic bourbon (2,900, KD 15, T1) · best non alcoholic whiskey (880, KD 16, T1) · na whiskey (590, KD 25, T1) · zero proof whiskey (390, KD 18, T1) · non alcoholic whiskey alternative (390, KD 21, T1)
FAQ: what is zero proof alcohol? (590, KD 21) · what does non-alcoholic whiskey taste like? (no direct row; defer to general "does it taste like the real thing" framing)

### `/na-spirits/non-alcoholic-gin-alternative/`
Primary: **non alcoholic gin** (3,600, KD 18, T1)
Secondary: alcohol free gin (880, KD 20, T1) · best non alcoholic gin (590, KD 14, T1) · non-alcoholic gin (480, KD 17, T1) · na gin (480, KD 20, T1) · non alcoholic gin alternative (320, KD 13, T1)
FAQ: what can I use instead of gin in a G&T? (ties to "gin substitute," 210, KD 14) · is non-alcoholic gin the same as tonic water? (no direct row; optional, low-confidence)

### `/na-spirits/non-alcoholic-botanical-spirit/`
This subcategory has no dedicated SEMrush export (it isn't a single varietal like whiskey/gin/tequila) — built from the general Non-Alcoholic-Spirits export plus Seedlip-specific rows.
Primary: **non alcoholic spirits** (9,900, KD 35, T2 — category anchor, accept above-T1 ceiling for a hub page per prior-category precedent)
Secondary: non-alcoholic spirits (1,600, KD 39, T2) · best non alcoholic spirits (1,300, KD 17, T1) · seedlip (8,100, KD 32, T2 — huge brand-navigational anchor) · seedlip non alcoholic spirits (1,900, KD 15, T1) · non alcoholic spirits for mocktails (1,300, KD 39, T2)
FAQ: what is a non-alcoholic spirit made of? (real, recurring informational pattern; no single row but strong PAA presence across the export) · do non-alcoholic spirits taste like the real thing? (same)

---

## Phase 3 — Per-Product Keyword Assignments

### Tequila Alternative (8 SKUs)

**1. prod-na-spirits-01 — Almave Blanco Non-Alcoholic Blue Agave Spirit**
Primary: **almave non alcoholic tequila** (170, KD 15, T1)
Secondary: lewis hamilton non alcoholic tequila (110, KD 18, T1 — real, legitimate celebrity-founder hook, see correction note below) · non alcoholic agave spirit (110, KD 10, T1) · best non alcoholic tequila (390, KD 10, T1) · agave blanco (90, KD 0, T1) · non alcoholic tequila (5,400, KD 20, T1)
FAQ: who makes Almave? (real answer: co-founded by seven-time F1 champion **Lewis Hamilton** with agave expert **Iván Saldaña**, Co-Founder & Master Distiller of Casa Lumbre; launched 2023 as "the first super-premium distilled non-alcoholic blue agave spirit.")
**⚠️ Correction to brief:** the task brief's suggested hook — "same founders as Casamigos" (George Clooney / Rande Gerber) — is **factually wrong** and must not be used. WebSearch confirms Almave's real founders are Lewis Hamilton and Iván Saldaña/Casa Lumbre; Clooney and Gerber have no connection to this brand (Casamigos is a separate, alcoholic tequila). The real hook — a genuine F1-champion co-founder — is actually stronger and directly volume-backed ("lewis hamilton non alcoholic tequila," 110/mo).

**2. prod-na-spirits-02 — Cut Above Zero Proof Agave Blanco**
Primary: **cut above agave blanco** — confirmed real via WebSearch, not volume-backed (Cut Above Spirits, Houston, TX; real 4-SKU lineup: Whiskey, Agave Blanco, Mezcal, Gin — independent brand, not Diageo-owned).
Secondary: agave blanco (90, KD 0, T1) · non alcoholic tequila alternative (110, KD 13, T1) · zero proof tequila (1,300, KD 15, T1) · best non alcoholic tequila (390, KD 10, T1)
FAQ: defer to Tequila Alternative subcategory FAQs.

**3. prod-na-spirits-03 — Cut Above Zero Proof Mezcal**
Primary: **non alcoholic mezcal** (260, KD 11, T1 — real, category-exact volume; the "Cut Above" brand qualifier itself is not volume-backed in this data pull)
Secondary: zero proof tequila (1,300, KD 15, T1) · non alcoholic tequila alternative (110, KD 13, T1) · alcohol free tequila (880, KD 18, T1)
FAQ: what's the difference between mezcal and tequila alternatives? — no direct volume found; optional, lower confidence.

**4. prod-na-spirits-06 — Free Spirits The Spirit of Tequila**
Primary: **free spirits the spirit of tequila** (90, KD 2, T1 — exact match)
Secondary: free spirits tequila (480, KD 6, T1) · free spirits non alcoholic tequila (140, KD 9, T1) · tequila alternative (390, KD 18, T1) · non alcoholic tequila (5,400, KD 20, T1) · free spirits non alcoholic (210, KD 36, T2 — brand-navigational)
FAQ: defer to Tequila Alternative subcategory FAQs.

**5. prod-na-spirits-07 — ISH Mexican Agave Spirit**
Primary: **ish mexican agave spirit** — confirmed real via WebSearch, not volume-backed (zero rows found for "ish" in any of the 4 exports). ISH is a real Copenhagen-based brand founded 2018 by **Morten Sørensen**; the full lineup is three NA spirits — Mexican Agave Spirit (tequila-style, this SKU), Caribbean Spiced Spirit (rum-style), and London Botanical Spirit (gin-style).
Secondary: non alcoholic agave spirit (110, KD 10, T1) · zero proof tequila (1,300, KD 15, T1) · non alcoholic tequila (5,400, KD 20, T1)
FAQ: defer to Tequila Alternative subcategory FAQs.

**6. prod-na-spirits-08 — Lyre's Agave Blanco Non-Alcoholic Spirit**
Primary: **lyre's agave blanco** — confirmed real via WebSearch/product catalog, not volume-backed as an exact phrase. Closest real proxy row: "lyre tequila" (90, KD 32, T2 — likely typo/near-match traffic for "Lyre's" + tequila intent).
Secondary: lyres (2,900, KD 54, T3 — large brand-navigational anchor, use with caution per KD) · non alcoholic tequila alternative (110, KD 13, T1) · zero proof tequila (1,300, KD 15, T1)
FAQ: defer to Tequila Alternative subcategory FAQs.

**7. prod-na-spirits-15 — Ritual Zero Proof Tequila Alternative**
Primary: **ritual tequila alternative** (1,300, KD 14, T1 — same volume as "ritual zero proof tequila" but far lower KD)
Secondary: ritual zero proof tequila (1,300, KD 28, T2) · ritual tequila (1,600, KD 15, T1) · ritual zero proof tequila alternative (480, KD 15, T1) · ritual zero proof agave spirit (170, KD 20, T1) · ritual zero proof agave spirit alternative (170, KD 26, T2)
FAQ: no SKU-specific PAA volume found; defer to Tequila Alternative subcategory FAQs.

**8. prod-na-spirits-19 — Spiritless Jalisco 55 Non-Alcoholic Tequila Alternative**
Primary: **jalisco 55** (140, KD 5, T1 — exact match)
Secondary: non alcoholic tequila (5,400, KD 20, T1) · zero proof tequila (1,300, KD 15, T1) · best non alcoholic tequila (390, KD 10, T1) · na tequila (720, KD 20, T1)
FAQ: defer to Tequila Alternative subcategory FAQs.

### Whiskey Alternative (5 SKUs)

**9. prod-na-spirits-04 — Free Spirits The Spirit of Bourbon**
Primary: **free spirits bourbon** (880, KD 8, T1)
Secondary: free spirit bourbon (210, KD 9, T1) · free spirits bourbon review (210, KD 8, T1) · spirit of bourbon (210, KD 4, T1) · non alcoholic bourbon (2,900, KD 15, T1) · best non alcoholic bourbon (390, KD 18, T1)
FAQ: defer to Whiskey Alternative subcategory FAQs.

**10. prod-na-spirits-09 — Lyre's American Malt Non-Alcoholic Spirit**
Primary: **lyre's american malt** — confirmed real via product catalog/WebSearch, not volume-backed as an exact phrase.
Secondary: lyres (2,900, KD 54, T3) · non alcoholic whiskey (5,400, KD 21, T1) · non-alcoholic whiskey (880, KD 20, T1) · best non alcoholic whiskey (880, KD 16, T1)
FAQ: defer to Whiskey Alternative subcategory FAQs.

**11. prod-na-spirits-12 — Monday Zero Alcohol Whiskey**
Primary: **monday zero alcohol whiskey** — confirmed real via WebSearch, not volume-backed (no "monday" + whiskey row appeared in the whiskey export at all). Real product from Drink Monday, founded 2019 by **Ben Acott** and **Chris Boyd** (LA); handcrafted at LA's oldest distillery.
Secondary: non alcoholic whiskey (5,400, KD 21, T1) · na whiskey (590, KD 25, T1) · best non alcoholic whiskey (880, KD 16, T1) · monday zero alcohol gin (480, KD 17, T1 — brand-proof only, different SKU)
FAQ: defer to Whiskey Alternative subcategory FAQs.

**12. prod-na-spirits-16 — Ritual Zero Proof Whiskey Alternative**
Primary: **ritual whiskey alternative** (720, KD 10, T1)
Secondary: ritual zero proof whiskey (720, KD 24, T1) · ritual zero proof whiskey alternative (720, KD 22, T1) · ritual whiskey (320, KD 12, T1) · ritual zero proof non alcoholic whiskey (590, KD 27, T2) · non alcoholic whiskey (5,400, KD 21, T1)
FAQ: no SKU-specific PAA volume found; defer to Whiskey Alternative subcategory FAQs.

**13. prod-na-spirits-20 — Spiritless Kentucky 74 Non-Alcoholic Bourbon Whiskey**
Primary: **spiritless kentucky 74** (1,300, KD 23, T1 — exact, largest brand-SKU volume in this whole category)
Secondary: kentucky 74 (720, KD 23, T1) · spiritless kentucky 74 non alcoholic bourbon (880, KD 23, T1) · kentucky 74 bourbon (210, KD 23, T1) · non alcoholic bourbon (2,900, KD 15, T1) · best non alcoholic bourbon (390, KD 18, T1)
FAQ: defer to Whiskey Alternative subcategory FAQs.

### Gin Alternative (4 SKUs)

**14. prod-na-spirits-05 — Free Spirits The Spirit of Gin**
Primary: **free spirits gin** (260, KD 9, T1)
Secondary: free spirits spirit of gin (50, KD 8, T1 — exact) · free spirits gin review (70, KD 27, T2) · non alcoholic gin (3,600, KD 18, T1) · gin alternative (170, KD 14, T1)
FAQ: defer to Gin Alternative subcategory FAQs.

**15. prod-na-spirits-10 — Lyre's Dry London Spirit**
Primary: **lyre's non alcoholic gin** (110, KD 18, T1 — exact-ish match)
Secondary: lyres (2,900, KD 54, T3) · non alcoholic gin (3,600, KD 18, T1) · best non alcoholic gin (590, KD 14, T1) · gin alternative (170, KD 14, T1)
FAQ: defer to Gin Alternative subcategory FAQs.

**16. prod-na-spirits-11 — Monday Zero Alcohol Gin**
Primary: **monday zero alcohol gin** (480, KD 17, T1 — exact)
Secondary: monday gin (390, KD 18, T1) · monday non alcoholic gin (170, KD 12, T1) · non alcoholic gin (3,600, KD 18, T1) · best non alcoholic gin (590, KD 14, T1)
FAQ: defer to Gin Alternative subcategory FAQs.

**17. prod-na-spirits-14 — Ritual Zero Proof Gin Alternative**
Primary: **ritual zero proof gin alternative** (590, KD 17, T1 — exact brand+product match)
Secondary: ritual gin (590, KD 10, T1) · ritual gin alternative (390, KD 14, T1) · ritual zero proof gin (390, KD 21, T1) · non alcoholic gin (3,600, KD 18, T1) · zero proof gin (390, KD 22, T1)
FAQ: no SKU-specific PAA volume found; defer to Gin Alternative subcategory FAQs.

### Botanical Spirit (5 SKUs)

**18. prod-na-spirits-13 — Pentire Adrift Non-Alcoholic Botanical Spirit**
Primary: **pentire adrift** — confirmed real via WebSearch, not volume-backed (zero rows found for "pentire" in any of the 4 exports). Real UK brand, founded by **Alistair Frost** ("Frosty") and his friend Ed on the north Cornwall coast; Adrift is distilled from native coastal botanicals — rock samphire, sage, Cornish sea salt, citrus.
Secondary: non alcoholic spirits (9,900, KD 35, T2) · best non alcoholic spirits (1,300, KD 17, T1) · non alcoholic botanicals (70, KD 9, T1 — real, direct hit) · seedlip (8,100, KD 32, T2 — comparison-brand anchor)
FAQ: defer to Botanical Spirit subcategory FAQs.

**19. prod-na-spirits-17 — Seedlip Garden 108 Non-Alcoholic Spirit**
Primary: **seedlip garden** (1,300, KD 27, T2)
Secondary: seedlip garden 108 non alcoholic gin (70, KD 10, T1 — exact) · seedlip non alcoholic spirits (1,900, KD 15, T1) · seedlip (8,100, KD 32, T2) · non alcoholic gin alternative (320, KD 13, T1 — cross-sell, Garden is commonly used as a gin substitute)
FAQ: defer to Botanical Spirit subcategory FAQs.

**20. prod-na-spirits-18 — Seedlip Grove 42 Non-Alcoholic Spirit**
Primary: **seedlip grove** (1,300, KD 20, T1)
Secondary: seedlip (8,100, KD 32, T2) · seedlip non alcoholic spirits (1,900, KD 15, T1) · non alcoholic spirits (9,900, KD 35, T2)
FAQ: defer to Botanical Spirit subcategory FAQs.

**21. prod-na-spirits-21 — Three Spirit Nightcap Non-Alcoholic Elixir**
Primary: **three spirit drinks** (1,300, KD 22, T1)
Secondary: three spirit (1,900, KD 33, T2) · three spirits (1,300, KD 41, T3 — borderline, use cautiously) · non alcoholic spirits (9,900, KD 35, T2) · best non alcoholic spirits (1,300, KD 17, T1)
**Note:** no SKU-specific "nightcap" row surfaced in any export — the volume above is brand-level, not flavor-level. Real product confirmed via WebSearch: Three Spirit's full lineup is Livener, Social Elixir, and **Nightcap** (this SKU) — Nightcap blends valerian root, Hüll Melon hops, and lemon balm for a relaxing, non-sedating "nightcap" effect.
FAQ: what is a "social elixir" / functional non-alcoholic drink? — no direct volume found; optional, lower confidence.

**22. prod-na-new-01 — Ritual Zero Proof Rum Alternative**
Primary: **ritual zero proof rum alternative** — confirmed real via WebSearch, not volume-backed (no "rum" + "ritual" row appeared in any of the 4 exports, likely because rum isn't covered by a dedicated CSV in this pull). Real, currently-sold product — toasted spices, ripe banana, and vanilla profile; certified 93/100 Gold by the Bartender Spirits Awards; completes Ritual's real 4-SKU lineup (Gin, Rum, Tequila, Whiskey).
Secondary: ritual zero proof (8,100, KD 19, T1 — huge brand anchor) · non alcoholic spirits (9,900, KD 35, T2) · ritual non alcoholic (1,000, KD 34, T2)
FAQ: defer to Botanical Spirit subcategory FAQs (or consider a "Rum Alternative" micro-subcategory if the catalog adds more rum-style SKUs later — currently a category of one).

---

## Phase 4 — Brand Hub Drafts

Six brands clear the 2+ stocked SKU bar: **Cut Above** (2), **Free Spirits** (3), **Lyre's** (3), **Monday** (2), **Ritual Zero Proof** (4), **Seedlip** (2).

### Cut Above — no existing hub, needs one built
**categoryLabel:** Cut Above

**Hook:** Cut Above is an independent (not Diageo-owned) non-alcoholic spirits brand out of Houston, Texas, offering four award-winning zero-proof spirits: Whiskey, Agave Blanco, Mezcal, and Gin. The two stocked SKUs (Agave Blanco and Mezcal) are the brand's tequila-style pair; its Whiskey and Gin are real, in-market products not currently stocked (see Phase 8).

**Secondary brand keywords:** cut above whiskey (210, KD 4, T1 — real unstocked SKU, see gap analysis) · cut above gin (70, KD 3, T1 — real unstocked SKU) · non alcoholic mezcal (260, KD 11, T1) · agave blanco (90, KD 0, T1)

**FAQs:** no direct brand-level PAA volume found; defer to Tequila Alternative subcategory FAQs.

### Free Spirits — no existing hub, needs one built
**categoryLabel:** Free Spirits (The Free Spirits Company)

**Hook:** The Free Spirits Company is based in Marin County, California, and uses a proprietary process called "Distillate Reconstruction" — distilling the natural essence of real ingredients (American White Oak, European juniper, Mexican blue agave) and reconstructing the nose, flavor, and mouthfeel without alcohol. All three stocked SKUs (Bourbon, Gin, Tequila) represent the brand's complete core "Spirit of" trio — full brand coverage. The company also makes an Aperitivo Milano and Vermouth Rosso, a different product category (amaro/vermouth-style, not spirit-alternative) not relevant to this catalog.

**Secondary brand keywords:** free spirits bourbon (880, KD 8, T1) · free spirits tequila (480, KD 6, T1) · free spirits gin (260, KD 9, T1) · free spirits non alcoholic tequila (140, KD 9, T1) · free spirits non alcoholic (210, KD 36, T2)

**FAQs:** no direct brand-level PAA volume found; defer to subcategory FAQs.

### Lyre's — existing hub found, needs a content update (not a rewrite)
Current hub copy (`hubSlug: 'lyres'`) already correctly frames the brand broadly: *"alternatives modelled on whiskey, gin, rum, and aperitif styles"* — which is accurate to Lyre's real (much larger) global range, even though only 3 SKUs (Agave Blanco, American Malt, Dry London) are currently stocked. **Real, volume-backed gap found:** two Lyre's aperitif-style products have genuine standalone search demand not currently stocked or mentioned with specific keywords — see Phase 8 Part A. Recommend adding those two keywords/SKUs to the hub's secondary keyword set once/if stocked, or at minimum keeping the existing "aperitif styles" language since it's already directionally correct.

**Secondary brand keywords (for existing hub, currently unused):** lyres (2,900, KD 54, T3) · lyre's (880, KD 41, T3) · lyre's italian spritz (1,600, KD 9, T1 — real product, not stocked, see Phase 8) · lyre's amalfi spritz (880, KD 8, T1 — real product, not stocked, see Phase 8)

### Monday — no existing hub, needs one built
**categoryLabel:** Monday (Drink Monday)

**Hook:** Drink Monday was founded in 2019 in Los Angeles by **Ben Acott** and **Chris Boyd**. The origin story is real and usable in copy: co-founder Chris Boyd was asked why he was switching to water mid-celebration at his own birthday and replied "because tomorrow is Monday and I have sh!t to do" — which became the brand name. Spirits are handcrafted at LA's oldest distillery with zero sugar, zero carbs, and zero calories per pour. The two stocked SKUs (Gin and Whiskey) cover two-thirds of Monday's real three-SKU lineup — the brand's third real product is a **Mezcal** (not a generic "tequila"), not currently stocked (see Phase 8).

**Secondary brand keywords:** monday zero alcohol gin (480, KD 17, T1) · monday gin (390, KD 18, T1) · monday non alcoholic gin (170, KD 12, T1)

**FAQs:** no direct brand-level PAA volume found; defer to subcategory FAQs.

### Ritual Zero Proof — existing hub found, already accurate and complete
Current hub copy (`hubSlug: 'ritual'`) already states the brand makes *"non-alcoholic alternatives across whiskey, tequila, gin, and rum styles"* — this is Ritual's **complete real lineup**, confirmed via WebSearch, and now that `prod-na-new-01` (Rum Alternative) is stocked, all four are represented in the catalog. **No expansion needed** — this is the one brand hub in the category with full real-world coverage.

**Two notes for whoever maintains this hub:**
1. Ritual Zero Proof was acquired by **Diageo** in September 2024 — a real, verifiable ownership fact not currently reflected in the hook copy; optional freshness update, not an SEO-critical gap.
2. Unlike the Josh Cellars/Decoy hubs in `brandHubs.ts` (fine wine), the Ritual entry currently has no `faqs` array. Real, volume-backed FAQ candidates exist and aren't being used: "ritual zero proof review" (260, KD 5, T1) and "what is zero proof alcohol" (590, KD 21, T1, category-level) could support a "Is Ritual Zero Proof good?" / "How is Ritual made without any alcohol?" FAQ pair, matching the pattern already established elsewhere in the project.

**Secondary brand keywords (currently unused, available if FAQs/copy are expanded):** ritual zero proof (8,100, KD 19, T1) · ritual zero proof non alcoholic spirits (1,300, KD 20, T1) · ritual non alcoholic (1,000, KD 34, T2) · ritual spirit (390, KD 28, T2) · ritual spirits (320, KD 15, T1)

### Seedlip — existing hub found, hook copy overpromises relative to stock
Current hub copy (`hubSlug: 'seedlip'`) says: *"each botanical range (Garden, Spice, Grove)"* — but **only Garden 108 and Grove 42 are stocked; Spice 94 is not.** This is a real inconsistency: the hub copy currently promises three ranges the shopper won't find two of. "seedlip spice" carries real, solid standalone volume (880, KD 19, T1) — good evidence this is worth fixing by *stocking* Spice 94 rather than *editing the copy down*, since the demand for it is genuine and larger than either currently-stocked SKU's brand-qualified terms. See Phase 8 Part A.

**Secondary brand keywords:** seedlip (8,100, KD 32, T2) · seedlip non alcoholic spirits (1,900, KD 15, T1) · seedlip garden (1,300, KD 27, T2) · seedlip grove (1,300, KD 20, T1) · seedlip spice (880, KD 19, T1 — real, unstocked, see gap analysis)

---

## Phase 8 — Gap Analysis

### Part A — Real missing expressions within brands already stocked

| Brand (stocked SKUs) | Missing expression | Primary keyword | Support keywords |
|---|---|---|---|
| Seedlip (Garden 108, Grove 42) | **Seedlip Spice 94** | seedlip spice (880, KD 19, T1) | seedlip (8,100, KD 32) · seedlip non alcoholic spirits (1,900, KD 15) — real, third leg of Seedlip's actual 3-flavor range; strongest single Part A finding by volume |
| Lyre's (Agave Blanco, American Malt, Dry London) | **Lyre's Italian Spritz** (aperitif-style) | lyre's italian spritz (1,600, KD 9, T1) | lyres (2,900, KD 54) — real product, real standalone volume, higher than several already-stocked Lyre's SKUs' own keyword volume |
| Lyre's (as above) | **Lyre's Amalfi Spritz** (aperitif-style) | lyre's amalfi spritz (880, KD 8, T1) | lyres (2,900, KD 54) — same brand, same real gap category |
| Cut Above (Agave Blanco, Mezcal) | **Cut Above Whiskey** | cut above whiskey (210, KD 4, T1) | non alcoholic bourbon (2,900, KD 15) — real, confirmed 4th SKU in Cut Above's actual lineup |
| Cut Above (as above) | **Cut Above Gin** | cut above gin (70, KD 3, T1) | non alcoholic gin (3,600, KD 18) — real, confirmed 4th SKU |
| Monday (Gin, Whiskey) | **Monday Zero Alcohol Mezcal** | monday zero alcohol mezcal — confirmed real via WebSearch (reviewed by Thirty-One Whiskey), not volume-backed in this data pull | monday zero alcohol gin (480, KD 17, brand-proof only) |
| Three Spirit (Nightcap) | **Three Spirit Livener** | three spirit livener — confirmed real via WebSearch, not volume-backed | three spirit drinks (1,300, KD 22) · three spirit (1,900, KD 33) |
| Three Spirit (as above) | **Three Spirit Social Elixir** | three spirit social elixir — confirmed real via WebSearch, not volume-backed | three spirit drinks (1,300, KD 22) — this is actually Three Spirit's flagship/best-known product, arguably a higher-priority stocking gap than the brand-level volume alone suggests |
| Spiritless (Jalisco 55, Kentucky 74) | **Spiritless Kentucky 74 Spiced** | spiritless kentucky 74 spiced — confirmed real via WebSearch, not volume-backed | spiritless kentucky 74 (1,300, KD 23) — real flavor-extension SKU of an already-stocked product |
| Pentire (Adrift) | **Pentire Seaward** | pentire seaward — confirmed real via WebSearch, not volume-backed | non alcoholic botanicals (70, KD 9) — real, Pentire's second core botanical spirit (sea rosemary, woodruff, sea buckthorn, pink grapefruit) |
| Pentire (as above) | **Pentire Coastal Spritz** | pentire coastal spritz — confirmed real via WebSearch, not volume-backed | real, aperitif-format extension (blood orange, sea rosemary, oakwood) |
| ISH (Mexican Agave) | **ISH Caribbean Spiced Spirit** (rum-style) | ish caribbean spiced spirit — confirmed real via WebSearch, not volume-backed | non alcoholic spirits (9,900, KD 35) — real, 2 of ISH's real 3-SKU range are unstocked |
| ISH (as above) | **ISH London Botanical Spirit** (gin-style) | ish london botanical spirit — confirmed real via WebSearch, not volume-backed | non alcoholic gin (3,600, KD 18) |

**Ritual Zero Proof and Free Spirits have no Part A gap** — both brands' complete real lineups (4 and 3 SKUs respectively) are now fully represented in the catalog.

### Part B — Real unstocked brands/varietals with genuine demand

| Finding | Primary keyword | Support keywords |
|---|---|---|
| **CleanCo / Clean T** (Tequila alt.) — founded 2019 by TV personality Spencer Matthews (UK); full range covers Tequila, Gin, Rum, Vodka, Whiskey | clean t (260, KD 4, T1) | cleanco clean t 750 ml (260, KD 3) · clean co tequila (210, KD 2) · clean and co tequila (110, KD 3) · cleanco tequila (110, KD 2) — **~950 combined**, real and the strongest unstocked-brand signal found in the tequila export |
| **Tanqueray 0.0%** (Gin alt., Diageo) | tanqueray non alcoholic gin (210, KD 6, T1) | where to buy tanqueray non alcoholic gin (70, KD 7) — real, major-brand-backed, good KD; genuinely surprising this wasn't already in scope given Diageo also owns Ritual and Seedlip in this catalog |
| **Dhos** (Gin alt., UK brand) | dhos gin free (320, KD 2, T1) | dhos gin (170, KD 2) — real, low-competition, ~490 combined |
| **Cedar's / Ceder's** (Gin alt., Swedish brand) | cedars non alcoholic gin (70, KD 2, T1) | ceder's non alcoholic gin (70, KD 2) · ceder's wild non alcoholic gin (70, KD 1) — real, smaller volume (~210 combined) but essentially zero competition (KD 1–2) |
| **Aplós** (functional NA spirits) | no direct volume-backed row in any of the 4 exports | confirmed real and growing via WebSearch — raised a $5.5M Series A round for distribution expansion; genuinely real but **not volume-confirmed in this data pull**, recommend a dedicated brand export before treating as a gap |
| **Kin Euphorics** (functional NA spirits) | no direct volume-backed row in any of the 4 exports | confirmed real via WebSearch — credited with inventing the "functional non-alcoholic drinks" category in 2018, reportedly targeting doubled revenue in 2026; real and notable but **not volume-confirmed in this data pull** |
| **Wilderton** (botanical NA spirits) | no direct volume-backed row in any of the 4 exports | confirmed real via WebSearch (stocked by other NA-spirits retailers), but **not volume-confirmed in this data pull** — no claim of demand strength without a dedicated export |

**Not found / do not use:** the brief's example "Ghost Ship rum-style non-alcoholic" could not be verified as a real product via WebSearch — no such brand surfaced in searches for non-alcoholic rum alternatives. Do not reference this in copy or gap analysis; if the user has a different brand in mind, it needs its own verification pass.

---

## Phase 6 — Blog Topic Candidates

1. **"What Is a Non-Alcoholic Spirit? A Buyer's Guide"** — non alcoholic spirits (9,900, KD 35) + non-alcoholic spirits (1,600, KD 39) + best non alcoholic spirits (1,300, KD 17). Foundational, high-volume pillar content for the whole category.
2. **"Do Non-Alcoholic Spirits Taste Like the Real Thing?"** — no single dedicated row, but "People also ask" appears on nearly every row across all 4 exports, a consistent PAA-demand signal; pairs naturally with post #1.
3. **"Best Non-Alcoholic Spirits for Mocktails"** — non alcoholic spirits for mocktails (1,300, KD 39) + cocktail virgin drinks (12,100, KD 30) + good mocktails (1,600, KD 48, use cautiously — high KD). Large recipe-adjacent cluster, good internal-linking hub back to all 4 subcategories.
4. **"Zero Proof, Explained: A Non-Alcoholic Spirits Glossary"** — zero proof meaning (1,600, KD 6) + what is zero proof alcohol (590, KD 21) + is zero proof non alcoholic (210, KD 4) + what is zero proof tequila (140, KD 12). Low-KD, genuinely under-served definitional cluster.
5. **"Dry January / Sober-Curious Starter Guide"** — alcohol alternatives (4,400, KD 21) + sugar free alcohol free (1,600, KD 16) + alcohol free spirits (1,000, KD 24) + alcohol substitute (1,300, KD 16). Strong seasonal (January) content angle with year-round relevance.
6. **"Non-Alcoholic Gin vs. Whiskey vs. Tequila: Which to Try First"** — comparison piece tying together na gin (480, KD 20) + na whiskey (590, KD 25) + na tequila (720, KD 20), combined **~1,790/mo**, direct internal-linking bridge across all three named subcategories.
7. **"Substitute for Bourbon, Gin, or Tequila in Your Favorite Cocktail"** — substitute for bourbon (480, KD 19) + gin substitute (210, KD 14) + tequila substitute (210, KD 29). Recipe-adjacent, product-page-adjacent intent — good for driving toward specific SKUs by cocktail type.
8. **"Non-Alcoholic Mezcal vs. Tequila Alternative: What's the Difference"** — non alcoholic mezcal (260, KD 11) + zero proof tequila (1,300, KD 15). Directly supports Cut Above Mezcal, a SKU with otherwise thin brand-specific data.
9. **Speculative/optional, low confidence — "Peanut Butter Whiskey Isn't What We Sell (Here's What Non-Alcoholic Whiskey Actually Is)"**: a disambiguation play against the single largest volume row found in this entire research pass ("peanut butter whiskey," 27,100, KD 17). This is a stretch — the query is genuinely about an alcoholic liqueur, not a near-miss — but a short, honest disambiguation section at the top of the whiskey-alternative hub page could plausibly capture a sliver of confused top-of-funnel traffic. Flagging as optional rather than recommended; do not overinvest copy here.

---

## What to check

1. No brand-specific SEMrush exports exist for any of the 12 brands in this category — everything brand-level above is either a category-export row that happened to surface, or WebSearch-confirmed-not-volume-backed. Recommend dedicated brand exports for Cut Above, Free Spirits, ISH, Monday, Pentire, Seedlip, Spiritless, and Three Spirit before finalizing copy, since several real, high-confidence products (Seedlip Spice 94, Lyre's Italian/Amalfi Spritz, Cut Above Whiskey/Gin) currently rely on thin or brand-adjacent data.
2. **Correct the Almave founder story before writing any copy** — it is Lewis Hamilton + Iván Saldaña/Casa Lumbre, not George Clooney/Rande Gerber. This is the single most important correction in this report; the wrong version would be a factual claim about a real, named public figure.
3. Seedlip's existing hub copy already promises "Garden, Spice, Grove" — either stock Spice 94 (real demand: 880/mo, KD 19) or edit the hook copy down to the two SKUs actually carried.
4. Ritual Zero Proof's hub is the one brand entry in this category that needs no expansion — its real lineup (Gin, Rum, Tequila, Whiskey) is now fully stocked. Consider adding an FAQ block to match the pattern used on Josh Cellars/Decoy in the fine-wine hubs.
5. "Ghost Ship" (from the task brief's own example list) could not be verified as a real brand — dropped rather than guessed at. If a different brand name was intended, it needs its own verification pass.
6. CleanCo/Clean T is the strongest unstocked-brand signal in the entire category (~950 combined volume, low KD, real UK brand with a well-known founder) — worth a look if catalog expansion in NA spirits is being considered.
