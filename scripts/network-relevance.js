/* ============================================================
   NETWORK-RELEVANCE.JS
   "People worth knowing" for a Power Match search.

   WHAT THIS IS NOT
   - Not a popularity ranking. Followers, post counts, profile views
     and activity volume are never read. A person with zero followers
     and the right expertise outranks a well-followed generalist.
   - Not a score. There is no calibrated methodology for a person
     match, so there is no "92% CTO fit" here. People are ranked, and
     each carries the concrete reasons they surfaced. If the reasons
     are not convincing, the ranking should not be trusted, and that
     is the honest position.
   - Not a filler slot. When no profile clears the bar the section
     does not render, exactly like Best-Fit Partner and the signal
     ticker.

   HOW RELEVANCE IS DECIDED
   Only structured, self-declared fields are used, and every one of
   them produces a reason string the founder can read:
     expertise      overlaps the founder's sectors
     help_with      overlaps what the founder said they need
     uses_for       shows the person is open to this kind of contact
     roles          matches a role the founder is looking for
     looking_for    complements the founder (they want what you are)
   A person must clear a minimum of two distinct signals, so a single
   loose keyword hit cannot put someone in front of a founder.
   ============================================================ */

const PBR_MIN_SIGNALS = 2;
const PBR_MAX_PEOPLE = 6;

/* Founder sector labels and profile expertise labels are different
   vocabularies. This maps between them explicitly rather than by
   fuzzy string matching, which is what produced false positives in
   the Best-Fit Partner work. */
const PBR_SECTOR_TO_EXPERTISE = {
  'Enterprise Software': ['Enterprise GTM', 'Software Engineering', 'Developer Infrastructure'],
  'AI': ['AI / ML', 'Software Engineering'],
  'Fintech': ['Fintech', 'Finance', 'Regulatory'],
  'Cybersecurity': ['Cybersecurity', 'Software Engineering'],
  'Healthcare': ['Healthcare', 'Regulatory'],
  'Biotech': ['Biotech', 'Regulatory'],
  'Digital Health': ['Healthcare', 'Product'],
  'Consumer': ['Consumer', 'Brand', 'Growth'],
  'Ecommerce': ['Commerce', 'Growth', 'Brand'],
  'Climate & Energy': ['Climate', 'Energy'],
  'Robotics': ['Robotics', 'Hardware', 'Manufacturing'],
  'Hardware': ['Hardware', 'Manufacturing', 'Supply Chain'],
  'Deep Tech': ['Hardware', 'AI / ML'],
  'Developer Tools & Infrastructure': ['Developer Infrastructure', 'Software Engineering'],
  'Logistics': ['Logistics', 'Supply Chain'],
  'Gaming': ['Gaming', 'Product'],
  'EdTech': ['Education', 'Product'],
  'Space': ['Space', 'Hardware'],
  'Defense Tech': ['Defense', 'Hardware'],
  'Real Estate Tech': ['Real Estate', 'Product'],
  'Crypto': ['Software Engineering', 'Fintech'],
  'Mobility': ['Logistics', 'Hardware'],
  'Industrial & Manufacturing Technology': ['Manufacturing', 'Supply Chain'],
  'Foodtech': ['Consumer', 'Supply Chain'],
  'Agtech': ['Supply Chain', 'Climate'],
  'Legal Tech': ['Legal', 'Product'],
  'Medical Devices': ['Healthcare', 'Hardware', 'Regulatory'],
  'Diagnostics': ['Healthcare', 'Biotech']
};

/* What a founder says they need, mapped to the roles and help topics
   that would answer it. Populated from the optional needs field on
   Power Match; absent needs simply contribute nothing. */
const PBR_NEED_MAP = {
  'Technical Advisor':   { roles: ['CTO', 'Advisor', 'Engineer'], help: ['Technical Architecture'] },
  'Cofounder':           { roles: ['Founder', 'CTO'],             help: [] },
  'Engineering Talent':  { roles: ['Engineer', 'CTO'],            help: ['Engineering Hiring', 'Technical Architecture'] },
  'GTM Help':            { roles: ['Operator', 'Sales'],          help: ['Enterprise Sales', 'Enterprise GTM'] },
  'Marketing':           { roles: ['Marketing'],                  help: ['Growth', 'Brand'] },
  'Sales':               { roles: ['Sales'],                      help: ['Enterprise Sales'] },
  'Customers':           { roles: ['Operator', 'Founder'],        help: [] },
  'Partnerships':        { roles: ['Operator', 'Advisor'],        help: ['Partnerships'] },
  'Board Advisor':       { roles: ['Advisor', 'Angel', 'VC'],     help: ['Founder Advice'] },
  'Other Founders':      { roles: ['Founder', 'CEO'],             help: [] }
};

/* Being open to contact is a signal in itself: someone using Power
   Board to offer expertise or meet founders is a better first
   approach than someone here purely to raise their own round. */
const PBR_OPEN_USES = ['Offering Expertise', 'Meeting Founders', 'Finding Advisors',
  'Angel Investing', 'Exploring Startups', 'Networking', 'Board Opportunities'];

function pbrOverlap(a, b) {
  const B = new Set((b || []).map(function (x) { return String(x).toLowerCase(); }));
  return (a || []).filter(function (x) { return B.has(String(x).toLowerCase()); });
}

/* Builds the founder's side of the comparison from Power Match state
   that already exists. No second questionnaire. */
function pbrFounderContext() {
  const sectors = (typeof finderSectors !== 'undefined') ? [...finderSectors] : [];
  const stages  = (typeof finderStages  !== 'undefined') ? [...finderStages]  : [];
  let needs = [];
  try { needs = JSON.parse(sessionStorage.getItem('pbFounderNeeds') || '[]'); } catch (e) {}

  const wantedExpertise = [];
  sectors.forEach(function (s) {
    (PBR_SECTOR_TO_EXPERTISE[s] || []).forEach(function (e) {
      if (wantedExpertise.indexOf(e) < 0) wantedExpertise.push(e);
    });
  });
  const wantedRoles = [], wantedHelp = [];
  needs.forEach(function (n) {
    const m = PBR_NEED_MAP[n];
    if (!m) return;
    m.roles.forEach(function (r) { if (wantedRoles.indexOf(r) < 0) wantedRoles.push(r); });
    m.help.forEach(function (h) { if (wantedHelp.indexOf(h) < 0) wantedHelp.push(h); });
  });
  return { sectors: sectors, stages: stages, needs: needs,
           wantedExpertise: wantedExpertise, wantedRoles: wantedRoles, wantedHelp: wantedHelp };
}

/* Scores one profile. Returns null when it does not clear the signal
   floor, so the caller never has to decide what "weak" means. */
function pbrScore(p, ctx) {
  const reasons = [];
  let signals = 0, weight = 0;

  const expHit = pbrOverlap(p.expertise, ctx.wantedExpertise);
  if (expHit.length) {
    signals++; weight += 3 * expHit.length;
    reasons.push(expHit.slice(0, 2).join(' and ') + ' expertise');
  }
  const helpHit = pbrOverlap(p.help_with, ctx.wantedHelp);
  if (helpHit.length) {
    signals++; weight += 4 * helpHit.length;
    reasons.push('Can help with ' + helpHit.slice(0, 2).join(' and ').toLowerCase());
  }
  const roleHit = pbrOverlap(p.roles, ctx.wantedRoles);
  if (roleHit.length) {
    signals++; weight += 3;
    reasons.push(roleHit[0] + ', which is a role you said you need');
  }
  const openHit = pbrOverlap(p.uses_for, PBR_OPEN_USES);
  if (openHit.length) {
    signals++; weight += 2;
    reasons.push('Uses Power Board for ' + openHit.slice(0, 2).join(' and ').toLowerCase());
  }
  /* Complement: they are looking for the kind of company the founder
     is running. Only counts when the founder actually stated sectors. */
  if (ctx.sectors.length) {
    const lf = (p.looking_for || []).join(' ').toLowerCase();
    const comp = ctx.sectors.filter(function (s) { return lf.indexOf(s.toLowerCase()) >= 0; });
    if (comp.length) {
      signals++; weight += 3;
      reasons.push('Looking for ' + comp[0] + ' companies');
    }
  }

  if (signals < PBR_MIN_SIGNALS) return null;
  return { profile: p, weight: weight, signals: signals, reasons: reasons.slice(0, 3) };
}

/* Returns [] when there is nothing to say. The caller renders nothing
   in that case rather than an empty heading. */
async function pbrRelevantPeople() {
  if (typeof supabaseClient === 'undefined' || !supabaseClient) return [];
  const ctx = pbrFounderContext();
  if (!ctx.wantedExpertise.length && !ctx.wantedRoles.length && !ctx.wantedHelp.length) return [];

  let rows = [];
  try {
    const { data, error } = await supabaseClient.from('profiles')
      .select('id, username, full_name, headline, current_company, current_title, location, photo_url, uses_for, help_with, looking_for, expertise, roles, show_location, dm_policy')
      .eq('is_published', true).eq('moderation_state', 'active').limit(200);
    if (error) throw error;
    rows = data || [];
  } catch (e) { return []; }

  /* Never recommend the founder to themselves. */
  const me = (typeof pbnUid === 'function') ? pbnUid() : null;

  return rows
    .filter(function (p) { return p.id !== me; })
    .map(function (p) { return pbrScore(p, ctx); })
    .filter(Boolean)
    .sort(function (a, b) { return b.weight - a.weight || b.signals - a.signals; })
    .slice(0, PBR_MAX_PEOPLE);
}

function pbrEsc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* Renders under the firm results as its own section, so firms,
   partners and people stay visually distinct categories rather than
   one merged list. */
async function pbrRenderPeopleSection() {
  const host = document.getElementById('pbrPeopleSection');
  if (!host) return;
  const people = await pbrRelevantPeople();
  if (!people.length) { host.innerHTML = ''; return; }

  if (typeof pbTrack === 'function') {
    pbTrack('network_person_recommended', { props: { count: people.length } });
  }

  host.innerHTML =
    '<section class="pbr-sec">' +
      '<div class="pbr-head">' +
        '<h2 class="pbr-h2">People worth knowing</h2>' +
        '<p class="pbr-p">Network members whose stated expertise and openness line up with ' +
        'this search. Ranked by how well what they do matches what you need, not by how ' +
        'many followers they have.</p>' +
      '</div>' +
      people.map(function (r) {
        const p = r.profile;
        const role = [p.current_title, p.current_company].filter(Boolean).join(' · ');
        return '<div class="pbr-row">' +
          '<div class="pbr-main">' +
            '<a class="pbr-name" href="#network/' + pbrEsc(p.username || p.id) + '" ' +
              'data-pbr-open="' + pbrEsc(p.username || p.id) + '">' +
              pbrEsc(p.full_name || p.username) + '</a>' +
            (role ? '<div class="pbr-role">' + pbrEsc(role) + '</div>' : '') +
            '<div class="pbr-why">Why this person may be relevant</div>' +
            '<ul class="pbr-reasons">' + r.reasons.map(function (x) {
              return '<li>' + pbrEsc(x) + '</li>';
            }).join('') + '</ul>' +
          '</div>' +
          '<div class="pbr-actions">' +
            '<a class="pbr-btn" href="#network/' + pbrEsc(p.username || p.id) + '">View profile</a>' +
            '<button type="button" class="pbr-btn pbr-save" data-pbr-save="' + pbrEsc(p.id) + '">Save</button>' +
          '</div>' +
        '</div>';
      }).join('') +
    '</section>';

  host.querySelectorAll('[data-pbr-open]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (typeof pbTrack === 'function') pbTrack('network_person_opened_from_power_match');
      /* Carries the search that produced this recommendation so the
         profile can say why it was surfaced. Session only, and it
         changes nothing about the profile itself. */
      try {
        sessionStorage.setItem('pbrFromMatch', JSON.stringify({
          sectors: [...(typeof finderSectors !== 'undefined' ? finderSectors : [])],
          stages: [...(typeof finderStages !== 'undefined' ? finderStages : [])]
        }));
      } catch (e) {}
    });
  });

  host.querySelectorAll('[data-pbr-save]').forEach(function (b) {
    b.addEventListener('click', function () { pbrSavePerson(b.dataset.pbrSave, b); });
  });
}

/* Saving is a private act: the saved person is never told, and no
   policy lets anyone read another user's saved list. */
async function pbrSavePerson(userId, btn) {
  const me = (typeof pbnUid === 'function') ? pbnUid() : null;
  if (!me) {
    try { sessionStorage.setItem('pbnAfterAuth', location.hash); } catch (e) {}
    location.hash = '#signin';
    return;
  }
  btn.disabled = true;
  try {
    const { error } = await supabaseClient.from('saved_people')
      .upsert({ user_id: me, entity_type: 'network', entity_id: userId },
              { onConflict: 'user_id,entity_type,entity_id' });
    if (error) throw error;
    btn.textContent = 'Saved';
    if (typeof pbTrack === 'function') pbTrack('network_person_saved');
  } catch (e) {
    btn.textContent = 'Could not save';
  } finally { btn.disabled = false; }
}
