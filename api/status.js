const { valid } = require('./_auth');

const TARGETS = [
  { name: 'Hub', url: 'https://prima16.com/' },
  { name: 'Документи', url: 'https://docs.prima16.com/' },
  { name: 'Стокова', url: 'https://docs.prima16.com/documents/stokova-razpiska' },
  { name: 'EN hub', url: 'https://docs.prima16.com/en' },
  { name: 'Extras', url: 'https://extras.prima16.com/' },
  { name: 'Cash Book', url: 'https://products.prima16.com/l/hausehold_cashBook' }
];

const PRODUCTS = [
  { name: 'Документи', status: 'live', money: 'Whop 1,99 / 4,99 / 6,99 / 19,99 €' },
  { name: 'Prima16 Extras', status: 'live free', money: '—' },
  { name: 'Household Cash Book', status: 'live', money: 'Gumroad 24 €' },
  { name: 'BoardNight', status: 'files ready; store not created', money: 'later, same pattern as Household' },
  { name: 'RenoBudget', status: 'planned', money: '—' },
  { name: 'GEO Checker', status: 'planned', money: '—' }
];

const NEXT_BEST_ACTION = {
  id: 'whop-payout-kyc',
  title: 'Отвори Whop payout (KYC), за да 1,99 € стигне в банката',
  why: 'Картите взимат пари. Standard payout е inactive. Без това няма приход в сметката.',
  href: 'https://whop.com/dashboard/biz_7dpwuua5eEX7UJ/',
  metric: 'payout_active'
};

async function ping(url) {
  const t0 = Date.now();
  try {
    const ctrl = new AbortController();
    const id = setTimeout(() => ctrl.abort(), 8000);
    const res = await fetch(url, { method: 'GET', redirect: 'follow', signal: ctrl.signal, headers: { 'User-Agent': 'Prima16Admin/1.0' } });
    clearTimeout(id);
    return { url, ok: res.status < 400, status: res.status, ms: Date.now() - t0 };
  } catch (e) {
    return { url, ok: false, error: e.name === 'AbortError' ? 'timeout' : 'fetch_failed', ms: Date.now() - t0 };
  }
}

module.exports = async (req, res) => {
  if (!valid(req)) {
    res.status(401).json({ error: 'auth' });
    return;
  }
  const health = await Promise.all(TARGETS.map(async t => ({ name: t.name, ...(await ping(t.url)) })));
  const revenue = {
    configured: Boolean(process.env.WHOP_API_KEY || process.env.GUMROAD_ACCESS_TOKEN),
    whop: process.env.WHOP_API_KEY ? 'key present — list not wired (server only)' : 'unavailable (no WHOP_API_KEY)',
    gumroad: process.env.GUMROAD_ACCESS_TOKEN ? 'key present — list not wired' : 'unavailable (no GUMROAD_ACCESS_TOKEN)',
    paddle: 'retired for new checkouts',
    note: 'Numbers are not invented. Open Whop / Gumroad dashboards until the list API is wired.'
  };
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    checkedAt: new Date().toISOString(),
    health,
    products: PRODUCTS,
    revenue,
    nextBestAction: NEXT_BEST_ACTION,
    unavailable: [
      'GSC impressions/clicks — connect Search Console or paste weekly numbers',
      'generator usage — client analytics only, no server store',
      'conversion by country — needs Whop API key on this project'
    ]
  });
};
