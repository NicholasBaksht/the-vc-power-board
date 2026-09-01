/* ============================================================
   CAPITAL-SOURCES.JS
   The Broader Capital Sources section: list view and detail view.

   Deliberately mirrors the partner pages rather than inventing a
   new visual language - same evidence disclosure, same "unknown
   stays unknown" phrasing, same coverage line when a field is not
   researched yet. An entry with three sourced investments and one
   with thirty must both read as honest, not one as unfinished.

   THE ONE RULE THIS FILE EXISTS TO ENFORCE:
   what a person SAYS they invest in and what they have actually
   BEEN SEEN to do are different claims with different reliability,
   so they are rendered in different blocks with different labels
   and are never averaged into a single "focus". Stated focus is
   printed as a quote of them. Observed behaviour is computed here
   from the investment rows and always carries its sample size.
   ============================================================ */

function csEsc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const CS_TYPE_LABEL = {
  angel: 'Angel',
  strategic: 'Strategic / Corporate',
  family: 'Family Office',
  syndicate: 'Syndicate / Rolling Fund'
};

function csHost(u) {
  try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return u; }
}

function csList(v) { return Array.isArray(v) ? v.filter(Boolean) : []; }

function csAll() {
  if (typeof CAPITAL_SOURCES === 'undefined') return [];
  return Object.keys(CAPITAL_SOURCES).map(function (slug) {
    const e = CAPITAL_SOURCES[slug];
    return { slug: slug, e: e, n: csList(e.investments).length };
  }).sort(function (a, b) {
    return b.n - a.n || a.e.name.localeCompare(b.e.name);
  });
}

/* Distribution over an entry's sourced investments. Same floor as the
   partner bars: below it a percentage would be noise dressed as a
   finding, so the raw count is shown instead. */
const CS_MIN_DIST = 5;
function csDist(inv, field) {
  const known = csList(inv).filter(function (r) { return r[field]; });
  if (known.length < CS_MIN_DIST) return null;
  const c = {};
  known.forEach(function (r) { c[r[field]] = (c[r[field]] || 0) + 1; });
  return {
    n: known.length,
    dist: Object.keys(c).map(function (k) {
      return { label: k, n: c[k], pct: Math.round(100 * c[k] / known.length) };
    }).sort(function (a, b) { return b.n - a.n || a.label.localeCompare(b.label); })
  };
}

function csBars(d, total, noun) {
  const max = d.dist[0].pct;
  return '<div class="cs-bars">' + d.dist.map(function (x) {
    return '<div class="cs-bar-row"><span class="cs-bar-label">' + csEsc(x.label) + '</span>' +
      '<span class="cs-bar-track"><span class="cs-bar-fill" style="width:' +
        Math.max(4, Math.round(100 * x.pct / max)) + '%"></span></span>' +
      '<span class="cs-bar-pct">' + x.pct + '%</span></div>';
  }).join('') +
  '</div><div class="cs-basis">Based on ' + d.n + ' of ' + total +
    ' attributable investments with a known ' + noun + '</div>';
}

/* ---------- list view ---------- */

function renderCapitalSources() {
  const host = document.getElementById('capitalSourcesView');
  if (!host) return;
  const all = csAll();
  const counts = {};
  all.forEach(function (x) {
    const t = x.e.type || 'angel';
    counts[t] = (counts[t] || 0) + 1;
  });
  const totalInv = all.reduce(function (a, x) { return a + x.n; }, 0);

  let h = '<div class="cs-wrap">' +
    '<div class="cs-kicker">Broader Capital Sources</div>' +
    '<h1 class="cs-h1">The money that is not a tracked fund.</h1>' +
    '<p class="cs-sub">Angels, corporate and strategic investors, family offices and ' +
    'syndicates - held to the same evidence standard as every firm and partner on ' +
    'Power Board. An investment appears here only when a public source names that ' +
    'investor against that company. Where a round, a year or a sector was not ' +
    'established by a source, it is left blank rather than guessed.</p>' +
    '<p class="cs-sub">Everyone listed is a <strong>currently active</strong> independent ' +
    'investor for whom investing is a major or full-time activity. People who now run ' +
    'funds are tracked as partners instead; people who have stopped investing are not ' +
    'tracked at all. That gate is the reason this list is short.</p>';

  if (!all.length) {
    h += '<div class="cs-empty">No capital sources recorded yet.</div></div>';
    host.innerHTML = h;
    return;
  }

  h += '<div class="cs-stats">' +
    '<div class="cs-stat"><div class="n">' + all.length + '</div><div class="l">Tracked</div></div>' +
    '<div class="cs-stat"><div class="n">' + totalInv + '</div><div class="l">Attributed investments</div></div>' +
    Object.keys(counts).map(function (t) {
      return '<div class="cs-stat"><div class="n">' + counts[t] + '</div><div class="l">' +
             csEsc(CS_TYPE_LABEL[t] || t) + '</div></div>';
    }).join('') +
    '</div>';

  h += '<div class="cs-grid">' + all.map(function (x) {
    const e = x.e;
    const sectors = {};
    csList(e.investments).forEach(function (r) { if (r.sector) sectors[r.sector] = 1; });
    const secList = Object.keys(sectors).slice(0, 3);
    return '<a class="cs-card" href="#capital-source/' + csEsc(x.slug) + '">' +
      '<div class="cs-card-type">' + csEsc(CS_TYPE_LABEL[e.type] || e.type) + '</div>' +
      '<div class="cs-card-name">' + csEsc(e.name) + '</div>' +
      (e.role ? '<div class="cs-card-role">' + csEsc(e.role) + '</div>' : '') +
      '<div class="cs-card-meta">' + x.n + ' attributable investment' + (x.n === 1 ? '' : 's') +
        (secList.length ? ' &middot; ' + csEsc(secList.join(', ')) : '') + '</div>' +
      '</a>';
  }).join('') + '</div></div>';

  host.innerHTML = h;
}

/* ---------- detail view ---------- */

function csFacts(e) {
  /* The one-line summary of how this person actually deploys money.
     Every element is a sourced field; nothing is derived. */
  const bits = [];
  if (e.investingMode) bits.push(csEsc(e.investingMode));
  if (e.vehicle) bits.push('via ' + csEsc(e.vehicle));
  if (e.checkSize) bits.push(csEsc(e.checkSize) + ' cheques');
  if (e.leadBehavior && e.leadBehavior !== 'Unknown') bits.push(csEsc(e.leadBehavior));
  if (!bits.length) return '';
  return '<div class="cs-facts">' + bits.join(' &middot; ') + '</div>';
}

function csChips(items, cls) {
  return '<div class="cs-chips">' + items.map(function (t) {
    return '<span class="cs-chip' + (cls ? ' ' + cls : '') + '">' + csEsc(t) + '</span>';
  }).join('') + '</div>';
}

function csLinkedRows(items, nameKey, metaFn) {
  return '<ul class="cs-list">' + items.map(function (x) {
    const meta = metaFn ? metaFn(x) : '';
    const label = csEsc(x[nameKey] || x.name || x.company);
    return '<li class="cs-item">' +
      (x.url ? '<a class="cs-item-name cs-item-link" href="' + csEsc(x.url) +
                '" target="_blank" rel="noopener">' + label + '</a>'
             : '<span class="cs-item-name">' + label + '</span>') +
      (meta ? '<span class="cs-item-meta">' + meta + '</span>' : '') +
      '</li>';
  }).join('') + '</ul>';
}

function renderCapitalSource(slug) {
  const host = document.getElementById('capitalSourceDetailView');
  if (!host) return;
  const e = (typeof CAPITAL_SOURCES !== 'undefined') ? CAPITAL_SOURCES[slug] : null;
  if (!e) {
    host.innerHTML = '<div class="cs-wrap"><a class="cs-back" href="#capital-sources">' +
      '&larr; Back to capital sources</a><div class="cs-empty">Not found.</div></div>';
    return;
  }
  const inv = csList(e.investments);
  const sourced = inv.filter(function (r) { return csList(r.evidence).length; }).length;
  const dated = inv.filter(function (r) { return r.year != null; }).length;
  const staged = inv.filter(function (r) { return r.stage; }).length;
  const sectored = inv.filter(function (r) { return r.sector; }).length;

  let h = '<div class="cs-wrap">' +
    '<a class="cs-back" href="#capital-sources">&larr; Back to capital sources</a>' +
    '<div class="cs-kicker">' + csEsc(CS_TYPE_LABEL[e.type] || e.type) + '</div>' +
    '<h1 class="cs-h1">' + csEsc(e.name) + '</h1>' +
    (e.role ? '<div class="cs-role">' + csEsc(e.role) + '</div>' : '') +
    (e.basedIn ? '<div class="cs-based">' + csEsc(e.basedIn) + '</div>' : '') +
    csFacts(e) +
    (e.biography ? '<p class="cs-bio">' + csEsc(e.biography) + '</p>' : '');

  if (e.vehicleNote) {
    h += '<div class="cs-vnote">' + csEsc(e.vehicleNote) + '</div>';
  }

  h += '<div class="cs-strip">' +
    '<div class="cs-stat"><div class="n">' + inv.length + '</div><div class="l">Attributable investments</div></div>' +
    '<div class="cs-stat"><div class="n">' + sourced + ' / ' + inv.length + '</div><div class="l">With cited sources</div></div>' +
    '<div class="cs-stat"><div class="n">' + sectored + ' / ' + inv.length + '</div><div class="l">Known sector</div></div>' +
    '<div class="cs-stat"><div class="n">' + staged + ' / ' + inv.length + '</div><div class="l">Known stage</div></div>' +
    '<div class="cs-stat"><div class="n">' + dated + ' / ' + inv.length + '</div><div class="l">Known year</div></div>' +
    (e.exitCount != null
      ? '<div class="cs-stat"><div class="n">' + csEsc(e.exitCount) + '</div><div class="l">Exits' +
        (e.exitCountBasis ? ' (' + csEsc(e.exitCountBasis) + ')' : '') + '</div></div>'
      : '') +
    '</div>';

  if (e.strategicValue) {
    h += '<div class="cs-block"><div class="cs-block-h">What their background suggests they can help with</div>' +
      '<p class="cs-bio">' + csEsc(e.strategicValue) + '</p></div>';
  }

  /* Stated focus. Printed as their own claim, never merged with the
     computed behaviour below it. */
  const sSec = csList(e.statedSectorFocus), sStg = csList(e.statedStageFocus);
  if (sSec.length || sStg.length) {
    h += '<div class="cs-block"><div class="cs-block-h">Stated focus - what they say they invest in</div>' +
      (sSec.length ? csChips(sSec) : '') +
      (sStg.length ? csChips(sStg, 'cs-chip-stage') : '') +
      '<div class="cs-basis">Self-described, taken from their own site or an interview. ' +
      'It is not derived from the investments below, and the two can disagree.</div></div>';
  }

  /* Observed behaviour. Computed here, sample size always shown. */
  const dSec = csDist(inv, 'sector');
  const dStg = csDist(inv, 'stage');
  if (dSec || dStg) {
    h += '<div class="cs-block"><div class="cs-block-h">Observed behaviour - what the sourced record shows</div>';
    if (dSec) h += '<div class="cs-sub-h">Sector</div>' + csBars(dSec, inv.length, 'sector');
    if (dStg) h += '<div class="cs-sub-h">Stage</div>' + csBars(dStg, inv.length, 'stage');
    if (!dStg && inv.length) {
      h += '<div class="cs-basis">Stage is not shown: it needs at least ' + CS_MIN_DIST +
        ' investments where a source names the round, and ' + staged + ' ' +
        (staged === 1 ? 'is' : 'are') + ' recorded. Angel participation is often ' +
        'announced without naming the round.</div>';
    }
    h += '</div>';
  } else if (inv.length) {
    h += '<div class="cs-note">Sector and stage concentration each need at least ' + CS_MIN_DIST +
      ' investments where a source establishes that field. Recorded so far: ' +
      sectored + ' with a sector, ' + staged + ' with a stage.</div>';
  }

  if (csList(e.capabilities).length) {
    h += '<div class="cs-block"><div class="cs-block-h">Capabilities</div><ul class="cs-caps">' +
      e.capabilities.map(function (c) {
        return '<li class="cs-cap"><span class="cs-cap-name">' + csEsc(c.capability) + '</span>' +
          '<span class="cs-cap-ev">' + csEsc(c.evidence) + '</span>' +
          (c.url ? ' <a class="cs-cap-src" href="' + csEsc(c.url) + '" target="_blank" rel="noopener">' +
                   csEsc(csHost(c.url)) + '</a>' : '') + '</li>';
      }).join('') +
      '</ul><div class="cs-basis">Each capability names the role or accomplishment it rests on. ' +
      'A capability with no such evidence is not listed.</div></div>';
  }

  if (inv.length) {
    h += '<div class="cs-block"><div class="cs-block-h">Attributable investments</div><ul class="cs-list">';
    inv.forEach(function (r) {
      const meta = [r.stage, r.year, r.subsector || r.sector].filter(Boolean).join(' &middot; ');
      h += '<li class="cs-item"><span class="cs-item-name">' + csEsc(r.name) + '</span>' +
        (meta ? '<span class="cs-item-meta">' + meta + '</span>' : '') +
        (r.role === 'board' ? '<span class="cs-item-board">board</span>' : '');
      const evs = csList(r.evidence);
      if (evs.length) {
        h += '<details class="cs-ev"><summary>' + evs.length + ' source' + (evs.length === 1 ? '' : 's') + '</summary>';
        evs.forEach(function (v) {
          h += '<div class="cs-ev-row"><a href="' + csEsc(v.url) + '" target="_blank" rel="noopener">' +
            csEsc(csHost(v.url)) + '</a> <span class="cs-ev-type">' + csEsc(v.type) + '</span>' +
            (v.checked ? ' <span class="cs-ev-date">checked ' + csEsc(v.checked) + '</span>' : '') + '</div>';
        });
        h += '</details>';
      }
      h += '</li>';
    });
    h += '</ul></div>';
  } else {
    h += '<div class="cs-note">No individually attributable investments are recorded yet. ' +
      'That means no public source names this investor against a specific company - not ' +
      'that no investments were made. Where a portfolio is described only as a total, ' +
      'Power Board records nothing rather than splitting the total into guesses.</div>';
  }

  const boards = csList(e.boardSeats);
  if (boards.length) {
    const cur = boards.filter(function (b) { return b.status === 'current'; });
    const fmr = boards.filter(function (b) { return b.status !== 'current'; });
    h += '<div class="cs-block"><div class="cs-block-h">Board seats</div>';
    if (cur.length) h += '<div class="cs-sub-h">Current</div>' + csLinkedRows(cur, 'company');
    if (fmr.length) h += '<div class="cs-sub-h">Former</div>' + csLinkedRows(fmr, 'company');
    h += '<div class="cs-basis">A board seat is not by itself evidence of an investment, and ' +
      'is not counted as one above.</div></div>';
  }

  const adv = csList(e.advisoryRoles);
  if (adv.length) {
    h += '<div class="cs-block"><div class="cs-block-h">Advisory roles</div>' +
      csLinkedRows(adv, 'company', function (x) { return x.role ? csEsc(x.role) : ''; }) + '</div>';
  }

  const syn = csList(e.syndicateMemberships);
  if (syn.length) {
    h += '<div class="cs-block"><div class="cs-block-h">Networks and syndicates</div>' +
      csLinkedRows(syn, 'name') +
      '<div class="cs-basis">Membership of a group does not mean participation in that ' +
      'group\'s deals, and none are attributed on that basis.</div></div>';
  }

  const geo = csList(e.geographicPatterns);
  if (geo.length) {
    h += '<div class="cs-block"><div class="cs-block-h">Geography</div>' + csChips(geo) +
      '<div class="cs-basis">From stated focus or the location of sourced investments, ' +
      'never from where the investor lives.</div></div>';
  }

  const mile = csList(e.careerMilestones);
  if (mile.length) {
    h += '<div class="cs-block"><div class="cs-block-h">Career milestones</div><ul class="cs-time">' +
      mile.slice().sort(function (a, b) { return (a.year || 0) - (b.year || 0); })
        .map(function (m) {
          return '<li class="cs-time-row"><span class="cs-time-y">' +
            csEsc(m.year != null ? m.year : '') + '</span>' +
            '<span class="cs-time-e">' + csEsc(m.event) + '</span></li>';
        }).join('') + '</ul></div>';
  }

  const edu = csList(e.education), prev = csList(e.previousExperience);
  if (edu.length || prev.length) {
    h += '<div class="cs-block"><div class="cs-block-h">Background</div>';
    if (prev.length) {
      h += '<div class="cs-sub-h">Experience</div><ul class="cs-plain">' +
        prev.map(function (t) { return '<li>' + csEsc(t) + '</li>'; }).join('') + '</ul>';
    }
    if (edu.length) {
      h += '<div class="cs-sub-h">Education</div><ul class="cs-plain">' +
        edu.map(function (t) { return '<li>' + csEsc(t) + '</li>'; }).join('') + '</ul>';
    }
    h += '</div>';
  }

  const pub = csList(e.publicHoldings);
  if (pub.length) {
    h += '<div class="cs-block"><div class="cs-block-h">Holdings still publicly traded</div>' +
      csLinkedRows(pub, 'company', function (x) { return x.ticker ? csEsc(x.ticker) : ''; }) +
      '<div class="cs-basis">Companies attributed to this investor that are listed today. ' +
      'A current listing says nothing about when, at what price, or whether the position ' +
      'is still held.</div></div>';
  }

  if (csList(e.sources).length) {
    h += '<div class="cs-block"><div class="cs-block-h">Profile sources</div><ul class="cs-src">' +
      e.sources.map(function (s) {
        return '<li><a href="' + csEsc(s.url) + '" target="_blank" rel="noopener">' +
               csEsc(s.label || s.url) + '</a></li>';
      }).join('') + '</ul></div>';
  }

  h += '<details class="cs-method"><summary>About these records</summary>' +
    '<p>Power Board records an investment here only when a public source names this ' +
    'investor against this company. Capital deployed by an associated fund is never ' +
    'treated as personal attribution, and membership of an angel group or syndicate is ' +
    'never treated as participation in that group\'s deals. Stage and year are shown only ' +
    'where a source describes that specific round; where they are unknown they are left ' +
    'blank rather than estimated.</p>' +
    '<p>Stated focus and observed behaviour are kept apart on purpose. The first is what ' +
    'the investor says; the second is computed from the sourced rows and is shown only ' +
    'once at least ' + CS_MIN_DIST + ' rows carry the field, always with the sample size. ' +
    'Public records are not a complete account of anyone\'s investing.</p>' +
    (e.lastChecked ? '<p>Status, vehicle, location and affiliations change. This profile ' +
      'was last checked against its sources on ' + csEsc(e.lastChecked) + '.</p>' : '') +
    '</details>';

  h += '</div>';
  host.innerHTML = h;
}
