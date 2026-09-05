/* ============================================================
   POWER-SCREENER.JS
   Phase 2C and 2D. Structured filtering over the canonical
   entities, rendered as an institutional table.

   It is not Power Match. Power Match recommends against a specific
   startup; this narrows the database against stated criteria. It is
   not Global Search either - Search finds a thing you can already
   name. All three read the same discovery-core primitives, so the
   filter and sort semantics cannot drift apart.

   WHICH FILTERS EXIST WAS DECIDED BY COVERAGE, NOT BY SCHEMA.
   Measured against the live data before any of this was written:

     Partner location      0 / 1483   omitted entirely
     Angel location        0 / 30     omitted entirely
     Angel observed stage  2 / 30     omitted entirely
     Firm observed sector  24 / 441   omitted; stated sectors are
                                      440 / 441 and used instead
     Partner obs. sector   415 / 1483 kept, coverage shown
     Partner obs. stage    24 / 1483  kept, coverage shown
     Angel observed sector 17 / 30    kept, coverage shown

   A filter whose universe is small is not hidden - the count sits
   in the filter header - but a filter with no data at all is not
   shipped, because an empty control implies the data exists.

   UNKNOWN IS NEVER FALSE. dscMatchesMulti and dscMatchesRange both
   fail a null rather than passing it, so "Founded after 2015" never
   silently includes companies with no founding year, and those
   companies are never described as founded before 2015 either.

   OBSERVED PERCENTAGES USE THE CLASSIFIED DENOMINATOR. A partner
   with 16 attributable rows of which 11 carry a stage is 4/11, not
   4/16. That is pbehCompute's own rule and it is read from there
   rather than recomputed here.
   ============================================================ */

const SCR_TYPES = ['firm', 'partner', 'angel', 'company', 'network'];
const SCR_PAGE = 50;

let scrState = null;
let _scrRows = {};          // per entity type, built once
let _scrNet = { key: null, rows: [] };

function scrEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ---------- row models ---------- */

/* Built lazily per entity type and memoised. Opening the Firms
   screener never pays for partner behaviour computation. */
function scrRows(type) {
  if (_scrRows[type]) return _scrRows[type];
  let rows = [];

  if (type === 'firm' && typeof firms !== 'undefined') {
    rows = firms.map(function (f) {
      const holdings = (f.holdings || []);
      const dealRows = (typeof pbehFirmWindowRows === 'function') ? pbehFirmWindowRows(f.slug, 0) : [];
      return {
        entityId: f.slug, name: f.name, route: '#' + f.slug,
        hq: f.hq || null,
        sectors: f.sectors || [],
        aum: f.aum || null,
        aumNum: scrParseAum(f.aum),
        founded: scrYear(f.founded),
        portfolioCount: holdings.length,
        trackedDeals: dealRows.length,
        coverage: scrCoverage(holdings.length ? 1 : 0, dealRows.length ? 1 : 0, f.thesis ? 1 : 0)
      };
    });
  }

  if (type === 'partner' && typeof partnerProfiles !== 'undefined') {
    rows = Object.keys(partnerProfiles).map(function (slug) {
      const p = partnerProfiles[slug];
      const c = (typeof pbehCompute === 'function') ? pbehCompute(slug) : null;
      const secDist = c && c.sectorDist ? c.sectorDist : null;
      const stgDist = c && c.stageDist ? c.stageDist : null;
      const rowsAll = c ? c.rows : [];
      const secKnown = rowsAll.filter(function (r) { return r.sector; }).length;
      const stgKnown = rowsAll.filter(function (r) { return r.stage; }).length;
      return {
        entityId: slug, name: p.name, route: '#partner/' + slug,
        firm: p.firm || null, firmSlug: p.firmSlug || null,
        title: p.title || null,
        statedSectors: p.sectors || [],
        observedSectors: secDist ? secDist.map(function (x) { return x.label; }) : [],
        observedStages: stgDist ? stgDist.map(function (x) { return x.label; }) : [],
        topSector: secDist && secDist[0] ? secDist[0].label + ' ' + secDist[0].pct + '%' : null,
        topStage: stgDist && stgDist[0] ? stgDist[0].label + ' ' + stgDist[0].pct + '%' : null,
        attributed: c ? c.n : 0,
        dated: c ? c.datedCount : 0,
        recent: c ? c.last24mo : 0,
        boards: c ? c.boards.length : 0,
        /* classified / total, the honest denominator */
        sectorCoverage: rowsAll.length ? (secKnown + '/' + rowsAll.length) : null,
        stageCoverage: rowsAll.length ? (stgKnown + '/' + rowsAll.length) : null,
        coverage: scrCoverage(c && c.n ? 1 : 0, secDist ? 1 : 0, (p.sources || []).length ? 1 : 0)
      };
    });
  }

  if (type === 'angel' && typeof CAPITAL_SOURCES !== 'undefined') {
    rows = Object.keys(CAPITAL_SOURCES).map(function (slug) {
      const a = CAPITAL_SOURCES[slug];
      const inv = a.investments || [];
      const secs = {}, known = inv.filter(function (i) { return i.sector; });
      known.forEach(function (i) { secs[i.sector] = (secs[i.sector] || 0) + 1; });
      const ordered = Object.keys(secs).sort(function (x, y) { return secs[y] - secs[x]; });
      return {
        entityId: slug, name: a.name, route: '#capital-source/' + slug,
        role: a.role || null, type: a.type || null,
        investingMode: a.investingMode || null,
        vehicle: a.vehicle || null,
        checkSize: a.checkSize || null,
        leadBehavior: a.leadBehavior || null,
        observedSectors: ordered,
        topSector: ordered.length ? ordered[0] + ' ' + Math.round(100 * secs[ordered[0]] / known.length) + '%' : null,
        attributed: inv.length,
        recent: inv.filter(function (i) { return i.year && (new Date().getFullYear() - i.year) <= 2; }).length,
        sectorCoverage: inv.length ? (known.length + '/' + inv.length) : null,
        coverage: scrCoverage(inv.length ? 1 : 0, known.length ? 1 : 0, a.strategicValue ? 1 : 0)
      };
    });
  }

  if (type === 'company' && typeof COMPANIES !== 'undefined') {
    const back = (typeof cmpBuildBackIndex === 'function') ? cmpBuildBackIndex() : {};
    rows = Object.keys(COMPANIES).map(function (id) {
      const c = COMPANIES[id];
      const b = back[id] || null;
      let latest = null;
      if (b) b.deals.forEach(function (d) {
        if (d.announcedDate && (!latest || d.announcedDate > latest)) latest = d.announcedDate;
      });
      /* rounds, not participation rows - the same grouping the
         company page uses, so the two can never disagree */
      const events = {};
      if (b) b.deals.forEach(function (d) { events[(d.announcedDate || '?') + '|' + (d.round || '?')] = 1; });
      return {
        entityId: id, name: c.name,
        route: (typeof cmpSlug === 'function') ? '/company/' + cmpSlug(c.name) + '/' : null,
        sector: c.sector || null, subsector: c.subsector || null,
        status: c.status || 'unknown',
        hqCountry: c.hqCountry || null, hqCity: c.hqCity || null,
        founded: c.foundedYear || null,
        ticker: (c.tickers || [])[0] || null,
        hasTicker: (c.tickers || []).length > 0,
        rounds: Object.keys(events).length,
        latestDeal: latest,
        firmCount: b ? b.firms.length : 0,
        peopleCount: b ? (b.partners.length + b.angels.length) : 0,
        published: !!(b && typeof cmpEvidenceCount === 'function' && cmpEvidenceCount(b) >= 2),
        coverage: scrCoverage(c.sector ? 1 : 0, c.hqCountry ? 1 : 0, (c.sources || []).length ? 1 : 0)
      };
    });
  }

  _scrRows[type] = rows;
  return rows;
}

/* A blunt but honest three-part completeness signal. It is not a
   score of the entity, it is a count of how much we hold. */
function scrCoverage(a, b, c) {
  const n = (a ? 1 : 0) + (b ? 1 : 0) + (c ? 1 : 0);
  return n;
}
const SCR_COV_LABEL = ['None', 'Thin', 'Partial', 'Full'];

function scrParseAum(s) {
  if (!s) return null;
  const m = String(s).match(/\$?\s*([\d.]+)\s*([BMK])/i);
  if (!m) return null;
  const n = parseFloat(m[1]);
  if (!isFinite(n)) return null;
  const u = m[2].toUpperCase();
  return u === 'B' ? n * 1000 : u === 'M' ? n : n / 1000;   // in millions
}

function scrYear(v) {
  if (v == null) return null;
  const m = String(v).match(/(19|20)\d{2}/);
  return m ? parseInt(m[0], 10) : null;
}

/* ---------- filter definitions ---------- */

/* Each filter names the row field it reads and how it combines.
   Multi-select is OR within a dimension; every dimension is ANDed.
   coverageOf reports how many rows can answer this dimension at
   all, which is what gets printed next to the filter name. */
const SCR_FILTERS = {
  firm: [
    { key: 'hq', label: 'HQ', kind: 'multi', field: 'hq' },
    { key: 'sector', label: 'Stated sector', kind: 'multi', field: 'sectors' },
    { key: 'foundedMin', label: 'Founded from', kind: 'num', field: 'founded', bound: 'min' },
    { key: 'foundedMax', label: 'Founded to', kind: 'num', field: 'founded', bound: 'max' },
    { key: 'aumMin', label: 'Min AUM ($M)', kind: 'num', field: 'aumNum', bound: 'min' },
    { key: 'hasDeals', label: 'Has tracked deals', kind: 'bool', field: 'trackedDeals' },
    { key: 'hasPortfolio', label: 'Has disclosed holdings', kind: 'bool', field: 'portfolioCount' }
  ],
  partner: [
    { key: 'firm', label: 'Firm', kind: 'multi', field: 'firm' },
    { key: 'obsSector', label: 'Observed sector', kind: 'multi', field: 'observedSectors', coverageOf: 'observedSectors' },
    { key: 'statedSector', label: 'Stated focus', kind: 'multi', field: 'statedSectors', coverageOf: 'statedSectors' },
    { key: 'obsStage', label: 'Observed stage', kind: 'multi', field: 'observedStages', coverageOf: 'observedStages' },
    { key: 'title', label: 'Title contains', kind: 'text', field: 'title' },
    { key: 'minInv', label: 'Min attributed investments', kind: 'num', field: 'attributed', bound: 'min' },
    { key: 'recentOnly', label: 'Active in last 24 months', kind: 'bool', field: 'recent' },
    { key: 'hasBoard', label: 'Holds a board seat', kind: 'bool', field: 'boards' }
  ],
  angel: [
    { key: 'obsSector', label: 'Observed sector', kind: 'multi', field: 'observedSectors', coverageOf: 'observedSectors' },
    { key: 'mode', label: 'Investing mode', kind: 'multi', field: 'investingMode' },
    { key: 'lead', label: 'Lead behaviour', kind: 'multi', field: 'leadBehavior' },
    { key: 'minInv', label: 'Min attributed investments', kind: 'num', field: 'attributed', bound: 'min' },
    { key: 'recentOnly', label: 'Active in last 24 months', kind: 'bool', field: 'recent' },
    { key: 'hasVehicle', label: 'Has a named vehicle', kind: 'bool', field: 'vehicle', coverageOf: 'vehicle' }
  ],
  company: [
    { key: 'sector', label: 'Sector', kind: 'multi', field: 'sector' },
    { key: 'status', label: 'Status', kind: 'multi', field: 'status' },
    { key: 'country', label: 'HQ country', kind: 'multi', field: 'hqCountry', coverageOf: 'hqCountry' },
    { key: 'foundedMin', label: 'Founded from', kind: 'num', field: 'founded', bound: 'min', coverageOf: 'founded' },
    { key: 'foundedMax', label: 'Founded to', kind: 'num', field: 'founded', bound: 'max' },
    { key: 'hasTicker', label: 'Publicly traded', kind: 'bool', field: 'hasTicker' },
    { key: 'hasDeals', label: 'Has tracked funding', kind: 'bool', field: 'rounds' },
    { key: 'published', label: 'Has a profile page', kind: 'bool', field: 'published' }
  ],
  network: [
    { key: 'role', label: 'Role', kind: 'multi', field: 'roles' },
    { key: 'expertise', label: 'Expertise', kind: 'multi', field: 'expertise' },
    { key: 'help', label: 'Can help with', kind: 'multi', field: 'helpWith' },
    { key: 'looking', label: 'Looking for', kind: 'multi', field: 'lookingFor' },
    { key: 'q', label: 'Name or company contains', kind: 'text', field: '_text' }
  ]
};

/* ---------- columns ---------- */

const SCR_COLUMNS = {
  firm: [
    { key: 'name', label: 'Firm', primary: true, def: true },
    { key: 'hq', label: 'HQ', def: true },
    { key: 'sectors', label: 'Stated sectors', def: true, list: 3 },
    { key: 'aum', label: 'AUM', def: true },
    { key: 'founded', label: 'Founded', def: true, num: true },
    { key: 'trackedDeals', label: 'Tracked deals', def: true, num: true },
    { key: 'portfolioCount', label: 'Holdings', def: false, num: true },
    { key: 'coverage', label: 'Coverage', def: true, cov: true }
  ],
  partner: [
    { key: 'name', label: 'Partner', primary: true, def: true },
    { key: 'firm', label: 'Firm', def: true },
    { key: 'title', label: 'Role', def: true },
    { key: 'topSector', label: 'Observed sector', def: true },
    { key: 'sectorCoverage', label: 'Classified', def: true },
    { key: 'topStage', label: 'Observed stage', def: false },
    { key: 'attributed', label: 'Attributed', def: true, num: true },
    { key: 'recent', label: 'Last 24mo', def: true, num: true },
    { key: 'boards', label: 'Boards', def: false, num: true },
    { key: 'statedSectors', label: 'Stated focus', def: false, list: 2 },
    { key: 'coverage', label: 'Coverage', def: true, cov: true }
  ],
  angel: [
    { key: 'name', label: 'Angel', primary: true, def: true },
    { key: 'role', label: 'Background', def: true },
    { key: 'topSector', label: 'Observed sector', def: true },
    { key: 'sectorCoverage', label: 'Classified', def: true },
    { key: 'attributed', label: 'Attributed', def: true, num: true },
    { key: 'recent', label: 'Last 24mo', def: true, num: true },
    { key: 'investingMode', label: 'Mode', def: true },
    { key: 'leadBehavior', label: 'Leads', def: false },
    { key: 'vehicle', label: 'Vehicle', def: false },
    { key: 'checkSize', label: 'Check size', def: false },
    { key: 'coverage', label: 'Coverage', def: true, cov: true }
  ],
  company: [
    { key: 'name', label: 'Company', primary: true, def: true },
    { key: 'sector', label: 'Sector', def: true },
    { key: 'status', label: 'Status', def: true },
    { key: 'hqCountry', label: 'HQ', def: true },
    { key: 'founded', label: 'Founded', def: true, num: true },
    { key: 'rounds', label: 'Tracked rounds', def: true, num: true },
    { key: 'latestDeal', label: 'Latest tracked deal', def: true },
    { key: 'firmCount', label: 'Tracked investors', def: true, num: true },
    { key: 'peopleCount', label: 'Attributed people', def: false, num: true },
    { key: 'ticker', label: 'Ticker', def: false },
    { key: 'coverage', label: 'Coverage', def: false, cov: true }
  ],
  network: [
    { key: 'name', label: 'Person', primary: true, def: true },
    { key: 'title', label: 'Role', def: true },
    { key: 'company', label: 'Company', def: true },
    { key: 'location', label: 'Location', def: true },
    { key: 'helpWith', label: 'Can help with', def: true, list: 2 },
    { key: 'lookingFor', label: 'Looking for', def: true, list: 2 },
    { key: 'expertise', label: 'Expertise', def: false, list: 3 }
  ]
};

/* ---------- state ---------- */

function scrDefaultState(type) {
  return { type: type || 'partner', sort: '', dir: 'asc', page: 1, density: 'compact', filters: {} };
}

function scrReadState() {
  const raw = dscDecodeState((window.location.hash.split('?')[1] || ''));
  const type = SCR_TYPES.indexOf(raw.type) !== -1 ? raw.type : 'partner';
  const st = scrDefaultState(type);
  st.sort = raw.sort || '';
  st.dir = raw.dir === 'desc' ? 'desc' : 'asc';
  st.page = Math.max(1, parseInt(raw.page, 10) || 1);
  st.density = raw.density === 'comfortable' ? 'comfortable' : 'compact';
  (SCR_FILTERS[type] || []).forEach(function (f) {
    const v = raw['f_' + f.key];
    if (v == null || v === '') return;
    st.filters[f.key] = (f.kind === 'multi') ? (Array.isArray(v) ? v : [v]) : v;
  });
  return st;
}

function scrWriteState(st, replace) {
  const out = { type: st.type };
  if (st.sort) { out.sort = st.sort; out.dir = st.dir; }
  if (st.page > 1) out.page = String(st.page);
  if (st.density !== 'compact') out.density = st.density;
  Object.keys(st.filters).forEach(function (k) {
    const v = st.filters[k];
    if (v == null || v === '' || (Array.isArray(v) && !v.length)) return;
    out['f_' + k] = v;
  });
  const hash = 'screener?' + dscEncodeState(out);
  if (replace) history.replaceState(null, '', '#' + hash);
  else window.location.hash = hash;
}

/* ---------- filtering ---------- */

function scrApply(rows, type, filters) {
  const defs = SCR_FILTERS[type] || [];
  return rows.filter(function (r) {
    for (let i = 0; i < defs.length; i++) {
      const f = defs[i];
      const v = filters[f.key];
      if (v == null || v === '' || (Array.isArray(v) && !v.length)) continue;
      if (f.kind === 'multi') {
        if (!dscMatchesMulti(r[f.field], v)) return false;
      } else if (f.kind === 'num') {
        const n = parseFloat(v);
        if (!isFinite(n)) continue;
        const ok = (f.bound === 'min') ? dscMatchesRange(r[f.field], n, null)
                                       : dscMatchesRange(r[f.field], null, n);
        if (!ok) return false;
      } else if (f.kind === 'bool') {
        if (v !== '1') continue;
        const val = r[f.field];
        const truthy = Array.isArray(val) ? val.length > 0 : !!val;
        if (!truthy) return false;
      } else if (f.kind === 'text') {
        if (!dscMatchesText(r[f.field], v)) return false;
      }
    }
    return true;
  });
}

/* Counts come from the rows surviving every OTHER dimension, so a
   number next to an option answers "how many would I get if I
   picked this", not "how many exist in total". */
function scrFacet(type, rows, def, filters) {
  const others = {};
  Object.keys(filters).forEach(function (k) { if (k !== def.key) others[k] = filters[k]; });
  const base = scrApply(rows, type, others);
  return dscFacetCounts(base, function (r) { return r[def.field]; });
}

/* ---------- render ---------- */

function renderScreener() {
  const host = document.getElementById('screenerView');
  if (!host) return;
  scrState = scrReadState();
  const type = scrState.type;

  if (type === 'network') { scrRenderNetwork(host); return; }
  scrPaint(host, scrRows(type));
}

function scrPaint(host, allRows) {
  const st = scrState, type = st.type;
  const rows = scrApply(allRows, type, st.filters);
  const sorted = st.sort ? dscSortRows(rows, st.sort, st.dir) : dscSortRows(rows, 'name', 'asc');
  const pages = Math.max(1, Math.ceil(sorted.length / SCR_PAGE));
  const page = Math.min(st.page, pages);
  const slice = sorted.slice((page - 1) * SCR_PAGE, page * SCR_PAGE);

  host.innerHTML =
    '<div class="ds-wrap scr-wrap">' +
      '<div class="ds-kicker">Power Screener</div>' +
      '<h1 class="ds-h1">Narrow the database, not your options.</h1>' +
      '<p class="ds-sub">Structured filtering across everything Power Board holds. ' +
      'Filters only exist where the data does, unknown values never pass a filter, ' +
      'and observed percentages use the classified subset rather than the row total. ' +
      'For recommendations against your specific round, use Power Match.</p>' +
      scrTypeTabs(type) +
      '<div class="scr-layout">' +
        '<aside class="scr-filters">' + scrFilterPanel(type, allRows, st.filters) + '</aside>' +
        '<section class="scr-main">' +
          scrToolbar(type, sorted.length, allRows.length, st) +
          scrActiveChips(type, st.filters) +
          (slice.length ? scrTable(type, slice, st) : scrNoResults(type, st.filters)) +
          scrPager(page, pages, sorted.length) +
        '</section>' +
      '</div>' +
    '</div>';
  scrBind(host);
}

function scrTypeTabs(active) {
  return '<div class="ds-tabs" role="tablist">' + SCR_TYPES.map(function (t) {
    return '<a class="ds-tab' + (t === active ? ' is-active' : '') + '" role="tab" ' +
      'aria-selected="' + (t === active ? 'true' : 'false') + '" ' +
      'href="#screener?' + scrEsc(dscEncodeState({ type: t })) + '">' +
      scrEsc(DSC_TYPE_LABEL[t]) + '</a>';
  }).join('') + '</div>';
}

function scrFilterPanel(type, allRows, filters) {
  const defs = SCR_FILTERS[type] || [];
  let h = '<div class="scr-filters-head">Filters' +
    (Object.keys(filters).length ? '<button type="button" class="scr-clear" data-scr-clear="1">Clear all</button>' : '') +
    '</div>';
  defs.forEach(function (f) {
    const cur = filters[f.key];
    h += '<div class="scr-f">';
    h += '<div class="scr-f-label">' + scrEsc(f.label);
    if (f.coverageOf) {
      const n = allRows.filter(function (r) {
        const v = r[f.coverageOf];
        return Array.isArray(v) ? v.length > 0 : (v != null && v !== '');
      }).length;
      h += '<span class="scr-f-cov" title="How many records can answer this filter at all">' +
           n + '/' + allRows.length + '</span>';
    }
    h += '</div>';

    if (f.kind === 'multi') {
      const opts = scrFacet(type, allRows, f, filters).slice(0, 12);
      if (!opts.length) { h += '<div class="scr-f-none">No values</div></div>'; return; }
      h += '<div class="scr-opts">' + opts.map(function (o) {
        const on = Array.isArray(cur) && cur.indexOf(o.value) !== -1;
        return '<label class="scr-opt' + (on ? ' is-on' : '') + '">' +
          '<input type="checkbox" data-scr-multi="' + scrEsc(f.key) + '" value="' + scrEsc(o.value) + '"' +
          (on ? ' checked' : '') + '>' +
          '<span class="scr-opt-v">' + scrEsc(o.value) + '</span>' +
          '<span class="scr-opt-n">' + o.count + '</span></label>';
      }).join('') + '</div>';
    } else if (f.kind === 'num') {
      h += '<input class="scr-num" type="number" inputmode="numeric" data-scr-num="' + scrEsc(f.key) + '" ' +
           'value="' + scrEsc(cur == null ? '' : cur) + '" placeholder="any">';
    } else if (f.kind === 'bool') {
      h += '<label class="scr-bool"><input type="checkbox" data-scr-bool="' + scrEsc(f.key) + '"' +
           (cur === '1' ? ' checked' : '') + '> <span>Only these</span></label>';
    } else if (f.kind === 'text') {
      h += '<input class="scr-text" type="search" data-scr-text="' + scrEsc(f.key) + '" ' +
           'value="' + scrEsc(cur == null ? '' : cur) + '" placeholder="contains...">';
    }
    h += '</div>';
  });
  return h;
}

function scrToolbar(type, n, total, st) {
  return '<div class="scr-toolbar">' +
    '<div class="scr-count"><strong>' + n.toLocaleString() + '</strong> of ' + total.toLocaleString() +
      ' ' + scrEsc(DSC_TYPE_LABEL[type].toLowerCase()) + '</div>' +
    '<div class="scr-tools">' +
      '<button type="button" class="scr-tool" data-scr-density="' +
        (st.density === 'compact' ? 'comfortable' : 'compact') + '">' +
        (st.density === 'compact' ? 'Comfortable' : 'Compact') + '</button>' +
      '<button type="button" class="scr-tool" data-scr-cols="1">Columns</button>' +
    '</div></div>';
}

function scrActiveChips(type, filters) {
  const defs = SCR_FILTERS[type] || [];
  const chips = [];
  defs.forEach(function (f) {
    const v = filters[f.key];
    if (v == null || v === '' || (Array.isArray(v) && !v.length)) return;
    const text = Array.isArray(v) ? v.join(', ') : (f.kind === 'bool' ? 'yes' : v);
    chips.push('<button type="button" class="scr-chip" data-scr-rm="' + scrEsc(f.key) + '">' +
      scrEsc(f.label) + ': ' + scrEsc(text) + ' <span aria-hidden="true">&times;</span></button>');
  });
  return chips.length ? '<div class="scr-chips">' + chips.join('') + '</div>' : '';
}

function scrNoResults(type, filters) {
  return '<div class="ds-empty"><strong>No ' + scrEsc(DSC_TYPE_LABEL[type].toLowerCase()) +
    ' match every active filter.</strong> Nothing was broadened automatically. ' +
    'Remove a filter above to widen the search.</div>';
}

/* ---------- the table ---------- */

function scrVisibleCols(type) {
  const all = SCR_COLUMNS[type] || [];
  const saved = scrLoadPrefs(type);
  if (!saved || !saved.order || !saved.order.length) {
    return all.filter(function (c) { return c.def; });
  }
  const byKey = {};
  all.forEach(function (c) { byKey[c.key] = c; });
  const out = [];
  saved.order.forEach(function (k) { if (byKey[k]) out.push(byKey[k]); });
  /* the identity column can never be hidden */
  if (!out.some(function (c) { return c.primary; })) {
    const p = all.filter(function (c) { return c.primary; })[0];
    if (p) out.unshift(p);
  }
  return out.length ? out : all.filter(function (c) { return c.def; });
}

function scrTable(type, rows, st) {
  const cols = scrVisibleCols(type);
  let h = '<div class="scr-tablewrap"><table class="scr-table' +
    (st.density === 'comfortable' ? ' is-comfy' : '') + '">' +
    '<thead><tr>' + cols.map(function (c) {
      const on = st.sort === c.key;
      const dir = on ? st.dir : '';
      return '<th scope="col"' + (c.num ? ' class="is-num"' : '') + '>' +
        '<button type="button" class="scr-sort' + (on ? ' is-on' : '') + '" data-scr-sort="' + scrEsc(c.key) + '" ' +
        'aria-label="Sort by ' + scrEsc(c.label) + '">' + scrEsc(c.label) +
        '<span class="scr-arrow">' + (on ? (dir === 'asc' ? '↑' : '↓') : '') + '</span></button></th>';
    }).join('') + '</tr></thead><tbody>';
  rows.forEach(function (r) {
    h += '<tr>' + cols.map(function (c) {
      return '<td' + (c.num ? ' class="is-num"' : '') + '>' + scrCell(r, c) + '</td>';
    }).join('') + '</tr>';
  });
  return h + '</tbody></table></div>';
}

function scrCell(r, c) {
  const v = r[c.key];
  if (c.primary) {
    return '<a class="scr-name" href="' + scrEsc(r.route || '#') + '">' + scrEsc(r.name) + '</a>';
  }
  if (c.cov) {
    return '<span class="scr-cov scr-cov-' + (v || 0) + '">' + scrEsc(SCR_COV_LABEL[v || 0]) + '</span>';
  }
  if (c.list && Array.isArray(v)) {
    if (!v.length) return '<span class="scr-null">unknown</span>';
    const shown = v.slice(0, c.list).map(scrEsc).join(', ');
    return scrEsc(shown) + (v.length > c.list ? '<span class="scr-more">+' + (v.length - c.list) + '</span>' : '');
  }
  if (v == null || v === '' || (Array.isArray(v) && !v.length)) {
    return '<span class="scr-null">unknown</span>';
  }
  return scrEsc(v);
}

function scrPager(page, pages, total) {
  if (pages <= 1) return '';
  return '<div class="scr-pager">' +
    '<button type="button" class="scr-page" data-scr-page="' + (page - 1) + '"' +
      (page <= 1 ? ' disabled' : '') + '>Previous</button>' +
    '<span class="scr-page-n">Page ' + page + ' of ' + pages + '</span>' +
    '<button type="button" class="scr-page" data-scr-page="' + (page + 1) + '"' +
      (page >= pages ? ' disabled' : '') + '>Next</button></div>';
}

/* ---------- column preferences ---------- */

/* Local for everyone. Changing columns is a view preference, not
   account data, and requiring a login to reorder a table would be
   a worse product than losing the order on a new device. */
function scrPrefsKey(type) { return 'pbScrCols:' + type; }

function scrLoadPrefs(type) {
  try { return JSON.parse(localStorage.getItem(scrPrefsKey(type)) || 'null'); }
  catch (e) { return null; }
}
function scrSavePrefs(type, order) {
  try { localStorage.setItem(scrPrefsKey(type), JSON.stringify({ order: order })); }
  catch (e) { /* private mode: preferences simply do not persist */ }
}

function scrOpenColumns(type) {
  const all = SCR_COLUMNS[type] || [];
  const vis = scrVisibleCols(type).map(function (c) { return c.key; });
  const el = document.createElement('div');
  el.className = 'scr-modal';
  el.innerHTML = '<div class="scr-modal-bd" data-scr-modal-close="1"></div>' +
    '<div class="scr-modal-panel" role="dialog" aria-modal="true" aria-label="Choose columns">' +
    '<div class="scr-modal-head">Columns<button type="button" class="scr-esc" data-scr-modal-close="1">Esc</button></div>' +
    '<div class="scr-modal-body">' + all.map(function (c) {
      const on = vis.indexOf(c.key) !== -1;
      return '<label class="scr-colrow' + (c.primary ? ' is-locked' : '') + '">' +
        '<input type="checkbox" value="' + scrEsc(c.key) + '"' + (on ? ' checked' : '') +
        (c.primary ? ' disabled' : '') + '>' +
        '<span>' + scrEsc(c.label) + '</span>' +
        (c.primary ? '<span class="scr-lock">always shown</span>' :
          '<span class="scr-move"><button type="button" data-scr-up="' + scrEsc(c.key) + '" aria-label="Move up">&uarr;</button>' +
          '<button type="button" data-scr-down="' + scrEsc(c.key) + '" aria-label="Move down">&darr;</button></span>') +
        '</label>';
    }).join('') + '</div>' +
    '<div class="scr-modal-foot">' +
      '<button type="button" class="ds-btn" data-scr-cols-reset="1">Reset to default</button>' +
      '<button type="button" class="ds-btn" data-scr-cols-apply="1">Apply</button>' +
    '</div></div>';
  document.body.appendChild(el);

  el.addEventListener('click', function (e) {
    if (e.target.closest('[data-scr-modal-close]')) { el.remove(); return; }
    if (e.target.closest('[data-scr-cols-reset]')) {
      try { localStorage.removeItem(scrPrefsKey(type)); } catch (err) {}
      el.remove(); renderScreener(); return;
    }
    if (e.target.closest('[data-scr-cols-apply]')) {
      const order = Array.prototype.slice.call(el.querySelectorAll('.scr-colrow'))
        .filter(function (row) { return row.querySelector('input').checked; })
        .map(function (row) { return row.querySelector('input').value; });
      scrSavePrefs(type, order);
      el.remove(); renderScreener(); return;
    }
    const up = e.target.closest('[data-scr-up]'), dn = e.target.closest('[data-scr-down]');
    if (up || dn) {
      const row = (up || dn).closest('.scr-colrow');
      const sib = up ? row.previousElementSibling : row.nextElementSibling;
      if (sib) up ? row.parentNode.insertBefore(row, sib) : row.parentNode.insertBefore(sib, row);
    }
  });
}

/* ---------- events ---------- */

function scrBind(host) {
  host.addEventListener('click', function (e) {
    const st = scrState;
    const sort = e.target.closest('[data-scr-sort]');
    if (sort) {
      const k = sort.getAttribute('data-scr-sort');
      if (st.sort === k) st.dir = (st.dir === 'asc' ? 'desc' : 'asc');
      else { st.sort = k; st.dir = 'asc'; }
      st.page = 1; scrWriteState(st); return;
    }
    const rm = e.target.closest('[data-scr-rm]');
    if (rm) { delete st.filters[rm.getAttribute('data-scr-rm')]; st.page = 1; scrWriteState(st); return; }
    if (e.target.closest('[data-scr-clear]')) { st.filters = {}; st.page = 1; scrWriteState(st); return; }
    const dens = e.target.closest('[data-scr-density]');
    if (dens) { st.density = dens.getAttribute('data-scr-density'); scrWriteState(st); return; }
    if (e.target.closest('[data-scr-cols]')) { scrOpenColumns(st.type); return; }
    const pg = e.target.closest('[data-scr-page]');
    if (pg && !pg.disabled) { st.page = parseInt(pg.getAttribute('data-scr-page'), 10) || 1; scrWriteState(st); return; }
    if (typeof scrSavedViewClick === 'function' && scrSavedViewClick(e, st)) return;
  });

  host.addEventListener('change', function (e) {
    const st = scrState;
    const m = e.target.closest('[data-scr-multi]');
    if (m) {
      const key = m.getAttribute('data-scr-multi'), val = m.value;
      const cur = Array.isArray(st.filters[key]) ? st.filters[key].slice() : [];
      const i = cur.indexOf(val);
      if (m.checked && i === -1) cur.push(val);
      if (!m.checked && i !== -1) cur.splice(i, 1);
      if (cur.length) st.filters[key] = cur; else delete st.filters[key];
      st.page = 1; scrTrackFilter(m.checked); scrWriteState(st); return;
    }
    const b = e.target.closest('[data-scr-bool]');
    if (b) {
      const key = b.getAttribute('data-scr-bool');
      if (b.checked) st.filters[key] = '1'; else delete st.filters[key];
      st.page = 1; scrTrackFilter(b.checked); scrWriteState(st); return;
    }
  });

  let t = null;
  host.addEventListener('input', function (e) {
    const el = e.target.closest('[data-scr-num],[data-scr-text]');
    if (!el) return;
    clearTimeout(t);
    const key = el.getAttribute('data-scr-num') || el.getAttribute('data-scr-text');
    const val = el.value;
    t = setTimeout(function () {
      const st = scrState;
      if (val === '') delete st.filters[key]; else st.filters[key] = val;
      st.page = 1; scrTrackFilter(val !== ''); scrWriteState(st);
    }, 300);
  });
}

function scrTrackFilter(applied) {
  if (typeof pbTrack !== 'function') return;
  pbTrack(applied ? 'screener_filter_applied' : 'screener_filter_removed');
}

/* ---------- network screener ---------- */

async function scrRenderNetwork(host) {
  const st = scrState;
  host.innerHTML = '<div class="ds-wrap scr-wrap"><div class="ds-kicker">Power Screener</div>' +
    '<h1 class="ds-h1">Narrow the database, not your options.</h1>' +
    scrTypeTabs('network') + '<div class="ds-empty">Loading people...</div></div>';
  const c = (typeof pbnClient === 'function') ? pbnClient() : null;
  if (!c) {
    host.querySelector('.ds-empty').innerHTML =
      '<strong>Power Network needs a signed-in session.</strong> ' +
      'Profiles are private until published, so they are never loaded for a signed-out visitor.';
    return;
  }
  try {
    const { data, error } = await c.from('profiles')
      .select('id, username, full_name, headline, current_company, current_title, location, photo_url, uses_for, help_with, looking_for, expertise, roles, show_location')
      .eq('is_published', true).eq('moderation_state', 'active').limit(200);
    if (error) throw error;
    const rows = (data || []).map(function (p) {
      return {
        entityId: p.id, name: p.full_name || p.username || 'Member',
        route: '#network/' + (p.username || p.id),
        title: p.current_title || null, company: p.current_company || null,
        location: p.show_location ? (p.location || null) : null,
        roles: p.roles || [], expertise: p.expertise || [],
        helpWith: p.help_with || [], lookingFor: p.looking_for || [],
        _text: [p.full_name, p.current_company, p.headline].filter(Boolean).join(' ')
      };
    });
    _scrRows.network = rows;
    scrPaint(host, rows);
  } catch (e) {
    host.querySelector('.ds-empty').innerHTML =
      '<strong>Could not load people right now.</strong> The rest of the Screener is unaffected.';
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { scrRows: scrRows, scrApply: scrApply, scrFacet: scrFacet,
                     SCR_FILTERS: SCR_FILTERS, SCR_COLUMNS: SCR_COLUMNS,
                     scrReadState: scrReadState, scrParseAum: scrParseAum };
}
