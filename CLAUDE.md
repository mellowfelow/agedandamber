# Aged & Amber — Project Instructions

Next.js (App Router) ecommerce store for a Napa Valley cellar that **curates and resells** allocated
spirits, fine wine, Champagne, beer, cider, and non-alcoholic alternatives — it does not distill or
produce anything. Deploys on Vercel (Next.js framework preset; `npm run dev` / `npm run build`).
~1,350 products across 21 categories, plus ~510 subcategory/brand hub pages and a ~270-post blog.

## Brand entity — spell it identically everywhere
The canonical name is **"Aged & Amber"** (ampersand). `SITE.name` in `src/config/site.ts` is the single
source; never reintroduce "Aged And Amber". Page titles that already contain the name use
`title: { absolute: '…' }` so the `%s | Aged & Amber` template isn't doubled.

## Non-negotiable rules
- **Truthful signals only.** Never invent founders, awards, partnerships, stats, reviews, or press.
  If a fact wasn't given by the client, it doesn't go on the site or in schema.
- One `<h1>` per page.
- 21+ adult-signature age gate on the site and at checkout. Alcohol ships only to states with
  compliant DTC laws; non-alcoholic products ship nationwide with no age gate.
- Payment methods: Apple Pay, Cash App, Chime, Crypto (BTC / USDT), Bank Wire. **No card payments**
  (high-risk alcohol MCC) — never re-add a card option. 10% discount auto-applied on crypto orders.
- **Blog post dates must never be in the future.** `isoDate` (and the human `date`) feed `Article`
  schema and `sitemap.xml` `<lastmod>`; a future date inverts the freshness signal.
- **No thin page gets indexed.** Brand/subcategory hub pages with fewer than 3 matching products
  carry `robots: noindex` and are excluded from `sitemap.xml` (they stay crawlable and internally
  linked so their products remain discoverable).
- **Forms must not fake success.** `/api/inquiry` and `/api/order` submissions only show a success
  state on an HTTP 200; on failure they show an inline error with the concierge email + phone.

## Architecture
- `src/config/site.ts` — single source of truth: domain, contact/NAP, shop policies, payment methods,
  chat channels, brand facts, compliance rules.
- `src/data/` — `products.ts`, `blog.ts`, `categories.ts`, `subcategoryHubs.ts`, `brandHubs.ts`,
  `faq.ts`. Adding one entry generates the route, metadata, JSON-LD, sitemap entry, and nav links.
  Never hand-write a page that a data entry should generate.
- `app/` — file-based routes (Server Components) + API route handlers under `app/api/`.
  `src/components` / `src/views` — the mostly-client presentational layer.
- Global cart/modal/search state lives in `app/providers.tsx` (`useAppState()`); never prop-drill it.
- Keep the big data modules (`products.ts`, `blog.ts`, `brandHubs.ts`) out of client bundles — pass
  server-sliced props into `'use client'` views, never import the arrays there.
- Forms send server-side: `/api/inquiry` (contact + wholesale) and `/api/order` → `src/utils/notify.ts`
  via Zoho SMTP (`ZOHO_SMTP_USER` / `ZOHO_SMTP_PASS`), Resend as fallback.

## Policy pages
`/privacy`, `/terms`, `/shipping`, `/refund` render from `src/data/legal.ts` via
`src/views/LegalView.tsx`. The content is generated from `SHOP` config + the published FAQ so it
can't drift from what the store does — edit `legal.ts`, not the route files. Footer links all four.

## Live endpoints
`/api/products`, `/api/products/:slug`, `/api/categories`, `/api/search`, `/api/mcp` (MCP streamable),
`/api/acp/catalog`, `/api/ucp/services`, `/api/markdown` (content negotiation), `/api/order`,
`/api/inquiry`. `SearchAction` schema targets `/shop/?q=` — `ShopView` must keep honouring that param.

## Agent-ready layer (hand-maintained — no generator script)
`public/robots.txt`, `public/.well-known/*`, `public/auth.md`, `public/js/webmcp.js`, and
`app/llms.txt/route.ts` (generated from live data). Keep brand name + one-line description consistent
across all of them. `sitemap.xml` and `robots` come from `app/sitemap.ts` / `public/robots.txt`.

## Rules
- `npm run build` and `npx tsc --noEmit` must pass before every push.
- Meta descriptions ~140–158 chars; titles ≤ 60 chars including the `| Aged & Amber` tail.
- Product images: WebP, white 4:3 frame, in `public/images/products/<category>/`.
- Emails entity-encoded in JSON-LD; never in plaintext there.
- Never commit `node_modules/`, `.next/`, `.claude/`.

## Verified brand facts (only these are true)
Founded 2018, Napa Valley CA. Curator/reseller — not a distillery. Ships DTC to compliant US states.
Min order $200, free shipping $300+, flat $15 shipping, 10% crypto discount, 21+ adult signature.
No awards, no named individuals, no partnerships have been provided — do not invent any.
