/* ============================================================
   DATA.JS
   All raw site content: the weekly news feed, the featured-firm
   spotlight, every partner profile, and the big `firms` array
   (the core dataset every other file reads from) along with its
   companion data tables (firmStages, firmPerformance,
   firmGeography). This is the file Peter edits week to week.
   Load this FIRST - everything else reads from it.
   ============================================================ */
// ============================================================
// WEEKLY NEWS — Peter edits this part every week.
// Add a new entry to the TOP of this array (right after the
// opening bracket below). The newest entry becomes the big
// featured box; everything else drops into the list below it.
// Just copy one whole { ... }, block, paste it above the others,
// and change the date/tag/text.
// ============================================================
const newsItems = [
  {
    date: "August 6, 2026",
    tag: "This week",
    text: 'We set out to build a simple relationship map between firms on this page — nothing more than showing which firms had backed the same public companies. What came back surprised us: <strong>DoorDash alone connects nine different tracked firms</strong> — SoftBank Vision Fund, Sequoia Capital, Coatue Management, Dragoneer Investment Group, Pear VC, CRV, NFX, Haystack, and Y Combinator all hold a real stake in the same company. Across the full dataset, we found 62 real public companies held by two or more tracked firms, producing 324 verified relationships between 119 firms — now fully explorable in the new <strong>VC Ecosystem Graph</strong>.'
  },
  {
    date: "July 30, 2026",
    tag: "Last week",
    text: '<strong>Blue Origin raised $10 billion in its first-ever outside funding round</strong>, at a $130 billion pre-money valuation — the first time Jeff Bezos has taken outside capital in the rocket company\'s 26-year history. <strong>Coatue Management</strong> (see below) led with a $4 billion commitment, alongside $2 billion from Bezos personally and $4 billion more from other institutional investors. The round comes weeks after rival SpaceX\'s own record-setting Nasdaq debut in June.'
  },
];

 
// ============================================================
// FEATURED FIRM — Peter edits this whenever he wants to spotlight
// a different firm. Just change the "slug" below to any firm's
// slug (see the firms array further down for valid slugs, e.g.
// "a16z", "sequoia", "founders-fund"), and write a short reason
// why it's featured. Everything else - name, AUM, sectors,
// thesis - pulls automatically from that firm's real data, so
// there's nothing to keep in sync by hand.
// ============================================================
const featuredFirm = {
  slug: "bond-capital",
  reason: "Mary Meeker spent nearly a decade leading Kleiner Perkins' growth investing practice before an internal leadership dispute led her to leave in September 2018 and found Bond Capital. Her very first bet as an independent investor was Canva — a $70 million check in May 2019 that helped fuel the design platform's climb to a $42 billion valuation. Bond's lineage back to Kleiner Perkins is now fully mapped in the new VC Family Tree."
};
// ============================================================
// FULL PROFILE PAGES — optional, works for ANY firm below.
// Right now only Andreessen Horowitz (a16z) has one, but any
// firm can get the same treatment. Two fields are all it takes:
//
//   leadership: [
//     { name: "Full Name", role: "Their Title" },
//     { name: "Full Name", role: "Their Title" }
//   ],
//   timeline: [
//     { year: "YYYY", event: "One sentence describing what happened." },
//     { year: "YYYY", event: "One sentence describing what happened." }
//   ],
//
// Paste both blocks in right after that firm's "thesis" line (see
// how a16z does it below for the exact placement). A firm with
// NEITHER field still works completely normally — the page just
// won't show a leadership grid or timeline for it. Nothing else
// in the code needs to change; the detail page renders whatever
// fields it finds automatically.
// ============================================================
// ============================================================
// PARTNER PROFILES — deep-dive pages for individual VC partners.
// Each key is a slug used in the URL (#partner/alfred-lin). To
// give a leadership entry a clickable profile, add a matching
// "profileSlug" field to that person's entry in the firms array
// below (see Alfred Lin, Marc Andreessen, and Peter Thiel for
// working examples).
// ============================================================

const firmStages = {
  "a16z": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
  "sequoia": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
  "tiger-global": ["Series B", "Growth", "Late Stage"],
  "general-catalyst": ["Seed", "Series A", "Series B", "Growth"],
  "nea": ["Seed", "Series A", "Series B", "Growth"],
  "lightspeed": ["Seed", "Series A", "Series B", "Growth"],
  "kleiner-perkins": ["Series A", "Series B", "Growth", "Late Stage"],
  "accel": ["Seed", "Series A", "Series B", "Growth"],
  "khosla-ventures": ["Pre-Seed", "Seed", "Series A", "Series B", "Growth"],
  "battery-ventures": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
  "gv": ["Seed", "Series A", "Series B", "Growth"],
  "index-ventures": ["Pre-Seed", "Seed", "Series A", "Series B", "Growth"],
  "founders-fund": ["Seed", "Series A", "Series B", "Growth"],
  "thrive-capital": ["Seed", "Series A", "Series B"],
  "bessemer": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
  "benchmark": ["Seed", "Series A"],
  "spark-capital": ["Pre-Seed", "Seed", "Series A", "Series B"],
  "ivp": ["Series B", "Growth", "Late Stage"],
  "redpoint": ["Seed", "Series A", "Series B", "Growth"],
  "crv": ["Pre-Seed", "Seed", "Series A"],
  "true-ventures": ["Pre-Seed", "Seed", "Series A"],
  "greylock": ["Seed", "Series A", "Series B"],
  "union-square-ventures": ["Pre-Seed", "Seed", "Series A"],
  "first-round-capital": ["Pre-Seed", "Seed"],
  // The 14 entries below were added later, backfilled from the same
  // research already done for each firm when it was added to the
  // site - not new claims. Grounded in each firm's own stated stage
  // focus (e.g. Uncork's "one stage: seed" framing, Norwest's
  // "every stage" positioning, K9 and Precursor's explicit
  // pre-seed/seed specialization).
  "norwest-venture-partners": ["Pre-Seed", "Seed", "Series A", "Series B", "Growth", "Late Stage"],
  "bain-capital-ventures": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
  "menlo-ventures": ["Seed", "Series A", "Series B", "Growth"],
  "emergence-capital": ["Seed", "Series A"],
  "haystack": ["Pre-Seed", "Seed", "Series A"],
  "uncork-capital": ["Seed"],
  "nextview-ventures": ["Pre-Seed", "Seed"],
  "sv-angel": ["Pre-Seed", "Seed"],
  "precursor-ventures": ["Pre-Seed", "Seed"],
  "susa-ventures": ["Seed", "Series A"],
 "baseline-ventures": ["Pre-Seed", "Seed"],
  "founder-collective": ["Pre-Seed", "Seed"],
  "k9-ventures": ["Pre-Seed", "Seed"],
  "designer-fund": ["Pre-Seed", "Seed", "Series A"],
  "m25": ["Pre-Seed", "Seed"],
  "worldbuild": ["Pre-Seed"],
  "female-founders-fund": ["Seed"],
  "modern-technical-fund": ["Pre-Seed", "Seed"],
  "cambrian-ventures": ["Pre-Seed", "Seed"],
"symphonic-capital": ["Pre-Seed", "Seed"],
  "the-fintech-fund": ["Pre-Seed", "Seed"],
  "costanoa-ventures": ["Seed", "Series A"],
  "equal-ventures": ["Seed"],
  "645-ventures": ["Pre-Seed", "Seed", "Series A", "Growth"],
  "eniac-ventures": ["Seed"],
  "fika-ventures": ["Pre-Seed", "Seed"],
  "mercury-fund": ["Seed", "Series A"],
  "new-markets-venture-partners": ["Series A", "Series B", "Growth"],
  "work-bench": ["Seed", "Series A"],
  "rise-of-the-rest-seed-fund": ["Seed"],
  "bullpen-capital": ["Seed", "Series A"],
  "harlem-capital": ["Seed"],
"freestyle": ["Seed"],
"craft-ventures": ["Seed", "Series A", "Growth"],
"mayfield": ["Pre-Seed", "Seed", "Series A", "Series B"],
"matrix-partners": ["Pre-Seed", "Seed", "Series A"],
"ribbit-capital": ["Seed", "Series A", "Series B", "Growth"],
"initialized-capital": ["Seed"],
 "felicis": ["Seed", "Series A", "Growth"],
 "madrona": ["Seed", "Series A", "Growth"],
  "floodgate": ["Pre-Seed", "Seed"],
       "lux-capital": ["Seed", "Series A", "Growth"],
  "dcvc": ["Seed", "Series A", "Growth"],
   "rtp-global": ["Seed", "Series A", "Series B"],
    "amplify-partners": ["Seed", "Series A", "Series B"],
         "wing-vc": ["Seed", "Series A", "Series B"],
   "peakspan-capital": ["Series A", "Series B", "Growth"],
   "inovia-capital": ["Pre-Seed", "Seed", "Series A", "Series B", "Growth", "Late Stage"],
     "crosslink-capital": ["Pre-Seed", "Seed", "Series A"],
   "bold-capital-partners": ["Seed", "Series A"],
   "altos-ventures": ["Seed", "Series A"],
   "maveron": ["Seed", "Series A"],
   "intel-capital": ["Seed", "Series A", "Series B", "Growth"],
   "salesforce-ventures": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
   "qualcomm-ventures": ["Seed", "Series A", "Series B", "Growth"],
      "cisco-investments": ["Seed", "Series A", "Series B", "Growth"],
         "capitalg": ["Series A", "Series B", "Growth", "Late Stage"],
         "samsung-next": ["Pre-Seed", "Seed", "Series A", "Series B"],
   "m12": ["Seed", "Series A", "Series B"],
   "dell-technologies-capital": ["Seed", "Series A", "Series B"],
   "porsche-ventures": ["Seed", "Series A", "Series B"],
   "bmw-i-ventures": ["Seed", "Series A", "Series B", "Growth"],
   "sky-vc": ["Seed", "Series A", "Series B"],
   "citi-ventures": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
   "balderton-capital": ["Seed", "Series A", "Series B", "Growth"],
   "atomico": ["Seed", "Series A", "Series B", "Growth"],
   "localglobe": ["Pre-Seed", "Seed"],
   "cherry-ventures": ["Seed", "Series A", "Series B", "Growth"],
   "northzone": ["Seed", "Series A", "Series B", "Growth"],
   "molten-ventures": ["Series A", "Series B", "Growth", "Late Stage"],
   "softbank-vision-fund": ["Series B", "Growth", "Late Stage"],
   "peak-xv-partners": ["Seed", "Series A", "Series B", "Growth"],
    "eclipse-ventures": ["Seed", "Series A", "Series B", "Growth"],
  "qualcomm-ventures": ["Seed", "Series A", "Series B", "Growth"],
   "arch-venture-partners": ["Seed", "Series A", "Growth"],
   "dragoneer-investment-group": ["Series B", "Growth", "Late Stage"],
   "b-capital-group": ["Series B", "Series C", "Growth", "Late Stage"],
   "y-combinator": ["Pre-Seed", "Seed"],
   "kaszek-ventures": ["Seed", "Series A", "Series B", "Growth"],
   "canaan-partners": ["Seed", "Series A", "Growth"],
   "sosv": ["Pre-Seed", "Seed", "Series A"],
    "tcv": ["Series B", "Series C", "Growth", "Late Stage"],
   "dn-capital": ["Seed", "Series A", "Series B"],
   "bloomberg-beta": ["Pre-Seed", "Seed"],
   "comcast-ventures": ["Pre-Seed", "Seed", "Series A", "Series B", "Growth"],
   "rakuten-capital": ["Seed", "Series A", "Series B", "Growth"],
   "toyota-ventures": ["Seed", "Series A", "Series B"],
   "barclays-uk-ventures": ["Seed", "Series A", "Growth"],
   "chiratae-ventures": ["Seed", "Series A", "Series B", "Growth"],
   "5y-capital": ["Seed", "Series A", "Series B", "Growth"],
   "jafco-group": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
   "gobi-partners": ["Seed", "Series A", "Series B", "Growth"],
   "seedcamp": ["Pre-Seed", "Seed", "Series A", "Series B"],
   "high-tech-grunderfonds": ["Pre-Seed", "Seed"],
   "flagship-pioneering": ["Seed", "Series A", "Series B", "Growth"],
   "qed-investors": ["Seed", "Series A", "Series B", "Growth"],
   "breakthrough-energy-ventures": ["Seed", "Series A", "Series B", "Growth"],
   "orbimed": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
   "sapphire-ventures": ["Series A", "Series B", "Growth", "Late Stage"],
   "forerunner-ventures": ["Seed", "Series A", "Series B"],
   "f-prime-capital": ["Seed", "Series A", "Series B", "Growth"],
   "third-rock-ventures": ["Seed", "Series A", "Series B"],
   "lowercarbon-capital": ["Pre-Seed", "Seed", "Series A", "Series B"],
   "energy-impact-partners": ["Series A", "Series B", "Growth"],
   "forgepoint-capital": ["Seed", "Series A", "Series B", "Growth"],
   "nfx": ["Pre-Seed", "Seed"],
   "point-nine": ["Pre-Seed", "Seed"],
   "lakestar": ["Series A", "Series B", "Growth", "Late Stage"],
   "monashees": ["Seed", "Series A", "Series B", "Growth"],
   "east-ventures": ["Seed", "Series A", "Series B", "Growth"],
   "partech": ["Seed", "Series A", "Series B", "Growth"],
   "tlcom-capital": ["Pre-Seed", "Seed", "Series A", "Series B"],
   "yl-ventures": ["Seed", "Series A"],
   "congruent-ventures": ["Seed", "Series A", "Series B"],
   "canary": ["Pre-Seed", "Seed", "Series A"],
   "jungle-ventures": ["Seed", "Series A", "Series B", "Growth"],
   "cyberstarts": ["Seed", "Series A"],
   "pitango-venture-capital": ["Seed", "Series A", "Series B", "Growth"],
   "jerusalem-venture-partners": ["Seed", "Series A", "Growth"],
   "helios-investment-partners": ["Series B", "Growth", "Late Stage"],
   "ventures-platform": ["Pre-Seed", "Seed", "Series A"],
   "echovc-partners": ["Seed", "Series A", "Growth"],
   "voltron-capital": ["Pre-Seed", "Seed"],
   "norrsken22": ["Series A", "Series B"],
   "beco-capital": ["Pre-Seed", "Seed", "Series A", "Growth"],
   "venturesouq": ["Seed", "Series A"],
   "firstmark-capital": ["Seed", "Series A"],
   "social-capital": ["Seed", "Series A", "Growth"],
   "shield-capital": ["Seed", "Series A"],
   "future-africa": ["Pre-Seed", "Seed"],
   "novastar-ventures": ["Seed", "Series A", "Series B"],
   "enza-capital": ["Pre-Seed", "Seed", "Series A", "Series B"],
   "kawisafi-ventures": ["Series A", "Series B", "Growth"],
   "crossboundary": ["Growth", "Late Stage"],
   "launch-africa-ventures": ["Seed", "Series A"],
   "foundation-capital": ["Seed", "Series A", "Growth"],
   "nexus-venture-partners": ["Seed", "Series A"],
   "500-global": ["Pre-Seed", "Seed", "Series A"],
   "in-q-tel": ["Seed", "Series A", "Growth"],
   "rre-ventures": ["Seed", "Series A", "Series B", "Growth"],
   "8vc": ["Seed", "Series A", "Series B", "Growth"],
   "slow-ventures": ["Pre-Seed", "Seed", "Series A"],
   "primary-venture-partners": ["Pre-Seed", "Seed"],
   "lerer-hippeau": ["Seed", "Series A"],
   "boxgroup": ["Pre-Seed", "Seed", "Series A"],
   "pear-vc": ["Pre-Seed", "Seed", "Series A"],
   "upfront-ventures": ["Series A", "Growth"],
   "acrew-capital": ["Seed", "Series A"],
   "signalfire": ["Pre-Seed", "Seed", "Series A", "Series B"],
   "amazon-alexa-fund": ["Series A", "Series B", "Growth"],
   "gradient-ventures": ["Pre-Seed", "Seed", "Series A"],
   "greycroft": ["Seed", "Series A", "Series B", "Growth"],
   "scale-venture-partners": ["Series A", "Series B", "Growth"],
   "us-venture-partners": ["Pre-Seed", "Seed", "Series A", "Series B"],
   "canvas-prime": ["Series A", "Series B"],
   "revolution-ventures": ["Seed", "Series A", "Series B"],
   "homebrew": ["Pre-Seed", "Seed"],
   "cowboy-ventures": ["Seed", "Series A"],
   "zetta-venture-partners": ["Seed", "Series A"],
   "root-ventures": ["Pre-Seed", "Seed"],
   "radical-ventures": ["Pre-Seed", "Seed", "Series A"],
   "nventures": ["Series A", "Growth", "Late Stage"],
   "airbus-ventures": ["Seed", "Series A"],
   "applied-ventures": ["Seed", "Series A", "Growth"],
   "munich-re-ventures": ["Seed", "Series A", "Series B", "Growth"],
   "dawn-capital": ["Series A", "Series B", "Growth"],
   "notion-capital": ["Seed", "Series A", "Series B", "Growth"],
   "earlybird-venture-capital": ["Seed", "Series A", "Series B", "Growth"],
   "prosus-ventures": ["Seed", "Series A", "Growth"],
   "antler": ["Pre-Seed", "Seed", "Series A"],
   "trinity-ventures": ["Seed", "Series A", "Series B"],
   "shasta-ventures": ["Seed", "Series A", "Series B"],
   "openview-venture-partners": ["Series A", "Series B", "Growth"],
   "foundry-group": ["Seed", "Series A", "Series B"],
   "dcm-ventures": ["Seed", "Series A", "Series B", "Series C"],
   "octopus-ventures": ["Pre-Seed", "Seed", "Series A", "Series B", "Growth"],
   "gaingels": ["Series A", "Series B", "Growth"],
      "sinovation-ventures": ["Seed", "Series A", "Series B"],
      "target-global": ["Pre-Seed", "Seed", "Series A", "Series B", "Growth"],
      "qiming-venture-partners": ["Series A", "Series B", "Growth"],
      "oak-hc-ft": ["Series A", "Series B", "Growth"],
      "blueyard-capital": ["Pre-Seed", "Seed", "Series A"],
      "innovation-endeavors": ["Seed", "Series A", "Series B"],
      "draper-associates": ["Seed", "Series A"],
      "bdc-capital": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
   "threshold-ventures": ["Seed", "Series A", "Series B"],
      "paradigm": ["Seed", "Series A", "Series B", "Growth", "Late Stage"],
   "hustle-fund": ["Pre-Seed", "Seed"],
      "addition": ["Series A", "Series B", "Growth"],
      "almaz-capital": ["Seed", "Series A"],
      "blumberg-capital": ["Seed", "Series A"],
      "venrock": ["Seed", "Series A", "Series B"],
      "abingworth": ["Seed", "Series A", "Series B", "Growth"],
      "acton-capital": ["Series A", "Series B", "Growth"],
      "eqt-ventures": ["Series A", "Series B", "Growth"],
      "oxford-science-enterprises": ["Pre-Seed", "Seed", "Series A"],
      "impact-x-capital": ["Seed", "Series A"],
      "infinity-group": ["Series A", "Series B", "Growth"],
      "quest-ventures": ["Seed", "Series A"],
      "northern-light-venture-capital": ["Series A", "Series B", "Growth"],
      "source-code-capital": ["Series A", "Series B", "Growth", "Late Stage"],
   "atlas-venture": ["Seed", "Series A", "Series B"],
      "august-capital": ["Series A", "Series B", "Growth"],
      "seraphim-space": ["Seed", "Series A", "Growth"],
      "anthemis-group": ["Pre-Seed", "Seed", "Series A", "Series B"],
      "project-a-ventures": ["Pre-Seed", "Seed", "Series A"],
      "sofinnova-partners": ["Seed", "Series A", "Series B", "Growth"],
      "march-capital": ["Series A", "Series B", "Series C"],
      "airtree-ventures": ["Pre-Seed", "Seed", "Series A", "Series B"],
      "samsung-ventures": ["Series A", "Series B", "Growth"],
      "gaorong-capital": ["Series A", "Series B", "Growth"],
   "bond-capital": ["Growth", "Late Stage"],
      "deviation-capital": ["Seed", "Series A"],
      "obvious-ventures": ["Seed", "Series A"],
      "base10-partners": ["Seed", "Series A", "Series B"],
      "village-global": ["Pre-Seed", "Seed"],
      "tribe-capital": ["Seed", "Series A"],
      "storm-ventures": ["Seed", "Series A"],
   'cavalry-ventures': ['Pre-Seed', 'Seed'],
  'point72-ventures': ['Seed', 'Series A', 'Series B', 'Growth', 'Late Stage'],
  'playground-global': ['Seed', 'Series A'],
  'grishin-robotics': ['Seed', 'Series A'],
  'defy-partners': ['Seed', 'Series A'],
  'baukunst': ['Pre-Seed', 'Seed'],
  'mucker-capital': ['Pre-Seed', 'Seed', 'Series A'],
  'struck-capital': ['Pre-Seed', 'Seed'],
  'science-inc': ['Pre-Seed', 'Seed'],
  'soma-capital': ['Seed'],
  'vy-capital': ['Growth', 'Late Stage'],
  'mfv-partners': ['Seed', 'Series A'],
  'liquid2-ventures': ['Seed', 'Series A'],
  'unusual-ventures': ['Seed'],
  'collaborative-fund': ['Seed', 'Series A', 'Growth'],
  'shrug-capital': ['Seed'],
   'greenoaks-capital': ['Growth', 'Late Stage'], // explicit: "growth equity firm"
'altimeter-capital': ['Growth', 'Late Stage'], // explicit: "growth-stage technology companies, public and private"
'durable-capital-partners': ['Growth', 'Late Stage'], // explicit: "early-stage and durable growth companies" — tagged Growth/Late per actual public holdings (Coinbase, Affirm, Datadog)
'baillie-gifford': ['Growth', 'Late Stage'], // explicit: "global growth equity approach"
'electric-capital': ['Seed', 'Series A', 'Series B', 'Growth'], // explicit: "invests from seed through growth"
'variant-fund': ['Seed'], // explicit: "early-stage crypto fund"
'blockchain-capital': ['Seed', 'Series A', 'Series B', 'Growth'], // explicit: "seed through growth"
'elad-gil': ['Pre-Seed', 'Seed'], // explicit: "angel investor," pre-IPO backer
'not-boring-capital': ['Seed'], // explicit: "invests in early-stage startups"
'south-park-commons': ['Pre-Seed', 'Seed'], // explicit: "-1 to 0 investing," "very early-stage"
'contrary-capital': ['Seed'], // explicit: "early-stage startups"
'makers-fund': ['Seed', 'Series A'], // explicit: "seed to Series A"
'bitkraft-ventures': ['Seed', 'Series A', 'Series B', 'Growth'], // explicit: "all stages, from early seed to growth"
'foresite-capital': ['Seed', 'Series A', 'Series B', 'Growth'], // explicit: "invests across all stages"
'polaris-partners': ['Seed', 'Series A', 'Series B', 'Growth'], // explicit: "seed to growth"
'servicenow-ventures': ['Seed'], // explicit: "early-stage companies"
'speedinvest': ['Pre-Seed', 'Seed', 'Series A', 'Series B', 'Growth'], // explicit: "pre-seed to growth stages"
'creandum': ['Seed'], // explicit: "early-stage tech and healthcare startups"
'hv-capital': ['Seed', 'Series A', 'Series B', 'Growth', 'Late Stage'], // explicit: "seed through growth," "seed to IPO"
'vertex-ventures': ['Seed', 'Series A', 'Series B', 'Growth'], // explicit: "ranging from startups to growth"
'zhenfund': ['Seed', 'Series A'], // explicit: "seed and Series A stages"
'golden-gate-ventures': ['Seed'], // explicit: "early-stage tech"
'valor-capital-group': ['Seed'], // explicit: "seed to early-stage tech companies"
'allvp': ['Seed'], // explicit: "early-stage Latin American tech companies"
'cre-venture-capital': ['Seed', 'Series A'], // explicit: "seed to Series A"
'stv': ['Series A', 'Series B', 'Growth'], // explicit: "Series A through growth stages"

// Inferred from described public holdings, not a direct stage quote in source — flagging separately per your honesty standard:
'd1-capital-partners': ['Late Stage'], // holdings are all post-IPO/late private (Instacart, Robinhood, Rivian, Procore)
'whale-rock-capital-management': ['Late Stage'], // public equity fund, no private-stage language in source
'viking-global-investors': ['Late Stage'], // public equity hedge fund, no private-stage language in source
};

// ============================================================
// INVESTMENT PERFORMANCE LOOKUP — powers the dashboard on each
// firm's detail page. Every number here is a real, sourced figure
// gathered during that firm's research (see its thesis/timeline
// for the same facts in prose). Deliberately NOT populated for
// every firm or every field - where a solid number wasn't found,
// the field is simply omitted here, and the dashboard renderer
// skips it entirely rather than showing a placeholder or guess.
// Fill in more over time as research is done on more firms.
// ============================================================
const firmPerformance = {
  "kleiner-perkins": { totalPortfolio: 900 },
  "battery-ventures": { totalPortfolio: 450, ipoExits: 65, acquisitions: 185 },
  "gv": { totalPortfolio: 400 },
  "index-ventures": { totalPortfolio: 662, unicorns: 108 },
  "spark-capital": { totalPortfolio: 861 },
  "redpoint": { totalPortfolio: 465 },
  "crv": { totalPortfolio: 750, ipoExits: 80 },
  "union-square-ventures": { totalPortfolio: 130 },
  "first-round-capital": { totalPortfolio: 500 },
"ivp": { totalPortfolio: 400, ipoExits: 110 },
  "true-ventures": { totalPortfolio: 390, unicorns: 8, ipoExits: 5, acquisitions: 130 }
};

const firmGeography = {
  "battery-ventures": { secondary: ['United Kingdom', 'Israel'] },
  "gv": { secondary: ['United Kingdom'] },
  "ivp": { secondary: ['United Kingdom'] },
  "index-ventures": { secondary: ['United States'] }
};
