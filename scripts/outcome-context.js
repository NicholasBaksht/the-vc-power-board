/* ============================================================
   OUTCOME-CONTEXT.JS
   Phase 5F. What happened to the companies an investor actually
   backed - counted against the right denominator, for the right
   investor, and never described as performance.

   FOUR SEPARATE ATTRIBUTION SETS, NEVER MIXED

     Partner   companies attributed to that PERSON
     Angel     companies attributed to that PERSON
     Firm      companies the FIRM participated in
     Fund      companies attributed to that FUND

   A partner's outcomes are not their firm's outcomes. Someone who
   joined in 2025 did not make the firm's 2018 investment, and the
   person-attributed set is the only thing that keeps that true.

   WHERE THAT GUARANTEE ACTUALLY COMES FROM: careerRows are built
   from the partner's own sourced notableInvestments, which Phase 1
   established are person-attributed by construction - firm
   employment is never partner attribution, and a source must name
   that person against that company. So a firm investment made
   before someone arrived never enters their set in the first place,
   and no date filter is needed here to keep it out.

   It is NOT orgAtTime that provides this. That field is populated
   on only 115 of 1,762 rows, so it is useful context where present
   and cannot be relied on as the mechanism.

   THE HOLDINGS TRAP, AND WHY THIS FILE IGNORES IT

   157 firms carry a `holdings` list - 301 companies with tickers,
   titled "notable public portfolio companies". Counting outcomes
   from that list would report that essentially every tracked holding
   is public, which is true and completely meaningless: the list only
   contains public companies. It is a selection artifact wearing the
   costume of a finding.

   So firm outcome context uses tracked firm PARTICIPATIONS as its
   denominator, which today yields zero known outcomes because those
   participations are recent. Zero is the honest answer and the
   section simply does not render.

   MEASURED COVERAGE

     Partners   281 with at least one known outcome, 559 rows
     Angels     7 with at least one known outcome, 24 rows
     Firms      0 - participations are too recent
     Funds      0 - no fund attribution exists

   NOTHING HERE IS A RATE

   No success rate, no hit rate, no ranking by wins. An acquisition
   is not a win, a closure is not a loss, and neither says anything
   about what any investor was paid. Every number is a count of
   events with its denominator attached.
   ============================================================ */

/* Below this, a count is an anecdote. Two acquisitions out of three
   known outcomes is not a pattern worth putting on a profile. */
const OCC_MIN_KNOWN = 3;

function occResolveCompany(name) {
  if (!name || typeof cmpResolve !== 'function') return null;
  const r = cmpResolve(name);
  return (r && r.resolved && r.id) ? r.id : null;
}

/* Turns a list of {name, year} rows into outcome counts, keeping the
   investment year so timing can be shown without being invented. */
function occFromRows(rows) {
  const seen = {};
  const items = [];
  (rows || []).forEach(function (r) {
    const name = r.name || r.company || null;
    if (!name) return;
    const id = occResolveCompany(name);
    if (!id || seen[id]) return;
    seen[id] = true;
    const outcomes = (typeof ocForCompany === 'function') ? ocForCompany(id) : [];
    items.push({
      companyId: id,
      name: name,
      investedYear: r.year != null ? r.year : (r.investedYear != null ? r.investedYear : null),
      orgAtTime: r.orgAtTime || null,
      outcomes: outcomes
    });
  });

  const known = items.filter(function (x) { return x.outcomes.length; });
  const counts = { acquired: 0, public: 0, closed: 0, bankrupt: 0 };
  known.forEach(function (x) {
    x.outcomes.forEach(function (o) {
      if (o.type === 'ACQUISITION') counts.acquired++;
      else if (o.type === 'PUBLIC_LISTING') counts.public++;
      else if (o.type === 'CLOSURE') counts.closed++;
      else if (o.type === 'BANKRUPTCY') counts.bankrupt++;
    });
  });

  return {
    attributed: items.length,
    withKnownOutcome: known.length,
    unknownOutcome: items.length - known.length,
    counts: counts,
    items: items,
    known: known
  };
}

/* ------------------------------------------------------------
   THE FOUR SETS
   ------------------------------------------------------------ */

/* PERSON-attributed only. careerRows come from the partner's own
   sourced notableInvestments, so an investment made at a previous
   firm stays with the person and a firm investment made before they
   arrived never reaches them. */
function occForPartner(partnerSlug) {
  if (typeof pbehCompute !== 'function') return null;
  const c = pbehCompute(partnerSlug);
  if (!c || !c.careerRows || !c.careerRows.length) return null;
  const res = occFromRows(c.careerRows);
  res.subject = 'partner';
  return res;
}

function occForAngel(personId) {
  if (typeof CAPITAL_SOURCES === 'undefined') return null;
  const a = CAPITAL_SOURCES[personId];
  if (!a) return null;
  const inv = a.notableInvestments || a.investments || [];
  if (!inv.length) return null;
  const rows = inv.map(function (x) {
    return (typeof x === 'string') ? { name: x } : x;
  });
  const res = occFromRows(rows);
  res.subject = 'angel';
  return res;
}

/* FIRM participations, deliberately not the holdings list. See the
   header: holdings are pre-filtered to public companies and would
   report a selection artifact as a finding. */
function occForFirm(firmSlug) {
  if (typeof FIRM_DEALS === 'undefined') return null;
  const rows = FIRM_DEALS.filter(function (p) { return p.firmSlug === firmSlug; })
    .map(function (p) {
      return { name: p.company, year: p.announcedDate ? parseInt(String(p.announcedDate).slice(0, 4), 10) : null };
    });
  if (!rows.length) return null;
  const res = occFromRows(rows);
  res.subject = 'firm';
  return res;
}

function occForFund(fundId) {
  if (typeof fundInvestments !== 'function') return null;
  const inv = fundInvestments(fundId);
  if (!inv.length) return null;
  const res = occFromRows(inv.map(function (p) {
    return { name: p.company, year: p.announcedDate ? parseInt(String(p.announcedDate).slice(0, 4), 10) : null };
  }));
  res.subject = 'fund';
  return res;
}

/* ------------------------------------------------------------
   RENDERING

   The section renders only when there is something real to say.
   An investor with two known outcomes gets no panel rather than a
   panel reporting two.
   ------------------------------------------------------------ */

function occHasEnough(res) {
  return !!(res && res.withKnownOutcome >= OCC_MIN_KNOWN);
}

function occEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* Every line carries the denominator it was computed against, and
   the denominator is the number with a KNOWN outcome - not the total
   attributed, which would quietly treat "we do not know" as "still
   private". */
function occLines(res) {
  if (!res) return [];
  const out = [];
  const d = res.withKnownOutcome;
  const c = res.counts;
  if (c.acquired) out.push({ label: 'Acquired', n: c.acquired, of: d });
  if (c.public) out.push({ label: 'Publicly listed', n: c.public, of: d });
  if (c.bankrupt) out.push({ label: 'Entered bankruptcy', n: c.bankrupt, of: d });
  if (c.closed) out.push({ label: 'Ceased operations', n: c.closed, of: d });
  return out;
}

function occPanel(res, opts) {
  opts = opts || {};
  if (!occHasEnough(res)) return '';
  const lines = occLines(res);
  if (!lines.length) return '';

  const subject = {
    partner: 'investments attributed to this person',
    angel: 'investments attributed to this person',
    firm: 'investments this firm participated in',
    fund: 'investments attributed to this fund'
  }[res.subject] || 'attributed investments';

  return '<section class="occ-sec" aria-labelledby="occHead">' +
    '<h2 class="occ-h" id="occHead">' + occEsc(opts.title || 'Tracked portfolio outcomes') + '</h2>' +
    '<ul class="occ-list">' + lines.map(function (l) {
      return '<li><span class="occ-label">' + occEsc(l.label) + '</span>' +
        '<span class="occ-n">' + l.n + ' of ' + l.of + '</span></li>';
    }).join('') + '</ul>' +
    /* The sentence that makes the numbers checkable and stops them
       being read as a scorecard. */
    '<p class="occ-note">Counted across ' + res.withKnownOutcome + ' of ' + res.attributed +
      ' ' + occEsc(subject) + ' where Power Board knows the current outcome. ' +
      'The remaining ' + res.unknownOutcome + ' are private, still operating, or not yet researched.</p>' +
    '<p class="occ-note occ-note-strong">These are company outcomes, not investment returns. ' +
      'Power Board holds no information about what any investor paid or received.</p>' +
  '</section>';
}

/* ------------------------------------------------------------
   COVERAGE REPORT

   For the research view and QA. Real numbers, computed live.
   ------------------------------------------------------------ */

function occCoverageReport() {
  const out = { partners: { subjects: 0, rows: 0 }, angels: { subjects: 0, rows: 0 },
                firms: { subjects: 0, rows: 0 }, funds: { subjects: 0, rows: 0 } };

  if (typeof partnerProfiles !== 'undefined') {
    Object.keys(partnerProfiles).forEach(function (k) {
      const r = occForPartner(k);
      if (r && r.withKnownOutcome) { out.partners.subjects++; out.partners.rows += r.withKnownOutcome; }
    });
  }
  if (typeof CAPITAL_SOURCES !== 'undefined') {
    Object.keys(CAPITAL_SOURCES).forEach(function (k) {
      const r = occForAngel(k);
      if (r && r.withKnownOutcome) { out.angels.subjects++; out.angels.rows += r.withKnownOutcome; }
    });
  }
  if (typeof firms !== 'undefined') {
    firms.forEach(function (f) {
      const r = occForFirm(f.slug);
      if (r && r.withKnownOutcome) { out.firms.subjects++; out.firms.rows += r.withKnownOutcome; }
    });
  }
  if (typeof fundBuild === 'function') {
    fundBuild().forEach(function (f) {
      const r = occForFund(f.fundId);
      if (r && r.withKnownOutcome) { out.funds.subjects++; out.funds.rows += r.withKnownOutcome; }
    });
  }
  return out;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    occForPartner: occForPartner, occForAngel: occForAngel,
    occForFirm: occForFirm, occForFund: occForFund,
    occFromRows: occFromRows, occLines: occLines, occPanel: occPanel,
    occHasEnough: occHasEnough, occCoverageReport: occCoverageReport
  };
}
