# PROJECT.md — Aged & Amber

_Full project record. Rules-only summary lives in `/CLAUDE.md`. Last updated 2026-09-11._

## 1. Identity
- **Name:** Aged & Amber (canonical spelling — ampersand, never "Aged And Amber")
- **Domain:** `www.agedandamber.com` (apex 301s to `www`)
- **Tagline:** Crafted Whiskeys, Small-Batch Spirits & Rare Cask Finishes
- **What it is:** a Napa Valley cellar that **curates and resells** allocated bottles — it does not
  distill, brew, vinify, or produce anything. Sourced from trusted distilleries, wineries, and
  licensed distributors.
- **Founded:** 2018, Napa Valley, California
- **Stack:** Next.js 15 App Router, React 19, Tailwind v4, deployed on Vercel (Next.js preset)
- **Hosting decision:** Vercel + GitHub (`mellowfelow/agedandamber`), no client backend
- **Brand colours:** primary `#8B4513`, secondary/gold `#D4AF37`, dark canvas `#140D08`
- **IndexNow key:** `002a541a7ee2c7c51188fb5517599103`
- **GSC:** URL-prefix property `https://www.agedandamber.com/` (verified). Bing WMT + IndexNow active.

## 2. Contact & business (NAP)
- **Email:** concierge@agedandamber.com
- **Phone:** +1 (562) 732-4044 · **WhatsApp:** +15627324044
- **Address:** 72 Bellevue Ave, Napa, CA 94558
- **HQ signal:** Napa Valley & San Francisco, California, USA
- ⚠️ **Open item:** the +1 (562) number is a Long Beach area code, not Napa (707). Confirm the phone
  and street address are real and staffed before they feed `LocalBusiness`-style schema.

## 3. Catalogue (as of 2026-09-09)
- **1,347 products** · **268 blog posts** · **21 categories** · **18 subcategory hubs** ·
  **493 brand hubs** → ~2,155 URLs in `sitemap.xml`
- **Pricing:** $4.49 – $7,500, **median $27.99**, 955 products under $50. This is a broad
  everyday-to-premium catalogue, not a rare-allocation boutique — keep copy claims credible.
- **Per-category product counts:** fine-wine 158, tequila-mezcal 138, champagne-sparkling 133,
  beer 114, rtd-liqueurs 93, other-whiskey 85, craft-vodka 76, bourbon-whiskey 71, cognac-brandy 57,
  scotch-whisky 57, bar-essentials 52, aged-dark-rum 49, irish-whiskey 48, japanese-whisky 34,
  artisanal-gin 32, cider 30, na-wine 25, na-spirits 25, na-champagne-sparkling 24,
  na-rtd-cocktails 23, na-beer-cider 23
- Non-alcoholic range (`na-*` slugs) ships nationwide with no age gate or state restriction.

## 4. Order rules & policies
- Minimum order **$200** · free shipping over **$300** · flat shipping **$15** below that
- **10%** instant discount on BTC / USDT checkout
- Same-day dispatch (order before 2:00 PM local) to: Arizona, Idaho, Nevada, New Mexico, Oregon, Utah.
  Standard delivery 2–5 business days elsewhere.
- Alcohol: 21+ adult signature required at delivery; ships only to compliant DTC-alcohol states.
- Returns: alcohol is final sale once shipped (state law); damaged/wrong items replaced free.
  Non-alcoholic products + bar essentials: 30-day unopened return window.
- **Payment methods:** Apple Pay, Cash App, Chime, Bitcoin (10% off), USDT (10% off), Wire/Bank
  Transfer. **No card payments** — high-risk alcohol MCC; never re-add.

## 5. Forms & chat
- **Provider:** `zoho-smtp` only — `/api/inquiry` (contact + wholesale) and `/api/order` call
  `src/utils/notify.ts` → Zoho SMTP. No third-party form service (Web3Forms and the Resend fallback
  were both removed 2026-09-10). Env vars: `ZOHO_SMTP_USER` + `ZOHO_SMTP_PASS` (required),
  `ZOHO_SMTP_HOST` (default `smtp.zoho.com`), `ZOHO_SMTP_PORT` (default `465`), `ORDER_NOTIFY_EMAIL`
  (default `concierge@agedandamber.com`). `ZOHO_SMTP_PASS` is a Zoho **app-specific password**.
- Every submission is written to the Vercel function log first (the durable copy) — verified working
  10 Sep via live test (contact + order `AA-035131`), no SMTP errors.
- ⚠️ **Open item:** notifications send in an `after()` hook, so a client 200 does not prove delivery,
  and the function log is the only durable store (1 h retention on Hobby). A real store (D1 / KV /
  sheet webhook) is still recommended if order volume grows.
- **Chat hub:** WhatsApp, concierge email, direct phone (link channels) + Tawk.to widget
  (property `6a81e0adffd6811d48496109` / widget `1k05lb9hq`).

## 6. Compliance
- Age gate: 21+, CSS-first pre-hydration, content stays in DOM. GDPR banner present.
- Required framings: "Adult 21+ signature required at delivery", "Curated & sourced through licensed
  distributors and wholesale channels".
- Prohibited claims: guaranteed health benefits, cures/ailment claims.
- No banned-term list configured. Rule 5 (never fabricate brand facts) is the active guardrail.

## 7. Brand authority facts (truthful only — the whole list)
- Founded 2018 in Napa Valley as a DTC curator of allocated / rare-release bottles.
- 2020: grew the catalogue through licensed distributor and wholesale partnerships (Kentucky,
  Scotland, and beyond). **No distillery-direct relationships exist** (confirmed by the founder
  10 Sep 2026) — sourcing is through normal wholesale/distributor channels. See M2 (§11) — every
  "direct from the distillery" claim was removed sitewide 12 Sep 2026.
- 2022: expanded compliant DTC shipping to states permitting it.
- 2024: launched the "Rare Vault Reserve" program for private collectors.
- Differentiators: a hand-curated catalogue of allocated/hard-to-find bottles; every bottle checked
  for authenticity and stored climate-controlled; 21+ temperature-controlled express delivery; 10%
  crypto discount.
- **No awards, no named individuals, no partnerships, no press, no revenue figures have been
  supplied. Do not invent any.** `BRAND.sameAs` is empty (2026-09-10) — no social accounts exist yet;
  add the URLs back only once the accounts are real and controlled by the business.

## 8. AI visibility / agent-ready
- Full agent-ready layer shipped and hand-maintained: `robots.txt` (AI allow-list + `Content-Signal`),
  live-generated `llms.txt`, all 8 `.well-known/*`, `webmcp.js`, live `/api/mcp` + REST + ACP/UCP,
  markdown content negotiation.
- Early payoff: Semrush AI Visibility 14, ~50 pages cited (ChatGPT 40, Gemini 13) while Google
  organic traffic is still ~20 clicks/month (site is new — first GSC data 19 Aug 2026).

## 9. Keyword strategy
See `docs/keyword-map.md` and the per-category `docs/keyword-map-*.md` files. Blog clusters are
tracked there; use the next unused cluster for each new post.

## 10. Policy pages
`/privacy`, `/terms`, `/shipping`, `/refund` — added 2026-09-09, generated from `src/data/legal.ts`
(driven by `SHOP` config + FAQ). **Counsel should review** the alcohol direct-shipping, privacy, and
liability language, and confirm the legal entity name (currently just "Aged & Amber" — add an LLC/Inc
if one exists) and the effective date.

## 11. Audit & remediation (9 Sep 2026)
Full audit: `docs/audit-2026-09.md` (overall 61/100). Remediation shipped in 7 batches merged to
`main` on 9 Sep:

| Batch | Shipped |
|---|---|
| 1 | C1 blog dates un-future-dated · C2 `/shop/?q=` search wired · C5 form failure handling · H3 brand name normalised to "Aged & Amber" |
| 2 | C3 thin hubs (<3 products) → `noindex` + out of sitemap (2,155→1,802 URLs) · Product `brand` = real producer · `handlingTime` · image sitemap |
| 3 | H1 `fitTitle()` (titles ≤60) + `productMetaDescription()` (thin metas padded) · removed stale "Last updated" |
| 4 | H5 `/privacy` `/terms` `/shipping` `/refund` · M1 full-category footer · M6 sitewide GDPR notice · M7 About `Organization` schema + expanded copy · C5b checkout failure screen |
| 5 | H2 LCP image `priority` + preload · H7 Content-Security-Policy (next.config + vercel.json) |
| 6 | M3 category-aware product copy · M10 beer variant copy differentiated · M5 form `aria-label`s · L1 llms.txt `text/plain` · L3 agent-skills `sha256` · L4 auth.md table · L7 real `crosscheck.mjs` |
| 7 | `docs/disavow.txt` prepared (C4) |

**Off-page playbook: `scratchpad/offpage.html` / artifact `5da86bfc-57b3-48af-b3e5-3d9a07cefa18`**
(delivered 10 Sep). DIY founder execution. Scoped by founder answers: toxic backlinks parked;
address is a real non-storefront office → GBP as a service-area business (address hidden); no
distillery/distributor relationships → "direct from the distillery" must not be used in outreach and
should be softened on-site (M2, pending copy decision). Phases: decide → foundation (GBP, Bing/Apple,
socials → `BRAND.sameAs`, citations, Merchant Center, Wikidata) → content authority → niche/local.

**Off-page / manual follow-ups** (see `docs/audit-2026-09.md` → "Still needed"):
- Complete + upload `docs/disavow.txt` when the founder decides — **parked** ("don't worry about them
  for now"). GSC manual actions: none as of 9 Sep.
- Get a Napa **707** phone number to replace the +1 (562) Long Beach number before it feeds any more
  listings/schema.
- ~~M2 on-site copy pass~~ **done 12 Sep** (`cbf99d7`) — every "direct from the distillery" /
  "sourced directly from distilleries" / "Direct Import" claim removed sitewide (site.ts, HomeView
  hero carousel, AboutView narrative, 3 category/hub meta descriptions, ShopView fallback). Kept the
  "Direct allocations shipped to every state..." phrase everywhere — that's a direct-to-consumer
  shipping claim (accurate), not a distillery-sourcing one, so it needed no change.
- Verify Zoho SMTP env vars are set and forms/orders actually deliver end-to-end; consider a durable
  order/inquiry store (D1 / KV / sheet webhook) so nothing is lost if email fails.
- Counsel review of the 4 policy pages; confirm legal entity name + NAP (562 area code vs Napa).
- Connect a Google Merchant Center feed once indexing recovers.
- Article-specific blog images (258/268 posts still share ~21 category stock photos).
- Create the social accounts (Instagram / Facebook / LinkedIn / etc.), then add the URLs to `BRAND.sameAs` — removed from schema 2026-09-10 because none existed.
- Investigate Bing's 4,300 discovered URLs vs 2,155 actual (possible www/non-www duplication).

## 12. Sitemap XML-escaping fix (11 Sep 2026)
GSC flagged "Parsing error" on resubmit (0 pages discovered). Root cause: Next's built-in sitemap
serializer does zero XML-escaping. One product (`orchard-reserve-non-alcoholic-apple-cider`) has a
raw external Unsplash image; `sitemap.ts` blindly prepended the domain to every product image,
producing `agedandamber.comhttps://images.unsplash.com/...`, and that URL's `&`-bearing query string
was invalid XML regardless. Fixed in `app/sitemap.ts`: `absoluteImage()` only prefixes genuinely
relative paths, `xmlEscape()` escapes every url/image. Crosscheck check #33 guards it. Verified live
+ resubmitted clean on both GSC (Success, 1,803 pages) and Bing.

## 13. Subcategory hub pages — ongoing multi-batch project (started 11 Sep 2026)
Founder observation: most subcategories (Kentucky Bourbon, Champagne, Lager, etc.) are sidebar
filter-only with no dedicated URL, metadata, or sitemap entry — real search demand going uncaptured.
Confirmed: **103 distinct subcategory values across the catalog, only 18 had a hub page** before this
project (see `src/data/subcategoryHubs.ts` for the full current list — spans bourbon, scotch, irish,
tequila/mezcal (all 5), other-whiskey, artisanal-gin). Infrastructure already existed
(`SUBCATEGORY_HUBS` + `hubIsIndexable` + the "Shop by style" row) — the gap was pure content.

**Founder's decision:** build all ~85 remaining, batch by batch (not all at once). Also: sidebar
subcategory filter buttons should link to the dedicated hub page when one exists, not just filter
in place — shipped in Batch 1 (`subcategoryRoutes` prop on `ShopView`, real `<a href>` instead of
`onClick`, falls back to plain filtering when no hub exists yet).

**Source material for content** (founder's local keyword archive,
`C:\Users\rtutc\Desktop\Aged And Amber\`):
- `keyword docs\MASTER_SEO_IMPLEMENTATION.md` — the original spirits keyword research (whiskey,
  tequila, rum, gin, cognac, vodka) with real Semrush volume/KD per page. Section 14 of that doc
  explicitly flags Fine Wine, Champagne, NA-Wine, NA-Champagne, RTD/Liqueurs, Beer, Cider as
  "not yet covered" there.
- `keyword exports\*.csv` (179 files) — raw Semrush Keyword Magic exports for the wine/beer/cider/
  liqueur side, generated 25–27 Aug 2026 (filename = topic, e.g. `champagne_all-keywords_us_...csv`).
- The account's live Semrush MCP access is out of API units as of 11 Sep — this local archive is the
  keyword-data source until it's topped up.

**Batches shipped:**
| Batch | Category | Hubs added | Status |
|---|---|---|---|
| 1 | Beer | Lager (46), IPA (32), Ale & Wheat (22), Stout & Porter (14) — full category | ✅ `e908433` |
| 2 | Champagne & Sparkling | Champagne (80), Prosecco (24), Cava (7), Sparkling Wine (12), Sparkling Rosé (10) — full category | ✅ `a4cdb60` |
| 3 | RTD & Liqueurs | Craft Cocktails (53), Cream (7), Aperitifs (3), Amaro & Digestifs (6), Coffee (5), Fruit (7), Herbal (4), Orange (4), Cordial (4) — full category, all 9 subcats | ✅ `1c1bc73` |
| 4 | Craft Vodka + Cognac & Brandy | Plain (9)/Premium (16)/Flavored (40)/Craft (11) vodka + VS (3)/VSOP (18)/XO (14)/XXO (1)/Rare Brandy (21) cognac — both full categories | ✅ `68fa0c1` |
| 5 | Fine Wine | All 17: Red (6), White (6), Rosé (18), Cabernet Sauvignon (15), Pinot Noir (8), Chardonnay (7), Sauvignon Blanc (8), Malbec (5), Riesling (7), Zinfandel (7), Pinot Grigio (7), Moscato (7), Merlot (4), Organic & Natural Wine (26), Port (13), Sherry (6), Icewine & Dessert Wine (8) — full category, done in one pass | ✅ `4638b76` |
| 6 | Aged & Dark Rum + Bar Essentials | Dark (9)/Aged (23)/Spiced (11)/White (6) rum + Bitters (5)/Vermouth (6)/Mixers & Syrups (19)/Cocktail Mixes (8)/Garnishes (9)/Glassware & Barware (5) — both full categories | ✅ `784aa6f` |
| 7 | Remaining Whiskey/Gin/Bourbon gaps | Rye (32)/Canadian (13)/Tennessee (12)/Taiwanese (1) other-whiskey + Blended (15)/Single Malt (13)/Premium (6) Japanese + Highland (10)/Aged&Premium (12) Scotch + Blended (16)/Premium (6)/Irish Cream (5) Irish + Botanical (13)/Craft (8) Gin + Premium Bourbon (9) — completes 6 categories | ✅ `7892974` |
| 8 | All 5 Non-Alcoholic categories | NA Wine (Red 10/White 9/Rosé 6), NA Champagne (Sparkling Wine 11/Sparkling Rosé 9/Grape Juice 4), NA Spirits (Whiskey/Gin/Tequila Alt + Botanical Spirit), NA Beer & Cider (Beer 22/Cider 1), NA RTD (Cocktails 4/Spritz 8/Canned 11) — completes 5 categories | ✅ `37661bd` |

**PROJECT COMPLETE (practically): 102/103 subcategories now have a dedicated page** (18 pre-existing
+ 84 added across batches 1–8 — 99%). Every hub verified live before merging: 200 status, ItemList
product count matches the catalog exactly, included in the sitemap once ≥3 products (XXO Cognac,
Taiwanese Whisky, and Non-Alcoholic Cider correctly held back at 1 product each).

**Hard Cider — confirmed as a deliberate skip, not left over (12 Sep 2026).** Checked the actual data:
Cider has exactly one subcategory (Hard Cider) and it's 100% of the category's 30 products — a
`/shop/cider/hard-cider/` hub would render the identical 30-product ItemList as `/shop/cider/` itself,
under near-identical title/H1/meta, since there's no second subcategory to differentiate against. That
is genuine duplicate content, not a style choice — building it would create the exact ranking risk
the founder asked to avoid, so it was not built. Revisit only if the catalog ever adds a second real cider
subcategory (e.g. a flavored/specialty tier) that gives the split something to differentiate.

**Filter-to-page linking** (shipped batch 1, `ShopView`'s `subcategoryRoutes` prop) now covers all 102
hubs sitewide — every sidebar subcategory button with a matching page is a real `<a href>`, not a
client-side filter.

## 14. Post-project site-wide QA sweep (12 Sep 2026)
Full verification pass across the whole site after the 8-batch hub project, specifically to check
nothing shipped this week could hurt ranking:
- **Duplicate-content audit** (real TS-transpiled parse, not regex): 0 duplicate titleTag/H1/
  metaDescription/definitionHook across all 102 subcategory hubs; 0 duplicates within the 493 brand
  hubs; 0 title clashes between subcategory and brand hubs in the same category.
- **Route collision audit:** 0 cases of a hub slug colliding with another hub's route, and 0 cases of
  a hub slug shadowing an actual product slug in the same category (would have made a product
  permanently unreachable at its own URL).
- **Full live crawl of all 102 subcategory hubs:** 200 status, valid `<title>`, correct canonical on
  every one.
- **JSON-LD validation** (real `JSON.parse`, not visual): 25-page sample across every batch, all
  `ItemList` + `FAQPage` + `BreadcrumbList` blocks parse cleanly.
- **Full crawl of all 21 category pages + core site pages** (home, shop, about, faq, contact,
  wholesale, 4 legal pages, blog, sitemap.xml, robots.txt, llms.txt): all 200.
- **21-page spread sample of the 493 brand hubs:** all 200.
- **Browser console check** on a live hub page: no hydration warnings; the only console error is a
  pre-existing, unrelated Tawk.to widget asset blocked by CSP (cosmetic, not from this project).
- Sitemap re-verified: 1,884 URLs, 0 unescaped XML characters, `<url>`/`</url>` balanced.
- **Resubmitted to both GSC and Bing WMT** (12 Sep) since ~81 net new URLs were added since the last
  submission on 11 Sep — GSC accepted, Bing shows "Processing," 0 errors on either.
