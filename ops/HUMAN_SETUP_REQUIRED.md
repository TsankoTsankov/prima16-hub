# HUMAN SETUP REQUIRED

Do not send passwords into chat.

## 1. Whop payout

- Service: Whop
- Purpose: get 1.99 € into the bank
- Account: Prima16 `biz_7dpwuua5eEX7UJ`
- You: complete payout / KYC in the dashboard
- After: tell this chat “payout active” or paste the error Whop shows (no secrets)

## 2. Redeploy docs

- Service: Vercel project `prima16-docs`
- Purpose: ship `/plateno` + Whop legal copy
- You: Dashboard → prima16-docs → Redeploy latest `main`
- After: open https://docs.prima16.com/en/terms and confirm it says Whop, not Paddle

## 3. Admin password

- Service: Vercel project `prima16-hub`
- Env: `ADMIN_PASSWORD` (required), optional `ADMIN_SECRET`
- You: set env, redeploy, open https://www.prima16.com/admin/
- Optional: attach domain `admin.prima16.com` on the **hub** project

## 4. Rotate Whop API key

- Why: owner key appeared in an old chat file
- You: Whop → revoke / create new key
- Where the new key may live: Vercel hub **server** env `WHOP_API_KEY` only, if we wire a payment list. Never in frontend, never in git.

## 5. Search Console snapshot

- Purpose: pick the one BG query to reinforce
- You: export last 28 days for docs.prima16.com (queries + pages) and drop the file here or paste top 10

## 6. Whop return URL on all four products

- Required value: `https://docs.prima16.com/plateno`
- You: confirm in each Whop product settings

## Not required this week

Stripe, new domains, Etsy 16 €, Notion, Linear, paid ads, BoardNight Whop products.
