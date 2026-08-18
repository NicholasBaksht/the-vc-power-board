/* ============================================================
   POWER-PERSONALITY.JS
   Power Score answers "how powerful is this firm?".
   Power Personality answers "how does it actually invest?".

   EVERY CLASSIFICATION IS COMPUTED. There is no per-firm label
   anywhere in this file - only scoring rules applied to fields
   that already exist in the dataset. Add a firm to data-firms.js
   and it gets a personality with no edit here.

   WHAT THE DATA SUPPORTS, MEASURED BEFORE THIS WAS WRITTEN:
     sectors ............ 361/361  100%   -> sector archetypes
     hq ................. 361/361  100%
     founded ............ 358/361   99%
     firmStages ......... 332/361   92%   -> stage archetypes
     leadership ......... 339/361   94%
     aum (parses) ....... 309/361   86%   -> scale archetypes
     FIRM_ORGS .......... 100% (absence is itself the answer)
     co-holding network . 108/361   30%   -> secondary trait only
     >=2 partners ....... 56/361    16%   -> partner traits gated

   FIVE ARCHETYPES FROM THE BRIEF WERE DROPPED as unsupportable:
     Global          - firmGeography covers 4 firms, not 361
     Contrarian      - no field measures contrarianism
     Category Builder- no field measures category creation
     Platform Builder- no field measures platform services
     Academic        - 29 PhDs across 498 partners, and 84% of
                       firms have fewer than 2 partners on file
   Inventing a proxy for any of these would have produced
   confident-looking labels with nothing underneath them.
   ============================================================ */

const PP_ARCHETYPES = {
  'ai-native':        { emoji: '\u{1F916}', label: 'AI Native',        kind: 'sector' },
  'technical':        { emoji: '\u{1F9E0}', label: 'Technical',        kind: 'sector' },
  'deep-tech':        { emoji: '\u{1F9EC}', label: 'Deep Tech',        kind: 'sector' },
  'enterprise':       { emoji: '\u{1F3E2}', label: 'Enterprise',       kind: 'sector' },
  'consumer':         { emoji: '\u{1F6CD}', label: 'Consumer',         kind: 'sector' },
  'research-driven':  { emoji: '\u{1F52C}', label: 'Research-Driven',  kind: 'sector' },
  'fintech':          { emoji: '\u{1F4B3}', label: 'Fintech',          kind: 'sector' },
  'crypto':           { emoji: '\u26D3', label: 'Crypto & Web3',   kind: 'sector' },
  'defense':          { emoji: '\u{1F6E1}', label: 'Defense',          kind: 'sector' },
  'industrial':       { emoji: '\u{1F3D7}', label: 'Industrial',       kind: 'sector' },
  'mobility':         { emoji: '\u{1F69A}', label: 'Mobility & Logistics', kind: 'sector' },
  'edtech':           { emoji: '\u{1F393}', label: 'Education',        kind: 'sector' },
  'mission-driven':   { emoji: '\u{1F331}', label: 'Mission-Driven',   kind: 'sector' },
  'sector-specialist':{ emoji: '\u{1F3AF}', label: 'Sector Specialist',kind: 'shape' , secondaryOnly: true },
  'early-mover':      { emoji: '⚡',     label: 'Early-Mover',      kind: 'stage' , secondaryOnly: true },
  'scale-focused':    { emoji: '\u{1F4C8}', label: 'Scale-Focused',    kind: 'stage' , secondaryOnly: true },
  'capital-heavy':    { emoji: '\u{1F4B0}', label: 'Capital-Heavy',    kind: 'scale' , secondaryOnly: true },
  'boutique':         { emoji: '\u{1F48E}', label: 'Boutique',         kind: 'scale' , secondaryOnly: true },
  'strategic':        { emoji: '\u{1F3ED}', label: 'Strategic',        kind: 'org'    },
  'operator-led':     { emoji: '\u{1F9D1}‍\u{1F4BB}', label: 'Operator-Led', kind: 'people' },
  'founder-first':    { emoji: '\u{1F680}', label: 'Founder-First',    kind: 'people' },
  'network-driven':   { emoji: '\u{1F91D}', label: 'Network-Driven',   kind: 'network', secondaryOnly: true }
};

/* Canonical sector buckets that feed each sector archetype. These are
   taxonomy.js slugs, so the personality and the filter chips can never
   disagree about what counts as "AI". */
const PP_SECTOR_GROUPS = {
  'ai-native':       ['ai'],
  'enterprise':      ['enterprise-software', 'developer-tools'],
  'consumer':        ['consumer', 'marketplaces'],
  'deep-tech':       ['deep-tech', 'hardware', 'space', 'robotics'],
  'research-driven': ['healthcare'],
  'fintech':         ['fintech'],
  'crypto':          ['crypto'],
  'defense':         ['defense-tech'],
  'industrial':      ['industrial-tech'],
  'mobility':        ['mobility'],
  'edtech':          ['edtech'],
  'mission-driven':  ['climate', 'food-agriculture'],
  'technical':       ['ai', 'developer-tools', 'deep-tech', 'cybersecurity', 'hardware', 'robotics', 'space']
};

const PP_EARLY_STAGES = ['Pre-Seed', 'Seed'];
const PP_LATE_STAGES  = ['Series C', 'Growth', 'Late Stage'];

/* Words that mark an operating background vs a finance one. Applied to
   previousExperience strings, which 92% of partners have. */
const PP_FOUNDER_RE  = /\b(co-?founder|founder|founded|co-?founded)\b/i;
const PP_OPERATOR_RE = /\b(CEO|CTO|COO|CPO|CIO|VP|President|Head of|Engineer|Engineering|Product Manager|General Manager)\b/;

function ppCanonicalSectors(firm) {
  if (typeof canonicalSectorsFor === 'function') {
    return canonicalSectorsFor(firm).filter(function (s) { return s !== '__generalist'; });
  }
  return [];
}

function ppPartnersForFirm(slug) {
  if (typeof partnerProfiles === 'undefined' || !partnerProfiles) return [];
  const out = [];
  for (const k in partnerProfiles) {
    if (partnerProfiles[k] && partnerProfiles[k].firmSlug === slug) out.push(partnerProfiles[k]);
  }
  return out;
}

/* Firms sharing at least one public holding. Computed once for the whole
   dataset, not per firm - this is O(companies) instead of O(firms^2). */
let PP_CO_HOLDING = null;
function ppCoHoldingDegree(slug) {
  if (!PP_CO_HOLDING) {
    PP_CO_HOLDING = {};
    if (typeof firms !== 'undefined' && Array.isArray(firms)) {
      const byCompany = {};
      firms.forEach(function (f) {
        (f.holdings || []).forEach(function (h) {
          if (!h || !h.name) return;
          (byCompany[h.name] = byCompany[h.name] || []).push(f.slug);
        });
      });
      Object.keys(byCompany).forEach(function (c) {
        const hs = byCompany[c];
        hs.forEach(function (a) {
          hs.forEach(function (b) {
            if (a === b) return;
            (PP_CO_HOLDING[a] = PP_CO_HOLDING[a] || {})[b] = 1;
          });
        });
      });
    }
  }
  return Object.keys(PP_CO_HOLDING[slug] || {}).length;
}

/* ==================================================================
   FIRM SCORING
   Each rule returns { score 0..1, why: '<clause>' } or null when the
   underlying field is absent. A null is NOT a zero - "we have no stage
   data" and "this firm does no seed" are different statements, and only
   the second one should push a score down. Nulls instead reduce
   confidence, which is what confidence is for.
   ================================================================== */
function ppScoreFirm(firm) {
  const scores = {};
  const why = {};
  const signals = { available: 0, possible: 0 };
  const put = (key, score, clause) => {
    scores[key] = Math.max(0, Math.min(1, score));
    if (clause) why[key] = clause;
  };

  // ---- sectors (100% coverage) ----
  const canon = ppCanonicalSectors(firm);
  signals.possible++;
  if (canon.length) {
    signals.available++;
    /* The unit is the firm's OWN raw sector tags, not the canonical buckets
       they expand into. One tag can map to several buckets - 'Semiconductors'
       is both deep-tech and hardware - and counting buckets let a single tag
       score twice inside one group. That alone was enough to classify Sequoia
       as Deep Tech off one Semiconductors tag. */
    const rawTags = (firm.sectors || []);
    const total = rawTags.length || canon.length;
    const tagBuckets = {};
    rawTags.forEach(function (t) {
      tagBuckets[t] = (typeof RAW_TO_CANONICAL !== 'undefined' && RAW_TO_CANONICAL[t]) || [];
    });
    Object.keys(PP_SECTOR_GROUPS).forEach(function (key) {
      const group = PP_SECTOR_GROUPS[key];
      const matchedTags = rawTags.filter(function (t) {
        return (tagBuckets[t] || []).some(function (b) { return group.indexOf(b) !== -1; });
      });
      if (!matchedTags.length) { scores[key] = 0; return; }
      const hits = canon.filter(function (s) { return group.indexOf(s) !== -1; });
      const share = matchedTags.length / total;
      const labels = hits.map(function (s) {
        return (typeof SECTOR_MAP !== 'undefined' && SECTOR_MAP[s]) ? SECTOR_MAP[s].label : s;
      });
      /* Raw share under-reads a broad firm: a house across four sectors
         with one AI bucket is genuinely AI-active, but 0.25 would lose to
         any continuous score. Weight the share by how many buckets in the
         group the firm actually touches, so depth counts as well as ratio. */
      /* Pure share of the firm's mapped sectors. Any bonus keyed to how
         many buckets a group contains compares archetypes on an uneven
         field - 'enterprise' spans two buckets and 'ai' spans one, so a
         depth term silently favours the wider group regardless of the
         firm. Share is the only measure that means the same thing for
         every archetype: how much of this firm's mandate is this. */
      const score = share;
      put(key, score, Math.round(share * 100) + '% of its mapped sectors are ' + labels.slice(0, 3).join(', '));
    });

    /* Specialist is about concentration, not breadth: few canonical
       sectors AND the firm's own tags clustering into them. A firm in
       one sector scores 1, a firm across six scores near 0. */
    const spec = total <= 1 ? 1 : total >= 6 ? 0 : (6 - total) / 5;
    put('sector-specialist', spec,
      'it maps to ' + total + ' canonical sector' + (total === 1 ? '' : 's') +
      (total <= 2 ? ', a narrow mandate' : ''));
  }

  // ---- stages (92% coverage) ----
  signals.possible++;
  const stages = (typeof firmStages !== 'undefined' && firmStages) ? firmStages[firm.slug] : null;
  if (stages && stages.length) {
    signals.available++;
    const early = stages.filter(function (s) { return PP_EARLY_STAGES.indexOf(s) !== -1; }).length;
    const late  = stages.filter(function (s) { return PP_LATE_STAGES.indexOf(s)  !== -1; }).length;
    put('early-mover', early / stages.length,
      early + ' of its ' + stages.length + ' disclosed stages are pre-seed or seed');
    put('scale-focused', late / stages.length,
      late + ' of its ' + stages.length + ' disclosed stages are Series C or later');
  }

  // ---- scale, from AUM (86% coverage) ----
  signals.possible++;
  const aum = (typeof parseAumNumber === 'function') ? parseAumNumber(firm.aum) : 0;
  if (aum > 0) {
    signals.available++;
    const head = String(firm.aum || '').split('(')[0].trim();
    // log scale: $100M -> 0, $50B -> 1. Linear would make everything below
    // $5B look identical, which is most of the board.
    const heavy = Math.max(0, Math.min(1, (Math.log10(aum) + 1) / 2.7));
    put('capital-heavy', heavy, 'it reports ' + head + ' in assets');
    put('boutique', 1 - heavy, 'it reports ' + head + ', small relative to the board');
  }

  // ---- strategic (org record; absence is a real answer, not missing data) ----
  signals.possible++;
  signals.available++;
  const org = (typeof firmOrg === 'function') ? firmOrg(firm) : null;
  if (org && org.type && org.type !== 'independent') {
    put('strategic', org.type === 'corporate' ? 1 : 0.8,
      'it is the ' + (org.type === 'corporate' ? 'corporate venture arm' :
        org.type === 'government' ? 'government-backed arm' : 'affiliated fund') +
      ' of ' + org.parent);
  } else {
    scores['strategic'] = 0;
  }

  // ---- people (gated: one partner cannot characterise a firm) ----
  signals.possible++;
  const partners = ppPartnersForFirm(firm.slug);
  const withExp = partners.filter(function (p) { return (p.previousExperience || []).length; });
  if (withExp.length >= 2) {
    signals.available++;
    const founders = withExp.filter(function (p) {
      return (p.previousExperience || []).some(function (e) { return PP_FOUNDER_RE.test(String(e)); });
    }).length;
    const operators = withExp.filter(function (p) {
      return (p.previousExperience || []).some(function (e) { return PP_OPERATOR_RE.test(String(e)); });
    }).length;
    put('founder-first', founders / withExp.length,
      founders + ' of its ' + withExp.length + ' profiled partners previously founded a company');
    put('operator-led', operators / withExp.length,
      operators + ' of its ' + withExp.length + ' profiled partners held an operating role');
  }

  // ---- network (30% coverage; secondary trait only) ----
  signals.possible++;
  const degree = ppCoHoldingDegree(firm.slug);
  if (degree > 0) {
    signals.available++;
    put('network-driven', Math.min(1, degree / 12),
      'it shares a tracked public holding with ' + degree + ' other firm' + (degree === 1 ? '' : 's'));
  }

  return { scores: scores, why: why, signals: signals, partnerCount: partners.length };
}

/* Minimum score to be named at all. Below these a firm simply does not
   get the label - per the brief, one AI company must not make a firm
   "AI Native", and a firm with no evidence gets no personality rather
   than the least-bad guess. */
const PP_PRIMARY_FLOOR   = 0.25;
const PP_SECONDARY_FLOOR = 0.25;
const PP_MAX_SECONDARY   = 3;

/* Ties are broken by specificity, not alphabetically. "AI Native" says
   more than "Technical", and "Technical" overlaps it by construction,
   so the sharper label wins a tie and the vaguer one falls to a trait. */
const PP_SPECIFICITY = {
  'ai-native': 10, 'crypto': 10, 'defense': 10, 'edtech': 10,
  'deep-tech': 9, 'research-driven': 9, 'mobility': 9, 'industrial': 8,
  'mission-driven': 9, 'fintech': 9,
  'strategic': 8, 'enterprise': 7, 'consumer': 7, 'founder-first': 6,
  'operator-led': 6, 'early-mover': 5, 'scale-focused': 5, 'capital-heavy': 4,
  'boutique': 4, 'sector-specialist': 3, 'technical': 2, 'network-driven': 1
};

function ppConfidence(signals, primaryScore) {
  const ratio = signals.possible ? signals.available / signals.possible : 0;
  if (ratio >= 0.8 && primaryScore >= 0.5) return 'HIGH';
  if (ratio >= 0.5 && primaryScore >= 0.34) return 'MEDIUM';
  return 'LOW';
}

/* Builds the sentence from the clauses that actually fired. Nothing here
   is stored per firm; if a clause has no data behind it, it is absent
   from the sentence rather than softened into a vague claim. */
function ppExplain(name, primary, secondaries, why) {
  const parts = [];
  if (why[primary]) parts.push(why[primary]);
  secondaries.forEach(function (s) { if (why[s] && parts.length < 3) parts.push(why[s]); });
  if (!parts.length) return name + ' has too little recorded data to characterise how it invests.';
  const joined = parts.length === 1 ? parts[0]
    : parts.slice(0, -1).join('; ') + '; and ' + parts[parts.length - 1];
  return 'Classified from the data on this page: ' + joined + '.';
}

/* Which label set ppBuild() is currently classifying against. Firms and
   partners share the scoring shape but not the vocabulary - the same
   'operator-led' key reads as "Operator-Led" for a firm and
   "Operator-Investor" for a person. */
let PP_ARCHETYPES_ACTIVE = PP_ARCHETYPES;

function ppBuild(entityName, raw) {
  const ARCH = PP_ARCHETYPES_ACTIVE;
  const { scores, why, signals } = raw;
  const ranked = Object.keys(scores)
    .filter(function (k) { return ARCH[k]; })
    .sort(function (a, b) {
      const d = scores[b] - scores[a];
      if (Math.abs(d) > 0.001) return d;
      return (PP_SPECIFICITY[b] || 0) - (PP_SPECIFICITY[a] || 0);
    });

  const eligible = function (k) {
    return scores[k] >= PP_PRIMARY_FLOOR && !ARCH[k].secondaryOnly;
  };
  /* 'technical' contains ai-native, deep-tech, cybersecurity and hardware by
     construction, so it will almost always outscore the sharper label sitting
     inside it. Naming a firm "Technical" when the data supports "Deep Tech" is
     a worse answer, so it is only used when nothing more specific qualifies. */
  const primaryKey = ranked.find(function (k) { return k !== 'technical' && eligible(k); })
                  || ranked.find(eligible)
                  || null;

  if (!primaryKey) {
    return {
      primary: null, primaryLabel: null, primaryEmoji: null,
      secondaries: [], confidence: 'LOW',
      explanation: entityName + ' does not have enough recorded data to classify how it invests.',
      scores: scores, unclassified: true
    };
  }

  // A secondary must never repeat the primary, and 'technical' is dropped
  // when a sharper technical label already won - it would read as padding.
  const sharperTechnical = ['ai-native', 'deep-tech'].indexOf(primaryKey) !== -1;
  /* Pairs that contradict each other. Both sides of a pair can clear the
     floor - boutique and capital-heavy are 1-x of each other, so a mid-sized
     firm scores ~0.5 on both - and printing "Capital-Heavy - Boutique" on one
     firm reads as a broken system. Only the stronger side survives. */
  const EXCLUSIVE = [['boutique', 'capital-heavy'], ['early-mover', 'scale-focused']];
  const suppressed = {};
  EXCLUSIVE.forEach(function (pair) {
    const a = pair[0], b = pair[1];
    if (a === primaryKey) { suppressed[b] = 1; return; }
    if (b === primaryKey) { suppressed[a] = 1; return; }
    const sa = scores[a] || 0, sb = scores[b] || 0;
    if (sa >= PP_SECONDARY_FLOOR && sb >= PP_SECONDARY_FLOOR) {
      suppressed[sa >= sb ? b : a] = 1;
    }
  });

  const secondaries = ranked.filter(function (k) {
    if (k === primaryKey) return false;
    if (scores[k] < PP_SECONDARY_FLOOR) return false;
    if (suppressed[k]) return false;
    if (k === 'technical' && sharperTechnical) return false;
    return true;
  }).slice(0, PP_MAX_SECONDARY);

  return {
    primary: primaryKey,
    primaryLabel: ARCH[primaryKey].label,
    primaryEmoji: ARCH[primaryKey].emoji,
    secondaries: secondaries.map(function (k) {
      return { key: k, label: ARCH[k].label, emoji: ARCH[k].emoji };
    }),
    confidence: ppConfidence(signals, scores[primaryKey]),
    explanation: ppExplain(entityName, primaryKey, secondaries, why),
    scores: scores,
    unclassified: false
  };
}

/* ------------------------------------------------------------------
   PUBLIC API - memoised.
   Classifications are computed once per page load and reused. The
   source of truth stays data-firms.js; this is a derived cache, and it
   is rebuilt from scratch on reload, so it can never drift from the
   data the way a stored label would.
   ------------------------------------------------------------------ */
const PP_FIRM_CACHE = {};
function firmPersonality(firmOrSlug) {
  if (!firmOrSlug) return null;
  const firm = typeof firmOrSlug === 'string'
    ? (typeof firms !== 'undefined' ? firms.find(function (f) { return f.slug === firmOrSlug; }) : null)
    : firmOrSlug;
  if (!firm) return null;
  if (PP_FIRM_CACHE[firm.slug]) return PP_FIRM_CACHE[firm.slug];
  const res = ppBuild(firm.name || firm.slug, ppScoreFirm(firm));
  PP_FIRM_CACHE[firm.slug] = res;
  return res;
}

/* How the whole board splits by primary personality. Counted from the
   generated classifications, never from a maintained list. */
function personalityDistribution(firmList) {
  const list = firmList || (typeof firms !== 'undefined' ? firms : []);
  const counts = {};
  let unclassified = 0;
  list.forEach(function (f) {
    const p = firmPersonality(f);
    if (!p || p.unclassified) { unclassified++; return; }
    counts[p.primary] = (counts[p.primary] || 0) + 1;
  });
  return {
    total: list.length,
    unclassified: unclassified,
    rows: Object.keys(counts)
      .map(function (k) {
        return { key: k, label: PP_ARCHETYPES[k].label, emoji: PP_ARCHETYPES[k].emoji, count: counts[k] };
      })
      .sort(function (a, b) { return b.count - a.count; })
  };
}

// Discovery: every firm carrying an archetype, as primary or secondary.
function firmsWithPersonality(key, firmList) {
  const list = firmList || (typeof firms !== 'undefined' ? firms : []);
  return list.filter(function (f) {
    const p = firmPersonality(f);
    if (!p || p.unclassified) return false;
    if (p.primary === key) return true;
    return p.secondaries.some(function (s) { return s.key === key; });
  });
}

/* ==================================================================
   PARTNER PERSONALITY
   Same machinery, partner-level fields.

   THIS IS AN INVESTMENT-STYLE CLASSIFICATION, NOT A PERSONALITY
   TEST. Every trait below is derived from what a person has invested
   in or worked on - never from anything about who they are. No
   inference is made about traits, background or characteristics
   beyond the professional record already published on the site.
   ================================================================== */
const PP_PARTNER_ARCHETYPES = {
  'ai-native':       { emoji: '\u{1F916}', label: 'AI Specialist' },
  'enterprise':      { emoji: '\u{1F3E2}', label: 'Enterprise Specialist' },
  'consumer':        { emoji: '\u{1F6CD}', label: 'Consumer Investor' },
  'deep-tech':       { emoji: '\u{1F9EC}', label: 'Deep-Tech Investor' },
  'research-driven': { emoji: '\u{1F52C}', label: 'Research Investor' },
  'mission-driven':  { emoji: '\u{1F331}', label: 'Climate Investor' },
  'fintech':         { emoji: '\u{1F4B3}', label: 'Fintech Investor' },
  'crypto':          { emoji: '⛓',    label: 'Crypto Investor' },
  'technical':       { emoji: '\u{1F9E0}', label: 'Technical Investor' },
  'founder-first':   { emoji: '\u{1F680}', label: 'Founder-Operator' },
  'operator-led':    { emoji: '\u{1F9D1}‍\u{1F4BB}', label: 'Operator-Investor' },
  'board-heavy':     { emoji: '\u{1F91D}', label: 'Board-Active', secondaryOnly: true },
  'exit-proven':     { emoji: '\u{1F4C8}', label: 'Exit-Proven',  secondaryOnly: true },
  'sector-specialist': { emoji: '\u{1F3AF}', label: 'Sector Specialist', secondaryOnly: true }
};

function ppScorePartner(p) {
  const scores = {};
  const why = {};
  const signals = { available: 0, possible: 0 };
  const put = (k, v, clause) => { scores[k] = Math.max(0, Math.min(1, v)); if (clause) why[k] = clause; };

  // ---- focus sectors (57% coverage; falls back to the legacy field) ----
  signals.possible++;
  const focus = ((p.investmentFocus || []).length ? p.investmentFocus : (p.sectors || []));
  if (focus.length) {
    signals.available++;
    const buckets = {};
    focus.forEach(function (t) {
      ((typeof RAW_TO_CANONICAL !== 'undefined' && RAW_TO_CANONICAL[t]) || []).forEach(function (b) { buckets[b] = 1; });
    });
    Object.keys(PP_SECTOR_GROUPS).forEach(function (key) {
      if (!PP_PARTNER_ARCHETYPES[key]) return;
      const group = PP_SECTOR_GROUPS[key];
      const matched = focus.filter(function (t) {
        return ((typeof RAW_TO_CANONICAL !== 'undefined' && RAW_TO_CANONICAL[t]) || [])
          .some(function (b) { return group.indexOf(b) !== -1; });
      });
      if (!matched.length) { scores[key] = 0; return; }
      put(key, matched.length / focus.length,
        Math.round(matched.length / focus.length * 100) + '% of their stated focus is ' + matched.slice(0, 2).join(' and '));
    });
    const distinct = Object.keys(buckets).length;
    if (distinct) {
      put('sector-specialist', distinct <= 1 ? 1 : distinct >= 5 ? 0 : (5 - distinct) / 4,
        'their focus maps to ' + distinct + ' canonical sector' + (distinct === 1 ? '' : 's'));
    }
  }

  // ---- prior roles (92% coverage) ----
  signals.possible++;
  const exp = p.previousExperience || [];
  if (exp.length) {
    signals.available++;
    const founded = exp.filter(function (e) { return PP_FOUNDER_RE.test(String(e)); });
    const operated = exp.filter(function (e) { return PP_OPERATOR_RE.test(String(e)); });
    if (founded.length) put('founder-first', Math.min(1, founded.length / 1.5),
      'they previously founded a company (' + founded[0] + ')');
    if (operated.length) put('operator-led', Math.min(1, operated.length / 2),
      'they held an operating role before investing (' + operated[0] + ')');
  }

  // ---- board seats (30%) ----
  signals.possible++;
  const seats = (p.boardSeats || []).length;
  if (seats) {
    signals.available++;
    put('board-heavy', Math.min(1, seats / 5), 'they hold ' + seats + ' recorded board seat' + (seats === 1 ? '' : 's'));
  }

  // ---- realised outcomes (53-56%) ----
  signals.possible++;
  const ipo = typeof p.ipoCount === 'number' ? p.ipoCount : null;
  const ex  = typeof p.majorExits === 'number' ? p.majorExits : null;
  if (ipo !== null || ex !== null) {
    signals.available++;
    const tot = (ipo || 0) + (ex || 0);
    if (tot > 0) put('exit-proven', Math.min(1, tot / 4),
      'their record lists ' + (ipo || 0) + ' IPO' + ((ipo || 0) === 1 ? '' : 's') +
      ' and ' + (ex || 0) + ' major exit' + ((ex || 0) === 1 ? '' : 's'));
  }
  return { scores: scores, why: why, signals: signals };
}

const PP_PARTNER_CACHE = {};
function partnerPersonality(slugOrPartner) {
  if (!slugOrPartner) return null;
  const p = typeof slugOrPartner === 'string'
    ? (typeof partnerProfiles !== 'undefined' ? partnerProfiles[slugOrPartner] : null)
    : slugOrPartner;
  if (!p) return null;
  const key = p.slug || p.name;
  if (PP_PARTNER_CACHE[key]) return PP_PARTNER_CACHE[key];

  const raw = ppScorePartner(p);
  // Reuse ppBuild but against the partner label set.
  const savedArch = PP_ARCHETYPES_ACTIVE;
  PP_ARCHETYPES_ACTIVE = PP_PARTNER_ARCHETYPES;
  const res = ppBuild(p.name || 'This partner', raw);
  PP_ARCHETYPES_ACTIVE = savedArch;
  PP_PARTNER_CACHE[key] = res;
  return res;
}

/* ==================================================================
   UI
   ================================================================== */
function ppEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function ppCard(p, opts) {
  if (!p) return '';
  opts = opts || {};
  const title = opts.title || 'Power Personality';
  if (p.unclassified) {
    return '<section class="pp-card pp-card-empty">' +
      '<div class="pp-eyebrow">' + ppEsc(title) + '</div>' +
      '<p class="pp-none">Not enough recorded data to classify how this ' +
      (opts.kind || 'firm') + ' invests. ' +
      'A classification needs a clear sector emphasis, stage pattern or team record — ' +
      'we would rather show nothing than a label the data cannot carry.</p>' +
      '</section>';
  }
  const traits = p.secondaries.length
    ? '<div class="pp-traits">' + p.secondaries.map(function (s) {
        return '<span class="pp-trait">' + ppEsc(s.label) + '</span>';
      }).join('<span class="pp-dot" aria-hidden="true">·</span>') + '</div>'
    : '';
  const conf = p.confidence.toLowerCase();
  return '<section class="pp-card">' +
    '<div class="pp-eyebrow">' + ppEsc(title) + '</div>' +
    '<div class="pp-primary">' +
      '<span class="pp-emoji" aria-hidden="true">' + p.primaryEmoji + '</span>' +
      '<span class="pp-label">' + ppEsc(p.primaryLabel) + '</span>' +
    '</div>' +
    traits +
    '<div class="pp-conf pp-conf-' + conf + '">' +
      '<span class="pp-conf-key">Confidence</span>' +
      '<span class="pp-conf-val">' + ppEsc(p.confidence) + '</span>' +
    '</div>' +
    '<p class="pp-why">' + ppEsc(p.explanation) + '</p>' +
    '</section>';
}

function renderFirmPersonalityCard(firm) {
  if (typeof firmPersonality !== 'function') return '';
  return ppCard(firmPersonality(firm), { kind: 'firm' });
}
function renderPartnerPersonalityCard(partnerOrSlug) {
  if (typeof partnerPersonality !== 'function') return '';
  return ppCard(partnerPersonality(partnerOrSlug), { title: 'Investment Style', kind: 'investor' });
}

/* Distribution across the whole board, counted from the generated
   classifications rather than any maintained list. */
function renderPersonalityDistribution() {
  const host = document.getElementById('personalityDistribution');
  if (!host) return;
  const d = personalityDistribution();
  const max = d.rows.length ? d.rows[0].count : 1;
  host.innerHTML =
    '<div class="analytics-subhead">Power Personalities</div>' +
    '<p class="pp-dist-intro">How the ' + d.total + ' tracked firms classify by primary investment personality. ' +
    'Computed from sector, stage, scale, structure and team data — not assigned by hand.</p>' +
    '<div class="pp-dist">' + d.rows.map(function (r) {
      return '<a class="pp-dist-row" href="#firms" data-personality="' + r.key + '">' +
        '<span class="pp-dist-label"><span aria-hidden="true">' + r.emoji + '</span> ' + ppEsc(r.label) + '</span>' +
        '<span class="pp-dist-track"><span class="pp-dist-fill" style="width:' +
          Math.round(r.count / max * 100) + '%"></span></span>' +
        '<span class="pp-dist-count">' + r.count + '</span></a>';
    }).join('') + '</div>' +
    (d.unclassified ? '<p class="pp-dist-note">' + d.unclassified +
      ' firms are not classified — their recorded sectors are too broad or too sparse to support a ' +
      'primary personality. They still appear everywhere else on the site.</p>' : '');
}

/* Discovery: personality chips beside the sector chips. */
let activePersonalities = new Set();
function matchesPersonalityFilter(firm) {
  if (!activePersonalities.size) return true;
  const p = firmPersonality(firm);
  if (!p || p.unclassified) return false;
  for (const key of activePersonalities) {
    if (p.primary === key) return true;
    if (p.secondaries.some(function (s) { return s.key === key; })) return true;
  }
  return false;
}

function renderPersonalityChips() {
  const el = document.getElementById('personalityChips');
  if (!el) return;
  const counts = {};
  (typeof firms !== 'undefined' ? firms : []).forEach(function (f) {
    const p = firmPersonality(f);
    if (!p || p.unclassified) return;
    counts[p.primary] = (counts[p.primary] || 0) + 1;
    p.secondaries.forEach(function (s) { counts[s.key] = (counts[s.key] || 0) + 1; });
  });
  el.innerHTML = Object.keys(counts)
    .sort(function (a, b) { return counts[b] - counts[a]; })
    .map(function (k) {
      const a = PP_ARCHETYPES[k];
      if (!a) return '';
      return '<button class="chip pp-chip' + (activePersonalities.has(k) ? ' active' : '') +
        '" data-personality="' + k + '"><span aria-hidden="true">' + a.emoji + '</span> ' +
        ppEsc(a.label) + ' <span class="pp-chip-n">' + counts[k] + '</span></button>';
    }).join('');
}

document.addEventListener('click', function (e) {
  const chip = e.target.closest ? e.target.closest('.pp-chip') : null;
  if (chip && chip.dataset.personality) {
    const k = chip.dataset.personality;
    if (activePersonalities.has(k)) activePersonalities.delete(k);
    else activePersonalities.add(k);
    renderPersonalityChips();
    if (typeof renderFirms === 'function') renderFirms();
    return;
  }
  // a row in the distribution jumps to the explorer with that filter applied
  const row = e.target.closest ? e.target.closest('.pp-dist-row') : null;
  if (row && row.dataset.personality) {
    activePersonalities = new Set([row.dataset.personality]);
    if (typeof renderPersonalityChips === 'function') renderPersonalityChips();
    if (typeof renderFirms === 'function') renderFirms();
  }
});
