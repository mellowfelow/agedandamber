# Keyword Map — Beer: Lager Subcategory
**Site:** Aged And Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — research report only, nothing implemented. Wine/champagne categories are fully SEO'd; this is the first Beer batch (Lager subcategory, 41 products).
**Scope:** 41 stocked Lager products across ~19 brands.
**Methodology:** Unlike the wine batches, there is no category-level `beer.csv` export in this data pull — only 8 brand-level exports exist, and NA (non-alcoholic) rows/brands are out of scope (a sibling agent owns NA beer). Of those 8, six are relevant to Lager: `Budweiser` (×2 files, covers Bud Light + Budweiser + incidental Busch Light), `corona-beer` (×2 files, covers Corona Extra + Corona Light), `Heineken-beer`, `sam-adams-beer`, `Sierra-Nevada-beer` (checked, not applicable — no Sierra Nevada SKU in this batch), and `Stella-Artois-Beer`. The remaining ~30 SKUs (17 distinct brands with no dedicated export) were confirmed real via WebSearch and tagged **"confirmed real via WebSearch, not volume-backed"** with standard buy/price/review/near-me/abv secondary keywords, per the zero-data-brand convention established in `keyword-map-wine-fortified.md`. KD 0–25 = T1 Quick Win, 26–40 = T2 Worth Targeting, 41–55 = T3 Supporting only, 56+ flagged/high-KD-only-if-no-alternative.

---

## Phase 1 — Filter Summary

Beer-brand exports collide with celebrity/place/corporate-navigational noise even more than the wine batches did, just along different axes (mascots, stadium/venue names, corporate ownership trivia, city-name homonyms) rather than literary/cooking homonyms. Roughly **35–40% of raw rows across the 6 relevant exports** were dropped or reclassified as noise.

**Budweiser (`Budweiser_all-keywords_us_2026-08-26.csv` + `(1).csv`, ~300 combined rows, single biggest noise source in this batch):**
- **Budweiser Clydesdales / horse mascot cluster**: "clydesdales at budweiser" (14,800), "budweiser clydesdales" (12,100), "budweiser horses" (8,100), "budweiser and clydesdales" (3,600), "budweiser clydesdale horses" (3,600), "budweiser clydesdale" (1,900), plus a dozen more variants — combined **~50,000+ volume**, all mascot/brand-history trivia, zero purchase intent for a bottle page.
- **Super Bowl commercial cluster**: "budweiser super bowl commercial 2026" (33,100), "budweiser super bowl commercial" (22,200), "budweiser super bowl commercials" (6,600), plus "budweiser commercial," "budweiser eagle commercial," "budweiser frog commercial," "frog commercial budweiser," "budweiser dog," "baby clydesdale budweiser super bowl," "was the baby eagle in the budweiser commercial real" — combined **~90,000+ volume**. Pure advertising/entertainment interest, not product research.
- **Anheuser-Busch corporate/ownership/stock cluster**: "anheuser busch" (49,500), "anheuser-busch companies llc" (18,100), "budweiser stock" (12,100), "ab inbev" (6,600), "who owns budweiser" (2,900), "anheuser busch jobs" (4,400), plus dozens of misspelling variants ("anheiser busch," "annheiser busch," "budwieser," "budwiser") — combined **tens of thousands**, mostly finance/investor/careers intent, not retail. Kept one row ("who owns budweiser," 2,900, KD62) as a real FAQ candidate, dropped the rest.
- **Brewery tourism/venue cluster**: "anheuser busch brewery tour" (1,600), "budweiser tour" (1,600), "budweiser brew house" (1,600), "budweiser factory" (1,000), "budweiser stage" (2,900, a Toronto/Ontario concert venue — homonym, not the beer), "budweiser amphitheater" (1,900), "budweiser brickhouse tavern" (1,900) — combined **~15,000+**, physical-visit/venue intent, dropped.
- **Merchandise cluster**: "budweiser holiday stein" (1,300+390), "budweiser steins" (2,400), "budweiser shirt" (1,300), "budweiser pool table light" (1,300), "brewery lights" (2,400) — real but merchandise, not bottles; flagged as cross-sell note only, not assigned.
- **Non-English/foreign-script rows**: "百威" (1,300, Chinese for Budweiser), "logotipo budweiser" — dropped, zero US-market SEO value.
- **Kept, real product-fact rows**: the large ABV/calorie/carb cluster ("what's the alcohol content of budweiser," "how many calories in budweiser light," etc.) is genuine, recurring, low-KD informational demand and was kept and assigned below.

**Corona (`corona-beer_all-keywords_us_2026-08-26.csv` + `(1).csv`):**
- **Corona, CA city-name collision**: "walmart corona" (2,900), "target corona" (1,000), "target corona ca" (880) — these are Corona, California retail-location searches, not the beer. Dropped.
- **Corona del Mar, Newport Beach neighborhood**: "corona del mar newport beach california" (720) — unrelated place name. Dropped.
- **Cocktail/recipe row**: "corona beer in a margarita" (880) — recipe/mixology, not a bottle-page keyword. Dropped per the brief's recipe-noise instruction.
- **Non-English-script row**: "科罗纳" (880, Chinese) — dropped, zero US-market value.
- **NA/zero-alcohol rows** (out of scope — sibling agent owns NA beer): "corona non alcoholic beer" (4,400), "corona na beer" (1,900), "corona na" (880), "corona cero" (1,000), "does corona non alcoholic beer have alcohol" (210). Excluded from this report entirely.
- **Kept, real gap-analysis signal**: "corona familiar beer" (2,400) and "what is corona premier" (210) and "coronita alcohol content" (1,900) / "coronita beer" (1,300) are all real, distinct Corona-family products **not currently stocked** — see Phase 8 gap analysis.

**Heineken (`Heineken-beer_all-keywords_us_2026-08-26.csv`):**
- **Spam/junk row**: "casino020 orkenoy.com/pages/beer/cruks-omzeilen" (590, KD76, no SERP features) — an unrelated foreign gambling-site URL that surfaced in the export by keyword-matching accident. Dropped outright.
- **Recruiting/careers cluster**: "heineken careers" (720), "heineken company jobs" (390), "jobs heineken" (390), "jobs with heineken" (390) — dropped, zero retail intent.
- **NA rows** (out of scope): "heineken 0.0 beer" (2,400), "heineken 0.0 non alcohol beer" (3,600), "heineken non alcoholic beer" (1,900), "heineken zero beer" (590), "heineken alcohol free beer" (590), "heineken zero alcohol beer" (720). Excluded.
- **Corporate/legal-entity cluster**: "heineken n.v." (1,000), "heineken subsidiaries" (1,300), "heineken brand website" (590) — dropped, investor/navigational, not retail.
- **Kept, real gap-analysis signal**: "heineken silver beer" (720) / "heineken silver brand website" (590) is a real, currently-marketed Heineken Silver SKU not stocked — see Phase 8. "heineken dark" (480) / "heineken dark beer" (390) is **flagged, not confirmed** — Heineken does not currently sell a mainstream US "Heineken Dark" under that name to my knowledge; this may be import/regional-market confusion or a discontinued line. Do not use without independent verification.

**Sam Adams (`sam-adams-beer_all-keywords_us_2026-08-26.csv`):**
- **Bare "adams" homonym**: "adams" (22,200, KD91) — dominated by the Adams surname (presidents, unrelated people/businesses), not the beer brand. Dropped.
- **Brewery tourism/taproom cluster**: "sam adams brewery tour" (1,600), "sam adams tour boston" (1,300), "sam adams tap room" (1,000), "tour of sam adams brewery" (1,000), "samuel adams boston brewery - jamaica plain" (590+590), "sam adams brewery pa" (390), "samuel adams cincinnati taproom" (720), "sam adams cincinnati" (390) — combined **~10,000+**, physical-visit intent, dropped from product-page assignment (real brand facts, noted in the hub instead).
- **Unrelated local-business row**: "beer in allentown pa" (590) — generic local-bar search, not Sam Adams-specific. Dropped.
- **Kept, real gap-analysis signal**: "sam adams octoberfest" (5,400) + variants, "sam adams summer ale" (3,600) + variants, "sam adams utopias beer" (1,900+720+480) — all real Boston Beer Company SKUs not currently stocked (only Boston Lager is) — see Phase 8.

**Sierra Nevada (`Sierra-Nevada-beer_all-keywords_us_2026-08-26.csv`):** Checked per the brief's instruction ("unlikely"). Confirmed unlikely — this export is entirely Pale Ale/IPA/brewery-tourism content (sierra nevada pale ale, sierra nevada ipa, sierra nevada india pale ale, plus a huge Asheville/Mills River NC taproom-tourism cluster and the unrelated "Sahara Nevada" and "best pic of bigfoot" homonyms). No Sierra Nevada Lager or Pilsner SKU is stocked in this batch (Sierra Nevada isn't in the 41-product list at all), so **none of this export was used**. Noting "sierra nevada pilsner" (1,000, KD11) exists in the data as a real product, purely as a Phase 8 unstocked-brand-expansion note.

**Stella Artois (`Stella-Artois-Beer_all-keywords_us_2026-08-26.csv`):**
- **Bare "stella" homonym**: "stella" (90,500, KD72) — dominated by the name Stella (people, films, unrelated brands), not the beer. Dropped, far too broad and ambiguous regardless of the enormous volume.
- **Unclear/likely-unrelated row**: "bak stella" (390) — no clear connection to the beer surfaced; dropped rather than guessed at.
- **Generic NA rows not brand-specific**: "0.0 alcohol beer" (590), "0.0 beer" (590) — too generic/not Stella-specific, and NA is out of scope anyway. Dropped. "stella artois non alcoholic" (320) also dropped as NA/out of scope.
- Everything else in this export (ABV, calories, "what type of beer is Stella Artois," lager-specific rows) is real, Stella-specific, and kept below.

**Net:** roughly 35–40% of raw rows across the 6 exports were noise (mascots, Super Bowl ads, corporate/investor trivia, city-name collisions, tourism, NA products, spam, name homonyms) and excluded from the tables below.

---

## Phase 2 — Subcategory Keyword Table: `/beer/lager/`

**This table is thin, as anticipated** — there is no category-level `beer.csv` or `lager.csv` export, so nothing below is a true "lager" head-term pull. Every row here is a **branded** query (a "what type of beer is Corona" or "is Budweiser a lager" pattern) pulled from the six brand exports above, aggregated because the same consumer confusion — "is my favorite macro beer actually a lager?" — repeats across nearly every brand in this batch. Treat this as directional evidence of a real content need (see Phase 6 blog topics), not as a volume-backed category hub table the way the wine hubs have.

| Term | Vol | KD | Source brand |
|---|---|---|---|
| is corona a lager | 590 | 53 | Corona |
| what type of beer is heineken | 880 | 31 | Heineken |
| what type of beer is corona | 1,000 | 15 | Corona |
| is bud light a lager | 390 | 31 | Budweiser |
| is budweiser a lager | 480 | 43 | Budweiser |
| is corona a lager beer | 260 | 9 | Corona |
| is corona beer a lager | 260 | 11 | Corona |
| is corona lager | 320 | 10 | Corona |
| what kind of beer is corona | 590 | 9 | Corona |
| what kind of beer is heineken | 480 | 29 | Heineken |
| what type of beer is stella artois | 880 | 30 | Stella Artois |
| what kind of beer is stella artois | 720 | 26 | Stella Artois |
| what style of beer is stella artois | 590 | 24 | Stella Artois |
| what style beer is stella artois | 390 | 29 | Stella Artois |
| is bud light a pilsner | 260 | 15 | Budweiser |
| what style of beer is budweiser | 480 | 44 | Budweiser |
| what style of beer is bud light | 590 | 24 | Budweiser |
| what style of beer is corona | 210 | 8 | Corona |
| budweiser lager | 1,600 | 51 | Budweiser (Navigational — brand-exact, not a category term) |
| heineken lager | 480 | 21 | Heineken |
| stella lager | 1,000 | 35 | Stella Artois |
| stella artois lager | 720 | 36 | Stella Artois |
| boston lager | 3,600 | 22 | Sam Adams (brand-exact SKU name, doubles as category-adjacent) |

**Recommendation:** don't build the `/beer/lager/` hub page copy primarily off this table — lean on general lager-education facts (lager vs. ale fermentation, cold-conditioning, style family) backed by general knowledge, and use the "is [brand] a lager" pattern above as the FAQ engine, since it's real and repeats across nearly every brand. A dedicated `lager` or `beer` category-level SEMrush export would substantially strengthen this hub.

---

## Phase 3 — Per-Product Keyword Assignments

### Anheuser-Busch family (Budweiser export)

**1. prod-beer-14 — Bud Light American Light Lager**
Primary: **bud light beer** (9,900, KD27)
Secondary: bud light abv (6,600, KD15) · bud light can (1,900, KD8) · bud light cans (1,900, KD10) · bud light alcohol percentage (1,300, KD14) · what type of beer is bud light (590, KD20) · is bud light a lager (390, KD31)
FAQ: "Is Bud Light a lager?" (390, KD31 — yes, American light lager) · "What is the alcohol content of Bud Light?" (ties to "what alcohol volume is bud light," 720, KD12 — 4.2% ABV)

**2. prod-beer-15 — Budweiser American Lager**
Primary: **budweiser beer** (8,100, KD54, T3 — accept above-T1 ceiling; the only strong brand-exact anchor found, bare "budweiser" at 49,500/KD60 is even higher-KD and more corporate/navigational-diluted)
Secondary: budweiser can (6,600, KD24) · budweiser bottle (4,400, KD17) · budweiser alcohol content (3,600, KD11) · budweiser abv (3,600, KD28) · budweiser cans (2,400, KD13) · is budweiser a lager (480, KD43)
FAQ: "Is Budweiser a lager?" (480, KD43 — yes, American-style pale lager, ~5% ABV) · "Who owns Budweiser?" (2,900, KD62 — Anheuser-Busch InBev)

**3. prod-beer-16 — Busch Light American Light Lager**
Primary: no strong volume-backed row for "busch light" itself in this export — closest real signals are incidental mentions. **Confirmed real via CSV-incidental mentions + WebSearch, not strongly volume-backed.**
Secondary: bush light (5,400, KD24 — common misspelling of Busch Light, real navigational/transactional intent, higher volume than any correctly-spelled variant in this pull) · busch beer (9,900, KD68 — brand-level "Busch" demand; note this is the *regular* Busch lager, a different, unstocked SKU, see Phase 8) · who makes busch light (320, KD67) · where is busch light made (320, KD45) · who owns busch light (260, KD71) · busch light abv (not present in pull; general knowledge: 4.1% ABV)
FAQ: none SKU-specific with real volume; defer to Lager subcategory FAQs.
**Data-depth flag:** Busch Light is the thinnest-data product in the Budweiser export despite being a major national brand — a dedicated Busch-brand SEMrush export is recommended.

**4. prod-beer-18 — Coors Banquet American Lager**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Coors Banquet, ~5% ABV, Molson Coors' original 1873 recipe, brewed with Rocky Mountain water in Golden, CO.)
Secondary: coors banquet price · buy coors banquet · coors banquet review · coors banquet near me · coors banquet abv · is coors banquet good
FAQ: none volume-backed; defer to Lager subcategory / Coors brand hub.

**5. prod-beer-19 — Coors Light American Light Lager**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Coors Light, 4.2% ABV, launched 1978, Molson Coors' flagship light lager, marketed on the "cold-activated" mountains-turn-blue can.)
Secondary: coors light price · buy coors light · coors light review · coors light near me · coors light abv · is coors light good
FAQ: none volume-backed; defer to Coors brand hub / Lager subcategory.

---

### Corona family (corona-beer export)

**6. prod-beer-20 — Corona Extra Mexican Lager (12x12oz bottles)**
Primary: **corona extra** (9,900, KD16)
Secondary: corona extra beer (6,600, KD26) · corona extra abv (1,600, KD11) · corona extra alcohol content (1,900, KD19) · corona extra calories (1,900, KD11) · corona extra mexican beer (720, KD9) · is corona a lager (590, KD53)
FAQ: "Is Corona a lager?" (590, KD53 — high KD, but real and recurring; yes, Corona Extra is a pale lager/pilsner-style beer) · "What is Corona's alcohol content?" (ties to "corona alcohol content," 5,400, KD23 — 4.6% ABV)

**7. prod-beer-21 — Corona Extra Mexican Lager (12x12oz cans)**
Same real-world product as #6 — shares primary keyword.
Primary: **corona extra** (9,900, KD16)
Secondary: corona cans (1,000, KD14) · corona can (880, KD11) · corona beer can (1,000, KD10) · corona extra abv (1,600, KD11) · corona extra alcohol content (1,900, KD19)
FAQ: shared with #6.

**8. prod-beer-22 — Corona Light Mexican Lager (12x12oz bottles)**
Primary: **corona light beer** (720, KD9)
Secondary: percent alcohol in corona light (1,300, KD16) · corona light beer nutrition (1,000, KD10) · how many calories in a corona light beer (210, KD6) · how many carbs in a corona light beer (170, KD7) · is corona light gluten free beer (210, KD15)
FAQ: none Corona-Light-specific PAA beyond the ABV/nutrition facts above; the closest real datapoint is "percent alcohol in corona light" (1,300, KD16 — 4.0% ABV).

**9. prod-beer-23 — Corona Light Mexican Lager (12x12oz cans)**
Same real-world product as #8 — shares primary keyword and secondaries.

**Gap note (both Corona products):** "corona familiar beer" (2,400, KD10), "what is corona premier" (210, KD9), and "coronita beer" (1,300, KD14) / "coronita alcohol content" (1,900, KD19) are all real, distinct Corona-family SKUs not currently stocked — see Phase 8.

---

### Anheuser-Busch light-lager siblings (no dedicated export)

**10. prod-beer-56 — Michelob Ultra Light Lager**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Michelob Ultra, 4.2% ABV, 95 calories/12oz, Anheuser-Busch, launched 2002, marketed as "Superior Light" American Lager — real comparative fact found: it has fewer calories than Bud Light (110), Coors Light (102), and Miller Lite (96).)
Secondary: michelob ultra price · buy michelob ultra · michelob ultra review · michelob ultra near me · michelob ultra calories · michelob ultra abv
FAQ: "How many calories are in Michelob Ultra?" (real, well-documented fact — 95 calories/12oz) — not volume-confirmed in this data pull but a strong, commonly-searched comparative angle per general knowledge.

**11. prod-beer-65 — Natural Light American Light Lager**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Natural Light "Natty Light," 4.2% ABV, Anheuser-Busch, positioned as a budget/value light lager, popular on college campuses.)
Secondary: natural light price · buy natural light · natural light review · natural light near me · natural light abv · natty light
FAQ: none volume-backed; defer to Lager subcategory FAQs.

---

### Miller / Coors family (no dedicated export)

**12. prod-beer-57 — Miller High Life American Lager (12x12oz bottles)**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Miller High Life, 4.6% ABV, launched 1903, nicknamed "The Champagne of Beers" for its Champagne-shaped bottle with sloping shoulders — a real, well-documented brand-history fact, not marketing fluff.)
Secondary: miller high life price · buy miller high life · miller high life review · miller high life near me · miller high life abv · champagne of beers
FAQ: "Why is Miller High Life called the Champagne of Beers?" (real, well-documented history — the bottle shape, not the beer style, drives the nickname) — not volume-confirmed here but a strong, distinctive brand-fact FAQ.

**13. prod-beer-58 — Miller High Life American Lager (12x12oz cans)**
Same real-world product as #12 — shares primary/secondary/FAQ.

**14. prod-beer-59 — Miller Lite American Light Lager (12x12oz bottles)**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Miller Lite, 4.2% ABV, launched 1975, widely credited as the beer that created the modern American light-beer category.)
Secondary: miller lite price · buy miller lite · miller lite review · miller lite near me · miller lite abv · is miller lite good
FAQ: none volume-backed; the "first light beer" history is a strong factual hook for the Miller Lite / brand-hub copy regardless.

**15. prod-beer-60 — Miller Lite American Light Lager (12x12oz cans)**
Same real-world product as #14 — shares primary/secondary/FAQ.

---

### Modelo family (no dedicated export)

**16. prod-beer-61 — Modelo Especial Mexican Lager (12x12oz bottles)**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Modelo Especial, 4.4–4.5% ABV, American Adjunct Lager style, Grupo Modelo, introduced to the US in 1990; now the top-selling beer brand in the US by some measures.)
Secondary: modelo especial price · buy modelo especial · modelo especial review · modelo especial near me · modelo especial abv · is modelo especial good
FAQ: none volume-backed; defer to Modelo brand hub.

**17. prod-beer-62 — Modelo Especial Mexican Lager (12x12oz can)**
Same real-world product as #16 — shares primary/secondary.

**18. prod-beer-63 — Modelo Negra Mexican Dark Lager**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Negra Modelo, 5.4% ABV, a Munich Dunkel-style dark lager — a longer, roughly double-length brewing process versus standard Modelo Especial gives it a fuller, maltier body. Real, useful differentiator for product copy.)
Secondary: negra modelo price · buy negra modelo · negra modelo review · negra modelo near me · negra modelo abv · modelo negra vs especial
FAQ: "What's the difference between Modelo Especial and Negra Modelo?" — real, factual: Negra Modelo is a Munich Dunkel dark lager (5.4% ABV) vs. Especial's pale adjunct lager (4.4–4.5% ABV) — not volume-confirmed here but a natural comparison FAQ.

---

### Pabst / Coors legacy Americana (no dedicated export)

**19. prod-beer-70 — Pabst Blue Ribbon American Lager**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (PBR, 4.7% ABV, Milwaukee, WI, established 1844; name references the blue ribbons tied around the bottleneck 1882–1916 after winning "America's Best" honors.)
Secondary: pabst blue ribbon price · buy pabst blue ribbon · pbr review · pabst blue ribbon near me · pbr abv · pabst blue ribbon history
FAQ: "Why is it called Pabst Blue Ribbon?" (real, documented brand history — the literal blue ribbons tied to the bottle) — strong factual FAQ, not volume-confirmed in this pull.

---

### Pacifico family (no dedicated export)

**20. prod-beer-71 — Pacifico Clara Mexican Lager (12x12oz bottles)**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Pacifico Clara, 4.4% ABV, a Mexican pilsner-style lager brewed in Mazatlán, Sinaloa since 1900; owned by Grupo Modelo/AB InBev.)
Secondary: pacifico price · buy pacifico beer · pacifico review · pacifico near me · pacifico abv · pacifico clara mazatlan
FAQ: none volume-backed; defer to Pacifico/Modelo-adjacent brand hub.

**21. prod-beer-72 — Pacifico Clara Mexican Lager (12x12oz can)**
Same real-world product as #20 — shares primary/secondary.

---

### Peroni family (no dedicated export)

**22. prod-beer-73 — Peroni Nastro Azzurro Italian Lager (6x12oz bottles)**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Peroni Nastro Azzurro, 5.1% ABV, European/Italian-style pale lager, launched 1963, brewed by Birra Peroni in Rome.)
Secondary: peroni price · buy peroni nastro azzurro · peroni review · peroni near me · peroni abv · is peroni italian
FAQ: none volume-backed; defer to Peroni brand hub.

**23. prod-beer-74 — Peroni Nastro Azzurro Italian Lager (6x12oz can)**
Same real-world product as #22 — shares primary/secondary.

---

### Samuel Adams (sam-adams-beer export)

**24. prod-beer-77 — Samuel Adams Boston Lager (12x12oz bottles)**
Primary: **samuel adams boston lager** (4,400, KD27)
Secondary: sam adams boston lager (2,900, KD24) · boston lager (3,600, KD22) · samuel adams lager (1,600, KD27) · sam adams lager beer (720, KD16) · samuel adams boston lager beer (590, KD21)
FAQ: none SKU-specific PAA volume found; defer to Sam Adams brand hub for founding/history facts.

**25. prod-beer-78 — Samuel Adams Boston Lager (12x12oz can)**
Same real-world product as #24 — shares primary/secondary/FAQ.

---

### Sapporo family (no dedicated export)

**26. prod-beer-81 — Sapporo Premium Japanese Lager (6x12oz bottles)**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Sapporo Premium, 4.9% ABV, Japan's oldest beer brand, founded 1876 in Hokkaido by Seibei Nakagawa, who trained in German brewing techniques.)
Secondary: sapporo price · buy sapporo beer · sapporo review · sapporo near me · sapporo abv · sapporo premium history
FAQ: "Is Sapporo the oldest Japanese beer brand?" (real, documented — founded 1876, Japan's oldest beer brand) — not volume-confirmed here but a strong, distinctive factual FAQ.

**27. prod-beer-82 — Sapporo Premium Japanese Lager (6x12oz cans)**
Same real-world product as #26 — shares primary/secondary/FAQ.

---

### Shiner Bock (no dedicated export)

**28. prod-beer-83 — Shiner Bock**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Shiner Bock, 4.4% ABV, Spoetzl Brewery, Shiner, TX, brewed since 1913. Real nuance worth flagging in copy: at 4.4% ABV it's technically below the ~6.3% floor most style guides use for true Bocks, and Spoetzl itself markets it as an "American-style dark lager" rather than a strict Bock — a genuinely interesting, honest talking point rather than a knock against the product.)
Secondary: shiner bock price · buy shiner bock · shiner bock review · shiner bock near me · shiner bock abv · is shiner bock a bock
FAQ: "Is Shiner Bock actually a bock-style beer?" — real, documented nuance (4.4% ABV vs. the ~6.3%+ typical of true Bocks; Spoetzl calls it an American-style dark/amber lager) — not volume-confirmed here but an honest, differentiated FAQ that beats ignoring the question.

---

### Tecate (no dedicated export)

**29. prod-beer-97 — Tecate Mexican Lager**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Tecate Original, 4.5% ABV, brewed by Cervecería Cuauhtémoc Moctezuma — a Heineken International subsidiary — in Monterrey, Mexico, since 1944; originally created for miners in Baja California.)
Secondary: tecate price · buy tecate beer · tecate review · tecate near me · tecate abv · tecate mexican beer
FAQ: none volume-backed; defer to Lager subcategory FAQs.

---

### Yuengling family (no dedicated export)

**30. prod-beer-104 — Yuengling Traditional Lager (12x12oz bottles)**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Yuengling Traditional Lager, 4.5% ABV, an amber lager from D.G. Yuengling & Son — America's oldest operating brewery, founded 1829 in Pottsville, PA. The Traditional Lager recipe itself was resurrected from the brewery's own archives in 1987 and has been the flagship beer since.)
Secondary: yuengling price · buy yuengling · yuengling review · yuengling near me · yuengling abv · america's oldest brewery
FAQ: "Is Yuengling America's oldest brewery?" (real, well-documented — founded 1829, continuously operating aside from a brief Prohibition-era pivot to near-beer and ice cream) — not volume-confirmed here but a strong, distinctive, easily-verified factual FAQ.

**31. prod-beer-105 — Yuengling Traditional Lager (12x12oz can)**
Same real-world product as #30 — shares primary/secondary/FAQ.

---

### Asahi, Brooklyn, Dos Equis, Kirin (no dedicated exports)

**32. prod-beer-04 — Asahi Super Dry Japanese Lager**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Asahi Super Dry, 5.0–5.2% ABV, Asahi Breweries, Tokyo, launched 1987; pioneered the crisp "karakuchi" (dry) Japanese beer style and is classified as an International Pale Lager / Japanese rice lager.)
Secondary: asahi super dry price · buy asahi beer · asahi super dry review · asahi near me · asahi abv · asahi dry beer
FAQ: "What makes Asahi Super Dry 'dry'?" (real, documented — the karakuchi brewing style Asahi pioneered in 1987, using a more fermentable wort for a crisper, less sweet finish) — not volume-confirmed here but a genuinely distinctive factual FAQ.

**33. prod-beer-11 — Brooklyn Lager (6x12oz bottles)**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Brooklyn Lager, 5.2% ABV, an Amber Lager from Brooklyn Brewery, Brooklyn, NY — one of the brewery's flagship year-round beers, known for a dry-hopped aroma of grapefruit, toffee, and toast.)
Secondary: brooklyn lager price · buy brooklyn lager · brooklyn lager review · brooklyn brewery near me · brooklyn lager abv · brooklyn lager vs pilsner
FAQ: none volume-backed; see the Brooklyn brand hub below for the Lager-vs-Pilsner distinction, which is a real, useful one since both are stocked.

**34. prod-beer-12 — Brooklyn Lager (6x12oz can)**
Same real-world product as #33 — shares primary/secondary/FAQ.

**35. prod-beer-13 — Brooklyn Pilsner**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Brooklyn Pilsner, 4.6–5.0% ABV depending on source, a crisp American-style lager/pilsner from Brooklyn Brewery — lighter and more citrus-hop-forward than the flagship Amber Lager.)
Secondary: brooklyn pilsner price · buy brooklyn pilsner · brooklyn pilsner review · brooklyn brewery near me · brooklyn pilsner abv · brooklyn lager vs pilsner
FAQ: "What's the difference between Brooklyn Lager and Brooklyn Pilsner?" — real, factual, and directly useful since the site stocks both: Lager is a fuller-bodied 5.2% ABV Amber Lager, Pilsner is a lighter, crisper ~4.6–5% ABV pale/golden lager. Not volume-confirmed in this pull but a natural, high-value comparison FAQ given both SKUs are stocked.

**36. prod-beer-30 — Dos Equis Lager Especial**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Dos Equis Lager Especial — formerly "Dos Equis Special Lager" — 4.2–4.5% ABV, a golden pilsner-style Mexican lager brewed by Cervecería Cuauhtémoc Moctezuma in Monterrey since 1897.)
Secondary: dos equis price · buy dos equis · dos equis lager review · dos equis near me · dos equis abv · dos equis most interesting man
FAQ: none volume-backed; "the most interesting man in the world" campaign is a real, famous marketing fact worth using in brand copy even without direct keyword volume.

**37. prod-beer-48 — Kirin Ichiban Japanese Lager**
Primary: no dedicated export; **confirmed real via WebSearch, not volume-backed.** (Kirin Ichiban, 5.0% ABV, a Japanese all-malt pale lager brewed using Kirin's proprietary "Ichiban Shibori" — First Press — method, which uses only the initial, most concentrated wort runoff rather than blending in a second pressing.)
Secondary: kirin ichiban price · buy kirin ichiban · kirin ichiban review · kirin near me · kirin ichiban abv · what does ichiban mean
FAQ: "What does 'Ichiban Shibori' mean?" (real, documented — "first pressing," Kirin's distinctive single-wort brewing method) — not volume-confirmed here but a genuinely distinctive, differentiating factual FAQ versus Asahi and Sapporo.

---

## Phase 4 — Brand Hub Drafts

Every brand with 2+ stocked Lager SKUs, in the site's brand-hub format.

### Brooklyn Brewery
**categoryLabel:** Brooklyn Brewery
**Hook:** Brooklyn Brewery was founded in 1988 by former Middle East correspondent Steve Hindy and banker Tom Potter, reviving brewing in a borough that had once been home to dozens of breweries before Prohibition. Brooklyn Lager, the flagship, is a 5.2% ABV Amber Lager modeled on pre-Prohibition New York lagers — dry-hopped for a grapefruit-and-pine aroma layered over toffee and toast malt. Brooklyn Pilsner is the lighter, crisper sibling, built around clean malt and bright, spicy-citrus hop character.
**FAQs:**
1. What's the difference between Brooklyn Lager and Brooklyn Pilsner? — Lager is a fuller-bodied 5.2% ABV Amber Lager with dry-hopped citrus/pine aroma; Pilsner is a lighter, crisper ~4.6–5% ABV golden lager.
2. Is Brooklyn Lager an IPA? — No; it's an Amber Lager, though the dry-hopping technique (unusual for a lager) gives it more hop aroma than most lagers, which sometimes causes confusion.
**Secondary brand keywords:** brooklyn brewery · brooklyn lager abv · brooklyn pilsner abv · brooklyn brewery beers · buy brooklyn brewery beer online

### Corona (Constellation Brands / Grupo Modelo)
**categoryLabel:** Corona
**Hook:** Corona traces to 1925 and Cervecería Modelo in Mexico City; Corona Extra became Mexico's top-selling beer in the 1980s and the top-selling imported beer in the US shortly after. Corona Extra (4.6% ABV) is the classic clear-bottle pale lager customarily served with a lime wedge; Corona Light (4.0% ABV) is the lower-calorie companion launched in 1990s to extend the brand into the light-beer segment. US import rights are held by Constellation Brands, a real, useful ownership fact given how often "who owns Corona" is searched (1,900/mo, KD18).
**FAQs:**
1. Who owns Corona? (1,900, KD18 — real, high-frequency) — Corona is brewed by Grupo Modelo in Mexico; Constellation Brands holds the exclusive US import and marketing rights following a 2013 sale by AB InBev as a condition of the Grupo Modelo acquisition.
2. Is Corona a lager? (590, KD53) — Yes, both Corona Extra and Corona Light are pale lagers in the pilsner-adjacent style.
3. What's the difference between Corona Extra and Corona Light? — Extra is the standard 4.6% ABV pale lager; Light is a 4.0% ABV, lower-calorie version aimed at the light-beer segment.
**Secondary brand keywords:** corona extra (9,900, KD16) · corona beer (33,100, KD39) · corona alcohol content (5,400, KD23) · corona light beer (720, KD9) · corona extra beer (6,600, KD26)

### Coors (Molson Coors)
**categoryLabel:** Coors
**Hook:** Coors traces to 1873 when Adolph Coors and Jacob Schueler founded a brewery in Golden, Colorado, using Rocky Mountain water — the same water-source story still used in Coors Banquet marketing today. Coors Light, launched in 1978, became one of the best-selling light lagers in the US and is known for its "cold-activated" mountains-turn-blue can. Coors Banquet is the brewery's original full-flavor lager, largely unchanged in recipe since the 1930s.
**FAQs:**
1. What is Coors Banquet? — Molson Coors' original American lager recipe, brewed continuously (aside from Prohibition) since the 1930s in Golden, Colorado.
2. What's the ABV of Coors Light? — 4.2% ABV, versus roughly 5% for full-strength Coors Banquet.
**Secondary brand keywords:** coors light price · coors banquet price · coors light abv · coors banquet abv · buy coors beer online

### Heineken
**categoryLabel:** Heineken
**Hook:** Heineken was founded in 1864 by Gerard Adriaan Heineken in Amsterdam and is now one of the largest brewing groups in the world. Heineken Original is a 5% ABV pale lager brewed with the company's proprietary "A-yeast," a strain used across nearly all Heineken breweries worldwide to keep the flavor consistent regardless of where it's brewed.
**FAQs:**
1. What type of beer is Heineken? (880, KD31) — A pale lager, brewed with Heineken's own proprietary A-yeast strain.
2. What is Heineken's alcohol content? (ties to "heineken alcohol content," 2,900, KD24) — 5% ABV.
**Secondary brand keywords:** heineken beer (14,800, KD34) · heineken lager (480, KD21) · heineken abv (1,900, KD13) · heineken original beer (590, KD24) · heineken lager bottles (880, KD11)
**Gap note:** Heineken Silver (heineken silver beer, 720, KD11) is a real, currently-marketed lower-ABV/lower-calorie Heineken line not stocked — see Phase 8.

### Miller High Life (Molson Coors)
**categoryLabel:** Miller High Life
**Hook:** Miller High Life launched on New Year's Eve 1903, when founder Frederick Miller set out to make "the good life" accessible to everyday drinkers, not just the upper crust. Its nickname, "The Champagne of Beers," comes from the bottle itself — a Champagne-shaped bottle with sloping shoulders and an elongated neck, deliberately modeled after Champagne bottles, not from any actual similarity in taste or process.
**FAQs:**
1. Why is Miller High Life called the Champagne of Beers? — The nickname refers to the Champagne-shaped bottle, not the beer style; the slogan itself dates to the late 1960s.
2. What is Miller High Life's ABV? — 4.6% ABV.
**Secondary brand keywords:** miller high life price · buy miller high life · champagne of beers beer · miller high life abv · miller high life review

### Miller Lite (Molson Coors)
**categoryLabel:** Miller Lite
**Hook:** Miller Lite launched in 1975 and is widely credited with creating the modern American light-beer category — a descendant of Miller High Life, built to deliver a full beer taste at roughly a third fewer calories.
**FAQs:**
1. Was Miller Lite the first light beer? — It's widely credited as the beer that popularized and defined the modern American light-lager category, though early light-beer experiments predate it.
2. What is Miller Lite's ABV? — 4.2% ABV.
**Secondary brand keywords:** miller lite price · buy miller lite · miller lite abv · miller lite review · is miller lite good

### Modelo (Grupo Modelo / Constellation Brands)
**categoryLabel:** Modelo
**Hook:** Grupo Modelo began brewing in Mexico City in 1925, launching the Modelo and Negra Modelo brands together by 1928. Modelo Especial (4.4–4.5% ABV) is a full-flavored pale adjunct lager introduced to US drinkers in 1990 and has since become one of the top-selling beer brands in the country; Negra Modelo (5.4% ABV) is a Munich Dunkel-style dark lager, brewed nearly twice as long for a fuller, maltier body.
**FAQs:**
1. What's the difference between Modelo Especial and Negra Modelo? — Especial is a pale adjunct lager at 4.4–4.5% ABV; Negra Modelo is a darker, maltier Munich Dunkel-style lager at 5.4% ABV.
2. Is Modelo owned by the same company as Corona? — Both are brewed by Grupo Modelo; Constellation Brands holds US import/marketing rights for both, following the same 2013 AB InBev divestiture.
**Secondary brand keywords:** modelo especial price · buy modelo especial · negra modelo review · modelo especial abv · modelo especial near me

### Pacifico (Grupo Modelo)
**categoryLabel:** Pacifico
**Hook:** Cerveza Pacífico Clara has been brewed in the Pacific coast port city of Mazatlán, Sinaloa, since 1900, when three German immigrants — Jorge Claussen, Germán Evers, and Emilio Radostits — opened the Cervecería del Pacífico. It's a golden, light-bodied Mexican pilsner-style lager, now part of the Grupo Modelo portfolio.
**FAQs:**
1. Where is Pacifico beer from? — Mazatlán, Sinaloa, Mexico, brewed continuously since 1900.
2. What is Pacifico's ABV? — 4.4% ABV.
**Secondary brand keywords:** pacifico price · buy pacifico beer · pacifico review · pacifico abv · pacifico clara near me

### Peroni
**categoryLabel:** Peroni
**Hook:** Peroni Nastro Azzurro launched in 1963 as Birra Peroni's premium export lager, brewed in Rome with Saaz and Hallertau Magnum hops. At 5.1% ABV, it's classified as a European/Italian-style pale lager and remains one of the most recognizable Italian beer exports in the US market.
**FAQs:**
1. Is Peroni Italian? — Yes, Peroni Nastro Azzurro is brewed by Birra Peroni Industriale S.p.A. in Rome, Italy.
2. What is Peroni's ABV? — 5.1% ABV.
**Secondary brand keywords:** peroni price · buy peroni · peroni nastro azzurro review · peroni abv · peroni near me

### Samuel Adams (Boston Beer Company)
**categoryLabel:** Samuel Adams
**Hook:** Boston Beer Company was founded in 1984 by Jim Koch, using a family lager recipe, and Samuel Adams Boston Lager — a Vienna-style amber lager — became one of the flagship beers of the American craft-beer revival. Boston Lager remains the anchor of a much larger, highly seasonal lineup (Octoberfest, Summer Ale, Winter Lager, Utopias) that isn't currently stocked beyond the core Lager.
**FAQs:**
1. What style of beer is Samuel Adams Boston Lager? — A Vienna-style amber lager, one of the beers most credited with kickstarting American craft brewing in the 1980s.
2. Who founded Samuel Adams? — Jim Koch founded Boston Beer Company in 1984, using a family recipe.
**Secondary brand keywords:** samuel adams boston lager (4,400, KD27) · boston lager (3,600, KD22) · samuel adams lager (1,600, KD27) · sam adams lager beer (720, KD16) · boston beer company
**Gap note:** Sam Adams Octoberfest (5,400, KD22) and Sam Adams Summer Ale (3,600, KD15) both carry real, meaningfully larger search volume than Boston Lager itself in this export — see Phase 8.

### Sapporo
**categoryLabel:** Sapporo
**Hook:** Sapporo Breweries was established in 1876 in Hokkaido by Seibei Nakagawa, who defied a government ban to study German brewing techniques abroad — making Sapporo Premium Japan's oldest beer brand. It's a 4.9% ABV premium lager blending German lagering tradition with Japanese brewing precision, and has been the best-selling Asian beer brand in the US since Sapporo U.S.A. was founded in 1984.
**FAQs:**
1. Is Sapporo the oldest Japanese beer brand? — Yes, founded 1876 in Hokkaido.
2. What is Sapporo Premium's ABV? — 4.9% ABV.
**Secondary brand keywords:** sapporo price · buy sapporo · sapporo premium review · sapporo abv · sapporo near me

### Stella Artois
**categoryLabel:** Stella Artois
**Hook:** Stella Artois traces to the Den Hoorn brewery in Leuven, Belgium, founded in 1366, with the "Stella" (Latin for star) name adopted in 1926 as a Christmas beer before becoming year-round. It's a European/Belgian pale lager at roughly 5% ABV, now part of AB InBev's global portfolio and one of the most widely-recognized Belgian beer exports in the US.
**FAQs:**
1. What type of beer is Stella Artois? (880, KD30) — A European/Belgian pale lager, ~5% ABV.
2. What is Stella Artois's alcohol content? (ties to "stella artois alcohol content," 590, KD9) — 5% ABV.
**Secondary brand keywords:** stella artois beer (3,600, KD24) · stella artois lager (720, KD36) · stella artois abv (1,900, KD14) · stella lager (1,000, KD35) · stella artois lager bottles (720, KD23)

### Yuengling (D.G. Yuengling & Son)
**categoryLabel:** Yuengling
**Hook:** D.G. Yuengling & Son was founded in 1829 in Pottsville, Pennsylvania, making it America's oldest continuously-operating brewery (it survived Prohibition by pivoting briefly to near-beer and dairy products). Yuengling Traditional Lager — an amber lager at 4.5% ABV — is a recipe resurrected from the brewery's own archives in 1987 and has been the flagship beer ever since.
**FAQs:**
1. Is Yuengling America's oldest brewery? — Yes, founded 1829, continuously operating aside from a brief Prohibition-era pivot.
2. What style of beer is Yuengling Traditional Lager? — An amber lager, 4.5% ABV, brewed with caramel malt and corn grits.
**Secondary brand keywords:** yuengling price · buy yuengling · yuengling traditional lager review · yuengling abv · america's oldest brewery beer

---

## Phase 5 (of brief) / Phase 8 — Gap Analysis

### Part A — Real missing expressions within brands already stocked

| Brand (stocked SKU) | Missing expression | Primary keyword | Support keywords |
|---|---|---|---|
| Anheuser-Busch (Budweiser stocked) | Busch (regular, non-Light) | busch beer (9,900, KD68) | busch grape (1,600, KD12) — a real Busch flavor line; different SKU from stocked Busch Light |
| Anheuser-Busch (Budweiser stocked) | Bud Ice | bud ice (6,600, KD14) | bud ice beer (2,400, KD19) |
| Anheuser-Busch (Bud Light stocked) | Bud Light Next (zero-carb) | bud light next (4,400, KD12) | budlight next (1,600, KD13) |
| Anheuser-Busch (Budweiser stocked) | Budweiser Select 55 | budweiser select 55 (5,400, KD21) | budweiser select (4,400, KD24) · budweiser 55 select (1,000, KD22) |
| Corona (Extra + Light stocked) | Corona Familiar | corona familiar beer (2,400, KD10) | what is corona familiar (260, KD7) |
| Corona (Extra + Light stocked) | Corona Premier | what is corona premier (210, KD9) | — thinly supported, but a real, currently-sold SKU |
| Corona (Extra + Light stocked) | Coronita (7oz mini bottles) | coronita beer (1,300, KD14) | coronita alcohol content (1,900, KD19) |
| Heineken (Original stocked) | Heineken Silver | heineken silver beer (720, KD11) | heineken silver brand website (590, KD44) |
| Samuel Adams (Boston Lager stocked) | Sam Adams Octoberfest | sam adams octoberfest (5,400, KD22) | samuel adams octoberfest (2,900, KD21) · samuel adams octoberfest beer (880, KD18) |
| Samuel Adams (Boston Lager stocked) | Sam Adams Summer Ale | sam adams summer ale (3,600, KD15) | samuel adams summer ale (2,400, KD11) · summer ale sam adams (880, KD14) |
| Samuel Adams (Boston Lager stocked) | Sam Adams Utopias | utopias beer sam adams (1,900, KD27) | sam adams utopias beer (720, KD27) · sam adams' utopias beer (480, KD26) |

**Lower-confidence Part A candidates** (real, well-known products, but no volume-backed row found in any of the 6 exports pulled — recommend dedicated brand exports before writing copy): Modelo Chelada / Modelo Oro (real Grupo Modelo line extensions); Miller Genuine Draft and Miller64 (real Miller/Molson Coors SKUs distinct from High Life and Lite); Coors Peak / Coors Seltzer (Coors line extensions, though these skew away from "lager" strictly); Heineken 0.0 is real but explicitly out of scope (NA, sibling agent's territory).

### Part B — Real unstocked brands/varietals with genuine demand

No category-level export exists to volume-back this section the way the wine batches could, so everything below is **confirmed real via general knowledge / WebSearch-level confidence, not volume-backed in this data pull** — flagged accordingly and recommended for a dedicated brand-level SEMrush export before writing copy.

| Finding | Notes |
|---|---|
| Amstel Light | Heineken-family light lager, well-known in the US off-premise channel; complements the stocked Heineken Original. |
| Labatt Blue | Canada's best-selling lager for decades; real, widely distributed in US border states. |
| Molson Canadian | Another major Canadian macro lager with real US distribution. |
| Rolling Rock | Extra Pale Lager, historically Latrobe, PA (now brewed under AB InBev); nostalgic/regional cult following. |
| Old Milwaukee / Genesee | Budget American lagers with real, durable regional demand (similar segment to PBR/Natural Light). |
| Beck's | German pale lager (Bremen), AB InBev-owned, a real gap versus the stocked Heineken/Stella/Peroni European set. |
| Warsteiner / Bitburger | German pilsner-lagers with real US import presence, would round out a "German lager" angle alongside Beck's. |
| Estrella Jalisco / Victoria | Real, popular Mexican lagers (Heineken Mexico portfolio) not currently represented alongside the stocked Corona/Modelo/Pacifico/Tecate/Dos Equis lineup. |
| Presidente | Dominican pale lager, real and increasingly available in the US Caribbean-import segment. |
| Red Stripe | Jamaican lager (Heineken-owned), real and well-known US import. |
| Singha | Thai lager, real and a natural complement to the stocked Asahi/Sapporo/Kirin Asian-lager set. |
| Tsingtao | Chinese pale lager, real and widely distributed in the US. |

**Sierra Nevada note:** "sierra nevada pilsner" (1,000, KD11) is a real product with real volume in the export pulled for this project, but Sierra Nevada has no stocked SKU in this Lager batch at all — flagging purely as a catalog-expansion signal, not a gap within an existing brand.

---

## Phase 6 — Blog Topic Candidates

1. **"Lager vs. Ale: What Actually Makes a Beer a Lager?"** — supported by the recurring "is [brand] a lager" / "what type of beer is [brand]" confusion pattern found in nearly every export in this batch (is corona a lager 590/KD53, is budweiser a lager 480/KD43, is bud light a lager 390/KD31, what type of beer is heineken 880/KD31, what type of beer is stella artois 880/KD30 — combined **~3,500+/mo** across brands, genuinely the single most-repeated informational pattern in this entire batch).
2. **"Lager vs. Pilsner: Is There Really a Difference?"** — supported by "is bud light a pilsner" (260, KD15) plus the real, useful internal case study of Brooklyn Lager vs. Brooklyn Pilsner (both stocked, same brewery, genuinely different styles) — a natural, differentiated angle no competitor content can copy since it's specific to this catalog.
3. **"Mexican Lager Guide: Corona, Modelo, Pacifico, Tecate & Dos Equis Compared"** — ties together 5 stocked Mexican-lager brands (10 SKUs); anchored by real volume on corona extra (9,900), corona alcohol content (5,400), plus WebSearch-confirmed ABV/origin facts for Modelo, Pacifico, Tecate, and Dos Equis.
4. **"Japanese Lager Guide: Asahi Super Dry, Sapporo Premium & Kirin Ichiban"** — ties together 3 stocked Japanese lagers; strong factual differentiation available (Asahi's "karakuchi" dry style, Sapporo's 1876 founding as Japan's oldest brand, Kirin's Ichiban Shibori first-press method) even without direct keyword volume.
5. **"Amber & Dark Lager Guide: Yuengling, Shiner Bock & Negra Modelo"** — groups the three non-pale-lager stocked SKUs; includes the genuinely interesting "is Shiner Bock really a bock?" nuance (4.4% ABV vs. the ~6.3%+ typical of true Bocks) as a differentiated, honest angle.
6. **"American Light Lager Showdown: Bud Light vs. Coors Light vs. Miller Lite vs. Michelob Ultra"** — ties together 4+ stocked American light lagers (Bud Light, Coors Light, Miller Lite, Michelob Ultra, Natural Light, Busch Light); anchored by real Budweiser-export calorie/ABV volume (bud light abv 6,600/KD15, how many calories in budweiser light 1,600/KD12) plus the real comparative-calorie fact for Michelob Ultra found via WebSearch (95 cal vs. Bud Light's 110, Coors Light's 102, Miller Lite's 96).
7. **"Who Really Owns Your Favorite Beer? A Beer Brand Ownership Guide"** — the single largest cross-brand informational cluster found in this entire batch: "who owns budweiser" (2,900, KD62) + "who owns anheuser-busch corporation" (1,900, KD72) + "who owns corona" (1,900, KD31) + "who owns corona beer" (1,900, KD18) + "who owns heineken" (590, KD47) + "who owns stella artois" (480, KD33) + "who owns busch light" (260, KD71) — combined **~10,000+/mo**, and the real answers (AB InBev owns Budweiser/Bud Light/Busch/Michelob Ultra/Natural Light/Stella Artois; Constellation Brands holds US rights to Corona/Modelo/Pacifico; Molson Coors owns Coors/Miller; Heineken International owns Heineken/Tecate; independent Boston Beer Co. and Spoetzl Brewery/D.G. Yuengling round out the craft/regional side) make for a genuinely useful, differentiated reference piece.
8. **"Why Is Miller High Life Called the 'Champagne of Beers'?"** — a single, well-documented, distinctive brand-history fact (the Champagne-shaped bottle, not the beer style) with no direct keyword volume found in this pull but strong shareability/backlink potential as a short-form explainer.

---

## What to check

1. This subcategory has by far the thinnest volume-backed foundation of any keyword-map batch so far — only 6 of 41 products (Bud Light, Budweiser, Corona Extra/Light, Heineken, Sam Adams Boston Lager, Stella Artois — roughly 12 of 41 SKUs) have any real export-backed data at all. A dedicated `beer` or `lager` category-level SEMrush export, plus brand-level exports for Coors, Miller, Modelo, Pacifico, Peroni, Sapporo, Yuengling, Brooklyn, Asahi, Kirin, Dos Equis, Shiner, and Tecate, would substantially strengthen this entire document.
2. "Heineken Dark" (480, KD11 in the Heineken export) is flagged uncertain — I could not confirm this is a real, current mainstream US Heineken SKU. Do not use without independent verification.
3. Busch Light (prod-beer-16) has the thinnest data of any product with a dedicated brand export touching it at all — the Budweiser export barely mentions it. Worth a standalone Busch-brand export.
4. Shiner Bock's style classification is genuinely nuanced (marketed as a Bock, but Spoetzl itself calls it an "American-style dark lager" at 4.4% ABV, below the typical Bock ABV floor) — worth a brief, honest note in product copy rather than either ignoring it or overclaiming "authentic German bock."
5. Sierra Nevada was checked per the brief and confirmed not applicable to this Lager batch — no Sierra Nevada SKU is stocked here, and its export is entirely Pale Ale/IPA/tourism content.
6. Every WebSearch-confirmed fact in this report (ABVs, founding dates, brewing methods, ownership) came back consistent across multiple independent sources during research and reads as reliable, but none of it is SEMrush-volume-backed — treat the primary keywords tagged "confirmed real via WebSearch, not volume-backed" as directional, not as proven search demand.
