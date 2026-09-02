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

   QUALIFICATION GATE. An entry appears here only if the person is
   CURRENTLY an active independent investor AND does it as a major
   or full-time activity. Someone who now runs a fund belongs in
   partner data instead; someone who has stopped belongs nowhere.
   This gate is why the section is small. Batch 1: of 50 researched
   candidates, 27 were rejected and documented - eight because they
   now run funds, five for having no usable public record, four
   because the name could not be resolved to one person, three for
   portfolios existing only on scraped databases, three who are no
   longer active, two occasional founder-angels, one advisor with no
   verified investments, and one who has died.

   STATED FOCUS IS NOT OBSERVED BEHAVIOR. statedSectorFocus and
   statedStageFocus record only what a person says they invest in.
   What they have actually done is computed from the investment rows
   and always shown with its sample size. The two are never merged.

   BATCH 2 (2026-09-02): 20 candidates screened, 7 accepted, 13
   rejected - seven who run funds, three with no attributable
   personal investment, one active only historically, one advisor
   with no investments, and one occasional founder-angel. Two
   accepted records carry no investment rows: the person qualifies
   on sourced current activity but no source names an individual
   company, which is recorded rather than filled.

   RESEARCHED, NOT COMPLETE. Public records are not a full account of
   anyone's investing. An investor with three rows here may have made
   thirty; the three are simply what a source establishes.
   ============================================================ */

const CAPITAL_SOURCES = {

  "esther-dyson": {
    name: "Esther Dyson",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "Her personal site is published at edventure.com and the Wellville team bio describes her as 'chairman of EDventure Holdings', but Wikipedia records EDventure Holdings as sold to CNET Networks in 2004. No current investing entity could be confirmed, so vehicle is left blank rather than asserted.",
    role: "Angel investor, author and board member",
    basedIn: null,
    education: [
      "Studied economics, Harvard University"
    ],
    previousExperience: [
      "Fact-checker, Forbes (early career)",
      "Owner and editor, EDventure Holdings and the Release 1.0 newsletter (1983-2006)",
      "Founding chairman, ICANN (1998-2000)",
      "Board member, Yandex (until March 2022)",
      "Executive founder, Wellville, a 10-year five-community nonprofit health project (2013-2024)"
    ],
    operatingBackground: [
      "journalist",
      "publisher",
      "founder"
    ],
    statedSectorFocus: [
      "Online services",
      "Health care and medicine",
      "Logistics",
      "Artificial intelligence",
      "Emerging markets",
      "Space travel"
    ],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Industry Network",
        evidence: "Founding chairman of ICANN from 1998 to 2000, and owner and editor of the Release 1.0 technology newsletter and EDventure Holdings from 1983 until 2006.",
        url: "https://en.wikipedia.org/wiki/Esther_Dyson"
      }
    ],
    boardSeats: [
      {
        company: "Avanlee Care",
        status: "current",
        url: "https://www.edventure.com/"
      },
      {
        company: "BAMF Health",
        status: "current",
        url: "https://www.edventure.com/"
      },
      {
        company: "Medesk",
        status: "current",
        url: "https://www.edventure.com/"
      },
      {
        company: "PressReader",
        status: "current",
        url: "https://www.edventure.com/"
      },
      {
        company: "SWVL",
        status: "current",
        url: "https://www.edventure.com/"
      },
      {
        company: "The Commons Project",
        status: "current",
        url: "https://www.edventure.com/"
      },
      {
        company: "Charity Navigator",
        status: "current",
        url: "https://www.edventure.com/"
      },
      {
        company: "ExpandED Schools",
        status: "current",
        url: "https://www.edventure.com/"
      },
      {
        company: "IT History Society",
        status: "current",
        url: "https://www.edventure.com/"
      },
      {
        company: "Yandex",
        status: "former",
        url: "https://en.wikipedia.org/wiki/Esther_Dyson"
      }
    ],
    advisoryRoles: [
      {
        company: "Sustainable Media Center",
        role: "Advisory board member",
        url: "https://www.edventure.com/"
      }
    ],
    syndicateMemberships: [
      {
        name: "New York Angels",
        url: "https://www.newyorkangels.com/members/esther-dyson"
      }
    ],
    geographicPatterns: [
      "United States",
      "Emerging markets"
    ],
    careerMilestones: [
      {
        year: 1983,
        event: "Buys the business from her employer Ben Rosen, renaming it EDventure Holdings and the newsletter Release 1.0."
      },
      {
        year: 1998,
        event: "Becomes founding chairman of ICANN, serving as a director until November 2000."
      },
      {
        year: 2004,
        event: "Sells EDventure Holdings to CNET Networks."
      },
      {
        year: 2008,
        event: "Trains as a backup cosmonaut at Star City outside Moscow from October 2008 to March 2009."
      },
      {
        year: 2013,
        event: "Founds Wellville, a 10-year nonprofit project across five US communities."
      },
      {
        year: 2022,
        event: "Leaves the board of Yandex in March 2022."
      },
      {
        year: 2024,
        event: "Wellville's 10-year project concludes."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [
      {
        company: "Alphabet",
        ticker: "GOOGL",
        url: "https://www.edventure.com/"
      },
      {
        company: "Block",
        ticker: "XYZ",
        url: "https://www.edventure.com/"
      },
      {
        company: "Bloom Energy",
        ticker: "BE",
        url: "https://www.edventure.com/"
      },
      {
        company: "Clover Health",
        ticker: "CLOV",
        url: "https://www.edventure.com/"
      },
      {
        company: "EPAM Systems",
        ticker: "EPAM",
        url: "https://www.edventure.com/"
      },
      {
        company: "Eventbrite",
        ticker: "EB",
        url: "https://www.edventure.com/"
      },
      {
        company: "Hinge Health",
        ticker: "HNGE",
        url: "https://www.edventure.com/"
      },
      {
        company: "UiPath",
        ticker: "PATH",
        url: "https://www.edventure.com/"
      },
      {
        company: "Zillow Group",
        ticker: "Z",
        url: "https://www.edventure.com/"
      }
    ],
    strategicValue: "Dyson has published on and invested in technology since 1983, when she took over the Release 1.0 newsletter and EDventure Holdings, and she was founding chairman of ICANN from 1998 to 2000, which gives her long-standing reach across the technology industry. She maintains current board seats at portfolio companies including Avanlee Care, which she chairs, BAMF Health, Medesk, PressReader and SWVL, so she can serve as a working director rather than a passive cheque. Her stated interests in health care and medicine, emerging markets and space travel match a portfolio that includes companies operating in Africa, South Asia and the Middle East.",
    biography: "Esther Dyson is an angel investor and author who bought the technology newsletter business from her employer Ben Rosen in 1983, renaming it EDventure Holdings and the newsletter Release 1.0, and edited it until 2006. She was the founding chairman of ICANN from 1998 to 2000, sold EDventure Holdings to CNET Networks in 2004, and trained as a backup cosmonaut at Star City outside Moscow between October 2008 and March 2009. In 2013 she founded Wellville, a 10-year nonprofit project working with five US communities on equitable wellbeing, which ran to 2024. Her own site describes her as an investor, journalist, author, commentator and philanthropist, and as a board member and angel investor in start-ups mostly in online services, health care and medicine, logistics, artificial intelligence, emerging markets and space travel. She chairs Avanlee Care and The Commons Project, sits on the boards of Charity Navigator, ExpandED Schools and the IT History Society, and is writing a second book, 'Term Limits', for MIT Press.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Avanlee Care",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "family caregiving app",
        role: "Chair",
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "BAMF Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Healthcare",
        subsector: "molecular imaging and theranostics",
        role: "Board member",
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Medesk",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "clinic management software",
        role: "Board member",
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "PressReader",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "digital newspaper and magazine distribution",
        role: "Board member",
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "SWVL",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Mobility",
        subsector: "mass transit booking",
        role: "Board member",
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "4D Healthware",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "connected patient data",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Abridge.ai",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "AI clinical documentation",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Applied Proteomics",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Diagnostics",
        subsector: "proteomic blood tests",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Big Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "digital therapeutics for sleep and mental health",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Cherish Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Medical Devices",
        subsector: "contactless health sensing",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Circadia",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Medical Devices",
        subsector: "contactless patient monitoring",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Clover Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Healthcare",
        subsector: "Medicare Advantage insurance",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Crohnology",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "patient network",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Devoted Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Healthcare",
        subsector: "Medicare Advantage insurance",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Eligible",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "healthcare insurance APIs",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Function Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer Health",
        subsector: "consumer lab testing",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Hinge Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "digital musculoskeletal care",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "HealthTap",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "telehealth",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Ilara Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Diagnostics",
        subsector: "diagnostics for primary care clinics in Africa",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Keas",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "employee wellness",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "LB Pharma",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Biotech",
        subsector: "neuropsychiatric drug development",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Litmus Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "clinical trial data science",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "MedicalAlgorithmics",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Diagnostics",
        subsector: "cardiac diagnostics",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Medivo",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Diagnostics",
        subsector: "lab diagnostics data",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Nanowear",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Medical Devices",
        subsector: "wearable diagnostic sensors",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "NextSense",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Medical Devices",
        subsector: "in-ear biosensing",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Nuna Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "healthcare data analytics",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Omada Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "digital chronic disease programmes",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "OpenWater",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Medical Devices",
        subsector: "optical medical imaging",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Patients Know Best",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "patient-controlled health records",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Praava Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Healthcare",
        subsector: "clinics in Bangladesh",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Solera",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "preventive care network",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "StartUp Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "health innovation company",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Supportiv",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "peer support",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Syllable",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "healthcare conversational AI",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Turbine",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Biotech",
        subsector: "cell simulation for drug discovery",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Valkee",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Medical Devices",
        subsector: "bright light therapy device",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Alphabet",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "internet search and advertising",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Block",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "payments",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Bloom Energy",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Climate & Energy",
        subsector: "solid oxide fuel cells",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Devpost",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Developer Tools & Infrastructure",
        subsector: "hackathon platform",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "EPAM",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "software engineering services",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "ESAI.ai",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "AI",
        subsector: "AI applications",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Eventbrite",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "event ticketing",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Factual",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Developer Tools & Infrastructure",
        subsector: "location data",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "GoodData",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "business intelligence",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "GOQII",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer Health",
        subsector: "wearables and coaching",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Grasshopper Bancorp",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "digital business banking",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "GridPoint",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Climate & Energy",
        subsector: "building energy management",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Nomanini",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "merchant payments in Africa",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Oradian",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "core banking software for financial inclusion",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "School Loop",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "EdTech",
        subsector: "school communication software",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Technorati",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "blog search and media",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Trusted ID",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Cybersecurity",
        subsector: "identity protection",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Uber",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Mobility",
        subsector: "ride hailing",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "UiPath",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "robotic process automation",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "You.com",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "AI",
        subsector: "AI search",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Zillow",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Real Estate Tech",
        subsector: "online real estate marketplace",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Agritecture",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Agtech",
        subsector: "controlled environment agriculture",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Icon Aircraft",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Hardware",
        subsector: "light sport aircraft",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Space Adventures",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Space",
        subsector: "private spaceflight",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "SpaceX",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Space",
        subsector: "launch vehicles and satellites",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Trella",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Logistics",
        subsector: "freight marketplace",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "WorldView",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Space",
        subsector: "stratospheric balloons and earth imaging",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "ZeroG",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Space",
        subsector: "parabolic weightless flights",
        role: null,
        evidence: [
          {
            url: "https://www.edventure.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Personal site (portfolio and current roles)",
        url: "https://www.edventure.com/"
      },
      {
        label: "Wikipedia biography",
        url: "https://en.wikipedia.org/wiki/Esther_Dyson"
      },
      {
        label: "New York Angels member profile",
        url: "https://www.newyorkangels.com/members/esther-dyson"
      },
      {
        label: "Angel Fair Africa 2025 keynote announcement",
        url: "https://www.ericosiakwan.com/2025/07/01/esther-dyson-to-keynote-12th-angel-fair-africa-at-google-nyc/"
      },
      {
        label: "Wellville team page (legacy bio)",
        url: "https://wellville.net/about/team/"
      },
      {
        label: "Substack newsletter, In the pool with Esther",
        url: "https://estherdyson.substack.com/about"
      }
    ]
  },

  "johann-hansmann": {
    name: "Johann “Hansi” Hansmann",
    type: "angel",
    investingStatus: "active",
    investingMode: "family office",
    vehicle: "Hansmann Family Office",
    vehicleNote: "Its own site describes it as “a first generation, entrepreneurial Single Family Office” investing across venture capital, private equity, real estate and public markets; hansmengroup.com now redirects to hansmann.fo. Austrian press also calls the vehicle the Hans(wo)men Group and reported roughly EUR 120 million under management with about 40 active startup holdings (brutkasten, September 2024). The family office is an LP in venture funds but no source shows him as a GP or partner at an institutional venture fund.",
    role: "Business angel; principal of the Hansmann Family Office",
    basedIn: "Austria",
    education: [],
    previousExperience: [],
    operatingBackground: [],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Lead",
    capabilities: [
      {
        capability: "Finance",
        evidence: "Runs the Hansmann Family Office, which invests across venture capital, private equity, real estate and public markets; Austrian press reported roughly EUR 120 million under management and about 40 active startup holdings, supported by a hired portfolio-management team.",
        url: "https://brutkasten.com/artikel/hansmann-moechte-irgendwann-beginnen-persoenlich-weniger-involviert-zu-sein"
      },
      {
        capability: "Industry Network",
        evidence: "Received a lifetime achievement award at the Austrian Business Angel of the Year 2023 awards; his family office states that it backs founders through “strategic partnerships and deep ecosystem access”.",
        url: "https://brutkasten.com/artikel/hansi-hansmann-goat"
      }
    ],
    boardSeats: [],
    advisoryRoles: [],
    syndicateMemberships: [],
    geographicPatterns: [
      "Austria"
    ],
    careerMilestones: [
      {
        year: 2023,
        event: "Receives a lifetime achievement award at the Austrian Business Angel of the Year awards."
      },
      {
        year: 2025,
        event: "Leads the seed round of Vienna wealthtech WeR."
      },
      {
        year: 2026,
        event: "Invests a mid-six-figure sum in healthtech startup One100 through the family office."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "He runs a single family office with a portfolio of roughly 40 active startup holdings and a dedicated portfolio-management team, so backed founders get structured post-investment support rather than a passive cheque. He led the seed round of WeR in June 2025, which shows he will price and anchor a round rather than only follow. His portfolio and deal activity are concentrated in Austria, making him most useful to founders building in that market.",
    biography: "Johann “Hansi” Hansmann is an Austrian business angel who invests through the Hansmann Family Office, described on its own site as a first-generation entrepreneurial single family office. Austrian outlet brutkasten reported in September 2024 that the vehicle, also known as the Hans(wo)men Group, held roughly EUR 120 million under management across about 40 active startup investments, and that he had hired a small professional team to manage the portfolio. In the same interview he said “we are very active investors with a large portfolio” while noting he would eventually like to be less personally involved. He received a lifetime achievement award at the Austrian Business Angel of the Year 2023 awards. He remains active: he led the seed round of wealthtech startup WeR in June 2025 and invested a mid-six-figure sum in healthtech startup One100 in May 2026.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "One100",
        stage: null,
        year: 2026,
        yearPrecision: "year",
        sector: "Digital Health",
        subsector: "AI telephone assistant for medical practices",
        role: null,
        evidence: [
          {
            url: "https://brutkasten.com/artikel/one100-hansmann-investiert-sechsstellig-in-healthtech-startup-der-hokify-gruender",
            type: "deal-announcement",
            checked: "2026-09-02"
          },
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "WeR",
        stage: "Seed",
        year: 2025,
        yearPrecision: "year",
        sector: "Fintech",
        subsector: "B2B wealthtech for private banks and family offices",
        role: "Lead investor",
        evidence: [
          {
            url: "https://brutkasten.com/artikel/wer-millioneninvestment",
            type: "deal-announcement",
            checked: "2026-09-02"
          },
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Doshi",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Eco Mio",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Fynk",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Glacier",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Haelsi",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Helferline",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "hello again",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Hellobello",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Journi",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Leaders 21",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Linemetrics",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "maany",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Meetoptics",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "mimo",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "newsrooms",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Ohana",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Propcorn",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Reebuild",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Shadowmap",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "shopstory",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Storebox",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Whatchado",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "9am Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Anyline",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Busuu",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Codara",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "coinpanion",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "consentiv",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Consola Finance",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Credi 2",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Diagnosia",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Durchblicker.at",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "kiweno",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "mySugr",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Playbrush",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Runtastic",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "shpock",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "swelly",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Tractive",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "MyClubs",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Dvel",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Holvi",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "iyzico",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "techbold",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Vamida",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Vresh",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "pioneers",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "ahead",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Blaine",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Donnerstag.ai",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "EPIX",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "IMD Bio",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Mavoco",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Second Nature",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Terraspark",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "The Blue Box",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "zero third",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://hansmann.fo/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Hansmann Family Office (own site)",
        url: "https://hansmann.fo/"
      },
      {
        label: "brutkasten - lifetime achievement award, Sept 2023",
        url: "https://brutkasten.com/artikel/hansi-hansmann-goat"
      },
      {
        label: "brutkasten interview, Sept 2024",
        url: "https://brutkasten.com/artikel/hansmann-moechte-irgendwann-beginnen-persoenlich-weniger-involviert-zu-sein"
      },
      {
        label: "brutkasten - WeR seed round, June 2025",
        url: "https://brutkasten.com/artikel/wer-millioneninvestment"
      },
      {
        label: "brutkasten - One100 investment, May 2026",
        url: "https://brutkasten.com/artikel/one100-hansmann-investiert-sechsstellig-in-healthtech-startup-der-hokify-gruender"
      }
    ]
  },

  "ari-korhonen": {
    name: "Ari Korhonen",
    type: "angel",
    investingStatus: "active",
    investingMode: "angel vehicle",
    vehicle: "Lagoon Capital",
    vehicleNote: "Lagoon Capital (lagooncapital.fi) is described on its own site as an angel investment firm founded by Ari Korhonen; a UK entity name 'Lagoon Capital Ltd' also appears in his own profiles but was not independently confirmed from a registry.",
    role: "Founder of Lagoon Capital; full-time angel investor",
    basedIn: "Finland",
    education: [
      "Diplomi-insinoori (M.Sc. Engineering), LUT University, 1985",
      "Honorary Doctorate in Economics and Business Administration, LUT University, 2017"
    ],
    previousExperience: [
      "Entrepreneur and founder, Komartek Oyj (energy and utilities software; ~20 years, sold to WM-data in 2004)",
      "Vice President, Energy & Utilities, WM-data (now CGI), after the 2004 acquisition"
    ],
    operatingBackground: [
      "founder",
      "software executive"
    ],
    statedSectorFocus: [
      "SaaS",
      "FinTech",
      "AdTech",
      "e-Commerce",
      "AI",
      "IoT",
      "VR/AR",
      "content",
      "marketplaces",
      "games"
    ],
    statedStageFocus: [
      "Early stage"
    ],
    checkSize: "EUR 25k-200k (sweet spot EUR 75k; up to EUR 500k per company including follow-ons)",
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Operations",
        evidence: "Ran the software company Komartek Oyj as entrepreneur for about twenty years, exporting to ten countries, until its 2004 sale to WM-data; afterwards VP Energy & Utilities at WM-data.",
        url: "https://www.boardman.fi/henkilosto/ari-korhonen/"
      },
      {
        capability: "Fundraising",
        evidence: "Tesi's profile states his support to portfolio companies spans financing rounds and exit negotiations.",
        url: "https://tesi.fi/en/article/business-angel-as-a-profession-ari-korhonen-is-a-helpdesk-for-startups/"
      },
      {
        capability: "Hiring",
        evidence: "Tesi's profile states his support to portfolio companies covers executive recruitment and incentive structures.",
        url: "https://tesi.fi/en/article/business-angel-as-a-profession-ari-korhonen-is-a-helpdesk-for-startups/"
      },
      {
        capability: "Industry Network",
        evidence: "Co-founder of FiBAN (Finnish Business Angels Network); Boardman partner and member of the OHJ owners/board/management forum since 2015; Lagoon Capital's site describes participation through Seedcamp, 500 Startups, True Global Ventures and Spintop.",
        url: "https://lagooncapital.fi/about/"
      }
    ],
    boardSeats: [
      {
        company: "NinaData",
        status: "current",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        company: "Laserhub",
        status: "current",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        company: "Videobot",
        status: "current",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        company: "Severa",
        status: "former",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        company: "Paytrail",
        status: "former",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        company: "Octo3",
        status: "former",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        company: "Miradore",
        status: "former",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        company: "Klevu",
        status: "former",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        company: "SurveyPal",
        status: "former",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        company: "DealDash",
        status: "former",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        company: "Trifecta",
        status: "former",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        company: "Sympa",
        status: "former",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        company: "Infomo",
        status: "former",
        url: "https://lagooncapital.fi/portfolio/"
      }
    ],
    advisoryRoles: [
      {
        company: "Promo Republic",
        status: "current",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        company: "Spintop Ventures",
        status: "current",
        url: "https://ecosystem.fi/eco/lagoon-capital/"
      },
      {
        company: "Tesi (Finnish Industry Investment) Advisory Board",
        status: "former-or-current-unclear",
        url: "https://tesi.fi/en/article/business-angel-as-a-profession-ari-korhonen-is-a-helpdesk-for-startups/"
      },
      {
        company: "LUT University Advisory Board",
        status: "current",
        url: "https://www.boardman.fi/henkilosto/ari-korhonen/"
      }
    ],
    syndicateMemberships: [
      {
        name: "FiBAN (Finnish Business Angels Network) - co-founder",
        url: "https://tesi.fi/en/article/business-angel-as-a-profession-ari-korhonen-is-a-helpdesk-for-startups/"
      },
      {
        name: "Boardman (partner)",
        url: "https://www.boardman.fi/henkilosto/ari-korhonen/"
      }
    ],
    geographicPatterns: [
      "Finland",
      "Germany",
      "Czech Republic",
      "Switzerland",
      "Spain",
      "Hong Kong",
      "United Kingdom"
    ],
    careerMilestones: [
      {
        year: 2004,
        event: "Komartek Oyj, the software company he ran for about twenty years, is sold to WM-data (now CGI); he becomes VP Energy & Utilities."
      },
      {
        year: 2007,
        event: "Begins angel investing; Lagoon Capital dates its support of technology companies from this year."
      },
      {
        year: 2015,
        event: "Receives the EBAN Lifetime Achievement Award."
      },
      {
        year: 2017,
        event: "Awarded an Honorary Doctorate in Economics and Business Administration by LUT University."
      }
    ],
    exitCount: 13,
    exitCountBasis: "stated by source",
    publicHoldings: [],
    strategicValue: "Korhonen spent about two decades building and exporting a software company before selling it, then moved full-time into angel investing, so he can speak to both the operating and the ownership side of a Finnish software business. His own site and Tesi's profile describe his help as concentrated on financing rounds, executive recruitment, incentive structures and exit negotiations, and he has chaired or sat on the boards of a large number of his holdings. As a co-founder of FiBAN and a Boardman partner he is embedded in the Finnish angel and board-work network.",
    biography: "Ari Korhonen is a Finnish angel investor and the founder of Lagoon Capital, an angel investment firm backing software-powered companies. He trained as a diplomi-insinoori at LUT University in 1985 and spent roughly twenty years as an entrepreneur at Komartek Oyj, an energy and utilities software company that exported to ten countries and was acquired by WM-data (now CGI) in 2004, after which he served as Vice President for Energy & Utilities. He has invested as an angel since 2007 and co-founded FiBAN, the Finnish Business Angels Network. Lagoon Capital's site records support to more than 55 technology companies with 13 successful exits, and lists 15 current holdings in which he is variously investor, chairman, board member or board observer. He is a Boardman partner and holds an honorary doctorate from LUT University, which awarded it in 2017.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "NinaData",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: "Investor & Chairman of the Board",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Aplicom",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: "Investor",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "XMLdation",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "payments messaging testing",
        role: "Investor",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "360 Cities",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: "Investor & Board Observer",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Flashnode",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: "Investor",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Jobilla",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "recruitment marketing",
        role: "Investor",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Promo Republic",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "social media marketing",
        role: "Investor, Senior Advisor & Board Observer",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Boksi",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "creator marketing marketplace",
        role: "Investor",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Laserhub",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Industrial & Manufacturing Technology",
        subsector: "sheet metal manufacturing platform",
        role: "Investor & Chairman of the Board",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Happeo",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "intranet / digital workplace",
        role: "Investor",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Sisua Digital",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "robotic process automation",
        role: "Investor",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Videobot",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "website video engagement",
        role: "Investor & Board Member",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Strand Properties",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Real Estate Tech",
        subsector: null,
        role: "Investor",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Rise Financial Group",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: "Investor",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Fronterax Technologies",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: "Investor",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Severa",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "professional services automation",
        role: "Investor & Chairman of the Board (exited)",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "The Switch",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Climate & Energy",
        subsector: "electrical drive trains",
        role: "Investor (exited)",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Paytrail",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "online payments",
        role: "Investor & Chairman of the Board (exited)",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Octo3",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: "Investor & Chairman of the Board (exited)",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Small Giant",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Gaming",
        subsector: "mobile games",
        role: "Investor (exited)",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Infomo",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: "Investor & Board Member (exited)",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Galton",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: "Investor & Board Observer (exited)",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Sympa",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "HR software",
        role: "Investor & Board Member (exited)",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Miradore",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "device management",
        role: "Investor & Chairman of the Board (exited)",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Klevu",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "ecommerce search",
        role: "Investor & Chairman of the Board (exited)",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "SurveyPal",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "survey and feedback",
        role: "Investor & Chairman of the Board (exited)",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "DealDash",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Ecommerce",
        subsector: "online auctions",
        role: "Investor & Chairman of the Board (exited)",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Trifecta",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: "Investor & Chairman of the Board (exited)",
        evidence: [
          {
            url: "https://lagooncapital.fi/portfolio/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "MariaDB",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Developer Tools & Infrastructure",
        subsector: "database",
        role: null,
        evidence: [
          {
            url: "https://tesi.fi/en/article/business-angel-as-a-profession-ari-korhonen-is-a-helpdesk-for-startups/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Flowplayer",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: "online video player",
        role: null,
        evidence: [
          {
            url: "https://tesi.fi/en/article/business-angel-as-a-profession-ari-korhonen-is-a-helpdesk-for-startups/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Lagoon Capital - About",
        url: "https://lagooncapital.fi/about/"
      },
      {
        label: "Lagoon Capital - Portfolio",
        url: "https://lagooncapital.fi/portfolio/"
      },
      {
        label: "Tesi - Business angel as a profession (2019)",
        url: "https://tesi.fi/en/article/business-angel-as-a-profession-ari-korhonen-is-a-helpdesk-for-startups/"
      },
      {
        label: "Boardman - Ari Korhonen partner page",
        url: "https://www.boardman.fi/henkilosto/ari-korhonen/"
      },
      {
        label: "Ecosystem.fi - Lagoon Capital profile",
        url: "https://ecosystem.fi/eco/lagoon-capital/"
      }
    ]
  },

  "katie-dunn": {
    name: "Katie Dunn",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "No named angel vehicle, fund or SPV is stated on her own site or in any source located; she publishes a personal portfolio only.",
    role: "Angel investor, startup advisor and board director",
    basedIn: null,
    education: [],
    previousExperience: [
      "Commercial real estate finance, banks and financial institutions (25+ year career; financed more than \$10 billion)"
    ],
    operatingBackground: [
      "banker"
    ],
    statedSectorFocus: [
      "Technology",
      "Consumer packaged goods"
    ],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Finance",
        evidence: "25+ year commercial real estate finance and banking career, during which she financed more than \$10 billion in commercial real estate.",
        url: "https://www.katiedunn.com/"
      },
      {
        capability: "Fundraising",
        evidence: "Founder of The Masthead Strategy, through which she advises founders on fundraising strategy, including coaching and fundraising guides.",
        url: "https://www.themastheadstrategy.com/"
      }
    ],
    boardSeats: [
      {
        company: "Outcast Brands",
        status: "current",
        url: "https://www.katiedunn.com/"
      },
      {
        company: "Fierce Foundry",
        status: "current",
        url: "https://www.katiedunn.com/"
      },
      {
        company: "Enthuse Foundation",
        status: "current",
        url: "https://www.katiedunn.com/"
      }
    ],
    advisoryRoles: [
      {
        company: "InPress",
        note: "Listed on her own portfolio page as \"InPress (Advisory Board)\".",
        url: "https://www.katiedunn.com/"
      }
    ],
    syndicateMemberships: [],
    geographicPatterns: [
      "United States"
    ],
    careerMilestones: [],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "A 25+ year commercial real estate finance and banking career in which she financed more than \$10 billion gives her direct experience of underwriting, financial modelling and lender diligence. Through The Masthead Strategy she works with founders specifically on fundraising strategy, and she holds current board seats at Outcast Brands, Fierce Foundry and the Enthuse Foundation. Her publicly listed portfolio is concentrated in consumer packaged goods and early-stage technology companies led by underrepresented founders.",
    biography: "Katie Dunn is a US angel investor, startup advisor and board director. She spent 25+ years in commercial real estate finance at banks and financial institutions, financing more than \$10 billion, before moving to funding and supporting founders full-time. She publishes an open portfolio on her own site of over 30 angel investments, stating that she invests primarily in underrepresented founders - LGBTQIA+, BIPOC and women - in technology and consumer packaged goods based in the US. She is the founder of The Masthead Strategy, which provides fundraising strategy coaching and guides to founders, and serves on the boards of Outcast Brands, Fierce Foundry and the Enthuse Foundation. She was interviewed as an active angel investor in December 2025.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Blind Tiger",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "beverage & hospitality",
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Cheeky Cocktails",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "beverage & hospitality",
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Cheersy",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "beverage & hospitality",
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "De Soi",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "beverage & hospitality",
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Fabrik",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "beverage & hospitality",
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Juliet Wine",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "beverage & hospitality",
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Outcast Brands",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "beverage & hospitality",
        role: "Board director (board seat cited separately)",
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Clickvoyant",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Fathom",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Fierce Foundry",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: "Board director (board seat cited separately)",
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Forecastr",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Giide",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Goodword",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Haloo",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Hubble",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Regalytics",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Web3Pro",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: "Marked \"Inactive\" on her portfolio page",
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Conscious Good",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "entertainment / media",
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Folk Hero and Funny Guy",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "entertainment / media",
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Redwood Musical",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "entertainment / media",
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Another Tomorrow",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "clothing & fashion",
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Seen",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "clothing & fashion",
        role: "Marked \"Inactive\" on her portfolio page",
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Sniffe & Likkit",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "pets",
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Elements of Balance",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer Health",
        subsector: "health & wellness",
        role: "Marked \"Inactive\" on her portfolio page",
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Hey Jane",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer Health",
        subsector: "health & wellness",
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Tampon Tribe",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer Health",
        subsector: "health & wellness",
        role: "Marked \"Debt Investment\" on her portfolio page",
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "WTHN",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer Health",
        subsector: "health & wellness",
        role: null,
        evidence: [
          {
            url: "https://www.katiedunn.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Personal site and open portfolio page",
        url: "https://www.katiedunn.com/"
      },
      {
        label: "The Masthead Strategy (her fundraising advisory business)",
        url: "https://www.themastheadstrategy.com/"
      },
      {
        label: "The North - advisor bio",
        url: "https://findyournorth.co/advisors/katie-dunn"
      },
      {
        label: "The Good Food CFO interview, 22 December 2025",
        url: "https://thegoodfoodcfo.substack.com/p/angel-investor-katie-dunn-warm-intros"
      }
    ]
  },

  "todd-goldberg": {
    name: "Todd Goldberg",
    type: "angel",
    investingStatus: "active",
    investingMode: "angel vehicle",
    vehicle: "Todd & Rahul Capital",
    vehicleNote: "Co-run with Rahul Vohra. Previously branded 'Todd & Rahul's Angel Fund'; toddandrahulangelfund.com now redirects to toddandrahulcapital.com. Investment rows below come from this joint vehicle and are not solely Goldberg's personal cheques.",
    role: "Co-founder, Todd & Rahul Capital",
    basedIn: null,
    education: [],
    previousExperience: [
      "Founder, Eventjoy (acquired by Ticketmaster)"
    ],
    operatingBackground: [
      "founder"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: "USD 300k-500k",
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Product",
        evidence: "Founded Eventjoy, an event ticketing company acquired by Ticketmaster; his fund states it helps portfolio companies find product/market fit.",
        url: "https://techcrunch.com/2021/06/09/todd-and-rahuls-angel-fund-closes-new-24-million-fund"
      },
      {
        capability: "Fundraising",
        evidence: "Co-runs a vehicle that states it has invested over \$50M into 120+ startups and helps founders 'raise your next round from the best investors'; closed a \$24 million fund in 2021.",
        url: "https://www.toddandrahulcapital.com/"
      }
    ],
    boardSeats: [],
    advisoryRoles: [],
    syndicateMemberships: [],
    geographicPatterns: [],
    careerMilestones: [
      {
        year: 2021,
        event: "Todd and Rahul's Angel Fund closes a new \$24 million fund."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Goldberg founded Eventjoy and sold it to Ticketmaster, so he has taken a company through an acquisition. His vehicle states it has invested over \$50M into more than 120 startups at \$300k-\$500k a cheque and describes its work as helping founders find product/market fit, accelerate go-to-market, and raise the next round, which points to early-stage product and fundraising support. He has raised outside capital for the vehicle, closing a \$24 million fund in 2021.",
    biography: "Todd Goldberg founded Eventjoy, an event ticketing startup acquired by Ticketmaster. He co-founded and co-runs Todd & Rahul Capital, an angel investing vehicle, with Rahul Vohra, founder of Superhuman and Rapportive; both are Y Combinator alumni. The vehicle states it has invested over \$50 million into more than 120 startups, writes \$300k-\$500k cheques, and is backed by more than 150 founders, operators and investors. It closed a \$24 million fund in 2021, planning to put roughly three-quarters into early-stage deals and reserve a quarter for later-stage opportunities. Goldberg has said of the approach, 'You never want to be a passive check.'",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Placer",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Supabase",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Developer Tools & Infrastructure",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Mercury",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Zip",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Hightouch",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Developer Tools & Infrastructure",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Writer",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "AI",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Loyal",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Hex",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Developer Tools & Infrastructure",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Ashby",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "ClassDojo",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "EdTech",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Circle",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Eight Sleep",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer Health",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Wander",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "WorkOS",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Developer Tools & Infrastructure",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Farcaster",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Crypto",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Quo",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Clearbit",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "NexHealth",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "AngelList",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Descript",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.toddandrahulcapital.com/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Dapper Labs",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Crypto",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://techcrunch.com/2021/06/09/todd-and-rahuls-angel-fund-closes-new-24-million-fund",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Haus",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://techcrunch.com/2021/06/09/todd-and-rahuls-angel-fund-closes-new-24-million-fund",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Alt",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://techcrunch.com/2021/06/09/todd-and-rahuls-angel-fund-closes-new-24-million-fund",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Levels",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer Health",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://techcrunch.com/2021/06/09/todd-and-rahuls-angel-fund-closes-new-24-million-fund",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Clubhouse",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://techcrunch.com/2021/06/09/todd-and-rahuls-angel-fund-closes-new-24-million-fund",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Todd & Rahul Capital (vehicle site)",
        url: "https://www.toddandrahulcapital.com/"
      },
      {
        label: "TechCrunch, June 2021 - fund close",
        url: "https://techcrunch.com/2021/06/09/todd-and-rahuls-angel-fund-closes-new-24-million-fund"
      }
    ]
  },

  "nagaraja-prakasam": {
    name: "Nagaraja “Naga” Prakasam",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "No personal investment vehicle is named in any source; he is described as a full-time lead angel investor deploying his own capital. Separately he holds a Partner/Advisor role at Acumen, a New York-based non-profit impact venture fund, and is Founder Chairman of the Nativelead Foundation angel network. No source places him as a GP or partner at a traditional venture capital fund; searches pairing his name with Omnivore returned nothing.",
    role: "Full-time lead angel investor; Founder Chairman, Nativelead Foundation",
    basedIn: "Bengaluru, India",
    education: [
      "B.E., Thiagarajar College of Engineering, India",
      "MBA, San Diego/Kennesaw State University, United States"
    ],
    previousExperience: [
      "President, South & Southeast Asia, CDC Software - 16-year tenure, rose from Systems Engineer to President, company grew from \$50M to \$400M",
      "President, Atlanta and San Diego Chapters, Association for India's Development (AID)"
    ],
    operatingBackground: [
      "engineer",
      "sales executive"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: "INR 2 lakh - 1 crore",
    leadBehavior: "Lead",
    capabilities: [
      {
        capability: "Enterprise GTM",
        evidence: "President of CDC Software for South & Southeast Asia, running sales and the India Engineering Centre of Excellence while the company grew from \$50M to \$400M.",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        capability: "Technical",
        evidence: "Rose from Systems Engineer to President over a 16-year tenure at CDC Software and managed its India Engineering Centre of Excellence; holds a B.E. from Thiagarajar College of Engineering.",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        capability: "Industry Network",
        evidence: "Founder Chairman of the Nativelead Foundation, which has grown to 242 angels across Madurai, Trichy, Coimbatore, Erode, Tuticorin, Karur and Tirunelveli; co-founded IAN Impact within the Indian Angel Network.",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      }
    ],
    boardSeats: [
      {
        company: "FarmersFZ",
        status: "current",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        company: "Carbon Masters",
        status: "current",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        company: "Neurosynaptic",
        status: "current",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        company: "GoCoOp",
        status: "current",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        company: "Freshworld",
        status: "current",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        company: "Saahas Zero Waste",
        status: "current",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        company: "SP Robotic Works",
        status: "current",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        company: "Lumiere Organic",
        status: "current",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        company: "Sattva Consulting",
        status: "current",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        company: "Happy Hens",
        status: "current",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        company: "Nativelead Foundation",
        status: "current",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        company: "Uniphore",
        status: "former",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        company: "Guardian",
        status: "former",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      }
    ],
    advisoryRoles: [
      {
        organization: "NSRCEL, IIM Bangalore",
        role: "Advisor and Resident Mentor",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        organization: "IIT Madras Incubator",
        role: "Investment Committee member",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        organization: "CIIE, IIM Ahmedabad",
        role: "Mentor",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        organization: "Madurai Agri-Business Incubator, TNAU-NABARD",
        role: "Board Member",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        organization: "Office of the Principal Scientific Adviser to the Government of India (KisanMitr)",
        role: "Advisor",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      }
    ],
    syndicateMemberships: [
      {
        name: "Indian Angel Network",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      },
      {
        name: "Nativelead Foundation (Native Angels)",
        url: "https://www.indianangelnetwork.com/individual-members/nagaraja_parkasam_nwq/"
      }
    ],
    geographicPatterns: [
      "India"
    ],
    careerMilestones: [
      {
        year: 2012,
        event: "Begins investing in social enterprises."
      },
      {
        year: 2014,
        event: "Joins the board of Uniphore, serving until 2019."
      }
    ],
    exitCount: 8,
    exitCountBasis: "stated by source",
    publicHoldings: [],
    strategicValue: "Sixteen years at CDC Software, ending as President for South & Southeast Asia with responsibility for sales and the India engineering centre during growth from \$50M to \$400M, gives him enterprise go-to-market and engineering-organisation experience. He has led 15-16 of his own deals and served on twelve startup boards, so he can work with founders as an operating board member rather than a passive cheque. Through the Nativelead Foundation he has built an angel network of 242 investors across non-metro Tamil Nadu, which is directly relevant to founders raising outside India's metro hubs.",
    biography: "Nagaraja “Naga” Prakasam is a Bengaluru-based angel investor who spent 16 years at CDC Software, rising from Systems Engineer to President for South & Southeast Asia. His Indian Angel Network profile describes him as a full-time lead angel investor who has led 15 deals, invested in 23 startups and served on 12 boards; his own site puts the figures at 33 startups across 65-plus rounds with 16 deals led. He co-founded IAN Impact within the Indian Angel Network and is Founder Chairman of the Nativelead Foundation, which has grown to 242 angels across non-metro Tamil Nadu. He is also a Partner and Advisor at Acumen, a New York-based non-profit impact venture fund, and served as an independent director at its portfolio company Guardian. He holds a B.E. from Thiagarajar College of Engineering and an MBA from San Diego/Kennesaw State University, and was still running startup pitch sessions as a visiting angel investor in July 2025.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Uzhavarbhumi",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "FarmersFZ",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Foodtech",
        subsector: "farm-to-home fruit and vegetables",
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Carbon Masters",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Climate & Energy",
        subsector: "waste to bio-CNG and organic fertiliser",
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Nativespecial",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Neurosynaptic",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "rural telemedicine",
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Lumiere Organic",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Foodtech",
        subsector: "seed-to-table organic food",
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Guardian",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "microfinance for water and sanitation",
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "SP Robotic Works",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "EdTech",
        subsector: "robotics training for school students",
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Saahas Zero Waste",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Climate & Energy",
        subsector: "waste management and recycling",
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Freshworld",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Foodtech",
        subsector: "farm-to-home vegetables via cleantech smart carts",
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Uniphore",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "AI",
        subsector: "voice recognition",
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "GoCoOp",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Ecommerce",
        subsector: "online marketplace for co-operatives",
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Happy Hens",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Agtech",
        subsector: "free-range poultry",
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Rain Stock",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Sattva Consulting",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "GramVaani",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Consure",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Orangescape",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Gamiana",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Stayzilla",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "UnBxd",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Druva",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Solaron",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "http://naga.farm/about/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Personal site (Naga the Farmer)",
        url: "http://naga.farm/about/"
      },
      {
        label: "Forbes India profile",
        url: "https://www.forbesindia.com/article/take-one-big-story-of-the-day/nagaraja-prakasam-has-a-back-to-bharat-strategy-for-businesses/88309/1"
      },
      {
        label: "Kashmir Reader, July 2025 startup pitch session",
        url: "https://kashmirreader.com/2025/07/29/startup-kashmir-hosts-renowned-angel-investor-naga-prakasam-for-exclusive-startup-pitch-session/"
      }
    ]
  },

  "errol-damelin": {
    name: "Errol Damelin",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: "Dust Road Ventures",
    vehicleNote: "His own site states: 'The investing practice is formalised as Dust Road Ventures - a seed-stage investment firm deploying permanent private capital' with 'no fund lifecycle, no LP base, and no deployment pressure.' Sifted separately reports he 'does not invest other people's money in a formal fund' and names two earlier investment entities, Rhythm Ventures (used for Wise) and Revolutionary (Ad) Ventures 38 (used for Cazoo). Those two earlier entity names are recorded as reported history, not as his current vehicle.",
    role: "Founder, Dust Road Ventures; seed-stage angel investor",
    basedIn: "London, United Kingdom",
    education: [
      "University of Cape Town, graduated 1995",
      "MBA, Boston University"
    ],
    previousExperience: [
      "Corporate finance banker, Israel (late 1990s)",
      "Co-founder, Barzelan, speciality steel wire producer, Beit Shemesh, Israel (1997)",
      "Founder, Supply Chain Connect, London (2000-2005; sold to ChemConnect in 2005)",
      "Co-founder and CEO, Wonga.com (2007-2013; stepped down as CEO November 2013)",
      "Co-founder, Tide (2015)"
    ],
    operatingBackground: [
      "founder",
      "banker"
    ],
    statedSectorFocus: [
      "Fintech",
      "AI",
      "Health tech",
      "Enterprise Software"
    ],
    statedStageFocus: [
      "Seed"
    ],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Finance",
        evidence: "Worked as a corporate finance banker in Israel before founding companies, and co-founded and ran Wonga.com, a consumer credit lender, as CEO from 2007 to 2013.",
        url: "https://en.wikipedia.org/wiki/Errol_Damelin"
      },
      {
        capability: "Operations",
        evidence: "Founded and led two companies through to exit or scale: Supply Chain Connect (2000-2005, sold to ChemConnect) and Wonga.com, where he was CEO from 2007 until November 2013.",
        url: "https://en.wikipedia.org/wiki/Errol_Damelin"
      },
      {
        capability: "Industry Network",
        evidence: "Sifted reports he has 'built up an impressive, international angel portfolio over the last decade across more than 50 companies' and describes him as a hands-on early-stage mentor to founders; his own site states 75+ seed-stage investments since 2011.",
        url: "https://sifted.eu/articles/wonga-founder-cashes-in-investor"
      }
    ],
    boardSeats: [],
    advisoryRoles: [],
    syndicateMemberships: [],
    geographicPatterns: [
      "United Kingdom",
      "Israel",
      "United States"
    ],
    careerMilestones: [
      {
        year: 1997,
        event: "Co-founds Barzelan, a speciality steel wire producer in Beit Shemesh, Israel."
      },
      {
        year: 2000,
        event: "Founds Supply Chain Connect, a cloud-based supply chain software company based in London."
      },
      {
        year: 2005,
        event: "Sells Supply Chain Connect to ChemConnect."
      },
      {
        year: 2007,
        event: "Co-founds Wonga.com with Jonty Hurwitz."
      },
      {
        year: 2011,
        event: "Makes his first angel investments; his site dates the portfolio to 2011 and Sifted records a cheque into Wise's 2011 seed round."
      },
      {
        year: 2013,
        event: "Steps down as CEO of Wonga.com in November."
      },
      {
        year: 2015,
        event: "Co-founds Tide."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Damelin has founded and run companies from formation to exit twice (Supply Chain Connect, sold in 2005, and Wonga.com, which he led as CEO from 2007 to 2013), and co-founded Tide in 2015, so he can speak to company building from the operator's side as well as the investor's. His investing practice is concentrated at seed stage in fintech, AI, health tech and enterprise software, and his own site describes his cheques as 'first or second cheques', which fits founders raising their earliest institutional money. Sifted reports he works as a hands-on early-stage mentor and, per that account, tends not to take board seats.",
    biography: "Errol Damelin was born in South Africa in 1969, grew up in Klerksdorp, graduated from the University of Cape Town in 1995 and later took an MBA at Boston University. After working as a corporate finance banker in Israel he co-founded Barzelan, a speciality steel wire producer, in 1997, then founded the London-based supply chain software company Supply Chain Connect in 2000 and sold it to ChemConnect in 2005. In 2007 he co-founded Wonga.com with Jonty Hurwitz and served as its CEO until stepping down in November 2013; he co-founded Tide in 2015. He has invested in early-stage companies since 2011 and his own site states 75+ seed-stage investments, formalised as Dust Road Ventures, a seed-stage investment firm he describes as deploying permanent private capital with no LP base. Sifted reports that he does not invest other people's money in a formal fund.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Wise",
        stage: "Seed",
        year: 2011,
        yearPrecision: "year",
        sector: "Fintech",
        subsector: "cross-border money transfer",
        role: null,
        evidence: [
          {
            url: "https://sifted.eu/articles/wonga-founder-cashes-in-investor",
            type: "press",
            checked: "2026-09-02"
          },
          {
            url: "https://erroldamelin.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Cazoo",
        stage: "Seed",
        year: 2018,
        yearPrecision: "year",
        sector: "Ecommerce",
        subsector: "online used car retail",
        role: null,
        evidence: [
          {
            url: "https://sifted.eu/articles/wonga-founder-cashes-in-investor",
            type: "press",
            checked: "2026-09-02"
          },
          {
            url: "https://erroldamelin.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Purplebricks",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Real Estate Tech",
        subsector: "online estate agency",
        role: null,
        evidence: [
          {
            url: "https://erroldamelin.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          },
          {
            url: "https://sg.finance.yahoo.com/news/founder-legal-loan-shark-wonga-073000649.html",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "HiBob",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "HR software",
        role: null,
        evidence: [
          {
            url: "https://erroldamelin.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "K Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "AI primary care",
        role: null,
        evidence: [
          {
            url: "https://erroldamelin.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          },
          {
            url: "https://sifted.eu/articles/wonga-founder-cashes-in-investor",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Cleo AI",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "consumer money assistant",
        role: null,
        evidence: [
          {
            url: "https://erroldamelin.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          },
          {
            url: "https://sg.finance.yahoo.com/news/founder-legal-loan-shark-wonga-073000649.html",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Earnin",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "earned wage access",
        role: null,
        evidence: [
          {
            url: "https://erroldamelin.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Elliptic",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Crypto",
        subsector: "blockchain analytics and compliance",
        role: null,
        evidence: [
          {
            url: "https://erroldamelin.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Citymapper",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Mobility",
        subsector: "urban transit apps",
        role: null,
        evidence: [
          {
            url: "https://erroldamelin.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          },
          {
            url: "https://sg.finance.yahoo.com/news/founder-legal-loan-shark-wonga-073000649.html",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "YuLife",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "group life insurance",
        role: null,
        evidence: [
          {
            url: "https://erroldamelin.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          },
          {
            url: "https://sifted.eu/articles/wonga-founder-cashes-in-investor",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Zoe",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer Health",
        subsector: "personalised nutrition",
        role: null,
        evidence: [
          {
            url: "https://erroldamelin.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Habito",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "online mortgage broking",
        role: null,
        evidence: [
          {
            url: "https://sifted.eu/articles/wonga-founder-cashes-in-investor",
            type: "press",
            checked: "2026-09-02"
          },
          {
            url: "https://sg.finance.yahoo.com/news/founder-legal-loan-shark-wonga-073000649.html",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Nested",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Real Estate Tech",
        subsector: "residential sales",
        role: null,
        evidence: [
          {
            url: "https://sifted.eu/articles/wonga-founder-cashes-in-investor",
            type: "press",
            checked: "2026-09-02"
          },
          {
            url: "https://sg.finance.yahoo.com/news/founder-legal-loan-shark-wonga-073000649.html",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Farewill",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Legal Tech",
        subsector: "wills and probate",
        role: null,
        evidence: [
          {
            url: "https://sifted.eu/articles/wonga-founder-cashes-in-investor",
            type: "press",
            checked: "2026-09-02"
          },
          {
            url: "https://sg.finance.yahoo.com/news/founder-legal-loan-shark-wonga-073000649.html",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Second Nature",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer Health",
        subsector: "behaviour-change health programmes",
        role: null,
        evidence: [
          {
            url: "https://sifted.eu/articles/wonga-founder-cashes-in-investor",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Ravelin",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "payment fraud detection",
        role: null,
        evidence: [
          {
            url: "https://sg.finance.yahoo.com/news/founder-legal-loan-shark-wonga-073000649.html",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "CurrencyTransfer.com",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "FX marketplace",
        role: null,
        evidence: [
          {
            url: "https://sg.finance.yahoo.com/news/founder-legal-loan-shark-wonga-073000649.html",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Personal site - home",
        url: "https://erroldamelin.com/"
      },
      {
        label: "Personal site - about (Dust Road Ventures, portfolio)",
        url: "https://erroldamelin.com/about"
      },
      {
        label: "Sifted - Wonga founder cashes in as an investor",
        url: "https://sifted.eu/articles/wonga-founder-cashes-in-investor"
      },
      {
        label: "Fortune via Yahoo Finance - profile of Damelin as an angel investor",
        url: "https://sg.finance.yahoo.com/news/founder-legal-loan-shark-wonga-073000649.html"
      },
      {
        label: "Wikipedia - Errol Damelin (education and career dates)",
        url: "https://en.wikipedia.org/wiki/Errol_Damelin"
      }
    ]
  },

  "christopher-deutsch": {
    name: "Christopher Deutsch",
    type: "angel",
    investingStatus: "active",
    investingMode: null,
    vehicle: "Lofty Ventures",
    vehicleNote: "Lofty Ventures is his own Chicago vehicle. Primary sources consistently describe him as an angel investor writing USD 10k-100k first cheques, but the site's own copy refers both to 'the entire fund' and to a 'Lofty Syndicate', so the exact deployment structure is not established; investingMode left blank rather than guessed.",
    role: "Founder & Managing Director, Lofty Ventures; Re-founder and Board Director, teaBOT",
    basedIn: "Chicago, Illinois, United States",
    education: [
      "BA Economics, Vassar College"
    ],
    previousExperience: [
      "Re-founder and Board Director, teaBOT (Y Combinator-backed)",
      "VP of Business Development, Loft Development Corporation (four years; family commercial real estate firm, Chicago)"
    ],
    operatingBackground: [
      "founder",
      "business development executive"
    ],
    statedSectorFocus: [],
    statedStageFocus: [
      "Pre-Seed",
      "Seed"
    ],
    checkSize: "USD 10k-100k (in rare cases larger)",
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Operations",
        evidence: "Re-founder and Board Director of teaBOT, a Y Combinator-backed tea-making robotics company used by organisations including Google, HubSpot, McKinsey and 1871.",
        url: "https://www.techshow.com/speakers/christopher-deutsch/"
      },
      {
        capability: "Industry Network",
        evidence: "Lofty Ventures is built explicitly around Chicago's founder community - its site reports 159 founders in the network and 88 startups backed - and he is an LP in the social venture fund Impact Engine (IV) and a member or board director of Chicago civic and non-profit organisations including Social Venture Partners.",
        url: "https://www.techshow.com/speakers/christopher-deutsch/"
      }
    ],
    boardSeats: [
      {
        company: "teaBOT",
        status: "current",
        url: "https://www.techshow.com/speakers/christopher-deutsch/"
      }
    ],
    advisoryRoles: [],
    syndicateMemberships: [],
    geographicPatterns: [
      "Chicago, United States"
    ],
    careerMilestones: [],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Deutsch invests as a first-cheque backer of Chicago companies and his own site states an explicit Chicago-based (or strong-Chicago-ties) requirement, so his value to a founder is concentrated in that city's ecosystem, where Lofty reports a network of 159 founders across 88 startups. His operating experience is as re-founder and board director of teaBOT, a Y Combinator-backed robotics company selling into large enterprises, and he previously spent four years in business development at a Chicago commercial real estate firm. He is also an LP in the social venture fund Impact Engine (IV) and sits on Chicago civic and non-profit boards.",
    biography: "Christopher Deutsch is a Chicago angel investor and the founder and managing director of Lofty Ventures, which invests USD 10k-100k as early as possible, usually first-cheque to seed, in Chicago-based startups or startups with strong Chicago ties. He describes himself as industry agnostic. He is Re-founder and Board Director of teaBOT, a Y Combinator-backed tea-making robotics company whose customers include Google, HubSpot, McKinsey and 1871, and earlier spent four years as VP of Business Development at Loft Development Corporation, his family's Chicago commercial real estate firm. Lofty's disclosed portfolio has included Turbo Appeal, teaBOT, Popular Pays, Tovala, Cubii, L Street Collaborative, Blitsy, Pixit, 4Degrees, Paladin, Winston Privacy and Gather Voices, with the firm's site reporting 88 startups backed and a majority led by underrepresented founders. He received his BA in Economics from Vassar College and is an LP in the social venture fund Impact Engine (IV).",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Turbo Appeal",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Real Estate Tech",
        subsector: "property tax appeal software",
        role: null,
        evidence: [
          {
            url: "https://greyjournal.net/event/greygang-hustle-talk-with-christopher-deutschlofty-venture/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "teaBOT",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Robotics",
        subsector: "beverage robotics",
        role: "Re-founder and Board Director",
        evidence: [
          {
            url: "https://greyjournal.net/event/greygang-hustle-talk-with-christopher-deutschlofty-venture/",
            type: "partner-bio",
            checked: "2026-09-02"
          },
          {
            url: "https://www.techshow.com/speakers/christopher-deutsch/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Popular Pays",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "creator content marketing",
        role: null,
        evidence: [
          {
            url: "https://greyjournal.net/event/greygang-hustle-talk-with-christopher-deutschlofty-venture/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Tovala",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Foodtech",
        subsector: "smart oven and meal service",
        role: null,
        evidence: [
          {
            url: "https://greyjournal.net/event/greygang-hustle-talk-with-christopher-deutschlofty-venture/",
            type: "partner-bio",
            checked: "2026-09-02"
          },
          {
            url: "https://loftyventures.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Cubii",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer Health",
        subsector: "connected fitness hardware",
        role: null,
        evidence: [
          {
            url: "https://greyjournal.net/event/greygang-hustle-talk-with-christopher-deutschlofty-venture/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "L Street Collaborative",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://greyjournal.net/event/greygang-hustle-talk-with-christopher-deutschlofty-venture/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Blitsy",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Ecommerce",
        subsector: "craft supplies",
        role: null,
        evidence: [
          {
            url: "https://greyjournal.net/event/greygang-hustle-talk-with-christopher-deutschlofty-venture/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Pixit",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://greyjournal.net/event/greygang-hustle-talk-with-christopher-deutschlofty-venture/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "4Degrees",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "relationship intelligence CRM",
        role: null,
        evidence: [
          {
            url: "https://greyjournal.net/event/greygang-hustle-talk-with-christopher-deutschlofty-venture/",
            type: "partner-bio",
            checked: "2026-09-02"
          },
          {
            url: "https://loftyventures.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Paladin",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Legal Tech",
        subsector: "pro bono legal work platform",
        role: null,
        evidence: [
          {
            url: "https://greyjournal.net/event/greygang-hustle-talk-with-christopher-deutschlofty-venture/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Winston Privacy",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Cybersecurity",
        subsector: "consumer privacy",
        role: null,
        evidence: [
          {
            url: "https://greyjournal.net/event/greygang-hustle-talk-with-christopher-deutschlofty-venture/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Gather Voices",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "user-generated video",
        role: null,
        evidence: [
          {
            url: "https://greyjournal.net/event/greygang-hustle-talk-with-christopher-deutschlofty-venture/",
            type: "partner-bio",
            checked: "2026-09-02"
          },
          {
            url: "https://loftyventures.com/about",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Lofty Ventures - About / investment criteria",
        url: "https://loftyventures.com/about"
      },
      {
        label: "Lofty Ventures - home",
        url: "https://loftyventures.com/"
      },
      {
        label: "ABA TECHSHOW speaker bio",
        url: "https://www.techshow.com/speakers/christopher-deutsch/"
      },
      {
        label: "Grey Journal event bio",
        url: "https://greyjournal.net/event/greygang-hustle-talk-with-christopher-deutschlofty-venture/"
      }
    ]
  },

  "edward-lando": {
    name: "Edward Lando",
    type: "angel",
    investingStatus: "active",
    investingMode: "angel vehicle",
    vehicle: "Pareto Holdings",
    vehicleNote: "Qualification call: Pareto Holdings is a personal/holding vehicle, not an institutional fund with outside LPs. Lando states on the record that 'we don't really have a fund', describes Pareto as 'a super angel vehicle' that he 'fill[s] up once in a while' with his own capital, and explains he chose not to raise a traditional fund ('I found their process to be too annoying to go and try to raise a fund, for now at least'). He says roughly 95% of his net worth is deployed in it. A separate press account states Pareto Holdings 'was created by Oringer and Edward Lando' - i.e. co-founded with Shutterstock founder Jon Oringer as a two-principal vehicle. An SEC EDGAR full-text search returned zero Form D filings for 'Pareto Holdings', consistent with no outside-LP fundraising. On that basis he is treated as an angel, not a VC partner. Pareto20 (pareto20.com) is Pareto's own programme domain, used for The Pareto Fellowship applications.",
    role: "Co-founder, Pareto Holdings",
    basedIn: "Miami, Florida, United States",
    education: [
      "Undergraduate, The Wharton School, University of Pennsylvania"
    ],
    previousExperience: [
      "Co-founder, GovPredict (Y Combinator, Summer 2014)",
      "Co-founder and operator of Goody, which he 'actually ran for a year and a half'"
    ],
    operatingBackground: [
      "founder"
    ],
    statedSectorFocus: [],
    statedStageFocus: [
      "Pre-Seed"
    ],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Operations",
        evidence: "Co-founded Goody, a gifting company, and states 'I actually ran [it] for a year and a half'; also co-founded GovPredict through Y Combinator in Summer 2014.",
        url: "https://www.thespl.it/p/how-the-top-us-angel-investor-operates"
      }
    ],
    boardSeats: [],
    advisoryRoles: [],
    syndicateMemberships: [],
    geographicPatterns: [
      "United States"
    ],
    careerMilestones: [
      {
        year: 2014,
        event: "Co-founds GovPredict with Emil Pitkin and takes it through Y Combinator."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Lando has founded and operated companies himself - GovPredict through Y Combinator and Goody, which he ran for around eighteen months - so he can speak to early company-building from the operator's side. Pareto Holdings both invests and incubates, having helped start companies such as Zamp and Goody, which means he has direct experience of standing a company up from zero. He invests at very high frequency and at the earliest stages, which gives founders a fast decision.",
    biography: "Edward Lando is a co-founder of Pareto Holdings, an investment vehicle he created with Shutterstock founder Jon Oringer. He attended Wharton as an undergraduate and taught himself to code there, then co-founded GovPredict with Emil Pitkin, a company he describes as 'a Bloomberg for the government', which went through Y Combinator in Summer 2014. He later co-founded the gifting company Goody, which he ran for about a year and a half. Through Pareto he invests at very high volume - he has described investing 'a couple a week' and, in a 2024 interview, a portfolio approaching 1,000 companies with roughly 200 companies pre-seeded. Pareto also incubates companies directly, including the sales-tax software company Zamp and a robotics company, Kinesis. He is based in Miami, Florida.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Nucleus Genomics",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Healthcare",
        subsector: "consumer genomics",
        role: "Co-led the round; per Lando, 'we sort of co-led the seed with him at the pre-seed'",
        evidence: [
          {
            url: "https://www.thespl.it/p/how-the-top-us-angel-investor-operates",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Misfits Market",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Ecommerce",
        subsector: "online grocery",
        role: "Describes himself as 'a kind of early investor in Misfits Market'",
        evidence: [
          {
            url: "https://www.thespl.it/p/how-the-top-us-angel-investor-operates",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Catalina Crunch",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Foodtech",
        subsector: "keto cereal / CPG",
        role: "States he 'got to invest in a very low valuation' after teaming up with the founder early",
        evidence: [
          {
            url: "https://www.thespl.it/p/how-the-top-us-angel-investor-operates",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Zamp",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "sales tax software",
        role: "Incubated by Pareto Holdings - 'We helped start a sales tax company called Zamp'",
        evidence: [
          {
            url: "https://www.thespl.it/p/how-the-top-us-angel-investor-operates",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Kinesis",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Robotics",
        subsector: "humanoid robotics",
        role: "Incubated by Pareto Holdings, built with the founder of Bear Robotics",
        evidence: [
          {
            url: "https://www.thespl.it/p/how-the-top-us-angel-investor-operates",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Goody",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "gifting",
        role: "Co-founded/incubated - 'helped start a company called Goody in the gifting space that I actually ran for a year and a half'",
        evidence: [
          {
            url: "https://www.thespl.it/p/how-the-top-us-angel-investor-operates",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "The Infatuation",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "restaurant reviews and media",
        role: null,
        evidence: [
          {
            url: "https://www.alleywatch.com/2018/10/inside-the-mind-of-a-nyc-angel-edward-lando/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Built Robotics",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Robotics",
        subsector: "autonomous construction equipment",
        role: null,
        evidence: [
          {
            url: "https://www.alleywatch.com/2018/10/inside-the-mind-of-a-nyc-angel-edward-lando/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Parsley Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "primary care",
        role: null,
        evidence: [
          {
            url: "https://www.alleywatch.com/2018/10/inside-the-mind-of-a-nyc-angel-edward-lando/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Current",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "neobank",
        role: null,
        evidence: [
          {
            url: "https://www.alleywatch.com/2018/10/inside-the-mind-of-a-nyc-angel-edward-lando/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Simple Contacts",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: "online vision test and contact lens renewal",
        role: null,
        evidence: [
          {
            url: "https://www.alleywatch.com/2018/10/inside-the-mind-of-a-nyc-angel-edward-lando/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Reddit",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "social platform",
        role: null,
        evidence: [
          {
            url: "https://www.alleywatch.com/2018/10/inside-the-mind-of-a-nyc-angel-edward-lando/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "The Spl.it / The Peel interview - 'How the Top US Angel Investor Operates'",
        url: "https://www.thespl.it/p/how-the-top-us-angel-investor-operates"
      },
      {
        label: "AlleyWatch - 'Inside the Mind of a NYC Angel: Edward Lando'",
        url: "https://www.alleywatch.com/2018/10/inside-the-mind-of-a-nyc-angel-edward-lando/"
      },
      {
        label: "Impact Podcast interview - background and Pareto Holdings",
        url: "https://impactpodcast.com/episode/2022/01/building-investing-with-edward-lando/"
      },
      {
        label: "South Florida Business & Wealth - Pareto Holdings and The Pareto Fellowship",
        url: "https://sfbwmag.com/pareto-holdings-invests-in-miamis-entrepreneur-scene/"
      }
    ]
  },

  "joanne-wilson": {
    name: "Joanne Wilson",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: "Gotham Gal Ventures",
    vehicleNote: "Wikipedia describes Gotham Gal Ventures as an investment vehicle she co-manages with her husband Fred Wilson, cofounder of Union Square Ventures. Her own about page does not name the vehicle at all and calls her an early-stage angel investor. No source was found showing Gotham Gal Ventures raised outside institutional LP capital, and no source places her as a GP or partner at an institutional venture firm, so it is recorded as a personal/family vehicle rather than a fund partnership. No Union Square Ventures deal is attributed to her.",
    role: "Angel investor and writer (gothamgal.com)",
    basedIn: "New York, United States",
    education: [],
    previousExperience: [
      "Retail apparel department, Macy's (four years)",
      "Sales, Silicon Alley Reporter",
      "Chair, MOUSE (education technology non-profit)",
      "Founding member, Frame Home, a Brooklyn residential development company",
      "Founder, GOTHAM, a New York cannabis concept store operated in partnership with STRIVE"
    ],
    operatingBackground: [
      "founder",
      "sales executive"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Industry Network",
        evidence: "Co-founded the Women Entrepreneurs Festival in 2010 with Nancy Hechinger of NYU and served as first co-chair of Path Forward; has built a portfolio of over 140 companies focused on female entrepreneurs.",
        url: "https://gothamgal.com/about-gothamgal/"
      },
      {
        capability: "Operations",
        evidence: "Founding member of Frame Home, a Brooklyn-based residential development company, and founder of GOTHAM, a cannabis concept retail store run in partnership with STRIVE at its flagship location.",
        url: "https://gothamgal.com/about-gothamgal/"
      }
    ],
    boardSeats: [
      {
        company: "Friends of the High Line",
        status: "current",
        url: "https://gothamgal.com/about-gothamgal/"
      },
      {
        company: "The Public Housing Community Fund",
        status: "current",
        url: "https://gothamgal.com/about-gothamgal/"
      },
      {
        company: "Hot Bread Kitchen",
        status: "former",
        url: "https://en.wikipedia.org/wiki/Joanne_Wilson"
      },
      {
        company: "MOUSE",
        status: "former",
        url: "https://en.wikipedia.org/wiki/Joanne_Wilson"
      }
    ],
    advisoryRoles: [],
    syndicateMemberships: [],
    geographicPatterns: [
      "United States"
    ],
    careerMilestones: [
      {
        year: 2007,
        event: "Begins angel investing; her first investment is Curbed."
      },
      {
        year: 2010,
        event: "Co-founds the Women Entrepreneurs Festival."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "She has built a portfolio of more than 140 companies since 2007 with an explicit focus on female founders, so she has repeat pattern experience across a large number of early-stage consumer and media businesses. Her own operating background is in retail and consumer businesses - four years at Macy's, founding member of Frame Home, and founder of the GOTHAM cannabis retail concept - which maps onto the consumer, food and retail companies she has backed. She co-founded the Women Entrepreneurs Festival and co-chaired Path Forward, giving her a founder network built specifically around women-led companies.",
    biography: "Joanne Wilson is a New York angel investor and writer who has published the Gotham Gal blog for many years and describes herself on her own site as an entrepreneur, early-stage angel investor and philanthropist. She began investing in 2007, her first investment being Curbed, and her site states she has built a portfolio of over 140 companies with a focus on female entrepreneurs, naming Food52, Eater and Parachute Home among them. She invests through Gotham Gal Ventures, which Wikipedia describes as a vehicle she co-manages with her husband Fred Wilson, cofounder of Union Square Ventures. Her earlier career ran from a retail apparel role at Macy's to sales at Silicon Alley Reporter, and she chaired the education non-profit MOUSE and Hot Bread Kitchen's board from 2010 to 2015. Alongside investing she chairs The Public Housing Community Fund, sits on the board of Friends of the High Line, is a founding member of the residential developer Frame Home, and founded GOTHAM, a New York cannabis concept store.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Curbed",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "real estate media",
        role: null,
        evidence: [
          {
            url: "https://en.wikipedia.org/wiki/Joanne_Wilson",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Food52",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "food media and commerce",
        role: null,
        evidence: [
          {
            url: "https://en.wikipedia.org/wiki/Joanne_Wilson",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Rick's Picks",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "packaged food brand",
        role: null,
        evidence: [
          {
            url: "https://en.wikipedia.org/wiki/Joanne_Wilson",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "DailyWorth",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "personal finance media for women",
        role: null,
        evidence: [
          {
            url: "https://en.wikipedia.org/wiki/Joanne_Wilson",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Scoot",
        stage: null,
        year: 2012,
        yearPrecision: "year",
        sector: "Mobility",
        subsector: "electric scooter sharing",
        role: null,
        evidence: [
          {
            url: "https://en.wikipedia.org/wiki/Joanne_Wilson",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Blue Bottle Coffee",
        stage: null,
        year: 2014,
        yearPrecision: "year",
        sector: "Consumer",
        subsector: "specialty coffee",
        role: null,
        evidence: [
          {
            url: "https://en.wikipedia.org/wiki/Joanne_Wilson",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Spoon University",
        stage: null,
        year: 2015,
        yearPrecision: "year",
        sector: "Consumer",
        subsector: "food media for students",
        role: null,
        evidence: [
          {
            url: "https://en.wikipedia.org/wiki/Joanne_Wilson",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Nestio",
        stage: null,
        year: 2015,
        yearPrecision: "year",
        sector: "Real Estate Tech",
        subsector: "rental leasing and marketing software",
        role: null,
        evidence: [
          {
            url: "https://en.wikipedia.org/wiki/Joanne_Wilson",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Octavia Wellness",
        stage: null,
        year: 2017,
        yearPrecision: "year",
        sector: "Consumer Health",
        subsector: "cannabis wellness",
        role: null,
        evidence: [
          {
            url: "https://en.wikipedia.org/wiki/Joanne_Wilson",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Beboe",
        stage: null,
        year: 2017,
        yearPrecision: "year",
        sector: "Consumer",
        subsector: "cannabis brand",
        role: null,
        evidence: [
          {
            url: "https://en.wikipedia.org/wiki/Joanne_Wilson",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Eater",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: "food media",
        role: null,
        evidence: [
          {
            url: "https://gothamgal.com/about-gothamgal/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Parachute Home",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Ecommerce",
        subsector: "direct-to-consumer home textiles",
        role: null,
        evidence: [
          {
            url: "https://gothamgal.com/about-gothamgal/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Personal site - about page",
        url: "https://gothamgal.com/about-gothamgal/"
      },
      {
        label: "Personal blog (active, posts through August 2026)",
        url: "https://gothamgal.com/"
      },
      {
        label: "Wikipedia - Joanne Wilson",
        url: "https://en.wikipedia.org/wiki/Joanne_Wilson"
      },
      {
        label: "dot.LA - LA Venture interview",
        url: "https://dot.la/joanne-wilson-gotham-gal-ventures-2656904435.html"
      }
    ]
  },

  "joshua-schachter": {
    name: "Joshua Schachter",
    type: "angel",
    investingStatus: "active",
    investingMode: "syndicate",
    vehicle: null,
    vehicleNote: "Operates an AngelList syndicate under the handle 'joshu'. No distinct legal entity name is published on the syndicate page, so no vehicle name is asserted.",
    role: "Early-stage angel investor",
    basedIn: null,
    education: [
      "B.S. Electrical and Computer Engineering, Carnegie Mellon University"
    ],
    previousExperience: [
      "Founder, Delicious (del.icio.us) (2003-2008); acquired by Yahoo! in 2005",
      "Yahoo! (2005-2008, following the Delicious acquisition)",
      "Google (January 2009 - June 2010)",
      "Founder & CEO, Tasty Labs (acquired)",
      "Quant, Morgan Stanley Equity Trading Lab",
      "Montgomery Securities"
    ],
    operatingBackground: [
      "founder",
      "engineer"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Syndicate",
    capabilities: [
      {
        capability: "Technical",
        evidence: "Founder of Delicious, the social bookmarking service he built and ran; later a member of technical staff at Google; holds a B.S. in electrical and computer engineering from Carnegie Mellon.",
        url: "https://aiforgood.itu.int/speaker/joshua-schachter/"
      },
      {
        capability: "Product",
        evidence: "Founded and led Delicious, described in his conference biography as the startup that invented tagging and social bookmarking, and later founded and ran Tasty Labs.",
        url: "https://aiforgood.itu.int/speaker/joshua-schachter/"
      },
      {
        capability: "Finance",
        evidence: "Began his career on Wall Street, at Montgomery Securities and then as a quant in Morgan Stanley's Equity Trading Lab.",
        url: "https://aiforgood.itu.int/speaker/joshua-schachter/"
      }
    ],
    boardSeats: [],
    advisoryRoles: [],
    syndicateMemberships: [],
    geographicPatterns: [],
    careerMilestones: [
      {
        year: 2003,
        event: "Releases the first version of Delicious (then del.icio.us)."
      },
      {
        year: 2005,
        event: "Yahoo! acquires Delicious."
      },
      {
        year: 2006,
        event: "Selected by MIT Technology Review as one of the top 35 innovators in the world under 35."
      },
      {
        year: 2008,
        event: "Announces his decision to leave Yahoo!."
      },
      {
        year: 2010,
        event: "Leaves Google."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [
      {
        company: "Twilio",
        ticker: "TWLO",
        url: "https://venture.angellist.com/joshu/syndicate"
      },
      {
        company: "Etsy",
        ticker: "ETSY",
        url: "https://venture.angellist.com/joshu/syndicate"
      }
    ],
    strategicValue: "Schachter founded and ran Delicious through its acquisition by Yahoo! and later founded Tasty Labs, so he has taken a consumer internet product from first release to exit. His engineering background and time as a member of technical staff at Google support help on early technical and product decisions. A decade on Wall Street, at Montgomery Securities and as a quant in Morgan Stanley's Equity Trading Lab, gives him a finance and markets background alongside the product work.",
    biography: "Joshua Schachter founded Delicious (del.icio.us), the social bookmarking service, releasing its first version in 2003; Yahoo! acquired it in 2005 and he remained there until announcing his departure in 2008. He worked at Google from January 2009 to June 2010, then founded and served as CEO of Tasty Labs. Before his startup career he spent roughly a decade on Wall Street, at Montgomery Securities and then as a quant in Morgan Stanley's Equity Trading Lab. He holds a B.S. in electrical and computer engineering from Carnegie Mellon University and was named to MIT Technology Review's top 35 innovators under 35 in 2006. His 2023 conference biography describes him as an early stage investor who has made angel commitments to over 200 companies, and he runs an AngelList syndicate that states it expects roughly five deals per year.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Climate",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://venture.angellist.com/joshu/syndicate",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Twilio",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Developer Tools & Infrastructure",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://venture.angellist.com/joshu/syndicate",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Etsy",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Ecommerce",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://venture.angellist.com/joshu/syndicate",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Opendoor",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Real Estate Tech",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://venture.angellist.com/joshu/syndicate",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Postmates",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Logistics",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://venture.angellist.com/joshu/syndicate",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Astranis",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Space",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://venture.angellist.com/joshu/syndicate",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Thumbtack",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://venture.angellist.com/joshu/syndicate",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Foursquare",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Consumer",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://venture.angellist.com/joshu/syndicate",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "AI for Good (ITU) speaker biography, May 2023",
        url: "https://aiforgood.itu.int/speaker/joshua-schachter/"
      },
      {
        label: "AngelList syndicate page",
        url: "https://venture.angellist.com/joshu/syndicate"
      },
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Joshua_Schachter"
      }
    ]
  },

  "jeroen-bertrams": {
    name: "Jeroen Bertrams",
    type: "angel",
    investingStatus: "active",
    investingMode: "solo GP vehicle",
    vehicle: "Flood Ventures",
    vehicleNote: "He states on his own site: 'I invest in startups from my international fund Flood Ventures as a solo-GP and in companies specifically headquartered in The Netherlands through the Dutch Operator Fund which I co-founded with six other angels.' Flood Ventures' own site confirms 'Flood Ventures is run by Jeroen Bertrams.' He was not treated as a traditional VC partner: he operates Flood as a solo-GP and self-identifies as an angel investor, and the Dutch Operator Fund is an operator/angel collective. No outside institutional LP base was found for either vehicle.",
    role: "Angel investor; solo-GP of Flood Ventures; co-founder of the Dutch Operator Fund",
    basedIn: null,
    education: [],
    previousExperience: [
      "Former startup founder (self-described 'former founder turned investor'; specific companies not named on his own sites)",
      "Author of 11 books on growth, online marketing and strategy"
    ],
    operatingBackground: [
      "founder",
      "author"
    ],
    statedSectorFocus: [
      "Enterprise Software",
      "Fintech",
      "Deep Tech",
      "Crypto"
    ],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Follow",
    capabilities: [],
    boardSeats: [],
    advisoryRoles: [],
    syndicateMemberships: [
      {
        name: "DVC AngelList syndicate",
        url: "https://bertrams.net/"
      }
    ],
    geographicPatterns: [
      "Global",
      "Netherlands"
    ],
    careerMilestones: [],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Bertrams describes himself and Flood Ventures as '(digital) marketing experts' focused on helping portfolio companies grow fast, and he has written eleven books on growth, online marketing and strategy. Flood Ventures states that it connects its companies with partners, customers and follow-on investors. He decides quickly and invests at the earliest stages, and has invested in more than fifty Y Combinator companies both directly and through syndicates.",
    biography: "Jeroen Bertrams is a Dutch angel investor who describes himself as 'a former founder turned investor (and author of 11 books on growth, online marketing & strategy).' He invests through Flood Ventures, an international vehicle he runs as solo-GP, and through the Dutch Operator Fund, which he co-founded with six other angels to back companies headquartered in the Netherlands. He also co-founded AngelList syndicates, including one identified on his site as DVC. On his own site he states he focuses on 'software, fintech, deep tech and web3', across all stages while tending to stay away from idea-stage companies, and that he is 'a follower' rather than a lead investor. Flood Ventures states it has invested in 50+ Y Combinator companies, both directly and with syndicates.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Notion",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "productivity and collaboration",
        role: null,
        evidence: [
          {
            url: "https://bertrams.net/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Carta",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "cap table and equity management",
        role: null,
        evidence: [
          {
            url: "https://bertrams.net/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Snapdocs",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Real Estate Tech",
        subsector: "digital mortgage closing",
        role: null,
        evidence: [
          {
            url: "https://bertrams.net/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Rappi",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Ecommerce",
        subsector: "on-demand delivery",
        role: null,
        evidence: [
          {
            url: "https://bertrams.net/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Truebill",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "consumer subscription management",
        role: null,
        evidence: [
          {
            url: "https://bertrams.net/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Branch",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://bertrams.net/",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Personal site - bertrams.net",
        url: "https://bertrams.net/"
      },
      {
        label: "Dutch Operator Fund",
        url: "https://www.dutchoperatorfund.nl/"
      }
    ]
  },

  "phey-teck-moh": {
    name: "Phey Teck Moh",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "He is a partner and co-founder of AngelCentral, which describes itself as 'one of the fastest growing angel clubs in Singapore & Southeast Asia' rather than a fund; his investments are described as his own. He is also chairman of Xpanasia Pte Ltd, described as 'an investment and advisory company specializing in Telecommunications and Information Technology companies', but no source ties his startup angel investments to that entity.",
    role: "Partner and co-founder, AngelCentral; Chairman, Xpanasia Pte Ltd",
    basedIn: "Singapore",
    education: [],
    previousExperience: [
      "CEO, Pacific Internet",
      "President, Motorola Solutions Asia (retired May 2013)",
      "Corporate Vice President, Motorola Asia Pacific"
    ],
    operatingBackground: [
      "chief executive",
      "technology executive"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Operations",
        evidence: "Served as CEO of Pacific Internet and retired as President of Motorola Solutions Asia in May 2013, having earlier been corporate vice president of Motorola Asia Pacific.",
        url: "https://www.angelcentral.co/about"
      },
      {
        capability: "Industry Network",
        evidence: "Partner and co-founder of AngelCentral, a Singapore angel club incorporated in February 2018 that states it has trained more than 1,000 angel investors; also listed as a mentor partner by the Asia Institute of Mentoring.",
        url: "https://www.angelcentral.co/about"
      },
      {
        capability: "Enterprise GTM",
        evidence: "Chairman of Xpanasia Pte Ltd, 'an investment and advisory company specializing in Telecommunications and Information Technology companies', following a career running telecommunications and internet businesses across Asia.",
        url: "https://www.angelcentral.co/about"
      }
    ],
    boardSeats: [],
    advisoryRoles: [],
    syndicateMemberships: [
      {
        name: "AngelCentral (partner and co-founder)",
        url: "https://www.angelcentral.co/about"
      }
    ],
    geographicPatterns: [],
    careerMilestones: [
      {
        year: 2013,
        event: "Retires as President of Motorola Solutions Asia."
      },
      {
        year: 2018,
        event: "AngelCentral, which he co-founded, is incorporated in February."
      }
    ],
    exitCount: 1,
    exitCountBasis: "observed from attributable investments",
    publicHoldings: [],
    strategicValue: "Phey Teck Moh ran large Asian technology and telecommunications businesses before investing, as CEO of Pacific Internet and as President of Motorola Solutions Asia, so he can help founders with scaling operations and with telecommunications and IT go-to-market in Asia. As a partner and co-founder of AngelCentral, a Singapore angel club that has trained more than 1,000 angel investors and whose members have invested over S\$40 million into startups, he is a route into the Singapore angel community. He describes starting as an investor after giving founders pro bono mentorship, and one of his portfolio companies, Rainmaker Labs, was acquired by KPMG.",
    biography: "Phey Teck Moh is a Singapore-based angel investor and a partner and co-founder of AngelCentral, an angel club incorporated in February 2018. Before investing he was CEO of Pacific Internet and corporate vice president of Motorola Asia Pacific, retiring as President of Motorola Solutions Asia in May 2013. He is chairman of Xpanasia Pte Ltd, described as an investment and advisory company specialising in telecommunications and information technology companies. In an AngelCentral interview he describes becoming an angel after providing pro bono mentorship to founders, and names Metro Residences, Homage, SensorFlow, Souschef and Ohanae among portfolio companies still operating, and Rainmaker Labs as a company taken over by KPMG. He says he also invests in VC funds.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Metro Residences",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://resources.angelcentral.co/the-accidental-angel/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Homage",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://resources.angelcentral.co/the-accidental-angel/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "SensorFlow",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://resources.angelcentral.co/the-accidental-angel/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Souschef",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://resources.angelcentral.co/the-accidental-angel/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Ohanae",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://resources.angelcentral.co/the-accidental-angel/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Rainmaker Labs",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://resources.angelcentral.co/the-accidental-angel/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "AngelCentral - About (partner listing)",
        url: "https://www.angelcentral.co/about"
      },
      {
        label: "AngelCentral - Interview With An Angel: Phey Teck Moh ('The Accidental Angel')",
        url: "https://resources.angelcentral.co/the-accidental-angel/"
      },
      {
        label: "Asia Institute of Mentoring - partner profile",
        url: "https://asiainstituteofmentoring.com/partners/angelcentral-teck-moh-1336"
      }
    ]
  },

  "richard-little": {
    name: "Richard Little",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "No named angel vehicle, syndicate or fund is identified in any source; he describes taking ordinary shares directly.",
    role: "Angel investor and non-executive director",
    basedIn: null,
    education: [
      "Degree in Arabic, University of Cambridge"
    ],
    previousExperience: [
      "Salesman, Burroughs (from 1979)",
      "Co-founder and CEO, Braid Systems Ltd (founded 1982; ran for 17 years across London, the US and Asia before its sale)"
    ],
    operatingBackground: [
      "founder",
      "sales executive"
    ],
    statedSectorFocus: [
      "Cloud",
      "AI and machine learning",
      "EdTech"
    ],
    statedStageFocus: [],
    checkSize: "GBP ~100k first investment",
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Enterprise GTM",
        evidence: "Joined Burroughs as a salesman in 1979 selling to small companies, then co-founded Braid Systems Ltd, which sold telex software and messaging middleware across London, the United States and Asia for seventeen years.",
        url: "https://archivesit.org.uk/interviews/richard-little/"
      },
      {
        capability: "Operations",
        evidence: "Co-founded and ran Braid Systems Ltd for seventeen years, through a failed terminal-emulator launch, a pivot to telex software and an expansion into messaging middleware, to its sale.",
        url: "https://archivesit.org.uk/wp-content/uploads/2021/06/Richard-Little-Full-Interview-Transcript.pdf"
      }
    ],
    boardSeats: [
      {
        company: "Artclear",
        status: "current",
        url: "https://www.artclear.com/team/richard-little"
      }
    ],
    advisoryRoles: [],
    syndicateMemberships: [],
    geographicPatterns: [
      "United Kingdom"
    ],
    careerMilestones: [
      {
        year: 1979,
        event: "Joins Burroughs as a salesman."
      },
      {
        year: 1982,
        event: "Co-founds Braid Systems Ltd with Geoff Chapman."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Little founded and ran Braid Systems Ltd, a telex-software and messaging-middleware business, for seventeen years across London, the United States and Asia, having started his career selling enterprise systems at Burroughs in 1979. He states that he invests as an angel taking only ordinary shares, that a typical first cheque is about GBP 100,000, and that his optimum is five boards at a time, of which he currently chairs three. His sourced experience is in building and scaling B2B software and services companies and in serving as a non-executive director.",
    biography: "Richard Little read Arabic at the University of Cambridge and joined Burroughs as a salesman in 1979. In 1982 he co-founded Braid Systems Ltd with Geoff Chapman; after an unsuccessful terminal-emulator product the company pivoted to telex software and later messaging middleware, operated for seventeen years across London, the United States and Asia, and was sold. Artclear, where he is a non-executive director, describes him as an \"Angel investor and entrepreneurial non-executive director in software and services businesses\". In a May 2021 Archives of IT oral-history interview he named Thought Machine, Form3, Century-Tech and Transversal among his investments, said a typical first investment is \"about 100 grand\", and said five is his optimum number of boards, of which he chairs three.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Thought Machine",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "core banking software",
        role: null,
        evidence: [
          {
            url: "https://archivesit.org.uk/interviews/richard-little/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Form3",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "payments infrastructure",
        role: null,
        evidence: [
          {
            url: "https://archivesit.org.uk/interviews/richard-little/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Century-Tech",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "EdTech",
        subsector: "AI learning platform",
        role: null,
        evidence: [
          {
            url: "https://archivesit.org.uk/interviews/richard-little/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Transversal",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "knowledge management",
        role: null,
        evidence: [
          {
            url: "https://archivesit.org.uk/wp-content/uploads/2021/06/Richard-Little-Full-Interview-Transcript.pdf",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Archives of IT interview profile (interviewed 6 May 2021)",
        url: "https://archivesit.org.uk/interviews/richard-little/"
      },
      {
        label: "Archives of IT full interview transcript (PDF)",
        url: "https://archivesit.org.uk/wp-content/uploads/2021/06/Richard-Little-Full-Interview-Transcript.pdf"
      },
      {
        label: "Artclear team page - Richard Little",
        url: "https://www.artclear.com/team/richard-little"
      },
      {
        label: "Artclear full team page (control fetch)",
        url: "https://www.artclear.com/team"
      }
    ]
  },

  "charlie-songhurst": {
    name: "Charlie Songhurst",
    type: "angel",
    investingStatus: "active",
    investingMode: null,
    vehicle: null,
    vehicleNote: "No personal investment vehicle identified. Meta's 2025 proxy statement lists his principal employment simply as 'Technology Investor (2013-present)'. He is separately listed on Acequia Capital's own team page under 'Venture Partners & Advisors' as 'Sr. Venture Partner' - a venture-partner/advisory tier distinct from that firm's 'Founder & Managing Partner' and 'General Partner' roles, so he was not treated as a fund GP.",
    role: "Technology investor",
    basedIn: null,
    education: [
      "B.A. Politics, Philosophy and Economics, University of Oxford"
    ],
    previousExperience: [
      "General Manager and Head of Global Corporate Strategy, Microsoft (2009-2013)",
      "General Manager, Microsoft (2005-2009)"
    ],
    operatingBackground: [
      "corporate strategy executive"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Finance",
        evidence: "Served as General Manager and Head of Global Corporate Strategy at Microsoft focused on partnerships and M&A, and in that role led the Yahoo and Skype acquisitions.",
        url: "https://about.fb.com/news/2025/01/dana-white-john-elkann-charlie-songhurst-meta-board-of-directors/"
      }
    ],
    boardSeats: [
      {
        company: "Meta Platforms, Inc.",
        status: "current",
        url: "https://about.fb.com/news/2025/01/dana-white-john-elkann-charlie-songhurst-meta-board-of-directors/"
      }
    ],
    advisoryRoles: [
      {
        company: "Acequia Capital",
        role: "Sr. Venture Partner",
        status: "current",
        url: "https://www.acecap.com/about-1"
      },
      {
        company: "Meta Platforms, Inc.",
        role: "Member of Meta Advisory Group",
        status: "former",
        url: "https://www.sec.gov/Archives/edgar/data/1326801/000132680125000040/meta-20250417.htm"
      }
    ],
    syndicateMemberships: [],
    geographicPatterns: [
      "Global"
    ],
    careerMilestones: [
      {
        year: 2013,
        event: "Becomes a full-time technology investor after leaving Microsoft."
      },
      {
        year: 2025,
        event: "Joins the board of directors of Meta Platforms, Inc."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Songhurst ran global corporate strategy at Microsoft, where he led the Yahoo and Skype acquisitions, giving him direct experience of large-cap M&A and corporate partnership processes. Meta's announcement of his board appointment describes his experience as spanning enterprise SaaS, AI and deep tech. His current public-company directorship at Meta places him inside a large technology platform's governance.",
    biography: "Charlie Songhurst is a technology investor. He received a Bachelor's degree in Politics, Philosophy and Economics from the University of Oxford. He was a General Manager at Microsoft from 2005 and served as General Manager and Head of Global Corporate Strategy from 2009 to 2013, a role focused on partnerships and M&A in which he led the Yahoo and Skype acquisitions. Meta Platforms' proxy statement records his principal employment as 'Technology Investor' from 2013 to the present, and Meta announced in January 2025 that he would join its board of directors alongside Dana White and John Elkann. Meta's announcement states that he 'currently invests in more than 500 startups globally.' He is also listed on Acequia Capital's team page as a Senior Venture Partner.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "StackOne",
        stage: "Seed",
        year: 2024,
        yearPrecision: "year",
        sector: "Developer Tools & Infrastructure",
        subsector: "integration infrastructure / API connectors",
        role: null,
        evidence: [
          {
            url: "https://www.stackone.com/press-releases/stackone-secures-3-6m-in-seed-funding-led-by-episode-1",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Octomind",
        stage: "Seed",
        year: 2024,
        yearPrecision: "year",
        sector: "Developer Tools & Infrastructure",
        subsector: "AI end-to-end software testing",
        role: null,
        evidence: [
          {
            url: "https://www.thesaasnews.com/news/octomind-secures-4-5-million-in-seed-round",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "iLoF",
        stage: "Seed",
        year: 2022,
        yearPrecision: "year",
        sector: "Biotech",
        subsector: "AI and photonics for drug discovery / clinical trials",
        role: null,
        evidence: [
          {
            url: "https://www.thesaasnews.com/news/ilof-raises-4-1-million-in-seed-round/",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Meta newsroom - board appointment announcement",
        url: "https://about.fb.com/news/2025/01/dana-white-john-elkann-charlie-songhurst-meta-board-of-directors/"
      },
      {
        label: "Meta Platforms DEF 14A proxy statement (2025) - director biography",
        url: "https://www.sec.gov/Archives/edgar/data/1326801/000132680125000040/meta-20250417.htm"
      },
      {
        label: "Acequia Capital team page",
        url: "https://www.acecap.com/about-1"
      },
      {
        label: "StackOne seed round press release",
        url: "https://www.stackone.com/press-releases/stackone-secures-3-6m-in-seed-funding-led-by-episode-1"
      }
    ]
  },

  "huang-shao-ning": {
    name: "Huang Shao-Ning",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "Invests personal capital. AngelCentral Pte Ltd is the angel network/education and syndication platform she co-founded and is a partner of; it is not stated to be a fund that holds her personal investments.",
    role: "Partner and Chief Angel, AngelCentral",
    basedIn: "Singapore",
    education: [],
    previousExperience: [
      "Co-founder, JobsCentral (2000-2011; business exited to CareerBuilder in 2011)",
      "Managing Director / Group Deputy CEO, JobsCentral Group"
    ],
    operatingBackground: [
      "founder"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Operations",
        evidence: "Started JobsCentral as a fresh graduate in 2000 and grew it to an exit to CareerBuilder in 2011; served as Managing Director / Group Deputy CEO of JobsCentral Group.",
        url: "https://www.angelcentral.co/about"
      },
      {
        capability: "Industry Network",
        evidence: "Partner and Chief Angel of AngelCentral, a Singapore angel network she set up in 2018; in her own words 'for Angel Central, we have 140 members. Hundred 20 plus individuals.'",
        url: "https://www.bravesea.com/blog/shao-ning-huang"
      }
    ],
    boardSeats: [],
    advisoryRoles: [],
    syndicateMemberships: [
      {
        name: "AngelCentral",
        url: "https://www.angelcentral.co/about"
      }
    ],
    geographicPatterns: [
      "Singapore"
    ],
    careerMilestones: [
      {
        year: 2000,
        event: "Starts her first business, JobsCentral, as a fresh graduate."
      },
      {
        year: 2011,
        event: "Exits JobsCentral to CareerBuilder."
      },
      {
        year: 2018,
        event: "Sets up AngelCentral, a Singapore angel network and education platform."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "She built and sold a Singapore recruitment marketplace over eleven years, so she has direct operating experience of taking a bootstrapped consumer-and-employer marketplace from founding to acquisition. As Partner and Chief Angel of AngelCentral she runs an angel network with over 140 members, which gives founders a route to a pool of Southeast Asian angel investors. Her attributable investments are Singapore-based early-stage companies in digital health, mobility and enterprise software.",
    biography: "Huang Shao-Ning started her first business, JobsCentral, as a fresh graduate in 2000 and grew it until it was sold to CareerBuilder in 2011, where she had served as Managing Director and Group Deputy CEO. In her own words she 'set up Angel Central in 2018', and she is Partner and Chief Angel of AngelCentral, a Singapore-based angel network and education platform. AngelCentral's own site states that she and Lim Der Shing have investments in over 40 startups and 8 VC investments. She was quoted in her AngelCentral capacity as recently as October 2025 commenting on Southeast Asian angel funding conditions. Named financings connect her individually to Homage, Motorist.sg and EngageRocket.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Homage",
        stage: "Seed",
        year: 2017,
        yearPrecision: "year",
        sector: "Digital Health",
        subsector: "home-based care services",
        role: null,
        evidence: [
          {
            url: "https://www.digitalnewsasia.com/startups/homage-raises-us415mil-series-funding",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Motorist.sg",
        stage: "Seed",
        year: 2019,
        yearPrecision: "year",
        sector: "Mobility",
        subsector: "vehicle transactions and car management platform",
        role: null,
        evidence: [
          {
            url: "https://www.ibtimes.sg/motorist-sg-secures-seed-funding-der-shing-lim-shao-ning-huang-royston-tay-29041",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "EngageRocket",
        stage: "Series A",
        year: null,
        yearPrecision: null,
        sector: "Enterprise Software",
        subsector: "employee engagement and people analytics",
        role: null,
        evidence: [
          {
            url: "https://www.engagerocket.co/series-a",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "AngelCentral - About (team bios)",
        url: "https://www.angelcentral.co/about"
      },
      {
        label: "TNGlobal / TechNode Global, 23 Oct 2025 - quoted as Chief Angel at AngelCentral",
        url: "https://technode.global/2025/10/23/angel-investing-continues-on-but-with-more-caution-and-selection-angel-central/"
      },
      {
        label: "BRAVE Southeast Asia Tech Podcast - Shao-Ning Huang (E267)",
        url: "https://www.bravesea.com/blog/shao-ning-huang"
      },
      {
        label: "The Busy Woman Project - Together On Top profile",
        url: "https://thebusywomanproject.com/together-on-top-huang-shao-ning-lim-der-shing-jobscentral-angelcentral/"
      },
      {
        label: "Digital News Asia - Homage Series A",
        url: "https://www.digitalnewsasia.com/startups/homage-raises-us415mil-series-funding"
      },
      {
        label: "IBTimes Singapore - Motorist.sg seed round",
        url: "https://www.ibtimes.sg/motorist-sg-secures-seed-funding-der-shing-lim-shao-ning-huang-royston-tay-29041"
      },
      {
        label: "EngageRocket - Series A announcement",
        url: "https://www.engagerocket.co/series-a"
      }
    ]
  },

  "david-ford": {
    name: "David Ford",
    type: "angel",
    investingStatus: "active",
    investingMode: "syndicate",
    vehicle: "Arrowfield Capital",
    vehicleNote: "Arrowfield Capital describes itself as an Oxford-based life sciences angel syndicate; ARROWFIELD CAPITAL NOMINEES LTD (company no. 11921085) lists David Ian Ford as its sole active director, appointed 2 April 2019.",
    role: "Full-time angel investor; Chair of ViaNautis Bio",
    basedIn: "Oxford, United Kingdom",
    education: [
      "Master's degree in Biochemistry, University of Oxford"
    ],
    previousExperience: [
      "Pan-European equity analyst covering biotechnology, pharmaceuticals and chemicals, PRICOA Capital Group (from 1997)",
      "Managing Director & Head of Credit Research, Intermediate Capital Group plc (European and Asian investments, over EUR 10bn of assets)"
    ],
    operatingBackground: [
      "equity research analyst",
      "banker"
    ],
    statedSectorFocus: [
      "Life sciences"
    ],
    statedStageFocus: [
      "Pre-Seed"
    ],
    checkSize: null,
    leadBehavior: "Lead",
    capabilities: [
      {
        capability: "Finance",
        evidence: "Managing Director and Head of Credit Research at Intermediate Capital Group plc, covering European and Asian investments of more than EUR 10bn in assets; began his career in 1997 as a pan-European equity analyst at PRICOA Capital Group.",
        url: "https://vianautis.com/staff-member/david-ford/"
      },
      {
        capability: "Fundraising",
        evidence: "Led ViaNautis Bio's 2019 financing round; his stated interest is working with young companies to attract investment capital for growth, and the company went on to raise USD 25m in 2023.",
        url: "https://www.cambridgeangels.com/angel-interviewss/2024/3/4/a-ford-between-oxford-and-cambridge-an-interview-with-david-ford-z2r5y"
      },
      {
        capability: "Clinical/Life Sciences",
        evidence: "Oxford biochemistry graduate and former biotech and pharmaceuticals equity analyst who now invests exclusively in life sciences and healthcare and chairs ViaNautis Bio, a genetic-medicines delivery company.",
        url: "https://vianautis.com/staff-member/david-ford/"
      },
      {
        capability: "Industry Network",
        evidence: "Member of Cambridge Angels, Cambridge Capital Group, OION and the UK Business Angels Association, and manages the Arrowfield Capital syndicate.",
        url: "https://vianautis.com/staff-member/david-ford/"
      }
    ],
    boardSeats: [
      {
        company: "ViaNautis Bio",
        status: "current",
        url: "https://www.cambridgeangels.com/angel-interviewss/2024/3/4/a-ford-between-oxford-and-cambridge-an-interview-with-david-ford-z2r5y"
      },
      {
        company: "Alcentra",
        status: "current",
        url: "https://www.oxfordplus.co.uk/episode/david-ford"
      },
      {
        company: "ARROWFIELD CAPITAL NOMINEES LTD",
        status: "current",
        url: "https://find-and-update.company-information.service.gov.uk/company/11921085/officers"
      }
    ],
    advisoryRoles: [],
    syndicateMemberships: [
      {
        name: "Cambridge Angels",
        url: "https://vianautis.com/staff-member/david-ford/"
      },
      {
        name: "Cambridge Capital Group",
        url: "https://vianautis.com/staff-member/david-ford/"
      },
      {
        name: "OION",
        url: "https://vianautis.com/staff-member/david-ford/"
      },
      {
        name: "UK Business Angels Association",
        url: "https://vianautis.com/staff-member/david-ford/"
      }
    ],
    geographicPatterns: [
      "United Kingdom"
    ],
    careerMilestones: [
      {
        year: 1997,
        event: "Begins his career as a pan-European equity analyst at PRICOA Capital Group covering biotechnology, pharmaceuticals and chemicals."
      },
      {
        year: 2016,
        event: "Starts focusing on early-stage investment, running the Arrowfield Capital syndicate."
      },
      {
        year: 2017,
        event: "Leaves full-time executive employment to invest as an angel and take non-executive director roles."
      },
      {
        year: 2018,
        event: "Joins Cambridge Angels."
      },
      {
        year: 2019,
        event: "Appointed sole director of ARROWFIELD CAPITAL NOMINEES LTD; leads ViaNautis Bio's financing round."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Ford's two decades in institutional credit and equity research, including running credit research for over EUR 10bn of assets at Intermediate Capital Group, sit alongside an Oxford biochemistry degree and a career covering biotech and pharmaceutical equities, so he can assess both the science and the capital structure of a life sciences company. He has led at least one seed financing (ViaNautis Bio, 2019) and chairs that company, and Cambridge Angels reports he sits on several boards. His memberships in Cambridge Angels, Cambridge Capital Group, OION and the UK Business Angels Association place him inside the Oxford and Cambridge angel networks.",
    biography: "David Ford is an Oxford-based angel investor who invests exclusively in life sciences and healthcare through Arrowfield Capital, which describes itself as an Oxford-based life sciences angel syndicate investing from pre-seed stage and beyond. He read biochemistry at Oxford and began his career in 1997 as a pan-European equity analyst at PRICOA Capital Group covering biotechnology, pharmaceuticals and chemicals, later becoming Managing Director and Head of Credit Research at Intermediate Capital Group plc, where he oversaw European and Asian investments of more than EUR 10bn. He left full-time executive employment in 2017 to invest and take non-executive roles, joining Cambridge Angels in 2018, and Companies House records him as the sole director of ARROWFIELD CAPITAL NOMINEES LTD from April 2019. Cambridge Angels reported in March 2024 that he had made around 25 investments and served on the boards of several companies, and he chairs ViaNautis Bio, whose 2019 round he led and which raised USD 25m in 2023. He also serves as a non-executive director of a listed venture capital trust and of Alcentra.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "ViaNautis Bio",
        stage: null,
        year: 2019,
        yearPrecision: "year",
        sector: "Biotech",
        subsector: "nanoparticle delivery of genetic medicines",
        role: "Led the round; now Chair",
        evidence: [
          {
            url: "https://www.cambridgeangels.com/angel-interviewss/2024/3/4/a-ford-between-oxford-and-cambridge-an-interview-with-david-ford-z2r5y",
            type: "press",
            checked: "2026-09-02"
          },
          {
            url: "https://vianautis.com/staff-member/david-ford/",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "MitoRx Therapeutics",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Biotech",
        subsector: "mitochondrial-protective therapeutics for neurodegenerative disease",
        role: null,
        evidence: [
          {
            url: "https://www.oxfordplus.co.uk/episode/david-ford",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "ViaNautis - David Ford bio",
        url: "https://vianautis.com/staff-member/david-ford/"
      },
      {
        label: "Cambridge Angels interview (March 2024)",
        url: "https://www.cambridgeangels.com/angel-interviewss/2024/3/4/a-ford-between-oxford-and-cambridge-an-interview-with-david-ford-z2r5y"
      },
      {
        label: "Oxford+ podcast episode page",
        url: "https://www.oxfordplus.co.uk/episode/david-ford"
      },
      {
        label: "Arrowfield Capital site",
        url: "https://arrowfieldcapital.wordpress.com/"
      },
      {
        label: "UK Companies House - ARROWFIELD CAPITAL NOMINEES LTD officers",
        url: "https://find-and-update.company-information.service.gov.uk/company/11921085/officers"
      }
    ]
  },

  "francis-santora": {
    name: "Francis Santora",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "Describes himself as a \"solo angel\" investing \"just with my own capital\"; no fund, syndicate or SPV entity is named in any source located.",
    role: "Full-time angel investor",
    basedIn: "Hoboken, New Jersey, United States",
    education: [],
    previousExperience: [
      "Epic (medical software company) - joined directly out of college; job title not stated in any source located"
    ],
    operatingBackground: [],
    statedSectorFocus: [
      "SaaS",
      "Productivity tools",
      "Recurring subscription software",
      "Collaboration tools"
    ],
    statedStageFocus: [
      "Pre-Seed",
      "Seed"
    ],
    checkSize: "USD 10k-45k",
    leadBehavior: "Unknown",
    capabilities: [],
    boardSeats: [],
    advisoryRoles: [],
    syndicateMemberships: [],
    geographicPatterns: [
      "United States",
      "Canada",
      "United Kingdom",
      "Ireland",
      "Australia",
      "New Zealand",
      "Japan"
    ],
    careerMilestones: [
      {
        year: 2021,
        event: "Begins angel investing (stated as \"about 3 years\" of investing in a June 2024 interview)."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Santora invests his own capital full-time at pre-seed and seed in B2B SaaS and subscription software, writing stated cheques of \$10k-\$45k, which makes him a fit for founders assembling an early angel round rather than a lead. He states that his value-add comes from his network - fundraising introductions, finding employees, and connecting founders with advisers. He began his career at the medical software company Epic directly out of college.",
    biography: "Francis Santora is a US angel investor based in Hoboken, New Jersey, who describes himself as a \"NYC area angel\" and a \"solo angel\". He began his career at Epic, a medical software company, straight out of college, and started angel investing around 2021 after reading Jason Calacanis's book \"Angel\". In a June 2024 interview he stated \"I do it full-time now just with my own capital\", and his investor profile lists a \$10k-\$45k cheque size and 41 investments to date. He states he invests in SaaS, productivity, subscription and collaboration software in the US and comparable markets including the UK, Canada, Ireland, Australia, New Zealand and Japan. Named investments include Edge, whose seed round he joined in mid-2021, and the London fintech Caribou (formerly Rebank).",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Edge",
        stage: "Seed",
        year: 2021,
        yearPrecision: "year",
        sector: "Enterprise Software",
        subsector: "review generation and employee incentive software for service businesses",
        role: null,
        evidence: [
          {
            url: "https://www.openvc.app/blog/francis-santora",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Caribou",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "formerly Rebank; London-based",
        role: null,
        evidence: [
          {
            url: "https://www.openvc.app/blog/francis-santora",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "OpenVC interview, \"Two of my angel investments hit \$10M ARR\", 4 June 2024",
        url: "https://www.openvc.app/blog/francis-santora"
      },
      {
        label: "OpenVC investor profile (self-submitted)",
        url: "https://www.openvc.app/fund/Francis%20Santora"
      },
      {
        label: "The Accelerator with Michael Conniff - podcast episode",
        url: "https://michaelconniff.com/francis-santora-is-an-angel-investor-and-a-blogger/"
      }
    ]
  },

  "jim-warwick": {
    name: "Jim Warwick",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "No personal investment vehicle found. He invests as an individual member of Cambridge Angels and is a director of the group's company, Cambridge Angels Group Ltd (company 11413268).",
    role: "Business angel and non-executive director",
    basedIn: "Cambridge, United Kingdom",
    education: [
      "Computer Science, University of Cambridge (degree started 1983)"
    ],
    previousExperience: [
      "Chief Operating Officer, Abcam (15 years at the company; stepped down from the board at the end of 2016), leading Innovation & Manufacturing, IT, Operations and HR",
      "Telecoms consulting (early career)"
    ],
    operatingBackground: [
      "operating executive"
    ],
    statedSectorFocus: [
      "Sector agnostic",
      "Life sciences",
      "Climate change and net zero"
    ],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Operations",
        evidence: "Chief Operating Officer of Abcam, where he led Innovation & Manufacturing, IT, Operations and HR over a 15-year career at the company.",
        url: "https://www.cambridgenetwork.co.uk/news/jim-warwick-steps-down-abcam-board"
      },
      {
        capability: "Manufacturing",
        evidence: "As Abcam COO he led the company's Innovation & Manufacturing function; the Qkine funding announcement credits him with extensive experience in the life science reagent sector.",
        url: "https://qkine.com/2018/04/23/qkine-backed-by-cambridge-enterprise-and-a-quintet-of-angels/"
      },
      {
        capability: "Industry Network",
        evidence: "Active director of Cambridge Angels Group Ltd (company 11413268) since 5 October 2021, and a listed member of Cambridge Angels.",
        url: "https://find-and-update.company-information.service.gov.uk/officers/YrL5D4RdDxuOn8yXU_GTx5GOpHk/appointments"
      }
    ],
    boardSeats: [
      {
        company: "Qkine Limited",
        status: "current",
        url: "https://find-and-update.company-information.service.gov.uk/company/10470662/officers"
      },
      {
        company: "Cambridge Angels Group Ltd",
        status: "current",
        url: "https://find-and-update.company-information.service.gov.uk/officers/YrL5D4RdDxuOn8yXU_GTx5GOpHk/appointments"
      },
      {
        company: "Abcam",
        status: "former",
        url: "https://www.cambridgenetwork.co.uk/news/jim-warwick-steps-down-abcam-board"
      }
    ],
    advisoryRoles: [],
    syndicateMemberships: [
      {
        name: "Cambridge Angels",
        url: "https://www.cambridgeangels.com/angels"
      }
    ],
    geographicPatterns: [
      "United Kingdom"
    ],
    careerMilestones: [
      {
        year: 2016,
        event: "Steps down from the Abcam board after 15 years, most recently as Chief Operating Officer."
      },
      {
        year: 2018,
        event: "Joins Cambridge Angels in early 2018 and says he became serious about making angel investments."
      },
      {
        year: 2018,
        event: "Invests in Qkine and joins its board as a director on 21 March 2018."
      },
      {
        year: 2021,
        event: "Becomes a director of Cambridge Angels Group Ltd."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Warwick spent 15 years at Abcam, ending as Chief Operating Officer with responsibility for Innovation & Manufacturing, IT, Operations and HR, so he can help life-science and reagent companies with scaling operations and manufacturing. The Qkine funding announcement credits him with extensive experience in the life science reagent and digital sectors, and he joined that company's board at investment. As an active director of Cambridge Angels Group Ltd he is embedded in the Cambridge angel community and describes himself as a hands-off investor once diligence is complete.",
    biography: "Jim Warwick, recorded at Companies House as David James Warwick, began a Computer Science degree at the University of Cambridge in 1983 and worked in telecoms consulting before joining Abcam, the Cambridge life-science reagents company. He spent 15 years there, most recently as Chief Operating Officer leading Innovation & Manufacturing, IT, Operations and HR, and stepped down from the board at the end of 2016. He joined Cambridge Angels in early 2018, which he describes as the point he became serious about angel investing, and he says he is pretty sector agnostic while gravitating towards life sciences and more recently climate change and net-zero companies. He invested in Qkine in 2018 and has been a director of the company since 21 March 2018, and he has been an active director of Cambridge Angels Group Ltd since October 2021. He has lived in Cambridge for around 30 years.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Qkine",
        stage: "Seed",
        year: 2018,
        yearPrecision: "year",
        sector: "Biotech",
        subsector: "growth factor proteins for stem cell research",
        role: "Board director",
        evidence: [
          {
            url: "https://qkine.com/2018/04/23/qkine-backed-by-cambridge-enterprise-and-a-quintet-of-angels/",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Nova Pangaea Technologies",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Climate & Energy",
        subsector: "converting plant waste into biochemicals and biofuels",
        role: null,
        evidence: [
          {
            url: "https://www.cambridgeangels.com/angel-interviewss/jimwarwick-hywpd",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Cambridge Angels interview with Jim Warwick",
        url: "https://www.cambridgeangels.com/angel-interviewss/jimwarwick-hywpd"
      },
      {
        label: "Cambridge Angels member list",
        url: "https://www.cambridgeangels.com/angels"
      },
      {
        label: "Qkine seed funding announcement",
        url: "https://qkine.com/2018/04/23/qkine-backed-by-cambridge-enterprise-and-a-quintet-of-angels/"
      },
      {
        label: "Companies House officer appointments",
        url: "https://find-and-update.company-information.service.gov.uk/officers/YrL5D4RdDxuOn8yXU_GTx5GOpHk/appointments"
      },
      {
        label: "Companies House, Qkine Limited officers",
        url: "https://find-and-update.company-information.service.gov.uk/company/10470662/officers"
      },
      {
        label: "Companies House, Cambridge Angels Group Ltd",
        url: "https://find-and-update.company-information.service.gov.uk/company/11413268"
      },
      {
        label: "Cambridge Network, Jim Warwick steps down from Abcam board",
        url: "https://www.cambridgenetwork.co.uk/news/jim-warwick-steps-down-abcam-board"
      }
    ]
  },

  "lim-der-shing": {
    name: "Lim Der Shing",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "Deploys his own money. AngelCentral Pte Ltd, which he co-founded and is a partner of, is an angel network and syndication platform rather than a vehicle stated to hold his personal investments.",
    role: "Co-founder and Partner, AngelCentral; angel investor",
    basedIn: "Singapore",
    education: [],
    previousExperience: [
      "Co-founder and CEO, JobsCentral Group (2000-2011; acquired by CareerBuilder in 2011)"
    ],
    operatingBackground: [
      "founder"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Operations",
        evidence: "Former CEO and co-founder of JobsCentral Group, a career platform he led until its 2011 acquisition by CareerBuilder.",
        url: "https://www.mlaw.gov.sg/news/press-releases/2022-03-07-board-changes-at-the-intellectual-property-office-of-singapore/"
      },
      {
        capability: "Industry Network",
        evidence: "Established AngelCentral, an angel investment network serving investors across Singapore and Southeast Asia; appointed to the Board of the Intellectual Property Office of Singapore and previously served on the Committee on the Future Economy, co-leading the Subcommittee on Future Corporate Capabilities and Innovation.",
        url: "https://www.mlaw.gov.sg/news/press-releases/2022-03-07-board-changes-at-the-intellectual-property-office-of-singapore/"
      }
    ],
    boardSeats: [
      {
        company: "Intellectual Property Office of Singapore (IPOS)",
        status: "former",
        url: "https://www.mlaw.gov.sg/news/press-releases/2022-03-07-board-changes-at-the-intellectual-property-office-of-singapore/"
      }
    ],
    advisoryRoles: [],
    syndicateMemberships: [
      {
        name: "AngelCentral",
        url: "https://www.angelcentral.co/about"
      }
    ],
    geographicPatterns: [
      "Singapore"
    ],
    careerMilestones: [
      {
        year: 2000,
        event: "Co-founds JobsCentral Group and becomes its CEO."
      },
      {
        year: 2011,
        event: "JobsCentral Group is acquired by CareerBuilder."
      },
      {
        year: 2018,
        event: "Co-founds AngelCentral, a Singapore and Southeast Asia angel investment network."
      },
      {
        year: 2022,
        event: "Appointed a member of the Board of the Intellectual Property Office of Singapore for a two-year term from 1 April 2022."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "He co-founded and ran JobsCentral Group as CEO for eleven years to an acquisition by CareerBuilder, so he can speak to building and selling a Singapore recruitment platform. AngelCentral's own site describes him as an experienced angel investor who has put over USD 5m into 40 startups and 8 VC funds with Huang Shao-Ning, and says he serves on multiple startup boards. His Singapore public-sector roles - the IPOS board, the Institute of Technical Education board, the Pro-Enterprise Panel and the Committee on the Future Economy - give him direct exposure to Singapore government policy on startups and skills.",
    biography: "Lim Der Shing co-founded JobsCentral Group in 2000 and led it as CEO until it was acquired by US career platform CareerBuilder in 2011. He then established AngelCentral, an angel investment network serving investors across Singapore and Southeast Asia, where he is a co-founder and partner. AngelCentral's site states he 'is an experienced Angel Investor and has invested (with Shao Ning) over USD\$5m into 40 startups and 8 VC funds', and in a podcast interview he described 'Almost 50 companies. Almost 10 million of our own money into different startups and VC funds.' Singapore's Ministry of Law announced his appointment to the Board of the Intellectual Property Office of Singapore effective 1 April 2022, and noted his roles on the Institute of Technical Education Board, the Pro-Enterprise Panel and as Chairman of the SkillsFuture Advice Functional Committee. Named financings connect him individually to Homage and Motorist.sg.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Homage",
        stage: "Seed",
        year: 2017,
        yearPrecision: "year",
        sector: "Digital Health",
        subsector: "home-based care services",
        role: null,
        evidence: [
          {
            url: "https://www.digitalnewsasia.com/startups/homage-raises-us415mil-series-funding",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Motorist.sg",
        stage: "Seed",
        year: 2019,
        yearPrecision: "year",
        sector: "Mobility",
        subsector: "vehicle transactions and car management platform",
        role: null,
        evidence: [
          {
            url: "https://www.ibtimes.sg/motorist-sg-secures-seed-funding-der-shing-lim-shao-ning-huang-royston-tay-29041",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "AngelCentral - About (team bios)",
        url: "https://www.angelcentral.co/about"
      },
      {
        label: "Singapore Ministry of Law - Board Changes at IPOS (7 Mar 2022)",
        url: "https://www.mlaw.gov.sg/news/press-releases/2022-03-07-board-changes-at-the-intellectual-property-office-of-singapore/"
      },
      {
        label: "BRAVE Southeast Asia Tech Podcast - Der Shing Lim (E315)",
        url: "https://www.bravesea.com/blog/der-shing-lim"
      },
      {
        label: "The Busy Woman Project - Together On Top profile",
        url: "https://thebusywomanproject.com/together-on-top-huang-shao-ning-lim-der-shing-jobscentral-angelcentral/"
      },
      {
        label: "Dr Wealth - Angel Investing in Singapore: 6 Key Lessons",
        url: "https://drwealth.com/angel-investing-singapore/"
      },
      {
        label: "Digital News Asia - Homage Series A",
        url: "https://www.digitalnewsasia.com/startups/homage-raises-us415mil-series-funding"
      },
      {
        label: "IBTimes Singapore - Motorist.sg seed round",
        url: "https://www.ibtimes.sg/motorist-sg-secures-seed-funding-der-shing-lim-shao-ning-huang-royston-tay-29041"
      }
    ]
  },

  "michael-stoppelman": {
    name: "Michael Stoppelman",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "States on the LA Venture podcast that he funds each cheque half from his own money and half from scout money; no named vehicle is published.",
    role: "Angel investor and advisor",
    basedIn: "Los Angeles, California, United States",
    education: [],
    previousExperience: [
      "SVP of Engineering, Yelp",
      "Engineer, Google (pre-IPO)"
    ],
    operatingBackground: [
      "engineer"
    ],
    statedSectorFocus: [
      "Enterprise Software",
      "Cybersecurity"
    ],
    statedStageFocus: [
      "Seed"
    ],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Technical",
        evidence: "Former SVP of Engineering at Yelp, as stated in his biography on SignalFire's own team page.",
        url: "https://www.signalfire.com/team/michael-stoppelman"
      },
      {
        capability: "Hiring",
        evidence: "States that his role at Yelp gave him 'the opportunity to build a world class engineering team'.",
        url: "https://x.com/stopman/status/1644385747049533440"
      }
    ],
    boardSeats: [],
    advisoryRoles: [
      {
        organization: "SignalFire",
        status: "current",
        note: "Listed in SignalFire's Advisor Network under Engineering. The page states advisors 'are not employed by SignalFire and do not provide investment advisory services to clients on behalf of SignalFire.'",
        url: "https://www.signalfire.com/team"
      }
    ],
    syndicateMemberships: [],
    geographicPatterns: [],
    careerMilestones: [],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Stoppelman ran engineering at Yelp as SVP of Engineering and was an engineer at Google before its IPO, so he can help technical founders with engineering execution and with building and scaling an engineering organisation. He states he invests in software, enterprise SaaS, and the compliance and security spaces, and prefers to come in early, which matches seed-stage technical companies. He sits in SignalFire's advisor network, giving him a working relationship with an institutional seed investor.",
    biography: "Michael Stoppelman is an angel investor and advisor and the former SVP of Engineering at Yelp, where he built the company's engineering organisation. Before Yelp he was an engineer at a pre-IPO Google. On the LA Venture podcast in March 2020 he described investing full-time as an angel, said he had made on the order of 140 angel investments, and explained that he funds each cheque half from his own money and half from scout money, keeping cheques small. He states he likes to invest in software and enterprise SaaS, with particular interest in the compliance and security spaces, and typically at the seed stage. He appears in SignalFire's Advisor Network, which notes that advisors are not employed by the firm.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "dot.LA",
        stage: "Seed",
        year: 2020,
        yearPrecision: "year",
        sector: "Consumer",
        subsector: "startup and tech news media",
        role: null,
        evidence: [
          {
            url: "https://www.prweb.com/releases/startup-news-site-dot-la-announces-4-million-seed-round-will-launch-january-27-831187177.html",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "SignalFire advisor profile",
        url: "https://www.signalfire.com/team/michael-stoppelman"
      },
      {
        label: "SignalFire team page (Advisor Network)",
        url: "https://www.signalfire.com/team"
      },
      {
        label: "LA Venture podcast, March 2020",
        url: "https://www.tenoneten.com/podcast/michael-stoppelman-angel-scout-friend"
      },
      {
        label: "dot.LA seed round announcement, January 2020",
        url: "https://www.prweb.com/releases/startup-news-site-dot-la-announces-4-million-seed-round-will-launch-january-27-831187177.html"
      }
    ]
  },

  "simon-blakey": {
    name: "Simon Blakey",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "No named personal investment vehicle is stated in any source; he invests personally and alongside Cambridge Angels. He separately chairs the investment committee of Playfair Capital and sits on the investment committee of the Angel CoFund, but those are committee roles, not vehicles through which his own angel investing is described.",
    role: "Full-time angel investor",
    basedIn: "United Kingdom",
    education: [
      "Biochemistry, University of Birmingham",
      "Trained as a management accountant (Chartered Institute of Management Accountants)"
    ],
    previousExperience: [
      "Co-founder & Managing Director, Avonmore Developments",
      "Property development in west London (late 1990s)"
    ],
    operatingBackground: [
      "property developer",
      "management accountant"
    ],
    statedSectorFocus: [
      "B2B SaaS",
      "Deep Tech"
    ],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Finance",
        evidence: "Trained as a management accountant and chairs the investment committee at Playfair Capital, currently investing out of its GBP 50M Fund III; also sits on the investment committee of the Angel CoFund.",
        url: "https://www.cambridgeangels.com/angel-interviewss/simonblakey"
      },
      {
        capability: "Fundraising",
        evidence: "Has completed over 100 individual funding rounds across a personal portfolio of more than 35 companies over 25 years, and sits on the investment committees of two institutional early-stage investors that co-invest with angels.",
        url: "https://www.syndicateroom.com/articles/angel-insights-simon-blakey"
      },
      {
        capability: "Industry Network",
        evidence: "Board member of Cambridge Angels since 2023, and a committee member listed by ACF Investors (Angel CoFund).",
        url: "https://www.acfinvestors.com/committee/simon-blakey/"
      }
    ],
    boardSeats: [],
    advisoryRoles: [
      {
        company: "Playfair Capital",
        role: "Non-executive; Chair of the investment committee",
        status: "current",
        url: "https://www.acfinvestors.com/committee/simon-blakey/"
      },
      {
        company: "Angel CoFund",
        role: "Investment committee member",
        status: "current",
        url: "https://www.cambridgeangels.com/angel-interviewss/simonblakey"
      }
    ],
    syndicateMemberships: [
      {
        name: "Cambridge Angels (board member since 2023)",
        url: "https://www.cambridgeangels.com/angel-interviewss/simonblakey"
      },
      {
        name: "Angel CoFund / ACF Investors (investment committee)",
        url: "https://www.acfinvestors.com/committee/simon-blakey/"
      }
    ],
    geographicPatterns: [
      "United Kingdom"
    ],
    careerMilestones: [
      {
        year: 2023,
        event: "Joins the board of Cambridge Angels."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Blakey has been a full-time angel for roughly 25 years and states he has completed over 100 individual funding rounds across a personal portfolio of more than 35 companies, so he can help founders with the mechanics of assembling and re-upping angel rounds. He chairs the investment committee at Playfair Capital, which is investing out of a GBP 50M third fund, and sits on the Angel CoFund investment committee, both of which are routes by which UK angel-stage companies reach institutional co-investment. He also has a finance grounding as a trained management accountant and an operating background as co-founder and managing director of Avonmore Developments.",
    biography: "Simon Blakey is a UK angel investor who has been investing since around 1999-2000. He studied biochemistry at the University of Birmingham and trained as a management accountant before moving into property development in west London in the late 1990s; he is co-founder and managing director of Avonmore Developments. ACF Investors describes him as having 'been an full-time angel investor for 20 years and backed over 35 businesses'; in a 2025 SyndicateRoom interview he says he has 'completed over 100 funding rounds across 50-60 investments' over 25 years and is still actively investing. He joined the board of Cambridge Angels in 2023, chairs the investment committee at Playfair Capital, and sits on the investment committee of the Angel CoFund. He also serves on the board of the Sainsbury Centre for Visual Arts and is an Honorary Fellow of the Royal Academy of Music.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Xampla",
        stage: null,
        year: 2019,
        yearPrecision: "year",
        sector: "Deep Tech",
        subsector: "plant-based alternatives to single-use plastics",
        role: null,
        evidence: [
          {
            url: "https://www.cambridgeangels.com/angel-interviewss/simonblakey",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Cambridge Angels - interview with Simon Blakey",
        url: "https://www.cambridgeangels.com/angel-interviewss/simonblakey"
      },
      {
        label: "ACF Investors - Simon Blakey committee bio",
        url: "https://www.acfinvestors.com/committee/simon-blakey/"
      },
      {
        label: "SyndicateRoom - 25 years of angel investing: hard-won lessons from Simon Blakey",
        url: "https://www.syndicateroom.com/articles/angel-insights-simon-blakey"
      }
    ]
  },

  "christopher-mirabile": {
    name: "Christopher Mirabile",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "Launchpad Venture Group states on its own site that it is 'not a fund' and that its leadership 'charges neither management nor carry fees' and takes 'no transactional compensation'; members build individual portfolios with their own money. Separately, the Launchpad team page states Mirabile 'is a general partner and Managing Director of early stage funds Race Point Capital Fund I & II' (confirmed on a third verbatim pass). Race Point is recorded here as a secondary vehicle, not as his angel vehicle, because no source describes it as his principal activity and every primary source still describes him first as a full-time angel.",
    role: "Full-time angel investor; Executive Chair / Senior Managing Director, Launchpad Venture Group",
    basedIn: "Boston, Massachusetts, United States",
    education: [
      "Boston College Law School, Class of 1994 (degree not specified in source)"
    ],
    previousExperience: [
      "Chief Financial Officer, IONA Technologies PLC (public company CFO)",
      "Corporate and securities lawyer, Testa Hurwitz & Thibeault",
      "Management consultant, Price Waterhouse Strategic Consulting Group",
      "Co-founder, Seraf (seraf-investor.com), a portfolio management tool for early-stage investors"
    ],
    operatingBackground: [
      "lawyer",
      "finance executive",
      "management consultant",
      "founder"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Finance",
        evidence: "Served as a public company CFO with IONA Technologies PLC, and earlier as a management consultant with Price Waterhouse's Strategic Consulting Group.",
        url: "https://www.launchpadventuregroup.com/team"
      },
      {
        capability: "Regulatory",
        evidence: "Practised as a corporate and securities lawyer, and served on the U.S. Securities and Exchange Commission's Investor Advisory Committee, chairing its Investor as Owner subcommittee; named as an IAC appointee in the SEC's own press release.",
        url: "https://www.sec.gov/newsroom/press-releases/2020-113"
      },
      {
        capability: "Industry Network",
        evidence: "Chair Emeritus of the Angel Capital Association and Executive Chair / Senior Managing Director of Launchpad Venture Group, a 150+ member Boston angel network; adjunct lecturer in entrepreneurship in Babson College's MBA programme and co-author of six books on early-stage investing.",
        url: "https://www.launchpadventuregroup.com/team"
      }
    ],
    boardSeats: [],
    advisoryRoles: [],
    syndicateMemberships: [
      {
        name: "Launchpad Venture Group",
        url: "https://www.launchpadventuregroup.com/team"
      },
      {
        name: "Angel Capital Association (Chair Emeritus)",
        url: "https://angelcapitalassociation.org/blog/blog-hambleton-lord-and-christopher-mirabile-are-changing-the-face-of-angel-investing/"
      }
    ],
    geographicPatterns: [],
    careerMilestones: [
      {
        year: 2020,
        event: "Appointed to the U.S. Securities and Exchange Commission's Investor Advisory Committee."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Mirabile's sourced experience is in company finance, securities law and governance: he was a public company CFO at IONA Technologies PLC, practised corporate and securities law, and consulted at Price Waterhouse, so he can help founders with financial controls, board mechanics and the legal terms of an early-stage financing. He chairs the investment committee-level governance work of the angel ecosystem as Chair Emeritus of the Angel Capital Association and served on the SEC's Investor Advisory Committee, which gives him direct familiarity with the regulatory framework for private fundraising. He also teaches early-stage investing at Babson and co-founded Seraf, a portfolio management tool, so he is a useful counterparty on round structuring and investor reporting.",
    biography: "Christopher Mirabile is described by Launchpad Venture Group as 'a full-time angel and an active member of the Boston-area angel investing community with investments in more than 65 start-up companies.' Before angel investing he was a public company CFO with IONA Technologies PLC, a corporate and securities lawyer at Testa Hurwitz & Thibeault, and a management consultant with Price Waterhouse's Strategic Consulting Group. He is Executive Chair / Senior Managing Director and a board member of Launchpad Venture Group, Chair Emeritus of the Angel Capital Association, and co-founder of Seraf, a portfolio management tool for early-stage investors. He was appointed in 2020 to the U.S. Securities and Exchange Commission's Investor Advisory Committee, where he chaired the Investor as Owner subcommittee, and he is an adjunct lecturer in entrepreneurship in Babson College's MBA programme. He graduated from Boston College Law School in 1994.",
    lastChecked: "2026-09-02",
    investments: [],
    sources: [
      {
        label: "Launchpad Venture Group - Team",
        url: "https://www.launchpadventuregroup.com/team"
      },
      {
        label: "Launchpad Venture Group - Who We Are",
        url: "https://www.launchpadventuregroup.com/who-we-are"
      },
      {
        label: "SEC press release naming Investor Advisory Committee members",
        url: "https://www.sec.gov/newsroom/press-releases/2020-113"
      },
      {
        label: "Angel Capital Association blog on Hambleton Lord and Christopher Mirabile",
        url: "https://angelcapitalassociation.org/blog/blog-hambleton-lord-and-christopher-mirabile-are-changing-the-face-of-angel-investing/"
      },
      {
        label: "On Boards Podcast episode 72 - guest bio",
        url: "https://onboardspodcast.com/72-christopher-mirabile/"
      },
      {
        label: "Boston College Law School Magazine class note",
        url: "https://lawmagazine.bc.edu/class_note/christopher-mirabile/"
      }
    ]
  },

  "anthony-harris": {
    name: "Anthony Harris",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "Harris sits on the board of Cambridge Angels as its treasurer and is a registered director of both Cambridge Angels Ltd and Cambridge Angels Group Ltd at Companies House. His personal angel investing is established separately from that organisational role: University of Cambridge and Clare Hall pages state in their own words that he has personally invested in around fifty companies. No named personal investment vehicle could be found, and no individual company could be attributed to him by name, so this record carries no investment rows.",
    role: "Business angel and treasurer of Cambridge Angels; Bye-Fellow and Director of Studies in Computer Science, Emmanuel College, University of Cambridge",
    basedIn: "Cambridge, United Kingdom",
    education: [
      "PhD, University of Cambridge (Sidney Sussex College)",
      "English, University of Oxford"
    ],
    previousExperience: [
      "Co-founder and technical director, Software 2000 / Software Imaging (director of record until December 2007, exited via management buy-out)"
    ],
    operatingBackground: [
      "founder",
      "engineer",
      "academic"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Technical",
        evidence: "Before returning to academia, he spent many years in the technology industry, where he co-founded a multi-million dollar software company specialising in high-performance imaging and printer technologies.",
        url: "https://www.emma.cam.ac.uk/people/dr-anthony-harris"
      },
      {
        capability: "Finance",
        evidence: "He is an active angel investor and a member of Cambridge Angels, where he serves on the board as Treasurer.",
        url: "https://www.emma.cam.ac.uk/people/dr-anthony-harris"
      },
      {
        capability: "Fundraising",
        evidence: "For the past twenty years, he has been an active angel investor and VC co-investor. He is on the board of Cambridge Angels and has invested in over 50 companies in both the Oxford and Cambridge ecosystems.",
        url: "https://www.clarehall.cam.ac.uk/news/dr-anthony-harris-keynotes-on-entrepreneurship-in-the-ox-cam-corridor-at-the-british-consul-generals-residence-in-boston/"
      }
    ],
    boardSeats: [
      {
        company: "FLIT (Cambridge) Limited",
        status: "current",
        url: "https://find-and-update.company-information.service.gov.uk/officers/ycJ8JsNC9sGa42OLuFPhQ1nPR08/appointments"
      },
      {
        company: "Cambridge Angels Ltd",
        status: "current",
        url: "https://find-and-update.company-information.service.gov.uk/officers/ycJ8JsNC9sGa42OLuFPhQ1nPR08/appointments"
      },
      {
        company: "Cambridge Angels Group Ltd",
        status: "current",
        url: "https://find-and-update.company-information.service.gov.uk/officers/ycJ8JsNC9sGa42OLuFPhQ1nPR08/appointments"
      },
      {
        company: "Immaterial Ltd",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/ycJ8JsNC9sGa42OLuFPhQ1nPR08/appointments"
      },
      {
        company: "Growth Nation Limited",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/ycJ8JsNC9sGa42OLuFPhQ1nPR08/appointments"
      }
    ],
    advisoryRoles: [],
    syndicateMemberships: [
      {
        name: "Cambridge Angels",
        url: "https://www.cambridgeangels.com/angels"
      }
    ],
    geographicPatterns: [
      "Cambridge, United Kingdom",
      "Oxford, United Kingdom"
    ],
    careerMilestones: [
      {
        year: 2007,
        event: "Exits the software business he co-founded via a management buy-out and returns to higher education."
      },
      {
        year: 2018,
        event: "Appointed a director of FLIT (Cambridge) Limited."
      },
      {
        year: 2021,
        event: "Appointed a director of Cambridge Angels Group Ltd and Cambridge Angels Ltd."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Harris co-founded and ran a software company specialising in high-performance imaging and printer technologies before exiting it via a management buy-out, so he can speak to product and technical questions in software businesses from an operator's seat. As treasurer of Cambridge Angels and honorary treasurer of Regent's Park College, Oxford, his sourced responsibilities are financial and governance ones, and he sits on start-up boards in that capacity. Cambridge sources place his investing activity specifically in the Oxford and Cambridge ecosystems, where he also mentors founders through Cambridge Judge Business School's Accelerate programme.",
    biography: "Anthony Harris is a business angel based in Cambridge, United Kingdom, and an academic at the University of Cambridge, where he is a visiting academic in the Department of Computer Science and Technology and Bye-Fellow and Director of Studies in Computer Science at Emmanuel College. Before returning to higher education in 2007 he co-founded a software company specialising in high-performance imaging and printer technologies, which he left following a management buy-out; Companies House records his directorships of Software 2000 Limited and Software Imaging Limited ending in December 2007. University of Cambridge and Clare Hall pages describe him as an active business angel who has invested in around fifty companies across the Oxford and Cambridge ecosystems and identify him as a member of Cambridge Angels, where he serves on the board as treasurer. Companies House confirms he is a current director of Cambridge Angels Ltd, Cambridge Angels Group Ltd and FLIT (Cambridge) Limited, and was formerly a director of Immaterial Ltd and Growth Nation Limited. No public source seen names an individual company he has personally invested in, so no investment rows are recorded here.",
    lastChecked: "2026-09-02",
    investments: [],
    sources: [
      {
        label: "University of Cambridge, Department of Computer Science and Technology profile",
        url: "https://www.cst.cam.ac.uk/people/awh28"
      },
      {
        label: "Emmanuel College, University of Cambridge profile",
        url: "https://www.emma.cam.ac.uk/people/dr-anthony-harris"
      },
      {
        label: "Clare Hall, University of Cambridge directory profile",
        url: "https://www.clarehall.cam.ac.uk/directory/harris-a/"
      },
      {
        label: "Clare Hall news item, 9 May 2025",
        url: "https://www.clarehall.cam.ac.uk/news/dr-anthony-harris-keynotes-on-entrepreneurship-in-the-ox-cam-corridor-at-the-british-consul-generals-residence-in-boston/"
      },
      {
        label: "Cambridge Angels members and board page",
        url: "https://www.cambridgeangels.com/angels"
      },
      {
        label: "Companies House, personal appointments of Anthony William Harris",
        url: "https://find-and-update.company-information.service.gov.uk/officers/ycJ8JsNC9sGa42OLuFPhQ1nPR08/appointments"
      }
    ]
  },
  "simon-thorpe": {
    name: "Simon Thorpe",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "The investment rows represent Thorpe's own personal angel investment. He was a director of Cambridge Angels Group Ltd from 19 March 2019 to 30 September 2023 and chaired Cambridge Angels during that period, but no row here represents Cambridge Angels group money. He is also a designated member of Delta2020 LLP, described by Inngot as an investment, consulting and mentoring company he established; no source states that his angel investments are made through that LLP, so it is not recorded as a vehicle.",
    role: "Angel investor",
    basedIn: "Cambridge, United Kingdom",
    education: [],
    previousExperience: [
      "Equity research, sales and capital markets across a 25 year City career, working with major institutional investors and corporates",
      "KPMG",
      "UBS, equity research"
    ],
    operatingBackground: [
      "banker",
      "accountant"
    ],
    statedSectorFocus: [
      "technology and technology enabled healthcare"
    ],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Finance",
        evidence: "Simon Thorpe is a qualified Chartered Accountant with a 25 year city career in and 15 years of Angel Investing experience. He has worked in equity research, sales and capital markets with major institutional investors and corporates across all sectors.",
        url: "https://delta2020.com/the-team/simon-thorpe"
      },
      {
        capability: "Industry Network",
        evidence: "He is a member of Cambridge Angels, Manchester Angels and Angel Academe (a predominately female network).",
        url: "https://delta2020.com/the-team/simon-thorpe"
      }
    ],
    boardSeats: [
      {
        company: "UBIO Limited",
        status: "current",
        url: "https://find-and-update.company-information.service.gov.uk/officers/8VSmwv1yF4l_Ue46sWwhAQU_D9E/appointments"
      },
      {
        company: "University of Manchester Innovation Factory Limited",
        status: "current",
        url: "https://find-and-update.company-information.service.gov.uk/officers/8VSmwv1yF4l_Ue46sWwhAQU_D9E/appointments"
      },
      {
        company: "Albion Technology & General VCT plc",
        status: "current",
        url: "https://find-and-update.company-information.service.gov.uk/officers/8VSmwv1yF4l_Ue46sWwhAQU_D9E/appointments"
      },
      {
        company: "Rockspring Nominees Limited",
        status: "current",
        url: "https://find-and-update.company-information.service.gov.uk/officers/8VSmwv1yF4l_Ue46sWwhAQU_D9E/appointments"
      },
      {
        company: "Inngot Limited",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/8VSmwv1yF4l_Ue46sWwhAQU_D9E/appointments"
      },
      {
        company: "Cambridge Angels Group Ltd",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/8VSmwv1yF4l_Ue46sWwhAQU_D9E/appointments"
      },
      {
        company: "Eagle Genomics Limited",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/8VSmwv1yF4l_Ue46sWwhAQU_D9E/appointments"
      },
      {
        company: "Augmentra Limited",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/8VSmwv1yF4l_Ue46sWwhAQU_D9E/appointments"
      },
      {
        company: "ExactTrak Limited",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/8VSmwv1yF4l_Ue46sWwhAQU_D9E/appointments"
      },
      {
        company: "Transversal Corporation Limited",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/8VSmwv1yF4l_Ue46sWwhAQU_D9E/appointments"
      }
    ],
    advisoryRoles: [],
    syndicateMemberships: [
      {
        name: "Cambridge Angels",
        url: "https://www.cambridgeangels.com/angels"
      },
      {
        name: "Manchester Angels",
        url: "https://delta2020.com/the-team/simon-thorpe"
      },
      {
        name: "Angel Academe",
        url: "https://delta2020.com/the-team/simon-thorpe"
      }
    ],
    geographicPatterns: [
      "United Kingdom"
    ],
    careerMilestones: [
      {
        year: 2009,
        event: "Appointed a designated member of Delta2020 LLP, the Cambridge registered investment, consulting and mentoring vehicle he established."
      },
      {
        year: 2017,
        event: "Voted UKBAA Angel Investor of the Year 2016/2017."
      },
      {
        year: 2019,
        event: "Appointed a director of Cambridge Angels Group Ltd."
      },
      {
        year: 2020,
        event: "Takes up the role of Chair of Cambridge Angels."
      },
      {
        year: 2023,
        event: "Steps down as a director of Cambridge Angels Group Ltd, remaining an individual member of the group."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Thorpe is a qualified Chartered Accountant whose 25 year City career covered equity research, sales and capital markets with institutional investors and corporates, which bears on company finance and on preparing a business for investors. He states a focus on technology and technology enabled healthcare companies in the UK and reports a portfolio in the tens of companies, so he has repeated early-stage financing experience to draw on. His membership of Cambridge Angels, Manchester Angels and Angel Academe gives founders access to three separate UK angel networks.",
    biography: "Simon Thorpe is a UK angel investor based in Cambridge and a qualified Chartered Accountant who spent a 25 year career in the City working in equity research, sales and capital markets. In October 2009 he was appointed a designated member of Delta2020 LLP, registered at the Bradfield Centre on Cambridge Science Park, which Inngot describes as an investment, consulting and mentoring company he established. He was voted UKBAA's Angel Investor of the Year 2016/2017 and is a Fellow of Entrepreneurship at Cambridge Judge Business School. He was a director of Cambridge Angels Group Ltd from March 2019 to September 2023 and took up the chair of Cambridge Angels in 2020; he remains an individual member of the group, and is also a member of Manchester Angels and Angel Academe. His own company page describes him as an active angel investor in UK companies focused on technology and technology enabled healthcare.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Inngot",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "online tools for businesses and entrepreneurs to identify, value and raise finance against the value of IP",
        role: null,
        evidence: [
          {
            url: "https://www.inngot.com/news-views/meet-the-inngot-team-simon-thorpe.html",
            type: "portfolio-page",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Delta2020 team page",
        url: "https://delta2020.com/the-team/simon-thorpe"
      },
      {
        label: "Inngot, Meet the Inngot Team: Simon Thorpe",
        url: "https://www.inngot.com/news-views/meet-the-inngot-team-simon-thorpe.html"
      },
      {
        label: "UKBAA awards judge biography",
        url: "https://ukbaa.org.uk/awards/judges/simon-thorpe/"
      },
      {
        label: "UKBAA news, Simon Thorpe on his new role as Chair of Cambridge Angels",
        url: "https://www.ukbaa.org.uk/news/simon-thorpe-talks-about-his-new-role-as-chair-of-cambridge-angels-and-emphasises-the-uk-growth-opportunities-in-digital-manufacturing/"
      },
      {
        label: "Cambridge Angels member listing",
        url: "https://www.cambridgeangels.com/angels"
      },
      {
        label: "UK Companies House, officer appointments for Simon Charles Thorpe",
        url: "https://find-and-update.company-information.service.gov.uk/officers/8VSmwv1yF4l_Ue46sWwhAQU_D9E/appointments"
      },
      {
        label: "UK Companies House, DELTA2020 LLP officers",
        url: "https://find-and-update.company-information.service.gov.uk/company/OC349471/officers"
      }
    ]
  },
  "nancy-hayes": {
    name: "Nancy Hayes",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "Hayes served as Managing Director of the Golden Seeds Silicon Valley chapter, an organisational role at an angel group. Sources describing her portfolio of more than 30 women-led companies present it as her own angel portfolio rather than money she manages for others. No investment rows are recorded because no individual company could be attributed to her by a source.",
    role: "Angel investor, and management consultant and executive coach through NKH Group",
    basedIn: "San Francisco, California, United States",
    education: [
      "MBA, University of Chicago"
    ],
    previousExperience: [
      "Senior executive, IBM Corporation (20 years)",
      "CEO, STARBRIGHT Foundation",
      "CEO and President, WISE Senior Services",
      "Dean, College of Business, San Francisco State University (6 years)",
      "CFO and Vice President of Administration, San Francisco State University",
      "Co-founder, MoolaHoop (2013)",
      "Managing Director, Golden Seeds Silicon Valley chapter"
    ],
    operatingBackground: [
      "corporate executive",
      "nonprofit chief executive",
      "academic administrator",
      "founder"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Operations",
        evidence: "My strengths include general management, vision, leadership, and execution, with a proven talent for change management and building strong teams.",
        url: "http://nkhgroup.com/"
      },
      {
        capability: "Fundraising",
        evidence: "I welcome hearing from small business owners and high growth entrepreneurs, especially women, seeking advice on strategy and funding.",
        url: "http://nkhgroup.com/"
      },
      {
        capability: "Industry Network",
        evidence: "Importantly, also try to help the entrepreneurs I advise with referrals to other angel investors and angel groups, as well as other funding sources such as loans and crowdfunding and to resources such as incubators and accelerators.",
        url: "http://nkhgroup.com/"
      }
    ],
    boardSeats: [],
    advisoryRoles: [],
    syndicateMemberships: [
      {
        name: "Golden Seeds",
        url: "http://nkhgroup.com/"
      },
      {
        name: "Rising Tide",
        url: "http://nkhgroup.com/"
      }
    ],
    geographicPatterns: [],
    careerMilestones: [
      {
        year: 2013,
        event: "Co-founds MoolaHoop, a rewards-based crowdfunding platform for women-owned small businesses."
      },
      {
        year: 2014,
        event: "Becomes an active angel investor."
      },
      {
        year: 2015,
        event: "Becomes an active member of Golden Seeds, an early stage angel investment group focused on women-led companies."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Hayes spent 20 years as a senior executive at IBM, ran two nonprofits as chief executive, and served as dean of the College of Business and then CFO and Vice President of Administration at San Francisco State University, so her sourced strengths sit in general management, change management and team building. She co-founded the crowdfunding platform MoolaHoop in 2013, which gives her direct experience of raising money for early stage, women-owned businesses. Her own site states that she advises entrepreneurs on strategy and funding and refers them on to other angel investors, angel groups, loans, crowdfunding, incubators and accelerators.",
    biography: "Nancy Hayes is an angel investor and management consultant based in San Francisco. She left IBM after 20 years as a senior executive, then served as CEO of the STARBRIGHT Foundation and as CEO and President of WISE Senior Services, before spending six years as dean of the College of Business at San Francisco State University and then as its CFO and Vice President of Administration. In 2013 she co-founded MoolaHoop, a rewards-based crowdfunding platform for women-owned small businesses, and she has been an active angel investor since 2014; a 2022 How Women Lead podcast profile described her as holding a portfolio of more than 30 women-led companies. She has been an active member of the angel group Golden Seeds since 2015 and later served as Managing Director of its Silicon Valley chapter, and she is also a member of the Rising Tide angel investor programme. She was listed as a judge for San Francisco State University's Innovation Pitch Competition held in April 2026, where she is described as having been an active angel investor since 2014.",
    lastChecked: "2026-09-02",
    investments: [],
    sources: [
      {
        label: "Personal site, NKH Group",
        url: "http://nkhgroup.com/"
      },
      {
        label: "How Women Lead, episode profile (19 October 2022)",
        url: "https://www.howwomenlead.com/post/skills-needed-for-both-founders-and-investors-with-nancy-hayes"
      },
      {
        label: "San Francisco State University College of Business, 2026 Innovation Pitch Competition judge biography",
        url: "https://cob.sfsu.edu/initiatives-centers/2026-innovation-pitch-competition-online-event"
      },
      {
        label: "Silicon Valley Open Doors speaker biography",
        url: "https://www.svod.org/nancy-hayes-2/"
      },
      {
        label: "Founders Network, presenting to VCs and angel investors",
        url: "https://foundersnetwork.com/presenting-to-vcs-and-angel-investors-with-nancy-hayes/"
      }
    ]
  },
  "pam-garside": {
    name: "Pam Garside",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "Pam Garside sits on the board of Cambridge Angels and previously chaired the group. The investment rows below are only deals she describes in the first person as her own, in answer to a question about deals she has invested in. They are not Cambridge Angels group deals and no group portfolio has been attributed to her.",
    role: "Angel investor in early-stage health tech companies",
    basedIn: null,
    education: [
      "Zoology degree, Durham University",
      "Master's in Hospital and Health Care Administration, University of Minnesota"
    ],
    previousExperience: [
      "NHS graduate management training",
      "Founder, Newhealth, a management consultancy focused on organisational strategy and development in health care"
    ],
    operatingBackground: [
      "academic",
      "management consultant"
    ],
    statedSectorFocus: [
      "early-stage health tech"
    ],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Unknown",
    capabilities: [
      {
        capability: "Industry Network",
        evidence: "Pam advises a number of life science companies, health technology accelerators and start-ups in the UK and Europe.",
        url: "https://ukbaa.org.uk/our-programmes/women-backing-women/pam-garside-2/"
      }
    ],
    boardSeats: [
      {
        company: "Crown Place Venture Capital Trust",
        status: "current",
        url: "https://ukbaa.org.uk/our-programmes/women-backing-women/pam-garside-2/"
      }
    ],
    advisoryRoles: [],
    syndicateMemberships: [
      {
        name: "Cambridge Angels",
        url: "https://www.cambridgeangels.com/angels"
      }
    ],
    geographicPatterns: [
      "United Kingdom"
    ],
    careerMilestones: [
      {
        year: 2016,
        event: "Joins Cambridge Angels, recruited by the then chair Simon Thorpe."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Garside has spent her career in health care systems and digital health in the UK and internationally, and advises life science companies, health technology accelerators and start-ups in the UK and Europe. She founded and co-chairs The Cambridge Health Network, a membership group of senior players in the UK health sector, which gives her direct reach into UK health buyers and executives. She has said she treats a team's deep understanding of the complexities of the NHS procurement process as a green flag, which is the kind of market judgement she brings to health tech founders.",
    biography: "Pam Garside is an angel investor in early-stage health tech companies and a Fellow of the Judge Business School at the University of Cambridge. She read Zoology at Durham, completed NHS graduate management training and took a Master's in Hospital and Health Care Administration at the University of Minnesota before a career in health care systems and digital health in the UK and internationally. She is the founder and co-chair of The Cambridge Health Network, a member of the Investment Committee of Cambridge Enterprise, and a board member of Crown Place Venture Capital Trust. She was recruited to Cambridge Angels in 2016 by the then chair Simon Thorpe, later became the group's first female chair, and now sits on its board. Her first investment came when an Australian company gave her equity in lieu of fees, and she has since backed UK health tech and AI companies including Accurx and Kalium Health.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Accurx",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Digital Health",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.syndicateroom.com/articles/pam-garsides-guide-to-spotting-winning-health-tech-founders",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Chiron Medical",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Diagnostics",
        subsector: "AI technology for mammograms",
        role: null,
        evidence: [
          {
            url: "https://www.syndicateroom.com/articles/pam-garsides-guide-to-spotting-winning-health-tech-founders",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Unlikely AI",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "AI",
        subsector: "a very credible alternative to current LLMs",
        role: null,
        evidence: [
          {
            url: "https://www.cambridgeangels.com/angel-interviewss/2023/9/25/5-questions-an-interview-with-the-current-chair-of-cambridge-angels-pam-garside-n7tp2",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Kalium Health",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Diagnostics",
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://www.cambridgeangels.com/angel-interviewss/2023/9/25/5-questions-an-interview-with-the-current-chair-of-cambridge-angels-pam-garside-n7tp2",
            type: "partner-bio",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "UK Business Angels Association, Women Backing Women profile",
        url: "https://ukbaa.org.uk/our-programmes/women-backing-women/pam-garside-2/"
      },
      {
        label: "Cambridge Health Network team page",
        url: "https://cambridgehealthnetwork.com/about-us/our-team/"
      },
      {
        label: "DigitalHealth.London profile",
        url: "https://digitalhealth.london/profile/pam-garside"
      },
      {
        label: "Cambridge Angels interview with Pam Garside",
        url: "https://www.cambridgeangels.com/angel-interviewss/2023/9/25/5-questions-an-interview-with-the-current-chair-of-cambridge-angels-pam-garside-n7tp2"
      },
      {
        label: "SyndicateRoom interview, An angel's prescription",
        url: "https://www.syndicateroom.com/articles/pam-garsides-guide-to-spotting-winning-health-tech-founders"
      },
      {
        label: "Cambridge Angels member directory",
        url: "https://www.cambridgeangels.com/angels"
      }
    ]
  },
  "robert-sansom": {
    name: "Robert Sansom",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "Sansom founded Cambridge Angels and has chaired it. The single investment row below comes from financing announcements that name him individually as leading the round, separately from the group. No Cambridge Angels group portfolio has been attributed to him.",
    role: "Angel investor and mentor to technology startup businesses",
    basedIn: "Cambridge, United Kingdom",
    education: [
      "PhD, Carnegie Mellon University"
    ],
    previousExperience: [
      "Co-founder and Chief Technical Officer, FORE Systems (NASDAQ listing 1994, sold to Marconi plc in 1999)"
    ],
    operatingBackground: [
      "founder",
      "engineer"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Lead",
    capabilities: [
      {
        capability: "Technical",
        evidence: "Prior to becoming an angel investor, he co-founded FORE Systems, a leader in high-speed data communications, where he was Chief Technical Officer.",
        url: "https://enterprisehub.raeng.org.uk/mentors/dr-robert-sansom-freng"
      },
      {
        capability: "Industry Network",
        evidence: "He is the founder of the Cambridge Angels, a group of expert technology and biotechnology entrepreneurs who invest in and mentor technology startups across the UK.",
        url: "https://enterprisehub.raeng.org.uk/mentors/dr-robert-sansom-freng"
      }
    ],
    boardSeats: [
      {
        company: "Myrtle Software Limited",
        status: "current",
        url: "https://find-and-update.company-information.service.gov.uk/officers/d9-iEVt3GMe8vP1X0k7leCl5Y_c/appointments"
      },
      {
        company: "Featurespace Limited",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/d9-iEVt3GMe8vP1X0k7leCl5Y_c/appointments"
      },
      {
        company: "IQGeo Group Limited",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/d9-iEVt3GMe8vP1X0k7leCl5Y_c/appointments"
      },
      {
        company: "Arachnys Information Services Limited",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/d9-iEVt3GMe8vP1X0k7leCl5Y_c/appointments"
      },
      {
        company: "CRFS Limited",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/d9-iEVt3GMe8vP1X0k7leCl5Y_c/appointments"
      },
      {
        company: "Focal Point Positioning Ltd.",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/d9-iEVt3GMe8vP1X0k7leCl5Y_c/appointments"
      },
      {
        company: "Cambridge Communication Systems Limited",
        status: "former",
        url: "https://find-and-update.company-information.service.gov.uk/officers/d9-iEVt3GMe8vP1X0k7leCl5Y_c/appointments"
      }
    ],
    advisoryRoles: [
      {
        company: "Royal Academy of Engineering Enterprise Hub",
        status: "current",
        url: "https://enterprisehub.raeng.org.uk/mentors/dr-robert-sansom-freng"
      }
    ],
    syndicateMemberships: [
      {
        name: "Cambridge Angels",
        url: "https://www.cambridgeangels.com/angels"
      }
    ],
    geographicPatterns: [
      "United Kingdom",
      "United States"
    ],
    careerMilestones: [
      {
        year: 1994,
        event: "FORE Systems, which he co-founded, goes public on NASDAQ."
      },
      {
        year: 1999,
        event: "FORE Systems is sold to Marconi plc."
      },
      {
        year: 2010,
        event: "Elected a Fellow of the Royal Academy of Engineering."
      },
      {
        year: 2012,
        event: "Leads the investment in Cambridge Communication Systems and becomes its chairman."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Sansom co-founded FORE Systems and was its Chief Technical Officer through a 1994 NASDAQ listing and a 1999 sale to Marconi plc, so he has taken a deep technology company from research to public markets and to exit. He describes his own contribution as considerable experience taking knowledge-based technology business from initial idea through to becoming successful businesses. He founded Cambridge Angels and has served on the boards of Cambridge technology companies including Featurespace, IQGeo, CRFS, Arachnys and Myrtle Software, which gives founders access to an established Cambridge technology network.",
    biography: "Dr Robert Sansom is an angel investor and mentor to technology-based startup businesses in the UK and US, and the founder of Cambridge Angels. Before angel investing he co-founded FORE Systems, a high-speed data communications company, where he was Chief Technical Officer; FORE went public on NASDAQ in 1994 and was sold to Marconi plc in 1999. He was elected a Fellow of the Royal Academy of Engineering in 2010 and is a Bye-Fellow of Emmanuel College, Cambridge. UK Companies House records him as a director of Cambridge technology companies including Featurespace, IQGeo Group, CRFS, Arachnys Information Services, Focal Point Positioning and Cambridge Communication Systems, with Myrtle Software Limited his current active startup directorship. In January 2012 he led the round that funded Cambridge Communication Systems and became its chairman.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "Cambridge Communication Systems",
        stage: null,
        year: 2012,
        yearPrecision: "year",
        sector: "Hardware",
        subsector: "small-cell microwave backhaul system",
        role: "Led the round and became Chairman of CCS",
        evidence: [
          {
            url: "https://www.cambridgenetwork.co.uk/news/ccs-secures-ps13-million-investment-seed-round",
            type: "deal-announcement",
            checked: "2026-09-02"
          },
          {
            url: "https://sciencebusiness.net/news/75608/Imperial-Innovations-invests-%C2%A3250K-in-Cambridge-mobile-infrastructure-company",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Royal Academy of Engineering Enterprise Hub mentor profile",
        url: "https://enterprisehub.raeng.org.uk/mentors/dr-robert-sansom-freng"
      },
      {
        label: "Emmanuel College, Cambridge, Fellows page",
        url: "https://www.emma.cam.ac.uk/about/contact/fellows/?id=238"
      },
      {
        label: "UK Companies House officer appointments, Robert Daniell Sansom",
        url: "https://find-and-update.company-information.service.gov.uk/officers/d9-iEVt3GMe8vP1X0k7leCl5Y_c/appointments"
      },
      {
        label: "Cambridge Network, CCS seed round announcement",
        url: "https://www.cambridgenetwork.co.uk/news/ccs-secures-ps13-million-investment-seed-round"
      },
      {
        label: "Science Business, Imperial Innovations invests in CCS (19 Jan 2012)",
        url: "https://sciencebusiness.net/news/75608/Imperial-Innovations-invests-%C2%A3250K-in-Cambridge-mobile-infrastructure-company"
      },
      {
        label: "Cambridge Angels member directory",
        url: "https://www.cambridgeangels.com/angels"
      },
      {
        label: "Cambridge Angels news item on myrtle.ai",
        url: "https://www.cambridgeangels.com/news/04/killer-50/ones-watch/myrtleai-p897e"
      }
    ]
  },
  "ryo-ishizuka": {
    name: "Ryo Ishizuka",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: null,
    role: "Angel investor",
    basedIn: "Seattle, Washington, United States",
    education: [
      "Political Economy, Johns Hopkins University"
    ],
    previousExperience: [
      "Co-founder and chief architect, RockYou (founded 2006, Silicon Valley); COO, RockYou Asia",
      "Co-founder, Mercari (2013)",
      "CEO, Mercari USA (2014-2019)"
    ],
    operatingBackground: [
      "founder",
      "engineer"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: null,
    leadBehavior: "Lead",
    capabilities: [
      {
        capability: "Operations",
        evidence: "2013年に日本でメルカリを創業、翌年にMercari USAを立ち上げてCEOに就任。2019年退社までメルカリの日米立ち上げ・成長に貢献する。",
        url: "https://prtimes.jp/main/html/rd/p/000000044.000042665.html"
      }
    ],
    boardSeats: [],
    advisoryRoles: [
      {
        company: "FiNANCiE",
        status: null,
        url: "https://prtimes.jp/main/html/rd/p/000000044.000042665.html"
      }
    ],
    syndicateMemberships: [],
    geographicPatterns: [
      "Japan",
      "United States"
    ],
    careerMilestones: [
      {
        year: 2006,
        event: "Co-founds the social game developer RockYou in Silicon Valley."
      },
      {
        year: 2013,
        event: "Co-founds Mercari in Japan."
      },
      {
        year: 2014,
        event: "Launches Mercari USA and becomes its CEO."
      },
      {
        year: 2019,
        event: "Leaves Mercari and begins working as an angel investor."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Ishizuka launched Mercari USA and ran it as CEO from 2014, giving him direct operating experience of taking a Japanese consumer marketplace into the United States. He has said he wants to back companies that are already expanding into the United States or seriously intend to, and that he mentors startups through accelerators from his base in Seattle. In the Teatis seed round he is recorded as having led the investment alongside an institutional fund and another angel.",
    biography: "Ryo Ishizuka moved to Boston at the age of 14 and graduated from Johns Hopkins University with a major in political economy. In 2006 he co-founded the social game developer RockYou in Silicon Valley, where he served as chief architect and as COO of RockYou Asia. He co-founded Mercari in Japan in 2013, launched Mercari USA the following year and became its CEO, contributing to the company's launch and growth in both Japan and the United States until he left in early 2019. Since leaving Mercari he has worked as an angel investor, and company announcements describe him as active in Seattle as an individual investor, startup mentor and NPO representative. In a 2025 interview page he is introduced as a former Mercari co-founder and angel investor, and says he invests in and advises startups from Seattle and mentors at accelerators.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "FiNANCiE",
        stage: null,
        year: 2020,
        yearPrecision: "year",
        sector: "Crypto",
        subsector: "token issuance and fan community service",
        role: null,
        evidence: [
          {
            url: "https://ascii.jp/elem/000/004/011/4011471/",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Teatis",
        stage: "Seed",
        year: 2021,
        yearPrecision: "year",
        sector: "Consumer Health",
        subsector: "sugar-blocking teas and superfood powders for diabetic-friendly diets",
        role: null,
        evidence: [
          {
            url: "https://www.worldteanews.com/products-equipment/teatis-accrues-more-1-million-seed-funding",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "NutmegLabs",
        stage: null,
        year: 2023,
        yearPrecision: "year",
        sector: "Enterprise Software",
        subsector: "tourism DX platform digitising reservations, payments and on-site operations",
        role: null,
        evidence: [
          {
            url: "https://prtimes.jp/main/html/rd/p/000000006.000109188.html",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Sagri",
        stage: "Series A",
        year: 2024,
        yearPrecision: "year",
        sector: "Agtech",
        subsector: "satellite data and AI analysis of farmland cultivation, soil and water management",
        role: null,
        evidence: [
          {
            url: "https://sagri.tokyo/2024/08/08/seriesa/",
            type: "deal-announcement",
            checked: "2026-09-02"
          },
          {
            url: "https://prtimes.jp/main/html/rd/p/000000149.000040885.html",
            type: "deal-announcement",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "Interview, junglecity.com",
        url: "https://www.junglecity.com/people/hottalk/ryo-ishizuka/"
      },
      {
        label: "XTech Ventures interview page",
        url: "https://www.xtech-ventures.co.jp/info/375"
      },
      {
        label: "FiNANCiE advisor appointment release, carrying his profile block",
        url: "https://prtimes.jp/main/html/rd/p/000000044.000042665.html"
      },
      {
        label: "ASCII report on the FiNANCiE round",
        url: "https://ascii.jp/elem/000/004/011/4011471/"
      },
      {
        label: "World Tea News on the Teatis seed round",
        url: "https://www.worldteanews.com/products-equipment/teatis-accrues-more-1-million-seed-funding"
      },
      {
        label: "NutmegLabs investment release",
        url: "https://prtimes.jp/main/html/rd/p/000000006.000109188.html"
      },
      {
        label: "Sagri Series A release on the company's own site",
        url: "https://sagri.tokyo/2024/08/08/seriesa/"
      },
      {
        label: "Sagri Series A release on PR Times",
        url: "https://prtimes.jp/main/html/rd/p/000000149.000040885.html"
      }
    ]
  },
  "barbara-clarke": {
    name: "Barbara Clarke",
    type: "angel",
    investingStatus: "active",
    investingMode: "personal capital",
    vehicle: null,
    vehicleNote: "The investment rows below are cheques Barbara Clarke wrote from her own money. The Boston Globe reports that she has put several million dollars of her own capital into about 60 companies since 2013, and the ChIPs and xCITE bios describe a personal portfolio. She separately chairs The Impact Seat Foundation, a Boston nonprofit that runs its own impact-investing portfolio, and sits on the investment committees of several Portfolia venture funds where she has led or co-led deals (RenovoRX, Tenacity, Poshly) using fund capital rather than her own. Foundation and Portfolia fund deals are deliberately excluded from the rows.",
    role: "Angel investor; Founder and Board Chair, The Impact Seat Foundation; Founding Principal, The Impact Seat LLC",
    basedIn: "Boston, Massachusetts, United States",
    education: [
      "B.A. Quantitative Economics, Tufts University",
      "M.A. International Economics and Finance, Brandeis University (Lemberg International Business School)"
    ],
    previousExperience: [
      "Management consultant, KPMG and PricewaterhouseCoopers",
      "CFO, Cradles to Crayons",
      "President, Tufts University Alumni Association",
      "National Director, National Alliance for Grieving Children"
    ],
    operatingBackground: [
      "economist",
      "management consultant",
      "nonprofit executive"
    ],
    statedSectorFocus: [],
    statedStageFocus: [],
    checkSize: "USD 5,000-10,000 (her first three investments, 2013; no current typical size is stated by any source)",
    leadBehavior: "Lead",
    capabilities: [
      {
        capability: "Industry Network",
        evidence: "Also, don't overthink how I can help or underestimate the reach of my network.",
        url: "https://medium.com/@SheStarts/meet-the-investors-who-invest-in-women-barbara-clarke-7740ec81ce34"
      },
      {
        capability: "Finance",
        evidence: "Barbara Clarke is an economist and investor focused on early stage, high growth companies.",
        url: "https://xcite.business.uconn.edu/person/barbara-clarke/"
      }
    ],
    boardSeats: [
      {
        company: "Portfolia Inc.",
        status: "current",
        url: "https://xcite.business.uconn.edu/person/barbara-clarke/"
      },
      {
        company: "Founders First Capital Partners",
        status: "current",
        url: "https://xcite.business.uconn.edu/person/barbara-clarke/"
      }
    ],
    advisoryRoles: [
      {
        company: "CareAcademy",
        status: "current",
        url: "https://medium.com/@SheStarts/meet-the-investors-who-invest-in-women-barbara-clarke-7740ec81ce34"
      }
    ],
    syndicateMemberships: [
      {
        name: "Astia Angels",
        url: "https://xcite.business.uconn.edu/person/barbara-clarke/"
      },
      {
        name: "Pipeline Angels",
        url: "https://xcite.business.uconn.edu/person/barbara-clarke/"
      }
    ],
    geographicPatterns: [
      "United States",
      "Europe"
    ],
    careerMilestones: [
      {
        year: 2013,
        event: "Writes her first startup cheques after a career in management consulting."
      },
      {
        year: 2015,
        event: "Co-founds The Impact Seat with Teresa Nelson."
      },
      {
        year: 2021,
        event: "The Impact Seat Foundation launches."
      }
    ],
    exitCount: null,
    exitCountBasis: null,
    publicHoldings: [],
    strategicValue: "Clarke is an economist who spent more than a decade in management consulting at KPMG and PricewaterhouseCoopers valuing intellectual property, and she has been writing early-stage cheques continuously since 2013. She sits on the boards of Portfolia Inc. and Founders First Capital Partners and on the investment committees of several Portfolia funds, so she can speak to how institutional early-stage capital is assembled as well as to angel rounds. Her network across Astia Angels, Pipeline Angels and Portfolia is something she offers explicitly to founders.",
    biography: "Barbara Clarke is a Boston-based angel investor who began investing in 2013 after a career in management consulting at KPMG and PricewaterhouseCoopers, where she worked on intellectual property valuations. The Boston Globe reported in 2022 that she had put several million dollars into about 60 companies plus 15 funds that invest in women entrepreneurs, and her first three cheques ranged from 5,000 to 10,000 US dollars. She is a founding member of Astia Angels and a Pipeline Angels alumna, and she leads and co-leads deals for Portfolia's Rising Tide, Enterprise and FirstStep funds. In 2015 she co-founded The Impact Seat with Teresa Nelson, a consulting and research firm, and she is Founder and Board Chair of The Impact Seat Foundation, a Boston nonprofit combining impact investing, grantmaking and advocacy. She holds a B.A. in quantitative economics from Tufts University and an M.A. in international economics and finance from Brandeis University.",
    lastChecked: "2026-09-02",
    investments: [
      {
        name: "AbbeyPost",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://switchthefuture.com/2014/10/08/angel-investor-looks-like-barbara-clarke/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Cissé Trading Co.",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://switchthefuture.com/2014/10/08/angel-investor-looks-like-barbara-clarke/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "CueThink",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://switchthefuture.com/2014/10/08/angel-investor-looks-like-barbara-clarke/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Goaloop",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://switchthefuture.com/2014/10/08/angel-investor-looks-like-barbara-clarke/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "LaneHoney",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://switchthefuture.com/2014/10/08/angel-investor-looks-like-barbara-clarke/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Poshly",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://switchthefuture.com/2014/10/08/angel-investor-looks-like-barbara-clarke/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Traklight",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: null,
        subsector: null,
        role: null,
        evidence: [
          {
            url: "https://switchthefuture.com/2014/10/08/angel-investor-looks-like-barbara-clarke/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "CareAcademy",
        stage: null,
        year: 2013,
        yearPrecision: "year",
        sector: "EdTech",
        subsector: "on-line platform for training caregivers",
        role: "First investor",
        evidence: [
          {
            url: "https://medium.com/@SheStarts/meet-the-investors-who-invest-in-women-barbara-clarke-7740ec81ce34",
            type: "press",
            checked: "2026-09-02"
          },
          {
            url: "https://switchthefuture.com/2014/10/08/angel-investor-looks-like-barbara-clarke/",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Founders First Capital Partners",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Fintech",
        subsector: "financial services company that's focused on investing in underrepresented founders",
        role: null,
        evidence: [
          {
            url: "https://investorconnect.org/wp-content/uploads/2021/11/Transcript-Barbara-Clarke-of-The-Impact-Seat.pdf",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      },
      {
        name: "Full Harvest",
        stage: null,
        year: null,
        yearPrecision: null,
        sector: "Foodtech",
        subsector: "a marketplace that connects farmers, organic farmers and food manufacturers",
        role: null,
        evidence: [
          {
            url: "https://investorconnect.org/wp-content/uploads/2021/11/Transcript-Barbara-Clarke-of-The-Impact-Seat.pdf",
            type: "press",
            checked: "2026-09-02"
          }
        ]
      }
    ],
    sources: [
      {
        label: "The Impact Seat Foundation - About",
        url: "https://www.impactseat.org/about"
      },
      {
        label: "The Impact Seat - About",
        url: "https://www.impactseat.com/about"
      },
      {
        label: "Boston Globe Magazine, 'Write the damn check', 28 October 2022",
        url: "https://www.bostonglobe.com/2022/10/28/magazine/tale-two-angel-investors/"
      },
      {
        label: "Portfolia partner page",
        url: "https://www.portfolia.co/partner/barbara-clarke"
      },
      {
        label: "xCITE, University of Connecticut - Women in Entrepreneurship Network profile",
        url: "https://xcite.business.uconn.edu/person/barbara-clarke/"
      },
      {
        label: "Investor Connect podcast transcript (2021)",
        url: "https://investorconnect.org/wp-content/uploads/2021/11/Transcript-Barbara-Clarke-of-The-Impact-Seat.pdf"
      },
      {
        label: "SWITCH, 'This is What an Angel Investor Looks Like', 8 October 2014",
        url: "https://switchthefuture.com/2014/10/08/angel-investor-looks-like-barbara-clarke/"
      },
      {
        label: "SheStarts interview, 'Meet the Investors Who Invest in Women'",
        url: "https://medium.com/@SheStarts/meet-the-investors-who-invest-in-women-barbara-clarke-7740ec81ce34"
      },
      {
        label: "Massachusetts Conference for Women speaker page (2019)",
        url: "https://www.maconferenceforwomen.org/speakers/barbara-clarke/"
      },
      {
        label: "ChIPs Global Summit 2018 speaker page",
        url: "https://chipsnetwork.swoogo.com/2018-global-summit/speaker/36306/barbara-clarke"
      },
      {
        label: "Northern New England Women's Investor Network event page (2022)",
        url: "https://nnewin.org/event/vt-win-herstory-barbara-clarke-founder-and-board-chair-the-impact-seat-foundation/"
      },
      {
        label: "Innovation Women featured profile",
        url: "https://innovationwomen.com/featured-profile-barbara-clarke/"
      }
    ]
  }

};
