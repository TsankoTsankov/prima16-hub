# Prima16 hosting migration (Lovable free → Vercel)

## Decision

- Host **Dokumenti** on Vercel. Custom domain works on Hobby.
- Keep **Paddle** for PDF unlocks. Do not move checkout to Whop.
- Whop is only for downloadable kits (BoardNight) when that store opens.
- Do **not** merge docs-toolkit + hub into one repo. Generators stay untouched.
- Two Vercel projects, one DNS zone:
  - `prima16-hub` → prima16.com / www / admin.prima16.com
  - `prima16-docs` → docs.prima16.com

## Why not Whop for documents

Paddle overlay already works on the download screen (€1.99 / packs / €19.99).
Whop is a hosted product page + email zip. It cannot replace in-browser PDF unlock without rewriting the generators.

## You must do

### A. Link docs repo

1. https://vercel.com/prima16 → project **prima16-docs** (already created: prj_VPWDnvEabWwSTt9mhTyHXF4RAaXU)
2. Settings → Git → connect `TsankoTsankov/prima16-docs-toolkit`, branch `main`
3. Framework: Vite. Build: `vite build`. Output: whatever the TanStack Start preset detects (usually `.output` or `dist`).
4. Env: copy Paddle client ids / price ids from Lovable or from `.env.production` in the repo.
5. Deploy. Open the `*.vercel.app` URL. Test стокова + Paddle.

### B. Point docs DNS (Squarespace)

Delete A `docs` → `185.158.133.1`
Add:

```
CNAME   docs    cname.vercel-dns.com
```

In Vercel prima16-docs → Domains → add `docs.prima16.com`.

Do not touch `@`, `www`, `products`.

### C. Confirm

- https://docs.prima16.com/documents/stokova-razpiska loads
- Checkout overlay opens
- https://prima16.com still the hub

Fallback until DNS moves: the Lovable `*.lovable.app` URL.
