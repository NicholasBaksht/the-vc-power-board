/* ============================================================
   FILTERS.JS
   Founding Era / Sector / Investment Stage / Fund Size filtering:
   the active-filter state, every matchesX() predicate renderFirms()
   uses to decide what's visible, the sector chip builder, and the
   stage/sector/AUM chip click listeners.
   ============================================================ */
let activeFilter = 'all';

let activeSectors = new Set();

 // empty = no sector filter applied
let activeStages = new Set();

 // empty = no stage filter applied
let activeAumTier = 'all';

function matchesAumTier(firm) {
  const num = parseAumNumber(firm.aum);
  if (activeAumTier === 'mega') return num >= 50;
  if (activeAumTier === 'large') return num >= 20 && num < 50;
  if (activeAumTier === 'midsize') return num >= 10 && num < 20;
  if (activeAumTier === 'below10') return num >= 5 && num < 10;
  if (activeAumTier === 'below5') return num >= 0.5 && num < 5;
  if (activeAumTier === 'range200to500') return num >= 0.2 && num < 0.5;
  if (activeAumTier === 'range100to200') return num >= 0.1 && num < 0.2;
  if (activeAumTier === 'under100') return num < 0.1;
  return true; // 'all'
}

function matchesSectorFilter(firm) {
  if (activeSectors.size === 0) return true; // no sectors selected = show all
  // activeSectors holds SECTOR_MAP bucket keys (plus the synthetic
  // '__generalist'), not raw tags - so a firm matches if any of its
  // own raw sector strings falls inside any selected bucket.
  return firm.sectors.some(s =>
    [...activeSectors].some(k =>
      k === '__generalist'
        ? UNMAPPED_DESCRIPTOR_TAGS.has(s)
        : (SECTOR_MAP[k] && SECTOR_MAP[k].rawTags.indexOf(s) !== -1)
    )
  );
}

// Investment Stage cards - multi-select, OR within the group (e.g.
// Seed + Series A shows firms that invest in either), AND with
// every other active filter, same pattern as the sector chips.
function matchesStageFilter(firm) {
  if (activeStages.size === 0) return true; // no stages selected = show all
  const stages = firmStages[firm.slug] || [];
  return stages.some(s => activeStages.has(s));
}

function matchesFilter(firm) {
  const eraMatch =
    activeFilter === 'pre2000' ? firm.founded < 2000 :
    activeFilter === '2000s' ? (firm.founded >= 2000 && firm.founded < 2010) :
    activeFilter === '2010s' ? firm.founded >= 2010 :
    true; // 'all'
  return eraMatch && matchesAumTier(firm) && matchesSectorFilter(firm) && matchesStageFilter(firm);
}

// Builds the sector filter chips from taxonomy.js rather than from
// the raw tags. The raw `sectors` strings in data-firms.js are each
// firm's own wording and are never rewritten - but there are 126 of
// them, many near-duplicates ("AI", "AI/ML", "Applied AI"), which is
// a wall of chips rather than a usable filter. One chip per canonical
// SECTOR_MAP bucket, plus a synthetic "Generalist" chip built from
// UNMAPPED_DESCRIPTOR_TAGS so sector-agnostic firms stay reachable.
// Buckets with no firms are not rendered at all.
function renderSectorFilterChips() {
  const el = document.getElementById('sectorFilterChips');
  if (!el) return;
  const counts = {};
  const bump = (key, slug) => {
    if (!counts[key]) counts[key] = new Set();
    counts[key].add(slug);
  };
  firms.forEach(f => (f.sectors || []).forEach(s => {
    Object.keys(SECTOR_MAP).forEach(k => {
      if (SECTOR_MAP[k].rawTags.indexOf(s) !== -1) bump(k, f.slug);
    });
    if (UNMAPPED_DESCRIPTOR_TAGS.has(s)) bump('__generalist', f.slug);
  }));
  const keys = Object.keys(counts).sort((a, b) => counts[b].size - counts[a].size);
  el.innerHTML = keys.map(k => {
    const label = k === '__generalist' ? 'Generalist' : SECTOR_MAP[k].label;
    return `<button class="chip" data-sector="${k}">${label}</button>`;
  }).join('');
}

// Filter chips - clicking one sets the active era filter
// (scoped to this group only, so it doesn't affect sector/AUM chips)
// Investment Stage cards - multi-select, toggle any number on/off.
// Uses closest() since clicks may land on the icon or label inside
// the card, not just the card element itself.
document.getElementById('stageCardGrid').addEventListener('click', (e) => {
  const card = e.target.closest('.stage-card');
  if (!card) return;
  const stage = card.dataset.stage;
  if (activeStages.has(stage)) {
    activeStages.delete(stage);
    card.classList.remove('active');
  } else {
    activeStages.add(stage);
    card.classList.add('active');
  }
  renderFirms();
});

// Sector chips - multi-select, toggle any number on/off
document.getElementById('sectorFilterChips').addEventListener('click', (e) => {
  if (!e.target.classList.contains('chip')) return;
  const sector = e.target.dataset.sector;
  if (activeSectors.has(sector)) {
    activeSectors.delete(sector);
    e.target.classList.remove('active');
  } else {
    activeSectors.add(sector);
    e.target.classList.add('active');
  }
  renderFirms();
});

// AUM tier chips - single-select, like the era filter
document.getElementById('aumFilterChips').addEventListener('click', (e) => {
  if (!e.target.classList.contains('chip')) return;
  document.querySelectorAll('#aumFilterChips .chip').forEach(c => c.classList.remove('active'));
  e.target.classList.add('active');
  activeAumTier = e.target.dataset.aum;
  renderFirms();
});

// Founding Era chips - single-select, same pattern as the AUM
// tier chips above.
document.getElementById('filterChips').addEventListener('click', (e) => {
  if (!e.target.classList.contains('chip')) return;
  document.querySelectorAll('#filterChips .chip').forEach(c => c.classList.remove('active'));
  e.target.classList.add('active');
  activeFilter = e.target.dataset.filter;
  renderFirms();
});
