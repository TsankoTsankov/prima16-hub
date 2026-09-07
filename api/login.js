const crypto = require('crypto');

function token(secret) {
  const exp = Date.now() + 1000 * 60 * 60 * 12;
  const body = Buffer.from(JSON.stringify({ exp })).toString('base64url');
  const sig = crypto.createHmac('sha256', secret).update(body).digest('base64url');
  return body + '.' + sig;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method' });
    return;
  }
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    res.status(500).json({ error: 'ADMIN_PASSWORD missing' });
    return;
  }
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};
  if (body.password !== password) {
    res.status(401).json({ error: 'bad password' });
    return;
  }
  const secret = process.env.ADMIN_SECRET || password;
  const t = token(secret);
  res.setHeader('Set-Cookie', 'p16=' + t + '; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=43200');
  res.status(200).json({ ok: true });
};
