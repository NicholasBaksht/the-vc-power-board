/* ============================================================
   DATA-CAPITAL-SOURCES.JS
   BROADER CAPITAL SOURCES - the money that is not a tracked VC fund.

   WHY THIS IS A SEPARATE FILE FROM data-partners.js:
   a partner is a person INSIDE a firm the site tracks, and every
   partner feature (Best-Fit Partner, Observed Investment Behavior,
   Partner vs. Firm) is built on that relationship. The people and
   organizations here have no such parent firm - an angel invests
   personal money, a corporate venture arm answers to an operating
   company, a family office answers to a family. Modelling them as
   partners would either invent a firm that does not exist or
   corrupt firm-level statistics with money the firm never raised.

   TYPES:
     angel      an individual investing personal capital
     strategic  a corporate or corporate venture arm
     family     a family office
     syndicate  a rolling fund, syndicate or scout programme

   EVERY ENTRY FOLLOWS THE SAME EVIDENCE RULES AS PARTNERS:
   - an investment is recorded only when a source names THIS
     investor against THIS company; participation by an associated
     fund is never attribution;
   - stage and year require a source about that specific round,
     never an inference; unknown stays null;
   - aggregator databases are not evidence;
   - every non-null field is backed by a URL on its own row.

   SEEDED, NOT COMPLETE. The four entries below are a working seed
   so the section renders against real data. Growth happens through
   the same researched-batch pipeline used for partners.
   ============================================================ */

const CAPITAL_SOURCES = {

  "naval-ravikant": {
    name: "Naval Ravikant",
    type: "angel",
    role: "Co-Founder & Chairman, AngelList",
    basedIn: "San Francisco, California",
    focus: [],
    biography: "Naval Ravikant is the co-founder and chairman of AngelList, a platform for startups, investors and job seekers that also operates Product Hunt. He made early-stage personal investments in a number of companies that later became large, and is one of the most widely cited individual angel investors in US technology.",
    investments: [
      { name: "Uber", stage: null, year: null, yearPrecision: null,
        sector: "Mobility", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Naval_Ravikant", type: "press", checked: "2026-08-31" }] },
      { name: "Twitter", stage: null, year: null, yearPrecision: null,
        sector: "Consumer", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Naval_Ravikant", type: "press", checked: "2026-08-31" }] },
      { name: "Postmates", stage: null, year: null, yearPrecision: null,
        sector: "Consumer", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Naval_Ravikant", type: "press", checked: "2026-08-31" }] },
      { name: "Yammer", stage: null, year: null, yearPrecision: null,
        sector: "Enterprise Software", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Naval_Ravikant", type: "press", checked: "2026-08-31" }] },
      { name: "Stack Overflow", stage: null, year: null, yearPrecision: null,
        sector: "Developer Tools & Infrastructure", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Naval_Ravikant", type: "press", checked: "2026-08-31" }] }
    ],
    sources: [
      { label: "Wikipedia - Naval Ravikant", url: "https://en.wikipedia.org/wiki/Naval_Ravikant" }
    ]
  },

  "jason-calacanis": {
    name: "Jason Calacanis",
    type: "angel",
    role: "Angel investor; founder, LAUNCH",
    basedIn: "San Francisco, California",
    focus: [],
    biography: "Jason Calacanis is an angel investor who founded the Open Angel Forum in 2009 and later raised a fund to invest in startups from his LAUNCH conference. His best-known personal investment is Uber, made through Sequoia Capital's scout programme.",
    investments: [
      { name: "Uber", stage: null, year: null, yearPrecision: null,
        sector: "Mobility", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Jason_Calacanis", type: "press", checked: "2026-08-31" }] },
      { name: "Robinhood", stage: null, year: null, yearPrecision: null,
        sector: "Fintech", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Jason_Calacanis", type: "press", checked: "2026-08-31" }] },
      { name: "Wealthfront", stage: null, year: null, yearPrecision: null,
        sector: "Fintech", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Jason_Calacanis", type: "press", checked: "2026-08-31" }] },
      { name: "Desktop Metal", stage: null, year: null, yearPrecision: null,
        sector: "Industrial & Manufacturing Technology", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Jason_Calacanis", type: "press", checked: "2026-08-31" }] },
      { name: "DataStax", stage: null, year: null, yearPrecision: null,
        sector: "Developer Tools & Infrastructure", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Jason_Calacanis", type: "press", checked: "2026-08-31" }] },
      { name: "Thumbtack", stage: null, year: null, yearPrecision: null,
        sector: "Consumer", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Jason_Calacanis", type: "press", checked: "2026-08-31" }] },
      { name: "Superhuman", stage: null, year: null, yearPrecision: null,
        sector: "Enterprise Software", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Jason_Calacanis", type: "press", checked: "2026-08-31" }] },
      { name: "Trello", stage: null, year: null, yearPrecision: null,
        sector: "Enterprise Software", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Jason_Calacanis", type: "press", checked: "2026-08-31" }] },
      { name: "Calm", stage: null, year: 2018, yearPrecision: "year",
        sector: "Consumer Health", subsector: null, role: null,
        evidence: [{ url: "https://en.wikipedia.org/wiki/Jason_Calacanis", type: "press", checked: "2026-08-31" }] }
    ],
    sources: [
      { label: "Wikipedia - Jason Calacanis", url: "https://en.wikipedia.org/wiki/Jason_Calacanis" }
    ]
  },

  "esther-dyson": {
    name: "Esther Dyson",
    type: "angel",
    role: "Angel investor; executive founder, Wellville",
    basedIn: "New York, New York",
    focus: [],
    biography: "Esther Dyson is an angel investor and the founder of EDventure Holdings, which she bought from Ben Rosen in 1983 and sold to CNET Networks in 2004. She was the founding chairman of ICANN from 1998 to 2000 and sat on the board of Yandex until March 2022.",
    investments: [
      { name: "Yandex", stage: null, year: null, yearPrecision: null,
        sector: "Consumer", subsector: null, role: "board",
        evidence: [{ url: "https://en.wikipedia.org/wiki/Esther_Dyson", type: "press", checked: "2026-08-31" }] }
    ],
    sources: [
      { label: "Wikipedia - Esther Dyson", url: "https://en.wikipedia.org/wiki/Esther_Dyson" }
    ]
  }

};
