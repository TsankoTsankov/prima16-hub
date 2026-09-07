# PROJECT STATE

Updated: 7 September 2026. Production > git > old chats.

## Company

Tsanko Valentinov Tsankov, trading as Prima16 (Bulgaria). tsanko@prima16.com / support@prima16.com.
Positioning: paperwork toolbox for small firms. Not Jobber. Not a platform.

## Live money

| Product | URL | Till | Price |
|---|---|---|---|
| Документи PDF | https://docs.prima16.com | Whop `biz_7dpwuua5eEX7UJ` | 1.99 / 4.99 / 6.99 / 19.99 € |
| Household Cash Book | https://products.prima16.com/l/hausehold_cashBook | Gumroad `otbhmz` | 24 € |

Whop cards: active. Whop standard payout: inactive (KYC). Entitlement: browser localStorage. No webhook yet.

## Live free

| Product | URL | Note |
|---|---|---|
| Extras (change order + T&M) | https://extras.prima16.com | Traffic test. Stays free. |
| Per-diem calculator | https://docs.prima16.com/kalkulatori/dnevni-pari-komandirovka | Existing BG tool |

## Code

| Repo | Role | Tip known |
|---|---|---|
| TsankoTsankov/prima16-docs-toolkit | Generators + EN templates + payments UI | f97d0ba + later legal/plateno fixes |
| TsankoTsankov/prima16-hub | Marketing + admin | this repo |
| TsankoTsankov/prima16-extras | Free extras app | public |

Do not merge the three repos. Hobby Vercel is enough. DNS is Squarespace, not Cloudflare.

## Not live stores

BoardNight kits exist as files. RenoBudget / GEO have no repos. Chat2 72-hour micro-business is abandoned. Job Search HQ is abandoned. Paddle is retired for new checkouts.

## Architecture that must not be rewritten

- Docs: TanStack Start + Vite. PDFs in the browser.
- Hub: static HTML + a few Vercel functions for admin cookie gate.
- Unlocks: localStorage keys `prima16.doc-unlocks.v1`, `prima16.packs.v1`, legacy `prima16.watermark-removal`.
- Checkout: hosted Whop URL from `src/lib/whop.ts`. Return `/plateno`.
