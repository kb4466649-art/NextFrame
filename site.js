// NEXTFRAME PUBLIC SITE — read-only. No login, no admin code.
const CSS = ":root{\n  --bg:#0F1420; --panel:#171E2E; --panel-line:#2A3348;\n  --ink:#EDEEF2; --muted:#8A93A6; --signal:#E8A33D;\n  --good:#6FBF8B; --mid:#E8A33D; --low:#C77B6B;\n}\n* { box-sizing:border-box; }\nbody{ margin:0; background:var(--bg); color:var(--ink);\n  font-family:\"IBM Plex Sans\", system-ui, sans-serif; line-height:1.6; }\na{ color:inherit; }\nh1,h2,h3{ font-family:\"Fraunces\", Georgia, serif; font-weight:500; line-height:1.2; margin:0; }\n.wrap{ max-width:1080px; margin:0 auto; padding:0 24px; }\n\nheader{\n  border-bottom:1px solid var(--panel-line);\n  padding:0;\n  position:sticky; top:0; z-index:50;\n  background:rgba(15,20,32,0.86);\n  backdrop-filter:blur(10px);\n  -webkit-backdrop-filter:blur(10px);\n}\n.header-inner{ display:flex; align-items:center; justify-content:space-between; gap:20px; padding:18px 24px; }\n.brand{ display:flex; align-items:center; gap:9px; font-family:\"Fraunces\", serif; font-size:1.25rem;\n  text-decoration:none; color:var(--ink); letter-spacing:0.01em; }\n.brand-mark{ color:var(--signal); flex-shrink:0; }\n.brand span{ color:var(--signal); }\n\n.nav-desktop ul{ list-style:none; display:flex; align-items:center; gap:26px; margin:0; padding:0; font-size:0.9rem; color:var(--muted); }\n.nav-desktop a{ text-decoration:none; transition:color .15s ease; }\n.nav-desktop a:hover, .nav-desktop a.active{ color:var(--ink); }\n\n.dropdown{ position:relative; }\n.dropdown-toggle{\n  font:inherit; color:var(--muted); background:none; border:none; cursor:pointer;\n  display:flex; align-items:center; gap:6px; padding:0; transition:color .15s ease;\n}\n.dropdown-toggle:hover, .dropdown-toggle.active{ color:var(--ink); }\n.dropdown-toggle svg{ transition:transform .15s ease; }\n.dropdown.open .dropdown-toggle svg{ transform:rotate(180deg); }\n.dropdown-menu{\n  position:absolute; top:calc(100% + 16px); left:50%; transform:translateX(-50%);\n  background:var(--panel); border:1px solid var(--panel-line);\n  min-width:240px; padding:8px; display:none;\n  box-shadow:0 16px 40px rgba(0,0,0,0.35);\n}\n.dropdown.open .dropdown-menu{ display:grid; grid-template-columns:1fr; gap:2px; }\n.dropdown-menu a{\n  display:block; padding:10px 14px; font-size:0.9rem; color:var(--muted);\n  text-decoration:none; transition:background .12s ease, color .12s ease;\n}\n.dropdown-menu a:hover, .dropdown-menu a.active{ background:var(--bg); color:var(--ink); }\n\n.menu-toggle{\n  display:none; background:none; border:1px solid var(--panel-line); color:var(--ink);\n  width:38px; height:38px; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0;\n}\n.nav-mobile{ display:none; flex-direction:column; border-top:1px solid var(--panel-line); padding:8px 24px 18px; }\n.nav-mobile a{ padding:12px 0; font-size:0.95rem; color:var(--muted); text-decoration:none; border-bottom:1px solid var(--panel-line); }\n.nav-mobile a:last-child{ border-bottom:none; }\n.nav-mobile a:hover, .nav-mobile a.active{ color:var(--ink); }\n.nav-mobile .mobile-group-label{ padding:14px 0 6px; font-size:0.78rem; color:var(--signal); text-transform:uppercase; letter-spacing:0.06em; }\nheader.menu-open .nav-mobile{ display:flex; }\n\na:focus-visible, button:focus-visible{ outline:2px solid var(--signal); outline-offset:2px; }\n\n.breadcrumb{ font-size:0.85rem; color:var(--muted); margin-bottom:20px; }\n.breadcrumb a{ text-decoration:underline; }\n\n.hero{ padding:64px 0 44px; border-bottom:1px solid var(--panel-line); }\n.hero .kicker{ color:var(--signal); font-size:0.92rem; margin-bottom:16px; }\n.hero h1{ font-size:clamp(1.9rem, 5vw, 3rem); max-width:16ch; }\n.hero p{ color:var(--muted); max-width:56ch; font-size:1.03rem; margin-top:18px; }\n\n.section-head{ display:flex; align-items:baseline; justify-content:space-between; margin:56px 0 22px; flex-wrap:wrap; gap:10px; }\n.section-head h2{ font-size:1.4rem; }\n.section-head a{ color:var(--muted); text-decoration:none; font-size:0.88rem; border-bottom:1px solid var(--panel-line); }\n\n.predictions{ display:grid; grid-template-columns:repeat(2,1fr); gap:1px;\n  background:var(--panel-line); border:1px solid var(--panel-line); }\n.card{ background:var(--bg); padding:26px; text-decoration:none; display:block;\n  position:relative; transition:background .15s ease, transform .15s ease, box-shadow .15s ease; }\n.card:hover{ background:var(--panel); transform:translateY(-2px); box-shadow:0 12px 28px rgba(0,0,0,0.28); z-index:1; }\n.card .row{ display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; flex-wrap:wrap; gap:8px; }\n.target-year{ font-size:0.85rem; color:var(--muted); }\n.category-tag{ font-size:0.75rem; color:var(--muted); text-transform:none; letter-spacing:0.02em; }\n.confidence{ font-size:0.78rem; padding:4px 10px; border-radius:100px; border:1px solid currentColor; }\n.confidence.high{ color:var(--good); }\n.confidence.mid{ color:var(--mid); }\n.confidence.low{ color:var(--low); }\n.card h3{ font-size:1.15rem; margin-bottom:8px; }\n.card p{ color:var(--muted); font-size:0.92rem; margin:0; }\n\n.category-grid{ display:grid; grid-template-columns:repeat(auto-fit, minmax(160px,1fr)); gap:1px;\n  background:var(--panel-line); border:1px solid var(--panel-line); margin:24px 0 8px; }\n.category-grid a{ background:var(--bg); padding:20px; text-decoration:none; text-align:center; font-size:0.95rem; }\n.category-grid a:hover{ background:var(--panel); }\n.category-grid .count{ display:block; color:var(--muted); font-size:0.8rem; margin-top:4px; }\n\n.empty-state{ border:1px dashed var(--panel-line); padding:36px 24px; color:var(--muted);\n  font-size:0.94rem; text-align:center; grid-column:1 / -1; }\n\n.post-head{ padding:48px 0 28px; border-bottom:1px solid var(--panel-line); }\n.meta-row{ display:flex; gap:14px; align-items:center; margin-bottom:18px; flex-wrap:wrap; }\n.post-head h1{ font-size:clamp(1.7rem, 4vw, 2.4rem); }\n.byline{ color:var(--muted); font-size:0.88rem; margin-top:16px; }\n\n.direct-answer{ background:var(--panel); border-left:3px solid var(--signal); padding:18px 22px; margin:28px 0; font-size:1.02rem; }\n\narticle{ padding:28px 0; font-size:1rem; }\narticle p{ margin:0 0 18px; }\narticle h2{ font-size:1.25rem; margin:32px 0 12px; }\n\n.sources{ margin:36px 0; padding-top:24px; border-top:1px solid var(--panel-line); }\n.sources h2{ font-size:1.05rem; margin-bottom:12px; }\n.sources ol{ padding-left:20px; color:var(--muted); font-size:0.92rem; }\n.sources li{ margin-bottom:6px; }\n\n.related{ margin:36px 0; padding-top:24px; border-top:1px solid var(--panel-line); }\n.related h2{ font-size:1.05rem; margin-bottom:14px; }\n.related ul{ list-style:none; padding:0; margin:0; display:grid; gap:10px; }\n.related a{ color:var(--signal); text-decoration:none; font-size:0.95rem; }\n.related a:hover{ text-decoration:underline; }\n\n.comments{ margin:44px 0 60px; padding-top:28px; border-top:1px solid var(--panel-line); }\n.comments h2{ font-size:1.15rem; margin-bottom:18px; }\n\n.faq{ margin:56px 0 40px; }\n.faq-item{ border-top:1px solid var(--panel-line); padding:22px 0; }\n.faq-item:last-child{ border-bottom:1px solid var(--panel-line); }\n.faq-item h3{ font-size:1.05rem; margin-bottom:8px; font-weight:500; }\n.faq-item p{ color:var(--muted); max-width:62ch; font-size:0.94rem; margin:0; }\n\nfooter{ border-top:1px solid var(--panel-line); padding:56px 0 0; color:var(--muted); font-size:0.88rem; }\n.footer-grid{ display:grid; grid-template-columns:1.6fr 1fr 1fr 1fr; gap:32px; padding-bottom:40px; }\n.footer-brand p{ margin-top:14px; max-width:32ch; font-size:0.88rem; line-height:1.6; }\n.footer-col h3{ font-family:\"IBM Plex Sans\", sans-serif; font-size:0.8rem; font-weight:600; color:var(--ink);\n  text-transform:uppercase; letter-spacing:0.05em; margin-bottom:14px; }\n.footer-col{ display:flex; flex-direction:column; gap:9px; }\n.footer-col a{ text-decoration:none; font-size:0.88rem; transition:color .15s ease; }\n.footer-col a:hover{ color:var(--ink); }\n.footer-bottom{ border-top:1px solid var(--panel-line); padding:20px 0 28px;\n  display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px; font-size:0.82rem; }\n\n@media (max-width:900px){\n  .footer-grid{ grid-template-columns:1fr 1fr; }\n}\n@media (max-width:720px){\n  .predictions{ grid-template-columns:1fr; }\n  .nav-desktop{ display:none; }\n  .menu-toggle{ display:flex; }\n  .footer-grid{ grid-template-columns:1fr; gap:28px; }\n}\n\n/* ---- backend additions ---- */\n.card-date{ font-size:0.8rem; color:var(--muted); margin-top:12px !important; }\n.notice{ background:var(--panel); border-left:3px solid var(--signal); padding:12px 16px; margin:20px 0; font-size:0.92rem; }\n.faq-block{ margin:36px 0; padding-top:24px; border-top:1px solid var(--panel-line); }\n.faq-block h2{ font-size:1.15rem; margin-bottom:8px; }\n.comments-list{ list-style:none; padding:0; margin:0 0 24px; }\n.comments-list li{ border-top:1px solid var(--panel-line); padding:14px 0; }\n.comments-list .who{ font-size:0.88rem; color:var(--ink); }\n.comments-list .when{ color:var(--muted); font-size:0.8rem; margin-left:8px; }\n.comments-list p{ margin:6px 0 0; color:var(--muted); font-size:0.95rem; white-space:pre-wrap; }\n.form label{ display:block; font-size:0.86rem; color:var(--muted); margin:14px 0 6px; }\n.form input[type=text], .form input[type=password], .form input[type=date], .form select, .form textarea{\n  width:100%; background:var(--bg); border:1px solid var(--panel-line); color:var(--ink);\n  padding:10px 12px; font-family:inherit; font-size:0.95rem; border-radius:2px; }\n.form textarea{ min-height:90px; resize:vertical; }\n.form .hp{ position:absolute; left:-9999px; height:0; overflow:hidden; }\n.btn{ display:inline-block; background:var(--signal); color:#0F1420; border:none; padding:11px 20px; font-size:0.92rem;\n  font-weight:600; cursor:pointer; text-decoration:none; margin-top:16px; font-family:inherit; }\n.btn.secondary{ background:none; color:var(--ink); border:1px solid var(--panel-line); }\n.btn.danger{ background:none; color:var(--low); border:1px solid var(--low); }\n.admin-bar{ display:flex; gap:18px; flex-wrap:wrap; padding:14px 0; border-bottom:1px solid var(--panel-line); font-size:0.9rem; }\n.admin-bar a{ color:var(--muted); text-decoration:none; } .admin-bar a:hover{ color:var(--ink); }\n.admin-table{ width:100%; border-collapse:collapse; font-size:0.9rem; margin-top:20px; }\n.admin-table td, .admin-table th{ text-align:left; padding:10px 8px; border-bottom:1px solid var(--panel-line); vertical-align:top; }\n.admin-table th{ color:var(--muted); font-weight:500; }\n.tag{ font-size:0.75rem; border:1px solid var(--panel-line); padding:2px 8px; border-radius:100px; color:var(--muted); }\n.hint{ color:var(--muted); font-size:0.8rem; margin-top:4px; }\n.row2{ display:grid; grid-template-columns:1fr 1fr; gap:14px; }\n@media (max-width:720px){ .row2{ grid-template-columns:1fr; } }\n";
const JS = "// Mobile menu toggle\ndocument.querySelectorAll('.menu-toggle').forEach(function (btn) {\n  btn.addEventListener('click', function () {\n    var header = btn.closest('header');\n    header.classList.toggle('menu-open');\n    var expanded = header.classList.contains('menu-open');\n    btn.setAttribute('aria-expanded', expanded);\n  });\n});\n\n// Desktop \"Categories\" dropdown\ndocument.querySelectorAll('.dropdown-toggle').forEach(function (btn) {\n  btn.addEventListener('click', function (e) {\n    e.stopPropagation();\n    var dropdown = btn.closest('.dropdown');\n    var wasOpen = dropdown.classList.contains('open');\n    document.querySelectorAll('.dropdown.open').forEach(function (d) { d.classList.remove('open'); });\n    if (!wasOpen) dropdown.classList.add('open');\n  });\n});\n\n// Close dropdown when clicking outside it\ndocument.addEventListener('click', function () {\n  document.querySelectorAll('.dropdown.open').forEach(function (d) { d.classList.remove('open'); });\n});\n";

const CATS = { 'technology':'Technology', 'geopolitics':'Geopolitics', 'internet-frustration':'Internet Frustration', 'ceo-recommendations':'CEO Recommendations' };
const NAME = 'Nextframe';
const MARK = `<svg class="brand-mark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 16 L9 10 L13 14 L21 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="21" cy="5" r="2.2" fill="currentColor"/></svg>`;
const CHEV = `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const BURGER = `<svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true"><path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" stroke-width="1.6"/></svg>`;
const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#0F1420"/><path d="M4 16 L9 11 L13 14 L20 6" stroke="#E8A33D" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="6" r="2" fill="#E8A33D"/></svg>`;

const DEFAULTS = {
  tagline: 'Dated, sourced predictions and analysis.',
  hero_title: "What's actually going to happen, and how sure we are",
  hero_text: 'Dated, sourced predictions and analysis on technology, geopolitics, deceptive digital practices, and corporate strategy.',
  about: '',
  email: '',
  home_faq: ''
};

const esc = s => String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const ldj = o => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g,'\\u003c')}</script>`;
const fmt = d => { if (!d) return ''; const t = new Date(d + 'T00:00:00Z'); return isNaN(t) ? d : t.toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric', timeZone:'UTC' }); };
const color = c => ['high','mid','low'].includes(c) ? c : 'mid';

function parseFaqs(t) {
  return String(t || '').split(/\n\s*\n/).map(b => b.trim()).filter(Boolean).map(b => {
    const L = b.split('\n');
    return { q: L[0].replace(/^Q:\s*/i,'').trim(), a: L.slice(1).join(' ').replace(/^A:\s*/i,'').trim() };
  }).filter(x => x.q && x.a);
}
function parseSources(t) {
  return String(t || '').split('\n').map(l => l.trim()).filter(Boolean).map(l => {
    const parts = l.split('|').map(s => s.trim());
    const url = parts[parts.length - 1];
    return { name: parts.length > 1 ? parts[0] : url, url };
  }).filter(s => /^https?:\/\//i.test(s.url));
}
function renderBody(t) {
  return String(t || '').split(/\n\s*\n/).map(b => b.trim()).filter(Boolean)
    .map(b => b.startsWith('## ') ? `<h2>${esc(b.slice(3))}</h2>` : `<p>${esc(b).replace(/\n/g,'<br>')}</p>`).join('\n');
}

async function rows(db, sql, ...b) { try { return (await db.prepare(sql).bind(...b).all()).results || []; } catch { return []; } }
async function one(db, sql, ...b) { try { return await db.prepare(sql).bind(...b).first(); } catch { return null; } }
async function getSettings(db) {
  const st = { ...DEFAULTS };
  for (const r of await rows(db, 'SELECT key, value FROM settings')) if (r.value !== null && r.value !== '') st[r.key] = r.value;
  return st;
}

function header(active) {
  const cl = Object.entries(CATS).map(([s, l]) => `<a href="/c/${s}"${active === s ? ' class="active"' : ''}>${l}</a>`);
  return `<header>
  <div class="wrap header-inner">
    <a class="brand" href="/">${MARK}Next<span>frame</span></a>
    <nav class="nav-desktop" aria-label="Primary"><ul>
      <li><a href="/"${active === 'home' ? ' class="active"' : ''}>Home</a></li>
      <li><a href="/archive"${active === 'archive' ? ' class="active"' : ''}>All posts</a></li>
      <li class="dropdown">
        <button class="dropdown-toggle${CATS[active] ? ' active' : ''}" aria-expanded="false" aria-haspopup="true">Categories ${CHEV}</button>
        <div class="dropdown-menu">${cl.join('')}</div>
      </li>
    </ul></nav>
    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">${BURGER}</button>
  </div>
  <nav class="nav-mobile" aria-label="Mobile">
    <a href="/">Home</a><a href="/archive">All posts</a>
    <div class="mobile-group-label">Categories</div>${cl.join('')}
  </nav>
</header>`;
}
function footer(st) {
  const cats = Object.entries(CATS).map(([s, l]) => `<a href="/c/${s}">${l}</a>`).join('');
  return `<footer>
  <div class="wrap footer-grid">
    <div class="footer-brand"><a class="brand" href="/">${MARK}Next<span>frame</span></a><p>${esc(st.tagline)}</p></div>
    <div class="footer-col"><h3>Categories</h3>${cats}</div>
    <div class="footer-col"><h3>Site</h3><a href="/">Home</a><a href="/archive">All posts</a><a href="/#faq">FAQ</a><a href="/#about">About</a></div>
    <div class="footer-col"><h3>Contact</h3>${st.email ? `<a href="mailto:${esc(st.email)}">${esc(st.email)}</a>` : '<span>—</span>'}</div>
  </div>
  <div class="wrap footer-bottom"><span>&copy; ${new Date().getUTCFullYear()} ${NAME}</span></div>
</footer>`;
}

function page(c, o) {
  const url = c.origin + o.path;
  const desc = esc((o.desc || c.st.tagline).slice(0, 160));
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(o.title)}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${esc(url)}">
<meta property="og:type" content="${o.og || 'website'}">
<meta property="og:title" content="${esc(o.title)}">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:site_name" content="${NAME}">
<meta name="twitter:card" content="summary">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/style.css">
${(o.ld || []).map(ldj).join('\n')}
</head>
<body>
${header(o.active)}
<main>
${o.body}
</main>
${footer(c.st)}
<script src="/script.js" defer></script>
</body>
</html>`;
}

function card(p) {
  return `<a class="card" href="/p/${esc(p.slug)}">
  <div class="row"><span class="category-tag">${esc(CATS[p.category] || p.category)}</span>${p.badge_right ? `<span class="confidence ${color(p.badge_color)}">${esc(p.badge_right)}</span>` : ''}</div>
  <h3>${esc(p.title)}</h3>
  <p>${esc(p.description || p.direct_answer)}</p>
  <p class="card-date">${esc(fmt(p.published_at))}</p>
</a>`;
}
const grid = list => `<div class="predictions">${list.length ? list.map(card).join('') : '<div class="empty-state">Nothing published here yet.</div>'}</div>`;

function faqHtml(faqs, title) {
  if (!faqs.length) return '';
  return `<div class="faq-block"><h2>${esc(title)}</h2>${faqs.map(f => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('')}</div>`;
}
const faqLd = faqs => ({ '@context':'https://schema.org', '@type':'FAQPage', mainEntity: faqs.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })) });

async function homePage(c) {
  const posts = await rows(c.db, `SELECT * FROM posts WHERE status='published' ORDER BY published_at DESC, id DESC LIMIT 8`);
  const counts = {};
  for (const r of await rows(c.db, `SELECT category, COUNT(*) AS n FROM posts WHERE status='published' GROUP BY category`)) counts[r.category] = r.n;
  const faqs = parseFaqs(c.st.home_faq);
  const tiles = Object.entries(CATS).map(([s, l]) => { const n = counts[s] || 0; return `<a href="/c/${s}">${l}<span class="count">${n} ${n === 1 ? 'post' : 'posts'}</span></a>`; }).join('');
  const body = `
<section class="hero wrap"><div class="kicker">Dated and sourced</div><h1>${esc(c.st.hero_title)}</h1><p>${esc(c.st.hero_text)}</p></section>
<section class="wrap"><div class="section-head"><h2>Browse by topic</h2></div><div class="category-grid">${tiles}</div></section>
<section class="wrap"><div class="section-head"><h2>Latest</h2><a href="/archive">View all →</a></div>${grid(posts)}</section>
${faqs.length ? `<section id="faq" class="faq wrap"><div class="section-head" style="margin-top:0;"><h2>Frequently asked</h2></div>${faqs.map(f => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('')}</section>` : ''}
${c.st.about ? `<section id="about" class="wrap" style="padding-bottom:56px;"><div class="section-head" style="margin-top:0;"><h2>About</h2></div><div style="color:var(--muted);max-width:62ch;">${renderBody(c.st.about)}</div></section>` : ''}`;
  const ld = [{ '@context':'https://schema.org', '@type':'Organization', name:NAME, url:c.origin + '/' }, { '@context':'https://schema.org', '@type':'WebSite', name:NAME, url:c.origin + '/' }];
  if (faqs.length) ld.push(faqLd(faqs));
  return page(c, { title: `${NAME} — ${c.st.tagline}`, desc: c.st.hero_text, path: '/', body, active: 'home', ld });
}

async function archivePage(c) {
  const posts = await rows(c.db, `SELECT * FROM posts WHERE status='published' ORDER BY published_at DESC, id DESC`);
  const body = `<section class="hero wrap" style="padding-bottom:0;"><p class="breadcrumb"><a href="/">Home</a> / All posts</p><h1 style="font-size:clamp(1.8rem,4vw,2.6rem);">Every post, newest first</h1></section>
<section class="wrap"><div class="section-head" style="margin-top:40px;"><h2>Archive</h2></div>${grid(posts)}</section>`;
  return page(c, { title: `All posts — ${NAME}`, desc: `The complete archive of ${NAME} posts.`, path: '/archive', body, active: 'archive' });
}

async function categoryPage(c, slug) {
  const label = CATS[slug]; if (!label) return null;
  const posts = await rows(c.db, `SELECT * FROM posts WHERE status='published' AND category=? ORDER BY published_at DESC, id DESC`, slug);
  const body = `<section class="hero wrap" style="padding-bottom:0;"><p class="breadcrumb"><a href="/">Home</a> / ${esc(label)}</p><h1 style="font-size:clamp(1.8rem,4vw,2.6rem);">${esc(label)}</h1></section>
<section class="wrap"><div class="section-head" style="margin-top:40px;"><h2>All ${esc(label)} posts</h2></div>${grid(posts)}</section>`;
  return page(c, { title: `${label} — ${NAME}`, desc: `Dated, sourced ${label.toLowerCase()} posts from ${NAME}.`, path: '/c/' + slug, body, active: slug });
}

async function postPage(c, slug, flag) {
  const p = await one(c.db, `SELECT * FROM posts WHERE slug=? AND status='published'`, slug);
  if (!p) return null;
  const label = CATS[p.category] || p.category;
  const faqs = parseFaqs(p.faqs), sources = parseSources(p.sources);
  const comments = await rows(c.db, `SELECT name, body, created_at FROM comments WHERE post_id=? AND approved=1 ORDER BY id ASC`, p.id);
  const related = await rows(c.db, `SELECT * FROM posts WHERE status='published' AND category=? AND id<>? ORDER BY published_at DESC LIMIT 3`, p.category, p.id);
  const updated = p.updated_at && p.updated_at !== p.published_at ? ` · Updated ${fmt(p.updated_at)}` : '';
  const body = `<div class="wrap" style="max-width:720px;">
<p class="breadcrumb" style="margin-top:24px;"><a href="/">Home</a> / <a href="/c/${esc(p.category)}">${esc(label)}</a></p>
<div class="post-head">
  <div class="meta-row"><span class="category-tag">${esc(label)}</span>${p.badge_left ? `<span class="target-year">${esc(p.badge_left)}</span>` : ''}${p.badge_right ? `<span class="confidence ${color(p.badge_color)}">${esc(p.badge_right)}</span>` : ''}</div>
  <h1>${esc(p.title)}</h1>
  <div class="byline">Published ${esc(fmt(p.published_at))}${esc(updated)}</div>
</div>
${p.direct_answer ? `<div class="direct-answer"><strong>Short answer:</strong> ${esc(p.direct_answer)}</div>` : ''}
<article>${renderBody(p.body)}${p.change_text ? `<h2>What would change this</h2>${renderBody(p.change_text)}` : ''}</article>
${sources.length ? `<div class="sources"><h2>Sources</h2><ol>${sources.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a></li>`).join('')}</ol></div>` : ''}
${faqHtml(faqs, 'Frequently asked')}
${related.length ? `<div class="related"><h2>Related</h2><ul>${related.map(r => `<li><a href="/p/${esc(r.slug)}">${esc(r.title)}</a></li>`).join('')}</ul></div>` : ''}
<div class="comments" id="comments"><h2>Discussion</h2>
${flag === '1' ? '<div class="notice">Thanks. Your comment will appear after review.</div>' : ''}
${comments.length ? `<ul class="comments-list">${comments.map(m => `<li><span class="who">${esc(m.name)}</span><span class="when">${esc(fmt((m.created_at || '').slice(0, 10)))}</span><p>${esc(m.body)}</p></li>`).join('')}</ul>` : '<p class="hint" style="margin-bottom:18px;">No comments yet.</p>'}
<form class="form" method="post" action="/comment">
  <input type="hidden" name="post_id" value="${p.id}">
  <div class="hp"><label>Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
  <label for="cn">Name</label><input id="cn" type="text" name="name" maxlength="60" required>
  <label for="cb">Comment</label><textarea id="cb" name="body" maxlength="2000" required></textarea>
  <button class="btn" type="submit">Post comment</button>
  <p class="hint">Comments are reviewed before they appear.</p>
</form></div>
</div>`;
  const ld = [
    { '@context':'https://schema.org', '@type':'Article', headline:p.title, description:p.description || p.direct_answer || '', datePublished:p.published_at, dateModified:p.updated_at || p.published_at, mainEntityOfPage:c.origin + '/p/' + p.slug, author:{ '@type':'Organization', name:NAME }, publisher:{ '@type':'Organization', name:NAME } },
    { '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:[ { '@type':'ListItem', position:1, name:'Home', item:c.origin + '/' }, { '@type':'ListItem', position:2, name:label, item:c.origin + '/c/' + p.category }, { '@type':'ListItem', position:3, name:p.title } ] }
  ];
  if (faqs.length) ld.push(faqLd(faqs));
  return page(c, { title: `${p.title} — ${NAME}`, desc: p.description || p.direct_answer, path: '/p/' + p.slug, body, active: p.category, ld, og: 'article' });
}

async function sitemap(c) {
  const posts = await rows(c.db, `SELECT slug, updated_at, published_at FROM posts WHERE status='published' ORDER BY published_at DESC`);
  const u = (p, d, pr) => `<url><loc>${esc(c.origin + p)}</loc>${d ? `<lastmod>${esc(d)}</lastmod>` : ''}<priority>${pr}</priority></url>`;
  const items = [u('/', '', '1.0'), u('/archive', '', '0.8'), ...Object.keys(CATS).map(s => u('/c/' + s, '', '0.7')), ...posts.map(p => u('/p/' + p.slug, p.updated_at || p.published_at, '0.9'))];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items.join('\n')}\n</urlset>`;
}

const SEC = { 'x-content-type-options':'nosniff', 'referrer-policy':'strict-origin-when-cross-origin', 'x-frame-options':'DENY',
  'content-security-policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; form-action 'self'; frame-ancestors 'none'; base-uri 'self'" };
const send = (body, type, status = 200, cache = 'public, max-age=60') => new Response(body, { status, headers: { 'content-type': type, 'cache-control': cache, ...SEC } });
const html = (b, s = 200, cache) => send(b, 'text/html; charset=utf-8', s, cache);

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const path = url.pathname.replace(/\/+$/, '') || '/';

    if (path === '/style.css') return send(CSS, 'text/css; charset=utf-8', 200, 'public, max-age=3600');
    if (path === '/script.js') return send(JS, 'application/javascript; charset=utf-8', 200, 'public, max-age=3600');
    if (path === '/favicon.svg') return send(FAVICON, 'image/svg+xml', 200, 'public, max-age=86400');
    if (path === '/robots.txt') return send(`User-agent: *\nAllow: /\n\nSitemap: ${url.origin}/sitemap.xml\n`, 'text/plain; charset=utf-8');

    if (!env.DB) return html('<h1>Setup incomplete</h1><p>Database not connected.</p>', 503, 'no-store');
    const c = { origin: url.origin, db: env.DB, st: await getSettings(env.DB) };

    if (path === '/sitemap.xml') return send(await sitemap(c), 'application/xml; charset=utf-8');

    if (path === '/comment' && req.method === 'POST') {
      const origin = req.headers.get('origin');
      if (origin && origin !== url.origin) return new Response('Forbidden', { status: 403 });
      const f = await req.formData();
      const id = parseInt(f.get('post_id'), 10);
      const name = String(f.get('name') || '').trim().slice(0, 60);
      const text = String(f.get('body') || '').trim().slice(0, 2000);
      const post = await one(c.db, `SELECT id, slug FROM posts WHERE id=? AND status='published'`, id);
      if (f.get('website') || !post) return Response.redirect(url.origin + '/', 303);
      if (!name || !text) return Response.redirect(`${url.origin}/p/${post.slug}#comments`, 303);
      const pending = await one(c.db, `SELECT COUNT(*) AS n FROM comments WHERE approved=0`);
      if (pending && pending.n >= 200) return Response.redirect(`${url.origin}/p/${post.slug}#comments`, 303);
      try { await c.db.prepare(`INSERT INTO comments(post_id, name, body, created_at, approved) VALUES(?,?,?,?,0)`).bind(post.id, name, text, new Date().toISOString()).run(); } catch {}
      return Response.redirect(`${url.origin}/p/${post.slug}?c=1#comments`, 303);
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') return new Response('Method not allowed', { status: 405 });

    let out = null;
    if (path === '/') out = await homePage(c);
    else if (path === '/archive') out = await archivePage(c);
    else if (path.startsWith('/c/')) out = await categoryPage(c, path.slice(3));
    else if (path.startsWith('/p/')) out = await postPage(c, decodeURIComponent(path.slice(3)), url.searchParams.get('c'));

    if (out) return html(out);
    return html(page(c, { title: `Not found — ${NAME}`, path, active: '', body: '<section class="hero wrap"><h1>Page not found</h1><p><a href="/">Back to home</a></p></section>' }), 404, 'no-store');
  }
};
