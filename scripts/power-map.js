/* ============================================================
   POWER-MAP.JS
   Phase 6D. The co-investment map, built from financing evidence
   and from nothing else.

   WHY THIS FILE EXISTS AT ALL

   Power Board already showed co-investment. The firm page carried a
   "Frequent Co-Investors" section, the ecosystem graph drew
   co-investment edges, and the relationship graph had a
   PORTFOLIO_CONNECTION edge type. All three were computed the same
   way: two firms were called co-investors when both listed the same
   company in their NOTABLE HOLDINGS.

   That is not co-investment. holdings is a curated list of companies
   a firm is proud of. Two firms sharing one means both chose to
   feature the same well-known name. It carries no round, no date, no
   source, and no claim that the two ever put money in together.

   Measured against the 573 sourced financing rows:

     pairs shown as co-investors from holdings      331
     of those with a tracked shared round            53
     of those with NO shared round at all           278   (84%)
     pairs with real round evidence, shown nowhere   587

   Sequoia and SoftBank Vision Fund were labelled co-investors on the
   strength of three shared notable holdings, with no tracked round
   in which both participated. 331 pairs came from just 59 companies,
   because every firm that lists Uber gets joined to every other firm
   that lists Uber. That is a fame clique, not a network.

   To be exact about what the 84% means: it is not proof that those
   firms never co-invested. Deal research covers 24 firms of 441, so
   absence of a row is absence of evidence. The defect is the claim,
   not the pair. This file only ever states what a source supports.

   WHERE THE EDGES COME FROM

   One firm's row names its co-investors as the press release wrote
   them. COINVESTOR_ALIASES is the sanctioned bridge from those raw
   strings to slugs, already used by the alerts engine, and it is an
   exact lowercase lookup. A name that is not in the map produces no
   edge. 1,078 distinct names never resolve, and they stay unresolved
   rather than being matched approximately.

   DEAL_COVERAGE PERMITS THIS AND FORBIDS THE OBVIOUS FEATURE

   The deals file is explicit. Co-investment edges are permitted
   across every row, extension included, "which do not depend on
   completeness". Cross-firm volume ranking is forbidden, because
   research effort per firm varies by a measured factor of x0.00 to
   x7.10.

   So there is no global map here and no most-connected leaderboard.
   Andreessen Horowitz has the highest degree in this graph at 69.
   That is a statement about how often a16z is named in a press
   release, not about how collaborative it is, and drawn as a hub it
   would read as the second thing. Every view in this file is
   centered on one firm and bounded.

   EVERY COUNT IS A FLOOR

   442 of 640 edges rest on exactly one shared round. The word
   "frequent" appears nowhere. A count is always written as "at
   least", every round is listed with its source, and an edge of one
   round says one round.
   ============================================================ */

/* Drawn on the map. The rest are counted in a note and listed in
   full in the evidence table, so nothing is hidden by this cap.

   It was 24 and the labels could not be made to fit. Two rings, then
   radial anchoring, then inward-facing inner labels: each pass fixed
   one collision and created another, because 24 labels of real firm
   names do not fit around a circle at any anchoring. 16 on a single
   ellipse is legible, and an unreadable picture of 24 is worth less
   than a readable one of 16 beside a complete table. */
const PMAP_MAX_NEIGHBOURS = 16;
const PMAP_MAX_EVIDENCE   = 40;   /* rounds listed in the evidence table */

let _pmapIndex = null;

function pmapEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function pmapKey(a, b) { return a < b ? a + '|' + b : b + '|' + a; }

/* ------------------------------------------------------------
   THE INDEX

   Built once. Two firms get an edge when a sourced row belonging to
   one of them names the other in coInvestors, and that name resolves
   exactly through COINVESTOR_ALIASES to a firm that exists.

   Rounds are deduplicated by company and round inside an edge. This
   matters more than it looks: the research did an assembly-stage
   cross-fill, creating a row for firm B from firm A's source when B
   was named in A's round. Both rows then name each other, so the
   same financing arrives twice from the same URL. 275 such duplicate
   mentions exist. Counting them would inflate exactly the pairs that
   are best covered.

   That also means "both firms have their own row" is not independent
   confirmation and is never presented as though it were. It is one
   source, recorded twice by design.
   ------------------------------------------------------------ */

function pmapBuild() {
  if (_pmapIndex) return _pmapIndex;

  const edges = {};
  const unresolved = {};
  let mentions = 0, resolved = 0;

  const ok = typeof FIRM_DEALS !== 'undefined' &&
             typeof COINVESTOR_ALIASES !== 'undefined' &&
             typeof firms !== 'undefined';

  if (!ok) {
    _pmapIndex = { edges: {}, byFirm: {}, stats: { ready: false } };
    return _pmapIndex;
  }

  const known = {};
  firms.forEach(function (f) { known[f.slug] = f.name; });

  FIRM_DEALS.forEach(function (d) {
    if (!d || !d.firmSlug || !Array.isArray(d.coInvestors)) return;
    d.coInvestors.forEach(function (raw) {
      mentions++;
      const slug = COINVESTOR_ALIASES[String(raw).trim().toLowerCase()];
      if (!slug || !known[slug]) { unresolved[raw] = (unresolved[raw] || 0) + 1; return; }
      resolved++;
      if (slug === d.firmSlug) return;

      const k = pmapKey(d.firmSlug, slug);
      const e = edges[k] || (edges[k] = { a: k.split('|')[0], b: k.split('|')[1], rounds: [], _seen: {} });
      /* company plus round is the financing identity. A firm can
         appear in a company's seed and its Series A; those are two
         rounds and count as two. */
      const id = d.company + '||' + (d.round || '');
      if (e._seen[id]) return;
      e._seen[id] = 1;
      e.rounds.push({
        company: d.company,
        round: d.round || null,
        date: d.announcedDate || null,
        datePrecision: d.datePrecision || null,
        sourceUrl: d.sourceUrl || null,
        sourceType: d.sourceType || null,
        evidence: d.evidence || null,
        rowFirm: d.firmSlug
      });
    });
  });

  const byFirm = {};
  Object.keys(edges).forEach(function (k) {
    const e = edges[k];
    delete e._seen;
    e.rounds.sort(function (x, y) { return String(y.date || '').localeCompare(String(x.date || '')); });
    [[e.a, e.b], [e.b, e.a]].forEach(function (p) {
      (byFirm[p[0]] = byFirm[p[0]] || []).push({ firmSlug: p[1], key: k, n: e.rounds.length });
    });
  });

  /* Sorted by shared rounds, then alphabetically so the order is
     stable rather than dependent on object key order. Within one
     firm's own list this ordering is legitimate: it ranks that
     firm's co-investors against each other, never one firm against
     another. */
  Object.keys(byFirm).forEach(function (s) {
    byFirm[s].sort(function (x, y) {
      if (y.n !== x.n) return y.n - x.n;
      return String(known[x.firmSlug] || x.firmSlug).localeCompare(String(known[y.firmSlug] || y.firmSlug));
    });
  });

  _pmapIndex = {
    edges: edges,
    byFirm: byFirm,
    stats: {
      ready: true,
      edgeCount: Object.keys(edges).length,
      firmCount: Object.keys(byFirm).length,
      mentions: mentions,
      resolved: resolved,
      unresolvedNames: Object.keys(unresolved).length
    }
  };
  return _pmapIndex;
}

/* A firm's co-investors, richest evidence first. Empty array when
   the firm has no tracked round with any resolvable co-investor,
   which is the common case: 167 firms of 441 appear in this graph
   at all. */
function pmapFor(firmSlug) {
  const ix = pmapBuild();
  const list = ix.byFirm[firmSlug];
  if (!list) return [];
  return list.map(function (r) {
    return { firmSlug: r.firmSlug, rounds: ix.edges[r.key].rounds, n: r.n };
  });
}

function pmapEdge(a, b) {
  const ix = pmapBuild();
  const e = ix.edges[pmapKey(a, b)];
  return e ? e.rounds : [];
}

function pmapFirmName(slug) {
  if (typeof firms === 'undefined') return slug;
  for (let i = 0; i < firms.length; i++) if (firms[i].slug === slug) return firms[i].name;
  return slug;
}

/* "at least 3 tracked rounds", never "3 rounds" and never
   "frequent". Every count in this dataset is a floor: the coverage
   notes prove firms omit their own deals from their own feeds. */
function pmapCountLabel(n) {
  return 'at least ' + n + ' tracked shared round' + (n === 1 ? '' : 's');
}

/* ------------------------------------------------------------
   FIRM PAGE PANEL

   Replaces the holdings-derived section. Returns nothing when there
   is no evidence, rather than an empty shell, which is the same rule
   the outcome panels follow.
   ------------------------------------------------------------ */

function pmapFirmPanel(firm) {
  if (!firm || !firm.slug) return '';
  const list = pmapFor(firm.slug);
  if (!list.length) return '';

  const shown = list.slice(0, 6);
  const rows = shown.map(function (c) {
    const r = c.rounds[0];
    return '<a href="#power-map/' + pmapEsc(firm.slug) + '/' + pmapEsc(c.firmSlug) + '" class="pmap-row">' +
      '<span class="pmap-row-name">' + pmapEsc(pmapFirmName(c.firmSlug)) + '</span>' +
      /* Real space, for the same reason as the table heading: the
         flex gap separates the boxes but not the text. */
      ' <span class="pmap-row-meta">' + pmapEsc(pmapCountLabel(c.n)) +
        (r ? ', most recently ' + pmapEsc(r.company) +
             (r.round ? ' ' + pmapEsc(r.round) : '') : '') +
      '</span></a>';
  }).join('');

  const more = list.length > shown.length
    ? '<a class="pmap-more" href="#power-map/' + pmapEsc(firm.slug) + '">' +
      'See all ' + list.length + ' on the co-investment map</a>'
    : '<a class="pmap-more" href="#power-map/' + pmapEsc(firm.slug) + '">Open the co-investment map</a>';

  return '<div class="detail-subhead">Tracked co-investors</div>' +
    '<div class="pmap-list">' + rows + '</div>' + more +
    '<p class="pmap-note">Firms named alongside ' + pmapEsc(firm.name) +
    ' in a financing Power Board has sourced. Counts are floors, not totals, ' +
    'and a firm missing from this list may still have co-invested.</p>';
}

/* ------------------------------------------------------------
   THE MAP

   Firm-centered and bounded. There is no view of the whole graph,
   for the reason in the header: a global picture would rank firms by
   how often the press names them.
   ------------------------------------------------------------ */

function renderPowerMap(centerSlug, otherSlug) {
  const host = document.getElementById('powerMapView');
  if (!host) return;

  const ix = pmapBuild();
  if (!ix.stats.ready) {
    host.innerHTML = '<div class="ds-wrap"><p class="pmap-empty">' +
      'Financing records are not loaded, so no co-investment can be shown.</p></div>';
    return;
  }

  if (!centerSlug) { host.innerHTML = pmapPicker(ix); pmapBind(host); return; }

  const firm = (typeof ptFirm === 'function') ? ptFirm(centerSlug) : null;
  if (!firm) {
    host.innerHTML = '<div class="ds-wrap"><p class="pmap-empty">No firm matches that address. ' +
      '<a href="#power-map">Choose a firm</a>.</p></div>';
    return;
  }

  const list = pmapFor(centerSlug);

  let h = '<div class="ds-wrap pmap-wrap">' +
    '<div class="ds-kicker">Co-investment map</div>' +
    '<h1 class="ds-h1">' + pmapEsc(firm.name) + '</h1>';

  if (!list.length) {
    h += '<p class="pmap-empty">No tracked financing for ' + pmapEsc(firm.name) +
      ' names a co-investor Power Board can resolve to a firm it covers. ' +
      'That is a gap in deal research, not a finding about how this firm invests.</p>' +
      '<p class="pmap-note"><a href="#power-map">Choose another firm</a></p></div>';
    host.innerHTML = h;
    pmapBind(host);
    return;
  }

  const drawn = list.slice(0, PMAP_MAX_NEIGHBOURS);
  const hidden = list.length - drawn.length;

  h += '<p class="ds-sub">' + pmapEsc(firm.name) + ' appears in a sourced financing alongside ' +
    list.length + ' firm' + (list.length === 1 ? '' : 's') + ' Power Board covers. ' +
    'Each link below is one or more specific rounds, and every round names its source.</p>' +

    '<div class="pmap-scope"><strong>This map is evidence, not a full picture.</strong> ' +
    'It is built only from financings Power Board has sourced, which cover 24 firms of ' +
    (typeof firms !== 'undefined' ? firms.length : 441) + '. ' +
    'A missing link means no tracked round, not an absence of a relationship. ' +
    'Counts are floors. Firms are never ranked against each other here, because research ' +
    'effort per firm is uneven by a measured factor of up to seven.</div>';

  h += pmapSvg(firm, drawn);

  if (hidden > 0) {
    h += '<p class="pmap-note">' + hidden + ' further co-investor' + (hidden === 1 ? '' : 's') +
      ' with fewer shared rounds are listed in the table below but not drawn, ' +
      'so the map stays readable.</p>';
  }

  h += pmapTable(firm, list, otherSlug);
  h += '</div>';

  host.innerHTML = h;
  pmapBind(host);
  pmapDraw(firm, drawn);
  if (typeof pbTrack === 'function') pbTrack('power_map_opened');
}

/* No global graph, so the entry point is a chooser. Only firms that
   actually appear in the evidence are offered: a firm with no
   tracked round would open an empty map and read as a firm with no
   partners. */
function pmapPicker(ix) {
  const slugs = Object.keys(ix.byFirm).sort(function (a, b) {
    return String(pmapFirmName(a)).localeCompare(String(pmapFirmName(b)));
  });
  const opts = slugs.map(function (s) {
    return '<a class="pmap-pick" href="#power-map/' + pmapEsc(s) + '">' +
      pmapEsc(pmapFirmName(s)) +
      '<span class="pmap-pick-n">' + ix.byFirm[s].length + '</span></a>';
  }).join('');

  return '<div class="ds-wrap pmap-wrap">' +
    '<div class="ds-kicker">Co-investment map</div>' +
    '<h1 class="ds-h1">Who has invested alongside whom.</h1>' +
    '<p class="ds-sub">Built only from financings Power Board has sourced, where the round ' +
    'names both firms. Choose a firm to see its map.</p>' +

    '<div class="pmap-scope"><strong>There is deliberately no map of everything.</strong> ' +
    'Drawing all ' + ix.stats.edgeCount + ' links at once would put the most press-covered ' +
    'firms at the centre, and a reader would take that as a finding about influence. It is a ' +
    'finding about press coverage. Every map here is centered on one firm.</div>' +

    '<p class="pmap-note">' + slugs.length + ' firms appear in at least one tracked round ' +
    'with a co-investor that resolves to a covered firm. The number beside each is how many ' +
    'such firms it is linked to.</p>' +
    '<div class="pmap-picks">' + opts + '</div></div>';
}

/* The count beside each spoke is the evidence, so it is drawn as
   text and not encoded only in line thickness. A thickness a reader
   has to measure is not a number. */
function pmapSvg(firm, drawn) {
  return '<div class="pmap-canvas-wrap">' +
    '<svg class="pmap-canvas" id="pmapSvg" viewBox="0 0 760 520" ' +
    'role="img" aria-label="Co-investment map for ' + pmapEsc(firm.name) +
    '. The same information is in the table below."></svg></div>';
}

function pmapDraw(firm, drawn) {
  const svg = document.getElementById('pmapSvg');
  if (!svg || typeof d3 === 'undefined') return;

  const W = 760, H = 520, cx = W / 2, cy = H / 2;
  const sel = d3.select(svg);
  sel.selectAll('*').remove();

  const maxN = drawn.length ? drawn[0].n : 1;
  /* One ellipse, not a circle: the canvas is wider than it is tall,
     and firm names are wide, so the horizontal room is where the
     labels need it. Distance from the centre carries no meaning and
     is never explained as though it did. */
  /* 142, not 128: measured, the longest truncated names ("New
     Enterprise Asso...", "Bessemer Venture Pa...") ran 3.6px and
     7.2px past the left edge and were clipped. */
  const rx = cx - 142, ry = cy - 78;

  const nodes = drawn.map(function (c, i) {
    const ang = (i / drawn.length) * Math.PI * 2 - Math.PI / 2;
    const cos = Math.cos(ang), sin = Math.sin(ang);
    return {
      slug: c.firmSlug, name: pmapFirmName(c.firmSlug), n: c.n,
      cos: cos, sin: sin,
      x: cx + cos * rx, y: cy + sin * ry
    };
  });

  const g = sel.append('g');

  g.selectAll('line').data(nodes).enter().append('line')
    .attr('x1', cx).attr('y1', cy)
    .attr('x2', function (d) { return d.x; })
    .attr('y2', function (d) { return d.y; })
    .attr('stroke', '#4ade80')
    .attr('stroke-opacity', 0.55)
    .attr('stroke-width', function (d) { return 1 + (d.n / maxN) * 2.5; });

  const nodeG = g.selectAll('g.pmap-n').data(nodes).enter().append('g')
    .attr('class', 'pmap-n')
    .attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')'; })
    .style('cursor', 'pointer')
    .on('click', function (ev, d) {
      location.hash = '#power-map/' + firm.slug + '/' + d.slug;
    });

  nodeG.append('circle').attr('r', 6).attr('fill', '#0f1420').attr('stroke', '#4ade80').attr('stroke-width', 1.5);

  /* Labels are anchored radially rather than always centered.
     Centering every one makes the left and right flanks collide,
     because a centered label is half its width into its neighbour.
     Anchoring outward along the spoke puts that width where there is
     nothing. Only the top and bottom, where the spokes are vertical,
     stay centered. */
  function anchor(d) {
    if (Math.abs(d.cos) < 0.34) return 'middle';
    return d.cos > 0 ? 'start' : 'end';
  }
  function dx(d) {
    if (Math.abs(d.cos) < 0.34) return 0;
    return d.cos > 0 ? 11 : -11;
  }
  function dy(d, second) {
    if (Math.abs(d.cos) < 0.34) return d.sin < 0 ? (second ? -1 : -13) : (second ? 33 : 20);
    return second ? 15 : 3;
  }

  nodeG.append('text')
    .attr('dx', dx).attr('y', function (d) { return dy(d, false); })
    .attr('text-anchor', anchor)
    .attr('class', 'pmap-label')
    .text(function (d) { return d.name.length > 18 ? d.name.slice(0, 17) + '…' : d.name; });
  nodeG.append('text')
    .attr('dx', dx).attr('y', function (d) { return dy(d, true); })
    .attr('text-anchor', anchor)
    .attr('class', 'pmap-label-n')
    .text(function (d) { return d.n === 1 ? '1 round' : d.n + ' rounds'; });

  const c = g.append('g').attr('transform', 'translate(' + cx + ',' + cy + ')');
  c.append('circle').attr('r', 13).attr('fill', '#E8C34A');
  c.append('text').attr('y', 34).attr('text-anchor', 'middle')
    .attr('class', 'pmap-label pmap-label-c')
    .text(firm.name.length > 26 ? firm.name.slice(0, 25) + '…' : firm.name);
}

/* The table is the real deliverable. The map shows there is a
   relationship; only the rounds show what it is. */
function pmapTable(firm, list, otherSlug) {
  const focus = otherSlug ? list.filter(function (c) { return c.firmSlug === otherSlug; }) : list;
  if (otherSlug && !focus.length) {
    return '<p class="pmap-empty">No tracked round names both ' + pmapEsc(firm.name) +
      ' and that firm. <a href="#power-map/' + pmapEsc(firm.slug) + '">Back to the full map</a>.</p>';
  }

  let h = '';
  if (otherSlug) {
    h += '<p class="pmap-note"><a href="#power-map/' + pmapEsc(firm.slug) + '">' +
      'Back to all tracked co-investors for ' + pmapEsc(firm.name) + '</a></p>';
    if (typeof pbTrack === 'function') pbTrack('coinvestor_evidence_opened');
  }

  h += '<h2 class="pmap-h">Shared rounds</h2>';

  focus.forEach(function (c) {
    const rounds = c.rounds.slice(0, PMAP_MAX_EVIDENCE);
    h += '<section class="pmap-edge">' +
      '<h3 class="pmap-edge-h">' +
        '<a href="#' + pmapEsc(c.firmSlug) + '">' + pmapEsc(pmapFirmName(c.firmSlug)) + '</a>' +
        /* The space is a real text node, not the flex gap. A gap is
           visual only, so without it the heading reads out as
           "Accelat least 1 tracked shared round". */
        ' <span class="pmap-edge-n">' + pmapEsc(pmapCountLabel(c.n)) + '</span>' +
      '</h3>' +
      '<table class="pmap-tbl"><thead><tr>' +
        '<th scope="col">Company</th><th scope="col">Round</th>' +
        '<th scope="col">Announced</th><th scope="col">Source</th>' +
      '</tr></thead><tbody>' +
      rounds.map(function (r) {
        return '<tr>' +
          '<td>' + pmapEsc(r.company) + '</td>' +
          /* A round that was never stated says so. It is not blank
             and it is not guessed from the amount. */
          '<td>' + (r.round ? pmapEsc(r.round) : '<span class="pmap-unk">not stated</span>') + '</td>' +
          '<td>' + (r.date ? pmapEsc(r.date) : '<span class="pmap-unk">not stated</span>') + '</td>' +
          '<td>' + (r.sourceUrl
            ? '<a href="' + pmapEsc(r.sourceUrl) + '" target="_blank" rel="noopener noreferrer">Source</a>'
            : '<span class="pmap-unk">none</span>') + '</td>' +
        '</tr>';
      }).join('') +
      '</tbody></table>';
    if (c.rounds.length > rounds.length) {
      h += '<p class="pmap-note">' + (c.rounds.length - rounds.length) + ' further rounds not listed.</p>';
    }
    h += '</section>';
  });

  return h;
}

function pmapBind(host) {
  if (!host || host.dataset.pmapBound) return;
  host.dataset.pmapBound = '1';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    pmapBuild: pmapBuild, pmapFor: pmapFor, pmapEdge: pmapEdge,
    pmapFirmPanel: pmapFirmPanel, pmapCountLabel: pmapCountLabel,
    pmapKey: pmapKey, PMAP_MAX_NEIGHBOURS: PMAP_MAX_NEIGHBOURS
  };
}
