const { valid } = require('./_auth');

const TARGETS = [
  { name: 'Hub', url: 'https://prima16.com/' },
  { name: 'Документи', url: 'https://docs.prima16.com/' },
  { name: 'Стокова', url: 'https://docs.prima16.com/documents/stokova-razpiska' },
  { name: 'EN hub', url: 'https://docs.prima16.com/en' },
  { name: 'Cash Book', url: 'https://products.prima16.com/l/hausehold_cashBook' }
];

const PRODUCTS = [
  { name: 'Документи', status: 'live', money: 'Paddle 1,99 / 4,99 / 6,99 / 19,99 €' },
  { name: 'Household Cash Book', status: 'live', money: 'Gumroad 24 €' },
  { name: 'Prima16 Extras', status: 'spec only', money: '—' },
  { name: 'BoardNight', status: 'files, no store', money: '—' },
  { name: 'RenoBudget', status: 'planned', money: '—' },
  { name: 'GEO Checker', status: 'planned', money: '—' }
];

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
    configured: Boolean(process.env.PADDLE_API_KEY || process.env.GUMROAD_ACCESS_TOKEN),
    paddle: process.env.PADDLE_API_KEY ? 'key present — live list not wired yet' : null,
    gumroad: process.env.GUMROAD_ACCESS_TOKEN ? 'key present — live list not wired yet' : null
  };
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ checkedAt: new Date().toISOString(), health, products: PRODUCTS, revenue });
};
