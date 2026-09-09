# PRIMA16 — EVERYTHING LEFT

**9 September 2026, 21:36 EEST.**

This is the full remaining work: publishing, marketing, deployments, payments, analytics, and cleanup.
Sorted by one question: **does a stranger pay us this week if I skip this?**

You have €0 ads. You are at work all day. There are still **zero Whop payments**. Treat every hour like the last one the business gets.

Do **P0 tonight**. Do **P1 this week**. Do not touch P3 until a real card has cleared.

Open this file on your phone: [ops/EVERYTHING_LEFT.md](https://github.com/TsankoTsankov/prima16-hub/blob/main/ops/EVERYTHING_LEFT.md)

---

## Scoreboard (do not lie to yourself)

| Thing | Reality |
|---|---|
| Whop sales | **0** |
| Google (docs, ~3 months, BG) | 44 clicks / 653 impressions |
| Pages Google already sends | стокова, РКО, ПКО |
| Live checkout | Whop, EUR, Касов пакет **4,99 €**, чист PDF **1,99 €** |
| Marketing budget | €0 |
| Your time | scraps |
| Hobby Vercel | €0/mo — keep it |

If this week ends with 0 payments, the product did not fail. **Distribution failed.** Fix distribution before you invent another product.

---

## Already done — do not redo

- Whop company + 4 products + Касов пакет plan `plan_AsvaCvOW2NdR2`
- Adaptive BGN pricing **off**
- Условия = Whop, not Paddle (code-side)
- Git connected on `prima16-docs-toolkit` → `main`
- Facebook post #1 sent
- Admin password / Whop API key — **leave them**
- Extras live (traffic test)
- EN delivery note + quote live
- Hub live at prima16.com, cashbook landing exists
- Payout you said is set — still **confirm** in P0

---

# P0 — TONIGHT (the business is fake until these are green)

Skip sleep for these. Nothing else in this file matters if P0 is red.

### P0-1. Prove tonight’s code is on the domain Google uses (3 min)

Google does not care about Vercel project names. It cares about **docs.prima16.com**.

On your phone, not logged into Vercel:

1. https://docs.prima16.com/
2. https://docs.prima16.com/obraztsi/razhoden-kasov-order
3. https://docs.prima16.com/obraztsi/stokova-razpiska
4. https://docs.prima16.com/obraztsi/prihoden-kasov-order

**Green if all true:**

- First button on РКО / стокова is **Вземи Касов пакет — 4,99 €**
- It is a real link (opens Whop, not “попълни онлайн”)
- Free file says **ЧЕРНОВА**
- No **Paddle**. No **лв**.
- Homepage third price card is **Касов пакет / 4,99 €**

**Red:** Vercel → open **both** `prima16-docs` and `prima16-docs-toolkit` → Settings → Domains. The project that lists `docs.prima16.com` is the only one that matters. Deployments → latest commit from **tonight** (after 21:20 EEST) → if missing, **Redeploy** that Git commit, Production, **do not** use existing build cache.

If you redeploy the wrong twin, Google keeps showing the old free blank. That is how we stay at 0 sales.

### P0-2. Walk checkout like a customer who will feel cheated (3 min)

From РКО tap **Касов пакет**.

| Must see | Instant fail |
|---|---|
| **€4.99** | €5.99 |
| EUR | BGN / лв |
| tax included | tax stacked on top |
| Касов пакет | Paddle |

Same check on 1,99 €: https://whop.com/checkout/plan_5JGBRYwBOs0Tx

**If 4.99 becomes 5.99:** Whop → product **Prima16 — чист PDF** → plan **Касов пакет** → tax **inclusive**. Repeat on `plan_5JGBRYwBOs0Tx`, `plan_4gY9zHsy3Wxw1`, `plan_LAA98Hnw9YN2z`, `plan_D783umKKKNxc5`. A buyer who sees 5.99 after we advertised 4.99 will close the tab. That is a sale we will never get back.

Do not pay tonight unless you have a spare 5 €. Paying is P1-6.

### P0-3. Confirm Whop will actually send you money (2 min)

Whop dashboard → Payouts.

**Green:** payout method active, not “complete KYC”, not paused.
**Red:** finish KYC **now**. A first sale with nowhere to land is worse than no sale. Do not “do it after the first customer”.

### P0-4. Force Google to recrawl the money pages (5 min)

Search Console → property **docs.prima16.com** → URL inspection → **Request indexing** for each:

```
https://docs.prima16.com/
https://docs.prima16.com/obraztsi/razhoden-kasov-order
https://docs.prima16.com/obraztsi/prihoden-kasov-order
https://docs.prima16.com/obraztsi/stokova-razpiska
https://docs.prima16.com/documents/stokova-razpiska
https://docs.prima16.com/documents/razhoden-kasov-order
https://docs.prima16.com/documents/prihoden-kasov-order
```

These URLs already have impressions. Every day they stay as “free blank, no price” in Google’s cache is a day of unpaid intent.

If `prima16.com` is a separate GSC property, request:

```
https://prima16.com/
https://prima16.com/cashbook
```

### P0-5. Facebook post #2 — point at the pack, not extras (2 min)

You already posted once. That post is not enough. People forget. Groups bury.

Paste as-is, in the Prima16 page **and** one group of Bulgarian ЕТ / счетоводители / малък бизнес if you are a member:

```
Разходен касов ордер в евро, от телефона.

Черновата е безплатна. Файлът за клиента е 1,99 €.
Касов пакет (стокова + ПКО + РКО) е 4,99 € еднократно.

Без регистрация.
https://docs.prima16.com/obraztsi/razhoden-kasov-order
```

No boost. No extras link. No BoardNight. No “check out my ecosystem”.

**P0 is done when:** live pages match the new offer, checkout is 4.99 EUR inclusive, payouts are on, Google is asked to recrawl, Facebook has the РКО pack post.

---

# P1 — THIS WEEK (first-sale machine)

Do these in order. Each one exists because 44 Google clicks converted into 0 money.

### P1-1. Whop product images + marketplace (10 min)

Marketplace is free traffic we are leaving on the table.

Whop → each product → add a **square logo / product image** → Publish to marketplace if the button is available.

Products:

- Prima16 — чист PDF (`prod_CC6o6pCY2TsDs`) — do this one first
- Prima16 Service Pack
- Prima16 Construction Pack
- Prima16 for this device

If Publish is blocked, the image is the blocker. Do not wait for a designer. A plain Prima16 square is enough.

### P1-2. Facebook: three more placements, not three more products (15 min)

Same offer. New rooms.

**Post A — стокова (the page with 15 GSC clicks):**

```
Word бланките за стокова разписка още пишат лв.

Попълваш от телефона. PDF в евро. Черновата е безплатна.
Файлът за клиента е 1,99 €. Касов пакет е 4,99 €.

https://docs.prima16.com/documents/stokova-razpiska
```

**Post B — groups.** Join (if not in) and post once, as a person not a brand, in groups where ЕТ / строители / сервизни техници actually hang. One post per group. If the rules ban promo, do not sneak it. We cannot afford a ban.

**Post C — page bio / about.** First line must be a price and a URL, not a slogan:
`Стокова и касов ордер в евро. 1,99 € чист PDF. docs.prima16.com`

Reply to every comment within 24 h. A comment with no reply is a customer walking out of the shop.

### P1-3. Reddit — one shot, not a campaign (10 min)

Only if the account has enough karma to not look like spam.

One post, r/bulgaria or a small-business BG community, same copy as P0-5. Title:
`Разходен касов ордер в евро — онлайн бланка PDF`

If you have no karma, **skip**. A removed post is worse than silence.

### P1-4. Search Console hygiene (10 min)

- Confirm `docs.prima16.com`, `prima16.com`, `extras.prima16.com` are all properties, all **verified**, sitemap submitted:
  - https://docs.prima16.com/sitemap.xml
  - https://prima16.com/sitemap.xml
- Coverage: fix anything **Excluded / Duplicate / 404** on the seven money URLs above.
- Export Performance (last 7 days) after Wednesday crawl and send it in chat. Old 7 Sep export is stale for the new CTAs.

### P1-5. Vercel Analytics without CLI (5 min)

Dashboard → the project that owns `docs.prima16.com` → Analytics → **Enable Web Analytics**.
Then open docs homepage once from your phone so the first pageview exists.

Do **not** run CLI. Do **not** enable Speed Insights if it asks you to change code tonight. Pageviews are enough to see if Google traffic still arrives.

Repeat Enable on `prima16-hub` if it is off.

### P1-6. Buy the pack yourself when you have 5 €

This is QA, not vanity.

1. Normal Chrome (not incognito you will close).
2. Pay Касов пакет.
3. Land on https://docs.prima16.com/plateno
4. Open стокова / ПКО / РКО and download. **ЧЕРНОВА must be gone.**

If money leaves and the stamp stays: screenshot Whop receipt + PDF and send it. Unlock is localStorage — if that path is broken, every real customer will charge back in their head and never come back.

### P1-7. Duplicate Vercel docs project (5 min)

You have **prima16-docs** and **prima16-docs-toolkit**. That is how deploys go to the wrong twin.

1. Settings → Domains on both.
2. Keep the one with `docs.prima16.com`.
3. On the other: remove custom domain if any, then **Pause** (do not delete for 24 h).
4. Confirm docs.prima16.com still loads.

Hobby plan + two apps building the same repo is how we miss the sale window.

### P1-8. Support inbox (1 min, then daily)

Open tsanko@prima16.com and support@prima16.com. A first buyer who emails into silence asks Whop for a refund.

---

# P2 — PUBLISHING (files that already exist, still not earning)

Do **not** start P2 before a Whop payment on docs. Publishing five dead products does not create demand. It creates five support surfaces.

When the first 4,99 € clears, publish in this order. One product per day. Watch 48 h. Then the next.

### P2-1. Household Cash Book (Gumroad) — first digital file after docs

**Why this one:** already at https://products.prima16.com/l/hausehold_cashBook — 24 €. International. Does not compete with the BG cash-order SEO.

**You:**

1. Open that URL in incognito. Can a stranger pay?
2. If 404 / draft / broken checkout: Gumroad → product → Publish. Price **24 EUR**. File = the customer zip from HouseholdCashBook (not the FULL internals zip).
3. Confirm https://prima16.com/cashbook points at the live Gumroad URL.
4. Facebook one post, English or BG, link cashbook. Not the same post as стокова.

**Do not** upload the FULL zip that contains owner-only materials.

### P2-2. Събиране 2026 (Gumroad) — second BG file

Excel + statutory interest + two letters. 19 €. File is on **your** machine: `Prima16_Sabirane_PUBLISH.zip`.

Gumroad → New product → one-time 19 EUR → attach PUBLISH zip only → published.
Then tell me the public URL so I can put it on prima16.com.

Do not call it legal advice on the listing.

### P2-3. Job Ledger (Gumroad)

The zip was not in this chat. You have `Prima16_Job_Ledger` locally.

1. Re-attach it here **or** upload to Gumroad yourself.
2. Price 9–19 EUR one-time. English. Trades.
3. One Reddit/Facebook post **after** the listing is public.

If the zip is messy, send it before publishing. A bad first file review kills the store.

### P2-4. BoardNight

Files exist (`BoardNight_GoLive_Pack`, `FINAL_BUSINESS`). Vercel projects `boardnight` and `boardnight-kit` already sit in the account.

**Do not DNS a new domain until docs has a sale.** When you do:

1. Decide one URL (boardnight under prima16.com, not a new brand).
2. Connect the **one** Vercel project that should own it. Pause the other.
3. Gumroad or Whop for the paid kit — pick **one** till, not both.
4. Publish, then one social post.

### P2-5. Tools (bearings / press brake / air)

https://prima16.com/tools is a brochure. `prima16-tools` is on Vercel.

Leave it **free, no paywall**, until docs converts. It is a search magnet, not a third checkout.
If `tools.prima16.com` is not mapped, map it **after** P0 is green. Not before.

### P2-6. Extras

https://extras.prima16.com stays a **free** acquisition tool. There is a €1.99 footer-remove on it — do not promote that. Promote the free change-order so people meet Prima16. Paid extras later, if at all.

`prima16-extras-wpoz` is a duplicate. Pause it like the extra docs app.

### P2-7. English docs (UK trades)

Live: https://docs.prima16.com/en — delivery note + quote. **Not** a VAT invoice.

This week: one Facebook/LinkedIn post in English pointing at `/en/delivery-note`. No UK ads. Do not add CIS/VAT products.

---

# P3 — AFTER THE FIRST EURO (not before)

These are real, and they will eat the week if you start them now.

- VAT 51130 threshold tracker (next Gumroad after Събиране sells)
- Firm cash book in euro
- Year-end inventory pack
- RenoBudget / GEO Checker — **no repos, do not start**
- Webhook so unlock is not only localStorage
- Accounts / login
- Merging docs+hub+extras
- Paid ads (Meta, Google) — only after 3 organic sales so you know the landing converts
- New generators beyond what Google already sends
- Rotating admin password / API keys

---

# DEPLOYMENTS — what each Vercel project is for

| Vercel project | Should serve | You do |
|---|---|---|
| **the one with docs.prima16.com** (docs **or** toolkit, not both) | https://docs.prima16.com | Keep. Git = `prima16-docs-toolkit` `main`. |
| the other docs twin | nothing | Pause |
| prima16-hub | https://prima16.com , www, admin.prima16.com | Keep |
| prima16-extras | https://extras.prima16.com | Keep |
| prima16-extras-wpoz | nothing | Pause |
| prima16-tools | tools page / tools.prima16.com later | Keep, do not paywall |
| boardnight / boardnight-kit | pick **one** when publishing | Pause the other |

**Rule:** one custom domain → one Vercel project. Two twins is why “I redeployed” still showed old pages.

After every Git push to docs, glance at Deployments. If no new row in 2 minutes, Redeploy. I cannot see your Vercel project list from here.

DNS is Squarespace. Do not move it this week.

---

# MARKETING — the only channels that do not cost money

| Channel | Status | Cadence |
|---|---|---|
| Google organic (BG docs) | **primary.** 44 clicks already | GSC 2×/week |
| Facebook page + 1–2 groups | post #1 done | 3 posts this week, then 2/week |
| Reddit | not started | one post, then stop |
| Whop marketplace | blocked on product image | once |
| Gumroad discovery | Household maybe live | after P2-1 verified |
| Email list | none | do not build one this week |
| Ads | €0 | forbidden until 3 organic sales |
| LinkedIn | unused | one EN delivery-note post in P2-7 |

**This week’s only story:** стокова / касов ордер в евро. 1,99 or 4,99. Phone. No account.

If you post about extras, BoardNight, bearings, or “the Prima16 ecosystem”, you are hiding the till.

---

# DAILY 10 MINUTES (work days, from the phone)

1. Whop → Payments. Not zero? Tell me immediately.
2. Facebook comments / DMs. Reply.
3. GSC → Performance, last 24 h if available. Clicks on стокова / РКО going up or dead?
4. One post only if you did not post yesterday.

That is the whole job until the first payment. Not new features. Not new domains.

---

# KILL LIST

Do not do these while sales = 0:

- New Vercel project
- Reconnect Git
- Rotate secrets
- Merge the three apps
- Paddle
- Subscriptions
- Accounts
- UK VAT invoices / CIS
- DE / FR / AU products
- Chat2 micro-business, Job Search HQ, GEO, RenoBudget
- Buying ads “to see”
- Publishing all Gumroad files in one night
- Redesign
- Another generator Google is not asking for

---

# IF TONIGHT YOU CAN ONLY DO FOUR THINGS

1. P0-1 live check
2. P0-2 checkout 4.99 not 5.99
3. P0-4 GSC request indexing
4. P0-5 Facebook РКО post

Then go to sleep. The site has to sell while you are at work tomorrow. That only happens if the live page and the checkout are honest tonight.
