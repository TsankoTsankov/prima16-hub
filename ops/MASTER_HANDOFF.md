# PRIMA16 MASTER HANDOFF
Read this if you have no AI. Date: 12 Sep 2026.

## What Prima16 is
A one-person Bulgarian shop (Tsanko Valentinov Tsankov) selling small paid files and one-time PDF unlocks. Not a SaaS. Not a law firm. Email: support@prima16.com

## Sites (keep two, not one)
- prima16.com = hub. Repo: TsankoTsankov/prima16-hub. Static HTML. Vercel project for the apex domain.
- docs.prima16.com = generators and calculators. Repo: TsankoTsankov/prima16-docs-toolkit. Vercel project prima16-docs-toolkit. Also has a Lovable project. You do not need Lovable.
- extras.prima16.com = extra-work protocol. Separate app. Do not merge. Low priority until first sales.
- products.prima16.com = Gumroad custom domain (Household listing lives here).
- admin.prima16.com = hub /admin (password). Do not advertise.

Pause duplicate Vercel apps that serve the same git repo.

## What you sell now
1. Sabirane 2026, 29 EUR tax included. Whop plan_P4IkPDQiNsuSF. Page /sabirane. After pay, email the Excel + two letters from your computer (folder sabirane_pack / ops notes). Thanks page: /sabirane-thanks.
2. Clean PDF 1.99 EUR or cash pack 4.99 EUR on docs. Whop plans already live. Do not delete. Google already sends people to obraztsi pages.
3. Household Cash Book 24 EUR on Gumroad: https://products.prima16.com/l/hausehold_cashBook (slug is misspelled; do not change the URL or the listing breaks).

Ignore BoardNight, extras paywall push, and new products until four paid sales exist.

## Money path this month
Search or a human message -> /sabirane calculator or docs obraztsi -> Whop checkout -> you fulfill or localStorage unlocks. First goal: one stranger pays. Second: 100 EUR/month = about four Sabirane sales or a mix with PDFs.

## How to edit the hub without AI
1. GitHub.com -> TsankoTsankov/prima16-hub -> the HTML file.
2. Pencil icon. Save. Vercel deploys main automatically.
3. Wait 1-2 minutes. Open the live URL in a private window.
4. If deploy fails: Vercel dashboard -> Deployments -> the red one -> logs. Fix the file. Do not create a new project.

New public page: add file page-name.html, add row in sitemap.xml, link from footer or /tools. cleanUrls makes /page-name work.

CSS: css/brand.css. Colors: ink #1c2e24, green #2d5a3d, cream #f4efe4, paper #fffdf8. No gradients. No pill radius. No emoji. No em dash.

Favicon: /favicon.svg
Logo file: /brand/logo-wordmark.svg

## How to edit docs without Lovable
Lovable URL in the toolkit README is optional. Real source is GitHub prima16-docs-toolkit.
Local: clone, npm i, npm run dev. Change src/ or content/. Commit to main. Vercel builds.
If you cannot run Node: edit the file on GitHub.com the same way as the hub. Riskier for TSX. Prefer small copy edits.
Do not reconnect Lovable unless you want two editors fighting.

## Payments
Whop account Prima16 (biz_7dpwuua5eEX7UJ). Dashboard: payments, products, plans.
Gumroad: Household only for now.
After a Sabirane payment: download email from Whop, send zip same day from support@ or tsanko@.
Refunds: 30 days if the file does not match the page. Process in Whop/Gumroad.

## SEO you actually touch
Each page: one H1, unique title, unique meta description, canonical.
Hub sitemap: /sitemap.xml. robots.txt allows all except /admin and /api.
GSC: add prima16.com and docs.prima16.com. Request index after a new URL.
Internal links: hub -> sabirane and docs. Docs obraztsi -> checkout. Blog posts (when you write them) -> one product only.
Do not buy links. Do not use PBNs.

Preferred Sources: not a badge you invent. Google lets readers pick favorite sites. Official button needs news.google.com/swg/js/v1/publisher.js and a site that appears in google.com/preferences/source. Unverified whether prima16.com is eligible. Do not add the script until you publish a real blog on a cadence. AI Overviews: useful pages with a short answer under the H1, original examples, schema Organization on the homepage. No guarantee.

## AEO
First paragraph after H1 must answer the query in two sentences. FAQ only when the question is real. JSON-LD Organization on the homepage. Same facts on every page (price, what it is not: not a VAT invoice, not legal advice).

## Blog without Lovable and without Gemini
Write a .md or .html yourself.
Hub has no blog engine. Options: (A) add /blog/slug.html on the hub, or (B) use docs content folder if a blog route already exists on docs.
Process: pick one keyword from ops/GEMINI_KEYWORDS.md -> draft in Google Docs -> one H1 -> answer first -> link to one product -> paste into HTML -> sitemap -> GSC -> one Facebook post.
Gemini: if you still have a prompt in another tool, paste the keyword row as the only input. Output must be reviewed by you. Delete em dashes, emoji, and legal claims. If Gemini or Lovable dies, this manual path is the system.

## Analytics
Vercel Analytics on hub. GSC for search. Whop for money. Those three are enough.

## Legal
Hub: /privacy /terms /cookies. Docs: /usloviya and /vrashtane-na-sumi. Add EIK/VAT when you have them. These pages reduce risk. They do not make you unsueable. Get a lawyer if revenue is real.
No phone number is published because none was verified. Add tel: only with a number you answer.

## Weekly (12 min/day)
Whop payments. Email fulfillment. One human message from MARKETING_30_90.md. GSC anomalies.

## Monthly
One useful article from GEMINI_KEYWORDS. Check broken links on / and /sabirane. Renew nothing you do not use.

## Quarterly
Prices. ECB rate on /sabirane default. Privacy dates.

## If the site is down
1. Open prima16.com and docs.prima16.com.
2. Vercel deployments.
3. Squarespace DNS only if both fail (A/CNAME). Do not delete records.
4. Rollback: Vercel -> previous Ready deployment -> Promote.

## If checkout looks wrong
Must show EUR and the listed price. Adaptive pricing off. Tax inclusive. Plan IDs above.

## Emergency copy of this file
GitHub prima16-hub /ops/MASTER_HANDOFF.md
