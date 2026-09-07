const login = document.getElementById('login');
const dash = document.getElementById('dash');
const err = document.getElementById('err');

async function api(path, opts) {
  const res = await fetch(path, { credentials: 'same-origin', ...opts });
  const data = await res.json().catch(() => ({}));
  if (res.status === 401) throw Object.assign(new Error('auth'), { auth: true });
  if (!res.ok) throw new Error(data.error || res.statusText);
  return data;
}

function render(data) {
  document.getElementById('stamp').textContent = new Date(data.checkedAt).toLocaleString('bg-BG');
  document.getElementById('health').innerHTML = '<table class="data"><tr><th>URL</th><th>ms</th><th></th></tr>' +
    data.health.map(h => '<tr><td><span class="status-dot ' + (h.ok ? 'up' : 'down') + '"></span><a href="' + h.url + '">' + h.name + '</a></td><td>' + (h.ms ?? '—') + '</td><td>' + (h.ok ? h.status : (h.error || 'down')) + '</td></tr>').join('') + '</table>';
  document.getElementById('products').innerHTML = '<table class="data"><tr><th>Име</th><th>Статус</th><th>Каса</th></tr>' +
    data.products.map(p => '<tr><td>' + p.name + '</td><td>' + p.status + '</td><td>' + p.money + '</td></tr>').join('') + '</table>';
  const m = data.revenue;
  document.getElementById('money').textContent = m.configured
    ? ('Paddle конфигуриран: ' + (m.paddle || '—') + '. Gumroad: ' + (m.gumroad || '—'))
    : 'API ключове няма. Числа не се измисляват. Сложи PADDLE_API_KEY и/или GUMROAD_ACCESS_TOKEN във Vercel.';
}

async function boot() {
  try {
    const data = await api('/api/status');
    login.hidden = true;
    dash.hidden = false;
    render(data);
  } catch (e) {
    login.hidden = false;
    dash.hidden = true;
  }
}

document.getElementById('go').onclick = async () => {
  err.textContent = '';
  try {
    await api('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: document.getElementById('pw').value })
    });
    await boot();
  } catch (e) {
    err.textContent = 'Грешна парола или ADMIN_PASSWORD не е сложен.';
  }
};
document.getElementById('out').onclick = async () => {
  await fetch('/api/logout', { method: 'POST' });
  location.reload();
};
document.getElementById('pw').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('go').click(); });
boot();
