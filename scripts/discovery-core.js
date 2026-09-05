/* ============================================================
   DISCOVERY-CORE.JS
   Phase 2A. The shared foundation under Global Power Search and
   Power Screener. Both read from here; neither builds its own
   index, its own ranking, or its own filter semantics.

   FIVE ENTITY TYPES: firm, partner, angel, company, network.
   Deal is deliberately not one. It appears as context inside a
   company, never as a primary result.

   IDENTITY IS NEVER THE DISPLAY NAME. Every document carries an
   entityId that is already durable elsewhere in the product:
   firm slug, partner slug, angel slug, companyId, network user id.
   Retrieval may match on names, aliases, former names and free
   text; selection, saving and linking use the id.

   RETRIEVAL TOLERANCE IS NOT IDENTITY RESOLUTION. A typo may find
   Databricks. It may never merge two entities, approve an alias,
   or create an attribution. Company aliases come from the reviewed
   registry in data-company-aliases.js and nowhere else: a
   NEEDS_REVIEW name contributes no alias here, so Paladin stays
   two companies in search exactly as it is everywhere else.

   CANONICAL PERSON. One human, one id. Measured across the live
   data: no name appears in both the partner and angel datasets,
   and the two repeated partner names are genuinely two different
   people already separated by slug (victor-wang and
   victor-wang-zhenfund). So the existing slug IS the canonical
   person id and no merging layer is invented here. Network
   profiles live in a separate Supabase namespace with no reviewed
   link to partner or angel records; inventing one by name match is
   exactly the fuzzy identity this codebase refuses to do, so a
   network profile stays its own document until a reviewed link
   exists.

   COST. The search index is built from fields already in memory
   and is cheap. Observed behaviour is not: it needs pbehCompute
   per person. Screener rows are therefore built lazily per entity
   type and memoised, so opening Search never pays for behaviour
   nobody asked to filter on.
   ============================================================ */

/* ---------- normalisation ---------- */

function dscNorm(s) {
  return String(s == null ? '' : s).toLowerCase().replace(/[^a-z0-9]/g, '');
}

/* Tokens for prefix and token matching. Keeps digits and internal
   dots so "bill.com" and "a16z" survive. */
function dscTokens(s) {
  return String(s == null ? '' : s)
    .toLowerCase()
    .replace(/[^a-z0-9. ]+/g, ' ')
    .split(/\s+/)
    .map(function (t) { return t.replace(/^\.+|\.+$/g, ''); })
    .filter(function (t) { return t.length > 0; });
}

/* ---------- match types, strongest first ---------- */

const DSC_MATCH = {
  EXACT_CANONICAL_NAME: 100,
  EXACT_ALIAS: 90,
  PREFIX_NAME: 70,
  TOKEN_NAME: 55,
  EXACT_COMPANY_ASSOCIATION: 40,
  FIELD_MATCH: 25,
  DESCRIPTION_MATCH: 10
};

const DSC_MATCH_LABEL = {
  EXACT_CANONICAL_NAME: 'Exact name',
  EXACT_ALIAS: 'Known former or alternate name',
  PREFIX_NAME: 'Name starts with your query',
  TOKEN_NAME: 'Name contains your query',
  EXACT_COMPANY_ASSOCIATION: 'Invested in a matching company',
  FIELD_MATCH: 'Matching sector, stage or role',
  DESCRIPTION_MATCH: 'Mentioned in the description'
};

/* An entity-name match must always beat description text. The gap
   between TOKEN_NAME and DESCRIPTION_MATCH is what guarantees it. */

/* ---------- the document ---------- */

/* Only what discovery needs is normalised here. Entity-specific
   intelligence stays in the underlying models and is read through
   them, not copied. */
function dscDoc(type, id, o) {
  return {
    entityType: type,
    entityId: id,
    canonicalName: o.canonicalName || '',
    displayName: o.displayName || o.canonicalName || '',
    aliases: o.aliases || [],
    subtitle: o.subtitle || '',
    location: o.location || null,
    keywords: o.keywords || [],
    searchText: o.searchText || '',
    primaryRoute: o.primaryRoute || '',
    quality: o.quality || null,
    activity: o.activity || null,
    metadata: o.metadata || {},
    /* precomputed for matching */
    _n: dscNorm(o.canonicalName || ''),
    _tokens: dscTokens(o.canonicalName || ''),
    _aliasN: (o.aliases || []).map(dscNorm).filter(Boolean),
    /* Aliases need prefix and token matching too, not just exact.
       The former name on record is "Pinduoduo Inc.", so a search for
       "Pinduoduo" is a prefix of an alias and nothing else - without
       this it fell through to a partner who had invested in the
       company, which ranked a person above the company itself. */
    _aliasTokens: (o.aliases || []).reduce(function (acc, a) {
      return acc.concat(dscTokens(a));
    }, []),
    _kw: (o.keywords || []).map(function (k) { return String(k).toLowerCase(); }),
    _text: String(o.searchText || '').toLowerCase()
  };
}

/* ---------- index ---------- */

let _dscIndex = null;

function dscBuildIndex() {
  if (_dscIndex) return _dscIndex;
  const docs = [];

  /* FIRMS */
  if (typeof firms !== 'undefined' && Array.isArray(firms)) {
    firms.forEach(function (f) {
      if (!f || !f.slug) return;
      const sectors = f.sectors || [];
      const holdings = (f.holdings || []).map(function (h) { return h.name; }).filter(Boolean);
      docs.push(dscDoc('firm', f.slug, {
        canonicalName: f.name,
        subtitle: [f.hq, f.aum ? 'AUM ' + f.aum : null].filter(Boolean).join(' · '),
        location: f.hq || null,
        keywords: sectors,
        /* Portfolio companies are searchable but deliberately live
           in searchText rather than in the name fields, so a firm
           can never outrank a company on that company's own name. */
        searchText: [f.short, f.thesis, sectors.join(' '), holdings.join(' ')].filter(Boolean).join(' '),
        primaryRoute: '#' + f.slug,
        activity: null,
        metadata: { hq: f.hq || null, aum: f.aum || null, founded: f.founded || null,
                    sectors: sectors, holdingsCount: holdings.length, rank: f.rank || null }
      }));
    });
  }

  /* PARTNERS - the slug is the canonical person id */
  if (typeof partnerProfiles !== 'undefined' && partnerProfiles) {
    Object.keys(partnerProfiles).forEach(function (slug) {
      const p = partnerProfiles[slug];
      if (!p || !p.name) return;
      const inv = (p.notableInvestments || []).map(function (n) { return n.name; }).filter(Boolean);
      const stated = p.sectors || [];
      docs.push(dscDoc('partner', slug, {
        canonicalName: p.name,
        subtitle: [p.title, p.firm].filter(Boolean).join(', '),
        keywords: stated,
        searchText: [p.title, p.firm, stated.join(' '), inv.join(' '),
                     (p.previousExperience || []).join(' '), p.biography || ''].filter(Boolean).join(' '),
        primaryRoute: '#partner/' + slug,
        metadata: { firm: p.firm || null, firmSlug: p.firmSlug || null, title: p.title || null,
                    statedSectors: stated, investmentCount: inv.length,
                    joinedYear: p.joinedYear || null, boardCount: (p.boardSeats || []).length,
                    companies: inv }
      }));
    });
  }

  /* ANGELS */
  if (typeof CAPITAL_SOURCES !== 'undefined' && CAPITAL_SOURCES) {
    Object.keys(CAPITAL_SOURCES).forEach(function (slug) {
      const a = CAPITAL_SOURCES[slug];
      if (!a || !a.name) return;
      const inv = (a.investments || []).map(function (n) { return n.name; }).filter(Boolean);
      docs.push(dscDoc('angel', slug, {
        canonicalName: a.name,
        subtitle: a.role || a.type || 'Angel investor',
        keywords: [],
        searchText: [a.role, a.investingMode, a.vehicle, a.strategicValue, a.biography,
                     inv.join(' ')].filter(Boolean).join(' '),
        primaryRoute: '#capital-source/' + slug,
        metadata: { role: a.role || null, type: a.type || null,
                    investingMode: a.investingMode || null, vehicle: a.vehicle || null,
                    checkSize: a.checkSize || null, leadBehavior: a.leadBehavior || null,
                    investmentCount: inv.length, companies: inv }
      }));
    });
  }

  /* COMPANIES - aliases come only from APPROVED registry rows and
     recorded former names. A held name contributes nothing. */
  if (typeof COMPANIES !== 'undefined' && COMPANIES) {
    const approvedByCanon = {};
    if (typeof COMPANY_ALIASES !== 'undefined' && COMPANY_ALIASES) {
      COMPANY_ALIASES.forEach(function (r) {
        if (!r || r.status !== 'APPROVED' || !r.canonicalCompanyId) return;
        (approvedByCanon[r.canonicalCompanyId] = approvedByCanon[r.canonicalCompanyId] || []).push(r.alias);
      });
    }
    Object.keys(COMPANIES).forEach(function (id) {
      const c = COMPANIES[id];
      if (!c || !c.name) return;
      const formers = (c.formerNames || []).map(function (f) {
        return typeof f === 'string' ? f : (f && f.name);
      }).filter(Boolean);
      const aliases = (approvedByCanon[id] || []).concat(formers);
      if (c.legalName && c.legalName !== c.name) aliases.push(c.legalName);
      docs.push(dscDoc('company', id, {
        canonicalName: c.name,
        aliases: aliases,
        subtitle: [c.sector, dscCompanyStatus(c)].filter(Boolean).join(' · '),
        location: [c.hqCity, c.hqCountry].filter(Boolean).join(', ') || null,
        keywords: [c.sector, c.subsector].filter(Boolean),
        searchText: [c.description, c.legalName, (c.tickers || []).join(' '),
                     formers.join(' ')].filter(Boolean).join(' '),
        primaryRoute: '/company/' + dscCompanySlug(c.name) + '/',
        metadata: { sector: c.sector || null, subsector: c.subsector || null,
                    status: c.status || 'unknown', hqCity: c.hqCity || null,
                    hqCountry: c.hqCountry || null, foundedYear: c.foundedYear || null,
                    tickers: c.tickers || [], formerNames: formers }
      }));
    });
  }

  _dscIndex = docs;
  return _dscIndex;
}

function dscCompanyStatus(c) {
  const s = c.status;
  if (!s || s === 'unknown') return 'Status unknown';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function dscCompanySlug(name) {
  if (typeof cmpSlug === 'function') return cmpSlug(name);
  return String(name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/* Network documents are added separately: they come from Supabase,
   are per-viewer, and must never be baked into a shared static
   index. dscSearch merges them at query time when the caller
   supplies them. */
function dscNetworkDoc(p) {
  const help = (p.help_with || []);
  const looking = (p.looking_for || []);
  const exp = (p.expertise || []);
  return dscDoc('network', p.id, {
    canonicalName: p.full_name || p.username || 'Member',
    subtitle: [p.current_title, p.current_company].filter(Boolean).join(', '),
    location: p.show_location ? (p.location || null) : null,
    keywords: exp,
    searchText: [p.headline, exp.join(' '), help.join(' '), looking.join(' '),
                 (p.uses_for || []).join(' ')].filter(Boolean).join(' '),
    primaryRoute: '#network/' + (p.username || p.id),
    metadata: { username: p.username || null, headline: p.headline || null,
                company: p.current_company || null, title: p.current_title || null,
                helpWith: help, lookingFor: looking, expertise: exp,
                usesFor: p.uses_for || [] }
  });
}

/* ---------- scoring ---------- */

/* Deterministic and explainable. No learned weights, no invented
   percentage. A result carries the reason it matched so the UI can
   say why rather than showing a number nobody can justify. */
function dscScoreDoc(doc, q) {
  const qn = dscNorm(q);
  const qt = dscTokens(q);
  if (!qn) return null;

  if (doc._n === qn) return { type: 'EXACT_CANONICAL_NAME', score: DSC_MATCH.EXACT_CANONICAL_NAME };
  if (doc._aliasN.indexOf(qn) !== -1) return { type: 'EXACT_ALIAS', score: DSC_MATCH.EXACT_ALIAS };
  if (doc._n.indexOf(qn) === 0) {
    /* the shorter the remainder, the closer the match */
    const closeness = Math.max(0, 12 - (doc._n.length - qn.length));
    return { type: 'PREFIX_NAME', score: DSC_MATCH.PREFIX_NAME + closeness };
  }
  /* Prefix of a known alias. Scored just under a canonical-name
     prefix so the current name always wins a tie, but well above a
     company association, so the company itself outranks people who
     invested in it. */
  for (let a = 0; a < doc._aliasN.length; a++) {
    if (doc._aliasN[a].indexOf(qn) === 0) {
      const closeA = Math.max(0, 12 - (doc._aliasN[a].length - qn.length));
      return { type: 'EXACT_ALIAS', score: DSC_MATCH.PREFIX_NAME - 2 + closeA };
    }
  }
  /* every query token present in the name */
  const nameHasAll = qt.length > 0 && qt.every(function (t) {
    return doc._tokens.some(function (nt) { return nt.indexOf(t) === 0; });
  });
  if (nameHasAll) return { type: 'TOKEN_NAME', score: DSC_MATCH.TOKEN_NAME };
  if (doc._n.indexOf(qn) !== -1) return { type: 'TOKEN_NAME', score: DSC_MATCH.TOKEN_NAME - 5 };
  /* every query token present across the aliases */
  const aliasHasAll = qt.length > 0 && doc._aliasTokens.length > 0 && qt.every(function (t) {
    return doc._aliasTokens.some(function (at) { return at.indexOf(t) === 0; });
  });
  if (aliasHasAll) return { type: 'EXACT_ALIAS', score: DSC_MATCH.TOKEN_NAME - 2 };

  /* a company this entity is attributed to, matched exactly */
  const comps = doc.metadata && doc.metadata.companies;
  if (comps && comps.length) {
    for (let i = 0; i < comps.length; i++) {
      if (dscNorm(comps[i]) === qn) {
        return { type: 'EXACT_COMPANY_ASSOCIATION', score: DSC_MATCH.EXACT_COMPANY_ASSOCIATION,
                 detail: comps[i] };
      }
    }
  }
  /* structured fields */
  for (let j = 0; j < doc._kw.length; j++) {
    if (doc._kw[j].indexOf(q.toLowerCase()) !== -1) {
      return { type: 'FIELD_MATCH', score: DSC_MATCH.FIELD_MATCH, detail: doc.keywords[j] };
    }
  }
  if (doc._text.indexOf(q.toLowerCase()) !== -1) {
    return { type: 'DESCRIPTION_MATCH', score: DSC_MATCH.DESCRIPTION_MATCH };
  }
  return null;
}

/* Typo tolerance, retrieval only. Applied ONLY when a query found
   nothing, and only against names, so it can never promote a fuzzy
   hit above a real one or influence identity. */
function dscEditWithin1(a, b) {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++edits > 1) return false;
    if (a.length > b.length) i++;
    else if (a.length < b.length) j++;
    else { i++; j++; }
  }
  if (i < a.length || j < b.length) edits++;
  return edits <= 1;
}

/* ---------- the query entry point ---------- */

function dscSearch(query, opts) {
  opts = opts || {};
  const q = String(query || '').trim();
  const res = { query: q, results: [], total: 0, fuzzy: false, byType: {} };
  if (q.length < 2) return res;

  const docs = dscBuildIndex().concat(opts.networkDocs || []);
  const types = opts.types && opts.types.length ? opts.types : null;

  let hits = [];
  docs.forEach(function (d) {
    if (types && types.indexOf(d.entityType) === -1) return;
    const m = dscScoreDoc(d, q);
    if (m) hits.push({ doc: d, match: m.type, score: m.score, detail: m.detail || null });
  });

  /* Only if nothing matched at all: retry against names with one
     edit of tolerance. Marked so the UI can say so. */
  if (!hits.length && q.length >= 4) {
    const qn = dscNorm(q);
    docs.forEach(function (d) {
      if (types && types.indexOf(d.entityType) === -1) return;
      if (dscEditWithin1(qn, d._n)) {
        hits.push({ doc: d, match: 'TOKEN_NAME', score: DSC_MATCH.TOKEN_NAME - 20, detail: null });
      }
    });
    if (hits.length) res.fuzzy = true;
  }

  /* Deterministic order: score, then a stable tiebreak so the same
     query always produces the same list. */
  hits.sort(function (a, b) {
    if (b.score !== a.score) return b.score - a.score;
    const at = DSC_TYPE_ORDER.indexOf(a.doc.entityType);
    const bt = DSC_TYPE_ORDER.indexOf(b.doc.entityType);
    if (at !== bt) return at - bt;
    if (a.doc.canonicalName !== b.doc.canonicalName) {
      return a.doc.canonicalName.localeCompare(b.doc.canonicalName);
    }
    return a.doc.entityId.localeCompare(b.doc.entityId);
  });

  res.total = hits.length;
  hits.forEach(function (h) {
    res.byType[h.doc.entityType] = (res.byType[h.doc.entityType] || 0) + 1;
  });
  res.results = opts.limit ? hits.slice(0, opts.limit) : hits;
  return res;
}

const DSC_TYPE_ORDER = ['company', 'firm', 'partner', 'angel', 'network'];

const DSC_TYPE_LABEL = {
  firm: 'Firms', partner: 'Partners', angel: 'Angels',
  company: 'Companies', network: 'People'
};

/* ---------- filter primitives, shared with the Screener ---------- */

/* Multi-select is OR inside one dimension and AND across dimensions.
   That is the only Boolean behaviour in the system; there is no
   hidden mode.

   UNKNOWN IS NEVER FALSE. A record with no value for a dimension
   fails that dimension's filter rather than passing it, and is
   never rewritten to zero or to the bottom of a range. */
function dscMatchesMulti(value, selected) {
  if (!selected || !selected.length) return true;
  if (value == null) return false;
  const vals = Array.isArray(value) ? value : [value];
  if (!vals.length) return false;
  return vals.some(function (v) {
    return selected.some(function (s) { return dscNorm(v) === dscNorm(s); });
  });
}

function dscMatchesRange(value, min, max) {
  if (min == null && max == null) return true;
  if (value == null || value === '') return false;   // unknown never satisfies a range
  const n = Number(value);
  if (!isFinite(n)) return false;
  if (min != null && n < min) return false;
  if (max != null && n > max) return false;
  return true;
}

function dscMatchesText(haystack, q) {
  if (!q) return true;
  return String(haystack || '').toLowerCase().indexOf(String(q).toLowerCase()) !== -1;
}

/* Option counts for a facet, computed from the rows that survive
   every OTHER active dimension. That is what makes a count mean
   "how many results would I get", rather than a stale total. */
function dscFacetCounts(rows, getValues) {
  const counts = {};
  rows.forEach(function (r) {
    const v = getValues(r);
    if (v == null) return;
    (Array.isArray(v) ? v : [v]).forEach(function (x) {
      if (x == null || x === '') return;
      counts[x] = (counts[x] || 0) + 1;
    });
  });
  return Object.keys(counts).sort(function (a, b) {
    if (counts[b] !== counts[a]) return counts[b] - counts[a];
    return a.localeCompare(b);
  }).map(function (k) { return { value: k, count: counts[k] }; });
}

/* Null sorting is explicit and consistent everywhere: unknown sorts
   last in both directions, so reversing a column never promotes
   missing data to the top. */
function dscCompare(a, b, dir) {
  const aNull = (a == null || a === '');
  const bNull = (b == null || b === '');
  if (aNull && bNull) return 0;
  if (aNull) return 1;
  if (bNull) return -1;
  let r;
  if (typeof a === 'number' && typeof b === 'number') r = a - b;
  else r = String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' });
  return dir === 'desc' ? -r : r;
}

function dscSortRows(rows, key, dir, accessor) {
  const get = accessor || function (r) { return r[key]; };
  return rows.slice().sort(function (x, y) {
    const r = dscCompare(get(x), get(y), dir);
    if (r !== 0) return r;
    /* stable, identity-based tiebreak */
    return String(x.entityId).localeCompare(String(y.entityId));
  });
}

/* ---------- URL state ---------- */

/* Readable tokens, no serialized objects. Unknown keys are ignored
   rather than throwing, so an old or hand-edited URL degrades to a
   valid narrower query instead of an error page. */
function dscEncodeState(state) {
  const parts = [];
  Object.keys(state).sort().forEach(function (k) {
    const v = state[k];
    if (v == null || v === '' || (Array.isArray(v) && !v.length)) return;
    parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(Array.isArray(v) ? v.join('|') : v));
  });
  return parts.join('&');
}

function dscDecodeState(str) {
  const out = {};
  String(str || '').replace(/^[?#]/, '').split('&').forEach(function (pair) {
    if (!pair) return;
    const i = pair.indexOf('=');
    if (i < 0) return;
    const k = decodeURIComponent(pair.slice(0, i));
    const v = decodeURIComponent(pair.slice(i + 1));
    if (!k) return;
    out[k] = v.indexOf('|') !== -1 ? v.split('|') : v;
  });
  return out;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    dscNorm: dscNorm, dscTokens: dscTokens, dscBuildIndex: dscBuildIndex,
    dscSearch: dscSearch, dscDoc: dscDoc, dscNetworkDoc: dscNetworkDoc,
    dscMatchesMulti: dscMatchesMulti, dscMatchesRange: dscMatchesRange,
    dscMatchesText: dscMatchesText, dscFacetCounts: dscFacetCounts,
    dscSortRows: dscSortRows, dscCompare: dscCompare,
    dscEncodeState: dscEncodeState, dscDecodeState: dscDecodeState,
    DSC_MATCH: DSC_MATCH, DSC_MATCH_LABEL: DSC_MATCH_LABEL,
    DSC_TYPE_ORDER: DSC_TYPE_ORDER, DSC_TYPE_LABEL: DSC_TYPE_LABEL
  };
}
