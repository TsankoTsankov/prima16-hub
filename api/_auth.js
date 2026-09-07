const crypto = require('crypto');

function readCookie(req) {
  const raw = req.headers.cookie || '';
  const m = raw.split(';').map(s => s.trim()).find(s => s.startsWith('p16='));
  return m ? m.slice(4) : '';
}

function valid(req) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  const secret = process.env.ADMIN_SECRET || password;
  const t = readCookie(req);
  const [body, sig] = t.split('.');
  if (!body || !sig) return false;
  const expect = crypto.createHmac('sha256', secret).update(body).digest('base64url');
  if (expect !== sig) return false;
  try {
    const data = JSON.parse(Buffer.from(body, 'base64url').toString());
    return data.exp > Date.now();
  } catch {
    return false;
  }
}

module.exports = { valid };
