/* ============================================================
   CAPITAL-SOURCES.JS
   The Broader Capital Sources section: list view and detail view.

   Deliberately mirrors the partner pages rather than inventing a
   new visual language - same evidence disclosure, same "unknown
   stays unknown" phrasing, same coverage line when a field is not
   researched yet. An entry with three sourced investments and one
   with thirty must both read as honest, not one as unfinished.
   ============================================================ */

function csEsc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const CS_TYPE_LABEL = {
  angel: 'Angel',
  strategic: 'Strategic / Corporate',
  family: 'Family Office',
  syndicate: 'Syndicate / Rolling Fund'
};

function csAll() {
  if (typeof CAPITAL_SOURCES === 'undefined') return [];
  return Object.keys(CAPITAL_SOURCES).map(function (slug) {
    const e = CAPITAL_SOURCES[slug];
    return { slug: slug, e: e, n: (e.investments || []).length };
  }).sort(function (a, b) {
    return b.n - a.n || a.e.name.localeCompare(b.e.name);
  });
}

/* Sector distribution across an entry's sourced investments. Same
   floor as the partner bars: below it, a percentage would be noise
   dressed as a finding, so the raw count is shown instead. */
const CS_MIN_DIST = 5;
function csSectorDist(inv) {
  const known = (inv || []).filter(function (r) { return r.sector; });
  if (known.length < CS_MIN_DIST) return null;
  const c = {};
  known.forEach(function (r) { c[r.sector] = (c[r.sector] || 0) + 1; });
  return { n: known.length,
    dist: Object.keys(c).map(function (k) {
      return { label: k, n: c[k], pct: Math.round(100 * c[k] / known.length) };
    }).sort(function (a, b) { return b.n - a.n; }) };
}

function renderCapitalSources() {
  const host = document.getElementById('capitalSourcesView');
  if (!host) return;
  const all = csAll();
  const counts = {};
  all.forEach(function (x) {
    const t = x.e.type || 'angel';
    counts[t] = (counts[t] || 0) + 1;
  });
  const totalInv = all.reduce(function (a, x) { return a + x.n; }, 0);

  let h = '<div class="cs-wrap">' +
    '<div class="cs-kicker">Broader Capital Sources</div>' +
    '<h1 class="cs-h1">The money that is not a tracked fund.</h1>' +
    '<p class="cs-sub">Angels, corporate and strategic investors, family offices and ' +
    'syndicates - held to the same evidence standard as every firm and partner on ' +
    'Power Board. An investment appears here only when a public source names that ' +
    'investor against that company. Where a round, a year or a sector was not ' +
    'established by a source, it is left blank rather than guessed.</p>';

  if (!all.length) {
    h += '<div class="cs-empty">No capital sources recorded yet.</div></div>';
    host.innerHTML = h;
    return;
  }

  h += '<div class="cs-stats">' +
    '<div class="cs-stat"><div class="n">' + all.length + '</div><div class="l">Tracked</div></div>' +
    '<div class="cs-stat"><div class="n">' + totalInv + '</div><div class="l">Attributed investments</div></div>' +
    Object.keys(counts).map(function (t) {
      return '<div class="cs-stat"><div class="n">' + counts[t] + '</div><div class="l">' +
             csEsc(CS_TYPE_LABEL[t] || t) + '</div></div>';
    }).join('') +
    '</div>';

  h += '<div class="cs-grid">' + all.map(function (x) {
    const e = x.e;
    const sectors = {};
    (e.investments || []).forEach(function (r) { if (r.sector) sectors[r.sector] = 1; });
    const secList = Object.keys(sectors).slice(0, 3);
    return '<a class="cs-card" href="#capital-source/' + csEsc(x.slug) + '">' +
      '<div class="cs-card-type">' + csEsc(CS_TYPE_LABEL[e.type] || e.type) + '</div>' +
      '<div class="cs-card-name">' + csEsc(e.name) + '</div>' +
      (e.role ? '<div class="cs-card-role">' + csEsc(e.role) + '</div>' : '') +
      '<div class="cs-card-meta">' + x.n + ' attributable investment' + (x.n === 1 ? '' : 's') +
        (secList.length ? ' &middot; ' + csEsc(secList.join(', ')) : '') + '</div>' +
      '</a>';
  }).join('') + '</div></div>';

  host.innerHTML = h;
}

function renderCapitalSource(slug) {
  const host = document.getElementById('capitalSourceDetailView');
  if (!host) return;
  const e = (typeof CAPITAL_SOURCES !== 'undefined') ? CAPITAL_SOURCES[slug] : null;
  if (!e) {
    host.innerHTML = '<div class="cs-wrap"><a class="cs-back" href="#capital-sources">' +
      '&larr; Back to capital sources</a><div class="cs-empty">Not found.</div></div>';
    return;
  }
  const inv = e.investments || [];
  const dist = csSectorDist(inv);
  const sourced = inv.filter(function (r) { return (r.evidence || []).length; }).length;
  const dated = inv.filter(function (r) { return r.year != null; }).length;
  const staged = inv.filter(function (r) { return r.stage; }).length;

  let h = '<div class="cs-wrap">' +
    '<a class="cs-back" href="#capital-sources">&larr; Back to capital sources</a>' +
    '<div class="cs-kicker">' + csEsc(CS_TYPE_LABEL[e.type] || e.type) + '</div>' +
    '<h1 class="cs-h1">' + csEsc(e.name) + '</h1>' +
    (e.role ? '<div class="cs-role">' + csEsc(e.role) + '</div>' : '') +
    (e.basedIn ? '<div class="cs-based">' + csEsc(e.basedIn) + '</div>' : '') +
    (e.biography ? '<p class="cs-bio">' + csEsc(e.biography) + '</p>' : '');

  h += '<div class="cs-strip">' +
    '<div class="cs-stat"><div class="n">' + inv.length + '</div><div class="l">Attributable investments</div></div>' +
    '<div class="cs-stat"><div class="n">' + sourced + ' / ' + inv.length + '</div><div class="l">With cited sources</div></div>' +
    '<div class="cs-stat"><div class="n">' + staged + ' / ' + inv.length + '</div><div class="l">Known stage</div></div>' +
    '<div class="cs-stat"><div class="n">' + dated + ' / ' + inv.length + '</div><div class="l">Known year</div></div>' +
    '</div>';

  if (dist) {
    h += '<div class="cs-block"><div class="cs-block-h">Observed sector concentration</div>' +
      '<div class="cs-bars">' + dist.dist.map(function (d) {
        const max = dist.dist[0].pct;
        return '<div class="cs-bar-row"><span class="cs-bar-label">' + csEsc(d.label) + '</span>' +
          '<span class="cs-bar-track"><span class="cs-bar-fill" style="width:' +
            Math.max(4, Math.round(100 * d.pct / max)) + '%"></span></span>' +
          '<span class="cs-bar-pct">' + d.pct + '%</span></div>';
      }).join('') +
      '<div class="cs-basis">Based on ' + dist.n + ' of ' + inv.length +
        ' attributable investments with a known sector</div></div></div>';
  } else if (inv.length) {
    h += '<div class="cs-note">Sector concentration needs at least ' + CS_MIN_DIST +
      ' investments with a known sector. ' +
      inv.filter(function (r) { return r.sector; }).length + ' recorded so far.</div>';
  }

  if (inv.length) {
    h += '<div class="cs-block"><div class="cs-block-h">Attributable investments</div><ul class="cs-list">';
    inv.forEach(function (r) {
      const meta = [r.stage, r.year, r.subsector || r.sector].filter(Boolean).join(' &middot; ');
      h += '<li class="cs-item"><span class="cs-item-name">' + csEsc(r.name) + '</span>' +
        (meta ? '<span class="cs-item-meta">' + meta + '</span>' : '') +
        (r.role === 'board' ? '<span class="cs-item-board">board</span>' : '');
      const evs = r.evidence || [];
      if (evs.length) {
        h += '<details class="cs-ev"><summary>' + evs.length + ' source' + (evs.length === 1 ? '' : 's') + '</summary>';
        evs.forEach(function (v) {
          let host2 = v.url;
          try { host2 = new URL(v.url).hostname.replace(/^www\./, ''); } catch (err) {}
          h += '<div class="cs-ev-row"><a href="' + csEsc(v.url) + '" target="_blank" rel="noopener">' +
            csEsc(host2) + '</a> <span class="cs-ev-type">' + csEsc(v.type) + '</span>' +
            (v.checked ? ' <span class="cs-ev-date">checked ' + csEsc(v.checked) + '</span>' : '') + '</div>';
        });
        h += '</details>';
      }
      h += '</li>';
    });
    h += '</ul></div>';
  } else {
    h += '<div class="cs-note">No attributable investments recorded yet. ' +
      'That means none have been sourced, not that none were made.</div>';
  }

  if ((e.sources || []).length) {
    h += '<div class="cs-block"><div class="cs-block-h">Profile sources</div><ul class="cs-src">' +
      e.sources.map(function (s) {
        return '<li><a href="' + csEsc(s.url) + '" target="_blank" rel="noopener">' +
               csEsc(s.label || s.url) + '</a></li>';
      }).join('') + '</ul></div>';
  }

  h += '<details class="cs-method"><summary>About these records</summary>' +
    '<p>Power Board records an investment here only when a public source names this ' +
    'investor against this company. Capital deployed by an associated fund is never ' +
    'treated as personal attribution. Stage and year are shown only where a source ' +
    'describes that specific round; where they are unknown they are left blank rather ' +
    'than estimated. Public records may not represent the investor\'s complete history.</p>' +
    '</details>';

  h += '</div>';
  host.innerHTML = h;
}
