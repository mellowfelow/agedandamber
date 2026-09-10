# PROJECT.md — Aged & Amber

_Full project record. Rules-only summary lives in `/CLAUDE.md`. Last updated 2026-09-10._

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
- **Provider:** `zoho-smtp` — `/api/inquiry` (contact + wholesale) and `/api/order` call
  `src/utils/notify.ts` → Zoho SMTP (`ZOHO_SMTP_USER` / `ZOHO_SMTP_PASS`), Resend fallback
  (`orders@agedandamber.com`).
- ⚠️ **Open item:** notifications send in an `after()` hook, so a client 200 does not prove the email
  was delivered, and there is no durable server-side order/inquiry store. If SMTP fails the record is
  lost. A durable log (D1 / KV / a spreadsheet webhook) is recommended.
- **Chat hub:** WhatsApp, concierge email, direct phone (link channels) + Tawk.to widget
  (property `6a81e0adffd6811d48496109` / widget `1k05lb9hq`).

## 6. Compliance
- Age gate: 21+, CSS-first pre-hydration, content stays in DOM. GDPR banner present.
- Required framings: "Adult 21+ signature required at delivery", "Curated & sourced from licensed
  distilleries and distributors".
- Prohibited claims: guaranteed health benefits, cures/ailment claims.
- No banned-term list configured. Rule 5 (never fabricate brand facts) is the active guardrail.

## 7. Brand authority facts (truthful only — the whole list)
- Founded 2018 in Napa Valley as a DTC curator of allocated / rare-release bottles.
- 2020: built direct sourcing relationships with distilleries (Kentucky, Scotland, and beyond).
- 2022: expanded compliant DTC shipping to states permitting it.
- 2024: launched the "Rare Vault Reserve" program for private collectors.
- Differentiators: direct sourcing relationships; every bottle checked for authenticity and stored
  climate-controlled; 21+ temperature-controlled express delivery; 10% crypto discount.
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
- M2 on-site copy pass: soften "direct from the distillery / direct allocations" (no such
  relationships exist) — waiting on the founder to decide how far.
- Verify Zoho SMTP env vars are set and forms/orders actually deliver end-to-end; consider a durable
  order/inquiry store (D1 / KV / sheet webhook) so nothing is lost if email fails.
- Counsel review of the 4 policy pages; confirm legal entity name + NAP (562 area code vs Napa).
- Connect a Google Merchant Center feed once indexing recovers.
- Article-specific blog images (258/268 posts still share ~21 category stock photos).
- Create the social accounts (Instagram / Facebook / LinkedIn / etc.), then add the URLs to `BRAND.sameAs` — removed from schema 2026-09-10 because none existed.
- Investigate Bing's 4,300 discovered URLs vs 2,155 actual (possible www/non-www duplication).
