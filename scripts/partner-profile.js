/* ============================================================
   PARTNER-PROFILE.JS
   Renders an individual partner's bio page as a three-column
   layout: sidebar stats/focus/education, a center career
   timeline, and a right-hand panel of investments and board
   seats.

   DEFENSIVE ON PURPOSE. The 435 partner profiles were assembled
   from several research passes with slightly different shapes,
   so not every field is present on every partner:

     notableInvestments  absent on 196
     investmentFocus     absent on 196 (45 of those carry `sectors`
                         instead, which is the same idea under an
                         older key - so we fall back to it)
     joinedYear          null on 42
     ipoCount            null on 194
     majorExits          null on 195

   Reading .map() or .length off any of those threw and blanked
   the whole page. Every access below is guarded, and a missing
   value renders an honest em-dash rather than "null" or a
   nonsense figure like "2026 years at firm".
   ============================================================ */
/* ============================================================
   PARTNER PORTRAIT
   ------------------------------------------------------------
   A photograph of a named person is a copyrighted work owned by
   whoever took it, and the rest of this dataset is facts, which are
   not copyrightable. That difference is why every other field here
   can be published from a public source and a headshot cannot.

   So a photo renders ONLY when an explicit licence is on record for
   it. PARTNER_PHOTOS is optional and starts empty; add an entry when
   a firm's press kit grants editorial use, or when a portrait exists
   under a Creative Commons licence:

     PARTNER_PHOTOS['jane-smith'] = {
       file:    'assets/partners/jane-smith.jpg',
       credit:  'Acme Capital',
       licence: 'Press kit, editorial use',
       source:  'https://acme.vc/press'
     };

   Everyone without such an entry gets a monogram. That is not a
   placeholder for a missing photo, it is the correct rendering for
   a person whose likeness we have no right to publish, and it keeps
   all 914 profiles visually consistent rather than leaving 900 holes.
   ============================================================ */

/* Deterministic, so the same person always gets the same tile and the
   page does not shimmer between visits.

   An earlier version hashed the name into a free hue. Rendered as a
   wall it produced olive, brown and purple tiles: an identicon chart,
   not a product. This site is monochrome plus one accent, so the tile
   varies only in weight, across four steps of the same neutral. Two
   partners side by side still look distinct; 914 of them still look
   like one site, in either theme. */
function pgMonogramStep(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 4;
  return h + 1;
}

/* Names carry apostrophes (O'Sullivan, d'Halluin) and the photo fields
   below are typed in by hand, so both go through here before they reach
   an attribute. */
function pgAttr(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/"/g, '&quot;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function pgInitials(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/* A profile that shows a departed partner as current is a factual error on
   a site whose whole claim is accuracy. The data has carried departedNote
   and departedYear for a while, but nothing rendered them, so the page kept
   presenting people who had left as sitting partners. This is that fix.

   The note states what was checked and when, so a reader can verify it
   rather than take it on trust, which is the same standard the rest of the
   profile is held to. */
function pgDepartedHtml(p) {
  if (!p) return '';
  var note = p.departedNote;
  var year = (p.departedYear == null) ? null : p.departedYear;
  if (!note && year == null) return '';
  return '<div class="pg-departed">' +
    '<span class="pg-departed-label">Not a current listing' +
      (year == null ? '' : ' &middot; ' + pgAttr(year)) +
    '</span>' +
    (note ? '<p class="pg-departed-note">' + pgAttr(note) + '</p>' : '') +
  '</div>';
}

function pgPortrait(slug, p) {
  const photos = (typeof PARTNER_PHOTOS !== 'undefined' && PARTNER_PHOTOS) ? PARTNER_PHOTOS : null;
  const rec = photos ? photos[slug] : null;

  if (rec && rec.file && rec.licence) {
    /* The credit line is not decoration. It is the record of why this
       image may be shown at all, and it sits with the image. */
    /* The square is a separate element from the figure. An earlier version
       put the caption inside the 108px box, which clips its overflow, so
       the credit rendered nowhere at all. These licences require
       attribution, so a clipped credit is not a cosmetic bug. */
    return '<figure class="pg-figure">' +
      '<div class="pg-portrait">' +
        '<img src="' + pgAttr(rec.file) + '" alt="' + pgAttr(p.name) + '" loading="lazy" decoding="async">' +
      '</div>' +
      '<figcaption class="pg-portrait-credit">' +
        (rec.source
          ? '<a href="' + pgAttr(rec.source) + '" target="_blank" rel="noopener noreferrer">' + pgAttr(rec.credit) + '</a>'
          : pgAttr(rec.credit)) +
        ' &middot; ' + pgAttr(rec.licence) +
      '</figcaption>' +
    '</figure>';
  }

  const step = pgMonogramStep(slug || p.name || '');
  return '<div class="pg-portrait pg-portrait-mono pg-mono-' + step + '" aria-hidden="true">' +
         '<span>' + pgAttr(pgInitials(p.name)) + '</span>' +
         '</div>';
}

function renderPartnerProfile(slug) {
  const p = partnerProfiles[slug];
  if (!p) return;

  // ---- guarded accessors ----
  const arr = (v) => (Array.isArray(v) ? v : []);
  const num = (v) => (typeof v === 'number' && isFinite(v) ? v : null);
  const show = (v) => (v === null || v === undefined || v === '' ? '-' : v);

  const investments = arr(p.notableInvestments);
  const boardSeats  = arr(p.boardSeats);
  const experience  = arr(p.previousExperience);
  const education   = arr(p.education);
  // `sectors` is the older key for the same concept; prefer the new one.
  const focus       = arr(p.investmentFocus).length ? arr(p.investmentFocus) : arr(p.sectors);
  const timeline    = arr(p.careerTimeline);
  const sources     = arr(p.sources);

  const joined      = num(p.joinedYear);
  const departed    = num(p.departedYear);
  const hasLeft     = departed !== null || !!p.departedNote;
  /* Tenure must stop when the person did. Counting to today produced
     "31 Years at Firm" directly under a banner saying they are no longer
     at that firm. Where the leaving year is known the tenure is measured
     to it; where the departure is recorded but undated, the honest output
     is no number at all rather than one that keeps growing. */
  const yearsAtFirm = joined === null ? null
    : (departed !== null ? departed - joined
    : (hasLeft ? null : new Date().getFullYear() - joined));

  const investmentsHTML = investments.map(inv => `
    <div class="pg-investment-row">
      <span>${inv && inv.name ? inv.name : '&mdash;'}</span>
      ${inv && inv.ticker ? `<span class="ticker-tag">${inv.ticker}</span>` : ''}
    </div>
  `).join('');

  const boardHTML = boardSeats.length > 0
    ? boardSeats.map(b => `<div class="pg-board-row">${b}</div>`).join('')
    : `<div class="pg-empty">No board seats on file.</div>`;

  const experienceHTML = experience.map(e => `<li>${e}</li>`).join('');
  const educationHTML  = education.map(e => `<li>${e}</li>`).join('');
  const focusHTML      = focus.map(f => `<span class="partner-tag">${f}</span>`).join('');

  // A timeline entry can carry a null year - the event is known but
  // the date isn't. Print the event without a year rather than the
  // word "null" next to it.
  const timelineHTML = timeline.map(t => `
    <div class="timeline-item">
      <div class="timeline-year">${t && t.year != null ? t.year : '&mdash;'}</div>
      <div class="timeline-event">${t && t.event ? t.event : ''}</div>
    </div>
  `).join('');

  const sourcesHTML = sources
    .filter(s => s && s.url)
    .map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label || s.url} ↗</a>`)
    .join('');

  // Career Path Summary: a real, honest sequence built from actual
  // previousExperience entries plus the partner's current role -
  // not invented, just the same data already shown above,
  // presented as a compact path rather than a bulleted list.
  // The join year is only appended when we actually know it.
  const currentRole = joined === null
    ? `${p.title}, ${p.firm}`
    : `${p.title}, ${p.firm} (${joined})`;
  const pathSteps = experience.concat([currentRole]);
  const pathHTML = pathSteps.map((step, i) => `
    ${i > 0 ? '<div class="pg-path-arrow">↓</div>' : ''}
    <div class="pg-path-step ${i === pathSteps.length - 1 ? 'pg-path-current' : ''}">${step}</div>
  `).join('');

  // "Joined 2009" is dropped entirely rather than printed as
  // "Joined null" for the 42 partners whose start year is unknown.
  const roleLine = joined === null
    ? `${p.title} · <a href="#${p.firmSlug}">${p.firm}</a>`
    : `${p.title} · <a href="#${p.firmSlug}">${p.firm}</a> · Joined ${joined}`;

  document.getElementById('partnerView').innerHTML = `
    <a href="#${p.firmSlug}" class="detail-back">← Back to ${p.firm}</a>

    <div class="pg-header">
      <div class="partner-title" style="margin: 0;">${p.name}</div>
      <div class="partner-role-line" style="margin-bottom: 0;">${roleLine}</div>
      ${pgDepartedHtml(p)}
    </div>

    <div class="pg-layout">
      <div class="pg-sidebar-left">
        ${pgPortrait(slug, p)}
        <div class="pg-stats-grid">
          <div class="pg-stat"><span class="pg-stat-num">${show(yearsAtFirm)}</span><span class="pg-stat-label">${hasLeft ? 'Years at Firm (tenure)' : 'Years at Firm'}</span></div>
          <div class="pg-stat"><span class="pg-stat-num">${show(num(p.ipoCount))}</span><span class="pg-stat-label">IPOs</span></div>
          <div class="pg-stat"><span class="pg-stat-num">${show(num(p.majorExits))}</span><span class="pg-stat-label">Major Exits</span></div>
          <div class="pg-stat"><span class="pg-stat-num">${boardSeats.length}</span><span class="pg-stat-label">Board Seats</span></div>
        </div>

        ${typeof renderPartnerPersonalityCard === 'function' ? renderPartnerPersonalityCard(p) : ''}

        <div class="pg-side-label">Investment Focus</div>
        <div class="partner-tag-row">${focusHTML || '<span class="pg-empty">Not publicly disclosed.</span>'}</div>

        <div class="pg-side-label">Education</div>
        <ul class="partner-list">${educationHTML || '<li>Not publicly disclosed.</li>'}</ul>

        <div class="pg-side-label">Career Path Summary</div>
        <div class="pg-path">${pathHTML}</div>
      </div>

      <div class="pg-center">
        <div class="pg-side-label" style="margin-top: 0;">Career Timeline</div>
        <div class="timeline">${timelineHTML || '<div class="pg-empty">No dated milestones on file.</div>'}</div>

        <div class="pg-side-label">Biography</div>
        <p class="partner-bio">${p.biography || 'No biography on file.'}</p>

        <div class="pg-side-label">Previous Experience</div>
        <ul class="partner-list">${experienceHTML || '<li>Not publicly disclosed.</li>'}</ul>

        <div class="pg-side-label">Sources &amp; References</div>
        <div class="partner-source-list">${sourcesHTML || '<span class="pg-empty">No sources on file.</span>'}</div>
      </div>

      <div class="pg-sidebar-right">
        <div class="pg-panel">
          <div class="pg-side-label" style="margin-top: 0;">Notable Investments</div>
          ${investmentsHTML || '<div class="pg-empty">None on file.</div>'}
        </div>
        <div class="pg-panel">
          <div class="pg-side-label" style="margin-top: 0;">Board Seats</div>
          ${boardHTML}
        </div>
      </div>
    </div>
  `;
}
