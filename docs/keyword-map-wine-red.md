# Keyword Map — Fine Wine: Red Wine Varietals (Batch 1)
**Site:** Aged And Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — nothing implemented yet. First wine batch; establishes the pattern for the rest of Fine Wine.
**Methodology:** keyword-engine skill — KD 0–25 = T1, 26–40 = T2, 41–55 = T3, 56+ dropped. Sources: real SEMrush exports in `keyword exports/` (category-level: Cabernet Sauvignon ×3, Malbec ×2, Merlot ×2, Pinot Noir ×3, Zinfandel ×2, red-wine ×1; brand-level: 14 Hands, 19 Crimes, 7 Deadly Zins, Alamos, Apothic, Bogle, Catena, Josh Cellars, Orin Swift, Silver Oak, The Prisoner). Where a stocked brand had no dedicated export (Caymus, Chateau Ste. Michelle, Cline, Daou, Duckhorn, Flowers, J. Lohr, Justin, La Crema, Luigi Bosca, Meiomi, Ridge, Seghesio, Trivento, A to Z, Belle Glos), real volume-backed rows were pulled from the category-level exports where the brand term appeared — flagged inline.

---

## Phase 1 — Filter Summary

This category was noisier than most prior batches, for different reasons than the spirits categories (fewer celebrity/name collisions, far more generic-English-word and food/lifestyle collisions).

**Dropped from `red-wine_all-keywords` (the biggest offender, ~201 rows, maybe 35% usable):**
- **Stain removal / laundry**: "how to remove red wine from clothes" (74,000), "how to remove red wine stains" (40,500), "how to get red wine out of clothes/carpet" cluster (~10,000 combined). Zero commercial relevance to a bottle page.
- **Red wine vinegar**: "red wine vinegar" (49,500) + substitutes/dressings/vinaigrette cluster (~30,000+ combined). This is a pantry condiment, not the beverage.
- **The UB40 song "Red Red Wine"**: lyrics, "who sings red red wine," misspelled artist variants — combined **~40,000+** volume across a dozen rows. Pure homonym noise.
- **Boston Reds / Cincinnati Reds sports**: "did the red sox win," "red sox world series wins," "did the reds win" — combined **~35,000+** volume. Homonym collision on "reds."
- **Cooking/recipes**: red wine braised short ribs, red wine reduction sauce, red wine sauce for steak, red wine sangria/mulled wine, beef in red wine — combined **~25,000+**. Dropped per brief (food-pairing/recipe noise), though "red wine sangria" and "mulled wine" hint at a legitimate seasonal blog angle, noted separately below.
- **Wine glasses / decanters**: "red wine glass(es)," "glass red wine glass" — combined **~30,000**. Real cross-sell signal (noted separately, not assigned to any bottle page).
- **"Wine red" as a color/fashion term**: "wine red hair," "wine red dress," "wine red color" — combined **~10,000**. Unrelated to the beverage.
- **Health-claim tail**: "is red wine good for you," "benefits of red wine" cluster (~15,000+) — kept only as a blog candidate (see Phase 6), not assigned to any product page, since retail bottle pages shouldn't carry unqualified health claims.

**Malbec-specific homonym cluster** (from `Malbec_all-keywords (1)`): "Malbec" is also the name of real Argentine-steakhouse restaurants in Pasadena, Philadelphia, and an "Arts District" location. Rows like "malbec pasadena" (3,600), "malbec grill" (2,900), "malbec argentinean cuisine" (2,400), "malbec arts district" (2,400), "malbec argentine steakhouse philadelphia" (1,900+720), "malbec at vallagio" (1,300+590), "malbec philadelphia" (590) — **~15,000+ combined dropped**, all restaurant-navigational, not wine-buyer intent.

**"The Prisoner" homonym cluster** (from `The-Prisoner-wine_all-keywords`): the brand name collides hard with literal prison-alcohol folklore. Dropped: "prison wine" (1,900), "toilet wine"/"wine toilet" (1,600+1,900), "prison alcohol" (720), "jail wine" (590), "jailhouse wine" (480), "prison toilet wine" (480), "wine in jail" (320), "prison liquor" (210), "elwood prison wine" (90) — **~8,000+ combined dropped**. Kept: "dave phinney" (720) — this is the real founder connecting The Prisoner and Orin Swift, a legitimate brand-history fact, not noise.

**Apothic**: "apothecary wine" (590), "apostle wine" (140), "apothecary red wine/blend" (~500 combined) — likely partial phonetic-confusion traffic, not confidently Apothic-specific. Dropped from primary assignment; not confident enough to claim as brand demand.

**Alamos**: "álamos"/"alámos" (accented, ~1,200 combined) without "malbec"/"wine" qualifiers likely mixes in the real Mexican town of Álamos, Sonora. Kept only the wine-qualified variants ("alamos malbec," "alamos wine," etc.).

**Silver Oak**: "white oak winery" (720+480+170), "silver frond" (880), "silver leaf wine" (140), "silver mark cellars" (140) are unrelated wineries/wine words that merely share a token with "Silver Oak" — dropped (~2,500 combined).

**19 Crimes**: "covid-19 hate crimes act" (1,900+170) — a real but completely unrelated legal-policy term colliding on "19" + "crimes." Dropped.

**Zinfandel category**: "zinfandel grille"/"zinfandel grill"/"zinfandel village apartments" — a restaurant chain and an apartment complex sharing the varietal's name. Dropped (~5,000+ combined). White Zinfandel terms ("white zinfandel," "sutter home white zinfandel," etc., ~20,000+ combined) were also excluded from primary assignment since none of the 32 products are White Zin — kept only as a one-line disambiguation note for the Zinfandel subcategory page (customers should understand "our Zinfandels are dry reds, not White Zin").

**No real celebrity-ownership angle found to flag as a keep** in this batch — 19 Crimes' Snoop Dogg "Cali Red" tie-in is real and already commercially framed (not noise), so it's kept and used below; it's the only notable celebrity-adjacent signal in this batch.

Net: roughly **40–45% of total raw rows across all exports** were noise (stain removal, song lyrics, sports, restaurants, cooking, apartments, unrelated wineries) and excluded from the tables below.

---

## Phase 2 — Category & Subcategory Hub Keywords

### `/fine-wine/cabernet-sauvignon/`
Primary: **cabernet sauvignon** (74,000, KD 43, T3 — category anchor, accept above-T1 ceiling for a hub page per prior-category precedent)
Secondary: cabernet sauvignon wine (12,100, KD 18, T1) · napa valley cabernet sauvignon (14,800, KD 21, T1) · california cabernet sauvignon (5,400, KD 9, T1) · red wine cabernet (4,400, KD 17, T1) · best cabernet sauvignon (4,400, KD 27, T2) · cab sauv (3,600, KD 22, T1)
FAQ: is cabernet sauvignon sweet or dry? (2,900 / 140, KD 9) · what does cabernet sauvignon taste like? (390, KD 13) · should cabernet sauvignon be chilled? (390, KD 6)

### `/fine-wine/malbec/`
Primary: **malbec wine** (18,100, KD 21, T1) — stronger anchor than bare "malbec" (27,100, KD 30, T2, more diluted by restaurant noise)
Secondary: malbec red wine (2,400, KD 23, T1) · argentine malbec wine (720, KD 24, T1) · best malbec wine (1,000, KD 11, T1) · malbec grape (1,300, KD 25, T1) · malbec wine argentina (1,300, KD 19, T1)
FAQ: what is malbec wine? (1,000, KD 43) · is malbec sweet or dry? (720 / 170, KD 14–8) · what does malbec taste like? (170, KD 20)

### `/fine-wine/merlot/`
Primary: **merlot wine** (18,100, KD 28, T2)
Secondary: merlot red wine (4,400, KD 28, T2) · best merlot wine (1,000, KD 8, T1) · good merlot wine (590, KD 8, T1) · california merlot wine (480, KD 22, T1) · red merlot wine (1,300, KD 23, T1)
FAQ: is merlot sweet or dry? (2,900 / 480, KD 8–7) · is merlot a dry wine? (880, KD 7) · what does merlot taste like? (480, KD 22) · what's the difference between merlot and cabernet? (140, KD 10–13, several variants combine to ~500)

### `/fine-wine/pinot-noir/`
Primary: **pinot noir wine** (27,100, KD 23, T1) — better than bare "pinot noir" (60,500, KD 41, T3)
Secondary: pinot noir red wine (6,600, KD 25, T1) · oregon pinot noir (5,400, KD 8, T1) · california pinot noir (2,900, KD 10, T1) · best pinot noir (4,400, KD 8, T1) · sonoma coast pinot noir (1,300, KD 10, T1)
FAQ: is pinot noir sweet? (3,600, KD 9) · is pinot noir red or white? (2,400, KD 10) · how do you pronounce pinot noir? (1,600+880+720+720, KD 24–32, combined ~4,000) · should pinot noir be chilled? (720, KD 8)

### `/fine-wine/zinfandel/`
Primary: **zinfandel wine** (14,800, KD 23, T1)
Secondary: zinfandel red wine (2,400, KD 19, T1) · old vine zinfandel (1,600, KD 6, T1 — ties directly to 3 stocked SKUs) · red zinfandel (1,300, KD 11, T1) · red zinfandel wine (720, KD 20, T1) · sonoma zinfandel (480, KD 10, T1)
FAQ: is zinfandel red or white? (590, KD 24 — worth explicitly disambiguating from White Zinfandel, which the site does not carry) · is zinfandel sweet or dry? (720+140, KD 13–7) · what is old vine zinfandel? (ties to old vine zinfandel 1,600, KD 6)

### `/fine-wine/red-wine/` (red blend hub)
Primary: **red blend wine** (8,100, KD 18, T1)
Secondary: california red blend wine (2,400, KD 5, T1) · red wine varietals (2,400, KD 23, T1) · types of red wine (12,100, KD 31, T2) · full bodied red wine (2,900, KD 17, T1) · dry red wine (22,200, KD 19, T1)
FAQ: what is a red blend? (ties to "red blend wine" demand) · are red blends sweet? (ties to "sweet red wine" 27,100, KD 10 — worth a line clarifying most stocked blends are dry-leaning, not dessert-sweet)

**Cross-sell note (not assigned to any product page):** "red wine glasses" (8,100, KD 14) and "red wine glass" (6,600, KD 8) carry real, low-KD commercial volume — worth flagging to whoever owns merchandising/accessories, not wine SEO.

---

## Phase 3 — Per-Product Keyword Assignments

### 1. prod-wine-red-01 — 14 Hands Cabernet Sauvignon
Primary: **14 hands cabernet sauvignon** (1,300, KD 9, T1)
Secondary: 14 hands cabernet (720, KD 9, T1) · 14 hands wine (2,400, KD 18, T1) · cabernet 14 hands (90, KD 6, T1) · 14 hands winery cabernet sauvignon (590, KD 10, T1) · 14 hands winery (1,000, KD 9, T1)
FAQ: none with real PAA-style demand specific to this SKU — defer to Cabernet Sauvignon subcategory FAQs.

### 2. prod-wine-red-02 — 19 Crimes Red Blend
Primary: **19 crimes red blend** (1,900, KD 20, T1)
Secondary: 19 crimes wine (12,100, KD 14, T1) · 19 crimes (5,400, KD 23, T1) · 19 crimes red wine (880, KD 13, T1) · snoop dogg wine (5,400, KD 17, T1 — real, legitimate celebrity-ownership tie-in: Snoop Dogg co-created 19 Crimes' "Cali Red") · 19 crimes cali red (720, KD 6, T1)
FAQ: who owns 19 crimes wine? (170, KD 27 — real PAA demand, answer: Treasury Wine Estates) · what is 19 crimes red blend made of? — no direct volume found; skip unless confirmed elsewhere.

### 3. prod-wine-red-03 — 7 Deadly Zins Old Vine Zinfandel
Primary: **7 deadly zins** (1,300, KD 11, T1)
Secondary: seven deadly zins (880, KD 11, T1) · 7 deadly zinfandel (720, KD 10, T1) · zinfandel the seven deadly zins (1,000, KD 12, T1) · 7 deadly zins wine (480, KD 10, T1) · michael david wines (390, KD 12, T1 — the parent winery)
FAQ: defer to Zinfandel subcategory (old vine Zinfandel / red vs. white Zin) — no SKU-specific informational demand found.

### 4. prod-wine-red-04 — A to Z Wineworks Oregon Pinot Noir
Primary: **a to z pinot noir** (1,300, KD 7, T1)
Secondary: a to z wineworks pinot noir (320, KD 11–14, T1) · a to z oregon pinot noir (170, KD 9, T1) · a to z wineworks pinot noir oregon (140, KD 4–9, T1) · oregon pinot noir (5,400, KD 8, T1) · willamette valley pinot noir (4,400, KD 24, T1)
FAQ: defer to Pinot Noir subcategory FAQs (sweet/dry, chill, pronunciation).

### 5. prod-wine-red-05 — Alamos Malbec
Primary: **alamos malbec** (4,400, KD 16–17, T1)
Secondary: alamos malbec wine (1,000, KD 5–11, T1) · alamos wine (880, KD 11, T1) · alamos malbec 2023 (590, KD 10–11, T1) · malbec alamos (140, KD 9, T1) · alamos argentina malbec (140, KD 9, T1)
FAQ: defer to Malbec subcategory FAQs.

### 6. prod-wine-red-06 — Apothic Red Blend
Primary: **apothic red wine** (12,100, KD 21, T1)
Secondary: apothic red blend (1,900, KD 19, T1) · apothic wine (4,400, KD 23, T1) · apothic red (2,900, KD 20, T1) · apothic red blend wine (480, KD 16, T1) · apothic winemaker's red blend (210, KD 17, T1)
FAQ: is apothic red wine sweet? (390, KD 15 — real, recurring PAA-style question; answer factually: Apothic Red is a soft, slightly sweet-leaning red blend, not a bone-dry Cab)

### 7. prod-wine-red-07 — Belle Glos Clark & Telephone Pinot Noir
Primary: **belle glos pinot noir clark & telephone vineyard** (880, KD 8, T1 — exact SKU match)
Secondary: belle glos pinot noir (9,900, KD 8, T1) · belle glos pinot noir 2022 (1,600, KD 7, T1) · belle glos (part of the 9,900 head term, brand navigational)
FAQ: defer to Pinot Noir subcategory FAQs.

### 8. prod-wine-red-08 — Bogle Old Vine Zinfandel
Primary: **bogle old vine zinfandel** (720, KD 19, T1 — exact match)
Secondary: bogle vineyards old vine zinfandel (590, KD 12, T1) · bogle wine old vine zinfandel (260, KD 20, T1) · bogle wine (4,400, KD 34, T2) · bogle vineyards (4,400, KD 37, T2) · bogle wine zinfandel (110, KD 12, T1)
FAQ: defer to Zinfandel subcategory FAQs (old vine).

### 9. prod-wine-red-09 — Catena Malbec
Primary: **catena malbec** (3,600, KD 12–13, T1)
Secondary: catena malbec wine (720, KD 10–12, T1) · catena malbec 2022 (720, KD 7–12, T1) · malbec wine catena (590, KD 9–10, T1) · catena wine (590, KD 23, T1) · malbec catena (90, KD 8, T1)
FAQ: defer to Malbec subcategory FAQs.

### 10. prod-wine-red-10 — Catena Zapata Malbec Argentino
Primary: **catena zapata malbec argentino** (390, KD 13–15, T1 — exact match)
Secondary: catena zapata malbec (1,300, KD 13, T1) · catena zapata (1,600, KD 36, T2) · bodega catena zapata malbec (210, KD 20, T1) · catena zapata winery (320, KD 34, T2) · catena zapata wine (260, KD 28, T2)
FAQ: defer to Malbec subcategory FAQs.

### 11. prod-wine-red-11 — Caymus Napa Valley Cabernet Sauvignon
Primary: **caymus cabernet sauvignon** (12,100, KD 24, T1)
Secondary: caymus napa valley cabernet sauvignon (1,900, KD 21 / 1,300, KD 30, T1–T2) · caymus cabernet sauvignon 2022 (3,600, KD 20, T1) · caymus cabernet sauvignon 2023 (2,900, KD 16, T1) · caymus vineyards cabernet sauvignon (2,400, KD 27, T2) · caymus 2022 cabernet sauvignon (1,300, KD 18, T1)
FAQ: no SKU-specific PAA volume found beyond general Cabernet FAQs.

### 12. prod-wine-red-12 — Chateau Ste. Michelle Indian Wells Merlot
Primary: **chateau ste michelle cabernet sauvignon** (1,300, KD 13, T1 — closest volume-backed Chateau Ste. Michelle keyword in this pull; a true "Indian Wells Merlot" line has no direct row in this export)
Secondary: general Merlot category terms — merlot wine (18,100, KD 28, T2) · merlot red wine (4,400, KD 28, T2) · washington state merlot (no direct row found; Chateau Ste. Michelle is Washington's largest winery, a real fact worth using in copy) · good merlot wine (590, KD 8, T1)
**Note:** "Indian Wells Merlot" specifically is confirmed real via general knowledge (Chateau Ste. Michelle's Columbia Valley tier), not volume-backed in this data pull. Recommend a dedicated Chateau Ste. Michelle SEMrush export next round.
FAQ: defer to Merlot subcategory FAQs.

### 13. prod-wine-red-13 — Cline Ancient Vines Zinfandel
Primary: **cline zinfandel** (390, KD 12, T1)
Secondary: general Zinfandel category terms — old vine zinfandel (1,600, KD 6, T1) · zinfandel red wine (2,400, KD 19, T1) · red zinfandel (1,300, KD 11, T1)
**Note:** "Ancient Vines" is Cline's real flagship old-vine Zinfandel designation (confirmed real via general knowledge / WebSearch-level confidence); the specific phrase "cline ancient vines zinfandel" did not appear as its own row in this export.
FAQ: defer to Zinfandel subcategory FAQs.

### 14. prod-wine-red-14 — Daou Paso Robles Cabernet Sauvignon
Primary: **daou cabernet sauvignon** (5,400, KD 11, T1)
Secondary: daou cabernet sauvignon 2022 (2,400, KD 7, T1) · paso robles cabernet sauvignon (4,400, KD 10, T1) · daou (part of the 5,400 head term, brand navigational)
FAQ: defer to Cabernet Sauvignon subcategory FAQs.

### 15. prod-wine-red-15 — Decoy California Cabernet Sauvignon
Primary: **decoy cabernet sauvignon** (6,600, KD 10, T1)
Secondary: decoy cabernet sauvignon 2022 (1,600, KD 10, T1) · california cabernet sauvignon (5,400, KD 9, T1) · decoy pinot noir (2,400, KD 8, T1 — brand-level proof of search demand, not this SKU, useful for the Decoy hub)
FAQ: defer to Cabernet Sauvignon subcategory FAQs.

### 16. prod-wine-red-16 — Decoy Merlot
Primary: no direct volume-backed row found for "decoy merlot" in this data pull — **confirmed real via WebSearch, not volume-backed** (Decoy, Duckhorn's value-tier label, makes a Sonoma County Merlot; real, widely distributed).
Secondary: general Merlot category terms — merlot wine (18,100, KD 28, T2) · california merlot wine (480, KD 22, T1) · decoy cabernet sauvignon (6,600, KD 10, T1 — brand-level proof of Decoy search demand) · decoy pinot noir (2,400, KD 8, T1 — same)
FAQ: defer to Merlot subcategory FAQs.

### 17. prod-wine-red-17 — Duckhorn Napa Valley Merlot
Primary: **duckhorn wine merlot** (390, KD 9, T1 — exact match)
Secondary: duckhorn cabernet sauvignon (4,400, KD 13, T1 — brand-level demand, different SKU, see gap analysis) · merlot wine (18,100, KD 28, T2) · napa valley red wine (2,900, KD 18, T1)
FAQ: defer to Merlot subcategory FAQs.

### 18. prod-wine-red-18 — Flowers Sonoma Coast Pinot Noir
Primary: **flowers pinot noir** (2,900, KD 15, T1)
Secondary: sonoma coast pinot noir (1,300, KD 10, T1 — exact appellation match) · russian river valley pinot noir (2,900, KD 9, T1 — nearby, relevant appellation content)
FAQ: defer to Pinot Noir subcategory FAQs.

### 19. prod-wine-red-19 — J. Lohr Seven Oaks Cabernet Sauvignon
Primary: **j lohr cabernet sauvignon** (2,900, KD 8, T1)
Secondary: paso robles cabernet sauvignon (4,400, KD 10, T1) · california cabernet sauvignon (5,400, KD 9, T1)
**Note:** "Seven Oaks" as its own qualifier did not appear as a separate volume row in this pull; "j lohr cabernet sauvignon" is the closest real, volume-backed match, and Seven Oaks is J. Lohr's flagship, widely-available Paso Robles Cab (confirmed real via general knowledge).
FAQ: defer to Cabernet Sauvignon subcategory FAQs.

### 20. prod-wine-red-20 — Josh Cellars California Cabernet Sauvignon
Primary: **josh cabernet sauvignon** (9,900, KD 14, T1)
Secondary: josh cellars cabernet sauvignon (6,600, KD 17, T1) · josh cabernet (2,400, KD 11, T1) · josh cellars (6,600, KD 26, T2) · josh wine (22,200, KD 24, T1) · josh cellars cabernet (1,300, KD 20, T1)
FAQ: is josh wine good? (260, KD 11 — real, recurring commercial-informational question)

### 21. prod-wine-red-21 — Josh Cellars Legacy Red Blend
Primary: **josh cellars legacy red blend** (320, KD 9, T1 — exact match)
Secondary: josh red blend (720, KD 10, T1) · josh cellars legacy red blend 750ml (260, KD 8, T1) · josh red wine (2,900, KD 16, T1) · josh red blend wine (260, KD 5, T1)
FAQ: defer to Red Wine/blend subcategory FAQs.

### 22. prod-wine-red-22 — Josh Cellars Pinot Noir
Primary: **josh pinot noir** (2,900, KD 13, T1)
Secondary: josh cellars pinot noir (720, KD 10, T1) · josh pinot (880, KD 12, T1) · josh pinot noir 750ml (880, KD 8, T1) · pinot noir josh (320, KD 10, T1)
FAQ: defer to Pinot Noir subcategory FAQs.

### 23. prod-wine-red-23 — Justin Cabernet Sauvignon
Primary: **justin cabernet sauvignon** (5,400, KD 13, T1)
Secondary: paso robles cabernet sauvignon (4,400, KD 10, T1) · california cabernet sauvignon (5,400, KD 9, T1)
FAQ: defer to Cabernet Sauvignon subcategory FAQs.

### 24. prod-wine-red-24 — La Crema Monterey Pinot Noir
Primary: **la crema pinot noir** (6,600, KD 20, T1)
Secondary: california pinot noir (2,900, KD 10, T1) · pinot noir red wine (6,600, KD 25, T1)
**Note:** "Monterey" as a specific appellation qualifier didn't appear as its own row — La Crema does make a real, widely-distributed Monterey-designate Pinot Noir (confirmed real via general knowledge).
FAQ: defer to Pinot Noir subcategory FAQs.

### 25. prod-wine-red-25 — Luigi Bosca Malbec
Primary: **luigi bosca malbec** (590, KD 8, T1 — exact match)
Secondary: malbec wine (18,100, KD 21, T1) · argentine malbec wine (720, KD 24, T1) · mendoza malbec (480, KD 9, T1)
FAQ: defer to Malbec subcategory FAQs.

### 26. prod-wine-red-26 — Meiomi California Pinot Noir
Primary: **meiomi pinot noir** (27,100, KD 26, T2 — huge anchor, largest single-SKU volume in this batch)
Secondary: meiomi pinot noir 2022 (1,000, KD 17, T1) · california pinot noir (2,900, KD 10, T1) · is meiomi pinot noir sweet (140, KD 13, T1) · is meiomi pinot noir good (90, KD 9–17, T1) · meiomi cabernet sauvignon (1,900, KD 10, T1 — brand-level demand, different SKU, see gap analysis)
FAQ: is Meiomi Pinot Noir sweet? (140, KD 13 — real, recurring; answer factually — it's a fruit-forward, lush style but technically dry)

### 27. prod-wine-red-27 — Orin Swift Abstract Red Blend
Primary: **orin swift abstract** (1,600, KD 10, T1)
Secondary: abstract wine (1,000, KD 16, T1) · orin swift wines (2,900, KD 10, T1) · abstract orin swift (590, KD 11, T1) · orin swift abstract red blend (210, KD 6, T1) · abstract red blend (140, KD 9, T1)
FAQ: no direct SKU-specific PAA volume found; defer to Red Wine/blend subcategory FAQs.

### 28. prod-wine-red-28 — Ridge Three Valleys Zinfandel
Primary: **ridge zinfandel** (390, KD 10, T1 — closest volume-backed match)
Secondary: old vine zinfandel (1,600, KD 6, T1) · zinfandel red wine (2,400, KD 19, T1) · red zinfandel (1,300, KD 11, T1)
**Note:** "Three Valleys" specifically did not appear as its own row in this export; it's Ridge's real, widely-available Zinfandel-based blend (confirmed real via general knowledge). Recommend a dedicated Ridge SEMrush export next round.
FAQ: defer to Zinfandel subcategory FAQs.

### 29. prod-wine-red-29 — Seghesio Sonoma Zinfandel
Primary: **seghesio sonoma zinfandel** (720, KD 17, T1 — exact match)
Secondary: seghesio zinfandel (1,600, KD 18, T1) · sonoma seghesio zinfandel (1,300, KD 24, T1) · seghesio zinfandel 2023 (480, KD 15, T1) · zinfandel seghesio (480, KD 24, T1)
FAQ: defer to Zinfandel subcategory FAQs.

### 30. prod-wine-red-30 — Silver Oak Alexander Valley Cabernet Sauvignon
Primary: **silver oak alexander valley cabernet sauvignon** (880, KD 14, T1 — exact match)
Secondary: silver oak cabernet sauvignon (6,600, KD 18, T1) · silver oak alexander valley (1,900, KD 18, T1) · silver oak alexander valley cabernet (720, KD 15, T1) · silver oak wine (6,600, KD 14, T1) · silver oak (8,100, KD 38, T2)
FAQ: no direct SKU-specific PAA volume found; defer to Cabernet Sauvignon subcategory FAQs.

### 31. prod-wine-red-31 — The Prisoner Red Blend
Primary: **the prisoner red blend** (1,600, KD 9, T1)
Secondary: prisoner red blend (1,900, KD 7, T1) · prisoner wine (12,100, KD 23, T1) · the prisoner wine (9,900, KD 21, T1) · prisoner red wine (880, KD 13, T1) · the prisoner wine company (3,600, KD 15, T1)
FAQ: who makes The Prisoner wine? (110, KD 19–25 — real, recurring; answer: founded by Dave Phinney, now owned by The Prisoner Wine Company/Constellation Brands)

### 32. prod-wine-red-32 — Trivento Reserve Malbec
Primary: **trivento malbec** (1,300, KD 16, T1)
Secondary: malbec wine (18,100, KD 21, T1) · argentine malbec wine (720, KD 24, T1) · mendoza malbec (480, KD 9, T1)
**Note:** "Reserve" tier not separately volume-confirmed; "trivento malbec" is the broad, real match and Reserve is Trivento's standard widely-distributed tier.
FAQ: defer to Malbec subcategory FAQs.

---

## Phase 4 — Brand Hub Drafts

Three brands clear the 2+ stocked SKU bar: **Josh Cellars** (3), **Decoy** (2 red, +1 white owned by a different agent), and **Catena / Catena Zapata** (2, same winery family).

### Josh Cellars
**categoryLabel:** Josh Cellars

**Hook:** Josh Cellars was founded in 2013 by Joseph Carr, named for his father, and built specifically around the idea of everyday-drinking wine that punches above its price point — it has been one of the fastest-growing wine brands in the US since launch. Grapes are sourced across California and beyond (Paso Robles/North Coast fruit for the Cabernet, cooler-climate fruit for the Pinot Noir), and the lineup spans Cabernet, red blends, Pinot Noir, and whites. The brand's whole positioning is "reserve-style character at a non-reserve price," which shows up in the real search data too — "josh wine" alone pulls 22,200/mo, and buyers are clearly comparing it against pricier bottles ("is josh wine good," 260/mo).

**FAQs:**
1. Is Josh Cellars a good wine? (260, KD 11 — real, recurring commercial-informational demand)
2. Who makes Josh Cellars? (ties to brand-navigational demand around "josh cellars winery," 390, KD 24 — answer: Josh Cellars is produced by Vintage Wine Estates in partnership with founder Joseph Carr)
3. What does Josh Cellars Cabernet Sauvignon taste like? — no direct SKU-level PAA volume found; optional, lower-confidence FAQ.

**Secondary brand keywords:** josh cellars wine (5,400, KD 21, T1) · josh cellars cabernet (1,300, KD 20, T1) · josh vineyards (1,900, KD 28, T2) · josh wines (1,900, KD 23, T1)

### Decoy
**categoryLabel:** Decoy

**Hook:** Decoy is the second label of Duckhorn Vineyards, launched in 1985 as an outlet for young-vine and select lots not destined for the flagship Duckhorn bottlings — meaning the fruit sourcing and winemaking team trace directly back to one of Napa Valley's most established Merlot-and-Cabernet producers. The California-appellation Cabernet Sauvignon and the Merlot are both built for immediate drinking rather than long cellaring, which fits the strong "everyday luxury" search pattern around the brand (decoy cabernet sauvignon pulls 6,600/mo at a very approachable KD 10). **Note:** Decoy also produces a white wine SKU that is stocked and owned by a different product-agent on this project — hub copy should reference the full Decoy line (red and white) rather than reds only, since a shopper landing on a Decoy brand page will expect to see the whole lineup.

**FAQs:**
1. Who owns Decoy wine? (ties to brand-navigational search; answer: Decoy is Duckhorn Vineyards' second label — same ownership/winemaking team)
2. What's the difference between Decoy and Duckhorn? — no direct volume row found in this pull; optional, answer factually if included (Decoy = earlier-drinking, broader-appellation, lower price point; Duckhorn = single-appellation flagship).

**Secondary brand keywords:** decoy cabernet sauvignon (6,600, KD 10, T1) · decoy cabernet sauvignon 2022 (1,600, KD 10, T1) · decoy pinot noir (2,400, KD 8, T1 — different varietal, useful proof of overall brand demand)

### Catena / Catena Zapata
**categoryLabel:** Catena

**Hook:** The Catena family has been growing grapes in Mendoza, Argentina since 1902, and Nicolás Catena Zapata is widely credited with proving Malbec could be a serious, high-altitude fine wine rather than a bulk blending grape — the vineyards for both stocked bottlings sit at elevations well above most Old World wine regions, which is a real, verifiable differentiator worth using in copy. The entry "Catena Malbec" and the more concentrated "Catena Zapata Malbec Argentino" represent two tiers of the same estate's high-altitude Mendoza fruit, which maps cleanly onto real, distinct search demand for each ("catena malbec" 3,600/mo vs. "catena zapata malbec argentino" 390/mo).

**FAQs:**
1. What's the difference between Catena Malbec and Catena Zapata? — no direct volume row found; answer factually if included (Catena Malbec is the accessible entry tier; Catena Zapata Malbec Argentino is a more concentrated, higher-tier expression from the same estate).
2. Where are Catena's vineyards? (ties to general brand-navigational interest — real answer: high-altitude Mendoza, Argentina, including Gualtallary and Adrianna Vineyard sites)

**Secondary brand keywords:** catena wine (590, KD 23, T1) · catena zapata malbec (1,300, KD 13, T1) · malbec wine catena (590, KD 9–10, T1) · bodega catena zapata malbec (210, KD 20, T1)

---

## Phase 5 — Blog Topic Candidates

1. **"How to Pronounce Wine Names: Cabernet, Malbec, Merlot & Pinot Noir"** — mega-cluster across all four varietals: cabernet sauvignon pronunciation (2,400, KD 18) + how to pronounce cabernet sauvignon (590, KD 24) + malbec pronunciation (390, KD 26) + how to pronounce malbec (140, KD 23) + merlot pronunciation (880, KD 27) + how to pronounce merlot (320, KD 20) + how to pronounce pinot noir (1,600, KD 26–32) + how to say pinot noir (880, KD 28–35). Combined **~7,000+/mo**, real and recurring across every export pulled.
2. **"Is Pinot Noir Sweet or Dry? A Straight Answer"** — is pinot noir sweet (3,600, KD 9) + is pinot noir red or white (2,400, KD 10) + is pinot noir dry (880, KD 8) + is pinot noir sweet or dry (260, KD 6). Combined **~7,000+/mo**, the single largest informational cluster found in this batch.
3. **"Is Merlot Sweet? Merlot 101"** — is merlot sweet (2,900, KD 8) + is merlot a dry wine (880, KD 7) + is merlot a sweet wine (590, KD 7) + is merlot dry (590, KD 9–16). Combined **~5,000+/mo**.
4. **"Is Cabernet Sauvignon Sweet or Dry?"** — is cabernet sauvignon sweet (2,900, KD 9) + is cabernet sauvignon dry (1,300, KD 18) + is cabernet sauvignon a red wine (2,400, KD 25). Combined **~6,500+/mo**.
5. **"Cabernet Sauvignon vs. Merlot: What's the Difference"** — cabernet sauvignon vs merlot (1,300, KD 17) + several "what's the difference" phrasing variants (~600 combined). Combined **~1,900+/mo**.
6. **"Malbec 101: What Is It and What Does It Taste Like"** — what is malbec wine (1,000, KD 36–43) + is malbec sweet (720, KD 14–15) + is malbec a dry wine (590, KD 13–20) + what does malbec taste like (170, KD 20). Combined **~2,500+/mo**.
7. **"Malbec vs. Cabernet vs. Merlot vs. Pinot Noir: A Buyer's Comparison"** — malbec vs cabernet sauvignon (390–480, KD 10–15) + malbec vs merlot (390, KD 7) + malbec vs pinot noir (480, KD 6–14) + pinot noir vs cabernet sauvignon (2,900, KD 10) + pinot noir vs merlot (1,300, KD 9) + cabernet sauvignon vs pinot noir (1,000, KD 9). Combined **~6,000+/mo**, one of the strongest comparison clusters found.
8. **"What Is Old Vine Zinfandel?"** — old vine zinfandel (1,600, KD 6) + old vine zinfandel grapes (1,300, KD 14). Directly supports 3 stocked SKUs (7 Deadly Zins, Bogle, Cline Ancient Vines). Combined **~2,900/mo**.
9. **"Primitivo vs. Zinfandel: Same Grape, Different Country"** — primitivo wine (4,400, KD 11) + primitivo zinfandel wine (1,900, KD 20) + what is primitivo wine (110, KD 14). Combined **~6,400/mo**, genuinely under-covered educational angle.
10. **"Red Zinfandel vs. White Zinfandel: Know the Difference Before You Buy"** — is zinfandel red or white (590, KD 22–24) + is white zinfandel sweet (880, KD 12–13) + zinfandel white zinfandel (8,100, KD 18). Useful specifically because the site stocks red Zin only — a real disambiguation need.
11. **"Budget Red Wine Guide: Best Bottles Under $20"** — budget friendly red wine (4,400, KD 9) + inexpensive red wine (1,900, KD 12) + affordable red wine (1,600, KD 12) + best red wines on a budget (1,600, KD 4). Combined **~9,500+/mo**, maps cleanly to 14 Hands, Apothic, Josh Cellars, 19 Crimes entry-tier SKUs.
12. **"Full-Bodied Red Wines Guide"** — full bodied red wine (2,900, KD 17) — good pairing/pillar post tying together Cabernet, Zinfandel, Malbec, and the bigger red blends.

---

## Phase 6 (of brief) / Phase 8 — Gap Analysis

### Part A — Real missing expressions within brands already stocked
All of these are additional, genuinely distinct SKUs from brands already in the catalog — not new-to-catalog brands.

| Brand (stocked SKU) | Missing expression | Primary keyword | Support keywords |
|---|---|---|---|
| Duckhorn (Merlot stocked) | Duckhorn Cabernet Sauvignon | duckhorn cabernet sauvignon (4,400, KD 13, T1) | napa valley cabernet sauvignon (14,800, KD 21) · duckhorn wine merlot (390, KD 9) · duckhorn (part of head term) |
| Chateau Ste. Michelle (Merlot stocked) | Chateau Ste. Michelle Cabernet Sauvignon | chateau ste michelle cabernet sauvignon (1,300, KD 13, T1) | california cabernet sauvignon (5,400, KD 9) · washington state wine (no direct row; real fact — CSM is WA's largest winery) |
| Meiomi (Pinot Noir stocked) | Meiomi Cabernet Sauvignon | meiomi cabernet sauvignon (1,900, KD 10, T1) | meiomi pinot noir (27,100, KD 26) · california cabernet sauvignon (5,400, KD 9) |
| 19 Crimes (Red Blend stocked) | 19 Crimes Cabernet Sauvignon | 19 crimes cabernet sauvignon (1,300, KD 16, T1) | 19 crimes cabernet (1,000, KD 14) · 19 crimes wine (12,100, KD 14) |
| 19 Crimes (Red Blend stocked) | 19 Crimes Pinot Noir ("The Punishment") | 19 crimes pinot noir (320, KD 16, T1) | 19 crimes wine the punishment pinot noir (140, KD 14) |
| Bogle (Old Vine Zinfandel stocked) | Bogle Cabernet Sauvignon | bogle cabernet sauvignon (2,400, KD 10, T1) | bogle cabernet (1,900, KD 8) · bogle wine cabernet sauvignon (880, KD 13) |
| Bogle (Old Vine Zinfandel stocked) | Bogle Pinot Noir | bogle pinot noir (880, KD 9, T1) | bogle vineyards pinot noir (480, KD 10) |
| Bogle (Old Vine Zinfandel stocked) | Bogle Merlot | bogle merlot wine (170, KD 5, T1) | bogle family merlot (90, KD 4) |
| Josh Cellars (3 SKUs stocked) | Josh Cellars Merlot | josh cellars merlot (480, KD 7, T1) | josh merlot wine (390, KD 7) · josh wine merlot (390, KD 13) |
| Josh Cellars (3 SKUs stocked) | Josh Cellars Bourbon Barrel-Aged Zinfandel | josh cellars family reserve bourbon barrel aged zinfandel (320, KD 15, T1) | josh zinfandel (390, KD 11) |
| 14 Hands (Cabernet stocked) | 14 Hands Merlot | 14 hands merlot (1,000, KD 9, T1) | 14 hands wine merlot (320, KD 6) · 14 hands winery merlot (260, KD 11) |
| Silver Oak (Alexander Valley Cab stocked) | Silver Oak Napa Valley Cabernet Sauvignon | silver oak napa valley cabernet sauvignon (1,900, KD 10, T1) | napa valley silver oak cabernet (5,400, KD 19) · silver oak napa valley (1,900, KD 21) |
| Catena (2 Malbecs stocked) | Catena Alta Malbec | catena alta malbec (480, KD 9–12, T1) | catena alta (140, KD 9) |
| The Prisoner (Red Blend stocked) | Saldo Zinfandel (Prisoner Wine Co. sister label) | saldo zinfandel (1,600, KD 14, T1) | zinfandel red wine (2,400, KD 19) |

**Lower-confidence Part A candidates** (real, well-known products, but no volume-backed row found in this data pull — recommend dedicated brand exports before writing copy): Caymus Special Selection Cabernet Sauvignon; Daou Discovery and Daou Soul of a Lion Cabernet Sauvignon; Justin Isosceles; Belle Glos other vineyard-designate Pinot Noirs (Las Alturas, Dairyman, Balade); Ridge Lytton Springs / Geyserville Zinfandels (beyond the stocked Three Valleys).

### Part B — Real unstocked brands/varietals with genuine demand
| Finding | Primary keyword | Support keywords |
|---|---|---|
| William Hill Cabernet Sauvignon (Napa) | william hill cabernet sauvignon (18,100, KD 14, T1) | california cabernet sauvignon (5,400, KD 9) · napa valley cabernet sauvignon (14,800, KD 21) — highest single volume of any unstocked brand found in this batch |
| Robert Mondavi Cabernet Sauvignon | robert mondavi cabernet sauvignon (2,900, KD 18, T1) | robert mondavi private selection cabernet sauvignon (1,600, KD 10) · napa cabernet sauvignon (1,600, KD 17) |
| Austin Hope Cabernet Sauvignon (Paso Robles) | austin hope cabernet sauvignon (6,600, KD 11, T1) | paso robles cabernet sauvignon (4,400, KD 10) |
| Stags' Leap Cabernet Sauvignon | stags leap cabernet sauvignon (3,600, KD 15, T1) | napa valley cabernet sauvignon (14,800, KD 21) |
| Joel Gott Cabernet Sauvignon | joel gott cabernet sauvignon (1,600, KD 9, T1) | california cabernet sauvignon (5,400, KD 9) |
| Jordan Cabernet Sauvignon (Alexander Valley) | jordan cabernet sauvignon (1,600, KD 14, T1) | alexander valley cabernet sauvignon (2,400, KD 15) |
| Louis M. Martini Cabernet Sauvignon | louis m martini cabernet sauvignon (1,600, KD 8, T1) | california cabernet sauvignon (5,400, KD 9) |
| Kosta Browne Pinot Noir (cult Sonoma) | kosta browne pinot noir (1,600, KD 10, T1) | sonoma coast pinot noir (1,300, KD 10) · sea smoke pinot noir (1,600, KD 18) |
| Rombauer Zinfandel | rombauer zinfandel (1,900, KD 18, T1) | rombauer napa valley zinfandel (390, KD 22) · zinfandel red wine (2,400, KD 19) |
| Turley Zinfandel (cult) | turley zinfandel (1,000, KD 8, T1) | old vine zinfandel (1,600, KD 6) |
| Trapiche Malbec (Argentina) | trapiche malbec (880, KD 6, T1) | trapiche vineyards malbec (480, KD 13) · malbec trapiche argentina (590, KD 12) |
| Terrazas de los Andes Malbec (Argentina) | terrazas de los andes malbec (880, KD 9, T1) | argentine malbec wine (720, KD 24) |
| Don ___ Malbec family (Don Miguel Gascón, Don David, Don Nicanor) | don miguel gascon malbec (260, KD 9, T1) | don david malbec (90, KD 5) · don nicanor malbec (70, KD 7) · gascon malbec (880, KD 8) — real cluster of budget Argentine Malbec sub-brands |
| Mark West Pinot Noir | mark west pinot noir (4,400, KD 10, T1) | california pinot noir (2,900, KD 10) — value-tier Pinot, complements the higher-end stocked Pinots |

**Flagged, not verified — do not use without confirmation:** "why was orin swift barred from making zinfandel" (140, KD 18) — a real, recurring query touching on Dave Phinney/Orin Swift brand history, but the specifics were not verified in this pass. If this angle is wanted for the Orin Swift or Prisoner hub, confirm the underlying facts via WebSearch before writing copy — do not repeat the query's premise as fact.

**Uncertain — flagged, not used:** "caymus zinfandel" (390, KD 13) appeared in the Zinfandel export. Caymus/Wagner Family is not known for a Zinfandel bottling under that label; this may be confused/misattributed search intent rather than a real product. Recommend verifying before treating as a Caymus gap.

---

## What to check

1. Chateau Ste. Michelle Indian Wells Merlot, Ridge Three Valleys Zinfandel, and J. Lohr Seven Oaks Cabernet Sauvignon all had no SKU-specific volume row in this pull — worth a dedicated brand-level SEMrush export for these three before finalizing copy.
2. 14 lower-confidence Part A findings (Caymus Special Selection, Daou Discovery/Soul of a Lion, Justin Isosceles, Belle Glos other vineyard designates, Ridge Lytton Springs/Geyserville) are real, well-known products but not volume-confirmed here — worth a follow-up export if you want to consider stocking them.
3. William Hill (18,100, KD 14) is the single strongest unstocked-brand signal found in this entire batch — worth a look if you're considering catalog expansion.
4. Decoy Merlot and Josh Cellars Legacy Red Blend both had thinner direct data than their siblings — fine to proceed with the assignments above, just flagging they lean more on category-level support than brand-exact hits.
5. "Caymus zinfandel" and the Orin Swift/Zinfandel-ban query are both flagged as uncertain — don't use either without independent verification.
