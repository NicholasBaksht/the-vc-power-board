/* ============================================================
   POWER-CAPABILITIES.JS
   Power Score  : how powerful is this firm?
   Power Signals: what is changing?
   Power Personality: how does it invest?
   Power Capabilities: what can it actually help me DO?

   EVERY CLASSIFICATION IS COMPUTED. No per-firm capability score
   is stored anywhere. Each capability is a sum of weighted
   signals read from data that already exists, and every signal
   that fires contributes the sentence fragment that explains it.
   A capability with no signals is reported as unevaluated, never
   as a middling default.

   ------------------------------------------------------------
   WHY FIVE CAPABILITIES AND NOT THE EIGHT REQUESTED
   ------------------------------------------------------------
   Coverage was measured across all 401 firms and 914 partners
   BEFORE any scoring was designed. Three of the eight had no
   evidence base:

     Go-to-Market      thesis language in 9% of firms; GTM roles
                       (CRO/CMO/VP Sales) in 16 firms - 4%.
     Recruiting/Talent people-ops roles in SIX partners across
                       SIX firms - 1.5%.
     International     firmGeography covers 4 firms; an office
                       city is named in 6%; hq is single-valued.

   Scoring 95% of the board "Limited Evidence" on a row is not
   caution, it is a broken row that teaches founders to ignore
   the panel. They are omitted, and the panel says so rather
   than quietly leaving a gap.

   No sixth capability was invented to round the list back out.
   ============================================================ */

const PC_CAPABILITIES = {
  'brand': {
    label: 'Brand & Credibility',
    blurb: 'How much a term sheet from this firm signals to later investors, customers and candidates.'
  },
  'followon': {
    label: 'Follow-on Capital',
    blurb: 'Whether the firm can keep funding you, and reach the investors who fund the round after.'
  },
  'enterprise': {
    label: 'Enterprise Access',
    blurb: 'Routes into large corporate buyers, through ownership or through partners who have sold to them.'
  },
  'partnerships': {
    label: 'Strategic Partnerships',
    blurb: 'Corporate relationships and co-investor reach that can turn into a commercial partnership.'
  },
  'technical': {
    label: 'Technical & Product Depth',
    blurb: 'Whether the people around the table can engage with what you are actually building.'
  }
};

/* Bands, not a 1-10 score. A score to one decimal place implies a
   precision this evidence does not have; a band is honest about
   being a judgement built from a handful of signals. */
const PC_BANDS = [
  { min: 0.72, label: 'Exceptional' },
  { min: 0.52, label: 'Very Strong' },
  { min: 0.34, label: 'Strong' },
  { min: 0.18, label: 'Moderate' },
  { min: 0.001, label: 'Limited Evidence' }
];
function pcBand(score) {
  for (let i = 0; i < PC_BANDS.length; i++) if (score >= PC_BANDS[i].min) return PC_BANDS[i].label;
  return null;   // nothing fired at all - reported as unevaluated
}

const PC_TECH_SECTORS = ['ai', 'deep-tech', 'developer-tools', 'cybersecurity', 'hardware', 'robotics', 'space'];
const PC_ENTERPRISE_SECTORS = ['enterprise-software', 'developer-tools', 'fintech', 'cybersecurity'];

const PC_ROLE = {
  enterpriseExec: /\b(President|SVP|Senior Vice President|Executive Vice President|General Manager|Chief Executive|CEO of)\b/,
  corpDev:        /\b(Corporate Development|Business Development|Partnerships|Alliances|M&A)\b/i,
  technical:      /\b(CTO|Chief Technolog|VP Engineering|VP of Engineering|Head of Engineering|Principal Engineer|Staff Engineer|Software Engineer|Chief Architect|Distinguished Engineer)\b/i,
  product:        /\b(CPO|Chief Product|VP Product|VP of Product|Head of Product|Product Manager|Director of Product)\b/i,
  research:       /\bPh\.?D\b|Professor|Research Scientist|Postdoc|Principal Scientist/i
};

function pcPartners(slug) {
  if (typeof partnerProfiles === 'undefined' || !partnerProfiles) return [];
  const out = [];
  for (const k in partnerProfiles) if (partnerProfiles[k] && partnerProfiles[k].firmSlug === slug) out.push(partnerProfiles[k]);
  return out;
}
function pcBlob(p) {
  return [(p.previousExperience || []).join(' '), p.title || '', p.biography || '', (p.education || []).join(' ')].join(' ');
}
function pcCount(partners, re) {
  return partners.filter(function (p) { return re.test(pcBlob(p)); }).length;
}

/* Reuses the co-holding network already built for Power Personality
   rather than recomputing it - firms that share a public position are
   firms that can introduce each other. */
function pcNetworkDegree(slug) {
  return (typeof ppCoHoldingDegree === 'function') ? ppCoHoldingDegree(slug) : 0;
}
function pcCoInvestors(slug) {
  if (typeof FIRM_DEALS === 'undefined' || !FIRM_DEALS) return 0;
  const seen = {};
  Object.keys(FIRM_DEALS).forEach(function (k) {
    const d = FIRM_DEALS[k];
    if (!d || d.firmSlug !== slug) return;
    (d.coInvestors || []).forEach(function (c) { seen[c] = 1; });
  });
  return Object.keys(seen).length;
}
function pcFundCount(slug) {
  if (typeof FIRM_FUNDS === 'undefined' || !FIRM_FUNDS) return 0;
  const e = FIRM_FUNDS[slug];
  return (e && e.funds) ? e.funds.length : 0;
}
function pcBoardSeats(partners) {
  return partners.reduce(function (n, p) { return n + ((p.boardSeats || []).length); }, 0);
}

/* ==================================================================
   SCORING
   Each capability is a list of signals. A signal returns a weight in
   0..1 and the clause that explains it. Weights sum, then divide by
   the total available weight - so a firm is scored against what we
   could actually check for it, not against a fixed denominator that
   silently penalises thin records.

   `sources` counts how many independent DATA SOURCES were readable
   (sectors, partners, AUM, stages, network, org). That drives
   confidence, and is deliberately separate from the score: a firm
   can be confidently Moderate.
   ================================================================== */
function pcScoreFirm(firm) {
  const partners = pcPartners(firm.slug);
  const withExp = partners.filter(function (p) { return (p.previousExperience || []).length; });
  /* One partner is not a sample. Counting a people signal as "checked"
     when a firm has a single recorded partner meant a firm whose one
     profiled person happens not to be an engineer scored 0 on technical
     depth - Lux Capital, a deep-tech house, came out Moderate. Below the
     threshold the signal is not checked at all, and confidence carries
     the gap instead of the score. */
  const peopleSample = withExp.length >= 2;
  const canon = (typeof canonicalSectorsFor === 'function')
    ? canonicalSectorsFor(firm).filter(function (s) { return s !== '__generalist'; }) : [];
  const org = (typeof firmOrg === 'function') ? firmOrg(firm) : null;
  const aum = (typeof parseAumNumber === 'function') ? parseAumNumber(firm.aum) : 0;
  const stages = (typeof firmStages !== 'undefined' && firmStages) ? (firmStages[firm.slug] || []) : [];
  const degree = pcNetworkDegree(firm.slug);
  const coInv = pcCoInvestors(firm.slug);
  const funds = pcFundCount(firm.slug);
  const seats = pcBoardSeats(partners);
  const power = (typeof computePowerScore === 'function') ? computePowerScore(firm) : null;

  const sources = {
    sectors: canon.length > 0,
    partners: withExp.length > 0,
    aum: aum > 0,
    stages: stages.length > 0,
    network: degree > 0 || coInv > 0,
    org: true                     // absence of a parent is itself an answer
  };
  const sourceCount = Object.keys(sources).filter(function (k) { return sources[k]; }).length;

  const caps = {};
  const add = (key, available, weight, clause) => {
    const c = caps[key] || (caps[key] = { got: 0, possible: 0, why: [] });
    if (!available) return;                 // signal not checkable - excluded from the denominator
    c.possible += 1;
    if (weight > 0) { c.got += Math.min(1, weight); if (clause) c.why.push({ w: weight, t: clause }); }
  };

  // ---------------- BRAND & CREDIBILITY ----------------
  add('brand', power !== null, power !== null ? Math.min(1, Math.max(0, (power - 40) / 50)) : 0,
      power !== null ? 'its Power Score of ' + power + ' places it in the ' +
        (power >= 85 ? 'top tier' : power >= 70 ? 'upper range' : 'middle') + ' of the board' : null);
  /* signatureExit is free text and occasionally a paragraph - Intel
     Capital's runs 250 characters. Take the first clause and cap it, so
     an evidence line stays a line. */
  const exitShort = firm.signatureExit
    ? (function (t) {
        const first = String(t).split(/ [-\u2013] |\. /)[0].split('(')[0].trim();
        return first.length > 90 ? first.slice(0, 87).replace(/[\s,;]+$/, '') + '\u2026' : first;
      })(firm.signatureExit)
    : null;
  add('brand', true, firm.signatureExit ? 0.85 : 0,
      exitShort ? 'it has a verified signature exit on file (' + exitShort + ')' : null);
  add('brand', typeof firm.founded === 'number', (typeof firm.founded === 'number' && firm.founded <= 2010)
        ? Math.min(1, (2010 - firm.founded + 5) / 25) : 0,
      (typeof firm.founded === 'number' && firm.founded <= 2010) ? 'it has been investing since ' + firm.founded : null);
  const ipoTotal = partners.reduce(function (n, p) { return n + (typeof p.ipoCount === 'number' ? p.ipoCount : 0); }, 0);
  add('brand', peopleSample, Math.min(1, ipoTotal / 4),
      ipoTotal > 0 ? 'its profiled partners have taken ' + ipoTotal + ' compan' + (ipoTotal === 1 ? 'y' : 'ies') + ' public' : null);

  // ---------------- FOLLOW-ON CAPITAL ----------------
  add('followon', aum > 0, aum > 0 ? Math.min(1, Math.max(0, (Math.log10(aum) + 1) / 2.6)) : 0,
      aum > 0 ? 'it reports ' + String(firm.aum).split('(')[0].trim() + ', giving it reserves to follow on' : null);
  const late = stages.filter(function (s) { return ['Series B', 'Series C', 'Growth', 'Late Stage'].indexOf(s) !== -1; }).length;
  add('followon', stages.length > 0, stages.length ? Math.min(1, late / 2) : 0,
      late > 0 ? 'it invests through ' + stages.filter(function (s) { return ['Series B','Series C','Growth','Late Stage'].indexOf(s) !== -1; }).join(', ') +
        ', so it can lead or join your later rounds' : null);
  add('followon', funds > 0, Math.min(1, funds / 4),
      funds >= 2 ? 'it has raised ' + funds + ' funds on record, a pattern of returning to market' : null);
  add('followon', degree > 0 || coInv > 0, Math.min(1, Math.max(degree / 10, coInv / 25)),
      (degree > 0 || coInv > 0) ? 'it shares positions or rounds with ' + Math.max(degree, coInv) +
        ' other tracked firms, which is who a later round gets syndicated to' : null);

  // ---------------- ENTERPRISE ACCESS ----------------
  const isCorp = !!(org && (org.type === 'corporate' || org.type === 'affiliate' || org.type === 'government'));
  add('enterprise', true, isCorp ? (org.type === 'corporate' ? 1 : 0.6) : 0,
      isCorp ? 'it is the ' + (org.type === 'corporate' ? 'corporate venture arm' : org.type === 'government' ? 'government-backed arm' : 'affiliated fund') +
        ' of ' + org.parent + ', which is a direct route to that organisation' : null);
  const entExec = pcCount(withExp, PC_ROLE.enterpriseExec);
  add('enterprise', peopleSample, withExp.length ? Math.min(1, entExec / Math.max(2, withExp.length * 0.5)) : 0,
      entExec > 0 ? entExec + ' of its ' + withExp.length + ' profiled partners held senior operating roles inside large organisations' : null);
  const entSectors = canon.filter(function (s) { return PC_ENTERPRISE_SECTORS.indexOf(s) !== -1; });
  add('enterprise', canon.length > 0, canon.length ? entSectors.length / canon.length : 0,
      entSectors.length ? 'it invests primarily in categories sold to businesses rather than consumers' : null);
  add('enterprise', peopleSample, Math.min(1, seats / 8),
      seats >= 3 ? 'its partners hold ' + seats + ' recorded board seats, the seat where customer introductions actually get made' : null);

  // ---------------- STRATEGIC PARTNERSHIPS ----------------
  add('partnerships', true, isCorp ? 1 : 0,
      isCorp ? 'its parent, ' + org.parent + ', is itself a potential commercial partner' : null);
  const bd = pcCount(withExp, PC_ROLE.corpDev);
  add('partnerships', peopleSample, withExp.length ? Math.min(1, bd / Math.max(2, withExp.length * 0.4)) : 0,
      bd > 0 ? bd + ' of its partners came from corporate development or business development roles' : null);
  add('partnerships', degree > 0 || coInv > 0, Math.min(1, Math.max(degree / 12, coInv / 30)),
      (degree > 0 || coInv > 0) ? 'it co-invests or co-holds with ' + Math.max(degree, coInv) + ' other tracked firms' : null);

  // ---------------- TECHNICAL & PRODUCT DEPTH ----------------
  const techSectors = canon.filter(function (s) { return PC_TECH_SECTORS.indexOf(s) !== -1; });
  add('technical', canon.length > 0, canon.length ? techSectors.length / canon.length : 0,
      techSectors.length ? Math.round(techSectors.length / canon.length * 100) + '% of its mapped sectors are technical categories' : null);
  const tech = pcCount(withExp, PC_ROLE.technical);
  const prod = pcCount(withExp, PC_ROLE.product);
  add('technical', peopleSample, withExp.length ? Math.min(1, (tech + prod) / Math.max(2, withExp.length * 0.4)) : 0,
      (tech + prod) > 0 ? (tech + prod) + ' of its profiled partners came from engineering or product roles' : null);
  const res = pcCount(partners, PC_ROLE.research);
  add('technical', peopleSample, Math.min(1, res / 3),
      res > 0 ? res + ' of its partners hold a doctorate or came from research' : null);

  return { caps: caps, sourceCount: sourceCount, sourcesPossible: 6, partnerCount: partners.length };
}

/* ------------------------------------------------------------------
   PUBLIC API
   Memoised: computed once per page load, never stored, so it cannot
   drift from the data the way a saved score would.
   ------------------------------------------------------------------ */
const PC_CACHE = {};

function firmCapabilities(firmOrSlug) {
  if (!firmOrSlug) return null;
  const firm = typeof firmOrSlug === 'string'
    ? (typeof firms !== 'undefined' ? firms.find(function (f) { return f.slug === firmOrSlug; }) : null)
    : firmOrSlug;
  if (!firm) return null;
  if (PC_CACHE[firm.slug]) return PC_CACHE[firm.slug];

  const raw = pcScoreFirm(firm);
  const rows = Object.keys(PC_CAPABILITIES).map(function (key) {
    const c = raw.caps[key] || { got: 0, possible: 0, why: [] };
    // Scored against the signals that were actually checkable for THIS
    // firm. A firm with no partner records is not penalised on a people
    // signal we could never have read - it simply has fewer inputs, and
    // confidence carries that instead.
    const score = c.possible ? c.got / c.possible : 0;
    const band = pcBand(score);
    const why = c.why.slice().sort(function (a, b) { return b.w - a.w; }).map(function (x) { return x.t; });
    return {
      key: key,
      label: PC_CAPABILITIES[key].label,
      blurb: PC_CAPABILITIES[key].blurb,
      band: band,
      score: Math.round(score * 1000) / 1000,
      evidence: why,
      signalsFired: c.why.length,
      signalsChecked: c.possible,
      evaluated: band !== null
    };
  });

  const ratio = raw.sourceCount / raw.sourcesPossible;
  const evaluated = rows.filter(function (r) { return r.evaluated; });
  const confidence = (ratio >= 0.8 && evaluated.length >= 4) ? 'HIGH'
                   : (ratio >= 0.5 && evaluated.length >= 2) ? 'MEDIUM' : 'LOW';

  const res = {
    rows: rows.slice().sort(function (a, b) { return b.score - a.score; }),
    confidence: confidence,
    sourceCount: raw.sourceCount,
    sourcesPossible: raw.sourcesPossible,
    summary: pcSummary(firm, rows),
    anyEvaluated: evaluated.length > 0
  };
  PC_CACHE[firm.slug] = res;
  return res;
}

/* The one-line read. Built from whichever capabilities actually came out
   on top for THIS firm, so two firms only get the same sentence if the
   evidence genuinely put them in the same place. */
const PC_PHRASE = {
  brand:        'a name that carries weight in your next round',
  followon:     'an investor that can keep funding you',
  enterprise:   'introductions to large corporate buyers',
  partnerships: 'commercial and partnership reach',
  technical:    'partners who can engage with the technology itself'
};
/* Board-wide medians, computed once, so a summary can lead with the
   capability where a firm most EXCEEDS the field rather than with its
   highest raw score. Follow-on and Brand are built from signals almost
   every firm has - AUM, age, an exit - so ranking on raw score gave four
   very different firms the same opening sentence. Relative strength is
   what a founder is actually asking about. */
let PC_MEDIANS = null;
function pcMedians() {
  if (PC_MEDIANS) return PC_MEDIANS;
  PC_MEDIANS = {};
  const list = (typeof firms !== 'undefined' ? firms : []);
  Object.keys(PC_CAPABILITIES).forEach(function (key) {
    const vals = [];
    list.forEach(function (f) {
      const raw = pcScoreFirm(f);
      const c = raw.caps[key];
      if (c && c.possible) vals.push(c.got / c.possible);
    });
    vals.sort(function (a, b) { return a - b; });
    PC_MEDIANS[key] = vals.length ? vals[Math.floor(vals.length / 2)] : 0;
  });
  return PC_MEDIANS;
}

function pcSummary(firm, rows) {
  const med = pcMedians();
  const strong = rows.filter(function (r) { return r.evaluated && r.score >= 0.34; })
                     .sort(function (a, b) {
                       const da = a.score - (med[a.key] || 0), db = b.score - (med[b.key] || 0);
                       if (Math.abs(db - da) > 0.02) return db - da;
                       return b.score - a.score;
                     });
  if (!strong.length) {
    return 'Power Board does not yet hold enough verified detail on ' + (firm.name || 'this firm') +
           ' to say what it is strongest at helping with.';
  }
  const top = strong.slice(0, 2).map(function (r) { return PC_PHRASE[r.key]; });
  const lead = top.length === 2 ? top[0] + ' and ' + top[1] : top[0];
  const weakest = rows.filter(function (r) { return r.evaluated && r.score < 0.18; });
  const caveat = weakest.length
    ? ' The evidence is thinner on ' + weakest.slice(0, 2).map(function (r) { return r.label.toLowerCase(); }).join(' and ') + '.'
    : '';
  return 'Best suited to founders who need ' + lead + '.' + caveat;
}

/* ---- reusable by the Discovery Engine / Power Match ----
   Deliberately plain: a key, a numeric score and a band. Nothing here
   depends on the DOM, so a matching flow can rank firms on a stated
   founder need without touching this feature's UI. */
function capabilityScore(firmOrSlug, key) {
  const c = firmCapabilities(firmOrSlug);
  if (!c) return 0;
  const row = c.rows.find(function (r) { return r.key === key; });
  return row ? row.score : 0;
}
function firmsByCapability(key, minScore, firmList) {
  const list = firmList || (typeof firms !== 'undefined' ? firms : []);
  const floor = typeof minScore === 'number' ? minScore : 0.34;
  return list
    .map(function (f) { return { firm: f, score: capabilityScore(f, key) }; })
    .filter(function (x) { return x.score >= floor; })
    .sort(function (a, b) { return b.score - a.score; });
}
function capabilityKeys() { return Object.keys(PC_CAPABILITIES); }

/* ==================================================================
   UI
   ================================================================== */
function pcEsc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function pcBandClass(band) {
  return band ? 'pc-band-' + band.toLowerCase().replace(/[^a-z]+/g, '-') : 'pc-band-none';
}

function renderFirmCapabilities(firm) {
  if (typeof firmCapabilities !== 'function') return '';
  const c = firmCapabilities(firm);
  if (!c) return '';

  const rows = c.rows.map(function (r, i) {
    const id = 'pc-' + firm.slug + '-' + r.key;
    if (!r.evaluated) {
      return '<div class="pc-row pc-row-none">' +
        '<div class="pc-row-head">' +
          '<span class="pc-cap">' + pcEsc(r.label) + '</span>' +
          '<span class="pc-band pc-band-none">Not evaluated</span>' +
        '</div>' +
        '<p class="pc-none">No signal in the recorded data speaks to this. ' +
        'Rather than guess, Power Board leaves it open.</p></div>';
    }
    return '<div class="pc-row">' +
      '<button type="button" class="pc-row-head" aria-expanded="false" aria-controls="' + id + '">' +
        '<span class="pc-cap">' + pcEsc(r.label) + '</span>' +
        '<span class="pc-band ' + pcBandClass(r.band) + '">' + pcEsc(r.band) + '</span>' +
        '<span class="pc-chev" aria-hidden="true">›</span>' +
      '</button>' +
      '<div class="pc-detail" id="' + id + '" hidden>' +
        '<p class="pc-blurb">' + pcEsc(r.blurb) + '</p>' +
        (r.evidence.length
          ? '<ul class="pc-evidence">' + r.evidence.map(function (e) { return '<li>' + pcEsc(e) + '</li>'; }).join('') + '</ul>'
          : '<p class="pc-blurb">Scored from the absence of contrary evidence rather than a positive signal.</p>') +
        '<p class="pc-meta">' + r.signalsFired + ' of ' + r.signalsChecked + ' checked signals supported this.</p>' +
      '</div></div>';
  }).join('');

  return '<section class="pc-card">' +
    '<div class="pc-eyebrow">Power Capabilities</div>' +
    '<p class="pc-summary">' + pcEsc(c.summary) + '</p>' +
    '<div class="pc-rows">' + rows + '</div>' +
    '<div class="pc-foot">' +
      '<span class="pc-conf pc-conf-' + c.confidence.toLowerCase() + '">Confidence: ' + c.confidence + '</span>' +
      '<span class="pc-foot-note">Derived from ' + c.sourceCount + ' of ' + c.sourcesPossible +
      ' available data sources. Capability is inferred from recorded evidence, not from the firm’s own claims.</span>' +
    '</div></section>';
}

// One delegated listener for every expandable row on the page.
document.addEventListener('click', function (e) {
  const head = e.target.closest ? e.target.closest('.pc-row-head') : null;
  if (!head || head.tagName !== 'BUTTON') return;
  const panel = document.getElementById(head.getAttribute('aria-controls'));
  if (!panel) return;
  const open = !panel.hidden;
  panel.hidden = open;
  head.setAttribute('aria-expanded', String(!open));
});
