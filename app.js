/* Done admin dashboard prototype. Plain JavaScript, no build step. */
(() => {
  const D = window.DB;
  const IC = {
    dash: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r="1"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    starf: '<polygon fill="currentColor" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    chart: '<path d="M3 3v18h18"/><path d="M8 17v-5"/><path d="M13 17V7"/><path d="M18 17v-8"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
    settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    chevd: '<path d="m6 9 6 6 6-6"/>', chevr: '<path d="m9 18 6-6-6-6"/>', chevl: '<path d="m15 18-6-6 6-6"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>', x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    edit: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>',
    file: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
    wallet: '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
    percent: '<path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    drop: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    sparkle: '<path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z"/>',
    arrow: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    msg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  };

  /* ---------- helpers ---------- */
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const ic = (n, s = 18) => `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n] || ''}</svg>`;
  const money = n => '$' + Math.round(Number(n)).toLocaleString('en-US');
  const money2 = n => '$' + Number(n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const today = () => new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  const initials = n => String(n).split(' ').map(x => x[0]).slice(0, 2).join('').toUpperCase();
  const UP = id => String(id).toUpperCase();
  const TONE = { Active: 'success', Approved: 'success', Paid: 'success', Sent: 'success', Verified: 'success', Accepted: 'success', Replied: 'success', Published: 'success', Completed: 'neutral', Inactive: 'neutral', Expired: 'neutral', Closed: 'neutral', 'No request': 'neutral', Estimate: 'neutral', Hidden: 'neutral', Pending: 'warning', 'Pending review': 'warning', Waiting: 'warning', Held: 'warning', Requested: 'warning', Open: 'warning', Flagged: 'warning', 'To review': 'warning', 'Unsaved changes': 'warning', Blocked: 'error', Rejected: 'error', Cancelled: 'error', Declined: 'error', Refunded: 'error', 'Resubmit': 'error', Upcoming: 'brand', Scheduled: 'brand', Fixed: 'brand', Hourly: 'link' };
  const badge = (s, t) => `<span class="badge ${t || TONE[s] || 'neutral'}">${esc(s)}</span>`;
  const avatar = (name, size = 36, photo) => photo ? `<img class="avatar" src="${esc(photo)}" alt="" style="width:${size}px;height:${size}px">` : `<span class="avatar" style="width:${size}px;height:${size}px;${size >= 48 ? 'font-size:16px' : ''}">${esc(initials(name))}</span>`;
  const user = (name, sub, size = 36, photo) => `<div class="row">${avatar(name, size, photo)}<div class="col g2"><span class="m" style="color:var(--text-primary)">${esc(name)}</span>${sub ? `<span class="t12 muted">${esc(sub)}</span>` : ''}</div></div>`;
  const dat = o => Object.entries(o || {}).map(([k, v]) => `data-${k}="${esc(v)}"`).join(' ');
  const btn = (label, o = {}) => `<button type="${o.type || 'button'}" class="btn ${o.kind || 'secondary'} ${o.size || ''} ${o.cls || ''}" ${o.act ? `data-act="${o.act}"` : ''} ${dat(o.d)} ${o.title ? `aria-label="${esc(o.title)}" title="${esc(o.title)}"` : ''}>${o.icon ? ic(o.icon, 16) : ''}${label ? esc(label) : ''}</button>`;
  const ibtn = (icon, act, d, title, cls = '') => `<button type="button" class="iconbtn ${cls}" data-act="${act}" ${dat(d)} aria-label="${esc(title)}" title="${esc(title)}">${ic(icon, 16)}</button>`;
  const tabs = (path, items, cur) => `<div class="tabs" role="tablist">${items.map(i => { const [v, l] = Array.isArray(i) ? i : [i, i]; return `<button type="button" role="tab" aria-selected="${v === cur}" class="tab ${v === cur ? 'on' : ''}" data-act="set" data-path="${path}" data-val="${esc(v)}">${esc(l)}</button>`; }).join('')}</div>`;
  const select = (path, opts, cur, prefix = '') => `<label class="select"><select data-bind="${path}" data-live aria-label="${esc(prefix || 'Filter')}">${opts.map(o => { const [v, l] = Array.isArray(o) ? o : [o, o]; return `<option value="${esc(v)}" ${String(v) === String(cur) ? 'selected' : ''}>${esc(prefix + l)}</option>`; }).join('')}</select>${ic('chevd', 16)}</label>`;
  const search = (id, path, val, ph) => `<label class="input h40 search">${ic('search', 16)}<input id="${id}" data-bind="${path}" data-live value="${esc(val)}" placeholder="${esc(ph)}" aria-label="${esc(ph)}"></label>`;
  const field = (label, inner) => `<div class="field grow"><label>${esc(label)}</label>${inner}</div>`;
  const inp = o => `<div class="input ${o.cls || ''}">${o.icon ? ic(o.icon, 18) : ''}<input ${o.id ? `id="${o.id}"` : ''} type="${o.type || 'text'}" ${o.path ? `data-bind="${o.path}"` : ''} ${o.live ? 'data-live' : ''} value="${esc(o.val ?? '')}" placeholder="${esc(o.ph || '')}" ${o.attrs || ''}>${o.trail || ''}</div>`;
  const area = o => `<div class="input area"><textarea ${o.id ? `id="${o.id}"` : ''} data-bind="${o.path}" ${o.live ? 'data-live' : ''} placeholder="${esc(o.ph || '')}" rows="${o.rows || 4}">${esc(o.val ?? '')}</textarea></div>`;
  const fsel = (path, opts, cur, live) => `<div class="input"><select data-bind="${path}" ${live ? 'data-live' : ''}>${opts.map(v => `<option ${v === cur ? 'selected' : ''}>${esc(v)}</option>`).join('')}</select>${ic('chevd', 18)}</div>`;
  const two = (a, b) => `<div class="two"><div>${a}</div><div>${b}</div></div>`;
  const stat = (icon, val, lbl, warn) => `<div class="stat"><div class="iw">${ic(icon)}</div><div class="val">${esc(val)}</div><div class="lbl ${warn ? 'warn' : ''}">${esc(lbl)}</div></div>`;
  const kv = (k, v) => `<div class="kv"><span>${esc(k)}</span><span>${v}</span></div>`;
  const ch = (t, s, right = '') => `<div class="row"><div class="col g2 grow"><h3 class="t16 m">${esc(t)}</h3>${s ? `<span class="t12 muted">${esc(s)}</span>` : ''}</div>${right}</div>`;
  const toggle = (on, act, d, label) => `<button type="button" role="switch" aria-checked="${!!on}" aria-label="${esc(label || 'Toggle')}" class="toggle ${on ? 'on' : ''}" data-act="${act}" ${dat(d)}></button>`;
  const stars = n => `<span class="stars" aria-label="${n} out of 5">${[1, 2, 3, 4, 5].map(i => `<span class="${i <= n ? 'on' : ''}">${ic('starf', 14)}</span>`).join('')}</span>`;
  const rating = r => r ? `<span class="row g4 strong"><span class="star">${ic('starf', 14)}</span>${r.toFixed(1)}</span>` : '-';
  const info = (icon, k, v) => `<div class="row top">${icon ? `<span class="muted" style="margin-top:2px">${ic(icon, 16)}</span>` : ''}<div class="col g2 grow"><span class="t12 muted">${esc(k)}</span><span class="m">${esc(v)}</span></div></div>`;
  const table = (cols, rows, foot = '') => `<div class="tablewrap"><div class="tscroll"><table><thead><tr>${cols.map(c => `<th ${c[1] ? `style="width:${c[1]}px"` : ''}>${c[0]}</th>`).join('')}</tr></thead><tbody>${rows.length ? rows.join('') : `<tr><td colspan="${cols.length}"><div class="empty">Nothing matches these filters.</div></td></tr>`}</tbody></table></div>${foot}</div>`;
  function paged(list, key, per = 8) {
    const u = S.ui[key], pages = Math.max(1, Math.ceil(list.length / per)); u.page = Math.min(Math.max(1, u.page || 1), pages);
    const st = (u.page - 1) * per, pg = (n, l, dis, on) => `<button type="button" class="pg ${on ? 'on' : ''}" ${dis ? 'disabled' : ''} data-act="set" data-path="ui.${key}.page" data-val="${n}" data-num="1" aria-label="Page ${n}">${l}</button>`;
    let from = Math.max(1, Math.min(u.page - 1, pages - 2)), nums = []; for (let i = from; i <= Math.min(pages, from + 2); i++) nums.push(i);
    const foot = `<div class="pager"><span class="t12 muted grow">${list.length ? `Showing ${st + 1}-${Math.min(list.length, st + per)} of ${list.length.toLocaleString()}` : 'No results'}</span>${pg(u.page - 1, ic('chevl', 14), u.page <= 1)}${nums.map(n => pg(n, n, false, n === u.page)).join('')}${pg(u.page + 1, ic('chevr', 14), u.page >= pages)}</div>`;
    return { rows: list.slice(st, st + per), foot };
  }
  const cust = id => D.customers.find(c => c.id === id), pro = id => D.pros.find(p => p.id === id), job = id => D.bookings.find(b => b.id === id);
  const has = (q, ...vals) => !q || vals.some(v => String(v || '').toLowerCase().includes(q.trim().toLowerCase()));
  const setPath = (path, val) => { const ks = path.split('.'); let o = S; for (let i = 0; i < ks.length - 1; i++) o = o[ks[i]]; o[ks[ks.length - 1]] = val; };
  const rate = () => D.commission / 100;
  const balance = p => Math.max(0, Math.round(p.earned * (1 - rate()) - p.paid));

  /* ---------- state ---------- */
  const S = {
    db: D, authed: false, route: 'login', modal: null, form: {}, toasts: [], pop: null, navOpen: false,
    auth: { email: D.admin.email, pw: '', remember: true, err: '', otp: ['', '', '', '', '', ''], np: '', np2: '', show: {} },
    ui: {
      g: { q: '' }, dash: { year: '2026' },
      customers: { tab: 'All', q: '', sort: 'Newest', page: 1 }, custJobs: { page: 1 },
      pros: { tab: 'All', q: '', cat: 'All', page: 1 }, cats: { q: '' },
      pricing: { cat: 'All', page: 1 }, promos: { status: 'All', page: 1 },
      bookings: { tab: 'All', q: '', service: 'All', date: 'all', resp: 'Any', page: 1 },
      pay: { rate: String(D.commission), page: 1 }, payouts: { page: 1, paidExtra: 0 },
      reviews: { tab: 'All', q: '', stars: 'All', cat: 'All', page: 1 },
      notif: { audience: 'Customers', type: 'Booking update', title: 'Holiday schedule', msg: 'Bookings on Dec 25 are limited. Please schedule your service in advance.', user: '', filter: 'All types', page: 1, err: '' },
      rep: { range: 'month' }, appReports: { tab: 'All', q: '', from: 'Everyone', page: 1 }, report: { draft: {} },
      profile: null, login: { email: D.admin.email, cur: '', np: '', np2: '', err: '', emailErr: '' }, editor: { draft: {}, dirty: {} },
    },
  };
  try { S.authed = sessionStorage.getItem('done-admin-auth') === '1'; } catch (e) { }
  const AUTH = ['login', 'forgot', 'verify', 'new-password', 'password-updated'];
  const go = r => { if (location.hash !== '#' + r) location.hash = r; route(); };
  function toast(msg, undo) { const t = { id: Date.now() + Math.random(), msg, undo }; S.toasts.push(t); setTimeout(() => { S.toasts = S.toasts.filter(x => x !== t); renderOverlay(); }, 4200); }
  function exportCSV(name, head, rows) {
    const csv = [head, ...rows].map(r => r.map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
    try { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = name; document.body.appendChild(a); a.click(); a.remove(); } catch (e) { }
    toast(`Export started: ${name} (${rows.length} rows)`);
  }

  /* ---------- auth views ---------- */
  function vAuth(r) {
    const a = S.auth, pwf = (label, path, val, k, cls = '') => field(label, inp({ id: 'f-' + k, path, val, type: a.show[k] ? 'text' : 'password', icon: 'lock', live: true, cls, trail: `<button type="button" data-act="toggleShow" data-k="${k}" aria-label="Show password">${ic('eye')}</button>` }));
    const head = (t, s) => `<div class="col g8"><h1>${t}</h1><p class="sec">${s}</p></div>`;
    const err = a.err ? `<div class="errtext" role="alert">${esc(a.err)}</div>` : '';
    let f = '';
    if (r === 'login') f = `<form data-form="login" novalidate>${head('Welcome back', 'Sign in with your admin email and password.')}
      <div class="col g16">${field('Email*', inp({ id: 'f-email', path: 'auth.email', val: a.email, type: 'email', icon: 'mail' }))}${pwf('Password*', 'auth.pw', a.pw, 'pw')}
      <div class="row"><button type="button" class="row g8 grow" data-act="set" data-path="auth.remember" data-val="${a.remember ? '' : '1'}"><span class="check ${a.remember ? 'on' : ''}">${ic('check', 12)}</span><span class="sec">Keep me signed in</span></button><a class="link" href="#forgot">Forgot password?</a></div>${err}</div>
      ${btn('Log in', { kind: 'primary', size: 'lg', type: 'submit' })}<div class="demo">Prototype login: any email with the password <b>admin123</b>.</div></form>`;
    if (r === 'forgot') f = `<form data-form="forgot" novalidate><a class="link" href="#login">‹  Back to login</a>${head('Forgot your password?', 'Enter your admin email and we will send a 6-digit verification code.')}
      ${field('Email*', inp({ id: 'f-email', path: 'auth.email', val: a.email, type: 'email', icon: 'mail' }))}${err}${btn('Send code', { kind: 'primary', size: 'lg', type: 'submit' })}</form>`;
    if (r === 'verify') f = `<form data-form="verify" novalidate><a class="link" href="#forgot">‹  Back</a>${head('Enter verification code', 'We sent a 6-digit code to ' + esc(a.email) + '.')}
      <div class="otp">${a.otp.map((d, i) => `<input id="otp${i}" data-otp="${i}" inputmode="numeric" maxlength="1" value="${esc(d)}" class="${d ? 'filled' : ''}" aria-label="Digit ${i + 1}">`).join('')}</div>${err}
      ${btn('Verify', { kind: 'primary', size: 'lg', type: 'submit' })}<div class="row g8"><span class="sec">Didn't receive the code?</span><button type="button" class="link" data-act="resend">Send again</button></div>
      <div class="demo">Prototype: any 6 digits work.</div></form>`;
    if (r === 'new-password') { const mis = a.np2 && a.np !== a.np2; f = `<form data-form="newpw" novalidate>${head('Set a new password', 'Use at least 8 characters with a number and a symbol.')}
      <div class="col g16">${pwf('New password*', 'auth.np', a.np, 'np', a.np.length >= 8 ? 'ok' : '')}${pwf('Re-type new password*', 'auth.np2', a.np2, 'np2', mis ? 'err' : a.np2 ? 'ok' : '')}${mis ? '<div class="errtext">Passwords do not match</div>' : ''}${err}</div>
      ${btn('Update password', { kind: 'primary', size: 'lg', type: 'submit' })}</form>`; }
    if (r === 'password-updated') f = `<form data-form="backlogin" class="center" novalidate><div class="okcircle">${ic('check', 32)}</div><div class="col g8"><h1>Password updated</h1><p class="sec">You can now log in with your new password.</p></div>${btn('Back to login', { kind: 'primary', size: 'lg', type: 'submit' })}</form>`;
    return `<div class="auth"><div class="brandp"><div class="logochip"><img src="assets/logo.png" alt="Done, consider it done"></div><h2>Every booking, professional and payout in one place.</h2><p>Approve professionals, set prices and commission, follow each job from request to completion, and keep customers safe.</p></div><div class="formp">${f}</div></div>`;
  }

  /* ---------- views ---------- */
  function vDashboard() {
    const k = D.kpis, u = S.ui.dash, months = u.year === '2026' ? D.months : D.months2025, max = Math.max(...months.map(m => m[1]));
    const pend = D.pros.filter(p => p.verification === 'Pending');
    return `<div class="stats">${stat('users', k.customers, 'Total customers')}${stat('briefcase', k.pros, 'Total professionals')}${stat('calendar', k.bookings, 'Total bookings')}${stat('wallet', k.revenue, 'Platform revenue')}
      ${stat('clock', k.active, 'Active jobs')}${stat('check', k.completed, 'Completed jobs')}${stat('card', k.transactions, 'Total transactions')}${stat('shield', pend.length, 'Pending approvals', true)}</div>
    <div class="cols"><div class="card grow">${ch('Bookings', 'Jobs booked per month', select('ui.dash.year', [['2026', 'This year'], ['2025', 'Last year']], u.year))}
      <div class="bars">${months.map(m => `<div class="bar ${m[0] === 'Oct' && u.year === '2026' ? 'on' : ''}"><span class="tip">${m[1]} bookings</span><div class="v" style="height:${Math.round(m[1] / max * 180)}px"></div><span class="t10 muted">${m[0]}</span></div>`).join('')}</div></div>
      <div class="card side">${ch('Service usage', 'Share of bookings by category')}${D.usage.map(s => `<div class="col g8"><div class="row"><span class="m grow">${s[0]}</span><span class="sec">${s[1]}%</span></div><div class="track"><i style="width:${s[1] * 2}%"></i></div></div>`).join('')}</div></div>
    <div class="cols"><div class="col g12 grow"><div class="row"><h3 class="t16 m grow">Recent bookings</h3><a class="link" href="#bookings">View all</a></div>
      ${table([['Job ID', 110], ['Customer'], ['Service', 130], ['Price', 80], ['Status', 120]], D.bookings.slice(0, 4).map(b => `<tr class="click" data-act="go" data-to="booking-${b.id}"><td class="strong">${UP(b.id)}</td><td>${user(cust(b.cust).name, b.service, 32)}</td><td>${b.cat}</td><td class="strong">${money(b.price)}</td><td>${badge(b.status)}</td></tr>`))}</div>
      <div class="card side">${ch('Pending approvals', 'Professionals waiting for review')}${pend.length ? pend.slice(0, 4).map(p => `<div class="row"><div class="grow">${user(p.name, `${p.cat} · ID + ${p.docs.length - 1} certificates`)}</div>${btn('Review', { size: 'sm', act: 'go', d: { to: 'professional-' + p.id } })}</div>`).join('') : '<div class="empty">No professionals are waiting.</div>'}${pend.length > 4 ? `<a class="link" href="#professionals" data-act="set" data-path="ui.pros.tab" data-val="Pending review" data-go="professionals">View all ${pend.length}</a>` : ''}</div></div>`;
  }

  function vCustomers() {
    const u = S.ui.customers, all = D.customers;
    let list = all.filter(c => (u.tab === 'All' || c.status === u.tab) && has(u.q, c.name, c.email, c.phone));
    if (u.sort === 'Name A-Z') list = [...list].sort((a, b) => a.name.localeCompare(b.name)); if (u.sort === 'Most bookings') list = [...list].sort((a, b) => b.bookings - a.bookings);
    S.cache = list; const p = paged(list, 'customers'), n = s => all.filter(c => c.status === s).length;
    return `<div class="toolbar"><div class="grow">${tabs('ui.customers.tab', [['All', `All ${all.length}`], ['Active', `Active ${n('Active')}`], ['Blocked', `Blocked ${n('Blocked')}`]], u.tab)}</div>
      ${search('q-cust', 'ui.customers.q', u.q, 'Search by name, email or phone')}${select('ui.customers.sort', ['Newest', 'Name A-Z', 'Most bookings'], u.sort, 'Sort: ')}${btn('Export', { icon: 'download', act: 'export', d: { kind: 'customers' } })}</div>
    ${table([['Customer'], ['Phone', 180], ['Bookings', 90], ['Joined', 130], ['Status', 110], ['Actions', 100]], p.rows.map(c => `<tr class="click" data-act="go" data-to="customer-${c.id}"><td>${user(c.name, c.email)}</td><td class="nowrap">${c.phone}</td><td class="strong">${c.bookings}</td><td class="nowrap">${c.joined}</td><td>${badge(c.status)}</td>
      <td><div class="row g8">${ibtn('eye', 'go', { to: 'customer-' + c.id }, 'View ' + c.name)}${c.status === 'Active' ? ibtn('ban', 'open', { m: 'blockCustomer', id: c.id }, 'Block ' + c.name, 'red') : ibtn('check', 'unblockCustomer', { id: c.id }, 'Activate ' + c.name, 'green')}</div></td></tr>`), p.foot)}`;
  }

  function vCustomer(id) {
    const c = cust(id); if (!c) return notFound('customers');
    const jobs = D.bookings.filter(b => b.cust === id), cancelled = Math.round(c.bookings * 0.14), p = paged(jobs, 'custJobs', 5);
    return `<a class="back" href="#customers">${ic('chevl')}Customer details</a>
    <div class="cols"><div class="card side g20"><div class="col g12 center">${avatar(c.name, 72)}<div class="col g4"><span class="t18 m">${esc(c.name)}</span><span class="t12 muted">Customer ID  ${UP(c.id)}</span></div>${badge(c.status)}</div>
      <div class="col g12 line">${info('mail', 'Email', c.email)}${info('phone', 'Phone', c.phone)}${info('pin', 'Address', c.address)}${info('calendar', 'Joined', c.joined)}</div>
      <div class="col g8">${btn('Send notification', { icon: 'bell', cls: 'full', act: 'notifyUser', d: { name: c.name } })}${c.status === 'Active' ? btn('Block user', { kind: 'danger', icon: 'ban', cls: 'full', act: 'open', d: { m: 'blockCustomer', id } }) : btn('Activate user', { icon: 'check', cls: 'full', act: 'unblockCustomer', d: { id } })}</div></div>
    <div class="col g24 grow"><div class="stats">${stat('calendar', c.bookings, 'Total bookings')}${stat('check', c.bookings - cancelled, 'Completed')}${stat('x', cancelled, 'Cancelled')}${stat('wallet', money(c.spent), 'Total spent')}</div>
      <div class="col g12"><h3 class="t16 m">Booking history</h3>${table([['Job', 120], ['Service'], ['Professional', 150], ['Price', 70], ['Status', 120]], p.rows.map(b => `<tr class="click" data-act="go" data-to="booking-${b.id}"><td>${two(UP(b.id), b.date)}</td><td>${two(esc(b.service), b.cat)}</td><td>${b.pro ? esc(pro(b.pro).name) : 'Unassigned'}</td><td class="strong">${money(b.price)}</td><td>${badge(b.status)}</td></tr>`), p.foot)}</div></div></div>`;
  }

  function vProfessionals() {
    const u = S.ui.pros, all = D.pros, cnt = { All: all.length, 'Pending review': all.filter(p => p.verification === 'Pending').length, Approved: all.filter(p => p.verification === 'Approved').length, Blocked: all.filter(p => p.status === 'Blocked').length };
    const list = all.filter(p => (u.tab === 'All' || (u.tab === 'Pending review' ? p.verification === 'Pending' : u.tab === 'Approved' ? p.verification === 'Approved' : p.status === 'Blocked')) && (u.cat === 'All' || p.cat === u.cat) && has(u.q, p.name, p.email));
    S.cache = list; const pg = paged(list, 'pros');
    return `<div class="toolbar"><div class="grow">${tabs('ui.pros.tab', Object.keys(cnt).map(k => [k, `${k} ${cnt[k]}`]), u.tab)}</div>${search('q-pros', 'ui.pros.q', u.q, 'Search professionals')}${select('ui.pros.cat', ['All', ...D.CATS], u.cat, 'Category: ')}${btn('Export', { icon: 'download', act: 'export', d: { kind: 'pros' } })}</div>
    ${table([['Professional'], ['Category', 120], ['Jobs done', 90], ['Rating', 80], ['Verification', 120], ['Status', 110], ['Actions', 100]], pg.rows.map(p => `<tr class="click" data-act="go" data-to="professional-${p.id}"><td>${user(p.name, p.email)}</td><td>${p.cat}</td><td class="strong">${p.jobs}</td><td>${rating(p.rating)}</td><td>${badge(p.verification)}</td><td>${badge(p.status)}</td>
      <td><div class="row g8">${ibtn('eye', 'go', { to: 'professional-' + p.id }, 'View ' + p.name)}${p.status === 'Blocked' ? ibtn('check', 'unblockPro', { id: p.id }, 'Unblock ' + p.name, 'green') : ibtn('ban', 'open', { m: 'blockPro', id: p.id }, 'Block ' + p.name, 'red')}</div></td></tr>`), pg.foot)}`;
  }

  function vProfessional(id) {
    const p = pro(id); if (!p) return notFound('professionals');
    const ver = p.verification === 'Pending' ? 'Pending review' : p.verification, okDocs = p.docs.every(d => d.status === 'Verified');
    const decision = p.verification === 'Pending' ? `<div class="col g2 grow"><span class="t16 m">Approve this professional?</span><span class="t12 muted">${okDocs ? 'Approved professionals are activated and can start accepting jobs.' : 'Some documents are still marked To review. You can approve anyway.'}</span></div>${btn('Reject', { kind: 'danger', icon: 'x', act: 'open', d: { m: 'rejectPro', id } })}${btn('Approve professional', { kind: 'primary', icon: 'check', act: 'approvePro', d: { id } })}`
      : p.verification === 'Rejected' ? `<div class="col g2 grow"><span class="t16 m">Application rejected</span><span class="t12 muted">${esc(p.rejectReason || 'The professional was notified and can resubmit documents.')}</span></div>${btn('Reconsider application', { act: 'reconsiderPro', d: { id } })}`
        : `<div class="col g2 grow"><span class="t16 m">${p.status === 'Blocked' ? 'This professional is blocked' : 'Approved professional'}</span><span class="t12 muted">${p.status === 'Blocked' ? 'They cannot log in or receive jobs until you unblock the account.' : 'Block the account if the professional violates platform rules.'}</span></div>${p.status === 'Blocked' ? btn('Unblock professional', { icon: 'check', act: 'unblockPro', d: { id } }) : btn('Block professional', { kind: 'danger', icon: 'ban', act: 'open', d: { m: 'blockPro', id } })}`;
    return `<a class="back" href="#professionals">${ic('chevl')}Professional details</a>
    <div class="cols"><div class="card side g20"><div class="col g12 center">${avatar(p.name, 72)}<div class="col g4"><span class="t18 m">${esc(p.name)}</span><span class="t12 muted">${p.cat} professional  ·  ${UP(p.id)}</span></div><div class="row g8">${badge(ver)}${badge(p.status)}</div></div>
      <div class="col g12 line">${info('', 'Email', p.email)}${info('', 'Phone', p.phone)}${info('', 'Service area', p.area)}${info('', 'Applied', p.applied)}${info('', 'Experience', p.exp)}</div>
      <div class="box row"><div class="col g2 grow"><span class="m">Account active</span><span class="t12 muted">Can receive and accept jobs</span></div>${toggle(p.status === 'Active', 'toggleProActive', { id }, 'Account active')}</div></div>
    <div class="col g24 grow"><div class="card">${ch('ID and certificates', 'Check every document before approving', badge(`${p.docs.length} documents`, 'neutral'))}
        <div class="grid3" style="gap:16px">${p.docs.map((d, i) => `<div class="doc"><div class="pv">${ic('file', 28)}</div><div class="col g2"><span class="m">${esc(d.name)}</span><span class="t12 muted">${esc(d.meta)}</span></div><div class="row"><div class="grow">${badge(d.status)}</div><button type="button" class="link" data-act="open" data-m="doc" data-id="${id}" data-i="${i}">View</button></div></div>`).join('')}</div></div>
      <div class="card">${ch('Profile', 'What customers will see')}<p class="sec">${esc(p.about)}</p><div class="row g8 wrap">${p.skills.map(s => `<span class="chip">${esc(s)}</span>`).join('')}</div>
        <div class="col g12 line">${kv('Completed jobs', p.jobs)}${kv('Rating', p.rating ? rating(p.rating) : `<span class="row g4"><span class="star">${ic('starf', 14)}</span>No ratings yet</span>`)}${kv('Requested rate', `From $${p.rate}/hr`)}</div></div>
      <div class="card"><div class="row wrap g16">${decision}</div></div></div></div>`;
  }

  function vCategories() {
    const u = S.ui.cats, list = D.categories.filter(c => has(u.q, c.name, c.desc)), act = D.categories.filter(c => c.active).length;
    return `<div class="toolbar"><div class="row grow"><span class="t16 m">${D.categories.length} categories</span>${badge(act + ' active', 'success')}${badge(D.categories.length - act + ' hidden', 'neutral')}</div>${search('q-cats', 'ui.cats.q', u.q, 'Search categories')}${btn('Add category', { kind: 'primary', icon: 'plus', act: 'open', d: { m: 'catForm' } })}</div>
    <div class="grid3">${list.map(c => `<div class="card cat"><div class="row"><div class="iw lg">${c.img ? `<img src="${c.img}" alt="" width="24" height="24" style="object-fit:contain">` : ic(c.icon, 22)}</div><span class="grow"></span><span class="t12 muted">${c.active ? 'Active' : 'Hidden'}</span>${toggle(c.active, 'toggleCat', { id: c.id }, c.name + ' visible to customers')}</div>
      <div class="col g4"><span class="t16 m">${esc(c.name)}</span><span class="t12 muted">${esc(c.desc)}</span></div>
      <div class="row g16 line">${[[c.services, 'Services'], [c.pros, 'Professionals'], [c.bookings.toLocaleString(), 'Bookings']].map(s => `<div class="col g2 grow"><span class="t16 m">${s[0]}</span><span class="t12 muted">${s[1]}</span></div>`).join('')}</div>
      <div class="row g8">${btn('Edit', { icon: 'edit', size: 'md', cls: 'grow', act: 'open', d: { m: 'catForm', id: c.id } })}${btn('Remove', { kind: 'danger', icon: 'trash', size: 'md', cls: 'grow', act: 'open', d: { m: 'removeCat', id: c.id } })}</div></div>`).join('')}
      <button type="button" class="addcat" data-act="open" data-m="catForm"><span class="plus">${ic('plus', 22)}</span><span class="t16 m">Add a new category</span><span class="t12 sec">For future services such as painting or gardening</span></button></div>`;
  }

  const priceTabs = cur => `<div class="tabs"><a class="tab ${cur === 'pricing' ? 'on' : ''}" href="#pricing">Service prices</a><a class="tab ${cur === 'promotions' ? 'on' : ''}" href="#promotions">Promotions and discounts</a></div>`;
  const pr$ = (p, v) => v == null || v === '' ? '-' : money(v) + (p.type === 'Hourly' ? '/hr' : '');
  function vPricing() {
    const u = S.ui.pricing, list = D.prices.filter(p => u.cat === 'All' || p.cat === u.cat), pg = paged(list, 'pricing');
    return `<div class="toolbar"><div class="grow">${priceTabs('pricing')}</div>${select('ui.pricing.cat', ['All', ...D.categories.map(c => c.name)], u.cat, 'Category: ')}${btn('Add service price', { kind: 'primary', icon: 'plus', act: 'open', d: { m: 'priceForm' } })}</div>
    ${table([['Service'], ['Type', 110], ['Day', 90], ['Night', 90], ['Est. range', 130], ['', 60]], pg.rows.map(p => `<tr><td>${two(esc(p.service), esc(p.cat))}</td><td>${badge(p.type)}</td><td class="strong">${p.type === 'Estimate' ? '-' : pr$(p, p.day)}</td><td class="strong">${p.type === 'Estimate' ? '-' : pr$(p, p.night)}</td><td>${p.from != null && p.from !== '' ? `${money(p.from)} - ${money(p.to)}` : '-'}</td><td>${ibtn('edit', 'open', { m: 'priceForm', id: p.id }, 'Edit ' + p.service)}</td></tr>`), pg.foot)}`;
  }
  function vPromotions() {
    const u = S.ui.promos, list = D.promos.filter(p => u.status === 'All' || p.status === u.status), pg = paged(list, 'promos');
    return `<div class="toolbar"><div class="grow">${priceTabs('promotions')}</div>${select('ui.promos.status', ['All', 'Active', 'Scheduled', 'Expired'], u.status, 'Status: ')}${btn('Create promotion', { kind: 'primary', icon: 'plus', act: 'open', d: { m: 'promoForm' } })}</div>
    ${table([['Promotion'], ['Discount', 100], ['Applies to', 120], ['Period', 150], ['Used', 110], ['Status', 120], ['', 60]], pg.rows.map(p => `<tr><td>${two(esc(p.name), esc(p.code))}</td><td class="strong">${p.type === 'Percentage' ? p.value + '% off' : '$' + p.value + ' off'}</td><td>${esc(p.applies)}</td><td class="nowrap">${esc(p.start)} - ${esc(p.end)}</td><td>${p.used} / ${Number(p.limit).toLocaleString()}</td><td>${badge(p.status)}</td><td>${ibtn('edit', 'open', { m: 'promoForm', id: p.id }, 'Edit ' + p.name)}</td></tr>`), pg.foot)}`;
  }

  function vBookings() {
    const u = S.ui.bookings, all = D.bookings, ST = ['Pending', 'Upcoming', 'Active', 'Completed', 'Cancelled'], day = b => parseInt(b.date.slice(4, 6));
    const list = all.filter(b => (u.tab === 'All' || b.status === u.tab) && (u.service === 'All' || b.cat === u.service) && (u.resp === 'Any' || b.resp === u.resp) && (u.date === 'all' || (u.date === 'week' ? day(b) >= 19 : day(b) < 19)) && has(u.q, b.id, cust(b.cust).name, b.pro && pro(b.pro).name, b.service));
    S.cache = list; const pg = paged(list, 'bookings');
    return `<div class="toolbar"><div class="grow">${tabs('ui.bookings.tab', [['All', `All ${all.length}`], ...ST.map(s => [s, `${s} ${all.filter(b => b.status === s).length}`])], u.tab)}</div>${btn('Export', { icon: 'download', act: 'export', d: { kind: 'bookings' } })}</div>
    <div class="toolbar">${search('q-book', 'ui.bookings.q', u.q, 'Search by Job ID, customer or professional')}${select('ui.bookings.service', ['All', ...D.CATS], u.service, 'Service: ')}${select('ui.bookings.date', [['all', 'Oct 01 - Oct 31, 2026'], ['week', 'This week (Oct 19 - 26)'], ['early', 'Oct 01 - Oct 18']], u.date)}${select('ui.bookings.resp', ['Any', 'Accepted', 'Waiting', 'Declined'], u.resp, 'Accepted: ')}</div>
    ${table([['Job ID', 100], ['Customer', 140], ['Professional', 140], ['Service'], ['Date and time', 120], ['Price', 70], ['Pro response', 110], ['Status', 110], ['', 50]], pg.rows.map(b => `<tr class="click" data-act="go" data-to="booking-${b.id}"><td class="strong">${UP(b.id)}</td><td>${esc(cust(b.cust).name)}</td><td>${b.pro ? esc(pro(b.pro).name) : 'Unassigned'}</td><td>${two(esc(b.service), b.cat)}</td><td>${two(b.date, b.time)}</td><td class="strong">${money(b.price)}</td><td>${badge(b.resp)}</td><td>${badge(b.status)}</td><td>${ibtn('eye', 'go', { to: 'booking-' + b.id }, 'View ' + UP(b.id))}</td></tr>`), pg.foot)}`;
  }

  function vBooking(id) {
    const b = job(id); if (!b) return notFound('bookings');
    const c = cust(b.cust), p = b.pro && pro(b.pro), done = { Pending: 1, Upcoming: 2, Active: 2, Completed: 4, Cancelled: 1 }[b.status], now = b.status === 'Active' ? 2 : b.status === 'Pending' ? 1 : -1;
    const steps = [['Requested', b.date.slice(0, 6) + ', ' + b.time], ['Accepted by professional', p ? 'Accepted' : b.resp === 'Declined' ? 'Declined, reassigning' : 'Waiting for response'], ['In progress', b.status === 'Active' ? 'Started' : done > 2 ? 'Done' : 'Not started'], ['Completed', b.status === 'Completed' ? 'Done' : b.status === 'Cancelled' ? 'Cancelled' : 'Pending']];
    const night = /PM/.test(b.time) && parseInt(b.time) >= 8 && parseInt(b.time) !== 12, com = b.paid === 'Refunded' ? 0 : b.price * rate();
    const it = (icon, k, v) => `<div class="row top"><div class="iw">${ic(icon, 16)}</div><div class="col g2 grow"><span class="t12 muted">${k}</span><span class="m">${esc(v)}</span></div></div>`;
    return `<a class="back" href="#bookings">${ic('chevl')}Booking Details</a>
    <div class="cols"><div class="col g24 grow"><div class="card"><div class="row top"><div class="col g4 grow"><span class="t12 m muted">Job ID  ${UP(b.id)}</span><span class="t20 m">${esc(b.service)}</span></div>${badge(b.cat, 'brand')}${badge(b.status)}</div><p class="sec">${esc(b.desc)}</p>
        <div class="steps line" style="padding-top:20px">${steps.map((s, i) => `<div class="step ${i < done ? 'done' : i === now ? 'now' : 'todo'}"><div class="dotrow"><span class="d">${i < done ? ic('check', 12) : ''}</span><span class="ln"></span></div><div class="n m">${s[0]}</div><div class="t12 muted">${s[1]}</div></div>`).join('')}</div></div>
      <div class="card">${ch('Job details')}<div class="grid2" style="gap:16px 24px">${it('zap', 'Service type', b.service)}${it('tag', 'Price', money(b.price) + ' fixed')}${it('calendar', 'Date and time', `${b.date} · ${b.time} (${night ? 'nighttime' : 'daytime'})`)}${it('clock', 'Estimated duration', '1 hr 30 min')}${it('pin', 'Address', c.address)}${it('msg', 'Customer note', b.desc)}</div></div></div>
    <div class="col g24 side"><div class="card">${ch('Customer', '', `<a class="link" href="#customer-${c.id}">View profile</a>`)}${user(c.name, c.email, 40)}<div class="col g12 line">${kv('Phone', c.phone)}${kv('Bookings', c.bookings)}</div></div>
      <div class="card">${ch('Professional', '', badge(b.resp))}${p ? `${user(p.name, `${p.cat} · ${p.rating ? p.rating.toFixed(1) + ' rating' : 'New'} · ${p.jobs} jobs`, 40)}<div class="col g12 line">${kv('Accepted on', b.date.slice(0, 6) + ', ' + b.time)}${kv('Phone', p.phone)}${kv('Profile', `<a class="link" href="#professional-${p.id}">View profile</a>`)}</div>` : `<p class="sec">${b.resp === 'Declined' ? 'The assigned professional declined. The job is being offered to other professionals.' : 'No professional has accepted this job yet.'}</p>`}</div>
      <div class="card">${ch('Payment', '', b.paid ? badge(b.paid) : badge('Not charged', 'neutral'))}${kv('Customer paid', b.paid ? money2(b.price) : '-')}${kv(`Platform commission (${D.commission}%)`, b.paid ? '- ' + money2(com) : '-')}<div class="col g12 line">${kv('Professional earns', b.paid ? money2(b.paid === 'Refunded' ? 0 : b.price - com) : '-')}${kv('Transaction ID', b.paid ? 'TXN-' + b.id.slice(4) : '-')}${kv('Method', 'Stripe')}</div></div></div></div>`;
  }

  const payTabs = cur => `<div class="tabs"><a class="tab ${cur === 'payments' ? 'on' : ''}" href="#payments">Customer payments</a><a class="tab ${cur === 'payouts' ? 'on' : ''}" href="#payouts">Professional payouts</a></div>`;
  const pendingPayout = () => D.pros.filter(p => p.request === 'Requested').reduce((s, p) => s + balance(p), 0);
  function vPayments() {
    const u = S.ui.pay, tx = D.bookings.filter(b => b.paid); S.cache = tx; const pg = paged(tx, 'pay'), total = 184600;
    return `<div class="stats">${stat('card', money(total), 'Total transactions')}${stat('percent', money(total * rate()), 'Platform commission')}${stat('briefcase', money(total * (1 - rate())), 'Professional earnings')}${stat('wallet', money(pendingPayout()), 'Pending payouts')}</div>
    <form class="card hz" data-form="commission" novalidate><div class="iw lg">${ic('percent', 22)}</div><div class="col g2 grow" style="min-width:220px"><span class="t16 m">Platform commission percentage</span><span class="t12 muted">Deducted automatically from every completed job before the professional is paid. Example: $120 job, you keep ${money2(120 * rate())}, professional earns ${money2(120 * (1 - rate()))}.</span>${u.err ? `<span class="errtext">${esc(u.err)}</span>` : ''}</div>
      <label class="input" style="width:110px;height:44px"><input id="f-rate" data-bind="ui.pay.rate" value="${esc(u.rate)}" inputmode="decimal" aria-label="Commission percentage" style="font-size:16px;font-weight:500"><span class="muted">%</span></label>${btn('Save', { kind: 'primary', type: 'submit' })}</form>
    <div class="toolbar"><div class="grow">${payTabs('payments')}</div>${select('ui.pay.month', ['Oct 2026'], 'Oct 2026')}${btn('Export', { icon: 'download', act: 'export', d: { kind: 'payments' } })}</div>
    ${table([['Transaction', 110], ['Job ID', 100], ['Customer'], ['Professional'], ['Paid', 90], ['Commission', 100], ['Pro earns', 100], ['Status', 110], ['Date', 110]], pg.rows.map(b => { const z = b.paid === 'Refunded', com = z ? 0 : b.price * rate(); return `<tr class="click" data-act="go" data-to="booking-${b.id}"><td class="strong">TXN-${b.id.slice(4)}</td><td>${UP(b.id)}</td><td>${esc(cust(b.cust).name)}</td><td>${b.pro ? esc(pro(b.pro).name) : '-'}</td><td class="strong">${money2(b.price)}</td><td>${money2(com)}</td><td>${money2(z ? 0 : b.price - com)}</td><td>${badge(b.paid)}</td><td class="nowrap">${b.date.slice(0, 6)}, ${b.time}</td></tr>`; }), pg.foot)}`;
  }
  function vPayouts() {
    const list = D.pros.filter(p => p.jobs > 0).sort((a, b) => (b.request === 'Requested') - (a.request === 'Requested')); S.cache = list; const pg = paged(list, 'payouts');
    return `<div class="stats">${stat('wallet', money(pendingPayout()), 'Pending payout requests')}${stat('check', money(38260 + S.ui.payouts.paidExtra), 'Paid out this month')}${stat('briefcase', money(list.reduce((s, p) => s + balance(p), 0)), 'Unpaid balances')}${stat('calendar', 'Oct 31', 'Next payout run')}</div>
    <div class="toolbar"><div class="grow">${payTabs('payouts')}</div>${select('ui.pay.month', ['Oct 2026'], 'Oct 2026')}${btn('Export', { icon: 'download', act: 'export', d: { kind: 'payouts' } })}</div>
    ${table([['Professional'], ['Jobs', 70], ['Earned', 100], ['Commission', 100], ['Paid out', 100], ['Balance', 90], ['Payout', 120], ['', 110]], pg.rows.map(p => `<tr><td>${user(p.name, p.cat)}</td><td>${p.jobs}</td><td class="strong">${money(p.earned)}</td><td>${money(p.earned * rate())}</td><td>${money(p.paid)}</td><td class="strong">${money(balance(p))}</td><td>${badge(p.request === 'None' ? 'No request' : p.request)}</td><td>${p.request === 'Requested' ? btn('Pay out', { kind: 'primary', size: 'sm', act: 'open', d: { m: 'payout', id: p.id } }) : btn('Details', { size: 'sm', act: 'open', d: { m: 'payoutDetails', id: p.id } })}</td></tr>`), pg.foot)}`;
  }

  function vReviews() {
    const u = S.ui.reviews, live = D.reviews.filter(r => !r.removed), fl = live.filter(r => r.flagged), rm = D.reviews.filter(r => r.removed);
    const base = u.tab === 'Removed' ? rm : u.tab === 'Flagged' ? fl : live;
    const list = base.filter(r => (u.stars === 'All' || r.stars === +u.stars) && (u.cat === 'All' || r.cat === u.cat) && has(u.q, r.cust, r.pro, r.text, r.job)), pg = paged(list, 'reviews', 4);
    const avg = live.length ? (live.reduce((s, r) => s + r.stars, 0) / live.length).toFixed(1) : '-';
    const top = D.pros.filter(p => p.rating).sort((a, b) => b.rating - a.rating).slice(0, 5);
    return `<div class="stats">${stat('star', avg, 'Average rating')}${stat('msg', live.length, 'Total reviews')}${stat('flag', fl.length, 'Flagged for review', fl.length > 0)}${stat('trash', rm.length, 'Removed')}</div>
    <div class="toolbar"><div class="grow">${tabs('ui.reviews.tab', [['All', `All ${live.length}`], ['Flagged', `Flagged ${fl.length}`], ['Removed', `Removed ${rm.length}`]], u.tab)}</div>${search('q-rev', 'ui.reviews.q', u.q, 'Search reviews')}${select('ui.reviews.stars', ['All', '5', '4', '3', '2', '1'], u.stars, 'Rating: ')}${select('ui.reviews.cat', ['All', ...D.CATS], u.cat, 'Category: ')}</div>
    <div class="cols"><div class="tablewrap grow" style="border:0">${pg.rows.length ? pg.rows.map(r => `<div class="review ${r.flagged && !r.removed ? 'flag' : ''}"><div class="row"><div class="grow">${user(r.cust, `${r.date}  ·  ${UP(r.job)}`)}</div>${r.flagged && !r.removed ? badge('Flagged') : ''}${r.removed ? badge('Removed', 'error') : ''}${stars(r.stars)}</div><p class="sec">${esc(r.text)}</p>
        <div class="row g8"><span class="row g8 t12 muted grow">${ic('briefcase', 14)}Professional: ${esc(r.pro)}</span>${r.removed ? btn('Restore', { size: 'sm', act: 'restoreReview', d: { id: r.id } }) : `${r.flagged ? btn('Keep review', { size: 'sm', act: 'keepReview', d: { id: r.id } }) : ''}${btn('Remove', { kind: 'danger', icon: 'trash', size: 'sm', act: 'removeReview', d: { id: r.id } })}`}</div></div>`).join('') : '<div class="empty">No reviews here.</div>'}${pg.foot}</div>
      <div class="card side w340">${ch('Professional ratings', 'Average rating and review count')}${top.map(p => `<a class="row" href="#professional-${p.id}"><div class="grow">${user(p.name, p.cat)}</div><div class="col g2" style="align-items:flex-end">${rating(p.rating)}<span class="t12 muted">${p.jobs} reviews</span></div></a>`).join('')}</div></div>`;
  }

  function vNotifications() {
    const u = S.ui.notif, list = D.notifications.filter(n => u.filter === 'All types' || n.type === u.filter), pg = paged(list, 'notif');
    return `<div class="cols"><form class="card side w400" data-form="notif" novalidate>${ch('Send notification', 'Delivered as a push and in-app notification')}
      <div class="field"><span class="label">Send to</span>${tabs('ui.notif.audience', [['Everyone', 'All'], 'Customers', 'Professionals', 'One user'], u.audience)}</div>
      ${u.audience === 'One user' ? field('User name or email', inp({ id: 'f-nuser', path: 'ui.notif.user', val: u.user, icon: 'user', ph: 'Daniel Brooks' })) : ''}
      ${field('Type', fsel('ui.notif.type', ['Booking update', 'Account update', 'Announcement'], u.type))}${field('Title', inp({ id: 'f-ntitle', path: 'ui.notif.title', val: u.title, live: true, ph: 'Notification title' }))}${field('Message', area({ id: 'f-nmsg', path: 'ui.notif.msg', val: u.msg, live: true, ph: 'Write the message users will see' }))}
      <div class="box col g8"><span class="t10 m muted">PREVIEW</span><div class="row top"><div class="iw" style="width:32px;height:32px;background:var(--brand);color:var(--on-brand)">${ic('bell', 16)}</div><div class="col g2 grow"><span class="m">${esc(u.title || 'Notification title')}</span><span class="t12 sec">${esc(u.msg || 'Your message appears here.')}</span></div></div></div>
      ${u.err ? `<div class="errtext" role="alert">${esc(u.err)}</div>` : ''}<div class="row">${btn('Schedule', { icon: 'clock', cls: 'grow', act: 'sendNotif', d: { mode: 'Scheduled' } })}${btn('Send now', { kind: 'primary', icon: 'send', cls: 'grow', type: 'submit' })}</div></form>
    <div class="col g12 grow"><div class="row"><h3 class="t16 m grow">Sent notifications</h3>${select('ui.notif.filter', ['All types', 'Booking update', 'Account update', 'Announcement'], u.filter)}</div>
      ${table([['Notification'], ['Audience', 120], ['Date', 140], ['Status', 110]], pg.rows.map(n => `<tr><td>${two(esc(n.title), esc(n.msg))}</td><td>${esc(n.audience)}</td><td class="nowrap">${esc(n.date)}</td><td>${badge(n.status)}</td></tr>`), pg.foot)}</div></div>`;
  }

  function vReports() {
    const u = S.ui.rep, r = D.reports[u.range], max = Math.max(...r.bars.map(b => b[1])), [pay, ref, earn, out] = r.pay, sc = r.scale;
    const topPros = D.pros.filter(p => p.jobs).sort((a, b) => b.jobs - a.jobs).slice(0, 4);
    return `<div class="toolbar"><div class="grow">${tabs('ui.rep.range', [['week', 'This week'], ['month', 'This month'], ['year', 'This year']], u.range)}</div><span class="select" style="padding:0 12px">${r.label}</span>${btn('Export PDF', { icon: 'download', act: 'print' })}${btn('Export CSV', { kind: 'primary', icon: 'download', act: 'export', d: { kind: 'report' } })}</div>
    <div class="stats">${['calendar', 'wallet', 'users', 'briefcase'].map((i, n) => stat(i, n === 1 ? money(pay * rate()) : r.stats[n], r.subs[n])).join('')}</div>
    <div class="cols"><div class="card grow">${ch('Booking statistics', 'Completed vs cancelled')}<div class="row g16 legend t12 sec"><span class="row g8"><i style="background:var(--brand)"></i>Completed</span><span class="row g8"><i style="background:var(--neutral-300)"></i>Cancelled</span></div>
        <div class="bars pairs" style="height:210px">${r.bars.map(b => `<div class="bar"><span class="tip">${b[1]} completed, ${b[2]} cancelled</span><div class="pair"><i style="height:${Math.round(b[1] / max * 164)}px;background:var(--brand)"></i><i style="height:${Math.max(4, Math.round(b[2] / max * 164))}px;background:var(--neutral-300)"></i></div><span class="t10 muted">${b[0]}</span></div>`).join('')}</div></div>
      <div class="card side">${ch('Transaction and revenue summary', r.label)}${kv('Customer payments', money2(pay))}${kv('Refunds', '- ' + money2(ref))}${kv('Professional earnings', money2(pay * (1 - rate()) - ref))}${kv('Paid out to professionals', money2(out))}<div class="line">${kv(`Platform commission (${D.commission}%)`, `<span class="t18" style="color:var(--brand-700)">${money2(pay * rate())}</span>`)}</div></div></div>
    <div class="grid3"><div class="card">${ch('Service usage', 'Bookings by category')}${D.usage.map(s => `<div class="col g8"><div class="row"><span class="m grow">${s[0]}</span><span class="t12 sec">${Math.round(s[2] * sc)} · ${s[1]}%</span></div><div class="track"><i style="width:${s[1] * 2}%"></i></div></div>`).join('')}</div>
      <div class="card">${ch('Professional activity', 'Most jobs completed')}${topPros.map(p => `<a class="row" href="#professional-${p.id}"><div class="grow">${user(p.name, null, 32)}</div><span class="m">${Math.max(1, Math.round(p.jobs * r.share))} jobs</span></a>`).join('')}</div>
      <div class="card">${ch('Customer activity', 'Who booked in this period')}${kv('Customers who booked', r.booked.toLocaleString())}${kv('New customers', r.stats[2])}${kv('Returning customers', (r.booked - parseInt(r.stats[2])).toLocaleString())}${kv('Average bookings per customer', '1.4')}${kv('Blocked accounts', D.customers.filter(c => c.status === 'Blocked').length)}</div></div>`;
  }

  function vAppReports() {
    const u = S.ui.appReports, all = D.appReports, list = all.filter(r => (u.tab === 'All' || r.status === u.tab) && (u.from === 'Everyone' || r.role + 's' === u.from) && has(u.q, r.id, r.from, r.subject, r.msg)), pg = paged(list, 'appReports');
    return `<div class="toolbar"><div class="grow">${tabs('ui.appReports.tab', [['All', `All ${all.length}`], ...['Open', 'Replied', 'Closed'].map(s => [s, `${s} ${all.filter(r => r.status === s).length}`])], u.tab)}</div>${search('q-rep', 'ui.appReports.q', u.q, 'Search reports')}${select('ui.appReports.from', ['Everyone', 'Customers', 'Professionals'], u.from, 'From: ')}</div>
    ${table([['Report', 100], ['From', 200], ['Subject'], ['Category', 130], ['Date', 120], ['Status', 100], ['', 50]], pg.rows.map(r => `<tr class="click" data-act="go" data-to="report-${r.id}"><td class="strong">${UP(r.id)}</td><td>${user(r.from, r.role, 32)}</td><td>${two(esc(r.subject), esc(r.msg.slice(0, 44)) + '...')}</td><td>${esc(r.cat)}</td><td class="nowrap">${r.date}</td><td>${badge(r.status)}</td><td>${ibtn('eye', 'go', { to: 'report-' + r.id }, 'Open ' + UP(r.id))}</td></tr>`), pg.foot)}`;
  }

  function vReport(id) {
    const i = D.appReports.findIndex(r => r.id === id), r = D.appReports[i]; if (!r) return notFound('app-reports');
    const who = r.role === 'Customer' ? D.customers.find(c => c.name === r.from) : D.pros.find(p => p.name === r.from), b = r.job && job(r.job), first = r.from.split(' ')[0];
    const bubble = (name, role, time, text, mine, seen) => `<div class="bubble ${mine ? 'mine' : ''}"><div class="row"><div class="grow">${mine ? `<div class="row">${avatar(D.admin.name, 32, D.admin.photo)}<div class="col g2"><span class="m">${esc(name)}</span><span class="t12 muted">${role}</span></div></div>` : user(name, role, 32)}</div><span class="t12 muted">${time}</span></div><p class="sec">${esc(text)}</p>${mine ? `<span class="row g8 t12" style="color:${seen ? 'var(--success-fg)' : 'var(--text-muted)'}">${ic('check', 14)}${seen ? `Seen by ${esc(first)} · ${seen}` : `Delivered, not seen by ${esc(first)} yet`}</span>` : ''}</div>`;
    return `<a class="back" href="#app-reports">${ic('chevl')}Report Details</a>
    <div class="cols"><div class="col g24 grow"><div class="card"><div class="row top"><div class="col g4 grow"><span class="t12 m muted">${UP(r.id)}  ·  ${esc(r.cat)}  ·  ${r.date}, ${r.time}</span><span class="t20 m">${esc(r.subject)}</span></div>${badge(r.status)}</div>
        ${bubble(r.from, r.role, `${r.date.slice(0, 6)}, ${r.time}`, r.msg)}${r.replies.map(x => bubble(D.admin.name, 'Your response · visible to the user in the app', x.time, x.text, true, x.seen)).join('')}</div>
      <form class="card" data-form="reply" data-id="${id}" novalidate>${ch('Write a response', 'The user receives a notification and sees your response under their report')}${area({ id: 'f-reply', path: `ui.report.draft.${id}`, val: S.ui.report.draft[id] || '', ph: `Type your response to ${first}...`, rows: 5 })}${S.ui.report.err ? `<div class="errtext" role="alert">${esc(S.ui.report.err)}</div>` : ''}
        <div class="row end">${r.status === 'Closed' ? btn('Reopen report', { act: 'reportStatus', d: { id, s: 'Open' } }) : btn('Mark as closed', { icon: 'check', act: 'reportStatus', d: { id, s: 'Closed' } })}${btn('Send response', { kind: 'primary', icon: 'send', type: 'submit' })}</div></form></div>
    <div class="col g24 side w340"><div class="card">${ch('Reported by', '', who ? `<a class="link" href="#${r.role === 'Customer' ? 'customer' : 'professional'}-${who.id}">View profile</a>` : '')}${user(r.from, r.role + (who ? ` · ${r.role === 'Customer' ? who.bookings + ' bookings' : who.jobs + ' jobs'}` : ''), 40)}${who ? `<div class="col g12 line">${kv('Email', esc(who.email))}${kv('Phone', who.phone)}</div>` : ''}</div>
      ${b ? `<div class="card">${ch('Related booking', '', `<a class="link" href="#booking-${b.id}">Open job</a>`)}${kv('Job ID', UP(b.id))}${kv('Service', esc(b.service))}${kv('Professional', b.pro ? esc(pro(b.pro).name) : 'Unassigned')}${kv('Status', badge(b.status))}</div>` : ''}
      <div class="card">${ch('Report status')}${field('Status', fsel(`db.appReports.${i}.status`, ['Open', 'Replied', 'Closed'], r.status, true))}${field('Category', fsel(`db.appReports.${i}.cat`, ['Service issue', 'Payment', 'User behaviour', 'App problem', 'Pricing'], r.cat, true))}</div></div></div>`;
  }

  const SN = [['account-profile', 'My profile', 'user'], ['account-login', 'Login and password', 'lock'], ['content-about', 'About Us', 'file'], ['content-terms', 'Terms and Conditions', 'file'], ['content-privacy', 'Privacy Policy', 'shield']];
  function vSettings(route) {
    const a = D.admin; let main = '';
    if (route === 'account-profile') {
      const f = S.ui.profile || (S.ui.profile = { name: a.name, email: a.email, phone: a.phone, err: '' });
      main = `<form class="card g20" data-form="profile" novalidate>${ch('My profile', 'This information identifies you as the platform owner')}
        <div class="row g16 wrap">${avatar(a.name, 72, a.photo)}<div class="col g4 grow"><span class="m">Profile photo</span><span class="t12 muted">JPG or PNG, up to 2 MB</span></div><label class="btn secondary md" style="cursor:pointer">${ic('arrow', 16)}Upload new<input type="file" accept="image/png,image/jpeg" data-file="photo" hidden></label>${btn('Remove', { kind: 'danger', icon: 'trash', size: 'md', act: 'removePhoto' })}</div>
        <div class="grid2">${field('Full name', inp({ id: 'f-pname', path: 'ui.profile.name', val: f.name, icon: 'user' }))}${field('Role', inp({ val: a.role, cls: 'readonly', attrs: 'readonly' }))}${field('Email (used to log in)', inp({ id: 'f-pemail', path: 'ui.profile.email', val: f.email, icon: 'mail', type: 'email' }))}${field('Phone', inp({ id: 'f-pphone', path: 'ui.profile.phone', val: f.phone, icon: 'phone' }))}</div>
        ${f.err ? `<div class="errtext" role="alert">${esc(f.err)}</div>` : ''}<div class="row end">${btn('Cancel', { act: 'resetProfile' })}${btn('Save changes', { kind: 'primary', type: 'submit' })}</div></form>
      <div class="card">${ch('Preferences', 'How you are notified about platform activity')}${[['New professional applications', 'Email me when a professional submits documents for review'], ['New app reports', 'Email me when a customer or professional sends a report'], ['Payout requests', 'Email me when a professional requests a payout']].map((p, i) => `<div class="row"><div class="col g2 grow"><span class="m">${p[0]}</span><span class="t12 muted">${p[1]}</span></div>${toggle(a.prefs[i], 'togglePref', { i }, p[0])}</div>`).join('')}</div>`;
    } else if (route === 'account-login') {
      const f = S.ui.login, sh = S.auth.show, pw = (label, k, cls = '') => field(label, inp({ id: 'f-' + k, path: 'ui.login.' + k, val: f[k], type: sh[k] ? 'text' : 'password', icon: 'lock', live: true, cls, trail: `<button type="button" data-act="toggleShow" data-k="${k}" aria-label="Show password">${ic('eye')}</button>` }));
      const rq = [['At least 8 characters', f.np.length >= 8], ['One number', /\d/.test(f.np)], ['One symbol', /[^A-Za-z0-9]/.test(f.np)]];
      main = `<form class="card" data-form="email" novalidate>${ch('Login email', 'You log in to the admin panel with this email and your password')}<div class="row" style="align-items:flex-end">${field('Email', inp({ id: 'f-lemail', path: 'ui.login.email', val: f.email, icon: 'mail', type: 'email' }))}${btn('Update email', { size: 'lg', type: 'submit' })}</div>${f.emailErr ? `<div class="errtext" role="alert">${esc(f.emailErr)}</div>` : ''}</form>
      <form class="card" data-form="password" novalidate>${ch('Change password', 'Choose a password you have not used before')}${pw('Current password', 'cur')}<div class="grid2">${pw('New password', 'np', f.np && rq.every(r => r[1]) ? 'ok' : '')}${pw('Confirm new password', 'np2', f.np2 ? (f.np2 === f.np ? 'ok' : 'err') : '')}</div>
        <div class="row g16 wrap">${rq.map(r => `<span class="row g8 t12" style="color:${r[1] ? 'var(--success-fg)' : 'var(--text-muted)'}">${ic(r[1] ? 'check' : 'x', 14)}${r[0]}</span>`).join('')}</div>${f.err ? `<div class="errtext" role="alert">${esc(f.err)}</div>` : ''}
        <div class="row wrap"><span class="grow sec">Forgot your current password? <button type="button" class="link" data-act="resetByEmail">Reset it by email</button></span>${btn('Update password', { kind: 'primary', type: 'submit' })}</div></form>
      <div class="card hz"><div class="col g2 grow"><span class="t16 m">Log out of all devices</span><span class="t12 muted">Last login: Oct 24, 2026 at 9:02 AM from Brooklyn, NY</span></div>${btn('Log out everywhere', { kind: 'danger', icon: 'logout', act: 'logout' })}</div>`;
    } else {
      const k = route.slice(8), pg = D.pages[k], dirty = S.ui.editor.dirty[k];
      main = `<div class="card">${ch(pg.title, pg.sub, `<span id="pubbadge">${badge(dirty ? 'Unsaved changes' : 'Published')}</span>`)}
        <div class="editor"><div class="tools" role="toolbar" aria-label="Formatting">${[['formatBlock:h2', 'Heading'], ['formatBlock:p', 'Text'], ['bold', 'B'], ['italic', 'I'], ['underline', 'U'], ['insertUnorderedList', 'List']].map(c => `<button type="button" data-cmd="${c[0]}">${c[1]}</button>`).join('')}<button type="button" data-act="linkOpen">Link</button></div>
        <div class="body" id="editor" contenteditable="true" data-k="${k}" role="textbox" aria-multiline="true" aria-label="${pg.title} content">${S.ui.editor.draft[k] ?? pg.html}</div></div>
        <div class="row wrap"><span class="t12 muted grow">Last updated ${pg.updated}  ·  Shown in the mobile app under Account</span>${btn('Preview', { icon: 'eye', act: 'open', d: { m: 'preview', k } })}${btn('Save and publish', { kind: 'primary', act: 'publishPage', d: { k } })}</div></div>`;
    }
    return `<div class="cols"><div class="card side w260" style="padding:12px;gap:4px">${SN.map(s => `<a class="snav ${s[0] === route ? 'on' : ''}" href="#${s[0]}">${ic(s[2])}<span>${s[1]}</span>${s[0] === route ? ic('chevr', 16) : ''}</a>`).join('')}</div><div class="col g24 grow">${main}</div></div>`;
  }
  const notFound = back => `<div class="card center"><p class="sec">This record no longer exists.</p><a class="link" href="#${back}">Go back</a></div>`;

  /* ---------- modals ---------- */
  const modal = (title, body, cls = '', sub = '') => `<div class="overlay" data-overlay><div class="modal ${cls}" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="row top"><div class="col g2 grow"><h2>${esc(title)}</h2>${sub ? `<span class="t12 muted">${esc(sub)}</span>` : ''}</div><button type="button" class="muted" data-act="closeModal" aria-label="Close">${ic('x', 20)}</button></div>${body}</div></div>`;
  const ferr = () => S.form.err ? `<div class="errtext" role="alert">${esc(S.form.err)}</div>` : '';
  const foot = (label, kind = 'primary', icon) => `<div class="row">${btn('Cancel', { cls: 'grow', act: 'closeModal' })}${btn(label, { kind, icon, cls: 'grow', type: 'submit' })}</div>`;
  const M = {
    blockCustomer: m => { const c = cust(m.id); return modal('Block this customer?', `<form class="col g20" data-form="blockCustomer" novalidate><div class="box">${user(c.name, `${c.email} · ${c.bookings} bookings`)}</div><p class="sec">${esc(c.name.split(' ')[0])} will be signed out and will not be able to log in or book services until you activate the account again. Active jobs are not cancelled automatically.</p>${field('Note for the customer', area({ id: 'f-note', path: 'form.note', val: S.form.note, ph: 'Why is this account being blocked?' }))}${foot('Block user', 'danger', 'ban')}</form>`); },
    blockPro: m => { const p = pro(m.id); return modal('Block this professional ?', `<form class="col g20" data-form="blockPro" novalidate><div class="box">${user(p.name, `${p.email} · ${p.jobs} Jobs Completed`)}</div>${field('Note for the professional', area({ id: 'f-note', path: 'form.note', val: S.form.note, ph: 'Why is this account being blocked?' }))}${foot('Block user', 'danger')}</form>`); },
    rejectPro: m => { const p = pro(m.id); return modal('Reject this application?', `<form class="col g20" data-form="rejectPro" novalidate><div class="box">${user(p.name, `${p.cat} · applied ${p.applied}`)}</div>${field('Reason shown to the professional*', area({ id: 'f-reason', path: 'form.reason', val: S.form.reason, ph: 'For example: the license photo is unreadable, please upload it again.' }))}${ferr()}${foot('Reject application', 'danger', 'x')}</form>`); },
    doc: m => { const p = pro(m.id), d = p.docs[m.i]; return modal(d.name, `<div class="doc" style="border:0;padding:0"><div class="pv" style="height:240px">${ic('file', 48)}</div><div class="row"><div class="col g2 grow"><span class="m">${esc(p.name)}</span><span class="t12 muted">${esc(d.meta)}</span></div>${badge(d.status)}</div></div><p class="t12 muted">Document preview is a placeholder in this prototype.</p><div class="row">${btn('Ask to resubmit', { kind: 'danger', cls: 'grow', act: 'docStatus', d: { id: m.id, i: m.i, s: 'Resubmit' } })}${btn('Mark as verified', { kind: 'primary', icon: 'check', cls: 'grow', act: 'docStatus', d: { id: m.id, i: m.i, s: 'Verified' } })}</div>`, 'w520'); },
    catForm: m => { const f = S.form; return modal(m.id ? 'Edit service category' : 'Add service category', `<form class="col g20" data-form="cat" novalidate>${field('Category name*', inp({ id: 'f-cname', path: 'form.name', val: f.name, ph: 'Painting' }))}${field('Short description', inp({ id: 'f-cdesc', path: 'form.desc', val: f.desc, ph: 'Interior and exterior wall painting' }))}
      <div class="field"><span class="label">Icon</span><label class="upload">${ic('image', 16)}<span>${esc(f.iconName || 'Upload Icon')}</span><input type="file" accept="image/*" data-file="catIcon" hidden></label></div>
      <div class="field"><span class="label">Default pricing type</span>${tabs('form.pricing', ['Fixed price', 'Hourly', 'Estimated range'], f.pricing)}</div>
      <div class="box row"><div class="col g2 grow"><span class="m">Visible to customers</span><span class="t12 muted">Turn off to prepare the category before launch</span></div>${toggle(f.active, 'set', { path: 'form.active', val: f.active ? '' : '1' }, 'Visible to customers')}</div>${ferr()}${foot(m.id ? 'Save category' : 'Add category', 'primary', m.id ? '' : 'plus')}</form>`, 'w520'); },
    removeCat: m => { const c = D.categories.find(x => x.id === m.id); return modal(`Remove ${c.name}?`, `<p class="sec">Customers will no longer be able to book ${esc(c.name)} services. ${c.pros ? `${c.pros} professionals and ` : ''}${c.services} service prices in this category are kept but hidden. Existing bookings are not affected.</p><div class="row">${btn('Cancel', { cls: 'grow', act: 'closeModal' })}${btn('Remove category', { kind: 'danger', icon: 'trash', cls: 'grow', act: 'removeCat', d: { id: m.id } })}</div>`); },
    priceForm: m => { const f = S.form, est = f.type === 'Estimate'; return modal(m.id ? 'Edit Service Price' : 'Add Service Price', `<form class="col g20" data-form="price" novalidate>${field('Service Name', inp({ id: 'f-sname', path: 'form.service', val: f.service, ph: 'Home Cleaning' }))}${field('Category', fsel('form.cat', [...new Set([f.cat, ...D.categories.map(c => c.name)])], f.cat))}
      <div class="field"><span class="label">Pricing type</span>${tabs('form.type', ['Fixed', 'Hourly', 'Estimate'], f.type)}</div>
      ${est ? '' : `<div class="grid2">${field(f.type === 'Hourly' ? 'Daytime price / hr' : 'Daytime price', inp({ id: 'f-day', path: 'form.day', val: f.day, ph: '95', icon: '', attrs: 'inputmode="decimal"', trail: '', cls: '' }).replace('<input', '<span>$</span><input'))}${field(f.type === 'Hourly' ? 'Nighttime price / hr' : 'Nighttime price', inp({ id: 'f-night', path: 'form.night', val: f.night, ph: '120', attrs: 'inputmode="decimal"' }).replace('<input', '<span>$</span><input'))}</div>`}
      <div class="grid2">${field('Range from', inp({ id: 'f-from', path: 'form.from', val: f.from, ph: '85', attrs: 'inputmode="decimal"' }).replace('<input', '<span>$</span><input'))}${field('Range to', inp({ id: 'f-to', path: 'form.to', val: f.to, ph: '120', attrs: 'inputmode="decimal"' }).replace('<input', '<span>$</span><input'))}</div>
      <p class="t12 muted">Estimated range is shown to customers before a professional confirms the final price.${est ? ' Estimate services need a range.' : ''}</p>${ferr()}${foot(m.id ? 'Update price' : 'Save price')}</form>`, 'w380'); },
    promoForm: m => { const f = S.form; return modal(m.id ? 'Edit promotion' : 'Create promotion', `<form class="col g16" data-form="promo" novalidate>${field('Promotion name', inp({ id: 'f-pmname', path: 'form.name', val: f.name, ph: 'Holiday helper' }))}
      <div class="field"><span class="label">Promotion Banner</span><label class="upload">${ic('image', 16)}<span>${esc(f.banner || 'Upload Icon')}</span><input type="file" accept="image/*" data-file="promoBanner" hidden></label></div>
      ${field('Code', inp({ id: 'f-code', path: 'form.code', val: f.code, ph: 'HOLIDAY15', attrs: 'style="text-transform:uppercase"' }))}<div class="field"><span class="label">Discount type</span>${tabs('form.type', ['Percentage', 'Fixed amount'], f.type)}</div>
      <div class="grid2">${field('Value', inp({ id: 'f-val', path: 'form.value', val: f.value, ph: '15', attrs: 'inputmode="decimal"', trail: `<span>${f.type === 'Percentage' ? '%' : '$'}</span>` }))}${field('Usage limit', inp({ id: 'f-limit', path: 'form.limit', val: f.limit, ph: '500', attrs: 'inputmode="numeric"' }))}</div>
      ${field('Applies to', fsel('form.applies', ['All services', ...D.categories.map(c => c.name)], f.applies))}<div class="grid2">${field('Start', inp({ id: 'f-start', path: 'form.start', val: f.start, icon: 'calendar', ph: 'Dec 15' }))}${field('End', inp({ id: 'f-end', path: 'form.end', val: f.end, icon: 'calendar', ph: 'Jan 05' }))}</div>
      ${ferr()}${btn(m.id ? 'Update promotion' : 'Create promotion', { kind: 'primary', cls: 'full', type: 'submit' })}</form>`, 'w380', 'Customers enter the code at checkout'); },
    payout: m => { const p = pro(m.id); return modal('Send this payout?', `<div class="box">${user(p.name, `${p.cat} · ${p.jobs} jobs`)}</div><div class="col g12">${kv('Earned', money(p.earned))}${kv(`Commission (${D.commission}%)`, '- ' + money(p.earned * rate()))}${kv('Already paid out', '- ' + money(p.paid))}<div class="line">${kv('Payout amount', `<span class="t18">${money(balance(p))}</span>`)}</div></div><div class="row">${btn('Cancel', { cls: 'grow', act: 'closeModal' })}${btn('Pay out ' + money(balance(p)), { kind: 'primary', cls: 'grow', act: 'confirmPayout', d: { id: p.id } })}</div>`); },
    payoutDetails: m => { const p = pro(m.id); return modal('Earnings details', `<div class="box">${user(p.name, `${p.cat} · ${p.jobs} jobs`)}</div><div class="col g12">${kv('Earned', money(p.earned))}${kv(`Commission (${D.commission}%)`, '- ' + money(p.earned * rate()))}${kv('Paid out', money(p.paid))}${kv('Balance', money(balance(p)))}${kv('Payout status', badge(p.request === 'None' ? 'No request' : p.request))}</div><div class="row">${btn('View professional', { cls: 'grow', act: 'go', d: { to: 'professional-' + p.id } })}${btn('Close', { kind: 'primary', cls: 'grow', act: 'closeModal' })}</div>`); },
    preview: m => { const pg = D.pages[m.k]; return modal('Mobile app preview', `<div class="phone rich sec">${S.ui.editor.draft[m.k] ?? pg.html}</div>${btn('Close', { cls: 'full', act: 'closeModal' })}`, '', pg.title); },
    link: () => modal('Add a link', `<form class="col g20" data-form="link" novalidate>${field('URL', inp({ id: 'f-url', path: 'form.url', val: S.form.url, ph: 'https://' }))}${foot('Add link')}</form>`, 'w380'),
  };

  /* ---------- shell ---------- */
  const NAV = [['dashboard', 'Dashboard', 'dash'], ['customers', 'Customers', 'users'], ['professionals', 'Professionals', 'briefcase'], ['categories', 'Service Categories', 'grid'], ['pricing', 'Pricing', 'tag'], ['bookings', 'Bookings', 'calendar'], ['payments', 'Payments', 'card'], ['reviews', 'Reviews', 'star'], ['notifications', 'Notifications', 'bell'], ['reports', 'Reports', 'chart'], ['app-reports', 'App Reports', 'flag'], ['account-profile', 'Settings', 'settings']];
  const R = {
    dashboard: ['Dashboard', 'Dashboard', 'Overview of your platform today', vDashboard],
    customers: ['Customers', 'Customers', 'View registered customers and manage account access', vCustomers],
    professionals: ['Professionals', 'Professionals', 'Review, approve and manage service professionals', vProfessionals],
    categories: ['Service Categories', 'Service categories', 'Add, edit or remove the services customers can book', vCategories],
    pricing: ['Pricing', 'Pricing', 'Set fixed, hourly, day and night prices and estimated ranges', vPricing],
    promotions: ['Pricing', 'Pricing', 'Configure promotions and discount codes', vPromotions],
    bookings: ['Bookings', 'Bookings', 'Monitor every job from request to completion', vBookings],
    payments: ['Payments', 'Payments and commission', 'Customer payments, your commission and professional earnings', vPayments],
    payouts: ['Payments', 'Payments and commission', 'Manage professional earnings and track payouts', vPayouts],
    reviews: ['Reviews', 'Reviews', 'Customer reviews and professional ratings', vReviews],
    notifications: ['Notifications', 'Notifications', 'Send platform notifications to customers and professionals', vNotifications],
    reports: ['Reports', 'Reports', 'Booking, revenue and activity summaries', vReports],
    'app-reports': ['App Reports', 'App reports', 'Reports sent by customers and professionals from the app', vAppReports],
  };
  function resolve(r) {
    if (R[r]) return { nav: R[r][0], title: R[r][1], sub: R[r][2], html: R[r][3]() };
    if (r.startsWith('customer-')) return { nav: 'Customers', title: 'Customers', sub: 'View registered customers and manage account access', html: vCustomer(r.slice(9)) };
    if (r.startsWith('professional-')) { const p = pro(r.slice(13)); return { nav: 'Professionals', title: 'Professional review', sub: 'Professionals  /  ' + (p ? p.name : ''), html: vProfessional(r.slice(13)) }; }
    if (r.startsWith('booking-')) return { nav: 'Bookings', title: 'Bookings', sub: 'Monitor every job from request to completion', html: vBooking(r.slice(8)) };
    if (r.startsWith('report-')) return { nav: 'App Reports', title: 'Report details', sub: 'App reports  /  ' + UP(r.slice(7)), html: vReport(r.slice(7)) };
    if (r.startsWith('account-') || r.startsWith('content-')) { if (!SN.some(s => s[0] === r)) r = 'account-profile'; return { nav: 'Settings', title: 'Settings', sub: 'Your profile, login details and app content pages', html: vSettings(r) }; }
    return null;
  }
  function gsearch() {
    const q = S.ui.g.q.trim(); if (!q) return '';
    const res = [...D.customers.filter(c => has(q, c.name, c.email)).slice(0, 3).map(c => ['customer-' + c.id, c.name, 'Customer · ' + c.email, 'users']), ...D.pros.filter(p => has(q, p.name, p.email)).slice(0, 3).map(p => ['professional-' + p.id, p.name, 'Professional · ' + p.cat, 'briefcase']), ...D.bookings.filter(b => has(q, b.id, b.service)).slice(0, 3).map(b => ['booking-' + b.id, UP(b.id), b.service + ' · ' + b.status, 'calendar'])];
    return `<div class="pop" style="left:0;right:auto;width:100%">${res.length ? res.map(r => `<button type="button" class="item" data-act="gpick" data-to="${r[0]}"><span class="iw" style="width:32px;height:32px">${ic(r[3], 16)}</span><span class="col g2"><span class="m">${esc(r[1])}</span><span class="t12 muted">${esc(r[2])}</span></span></button>`).join('') : '<div class="empty">No matches</div>'}</div>`;
  }
  function bellPop() {
    const items = [...D.pros.filter(p => p.verification === 'Pending').slice(0, 2).map(p => ['professional-' + p.id, 'shield', `${p.name} applied as a ${p.cat.toLowerCase()} professional`, 'Waiting for review']), ...D.appReports.filter(r => r.status === 'Open').slice(0, 2).map(r => ['report-' + r.id, 'flag', `${r.from}: ${r.subject}`, 'Open report']), ...D.pros.filter(p => p.request === 'Requested').slice(0, 2).map(p => ['payouts', 'wallet', `${p.name} requested a payout of ${money(balance(p))}`, 'Payout request'])];
    return `<div class="pop"><h3>Needs your attention</h3>${items.length ? items.map(i => `<button type="button" class="item" data-act="gpick" data-to="${i[0]}"><span class="iw" style="width:32px;height:32px">${ic(i[1], 16)}</span><span class="col g2"><span class="m">${esc(i[2])}</span><span class="t12 muted">${i[3]}</span></span></button>`).join('') : '<div class="empty">You are all caught up.</div>'}</div>`;
  }
  const attention = () => D.pros.some(p => p.verification === 'Pending') || D.appReports.some(r => r.status === 'Open') || D.pros.some(p => p.request === 'Requested');
  function shell(v) {
    const a = D.admin, open = D.appReports.filter(r => r.status === 'Open').length;
    return `<div class="shell ${S.navOpen ? 'open' : ''}"><aside class="sidebar" aria-label="Main"><img class="logo" src="assets/logo.png" alt="Done, consider it done" data-act="go" data-to="dashboard">
      ${NAV.map(n => `<a class="nav ${n[1] === v.nav ? 'on' : ''}" href="#${n[0]}" ${n[1] === v.nav ? 'aria-current="page"' : ''}>${ic(n[2])}<span>${n[1]}</span>${n[0] === 'app-reports' && open ? `<span class="count">${open}</span>` : ''}</a>`).join('')}
      <div class="account row">${avatar(a.name, 36, a.photo)}<div class="col g2 grow"><span class="m">${esc(a.name)}</span><span class="t10 muted" style="overflow:hidden;text-overflow:ellipsis">${esc(a.email)}</span></div><button type="button" class="logout" data-act="logout" aria-label="Log out" title="Log out">${ic('logout')}</button></div></aside>
    <div class="main"><header class="topbar"><button type="button" class="iconbtn lg menu-btn" data-act="navToggle" aria-label="Menu">${ic('menu')}</button><div class="col g2 grow"><h1>${esc(v.title)}</h1><span class="t12 muted">${esc(v.sub)}</span></div>
      <div class="rel gsearch"><label class="input h40" style="width:320px;background:var(--bg-surface)">${ic('search', 16)}<input id="q-global" data-bind="ui.g.q" data-live value="${esc(S.ui.g.q)}" placeholder="Search customers, jobs, professionals" aria-label="Search customers, jobs, professionals" autocomplete="off"></label>${gsearch()}</div>
      <div class="rel"><button type="button" class="iconbtn lg" data-act="pop" data-p="bell" aria-label="Notifications">${ic('bell')}${attention() ? '<span class="dot"></span>' : ''}</button>${S.pop === 'bell' ? bellPop() : ''}</div>
      <a class="row who" href="#account-profile">${avatar(a.name, 36, a.photo)}<span class="col g2"><span class="m">${esc(a.name)}</span><span class="t12 muted">${esc(a.role)}</span></span></a></header>
      <main class="content">${v.html}</main></div></div>`;
  }

  /* ---------- render ---------- */
  const app = document.getElementById('app'), ov = document.getElementById('overlay');
  function keepFocus(fn) {
    const el = document.activeElement, id = el && el.id, st = id && 'selectionStart' in el ? [el.selectionStart, el.selectionEnd] : null; fn();
    if (id) { const n = document.getElementById(id); if (n && n !== document.activeElement) { n.focus({ preventScroll: true }); if (st) try { n.setSelectionRange(st[0], st[1]); } catch (e) { } } }
  }
  function render() {
    keepFocus(() => {
      if (!S.authed || AUTH.includes(S.route)) { app.innerHTML = vAuth(AUTH.includes(S.route) ? S.route : 'login'); document.title = 'Done Admin'; }
      else { const v = resolve(S.route) || resolve('dashboard'); app.innerHTML = shell(v); document.title = v.title + ' · Done Admin'; }
      renderOverlay(true);
    });
  }
  function renderOverlay(inner) {
    const run = () => { ov.innerHTML = (S.modal ? M[S.modal.t](S.modal) : '') + `<div class="toasts" aria-live="polite">${S.toasts.map(t => `<div class="toast ${t.seen ? '' : 'new'}"><span>${esc(t.msg)}</span>${t.undo ? `<button type="button" data-act="undo" data-id="${t.id}">Undo</button>` : ''}</div>`).join('')}</div>`; };
    inner ? run() : keepFocus(run); S.toasts.forEach(t => { t.seen = true; });
  }
  function openModal(m, form) { S.modal = m; S.form = Object.assign({ err: '' }, form); renderOverlay(); const f = ov.querySelector('input:not([type=file]),textarea'); if (f) f.focus(); }

  /* ---------- actions ---------- */
  let savedRange = null;
  const A = {
    go: d => { S.pop = null; go(d.to); return false; },
    set: d => { setPath(d.path, d.num ? +d.val : d.val === '1' && /remember|active/.test(d.path) ? true : d.val === '' ? false : d.val); const k = d.path.split('.'); if (k[0] === 'ui' && k[2] !== 'page' && S.ui[k[1]] && 'page' in S.ui[k[1]]) S.ui[k[1]].page = 1; if (d.go) go(d.go); },
    toggleShow: d => { S.auth.show[d.k] = !S.auth.show[d.k]; },
    resend: () => { toast('A new code was sent to ' + S.auth.email); return 'o'; },
    logout: () => { S.authed = false; S.modal = null; S.auth.pw = ''; try { sessionStorage.removeItem('done-admin-auth'); } catch (e) { } go('login'); },
    resetByEmail: () => { S.authed = false; try { sessionStorage.removeItem('done-admin-auth'); } catch (e) { } S.auth.email = D.admin.email; go('forgot'); },
    navToggle: () => { S.navOpen = !S.navOpen; },
    pop: d => { S.pop = S.pop === d.p ? null : d.p; },
    gpick: d => { S.ui.g.q = ''; S.pop = null; go(d.to); },
    closeModal: () => { S.modal = null; return 'o'; },
    open: d => {
      const m = { t: d.m, id: d.id, i: d.i != null ? +d.i : undefined, k: d.k }; let f = {};
      if (d.m === 'catForm') { const c = D.categories.find(x => x.id === d.id); f = c ? { name: c.name, desc: c.desc, pricing: c.pricing, active: c.active, iconName: c.img ? 'Custom icon' : '', img: c.img } : { name: '', desc: '', pricing: 'Fixed price', active: true, iconName: '' }; }
      if (d.m === 'priceForm') { const p = D.prices.find(x => x.id === d.id); f = p ? { service: p.service, cat: p.cat, type: p.type, day: p.day ?? '', night: p.night ?? '', from: p.from ?? '', to: p.to ?? '' } : { service: '', cat: D.categories[0].name, type: 'Fixed', day: '', night: '', from: '', to: '' }; }
      if (d.m === 'promoForm') { const p = D.promos.find(x => x.id === d.id); f = p ? { name: p.name, code: p.code, type: p.type, value: p.value, limit: p.limit, applies: p.applies, start: p.start, end: p.end, banner: p.banner } : { name: '', code: '', type: 'Percentage', value: '', limit: '', applies: 'All services', start: '', end: '', banner: '' }; }
      if (/block|reject/.test(d.m)) f = { note: '', reason: '' };
      openModal(m, f); return false;
    },
    unblockCustomer: d => { const c = cust(d.id); c.status = 'Active'; toast(c.name + ' can log in and book again'); },
    unblockPro: d => { const p = pro(d.id); p.status = p.verification === 'Approved' ? 'Active' : 'Inactive'; toast(p.name + ' was unblocked'); },
    approvePro: d => { const p = pro(d.id); p.verification = 'Approved'; p.status = 'Active'; p.docs.forEach(x => x.status = 'Verified'); toast(`${p.name} is approved and can accept jobs`); },
    reconsiderPro: d => { const p = pro(d.id); p.verification = 'Pending'; toast('Application moved back to pending review'); },
    toggleProActive: d => { const p = pro(d.id); if (p.verification !== 'Approved') { toast('Approve this professional before activating the account'); return 'o'; } if (p.status === 'Blocked') { toast('Unblock this professional first'); return 'o'; } p.status = p.status === 'Active' ? 'Inactive' : 'Active'; },
    docStatus: d => { pro(d.id).docs[+d.i].status = d.s; S.modal = null; toast(d.s === 'Verified' ? 'Document marked as verified' : 'The professional was asked to upload this document again'); },
    toggleCat: d => { const c = D.categories.find(x => x.id === d.id); c.active = !c.active; toast(`${c.name} is now ${c.active ? 'visible to' : 'hidden from'} customers`); },
    removeCat: d => { const i = D.categories.findIndex(x => x.id === d.id), c = D.categories[i]; D.categories.splice(i, 1); S.modal = null; toast(c.name + ' was removed', () => D.categories.splice(i, 0, c)); },
    confirmPayout: d => { const p = pro(d.id), amt = balance(p); p.paid += amt; p.request = 'Paid'; S.ui.payouts.paidExtra += amt; S.modal = null; toast(`${money(amt)} paid out to ${p.name}`); },
    removeReview: d => { const r = D.reviews.find(x => x.id === d.id); r.removed = true; toast('Review removed', () => { r.removed = false; }); },
    restoreReview: d => { D.reviews.find(x => x.id === d.id).removed = false; toast('Review restored'); },
    keepReview: d => { D.reviews.find(x => x.id === d.id).flagged = false; toast('Review kept and flag cleared'); },
    undo: d => { const t = S.toasts.find(x => String(x.id) === d.id); if (t) { t.undo(); S.toasts = S.toasts.filter(x => x !== t); } },
    notifyUser: d => { Object.assign(S.ui.notif, { audience: 'One user', user: d.name, title: '', msg: '', err: '' }); go('notifications'); return false; },
    sendNotif: d => {
      const u = S.ui.notif; if (!u.title.trim() || !u.msg.trim()) { u.err = 'Add a title and a message.'; return; } if (u.audience === 'One user' && !u.user.trim()) { u.err = 'Enter the user this notification is for.'; return; }
      const mode = d.mode || 'Sent'; D.notifications.unshift({ id: 'n' + Date.now(), title: u.title.trim(), msg: u.msg.trim(), audience: u.audience === 'One user' ? u.user.trim() : u.audience, type: u.type, date: mode === 'Sent' ? 'Just now' : 'Tomorrow, 9:00 AM', status: mode });
      Object.assign(u, { title: '', msg: '', err: '', page: 1, filter: 'All types' }); toast(mode === 'Sent' ? 'Notification sent' : 'Notification scheduled for tomorrow, 9:00 AM');
    },
    reportStatus: d => { const r = D.appReports.find(x => x.id === d.id); r.status = d.s; toast(d.s === 'Closed' ? 'Report closed' : 'Report reopened'); },
    removePhoto: () => { D.admin.photo = null; toast('Profile photo removed'); },
    resetProfile: () => { S.ui.profile = null; },
    togglePref: d => { D.admin.prefs[+d.i] = !D.admin.prefs[+d.i]; },
    publishPage: d => { const el = document.getElementById('editor'); D.pages[d.k].html = el.innerHTML; D.pages[d.k].updated = today(); delete S.ui.editor.draft[d.k]; S.ui.editor.dirty[d.k] = false; toast(D.pages[d.k].title + ' published to the app'); },
    linkOpen: () => { const s = window.getSelection(); savedRange = s.rangeCount && document.getElementById('editor').contains(s.anchorNode) && !s.isCollapsed ? s.getRangeAt(0).cloneRange() : null; if (!savedRange) { toast('Select the text you want to link first'); return 'o'; } openModal({ t: 'link' }, { url: 'https://' }); return false; },
    print: () => { try { window.print(); } catch (e) { } return false; },
    export: d => {
      const L = S.cache || [];
      if (d.kind === 'customers') exportCSV('customers.csv', ['Name', 'Email', 'Phone', 'Bookings', 'Joined', 'Status'], L.map(c => [c.name, c.email, c.phone, c.bookings, c.joined, c.status]));
      if (d.kind === 'pros') exportCSV('professionals.csv', ['Name', 'Email', 'Category', 'Jobs', 'Rating', 'Verification', 'Status'], L.map(p => [p.name, p.email, p.cat, p.jobs, p.rating || '', p.verification, p.status]));
      if (d.kind === 'bookings') exportCSV('bookings.csv', ['Job ID', 'Customer', 'Professional', 'Service', 'Category', 'Date', 'Time', 'Price', 'Pro response', 'Status'], L.map(b => [UP(b.id), cust(b.cust).name, b.pro ? pro(b.pro).name : '', b.service, b.cat, b.date, b.time, b.price, b.resp, b.status]));
      if (d.kind === 'payments') exportCSV('payments.csv', ['Transaction', 'Job ID', 'Customer', 'Professional', 'Paid', 'Commission', 'Pro earns', 'Status'], L.map(b => { const z = b.paid === 'Refunded', c = z ? 0 : b.price * rate(); return ['TXN-' + b.id.slice(4), UP(b.id), cust(b.cust).name, b.pro ? pro(b.pro).name : '', b.price, c.toFixed(2), (z ? 0 : b.price - c).toFixed(2), b.paid]; }));
      if (d.kind === 'payouts') exportCSV('payouts.csv', ['Professional', 'Category', 'Jobs', 'Earned', 'Commission', 'Paid out', 'Balance', 'Payout'], L.map(p => [p.name, p.cat, p.jobs, p.earned, Math.round(p.earned * rate()), p.paid, balance(p), p.request]));
      if (d.kind === 'report') { const r = D.reports[S.ui.rep.range]; exportCSV(`report-${S.ui.rep.range}.csv`, ['Period', 'Completed', 'Cancelled'], r.bars); }
      return 'o';
    },
  };
  const num = v => v === '' || v == null ? null : Number(v);
  const F = {
    login: () => { const a = S.auth; if (!/^\S+@\S+\.\S+$/.test(a.email)) a.err = 'Enter a valid email address.'; else if (a.pw !== D.admin.password) a.err = 'Incorrect password. In this prototype the password is admin123.'; else { a.err = ''; S.authed = true; if (a.remember) try { sessionStorage.setItem('done-admin-auth', '1'); } catch (e) { } go('dashboard'); return false; } },
    forgot: () => { const a = S.auth; if (!/^\S+@\S+\.\S+$/.test(a.email)) { a.err = 'Enter a valid email address.'; return; } a.err = ''; a.otp = ['', '', '', '', '', '']; go('verify'); toast('Verification code sent to ' + a.email); return false; },
    verify: () => { const a = S.auth; if (a.otp.join('').length < 6) { a.err = 'Enter all 6 digits.'; return; } a.err = ''; a.np = a.np2 = ''; go('new-password'); return false; },
    newpw: () => { const a = S.auth; if (a.np.length < 8 || !/\d/.test(a.np) || !/[^A-Za-z0-9]/.test(a.np)) { a.err = 'Use at least 8 characters with a number and a symbol.'; return; } if (a.np !== a.np2) { a.err = 'Passwords do not match.'; return; } a.err = ''; D.admin.password = a.np; a.pw = ''; go('password-updated'); return false; },
    backlogin: () => { go('login'); return false; },
    blockCustomer: () => { const c = cust(S.modal.id); c.status = 'Blocked'; S.modal = null; toast(c.name + ' was blocked', () => { c.status = 'Active'; }); },
    blockPro: () => { const p = pro(S.modal.id), prev = p.status; p.status = 'Blocked'; S.modal = null; toast(p.name + ' was blocked', () => { p.status = prev; }); },
    rejectPro: () => { if (!S.form.reason.trim()) { S.form.err = 'Tell the professional why the application was rejected.'; return 'o'; } const p = pro(S.modal.id); p.verification = 'Rejected'; p.status = 'Inactive'; p.rejectReason = S.form.reason.trim(); S.modal = null; toast(p.name + "'s application was rejected"); },
    cat: () => {
      const f = S.form; if (!f.name.trim()) { f.err = 'Enter a category name.'; return 'o'; }
      const ex = D.categories.find(c => c.id === S.modal.id), v = { name: f.name.trim(), desc: f.desc.trim(), pricing: f.pricing, active: !!f.active, img: f.img };
      if (ex) Object.assign(ex, v); else D.categories.push(Object.assign({ id: 'cat' + Date.now(), icon: 'grid', services: 0, pros: 0, bookings: 0 }, v));
      S.modal = null; toast(ex ? v.name + ' updated' : v.name + ' added');
    },
    price: () => {
      const f = S.form, est = f.type === 'Estimate', day = num(f.day), night = num(f.night), from = num(f.from), to = num(f.to);
      if (!String(f.service).trim()) { f.err = 'Enter the service name.'; return 'o'; }
      if (!est && (!(day > 0) || !(night > 0))) { f.err = 'Enter a daytime and a nighttime price.'; return 'o'; }
      if (est && (!(from > 0) || !(to > 0))) { f.err = 'Enter the estimated range.'; return 'o'; }
      if ((from != null || to != null) && !(to > from)) { f.err = 'Range to must be higher than range from.'; return 'o'; }
      const v = { service: String(f.service).trim(), cat: f.cat, type: f.type, day: est ? null : day, night: est ? null : night, from, to }, ex = D.prices.find(p => p.id === S.modal.id);
      if (ex) Object.assign(ex, v); else D.prices.unshift(Object.assign({ id: 'pr' + Date.now() }, v)); S.modal = null; toast(ex ? 'Price updated' : 'Service price added');
    },
    promo: () => {
      const f = S.form, val = num(f.value), lim = num(f.limit);
      if (!f.name.trim() || !String(f.code).trim()) { f.err = 'Enter a promotion name and code.'; return 'o'; }
      if (!(val > 0) || (f.type === 'Percentage' && val > 100)) { f.err = f.type === 'Percentage' ? 'Enter a percentage between 1 and 100.' : 'Enter a discount amount.'; return 'o'; }
      if (!(lim > 0)) { f.err = 'Enter a usage limit.'; return 'o'; } if (!f.start.trim() || !f.end.trim()) { f.err = 'Enter a start and end date.'; return 'o'; }
      const v = { name: f.name.trim(), code: String(f.code).trim().toUpperCase(), type: f.type, value: val, limit: lim, applies: f.applies, start: f.start.trim(), end: f.end.trim(), banner: f.banner }, ex = D.promos.find(p => p.id === S.modal.id);
      if (ex) Object.assign(ex, v); else D.promos.unshift(Object.assign({ id: 'pm' + Date.now(), used: 0, status: 'Scheduled' }, v)); S.modal = null; toast(ex ? 'Promotion updated' : 'Promotion created');
    },
    commission: () => { const u = S.ui.pay, v = Number(u.rate); if (u.rate === '' || isNaN(v) || v < 0 || v > 50) { u.err = 'Enter a percentage between 0 and 50.'; return; } u.err = ''; D.commission = v; toast(`Commission set to ${v}%. Earnings and payouts were recalculated.`); },
    notif: () => A.sendNotif({}),
    reply: (el) => { const id = el.dataset.id, r = D.appReports.find(x => x.id === id), t = (S.ui.report.draft[id] || '').trim(); if (!t) { S.ui.report.err = 'Write a response before sending.'; return; } S.ui.report.err = ''; r.replies.push({ text: t, time: 'Just now', seen: null }); r.status = 'Replied'; S.ui.report.draft[id] = ''; toast(`Response sent. ${r.from.split(' ')[0]} will see it in the app.`); },
    profile: () => { const f = S.ui.profile; if (!f.name.trim()) { f.err = 'Enter your name.'; return; } if (!/^\S+@\S+\.\S+$/.test(f.email)) { f.err = 'Enter a valid email address.'; return; } Object.assign(D.admin, { name: f.name.trim(), email: f.email.trim(), phone: f.phone.trim() }); S.ui.login.email = D.admin.email; S.ui.profile = null; toast('Profile saved'); },
    email: () => { const f = S.ui.login; if (!/^\S+@\S+\.\S+$/.test(f.email)) { f.emailErr = 'Enter a valid email address.'; return; } f.emailErr = ''; D.admin.email = f.email.trim(); S.ui.profile = null; toast('Login email updated'); },
    password: () => { const f = S.ui.login; if (f.cur !== D.admin.password) f.err = 'Current password is incorrect.'; else if (f.np.length < 8 || !/\d/.test(f.np) || !/[^A-Za-z0-9]/.test(f.np)) f.err = 'The new password does not meet the requirements.'; else if (f.np !== f.np2) f.err = 'The new passwords do not match.'; else if (f.np === f.cur) f.err = 'Choose a password you have not used before.'; else { D.admin.password = f.np; Object.assign(f, { cur: '', np: '', np2: '', err: '' }); toast('Password updated'); } },
    link: () => { const url = S.form.url.trim(); S.modal = null; renderOverlay(); if (savedRange && /^https?:\/\/\S+/.test(url)) { const s = window.getSelection(); s.removeAllRanges(); s.addRange(savedRange); document.execCommand('createLink', false, url); markDirty(); } else { toast('Enter a full link starting with https://'); renderOverlay(); } return false; },
  };
  function markDirty() { const el = document.getElementById('editor'); if (!el) return; const k = el.dataset.k; S.ui.editor.draft[k] = el.innerHTML; if (!S.ui.editor.dirty[k]) { S.ui.editor.dirty[k] = true; const b = document.getElementById('pubbadge'); if (b) b.innerHTML = badge('Unsaved changes'); } }
  const after = r => { if (r === false) return; if (r === 'o') renderOverlay(); else render(); };

  /* ---------- events ---------- */
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-act]');
    if (!t) { if (e.target.hasAttribute && e.target.hasAttribute('data-overlay')) { S.modal = null; renderOverlay(); } else if ((S.pop || S.ui.g.q) && !e.target.closest('.rel')) { S.pop = null; S.ui.g.q = ''; render(); } else if (S.navOpen && !e.target.closest('.sidebar')) { S.navOpen = false; render(); } return; }
    if (t.tagName === 'A' && t.dataset.act === 'set') e.preventDefault();
    after(A[t.dataset.act](t.dataset, t, e));
  });
  document.addEventListener('mousedown', e => { if (e.target.closest('[data-act="linkOpen"]')) e.preventDefault(); const c = e.target.closest('[data-cmd]'); if (c) { e.preventDefault(); const [cmd, arg] = c.dataset.cmd.split(':'); document.getElementById('editor').focus(); document.execCommand(cmd, false, arg || null); markDirty(); } });
  document.addEventListener('submit', e => { e.preventDefault(); const f = e.target.dataset.form; if (F[f]) after(F[f](e.target)); });
  const onInput = e => {
    const t = e.target;
    if (t.id === 'editor') return markDirty();
    if (t.dataset.otp != null) { const i = +t.dataset.otp, v = t.value.replace(/\D/g, '').slice(-1); t.value = v; S.auth.otp[i] = v; t.classList.toggle('filled', !!v); if (v && i < 5) document.getElementById('otp' + (i + 1)).focus(); return; }
    if (t.dataset.file) return;
    if (!t.dataset.bind) return;
    setPath(t.dataset.bind, t.value); const k = t.dataset.bind.split('.');
    if (k[0] === 'ui' && S.ui[k[1]] && 'page' in S.ui[k[1]] && k[2] !== 'page') S.ui[k[1]].page = 1;
    if ('live' in t.dataset) render();
  };
  document.addEventListener('input', onInput);
  document.addEventListener('change', e => {
    const t = e.target;
    if (t.dataset.file) {
      const file = t.files && t.files[0]; if (!file) return;
      if (t.dataset.file === 'promoBanner') { S.form.banner = file.name; return renderOverlay(); }
      const rd = new FileReader(); rd.onload = () => { if (t.dataset.file === 'photo') { D.admin.photo = rd.result; toast('Profile photo updated'); render(); } else { S.form.img = rd.result; S.form.iconName = file.name; renderOverlay(); } }; rd.readAsDataURL(file); return;
    }
    if (t.tagName === 'SELECT') onInput(e);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { if (S.modal) { S.modal = null; renderOverlay(); } else if (S.pop || S.ui.g.q) { S.pop = null; S.ui.g.q = ''; render(); } }
    if (e.key === 'Backspace' && e.target.dataset && e.target.dataset.otp != null && !e.target.value && +e.target.dataset.otp > 0) document.getElementById('otp' + (+e.target.dataset.otp - 1)).focus();
  });
  function route() {
    let r = location.hash.slice(1) || (S.authed ? 'dashboard' : 'login');
    if (!S.authed && !AUTH.includes(r)) r = 'login';
    if (S.authed && r === 'login') r = 'dashboard';
    if (r !== S.route) { S.modal = null; S.pop = null; S.navOpen = false; S.auth.err = ''; S.ui.custJobs.page = 1; window.scrollTo(0, 0); }
    S.route = r; render();
  }
  window.addEventListener('hashchange', () => { if (location.hash.slice(1) !== S.route) route(); });
  route();
})();
