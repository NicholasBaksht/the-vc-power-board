/* ============================================================
   DATA-ORGS.JS
   Which firms are venture arms of something larger, and of what.

   WHY THIS IS A DATA FILE AND NOT A UI DETAIL: the parent company
   is a fact about the firm, and it is needed in at least three
   places - the firm tile, the firm profile, and Conflict Check,
   where a parent may itself be a competitor, customer or acquirer
   of the founder's company. Writing "Intel" into firm-detail.js
   would strand that fact inside one component.

   EVERY ENTRY IS GROUNDED. `evidence` records where the claim comes
   from: 'thesis' means the firm's own thesis text in data-firms.js
   states the relationship; 'name' means the firm name contains the
   parent outright (Samsung NEXT). Nothing here rests on recall, and
   a firm with no verifiable parent is simply absent from this file.

   FOUR TYPES, because "corporate VC" alone would be wrong for
   several of them:
     corporate   - venture arm of an operating company (Intel Capital)
     government  - state, agency or development-bank backed (In-Q-Tel)
     affiliate   - arm of a larger INVESTMENT firm, not an operating
                   company (Bain Capital Ventures). Badged differently
                   because the conflict profile is not the same.
     (former)    - firms with a corporate ORIGIN that are independent
                   today. These are deliberately NOT badged corporate:
                   Sapphire left SAP in 2011 and calling it SAP's arm
                   in 2026 would be false. Recorded because the lineage
                   is real and worth showing as history.
   ============================================================ */

const FIRM_ORGS = {

  /* ---- CORPORATE ---- */
  "adobe-ventures": { type: "corporate", parent: "Adobe", parentAliases: ["Adobe"], evidence: "thesis" },
  "airbus-ventures": { type: "corporate", parent: "Airbus", parentAliases: ["Airbus"], evidence: "thesis" },
  "amazon-alexa-fund": { type: "corporate", parent: "Amazon", parentAliases: ["Amazon", "AWS", "Amazon Web Services", "Alexa"], evidence: "thesis" },
  "applied-ventures": { type: "corporate", parent: "Applied Materials", parentAliases: ["Applied Materials"], evidence: "thesis" },
  "bmw-i-ventures": { type: "corporate", parent: "BMW Group", parentAliases: ["BMW", "BMW Group", "MINI"], evidence: "thesis" },
  "bloomberg-beta": { type: "corporate", parent: "Bloomberg L.P.", parentAliases: ["Bloomberg"], evidence: "thesis" },
  "cisco-investments": { type: "corporate", parent: "Cisco", parentAliases: ["Cisco", "Cisco Systems"], evidence: "thesis" },
  "citi-ventures": { type: "corporate", parent: "Citigroup", parentAliases: ["Citi", "Citigroup", "Citibank"], evidence: "thesis" },
  "comcast-ventures": { type: "corporate", parent: "Comcast", parentAliases: ["Comcast", "NBCUniversal"], evidence: "thesis" },
  "dell-technologies-capital": { type: "corporate", parent: "Dell Technologies", parentAliases: ["Dell", "Dell Technologies"], evidence: "thesis" },
  "capitalg": { type: "corporate", parent: "Alphabet", parentAliases: ["Alphabet", "Google"], evidence: "thesis" },
  "gv": { type: "corporate", parent: "Alphabet", parentAliases: ["Alphabet", "Google"], evidence: "thesis" },
  "gradient-ventures": { type: "corporate", parent: "Alphabet", parentAliases: ["Alphabet", "Google"], evidence: "thesis" },
  "intel-capital": { type: "corporate", parent: "Intel", parentAliases: ["Intel"], evidence: "thesis" },
  "m12": { type: "corporate", parent: "Microsoft", parentAliases: ["Microsoft", "Azure", "GitHub", "LinkedIn"], evidence: "thesis" },
  "munich-re-ventures": { type: "corporate", parent: "Munich Re", parentAliases: ["Munich Re", "HSB"], evidence: "thesis" },
  "nventures": { type: "corporate", parent: "NVIDIA", parentAliases: ["NVIDIA"], evidence: "thesis" },
  "porsche-ventures": { type: "corporate", parent: "Porsche", parentAliases: ["Porsche", "Volkswagen Group"], evidence: "thesis" },
  "prosus-ventures": { type: "corporate", parent: "Prosus", parentAliases: ["Prosus", "Naspers"], evidence: "thesis" },
  "qualcomm-ventures": { type: "corporate", parent: "Qualcomm", parentAliases: ["Qualcomm"], evidence: "thesis" },
  "rakuten-capital": { type: "corporate", parent: "Rakuten Group", parentAliases: ["Rakuten"], evidence: "thesis" },
  "salesforce-ventures": { type: "corporate", parent: "Salesforce", parentAliases: ["Salesforce", "Slack", "Tableau", "MuleSoft"], evidence: "thesis" },
  "samsung-ventures": { type: "corporate", parent: "Samsung Electronics", parentAliases: ["Samsung"], evidence: "thesis" },
  "samsung-next": { type: "corporate", parent: "Samsung Electronics", parentAliases: ["Samsung"], evidence: "name" },
  "servicenow-ventures": { type: "corporate", parent: "ServiceNow", parentAliases: ["ServiceNow"], evidence: "thesis" },
  "toyota-ventures": { type: "corporate", parent: "Toyota", parentAliases: ["Toyota", "Woven by Toyota"], evidence: "thesis" },
  "workday-ventures": { type: "corporate", parent: "Workday", parentAliases: ["Workday"], evidence: "thesis" },
  "sky-vc": { type: "corporate", parent: "SKY Leasing", parentAliases: ["SKY Leasing"], evidence: "thesis" },
  "f-prime-capital": { type: "corporate", parent: "Fidelity Investments", parentAliases: ["Fidelity"], evidence: "thesis" },
  "norwest-venture-partners": { type: "corporate", parent: "Wells Fargo", parentAliases: ["Wells Fargo"], evidence: "thesis" },
  "global-founders-capital": { type: "corporate", parent: "Rocket Internet", parentAliases: ["Rocket Internet"], evidence: "thesis" },
  "eqt-ventures": { type: "corporate", parent: "EQT AB", parentAliases: ["EQT"], evidence: "thesis" },
  "softbank-vision-fund": { type: "corporate", parent: "SoftBank Group", parentAliases: ["SoftBank"], evidence: "thesis" },

  /* ---- GOVERNMENT ---- */
  "in-q-tel": { type: "government", parent: "U.S. Intelligence Community", parentAliases: ["CIA", "In-Q-Tel"], evidence: "thesis",
    note: "Chartered by the CIA in 1999." },
  "bdc-capital": { type: "government", parent: "Business Development Bank of Canada", parentAliases: ["BDC"], evidence: "thesis",
    note: "Crown corporation; Canada's national development bank." },
  "vertex-ventures": { type: "government", parent: "Temasek", parentAliases: ["Temasek"], evidence: "thesis",
    note: "Venture arm of Singapore's state investment company." },
  "high-tech-grunderfonds": { type: "government", parent: "German Federal Ministry for Economic Affairs", parentAliases: ["KfW"], evidence: "thesis",
    note: "Public-private partnership with 45+ corporate LPs." },

  /* ---- AFFILIATE ---- */
  "bain-capital-ventures": { type: "affiliate", parent: "Bain Capital", parentAliases: ["Bain Capital"], evidence: "thesis" },
  "revolution-ventures": { type: "affiliate", parent: "Revolution LLC", parentAliases: ["Revolution"], evidence: "thesis" },
  "rise-of-the-rest-seed-fund": { type: "affiliate", parent: "Revolution LLC", parentAliases: ["Revolution"], evidence: "name" },

  /* ---- Added with the 20-firm batch ---- */
  "mouro-capital": { type: "independent", formerParent: "Banco Santander", spunOutYear: 2020, evidence: "thesis",
    note: "Spun out of Banco Santander in 2020; independent today." },
  "viola-ventures": { type: "affiliate", parent: "Viola Group", parentAliases: ["Viola Group"], evidence: "thesis" },
  "flourish-ventures": { type: "affiliate", parent: "The Omidyar Group", parentAliases: ["The Omidyar Group"], evidence: "thesis" },
  "next47": { type: "corporate", parent: "Siemens", parentAliases: ["Siemens"], evidence: "thesis" },
  "viola-growth": { type: "affiliate", parent: "Viola Group", parentAliases: ["Viola Group"], evidence: "thesis" },
  /* ---- Added with the third 20-firm batch ---- */
  "kurma-partners": { type: "affiliate", parent: "Eurazeo", parentAliases: ["Eurazeo"], evidence: "thesis" },
  "vives-partners": { type: "independent", formerParent: "Sopartec (UCLouvain technology transfer company)", spunOutYear: 2024, evidence: "thesis",
    note: "Spun out of Sopartec (UCLouvain technology transfer company) in 2024; independent today." },
  "openspace-ventures": { type: "independent", formerParent: "Northstar Group", spunOutYear: 2018, evidence: "thesis",
    note: "Spun out of Northstar Group in 2018; independent today." },
  "wamda-capital": { type: "affiliate", parent: "Wamda", parentAliases: ["Wamda"], evidence: "thesis" },
  "kembara": { type: "affiliate", parent: "Mundi Ventures (Alma Mundi Ventures, SGEIC, S.A.)", parentAliases: ["Mundi Ventures (Alma Mundi Ventures, SGEIC, S.A.)"], evidence: "thesis" },
  /* ---- FORMER corporate parents: independent today, NOT badged ---- */
  "sapphire-ventures": { type: "independent", formerParent: "SAP", spunOutYear: 2011, evidence: "thesis",
    note: "Founded 1996 as SAP's corporate venture arm; spun out as an independent firm in 2011." },
  "scale-venture-partners": { type: "independent", formerParent: "Bank of America", spunOutYear: 2007, evidence: "thesis",
    note: "Began in 2000 as BA Venture Partners, Bank of America's internal venture arm; spun out in 2007." },
  "canaan-partners": { type: "independent", formerParent: "GE Capital", spunOutYear: 1987, evidence: "thesis",
    note: "Originated from a 1987 management buyout of GE Capital's venture unit." },
  "atlas-venture": { type: "independent", formerParent: "ING Group", spunOutYear: null, evidence: "thesis",
    note: "Founded 1980 in Amsterdam as a subsidiary of NMB Bank, now ING Group; independent for decades." },
};

/* ------------------------------------------------------------------
   DERIVED HELPERS
   All read FIRM_ORGS; none hardcode a firm or a parent, so adding an
   entry above is the only edit ever needed.
   ------------------------------------------------------------------ */

// The org record for a firm, or null when it is an ordinary
// independent firm with no recorded lineage. Accepts a firm object
// or a slug string.
function firmOrg(firm) {
  if (!firm) return null;
  const slug = typeof firm === 'string' ? firm : firm.slug;
  return (typeof FIRM_ORGS !== 'undefined' && FIRM_ORGS[slug]) || null;
}

// True only for arms of an operating company. Government-backed and
// investment-firm affiliates are deliberately excluded - they get
// their own badge rather than being lumped in as "Corporate VC".
function isCorporateVC(firm) {
  const o = firmOrg(firm);
  return !!o && o.type === 'corporate';
}

// What a badge should say, or null when nothing should render.
// Returns { kind, label, parent, note } so the caller decides styling
// and never has to know the type strings.
function orgBadge(firm) {
  const o = firmOrg(firm);
  if (!o) return null;
  if (o.type === 'corporate')  return { kind: 'corporate',  label: 'Corporate VC',  parent: o.parent, note: o.note || null };
  if (o.type === 'government') return { kind: 'government', label: 'Government-Backed', parent: o.parent, note: o.note || null };
  if (o.type === 'affiliate')  return { kind: 'affiliate',  label: 'Affiliated Fund', parent: o.parent, note: o.note || null };
  // independent-with-history: no badge, the lineage shows on the
  // profile as history rather than as a current affiliation.
  return null;
}

// Former-parent lineage, for the firm profile only. Never a badge.
function orgLineage(firm) {
  const o = firmOrg(firm);
  if (!o || !o.formerParent) return null;
  return { formerParent: o.formerParent, spunOutYear: o.spunOutYear || null, note: o.note || null };
}

// Every parent name and alias, flattened, for Conflict Check to match
// a founder's description against. Built from FIRM_ORGS so it can
// never fall out of step with the badges.
const PARENT_ALIAS_INDEX = (function () {
  const out = [];
  if (typeof FIRM_ORGS === 'undefined') return out;
  Object.keys(FIRM_ORGS).forEach(function (slug) {
    const o = FIRM_ORGS[slug];
    (o.parentAliases || []).forEach(function (alias) {
      out.push({ slug: slug, parent: o.parent, alias: alias, type: o.type });
    });
  });
  return out;
})();

// Counts by type, computed from the live firm list so the figure can
// never be a stale hardcoded number.
function orgTypeCounts(firmList) {
  const counts = { corporate: 0, government: 0, affiliate: 0, independent: 0 };
  (firmList || []).forEach(function (f) {
    const o = firmOrg(f);
    const t = o && o.type ? o.type : 'independent';
    counts[t] = (counts[t] || 0) + 1;
  });
  return counts;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FIRM_ORGS, firmOrg, isCorporateVC, orgBadge, orgLineage,
    PARENT_ALIAS_INDEX, orgTypeCounts,
  };
}
