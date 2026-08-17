/* ============================================================
   UTILITIES.JS
   Small, genuinely generic helpers with no feature-specific
   knowledge: URL-safe slugs, AUM-string parsing, fund-scale
   labels, and the return-badge builder shared by firm cards and
   the firm detail page.
   ============================================================ */
// Turns a company name into a URL-safe slug for the #company/
// route (e.g. "Square (Block)" -> "square-block").
function slugifyCompany(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// Parses a firm's AUM string (e.g. "$58B+") into a plain number for
// tier comparisons. Falls back to 0 if the format is unexpected.
function parseAumNumber(aumStr) {
  // Explicit override: if a firm's AUM is genuinely undisclosed, that
  // phrase always wins even when a parenthetical dollar figure appears
  // afterward for context (e.g. "Not publicly disclosed (Fortune
  // estimates $1.8B deployed since 1999)"). Without this check, the
  // regexes below would grab that contextual number and silently rank
  // the firm as if it were a confirmed current AUM figure - the exact
  // opposite of the honesty this field is meant to convey. Checked
  // first, before either regex runs.
  // Scoped to the HEADLINE (everything before the first parenthesis)
  // rather than the whole string. A qualifier like "$405M (final fund,
  // closed 2022 per Axios; firm-wide AUM not publicly disclosed)" states
  // a real figure and then notes what ISN'T disclosed - testing the full
  // string made that phrase win and ranked Accomplice at 0, which is the
  // opposite of what this override is for.
  if (/not (?:publicly )?disclosed/i.test(String(aumStr).split('(')[0])) return 0;

 // Accepts $, £, or € - Molten Ventures reports in pounds and Porsche
  // Ventures in euros, and without this they'd parse as 0 and land in
  // the wrong fund-size tier (and at the bottom of the rankings).
  // Currencies are treated as equivalent rather than FX-converted, which
  // is consistent with AUM already being an approximate figure here.
  const bMatch = aumStr.match(/[$£€](\d+\.?\d*)B/);
  if (bMatch) return parseFloat(bMatch[1]);
  // Handles fund sizes stated in millions (e.g. "$200M+"), converting
  // to the same billions-denominated scale everything else uses -
  // without this, any millions-denominated firm would silently
  // parse as 0 and land in the wrong tier once tiers below $1B exist.
const mMatch = aumStr.match(/[$£€](\d+\.?\d*)M/);
  if (mMatch) return parseFloat(mMatch[1]) / 1000;
  return 0;
}
// Returns a plain-language fund scale label for a firm, using the
// same tiers as the AUM filter chips below - so the label a
// founder sees always matches how the site actually filters that
// firm elsewhere. (The Find Investors questionnaire asks about the
// founder's own funding ask, matched against real investment
// stage data instead - a genuinely different question, so it's
// intentionally not tied to these 8 fund-scale tiers. See
// computeFinderMatches for that logic.)
function getScaleLabel(firm) {
  const num = parseAumNumber(firm.aum);
  if (num >= 50) return 'Mega Fund ($50B+)';
  if (num >= 20) return 'Large Fund ($20B–$50B)';
  if (num >= 10) return 'Mid-Size Fund ($10B–$20B)';
  if (num >= 5) return 'Below $10B';
  if (num >= 0.5) return 'Below $5B';
  if (num >= 0.2) return '$200M–$500M';
  if (num >= 0.1) return '$100M–$200M';
  return 'Under $100M';
}
// ---------- SUGGESTED FOR YOU ----------
// Given the firms currently in a user's shortlist, suggests one additional
// firm they haven't shortlisted yet, based on sector and stage overlap with
// what's already there. Returns null if the shortlist is empty (nothing to
// base a suggestion on) or if every overlapping firm is already shortlisted.
// Shared across the Find Investors results page, the Shortlist page, and
// Search results, so the suggestion logic - and what counts as "similar" -
// stays identical everywhere it appears rather than drifting between pages.
function getSuggestedFirm(shortlistFirms) {
  if (!shortlistFirms || shortlistFirms.length === 0) return null;

  const shortlistSlugs = new Set(shortlistFirms.map(f => f.slug));

  // Union of every sector represented across the shortlist
  const shortlistSectors = new Set();
  shortlistFirms.forEach(f => (f.sectors || []).forEach(s => shortlistSectors.add(s)));

  // Union of every investment stage represented across the shortlist,
  // pulled from firmStages since that's the source of truth for stage
  // data rather than duplicating it onto the firm objects themselves.
  const shortlistStages = new Set();
  shortlistFirms.forEach(f => {
    (firmStages[f.slug] || []).forEach(stage => shortlistStages.add(stage));
  });

  let best = null;
  let bestScore = 0;

  firms.forEach(candidate => {
    if (shortlistSlugs.has(candidate.slug)) return; // already shortlisted

    const sectorOverlap = (candidate.sectors || []).filter(s => shortlistSectors.has(s)).length;
    const stageOverlap = (firmStages[candidate.slug] || []).filter(s => shortlistStages.has(s)).length;

    // Sector overlap weighted higher than stage overlap - two firms sharing
    // a sector focus are more genuinely "similar" to a founder than two
    // firms that simply both happen to invest at, say, Series A.
    const score = (sectorOverlap * 2) + stageOverlap;

    if (score > bestScore) {
      bestScore = score;
      best = candidate;
    }
  });

  return best; // null if no candidate had any overlap at all
}
// Builds the small colored badge showing return since Jan 2, 2025,
// for any holding that has a real historicalPrice on file. Holdings
// without one yet (historicalPrice: null) show a neutral "—" badge
// instead of guessing.
function buildReturnBadge(h) {
  if (h.historicalPrice === null || h.price === null) {
    return `<span class="return-badge unknown">— since Jan '25</span>`;
  }
  const pct = ((h.price - h.historicalPrice) / h.historicalPrice) * 100;
  const r = Number(pct.toFixed(1));
  const cls = r > 0 ? 'positive' : r < 0 ? 'negative' : 'flat';
  const sign = r > 0 ? '+' : '';
  // Rounded value drives the arrow, so a badge reading "0.0%" shows the
  // flat arrow rather than an up arrow from an invisible +0.04.
  return `<span class="return-badge ${cls}">${directionLabel(r)}${sign}${r.toFixed(1)}% since Jan '25</span>`;
}
// ---------- RANKINGS ORDER ----------
// Sort every firm by real AUM, highest to lowest, then derive rank from
// that sorted position. Doing this in code rather than relying on where
// a firm object physically sits in data.js means the rankings can never
// drift out of order - and a newly added firm can be pasted ANYWHERE in
// the array and still land in its correct slot automatically. Firms with
// no disclosed AUM parse to 0 and collect at the bottom, which is the
// honest place for them.
firms.sort((a, b) => parseAumNumber(b.aum) - parseAumNumber(a.aum));
firms.forEach((f, i) => { f.rank = i + 1; });
// Formats a combined-AUM figure (stored in billions, e.g. 1223 for
// $1223B) as trillions once it crosses the 1000 mark, since "$1223B+"
// reads worse than "$1.223T+" at this scale. Below $1T, displays in
// billions as before.
function formatCombinedAUM(billions) {
  if (billions >= 1000) {
    return '$' + (billions / 1000).toFixed(3) + 'T+';
  }
  return '$' + billions + 'B+';
}

/* ============================================================
   CANONICAL FIRM COUNT
   One source of truth: the firms array itself. Every place that
   shows a firm count reads this, so adding a firm to data-firms.js
   updates the whole site with no other edit.

   WHY THIS EXISTS: the <head> of index.html carried three different
   answers - the title said 248, the meta/OG/Twitter tags said 146,
   and the hero placeholder said 293, against a real dataset of 361.
   Each was written by hand at a different time and then went stale.
   ============================================================ */

// Counts DISTINCT slugs, not array length, so a duplicated firm
// object can never quietly inflate the number.
function canonicalFirmCount() {
  if (typeof firms === 'undefined' || !Array.isArray(firms)) return null;
  const seen = {};
  let n = 0;
  firms.forEach(function (f) {
    if (f && f.slug && !seen[f.slug]) { seen[f.slug] = true; n++; }
  });
  return n || null;
}

/* Rewrites every count the page displays from that one number.

   The digits in index.html's <head> are a FALLBACK for crawlers that
   do not execute JavaScript - they are not the source of truth, and
   this function overwrites them on load. The regex targets only a
   number that directly precedes "firms" or "Venture Capital Firms",
   so no other figure in a title or description can be caught by it. */
function applyCanonicalFirmCount() {
  const n = canonicalFirmCount();
  if (!n || typeof document === 'undefined') return;

  const swap = (s) => String(s).replace(
    /\b\d{2,4}\b(?=\+?\s+(?:venture capital\s+)?firms?\b)/gi, n);

  // Opt-in elements: <span data-firm-count>361</span>
  const nodes = document.querySelectorAll('[data-firm-count]');
  for (let i = 0; i < nodes.length; i++) nodes[i].textContent = n;

  if (document.title) document.title = swap(document.title);

  [['meta[name="description"]', 'content'],
   ['meta[property="og:title"]', 'content'],
   ['meta[property="og:description"]', 'content'],
   ['meta[name="twitter:title"]', 'content'],
   ['meta[name="twitter:description"]', 'content']].forEach(function (pair) {
    const el = document.querySelector(pair[0]);
    if (!el) return;
    const v = el.getAttribute(pair[1]);
    if (v) el.setAttribute(pair[1], swap(v));
  });
}

if (typeof document !== 'undefined') applyCanonicalFirmCount();

/* ============================================================
   DIRECTION MARKS
   Every directional figure on the site carries an arrow as well
   as a colour. Red/green alone fails for the ~8% of men with a
   colour vision deficiency, in high-contrast modes, in print,
   and in a screenshot pasted into a deck. The arrow states the
   direction; colour only reinforces it.

   Flat is an arrow too. A metric that has not moved is a real
   result and should not be silently indistinguishable from one
   we have no reading for - "no change" and "unknown" are
   different claims.
   ============================================================ */
function directionMark(value) {
  if (value === null || value === undefined || (typeof value === 'number' && !isFinite(value))) return '';
  if (value > 0) return '\u2191';   // up
  if (value < 0) return '\u2193';   // down
  return '\u2192';                  // flat
}

// The arrow plus a screen-reader word, so a reader that ignores the
// glyph still hears the direction rather than just a number.
function directionLabel(value) {
  if (value === null || value === undefined || (typeof value === 'number' && !isFinite(value))) return '';
  const word = value > 0 ? 'up' : value < 0 ? 'down' : 'no change';
  return '<span class="dir-mark" aria-hidden="true">' + directionMark(value) + '</span>' +
         '<span class="sr-only">' + word + ' </span>';
}
