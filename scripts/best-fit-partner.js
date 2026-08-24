/* ============================================================
   BEST-FIT-PARTNER.JS
   Power Match's person-level layer: for a firm the matcher has
   recommended, identify the partner at that firm who appears most
   relevant to THIS founder's startup, from source-backed Observed
   Investment Behavior only.

   WHAT THIS IS NOT:
   - not a "best partner at the firm" popularity score - the answer
     depends on the founder's sector/stage answers, so a fintech
     founder and a biotech founder can get different people at the
     same firm;
   - not an LLM's opinion - the ranking is a deterministic function
     of attributable rows, their evidence, and the same-period
     Partner-vs-Firm comparison;
   - not a percentage - there is no calibrated interpretation for
     one, so none is shown.

   RULES ENFORCED HERE:
   - CURRENT EMPLOYMENT: anyone with a departedYear or departedNote
     is excluded. Historical behavior informs their profile page,
     not a current-firm recommendation.
   - MINIMUM DATA: a candidate needs at least 3 sector-relevant
     attributable investments, or 2 relevant plus 5 evidenced rows
     overall. If nobody qualifies, the module is omitted entirely -
     no recommendation is forced.
   - SMALL-SAMPLE SPECIALIZATION: the Partner-vs-Firm signal is
     only consulted through pbehComparison(), which already
     enforces the sample floors and same-period windows; a 1-of-1
     concentration can never register here.
   - RESEARCH QUALITY: evidenced rows outrank bare rows; the
     confidence label ("strong evidence") requires at least 3
     evidenced relevant rows.
   - NO HARDCODING: no firm or partner is special-cased anywhere.
   ============================================================ */

/* Founder sector label (firm vocabulary) -> partner-row sector
   labels (attribution vocabulary). Exact label sets, plus keyword
   patterns run against the row's sector+subsector text. */
const BFP_EQUIV = {
  'Fintech': ['Fintech'],
  'AI': ['AI'],
  'AI Infrastructure': ['AI', 'Developer Tools & Infrastructure'],
  'Enterprise Software': ['Enterprise Software'],
  'SaaS': ['Enterprise Software'],
  'B2B Software': ['Enterprise Software'],
  'Developer Tools': ['Developer Tools & Infrastructure'],
  'Cloud Infrastructure': ['Developer Tools & Infrastructure'],
  'Infrastructure': ['Developer Tools & Infrastructure'],
  'Healthcare': ['Healthcare', 'Biotech', 'Digital Health', 'Diagnostics', 'Medical Devices', 'Consumer Health'],
  'Life Sciences': ['Biotech', 'Healthcare', 'Diagnostics'],
  'Digital Health': ['Digital Health', 'Healthcare', 'Consumer Health'],
  'Biotech': ['Biotech'],
  'Consumer': ['Consumer', 'Consumer Health'],
  'Consumer Internet': ['Consumer'],
  'Marketplaces': ['Consumer', 'Ecommerce'],
  'Ecommerce': ['Ecommerce', 'Consumer'],
  'Deep Tech': ['Deep Tech', 'Hardware', 'Robotics'],
  'Robotics': ['Robotics'],
  'Hardware': ['Hardware'],
  'Climate': ['Climate & Energy'],
  'Climate Technology': ['Climate & Energy'],
  'Sustainability': ['Climate & Energy'],
  'Clean Energy': ['Climate & Energy'],
  'Energy': ['Climate & Energy'],
  'Cybersecurity': ['Cybersecurity'],
  'Defense Tech': ['Defense Tech'],
  'Space': ['Space'],
  'Mobility': ['Mobility'],
  'Edtech': ['EdTech'],
  'Gaming': ['Gaming'],
  'Food & Agriculture': ['Foodtech', 'Agtech'],
  'Industrial Tech': ['Industrial & Manufacturing Technology'],
  'Industrial Technology': ['Industrial & Manufacturing Technology'],
  'Manufacturing': ['Industrial & Manufacturing Technology'],
  'Proptech': ['Real Estate Tech'],
  'Media': ['Consumer']
};
const BFP_KEYWORDS = {
  'Crypto': /crypto|blockchain|web3|nft/i,
  'DeFi': /crypto|defi/i,
  'Insurtech': /insur/i,
  'Logistics': /logistic|delivery|freight|supply.chain|last.mile/i,
  'Media': /media|streaming|social|video|creator/i,
  'Proptech': /real.estate|propert|construction|building/i,
  'Food & Agriculture': /food|agri|aqua|farm/i,
  'Space': /space|satellite|orbital|launch/i
};

function bfpRowMatchesSector(row, founderLabel) {
  if (!row.sector && !row.subsector) return false;
  const eq = BFP_EQUIV[founderLabel];
  if (eq && row.sector && eq.indexOf(row.sector) >= 0) return true;
  const kw = BFP_KEYWORDS[founderLabel];
  if (kw && kw.test((row.sector || '') + ' ' + (row.subsector || ''))) return true;
  return false;
}

/* Founder stage answers -> do they cover this row's recorded stage? */
function bfpStageCovers(founderStages, rowStage) {
  if (!rowStage) return false;
  if (founderStages.has(rowStage)) return true;
  if (founderStages.has('Growth') && /^(Growth|Series [CD])$/.test(rowStage)) return true;
  if (founderStages.has('Late Stage') && /^(Growth|Series [DEFG])$/.test(rowStage)) return true;
  return false;
}

let _bfpFirmIdx = null;
function bfpFirmIndex() {
  if (_bfpFirmIdx) return _bfpFirmIdx;
  const idx = {};
  if (typeof partnerProfiles !== 'undefined') {
    Object.keys(partnerProfiles).forEach(function (sl) {
      const fs = partnerProfiles[sl].firmSlug;
      if (fs) (idx[fs] = idx[fs] || []).push(sl);
    });
  }
  _bfpFirmIdx = idx;
  return idx;
}

/* The founder's effective answers, read from Power Match state. */
function bfpFounderAsk() {
  const sectors = (typeof finderSectors !== 'undefined' && finderSectors.size) ? [...finderSectors] : [];
  const stages = new Set((typeof finderStages !== 'undefined') ? [...finderStages] : []);
  if (typeof finderRaise !== 'undefined' && finderRaise !== 'any' &&
      typeof RAISE_TO_STAGES !== 'undefined' && RAISE_TO_STAGES[finderRaise]) {
    RAISE_TO_STAGES[finderRaise].forEach(function (s) { stages.add(s); });
  }
  return { sectors: sectors, stages: stages };
}

/* Evaluate every currently-employed partner at the firm against the
   founder's ask. Returns { primary, alternative, all } or null. */
function bfpEvaluate(firmSlug) {
  if (typeof pbehCompute !== 'function') return null;
  const ask = bfpFounderAsk();
  /* sector answers define relevance; with none, stage answers can -
     "invests at my stage, with evidence" is still startup-specific.
     With neither, there is nothing to match on and no module shows. */
  const stageOnly = !ask.sectors.length && ask.stages.size > 0;
  if (!ask.sectors.length && !stageOnly) return null;
  const nowYear = new Date().getFullYear();
  const slugs = bfpFirmIndex()[firmSlug] || [];
  const cands = [];

  slugs.forEach(function (sl) {
    const p = partnerProfiles[sl];
    if (p.departedYear != null || p.departedNote) return;   // current employment rule
    const c = pbehCompute(sl);
    if (!c || !c.n) return;

    const rows = c.careerRows;
    const relevant = stageOnly
      ? rows.filter(function (r) { return bfpStageCovers(ask.stages, r.stage); })
      : rows.filter(function (r) {
          return ask.sectors.some(function (fs) { return bfpRowMatchesSector(r, fs); });
        });
    const evidencedRel = relevant.filter(function (r) { return (r.evidence || []).length || r.dealSource; }).length;
    const evidencedAll = rows.filter(function (r) { return (r.evidence || []).length || r.dealSource; }).length;
    const staged = rows.filter(function (r) { return r.stage; });
    const stageFit = ask.stages.size ? staged.filter(function (r) { return bfpStageCovers(ask.stages, r.stage); }).length : 0;
    const recentRel = relevant.filter(function (r) { return r.year != null && r.year >= nowYear - 3; }).length;
    const boardsRel = relevant.filter(function (r) { return r.role === 'board'; }).length;
    const years = relevant.filter(function (r) { return r.year != null; }).map(function (r) { return r.year; });
    const latestYear = years.length ? Math.max.apply(null, years) : null;

    /* same-period specialization, only through the floor-enforcing
       comparison; record the matched label and the gap */
    let pvf = null;
    if (typeof pbehComparison === 'function') {
      const cmp = pbehComparison(sl);
      if (cmp) {
        cmp.dims.forEach(function (d) {
          if (d.key !== 'sector') return;
          d.partner.dist.forEach(function (pd) {
            const fd = d.firm.dist.find(function (x) { return x.label === pd.label; });
            const firmPct = fd ? fd.pct : 0;
            const matches = ask.sectors.some(function (fs) {
              return bfpRowMatchesSector({ sector: pd.label, subsector: null }, fs);
            });
            if (matches && pd.pct - firmPct >= 10 && (!pvf || pd.pct - firmPct > pvf.gap)) {
              pvf = { label: pd.label, partnerPct: pd.pct, firmPct: firmPct,
                      gap: pd.pct - firmPct, window: cmp.window.label };
            }
          });
        });
      }
    }

    // minimum-data gate
    const eligible = relevant.length >= 3 || (relevant.length >= 2 && evidencedAll >= 5);
    const score = 3 * Math.min(relevant.length, 8) +
                  2 * Math.min(stageFit, 5) +
                  Math.min(recentRel, 3) +
                  0.5 * Math.min(boardsRel, 4) +
                  0.5 * Math.min(evidencedRel, 6) +
                  (pvf ? 4 : 0);

    cands.push({
      slug: sl, name: p.name, title: p.title || 'Partner', eligible: eligible, score: score,
      relevant: relevant.length, evidencedRel: evidencedRel, evidencedAll: evidencedAll,
      stageFit: stageFit, stagedTotal: staged.length, recentRel: recentRel,
      boardsRel: boardsRel, latestYear: latestYear, pvf: pvf, n: c.n,
      confidence: (relevant.length >= 5 && evidencedRel >= 3) ? 'strong' : 'moderate'
    });
  });

  const ranked = cands.filter(function (x) { return x.eligible; })
    .sort(function (a, b) {
      return b.score - a.score || b.evidencedRel - a.evidencedRel ||
             b.relevant - a.relevant || b.n - a.n || a.name.localeCompare(b.name);
    });
  if (!ranked.length) return null;
  const primary = ranked[0];
  const alternative = (ranked.length > 1 && ranked[1].score >= 0.6 * primary.score) ? ranked[1] : null;
  return { primary: primary, alternative: alternative, all: cands, ask: ask, stageOnly: stageOnly };
}

/* WHY THIS PERSON - 2-3 evidence-grounded reasons, never adjectives. */
function bfpReasons(x, ask, firmName, stageOnly) {
  const out = [];
  if (stageOnly) {
    out.push(x.relevant + ' attributable investment' + (x.relevant === 1 ? '' : 's') + ' at your stage' +
      (x.evidencedRel ? ' (' + x.evidencedRel + ' with cited sources)' : ''));
  } else {
    const sectorsText = ask.sectors.length === 1 ? ask.sectors[0] : 'sector-relevant';
    out.push(x.relevant + ' attributable ' + sectorsText + ' investment' + (x.relevant === 1 ? '' : 's') +
      (x.evidencedRel ? ' (' + x.evidencedRel + ' with cited sources)' : ''));
  }
  if (!stageOnly && x.stageFit) {
    out.push(x.stageFit + ' of ' + x.stagedTotal + ' known-stage attributable investments at your stage');
  }
  if (x.pvf) {
    out.push('Higher observed ' + x.pvf.label + ' concentration than ' + firmName +
      ' over the same period (' + x.pvf.partnerPct + '% vs ' + x.pvf.firmPct + '%)');
  } else if (x.boardsRel) {
    out.push('Board roles on ' + x.boardsRel + ' of the attributed compan' + (x.boardsRel === 1 ? 'y' : 'ies'));
  } else if (x.latestYear) {
    out.push('Most recent attributable investment: ' + x.latestYear);
  }
  return out.slice(0, 3);
}

/* Compact module inside a Power Match firm card. Empty string when
   there is no responsible recommendation to make. */
function bfpModuleHtml(firmSlug) {
  try {
    const res = bfpEvaluate(firmSlug);
    if (!res) return '';
    const firm = (typeof firms !== 'undefined') ? firms.find(function (f) { return f.slug === firmSlug; }) : null;
    const firmName = firm ? firm.name : firmSlug;
    const x = res.primary;
    const esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
    let h = '<div class="bfp" data-bfp-firm="' + esc(firmSlug) + '">' +
      '<div class="bfp-label">Most relevant partner' +
        (x.confidence === 'strong' ? ' <span class="bfp-conf">strong evidence</span>' : '') + '</div>' +
      '<div class="bfp-name"><a class="bfp-view" data-partner="' + esc(x.slug) + '" href="#partner/' + esc(x.slug) + '">' +
        esc(x.name) + '</a> <span class="bfp-title">' + esc(x.title) + '</span></div>' +
      '<ul class="bfp-why">' +
        bfpReasons(x, res.ask, firmName, res.stageOnly).map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') +
      '</ul>';
    if (res.alternative) {
      const a = res.alternative;
      h += '<div class="bfp-alt">Also relevant: <a class="bfp-view" data-partner="' + esc(a.slug) +
        '" data-alt="1" href="#partner/' + esc(a.slug) + '">' + esc(a.name) + '</a>' +
        ' <span class="bfp-title">' + a.relevant + ' relevant attributable investments</span></div>';
    }
    h += '<div class="bfp-fb" data-bfp-partner="' + esc(x.slug) + '">' +
      '<span class="bfp-fb-q">Useful?</span>' +
      '<button type="button" class="bfp-fb-btn" data-bfpf="useful">Yes</button>' +
      '<button type="button" class="bfp-fb-btn" data-bfpf="not_useful">No</button></div>';
    h += '</div>';
    bfpShownCount++;
    return h;
  } catch (e) { return ''; }   // the module must never break the results list
}

/* structured feedback reasons, mirroring the firm-level pattern */
const BFP_FB_REASONS = [
  ['wrong_sector', 'Wrong sector'], ['wrong_stage', 'Wrong stage'],
  ['not_active', 'No longer active'], ['conflict', 'Potential conflict'],
  ['thin_evidence', 'Too little evidence'], ['other', 'Other']
];
function bfpReasonsFbHtml() {
  return '<span class="bfp-fb-q">What was off?</span>' +
    BFP_FB_REASONS.map(function (r) {
      return '<button type="button" class="bfp-fb-btn" data-bfpf-reason="' + r[0] + '">' + r[1] + '</button>';
    }).join('') +
    '<button type="button" class="bfp-fb-btn" data-bfpf-reason="">Skip</button>';
}

/* render-pass telemetry: how many modules a results view produced */
let bfpShownCount = 0;
function bfpResetShown() { bfpShownCount = 0; }
function bfpFlushShown() {
  if (bfpShownCount > 0 && typeof pbTrack === 'function') {
    pbTrack('best_fit_partner_shown', {
      dedupe: 'bfpshown' + bfpShownCount,
      props: { count: bfpShownCount }
    });
  }
}

/* B19 - admin explainability: why did this partner rank first here?
   Console helper; not rendered anywhere public. */
function bfpExplain(firmSlug) {
  const res = bfpEvaluate(firmSlug);
  if (!res) return 'no eligible partner for the current answers at ' + firmSlug;
  return res.all.map(function (x) {
    return (x === res.primary ? 'PRIMARY  ' : (x.eligible ? 'eligible ' : 'below-min ')) +
      x.name + ' score=' + x.score.toFixed(1) +
      ' relevant=' + x.relevant + ' evidencedRel=' + x.evidencedRel +
      ' stageFit=' + x.stageFit + '/' + x.stagedTotal +
      ' recent=' + x.recentRel + ' boards=' + x.boardsRel +
      ' pvf=' + (x.pvf ? (x.pvf.label + ' +' + x.pvf.gap + 'pp') : 'none') +
      ' confidence=' + x.confidence;
  }).join('\n');
}
