/* ============================================================
   FUND-DISCOVERY.JS
   Phase 5G. Funds in Global Search and the Power Screener, using
   the Phase 2 machinery rather than a second one.

   EXTENDED, NOT EDITED

   discovery-core.js and power-screener.js are frozen and working.
   This file registers a new entity type with them from the outside:
   it pushes 'fund' into the type lists, adds its filters and
   columns to the existing maps, and wraps the two builder functions
   so funds are produced alongside everything else.

   The wrappers capture the previous implementation and delegate to
   it. They are ASSIGNED, not declared, because a function
   declaration hoists and would capture itself - the exact bug that
   broke the Screener toolbar in Phase 4.

   FILTERS ONLY WHERE THE DATA VARIES

   The brief asks not to expose filters that coverage cannot support,
   so each candidate was measured against the 287 real funds:

     vintage          277 of 287 have one          included
     size             263 of 287 have one          included
     strategy          31 growth, rest mostly
                       UNKNOWN, real variance      included
     research status   226 / 51 / 10               included
     flagship          155 flagship                included
     fundraising       284 of 287 are "closed"     EXCLUDED, no variance
     tracked
     investments       0 for every fund            EXCLUDED, no data
     observed
     sector / stage    unavailable for every fund  EXCLUDED, no data
     geography         not present in fund data    EXCLUDED, no field

   A filter that returns the same answer for every row is not a
   filter, it is furniture. A filter over a column that is empty
   everywhere is worse: it implies the data exists.

   SIZE FILTERING USES ONE BASIS, STATED

   Fund sizes carry a basis - final close, announced, or target. The
   filter uses the recorded figure whatever its basis, and the table
   always shows the basis beside the number, so a fund still
   targeting is never silently compared against one that closed.
   ============================================================ */

/* Declared before the IIFE that closes over it. Leaving it below
   would work only because the wrapper runs later, which is a fragile
   reason for code to be correct. */
let _fdRowCache = null;

(function () {
  /* ---------- 1. register the type ---------- */

  if (typeof SCR_TYPES !== 'undefined' && SCR_TYPES.indexOf('fund') === -1) {
    SCR_TYPES.push('fund');
  }
  if (typeof DSC_TYPE_ORDER !== 'undefined' && DSC_TYPE_ORDER.indexOf('fund') === -1) {
    /* After firms: a fund is a thing you reach through its firm, so a
       firm should outrank its own vehicles on an ambiguous query. */
    DSC_TYPE_ORDER.push('fund');
  }
  if (typeof DSC_TYPE_LABEL !== 'undefined') DSC_TYPE_LABEL.fund = 'Funds';
  if (typeof SCR_TYPE_LABEL !== 'undefined') SCR_TYPE_LABEL.fund = 'Funds';

  /* ---------- 2. screener rows ---------- */

  if (typeof SCR_FILTERS !== 'undefined') {
    SCR_FILTERS.fund = [
      { key: 'fFirm', label: 'Firm', kind: 'multi', field: 'firmName' },
      { key: 'fStrategy', label: 'Stated strategy', kind: 'multi', field: 'strategyLabel' },
      { key: 'fVintageMin', label: 'Vintage from', kind: 'num', field: 'vintageYear', bound: 'min' },
      { key: 'fVintageMax', label: 'Vintage to', kind: 'num', field: 'vintageYear', bound: 'max' },
      { key: 'fSizeMin', label: 'Min size ($M)', kind: 'num', field: 'sizeM', bound: 'min' },
      { key: 'fSizeMax', label: 'Max size ($M)', kind: 'num', field: 'sizeM', bound: 'max' },
      { key: 'fFlagship', label: 'Flagship vehicle', kind: 'bool', field: 'isFlagship' },
      { key: 'fResearch', label: 'Research status', kind: 'multi', field: 'researchLabel' }
    ];
  }

  if (typeof SCR_COLUMNS !== 'undefined') {
    SCR_COLUMNS.fund = [
      { key: 'name', label: 'Fund', primary: true, def: true },
      { key: 'firmName', label: 'Firm', def: true },
      { key: 'strategyLabel', label: 'Stated strategy', def: true },
      { key: 'vintageYear', label: 'Vintage', def: true, num: true },
      { key: 'sizeLabel', label: 'Size', def: true },
      { key: 'basisLabel', label: 'Basis', def: true },
      { key: 'researchLabel', label: 'Research', def: true },
      /* Off by default: it is zero for every fund today, and a column
         of zeroes teaches a reader the wrong thing about coverage. */
      { key: 'trackedInvestments', label: 'Tracked investments', num: true }
    ];
  }

  function fdRows() {
    if (typeof fundBuild !== 'function') return [];
    return fundBuild().map(function (f) {
      const firm = (typeof ptFirm === 'function') ? ptFirm(f.firmSlug) : null;
      const name = (typeof fundDisplayName === 'function') ? fundDisplayName(f) : f.name;
      const route = (typeof fundRouteFor === 'function') ? fundRouteFor(f) : null;
      return {
        entityId: f.fundId,
        name: name,
        route: route || '#' + f.firmSlug,
        firmName: firm ? firm.name : f.firmSlug,
        firmSlug: f.firmSlug,
        strategyLabel: (typeof fundStrategyLabel === 'function') ? fundStrategyLabel(f) : null,
        vintageYear: f.vintageYear,
        /* Millions, so the numeric filter reads in the same units the
           label shows. Null stays null: an unknown size must never
           filter as zero. */
        sizeM: f.sizeUSD != null ? Math.round(f.sizeUSD / 1e6) : null,
        sizeLabel: (typeof fundSizeLabel === 'function') ? fundSizeLabel(f) : null,
        basisLabel: (typeof fundSizeBasisLabel === 'function') ? fundSizeBasisLabel(f) : null,
        isFlagship: f.isFlagship,
        researchLabel: (typeof FUND_RESEARCH_STATUS !== 'undefined')
          ? (FUND_RESEARCH_STATUS[f.researchStatus] || f.researchStatus) : f.researchStatus,
        trackedInvestments: (typeof fundInvestmentCount === 'function')
          ? fundInvestmentCount(f.fundId) : 0
      };
    });
  }

  /* Funds are produced here; company rows are decorated with their
     outcome. ONE wrapper does both, because wrapping the same
     function twice makes the call chain depend on the order two
     blocks happen to run in.

     Assigned, never declared. A declaration would hoist above this
     capture and the wrapper would call itself forever - the exact
     bug that broke the Screener toolbar in Phase 4. */
  if (typeof scrRows === 'function') {
    const _prevScrRows = scrRows;
    scrRows = function (type) {
      if (type === 'fund') {
        if (!_fdRowCache) _fdRowCache = fdRows();
        return _fdRowCache;
      }
      const rows = _prevScrRows(type);
      if (type === 'company' && rows && !rows.__outcomesAdded &&
          typeof ocForCompany === 'function') {
        rows.forEach(function (r) {
          const list = ocForCompany(r.entityId);
          /* Null, not "None". A still-private company has not had an
             outcome rather than having had an empty one. */
          r.outcomeLabel = list.length
            ? ((typeof ocTypeLabel === 'function') ? ocTypeLabel(list[0]) : list[0].type)
            : null;
        });
        try {
          Object.defineProperty(rows, '__outcomesAdded', { value: true, enumerable: false });
        } catch (e) { rows.__outcomesAdded = true; }
      }
      return rows;
    };
  }

  /* ---------- 3. search index ---------- */

  function fdDocs() {
    if (typeof fundBuild !== 'function' || typeof dscDoc !== 'function') return [];
    return fundBuild().map(function (f) {
      const firm = (typeof ptFirm === 'function') ? ptFirm(f.firmSlug) : null;
      const firmName = firm ? firm.name : f.firmSlug;
      const name = (typeof fundDisplayName === 'function') ? fundDisplayName(f) : f.name;
      const size = (typeof fundSizeWithBasis === 'function') ? fundSizeWithBasis(f) : null;
      const strategy = (typeof fundStrategyLabel === 'function') ? fundStrategyLabel(f) : null;

      /* Aliases are the firm-qualified forms and the numeral variant,
         nothing looser. "Fund III" alone is deliberately NOT an alias
         because 22 firms have one and matching it globally would
         return the wrong vehicle with total confidence. */
      const aliases = [];
      if (f.name) {
        aliases.push(firmName + ' ' + f.name);
        if (f.fundNumber != null) {
          const stem = String(f.name).replace(/\b([IVXivx]+|\d{1,2})\b\s*$/, '').trim();
          if (stem) aliases.push(firmName + ' ' + stem + ' ' + f.fundNumber);
        }
      }

      return dscDoc('fund', f.fundId, {
        canonicalName: name,
        displayName: name,
        aliases: aliases,
        subtitle: [firmName, f.vintageYear || null, size].filter(Boolean).join(' · '),
        keywords: [strategy, f.series, firmName].filter(Boolean),
        /* The firm SLUG is included as well as its name. People search
           "a16z", not "Andreessen Horowitz", and without the slug a
           firm query would surface the firm while hiding its own
           funds. The slug is a canonical identifier, so this widens
           recall without loosening identity. */
        searchText: [name, firmName, f.firmSlug, strategy, f.series, f.vintageYear]
          .filter(Boolean).join(' '),
        primaryRoute: (typeof fundRouteFor === 'function') ? fundRouteFor(f) : ('#' + f.firmSlug)
      });
    });
  }

  if (typeof dscBuildIndex === 'function') {
    const _prevBuildIndex = dscBuildIndex;
    dscBuildIndex = function () {
      const base = _prevBuildIndex();
      /* The base index is memoised and returned by reference, so the
         funds are appended exactly once rather than on every call. */
      if (!base.__fundsAdded) {
        const docs = fdDocs();
        for (let i = 0; i < docs.length; i++) base.push(docs[i]);
        try {
          Object.defineProperty(base, '__fundsAdded', { value: true, enumerable: false });
        } catch (e) { base.__fundsAdded = true; }
      }
      return base;
    };
  }

  /* ---------- 4. company outcome filters ---------- */

  if (typeof SCR_FILTERS !== 'undefined' && SCR_FILTERS.company) {
    const already = SCR_FILTERS.company.some(function (x) { return x.key === 'cOutcome'; });
    if (!already) {
      SCR_FILTERS.company.push(
        { key: 'cOutcome', label: 'Tracked outcome', kind: 'multi', field: 'outcomeLabel' }
      );
    }
  }
  if (typeof SCR_COLUMNS !== 'undefined' && SCR_COLUMNS.company) {
    const has = SCR_COLUMNS.company.some(function (x) { return x.key === 'outcomeLabel'; });
    if (!has) {
      SCR_COLUMNS.company.push({ key: 'outcomeLabel', label: 'Tracked outcome', def: true });
    }
  }

})();
