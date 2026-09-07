# OPEN ISSUES

## P0

- [ ] Whop payout inactive — money may sit.
- [ ] `/plateno` used to require Paddle `_ptxn`. Patch is in docs-toolkit; production must redeploy.
- [ ] EN + BG legal pages said Paddle while checkout is Whop. Patch in docs-toolkit; production must redeploy.

## P1

- [ ] ADMIN_PASSWORD may be unset. `admin.prima16.com` rewrite not proven.
- [ ] Entitlement is localStorage only. Clear browser = lost purchase.
- [ ] No GSC numbers in this workspace.
- [ ] Household Reels and Gumroad landing.html are not in the product zip.
- [ ] Whop owner API key was pasted in an old handoff — rotate.

## P2

- [ ] Hub still a thin static page (fine).
- [ ] Extras README still mentions Paddle checkout that is not for sale.
- [ ] Docs repo carries unused shadcn primitives and leftover Paddle modules (`src/lib/paddle.ts`). Leave until they block a build.
- [ ] BoardNight WEBSITE/ still uses BoardNight navy palette and YOURDOMAIN placeholders.
