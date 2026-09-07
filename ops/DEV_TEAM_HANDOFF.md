# DEV TEAM HANDOFF

## Purpose

Prima16 sells time saved on paperwork. Core paid product is browser PDF generators on docs.prima16.com. Household is a downloadable workbook. Extras is a free sibling.

## Architecture

- prima16-docs-toolkit: TanStack Start + Vite + React. Routes under `src/routes`. Generators under `src/components/documents` + `src/documents`.
- Payments: `src/lib/whop.ts` builds `https://whop.com/checkout/{plan}?redirect=.../plateno`. Plans mapped from `src/lib/payments/config.ts`.
- Entitlement: `src/lib/payments/entitlement.ts` (localStorage). `/plateno` grants the pending purchase.
- Hub: static HTML + `api/*` cookie gate.
- Extras: separate TanStack app, keep free.

## Add a document

1. Registry entry
2. Form + PDF renderer
3. Route / SEO landing
4. Price mapping only if it belongs in a pack
5. Do not claim legal compliance without a cited source in `ops/`

## Deploy

Vercel team Prima16, Hobby. Founder often has to Link Git in the dashboard. Do not create a second project with the same name.

## Security

No owner API keys in the client. Admin is a shared password in env — good enough for one operator, not for a staff team.
