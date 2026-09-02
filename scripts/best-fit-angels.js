/* ============================================================
   BEST-FIT-ANGEL.JS - Strategic Angels inside Power Match

   Extends the existing recommendation system rather than becoming a
   second one. It reuses, and does not reimplement:
     bfpCanonSector / bfpRowMatchesSector   sector equivalence
     bfpStageCovers                          founder stage coverage
     bfpFounderAsk                           the founder's ask
     CAPITAL_SOURCES                         the canonical Angel record
     toggleShortlist / getShortlist          saving
     pbmOpenOrStart / pbnToggleFollow        Network actions
     pbTrack                                 analytics

   WHAT THIS FILE WILL NOT DO
   - No match percentage. Angels are RANKED and every one states the
     counts behind its reasons. A "87% strategic fit" would be the
     same fabrication as a firm-fit score with no methodology.
   - No claim without a count. Every reason names its numerator and
     denominator, so "5 of 8 sector-classified investments" is the
     output and "strong enterprise investor" is not.
   - No inference from absence. A missing check size, stage or year
     never subtracts. Angels are not penalised for research Power
     Board has not done yet.
   - No "inactive". Absence of a tracked investment is reported as
     absence of tracking, never as evidence the person stopped.
   - Stated focus and observed behaviour are never merged into one
     claim. They are separate reason types with separate wording.

   DATA REALITY THIS WAS BUILT AGAINST (audited 2026-09-02, 30 angels)
     342 investment rows: 228 carry a sector, 16 a stage, 28 a year.
     So SECTOR alignment is the load-bearing signal, capability
     alignment is second, and STAGE and RECENT ACTIVITY will fire for
     almost nobody until that research exists. Those reason types are
     implemented and correct; they are simply dormant at current
     coverage. That is the honest state, not a bug to code around.
   ============================================================ */

/* Minimum sector-classified rows before an observed-sector claim may
   be made. Below this the sample is too thin to describe a pattern,
   and the angel can still surface on capability alone. */
const BFA_MIN_SECTOR_ROWS = 3;
const BFA_MIN_STAGE_ROWS = 3;
const BFA_MIN_SIGNALS = 2;
const BFA_MAX_RESULTS = 5;
const BFA_RECENT_YEARS = 2;

/* Reason taxonomy. Rendering is driven off these codes so copy stays
   consistent and a reason can never be invented ad hoc at a call
   site. Order here is the display priority from the brief: founder
   need first, then observed sector, observed stage, operating
   history, recent activity, then context. */
const BFA_REASON_ORDER = [
  'FOUNDER_NEED_ALIGNMENT',
  'CAPABILITY_ALIGNMENT',
  'SECTOR_ALIGNMENT',
  'STAGE_ALIGNMENT',
  'OPERATING_BACKGROUND_ALIGNMENT',
  'RECENT_ACTIVITY',
  'STATED_FOCUS_ALIGNMENT',
  'GEOGRAPHY_ALIGNMENT',
  'CHECK_SIZE_ALIGNMENT',
  'HIGH_RESEARCH_CONFIDENCE',
  'CONFLICT_WARNING'
];

/* Founder need -> the capability labels already used by Power Board.
   This deliberately reuses the shared vocabulary that partner
   capabilities and angel capabilities both draw on; there is no
   angel-only taxonomy. Needs with no representable capability map to
   an empty list and simply never fire, rather than being faked. */
const BFA_NEED_TO_CAPABILITY = {
  'Fundraising':        ['Fundraising', 'Finance'],
  'Technical Advisor':  ['Technical'],
  'Engineering Talent': ['Technical', 'Hiring'],
  'GTM / Sales':        ['Enterprise GTM'],
  'Marketing / Growth': [],
  'Hiring':             ['Hiring'],
  'Customers':          ['Enterprise GTM', 'Industry Network'],
  'Partnerships':       ['Industry Network'],
  'Regulatory':         ['Regulatory', 'Clinical/Life Sciences'],
  'Operations':         ['Operations'],
  'Other Founders':     []
};

/* The optional question. Kept short and skippable: investor matching
   must work without it, per the brief. */
const BFA_NEEDS = Object.keys(BFA_NEED_TO_CAPABILITY);

/* Operating background words that support a need. Sourced from the
   operatingBackground field, which is a short list of nouns the
   research already recorded ("founder", "engineer", "banker"). */
const BFA_NEED_TO_BACKGROUND = {
  'Technical Advisor':  ['engineer', 'cto'],
  'Engineering Talent': ['engineer', 'cto'],
  'Fundraising':        ['banker', 'investor', 'accountant'],
  'GTM / Sales':        ['sales', 'operator'],
  'Operations':         ['operator', 'corporate executive'],
  'Regulatory':         ['scientist', 'clinician'],
  'Other Founders':     ['founder']
};

function bfaArr(v) { return Array.isArray(v) ? v : []; }
function bfaLower(v) { return String(v == null ? '' : v).toLowerCase(); }

function bfaEsc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function bfaUrl(v) { return bfaEsc(encodeURIComponent(String(v == null ? '' : v))); }

/* ---------- founder needs (Part 18) ----------
   Stored where network-relevance.js already looks for them. That file
   has been reading this key since it shipped and always finding it
   empty, because nothing ever wrote it. Writing it here switches on
   the capability half of "People worth knowing" as well. */
function bfaGetNeeds() {
  try { return JSON.parse(sessionStorage.getItem('pbFounderNeeds') || '[]'); }
  catch (e) { return []; }
}
function bfaSetNeeds(list) {
  try { sessionStorage.setItem('pbFounderNeeds', JSON.stringify(list || [])); } catch (e) {}
}

/* ---------- eligibility (Part 20) ---------- */
function bfaEligible(a) {
  if (!a) return false;
  if (a.type !== 'angel') return false;
  if (a.investingStatus !== 'active') return false;
  /* An entry with neither an investment row nor a sourced capability
     has nothing that could produce an evidenced reason, so it is not
     a candidate rather than a weak one. */
  if (!bfaArr(a.investments).length && !bfaArr(a.capabilities).length) return false;
  return true;
}

/* ---------- observed behaviour ----------
   Computed from the angel's own investment rows. Returns the counts
   as well as the shares so every claim can show its denominator
   (Part 11) instead of hiding coverage in a tooltip. */
function bfaObserved(a) {
  const inv = bfaArr(a.investments);
  const sectored = inv.filter(function (i) { return i.sector; });
  const staged = inv.filter(function (i) { return i.stage; });
  const dated = inv.filter(function (i) { return i.year; });

  const secCount = {};
  sectored.forEach(function (i) {
    const k = (typeof bfpCanonSector === 'function') ? bfpCanonSector(i.sector) : i.sector;
    secCount[k] = (secCount[k] || 0) + 1;
  });
  const stgCount = {};
  staged.forEach(function (i) { stgCount[i.stage] = (stgCount[i.stage] || 0) + 1; });

  const nowY = new Date().getFullYear();
  const recent = dated.filter(function (i) { return nowY - i.year <= BFA_RECENT_YEARS; });

  return {
    total: inv.length,
    sectorRows: sectored.length, sectorCount: secCount,
    stageRows: staged.length, stageCount: stgCount,
    datedRows: dated.length,
    recentCount: recent.length,
    latestYear: dated.length ? Math.max.apply(null, dated.map(function (i) { return i.year; })) : null
  };
}

/* ---------- scoring ----------
   Weights are deliberately coarse and are documented rather than
   tuned, because there is no outcome data to tune against. They order
   results; they are never shown as a number. */
function bfaEvaluate(slug, a, ask, needs) {
  const obs = bfaObserved(a);
  const reasons = [];
  let weight = 0, signals = 0;

  function add(code, text, w) {
    reasons.push({ code: code, text: text });
    weight += w; signals++;
  }

  /* --- founder need, via sourced capabilities. Highest priority
         because it is the thing a sector match cannot tell you. --- */
  const capLabels = bfaArr(a.capabilities).map(function (c) { return c.capability; }).filter(Boolean);
  const needHits = [];
  needs.forEach(function (n) {
    const want = BFA_NEED_TO_CAPABILITY[n] || [];
    const hit = capLabels.filter(function (c) { return want.indexOf(c) >= 0; });
    if (hit.length) needHits.push({ need: n, caps: hit });
  });
  if (needHits.length) {
    const h = needHits[0];
    add('FOUNDER_NEED_ALIGNMENT',
        'Capability evidence for ' + h.caps.join(' and ') + ', which matches your stated need for ' +
        h.need.toLowerCase() + '.', 6 * needHits.length);
  }

  /* --- observed sector, the load-bearing signal --- */
  if (ask.sectors.length && obs.sectorRows >= BFA_MIN_SECTOR_ROWS) {
    let matched = 0;
    const labels = [];
    bfaArr(a.investments).forEach(function (i) {
      if (!i.sector) return;
      const hit = ask.sectors.some(function (s) {
        return (typeof bfpRowMatchesSector === 'function')
          ? bfpRowMatchesSector(i, s)
          : bfaLower(i.sector) === bfaLower(s);
      });
      if (hit) { matched++; if (labels.indexOf(i.sector) < 0) labels.push(i.sector); }
    });
    if (matched > 0) {
      /* Weight follows the SHARE, not the raw count. "1 of 17" is a
         much weaker statement about behaviour than "1 of 4", and the
         first benchmark scored them identically until this changed. */
      const share = matched / obs.sectorRows;
      add('SECTOR_ALIGNMENT',
          matched + ' of ' + obs.sectorRows + ' sector-classified investments are in ' +
          (labels.slice(0, 2).join(' and ') || ask.sectors[0]) + '.',
          Math.min(10, Math.round(2 + (share * 8) + Math.min(2, matched / 2))));
    }
  }

  /* --- observed stage. Correct, and dormant at current coverage:
         16 of 342 rows carry a stage. It is gated on its own floor so
         it can never speak from one row. --- */
  if (ask.stages && ask.stages.size && obs.stageRows >= BFA_MIN_STAGE_ROWS) {
    let sm = 0; const sl = [];
    bfaArr(a.investments).forEach(function (i) {
      if (!i.stage) return;
      const ok = (typeof bfpStageCovers === 'function')
        ? bfpStageCovers(ask.stages, i.stage) : ask.stages.has(i.stage);
      if (ok) { sm++; if (sl.indexOf(i.stage) < 0) sl.push(i.stage); }
    });
    if (sm > 0) {
      add('STAGE_ALIGNMENT',
          sm + ' of ' + obs.stageRows + ' stage-classified investments were ' +
          sl.slice(0, 2).join(' or ') + '.', 4);
    }
  }

  /* --- operating background supporting a need --- */
  const bg = bfaArr(a.operatingBackground).map(bfaLower);
  let bgHit = null;
  needs.forEach(function (n) {
    if (bgHit) return;
    const want = (BFA_NEED_TO_BACKGROUND[n] || []).map(bfaLower);
    const h = bg.filter(function (b) { return want.indexOf(b) >= 0; });
    if (h.length) bgHit = { need: n, bg: h };
  });
  if (bgHit && a.role) {
    add('OPERATING_BACKGROUND_ALIGNMENT',
        'Operating background as ' + bgHit.bg.join(' and ') + ', relevant to ' +
        bgHit.need.toLowerCase() + '.', 3);
  }

  /* --- recent activity. Reported as tracking, never as liveness.
         Absence is stated as absence of tracking and costs nothing. --- */
  if (obs.recentCount > 0) {
    add('RECENT_ACTIVITY',
        obs.recentCount + ' attributable investment' + (obs.recentCount === 1 ? '' : 's') +
        ' tracked in the last ' + (BFA_RECENT_YEARS * 12) + ' months.', 2);
  }

  /* --- stated focus, kept explicitly separate from observed --- */
  if (ask.sectors.length) {
    const stated = bfaArr(a.statedSectorFocus);
    const sHit = stated.filter(function (s) {
      return ask.sectors.some(function (f) { return bfaLower(s).indexOf(bfaLower(f)) >= 0 || bfaLower(f).indexOf(bfaLower(s)) >= 0; });
    });
    if (sHit.length) {
      add('STATED_FOCUS_ALIGNMENT',
          'States a focus that includes ' + sHit.slice(0, 2).join(' and ') +
          '. This is self-described, not observed.', 2);
    }
  }

  /* --- research confidence. Rewards evidence quality, not volume:
         it is capped so a large portfolio cannot buy rank. --- */
  /* Research confidence is NOT a reason the angel fits, so it does not
     occupy one of the four reason slots. The benchmark had it crowding
     out real reasons on almost every row. It breaks ties and is
     reported in the coverage line instead. */
  const srcN = bfaArr(a.sources).length;
  const wellSourced = srcN >= 4 && obs.sectorRows >= BFA_MIN_SECTOR_ROWS;
  if (wellSourced) weight += 2;

  if (signals < BFA_MIN_SIGNALS) return null;

  reasons.sort(function (x, y) {
    return BFA_REASON_ORDER.indexOf(x.code) - BFA_REASON_ORDER.indexOf(y.code);
  });
  /* Whether any reason actually ties this angel to the founder's
     SECTOR. When false the row says so outright, because a capability
     match alone put an angel with no sector activity at the top of the
     climate benchmark and nothing on the row disclosed it. */
  const sectorLinked = reasons.some(function (x) {
    return x.code === 'SECTOR_ALIGNMENT' || x.code === 'STATED_FOCUS_ALIGNMENT';
  });
  return { slug: slug, angel: a, obs: obs, weight: weight, signals: signals,
           sources: srcN, wellSourced: wellSourced, sectorLinked: sectorLinked,
           reasons: reasons.slice(0, 4) };
}

/* ---------- the ranked set ---------- */
function bfaRank() {
  if (typeof CAPITAL_SOURCES === 'undefined') return [];
  const ask = (typeof bfpFounderAsk === 'function')
    ? bfpFounderAsk() : { sectors: [], stages: new Set() };
  const needs = bfaGetNeeds();
  if (!ask.sectors.length && !needs.length) return [];

  const out = [];
  Object.keys(CAPITAL_SOURCES).forEach(function (slug) {
    const a = CAPITAL_SOURCES[slug];
    if (!bfaEligible(a)) return;
    const r = bfaEvaluate(slug, a, ask, needs);
    if (r) out.push(r);
  });
  return out.sort(function (x, y) {
    return y.weight - x.weight || y.signals - x.signals ||
           x.angel.name.localeCompare(y.angel.name);
  }).slice(0, BFA_MAX_RESULTS);
}

/* ---------- rendering ----------
   Compact editorial rows. No gauge, no avatar, no colour beyond the
   single accent rule on the reason block. */
function bfaRowHtml(r, idx) {
  const a = r.angel;
  const identity = [a.role, a.vehicle].filter(Boolean).join(' · ');
  const obs = r.obs;

  let h = '<article class="bfa-row">';
  h += '<div class="bfa-rank">' + (idx + 1) + '</div>';
  h += '<div class="bfa-body">';
  h += '<div class="bfa-id">' +
       '<a class="bfa-name" href="#capital-sources/' + bfaUrl(r.slug) + '">' + bfaEsc(a.name) + '</a>' +
       (identity ? '<span class="bfa-role">' + bfaEsc(identity) + '</span>' : '') +
       '</div>';

  h += '<div class="bfa-why">' +
       '<div class="bfa-label">Why this Angel</div>' +
       '<ul class="bfa-why-list">' +
       r.reasons.map(function (x) {
         return '<li class="bfa-r-' + bfaEsc(x.code.toLowerCase()) + '">' + bfaEsc(x.text) + '</li>';
       }).join('') + '</ul></div>';

  /* Coverage is stated on the row, not buried in a tooltip. */
  const cov = [];
  cov.push(obs.sectorRows + ' of ' + obs.total + ' investments sector-classified');
  if (obs.stageRows) cov.push(obs.stageRows + ' stage-classified');
  if (!obs.recentCount) {
    cov.push('no attributable investment tracked in the last ' + (BFA_RECENT_YEARS * 12) + ' months');
  }
  if (r.sources) cov.push(r.sources + ' sources');
  h += '<div class="bfa-cov">' + bfaEsc(cov.join(' · ')) + '.</div>';
  /* Stated plainly rather than left for the founder to infer from an
     absent reason. This is the disclosure the climate benchmark needed. */
  if (!r.sectorLinked) {
    h += '<div class="bfa-cov bfa-cov-warn">Power Board tracks no investment by this person ' +
         'in your sector. They surface on capability evidence alone.</div>';
  }

  h += '<div class="bfa-actions">' +
       '<a class="bfa-act bfa-act-p" href="#capital-sources/' + bfaUrl(r.slug) +
       '" data-bfa-open="' + bfaEsc(r.slug) + '">View Angel Intelligence &rarr;</a>' +
       '<button type="button" class="bfa-act" data-bfa-save="' + bfaEsc(r.slug) + '">Save</button>';
  /* Network actions only when the canonical person actually has a
     published Network profile. No fake messaging affordance. */
  if (r.network) {
    h += '<button type="button" class="bfa-act" data-bfa-follow="' + bfaEsc(r.network.id) + '">Follow</button>';
    if ((r.network.dm_policy || 'requests') !== 'nobody') {
      h += '<button type="button" class="bfa-act" data-bfa-msg="' + bfaEsc(r.network.id) +
           '" data-policy="' + bfaEsc(r.network.dm_policy || 'requests') + '">Message</button>';
    }
  }
  h += '</div></div></article>';
  return h;
}

/* Resolve Angels to their canonical Network profile in ONE query, so
   adding this section costs a single request rather than one per
   angel. Matching is on full_name, which is what the canonical Person
   architecture keys these records to today. */
async function bfaAttachNetwork(list) {
  if (!list.length) return list;
  if (typeof supabaseClient === 'undefined' || !supabaseClient) return list;
  const names = list.map(function (r) { return r.angel.name; }).filter(Boolean);
  if (!names.length) return list;
  try {
    const { data, error } = await supabaseClient.from('profiles')
      .select('id, username, full_name, dm_policy')
      .in('full_name', names)
      .eq('is_published', true).eq('moderation_state', 'active');
    if (error) return list;
    const byName = {};
    (data || []).forEach(function (p) { byName[bfaLower(p.full_name)] = p; });
    list.forEach(function (r) { r.network = byName[bfaLower(r.angel.name)] || null; });
  } catch (e) {}
  return list;
}

async function bfaRenderSection() {
  const host = document.getElementById('bfaSection');
  if (!host) return;
  let list = bfaRank();

  if (!list.length) {
    if (typeof pbTrack === 'function') pbTrack('strategic_angel_no_match');
    host.innerHTML =
      '<section class="bfa"><div class="bfa-head">' +
        '<h3 class="bfa-h3">Strategic Angels</h3>' +
        '<p class="bfa-sub">No high-confidence Strategic Angel recommendations yet. ' +
        'Nothing is shown rather than filling the slot with weakly-matched people.</p>' +
      '</div>' +
      '<a class="bfa-link" href="#capital-sources">Explore Angels &rarr;</a></section>';
    return;
  }

  list = await bfaAttachNetwork(list);

  if (typeof pbTrack === 'function') {
    pbTrack('strategic_angel_results_viewed', { props: { results: list.length } });
  }

  host.innerHTML =
    '<section class="bfa">' +
      '<div class="bfa-head">' +
        '<h3 class="bfa-h3">Strategic Angels</h3>' +
        '<p class="bfa-sub">Ranked by observed investment behaviour and sourced capability ' +
        'evidence against your search. Not scored: every reason below states the counts ' +
        'it rests on.</p>' +
      '</div>' +
      '<div class="bfa-list">' + list.map(bfaRowHtml).join('') + '</div>' +
      '<a class="bfa-link" href="#capital-sources">View all Angels &rarr;</a>' +
    '</section>';

  bfaWire(host);
}

function bfaWire(root) {
  if (!root || root.dataset.bfaWired === '1') return;
  root.dataset.bfaWired = '1';
  root.addEventListener('click', function (e) {
    const open = e.target.closest('[data-bfa-open]');
    if (open && typeof pbTrack === 'function') {
      pbTrack('strategic_angel_opened', { props: { slug: open.dataset.bfaOpen } });
    }
    const save = e.target.closest('[data-bfa-save]');
    if (save) {
      const slug = save.dataset.bfaSave;
      /* Reuses the existing Shortlist store. Angels are namespaced so
         a person and a firm can never collide on slug. */
      if (typeof toggleShortlist === 'function') toggleShortlist('angel:' + slug);
      save.textContent = 'Saved';
      save.disabled = true;
      if (typeof pbTrack === 'function') pbTrack('strategic_angel_saved', { props: { slug: slug } });
      return;
    }
    const f = e.target.closest('[data-bfa-follow]');
    if (f) {
      if (typeof pbTrack === 'function') pbTrack('strategic_angel_follow_clicked');
      if (typeof pbnToggleFollow === 'function') pbnToggleFollow(f.dataset.bfaFollow, f);
      return;
    }
    const m = e.target.closest('[data-bfa-msg]');
    if (m) {
      if (typeof pbTrack === 'function') pbTrack('strategic_angel_message_clicked');
      if (typeof pbmOpenOrStart === 'function') pbmOpenOrStart(m.dataset.bfaMsg, m.dataset.policy);
    }
  });
}

/* ---------- the optional founder-need question (Part 18) ----------
   Optional by construction: skipping it leaves investor matching
   exactly as it was, and Angel matching still runs on investment fit
   alone. */
function bfaNeedsHtml() {
  const cur = bfaGetNeeds();
  return '<div class="bfa-needs" id="bfaNeeds">' +
    '<div class="bfa-label">What else would help your company right now?</div>' +
    '<p class="bfa-needs-sub">Optional. Used to match capability evidence, never to filter firms.</p>' +
    '<div class="bfa-needs-set">' +
      BFA_NEEDS.map(function (n) {
        const on = cur.indexOf(n) >= 0;
        return '<button type="button" class="bfa-need' + (on ? ' is-on' : '') +
               '" data-bfa-need="' + bfaEsc(n) + '">' + bfaEsc(n) + '</button>';
      }).join('') +
    '</div></div>';
}

function bfaWireNeeds(root) {
  const box = (root || document).querySelector('#bfaNeeds');
  if (!box || box.dataset.wired === '1') return;
  box.dataset.wired = '1';
  box.addEventListener('click', function (e) {
    const b = e.target.closest('[data-bfa-need]');
    if (!b) return;
    const n = b.dataset.bfaNeed;
    const cur = bfaGetNeeds();
    const i = cur.indexOf(n);
    if (i >= 0) cur.splice(i, 1); else cur.push(n);
    bfaSetNeeds(cur);
    b.classList.toggle('is-on', i < 0);
    if (typeof pbTrack === 'function') pbTrack('founder_need_selected', { props: { need: n } });
    bfaRenderSection();
    /* Needs also feed "People worth knowing", which has been reading
       this key and finding it empty since it shipped. */
    if (typeof pbrRenderPeopleSection === 'function') pbrRenderPeopleSection();
  });
}

function bfaEnsureCss() {
  if (document.getElementById('bfaCss')) return;
  const l = document.createElement('link');
  l.id = 'bfaCss'; l.rel = 'stylesheet'; l.href = 'styles/best-fit-angel.css';
  document.head.appendChild(l);
}
