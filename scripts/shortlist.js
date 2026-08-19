/* ============================================================
   SHORTLIST.JS
   The Shortlist Builder feature end to end: localStorage read/
   write helpers, per-firm CRM details (status/priority/notes),
   the add/remove toggle, CSV export, the shortlist page renderer,
   and the shortlist-button click listener (event delegation).
   ============================================================ */
 // slugs of firms picked for comparison, max 3

// ============================================================
// SAVED SHORTLIST - lets founders save firms they're interested
// in, persisted in the browser's local storage so it survives
// page reloads. Nothing is sent anywhere; it only ever lives on
// this device. Wrapped in try/catch since some browsers (private
// browsing, strict privacy settings) can block localStorage.
// ============================================================
const SHORTLIST_KEY = 'powerboard_shortlist';

const SHORTLIST_FREE_LIMIT = 3;

 // Free plan cap - see Pricing page

function getShortlist() {
  try {
    const raw = localStorage.getItem(SHORTLIST_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch (e) {
    return new Set();
  }
}

function saveShortlistToStorage(set) {
  try {
    localStorage.setItem(SHORTLIST_KEY, JSON.stringify([...set]));
  } catch (e) {
    // localStorage unavailable - fail quietly, shortlist just won't persist
  }
}

// ============================================================
// SHORTLIST DETAILS - extends the existing star/save toggle above
// with the real per-firm CRM fields a founder tracks while
// fundraising: notes, priority, and outreach status. Stored under
// a separate localStorage key so the original getShortlist()/
// toggleShortlist() behavior (used by the simple  Saved button on
// every firm page) is never touched or put at risk - this is pure
// addition, not a rework of working code.
// ============================================================
const SHORTLIST_DETAILS_KEY = 'powerboard_shortlist_details';

/* Superseded by the six-stage ladder in outcomes.js, which is shared with
   Power Match and synced to the account when signed in. Kept as a fallback
   only for the case where outcomes.js has not loaded, so this file never
   renders an empty chip row. The legacy labels are migrated on read - see
   IO_LEGACY_MAP - so an existing pipeline is not reset. */
const SHORTLIST_STATUSES = ['Not Contacted', 'Warm Intro', 'Meeting Scheduled', 'Passed'];
function slStatusList() {
  return (typeof IO_STATUSES !== 'undefined')
    ? IO_STATUSES.map(function (x) { return { key: x.key, label: x.label }; })
    : SHORTLIST_STATUSES.map(function (x) { return { key: x, label: x }; });
}
function slCurrentStatus(slug) {
  return (typeof getOutcome === 'function')
    ? getOutcome(slug)
    : (getShortlistEntry(slug) || {}).status;
}

const SHORTLIST_PRIORITIES = ['High', 'Medium', 'Low'];

function getShortlistDetails() {
  try {
    const raw = localStorage.getItem(SHORTLIST_DETAILS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveShortlistDetails(details) {
  try {
    localStorage.setItem(SHORTLIST_DETAILS_KEY, JSON.stringify(details));
  } catch (e) {
    // localStorage unavailable - fail quietly, same as the shortlist itself
  }
}

function getShortlistEntry(slug) {
  const details = getShortlistDetails();
  return details[slug] || { notes: '', priority: 'Medium', status: 'Not Contacted', addedAt: null };
}

function updateShortlistEntry(slug, updates) {
  const details = getShortlistDetails();
  details[slug] = Object.assign({}, getShortlistEntry(slug), updates);
  saveShortlistDetails(details);
}

// Toggles a firm in/out of the shortlist, enforcing the free-tier
// limit. Removing a firm always works, regardless of the limit.
// Adding a new firm past the limit is blocked, and the caller is
// told via limitReached so it can show an upgrade prompt.
function toggleShortlist(slug) {
  const current = getShortlist();
  if (current.has(slug)) {
    current.delete(slug);
    saveShortlistToStorage(current);
    const details = getShortlistDetails();
    delete details[slug];
    saveShortlistDetails(details);
    return { shortlist: current, limitReached: false };
  }
  if (current.size >= SHORTLIST_FREE_LIMIT) {
    return { shortlist: current, limitReached: true };
  }
  current.add(slug);
  saveShortlistToStorage(current);
  updateShortlistEntry(slug, { addedAt: new Date().toISOString() });
  return { shortlist: current, limitReached: false };
}

// ============================================================
// SHORTLIST BUILDER - a lightweight fundraising CRM built on top
// of the existing  Saved shortlist. "Average Check" is the mean
// of each firm's real stage-derived check midpoint (see
// getTypicalCheckMidpointM above) - an estimate, labeled as such,
// never a reported figure. "Average Match" only appears if the
// founder has actually answered Find Investors questions; with no
// real signal, showing a number would be misleading, so it's
// omitted with an honest explanation instead.
// ============================================================
function renderShortlistBuilder() {
  const shortlistSlugs = [...getShortlist()];
  const shortlistFirms = shortlistSlugs.map(slug => firms.find(f => f.slug === slug)).filter(Boolean);

  const hasFinderSignal = finderSectors.size > 0 || finderRaise !== 'any' || finderStages.size > 0 ||
    finderRegion !== 'any' || finderFocus !== 'any' || finderAI;

  let avgMatchHTML = 'Not calculated';
  if (hasFinderSignal && shortlistFirms.length > 0) {
    const matches = computeFinderMatches();
    const relevant = matches.filter(m => shortlistSlugs.includes(m.firm.slug));
    const avg = relevant.reduce((sum, m) => sum + m.score, 0) / relevant.length;
    avgMatchHTML = Math.round(avg) + '%';
  }

  let avgCheckHTML = 'N/A';
  const checkMidpoints = shortlistFirms.map(f => getTypicalCheckMidpointM(f)).filter(m => m !== null);
  if (checkMidpoints.length > 0) {
    avgCheckHTML = formatCheckM(checkMidpoints.reduce((a, b) => a + b, 0) / checkMidpoints.length);
  }

  // Header label reflects the founder's own real raise-stage
  // selection from Find Investors, if set - never invented.
  let headerLabel = 'Your Investor Shortlist';
  if (finderStages.size > 0) headerLabel = `${[...finderStages].join('/')} Raise`;
  else if (finderRaise !== 'any') {
    const bucket = RAISE_BUCKET_ORDER.find(b => b.key === finderRaise);
    if (bucket) headerLabel = `${bucket.label} Raise`;
  }

  const cardsHTML = shortlistFirms.map(firm => {
    const entry = getShortlistEntry(firm.slug);
    let matchBadge = '';
    if (hasFinderSignal) {
      const match = computeFinderMatches().find(m => m.firm.slug === firm.slug);
      if (match) matchBadge = `<div class="sl-card-match">${match.score}% match</div>`;
    }
    return `
      <div class="sl-card" data-slug="${firm.slug}">
        <div class="sl-card-header">
          <div>
            <div class="sl-card-name"><a href="#${firm.slug}">${firm.name}</a></div>
            <div class="sl-card-meta">${firm.aum} · Typical check: ${getTypicalCheckRange(firm)}</div>
          </div>
          ${matchBadge}
          <button class="sl-remove-btn" data-remove="${firm.slug}" title="Remove from shortlist"></button>
        </div>

        <div class="sl-field-row">
          <div class="sl-field-label">Priority</div>
          <div class="sl-chip-row" data-priority-row="${firm.slug}">
            ${SHORTLIST_PRIORITIES.map(p => `<button class="sl-chip sl-priority-${p.toLowerCase()} ${entry.priority === p ? 'active' : ''}" data-set-priority="${firm.slug}" data-value="${p}">${p}</button>`).join('')}
          </div>
        </div>

        <div class="sl-field-row">
          <div class="sl-field-label">Status</div>
          <div class="sl-chip-row" data-status-row="${firm.slug}">
            ${slStatusList().map(s => `<button class="sl-chip ${slCurrentStatus(firm.slug) === s.key ? 'active' : ''}" data-set-status="${firm.slug}" data-value="${s.key}">${s.label}</button>`).join('')}
          </div>
        </div>

        <div class="sl-field-row">
          <div class="sl-field-label">Notes</div>
          <textarea class="sl-notes" data-notes="${firm.slug}" placeholder="Add notes - who you talked to, next steps, anything worth remembering...">${entry.notes}</textarea>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('shortlistView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">${headerLabel}</div>

    ${shortlistFirms.length === 0 ? `
      <p class="sl-empty-state">Your shortlist is empty. Star firms from any firm page (or your Fundraising Report) to start building your pipeline.</p>
    ` : `
      <div class="sl-stats-bar">
        <div class="sl-stat"><div class="sl-stat-value">${shortlistFirms.length}</div><div class="sl-stat-label">Investors</div></div>
        <div class="sl-stat"><div class="sl-stat-value">${avgCheckHTML}</div><div class="sl-stat-label">Average Check (est.)</div></div>
        <div class="sl-stat"><div class="sl-stat-value">${avgMatchHTML}</div><div class="sl-stat-label">Average Match</div></div>
        <div class="sl-export-buttons">
          <button class="sl-export-btn" id="exportCsvBtn">Export CSV</button>
          <button class="sl-export-btn" id="exportPdfBtn">Export PDF</button>
        </div>
      </div>
      <div class="sl-limit-note">${SHORTLIST_FREE_LIMIT} firms max on the free plan - see Pricing to upgrade.</div>
      <div class="sl-cards-list">${cardsHTML}</div>
    `}
  `;

  document.querySelector('#shortlistView .detail-back').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '';
  });

  document.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleShortlist(btn.dataset.remove);
      renderShortlistBuilder();
    });
  });

  document.querySelectorAll('[data-set-priority]').forEach(btn => {
    btn.addEventListener('click', () => {
      updateShortlistEntry(btn.dataset.setPriority, { priority: btn.dataset.value });
      renderShortlistBuilder();
    });
  });

  document.querySelectorAll('[data-set-status]').forEach(btn => {
    btn.addEventListener('click', () => {
      /* Route through setOutcome so the change reaches the account when
         signed in. It writes localStorage first either way, so the
         signed-out behaviour is exactly what it was before. */
      if (typeof setOutcome === 'function') {
        setOutcome(btn.dataset.setStatus, btn.dataset.value, 'shortlist').then(renderShortlistBuilder);
      } else {
        updateShortlistEntry(btn.dataset.setStatus, { status: btn.dataset.value });
        renderShortlistBuilder();
      }
    });
  });

  // Notes save on blur, not on every keystroke, so the whole page
  // isn't re-rendered mid-typing (which would kick focus out of
  // the textarea, same reasoning as the People/Portfolio search
  // inputs elsewhere on this site).
  document.querySelectorAll('[data-notes]').forEach(el => {
    el.addEventListener('blur', () => {
      updateShortlistEntry(el.dataset.notes, { notes: el.value });
    });
  });

  const csvBtn = document.getElementById('exportCsvBtn');
  if (csvBtn) csvBtn.addEventListener('click', exportShortlistCSV);
  const pdfBtn = document.getElementById('exportPdfBtn');
  if (pdfBtn) pdfBtn.addEventListener('click', () => window.print());
}

// Exports the shortlist as a real CSV file using native browser
// APIs (Blob + a temporary download link) - no external library,
// no server. "Export PDF" uses the browser's own print-to-PDF via
// window.print() with dedicated print CSS, since this static site
// has no PDF-generation library loaded; that's a real, working
// export path, just not a custom-built PDF renderer.
function exportShortlistCSV() {
  const shortlistSlugs = [...getShortlist()];
  const rows = [['Firm', 'Fund Size', 'Typical Check Range', 'Priority', 'Status', 'Notes', 'Match Score']];
  const hasFinderSignal = finderSectors.size > 0 || finderRaise !== 'any' || finderStages.size > 0 ||
    finderRegion !== 'any' || finderFocus !== 'any' || finderAI;
  const matches = hasFinderSignal ? computeFinderMatches() : [];

  shortlistSlugs.forEach(slug => {
    const firm = firms.find(f => f.slug === slug);
    if (!firm) return;
    const entry = getShortlistEntry(slug);
    const match = matches.find(m => m.firm.slug === slug);
    rows.push([
      firm.name,
      firm.aum,
      getTypicalCheckRange(firm),
      entry.priority,
      entry.status,
      entry.notes || '',
      match ? match.score + '%' : 'N/A'
    ]);
  });

  const csv = rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'investor-shortlist.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Shortlist button - toggles a firm in/out of local storage, and
// updates just that one button in place rather than a full re-render
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('shortlist-btn')) return;
  const slug = e.target.dataset.slug;
  const result = toggleShortlist(slug);
  if (result.limitReached) {
    alert(`Free plan limit reached (${SHORTLIST_FREE_LIMIT}/${SHORTLIST_FREE_LIMIT} saved firms). Upgrade to Pro for unlimited saves - see Pricing in the nav bar.`);
    return;
  }
  const isSaved = result.shortlist.has(slug);
  e.target.classList.toggle('saved', isSaved);
  e.target.textContent = isSaved ? ' Saved' : ' Save';
});
