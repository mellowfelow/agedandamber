# Aged And Amber — Project Instructions

Aged And Amber is a Next.js (App Router) ecommerce application for boutique craft whiskey and rare cask spirits based in Napa Valley, CA. Deploys on Vercel with the Next.js framework preset (`npm run dev` / `npm run build`).

## Architecture
`app/` holds file-based routes (Server Components) and API route handlers under `app/api/`. `src/components` and `src/views` hold the (mostly client) presentational components. Global cart/modal/search state lives in `app/providers.tsx` (`AppStateProvider`, consumed via `useAppState()`) — never prop-drill it through pages.
`src/config/site.ts` is the single source of truth for domain, contact, shop policies, and compliance rules.
`src/data/products.ts` contains all craft bourbon, single malt scotch, and rare tequila products.

## Non-negotiable Rules
- One `<h1>` per main view/page.
- 21+ adult signature verification gate on checkout and age guard.
- Form submission uses Web3Forms CORS integration.
- Standard payment methods: Credit Card, Apple Pay, Cash App, Chime, Crypto (BTC, USDT), Bank Wire.
- 10% discount auto-applied on crypto orders.

## Live Endpoints
- `/api/products`
- `/api/products/:slug`
- `/api/categories`
- `/api/search`
- `/api/mcp` (Model Context Protocol streamable endpoint)
- `/api/acp/catalog`
- `/api/ucp/services`
