/* ============================================================
   PARTNER-BEHAVIOR.JS
   ------------------------------------------------------------
   PARTNER INVESTMENT BEHAVIOR: what a specific person has
   publicly, attributably invested in - as distinct from what
   their firm has done. Extends the firm-level observed-behavior
   pipeline (FIRM_DEALS + taxonomy.js) down to people, without
   duplicating any of it.

   THE ATTRIBUTION MODEL
   The unit of attribution is one row of a partner's
   notableInvestments in data-partners.js. Those rows exist only
   when research placed the company against the person - from the
   firm's own team page, the partner's own bio, or press naming
   them - and are covered by the sources[] on the same profile.
   A firm's deal is NEVER attributed to a partner by inference:
   not by employment, not by sector overlap, not by timing. The
   1,048-profile dataset carries 2,005 such rows across 434
   partners; the other 614 partners honestly have none tracked.

   Each row supports, today or in the future:
     { name,                REQUIRED  company name
       ticker,              optional  currently-listed symbol
       stage, year, sector, optional  filled only by research or
                                      by the deterministic joins
                                      below - never guessed
       role,                optional  'led' | 'board' | ... only
                                      when a source states it
       orgAtTime,           optional  firmSlug AT INVESTMENT TIME;
                                      absent means current firm.
                                      This is what keeps history
                                      correct when people move -
                                      see firmHistory on the same
                                      profile for the move record
       evidence }           optional  [{url, type, checked}] per
                                      row, over and above the
                                      profile-level sources[]

   RUNTIME ENRICHMENT (deterministic joins, no inference):
     - firm holdings:  same firm + same company -> investedYear,
       ticker confirmation. 193 rows enrich this way today.
     - FIRM_DEALS:     same firm + same company -> round, dated
       announcement, sector via DEAL_SECTOR_MAP[deal.sector].
       Deals research currently covers 24 firms' 2026 activity,
       so this join is nearly empty today (1 row) and will grow
       with each deals pass. Joins are skipped entirely for
       partners whose departedYear predates the deal.
     The join adds METADATA about the company's round. It never
     creates an attribution that research did not.

   DISTRIBUTIONS require PBEH_MIN_DIST rows with the dimension
   known. Below that, no percentages render - "3 publicly
   attributable investments" is the honest output, and an empty
   chart is worse than no chart. Today essentially no partner
   clears the bar for stage/sector; the engines are here for the
   data, not the other way round.

   FUTURE INVESTOR TYPES (angels, strategics, operators): nothing
   in this file requires a firm. Every function takes the person
   record; firmSlug is optional context used only by the joins.
   An angel with notableInvestments and no firm renders the same
   section, minus firm joins. Duplicate identities are prevented
   by the slug registry in data-partners.js: one person, one
   slug, with same-name collisions resolved at research time by
   firm-suffixing - never by auto-merging.

   TITLES: preserved verbatim from the firm's own page. A title
   is never used to infer investment authority; only attributed
   rows are.

   INVESTMENT DATE DEFINITION (used by every time window here):
     - a year joined from firm holdings is the FIRM'S entry year for
       that company (year precision);
     - a year joined from FIRM_DEALS is the FINANCING ANNOUNCEMENT
       year (the row carries day precision; partner data is
       year-precision, so all windows run at year granularity).
     The two are both "when the investment became public" years and
     are safe to window together; neither is ever invented.

   TIME-NORMALIZED PARTNER vs FIRM (mandatory methodology):
     Comparisons run over the SAME period on both sides - never
     partner-recent vs firm-all-time. Window hierarchy:
       1. last 36 months, if both sides clear the sample floors;
       2. the partner's tenure at the current firm (joinedYear ->
          present), same period on the firm side;
       3. otherwise the module is HIDDEN. No fallback to all-time.
     Floors: PBEH_CMP_MIN_P dated+classified partner rows and
     PBEH_CMP_MIN_F windowed firm deals per dimension. Partner rows
     dated before joinedYear, or carrying an orgAtTime that is not
     the current firm, belong to CAREER view and are excluded from
     the current-firm comparison - an investment stays with the
     organization the person was at when it happened.

   ENRICHMENT PIPELINE (how rows get richer - the only sanctioned path):
     DISCOVER   the admin research queue computes, per partner, which
                fields are missing and what intelligence completing
                them unlocks, and emits a RESEARCH PACKET (JSON).
     STRUCTURE  an external research pass (CoWork) fills the packet
                from real sources under the never-guess rules. An LLM
                may extract fields FROM supplied evidence and map
                stage/sector text onto the existing taxonomies; it may
                never decide "probably Series A" without a source.
     SOURCE     every filled field carries its URL and type.
     VALIDATE   the returned batch is machine-checked here (slugs,
                taxonomy labels, date sanity, evidence presence)
                before any merge.
     APPROVE    the reviewed commit to data-partners.js IS the
                approval gate: a static site has no runtime write
                path, so nothing reaches canonical data except
                through this reviewed step. Trust states derive from
                evidence type, never from the fact of submission.
     CANONICAL  the UI graduates automatically: Level 2 bars, Level 3
                comparison and Level 4 insight all read the same rows
                and are already gated on sample floors.

   EVIDENCE TYPES on an NI row's evidence[] (depth matters and both
   levels are preserved - deal-level evidence never deletes the
   profile-level source that first attributed the company):
     'deal-announcement'   company financing announcement naming the
                           person  -> supports verified
     'firm-announcement'   the investing firm's own announcement
                           naming the person -> supports verified
     'partner-bio'         official partner biography listing the
                           company -> reported (profile-level)
     'portfolio-page'      firm portfolio page naming the person on
                           the deal -> reported
     'regulatory'          SEC or equivalent naming the person
                           -> verified
     'press'               reliable reporting naming the person as
                           investor/lead -> reported
   Source preference order for research: company financing
   announcement, investor announcement, partner bio, portfolio page,
   regulatory, reliable press. Search snippets, generic databases and
   unsourced model output are never attribution evidence.

   SECURITY: this file computes and renders; it writes nothing.
   Attribution changes happen only as commits to data files
   through the research workflow. Claim/Request submissions stay
   in the existing untrusted queue until reviewed.
   ============================================================ */

const PBEH_MIN_DIST = 5;      /* rows-with-dimension needed before % bars render.
   Five is where a dominant pattern stops being coin-flip noise while
   still being reachable by real research; below five the UI shows
   "limited sample" and the raw records, never percentages. */
const PBEH_MIN_INSIGHT = 3;   // attributable rows needed before any insight sentence
const PBEH_CMP_MIN_P = 5;     // dated+classified partner rows a window needs per dimension
const PBEH_CMP_MIN_F = 12;    // windowed firm deals a window needs per dimension
const PBEH_CMP_RECENT_YEARS = 3;  // the "recent" window, at year precision

function pbehNorm(x) {
  return String(x || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

/* Candidate lookup keys for one company name. Exact-match only, but a
   name like "Block (Square)" legitimately carries two exact names, and
   "SambaNova Systems" differs from "SambaNova" only by a corporate
   suffix. Substring matching stays forbidden - the audit showed it
   would pair Zoomcar with Zoom and Ringkas with Ring. */
function pbehAliasKeys(name) {
  const keys = [];
  const push = function (s) {
    const k = pbehNorm(s);
    if (k && k.length >= 3 && keys.indexOf(k) < 0) keys.push(k);
  };
  const raw = String(name || '');
  push(raw);
  const m = raw.match(/^(.*?)\s*\(([^)]+)\)\s*$/);   // "Base (Alias)"
  if (m) { push(m[1]); push(m[2]); }
  return keys;
}

/* Same-org fallback key: corporate suffix stripped. ONLY safe inside a
   single firm's own deal/holdings records, where two distinct portfolio
   companies differing only by "Systems"/"Labs" are not realistic. Never
   used for the global company-sector reference, where "Alloy" (identity
   fintech) must not inherit from "Alloy Enterprises" (manufacturing). */
function pbehSuffixKey(name) {
  const stripped = String(name || '')
    .replace(/\s*\((?:[^)]+)\)\s*$/, '')
    .replace(/[,.]?\s+(systems|technologies|technology|labs|inc|corp|corporation|ltd|gmbh|ag|se|group|company|co|holdings)\.?$/i, '');
  const k = pbehNorm(stripped);
  return k.length >= 4 ? k : null;
}

/* Round strings in FIRM_DEALS are recorded verbatim from sources
   ("seed financing", "Series B extension"). Bucketing is display
   normalisation only - the verbatim value stays in the deal row. */
function pbehRoundBucket(round) {
  const r = String(round || '').toLowerCase();
  if (!r || r === 'null') return null;
  if (r.indexOf('pre-seed') >= 0) return 'Pre-Seed';
  if (r.indexOf('seed') >= 0 && r.indexOf('series a') >= 0) return 'Seed';
  if (r.indexOf('seed') >= 0) return 'Seed';
  const m = r.match(/series ([a-g])/);
  if (m) return 'Series ' + m[1].toUpperCase();
  if (r.indexOf('growth') >= 0) return 'Growth';
  return null;
}

let _pbehIdx = null;
function pbehIndexes() {
  if (_pbehIdx) return _pbehIdx;
  const deals = {}, holds = {}, holdsByTicker = {}, research = {}, sectors = {};
  if (typeof FIRM_DEALS !== 'undefined') {
    FIRM_DEALS.forEach(function (d) {
      pbehAliasKeys(d.company).forEach(function (k) {
        deals[d.firmSlug + '|' + k] = d;
      });
      const sk = pbehSuffixKey(d.company);
      if (sk && !deals[d.firmSlug + '|' + sk]) deals[d.firmSlug + '|' + sk] = d;
    });
  }
  if (typeof firms !== 'undefined') {
    firms.forEach(function (f) {
      (f.holdings || []).forEach(function (h) {
        pbehAliasKeys(h.name).forEach(function (k) {
          holds[f.slug + '|' + k] = h;
        });
        const sk = pbehSuffixKey(h.name);
        if (sk && !holds[f.slug + '|' + sk]) holds[f.slug + '|' + sk] = h;
        if (h.ticker) holdsByTicker[f.slug + '|' + h.ticker] = h;
      });
    });
  }
  /* PEER-RESEARCH REUSE: a round researched with deal-level evidence for
     one partner describes the FIRM's entry into that company. A colleague
     at the same org, attributed to the same company, may reuse the round
     facts - same logic as the FIRM_DEALS join, sourced from the same URL.
     Attribution is never reused; only round metadata is. */
  if (typeof partnerProfiles !== 'undefined') {
    Object.keys(partnerProfiles).forEach(function (ps) {
      const pp = partnerProfiles[ps];
      const org0 = pp.firmSlug;
      (pp.notableInvestments || []).forEach(function (n) {
        if (n.stage == null && n.year == null) return;
        const ev = (n.evidence || []).filter(function (e) {
          return e.type === 'deal-announcement' || e.type === 'firm-announcement' || e.type === 'regulatory';
        });
        if (!ev.length) return;
        const org = n.orgAtTime || org0;
        if (!org) return;
        pbehAliasKeys(n.name).forEach(function (k) {
          const key = org + '|' + k;
          if (!research[key]) research[key] = {
            stage: n.stage || null, year: n.year || null,
            sector: n.sector || null, subsector: n.subsector || null,
            url: ev[0].url, from: ps
          };
        });
      });
    });
  }
  /* company-sector reference lookup, expanded by declared aliases */
  if (typeof COMPANY_SECTORS !== 'undefined') {
    Object.keys(COMPANY_SECTORS).forEach(function (k) {
      sectors[k] = COMPANY_SECTORS[k];
      (COMPANY_SECTORS[k].aliases || []).forEach(function (a) {
        const ak = pbehNorm(a);
        if (ak && !sectors[ak]) sectors[ak] = COMPANY_SECTORS[k];
      });
    });
  }
  _pbehIdx = { deals: deals, holds: holds, holdsByTicker: holdsByTicker,
               research: research, sectors: sectors };
  return _pbehIdx;
}

/* ---------- the attribution computation ---------- */
function pbehCompute(slug) {
  const p = (typeof partnerProfiles !== 'undefined') && partnerProfiles[slug];
  if (!p) return null;
  const idx = pbehIndexes();
  const ni = p.notableInvestments || [];

  const rows = ni.map(function (n) {
    const row = { name: n.name, ticker: n.ticker || null,
                  stage: n.stage || null, year: n.year || null,
                  yearPrecision: n.yearPrecision || (n.year != null ? 'year' : null),
                  sector: n.sector || null, subsector: n.subsector || null,
                  role: n.role || null,
                  orgAtTime: n.orgAtTime || null,
                  evidence: n.evidence || [],
                  via: [] };
    // deal-level evidence recorded by research counts as direct support
    if (row.evidence.some(function (e) {
      return e.type === 'deal-announcement' || e.type === 'firm-announcement' || e.type === 'regulatory';
    })) row.dealSource = row.dealSource || (row.evidence[0] && row.evidence[0].url);
    const orgSlug = n.orgAtTime || p.firmSlug;   // Part 19: history-safe
    if (orgSlug) {
      const keys = pbehAliasKeys(n.name);
      const skey = pbehSuffixKey(n.name);
      const lookup = function (map, sameOrgOnly) {
        for (let i = 0; i < keys.length; i++) {
          const v = map[orgSlug + '|' + keys[i]];
          if (v) return v;
        }
        // suffix fallback stays inside the org's own records
        if (sameOrgOnly && skey) return map[orgSlug + '|' + skey] || null;
        return null;
      };
      const h = lookup(idx.holds, true) ||
                (n.ticker ? idx.holdsByTicker[orgSlug + '|' + n.ticker] : null);
      if (h) {
        if (row.year == null && h.investedYear != null) { row.year = h.investedYear; row.via.push('firm holdings'); }
        if (!row.ticker && h.ticker) row.ticker = h.ticker;
      }
      const d = lookup(idx.deals, true);
      /* company-sector reference: sector is a property of the company,
         not of any one deal, so a verified company entry may fill a
         missing sector on any row naming it. It never supplies stage
         or year - those belong to a specific investment. Exact-name and
         declared-alias matches only; no suffix fallback here. */
      if (row.sector == null) {
        let cref = null;
        for (let i = 0; i < keys.length && !cref; i++) cref = idx.sectors[keys[i]];
        if (cref) {
          row.sector = cref.sector;
          if (!row.subsector && cref.subsector) row.subsector = cref.subsector;
          row.via.push('company reference');
        }
      }
      // a deal announced after the person verifiably left carries no metadata for them
      const dealYear = d && d.announcedDate ? +String(d.announcedDate).slice(0, 4) : null;
      const departed = (p.departedYear != null) && dealYear != null && dealYear > p.departedYear;
      if (d && !departed) {
        if (row.stage == null) row.stage = pbehRoundBucket(d.round);
        if (row.year == null && dealYear) row.year = dealYear;
        if (row.sector == null && typeof DEAL_SECTOR_MAP !== 'undefined' && DEAL_SECTOR_MAP[d.sector]) {
          row.sector = DEAL_SECTOR_MAP[d.sector][0] || null;
        }
        if (d.sourceUrl) row.dealSource = d.sourceUrl;
        row.via.push('tracked deal');
      }
      /* peer-research reuse: a colleague's sourced round for the same
         company at the same org supplies the round facts this bare row
         lacks. The row's own attribution evidence is untouched. */
      if (row.stage == null || row.year == null || row.sector == null) {
        let rr = null;
        for (let i = 0; i < keys.length && !rr; i++) rr = idx.research[orgSlug + '|' + keys[i]];
        if (rr && rr.from !== slug) {
          const rDeparted = (p.departedYear != null) && rr.year != null && rr.year > p.departedYear;
          if (!rDeparted) {
            if (row.stage == null && rr.stage) row.stage = rr.stage;
            if (row.year == null && rr.year) { row.year = rr.year; row.yearPrecision = row.yearPrecision || 'year'; }
            if (row.sector == null && rr.sector) { row.sector = rr.sector; if (!row.subsector && rr.subsector) row.subsector = rr.subsector; }
            if (!row.dealSource) row.dealSource = rr.url;
            row.via.push('peer research');
          }
        }
      }
    }
    return row;
  });

  const dist = function (key) {
    const known = rows.filter(function (r) { return r[key]; });
    if (known.length < PBEH_MIN_DIST) return null;
    const c = {};
    known.forEach(function (r) { c[r[key]] = (c[r[key]] || 0) + 1; });
    return Object.keys(c).map(function (k) {
      return { label: k, n: c[k], pct: Math.round(100 * c[k] / known.length) };
    }).sort(function (a, b) { return b.n - a.n; });
  };

  const dated = rows.filter(function (r) { return r.year != null; })
                    .sort(function (a, b) { return b.year - a.year; });
  const nowYear = new Date().getFullYear();

  /* CURRENT-FIRM view vs CAREER view (two different questions).
     A row leaves the current-firm view when its org at investment
     time is known to be another firm, or when it is dated before
     the recorded join year. Undated rows with no org marker stay:
     absence of orgAtTime means current firm by schema. */
  const joined = (typeof p.joinedYear === 'number') ? p.joinedYear : null;
  const currentFirmRows = rows.filter(function (r) {
    const org = r.orgAtTime || null;
    if (org && p.firmSlug && org !== p.firmSlug) return false;
    if (joined != null && r.year != null && r.year < joined) return false;
    return true;
  });

  return {
    joinedYear: joined,
    careerRows: rows,
    currentFirmRows: currentFirmRows,
    partner: p,
    rows: rows,
    n: rows.length,
    publicCount: rows.filter(function (r) { return r.ticker; }).length,
    inFirmPortfolio: rows.filter(function (r) { return r.via.indexOf('firm holdings') >= 0; }).length,
    datedCount: dated.length,
    recent: dated.slice(0, 5),
    last24mo: dated.filter(function (r) { return nowYear - r.year <= 2; }).length,
    stageDist: dist('stage'),
    sectorDist: dist('sector'),
    boards: p.boardSeats || [],
    sourcesCount: (p.sources || []).length
  };
}

/* ---------- time-normalized partner vs firm (mandatory rules) ---------- */
function pbehFirmWindowRows(firmSlug, startYear) {
  if (typeof FIRM_DEALS === 'undefined') return [];
  return FIRM_DEALS.filter(function (d) {
    if (d.firmSlug !== firmSlug || !d.announcedDate) return false;
    return +String(d.announcedDate).slice(0, 4) >= startYear;
  }).map(function (d) {
    return {
      stage: pbehRoundBucket(d.round),
      sector: (typeof DEAL_SECTOR_MAP !== 'undefined' && DEAL_SECTOR_MAP[d.sector])
              ? DEAL_SECTOR_MAP[d.sector][0] : null
    };
  });
}

function pbehDistOf(list, key, minN) {
  const known = list.filter(function (r) { return r[key]; });
  if (known.length < minN) return null;
  const c = {};
  known.forEach(function (r) { c[r[key]] = (c[r[key]] || 0) + 1; });
  return { n: known.length,
    dist: Object.keys(c).map(function (k) {
      return { label: k, n: c[k], pct: Math.round(100 * c[k] / known.length) };
    }).sort(function (a, b) { return b.n - a.n; }) };
}

/* Returns null unless a like-for-like comparison is responsibly
   possible - hierarchy and floors per the header. Never falls back
   to all-time firm history. */
function pbehComparison(slug) {
  const c = pbehCompute(slug);
  if (!c || !c.partner.firmSlug) return null;
  const nowYear = new Date().getFullYear();

  const windows = [];
  windows.push({ start: nowYear - PBEH_CMP_RECENT_YEARS + 1,
                 label: 'Last ' + (PBEH_CMP_RECENT_YEARS * 12) + ' months' });
  if (c.joinedYear != null && c.joinedYear > nowYear - 25) {
    windows.push({ start: c.joinedYear, label: 'Partner tenure · ' + c.joinedYear + ' - present' });
  }

  for (let i = 0; i < windows.length; i++) {
    const w = windows[i];
    const pRows = c.currentFirmRows.filter(function (r) { return r.year != null && r.year >= w.start; });
    const fRows = pbehFirmWindowRows(c.partner.firmSlug, w.start);
    const dims = [];
    ['sector', 'stage'].forEach(function (key) {
      const pd = pbehDistOf(pRows, key, PBEH_CMP_MIN_P);
      const fd = pbehDistOf(fRows, key, PBEH_CMP_MIN_F);
      if (pd && fd) dims.push({ key: key, partner: pd, firm: fd });
    });
    if (dims.length) {
      return { window: w, dims: dims,
               samples: { partnerDated: pRows.length, partnerTotal: c.currentFirmRows.length,
                          firmTracked: fRows.length } };
    }
  }
  return null;
}

/* Research-queue flags: WHY a same-period comparison cannot be
   generated for this person. Consumed by the People tab. */
function pbehComparisonFlags(slug) {
  const c = pbehCompute(slug);
  if (!c) return [];
  const flags = [];
  if (c.n === 0) return flags;                       // already flagged as no attribution
  if (c.joinedYear == null) flags.push('join year missing');
  if (typeof FIRM_DEALS !== 'undefined' && c.partner.firmSlug) {
    if (!FIRM_DEALS.some(function (d) { return d.firmSlug === c.partner.firmSlug; }))
      flags.push('firm deals not tracked');
  }
  const dated = c.currentFirmRows.filter(function (r) { return r.year != null; }).length;
  if (dated < PBEH_CMP_MIN_P) flags.push('insufficient dated attributions for comparison');
  return flags;
}

/* ---------- reusable, unweighted signals (Parts 11-13) ----------
   Raw material for a future partner-level Power Match score and for
   partner-context in Conflict Check. Deliberately NO weights and NO
   composite number: that requires validated scoring logic, and a
   made-up weighting today would silently distort matches. Conflict
   Check consumers get portfolio overlap as ADDITIONAL context; the
   firm-level check is untouched and remains authoritative. */
function pbehSignals(slug) {
  const c = pbehCompute(slug);
  if (!c) return null;
  return {
    attributed_investment_count: c.n,
    dated_investment_count: c.datedCount,
    recent_activity_24mo: c.last24mo,
    public_outcome_count: c.publicCount,
    board_role_count: c.boards.length,
    firm_portfolio_overlap: c.rows.filter(function (r) { return r.via.length; })
                                  .map(function (r) { return r.name; }),
    observed_stage_dist: c.stageDist,        // null until sample suffices
    observed_sector_dist: c.sectorDist,      // null until sample suffices
    stated_focus: c.partner.sectors || [],   // stated by the firm, distinct from observed
    stated_focus_confidence: c.partner.sectorsConfidence || null,
    career_attributed_count: c.careerRows.length,
    current_firm_attributed_count: c.currentFirmRows.length,
    // same-period comparison, null unless responsibly computable;
    // any future Power Match partner scoring must read THIS, never
    // a partner-recent vs firm-all-time mix.
    same_period: (function () {
      const cmp = pbehComparison(slug);
      if (!cmp) return null;
      return { window: cmp.window.label, samples: cmp.samples,
               dims: cmp.dims.map(function (d) {
                 return { key: d.key, partner: d.partner.dist, firm: d.firm.dist };
               }) };
    })()
  };
}

/* ---------- deterministic insight (Part 9) ----------
   Template sentences computed only from real counts. No adjectives
   about skill, no speculation, nothing an LLM dreamed up. */
function pbehInsight(c, cmp) {
  /* INSIGHT QUALITY RULE: a sentence renders only if it could change a
     founder's decision about researching this investor. Counts of
     public outcomes or board seats fail that test and were removed.
     What passes: specialization vs the firm over the same period, and
     dominant observed stage/sector once samples exist. NO insight is
     the correct output for most partners today. */
  if (c.n < PBEH_MIN_INSIGHT) return '';
  const bits = [];
  /* MEANINGFUL-DIFFERENCE RULE: a comparison sentence requires the
     partner's top label to differ from the firm's same-label share by
     BOTH >= 15 percentage points AND >= 1.75x, with both sample floors
     already met by pbehComparison. 31% vs 29% must never become an
     insight. If every dimension's top-label gap is under 8 points, the
     honest sentence is that behavior is broadly similar. */
  if (cmp && cmp.dims.length) {
    let anyMeaningful = false, allSmall = true;
    cmp.dims.forEach(function (d) {
      const top = d.partner.dist[0];
      const f = d.firm.dist.filter(function (x) { return x.label === top.label; })[0];
      const fpct = f ? f.pct : 0;
      const gap = top.pct - fpct;
      if (gap >= 8) allSmall = false;
      if (!anyMeaningful && gap >= 15 && fpct > 0 && top.pct >= fpct * 1.75) {
        anyMeaningful = true;
        bits.push('during the same period (' + cmp.window.label.toLowerCase() +
          '), attributable investments were considerably more concentrated in ' +
          top.label + ' than the firm\'s tracked investments (' + top.pct + '% vs ' + fpct + '%)');
      }
    });
    if (!anyMeaningful && allSmall) {
      bits.push('observed behavior during the same period is broadly similar to the firm overall');
    }
  }
  if (c.stageDist && c.stageDist[0].pct >= 50) {
    const t = c.stageDist[0];
    const kn = c.rows.filter(function (r) { return r.stage; }).length;
    bits.push(t.label + ' accounts for ' + t.n + ' of ' + kn + ' staged attributable investments');
  }
  if (c.sectorDist && c.sectorDist[0].pct >= 40) {
    const t2 = c.sectorDist[0];
    const kn2 = c.rows.filter(function (r) { return r.sector; }).length;
    bits.push(t2.label + ' represents ' + t2.n + ' of ' + kn2 + ' classified attributable investments');
  }
  if (!bits.length) return '';
  const t = bits.join('; ');
  return t.charAt(0).toUpperCase() + t.slice(1) + '.';
}

/* ============================================================
   RESEARCH ENRICHMENT (admin-facing; consumed by #research People)
   Per-partner: what is missing, what completing it unlocks, and a
   deterministic research priority. Priority rules (documented, no
   hidden weights):
     HIGH    5+ attributions and the majority lack dates or stages -
             one research pass unlocks the most intelligence here
     MEDIUM  3-4 attributions with gaps, or 5+ nearly complete
     LOW     1-2 attributions, or already effectively complete
   ============================================================ */
function pbehEnrichment(slug) {
  const c = pbehCompute(slug);
  if (!c || c.n === 0) return null;
  const missing = {
    dates:   c.rows.filter(function (r) { return r.year == null; }).length,
    stages:  c.rows.filter(function (r) { return !r.stage; }).length,
    sectors: c.rows.filter(function (r) { return !r.sector; }).length,
    dealEvidence: c.rows.filter(function (r) { return !r.dealSource; }).length,
    joinYear: c.joinedYear == null
  };
  const staged = c.n - missing.stages, dated = c.n - missing.dates, sectored = c.n - missing.sectors;
  const unlocks = [];
  if (staged < PBEH_MIN_DIST && c.n >= PBEH_MIN_DIST)
    unlocks.push('stage on ' + (PBEH_MIN_DIST - staged) + ' more rows -> Observed Stage');
  if (sectored < PBEH_MIN_DIST && c.n >= PBEH_MIN_DIST)
    unlocks.push('sector on ' + (PBEH_MIN_DIST - sectored) + ' more rows -> Observed Sectors');
  if (!pbehComparison(slug)) {
    const need = [];
    if (missing.joinYear) need.push('join year');
    if (dated < PBEH_CMP_MIN_P) need.push('dates on ' + (PBEH_CMP_MIN_P - dated) + '+ rows');
    if (typeof FIRM_DEALS !== 'undefined' && c.partner.firmSlug &&
        !FIRM_DEALS.some(function (d) { return d.firmSlug === c.partner.firmSlug; }))
      need.push('firm deal coverage');
    if (need.length) unlocks.push(need.join(' + ') + ' -> Partner vs. Firm');
  }
  const gapShare = (missing.dates + missing.stages) / (2 * c.n);
  let priority;
  if (c.n >= 5 && gapShare > 0.5) priority = 'high';
  else if (c.n >= 3 && gapShare > 0.25) priority = 'medium';
  else if (c.n >= 5) priority = 'medium';
  else priority = 'low';
  return { n: c.n, missing: missing, unlocks: unlocks, priority: priority,
           sources: c.sourcesCount, joinedYear: c.joinedYear };
}

/* A machine-readable packet for one research pass: everything known,
   everything missing, nothing invented. The external researcher fills
   nulls from real sources or leaves them null. */
function pbehResearchPacket(slugs) {
  return slugs.map(function (slug) {
    const p = partnerProfiles[slug];
    const c = pbehCompute(slug);
    if (!c || c.n === 0) return null;
    return {
      slug: slug, name: p.name, firm: p.firm || null, firmSlug: p.firmSlug || null,
      title: p.title || null, joinedYear: c.joinedYear,
      knownSources: (p.sources || []).map(function (x) { return x.url; }),
      investments: c.rows.map(function (r) {
        return { company: r.name, ticker: r.ticker,
                 year: r.year, stage: r.stage, sector: r.sector,
                 orgAtTime: null, evidence: [] };
      })
    };
  }).filter(Boolean);
}

/* ---------- the partner-profile section ----------
   STRUCTURE (progressive - richer data upgrades it automatically):
     LEVEL 1  summary strip · attribution timeline · research context
              (source coverage, board involvement, comparison status)
     LEVEL 2  + observed stage / sector bars (sample floors)
     LEVEL 3  + partner-vs-firm same-period module
     LEVEL 4  + founder-relevant deterministic insight
   The limited-data state is designed, not apologised for: dated and
   undated attributions are separated honestly, tickers are muted
   metadata (never pills), and the only full-width rules are the two
   major structural divisions. */
function pbehBars(distList, basisText) {
  const max = distList[0].pct;
  return '<div class="pbeh-bars">' + distList.map(function (d) {
    return '<div class="pbeh-bar-row">' +
      '<span class="pbeh-bar-label">' + pgAttr(d.label) + '</span>' +
      '<span class="pbeh-bar-track"><span class="pbeh-bar-fill" style="width:' +
        Math.max(4, Math.round(100 * d.pct / max)) + '%"></span></span>' +
      '<span class="pbeh-bar-pct">' + d.pct + '%</span></div>';
  }).join('') +
  (basisText ? '<div class="pbeh-basis">' + pgAttr(basisText) + '</div>' : '') +
  '</div>';
}

function pbehTimeline(c) {
  const dated = c.rows.filter(function (r) { return r.year != null; })
                      .sort(function (a, b) { return b.year - a.year; });
  const undated = c.rows.filter(function (r) { return r.year == null; })
                        .sort(function (a, b) { return a.name.localeCompare(b.name); });
  const entry = function (r) {
    const meta = [r.ticker, r.stage, r.subsector || r.sector].filter(Boolean).join(' · ');
    return '<div class="pbeh-tl-item"><span class="pbeh-tl-dot"></span>' +
      '<div class="pbeh-tl-body"><div class="pbeh-tl-name">' + pgAttr(r.name) + '</div>' +
      (meta ? '<div class="pbeh-tl-meta">' + pgAttr(meta) + '</div>' : '') +
      (r.evidence && r.evidence.length
        ? '<details class="pbeh-ev"><summary>Evidence</summary>' +
          r.evidence.map(function (e) {
            let host = ''; try { host = e.url.split('/')[2].replace(/^www\./, ''); } catch (x) {}
            const TYPE = { 'deal-announcement': 'Deal announcement', 'firm-announcement': 'Firm announcement',
                           'partner-bio': 'Partner biography', 'portfolio-page': 'Portfolio page',
                           'regulatory': 'Regulatory filing', 'press': 'Press' };
            const status = (e.type === 'deal-announcement' || e.type === 'firm-announcement' || e.type === 'regulatory')
                           ? 'Verified' : 'Reported';
            return '<div class="pbeh-ev-row"><a href="' + pgAttr(e.url) +
              '" target="_blank" rel="noopener noreferrer">' + pgAttr(host) + ' ↗</a>' +
              '<span class="pbeh-ev-meta">' + pgAttr(TYPE[e.type] || e.type) + ' · ' + status +
              (e.checked ? ' · checked ' + pgAttr(e.checked) : '') + '</span></div>';
          }).join('') + '</details>'
        : (r.dealSource ? '<a class="pbeh-tl-evidence" href="' + pgAttr(r.dealSource) +
           '" target="_blank" rel="noopener noreferrer">Evidence →</a>' : '')) +
      '</div></div>';
  };
  let h = '';
  let lastYear = null;
  dated.forEach(function (r) {
    if (r.year !== lastYear) { h += '<div class="pbeh-tl-year">' + r.year + '</div>'; lastYear = r.year; }
    h += entry(r);
  });
  if (undated.length) {
    h += '<div class="pbeh-tl-year pbeh-tl-undated">Undated attributable investments</div>';
    undated.forEach(function (r) { h += entry(r); });
  }
  return '<div class="pbeh-tl">' + h + '</div>';
}

function pbehHtml(slug) {
  if (typeof pbehCompute !== 'function') return '';
  const c = pbehCompute(slug);
  if (!c) return '';

  if (c.n === 0) {
    return '<div class="pbeh"><h3 class="pbeh-title">Observed Investment Behavior</h3>' +
      '<p class="pbeh-empty">Not enough publicly attributable investment history yet. ' +
      'Power Board has not sourced individual attributions for this person - ' +
      'which is not the same as the person having made no investments.</p></div>';
  }

  const dated = c.rows.filter(function (r) { return r.year != null; });
  const years = dated.map(function (r) { return r.year; });
  const span = (years.length >= 2)
    ? Math.min.apply(null, years) + '\u2013' + Math.max.apply(null, years) : null;
  const cmp = pbehComparison(slug);

  // ---- summary strip: research-quality metrics in priority order.
  //      Board involvement lives in its own section; the strip leads
  //      with coverage, because coverage is what a founder must know
  //      to read the percentages correctly. Never padded to four. ----
  const direct = c.rows.filter(function (r) { return r.dealSource; }).length;
  const staged = c.rows.filter(function (r) { return r.stage; }).length;
  const sectored = c.rows.filter(function (r) { return r.sector; }).length;
  const stats = [];
  stats.push({ v: c.n, l: 'Attributable investment' + (c.n === 1 ? '' : 's') });
  if (direct) stats.push({ v: direct, l: 'Direct deal source' + (direct === 1 ? '' : 's') });
  if (staged) stats.push({ v: staged + ' / ' + c.n, l: 'Stage coverage' });
  if (sectored && stats.length < 4) stats.push({ v: sectored + ' / ' + c.n, l: 'Sector coverage' });
  if (stats.length < 4 && span && dated.length >= 3) stats.push({ v: span, l: 'Known dated span' });
  if (stats.length < 3 && c.sourcesCount) stats.push({ v: c.sourcesCount, l: 'Profile source' + (c.sourcesCount === 1 ? '' : 's') });

  let h = '<div class="pbeh"><h3 class="pbeh-title">Observed Investment Behavior</h3>';
  h += '<div class="pbeh-strip">' + stats.slice(0, 4).map(function (x) {
    return '<div class="pbeh-stat"><div class="pbeh-stat-v">' + pgAttr(x.v) +
           '</div><div class="pbeh-stat-l">' + pgAttr(x.l) + '</div></div>';
  }).join('') + '</div>';

  // ---- build the pieces, then compose the layout by data level ----
  let stageHtml = '', sectorHtml = '';
  if (c.stageDist) {
    stageHtml = '<h4 class="pbeh-sub">Observed stage</h4>' +
      pbehBars(c.stageDist, 'Based on ' + staged + ' of ' + c.n +
        ' attributable investments with known stage');
  }
  if (c.sectorDist) {
    sectorHtml = '<h4 class="pbeh-sub">Sector concentration</h4>' +
      pbehBars(c.sectorDist, 'Based on ' + sectored + ' of ' + c.n +
        ' attributable investments with known sector');
  }

  let historyHtml = '<h4 class="pbeh-sub">Attribution history</h4>' + pbehTimeline(c);
  if (c.joinedYear != null && c.careerRows.length !== c.currentFirmRows.length) {
    historyHtml += '<div class="pbeh-note">' + c.currentFirmRows.length + ' of these are at ' +
      pgAttr(c.partner.firm || 'the current firm') + ' since ' + c.joinedYear +
      '; the remainder belong to earlier tracked roles.</div>';
  }

  let coverageHtml = '<h4 class="pbeh-sub">Source coverage</h4><div class="pbeh-ctx">' +
    '<div class="pbeh-ctx-row">' + c.n + ' attributable investment' + (c.n === 1 ? '' : 's') +
      ' supported by ' + (c.sourcesCount || 0) + ' profile source' + (c.sourcesCount === 1 ? '' : 's') + '</div>' +
    (direct ? '<div class="pbeh-ctx-row">' + direct + ' supported by direct deal announcements</div>' +
              '<div class="pbeh-ctx-row">' + (c.n - direct) + ' supported by profile-level attribution</div>' : '') +
    (c.sourcesCount ? '<a class="pbeh-ctx-link" href="#" onclick="var e=[].slice.call(document.querySelectorAll(\'.pg-side-label\')).filter(function(x){return /Sources/.test(x.textContent);})[0];if(e)e.scrollIntoView({behavior:\'smooth\'});return false;">View sources →</a>' : '') +
    '</div>';

  let boardHtml = '';
  if (c.boards.length) {
    boardHtml = '<h4 class="pbeh-sub" title="Board relationships are tracked separately from investment attribution.">Board involvement</h4>' +
      '<div class="pbeh-ctx">' + c.boards.map(function (b) {
        const former = /\s*\((former|past)\)\s*$/i.test(b);
        const nm = b.replace(/\s*\((former|past)\)\s*$/i, '');
        return '<div class="pbeh-board"><div class="pbeh-tl-name">' + pgAttr(nm) + '</div>' +
               '<div class="pbeh-tl-meta">' + (former ? 'Former board role' : 'Board role') + '</div></div>';
      }).join('') + '</div>';
  }

  let cmpHtml = '';
  if (cmp) {
    const DIMLABEL = { sector: 'Sector', stage: 'Stage' };
    cmpHtml = '<h4 class="pbeh-sub">Partner vs. firm</h4>' +
      '<div class="pbeh-basis" title="Partner and firm behavior are compared over the same period where sufficient data is available. This reduces distortion from historical changes in the firm\'s investment strategy.">Same-period comparison · ' + pgAttr(cmp.window.label) + '</div>';
    cmp.dims.forEach(function (d) {
      const tops = d.partner.dist.slice(0, 3);
      cmpHtml += '<div class="pbeh-cmp-dim">' + pgAttr(DIMLABEL[d.key] || d.key) + '</div>';
      tops.forEach(function (row) {
        const f = d.firm.dist.filter(function (x) { return x.label === row.label; })[0];
        const fpct = f ? f.pct : 0;
        const max = Math.max(row.pct, fpct, 1);
        cmpHtml += '<div class="pbeh-cmp-row"><span class="pbeh-cmp-label">' + pgAttr(row.label) + '</span>' +
          '<span class="pbeh-cmp-bars">' +
            '<span class="pbeh-cmp-bar"><span class="pbeh-cmp-fill p" style="width:' + Math.max(3, Math.round(100 * row.pct / max)) + '%"></span><span class="pbeh-cmp-pct">' + row.pct + '%</span></span>' +
            '<span class="pbeh-cmp-bar"><span class="pbeh-cmp-fill f" style="width:' + Math.max(3, Math.round(100 * fpct / max)) + '%"></span><span class="pbeh-cmp-pct">' + fpct + '%</span></span>' +
          '</span></div>';
      });
    });
    cmpHtml += '<div class="pbeh-cmp-key"><span class="pbeh-cmp-swatch p"></span>Partner · <span class="pbeh-cmp-swatch f"></span>Firm</div>' +
      '<div class="pbeh-basis">Partner: ' + cmp.samples.partnerDated + ' dated · Firm: ' +
      cmp.samples.firmTracked + ' tracked, same period</div>';
  } else {
    cmpHtml = '<div class="pbeh-locked" title="A comparison renders only when partner and firm behavior can be measured over the same period with sufficient dated, classified attributions on both sides. No fallback to all-time firm history is ever used.">Partner vs. firm · not enough comparable data yet</div>';
  }

  // ---- composition ----
  // With analytical bars: analysis sits LEFT, with attribution history
  // and source coverage beside it. Without bars: history left, research
  // context in the narrow right rail (the limited-data layout).
  if (stageHtml || sectorHtml) {
    h += '<div class="pbeh-grid pbeh-grid-rich">' +
      '<div class="pbeh-col">' + stageHtml + sectorHtml + cmpHtml + '</div>' +
      '<div class="pbeh-col">' + historyHtml + coverageHtml + boardHtml + '</div>' +
      '</div>';
  } else {
    h += '<div class="pbeh-grid"><div class="pbeh-main">' + historyHtml + '</div>' +
      '<aside class="pbeh-side">' + coverageHtml + boardHtml + cmpHtml + '</aside></div>';
  }

  // ---- LEVEL 4: insight only when it passes the founder-decision test ----
  const insight = pbehInsight(c, cmp);
  if (insight) {
    h += '<h4 class="pbeh-sub">Power Board insight</h4>' +
      '<div class="pbeh-insight">' + pgAttr(insight) + '</div>';
  }

  h += '<details class="pbeh-method"><summary>About investment attribution</summary>' +
    '<p>Power Board only attributes an investment to a person when public evidence connects that person ' +
    'to the company - a firm\'s own team page, the person\'s official biography, or a financing ' +
    'announcement naming them. Working at the investing firm alone is never treated as attribution. ' +
    'Percentages are computed over the investments where the detail is known, with coverage shown, and ' +
    'partner-versus-firm comparisons are only drawn over the same time period on both sides. Sector ' +
    'labels may come from a verified company reference - what a company does is a fact about the ' +
    'company, not any one deal - while stage and year always require a source about the specific ' +
    'investment. Public records may not represent the person\'s complete investment history.</p></details>';
  h += '</div>';
  return h;
}
