# HUMAN SETUP REQUIRED

## Done

- Whop payout setup (operator, 7 Sep evening).
- Docs + hub redeploy attempted (verify Git SHA, not just the Redeploy button).
- Adaptive pricing turned off on all four plans via API.

## Still you

### 1. Confirm EUR checkout

Open https://whop.com/checkout/plan_5JGBRYwBOs0Tx from your phone on mobile data in Bulgaria. Price must be €1.99. If you still see лв, screenshot.

### 2. Deploy current Git main, not an old snapshot

Vercel → project → Deployments. The production SHA for docs must include commits after `c0f1b9c` (EN hub Whop copy) and `08ba453` (/plateno). If production SHA is older, use Deploy → Promote the latest `main` build, or disconnect Lovable and connect TsankoTsankov/prima16-docs-toolkit.

Same check for hub: production must contain `/ops` and the Extras free card.

### 3. Not this week

Do not rotate the Whop key (your call). Do not change ADMIN_PASSWORD (your call).
