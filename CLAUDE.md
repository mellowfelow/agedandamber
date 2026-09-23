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
  via Zoho SMTP only (`ZOHO_SMTP_USER` / `ZOHO_SMTP_PASS`, optional `ZOHO_SMTP_HOST` / `ZOHO_SMTP_PORT` /
  `ORDER_NOTIFY_EMAIL`). No third-party form service. Every submission is also written to the Vercel
  function log as the durable copy, so a send failure never loses the order.

## Policy pages
`/privacy`, `/terms`, `/shipping`, `/refund` render from `src/data/legal.ts` via
`src/views/LegalView.tsx`. The content is generated from `SHOP` config + the published FAQ so it
can't drift from what the store does — edit `legal.ts`, not the route files. Footer links all four.

## Live endpoints
`/api/products`, `/api/products/:slug`, `/api/categories`, `/api/search`, `/api/mcp` (MCP streamable),
`/api/acp/catalog`, `/api/ucp/services`, `/api/markdown` (content negotiation), `/api/order`,
`/api/inquiry`. `SearchAction` schema targets `/shop/?q=` — `ShopView` must keep honouring that param.

## Reply Portal (/admin — added 2026-09-23, expanded 2026-09-23)
Passcode-gated dashboard for orders + enquiries, backed by Upstash Redis. `/api/order` and
`/api/inquiry` save every submission to the store (`src/lib/orderStore.ts` / `enquiryStore.ts`) in
addition to the existing email notification — both still work with zero config (Redis calls are
no-ops when unconfigured). Checkout has two channels now: email (`Confirm via Email`, existing flow)
and WhatsApp (`Confirm via WhatsApp` — opens `wa.me` synchronously in the click handler, then
fire-and-forget saves the order). `/api/order` sends TWO emails: `sendNotification()` to the concierge
(unchanged) and a separate `orderConfirmationEmail()` receipt straight to the customer via `sendMail()`
— don't collapse these back into one; the customer confirmation was the whole point of the 23 Sep
follow-up fix (it was silently missing before).
Every `/api/admin/*` route calls `checkAdminPasscode()` (`src/lib/adminAuth.ts`) first —
`ADMIN_PASSCODE` env var, `X-Admin-Passcode` header, never a `NEXT_PUBLIC_*` var. `/admin/*` is
excluded from the site chrome (`src/components/SiteChrome.tsx`), excluded from the
markdown-negotiation middleware, `Cache-Control: no-store`, and disallowed in `robots.txt` for every
listed crawler group (not just `User-agent: *` — each bot group needs its own `Disallow: /admin/`
line, since robots.txt groups don't inherit from the wildcard).
`app/admin/layout.tsx` is the single `PasscodeGate` + nav (with sign-out) — pages read the verified
passcode via `useAdminContextPasscode()` (`src/components/admin/AdminPasscodeContext.tsx`), never wrap
themselves in another `PasscodeGate`. List pages (`/admin/orders`, `/admin/enquiries`) link to detail
pages (`/admin/orders/[id]`, `/admin/enquiries/[id]`), which link to the composers.
Payment terms are method-aware: `REPLY.paymentMethods` in `src/config/site.ts` is a registry (one
entry per `SHOP.paymentMethods`) with `opening`/`closing` text templates (`{amount}`/`{ref}` tokens) —
`paymentMethodParts()` / `instructionsParts()` in `src/lib/order.ts` resolve them. The admin picks a
method from a dropdown (defaulted to what the customer chose at checkout) and pastes only the one real
thing — wallet address, Cash App tag, bank details — never fabricate that. `paymentTermsLines(ref)` is
the single source for the standing terms (adult-signature line included) — the WA message, the
payment-details email, the confirmation email, and the composer preview all read from it.

**Payment confirmation screenshots:** the payment-details email has an "I've Paid — Upload
Confirmation" button → `/order/confirm-payment/?id=<orderNumber>` (public, no passcode; chrome-free
like `/admin`, excluded from `SiteChrome`/middleware/robots.txt the same way). `/api/order/
confirm-payment` validates the order exists, caps uploads at 4MB (Vercel serverless body limit), emails
the concierge with the screenshot as a real attachment via `sendMail()`'s new `attachments` param, and
sets `StoredOrder.status = 'payment-confirmed'` (third status alongside `pending`/`payment-sent` —
`OrderStatusBadge` in `src/components/admin/StatusBadge.tsx` is the one place that renders it, never
inline a status→label/color map elsewhere). The email also has a "Confirm via WhatsApp" button
(`waPaymentConfirmationLink()` in `src/lib/whatsapp.ts`) alongside the upload one.

**WhatsApp live chat:** `src/components/WhatsAppFloatingButton.tsx` — a plain `<a href="wa.me/...">`,
fixed bottom-left, deliberately opposite `TawkWidget` (bottom-right). Reads `CONTACT.whatsapp` (same
number as `CONTACT.phone` and `REPLY.channels.whatsapp` — keep all three in sync, they're the one
number). Hides itself while `GdprBanner` is visible (both are bottom-left; the banner's height isn't
fixed, so this avoids overlap by stepping aside rather than guessing a pixel offset) and reappears the
instant it's dismissed.

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
