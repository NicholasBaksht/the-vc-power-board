/**
 * HISTORICAL-SNAPSHOT.JS
 * "What did this firm look like in [year]?" - pick any firm and a
 * year, see which partners had joined by then and which real, dated
 * milestones had happened by then. Deliberately does NOT attempt
 * historical sectors, holdings, or AUM, since none of that is
 * actually tracked over time anywhere in this site's data - see
 * conversation notes on why faking those would be dishonest.
 */

let snapshotFirmSlug = null;
let snapshotYear = null;

function renderHistoricalSnapshot(deepLinkFirmSlug) {
  if (deepLinkFirmSlug && firms.some(f => f.slug === deepLinkFirmSlug)) {
    snapshotFirmSlug = deepLinkFirmSlug;
    snapshotMode = 'timeline';
    snapshotActiveTypes = new Set();
    snapshotActivePartner = '';
    snapshotYearMin = null;
    snapshotYearMax = null;
  }
  if (!snapshotFirmSlug) snapshotFirmSlug = firms[0].slug;
  // Default to the featured firm (or the first firm) and the
  // current year, so the page shows something meaningful on first
  // load rather than an empty state.
  if (!snapshotFirmSlug) snapshotFirmSlug = firms[0].slug;
  if (!snapshotYear) snapshotYear = new Date().getFullYear();

  const firmOptionsHTML = firms
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(f => `<option value="${f.slug}" ${f.slug === snapshotFirmSlug ? 'selected' : ''}>${f.name}</option>`)
    .join('');

  document.getElementById('historicalSnapshotView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">Historical Snapshot</div>
    <div class="reports-intro">
      <p>Pick a firm and a year to see what's actually known about it at that point in time — which partners had joined so far, and which real, dated milestones had happened. This can't show historical sector focus, past portfolio holdings, or past AUM, since none of that is tracked over time anywhere on this site — only current figures for those exist, so showing them here for a past year would be guessing, not reporting.</p>
    </div>

    <div class="snapshot-controls">
      <div class="snapshot-control-group">
        <label class="snapshot-label" for="snapshotFirmSelect">Firm</label>
        <select id="snapshotFirmSelect" class="snapshot-select">${firmOptionsHTML}</select>
      </div>
      <div class="snapshot-control-group">
        <label class="snapshot-label" for="snapshotYearSlider">Year: <span id="snapshotYearValue">${snapshotYear}</span></label>
        <input type="range" id="snapshotYearSlider" class="snapshot-slider" min="1960" max="${new Date().getFullYear()}" value="${snapshotYear}">
      </div>
    </div>

    <div id="snapshotResults"></div>
  `;

  document.getElementById('snapshotFirmSelect').addEventListener('change', (e) => {
    snapshotFirmSlug = e.target.value;
    renderSnapshotResults();
  });
  document.getElementById('snapshotYearSlider').addEventListener('input', (e) => {
    snapshotYear = parseInt(e.target.value, 10);
    document.getElementById('snapshotYearValue').textContent = snapshotYear;
    renderSnapshotResults();
  });

  renderSnapshotResults();
}

function renderSnapshotResults() {
  const firm = firms.find(f => f.slug === snapshotFirmSlug);
  const container = document.getElementById('snapshotResults');
  if (!firm) return;

  if (snapshotYear < firm.founded) {
    container.innerHTML = `
      <div class="snapshot-empty">${firm.name} didn't exist yet in ${snapshotYear} — it was founded in ${firm.founded}.</div>
    `;
    return;
  }

  // Partners who had joined by this year - real joinedYear data, with
  // an honest caveat since departure dates aren't systematically
  // tracked, so this can overstate who was still there by year Y.
  const partnersByThen = Object.entries(partnerProfiles)
    .filter(([slug, p]) => p.firmSlug === firm.slug && p.joinedYear <= snapshotYear)
    .map(([slug, p]) => ({ slug, ...p }))
    .sort((a, b) => a.joinedYear - b.joinedYear);

  // Real, dated firm milestones up to this year.
  const milestonesByThen = (firm.timeline || [])
    .filter(t => parseInt(t.year, 10) <= snapshotYear)
    .sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));

  const partnersHTML = partnersByThen.length > 0
    ? partnersByThen.map(p => `
        <a href="#partner/${p.slug}" class="snapshot-partner-row">
          <span class="snapshot-partner-name">${p.name}</span>
          <span class="snapshot-partner-year">Joined ${p.joinedYear}</span>
        </a>
      `).join('')
    : `<div class="snapshot-empty-small">No partners on file who'd joined by this year.</div>`;

  const milestonesHTML = milestonesByThen.length > 0
    ? milestonesByThen.map(t => `
        <div class="snapshot-milestone-row">
          <span class="snapshot-milestone-year">${t.year}</span>
          <span class="snapshot-milestone-event">${t.event}</span>
        </div>
      `).join('')
    : `<div class="snapshot-empty-small">No dated milestones on file up to this year.</div>`;

  container.innerHTML = `
    <div class="snapshot-header">
      <a href="#${firm.slug}" class="snapshot-firm-name">${firm.name}</a>
      <span class="snapshot-firm-meta">as of ${snapshotYear} · founded ${firm.founded}</span>
    </div>

    <div class="snapshot-columns">
      <div class="snapshot-column">
        <div class="pg-side-label" style="margin-top: 0;">Partners Joined By ${snapshotYear} (${partnersByThen.length})</div>
        <div class="snapshot-caveat">Based on real join dates only — this can't account for partners who may have left before ${snapshotYear}, since departure dates aren't systematically tracked.</div>
        <div class="snapshot-list">${partnersHTML}</div>
      </div>
      <div class="snapshot-column">
        <div class="pg-side-label" style="margin-top: 0;">Milestones Through ${snapshotYear} (${milestonesByThen.length})</div>
        <div class="snapshot-list">${milestonesHTML}</div>
      </div>
    </div>
  `;
}
