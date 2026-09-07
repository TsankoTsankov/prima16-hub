# prima16-hub

Public site: https://prima16.com
Admin: https://www.prima16.com/admin/ (same Vercel project)

This repo is the family front door. It does **not** host PDF generators.

| Host | Repo |
|---|---|
| prima16.com | this repo |
| docs.prima16.com | prima16-docs-toolkit |
| extras.prima16.com | prima16-extras (free) |
| products.prima16.com | Gumroad |

Operating docs live in `/ops`. Start with `ops/NEXT_BEST_ACTION.md`.

## After deploy

1. Vercel → prima16-hub → Env: `ADMIN_PASSWORD` (required), optional `ADMIN_SECRET`, `WHOP_API_KEY`, `GUMROAD_ACCESS_TOKEN`
2. Add domain `admin.prima16.com` on this project
3. DNS: CNAME `admin` → `cname.vercel-dns.com`
4. Redeploy so env is live

Revenue numbers stay empty until server keys exist. Health checks hit public URLs only. Do not put API keys in this frontend.
