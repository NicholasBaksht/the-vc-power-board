/* ============================================================
   OUTCOME-REGISTRY.JS
   Phase 5E. What happened to companies, as events - built from the
   company research that already exists.

   STATUS IS NOW. AN OUTCOME IS HISTORY.

   COMPANIES[x].status says what a company IS today: private,
   acquired, public, closed. An outcome event says what HAPPENED and
   when. Both are kept: the status stays exactly where it was and is
   never rewritten, and events are derived alongside it.

   WHAT THE DATA SUPPORTS, MEASURED

     55 acquired    - 49 parse to a named acquirer, 37 with a year
     164 public     - and ZERO say how they listed
     2 closed       - one of which is a Chapter 11 filing
     0 with a transaction value of any kind

   THERE ARE NO IPO EVENTS IN THIS PRODUCT, AND THAT IS DELIBERATE

   A company being public does not say it held an IPO. It may have
   direct listed, merged with a SPAC, been spun out, or listed
   overseas. Not one of the 164 public companies has a source stating
   which. So this file records a PUBLIC_LISTING outcome with the
   listing mechanism explicitly UNKNOWN, and never emits an IPO,
   DIRECT_LISTING or SPAC event. Inventing the mechanism would be
   inventing history.

   BANKRUPTCY IS NOT CLOSURE

   A company can file Chapter 11 and keep operating; another can wind
   down without ever filing. The two closed companies here are
   different cases and are typed differently.

   AN OUTCOME IS NOT A RETURN

   Nothing here is money. No transaction values exist in the dataset,
   none are inferred, and an acquisition tells you nothing about
   whether any investor made or lost anything. Every count this file
   produces is a count of events, never of performance.
   ============================================================ */

const OUTCOME_TYPES = {
  ACQUISITION:    'Acquisition',
  PUBLIC_LISTING: 'Public listing',
  CLOSURE:        'Closure',
  BANKRUPTCY:     'Bankruptcy',
  OTHER:          'Other',
  UNKNOWN:        'Unknown'
};

const OUTCOME_STATUS = {
  ANNOUNCED: 'Announced',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
  UNKNOWN:   'Unknown'
};

/* "Acquired by X in YYYY" and nothing looser. Six of the 55 describe
   genuinely more complicated histories - taken private by a PE
   consortium, a majority stake later divested, an asset sale - and a
   regex that forced those into "acquirer = X" would flatten real
   nuance into a wrong fact. Those keep acquirerName null and carry
   the original wording instead. */
const OC_ACQ_RE = /^Acquired by (.+?)(?: in (\d{4}))?[.;]?$/i;

let _ocCache = null;
let _ocByCompany = null;

function ocId(companyId, type, year) {
  return companyId + '::' + type.toLowerCase() + (year ? '-' + year : '');
}

/* The sources already on the company record that support the status
   and its detail. Provenance travels with the event rather than
   being re-derived later. */
function ocSourcesFor(company) {
  const want = { status: 1, statusDetail: 1, tickers: 1 };
  return (company.sources || []).filter(function (s) { return want[s.field]; });
}

function ocLastChecked(sources) {
  let latest = null;
  (sources || []).forEach(function (s) {
    if (s.checked && (!latest || s.checked > latest)) latest = s.checked;
  });
  return latest;
}

/* Tickers are stored as "NYSE:BE". Split rather than assumed: an
   exchange and a symbol are different facts and the UI shows them
   as such. */
function ocParseTicker(t) {
  const s = String(t || '');
  const i = s.indexOf(':');
  if (i < 0) return { exchange: null, symbol: s || null };
  return { exchange: s.slice(0, i) || null, symbol: s.slice(i + 1) || null };
}

function ocBuild() {
  if (_ocCache) return _ocCache;
  const out = [];
  if (typeof COMPANIES === 'undefined') { _ocCache = out; return out; }

  Object.keys(COMPANIES).forEach(function (id) {
    const c = COMPANIES[id];
    const status = String(c.status || '').toLowerCase();
    const detail = c.statusDetail ? String(c.statusDetail).trim() : null;
    const sources = ocSourcesFor(c);
    const checked = ocLastChecked(sources);

    if (status === 'acquired') {
      const m = detail ? detail.match(OC_ACQ_RE) : null;
      out.push({
        outcomeId: ocId(id, 'ACQUISITION', m && m[2] ? m[2] : null),
        companyId: id,
        companyName: c.name,
        type: 'ACQUISITION',
        /* The company's current status IS acquired, so the event
           completed. Nothing in this dataset describes a pending or
           cancelled deal, so no event is ever marked ANNOUNCED. */
        status: 'COMPLETED',
        acquirerName: m ? m[1].replace(/\.$/, '') : null,
        year: m && m[2] ? parseInt(m[2], 10) : ocYearFrom(detail),
        /* Kept verbatim so a reader can always see the real wording
           rather than this file's reading of it. */
        detail: detail,
        needsReview: !m,
        exchange: null, symbol: null,
        /* No transaction value exists anywhere in this dataset and
           none is inferred. */
        transactionValue: null,
        sources: sources,
        lastChecked: checked
      });
      return;
    }

    if (status === 'public') {
      const t = (c.tickers && c.tickers.length) ? ocParseTicker(c.tickers[0]) : { exchange: null, symbol: null };
      out.push({
        outcomeId: ocId(id, 'PUBLIC_LISTING', null),
        companyId: id,
        companyName: c.name,
        type: 'PUBLIC_LISTING',
        status: 'COMPLETED',
        /* THE MECHANISM IS NOT KNOWN. IPO, direct listing, SPAC and
           spin-out all produce a public company, and no source here
           says which happened. */
        listingMechanism: 'UNKNOWN',
        acquirerName: null,
        year: ocYearFrom(detail),
        detail: detail,
        needsReview: false,
        exchange: t.exchange,
        symbol: t.symbol,
        transactionValue: null,
        sources: sources,
        lastChecked: checked
      });
      return;
    }

    if (status === 'closed') {
      /* Chapter 11 and a quiet wind-down are different events, and
         the detail is the only thing that distinguishes them. */
      const bankrupt = detail && /chapter\s*(7|11)|bankrupt|insolven|administration|liquidat/i.test(detail);
      out.push({
        outcomeId: ocId(id, bankrupt ? 'BANKRUPTCY' : 'CLOSURE', null),
        companyId: id,
        companyName: c.name,
        type: bankrupt ? 'BANKRUPTCY' : 'CLOSURE',
        status: 'COMPLETED',
        acquirerName: null,
        year: ocYearFrom(detail),
        detail: detail,
        needsReview: !detail,
        exchange: null, symbol: null,
        transactionValue: null,
        sources: sources,
        lastChecked: checked
      });
    }
    /* status 'private' produces no outcome. Still private is not an
       outcome, it is the absence of one. */
  });

  _ocCache = out;
  return out;
}

/* A year mentioned in the detail, only when there is exactly one
   four-digit year to find. Two candidate years means the sentence
   describes more than one moment, and picking either would be a
   guess. */
function ocYearFrom(detail) {
  if (!detail) return null;
  const years = String(detail).match(/\b(19|20)\d{2}\b/g);
  if (!years || years.length !== 1) return null;
  const y = parseInt(years[0], 10);
  return (y >= 1970 && y <= 2100) ? y : null;
}

function ocIndex() {
  if (_ocByCompany) return _ocByCompany;
  _ocByCompany = {};
  ocBuild().forEach(function (o) {
    (_ocByCompany[o.companyId] = _ocByCompany[o.companyId] || []).push(o);
  });
  return _ocByCompany;
}

function ocForCompany(companyId) {
  if (!companyId) return [];
  return ocIndex()[companyId] || [];
}

function ocTypeLabel(o) { return o ? (OUTCOME_TYPES[o.type] || 'Unknown') : null; }

/* One line describing the event, stating only what the sources
   support. An acquisition with no named acquirer says so. */
function ocSummary(o) {
  if (!o) return null;
  if (o.type === 'ACQUISITION') {
    if (o.acquirerName) {
      return 'Acquired by ' + o.acquirerName + (o.year ? ' in ' + o.year : '');
    }
    return 'Acquired' + (o.year ? ' in ' + o.year : '') +
      '. The acquiring party is recorded in the source but not as a single name.';
  }
  if (o.type === 'PUBLIC_LISTING') {
    const where = o.exchange ? ' on ' + o.exchange : '';
    return 'Publicly listed' + where + (o.symbol ? ' as ' + o.symbol : '') +
      '. How the company listed is not tracked.';
  }
  if (o.type === 'BANKRUPTCY') {
    return 'Entered bankruptcy proceedings' + (o.year ? ' in ' + o.year : '') + '.';
  }
  if (o.type === 'CLOSURE') {
    return 'Ceased operations' + (o.year ? ' in ' + o.year : '') + '.';
  }
  return null;
}

/* ------------------------------------------------------------
   COUNTS

   Every count is a count of EVENTS. None of them is a rate, a
   success measure, or anything a reader could mistake for return.
   ------------------------------------------------------------ */

function ocStats() {
  const all = ocBuild();
  const byType = {};
  all.forEach(function (o) { byType[o.type] = (byType[o.type] || 0) + 1; });
  const companies = (typeof COMPANIES !== 'undefined') ? Object.keys(COMPANIES).length : 0;
  return {
    outcomes: all.length,
    companies: companies,
    withOutcome: Object.keys(ocIndex()).length,
    stillPrivate: companies - Object.keys(ocIndex()).length,
    byType: byType,
    acquisitionsWithNamedAcquirer: all.filter(function (o) {
      return o.type === 'ACQUISITION' && o.acquirerName;
    }).length,
    needingReview: all.filter(function (o) { return o.needsReview; }).length,
    withTransactionValue: all.filter(function (o) { return o.transactionValue != null; }).length
  };
}

/* Outcome counts for an arbitrary set of company ids, with the
   denominator that makes them meaningful. The caller supplies the
   set; this never decides which companies "belong" to anyone. */
function ocCountsFor(companyIds) {
  const ids = companyIds || [];
  const counts = { acquired: 0, public: 0, closed: 0, bankrupt: 0 };
  let known = 0;
  ids.forEach(function (id) {
    const list = ocForCompany(id);
    if (!list.length) return;
    known++;
    list.forEach(function (o) {
      if (o.type === 'ACQUISITION') counts.acquired++;
      else if (o.type === 'PUBLIC_LISTING') counts.public++;
      else if (o.type === 'CLOSURE') counts.closed++;
      else if (o.type === 'BANKRUPTCY') counts.bankrupt++;
    });
  });
  return {
    considered: ids.length,
    withKnownOutcome: known,
    unknownOutcome: ids.length - known,
    counts: counts
  };
}

/* The denominator is the sentence. "8 of 35 with a known outcome"
   is checkable; "23 per cent successful" is a claim about success
   that this product has no basis to make. */
function ocDenominatorLine(res, label, n) {
  if (!res || !res.withKnownOutcome) return null;
  return n + ' of ' + res.withKnownOutcome + ' companies with a known outcome ' + label;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ocBuild: ocBuild, ocForCompany: ocForCompany, ocSummary: ocSummary,
    ocStats: ocStats, ocCountsFor: ocCountsFor, ocParseTicker: ocParseTicker,
    ocYearFrom: ocYearFrom, ocDenominatorLine: ocDenominatorLine, ocTypeLabel: ocTypeLabel
  };
}
