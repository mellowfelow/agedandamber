# Keyword Map — Fine Wine Batch 1 (Sherry, Port, Icewine & Dessert Wine, Organic & Natural Wine, Rosé Wine)
**Site:** Aged & Amber | **Market:** US | **Generated:** August 2026
**Status:** DRAFT — research report only, nothing implemented. First wine batch; every other category (bourbon, scotch, irish, japanese, vodka, rye, tequila/mezcal, rum, gin, cognac) is already live.
**Scope:** 63 products across 5 subcategories under `fine-wine`: Sherry (6), Port (10), Icewine & Dessert Wine (7), Organic & Natural Wine (22), Rosé Wine (15).
**Methodology:** Real SEMrush export data (19 CSVs: 11 category-level, 8 brand-level). KD 0–25 = T1 Quick Win, 26–40 = T2 Worth Targeting, 41–55 = T3 Supporting only, 56+ dropped/flagged. Where no export row exists for a product, marked **"confirmed real via WebSearch, not volume-backed."**

---

## Phase 1 — Filter Summary

This was, by a wide margin, the noisiest batch in the project so far — wine as a category collides with far more unrelated English-language homonyms than any spirit category has. Roughly **240–250 rows across the 19 exports (out of ~1,600 total rows) were dropped or reclassified** as noise. Breakdown:

**Sherry (~30 of 100 rows dropped):** The entire export skews generic/educational — there is **zero brand-specific search volume** anywhere in this file (no "Lustau," "Harveys," "González Byass," "Alvear," or "Croft" rows at all). Dropped: sherry-**vinegar** confusion (`is sherry vinegar the same as red wine vinegar`, `is sherry cooking wine the same as sherry vinegar`, `is dry sherry the same as sherry cooking wine`, ~14 rows — a totally different product from sherry wine, exactly as flagged in the brief) and grocery-store-location queries (`where do you find sherry in the grocery store`, ~9 rows, zero commercial value for an online allocated retailer). **Flag:** this export's thinness means every Sherry product below leans on category-level informational terms rather than brand terms — noted per-product.

**Port (~25 of ~200 rows across two files dropped/reclassified):** The single biggest noise source is the medical condition "**port-wine stain**" (a vascular birthmark) — `port wine stain` (18,100, KD47), `port wine stain birthmark` (9,900), `nevus flammeus port wine stain` (2,900), `port-wine stains` (1,600), `port wine birthmark` (2,400), plus laser-treatment and dermatology variants — combined well over **40,000 volume**, all dropped as a homonym collision, none of it wine-shopping intent. Also dropped: Porto **tourism** (`douro valley wine tour from porto`, `porto wine tour`, ~2,500 combined vol) and local-business navigational collisions (`Porter Square Wine & Spirits`, `Rollers Wine & Spirits Port Royal Plaza`, `Porter Family Vineyards Wine`, `Total Wine Port Charlotte/St Lucie` — Florida city names). **Flagged, not deleted:** `port wine cheese` (4,400, KD11) + `port wine cheese ball` (590) + `port wine cheese spread` (590) — a real, sizeable food-pairing/recipe cluster, genuinely popular, but not a product-page keyword; worth a blog/cross-sell note, not an assignment.

**Icewine & Dessert Wine (~90+ of ~300 rows across two Ice-wine files dropped — the single worst noise ratio in the batch):** The `Ice-wine…(1).csv` file is almost entirely consumed by the literal, unrelated question "**can I/you put ice in wine**" (ice cubes in a glass of wine) — `can you put ice in wine`, `can i put ice in red wine`, `can we add ice to wine`, and roughly 70 near-duplicate phrasings of the same query, none about the Icewine dessert-wine style. Also dropped: sports/celebrity homonyms (`french ice dancers defend win` 1,300/KD60, `miracle on ice`, `vanilla ice lawsuit`, `ice spice grammy`, `buffalo sabres home ice advantage`), `Smirnoff Ice` wine-cooler confusion, a New Balance 992 "Dark Ice Wine" sneaker colorway, and wine-plus-ice-cream recipe pairings (`wine ice cream`, `red wine and ice cream`, ~8 rows — flagged as food-pairing noise, same treatment as sherry vinegar). `wine ice bucket` / `vintage decanter with ice chamber` (~1,700 combined vol) is genuine barware cross-sell interest, not a product keyword — noted separately.

**Organic & Natural Wine (~37 of 200 rows dropped):** The biggest surprise here is **real restaurant/wine-bar navigational names with very large volume** that have nothing to do with a bottle retailer — `Lasita Rotisserie & Natural Wine` (6,600!), `Terre Pasta & Natural Wine` (5,400!), `Hex Coffee Kitchen & Natural Wines` (1,000), plus a dozen more restaurant/shop names (`Bar Derrière`, `Buvons`, `Sebastiano's`, `Ardor`, `Cork restaurant`, `Maison Fox`, `Urbanna Natural Spa Salon & Wine`, `L Thai Organic Cuisine & Wine Bar Tucker`, `Peoples Organic Coffee & Wine Cafe`). Also dropped: Arkansas Lottery's "Natural State" jackpot numbers (`natural state jackpot winning numbers`, 1,900 — a state-nickname homonym, several variants), the Canadian rock band **April Wine**'s album *Nature of the Beast* (~6 rows), and one bizarre outlier — `simply organic bamboo award-winning softness pillowcases` (590 vol) — completely unrelated bedding product. Also filtered per the brief's instruction: red/white-wine-**vinegar** rows (`organic red wine vinegar`, `organic white wine vinegar`).

**Rosé Wine (~62 of ~300 rows across two files dropped — second-worst ratio):** Four separate, large homonym collisions. (1) The 1962 film/song "**Days of Wine and Roses**" — cast, lyrics, movie, song variants, ~20 rows, several in the 500–5,400 range. (2) **Wine & Roses**, an actual Lodi, CA resort/spa — `wine and roses lodi` (6,600), `wine & roses spa` (1,000), plus the unrelated city of **Santa Rosa, CA** getting swept in (`total wine santa rosa`, `hyatt regency sonoma santa rosa`, `wine tasting in santa rosa california`) — combined well over 15,000 volume, zero wine-shopping intent. (3) **Justin Rose** (pro golfer, Masters/major wins, ~6 rows) and **Derrick Rose** (NBA MVP, ~8 rows) — first/last-name collisions. (4) **Rosa Parks** (civil rights icon, awards/Nobel queries, ~5 rows), the **Rose Bowl** (football, ~3 rows), and **Weigela** "Wine and Roses," a real flowering-shrub cultivar with its own sizeable gardening search volume (`weigela wine and roses` 1,900, `wine & roses weigela` 1,000). Note: the bare word `rosé`/`rose` (22,200 vol, KD **90–91**) was deliberately **not assigned** anywhere — SERP is dominated by ambiguous name/entity results, not wine-shopping intent, and the KD is prohibitive regardless.

**Not filtered, per instruction:** Miraval (Brad Pitt/Angelina Jolie + the Perrin family), Hampton Water (Jon Bon Jovi + son Jesse Bongiovi, with Gérard Bertrand), and Avaline (Cameron Diaz + Katherine Power) celebrity-ownership angles are all real and confirmed via WebSearch — used as hooks below. One additional real celebrity angle surfaced organically that was **not** on the pre-cleared list: Las Jaras Wines was co-founded by comedian/actor **Eric Wareheim**. Factually solid (WebSearch-confirmed), but flagged for your sign-off before use since it wasn't pre-approved.

---

## Category & Subcategory Hub Keyword Tables

These 5 hub pages already exist under `fine-wine` on the site.

### Sherry — `/shop/fine-wine/sherry/`
| Term | Vol | KD |
|---|---|---|
| what is sherry | 5,400 | 33 |
| what is sherry wine | 2,400 | 34 |
| what does sherry taste like | 720 | 6 |
| what is cream sherry | 720 | 16 |
| what is a sherry drink | 590 | 32 |
| is sherry sweet | 210 | 34 |
| how is sherry made | 210 | 26 |
| where to buy sherry | 210 | 14 |
| what is dry sherry | 880 | 46 (T3 — high KD, no lower-KD substitute exists for this exact phrasing) |

**FAQs:** "What does sherry taste like?" (720, KD6) · "Is sherry sweet?" (210, KD34) · "How is sherry made?" (210, KD26) · "What's the difference between port and sherry?" (70, KD9 — dual-purpose, also a blog candidate below)
**Note:** this is the thinnest export in the batch — no brand or style-name (fino/oloroso/amontillado/PX) volume at all. Category copy will lean on the "what is sherry" / taste / sweetness cluster; individual sherry product pages will lean on brand facts (below) rather than keyword volume.

### Port — `/shop/fine-wine/port/`
| Term | Vol | KD |
|---|---|---|
| port wine | 40,500 | 23 |
| tawny port | 4,400 | 20 |
| ruby port wine | 4,400 | 16 |
| tawny port wine | 2,400 | 17 |
| white port | 1,600 | 28 |
| vintage port | 1,000 | 13 |
| vintage port wine | 1,000 | 12 |
| types of port wine | 1,300 | 31 |
| port wine ruby vs tawny | 1,000 | 15 |
| best port wine | 1,600 | 17 |

**FAQs:** "What is tawny port?" (390, KD17) · "Is port wine sweet?" (390, KD16) · "How do you drink port wine?" (320, KD5) · "What is ruby port?" (210, KD16)
**Noise flag:** the bare head term `port` (60,500, KD53) is NOT usable — it's dominated by seaport/computer-port/the-city-of-Porto ambiguity, not assigned anywhere.

### Icewine & Dessert Wine — `/shop/fine-wine/icewine-dessert-wine/`
| Term | Vol | KD |
|---|---|---|
| dessert wine | 18,100 | 25 |
| sweet wine | 18,100 | 12 |
| sweet wines | 18,100 | 11 |
| ice wine | 14,800 | 32 |
| wine eiswein | 14,800 | 20 |
| sweet red wines | 6,600 | 16 |
| ice wine canada | 2,400 | 15 |
| vidal ice wine | 590 | 14 |
| eiswein | 720 | 25 |
| canadian ice wine | 880 | 9 |

**FAQs:** "What is dessert wine?" (590, KD14) · "What is eiswein?" (260, KD13) · "How is ice wine made?" (140, KD18–26) · "Is ice wine sweet?" (50, KD6 — low volume but a genuine, clean PAA hit)
**Note:** this subcategory bridges two real but distinct products (frozen-grape icewine vs. fortified/botrytized dessert wine) — both head terms are strong enough to co-anchor the hub page.

### Organic & Natural Wine — `/shop/fine-wine/organic-natural-wine/`
| Term | Vol | KD |
|---|---|---|
| organic wine | 8,100 | 18 |
| natural wine | 8,100 | 31 |
| organic wine brands | 3,600 | 13 |
| organic red wine | 2,900 | 5 |
| what is natural wine | 2,900 | 18 |
| biodynamic wine | 2,400 | 16 |
| organic wines | 1,900 | 29 |
| natural wines | 1,900 | 15 |
| organic vineyard | 1,600 | 14 |
| organic white wine | 1,000 | 9 |

**FAQs:** "What is natural wine?" (2,900, KD18) · "What's the difference between organic and natural wine?" (from `natural wine vs regular wine`, 170, KD7) · "Does organic wine have sulfites?" (140, KD9)

### Rosé Wine — `/shop/fine-wine/rose-wine/`
| Term | Vol | KD |
|---|---|---|
| rose wine | 33,100 | 24 |
| rosé wine | 6,600 | 23 |
| pink wine | 4,400 | 9 |
| best rose wine | 2,900 | 9 |
| dry rose wine | 2,900 | 7 |
| sweet rose wine | 1,900 | 7 |
| provence rose | 1,900 | 11 |
| what is rose wine | 1,600 | 21 |
| blush wine | 1,300 | 8 |
| rose wine brands | 1,300 | 6 |

**FAQs:** "Is rosé wine sweet?" (880, KD7) · "What is rosé wine made of?" (110, KD16) · "How is rosé made?" (320, KD18–21) · "Do you chill rosé wine?" (210, KD6)

---

## Per-Product Keyword Assignment

### SHERRY (6 products)

**1. Alvear Solera 1927 Pedro Ximénez Sherry**
Primary: `alvear pedro ximenez sherry` — confirmed real via WebSearch, not volume-backed. (Alvear, founded 1729, is the oldest Andalucían wine producer; this is a Solera-blended PX from the Montilla-Moriles DO, not Jerez — a real, useful distinction for the product page.)
Secondary (5): what is sherry (5,400, KD33) · is sherry sweet (210, KD34) · what does sherry taste like (720, KD6) · what is sherry made of (210, KD29) · how is sherry made (210, KD26)
FAQ: "Is sherry sweet?" (210, KD34) — PX is one of the sweetest styles in the world; strong, honest answer opportunity.

**13. Croft Original Pale Cream Sherry**
Primary: `croft original pale cream sherry` — confirmed real via WebSearch, not volume-backed. (Croft traces to 1588/1678 and is now owned by González Byass; Pale Cream blends fino dryness with cream-sherry body.)
Secondary (5): what is cream sherry (720, KD16) · what is a cream sherry (260, KD14) · what is cream sherry wine (320, KD9) · what is sherry (5,400, KD33) · where to buy sherry (210, KD14)
FAQ: "What is cream sherry?" (720, KD16) — real, clean informational demand, directly answers the product's own style.

**23. González Byass Néctar Pedro Ximénez Sherry**
Primary: `gonzalez byass nectar pedro ximenez` — confirmed real via WebSearch, not volume-backed. (González Byass, founded 1835 in Jerez, is the only Jerez house that grows its own PX grapes; Néctar averages ~10 years of age.)
Secondary (5): is sherry sweet (210, KD34) · what is sherry (5,400, KD33) · what is sherry made of (210, KD29) · what does sherry taste like (720, KD6) · what is a sherry (260, KD34)
FAQ: "Is sherry sweet?" (210, KD34) — shared with Alvear, same honest PX answer.

**28. Harveys Bristol Cream Sherry**
Primary: `harveys bristol cream sherry` — confirmed real via WebSearch, not volume-backed. **Flag:** this is one of the most globally famous sherry brands in existence (Bristol, England, est. 1796) and it's surprising it pulled zero rows in this export — the Sherry CSV appears to skew entirely toward generic/educational queries with no branded terms at all, unlike the richer Port and Rosé exports.
Secondary (5): what is cream sherry (720, KD16) · what is a cream sherry (260, KD14) · what is sherry (5,400, KD33) · how do you drink sherry (170, KD18) · where to buy sherry (210, KD14)
FAQ: "What is cream sherry?" (720, KD16).

**33. Lustau East India Solera Sherry**
Primary: `lustau east india solera sherry` — confirmed real via WebSearch, not volume-backed. (Historically named for the oxidative aging sherry casks picked up crossing to the East Indies; a blend of oloroso and PX aged further in Lustau's own solera.)
Secondary (5): what is sherry (5,400, KD33) · how is sherry made (210, KD26) · what is sherry made of (210, KD29) · how do you drink sherry (170, KD18) · where to buy sherry (210, KD14)
FAQ: none Lustau-specific; category-level "How is sherry made?" (210, KD26) is the best fit.

**34. Lustau San Emilio Pedro Ximénez Sherry**
Primary: `lustau san emilio pedro ximenez` — confirmed real via WebSearch, not volume-backed. (Pedro Ximénez San Emilio is a named wine in Lustau's own published Solera Reserva range — directly confirmed on their site.)
Secondary (5): is sherry sweet (210, KD34) · what is sherry made of (210, KD29) · what is sherry (5,400, KD33) · what does sherry taste like (720, KD6) · how is sherry made (210, KD26)
FAQ: "Is sherry sweet?" (210, KD34).

---

### PORT (10 products)

**19. Fonseca Bin 27 Finest Reserve Port**
Primary: `fonseca port` — confirmed real via WebSearch, not volume-backed in this export. (Fonseca, founded 1815, one of the great Douro port houses; Bin 27 is its flagship NV ruby-style blend.)
Secondary (5): ruby port wine (4,400, KD16) · port wine (40,500, KD23 — background authority only, too broad to be primary) · port dessert wine (1,000, KD18) · best port wine (1,600, KD17) · what is ruby port (210, KD16)
FAQ: "What is ruby port?" (210, KD16).

**24. Graham's 10 Year Old Tawny Port**
Primary: `graham's 10 year tawny port` — confirmed real via WebSearch, not volume-backed directly; leans on the strong tawny-port category pool.
Secondary (5): tawny port (4,400, KD20) · tawny port wine (2,400, KD17) · port tawny (1,000, KD14) · what is tawny port (390, KD17) · port wine ruby vs tawny (1,000, KD15)
FAQ: "What is tawny port?" (390, KD17).

**25. Graham's 20 Year Old Tawny Port**
Primary: `graham's 20 year tawny port` — confirmed real via WebSearch, not volume-backed.
Secondary (5): tawny port (4,400, KD20) · tawny port wine (2,400, KD17) · port tawny (1,000, KD14) · tawny port vs ruby port wine (590, KD13) · what is a tawny port (170, KD17)
FAQ: "What is tawny port?" (390, KD17) — same FAQ reused across the Graham's/Taylor Fladgate tawny tier, differentiated by product-specific age-statement copy.

**26. Graham's Late Bottled Vintage Port**
Primary: `graham's lbv port` — confirmed real via WebSearch, not volume-backed.
Secondary (5): vintage port (1,000, KD13) · vintage port wine (1,000, KD12) · types of port wine (1,300, KD31) · port wine (40,500, KD23 — background) · best port wine (1,600, KD17)
FAQ: none — no LBV-vs-Vintage-specific search volume in this export; don't force one.

**27. Graham's Six Grapes Reserve Port**
Primary: `graham's six grapes port` — confirmed real via WebSearch, not volume-backed. (Six Grapes is Graham's flagship everyday reserve ruby.)
Secondary (5): ruby port wine (4,400, KD16) · port wine ruby vs tawny (1,000, KD15) · best port wine (1,600, KD17) · what is ruby port (210, KD16) · good port wine (720, KD11)
FAQ: "What is ruby port?" (210, KD16).

**42. Taylor Fladgate 10 Year Old Tawny Port**
Primary: `taylor fladgate port wine` (1,900, KD16) — CSV-backed direct hit.
Secondary (5): taylor's port wine (1,300, KD19) · taylor port wine (12,100, KD19) · tawny port (4,400, KD20) · what is tawny port (390, KD17) · taylor port wine alcohol percentage (880, KD7)
FAQ: "What is tawny port?" (390, KD17).

**43. Taylor Fladgate 20 Year Old Tawny Port**
Primary: `taylor port wine` (12,100, KD19) — CSV-backed, shared brand anchor with the 10 & 40 Year.
Secondary (5): taylor's port wine porto (9,900, KD22) · taylor fladgate port wine (1,900, KD16) · tawny port wine (2,400, KD17) · port tawny (1,000, KD14) · port wine ruby vs tawny (1,000, KD15)
FAQ: "What is tawny port?" (390, KD17).

**44. Taylor Fladgate 40 Year Old Tawny Port**
Primary: `taylor fladgate port wine` (1,900, KD16) — CSV-backed, shared.
Secondary (5): taylor port wine (12,100, KD19) · tawny port (4,400, KD20) · tawny port wine (2,400, KD17) · port wine ruby vs tawny (1,000, KD15) · best port wine (1,600, KD17)
FAQ: "What is tawny port?" (390, KD17).

**45. Taylor Fladgate First Estate Reserve Ruby Port**
Primary: `taylor port red wine` (720, KD10) — CSV-backed direct hit, plus close variant `is taylor port red wine` (110, KD2).
Secondary (5): ruby port wine (4,400, KD16) · taylor port wine near me (1,000, KD17) · is taylor port sweet (90, KD3) · how much is taylor port wine (140, KD2) · taylor port wine alcohol content (720, KD7)
FAQ: "Is Taylor port sweet?" (90, KD3) — real, brand-specific PAA hit, a genuinely good find.

**46. Taylor Fladgate Late Bottled Vintage Port**
Primary: `taylor fladgate port wine` (1,900, KD16) — CSV-backed, shared.
Secondary (5): taylor's port wine (1,300, KD19) · vintage port (1,000, KD13) · vintage port wine (1,000, KD12) · taylor port wine near me (1,000, KD17) · types of port wine (1,300, KD31)
FAQ: none LBV-specific; category-level only.

**Data-depth flag:** this Port export is dominated by generic + Taylor-branded terms; **Graham's brand terms pulled zero rows** in the top 100 despite being an equally major house — likely just below this export's cutoff. All 4 Graham's SKUs above lean on the strong tawny/ruby category pool rather than brand-specific volume; a dedicated Graham's SEMrush export would sharpen this considerably.

---

### ICEWINE & DESSERT WINE (7 products)

**5. Banfi Rosa Regale Brachetto d'Acqui**
Primary: `rosa regale wine` (1,000, KD13) — CSV-backed direct hit (found in the rosé export, not the dessert-wine one — flagging the cross-file signal).
Secondary (5): italian dessert wine (1,300, KD9) · sparkling sweet wine (1,300, KD8) · dessert wine (18,100, KD25) · sweet dessert wine (2,900, KD18) · sweet pudding wine (2,900, KD16)
FAQ: "What is dessert wine?" (590, KD14) — category-level, applies well.

**15. Dr. Loosen Riesling Eiswein**
Primary: `riesling ice wine` (1,000, KD24) — CSV-backed direct hit.
Secondary (5): wine eiswein (14,800, KD20) · eiswein wine (2,400, KD26) · eiswein (720, KD25) · ice wine riesling (320, KD21) · german ice wine (480, KD24)
FAQ: "What is eiswein?" (260, KD13).

**29. Inniskillin Cabernet Franc Icewine**
Primary: `inniskillin cabernet franc icewine` (90, KD18) — CSV-backed direct hit from the Inniskillin brand export.
Secondary (5): cabernet franc ice wine (140, KD11) · inniskillin ice wine (2,400, KD23) · ice wine canada (2,400, KD15) · inniskillin cab franc ice wine (90, KD19) · inniskillin icewine cabernet franc (90, KD13)
FAQ: "What is icewine?" (260, KD17) — category-level.

**30. Inniskillin Vidal Icewine**
Primary: `inniskillin vidal icewine` (320, KD17) — CSV-backed direct hit.
Secondary (5): vidal ice wine (590, KD14) · inniskillin ice wine (2,400, KD23) · vidal blanc ice wine (390, KD19) · ice wine vidal (390, KD10) · inniskillin icewine vidal (170, KD19)
FAQ: "Is ice wine sweet?" (50, KD6).

**31. Jackson-Triggs Vidal Icewine**
Primary: `jackson triggs ice wine` (260, KD16) — CSV-backed direct hit.
Secondary (5): vidal ice wine (590, KD14) · ice wine canada (2,400, KD15) · canadian ice wine (880, KD9) · vidal blanc ice wine (390, KD19) · icewine canada (210, KD25)
FAQ: category-level, "What is icewine?" (260, KD17).

**37. Peller Estates Vidal Icewine**
Primary: `peller estates ice wine` (480, KD16) — CSV-backed direct hit.
Secondary (5): peller ice wine (480, KD19) · canadian ice wine peller estate (480, KD21) · peller estate ice wine (170, KD17) · vidal ice wine (590, KD14) · ice wine canada (2,400, KD15)
FAQ: category-level.

**39. Royal Tokaji 5 Puttonyos Aszú**
Primary: `hungarian dessert wine` (480, KD12) — CSV-backed, closest real category-level match (no Tokaji-brand-specific volume in this export).
Secondary (5): dessert wine (18,100, KD25) · sweet dessert wine (2,900, KD18) · sweet wines list (590, KD13) · what is dessert wine (590, KD14) · italian dessert wine (1,300, KD9 — adjacent style, useful supporting pool only)
FAQ: none Tokaji-specific in this export; note for the product copy (not SEO-driven): "5 Puttonyos" is a real, EU-regulated Tokaji sweetness classification (12–15% residual sugar minimum) — confirmed via WebSearch, useful factual detail regardless of keyword volume.

---

### ORGANIC & NATURAL WINE (22 products)

**2. Avaline Red Vegan Wine**
Primary: `avaline organic wine` (210, KD38) — CSV-backed direct hit.
Secondary (5): organic red wine (2,900, KD5) · organic wines (1,900, KD29) · clean wine brands (140, KD18) · natural red wine (320, KD7) · organic wine brands (3,600, KD13)
FAQ: none Avaline-specific; skip rather than force one.

**3. Avaline Rosé Vegan Wine**
Primary: `avaline organic wine` (210, KD38) — shared brand anchor, paired with `organic rose wine` (480, KD7) as a strong direct secondary.
Secondary (5): organic rose wine (480, KD7) · clean wine brands (140, KD18) · organic wines (1,900, KD29) · rose wine (33,100, KD24 — background) · is rose wine sweet (880, KD7)
FAQ: "Is rosé wine sweet?" (880, KD7).

**4. Avaline White Vegan Wine**
Primary: `avaline organic wine` (210, KD38) — shared.
Secondary (5): organic white wine (1,000, KD9) · organic white wines (320, KD13) · clean wine brands (140, KD18) · organic wines (1,900, KD29) · organic wine brands (3,600, KD13)
FAQ: none forced.

**6. Benziger Organic Cabernet Sauvignon**
Primary: `organic cabernet sauvignon` (320, KD13) — category-level (no Benziger-specific volume).
Secondary (5): organic cabernet (260, KD14) · organic cabernet wine (170, KD9) · cabernet organic (260, KD11) · biodynamic wine (2,400, KD16 — Benziger is genuinely Demeter-certified biodynamic) · organic red wine (2,900, KD5)
FAQ: none forced.

**7. Bonterra Organic Cabernet Sauvignon**
Primary: `bonterra organic wine` (480, KD18) — CSV-backed, shared brand anchor across all 4 stocked Bonterra SKUs.
Secondary (5): organic cabernet sauvignon (320, KD13) · organic cabernet (260, KD14) · organic red wine (2,900, KD5) · organic wine brands (3,600, KD13) · america's #1 organic winery (not volume-backed, real tagline confirmed via WebSearch)
FAQ: none forced.

**8. Bonterra Organic Chardonnay**
Primary: `bonterra organic wine` (480, KD18) — shared.
Secondary (5): organic white wine (1,000, KD9) · organic white wines (320, KD13) · organic wine brands (3,600, KD13) · organic wines (1,900, KD29) · wine organic (1,300, KD22)
FAQ: none forced.

**9. Bonterra Organic Merlot**
Primary: `bonterra organic wine` (480, KD18) — shared.
Secondary (5): organic red wine (2,900, KD5) · organic red wines (590, KD7) · organic wine brands (3,600, KD13) · organic wines (1,900, KD29) · organic vineyard (1,600, KD14)
FAQ: none forced.

**10. Bonterra Organic Sauvignon Blanc**
Primary: `bonterra organic wine` (480, KD18) — shared.
Secondary (5): organic white wine (1,000, KD9) · organic white wines (320, KD13) · organic wine brands (3,600, KD13) · organic wineries (1,300, KD9) · eco friendly wine (1,000, KD13)
FAQ: none forced.
**Data-depth flag:** `bonterra organic wine` (480 vol) is the only Bonterra-brand-specific term in this export — all 4 SKUs share it as anchor, differentiated by varietal-level secondaries. A dedicated Bonterra export would let each page carry its own brand+varietal long-tail.

**11. Broc Cellars Love Red Natural Wine**
Primary: `natural red wine` (320, KD7) — category-level (no Broc-specific volume).
Secondary (5): natural wine (8,100, KD31) · what is natural wine (2,900, KD18) · natural wine brands (170, KD9) · all natural wine (480, KD12) · natural winemaking (590, KD13)
FAQ: "What is natural wine?" (2,900, KD18) — Broc is a quintessential fit for this.

**12. Broc Cellars Love Rosé Natural Wine**
Primary: `organic rose wine` (480, KD7) — category-level, shared term also used for Avaline Rosé; differentiate via brand name in title/copy.
Secondary (5): natural wine (8,100, KD31) · rose wine (33,100, KD24 — background) · is rose wine sweet (880, KD7) · what is natural wine (2,900, KD18) · natural wines (1,900, KD15)
FAQ: "Is rosé wine sweet?" (880, KD7).

**14. Domaine Bousquet Organic Malbec**
Primary: `organic malbec wine` (170, KD7) — CSV-backed direct hit.
Secondary (5): organic red wine (2,900, KD5) · organic wine brands (3,600, KD13) · organic wines (1,900, KD29) · organic wineries (1,300, KD9) · organic grape wine (390, KD14)
FAQ: none Malbec-specific; skip.

**16. Emiliana Natura Cabernet Sauvignon Vegan Wine**
Primary: `organic cabernet sauvignon` (320, KD13) — category-level, shared with Benziger; differentiate via brand.
Secondary (5): organic cabernet (260, KD14) · natura rose wine (170, KD6 — real brand-adjacent signal, Emiliana's Natura line) · biodynamic wine (2,400, KD16 — Emiliana is the world's largest certified organic/biodynamic winery) · vegan wine (not volume-backed) · organic red wine (2,900, KD5)
FAQ: none forced.

**17. Emiliana Natura Chardonnay Vegan Wine**
Primary: `organic white wine` (1,000, KD9) — category-level.
Secondary (5): organic white wines (320, KD13) · natura rose wine (170, KD6 — brand-adjacent) · biodynamic wine (2,400, KD16) · organic wines (1,900, KD29) · eco friendly wine (1,000, KD13)
FAQ: none forced.

**18. Field Recordings Skins Orange Wine**
Primary: `natural orange wine` (480, KD16) — CSV-backed direct hit.
Secondary (5): organic orange wine (260, KD3) · what is natural wine (2,900, KD18) · natural wine (8,100, KD31) · natural wines (1,900, KD15) · natural winemaking (590, KD13)
FAQ: "What is natural wine?" (2,900, KD18).

**20. Foradori Teroldego Natural Wine**
Primary: `natural wine` (8,100, KD31) — category head term, no Foradori-specific volume.
Secondary (5): what is natural wine (2,900, KD18) · biodynamic wine (2,400, KD16 — Foradori is genuinely Demeter-certified since 2002) · natural wines (1,900, KD15) · natural winemaking (590, KD13) · biodynamic wines (480, KD12)
FAQ: "What is natural wine?" (2,900, KD18).

**21. Frey Organic Natural Red Blend**
Primary: `frey wine` (1,300, KD19) — CSV-backed direct hit (or `frey vineyards`, 1,300, KD22 — comparable strength).
Secondary (5): frey vineyards california (1,300, KD29) · frey vineyards organic (390, KD10) · frey organic wine (320, KD14) · organic red wine (2,900, KD5) · natural red wine (320, KD7)
FAQ: "What is natural wine?" (2,900, KD18) — Frey markets as both America's first organic winery and additive-free/natural.

**22. Frey Organic Pinot Noir**
Primary: `frey vineyards` (1,300, KD22) — CSV-backed, shared brand anchor.
Secondary (5): frey vineyards mendocino (1,000, KD14) · frey wines (480, KD18) · organic pinot noir (390, KD19) — CSV-backed direct hit · frey wine organic (140, KD15) · frey winery (320, KD20)
FAQ: none forced.

**32. Las Jaras Superbloom Natural Wine**
Primary: `natural wine` (8,100, KD31) — category head term.
Secondary (5): what is natural wine (2,900, KD18) · natural wines (1,900, KD15) · natural wine brands (170, KD9) · natural wine near me (1,900, KD16) · natural winemaking (590, KD13)
FAQ: "What is natural wine?" (2,900, KD18).
Note: Eric Wareheim co-founder angle — real, but flagged above for sign-off since it's not one of the three pre-cleared celebrity brands.

**35. Martha Stoumen Post Flirtation Red Wine**
Primary: `natural wine` (8,100, KD31) — category head term.
Secondary (5): what is natural wine (2,900, KD18) · natural winemaking (590, KD13) · natural wine brands (170, KD9) · organic red wine (2,900, KD5 — Stoumen sources from organic/dry-farmed sites) · natural wines (1,900, KD15)
FAQ: "What is natural wine?" (2,900, KD18).

**36. Meinklang Mulatschak Natural Wine**
Primary: `natural wine` (8,100, KD31) — category head term.
Secondary (5): biodynamic wine (2,400, KD16 — Meinklang is Demeter-certified) · what is natural wine (2,900, KD18) · biodynamic wines (480, KD12) · organic wine (8,100, KD18) · natural winemaking (590, KD13)
FAQ: "What is natural wine?" (2,900, KD18).

**38. Pizzolato Organic Pinot Grigio**
Primary: `organic white wine` (1,000, KD9) — category-level.
Secondary (5): organic white wines (320, KD13) · italian organic wine (170, KD1) — CSV-backed, good fit since Pizzolato is a Veneto producer · organic wine brands (3,600, KD13) · organic wines (1,900, KD29) · organic winery (320, KD8)
FAQ: none forced.

**40. Stellar Organics Running Duck Red Wine**
Primary: `organic red wine` (2,900, KD5) — category-level.
Secondary (5): organic red wines (590, KD7) · organic wines (1,900, KD29) · organic winery (320, KD8) · organic wine brands (3,600, KD13) · sustainable red wine (210, KD13)
FAQ: none forced. (Product copy note: Stellar is the first Fair Trade-certified organic winery in the world, and "Running Duck" refers to their real Indian Runner duck pest-control program — both confirmed via WebSearch, not keyword-driven but good factual color.)

**41. Subject to Change Lune Juice Natural Wine**
Primary: `natural wine` (8,100, KD31) — category head term.
Secondary (5): what is natural wine (2,900, KD18) · natural wines (1,900, KD15) · organic wine (8,100, KD18 — sourced from organic vineyards) · natural winemaking (590, KD13) · natural wine brands (170, KD9)
FAQ: "What is natural wine?" (2,900, KD18).

**47. The Organic Wine Co. Our Daily Red Blend**
Primary: `organic red wine` (2,900, KD5) — category-level.
Secondary (5): organic wine brands (3,600, KD13) · organic wines (1,900, KD29) · usda organic wine (320, KD25 — Our Daily markets as the #1 USDA-certified organic wine in the US) · buy organic wine online (140, KD28) · does organic wine have sulfites (140, KD9)
FAQ: "Does organic wine have sulfites?" (140, KD9) — Our Daily specifically markets "no detectable sulfites," strong direct fit.
**Naming flag:** WebSearch turned up this brand trading today as **"Our Daily"** (30+ years in organic wine), with "The Organic Wine Company" as an older/formal name for the same producer — not a separate company I could confirm. Worth double-checking which name is actually printed on the bottle you stock before finalizing the product title.

**48. The Vegan Vine Red Blend Vegan Wine**
Primary: `organic red wine` (2,900, KD5) — category-level, no Vegan Vine-specific volume.
Secondary (5): organic wine brands (3,600, KD13) · clean wine brands (140, KD18) · organic red wines (590, KD7) · organic wines (1,900, KD29) · vegan wine (not volume-backed)
FAQ: none forced. (Produced by Clos LaChance Winery, Central Coast CA — real, confirmed via WebSearch.)

---

### ROSÉ WINE (15 products)

**49. AIX Côtes de Provence Rosé**
Primary: `provence rose wine` (1,900, KD9) — category-level, no AIX-specific volume in this export.
Secondary (5): provence rose (1,900, KD11) · côtes de provence rosé wine (590, KD10) · best rose wine (2,900, KD9) · french rose wine (2,400, KD9) · dry rose wine (2,900, KD7)
FAQ: "Is rosé wine sweet?" (880, KD7).

**50. Barefoot Pink Moscato**
Primary: `barefoot pink moscato wine` (1,300, KD8) — CSV-backed direct hit.
Secondary (5): barefoot moscato (9,900, KD16) · barefoot wine pink moscato (720, KD10) · pink barefoot wine (880, KD10) · barefoot moscato wine (2,900, KD17) · pink moscato barefoot wine alcohol content (480, KD12)
FAQ: "Is barefoot moscato sweet?" (110, KD5) — CSV-backed direct hit.

**51. Bartenura Rosé**
Primary: `bartenura rose` (720, KD9) — CSV-backed direct hit.
Secondary (5): bartenura rose wine (210, KD2) · bartenura wine (2,900, KD5) · bartenura (5,400, KD9) · bartenura moscato rose (320, KD5) · sparkling moscato bartenura rose (210, KD4)
FAQ: none Bartenura-Rosé-specific PAA; skip.

**52. Chateau d'Esclans Rock Angel Rosé**
Primary: `chateau d'esclans` (390, KD24) — CSV-backed (château-level, since "Rock Angel" itself pulled zero individual rows in this export).
Secondary (5): chateau d esclans (480, KD23) · château d'esclans (170, KD20) · whispering angel (12,100, KD17 — brand-family halo) · ch d'esclans (260, KD22) · what is rose wine (1,600, KD21)
FAQ: none Rock-Angel-specific; category-level only.
**Flag:** "Rock Angel" itself is a real, well-known d'Esclans wine (confirmed via WebSearch as part of the branded range alongside Whispering Angel, The Palm, Les Clans, and Garrus) but shows no dedicated search volume in this export — worth a dedicated brand pull if you want SKU-level data.

**53. Domaines Ott Château de Selle Rosé**
Primary: `provence rose wine` (1,900, KD9) — category-level, shared with AIX/Minuty; differentiate via brand.
Secondary (5): provence rose (1,900, KD11) · french rose wine (2,400, KD9) · best rose wine (2,900, KD9) · rose wine brands (1,300, KD6) · dry rose wine (2,900, KD7)
FAQ: none forced.

**54. Hampton Water Rosé**
Primary: `hampton water rose wine` (390, KD16) — CSV-backed direct hit.
Secondary (5): rose wine (33,100, KD24 — background) · best rose wine (2,900, KD9) · dry rose wine (2,900, KD7) · sweet rose wine (1,900, KD7) · rose wine brands (1,300, KD6)
FAQ: none Hampton-specific in this export.
**Important factual flag:** Hampton Water is produced in the **Languedoc-Roussillon** (with winemaker Gérard Bertrand), **not Côtes de Provence** — worth being careful not to lump it in with the Provence rosés (AIX, Ott, Minuty, Miraval, Whispering Angel, The Palm) in category copy.

**55. La Vieille Ferme Rosé**
Primary: `la vieille ferme rose` (2,900, KD16) — CSV-backed, strong hit.
Secondary (5): la vieille ferme rosé (720, KD12) · la vieille ferme wine (880, KD11) · la vieille ferme (3,600, KD23) · la vielle ferme rose (260, KD13) · vieille ferme rose (110, KD11)
FAQ: "Is La Vieille Ferme rosé sweet?" (`is la vieille ferme rose sweet`, 30, KD7) — genuinely a real, brand-specific PAA row, though low volume; worth including since it's exact-match and honest (the answer is no, it's dry).

**56. M de Minuty Côtes de Provence Rosé**
Primary: `provence rose wine` (1,900, KD9) — category-level, no Minuty-specific volume in this export.
Secondary (5): provence rose (1,900, KD11) · côtes de provence rosé wine (590, KD10) · french rose wine (2,400, KD9) · best rose wine (2,900, KD9) · premium rose wine (590, KD17)
FAQ: none forced.

**57. Miraval Côtes de Provence Rosé**
Primary: `miraval rose wine` (720, KD13) — CSV-backed direct hit.
Secondary (5): provence rose wine (1,900, KD9) · provence rose (1,900, KD11) · best rose wine (2,900, KD9) · french rose wine (2,400, KD9) · rose wine brands (1,300, KD6)
FAQ: none Miraval-specific PAA found; skip.

**58. Risata Moscato Rosé**
Primary: `risata pink moscato` (590, KD6) — CSV-backed direct hit.
Secondary (5): risata moscato (2,900, KD15) · risata red moscato (590, KD15 — same brand family signal) · risata moscato pink (260, KD5) · risata (1,600, KD23) · moscato risata (210, KD9)
FAQ: none Risata-Rosé-specific PAA; skip.

**59. Stella Rosa Pink Rosé**
Primary: `stella rosa pink` (1,000, KD7) — CSV-backed direct hit.
Secondary (5): stella pink (390, KD8) · stella rosa stella pink (590, KD9) · pink stella rosa (390, KD7) · stella rosa stella pink wine (480, KD5) · rosa stella wine (480, KD12)
FAQ: "Is Stella Rosa a good wine?" (480, KD5) — CSV-backed real brand-trust PAA hit.

**60. Stella Rosa Strawberry Rosé**
Primary: `stella rosa strawberry rosé` — confirmed real via WebSearch as part of Stella Rosa's flavored moscato-rosé lineup (San Antonio Winery), **not volume-backed** in this export — the CSV's top-100 flavor rows cover Black, Peach, Blueberry, Berry, Rosso, and Red, but no "Strawberry" row surfaced.
Secondary (5): stella rosa wine (40,500, KD18 — brand head term) · stella rosa (27,100, KD36) · stella rosa flavors (880, KD7) · stella rosa berry wine (480, KD8 — closest flavor analog) · is stella rosa a good wine (480, KD5)
FAQ: "Is Stella Rosa a good wine?" (480, KD5) — shared with Pink Rosé, real reusable brand FAQ.

**61. Sutter Home White Zinfandel Rosé**
Primary: `sutter home wine white zinfandel` (390, KD4) — CSV-backed direct hit.
Secondary (5): white zin sutter home (480, KD7) · sutter home white zinfandel wine (320, KD4) · sutter home wine (5,400, KD17) · sutter home (4,400, KD23) · sutter home rose (210, KD7)
FAQ: none White-Zin-specific PAA found; skip.

**62. The Palm by Whispering Angel Rosé**
Primary: `the palm by whispering angel` (170, KD4) — CSV-backed direct hit.
Secondary (5): the palm rose by whispering angel (140, KD6) · the palm whispering angel (140, KD6) · the palm rosé by whispering angel (140, KD4) · the palm whispering angel rose (140, KD7) · whispering angel (12,100, KD17 — brand halo)
FAQ: none Palm-specific; skip.

**63. Whispering Angel Côtes de Provence Rosé**
Primary: `whispering angel rose` (14,800, KD20) — CSV-backed, massive hit.
Secondary (5): whispering angel (12,100, KD17) · whispering angel rose wine (2,400, KD10) · whispering angel wine (1,900, KD10) · whispering angel rosé (720, KD6) · chateau d'esclans rose whispering angel (480, KD18)
FAQ: "What is Whispering Angel?" (590, KD6) — CSV-backed real PAA hit. Second option: "Is Whispering Angel rosé sweet?" (110, KD4).

---

## Brand Hub Drafts

Every stocked brand with 2+ SKUs in this batch, in the site's `brandHubs.ts` format (brand, categoryLabel, hook, FAQs, secondary keywords).

### Graham's
**categoryLabel:** Port
**Hook:** Founded in 1820 when Scottish brothers William and John Graham accepted 27 barrels of port as debt repayment, Graham's became a serious Douro Valley house after acquiring Quinta dos Malvedos in 1890 — still the backbone of its vintage and tawny blends today. The Symington family, Portugal's most storied port dynasty, has owned Graham's since 1970.
**Secondary keywords:** tawny port (4,400, KD20) · tawny port wine (2,400, KD17) · port tawny (1,000, KD14) · port wine ruby vs tawny (1,000, KD15) · vintage port (1,000, KD13)
**FAQs:**
1. "What is tawny port?" (390, KD17) — Aged in wood casks, not bottle, tawny port takes on nutty, caramelized notes as it slowly oxidizes; Graham's range runs from 10 to 40 Year Old in the tiers we stock, with real expressions up to 80 Year Old.
2. "What's the difference between Graham's tawny and ruby styles?" — Ruby (like Six Grapes) is bottled young to preserve bright fruit; tawny is barrel-aged for years to develop nutty, dried-fruit complexity.
3. "What is LBV port?" — Late Bottled Vintage is made from a single strong year, aged longer in barrel than standard vintage port so it's ready to drink without decanting.

### Taylor Fladgate
**categoryLabel:** Port
**Hook:** Tracing to English merchant Job Bearsley's arrival in Portugal in 1692 and formalized as Taylor, Fladgate and Yeatman in 1838, Taylor Fladgate holds two real firsts in the category: Dick Yeatman created the world's first dry white port, Chip Dry, in 1934, and the house pioneered commercial Late Bottled Vintage port in 1970. Quinta de Vargellas, purchased in 1893, remains the heart of its vintage blends.
**Secondary keywords:** taylor port wine (12,100, KD19) · taylor's port wine porto (9,900, KD22) · taylor fladgate port wine (1,900, KD16) · taylor's port wine (1,300, KD19) · white port (1,600, KD28)
**FAQs:**
1. "What is tawny port?" (390, KD17) — see Graham's answer; Taylor Fladgate's tawny range in real terms extends to 10/20/30/40/50 Year Old, of which we stock the 10, 20, and 40.
2. "Is Taylor port sweet?" (90, KD3) — CSV-backed, brand-specific: yes, all styles carry noticeable natural sweetness from fortification, though ruby and LBV read fresher/fruitier than tawny.
3. "What's the difference between Ruby and Vintage port at Taylor Fladgate?" — First Estate Reserve Ruby is an easy-drinking NV blend; true Vintage Port is only declared in exceptional years from top vineyards like Quinta de Vargellas.

### Lustau
**categoryLabel:** Sherry
**Hook:** Bodegas Lustau traces to 1896 and the almacenista (private sherry warehouseman) tradition in Jerez de la Frontera — small producers who aged and sold sherry to larger houses before Emilio Lustau Ortego began bottling under his own name in 1945. Lustau today produces over 40 distinct sherries from its Solera Familiar range, more range breadth than almost any other house in Jerez.
**Secondary keywords:** what is sherry (5,400, KD33) · how is sherry made (210, KD26) · is sherry sweet (210, KD34) · what does sherry taste like (720, KD6) · what is sherry made of (210, KD29)
**FAQs:**
1. "What styles of sherry does Lustau make beyond what you stock?" — Lustau's published Solera Reserva range also includes Manzanilla Papirusa, Puerto Fino, Amontillado Los Arcos, Palo Cortado Península, and Oloroso Don Nuño — real, confirmed expressions not currently in our catalog (see Phase 8 below).
2. "Is sherry sweet?" (210, KD34) — depends entirely on style: fino and manzanilla are bone-dry, oloroso and amontillado range dry-to-off-dry, and Pedro Ximénez (like our East India Solera and San Emilio) is intensely sweet.
3. "How is sherry made?" (210, KD26) — fortified after fermentation, then aged under a biological layer of flor yeast (fino styles) or oxidatively without it (oloroso styles), often blended through a solera fractional-aging system.

### González Byass
**categoryLabel:** Sherry
**Hook:** Founded in 1835 by Manuel María González, González Byass is the Jerez house behind Tío Pepe — Spain's first registered trademark (1888) — and remains the only Jerez producer to grow its own Pedro Ximénez grapes, which go directly into wines like the Néctar we stock.
**Secondary keywords:** what is sherry (5,400, KD33) · is sherry sweet (210, KD34) · what is a sherry (260, KD34) · what does sherry taste like (720, KD6) · what is a sherry wine (140, KD35)
**FAQs:**
1. "Is sherry sweet?" (210, KD34) — Néctar PX is one of the sweetest, richest styles in the category, averaging roughly 10 years of age.
2. "What is Tío Pepe?" — González Byass's flagship bone-dry fino (not currently stocked); Néctar is its opposite end of the sweetness spectrum from the same house.
(Note: González Byass also owns Croft — see the Croft Original entry above — under the same corporate umbrella since 2001.)

### Inniskillin
**categoryLabel:** Icewine & Dessert Wine
**Hook:** Founded in 1975 by Donald Ziraldo and Karl Kaiser as the first winery license issued in Canada since Prohibition, Inniskillin made history in 1984 when Kaiser netted the vines against birds and produced the winery's first Vidal icewine. The 1991 Vinexpo Grand Prix d'Honneur for that wine put Canadian icewine on the world map for good.
**Secondary keywords:** inniskillin ice wine (2,400, KD23) · ice wine canada (2,400, KD15) · canadian ice wine (880, KD9) · riesling ice wine (1,000, KD24) · vidal ice wine (590, KD14)
**FAQs:**
1. "What grape is Inniskillin icewine made from?" — Vidal (our stocked SKU) and Cabernet Franc (also stocked) are both real, established Inniskillin varietals; Riesling is a third real style in their range.
2. "How is icewine made?" (`how is ice wine made`, 140, KD18–26) — grapes are left on the vine into winter and pressed while still frozen, typically at or below -8°C, concentrating sugar and acidity into a small, intense yield.
3. "Why is Canadian icewine considered world-class?" — Niagara-on-the-Lake's reliably cold winters make consistent, commercial-scale icewine production possible most years, unlike most of Germany and Austria, which only manage it occasionally.

### Frey
**categoryLabel:** Organic & Natural Wine
**Hook:** Frey Vineyards, in Redwood Valley, Mendocino County, became America's first organic winery in 1980 when Katrina and Jonathan Frey made their first barrel and joined California Certified Organic Farmers the same year. Frey added Demeter Biodynamic certification in 1996 and helped make Mendocino the first US jurisdiction to ban GMO cultivation.
**Secondary keywords:** frey wine (1,300, KD19) · frey vineyards (1,300, KD22) · frey vineyards california (1,300, KD29) · frey vineyards mendocino (1,000, KD14) · organic pinot noir (390, KD19)
**FAQs:**
1. "Is Frey wine really America's first organic winery?" — Yes, confirmed: Frey and a handful of other Mendocino family vineyards were the first in the US to make wine from certified-organic grapes, starting in 1980.
2. "Does Frey wine have added sulfites?" — Frey's wines are produced without added sulfites, in keeping with its natural/no-manipulation winemaking philosophy.

### Bonterra
**categoryLabel:** Organic & Natural Wine
**Hook:** Founded by Barney Fetzer in Mendocino County in 1987 with its first certified-organic vintage in 1993, Bonterra is now America's #1 organic winery and, as of 2021, the largest Regenerative Organic Certified winery in the world. Its McNab Ranch estate — a former sheep farm — has been certified biodynamic since 1996.
**Secondary keywords:** bonterra organic wine (480, KD18) · organic wine brands (3,600, KD13) · organic cabernet sauvignon (320, KD13) · organic red wine (2,900, KD5) · organic wineries (1,300, KD9)
**FAQs:**
1. "Is Bonterra really organic, or just 'made with organic grapes'?" — Bonterra holds full USDA organic certification across its estate vineyards and calls itself America's #1 organic winery.
2. "What does Regenerative Organic Certified mean?" — A step beyond standard organic certification covering soil health, animal welfare, and farmworker fairness; Bonterra is the largest ROC-certified winery in the world.
(See Phase 8 below — Bonterra's real range extends well past the 4 SKUs stocked here.)

### Emiliana
**categoryLabel:** Organic & Natural Wine
**Hook:** Founded in 1986 by brothers Rafael and José Guilisasti as Bodegas y Viñedos Santa Emiliana, the company converted its best Casablanca, Maipo, and Colchagua Valley vineyards to organic farming that same year. Its 2003 "Gê" release was the first biodynamic wine made anywhere in Chile or Latin America, and Emiliana is now the largest certified organic and biodynamic winery on the planet.
**Secondary keywords:** biodynamic wine (2,400, KD16) · organic cabernet sauvignon (320, KD13) · organic white wine (1,000, KD9) · natura rose wine (170, KD6) · organic wines (1,900, KD29)
**FAQs:**
1. "Is Emiliana Natura vegan?" — Yes, the Natura line is produced without animal-derived fining agents.
2. "What's the difference between organic and biodynamic at Emiliana?" — All Emiliana vineyards are certified organic; select lots (like the flagship Gê and Coyam labels, not currently stocked) are additionally certified biodynamic under Demeter.

### Avaline
**categoryLabel:** Organic & Natural Wine
**Hook:** Launched in 2020 by actress Cameron Diaz and Katherine Power (founder of Who What Wear, Versed, and Merit), Avaline was built around a simple complaint: wine is one of the only widely consumed products sold with no ingredient list. All three colors are made from 100% organic grapes with no added sugar and are produced with established vintners in California and Spain.
**Secondary keywords:** avaline organic wine (210, KD38) · organic red wine (2,900, KD5) · organic wines (1,900, KD29) · clean wine brands (140, KD18) · organic rose wine (480, KD7)
**FAQs:**
1. "Is Avaline wine actually organic?" — Yes, made from 100% organic grapes; the brand publishes full ingredient transparency on its site, unusual in the category.
2. "Who founded Avaline?" — Cameron Diaz and Katherine Power co-founded the brand in 2020; neither is a winemaker themselves, so Avaline is produced in partnership with established vineyards.

### Stella Rosa
**categoryLabel:** Rosé Wine
**Hook:** Produced by Los Angeles' San Antonio Winery — one of the oldest continuously operating wineries in California, having survived Prohibition under a sacramental-wine exemption — Stella Rosa built a large, flavor-driven semi-sweet moscato lineup that has become one of the best-known "gateway" wine brands in the US.
**Secondary keywords:** stella rosa wine (40,500, KD18) · stella rosa (27,100, KD36) · stella rosa moscato (3,600, KD10) · stella rosa flavors (880, KD7) · is stella rosa a good wine (480, KD5)
**FAQs:**
1. "Is Stella Rosa a good wine?" (480, KD5) — CSV-backed real PAA. It's a semi-sweet, low-ABV, easy-drinking style aimed at newer wine drinkers rather than a dry, high-tannin bottle — "good" depends entirely on what you're looking for, and it delivers well for its category.
2. "How much alcohol is in Stella Rosa?" — Typically lower-ABV than standard table wine, in the 5–7% range depending on the flavor.
**Note:** the single largest volume signal in the entire Stella Rosa export is `stella rosa black` (22,200, KD25) — a flavor not currently stocked; see Phase 8 below.

### Whispering Angel / Château d'Esclans
**categoryLabel:** Rosé Wine
**Hook:** Sacha Lichine bought the historic Château d'Esclans — gifted in 1201 by the Comte de Provence — in 2005 with the explicit goal of making the world's greatest rosé, an effort credited with sparking the modern "Rosé Renaissance." Production of Whispering Angel alone grew from roughly 100,000 bottles in its 2006 debut vintage to well over 5 million bottles a year today, under LVMH ownership since 2019.
**Secondary keywords:** whispering angel rose (14,800, KD20) · whispering angel (12,100, KD17) · whispering angel rose wine (2,400, KD10) · whispering angel wine (1,900, KD10) · chateau d'esclans (390, KD24)
**FAQs:**
1. "What is Whispering Angel?" (590, KD6) — CSV-backed. The entry-level, dry Côtes de Provence rosé from Château d'Esclans — the wine most responsible for popularizing pale, dry Provençal rosé in the US market.
2. "What's the difference between Whispering Angel and The Palm?" — The Palm by Whispering Angel is a lighter, fruitier, more casual sibling wine at a lower price point, made for easy warm-weather drinking rather than the more structured flagship.
3. "Is Whispering Angel rosé sweet?" (110, KD4) — No; it's a dry Provençal-style rosé, though its ripe fruit character reads as approachable to newer rosé drinkers.
(See Phase 8 below — the full d'Esclans branded range also includes Rock Angel, the Château d'Esclans cuvée, Les Clans, and Garrus.)

---

## Phase 8 — Gap Analysis

### Part A — Real missing expressions within brands already stocked

| Brand | Stocked | Real, confirmed missing expression(s) | Keyword signal |
|---|---|---|---|
| Graham's | 10YO Tawny, 20YO Tawny, LBV, Six Grapes | 30 & 40 Year Old Tawny, declared Vintage Port, Quinta dos Malvedos single quinta, Six Grapes Old Vines/Vila Velha | tawny port pool (4,400, KD20) — no brand-specific volume; WebSearch-confirmed real range |
| Taylor Fladgate | 10/20/40YO Tawny, First Estate Reserve Ruby, LBV | Chip Dry White Port (world's first dry white port, 1934), Quinta de Vargellas Single Quinta Vintage, 30YO Tawny | **white port (1,600, KD28) and white port wine (1,300, KD12) are CSV-backed** — a real, volume-backed case for adding Chip Dry specifically |
| Lustau | East India Solera, San Emilio PX | Manzanilla Papirusa, Puerto Fino, Amontillado Los Arcos, Palo Cortado Península, Oloroso Don Nuño | no brand volume in this thin Sherry export; WebSearch-confirmed real, directly from Lustau's own published range |
| Château d'Esclans / Whispering Angel | Whispering Angel, Rock Angel, The Palm | Château d'Esclans (flagship cuvée), Les Clans, Garrus | chateau d'esclans (390–480, KD23–24) CSV-backed brand-level signal |
| Miraval | Côtes de Provence Rosé (base) | Muse de Miraval (grande cuvée), Studio by Miraval (aperitif style) | no separate CSV volume; WebSearch-confirmed real, both named on Miraval's own site |
| Bonterra | Cabernet Sauvignon, Chardonnay, Merlot, Sauvignon Blanc | Rosé, Pinot Noir, Zinfandel, "The Butler" single-vineyard red blend | **organic rose wine (480, KD7) and organic pinot noir (390, KD19) are already CSV-backed real demand** — genuinely the strongest stocking case in this whole gap table, since both terms show real independent volume elsewhere in this report |
| Stella Rosa | Pink Rosé, Strawberry Rosé | Stella Rosa Black, Stella Rosa Red/Rosso | **stella rosa black is the single largest volume keyword in the entire brand export — 22,200 (KD25) for the head term plus 3,600 (KD9) for "stella rosa black wine"** — by far the strongest single stocking recommendation in this entire gap analysis |
| Frey | Natural Red Blend, Pinot Noir | Zinfandel, Cabernet Sauvignon, Chardonnay, Sangiovese | no SKU-specific CSV volume beyond what's already assigned above; WebSearch-confirmed real range breadth |

### Part B — Real unstocked brands with genuine search demand

| Brand | Category | Primary keyword | Support keywords | Tier |
|---|---|---|---|---|
| Sandeman | Sherry & Port | sandeman port wine (1,300, KD20) | Sandeman also makes sherry under the same house (WebSearch-confirmed), though the CSV signal found is port-side | T1 |
| Kopke | Port | kopke port wine (590, KD16) | oldest port house, founded 1638 (WebSearch-confirmed) | T1 |
| Dow's / Warre's / Cockburn's / Niepoort | Port | — | all real, major Douro houses (WebSearch-confirmed); no separate CSV volume rows surfaced in this export | not volume-backed |
| Barbadillo / Valdespino / Tío Pepe (standalone) / Romate | Sherry | — | real, well-known Jerez houses (WebSearch-confirmed); the Sherry export is too thin/generic to show brand volume for any sherry house, stocked or not | not volume-backed |
| Cooper's Hawk (Lux Ice Wine) | Icewine | cooper's hawk lux ice wine (140, KD14) | US winery/restaurant-chain icewine-style dessert wine | T1 |
| Warner (Ice Wine) | Icewine | warner ice wine (170, KD9) | real Warner Vineyards (New York) icewine | T1 |
| Badger Mountain | Organic Wine | badger mountain organic wine (140, KD3) | Washington State's first organic winery, no-sulfite-added specialist (WebSearch-confirmed) | T1 |
| Mirabeau | Rosé | mirabeau rose wine (1,300, KD9) | real, English-owned Provence estate | T1 |
| Dark Horse | Rosé | dark horse rose wine (590, KD13) | major grocery-channel rosé brand | T2 |
| Josh Cellars | Rosé | josh rose wine (590, KD8) | large-scale, widely distributed brand | T1 |
| Cupcake | Rosé | cupcake rose wine (720, KD11) | large-scale grocery-channel brand | T1 |
| Belaire | Rosé | belaire rose sparkling wine (480, KD9) | sparkling rosé, strong hip-hop/culture crossover recognition | T1 |
| Charles & Charles | Rosé | charles and charles wine rose (390, KD4) | real Washington State Syrah-based rosé | T1 |
| Laurent-Perrier | Rosé | laurent perrier rose wine (720, KD7) | Champagne rosé — adjacent category but shows real demand inside this export | T1 |

**Highest-priority stocking candidates by demand + signal strength:** **Stella Rosa Black** (Part A, 22,200+3,600 combined, by far the strongest single number anywhere in this gap analysis and inside an already-stocked brand) and **Bonterra Rosé/Pinot Noir** (Part A, both independently CSV-backed real terms) stand out above everything else. In Part B, Mirabeau (1,300) and Sandeman (1,300) lead a fairly even second tier.

---

## Blog Topic Candidates

| Topic | Anchor keyword(s) | Notes |
|---|---|---|
| What is the difference between port and sherry? | what is difference between port and sherry (70, KD9) · what is the difference between sherry and port wine (70, KD18) | Direct-match, near-zero competition; ties both subcategory hubs together |
| Is dessert wine the same as sweet wine? | dessert wine (18,100, KD25) · sweet wine (18,100, KD12) · sweet wines (18,100, KD11) | Huge combined volume relative to KD; strong pillar-page candidate |
| What is natural wine? Natural vs. organic vs. biodynamic, explained | what is natural wine (2,900, KD18) · natural wine vs regular wine (170, KD7) · biodynamic wine (2,400, KD16) | Directly supports every brand hub in the Organic & Natural subcategory |
| Is rosé wine sweet or dry? | is rose wine sweet (880, KD7) · is rose a sweet wine (390, KD9) · is rose sweet wine (480, KD12) | Very strong, low-KD cluster across multiple exact phrasings |
| Ruby vs. tawny vs. vintage port, explained | port wine ruby vs tawny (1,000, KD15) · tawny port vs ruby port wine (590, KD13) · types of port wine (1,300, KD31) | Supports Graham's and Taylor Fladgate hubs directly |
| What is icewine and how is it made? | what is ice wine (1,300, KD9–22) · how is ice wine made (140, KD18–26) · wine eiswein (14,800, KD20 — worth a dedicated dig) | Supports Inniskillin/Jackson-Triggs/Peller Estates hub content |
| Best rosé wines for summer | best rose wine (2,900, KD9) · best rose (1,000, KD25) | Seasonal, commercial-intent; good for a May/June refresh cadence |
| Sherry 101: fino, amontillado, oloroso, cream & PX explained | what is cream sherry (720, KD16) · what is dry sherry (880, KD46 — high KD, note) | Low direct volume for style names individually, but real supporting demand exists and this piece underpins every sherry product/brand page in the batch |
| What is Pedro Ximénez sherry? | not volume-backed in this export | Supports Alvear, Lustau San Emilio, and González Byass Néctar directly — worth writing even without a CSV row behind it |

---

## What to check

1. **Sherry export is unusually thin** — zero brand volume for any sherry house, stocked or not. Worth a dedicated SEMrush pull per sherry brand if you want this subcategory as deep as Port or Rosé ended up.
2. **Graham's pulled zero brand-specific rows** in the Port export despite being a major house — likely a cutoff artifact, not a real absence of demand; a dedicated Graham's export would help.
3. **Stella Rosa Black** (22,200+3,600 combined vol) is the single strongest stocking signal in the entire batch, inside a brand you already carry — flagging for a decision.
4. **Bonterra Rosé and Pinot Noir** both show real independent CSV volume (480/KD7 and 390/KD19) — an easy, low-risk range expansion if you want to go deeper on an already-stocked, already-successful brand.
5. **Taylor Fladgate Chip Dry** (white port) is backed by real category volume (`white port` 1,600/KD28, `white port wine` 1,300/KD12) and is a genuinely notable historical first (1934) — good content hook even before a stocking decision.
6. **"The Organic Wine Co." vs. "Our Daily"** naming — please confirm which name is actually on the label you stock (product #47); WebSearch only turned up the brand trading as "Our Daily" today.
7. **Las Jaras / Eric Wareheim** celebrity-founder angle is real but wasn't on your pre-cleared list (Miraval/Hampton Water/Avaline) — confirm before I write copy using it.
8. **Hampton Water is Languedoc, not Provence** — flagging so category-page copy doesn't lump it in with the Provence rosé cluster by mistake.
