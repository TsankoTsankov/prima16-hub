# prima16-hub

Public site: prima16.com
Admin: admin.prima16.com (same Vercel project, host rewrite)

## After deploy

1. Vercel → project prima16-hub → Settings → Environment Variables
   - ADMIN_PASSWORD (required)
   - ADMIN_SECRET (optional, random string)
   - PADDLE_API_KEY (optional)
   - GUMROAD_ACCESS_TOKEN (optional)
2. Domains: add admin.prima16.com
3. DNS: CNAME admin → cname.vercel-dns.com  (do not touch docs)
4. Redeploy so env is live.

Revenue numbers stay empty until keys exist. Health checks hit public URLs only.
