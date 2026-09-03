/* ============================================================
   COMPANY-REGISTRY.JS
   Canonical company identity for Power Board.

   THE PROBLEM THIS SOLVES
   A company is currently a bare string, written differently in each
   dataset. Measured 2026-09-02 across deals, partner investments,
   angel investments, firm holdings and the sector reference:
     5,060 distinct companies
       527 appear in more than one dataset   <- the only ones a join
                                                can ever be about
     3,988 appear exactly once anywhere (79%)
        41 keys carry more than one spelling
   So the work is not "model 5,060 companies". It is "make 527
   joinable and settle 41 spellings", and this file is that.

   RESOLUTION ORDER, and nothing else is permitted:
     1. exact canonical-name match (normalised)
     2. exact normalised alias match, status APPROVED only
     3. UNRESOLVED
   A NEEDS_REVIEW alias resolves to UNRESOLVED, deliberately. An
   unresolved company stays unresolved and keeps its display string:
   it is never guessed into an identity.

   FUZZY MATCHING IS NOT IDENTITY. cmpSuggestDuplicates() exists to
   feed the research queue with candidates a human then rules on. It
   cannot write an alias, cannot merge, and nothing in the rendering
   path may call it.

   BACKWARD COMPATIBILITY
   Every existing consumer reads a company NAME and keeps working
   untouched. This module adds an id alongside; it removes nothing.
   Callers migrate one at a time by asking for cmpResolve(name)
   instead of rolling their own normaliser. Six different normalisers
   exist across the codebase today (pbehNorm, pbehAliasKeys,
   pbehSuffixKey, fcNormalise, pbnCanonical, slugifyCompany); this is
   the one they should collapse into, but that migration is separate
   and none of them is changed here.
   ============================================================ */

/* Normalisation is intentionally identical to pbehNorm() in
   partner-behavior.js, so a key computed here and a key computed
   there are the same string. Do not "improve" it independently. */
function cmpNorm(s) {
  return String(s == null ? '' : s).toLowerCase().replace(/[^a-z0-9]/g, '');
}

/* URL slug for /company/<slug>/. Separate from cmpNorm because a slug
   keeps word boundaries and a match key does not. */
function cmpSlug(s) {
  return String(s == null ? '' : s).toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

let _cmpIdx = null;

/* Builds the alias index once. APPROVED rows only: a NEEDS_REVIEW row
   is loaded so it can be reported, never so it can resolve. */
function cmpIndex() {
  if (_cmpIdx) return _cmpIdx;
  const approved = {};   // normalisedAlias -> { id, name }
  const held = {};       // normalisedAlias -> row, for reporting
  const canonName = {};  // id -> display name

  /* Canonical Company entities come first: a companyId in data-companies.js
     is the durable key, and its current name, legal name and former names
     all resolve to it. This is what makes the alias branch load-bearing
     rather than decorative - "Square" and "TransferWise" normalise
     differently from "block" and "wise", so only an alias row can join
     them. Derived from reviewed research, not inferred at runtime. */
  if (typeof COMPANIES !== 'undefined' && COMPANIES) {
    Object.keys(COMPANIES).forEach(function (id) {
      const c = COMPANIES[id];
      if (!c) return;
      canonName[id] = c.name || id;
      const reg = function (nm) {
        const k = cmpNorm(nm);
        if (k && k !== id && !approved[k]) approved[k] = { id: id, name: c.name };
      };
      reg(c.name);
      reg(c.legalName);
      (c.formerNames || []).forEach(function (f) {
        reg(typeof f === 'string' ? f : (f && f.name));
      });
    });
  }

  const rows = (typeof COMPANY_ALIASES !== 'undefined') ? COMPANY_ALIASES : [];
  rows.forEach(function (r) {
    if (!r || !r.canonicalCompanyId) return;
    const k = r.normalizedAlias || cmpNorm(r.alias);
    if (r.status === 'APPROVED') {
      /* A canonical entity outranks a seed alias row. The seed says
         lendingclub is called "LendingClub"; the entity says it renamed
         to "Happen" in June 2026 and is sourced. Entity wins. */
      const hasEntity = (typeof COMPANIES !== 'undefined' && COMPANIES && COMPANIES[r.canonicalCompanyId]);
      if (!hasEntity) canonName[r.canonicalCompanyId] = r.canonicalName || r.canonicalCompanyId;
      approved[k] = { id: r.canonicalCompanyId,
                      name: hasEntity ? COMPANIES[r.canonicalCompanyId].name : r.canonicalName };
    } else {
      /* A held row must hold BOTH spellings back, not just the alias.
         Registering its canonical id here would let the canonical-match
         branch merge them anyway, which is the exact silent auto-merge
         the review status exists to prevent. Both strings therefore go
         into `held` and neither earns an id. */
      held[k] = r;
      held[cmpNorm(r.canonicalName)] = r;
    }
  });
  _cmpIdx = { approved: approved, held: held, canonName: canonName };
  return _cmpIdx;
}

/* The single entry point. Returns a stable shape in every case so a
   caller never has to distinguish "no result" from "threw".

     { id, name, slug, resolved: true,  via: 'canonical' | 'alias' }
     { id: null, name: <as given>, slug, resolved: false,
       via: 'unresolved' | 'held-for-review', reason }

   `name` is ALWAYS populated, so a caller that only wants to display
   something can use the result directly and ignore the rest. That is
   what makes this safe to adopt incrementally. */
function cmpResolve(rawName) {
  const raw = String(rawName == null ? '' : rawName).trim();
  const key = cmpNorm(raw);
  if (!key) {
    return { id: null, name: raw, slug: '', resolved: false,
             via: 'unresolved', reason: 'empty name' };
  }
  const idx = cmpIndex();

  /* 1. the key IS a canonical id */
  if (idx.canonName[key]) {
    return { id: key, name: idx.canonName[key], slug: cmpSlug(idx.canonName[key]),
             resolved: true, via: 'canonical' };
  }
  /* 2. an APPROVED alias */
  const a = idx.approved[key];
  if (a) {
    return { id: a.id, name: a.name, slug: cmpSlug(a.name),
             resolved: true, via: 'alias' };
  }
  /* 3. explicitly held back from merging */
  const h = idx.held[key];
  if (h) {
    return { id: null, name: raw, slug: cmpSlug(raw), resolved: false,
             via: 'held-for-review',
             reason: h.status + ': ' + (h.note || 'awaiting review') };
  }
  /* 4. simply not in the registry. Most companies are here, and that
        is correct: 79% are mentioned once and need no identity. */
  return { id: key, name: raw, slug: cmpSlug(raw), resolved: false,
           via: 'unresolved', reason: 'not in registry' };
}

/* Convenience for the common case: what should we display, and does
   this string join to anything. */
function cmpKey(rawName) { return cmpResolve(rawName).id; }
function cmpName(rawName) { return cmpResolve(rawName).name; }

/* ---------- reverse navigation ----------
   Company -> deals -> firms -> attributed partners and angels.
   Built lazily and once, because it walks every dataset. Returns null
   when the underlying data is not loaded, so a page that includes
   this file without the data files does not throw. */
let _cmpBack = null;
function cmpBuildBackIndex() {
  if (_cmpBack) return _cmpBack;
  const byId = {};

  function bucket(rawName) {
    const r = cmpResolve(rawName);
    /* A held-for-review name must NOT share a bucket with the other
       spelling, or the reverse index re-merges what the resolver just
       refused to merge. Key it by the raw string until a human rules. */
    const id = r.via === 'held-for-review'
      ? 'review:' + cmpNorm(rawName) + ':' + String(rawName)
      : (r.id || cmpNorm(rawName));
    if (!id) return null;
    if (!byId[id]) {
      byId[id] = { id: id, name: r.name, slug: r.slug, resolved: r.resolved,
                   deals: [], firms: {}, partners: [], angels: [], holdings: [] };
    }
    return byId[id];
  }

  if (typeof FIRM_DEALS !== 'undefined' && Array.isArray(FIRM_DEALS)) {
    FIRM_DEALS.forEach(function (d) {
      const b = bucket(d.company); if (!b) return;
      b.deals.push(d);
      if (d.firmSlug) b.firms[d.firmSlug] = true;
    });
  }
  if (typeof firms !== 'undefined' && Array.isArray(firms)) {
    firms.forEach(function (f) {
      (f.holdings || []).forEach(function (h) {
        const b = bucket(h.name); if (!b) return;
        b.holdings.push({ firmSlug: f.slug, holding: h });
        b.firms[f.slug] = true;
      });
    });
  }
  /* Attribution is person-specific and is copied, never inferred: a
     row lands here only because research already named that person
     against that company. */
  if (typeof partnerProfiles !== 'undefined') {
    Object.keys(partnerProfiles).forEach(function (slug) {
      const p = partnerProfiles[slug];
      (p.notableInvestments || []).forEach(function (n) {
        const b = bucket(n.name); if (!b) return;
        b.partners.push({ slug: slug, name: p.name, firm: p.firm || null, row: n });
      });
    });
  }
  if (typeof CAPITAL_SOURCES !== 'undefined') {
    Object.keys(CAPITAL_SOURCES).forEach(function (slug) {
      const a = CAPITAL_SOURCES[slug];
      (a.investments || []).forEach(function (n) {
        const b = bucket(n.name); if (!b) return;
        b.angels.push({ slug: slug, name: a.name, row: n });
      });
    });
  }
  Object.keys(byId).forEach(function (k) { byId[k].firms = Object.keys(byId[k].firms); });
  _cmpBack = byId;
  return _cmpBack;
}

function cmpCompany(rawNameOrId) {
  const idx = cmpBuildBackIndex();
  const r = cmpResolve(rawNameOrId);
  return idx[r.id] || idx[cmpNorm(rawNameOrId)] || null;
}

/* How many datasets mention this company. The publish gate for a
   company page: one mention is not a page. */
function cmpEvidenceCount(c) {
  if (!c) return 0;
  return (c.deals.length ? 1 : 0) + (c.holdings.length ? 1 : 0) +
         (c.partners.length ? 1 : 0) + (c.angels.length ? 1 : 0);
}

/* ---------- research queue only ----------
   Proposes companies whose normalised keys are close enough to be
   worth a human look. It returns SUGGESTIONS. It does not merge, does
   not write, and must not be called from any rendering path. */
function cmpSuggestDuplicates(limit) {
  const idx = cmpBuildBackIndex();
  const keys = Object.keys(idx);
  const out = [];
  const byLen = {};
  keys.forEach(function (k) { (byLen[k.length] = byLen[k.length] || []).push(k); });
  keys.forEach(function (k) {
    [k.length, k.length + 1].forEach(function (L) {
      (byLen[L] || []).forEach(function (o) {
        if (o <= k) return;
        if (o.indexOf(k) === 0 || k.indexOf(o) === 0) {
          out.push({ a: idx[k].name, b: idx[o].name,
                     status: 'POSSIBLE_DUPLICATE_REVIEW_REQUIRED' });
        }
      });
    });
  });
  return out.slice(0, limit || 100);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    cmpNorm: cmpNorm, cmpSlug: cmpSlug, cmpResolve: cmpResolve,
    cmpKey: cmpKey, cmpName: cmpName,
    cmpCompany: cmpCompany, cmpBuildBackIndex: cmpBuildBackIndex,
    cmpEvidenceCount: cmpEvidenceCount, cmpSuggestDuplicates: cmpSuggestDuplicates
  };
}
