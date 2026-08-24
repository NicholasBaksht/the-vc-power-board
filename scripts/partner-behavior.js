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

   SECURITY: this file computes and renders; it writes nothing.
   Attribution changes happen only as commits to data files
   through the research workflow. Claim/Request submissions stay
   in the existing untrusted queue until reviewed.
   ============================================================ */

const PBEH_MIN_DIST = 6;      // rows-with-dimension needed before % bars render
const PBEH_MIN_INSIGHT = 3;   // attributable rows needed before any insight sentence
const PBEH_CMP_MIN_P = 5;     // dated+classified partner rows a window needs per dimension
const PBEH_CMP_MIN_F = 12;    // windowed firm deals a window needs per dimension
const PBEH_CMP_RECENT_YEARS = 3;  // the "recent" window, at year precision

function pbehNorm(x) {
  return String(x || '').toLowerCase().replace(/[^a-z0-9]/g, '');
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
  return null;
}

let _pbehIdx = null;
function pbehIndexes() {
  if (_pbehIdx) return _pbehIdx;
  const deals = {}, holds = {};
  if (typeof FIRM_DEALS !== 'undefined') {
    FIRM_DEALS.forEach(function (d) {
      deals[d.firmSlug + '|' + pbehNorm(d.company)] = d;
    });
  }
  if (typeof firms !== 'undefined') {
    firms.forEach(function (f) {
      (f.holdings || []).forEach(function (h) {
        holds[f.slug + '|' + pbehNorm(h.name)] = h;
      });
    });
  }
  _pbehIdx = { deals: deals, holds: holds };
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
                  sector: n.sector || null, role: n.role || null,
                  via: [] };
    const orgSlug = n.orgAtTime || p.firmSlug;   // Part 19: history-safe
    if (orgSlug) {
      const key = orgSlug + '|' + pbehNorm(n.name);
      const h = idx.holds[key];
      if (h) {
        if (row.year == null && h.investedYear != null) { row.year = h.investedYear; row.via.push('firm holdings'); }
        if (!row.ticker && h.ticker) row.ticker = h.ticker;
      }
      const d = idx.deals[key];
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
  if (c.n < PBEH_MIN_INSIGHT) return '';
  const bits = [];
  if (cmp && cmp.dims.length) {
    const d = cmp.dims[0];
    const top = d.partner.dist[0];
    const f = d.firm.dist.filter(function (x) { return x.label === top.label; })[0];
    if (f && f.pct > 0 && top.pct >= f.pct * 2) {
      bits.push('during the same period (' + cmp.window.label.toLowerCase() +
        '), attributable investments were roughly ' + Math.round(top.pct / f.pct) +
        ' times more concentrated in ' + top.label + ' than the firm overall');
    }
  }
  if (c.publicCount >= 2) {
    bits.push(c.publicCount + ' of ' + c.n + ' publicly attributable investments are companies that now trade publicly');
  }
  if (c.stageDist && c.stageDist[0].pct >= 50) {
    bits.push('most attributed rounds with a known stage were at ' + c.stageDist[0].label);
  }
  if (c.sectorDist && c.sectorDist[0].pct >= 40) {
    bits.push(c.sectorDist[0].label + ' represents the largest share of tracked investments with a known sector');
  }
  if (c.boards.length >= 2) {
    bits.push(c.boards.length + ' current board seats are on file');
  }
  if (!bits.length) return '';
  const s = bits.join('; ');
  return s.charAt(0).toUpperCase() + s.slice(1) + '.';
}

/* ---------- the partner-profile section (Part 8) ----------
   DESIGN INTENT: institutional research memo, not terminal output.
   Sans-serif carries the content (titles, company names, insight);
   monospace is demoted to small metadata (years, tickers, counts).
   Sections are separated by thin rules, not stacked cards. Every
   block renders only when its data exists - the bars in particular
   are dormant until a partner clears PBEH_MIN_DIST rows with the
   dimension on file, which today none does. */
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

function pbehRowHtml(r) {
  const meta = [r.stage, r.sector, r.year].filter(function (x) { return x != null; });
  return '<div class="pbeh-inv-row">' +
    '<span class="pbeh-inv-main">' + pgAttr(r.name) +
      (r.ticker ? '<span class="pbeh-ticker">' + pgAttr(r.ticker) + '</span>' : '') +
    '</span>' +
    (meta.length ? '<span class="pbeh-inv-meta">' + pgAttr(meta.join(' · ')) + '</span>' : '') +
    '</div>';
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

  // full list: dated rows first (newest), then undated alphabetically
  const dated = c.rows.filter(function (r) { return r.year != null; })
                      .sort(function (a, b) { return b.year - a.year; });
  const undated = c.rows.filter(function (r) { return r.year == null; })
                        .sort(function (a, b) { return a.name.localeCompare(b.name); });

  let h = '<div class="pbeh">';
  h += '<h3 class="pbeh-title">Observed Investment Behavior</h3>';

  // summary: the count is the headline, sourcing is quiet metadata
  h += '<div class="pbeh-summary">' +
    '<div class="pbeh-headline">' + c.n + ' publicly attributable investment' + (c.n === 1 ? '' : 's') +
      ' <span class="pbeh-headline-note">tracked by Power Board</span></div>' +
    (c.sourcesCount
      ? '<div class="pbeh-meta-line">' + c.sourcesCount + ' profile source' + (c.sourcesCount === 1 ? '' : 's') +
        ' · <a href="#" class="pbeh-srcjump" onclick="var e=[].slice.call(document.querySelectorAll(\'.pg-side-label\')).filter(function(x){return /Sources/.test(x.textContent);})[0];if(e)e.scrollIntoView({behavior:\'smooth\'});return false;">View sources</a></div>'
      : '') +
    '</div>';

  if (c.stageDist) {
    h += '<h4 class="pbeh-sub">Observed stage</h4>' +
      pbehBars(c.stageDist, 'Based on ' +
        c.rows.filter(function (r) { return r.stage; }).length + ' attributable rounds with a known stage');
  }
  // tenure split, shown only when it actually differs and a join year exists
  if (c.joinedYear != null && c.careerRows.length !== c.currentFirmRows.length) {
    h += '<div class="pbeh-meta-line">' + c.currentFirmRows.length + ' at ' +
      pgAttr(c.partner.firm || 'current firm') + ' since ' + c.joinedYear + ' · ' +
      c.careerRows.length + ' across tracked career</div>';
  }

  if (c.sectorDist) {
    h += '<h4 class="pbeh-sub">Sector concentration</h4>' +
      pbehBars(c.sectorDist, 'Based on ' +
        c.rows.filter(function (r) { return r.sector; }).length + ' attributable investments with a known sector');
  }

  h += '<h4 class="pbeh-sub">Attributable investments</h4>' +
    '<div class="pbeh-list">' + dated.map(pbehRowHtml).join('') + undated.map(pbehRowHtml).join('') + '</div>';
  if (!c.stageDist && !c.sectorDist && c.n < PBEH_MIN_DIST) {
    h += '<div class="pbeh-note">Limited attributable history - stage and sector patterns appear once ' +
         PBEH_MIN_DIST + ' or more attributed investments carry that detail.</div>';
  }
  if (c.last24mo > 0) {
    h += '<div class="pbeh-note">' + c.last24mo + ' of the ' + c.datedCount +
      ' dated attributions fall within the last 24 months. Undated attributions are not counted.</div>';
  }

  if (c.boards.length) {
    h += '<h4 class="pbeh-sub">Board &amp; portfolio involvement</h4>' +
      '<div class="pbeh-list">' + c.boards.map(function (b) {
        return '<div class="pbeh-inv-row"><span class="pbeh-inv-main">' + pgAttr(b) + '</span>' +
               '<span class="pbeh-inv-meta">Board involvement</span></div>';
      }).join('') + '</div>' +
      '<div class="pbeh-note">Board involvement is shown separately from investment attribution.</div>';
  }

  // Same-period partner vs firm - renders only when pbehComparison
  // clears its floors; specialization framing, never performance.
  const cmp = pbehComparison(slug);
  if (cmp) {
    const DIMLABEL = { sector: 'Sector', stage: 'Stage' };
    h += '<h4 class="pbeh-sub">Partner vs. firm <span class="pbeh-basis" title="Partner and firm behavior are compared over the same period where sufficient data is available. This reduces distortion from historical changes in the firm\'s investment strategy.">Same-period comparison · ' +
      pgAttr(cmp.window.label) + '</span></h4>';
    cmp.dims.forEach(function (d) {
      const tops = d.partner.dist.slice(0, 3);
      h += '<div class="pbeh-cmp-dim">' + pgAttr(DIMLABEL[d.key] || d.key) + '</div>';
      tops.forEach(function (row) {
        const f = d.firm.dist.filter(function (x) { return x.label === row.label; })[0];
        const fpct = f ? f.pct : 0;
        const max = Math.max(row.pct, fpct, 1);
        h += '<div class="pbeh-cmp-row"><span class="pbeh-cmp-label">' + pgAttr(row.label) + '</span>' +
          '<span class="pbeh-cmp-bars">' +
            '<span class="pbeh-cmp-bar"><span class="pbeh-cmp-fill p" style="width:' + Math.max(3, Math.round(100 * row.pct / max)) + '%"></span><span class="pbeh-cmp-pct">' + row.pct + '%</span></span>' +
            '<span class="pbeh-cmp-bar"><span class="pbeh-cmp-fill f" style="width:' + Math.max(3, Math.round(100 * fpct / max)) + '%"></span><span class="pbeh-cmp-pct">' + fpct + '%</span></span>' +
          '</span></div>';
      });
    });
    h += '<div class="pbeh-cmp-key"><span class="pbeh-cmp-swatch p"></span>Partner · <span class="pbeh-cmp-swatch f"></span>Firm</div>' +
      '<div class="pbeh-basis">Partner: ' + cmp.samples.partnerDated + ' dated attributable investment' +
      (cmp.samples.partnerDated === 1 ? '' : 's') +
      (cmp.samples.partnerTotal > cmp.samples.partnerDated ? ' (of ' + cmp.samples.partnerTotal + ' tracked at this firm)' : '') +
      ' · Firm: ' + cmp.samples.firmTracked + ' tracked investments in the same period</div>';
  }

  const insight = pbehInsight(c, cmp);
  if (insight) {
    h += '<h4 class="pbeh-sub">Power Board insight</h4>' +
      '<div class="pbeh-insight">' + pgAttr(insight) + '</div>';
  }

  h += '<div class="pbeh-legend">Attribution requires a source naming this person against the company; ' +
    'employment at the investing firm is never treated as attribution. This reflects what Power Board has ' +
    'sourced, not the person\'s complete record.</div>';
  h += '</div>';
  return h;
}
