const firms = [
  {
    rank: 1,
    name: "SoftBank Vision Fund",
    sectors: ["AI", "Enterprise Software", "Consumer Internet", "Logistics", "Cybersecurity", "Climate", "Developer Tools", "Deep Tech"],
    signatureExit: "DoorDash's 2020 IPO, which implied a fully diluted valuation of $71.2 billion - CEO Alex Clavel later called it SVF1's best-performing asset, with a $7.3 billion gain on full exit",
    slug: "softbank-vision-fund",
    website: "https://visionfund.com",
    short: "SoftBank Vision Fund",
    founded: 2017,
    hq: "London, UK",
   aum: "$175B (platform assets, 2022)",
    thesis: "SoftBank Vision Fund remains the clearest example of venture capital run at platform scale, having launched Vision Fund 1 at $100 billion in 2017. Its current messaging has become far more coherent than the early 'invest in everything transformed by AI' caricature: the firm is now organized around a full-stack AI ecosystem of hardware, infrastructure, and applications, with CEO Alex Clavel's leadership stressing discipline, monetization, and cash-runway quality across the portfolio. That shift matters because it shows the platform institutionalizing what was previously perceived as founder-led opportunism under Masayoshi Son, while still concentrating unusually large checks into category leaders - DoorDash's $71.2 billion IPO valuation stands as SVF1's best fully-exited outcome, with a $7.3 billion gain.",
    leadership: [
      { name: "Alex Clavel", role: "CEO", profileSlug: "alex-clavel" },
      { name: "Sumer Juneja", role: "Managing Partner, EMEA/India", profileSlug: "sumer-juneja" },
      { name: "Vikas J. Parekh", role: "Managing Partner", profileSlug: "vikas-j-parekh" },
      { name: "Kentaro Matsui", role: "Managing Partner, Asia", profileSlug: "kentaro-matsui" }
    ],
    timeline: [
      { year: "2017", event: "SoftBank launches Vision Fund 1 at $100 billion." },
      { year: "2018", event: "Masayoshi Son's annual report describes a strategy of targeting category leaders or near-leaders." },
      { year: "2020", event: "DoorDash goes public at a fully diluted valuation of $71.2 billion." },
      { year: "2022", event: "SoftBank reports $175 billion in platform assets and $56 billion of commitments to Vision Fund 2." },
      { year: "2025", event: "Alex Clavel reports DoorDash as SVF1's best-performing fully exited asset, with a $7.3 billion gain." }
    ],
    holdings: [
  { name: "DoorDash", ticker: "DASH", investedYear: 2018, historicalPrice: 170.65, price: 175.00 },
      { name: "Uber", ticker: "UBER", investedYear: 2018, historicalPrice: null, price: 65.94 },
      { name: "Coupang", ticker: "CPNG", investedYear: 2018, historicalPrice: null, price: 16.29 },
       { name: "Arm", ticker: "ARM", investedYear: 2017, historicalPrice: null, price: 278.65 }

    ]
  },
  {
  rank: null,
  name: "STV",
  sectors: ["Fintech", "Enterprise Software", "Healthcare"],
  signatureExit: "Careem's acquisition by Uber - a landmark exit for STV's MENA portfolio",
  slug: "stv",
  website: "https://stv.vc",
  short: "STV",
  founded: 2018,
  hq: "Riyadh, Saudi Arabia",
  aum: "$1.4B+ (across multiple funds)",
  thesis: "STV is the largest independent technology VC in the Middle East, anchored by Saudi Telecom as a key limited partner, investing in GCC and broader MENA tech startups from Series A through growth. Founder Abdulrahman Tarabzouni built the firm around the thesis that MENA's tech market offers steep growth potential despite lagging Silicon Valley by years.",
  leadership: [
    { name: "Abdulrahman Tarabzouni", role: "Founder", profileSlug: "abdulrahman-tarabzouni" }
  ],
  timeline: [
    { year: "2018", event: "Abdulrahman Tarabzouni founds STV in Riyadh." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Speedinvest",
  sectors: ["Fintech", "AI", "Healthcare"],
  signatureExit: "No single defined public exit documented - Speedinvest's portfolio includes fintech infrastructure companies like Bitpanda",
  slug: "speedinvest",
  website: 'https://www.speedinvest.com/',
  short: "Speedinvest",
  founded: 2011,
  hq: "Vienna, Austria",
  aum: "€1B+ (mid-2020s)",
  thesis: "Speedinvest invests from pre-seed through growth across fintech, deep tech, AI, climate, and marketplaces through six specialized sector teams, describing its approach as 'seed at scale' with conviction-led capital and offices across Europe.",
  leadership: [
    { name: "Christian Miele", role: "Founder & CEO" },
    { name: "Stefan Klestil", role: "Managing Partner" }
  ],
  timeline: [
    { year: "2011", event: "Speedinvest founded in Vienna." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Valor Capital Group",
  sectors: ["Fintech", "Consumer Internet"],
  signatureExit: "No single defined public exit documented - Valor bridges Silicon Valley and Brazil, investing in cross-border tech companies",
  slug: "valor-capital-group",
  website: "https://valorcapitalgroup.com",
  short: "Valor Capital",
  founded: 2011,
  hq: "New York, NY",
  aum: "Not publicly disclosed",
  thesis: "Valor invests in early-stage Brazilian startups and U.S. companies expanding into Brazil, built on the thesis that international connectivity unlocks value in emerging markets. The firm is stage-agnostic within tech-enabled fintech, education, and consumer companies.",
  leadership: [
    { name: "Raymundo Campos", role: "Founding Partner" },
    { name: "Julio Vasconcellos", role: "Founding Partner" }
  ],
  timeline: [
    { year: "2011", event: "Valor Capital Group founded, bridging Silicon Valley and Brazil." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "ALLVP",
  sectors: ["Fintech", "Marketplaces", "Healthcare"],
  signatureExit: "Cornershop's acquisition by Uber - an early ALLVP investment and one of the defining exits in Mexican tech",
  slug: "allvp",
  website: 'https://www.hi.vc/',
  short: "ALLVP",
  founded: 2012,
  hq: "Mexico City, Mexico",
  aum: "Not publicly disclosed",
  thesis: "ALLVP backs high-impact innovators improving access to services through technology across Mexico and Latin America, investing in fintech, marketplaces, and healthtech. Co-founders Federico Antoni and Fernando Lelo de Larrea built the firm into one of Mexico's most active early-stage investors.",
  leadership: [
    { name: "Federico Antoni", role: "Co-Founder" },
    { name: "Fernando Lelo de Larrea", role: "Co-Founder" }
  ],
  timeline: [
    { year: "2012", event: "Federico Antoni and Fernando Lelo de Larrea found ALLVP in Mexico City." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "CRE Venture Capital",
  sectors: ["Fintech", "Enterprise Software"],
  signatureExit: "No single defined public exit documented - CRE VC backs African tech companies in fintech, education, and digital infrastructure",
  slug: "cre-venture-capital",
  website: "https://cre.vc",
  short: "CRE Venture Capital",
  founded: 2015,
  hq: "Mahwah, NJ",
  aum: "$100M (Fund III, closed 2022)",
 thesis: "CRE Venture Capital partners with African entrepreneurs building category-defining technology companies in fintech, e-commerce, education, and digital infrastructure, connecting them to global markets through offices in the U.S., Kenya, and Nigeria.",
  leadership: [],
  timeline: [
    { year: "2015", event: "CRE Venture Capital founded." },
    { year: "2022", event: "CRE VC closes its $100 million Fund III." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Creandum",
  sectors: ["Enterprise Software", "Fintech", "Healthcare", "Gaming"],
  signatureExit: "Spotify's 2018 NYSE direct listing - an early Creandum investment and one of Europe's defining tech IPOs",
  slug: "creandum",
  website: "https://creandum.com",
  short: "Creandum",
  founded: 2003,
  hq: "Stockholm, Sweden",
  aum: "€500M+ across funds (approximate)",
  thesis: "Creandum, one of Europe's oldest technology VCs, invests early in ambitious founders building category-defining software and consumer companies across Europe and the US, with a portfolio that includes Spotify and Klarna.",
  leadership: [
    { name: "Staffan Helgesson", role: "General Partner" }
  ],
  timeline: [
    { year: "2003", event: "Creandum founded in Stockholm." },
    { year: "2018", event: "Spotify completes its NYSE direct listing." }
  ],
  holdings: [
    { name: "Spotify", ticker: "SPOT", historicalPrice: null, price: 498.24 }
  ]
},
  {
  rank: null,
  name: "HV Capital",
  sectors: ["Consumer Internet", "Enterprise Software", "Fintech"],
  signatureExit: "Zalando's IPO on the Frankfurt Stock Exchange - HV Capital (then Holtzbrinck Ventures) was Zalando's first institutional investor",
  slug: "hv-capital",
  website: "https://hvcapital.com",
  short: "HV Capital",
  founded: 2000,
  hq: "Munich, Germany",
  aum: "€2.8B",
  thesis: "HV Capital, founded as Holtzbrinck Ventures, backs founders from seed through IPO across e-commerce, SaaS, fintech, and deep tech, with a dedicated Growth arm for later-stage European technology investing.",
  leadership: [],
  timeline: [
    { year: "2000", event: "Founded as Holtzbrinck Ventures in Munich; later rebranded HV Capital." }
  ],
  holdings: [
    { name: "Zalando", ticker: "ZAL.DE", historicalPrice: null, price: null }
  ]
},
  {
  rank: null,
  name: "Vertex Ventures",
  sectors: ["Technology", "Healthcare"],
  signatureExit: "CyberArk's NASDAQ listing (NASDAQ: CYBR) - a notable holding across Vertex's regional fund network",
  slug: "vertex-ventures",
  website: "https://vertexventures.com",
  short: "Vertex Ventures",
  founded: 1988,
  hq: "Singapore",
  aum: "$6B (2024)",
  thesis: "Vertex Ventures is the global venture arm of Temasek, organized as regional funds (US, China, India, Southeast Asia, Israel) investing in technology and healthcare companies from startup through growth stage, anchored by Temasek's Singapore network.",
  leadership: [],
  timeline: [
    { year: "1988", event: "Founded as ST Ventures, later becoming Vertex Holdings under Temasek." }
  ],
  holdings: [
    { name: "Grab", ticker: "GRAB", historicalPrice: null, price: 3.7 },
    { name: "CyberArk", ticker: "CYBR", historicalPrice: null, price: null }
  ]
},
  {
  rank: null,
  name: "ZhenFund",
  sectors: ["Consumer Internet", "Fintech"],
  signatureExit: "No single defined public exit documented - ZhenFund has backed over 800 portfolio companies including 30+ unicorns",
  slug: "zhenfund",
  website: "https://zhenfund.com",
  short: "ZhenFund",
  founded: 2011,
  hq: "Beijing, China",
  aum: "Not publicly disclosed",
  thesis: "ZhenFund is one of China's most active early-stage investors, backing entrepreneurial founders at seed and Series A across technology, consumer, and education, leveraging co-founders Bob Xu and Victor Wang's serial-entrepreneur network from New Oriental.",
  leadership: [
    { name: "Bob Xiaoping Xu", role: "Co-Founder" },
    { name: "Victor Wang", role: "Co-Founder" },
    { name: "Anna Fang", role: "Partner & Co-CEO" }
  ],
  timeline: [
    { year: "2011", event: "Bob Xu and Victor Wang found ZhenFund in partnership with Sequoia China." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Golden Gate Ventures",
  sectors: ["Fintech", "Marketplaces", "Enterprise Software"],
  signatureExit: "No single defined public exit documented - Golden Gate backs early-stage fintech, mobility, and SaaS startups across Southeast Asia",
  slug: "golden-gate-ventures",
  website: "https://goldengate.vc",
  short: "Golden Gate Ventures",
  founded: 2011,
  hq: "Singapore",
  aum: "$250M (2025)",
  thesis: "Golden Gate Ventures backs early-stage founders across Southeast Asia, India, and the Middle East in fintech, marketplaces, SaaS, and consumer tech, blending Silicon Valley experience with local market expertise. Founders include Vinnie Lauria and Justin Hall.",
  leadership: [
    { name: "Vinnie Lauria", role: "Co-Founder" },
    { name: "Justin Hall", role: "Co-Founder" }
  ],
  timeline: [
    { year: "2011", event: "Golden Gate Ventures founded in Singapore." }
  ],
holdings: []
},
  {
  rank: null,
  name: "Elad Gil",
  sectors: ["AI", "Fintech", "SaaS", "Marketplaces", "Industrial Tech", "Cybersecurity", "Developer Tools", "Healthcare"],
  signatureExit: "Airbnb's 2020 IPO - one of dozens of pre-IPO checks across a track record including Coinbase, Instacart, Pinterest, and Roblox",
  slug: "elad-gil",
  website: "https://eladgil.com",
  short: "Elad Gil",
  founded: 2012,
  hq: "San Francisco, CA",
  aum: "$2B+ personal fund (2026, per CB Insights)",
  thesis: "Elad Gil is an independent solo General Partner backing pre-IPO technology companies across marketplaces, fintech, SaaS, and AI. A former Google product manager and co-founder of Mixer Labs (acquired by Twitter) and Color Genomics, Gil became a full-time angel investor around 2012 after leaving Twitter, building one of the most consistently successful individual track records in the industry.",
  leadership: [
    { name: "Elad Gil", role: "Solo General Partner", profileSlug: "elad-gil" }
  ],
  timeline: [
    { year: "2009", event: "Twitter acquires Mixer Labs, the location-based service Gil co-founded." },
    { year: "2012", event: "Gil transitions to full-time independent angel investing after leaving Twitter." },
    { year: "2020", event: "Airbnb, one of Gil's early pre-IPO investments, goes public." }
  ],
  holdings: [
    { name: "Airbnb", ticker: "ABNB", historicalPrice: null, price: 185.13 },
    { name: "Coinbase", ticker: "COIN", historicalPrice: null, price: 153.9 },
    { name: "Instacart", ticker: "CART", historicalPrice: null, price: 50.08 },
    { name: "Block", ticker: "XYZ", historicalPrice: null, price: 83.09 },
    { name: "Pinterest", ticker: "PINS", historicalPrice: null, price: 23.32 },
    { name: "Roblox", ticker: "RBLX", historicalPrice: null, price: 37.95 }
  
  ]
},
  {
  rank: null,
  name: "RA Capital Management",
  sectors: ["Healthcare"],
  signatureExit: "No single defined public exit documented - RA Capital invests across biotech, pharma, diagnostics, and digital health",
  slug: "ra-capital-management",
  website: "https://racap.com",
  short: "RA Capital",
  founded: 2004,
  hq: "Boston, MA",
  aum: "$14.4B (2025)",
  thesis: "RA Capital backs companies turning groundbreaking science into transformative medicines and technologies, investing across biotech R&D, therapeutics, and diagnostics through both hedge and venture funds. Founder Christoph Westphal previously served as CEO of Millennium Pharmaceuticals.",
  leadership: [
    { name: "Christoph Westphal", role: "Co-Founder & CEO", profileSlug: "christoph-westphal" }
  ],
  timeline: [
    { year: "2004", event: "Christoph Westphal co-founds RA Capital Management." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Foresite Capital",
  sectors: ["Healthcare"],
  signatureExit: "No single defined public exit documented - Foresite invests across biotech and life-sciences platform technologies",
  slug: "foresite-capital",
  website: "https://foresitecapital.com",
  short: "Foresite Capital",
  founded: 2011,
  hq: "San Francisco, CA",
  aum: "$900M (Fund VI, 2024)",
  thesis: "Foresite Capital invests across all stages in biotechnology and life sciences, with an emphasis on platform technologies and transformative biopharma. Founder and CEO Jim Tananbaum previously led BioOptions.",
  leadership: [
    { name: "Jim Tananbaum", role: "Founder & CEO", profileSlug: "jim-tananbaum" }
  ],
  timeline: [
    { year: "2011", event: "Jim Tananbaum founds Foresite Capital." },
    { year: "2024", event: "Foresite closes Fund VI at approximately $900 million." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Polaris Partners",
  sectors: ["Healthcare", "Enterprise Software"],
  signatureExit: "Alnylam Pharmaceuticals' 2004 IPO (NASDAQ: ALNY) - an early Polaris healthcare investment",
  slug: "polaris-partners",
  website: "https://polarispartners.com",
  short: "Polaris Partners",
  founded: 1996,
  hq: "Boston, MA",
  aum: "$19B invested cumulatively across funds (not a current single fund figure)",
  thesis: "Polaris invests across healthtech, life sciences, and B2B software, with a long history of backing biotech companies through to IPO - including Alnylam Pharmaceuticals, which went public in 2004. The firm supports entrepreneurs from seed through growth stage.",
  leadership: [
    { name: "Amy Schulman", role: "General Partner" },
    { name: "Brian Chee", role: "General Partner" }
  ],
  timeline: [
    { year: "1996", event: "Polaris Partners founded." },
    { year: "2004", event: "Alnylam Pharmaceuticals, an early Polaris healthcare investment, goes public." }
  ],
  holdings: [
    { name: "Alnylam Pharmaceuticals", ticker: "ALNY", historicalPrice: null, price: 227.12 }
  ]
},
  {
  rank: null,
  name: "Adobe Ventures",
  sectors: ["AI", "Enterprise Software"],
  signatureExit: "No single defined public exit documented - Adobe Ventures backs startups aligned with Adobe's creative, marketing, and AI strategy",
  slug: "adobe-ventures",
  website: null,
  short: "Adobe Ventures",
  founded: 1994,
  hq: "San Jose, CA",
  aum: "Not publicly disclosed (corporate fund, backed directly by Adobe's balance sheet)",
  thesis: "Adobe Ventures is Adobe's corporate venture arm, backing founders shaping the future of creativity, marketing, and AI. It invests in startups that integrate with or extend Adobe's Creative Cloud and Experience Cloud offerings.",
  leadership: [],
  timeline: [
    { year: "1994", event: "Adobe Ventures founded as Adobe's corporate venture capital arm." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "ServiceNow Ventures",
  sectors: ["Enterprise Software", "AI"],
  signatureExit: "No single defined public exit documented - ServiceNow Ventures backs early-stage companies extending the Now Platform",
  slug: "servicenow-ventures",
  website: null,
  short: "ServiceNow Ventures",
  founded: 2015,
  hq: "Santa Clara, CA",
  aum: "$300M deployed toward a $1B target by 2026",
  thesis: "ServiceNow Ventures invests in early-stage companies that extend the Now Platform across enterprise cloud, AI, and workflow automation, describing its portfolio as 'mission-driven innovators' in enterprise software.",
  leadership: [],
  timeline: [
    { year: "2015", event: "ServiceNow Ventures launched as ServiceNow's corporate venture fund." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Workday Ventures",
  sectors: ["Enterprise Software", "AI"],
  signatureExit: "No single defined public exit documented - Workday Ventures backs emerging enterprise software companies in AI, data, and infrastructure",
  slug: "workday-ventures",
  website: null,
  short: "Workday Ventures",
  founded: 2018,
  hq: "Pleasanton, CA",
  aum: "$500M fund",
  thesis: "Workday Ventures backs emerging enterprise software companies across AI, data, and infrastructure that Workday sees as shaping the future of work, leveraging Workday's own AI platform and customer ecosystem.",
  leadership: [
    { name: "Michael Magaro", role: "SVP, Workday" },
    { name: "Barbry McGann", role: "SVP, Workday" }
  ],
  timeline: [
    { year: "2018", event: "Workday Ventures launches with a $500 million fund." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Not Boring Capital",
  sectors: ["Fintech", "AI"],
  signatureExit: "No public exit documented - Not Boring Capital's first investments were fintech and AI startups",
  slug: "not-boring-capital",
  website: null,
  short: "Not Boring Capital",
  founded: 2021,
  hq: "New York, NY",
  aum: "$8M (initial fund, 2021)",
  thesis: "Not Boring Capital, run by writer-investor Packy McCormick, backs early-stage startups with 'stories to tell,' often in fintech and deep tech, and pairs its investing with the widely-read Not Boring newsletter and media studio.",
  leadership: [
    { name: "Packy McCormick", role: "Founder & General Partner", profileSlug: "packy-mccormick" }
  ],
  timeline: [
    { year: "2021", event: "Packy McCormick launches Not Boring Capital alongside the Not Boring newsletter." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "South Park Commons",
  sectors: ["Enterprise Software", "Consumer Internet"],
  signatureExit: "No public exit documented - South Park Commons backs founders at the idea stage, before a company typically exists",
  slug: "south-park-commons",
  website: "https://southparkcommons.com",
  short: "South Park Commons",
  founded: 2016,
  hq: "San Francisco, CA",
  aum: "Not publicly disclosed",
  thesis: "South Park Commons began as a community and lab space for engineers and entrepreneurs before adding a venture fund around 2018, investing in founders at what it calls '-1 to 0' - the idea stage, before a company has fully formed. Co-founder Ruchi Sanghvi was Facebook's first female engineer and later a VP at Dropbox.",
  leadership: [
    { name: "Ruchi Sanghvi", role: "Co-Founder & CEO", profileSlug: "ruchi-sanghvi" }
  ],
  timeline: [
    { year: "2016", event: "Ruchi Sanghvi co-founds South Park Commons as a community space." },
    { year: "2018", event: "South Park Commons launches its venture fund." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Contrary Capital",
  sectors: ["Enterprise Software", "Consumer Internet"],
  signatureExit: "No public exit documented - Contrary backs university-founded startups sourced through its network of campus chapters",
  slug: "contrary-capital",
  website: "https://contrary.com",
  short: "Contrary Capital",
  founded: 2014,
  hq: "San Francisco, CA",
  aum: "Not publicly disclosed",
  thesis: "Contrary Capital began as a student-run fund and built a network of on-campus partners to identify talent early, backing university-founded startups across the US, Latin America, and Asia. Founder Eric Tarczynski started the firm while a student at Northeastern.",
  leadership: [
    { name: "Eric Tarczynski", role: "Co-Founder & CEO", profileSlug: "eric-tarczynski" }
  ],
  timeline: [
    { year: "2014", event: "Eric Tarczynski co-founds Contrary Capital while a student at Northeastern." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Konvoy Ventures",
  sectors: ["Gaming"],
  signatureExit: "No public exit documented - Konvoy backs startups building new gaming platforms and interactive-entertainment technology",
  slug: "konvoy-ventures",
  website: "https://konvoy.vc",
  short: "Konvoy",
  founded: 2018,
  hq: "Denver, CO",
  aum: "$270M (Fund I)",
  thesis: "Konvoy invests at the intersection of gaming, culture, and technology, betting on the future of interactive entertainment through fintech-for-games tools, live-ops infrastructure, and new platforms. Founders Jackson Vaughan and Josh Chapman are both former gaming industry executives.",
  leadership: [
    { name: "Jackson Vaughan", role: "Co-Founder & General Partner" },
    { name: "Josh Chapman", role: "Co-Founder & Managing Partner" }
  ],
  timeline: [
    { year: "2018", event: "Konvoy Ventures founded by Jackson Vaughan and Josh Chapman." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Makers Fund",
  sectors: ["Gaming"],
  signatureExit: "No public exit documented - Makers Fund backs game studios and consumer entertainment platforms globally",
  slug: "makers-fund",
  website: "https://makersfund.com",
  short: "Makers Fund",
  founded: 2018,
  hq: "San Francisco, CA",
  aum: "$200M (Fund I)",
  thesis: "Makers Fund is a global early-stage fund backing video game studios and consumer entertainment platforms across the value chain of gaming and XR, with an international presence spanning San Francisco, Seoul, and Beijing.",
  leadership: [
    { name: "Jay Chi", role: "CEO & Co-Founder" },
    { name: "Michael Cheung", role: "Co-Founder" }
  ],
  timeline: [
    { year: "2018", event: "Jay Chi and Michael Cheung found Makers Fund and raise its $200M debut fund." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "BITKRAFT Ventures",
  sectors: ["Gaming", "Crypto"],
  signatureExit: "No public exit documented - BITKRAFT invests across games, esports, and immersive media at all stages",
  slug: "bitkraft-ventures",
  website: "https://bitkraft.vc",
  short: "BITKRAFT",
  founded: 2018,
  hq: "Berlin, Germany",
  aum: "$1.05B+ (across funds)",
  thesis: "BITKRAFT invests at all stages, from early seed through growth, across games, esports, immersive media, and Web3-for-entertainment. Founder Jens Hilgers previously founded ESL Gaming, one of the largest esports organizations in the world.",
  leadership: [
    { name: "Jens Hilgers", role: "Co-Founder & General Partner" },
    { name: "Scott Rupp", role: "Co-Founder & General Partner" }
  ],
  timeline: [
    { year: "2018", event: "Jens Hilgers and Scott Rupp found BITKRAFT Ventures." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Polychain Capital",
  sectors: ["Crypto", "DeFi"],
  signatureExit: "No public equity exit - Polychain was an early investor in Coinbase (NASDAQ: COIN) ahead of its 2021 direct listing",
  slug: "polychain-capital",
  website: "https://polychain.capital",
  short: "Polychain",
  founded: 2016,
  hq: "San Francisco, CA",
  aum: "$5B (2024)",
  thesis: "Polychain invests in blockchain protocols and cryptocurrency projects, focused on the foundational infrastructure of decentralized networks. Founder Olaf Carlson-Wee was Coinbase's first Head of Risk before launching Polychain in 2016.",
  leadership: [
    { name: "Olaf Carlson-Wee", role: "Founder & CEO", profileSlug: "olaf-carlson-wee" }
  ],
  timeline: [
    { year: "2016", event: "Olaf Carlson-Wee founds Polychain Capital after leaving Coinbase." }
  ],
  holdings: [
    { name: "Coinbase", ticker: "COIN", historicalPrice: null, price: 153.9 }
  ]
},
  {
  rank: null,
  name: "Multicoin Capital",
  sectors: ["Crypto", "DeFi"],
  signatureExit: "No public equity exit documented - Multicoin invests primarily in tokens and blockchain protocols rather than public equities",
  slug: "multicoin-capital",
  website: "https://multicoincapital.com",
  short: "Multicoin",
  founded: 2017,
  hq: "Austin, TX",
  aum: "Not publicly disclosed",
  thesis: "Multicoin is a thesis-driven crypto investment firm backing projects it believes are reshaping trillion-dollar markets through decentralized networks and new token economics. Co-founders Kyle Samani and Tushar Jain lead the firm's investments across crypto infrastructure and DeFi.",
  leadership: [
    { name: "Kyle Samani", role: "Co-Founder & Managing Partner", profileSlug: "kyle-samani" },
    { name: "Tushar Jain", role: "Co-Founder & Managing Partner", profileSlug: "tushar-jain" }
  ],
  timeline: [
    { year: "2017", event: "Kyle Samani and Tushar Jain co-found Multicoin Capital in May." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Electric Capital",
  sectors: ["Crypto", "AI", "Healthcare"],
  signatureExit: "No public equity exit documented - Electric Capital invests primarily in early-stage crypto, developer tools, and frontier technology",
  slug: "electric-capital",
  website: "https://electriccapital.com",
  short: "Electric Capital",
  founded: 2018,
  hq: "Palo Alto, CA",
  aum: "$3B+ deployed cumulatively since 2018 (not a stated current fund AUM)",
  thesis: "Electric Capital invests from seed through growth across crypto, blockchain, developer tools, AI, and healthtech, supporting founders it describes as building 'trust-minimized' technology from inception through IPO. Co-founder Avichal Garg previously worked at Facebook and Greylock Partners.",
  leadership: [
    { name: "Avichal Garg", role: "Co-Founder & General Partner", profileSlug: "avichal-garg" },
    { name: "Curtis Spencer", role: "Co-Founder & General Partner", profileSlug: "curtis-spencer" }
  ],
  timeline: [
    { year: "2018", event: "Avichal Garg and Curtis Spencer co-found Electric Capital." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Pantera Capital",
  sectors: ["Crypto", "DeFi"],
  signatureExit: "No public equity exit documented - Pantera launched the first licensed Bitcoin fund in the U.S. in 2013",
  slug: "pantera-capital",
  website: "https://panteracapital.com",
  short: "Pantera",
  founded: 2003,
  hq: "Menlo Park, CA",
  aum: "$5B (2025)",
  thesis: "Pantera invests in digital currencies and blockchain-enabled companies across all stages, and is one of the oldest funds in the crypto space. Founder Dan Morehead previously ran macro trading at Tiger Management before launching Pantera in 2003 and later pivoting it fully to digital assets.",
  leadership: [
    { name: "Dan Morehead", role: "Founder & CEO", profileSlug: "dan-morehead" },
    { name: "Paul Veradittakit", role: "Managing Partner" }
  ],
  timeline: [
    { year: "2003", event: "Dan Morehead founds Pantera Capital." },
    { year: "2013", event: "Pantera launches the first licensed Bitcoin fund in the United States." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Variant Fund",
  sectors: ["Crypto", "DeFi"],
  signatureExit: "No public equity exit documented - Variant invests in foundational crypto protocols, including an early stake in Uniswap",
  slug: "variant-fund",
  website: "https://variant.fund",
  short: "Variant",
  founded: 2020,
  hq: "New York, NY",
  aum: "Not publicly disclosed",
  thesis: "Variant invests in foundational blockchain protocols and crypto-native networks, backing projects like Uniswap, Phantom, Mirror, and Flashbots. Founder Jesse Walden previously led crypto investments at a16z before launching Variant in 2020.",
  leadership: [
    { name: "Jesse Walden", role: "Founder & Managing Partner", profileSlug: "jesse-walden" },
    { name: "Alana Levin", role: "Partner" }
  ],
  timeline: [
    { year: "2020", event: "Jesse Walden founds Variant Fund after leading crypto investments at a16z." }
  ],
  holdings: []
},
  {
  rank: null,
  name: "Blockchain Capital",
  sectors: ["Crypto", "DeFi"],
  signatureExit: "Coinbase's 2021 direct listing - Blockchain Capital invested pre-IPO and participated directly in the listing",
  slug: "blockchain-capital",
  website: "https://blockchaincapital.com",
  short: "Blockchain Capital",
  founded: 2013,
  hq: "San Francisco, CA",
  aum: "$2B+ (across multiple funds)",
  thesis: "Founded by brothers Bart and Brad Stephens, Blockchain Capital was one of the first venture funds dedicated entirely to blockchain ventures, aiming to build the infrastructure of the crypto economy from seed through growth stage.",
  leadership: [
    { name: "Bart Stephens", role: "Co-Founder & General Partner" },
    { name: "Brad Stephens", role: "Co-Founder & General Partner", profileSlug: "brad-stephens" }
  ],
  timeline: [
    { year: "2013", event: "Bart Stephens and Brad Stephens co-found Blockchain Capital." },
    { year: "2021", event: "Coinbase completes its direct listing; Blockchain Capital participates as a pre-IPO investor." }
  ],
  holdings: [
    { name: "Coinbase", ticker: "COIN", historicalPrice: null, price: 153.9 }
  ]
},
  {
  rank: null,
  name: "Greenoaks Capital",
  sectors: ["Consumer Internet", "Fintech", "Logistics"],
  signatureExit: "Coupang's 2021 NYSE listing - Greenoaks was an early backer and co-founder Neil Mehta sits on Coupang's board",
  slug: "greenoaks-capital",
  website: "https://greenoaks.com",
  short: "Greenoaks",
  founded: 2012,
  hq: "San Francisco, CA",
  aum: "$15B (2025)",
  thesis: "Greenoaks makes concentrated, large initial bets in a small number of 'generation-defining' technology companies, then maintains those positions through multiple private rounds and into the public markets rather than exiting early. Founder Neil Mehta, previously at Kayne Anderson and D.E. Shaw, has built the firm around long-duration conviction rather than portfolio breadth.",
  leadership: [
    { name: "Neil Mehta", role: "Founder & Managing Partner", profileSlug: "neil-mehta" },
    { name: "Neil Shah", role: "Partner" },
    { name: "Patrick Backhouse", role: "Partner" },
    { name: "Ben Solarz", role: "Partner" }
  ],
  timeline: [
    { year: "2012", event: "Greenoaks Capital founded by Neil Mehta and Benny Peretz." },
    { year: "2021", event: "Coupang goes public on the NYSE; Mehta joins the board." }
  ],
  holdings: [
    { name: "Coupang", ticker: "CPNG", historicalPrice: null, price: 16.29 },
     { name: "Robinhood", ticker: "HOOD", historicalPrice: null, price: 99.37 }

  ]
},
  {
    slug: 'cavalry-ventures',
    rank: null,
    name: 'Cavalry Ventures',
    short: 'Cavalry',
    website: 'https://cavalry.vc/',
    founded: 2016,
    hq: 'Berlin, Germany',
    aum: 'Not Disclosed',
    sectors: ['B2B Software', 'Consumer', 'SaaS'],
    thesis: 'Cavalry backs exceptional founding teams building foundational software across Europe, leading pre-seed and seed financing rounds with initial checks in the mid-six-to-seven figures, often investing pre-product or pre-revenue.',
    holdings: [],
  },
  {
    slug: 'point72-ventures',
    rank: null,
    name: 'Point72 Ventures',
    short: 'Point72 Ventures',
    website: 'https://www.point72.com/',
    founded: 2014,
    hq: 'New York, NY',
    aum: 'Not Disclosed',
    sectors: ['Fintech', 'AI', 'Security', 'Consumer Tech'],
    thesis: 'Point72 Ventures follows a thematic, conviction-driven strategy, backing founders building for big outcomes across critical domains - especially where AI, data, and technology can create new defensibility - deploying capital from seed through growth stages.',
    holdings: [],
  },
  {
    slug: 'playground-global',
    rank: null,
    name: 'Playground Global',
    short: 'Playground',
    website: 'https://www.playground.vc/',
    founded: 2015,
    hq: 'Palo Alto, CA',
    aum: '>$1.7B',
    sectors: ['Robotics', 'AI', 'Biotech', 'Climate'],
    thesis: 'Playground backs science-driven startups tackling hard problems at the intersection of hardware and software, investing in early-stage deep tech across next-generation computing, robotics, AI, and new materials.',
    holdings: [],
    signatureExit: 'Early backer of MosaicML, which Databricks acquired for approximately $1.3B in 2023',
  },
  {
    slug: 'grishin-robotics',
    rank: null,
    name: 'Grishin Robotics',
    short: 'Grishin Robotics',
    website: 'https://www.grishinrobotics.com/',
    founded: 2012,
    hq: 'Menlo Park, CA',
    aum: 'Not Disclosed',
    sectors: ['Robotics', 'Consumer'],
    thesis: 'Grishin seeks the best early-stage entrepreneurs in consumer robotics and tech-enabled hardware, backing visionary teams applying robotics, AI, and innovative hardware to large consumer markets.',
    holdings: [],
    signatureExit: 'Early investor in Ring, the smart doorbell company Amazon acquired in 2018 for a reported ~$1B',
  },
  {
    slug: 'defy-partners',
    rank: null,
    name: 'Defy Partners',
    short: 'Defy Partners',
    website: 'https://defy.vc/',
    founded: 2016,
    hq: 'Woodside, CA',
    aum: 'Not Disclosed',
    sectors: ['Fintech', 'SaaS', 'Consumer', 'Cybersecurity'],
    thesis: 'Led by former eBay and PayPal executives, Defy Partners targets bold founders building new markets, bridging startups from seed rounds to high growth with capital plus operational support.',
    holdings: [],
  },
  {
    slug: 'baukunst',
    rank: null,
    name: 'Baukunst',
    short: 'Baukunst',
    website: 'https://baukunst.co/',
    founded: 2022,
    hq: 'San Francisco, CA',
    aum: '$100M',
    sectors: ['Biotech', 'Consumer'],
    thesis: 'Baukunst partners with creative technologists pushing the boundaries of how physical and digital worlds converge, backing founders applying technology to industries like real estate, life sciences, agriculture, and consumer products.',
    holdings: [],
  },
  {
    slug: 'mucker-capital',
    rank: null,
    name: 'Mucker Capital',
    short: 'Mucker',
    website: 'https://www.mucker.com/',
    founded: 2011,
    hq: 'Santa Monica, CA',
    aum: '~$45M',
    sectors: ['Consumer', 'Fintech', 'SaaS'],
    thesis: 'Mucker backs exceptional entrepreneurs, often outside Silicon Valley\'s norm, at very early stages, emphasizing founder empowerment and hands-on support across consumer, insurtech, and e-commerce startups.',
    holdings: [
      { name: 'ServiceTitan', ticker: 'TTAN', price: 93.7, historicalPrice: null },
      { name: 'Surf Air Mobility', ticker: 'SRFM', price: 0.7911, historicalPrice: null },
    ],
    signatureExit: 'Early investor in Honey Science, the browser-extension startup PayPal acquired in 2020 for about $4B',
  },
  {
    slug: 'struck-capital',
    rank: null,
    name: 'Struck Capital',
    short: 'Struck Capital',
    website: 'https://struckcapital.com/',
    founded: 2014,
    hq: 'Santa Monica, CA',
    aum: 'Not Disclosed',
    sectors: ['B2B Software', 'SaaS', 'Cloud Infrastructure'],
    thesis: 'Struck Capital is built for B2B seed, investing in mission-driven founders building scalable tech platforms in security, cloud infrastructure, data analytics, and developer tools.',
    holdings: [],
  },
  {
    slug: 'science-inc',
    rank: null,
    name: 'Science Inc.',
    short: 'Science Inc.',
    website: 'https://www.science-inc.com/',
    founded: 2011,
    hq: 'Los Angeles, CA',
    aum: 'Not Disclosed',
    sectors: ['Consumer Internet'],
    thesis: 'Science Inc. is a startup accelerator and investment studio that builds and backs consumer technology companies, providing funding, marketing, and operational expertise to reach scale quickly.',
    holdings: [],
    signatureExit: 'Co-founded and grew Dollar Shave Club, which Unilever purchased for about $1B in 2016',
  },
  {
    slug: 'soma-capital',
    rank: null,
    name: 'Soma Capital',
    short: 'Soma Capital',
    website: 'https://somacap.com/',
    founded: 2015,
    hq: 'San Francisco, CA',
    aum: '~$1-2B',
    sectors: ['Fintech', 'B2B Software', 'SaaS'],
    thesis: 'Soma is a founder-centric seed fund built by entrepreneurs, partnering with extraordinary early teams across fintech and B2B SaaS and leveraging its founders\' networks to accelerate customer growth.',
    holdings: [],
  },
  {
    slug: 'vy-capital',
    rank: null,
    name: 'Vy Capital',
    short: 'Vy Capital',
    website: 'https://www.vycapital.com/',
    founded: 2013,
    hq: 'Dubai, UAE',
    aum: '~$5B',
    sectors: ['Fintech', 'AI', 'Consumer Internet'],
    thesis: 'Led by Alexander Tamas, Vy makes highly concentrated bets in technology platforms worldwide, blending crossover venture growth investing with a private-equity mentality.',
    holdings: [],
  },
  {
    slug: 'mfv-partners',
    rank: null,
    name: 'MFV Partners',
    short: 'MFV Partners',
    website: 'https://www.mfvpartners.com/',
    founded: 2018,
    hq: 'Los Altos, CA',
    aum: 'Not Disclosed',
    sectors: ['Robotics', 'AI'],
    thesis: 'MFV Partners backs visionary deep tech entrepreneurs solving world-scale problems in automotive, manufacturing, energy, agriculture, and healthcare through breakthrough engineering-led technology.',
    holdings: [],
  },
  {
    slug: 'liquid2-ventures',
    rank: null,
    name: 'Liquid 2 Ventures',
    short: 'Liquid 2',
    website: 'https://www.liquid2.vc/',
    founded: 2015,
    hq: 'San Francisco, CA',
    aum: '~$25M',
    sectors: ['SaaS', 'Consumer Internet'],
    thesis: 'Founded by Joe Montana and partners, Liquid 2 invests in high-growth sector companies at seed and Series A, leveraging its team\'s network to accelerate customer acquisition and follow-on funding.',
    holdings: [
      { name: 'GitLab', ticker: 'GTLB', price: 43.35, historicalPrice: null },
      { name: 'Pinterest', ticker: 'PINS', price: 23.32, historicalPrice: null },
    ],
    signatureExit: 'Part of GitLab\'s $1.5M seed round in 2015, held through its 2021 IPO for a reported ~420x return',
  },
  {
    slug: 'unusual-ventures',
    rank: null,
    name: 'Unusual Ventures',
    short: 'Unusual Ventures',
    website: 'https://www.unusual.vc/',
    founded: 2018,
    hq: 'Menlo Park, CA',
    aum: '>$1B',
    sectors: ['Cloud Infrastructure', 'SaaS', 'Fintech'],
    thesis: 'Unusual Ventures specializes in helping seed-stage founders achieve product-market fit, pairing capital with hands-on operating support in marketing, recruiting, and strategy.',
    holdings: [],
  },
  {
    slug: 'collaborative-fund',
    rank: null,
    name: 'Collaborative Fund',
    short: 'Collaborative Fund',
    website: 'https://collabfund.com/',
    founded: 2010,
    hq: 'New York, NY',
    aum: '>$1B',
    sectors: ['Consumer', 'Climate', 'Fintech'],
    thesis: 'Collaborative Fund backs founders pushing the world forward, investing in businesses that combine strong growth with positive social impact across green tech, consumer health, and fintech.',
    holdings: [
      { name: 'Lyft', ticker: 'LYFT', price: 17.13, historicalPrice: null },
      { name: 'Upstart', ticker: 'UPST', price: 30.97, historicalPrice: null },
    ],
    signatureExit: 'Early investor in Lyft ahead of its 2019 IPO',
  },
  {
    slug: 'shrug-capital',
    rank: null,
    name: 'Shrug Capital',
    short: 'Shrug Capital',
    website: 'https://www.shrug.vc/',
    founded: 2018,
    hq: 'San Francisco, CA',
    aum: 'Not Disclosed',
    sectors: ['Consumer', 'Blockchain'],
    thesis: 'Shrug takes a "seed+" approach to fast-moving consumer trends, investing early in startups built around culture and consumer behavior and helping founders with branding, marketing, and product design.',
    holdings: [],
  },
  {
    rank: 40,
    name: "Base10 Partners",
    sectors: ["Industrial Tech", "Fintech", "Enterprise Software", "AI"],
    signatureExit: "No confirmed public exit yet - Base10's clearest proof points are current portfolio companies growing rapidly, including Nubank (NYSE: NU) as one of the firm's larger co-investment wins alongside Notion and Figma, both still private",
    slug: "base10-partners",
    website: "https://base10.vc",
    short: "Base10 Partners",
    founded: 2017,
    hq: "San Francisco, CA",
    aum: "$2.6B",
    thesis: "Base10 Partners was founded in 2017 by Adeyemi 'Ade' Ajao, a multi-country serial founder with African, European, and Latin roots raised in Spain and Nigeria, and TJ Nahigian, built around backing automation technology for the 'Real Economy' - traditional sectors like retail, logistics, healthcare, and construction that most consumer-tech-obsessed investors overlooked. The firm originally called its thesis 'Applied AI for the Real Economy,' a term LPs dismissed as too niche in its early years, until AI became the dominant investing category and validated the original bet. Base10 is recognized as the world's largest Black-led venture capital firm, and commits up to 50% of its carried interest to fund scholarships for students at Historically Black Colleges and Universities through its Advancement Initiative. The firm has made more than 110 investments including Notion, Figma, and Nubank, closing $850 million in 2026 to push total AUM to $2.6 billion.",
    leadership: [
      { name: "Adeyemi 'Ade' Ajao", role: "Co-Founder & Managing Partner", profileSlug: "adeyemi-ajao" },
      { name: "TJ Nahigian", role: "Co-Founder & Managing Partner", profileSlug: "tj-nahigian" }
    ],
    timeline: [
      { year: "2017", event: "Adeyemi Ajao and TJ Nahigian found Base10 Partners in San Francisco." },
      { year: "2021", event: "Launches a $250 million growth-stage fund." },
      { year: "2022", event: "Closes Fund III at $460 million, crossing $1 billion in cumulative AUM." },
      { year: "2026", event: "Closes $850 million in new capital, pushing AUM to $2.6 billion; Ajao joins Motive's board." }
    ],
    holdings: [
      { name: "Nubank", ticker: "NU", historicalPrice: null, price: 13.93 }
    ]
  },
  {
    rank: 77,
    name: "Village Global",
    sectors: ["Fintech", "Consumer", "AI", "Healthcare"],
    signatureExit: "No singular household-name exit - Village Global's model spreads bets widely across 233 companies rather than concentrating on a few outsized wins, producing 9 unicorns and 22 acquisitions cumulatively",
    slug: "village-global",
    website: "https://www.villageglobal.com",
    short: "Village Global",
    founded: 2017,
    hq: "San Francisco, CA",
    aum: "$500M+",
    thesis: "Village Global was founded in September 2017 by Ben Casnocha, Erik Torenberg, Anne Dwane, and Ross Fubini, chaired by Reid Hoffman, built around a genuinely different structural bet: that a venture firm could distribute deal sourcing and evaluation across a network of successful operators rather than relying solely on a small internal partner team. That network-first model attracted an unusually prominent group of limited partners - Bill Gates, Jeff Bezos, Mark Zuckerberg, Eric Schmidt, and Anne Wojcicki among them - who provide both capital and mentorship access to portfolio founders through more than 400 'Network Leaders.' The firm invests $500,000 to $3 million in pre-seed and seed-stage companies across fintech, consumer, AI, and healthcare, and has backed 233 companies over its history, producing 9 unicorns and 22 acquisitions with more than $500 million in AUM.",
    leadership: [
      { name: "Ben Casnocha", role: "Co-Founder & General Partner", profileSlug: "ben-casnocha" },
      { name: "Erik Torenberg", role: "Co-Founder" },
      { name: "Anne Dwane", role: "Co-Founder & General Partner" }
    ],
    timeline: [
      { year: "2017", event: "Ben Casnocha, Erik Torenberg, Anne Dwane, and Ross Fubini found Village Global in September, chaired by Reid Hoffman." },
      { year: "2018", event: "Closes its first fund, backed by Bezos, Gates, and Zuckerberg as LPs." },
      { year: "2026", event: "Portfolio reaches 233 companies with 9 unicorns and 22 acquisitions." }
    ],
    holdings: []
  },
  {
    rank: 60,
    name: "Tribe Capital",
    sectors: ["Enterprise Software", "Fintech", "Crypto", "AI"],
    signatureExit: "No major venture-portfolio exit reported yet - Tribe's clearest public-market event is its own 2021 SPAC, which listed on NASDAQ with $240 million in capital, distinct from a traditional portfolio-company exit",
    slug: "tribe-capital",
    website: "https://www.tribecap.co",
    short: "Tribe Capital",
    founded: 2018,
    hq: "Menlo Park, CA",
    aum: "$1.9B",
    thesis: "Tribe Capital was founded in July 2018 by Arjun Sethi, Jonathan Hsu, and Ted Maidenberg, all three departing Social Capital together as part of a broader wave of spinouts following Chamath Palihapitiya's restructuring of that firm. Drawing on Hsu's data-science background from Social Capital's internal analytics team, Tribe built a genuinely quantitative approach to venture investing - using proprietary data models to inform diligence while remaining deeply founder-focused rather than purely algorithmic - investing at seed and early Series A in enterprise SaaS, fintech, crypto, and AI-driven businesses. The firm's first investment was in sFOX in 2018, and it sponsored a SPAC that went public on NASDAQ with $240 million in capital in 2021. Tribe has raised multiple funds since founding, including two roughly $450 million vehicles, reaching $1.9 billion in assets under management.",
    leadership: [
      { name: "Arjun Sethi", role: "Co-Founder & General Partner", profileSlug: "arjun-sethi" },
      { name: "Jonathan Hsu", role: "Co-Founder & General Partner", profileSlug: "jonathan-hsu" },
      { name: "Ted Maidenberg", role: "Co-Founder & General Partner", profileSlug: "ted-maidenberg" }
    ],
    timeline: [
      { year: "2018", event: "Arjun Sethi, Jonathan Hsu, and Ted Maidenberg found Tribe Capital in July, all departing Social Capital together." },
      { year: "2018", event: "Makes its first investment in sFOX." },
      { year: "2020", event: "Closes its first dedicated fund at approximately $450 million." },
      { year: "2021", event: "Sponsors a SPAC that lists on NASDAQ with $240 million in capital." },
      { year: "2025", event: "AUM reaches $1.9 billion." }
    ],
    holdings: []
  },
  {
    rank: 61,
    name: "Storm Ventures",
    sectors: ["Enterprise Software", "Cybersecurity", "AI", "Developer Tools"],
    signatureExit: "No specific blockbuster exit publicly listed - Storm's track record instead spans more than 200 investments and multiple acquisitions across two-plus decades of early-stage B2B enterprise software investing",
    slug: "storm-ventures",
    website: "https://www.stormventures.com",
    short: "Storm Ventures",
    founded: 2000,
    hq: "Palo Alto, CA",
    aum: "Not publicly disclosed",
    thesis: "Storm Ventures was founded in 2000 by Ryan Floyd, Tae Hea Nahm, and Sanjay Subhedar in Palo Alto, raising its first fund in the same turbulent year the dot-com bubble began unraveling - timing Floyd has candidly called pure luck, since raising a year later would likely have proven far harder. The firm built a deliberately focused thesis around early-stage B2B enterprise software, cloud infrastructure, cybersecurity, and AI, taking an assertive, broad-network sourcing approach rather than relying on an insular circle of friends-of-friends deals, a pattern Floyd has said limits diversity of dealflow at many venture firms. Over more than two decades, Storm has made more than 200 investments across the United States, India, South Korea, and Europe, backing Workato, Talkdesk, and Pipedrive, and closed its seventh fund in December 2022.",
    leadership: [
      { name: "Ryan Floyd", role: "Founding Managing Director", profileSlug: "ryan-floyd" },
      { name: "Tae Hea Nahm", role: "Founding Partner", profileSlug: "tae-hea-nahm" },
      { name: "Sanjay Subhedar", role: "Partner Emeritus", profileSlug: "sanjay-subhedar" }
    ],
    timeline: [
      { year: "2000", event: "Ryan Floyd, Tae Hea Nahm, and Sanjay Subhedar found Storm Ventures in Palo Alto." },
      { year: "2019", event: "Closes Fund VI in November." },
      { year: "2022", event: "Closes Fund VII in December." }
    ],
    holdings: []
  },
  {
    rank: 43,
    name: "Project A Ventures",
    sectors: ["Fintech", "Defense Tech", "Enterprise Software", "AI"],
    signatureExit: "No confirmed public exit yet - Project A's model is operational company-building rather than harvesting, and its clearest current proof point is Trade Republic, now managing €100 billion in customer assets while still privately held",
    slug: "project-a-ventures",
    website: "https://www.project-a.com",
    short: "Project A Ventures",
    founded: 2012,
    hq: "Berlin, Germany",
    aum: "€1.2B",
    thesis: "Project A Ventures was founded in 2012 by six former Rocket Internet colleagues - including Uwe Horstmann and Florian Heinemann - who wanted to build a genuinely different support model than the pure incubation approach they'd seen at Rocket Internet. Their 'operational VC' model pairs early-stage capital with a team of more than 140 in-house functional experts across software engineering, business intelligence, marketing, and recruiting, exclusively available to portfolio companies rather than offered as generic advisory calls. That model has backed more than 130 startups including Trade Republic (now managing €100 billion in customer assets), WorldRemit, sennder, and Catawiki, and Project A pivoted early into defense and dual-use technology starting in 2022 - becoming an early investor in Stark, a defense drone maker where co-founder Horstmann later became CEO. The firm closed its fifth and largest fund at €325 million in 2025, pushing total AUM to €1.2 billion.",
    leadership: [
      { name: "Uwe Horstmann", role: "Co-Founder & General Partner", profileSlug: "uwe-horstmann" },
      { name: "Florian Heinemann", role: "Co-Founder & General Partner", profileSlug: "florian-heinemann" },
      { name: "Malin Posern", role: "General Partner", profileSlug: "malin-posern" }
    ],
    timeline: [
      { year: "2012", event: "Six former Rocket Internet colleagues found Project A Ventures in Berlin." },
      { year: "2022", event: "Begins focusing on defense technology, becoming an early investor in Stark." },
      { year: "2025", event: "Closes its fifth and largest fund at €325 million in June." },
      { year: "2026", event: "Uwe Horstmann becomes CEO of Stark while remaining active at Project A." }
    ],
    holdings: []
  },
  {
    rank: 16,
    name: "Sofinnova Partners",
    sectors: ["Healthcare", "Deep Tech"],
    signatureExit: "Shockwave Medical's acquisition by Johnson & Johnson in 2024 - a cardiovascular device company Sofinnova supported for more than a decade, one of 25 IPOs and 30 acquisitions across the firm's 50-plus year history",
    slug: "sofinnova-partners",
    website: "https://sofinnovapartners.com",
    short: "Sofinnova Partners",
    founded: 1972,
    hq: "Paris, France",
    aum: "€4B+ (~$4.4B)",
    thesis: "Sofinnova Partners traces its roots to 1972, when Sofinnova S.A. was founded in Paris, later splitting in 1997 into two fully independent firms: the American Sofinnova Investments (now based in Menlo Park) and the Paris-based Sofinnova Partners profiled here. Over more than five decades, Sofinnova has built a genuinely hands-on company-building model across the entire life sciences value chain, from its in-house MD Start medtech accelerator through later-stage growth investing, concentrated specifically on healthcare and sustainability. That patient, science-first approach - led by Chairman Antoine Papiernik, who joined the same year as the 1997 split - has backed more than 500 companies over 50 years, producing 25 IPOs and 30 acquisitions including Shockwave Medical (acquired by Johnson & Johnson), DBV Technologies, and ProQR Therapeutics, with Sofinnova raising €1.2 billion in a single year in 2025 to push total AUM past €4 billion.",
    leadership: [
      { name: "Antoine Papiernik", role: "Chairman & Managing Partner", profileSlug: "antoine-papiernik" },
      { name: "Graziano Seghezzi", role: "Managing Partner", profileSlug: "graziano-seghezzi" },
      { name: "Denis Lucquin", role: "Managing Partner Emeritus", profileSlug: "denis-lucquin" }
    ],
    timeline: [
      { year: "1972", event: "Sofinnova S.A. is founded in Paris." },
      { year: "1997", event: "Splits into two independent firms: Sofinnova Investments (US) and Sofinnova Partners (Paris)." },
      { year: "2024", event: "Shockwave Medical is acquired by Johnson & Johnson." },
      { year: "2025", event: "Raises €1.2 billion in a single year, pushing AUM past €4 billion." }
    ],
    holdings: []
  },
  {
    rank: 41,
    name: "March Capital",
    sectors: ["Enterprise Software", "Cybersecurity", "AI"],
    signatureExit: "CrowdStrike's 2019 NASDAQ IPO - Jamie Montgomery served as a board observer during CrowdStrike's private growth, one of several exits including ForgeRock and Elastic across March's decade-plus portfolio",
    slug: "march-capital",
    website: "https://marchcp.com",
    short: "March Capital",
    founded: 2013,
    hq: "Santa Monica, CA",
    aum: "$1B+ (across four funds)",
    thesis: "March Capital was founded in September 2013 by Jamie Montgomery and three fellow tech industry veterans with more than 50 years of combined investing experience, moving into a small Santa Monica office with a specific, then-contrarian thesis: enterprise software, cybersecurity, and India would become central pillars of the innovation economy. Montgomery's prior quarter-century running boutique investment bank Montgomery & Co., plus his founding of The Montgomery Summit - an annual technology conference now drawing more than 1,000 global entrepreneurs and investors - gave the firm an unusually deep network from inception. That combination of banking relationships and sector conviction played a real role in CrowdStrike's growth as a private company, where Montgomery served as board observer ahead of its 2019 NASDAQ IPO, and March closed a $240 million debut fund in 2016, then the largest first-time venture fund launched in Southern California, growing to more than $1 billion across four funds.",
    leadership: [
      { name: "Jamie Montgomery", role: "Co-Founder & Managing Partner", profileSlug: "jamie-montgomery" }
    ],
    timeline: [
      { year: "2013", event: "Jamie Montgomery and three co-founders found March Capital in Santa Monica in September." },
      { year: "2016", event: "Closes a $240 million debut fund, the largest first-time SoCal venture fund at the time." },
      { year: "2019", event: "CrowdStrike completes its NASDAQ IPO." }
    ],
    holdings: [
      { name: "CrowdStrike", ticker: "CRWD", historicalPrice: null, price: 225.53 }
    ]
  },
  {
    rank: 11,
    name: "Bond Capital",
    sectors: ["Enterprise Software", "Consumer", "Deep Tech"],
    signatureExit: "No confirmed public exit yet for Bond's own portfolio - the firm's clearest proof point remains Canva, backed since 2019 at a $70 million investment and now valued at $42 billion while still privately held",
    slug: "bond-capital",
    website: "https://www.bondcap.com",
    short: "Bond Capital (BOND)",
    founded: 2018,
    hq: "San Francisco, CA",
    aum: "$5.9B",
    thesis: "Bond Capital was founded in September 2018 when Mary Meeker, the analyst famous for her annual Internet Trends reports, left Kleiner Perkins amid an internal leadership dispute, taking fellow growth-practice partners Mood Rowghani, Noah Knauf, and Juliet de Baubigny with her. The firm applies Meeker's research-driven, data-first investment discipline exclusively to late-stage growth equity, leading large rounds for mature, category-defining technology companies rather than early-stage bets. That approach made Canva Bond's very first investment in May 2019 and remains its signature holding, a $70 million check that helped fuel the design platform's growth to a $42 billion valuation, alongside more recent bets on Applied Intuition, Checkr, and AI voice company ElevenLabs. Bond has raised three funds since founding - $1.25 billion, $2 billion, and $2.5 billion - reaching $5.9 billion in AUM across 176 investments and 51 unicorns.",
    leadership: [
      { name: "Mary Meeker", role: "Founder & General Partner", profileSlug: "mary-meeker" },
      { name: "Mood Rowghani", role: "General Partner", profileSlug: "mood-rowghani" },
      { name: "Noah Knauf", role: "General Partner", profileSlug: "noah-knauf" }
    ],
    timeline: [
      { year: "2018", event: "Mary Meeker leaves Kleiner Perkins in September and founds Bond Capital." },
      { year: "2019", event: "Closes Fund I at $1.25 billion in April; makes its first investment, $70 million into Canva, in May." },
      { year: "2021", event: "Closes Fund II at $2 billion in March." },
      { year: "2022", event: "Closes Fund III at $2.5 billion in April." },
      { year: "2026", event: "AUM reaches $5.9 billion across 176 investments and 51 unicorns." }
    ],
    holdings: []
  },
  {
    rank: 29,
    name: "Obvious Ventures",
    sectors: ["Climate", "Healthcare", "Consumer", "AI"],
    signatureExit: "Beyond Meat's May 2019 NASDAQ IPO at a roughly $14 billion peak market cap - Obvious held a 9% stake at the time, one of several public outcomes alongside Planet Labs' 2021 SPAC listing and Recursion Pharmaceuticals' NASDAQ IPO",
    slug: "obvious-ventures",
    website: "https://obvious.com",
    short: "Obvious Ventures",
    founded: 2014,
    hq: "San Francisco, CA",
    aum: "$1.6B+ (across five funds)",
    thesis: "Obvious Ventures was founded in December 2014 by Twitter and Medium co-founder Ev Williams, alongside James Joaquin (former CEO of Xoom and Ofoto) and Vishal Vasishth, built on a genuinely non-obvious premise for the time: that companies solving humanity's biggest problems profitably, not as charity, would become the most valuable businesses of the coming decades. Organizing its investing around three pillars - planetary health, human health, and economic health - Obvious made early bets on Beyond Meat, Planet Labs, and Recursion Pharmaceuticals years before any of them were obvious winners, and has playfully closed its five funds at mathematically meaningful numbers, from $123,456,789 to Euler's number, $271,828,182, to its 2026 fifth fund at $360,360,360. The firm has backed more than 100 companies since founding, reaching $1.6 billion in cumulative AUM.",
    leadership: [
      { name: "Ev Williams", role: "Co-Founder", profileSlug: "ev-williams" },
      { name: "James Joaquin", role: "Co-Founder & Managing Director", profileSlug: "james-joaquin" },
      { name: "Vishal Vasishth", role: "Co-Founder & Managing Director", profileSlug: "vishal-vasishth" }
    ],
    timeline: [
      { year: "2014", event: "Ev Williams, James Joaquin, and Vishal Vasishth found Obvious Ventures in San Francisco in December." },
      { year: "2015", event: "Invests in Planet Labs." },
      { year: "2019", event: "Beyond Meat completes its NASDAQ IPO, with Obvious holding a 9% stake." },
      { year: "2021", event: "Planet Labs completes its SPAC merger; Recursion Pharmaceuticals completes its NASDAQ IPO." },
      { year: "2026", event: "Closes Fund V at $360,360,360 in January." }
    ],
    holdings: [
      { name: "Planet Labs", ticker: "PL", historicalPrice: null, price: 24.75 },
       { name: "Recursion Pharmaceuticals", ticker: "RXRX", historicalPrice: null, price: 3.31 }

    ]
  },
  {
    rank: 57,
    name: "AirTree Ventures",
    sectors: ["Fintech", "Consumer", "Enterprise Software", "Climate"],
    signatureExit: "No confirmed public exit yet - AirTree's clearest proof points are current unicorns Canva, Airwallex, and Linktree, all still privately held among the firm's eight billion-dollar-plus portfolio companies",
    slug: "airtree-ventures",
    website: "https://www.airtree.vc",
    short: "AirTree Ventures",
    founded: 2014,
    hq: "Sydney, Australia",
    aum: "$1.2B+ (across all funds)",
    thesis: "AirTree Ventures was founded in 2014 in Sydney by former Microsoft Vice President Daniel Petre and Craig Blair, built on a specific conviction that Australian and New Zealand founders could build genuinely world-class, globally competitive technology companies rather than regional-only businesses. That belief translated into a willingness to invest unusually early, often pre-product and pre-revenue, backing Canva, Airwallex, and Linktree years before any of them were obvious winners. AirTree has since evolved from a traditional early-stage fund into a network-powered platform offering talent networks, executive forums, and peer communities to founders across fintech, consumer, enterprise software, healthtech, and climate tech, with a portfolio of more than 125 companies that have collectively created over 19,000 jobs, including eight companies valued above $1 billion.",
    leadership: [
      { name: "Daniel Petre", role: "Co-Founder & Partner", profileSlug: "daniel-petre" },
      { name: "Craig Blair", role: "Co-Founder & Partner", profileSlug: "craig-blair" }
    ],
    timeline: [
      { year: "2014", event: "Daniel Petre and Craig Blair found AirTree Ventures in Sydney." },
      { year: "2018", event: "Leads an early investment in Canva." },
      { year: "2026", event: "Portfolio surpasses 125 companies including eight valued above $1 billion." }
    ],
    holdings: []
  },
  {
    rank: 31,
    name: "Samsung Ventures",
    sectors: ["AI", "Deep Tech", "Cybersecurity", "Industrial Tech"],
    signatureExit: "SentinelOne's 2021 NYSE IPO under ticker S - one of 24 IPOs across Samsung Ventures' 25-year history, alongside acquisitions and stakes in Niantic and Swiggy",
    slug: "samsung-ventures",
    website: "https://www.samsungventure.co.kr",
    short: "Samsung Ventures",
    founded: 1999,
    hq: "Seoul, South Korea",
    aum: "$2.8B",
    thesis: "Samsung Venture Investment Corporation was established in 1999 as the corporate venture capital arm of Samsung Electronics, distinct from the company's separate, more recent Silicon Valley-focused early-stage arm, Samsung NEXT. The fund's core advantage is structural: it can offer portfolio companies not just capital but real access to Samsung's global manufacturing scale, technical resources, and distribution channels across semiconductors, telecommunications, and consumer electronics, positioning them for partnership opportunities most independent VCs can't replicate. Over more than 25 years, Samsung Ventures has invested in more than 200 companies across offices spanning South Korea, Silicon Valley, and Europe, focused on AI, robotics, cybersecurity, and future technologies, producing 10-plus unicorns and 24 IPOs including SentinelOne, and now manages approximately $2.8 billion.",
    leadership: [
      { name: "Samsung Venture Investment Corporation", role: "Corporate Venture Arm", profileSlug: "samsung-ventures-lead" }
    ],
    timeline: [
      { year: "1999", event: "Samsung Electronics establishes Samsung Venture Investment Corporation in Seoul." },
      { year: "2021", event: "SentinelOne completes its NYSE IPO." },
      { year: "2025", event: "AUM reaches approximately $2.8 billion." }
    ],
    holdings: [
      { name: "SentinelOne", ticker: "S", historicalPrice: null, price: 23.84 }
    ]
  },
  {
    rank: 21,
    name: "Gaorong Capital",
    sectors: ["Consumer", "Enterprise Software", "Healthcare"],
    signatureExit: "Pinduoduo's NASDAQ IPO and Kuaishou's Hong Kong IPO - two of the clearest public-market outcomes across Gaorong's decade-plus track record backing Chinese consumer internet companies",
    slug: "gaorong-capital",
    website: "https://www.gaorongvc.com",
    short: "Gaorong Capital",
    founded: 2014,
    hq: "Beijing, China",
    aum: "$4B",
    thesis: "Gaorong Capital, originally named Banyan Capital, was founded in January 2014 by three former IDG Capital investment professionals - Zhang Zhen, Gao Xiang, and Yue Bin - who left one of China's most established venture firms to build their own platform, part of a broader wave of spinout funds founded by veterans of China's earliest institutional VC generation. That shared IDG pedigree gave the trio genuine credibility and deal-sourcing advantages from day one, and Gaorong has built a strong track record concentrated in Technology, Media, and Telecommunications (TMT), consumer internet, enterprise software, and healthcare, backing companies including Pinduoduo and Kuaishou through to public listings. The firm now manages approximately $4 billion, reflecting the continued strength of China's venture ecosystem despite a more challenging fundraising environment in recent years.",
    leadership: [
      { name: "Zhang Zhen", role: "Co-Founder & Managing Partner", profileSlug: "gaorong-founders" },
      { name: "Gao Xiang", role: "Co-Founder & Managing Partner", profileSlug: "gao-xiang" },
      { name: "Yue Bin", role: "Co-Founder & Managing Partner", profileSlug: "yue-bin" }
    ],
    timeline: [
      { year: "2014", event: "Zhang Zhen, Gao Xiang, and Yue Bin found Banyan Capital (later Gaorong Capital) in Beijing in January." },
      { year: "2018", event: "Pinduoduo completes its NASDAQ IPO." },
      { year: "2020", event: "Kuaishou completes its Hong Kong IPO; AUM reaches approximately $4 billion." }
    ],
    holdings: [
      { name: "Pinduoduo", ticker: "PDD", historicalPrice: null, price: 84.17 }
    ]
  },
  {
    rank: 20,
    name: "Atlas Venture",
    sectors: ["Healthcare", "Deep Tech"],
    signatureExit: "Akero Therapeutics' $4.7 billion acquisition by Novo Nordisk in 2025, expanding its MASH treatment portfolio - one of Atlas's clearest recent wins, alongside Nimbus Therapeutics' $4 billion TYK2 licensing deal with Takeda",
    slug: "atlas-venture",
    website: "https://atlasventure.com",
    short: "Atlas Venture",
    founded: 1980,
    hq: "Cambridge, MA",
    aum: "$2.7B",
    thesis: "Atlas Venture was founded in 1980 in Amsterdam by Michiel de Haan as a subsidiary of NMB Bank (now ING Group), initially investing across both life sciences and information technology before a pivotal October 2014 decision to become a biotech-only firm, spinning its tech investing team into a new firm called Accomplice. That singular focus has made Atlas one of the most prolific and enduring biotech venture firms in the world, running a genuinely seed-led venture creation model where the firm actively builds companies from the earliest scientific insight rather than simply funding existing teams. Anchored by Partner Bruce Booth, whose LifeSciVC blog has become required reading across the industry, Atlas has invested in more than 150 life sciences startups since 1990 across immuno-oncology, gene and cell therapy, neuroscience, and anti-infectives, producing real outcomes including Akero Therapeutics' $4.7 billion acquisition by Novo Nordisk and Nimbus Therapeutics' $4 billion TYK2 deal with Takeda, with $2.7 billion under management.",
    leadership: [
      { name: "Bruce Booth", role: "Partner", profileSlug: "bruce-booth" },
      { name: "Jean-Francois Formela", role: "Partner", profileSlug: "jean-francois-formela" },
      { name: "Kevin Bitterman", role: "Partner", profileSlug: "kevin-bitterman" }
    ],
    timeline: [
      { year: "1980", event: "Michiel de Haan founds Atlas Venture in Amsterdam as a subsidiary of NMB Bank." },
      { year: "1993", event: "Begins dedicated biotech investing." },
      { year: "2014", event: "Shifts to a biotech-only model, spinning its tech team into a new firm, Accomplice, in October." },
      { year: "2022", event: "Nimbus Therapeutics sells its TYK2 inhibitor program to Takeda for a $4 billion upfront payment." },
      { year: "2024", event: "Raises its fourteenth fund at $450 million in December." },
      { year: "2025", event: "Akero Therapeutics is acquired by Novo Nordisk for $4.7 billion." }
    ],
    holdings: []
  },
  {
    rank: 42,
    name: "August Capital",
    sectors: ["Enterprise Software", "Cybersecurity", "Developer Tools"],
    signatureExit: "Splunk's NASDAQ IPO under ticker SPLK - an August Capital-era portfolio company; co-founder David Marquardt's pre-firm track record includes an even bigger story: Technology Venture Investors was the sole institutional investor in Microsoft, where Marquardt served on the board for 33 years",
    slug: "august-capital",
    website: "https://www.augustcap.com",
    short: "August Capital",
    founded: 1995,
    hq: "Menlo Park, CA",
    aum: "$2B",
    thesis: "August Capital was founded in 1995 by David Marquardt and John Johnston, both spinning out of Technology Venture Investors, the firm Marquardt had co-founded in 1980 that became the sole institutional investor in Microsoft - a bet that put Marquardt on Microsoft's board for 33 consecutive years. That extraordinary pattern-recognition carried directly into August Capital's focus on enterprise IT infrastructure, data center technology, systems management, security, storage, and cloud computing, closing a $100 million debut fund and backing companies through every phase of the entrepreneurial process from seed investments to public offerings. The firm's portfolio has included Splunk, Compaq, Adaptec, Zulily, and Grand Junction Networks (acquired by Cisco), and August Capital now manages approximately $2 billion.",
    leadership: [
      { name: "David Marquardt", role: "Co-Founder & General Partner", profileSlug: "david-marquardt" },
      { name: "David Hornik", role: "General Partner", profileSlug: "david-hornik" }
    ],
    timeline: [
      { year: "1980", event: "David Marquardt co-founds Technology Venture Investors, becoming Microsoft's sole institutional investor." },
      { year: "1995", event: "Marquardt and John Johnston found August Capital in Menlo Park, closing a $100 million debut fund." },
      { year: "2012", event: "Splunk completes its NASDAQ IPO." },
      { year: "2014", event: "Marquardt steps down from Microsoft's board after 33 years." }
    ],
    holdings: [
      { name: "Splunk", ticker: "SPLK", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 66,
    name: "Seraphim Space",
    sectors: ["Deep Tech", "AI", "Defense Tech"],
    signatureExit: "Seraphim Space Investment Trust's own IPO on the London Stock Exchange in 2021 - an unusually direct exit for a venture firm, since the growth-stage fund itself went public, alongside nine unicorns and six IPOs across the broader Seraphim portfolio",
    slug: "seraphim-space",
    website: "https://seraphim.vc",
    short: "Seraphim Space",
    founded: 2016,
    hq: "London, UK",
    aum: "$630M+",
    thesis: "Seraphim Space was founded in 2016 by Mark Boggett, James Bruegger, and Rob Desborough, launching the world's first venture capital fund dedicated exclusively to the commercial space technology sector at a moment satellite technology remained a niche, capital-intensive category most generalist VCs avoided. That singular focus produced a genuinely full-stack platform spanning early-stage venture funds, the Seraphim Space Accelerator (the largest VC-led program in the sector, helping alumni raise more than $830 million), and Seraphim Space Investment Trust, a London Stock Exchange-listed growth-stage vehicle that itself completed an IPO in 2021 - an unusually direct public-market validation for a venture platform. Seraphim has backed more than 145 SpaceTech startups across 33 countries including Spire Global, Arqit, and LeoLabs, with AUM exceeding $630 million and portfolio companies collectively raising more than $12 billion.",
    leadership: [
      { name: "Mark Boggett", role: "Co-Founder & CEO", profileSlug: "mark-boggett" },
      { name: "James Bruegger", role: "Co-Founder & Chief Investment Officer" },
      { name: "Rob Desborough", role: "Co-Founder & Partner" }
    ],
    timeline: [
      { year: "2016", event: "Mark Boggett, James Bruegger, and Rob Desborough found Seraphim in London, launching the world's first SpaceTech VC fund." },
      { year: "2021", event: "Seraphim Space Investment Trust completes its IPO on the London Stock Exchange." },
      { year: "2026", event: "Portfolio and alumni companies have collectively raised more than $12 billion, producing nine unicorns and six IPOs." }
    ],
    holdings: [
      { name: "Spire Global", ticker: "SPIR", historicalPrice: null, price: 13.94 },
       { name: "Arqit", ticker: "ARQQ", historicalPrice: null, price: 23.75 }

    ]
  },
  {
    rank: 56,
    name: "Anthemis Group",
    sectors: ["Fintech", "Insurtech"],
    signatureExit: "Anthemis Digital Acquisitions I Corp's 2021 market debut - an all-female-led fintech SPAC founder Amy Nauiokas led to market, alongside real early-portfolio outcomes at Zoopla and Betterment",
    slug: "anthemis-group",
    website: "https://www.anthemis.com",
    short: "Anthemis Group",
    founded: 2010,
    hq: "London, UK",
    aum: "$1.2B",
    thesis: "Anthemis Group grew out of Nauiokas Park, a predecessor firm Amy Nauiokas and Sean Park co-founded in 2008 after both left senior roles at Barclays, formally rebranding as Anthemis in the fall of 2010 to catalyze structural change in financial services. Built on three founding principles - authentic collaboration, virtuous cycle outcomes, and diversity and inclusivity - the firm positioned itself as a first-mover investment manager focused exclusively on reinventing financial services for the modern age, years before 'fintech' became a mainstream investment category. That early conviction backed Zoopla, Betterment, Currencycloud, and Seedcamp, and Anthemis has deployed 40% of its capital into companies backed by women or people of color, closing $700 million in new capital in 2021 (split between its ESG-focused SPAC and pre-seed through Series B embedded finance investing) to reach $1.2 billion in AUM.",
    leadership: [
      { name: "Amy Nauiokas", role: "Founder & CEO", profileSlug: "amy-nauiokas" },
      { name: "Sean Park", role: "Founder & CIO", profileSlug: "sean-park" }
    ],
    timeline: [
      { year: "2008", event: "Amy Nauiokas and Sean Park found Nauiokas Park, Anthemis's predecessor firm." },
      { year: "2010", event: "Nauiokas Park becomes Anthemis Group in the fall." },
      { year: "2021", event: "Raises $700 million, split between its SPAC and embedded finance investing; Anthemis Digital Acquisitions I Corp completes its market debut in November." },
      { year: "2023", event: "Undergoes restructuring amid challenging VC market conditions, reducing staff by roughly 28%." }
    ],
    holdings: []
  },
  {
    rank: 30,
    name: "Oxford Science Enterprises",
    sectors: ["Deep Tech", "Healthcare", "Industrial Tech"],
    signatureExit: "No confirmed exit yet - OSE operates a deliberately patient, evergreen model with no fixed fund life, and its 125-plus Oxford spinout companies remain privately held with a combined value exceeding £1.1 billion",
    slug: "oxford-science-enterprises",
    website: "https://www.oxfordscienceenterprises.com",
    short: "Oxford Science Enterprises",
    founded: 2015,
    hq: "Oxford, UK",
    aum: "$1.45B",
    thesis: "Oxford Science Enterprises was founded in 2015 by David Norwood, the founder of IP Group who had already built one major university-spinout investment platform, in partnership with the University of Oxford, giving OSE preferred access to deal flow from one of the world's leading research institutions. Unlike a traditional venture fund with fixed timelines, OSE operates as a genuinely evergreen holding company, taking long-term stakes in deep tech, biotech, and advanced materials spinouts with patience over quick exits - a structural choice that led to real leadership turnover in its early years before stabilizing in September 2023 with the appointment of Ed Bussey as CEO and Jack Edmondson as the newly created CIO. Bussey, a three-time successful founder, now leads OSE's mission to commercialize Oxford's world-leading research, having deployed more than £2 billion in total capital since launch across more than 125 spinout companies with a combined value exceeding £1.1 billion.",
    leadership: [
      { name: "Ed Bussey", role: "Chief Executive Officer", profileSlug: "ed-bussey" },
      { name: "David Norwood", role: "Co-Founder & Chairman", profileSlug: "david-norwood" },
      { name: "Jack Edmondson", role: "Chief Investment Officer", profileSlug: "jack-edmondson" }
    ],
    timeline: [
      { year: "2015", event: "David Norwood and the University of Oxford found Oxford Sciences Innovation (later renamed Oxford Science Enterprises)." },
      { year: "2019", event: "Charles Conn is hired as CEO." },
      { year: "2020", event: "Alexis Dormandy becomes CEO." },
      { year: "2023", event: "Ed Bussey is appointed CEO and Jack Edmondson CIO in September, stabilizing leadership." }
    ],
    holdings: []
  },
  {
    rank: 78,
    name: "Impact X Capital",
    sectors: ["Fintech", "Consumer", "Healthcare"],
    signatureExit: "No confirmed exit yet - as a young fund with first deals beginning in 2019-2020, Impact X's portfolio of 47 investments remains largely private, with top current valuations reaching $2 billion",
    slug: "impact-x-capital",
    website: "https://impactxcapital.com",
    short: "Impact X Capital",
    founded: 2018,
    hq: "London, UK",
    aum: "£100M (Fund I)",
    thesis: "Impact X Capital was founded in London in 2018 by Eric D. Collins and Paula Groves, alongside a founding group of Black European and US entrepreneurs, institutional investors, and public figures including Ursula Burns and Lenny Henry, built around a specific market inefficiency: less than 1% of venture funding reaches Black entrepreneurs, and less than 4% reaches women-led teams. Rather than treating that gap as a purely social problem, Impact X frames it as a genuine investment opportunity - a double-bottom-line fund pursuing both financial returns and structural change, backing underrepresented founders across fintech, consumer, and healthtech in the UK, Europe, and the US. The firm has made 47 investments with 8 exits to date, launched an Impact X-Venture Studio with Microsoft to accelerate underrepresented-led startups, and closed a £100 million debut fund with plans for a second vehicle backed by Bank of America and the Visa Foundation.",
    leadership: [
      { name: "Eric D. Collins", role: "Co-Founder & CEO", profileSlug: "eric-collins" },
      { name: "Paula Groves", role: "Co-Founder" }
    ],
    timeline: [
      { year: "2018", event: "Eric D. Collins and Paula Groves found Impact X Capital in London." },
      { year: "2019", event: "Begins first investments, backed by founding members Ursula Burns and Lenny Henry." },
      { year: "2024", event: "Launches Impact X-Venture Studio with Microsoft; announces a £100 million target for Fund II, IX Global I." },
      { year: "2025", event: "Closes the final round of its latest fund in March, backed by Illumen Capital and Basecamp Fund." }
    ],
    holdings: []
  },
  {
    rank: 35,
    name: "Infinity Group",
    sectors: ["Cybersecurity", "Enterprise Software", "Healthcare"],
    signatureExit: "Shellcase's acquisition by Tessera and Nanomotion's acquisition by Johnson Electric - two of 75 total exits across Infinity's three-decade history bridging Israeli innovation and Chinese markets",
    slug: "infinity-group",
    website: "https://www.infinity-equity.com",
    short: "Infinity Group",
    founded: 1993,
    hq: "Tel Aviv, Israel",
    aum: "$2B",
    thesis: "Infinity Group was founded in 1993 by Amir Gal-Or, a former Israeli Air Force pilot and serial entrepreneur, and grew into one of the earliest and most consequential bridges between Israeli deep tech and Chinese capital markets. Gal-Or pioneered that connection directly in 2004, establishing CSVC as the first onshore limited partnership venture capital fund in China, a genuinely first-mover position that predated nearly all Western institutional interest in the country by more than a decade. That two-decade head start, backed by China Development Bank and Clal Industries, has produced real strategic exits including Shellcase (sold to Tessera) and Nanomotion (sold to Johnson Electric), and Infinity has grown into a comprehensive technology investment platform managing $2 billion across 250-plus investments and 75 total exits, with offices spanning Tel Aviv, Beijing, and Shanghai.",
    leadership: [
      { name: "Amir Gal-Or", role: "Co-Founder & Managing Partner", profileSlug: "amir-gal-or" }
    ],
    timeline: [
      { year: "1993", event: "Amir Gal-Or founds Infinity Group in Tel Aviv." },
      { year: "2004", event: "Establishes CSVC, the first onshore limited partnership venture fund in China." },
      { year: "2006", event: "Launches a $300 million dedicated China fund." },
      { year: "2017", event: "Gal-Or is awarded the Chinese Government's Friendship Award." }
    ],
    holdings: []
  },
  {
    rank: 65,
    name: "Quest Ventures",
    sectors: ["Marketplaces", "Fintech", "Consumer"],
    signatureExit: "No confirmed public exit yet - Carousell, one of Quest's earliest and largest bets, has explored a SPAC listing but remains private, alongside continued growth at ShopBack and 99.co",
    slug: "quest-ventures",
    website: "https://www.questventures.com",
    short: "Quest Ventures",
    founded: 2011,
    hq: "Singapore",
    aum: "Not publicly disclosed (multiple $50-100M funds raised)",
    thesis: "Quest Ventures was founded in 2011 by James Tan and Wang Yunming, both co-founders of the NASDAQ-listed group-buying platform 55tuan, who launched a venture fund in Beijing specifically to back digital commerce and marketplace platforms across China and Southeast Asia. That founder-operator background shaped Quest's positioning as the 'first institutional investor' in many regional marketplaces, backing Carousell at Series A years before it became a Southeast Asian unicorn, alongside ShopBack and 99.co. The firm has since relocated its primary base to Singapore, becoming the largest anchor tenant at JTC Launchpad, and continues to focus on Seed and Series A investments in digital commerce, fintech, and consumer platforms across Singapore, Malaysia, Vietnam, and Indonesia.",
    leadership: [
      { name: "James Tan", role: "Co-Founder & Managing Partner", profileSlug: "james-tan" },
      { name: "Wang Yunming", role: "Venture Partner, Beijing", profileSlug: "wang-yunming" }
    ],
    timeline: [
      { year: "2011", event: "James Tan and Wang Yunming found Quest Ventures (originally QuestVC) in Beijing." },
      { year: "2013", event: "Leads Carousell's Series A round." },
      { year: "2015", event: "Invests in ShopBack." },
      { year: "2022", event: "Carousell explores a SPAC merger, remaining private." }
    ],
    holdings: []
  },
  {
    rank: 22,
    name: "Northern Light Venture Capital",
    sectors: ["Enterprise Software", "Healthcare", "Consumer", "AI"],
    signatureExit: "Meituan's 2018 Hong Kong IPO at a roughly $63 billion valuation - an early Northern Light bet, alongside co-founders Feng Deng and Yan Ke's own prior exit: NetScreen Technologies' $4.2 billion acquisition by Juniper Networks",
    slug: "northern-light-venture-capital",
    website: "https://www.nlvc.com",
    short: "Northern Light Venture Capital",
    founded: 2005,
    hq: "Menlo Park, CA",
    aum: "$4.5B",
    thesis: "Northern Light Venture Capital was founded on January 1, 2005, by Feng Deng, Yan Ke, and Jeffrey Lee, two of whom had just completed one of the most consequential Chinese-founder exits in Silicon Valley history - NetScreen Technologies, an enterprise security company they co-founded that IPO'd on NASDAQ in 2001 before Juniper Networks acquired it for $4.2 billion in 2004. That operating credibility and cross-Pacific network shaped Northern Light's genuinely dual-market model, dual-headquartered in Menlo Park and Beijing/Shanghai, backing companies that leverage China's industrial and human resources to build lasting global businesses across TMT, clean technology, healthcare, and consumer sectors. The firm's roughly 70% Series A, 20% Series B allocation has produced 13 unicorns, 15 IPOs, and 23 acquisitions across more than 300 portfolio companies, including Meituan's 2018 Hong Kong IPO at a roughly $63 billion valuation, and NLVC now manages more than $4.5 billion.",
    leadership: [
      { name: "Feng Deng", role: "Co-Founder & Managing Partner", profileSlug: "feng-deng" },
      { name: "Yan Ke", role: "Co-Founder & Managing Partner", profileSlug: "yan-ke" },
      { name: "Jeffrey Lee", role: "Co-Founder & Partner", profileSlug: "jeffrey-lee" }
    ],
    timeline: [
      { year: "2005", event: "Feng Deng, Yan Ke, and Jeffrey Lee found Northern Light Venture Capital on January 1." },
      { year: "2013", event: "Invests in Aerohive Networks, which IPOs in 2015." },
      { year: "2018", event: "Meituan completes its Hong Kong IPO at a roughly $63 billion valuation." },
      { year: "2024", event: "Portfolio company Taimei Technology IPOs on HKEX at a $937 million market cap." }
    ],
    holdings: [
      { name: "Meituan", ticker: "3690.HK", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 13,
    name: "Source Code Capital",
    sectors: ["AI", "Enterprise Software", "Consumer", "Healthcare"],
    signatureExit: "No single named exit - Source Code's earliest and most consequential bet, ByteDance, remains private and globally dominant, while portfolio companies Meituan, KE Holdings, and Li Auto have all completed IPOs backed by multiple co-investors",
    slug: "source-code-capital",
    website: "https://sourcecodecap.com",
    short: "Source Code Capital",
    founded: 2014,
    hq: "Beijing, China",
    aum: "$7B",
    thesis: "Source Code Capital was founded in the spring of 2014 by Yi Cao, a Tsinghua computer science graduate and former Sequoia Capital China Vice President, who made an extraordinarily early bet on what became one of the most consequential Chinese technology companies of the era: ByteDance, the parent company of TikTok. Cao built the firm around a specific 'Big 3' thesis - Internet+, AI+, and Global+ - and a genuinely founder-first support system including the Code Class entrepreneur community and Code Brain knowledge-sharing sessions, providing portfolio companies with hands-on support in human capital, public relations, and financial advisory beyond capital alone. That approach has backed more than 300 companies including ByteDance, Meituan, KE Holdings, Li Auto, and RELX Technology, and Source Code now manages approximately $7 billion across dual-currency funds, with Cao repeatedly named to the Forbes Midas List.",
    leadership: [
      { name: "Yi Cao", role: "Founder & Managing Partner", profileSlug: "yi-cao" }
    ],
    timeline: [
      { year: "2014", event: "Yi Cao founds Source Code Capital in Beijing in the spring, making an early bet on ByteDance." },
      { year: "2016", event: "Launches Code Brain, a monthly entrepreneur knowledge-sharing gathering." },
      { year: "2018", event: "Meituan completes its Hong Kong IPO." },
      { year: "2020", event: "Raises a $1 billion fund." },
      { year: "2026", event: "AUM reaches approximately $7 billion across more than 300 portfolio companies." }
    ],
    holdings: [
      { name: "Meituan", ticker: "3690.HK", historicalPrice: null, price: null },
      { name: "Li Auto", ticker: "LI", historicalPrice: null, price: 12.27 }
    ]
  },
  {
    rank: 12,
    name: "Paradigm",
    sectors: ["Crypto", "AI", "Deep Tech", "Fintech"],
    signatureExit: "No traditional Paradigm-portfolio IPO exit - the firm's clearest proof points are Fund III bets Zipline (drone delivery, valued at $7.6 billion) and True Anomaly (space defense, valued at $2.2 billion), both still private and rapidly appreciating",
    slug: "paradigm",
    website: "https://paradigm.xyz",
    short: "Paradigm",
    founded: 2018,
    hq: "San Francisco, CA",
    aum: "$12.7B",
    thesis: "Paradigm was founded in June 2018 by Matt Huang, a former Sequoia Capital partner, and Fred Ehrsam, co-founder of Coinbase, at the bottom of a brutal crypto bear market when cryptocurrency prices had collapsed and most institutional capital had fled the space. That contrarian timing, backed by an initial $750 million from institutional investors including Harvard, Yale, and Stanford in an open-ended fund with no deadline to return capital, established Paradigm's identity as a genuinely research-driven, engineering-heavy investment firm - the team is, in its own words, 'as likely to ship code as to cut checks.' Under Matt Huang and Managing Partner Alana Palmedo, the firm has expanded well beyond its original crypto mandate into AI and robotics, closing a $1.2 billion Fund III in 2026 to back frontier bets including Zipline and True Anomaly, on top of an earlier $2.5 billion flagship crypto fund (2021, then the largest dedicated crypto fund ever raised) and an $850 million early-stage blockchain fund (2024). Paradigm now manages more than $12.7 billion in assets under management.",
    leadership: [
      { name: "Matt Huang", role: "Co-Founder & Managing Partner", profileSlug: "matt-huang" },
      { name: "Fred Ehrsam", role: "Co-Founder & General Partner", profileSlug: "fred-ehrsam" },
      { name: "Alana Palmedo", role: "Managing Partner", profileSlug: "alana-palmedo" }
    ],
    timeline: [
      { year: "2018", event: "Matt Huang and Fred Ehrsam found Paradigm in San Francisco in June, amid a crypto market downturn." },
      { year: "2018", event: "Raises $750 million from institutional investors including Harvard, Yale, and Stanford in October." },
      { year: "2021", event: "Closes a $2.5 billion flagship crypto fund in November, then the largest dedicated crypto fund raised." },
      { year: "2023", event: "Fred Ehrsam steps back from the managing-partner role in October, remaining a co-founder and general partner." },
      { year: "2024", event: "Raises an $850 million fund for early-stage blockchain startups." },
      { year: "2026", event: "Closes a $1.2 billion Fund III in July, formally expanding the firm's mandate into AI and robotics." }
    ],
    holdings: [
      { name: "Coinbase", ticker: "COIN", historicalPrice: null, price: 153.9 }
    ]
  },
  {
    rank: 76,
    name: "Hustle Fund",
    sectors: ["Fintech", "Healthcare", "Crypto", "Enterprise Software"],
    signatureExit: "No confirmed exit yet - Hustle Fund's portfolio, including HoneyBook, Nova Credit, and Berbix, remains largely private, though early bets on The Pill Club and Webflow highlight the firm's pattern-recognition at the earliest stages",
    slug: "hustle-fund",
    website: "https://hustlefund.vc",
    short: "Hustle Fund",
    founded: 2017,
    hq: "San Francisco, CA",
    aum: "$125M+ (across multiple funds)",
    thesis: "Hustle Fund was founded in 2017 by Elizabeth Yin, Eric Bahn, and Shiyan Koh, three longtime friends who'd each spent years around early-stage investing - Yin at 500 Startups, Bahn as a founder and scout - before building a fund specifically for founders who wished they'd had more help at the very beginning, often pre-revenue or even pre-product. The firm invests at unusually high volume, roughly 250 companies per fund, judging founders on execution speed and 'hustle' rather than pedigree, and runs Angel Squad, a program letting individual investors write checks as small as $1,000 into deals from Hustle Fund's own pipeline. That model has backed more than 400 startups, over 30% led by women, across fintech, digital health, web3, and B2B software, with more than $125 million raised across multiple funds since founding.",
    leadership: [
      { name: "Elizabeth Yin", role: "Co-Founder & General Partner", profileSlug: "elizabeth-yin" },
      { name: "Eric Bahn", role: "Co-Founder & General Partner", profileSlug: "eric-bahn" },
      { name: "Shiyan Koh", role: "Co-Founder & General Partner" }
    ],
    timeline: [
      { year: "2017", event: "Elizabeth Yin, Eric Bahn, and Shiyan Koh found Hustle Fund in San Francisco." },
      { year: "2018", event: "Closes an $11.5 million debut fund in September." },
      { year: "2020", event: "Closes a $30 million second fund." },
      { year: "2020", event: "Launches Angel Squad, democratizing access to startup investing." }
    ],
    holdings: []
  },
  {
    rank: 21,
    name: "Addition",
    sectors: ["Fintech", "Enterprise Software", "Consumer", "AI"],
    signatureExit: "dLocal's 2021 NASDAQ IPO under ticker DLO at a $6 billion valuation - Addition's first major public exit, backing the Uruguayan payments company as an early investor",
    slug: "addition",
    website: "https://addition.com",
    short: "Addition",
    founded: 2020,
    hq: "New York, NY",
    aum: "$7B+",
    thesis: "Addition was founded in 2020 by Lee Fixel, who spent 13 years at Tiger Global Management building its private equity business and global internet portfolio with early bets on Spotify, Uber, and Flipkart before departing in 2019. Fixel structured Addition around a deliberately lean, solo-decision-maker model - he remains the firm's sole publicly known general partner - allowing for fast, data-driven, founder-centric decisions on market-defining software companies across fintech, enterprise SaaS, deep tech, and crypto. That approach produced dLocal's $6 billion IPO in 2021, Addition's first major exit, and Fixel has since backed Snyk, Chainalysis, Hugging Face, Stripe, and Applied Intuition, raising five consecutive funds each exceeding $1.3 billion to reach more than $7 billion in total assets under management.",
    leadership: [
      { name: "Lee Fixel", role: "Founder", profileSlug: "lee-fixel" }
    ],
    timeline: [
      { year: "2019", event: "Lee Fixel departs Tiger Global Management after 13 years." },
      { year: "2020", event: "Founds Addition, raising $1.3 billion for its debut fund." },
      { year: "2021", event: "dLocal completes its NASDAQ IPO at a $6 billion valuation." },
      { year: "2022", event: "Closes Addition Four at $1.5 billion." },
      { year: "2026", event: "Total AUM surpasses $7 billion across five funds." }
    ],
    holdings: [
      { name: "dLocal", ticker: "DLO", historicalPrice: null, price: 14.76 }
    ]
  },
  {
    rank: 55,
    name: "Almaz Capital",
    sectors: ["AI", "Deep Tech", "Cybersecurity", "Enterprise Software"],
    signatureExit: "Yandex's NASDAQ IPO and Xometry's NASDAQ IPO - two of Almaz's clearest public-market outcomes, alongside QIK's acquisition by Skype, Sensity Systems' acquisition by Verizon, and Acumatica's sale to EQT",
    slug: "almaz-capital",
    website: "https://almazcapital.com",
    short: "Almaz Capital",
    founded: 2008,
    hq: "Portola Valley, CA",
    aum: "$300M+ (across three funds)",
    thesis: "Almaz Capital was founded in 2008 by Alexander Galitsky, a former Soviet defense scientist who built and sold five technology companies - including ELVIS+, which partnered with Sun Microsystems on early Wi-Fi hardware - before turning to venture capital. Backed from inception by Cisco, EBRD, and IFC, the firm was built specifically to bridge Silicon Valley and Central/Eastern European deep tech, targeting AI/ML, IoT, cybersecurity, and enterprise software startups capable of scaling globally from origins in the CIS and Eastern Europe. That bridge-building produced real public and strategic outcomes including Yandex's NASDAQ IPO, Xometry's NASDAQ IPO, QIK's acquisition by Skype, Sensity Systems' acquisition by Verizon, and Acumatica's sale to EQT, with Almaz investing more than $300 million across three funds and 50-plus companies.",
    leadership: [
      { name: "Alexander Galitsky", role: "Co-Founder & Managing Partner", profileSlug: "alexander-galitsky" }
    ],
    timeline: [
      { year: "2004", event: "Alexander Galitsky helps establish CSVC, an early China-focused venture vehicle, before founding Almaz." },
      { year: "2008", event: "Founds Almaz Capital, backed by Cisco, EBRD, and IFC." },
      { year: "2021", event: "Closes Fund III at $191 million." },
      { year: "2014", event: "Galitsky's life story becomes the basis for the film 'Startup.'" }
    ],
    holdings: []
  },
  {
    rank: 32,
    name: "Blumberg Capital",
    sectors: ["AI", "Fintech", "Cybersecurity", "Enterprise Software"],
    signatureExit: "DoubleVerify's NYSE IPO under ticker DV in April 2021 at a valuation exceeding $3 billion - Blumberg's early 2008 investment delivered a reported 98x return, one of five unicorns and seven IPOs across the firm's portfolio",
    slug: "blumberg-capital",
    website: "https://blumbergcapital.com",
    short: "Blumberg Capital",
    founded: 1991,
    hq: "San Francisco, CA",
    aum: "$750M+ (across five funds)",
    thesis: "Blumberg Capital was founded in 1991 by David J. Blumberg, who brought a rare combination of operating experience - as one of Check Point Software's first four senior executives - and international investing credentials from T. Rowe Price, Apax Partners, and the Bronfman Family Office. That dual foundation shaped a genuinely hands-on early-stage investing model, leading Seed and Series A rounds in AI, big data, fintech, insurtech, and cybersecurity companies with $500,000 to $5 million checks, and serving as active board members from inception through exit. The firm has backed more than 160 active companies producing five unicorns and seven IPOs, including DoubleVerify's 2021 NYSE listing (a reported 98x return on Blumberg's 2008 investment), Nutanix, and Braze, and now manages more than $750 million with offices spanning San Francisco, Tel Aviv, Miami, and New York.",
    leadership: [
      { name: "David J. Blumberg", role: "Founder & Managing Partner", profileSlug: "david-blumberg" }
    ],
    timeline: [
      { year: "1991", event: "David Blumberg founds Blumberg Capital in San Francisco." },
      { year: "2008", event: "Leads an early investment in DoubleVerify." },
      { year: "2021", event: "DoubleVerify completes its NYSE IPO in April; closes a $225 million Fund V, oversubscribed." },
      { year: "2022", event: "Opens an Opportunity Fund for follow-on investment." }
    ],
    holdings: [
      { name: "DoubleVerify", ticker: "DV", historicalPrice: null, price: 13.3 }
    ]
  },
  {
    rank: 45,
    name: "Venrock",
    sectors: ["Healthcare", "Enterprise Software", "Consumer", "Deep Tech"],
    signatureExit: "Apple's December 1980 NASDAQ IPO - Venrock invested $288,000 for roughly 10% equity in 1978, one of more than 112 IPOs across the firm's history, alongside Intel's 1971 IPO and Gilead Sciences",
    slug: "venrock",
    website: "https://www.venrock.com",
    short: "Venrock",
    founded: 1969,
    hq: "Palo Alto, CA",
    aum: "$3B",
    thesis: "Venrock traces its roots to Laurance Rockefeller, who began seeding early-stage businesses with his family's fortune in the 1930s, formalizing that activity into Venrock Associates in 1969 as one of the very first professional venture capital operations in America. That six-decade head start produced an extraordinary early portfolio - Intel in 1969, Apple in 1978 for $288,000 and roughly 10% equity - and the firm has since built one of the deepest healthcare and technology investing benches in the industry, anchored by partners like Bryan Roberts. Venrock opened to outside investors in 1995 and restructured its partnership model starting in 2007 to equalize carry across all partners regardless of who led a given deal, a structural choice reinforcing genuine collective incentive. The firm has made more than 800 investments across its history, producing 112-plus IPOs, and now manages roughly $3 billion.",
    leadership: [
      { name: "Bryan Roberts", role: "Partner", profileSlug: "bryan-roberts" }
    ],
    timeline: [
      { year: "1969", event: "Laurance Rockefeller and his siblings formalize Venrock Associates in August." },
      { year: "1969", event: "Makes an early investment in Intel Corporation." },
      { year: "1978", event: "Invests $288,000 in Apple Computer for roughly 10% equity." },
      { year: "1980", event: "Apple completes its NASDAQ IPO in December." },
      { year: "1995", event: "Opens to outside investors for the first time." }
    ],
    holdings: []
  },
  {
    rank: 34,
    name: "Abingworth",
    sectors: ["Healthcare", "Deep Tech"],
    signatureExit: "Clovis Oncology's NASDAQ IPO under ticker CLVS - one of 73-plus IPOs across Abingworth's 50-year history, alongside Algeta's acquisition by Bayer in 2014 and early pre-biotech-pivot stakes in Apple and Silicon Graphics",
    slug: "abingworth",
    website: "https://www.abingworth.com",
    short: "Abingworth",
    founded: 1973,
    hq: "London, UK",
    aum: "$2B+ (owned by The Carlyle Group since 2022)",
    thesis: "Abingworth was founded in 1973 by London stockbrokers Peter Dicks and Hon. Anthony Montagu, initially making broader technology investments - including early stakes in Apple and Silicon Graphics - before Dicks led the firm's pivotal shift to dedicated biotechnology investing with a purpose-built biotech arm established in 1987. That five-decade focus on translating cutting-edge science into medicine, spanning seed through clinical co-development across London, Boston, and the San Francisco Bay Area, produced more than 180 portfolio companies, 73-plus completed IPOs, and 46 acquisitions, including Clovis Oncology and Algeta's sale to Bayer. Carlyle acquired Abingworth in August 2022 to bolster its own healthcare investing franchise, and the firm now operates across the full risk-return spectrum from venture capital to buyouts with more than $2 billion under management.",
    leadership: [
      { name: "Peter Dicks", role: "Co-Founder & Senior Partner", profileSlug: "peter-dicks" },
      { name: "Tim Haines", role: "Chairman and Managing Partner", profileSlug: "tim-haines" }
    ],
    timeline: [
      { year: "1973", event: "Peter Dicks and Hon. Anthony Montagu found Abingworth in London." },
      { year: "1987", event: "Establishes a dedicated biotech investment arm." },
      { year: "2014", event: "Algeta is acquired by Bayer." },
      { year: "2022", event: "The Carlyle Group acquires Abingworth in August." }
    ],
    holdings: []
  },
  {
    rank: 46,
    name: "Acton Capital",
    sectors: ["Fintech", "Marketplaces", "Mobility", "Consumer"],
    signatureExit: "Alando's acquisition by eBay within 100 days of Acton's first investment in 1999, for $43 million - the deal that sparked a wave of German startups and helped establish Berlin as a European tech hub, alongside Zooplus's 2008 IPO and AbeBooks' sale to Amazon",
    slug: "acton-capital",
    website: "https://www.actoncapital.com",
    short: "Acton Capital",
    founded: 1999,
    hq: "Munich, Germany",
    aum: "€400M+ (across six fund generations)",
    thesis: "Acton Capital was founded in February 1999 by Christoph Braun, Paul-Bernhard Kallen, Jan-Gisbert Schultze, and Frank Seehaus, becoming one of the first venture capital funds in Europe just as the continent's digital economy was beginning. Its very first investment became legendary: signing a deal with three young founders - the Samwer brothers - behind Alando, an online auction platform eBay acquired within 100 days for $43 million, creating eBay Europe's core and sparking an entire generation of German startups. That founding conviction shaped Acton's continued focus on tech-enabled, unit-economics-driven business models across fintech, SaaS, marketplaces, and mobility, backing more than 100 startups to market leadership including Mambu, Zooplus, AbeBooks, and Clio, with more than €400 million invested across six fund generations since founding.",
    leadership: [
      { name: "Christoph Braun", role: "Managing Partner", profileSlug: "christoph-braun" },
      { name: "Paul-Bernhard Kallen", role: "Managing Partner", profileSlug: "paul-bernhard-kallen" }
    ],
    timeline: [
      { year: "1999", event: "Christoph Braun, Paul-Bernhard Kallen, Jan-Gisbert Schultze, and Frank Seehaus found Acton Capital, signing Alando as their first investment in February." },
      { year: "1999", event: "Alando is acquired by eBay within 100 days for $43 million." },
      { year: "2008", event: "Zooplus completes its IPO; AbeBooks is acquired by Amazon." },
      { year: "2019", event: "Closes Acton V at $215 million in November." }
    ],
    holdings: []
  },
  {
    rank: 47,
    name: "EQT Ventures",
    sectors: ["Enterprise Software", "Consumer", "Marketplaces", "AI"],
    signatureExit: "Wolt's $8.1 billion acquisition by DoorDash in November 2021 - Sifted reported this delivered a roughly 200x multiple on EQT Ventures' original 2016 investment, one of the largest returns in European venture history",
    slug: "eqt-ventures",
    website: "https://eqtventures.com",
    short: "EQT Ventures",
    founded: 2016,
    hq: "Stockholm, Sweden",
    aum: "€2.3B+ (across three funds)",
    thesis: "EQT Ventures launched in 2016 as the dedicated venture capital arm of EQT AB, the Swedish investment manager founded in 1994, bringing serial entrepreneur Hjalmar Winbladh alongside Kees Koolen and Lars Jörnow to build a multi-stage, sector-agnostic fund at a moment Europe's venture ecosystem remained a fraction of Silicon Valley's scale. The firm built a genuinely distinctive sourcing edge through Motherbrain, a proprietary AI platform used to identify and evaluate deals, combined with operational experience from partners with backgrounds at Booking.com, Wrapp, and King. That approach produced EQT Ventures' defining outcome: Wolt, backed from a 2016 seed investment through DoorDash's $8.1 billion acquisition in 2021, a reported 200x return. EQT Ventures has raised three funds totaling more than €2.3 billion, also backing Small Giant Games, Peakon (acquired by Workday), and Sonantic (acquired by Spotify).",
    leadership: [
      { name: "Hjalmar Winbladh", role: "Founding Partner (2016-2020)", profileSlug: "hjalmar-winbladh" }
    ],
    timeline: [
      { year: "2016", event: "EQT Ventures launches in May with a €566 million debut fund." },
      { year: "2016", event: "Leads an early investment in Wolt." },
      { year: "2019", event: "Closes EQT Ventures II at €660 million in November." },
      { year: "2020", event: "Hjalmar Winbladh departs the firm in July." },
      { year: "2021", event: "Wolt is acquired by DoorDash for $8.1 billion." },
      { year: "2022", event: "Closes EQT Ventures III at €1.1 billion in November." }
    ],
    holdings: []
  },
  {
    rank: 33,
    name: "Threshold Ventures",
    sectors: ["Enterprise Software", "Fintech", "Healthcare", "Developer Tools", "Climate", "AI"],
    signatureExit: "Livongo's $18.5 billion acquisition by Teladoc Health in October 2020 - Threshold (then DFJ) backed Livongo in its earlier stages, making this one of the firm's largest realized exits",
    slug: "threshold-ventures",
    website: "https://threshold.vc",
    short: "Threshold Ventures",
    founded: 2019,
    hq: "Portola Valley, CA",
    aum: "$450M (Fund IV + Select Fund, closed May 2022)",
    thesis: "Threshold Ventures emerged in 2019 when longtime Draper Fisher Jurvetson partners Josh Stein and Emily Melton spun the firm out under a new name, reflecting a specific thesis: back founders at 'threshold moments,' the inflection points when new technologies are poised to take off. That DFJ pedigree carried real institutional memory - Stein led Box's first institutional round and sat on its board through IPO, while Melton built a track record in digital health and consumer mobile, including Redfin and Livongo - and Threshold has continued that focus on enterprise software, developer tools, fintech, and healthcare with a deliberately small, founder-centric team. The firm's philosophy that 'time is our most powerful ingredient' emphasizes hands-on mentorship over capital alone, and Threshold's portfolio spans Box, Redfin, Twilio, Doximity, and Remitly, with $450 million closed across its Fund IV and Select Fund in 2022.",
    leadership: [
      { name: "Josh Stein", role: "Co-Founder & Managing Partner", profileSlug: "josh-stein" },
      { name: "Emily Melton", role: "Co-Founder & Managing Partner", profileSlug: "emily-melton" },
      { name: "Heidi Roizen", role: "Partner", profileSlug: "heidi-roizen" }
    ],
    timeline: [
      { year: "2004", event: "Josh Stein joins DFJ; Emily Melton joins in 2012 after a stint at Mayfield Fund." },
      { year: "2019", event: "Stein and Melton rebrand DFJ as Threshold Ventures in July." },
      { year: "2020", event: "Livongo is acquired by Teladoc Health for $18.5 billion." },
      { year: "2022", event: "Closes Fund IV and an associated Select Fund at $450 million combined in May." },
      { year: "2022", event: "Emily Melton is elected Chair of the NVCA board of directors." }
    ],
    holdings: [
      { name: "Box", ticker: "BOX", historicalPrice: null, price: 33.64 },
      { name: "Redfin", ticker: "RDFN", historicalPrice: null, price: null },
       { name: "Twilio", ticker: "TWLO", historicalPrice: null, price: 249.42 },
      { name: "Doximity", ticker: "DOCS", historicalPrice: null, price: 26.59 }
  
    ]
  },
  {
    rank: 1,
    name: "Andreessen Horowitz",
    sectors: ["AI", "Crypto", "Fintech", "Consumer", "Enterprise Software", "Developer Tools", "Cybersecurity"],
    signatureExit: "Coinbase's 2021 direct listing on Nasdaq - one of the largest crypto IPOs ever",
    slug: "a16z",
    seoPage: "firms/a16z/",
    website: "https://a16z.com",
    short: "a16z",
    founded: 2009,
    hq: "Menlo Park, CA",
    aum: "$90B+",
    thesis: "Founded in 2009 by Marc Andreessen, the co-creator of the Netscape browser, and Ben Horowitz, a former enterprise software executive, a16z set out to build a different kind of VC firm - one staffed with in-house recruiters, marketers, and engineers to support founders directly, not just write checks. The firm's stage-agnostic, software-eats-the-world thesis has since carried it into crypto, biotech, and AI, backing companies from seed rounds through late-stage growth across every category it touches.",
    leadership: [
      { name: "Marc Andreessen", role: "Co-Founder & General Partner", profileSlug: "marc-andreessen" },
      { name: "Ben Horowitz", role: "Co-Founder & General Partner", profileSlug: "ben-horowitz" },
      { name: "Chris Dixon", role: "General Partner, a16z crypto", profileSlug: "chris-dixon" },
      { name: "Martin Casado", role: "General Partner, Infrastructure & Enterprise", profileSlug: "martin-casado" },
      { name: "Andrew Chen", role: "General Partner, Consumer & Apps", profileSlug: "andrew-chen" },
      { name: "Scott Kupor", role: "Managing Partner", profileSlug: "scott-kupor" }
    ],
    timeline: [
      { year: "2009", event: "Marc Andreessen and Ben Horowitz launch the firm with a $300 million debut fund." },
      { year: "2011", event: "Becomes the first VC firm to hold stakes in Facebook, Twitter, Groupon, and Zynga at the same time." },
      { year: "2013", event: "Backs Coinbase and Lyft in their early funding rounds, years before either went public." },
      { year: "2018", event: "Its early investment in GitHub returns over $1 billion when Microsoft acquires the company for $7.5 billion." },
      { year: "2021", event: "Coinbase and Roblox both go public in the same year - two of the firm's largest exits to date." },
      { year: "2022", event: "Raises a $4.5 billion fund dedicated to crypto, one of the largest ever raised for the category." }
    ],
    holdings: [
   { name: "Airbnb", ticker: "ABNB", investedYear: 2011, historicalPrice: null, price: 147.00 },
      { name: "Coinbase", ticker: "COIN", investedYear: 2013, historicalPrice: 257.21, price: 161.00 },
      { name: "Roblox", ticker: "RBLX", investedYear: 2020, historicalPrice: null, price: 51.68 },
      { name: "Lyft", ticker: "LYFT", investedYear: 2013, historicalPrice: null, price: 15.67 },
      { name: "Pinterest", ticker: "PINS", investedYear: 2011, historicalPrice: null, price: 23.20 }
    ]
  },
  {
    rank: 2,
    name: "Sequoia Capital",
    sectors: ["Enterprise Software", "Consumer", "AI", "Semiconductors"],
    signatureExit: "Nvidia - an early investor that rode the company to become one of the most valuable in the world",
    slug: "sequoia",
       seoPage: "firms/sequoia/",
    website: "https://www.sequoiacap.com",
    short: "Sequoia",
    founded: 1972,
    hq: "Menlo Park, CA",
    aum: "$56B+",
    thesis: "Founded in 1972 by Don Valentine, a former Fairchild Semiconductor sales executive often called the \"grandfather of Silicon Valley venture capital,\" Sequoia was there for the first wave of the personal computer era, providing early funding to Apple and Atari. Over five decades it has repeated that pattern again and again - Google, PayPal, and Nvidia among them - building a reputation as the industry's steadiest and most consistent winner across multiple technology cycles.",
    leadership: [
      { name: "Don Valentine", role: "Founder (1972)", profileSlug: "don-valentine" },
      { name: "Roelof Botha", role: "Senior Steward, Global Managing Partner", profileSlug: "roelof-botha" },
      { name: "Alfred Lin", role: "Managing Partner", profileSlug: "alfred-lin" }
    ],
    timeline: [
      { year: "1972", event: "Don Valentine, a former Fairchild Semiconductor sales executive, founds the firm in Menlo Park." },
      { year: "1978", event: "Becomes an early backer of Apple, one of the defining investments of Silicon Valley's first tech boom." },
      { year: "2005", event: "Makes an early bet on Nvidia, decades before the chipmaker became one of the world's most valuable companies." },
      { year: "2023", event: "Splits into three independent firms - Sequoia Capital, Peak XV Partners (India/Southeast Asia), and HongShan (China)." }
    ],
    holdings: [
   { name: "Nvidia", ticker: "NVDA", investedYear: 1993, historicalPrice: 138.1, price: 202.81 },
      { name: "DoorDash", ticker: "DASH", investedYear: 2014, historicalPrice: 170.65, price: 175.00 }
    ]
  },
  {
    rank: 6,
    name: "General Catalyst",
    sectors: ["Healthcare", "Fintech", "AI Infrastructure"],
    signatureExit: "Snap's 2017 IPO, one of the largest consumer tech listings of its era",
    slug: "general-catalyst",
    website: "https://www.generalcatalyst.com",
    short: "GC",
    founded: 2000,
    hq: "Cambridge, MA",
    aum: "$35B+",
    thesis: "David Fialkow and Joel Cutler, childhood friends since the age of five or six, spent years building and selling travel and consumer companies together before co-founding General Catalyst in Cambridge, Massachusetts in 2000. What started as a Boston-area firm with a first fund of $250 million has since expanded into Silicon Valley, Europe, and India, evolving into one of the largest venture firms in the world.",
    leadership: [
      { name: "Joel Cutler", role: "Co-Founder", profileSlug: "joel-cutler" },
      { name: "David Fialkow", role: "Co-Founder & Managing Director", profileSlug: "david-fialkow" },
      { name: "Hemant Taneja", role: "CEO & Managing Director", profileSlug: "hemant-taneja" }
    ],
    timeline: [
      { year: "2000", event: "Childhood friends Joel Cutler and David Fialkow found the firm in Cambridge, Massachusetts." },
      { year: "2001", event: "Closes its first fund at $250 million, focused on early-stage technology companies." },
      { year: "2010", event: "Opens a Silicon Valley office, expanding beyond its Boston roots." },
      { year: "2017", event: "Portfolio company Snap goes public in one of the largest consumer tech IPOs of its era." }
    ],
    holdings: [
      { name: "HubSpot", ticker: "HUBS", investedYear: 2007, historicalPrice: null, price: 224.26 },
      { name: "Samsara", ticker: "IOT", investedYear: 2017, historicalPrice: null, price: 38.32 }
    ]
  },
  {
    rank: 7,
    name: "New Enterprise Associates",
    sectors: ["Technology", "Healthcare", "Life Sciences"],
    signatureExit: "Robinhood's 2021 IPO, bringing retail stock trading to the public markets",
    slug: "nea",
    website: "https://www.nea.com",
    short: "NEA",
    founded: 1977,
    hq: "Menlo Park, CA",
    aum: "$25B+",
    thesis: "NEA was founded in 1977 by three men who each brought a different piece of the puzzle: Dick Kramlich, who had trained under legendary investor Arthur Rock; Frank Bonsal, an investment banker who had taken startups public; and Chuck Newhall, who had managed investment funds at T. Rowe Price. Deliberately built with offices on both coasts from day one - unusual for the era - NEA's first fund raised just $16 million, a fraction of the more than $25 billion it manages today.",
    leadership: [
      { name: "Dick Kramlich", role: "Co-Founder", profileSlug: "dick-kramlich" },
      { name: "Chuck Newhall", role: "Co-Founder", profileSlug: "chuck-newhall" },
      { name: "Frank Bonsal", role: "Co-Founder", profileSlug: "frank-bonsal" },
      { name: "Scott Sandell", role: "Executive Chairman", profileSlug: "scott-sandell" }
    ],
    timeline: [
      { year: "1977", event: "Three founders with complementary backgrounds - banking, fund management, and VC - launch NEA with a $16 million first fund." },
      { year: "1981", event: "Makes one of its earliest notable investments in 3Com." },
      { year: "2015", event: "Closes a $3.1 billion fund, the largest venture fund raised up to that point." },
      { year: "2021", event: "Portfolio company Robinhood goes public, bringing retail stock trading to the public markets." }
    ],
    holdings: [
      { name: "Robinhood", ticker: "HOOD", investedYear: 2015, historicalPrice: null, price: 99.96 },
      { name: "Workday", ticker: "WDAY", investedYear: 2009, historicalPrice: null, price: 144.78 }
    ]
  },
  {
    rank: 9,
    name: "TCV",
    sectors: ["Consumer Internet", "SaaS", "Fintech", "Media", "Cybersecurity", "AI", "Deep Tech"],
    signatureExit: "Netflix's 2002 Nasdaq IPO - TCV owned roughly 43% of the company pre-IPO and co-founder Jay Hoag has served on Netflix's board since 1999, watching it grow into a company worth more than $400 billion",
    slug: "tcv",
    website: "https://www.tcv.com",
    short: "TCV",
    founded: 1995,
    hq: "Menlo Park, CA",
    aum: "~$24B raised since inception",
    thesis: "TCV was founded in 1995 by Jay Hoag and Rick Kimball as the original crossover investor - the first firm to invest in both public and private technology companies from the same fund, a structure the 'Crossover' in its original name (Technology Crossover Ventures) still reflects. That willingness to follow winners across the private-to-public transition, rather than exiting at IPO, is what produced Jay Hoag's three-decade board seat at Netflix, which he joined in 1999 when TCV owned roughly 43% of the company pre-IPO. The firm has since invested more than $17 billion across 350-plus technology companies worldwide, supporting more than 145 IPOs and strategic acquisitions including Facebook, Airbnb, Spotify, Zillow, and Expedia, and now manages approximately $24 billion.",
    leadership: [
      { name: "Jay Hoag", role: "Founding General Partner", profileSlug: "jay-hoag" },
      { name: "Richard Kimball", role: "Founding General Partner", profileSlug: "richard-kimball" },
      { name: "Neil Tolaney", role: "General Partner", profileSlug: "neil-tolaney" }
    ],
    timeline: [
      { year: "1995", event: "Jay Hoag and Rick Kimball found Technology Crossover Ventures in Menlo Park." },
      { year: "1999", event: "Jay Hoag joins Netflix's board of directors." },
      { year: "2002", event: "Netflix goes public on the Nasdaq, with TCV owning roughly 43% pre-IPO." },
      { year: "2012", event: "Invests $260 million in Facebook ahead of its IPO, doubling the investment within months." },
      { year: "2018", event: "Portfolio company Spotify completes its direct listing." },
      { year: "2026", event: "Total capital raised since inception reaches approximately $24 billion." }
    ],
    holdings: [
       { name: "Netflix", ticker: "NFLX", investedYear: 1999, historicalPrice: null, price: 72.39 },
      { name: "Spotify", ticker: "SPOT", investedYear: 2013, historicalPrice: null, price: 482.66 },
      { name: "Airbnb", ticker: "ABNB", investedYear: 2017, historicalPrice: null, price: 141.10 }
    ]
  },
  {
    rank: 8,
    name: "Lightspeed Venture Partners",
    sectors: ["Enterprise Infrastructure", "Consumer"],
    signatureExit: "Snap's 2017 IPO, five years after Lightspeed wrote Snapchat's first-ever institutional check",
    slug: "lightspeed",
    website: "https://lsvp.com",
    short: "Lightspeed",
    founded: 2000,
    hq: "Menlo Park, CA",
    aum: "$25B+",
    thesis: "Lightspeed traces its roots to Weiss, Peck & Greer Venture Partners, rebranding under its current name in 2000 as it sharpened its focus on enterprise infrastructure and consumer technology. The firm's willingness to back unproven, young founders paid off dramatically in 2012, when partner Jeremy Liew wrote the first institutional check into a then-tiny disappearing-photo app called Snapchat.",
    leadership: [
      { name: "Barry Eggers", role: "Co-Founder", profileSlug: "barry-eggers" },
      { name: "Ravi Mhatre", role: "Co-Founder", profileSlug: "ravi-mhatre" },
      { name: "Jeremy Liew", role: "Partner, wrote Snapchat's first check", profileSlug: "jeremy-liew" }
    ],
    timeline: [
      { year: "2000", event: "Rebrands from Weiss, Peck & Greer Venture Partners into Lightspeed Venture Partners." },
      { year: "2012", event: "Partner Jeremy Liew writes the first institutional check into a then-tiny app called Snapchat." },
      { year: "2017", event: "Snap goes public, five years after that first bet." },
      { year: "2020s", event: "Expands heavily into enterprise infrastructure alongside its consumer roots." }
    ],
    holdings: [
      { name: "Snap", ticker: "SNAP", investedYear: 2012, historicalPrice: null, price: 4.53 },
      { name: "Affirm", ticker: "AFRM", investedYear: 2013, historicalPrice: null, price: 64.71 }
    ]
  },
  {
    rank: 9,
    name: "Kleiner Perkins",
    sectors: ["Enterprise Software", "Consumer Internet", "Healthcare", "AI", "Deep Tech", "Industrial Tech", "Fintech"],
    signatureExit: "Google's 2004 IPO - the firm's $12.5 million bet alongside Sequoia Capital remains one of the most celebrated investments in venture capital history",
    slug: "kleiner-perkins",
    website: "https://www.kleinerperkins.com",
    short: "Kleiner Perkins",
    founded: 1972,
    hq: "Menlo Park, CA",
    aum: "$21B+",
    thesis: "Kleiner Perkins was founded in 1972 by Eugene Kleiner, a Fairchild Semiconductor co-founder, and Tom Perkins, a former Hewlett-Packard executive with degrees from MIT and Harvard. Joined shortly after by Frank Caufield and Brook Byers, the firm built its name on backing category-defining technology companies from their earliest days, including Genentech, Sun Microsystems, Netscape, Amazon, and Google. The firm's 1999 investment in Google alongside Sequoia Capital - writing what was then its largest check ever - remains one of the most celebrated bets in venture capital history.",
    leadership: [
      { name: "Eugene Kleiner", role: "Co-Founder (1972)", profileSlug: "eugene-kleiner" },
      { name: "Tom Perkins", role: "Co-Founder (1972)", profileSlug: "tom-perkins" },
      { name: "John Doerr", role: "Chairman", profileSlug: "john-doerr" }
    ],
    timeline: [
      { year: "1972", event: "Eugene Kleiner and Tom Perkins found the firm in Menlo Park, later joined by Frank Caufield and Brook Byers." },
      { year: "1980", event: "John Doerr joins as a partner after a career at Intel." },
      { year: "1996", event: "Leads an early investment in Amazon.com." },
      { year: "1999", event: "Invests $12.5 million in Google alongside Sequoia Capital - the firm's largest check at the time." },
      { year: "2004", event: "Google goes public, one of the most celebrated venture bets in history." },
      { year: "2016", event: "John Doerr steps down from day-to-day leadership, becoming chairman." }
    ],
    holdings: [
      { name: "Amazon", ticker: "AMZN", investedYear: 1996, historicalPrice: null, price: 247.55 },
      { name: "Palo Alto Networks", ticker: "PANW", historicalPrice: null, price: 341.59 },
      { name: "Snap", ticker: "SNAP", investedYear: 2014, historicalPrice: null, price: 4.53 }
    ]
  },
  {
    rank: 10,
    name: "Ribbit Capital",
    sectors: ["Fintech", "Crypto", "Consumer Internet", "AI", "Deep Tech", "Defense Tech", "Enterprise Software"],
    signatureExit: "Nubank's 2021 NYSE IPO - Ribbit was an early backer of the Brazilian neobank, which reached a market capitalization of roughly $67.4 billion by July 2026",
    slug: "ribbit-capital",
    website: "https://ribbitcap.com",
    short: "Ribbit",
    founded: 2012,
    hq: "Palo Alto, CA",
    aum: "$20.78B (RAUM, Form ADV 2026)",
    thesis: "Micky Malka founded Ribbit Capital in 2012 after a career spent building brokerages and banks rather than software companies - he helped build Patagon.com, which Santander acquired in 2000, then co-founded Banco Lemon, later acquired by Banco do Brasil. That regulated-finance operating background, rather than a conventional Silicon Valley career arc, is what made Ribbit the premier financial-services specialist in venture capital, backing category leaders globally from a first $100 million fund in 2013. The firm's public messaging has since broadened well past 'fintech' into global commerce, money movement, identity, data, energy, AI, and wealth management, but the through-line is unchanged: Coinbase, Nubank, and Robinhood are all Ribbit bets, and its March 2026 Form ADV reports approximately $20.78 billion in regulatory assets under management.",
    leadership: [
      { name: "Micky Malka", role: "Founder & Managing Partner", profileSlug: "micky-malka" }
    ],
    timeline: [
      { year: "2012", event: "Micky Malka founds Ribbit Capital in Palo Alto after building and selling financial companies across Latin America and the U.S." },
      { year: "2013", event: "Raises Ribbit's first $100 million fund and makes an early bet on Coinbase." },
      { year: "2021", event: "Walmart and Ribbit partner to form the fintech venture One." },
      { year: "2022", event: "Ribbit LEAP, the firm's publicly traded vehicle, is wound down." },
      { year: "2026", event: "Ribbit's Form ADV reports approximately $20.78 billion in regulatory assets under management." }
    ],
    holdings: [
      { name: "Coinbase", ticker: "COIN", investedYear: 2013, historicalPrice: 257.21, price: 161.00 },
      { name: "Nubank", ticker: "NU", investedYear: 2016, historicalPrice: null, price: 13.93 },
      { name: "Robinhood", ticker: "HOOD", investedYear: 2014, historicalPrice: null, price: 99.96 },
      { name: "Affirm", ticker: "AFRM", historicalPrice: null, price: 64.71 },
       { name: "SoFi", ticker: "SOFI", historicalPrice: null, price: 18.43 }

    ]
  },
  {
    rank: 11,
    name: "Accel",
    sectors: ["Enterprise Software", "Consumer", "Security"],
    signatureExit: "Facebook's Series A in 2005 - still cited as one of the highest-multiple returns in VC history",
    slug: "accel",
    website: "https://www.accel.com",
    short: "Accel",
    founded: 1983,
    hq: "Palo Alto, CA",
    aum: "$20B+",
    thesis: "Arthur Patterson and Jim Swartz founded Accel in 1983, betting on a strategy of deep specialization in specific technology categories rather than spreading investments broadly - an approach that was unusual at the time. That focus paid off most famously in 2005, when Accel led Facebook's Series A, a single investment that became one of the highest-multiple returns in venture capital history and cemented the firm's reputation for spotting category-defining companies early.",
    leadership: [
      { name: "Arthur Patterson", role: "Co-Founder", profileSlug: "arthur-patterson" },
      { name: "Jim Swartz", role: "Co-Founder", profileSlug: "jim-swartz" }
    ],
    timeline: [
      { year: "1983", event: "Arthur Patterson and Jim Swartz found the firm on a strategy of deep specialization in specific tech categories." },
      { year: "2000s", event: "Expands internationally, opening a London office to invest across Europe." },
      { year: "2005", event: "Leads Facebook's Series A - a single check that became one of the highest-multiple returns in VC history." },
      { year: "2010s", event: "Backs Slack, Atlassian, and Dropbox as the firm builds a reputation in enterprise software." }
    ],
    holdings: [
      { name: "Meta Platforms", ticker: "META", investedYear: 2005, historicalPrice: null, price: 646.01 },
      { name: "Etsy", ticker: "ETSY", investedYear: 2008, historicalPrice: null, price: 84.10 }
    ]
  },
  {
    rank: 12,
    name: "OrbiMed",
    sectors: ["Biotech", "Pharmaceuticals", "Healthcare", "Diagnostics"],
    signatureExit: "No single confirmed signature exit - OrbiMed is instead widely regarded in biotech as a 'stamp of validation' and IPO accelerator, with many companies specifically seeking its backing to help secure Nasdaq or HKEX listings",
    slug: "orbimed",
    website: "https://www.orbimed.com",
    short: "OrbiMed",
    founded: 1989,
    hq: "New York, NY",
    aum: "~$20B",
    thesis: "OrbiMed's roots trace back to 1989, when S.G. Warburg pharmaceutical analysts Viren Mehta and Samuel Isaly founded Mehta & Isaly, a research and money-management firm that made its first venture capital investment in 1993. The firm split in 1998, with Isaly forming OrbiMed Advisors, and it has since grown into one of the world's largest dedicated healthcare investment platforms - a rare structure that spans public equity, private equity/venture, and private credit and royalty financing all within a single healthcare-only specialist group. That breadth lets OrbiMed fund a company from seed through IPO and well beyond using one continuous relationship, and its roughly 150-person investment team, including PhD scientists, MDs, and CFAs, now manages approximately $20 billion across all three strategies.",
    leadership: [
      { name: "Sven Borho", role: "Founding Managing Partner, Public Equity", profileSlug: "sven-borho" },
      { name: "Carl Gordon", role: "Managing Partner & Head of Private Equity", profileSlug: "carl-gordon" },
      { name: "Jonathan Silverstein", role: "Managing Partner", profileSlug: "jonathan-silverstein" }
    ],
    timeline: [
      { year: "1989", event: "Viren Mehta and Samuel Isaly found Mehta & Isaly." },
      { year: "1993", event: "The firm makes its first venture capital investment." },
      { year: "1998", event: "Mehta & Isaly splits; Samuel Isaly forms OrbiMed Advisors." },
      { year: "2007", event: "OrbiMed expands into Asia, opening offices in Shanghai and Mumbai." },
      { year: "2018", event: "Samuel Isaly steps down as managing partner following a succession planning process, replaced by a management committee led by Sven Borho, Carl Gordon, and Jonathan Silverstein." },
      { year: "2025", event: "Closes its Healthcare Royalty & Credit Fund V at $1.86 billion in August, its largest royalty/credit fund close to date." }
    ],
    holdings: []
  },
  {
    rank: 12,
    name: "Norwest Venture Partners",
    sectors: ["Enterprise Software", "Consumer Internet", "Fintech", "Healthcare"],
    signatureExit: "Spotify's 2018 direct listing on the NYSE - one of several major exits, including Lending Club's 2014 IPO, where Norwest was the largest institutional investor",
    slug: "norwest-venture-partners",
    website: "https://www.norwest.com",
    short: "Norwest",
    founded: 1961,
    hq: "Menlo Park, CA",
    aum: "$15.5B+",
    thesis: "Norwest Venture Partners traces its roots to 1961, when it was founded as the Northwest Growth Fund, the venture arm of a Minneapolis bank holding company that would eventually become Wells Fargo after a 1998 merger. That corporate lineage gives Norwest an unusual structure among major venture firms: Wells Fargo has remained its primary limited partner for more than six decades, providing a level of capital stability few firms can match. Senior Managing Partner Jeff Crowe, who joined in 2004 after founding and running his own venture-backed software company through an IPO, has led the firm's most prominent recent bets, including being the largest institutional investor in Lending Club's 2014 IPO and backing Spotify ahead of its 2018 public listing.",
    leadership: [
      { name: "Jeff Crowe", role: "Senior Managing Partner", profileSlug: "jeff-crowe" }
    ],
    timeline: [
      { year: "1961", event: "Norwest is founded in Minneapolis as the Northwest Growth Fund, the venture arm of Norwest Corporation." },
      { year: "1998", event: "Norwest Corporation merges with Wells Fargo, which becomes the firm's primary limited partner." },
      { year: "2004", event: "Jeff Crowe joins the firm after founding and running Edify Corporation through its 1996 IPO." },
      { year: "2013", event: "Crowe becomes Managing Partner." },
      { year: "2014", event: "Norwest is the largest institutional investor in Lending Club's IPO." },
      { year: "2018", event: "Portfolio company Spotify goes public via direct listing." }
    ],
    holdings: [
      { name: "Spotify", ticker: "SPOT", historicalPrice: null, price: 498.24 },
       { name: "LendingClub", ticker: "LC", investedYear: 2007, historicalPrice: null, price: 19.21 }
 
    ]
  },
  {
    rank: 13,
    name: "Khosla Ventures",
    sectors: ["Clean Energy", "AI", "Deep Tech"],
    signatureExit: "Block (formerly Square)'s 2015 IPO, one of fintech's defining public debuts",
    slug: "khosla-ventures",
    website: "https://www.khoslaventures.com",
    short: "Khosla",
    founded: 2004,
    hq: "Menlo Park, CA",
    aum: "$15B+",
    thesis: "Vinod Khosla co-founded Sun Microsystems in 1982 before moving into venture capital, eventually launching his own firm, Khosla Ventures, in 2004. True to his engineering background, Khosla built the firm's reputation on taking bets other investors considered too risky or too far from proven markets - from early clean energy to artificial intelligence - arguing that the biggest returns come from technology bets everyone else is too cautious to make.",
    leadership: [
      { name: "Vinod Khosla", role: "Founder", profileSlug: "vinod-khosla" }
    ],
    timeline: [
      { year: "1982", event: "Vinod Khosla co-founds Sun Microsystems, years before moving into venture capital." },
      { year: "2004", event: "Khosla founds his own firm, focused on high-risk, high-reward technology bets." },
      { year: "2009", event: "Makes an early investment in Square (now Block), years ahead of its 2015 IPO." },
      { year: "2020s", event: "Shifts significant focus toward artificial intelligence alongside its long-running clean energy bets." }
    ],
    holdings: [
{ name: "Block", ticker: "XYZ", investedYear: 2009, historicalPrice: null, price: 79.94 },
{ name: "Instacart", ticker: "CART", investedYear: 2012, historicalPrice: null, price: 45.82 }
    ]
  },
  {
    rank: 14,
    name: "Battery Ventures",
    sectors: ["Enterprise Software", "SaaS", "Consumer Internet", "Industrial Technology"],
    signatureExit: "Wayfair's 2014 IPO - Battery led the company's first institutional financing round in 2011, after General Partner Neeraj Agrawal recognized the opportunity through a decade-long friendship with co-founder Niraj Shah",
    slug: "battery-ventures",
    website: "https://www.battery.com",
    short: "Battery",
    founded: 1983,
    hq: "Boston, MA",
    aum: "$13B+",
    thesis: "Battery Ventures was founded in 1983 by Rick Frisbie, Howard Anderson, and Bob Barrett in Boston, building a research-focused, collaborative approach to backing category-leading technology companies across their entire lifecycle, from seed investments through growth equity and buyouts. That range paid off in 2011, when General Partner Neeraj Agrawal led Battery's investment in Wayfair's first institutional financing round - a bet built partly on a decade-long friendship with co-founder Niraj Shah dating back to their college days at Cornell. Wayfair went public just three years later, in 2014.",
    leadership: [
      { name: "Rick Frisbie", role: "Co-Founder (1983)", profileSlug: "rick-frisbie" },
      { name: "Howard Anderson", role: "Co-Founder (1983)", profileSlug: "howard-anderson" },
      { name: "Neeraj Agrawal", role: "General Partner", profileSlug: "neeraj-agrawal" }
    ],
    timeline: [
      { year: "1983", event: "Rick Frisbie, Howard Anderson, and Bob Barrett found Battery Ventures in Boston." },
      { year: "2000", event: "Neeraj Agrawal joins the firm as a partner." },
      { year: "2011", event: "Leads Battery's first institutional investment in Wayfair." },
      { year: "2014", event: "Wayfair goes public." },
      { year: "2020s", event: "Continues investing across venture, growth equity, and buyouts from its 15th flagship fund, capitalized at $3.25 billion." }
    ],
    holdings: [
 { name: "Wayfair", ticker: "W", investedYear: 2011, historicalPrice: null, price: 101.13 },
{ name: "Nutanix", ticker: "NTNX", investedYear: 2012, historicalPrice: null, price: 67.95 },
 { name: "Guidewire", ticker: "GWRE", investedYear: 2007, historicalPrice: null, price: 182.62 }
  
    ]
  },
  {
    rank: 19,
    name: "8VC",
    sectors: ["Enterprise Software", "Defense Tech", "Healthcare", "AI", "Industrial Tech", "Deep Tech", "Fintech"],
    signatureExit: "Wish's NASDAQ IPO in December 2020 at a $14.1 billion valuation - Joe Lonsdale was an early institutional investor in the e-commerce company",
    slug: "8vc",
    website: "https://8vc.com",
    short: "8VC",
    founded: 2015,
    hq: "Austin, TX",
    aum: "$6B",
    thesis: "8VC was founded in 2015 by Joe Lonsdale, Jake Medwell, Drew Oetting, Alex Kolicich, and Kimmy Scotti, emerging from the breakup of Formation 8, a prior venture firm Lonsdale had co-founded. Lonsdale's own operating history - co-founding Palantir Technologies and Addepar before ever becoming a full-time investor - shapes the firm's entire model: rather than purely writing checks, 8VC actively builds companies from scratch through its dedicated 8VC Build program, leveraging genuine firsthand experience scaling category-defining technology platforms. The firm relocated from San Francisco to Austin in 2020, positioning itself at the center of an entire wave of technology companies making the same move, and focuses on ambitious, long-term opportunities in defense, healthcare, logistics, and enterprise software that most momentum-driven investors overlook. 8VC now manages $6 billion in committed capital, with a portfolio including Palantir, Oscar Health, Wish, Blend, and Joby Aviation.",
    leadership: [
      { name: "Joe Lonsdale", role: "Co-Founder & Managing Partner", profileSlug: "joe-lonsdale" },
      { name: "Jake Medwell", role: "Co-Founder & Partner", profileSlug: "jake-medwell" },
      { name: "Drew Oetting", role: "Co-Founder & Partner", profileSlug: "drew-oetting" }
    ],
    timeline: [
      { year: "2015", event: "Joe Lonsdale, Jake Medwell, Drew Oetting, Alex Kolicich, and Kimmy Scotti found 8VC after Formation 8's breakup." },
      { year: "2016", event: "Closes its first flagship venture fund." },
      { year: "2020", event: "Wish completes its NASDAQ IPO in December at a $14.1 billion valuation; 8VC relocates from San Francisco to Austin." },
      { year: "2022", event: "Launches the 8VC Build Fund, raising $100 million dedicated to company creation." },
      { year: "2023", event: "AUM reaches approximately $6 billion." }
    ],
    holdings: [
      { name: "Palantir", ticker: "PLTR", historicalPrice: null, price: 179.01 },
      { name: "Oscar Health", ticker: "OSCR", historicalPrice: null, price: 30.78 },
      { name: "Wish", ticker: "WISH", historicalPrice: null, price: null },
      { name: "Blend", ticker: "BLND", historicalPrice: null, price: 1.55 },
      { name: "Joby Aviation", ticker: "JOBY", historicalPrice: null, price: 8.26 }
  
    ]
  },
  {
    rank: 20,
    name: "BDC Capital",
    sectors: ["Enterprise Software", "AI", "Climate"],
    signatureExit: "No focus on traditional exits - as Canada's national development bank's venture arm, BDC Capital measures success through co-investment reach; Lightspeed Commerce's 2020 NYSE IPO is among the notable companies it helped fund",
    slug: "bdc-capital",
    website: "https://www.bdc.ca/en/bdc-capital/venture-capital",
    short: "BDC Capital",
    founded: 1953,
    hq: "Montreal, Canada",
    aum: "$3B (across venture and growth funds)",
    thesis: "BDC Capital is the venture and growth-equity arm of the Business Development Bank of Canada, founded in 1953 as Canada's national development bank before building out a dedicated venture capital function. Positioned as Canada's largest and most active early-stage venture capital investor, BDC Capital co-invests alongside angels and private VCs to support homegrown Canadian technology companies across AI, cleantech, and enterprise software, deliberately providing large co-investment checks specifically designed to encourage more private capital into Canadian deals rather than crowding it out. That patient, government-backed capital model has supported Canadian technology companies for three decades, including Lightspeed Commerce, Coveo, and Borrowell, and BDC Capital now deploys approximately $3 billion across its venture and growth equity funds.",
    leadership: [
      { name: "Michael Denham", role: "CEO, BDC", profileSlug: "michael-denham" }
    ],
    timeline: [
      { year: "1953", event: "The Business Development Bank of Canada is founded." },
      { year: "2016", event: "Launches a dedicated $275 million BDC Venture Fund for co-investment." },
      { year: "2020", event: "Launches BDC Growth ($100M) and BDC Cinetic ($265M) funds; Lightspeed Commerce completes its NYSE IPO." },
      { year: "2022", event: "Launches dedicated cleantech and connectivity-focused funds." }
    ],
    holdings: []
  },
  {
    rank: 22,
    name: "SignalFire",
    sectors: ["AI", "Enterprise Software", "Cybersecurity", "Healthcare"],
    signatureExit: "No single dollar-verified SignalFire exit confirmed yet - founder Chris Farmer's prior seed program at General Catalyst backed Coinbase, Discord, Stripe, Venmo, and Zapier, lending real pre-existing credibility to SignalFire's data-driven sourcing model",
    slug: "signalfire",
    website: "https://www.signalfire.com",
    short: "SignalFire",
    founded: 2013,
    hq: "San Francisco, CA",
    aum: "$3B",
    thesis: "SignalFire was founded in 2013 by Chris Farmer and Ilya Kirnos, built from the ground up on a genuinely unconventional premise: run a venture firm the way a technology company builds a product, with an in-house engineering and data science team holding equal standing to investing partners rather than working in the background. That philosophy produced Beacon AI, a proprietary machine learning platform tracking more than 650 million people and 80 million organizations that has been refined in-house for more than a decade, giving SignalFire differentiated visibility into talent movement and market trends ahead of consensus. Farmer personally bootstrapped the model in its early days, running corporate advisory projects just to cover AWS bills that exceeded the first fund's management fees, and the firm has since become one of the most prominent applied-AI-focused early-stage investors, closing over $1 billion in new capital in a single April 2025 raise to reach approximately $3 billion in AUM.",
    leadership: [
      { name: "Chris Farmer", role: "Founder & CEO", profileSlug: "chris-farmer" },
      { name: "Ilya Kirnos", role: "Founding Partner & CTO", profileSlug: "ilya-kirnos" },
      { name: "Wayne Hu", role: "Partner", profileSlug: "wayne-hu" }
    ],
    timeline: [
      { year: "2013", event: "Chris Farmer and Ilya Kirnos found SignalFire in San Francisco." },
      { year: "2016", event: "Walter Kortschak joins after 26 years at Summit Partners, establishing SignalFire's growth-stage practice." },
      { year: "2025", event: "Closes over $1 billion in new capital in April, pushing AUM to approximately $3 billion." }
    ],
    holdings: []
  },
  {
    rank: 23,
    name: "Sinovation Ventures",
    sectors: ["AI", "Deep Tech", "Edtech"],
    signatureExit: "No portfolio company has completed a major international IPO yet - Sinovation instead measures itself through China-market listings for Megvii and 4Paradigm, and founder Kai-Fu Lee's own prior AdMob-adjacent track record from his Google and Microsoft years",
    slug: "sinovation-ventures",
    website: "https://www.sinovationventures.com",
    short: "Sinovation Ventures",
    founded: 2009,
    hq: "Beijing, China",
    aum: "$3B",
    thesis: "Sinovation Ventures was founded as Innovation Works in September 2009 by Kai-Fu Lee, days after he resigned as President of Google Greater China, bringing an unmatched technical and cross-cultural pedigree spanning speech recognition research at Apple, founding Microsoft Research China, and leading Google's China operations. That background shaped a deliberately hands-on, incubator-like investment model - Sinovation offers portfolio companies deep support in UI/UX design, product development, recruiting, and government relations, not just capital - concentrated specifically on AI, robotics, and deep tech startups years before those categories became mainstream. The firm was one of the first Chinese venture firms to establish a genuine US presence, and now manages $3 billion in dual-currency funds across more than 400 portfolio companies, with Lee continuing to serve as one of the most recognized public voices in global AI discourse.",
    leadership: [
      { name: "Kai-Fu Lee", role: "Chairman & CEO", profileSlug: "kai-fu-lee" },
      { name: "Hua Wang", role: "Co-Founder", profileSlug: "hua-wang" }
    ],
    timeline: [
      { year: "2009", event: "Kai-Fu Lee and Hua Wang found Innovation Works in Beijing, days after Lee's Google resignation, with a $115 million debut fund." },
      { year: "2013", event: "Opens a Silicon Valley office." },
      { year: "2016", event: "Rebrands to Sinovation Ventures." },
      { year: "2022", event: "Raises a $203 million Fund V." }
    ],
    holdings: []
  },
  {
    rank: 23,
    name: "Greycroft",
    sectors: ["Enterprise Software", "Fintech", "Consumer", "AI"],
    signatureExit: "Venmo - Greycroft was an early seed investor in the payments app; Braintree, which had acquired Venmo, was sold to PayPal for $800 million in 2013",
    slug: "greycroft",
    website: "https://www.greycroft.com",
    short: "Greycroft",
    founded: 2006,
    hq: "New York, NY",
    aum: "$3B+ (across all funds)",
    thesis: "Greycroft was founded in 2006 by Alan Patricof - a venture capital pioneer who'd founded the predecessor to Apax Partners decades earlier and was an early investor in both Apple and AOL - alongside Dana Settle and Ian Sigalow, after Patricof left Apax specifically to return to smaller, earlier-stage investing. The firm built its identity around three founding principles: venture capital as a relationship-driven repeat business, fund economics deliberately sized to stay aligned with founders rather than maximizing assets under management, and a separate growth fund to support portfolio companies at every later stage. That early conviction produced Venmo, HuffPost, and Goop among its earliest bets, and Greycroft has grown into a genuinely bicoastal-plus platform with offices in New York, Los Angeles, and the San Francisco Bay Area, closing more than $1 billion across new funds in April 2023 alone and surpassing $3 billion in assets under management since inception.",
    leadership: [
      { name: "Alan Patricof", role: "Co-Founder & Chairman", profileSlug: "alan-patricof" },
      { name: "Dana Settle", role: "Co-Founder & Managing Partner", profileSlug: "dana-settle" },
      { name: "Ian Sigalow", role: "Co-Founder & Managing Partner", profileSlug: "ian-sigalow" }
    ],
    timeline: [
      { year: "2006", event: "Alan Patricof, Dana Settle, and Ian Sigalow found Greycroft, raising a $75 million debut fund." },
      { year: "2012", event: "Leads an early seed investment in Venmo." },
      { year: "2013", event: "Braintree, which had acquired Venmo, is sold to PayPal for $800 million." },
      { year: "2019", event: "The RealReal completes its IPO." },
      { year: "2021", event: "Bird Global completes a SPAC merger at a $2.3 billion valuation in November; the company is later delisted from the NYSE in 2023 after revenue overstatement, and files for Chapter 11 bankruptcy in December 2023." },
      { year: "2023", event: "Closes more than $1 billion across new funds in April, pushing total AUM past $3 billion." }
    ],
    holdings: [
      { name: "The RealReal", ticker: "REAL", historicalPrice: null, price: 10.94 }
    ]
  },
  {
    rank: 40,
    name: "Slow Ventures",
    sectors: ["Consumer", "Fintech", "Enterprise Software", "Crypto", "Healthcare"],
    signatureExit: "PillPack's $753 million acquisition by Amazon in September 2018 - Kevin Colleran was an early investor in the online pharmacy",
    slug: "slow-ventures",
    website: "https://www.slow.co",
    short: "Slow Ventures",
    founded: 2009,
    hq: "San Francisco, CA",
    aum: "$800M+ deployed (since inception)",
    thesis: "Slow Ventures began in 2009 when Kevin Colleran and Dave Morin, both early Facebook employees, started informally pooling personal angel investments alongside other Facebook alumni, before formalizing the effort into an institutional venture firm by 2011. That origin shaped a genuinely distinctive limited-partner structure that persists today: more than 100 technology founders, CEOs, and executives, not just endowments and foundations, who actively help source deals and support portfolio companies rather than passively writing checks. The firm's deliberately patient, founder-first philosophy - reflected in its name - has produced early conviction bets across consumer, fintech, crypto, and healthcare, including Coinbase, Robinhood, PillPack, Airtable, and Solana, with more than $800 million deployed since inception across pre-seed through Series A.",
    leadership: [
      { name: "Kevin Colleran", role: "Co-Founder & Managing Director", profileSlug: "kevin-colleran" },
      { name: "Sam Lessin", role: "General Partner", profileSlug: "sam-lessin" },
      { name: "Will Quist", role: "Partner", profileSlug: "will-quist" }
    ],
    timeline: [
      { year: "2009", event: "Kevin Colleran and Dave Morin found Slow Ventures, initially pooling personal angel investments." },
      { year: "2011", event: "Formalizes into an institutional venture firm." },
      { year: "2015", event: "Sam Lessin joins as partner." },
      { year: "2018", event: "PillPack is acquired by Amazon for $753 million." },
      { year: "2020", event: "PagerDuty completes its NYSE IPO." }
    ],
    holdings: [
      { name: "Coinbase", ticker: "COIN", historicalPrice: null, price: 153.9 },
       { name: "PagerDuty", ticker: "PD", historicalPrice: null, price: 12.09 },
      { name: "BuzzFeed", ticker: "BZFD", historicalPrice: null, price: 1.14 }
 
    ]
  },
  {
    rank: 41,
    name: "Primary Venture Partners",
    sectors: ["Fintech", "Consumer", "Healthcare", "Enterprise Software"],
    signatureExit: "Jet.com's approximately $3.3 billion acquisition by Walmart in September 2016 - Brad Svrluga was an early investor via the firm's predecessor, High Peaks Ventures",
    slug: "primary-venture-partners",
    website: "https://www.primary.vc",
    short: "Primary Venture Partners",
    founded: 2015,
    hq: "New York, NY",
    aum: "~$1B",
    thesis: "Primary Venture Partners was founded in 2015 by Brad Svrluga and Ben Sun as a successor to High Peaks Ventures, built around a specific bet that crystallized after the 2008 financial crisis: New York's most talented people were shifting from Wall Street and Madison Avenue into startups, and the city needed a seed fund with genuine scale and hyper-local expertise to back them. The firm has become NYC's largest early-stage firm by operator headcount, with roughly 50 full-time staff and more than 20 dedicated platform operators embedded in portfolio companies on hiring, go-to-market execution, and follow-on fundraising - a deliberately builder-first model rather than a purely capital-first one. That approach produced early bets on Jet.com, acquired by Walmart for roughly $3.3 billion, and Mirror, acquired by Lululemon for $500 million, and Primary now manages approximately $1 billion, closing $425 million across two new funds in early 2024.",
    leadership: [
      { name: "Brad Svrluga", role: "Co-Founder & Managing Partner", profileSlug: "brad-svrluga" },
      { name: "Ben Sun", role: "Co-Founder & General Partner", profileSlug: "ben-sun" }
    ],
    timeline: [
      { year: "2015", event: "Brad Svrluga and Ben Sun found Primary Venture Partners, succeeding High Peaks Ventures." },
      { year: "2016", event: "Jet.com is acquired by Walmart for approximately $3.3 billion." },
      { year: "2018", event: "Closes a $100 million second fund in June." },
      { year: "2020", event: "Mirror is acquired by Lululemon for $500 million." },
      { year: "2024", event: "Closes $425 million across two new funds in February, bringing AUM to approximately $1 billion." }
    ],
    holdings: []
  },
  {
    rank: 42,
    name: "Lerer Hippeau",
    sectors: ["Consumer", "Healthcare", "Fintech", "Enterprise Software"],
    signatureExit: "BuzzFeed's SPAC merger in December 2021 at a $1.5 billion valuation - Lerer Hippeau was an early backer of the media company, alongside earlier public listings for Warby Parker and Casper",
    slug: "lerer-hippeau",
    website: "https://www.lererhippeau.com",
    short: "Lerer Hippeau",
    founded: 2010,
    hq: "New York, NY",
    aum: "$1.5B (across nine funds)",
    thesis: "Lerer Hippeau was founded in 2010 by Ben Lerer, who spent more than a decade simultaneously running Thrillist and later Group Nine Media while building the fund, and Eric Hippeau, former CEO of HuffPost. That combination of active media operating experience and deep New York networks shaped a deliberately 'activist' seed investing philosophy: rather than writing passive checks, Lerer Hippeau takes meaningful stakes and works hands-on with founders on branding and go-to-market strategy, having built its early reputation on consumer breakouts like Warby Parker, Casper, Glossier, and Allbirds before any of them were obvious winners. New York's largest seed fund by reputation and track record, Lerer Hippeau has since expanded well beyond consumer into fintech and enterprise software, backing more than 450 companies across nine funds with 12 unicorns, 10 IPOs, and 166 acquisitions, and now manages roughly $1.5 billion.",
    leadership: [
      { name: "Ben Lerer", role: "Co-Founder & Managing Partner", profileSlug: "ben-lerer" },
      { name: "Eric Hippeau", role: "Co-Founder & Managing Partner", profileSlug: "eric-hippeau" },
      { name: "Joe Medved", role: "Partner & COO", profileSlug: "joe-medved" }
    ],
    timeline: [
      { year: "2010", event: "Ben Lerer and Eric Hippeau found Lerer Hippeau in New York." },
      { year: "2011", event: "Leads an early investment in Warby Parker." },
      { year: "2020", event: "Casper completes its IPO under ticker CSPR." },
      { year: "2021", event: "BuzzFeed goes public via SPAC merger at a $1.5 billion valuation." },
      { year: "2026", event: "Portfolio reaches 456 companies with 12 unicorns and 10 IPOs since founding." }
    ],
    holdings: [
      { name: "Warby Parker", ticker: "WRBY", historicalPrice: null, price: 25.88 },
      { name: "Olo", ticker: "OLO", historicalPrice: null, price: null },
       { name: "BuzzFeed", ticker: "BZFD", historicalPrice: null, price: 1.14 }

    ]
  },
  {
    rank: 82,
    name: "BoxGroup",
    sectors: ["Fintech", "Enterprise Software", "Consumer", "Deep Tech"],
    signatureExit: "Flatiron Health's $1.9 billion acquisition by Roche in 2018 - BoxGroup was an early investor in the healthcare data company, one of several major exits alongside PillPack, Matterport, and Trello",
    slug: "boxgroup",
    website: "https://boxgroup.com",
    short: "BoxGroup",
    founded: 2007,
    hq: "New York, NY",
    aum: "$550M (across two new funds, as of October 2025)",
    thesis: "BoxGroup was founded in 2007 by David Tisch, grandson of Loews Corporation co-founder Laurence Tisch, and Adam Rothenberg, both of whom also built Techstars NYC into a cornerstone of the New York startup scene before leaving to focus on BoxGroup full-time in 2012. The firm's small early offices near Union Square became an informal co-working hub for its own portfolio companies, and that proximity produced its most famous bet: Zach Perret turned down a job offer at BoxGroup to found Plaid instead, and BoxGroup became the fintech company's first institutional investor. Comfortable investing on 'more vision than traction,' as Tisch describes it, BoxGroup has made more than 600 investments across fintech, enterprise software, consumer, and deep tech, with major exits including Flatiron Health (acquired by Roche for $1.9 billion), PillPack, Matterport, and Trello, and now manages $550 million across two new funds as of a 2025 raise marking the firm's 16th year.",
    leadership: [
      { name: "David Tisch", role: "Co-Founder & Managing Partner", profileSlug: "david-tisch" },
      { name: "Adam Rothenberg", role: "Co-Founder & General Partner" },
      { name: "Nimi Katragadda", role: "Partner" }
    ],
    timeline: [
      { year: "2007", event: "David Tisch and Adam Rothenberg found BoxGroup in New York." },
      { year: "2012", event: "Tisch and Rothenberg leave Techstars to run BoxGroup full-time." },
      { year: "2013", event: "Becomes the first institutional investor in Plaid." },
      { year: "2018", event: "Flatiron Health is acquired by Roche for $1.9 billion." },
      { year: "2025", event: "Closes $550 million across two new funds in October, marking the firm's 16th year." }
    ],
    holdings: []
  },
  {
    rank: 47,
    name: "Canvas Prime",
    sectors: ["Healthcare", "Fintech", "AI"],
    signatureExit: "Casetext's $650 million all-cash acquisition by Thomson Reuters in 2023 - Rebecca Lynn led the early investment in the AI-powered legal research platform, which gained early access to GPT-4 before its exit",
    slug: "canvas-prime",
    website: "https://www.canvas.vc",
    short: "Canvas Prime",
    founded: 2013,
    hq: "Portola Valley, CA",
    aum: "~$835M (across funds)",
    thesis: "Canvas Prime, originally Canvas Ventures, was co-founded in 2013 by Rebecca Lynn as a spinout from Morgenthaler Ventures, closing its first fund the same week Lehman Brothers collapsed. Lynn brought a genuinely unusual technical foundation to venture investing - a chemical engineering background including work in a nuclear research reactor, followed by real operating experience scaling NextCard, the first online credit card company, from 30 to 1,300 employees through IPO. That combination of technical rigor and operating pattern-recognition has anchored the firm's Series A and B investing in fintech, healthtech, and AI, producing LendingClub's 2014 IPO (the largest US tech listing that year), Doximity's 2021 public listing, and Casetext's $650 million acquisition by Thomson Reuters in 2023.",
    leadership: [
      { name: "Rebecca Lynn", role: "Co-Founder & Managing Director", profileSlug: "rebecca-lynn" }
    ],
    timeline: [
      { year: "2013", event: "Rebecca Lynn co-founds Canvas Ventures as a spinout from Morgenthaler Ventures." },
      { year: "2014", event: "LendingClub completes its IPO in December, the largest US tech IPO of the year." },
      { year: "2021", event: "Doximity completes its NYSE IPO." },
      { year: "2023", event: "Casetext is acquired by Thomson Reuters for $650 million in cash in June." }
    ],
    holdings: [
      { name: "LendingClub", ticker: "LC", historicalPrice: null, price: 19.21 },
       { name: "Doximity", ticker: "DOCS", historicalPrice: null, price: 26.59 },
      { name: "Luminar Technologies", ticker: "LAZR", historicalPrice: null, price: 46.44 }
 
    ]
  },
  {
    rank: 48,
    name: "Revolution Ventures",
    sectors: ["Consumer", "Enterprise Software", "Fintech"],
    signatureExit: "Booker's $150 million acquisition by Mindbody in March 2018 - Revolution Ventures participated in Booker's Series A and B rounds, one of several exits including FitnessKeeper (acquired by Asics) and OrderUp (acquired by Groupon)",
    slug: "revolution-ventures",
    website: "https://www.revolution.com",
    short: "Revolution Ventures",
    founded: 2005,
    hq: "Washington, D.C.",
    aum: "$400M+ (Revolution Ventures funds specifically)",
    thesis: "Revolution Ventures is the early-stage investing arm of Revolution LLC, the Washington, D.C. investment firm AOL co-founder Steve Case founded in 2005 with Tige Savage and Donn Davis after leaving the AOL Time Warner board. Revolution Ventures itself launched as an institutional fund in 2013, closing $200 million against a $150 million target, built entirely around Case's 'Rise of the Rest' thesis: that great entrepreneurs are being systematically overlooked because too much venture capital concentrates in Silicon Valley, New York, and Boston. That's a related but distinct vehicle from the separately-tracked Rise of the Rest Seed Fund, a Bezos-backed seed-stage fund the same Revolution team launched in 2017 - Revolution Ventures itself focuses on leading Series A rounds nationwide, typically writing $4-8 million first checks. The fund has produced real, repeated exits including Booker (acquired by Mindbody), FitnessKeeper (acquired by Asics), and OrderUp (acquired by Groupon), maintaining top-quartile performance since inception.",
    leadership: [
      { name: "Steve Case", role: "Chairman & Co-Founder", profileSlug: "steve-case" },
      { name: "Tige Savage", role: "Co-Founder & Managing Partner", profileSlug: "tige-savage" },
      { name: "Clara Sieg", role: "Operating Partner", profileSlug: "clara-sieg" }
    ],
    timeline: [
      { year: "2005", event: "Steve Case, Tige Savage, and Donn Davis found Revolution LLC in Washington, D.C." },
      { year: "2013", event: "Revolution Ventures closes its first institutional fund at $200 million, exceeding its $150 million target." },
      { year: "2018", event: "Booker is acquired by Mindbody for $150 million in March." },
      { year: "2021", event: "Sweetgreen, a Revolution portfolio company, completes its IPO." },
      { year: "2023", event: "Closes a $215 million fund to continue backing transformative early-stage companies." }
    ],
    holdings: [
      { name: "Sweetgreen", ticker: "SG", historicalPrice: null, price: 6.06 }
    ]
  },
  {
    rank: 49,
    name: "Homebrew",
    sectors: ["Fintech", "Developer Tools", "AI"],
    signatureExit: "Chime's Nasdaq IPO in June 2025 under ticker CHYM - one of Homebrew's earliest bets, the company priced at $27 a share, popped 37% on debut, and reached an $11.6 billion valuation",
    slug: "homebrew",
    website: "https://homebrew.co",
    short: "Homebrew",
    founded: 2013,
    hq: "San Francisco, CA",
    aum: "$85M (across two funds)",
    thesis: "Homebrew was co-founded in 2013 by Hunter Walk and Satya Patel, both former Google product leaders who identified a specific gap in early-stage investing: too much seed capital was structured around investor needs rather than founder needs. They built Homebrew around what they call the 'Bottom Up Economy' thesis, deliberately keeping the firm small - just the two partners making 8-10 investments a year, then working closely with each company through Series B rather than spreading thin across many bets. That concentrated, founder-first model produced early conviction in Chime, Plaid, and Gusto years before any of them were obvious winners, and in a genuinely unusual move, Walk and Patel recently stopped accepting outside limited partner capital entirely, transitioning to a self-funded model called Homebrew Forever after a decade of strong returns.",
    leadership: [
      { name: "Hunter Walk", role: "Co-Founder & Partner", profileSlug: "hunter-walk" },
      { name: "Satya Patel", role: "Co-Founder & Partner", profileSlug: "satya-patel" }
    ],
    timeline: [
      { year: "2013", event: "Hunter Walk and Satya Patel found Homebrew in San Francisco, closing a $35 million debut fund." },
      { year: "2015", event: "Closes a $50 million second fund." },
      { year: "2025", event: "Chime completes its Nasdaq IPO in June under ticker CHYM at an $11.6 billion valuation." },
      { year: "2025", event: "Announces Homebrew Forever, transitioning away from outside LP capital to a self-funded investing model." }
    ],
    holdings: [
      { name: "Chime", ticker: "CHYM", historicalPrice: null, price: 32.18 }
    ]
  },
  {
    rank: 50,
    name: "Cowboy Ventures",
    sectors: ["Consumer", "Fintech", "Enterprise Software"],
    signatureExit: "Dollar Shave Club's approximately $1 billion acquisition by Unilever in 2016 - an early Cowboy Ventures investment, and one of the deals that shaped Aileen Lee's broader 'unicorn' framework",
    slug: "cowboy-ventures",
    website: "https://cowboy.vc",
    short: "Cowboy Ventures",
    founded: 2012,
    hq: "Palo Alto, CA",
    aum: "$260M (Fund IV $140M + Mustang I $120M, 2023)",
    thesis: "Cowboy Ventures was founded in 2012 by Aileen Lee, who left Kleiner Perkins after 13 years to build one of the first venture firms founded by a woman, with Kleiner itself becoming her anchor investor. A year into running the firm, Lee coined the term 'unicorn' in a widely-cited TechCrunch article analyzing billion-dollar startups, a framework that has since become permanent industry vocabulary - though Lee has been candid that the term captures a point-in-time valuation, not durable success. Cowboy invests almost exclusively at seed, deliberately keeping fund sizes small to target top-quartile returns without requiring portfolio companies to reach outsized valuations, with a genuine, structural commitment to backing diverse and 'included' founders - roughly half of Cowboy's investments have included a female founder. The firm's early conviction in Dollar Shave Club, whose founder Lee praised for having 'such a clear brand voice' despite minimal capital, culminated in Unilever's roughly $1 billion acquisition in 2016.",
    leadership: [
      { name: "Aileen Lee", role: "Founder & Managing Partner", profileSlug: "aileen-lee" },
      { name: "Caroline Duffy", role: "Partner", profileSlug: "caroline-duffy" }
    ],
    timeline: [
      { year: "2012", event: "Aileen Lee founds Cowboy Ventures in Palo Alto." },
      { year: "2013", event: "Lee coins the term 'unicorn' in a November TechCrunch article." },
      { year: "2016", event: "Dollar Shave Club is acquired by Unilever for approximately $1 billion." },
      { year: "2018", event: "Closes Fund III at $95 million." },
      { year: "2023", event: "Closes $260 million across two new funds: Fund IV ($140M) and Mustang I ($120M)." }
    ],
    holdings: []
  },
  {
    rank: 51,
    name: "Zetta Venture Partners",
    sectors: ["AI", "Enterprise Software", "Developer Tools"],
    signatureExit: "No confirmed exit yet for Zetta's own portfolio - founder Mark Gorenberg's prior 20-year track record at Hummer Winblad includes real, verified exits at Omniture (Adobe), AdForce (CMGI), NetDynamics (Sun Microsystems), and Scopus Technologies (Siebel)",
    slug: "zetta-venture-partners",
    website: "https://www.zettavp.com",
    short: "Zetta Venture Partners",
    founded: 2013,
    hq: "San Francisco, CA",
    aum: "$365M (across funds)",
    thesis: "Zetta Venture Partners was founded in 2013 by Mark Gorenberg, after roughly two decades as Managing Director at Hummer Winblad Venture Partners, positioning Zetta as the first venture fund dedicated exclusively to AI-native startups - companies where machine intelligence is the core operating engine, not a feature layered onto an existing SaaS product. Co-founder Jocelyn Goldfein, a former VP of Engineering at VMware and Director of Engineering at Facebook, adds genuine technical operating depth to Gorenberg's investing pattern-recognition, and the firm's technical bench includes multiple PhDs in computational fields who help evaluate deals most generalist investors can't properly assess. Zetta targets three structural layers of the AI stack - applications automating complex human tasks, infrastructure supporting model training and data pipelines, and developer tools accelerating AI-first software construction - typically leading or co-leading pre-seed and seed rounds under $5 million, with $365 million raised across its funds since inception.",
    leadership: [
      { name: "Mark Gorenberg", role: "Founder & Managing Director", profileSlug: "mark-gorenberg" },
      { name: "Jocelyn Goldfein", role: "Managing Director", profileSlug: "jocelyn-goldfein" },
      { name: "Apoorva Pandhi", role: "Managing Director", profileSlug: "apoorva-pandhi" }
    ],
    timeline: [
      { year: "2013", event: "Mark Gorenberg founds Zetta Venture Partners, the first fund dedicated exclusively to AI." },
      { year: "2015", event: "Closes a $100 million first fund." },
      { year: "2016", event: "Jocelyn Goldfein joins as Managing Director." },
      { year: "2018", event: "Closes a $165 million second fund." },
      { year: "2021", event: "Total capital raised reaches $265 million." }
    ],
    holdings: []
  },
  {
    rank: 52,
    name: "Root Ventures",
    sectors: ["Deep Tech", "Industrial Tech", "AI"],
    signatureExit: "No confirmed large exit yet - Root's portfolio, including Particle and Pivot Bio, remains largely private, reflecting the longer development timelines typical of deep tech and hardware-enabled startups",
    slug: "root-ventures",
    website: "https://root.vc",
    short: "Root Ventures",
    founded: 2013,
    hq: "San Francisco, CA",
    aum: "$150M+ (Fund III, closed 2022)",
    thesis: "Root Ventures was founded in 2013 by Avidan Ross, whose genuinely unusual path - embedded systems engineering, CTO of a $15 billion investment firm, then literally designing industrial robotics for the Food Network's kitchens - shaped a seed fund explicitly built by engineers for engineers. Root specializes in startups where significant technical depth is required to launch, spanning robotics, aerospace, agricultural technology, sensors, and IoT, deliberately favoring system-level innovation that requires specialized knowledge most generalist investors can't properly evaluate. Ross positions the firm less as a financial backer and more as an engineering sherpa, helping founders debug hardware roadmaps and manufacturing decisions directly, and closed Root's third fund at $150 million in 2022.",
    leadership: [
      { name: "Avidan Ross", role: "Founding Partner & Managing Partner", profileSlug: "avidan-ross" },
      { name: "Kane Hsieh", role: "Partner", profileSlug: "kane-hsieh" },
      { name: "Chrissy Meyer", role: "Partner", profileSlug: "chrissy-meyer" }
    ],
    timeline: [
      { year: "2013", event: "Avidan Ross founds Root Ventures in San Francisco." },
      { year: "2022", event: "Closes Fund III at $150 million." }
    ],
    holdings: []
  },
  {
    rank: 54,
    name: "BlueYard Capital",
    sectors: ["Crypto", "Deep Tech", "Defense Tech"],
    signatureExit: "No public exit - BlueYard's crypto-native thesis means outcomes come as token appreciation rather than IPOs; the firm's clearest proof points are co-founders O'Leary and Whitmire's pre-BlueYard bets on Wunderlist (acquired by Microsoft) and Peak Games (acquired by Zynga for $1.8 billion) while at Earlybird",
    slug: "blueyard-capital",
    website: "https://blueyard.com",
    short: "BlueYard Capital",
    founded: 2016,
    hq: "Berlin, Germany",
    aum: "$500M (across three funds)",
    thesis: "BlueYard Capital was co-founded in 2016 by Ciarán O'Leary and Jason Whitmire, both former partners at Earlybird Venture Capital where they'd already backed Wunderlist (acquired by Microsoft) and Peak Games (sold to Zynga for $1.8 billion) before breaking off to build their own fund. BlueYard operates as a genuinely equal partnership rather than a traditional hierarchy, organizing its entire investment thesis around three forces its team believes will define the next century - decentralization of markets, democratization of capabilities, and liberation of data - and deliberately backing companies addressing civilization-scale problems years before consensus forms. That early conviction produced a seed investment in Protocol Labs, the company behind Filecoin, and BlueYard's debut €111 million fund generated a 76% gross IRR and 3.4x DPI, with the firm now managing approximately $500 million across three funds spanning crypto, defense technology, and frontier biology.",
    leadership: [
      { name: "Ciarán O'Leary", role: "General Partner & Co-Founder", profileSlug: "ciaran-oleary" },
      { name: "Jason Whitmire", role: "General Partner & Co-Founder", profileSlug: "jason-whitmire" }
    ],
    timeline: [
      { year: "2016", event: "Ciarán O'Leary and Jason Whitmire found BlueYard Capital in Berlin, closing a €111 million debut fund." },
      { year: "2017", event: "Leads a seed investment in Protocol Labs, the company behind Filecoin." },
      { year: "2019", event: "Raises a €105 million second fund, BlueYard 2." },
      { year: "2024", event: "Deploys its third fund at approximately $185 million." }
    ],
    holdings: []
  },
  {
    rank: 53,
    name: "Radical Ventures",
    sectors: ["AI", "Machine Learning", "Deep Tech"],
    signatureExit: "Layer 6 AI's acquisition by TD Bank Group in January 2018, roughly 15 months after founding - co-founders Jordan Jacobs and Tomi Poutanen sold the company before turning to build Radical Ventures full-time (deal value undisclosed)",
    slug: "radical-ventures",
    website: "https://radical.vc",
    short: "Radical Ventures",
    founded: 2017,
    hq: "Toronto, Canada",
    aum: "$350M+ (Fund II, $471M CAD, closed 2019)",
    thesis: "Radical Ventures was founded in 2017 by Jordan Jacobs, Tomi Poutanen, and Maks Volkovs, fresh off selling their AI company Layer 6 to TD Bank Group just 15 months after founding it. That exit, combined with the trio's role co-founding the Vector Institute for Artificial Intelligence alongside deep learning pioneer Geoffrey Hinton, positioned Radical as North America's first dedicated AI-focused venture fund, built specifically to keep Toronto and Montreal's world-class machine learning talent from leaving for Silicon Valley. The firm has recruited an unusually prominent scientific bench - Fei-Fei Li, the Stanford AI pioneer and ImageNet creator, and Daphne Koller both serve as Scientific Partners, mentoring founders through Radical's AI Founders Masterclass alongside Geoffrey Hinton himself. Highly selective despite meeting thousands of AI startups, Radical has invested in only around 60 companies since inception, with $471 million CAD raised for its second fund in 2019.",
    leadership: [
      { name: "Jordan Jacobs", role: "Co-Founder & Managing Partner", profileSlug: "jordan-jacobs" },
      { name: "Tomi Poutanen", role: "Co-Founder & Partner", profileSlug: "tomi-poutanen" },
      { name: "Fei-Fei Li", role: "Scientific Partner", profileSlug: "fei-fei-li" }
    ],
    timeline: [
      { year: "2017", event: "Jordan Jacobs, Tomi Poutanen, and Maks Volkovs found Radical Ventures in Toronto." },
      { year: "2018", event: "Layer 6 AI, the founders' prior company, is acquired by TD Bank Group in January." },
      { year: "2019", event: "Closes Fund II at $471 million CAD." },
      { year: "2023", event: "Fei-Fei Li joins Radical Ventures as a Scientific Partner." }
    ],
    holdings: []
  },
  {
    rank: 43,
    name: "Pear VC",
    sectors: ["Fintech", "AI", "Cybersecurity", "Healthcare", "Consumer"],
    signatureExit: "DoorDash's 2020 NYSE IPO under ticker DASH - Pear's roughly $1.9 million investment, made as one of the firm's first five deals in 2013, was worth more than $440 million at listing, a nearly 233x return on the firm's entire first fund",
    slug: "pear-vc",
    website: "https://pear.vc",
    short: "Pear VC",
    founded: 2013,
    hq: "Menlo Park, CA",
    aum: "$800M (across four funds)",
    thesis: "Pear VC was founded in August 2013 as Pejman Mar Ventures by Pejman Nozad, an Iranian immigrant and former rug salesman turned angel investor, and Mar Hershenson, a Stanford-trained three-time founder, rebranding to Pear VC in 2016. Nozad's unconventional background shaped a genuinely distinctive sourcing edge from day one - the firm's defining early bet came when Nozad convinced a skeptical Hershenson to back a small food-delivery startup called DoorDash, turning roughly $1.9 million into more than $440 million at the company's 2020 IPO. That instinct for backing founders before consensus forms has defined Pear ever since: the firm invests from formation, sometimes co-founding companies from day zero, and has seeded more than 375 startups including Gusto, Guardant Health, Dropbox, Vanta, and Branch, with $800 million under management across four funds.",
    leadership: [
      { name: "Pejman Nozad", role: "Co-Founder & Founding Managing Partner", profileSlug: "pejman-nozad" },
      { name: "Mar Hershenson", role: "Co-Founder & Founding Managing Partner", profileSlug: "mar-hershenson" }
    ],
    timeline: [
      { year: "2013", event: "Pejman Nozad and Mar Hershenson found Pejman Mar Ventures in August, backing DoorDash as one of their first five deals." },
      { year: "2016", event: "Rebrands to Pear VC." },
      { year: "2018", event: "Guardant Health completes its NASDAQ IPO." },
      { year: "2020", event: "DoorDash goes public on the NYSE under ticker DASH." },
      { year: "2023", event: "Closes an oversubscribed $432 million Fund IV in May, pushing total AUM to approximately $800 million." }
    ],
    holdings: [
      { name: "DoorDash", ticker: "DASH", historicalPrice: null, price: 216.26 },
      { name: "Guardant Health", ticker: "GH", historicalPrice: null, price: 159.54 },
      { name: "Dropbox", ticker: "DBX", historicalPrice: null, price: 35.93 }
   
    ]
  },
  {
    rank: 44,
    name: "Upfront Ventures",
    sectors: ["Consumer", "Enterprise Software", "Fintech", "Media"],
    signatureExit: "Overture's $1.83 billion acquisition by Yahoo in 2003 - an early internet search advertising pioneer the firm's founders backed under its original name, GRP Partners",
    slug: "upfront-ventures",
    website: "https://upfront.com",
    short: "Upfront Ventures",
    founded: 1996,
    hq: "Santa Monica, CA",
    aum: "$1.9B",
    thesis: "Upfront Ventures was founded in 1996 as GRP Partners in Century City, Los Angeles, by Yves Sisteron, Steven Dietz, and Steve Lebow, initially raising a $200 million fund focused on traditional retail investments including Costco, Starbucks, and Office Depot before pivoting toward technology. Mark Suster, who'd already founded and sold two enterprise software companies (including Koral, acquired by Salesforce), joined in 2007 to build a dedicated internet investment arm, becoming Managing Partner in 2011 and helping lead the firm's 2013 rebrand to Upfront Ventures - a name chosen to reflect transparency with founders and a nod to the entertainment industry's 'upfronts.' That retail-to-tech pivot, combined with genuine roots in Los Angeles rather than a Silicon Valley satellite office, made Upfront the largest and most established venture capital firm in LA, deliberately deploying 40-45% of its capital in Southern California and building the Upfront Summit into the region's flagship tech conference. The firm now manages $1.9 billion and has backed more than 200 companies including TrueCar, Ring, Maker Studios, and Overture.",
    leadership: [
      { name: "Yves Sisteron", role: "Founding Partner & Managing Partner", profileSlug: "yves-sisteron" },
      { name: "Mark Suster", role: "Managing Partner", profileSlug: "mark-suster" },
      { name: "Kara Nortman", role: "Managing Partner", profileSlug: "kara-nortman" }
    ],
    timeline: [
      { year: "1996", event: "Yves Sisteron, Steven Dietz, and Steve Lebow found GRP Partners in Los Angeles, initially backing retail companies." },
      { year: "2003", event: "Overture, backed under the GRP name, is acquired by Yahoo for $1.83 billion." },
      { year: "2007", event: "Mark Suster joins to build a dedicated internet investment arm." },
      { year: "2013", event: "Rebrands to Upfront Ventures and relocates to Santa Monica." },
      { year: "2021", event: "AUM reaches $1.9 billion." }
    ],
    holdings: [
      { name: "TrueCar", ticker: "TRUE", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 45,
    name: "Acrew Capital",
    sectors: ["Fintech", "AI", "Cybersecurity", "Healthcare"],
    signatureExit: "No confirmed exit yet - Acrew itself launched in 2019, though co-founder Theresia Gouw's prior track record includes real, verified exits at Forescout, Imperva, Trulia, and HotelTonight's acquisition by Airbnb, built during her 15 years at Accel and Aspect Ventures",
    slug: "acrew-capital",
    website: "https://www.acrewcapital.com",
    short: "Acrew Capital",
    founded: 2019,
    hq: "San Francisco, CA",
    aum: "$1.7B",
    thesis: "Acrew Capital was co-founded in December 2019 by Theresia Gouw, Lauren Kolodny, Vishal Lugani, Asad Khaliq, and Mark Kraynak, most of whom had worked together previously at Aspect Ventures before that firm split up over differing leadership styles between its two founders. Gouw, a 15-year veteran of Accel Partners and the firm's first female partner, built Acrew deliberately as a 'multigenerational' firm structured to avoid concentrating power and decision-making at the top the way many venture partnerships do, with any two partners able to push a deal through. That structure, paired with a genuine belief that diversity of perspective is a competitive advantage rather than a checkbox, has produced a portfolio of 142-plus companies including 16 unicorns, anchored by a community of more than 600 operators and executives the firm calls its 'Crew of Leaders.' Acrew closed its $250 million debut fund backed by Melinda Gates and has since grown to $1.7 billion in AUM, raising $700 million in a single close in October 2024.",
    leadership: [
      { name: "Theresia Gouw", role: "Co-Founder & Managing Partner", profileSlug: "theresia-gouw" },
      { name: "Lauren Kolodny", role: "Co-Founder & Managing Partner", profileSlug: "lauren-kolodny" },
      { name: "Vishal Lugani", role: "Co-Founder & Partner", profileSlug: "vishal-lugani" }
    ],
    timeline: [
      { year: "2019", event: "Theresia Gouw, Lauren Kolodny, Vishal Lugani, Asad Khaliq, and Mark Kraynak found Acrew Capital in December, closing a $250 million debut fund." },
      { year: "2022", event: "Launches the Acrew Diversify Capital Fund, a growth-stage vehicle." },
      { year: "2024", event: "Raises $700 million in a single close in October, pushing AUM to $1.7 billion." },
      { year: "2025", event: "Portfolio company Chime prepares for an IPO at a projected $11 billion valuation." }
    ],
    holdings: []
  },
  {
    rank: 46,
    name: "Scale Venture Partners",
    sectors: ["Enterprise Software", "AI", "Cybersecurity", "Developer Tools"],
    signatureExit: "Bill.com's NASDAQ IPO in December 2019 - Scale was an early investor and Partner Stacey Bishop led the investment, one of several public listings across HubSpot, DocuSign, JFrog, and Root Insurance",
    slug: "scale-venture-partners",
    website: "https://www.scalevp.com",
    short: "Scale Venture Partners",
    founded: 2000,
    hq: "Foster City, CA",
    aum: "$2.8B",
    thesis: "Scale Venture Partners began in 2000 as BA Venture Partners, Bank of America's internal venture capital arm, co-founded by Kate Mitchell and Rory O'Driscoll, before spinning out as an independent firm in 2007. That banking-adjacent origin gave the firm an early, genuine focus on enterprise software with real financial discipline, and Scale has since evolved from a traditional B2B SaaS investor into a self-described pioneer of the 'Cognitive Applications' movement, embracing AI, cloud, and data-driven software as core to its current thesis. The firm's Series A and B-focused strategy, paired with a dedicated growth fund and hands-on 'Scaling Platform' support, has produced a genuinely strong IPO track record - HubSpot, DocuSign, Bill.com, JFrog, and Root Insurance all went public after Scale backed them - and the firm now manages $2.8 billion, investing out of a $900 million eighth fund raised in 2022.",
    leadership: [
      { name: "Kate Mitchell", role: "Co-Founder & Partner Emeritus", profileSlug: "kate-mitchell" },
      { name: "Rory O'Driscoll", role: "Partner", profileSlug: "rory-odriscoll" },
      { name: "Stacey Bishop", role: "Partner", profileSlug: "stacey-bishop" }
    ],
    timeline: [
      { year: "2000", event: "Kate Mitchell and Rory O'Driscoll found BA Venture Partners inside Bank of America." },
      { year: "2007", event: "Spins out as an independent firm, renamed Scale Venture Partners." },
      { year: "2019", event: "Bill.com completes its NASDAQ IPO in December." },
      { year: "2020", event: "JFrog and Root Insurance both complete their IPOs." },
      { year: "2022", event: "Closes a $900 million eighth fund, pushing total AUM to $2.8 billion." }
    ],
    holdings: [
      { name: "Bill.com", ticker: "BILL", historicalPrice: null, price: 51.31 },
       { name: "JFrog", ticker: "FROG", historicalPrice: null, price: 95.15 },
      { name: "Root Insurance", ticker: "ROOT", historicalPrice: null, price: 49.83 }
 
    ]
  },
  {
    rank: 15,
    name: "ARCH Venture Partners",
    sectors: ["Biotech", "Healthcare", "AI", "Deep Tech"],
    signatureExit: "Karuna Therapeutics' December 2023 acquisition by Bristol Myers Squibb for $14 billion - one of Robert Nelsen's earliest bets at the firm",
    slug: "arch-venture-partners",
    website: "https://www.archventure.com",
    short: "ARCH Venture",
    founded: 1986,
    hq: "Chicago, IL",
    aum: "$12B (following $3B+ Fund XIII, September 2024)",
    thesis: "ARCH Venture Partners was founded in 1986 by Steven Lazarus, Clinton Bybee, Keith Crandell, and Robert Nelsen, originating from a collaboration between the University of Chicago and Argonne National Laboratory built specifically to commercialize academic research. Nearly 40 years later, that model hasn't changed: ARCH still co-founds companies directly alongside scientists and researchers rather than simply writing checks into existing startups, concentrating almost entirely on early-stage life sciences, physical sciences, and increasingly AI-driven biology. That founder-embedded approach has produced more than 50 companies that reached billion-dollar valuations, including Illumina, Beam Therapeutics, and Karuna Therapeutics, and the firm closed its thirteenth flagship fund at more than $3 billion in September 2024, pushing total assets under management to roughly $12 billion.",
    leadership: [
      { name: "Robert Nelsen", role: "Co-Founder & Managing Director", profileSlug: "robert-nelsen" },
      { name: "Keith Crandell", role: "Co-Founder & Managing Director", profileSlug: "keith-crandell" },
      { name: "Kristina Burow", role: "Managing Director", profileSlug: "kristina-burow" }
    ],
    timeline: [
      { year: "1986", event: "Steven Lazarus, Clinton Bybee, Keith Crandell, and Robert Nelsen found ARCH Venture Partners in Chicago." },
      { year: "2000", event: "Portfolio company Illumina, one of Nelsen's earliest seed investments, goes public." },
      { year: "2022", event: "Closes Fund XII at $2.975 billion in June." },
      { year: "2023", event: "Karuna Therapeutics, an ARCH portfolio company, is acquired by Bristol Myers Squibb for $14 billion in December." },
      { year: "2024", event: "Closes its thirteenth flagship fund, Fund XIII, at more than $3 billion in September, marking the firm's 38th year." },
      { year: "2026", event: "Portfolio reaches 279 companies with more than 50 billion-dollar outcomes; total AUM reaches roughly $12 billion." }
    ],
    holdings: [
      { name: "Illumina", ticker: "ILMN", historicalPrice: null, price: 192.64 }
    ]
  },
  {
    rank: 16,
    name: "B Capital Group",
    sectors: ["Enterprise Software", "Fintech", "Healthcare", "Climate"],
    signatureExit: "Leading a 2026 investor consortium with CalPERS to acquire Russell Investments, a nearly century-old asset manager overseeing more than $400 billion - a rare case of a venture-founded firm taking control of a legacy financial institution",
    slug: "b-capital-group",
    website: "https://b.capital",
    short: "B Capital",
    founded: 2015,
    hq: "Manhattan Beach, CA",
    aum: "$9.0B (2026)",
    thesis: "B Capital Group was founded in 2015 by Facebook co-founder Eduardo Saverin, former Bain Capital investor Raj Ganguly, and ARPANET pioneer Howard Morgan, built from inception around a genuinely multinational approach rather than a U.S. firm that later expanded abroad. Its defining structural feature is a strategic partnership with Boston Consulting Group, giving portfolio companies direct access to BCG's consulting expertise and global client relationships whenever founders want it. That platform has scaled from a $360 million first fund in 2018 to $9 billion under management today, and the firm's ambitions have grown correspondingly - leading a 2026 investor consortium with CalPERS to acquire Russell Investments, a legacy asset manager overseeing more than $400 billion, shows B Capital moving well beyond traditional venture-stage investing.",
    leadership: [
      { name: "Eduardo Saverin", role: "Co-Founder & Co-CEO", profileSlug: "eduardo-saverin" },
      { name: "Raj Ganguly", role: "Co-Founder & Co-CEO", profileSlug: "raj-ganguly" },
      { name: "Howard Morgan", role: "Co-Founder & Chairman", profileSlug: "howard-morgan" }
    ],
    timeline: [
      { year: "2015", event: "Eduardo Saverin, Raj Ganguly, and Howard Morgan found B Capital Group." },
      { year: "2018", event: "Closes its first fund at $360 million." },
      { year: "2019", event: "Closes a second fund, growing total AUM to $1.44 billion." },
      { year: "2021", event: "Closes an $820 million second growth fund." },
      { year: "2026", event: "Firm AUM reaches $9.0 billion; leads a CalPERS-backed consortium to acquire Russell Investments." }
    ],
    holdings: []
  },
  {
    rank: 15,
    name: "GV",
    sectors: ["Consumer Internet", "Life Sciences", "Enterprise Software", "AI"],
    signatureExit: "Uber's 2019 IPO - GV's $258 million investment, personally led by CEO David Krane, was one of the largest venture checks in Uber's early history",
    slug: "gv",
    website: "https://www.gv.com",
    short: "GV",
    founded: 2009,
    hq: "Mountain View, CA",
    aum: "$13B+",
    thesis: "GV, launched as Google Ventures in 2009 by founding CEO Bill Maris, operates as the independent venture capital arm of Alphabet Inc., with Alphabet itself serving as GV's sole limited partner. That structure gives the firm an unusually long time horizon - deals in decades, not funding cycles - while still investing with full independence from Google's core search and advertising business. The firm's $258 million investment in Uber, personally led by current CEO David Krane, became one of its most defining bets, alongside early stakes in Nest Labs, Slack, and Flatiron Health.",
    leadership: [
      { name: "Bill Maris", role: "Founding CEO (2009)", profileSlug: "bill-maris" },
      { name: "David Krane", role: "CEO & Managing Partner", profileSlug: "david-krane" }
    ],
    timeline: [
      { year: "2009", event: "Bill Maris founds Google Ventures with an initial $100 million capital commitment from Google." },
      { year: "2010", event: "David Krane joins as a General Partner." },
      { year: "2011", event: "GV leads a $258 million investment in Uber." },
      { year: "2015", event: "Rebrands from Google Ventures to GV as Google reorganizes under Alphabet." },
      { year: "2016", event: "David Krane becomes CEO and Managing Partner, succeeding Bill Maris." },
      { year: "2019", event: "Uber goes public." }
    ],
    holdings: [
 { name: "Uber", ticker: "UBER", investedYear: 2013, historicalPrice: null, price: 72.46 },
 { name: "GitLab", ticker: "GTLB", investedYear: 2017, historicalPrice: null, price: 43.35 },
 { name: "Robinhood", ticker: "HOOD", investedYear: 2013, historicalPrice: null, price: 99.96 }
    ]
  },
  {
    rank: 17,
    name: "Sapphire Ventures",
    sectors: ["Enterprise Software", "SaaS", "AI", "Cybersecurity"],
    signatureExit: "MuleSoft's 2018 acquisition by Salesforce for $6.5 billion - a portfolio company Sapphire backed from SAP Ventures days through its own independent era",
    slug: "sapphire-ventures",
    website: "https://sapphireventures.com",
    short: "Sapphire Ventures",
    founded: 1996,
    hq: "Menlo Park, CA",
    aum: "$11B+",
    thesis: "Sapphire Ventures was founded in 1996 as SAP's corporate venture arm, spun out as an independent firm in 2011 under CEO Nino Marakovic's leadership, and rebranded to its current name in 2014. That corporate origin left a lasting structural advantage: unlike most enterprise-focused funds, Sapphire operates both direct investing and a dedicated fund-of-funds strategy, Sapphire Partners, which backs early-stage venture funds across North America, Europe, and Israel alongside direct co-investments. The firm invests primarily at Series B through pre-IPO, writing checks from $5 million to $100 million to support companies staying private longer as they scale toward IPO-ready revenue, and has grown from $1.4 billion under management at spinout to more than $11 billion today across 226-plus portfolio companies, 30-plus public listings, and 50-plus acquisitions.",
    leadership: [
      { name: "Nino Marakovic", role: "CEO & Partner (Co-Founder)", profileSlug: "nino-marakovic" },
      { name: "Jai Das", role: "President & Partner (Co-Founder)", profileSlug: "jai-das" },
      { name: "Cathy Gao", role: "Partner", profileSlug: "cathy-gao" }
    ],
    timeline: [
      { year: "1996", event: "SAP launches its venture capital arm." },
      { year: "2006", event: "Nino Marakovic joins SAP Ventures, later leading the team." },
      { year: "2011", event: "SAP Ventures spins out as an independent firm, managing $1.4 billion at the time." },
      { year: "2014", event: "Rebrands to Sapphire Ventures." },
      { year: "2018", event: "MuleSoft, a portfolio company, is acquired by Salesforce for $6.5 billion; Sapphire raises $1.4 billion for growth investments, pushing AUM north of $4 billion." },
      { year: "2026", event: "Firm AUM surpasses $11 billion across direct and fund investing strategies." }
    ],
    holdings: [
      { name: "Braze", ticker: "BRZE", historicalPrice: null, price: 29.87 }
    ]
  },
  {
    rank: 16,
    name: "Intel Capital",
    sectors: ["AI", "Cloud Infrastructure", "Cybersecurity", "5G", "Robotics"],
    signatureExit: "No single signature exit - Intel Capital's scale is cumulative: since 1991 it has invested $12.9 billion across more than 1,582 companies worldwide, with 692 reaching an IPO or acquisition, including current public holding Joby Aviation",
    slug: "intel-capital",
    website: "https://www.intelcapital.com",
    short: "Intel Capital",
    founded: 1991,
    hq: "Santa Clara, CA",
    aum: "$12.9B invested since 1991 (cumulative capital deployed)",
    thesis: "Intel Capital was founded in 1991 as, by its own description, the first corporate venture capital firm, and it has spent more than three decades investing globally around Intel's core compute and connectivity platforms. The firm organizes its current portfolio into four groups - Cloud, Devices, Frontier, and Silicon - reflecting genuinely broad technical reach across AI infrastructure, edge systems, cybersecurity, 5G, and semiconductor tooling, not just software. Since 1991, Intel Capital has invested $12.9 billion across more than 1,582 companies worldwide, with 692 of them reaching a public listing or acquisition, giving it one of the largest cumulative track records of any strategic investor in technology.",
    leadership: [
   { name: "Anthony Lin", role: "Head of Intel Capital & Corporate Vice President", profileSlug: "anthony-lin" },
      { name: "Mark Rostick", role: "Vice President & Senior Managing Director", profileSlug: "mark-rostick" },
      { name: "Srini Ananth", role: "Managing Director", profileSlug: "srini-ananth" }
    ],
    timeline: [
      { year: "1991", event: "Intel founds Intel Capital as one of the first corporate venture capital arms." },
      { year: "2017", event: "Total invested capital passes $12.2 billion across 1,500 companies." },
      { year: "2021", event: "Portfolio companies SentinelOne, Enovix, Matterport, Spire, and Science 37 all go public." },
      { year: "2026", event: "Cumulative invested capital reaches $12.9 billion across more than 1,582 companies, with 692 IPO or M&A outcomes." }
    ],
    holdings: [
      { name: "Joby Aviation", ticker: "JOBY", investedYear: 2018, historicalPrice: 8.09, price: 7.24 }
    ]
  },
  {
    rank: 16,
    name: "Index Ventures",
    sectors: ["Consumer Internet", "Fintech", "AI", "Marketplaces"],
    signatureExit: "Figma's July 2025 IPO at a $56 billion valuation - Index backed the design platform years before its explosive public debut",
    slug: "index-ventures",
    website: "https://www.indexventures.com",
    short: "Index",
    founded: 1996,
    hq: "London, UK",
    aum: "$12B+",
    thesis: "Index Ventures traces its roots to Index Securities, a Swiss bond-trading firm founded by Gerald Rimer in 1976. His son Neil Rimer, along with David Rimer and Giuseppe Zocco, formally launched Index Ventures as a technology investment firm in Geneva in 1996. The firm opened its London office in 2002 - its current headquarters - and its San Francisco office in 2012, building a genuinely transatlantic practice that has backed Dropbox, Etsy, Discord, Robinhood, and Figma.",
    leadership: [
      { name: "Neil Rimer", role: "Co-Founder", profileSlug: "neil-rimer" },
      { name: "Danny Rimer", role: "Partner", profileSlug: "danny-rimer" },
      { name: "Mike Volpi", role: "General Partner", profileSlug: "mike-volpi" }
    ],
    timeline: [
      { year: "1996", event: "Neil Rimer, David Rimer, and Giuseppe Zocco found Index Ventures in Geneva." },
      { year: "2002", event: "Opens its London office, which becomes the firm's primary headquarters." },
      { year: "2012", event: "Opens a San Francisco office, formalizing its transatlantic presence." },
      { year: "2015", event: "Portfolio company Etsy goes public." },
      { year: "2025", event: "Portfolio company Figma goes public at a $56 billion valuation." }
    ],
    holdings: [
      { name: "Etsy", ticker: "ETSY", historicalPrice: null, price: 84.10 },
      { name: "Figma", ticker: "FIG", historicalPrice: null, price: 23.95 },
      { name: "Dropbox", ticker: "DBX", historicalPrice: null, price: 35.93 }
    ]
  },
  {
    rank: 17,
    name: "Founders Fund",
    sectors: ["Aerospace", "Defense Tech", "Hard Tech"],
    signatureExit: "SpaceX's June 2026 IPO - an estimated ~80x return on Founders Fund's original stake",
    slug: "founders-fund",
    website: "https://foundersfund.com",
    short: "Founders Fund",
    founded: 2005,
    hq: "San Francisco, CA",
    aum: "$12B+",
    thesis: "Peter Thiel, Ken Howery, and Luke Nosek - all veterans of PayPal's founding team - launched Founders Fund in 2005 with a deliberately contrarian philosophy: back ambitious, technically difficult companies that other VCs pass on for being too weird or too capital-intensive. That thesis led directly to the firm becoming the first institutional investor in both SpaceX and Palantir, two of the highest-conviction, longest-held bets in the firm's history.",
    leadership: [
      { name: "Peter Thiel", role: "Co-Founder", profileSlug: "peter-thiel" },
      { name: "Ken Howery", role: "Co-Founder", profileSlug: "ken-howery" },
      { name: "Luke Nosek", role: "Co-Founder", profileSlug: "luke-nosek" }
    ],
    timeline: [
      { year: "2005", event: "Three PayPal Mafia veterans - Thiel, Howery, and Nosek - found the firm on a contrarian, hard-tech thesis." },
      { year: "2008", event: "Becomes an early investor in SpaceX, a bet that would compound for nearly two decades." },
      { year: "2010s", event: "Becomes the first institutional investor in Palantir, another long-held, high-conviction position." },
      { year: "2026", event: "SpaceX goes public, turning the firm's original 2008 stake into an estimated ~80x return." }
    ],
    holdings: [
      { name: "Palantir", ticker: "PLTR", historicalPrice: 75.19, price: 134.44 },
      { name: "SpaceX", ticker: "SPCX", historicalPrice: null, price: 160.95 }
    ]
  },
  {
    rank: 18,
    name: "Thrive Capital",
    sectors: ["Consumer Internet", "AI"],
    signatureExit: "An early stake in Instagram years before its acquisition by Facebook",
    slug: "thrive-capital",
    website: "https://thrivecap.com",
    short: "Thrive",
    founded: 2009,
    hq: "New York, NY",
    aum: "$10B+ (latest fund)",
    thesis: "Joshua Kushner founded Thrive Capital in 2009 at just 24 years old, initially funding it himself before raising outside capital from investors including Princeton University, the Wellcome Trust, and Peter Thiel. Thrive has stayed deliberately small in deal volume - funding only 8 to 12 new companies most years - while making some of the earliest bets on Instagram, and more recently OpenAI, a concentrated approach that has made it one of the highest-returning firms of its size.",
    leadership: [
      { name: "Joshua Kushner", role: "Founder", profileSlug: "joshua-kushner" }
    ],
    timeline: [
      { year: "2009", event: "Joshua Kushner founds the firm at age 24, initially funding it himself." },
      { year: "2011", event: "Raises its first institutional fund, with Princeton University and the Wellcome Trust among early backers." },
      { year: "2012", event: "Makes one of its earliest and most famous bets on Instagram, years before its acquisition by Facebook." },
      { year: "2020s", event: "Becomes one of the earliest and largest institutional investors in OpenAI." }
    ],
    holdings: [
      { name: "Figma", ticker: "FIG", historicalPrice: null, price: 23.95 },
      { name: "Instacart", ticker: "CART", historicalPrice: null, price: 45.82 }
    ]
  },
  {
    rank: 19,
    name: "Bessemer Venture Partners",
    sectors: ["Cloud Software", "Consumer", "Healthcare"],
    signatureExit: "LinkedIn's 2011 IPO, followed by its 2016 acquisition by Microsoft",
    slug: "bessemer",
    website: "https://www.bvp.com",
    short: "Bessemer",
    founded: 1911,
    hq: "Redwood City, CA",
    aum: "$10B+ (recent fund)",
    thesis: "Bessemer's story starts nowhere near a startup: in 1911, steel magnate Henry Phipps Jr. - Andrew Carnegie's business partner and the second-largest shareholder in Carnegie Steel - formed a family office to manage the fortune from Carnegie Steel's sale. That family office didn't formally become a venture capital firm until the 1970s, when it opened a Silicon Valley outpost to chase the emerging tech industry, eventually spinning out as Bessemer Venture Partners in 1986 - making it, by a wide margin, the oldest firm in venture capital.",
    leadership: [
      { name: "Henry Phipps Jr.", role: "Founder (1911, as Bessemer Trust)", profileSlug: "henry-phipps-jr" },
      { name: "Byron Deeter", role: "Partner", profileSlug: "byron-deeter" }
    ],
    timeline: [
      { year: "1911", event: "Steel magnate Henry Phipps Jr. forms a family office to manage the fortune from Carnegie Steel's sale." },
      { year: "1974", event: "Begins accepting outside investors for the first time, beyond the Phipps family itself." },
      { year: "1975", event: "Opens a Silicon Valley office, shifting focus toward technology and medical companies." },
      { year: "1986", event: "Formally spins out as Bessemer Venture Partners, a dedicated venture capital firm." }
    ],
        holdings: [
{ name: "Shopify", ticker: "SHOP", historicalPrice: 107.53, price: 123.56 },
      { name: "Pinterest", ticker: "PINS", historicalPrice: null, price: 23.50 },
      { name: "Twilio", ticker: "TWLO", historicalPrice: null, price: 206.78 }
    ]
  },
  {
    rank: 20,
    name: "Bain Capital Ventures",
    sectors: ["Enterprise Software", "Fintech", "SaaS", "Cybersecurity"],
    signatureExit: "Amazon's 2012 acquisition of Kiva Systems - Ajay Agarwal led BCV's first institutional round in the warehouse robotics startup in 2004, and its technology now powers Amazon Robotics across more than 2,000 fulfillment centers",
    slug: "bain-capital-ventures",
    website: "https://baincapitalventures.com",
    short: "BCV",
    founded: 2001,
    hq: "Boston, MA",
    aum: "$10B+",
    thesis: "Bain Capital Ventures was formed in 2001 as the dedicated venture capital arm of Bain Capital, the private investment firm Mitt Romney helped launch in 1984 as a spinoff from the consulting firm Bain & Company. That consulting DNA shaped BCV's approach: partner Ajay Agarwal, who joined in 2003, led the firm's first institutional round in Kiva Systems in 2004 - a warehouse robotics startup founded on the then-contrarian bet that e-commerce fulfillment costs would eventually balloon out of control. Amazon acquired Kiva in 2012, rebranding it Amazon Robotics; its systems now power more than 2,000 fulfillment centers worldwide. BCV has since backed DocuSign, LinkedIn, Twilio, and Redis across enterprise software, fintech, and infrastructure.",
    leadership: [
      { name: "James Nahirny", role: "Co-Founder", profileSlug: "james-nahirny" },
      { name: "Michael Krupka", role: "Co-Founder", profileSlug: "michael-krupka" },
      { name: "Ajay Agarwal", role: "Partner", profileSlug: "ajay-agarwal" }
    ],
    timeline: [
      { year: "2001", event: "Bain Capital forms Bain Capital Ventures as its dedicated venture arm." },
      { year: "2003", event: "Ajay Agarwal joins as a partner." },
      { year: "2004", event: "Agarwal leads BCV's first institutional round in Kiva Systems, a warehouse robotics startup." },
      { year: "2011", event: "Portfolio company LinkedIn goes public." },
      { year: "2012", event: "Amazon acquires Kiva Systems, rebranding it Amazon Robotics." },
      { year: "2018", event: "Portfolio company DocuSign goes public." }
    ],
    holdings: [
      { name: "DocuSign", ticker: "DOCU", historicalPrice: null, price: 64.09 },
      { name: "Twilio", ticker: "TWLO", historicalPrice: null, price: 206.78 }
    ]
  },
  {
    rank: 21,
    name: "Eclipse Ventures",
    sectors: ["Robotics", "AI Infrastructure", "Manufacturing", "Defense", "Climate"],
    signatureExit: "No single dollar-verified signature exit - Eclipse instead builds a defense-heavy 'connected industrial economy' of companies that share infrastructure and talent, including True Anomaly (autonomous spacecraft), Blue Water Autonomy (autonomous Navy vessels), and VulcanForms (supplying more than 15 Department of Defense programs including the F-35 and Patriot systems)",
    slug: "eclipse-ventures",
    website: "https://eclipse.capital",
    short: "Eclipse Ventures",
    founded: 2015,
    hq: "Palo Alto, CA",
    aum: "$10B+ (following $1.3B Fund VI + Early Growth Fund III close, April 2026)",
    thesis: "Eclipse Ventures was founded in 2015 on the belief that the most consequential companies of the next decade would be built in physical industries - manufacturing, energy, defense, and supply chains - not software alone. The firm describes itself not as a traditional portfolio but as a connected industrial economy: companies it backs share infrastructure, talent networks, and hard-won operational insight with each other, and Eclipse itself co-founds and incubates companies from scratch rather than only writing checks into existing startups. In April 2026 the firm closed its largest fundraise yet, $1.3 billion across a $720 million Fund VI and a $591 million Early Growth Fund III, pushing total assets under management to roughly $10 billion across an 11-year history.",
    leadership: [
     { name: "Lior Susan", role: "Founder & CEO", profileSlug: "lior-susan" },
      { name: "Greg Reichow", role: "Partner", profileSlug: "greg-reichow" }
    ],
    timeline: [
      { year: "2015", event: "Lior Susan founds Eclipse Ventures in Palo Alto." },
      { year: "2021", event: "Closes Fund IV at $500 million and its first dedicated Early Growth Fund at $510 million." },
      { year: "2023", event: "Closes $1.23 billion across Fund V and Early Growth Fund II, pushing total capital under management to $4 billion." },
      { year: "2026", event: "Closes its largest raise yet, $1.3 billion across Fund VI and Early Growth Fund III, pushing total AUM to roughly $10 billion." }
    ],
    holdings: []
  },
  {
    rank: 22,
    name: "Altos Ventures",
    sectors: ["Consumer", "Enterprise Software", "Marketplaces", "Fintech"],
    signatureExit: "Coupang's 2021 NYSE IPO - Altos was an early backer of the South Korean ecommerce company, which priced at an implied valuation of $62.1 billion",
    slug: "altos-ventures",
    website: "https://altos.vc",
    short: "Altos Ventures",
    founded: 1996,
    hq: "Menlo Park, CA",
    aum: "$10B+ (RIA regulatory AUM)",
    thesis: "Altos Ventures was founded in 1996 by Han Kim, Ho Nam, and Anthony Lee, three Stanford MBA classmates who began managing their first fund the same year through an introduction from a professor. The firm's public materials describe a deliberately contrarian, patient philosophy - favoring durable businesses with strong unit economics over trend-driven sectors, and staying involved with portfolio companies for more than a decade after the first check. That patience produced two of venture capital's largest single-firm outcomes: Altos held roughly 25% of Roblox at its 2021 IPO, a stake reported to be worth more than $8 billion, and was an early backer of Coupang, the South Korean ecommerce company that priced its own 2021 IPO at an implied $62.1 billion valuation.",
    leadership: [
  { name: "Han Kim", role: "Co-Founder & Managing Director", profileSlug: "han-kim" },
      { name: "Ho Nam", role: "Co-Founder & Managing Director", profileSlug: "ho-nam" },
      { name: "Anthony Lee", role: "Co-Founder & Managing Director", profileSlug: "anthony-lee" }
    ],
    timeline: [
      { year: "1996", event: "Han Kim, Ho Nam, and Anthony Lee found Altos Ventures in Menlo Park." },
      { year: "2007", event: "Altos' relationship with Roblox begins." },
      { year: "2021", event: "Both Roblox and Coupang go public; Altos' Roblox stake alone is reported worth more than $8 billion at listing." },
      { year: "2026", event: "Firm surpasses $10 billion in regulatory assets under management." }
    ],
    holdings: [
      { name: "Coupang", ticker: "CPNG", historicalPrice: null, price: 16.29 }
    ]
  },
  {
    rank: 23,
    name: "Peak XV Partners",
    sectors: ["AI", "Fintech", "Enterprise Software", "Consumer", "Cloud"],
    signatureExit: "Freshworks, which Reuters reported was targeting nearly $9.6 billion ahead of its IPO and which was valued at $12.2 billion on debut-day trading",
    slug: "peak-xv-partners",
    website: "https://www.peakxv.com",
    short: "Peak XV",
    founded: 2006,
    hq: "Bengaluru, India",
 aum: "$10B+",
 thesis: "Peak XV Partners traces its origins to 2006 as Sequoia Capital India, rebranding to Peak XV in 2023 after Sequoia's India/Southeast Asia business formally separated from the global Sequoia franchise. The firm is best understood as a region-building institution rather than just a fund complex: its current messaging emphasizes 'global maxima,' trying to persuade founders in India and Southeast Asia to benchmark against the world's best companies rather than merely regional peers. That is continuous with the old Sequoia India/SEA ethos, but the 2023 rebrand and current global posture also reflect a deliberate attempt to decouple geography from ambition - reinforced by Freshworks, the firm's clearest signature exit, which Reuters reported was targeting nearly $9.6 billion ahead of its IPO before debuting at a $12.2 billion valuation.",
    leadership: [
      { name: "Rajan Anandan", role: "Managing Director", profileSlug: "rajan-anandan" },
      { name: "Sakshi Chopra", role: "Managing Director", profileSlug: "sakshi-chopra" },
      { name: "Rohit Agarwal", role: "Managing Director", profileSlug: "rohit-agarwal" }
    ],
    timeline: [
      { year: "2006", event: "Franchise begins as Sequoia Capital India." },
      { year: "2010", event: "Sakshi Chopra joins Sequoia India." },
      { year: "2018", event: "Sequoia India closes Fund VI and highlights multiple exits." },
      { year: "2021", event: "Freshworks goes public, debuting at a $12.2 billion valuation." },
      { year: "2023", event: "Rebrands as Peak XV Partners after reporting $9.2 billion raised across 13 funds." },
      { year: "2026", event: "Current materials cite $10B+ AUM and 36 IPOs across five countries." }
    ],
    holdings: [
      { name: "Freshworks", ticker: "FRSH", historicalPrice: 14.62, price: 10.27 }
    ]
  },
  {
    rank: 21,
    name: "Benchmark",
    sectors: ["Consumer Internet", "Marketplaces", "Enterprise"],
    signatureExit: "eBay - a $6.7 million Series A in 1997 that became one of the best-performing venture bets ever made",
    slug: "benchmark",
    website: "https://www.benchmark.com",
    short: "Benchmark",
    founded: 1995,
    hq: "San Francisco, CA",
    aum: "$9B+",
    thesis: "Five young partners - Bob Kagle, Bruce Dunlevie, Andy Rachleff, Kevin Harvey, and Val Vaden - broke off from their established firms in 1995 to found Benchmark on a radical premise for the time: every partner would be paid and treated exactly equally, with no senior hierarchy. Barely two years later, the firm's $6.7 million bet on a tiny auction site called eBay became one of the best-performing venture investments ever made, validating the flat-partnership model Benchmark still runs today.",
    leadership: [
      { name: "Bob Kagle", role: "Co-Founder", profileSlug: "bob-kagle" },
      { name: "Bruce Dunlevie", role: "Co-Founder", profileSlug: "bruce-dunlevie" },
      { name: "Andy Rachleff", role: "Co-Founder", profileSlug: "andy-rachleff" },
      { name: "Kevin Harvey", role: "Co-Founder", profileSlug: "kevin-harvey" },
      { name: "Bill Gurley", role: "General Partner", profileSlug: "bill-gurley" }
    ],
    timeline: [
      { year: "1995", event: "Five partners break off from established firms to found Benchmark as a radically equal partnership." },
      { year: "1997", event: "Makes a $6.7 million Series A bet on a tiny auction site called eBay - one of the best-performing VC investments ever made." },
      { year: "1999", event: "Bill Gurley joins as a partner, going on to become one of the firm's most prominent investors." },
      { year: "2010s", event: "Backs Uber and Snap, continuing its pattern of early, high-conviction consumer bets." }
    ],
    holdings: [
      { name: "Uber", ticker: "UBER", historicalPrice: null, price: 72.46 },
      { name: "Snap", ticker: "SNAP", historicalPrice: null, price: 4.53 }
    ]
  },
  {
    rank: 22,
    name: "Spark Capital",
    sectors: ["Consumer Internet", "Enterprise Software", "Fintech", "AI"],
    signatureExit: "Twitter's 2013 IPO - Spark led the company's early investment in 2007 when it had fewer than a dozen employees",
    slug: "spark-capital",
    website: "https://www.sparkcapital.com",
    short: "Spark",
    founded: 2005,
    hq: "Boston, MA",
    aum: "$8.7B+",
    thesis: "Spark Capital was founded in 2005 by Bijan Sabet, Paul Conway, Santo Politi, and Todd Dagres, built on a deliberately founder-first philosophy that prioritizes people over spreadsheets. The firm's early conviction in consumer internet companies paid off dramatically with Twitter - Sabet led the investment in 2007 when the company had fewer than a dozen employees, years before its 2013 IPO. Spark has since extended that same instinct into enterprise software, fintech, and AI, including an early Series C investment in Anthropic that turned $75 million into an estimated $3 billion.",
    leadership: [
      { name: "Bijan Sabet", role: "Co-Founder & Partner Emeritus", profileSlug: "bijan-sabet" },
      { name: "Santo Politi", role: "Co-Founder & General Partner", profileSlug: "santo-politi" },
      { name: "Todd Dagres", role: "Co-Founder", profileSlug: "todd-dagres" }
    ],
    timeline: [
      { year: "2005", event: "Bijan Sabet, Paul Conway, Santo Politi, and Todd Dagres found Spark Capital in Boston." },
      { year: "2007", event: "Leads an early investment in Twitter when the company has fewer than a dozen employees." },
      { year: "2013", event: "Twitter goes public; portfolio company Tumblr is acquired by Yahoo for $1.1 billion the same year." },
      { year: "2014", event: "Portfolio company Oculus VR is acquired by Facebook for $2 billion." },
      { year: "2020s", event: "Makes an early Series C investment in Anthropic, turning $75 million into an estimated $3 billion." }
    ],
    holdings: [
      { name: "Coinbase", ticker: "COIN", historicalPrice: 257.21, price: 161.00 },
      { name: "Affirm", ticker: "AFRM", historicalPrice: null, price: 64.71 },
      { name: "Wayfair", ticker: "W", historicalPrice: null, price: 101.13 }
    ]
  },
  {
    rank: 23,
    name: "IVP",
    sectors: ["Consumer Internet", "Media", "Travel", "Fintech"],
    signatureExit: "Twitter's 2013 IPO - Todd Chaffee led IVP's $44 million investment in 2009 at a $220 million valuation, a stake that grew into a return of nearly $5 billion by 2018",
    slug: "ivp",
    website: "https://www.ivp.com",
    short: "IVP",
    founded: 1980,
    hq: "Menlo Park, CA",
    aum: "$7B+",
    thesis: "IVP, founded in 1980 by Reid Dennis, is one of the oldest venture capital firms on Sand Hill Road. Dennis had already spent nearly three decades building a network of early angel investors before formally launching IVP, and the firm became one of the first dedicated later-stage growth investors in Silicon Valley. After the dot-com crash, several IVP partners left to help found Redpoint Ventures in 1999 - a firm also tracked on this page. IVP's own defining bet came in 2009, when partner Todd Chaffee led a $44 million investment in Twitter at a $220 million valuation, a stake that grew into a return of nearly $5 billion within a decade.",
    leadership: [
      { name: "Reid Dennis", role: "Founder (1980)", profileSlug: "reid-dennis" },
      { name: "Todd Chaffee", role: "Managing Director & General Partner", profileSlug: "todd-chaffee" }
    ],
    timeline: [
      { year: "1980", event: "Reid Dennis founds Institutional Venture Partners in Menlo Park." },
      { year: "1999", event: "Several IVP partners leave to help found Redpoint Ventures after the dot-com crash." },
      { year: "2000", event: "Todd Chaffee joins as a General Partner." },
      { year: "2009", event: "Leads a $44 million investment in Twitter at a $220 million valuation." },
      { year: "2013", event: "Twitter goes public." },
      { year: "2018", event: "IVP's original Twitter stake has grown into a return of nearly $5 billion." }
    ],
    holdings: [
      { name: "Netflix", ticker: "NFLX", historicalPrice: null, price: 68.20 },
      { name: "Coinbase", ticker: "COIN", historicalPrice: 257.21, price: 161.00 }
    ]
  },
  {
    rank: 24,
    name: "CapitalG",
    sectors: ["AI", "Enterprise Software", "Cybersecurity", "Fintech"],
    signatureExit: "Looker's 2020 acquisition by Google for $2.6 billion - announced in June 2019 and completed the following February, with CapitalG's Gene Frantz counting it among his major outcomes",
    slug: "capitalg",
    website: "https://capitalg.com",
    short: "CapitalG",
    founded: 2013,
    hq: "San Francisco, CA",
    aum: "$7B",
    thesis: "CapitalG is Alphabet's independent growth fund, founded in 2013 to share Google's own growth expertise - commercial pipeline building, hiring, and go-to-market advisory - with scaling companies, not just write checks. Unlike most corporate venture arms, it publishes classic fund metrics openly: $7 billion in assets under management, typical check sizes of $50 to $200 million, and a track record of 16 IPOs and 11 M&A exits, which puts it closer to a dedicated growth-equity franchise than a scouting arm. Its portfolio includes category-defining names like Stripe, Airbnb, CrowdStrike, and Databricks, with Looker's $2.6 billion acquisition by Google itself standing as its most direct proof of strategic value.",
    leadership: [
      { name: "Laela Sturdy", role: "Managing Partner", profileSlug: "laela-sturdy" },
      { name: "Gene Frantz", role: "General Partner", profileSlug: "gene-frantz" },
      { name: "Alex Nichols", role: "General Partner", profileSlug: "alex-nichols" }
    ],
    timeline: [
      { year: "2013", event: "Alphabet founds CapitalG as its independent growth fund." },
      { year: "2019", event: "Google agrees to acquire portfolio company Looker for $2.6 billion in June." },
      { year: "2020", event: "The Looker acquisition completes in February." },
      { year: "2021", event: "Portfolio company Duolingo goes public on the Nasdaq." }
    ],
    holdings: [
      { name: "Duolingo", ticker: "DUOL", historicalPrice: null, price: 132.82 },
      { name: "UiPath", ticker: "PATH", historicalPrice: null, price: 16.68 },
       { name: "Zscaler", ticker: "ZS", historicalPrice: null, price: 188.18 }

    ]
  },
  {
    rank: 24,
    name: "Menlo Ventures",
    sectors: ["Consumer Internet", "Enterprise Software", "AI"],
    signatureExit: "Uber's 2019 IPO - Menlo led the company's $32 million Series B in 2011 after a16z passed on the deal, and realized a 93x return when a SoftBank-led group bought part of its stake for $973 million in 2018",
    slug: "menlo-ventures",
    website: "https://menlovc.com",
    short: "Menlo",
    founded: 1976,
    hq: "Menlo Park, CA",
    aum: "$5.8B+",
    thesis: "Menlo Ventures was founded in 1976 by H. DuBose Montgomery in Menlo Park, making it one of the oldest continuously active venture capital firms in Silicon Valley. The firm spent much of its history investing primarily in enterprise technology before shifting toward a more even split between consumer and enterprise bets by the 2010s. That range paid off in 2011, when partner Shawn Carolan led Menlo's $32 million Series B investment in Uber - a deal a16z had walked away from - valuing the fledgling ride-hailing startup at just $322 million. The bet became one of the most lucrative in the firm's history when a SoftBank-led investor group purchased roughly half of Menlo's Uber shares in 2018 for $973 million, a 93x return.",
    leadership: [
      { name: "H. DuBose Montgomery", role: "Founder (1976)", profileSlug: "h-dubose-montgomery" },
      { name: "Shawn Carolan", role: "Partner", profileSlug: "shawn-carolan" }
    ],
    timeline: [
      { year: "1976", event: "H. DuBose Montgomery founds Menlo Ventures in Menlo Park." },
      { year: "2002", event: "Shawn Carolan joins the firm as an associate." },
      { year: "2005", event: "Menlo becomes Siri's first investor, years before Apple's 2010 acquisition." },
      { year: "2011", event: "Leads a $32 million Series B investment in Uber, a deal a16z had passed on." },
      { year: "2018", event: "A SoftBank-led group purchases roughly half of Menlo's Uber shares for $973 million, a 93x return." },
      { year: "2019", event: "Uber goes public." }
    ],
    holdings: [
      { name: "Uber", ticker: "UBER", historicalPrice: null, price: 72.46 },
      { name: "Roku", ticker: "ROKU", historicalPrice: null, price: 154.08 }
    ]
  },
  {
    rank: 25,
    name: "Salesforce Ventures",
    sectors: ["AI", "Enterprise Software", "Fintech", "Cybersecurity"],
    signatureExit: "Vlocity's February 2020 acquisition by Salesforce itself for $1.33 billion - an unusually direct proof point, since Salesforce Ventures backed the industry-cloud software company before its own parent acquired it",
    slug: "salesforce-ventures",
    website: "https://salesforceventures.com",
    short: "Salesforce Ventures",
    founded: 2009,
    hq: "San Francisco, CA",
    aum: "$6B+ deployed capital",
    thesis: "Salesforce Ventures was founded in 2009 as Salesforce's venture platform, and its official framing is explicit about what it sells beyond capital: patient investing paired with privileged access to Salesforce's customers, partners, and product expertise. That platform capability isn't just marketing - the firm says its dedicated platform team has helped hundreds of portfolio companies with community building, brand amplification, and customer introductions. Salesforce Ventures has invested in more than 630 startups and deployed over $6 billion, supporting more than 200 IPOs and acquisitions, with a $1 billion commitment specifically earmarked for AI founders as of its 15-year retrospective.",
    leadership: [
      { name: "Paul Drews", role: "Managing Partner", profileSlug: "paul-drews" },
      { name: "John Somorjai", role: "President", profileSlug: "john-somorjai" },
      { name: "Ken Asada", role: "Partner & Head of Japan", profileSlug: "ken-asada" }
    ],
    timeline: [
      { year: "2009", event: "Salesforce founds Salesforce Ventures as its dedicated venture platform." },
      { year: "2020", event: "Salesforce acquires Vlocity, a Salesforce Ventures portfolio company, for $1.33 billion in February." },
      { year: "2021", event: "Salesforce Ventures makes a $75 million private placement in monday.com concurrent with its June IPO." },
      { year: "2024", event: "Marks 15 years with more than 630 startup investments, $6 billion+ deployed, and a $1 billion AI-founder commitment." }
    ],
    holdings: [
      { name: "DocuSign", ticker: "DOCU", historicalPrice: null, price: 52.91 },
      { name: "monday.com", ticker: "MNDY", historicalPrice: null, price: 94.29 },
       { name: "nCino", ticker: "NCNO", historicalPrice: null, price: 20.66 }

    ]
  },
  {
    rank: 25,
    name: "Lux Capital",
    sectors: ["Deep Tech", "AI", "Healthcare", "Defense Tech", "Clean Energy"],
    signatureExit: "Auris Health's 2019 acquisition by Johnson & Johnson for up to $6.1 billion - Lux first invested in the surgical robotics company in 2012, seven years before the deal",
    slug: "lux-capital",
    website: "https://www.luxcapital.com",
    short: "Lux",
    founded: 2000,
    hq: "New York, NY",
    aum: "$7B+",
    thesis: "Lux Capital was founded in 2000 by Josh Wolfe, Peter Hébert, and Robert Paull, and has spent more than two decades funding science- and engineering-heavy companies long before they look mainstream. What distinguishes the firm is its refusal to separate venture investing from frontier technical ambition: Lux's own materials treat hard science, difficult regulation, and long commercialization arcs as the price of the category rather than reasons to pass. That patience produced Auris Health, the surgical robotics company Johnson & Johnson acquired for up to $6.1 billion in 2019, seven years after Lux first invested, alongside early positions in Anduril, Recursion, and Hugging Face.",
    leadership: [
      { name: "Josh Wolfe", role: "Co-Founder & Managing Partner", profileSlug: "josh-wolfe" },
      { name: "Peter Hébert", role: "Co-Founder & Managing Partner", profileSlug: "peter-hebert" },
      { name: "Robert Paull", role: "Co-Founder", profileSlug: "robert-paull" }
    ],
    timeline: [
      { year: "2000", event: "Josh Wolfe, Peter Hébert, and Robert Paull found Lux Capital." },
      { year: "2012", event: "Lux invests in Auris Health, the surgical robotics company." },
      { year: "2016", event: "Lux invests in Recursion, an early bet on computational drug discovery." },
      { year: "2019", event: "Johnson & Johnson acquires Auris Health for up to $6.1 billion." },
      { year: "2021", event: "Multiple Lux-backed companies list publicly, including Aeva and Recursion." },
      { year: "2026", event: "Firm materials continue to cite $7 billion under management across AI, biotech, defense, energy, and robotics." }
    ],
    holdings: [
      { name: "Recursion", ticker: "RXRX", historicalPrice: null, price: 3.31 },
      { name: "Aeva", ticker: "AEVA", historicalPrice: null, price: 22.42 }
    ]
  },
  {
    rank: 26,
    name: "Redpoint Ventures",
    sectors: ["Consumer Internet", "Cloud Infrastructure", "SaaS", "Enterprise Software"],
    signatureExit: "Netflix - an early investor that backed the company years before streaming existed as a category",
    slug: "redpoint",
    website: "https://www.redpoint.com",
    short: "Redpoint",
    founded: 1999,
    hq: "Menlo Park, CA",
    aum: "$4.5B+",
    thesis: "Redpoint Ventures was founded in 1999 in Menlo Park by a group of experienced investors including Geoff Yang, Tim Haley, and John Walecka, several of whom had previously worked together at Institutional Venture Partners. The firm built its early reputation on Netflix, backing the company years before streaming existed as a category, and has since extended that pattern of early conviction into cloud infrastructure and SaaS, with investments in Twilio, Snowflake, Stripe, and HashiCorp.",
    leadership: [
      { name: "Geoff Yang", role: "Founding Partner", profileSlug: "geoff-yang" },
      { name: "Tim Haley", role: "Founding Partner", profileSlug: "tim-haley" },
      { name: "John Walecka", role: "Founding Partner", profileSlug: "john-walecka" }
    ],
    timeline: [
      { year: "1999", event: "A group of former IVP investors, including Geoff Yang and Tim Haley, found Redpoint Ventures." },
      { year: "1998", event: "Tim Haley joins Netflix's board of directors, a relationship that predates Redpoint's founding." },
      { year: "2002", event: "Netflix goes public, one of the firm's defining early wins." },
      { year: "2016", event: "Portfolio company Twilio goes public." },
      { year: "2020", event: "Portfolio company Snowflake goes public in one of the largest software IPOs on record." }
    ],
    holdings: [
      { name: "Netflix", ticker: "NFLX", historicalPrice: null, price: 68.20 },
      { name: "Twilio", ticker: "TWLO", historicalPrice: null, price: 206.78 },
      { name: "Snowflake", ticker: "SNOW", historicalPrice: null, price: 337.38 }
    ]
  },
  {
    rank: 27,
    name: "Crosslink Capital",
    sectors: ["AI", "Enterprise Software", "Consumer Internet", "Fintech", "Cloud Infrastructure"],
    signatureExit: "No single signature exit with a verified public dollar figure - Crosslink's track record instead runs through Alpha, its invite-only network of more than 2,000 founders, CEOs, and investors co-founded by General Partner Eric Chin in 2005, now in its third decade of connecting the firm's portfolio to the wider venture ecosystem",
    slug: "crosslink-capital",
    website: "https://www.crosslinkcapital.com",
    short: "Crosslink Capital",
    founded: 1989,
    hq: "Menlo Park, CA",
    aum: "$4.6B+",
    thesis: "Crosslink Capital was founded in 1989 and has spent 35 years investing in early-stage founders from pre-seed and seed through Series A, across enterprise, consumer, and vertical technology. The firm's clearest differentiator is Alpha, an invite-only network of more than 2,000 founders, CEOs, investors, and operators that General Partner Eric Chin co-founded in 2005 - now running more than forty annual events and functioning as a genuine deal-sourcing and founder-support engine rather than a marketing label. Crosslink closed its tenth flagship fund, Crosslink Ventures X, at $350 million in April 2024, the same size as its prior fund from January 2021, and now manages more than $4.6 billion.",
    leadership: [
   { name: "Michael Stark", role: "Partner & Founder", profileSlug: "michael-stark" },
      { name: "Eric Chin", role: "General Partner & Alpha Founder", profileSlug: "eric-chin" },
      { name: "Matt Bigge", role: "Partner", profileSlug: "matt-bigge" },
      { name: "Phil Boyer", role: "Partner", profileSlug: "phil-boyer" }
    ],
    timeline: [
      { year: "1989", event: "Michael Stark founds Crosslink Capital in Menlo Park." },
      { year: "2005", event: "General Partner Eric Chin co-founds Alpha, the firm's invite-only founder and investor network." },
      { year: "2021", event: "Closes its ninth flagship fund at $350 million in January." },
      { year: "2024", event: "Closes its tenth flagship fund, Crosslink Ventures X, at $350 million, marking the firm's 35th year." }
    ],
    holdings: []
  },
  {
    rank: 28,
    name: "Breakthrough Energy Ventures",
    sectors: ["Climate", "Energy", "Agriculture", "Industrial Technology"],
    signatureExit: "No confirmed public exit directly attributable to BEV as an investor - the fund instead measures itself by an unusually specific mandate: every company must have credible potential to eliminate at least 1% of global annual greenhouse-gas emissions",
    slug: "breakthrough-energy-ventures",
    website: "https://breakthroughenergy.org/what-we-do/breakthrough-energy-ventures/",
    short: "Breakthrough Energy Ventures",
    founded: 2015,
    hq: "Kirkland, WA",
    aum: "$3.5B+ committed capital (across three funds)",
    thesis: "Breakthrough Energy Ventures was founded by Bill Gates in 2015, backed by a roster of billionaire co-investors including Jeff Bezos, Jack Ma, Richard Branson, and Masayoshi Son, and launched with an explicit rejection of typical venture timelines: the fund operates on a 20-year investment horizon, far longer than the standard 10-year fund life, on the theory that hard climate technology genuinely needs that patience to reach commercial scale. Its investment bar is unusually specific for a venture fund - every company must have credible potential to eliminate at least 1% of global annual greenhouse-gas emissions - and its more than 110 portfolio companies span electricity, transportation, manufacturing, buildings, food, and agriculture. BEV has raised more than $3.5 billion in committed capital across three funds since 2016, positioning it as the largest and most institutionally backed climate-focused venture platform in the world.",
    leadership: [
      { name: "Carmichael Roberts", role: "Investment Committee Co-Lead", profileSlug: "carmichael-roberts" },
      { name: "Eric Toone", role: "Investment Committee Co-Lead", profileSlug: "eric-toone" },
      { name: "Rodi Guidero", role: "Executive Director", profileSlug: "rodi-guidero" }
    ],
    timeline: [
      { year: "2015", event: "Bill Gates founds Breakthrough Energy Ventures." },
      { year: "2016", event: "BEV I closes at $1 billion in December, backed by around 20 billionaire co-investors." },
      { year: "2021", event: "BEV II closes at $1.25 billion." },
      { year: "2023", event: "Launches BEV III in July, targeting roughly $1 billion." },
      { year: "2024", event: "BEV III reaches $839 million, the largest climate fund raised that year; total committed capital across all funds surpasses $3.5 billion." }
    ],
    holdings: []
  },
  {
    rank: 27,
    name: "Balderton Capital",
    sectors: ["AI", "Fintech", "Enterprise Software", "Cybersecurity", "Healthcare"],
    signatureExit: "MySQL's 2008 acquisition by Sun Microsystems for approximately $1 billion - an early proof point for European open-source software investing",
    slug: "balderton-capital",
    website: "https://www.balderton.com",
    short: "Balderton",
    founded: 2000,
    hq: "London, UK",
    aum: "$7B+ (raised across eight funds; $1.3B new early/growth funds, 2024)",
    thesis: "Balderton Capital has stayed tightly focused on European-founded technology companies since 2000, building enough follow-on capacity over 25 years to avoid outsourcing the growth-stage relationship to U.S. crossover funds. The firm explicitly supports founders from Seed to IPO through separate early and growth vehicles, backed by structured platform support across talent, marketing, finance, legal, and ESG. Its 2024 raise of $1.3 billion in new early and growth capital confirmed continued LP appetite for a Europe-only franchise at real scale, more than two decades after MySQL's $1 billion acquisition by Sun Microsystems gave the firm one of European venture's first landmark exits.",
    leadership: [
      { name: "Bernard Liautaud", role: "Managing Partner", profileSlug: "bernard-liautaud" },
      { name: "Suranga Chandratillake", role: "General Partner", profileSlug: "suranga-chandratillake" },
      { name: "Daniel Waterhouse", role: "General Partner", profileSlug: "daniel-waterhouse" },
      { name: "Rana Yared", role: "General Partner", profileSlug: "rana-yared" }
    ],
    timeline: [
      { year: "2000", event: "Balderton Capital is founded in London." },
      { year: "2008", event: "Portfolio company MySQL is acquired by Sun Microsystems for approximately $1 billion." },
      { year: "2014", event: "Suranga Chandratillake joins as General Partner." },
      { year: "2021", event: "Raises a $600 million early-stage fund." },
      { year: "2024", event: "Announces $1.3 billion in new early and growth funds." },
      { year: "2025", event: "Marks the firm's 25-year history." }
    ],
    holdings: [
      { name: "SOPHiA Genetics", ticker: "SOPH", historicalPrice: null, price: 7.62 },
      { name: "Flywire", ticker: "FLYW", historicalPrice: null, price: 18.24 }
    ]
  },
  {
    rank: 28,
    name: "5Y Capital",
    sectors: ["AI", "Consumer Internet", "Enterprise Software", "Deep Tech"],
    signatureExit: "Xiaomi's 2018 Hong Kong Stock Exchange IPO - 5Y (then Morningside) was Xiaomi's first institutional backer, realizing a reported 800x return on its original investment as the company grew into one worth roughly $170 billion",
    slug: "5y-capital",
    website: "https://www.5ycap.com",
    short: "5Y Capital",
    founded: 2008,
    hq: "Shanghai, China",
    aum: "$6B",
    thesis: "5Y Capital was founded in 2008 by Richard Liu and Ken Shi, both former Morningside Group investment professionals who spun out their own China-focused technology fund during the global financial crisis, operating under the Morningside name with the blessing of the Chan family, the Hong Kong property dynasty behind Morningside Group. The firm rebranded from Morningside Venture Capital to 5Y Capital in October 2020, taking its new name from Wuyuan Road, the location of its Shanghai headquarters. Its defining outcome came early: 5Y was the first institutional investor in Xiaomi, and by the time the smartphone maker completed its 2018 Hong Kong IPO, that stake had returned a reported 800 times its original investment - one of the largest single venture outcomes in Chinese technology history, alongside a later $30 billion return from Kuaishou's 2021 Nasdaq listing.",
    leadership: [
      { name: "Richard Liu", role: "Founding Partner", profileSlug: "richard-liu-5y" },
      { name: "Ken Shi", role: "Founding Partner", profileSlug: "ken-shi" }
    ],
    timeline: [
      { year: "1999", event: "Richard Liu and Ken Shi join the Morningside Group after attending China Europe International Business School together." },
      { year: "2008", event: "The two spin out Morningside Venture Capital, backed by the Chan family as anchor investor, amid the global financial crisis." },
      { year: "2018", event: "Xiaomi, the firm's first institutional investment, completes its Hong Kong IPO." },
      { year: "2020", event: "Rebrands from Morningside Venture Capital to 5Y Capital in October." },
      { year: "2021", event: "Kuaishou's Nasdaq listing returns a reported $30 billion; Xpeng and Agora also go public the same year." }
    ],
    holdings: [
      { name: "Xiaomi", ticker: "1810.HK", historicalPrice: null, price: null },
      { name: "XPeng", ticker: "XPEV", historicalPrice: null, price: 11.78 }
    ]
  },
  {
    rank: 28,
    name: "FirstMark Capital",
    sectors: ["Enterprise Software", "Consumer", "AI", "Fintech", "Healthcare"],
    signatureExit: "Pinterest's 2019 NYSE IPO - Co-Founder Rick Heitzmann personally wrote the company's seed check, years before it went public",
    slug: "firstmark-capital",
    website: "https://firstmark.com",
    short: "FirstMark",
    founded: 2008,
    hq: "New York, NY",
    aum: "$3.5B (committed capital)",
    thesis: "FirstMark Capital was founded in 2008 by Rick Heitzmann and Amish Jani as a spinoff from Pequot Capital Management, built on a conviction that looked genuinely contrarian at the time: that New York, not just Silicon Valley, would become a dominant hub for technology startups. Both founders had operator or growth-investing credibility before founding the firm - Heitzmann built and sold First Advantage, while Jani came from Pequot Ventures - and they've since built one of venture capital's most developed platform and community stacks, including Data Driven NYC, a community with more than 20,000 members, and the widely-cited annual MAD (Machine Learning, AI, and Data) Landscape report, now in its 11th year. That combination of early conviction and founder support produced Pinterest, where Heitzmann wrote the seed check, and Shopify, where Jani personally led the Series A investment through IPO, alongside DraftKings, Airbnb, Riot Games, and StubHub. The firm has raised 10 funds totaling $3.5 billion in committed capital.",
    leadership: [
      { name: "Rick Heitzmann", role: "Co-Founder & Partner", profileSlug: "rick-heitzmann" },
      { name: "Amish Jani", role: "Co-Founder & Partner", profileSlug: "amish-jani" },
      { name: "Matt Turck", role: "Partner", profileSlug: "matt-turck" },
      { name: "Adam Nelson", role: "Partner", profileSlug: "adam-nelson" }
    ],
    timeline: [
      { year: "2008", event: "Rick Heitzmann and Amish Jani found FirstMark Capital in New York, spinning out from Pequot Capital Management." },
      { year: "2010s", event: "Backs Pinterest, Shopify, DraftKings, Airbnb, Riot Games, and StubHub at early stages." },
      { year: "2019", event: "Pinterest goes public on the NYSE." },
      { year: "2020", event: "Airbnb and DraftKings both go public." },
      { year: "2024", event: "Firm reports $3.5 billion in committed capital across 10 funds." }
    ],
    holdings: [
      { name: "Pinterest", ticker: "PINS", historicalPrice: null, price: 23.50 },
      { name: "DraftKings", ticker: "DKNG", historicalPrice: null, price: 25.42 },
      { name: "Airbnb", ticker: "ABNB", historicalPrice: null, price: 141.10 }
    ]
  },
  {
    rank: 27,
    name: "Flagship Pioneering",
    sectors: ["Biotech", "Healthcare", "Climate", "Life Sciences"],
    signatureExit: "Moderna's December 2018 Nasdaq IPO, which raised approximately $604 million at a roughly $7.5 billion valuation - one of the largest biotech IPOs ever at the time, years before Moderna became a household name during the COVID-19 pandemic",
    slug: "flagship-pioneering",
    website: "https://www.flagshippioneering.com",
    short: "Flagship Pioneering",
    founded: 2000,
    hq: "Cambridge, MA",
    aum: "$3.4B (single fund, 2021); has raised multiple funds since 2000",
    thesis: "Flagship Pioneering was founded in 2000 by Noubar Afeyan on a model most venture firms don't attempt: rather than only investing in outside startups, Flagship invents companies from scratch internally, pairing entrepreneurially-minded scientists with a structured 'What if?' process that iterates toward genuinely first-in-category bioplatform companies. That approach has produced more than 100 scientific ventures worth over $100 billion in aggregate value, thousands of patents, and more than 50 drugs in clinical development. Its best-known creation is Moderna, which Afeyan co-founded in 2010 and took public on the Nasdaq in December 2018 - years before its mRNA platform became central to the global COVID-19 vaccine response.",
    leadership: [
      { name: "Noubar Afeyan", role: "Founder & CEO", profileSlug: "noubar-afeyan" },
      { name: "Ignacio Martinez", role: "General Partner", profileSlug: "ignacio-martinez" },
      { name: "Geoffrey von Maltzahn", role: "General Partner", profileSlug: "geoffrey-von-maltzahn" }
    ],
    timeline: [
      { year: "2000", event: "Noubar Afeyan founds Flagship Pioneering in Cambridge." },
      { year: "2010", event: "Afeyan co-founds Moderna within Flagship's venture creation process." },
      { year: "2018", event: "Moderna goes public on the Nasdaq in December, raising approximately $604 million." },
      { year: "2020", event: "Moderna's COVID-19 vaccine is authorized by the FDA in December." },
      { year: "2021", event: "Flagship raises $3.4 billion for a new fund in June, one of the largest biotech venture funds ever raised." }
    ],
    holdings: [
      { name: "Moderna", ticker: "MRNA", historicalPrice: null, price: 63.65 }
    ]
  },
  {
    rank: 29,
    name: "F-Prime Capital",
    sectors: ["Biotech", "Healthcare", "Enterprise Software", "Fintech"],
    signatureExit: "Beam Therapeutics' 2020 Nasdaq IPO - President Stephen Knight personally co-founded the gene-editing company and has served on its board since 2017",
    slug: "f-prime-capital",
    website: "https://www.fprimecapital.com",
    short: "F-Prime Capital",
    founded: 1970,
    hq: "Cambridge, MA",
    aum: "$4.8B",
    thesis: "F-Prime Capital is the venture capital arm of Fidelity Investments, operating for more than 50 years with a structural advantage almost no other firm on this page shares: it invests without any pressure from outside fundraising, letting it back entrepreneurs on a genuinely long time horizon. That freedom has produced an unusually hands-on, company-formation-heavy model - F-Prime has co-created more than 30 companies from scratch, including Beam Therapeutics, Denali Therapeutics, and Innovent Biologics, working directly with academic researchers to spin science into standalone businesses rather than only backing existing startups. The firm invests stage-agnostically across healthcare (therapeutics, medtech, health IT) and technology (enterprise software, fintech, frontier tech), and now manages approximately $4.8 billion across a global portfolio of more than 300 companies.",
    leadership: [
      { name: "Stephen Knight", role: "President & Senior Managing Partner", profileSlug: "stephen-knight" },
      { name: "Carl Byers", role: "Team Member", profileSlug: "carl-byers" },
      { name: "David Jegen", role: "Team Member", profileSlug: "david-jegen" }
    ],
    timeline: [
      { year: "2003", event: "Stephen Knight joins F-Prime Capital, then known as Fidelity Biosciences." },
      { year: "2015", event: "Rebrands from Fidelity Biosciences to F-Prime Capital." },
      { year: "2017", event: "Co-founds Denali Therapeutics; Denali completes its Nasdaq IPO in December." },
      { year: "2020", event: "Beam Therapeutics, co-founded by Stephen Knight, completes its Nasdaq IPO." },
      { year: "2026", event: "AUM reaches approximately $4.8 billion across a portfolio of more than 300 companies worldwide." }
    ],
    holdings: [
      { name: "Beam Therapeutics", ticker: "BEAM", historicalPrice: null, price: 26.51 },
       { name: "Denali Therapeutics", ticker: "DNLI", historicalPrice: null, price: 24.82 }

    ]
  },
  {
    rank: 30,
    name: "Energy Impact Partners",
    sectors: ["Energy", "Climate", "Grid Technology", "Cybersecurity"],
    signatureExit: "Accenture's 2025 acquisition of a majority stake in Dragos at a $3.2 billion valuation - EIP partnered with the industrial cybersecurity company in 2017, when the category was still emerging",
    slug: "energy-impact-partners",
    website: "https://www.energyimpactpartners.com",
    short: "Energy Impact Partners",
    founded: 2015,
    hq: "New York, NY",
    aum: "$4.5B+",
    thesis: "Energy Impact Partners was founded in 2015 by Hans Kobler, who spent his earlier career at Bain & Company, then GE - where he pioneered the company's strategic investment model - before founding Digital Power Capital and co-founding ICx Technologies, which he led through a Nasdaq IPO and eventual strategic sale. That operator background shaped EIP's most distinctive structural feature: the fund is a collaborative coalition backed by more than 30 global energy and industrial companies, who invest alongside EIP and give portfolio companies direct commercial access to utilities and industrial buyers that might otherwise take years to reach. The firm's 2017 partnership with industrial cybersecurity company Dragos, made when the category was still nascent, became one of its clearest proof points once Accenture acquired a majority stake in the company at a $3.2 billion valuation, and EIP now manages more than $4.5 billion across the energy transition, smart infrastructure, and climate technology.",
    leadership: [
      { name: "Hans Kobler", role: "Founder & Managing Partner", profileSlug: "hans-kobler" },
      { name: "Lindsay Luger", role: "Co-Founder & Partner", profileSlug: "lindsay-luger" },
      { name: "Joshua Feldman", role: "Co-Founder, Partner, General Counsel & COO", profileSlug: "joshua-feldman" }
    ],
    timeline: [
      { year: "2015", event: "Hans Kobler founds Energy Impact Partners in New York, backed by a coalition of global energy companies." },
      { year: "2017", event: "EIP partners with industrial cybersecurity company Dragos." },
      { year: "2023", event: "Firm reports more than $2 billion under management, backed by over 30 global energy companies." },
      { year: "2025", event: "Accenture acquires a majority stake in Dragos at a $3.2 billion valuation." },
      { year: "2026", event: "Firm AUM reaches more than $4.5 billion." }
    ],
    holdings: []
  },
  {
    rank: 29,
    name: "JAFCO Group",
    sectors: ["Enterprise Software", "Fintech", "Robotics", "Healthcare"],
    signatureExit: "Mercari's 2018 Tokyo Stock Exchange IPO - one of over 1,041 portfolio IPOs JAFCO has facilitated since its founding, more than any other Japanese venture firm",
    slug: "jafco-group",
    website: "https://www.jafco.co.jp",
    short: "JAFCO",
    founded: 1973,
    hq: "Tokyo, Japan",
    aum: "$6.8B (¥1 trillion, 2025)",
    thesis: "JAFCO Group was founded in April 1973 as Japan Associated Finance Co., a joint venture between Nomura Securities, Nippon Life Insurance, and Sanwa Bank, at a time when the American concept of venture capital was still largely unknown in Japan. Now considered both the oldest and largest independent venture capital firm in the country, JAFCO operates two distinct strategies - venture investment for startups and buyout investment for revitalizing established small and mid-sized companies - and is itself publicly listed on the Tokyo Stock Exchange, an unusual structure for a firm whose core business is investing in other companies. Since its founding, JAFCO has invested in more than 4,246 companies and helped over 1,041 of them reach IPO, a track record with no real parallel among Japanese venture firms, and now manages roughly $6.8 billion across more than 100 funds.",
    leadership: [
      { name: "Shinichi Fuki", role: "President & CEO", profileSlug: "shinichi-fuki" }
    ],
    timeline: [
      { year: "1973", event: "Nomura Securities, Nippon Life Insurance, and Sanwa Bank jointly establish Japan Associated Finance Co. in Tokyo." },
      { year: "1982", event: "Establishes JAFCO America Ventures, its first international expansion." },
      { year: "2018", event: "Portfolio company Mercari goes public on the Tokyo Stock Exchange." },
      { year: "2025", event: "Total assets under management reach approximately $6.8 billion, with cumulative IPOs surpassing 1,041." }
    ],
    holdings: [
      { name: "Mercari", ticker: "4385.T", historicalPrice: null, price: null },
      { name: "Cybozu", ticker: "4776.T", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 29,
    name: "Cisco Investments",
    sectors: ["AI", "Cybersecurity", "Cloud Infrastructure", "Enterprise Software"],
    signatureExit: "HashiCorp's December 2021 Nasdaq IPO at a roughly $14 billion valuation - Cisco's 2021 year-in-review named it alongside Confluent and GitLab as portfolio IPO milestones; HashiCorp was later taken private in IBM's February 2025 acquisition",
    slug: "cisco-investments",
    website: "https://www.ciscoinvestments.com",
    short: "Cisco Investments",
    founded: 1993,
    hq: "San Jose, CA",
    aum: "$1B AI Fund (2024); historically ~$250-300M deployed annually",
    thesis: "Cisco Investments has operated as Cisco's corporate venture arm since 1993, and its own language is direct about what sets it apart: investing is 'part of the company, and it's strategic,' meaning capital comes bundled with access to Cisco's infrastructure, go-to-market channels, and enterprise customer relationships. That strategy sharpened further in June 2024 with the launch of a dedicated $1 billion AI fund focused on secure and trustworthy AI, adding names like Cohere and Scale AI to a portfolio that already spanned networking, observability, and security. The clearest proof of the model's payoff came in Cisco's 2021 year-in-review, which named HashiCorp, Confluent, and GitLab together as portfolio companies that went public that year.",
    leadership: [
      { name: "Derek Idemoto", role: "Senior Vice President", profileSlug: "derek-idemoto" },
      { name: "Noah Yago", role: "Vice President", profileSlug: "noah-yago" }
    ],
    timeline: [
      { year: "1993", event: "Cisco founds Cisco Investments as one of the earliest corporate venture arms in technology." },
      { year: "2018", event: "Cisco publicly discloses it invests roughly $250-300 million annually across direct and fund investments." },
      { year: "2021", event: "Portfolio companies HashiCorp, Confluent, and GitLab all go public." },
      { year: "2024", event: "Launches a dedicated $1 billion AI fund focused on secure and trustworthy AI." },
      { year: "2025", event: "HashiCorp, one of the firm's signature IPO outcomes, is acquired by IBM and taken private." }
    ],
    holdings: [
    { name: "GitLab", ticker: "GTLB", historicalPrice: null, price: 43.35 }
    ]
  },
  {
    rank: 27,
    name: "CRV",
    sectors: ["Consumer Internet", "Marketplaces", "Enterprise Software", "Cybersecurity"],
    signatureExit: "DoorDash's December 2020 IPO at a $39 billion valuation - CRV led the company's seed round in 2013, when it was just nine weeks old",
    slug: "crv",
    website: "https://www.crv.com",
    short: "CRV",
    founded: 1970,
    hq: "Palo Alto, CA",
    aum: "$4.3B+",
    thesis: "CRV, originally Charles River Ventures, was founded in 1970 in Boston to commercialize research coming out of MIT, with help from Dick Burnes, founder of the semiconductor testing company Teradyne. Over more than five decades, the firm relocated its headquarters to Palo Alto to be closer to Silicon Valley and built a reputation for conviction and speed in early-stage consumer and enterprise deals. That pattern held true in 2013, when partner Saar Gur led CRV's seed investment in DoorDash - a food delivery company just nine weeks old at the time - years before its 2020 IPO valued it at $39 billion.",
    leadership: [
      { name: "Dick Burnes", role: "Co-Founder (1970)", profileSlug: "dick-burnes" },
      { name: "Saar Gur", role: "General Partner", profileSlug: "saar-gur" }
    ],
    timeline: [
      { year: "1970", event: "Dick Burnes, founder of Teradyne, helps found Charles River Ventures in Boston to commercialize MIT research." },
      { year: "2000s", event: "Relocates headquarters to Palo Alto, California, to be closer to Silicon Valley." },
      { year: "2007", event: "Saar Gur joins as a General Partner." },
      { year: "2013", event: "Leads a seed investment in DoorDash, then just nine weeks old." },
      { year: "2014", event: "Rebrands from Charles River Ventures to CRV." },
      { year: "2020", event: "DoorDash goes public at a $39 billion valuation." }
    ],
    holdings: [
      { name: "DoorDash", ticker: "DASH", historicalPrice: 170.65, price: 175.00 },
      { name: "Amgen", ticker: "AMGN", historicalPrice: null, price: 417.84 }
    ]
  },
  {
    rank: 28,
    name: "True Ventures",
    sectors: ["Consumer", "Hardware", "Media", "AI"],
    signatureExit: "Fitbit's 2015 IPO - True Ventures was among Fitbit's first institutional investors, backing the company when it looked like little more than a pedometer in a world with no wearables market yet",
    slug: "true-ventures",
    website: "https://www.trueventures.com",
    short: "True",
    founded: 2005,
    hq: "Palo Alto, CA",
    aum: "$3.8B+",
    thesis: "True Ventures was founded in 2005 by Jon Callaghan and Phil Black, both veterans of Summit Partners, built around a deliberate philosophy of maximizing risk at the earliest stages - backing founders before their markets or categories even exist. That approach defined the firm's investment in Fitbit, made when the device looked like little more than a pedometer in a world with no wearables market, and carried through to early bets on Peloton, Ring, and HashiCorp. True has since backed more than 500 companies across seed and Series A stages, with a hands-on approach centered on its annual Founder Camp.",
    leadership: [
      { name: "Jon Callaghan", role: "Co-Founder & Managing Partner", profileSlug: "jon-callaghan" },
      { name: "Phil Black", role: "Co-Founder", profileSlug: "phil-black" }
    ],
    timeline: [
      { year: "2005", event: "Jon Callaghan and Phil Black found True Ventures in Palo Alto." },
      { year: "2015", event: "Portfolio company Fitbit goes public; Callaghan serves as Lead Independent Director." },
      { year: "2019", event: "Portfolio company Peloton goes public." },
      { year: "2021", event: "Fitbit is acquired by Google." },
      { year: "2020s", event: "Expands deep into AI, with more than 85 AI-focused investments." }
    ],
    holdings: [
      { name: "Peloton", ticker: "PTON", historicalPrice: null, price: 5.56 },
      { name: "Sweetgreen", ticker: "SG", historicalPrice: null, price: 6.06 }
    ]
  },
  {
    rank: 28,
    name: "DCVC",
    sectors: ["Deep Tech", "Climate", "Healthcare", "Defense Tech", "AI Infrastructure"],
    signatureExit: "Blue River Technology's 2017 acquisition by John Deere for $305 million - an agricultural robotics bet that landed years before machine vision became standard in farming equipment",
    slug: "dcvc",
    website: "https://www.dcvc.com",
    short: "DCVC",
    founded: 2011,
    hq: "Palo Alto, CA",
    aum: "$4B+",
    thesis: "DCVC, originally founded as Data Collective by Zachary Bogue and Matt Ocko, describes itself as the world's largest pure-play deep-tech venture firm, with more than $4 billion under management. Its sector map is unusually crisp for a generalist-sized fund - deep tech, climate, human health, defense and security, space, advanced computing, and industrial transformation - and it backs companies applying computational approaches to industries that are genuinely hard to disrupt. The cleanest signature outcome is Blue River Technology, the agricultural robotics company John Deere acquired for $305 million in 2017; the firm's public bench since has included Planet Labs, Rocket Lab, Recursion, and SentinelOne.",
    leadership: [
      { name: "Zachary Bogue", role: "Co-Founder & Managing Partner", profileSlug: "zachary-bogue" },
      { name: "Matt Ocko", role: "Co-Founder & Managing Partner", profileSlug: "matt-ocko" }
    ],
    timeline: [
      { year: "2011", event: "Zachary Bogue and Matt Ocko found the firm as Data Collective in Palo Alto." },
      { year: "2017", event: "Portfolio company Blue River Technology is acquired by John Deere for $305 million." },
      { year: "2021", event: "Several DCVC-backed companies reach the public markets, including Recursion and SentinelOne." },
      { year: "2026", event: "DCVC publishes its inaugural Deep Tech Opportunities report alongside fresh fund capital." }
    ],
    holdings: [
      { name: "Planet Labs", ticker: "PL", historicalPrice: null, price: 24.75 },
       { name: "Rocket Lab", ticker: "RKLB", historicalPrice: null, price: 80.1 },
       { name: "Recursion", ticker: "RXRX", historicalPrice: null, price: 3.31 },
       { name: "SentinelOne", ticker: "S", historicalPrice: null, price: 23.84 }

    ]
  },
  {
    rank: 30,
    name: "Greylock Partners",
    sectors: ["Enterprise Software", "Consumer Internet", "Cybersecurity", "AI"],
    signatureExit: "LinkedIn's 2011 IPO, followed by Microsoft's $26.2 billion acquisition of the company in 2016",
    slug: "greylock",
    website: "https://greylock.com",
    short: "Greylock",
    founded: 1965,
    hq: "Menlo Park, CA",
    aum: "$3.5B+",
    thesis: "Greylock Partners is one of the oldest venture capital firms in the world, founded in 1965 in Cambridge, Massachusetts by Bill Elfers and Dan Gregory, two investors who had cut their teeth at American Research and Development Corporation - one of the very first venture capital firms ever created. After more than four decades on the East Coast, Greylock relocated its headquarters to Silicon Valley in 2009, the same year it added LinkedIn co-founder Reid Hoffman as a partner. The firm focuses on early-stage consumer internet and enterprise software companies, with a six-decade history spanning from early biotech investments to today's AI-first startups.",
    leadership: [
      { name: "Bill Elfers", role: "Co-Founder (1965)", profileSlug: "bill-elfers" },
      { name: "Dan Gregory", role: "Co-Founder (1965)", profileSlug: "dan-gregory" },
      { name: "Reid Hoffman", role: "Partner", profileSlug: "reid-hoffman" }
    ],
    timeline: [
      { year: "1965", event: "Bill Elfers and Dan Gregory found Greylock in Cambridge, Massachusetts, with $10 million committed by six families." },
      { year: "1999", event: "Opens its first Silicon Valley office." },
      { year: "2009", event: "Relocates headquarters to Menlo Park, California; LinkedIn co-founder Reid Hoffman joins as a partner." },
      { year: "2011", event: "Portfolio company LinkedIn goes public." },
      { year: "2016", event: "Microsoft acquires LinkedIn for $26.2 billion." }
    ],
    holdings: [
      { name: "Workday", ticker: "WDAY", historicalPrice: null, price: 144.78 },
      { name: "Palo Alto Networks", ticker: "PANW", historicalPrice: null, price: 341.59 },
  { name: "Arista Networks", ticker: "ANET", historicalPrice: null, price: 203.62 }
    ]
  },
  {
    rank: 31,
    name: "Craft Ventures",
    sectors: ["SaaS", "Marketplaces", "AI", "Cloud/Infrastructure", "Fintech"],
    signatureExit: "Reddit's 2024 IPO on NYSE - Craft backed the company in 2017, years before its public debut",
    slug: "craft-ventures",
    website: "https://www.craftventures.com",
    short: "Craft Ventures",
    founded: 2017,
    hq: "San Francisco, CA",
    aum: "$3.3B+",
    thesis: "David Sacks was PayPal's first product leader and later its COO, part of the group later nicknamed the 'PayPal Mafia,' before founding Yammer, an enterprise social networking company he built and sold to Microsoft for $1.2 billion. He co-founded Craft Ventures in 2017 with Bill Lee, built around a deliberately operator-led model that pairs capital with hands-on go-to-market and talent support for B2B software founders. The firm has grown to $3.3 billion in total assets under management following its 2023 Craft IV and Growth II funds, and its early conviction in Reddit - invested in 2017, years before its 2024 IPO - has become one of its most visible public outcomes.",
    leadership: [
      { name: "David Sacks", role: "Partner & Co-Founder", profileSlug: "david-sacks" },
      { name: "Bill Lee", role: "Co-Founder & Venture Partner", profileSlug: "bill-lee" }
    ],
    timeline: [
      { year: "2017", event: "David Sacks and Bill Lee found Craft Ventures in San Francisco." },
      { year: "2018", event: "Closes its inaugural $350 million fund." },
      { year: "2019", event: "Closes its second fund at $500 million." },
      { year: "2021", event: "Craft III and Growth I close at $1.12 billion combined, bringing total AUM to $2 billion." },
      { year: "2023", event: "Craft IV and Growth II close at $1.32 billion combined, bringing total AUM to $3.3 billion." },
      { year: "2024", event: "Portfolio company Reddit goes public on NYSE." }
    ],
    holdings: [
      { name: "Reddit", ticker: "RDDT", historicalPrice: null, price: 158.12 },
      { name: "Uber", ticker: "UBER", historicalPrice: null, price: 72.46 },
      { name: "Twilio", ticker: "TWLO", historicalPrice: null, price: 206.78 }
    ]
  },
  {
    rank: 32,
    name: "Initialized Capital",
    sectors: ["Enterprise Software", "AI", "Infrastructure", "Consumer", "Crypto", "Healthcare", "Deep Tech", "Mobility", "Cybersecurity", "Climate"],
    signatureExit: "Coinbase's 2021 direct listing - Initialized was an early backer of the exchange, which carried a market capitalization of roughly $41.9 billion by July 2026",
    slug: "initialized-capital",
    website: "https://initialized.com",
    short: "Initialized",
    founded: 2011,
    hq: "San Francisco, CA",
    aum: "$3.2B",
    thesis: "Initialized Capital was founded in 2011 by Alexis Ohanian, Garry Tan, and Harj Taggar, and has stayed unusually literal about what it does: the firm's own positioning is that it 'sets the standard in seed,' writing first checks across enterprise SaaS, AI, infrastructure, sustainability, hard tech, health, consumer, and crypto. It raised a $125 million seed fund in 2016 and had grown into a roughly $3.2 billion platform by the time Brett Gibson and Jen Wolf took over as managing partners in 2022. Its flagship public winner is Coinbase, alongside Instacart, Opendoor, and Reddit - an unusually high public-exit rate for a firm that deliberately stays seed-first rather than following its winners up the stack.",
    leadership: [
      { name: "Brett Gibson", role: "Managing Partner", profileSlug: "brett-gibson" },
      { name: "Jen Wolf", role: "Managing Partner", profileSlug: "jen-wolf" },
      { name: "Garry Tan", role: "Co-Founder", profileSlug: "garry-tan" },
      { name: "Alexis Ohanian", role: "Co-Founder", profileSlug: "alexis-ohanian" },
      { name: "Harj Taggar", role: "Co-Founder", profileSlug: "harj-taggar" }
    ],
    timeline: [
      { year: "2011", event: "Alexis Ohanian, Garry Tan, and Harj Taggar found Initialized Capital in San Francisco." },
      { year: "2016", event: "Announces a new $125 million seed fund." },
      { year: "2017", event: "Brett Gibson joins the investment team." },
      { year: "2021", event: "Coinbase goes public via direct listing." },
      { year: "2022", event: "Brett Gibson and Jen Wolf become managing partners; the firm is described as a $3.2 billion platform." }
    ],
    holdings: [
      { name: "Coinbase", ticker: "COIN", historicalPrice: 257.21, price: 161.00 },
      { name: "Instacart", ticker: "CART", historicalPrice: null, price: 45.82 },
      { name: "Opendoor", ticker: "OPEN", historicalPrice: null, price: 3.65 },
      { name: "Reddit", ticker: "RDDT", historicalPrice: null, price: 158.12 }
    ]
  },
  {
    rank: 33,
    name: "Mayfield",
    sectors: ["AI", "Enterprise Software", "Semiconductors/Deep Tech", "Cybersecurity", "Human Health"],
    signatureExit: "Lyft's 2019 IPO - one of Mayfield's most recognizable public outcomes, still held in the firm's portfolio today",
    slug: "mayfield",
    website: "https://www.mayfield.com",
    short: "Mayfield",
    founded: 1969,
    hq: "Menlo Park, CA",
    aum: "$3B+",
    thesis: "Mayfield was founded in 1969, making it one of the oldest continuously operating venture capital firms in the world, with roots tracing directly to the founders of Fairchild Semiconductor. Navin Chaddha, a three-time entrepreneur who took iBeam Broadcasting public before joining Mayfield as Managing Partner in 2006, has led the firm through a 'people first' philosophy that prioritizes backing founders at the inception stage, before the broader market believes in an idea. That approach has produced an early stake in Lyft, still one of the firm's most recognizable public outcomes, alongside HashiCorp and Poshmark. Mayfield closed its Mayfield XVII and Select III funds in 2023 at $955 million combined, bringing total assets under management to $3 billion, and has since launched a dedicated $250 million 'AI Start' seed vehicle for AI-first founders.",
    leadership: [
      { name: "Navin Chaddha", role: "Managing Partner", profileSlug: "navin-chaddha" }
    ],
    timeline: [
      { year: "1969", event: "Mayfield is founded in Menlo Park, with early roots tracing to Fairchild Semiconductor's founders." },
      { year: "2006", event: "Navin Chaddha joins Mayfield as Managing Partner after founding and exiting three companies." },
      { year: "2018", event: "Mayfield celebrates 50 years of investing." },
      { year: "2019", event: "Portfolio company Lyft goes public." },
      { year: "2023", event: "Mayfield XVII and Select III close at $955 million combined, bringing total AUM to $3 billion." },
      { year: "2023", event: "Launches a dedicated $250 million 'AI Start' seed fund for AI-first founders." }
    ],
    holdings: [
     { name: "Lyft", ticker: "LYFT", historicalPrice: null, price: 17.13 }
    ]
  },
  {
    rank: 33,
    name: "Pitango Venture Capital",
    sectors: ["Enterprise Software", "Fintech", "Cybersecurity", "Healthcare", "AI"],
    signatureExit: "CyberMDX's February 2022 acquisition by ForeScout Technologies - one of more than 85 exits across Pitango's 250-plus portfolio companies since 1993",
    slug: "pitango-venture-capital",
    website: "https://www.pitango.com",
    short: "Pitango",
    founded: 1993,
    hq: "Herzliya, Israel",
    aum: "$3B",
    thesis: "Pitango Venture Capital was founded in 1993 as Polaris Venture Capital by Rami Kalish, joined three years later by Chemi Peres, and rebranded to its current name in 2001. Now Israel's largest and longest-standing venture capital firm, Pitango operates through three dedicated funds - Pitango First for early-stage bets, Pitango Growth for scaling companies, and Pitango HealthTech for digital health, medical devices, and biotechnology - giving it a genuinely full-lifecycle presence in Israeli tech rare among its peers. The firm has invested in more than 250 companies since founding, with over 85 reaching a public listing or acquisition, and now manages $3 billion across 13 funds.",
    leadership: [
      { name: "Chemi Peres", role: "Co-Founder & Managing General Partner", profileSlug: "chemi-peres" },
      { name: "Rami Kalish", role: "Co-Founder & Managing Partner", profileSlug: "rami-kalish" },
      { name: "Aaron Mankovski", role: "Partner", profileSlug: "aaron-mankovski" }
    ],
    timeline: [
      { year: "1993", event: "Rami Kalish founds Polaris Venture Capital in Israel." },
      { year: "1996", event: "Chemi Peres joins, forming Polaris Fund II at more than $100 million." },
      { year: "2001", event: "Polaris rebrands as Pitango Venture Capital." },
      { year: "2020", event: "Raises $750 million, its largest vintage to date." },
      { year: "2022", event: "CyberMDX, a Pitango and OurCrowd-backed startup, is acquired by ForeScout Technologies in February." },
      { year: "2023", event: "Pitango HealthTech raises $175 million dedicated to Israeli health tech." }
    ],
    holdings: []
  },
  {
    rank: 14,
    name: "Qiming Venture Partners",
    sectors: ["Enterprise Software", "AI", "Healthcare", "Consumer"],
    signatureExit: "Xiaomi's 2018 Hong Kong IPO - Qiming was an early seed investor, one of more than 180 completed exits across the firm's portfolio including Bilibili, Zhihu, and Meituan",
    slug: "qiming-venture-partners",
    website: "https://www.qimingvc.com",
    short: "Qiming Venture Partners",
    founded: 2006,
    hq: "Shanghai, China",
    aum: "$9.5B",
    thesis: "Qiming Venture Partners was founded in 2006 by Gary Rieschel, a former SoftBank executive, and Duane Kuang, a former Intel Capital investor, building one of China's most consistently successful venture platforms over two decades. All four of the firm's current managing partners have been with Qiming since its founding, an unusually stable leadership structure for a firm of its scale, and Qiming specializes in early-stage investing, with 70% of its deals coming at Series A, across technology, internet, and healthcare. That focus has produced an extraordinary track record: more than 480 companies backed, over 70 reaching unicorn status, and more than 180 completing IPOs or acquisitions, including Xiaomi, Meituan, Bilibili, ByteDance, and Zhihu. Qiming expanded into an independent US dollar fund in 2017 and now manages $9.5 billion across 18 USD and RMB funds, backed by longtime institutional partners including Princeton, Duke, MIT, and NYU.",
    leadership: [
      { name: "Gary Rieschel", role: "Founding Managing Partner", profileSlug: "gary-rieschel" },
      { name: "Duane Kuang", role: "Founding Managing Partner", profileSlug: "duane-kuang" },
      { name: "Nisa Leung", role: "Managing Partner", profileSlug: "nisa-leung" }
    ],
    timeline: [
      { year: "2006", event: "Gary Rieschel and Duane Kuang found Qiming Venture Partners in Shanghai." },
      { year: "2017", event: "Launches Qiming U.S., its first independent US dollar fund." },
      { year: "2018", event: "Xiaomi completes its Hong Kong IPO." },
      { year: "2021", event: "Zhihu completes its NYSE IPO." },
      { year: "2022", event: "Closes funds totaling $3.2 billion; raises $2.4 billion for Fund VIII." }
    ],
    holdings: [
      { name: "Xiaomi", ticker: "1810.HK", historicalPrice: null, price: null },
      { name: "Bilibili", ticker: "BILI", historicalPrice: null, price: 17.07 },
       { name: "Zhihu", ticker: "ZH", historicalPrice: null, price: 3.19 }

    ]
  },
  {
    rank: 16,
    name: "U.S. Venture Partners",
    sectors: ["Enterprise Software", "Cybersecurity", "Consumer", "Healthcare"],
    signatureExit: "Yammer's $1.2 billion acquisition by Microsoft in 2012 - USVP was an early investor in the enterprise social networking company, one of 93-plus IPOs and countless acquisitions across the firm's four-decade history",
    slug: "us-venture-partners",
    website: "https://www.usvp.com",
    short: "USVP",
    founded: 1981,
    hq: "Menlo Park, CA",
    aum: "$4.3B+ (invested since inception)",
    thesis: "U.S. Venture Partners was founded in 1981 by Bill Bowes, Stuart Moldaw, and Robert Sackman, making it one of the earliest true institutional venture firms in Silicon Valley, predating most of the industry's now-legendary names. Bowes brought a uniquely deep biotechnology pedigree from his role as a founding shareholder and first Chairman of Amgen, and that scientific and technical rigor has anchored USVP's investing across four decades since, concentrated in cybersecurity, enterprise software, consumer internet, and IT-enabled healthcare. The firm specializes in leading Series A and B rounds with a genuine domain-expert team of former entrepreneurs, CEOs, and technologists, and has invested more than $4.3 billion across more than 500 companies, with 93-plus completed IPOs including Check Point Software, SanDisk, Ross Stores, Box, and Yammer.",
    leadership: [
      { name: "Bill Bowes", role: "Co-Founder", profileSlug: "bill-bowes" },
      { name: "Stuart Moldaw", role: "Co-Founder", profileSlug: "stuart-moldaw" },
      { name: "Robert Sackman", role: "Co-Founder", profileSlug: "robert-sackman" },
      { name: "Jacques Benkoski", role: "General Partner", profileSlug: "jacques-benkoski" },
      { name: "Rick Lewis", role: "General Partner", profileSlug: "rick-lewis" }
    ],
    timeline: [
      { year: "1981", event: "Bill Bowes, Stuart Moldaw, and Robert Sackman found U.S. Venture Partners in Menlo Park." },
      { year: "1996", event: "Check Point Software completes its IPO." },
      { year: "2012", event: "Yammer, an early USVP investment, is acquired by Microsoft for $1.2 billion." },
      { year: "2015", event: "Box completes its IPO." },
      { year: "2022", event: "Closes its thirteenth fund, USVP XIII, at $400 million in December." }
    ],
    holdings: [
      { name: "Check Point Software", ticker: "CHKP", historicalPrice: null, price: 134.23 },
      { name: "Ross Stores", ticker: "ROST", historicalPrice: null, price: 244.96 },
      { name: "Box", ticker: "BOX", historicalPrice: null, price: 33.64 }
   
    ]
  },
  {
    rank: 20,
    name: "Foundation Capital",
    sectors: ["Fintech", "Enterprise Software", "Consumer", "AI"],
    signatureExit: "Netflix - Foundation Capital was one of the company's original investors years before it became a public, category-defining media company, one of 26 IPOs across the firm's three-decade history",
    slug: "foundation-capital",
    website: "https://foundationcapital.com",
    short: "Foundation Capital",
    founded: 1995,
    hq: "Palo Alto, CA",
    aum: "$3B+",
    thesis: "Foundation Capital was founded in October 1995 by Bill Elmore, Kathryn Gould, and Jim Anderson in Palo Alto, built around a distinctive investment philosophy the firm still describes today: seeking out 'zero-billion-dollar markets,' categories that don't yet exist commercially until a visionary founder creates them from nothing. That conviction made Foundation one of Netflix's original investors, and the firm has spent three decades applying the same lens to fintech, enterprise software, and consumer internet, backing LendingClub, Chegg, Sunrun, and Uber among more than 400 total investments. Foundation has been the first institutional investor in more than 70% of its portfolio companies, and the firm's track record now spans 26 IPOs and more than 80 acquisitions.",
    leadership: [
      { name: "Kathryn Gould", role: "Co-Founder", profileSlug: "kathryn-gould" },
      { name: "Bill Elmore", role: "Co-Founder", profileSlug: "bill-elmore" },
      { name: "Ashu Garg", role: "General Partner", profileSlug: "ashu-garg" }
    ],
    timeline: [
      { year: "1995", event: "Bill Elmore, Kathryn Gould, and Jim Anderson found Foundation Capital in Palo Alto." },
      { year: "1990s", event: "Becomes one of Netflix's original investors." },
      { year: "2014", event: "LendingClub completes its NYSE IPO." },
      { year: "2022", event: "Closes its tenth fund at $500 million, with early investments in Solana, Cerebras, and Jasper." },
      { year: "2024", event: "Raises its eleventh fund at $600 million." }
    ],
    holdings: [
      { name: "Netflix", ticker: "NFLX", historicalPrice: null, price: 78.24 }
    ]
  },
  {
    rank: 21,
    name: "RRE Ventures",
    sectors: ["Enterprise Software", "Fintech", "Consumer", "AI", "Healthcare"],
    signatureExit: "Braintree's $800 million acquisition by PayPal in October 2013 - RRE was an early investor in the payments company years before its exit",
    slug: "rre-ventures",
    website: "https://rre.com",
    short: "RRE Ventures",
    founded: 1994,
    hq: "New York, NY",
    aum: "$2.5B+ (across 10 funds)",
    thesis: "RRE Ventures was founded in 1994 by James D. Robinson IV and Stuart Ellman, at a time New York City was, in Robinson's own words, still 'a small town for venture capital' - deals were scarce enough that the founders regularly had to fly to the West Coast to find them, and RRE kept a San Francisco office through the dot-com era before eventually consolidating fully in New York. That early, patient bet on New York as a genuine technology hub has compounded over three decades: RRE has invested in more than 400 companies and served on nearly 50 boards, building one of the city's oldest and largest venture firms with a portfolio spanning fintech, enterprise software, consumer, AI, media, space, and robotics. The firm's data-driven approach to identifying what it calls 'rare founders' produced early bets on Braintree, BuzzFeed, Bark, and BlackSky, and RRE now manages more than $2.5 billion across 10 funds.",
    leadership: [
      { name: "James D. Robinson IV", role: "Co-Founder & Managing Partner", profileSlug: "james-robinson-iv" },
      { name: "Stuart Ellman", role: "Co-Founder & Managing Partner", profileSlug: "stuart-ellman" },
      { name: "Will Porteous", role: "General Partner & COO", profileSlug: "will-porteous" },
      { name: "Raju Rishi", role: "General Partner", profileSlug: "raju-rishi" }
    ],
    timeline: [
      { year: "1994", event: "James D. Robinson IV and Stuart Ellman found RRE Ventures in New York." },
      { year: "2000", event: "Consolidates fully in New York as the dot-com bubble bursts, having kept a San Francisco office through the 1990s." },
      { year: "2013", event: "Braintree, an early RRE investment, is acquired by PayPal for $800 million." },
      { year: "2021", event: "BuzzFeed goes public via SPAC merger under ticker BZFD." },
      { year: "2023", event: "AUM surpasses $2.5 billion across 10 funds and 400-plus portfolio companies." }
    ],
    holdings: [
      { name: "Bark", ticker: "BARK", historicalPrice: null, price: 10.44 },
       { name: "BlackSky", ticker: "BKSY", historicalPrice: null, price: 30.99 },
      { name: "BuzzFeed", ticker: "BZFD", historicalPrice: null, price: 1.14 }
 
    ]
  },
  {
    rank: 32,
    name: "Draper Associates",
    sectors: ["Crypto", "AI", "Deep Tech", "Fintech"],
    signatureExit: "Tesla's 2010 NASDAQ IPO and Baidu's 2005 NASDAQ IPO - two of Tim Draper's earliest and most iconic public-market bets, alongside Coinbase's 2021 direct listing decades later",
    slug: "draper-associates",
    website: "https://www.draper.vc",
    short: "Draper Associates",
    founded: 1985,
    hq: "San Mateo, CA",
    aum: "$2B",
    thesis: "Draper Associates was founded in 1985 by Tim Draper, a fourth-generation venture capitalist whose father and grandfather were both pioneering Silicon Valley investors, launched with $6 million borrowed from the US Small Business Administration's SBIC program. Draper grew the firm into Draper Fisher Jurvetson after John Fisher and Steve Jurvetson joined, backing Hotmail (where he pioneered viral marketing), Skype, Baidu, and Tesla, before relaunching the original Draper Associates brand in 2008 to focus specifically on early-stage and frontier technology. He became one of Bitcoin's most visible public advocates after purchasing nearly 30,000 bitcoin at a 2014 US Marshals auction, and founded Draper University in 2012, a live-in entrepreneurship bootcamp that has graduated more than 6,000 alumni from 104 countries. The firm now manages roughly $2 billion and has backed more than 60 unicorns across four decades, spanning crypto, AI, space, and fintech.",
    leadership: [
      { name: "Tim Draper", role: "Founder & Managing Partner", profileSlug: "tim-draper" }
    ],
    timeline: [
      { year: "1985", event: "Tim Draper founds Draper Associates in July." },
      { year: "1996", event: "Backs Hotmail, coining the term 'viral marketing.'" },
      { year: "2005", event: "Baidu completes its NASDAQ IPO." },
      { year: "2010", event: "Tesla completes its NASDAQ IPO." },
      { year: "2014", event: "Purchases nearly 30,000 bitcoin at a US Marshals auction." },
      { year: "2025", event: "Raises $200 million for an eighth fund." }
    ],
    holdings: [
      { name: "Tesla", ticker: "TSLA", historicalPrice: null, price: 339.96 },
      { name: "Baidu", ticker: "BIDU", historicalPrice: null, price: 104.68 },
      { name: "Coinbase", ticker: "COIN", historicalPrice: null, price: 153.9 }
   
    ]
  },
  {
    rank: 34,
    name: "Northzone",
    sectors: ["AI", "Fintech", "Healthcare", "Enterprise Software", "Climate", "Consumer"],
    signatureExit: "Spotify's 2018 direct listing, which ended its first day of trading at a valuation of about $26.5 billion",
    slug: "northzone",
    website: "https://northzone.com",
    short: "Northzone",
    founded: 1996,
    hq: "London, UK",
    aum: "$3.1B+ (current), latest fundraise €1B (2022)",
    thesis: "Northzone has operated since 1996, giving it a rare through-line from the pre-mobile era to today's AI investing cycle while staying relevant across seed, Series A, and growth stages - the firm explicitly markets itself as 'Seed to Growth.' That long-cycle consistency has translated into a multi-office, multi-theme platform: consumer and fintech legacy on one side, newer AI, climate, infrastructure, and health investments on the other. Spotify's 2018 direct listing, which closed its first trading day at a roughly $26.5 billion valuation, remains the firm's signature outcome, and its 2022 €1 billion raise is evidence that LPs view Northzone as far more than a 'Spotify-era' brand.",
    leadership: [
      { name: "Pär-Jörgen Pärson", role: "Partner", profileSlug: "par-jorgen-parson" },
      { name: "Michiel Kotting", role: "Partner", profileSlug: "michiel-kotting" },
      { name: "Jessica Schultz", role: "Partner", profileSlug: "jessica-schultz" },
      { name: "Wendy Xiao", role: "Partner", profileSlug: "wendy-xiao" }
    ],
    timeline: [
      { year: "1996", event: "Northzone is founded." },
      { year: "2004", event: "Pär-Jörgen Pärson joins the firm." },
      { year: "2018", event: "Spotify completes its direct listing, closing day one at a roughly $26.5 billion valuation." },
      { year: "2022", event: "Raises €1 billion in its latest fundraise." },
      { year: "2026", event: "Firm reports $3.1B+ in current AUM." }
    ],
    holdings: [
      { name: "Spotify", ticker: "SPOT", historicalPrice: null, price: 482.66 },
      { name: "fuboTV", ticker: "FUBO", historicalPrice: null, price: 9.8 }
    ]
  },
  {
    rank: 34,
    name: "Emergence Capital",
    sectors: ["Enterprise Software", "SaaS", "Cloud Infrastructure"],
    signatureExit: "Zoom's 2019 IPO - General Partner Santi Subotovsky led Emergence's investment when the video conferencing company was still a little-known startup, and remains on its board today",
    slug: "emergence-capital",
    website: "https://www.emcap.com",
    short: "Emergence",
    founded: 2003,
    hq: "San Mateo, CA",
    aum: "$2.3B+",
    thesis: "Emergence Capital was founded in 2003 by Jason Green, Brian Jacobs, and Gordon Ritter on a deliberately narrow thesis: enterprise software was moving to the cloud, and a firm built entirely around that shift could out-invest generalist funds in the category. The firm makes just 5 to 7 new investments a year by design, prioritizing deep conviction over broad coverage - a discipline that helped it back Salesforce, Veeva, and Box early. That same conviction led General Partner Santi Subotovsky, who joined in 2010 after moving to the U.S. from Argentina, to lead Emergence's investment in Zoom while it was still a little-known startup, years before the company became a household name.",
    leadership: [
      { name: "Gordon Ritter", role: "Founder & General Partner", profileSlug: "gordon-ritter" },
      { name: "Santi Subotovsky", role: "General Partner", profileSlug: "santi-subotovsky" }
    ],
    timeline: [
      { year: "2003", event: "Jason Green, Brian Jacobs, and Gordon Ritter found Emergence Capital on a cloud-software-only thesis." },
      { year: "2008", event: "Becomes the sole venture backer of Veeva Systems' Series A; Veeva later IPOs in 2013." },
      { year: "2010", event: "Santi Subotovsky joins as a Kauffman Fellow under Gordon Ritter's mentorship." },
      { year: "2010s", event: "Leads Emergence's investment in Zoom while it is still a little-known startup." },
      { year: "2019", event: "Zoom goes public." },
      { year: "2021", event: "Subotovsky makes his Forbes Midas List debut, one of the first three Latin American VCs on the list." }
    ],
    holdings: [
      { name: "Zoom", ticker: "ZM", historicalPrice: null, price: 109.84 },
      { name: "Veeva Systems", ticker: "VEEV", historicalPrice: null, price: 252.64 },
      { name: "Box", ticker: "BOX", historicalPrice: null, price: 33.64 }
   
    ]
  },
  {
    rank: 34,
    name: "Jerusalem Venture Partners",
    sectors: ["Cybersecurity", "AI", "Enterprise Software", "Fintech"],
    signatureExit: "CyberArk's 2014 Nasdaq IPO - JVP was the company's Series A investor and later increased its stake to roughly 47% via a Goldman Sachs-backed secondary transaction; CyberArk agreed to a $25 billion acquisition by Palo Alto Networks in 2025",
    slug: "jerusalem-venture-partners",
    website: "https://jvpvc.com",
    short: "JVP",
    founded: 1993,
    hq: "Jerusalem, Israel",
    aum: "$2.18B",
    thesis: "Jerusalem Venture Partners was founded in 1993 by Erel Margalit, who had previously directed the Jerusalem Development Authority and brought a distinctly hands-on, ecosystem-building approach to venture capital from day one - JVP initially operated as one of Israel's first government-backed incubators before expanding into a global firm. That combination of capital and operational support, including startup hubs in Jerusalem, Be'er Sheva, and New York, produced one of Israeli tech's most consequential track records: the Series A investment in CyberArk that grew into a roughly 47% ownership stake ahead of its 2014 IPO, and the $4.8 billion sale of Chromatis Networks to Lucent Technologies in 2000, then the largest Israeli tech exit ever recorded. JVP now manages $2.18 billion across 10 funds, having invested in more than 150 companies.",
    leadership: [
      { name: "Erel Margalit", role: "Founder & Executive Chairman", profileSlug: "erel-margalit" },
      { name: "Yoav Tzruya", role: "General Partner", profileSlug: "yoav-tzruya" }
    ],
    timeline: [
      { year: "1993", event: "Erel Margalit founds Jerusalem Venture Partners." },
      { year: "1994", event: "Leads a Series A investment in CyberArk." },
      { year: "2000", event: "Chromatis Networks is sold to Lucent Technologies for $4.8 billion." },
      { year: "2014", event: "CyberArk goes public on the Nasdaq." },
      { year: "2025", event: "CyberArk agrees to a $25 billion acquisition by Palo Alto Networks in July; JVP announces a $290 million investment vehicle with TPG for Earnix." }
    ],
    holdings: [
      { name: "CyberArk", ticker: "CYBR", historicalPrice: null, price: null },
      { name: "Cogent Communications", ticker: "CCOI", historicalPrice: null, price: 10.35 }
    ]
  },
  {
    rank: 36,
    name: "Social Capital",
    sectors: ["AI", "Healthcare", "Climate", "Enterprise Software"],
    signatureExit: "Slack's 2019 NYSE IPO under ticker WORK, followed by Salesforce's more than $27 billion acquisition of the company in 2021 - one of Chamath Palihapitiya's earliest and most defining bets",
    slug: "social-capital",
    website: "https://www.socialcapital.com",
    short: "Social Capital",
    founded: 2011,
    hq: "Palo Alto, CA",
    aum: "$2.147B",
    thesis: "Social Capital was founded in 2011 by Chamath Palihapitiya, who left a senior growth leadership role at Facebook with $60 million of his own capital and a specific ambition: back generational technology and healthcare companies pursuing deeply transformative ideas rather than incremental improvements. The firm's most consequential structural decision came in 2018, when it stopped accepting outside limited partner capital entirely and restructured into a single-GP model funded from Palihapitiya's own balance sheet - a 'technology Berkshire Hathaway' approach he continues to run alone as the firm's sole investing partner. That model has weathered multiple market cycles, backing Slack, Box, Yammer, and Virgin Galactic in its earlier venture-fund era, and more recently AI, blockchain, and climate technology, with Palihapitiya reporting $2.147 billion in assets under management in his 2025 annual letter.",
    leadership: [
      { name: "Chamath Palihapitiya", role: "Founder & CEO", profileSlug: "chamath-palihapitiya" }
    ],
    timeline: [
      { year: "2011", event: "Chamath Palihapitiya founds Social Capital (initially Social+Capital Partnership) with $60 million of his own money." },
      { year: "2015", event: "Assets under management reach $1.1 billion; the firm formally renames to Social Capital." },
      { year: "2018", event: "Restructures into a single-GP model, closing to outside capital." },
      { year: "2019", event: "Slack goes public on the NYSE under ticker WORK." },
      { year: "2021", event: "Salesforce acquires Slack for more than $27 billion." },
      { year: "2025", event: "Reports $2.147 billion in assets under management in June annual letter." }
    ],
    holdings: [
      { name: "Box", ticker: "BOX", historicalPrice: null, price: 33.64 }
    ]
  },
  {
    rank: 37,
    name: "Nexus Venture Partners",
    sectors: ["Enterprise Software", "AI", "Fintech", "Consumer"],
    signatureExit: "Delhivery's 2022 IPO on India's NSE and BSE exchanges - one of Nexus's earliest and largest India-based portfolio bets, backed years before it became India's leading logistics company",
    slug: "nexus-venture-partners",
    website: "https://nexusvp.com",
    short: "Nexus Venture Partners",
    founded: 2006,
    hq: "Menlo Park, CA",
    aum: "$2.6B+",
    thesis: "Nexus Venture Partners was founded in 2006 by Suvir Sujan, Naren Gupta, and Sandeep Singhal, building one of the first true India-US cross-border venture capital platforms at a time when the two ecosystems were rarely connected by a single institutional investor. The firm runs what it calls a 'one fund, one team' model, with genuinely integrated operating and investing experience across Menlo Park, Mumbai, and Bengaluru, rather than treating India as a satellite market for a US-based fund. That structure has let Nexus back enterprise software and AI companies targeting US markets alongside consumer internet and fintech companies built specifically for India, resulting in a portfolio spanning Postman, Delhivery, Druva, and Unacademy. The firm closed its largest-ever fund at $700 million in 2023 and has grown to approximately $2.6 billion in total assets under management.",
    leadership: [
      { name: "Sandeep Singhal", role: "Co-Founder", profileSlug: "sandeep-singhal" },
      { name: "Suvir Sujan", role: "Co-Founder & Managing Director", profileSlug: "suvir-sujan" }
    ],
    timeline: [
      { year: "2006", event: "Suvir Sujan, Naren Gupta, and Sandeep Singhal found Nexus Venture Partners." },
      { year: "2021", event: "Sandeep Singhal transitions from General Partner to Senior Advisor after growing AUM to $1.5 billion." },
      { year: "2022", event: "Delhivery completes its IPO on Indian stock exchanges." },
      { year: "2023", event: "Closes its largest-ever fund at $700 million." },
      { year: "2026", event: "Closes Nexus Ventures VIII, an eighth fund with a $700 million corpus focused on AI, enterprise technology, consumer, and fintech." }
    ],
    holdings: [
      { name: "Delhivery", ticker: "DELHIVERY.NS", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 38,
    name: "500 Global",
    sectors: ["Fintech", "Enterprise Software", "Consumer"],
    signatureExit: "Twilio's NYSE IPO under ticker TWLO - one of 500 Global's earliest and most consequential bets, backed years before it became a category-defining cloud communications company",
    slug: "500-global",
    website: "https://500.co",
    short: "500 Global",
    founded: 2010,
    hq: "San Francisco, CA",
    aum: "$2.7B",
    thesis: "500 Global was founded in 2010 as 500 Startups by Dave McClure and Christine Tsai in Mountain View, building an early-stage venture fund and seed accelerator around a genuinely global thesis when most Silicon Valley firms invested almost exclusively in US-based founders. That international focus, combined with a structured accelerator curriculum and a first cohort of just 12 startups in 2011, grew the firm into one of the most geographically diversified venture platforms in the world. Christine Tsai became CEO in 2017 after McClure resigned following multiple allegations of inappropriate conduct toward female entrepreneurs, and she rebranded the firm to 500 Global in 2021 to reflect its expanded international footprint. The firm has since backed more than 2,600 companies across 80-plus countries, producing 35-plus unicorns including Canva, Credit Karma, Grab, and Twilio, with $2.7 billion currently under management.",
    leadership: [
      { name: "Christine Tsai", role: "Co-Founder & CEO", profileSlug: "christine-tsai" },
      { name: "Courtney Powell", role: "COO & Managing Partner", profileSlug: "courtney-powell" }
    ],
    timeline: [
      { year: "2010", event: "Dave McClure and Christine Tsai found 500 Startups in Mountain View." },
      { year: "2011", event: "Admits its first accelerator cohort of 12 startups in February." },
      { year: "2017", event: "Christine Tsai becomes CEO in July after Dave McClure resigns." },
      { year: "2021", event: "Rebrands to 500 Global, reflecting its international investment strategy." },
      { year: "2025", event: "AUM reaches $2.7 billion across more than 2,600 portfolio companies." }
    ],
    holdings: [
      { name: "Twilio", ticker: "TWLO", historicalPrice: null, price: 249.42 }
    ]
  },
  {
    rank: 35,
    name: "Molten Ventures",
    sectors: ["Enterprise Software", "Fintech", "Deep Tech", "Healthcare", "Climate"],
    signatureExit: "UiPath, which Molten highlights at a $35.8 billion closing price post-IPO",
    slug: "molten-ventures",
    website: "https://www.moltenventures.com",
    short: "Molten Ventures",
    founded: 2006,
    hq: "London, UK",
    aum: "£1.525B gross portfolio value / £1.324B net assets (as of March 31, 2026)",
    thesis: "Molten Ventures is structurally different from a typical venture firm: it's a publicly listed venture platform, originally founded in 2006 as Esprit Capital and later known as Draper Esprit before its 2021 rebrand. That listed structure means gross portfolio value and net assets are more meaningful than a generic 'AUM' figure, and the firm's liquidity model, secondaries capability, and listed-company disclosure cadence make it closer to a hybrid of venture manager and permanent-capital vehicle than a traditional closed-end fund. The current strategy is clearly thematic - enterprise, deep tech, healthtech, and climate-adjacent industrial technologies - backing founders 'from Series A and beyond,' with UiPath's post-IPO run to a $35.8 billion valuation as its highlighted signature outcome.",
    leadership: [
      { name: "Ben Wilkinson", role: "Chief Executive Officer", profileSlug: "ben-wilkinson" },
      { name: "Nicola McClafferty", role: "Partner", profileSlug: "nicola-mcclafferty" },
      { name: "Franco Danesi", role: "Senior Partner", profileSlug: "franco-danesi" },
      { name: "Inga Deakin", role: "Partner", profileSlug: "inga-deakin" }
    ],
    timeline: [
      { year: "2006", event: "Founded as Esprit Capital." },
      { year: "2016", event: "IPOs on the London Stock Exchange as Draper Esprit." },
      { year: "2021", event: "Moves to the main market and rebrands as Molten Ventures." },
      { year: "2023", event: "Acquires Forward Partners." },
      { year: "2024", event: "Ben Wilkinson, previously CFO, becomes CEO in October." },
      { year: "2026", event: "Reports £1.525 billion gross portfolio value as of March 31." }
    ],
    holdings: [
      { name: "UiPath", ticker: "PATH", historicalPrice: null, price: 16.68 }
    ]
  },
  {
    rank: 35,
    name: "PeakSpan Capital",
    sectors: ["AI", "Enterprise Software", "Vertical SaaS", "Fintech", "Ecommerce Infrastructure"],
    signatureExit: "Ecwid's 2021 acquisition by Lightspeed Commerce for $500 million - PeakSpan invested in the ecommerce platform in March 2020 and exited the following year",
    slug: "peakspan-capital",
    website: "https://www.peakspancapital.com",
    short: "PeakSpan",
    founded: 2015,
    hq: "New York, NY",
    aum: "$2.6B",
    thesis: "PeakSpan Capital was founded in 2015 to target what it calls the hardest stage of company building - not the earliest inception risk, but scaling a proven B2B software company from roughly $3 million to $50 million in annual recurring revenue. The firm's own materials emphasize operational support, exit preparedness, and domain specialization across twelve defined categories, from human capital management to next-gen security, rather than broad venture branding. Its inaugural $150 million fund closed in January 2016, followed by a $265 million Fund II in December 2018 and an oversubscribed $567 million Fund III in January 2022 - the same year the firm's exit of ecommerce platform Ecwid, acquired by Lightspeed Commerce for $500 million, became one of its signature outcomes.",
    leadership: [
   { name: "Phil Dur", role: "Co-Founder & Managing Partner", profileSlug: "phil-dur" },
      { name: "Brian Mulvey", role: "Co-Founder & Managing Partner", profileSlug: "brian-mulvey" },
      { name: "Matt Melymuka", role: "Co-Founder & Managing Partner", profileSlug: "matt-melymuka" }
    ],
    timeline: [
      { year: "2015", event: "Phil Dur, Brian Mulvey, and Matt Melymuka found PeakSpan Capital." },
      { year: "2016", event: "Closes its inaugural $150 million fund." },
      { year: "2018", event: "Closes Fund II at $265 million." },
      { year: "2020", event: "Invests in ecommerce platform Ecwid in March." },
      { year: "2021", event: "Ecwid is acquired by Lightspeed Commerce for $500 million in June." },
      { year: "2022", event: "Closes Fund III at $567 million, growing AUM toward $1.4 billion." }
    ],
    holdings: []
  },
  {
    rank: 36,
    name: "Inovia Capital",
    sectors: ["AI", "Cybersecurity", "Digital Health", "Fintech", "Infrastructure"],
    signatureExit: "Lightspeed Commerce's 2019 dual listing on the NYSE and TSX - Inovia was Lightspeed's first Canadian investor and helped lead a 2017 buyout that kept the Montreal point-of-sale company from a foreign takeover ahead of its IPO",
    slug: "inovia-capital",
    website: "https://www.inovia.vc",
    short: "Inovia",
    founded: 2007,
    hq: "Montreal, Quebec, Canada",
    aum: "$2.5B+",
    thesis: "Inovia Capital was founded in Montreal in 2007 and has built itself into a full-stack venture platform spanning pre-seed through pre-IPO - a stage range wider than most firms attempt, backed up by a Continuity Fund specifically built to keep supporting winners all the way to public markets. Its clearest proof point is Lightspeed Commerce: Inovia was the point-of-sale company's first Canadian investor, helped lead a 2017 buyout to keep it Canadian-owned rather than see a foreign firm force a sale, and stayed in through its 2019 dual listing on the NYSE and TSX. The firm has since grown past $2.5 billion under management across offices in Montreal, Toronto, Calgary, San Francisco, London, and Abu Dhabi.",
    leadership: [
 { name: "Chris Arsenault", role: "Partner & Co-Founder", profileSlug: "chris-arsenault" },
      { name: "Dennis Kavelman", role: "Partner", profileSlug: "dennis-kavelman" },
      { name: "Patrick Pichette", role: "Partner", profileSlug: "patrick-pichette" }
    ],
    timeline: [
      { year: "2007", event: "Chris Arsenault co-founds Inovia Capital in Montreal." },
      { year: "2017", event: "Leads a buyout of Accel Partners' stake in Lightspeed alongside the Caisse, keeping the company Canadian-owned." },
      { year: "2019", event: "Lightspeed Commerce goes public on both the NYSE and TSX." },
      { year: "2021", event: "Raises a $450 million second growth fund and a $416 million CAD continuation fund, pushing total capital under management past $1.9 billion." },
      { year: "2026", event: "Firm surpasses $2.5 billion under management across six global offices." }
    ],
    holdings: [
      { name: "Lightspeed Commerce", ticker: "LSPD", historicalPrice: 15.74, price: 11.68 }
    ]
  },
  {
    rank: 37,
    name: "Qualcomm Ventures",
    sectors: ["AI", "5G", "Automotive", "IoT", "Cybersecurity"],
    signatureExit: "Ring's 2018 acquisition by Amazon for more than $1 billion - Qualcomm Ventures was an early backer of the connected-home company",
    slug: "qualcomm-ventures",
    website: "https://www.qualcommventures.com",
    short: "Qualcomm Ventures",
    founded: 2000,
    hq: "San Diego, CA",
    aum: "$2B+ (150+ active portfolio companies, per NVCA 2026)",
    thesis: "Qualcomm Ventures was founded in November 2000 with an initial $500 million commitment from its parent company, built specifically to promote the growth of the global wireless ecosystem. Its investment focus has stayed tied to that mission ever since - 5G, AI, automotive, IoT, XR, and enterprise and cloud technologies enabled by mobile and connected compute - while its global footprint across San Diego, San Francisco, Israel, Europe, China, India, and Korea gives portfolio companies real commercialization reach beyond typical Silicon Valley strategics. The firm has had seven portfolio exits worth more than $1 billion each, including Fitbit, Cruise Automation, Waze, and Ring, and now manages more than $2 billion in assets across 150-plus active companies.",
    leadership: [
{ name: "Quinn Li", role: "SVP & Global Head of Qualcomm Ventures", profileSlug: "quinn-li" }
    ],
    timeline: [
      { year: "2000", event: "Qualcomm Ventures is founded with an initial $500 million commitment from Qualcomm Incorporated." },
      { year: "2015", event: "Portfolio companies Fitbit and ThunderSoft both go public." },
      { year: "2018", event: "Ring, a connected-home portfolio company, is acquired by Amazon for more than $1 billion." },
      { year: "2019", event: "Zoom and Cloudflare go public; the firm launches a $200 million 5G Ecosystem fund." },
      { year: "2021", event: "SentinelOne, Enovix, Matterport, Spire, and Science 37 all go public." },
      { year: "2026", event: "Firm manages more than $2 billion across 150-plus active portfolio companies in seven regions." }
    ],
    holdings: [
      { name: "SentinelOne", ticker: "S", historicalPrice: 22.57, price: 18.55 }
    ]
  },
  {
    rank: 38,
    name: "Dell Technologies Capital",
    sectors: ["AI", "Cybersecurity", "Data & Analytics", "Enterprise Software", "Industrial Tech"],
    signatureExit: "JFrog's September 2020 Nasdaq IPO - DTC published a case study celebrating the DevOps company's public debut, part of a run of exits including Arista, DocuSign, MongoDB, Nutanix, SumoLogic, and Zscaler that generated more than $160 billion in combined market value",
    slug: "dell-technologies-capital",
    website: "https://www.delltechnologiescapital.com",
    short: "Dell Technologies Capital",
    founded: 2012,
    hq: "Palo Alto, CA",
    aum: "$1.8B+ invested to date",
    thesis: "Dell Technologies Capital, or DTC, has operated as Dell's venture team since 2012, when Scott Darling founded the practice inside EMC before Dell's acquisition folded it into Dell Technologies. DTC's model is explicitly hands-on: alongside capital, portfolio companies get pricing analysis, go-to-market support, customer introductions, and direct access to Dell's family of businesses - Dell, Dell EMC, VMware, Pivotal, and SecureWorks. That approach has produced an unusually deep IPO track record for a corporate venture arm: DTC was the first institutional investor in Zscaler, and its 143 investments since 2012 have produced 65 M&A exits and 9 IPOs, including Arista, DocuSign, JFrog, MongoDB, Nutanix, SumoLogic, and Zscaler, together worth more than $160 billion in combined market value.",
    leadership: [
      { name: "Scott Darling", role: "Founding Partner & President", profileSlug: "scott-darling" },
      { name: "Yair Snir", role: "Managing Director", profileSlug: "yair-snir" }
    ],
    timeline: [
      { year: "2012", event: "Scott Darling founds DTC's venture practice inside EMC, expanding to Boston and then Israel within its first two years." },
      { year: "2016", event: "Dell's acquisition of EMC folds the practice into Dell Technologies Capital." },
      { year: "2018", event: "Zscaler, where DTC was the first institutional investor, goes public in March." },
      { year: "2020", event: "JFrog goes public on the Nasdaq in September." },
      { year: "2026", event: "DTC's cumulative track record reaches 143 investments, 65 M&A exits, and 9 IPOs since 2012." }
    ],
    holdings: [
      { name: "Zscaler", ticker: "ZS", historicalPrice: 181.66, price: 167.33 },
      { name: "JFrog", ticker: "FROG", historicalPrice: null, price: 95.15 },
       { name: "MongoDB", ticker: "MDB", historicalPrice: null, price: 472.29 },
      { name: "DocuSign", ticker: "DOCU", historicalPrice: null, price: 52.91 }
    ]
  },
  {
    rank: 35,
    name: "Union Square Ventures",
    sectors: ["Consumer Internet", "Fintech", "Crypto", "Marketplaces"],
    signatureExit: "Etsy's 2015 IPO - USV backed the handmade-goods marketplace in 2008 when it looked like a niche bet against Amazon",
    slug: "union-square-ventures",
    website: "https://www.usv.com",
    short: "USV",
    founded: 2003,
    hq: "New York, NY",
    aum: "$1B+",
    thesis: "Union Square Ventures was founded in 2003 by Fred Wilson and Brad Burnham in New York City, built on a deliberately small-fund philosophy - Wilson has said the firm would never raise a large fund, preferring to stay nimble with vehicles typically under $300 million. That discipline hasn't limited its impact: USV was an early believer in network-effect businesses, backing Twitter four months after it launched, Etsy when handmade-goods marketplaces seemed like a niche bet, and Coinbase years before crypto exchanges were taken seriously by mainstream investors.",
    leadership: [
      { name: "Fred Wilson", role: "Co-Founder", profileSlug: "fred-wilson" },
      { name: "Brad Burnham", role: "Co-Founder", profileSlug: "brad-burnham" },
      { name: "Albert Wenger", role: "Managing Partner", profileSlug: "albert-wenger" }
    ],
    timeline: [
      { year: "2003", event: "Fred Wilson and Brad Burnham found Union Square Ventures in New York City." },
      { year: "2007", event: "Leads a Series A investment in Twitter, then just four months old." },
      { year: "2008", event: "Invests in Etsy, a then-unproven marketplace for handmade goods." },
      { year: "2013", event: "Portfolio company Tumblr is acquired by Yahoo for $1.1 billion." },
      { year: "2015", event: "Etsy goes public." },
      { year: "2021", event: "Coinbase, an early USV bet, goes public via direct listing." }
    ],
    holdings: [
      { name: "Etsy", ticker: "ETSY", historicalPrice: null, price: 84.10 },
      { name: "Coinbase", ticker: "COIN", historicalPrice: 257.21, price: 161.00 },
      { name: "Duolingo", ticker: "DUOL", historicalPrice: null, price: 144.1 }
    ]
  },
  {
    rank: 54,
    name: "QED Investors",
    sectors: ["Fintech", "Insurance", "Lending", "Banking Infrastructure"],
    signatureExit: "Credit Karma's December 2020 acquisition by Intuit for $7.1 billion - co-founder Frank Rotman's most notable investment to date",
    slug: "qed-investors",
    website: "https://www.qedinvestors.com",
    short: "QED Investors",
    founded: 2007,
    hq: "Alexandria, VA",
    aum: "$4B (across all funds)",
    thesis: "QED Investors was founded in 2007 by Nigel Morris and Frank Rotman, who met at Capital One and helped take it public in the 1990s before deciding fintech needed a specialist investor built by former financial-services operators rather than generalist technology investors. That operational lens shows up directly in QED's hands-on model, which leverages decades of credit-risk, lending, and portfolio-management experience to help founders navigate regulatory and unit-economics challenges most VCs can't meaningfully advise on. The firm has backed more than 250 portfolio companies across 27 countries, including 31 unicorns, with Credit Karma's $7.1 billion sale to Intuit and Nubank's 2021 NYSE IPO - where Morris sat on the advisory board - among its clearest signature outcomes.",
    leadership: [
      { name: "Nigel Morris", role: "Co-Founder & Managing Partner", profileSlug: "nigel-morris" },
      { name: "Frank Rotman", role: "Co-Founder & Chief Investment Officer", profileSlug: "frank-rotman" },
      { name: "Amias Gerety", role: "Partner", profileSlug: "amias-gerety" }
    ],
    timeline: [
      { year: "1990s", event: "Nigel Morris and Frank Rotman meet at Capital One and help take the company public." },
      { year: "2007", event: "The two found QED Investors in Alexandria, Virginia." },
      { year: "2020", event: "Credit Karma, Frank Rotman's most notable investment, is acquired by Intuit for $7.1 billion in December." },
      { year: "2021", event: "Closes a $1.05 billion oversubscribed raise across Fund VII and a new Growth Fund in September; Nubank goes public in December." },
      { year: "2024", event: "Both Morris and Rotman are named to the Forbes Midas List for consecutive years." }
    ],
    holdings: [
      { name: "Nubank", ticker: "NU", historicalPrice: null, price: 14.68 },
      { name: "SoFi", ticker: "SOFI", historicalPrice: null, price: 16.74 }
    ]
  },
  {
    rank: 53,
    name: "Canaan Partners",
    sectors: ["Enterprise Software", "Fintech", "Consumer Internet", "Healthcare"],
    signatureExit: "The RealReal's 2019 Nasdaq IPO - Maha Ibrahim was the company's first investor and sat on its board through the listing",
    slug: "canaan-partners",
    website: "https://www.canaan.com",
    short: "Canaan Partners",
    founded: 1987,
    hq: "Menlo Park, CA",
    aum: "$7B (following $850M Fund XIII)",
    thesis: "Canaan Partners originated from a 1987 management buyout of GE Capital's venture unit, led by Harry Rein and Eric Young, and has maintained a deliberate 60/40 split between technology and healthcare investing ever since - a genuinely unusual balance for a firm approaching four decades of continuous operation. The firm runs its investment process with unusual transparency: every partner scores every deal on a public 1-4 scale, reflecting a stated culture of 'high performance, low ego.' That structure has produced a broad early-stage track record spanning Instacart, LendingClub, The RealReal, and Dexcom, and Canaan closed its thirteenth flagship fund at $850 million, pushing total assets under management to roughly $7 billion.",
    leadership: [
      { name: "Maha Ibrahim", role: "General Partner", profileSlug: "maha-ibrahim" },
      { name: "Wende Hutton", role: "General Partner", profileSlug: "wende-hutton" },
      { name: "Eric Young", role: "Partner & Co-Founder", profileSlug: "eric-young" }
    ],
    timeline: [
      { year: "1987", event: "Harry Rein and Eric Young found Canaan Partners via a management buyout of GE Capital's venture unit." },
      { year: "2014", event: "Portfolio company LendingClub goes public on the NYSE." },
      { year: "2019", event: "The RealReal, where Maha Ibrahim was the first investor, goes public on the Nasdaq." },
      { year: "2023", event: "Total AUM reaches $6.8 billion as of April." },
      { year: "2024", event: "Closes its thirteenth flagship fund, Fund XIII, at $850 million." }
    ],
    holdings: [
      { name: "The RealReal", ticker: "REAL", historicalPrice: null, price: 10.94 },
      { name: "LendingClub", ticker: "LC", historicalPrice: null, price: 19.21 }
    ]
  },
  {
    rank: 35,
    name: "Maveron",
    sectors: ["Consumer", "Ecommerce", "Fintech", "Healthcare", "Education"],
    signatureExit: "Zulily's 2013 Nasdaq IPO - Maveron led the ecommerce company's Series A with roughly $5 million and held a 22% stake worth more than $1 billion at IPO, on a $4.6 billion valuation",
    slug: "maveron",
    website: "https://www.maveron.com",
    short: "Maveron",
    founded: 1998,
    hq: "Seattle, WA",
    aum: "$1.3B (as of 2020)",
    thesis: "Maveron was founded in 1998 by Dan Levitan, a former investment banker who took Starbucks public in 1992, and Howard Schultz, the Starbucks CEO he met on that deal. The firm has stayed unusually disciplined about a single idea ever since: investing only in consumer-facing brands and technology, never enterprise or infrastructure. That focus produced one of the largest single outcomes in Seattle venture history - Levitan led Zulily's roughly $5 million Series A in 2009, and Maveron's 22% stake was worth more than $1 billion when the ecommerce company went public on the Nasdaq in 2013 at a $4.6 billion valuation, alongside the same-year IPO of sandwich chain Potbelly.",
    leadership: [
   { name: "Dan Levitan", role: "Co-Founder & General Partner", profileSlug: "dan-levitan" },
      { name: "Jason Stoffer", role: "General Partner", profileSlug: "jason-stoffer" },
      { name: "David Wu", role: "General Partner", profileSlug: "david-wu" }
    ],
    timeline: [
      { year: "1998", event: "Dan Levitan and Howard Schultz found Maveron in Seattle." },
      { year: "2009", event: "Leads Zulily's approximately $5 million Series A round." },
      { year: "2013", event: "Zulily goes public on the Nasdaq at a $4.6 billion valuation; Potbelly also goes public the same year." },
      { year: "2020", event: "Firm's assets under management stand at $1.3 billion." }
    ],
    holdings: [
      { name: "Allbirds", ticker: "BIRD", historicalPrice: null, price: 2.64 }
    ]
  },
  {
    rank: 36,
    name: "RTP Global",
    sectors: ["AI", "Enterprise Software", "Fintech", "Developer Tools", "Climate"],
    signatureExit: "Datadog's 2019 Nasdaq IPO - RTP Global was an early Series A-through-D investor in the observability platform, which priced at $27 per share and had grown to a market capitalization of roughly $93 billion by July 2026",
    slug: "rtp-global",
    website: "https://rtp.vc",
    short: "RTP Global",
    founded: 2000,
    hq: "New York, NY",
    aum: "$1B (latest fund, 2023)",
    thesis: "RTP Global was founded in 2000 by Leonid Boguslavsky, who sold his prior technology company and put the proceeds - along with most of his personal wealth - into starting the firm, then kept reinvesting gains into each subsequent fund rather than relying heavily on outside limited partners. That owner-operator structure shows up in how RTP invests: the firm emphasizes fast decisions, early conviction at seed and Series A, and unusually long holding periods, backing founders across five hubs in New York, London, Bangalore, Paris, and Dubai. RTP has backed more than 100 founders since 2000, with Datadog among its best-known outcomes, and closed its latest flagship fund at $1 billion in 2023.",
    leadership: [
    { name: "Leonid Boguslavsky", role: "Partner & Founder", profileSlug: "leonid-boguslavsky" },
      { name: "Galina Chifina", role: "CEO & Partner", profileSlug: "galina-chifina" },
      { name: "Thomas Cuvelier", role: "Partner, US & Europe", profileSlug: "thomas-cuvelier" }
    ],
    timeline: [
      { year: "2000", event: "Leonid Boguslavsky founds RTP Global, seeding it with proceeds from his prior company sale." },
      { year: "2019", event: "Portfolio company Datadog goes public on the Nasdaq at $27 per share." },
      { year: "2023", event: "Closes its latest flagship fund at $1 billion." },
      { year: "2026", event: "Firm operates across five hubs - New York, London, Bangalore, Paris, and Dubai." }
    ],
    holdings: [
      { name: "Datadog", ticker: "DDOG", historicalPrice: 143.63, price: 255.00 }
    ]
  },
  {
    rank: 55,
    name: "Kaszek Ventures",
    sectors: ["Fintech", "Ecommerce", "Marketplaces", "Enterprise Software"],
    signatureExit: "Nubank's 2021 NYSE IPO - Kaszek was an early backer of the Brazilian neobank, which reached a market capitalization of roughly $67 billion by 2026",
    slug: "kaszek-ventures",
    website: "https://www.kaszek.com",
    short: "Kaszek",
    founded: 2011,
    hq: "Buenos Aires, Argentina",
    aum: "$2B+ raised across seven funds",
    thesis: "Kaszek Ventures was founded in 2011 by Hernán Kazah and Nicolás Szekasy, two former MercadoLibre executives who left the company after Szekasy led its 2007 Nasdaq IPO as CFO. The firm's name is literally a combination of their two surnames, and their pitch to Latin American founders is built on a rare credibility: they'd already built and taken public the region's largest technology company before backing anyone else's. That track record helped Kaszek become the largest early-stage venture firm in Latin America, raising more than $2 billion across seven funds since its $95 million debut vehicle, and backing more than 120 startups including Nubank, QuintoAndar, Kavak, Creditas, and Bitso - nine of which have reached unicorn status.",
    leadership: [
      { name: "Hernán Kazah", role: "Co-Founder & Managing Partner", profileSlug: "hernan-kazah" },
      { name: "Nicolás Szekasy", role: "Co-Founder & Managing Partner", profileSlug: "nicolas-szekasy" },
      { name: "Nicolas Berman", role: "Partner", profileSlug: "nicolas-berman" }
    ],
    timeline: [
      { year: "2007", event: "Nicolás Szekasy leads MercadoLibre's Nasdaq IPO as CFO." },
      { year: "2011", event: "Hernán Kazah and Nicolás Szekasy leave MercadoLibre to found Kaszek Ventures, raising a $95 million debut fund." },
      { year: "2019", event: "Closes Fund IV at $375 million alongside a first $225 million Opportunity Fund." },
      { year: "2021", event: "Raises $1 billion across Fund V ($475 million) and Opportunity Fund II ($525 million); Nubank goes public on the NYSE." },
      { year: "2025", event: "Total capital raised across seven funds surpasses $2 billion." }
    ],
    holdings: [
      { name: "Nubank", ticker: "NU", historicalPrice: null, price: 14.68 }
    ]
  },
  {
    rank: 56,
    name: "SOSV",
    sectors: ["Deep Tech", "Biotech", "Climate", "Hardware"],
    signatureExit: "No single dollar-verified signature exit - SOSV instead measures itself by cumulative deep-tech scale: more than 1,000 portfolio companies since inception, with in-house wet labs and hardware fabrication facilities built at a cost of tens of millions of dollars across its HAX and IndieBio programs",
    slug: "sosv",
    website: "https://sosv.com",
    short: "SOSV",
    founded: 1995,
    hq: "Princeton, NJ",
    aum: "$1.5B (as of 2023)",
    thesis: "SOSV was founded in 1995 by Sean O'Sullivan, whose first startup, MapInfo, went public the year before, and it has evolved from a personal 'super angel' investment vehicle into one of the world's most structurally distinctive deep-tech investors. Rather than simply writing checks, SOSV built genuine physical infrastructure - tens of thousands of square feet of wet labs, machine shops, and fabrication facilities across HAX (hardware, since 2012) and IndieBio (life sciences, since 2014) - positioning itself as the 'First Check in Deep Tech' for founders whose ideas require real lab access before they can even prove feasibility. That vertical-accelerator model, run by 10 general partners across offices spanning San Francisco, New York, Newark, Cork, Pune, and Shenzhen, has made SOSV one of the most active deep-tech investors globally, closing its most recent Sustainable Economies Fund at $306 million in April 2024.",
    leadership: [
      { name: "Sean O'Sullivan", role: "Founder & Managing General Partner", profileSlug: "sean-osullivan" },
      { name: "Stephen McCann", role: "General Partner & CFO", profileSlug: "stephen-mccann" }
    ],
    timeline: [
      { year: "1994", event: "Sean O'Sullivan's first startup, MapInfo, goes public." },
      { year: "1995", event: "O'Sullivan founds SOSV as a personal investment vehicle." },
      { year: "2007", event: "Begins transitioning SOSV from a personal vehicle into an institutional organization." },
      { year: "2012", event: "Launches HAX, its hardware-focused accelerator, in Shenzhen." },
      { year: "2014", event: "Launches IndieBio, its life sciences accelerator." },
      { year: "2024", event: "Closes its most recent fund, the Sustainable Economies Fund, at $306 million in April." }
    ],
    holdings: []
  },
  {
    rank: 55,
    name: "monashees",
    sectors: ["Fintech", "Marketplaces", "Logistics", "Edtech"],
    signatureExit: "99's 2018 acquisition by Didi Chuxing for roughly $1 billion - one of the earliest major venture-backed exits to come out of Latin America's ride-hailing sector",
    slug: "monashees",
    website: "https://monashees.com",
    short: "monashees",
    founded: 2005,
    hq: "São Paulo, Brazil",
    aum: "$1.5B (across 10 funds)",
    thesis: "monashees was founded in 2005 by Eric Acher and Fabio Igel, making it Brazil's first venture capital firm at a time the two describe as the country's 'tech winter' - essentially no local early-stage VC industry existed, and they built both the firm and much of the surrounding ecosystem from scratch, starting with just a $12 million debut fund. Organized around the thesis 'The future is human,' the firm invests sector-agnostically but stays deliberately hands-on, working directly with more than 300 founders across 150-plus companies to help build Latin America's first generation of world-class technology companies from the earliest possible stage. That patient, region-building approach has produced nine unicorns - Rappi, 99, Loggi, MadeiraMadeira, and Loft among them - and grown into $1.5 billion raised across 10 funds since inception.",
    leadership: [
      { name: "Eric Acher", role: "Co-Founder & Managing Partner", profileSlug: "eric-acher" },
      { name: "Fabio Igel", role: "Co-Founder & Managing Partner", profileSlug: "fabio-igel" }
    ],
    timeline: [
      { year: "2005", event: "Eric Acher and Fabio Igel found monashees in São Paulo, Brazil's first venture capital firm, with a $12 million debut fund." },
      { year: "2018", event: "99 is acquired by Didi Chuxing for roughly $1 billion." },
      { year: "2021", event: "Reports having raised 10 funds totaling $1.5 billion, backing 125 companies including 9 unicorns." },
      { year: "2026", event: "Portfolio community reaches more than 300 founders across 150-plus companies." }
    ],
    holdings: []
  },
  {
    rank: 56,
    name: "Partech",
    sectors: ["Fintech", "Deep Tech", "Enterprise Software", "Energy"],
    signatureExit: "No single confirmed signature exit - Partech instead measures itself by breadth and duration: 220-plus active portfolio companies across 40 countries and four continents, built over more than four decades since its 1982 founding",
    slug: "partech",
    website: "https://partechpartners.com",
    short: "Partech",
    founded: 1982,
    hq: "Paris, France",
    aum: "€2.5B (~$2.7B)",
    thesis: "Partech was founded in San Francisco in 1982 as Paribas Technologies, and its European office - established in Paris in 1996 by Jean-Marc Patouillaud - eventually became the firm's center of gravity. In 2008, Patouillaud and Philippe Collombel led a management buyout that took Partech fully independent from its original bank ownership, and the two built it from there into a genuinely global platform with offices spanning San Francisco, Paris, Berlin, Dakar, Dubai, and Nairobi. That geographic reach is unusually deliberate: Partech runs dedicated Africa-focused funds backed by development finance institutions like KfW, the European Investment Bank, and the IFC, alongside its core European and US venture strategies, reflecting a genuine conviction that the next wave of category-defining companies won't come from Silicon Valley and Paris alone. The firm now manages roughly €2.5 billion across 220-plus companies in 40 countries.",
    leadership: [
      { name: "Philippe Collombel", role: "Founding & General Partner", profileSlug: "philippe-collombel" },
      { name: "Jean-Marc Patouillaud", role: "Founding Partner & Senior Advisor", profileSlug: "jean-marc-patouillaud" },
      { name: "Tidjane Deme", role: "General Partner, Africa", profileSlug: "tidjane-deme" }
    ],
    timeline: [
      { year: "1982", event: "Partech is founded in San Francisco as Paribas Technologies." },
      { year: "1996", event: "Jean-Marc Patouillaud establishes the firm's European office in Paris." },
      { year: "2008", event: "Patouillaud and Philippe Collombel complete a management buyout, making Partech independent." },
      { year: "2021", event: "Launches Partech Africa II, backed by DFIs including KfW, the EIB, and the IFC." },
      { year: "2026", event: "Firm AUM reaches approximately €2.5 billion across 220-plus companies in 40 countries." }
    ],
    holdings: []
  },
  {
    rank: 58,
    name: "Target Global",
    sectors: ["Fintech", "Mobility", "Consumer", "AI"],
    signatureExit: "Delivery Hero's 2017 IPO on the Frankfurt Stock Exchange, raising approximately €1 billion - an early Target Global bet, alongside Auto1 Group's 2021 Frankfurt IPO",
    slug: "target-global",
    website: "https://targetglobal.vc",
    short: "Target Global",
    founded: 2015,
    hq: "Berlin, Germany",
    aum: "€3B+ (~$3.2B)",
    thesis: "Target Global was co-founded in 2015 by Yaron Valler and Shmuel Chafets, both veterans of Hasso Plattner Ventures with a 15-year working partnership dating back to Israel's Giza Venture Capital, building a pan-European fund investing from pre-seed through pre-IPO. Worth noting factually: the firm's early capital base included investment from Alexander Frolov Sr. and Roman Abramovich, both later sanctioned by the UK government in November 2022 following Russia's invasion of Ukraine; Target Global has stated both investors divested their positions prior to the sanctions, and the son of one co-founding family member stepped down from the firm at that time. Valler's own background as a former Intel chip engineer gives the firm real technical grounding, and that combination has produced backing for more than 15 unicorns including Revolut, Auto1, Delivery Hero, and TravelPerk, with more than €3 billion under management across offices in London, Berlin, Tel Aviv, and Abu Dhabi.",
    leadership: [
      { name: "Yaron Valler", role: "Founder & CIO", profileSlug: "yaron-valler" },
      { name: "Shmuel Chafets", role: "Founder & Executive Chairman", profileSlug: "shmuel-chafets" }
    ],
    timeline: [
      { year: "2012", event: "Predecessor entity founded in Berlin." },
      { year: "2015", event: "Yaron Valler and Shmuel Chafets co-found Target Global, going international." },
      { year: "2017", event: "Delivery Hero completes its Frankfurt IPO, raising approximately €1 billion." },
      { year: "2021", event: "Auto1 Group completes its Frankfurt IPO." },
      { year: "2022", event: "A co-founding family member's son steps down following UK sanctions on related individuals." }
    ],
    holdings: [
      { name: "Delivery Hero", ticker: "DHER.DE", historicalPrice: null, price: null },
      { name: "Auto1 Group", ticker: "AG1.DE", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 57,
    name: "DN Capital",
    sectors: ["Fintech", "SaaS", "Consumer Internet", "AI"],
    signatureExit: "AUTO1 Group's 2021 Frankfurt Stock Exchange IPO at approximately €7.9 billion - Germany's largest tech IPO at the time, with DN Capital exiting 95% of its stake",
    slug: "dn-capital",
    website: "https://www.dncapital.com",
    short: "DN Capital",
    founded: 2000,
    hq: "London, UK",
    aum: "€1B+ (more than $1B)",
    thesis: "DN Capital was founded in June 2000 by Nenad Marovac and Steve Schlenker, two Harvard Business School classmates who built the firm into a genuinely transatlantic early-stage investor spanning London, Berlin, and Menlo Park. Marovac's own path - born in Croatia, raised in San Diego, advising on East German privatization in Berlin before Advent International and Harvard - gave the firm an unusually early foothold in Germany's DACH technology scene, reflected in a portfolio heavy with category-leading German companies like AUTO1 Group, HomeToGo, and Mister Spex. Four portfolio IPOs have returned more than €400 million to DN Capital, led by AUTO1 Group's 2021 Frankfurt debut at approximately €7.9 billion - Germany's largest tech IPO at the time - and the firm closed its most recent $350 million Fund V that same year.",
    leadership: [
      { name: "Nenad Marovac", role: "Founder & Managing Partner", profileSlug: "nenad-marovac" },
      { name: "Steve Schlenker", role: "Co-Founder & Partner", profileSlug: "steve-schlenker" }
    ],
    timeline: [
      { year: "2000", event: "Nenad Marovac and Steve Schlenker found DN Capital in London." },
      { year: "2018", event: "Closes a €200 million Fund IV." },
      { year: "2021", event: "AUTO1 Group, HomeToGo, and Mister Spex all go public in Frankfurt; DN Capital closes a $350 million Fund V." },
      { year: "2022", event: "GoStudent, another DN Capital portfolio company, reaches a $3.5 billion valuation." },
      { year: "2024", event: "Partial exit of Remitly delivers €147 million, a 16x multiple on invested capital." }
    ],
    holdings: [
      { name: "AUTO1 Group", ticker: "AG1.DE", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 58,
    name: "Chiratae Ventures",
    sectors: ["Consumer Internet", "Fintech", "Healthcare", "Deep Tech"],
    signatureExit: "PolicyBazaar's 2021 IPO on the NSE and BSE - Chiratae was an early backer of the Indian insurance aggregator, one of five IPOs the firm has taken portfolio companies through",
    slug: "chiratae-ventures",
    website: "https://www.chiratae.com",
    short: "Chiratae",
    founded: 2006,
    hq: "Bengaluru, India",
    aum: "$1.3B (across seven funds)",
    thesis: "Chiratae Ventures was founded in 2006 by Sudhir Sethi and TC Meenakshisundaram as IDG Ventures India, rebranding in 2018 to reflect its evolution into an independent Indian institution rather than a foreign firm's regional arm. Sethi's own account of the founding is telling: the firm's first fund was anchored by $150 million from Patrick McGovern's IDG and Bruno Raschle's Adveq, but when IDG dissolved globally mid-fundraise for Fund II, Chiratae rebuilt entirely around domestic Indian capital rather than folding - a bet on the conviction that Indian investors would back Indian entrepreneurs more durably than foreign LPs. That bet paid off: the firm now manages $1.3 billion across seven funds, has made more than 135 investments with 60 exits including five IPOs (FirstCry, Lenskart, Newgen, PolicyBazaar, and Yatra), and has backed eight unicorns including Flipkart, Myntra, and Lenskart.",
    leadership: [
      { name: "Sudhir Sethi", role: "Founder & Chairman", profileSlug: "sudhir-sethi" },
      { name: "TC Meenakshisundaram", role: "Founder & Vice Chairman", profileSlug: "tc-meenakshisundaram" }
    ],
    timeline: [
      { year: "2006", event: "Sudhir Sethi and TC Meenakshisundaram found IDG Ventures India in Bengaluru, anchored by $150 million from IDG and Adveq." },
      { year: "2007", event: "Backs Flipkart at an early stage, one of the firm's defining investments." },
      { year: "2018", event: "Rebrands from IDG Ventures India to Chiratae Ventures following IDG's global dissolution." },
      { year: "2021", event: "PolicyBazaar goes public on the NSE and BSE." },
      { year: "2024", event: "Firm AUM reaches $1.3 billion across seven funds, with 135+ investments and 60 exits." }
    ],
    holdings: []
  },
  {
    rank: 59,
    name: "Gobi Partners",
    sectors: ["Consumer Internet", "Fintech", "Mobility", "Enterprise Software"],
    signatureExit: "Prenetics' 2023 Nasdaq listing via SPAC merger - one of four Gobi-backed companies to reach unicorn status, alongside Carsome, Animoca Brands, and Amber Group",
    slug: "gobi-partners",
    website: "https://www.gobi.vc",
    short: "Gobi Partners",
    founded: 2002,
    hq: "Kuala Lumpur, Malaysia",
    aum: "~$2B",
    thesis: "Gobi Partners was founded in 2002 by Thomas Tsao, Lawrence Tse, and Wai Kit Lau, three former employees of WI Harper, a San Francisco venture firm, who set out to build a genuinely Pan-Asian investment platform rather than a single-country fund. The firm has survived two regional shocks since founding - the SARS outbreak and the Global Financial Crisis - which Gobi credits for a resilience-first investment philosophy that still shapes its approach today. That philosophy has scaled into one of the most interconnected venture platforms in Asia: 16 offices spanning Greater China, Southeast Asia, Pakistan, and MENA, more than 400 startups backed across 20-plus funds, and four portfolio companies that have reached unicorn status - Carsome, Animoca Brands, Amber Group, and Prenetics - with roughly $2 billion currently under management.",
    leadership: [
      { name: "Thomas Tsao", role: "Co-Founder & Chairman", profileSlug: "thomas-tsao" },
      { name: "Lawrence Tse", role: "Co-Founder" },
      { name: "Wai Kit Lau", role: "Advisor", profileSlug: "wai-kit-lau" }
    ],
    timeline: [
      { year: "2002", event: "Thomas Tsao, Lawrence Tse, and Wai Kit Lau found Gobi Partners, formerly of WI Harper." },
      { year: "2015", event: "Thomas Tsao relocates to Kuala Lumpur, establishing funds with Malaysia's MAVCAP (now Jelawang Capital)." },
      { year: "2018", event: "Launches the ASEAN SuperSeed Fund with MAVCAP, backing Carsome and Airwallex among others." },
      { year: "2023", event: "Prenetics completes a Nasdaq listing via SPAC merger, becoming one of Gobi's four unicorn outcomes." },
      { year: "2024", event: "Firm AUM reaches approximately $1.6-2 billion across 16 locations." }
    ],
    holdings: [
      { name: "Prenetics", ticker: "PRE", historicalPrice: null, price: 19.7 }
    ]
  },
  {
    rank: 60,
    name: "Seedcamp",
    sectors: ["Fintech", "SaaS", "AI", "Cybersecurity"],
    signatureExit: "UiPath's April 2021 Nasdaq IPO at a $35 billion valuation - Seedcamp was the process automation company's earliest backer, one of three decacorns (alongside Wise and Revolut) that trace back to its first check",
    slug: "seedcamp",
    website: "https://seedcamp.com",
    short: "Seedcamp",
    founded: 2007,
    hq: "London, UK",
    aum: "$1B+ (following $320M raise, June 2026)",
    thesis: "Seedcamp was founded in May 2007 by Reshma Sohoni and Saul Klein, launched with backing from 30 European investors and a modest $2.5 million first fund, and has spent nearly two decades establishing itself as Europe's original first-check investor - a title the firm still uses about itself, and one that's hard to dispute given its track record. Seedcamp has been the earliest backer of three genuine decacorns: Wise, Revolut, and UiPath, which went public on the Nasdaq in April 2021 at a $35 billion valuation. In June 2026 the firm closed $320 million in fresh capital - a $220 million Core fund and a $100 million Select fund for following winners through Series B and beyond - expanding its US presence specifically to keep supporting European founders as they go global, and pushing total assets under management past $1 billion.",
    leadership: [
      { name: "Reshma Sohoni", role: "Co-Founder & Managing Partner", profileSlug: "reshma-sohoni" },
      { name: "Carlos Eduardo Espinal", role: "Managing Partner", profileSlug: "carlos-eduardo-espinal" },
      { name: "Saul Klein", role: "Co-Founder", profileSlug: "saul-klein" }
    ],
    timeline: [
      { year: "2007", event: "Reshma Sohoni and Saul Klein launch Seedcamp in London with backing from 30 European investors." },
      { year: "2010", event: "Carlos Espinal joins as Partner." },
      { year: "2014", event: "Announces a €20 million seed fund." },
      { year: "2021", event: "UiPath goes public on the Nasdaq in April at a $35 billion valuation." },
      { year: "2026", event: "Raises $320 million across a Core and Select fund in June, pushing total AUM past $1 billion and expanding the firm's US presence." }
    ],
    holdings: [
      { name: "UiPath", ticker: "PATH", historicalPrice: null, price: 12.19 },
      { name: "Wise", ticker: "WISE", historicalPrice: null, price: 38.455 }
    ]
  },
  {
    rank: 61,
    name: "High-Tech Gründerfonds",
    sectors: ["Deep Tech", "Healthcare", "Climate", "Enterprise Software"],
    signatureExit: "CureVac's August 2020 Nasdaq IPO - HTGF backed the mRNA vaccine developer as a seed-stage investor years before it became a household name during the COVID-19 pandemic",
    slug: "high-tech-grunderfonds",
    website: "https://www.htgf.de",
    short: "HTGF",
    founded: 2005,
    hq: "Bonn, Germany",
    aum: "€1.4B+ (following Fund IV launch)",
    thesis: "High-Tech Gründerfonds was established in 2005 as a public-private partnership specifically to close Germany's early-stage funding gap, backed by the Federal Ministry for Economic Affairs, KfW Capital, and more than 45 corporate limited partners including BASF and Bosch. That hybrid structure is genuinely unusual among the firms tracked on this page: HTGF's investment committee blends venture professionals with government and corporate representatives, giving the fund both commercial discipline and an explicit developmental mandate to seed German deep tech, industrial tech, climate tech, and life sciences. Since founding, the fund has financed more than 800 startups and achieved nearly 200 exits, with CureVac's 2020 Nasdaq IPO as its most globally recognized outcome, and now manages more than €1.4 billion following its fourth fund.",
    leadership: [
      { name: "Alex von Frankenberg", role: "Co-Founder & Managing Director", profileSlug: "alex-von-frankenberg" }
    ],
    timeline: [
      { year: "2005", event: "Alex von Frankenberg co-founds High-Tech Gründerfonds in Bonn as a public-private partnership." },
      { year: "2011", event: "Closes its second fund, with BASF among the corporate investors." },
      { year: "2018", event: "Closes its third fund, again backed by BASF and other corporate partners." },
      { year: "2020", event: "Portfolio company CureVac goes public on the Nasdaq in August." },
      { year: "2026", event: "Fund volume across all generations surpasses €3 billion, with cumulative AUM above €1.4 billion following Fund IV." }
    ],
    holdings: [
      { name: "CureVac", ticker: "CVAC", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 62,
    name: "Forerunner Ventures",
    sectors: ["Consumer", "Commerce", "Digital Health", "Fintech"],
    signatureExit: "Warby Parker's 2021 NYSE direct listing - Forerunner led an early seed check into the eyewear company years before its founding as a formal firm, one of the clearest proof points of its consumer-first thesis",
    slug: "forerunner-ventures",
    website: "https://www.forerunnerventures.com",
    short: "Forerunner Ventures",
    founded: 2012,
    hq: "San Francisco, CA",
    aum: "~$3B",
    thesis: "Forerunner Ventures was founded in 2012 by Kirsten Green, a former retail equity research analyst who applied the same rigorous financial modeling discipline she'd used analyzing public retail companies to early-stage consumer investing. That analytical, deeply consumer-focused lens built one of the first specialized 'modern consumer' venture practices at a time when direct-to-consumer commerce was still a contrarian niche, and it produced an unusually high concentration of breakout wins: Warby Parker, Dollar Shave Club, Glossier, Chime, Faire, and Hims & Hers among them. The firm has raised nearly $3 billion from institutional investors, invested in more than 150 companies while serving as the first institutional backer in roughly two-thirds of its portfolio, and closed its most recent $500 million Fund VII in 2025, a signal of confidence in consumer tech even as the broader category fell out of favor with other investors.",
    leadership: [
      { name: "Kirsten Green", role: "Founder & Managing Partner", profileSlug: "kirsten-green" },
      { name: "Eurie Kim", role: "Managing Partner", profileSlug: "eurie-kim" },
      { name: "Brian O'Malley", role: "Partner", profileSlug: "brian-omalley" }
    ],
    timeline: [
      { year: "2010", event: "Kirsten Green leads an early seed check into Warby Parker, ahead of Forerunner's formal founding." },
      { year: "2012", event: "Green founds Forerunner Ventures in San Francisco." },
      { year: "2013", event: "Makes an early investment in Glossier, a year before its official launch." },
      { year: "2021", event: "Warby Parker goes public via NYSE direct listing." },
      { year: "2022", event: "Closes Fund VI at $1 billion." },
      { year: "2025", event: "Closes Fund VII at $500 million, bringing total AUM to nearly $3 billion." }
    ],
    holdings: [
      { name: "Warby Parker", ticker: "WRBY", historicalPrice: null, price: 25.88 }
    ]
  },
  {
    rank: 63,
    name: "Third Rock Ventures",
    sectors: ["Biotech", "Therapeutics", "Life Sciences"],
    signatureExit: "Bluebird Bio's public listing - one of the category-defining gene and cell therapy companies Third Rock built from early scientific concept through IPO, alongside Agios Pharmaceuticals and Foundation Medicine",
    slug: "third-rock-ventures",
    website: "https://thirdrockventures.com",
    short: "Third Rock Ventures",
    founded: 2007,
    hq: "Boston, MA",
    aum: "$3.8B (raised since inception)",
    thesis: "Third Rock Ventures was founded in 2007 by Mark Levin, Kevin Starr, and Robert Tepper, three former Millennium Pharmaceuticals executives who met discussing how big pharma and traditional VCs had abandoned early-stage drug discovery, and decided to build the disruptive-biotech supplier that didn't yet exist. Rather than fund fully-formed startups, Third Rock runs a distinctive 'Discover-Launch-Build-Transform' model: the team tours academic research facilities, workshops breakthrough science with scientists for one to three years, and then constructs companies from scratch around it, defining the structure, vision, and leadership before the company even launches. That company-creation-first approach raised a $378 million debut fund within ten weeks of launching and has since produced more than 60 companies including Bluebird Bio, Agios Pharmaceuticals, Foundation Medicine, Sage Therapeutics, and Editas Medicine, with $3.8 billion raised since inception.",
    leadership: [
      { name: "Kevin Starr", role: "Co-Founding Partner", profileSlug: "kevin-starr" },
      { name: "Robert Tepper", role: "Co-Founding Partner", profileSlug: "robert-tepper" },
      { name: "Mark Levin", role: "Co-Founding Partner", profileSlug: "mark-levin" }
    ],
    timeline: [
      { year: "2006", event: "Mark Levin, Kevin Starr, and Robert Tepper, all Millennium Pharmaceuticals executives, discuss the funding gap for disruptive biotech startups." },
      { year: "2007", event: "The three found Third Rock Ventures in Boston, raising a $378 million debut fund." },
      { year: "2013", event: "Bluebird Bio, one of Third Rock's earliest company-creation successes, goes public." },
      { year: "2014", event: "Agios Pharmaceuticals and Foundation Medicine, two more Third Rock creations, are established as category leaders in their fields." },
      { year: "2016", event: "Co-founders Mark Levin and Kevin Starr step back to advisory roles for Fund IV." },
      { year: "2024", event: "Total capital raised since inception reaches $3.8 billion across more than 60 companies." }
    ],
    holdings: [
      { name: "Bluebird Bio", ticker: "BLUE", historicalPrice: null, price: null },
      { name: "Agios Pharmaceuticals", ticker: "AGIO", historicalPrice: null, price: 33.47 }
    ]
  },
  {
    rank: 64,
    name: "Lowercarbon Capital",
    sectors: ["Climate", "Carbon Removal", "Energy", "Industrial Technology"],
    signatureExit: "No confirmed public exit yet - Lowercarbon's flagship bets (Commonwealth Fusion Systems, Charm Industrial, Solugen, Zap Energy) remain private, hard-tech climate companies still working toward commercial deployment",
    slug: "lowercarbon-capital",
    website: "https://lowercarbon.com",
    short: "Lowercarbon Capital",
    founded: 2018,
    hq: "Oakland, CA",
    aum: "~$2B",
    thesis: "Lowercarbon Capital was founded in 2018 by Chris Sacca, Crystal Sacca, and Clay Dumas, following Chris's earlier career building Lowercase Capital into one of the most successful venture funds in history through early bets on Uber, Twitter, Instagram, and Stripe. Rather than treat climate investing as philanthropy, Lowercarbon applies the same venture-scale return expectations Sacca used chasing consumer tech winners to companies that profitably slash or remove carbon emissions - a deliberately blunt positioning the firm sums up in its own unfiltered mission language. The firm raised its first $800 million in outside capital within days in 2021, added a dedicated $350 million carbon-removal fund in 2022, and now manages roughly $2 billion across more than 100 portfolio companies spanning energy, industrial materials, transportation, and advanced manufacturing.",
    leadership: [
      { name: "Chris Sacca", role: "Co-Founder", profileSlug: "chris-sacca" },
      { name: "Crystal Sacca", role: "Founding Partner", profileSlug: "crystal-sacca" },
      { name: "Clay Dumas", role: "General Partner", profileSlug: "clay-dumas" }
    ],
    timeline: [
      { year: "2018", event: "Chris Sacca, Crystal Sacca, and Clay Dumas found Lowercarbon Capital." },
      { year: "2021", event: "Raises $800 million, its first outside capital, in a matter of days in August." },
      { year: "2022", event: "Raises a dedicated $350 million fund for carbon removal startups in April." },
      { year: "2026", event: "Firm AUM reaches approximately $2 billion across more than 100 portfolio companies." }
    ],
    holdings: []
  },
  {
    rank: 65,
    name: "Forgepoint Capital",
    sectors: ["Cybersecurity", "AI Security", "Infrastructure Software"],
    signatureExit: "Cloudflare's acquisition of Area 1 Security - one of three Forgepoint exits Co-Founder Alberto Yépez personally led, alongside Attivo Networks (acquired by SentinelOne) and BehavioSec (acquired by LexisNexis Risk Solutions)",
    slug: "forgepoint-capital",
    website: "https://forgepointcap.com",
    short: "Forgepoint Capital",
    founded: 2015,
    hq: "San Mateo, CA",
    aum: "$1B+",
    thesis: "Forgepoint Capital was founded in 2015 by Alberto Yépez and Don Dixon, two Trident Capital colleagues who had already spent years building and investing in cybersecurity companies together, and set out to create one of the first venture funds exclusively dedicated to the category. That focus produced the largest sector-specific investment team in cybersecurity venture capital, backed by a Global Advisory Council of more than 100 industry leaders spanning former entrepreneurs, government officials, and practicing CISOs, CIOs, and CTOs. The firm's roughly $1 billion under management has funded nearly 80 companies across cybersecurity, AI security, and infrastructure software, producing three unicorns, two IPOs, and more than 35 acquisitions - including Attivo Networks, Area 1, and BehavioSec, all led personally by Yépez.",
    leadership: [
      { name: "Alberto Yépez", role: "Co-Founder & Managing Director", profileSlug: "alberto-yepez" },
      { name: "Don Dixon", role: "Co-Founder & Senior Advisor", profileSlug: "don-dixon" },
      { name: "Damien Henault", role: "Managing Director, Forgepoint Capital International", profileSlug: "damien-henault" }
    ],
    timeline: [
      { year: "2015", event: "Alberto Yépez and Don Dixon co-found Forgepoint Capital in San Mateo." },
      { year: "2021", event: "Completes 22 new financings, adding 10 cyber companies including 1Kosmos, Cyberhaven, and Noname Security." },
      { year: "2022", event: "Area 1, a portfolio company, is acquired by Cloudflare." },
      { year: "2023", event: "Attivo Networks, another portfolio company, is acquired by SentinelOne." },
      { year: "2026", event: "Firm surpasses $1 billion in AUM across nearly 80 portfolio companies, including three unicorns and two IPOs." }
    ],
    holdings: []
  },
  {
    rank: 66,
    name: "NFX",
    sectors: ["Marketplaces", "AI", "Consumer", "SaaS", "Fintech"],
    signatureExit: "Lyft's 2019 Nasdaq IPO - one of NFX's earliest network-effects bets, backed years before the ride-sharing company's public debut, alongside fellow early portfolio company DoorDash",
    slug: "nfx",
    website: "https://www.nfx.com",
    short: "NFX",
    founded: 2015,
    hq: "San Francisco, CA",
    aum: "$1.5B",
    thesis: "NFX was founded in 2015 by James Currier, Pete Flint, and Gigi Levy-Weiss, three serial entrepreneurs who together had already built ten companies with a combined $10 billion in exits before ever investing together as a fund. That operating background shapes a genuinely distinctive thesis: NFX invests almost exclusively in companies where network effects - not brand, not patents, not switching costs - are the primary source of durable competitive advantage, an idea the firm has spent more than 15 years researching and codifying into named, teachable frameworks. Built as, in the founders' own words, 'the venture firm we wish existed when we were founders,' NFX runs a 45-plus-person platform team, an invite-only 'Guild' community connecting hundreds of portfolio CEOs, and proprietary tools including Signal, a fundraising network with more than 100,000 users, and now manages approximately $1.5 billion after backing nearly 200 companies including Lyft, DoorDash, and Patreon.",
    leadership: [
      { name: "James Currier", role: "Co-Founder & General Partner", profileSlug: "james-currier" },
      { name: "Gigi Levy-Weiss", role: "Co-Founder & General Partner", profileSlug: "gigi-levy-weiss" },
      { name: "Pete Flint", role: "Co-Founder & General Partner" },
      { name: "Morgan Beller", role: "General Partner" }
    ],
    timeline: [
      { year: "2015", event: "James Currier, Pete Flint, and Gigi Levy-Weiss found NFX in San Francisco." },
      { year: "2017", event: "Closes a $150 million fund, growing from an original $10 million start." },
      { year: "2019", event: "Raises $275 million for its second fund; portfolio company Lyft goes public." },
      { year: "2021", event: "Closes a $450 million fund in October." },
      { year: "2024", event: "Closes a $325 million fourth fund, bringing total AUM to approximately $1.5 billion." }
    ],
    holdings: [
      { name: "Lyft", ticker: "LYFT", historicalPrice: null, price: 15.45 },
      { name: "DoorDash", ticker: "DASH", historicalPrice: 170.65, price: 175.00 }
    ]
  },
  {
    rank: 67,
    name: "Congruent Ventures",
    sectors: ["Climate", "Energy", "Mobility", "Food & Agriculture"],
    signatureExit: "No confirmed public exit yet - Congruent's flagship bets (AMP Robotics, Fervo Energy, Span.IO, Meati Foods, Parallel Systems) remain private, still working toward commercial scale across climate hardware and energy",
    slug: "congruent-ventures",
    website: "https://www.congruentvc.com",
    short: "Congruent Ventures",
    founded: 2017,
    hq: "San Francisco, CA",
    aum: "$1B+ (across all funds)",
    thesis: "Congruent Ventures was founded in 2017 by Joshua Posamentier and Abe Yokell, two investors with decades of combined climate tech experience dating back to the first cleantech investing cycle, well before the category regained mainstream institutional appetite. The firm organizes its investing around four specific themes - mobility and urbanization, the energy transition, food and agriculture, and sustainable production - and Posamentier's own semiconductor engineering background gives the team unusually strong technical fluency in evaluating complex climate hardware, not just software wrapped around a sustainability narrative. That specialist positioning helped Congruent grow from a $92 million debut fund into more than $1 billion under management across multiple vehicles, backed by CalSTRS, the Grantham Foundation, and other major institutional climate investors, with a portfolio spanning AMP Robotics, Fervo Energy, Span.IO, Meati Foods, and Parallel Systems.",
    leadership: [
      { name: "Joshua Posamentier", role: "Co-Founder & Managing Partner", profileSlug: "joshua-posamentier" },
      { name: "Abe Yokell", role: "Co-Founder & Managing Partner", profileSlug: "abe-yokell" },
      { name: "Tanuj Dutta", role: "General Partner", profileSlug: "tanuj-dutta" }
    ],
    timeline: [
      { year: "2017", event: "Joshua Posamentier and Abe Yokell found Congruent Ventures." },
      { year: "2021", event: "Closes a $175 million second fund." },
      { year: "2023", event: "Closes a $300 million-plus Continuity Fund, pushing AUM past $700 million." },
      { year: "2026", event: "Total assets under management surpass $1 billion across 51-plus portfolio companies." }
    ],
    holdings: []
  },
  {
    rank: 68,
    name: "Shield Capital",
    sectors: ["AI", "Cybersecurity", "Defense Tech", "Deep Tech"],
    signatureExit: "No confirmed exit yet - Shield's clearest proof point is its oversubscribed $186 million debut fund, closed 55% above target, and its strategic partnership with L3Harris Technologies to pursue dual-use defense and commercial technology investments",
    slug: "shield-capital",
    website: "https://shieldcap.com",
    short: "Shield Capital",
    founded: 2021,
    hq: "San Francisco, CA",
    aum: "$186M (Fund I, closed 2022)",
    thesis: "Shield Capital was founded by Philip Bilden and Raj Shah, who began planning the firm together in 2015 around cybersecurity seed investments before formally launching it in 2021. Bilden brings more than two decades as a Managing Director at HarbourVest Partners, a private equity firm managing over $100 billion, plus deep U.S. Navy family ties spanning four generations; Shah is a former F-16 fighter pilot who led the Defense Innovation Unit, the Pentagon's flagship technology innovation organization, across both the Obama and Trump administrations. That combination of institutional investing credibility and direct national-security operating experience shapes Shield's specific thesis: back dual-use companies serving both commercial and defense customers in AI, autonomy, cybersecurity, and space, operating in strategic partnership with L3Harris Technologies. The firm's advisory board includes former Defense Secretary Ash Carter and former National Security Advisor H.R. McMaster, and its debut fund closed oversubscribed at $186 million, 55% above target.",
    leadership: [
      { name: "Philip Bilden", role: "Co-Founder & Managing Partner" },
      { name: "Raj Shah", role: "Co-Founder & Managing Partner", profileSlug: "raj-shah" },
      { name: "Michael Brown", role: "Partner" }
    ],
    timeline: [
      { year: "2015", event: "Philip Bilden and Raj Shah begin planning Shield Capital, initially focused on cybersecurity seed investments." },
      { year: "2016", event: "Shah becomes Managing Director of the Defense Innovation Unit." },
      { year: "2021", event: "Formally launches Shield Capital." },
      { year: "2022", event: "Closes Fund I oversubscribed at $186 million, 55% above target." },
      { year: "2022", event: "Michael Brown, former Director of the Defense Innovation Unit, joins as Partner." }
    ],
    holdings: []
  },
  {
    rank: 67,
    name: "Point Nine",
    sectors: ["SaaS", "Marketplaces", "AI", "Fintech"],
    signatureExit: "Zendesk, Christoph Janz's very first angel check, went public in 2014 and was later taken private in a $10.2 billion deal led by Hellman & Friedman and Permira in 2022",
    slug: "point-nine",
    website: "https://www.pointnine.com",
    short: "Point Nine",
    founded: 2011,
    hq: "Berlin, Germany",
    aum: "Not publicly disclosed (Fund III closed at $60M, 2015; multiple funds since)",
    thesis: "Point Nine grew out of Team Europe Ventures, a SaaS-focused effort Christoph Janz and Pawel Chudzinski began around 2008, before officially rebranding and formalizing as Point Nine Capital in 2011 with co-founder Kolja Hebenstreit. The firm has stayed deliberately narrow and disciplined for more than a decade, making just 10-12 investments per year almost entirely at the seed stage, concentrated in B2B SaaS, marketplaces, and - more recently - AI. That focus produced an unusually high hit rate: more than 65% of Point Nine's seed investments progress to a Series A, and more than ten portfolio companies have reached $100 million or more in annual recurring revenue, including Zendesk, Delivery Hero, Algolia, Contentful, Clio, and Loom, all backed at their earliest stages.",
    leadership: [
      { name: "Christoph Janz", role: "Co-Founder & Managing Partner", profileSlug: "christoph-janz" },
      { name: "Pawel Chudzinski", role: "Co-Founder & Managing Partner" },
      { name: "Louis Coppey", role: "Partner" }
    ],
    timeline: [
      { year: "2008", event: "Christoph Janz and Pawel Chudzinski begin investing together through Team Europe Ventures." },
      { year: "2009", event: "Makes an early angel investment in Zendesk." },
      { year: "2011", event: "Officially rebrands as Point Nine Capital, with Kolja Hebenstreit joining as a co-founder." },
      { year: "2014", event: "Zendesk goes public." },
      { year: "2015", event: "Closes Point Nine Capital Fund III at $60 million." },
      { year: "2022", event: "Zendesk is taken private for $10.2 billion." }
    ],
    holdings: []
  },
  {
    rank: 68,
    name: "Lakestar",
    sectors: ["Fintech", "Deep Tech", "Defense & Dual-Use", "Consumer Internet"],
    signatureExit: "Spotify's 2018 New York Stock Exchange direct listing - one of Klaus Hommels' early European conviction bets, made years before the streaming company reached mainstream household status",
    slug: "lakestar",
    website: "https://lakestar.com",
    short: "Lakestar",
    founded: 2012,
    hq: "Zurich, Switzerland",
    aum: "€2B+ ($2B+)",
    thesis: "Lakestar was founded in 2012 by Klaus Hommels, a former Benchmark Capital Europe venture partner already famous for early personal bets on Skype, Facebook, and Spotify before the firm even existed. Since raising its first institutional fund in 2013, Lakestar has grown into one of Europe's largest venture platforms, managing more than €2 billion across early-stage and growth vehicles, with offices spanning Zurich, Berlin, London, New York, and Hong Kong. In October 2025, the firm announced a significant strategic shift: rather than raising further generalist funds from outside LPs, Hommels will now invest primarily from his own personal capital going forward, concentrating on doubling down on existing bets like Revolut and defense-technology unicorn Helsing, alongside a dedicated $300 million Resilience Fund launched in July 2026 for European defense and dual-use technology.",
    leadership: [
      { name: "Klaus Hommels", role: "Founder & Chairman", profileSlug: "klaus-hommels" }
    ],
    timeline: [
      { year: "2012", event: "Klaus Hommels founds Lakestar in Zurich." },
      { year: "2013", event: "Raises its first institutional fund, Lakestar I, at €150 million." },
      { year: "2018", event: "Spotify completes its direct listing on the NYSE." },
      { year: "2019", event: "Closes a $700-800 million fund." },
      { year: "2025", event: "Closes a $265 million continuation fund in September; announces in October it will halt new generalist fund fundraising in favor of personal capital." },
      { year: "2026", event: "Launches a dedicated $300 million Resilience Fund for European defense and dual-use technology in July." }
    ],
    holdings: [
      { name: "Spotify", ticker: "SPOT", historicalPrice: null, price: 482.66 },
      { name: "SoFi", ticker: "SOFI", historicalPrice: null, price: 16.74 }
    ]
  },
  {
    rank: 69,
    name: "East Ventures",
    sectors: ["Consumer Internet", "Fintech", "Marketplaces", "Logistics"],
    signatureExit: "Tokopedia, East Ventures' most famous early bet, merged with Gojek to form GoTo and completed one of Indonesia's largest-ever IPOs on the Jakarta exchange in 2022",
    slug: "east-ventures",
    website: "https://east.vc",
    short: "East Ventures",
    founded: 2009,
    hq: "Singapore",
    aum: "Not publicly disclosed (300+ portfolio companies across seed to growth)",
    thesis: "East Ventures was founded in 2009 by Willson Cuaca, Batara Eto, and Taiga Matsuyama, making it one of the first venture capital firms operating in Indonesia at a time when, in the founders' own words, essentially no one believed in the country's consumer internet potential. That early, uncontested conviction let the firm become the seed investor behind several of Southeast Asia's largest tech companies, most famously Tokopedia, which later merged with Gojek to form GoTo and completed one of Indonesia's largest-ever public listings in 2022. East Ventures has since transformed into a multi-asset platform spanning seed through growth stage across Indonesia, Japan, Singapore, Thailand, Malaysia, Vietnam, and the US, investing in more than 300 companies and repeatedly ranked the most active investor in Southeast Asia by CB Insights, Preqin, and Crunchbase.",
    leadership: [
      { name: "Willson Cuaca", role: "Co-Founder & Managing Partner", profileSlug: "willson-cuaca" },
      { name: "Batara Eto", role: "Co-Founder & Managing Partner" },
      { name: "Taiga Matsuyama", role: "Co-Founder & Managing Partner" }
    ],
    timeline: [
      { year: "2009", event: "Willson Cuaca, Batara Eto, and Taiga Matsuyama found East Ventures, one of the first VC firms in Indonesia." },
      { year: "2010", event: "Makes its early seed investment in Tokopedia." },
      { year: "2020", event: "Launches EV Growth, a growth-stage vehicle, alongside Sinar Mas Digital Ventures and Yahoo Japan Capital." },
      { year: "2022", event: "Tokopedia merges with Gojek to form GoTo, completing one of Indonesia's largest-ever IPOs." },
      { year: "2026", event: "Portfolio surpasses 300 companies across seven countries." }
    ],
    holdings: [
      { name: "Tokopedia (GoTo)", ticker: "GOTO.JK", historicalPrice: null, price: null },
      { name: "Fore Coffee", ticker: "FORE.JK", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 36,
    name: "Atomico",
    sectors: ["AI", "Enterprise Software", "Fintech", "Healthcare", "Consumer Internet"],
    signatureExit: "Supercell's 2016 sale to Tencent in a deal valued at roughly $8.6 billion - one of the largest exits in European venture history",
    slug: "atomico",
    website: "https://atomico.com",
    short: "Atomico",
    founded: 2006,
    hq: "London, UK",
    aum: "Firmwide AUM not disclosed; Fund VI reported at ~$1.24B (2024)",
    thesis: "Atomico was founded in 2006 by Niklas Zennström, who built the firm after Skype specifically to prove Europe could produce global category leaders, not just regional startups. That founder-built, globally ambitious identity still shapes the firm's structure today: a Venture strategy for early conviction and a Growth strategy that keeps Atomico relevant through scaling and public-market preparation. The current partner mix reflects a deliberate barbell between AI-native enterprise automation and scale-stage company building, with Supercell's $8.6 billion sale to Tencent in 2016 standing as one of the largest exits in European venture history.",
    leadership: [
      { name: "Niklas Zennström", role: "Founder & CEO", profileSlug: "niklas-zennstrom" },
      { name: "Ben Blume", role: "Partner", profileSlug: "ben-blume" },
      { name: "Laura Connell", role: "Partner", profileSlug: "laura-connell" }
    ],
    timeline: [
      { year: "2006", event: "Niklas Zennström founds Atomico in London after co-founding Skype." },
      { year: "2016", event: "Supercell is sold to Tencent in a deal valued at roughly $8.6 billion." },
      { year: "2021", event: "Ben Blume becomes Partner." },
      { year: "2022", event: "Laura Connell joins as Partner, growth-stage investing." },
      { year: "2024", event: "Closes Fund VI at approximately $1.24 billion." },
      { year: "2025", event: "Portfolio company Hinge Health completes its IPO." }
    ],
    holdings: [
      { name: "Hinge Health", ticker: "HNGE", historicalPrice: null, price: 87.42 }
    ]
  },
  {
    rank: 37,
    name: "BMW i Ventures",
    sectors: ["Mobility", "Climate", "AI"],
    signatureExit: "Xometry's June 2021 Nasdaq IPO - Partner Baris Guzel led the manufacturing marketplace's Series B in 2017 as his very first BMW i Ventures investment, and rang the Nasdaq bell alongside the company's team at its debut",
    slug: "bmw-i-ventures",
    website: "https://www.bmwiventures.com",
    short: "BMW i Ventures",
    founded: 2011,
    hq: "Mountain View, CA",
    aum: "$1.1B+ (Fund III closed at $300M, April 2026)",
    thesis: "BMW i Ventures has operated as an investing platform since 2011, moving to an independent fund structure in 2016, and it functions closer to a high-performing independent fund than a typical corporate VC while still leveraging BMW as a strategic partner. The firm repeatedly stresses financial discipline and Silicon Valley speed, backing more than 90 companies across mobility, supply chain, sustainability, manufacturing, and increasingly AI. Its clearest recent proof point is Xometry, the on-demand manufacturing marketplace it backed at Series B in 2017 and which went public on the Nasdaq in June 2021 - one of several public outcomes alongside ChargePoint, which reached a $2.4 billion valuation at its own 2020 public debut. BMW announced a new $300 million Fund III in April 2026, pushing total capital under management above $1.1 billion.",
    leadership: [
      { name: "Marcus Behrendt", role: "Managing Partner", profileSlug: "marcus-behrendt" },
      { name: "Kasper Sage", role: "Managing Partner", profileSlug: "kasper-sage" },
      { name: "Baris Guzel", role: "Partner", profileSlug: "baris-guzel" }
    ],
    timeline: [
      { year: "2011", event: "BMW establishes what becomes BMW i Ventures as an investing platform." },
      { year: "2016", event: "The platform moves to an independent fund structure." },
      { year: "2017", event: "Baris Guzel joins and leads Xometry's Series B as his first investment for the firm." },
      { year: "2020", event: "ChargePoint reaches a $2.4 billion valuation at its public market debut in September." },
      { year: "2021", event: "Xometry goes public on the Nasdaq in June." },
      { year: "2026", event: "BMW closes a new $300 million Fund III in April, pushing total AUM above $1.1 billion." }
    ],
    holdings: [
      { name: "ChargePoint", ticker: "CHPT", historicalPrice: null, price: 5.84 },
      { name: "Xometry", ticker: "XMTR", historicalPrice: null, price: 50.96 }
    ]
  },
  {
    rank: 36,
    name: "Felicis",
    sectors: ["AI", "Cybersecurity", "Defense Tech", "Healthcare", "Clean Energy", "Enterprise Software"],
    signatureExit: "Shopify's 2015 NYSE IPO - Felicis participated in the company's $15 million Series A and rode it to a market capitalization of roughly $148.3 billion by July 2026",
    slug: "felicis",
    website: "https://www.felicis.com",
    short: "Felicis",
    founded: 2006,
    hq: "Menlo Park, CA",
    aum: "$900M (Fund X, 2025)",
    thesis: "Aydin Senkut was Google's first product manager, helping launch the company's first ten international sites, before founding Felicis in 2006 as one of the original 'super angels.' He scaled that early instinct for non-consensus founders into a genuine multi-stage platform, beginning the transition from solo investor to institutional fund in 2010 - the firm's own timeline features the 2015 Shopify and Fitbit IPOs as the proof point. Felicis has since raised FV VII at $510 million in 2020, FV VIII at $600 million and Focus Fund I at $300 million in 2021, and a $900 million Fund X in 2025, its largest yet, while keeping first checks contractually barred from voting against the founder.",
    leadership: [
      { name: "Aydin Senkut", role: "Founder & Managing Partner", profileSlug: "aydin-senkut" }
    ],
    timeline: [
      { year: "2006", event: "Aydin Senkut founds Felicis in Menlo Park after serving as Google's first product manager." },
      { year: "2010", event: "The firm begins its transition from a solo venture to an institutional fund, hiring its first two investors." },
      { year: "2015", event: "Portfolio companies Shopify and Fitbit both go public." },
      { year: "2020", event: "Closes FV VII at $510 million." },
      { year: "2021", event: "Closes FV VIII at $600 million and Focus Fund I at $300 million." },
      { year: "2025", event: "Closes Fund X at $900 million, the firm's largest, on its 19th anniversary." }
    ],
    holdings: [
      { name: "Shopify", ticker: "SHOP", historicalPrice: 107.53, price: 123.56 },
      { name: "Guardant Health", ticker: "GH", historicalPrice: null, price: 159.54 },
      { name: "Ginkgo Bioworks", ticker: "DNA", historicalPrice: null, price: 7.24 }
 
    ]
  },
  {
    rank: 37,
    name: "Amplify Partners",
    sectors: ["AI", "Developer Tools", "Cybersecurity", "Enterprise Software", "Cloud Infrastructure"],
    signatureExit: "Datadog's 2019 Nasdaq IPO - Amplify was one of the company's first institutional investors, more than a decade before the observability platform reached a market capitalization of roughly $93 billion by July 2026",
    slug: "amplify-partners",
    website: "https://www.amplifypartners.com",
    short: "Amplify Partners",
    founded: 2012,
    hq: "Menlo Park, CA",
    aum: "$900M (Fund 6, Fund 6 Select & Amplify Bio, June 2025)",
    thesis: "Amplify Partners was founded in 2012 with an unusually specific identity: it calls itself the first investor built for technical founders, not software founders broadly. The firm made its name as one of the earliest institutional backers of Datadog and Fastly more than a decade ago, when technical founders running B2B infrastructure companies were still considered unconventional bets, and it has kept that thesis through waves of developer tools, data infrastructure, and AI/ML platform investing. In June 2025 Amplify closed $900 million across three vehicles - a $400 million core Fund 6, a $300 million Fund 6 Select for follow-on support, and a new $200 million Amplify Bio fund marking its first dedicated push into digital biology.",
    leadership: [
      { name: "Mike Dauber", role: "General Partner", profileSlug: "mike-dauber" },
      { name: "Sunil Dhaliwal", role: "Founder & General Partner", profileSlug: "sunil-dhaliwal" },
      { name: "Sarah Catanzaro", role: "General Partner", profileSlug: "sarah-catanzaro" },
      { name: "Lenny Pruss", role: "General Partner", profileSlug: "lenny-pruss" }
    ],
    timeline: [
      { year: "2012", event: "Amplify Partners is founded, built specifically around backing technical founders." },
      { year: "2019", event: "Portfolio company Datadog goes public on the Nasdaq at $27 per share." },
      { year: "2022", event: "Closes its prior pair of funds, continuing to back developer tools and infrastructure founders." },
      { year: "2025", event: "Closes $900 million across Fund 6, Fund 6 Select, and its first dedicated Amplify Bio fund." }
    ],
    holdings: [
      { name: "Datadog", ticker: "DDOG", historicalPrice: 143.63, price: 255.00 }
    ]
  },
  {
    rank: 39,
    name: "Toyota Ventures",
    sectors: ["AI", "Robotics", "Climate", "Enterprise Software"],
    signatureExit: "No public exit yet - Toyota Ventures' clearest proof point remains Nuro, the self-driving delivery company it backed early, which stays private, alongside continued frontier bets in generative AI, e-fuels, space commercialization, and synthetic biology",
    slug: "toyota-ventures",
    website: "https://toyota.ventures",
    short: "Toyota Ventures",
    founded: 2017,
    hq: "Los Altos, CA",
    aum: "$800M+ (following two additional $150M funds, 2024)",
    thesis: "Toyota Ventures was founded in July 2017 as Toyota AI Ventures, a subsidiary of Toyota Research Institute, before rebranding to its current name in 2021 alongside the launch of dedicated Frontier and Climate funds. Founder Jim Adler describes the firm's structure as deliberately founder-first, built around three stakeholders - startups, Toyota's corporate partner, and the Toyota Ventures team itself - with founders treated as the primary customer rather than Toyota. That philosophy has held through market cycles: in 2024, while some investors were scaling back, Toyota Ventures raised two additional $150 million funds (Frontier Fund II and Climate Fund II), pushing total assets under management above $800 million and reinforcing bets across generative AI, robotics, e-fuels, and synthetic biology.",
    leadership: [
      { name: "Jim Adler", role: "Founder & General Partner", profileSlug: "jim-adler" },
      { name: "David Sokolic", role: "Partner, Frontier Fund", profileSlug: "david-sokolic" }
    ],
    timeline: [
      { year: "2017", event: "Jim Adler founds Toyota AI Ventures in July as a subsidiary of Toyota Research Institute, with an initial $100 million fund." },
      { year: "2019", event: "Launches Fund II at $100 million, pushing AUM past $200 million across 19 startups." },
      { year: "2021", event: "Rebrands to Toyota Ventures, launching dedicated Frontier and Climate funds with $300 million in new capital." },
      { year: "2024", event: "Raises Frontier Fund II and Climate Fund II at $150 million each, pushing total AUM above $800 million." }
    ],
    holdings: []
  },
  {
    rank: 39,
    name: "BECO Capital",
    sectors: ["Fintech", "Enterprise Software", "Consumer", "AI"],
    signatureExit: "Careem's 2019 acquisition by Uber for $3.1 billion - BECO was an early backer of the Gulf's dominant ride-hailing company, one of two billion-dollar-plus exits in the firm's track record alongside Property Finder",
    slug: "beco-capital",
    website: "https://beco.capital",
    short: "BECO Capital",
    founded: 2012,
    hq: "Dubai, UAE",
    aum: "$820M+ (across five funds)",
    thesis: "BECO Capital was founded in 2012 by Dany Farha, Abdulaziz Shikh Al Sagha, and Yousef Hammad, building what became the longest-serving Dubai-based venture capital firm investing in the MENA digital sector at a time when institutional venture capital in the Gulf barely existed. The firm's name references Booster Engine Cut Off - the rocket-launch moment a vessel achieves enough altitude to exit the atmosphere - reflecting its self-described role helping founders escape early-stage gravity. That early conviction produced Careem, which Uber acquired for $3.1 billion in 2019, and BECO has since built a genuinely full-stack platform spanning Pre-Seed through pre-IPO, closing $370 million across two new funds in September 2025 to push total assets under management above $820 million - making it the largest non-government early-stage venture firm in the Gulf.",
    leadership: [
      { name: "Dany Farha", role: "Co-Founder & Managing Partner", profileSlug: "dany-farha" },
      { name: "Abdulaziz Shikh Al Sagha", role: "Co-Founder & Managing Partner", profileSlug: "abdulaziz-shikh-al-sagha" },
      { name: "Yousef Hammad", role: "Co-Founder & Managing Partner", profileSlug: "yousef-hammad" }
    ],
    timeline: [
      { year: "2012", event: "Dany Farha, Abdulaziz Shikh Al Sagha, and Yousef Hammad found BECO Capital in Dubai." },
      { year: "2019", event: "Careem, an early BECO investment, is acquired by Uber for $3.1 billion." },
      { year: "2024", event: "AUM reaches $495 million across four funds." },
      { year: "2025", event: "Closes $370 million across two new funds in September, pushing AUM beyond $820 million." }
    ],
    holdings: []
  },
  {
    rank: 38,
    name: "Wing Venture Capital",
    sectors: ["AI", "Data Infrastructure", "Enterprise Software", "Cybersecurity", "Developer Tools"],
    signatureExit: "Snowflake's 2020 NYSE IPO - Wing was a first-check investor in the data cloud company, which priced at $120 per share and closed its first trading day valued at over $70 billion",
    slug: "wing-vc",
    website: "https://wing.vc",
    short: "Wing VC",
    founded: 2013,
    hq: "Palo Alto, CA",
    aum: "$600M (Wing Four, 2023)",
    thesis: "Wing Venture Capital was founded in 2013 and has sharpened over time from a classic enterprise-investing heritage into what it now calls an AI-first technology stack firm. The firm's team bios read unusually specifically for a generalist-sized fund - AI infrastructure, AI applications, security, bio times data, and autonomous software - and its public materials frame the mission around AI, data, autonomous applications, and product-led growth rather than enterprise software broadly. Wing was a first-check investor in Snowflake years before its 2020 IPO, and closed Wing Four, a $600 million early-stage fund, in July 2023.",
    leadership: [
    { name: "Gaurav Garg", role: "Founding Partner", profileSlug: "gaurav-garg" },
      { name: "Peter Wagner", role: "Founding Partner", profileSlug: "peter-wagner" },
      { name: "Sara Choi", role: "Partner", profileSlug: "sara-choi" }
    ],
    timeline: [
      { year: "2013", event: "Gaurav Garg and Peter Wagner found Wing Venture Capital in Palo Alto." },
      { year: "2020", event: "Raises a $450 million third fund and publicly highlights Snowflake, Cohesity, and Gong; Snowflake goes public in September." },
      { year: "2023", event: "Closes Wing Four, a $600 million early-stage fund, in July." }
    ],
    holdings: [
      { name: "Snowflake", ticker: "SNOW", historicalPrice: 157.51, price: 250.00 }
    ]
  },
  {
    rank: 39,
    name: "Cherry Ventures",
    sectors: ["AI", "Enterprise Software", "Fintech", "Climate", "Healthcare"],
    signatureExit: "AUTO1 Group's 2021 Frankfurt debut, which implied a market value of around €10.6 billion on day one",
    slug: "cherry-ventures",
    website: "https://www.cherry.vc",
    short: "Cherry Ventures",
    founded: 2012,
    hq: "Berlin, Germany",
    aum: "$500M (new funds announced 2025: Cherry V + opportunity fund)",
    thesis: "Cherry Ventures was founded in 2012 by Filip Dames and Christian Meermann, both out of Zalando, and turned 'operator DNA' from a slogan into an organizational design principle. Its later partner bench added Spotify and Atomico experience, and the firm now openly argues that Europe's next trillion-dollar company could emerge from a wider set of domains than classic SaaS alone, including AI infrastructure, energy, and deep tech. The firm's 2025 fundraise - $500 million across its flagship early-stage fund and a new opportunity fund - was strategically designed to preserve Cherry's seed identity while adding enough later-stage capital to avoid losing influence once its companies scale, following AUTO1 Group's roughly €10.6 billion Frankfurt debut in 2021.",
    leadership: [
      { name: "Filip Dames", role: "Founding Partner", profileSlug: "filip-dames" },
      { name: "Christian Meermann", role: "Founding Partner", profileSlug: "christian-meermann" },
      { name: "Sophia Bendz", role: "Partner", profileSlug: "sophia-bendz" },
      { name: "Dinika Mahtani", role: "Partner", profileSlug: "dinika-mahtani" }
    ],
    timeline: [
      { year: "2012", event: "Filip Dames and Christian Meermann co-found Cherry Ventures in Berlin, both coming out of Zalando." },
      { year: "2020", event: "Sophia Bendz joins as Partner." },
      { year: "2021", event: "AUTO1 Group debuts in Frankfurt at an implied €10.6 billion valuation." },
      { year: "2025", event: "Announces $500 million in new funds across Cherry V and a new opportunity fund; firm backs 130+ portfolio companies." }
    ],
    holdings: [
    { name: "AUTO1 Group", ticker: "AG1.DE", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 37,
    name: "Madrona Venture Group",
    sectors: ["AI", "Cloud Infrastructure", "Enterprise Software", "Marketplaces"],
    signatureExit: "Redfin's 2017 Nasdaq IPO - one of several Madrona 'day one to IPO' partnerships, alongside Smartsheet's 2018 listing and Impinj's public debut",
    slug: "madrona",
    website: "https://www.madrona.com",
    short: "Madrona",
    founded: 1995,
     hq: "Seattle, WA",
  aum: "$770M (Fund X + Acceleration Fund IV, 2025)",
    thesis: "Madrona Venture Group was founded in Seattle in 1995 by Tom Alberg, Paul Goodrich, Gerald Grinstein, and William Ruckelshaus, and built its identity around day-one partnerships it then holds for decades. The firm's own materials lean on Smartsheet, Redfin, Impinj, and Apptio as case studies in patient company formation rather than quick flips - a framing that fits a firm where more than 90% of investments were once concentrated in the Pacific Northwest. Madrona said it managed nearly $1.6 billion when Fund VII closed in 2018, and closed its largest fundraise yet - $770 million across Fund X and Acceleration Fund IV - in January 2025 to mark the firm's 30th year, now focused on applied AI, developer tools, cloud infrastructure, and AI-enabled biology.",
    leadership: [
      { name: "Matt McIlwain", role: "Managing Director", profileSlug: "matt-mcilwain" },
      { name: "Tom Alberg", role: "Co-Founder (1995)", profileSlug: "tom-alberg" },
      { name: "Paul Goodrich", role: "Co-Founder (1995)", profileSlug: "paul-goodrich" }
    ],
    timeline: [
      { year: "1995", event: "Tom Alberg, Paul Goodrich, Gerald Grinstein, and William Ruckelshaus found Madrona in Seattle." },
      { year: "2000", event: "Matt McIlwain joins the firm as a Managing Director." },
      { year: "2014", event: "Launches Madrona Venture Labs, an in-house startup studio." },
      { year: "2018", event: "Fund VII closes and the firm says it manages nearly $1.6 billion; portfolio company Smartsheet goes public." },
     { year: "2022", event: "Raises $690 million across Fund 9 and Acceleration Fund 3." },
      { year: "2025", event: "Closes its largest fundraise yet, $770 million across Fund X and Acceleration Fund IV, marking the firm's 30th year." }
    ],
    holdings: [
    { name: "Impinj", ticker: "PI", historicalPrice: null, price: 178.81 }
    ]
  },
  {
    rank: 38,
    name: "Haystack",
    sectors: ["Consumer", "Cloud/SaaS", "AI", "Autonomy"],
    signatureExit: "DoorDash's 2020 IPO - Semil Shah invested in DoorDash's $2.5 million seed round in 2013, one of Haystack's very first bets, made within six months of founding the firm",
    slug: "haystack",
    website: "https://haystack.vc",
    short: "Haystack",
    founded: 2013,
    hq: "San Francisco, CA",
    aum: "$450M+",
    thesis: "Semil Shah founded Haystack in 2013 as one of the original solo general partners in venture capital - a structure he adopted partly because he didn't fit what traditional firms were looking for at the time. He built his investor network the unconventional way, through frequent public writing about startups that drew in the early backers who funded his first checks. Within Haystack's first six months, Shah invested in DoorDash's $2.5 million seed round, a bet that would grow into a company worth tens of billions by its 2020 IPO. He has since backed Instacart, Figma, and HashiCorp - all of which went public or were acquired for billions of dollars - while keeping Haystack a small, tightly focused team built around founder selection above all else.",
    leadership: [
      { name: "Semil Shah", role: "Founder & General Partner", profileSlug: "semil-shah" }
    ],
    timeline: [
      { year: "2013", event: "Semil Shah founds Haystack as a solo general partner." },
      { year: "2013", event: "Invests in DoorDash's $2.5 million seed round within Haystack's first six months." },
      { year: "2018", event: "Also joins Lightspeed Venture Partners as a Venture Partner." },
      { year: "2020", event: "DoorDash goes public." },
      { year: "2022", event: "Shah is named to the Forbes Midas Seed List for the first time, a recognition repeated in 2023 and 2024." }
    ],
    holdings: [
      { name: "DoorDash", ticker: "DASH", historicalPrice: 170.65, price: 175.00 },
      { name: "Instacart", ticker: "CART", historicalPrice: null, price: 45.82 },
      { name: "Figma", ticker: "FIG", historicalPrice: null, price: 23.95 }
  ]
  },
  {
    rank: 39,
    name: "Matrix Partners",
    sectors: ["AI", "Infrastructure", "Fintech", "Semiconductors", "B2B Software", "Health Tech"],
    signatureExit: "Oculus VR's 2014 acquisition by Facebook for approximately $2.3 billion - Matrix backed the company at an early stage",
    slug: "matrix-partners",
    website: "https://matrix.vc",
    short: "Matrix Partners",
    founded: 1977,
    hq: "Cambridge, MA",
    aum: "$450M+",
    thesis: "Matrix Partners traces its roots to the 1977 breakup of Hellman Ferri Investment Associates, when co-founder Paul Ferri chose to focus exclusively on very early-stage technology investing while his former partner built a separate later-stage firm - giving Matrix unusually deep roots in the formative era of American venture capital. The firm has deliberately kept its U.S. fund sizes modest, capped around $450 million, even as many peers raised multi-billion-dollar vehicles, preferring to stay a close-knit team of former founders investing from idea through Series A. That contrarian discipline backed Oculus VR at an early stage, a bet that returned dramatically when Facebook acquired the company for approximately $2.3 billion in 2014, and the firm's partner David Skok has become widely known for SaaS metrics essays that remain standard reading for founders industry-wide.",
    leadership: [
      { name: "Paul Ferri", role: "Founder (1977)", profileSlug: "paul-ferri" },
      { name: "Ilya Sukhar", role: "General Partner", profileSlug: "ilya-sukhar" }
    ],
    timeline: [
      { year: "1977", event: "Paul Ferri founds Matrix Partners in the breakup of Hellman Ferri Investment Associates." },
      { year: "2001", event: "Matrix VII closes at $1 billion, before the firm later shifts to smaller, more disciplined fund sizes." },
      { year: "2012", event: "Backs Oculus VR at an early stage." },
      { year: "2014", event: "Facebook acquires Oculus VR for approximately $2.3 billion." },
      { year: "2016", event: "Ilya Sukhar joins as a General Partner after selling Parse to Facebook." }
    ],
    holdings: [
      { name: "HubSpot", ticker: "HUBS", historicalPrice: null, price: 240.51 }
    ]
  },
  {
    rank: 40,
    name: "BOLD Capital Partners",
    sectors: ["AI", "Healthcare", "Robotics", "Climate"],
    signatureExit: "No single dollar-verified signature exit - BOLD's clearest proof points are two portfolio companies that reached the public markets via Hong Kong listings: Insilico Medicine (HKEX: 3696) and Deep Longevity (SEHK: 0575)",
    slug: "bold-capital-partners",
    website: "https://boldcapitalpartners.com",
    short: "BOLD Capital",
    founded: 2015,
    hq: "Santa Monica, CA",
    aum: "~$500M (across its main fund and dedicated vehicles, per third-party reporting)",
    thesis: "BOLD Capital Partners was founded in 2015 by Peter Diamandis, the space and longevity entrepreneur behind XPRIZE and Singularity University, alongside Teymour Boutros-Ghali, Neal Bhadkamkar, and Emilio Diez Barroso. The firm is best understood as a convergence investor rather than a category-siloed one: its own language centers on technologies at the intersection of the physical, digital, virtual, and biological worlds, with especially heavy emphasis on longevity, synthetic biology, AI, and robotics. That framing shows up directly in its portfolio, which includes two companies that went public via Hong Kong exchange listings - Insilico Medicine and Deep Longevity - alongside continued early-stage bets in advanced robotics and construction technology.",
    leadership: [
  { name: "Peter Diamandis", role: "Co-Founder & Partner", profileSlug: "peter-diamandis" },
      { name: "Teymour Boutros-Ghali", role: "Co-Founder & Managing Partner", profileSlug: "teymour-boutros-ghali" },
      { name: "Neal Bhadkamkar", role: "General Partner", profileSlug: "neal-bhadkamkar" },
      { name: "Emilio Diez Barroso", role: "General Partner", profileSlug: "emilio-diez-barroso" }
    ],
    timeline: [
      { year: "2015", event: "Peter Diamandis and Teymour Boutros-Ghali co-found BOLD Capital Partners in Santa Monica." },
      { year: "2019", event: "Portfolio company Insilico Medicine and Deep Longevity begin building toward eventual Hong Kong exchange listings." },
      { year: "2024", event: "Insilico Medicine and Deep Longevity both complete public listings on the Hong Kong Stock Exchange." }
    ],
    holdings: []
  },
  {
    rank: 41,
    name: "Bloomberg Beta",
    sectors: ["AI", "Enterprise Software", "Fintech", "Future of Work"],
    signatureExit: "No public exits yet - the firm instead measures itself by founder outcomes: head Roy Bahat cites 93 founders who've become millionaires from Bloomberg Beta-backed companies as the metric he's proudest of, ahead of raw returns",
    slug: "bloomberg-beta",
    website: "https://www.bloombergbeta.com",
    short: "Bloomberg Beta",
    founded: 2013,
    hq: "San Francisco, CA",
    aum: "$450M",
    thesis: "Bloomberg Beta launched in June 2013 with $75 million from Bloomberg L.P. as its sole limited partner, and has raised four more $75 million funds since, plus a matching $75 million opportunity fund, for $450 million total - all still capitalized entirely by Bloomberg. The firm runs an unusually transparent, unconventional model for a corporate-backed fund: any of its three equal partners can independently say yes to a deal, and its full operating manual has been public on GitHub since inception. Focused on machine intelligence and the future of work, the firm has made roughly 367 investments in companies including Replit, Flexport, LaunchDarkly, MasterClass, Netlify, and Weights & Biases, and was once ranked the #2 AI investor globally by CB Insights.",
    leadership: [
      { name: "Roy Bahat", role: "Head & Partner", profileSlug: "roy-bahat" },
      { name: "Karin Klein", role: "Partner", profileSlug: "karin-klein" },
      { name: "James Cham", role: "Partner", profileSlug: "james-cham" }
    ],
    timeline: [
      { year: "2013", event: "Roy Bahat launches Bloomberg Beta in June with an initial $75 million fund from Bloomberg L.P." },
      { year: "2016", event: "Closes a second $75 million fund." },
      { year: "2019", event: "Closes a third $75 million fund." },
      { year: "2022", event: "Closes a fourth $75 million fund alongside its first $75 million opportunity fund, bringing total AUM to $450 million." },
      { year: "2025", event: "Bahat discusses the firm's fifth $75 million fund, citing 93 founders who've become millionaires from its investments." }
    ],
    holdings: []
  },
  {
    rank: 42,
    name: "Ventures Platform",
    sectors: ["Fintech", "Healthcare", "Enterprise Software", "AI"],
    signatureExit: "Paystack's 2020 acquisition by Stripe for approximately $200 million - Ventures Platform was an early institutional investor in the Nigerian payments company, still the largest startup acquisition in Nigerian history at the time",
    slug: "ventures-platform",
    website: "https://www.venturesplatform.com",
    short: "Ventures Platform",
    founded: 2016,
    hq: "Abuja, Nigeria",
    aum: "$64M+ (Fund II first close, November 2025)",
    thesis: "Ventures Platform was founded by Kola Aina in Abuja in June 2016, after he'd already been actively angel investing across Nigeria's tech scene. The firm's geographic starting point is deliberate: building from Abuja rather than the more saturated Lagos venture ecosystem gave it earlier access to founders in northern Nigeria and, more recently, Francophone West Africa, markets most Anglophone-focused firms overlook entirely. That first-mover instinct produced Paystack, one of the firm's earliest bets and still the most consequential Nigerian startup acquisition on record when Stripe bought it for roughly $200 million in 2020. Ventures Platform has since backed more than 90 startups across fintech, healthtech, agritech, and AI, closing $64 million toward a $75 million target for Fund II in November 2025 with backing from the IFC, British International Investment, and Nigeria's government-backed iDICE program - the first time the Nigerian government has invested directly in a venture fund.",
    leadership: [
      { name: "Kola Aina", role: "Founding Partner", profileSlug: "kola-aina" },
      { name: "Dotun Olowoporoku", role: "Managing Partner", profileSlug: "dotun-olowoporoku" }
    ],
    timeline: [
      { year: "2016", event: "Kola Aina founds Ventures Platform in Abuja." },
      { year: "2020", event: "Paystack, an early Ventures Platform investment, is acquired by Stripe for approximately $200 million." },
      { year: "2025", event: "Closes $64 million for Fund II in November, with the Nigerian government investing directly in a VC fund for the first time." }
    ],
    holdings: []
  },
  {
    rank: 42,
    name: "Comcast Ventures",
    sectors: ["Consumer Internet", "Enterprise Software", "Media Tech", "Fintech"],
    signatureExit: "Sprinklr's 2021 NYSE IPO, priced at $16 per share and valuing the customer experience management company at roughly $4 billion",
    slug: "comcast-ventures",
    website: "https://comcastventures.com",
    short: "Comcast Ventures",
    founded: 1999,
    hq: "Philadelphia, PA",
    aum: "$200M",
    thesis: "Comcast Ventures traces back to 1999 as Comcast Interactive Capital, later merging with NBCUniversal's Peacock Fund in 2011 to form its current structure as Comcast's corporate venture affiliate. The firm's real differentiator is access: portfolio companies get direct exposure to Comcast's scale across media, advertising, and telecom, and the firm has built a genuinely diverse 130-plus-company portfolio spanning consumer, enterprise, and frontier technology. Its Catalyst Fund, launched in 2012 with $20 million dedicated to underrepresented entrepreneurs, later grew into a $200 million fund supporting racial equity, reflecting an unusually long-running institutional commitment to that focus area alongside its core investing activity.",
    leadership: [
      { name: "Allison Goldberg", role: "Managing Partner", profileSlug: "allison-goldberg" },
      { name: "Marc Silberman", role: "Partner", profileSlug: "marc-silberman" },
      { name: "Michelle Chang", role: "Partner", profileSlug: "michelle-chang" }
    ],
    timeline: [
      { year: "1999", event: "Comcast launches Comcast Interactive Capital, its first venture investing arm." },
      { year: "2011", event: "Comcast and NBCUniversal combine their venture arms into Comcast Ventures." },
      { year: "2012", event: "Launches the Catalyst Fund, initially $20 million, focused on underrepresented entrepreneurs." },
      { year: "2021", event: "Portfolio company Sprinklr goes public on the NYSE at a roughly $4 billion valuation." },
      { year: "2021", event: "Allison Goldberg joins as Managing Partner in November, after running Time Warner Investments." }
    ],
    holdings: [
      { name: "Sprinklr", ticker: "CXM", historicalPrice: null, price: 7.03 }
    ]
  },
  {
    rank: 44,
    name: "TLcom Capital",
    sectors: ["Fintech", "Agritech", "Edtech", "Mobility"],
    signatureExit: "No confirmed public exit yet - Andela, backed three years before reaching a $1.5 billion valuation in 2021, remains TLcom's clearest proof point as one of Africa's few non-fintech unicorns, though it stays privately held",
    slug: "tlcom-capital",
    website: "https://www.tlcomcapital.com",
    short: "TLcom Capital",
    founded: 1999,
    hq: "Nairobi, Kenya",
    aum: "$300M+ (across all funds)",
    thesis: "TLcom Capital was founded in 1999 by Maurizio Caio, a former Bain & Company and McKinsey consultant who spent 15 years advising telecom and technology executives before deciding entrepreneurs building African technology companies deserved the same caliber of strategic support. That conviction became concrete with the 2017 launch of the TIDE Africa Fund, and TLcom has since become one of the longest-running and most active Africa-focused technology investors, providing $500,000 to $15 million checks across fintech, agritech, edtech, mobility, and healthcare. The firm counts Andela, Twiga Foods, Pula, uLesson, and Kobo360 among its portfolio, backed by institutional investors including the European Investment Bank and IFC, and expanded its geographic mandate into North Africa in 2022.",
    leadership: [
      { name: "Maurizio Caio", role: "Founder & Managing Partner", profileSlug: "maurizio-caio" },
      { name: "Omobola Johnson", role: "Senior Partner", profileSlug: "omobola-johnson" },
      { name: "Andreata Muforo", role: "Partner", profileSlug: "andreata-muforo" }
    ],
    timeline: [
      { year: "1999", event: "Maurizio Caio founds TLcom Capital." },
      { year: "2017", event: "Launches the TIDE Africa Fund with $71 million, backing Andela and Twiga Foods." },
      { year: "2021", event: "Andela reaches a $1.5 billion valuation." },
      { year: "2022", event: "Expands the firm's mandate into North Africa, starting with Egypt." },
      { year: "2023", event: "Nears the final close of a second fund targeting $150 million." }
    ],
    holdings: []
  },
  {
    rank: 45,
    name: "YL Ventures",
    sectors: ["Cybersecurity", "AI Security"],
    signatureExit: "Twistlock's 2019 acquisition by Palo Alto Networks for $410 million - Senior Partner Ofer Schreiber was Twistlock's original seed investor",
    slug: "yl-ventures",
    website: "https://www.ylventures.com",
    short: "YL Ventures",
    founded: 2007,
    hq: "Tel Aviv, Israel",
    aum: "$800M",
    thesis: "YL Ventures was founded in 2007 by Yoav Leitersdorf and has narrowed over time into one of the most specialized seed-stage funds in venture capital: cybersecurity exclusively, sourced almost entirely from Israeli founding teams. The firm's real differentiator is its value-add network - more than 120 chief information security officers advise on deal vetting and market validation in exchange for a share of carried interest, giving YL Ventures what Leitersdorf calls first access to nearly every serious cybersecurity deal coming out of Israel. That model has produced a strong track record of exits including Twistlock, acquired by Palo Alto Networks for $410 million, and continued backing of category leaders like Orca Security and Cybereason, with Fund V closing at $400 million in 2022 - the largest seed fund ever raised specifically for cybersecurity - and total funds managed reaching $800 million.",
    leadership: [
      { name: "Yoav Leitersdorf", role: "Founder & Managing Partner", profileSlug: "yoav-leitersdorf" },
      { name: "Ofer Schreiber", role: "Senior Partner & Head of Israel Office", profileSlug: "ofer-schreiber" },
      { name: "John Brennan", role: "Senior Partner" }
    ],
    timeline: [
      { year: "2007", event: "Yoav Leitersdorf founds YL Ventures." },
      { year: "2019", event: "Twistlock is acquired by Palo Alto Networks for $410 million." },
      { year: "2022", event: "Closes Fund V at $400 million, the largest seed fund ever raised for cybersecurity." },
      { year: "2025", event: "Reports total funds under management reaching $800 million." }
    ],
    holdings: []
  },
  {
    rank: 46,
    name: "Cyberstarts",
    sectors: ["Cybersecurity", "Cloud Security", "AI Security"],
    signatureExit: "Google's $32 billion acquisition of Wiz, completed March 2026 - the largest-ever buyout of a venture-backed startup, and Cyberstarts partnered with Wiz's founders on day one of the company's existence",
    slug: "cyberstarts",
    website: "https://www.cyberstarts.com",
    short: "Cyberstarts",
    founded: 2018,
    hq: "Tel Aviv, Israel",
    aum: "$720M+ (across five funds)",
    thesis: "Cyberstarts was founded in 2018 by Gili Raanan, a former Sequoia Capital General Partner and two-time security-company founder, built around a distinctive 'Sunrise' methodology: rather than sourcing deals broadly, Cyberstarts partners with founding teams from day one, drawing on a network of enterprise security executives to identify unaddressed pain points before a product even exists. That model produced the single largest venture-backed exit in history - Cyberstarts partnered with Wiz on day one in 2019, and Google completed its $32 billion acquisition of the cloud security company in March 2026. The firm has raised more than $720 million across five funds and made 28 investments with a combined portfolio valuation exceeding $55 billion, representing more than half of the entire private cybersecurity market's value, though its executive-advisor profit-sharing program drew public scrutiny in 2024 over potential conflicts of interest and was subsequently suspended.",
    leadership: [
      { name: "Gili Raanan", role: "Founder", profileSlug: "gili-raanan" },
      { name: "Lior Simon", role: "General Partner", profileSlug: "lior-simon" },
      { name: "Pete Chronis", role: "Operating Partner", profileSlug: "pete-chronis" }
    ],
    timeline: [
      { year: "2018", event: "Gili Raanan founds Cyberstarts after nearly nine years at Sequoia Capital." },
      { year: "2019", event: "Wiz is founded; Cyberstarts partners with the team on day one." },
      { year: "2020", event: "Leads Wiz's $6 million seed round." },
      { year: "2024", event: "Forbes reports on and the firm suspends its controversial CISO profit-sharing advisory program." },
      { year: "2026", event: "Google completes its $32 billion acquisition of Wiz in March, the largest-ever venture-backed exit." }
    ],
    holdings: []
  },
  {
    rank: 43,
    name: "Novastar Ventures",
    sectors: ["Consumer", "Climate", "Healthcare", "Enterprise Software"],
    signatureExit: "No confirmed public exit yet - Novastar's clearest proof points are its early bets on Bridge International Academies, Sanergy, mPharma, and SolarNow, all real, still-growing companies serving East and West Africa's mass-market consumer needs",
    slug: "novastar-ventures",
    website: "https://www.novastarventures.com",
    short: "Novastar Ventures",
    founded: 2014,
    hq: "London, UK",
    aum: "~$260M (across three funds)",
    thesis: "Novastar Ventures was founded in 2014 by Andrew Carruthers and Steve Beck, applying two decades of traditional fund-management discipline to a deliberately mass-market thesis: that venture capital could profitably serve East and West Africa's largest underserved consumer needs - affordable housing, education, sanitation, healthcare, and energy - rather than chasing a narrow tech elite. That philosophy shaped early bets on Bridge International Academies, Sanergy, mPharma, and SolarNow, growing Novastar into one of Africa's largest and most established dedicated venture capital firms. The firm operates from London, Nairobi, and Lagos, and closed its newest vehicle, the Africa People and Planet Fund III, at $147 million in early 2026 - its first fund to deploy on a genuinely pan-African basis rather than a single regional focus.",
    leadership: [
      { name: "Andrew Carruthers", role: "Co-Founder & Managing Partner", profileSlug: "andrew-carruthers" },
      { name: "Steve Beck", role: "Co-Founder & Managing Partner", profileSlug: "steve-beck" },
      { name: "Niraj Varia", role: "Partner", profileSlug: "niraj-varia" }
    ],
    timeline: [
      { year: "2014", event: "Andrew Carruthers and Steve Beck found Novastar Ventures, raising the East Africa Fund (Fund I)." },
      { year: "2020", event: "Closes Africa Fund II, anchored by the European Investment Bank and British International Investment." },
      { year: "2026", event: "Closes the Africa People and Planet Fund III at $147 million in early 2026, its first pan-African vehicle." }
    ],
    holdings: []
  },
  {
    rank: 77,
    name: "Enza Capital",
    sectors: ["Fintech", "Healthcare", "Climate", "Enterprise Software"],
    signatureExit: "No confirmed exit yet - Enza's portfolio companies have instead attracted strong follow-on validation, including Guidewheel's Greycroft-led Series A and Shara's Index Ventures-led Series A, both companies Enza backed at pre-seed",
    slug: "enza-capital",
    website: "https://www.enza.capital",
    short: "Enza Capital",
    founded: 2019,
    hq: "Nairobi, Kenya",
    aum: "$78M (across two funds)",
    thesis: "Enza Capital was co-founded by Mike Mompi in Nairobi in 2019, built around a specific thesis: back technology companies that 'organize the offline, digitize key industries, and redefine African life.' The firm operates as a genuinely multi-stage investor, partnering with founders from pre-seed through Series B on a single first check rather than requiring separate relationships at each stage, with typical checks between $250,000 and $5 million. Enza introduced a distinctive Founder Partner Program in 2023 that allocates 10% of the firm's own ownership to the founders in its portfolio, an unusual structural bet on aligning incentives beyond the standard investor-founder relationship. The firm has invested in more than 30 companies across eight African markets, spanning fintech, logistics, healthcare, human capital, and climate-smart sectors, with $78 million under management across two funds.",
    leadership: [
      { name: "Mike Mompi", role: "Co-Founder & Managing Partner", profileSlug: "mike-mompi" },
      { name: "John Lazar", role: "General Partner" }
    ],
    timeline: [
      { year: "2019", event: "Mike Mompi co-founds Enza Capital in Nairobi." },
      { year: "2023", event: "Closes Fund II at $58 million total AUM across both funds, and launches the Founder Partner Program." },
      { year: "2026", event: "AUM reaches approximately $78 million." }
    ],
    holdings: []
  },
  {
    rank: 78,
    name: "KawiSafi Ventures",
    sectors: ["Climate", "Enterprise Software"],
    signatureExit: "No confirmed exit yet - KawiSafi's portfolio companies (BBOXX, d.light, Sistema.bio, Angaza, InspiraFarms, Redavia Solar) remain private, still-scaling businesses since the fund itself only launched in 2017",
    slug: "kawisafi-ventures",
    website: "https://www.kawisafi.com",
    short: "KawiSafi Ventures",
    founded: 2017,
    hq: "Nairobi, Kenya",
    aum: "$70M",
    thesis: "KawiSafi Ventures was created and developed by Acumen, the internationally recognized impact investing pioneer, after Acumen spent a decade deploying more than $20 million of patient philanthropic capital across East Africa's off-grid energy ecosystem and recognized the potential to scale that impact through a genuinely commercial, for-profit vehicle. Launched in 2017 and closed at nearly $70 million in 2019 through Acumen's subsidiary Acumen Capital Partners, the fund was backed by an unusually prominent group of anchor investors - the Green Climate Fund, venture capitalist Steve Jurvetson, TED curator Chris Anderson, and the Skoll Foundation. KawiSafi invests growth capital in high-growth, revenue-generating clean energy companies scaling decentralized, off-grid solar solutions across Kenya and Rwanda, aiming to deliver clean energy access to more than 10 million people while displacing over a million tons of carbon dioxide.",
    leadership: [
      { name: "Amar Inamdar", role: "Managing Director", profileSlug: "amar-inamdar" },
      { name: "Michelle Haigh Osorio", role: "Investment Director" }
    ],
    timeline: [
      { year: "2017", event: "KawiSafi Ventures launches with initial investors." },
      { year: "2019", event: "Closes at nearly $70 million in April through Acumen Capital Partners." },
      { year: "2024", event: "Portfolio companies have cumulatively impacted more than 200 million lives and averted approximately 48 million tons of CO2 since fund inception." }
    ],
    holdings: []
  },
  {
    rank: 80,
    name: "Launch Africa Ventures",
    sectors: ["Fintech", "Healthcare", "Climate", "Edtech"],
    signatureExit: "No confirmed exit yet - Launch Africa's scale is the story instead: 180-plus startups backed across 25 African countries, funded by 400-plus limited partners, making it the continent's most active early-stage VC fund",
    slug: "launch-africa-ventures",
    website: "https://www.launchafrica.vc",
    short: "Launch Africa Ventures",
    founded: 2020,
    hq: "Port Louis, Mauritius",
    aum: "$64M (across funds; debut fund closed at $36M)",
    thesis: "Launch Africa Ventures was co-founded in 2020 by Zachariah George, a former Wall Street M&A banker turned prolific African angel investor, and Janade du Plessis, then head of venture capital at Nedbank, after both recognized a persistent funding gap facing startups graduating from accelerators at the pre-seed and pre-Series A stage. The firm's debut fund closed oversubscribed at $36 million within 18 months, drawing from 238 retail and institutional investors across 40 countries - notably without a single development finance institution among them, an unusual capital structure for African venture funds. That high-touch, high-scale approach has made Launch Africa the continent's most active early-stage VC fund, backing more than 180 startups across 25 countries including Kuda, Bitmama, and Mano, supported by a network of more than 400 limited partners.",
    leadership: [
      { name: "Zachariah George", role: "Co-Founder & Managing Partner", profileSlug: "zachariah-george" },
      { name: "Janade du Plessis", role: "Co-Founder & Managing Partner" }
    ],
    timeline: [
      { year: "2020", event: "Zachariah George and Janade du Plessis found Launch Africa Ventures, headquartered in Mauritius." },
      { year: "2022", event: "Closes its first fund oversubscribed at $36 million in March." },
      { year: "2026", event: "Completes 15 new investments in the first half of the year, growing its portfolio past 180 startups across 25 countries." }
    ],
    holdings: []
  },
  {
    rank: 47,
    name: "Canary",
    sectors: ["Fintech", "Enterprise Software", "Consumer", "Climate"],
    signatureExit: "Méliuz's IPO on Brazil's B3 exchange - Canary counts the cashback and fintech company among its key portfolio successes, alongside continued backing of 99 and Clara",
    slug: "canary",
    website: "https://www.canary.com.br",
    short: "Canary",
    founded: 2016,
    hq: "São Paulo, Brazil",
    aum: "$175M+ (Fund III alone raised $100M, 2021)",
    thesis: "Canary was founded in 2016 by Marcos Toledo, building what has become one of the most active early-stage venture firms in Latin America. The firm's own description of its dealflow is striking: it says it sees more than 90% of venture opportunities across the region, has analyzed more than 6,000 companies to date, and has invested in over 30% of those that went on to raise a Series A in Brazil - a level of market penetration few regional funds can match. Canary runs a deliberately hands-on model, acting as what it calls a genuine 'co-founder' to portfolio companies across hiring, technology, business development, and fundraising, and has backed 135-plus companies including three unicorns, one IPO (Méliuz), and 11 acquisitions, with a reported 2024 founder Net Promoter Score of 94.",
    leadership: [
      { name: "Marcos Toledo", role: "Co-Founder & Managing Partner", profileSlug: "marcos-toledo" },
      { name: "Izabel Gallera", role: "Partner", profileSlug: "izabel-gallera" }
    ],
    timeline: [
      { year: "2016", event: "Marcos Toledo co-founds Canary in São Paulo." },
      { year: "2021", event: "Announces a new $100 million Fund III for Latin American startups." },
      { year: "2024", event: "Reports a founder Net Promoter Score of 94 and 135-plus portfolio companies, including 3 unicorns, 1 IPO, and 11 acquisitions." }
    ],
    holdings: [
      { name: "Méliuz", ticker: "CASH3.SA", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 48,
    name: "Jungle Ventures",
    sectors: ["SaaS", "B2B", "Fintech", "Consumer Tech"],
    signatureExit: "No single dollar-verified signature exit - Amit Anand has personally led three real exits (Zipdial to Twitter, TradeGecko to Intuit, Travelmob to HomeAway), while the firm's four unicorns (Livspace, Kredivo, Moglix, Builder.ai) remain privately held after Kredivo's 2022 SPAC deal was cancelled",
    slug: "jungle-ventures",
    website: "https://www.jungle.vc",
    short: "Jungle Ventures",
    founded: 2012,
    hq: "Singapore",
    aum: "$1B+",
    thesis: "Jungle Ventures was founded in 2012 by Amit Anand and Anurag Srivastava with a modest $10 million debut fund, built on a specific cross-border thesis: treating Southeast Asia and India as a single connected market rather than two separate regions, and backing founders building companies durable enough to become category leaders across both. That patient, 'Build to Last' philosophy grew the firm's assets under management roughly 100-fold over a decade, and in 2022 Jungle became the first independent Singapore-headquartered venture firm investing across Southeast Asia and India to cross $1 billion in AUM. The firm's portfolio of 50-plus companies has produced an enterprise value exceeding $12 billion on just $250 million of invested capital, with a loss ratio under 5%, and includes four unicorns - Livspace, Kredivo, Moglix, and Builder.ai - alongside earlier exits like Zipdial (to Twitter) and TradeGecko (to Intuit).",
    leadership: [
      { name: "Amit Anand", role: "Founding Partner & Managing Director", profileSlug: "amit-anand" },
      { name: "Anurag Srivastava", role: "Founding Partner", profileSlug: "anurag-srivastava" }
    ],
    timeline: [
      { year: "2012", event: "Amit Anand and Anurag Srivastava found Jungle Ventures with a $10 million debut fund." },
      { year: "2015", event: "Portfolio company Zipdial is acquired by Twitter." },
      { year: "2020", event: "Portfolio company TradeGecko is acquired by Intuit." },
      { year: "2022", event: "Closes a $600 million fund, crossing $1 billion in total AUM - a first for an independent Singapore-headquartered firm in the region." },
      { year: "2024", event: "Releases its inaugural First Cheque Report, expanding seed investing focus into Thailand and the Philippines." }
    ],
    holdings: []
  },
  {
    rank: 43,
    name: "Rakuten Capital",
    sectors: ["Consumer Internet", "Fintech", "Mobility", "Marketplaces"],
    signatureExit: "Lyft's 2019 Nasdaq IPO - Rakuten led the ride-sharing company's $530 million Series E in March 2015, investing $300 million for an 11.9% stake at the time",
    slug: "rakuten-capital",
    website: "https://capital.rakuten.com",
    short: "Rakuten Capital",
    founded: 2013,
    hq: "Tokyo, Japan",
    aum: "Not disclosed (70+ portfolio companies globally)",
    thesis: "Rakuten Capital, launched in 2013 as Rakuten Ventures before its rebrand, is the corporate venture arm of Rakuten Group, the Tokyo-based internet services company behind Japan's largest ecommerce marketplace and a sprawling 70-plus-service ecosystem spanning fintech, travel, and mobile. The firm's largest and boldest single bet came in March 2015, when it led Lyft's $530 million Series E with a $300 million commitment for an 11.9% stake - a striking move for a Japanese ecommerce company betting big on American ride-sharing years before the category matured. Under Managing Partner Saemin Ahn, who runs the firm's international investment arm from Singapore, Rakuten Capital has since invested in more than 70 companies worldwide including Pinterest, Careem, Carousell, and Upstart.",
    leadership: [
      { name: "Saemin Ahn", role: "Founding & Managing Partner", profileSlug: "saemin-ahn" }
    ],
    timeline: [
      { year: "2013", event: "Saemin Ahn founds Rakuten Ventures." },
      { year: "2015", event: "Leads Lyft's $530 million Series E in March, investing $300 million for an 11.9% stake." },
      { year: "2019", event: "Lyft goes public on the Nasdaq." },
      { year: "2014", event: "Firm formally launches its current corporate venture structure under Rakuten Group." },
      { year: "2026", event: "Now operating as Rakuten Capital, having invested in more than 70 companies worldwide." }
    ],
    holdings: [
      { name: "Lyft", ticker: "LYFT", historicalPrice: null, price: 15.45 }
    ]
  },
  {
    rank: 41,
    name: "Porsche Ventures",
    sectors: ["Mobility", "Climate", "Enterprise Software"],
    signatureExit: "No single dollar-verified signature exit - confirmed outcomes include Fleetonomy's 2020 sale to digital infrastructure company Via and Greyp Bikes' 2021 acquisition by Porsche itself, though neither transaction's value was publicly disclosed",
    slug: "porsche-ventures",
    website: "https://porsche.ventures",
    short: "Porsche Ventures",
    founded: 2016,
    hq: "Stuttgart, Germany",
    aum: "Up to €250M allocated (2023 announcement)",
    thesis: "Porsche Ventures has operated since 2016 as one of the clearest examples of strategic industrial value-add among corporate venture arms, built around commercialization help, supply-chain access, and the broader Porsche/VW ecosystem rather than capital alone. Under Managing Director Ulrich Thiem, who took over in 2019 after joining Porsche's legal department in 2011, the firm runs two tailored investment portfolios - one close to Porsche's core auto-tech business investing mainly at Series B, the other spanning intelligent enterprise and sustainability more broadly. In April 2023 Porsche earmarked up to €250 million for new and existing venture investments, operating from a distributed team across Stuttgart, Berlin, Palo Alto, Los Angeles, and Tel Aviv.",
    leadership: [
      { name: "Ulrich Thiem", role: "Managing Director", profileSlug: "ulrich-thiem" },
      { name: "Patrick Huke", role: "Head of Porsche Ventures Europe", profileSlug: "patrick-huke" }
    ],
    timeline: [
      { year: "2011", event: "Ulrich Thiem joins Porsche, initially in its legal department." },
      { year: "2016", event: "Porsche establishes Porsche Ventures, headquartered in Stuttgart." },
      { year: "2019", event: "Thiem becomes Managing Director of Porsche Ventures." },
      { year: "2020", event: "Portfolio company Fleetonomy, an Israeli smart fleet mobility firm, is sold to Via." },
      { year: "2021", event: "Portfolio company Greyp Bikes, an ebike manufacturer, is acquired by Porsche itself." },
      { year: "2023", event: "Porsche earmarks up to €250 million for new and existing venture investments." }
    ],
    holdings: []
  },
  {
    rank: 42,
    name: "LocalGlobe",
    sectors: ["Fintech", "Consumer", "Marketplaces", "Enterprise Software", "Climate"],
    signatureExit: "Wise's 2021 direct listing on the London Stock Exchange, valuing the fintech company at about $11 billion",
    slug: "localglobe",
    website: "https://www.phoenixcourt.vc/localglobe",
    short: "LocalGlobe",
    founded: 2003,
    hq: "London, UK",
    aum: "No standalone AUM disclosed; Phoenix Court family reported $500M first close (2022)",
    thesis: "LocalGlobe was co-founded by Robin and Saul Klein and has evolved into something closer to an urban operating system for London and European early-stage company formation than a standalone seed fund. As the pre-seed and seed vehicle inside the broader Phoenix Court family - alongside sister vehicles Latitude, Solar, and Basecamp - it benefits from unusually strong recycling of operator knowledge, angel networks, and neighborhood density rather than simply advertising founder support as a slogan. That ecosystem-design approach produced Wise, whose 2021 direct listing on the London Stock Exchange valued the fintech company at about $11 billion, one of the clearest proof points of London's fintech maturity.",
    leadership: [
      { name: "Saul Klein", role: "Co-Founder & Managing Partner", profileSlug: "saul-klein" },
      { name: "Robin Klein", role: "Co-Founder", profileSlug: "robin-klein" },
      { name: "Remus Brett", role: "General Partner", profileSlug: "remus-brett" },
      { name: "Paul Bishop", role: "General Partner", profileSlug: "paul-bishop" }
    ],
    timeline: [
      { year: "2003", event: "Robin and Saul Klein co-found LocalGlobe in London." },
      { year: "2021", event: "Wise completes a direct listing on the London Stock Exchange at an $11 billion valuation." },
      { year: "2022", event: "Phoenix Court announces a $500 million first close across LocalGlobe, Latitude, Solar, and Basecamp." },
      { year: "2023", event: "Saul Klein publicly discusses the family's ambition to help European companies scale to megacap status." }
    ],
    holdings: [
      { name: "Wise", ticker: "WISE", historicalPrice: null, price: 38.455 },
      { name: "Robinhood", ticker: "HOOD", historicalPrice: null, price: 99.96 }
    ]
  },
  {
    rank: 40,
    name: "Uncork Capital",
    sectors: ["Consumer Internet", "SaaS", "Marketplaces"],
    signatureExit: "SendGrid's 2017 IPO, followed by its 2019 acquisition by Twilio - Uncork backed the email infrastructure company as a seed investor years before either milestone",
    slug: "uncork-capital",
    website: "https://uncorkcapital.com",
    short: "Uncork",
    founded: 2004,
    hq: "San Francisco, CA",
    aum: "$300M+ (recent funds)",
    thesis: "Uncork Capital, originally founded as SoftTech VC in 2004 by Jeff Clavier, was one of the first dedicated seed-stage venture firms in Silicon Valley, and its 2007 fund is often cited as one of the first to be labeled a 'micro-VC.' Clavier, who immigrated to the U.S. in 2000 after serving as CTO of a French fintech startup acquired by Reuters, built the firm around being the first substantial check and the longest relationship a founding team has. That approach backed SendGrid as a seed investor years before its 2017 IPO and 2019 acquisition by Twilio, along with Fitbit, Eventbrite, Postmates, and Poshmark. The firm is now led by Managing Partner Andy McLoughlin, with Clavier continuing as Founding Partner.",
    leadership: [
      { name: "Jeff Clavier", role: "Founding Partner", profileSlug: "jeff-clavier" },
      { name: "Andy McLoughlin", role: "Managing Partner", profileSlug: "andy-mcloughlin" }
    ],
    timeline: [
      { year: "2004", event: "Jeff Clavier founds SoftTech VC (later renamed Uncork Capital) in Palo Alto." },
      { year: "2007", event: "Raises one of the first funds to be labeled 'micro-VC,' a $15 million Fund II." },
      { year: "2017", event: "Portfolio company SendGrid goes public." },
      { year: "2019", event: "Twilio acquires SendGrid." },
      { year: "2025", event: "Raises $300 million combined across two new funds, Uncork VIII and Uncork Plus IV." }
    ],
    holdings: [ ]
  },
  {
    rank: 41,
    name: "NextView Ventures",
    sectors: ["Marketplaces", "Consumer", "Digital Health", "Vertical SaaS"],
    signatureExit: "ThredUp's 2021 Nasdaq IPO - NextView backed the online consignment marketplace as a seed-stage investor years before its public debut",
    slug: "nextview-ventures",
    website: "https://nextview.vc",
    short: "NextView",
    founded: 2010,
    hq: "Boston, MA",
    aum: "$300M+",
    thesis: "Rob Go, David Beisel, and Lee Hower founded NextView Ventures in 2010 on a contrarian thesis for the time: that a dedicated seed-stage specialist firm belonged outside the Bay Area, built around what the firm calls the 'Everyday Economy' - startups that redesign the habitual moments of daily life for large populations, from commerce to health to money. That focus led NextView to an early stake in Attentive, which grew into a roughly $10 billion company, and to backing ThredUp ahead of its 2021 Nasdaq IPO. The firm has stayed a lean, partnership-based team where every partner can lead investments, deliberately avoiding the largest, most competitive Silicon Valley deals in favor of conviction-driven bets closer to home.",
    leadership: [
      { name: "Rob Go", role: "Co-Founder & Partner", profileSlug: "rob-go" },
      { name: "David Beisel", role: "Co-Founder & Partner", profileSlug: "david-beisel" },
      { name: "Lee Hower", role: "Co-Founder & Partner", profileSlug: "lee-hower" }
    ],
    timeline: [
      { year: "2010", event: "Rob Go, David Beisel, and Lee Hower found NextView Ventures in Boston." },
      { year: "2012", event: "Closes its first fund at $21 million." },
      { year: "2017", event: "Closes a $50 million fund, its largest to that point." },
      { year: "2021", event: "Portfolio company ThredUp goes public on Nasdaq." }
    ],
    holdings: [
      { name: "ThredUp", ticker: "TDUP", historicalPrice: null, price: 3.17 }
    ]
  },
  {
    rank: 42,
    name: "SV Angel",
    sectors: ["Consumer Internet", "Early-Stage Technology"],
    signatureExit: "Twitter, Facebook, and PayPal's early growth - SV Angel and founder Ron Conway's Angel Investors LP were among the first checks into all three before they became household names",
    slug: "sv-angel",
    website: "https://svangel.com",
    short: "SV Angel",
    founded: 2005,
    hq: "San Francisco, CA",
    aum: "$285M+",
    thesis: "Ron Conway had already taken Altos Computer Systems public in 1982 and founded one of the first institutional angel funds, Angel Investors LP, in 1998, before launching SV Angel in 2005. Known as the 'Godfather of Silicon Valley,' Conway built a reputation for being one of the very first checks into companies that became generational technology giants - Google, Facebook, Twitter, PayPal, and Airbnb among them. Conway retired from active day-to-day investing in 2018, and in 2025 the firm - now run alongside his sons Ronny and Topher - announced it would stop raising traditional funds in favor of smaller, more personal checks.",
    leadership: [
      { name: "Ron Conway", role: "Founder & Managing Partner", profileSlug: "ron-conway" },
      { name: "Topher Conway", role: "Managing Partner", profileSlug: "topher-conway" }
    ],
    timeline: [
      { year: "1998", event: "Ron Conway founds Angel Investors LP, an early institutional angel fund." },
      { year: "2005", event: "Launches SV Angel, backing Google, Facebook, Twitter, and PayPal at the earliest stages." },
      { year: "2018", event: "Conway retires from active investing to focus on philanthropy." },
      { year: "2025", event: "SV Angel announces it will stop raising new funds, continuing to invest smaller amounts directly." }
    ],
    holdings: [
      { name: "Meta Platforms", ticker: "META", historicalPrice: null, price: 646.01 }
    ]
  },
  {
    rank: 43,
    name: "Precursor Ventures",
    sectors: ["Software", "Hardware", "Consumer"],
    signatureExit: "The Athletic's 2022 acquisition by The New York Times for $525 million - Precursor backed the sports media company years before the deal, as one of founder Charles Hudson's earliest bets",
    slug: "precursor-ventures",
    website: "https://precursorvc.com",
    short: "Precursor",
    founded: 2015,
    hq: "San Francisco, CA",
    aum: "$250M+",
    thesis: "Charles Hudson founded Precursor Ventures in 2015 after eight years at SoftTech VC - later renamed Uncork Capital - where he focused on mobile infrastructure and marketplace investments. He built Precursor as a solo general partner making all investment decisions himself, deliberately running an intentionally high-volume model of 75 to 100 investments per fund to back first-time and underrepresented founders who often lack the traditional networks that open doors at bigger firms. That model backed The Athletic years before The New York Times acquired the sports media company for $525 million in 2022, and Precursor has since grown to five funds and more than $250 million under management.",
    leadership: [
      { name: "Charles Hudson", role: "Managing Partner & Founder", profileSlug: "charles-hudson" }
    ],
    timeline: [
      { year: "2010", event: "Serious Business, where Hudson serves as VP of Business Development, is acquired by Zynga." },
      { year: "2015", event: "Charles Hudson leaves Uncork Capital (then SoftTech VC) to found Precursor Ventures as a solo GP." },
      { year: "2022", event: "Portfolio company The Athletic is acquired by The New York Times for $525 million." },
      { year: "2025", event: "Precursor closes its fifth fund at $66 million." }
    ],
    holdings: []
  },
  {
    rank: 44,
    name: "First Round Capital",
    sectors: ["Consumer Internet", "Marketplaces", "Fintech", "SaaS"],
    signatureExit: "Uber's 2019 IPO - First Round led the company's first-ever institutional funding round in 2010, a roughly $1.25 million bet that became one of the highest-multiple returns in venture history",
    slug: "first-round-capital",
    website: "https://firstround.com",
    short: "First Round",
    founded: 2004,
    hq: "San Francisco, CA",
    aum: "$200M+ (per fund, not cumulative)",
    thesis: "First Round Capital was founded in 2004 by Josh Kopelman, a serial entrepreneur who had already taken one company public and sold another to eBay, together with Howard Morgan, a co-founder of Idealab and founding president of Renaissance Technologies. The firm set out specifically to reinvent seed-stage investing, deliberately writing small initial checks - often just $500,000 to $1.5 million - to companies with little more than a founding team and an idea. That approach paid off spectacularly in 2010, when First Round led Uber's first-ever institutional funding round, a bet that grew into one of the highest-multiple returns in venture capital history.",
    leadership: [
      { name: "Josh Kopelman", role: "Founder & Managing Director", profileSlug: "josh-kopelman" },
      { name: "Howard Morgan", role: "Co-Founder" }
    ],
    timeline: [
      { year: "2004", event: "Josh Kopelman and Howard Morgan found First Round Capital to specialize in seed-stage investing." },
      { year: "2010", event: "Leads Uber's first-ever institutional funding round, investing roughly $1.25 million." },
      { year: "2015", event: "Portfolio company Square goes public." },
      { year: "2019", event: "Uber goes public at a valuation exceeding $70 billion." },
      { year: "2021", event: "Portfolio company Roblox goes public." }
    ],
    holdings: [
      { name: "Uber", ticker: "UBER", historicalPrice: null, price: 72.46 },
      { name: "Square (Block)", ticker: "XYZ", historicalPrice: null, price: 79.94 },
      { name: "Roblox", ticker: "RBLX", historicalPrice: null, price: 51.68 }
    ]
  },
  {
    rank: 45,
    name: "Costanoa Ventures",
    sectors: ["Applied AI", "AI & Data Infrastructure", "Cybersecurity", "National Security", "Fintech"],
    signatureExit: "SGNL's acquisition by CrowdStrike in January 2026 - Costanoa backed the identity security startup years before the deal, alongside its earlier VictorOps exit to Splunk in 2018",
    slug: "costanoa-ventures",
    website: "https://www.costanoavc.com",
    short: "Costanoa Ventures",
    founded: 2012,
    hq: "San Francisco, CA",
    aum: "$175M+ (Fund III)",
    thesis: "Greg Sands was Netscape's first product manager and a business development manager at Cisco before becoming a Managing Director at Sutter Hill Ventures, then founding Costanoa Ventures in 2012 to lead Seed and Series A rounds in complex, high-impact markets where deep sector expertise matters - applied AI, data infrastructure, cybersecurity, and fintech among them. Costanoa backed VictorOps at Series A, which Splunk acquired in 2018, and more recently backed SGNL, acquired by CrowdStrike in January 2026. The firm closed its $175 million Fund III in 2017 and has stayed disciplined about leading rounds in categories it believes require real technical depth to evaluate correctly.",
    leadership: [
      { name: "Greg Sands", role: "Founder & Managing Partner", profileSlug: "greg-sands" }
    ],
    timeline: [
      { year: "2012", event: "Greg Sands founds Costanoa Ventures after roles at Netscape, Cisco, and Sutter Hill Ventures." },
      { year: "2013", event: "Publishes Costanoa's investment thesis behind VictorOps." },
      { year: "2017", event: "Closes Costanoa's $175 million Fund III." },
      { year: "2018", event: "VictorOps, backed at Series A, is acquired by Splunk." },
      { year: "2026", event: "SGNL, another Costanoa portfolio company, is acquired by CrowdStrike." }
    ],
    holdings: []
  },
  {
    rank: 46,
    name: "Equal Ventures",
    sectors: ["Climate", "Insurance", "Retail", "Supply Chain"],
    signatureExit: "No public exit yet - Equal Ventures has focused its $175 million in capital on bringing software into legacy industries like insurance, climate, and supply chain",
    slug: "equal-ventures",
    website: "https://www.equal.vc",
    short: "Equal Ventures",
    founded: 2020,
    hq: "New York, NY",
    aum: "$175M+ (Fund II + Opportunity Fund)",
    thesis: "Rick Zullo worked at Deloitte and as an investor at Lightbank and Lightview Capital before co-founding Equal Ventures in 2020, built around a deliberately research-heavy, thesis-driven approach to backing founders bringing software into legacy industries - climate, insurance, retail, and supply chain among them - rather than chasing generic software categories. Zullo has been closely associated with Equal's investments in SmartHop and David Energy, and helped grow the firm to $175 million in combined capital across its second fund and opportunity vehicle by 2024, while continuing to publish detailed sector research across insurance and climate.",
    leadership: [
      { name: "Rick Zullo", role: "Co-Founder & Managing Partner", profileSlug: "rick-zullo" }
    ],
    timeline: [
      { year: "2020", event: "Rick Zullo co-founds Equal Ventures, launching a $56 million debut fund." },
      { year: "2022", event: "Closes a second fund and opportunity vehicle." },
      { year: "2024", event: "Announces $175 million in combined capital to 'bridge the digital divide' by bringing software into legacy industries." }
    ],
    holdings: []
  },
  {
    rank: 47,
    name: "Susa Ventures",
    sectors: ["Enterprise Software", "Fintech", "Healthcare"],
    signatureExit: "Robinhood's 2021 IPO - Susa's very first investment was a $250,000 seed check into Robinhood in 2013, a bet that grew into a roughly $400 million return, close to a 1,000x multiple",
    slug: "susa-ventures",
    website: "https://susaventures.com",
    short: "Susa",
    founded: 2013,
    hq: "San Francisco, CA",
    aum: "$175M+ (latest fund)",
    thesis: "Susa Ventures was founded in 2013 by Chad Byers, Leo Polovets, and Seth Berman in San Francisco, named after a family of mountain gorillas in Rwanda. The firm's first-ever investment, made just after closing a $25 million debut fund following an 11-month fundraise, was a $250,000 seed check into a fintech startup called Robinhood - a bet Byers made after its founders demoed the app to him at a Sand Hill Road hotel. When Robinhood went public in 2021, that original stake had grown into a return of roughly $400 million, close to a 1,000x multiple. Susa has since backed Flexport, Newfront Insurance, and Stord, deliberately keeping its fund sizes modest - 'your fund size is your strategy,' Byers has said - while raising more than $1 billion cumulatively.",
    leadership: [
      { name: "Chad Byers", role: "Co-Founder & General Partner", profileSlug: "chad-byers" },
      { name: "Leo Polovets", role: "Co-Founder & General Partner", profileSlug: "leo-polovets" },
      { name: "Seth Berman", role: "Co-Founder & General Partner", profileSlug: "seth-berman" }
    ],
    timeline: [
      { year: "2013", event: "Chad Byers, Leo Polovets, and Seth Berman found Susa Ventures in San Francisco." },
      { year: "2013", event: "Leads the firm's first-ever investment, a $250,000 seed check into Robinhood." },
      { year: "2021", event: "Robinhood goes public; Susa's original stake has grown into a return of roughly $400 million." },
      { year: "2025", event: "Susa closes its $175 million fifth flagship fund." }
    ],
    holdings: [
      { name: "Robinhood", ticker: "HOOD", historicalPrice: null, price: 99.96 }
    ]
  },
  {
    rank: 48,
    name: "645 Ventures",
    sectors: ["Fintech", "Enterprise", "Healthtech", "Cybersecurity", "Infrastructure & Developer Tools"],
    signatureExit: "Oort's acquisition by Cisco - one of several strategic exits in 645's portfolio, alongside LeagueApps' acquisition by Accel-KKR",
    slug: "645-ventures",
    website: "https://www.645ventures.com",
    short: "645 Ventures",
    founded: 2013,
    hq: "New York, NY",
    aum: "$160M+ (Fund III)",
    thesis: "Nnamdi Okike spent his early career as an investor at Insight Partners, where his track record includes 19 investments and nine exits totaling more than $9 billion in exit value, including Mimecast and Privalia. He co-founded 645 Ventures in 2013, building the firm around an internal data platform, Voyager, that combines early-stage investing with a large operating network. 645's own portfolio has produced exits including Oort, acquired by Cisco, and LeagueApps, acquired by Accel-KKR, alongside investments in Iterable, Overtime, and RentSpree. The firm closed its $160 million Fund III in 2020.",
    leadership: [
      { name: "Nnamdi Okike", role: "Co-Founder & Managing Partner", profileSlug: "nnamdi-okike" }
    ],
    timeline: [
      { year: "2013", event: "Nnamdi Okike co-founds 645 Ventures after a career as an investor at Insight Partners." },
      { year: "2014", event: "Begins deploying 645's software-powered investing strategy." },
      { year: "2020", event: "Closes 645's $160 million Fund III." },
      { year: "2023", event: "Okike is named to the Forbes Midas Brink list." }
    ],
    holdings: []
  },
  {
    rank: 49,
    name: "Eniac Ventures",
    sectors: ["Technology", "Software", "Robotics", "SaaS"],
    signatureExit: "No public portfolio exit yet - Eniac has focused exclusively on seed-stage investing since 2009",
    slug: "eniac-ventures",
    website: "https://eniac.vc",
    short: "Eniac Ventures",
    founded: 2009,
    hq: "New York, NY",
    aum: "$160M+ (Fund VI)",
    thesis: "Before co-founding Eniac Ventures in 2009, Nihal Mehta founded five startups himself, including ipsh!, acquired by Omnicom, and LocalResponse, acquired by BlueCava - a founder-first background that shaped Eniac's seed-stage, product-market-fit-focused approach ever since. The firm has grown its platform model with each successive fund, closing its sixth, at $160 million, in 2025, and continues to invest specifically at the seed stage across technology, software, robotics, and SaaS.",
    leadership: [
      { name: "Nihal Mehta", role: "Co-Founder & General Partner", profileSlug: "nihal-mehta" }
    ],
    timeline: [
      { year: "1999", event: "Nihal Mehta begins founding the first of five startups, ahead of a later shift into venture capital." },
      { year: "2009", event: "Co-founds Eniac Ventures as a seed-stage specialist." },
      { year: "2025", event: "Closes Eniac's $160 million Fund VI." }
    ],
    holdings: []
  },
  {
    rank: 50,
    name: "Fika Ventures",
    sectors: ["B2B Software", "Fintech", "Marketplaces", "AI Services", "Manufacturing", "Supply Chain"],
    signatureExit: "SGNL's acquisition by CrowdStrike for $740 million in 2026 - Fika backed the identity security startup as an early investor, alongside earlier exits like Openpath Security to Motorola Solutions",
    slug: "fika-ventures",
    website: "https://fika.vc",
    short: "Fika Ventures",
    founded: 2016,
    hq: "Los Angeles, CA",
    aum: "$160M+ (Fund IV)",
    thesis: "Eva Ho was a senior product marketing manager at Google and YouTube, then a founding executive at Factual and a founding general partner at Susa Ventures, before co-founding Fika Ventures in 2016 around the idea that founder service - business development, recruiting, and capital strategy help - is itself the product a firm sells. That approach helped Fika back SGNL, which CrowdStrike acquired for $740 million in 2026, along with earlier exits like Openpath Security to Motorola Solutions and Berbix to Socure. Fika closed its $160 million Fund IV in 2024.",
    leadership: [
      { name: "Eva Ho", role: "Co-Founder & General Partner", profileSlug: "eva-ho" }
    ],
    timeline: [
      { year: "2016", event: "Eva Ho co-founds Fika Ventures after roles at Google, YouTube, Factual, and Susa Ventures." },
      { year: "2021", event: "Fika is widely discussed as a $77 million seed fund." },
      { year: "2024", event: "Closes Fika's $160 million Fund IV." },
      { year: "2026", event: "Portfolio company SGNL is acquired by CrowdStrike for $740 million." }
    ],
    holdings: []
  },
  {
    rank: 51,
    name: "Mercury Fund",
    sectors: ["AI", "Blockchain", "Frontier Technologies", "Defense & Security"],
    signatureExit: "Performix's acquisition by Honeywell in 2021 - one of several strategic exits in Mercury's two-decade Midcontinent-focused portfolio, alongside PactSafe's acquisition by Ironclad",
    slug: "mercury-fund",
    website: "https://mercuryfund.com",
    short: "Mercury Fund",
    founded: 2005,
    hq: "Houston, TX",
    aum: "$160M+ (Fund V)",
    thesis: "Blair Garrou spent his early career in investment banking, credit analysis, and auditing before becoming CEO of Intermat and a principal at Genesis Park, then co-founded Mercury Fund in 2005 on the premise that innovation is not a coastal phenomenon - building the firm into one of the most active early-stage investors across the U.S. Midcontinent. Mercury's portfolio has produced exits including Performix, acquired by Honeywell in 2021, and PactSafe, acquired by Ironclad. Garrou closed Mercury's $160 million Fund V in 2023 and has led the firm's recent expansion into defense and frontier technology, including a major financing for Venus Aerospace.",
    leadership: [
      { name: "Blair Garrou", role: "Managing Partner & Co-Founder", profileSlug: "blair-garrou" }
    ],
    timeline: [
      { year: "2005", event: "Blair Garrou co-founds Mercury Fund after roles as CEO of Intermat and Principal at Genesis Park." },
      { year: "2021", event: "Portfolio company Performix is acquired by Honeywell." },
      { year: "2023", event: "Closes Mercury's $160 million Fund V." },
      { year: "2025", event: "Leads a major financing for defense-tech company Venus Aerospace as Mercury expands into frontier technology." }
    ],
    holdings: []
  },
  {
    rank: 52,
    name: "New Markets Venture Partners",
    sectors: ["Education Technology", "Workforce Development", "Social-Impact Software"],
    signatureExit: "PowerSchool's 2021 IPO on NYSE - one of New Markets' notable exits across two decades of dedicated edtech and workforce investing, alongside Galvanize's acquisition by K12",
    slug: "new-markets-venture-partners",
    website: "https://www.newmarketsvp.com",
    short: "New Markets Venture Partners",
    founded: 2003,
    hq: "Fulton, MD",
    aum: "$160M+ (latest fund)",
    thesis: "Mark Grovic has been investing in high-growth companies since 1992, including early impact-investing work at Calvert Group decades before ESG became mainstream, and co-founded the Templeton Emerging Europe Fund before co-founding New Markets Venture Partners in 2003. The firm has stayed exclusively focused on education and workforce technology for more than two decades, generating over $3.3 billion in enterprise value and completing 21 realized exits, including PowerSchool's 2021 IPO and Galvanize's acquisition by K12. Grovic closed New Markets' oversubscribed fifth fund at over $160 million in 2023.",
    leadership: [
      { name: "Mark Grovic", role: "Co-Founder & General Partner", profileSlug: "mark-grovic" }
    ],
    timeline: [
      { year: "1992", event: "Mark Grovic begins investing in high-growth companies, including impact-oriented work at Calvert Group." },
      { year: "2003", event: "Co-founds New Markets Venture Partners in Fulton, Maryland." },
      { year: "2021", event: "Portfolio company PowerSchool goes public on NYSE." },
      { year: "2023", event: "Closes New Markets' oversubscribed fifth fund at over $160 million." }
    ],
    holdings: []
  },
  {
    rank: 53,
    name: "Work-Bench",
    sectors: ["Enterprise Software", "AI/ML", "Developer Tools", "Infrastructure", "Security"],
    signatureExit: "CoreOS's acquisition by Red Hat - one of several enterprise infrastructure exits in Work-Bench's portfolio, alongside Semmle's acquisition by GitHub",
    slug: "work-bench",
    website: "https://www.work-bench.com",
    short: "Work-Bench",
    founded: 2013,
    hq: "New York, NY",
    aum: "$160M+ (latest fund)",
    thesis: "Jonathan Lehr worked in Morgan Stanley's Office of the CIO before co-founding Work-Bench in 2013, built around a highly specialized bet: that distribution, customer access, and enterprise community-building are as much a part of what a firm sells founders as the capital itself. Lehr publicly championed Cockroach Labs as a foundational enterprise infrastructure bet years before it became a major database company, and Work-Bench's broader portfolio has produced exits including CoreOS to Red Hat, Semmle to GitHub, and FireHydrant to Freshworks. The firm announced its new $160 million fund in 2025.",
    leadership: [
      { name: "Jonathan Lehr", role: "Co-Founder & General Partner", profileSlug: "jonathan-lehr" }
    ],
    timeline: [
      { year: "2013", event: "Jonathan Lehr co-founds Work-Bench in New York, building an enterprise-tech community around the firm from day one." },
      { year: "2016", event: "Publicly writes about backing Cockroach Labs as a foundational enterprise infrastructure bet." },
      { year: "2025", event: "Announces Work-Bench's new $160 million fund." }
    ],
    holdings: []
  },
  {
    rank: 54,
    name: "Rise of the Rest Seed Fund",
    sectors: ["Geographically Broad Early-Stage Investing (Outside Silicon Valley, Boston, and New York)"],
    signatureExit: "AppHarvest became Rise of the Rest's first publicly traded portfolio company after its SPAC debut, though it is no longer independently traded today - the fund's first-ever investment was in Anduril, before it became a defense-tech giant",
    slug: "rise-of-the-rest-seed-fund",
    website: "https://www.revolution.com/rise-of-the-rest/",
    short: "Rise of the Rest",
    founded: 2017,
    hq: "Washington, DC",
    aum: "$150M+ (seed fund)",
    thesis: "David Hall joined Revolution in 2006 and worked across both Revolution Growth and Revolution Ventures before taking on leadership of the Rise of the Rest Seed Fund, a $150 million vehicle built around one of the clearest geography-led theses in venture capital: back high-growth startups outside Silicon Valley, Boston, and New York, and use Revolution's platform and brand to strengthen local ecosystems. The fund made its first-ever investment in Anduril at seed, years before the company became a major defense-technology player, and AppHarvest became Rise of the Rest's first publicly traded portfolio company, though it is no longer independently traded today.",
    leadership: [
      { name: "David Hall", role: "Managing Partner", profileSlug: "david-hall" }
    ],
    timeline: [
      { year: "2006", event: "David Hall joins Revolution, working across Revolution Growth and Revolution Ventures." },
      { year: "2014", event: "The Rise of the Rest initiative launches with its first bus tour across overlooked startup regions." },
      { year: "2017", event: "The dedicated $150 million Rise of the Rest Seed Fund launches." },
      { year: "2018", event: "First fund investments are announced, including the fund's first check into Anduril." }
    ],
    holdings: []
  },
  {
    rank: 55,
    name: "Floodgate",
    sectors: ["Consumer Internet", "SaaS", "Marketplaces", "Fintech", "Infrastructure"],
    signatureExit: "Lyft's 2019 Nasdaq IPO - Ann Miura-Ko's seed bet in the company then known as Zimride is among the best-known pre-seed checks in venture capital",
    slug: "floodgate",
    website: "https://floodgate.com",
    short: "Floodgate",
    founded: 2008,
    hq: "Menlo Park, CA",
    aum: "$150M (latest closed fund)",
    thesis: "Floodgate was built by Mike Maples Jr. and Ann Miura-Ko as a dedicated pre-seed and seed specialist, operating first as Maples Investments before taking the Floodgate name in March 2010. Its identity is less a narrow sector thesis than a willingness to hold conviction in breakout founders before anyone else will - Miura-Ko has written that she was told she was 'insane' to start the firm in the middle of the financial crisis, then gave birth to her second child, defended her Stanford PhD six weeks later, and was already on her way to making her first investment in TaskRabbit. That posture produced her best-known early bet, the Zimride seed round that became Lyft, and TechCrunch reported the firm at roughly $500 million in assets in 2022 alongside a recently closed $150 million fund.",
    leadership: [
      { name: "Ann Miura-Ko", role: "Co-Founding Partner", profileSlug: "ann-miura-ko" },
      { name: "Mike Maples Jr.", role: "Co-Founding Partner", profileSlug: "mike-maples-jr" }
    ],
    timeline: [
      { year: "2008", event: "Ann Miura-Ko co-founds the firm with Mike Maples Jr. in the middle of the financial crisis." },
      { year: "2010", event: "Maples Investments is renamed Floodgate Fund in March; Miura-Ko makes her seed bet in Zimride, later Lyft." },
      { year: "2018", event: "Miura-Ko co-founds All Raise, the nonprofit focused on diversity in venture capital." },
      { year: "2021", event: "Closes a seventh fund at $146 million." },
      { year: "2022", event: "TechCrunch reports roughly $500 million in assets under management and a recently closed $150 million fund." },
      { year: "2026", event: "Floodgate files to raise a new $130 million fund." }
    ],
    holdings: []
  },
  {
    rank: 56,
    name: "Bullpen Capital",
    sectors: ["Post-Seed / Early-Stage Technology (Generalist)"],
    signatureExit: "No public exit yet documented - Bullpen's distinct 'post-seed' strategy focuses on backing overlooked companies after their earliest funding round",
    slug: "bullpen-capital",
    website: 'https://bullpencap.com/',
    short: "Bullpen Capital",
    founded: 2010,
    hq: "San Francisco, CA",
    aum: "$145M+ (Fund VI)",
    thesis: "Paul Martino founded Bullpen Capital around a genuinely distinct strategy in venture capital: rather than specializing by sector, Bullpen specializes by timing, investing just after a company's earliest angel or seed round in businesses that have found real product-market fit but remain overlooked by other investors. That 'post-seed' and 'unloved gems' thesis has carried the firm through more than a decade of investing, including its largest fund yet, a $145 million Fund VI raised in 2022.",
    leadership: [
      { name: "Paul Martino", role: "Founder & Managing Partner", profileSlug: "paul-martino" }
    ],
    timeline: [
      { year: "2010s", event: "Paul Martino founds Bullpen Capital around a timing-based 'post-seed' investing strategy, rather than a sector specialization." },
      { year: "2022", event: "Raises Bullpen's largest fund yet, $145 million Fund VI." },
      { year: "2023", event: "Public reporting describes the fund as centered on backing overlooked 'unloved gems' that already have product-market fit." }
    ],
    holdings: []
  },
  {
    rank: 57,
    name: "Harlem Capital",
    sectors: ["Industry-Agnostic (Enterprise & Consumer Technology)", "Diverse Founders"],
    signatureExit: "No public exit yet - Harlem Capital has grown from a Harlem living-room angel syndicate into a $134 million institutional seed fund across two funds",
    slug: "harlem-capital",
    website: "https://www.harlem.capital",
    short: "Harlem Capital",
    founded: 2015,
    hq: "New York, NY",
    aum: "$134M+ (Fund II)",
    thesis: "Henri Pierre-Jacques co-founded Harlem Capital in 2015 as an angel syndicate started in a Harlem living room, after earlier work in private equity and investment banking and an education at Duke University and Harvard Business School. He has built the firm around a multi-decade mission - changing the face of entrepreneurship by backing diverse founders - while still operating with the discipline of a focused seed fund, writing roughly $750,000 to $1.5 million checks for meaningful ownership stakes. Harlem Capital grew from a $40 million inaugural fund in 2019 to a $134 million Fund II in 2021.",
    leadership: [
      { name: "Henri Pierre-Jacques", role: "Managing Partner & Co-Founder", profileSlug: "henri-pierre-jacques" }
    ],
    timeline: [
      { year: "2015", event: "Henri Pierre-Jacques co-founds Harlem Capital as an angel syndicate, launched in a Harlem living room." },
      { year: "2019", event: "Closes Harlem Capital's $40 million inaugural institutional fund." },
      { year: "2021", event: "Closes Harlem Capital's $134 million Fund II." },
      { year: "2023", event: "Harlem Capital has raised two funds and made 60 investments." }
    ],
    holdings: []
  },
  {
    rank: 58,
    name: "Freestyle",
    sectors: ["Generalist Early-Stage Technology"],
    signatureExit: "Digit's acquisition by Oportun for approximately $212.9 million - one of the clearest exits associated with Freestyle's broader seed-stage portfolio",
    slug: "freestyle",
    website: "https://freestyle.vc",
    short: "Freestyle",
    founded: 2009,
    hq: "San Francisco, CA",
    aum: "$130M+ (Fund VI)",
    thesis: "Jenny Lefcourt worked as a CPA in New York before co-founding WeddingChannel while attending Stanford Graduate School of Business, giving her direct founder experience before she became a full-time investor. She joined Freestyle as a General Partner in 2014, backing early-stage generalist technology companies including Discord, BetterUp, Crexi, and Narvar, and helped the firm close its $130 million Fund VI in 2022. Lefcourt was named to Business Insider's Seed 40 list in 2025, reflecting Freestyle's pitch to founders: experienced seed leadership grounded in real operator empathy rather than a narrow sector thesis.",
    leadership: [
      { name: "Jenny Lefcourt", role: "General Partner", profileSlug: "jenny-lefcourt" }
    ],
    timeline: [
      { year: "1999", event: "Jenny Lefcourt co-founds WeddingChannel while attending Stanford Graduate School of Business, after working as a CPA in New York." },
      { year: "2014", event: "Joins Freestyle as a General Partner." },
      { year: "2022", event: "Freestyle closes its $130 million Fund VI." },
      { year: "2025", event: "Named to Business Insider's Seed 40 list." }
    ],
    holdings: []
  },
  {
    rank: 59,
    name: "Baseline Ventures",
    sectors: ["Consumer Internet", "Mobile", "Early-Stage Software"],
    signatureExit: "Instagram's 2012 acquisition by Facebook for roughly $1 billion - founder Steve Anderson was Instagram's very first investor",
    slug: "baseline-ventures",
    website: "https://www.baselinev.com",
    short: "Baseline",
    founded: 2006,
    hq: "Jackson, WY",
    aum: "$100M+ (recent funds)",
    thesis: "Steve Anderson left roles at Microsoft, eBay, and Starbucks to found Baseline Ventures in 2006, running it ever since as a genuine one-person operation - sourcing, deciding, and closing every deal himself, often within 30 minutes of meeting a founder. His defining bet came in 2010, when he became the very first investor in a photo-sharing app called Instagram, backing founders Kevin Systrom and Mike Krieger before the company had much more than an idea. Anderson turned roughly $70 million raised across his first three funds into $700 million, and was the largest shareholder in Stitch Fix at its 2017 IPO.",
    leadership: [
      { name: "Steve Anderson", role: "Founder", profileSlug: "steve-anderson" }
    ],
    timeline: [
      { year: "2006", event: "Steve Anderson founds Baseline Ventures as a one-person firm." },
      { year: "2010", event: "Becomes Instagram's very first investor." },
      { year: "2012", event: "Facebook acquires Instagram." },
      { year: "2017", event: "Stitch Fix goes public; Baseline is the company's largest shareholder." },
      { year: "2019", event: "PagerDuty goes public." }
    ],
    holdings: [
      { name: "Stitch Fix", ticker: "SFIX", historicalPrice: null, price: 3.65 },
      { name: "PagerDuty", ticker: "PD", historicalPrice: null, price: 12.09 }
    ]
  },
  {
    rank: 60,
    name: "Founder Collective",
    sectors: ["Seed-Stage", "Sector-Agnostic"],
    signatureExit: "PillPack's 2018 acquisition by Amazon for approximately $1 billion - Founder Collective was among the pharmacy startup's first seed investors",
    slug: "founder-collective",
    website: "https://foundercollective.com",
    short: "Founder Collective",
    founded: 2009,
    hq: "Cambridge, MA",
    aum: "$95M+ (latest fund)",
    thesis: "Founder Collective was founded in 2009 by David Frankel, Eric Paley, and Micah Rosenbloom on a deliberately founder-first philosophy: every full-time partner had been a startup founder first, and the firm has kept its fund sizes small by design rather than chasing scale, refusing to take the large pro-rata reserves that dilute the very founders it backs. That discipline led the firm to one of its earliest seed investments in Uber in 2010, and to being among the first investors in PillPack, the online pharmacy Amazon acquired for roughly $1 billion in 2018. Despite its small fund sizes, Founder Collective has backed more than 20 companies that went on to reach billion-dollar valuations, including The Trade Desk, Airtable, and WHOOP.",
    leadership: [
      { name: "David Frankel", role: "General Partner", profileSlug: "david-frankel" },
      { name: "Eric Paley", role: "Co-Founder & Partner Emeritus", profileSlug: "eric-paley" },
      { name: "Micah Rosenbloom", role: "General Partner", profileSlug: "micah-rosenbloom" }
    ],
    timeline: [
      { year: "2009", event: "David Frankel, Eric Paley, and Micah Rosenbloom found Founder Collective in Cambridge, MA." },
      { year: "2010", event: "Leads a seed investment in Uber, one of the firm's earliest bets." },
      { year: "2016", event: "Closes a $75 million third fund; portfolio company The Trade Desk goes public." },
      { year: "2018", event: "Amazon acquires PillPack, an early Founder Collective investment, for roughly $1 billion." },
      { year: "2019", event: "Uber goes public." },
      { year: "2023", event: "Closes its fifth and largest fund at $95 million." }
    ],
    holdings: [
      { name: "Uber", ticker: "UBER", historicalPrice: null, price: 72.46 },
      { name: "The Trade Desk", ticker: "TTD", historicalPrice: null, price: 14.56 }
    ]
  },
  {
    rank: 61,
    name: "K9 Ventures",
    sectors: ["Pre-Seed", "New Technology", "New Markets"],
    signatureExit: "Twilio's 2016 IPO - Manu Kumar was Twilio's earliest investor, backing the company years before it became a public cloud communications giant",
    slug: "k9-ventures",
    website: "https://www.k9ventures.com",
    short: "K9 Ventures",
    founded: 2009,
    hq: "Palo Alto, CA",
    aum: "$42M+ (current fund)",
    thesis: "Manu Kumar founded K9 Ventures in 2009 after selling two earlier companies and earning a PhD in Computer Science from Stanford, and the firm is widely credited with coining the term 'Pre-Seed' as its own distinct investment category. Kumar, who calls himself K9's 'Chief Firestarter,' invests 'frighteningly early' - often before a startup has a product, a team, or even a formal company - and by design makes just 4 to 6 investments a year rather than casting a wide net. That discipline made him the earliest investor in Twilio, years before its 2016 IPO, and an early backer of Lyft ahead of its 2019 public debut. K9 has kept its fund size deliberately tiny ever since, running one of the most concentrated portfolios of any firm on this page.",
    leadership: [
      { name: "Manu Kumar", role: "Founder & Chief Firestarter", profileSlug: "manu-kumar" }
    ],
    timeline: [
      { year: "2000", event: "Sells his first company, SneakerLabs." },
      { year: "2009", event: "Founds K9 Ventures, coining the term 'Pre-Seed' as an investment category." },
      { year: "2010s", event: "Becomes the earliest investor in Twilio." },
      { year: "2016", event: "Twilio goes public." },
      { year: "2019", event: "Lyft, another early K9 bet, goes public." }
    ],
    holdings: [
      { name: "Twilio", ticker: "TWLO", historicalPrice: null, price: 206.78 },
      { name: "Lyft", ticker: "LYFT", historicalPrice: null, price: 17.13 }
    ]
  },
  {
    rank: 62,
    name: "Designer Fund",
    sectors: ["Design-Led Early-Stage Software", "Health", "Business Software"],
    signatureExit: "No public exit yet - Designer Fund's portfolio includes still-private companies like Stripe and Notion, both valued in the tens of billions, alongside Gusto and Framer",
    slug: "designer-fund",
    website: "https://designerfund.com",
    short: "Designer Fund",
    founded: 2014,
    hq: "San Francisco, CA",
    aum: "$40M+ (latest fund)",
    thesis: "Ben Blumenrose co-founded Designer Fund in 2014 after more than five years as a design lead at Facebook, built on the then-unusual premise that design should shape a company's formation from day one rather than get bolted on after product-market fit. The firm backs design-led early-stage software companies and has invested in Stripe, Notion, Gusto, Commure, Omada Health, and Framer, all still private. Designer Fund's own materials put the combined value of its portfolio above $80 billion as of its 2022 Fund III close, and the firm runs a fellowship program, Bridge, connecting designers directly to startups.",
    leadership: [
      { name: "Ben Blumenrose", role: "Co-Founder & Managing Partner", profileSlug: "ben-blumenrose" }
    ],
    timeline: [
      { year: "2014", event: "Ben Blumenrose co-founds Designer Fund after more than five years as a design lead at Facebook." },
      { year: "2017", event: "Launches the Bridge fellowship, connecting designers to startups." },
      { year: "2022", event: "Closes Designer Fund's $40 million Fund III." }
    ],
    holdings: []
  },
  {
    rank: 63,
    name: "M25",
    sectors: ["Midwest Early-Stage Tech", "Software", "Fintech", "Healthcare IT"],
    signatureExit: "No public exit yet - M25 has backed more than 150 Midwest startups since 2015, whose combined follow-on funding exceeds $600 million",
    slug: "m25",
    website: "https://m25vc.com",
    short: "M25",
    founded: 2015,
    hq: "Chicago, IL",
    aum: "$36.5M+ (latest fund)",
    thesis: "Victor Gutwein launched M25 in 2015 at age 23 with $1 million to invest exclusively in Midwest tech startups, a region he felt was constantly overlooked by coastal venture capital. Alongside founding partner Mike Asem, Gutwein grew M25 into the most active early-stage investor in the Midwest, backing more than 150 startups across 11 states spanning software, fintech, insurance, and healthcare IT. The firm closed its largest fund yet, $36.5 million, on its 10-year anniversary in 2025, and its portfolio has gone on to raise more than $600 million in follow-on funding.",
    leadership: [
      { name: "Victor Gutwein", role: "Founder & Managing Partner", profileSlug: "victor-gutwein" },
      { name: "Mike Asem", role: "Founding Partner", profileSlug: "mike-asem" }
    ],
    timeline: [
      { year: "2015", event: "Victor Gutwein launches M25 at age 23 with $1 million to invest exclusively in Midwest tech startups." },
      { year: "2016", event: "Raises $11 million for M25's second fund." },
      { year: "2019", event: "Raises $31.8 million for M25's third fund alongside partner Mike Asem." },
      { year: "2025", event: "Closes M25's largest fund yet, $36.5 million Fund IV, on the firm's 10th anniversary." }
    ],
    holdings: []
  },
  {
    rank: 63,
    name: "Samsung NEXT",
    sectors: ["AI", "Fintech", "Healthcare", "Cloud Infrastructure"],
    signatureExit: "No single dollar-verified signature exit - Samsung NEXT's scale is cumulative instead: more than 230 investments and 330+ companies backed since inception, run by a 38-person team spanning Silicon Valley, Los Angeles, New York, Tel Aviv, and Seoul",
    slug: "samsung-next",
    website: "https://www.samsungnext.com",
    short: "Samsung NEXT",
    founded: 2012,
    hq: "Mountain View, CA",
    aum: "Not disclosed ($150M NEXT Fund, 2017; undisclosed AI-focused Q Fund, 2018)",
    thesis: "Samsung NEXT is Samsung's startup investing and ecosystem-building arm, founded in 2012 with a mission unusually broad for a corporate investor: it invests, acquires, and partners with companies to unlock value across Samsung's entire ecosystem, not just a single product line. That breadth shows up directly in its portfolio architecture, spanning AI, fintech, healthtech, infrastructure, media tech, and blockchain, backed by a team of 38 people - 20 investors, 12 in operational roles, and a six-person platform team dedicated to helping portfolio companies connect with Samsung's global network of engineers and designers. Rather than one marquee outcome, the firm's real track record is cumulative: more than 230 investments and 330-plus companies backed since inception.",
    leadership: [
      { name: "David Lee", role: "Head of Samsung NEXT", profileSlug: "david-lee-samsung-next" },
      { name: "Brendon Kim", role: "Head of Investments" }
    ],
    timeline: [
      { year: "2012", event: "Samsung founds Samsung NEXT (originally Samsung Global Innovation Center)." },
      { year: "2017", event: "Announces a $150 million NEXT Fund to support early-stage startups." },
      { year: "2018", event: "Launches the Q Fund, a dedicated AI-focused vehicle, without disclosing its size." },
      { year: "2026", event: "Firm's cumulative track record passes 230 investments and 330 companies backed." }
    ],
    holdings: []
  },
  {
    rank: 64,
    name: "M12",
    sectors: ["AI", "Enterprise Software", "Cybersecurity"],
    signatureExit: "Cloudflare's 2019 NYSE IPO, ranked by Dealroom as an M12 portfolio outcome valued at $4.4 billion - sourced from a secondary database rather than Microsoft's own materials, so treated as secondary-verified",
    slug: "m12",
    website: "https://m12.vc",
    short: "M12",
    founded: 2016,
    hq: "San Francisco, CA",
    aum: "Not disclosed (100+ companies backed, including 15 unicorns and 6 IPOs)",
    thesis: "M12 is Microsoft's venture fund, launched in 2016 as Microsoft Ventures and rebranded to M12 in 2018. Its proposition is explicit about being more than capital: portfolio companies get direct access to Microsoft's distribution, enterprise tooling, and - per the firm's own 'Advantage' materials - dedicated AI compute including supercomputer-scale GPU access for model training. The firm operates as a single evergreen fund capitalized directly off Microsoft's balance sheet, and removed restrictive corporate terms from its term sheets in 2019 specifically to stay founder-aligned rather than strategically entangled. In its first six years, Microsoft said M12 had invested in more than 100 companies, including 15 unicorns and 6 IPOs, focused on AI applications, AI security, AI cloud infrastructure, and deep tech systems.",
    leadership: [
      { name: "Michelle Gonzalez", role: "Corporate Vice President & Global Head", profileSlug: "michelle-gonzalez" },
      { name: "Todd Graham", role: "Investor", profileSlug: "todd-graham" }
    ],
    timeline: [
      { year: "2016", event: "Microsoft launches Microsoft Ventures." },
      { year: "2018", event: "Microsoft Ventures rebrands to M12." },
      { year: "2019", event: "Removes restrictive corporate terms from its term sheets to stay founder-aligned; portfolio company Cloudflare goes public." },
      { year: "2022", event: "Michelle Gonzalez joins as Corporate Vice President and Global Head after leading Google's Area 120." },
      { year: "2023", event: "Microsoft marks M12's six-year track record: 100+ companies backed, 15 unicorns, 6 IPOs." }
    ],
    holdings: [
      { name: "TaskUs", ticker: "TASK", historicalPrice: null, price: 5.52 }
    ]
  },
  {
    rank: 65,
    name: "SKY VC",
    sectors: ["Mobility", "Climate", "Enterprise Software"],
    signatureExit: "Joby Aviation's August 2021 public listing - JetBlue Technology Ventures (now SKY VC) was an early backer of the electric air taxi company, and its former president Bonny Simi left the fund to join Joby directly as Head of People and Operations",
    slug: "sky-vc",
    website: "https://sky-vc.com",
    short: "SKY VC",
    founded: 2016,
    hq: "San Francisco, CA",
    aum: "Not disclosed (50+ portfolio companies)",
    thesis: "SKY VC was founded in 2016 as JetBlue Technology Ventures, JetBlue's wholly-owned corporate venture subsidiary, before becoming part of SKY Leasing and rebranding in May 2025. Unlike broad software-focused corporate VCs, the firm is intensely vertical - organized entirely around the future of travel, hospitality, and transportation, with a team that blends venture investing experience with real airline operating knowledge. That combination produced its clearest outcome: an early bet on Joby Aviation, the electric air taxi company, whose August 2021 public listing was significant enough that the fund's own founding president, Bonny Simi, left to join Joby directly. SKY VC has invested in more than 50 companies since inception.",
    leadership: [
      { name: "Amy Burr", role: "CEO", profileSlug: "amy-burr" },
      { name: "Arielle Ring", role: "President", profileSlug: "arielle-ring" }
    ],
    timeline: [
      { year: "2016", event: "JetBlue launches JetBlue Technology Ventures in Silicon Valley, led by founding president Bonny Simi." },
      { year: "2018", event: "Amy Burr joins as Managing Director of Operations and Partnerships." },
      { year: "2020", event: "Bonny Simi departs to join portfolio company Joby Aviation as Head of People and Operations." },
      { year: "2021", event: "Amy Burr is promoted to President; Joby Aviation goes public in August." },
      { year: "2025", event: "The fund becomes part of SKY Leasing and rebrands from JetBlue Technology Ventures to SKY VC." }
    ],
    holdings: [
      { name: "Joby Aviation", ticker: "JOBY", historicalPrice: 8.09, price: 7.24 }
    ]
  },
  {
    rank: 66,
    name: "Citi Ventures",
    sectors: ["Fintech", "AI", "Enterprise Software", "Cybersecurity"],
    signatureExit: "No single dollar-verified signature exit - Arvind Purushotham's tenure has included Silver Tail Systems' acquisition by EMC among more than 120 investments, with the broader firm marking its 15th year at more than 200 investments and roughly 30 exits",
    slug: "citi-ventures",
    website: "https://www.citi.com/ventures",
    short: "Citi Ventures",
    founded: 2010,
    hq: "San Francisco, CA",
    aum: "Not disclosed (150+ investments since launch; 200+ and ~30 exits at 15-year mark)",
    thesis: "Citi Ventures has operated since 2010 as an investing and commercialization catalyst for Citi's own businesses and clients, a mandate that matters more inside a regulated global bank than at most corporate VCs - finding technology that can genuinely move Citi's own business, not just generate financial returns. Under Arvind Purushotham, who joined as Managing Director in January 2011 to help build the strategic venture investing program, the firm spans Seed through Series F and beyond across fintech, payments, enterprise software, cloud infrastructure, and cybersecurity. In 2020 the group launched the Citi Impact Fund, a dedicated vehicle backing women and minority entrepreneurs across sustainability, workforce development, and financial inclusion, and by its 15th year the firm had invested in and partnered with more than 200 startups.",
    leadership: [
      { name: "Arvind Purushotham", role: "Global Head of Citi Ventures", profileSlug: "arvind-purushotham" },
      { name: "Andrew Murray", role: "Investing Leader" },
      { name: "Jeff Flynn", role: "Investing Leader" }
    ],
    timeline: [
      { year: "2010", event: "Citi launches Citi Ventures." },
      { year: "2011", event: "Arvind Purushotham joins as Managing Director in January to help build the strategic venture investing program." },
      { year: "2020", event: "Launches the Citi Impact Fund, dedicated to backing women and minority entrepreneurs." },
      { year: "2022", event: "Jeff Flynn joins, leading coverage across lending, proptech, commerce, and payments." },
      { year: "2025", event: "Marks 15 years with more than 200 investments and roughly 30 exits since launch." }
    ],
    holdings: []
  },
  {
    rank: 69,
    name: "Barclays UK Ventures",
    sectors: ["Fintech", "Cybersecurity", "Data & AI"],
    signatureExit: "No disclosed public exit - Barclays UK Ventures instead operates as an internal build-and-invest studio, having made 145 investments and incubated ventures directly rather than only writing outside checks",
    slug: "barclays-uk-ventures",
    website: "https://home.barclays",
    short: "Barclays UK Ventures",
    founded: 2018,
    hq: "London, UK",
    aum: "Not disclosed (145 investments to date)",
    thesis: "Barclays UK Ventures was founded in 2018 to bring a genuine startup operating model inside a 330-year-old bank, combining developers, designers, data scientists, and M&A professionals under CEO Ben Davey, a former Barclays Group Head of Strategy. The unit's own description of itself is unusually candid about its hybrid structure - roughly half the team can code, roughly half have investment experience, and the group includes 15 founders and co-founders - reflecting a deliberate choice to build and incubate new business models directly, not just fund external startups. That build-alongside-invest approach sits within Barclays' broader fintech ecosystem, which also includes Rise, the bank's global fintech engagement platform and co-working network launched in 2017.",
    leadership: [
      { name: "Ben Davey", role: "CEO", profileSlug: "ben-davey" }
    ],
    timeline: [
      { year: "2017", event: "Barclays launches Rise London, its flagship fintech co-working and engagement hub in Shoreditch." },
      { year: "2018", event: "Barclays establishes Barclays UK Ventures as an internal build-and-invest unit." },
      { year: "2019", event: "Ben Davey, formerly Barclays' Group Head of Strategy, becomes CEO of Barclays UK Ventures." },
      { year: "2024", event: "Cumulative investment count reaches 145, spanning human capital, B2B media, and financial software." }
    ],
    holdings: []
  },
  {
    rank: 71,
    name: "EchoVC Partners",
    sectors: ["Fintech", "Healthcare", "Mobility", "Enterprise Software"],
    signatureExit: "No single dollar-verified signature exit - EchoVC instead measures itself by geographic reach, having expanded from its original African focus into Southeast Asia and Latin America, and by its EchoVC+ growth-stage partnership with TPG Growth and the TPG Rise Fund",
    slug: "echovc-partners",
    website: "https://www.echovc.com",
    short: "EchoVC Partners",
    founded: 2011,
    hq: "Lagos, Nigeria",
    aum: "Not publicly disclosed",
    thesis: "EchoVC Partners was founded in 2011 by Eghosa Omoigui, who spent nearly a decade at Intel Capital sourcing early bets on companies including AdMob, Facebook, LinkedIn, and Pandora before turning that same platform-agnostic, geographically expansive instinct toward underrepresented founders in underserved markets. Built explicitly around backing diverse founding teams and bold business models across fintech, health services, commerce, energy, and sustainable mobility, the firm has grown from its original African focus into Southeast Asia and Latin America, leading nearly all of its deals and building a dedicated growth-stage vehicle, EchoVC+, in partnership with TPG Growth and the TPG Rise Fund.",
    leadership: [
      { name: "Eghosa Omoigui", role: "Founder & Managing General Partner", profileSlug: "eghosa-omoigui" },
      { name: "Tsendai", role: "Partner" }
    ],
    timeline: [
      { year: "2011", event: "Eghosa Omoigui founds EchoVC Partners in Lagos." },
      { year: "2019", event: "Participates in Lori Systems' $30 million Series A round in Kenya." },
      { year: "2020s", event: "Launches EchoVC+ in partnership with TPG Growth and the TPG Rise Fund, and EchoVC Pan-Africa Fund I." }
    ],
    holdings: []
  },
  {
    rank: 72,
    name: "Voltron Capital",
    sectors: ["Fintech", "Healthcare", "Enterprise Software"],
    signatureExit: "No confirmed fund-level exit yet - Voltron itself launched in 2021, though co-founder Olumide Soyombo's prior personal angel investment in Paystack (acquired by Stripe in 2020) lends the firm real pre-existing credibility",
    slug: "voltron-capital",
    website: "https://voltron.africa",
    short: "Voltron Capital",
    founded: 2021,
    hq: "Lagos, Nigeria",
    aum: "Not publicly disclosed (53 startups backed via Fund I, 2022)",
    thesis: "Voltron Capital was co-founded in July 2021 by Olumide Soyombo, one of Africa's most prolific angel investors, and Abe Choi, a US-based entrepreneur and investor. Soyombo had already built a personal portfolio of more than 30 African startups - including Paystack, PiggyVest, and Mono - through angel checks since 2014, and Voltron was built specifically to formalize that track record into institutional capital addressing what the founders called a severe lack of access to early-stage funding across the continent. The firm writes $20,000 to $100,000 pre-seed and seed checks focused on Nigeria, Kenya, South Africa, and North Africa, launched its first fund in 2022, and had backed 53 startups through that vehicle alone.",
    leadership: [
      { name: "Olumide Soyombo", role: "Co-Founder", profileSlug: "olumide-soyombo" },
      { name: "Abe Choi", role: "Co-Founder" }
    ],
    timeline: [
      { year: "2021", event: "Olumide Soyombo and Abe Choi co-found Voltron Capital in July." },
      { year: "2022", event: "Launches its first fund, ultimately backing 53 startups." }
    ],
    holdings: []
  },
  {
    rank: 83,
    name: "Amazon Alexa Fund",
    sectors: ["AI", "Consumer", "Enterprise Software"],
    signatureExit: "No typical financial exit - as a strategic corporate fund, the Alexa Fund's clearest outcome is Ring, an early portfolio company Amazon itself acquired directly in 2018 rather than a third-party buyer or public listing",
    slug: "amazon-alexa-fund",
    website: "https://developer.amazon.com/alexa/alexa-startups/alexa-fund",
    short: "Amazon Alexa Fund",
    founded: 2015,
    hq: "Seattle, WA",
    aum: "$200M",
    thesis: "The Amazon Alexa Fund launched in 2015 as Amazon's dedicated corporate venture arm for voice technology, led from the start by Paul Bernard, and built on the belief that experiences designed around the human voice would fundamentally change how people use technology. Rather than pursuing pure financial returns, the fund prioritizes strategic value: it typically co-invests alongside traditional VCs rather than leading rounds, connects portfolio companies directly with Amazon's product teams and AWS infrastructure, and helps founders integrate with the Alexa ecosystem reaching hundreds of millions of devices. As Amazon's own AI ambitions have expanded well beyond voice, so has the fund's scope, and in 2025 it announced a broadened mandate covering AI-enabled hardware and smart agents. The fund has invested up to $200 million across more than 140 companies since its founding, including ecobee, TrackR, and Ring, which Amazon itself later acquired directly.",
    leadership: [
      { name: "Paul Bernard", role: "Director, Alexa Fund", profileSlug: "paul-bernard" }
    ],
    timeline: [
      { year: "2015", event: "Amazon launches the Alexa Fund in Seattle with an initial $100 million commitment." },
      { year: "2017", event: "Amazon commits an additional $100 million, bringing the fund to $200 million." },
      { year: "2018", event: "Ring, an Alexa Fund portfolio company, is acquired directly by Amazon." },
      { year: "2023", event: "Portfolio reaches more than 130 investments and 21-plus exits." },
      { year: "2025", event: "Expands its investment mandate into AI-enabled hardware and smart agents." }
    ],
    holdings: []
  },
  {
    rank: 85,
    name: "NVentures",
    sectors: ["AI", "Deep Tech", "Industrial Tech"],
    signatureExit: "No traditional exit framework applies - as a strategic corporate fund investing directly off NVIDIA's balance sheet, NVentures measures success through ecosystem growth rather than fund-style liquidity events; its portfolio includes 22 unicorns and 2 completed IPOs",
    slug: "nventures",
    website: "https://www.nventures.ai",
    short: "NVentures",
    founded: 2021,
    hq: "Santa Clara, CA",
    aum: "Not publicly disclosed (invests directly off NVIDIA's balance sheet; reported $872M+ in investments over a single nine-month period in 2023)",
    thesis: "NVentures is NVIDIA's corporate venture capital arm, led by Mohamed Siddeek, a former SoftBank Group, KKR, and Morgan Stanley investor who joined in 2021. Unlike traditional venture funds, NVentures invests directly off NVIDIA's own balance sheet with an explicit strategic mandate: back companies that use and depend on NVIDIA's accelerated computing technology, deepening the ecosystem around its GPUs and AI platforms rather than purely optimizing for financial return. That strategy has made NVIDIA one of the most active large-scale AI investors in the world, participating in 35 deals in 2023 alone, a nearly sixfold increase from the prior year, spanning AI infrastructure, robotics, digital biology, applied AI, and frontier compute. NVentures' portfolio has grown to 81 companies including 22 unicorns and 2 completed IPOs, with 44 new investments in the most recent 12-month period alone.",
    leadership: [
      { name: "Mohamed Siddeek", role: "Head of NVentures", profileSlug: "mohamed-siddeek" }
    ],
    timeline: [
      { year: "2021", event: "NVIDIA formally establishes NVentures in Santa Clara, with Mohamed Siddeek as head." },
      { year: "2023", event: "Participates in 35 deals, a nearly sixfold increase from the prior year, becoming one of the most active large-scale AI investors globally." },
      { year: "2026", event: "Portfolio reaches 81 companies with 22 unicorns and 2 IPOs." }
    ],
    holdings: []
  },
  {
    rank: 86,
    name: "Airbus Ventures",
    sectors: ["Deep Tech", "AI", "Defense Tech", "Climate"],
    signatureExit: "IonQ's 2021 SPAC merger with dMY Technology Group III, becoming the world's first publicly traded pure-play quantum computing hardware and software company (NYSE: IONQ) - Airbus Ventures was directly named a key IonQ investor",
    slug: "airbus-ventures",
    website: "https://www.airbusventures.vc",
    short: "Airbus Ventures",
    founded: 2015,
    hq: "Menlo Park, CA",
    aum: "$465M (across funds)",
    thesis: "Airbus Ventures launched in 2015 as a hybrid venture fund backed by Airbus, led by Managing Partner Thomas d'Halluin, who brought two decades of Airbus manufacturing, supply chain, and finance experience to the role after serving as Chief of Staff to the company's CFO. Deliberately structured to maintain independence from Airbus's corporate decision-making while raising outside capital, the fund targets startups transforming 'the way we fly, move, and live' - autonomous vehicles, satellite technology, additive manufacturing, and urban air mobility, backed by genuine aerospace domain expertise most generalist deep tech investors lack. That positioning made Airbus Ventures a key early investor in IonQ, which became the world's first publicly traded pure-play quantum computing company via SPAC merger in 2021, and the firm's 62-company portfolio has since produced 4 IPOs and 7 acquisitions, with $465 million raised across three funds.",
    leadership: [
      { name: "Thomas d'Halluin", role: "Managing Partner", profileSlug: "thomas-dhalluin" },
      { name: "Claas Kohl", role: "Partner" }
    ],
    timeline: [
      { year: "2015", event: "Airbus Ventures launches in Menlo Park." },
      { year: "2016", event: "Closes its first fund at approximately $65 million." },
      { year: "2018", event: "Closes Fund II at $100 million." },
      { year: "2021", event: "IonQ completes its SPAC merger, becoming the first publicly traded pure-play quantum computing company." },
      { year: "2023", event: "Announces Fund III, targeting approximately $250 million." }
    ],
    holdings: [
      { name: "IonQ", ticker: "IONQ", historicalPrice: null, price: 44.98 }
    ]
  },
  {
    rank: 87,
    name: "Applied Ventures",
    sectors: ["Deep Tech", "AI", "Industrial Tech"],
    signatureExit: "Enphase Energy's NASDAQ IPO - one of more than a dozen exits Global Head Anand Kamannavar has led, alongside Adesto Technologies' NASDAQ listing and Voltaix's acquisition by Air Liquide",
    slug: "applied-ventures",
    website: "https://www.appliedmaterials.com/us/en/applied-ventures.html",
    short: "Applied Ventures",
    founded: 2006,
    hq: "Santa Clara, CA",
    aum: "$400M+",
    thesis: "Applied Ventures was founded in 2006 as the corporate venture capital arm of Applied Materials, the global nanomanufacturing technology leader, established to bring strategic venture investing in-house and align it directly with the parent company's innovation roadmap. Under Global Head Anand Kamannavar, who joined the same year, the fund has grown from an initial $25 million annual allocation into a genuinely global, stage-agnostic platform investing $25-50 million per round and up to $100 million annually across semiconductors, advanced materials, AI, and deep tech. The firm reviews roughly 700 applications a year and selects just five or six new investments, backing companies like Metalenz, a Harvard spinout in engineered optics, and PsiQuantum in quantum computing, while Kamannavar has personally led more than a dozen exits including NASDAQ listings for Enphase Energy and Adesto Technologies. Applied Ventures now manages more than $400 million across 90-plus companies in 17 countries.",
    leadership: [
      { name: "Anand Kamannavar", role: "Founder & Global Head", profileSlug: "anand-kamannavar" }
    ],
    timeline: [
      { year: "2006", event: "Applied Materials establishes Applied Ventures, with Anand Kamannavar joining the same year." },
      { year: "2020s", event: "Leads investments including Metalenz, a Harvard spinout in engineered optics, and PsiQuantum in quantum computing." },
      { year: "2024", event: "Portfolio surpasses 90 companies across 17 countries, with more than $400 million under management." }
    ],
    holdings: [
      { name: "Enphase Energy", ticker: "ENPH", historicalPrice: null, price: 40.78 },
      { name: "Adesto Technologies", ticker: "IOTS", historicalPrice: null, price: null }
    ]
  },
  {
    rank: 24,
    name: "Munich Re Ventures",
    sectors: ["Fintech", "Cybersecurity", "Climate", "Enterprise Software"],
    signatureExit: "Next Insurance's $2.6 billion acquisition by Munich Re itself in 2025 - the largest outcome in the fund's decade-long history, alongside Mnubo's 2019 acquisition by AspenTech",
    slug: "munich-re-ventures",
    website: "https://www.munichre.com/ventures",
    short: "Munich Re Ventures",
    founded: 2015,
    hq: "Munich, Germany",
    aum: "$1.2B (across all funds)",
    thesis: "Munich Re Ventures was founded in 2015 by Jacqueline LeSage, backed initially by HSB Fund I, as the corporate venture arm of global reinsurer Munich Re. The fund built a genuinely distinctive model among corporate VCs: rather than offering portfolio companies capital alone, it integrated deeply with Munich Re's 150-year underwriting expertise and HSB's engineering and inspection force of more than 1,200 professionals, giving startups real access to reinsurance capacity, balance-sheet partnerships, and distribution channels most standalone VCs can't offer. That model produced real venture-scale outcomes - At-Bay, Augury, and Helium Mobile all reached unicorn status, Mnubo was acquired by AspenTech in 2019, and Next Insurance was acquired by Munich Re itself for $2.6 billion in 2025. Despite a decade of strong performance and the parent company posting record profits, Munich Re announced in late 2025 that it would wind down the venture unit by mid-2026 amid a broader leadership transition, shifting remaining portfolio oversight to its asset management arm, MEAG.",
    leadership: [
      { name: "Jacqueline LeSage", role: "Founder & Managing General Partner", profileSlug: "jacqueline-lesage" },
      { name: "Jennifer Place", role: "Principal", profileSlug: "jennifer-place" }
    ],
    timeline: [
      { year: "2015", event: "Jacqueline LeSage founds Munich Re Ventures, backed by HSB Fund I." },
      { year: "2019", event: "Mnubo is acquired by AspenTech." },
      { year: "2025", event: "Next Insurance is acquired by Munich Re for $2.6 billion." },
      { year: "2025", event: "Munich Re announces the wind-down of the venture unit by mid-2026, shifting oversight to MEAG." }
    ],
    holdings: []
  },
  {
    rank: 25,
    name: "Dawn Capital",
    sectors: ["Enterprise Software", "Fintech", "Cybersecurity", "AI"],
    signatureExit: "iZettle's $2.2 billion acquisition by PayPal in 2018 and Tink's approximately $2 billion acquisition by Visa in 2021 - together Europe's second and third largest fintech M&A exits ever, with Dawn the only investor in both",
    slug: "dawn-capital",
    website: "https://www.dawncapital.com",
    short: "Dawn Capital",
    founded: 2007,
    hq: "London, UK",
    aum: "$2.0B (total commitments)",
    thesis: "Dawn Capital was founded in 2006/2007 by Norman Fiore and Haakon Overli, joined early by Josh Bell as founding team, building what has become Europe's leading specialist B2B software investor. The firm concentrates deliberately on four themes - the future of work, data and analytics, security and privacy, and fintech - backing category-defining European software companies from Series A through growth rounds to exit, rather than spreading generalist bets across the continent. That focus produced an extraordinary concentration of outcomes: Dawn was the only investor in both iZettle (acquired by PayPal for $2.2 billion) and Tink (acquired by Visa for approximately $2 billion), Europe's second and third largest fintech M&A exits in history, alongside Mimecast's NASDAQ listing (later taken private by Permira in a $5.8 billion deal). Dawn has backed more than 85 software companies across 14 European countries, including eight unicorns, with $2 billion in total commitments across five flagship funds.",
    leadership: [
      { name: "Norman Fiore", role: "Co-Founder & General Partner", profileSlug: "norman-fiore" },
      { name: "Haakon Overli", role: "Co-Founder & General Partner", profileSlug: "haakon-overli" },
      { name: "Josh Bell", role: "General Partner", profileSlug: "josh-bell" }
    ],
    timeline: [
      { year: "2006", event: "Norman Fiore, Haakon Overli, and Josh Bell found Dawn Capital in London." },
      { year: "2018", event: "iZettle is acquired by PayPal for $2.2 billion." },
      { year: "2021", event: "Tink is acquired by Visa for approximately $2 billion; closes $520 million across two funds." },
      { year: "2022", event: "Mimecast is taken private by Permira in a $5.8 billion transaction." }
    ],
    holdings: []
  },
  {
    rank: 26,
    name: "Notion Capital",
    sectors: ["Enterprise Software", "Fintech", "AI"],
    signatureExit: "Currencycloud's acquisition by Visa in 2021 - Notion was an early investor in the cross-border payments platform, one of the firm's clearest proof points alongside continued backing of GoCardless",
    slug: "notion-capital",
    website: "https://www.notioncapital.com",
    short: "Notion Capital",
    founded: 2008,
    hq: "London, UK",
    aum: "$1B+",
    thesis: "Notion Capital was founded in October 2008 by brothers Ben and Jos White, alongside fellow MessageLabs executives Stephen Chandler, Chris Tottman, and Ian Milbourn, funded with roughly £20 million of their own capital from MessageLabs' $700 million acquisition by Symantec that same month - a deal closed amid the market chaos following Lehman Brothers' collapse. That direct operating pedigree building and selling one of the world's first SaaS companies shapes Notion's entire identity: a firm explicitly built by operators for operators, leading early-stage rounds in European B2B software and staying engaged through growth to help founders scale from $1 million to $100 million in revenue. The firm has backed more than 150 companies including Currencycloud (acquired by Visa), GoCardless, Tradeshift, and Mews, and now manages more than $1 billion in assets.",
    leadership: [
      { name: "Stephen Chandler", role: "Managing Partner & Co-Founder", profileSlug: "stephen-chandler" },
      { name: "Jos White", role: "General Partner & Co-Founder", profileSlug: "jos-white" },
      { name: "Chris Tottman", role: "General Partner", profileSlug: "chris-tottman" }
    ],
    timeline: [
      { year: "2008", event: "Ben White, Jos White, Stephen Chandler, Chris Tottman, and Ian Milbourn found Notion Capital in London, funded by proceeds from MessageLabs' sale to Symantec." },
      { year: "2015", event: "Firm's three funds reach approximately $290 million raised." },
      { year: "2021", event: "Currencycloud is acquired by Visa." },
      { year: "2022", event: "Raises Fund V at approximately $320 million." }
    ],
    holdings: []
  },
  {
    rank: 27,
    name: "Innovation Endeavors",
    sectors: ["AI", "Deep Tech", "Climate"],
    signatureExit: "Blue River Technologies' acquisition by John Deere - one of Dror Berman's earliest and most defining bets, alongside Uber and SoFi both reaching public listings and Astra completing a SPAC merger",
    slug: "innovation-endeavors",
    website: "https://www.innovationendeavors.com",
    short: "Innovation Endeavors",
    founded: 2010,
    hq: "Palo Alto, CA",
    aum: "$1.5B+ (across five funds)",
    thesis: "Innovation Endeavors was co-founded in 2010 by former Google Chairman and CEO Eric Schmidt and Dror Berman, a former NICE Systems R&D team leader with an MBA from Stanford, building a small, deeply technical early-stage fund investing at the intersection of science and company creation. Berman developed the firm's core 'Super Evolution' thesis - that converging advances in data, computing, and engineering are letting startups re-architect deeply physical industries, from agriculture to space to manufacturing, in years rather than decades - and the firm typically invests $1-15 million, taking active operating roles alongside the companies it backs. That philosophy produced early bets on Uber, SoFi, Planet, Zymergen, Freenome, and Blue River Technologies (later acquired by John Deere), and Innovation Endeavors has invested in 115 companies with 34 exits over 14 years, closing its fifth fund at $630 million in 2024.",
    leadership: [
      { name: "Eric Schmidt", role: "Co-Founder & Non-Managing Member", profileSlug: "eric-schmidt" },
      { name: "Dror Berman", role: "Founding Partner", profileSlug: "dror-berman" },
      { name: "Scott Brady", role: "Partner", profileSlug: "scott-brady" }
    ],
    timeline: [
      { year: "2010", event: "Eric Schmidt, Dror Berman, Scott Brady, and Rick Scanlon found Innovation Endeavors in Palo Alto." },
      { year: "2019", event: "Launches Innovation Endeavors III, a $333 million fund, formalizing the 'Super Evolution' thesis." },
      { year: "2021", event: "Portfolio company Astra completes a SPAC merger." },
      { year: "2024", event: "Closes Fund V at $630 million; reports 115 total investments and 34 exits over 14 years." }
    ],
    holdings: [
      { name: "SoFi", ticker: "SOFI", historicalPrice: null, price: 18.43 }
    ]
  },
  {
    rank: 27,
    name: "Earlybird Venture Capital",
    sectors: ["Fintech", "Deep Tech", "Healthcare", "Consumer", "Industrial Tech"],
    signatureExit: "TeamViewer's 2019 IPO and Delivery Hero's 2017 IPO - two of Earlybird's clearest public-market outcomes; Babylon Health also completed a roughly $4.2 billion SPAC merger in 2021, though the company later collapsed into administration in 2023",
    slug: "earlybird-venture-capital",
    website: "https://earlybird.com",
    short: "Earlybird",
    founded: 1997,
    hq: "Berlin, Germany",
    aum: "€2B+ (~$2.2B)",
    thesis: "Earlybird Venture Capital was founded in Hamburg in 1997 by Christian Nagel, Hendrik Brandis, Roland Manger, and Rolf Mathies, making it one of Europe's oldest continuously operating venture capital firms, having weathered the dot-com crash, the 2008 financial crisis, and multiple subsequent market cycles. The firm now operates a genuinely multi-fund structure - Digital West, Digital East (covering Turkey and Central/Eastern Europe), and a dedicated Health fund - giving it deliberately broad geographic and sector reach across fintech, deep tech, healthcare, and industrial technology from seed through growth stage. That 25-plus-year track record has produced deep ties to the German Mittelstand, real visibility into enterprise software and industrial tech spinouts from the DACH region, and a portfolio spanning N26, UiPath, Delivery Hero, TeamViewer, and Isar Aerospace, with more than €2 billion under management.",
    leadership: [
      { name: "Christian Nagel", role: "Co-Founder & General Partner", profileSlug: "christian-nagel" },
      { name: "Hendrik Brandis", role: "Co-Founder & General Partner", profileSlug: "hendrik-brandis" },
      { name: "Andre Retterath", role: "General Partner", profileSlug: "andre-retterath" }
    ],
    timeline: [
      { year: "1997", event: "Christian Nagel, Hendrik Brandis, Roland Manger, and Rolf Mathies found Earlybird in Hamburg." },
      { year: "1998", event: "Opens a second office in Munich." },
      { year: "2017", event: "Delivery Hero completes its IPO." },
      { year: "2019", event: "TeamViewer completes its IPO." },
      { year: "2021", event: "Babylon Health completes a SPAC merger at approximately $4.2 billion; the company later collapses into administration in 2023." }
    ],
    holdings: []
  },
  {
    rank: 88,
    name: "Prosus Ventures",
    sectors: ["Fintech", "AI", "Enterprise Software", "Consumer"],
    signatureExit: "Advolve.AI's acquisition by iFood in 2025 - a Prosus Ventures portfolio company acquired by iFood, itself a wholly-owned Prosus subsidiary since 2022 and Latin America's dominant food delivery platform",
    slug: "prosus-ventures",
    website: "https://www.prosus.com/prosus-ventures",
    short: "Prosus Ventures",
    founded: 2015,
    hq: "Amsterdam, Netherlands",
    aum: "$400M+ (deployed in FY25)",
    thesis: "Prosus Ventures, formerly Naspers Ventures, is the early-stage investing arm of Prosus, one of the world's largest technology investors with roots tracing back to South African media company Naspers. Founded in 2015, the fund focuses deliberately on high-growth emerging markets - Latin America, India, and Southeast Asia - investing in fintech, logistics, edtech, foodtech, and AI services that complement Prosus's broader portfolio of controlled businesses like iFood and PayU. That structural advantage, leveraging Prosus's global operating network and subsidiary integrations rather than capital alone, has helped Prosus Ventures make more than 230 investments to date, deploying over $400 million in FY25 across more than 40 new deals, under the strategic direction of Prosus CEO Fabricio Bloisi, himself the founder who built iFood into Latin America's dominant food delivery platform before Prosus acquired it outright in 2022.",
    leadership: [
      { name: "Fabricio Bloisi", role: "CEO, Prosus (parent company)", profileSlug: "fabricio-bloisi" },
      { name: "Ashutosh Sharma", role: "Head of Investments, India" }
    ],
    timeline: [
      { year: "2015", event: "Prosus Ventures (then Naspers Ventures) is founded in Amsterdam." },
      { year: "2019", event: "Prosus lists separately from Naspers on Euronext Amsterdam." },
      { year: "2022", event: "Prosus acquires the final 33% stake in iFood, making it a wholly-owned subsidiary." },
      { year: "2025", event: "Advolve.AI is acquired by iFood; Prosus Ventures deploys more than $400 million across 40-plus new investments in FY25." }
    ],
    holdings: []
  },
  {
    rank: 28,
    name: "Antler",
    sectors: ["Consumer", "Enterprise Software", "Fintech", "AI"],
    signatureExit: "No traditional exit yet - Antler's model is building companies from Day Zero rather than harvesting existing ones, and its clearest proof points are two current unicorns: Airalo (eSIM marketplace) and Lovable (Swedish AI coding platform, valued at $6.6 billion)",
    slug: "antler",
    website: "https://www.antler.co",
    short: "Antler",
    founded: 2017,
    hq: "Singapore",
    aum: "$1B",
    thesis: "Antler was founded in Singapore in 2017 by Magnus Grimeland and Fridtjof Berge, both alumni of Zalora, the Southeast Asian fashion e-commerce platform that became an unlikely training ground for founders including Gojek's Kevin Aluwi and Nadiem Makarim. Antler's defining innovation is its 'Day Zero' model: rather than investing in existing startups, the firm runs structured residency programs that back exceptional individuals before they even have a co-founder, team, or product, providing up to $400,000 in initial capital alongside a global mentor network. That radically early, high-volume approach - drawing more than 120,000 annual applications for roughly 2,000 residency spots across 27 countries - has made Antler the world's most active early-stage venture firm by deal volume, topping PitchBook's Global League Table with 443 deals in 2024. The firm has backed more than 1,800 startups since inception, including unicorns Airalo and Lovable, and manages approximately $1 billion including its $285 million Antler Elevate growth fund for follow-on rounds.",
    leadership: [
      { name: "Magnus Grimeland", role: "Founder & CEO", profileSlug: "magnus-grimeland" },
      { name: "Fridtjof Berge", role: "Co-Founder & Chief Business Officer", profileSlug: "fridtjof-berge" }
    ],
    timeline: [
      { year: "2017", event: "Magnus Grimeland and Fridtjof Berge found Antler in Singapore." },
      { year: "2018", event: "Runs its first residency program in Singapore." },
      { year: "2020", event: "Launches Antler Elevate, a $285 million growth fund for follow-on investment." },
      { year: "2024", event: "Tops PitchBook's Most Active Venture Capital Globally league table with 443 deals; Airalo and Lovable both reach unicorn status." }
    ],
    holdings: []
  },
  {
    rank: 29,
    name: "Trinity Ventures",
    sectors: ["Enterprise Software", "Fintech", "Consumer", "AI"],
    signatureExit: "New Relic's December 2014 NYSE IPO under ticker NEWR - one of several public listings across Trinity's four-decade history, alongside LoopNet's 1999 IPO and Zulily's 2013 IPO",
    slug: "trinity-ventures",
    website: "https://www.trinityventures.com",
    short: "Trinity Ventures",
    founded: 1986,
    hq: "Menlo Park, CA",
    aum: "$1.25B (latest funds)",
    thesis: "Trinity Ventures was founded in 1986 by Noel Fenton, who'd already served as CEO of two venture-backed companies (Covalent Systems and Acurex) before turning to investing, building a firm around close, hands-on partnership with entrepreneurs. That founder-first philosophy deepened further in 2006 when Ajay Chopra joined as General Partner - having grown Pinnacle Systems literally from his living room into a multibillion-dollar, Emmy award-winning public company - giving Trinity a genuinely rare combination of operating scar tissue and investing discipline. The firm has deliberately maintained a low capital-to-partner ratio across nearly four decades, backing early-stage innovators in cloud, SaaS, fintech, and consumer internet through public listings including LoopNet, New Relic, and Zulily, and now manages approximately $1.25 billion across its most recent funds.",
    leadership: [
      { name: "Noel Fenton", role: "Founding Partner", profileSlug: "noel-fenton" },
      { name: "Ajay Chopra", role: "General Partner", profileSlug: "ajay-chopra" },
      { name: "Patricia Nakache", role: "General Partner", profileSlug: "patricia-nakache" }
    ],
    timeline: [
      { year: "1986", event: "Noel Fenton founds Trinity Ventures in Menlo Park." },
      { year: "1999", event: "LoopNet completes its IPO in May under ticker LOOP." },
      { year: "2006", event: "Ajay Chopra joins as General Partner." },
      { year: "2013", event: "Zulily completes its IPO in November under ticker ZU." },
      { year: "2014", event: "New Relic completes its IPO in December under ticker NEWR." }
    ],
    holdings: []
  },
  {
    rank: 30,
    name: "Shasta Ventures",
    sectors: ["Enterprise Software", "Cybersecurity", "Deep Tech", "Consumer"],
    signatureExit: "Nest Labs' $3.2 billion acquisition by Google in January 2014 - Rob Coneybeer personally led Shasta's Series A investment, a roughly 20x return that essentially repaid the firm's entire second fund",
    slug: "shasta-ventures",
    website: "https://www.shasta.vc",
    short: "Shasta Ventures",
    founded: 2004,
    hq: "Menlo Park, CA",
    aum: "$1.3B",
    thesis: "Shasta Ventures was founded in 2004 by Rob Coneybeer, Tod Francis, and Ravi Mohan, joined the following year by Jason Pressman, built around a specific conviction that early-stage ventures benefit from experienced, genuinely hands-on partners rather than passive capital. The firm's early focus on consumer technology (backing Mint.com as what one founding partner called a 'classic Shasta' bet) expanded significantly after Coneybeer's aerospace engineering background led him to declare a major bet on hardware in 2013, arguing that Moore's Law-style improvements were unlocking entirely new categories of physical products. That conviction produced Shasta's defining outcome: Nest Labs, acquired by Google for $3.2 billion in 2014, a roughly 20x return that essentially repaid the firm's entire second fund on its own. Shasta has since built structured founder-support programs like Shasta Elevate and Ignite, backing more than 100 companies across enterprise SaaS, cybersecurity, hardware, and consumer technology, with approximately $1.3 billion under management.",
    leadership: [
      { name: "Rob Coneybeer", role: "Co-Founder & Managing Director", profileSlug: "rob-coneybeer" },
      { name: "Tod Francis", role: "Co-Founder & Managing Director", profileSlug: "tod-francis" },
      { name: "Jason Pressman", role: "Managing Director", profileSlug: "jason-pressman" }
    ],
    timeline: [
      { year: "2004", event: "Rob Coneybeer, Tod Francis, and Ravi Mohan found Shasta Ventures in Menlo Park." },
      { year: "2005", event: "Jason Pressman joins as Managing Director." },
      { year: "2010", event: "Leads Shasta's Series A investment in Nest Labs." },
      { year: "2011", event: "Closes Fund III at $265 million." },
      { year: "2014", event: "Nest Labs is acquired by Google for $3.2 billion; closes Fund IV at $300 million." },
      { year: "2016", event: "Raises a fifth fund targeting up to $300 million." }
    ],
    holdings: []
  },
  {
    rank: 24,
    name: "OpenView Venture Partners",
    sectors: ["Enterprise Software", "Fintech", "AI"],
    signatureExit: "Datadog's independent NASDAQ IPO at a $7.83 billion market cap, and Expensify's NASDAQ IPO in November 2021 at a $1.82 billion market cap - OpenView's two confirmed public listings among more than 60 portfolio companies",
    slug: "openview-venture-partners",
    website: "https://openviewpartners.com",
    short: "OpenView",
    founded: 2006,
    hq: "Boston, MA",
    aum: "$2.4B (across seven funds)",
    thesis: "OpenView Venture Partners was founded in 2006 by Scott Maxwell, who spent six years institutionalizing Insight Venture Partners' investment process as its COO before recognizing that expansion-stage software companies needed genuine operational expertise, not capital alone, to scale into market leaders. That conviction produced OpenView's distinctive 'Expansion Platform' and 'Executive Network,' providing hands-on support in pricing, packaging, go-to-market strategy, and executive recruitment for portfolio companies that have already found product-market fit. The firm helped pioneer the product-led growth investment thesis in enterprise software, backing companies where the product itself drives customer acquisition and expansion, and has partnered with more than 60 companies including Datadog, Expensify, Calendly, MongoDB, and Notion. OpenView has raised $2.4 billion across seven funds, with 9 unicorns, 2 completed IPOs, and 35 acquisitions across its portfolio history.",
    leadership: [
      { name: "Scott Maxwell", role: "Founder & Managing Partner", profileSlug: "scott-maxwell" },
      { name: "Cynthia Phillips", role: "General Partner" }
    ],
    timeline: [
      { year: "2006", event: "Scott Maxwell founds OpenView Venture Partners in Boston." },
      { year: "2021", event: "Expensify completes its NASDAQ IPO in November at a $1.82 billion market cap." },
      { year: "2024", event: "Raises $2.4 billion in total capital across seven funds." },
      { year: "2025", event: "PartsTech, a portfolio company, is acquired by OEC in February." }
    ],
    holdings: [
      { name: "Datadog", ticker: "DDOG", historicalPrice: null, price: 252.24 }
    ]
  },
  {
    rank: 25,
    name: "Foundry Group",
    sectors: ["Enterprise Software", "Consumer", "AI"],
    signatureExit: "Fitbit's approximately $2.1 billion acquisition by Google in 2019 - an early Foundry investment, alongside Zynga's IPO at a $7 billion valuation and Gnip's acquisition by Twitter",
    slug: "foundry-group",
    website: "https://foundrygroup.com",
    short: "Foundry Group",
    founded: 2006,
    hq: "Boulder, CO",
    aum: "$1.8B+ (across nine funds since founding)",
    thesis: "Foundry Group was founded in 2006 in Boulder, Colorado, by four friends who'd worked together at Mobius Venture Capital - Brad Feld, Seth Levine, Ryan McIntyre, and Jason Mendelson - sharing frustration with the opacity and founder-unfriendly terms common across traditional venture capital. They built Foundry around a genuinely radical transparency: every partner's email address follows a simple firstname@foundrygroup.com format, and the firm made a deliberate pact to stay small, partner-driven, and obsessed with craft rather than scaling into an institution. That founder-first philosophy, paired with Feld's parallel work building Techstars and popularizing the 'Boulder Thesis' for building startup ecosystems outside Silicon Valley, backed more than 200 companies including Fitbit, Zynga, and Gnip. In January 2024, the firm announced Foundry 2022 would be its final fund, choosing a deliberate, planned conclusion to new investing after nearly two decades and roughly $1.8 billion raised across nine funds.",
    leadership: [
      { name: "Brad Feld", role: "Co-Founder & Managing Director", profileSlug: "brad-feld" },
      { name: "Seth Levine", role: "Co-Founder & Managing Director", profileSlug: "seth-levine" },
      { name: "Jason Mendelson", role: "Co-Founder & Managing Director", profileSlug: "jason-mendelson" }
    ],
    timeline: [
      { year: "2006", event: "Brad Feld, Seth Levine, Ryan McIntyre, and Jason Mendelson found Foundry Group in Boulder." },
      { year: "2011", event: "Zynga completes its IPO at a $7 billion valuation." },
      { year: "2019", event: "Fitbit is acquired by Google for approximately $2.1 billion." },
      { year: "2024", event: "Announces Foundry 2022 as its final fund in January, planning to conclude new investments." }
    ],
    holdings: []
  },
  {
    rank: 15,
    name: "DCM Ventures",
    sectors: ["Fintech", "Consumer", "Enterprise Software", "AI"],
    signatureExit: "Musical.ly's acquisition by ByteDance in 2017, later merged into TikTok - an early DCM bet on short-form video years before the category became a cultural phenomenon, alongside seven IPOs since 2019 including Bill.com, Life360, and Sansan",
    slug: "dcm-ventures",
    website: "https://www.dcm.com",
    short: "DCM Ventures",
    founded: 1996,
    hq: "Menlo Park, CA",
    aum: "$4.5B",
    thesis: "DCM Ventures was founded in 1996 as Doll Capital Management by Dixon Doll, a former Accel Partners investor who'd launched the industry's first telecom-focused fund, and David Chao, whose background spanned Apple Computer and McKinsey & Company. The two shared a genuinely early conviction that transformative technology companies wouldn't stay confined to Silicon Valley, making DCM the first American venture firm to invest in early-stage technology companies in China in 1999, followed by expansion into Japan, South Korea, and Southeast Asia - years before cross-border investing became standard practice. That geographic thesis, paired with an evolution from early bets on semiconductors and communications technology toward consumer internet, fintech, and SaaS, produced Musical.ly (later merged into TikTok), Bill.com, SoFi, Kuaishou, and Hims & Hers Health among more than 700 companies backed. DCM now manages $4.5 billion across ten funds, with seven completed IPOs since 2019 alone and 84 total exits across its history.",
    leadership: [
      { name: "David Chao", role: "Co-Founder & General Partner", profileSlug: "david-chao" },
      { name: "Dixon Doll", role: "Co-Founder & Partner Emeritus", profileSlug: "dixon-doll" },
      { name: "Jason Krikorian", role: "General Partner", profileSlug: "jason-krikorian" }
    ],
    timeline: [
      { year: "1996", event: "Dixon Doll and David Chao found Doll Capital Management (later DCM Ventures) in Menlo Park." },
      { year: "1999", event: "Becomes the first Silicon Valley firm to invest in early-stage technology in China." },
      { year: "2017", event: "Musical.ly is acquired by ByteDance, later merging into TikTok." },
      { year: "2019", event: "Bill.com completes its NYSE IPO." },
      { year: "2024", event: "AUM reaches $4.5 billion across ten funds, with seven IPOs since 2019 and 84 total exits." }
    ],
    holdings: [
      { name: "Bill.com", ticker: "BILL", historicalPrice: null, price: 51.31 },
       { name: "SoFi", ticker: "SOFI", historicalPrice: null, price: 18.43 }

    ]
  },
  {
    rank: 19,
    name: "Oak HC/FT",
    sectors: ["Healthcare", "Fintech"],
    signatureExit: "No single named IPO exit - Oak HC/FT's clearest proof points are growth-stage backing of Oscar Health (which completed its own 2021 IPO) and athenahealth, both companies the firm helped scale rather than founded",
    slug: "oak-hc-ft",
    website: "https://www.oakhcft.com",
    short: "Oak HC/FT",
    founded: 2014,
    hq: "Greenwich, CT",
    aum: "$5B+",
    thesis: "Oak HC/FT was co-founded in 2014 by Annie Lamont, Andrew Adams, and Patricia Kemp, all veterans with decades of combined healthcare and fintech investing experience, most notably Lamont's 28 years at Oak Investment Partners leading its healthcare and fintech practices. The firm applies that deep sector expertise exclusively to two complex, multi-trillion-dollar markets undergoing structural digital transformation, providing entrepreneurs with strategic counsel, board-level participation, and access to an extensive network of industry leaders alongside capital. That focused approach helped Oak HC/FT get named one of the ten best-performing venture capital firms in the world in 2023, backing companies including Blend, Ocrolus, ClearCo, Rapyd, and Oscar Health, and the firm now manages more than $5 billion after closing an oversubscribed $800 million Fund III just five years after founding.",
    leadership: [
      { name: "Annie Lamont", role: "Co-Founder & Managing Partner", profileSlug: "annie-lamont" },
      { name: "Andrew Adams", role: "Co-Founder & Managing Partner", profileSlug: "andrew-adams" },
      { name: "Patricia Kemp", role: "Co-Founder & Managing Partner", profileSlug: "patricia-kemp" }
    ],
    timeline: [
      { year: "2014", event: "Annie Lamont, Andrew Adams, and Patricia Kemp found Oak HC/FT in Greenwich, CT, in June." },
      { year: "2019", event: "Closes an oversubscribed $800 million Fund III." },
      { year: "2021", event: "Oscar Health completes its NYSE IPO." },
      { year: "2023", event: "Named one of the ten best-performing venture capital firms in the world." }
    ],
    holdings: [
      { name: "Oscar Health", ticker: "OSCR", historicalPrice: null, price: 30.78 }
    ]
  },
  {
    rank: 26,
    name: "Octopus Ventures",
    sectors: ["Deep Tech", "Healthcare", "Fintech", "Consumer", "Climate"],
    signatureExit: "Depop's $1.6 billion acquisition by Etsy in 2021 - an early Octopus Ventures backer of the fashion resale marketplace, alongside continued positions in Zoopla and SwiftKey",
    slug: "octopus-ventures",
    website: "https://octopusventures.com",
    short: "Octopus Ventures",
    founded: 2007,
    hq: "London, UK",
    aum: "£2B (~$2.6B)",
    thesis: "Octopus Ventures formed in August 2007 when Octopus Group, the London holding company founded in 2000 by Simon Rogerson, Chris Hulatt, and Guy Myles, acquired Katalyst, a private investor group run by former City derivatives trader Alex Macpherson. That acquisition gave Octopus a genuine early-stage venture capability layered onto its broader financial services platform, and the firm has since grown into one of Europe's largest and most active VCs, investing from £1 million seed checks through £10 million-plus Series B rounds with the ability to fund companies all the way through IPO. Octopus organizes its investing around five specialist areas - health, fintech, deep tech, consumer, and B2B software - and has backed more than 380 companies since 2008, including Zoopla, SwiftKey, Graze.com, and Depop, which Etsy acquired for $1.6 billion in 2021.",
    leadership: [
      { name: "Alex Macpherson", role: "Managing Director", profileSlug: "alex-macpherson" },
      { name: "Erin Platts", role: "CEO, Octopus Investments", profileSlug: "erin-platts" }
    ],
    timeline: [
      { year: "2007", event: "Octopus acquires Katalyst in August, forming Octopus Ventures with Alex Macpherson as a founding leader." },
      { year: "2008", event: "Begins active early-stage investing, backing Zoopla and SwiftKey among its first cohort." },
      { year: "2021", event: "Depop is acquired by Etsy for $1.6 billion." },
      { year: "2025", event: "Erin Platts is appointed CEO of Octopus Investments in September." }
    ],
    holdings: []
  },
  {
    rank: 84,
    name: "Gradient Ventures",
    sectors: ["AI", "Developer Tools", "Enterprise Software", "Fintech"],
    signatureExit: "No confirmed exit yet - Gradient's clearest proof points are current unicorns WRITER and Lambda AI, both still privately held, within a broader 175-plus company portfolio",
    slug: "gradient-ventures",
    website: "https://www.gradient.com",
    short: "Gradient Ventures",
    founded: 2017,
    hq: "Mountain View, CA",
    aum: "$1B+",
    thesis: "Gradient Ventures was founded in 2017 by Anna Patterson, a search engine founder and former VP of Engineering for Google Search Quality, as Google's dedicated early-stage AI-focused venture fund. Staffed primarily by ex-Google technical leaders rather than traditional finance-background investors, the fund gives portfolio companies genuinely hands-on support on AI model architecture, data pipelines, and access to Google's internal technical resources, backing AI-first startups often before they've reached product-market fit. In October 2025, Gradient reached a pivotal inflection point, spinning out from Google entirely to operate as an independent investment firm - a structural shift reflecting how competitive and fast-moving the AI venture landscape has become. The fund has backed more than 175 companies including unicorns WRITER and Lambda AI, with more than $1 billion in assets under management.",
    leadership: [
      { name: "Anna Patterson", role: "Founder & Managing Partner", profileSlug: "anna-patterson" },
      { name: "Darian Shirazi", role: "General Partner", profileSlug: "darian-shirazi" },
      { name: "Zach Bratun-Glennon", role: "General Partner", profileSlug: "zach-bratun-glennon" }
    ],
    timeline: [
      { year: "2017", event: "Anna Patterson founds Gradient Ventures as Google's AI-focused venture fund." },
      { year: "2019", event: "Darian Shirazi joins as General Partner, after founding and exiting Radius to Kabbage." },
      { year: "2023", event: "AUM surpasses $1 billion." },
      { year: "2025", event: "Spins out from Google as an independent entity in October." }
    ],
    holdings: []
  },
  {
    rank: 73,
    name: "Norrsken22",
    sectors: ["Fintech", "Healthcare", "Edtech", "Enterprise Software"],
    signatureExit: "No confirmed exit yet - Norrsken22's five investments (TymeBank, Sabi, Smile Identity, Autochek, Shara) all remain private, still-growing companies since the fund only launched in 2022",
    slug: "norrsken22",
    website: "https://www.norrsken22.com",
    short: "Norrsken22",
    founded: 2022,
    hq: "Kigali, Rwanda",
    aum: "$205M (debut fund, closed November 2023)",
    thesis: "Norrsken22 was founded in January 2022 by Niklas Adalberth, the Klarna co-founder behind the Norrsken Foundation, and Hans Otterling, a partner at Northzone, built specifically to close a gap the founders identified in African venture capital: real abundance at pre-seed and seed, but a genuine shortage of growth-stage capital for companies ready to scale past Series A. The firm allocates roughly half its capital to new Series A and B deals and the rest to follow-on investment in later rounds, run by a team with decades of combined experience investing across the continent, including Managing Partner Natalie Kolbe, formerly global head of private equity at Actis. Norrsken22 closed its debut $205 million African Tech Growth Fund in November 2023, above its $200 million target, backed by more than 30 unicorn founders including Flutterwave's Olugbenga Agboola and Skype's Niklas Zennström.",
    leadership: [
      { name: "Niklas Adalberth", role: "Co-Founder", profileSlug: "niklas-adalberth" },
      { name: "Hans Otterling", role: "Co-Founder", profileSlug: "hans-otterling" },
      { name: "Natalie Kolbe", role: "Managing Partner", profileSlug: "natalie-kolbe" },
      { name: "Lexi Novitske", role: "General Partner", profileSlug: "lexi-novitske" }
    ],
    timeline: [
      { year: "2022", event: "Niklas Adalberth and Hans Otterling found Norrsken22 in Kigali, Rwanda, in January." },
      { year: "2023", event: "Makes its first five investments: TymeBank, Sabi, Smile Identity, Autochek, and Shara." },
      { year: "2023", event: "Closes its debut $205 million African Tech Growth Fund in November, above its $200 million target." }
    ],
    holdings: []
  },
  {
    rank: 76,
    name: "Future Africa",
    sectors: ["Fintech", "Healthcare", "Edtech", "Climate"],
    signatureExit: "No confirmed fund-level exit yet - founder Iyinoluwa Aboyeji's own prior track record co-founding Andela and Flutterwave, both real African unicorns backed by SoftBank and the Chan Zuckerberg Initiative, is the firm's clearest credibility signal",
    slug: "future-africa",
    website: "https://www.future.africa",
    short: "Future Africa",
    founded: 2019,
    hq: "Lagos, Nigeria",
    aum: "Not publicly disclosed (100+ portfolio companies collectively valued above $6B, 2024)",
    thesis: "Future Africa was founded in March 2019 by Iyinoluwa Aboyeji, who'd already co-founded two of the continent's first genuine unicorns - Andela, backed by the Chan Zuckerberg Initiative, Google Ventures, and SoftBank, and Flutterwave, which he led as founding CEO through explosive early growth before stepping down in 2018. Rather than simply write checks, Future Africa was built around a specific 'capital, coaching, and community' model, providing mission-driven African founders with hands-on support alongside funding, framed by Aboyeji's own description of himself as a faith-driven investor focused on building an African future where prosperity and purpose are within everyone's reach. The firm has grown into Africa's largest seed-stage investment platform, backing more than 100 companies across fintech, healthtech, edtech, and climate technology, with a collective portfolio value exceeding $6 billion as of 2024.",
    leadership: [
      { name: "Iyinoluwa Aboyeji", role: "Founder & General Partner", profileSlug: "iyinoluwa-aboyeji" }
    ],
    timeline: [
      { year: "2015", event: "Iyinoluwa Aboyeji begins planning what becomes Future Africa, while still leading Flutterwave." },
      { year: "2018", event: "Steps down as Flutterwave CEO in October." },
      { year: "2019", event: "Formally founds Future Africa in March." },
      { year: "2024", event: "Portfolio reaches 100 companies with a collective value exceeding $6 billion." }
    ],
    holdings: []
  },
  {
    rank: 81,
    name: "In-Q-Tel",
    sectors: ["AI", "Cybersecurity", "Deep Tech", "Defense Tech"],
    signatureExit: "Palantir's 2020 NYSE direct listing under ticker PLTR - In-Q-Tel invested roughly $2 million in 2003, when it and the CIA were essentially the company's only backers and only customers, years before Palantir's valuation surpassed traditional defense contracting giants like Lockheed Martin",
    slug: "in-q-tel",
    website: "https://www.iqt.org",
    short: "In-Q-Tel",
    founded: 1999,
    hq: "Arlington, VA",
   aum: "Not publicly disclosed (Fortune's independent estimate: at least $1.8B deployed since 1999, based on 26 years of tax filings)",
    thesis: "In-Q-Tel was chartered by the CIA in February 1999 under Director George Tenet, founded by former Lockheed Martin CEO Norm Augustine and video-game-industry veteran Gilman Louie as founding CEO, built to close a widening gap between Silicon Valley's pace of innovation and the U.S. intelligence community's traditionally slow procurement processes. Structured as a nonprofit rather than a traditional fund, In-Q-Tel invests government and philanthropic-style capital directly into startups building frontier technology - AI, cybersecurity, biotech, and space - with the explicit goal of getting those capabilities into the hands of the CIA and allied intelligence and defense agencies faster than conventional contracting ever could. Over 26 years, the fund has helped launch more than 800 companies, is an investor in 32 of this year's NatSec 100 fastest-growing defense startups (more than any other fund), and produced early, formative bets on Palantir, Keyhole (which became Google Earth), and Ginkgo Bioworks.",
    leadership: [
      { name: "Gilman Louie", role: "Founding CEO", profileSlug: "gilman-louie" },
      { name: "Norm Augustine", role: "Founding Chairman" }
    ],
    timeline: [
      { year: "1999", event: "The CIA charters In-Q-Tel in February, under Director George Tenet." },
      { year: "2003", event: "Invests roughly $2 million in Palantir, one of the company's only early backers." },
      { year: "2004", event: "Keyhole, an In-Q-Tel-backed geospatial visualization company, is acquired by Google, later becoming Google Earth." },
      { year: "2020", event: "Palantir completes its direct listing on the NYSE." },
      { year: "2021", event: "Ginkgo Bioworks goes public via SPAC merger under ticker DNA." }
    ],
    holdings: [
      { name: "Palantir", ticker: "PLTR", historicalPrice: null, price: 179.01 },
      { name: "Ginkgo Bioworks", ticker: "DNA", historicalPrice: null, price: 7.24 }
 
    ]
  },
  {
    rank: 89,
    name: "Gaingels",
    sectors: ["Enterprise Software", "Fintech", "Consumer"],
    signatureExit: "No single blockbuster exit - Gaingels' model is co-investing alongside lead VCs in oversubscribed rounds rather than leading deals, and its clearest proof point is scale: more than $1 billion deployed into 2,500-plus companies including 75-plus unicorns",
    slug: "gaingels",
    website: "https://gaingels.com",
    short: "Gaingels",
    founded: 2014,
    hq: "Burlington, VT",
    aum: "$900M+",
    thesis: "Gaingels was founded in 2014 by David Beatty and Paul Grossinger as a small angel group of LGBTQIA+ investors backing LGBTQIA+ founders, at a time there was nowhere else for the community to invest together in its own entrepreneurs. After investing roughly $4 million between 2015 and 2017, the two transformed Gaingels into a formal venture syndicate in 2018, broadening its mandate beyond LGBTQIA+ founders to diverse and underrepresented leadership across the entire venture chain - founders, executives, board members, and check-writers - while co-investing alongside established VCs in oversubscribed rounds rather than leading deals independently. That model has scaled dramatically: more than 4,000 members and $1 billion-plus deployed into 2,500-plus companies including 75-plus unicorns, supported by initiatives like the Diversity Term Sheet Rider and one of venture's largest diversity-aligned jobs boards.",
    leadership: [
      { name: "David Beatty", role: "Co-Founder & Managing Partner" },
      { name: "Paul Grossinger", role: "Co-Founder", profileSlug: "paul-grossinger" },
      { name: "Jennifer Jeronimo", role: "CEO & General Partner" }
    ],
    timeline: [
      { year: "2014", event: "David Beatty and Paul Grossinger found Gaingels as an LGBTQIA+ angel group." },
      { year: "2018", event: "Transitions from an angel group into a formal venture investment firm in January." },
      { year: "2021", event: "Jennifer Jeronimo joins as CEO." },
      { year: "2026", event: "Surpasses $1 billion in AUM across 2,500-plus companies and 75-plus unicorns." }
    ],
    holdings: []
  },
  {
    rank: 75,
    name: "VentureSouq",
    sectors: ["Fintech", "Climate", "Enterprise Software"],
    signatureExit: "No single dollar-verified signature exit - VentureSouq's scale is cumulative instead: more than 300 investments, nine unicorns, one IPO, and 26 acquisitions across its portfolio, including Substack, Tabby, and Zoomcar",
    slug: "venturesouq",
    website: "https://www.venturesouq.com",
    short: "VentureSouq",
    founded: 2013,
    hq: "Dubai, UAE",
    aum: "Not publicly disclosed",
    thesis: "VentureSouq was founded in Dubai in 2013 by Sonia Gokhale, Sonia Weymuller, Suneel Gokhale, and Tammer Qaddumi, building one of the earliest institutional venture platforms in the GCC region. Rather than running a single generalist fund, the firm operates thematically, managing dedicated vehicles focused on fintech and climate tech, and investing globally rather than staying confined to the Gulf despite its regional roots. That structure has produced a genuinely broad portfolio spanning more than 300 companies, including nine unicorns and outcomes like Substack, Tabby, and Zoomcar, with 71 total exits recorded across its history.",
    leadership: [
      { name: "Sonia Weymuller", role: "Co-Founder & General Partner", profileSlug: "sonia-weymuller" },
      { name: "Sonia Gokhale", role: "Co-Founder" },
      { name: "Suneel Gokhale", role: "Co-Founder" }
    ],
    timeline: [
      { year: "2013", event: "Sonia Gokhale, Sonia Weymuller, Suneel Gokhale, and Tammer Qaddumi found VentureSouq in Dubai." },
      { year: "2024", event: "Portfolio company Minimum is named to Fast Company's Most Innovative Companies list." },
      { year: "2026", event: "Cumulative portfolio reaches more than 300 companies, including nine unicorns and 71 total exits." }
    ],
    holdings: []
  },
  {
    rank: 68,
    name: "Y Combinator",
    sectors: ["AI", "SaaS", "Consumer Internet", "Fintech", "Biotech", "Developer Tools"],
    signatureExit: "Coinbase's 2021 Nasdaq direct listing at an $85 billion valuation - the most valuable company in YC history at time of listing",
    slug: "y-combinator",
    website: "https://www.ycombinator.com",
    short: "Y Combinator",
    founded: 2005,
    hq: "San Francisco, CA",
    aum: "Not disclosed as traditional AUM ($500K standard check per company; YC Continuity growth fund)",
    thesis: "Y Combinator was founded in March 2005 in Cambridge, Massachusetts by Paul Graham, Jessica Livingston, Robert Tappan Morris, and Trevor Blackwell, and pioneered the batch-based accelerator model that essentially every startup accelerator since has copied: fixed cohorts, a standardized check, weekly dinners with successful founders, and a demo day culminating each three-month program. The firm has funded more than 5,690 companies since inception, with more than 400 reaching unicorn status and a combined alumni portfolio valuation exceeding $600 billion - including Airbnb, Stripe, Coinbase, DoorDash, Dropbox, Instacart, and Reddit. Under President and CEO Garry Tan, who took over in January 2023, YC has leaned hard into AI, with more than half of each recent batch building AI-first products.",
    leadership: [
      { name: "Garry Tan", role: "President & CEO", profileSlug: "garry-tan" },
      { name: "Jared Friedman", role: "Managing Partner" },
      { name: "Harj Taggar", role: "Managing Partner" },
      { name: "Jessica Livingston", role: "Co-Founder" }
    ],
    timeline: [
      { year: "2005", event: "Paul Graham and Jessica Livingston launch Y Combinator in Cambridge, funding its first batch including Reddit." },
      { year: "2009", event: "Sequoia Capital invests $2 million, enabling YC to consolidate operations in Silicon Valley." },
      { year: "2014", event: "Sam Altman becomes president, later increasing the standard investment to $150,000 for 7% equity." },
      { year: "2021", event: "Coinbase direct lists at an $85 billion valuation, YC's most valuable company at the time." },
      { year: "2023", event: "Garry Tan becomes president and CEO in January, relocating headquarters from Mountain View to San Francisco." },
      { year: "2026", event: "Cumulative portfolio reaches 5,690+ companies with a combined valuation exceeding $600 billion." }
    ],
    holdings: [
      { name: "Coinbase", ticker: "COIN", historicalPrice: 257.21, price: 167.90 },
      { name: "DoorDash", ticker: "DASH", historicalPrice: 170.65, price: 175.00 },
      { name: "Airbnb", ticker: "ABNB", historicalPrice: null, price: 141.10 },
      { name: "Dropbox", ticker: "DBX", historicalPrice: null, price: 32.06 },
      { name: "Reddit", ticker: "RDDT", historicalPrice: null, price: 178.44 }
    ]
  },
  {
    rank: 64,
    name: "Worldbuild",
    sectors: ["AI Infrastructure", "Developer Tools", "Aerospace", "Energy"],
    signatureExit: "No public exit yet - Worldbuild closed its debut fund in 2026 and is still building its earliest cohort, including SF Compute and Browserbase",
    slug: "worldbuild",
    website: "https://worldbuild.vc",
    short: "Worldbuild",
    founded: 2025,
    hq: "New York, NY",
    aum: "$30M+ (debut fund)",
    thesis: "Sumeet Singh founded Worldbuild after roles as an investor at Andreessen Horowitz and in operating and investing positions at Brigit and Nyca Partners, building the firm around the idea that the best early bets require genuine intellectual conviction rather than pattern-matching against what other investors are already doing. Worldbuild closed a $30 million debut fund in 2026, backing early-stage companies across AI infrastructure, developer tools, aerospace, and energy, including SF Compute and Browserbase - bets Singh has said he was able to make early precisely because his thesis-driven approach let him form a point of view before a company looked obvious to generalist investors.",
    leadership: [
      { name: "Sumeet Singh", role: "Founder & Managing Partner", profileSlug: "sumeet-singh" }
    ],
    timeline: [
      { year: "2025", event: "Sumeet Singh begins building Worldbuild after roles at a16z, Brigit, and Nyca Partners." },
      { year: "2026", event: "Closes Worldbuild's $30 million debut fund." }
    ],
    holdings: []
  },
  {
    rank: 65,
    name: "Female Founders Fund",
    sectors: ["Digital Health", "AI-First Vertical Software", "Beauty & Personal Care", "Deep Tech"],
    signatureExit: "Rent the Runway's 2021 Nasdaq IPO - Female Founders Fund was an early backer of Jennifer Hyman's marketplace years before its public debut",
    slug: "female-founders-fund",
    website: "https://femalefoundersfund.com",
    short: "Female Founders Fund",
    founded: 2014,
    hq: "New York, NY",
    aum: "$29M+ (latest fund)",
    thesis: "Anu Duggal founded Female Founders Fund in 2014 around a straightforward premise: female founders were being systematically underfunded relative to their performance, and a firm built specifically to be their first institutional check could both correct that gap and generate strong returns. The firm backed Jennifer Hyman's Rent the Runway years before its 2021 Nasdaq listing, along with Maven Clinic, Zola, and Tala. Duggal has scaled the firm to $140 million in total capital across its funds, most recently closing a $29 million Fund IV in December 2025, while keeping its core focus on seed-stage healthcare, AI-first software, and consumer categories underrepresented founders are building in.",
    leadership: [
      { name: "Anu Duggal", role: "Founding Partner", profileSlug: "anu-duggal" }
    ],
    timeline: [
      { year: "2014", event: "Anu Duggal founds Female Founders Fund in New York City." },
      { year: "2021", event: "Portfolio company Rent the Runway goes public on Nasdaq." },
      { year: "2025", event: "Closes Female Founders Fund's $29 million Fund IV, bringing total firm capital to $140 million." }
    ],
    holdings: [
      { name: "Rent the Runway", ticker: "RENT", historicalPrice: null, price: 3.64 }
    ]
  },
  {
    rank: 66,
    name: "Modern Technical Fund",
    sectors: ["Infrastructure", "Data", "Security", "Developer Tooling"],
    signatureExit: "No public exit yet - Modern Technical Fund closed its debut fund in 2025 and is still building its earliest cohort of technical founders",
    slug: "modern-technical-fund",
    website: 'https://moderntechnicalfund.com/',
    short: "Modern Technical Fund",
    founded: 2025,
    hq: "San Francisco, CA",
    aum: "$22M+ (debut fund)",
    thesis: "Amanda Robson started her career in investment banking at William Blair before moving into venture capital at Norwest Venture Partners and then Cowboy Ventures, where she became the youngest partner in the firm's history. In 2025, she left to found Modern Technical Fund as a solo general partner, built specifically to back highly technical founders - often in infrastructure, data, and security - who tend to look strongest to specialists long before they look obvious to generalist investors.",
    leadership: [
      { name: "Amanda Robson", role: "Founder (Solo GP)", profileSlug: "amanda-robson" }
    ],
    timeline: [
      { year: "2020s", event: "Amanda Robson becomes the youngest partner in Cowboy Ventures' history after roles at Norwest Venture Partners and William Blair." },
      { year: "2025", event: "Leaves Cowboy Ventures to found Modern Technical Fund, closing a $22 million debut fund." }
    ],
    holdings: []
  },
  {
    rank: 67,
    name: "Cambrian Ventures",
    sectors: ["Fintech", "Fintech Infrastructure"],
    signatureExit: "No public exit yet - Cambrian closed its second $20 million fintech-focused fund in 2025",
    slug: "cambrian-ventures",
    website: "https://cambrian.vc",
    short: "Cambrian Ventures",
    founded: 2022,
    hq: "San Francisco Bay Area, CA",
    aum: "$20M+ (latest fund)",
    thesis: "Rex Salisbury worked as a software engineer before becoming a fintech investor at Andreessen Horowitz, where he built one of the best-networked founder communities in the category. In 2022, he used that network to launch Cambrian Ventures as a solo general partner, built around the thesis that fintech has captured only a small share of global financial-services value and that meaningful new category formation is still ahead. Salisbury has kept Cambrian focused exclusively on early-stage fintech through two $20 million funds, even as the broader venture cycle made specialist strategies harder to sustain.",
    leadership: [
      { name: "Rex Salisbury", role: "Founder & General Partner", profileSlug: "rex-salisbury" }
    ],
    timeline: [
      { year: "2022", event: "Rex Salisbury founds Cambrian Ventures after a career as a software engineer and fintech investor at a16z, closing a $20 million debut fund." },
      { year: "2025", event: "Closes Cambrian's second $20 million fintech-focused fund." }
    ],
    holdings: []
  },
  {
    rank: 68,
    name: "Symphonic Capital",
    sectors: ["Health", "Wealth", "Climate Resilience"],
    signatureExit: "No public exit yet - Symphonic Capital closed its debut $13.5 million fund in April 2025",
    slug: "symphonic-capital",
    website: "https://symphoniccapital.com",
    short: "Symphonic Capital",
    founded: 2022,
    hq: "Oakland, CA",
    aum: "$13.5M+ (debut fund)",
    thesis: "Sydney Thomas built one of the most-cited resources in early-stage venture, the Black Women in VC list, before founding Symphonic Capital around a specific thesis: that the essential systems ordinary households depend on - healthcare access, financial resilience, climate adaptation - are chronically underbuilt and underfinanced relative to how much they matter. Symphonic closed its $13.5 million debut fund in April 2025, backing pre-seed and seed founders, often using AI, working to close access gaps in health and wealth.",
    leadership: [
      { name: "Sydney Thomas", role: "Founder & General Partner", profileSlug: "sydney-thomas" }
    ],
    timeline: [
      { year: "2022", event: "Sydney Thomas begins building the thesis behind Symphonic Capital." },
      { year: "2025", event: "Closes Symphonic Capital's $13.5 million debut fund in April." }
    ],
    holdings: []
  },
  {
    rank: 69,
    name: "The Fintech Fund",
    sectors: ["Fintech", "Crypto", "DeFi"],
    signatureExit: "No public exit yet - The Fintech Fund closed its $10 million second fund in September 2024",
    slug: "the-fintech-fund",
    website: "https://thefintechfund.com",
    short: "The Fintech Fund",
    founded: 2022,
    hq: "New York, NY",
    aum: "$10M+ (latest fund)",
    thesis: "Nik Milanović built This Week in Fintech into one of the most-read newsletters and communities in the fintech industry, then converted that platform into The Fintech Fund in 2022 - a genuinely unusual media-to-fund path in venture capital. The fund closed a $10 million second vehicle in September 2024, investing across fintech, crypto, and DeFi globally, with Milanović's global fintech network functioning as the firm's primary sourcing advantage.",
    leadership: [
      { name: "Nik Milanović", role: "Founder & General Partner", profileSlug: "nik-milanovic" }
    ],
    timeline: [
      { year: "2022", event: "Nik Milanović launches The Fintech Fund, building on the community from This Week in Fintech." },
      { year: "2024", event: "Closes The Fintech Fund's $10 million Fund II in September." }
    ],
holdings: []
  },
  {
    rank: null,
    name: "Kima Ventures",
    sectors: [
      "Sector-Agnostic"
    ],
    slug: "kima-ventures",
    website: "https://kimaventures.com",
    short: "Kima",
    founded: 2010,
    hq: "Paris, France",
    aum: "Not publicly disclosed",
    thesis: "A high-frequency angel model: two to three investments a week, worldwide, on standardised one-off tickets of roughly €150,000, sector- and geography-agnostic, backing founders judged on ambition and rate of learning rather than category.",
    leadership: [
      {
        name: "Xavier Niel",
        role: "Co-Founder"
      },
      {
        name: "Jeremie Berrebi",
        role: "Co-Founder"
      }
    ],
    timeline: [
      {
        year: "2010",
        event: "Kima Ventures founded by Xavier Niel and Jeremie Berrebi in Paris."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Afore Capital",
    sectors: [
      "Software"
    ],
    slug: "afore-capital",
    website: "https://afore.vc",
    short: "Afore",
    founded: 2016,
    hq: "San Francisco, CA",
    aum: "Not publicly disclosed",
    thesis: "Invests exclusively at pre-seed, before there is a company or a business - only a product-oriented founder. Writes $1–2M+ into a founder's first institutional round, sometimes leading alongside operator angels.",
    leadership: [
      {
        name: "Gaurav Jain",
        role: "Co-Founder & Managing Partner"
      },
      {
        name: "Anamitra Banerji",
        role: "Co-Founder"
      }
    ],
    timeline: [
      {
        year: "2016",
        event: "Afore Capital founded by Gaurav Jain and Anamitra Banerji as a dedicated pre-seed firm."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Techstars",
    sectors: [
      "Sector-Agnostic"
    ],
    slug: "techstars",
    website: "https://www.techstars.com/",
    short: "Techstars",
    founded: 2006,
    hq: "New York, NY",
    aum: "Not publicly disclosed",
    thesis: "A pre-seed and early-stage venture firm built around accelerator programs: Accelerator Funds invest on standardised terms in companies inside Techstars programs, and Venture Funds take follow-on positions in graduates. Operates on a stated 'Give First' philosophy.",
    leadership: [
      {
        name: "David Cohen",
        role: "Co-Founder, Chairman & CEO"
      },
      {
        name: "Brad Feld",
        role: "Co-Founder"
      }
    ],
    timeline: [
      {
        year: "2006",
        event: "Techstars founded in Boulder, Colorado; first accelerator program run in 2007."
      },
      {
        year: "2009",
        event: "Techstars Ventures 2009, the firm's $5M debut fund, launched."
      },
      {
        year: "2012",
        event: "Techstars Ventures 2012 raised at $25M."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Conviction",
    sectors: [
      "AI"
    ],
    slug: "conviction",
    website: "https://conviction.com",
    short: "Conviction",
    founded: 2022,
    hq: "San Francisco, CA",
    aum: "$230M (Fund II, 2025)",
    thesis: "Purpose-built for AI-native 'Software 3.0' companies, on the view that the translation of powerful models into products that reshape industries is still at a very early stage. Writes $1–25M cheques, frequently as first institutional investor.",
    leadership: [
      {
        name: "Sarah Guo",
        role: "Founder & Managing Partner",
        profileSlug: "sarah-guo"
      },
      {
        name: "Mike Vernal",
        role: "General Partner"
      }
    ],
    timeline: [
      {
        year: "2022",
        event: "Conviction launched by Sarah Guo with a $101M debut fund."
      },
      {
        year: "2025",
        event: "Fund II closed at $230M; Mike Vernal joined as General Partner."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Haun Ventures",
    sectors: [
      "Crypto",
      "Web3"
    ],
    slug: "haun-ventures",
    website: "https://www.haun.co/",
    short: "Haun",
    founded: 2022,
    hq: "Menlo Park, CA",
    aum: "$1.5B (initial funds, 2022)",
    thesis: "Backs founders building the next generation of the internet, investing across every layer of the crypto stack and at every company stage.",
    leadership: [
      {
        name: "Katie Haun",
        role: "Founder & CEO",
        profileSlug: "katie-haun"
      }
    ],
    timeline: [
      {
        year: "2022",
        event: "Launched with $1.5B across a $500M early-stage fund and a $1B acceleration fund - the largest debut raised by a solo venture capitalist at the time."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Kindred Ventures",
    sectors: [
      "Sector-Agnostic"
    ],
    slug: "kindred-ventures",
    website: "https://kindredventures.com/",
    short: "Kindred",
    founded: 2014,
    hq: "San Francisco, CA",
    aum: "$312M (Kindred Ventures III and Selector I, 2023)",
    thesis: "Backs founders at the earliest possible moment - pre-seed and seed, sometimes before a company formally exists - and deliberately keeps each fund concentrated in roughly 20 to 25 companies.",
    leadership: [
      {
        name: "Steve Jang",
        role: "Founder & Managing Partner",
        profileSlug: "steve-jang"
      },
      {
        name: "Kanyi Maqubela",
        role: "Managing Partner"
      }
    ],
    timeline: [
      {
        year: "2014",
        event: "Founded by Steve Jang as an angel fund."
      },
      {
        year: "2018",
        event: "Became a full venture firm as Kanyi Maqubela joined."
      },
      {
        year: "2023",
        event: "Raised $312M across Kindred Ventures III and Selector I."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "S32",
    sectors: [
      "Healthcare",
      "Biotech",
      "Deep Tech"
    ],
    slug: "s32",
    website: "https://s32.com",
    short: "S32",
    founded: 2017,
    hq: "Palo Alto, CA",
    aum: "$740M (Fund 4, 2021)",
    thesis: "States its goal as improving the human condition by accelerating the discovery, development and distribution of important technologies and life-saving medicines - investing across software, security, computation, space, climate, machine learning, therapeutics, diagnostics and genomics.",
    leadership: [
      {
        name: "Bill Maris",
        role: "Founder",
        profileSlug: "bill-maris"
      },
      { name: "Andy Harrison", role: "CEO & General Partner", profileSlug: "andy-harrison" },
      {
        name: "Andy Conrad",
        role: "General Partner"
      },
      {
        name: "Michael Pellini",
        role: "General Partner"
      },
      {
        name: "Steve Kafka",
        role: "General Partner"
      }
    ],
    timeline: [
      {
        year: "2017",
        event: "Founded by Bill Maris; debut fund closed at $150M against a $100M target."
      },
      {
        year: "2019",
        event: "Second fund closed at $199.4M."
      },
      {
        year: "2021",
        event: "Fund 4 closed at $740M, taking total firm assets past $1.8B."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Underscore VC",
    sectors: [
      "B2B Software",
      "SaaS"
    ],
    slug: "underscore-vc",
    website: "https://underscore.vc/",
    short: "Underscore",
    founded: 2015,
    hq: "Boston, MA",
    aum: "Not publicly disclosed",
    thesis: "Backs B2B software founders at pre-seed and seed, dedicated since its second fund to earliest-stage SaaS application and infrastructure companies in or moving to Boston. Runs an open-source investing model that profit-shares with the expert community supporting its startups.",
    leadership: [
      {
        name: "Michael Skok",
        role: "Co-Founder & Partner"
      },
      {
        name: "John Pearce",
        role: "Co-Founder & Partner",
        profileSlug: "john-pearce"
      },
      {
        name: "Richard Dulude",
        role: "Co-Founder & Partner"
      }
    ],
    timeline: [
      {
        year: "2015",
        event: "Founded in Boston by Michael Skok, John Pearce and Richard Dulude."
      },
      {
        year: "2016",
        event: "Fund I closed at $85M, oversubscribed against a $75M target."
      },
      {
        year: "2024",
        event: "Fund III closed at $58M."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Basis Set Ventures",
    sectors: [
      "AI",
      "Enterprise Software"
    ],
    slug: "basis-set-ventures",
    website: "https://basisset.ventures",
    short: "Basis Set",
    founded: 2017,
    hq: "San Francisco, CA",
    aum: "$850M (2026)",
    thesis: "One of the earliest funds to specialise in AI and automation at seed and Series A, founded on the idea of uniting machine intelligence with human ingenuity to augment rather than replace human capability.",
    leadership: [
      {
        name: "Lan Xuezhao",
        role: "Founder & Managing Partner",
        profileSlug: "lan-xuezhao"
      }
    ],
    timeline: [
      {
        year: "2017",
        event: "Founded in June; first fund announced that August."
      },
      {
        year: "2021",
        event: "Fund II closed at $165M."
      },
      {
        year: "2024",
        event: "Fund III closed at $185M."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Hummingbird Ventures",
    sectors: [
      "Sector-Agnostic"
    ],
    slug: "hummingbird-ventures",
    website: "https://hummingbird.vc",
    short: "Hummingbird",
    founded: 2010,
    hq: "London, UK",
    aum: "Not publicly disclosed",
    thesis: "Describes itself as a global seed fund seeking outlier founders, deliberately investing outside established technology hubs.",
    leadership: [
      {
        name: "Barend Van den Brande",
        role: "Founder & General Partner",
        profileSlug: "barend-van-den-brande"
      },
      {
        name: "Firat Ileri",
        role: "Managing Partner"
      }
    ],
    timeline: [
      {
        year: "2010",
        event: "Founded by Barend Van den Brande."
      },
      {
        year: "2013",
        event: "Invested in Kraken."
      },
      {
        year: "2021",
        event: "Sold roughly half its Kraken stake at a $5B company valuation."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "M13",
    sectors: [
      "Consumer"
    ],
    slug: "m13",
    website: "https://m13.co",
    short: "M13",
    founded: 2016,
    hq: "Santa Monica, CA",
    aum: "$400M (consumer technology fund, 2022)",
    thesis: "A full-stack team of operators backing consumer technology founders from seed to Series B across work, commerce, health and money. Its full-time partners are former founders and operators rather than career investors.",
    leadership: [
      {
        name: "Carter Reum",
        role: "Co-Founder", profileSlug: "carter-reum"
      },
      {
        name: "Courtney Reum",
        role: "Co-Founder", profileSlug: "courtney-reum"
      },
      {
        name: "Karl Alomar",
        role: "Partner",
        profileSlug: "karl-alomar"
      }
    ],
    timeline: [
      {
        year: "2016",
        event: "Founded by Carter and Courtney Reum."
      },
      {
        year: "2019",
        event: "Fund II closed at $175M."
      },
      {
        year: "2022",
        event: "Announced a $400M consumer technology fund."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Neo",
    sectors: [
      "Sector-Agnostic"
    ],
    slug: "neo",
    website: "https://neo.com",
    short: "Neo",
    founded: 2017,
    hq: "San Francisco, CA",
    aum: "$320M (Fund IV, 2025)",
    thesis: "Built on the premise that community matters more than capital: identifies and mentors exceptional technical talent early, often while founders are still at university, through a scholars fellowship, an accelerator and a mentor community, and then invests.",
    leadership: [
      {
        name: "Ali Partovi",
        role: "Founder & CEO",
        profileSlug: "ali-partovi"
      }
    ],
    timeline: [
      {
        year: "2017",
        event: "Founded by Ali Partovi."
      },
      {
        year: "2018",
        event: "Debut fund closed at $80M."
      },
      {
        year: "2021",
        event: "Fund II raised at $130M."
      },
      {
        year: "2023",
        event: "Raised $235M across two new funds."
      },
      {
        year: "2025",
        event: "Fund IV closed at $320M."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Human Capital",
    sectors: [
      "Sector-Agnostic"
    ],
    slug: "human-capital",
    website: "https://human.capital/",
    short: "Human Capital",
    founded: 2015,
    hq: "San Francisco, CA",
    aum: "Not publicly disclosed",
    thesis: "States that ambitious builders turn great ideas into great companies, and invests in founders, teams and startups that share that mindset.",
    leadership: [
      {
        name: "Armaan Ali",
        role: "Co-Founder & CEO"
      },
      {
        name: "Baris Akis",
        role: "Co-Founder & President"
      }
    ],
    timeline: [
      {
        year: "2015",
        event: "Human Capital founded in San Francisco."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Entrepreneur First",
    sectors: [
      "Sector-Agnostic"
    ],
    slug: "entrepreneur-first",
    website: "https://www.joinef.com/",
    short: "EF",
    founded: 2011,
    hq: "London, UK",
    aum: "$200M (capital raise reported 2026)",
    thesis: "Pioneered talent investing: the discovery and cultivation of exceptional people with founder potential before they have a co-founder, or even an idea. Invests in individuals first, then helps them find co-founders, form a company and raise a first round.",
    leadership: [
      {
        name: "Alice Bentinck",
        role: "Co-Founder"
      },
      {
        name: "Matt Clifford",
        role: "Co-Founder"
      }
    ],
    timeline: [
      {
        year: "2011",
        event: "Founded in London, pioneering the talent-investing model."
      },
      {
        year: "2026",
        event: "Raised $200M in fresh capital from institutional and individual backers."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Boost VC",
    sectors: [
      "Crypto",
      "Deep Tech"
    ],
    slug: "boost-vc",
    website: "https://boost.vc",
    short: "Boost",
    founded: 2012,
    hq: "San Mateo, CA",
    aum: "Not publicly disclosed",
    thesis: "Sets out to accelerate the sci-fi future, leading pre-seed rounds with a standardised $500K cheque alongside a twice-yearly three-month accelerator that includes housing and workspace.",
    leadership: [
      {
        name: "Adam Draper",
        role: "Co-Founder",
        profileSlug: "adam-draper"
      },
      {
        name: "Brayton Williams",
        role: "Co-Founder"
      }
    ],
    timeline: [
      {
        year: "2012",
        event: "Boost VC founded by Adam Draper and Brayton Williams in San Mateo."
      }
    ],
    holdings: []
  },
  {
    rank: 3,
    name: "Insight Partners",
    sectors: ["Software", "SaaS", "Cybersecurity"],
    signatureExit: "Shopify's 2015 IPO, one of the defining e-commerce software exits of the decade",
    slug: "insight-partners",
    seoPage: "firms/insight-partners/",
    website: "https://www.insightpartners.com",
    short: "Insight",
    founded: 1995,
    hq: "New York, NY",
    aum: "$90B+",
    thesis: "Founded in 1995 by Jeff Horing and Jerry Murdock in New York, Insight built its identity on outbound sourcing long before that was common practice - in the firm's earliest years, the two co-founders would comb through trade publications by hand looking for software companies that were hiring, and therefore growing. That research-driven, find-them-before-anyone-else approach scaled into a firm managing tens of billions of dollars, still built around the same instinct to spot momentum early.",
    leadership: [
      { name: "Jeff Horing", role: "Co-Founder & Managing Director", profileSlug: "jeff-horing" },
      { name: "Jerry Murdock", role: "Co-Founder (Managing Director until 2011)", profileSlug: "jerry-murdock" }
    ],
    timeline: [
      { year: "1995", event: "Jeff Horing and Jerry Murdock found the firm in New York, betting early on B2B software." },
      { year: "1995-2000", event: "Sources deals by manually reading trade publications for software companies that were hiring." },
      { year: "2015", event: "Portfolio company Shopify goes public, one of the firm's defining software exits." },
      { year: "2025", event: "Assets under management surpass $90 billion, with over 875 companies invested in to date." }
    ],
    holdings: [
      { name: "Shopify", ticker: "SHOP", investedYear: 2013, historicalPrice: 107.53, price: 123.56 },
      { name: "DocuSign", ticker: "DOCU", historicalPrice: null, price: 52.74 }
    ]
  },
  {
  rank: 4,
    name: "Tiger Global Management",
    sectors: ["Internet", "Fintech", "Consumer Tech"],
    signatureExit: "An early pre-IPO stake in Facebook that helped define Tiger Global's hybrid public-private strategy",
    slug: "tiger-global",
    website: "https://www.tigerglobal.com",
    short: "Tiger Global",
    founded: 2001,
    hq: "New York, NY",
    aum: "$58B+",
    thesis: "Chase Coleman was only 25 when he launched Tiger Global (originally named Tiger Technology) in 2001, seeded with roughly $25 million from his mentor Julian Robertson after Robertson's own famed hedge fund, Tiger Management, wound down. Coleman built Tiger Global as a hybrid the industry hadn't quite seen before - a fund equally comfortable buying public stocks and writing private venture checks, a strategy that let it move unusually fast into deals other VCs took months to close.",
    leadership: [
      { name: "Chase Coleman", role: "Founder", profileSlug: "chase-coleman" },
      { name: "Scott Shleifer", role: "Partner, led expansion into private equity", profileSlug: "scott-shleifer" }
    ],
    timeline: [
      { year: "2001", event: "Chase Coleman, then 25, launches the firm (originally Tiger Technology) with $25 million seeded by mentor Julian Robertson." },
      { year: "2003", event: "Scott Shleifer joins and helps expand the firm from public markets into private equity and venture deals." },
      { year: "2010s", event: "Builds an early pre-IPO stake in Facebook, defining the firm's hybrid public-private strategy." },
      { year: "2021", event: "Becomes one of the most active venture investors globally, deploying capital at unusually high speed." }
    ],
    holdings: [
      { name: "Coinbase", ticker: "COIN", investedYear: 2018, historicalPrice: 257.21, price: 161.00 },
      { name: "JD.com", ticker: "JD", investedYear: 2011, historicalPrice: null, price: 29.62 }
    ]
  },
  {
    rank: null,
    name: "Passion Capital",
    sectors: [
      "AI",
      "Fintech"
    ],
    slug: "passion-capital",
    website: null,
    short: "Passion",
    founded: 2009,
    hq: "London, UK",
    aum: "Not publicly disclosed",
    thesis: "A founder-first European firm, described as the first operator-led venture fund in Europe. Typically invests £400,000–£500,000 and will lead, co-lead or participate.",
    leadership: [
      {
        name: "Robert Dighero",
        role: "Founding Partner", profileSlug: "robert-dighero"
      },
      {
        name: "Sarah Stafford",
        role: "Partner, General Counsel"
      },
      {
        name: "Andrew Jenkins",
        role: "Partner"
      },
      {
        name: "Will Orde",
        role: "Partner"
      },
      {
        name: "Greg Bennett",
        role: "Partner"
      }
    ],
    timeline: [
      {
        year: "2009",
        event: "Passion Capital co-founded in London by Robert Dighero, Eileen Burbidge and Stefan Glaenzer."
      },
      {
        year: "2011",
        event: "Launched in March as a private-public hybrid with a $60M debut fund, $40M of it UK government-backed."
      },
      {
        year: "2015",
        event: "Second fund raised at $69M."
      },
      {
        year: "2026",
        event: "Closed a €46M seed fund for AI and fintech startups."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Alven",
    sectors: [
      "Marketplaces",
      "Developer Tools",
      "AI",
      "Consumer"
    ],
    slug: "alven",
    website: "https://alven.co/",
    short: "Alven",
    founded: 2000,
    hq: "Paris, France",
    aum: "€2B+ (2025)",
    thesis: "An independent early-stage firm investing mainly at seed and Series A, with a long-term commitment to entrepreneurs building category-defining European companies with global reach.",
    leadership: [
      {
        name: "Guillaume Aubin",
        role: "Co-Founder",
        profileSlug: "guillaume-aubin"
      },
      {
        name: "Charles Letourneur",
        role: "Co-Founder",
        profileSlug: "charles-letourneur"
      }
    ],
    timeline: [
      {
        year: "2000",
        event: "Founded in Paris by Guillaume Aubin and Charles Letourneur."
      },
      {
        year: "2013",
        event: "Alven Capital IV closed at €120M."
      },
      {
        year: "2017",
        event: "Alven Capital V closed at €250M."
      },
      {
        year: "2022",
        event: "Sixth fund closed at its €350M hard cap, oversubscribed against a €300M target."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Ventech",
    sectors: [
      "AI",
      "Healthcare",
      "Enterprise Software",
      "Cybersecurity"
    ],
    slug: "ventech",
    website: "https://www.ventechvc.com/",
    short: "Ventech",
    founded: 1998,
    hq: "Paris, France",
    aum: "€1.1B+ raised since inception (2025)",
    thesis: "A pan-European, multi-sector early-stage firm backing tech founders from seed and Series A through to IPO or exit, operating across Paris, Munich, Berlin, Helsinki and Stockholm alongside a sister platform in Asia.",
    leadership: [
      {
        name: "Jean Bourcereau",
        role: "Chairman & Managing Partner",
        profileSlug: "jean-bourcereau"
      },
      {
        name: "Stephan Wirries",
        role: "General Partner"
      },
      {
        name: "Audrey Soussan",
        role: "General Partner"
      }
    ],
    timeline: [
      {
        year: "1998",
        event: "Ventech founded in Paris."
      },
      {
        year: "2018",
        event: "Fund V first close at €140M against a €200M hard cap."
      },
      {
        year: "2025",
        event: "Fund VI final close at €175M, the largest in the firm's history."
      }
    ],
    holdings: [
      {
        name: "Arteris",
        ticker: "AIP",
        historicalPrice: null,
        price: 27.59
      }
    ]
  },
  {
    rank: null,
    name: "Bayern Kapital",
    sectors: [
      "Deep Tech",
      "Healthcare",
      "Climate",
      "Enterprise Software"
    ],
    slug: "bayern-kapital",
    website: "https://bayernkapital.de/en/",
    short: "Bayern Kapital",
    founded: 1995,
    hq: "Landshut, Germany",
    aum: "Not publicly disclosed",
    thesis: "The venture capital company of the Free State of Bavaria, providing equity to young technology businesses based in Bavaria as an anchor investor from pre-seed through growth, alongside private co-investors.",
    leadership: [
      {
        name: "Monika Steger",
        role: "Managing Director",
        profileSlug: "monika-steger"
      },
      {
        name: "Markus Mrachacz",
        role: "Managing Director"
      }
    ],
    timeline: [
      {
        year: "1995",
        event: "Founded by the Bavarian state government as a wholly owned subsidiary of LfA Förderbank Bayern."
      },
      {
        year: "2021",
        event: "European Investment Bank committed €50M to Wachstumsfonds Bayern 2, expanding its resources to €165M."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Amadeus Capital Partners",
    sectors: [
      "Deep Tech",
      "AI",
      "Cybersecurity",
      "Healthcare"
    ],
    slug: "amadeus-capital-partners",
    website: "https://www.amadeuscapital.com/",
    short: "Amadeus",
    founded: 1997,
    hq: "Cambridge, UK",
    aum: "Not publicly disclosed",
    thesis: "A deep tech firm backing AI, human-centric technology and sustainability companies at all stages from seed to venture buyout.",
    leadership: [
      {
        name: "Anne Glover",
        role: "CEO & Co-Founder",
        profileSlug: "anne-glover"
      },
      {
        name: "Hermann Hauser",
        role: "Co-Founder",
        profileSlug: "hermann-hauser"
      }
    ],
    timeline: [
      {
        year: "1997",
        event: "Founded by Anne Glover and Hermann Hauser with a first fund of £50M."
      },
      {
        year: "2025",
        event: "Portfolio company OrganOx acquired by Terumo for $1.5B, one of the largest UK medtech exits on record."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Amadeus APEX Technology Fund",
    sectors: [
      "Deep Tech",
      "AI",
      "Robotics"
    ],
    slug: "amadeus-apex-technology-fund",
    website: null,
    short: "Amadeus APEX",
    founded: 2023,
    hq: "Cambridge, UK",
    aum: "€28M (first close, 2023)",
    thesis: "A joint venture fund between Amadeus Capital Partners and APEX Ventures, investing €1–1.5M at seed and Series A into deep tech companies with defendable technology built on significant scientific advances, focused on the DACH region.",
    leadership: [
      {
        name: "Anne Glover",
        role: "Investment Committee",
        profileSlug: "anne-glover"
      },
      {
        name: "Hermann Hauser",
        role: "Investment Committee",
        profileSlug: "hermann-hauser"
      },
      {
        name: "Andreas Riegler",
        role: "Investment Committee",
        profileSlug: "andreas-riegler"
      },
      {
        name: "Wolfgang Neubert",
        role: "Investment Committee"
      }
    ],
    timeline: [
      {
        year: "2023",
        event: "Launched with a €28M first close against an €80M target; first investment made into OKAPI:Orbits."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Hoxton Ventures",
    sectors: [
      "SaaS",
      "Enterprise Software",
      "Consumer"
    ],
    slug: "hoxton-ventures",
    website: null,
    short: "Hoxton",
    founded: 2013,
    hq: "London, UK",
    aum: "Not publicly disclosed",
    thesis: "Focuses on startups inventing new market categories or transforming large existing industries, investing primarily at Series A with cheques of $1–5M and following capital through the life of the investment.",
    leadership: [
      {
        name: "Hussein Kanji",
        role: "Co-Founder",
        profileSlug: "hussein-kanji"
      }
    ],
    timeline: [
      {
        year: "2013",
        event: "Founded by Hussein Kanji and Rob Kniaz; Fund I closed at $40M."
      },
      {
        year: "2019",
        event: "Fund II formed."
      },
      {
        year: "2023",
        event: "Co-founder Rob Kniaz departed to launch a new deep tech fund."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Kindred Capital",
    sectors: [
      "Fintech",
      "Healthcare",
      "Sector-Agnostic"
    ],
    slug: "kindred-capital",
    website: "https://kindredcapital.vc/",
    short: "Kindred Capital",
    founded: 2016,
    hq: "London, UK",
    aum: "$130M (Fund III, 2023)",
    thesis: "Practises equitable venture: every founder it backs becomes a co-owner of the fund through allocated carry, sharing in the fund's profits alongside its LPs. Leads or co-leads pre-seed and seed rounds of $200K–$3M into no more than 30 companies per fund.",
    leadership: [
      {
        name: "Leila Zegna",
        role: "General Partner",
        profileSlug: "leila-zegna"
      }
    ],
    timeline: [
      {
        year: "2016",
        event: "First fund launched."
      },
      {
        year: "2020",
        event: "Fund II closed at £81M."
      },
      {
        year: "2023",
        event: "Fund III closed at $130M."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Plural",
    sectors: [
      "AI",
      "Deep Tech",
      "Climate",
      "Fintech"
    ],
    slug: "plural",
    website: 'https://www.pluralplatform.com/',
    short: "Plural",
    founded: 2022,
    hq: "London, UK",
    aum: "€400M (second fund, 2024)",
    thesis: "An investment platform run exclusively by former founders and operators rather than career investors, created because only around 8% of European investors have operator backgrounds against more than half in the US. Leads seed through Series A rounds.",
    leadership: [
      {
        name: "Taavet Hinrikus",
        role: "Co-Founder"
      },
      {
        name: "Sten Tamkivi",
        role: "Co-Founder & Partner",
        profileSlug: "sten-tamkivi"
      },
      {
        name: "Ian Hogarth",
        role: "Co-Founder"
      },
      {
        name: "Khaled Helioui",
        role: "Co-Founder"
      },
      {
        name: "Carina Namih",
        role: "Partner"
      }
    ],
    timeline: [
      {
        year: "2022",
        event: "Launched in June with a €250M debut fund."
      },
      {
        year: "2024",
        event: "Second fund closed at €400M."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Air Street Capital",
    sectors: [
      "AI"
    ],
    slug: "air-street-capital",
    website: "https://www.airstreet.com/",
    short: "Air Street",
    founded: 2019,
    hq: "London, UK",
    aum: "$400M (2026)",
    thesis: "Backs AI-first companies - those whose product would not function without AI - at the earliest stages across Europe and North America, leading rounds as a solo-GP fund.",
    leadership: [
      {
        name: "Nathan Benaich",
        role: "Founder & General Partner",
        profileSlug: "nathan-benaich"
      }
    ],
    timeline: [
      {
        year: "2020",
        event: "Fund I raised at $17M."
      },
      {
        year: "2026",
        event: "Fund III closed at $232M, the largest solo-GP venture fund in Europe."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Fly Ventures",
    sectors: [
      "Deep Tech",
      "Enterprise Software"
    ],
    slug: "fly-ventures",
    website: "https://fly.vc",
    short: "Fly",
    founded: 2016,
    hq: "Berlin, Germany",
    aum: "€80M (Fund III, 2024)",
    thesis: "Backs technical founders at inception, writing €1–4M cheques into rounds of €2–10M, operating deliberately as a boutique with an equal-GP model across Berlin, London, Paris and Zurich, and using an in-house machine-learning platform to source deals before founders start fundraising.",
    leadership: [
      {
        name: "Gabriel Matuschka",
        role: "Co-Founder & General Partner",
        profileSlug: "gabriel-matuschka"
      },
      {
        name: "Fredrik Bergenlid",
        role: "Co-Founder & General Partner"
      },
      {
        name: "Matt Wichrowski",
        role: "General Partner"
      },
      {
        name: "Marie Brayer",
        role: "General Partner"
      }
    ],
    timeline: [
      {
        year: "2016",
        event: "Founded in Berlin by Gabriel Matuschka and Fredrik Bergenlid."
      },
      {
        year: "2017",
        event: "Fund I closed at $41M."
      },
      {
        year: "2020",
        event: "Fund II closed at €53M."
      },
      {
        year: "2024",
        event: "Fund III closed oversubscribed at €80M in a single close."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Backed VC",
    sectors: [
      "Deep Tech",
      "Biotech",
      "Fintech"
    ],
    slug: "backed-vc",
    website: "https://www.backed.vc/",
    short: "Backed",
    founded: 2016,
    hq: "London, UK",
    aum: "$100M (Fund III, 2025)",
    thesis: "Partners with founders building in spaces most investors avoid, leading pre-seed and seed rounds of $500K–$5M with a community-driven model that treats founders' personal growth and company growth as directly correlated.",
    leadership: [
      {
        name: "Andre de Haes",
        role: "Co-Founder",
        profileSlug: "andre-de-haes"
      },
      {
        name: "Alex Brunicki",
        role: "Co-Founder"
      },
      {
        name: "Matt Fitzpatrick",
        role: "Chief Executive Officer"
      }
    ],
    timeline: [
      {
        year: "2016",
        event: "Founded by Andre de Haes and Alex Brunicki."
      },
      {
        year: "2022",
        event: "Fund II unveiled at €150M, split between a seed fund and a follow-on fund."
      },
      {
        year: "2025",
        event: "Backed 3 closed at its $100M cap alongside the firm's 100th investment."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Firstminute Capital",
    sectors: [
      "AI",
      "Deep Tech",
      "Sector-Agnostic"
    ],
    slug: "firstminute-capital",
    website: "https://www.firstminute.capital/",
    short: "Firstminute",
    founded: 2017,
    hq: "London, UK",
    aum: "$500M (2026)",
    thesis: "Backs European founders at seed who are building global technology businesses, seeking talent magnets whose conviction attracts top-tier people. Writes £1–3M cheques targeting roughly 10% ownership, supported by a base of over 130 unicorn founders as LPs.",
    leadership: [
      {
        name: "Brent Hoberman",
        role: "Co-Founder & Managing Partner",
        profileSlug: "brent-hoberman"
      },
      {
        name: "Spencer Crawley",
        role: "Co-Founder & General Partner"
      }
    ],
    timeline: [
      {
        year: "2017",
        event: "Fund I closed oversubscribed at $85M after a $60M first close cornerstoned by Atomico."
      },
      {
        year: "2020",
        event: "Fund II announced at $111M, taking assets to $211M."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Sutter Hill Ventures",
    sectors: [
      "Enterprise Software",
      "Infrastructure",
      "Cybersecurity",
      "Cloud"
    ],
    slug: "sutter-hill-ventures",
    website: null,
    short: "Sutter Hill",
    founded: 1964,
    hq: "Palo Alto, CA",
    aum: "$2.3B (2026)",
    thesis: "Runs a proactive incubation model: partners identify a market gap, recruit a founder-in-residence and drive company creation from day one, providing space, hiring the first engineers and sometimes serving as interim management to de-risk the earliest stage.",
    leadership: [
      { name: "Mike Speiser", role: "Managing Director", profileSlug: "mike-speiser" }
    ],
    timeline: [
      {
        year: "1964",
        event: "Founded by Bill Draper and Paul Wythes."
      },
      {
        year: "2012",
        event: "Led Snowflake's $5M Series A."
      },
      {
        year: "2024",
        event: "Led Observe's $115M Series B."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Sierra Ventures",
    sectors: [
      "Enterprise Software",
      "AI",
      "Cybersecurity",
      "Cloud Infrastructure",
      "Deep Tech"
    ],
    slug: "sierra-ventures",
    website: "https://www.sierraventures.com/",
    short: "Sierra",
    founded: 1982,
    hq: "San Mateo, CA",
    aum: "$265M (Fund XIII, 2023)",
    thesis: "Backs first-principles founders building the future of enterprise technology, on the view that generative AI is creating the next wave of transformational enterprise software the way cloud computing did before it. Invests from inception through Series A.",
    leadership: [
      {
        name: "Mark Fernandes",
        role: "Managing Director"
      },
      {
        name: "Tim Guleri",
        role: "Managing Director", profileSlug: "tim-guleri"
      },
      {
        name: "Ben Yu",
        role: "Managing Director"
      }
    ],
    timeline: [
      {
        year: "1982",
        event: "Founded by Peter Wendell."
      },
      {
        year: "2023",
        event: "Fund XIII closed at $265M, taking total firm assets past $2B."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Heavybit",
    sectors: [
      "Developer Tools",
      "Cloud Infrastructure",
      "Enterprise Software"
    ],
    slug: "heavybit",
    website: 'https://heavybit.com/',
    short: "Heavybit",
    founded: 2013,
    hq: "San Francisco, CA",
    aum: "Not publicly disclosed",
    thesis: "Backs highly technical founders redefining how teams build, deploy, secure and scale enterprise software, investing from day zero and pairing capital with hands-on operational support through a network of several hundred advisors.",
    leadership: [
      {
        name: "Tom Drummond",
        role: "Co-Founder & Managing Director", profileSlug: "tom-drummond"
      },
      {
        name: "James Lindenbaum",
        role: "Co-Founder"
      },
      {
        name: "Jesse Robbins",
        role: "General Partner"
      }
    ],
    timeline: [
      {
        year: "2013",
        event: "Founded by Tom Drummond and James Lindenbaum."
      },
      {
        year: "2022",
        event: "$80M fund closed; Jesse Robbins joined as a full-time general partner."
      },
      {
        year: "2025",
        event: "Fifth flagship pre-seed fund and a second opportunity fund closed at a combined $180M+."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Blume Ventures",
    sectors: [
      "Fintech",
      "SaaS",
      "Healthcare",
      "Deep Tech",
      "Consumer"
    ],
    slug: "blume-ventures",
    website: 'https://blume.vc/',
    short: "Blume",
    founded: 2010,
    hq: "Mumbai, India",
    aum: "$250M (Fund IV, 2022)",
    thesis: "A market-thesis-driven firm bridging angel networks and institutional venture capital, addressing uniquely Indian problems while enabling global scale, with roughly two thirds of capital in domestic-heavy sectors and the remainder in India-built, globally scalable B2B businesses.",
    leadership: [
      {
        name: "Karthik Reddy",
        role: "Co-Founder", profileSlug: "karthik-reddy"
      },
      {
        name: "Sanjay Nath",
        role: "Co-Founder"
      },
      {
        name: "Ashish Fafadia",
        role: "Partner"
      }
    ],
    timeline: [
      {
        year: "2010",
        event: "Founded by Karthik Reddy and Sanjay Nath."
      },
      {
        year: "2011",
        event: "Fund I closed at $22M."
      },
      {
        year: "2015",
        event: "Fund II closed at $60M."
      },
      {
        year: "2018",
        event: "Fund III closed at $102M."
      },
      {
        year: "2022",
        event: "Fund IV closed at $250M, oversubscribed against a $200M target."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Kalaari Capital",
    sectors: [
      "SaaS",
      "Fintech",
      "Healthcare",
      "Consumer",
      "AI",
      "Deep Tech"
    ],
    slug: "kalaari-capital",
    website: "https://kalaari.com/",
    short: "Kalaari",
    founded: 2006,
    hq: "Bengaluru, India",
    aum: "$650M",
    thesis: "States that pedigree is not important, potential is. Backs visionary entrepreneurs, particularly first-time founders, building solutions that reshape how Indians live, work, consume and transact.",
    leadership: [
      {
        name: "Vani Kola",
        role: "Founder & Managing Director", profileSlug: "vani-kola"
      }
    ],
    timeline: [
      {
        year: "2006",
        event: "Founded as Indo-US Venture Partners by Vani Kola and Vinod Dham."
      },
      {
        year: "2012",
        event: "Rebranded to Kalaari Capital."
      },
      {
        year: "2020",
        event: "Fund IV launched, anchored by Reliance Industries."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Shunwei Capital",
    sectors: [
      "Consumer",
      "Deep Tech",
      "AI",
      "Mobility",
      "Fintech"
    ],
    slug: "shunwei-capital",
    website: 'https://shunwei.com/',
    short: "Shunwei",
    founded: 2011,
    hq: "Beijing, China",
    aum: "$3B (2023)",
    thesis: "Combines Lei Jun's entrepreneurial insight and the Xiaomi ecosystem with deep technology expertise, investing across internet, mobile and hardware companies at the forefront of China's digital economy and expanding into India and Indonesia.",
    leadership: [
      {
        name: "Lei Jun",
        role: "Founding Partner & Chairman", profileSlug: "lei-jun"
      },
      {
        name: "Tuck Lye Koh",
        role: "Co-Founder"
      }
    ],
    timeline: [
      {
        year: "2011",
        event: "Founded by Lei Jun and Tuck Lye Koh."
      },
      {
        year: "2023",
        event: "Assets under management reported at $3B."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Maya Capital",
    sectors: [
      "Sector-Agnostic",
      "Fintech",
      "Healthcare",
      "Consumer"
    ],
    slug: "maya-capital",
    website: "https://www.maya.capital/",
    short: "Maya",
    founded: 2018,
    hq: "São Paulo, Brazil",
    aum: "$100M (Fund II, 2022)",
    thesis: "The first pan-Latin American early-stage fund, built on leading the first venture round of the best teams in the region and bringing more than capital. Female-founded, with an explicit commitment to gender diversity across the portfolio.",
    leadership: [
      {
        name: "Lara Lemann",
        role: "Co-Founder & Managing Partner", profileSlug: "lara-lemann"
      },
      {
        name: "Monica Saggioro",
        role: "Co-Founder & Managing Partner"
      }
    ],
    timeline: [
      {
        year: "2018",
        event: "Co-founded by Lara Lemann and Monica Saggioro."
      },
      {
        year: "2022",
        event: "Fund II closed at $100M, tripling the firm's assets."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "NXTP Ventures",
    sectors: [
      "SaaS",
      "Fintech",
      "Marketplaces",
      "Logistics"
    ],
    slug: "nxtp-ventures",
    website: 'https://nxtp.vc/',
    short: "NXTP",
    founded: 2011,
    hq: "Buenos Aires, Argentina",
    aum: "$98M (Fund III, 2023)",
    thesis: "Latin America's B2B-focused early-stage fund, built on founder-aligned partnerships: showing up early and supporting go-to-market development, access to a global network of enterprise customers, recruiting and ongoing fundraising guidance.",
    leadership: [
      { name: "Ariel Arrieta", role: "Co-Founder & Managing Partner", profileSlug: "ariel-arrieta" }
    ],
    timeline: [
      {
        year: "2011",
        event: "NXTP founded in Buenos Aires."
      },
      {
        year: "2023",
        event: "Fund III closed at $98M, twice the size of Fund II, taking total assets past $250M."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "3one4 Capital",
    sectors: [
      "SaaS",
      "Fintech",
      "Consumer Internet",
      "Digital Health",
      "Climate"
    ],
    slug: "3one4-capital",
    website: 'https://3one4capital.com/',
    short: "3one4",
    founded: 2015,
    hq: "Bengaluru, India",
    aum: "₹4,400 crore (2026)",
    thesis: "Invests on the thesis that India is approaching a historic economic convergence driven by a large consumer install base, the India Stack, rising digital penetration and a deep technology talent pool, partnering with mission-oriented early-stage companies.",
    leadership: [
      {
        name: "Pranav Pai",
        role: "Co-Founder & Managing Partner", profileSlug: "pranav-pai"
      },
      {
        name: "Siddarth Pai",
        role: "Co-Founder & Partner"
      }
    ],
    timeline: [
      {
        year: "2015",
        event: "Founded by Pranav Pai and Siddarth Pai."
      },
      {
        year: "2023",
        event: "Fund IV closed at $200M, capped despite being oversubscribed to $250M."
      },
      {
        year: "2026",
        event: "Ten-year mark reported with 29 profitable exits and portfolio enterprise value above $9.4B."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "India Quotient",
    sectors: [
      "Enterprise Software",
      "Fintech",
      "Consumer",
      "SaaS"
    ],
    slug: "india-quotient",
    website: 'https://indiaquotient.in/',
    short: "India Quotient",
    founded: 2013,
    hq: "Mumbai, India",
    aum: "Not publicly disclosed",
    thesis: "Solve for real India, solve for the rest of the world. Backs teams building uniquely Indian products with network effects and capital-efficient models, favouring demos over decks and investing before a theme becomes sector consensus.",
    leadership: [
      {
        name: "Anand Lunia",
        role: "Co-Founder", profileSlug: "anand-lunia"
      },
      {
        name: "Madhukar Sinha",
        role: "Co-Founder"
      },
      {
        name: "Gagan Goyal",
        role: "Partner"
      },
      {
        name: "Kanika Agarrwal",
        role: "Partner"
      }
    ],
    timeline: [
      {
        year: "2013",
        event: "Founded by Anand Lunia and Madhukar Sinha."
      },
      {
        year: "2025",
        event: "Kanika Agarrwal joined as partner and Sahil Makkar as vice president."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "WaterBridge Ventures",
    sectors: [
      "Commerce",
      "SaaS",
      "Fintech",
      "Healthcare",
      "Consumer"
    ],
    slug: "waterbridge-ventures",
    website: "https://waterbridge.vc/",
    short: "WaterBridge",
    founded: 2017,
    hq: "Bengaluru, India",
    aum: "$150M (Fund II)",
    thesis: "A thesis-driven early-stage firm built for India on India's own form factors rather than as a replica of another market. Calls a theme before it becomes consensus, then finds the founder who can execute against it.",
    leadership: [
      {
        name: "Manish Kheterpal",
        role: "Co-Founder & Managing Partner", profileSlug: "manish-kheterpal"
      },
      {
        name: "Ashish Jain",
        role: "Co-Founder & Partner"
      },
      {
        name: "Anjali Sosale",
        role: "Partner"
      },
      {
        name: "Ravi Kaushik",
        role: "Partner"
      }
    ],
    timeline: [
      {
        year: "2017",
        event: "Founded by Manish Kheterpal, Ashish Jain and Anjali Sosale."
      },
      {
        year: "2020",
        event: "Fund I first close."
      },
      {
        year: "2021",
        event: "Fund II final close at $150M, 50% above its $100M target."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Prime Venture Partners",
    sectors: [
      "Fintech",
      "Edtech",
      "Healthcare",
      "Consumer Internet",
      "SaaS"
    ],
    slug: "prime-venture-partners",
    website: 'https://www.primevp.in/',
    short: "Prime",
    founded: 2011,
    hq: "Bengaluru, India",
    aum: "$100M (Fund V, 2025)",
    thesis: "Positions itself as the first institutional investor for early-stage startups, bringing operating experience alongside capital. Currently focused on vertical-specific, capital-efficient plays reflecting the maturity of India's digital infrastructure.",
    leadership: [
      {
        name: "Sanjay Swamy",
        role: "Managing Partner", profileSlug: "sanjay-swamy"
      },
      {
        name: "Shripati Acharya",
        role: "Managing Partner"
      },
      {
        name: "Amit Somani",
        role: "Managing Partner"
      }
    ],
    timeline: [
      {
        year: "2011",
        event: "Founded as AngelPrime by Sanjay Swamy and Shripati Acharya."
      },
      {
        year: "2015",
        event: "Amit Somani joined as partner; the firm rebranded to Prime Venture Partners."
      },
      {
        year: "2025",
        event: "Fund V launched at $100M."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "4DX Ventures",
    sectors: [
      "Fintech",
      "Ecommerce",
      "Healthcare",
      "B2B Software",
      "Logistics"
    ],
    slug: "4dx-ventures",
    website: 'https://4dxventures.com/',
    short: "4DX",
    founded: 2017,
    hq: "Brooklyn, NY",
    aum: "$60M (Fund II, 2021)",
    thesis: "A pan-African firm backing technology founders addressing underserved markets, combining global capital-market access with local operator proximity across Nigeria, South Africa, Egypt and Kenya, and expanding into Francophone Africa.",
    leadership: [
      {
        name: "Walter Baddoo",
        role: "Co-Founder & Managing Partner", profileSlug: "walter-baddoo"
      },
      {
        name: "Peter Orth",
        role: "Co-Founder & Managing Partner"
      },
      {
        name: "Daniel Marlo",
        role: "Managing Partner"
      }
    ],
    timeline: [
      {
        year: "2017",
        event: "Founded by Walter Baddoo and Peter Orth."
      },
      {
        year: "2021",
        event: "Fund II final close at $60M, surpassing its target."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Global Founders Capital",
    sectors: ["Fintech", "Software", "Health Tech", "Consumer Tech", "Marketplaces"],
    slug: "global-founders-capital",
    website: 'https://globalfounderscapital.com/',
    short: "GFC",
    founded: 2013,
    hq: "Berlin, Germany",
    aum: "€300M (Rocket Internet balance-sheet allocation, 2024)",
    thesis: "A global early-stage investor operating a borderless model on the view that category-defining founders emerge anywhere. Since restructuring in April 2024 as Rocket Internet's dedicated venture arm it has become more concentrated, favouring early-stage opportunities where it can be deeply operationally involved.",
    leadership: [
      {
        name: "Oliver Samwer",
        role: "Partner",
        profileSlug: "oliver-samwer"
      },
      {
        name: "Fabricio Pettena",
        role: "Partner"
      },
      {
        name: "Don Stalter",
        role: "Partner"
      },
      {
        name: "Cedric Asselman",
        role: "Partner"
      },
      {
        name: "David Sainteff",
        role: "Partner"
      }
    ],
    timeline: [
      {
        year: "2013",
        event: "Formed by Rocket Internet co-founders Oliver and Marc Samwer; two $1bn funds were subsequently raised and fully deployed."
      },
      {
        year: "2024",
        event: "Restructured in April as Rocket Internet's exclusive venture arm, investing only from its balance sheet, with a five-partner team."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Alumni Ventures",
    sectors: ["AI", "Fintech", "Healthcare", "Climate Technology", "Construction Tech", "Consumer Products", "Cybersecurity", "Edtech", "SaaS", "Web3"],
    slug: "alumni-ventures",
    website: "https://www.av.vc/",
    short: "Alumni Ventures",
    founded: 2014,
    hq: "Manchester, NH",
    aum: "$1.5B (2025)",
    thesis: "A network-powered venture platform offering diversified venture portfolios to accredited individuals and institutions. Strictly a co-investor - it does not lead rounds, set terms or take board seats - instead investing alongside established leads, drawing on a community of over 850,000 members and eighteen university-linked funds.",
    leadership: [
      {
        name: "Mike Collins",
        role: "Founder & CEO",
        profileSlug: "mike-collins"
      }
    ],
    timeline: [
      {
        year: "2014",
        event: "Founded by Mike Collins and Luke Antal; Collins raised $1.5M from Dartmouth alumni for the first fund, Green D Ventures."
      },
      {
        year: "2022",
        event: "Ranked the most active venture firm in the US by PitchBook, repeated in 2023."
      },
      {
        year: "2024",
        event: "Named a Top 20 Venture Firm by CB Insights."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Plug and Play Ventures",
    sectors: ["Fintech", "Insurtech", "Health", "Mobility", "Smart Cities", "Enterprise AI", "Agtech", "Sustainability", "IoT"],
    slug: "plug-and-play-ventures",
    website: 'https://www.plugandplaytechcenter.com/',
    short: "Plug and Play",
    founded: 2006,
    hq: "Sunnyvale, CA",
    aum: "$500M (2023)",
    thesis: "An open-innovation platform connecting startups with more than 550 corporate partners that have real business problems to solve, creating a flywheel of pilots, proofs of concept, enterprise customers and follow-on capital. Startups are assessed on product differentiation, founder quality and strategic fit with those partners.",
    leadership: [
      {
        name: "Saeed Amidi",
        role: "Founder & CEO",
        profileSlug: "saeed-amidi"
      }
    ],
    timeline: [
      {
        year: "1988",
        event: "The Amidi Group acquired 165 University Avenue in Palo Alto, later renting space to early tenants including Google and PayPal."
      },
      {
        year: "2006",
        event: "Plug and Play Tech Center founded."
      },
      {
        year: "2020",
        event: "Ranked the world's most active startup accelerator by CB Insights, repeated through 2022."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Construct Capital",
    sectors: ["Manufacturing", "Logistics", "Defense", "Energy", "Transportation", "Critical Infrastructure"],
    slug: "construct-capital",
    website: "https://www.constructcap.com/",
    short: "Construct",
    founded: 2020,
    hq: "Washington, DC",
    aum: "$300M (Fund III, 2025)",
    thesis: "A thesis-driven fund focused on transforming America's foundational industries - manufacturing, logistics, transportation, energy, defence and critical infrastructure - into tech-first industrials that operate more like software companies, with higher R&D spend and asset-light models.",
    leadership: [
      {
        name: "Dayna Grayson",
        role: "Co-Founder & Managing Partner",
        profileSlug: "dayna-grayson"
      },
      {
        name: "Rachel Holt",
        role: "Co-Founder & Managing Partner"
      }
    ],
    timeline: [
      {
        year: "2020",
        event: "Founded by Dayna Grayson and Rachel Holt."
      },
      {
        year: "2025",
        event: "Closed an oversubscribed third fund at $300M, taking total assets past $750M."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "FJ Labs",
    sectors: ["Marketplaces"],
    slug: "fj-labs",
    website: 'https://fjlabs.com/',
    short: "FJ Labs",
    founded: 2015,
    hq: "New York, NY",
    aum: "Not publicly disclosed",
    thesis: "A stage-agnostic firm investing exclusively in marketplace and network-effect businesses, backing founders who combine vision with demonstrated grit. The thesis comes directly from co-founder Fabrice Grinda's experience scaling OLX into one of the world's largest classifieds marketplaces.",
    leadership: [
      {
        name: "Fabrice Grinda",
        role: "Co-Founder",
        profileSlug: "fabrice-grinda"
      },
      {
        name: "Jose Marin",
        role: "Co-Founder"
      }
    ],
    timeline: [
      {
        year: "2004",
        event: "Fabrice Grinda began angel investing, well before the firm was formalised."
      },
      {
        year: "2015",
        event: "FJ Labs formally founded by Fabrice Grinda and Jose Marin."
      },
      {
        year: "2026",
        event: "Passed 900 total investments with more than 30 unicorn exits."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Inspired Capital",
    sectors: ["Financial Technology", "Healthcare", "Artificial Intelligence", "Workforce and Education", "Industrial Manufacturing", "Climate", "Deep Tech"],
    slug: "inspired-capital",
    website: "https://www.inspiredcapital.com/",
    short: "Inspired",
    founded: 2019,
    hq: "New York, NY",
    aum: "$330M (Inspired III)",
    thesis: "A generalist, operator-led firm backing entrepreneurs tackling the hardest problems, organised around three themes: digitisation of the industrial economy, financial equilibrium in a volatile society, and ensuring AI unlocks rather than inhibits human potential. Leads pre-seed through Series A with cheques of $500K to $20M.",
    leadership: [
      {
        name: "Alexa von Tobel",
        role: "Founder & Managing Partner",
        profileSlug: "alexa-von-tobel"
      },
      {
        name: "Penny Pritzker",
        role: "Co-Founder"
      }
    ],
    timeline: [
      {
        year: "2019",
        event: "Founded by Alexa von Tobel and Penny Pritzker."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Hyperplane",
    sectors: ["Machine Intelligence", "Data Science", "Distributed Systems", "Automation", "Cloud Computing", "Robotics", "Sensor Technology"],
    slug: "hyperplane",
    website: "https://www.hyperplane.vc/",
    short: "Hyperplane",
    founded: 2014,
    hq: "Boston, MA",
    aum: "Not publicly disclosed",
    thesis: "A seed-stage firm backing technically intense founders combining machine intelligence and sensor technology to solve physical-world problems in regulated and industrial sectors - categories that are rarely obvious deals at the time but become category-creators in AI infrastructure for complex systems.",
    leadership: [
      {
        name: "Vivjan Myrto",
        role: "Founder & Managing Partner",
        profileSlug: "vivjan-myrto"
      }
    ],
    timeline: [
      {
        year: "2014",
        event: "Founded by Vivjan Myrto in Boston."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Boldstart Ventures",
    sectors: ["Cybersecurity", "AI Infrastructure", "Physical AI", "Developer-First Infrastructure", "Cloud", "SaaS"],
    slug: "boldstart-ventures",
    website: "https://boldstart.vc/",
    short: "Boldstart",
    founded: 2010,
    hq: "New York, NY",
    aum: "$250M (Fund VII, 2025)",
    thesis: "Pioneered inception investing - partnering with technical founders before the first line of code, before incorporation and before revenue. Backs teams building the autonomous enterprise through AI-native infrastructure, security and applications, and deliberately avoids consumer apps, gaming, hardware-only plays and non-technical founding teams.",
    leadership: [
      {
        name: "Ed Sim",
        role: "Founder",
        profileSlug: "ed-sim"
      }
    ],
    timeline: [
      {
        year: "2010",
        event: "Founded by Ed Sim with an initial $1M fund."
      },
      {
        year: "2023",
        event: "Ed Sim ranked first on Business Insider's Seed 100, repeated in 2024."
      },
      {
        year: "2025",
        event: "Fund VII closed at $250M, taking total assets to roughly $1.1B."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Operator Collective",
    sectors: ["Enterprise Software", "B2B"],
    slug: "operator-collective",
    website: "https://www.operatorcollective.com/",
    short: "Operator Collective",
    founded: 2019,
    hq: "San Francisco, CA",
    aum: "$92M (Fund II, 2022)",
    thesis: "Built on the belief that companies succeed because of the people who build them. Connects founders directly with more than 200 enterprise operators - executives from companies including Salesforce, Stripe, Zoom and Cloudflare - who participate as active, invested limited partners rather than passive capital.",
    leadership: [
      {
        name: "Mallun Yen",
        role: "Founder, CEO & General Partner",
        profileSlug: "mallun-yen"
      }
    ],
    timeline: [
      {
        year: "2019",
        event: "Debuted with a $45M fund, founded by Mallun Yen."
      },
      {
        year: "2022",
        event: "Fund II closed at over $92M."
      }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Correlation Ventures",
    sectors: ["Biotech", "Healthcare", "Fintech", "Consumer Products", "Media", "Food-Agtech", "Proptech", "Enterprise Software", "Developer Tools"],
    slug: "correlation-ventures",
    website: 'https://correlationvc.com/',
    short: "Correlation",
    founded: 2009,
    hq: "San Diego, CA",
    aum: "$130M (Fund III, 2023)",
    thesis: "A data-driven co-investor using proprietary predictive analytics built on tens of thousands of historical venture financings to reach investment decisions unusually quickly, often within two weeks. Never leads rounds or takes board seats, aiming instead to reduce friction for founders and lead investors alike.",
    leadership: [
      {
        name: "David Coats",
        role: "Managing Director & Co-Founder",
        profileSlug: "david-coats"
      },
      {
        name: "Trevor Kienzle",
        role: "Managing Director & Co-Founder"
      }
    ],
    timeline: [
      {
        year: "2009",
        event: "Correlation Ventures founded."
      },
      {
        year: "2023",
        event: "Third fund closed in June at $130M, alongside the promotions of Wesley Barrow and Moiz Saifee."
      }
    ],
    holdings: []
  },
  {
    name: "Caffeinated Capital",
    short: "Caffeinated Capital",
    slug: "caffeinated-capital",
    founded: 2008,
    hq: "San Francisco, CA",
    aum: "$400M target, Fund V, announced January 2025 ($160M secured at announcement)",
    website: "https://www.caffeinated.com",
    rank: null,
    sectors: [
      "Enterprise Applications",
      "Fintech",
      "Deep Tech",
      "AI",
      "Proptech",
      "Insurtech",
      "Life Sciences",
      "Healthcare",
      "Climate",
      "Defense"
    ],
    thesis: "A thesis- and stage-agnostic firm that partners with founders at the inception stage and invests throughout the life of the company, led by solo GP Raymond Tonsing. Known for being first money into breakout companies before consensus forms, with particular recent conviction in defense technology and hard engineering.",
    signatureExit: "Affirm and Opendoor, both of which the firm's own team page states Raymond Tonsing backed from seed through to IPO.",
    leadership: [
      {
        name: "Raymond Tonsing",
        role: "Founder & Partner",
        profileSlug: "raymond-tonsing"
      },
      {
        name: "Varun Gupta",
        role: "Partner"
      },
      {
        name: "Matthew Volosin",
        role: "Partner"
      }
    ],
    timeline: [
      {
        year: "2008",
        event: "Raymond Tonsing founds Caffeinated Capital as one of the first solo-GP venture funds."
      },
      {
        year: "2025",
        event: "Fund V announced in January targeting $400M, with $160M already secured."
      }
    ],
    holdings: []
  },
  {
    name: "Forum Ventures",
    short: "Forum Ventures",
    slug: "forum-ventures",
    founded: 2014,
    hq: "New York, NY",
    aum: "$100M+ across three investment vehicles",
    website: "https://www.forumvc.com",
    rank: null,
    sectors: [
      "B2B Software",
      "Vertical SaaS",
      "Fintech",
      "Health Tech",
      "Future of Work",
      "Supply Chain",
      "Ecommerce Infrastructure",
      "AI",
      "Frontier Technologies"
    ],
    thesis: "A founder-first fund, accelerator and AI venture studio committed to the B2B SaaS journey from zero to one. Operates three engagement models: an accelerator with small cohorts, an AI-focused venture studio building companies from scratch alongside founders, and a traditional pre-seed and seed fund.",
    signatureExit: null,
    leadership: [
      {
        name: "Michael Cardamone",
        role: "Managing Partner & CEO",
        profileSlug: "michael-cardamone"
      },
      {
        name: "Jonah Midanik",
        role: "General Partner"
      }
    ],
    timeline: [
      {
        year: "2014",
        event: "Founded as Acceleprise by Michael Cardamone, later rebranded to Forum Ventures."
      }
    ],
    holdings: []
  },
  {
    name: "HOF Capital",
    short: "HOF Capital",
    slug: "hof-capital",
    founded: 2016,
    hq: "New York, NY",
    aum: "Not publicly disclosed",
    website: "https://hofcapital.com",
    rank: null,
    sectors: [
      "Artificial Intelligence",
      "Fintech",
      "Biotech",
      "Defense Tech",
      "Consumer Tech",
      "Climate",
      "Cybersecurity",
      "Enterprise Software",
      "Robotics",
      "Semiconductors"
    ],
    thesis: "Operates under a long-term thesis it calls 'March to Abundance' - backing ambitious founders working on fundamental technology and business-model innovations rather than safe ventures built on proven technology. Positions itself as an idea-to-IPO investor, drawing on a network of over 200 families and organizations across dozens of countries to facilitate cross-border deals.",
    signatureExit: null,
    leadership: [
      { name: "Hisham Elhaddad", role: "Managing Partner", profileSlug: "hisham-elhaddad" },
      { name: "Onsi Sawiris", role: "Partner", profileSlug: "onsi-sawiris" },
      {
        name: "Fady Yacoub",
        role: "Partner",
        profileSlug: "fady-yacoub"
      }
    ],
    timeline: [
      {
        year: "2016",
        event: "Founded by Fady Yacoub, Hisham Elhaddad and Onsi Sawiris."
      },
      {
        year: "2022",
        event: "Raised a $300M fund dedicated to a specific thematic focus."
      }
    ],
    holdings: []
  },
  {
    name: "Fifty Years",
    short: "Fifty Years",
    slug: "fifty-years",
    founded: 2016,
    hq: "San Francisco, CA",
    aum: "$90M fund raised in 2021, following an initial $5M first fund",
    website: "https://fiftyyears.com",
    rank: null,
    sectors: [
      "Deep Tech",
      "Climate",
      "Synthetic Biology",
      "Food & Agriculture",
      "Aerospace",
      "Health",
      "Advanced Manufacturing"
    ],
    thesis: "Backs mission-driven, often scientist- and PhD-founders using deep technology to tackle civilization-scale problems - climate change, disease, malnutrition and global connectivity - while explicitly aiming for large financial returns. Named for Winston Churchill's 1931 essay 'Fifty Years Hence', and runs a company-builder programme helping scientists and engineers become founders.",
    signatureExit: null,
    leadership: [
      {
        name: "Ela Madej",
        role: "Founding Partner"
      },
      {
        name: "Seth Bannon",
        role: "Founding Partner",
        profileSlug: "seth-bannon"
      }
    ],
    timeline: [
      {
        year: "2016",
        event: "Founded by Seth Bannon and Ela Madej."
      },
      {
        year: "2021",
        event: "$90M fund raised, backed by dozens of unicorn founders."
      }
    ],
    holdings: []
  },
  {
    name: "Kapor Capital",
    short: "Kapor Capital",
    slug: "kapor-capital",
    founded: 2011,
    hq: "Oakland, CA",
    aum: "$224M (as of 2023)",
    website: "https://www.kaporcapital.com",
    rank: null,
    sectors: [
      "Social-Impact Software",
      "Edtech",
      "Health Tech",
      "Fintech",
      "Future of Work"
    ],
    thesis: "A 'gap-closing' investment thesis: backing founders explicitly building companies that close gaps of access and opportunity for low-income communities and communities of colour, on the belief that this can be pursued as core business strategy rather than philanthropy and can deliver strong financial returns without a concessionary trade-off.",
    signatureExit: null,
    leadership: [
      {
        name: "Brian Dixon",
        role: "Managing Partner"
      },
      {
        name: "Batul Joffrey",
        role: "Partner"
      },
      {
        name: "Mitch Kapor",
        role: "Co-Founder",
        profileSlug: "mitch-kapor"
      }
    ],
    timeline: [
      {
        year: "2011",
        event: "Founded by Mitch Kapor and Freada Kapor Klein; invests exclusively in impact startups."
      },
      {
        year: "2015",
        event: "Brian Dixon becomes the youngest Black partner at Kapor Capital and in Silicon Valley."
      },
      {
        year: "2021",
        event: "Brian Dixon and Ulili Onovakpuri become co-managing partners."
      },
      {
        year: "2022",
        event: "Mitch Kapor and Freada Kapor Klein step back from day-to-day operations."
      }
    ],
    holdings: []
  },
  {
    name: "Compound",
    short: "Compound",
    slug: "compound",
    founded: 2016,
    hq: "New York, NY",
    aum: "$85M",
    website: "https://www.compound.vc",
    rank: null,
    sectors: [
      "AI/ML",
      "Robotics",
      "Biotech",
      "Crypto",
      "Energy",
      "Deep Tech"
    ],
    thesis: "A thesis-driven, research-centric firm that generates original investment theses through research and publication rather than following market trends, then invests in founders building toward those futures. Focuses on contrarian, white-space startups tackling scientific and technical breakthroughs, seeking technical founders with evidence of original research.",
    signatureExit: null,
    leadership: [
      {
        name: "Michael Dempsey",
        role: "Managing Partner",
        profileSlug: "michael-dempsey"
      },
      {
        name: "David Hirsch",
        role: "General Partner"
      },
      {
        name: "Tara Eckert",
        role: "CFO"
      }
    ],
    timeline: [
      {
        year: "2016",
        event: "Michael Dempsey joins as the firm relaunches under the Compound name, having previously operated as Metamorphic Ventures."
      }
    ],
    holdings: []
  },
  {
    name: "Ulu Ventures",
    short: "Ulu Ventures",
    slug: "ulu-ventures",
    founded: 2008,
    hq: "Palo Alto, CA",
    aum: "$208M Fund IV close, February 2025, bringing total firm AUM to approximately $400M",
    website: "https://uluventures.com",
    rank: null,
    sectors: [
      "Enterprise Software",
      "Fintech",
      "Consumer",
      "Health",
      "Sustainability",
      "Edtech",
      "Digital Health"
    ],
    thesis: "A quantitative, bias-minimising approach to seed-stage investing built on the belief that diversity is profitable - using a disciplined, repeatable decision process grounded in structured judgement and probabilistic reasoning to analyse risk-reward trade-offs. More than three-quarters of the entrepreneurs across its funds are women, minority, underrepresented minority and/or immigrant founders.",
    signatureExit: null,
    leadership: [
      {
        name: "Miriam Rivera",
        role: "Cofounder & Managing Director",
        profileSlug: "miriam-rivera"
      },
      {
        name: "Clint Korver",
        role: "Cofounder & Managing Director"
      },
      {
        name: "Steve Reale",
        role: "General Partner & CFO"
      }
    ],
    timeline: [
      {
        year: "2008",
        event: "Founded in Palo Alto by Miriam Rivera and Clint Korver."
      },
      {
        year: "2022",
        event: "Kathy Chen and Nancy Torres promoted to partner."
      },
      {
        year: "2025",
        event: "Fund IV closes in February at $208M, more than 50% larger than Fund III."
      }
    ],
    holdings: []
  },
  {
    name: "Thayer Ventures",
    short: "Thayer Ventures",
    slug: "thayer-ventures",
    founded: 2008,
    hq: "San Francisco, CA",
    aum: "$80M Fund III close, 2020, with over $300M deployed across four active vehicles",
    website: "https://www.thayerventures.com",
    rank: null,
    sectors: [
      "Travel",
      "Transportation",
      "Hospitality",
      "Mobility",
      "Proptech"
    ],
    thesis: "A US venture platform focused exclusively on technology innovation across the global travel, transportation and hospitality industries. Prioritises early-stage B2B companies while selectively pursuing seed, later-stage and B2C deals, and will lead rounds. Differentiates through a network of industry advisors and LPs spanning founders and former chief executives across the travel sector.",
    signatureExit: null,
    leadership: [
      {
        name: "Chris Hemmeter",
        role: "Co-Founder & Managing Partner",
        profileSlug: "chris-hemmeter"
      },
      {
        name: "Mark Farrell",
        role: "Co-Founder"
      },
      {
        name: "Tyler Carrico",
        role: "Managing Partner"
      }
    ],
    timeline: [
      {
        year: "2008",
        event: "Firm founded; its own site dates its travel technology investing to this year."
      },
      {
        year: "2020",
        event: "Fund III closes at $80M."
      },
      {
        year: "2024",
        event: "Combines with Derive Ventures in September to form Thayer Investment Partners."
      }
    ],
    holdings: []
  },
  {
    name: "Serena Ventures",
    short: "Serena Ventures",
    slug: "serena-ventures",
    founded: 2014,
    hq: "San Francisco, CA",
    aum: "$111M debut institutional fund, announced 2022",
    website: "https://www.serenaventures.com",
    rank: null,
    sectors: [
      "Fintech",
      "Ecommerce",
      "Health",
      "Consumer",
      "Enterprise Software",
      "Media",
      "Web3"
    ],
    thesis: "Treats the systematic underfunding of women and founders of colour as a market inefficiency rather than a charitable cause, with the large majority of the portfolio founded by women and people of colour. Leverages networks in elite sport, entertainment and communities of colour to source deal flow conventional firms do not reach, primarily co-leading or following strong lead investors.",
    signatureExit: null,
    leadership: [
      {
        name: "Serena Williams",
        role: "Managing Partner",
        profileSlug: "serena-williams"
      },
      {
        name: "Beth Ferreira",
        role: "General Partner"
      },
      {
        name: "Sharla Grass",
        role: "Partner"
      }
    ],
    timeline: [
      {
        year: "2014",
        event: "Serena Williams begins angel investing, later formalised as Serena Ventures."
      },
      {
        year: "2022",
        event: "$111M inaugural institutional fund announced."
      }
    ],
    holdings: []
  },
  {
    slug: "flybridge",
    name: "Flybridge",
    short: "Flybridge",
    website: "https://www.flybridge.com",
    founded: 2002,
    hq: "Boston, MA",
    aum: "$1B (assets under management, per flybridge.com homepage)",
    sectors: ["AI", "Developer Tools", "Enterprise Software", "SaaS", "Fintech"],
    thesis: "Flybridge is an early-stage venture firm investing at pre-seed and seed. Its stated focus areas are AI infrastructure and developer platforms, agentic business applications, and native AI for human potential. The firm states check sizes of up to $250K at pre-seed through its Next Wave funds, $1M-$3M at seed, and $10M+ post-Series A, and says it keeps funds around $100M. It operates from Boston and New York.",
    leadership: [
      { name: "Chip Hazard", role: "Co-founder & General Partner", profileSlug: "chip-hazard" },
      { name: "Jeff Bussgang", role: "Co-founder & General Partner", profileSlug: "jeff-bussgang" },
      { name: "Jesse Middleton", role: "General Partner", profileSlug: "jesse-middleton" },
      { name: "Dorothy Chang", role: "Venture Partner" },
      { name: "Anna Palmer", role: "Venture Partner" },
    ],
    timeline: [
      { year: "2002", event: "Chip Hazard and Jeff Bussgang co-found Flybridge Capital Partners in Boston in May 2002." },
      { year: "2009", event: "Chip Hazard joins MongoDB's board of directors in October 2009, representing Flybridge." },
      { year: "2016", event: "WeWork Labs co-founder Jesse Middleton joins as the firm's fourth General Partner in June 2016, establishing a New York presence." },
      { year: "2017", event: "Flybridge launches XFactor Ventures, a $3M fund investing $100K checks in startups with at least one female founder." },
      { year: "2017", event: "MongoDB, a Flybridge portfolio company, goes public on Nasdaq." },
    ],
    holdings: [],
    signatureExit: "MongoDB (IPO, 2017)"
  },
  {
    slug: "accomplice",
    name: "Accomplice",
    short: "Accomplice",
    website: "https://accomplice.co",
    founded: 2015,
    hq: "Boston, MA",
    aum: "$405M (final fund, closed 2022 per Axios; firm-wide AUM not publicly disclosed)",
    sectors: ["Cybersecurity", "Enterprise Software", "Consumer", "Fintech", "Crypto"],
    thesis: "Accomplice is a venture firm that emerged in 2015 when Atlas Venture's technology practice separated from its life sciences team and rebranded. It invests with high conviction in concentrated, patient positions and describes itself as a venture firm and contemporary family office. The firm promotes a federated model in which it acts as an anchor LP in independent funds run by former colleagues, including Archetype, Vinyl, Vibe and Wolfhead. It co-founded the Spearhead operator-angel program with Naval Ravikant.",
    leadership: [
      { name: "Jeff Fagnan", role: "Founding Partner", profileSlug: "jeff-fagnan" },
      { name: "Ryan Moore", role: "Founding Partner", profileSlug: "ryan-moore" },
      { name: "Sarah A. Downey", role: "Operating Partner", profileSlug: "sarah-downey" },
    ],
    timeline: [
      { year: "2015", event: "Atlas Venture's technology group splits from the life sciences team and rebrands as Accomplice, with the name selected from roughly 20,000 crowdsourced submissions." },
      { year: "2020", event: "DraftKings, in which co-founder Ryan Moore was the first and for a time only institutional investor, becomes publicly traded via SPAC." },
      { year: "2022", event: "Accomplice closes $405M for what it described as its last fund, with roughly half of its deals expected to be sourced through Spearhead leads." },
    ],
    holdings: [],
    signatureExit: "DraftKings (went public via SPAC merger, 2020)"
  },
  {
    slug: "quiet-capital",
    name: "Quiet Capital",
    short: "Quiet",
    website: "https://quiet.com",
    founded: 2017,
    hq: "San Francisco, CA",
    aum: "Not publicly disclosed (Quiet Venture III had raised $377M per a November 2024 SEC filing, reported by Reuters)",
    sectors: ["AI", "Fintech", "Crypto", "Healthcare", "Deep Tech"],
    thesis: "Quiet Capital is a venture firm that backs founders at the earliest stages, describing its approach on its site as investing from day zero. Its portfolio page groups companies into AI, consumer, crypto, deeptech, enterprise, fintech, healthcare and marketplace categories, and lists Airtable, Rippling, Reddit, SpaceX, Flexport, Gusto, Databricks and Anduril. The firm's website publishes no team roster, headquarters address, founding date or fund figures.",
    leadership: [],
    timeline: [
      { year: "2017", event: "Quiet Capital founded by Lee Linden, per Reuters." },
      { year: "2021", event: "Firm raised nearly $479M toward a $500M fund target, per Reuters." },
      { year: "2024", event: "SEC filing shows $377,992,500 raised toward third fund, Quiet Venture III." },
    ],
    holdings: [],
    signatureExit: "Reddit (IPO, 2024)"
  },
  {
    slug: "ludlow-ventures",
    name: "Ludlow Ventures",
    short: "Ludlow",
    website: "https://www.ludlowventures.com",
    founded: 2010,
    hq: "Detroit, MI",
    aum: "$250M (assets under management; most recent fund, Fund V, is $50M - TechCrunch, June 2024)",
    sectors: ["Consumer", "Enterprise Software", "Mobility"],
    thesis: "Ludlow Ventures is an early-stage venture firm investing at pre-seed and seed. The firm states on its site that it does not chase themes and selects investments primarily on the people behind them. TechCrunch reported in 2024 that Ludlow invests in roughly 25 companies per fund. Portfolio companies include Honey, StockX, Deepgram, Product Hunt, Notarize, Density, Backbone and Boulevard.",
    leadership: [
      { name: "Jonathon Triest", role: "Partner", profileSlug: "jonathon-triest" },
      { name: "Brett deMarrais", role: "Partner", profileSlug: "brett-demarrais" },
    ],
    timeline: [
      { year: "2010", event: "Ludlow Ventures established, per the firm's site." },
      { year: "2012", event: "Brett deMarrais joins the firm." },
      { year: "2017", event: "Second fund closed at $45M." },
      { year: "2019", event: "Third fund closed at $45M." },
      { year: "2020", event: "Portfolio company Honey acquired by PayPal for $4B." },
      { year: "2021", event: "Fourth fund closed at $65M in capital commitments." },
      { year: "2024", event: "TechCrunch reports $250M in assets under management and a $50M Fund V." },
    ],
    holdings: [],
    signatureExit: "Honey (acquired by PayPal, 2020)"
  },
  {
    slug: "bling-capital",
    name: "Bling Capital",
    short: "Bling",
    website: "https://www.blingcap.com",
    founded: 2018,
    hq: "Miami Beach, FL",
    aum: "$750M (under management as reported Nov 2024; Fund IV closed at $270M)",
    sectors: ["Consumer", "Fintech", "SaaS", "AI", "Marketplaces"],
    thesis: "Bling Capital is an early-stage venture fund investing at pre-seed and seed, with check sizes the firm states as $1M to $5M. Its stated focus is helping founders reach product-market fit, supported by a Product Council of more than 100 operators. Ben Ling founded the firm in 2018 after serving as a general partner at Khosla Ventures and holding product and partnership roles at Google, YouTube and Facebook. The firm closed its fourth fund at $270M in 2024, with about half earmarked for follow-on investments.",
    leadership: [
      { name: "Ben Ling", role: "General Partner", profileSlug: "ben-ling" },
      { name: "Kyle Lui", role: "General Partner", profileSlug: "kyle-lui" },
      { name: "Eric Theis", role: "Partner", profileSlug: "eric-theis" },
      { name: "Charlie Pinto", role: "Operating Partner", profileSlug: "charlie-pinto" },
      { name: "Ash Panchang", role: "Senior Associate" },
    ],
    timeline: [
      { year: "2018", event: "Ben Ling founds Bling Capital." },
      { year: "2022", event: "Kyle Lui leaves DCM to join Bling Capital as its second General Partner." },
      { year: "2024", event: "Firm closes $270M Fund IV." },
    ],
    holdings: [],
    signatureExit: "Weekend Health (acquired by WW International, 2023)"
  },
  {
    slug: "bowery-capital",
    name: "Bowery Capital",
    short: "Bowery",
    website: "https://bowerycap.com",
    founded: 2013,
    hq: "New York, NY",
    aum: "Not publicly disclosed (Fund III closed at $70M in 2021; debut fund closed at $33M in 2013)",
    sectors: ["Enterprise Software", "SaaS", "Marketplaces"],
    thesis: "Bowery Capital is an early-stage venture firm investing at pre-seed and seed in B2B software and marketplace companies, and states a preference for leading rounds. Michael Brown founded the firm in New York in 2013; its debut fund closed at $33M and its third fund at $70M in 2021. The firm describes its funds as deliberately modest in size and pairs capital with an in-house Acceleration Team covering growth, talent and business development. It remains actively investing, with portfolio exits recorded through 2026.",
    leadership: [
      { name: "Michael Brown", role: "General Partner and Founder", profileSlug: "michael-brown" },
      { name: "Loren Straub", role: "General Partner", profileSlug: "loren-straub" },
      { name: "Shashank Saxena", role: "Venture Partner", profileSlug: "shashank-saxena" },
      { name: "Bersabel Tadesse", role: "Venture Partner", profileSlug: "bersabel-tadesse" },
      { name: "Stuart Wall", role: "Venture Partner" },
      { name: "Patrick McGovern", role: "Principal", profileSlug: "patrick-mcgovern" },
      { name: "Ellen LoBiondo", role: "Director of Growth" },
    ],
    timeline: [
      { year: "2013", event: "Michael Brown founds Bowery Capital in New York; debut fund closes with $33M in commitments." },
      { year: "2021", event: "Firm announces $70M Fund III and promotes Loren Straub to General Partner." },
      { year: "2021", event: "Portfolio company VNDLY acquired by Workday." },
      { year: "2025", event: "Portfolio companies mParticle (acquired by Rokt), Select Star (acquired by Snowflake) and ActionIQ (acquired by Uniphore) exit." },
      { year: "2026", event: "Portfolio company Leapfin acquired by Airwallex." },
    ],
    holdings: [],
    signatureExit: "VNDLY (acquired by Workday, 2021)"
  },
  {
    slug: "s28-capital",
    name: "S28 Capital",
    short: "S28",
    website: "https://www.s28capital.com",
    founded: 2016,
    hq: "San Francisco, CA",
    aum: "$170M (Spectrum 28 debut fund, 2016)",
    sectors: ["Enterprise Software", "SaaS", "Developer Tools", "Cybersecurity", "Fintech"],
    thesis: "S28 Capital is a San Francisco venture fund backing early-stage software companies. The team describes itself as operators and entrepreneurs who have hired thousands of employees, raised over $200M in venture capital and created over $2B in enterprise value. Through a program it calls Filament, the firm works with founders from the idea stage onward on recruiting, product-market fit and go-to-market. It launched in 2016 under the name Spectrum 28 with a $170M debut fund.",
    leadership: [
      { name: "Kent Ho", role: "Founder & General Partner", profileSlug: "kent-ho" },
      { name: "Shvet Jain", role: "General Partner", profileSlug: "shvet-jain" },
      { name: "Andrew Miklas", role: "Venture Partner", profileSlug: "andrew-miklas" },
      { name: "Justin Wong", role: "Partner" },
      { name: "Victor Pang", role: "Partner", profileSlug: "victor-pang" },
    ],
    timeline: [
      { year: "2016", event: "Launched as Spectrum 28 with a $170M debut venture fund, co-founded by Kent Ho and Lyon Wong." },
    ],
    holdings: [],
    signatureExit: null
  },
  {
    slug: "cantos",
    name: "Cantos",
    short: "Cantos",
    website: "https://cantos.vc",
    founded: 2016,
    hq: "San Francisco, CA",
    aum: "$70M (Fund IV, 2026)",
    sectors: ["Deep Tech", "Defense Tech", "Climate", "Biotech", "Space"],
    thesis: "Cantos is a pre-seed and seed venture firm investing in companies applying technology to the physical world. The firm organizes its focus around three stated pillars: abundance, resilience of critical infrastructure and ecosystems, and U.S. competitiveness in advanced technologies. Its portfolio spans defense and aerospace, nuclear and other energy, advanced materials and manufacturing, robotics, satellites and biotech. Fund IV writes checks of roughly $1.5M to $4M across about 22 planned investments.",
    leadership: [
      { name: "Ian Rountree", role: "General Partner", profileSlug: "ian-rountree" },
      { name: "Grant Gregory", role: "Partner", profileSlug: "grant-gregory" },
      { name: "Amee Kapadia", role: "Principal", profileSlug: "amee-kapadia" },
      { name: "Sofia Garcia", role: "CFO" },
    ],
    timeline: [
      { year: "2016", event: "Ian Rountree founds Cantos." },
      { year: "2021", event: "Amee Kapadia joins the firm." },
      { year: "2022", event: "Announces Cantos 3, a $50M fund for pre-seed and seed investments." },
      { year: "2024", event: "Grant Gregory joins as Partner from a16z's American Dynamism team." },
      { year: "2026", event: "Closes Fund IV at $70M." },
    ],
    holdings: [],
    signatureExit: null
  },
  {
    slug: "fifth-wall",
    name: "Fifth Wall",
    short: "Fifth Wall",
    website: "https://fifthwall.com",
    founded: 2016,
    hq: "Los Angeles, CA",
    aum: "~$3B (commitments and capital under management, per fifthwall.com, 2026)",
    sectors: ["Proptech", "Real Estate", "Climate", "Fintech"],
    thesis: "Fifth Wall invests in technology for the built environment, spanning proptech and climate technology for real estate. Its limited partner base consists largely of real estate owner-operators - approximately 116 strategic LPs across more than 20 countries - who are also potential customers for portfolio companies. The firm has raised separate proptech funds and a dedicated climate fund, and in 2025 was investing through REACT, a vehicle combining proptech and climate opportunities. Its Fund III was structured as a hybrid vehicle covering both early-stage and late-stage investments.",
    leadership: [
      { name: "Brendan Wallace", role: "Chief Executive Officer & Chief Investment Officer", profileSlug: "brendan-wallace" },
      { name: "Brad Greiwe", role: "Co-Founder & Chairman", profileSlug: "brad-greiwe" },
      { name: "Luke Harris", role: "General Counsel & Chief Operating Officer" },
      { name: "Eric Lee", role: "Chief Financial Officer" },
      { name: "Adam Lieberman", role: "Chief Technology Officer" },
      { name: "Elise Szwajkowski", role: "Chief Marketing Officer" },
    ],
    timeline: [
      { year: "2016", event: "Fifth Wall founded by Brendan Wallace and Brad Greiwe." },
      { year: "2017", event: "Fund I closed at $212M in May 2017." },
      { year: "2019", event: "Fund II closed at $503M, announced July 2019 as the largest real estate venture capital fund raised to date." },
      { year: "2021", event: "SmartRent completed its business combination with Fifth Wall Acquisition Corp. I and began trading on the NYSE in August 2021." },
      { year: "2022", event: "European Real Estate Technology Fund closed at €140M in February 2022." },
      { year: "2022", event: "First climate fund, the Early-Stage Climate Technology Fund, closed at $500M in July 2022." },
      { year: "2022", event: "Real Estate Technology Fund III closed at $866M in December 2022, bringing total capital under management to approximately $3.2B." },
      { year: "2025", event: "Completed 30 investments; CBRE acquired portfolio company Industrious for $800M and the firm exited ServiceTitan following its IPO." },
      { year: "2026", event: "Portfolio company BitGo completed its IPO, the firm's eighth public company." },
    ],
    holdings: [],
    signatureExit: "SmartRent (SPAC merger with Fifth Wall Acquisition Corp. I, 2021)"
  },
  {
    slug: "peak-capital",
    name: "Peak Capital",
    short: "Peak",
    website: "https://peak.capital",
    founded: 2008,
    hq: "Amsterdam, Netherlands",
    aum: "€125M (fund size stated on peak.capital; Peak 5 announced with a €150M target at first close, December 2022)",
    sectors: ["SaaS", "Marketplaces", "Enterprise Software", "Consumer Internet"],
    thesis: "Peak invests at pre-seed and seed stage in European SaaS, marketplace and platform companies, writing initial tickets of €250k to €4M and following on through Series B and beyond. It screens deals against a stated four-part framework of Teams, Traction, Thesis and Timing. The firm's funds are backed entirely by entrepreneurs rather than institutional limited partners. Sourcing is concentrated on the Benelux, DACH and Nordic markets from offices in Amsterdam, Berlin, Stockholm and Munich.",
    leadership: [
      { name: "Stefan Bary", role: "General Partner", profileSlug: "stefan-bary" },
      { name: "Marnix Broer", role: "General Partner", profileSlug: "marnix-broer" },
      { name: "Tea Elezi", role: "General Partner", profileSlug: "tea-elezi" },
      { name: "Thijs Dijkman", role: "General Partner", profileSlug: "thijs-dijkman" },
      { name: "David Zwagemaker", role: "Partner", profileSlug: "david-zwagemaker" },
      { name: "Philippe von Klitzing", role: "Partner" },
    ],
    timeline: [
      { year: "2008", event: "Peak started when a group of five entrepreneurs came together to collectively invest in founders." },
      { year: "2015", event: "IENS, a Peak portfolio company, acquired by Tripadvisor." },
      { year: "2019", event: "Peak launches a new €66M fund." },
      { year: "2020", event: "Portfolio company United Wardrobe acquired by Vinted." },
      { year: "2022", event: "First close of Peak 5, a €150M European seed fund, targeting roughly 50 companies." },
      { year: "2026", event: "Marnix Broer joins as General Partner and opens Peak's Munich office." },
    ],
    holdings: [],
    signatureExit: "United Wardrobe (acquired by Vinted, 2020)"
  },
  {
    slug: "newion",
    name: "Newion",
    short: "Newion",
    website: "https://newion.com",
    founded: 2000,
    hq: "Amsterdam, Netherlands",
    aum: "€130M (Newion IV, oversubscribed initial closing, 2022)",
    sectors: ["Enterprise Software", "SaaS", "AI"],
    thesis: "Newion invests at seed and Series A in European B2B software companies, with tickets of typically €1-10M in rounds up to €20M. Its geographic focus is the Benelux, the Nordics and Germany. The firm looks for an underlying market shift together with founders able to lead the company through it, and pressure-tests the coherence between problem, product and sales model before committing. After investing it stays closely engaged during the first 12 to 18 months.",
    leadership: [
      { name: "Mathijs R. de Wit", role: "Managing Partner", profileSlug: "mathijs-de-wit" },
      { name: "Pieter Welten", role: "Partner", profileSlug: "pieter-welten" },
      { name: "Fatin El Azear", role: "CFO/Partner", profileSlug: "fatin-el-azear" },
      { name: "Dorus Olgers", role: "Partner", profileSlug: "dorus-olgers" },
      { name: "Patrick Polak", role: "Partner Fund I-IV", profileSlug: "patrick-polak" },
      { name: "Frank Claassen", role: "Partner Fund I-IV" },
    ],
    timeline: [
      { year: "2000", event: "Newion founded; Patrick Polak co-founds the firm." },
      { year: "2005", event: "Frank Claassen joins Newion." },
      { year: "2011", event: "Newion invests in Collibra." },
      { year: "2019", event: "Newion invests in Deliverect." },
      { year: "2021", event: "Newion exits portfolio company Reasult to Planon." },
      { year: "2022", event: "Newion IV holds an oversubscribed initial closing at €130M, backed by BNP Paribas, PMV, Reggeborgh, the European Investment Fund, family offices and individuals." },
      { year: "2024", event: "Portfolio company SwipeGuide acquired by L2L." },
    ],
    holdings: [],
    signatureExit: "SwipeGuide (acquired by L2L, 2024)"
  },
  {
    slug: "volta-ventures",
    name: "Volta Ventures",
    short: "Volta",
    website: "https://volta.ventures",
    founded: null,
    hq: "Ghent, Belgium",
    aum: "€145M (under management, per volta.ventures)",
    sectors: ["Enterprise Software", "SaaS", "AI", "Fintech", "Crypto"],
    thesis: "Volta Ventures invests at pre-seed and seed stage in B2B software companies. It backs companies originating in Belgium, the Netherlands and Luxembourg. Initial cheques run from €100k to €1M, with capacity for follow-on investment. The firm operates from offices in Ghent, Antwerp and Amsterdam.",
    leadership: [
      { name: "Frank Maene", role: "Managing Partner", profileSlug: "frank-maene" },
      { name: "Sander Vonk", role: "Managing Partner", profileSlug: "sander-vonk" },
      { name: "Koen De Waele", role: "General Partner & CFO", profileSlug: "koen-de-waele" },
      { name: "Stan Jeanty", role: "Principal", profileSlug: "stan-jeanty" },
      { name: "Michel Akkermans", role: "Chairman" },
    ],
    timeline: [
      { year: "2019", event: "Announced a second fund with a €35M initial closing to invest in Benelux startups." },
      { year: "2025", event: "Launched a €20M fund to back B2B startups across Belgium, the Netherlands and Luxembourg." },
      { year: "2025", event: "Portfolio company Segments.ai acquired by Uber." },
      { year: "2026", event: "Portfolio company Keyrock raised €100M led by SC Ventures at a €1.1B valuation." },
    ],
    holdings: [],
    signatureExit: "Segments.ai (acquired by Uber, 2025)"
  },
  {
    slug: "henq",
    name: "henQ",
    short: "henQ",
    website: "https://www.henq.vc",
    founded: null,
    hq: "Amsterdam, Netherlands",
    aum: "€67.57M (henQ 5 first close, November 2025, against a €90M target)",
    sectors: ["Enterprise Software", "SaaS", "Marketplaces", "Logistics"],
    thesis: "henQ invests in B2B software companies led by European founders, with initial tickets up to €10M. It targets seed and Series A rounds and makes roughly two new investments per year. The firm states a preference for companies in unglamorous markets or with atypical business models, and emphasises low dilution and founder autonomy rather than board control. henQ 5 is expected to back 8-12 companies over a five-year deployment period.",
    leadership: [
      { name: "Coen van Duiven", role: "Partner", profileSlug: "coen-van-duiven" },
      { name: "Jan Andriessen", role: "Partner", profileSlug: "jan-andriessen" },
      { name: "Mick Mackaay", role: "Partner", profileSlug: "mick-mackaay" },
      { name: "Rob Rousseau", role: "Principal", profileSlug: "rob-rousseau" },
    ],
    timeline: [
      { year: "2018", event: "Portfolio company Mendix acquired by Siemens for over $700M." },
      { year: "2020", event: "Announced henQ 4 with a €70M first close." },
      { year: "2025", event: "Announced henQ 5 with a €67.57M first close against a €90M target." },
    ],
    holdings: [],
    signatureExit: "Mendix (acquired by Siemens, 2018)"
  },
  {
    slug: "360-capital",
    name: "360 Capital",
    short: "360 Capital",
    website: "https://www.360cap.vc",
    founded: 1997,
    hq: "Paris, France",
    aum: "€700M (assets under management, stated on 360cap.vc and in the firm's March 2026 Poli360 2 announcement)",
    sectors: ["Deep Tech", "Climate", "AI", "Robotics", "Space"],
    thesis: "360 Capital is an early-stage venture firm that invests from pre-seed to Series B in European companies. Its stated focus areas are deep tech including artificial intelligence, quantum technologies, robotics and space; climate tech covering green energy production, electrification, energy storage, carbon capture and recycling; and B2B and B2C digital solutions. The firm operates from Milan and Paris and reports €700M in assets under management, more than 70 current portfolio companies and over 170 startups backed since inception. It runs a technology transfer programme with Politecnico di Milano through its Poli360 funds.",
    leadership: [
      { name: "Fausto Boni", role: "Partner", profileSlug: "fausto-boni" },
      { name: "François Tison", role: "Partner", profileSlug: "francois-tison" },
      { name: "Cesare Maifredi", role: "Partner", profileSlug: "cesare-maifredi" },
      { name: "Alexandre Mordacq", role: "Partner", profileSlug: "alexandre-mordacq" },
      { name: "Lucrezia Lucotti", role: "Partner" },
      { name: "Thomas Nivard", role: "Partner" },
      { name: "Alessandro Zaccaria", role: "Partner", profileSlug: "alessandro-zaccaria" },
      { name: "Jean-Marie Perrot", role: "CFO & Head of ESG" },
    ],
    timeline: [
      { year: "1997", event: "360 Capital dates the start of its investing activity to this year." },
      { year: "2016", event: "Portfolio company Withings, listed as exited on 360 Capital's portfolio page, is acquired by Nokia for €170M." },
      { year: "2020", event: "Poli360 1, the firm's technology transfer fund with Politecnico di Milano, is launched; it now holds 20 portfolio startups." },
      { year: "2026", event: "360 Capital announces an €85M close for Poli360 2 against a €100M target, backed by the European Investment Fund, CDP Venture Capital, Italian pension funds, family offices and corporates." },
    ],
    holdings: [],
    signatureExit: "Withings (acquired by Nokia, 2016)"
  },
  {
    slug: "anterra-capital",
    name: "Anterra Capital",
    short: "Anterra",
    website: "https://anterracapital.com",
    founded: 2013,
    hq: "Amsterdam, Netherlands",
    aum: "$400M+ (total commitments, stated on anterracapital.com)",
    sectors: ["Agtech", "Biotech", "Fintech", "Enterprise Software", "Consumer"],
    thesis: "Anterra Capital invests in technology companies across the food and agriculture value chain, from the farmer through to the consumer. It backs founders applying digital technology and biotechnology, approaches the firm describes as well proven in other sectors but underused in food and agriculture. The firm partners with companies from incubation onward and typically invests at seed or Series A, with initial cheques of $1-10M. It has a global mandate with a primary focus on North America and Europe, and describes itself as the first transatlantic agrifoodtech fund, with offices in Amsterdam and Boston.",
    leadership: [
      { name: "Adam Anders", role: "Managing Partner & Co-founder", profileSlug: "adam-anders" },
      { name: "Phil Austin", role: "Managing Partner & Co-founder", profileSlug: "phil-austin" },
      { name: "Maarten Goossens", role: "Partner & Co-founder", profileSlug: "maarten-goossens" },
      { name: "Brett Wong", role: "Partner", profileSlug: "brett-wong" },
      { name: "Brett Chevalier", role: "Chief Scientist" },
      { name: "Michael Topalian", role: "Finance Director" },
    ],
    timeline: [
      { year: "2013", event: "Anterra Capital founded, described on its website as the first transatlantic agrifoodtech fund." },
      { year: "2021", event: "Anterra announces a $175M initial closing of its second fund, Anterra F&A Ventures II, with LPs including Eight Roads, Rabo Investments, Novo Holdings and Tattarang." },
      { year: "2021", event: "Portfolio company Caribou Biosciences lists on Nasdaq under the ticker CRBU in July." },
      { year: "2022", event: "Anterra closes Fund II oversubscribed at more than $260M." },
    ],
    holdings: [],
    signatureExit: "Caribou Biosciences (IPO, 2021)"
  },
  {
    slug: "seroba-life-sciences",
    name: "Seroba Life Sciences",
    short: "Seroba",
    website: "https://serobavc.com",
    founded: null,
    hq: "Dublin, Ireland",
    aum: "€123M (Seroba Fund IV, final close announced February 2024)",
    sectors: ["Biotech", "Healthcare", "Medtech"],
    thesis: "Seroba invests in early-stage life sciences companies developing biotech therapeutics and medical devices. The firm describes its focus as value creation through backing innovations in biotech and medtech. It invests predominantly in Western Europe with selective exposure to North America. Fund IV targets up to 12 investments in total.",
    leadership: [
      { name: "Daniel O'Mahony", role: "Partner", profileSlug: "daniel-omahony" },
      { name: "Alan O'Connell", role: "Partner", profileSlug: "alan-oconnell" },
      { name: "Bruno Montanari", role: "Partner", profileSlug: "bruno-montanari" },
      { name: "Jennifer McMahon", role: "Partner", profileSlug: "jennifer-mcmahon" },
      { name: "Andrew Duignan", role: "CFO & Partner" },
      { name: "Maud Lazare", role: "Investor Relations & Partner" },
      { name: "Jeanne Bolger", role: "Venture Partner", profileSlug: "jeanne-bolger" },
    ],
    timeline: [
      { year: "2024", event: "Announced above-target final close of Seroba Fund IV at €123M in February 2024, with LPs including the European Investment Fund, Ireland Strategic Investment Fund, Enterprise Ireland, AIB and CDP Venture Capital." },
      { year: "2024", event: "Portfolio company Fusion Pharmaceuticals (NASDAQ: FUSN) acquired by AstraZeneca for up to $2.4B; announced March 2024, completed June 2024." },
      { year: "2025", event: "Portfolio company Azafaros raised a €132M Series B led by Jeito Capital and co-led by Forbion Growth, with Seroba participating." },
    ],
    holdings: [],
    signatureExit: "Fusion Pharmaceuticals (acquired by AstraZeneca, 2024)"
  },
  {
    slug: "foodlabs",
    name: "FoodLabs",
    short: "FoodLabs",
    website: "https://www.foodlabs.com",
    founded: 2016,
    hq: "Berlin, Germany",
    aum: "€105M (FoodLabs Fund III, closed December 2025)",
    sectors: ["Foodtech", "Climate", "Biotech", "Consumer"],
    thesis: "FoodLabs invests at pre-seed and seed stage in European companies working on food, agriculture, sustainability and health. The firm also runs a venture studio that builds companies alongside its investing activity. Stated focus areas include food supply chains and infrastructure, agriculture and livestock farming, precision health, climate and resilience, and synthetic biology. First cheques are stated at $100k-$2M.",
    leadership: [
      { name: "Christophe Maire", role: "Founding Partner", profileSlug: "christophe-maire" },
      { name: "Patrick Noller", role: "General Partner, Managing Director", profileSlug: "patrick-noller" },
      { name: "Thilo Winter", role: "Operating Partner" },
      { name: "Florian Breiner", role: "Operating Partner, Growth" },
      { name: "Till Hoelzer", role: "Managing Director Asia" },
      { name: "Valentin Bula", role: "Head of Studio" },
      { name: "Franz Crux", role: "Chief of Staff" },
    ],
    timeline: [
      { year: "2016", event: "Founded as Atlantic Food Labs, the food-focused arm of Christophe Maire's Atlantic Labs in Berlin." },
      { year: "2021", event: "Spun out of Atlantic Labs and relaunched as FoodLabs with a €100M early-stage fund, announced October 2021." },
      { year: "2022", event: "Portfolio company Gorillas acquired by Getir in a deal announced December 2022." },
      { year: "2025", event: "Closed Fund III at €105M in December 2025, with LPs including Bitburger Holding, Landwirtschaftliche Rentenbank, Red Bull and Nestlé." },
    ],
    holdings: [],
    signatureExit: "Gorillas (acquired by Getir, 2022)"
  },
  {
    slug: "ahren-innovation-capital",
    name: "Ahren Innovation Capital",
    short: "Ahren",
    website: "https://www.ahreninnovationcapital.com",
    founded: 2018,
    hq: "Cambridge, United Kingdom",
    aum: "Not publicly disclosed (>$800M cited by the EU-Startups investor profile; Ahren's own site states over $100M at Fund I first close in 2018)",
    sectors: ["Deep Tech", "AI", "Life Sciences", "Robotics", "Space"],
    thesis: "Ahren invests at the intersection of deep science and deep technology, organising its work around four stated domains: Brain & AI, Genetics & Platform Technologies, Space & Robotics, and Efficient Energy. The firm was founded by Alice Newcombe-Ellis together with a group of Cambridge-affiliated scientists who act as Founding Science Partners and participate in sourcing, technical diligence and portfolio support. Ahren's own materials state that its founding and science partners created technologies collectively valued in excess of $100BN. The firm announced its launch on 3 September 2018 with over $100M at first close.",
    leadership: [
      { name: "Alice Newcombe-Ellis", role: "Founding & General Partner", profileSlug: "alice-newcombe-ellis" },
      { name: "Professor Andy Parker", role: "Founding Partner", profileSlug: "andy-parker-ahren" },
      { name: "Sir Gregory Winter", role: "Founding Partner", profileSlug: "gregory-winter-ahren" },
      { name: "Professor John Daugman OBE", role: "Founding Partner", profileSlug: "john-daugman-ahren" },
      { name: "Lord Martin Rees", role: "Founding Partner", profileSlug: "martin-rees-ahren" },
      { name: "Professor Zoubin Ghahramani", role: "Founding Partner", profileSlug: "zoubin-ghahramani-ahren" },
      { name: "Sir Shankar Balasubramanian", role: "Founding Partner", profileSlug: "shankar-balasubramanian-ahren" },
      { name: "Professor Steve Jackson", role: "Founding Partner", profileSlug: "steve-jackson-ahren" },
      { name: "Sir Venki Ramakrishnan", role: "Founding Partner", profileSlug: "venki-ramakrishnan-ahren" },
      { name: "Peter Lourensz, FCA", role: "Chief Financial Officer" },
    ],
    timeline: [
      { year: "2018", event: "Ahren announces its launch on 3 September with over $100M at first close, founded by Alice Newcombe-Ellis with nine Founding Science Partners; LPs named include Aviva Ventures and Wittington Investments." },
      { year: "2019", event: "Ahren invests in Graphcore's Series D, announced 21 March at a $1.7B post-money valuation." },
      { year: "2024", event: "Portfolio company Graphcore is acquired by SoftBank (announced 11 July 2024)." },
    ],
    holdings: [],
    signatureExit: "Graphcore (acquired by SoftBank, 2024)"
  },
  {
    slug: "contrarian-ventures",
    name: "Contrarian Ventures",
    short: "Contrarian",
    website: "https://www.cventures.vc",
    founded: 2017,
    hq: "Vilnius, Lithuania",
    aum: "€100M (Fund II, launched August 2022; Fund I was €12.5M per EIF)",
    sectors: ["Climate Technology", "Clean Energy", "Energy", "Mobility", "Industrial Technology"],
    thesis: "Contrarian Ventures is a climate tech venture capital firm investing at pre-seed and seed stage across Europe and Israel, with stated ticket sizes of EUR 1-4 million. The firm states it focuses on green energy, transportation, the built environment, industry and carbon markets, and explicitly excludes food and agriculture. Its stated thesis is backing economically superior technologies that outcompete incumbents rather than relying on subsidy or goodwill. Alongside investing it runs platform initiatives including the Energy Tech Summit, Climate 50, The Climate Brick and Growth Meets Capital.",
    leadership: [
      { name: "Rokas Peciulaitis", role: "Founder & Managing Partner", profileSlug: "rokas-peciulaitis" },
      { name: "Tomas Kemtys", role: "General Partner", profileSlug: "tomas-kemtys" },
    ],
    timeline: [
      { year: "2017", event: "Firm founded by Rokas Peciulaitis; first fund raised (€12.5M per EIF)." },
      { year: "2019", event: "Launched the Energy Tech Summit." },
      { year: "2020", event: "Launched Climate 50." },
      { year: "2022", event: "Raised its second fund; announced in August 2022 as a €100M climate tech fund." },
      { year: "2023", event: "European Investment Fund commits €25M to Contrarian Ventures Fund II as an anchor LP under InvestEU." },
      { year: "2023", event: "Firm states it returned Fund I with a single investment (referred to on its site as 'Dragon')." },
      { year: "2024", event: "Launched The Climate Brick." },
      { year: "2024", event: "Launched Growth Meets Capital." },
    ],
    holdings: [],
    signatureExit: null
  },
  {
    slug: "schematic-ventures",
    name: "Schematic Ventures",
    short: "Schematic",
    website: "https://www.schematicventures.com",
    founded: 2017,
    hq: "San Francisco, California",
    aum: "Not publicly disclosed",
    sectors: ["Supply Chain", "Logistics", "Manufacturing", "Robotics", "Industrial Technology"],
    thesis: "Schematic Ventures is an early-stage venture fund whose stated focus is 'technology that makes & moves the world' - supply chain, manufacturing and software infrastructure. It leads pre-seed and seed rounds with a stated average check size of $1M-$2M and invests in US and Canada based teams. Its published portfolio lists more than 30 companies including Flock Freight, Outrider, Platform Science, Plus One Robotics, Harbinger Motors and Altana. The firm also runs the reSupply and reForge event series for supply chain and manufacturing technology in San Francisco.",
    leadership: [
      { name: "Julian Counihan", role: "General Partner", profileSlug: "julian-counihan" },
    ],
    timeline: [
      { year: "2017", event: "Schematic Ventures founded in San Francisco; earliest portfolio investments listed on its site are Airspace, Flock Freight and Plus One Robotics (all 2017 seed)." },
      { year: "2025", event: "Led CVector's $1.5M pre-seed round for industrial AI data infrastructure." },
    ],
    holdings: [],
    signatureExit: null
  },
  {
    slug: "mouro-capital",
    name: "Mouro Capital",
    short: "Mouro Capital",
    website: "https://www.mourocapital.com/",
    founded: 2014,
    hq: "London, United Kingdom",
    aum: "$1B+ (total commitments since 2015; latest fund closed at $400M in May 2026)",
    sectors: ["Fintech", "Fintech Infrastructure", "AI", "Insurance", "Wealth"],
    thesis: "Mouro Capital invests in fintech and financial-services-adjacent companies from seed through growth stage across Europe, North America and Latin America. The firm leads rounds with initial cheques of up to $15 million and holds reserves for follow-ons. Its stated focus areas include capital markets, wealth management, insurance, real-time payments and programmable money movement, identity and data tooling, and AI-native software. It began in 2014 as Santander InnoVentures and was renamed and spun out as Mouro Capital in September 2020; Banco Santander has remained its sole limited partner.",
    leadership: [
      { name: "Manuel Silva Martínez", role: "General Partner", profileSlug: "manuel-silva-martinez" },
      { name: "Chris Gottschalk", role: "General Partner", profileSlug: "chris-gottschalk" },
      { name: "Francesco Pasti", role: "Partner", profileSlug: "francesco-pasti" },
      { name: "Rafael Esteban Correa", role: "Partner", profileSlug: "rafael-esteban-correa" },
    ],
    timeline: [
      { year: "2014", event: "Banco Santander launches Santander InnoVentures, a $100M fintech venture fund" },
      { year: "2019", event: "MSM Global Investments LLP, the FCA-authorised management entity, is incorporated in London" },
      { year: "2020", event: "Santander spins out the venture arm, renames it Mouro Capital and doubles committed capital from $200M to $400M" },
      { year: "2026", event: "Mouro announces a $400M close for its third fund, backed by Banco Santander, taking total commitments past $1B" },
    ],
    holdings: [],
    signatureExit: "iZettle (acquired by PayPal, 2018)"
  },
  {
    slug: "headline",
    name: "Headline",
    short: "Headline",
    website: "https://headline.com",
    founded: 1997,
    hq: "San Francisco, California",
    aum: "Not publicly disclosed (AltAssets reported an $865m growth fund closed September 2024)",
    sectors: ["Enterprise Software", "Applied AI", "Consumer", "Fintech"],
    thesis: "Headline is a global venture capital firm that backs founders across the US, Europe, Asia and Brazil, investing in software, AI applications, consumer and fintech. It runs dedicated regional early-stage funds alongside a global growth fund that invests $20M or more per company. The firm describes its approach as data-informed conviction combined with hands-on support for international scaling, delivered through nine offices in San Francisco, Berlin, Hamburg, Paris, London, Luxembourg, Sao Paulo, Taipei and Tokyo.",
    leadership: [
      { name: "Mathias Schilling", role: "Founding Partner", profileSlug: "mathias-schilling" },
      { name: "Christian Leybold", role: "Founding Partner", profileSlug: "christian-leybold" },
      { name: "Thomas Gieselmann", role: "Founding Partner", profileSlug: "thomas-gieselmann" },
      { name: "Akio Tanaka", role: "Partner", profileSlug: "akio-tanaka" },
      { name: "Rainer Hillebrand", role: "Chairman" },
    ],
    timeline: [
      { year: "1997", event: "Firm founded; Thomas Gieselmann's Headline bio states he co-founded the firm in 1997, and Wikipedia dates the predecessor Bertelsmann Ventures to the same year." },
      { year: "2000", event: "BV Capital established and the firm relocated to San Francisco." },
      { year: "2012", event: "Rebranded internationally as e.ventures." },
      { year: "2021", event: "On 10 May 2021 e.ventures and Infinity Ventures rebranded under the single global name Headline; the Asia business became Headline Asia." },
      { year: "2024", event: "Closed an $865m growth fund, per AltAssets (19 September 2024)." },
    ],
    holdings: [],
    signatureExit: "Farfetch (IPO, 2018)"
  },
  {
    slug: "viola-ventures",
    name: "Viola Ventures",
    short: "Viola Ventures",
    website: "https://www.viola-group.com/fund/violaventures/",
    founded: 2000,
    hq: "Herzliya, Israel",
    aum: "$1.5B (under management, stated on the fund's own page)",
    sectors: ["Fintech", "Cybersecurity", "AI Infrastructure", "Applied AI", "Defense Tech"],
    thesis: "Viola Ventures is the early-stage fund of Israel's Viola Group, investing at pre-seed, seed and Series A and backing companies from the ideation phase. Its own page states $1.5B under management, more than 20 years in Israel's tech scene and over 150 companies backed, including ironSource, Payoneer, Redis, Pagaya, Lightricks and Immunai. Current stated focus areas are fintech, cyber, vertical AI, AI infrastructure, defense technology and quantum. The fund was founded in 2000 as Carmel Ventures and rebranded to Viola Ventures in November 2017 when it raised its fifth fund.",
    leadership: [
      { name: "Shlomo Dovrat", role: "Co-Founder & Managing Partner", profileSlug: "shlomo-dovrat" },
      { name: "Avi Zeevi", role: "Co-founder & General Partner", profileSlug: "avi-zeevi" },
      { name: "Omry Ben David", role: "Managing Partner", profileSlug: "omry-ben-david" },
      { name: "Zvika Orron", role: "Managing Partner", profileSlug: "zvika-orron" },
      { name: "Alex Shmulovich", role: "Partner", profileSlug: "alex-shmulovich" },
    ],
    timeline: [
      { year: "2000", event: "Founded as Carmel Ventures, the early-stage arm of the newly formed Viola Group" },
      { year: "2017", event: "Rebranded from Carmel Ventures to Viola Ventures on raising its fifth fund; Zvika Orron and Omry Ben David joined as partners" },
      { year: "2022", event: "Portfolio company ironSource acquired by Unity Software" },
      { year: "2025", event: "Raised approximately $250M across Viola Ventures VII and Viola Conviction Fund I" },
    ],
    holdings: [],
    signatureExit: "ironSource (acquired by Unity, 2022)"
  },
  {
    slug: "quona-capital",
    name: "Quona Capital",
    short: "Quona",
    website: "https://quona.com",
    founded: 2015,
    hq: "Washington, District of Columbia",
    aum: "$745M (aggregate committed capital across Funds I-III, TechCrunch, Nov 2022)",
    sectors: ["Fintech", "Fintech Infrastructure", "Lending", "Insurtech"],
    thesis: "Quona Capital is a venture firm investing in fintech for financial inclusion in emerging markets. It backs companies serving underserved consumers and small businesses across Latin America, India and Southeast Asia, and EMEA. The firm states it aims to marry investment performance with social impact. Quona began as Accion's Frontier Investments Group and became an independent venture firm in 2015.",
    leadership: [
      { name: "Monica Brand Engel", role: "Managing Partner", profileSlug: "monica-brand-engel" },
      { name: "Jonathan Whittle", role: "Managing Partner", profileSlug: "jonathan-whittle" },
      { name: "Ganesh Rengaswamy", role: "Managing Partner", profileSlug: "ganesh-rengaswamy" },
    ],
    timeline: [
      { year: "2015", event: "Quona Capital founded by Monica Brand Engel, Jonathan Whittle and Ganesh Rengaswamy, becoming an independent venture firm after starting as Accion's Frontier Investments Group" },
      { year: "2019", event: "Portfolio company Coins.ph acquired by Go-Jek for a reported $72 million" },
      { year: "2020", event: "Closed Fund II, the Accion Quona Inclusion Fund, at $203 million in commitments" },
      { year: "2022", event: "Closed Fund III at $332 million, taking aggregate committed capital to over $745 million" },
    ],
    holdings: [],
    signatureExit: "Coins.ph (acquired by Go-Jek, 2019)"
  },
  {
    slug: "flourish-ventures",
    name: "Flourish Ventures",
    short: "Flourish",
    website: "https://flourishventures.com",
    founded: 2019,
    hq: "San Francisco, California",
    aum: "$850M (under management, stated on the firm's site)",
    sectors: ["Fintech", "Fintech Infrastructure", "Insurtech", "Regtech"],
    thesis: "Flourish Ventures is an early-stage global fintech venture firm investing in founders working on financial health and financial systems. It describes its investment themes as digital banking, embedded finance, frontier markets, infrastructure, insurtech and regtech. The firm states it operates an evergreen fund and splits its capital roughly 50/50 between the United States and emerging markets across 100+ companies. It was created in 2019 when Omidyar Network spun out its financial inclusion investment arm, with capital committed by Pierre Omidyar and family through The Omidyar Group.",
    leadership: [
      { name: "Arjuna Costa", role: "Co-Founder & Managing Partner", profileSlug: "arjuna-costa" },
      { name: "Emmalyn Shaw", role: "Co-Founder & Managing Partner", profileSlug: "emmalyn-shaw" },
      { name: "Tilman Ehrbeck", role: "Co-Founder & Managing Partner", profileSlug: "tilman-ehrbeck" },
    ],
    timeline: [
      { year: "2019", event: "Omidyar Network spun out its fintech and financial inclusion investment arm as Flourish Ventures, with up to $300 million committed by Pierre Omidyar and family through The Omidyar Group, including an existing $200 million portfolio" },
      { year: "2025", event: "Portfolio company Chime, which Flourish first backed as an early equity investor in 2017, completed its IPO on Nasdaq" },
    ],
    holdings: [],
    signatureExit: "Chime (IPO, 2025)"
  },
  {
    slug: "reach-capital",
    name: "Reach Capital",
    short: "Reach Capital",
    website: "https://www.reachcapital.com",
    founded: 2015,
    hq: "San Francisco, California",
    aum: "$215M (Fund IV, closed 2023)",
    sectors: ["Edtech", "Education", "Workforce Development", "Digital Health"],
    thesis: "Reach Capital is an early-stage venture firm investing in technology across learning, health and work. The team spun out of NewSchools Venture Fund, where the founders had run the NewSchools Seed fund and made more than 40 early-stage education technology investments. Reach writes initial checks that its site describes as ranging from about $100K at pre-seed to $12M+ at later stages, and says it has made over 140 investments.",
    leadership: [
      { name: "Jennifer Carolan", role: "Co-Founder & Partner", profileSlug: "jennifer-carolan" },
      { name: "Wayee Chu", role: "Co-Founder & Partner", profileSlug: "wayee-chu" },
      { name: "Esteban Sosnik", role: "Co-Founder & Partner", profileSlug: "esteban-sosnik" },
    ],
    timeline: [
      { year: "2011", event: "Future Reach founders launch the NewSchools Seed fund and the Zynga co.lab accelerator at NewSchools Venture Fund" },
      { year: "2015", event: "Reach Capital spins out of NewSchools Venture Fund and is founded" },
      { year: "2018", event: "Portfolio company Gradescope acquired by Turnitin" },
      { year: "2023", event: "Closes Reach IV, a $215M core fund, alongside its first Reach Founders' Fund sidecar" },
    ],
    holdings: [],
    signatureExit: "Gradescope (acquired by Turnitin, 2018)"
  },
  {
    slug: "human-ventures",
    name: "Human Ventures",
    short: "Human Ventures",
    website: "https://human.vc",
    founded: 2015,
    hq: "New York, New York",
    aum: "$50M (debut fund, 2019)",
    sectors: ["Digital Health", "Fintech", "Consumer", "Media"],
    thesis: "Human Ventures is a New York startup studio and early-stage venture firm that co-builds companies from inception and also invests in outside founders. The firm's site organizes its work around health and wellness, future of work and money, experience and connection, and media and attention. It was announced in March 2015 by Joe Marchese and Heather Hartnett, with an investment arm called Human Ventures Capital. Fast Company reported a $50 million debut fund in February 2019.",
    leadership: [
      { name: "Heather Hartnett", role: "General Partner, CEO", profileSlug: "heather-hartnett" },
      { name: "Joe Marchese", role: "Executive Chairman", profileSlug: "joe-marchese" },
      { name: "Michael Letta", role: "General Partner, COO", profileSlug: "michael-letta" },
    ],
    timeline: [
      { year: "2015", event: "Human Ventures announced by Joe Marchese and Heather Hartnett as a startup studio with an investment arm" },
      { year: "2018", event: "Portfolio company Reserve acquired by Resy" },
      { year: "2019", event: "Closes $50 million debut fund" },
      { year: "2020", event: "Evan Cohen joins as Venture Partner and launches the Humans in the Wild EIR program" },
    ],
    holdings: [],
    signatureExit: "Reserve (acquired by Resy, 2018)"
  },
  {
    slug: "acme-capital",
    name: "ACME Capital",
    short: "ACME Capital",
    website: "https://www.acme.vc",
    founded: 2018,
    hq: "San Francisco, California",
    aum: "$1.5B (aggregate capital commitments, ACME press release, February 2022)",
    sectors: ["Deep Tech", "AI", "Defense Tech", "Healthcare", "Space"],
    thesis: "ACME Capital is an early-stage venture firm that invests in frontier technologies before they become mainstream, backing deep-tech founders across AI and software platforms, defense and autonomous systems, healthcare technology and space. Its stated sweet spot is late seed and Series A, with checks from $500,000 to $15 million and a preference for $5-10 million positions that carry a board seat. The firm was co-founded in 2018 by Scott Stanford and Hany Nada and operates from San Francisco with networks across the US and Europe.",
    leadership: [
      { name: "Scott Stanford", role: "Co-Founder and Partner", profileSlug: "scott-stanford" },
      { name: "Hany Nada", role: "Co-Founder and Partner", profileSlug: "hany-nada" },
    ],
    timeline: [
      { year: "2013", event: "Sherpa Capital founded in San Francisco in March 2013 by Shervin Pishevar and Scott Stanford." },
      { year: "2018", event: "Scott Stanford parted ways with Sherpa Capital and co-founded ACME Capital with Hany Nada; ACME's own partner bios date the firm's founding to 2018 and Venture Capital Journal headlined the firm 'ACME Capital, formerly Sherpa'." },
      { year: "2019", event: "Closed Fund III at $181 million." },
      { year: "2022", event: "On 4 February 2022 closed over $300 million across Fund IV ($240m) and an Opportunity Fund ($60m), and promoted Alex Fayette and Aike Ho to Partner." },
    ],
    holdings: [],
    signatureExit: "IonQ (IPO via SPAC merger, 2021)"
  },
  {
    slug: "footwork",
    name: "Footwork",
    short: "Footwork",
    website: "https://www.footwork.vc",
    founded: 2021,
    hq: "San Francisco, California",
    aum: "$225M (Fund II, began investing 2025; Fund I was $175M, 2021)",
    sectors: ["Consumer", "Consumer Internet", "Enterprise Software"],
    thesis: "Footwork leads and co-leads Seed and Series A rounds in companies with early signs of product-market fit. Initial checks range from $1 million to $15 million. The firm focuses on consumer technology and the consumerization of enterprise technology, and describes itself as an equal partnership combining investing and operating experience. It had invested in 25 companies as of Q2 2026 according to its own site.",
    leadership: [
      { name: "Mike Smith", role: "General Partner", profileSlug: "mike-smith-footwork" },
      { name: "Nikhil Basu Trivedi", role: "Co-Founder and General Partner", profileSlug: "nikhil-basu-trivedi" },
    ],
    timeline: [
      { year: "2021", event: "Footwork launched in April 2021 with a $175M Fund I" },
      { year: "2023", event: "Portfolio company Waldo acquired by Tricentis" },
      { year: "2025", event: "Began investing a $225M Fund II" },
    ],
    holdings: [],
    signatureExit: "Waldo (acquired by Tricentis, 2023)"
  },
  {
    slug: "next47",
    name: "N47",
    short: "N47",
    website: "https://www.n47.com/",
    founded: 2016,
    hq: "Munich, Germany",
    aum: "€1B (committed by Siemens for the unit's first five years, 2016)",
    sectors: ["Enterprise Software", "Infrastructure Software", "Cybersecurity", "Robotics", "AI"],
    thesis: "N47 is Siemens' global venture capital unit, founded in 2016 as next47 with €1 billion committed by Siemens for its first five years. It invests in enterprise technology companies across three self-described categories - Systems, Infrastructure and Applications - with teams in Silicon Valley, Europe and Israel. The firm states it invests early, before metrics are established, and also runs a seed fund-of-funds programme investing in early-stage enterprise fund managers. It rebranded from Next47 to N47 in 2025; Siemens' fiscal 2025 annual report still describes N47 as its global venture capital unit.",
    leadership: [
      { name: "Lak Ananth", role: "Global Managing Partner", profileSlug: "lak-ananth" },
      { name: "Matthew Cowan", role: "General Partner", profileSlug: "matthew-cowan" },
      { name: "T.J. Rylander", role: "General Partner", profileSlug: "tj-rylander" },
      { name: "Moshe Zilberstein", role: "General Partner", profileSlug: "moshe-zilberstein" },
      { name: "Jonathan Barek", role: "Chief Operating Officer" },
    ],
    timeline: [
      { year: "2016", event: "Siemens announces next47 as a separate unit for startups with €1 billion committed over five years; operations begin 1 October 2016" },
      { year: "2016", event: "Lak Ananth, previously head of HPE Pathfinder, is named to lead next47, effective 15 November 2016" },
      { year: "2025", event: "Next47 rebrands as N47; German commercial-register name change to N47 Services GmbH recorded 1 November 2025" },
      { year: "2025", event: "Siemens' fiscal 2025 annual report refers to N47 (previously Next47) as its global venture capital unit, confirming continued Siemens ownership" },
    ],
    holdings: [],
    signatureExit: "Noname Security (acquired by Akamai, 2024)"
  },
  {
    slug: "illuminate-ventures",
    name: "Illuminate Ventures",
    short: "Illuminate",
    website: "https://illuminate.com",
    founded: 2009,
    hq: null,
    aum: "Not publicly disclosed",
    sectors: ["B2B Software", "Enterprise Software", "SaaS", "Data & Analytics"],
    thesis: "Illuminate Ventures is an early-stage venture firm focused on B2B and enterprise cloud and mobile computing, including SaaS applications, data-driven products and business platforms. The firm was founded in 2009 by Cindy Padnos and describes itself as based in the San Francisco Bay Area. It backs capital-efficient North American companies and supports them through an advisory council the firm describes as more than 40 entrepreneurs and executives. Illuminate is widely associated with backing diverse founding teams.",
    leadership: [
      { name: "Cindy Padnos", role: "Founder and Managing Partner", profileSlug: "cindy-padnos" },
      { name: "Jennifer Savage", role: "Partner", profileSlug: "jennifer-savage" },
    ],
    timeline: [
      { year: "2009", event: "Cindy Padnos founds Illuminate Ventures after serving as a director at Outlook Ventures" },
      { year: "2010", event: "Stanford GSB publishes a case study on Illuminate Ventures raising its first fund, with a $35M target" },
      { year: "2017", event: "Portfolio company Xactly acquired by Vista Equity Partners" },
    ],
    holdings: [],
    signatureExit: "Xactly (acquired by Vista Equity Partners, 2017)"
  },
  {
    slug: "clean-energy-ventures",
    name: "Clean Energy Ventures",
    short: "Clean Energy Vent.",
    website: "https://www.cleanenergyventures.com/",
    founded: 2017,
    hq: "Boston, Massachusetts",
    aum: "$415M (across two funds; Fund II $305M, closed 2024)",
    sectors: ["Climate Technology", "Clean Energy", "Energy", "Carbon Removal", "Industrial Technology"],
    thesis: "Clean Energy Ventures is an early-stage climate technology venture firm investing at seed and Series A in companies where, in the firm's words, \"the science is proven, the path to commercialization is clear, and the potential for climate impact is measured in gigatons.\" It focuses on hard technology and advanced materials, thermal solutions, energy storage and distributed generation, carbon capture and recycling, and industrial decarbonization. The firm screens every prospective investment with its own Simple Emissions Reduction Calculator (SERC) methodology and targets mitigating 75 gigatons of emissions by 2050. It takes active board seats and works on IP, commercial strategy and leadership coaching rather than investing passively.",
    leadership: [
      { name: "Dan Goldman", role: "Co-Founder & Managing Partner", profileSlug: "dan-goldman" },
      { name: "David S. Miller, PhD.", role: "Co-Founder & Managing Partner", profileSlug: "david-s-miller" },
      { name: "Temple Fennell", role: "Co-Founder & Managing Partner", profileSlug: "temple-fennell" },
    ],
    timeline: [
      { year: "2005", event: "David S. Miller becomes Executive Managing Director of Clean Energy Venture Group, the angel investing cohort that preceded the firm (he served through 2017)." },
      { year: "2017", event: "Clean Energy Ventures formalized as an institutional venture fund by Dan Goldman, David S. Miller and Temple Fennell." },
      { year: "2024", event: "Closes oversubscribed $305M Fund II (announced May 29, 2024) and opens a London office; Fund I was $110M." },
      { year: "2025", event: "Portfolio company SparkMeter's data platform and software technologies acquired by Honeywell (announced August 2025)." },
    ],
    holdings: [],
    signatureExit: "SparkMeter (acquired by Honeywell, 2025)"
  },
  {
    slug: "aix-ventures",
    name: "AIX Ventures",
    short: "AIX Ventures",
    website: "https://www.aixventures.com/",
    founded: 2021,
    hq: "Newark, California",
    aum: "$202M (Fund II, 2024)",
    sectors: ["AI", "AI Infrastructure", "Applied AI", "Machine Learning", "Developer Tools"],
    thesis: "AIX Ventures is an AI-focused venture fund that invests from pre-seed to Series A in companies where AI is a core component of the main product today, spanning NLP, computer vision and robotics. The firm describes itself as sector-agnostic within AI, calling out Consumer, Developer Tools & Data, Healthcare/Life Sciences, Manufacturing & Warehousing and SaaS, with particular interest in future-of-work applications and infrastructure. Target initial checks are $1M-$5M with reserves for follow-ons. Its investment partners are practicing AI researchers and operators who remain active in the field rather than passive investors.",
    leadership: [
      { name: "Richard Socher", role: "Investment Partner", profileSlug: "richard-socher" },
      { name: "Anthony Goldbloom", role: "Investment Partner", profileSlug: "anthony-goldbloom" },
      { name: "Christopher Manning", role: "Investment Partner", profileSlug: "christopher-manning" },
    ],
    timeline: [
      { year: "2021", event: "Fund I closes at $50M, backed by AI practitioners including Richard Socher, Pieter Abbeel, Anthony Goldbloom, Christopher Manning and Shaun Johnson." },
      { year: "2022", event: "AIX Ventures publicly launches its AI-focused fund; AIX Ventures LP files SEC Form D from Newark, CA." },
      { year: "2024", event: "Announces $202M Fund II on February 13, 2024." },
      { year: "2025", event: "Portfolio company Weights & Biases completes acquisition by CoreWeave (May 2025)." },
      { year: "2026", event: "AIX Ventures Fund III, L.P. files an SEC Form D (filed June 4, 2026); size not disclosed." },
    ],
    holdings: [],
    signatureExit: "Weights & Biases (acquired by CoreWeave, 2025)"
  },
  {
    slug: "viola-growth",
    name: "Viola Growth",
    short: "Viola Growth",
    website: "https://www.viola-group.com/fund/violagrowth/",
    founded: 2008,
    hq: "Herzliya, Israel",
    aum: "~$1B (across four funds, stated on the fund's own page)",
    sectors: ["Enterprise Software", "Fintech", "Insurtech", "Ecommerce", "Proptech"],
    thesis: "Viola Growth is the growth-stage fund of Israel's Viola Group, describing itself as Israel's first and leading technology growth fund. It invests at the early-growth stage in Israeli companies with commercial traction that are positioned to achieve category leadership, and provides operational as well as financial support. Its own page states approximately $1B under management across four funds, with over 36 investments and 12 exits since 2008. Press reporting on its third fund described target companies with at least $10 million in annual revenue and typical checks of $20-40 million.",
    leadership: [
      { name: "Harel Beit-On", role: "Founder & General Partner", profileSlug: "harel-beit-on" },
      { name: "Natalie Refuah", role: "General Partner", profileSlug: "natalie-refuah" },
      { name: "Igal Shany", role: "General Partner", profileSlug: "igal-shany" },
      { name: "Ayal Shiran", role: "General Partner", profileSlug: "ayal-shiran" },
    ],
    timeline: [
      { year: "2008", event: "Founded; first fund closed at $164 million" },
      { year: "2014", event: "Second fund closed at $274 million" },
      { year: "2019", event: "Raised third fund of $280 million" },
      { year: "2021", event: "Portfolio company Similarweb listed on the NYSE" },
      { year: "2023", event: "Igal Shany appointed General Partner, focused on the fourth fund" },
    ],
    holdings: [],
    signatureExit: "Similarweb (IPO, 2021)"
  },
  {
    slug: "animo-ventures",
    name: "ANIMO Ventures",
    short: "ANIMO Ventures",
    website: "https://animo.vc",
    founded: null,
    hq: "Miami, Florida",
    aum: "$78M (Fund II, per firm site)",
    sectors: [],
    thesis: "ANIMO Ventures is an early-stage firm that invests $500k to $2.5m from ideation to early traction. Its stated focus is US-based companies raising $500k to $5m across the seed spectrum. The firm describes its approach as People Backing People and Founders Backing Founders and lists more than 50 portfolio companies. It was publicly unveiled in November 2019 with a $60 million debut fund after operating in stealth as Magnetico Ventures.",
    leadership: [
      { name: "Nico Berardi", role: "General Partner", profileSlug: "nico-berardi" },
      { name: "Antonio Osio", role: "General Partner", profileSlug: "antonio-osio" },
      { name: "Caro Acevedo", role: "Operations Partner" },
      { name: "Vicky Franco", role: "Operations Director" },
    ],
    timeline: [
      { year: "2019", event: "Publicly unveiled as ANIMO Ventures with a $60 million seed fund, after operating in stealth as Magnetico Ventures" },
    ],
    holdings: [],
    signatureExit: null
  },
  {
    slug: "vine-ventures",
    name: "Vine Ventures",
    short: "Vine Ventures",
    website: "https://vineventures.com",
    founded: 2020,
    hq: "New York, New York",
    aum: "$140M (Fund II, closed 2022; ~$250M raised in total per Forbes, 2025)",
    sectors: ["AI Infrastructure", "Fintech", "Cybersecurity", "Marketplaces", "Healthcare"],
    thesis: "Vine Ventures partners with founders at the earliest stage, writing first checks of $1-10 million. The firm states it is a long-term investor that backs founders at inception and continues investing until IPO. It operates from New York, Tel Aviv, San Francisco and Chicago, and invests across the US, Israel and Latin America. Fund II closed at $140 million in June 2022, tripling Fund I.",
    leadership: [
      { name: "Eric Reiner", role: "Founder & Managing Partner", profileSlug: "eric-reiner" },
      { name: "Dan Povitsky", role: "Cofounder & Partner", profileSlug: "dan-povitsky" },
      { name: "Adam Valkin", role: "Partner", profileSlug: "adam-valkin" },
      { name: "Demren Sinik", role: "Partner & Head of West Coast", profileSlug: "demren-sinik" },
      { name: "Barak Kaufman", role: "Partner & Head of Israel", profileSlug: "barak-kaufman" },
    ],
    timeline: [
      { year: "2020", event: "Vine founded; first Limited Partner commitments received days before COVID-19 broke out" },
      { year: "2020", event: "Fund I raised in June 2020" },
      { year: "2022", event: "Fund II closed at $140M in June 2022, tripling Fund I" },
      { year: "2025", event: "Adam Valkin joined as Partner after 12 years at General Catalyst" },
    ],
    holdings: [],
    signatureExit: null
  },
  {
    slug: "balnord",
    name: "Balnord",
    short: "Balnord",
    website: "https://www.balnord.vc/",
    founded: 2024,
    hq: "Luxembourg City, Luxembourg",
    aum: "€70M (Fund I first close, 2025)",
    sectors: ["Deep Tech", "Defense Tech", "Space", "Healthcare", "Industrial Technology"],
    thesis: "Balnord is an early-stage venture capital firm investing in frontier and dual-use technology companies across the Baltic Sea Region (Nordics, Baltics, Poland and Germany). It describes itself as a high-conviction pre-seed and seed investor backing the technological backbone of Europe's re-industrialisation, concentrating on space, healthcare and industrial resilience. Initial tickets run €0.5M-€3M with follow-on capacity up to €12M per company and roughly 60% of the fund reserved for follow-ons. The firm was founded by the team behind Black Pearls VC and is co-financed by the European Union's InvestEU Fund.",
    leadership: [
      { name: "Marcin P. Kowalik", role: "Managing Partner", profileSlug: "marcin-p-kowalik" },
      { name: "Aleksander Dobrzyniecki", role: "General Partner", profileSlug: "aleksander-dobrzyniecki" },
      { name: "Jarek Pilarczyk", role: "Partner", profileSlug: "jarek-pilarczyk" },
      { name: "Hubert Szczołek", role: "Partner & CFO", profileSlug: "hubert-szczolek" },
    ],
    timeline: [
      { year: "2024", event: "Balnord founded by the team behind Black Pearls VC; registered as Balnord SARL in Luxembourg with offices in Gdansk and Berlin." },
      { year: "2025", event: "Announces oversubscribed €70M first close of Balnord Fund I (November 2025), backed by the European Investment Fund, PFR Ventures and family offices across 12 countries; ~€13M deployed into 10 companies." },
      { year: "2026", event: "Targeting a €100M final close for Fund I by mid-2026." },
    ],
    holdings: [],
    signatureExit: null
  },
  {
    slug: "redalpine",
    name: "Redalpine",
    short: "Redalpine",
    website: "https://www.redalpine.com",
    founded: 2006,
    hq: "Zug, Switzerland",
    aum: "$1.4bn+ (assets under management across 8 funds, stated by the firm on redalpine.com)",
    sectors: ["Frontier Technologies", "Healthcare", "Biotech", "Fintech Infrastructure", "AI"],
    thesis: "Redalpine is a thesis-driven early-stage venture capital investor founded in Switzerland in 2006 that describes itself as working at the intersection of software and science. The firm says roughly half of its team are scientists and half come from operating backgrounds, and it organises its work around six investment verticals: frontier tech, health, digitisation, fintech and fintech infrastructure, biology, and sustainability. It invests from seed onward across Europe, with offices in Zug, Berlin and London and a presence in Silicon Valley. Its most recent disclosed fund, Redalpine Capital VII, closed at $200 million in August 2024.",
    leadership: [
      { name: "Peter Niederhauser", role: "Founding Partner", profileSlug: "peter-niederhauser" },
      { name: "Sebastian Becker", role: "General Partner", profileSlug: "sebastian-becker" },
      { name: "Daniel Graf", role: "General Partner", profileSlug: "daniel-graf" },
      { name: "Dr. Harald Nieder", role: "General Partner", profileSlug: "harald-nieder" },
      { name: "Dr. Oliver Pabst", role: "General Partner", profileSlug: "oliver-pabst" },
    ],
    timeline: [
      { year: "2006", event: "Redalpine founded in Switzerland; the firm describes its founders as a software entrepreneur and a molecular biologist. Peter Niederhauser and Michael Sidler are named by the firm as founding partners." },
      { year: "2024", event: "Redalpine Capital VII (RAC VII) closed at $200 million, the firm's largest fund to date, and a London office was opened, headed by General Partner Sebastian Becker." },
      { year: "2025", event: "Portfolio company Lakera, an AI-security startup, agreed to be acquired by Check Point Software Technologies; Redalpine lists Lakera among its exited companies." },
    ],
    holdings: [],
    signatureExit: "Robinhood (IPO, 2021)"
  },
  {
    slug: "elaia-partners",
    name: "Elaia",
    short: "Elaia",
    website: "https://elaia.com",
    founded: 2002,
    hq: "Paris, France",
    aum: "EUR 850M (assets under management, French press at the DTS3 final close, March 2026)",
    sectors: ["Deep Tech", "AI", "B2B Software", "Digital Health"],
    thesis: "Elaia is a Paris-based venture capital firm co-founded in 2002 by Philippe Gire and Xavier Lazarus that invests in B2B technology companies from pre-seed and seed through Series B, with offices in Paris, Barcelona and Tel Aviv. Deep tech is run as a dedicated franchise built with academic partners: the firm manages seed vehicles created with Université PSL (Paris Sciences & Lettres), Inria and the Barcelona Supercomputing Center, and closed its third-generation deep tech seed fund, Deep Tech Seed 3, at EUR 134 million in March 2026. Its digital practice covers enterprise software and SaaS, data and AI, fintech and digital health. In April 2024 Lazard took a minority stake in the management company and the two set up Lazard Elaia Capital, a separate Paris growth-equity manager owned 75% by Lazard and 25% by Elaia; Elaia continues to operate and raise funds under its own brand.",
    leadership: [
      { name: "Xavier Lazarus", role: "Managing Partner and co-founder", profileSlug: "xavier-lazarus" },
      { name: "Pauline Roux", role: "Managing Partner", profileSlug: "pauline-roux" },
      { name: "Anne-Sophie Carrese", role: "Managing Partner", profileSlug: "anne-sophie-carrese" },
      { name: "Philippe Gire", role: "Partner and co-founder", profileSlug: "philippe-gire" },
      { name: "Marc Rougier", role: "Partner", profileSlug: "marc-rougier" },
    ],
    timeline: [
      { year: "2002", event: "Elaia Partners co-founded in Paris by Philippe Gire and Xavier Lazarus." },
      { year: "2006", event: "Seed investment in Criteo; Elaia followed the company until a year after its IPO." },
      { year: "2013", event: "Criteo goes public on Nasdaq at a USD 2bn valuation, Elaia's best-known exit." },
      { year: "2017", event: "Anne-Sophie Carrese joins to build the deep tech seed activity; she structures the PSL Innovation fund with Université PSL and co-creates the Elaia Alpha 2 digital seed fund with Inria." },
      { year: "2017", event: "Teads, an Elaia portfolio company, is sold to Altice." },
      { year: "2024", event: "April: Lazard acquires a minority stake in Elaia and the two launch Lazard Elaia Capital, a Paris-based technology growth-equity management company owned 75% by Lazard and 25% by Elaia, led by Xavier Lazarus. The agreement gives Lazard an option to buy up to 100% of Elaia over time." },
      { year: "2025", event: "January: Florian Denis and Clément Vanden Driessche appointed Partners." },
      { year: "2026", event: "March: final close of Deep Tech Seed 3 (DTS3) at EUR 134 million, above its EUR 120 million target; firm reports approximately EUR 850 million under management." },
    ],
    holdings: [],
    signatureExit: "Criteo (IPO, Nasdaq 2013)"
  },
  {
    slug: "breega",
    name: "Breega",
    short: "Breega",
    website: "https://www.breega.com",
    founded: 2015,
    hq: "Paris, France",
    aum: "EUR 700M (under management, stated on breega.com)",
    sectors: ["Fintech", "SaaS", "Climate Technology", "Deep Tech"],
    thesis: "Breega is a founder-led European and African venture capital firm headquartered in Paris that backs companies from pre-seed to Series A and above in digital, climate and deep tech. It runs a multi-geography structure: Paris and a London office opened around 2018, a Barcelona office opened alongside its EUR 250 million fund in 2022, and an Africa practice launched in 2024 with Breega Africa Seed I and offices in Lagos and Cape Town covering Nigeria, Egypt, South Africa, Kenya, Morocco, Senegal, Ivory Coast and Cameroon. The firm says it only hires people who have built or scaled a company, and it staffs an in-house operational team (talent, marketing, finance, legal) that works with portfolio companies. Its limited partners have included Bpifrance, the European Investment Fund, Isomer Capital, banks and insurers, and the African Development Bank in the Africa fund.",
    leadership: [
      { name: "Ben Marrel", role: "Cofounder & CEO", profileSlug: "ben-marrel" },
      { name: "François Paulus", role: "Cofounder & Executive Chairman", profileSlug: "francois-paulus" },
      { name: "Maximilien Bacot", role: "Cofounder & COO", profileSlug: "maximilien-bacot" },
    ],
    timeline: [
      { year: "2015", event: "Breega launches its first fund, a EUR 45 million seed and Series A vehicle backed by around 100 entrepreneurs and Bpifrance. The firm's own site dates its founding to 2015; Maddyness dates the creation of the company to 2013." },
      { year: "2021", event: "March: close of Breega Capital Venture 3 at USD 130 million (EUR 110 million), with Bpifrance, the European Investment Fund and Isomer Capital among LPs." },
      { year: "2022", event: "June: EUR 250 million fund closed, the firm's fourth and largest at the time, taking AUM to about EUR 500 million; Barcelona office opened." },
      { year: "2023", event: "October: first close of EUR 75 million on a third-generation European seed fund targeting EUR 150 million, with roughly a third earmarked for the UK." },
      { year: "2024", event: "June: launch of Breega Africa Seed I (EUR 75 million, reported as USD 75 million in some headlines) with new offices in Lagos and Cape Town; the African Development Bank later committed EUR 7.5 million." },
    ],
    holdings: [],
    signatureExit: null
  },
  {
    slug: "atlantic-labs",
    name: "Atlantic Labs",
    short: "Atlantic",
    website: "https://atlantic.vc",
    founded: 2016,
    hq: "Berlin, Germany",
    aum: "Not publicly disclosed (no fund size or AUM figure published on atlantic.vc; SFDR page names Atlantic Labs 3 and Atlantic Labs 4 GmbH & Co. KG without amounts)",
    sectors: ["AI", "Deep Tech", "Climate", "Robotics", "Space"],
    thesis: "Atlantic leads pre-seed rounds across Europe, usually as a company's first institutional investor, and states it has backed over 200 teams as first-round lead. The firm organises its current focus around four themes it names on its approach page: AI & Compute, Energy & Climate, Industrial & Robotics, and Space & Security, and says it also backs ideas that do not fit existing venture categories. Its SFDR disclosure describes Atlantic Labs 4 as targeting AI and data, industrial tech and robotics, climate and energy tech, and space and resilience tech, while the earlier Atlantic Labs 3 also covered digital health, future of work, mobility, fintech and proptech. Both funds explicitly exclude food and food-value-chain business models, which are handled by the separate FoodLabs vehicle.",
    leadership: [
      { name: "Christophe F. Maire", role: "Founder and Managing Director", profileSlug: "christophe-f-maire" },
      { name: "Marc-Olivier Lücke", role: "Co-Founder and Managing Director", profileSlug: "marc-olivier-lucke" },
    ],
    timeline: [
      { year: "2016", event: "Marc-Olivier Lücke joins Christophe Maire to establish Atlantic as an institutional fund manager; the firm's roots are in Maire's earlier angel investing" },
      { year: "2021", event: "Portfolio company Cluno, a Munich car-subscription startup, is acquired by UK online car retailer Cazoo" },
      { year: "2026", event: "Firm operates publicly under the atlantic.vc brand from Rosenthaler Str. 13, Berlin; legal manager entity remains Atlantic Labs Manager GmbH (Amtsgericht Berlin-Charlottenburg HRB 150308B)" },
    ],
    holdings: [],
    signatureExit: "Cluno (acquired by Cazoo, 2021)"
  },
  {
    slug: "uvc-partners",
    name: "UVC Partners",
    short: "UVC Partners",
    website: "https://www.uvcpartners.com",
    founded: 2011,
    hq: "Munich, Germany",
    aum: "EUR 800M (assets under management, stated on uvcpartners.com)",
    sectors: ["Deep Tech", "B2B Software", "Climate Technology", "Mobility", "AI"],
    thesis: "UVC Partners invests in European B2B technology startups from pre-seed through Series A and beyond, writing initial cheques of EUR 0.5m to EUR 10m and up to roughly EUR 30m per company over time. The firm concentrates on deep tech, climate tech, mobility and software/AI, with portfolio companies including Isar Aerospace, Proxima Fusion, KONUX, TWAICE, FINN, Flix and Aleph Alpha. It says it has made more than one hundred B2B investments with more than thirty exits, and works out of Munich (registered seat in Garching) and Berlin. Its funds are supported by the European Investment Fund, and portfolio companies are given access to the UnternehmerTUM network at TU Munich.",
    leadership: [
      { name: "Prof. Dr. Helmut Schönenberger", role: "Managing Partner", profileSlug: "helmut-schoenenberger" },
      { name: "Dr. Ingo Potthof", role: "Managing Partner", profileSlug: "ingo-potthof" },
      { name: "Johannes von Borries", role: "Managing Partner", profileSlug: "johannes-von-borries" },
    ],
    timeline: [
      { year: "2011", event: "Founded near Munich; the management company is entered in the commercial register on 22 June 2011 (Amtsgericht München HRB 192643) under the name UnternehmerTUM-Fonds Management GmbH, later renamed Unternehmertum Venture Capital Partners GmbH" },
      { year: "2017", event: "Benjamin Erhart joins as Partner from High-Tech Gründerfonds; Alexander Kiltz also joins" },
      { year: "2019", event: "Berlin office opened" },
      { year: "2021", event: "Fund III reaches EUR 255m, with LPs including the FlixBus founders, LANXESS AG and German family offices" },
      { year: "2023", event: "Exits fleet-management company Vimcar to Battery Ventures, which merges it with Avrios" },
      { year: "2024", event: "Fund IV closes at EUR 250m in six months, the firm's fastest raise to date; UnternehmerTUM's announcement describes UVC as an 'unabhängiger Partner von UnternehmerTUM'" },
      { year: "2026", event: "Fund IV expanded to EUR 400m with added growth capital, taking total assets under management to about EUR 800m" },
    ],
    holdings: [],
    signatureExit: "Vimcar (acquired by Battery Ventures, 2023)"
  },
  {
    slug: "ananda-impact-ventures",
    name: "Ananda Impact Ventures",
    short: "Ananda",
    website: "https://ananda.vc",
    founded: 2009,
    hq: "Munich, Germany",
    aum: "EUR 270M (across five funds, stated on ananda.vc)",
    sectors: ["Healthcare", "Climate", "Education", "Sustainability", "Digital Health"],
    thesis: "Ananda backs European pre-seed, seed and Series A companies with initial cheques of EUR 0.5m to EUR 3m and up to EUR 8m over a company's life, leading rounds and focusing on the DACH region, the UK, Benelux and the Nordics. Its mandate is impact investing rather than a single sector: its funds are classified SFDR Article 9, and it pioneered with the European Investment Fund an 'Impact Carry' model that scales carried interest from 0 to 20 percent according to how far portfolio companies hit their impact KPIs. In practice it invests in healthcare and digital health, education, climate and decarbonisation, nature and biodiversity, biosecurity, the blue economy and future-of-work businesses, with companies such as Open Bionics, IESO Digital Health, OroraTech, Auticon, Klim and Resourcify. The firm says it has made 48 investments and manages EUR 270m across five funds.",
    leadership: [
      { name: "Johannes Weber", role: "General Partner and Founder", profileSlug: "johannes-weber" },
      { name: "Florian Erber", role: "General Partner and Founder", profileSlug: "florian-erber" },
      { name: "Bernd Klosterkemper", role: "Partner", profileSlug: "bernd-klosterkemper" },
      { name: "Zoe Peden", role: "Partner", profileSlug: "zoe-peden" },
    ],
    timeline: [
      { year: "2009", event: "Johannes Weber and Florian Erber start the firm, positioned as Germany's first impact investment fund with pan-European reach" },
      { year: "2010", event: "First fund raised at EUR 7.3m under the name Social Venture Fund; the management company is registered in Munich on 27 January 2010 as Social Venture Management GmbH (Amtsgericht München HRB 183698)" },
      { year: "2014", event: "Second fund closes at EUR 22.3m, backed by the EIF, entrepreneur families, foundations and HypoVereinsbank; the investor renames itself from Social Venture Fund to Ananda Social Venture Fund" },
      { year: "2018", event: "Third fund closes at EUR 50m on 22 October, with the EIF and Big Society Capital as LPs" },
      { year: "2022", event: "Fourth Core Impact Fund reaches its hard cap of EUR 108m on 19 May, backed by the EIF, KfW Capital, Investcorp/Tages, Candriam and family offices; AUM about EUR 200m at the time" },
      { year: "2026", event: "Fund V announces a EUR 73m first close on 19 January, the largest first close in the firm's history" },
    ],
    holdings: [],
    signatureExit: "Kinderzentren Kunterbunt (acquired by publisher Klett; year not disclosed)"
  },
  {
    slug: "rubio-impact-ventures",
    name: "Rubio Impact Ventures",
    short: "Rubio",
    website: "https://rubio.vc",
    founded: 2014,
    hq: "Amsterdam, Netherlands",
    aum: "EUR 250M (assets under management, stated on rubio.vc)",
    sectors: ["Climate", "Sustainability", "Food & Agriculture", "Healthcare", "Workforce Development"],
    thesis: "Rubio is an Amsterdam-based early-stage and growth impact venture fund that backs European founders whose commercial model is inseparable from a measurable social or environmental outcome. It organises its portfolio around two themes it calls Planet Paradise (CO2 reduction, biodiversity, resource circularity, energy and agrifood) and People Power (education, health and wellbeing, income generation and inclusion). Its defining mechanic is the Aligned Impact Model: 100% of carried interest sits behind impact hurdles before financial ones, an arrangement first developed with the European Investment Fund in 2014. It writes tickets of EUR 0.5M to EUR 2.5M at seed and Series A for typically 10-20% ownership, reserving up to EUR 10M of follow-on per company.",
    leadership: [
      { name: "Willemijn Verloop", role: "Founding Partner", profileSlug: "willemijn-verloop" },
      { name: "Machtelt Groothuis", role: "Founding Partner", profileSlug: "machtelt-groothuis" },
      { name: "Helmer Schukken", role: "Managing Partner", profileSlug: "helmer-schukken" },
      { name: "Tijl Hoefnagels", role: "Partner", profileSlug: "tijl-hoefnagels" },
    ],
    timeline: [
      { year: "2014", event: "Firm founded in Amsterdam as Social Impact Ventures NL by Willemijn Verloop and Machtelt Groothuis; Helmer Schukken and Warner Philips are also named as founders in EIF and Dutch press accounts." },
      { year: "2014", event: "Impact-linked carried interest methodology co-developed with the European Investment Fund, tying the manager's reward to impact hurdles." },
      { year: "2015", event: "Fund I launched; the EIF describes Rubio as one of the first movers in the European impact market." },
      { year: "2020", event: "Renamed from Social Impact Ventures to Rubio Impact Ventures, announced alongside the EUR 55M first close of Fund II (EIF committed EUR 20M under EFSI)." },
      { year: "2020", event: "Fund II reaches final close at EUR 110M, taking assets under management to roughly EUR 150M; LPs include EIF, ASR, Triodos Green Fund, Candriam and Dutch family offices." },
      { year: "2022", event: "Ilonka Jankovich joins as Venture Partner to lead the People Power team, after serving on Rubio's Advisory Board since 2019." },
      { year: "2023", event: "Charlie Macdonald joins the climate team as Investment Manager from World Fund, having earlier helped launch Australia's first impact VC fund, Giant Leap." },
      { year: "2025", event: "Fund III closes with over EUR 70M in commitments (announced 4 November 2025); investors include the EIF, Invest-NL, Oost NL, Brabantse Ontwikkelingsmaatschappij, ING Social Impact Investments, NN Social Innovation Fund and RVO." },
    ],
    holdings: [],
    signatureExit: null
  },
  {
    slug: "kurma-partners",
    name: "Kurma Partners",
    short: "Kurma",
    website: "https://www.kurmapartners.com",
    founded: 2009,
    hq: "Paris, France",
    aum: "EUR 1B (across all Kurma franchises, stated in the firm's Biofund IV closing release, April 2026)",
    sectors: ["Biotech", "Life Sciences", "Therapeutics", "Digital Health"],
    thesis: "Kurma Partners is a French healthcare venture capital firm founded in Paris in July 2009 that turns academic science into biotech and medtech companies, with a second office in Munich. It runs three franchises: Biofund (therapeutics, funds I to IV), Diagnostics (diagnostics and digital health, funds I and II) and Growth Opportunities (later-stage healthcare), alongside the Paris Saclay Seed Fund. The firm says it has financed 72 companies and founded 25 of them since 2009, working with European academic research institutions from company creation through expansion. Kurma is a wholly owned company of the Eurazeo group: Eurazeo bought a 70.6% majority in 2021 and acquired the remaining capital on 30 April 2025, while Kurma keeps its own brand and investment teams.",
    leadership: [
      { name: "Thierry Laugel", role: "Managing Partner, Biofund (co-founder)", profileSlug: "thierry-laugel" },
      { name: "Rémi Droller", role: "Managing Partner, Biofund", profileSlug: "remi-droller" },
      { name: "Jean-François Rivassou", role: "Partner, Growth Opportunities", profileSlug: "jean-francois-rivassou" },
      { name: "Amanda Gett", role: "Partner, Biofund", profileSlug: "amanda-gett" },
      { name: "Benjamin Belot", role: "Partner, Diagnostic", profileSlug: "benjamin-belot" },
    ],
    timeline: [
      { year: "2009", event: "Kurma Partners founded in Paris in July by Thierry Laugel and partners; Kurma Biofund I raised at EUR 51 million." },
      { year: "2010", event: "Rémi Droller joins from AGF Private Equity as a partner on the Biofund franchise." },
      { year: "2013", event: "Kurma Biofund II closed at EUR 55 million." },
      { year: "2015", event: "Kurma Diagnostics launched at EUR 35 million; Alain Horvais and Philippe Peltier appointed Partners to manage it." },
      { year: "2017", event: "Paris Saclay Seed Fund raised at EUR 53 million." },
      { year: "2018", event: "Kurma Biofund III closed at EUR 160 million." },
      { year: "2019", event: "January: Munich office opened, led by newly appointed partner Dr Peter Neubeck." },
      { year: "2021", event: "Eurazeo acquires a 70.6% majority stake in Kurma Partners; Kurma Diagnostics II closed at EUR 83 million; Jean-François Rivassou joins as Partner for later-stage investments." },
      { year: "2024", event: "Kurma Growth Opportunities (EUR 167 million) and the first close of Kurma Biofund IV (EUR 158 million) reported on the firm's funds page." },
      { year: "2025", event: "30 April: Eurazeo acquires the remaining capital of Kurma Partners, taking it to 100% ownership. 22 October: Kurma, a founding investor, announces the sale of ImCheck Therapeutics to Ipsen for EUR 350 million upfront and up to EUR 1 billion." },
      { year: "2026", event: "24 April: final close of Kurma Biofund IV at EUR 215 million with Eurazeo, CSL, the European Investment Fund and Bpifrance as investors; the firm states total assets of EUR 1 billion." },
    ],
    holdings: [],
    signatureExit: "ImCheck Therapeutics (acquired by Ipsen, 2025)"
  },
  {
    slug: "vives-partners",
    name: "VIVES Partners",
    short: "VIVES Partners",
    website: "https://www.vivesfund.com",
    founded: 2004,
    hq: "Wavre, Belgium",
    aum: "EUR 128M (funds under management, stated on vivesfund.com)",
    sectors: ["Life Sciences", "Biotech", "Agritech", "Medical Devices", "Deep Tech"],
    thesis: "VIVES Partners manages the VIVES family of early-stage technology funds, which were initiated by UCLouvain in 2004 and originally managed by the university's technology transfer company, Sopartec. It invests in research-based ventures with strong intellectual property, concentrating on life sciences, agricultural technology and hard engineering, and takes tickets from EUR 0.1M to EUR 7M from seed through Series A. Its current vehicle, the VIVES Inter-University Fund, is a cross-border fund built with five partner universities - UCLouvain, KU Leuven, Université de Paris, Wageningen University and the University of Luxembourg - and also backs non-university European start-ups outside Switzerland and the UK. Investment activity was separated from Sopartec at the start of 2024 into the independent management company VIVES Partners SRL in Wavre.",
    leadership: [
      { name: "Philippe Durieux", role: "Managing Partner", profileSlug: "philippe-durieux" },
      { name: "André Vandemeulebroecke", role: "Partner", profileSlug: "andre-vandemeulebroecke" },
      { name: "Yannick Vancoppenolle", role: "Partner", profileSlug: "yannick-vancoppenolle" },
      { name: "Sandra Schoors", role: "Partner", profileSlug: "sandra-schoors" },
      { name: "Gilles Dufour", role: "Partner", profileSlug: "gilles-dufour" },
    ],
    timeline: [
      { year: "2004", event: "VIVES I created at the initiative of UCLouvain, a EUR 15M seed fund for high-tech start-ups, with BNP Paribas Fortis Private Equity Belgium, the EIF and KBC Private Equity among its backers." },
      { year: "2011", event: "VIVES II closes its first financing round at EUR 43M, described at the time as the largest European investment fund ever initiated by a university; managed by Sopartec S.A., UCLouvain's technology transfer company." },
      { year: "2020", event: "VIVES Inter-University Fund (VIVES IUF, also referred to as VIVES III) launched on 2 July with EUR 32M and five partner universities: UCLouvain, KU Leuven, Université de Paris, Wageningen Universiteit and Université du Luxembourg. Investors included Sopartec, SFPI-FPIM, ING Belgique, BNPP Fortis Private Equity Belgium, regional invests and the fund's own investment team." },
      { year: "2024", event: "VIVES IUF announces a second closing bringing the fund to EUR 70M, with EUR 25M committed by the European Investment Fund; the fund can now invest up to EUR 7M per company." },
      { year: "2024", event: "Roles split from Sopartec at the start of the year: VIVES Partners SRL is incorporated in Wavre on 3-4 January 2024 with Philippe Durieux, Yannick Vancoppenolle and André Vandemeulebroecke as directors, and Durieux steps down after more than 15 years leading Sopartec (succeeded by Xavier Bastin) to run VIVES Partners." },
      { year: "2025", event: "Portfolio company The Akkermansia Company acquired by Danone." },
    ],
    holdings: [],
    signatureExit: "The Akkermansia Company (acquired by Danone, 2025)"
  },
  {
    slug: "wellington-partners",
    name: "Wellington Partners",
    short: "Wellington Ptnrs",
    website: "https://wellington-partners.com",
    founded: 1998,
    hq: "Munich, Germany",
    aum: "EUR 210M (WPLS V, latest fund, closed 2017; no total AUM published)",
    sectors: ["Life Sciences", "Therapeutics", "Medical Devices", "Digital Health", "Biotech"],
    thesis: "Wellington Partners is a European venture capital firm founded in 1998 that invests in early- and growth-stage life science companies, with offices in Munich and Zurich. It backs therapeutics, medical devices, diagnostics, digital health and industrial biotechnology, writing tickets of roughly EUR 2 million to EUR 20 million from early stage through expansion, plus selected PIPE investments. Its life science funds run from WP I (1998) through WPLS V, which closed at EUR 210 million; the firm reports 58 life science investments and 27 exits, IPOs and trade sales. Wellington Partners historically also ran a technology practice that deployed about EUR 640 million into more than 100 European companies including Spotify, FreeNow and Xing, but it states that it no longer makes new technology investments.",
    leadership: [
      { name: "Dr. Rainer Strohmenger", role: "Managing Partner", profileSlug: "rainer-strohmenger" },
      { name: "Dr. Johannes Fischer", role: "Managing Partner", profileSlug: "johannes-fischer" },
      { name: "Harald Keller", role: "Managing Partner, CFO", profileSlug: "harald-keller" },
      { name: "Ernst Mannheimer", role: "Managing Partner, Legal Counsel", profileSlug: "ernst-mannheimer" },
    ],
    timeline: [
      { year: "1998", event: "Wellington Partners founded; first fund WP I closed at EUR 10 million allocated to life science, funding 9 life science investments." },
      { year: "2000", event: "WP II closed with EUR 35 million for life science, funding 4 life science investments." },
      { year: "2007", event: "Wellington Partners Life Science Fund III (WPLS III) closed at EUR 78 million." },
      { year: "2012", event: "WPLS IV closed at EUR 85 million." },
      { year: "2017", event: "WPLS V closed at EUR 210 million, the firm's largest fund; investors include the European Investment Fund and the European Investment Bank alongside family offices, trusts and insurance companies." },
      { year: "2023", event: "Johannes Fischer and Varun Gupta promoted to Partner." },
      { year: "2025", event: "Portfolio company ImCheck Therapeutics acquired by Ipsen; Regina Hodits moved from Managing Partner to Venture Advisor." },
    ],
    holdings: [],
    signatureExit: "Actelion (acquired by Johnson & Johnson, 2017)"
  },
  {
    slug: "beenext",
    name: "BEENEXT",
    short: "BEENEXT",
    website: "https://www.beenext.com",
    founded: 2015,
    hq: "Singapore, Singapore",
    aum: "1,300億円 (approx. JPY 130bn; total AUM across all BEENEXT funds after ALL STAR SAAS FUND THREE, per BRIDGE, Aug 2023)",
    sectors: ["Fintech", "SaaS", "Mobility", "Sustainability"],
    thesis: "BEENEXT is an early-stage venture firm founded in Singapore in 2015 by Teruhide Sato, who had previously co-founded and taken public the Tokyo-listed internet group BEENOS. It describes itself as \"a partnership of the founders, by the founders, and for the founders\" and invests primarily in India, Southeast Asia and Japan, with additional activity in the United States. The firm runs several fund families under one manager, BEENEXT Capital Management Pte. Ltd., including the BEENEXT and BEENEXT ASIA funds, the BEE ACCELERATE funds and the Japan-focused ALL STAR SAAS FUND. Its stated portfolio spans more than 180 companies across 17 countries.",
    leadership: [
      { name: "Teruhide Sato", role: "Founder & CEO", profileSlug: "teruhide-sato" },
      { name: "Dirk Van Quaquebeke", role: "Managing Partner", profileSlug: "dirk-van-quaquebeke" },
      { name: "Hiro Maeda", role: "Managing Partner", profileSlug: "hiro-maeda" },
      { name: "Hero Choudhary", role: "Managing Partner", profileSlug: "hero-choudhary" },
      { name: "Nao Ito", role: "Operating Partner", profileSlug: "nao-ito" },
    ],
    timeline: [
      { year: "2015", event: "Teruhide Sato founds BEENEXT in Singapore after resigning as CEO of BEENOS; BEENEXT Capital Management Pte. Ltd. established April 2015 and the first fund reaches a first close of US$60M in July (BRIDGE)." },
      { year: "2017", event: "BEENEXT raises a new fund of more than US$75M for fintech, platforms, payments and SaaS, and signals plans to build out its own asset management business (BRIDGE)." },
      { year: "2020", event: "Closes two new funds totalling US$160M: the BEENEXT Emerging Asia Fund (US$110M, about half earmarked for India) and a US$50M Japan SaaS fund." },
      { year: "2023", event: "BEENEXT ASIA FUND2 begins operations in March; ALL STAR SAAS FUND THREE closes at about ¥157億 (US$110M), taking BEENEXT's total assets under management above ¥1,300億 (BRIDGE)." },
      { year: "2025", event: "Japan's JICT (海外通信・放送・郵便事業支援機構) executes a commitment of up to US$2.8M to BEENEXT ASIA FUND2, alongside the Panasonic Kurashi Visionary Fund co-managed with SBI Investment." },
    ],
    holdings: [],
    signatureExit: null
  },
  {
    slug: "monks-hill-ventures",
    name: "Monk's Hill Ventures",
    short: "Monk's Hill",
    website: "https://www.monkshill.com",
    founded: 2014,
    hq: "Singapore, Singapore",
    aum: "Not publicly disclosed (Fund III closed at US$200M, reported by DealStreetAsia and e27, April 2023)",
    sectors: ["Fintech", "SaaS", "Logistics", "Digital Health", "Edtech"],
    thesis: "Monk's Hill Ventures is a Singapore-headquartered venture firm founded in 2014 by Peng T. Ong and Kuo-Yi Lim that backs Southeast Asian technology founders at pre-Series A and Series A. It runs a deliberately sector-agnostic mandate, and its published portfolio clusters in fintech and lending, B2B SaaS, logistics, health technology and education technology across Singapore, Indonesia, Vietnam, Malaysia, Thailand and the Philippines. The firm says it has invested in more than 50 startups since its first fund and operates from offices in Singapore, Ho Chi Minh City and Jakarta. It has told regional press that it deliberately raises modest fund sizes, and it runs founder-facing programmes it calls SEA Connect and the Angsana Council.",
    leadership: [
      { name: "Kuo-Yi Lim", role: "Co-Founder and Managing Partner", profileSlug: "kuo-yi-lim" },
      { name: "Peng T. Ong", role: "Co-Founder and Managing Partner", profileSlug: "peng-t-ong" },
      { name: "Justin Nguyen", role: "General Partner", profileSlug: "justin-nguyen" },
      { name: "Susli Lie", role: "Partner", profileSlug: "susli-lie" },
    ],
    timeline: [
      { year: "2014", event: "Monk's Hill Ventures founded by Peng T. Ong and Kuo-Yi Lim; the firm dates its track record from the raising of its first fund in 2014." },
      { year: "2016", event: "Maiden fund holds final close at US$85M, above its US$80M target; LPs reported to include Cisco, Temasek, Telstra and YJ Capital (DealStreetAsia)." },
      { year: "2019", event: "Fund II closes at US$100M, below its original target, backed by US and international endowments, foundations and family offices; publicly confirmed in March 2020 (KrASIA, DealStreetAsia)." },
      { year: "2023", event: "Fund III holds final close at US$200M in April; the US International Development Finance Corporation had approved a US$25M commitment (DealStreetAsia, e27)." },
      { year: "2023", event: "Portfolio company Horangi Cyber Security is acquired by Bitdefender; the deal was announced in June 2023 and Monk's Hill is named as a selling shareholder alongside Provident Growth." },
    ],
    holdings: [],
    signatureExit: "Horangi (acquired by Bitdefender, 2023)"
  },
  {
    slug: "wavemaker-partners",
    name: "Wavemaker Partners",
    short: "Wavemaker",
    website: "https://wavemakerpartners.com",
    founded: 2012,
    hq: "Singapore, Singapore",
    aum: "US$500M (total assets under management, stated on wavemaker.vc)",
    sectors: ["Enterprise Software", "Deep Tech", "Sustainability"],
    thesis: "Wavemaker Partners is an early-stage venture firm operating out of Singapore and Los Angeles that invests in Enterprise, Deep Tech and Sustainability companies in Southeast Asia. Its stated approach is contrarian value: it frames opportunity as 'Value minus Perception' and looks for revenue-generating businesses it considers undervalued relative to global comparables, led by founders with a specific industry or technology insight. The firm says it has made over 200 investments since 2012 and that its portfolio has produced exits worth more than US$2B in enterprise value. Wavemaker Partners is the umbrella for several distinct vehicles: the early-stage Wavemaker Ventures funds (the Wavemaker Pacific fund series) which are the core of this record, the growth-stage Wavemaker Growth, the climate-tech venture builder Wavemaker Impact, and the non-profit Wavecrest; Wavemaker 360 Health is a separate healthcare vehicle in the wider Wavemaker family. It is unrelated to Wavemaker Global, the WPP media agency network.",
    leadership: [
      { name: "Paul Santos", role: "Founding Partner", profileSlug: "paul-santos" },
      { name: "Eric Manlunas", role: "Co-founder and General Partner", profileSlug: "eric-manlunas" },
      { name: "Andy Hwang", role: "General Partner", profileSlug: "andy-hwang" },
    ],
    timeline: [
      { year: "2003", event: "Eric Manlunas launches Frontera Group in Los Angeles, a US$8.3M angel vehicle anchored by his own capital that becomes the predecessor to Wavemaker Partners (Los Angeles Business Journal)." },
      { year: "2012", event: "Paul Santos establishes the Singapore-headquartered Southeast Asia business; the firm dates its regional record from this year - 'Since 2012, we have made over 200 investments' (wavemaker.vc)." },
      { year: "2019", event: "Portfolio company Wavecell is acquired by US-listed 8x8 in a deal worth US$125M." },
      { year: "2020", event: "Third Southeast Asia fund closes at US$111M, above target (DealStreetAsia; Bloomberg, July 2020)." },
      { year: "2021", event: "Wavemaker Impact, described as Southeast Asia's first climate-tech venture builder, is launched in October with a US$25M target for its first fund (DealStreetAsia, TechCrunch)." },
      { year: "2022", event: "Fourth Southeast Asia fund closes at US$136M in March, surpassing its initial target (DealStreetAsia)." },
      { year: "2024", event: "Wavemaker Pacific 5, the fifth Southeast Asia fund, is reported in January to be raising against a US$150M target (DealStreetAsia, citing a US regulatory filing)." },
      { year: "2024", event: "Wavemaker Growth announces a US$30M first close of its Growth Opportunities Fund on 13 November, targeting US$60M with a US$100M hard cap for Series B and later rounds." },
    ],
    holdings: [],
    signatureExit: "Wavecell (acquired by 8x8, 2019)"
  },
  {
    slug: "openspace-ventures",
    name: "Openspace Capital",
    short: "Openspace",
    website: "https://www.openspacecapital.com",
    founded: 2014,
    hq: "Singapore, Singapore",
    aum: "US$800M (committed capital across 6 funds, stated on openspacecapital.com)",
    sectors: ["Consumer", "Fintech", "Healthcare", "SaaS", "Sustainability"],
    thesis: "Openspace was founded in Singapore in 2014 as NSI Ventures, the venture arm of private equity firm Northstar Group, and became independent under the Openspace Ventures name in 2018. It backs tech-native and tech-enabled companies in Southeast Asia, and its published portfolio is grouped into consumer, finance, health, agriculture, SaaS and sustainability. The manager now runs several strategies alongside its Openspace Ventures early-stage funds: Openspace Growth for Series C and D, Ocular for frontier technology and digital assets, Onyx for growth credit and Orbit for listed small and mid caps; it renamed itself Openspace Capital in 2025 to reflect that shift. It states US$800M in committed capital across six funds and operates from Singapore with people in Indonesia, Thailand, the Philippines, Vietnam and Malaysia.",
    leadership: [
      { name: "Shane Chesson", role: "Founding Partner", profileSlug: "shane-chesson" },
      { name: "Hian Goh", role: "Founding Partner", profileSlug: "hian-goh" },
      { name: "Jessica Huang Pouleur", role: "Partner", profileSlug: "jessica-huang-pouleur" },
    ],
    timeline: [
      { year: "2014", event: "Founded in Singapore as NSI Ventures, the venture capital arm of private equity firm Northstar Group, by Shane Chesson and Hian Goh." },
      { year: "2017", event: "First close announced on a US$125M second fund while still part of Northstar (TechCrunch, December 2017)." },
      { year: "2018", event: "RENAME: NSI Ventures rebrands as Openspace Ventures and separates from Northstar Group to operate as an independent Southeast Asia venture manager (announced 25-26 April 2018; DealStreetAsia, TechCrunch). Northstar co-founder Patrick Walujo stays on as a senior advisor for Indonesia." },
      { year: "2018", event: "Fund II closes at its US$135M hard cap in August; LPs include Temasek and StepStone (PR Newswire, KrASIA)." },
      { year: "2021", event: "Fund III closes at its US$200M hard cap on 12 March, taking the firm to US$425M across three funds; LPs include Temasek, StepStone, Sofina, DEG, Norfund, 57 Stars and Mizuho." },
      { year: "2022", event: "OSV+, the growth-stage fund, reaches final close at US$200M in April; it is later renamed Openspace Growth (DealStreetAsia)." },
      { year: "2024", event: "OSV IV, the fourth early-stage fund, holds final close at US$163M on 19 November, with the Japan International Cooperation Agency among the LPs." },
      { year: "2025", event: "RENAME: the manager is renamed Openspace Capital as it adds Orbit, a listed-equities strategy run with Perennial Partners targeting SGD 500M, and Onyx, a growth-credit strategy targeting US$200M, and opens a Hong Kong office (Mergermarket/ION Analytics, 17 September 2025)." },
    ],
    holdings: [],
    signatureExit: "GoTo (IPO, 2022)"
  },
  {
    slug: "stellaris-venture-partners",
    name: "Stellaris Venture Partners",
    short: "Stellaris",
    website: "https://stellarisvp.com",
    founded: 2017,
    hq: "Bengaluru, India",
    aum: "$600M+ (across three funds, stated on stellarisvp.com; Fund III closed at $300M in Nov 2024)",
    sectors: ["AI", "SaaS", "Consumer", "Fintech", "Healthcare"],
    thesis: "Stellaris Venture Partners is an early-stage, technology-focused and sector-agnostic Indian venture firm founded by three former Helion Venture Partners investors – Alok Goyal, Ritesh Banglani and Rahul Chowdhri. It leads seed and Series A rounds, writing seed cheques of roughly $1-3M and Series A cheques of roughly $3-10M, and says about 60% of its investments are made at idea stage. The firm organises its team around sector specialisation across software and AI, consumer tech and brands, fintech, healthcare and sustainability. Fund III, closed in November 2024 at $300M, is being deployed into at least 30 companies with a stated emphasis on consumer, AI and deeptech.",
    leadership: [
      { name: "Alok Goyal", role: "Co-founder and Partner", profileSlug: "alok-goyal" },
      { name: "Ritesh Banglani", role: "Co-founder and Partner", profileSlug: "ritesh-banglani" },
      { name: "Rahul Chowdhri", role: "Co-founder and Partner", profileSlug: "rahul-chowdhri" },
      { name: "Naman Lahoty", role: "Partner", profileSlug: "naman-lahoty" },
    ],
    timeline: [
      { year: "2016", event: "Alok Goyal, Ritesh Banglani and Rahul Chowdhri, all previously partners at Helion Venture Partners, begin raising the firm out of Bengaluru; the firm's own site describes starting \"in a Bengaluru basement\" in 2016." },
      { year: "2017", event: "Launches its first fund of $90M (firm's own approach page); IFC was among the disclosed investors in Stellaris Venture Partners India I." },
      { year: "2021", event: "Closes Fund II at $225M and backs 25 companies from it." },
      { year: "2023", event: "Portfolio company Mamaearth (Honasa Consumer Ltd) completes its IPO on the Indian exchanges." },
      { year: "2024", event: "Closes Fund III at $300M in November, taking assets under management above $600M; Naman Lahoty elevated to Partner." },
    ],
    holdings: [],
    signatureExit: "Mamaearth / Honasa Consumer (IPO, 2023)"
  },
  {
    slug: "arkam-ventures",
    name: "Arkam Ventures",
    short: "Arkam Ventures",
    website: "https://arkamvc.com",
    founded: null,
    hq: "Bengaluru, India",
    aum: "$106M (Fund I final close, April 2022; Fund II launched 2023 with a $180M target, no final close published)",
    sectors: ["AI", "Fintech", "SaaS", "Deep Tech", "Manufacturing"],
    thesis: "Arkam Ventures is an early-stage Indian venture firm co-founded by Rahul Chandra and Bala Srinivasa that leads or co-leads rounds with cheques of $1M-$5M and says it backs no more than six to eight companies a year. Its original thesis was the \"digitalisation of Middle India\" – companies serving the several hundred million Indians earning roughly Rs 3-20 lakh a year, built on India's public digital infrastructure of Aadhaar, eKYC and UPI. The firm's current site frames the same approach as non-consensus early bets across AI, fintech, SaaS, deeptech, manufacturing and spacetech. Its investment manager is Unitary Investment Management LLP and its two SEBI-registered Category II AIF vehicles are named Unitary Fund and Unitary Fund II.",
    leadership: [
      { name: "Rahul Chandra", role: "Managing Director and Co-founder", profileSlug: "rahul-chandra" },
      { name: "Bala Srinivasa", role: "Managing Director", profileSlug: "bala-srinivasa" },
    ],
    timeline: [
      { year: "2017", event: "Rahul Chandra, then co-head of Helion Venture Partners, launches a new early-stage fund under the name Unitary Helion targeting $100M (about Rs 650 crore) (Business Standard, May 2017)." },
      { year: "2019", event: "Unitary Fund is registered with SEBI as a Category II Alternative Investment Fund (IN/AIF2/18-19/0644), effective 8 March 2019." },
      { year: "2020", event: "The firm rebrands from Unitary Helion to Arkam Ventures and announces a first close of its debut fund at INR 3.25 billion (June 2020)." },
      { year: "2022", event: "Announces the final close of Fund I at $106M in April; investors include British International Investment, SIDBI, Nippon India Digital Innovation and Evolvence, plus individuals including Sanjeev Bikhchandani, Binny Bansal and Vijay Shekhar Sharma." },
      { year: "2023", event: "Launches Fund II with a target corpus of $180M; Unitary Fund II registered with SEBI as a Category II AIF (IN/AIF2/23-24/1303), effective 30 June 2023." },
    ],
    holdings: [],
    signatureExit: null
  },
  {
    slug: "shorooq-partners",
    name: "Shorooq Partners",
    short: "Shorooq",
    website: "https://www.shorooq.com",
    founded: 2017,
    hq: "Abu Dhabi, United Arab Emirates",
    aum: "US$500M (approximate assets under management stated on shorooq.com/about, up from US$2M at founding)",
    sectors: ["Fintech", "Enterprise Software", "AI", "Frontier Technologies", "Proptech"],
    thesis: "Shorooq Partners is an Abu Dhabi-headquartered alternative investment firm founded in 2017 by Mahmoud Adi and Shane Shin, and is regulated by the ADGM Financial Services Regulatory Authority (FSRA registration no. 190004). It runs two distinct businesses: venture equity through its Bedaya funds, which back founders from the idea and pre-seed stage through scale-up, and a private credit practice through its Nahda funds, which the firm describes as the Middle East's first technology-focused credit strategy. The firm leads with fintech, software, frontier technology and platform businesses across MENA and Pakistan, and operates from Abu Dhabi with additional offices reported in Dubai, Riyadh, Egypt and Korea. Fund investors named on its own site include Mubadala, Saudi Venture Capital and Korea Venture Investment Corp, with Korea's IMM Investment Global a partner in its credit funds.",
    leadership: [
      { name: "Mahmoud Adi", role: "Founding Partner", profileSlug: "mahmoud-adi" },
      { name: "Shane Shin", role: "Founding Partner", profileSlug: "shane-shin" },
      { name: "Dr. Bilal Baloch", role: "Partner", profileSlug: "bilal-baloch" },
      { name: "Yousef Albabtain", role: "Partner", profileSlug: "yousef-albabtain" },
      { name: "Omer Zabit", role: "Partner", profileSlug: "omer-zabit" },
      { name: "Nathan Kwon", role: "Partner", profileSlug: "nathan-kwon" },
    ],
    timeline: [
      { year: "2017", event: "Founded in Abu Dhabi by Mahmoud Adi and Shane Shin, starting with roughly US$2 million under management." },
      { year: "2021", event: "Launched Nahda Fund I in October, reported by Wamda and The National as MENA's first venture debt fund, run in partnership with Korea's IMM Investment Global." },
      { year: "2022", event: "Launched Bedaya Fund II, a US$150 million seed-stage fund, with LPs including DisruptAD (ADQ's venture platform), Dubai Future District Fund and Bupa." },
      { year: "2024", event: "Closed a second private credit fund at US$100 million alongside IMM Investment Global; firm reported approximately US$500 million in assets under management across venture equity and private credit." },
    ],
    holdings: [],
    signatureExit: null
  },
  {
    slug: "global-ventures",
    name: "Global Ventures",
    short: "Global Ventures",
    website: "https://www.global.vc",
    founded: 2018,
    hq: "Dubai, United Arab Emirates",
    aum: "Not publicly disclosed (US$300M AUM reported by Wamda, July 2024; Fund III reported at over US$150M by Wamda, January 2025)",
    sectors: ["Fintech", "Digital Health", "Supply Chain", "Agritech", "AI"],
    thesis: "Global Ventures is a Dubai-headquartered venture capital firm founded in 2018 by Noor Sweid, investing in founders across emerging markets in the Middle East, Africa and Pakistan. It invests primarily at Series A with follow-on capacity, and has raised three funds: a US$50 million Fund I closed in early 2020, a Fund II that targeted US$100 million, and a Fund III reported at over US$150 million. Fund I led with fintech and Fund II with health technology; Fund III concentrates on supply chain technology, agritech, enterprise SaaS, artificial intelligence and deep tech. Limited partners have included Saudi Venture Capital, Jordan's Innovative Startups and SMEs Fund, Bupa Arabia, Agility Global's venture arm and Jada, the Saudi PIF-backed fund of funds.",
    leadership: [
      { name: "Noor Sweid", role: "Founder and Managing Partner", profileSlug: "noor-sweid" },
      { name: "Medea Nocentini", role: "Senior Partner", profileSlug: "medea-nocentini" },
      { name: "Simon Sharp", role: "Senior Partner", profileSlug: "simon-sharp" },
      { name: "Diya Kumar", role: "Partner", profileSlug: "diya-kumar" },
      { name: "Noor Shawwa", role: "Partner", profileSlug: "noor-shawwa" },
    ],
    timeline: [
      { year: "2018", event: "Founded in Dubai by Noor Sweid, previously Chief Investment Officer of the Dubai Future Foundation and Managing Partner at Leap Ventures." },
      { year: "2020", event: "Closed Fund I at US$50 million to back revenue-generating startups across the Middle East and Africa; backers included Jada, the US$1 billion Saudi PIF-anchored fund of funds." },
      { year: "2021", event: "Portfolio company Mumzworld acquired by Saudi Arabia's Tamer Group; Bupa Arabia committed new investment to Fund II." },
      { year: "2024", event: "Reported approximately US$300 million in assets under management; Jordan's ISSF committed US$5 million to Fund III and Agility Global's corporate venture arm also backed the fund." },
      { year: "2025", event: "Saudi Venture Capital (SVC) invested in Fund III, reported at over US$150 million and targeting supply chain technology, agritech, enterprise SaaS, AI and deep tech across Saudi Arabia, MENA and Sub-Saharan Africa." },
    ],
    holdings: [],
    signatureExit: "Mumzworld (acquired by Tamer Group, 2021)"
  },
  {
    slug: "wamda-capital",
    name: "Wamda Capital",
    short: "Wamda Capital",
    website: "https://wamdacapital.com",
    founded: 2015,
    hq: "Dubai, United Arab Emirates",
    aum: "Not publicly disclosed (Fund I launched at US$70M according to wamdacapital.com; the Evergreen vehicle's size is not published)",
    sectors: ["Fintech", "Ecommerce", "Logistics", "SaaS", "AI"],
    thesis: "Wamda Capital is the Dubai-based venture investment arm of Wamda, the MENA entrepreneurship platform founded by Aramex co-founder Fadi Ghandour; wamda.com describes Wamda Capital as Wamda's 'sector-agnostic investment vehicle'. It launched Wamda Capital Fund I in 2015, a US$70 million fund backed by the IFC, Zain and regional investors, and in 2019 moved to an evergreen structure funded by Fadi Ghandour's personal capital instead of closing the US$100 million Fund II it had announced. The firm is still actively investing at seed and Series A across MENA and Turkey, leading rounds as recently as January 2026, but it no longer raises third-party institutional funds. Its track record spans over 100 companies and includes Careem, Mumzworld, Tabby, Hala and BitOasis.",
    leadership: [
      { name: "Fadi Ghandour", role: "Executive Chairman and Managing Partner", profileSlug: "fadi-ghandour" },
      { name: "Fares Ghandour", role: "Partner", profileSlug: "fares-ghandour" },
      { name: "Daniel dos Reis", role: "Investment Director", profileSlug: "daniel-dos-reis" },
    ],
    timeline: [
      { year: "2010", event: "Wamda established by Fadi Ghandour to accelerate entrepreneurship ecosystems across MENA; MENAbytes reports the Wamda platform was launched by Abraaj Capital, which was later also an LP in Wamda Capital Fund I." },
      { year: "2011", event: "Wamda.com launched as a bilingual Arabic and English independent technology news and knowledge platform." },
      { year: "2015", event: "Wamda Capital Fund I launched as a US$70 million venture fund backed by the IFC, Zain and regional investors, targeting growth-stage MENA companies." },
      { year: "2019", event: "After announcing a US$100 million Fund II targeting a Q2 2019 first close, the firm instead transitioned to an evergreen vehicle deploying Fadi Ghandour's personal capital into seed and Series A technology startups." },
      { year: "2026", event: "Still actively deploying, leading the US$1.3 million pre-seed round for Jordan's Breez AI in January 2026." },
    ],
    holdings: [],
    signatureExit: "Careem (acquired by Uber, 2019)"
  },
  {
    slug: "kembara",
    name: "Kembara",
    short: "Kembara",
    website: "https://kembara.vc",
    founded: 2023,
    hq: "Madrid, Spain",
    aum: "€750M (first close of Kembara Fund I announced 4 February 2026; €1B target, CNMV-registered capacity up to €1.25B)",
    sectors: ["Deep Tech", "AI", "Climate Technology", "Robotics", "Space"],
    thesis: "Kembara is a European deep tech growth fund investing at Series B and C, set up to close what its partners describe as Europe's scale-up capital gap rather than its innovation gap. Its own site states it writes initial cheques of €15-40M into roughly 20 companies, with up to €100M deployable per company including follow-ons, across science-focused AI, robotics and automation, clean energy, future of compute (quantum, photonic, neuromorphic), space technology and designed materials. The fund is anchored by a €350M commitment from the European Investment Fund under the European Tech Champions Initiative, alongside CriteriaCaixa and CDTI Innovación via the Innvierte programme. It is Mundi Ventures' fifth fund, run by a dedicated team and registered with Spain's CNMV as Kembara Fund I, FCR.",
    leadership: [
      { name: "Javier Santiso", role: "Co-founder and Partner", profileSlug: "javier-santiso" },
      { name: "Yann de Vries", role: "Co-founder and Partner", profileSlug: "yann-de-vries" },
      { name: "Pierre Festal", role: "Partner", profileSlug: "pierre-festal" },
      { name: "Robert Trezona", role: "Senior Strategic Advisor", profileSlug: "robert-trezona" },
      { name: "Siraj Khaliq", role: "Senior Strategic Advisor", profileSlug: "siraj-khaliq" },
    ],
    timeline: [
      { year: "2023", event: "Kembara founded by Yann de Vries and Javier Santiso as a dedicated European deep tech growth vehicle within Mundi Ventures, per Sifted and Vestbee." },
      { year: "2024", event: "European Investment Fund commits €350M to Kembara Fund I under the European Tech Champions Initiative, announced 8 July 2024." },
      { year: "2025", event: "Kembara Fund I, FCR registered with Spain's CNMV on 28 November 2025 (register no. 560), managed by Alma Mundi Ventures, SGEIC, S.A.; capacity raised to €1.25B with CriteriaCaixa (€100M) and CDTI among backers." },
      { year: "2026", event: "€750M first close announced 4 February 2026 against a €1B target; described as Mundi Ventures' largest fund." },
      { year: "2026", event: "CDTI Innovación commits up to €300M through the Innvierte programme, announced 16 February 2026." },
      { year: "2026", event: "Kembara co-leads Quantum Motion's $160M Series C with DCVC in May 2026, reported as the fund's first major investment." },
    ],
    holdings: [],
    signatureExit: null
  },

  /* ------------------------------------------------------------
     FIRMS 402-421, added 2026-08-23.
     Researched batch: sector specialists (food systems, oceans,
     materials, tough tech, space, defense, mobility, built world,
     industrial, climate deep tech, health, sports, consumer,
     education). rank is null on all 20 by design; ranking is
     assigned separately. Sources for every non-null value are in
     the research sources.csv retained off-site.
     ------------------------------------------------------------ */
{
    rank: null,
    name: "S2G Investments",
    sectors: ["Food & Agriculture", "Energy", "Climate", "Sustainability"],
    signatureExit: "S2G was an early investor in Beyond Meat, the plant-based meat company that completed a heavily oversubscribed Nasdaq IPO in May 2019.",
    slug: "s2g-investments",
    website: "https://www.s2ginvestments.com",
    short: "S2G",
    founded: 2014,
    hq: "Chicago, IL",
    aum: "$2.8B",
    thesis: "S2G Investments is a Chicago-based multi-asset investment firm that backs venture and growth-stage companies across food and agriculture, energy, and oceans. The firm was founded in 2014 as S2G Ventures, with OpenTable founder Chuck Templeton and longtime food and agriculture investor Sanjeev Krishnan among its early leaders, and initially concentrated on food before expanding into oceans and energy. It describes itself as invested at the seams of sector transition, backing companies that improve efficiency and resilience in food, energy, and ocean systems. S2G closed its second fund at $180 million in 2017 and was an early investor in Beyond Meat, which went public on Nasdaq in 2019. In January 2025 the firm rebranded from S2G Ventures to S2G Investments to reflect a multi-asset platform spanning venture, growth equity, and structured finance, stating $2.5 billion in committed capital at the time. In May 2026 it closed the $1 billion Solutions Fund I to back growth-stage companies in North America and Europe, addressing what it calls the missing middle between venture capital and infrastructure-scale finance. The firm reports $2.8 billion in assets under management, with offices in Chicago, San Francisco, and Boston.",
    leadership: [
      { name: "Sanjeev Krishnan", role: "Managing Partner", profileSlug: "sanjeev-krishnan" },
      { name: "Chuck Templeton", role: "Managing Partner", profileSlug: "chuck-templeton" },
      { name: "Aaron Rudberg", role: "Managing Partner", profileSlug: "aaron-rudberg" }
    ],
    timeline: [
      { year: "2014", event: "S2G was founded in Chicago as S2G Ventures to invest in food and agriculture." },
      { year: "2017", event: "S2G Ventures closed its second fund at $180 million to invest across food and agriculture." },
      { year: "2019", event: "Early portfolio company Beyond Meat completed its oversubscribed IPO on Nasdaq." },
      { year: "2025", event: "The firm rebranded from S2G Ventures to S2G Investments, citing $2.5 billion in committed capital and more than 100 portfolio companies." },
      { year: "2026", event: "S2G closed the $1 billion Solutions Fund I to scale growth-stage companies across food and agriculture, energy, and oceans." }
    ],
    holdings: [
      { name: "Beyond Meat", ticker: "BYND", investedYear: null, historicalPrice: null, price: null }
    ]
  },
  {
    rank: null,
    name: "AgFunder",
    sectors: ["Food & Agriculture", "Agritech", "Foodtech", "Deep Tech"],
    signatureExit: "Portfolio company Bear Flag Robotics, an autonomous tractor startup, was acquired by John Deere for $250 million in 2021.",
    slug: "agfunder",
    website: "https://agfunder.com",
    short: "AgFunder",
    founded: 2013,
    hq: "San Francisco, CA",
    aum: "~$300m",
    thesis: "AgFunder is a venture capital firm founded in 2013 by Rob Leclerc and Michael Dean, investing in early-stage companies that build deep foundational technology for food, agriculture, and planetary health. Its portfolio spans AI, biotech, robotics, manufacturing, climate, and materials, and it operates from offices in Silicon Valley and Singapore. The firm is unusual among venture investors for having built a media company first. Its AgFunderNews service and annual agrifoodtech investment reports made it a reference point for the sector before its funds scaled, and that audience, along with an in-house engineering team, now serves as a global deal-sourcing engine for the venture firm. AgFunder began with small funds raised largely from its own network, closed the oversubscribed $21 million New Carnivore alternative protein fund in August 2021, and by March 2022 had raised $60 million in commitments toward a flagship fund targeting $100 million. The firm states roughly $300 million in assets under management and more than 100 portfolio companies across four continents. Its most notable realized exit is Bear Flag Robotics, an autonomous tractor company acquired by John Deere for $250 million in 2021.",
    leadership: [
      { name: "Rob Leclerc", role: "Partner", profileSlug: "rob-leclerc" },
      { name: "Michael Dean", role: "Partner", profileSlug: "michael-dean" },
      { name: "Manuel Gonzalez", role: "Partner", profileSlug: "manuel-gonzalez" }
    ],
    timeline: [
      { year: "2013", event: "AgFunder was founded to bring more investment and innovation into the agriculture and food space." },
      { year: "2021", event: "Portfolio company Bear Flag Robotics was acquired by John Deere for $250 million." },
      { year: "2021", event: "AgFunder closed its oversubscribed $21 million New Carnivore alternative protein fund." },
      { year: "2022", event: "AgFunder reached $60 million in capital commitments for a flagship fund targeting $100 million." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Aqua-Spark",
    sectors: ["Food & Agriculture", "Sustainability", "Climate"],
    signatureExit: "No confirmed public exit yet; the firm's notable positions remain private.",
    slug: "aqua-spark",
    website: "https://aqua-spark.nl",
    short: "Aqua-Spark",
    founded: 2013,
    hq: "Utrecht, Netherlands",
    aum: "€260m",
    thesis: "Aqua-Spark is an investment fund based in Utrecht, the Netherlands, dedicated entirely to sustainable aquaculture. It was founded in 2013 by Mike Velings and Amy Novogratz, who launched the fund after concluding that farmed fish would have to supply much of the world's future protein while the industry attracted almost no outside investment. The fund invests across the aquaculture value chain, from fish farms in emerging markets to alternative feed ingredients, animal health, and farm management technology, and aims to hold positions long term while steering portfolio companies toward measurable environmental and social improvement. Its first investments, announced in January 2015, placed $4 million across Calysta, a California developer of microbe-based protein feed, and Chicoa Fish Farm in Mozambique. By 2024 Aqua-Spark reported 28 portfolio companies and assets under management of nearly 500 million euros, and described itself as the largest investment fund dedicated to sustainable aquaculture. The collapse of Indonesian portfolio company eFishery in a fraud case then cut reported assets under management from 500 million euros to 260 million euros during 2025. The firm continues to invest in aquaculture companies worldwide from its Utrecht base.",
    leadership: [
      { name: "Mike Velings", role: "Co-founder and CEO", profileSlug: "mike-velings" },
      { name: "Amy Novogratz", role: "Co-founder and Managing Partner", profileSlug: "amy-novogratz" }
    ],
    timeline: [
      { year: "2013", event: "Aqua-Spark was launched in Utrecht by Mike Velings and Amy Novogratz as a fund dedicated to sustainable aquaculture." },
      { year: "2015", event: "The fund announced its first investments, committing $4 million across feed innovator Calysta and Chicoa Fish Farm in Mozambique." },
      { year: "2024", event: "Aqua-Spark marked its tenth anniversary with an impact report citing 28 portfolio companies and nearly €500M in assets under management." },
      { year: "2025", event: "The eFishery fraud case contributed to Aqua-Spark's reported assets under management falling from €500m to €260m." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Material Impact",
    sectors: ["Deep Tech", "Hard Tech", "Advanced Manufacturing", "Robotics", "Climate"],
    signatureExit: "Portfolio company Nauticus Robotics went public on Nasdaq in September 2022 through a SPAC merger with CleanTech Acquisition Corp, with Material Impact remaining a major shareholder.",
    slug: "material-impact",
    website: "https://www.materialimpact.com",
    short: "Material Impact",
    founded: 2016,
    hq: "Boston, MA",
    aum: "$700M+",
    thesis: "Material Impact is a Boston based venture capital firm founded in 2016 by scientist entrepreneurs Carmichael Roberts and Adam Sharkawy, who remain its Co-Founders and Managing Partners. The firm invests at inception in deep tech companies powered by material science innovation, positioning itself as first money in and building companies alongside founders rather than simply financing them. Its focus spans sustainable manufacturing, transportation, data storage, food and water, biomanufacturing, and robotics, with a stated mission of keeping the world healthy, safe, fed, warm, powered, and secured. The firm states over 700 million dollars in assets under management across three funds. Fund II, an oversubscribed 200 million dollar vehicle, was announced in June 2020, and an oversubscribed 352 million dollar Fund III closed in November 2023, at which point the firm counted about 30 portfolio companies. Material Impact is a certified B Corporation, which is unusual among venture firms. Portfolio companies include Nauticus Robotics, which went public on Nasdaq in September 2022 through a SPAC merger and in which the firm has reported a stake of about 25 percent, along with AgZen, Oxipital AI, and Foundation Alloy. Chemist George Whitesides serves as Chief Scientific Advisor.",
    leadership: [
      { name: "Carmichael Roberts", role: "Co-Founder & Managing Partner", profileSlug: "carmichael-roberts" },
      { name: "Adam Sharkawy", role: "Co-Founder & Managing Partner", profileSlug: "adam-sharkawy" },
      { name: "Corinna Chen", role: "Partner", profileSlug: "corinna-chen" },
      { name: "Christian Theriault", role: "Partner", profileSlug: "christian-theriault" }
    ],
    timeline: [
      { year: "2016", event: "Material Impact founded in Boston by Carmichael Roberts and Adam Sharkawy to build deep tech companies powered by material science." },
      { year: "2020", event: "The firm announced its oversubscribed $200 million Fund II in June 2020." },
      { year: "2022", event: "Portfolio company Nauticus Robotics completed its SPAC merger with CleanTech Acquisition Corp in September 2022 and began trading on Nasdaq as KITT." },
      { year: "2023", event: "Material Impact closed its oversubscribed $352 million Fund III in November 2023, with assets under management reported at nearly $800 million at the time." }
    ],
    holdings: [
      { name: "Nauticus Robotics", ticker: "KITT", investedYear: null, historicalPrice: null, price: null }
    ]
  },
  {
    rank: null,
    name: "Engine Ventures",
    sectors: ["Deep Tech", "Hard Tech", "Climate", "Energy", "Healthcare"],
    signatureExit: "No confirmed public exit yet; the firm's notable positions remain private.",
    slug: "engine-ventures",
    website: "https://engineventures.com",
    short: "Engine Ventures",
    founded: 2016,
    hq: "Cambridge, MA",
    aum: "$1.1 billion",
    thesis: "Engine Ventures is a Cambridge, Massachusetts venture firm that invests in Tough Tech, breakthrough science and engineering companies addressing climate, human health, and advanced systems. It traces to The Engine, launched by MIT in October 2016 to help startups commercialize foundational technology. Katie Rae became president, CEO, and managing partner in early 2017 and led the first fund, which held a first close of more than 150 million dollars in April 2017 with MIT contributing 25 million dollars and ultimately closed at over 200 million dollars, followed by a 230 million dollar second fund in October 2020. The investment operation later separated from the nonprofit side. The Engine continues as a 501(c)(3) accelerator providing lab space and programs, while the fund manager became the independent firm Engine Ventures in 2023. In June 2024 the firm closed its 398 million dollar Fund III, again anchored by MIT, bringing assets under management above 1 billion dollars. Its website states 1.1 billion dollars under management and 65 portfolio companies. The firm leads early rounds and stays engaged through manufacturing, deployment, and scaling, and runs fellowship and workforce programs. Holdings include Commonwealth Fusion Systems, Form Energy, Boston Metal, and Sublime Systems, all still private.",
    leadership: [
      { name: "Katie Rae", role: "CEO & Managing Partner", profileSlug: "katie-rae" },
      { name: "Israel Ruiz", role: "President & General Partner", profileSlug: "israel-ruiz" },
      { name: "Reed Sturtevant", role: "General Partner", profileSlug: "reed-sturtevant" },
      { name: "Ann DeWitt", role: "General Partner", profileSlug: "ann-dewitt" },
      { name: "Michael Kearney", role: "General Partner", profileSlug: "michael-kearney" }
    ],
    timeline: [
      { year: "2016", event: "MIT launched The Engine in October 2016 to support Tough Tech startups commercializing breakthrough science and engineering." },
      { year: "2017", event: "The Engine's first fund held a first close of more than $150 million in April 2017, with MIT contributing $25 million, and ultimately closed at over $200 million." },
      { year: "2020", event: "The Engine closed its $230 million Fund II in October 2020, with MIT contributing $35 million." },
      { year: "2023", event: "The investment operation separated from the nonprofit accelerator, with the fund manager becoming the independent firm Engine Ventures while The Engine continued as a 501(c)(3)." },
      { year: "2024", event: "Engine Ventures closed its $398 million Fund III in June 2024, bringing assets under management to more than $1 billion." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Prime Movers Lab",
    sectors: ["Deep Tech", "Energy", "Transportation", "Manufacturing", "Agriculture"],
    signatureExit: "Portfolio company Energy Vault, whose Series C the firm led as an existing investor, went public on the NYSE in February 2022 via SPAC merger with Novus Capital Corporation II.",
    slug: "prime-movers-lab",
    website: "https://www.primemoverslab.com",
    short: "Prime Movers Lab",
    founded: 2018,
    hq: "Jackson, WY",
    aum: "more than $1.2 billion",
    thesis: "Prime Movers Lab is a venture firm founded in 2018 by Dakin Sloss and headquartered in Jackson, Wyoming. It invests in breakthrough scientific startups, backing founders it calls Prime Movers who are reinventing energy, transportation, infrastructure, manufacturing, human augmentation, and agriculture. The firm raised a 100 million dollar first fund in 2018, a 245 million dollar Fund II announced in January 2021 with limited partners including Bill Ackman and the University of Wyoming, a 500 million dollar Early Growth Fund announced in September 2022, and a 245 million dollar Fund III in July 2023, at which point it reported more than 1.2 billion dollars in assets under management. Author and coach Tony Robbins serves as Partner and Business Strategist. Unusually for an early stage deep tech firm, several portfolio companies reached public markets through SPAC mergers. The firm led the 25.5 million dollar 2019 Series A of space transportation company Momentus, and led the 2021 Series C of Energy Vault, which listed on the NYSE in February 2022. Heliogen, another portfolio listing, was acquired by Zeo Energy in 2025. Private holdings include Commonwealth Fusion Systems, Axiom Space, Boom, Figure, and Venus Aerospace.",
    leadership: [
      { name: "Dakin Sloss", role: "Founder and General Partner", profileSlug: "dakin-sloss" },
      { name: "Zia Huque", role: "General Partner", profileSlug: "zia-huque" },
      { name: "Tony Robbins", role: "Partner & Business Strategist", profileSlug: "tony-robbins" },
      { name: "Andre Jabban", role: "Partner and Head of Capital Formation", profileSlug: "andre-jabban" }
    ],
    timeline: [
      { year: "2018", event: "Prime Movers Lab founded by Dakin Sloss in Jackson, Wyoming, launching a $100 million first fund." },
      { year: "2021", event: "The firm announced its $245 million Fund II in January 2021." },
      { year: "2022", event: "Portfolio company Energy Vault began trading on the NYSE in February 2022 following its SPAC merger with Novus Capital Corporation II." },
      { year: "2022", event: "The firm raised a $500 million Early Growth Fund, announced in September 2022." },
      { year: "2023", event: "Prime Movers Lab closed its $245 million Fund III in July 2023, reporting more than $1.2 billion in assets under management." }
    ],
    holdings: [
      { name: "Momentus", ticker: "MNTS", investedYear: 2019, historicalPrice: null, price: null },
      { name: "Energy Vault", ticker: "NRGV", investedYear: null, historicalPrice: null, price: null },
      { name: "Archer Aviation", ticker: "ACHR", investedYear: null, historicalPrice: null, price: null }
    ]
  },
  {
    rank: null,
    name: "Space Capital",
    sectors: ["Space", "Satellites", "Deep Tech"],
    signatureExit: "Portfolio company Rocket Lab became publicly traded on Nasdaq as RKLB through its merger with Vector Acquisition Corporation in August 2021.",
    slug: "space-capital",
    website: "https://www.spacecapital.com",
    short: "Space Capital",
    founded: 2012,
    hq: "New York, NY",
    aum: "Over $1 billion (across four institutional funds)",
    thesis: "Space Capital is a New York based seed stage venture firm that invests exclusively in the space economy. Founded in 2012 by Chad Anderson and rebranded from the Space Angels network in 2020, the firm organizes the market into three technology layers, Infrastructure, Distribution, and Applications, and concentrates on three stacks it believes follow the trajectory of GPS: positioning, geospatial intelligence, and satellite communications. Its core argument, the GPS Playbook, holds that a government built space asset becomes a platform for trillions of dollars of commercial value once entrepreneurs build distribution and applications on top of it, and the firm's GPS, GEOINT, and SatCom playbooks are used by financial firms and government agencies. Space Capital states over $1 billion in assets under management across four institutional funds, and launched Space Capital IV in March 2026. The portfolio spans 64 companies including SpaceX, Rocket Lab, Planet, ICEYE, Impulse Space, Varda, and Muon Space. Since 2017 the firm has published Space IQ, a quarterly report on private investment in the space economy cited by Morgan Stanley, Citi, NASA, ESA, and the US Department of Defense, giving it an unusually public research footprint for a fund of its size.",
    leadership: [
      { name: "Chad Anderson", role: "Founder & CEO", profileSlug: "chad-anderson" },
      { name: "Tom Ingersoll", role: "Partner", profileSlug: "tom-ingersoll" },
      { name: "Justus Kilian", role: "Partner", profileSlug: "justus-kilian" }
    ],
    timeline: [
      { year: "2007", event: "Space Angels, the angel investment network from which Space Capital grew, was established." },
      { year: "2012", event: "Space Capital dates its founding in New York to 2012." },
      { year: "2017", event: "The firm began publishing Space IQ, its quarterly report on private investment in the space economy." },
      { year: "2020", event: "The firm rebranded from Space Angels to Space Capital." },
      { year: "2021", event: "Portfolio company Rocket Lab completed its merger with Vector Acquisition Corporation and began trading on Nasdaq as RKLB in August 2021." },
      { year: "2026", event: "Space Capital launched its fourth institutional fund, Space Capital IV, in March 2026." }
    ],
    holdings: [
      { name: "Rocket Lab", ticker: "RKLB", investedYear: null, historicalPrice: null, price: null },
      { name: "Planet", ticker: "PL", investedYear: null, historicalPrice: null, price: null }
    ]
  },
  {
    rank: null,
    name: "Riot Ventures",
    sectors: ["Hard Tech", "Defense Tech", "Robotics", "Space", "Industrial Technology"],
    signatureExit: "Portfolio company Toast, the restaurant software platform, went public on the NYSE as TOST in September 2021 in a debut that valued the company at about $20 billion.",
    slug: "riot-ventures",
    website: "https://www.riot.vc",
    short: "Riot Ventures",
    founded: null,
    hq: "Los Angeles, CA",
    aum: null,
    thesis: "Riot Ventures is a hard tech venture firm founded by Stephen Marcus and Will Coffield that invests from Los Angeles and Boston in companies modernizing critical industries. The firm launched its first fund, a $10 million vehicle, in 2017 to test the thesis that automation, artificial intelligence, computer vision, robotics, and new materials would remake industrial sectors, and announced a $75 million second fund in February 2020. Riot invests from seed through growth and describes its team as devoted to a select group of iconic companies with checks of up to $200 million. The current portfolio of more than 30 companies spans defense, space, nuclear energy, robotics, and logistics, including Shield AI in AI pilots for defense aircraft, True Anomaly in orbital space defense, Valar Atomics in mass manufactured nuclear reactors, EnduroSat in satellite manufacturing, plus Oxide Computer, Parallel Systems, Lumafield, and Simbe Robotics. An early position in Toast, which completed a roughly $20 billion NYSE debut in September 2021, gave the small firm a realized public outcome unusual for a fund of its vintage and size. Riot Ventures is unrelated to Riot Games and to Riot Platforms, the bitcoin mining company that trades under the RIOT ticker.",
    leadership: [
      { name: "Stephen Marcus", role: "Co-Founder and General Partner", profileSlug: "stephen-marcus" },
      { name: "Will Coffield", role: "Co-founder and General Partner", profileSlug: "will-coffield" }
    ],
    timeline: [
      { year: "2017", event: "Riot Ventures closed its first fund, a $10 million vehicle focused on hard tech and industrial technology." },
      { year: "2020", event: "The firm announced in February 2020 that it was raising a $75 million second fund." },
      { year: "2021", event: "Portfolio company Toast went public on the NYSE in September 2021." }
    ],
    holdings: [
      { name: "Toast", ticker: "TOST", investedYear: null, historicalPrice: null, price: null }
    ]
  },
  {
    rank: null,
    name: "Decisive Point",
    sectors: ["Defense Tech", "National Security", "Energy", "Aerospace"],
    signatureExit: "Portfolio company Standard Nuclear, the Oak Ridge TRISO nuclear fuel maker, completed its initial public offering on the NYSE as STDN in July 2026.",
    slug: "decisive-point",
    website: "https://www.decisivepoint.com",
    short: "Decisive Point",
    founded: 2018,
    hq: "New York, NY",
    aum: null,
    thesis: "Decisive Point is a venture capital and advisory firm focused on national security, founded in 2018 by Thomas Hendrix, Eric Horan, and Andrew Price and operating from New York, Washington DC, and Boston. The firm backs seed and Series A dual use startups in defense, energy, and infrastructure, historically writing checks of roughly $500,000 to $1.5 million, and pairs its funds with a government contracting advisory practice that acts as a bolt on government relations team for portfolio companies, handling federal acquisition strategy, non dilutive R&D funding, proposal writing, and congressional engagement. This govcon arm, together with its operation of the National Security Innovation Network's Propel accelerator in partnership with the Department of Defense, distinguishes it from generalist defense investors. Decisive Point announced the initial close of its first fund, Decisive Point Ventures Fund I, in January 2021, a vehicle with $10 million in anticipated commitments. The portfolio includes Firehawk Aerospace, Asylon, HavocAI, EpiSci, Radiant, and Standard Nuclear, which completed an initial public offering on the NYSE in July 2026. In November 2025 Medal of Honor recipient Matthew Williams joined as Partner to lead defense and national security investments. The firm does not publicly state assets under management.",
    leadership: [
      { name: "Thomas Hendrix", role: "General Partner", profileSlug: "thomas-hendrix" },
      { name: "Eric Horan", role: "General Partner", profileSlug: "eric-horan" },
      { name: "Andrew Price", role: "General Partner", profileSlug: "andrew-price" },
      { name: "Debi-Michelle O'Connell", role: "Partner", profileSlug: "debi-michelle-oconnell" },
      { name: "Matt Williams", role: "Partner", profileSlug: "matt-williams" }
    ],
    timeline: [
      { year: "2018", event: "Decisive Point was founded in New York by Tommy Hendrix, Eric Horan, and Andrew Price to fill a gap in venture capital for defense and government technology." },
      { year: "2021", event: "The firm announced the initial close of Decisive Point Ventures Fund I, with $10 million in anticipated commitments, in January 2021." },
      { year: "2025", event: "Medal of Honor recipient Matthew Williams joined as Partner in November 2025 to lead defense and national security investments." },
      { year: "2026", event: "Portfolio company Standard Nuclear priced its initial public offering and began trading on the NYSE as STDN in July 2026." }
    ],
    holdings: [
      { name: "Standard Nuclear", ticker: "STDN", investedYear: null, historicalPrice: null, price: null }
    ]
  },
  {
    rank: null,
    name: "Fontinalis Partners",
    sectors: ["Mobility", "Transportation", "Industrial Technology", "Energy"],
    signatureExit: "Early portfolio company Lyft went public on Nasdaq in its 2019 IPO, one of roughly 20 exits from the firm's mobility portfolio alongside nuTonomy's $450 million sale to Delphi in 2017.",
    slug: "fontinalis-partners",
    website: "https://www.fontinalis.com",
    short: "Fontinalis",
    founded: 2009,
    hq: "Detroit, MI",
    aum: "~$270M (as of 2021)",
    thesis: "Fontinalis Partners is a Detroit venture capital firm co-founded in 2009 by Bill Ford, executive chairman of Ford Motor Company, and Chris Cheever, alongside Ralph Booth and Mark Schulz. It was one of the first funds organized around next-generation mobility, backing companies in efficient movement years before mobility became a mainstream venture category. Its early portfolio included Lyft, nuTonomy, Postmates and Telogis, and the firm recorded roughly 20 exits in its first decade, including nuTonomy's $450 million sale to Delphi in 2017, Postmates' sale to Uber in 2020 and Lyft's 2019 IPO. Fontinalis raised a $100 million second fund in 2016 and closed Fund III at $104 million in August 2021, bringing assets under management to about $270 million at that time. The firm invests from seed through Series B and has offices in Detroit and Boston. Its strategy has since broadened beyond mobility to what it calls the new frontiers of industry, spanning industrial innovation and energy, with recent investments in semiconductor manufacturing, AI inference, robotics, freight intelligence and fleet electrification. Bill Ford now holds Founder Emeritus status, while Cheever remains Managing Partner leading the investment team.",
    leadership: [
      { name: "Chris Cheever", role: "Founder & Managing Partner", profileSlug: "chris-cheever" },
      { name: "Laura Petterle", role: "Managing Partner & CFO", profileSlug: "laura-petterle" },
      { name: "Chris Stallman", role: "Managing Partner", profileSlug: "chris-stallman" },
      { name: "Dan Ratliff", role: "Partner", profileSlug: "dan-ratliff" }
    ],
    timeline: [
      { year: "2009", event: "Fontinalis Partners is founded in Detroit by Bill Ford, Chris Cheever, Ralph Booth and Mark Schulz to invest in next-generation mobility." },
      { year: "2016", event: "The firm closes a $100 million second fund to invest in next-generation mobility companies." },
      { year: "2017", event: "Portfolio company nuTonomy is acquired by Delphi Automotive for $450 million." },
      { year: "2019", event: "Early portfolio company Lyft completes its IPO on Nasdaq." },
      { year: "2021", event: "Fontinalis closes Fund III at $104 million, bringing firm assets under management to approximately $270 million." }
    ],
    holdings: [
      { name: "Lyft", ticker: "LYFT", investedYear: null, historicalPrice: null, price: null },
      { name: "Ouster", ticker: "OUST", investedYear: null, historicalPrice: null, price: null },
      { name: "Life360", ticker: "LIF", investedYear: null, historicalPrice: null, price: null }
    ]
  },
  {
    rank: null,
    name: "Trucks Venture Capital",
    sectors: ["Transportation", "Mobility", "Autonomy", "Logistics"],
    signatureExit: "Portfolio company Roadster, a digital car-buying platform, was acquired by CDK Global for $360 million in 2021.",
    slug: "trucks-venture-capital",
    website: "https://www.trucks.vc",
    short: "Trucks VC",
    founded: 2015,
    hq: "San Francisco, CA",
    aum: null,
    thesis: "Trucks Venture Capital is a San Francisco seed fund founded in 2015 that invests exclusively in transportation, describing itself as funding the entrepreneurs building the future of transportation. Co-founded by Reilly Brennan, a former automotive journalist and Stanford lecturer, who runs the firm with partners Jeffrey Schox, Kathryn Schox and Puneeth Meruva, Trucks writes first checks of $500,000 to $2 million at pre-seed and seed, backing companies that make transportation decarbonized, safer and more accessible. The portfolio spans autonomy, electrification, aviation, trucking and logistics, including Joby Aviation, May Mobility, Nauto, Gatik and Skyryse. Realized exits include nuTonomy, acquired by Delphi, Roadster, sold to CDK Global for $360 million in 2021, Bear Flag Robotics, acquired by John Deere in 2021, DeepScale, acquired by Tesla, and Zendrive, acquired by Intuit. The firm closed its second fund at $52,525,252 in June 2021 alongside an AngelList-based growth vehicle for follow-on investments, and announced a $70 million third fund in January 2025, its largest to date, intended to back roughly 30 seed-stage companies with target ownership near 10 percent. Its limited partners include strategic corporates such as an automotive supplier, a tire manufacturer, an insurer and an airline.",
    leadership: [
      { name: "Reilly Brennan", role: "Partner", profileSlug: "reilly-brennan" },
      { name: "Jeffrey Schox", role: "Partner", profileSlug: "jeffrey-schox" },
      { name: "Kathryn Schox", role: "Partner", profileSlug: "kathryn-schox" },
      { name: "Puneeth Meruva", role: "Partner", profileSlug: "puneeth-meruva" },
      { name: "Jason Townsend", role: "CFO", profileSlug: "jason-townsend" }
    ],
    timeline: [
      { year: "2015", event: "Trucks Venture Capital is co-founded in San Francisco by Reilly Brennan to invest in seed-stage transportation startups." },
      { year: "2021", event: "The firm closes Trucks Venture Fund 2 at $52,525,252 and launches an AngelList-based growth fund for follow-on investments." },
      { year: "2021", event: "Portfolio company Roadster is acquired by CDK Global for $360 million, and Bear Flag Robotics is acquired by John Deere." },
      { year: "2025", event: "Trucks announces its third and largest fund at $70 million to back roughly 30 seed-stage transportation companies." }
    ],
    holdings: [
      { name: "Joby Aviation", ticker: "JOBY", investedYear: null, historicalPrice: null, price: null }
    ]
  },
  {
    rank: null,
    name: "Brick & Mortar Ventures",
    sectors: ["Construction Tech", "Proptech", "B2B Software", "Hardware"],
    signatureExit: "Seed investment PlanGrid was acquired by Autodesk for $875 million in 2018, with fellow portfolio company BuildingConnected acquired by Autodesk for $275 million weeks later.",
    slug: "brick-and-mortar-ventures",
    website: "https://www.brickmortar.vc",
    short: "Brick & Mortar",
    founded: 2015,
    hq: "San Francisco, CA",
    aum: null,
    thesis: "Brick & Mortar Ventures is a San Francisco venture firm founded in 2015 by Darren Bechtel, a fifth-generation member of the family behind the Bechtel engineering and construction group. The firm invests in emerging companies developing software and hardware for architecture, engineering, construction and facilities management, a mission it summarizes as helping the world build better. Bechtel seeded several defining construction technology companies, including PlanGrid, acquired by Autodesk for $875 million in November 2018, and BuildingConnected, acquired by Autodesk for $275 million in a deal announced in December 2018. In August 2019 the firm closed a $97.2 million fund, announced as the largest construction-focused built world venture fund raised to that point, with corporate limited partners including Autodesk, CEMEX, Ferguson Ventures, Hilti, Obayashi and United Rentals. It leads seed and Series A rounds, typically investing $1 million to $4 million, across the US, Canada, Europe and Australia. Other exits include Fieldwire, Levelset, Canvas and BuildZoom, and the active portfolio of more than 40 companies spans Curri, ALICE Technologies, Siteline, Rugged Robotics and Wingtra. No successor fund has been publicly announced since the 2019 vehicle, though the portfolio shows continued new investments.",
    leadership: [
      { name: "Darren Bechtel", role: "Founder & Managing Director", profileSlug: "darren-bechtel" },
      { name: "Kaustubh Pandya", role: "General Partner", profileSlug: "kaustubh-pandya" },
      { name: "Curtis Rodgers", role: "Partner", profileSlug: "curtis-rodgers" },
      { name: "Austin Yount", role: "Partner", profileSlug: "austin-yount" }
    ],
    timeline: [
      { year: "2015", event: "Darren Bechtel founds Brick & Mortar Ventures in San Francisco to invest in construction technology." },
      { year: "2018", event: "Seed investment PlanGrid is acquired by Autodesk for $875 million." },
      { year: "2018", event: "Autodesk announces its acquisition of portfolio company BuildingConnected for $275 million." },
      { year: "2019", event: "The firm closes a $97.2 million fund, announced as the largest construction-focused built world venture fund to date." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Ironspring Ventures",
    sectors: ["Manufacturing", "Construction Tech", "Logistics", "Industrial Technology", "Clean Energy"],
    signatureExit: "Document Crunch, an AI contract review and compliance platform for construction backed since the firm's first fund, was acquired by Trimble in 2026.",
    slug: "ironspring-ventures",
    website: "https://ironspring.com",
    short: "Ironspring",
    founded: 2020,
    hq: "Austin, TX",
    aum: null,
    thesis: "Ironspring Ventures is an Austin, Texas venture firm investing in what it calls digital industrial innovation. It backs early stage founders modernizing the industrial value chain across four sectors: construction, manufacturing, transportation and logistics, and alternative energy. Co-founders Ty Findley and Peter J. Holt lead the firm as general partners, and its network is weighted toward industrial operators, which the firm presents as its edge over generalist funds that only visit these markets occasionally. Ironspring was founded in 2020 and closed a $61 million debut fund in 2021, which it deployed into 16 companies including OneRail, Prokeep, Document Crunch, and Solvento. In June 2024 the firm closed its second fund at $100 million, planning roughly 20 investments at a pace of four to five per year with initial checks of $2 million to $4 million, typically at seed and Series A. The portfolio spans construction software, warehouse robotics, freight and logistics platforms, industrial workforce tools, and distributed energy, with companies such as Base Power, Harbinger, Plus One Robotics, and Cargado. The firm recorded its most visible exit in April 2026, when Trimble announced the acquisition of Document Crunch, an AI powered contract review and compliance platform for the construction industry that Ironspring had backed since its first fund.",
    leadership: [
      { name: "Ty Findley", role: "Co-Founder + General Partner", profileSlug: "ty-findley" },
      { name: "Peter J. Holt", role: "Co-Founder + General Partner", profileSlug: "peter-j-holt" },
      { name: "Natan Reddy", role: "Principal", profileSlug: "natan-reddy" },
      { name: "Drew Kriens", role: "Principal", profileSlug: "drew-kriens" },
      { name: "Stephanie Volk", role: "Vice President, Platform", profileSlug: "stephanie-volk" }
    ],
    timeline: [
      { year: "2020", event: "Ironspring Ventures is founded in Austin, Texas to invest in digital industrial innovation across construction, manufacturing, transportation and logistics, and alternative energy." },
      { year: "2021", event: "The firm closes its $61 million debut fund, which it goes on to deploy into 16 industrial technology companies." },
      { year: "2024", event: "Ironspring closes its second fund at $100 million in June 2024, targeting seed and Series A checks of $2 million to $4 million." },
      { year: "2026", event: "Trimble announces the acquisition of Ironspring portfolio company Document Crunch in April 2026, the firm's most notable exit." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "At One Ventures",
    sectors: ["Climate", "Deep Tech", "Climate Technology", "Sustainability"],
    signatureExit: "No confirmed public exit yet; the firm's notable positions remain private.",
    slug: "at-one-ventures",
    website: "https://www.atoneventures.com",
    short: "At One Ventures",
    founded: 2019,
    hq: "San Francisco, CA",
    aum: "$525M across two funds",
    thesis: "At One Ventures is a San Francisco climate deep tech firm founded in 2019 by Tom Chi, a founding member of Google X, together with Laurie Menoud, who previously co-led venture capital for BASF in North America, and Helen Lin. The firm invests at seed and Series A in companies whose technology it believes can beat incumbents on unit economics while dramatically reducing planetary footprint, a pairing it calls its Triad: disruptive deep tech, radically better unit economics, and a path toward humanity becoming a net positive to nature. Its scope runs across air, water, soil, and biodiversity, touching energy, materials, agriculture, transportation, and buildings. Fund I closed at $150 million in October 2021, and in October 2023 the firm announced a $375 million Fund II, with the firm stating it manages $525 million across the two funds. By the Fund II announcement it had invested in 35 startups, including battery materials recycler Ascend Elements, de-extinction company Colossal Biosciences, and biodegradable packaging maker Cruz Foam. The team is unusually technical for a venture firm, with partners and operators drawn from the physical sciences, engineering, and manufacturing scale-up, and it supports portfolio companies with in-house help on industrialization, talent, and intellectual property strategy. No portfolio company has yet produced a confirmed realized public exit.",
    leadership: [
      { name: "Tom Chi", role: "Managing Partner", profileSlug: "tom-chi" },
      { name: "Laurie Menoud", role: "Founding Partner", profileSlug: "laurie-menoud" },
      { name: "Helen Lin", role: "Partner", profileSlug: "helen-lin" }
    ],
    timeline: [
      { year: "2019", event: "Tom Chi founds At One Ventures in the San Francisco Bay Area with Laurie Menoud and Helen Lin to invest in climate focused deep tech." },
      { year: "2021", event: "The firm closes its $150 million first fund in October 2021." },
      { year: "2023", event: "At One Ventures announces its $375 million Fund II in October 2023, bringing stated assets under management to over half a billion dollars across 35 portfolio startups." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Piva Capital",
    sectors: ["Industrial Technology", "Energy", "Deep Tech", "Climate", "Mobility"],
    signatureExit: "Metal 3D printing company Velo3D, which Piva backed at its 2020 Series D, went public on the NYSE via SPAC merger in September 2021.",
    slug: "piva-capital",
    website: "https://www.piva.vc",
    short: "Piva Capital",
    founded: 2019,
    hq: "San Francisco, CA",
    aum: null,
    thesis: "Piva Capital is a San Francisco venture firm founded in 2019 to invest in breakthrough technologies for heavy industry and energy. Founder Ricardo Angel, previously of GE Ventures, launched the firm in December 2019 with a $250 million fund backed by Petroliam Nasional Berhad, the Malaysian national energy company known as PETRONAS, which was the sole limited partner of that first fund while the firm operates and invests independently. Piva describes itself as backed by a global Fortune 500 energy company and organizes its thesis around three themes: the future of industry and work, the future of materials and production, and the future of energy and mobility. It invests from early to growth stage in companies such as Boston Metal, Koloma, VEIR, Pyka, Menlo Micro, and Xage Security. Realized outcomes include metal additive manufacturing company Velo3D, which Piva backed at Series D in 2020 and which listed on the NYSE through a SPAC merger in September 2021, plus acquisitions of Urbint by Itron, agreed in October 2025, and Alloy Enterprises by Johnson Controls, completed in May 2026. The team has evolved since launch: Ricardo Angel and Mark Gudiksen now serve as managing partners alongside co-founding partner Adzmel Adznan, while some early partners are no longer listed. The firm remained active through 2025 and 2026, publishing its 2025 responsible investment report in April 2026.",
    leadership: [
      { name: "Ricardo Angel, PhD", role: "CEO & Managing Partner", profileSlug: "ricardo-angel" },
      { name: "Mark Gudiksen, PhD", role: "Managing Partner", profileSlug: "mark-gudiksen" },
      { name: "Adzmel Adznan", role: "Co-Founding Partner", profileSlug: "adzmel-adznan" },
      { name: "Lisa Read Blanco", role: "Partner & Legal Counsel", profileSlug: "lisa-read-blanco" },
      { name: "Maria Buitron", role: "Principal", profileSlug: "maria-buitron" }
    ],
    timeline: [
      { year: "2019", event: "Piva launches in December 2019 with a $250 million fund backed by PETRONAS as sole limited partner, led by CEO and Managing Partner Ricardo Angel in San Francisco." },
      { year: "2020", event: "Piva backs metal additive manufacturing company Velo3D in its $28 million Series D round." },
      { year: "2021", event: "Portfolio company Velo3D completes its merger with JAWS Spitfire Acquisition Corporation in September 2021 and begins trading on the NYSE." },
      { year: "2025", event: "Itron signs a definitive agreement in October 2025 to acquire Piva portfolio company Urbint, a field safety analytics provider for utilities." },
      { year: "2026", event: "Johnson Controls completes its acquisition of Piva portfolio company Alloy Enterprises, a data center thermal management company, in May 2026." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Santé Ventures",
    sectors: ["Biotech", "Medical Devices", "Digital Health", "Healthcare"],
    signatureExit: "Farapulse, the pulsed field ablation company Santé backed early, was fully acquired by Boston Scientific in 2021 after the strategic exercised its option for $295 million upfront.",
    slug: "sante-ventures",
    website: "https://sante.com",
    short: "Santé",
    founded: 2006,
    hq: "Austin, TX",
    aum: "over $1 billion",
    thesis: "Santé Ventures is an early-stage healthcare venture firm founded in Austin, Texas in 2006 by Kevin Lalande, Joe Cunningham and Douglas French. The firm invests across three connected domains, biotechnology, medical technology and digitally enabled healthcare, and frequently backs companies at or near formation rather than waiting for later rounds. It is part of Santé, a broader investment organization that also runs Santé Capital, a systematic public-markets strategy, with more than $1 billion in capital under management across the platform. Santé Ventures has launched five venture funds, in 2007, 2011, 2018, 2021 and 2024, and closed its fifth fund at $330 million in February 2026, above its $300 million target, promoting Dennis McWilliams and Omar Khalil to Managing Director at the close. The portfolio deliberately takes device and biology risk that larger generalist funds avoid, and its realized exits are mostly strategic acquisitions. Farapulse went to Boston Scientific in 2021, Laminar to Johnson and Johnson MedTech for $400 million upfront in 2023, and earlier companies including Explorys, Claret Medical, Millipede Medical, TVA Medical and AbVitro were bought by IBM, Boston Scientific, Becton Dickinson and Bristol Myers Squibb respectively. The firm also keeps an office in Boston.",
    leadership: [
      { name: "Kevin Lalande", role: "Founding Managing Director & Chief Investment Officer", profileSlug: "kevin-lalande" },
      { name: "Joe Cunningham, MD", role: "Founding Managing Director", profileSlug: "joe-cunningham" },
      { name: "Douglas French", role: "Founding Managing Director", profileSlug: "douglas-french" },
      { name: "Dennis McWilliams", role: "Managing Director", profileSlug: "dennis-mcwilliams" },
      { name: "Omar Khalil", role: "Managing Director", profileSlug: "omar-khalil" }
    ],
    timeline: [
      { year: "2006", event: "Santé Ventures is founded in Austin, Texas." },
      { year: "2007", event: "The firm launches its first fund, the start of five funds raised through 2024." },
      { year: "2021", event: "Boston Scientific exercises its option to acquire portfolio company Farapulse, paying $295 million upfront for the remaining shares." },
      { year: "2023", event: "Portfolio company Laminar is acquired by Johnson and Johnson MedTech for $400 million upfront plus milestone payments." },
      { year: "2026", event: "Santé Ventures closes its fifth fund at $330 million, exceeding its $300 million target." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Rock Health Capital",
    sectors: ["Digital Health", "Healthcare"],
    signatureExit: "Portfolio company Omada Health completed its IPO on Nasdaq in June 2025, pricing at $19 per share and raising about $150 million.",
    slug: "rock-health-capital",
    website: "https://rockhealthcapital.com",
    short: "Rock Health",
    founded: 2010,
    hq: "San Francisco, CA",
    aum: null,
    thesis: "Rock Health Capital is the venture fund arm of Rock Health, the San Francisco organization founded in 2010 by Halle Tecco and Nate Gross that describes itself as the first venture fund dedicated to digital health. Rock Health began as a startup accelerator, graduating its inaugural class in June 2011, and later dropped the accelerator model to operate as a conventional early-stage investor. Today the broader Rock Health platform spans three units. Rock Health Capital is the fund, Rock Health Advisory is an enterprise strategy group known for widely cited digital health funding research, and RockHealth.org is a nonprofit focused on health equity. The fund invests exclusively at Pre-Seed, Seed and Series A in companies at the intersection of healthcare and technology, and is led by Bill Evans, who joined Rock Health as managing director in 2016 and is styled Founder and General Partner of Rock Health Capital. The portfolio lists roughly 75 companies including Omada Health, which completed a Nasdaq IPO in June 2025, along with Doctor On Demand, Collective Health, Virta, Benchling, Wellframe and Zus Health. The firm does not publicly state assets under management, and its research arm rather than the fund accounts for most of its public profile.",
    leadership: [
      { name: "Bill Evans", role: "Founder and General Partner", profileSlug: "bill-evans" },
      { name: "Sean Day", role: "Principal", profileSlug: "sean-day" }
    ],
    timeline: [
      { year: "2010", event: "Rock Health is founded by Halle Tecco and Nate Gross as the first venture fund dedicated to digital health." },
      { year: "2011", event: "Rock Health debuts its inaugural accelerator class of health startups in June." },
      { year: "2016", event: "Bill Evans is appointed managing director of Rock Health in October." },
      { year: "2025", event: "Portfolio company Omada Health goes public on Nasdaq in June, pricing its IPO at $19 per share." }
    ],
    holdings: [
      { name: "Omada Health", ticker: "OMDA", investedYear: null, historicalPrice: null, price: null }
    ]
  },
  {
    rank: null,
    name: "Courtside Ventures",
    sectors: ["Consumer", "Media", "Gaming"],
    signatureExit: "Seed investment The Athletic was acquired by The New York Times for $550 million in 2022.",
    slug: "courtside-ventures",
    website: "https://courtsidevc.com",
    short: "Courtside",
    founded: 2016,
    hq: "New York, NY",
    aum: "$200M+ (site: \"$200M+ AUM Across 3 Funds\")",
    thesis: "Courtside Ventures is an early-stage venture firm that describes itself as the leading fund focused on sports, lifestyle and gaming, backing founders who serve younger demographics and emerging consumer behavior across fan engagement, collectibles, wellness and interactive entertainment. The firm launched in January 2016 with a $35 million first fund anchored by Cleveland Cavaliers owner Dan Gilbert alongside Bruin Sports Capital and advertising group WPP, and was originally headquartered in Detroit's Madison Building with a New York office; the firm is today headquartered in New York. Partners Vasu Kulkarni, Deepen Parikh and Kai Bond lead investing. In January 2023 Courtside closed its $100 million Fund III with limited partners including team owners Tony Ressler, Dan Gilbert and David Blitzer, athletes Shaquille O'Neal and Larry Fitzgerald, and corporates such as Dick's Sporting Goods and Superbet, bringing committed capital to more than $200 million across three funds. The firm reports more than 80 active investments across 8 countries, with about 20 percent based outside the US, and 9 companies acquired or taken public, including The Athletic, sold to The New York Times in 2022, and Beam, sold to Microsoft. Other notable portfolio companies include StockX, 100 Thieves, WinZO and Veo.",
    leadership: [
      { name: "Vasu Kulkarni", role: "Partner", profileSlug: "vasu-kulkarni" },
      { name: "Deepen Parikh", role: "Partner", profileSlug: "deepen-parikh" },
      { name: "Kai Bond", role: "Partner", profileSlug: "kai-bond" },
      { name: "Cort Post", role: "Principal", profileSlug: "cort-post" }
    ],
    timeline: [
      { year: "2016", event: "Launched in January with a $35 million first fund backed by Dan Gilbert, Bruin Sports Capital and WPP, headquartered in Detroit's Madison Building with a New York office to follow." },
      { year: "2017", event: "Announced its first-year portfolio, including leading the seed round of Y Combinator alum The Athletic." },
      { year: "2022", event: "Portfolio company The Athletic was acquired by The New York Times for $550 million." },
      { year: "2023", event: "Closed the $100 million Fund III with participation from Tony Ressler, Dan Gilbert, David Blitzer, Shaquille O'Neal, Larry Fitzgerald, Dick's Sporting Goods and Superbet." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Imaginary Ventures",
    sectors: ["Consumer", "Ecommerce", "Retail"],
    signatureExit: "Farfetch, which the firm lists among its exits, went public on the NYSE in 2018 and was later taken over by Coupang.",
    slug: "imaginary-ventures",
    website: "https://imaginary.co",
    short: "Imaginary",
    founded: 2018,
    hq: "New York, NY",
    aum: "$1 Billion in assets under management (firm's April 2022 release)",
    thesis: "Imaginary Ventures invests in what it calls generationally-defining consumer businesses and select enabling technology companies, spanning direct-to-consumer brands in fashion, beauty, food and wellness plus the commerce infrastructure behind them. The firm was founded in 2018 by Dame Natalie Massenet, who founded luxury etailer Net-a-Porter in 2000 and built it into a billion dollar business, and Nick Brown, previously a partner at 14W Venture Partners where he backed Glossier, Warby Parker and The RealReal. Based in New York, Imaginary launched with a $75 million first fund in 2018, raised a $160 million second fund announced in December 2020, and in April 2022 announced a $500 million Fund III across early and late stage vehicles, taking the firm to $1 billion in assets under management four years after launch. The portfolio includes SKIMS, Glossier, Mejuri, Daily Harvest, Reformation, GlossGenius, ShiftSmart and Stripe, and the firm counts Farfetch, Reformation and NuOrder among its exits. Imaginary differentiates on operator experience in brand building and retail rather than generalist software investing, pairing Massenet's three decades in consumer trends with Brown's early-stage consumer track record, and it invests from seed through growth in both North America and Europe.",
    leadership: [
      { name: "Natalie Massenet", role: "Co-Founder and General Partner", profileSlug: "natalie-massenet" },
      { name: "Nick Brown", role: "Co-Founder and General Partner", profileSlug: "nick-brown" },
      { name: "Kelly Dill", role: "Partner", profileSlug: "kelly-dill" },
      { name: "Logan Langberg", role: "Partner", profileSlug: "logan-langberg" },
      { name: "Andrew Maxman", role: "Partner", profileSlug: "andrew-maxman" }
    ],
    timeline: [
      { year: "2018", event: "Founded by Natalie Massenet and Nick Brown with a $75 million first fund." },
      { year: "2018", event: "Portfolio company Farfetch, later listed by the firm among its exits, went public on the NYSE in September at a $6.2 billion valuation." },
      { year: "2020", event: "Raised a $160 million second fund, more than double the size of the 2018 debut fund." },
      { year: "2022", event: "Announced the $500 million Fund III across early and late stage vehicles, growing funds under management to $1 billion, and promoted Kelly Dill and Logan Langberg to Partner." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "GSV Ventures",
    sectors: ["Education", "Edtech", "Workforce Development"],
    signatureExit: "Portfolio company Coursera completed its initial public offering on the NYSE in March 2021.",
    slug: "gsv-ventures",
    website: "https://gsv.ventures",
    short: "GSV Ventures",
    founded: 2016,
    hq: "Chicago, IL",
    aum: "$811.1M (regulatory assets under management, Form ADV, GSV Ventures Management, LLC)",
    thesis: "GSV Ventures is a venture fund investing exclusively in the digital learning and workforce skills market, backing entrepreneurs across what it calls the Pre-K to Gray arc of learning, from early childhood and K-12 through higher education and lifelong workforce upskilling. The fund was co-founded by Deborah Quazzo, its Managing Partner, and Michael Moe, founder of GSV, who now sits on the advisory board; Adam Freed serves as a second Managing Partner. GSV Fund I raised $97 million in limited partner commitments in 2016, and Fund II closed in March 2021 at $180 million, at which point the firm reported over $400 million in assets under management across the two funds and special purpose vehicles; the manager's Form ADV reports $811.1 million in regulatory assets under management. The portfolio has included Coursera, which went public on the NYSE in 2021, along with Course Hero, ClassDojo, MasterClass, Degreed, Guild Education, Andela, Photomath and Remind. GSV Ventures is distinct from GSV Capital, the former publicly traded fund that was renamed SuRo Capital, and is closely related to the ASU+GSV Summit, the annual education innovation conference that Quazzo co-founded with Arizona State University, which the firm links from its own site.",
    leadership: [
      { name: "Deborah Quazzo", role: "Managing Partner", profileSlug: "deborah-quazzo" },
      { name: "Adam Freed", role: "Managing Partner", profileSlug: "adam-freed" },
      { name: "Michael Cohn", role: "Co-Founder & Partner", profileSlug: "michael-cohn" },
      { name: "Luben Pampoulov", role: "Partner", profileSlug: "luben-pampoulov" },
      { name: "Claire Zau", role: "Partner (AI Lead)", profileSlug: "claire-zau" }
    ],
    timeline: [
      { year: "2016", event: "GSV Fund I raised $97 million in limited partner commitments to invest in the digital learning market." },
      { year: "2021", event: "Closed GSV Fund II at $180 million in equity commitments, bringing assets under management to over $400 million across the two funds and special purpose vehicles." },
      { year: "2021", event: "Portfolio company Coursera completed its initial public offering, with shares beginning trading on the NYSE under the ticker COUR in March." }
    ],
    holdings: [
      { name: "Coursera", ticker: "COUR", investedYear: null, historicalPrice: null, price: null }
    ]
  },

  /* ------------------------------------------------------------
     FIRMS 422-441, added 2026-08-23. Second sector-specialist batch.
     rank is null on all 20 by design. Sources for every non-null
     value are in the research sources.csv retained off-site.
     ------------------------------------------------------------ */
{
    rank: null,
    name: "Burnt Island Ventures",
    sectors: ["Water", "Climate", "Sustainability"],
    signatureExit: "No confirmed public exit yet; the firm's notable positions remain private.",
    slug: "burnt-island-ventures",
    website: "https://www.burntislandventures.com",
    short: "Burnt Island",
    founded: 2020,
    hq: "New York, NY",
    aum: "$50M, 2025 Fund II close ($30M Fund I, 2022)",
    thesis: "Burnt Island Ventures exists to find, fund, and support the best founders in water. The firm treats the global water sector as a trillion dollar industry hiding in plain sight, a market where aging infrastructure, tightening regulation, workforce turnover, and climate stress are pushing utilities and industrial customers to adopt new technology faster than at any point in decades. Its founding argument is that climate change is water change, so building resilience to floods, droughts, contamination, and scarcity is inseparable from the water business itself. Across two funds, a $30 million debut vehicle and a $50 million second fund, both anchored by the water technology company Xylem, Burnt Island backs early stage companies in advanced treatment and filtration, water data and artificial intelligence, digital productivity tools for utilities and operators, infrastructure resilience, and water reuse. The firm pairs capital with a deep operator network drawn from across the water industry, and it publishes research, a newsletter, and a podcast, The Fundamental Molecule, to widen the sector's talent and capital base. Fund I was deployed across 18 companies, and the firm reports top decile performance for that vintage.",
    leadership: [
      { name: "Tom Ferguson", role: "Founder and Managing Partner", profileSlug: "tom-ferguson" },
      { name: "Christine E. Boyle, PhD", role: "Partner", profileSlug: "christine-e-boyle" },
      { name: "Steve Kloos, PhD", role: "Partner", profileSlug: "steve-kloos" }
    ],
    timeline: [
      { year: "2020", event: "Tom Ferguson founded Burnt Island Ventures as a venture firm dedicated to early stage water companies." },
      { year: "2022", event: "Closed its debut fund at $30 million to back early stage water startups." },
      { year: "2025", event: "Closed Fund II at $50 million with Xylem as anchor investor, after deploying Fund I across 18 companies with two exits reported to date." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Quantonation",
    sectors: ["Quantum", "Deep Tech"],
    signatureExit: "No confirmed public exit yet; the firm's notable positions remain private.",
    slug: "quantonation",
    website: "https://www.quantonation.com",
    short: "Quantonation",
    founded: 2018,
    hq: "Paris, France",
    aum: "€220M, 2026 Quantonation II close (€91M Fund I, 2018 vintage)",
    thesis: "Quantonation calls itself the world's only physics focused venture fund. Based in Paris and investing since 2018, the firm backs startups built on breakthrough advances in physics and computing, with a portfolio spanning quantum computing hardware and software, quantum communications and networks, quantum sensing, and a widening circle of deep physics applications such as advanced materials and photonics. It enters early, from pre seed to Series A with selective follow on into Series B, and works closely with scientific founders to bring technologies out of the lab and into commercial use. Its first fund, a 91 million euro vehicle launched in 2018, backed 27 companies including Pasqal, Quandela, Multiverse Computing, and Nord Quantique, and the firm reports that the vintage performed in the top quartile globally. Its oversubscribed second fund closed at 220 million euros in February 2026, above its 200 million euro target, to back what the firm calls the industrialisation of quantum and physics based technologies across Europe, North America, and Asia Pacific. The close made Quantonation the largest dedicated quantum investment firm globally by assets under management.",
    leadership: [
      { name: "Christophe Jurczak", role: "Partner", profileSlug: "christophe-jurczak" },
      { name: "Olivier Tonneau", role: "Partner", profileSlug: "olivier-tonneau" }
    ],
    timeline: [
      { year: "2018", event: "Quantonation launched in Paris as an early stage fund dedicated to quantum technologies and deep physics, with a first fund that reached 91 million euros and backed 27 companies." },
      { year: "2023", event: "Quantum computing pioneer Will Zeng, formerly of Rigetti and Goldman Sachs, joined the firm as a partner." },
      { year: "2025", event: "The European Investment Fund committed 30 million euros to Quantonation II, following an investment by Novo Holdings announced earlier that year." },
      { year: "2026", event: "Closed the oversubscribed Quantonation II at 220 million euros, exceeding its 200 million euro target and making the firm the largest dedicated quantum investor by assets under management." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "The LegalTech Fund",
    sectors: ["Legal Tech", "Enterprise Software", "SaaS"],
    signatureExit: "No confirmed public exit yet; the firm's notable positions remain private.",
    slug: "the-legaltech-fund",
    website: "https://www.legaltech.com",
    short: "LegalTech Fund",
    founded: 2021,
    hq: "Fort Lauderdale, FL",
    aum: "$110M, 2025 Fund II close ($28.5M Fund I, 2022)",
    thesis: "The LegalTech Fund describes itself as the first venture fund solely dedicated to backing companies transforming the world of law. The firm invests in software and services aimed at a legal industry it sizes at a trillion dollars, spanning tools for law firms, corporate legal departments, compliance and regulatory work, and broader access to legal services. It typically enters at the earliest stages and surrounds its founders with an unusually large network for a fund of its size, including more than 120 fund advisors, general partners with more than 25 years of combined experience, and a stated one thousand plus introductions made each year between founders, customers, capital partners, and acquirers. Beyond investing, the firm convenes the legal innovation ecosystem through its annual TLTF Summit and runs The LegalTech Lab for founders. Across its $28.5 million first fund and its oversubscribed $110 million second fund, closed in November 2025, the firm has backed more than 80 companies, with recent investments including Wexler, Entegrata, Flo Recruit, HelloPrenup, BlackCloak, and SimpleClosure. Its backers include major law firms and strategic investors from the legal and technology industries.",
    leadership: [
      { name: "Zach Posner", role: "Managing Partner & Co-Founder", profileSlug: "zach-posner" },
      { name: "Sam Elhag", role: "Managing Partner & Co-Founder", profileSlug: "sam-elhag" },
      { name: "Gordon Crenshaw", role: "Partner", profileSlug: "gordon-crenshaw" },
      { name: "Carly Levin", role: "Partner, Strategic Initiatives", profileSlug: "carly-levin" }
    ],
    timeline: [
      { year: "2021", event: "Zach Posner and Sam Elhag founded The LegalTech Fund in Fort Lauderdale as the first venture fund solely dedicated to companies transforming the legal industry." },
      { year: "2022", event: "Closed its first fund at $28.5 million with backers including law firms and strategic investors such as DocuSign and Carta." },
      { year: "2025", event: "Closed its oversubscribed second fund at $110 million in November, having backed more than 80 companies across both funds." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Motion Ventures",
    sectors: ["Maritime", "Logistics", "Sustainability"],
    signatureExit: "Portfolio company DeepSea Technologies, an AI vessel efficiency platform in Motion's Fund I portfolio, was acquired by Japan's Nabtesco Group in 2023.",
    slug: "motion-ventures",
    website: "https://www.motion.vc",
    short: "Motion",
    founded: 2021,
    hq: "Singapore, Singapore",
    aum: "US$100M (Fund II, launched March 2025 with more than half raised)",
    thesis: "Motion Ventures backs early stage companies accelerating digital and energy transitions across global supply chains, with maritime at the core. Launched in Singapore in 2021 by the venture studio Rainmaking, the firm raised a first fund with an initial close of S$30 million anchored by SEEDS Capital, the investment arm of Enterprise Singapore, alongside strategic maritime investors such as Wilhelmsen and the port logistics group HHLA. Its defining asset is a corporate limited partner consortium the firm describes as the largest group of maritime corporates backing any fund, spanning shipowners, ports, classification societies and logistics groups including Lloyd's Register and Stolt-Nielsen. That network gives portfolio companies pilot customers and distribution inside a famously hard to enter industry. Investment themes include decarbonisation, supply chain resilience, safety, and AI and automation applied to shipping operations. In March 2025 Motion launched Fund II at US$100 million, described as the largest dedicated maritime tech fund raised to date, writing cheques of US$250,000 to US$10 million into roughly 25 companies, and extending its scope from software into asset intensive hardware solutions for the industry's energy transition.",
    leadership: [
      { name: "Shaun Hon", role: "Founder and General Partner", profileSlug: "shaun-hon" },
      { name: "Chiew Tung Lim", role: "Director of Finance", profileSlug: "chiew-tung-lim" }
    ],
    timeline: [
      { year: "2021", event: "Rainmaking launched Motion Ventures in Singapore with a S$30 million first close backed by SEEDS Capital, Wilhelmsen and HHLA." },
      { year: "2023", event: "The firm added ten corporate partners including Lloyd's Register and Stolt-Nielsen, growing its maritime consortium to 15 companies across 12 regions." },
      { year: "2023", event: "Portfolio company DeepSea Technologies was acquired by the Nabtesco Group, giving the young fund a realised exit." },
      { year: "2025", event: "Motion launched Fund II at US$100 million, described as the largest dedicated maritime tech fund to date, backed by 17 strategic industry corporations." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "RH Capital",
    sectors: ["Healthcare", "Digital Health", "Life Sciences", "Biotech"],
    signatureExit: "Portfolio company Ovia Health, a maternal and family health app maker, was acquired by Labcorp in 2021.",
    slug: "rh-capital",
    website: "https://rhcapital.vc",
    short: "RH Capital",
    founded: 2019,
    hq: "San Francisco, CA",
    aum: "$43.5M (combined AUM across Funds I and II at Fund II close, 2022)",
    thesis: "RH Capital is an impact first venture fund investing exclusively in women's health at Seed and Series A. It was created in 2019 as the wholly owned investment subsidiary of Rhia Ventures, a nonprofit that uses capital to improve reproductive and maternal health in the United States, and it grew out of an initiative philanthropist Dr. Ruth Shaber began with Rhia in 2017. The fund invests across devices, diagnostics, digital health, health services, therapeutics and consumer health, targeting maternal health, contraception, fertility, menopause, gynecological conditions, pelvic health and women's oncology. Every investment is screened against four impact pillars, transformative innovation, access, affordability and systemic change, with particular attention to historically underserved populations, and more than 90 percent of its portfolio companies have women or BIPOC founders. Fund I raised $5 million in 2019; the oversubscribed Fund II closed at $38.5 million in 2022, bringing combined assets to $43.5 million across more than 20 companies including Ovia Health and Nurx. On October 1, 2024 the investment team spun out of Rhia Ventures to form the independent firm Foreground Capital, which continues to manage RH Capital Funds I and II while raising a larger successor vehicle under the new name.",
    leadership: [
      { name: "Elizabeth Bailey", role: "Managing Partner", profileSlug: "elizabeth-bailey" },
      { name: "Stasia Obremskey", role: "Managing Partner", profileSlug: "stasia-obremskey" },
      { name: "Alice Zheng, MD", role: "Partner", profileSlug: "alice-zheng" }
    ],
    timeline: [
      { year: "2017", event: "Philanthropist Dr. Ruth Shaber began the women's health investing initiative at nonprofit Rhia Ventures from which RH Capital emerged." },
      { year: "2019", event: "RH Capital launched and raised a $5 million Fund I, filing its first Form D for RH Capital Fund I, LP in June 2019." },
      { year: "2021", event: "Portfolio company Ovia Health was acquired by Labcorp, an early realised exit for Fund I." },
      { year: "2022", event: "The oversubscribed Fund II closed at $38.5 million, bringing combined assets under management to $43.5 million." },
      { year: "2024", event: "Effective October 1, the investment team spun out of Rhia Ventures as independent firm Foreground Capital, which continues to manage RH Capital Funds I and II." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "MTech Capital",
    sectors: ["Insurtech", "Fintech", "AI"],
    signatureExit: "Travelers completed its $435 million acquisition of MTech portfolio company Corvus Insurance, a cyber insurance MGA, in January 2024.",
    slug: "mtech-capital",
    website: "https://www.mtechcapital.com",
    short: "MTech",
    founded: 2018,
    hq: "Santa Monica, CA",
    aum: "Approximately $100M (single fund, per co-founder interview, 2022)",
    thesis: "MTech Capital is a venture firm built around a single conviction, stated on its site: technology will revolutionize all aspects of the insurance industry, vastly improving the customer experience, automating claims and policy administration, enabling deeper insights from data for underwriting, and providing the foundation for entirely new models of insurance. Founded by brothers Brian and Kevin McLoughlin, who combine long careers in fintech venture capital and insurance investment banking, the firm raised capital in 2018 and 2019 from strategic investors including some of the world's largest insurers, brokers and asset managers, among them CNA Financial and NN Group, with a $75 million first close announced in July 2018. From offices in Santa Monica and London it invests across North America and Europe, typically at Series A with cheques of roughly $3 million to $4 million, in a broad array of areas related to insurance and financial services, including benefits, retirement and asset management infrastructure, with a growing focus on applying AI to transform customer experience and employee productivity. Portfolio companies include Akur8, Bold Penguin, Corvus, CyberCube, Matic, Openly and Unqork, and its MTech Elevate program pairs founders with experienced industry mentors.",
    leadership: [
      { name: "Brian McLoughlin", role: "Partner and Co-Founder", profileSlug: "brian-mcloughlin" },
      { name: "Kevin McLoughlin", role: "Partner and Co-Founder", profileSlug: "kevin-mcloughlin" }
    ],
    timeline: [
      { year: "2018", event: "MTech Capital held a $75 million first close backed by CNA Financial and NN Group, filing its first fund's Form D from Santa Monica and incorporating MTech Capital Management (UK) LLP in London." },
      { year: "2019", event: "The firm invested in commercial insurance exchange Bold Penguin, an early portfolio cornerstone." },
      { year: "2021", event: "Portfolio company Bold Penguin was acquired by American Family Insurance." },
      { year: "2024", event: "Travelers completed its $435 million acquisition of portfolio company Corvus Insurance, and MTech filed a Form D for MTech Capital Fund II LP." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "True Beauty Ventures",
    sectors: ["Beauty", "Consumer"],
    signatureExit: "Haircare brand K18, which True Beauty Ventures backed across three rounds, was acquired by Unilever in a deal announced in December 2023 that reportedly returned close to 80 percent of the firm's debut fund.",
    slug: "true-beauty-ventures",
    website: "https://truebeautyventures.com",
    short: "True Beauty",
    founded: 2020,
    hq: null,
    aum: "$42 million+ (Fund I final close, July 2021)",
    thesis: "True Beauty Ventures is a specialist fund built on the conviction that in beauty, being an insider is a superpower. The firm invests exclusively in emerging beauty and wellness brands from Seed through Series B, writing first checks of roughly 1 to 5 million dollars into companies that already show product excellence, differentiated positioning and strong early performance. Co-founders Rich Gersten and Cristina Nuñez spent their careers investing in and operating consumer and beauty companies at firms including L Catterton, Tengram Capital and North Castle Partners, and they built True Beauty to serve a gap they saw firsthand: exceptional young brands too small for traditional private equity but underserved by generalist venture capital. The firm pairs capital with a hands-on, private equity style partnership model, drawing on a network of retail, supply chain, talent and Amazon platform partners plus limited partners who are themselves beauty founders and executives. Its portfolio spans prestige haircare, skincare, wellness and intimacy brands such as K18, Crown Affair, Maude, Moon Juice and Caliray. The thesis is concentration over volume, with a deliberately small number of brand partners per fund so the team can work closely with each founder through scaling, retail expansion and eventual strategic exit.",
    leadership: [
      { name: "Rich Gersten", role: "Co-Founder & Managing Partner", profileSlug: "rich-gersten" },
      { name: "Cristina Nuñez", role: "Co-Founder & General Partner", profileSlug: "cristina-nunez" }
    ],
    timeline: [
      { year: "2020", event: "Rich Gersten, later joined by Cristina Nuñez, launches the specialist beauty and wellness investment firm that becomes True Beauty Ventures." },
      { year: "2021", event: "True Beauty Ventures closes its debut fund in excess of $42 million, surpassing its initial $30 million target, backed by beauty founders and executives." },
      { year: "2023", event: "Unilever announces its agreement to acquire portfolio brand K18, reportedly returning close to 80 percent of Fund I's capital." },
      { year: "2024", event: "The firm nears the close of its second fund, with about $70 million committed toward a $75 million target as of June 2024." },
      { year: "2024", event: "True Beauty Ventures is recognized in WWD's Beauty's Most Powerful Financiers list." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "imec.xpand",
    sectors: ["Semiconductors", "Deep Tech", "AI"],
    signatureExit: "Optical interconnect portfolio company Celestial AI was acquired by Marvell Technology in a deal announced in December 2025 at $3.3 billion and completed in early 2026.",
    slug: "imec-xpand",
    website: "https://imecxpand.com",
    short: "imec.xpand",
    founded: 2017,
    hq: "Leuven, Belgium",
    aum: "EUR 300 million (Fund II final close, May 2024; Fund I of EUR 117 million closed 2018)",
    thesis: "imec.xpand is an independent, globally investing venture capital fund with deep-rooted connections to imec, the Leuven based nanoelectronics research institute. The fund is managed independently and is not imec itself, but it was established in collaboration with the institute and imec is among its limited partners, a structure comparable to how Engine Ventures relates to MIT's The Engine. That privileged relationship gives the fund's partners direct access to imec's researchers, intellectual property and cleanroom infrastructure, which they use to assess the technological feasibility and scalability of early stage deeptech companies before investing. The strategy targets transformative semiconductor, nanotechnology and photonics innovations where imec's contribution can have a determining impact on a company's technology development, spanning hardware for artificial intelligence, quantum computing, optical interconnect, imaging and health technology. The team combines seasoned venture investors with former entrepreneurs and imec veterans, and takes a hands-on role in company building from spin-out through global scale-up. Its first fund of 117 million euros closed in 2018 with corporate backers including Samsung, Philips and Applied Materials alongside imec and Flemish institutions, and a 300 million euro second fund closed in May 2024, positioning the firm as one of Europe's largest specialist semiconductor venture investors.",
    leadership: [
      { name: "Tom Vanhoutte", role: "Partner & Co-founder", profileSlug: "tom-vanhoutte" },
      { name: "Peter Vanbekbergen", role: "Partner & Co-founder", profileSlug: "peter-vanbekbergen" }
    ],
    timeline: [
      { year: "2017", event: "imec.xpand launches as an independent venture fund created in collaboration with the imec research institute." },
      { year: "2018", event: "The firm raises EUR 117 million for its first fund, with backers including imec, Samsung, Philips, Applied Materials and Flemish government entities." },
      { year: "2024", event: "imec.xpand closes its second fund at EUR 300 million, exceeding its EUR 250 million target, amid the global race for semiconductor supremacy." },
      { year: "2025", event: "Ciena agrees to acquire portfolio company Nubis Communications for $270 million." },
      { year: "2026", event: "Marvell Technology completes its acquisition of portfolio company Celestial AI, a deal announced at $3.3 billion." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "KdT Ventures",
    sectors: ["Biotech", "Life Sciences", "Deep Tech", "Healthcare"],
    signatureExit: "Skin microbiome company Azitra, a KdT Fund I portfolio company, completed its initial public offering on NYSE American in June 2023 and trades under the ticker AZTR.",
    slug: "kdt-ventures",
    website: "https://www.kdtvc.com",
    short: "KdT Ventures",
    founded: 2017,
    hq: "Austin, TX",
    aum: "More than $250 million (stated at Fund IV close, October 2024)",
    thesis: "KdT Ventures positions itself as the standard for early stage frontier science investing. The firm's core observation is that while software has transformed the digital world, the physical layer of medicine, chemicals and materials has barely changed, and that advances in computation and biology now put that physical layer in play. KdT writes first institutional checks, typically 500 thousand to 5 million dollars at pre-seed and seed, into founders engineering matter at the level of molecules, atoms and living systems. The portfolio spans therapeutics, diagnostics, synthetic biology, industrial biotechnology, new materials, digital health and scientific tools, with companies such as Terray Therapeutics, Dyno Therapeutics, Solugen, PathAI and Azitra among those backed since the firm's founding by physician Cain McClary in 2017. The investment team is unusually technical, with most members holding advanced scientific, medical or legal degrees, and the firm leans on that depth to underwrite scientific risk at inception and to help founders design companies, recruit teams and structure early partnerships. Now investing from an oversubscribed fourth fund of more than 100 million dollars closed in October 2024, KdT manages over 250 million dollars and has backed more than 65 companies across the physical layer supply chain.",
    leadership: [
      { name: "Cain McClary", role: "Managing Partner & Founder", profileSlug: "cain-mcclary" },
      { name: "Mack Healy", role: "Managing Partner", profileSlug: "mack-healy" },
      { name: "Phil Grayeski", role: "Managing Partner", profileSlug: "phil-grayeski" },
      { name: "Patrick Malone", role: "Partner", profileSlug: "patrick-malone" }
    ],
    timeline: [
      { year: "2017", event: "Cain McClary founds KdT Ventures to invest at the intersection of frontier computational science and the life sciences." },
      { year: "2018", event: "KdT closes its oversubscribed inaugural fund, with early portfolio companies including PathAI, Solugen, Checkerspot and Azitra." },
      { year: "2022", event: "The firm celebrates its five year anniversary, closes an oversubscribed $80 million Fund III and promotes Phil Grayeski to Partner." },
      { year: "2023", event: "Portfolio company Azitra completes its initial public offering on NYSE American in June." },
      { year: "2024", event: "KdT closes its oversubscribed Fund IV at more than $100 million, bringing assets under management above $250 million, and promotes Phil Grayeski to Managing Partner and Patrick Malone to Partner." }
    ],
    holdings: [
      { name: "Azitra", ticker: "AZTR", investedYear: null, historicalPrice: null, price: null }
    ]
  },
  {
    rank: null,
    name: "Superorganism",
    sectors: ["Biodiversity", "Climate", "Deep Tech"],
    signatureExit: "No confirmed public exit yet; the firm's notable positions remain private.",
    slug: "superorganism",
    website: "https://www.superorganism.com",
    short: "Superorganism",
    founded: 2023,
    hq: "New York, NY",
    aum: "$25.9M (debut fund, closed January 2026)",
    thesis: "Superorganism describes itself as the first venture firm dedicated to biodiversity. The firm backs pre-seed and seed startups that can bend the curve on nature loss while building durable businesses, typically investing alongside other funds rather than leading rounds. Its thesis groups opportunities into three categories. The first covers companies transforming the industries that drive extinction, including agriculture, cities, pollution, invasive species and the materials economy. The second targets the intersection of climate and biodiversity, spanning forests, oceans, soil, wildfire, adaptation and the monitoring, reporting and verification of natural systems. The third backs enabling technologies such as artificial intelligence, genomics, biomanufacturing, remote sensing, robotics and fintech with downstream applications for conservation. The founders argue that the old assumption that nature and economic progress must always conflict is outdated, and that startups can reshape industries so that humans and ecosystems benefit together. Co-founder Kevin Webb has described the firm as the closest thing to a conservationist on a cap table. Superorganism closed a debut fund of 25.9 million dollars in January 2026, had backed roughly 20 startups at that point with plans to reach about 35, and has pledged 10 percent of firm profits to future conservation efforts.",
    leadership: [
      { name: "Tom Quigley", role: "Managing Director", profileSlug: "tom-quigley" },
      { name: "Kevin Webb", role: "Managing Director", profileSlug: "kevin-webb" }
    ],
    timeline: [
      { year: "2023", event: "Superorganism launched publicly as the first venture capital firm dedicated to biodiversity, investing at pre-seed and seed alongside other funds." },
      { year: "2023", event: "Early investments included Inversa, a startup making leather from invasive species, with checks initially ranging from roughly 500,000 to 3 million dollars." },
      { year: "2026", event: "Closed its 25.9 million dollar debut fund in January with about 20 portfolio companies and limited partners including Builders Vision, the Cisco Foundation and Wedgetail." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Closed Loop Partners",
    sectors: ["Circular Economy", "Sustainability", "Climate"],
    signatureExit: "Compost processor Atlas Organics, an early Closed Loop Ventures investment, was acquired by Generate Capital in a January 2022 majority-stake deal reported as a full exit for its early investors.",
    slug: "closed-loop-partners",
    website: "https://www.closedlooppartners.com",
    short: "Closed Loop",
    founded: 2014,
    hq: "New York, NY",
    aum: "$575M+ (firm-stated, as of December 31, 2023)",
    thesis: "Closed Loop Partners is built around the idea that the circular economy, which designs out waste, keeps products and materials in circulation and regenerates natural systems, is both an environmental necessity and a large investment opportunity. Founded in New York in 2014 by Ron Gonen, the platform combines an investment firm, an innovation center and an operating group. Closed Loop Capital Management houses the investment strategies. The Closed Loop Ventures Group is the early stage vehicle, providing venture capital to companies advancing circular solutions across packaging, food systems, fashion, supply chains and materials science. A buyout private equity strategy, anchored by the Closed Loop Leadership Fund, acquires and scales established circular economy businesses. A catalytic capital and private credit strategy, which grew out of the firm's original recycling infrastructure funds, finances recycling facilities, materials recovery and end market development projects. The Center for the Circular Economy conducts research and runs multi stakeholder collaborations such as the NextGen Consortium with major consumer brands, while Closed Loop Builders operates companies including Circular Services, described by the firm as the largest privately held recycling and composting company in the United States. Across its vehicles the firm reports keeping billions of dollars worth of plastics, packaging, organics, textiles and electronics in circulation.",
    leadership: [
      { name: "Ron Gonen", role: "Founder & Chief Executive Officer", profileSlug: "ron-gonen" },
      { name: "Tazia Smith", role: "Managing Partner | Closed Loop Partners; CEO | Closed Loop Capital Management", profileSlug: "tazia-smith" },
      { name: "Jessica Long", role: "Managing Partner & Chief Strategy Officer | Closed Loop Partners; CEO | Closed Loop Builders", profileSlug: "jessica-long" },
      { name: "Kate Daly", role: "Managing Partner | Closed Loop Partners; CEO | Center for the Circular Economy", profileSlug: "kate-daly" },
      { name: "Danielle Joseph", role: "Managing Director | Ventures", profileSlug: "danielle-joseph" }
    ],
    timeline: [
      { year: "2014", event: "Ron Gonen founded Closed Loop Partners in New York with backing from the Walmart Foundation and a group of major corporations." },
      { year: "2017", event: "The firm achieved B Corp certification." },
      { year: "2018", event: "Launched the Center for the Circular Economy and initiated the NextGen Consortium with major consumer brands." },
      { year: "2021", event: "The Closed Loop Ventures Group raised a Fund II of more than 50 million dollars to back early-stage circular economy companies." },
      { year: "2022", event: "The Closed Loop Leadership Fund, the firm's buyout private equity fund, held its final close with assets managed in excess of 200 million dollars, and the firm launched Circular Services as its first operating company." },
      { year: "2023", event: "Circular Services received nearly 1 billion dollars in commitments and the firm's assets under management exceeded 500 million dollars." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Dynamo Ventures",
    sectors: ["Logistics", "Industrial Tech", "Mobility"],
    signatureExit: "No confirmed public exit yet; the firm's notable positions remain private.",
    slug: "dynamo-ventures",
    website: "https://www.dynamo.vc",
    short: "Dynamo",
    founded: 2016,
    hq: "Chattanooga, TN",
    aum: "$54M (Fund III close, May 2025)",
    thesis: "Dynamo Ventures is a pre-seed and seed investor focused on the supply chain and the wider physical economy, operating from Chattanooga, Tennessee, a freight hub its founders helped build into a logistics startup community. The firm positions itself as a first check investor for founders working across manufacturing, logistics, warehousing, freight, trade and last mile delivery. Its current thesis holds that intelligence is moving into critical infrastructure, that technology is colliding with physics, and that manufacturing capacity is being rewired, creating openings for startups that change how goods are made, moved and sold. Dynamo grew out of an accelerator launched in 2016 by the founders of Access America Transport and Lamp Post Group together with Santosh Sankar, and evolved into a fund platform that has raised three vehicles, from an 18 million dollar Fund I in 2016 to a 54 million dollar Fund III closed in 2025. The firm backs founders globally and has invested in companies including Stord in omnichannel fulfillment, Gatik in autonomous middle mile delivery, Sennder in digital freight brokerage, Manna in drone delivery and Raft in AI powered freight forwarding. Its stated purpose is to back the relentless founders shaping the next era of industry.",
    leadership: [
      { name: "Santosh Sankar", role: "Co-founder & Managing Partner", profileSlug: "santosh-sankar" },
      { name: "Jon Bradford", role: "Co-founder & Managing Partner", profileSlug: "jon-bradford" },
      { name: "Ted Alling", role: "Co-founder & Partner", profileSlug: "ted-alling" },
      { name: "Barry Large", role: "Co-founder & Partner", profileSlug: "barry-large" }
    ],
    timeline: [
      { year: "2016", event: "The founders of Access America Transport and Lamp Post Group, together with Santosh Sankar, launched the Dynamo accelerator in Chattanooga and raised an 18 million dollar Fund I." },
      { year: "2020", event: "Dynamo Ventures closed Fund II at about 43 million dollars to make pre-seed and seed supply chain investments in the US and Europe." },
      { year: "2025", event: "Closed the 54 million dollar Fund III and completed a secondary sale of Fund I positions to Kline Hill Partners, returning capital to early limited partners at a reported return of more than 4x." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Digitalis Ventures",
    sectors: ["Healthcare", "Life Sciences", "Biotech", "Animal Health"],
    signatureExit: "No confirmed public exit yet; the firm's notable positions remain private.",
    slug: "digitalis-ventures",
    website: "https://www.digitalisventures.com",
    short: "Digitalis",
    founded: 2016,
    hq: "New York, NY",
    aum: "$300M (Companion Fund II close, 2023)",
    thesis: "Digitalis Ventures is a New York based venture firm investing in solutions to unmet needs in biomedicine and health. The firm approaches healthcare with what it calls an engineering mindset, backing early stage life sciences and healthcare technology companies whose science can produce transformational impact for patients, and it invests across the United States, the United Kingdom, and Europe. Digitalis runs two complementary strategies. Its human health funds, including a fourth fund closed at 300 million dollars in 2022, target breakthrough science addressing critical unmet medical needs. Its dedicated Companion Funds, raised in partnership with Mars, apply the same discipline to animal health, funding companies that use science, technology, and design to improve the lives of pets, pet owners, and veterinarians across veterinary diagnostics, veterinary medicine, information technologies, and online platforms. Companion Fund I launched in 2018 with 100 million dollars and Companion Fund II followed in 2023 with 300 million dollars. The firm sits within the broader Digitalis Group, which also houses Digitalis Commons, a nonprofit building public goods for health, and Digitalis Labs, an applied research group, giving the investment team a platform for research and company creation alongside its funds. Leadership pairs founder Geoffrey W. Smith with Managing Partner Misti Ushio, drawing on legal, academic, operating, and company building experience across biotechnology and pharmaceuticals.",
    leadership: [
      { name: "Geoffrey W. Smith", role: "Founder / Managing Partner", profileSlug: "geoffrey-w-smith" },
      { name: "Misti Ushio", role: "Managing Partner", profileSlug: "misti-ushio" }
    ],
    timeline: [
      { year: "2016", event: "Geoffrey W. Smith founds Digitalis Ventures in New York to invest in solutions to unmet needs in biomedicine and health." },
      { year: "2017", event: "The firm's debut 100 million dollar fund focused on health solutions is reported in January." },
      { year: "2018", event: "Digitalis and Mars launch Companion Fund I, a 100 million dollar fund dedicated to animal health." },
      { year: "2022", event: "Digitalis Ventures closes its fourth fund at 300 million dollars for early stage life sciences and healthcare technology companies in the US, UK, and Europe." },
      { year: "2023", event: "Misti Ushio is appointed Managing Partner in January." },
      { year: "2023", event: "Mars and Digitalis launch the 300 million dollar Companion Fund II to invest in pet health across the United States and Europe." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Cybernetix Ventures",
    sectors: ["Robotics", "Industrial Tech", "AI", "Logistics", "Construction Tech"],
    signatureExit: "No confirmed public exit yet; the firm's notable positions remain private.",
    slug: "cybernetix-ventures",
    website: "https://cybernetix.vc",
    short: "Cybernetix",
    founded: 2021,
    hq: "Boston, MA",
    aum: "$50M (Fund I target at 2022 launch, $25M committed)",
    thesis: "Cybernetix Ventures is a Boston based venture capital firm founded in 2021 to invest exclusively in robotics, automation, and industrial AI. The firm backs pre-seed, seed, and Series A startups across North America and Europe, writing initial checks of roughly 100 thousand to 2 million dollars. Its thesis is that robotics and physical AI are entering an accelerated growth phase as labor shortages, reshoring, and maturing autonomy push intelligent machines into the physical economy. Cybernetix concentrates on verticals where automation solves acute operational problems: advanced manufacturing, logistics and warehousing, architecture, engineering and construction, healthcare and medical devices, agriculture, and climate and sustainability. It also funds the enabling layer beneath these applications, including industrial AI, cloud infrastructure for robotics, cybersecurity for robotics, autonomy software, and sensors and edge computing. The firm was launched by two robotics operators rather than generalist financiers: Fady Saad, co-founder of the MassRobotics startup hub, and Mark Martin, a former Analog Devices vice president who ran a billion dollar industrial automation and sensing business. That operating network, plus an advisory bench drawn from iRobot, Amazon Robotics, and Locus Robotics, is central to its model of helping hardware founders reach commercial deployment. Fund I launched in 2022 targeting 50 million dollars and backed 23 early stage companies, and in 2025 the firm announced it was raising a 100 million dollar second fund.",
    leadership: [
      { name: "Fady Saad", role: "General Partner", profileSlug: "fady-saad" },
      { name: "Mark Martin", role: "General Partner", profileSlug: "mark-martin" }
    ],
    timeline: [
      { year: "2021", event: "Fady Saad and Mark Martin found Cybernetix Ventures in Boston." },
      { year: "2022", event: "The firm publicly launches Cybernetix Fund I, a 50 million dollar fund for early stage robotics, automation, and AI companies, with 25 million dollars already committed." },
      { year: "2024", event: "Cybernetix introduces the Robotics Startup Playbook, a guide for robotics founders." },
      { year: "2025", event: "The firm announces it is raising a 100 million dollar second fund, with Fund I having invested in 23 early stage companies across the US and Europe." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "MetaProp",
    sectors: ["Proptech", "Construction Tech", "Enterprise Software"],
    signatureExit: "Fund I portfolio company Avail, MetaProp's first investment, was acquired by Realtor.com operator Move, Inc. in December 2020.",
    slug: "metaprop",
    website: "https://www.metaprop.com",
    short: "MetaProp",
    founded: 2015,
    hq: "New York, NY",
    aum: "$100M (MetaProp Ventures III close, 2021)",
    thesis: "MetaProp is a New York venture capital firm founded in 2015 that invests at the intersection of real estate and technology. The firm describes itself as the world's most active investment firm focused on the built world, backing innovations that finance, insure, design, manage, measure, and power real estate across asset classes. It has made more than 150 investments in proptech companies since inception, concentrating on early stage rounds through funds such as MetaProp Ventures III, a 100 million dollar vehicle closed in 2021 that the firm called the largest global proptech seed fund of its kind. MetaProp's model ties startups to the industry they serve. Its limited partners include strategic real estate owners and operators representing more than 20 billion square feet of property worldwide, giving portfolio companies pilot sites, distribution, and customer relationships, and its Innovation Services platform makes hundreds of industry introductions for portfolio companies each year. The firm helped build the proptech category itself, launching the MetaProp Accelerator at Columbia University, NYC Real Estate Tech Week, and the Global PropTech Confidence Index, while co-founders Aaron Block and Zach Aarons wrote the category defining book PropTech 101. Early outcomes include Avail, acquired by Realtor.com operator Move in 2020, and a 2016 seed investment in Attentive, which reached a 2.2 billion dollar valuation in 2020.",
    leadership: [
      { name: "Aaron Block", role: "Co-Founder & Managing Partner", profileSlug: "aaron-block" },
      { name: "Zach Aarons", role: "Co-Founder & General Partner", profileSlug: "zach-aarons" },
      { name: "Zak Schwarzman", role: "General Partner", profileSlug: "zak-schwarzman" }
    ],
    timeline: [
      { year: "2015", event: "Aaron Block and Zach Aarons found MetaProp in New York and run the inaugural MetaProp Accelerator at Columbia University." },
      { year: "2016", event: "Zak Schwarzman joins as General Partner and the firm makes a seed investment in Attentive." },
      { year: "2020", event: "Fund I's first investment Avail is acquired by Realtor.com operator Move, Inc. in December, and Attentive reaches a 2.2 billion dollar valuation." },
      { year: "2021", event: "MetaProp closes MetaProp Ventures III at 100 million dollars, which the firm called the largest global proptech seed fund." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Owl Ventures",
    sectors: ["Edtech", "AI"],
    signatureExit: "DreamBox Learning, the K-8 adaptive math platform Owl backed and board-served, was acquired by Clearlake Capital-backed Discovery Education in 2023.",
    slug: "owl-ventures",
    website: "https://owlvc.com",
    short: "Owl Ventures",
    founded: 2014,
    hq: "San Francisco, CA",
    aum: "$2.2B+ committed capital (as stated on firm site, 2026)",
    thesis: "Owl Ventures invests exclusively in education technology, which the firm treats as one global market running from early childhood and K-12 through higher education and into workforce training and lifelong learning. Founded in 2014, the firm now describes itself as a global leader investing in AI driven learning and as the defining global investor in EdTech, backing companies at every stage. Its own materials cite more than $2.2 billion in committed capital across seven funds, over 100 investments, and portfolio products reaching more than 634 million users around the world. The strategy pairs core venture funds with dedicated opportunity funds that concentrate capital in late stage breakout companies, a structure the firm used in its 2020 and 2022 fund closes. Owl also emphasizes measurable outcomes, publishing impact reporting on access and efficacy alongside financial performance. From offices in San Francisco, Boston, London, and Dubai, the team invests across North America, Europe, Asia, and Africa, arguing that education and workforce development are converging into one of the largest and most durable technology markets in the world.",
    leadership: [
      { name: "Tory Patterson", role: "Co-founder and Managing Partner", profileSlug: "tory-patterson" },
      { name: "Amit A. Patel", role: "Co-founder and Managing Partner", profileSlug: "amit-a-patel" },
      { name: "Tom Costin", role: "Co-founder and Managing Partner", profileSlug: "tom-costin" },
      { name: "Ian Chiu", role: "Managing Partner", profileSlug: "ian-chiu" }
    ],
    timeline: [
      { year: "2014", event: "Owl Ventures is founded as a venture capital firm investing exclusively in education technology." },
      { year: "2017", event: "The firm closes its $185 million second fund with global backers." },
      { year: "2019", event: "Owl raises a $315 million third fund, bringing assets under management above $600 million." },
      { year: "2020", event: "The firm closes $585 million across Fund IV and its first Opportunity Fund." },
      { year: "2022", event: "Owl closes over $1 billion across a $640 million Fund V and a $270 million Opportunity Fund II, taking assets under management past $2 billion." },
      { year: "2023", event: "Portfolio company DreamBox Learning is acquired by Clearlake Capital-backed Discovery Education." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "Future Ventures",
    sectors: ["Deep Tech", "Space", "Robotics", "Quantum"],
    signatureExit: "MosaicML, the generative AI platform in Future Ventures' portfolio, was acquired by Databricks in 2023 in a deal valued at $1.3 billion.",
    slug: "future-ventures",
    website: "https://future.ventures",
    short: "Future Ventures",
    founded: 2018,
    hq: "Los Altos, CA",
    aum: "$925M including SPVs (co-founders to TechCrunch, April 2023)",
    thesis: "Future Ventures backs founder led, mission driven companies at the seed and early stage, hunting for what its co-founders call new industry formation, ideas so unconventional or so long dated that they face little competition from other investors. The firm deliberately keeps its funds small, closing successive vehicles of about $200 million in 2019, 2021, and 2023, and writes first checks of roughly $3 million to $6 million, usually leading the founding round and taking a board seat. Its range spans commercial space, nuclear fusion, quantum computing, robotics, AI, synthetic biology, sustainable agriculture, and clean energy, with portfolio companies including SpaceX, Commonwealth Fusion Systems, Neuralink, xAI, Upside Foods, and MosaicML, which Databricks acquired in 2023. Co-founders Steve Jurvetson and Maryanna Saenko draw on earlier investments such as Tesla, Planet Labs, D-Wave, Hotmail, and Skype, which the firm cites as $1.7 trillion of aggregate value creation, to argue that the biggest venture outcomes come from technologies that create entire sectors rather than compete inside existing ones.",
    leadership: [
      { name: "Steve Jurvetson", role: "Co-Founder", profileSlug: "steve-jurvetson" },
      { name: "Maryanna Saenko", role: "Co-Founder", profileSlug: "maryanna-saenko" },
      { name: "Nico Enriquez", role: "Principal", profileSlug: "nico-enriquez" }
    ],
    timeline: [
      { year: "2018", event: "Steve Jurvetson and Maryanna Saenko co-found Future Ventures." },
      { year: "2019", event: "The firm publicly launches with a $200 million first fund focused on bold, mission-driven deep technology." },
      { year: "2021", event: "Future Ventures closes a second fund of about $200 million." },
      { year: "2023", event: "The firm closes its third $200 million fund, bringing assets under management to $925 million including special purpose vehicles." },
      { year: "2023", event: "Portfolio company MosaicML is acquired by Databricks for $1.3 billion." },
      { year: "2025", event: "The firm files a Form D with the SEC for Future Ventures IV, L.P." }
    ],
    holdings: [
      { name: "ATAI Life Sciences", ticker: "ATAI", investedYear: null, historicalPrice: null, price: null },
      { name: "Sensei Biotherapeutics", ticker: "SNSE", investedYear: null, historicalPrice: null, price: null }
    ]
  },
  {
    rank: null,
    name: "Regeneration.VC",
    sectors: ["Climate", "Consumer", "Sustainability", "Circular Economy"],
    signatureExit: "No confirmed public exit yet; the firm's notable positions remain private.",
    slug: "regeneration-vc",
    website: "https://regeneration.vc",
    short: "Regeneration.VC",
    founded: 2020,
    hq: "Los Angeles, CA",
    aum: "$45M, 2022 first fund close",
    thesis: "Regeneration.VC invests at the early stage in consumer climate technology, applying circular and regenerative principles to the supply chains behind fashion, food, electronics, and personal care. The firm argues that humanity consumes roughly twice what the planet can regenerate each year, and that consumer industries, which drive a large share of global emissions and waste, have received far less climate capital than energy or mobility. It organizes investments across three strategies: design, covering next generation materials, agtech, and aquaculture; use, covering apparel, lifestyle, and food and beverage; and reuse, covering recommerce and reverse logistics. Founded by consumer operators Dan Fishman and Michael Smith rather than career investors, and advised by Leonardo DiCaprio and circular economy pioneer William McDonough, the firm closed a $45 million first fund in 2022 and has built a portfolio approaching 50 companies, including VitroLabs, Cruz Foam, Greyparrot, and Colorifix. A second fund targeting 150 million euros with anchor support from Invest-NL, plus the assumption of Sky Ocean Ventures' climate portfolio in 2025, anchor a growing European presence alongside the firm's Los Angeles base.",
    leadership: [
      { name: "Dan Fishman", role: "Co-Founder and General Partner", profileSlug: "dan-fishman" },
      { name: "Michael Smith", role: "Co-Founder and General Partner", profileSlug: "michael-smith" }
    ],
    timeline: [
      { year: "2020", event: "Dan Fishman and Michael Smith found Regeneration.VC to invest in consumer-powered climate innovation." },
      { year: "2022", event: "The firm launches its $45 million inaugural fund with Leonardo DiCaprio as strategic advisor and limited partner." },
      { year: "2024", event: "Invest-NL commits 5 million euros to Regeneration.VC Fund II, which targets 150 million euros." },
      { year: "2025", event: "Regeneration.VC assumes management of Sky Ocean Ventures' climate portfolio and adds partners in Europe." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "HCVC",
    sectors: ["Deep Tech", "Robotics", "Industrial Tech"],
    signatureExit: "Smart checkout cart maker Caper, an early HCVC investment, was acquired by Instacart for about $350 million in October 2021.",
    slug: "hcvc",
    website: "https://www.hcvc.co",
    short: "HCVC",
    founded: 2015,
    hq: "Paris, France",
    aum: "$130M (2023, after $75M Fund II close)",
    thesis: "HCVC backs founders on a mission to industrialize scientific and technological progress, investing in early stage companies that automate and digitize the physical world. The firm began life in 2015 as Hardware Club, a community-first venture firm built around a network of hardtech startups that grew to more than 600 member companies across some 50 countries, and now invests under the HCVC name from Paris and San Francisco. It writes checks of $100k to $2.5m from pre-seed through Series A, getting involved as early as company formation, and concentrates on software or hardware products with long-term competitive advantages rooted in technical defensibility. Most investments land in Europe and North America, though the partners meet founders worldwide. The portfolio spans robotics, semiconductors, techbio, fusion energy, space, defense, climate, and AI-enabled engineering, with companies such as Cowboy, Automata, Span, Renaissance Fusion, and Karman+. Its $75 million second fund, closed in 2023 with backing from the European Investment Fund, Isomer Capital, Molten Ventures, and individual investors including Albert Wenger, John Elkann, and Toto Wolff, targets roughly 40 investments at a pace of about ten per year, continuing the firm's bet that the hardest physical-world problems produce the most defensible companies.",
    leadership: [
      { name: "Alexis Houssou", role: "Founder & Managing Partner", profileSlug: "alexis-houssou" },
      { name: "Jerry Yang", role: "General Partner", profileSlug: "jerry-yang" },
      { name: "Aymerik Renard", role: "General Partner", profileSlug: "aymerik-renard" },
      { name: "Alexandre Flamant", role: "Partner", profileSlug: "alexandre-flamant" }
    ],
    timeline: [
      { year: "2015", event: "Alexis Houssou founded Hardware Club in Paris as the world's first community of hardtech startups, the firm that later became HCVC." },
      { year: "2017", event: "The firm announced a first close of $28 million for its debut venture fund, and Aymerik Renard joined the partnership in San Francisco." },
      { year: "2018", event: "HCVC closed its debut fund at $50 million to invest in pre-seed and seed hardtech companies across Europe and North America." },
      { year: "2021", event: "Portfolio company Caper was acquired by Instacart for approximately $350 million, the firm's most notable exit." },
      { year: "2023", event: "Now operating under the HCVC name, the firm closed its second fund at $75 million, above its $60 million target, bringing assets under management to $130 million." }
    ],
    holdings: []
  },
  {
    rank: null,
    name: "The Production Board",
    sectors: ["Food & Agriculture", "Biotech", "Energy", "Climate"],
    signatureExit: "Portfolio company Soylent, the meal replacement brand where Dave Friedberg served as chairman, was acquired by Starco Brands in 2023.",
    slug: "the-production-board",
    website: "https://www.tpb.co",
    short: "Production Board",
    founded: 2017,
    hq: "San Francisco, CA",
    aum: "$300M raised (2021 holding company financing)",
    thesis: "The Production Board is a San Francisco holding company founded by Dave Friedberg in 2017 to reimagine the systems of production that underpin the planet, spanning food, agriculture, biomanufacturing, human health, and life sciences. TPB is not a traditional venture fund. Its primary capital deployment mechanism is a foundry program: the firm identifies emerging scientific breakthroughs, then builds new businesses from scratch around them, assembling teams and providing capital, infrastructure, and market insight to exceptional operators. Foundry creations include cloud bioreactor platform Culture Biosciences, farm microbiome analytics company Pattern Ag, precision plant genetics company Ohalo, synthetic biology company Triplebar, and microbiome nutrition brand Supergut. Alongside the foundry, TPB invests from seed to Series A in outside companies working on the same fundamental problems, targeting order of magnitude improvements in cost, energy, time, or carbon footprint. The holding company raised $300 million in 2021 from investors including Alphabet, Baillie Gifford, BlackRock, Koch Disruptive Technologies, Emerson Collective, and Morgan Stanley's Counterpoint Global. Its sponsored SPAC took Brazilian agricultural inputs distributor Lavoro public on Nasdaq in a $1.2 billion combination in 2023, and portfolio exits include Soylent's acquisition by Starco Brands and Wellio's acquisition by Kraft Heinz.",
    leadership: [
      { name: "David Friedberg", role: "CEO and Partner", profileSlug: "david-friedberg" },
      { name: "Cameron Davidson", role: "Operating Partner", profileSlug: "cameron-davidson" }
    ],
    timeline: [
      { year: "2017", event: "Dave Friedberg founded The Production Board in San Francisco as a holding company to build and invest in businesses that reimagine global systems of production." },
      { year: "2019", event: "The TPB foundry created a cohort of companies from scratch, including precision plant genetics company Ohalo, synthetic biology company Triplebar, and microbiome nutrition brand Supergut." },
      { year: "2021", event: "TPB raised $300 million from investors including Alphabet, Baillie Gifford, BlackRock, Koch Disruptive Technologies, and Morgan Stanley's Counterpoint Global." },
      { year: "2023", event: "TPB Acquisition Corporation I, the firm's sponsored SPAC, completed a $1.2 billion business combination that took Brazilian agricultural inputs company Lavoro public on Nasdaq." },
      { year: "2023", event: "Portfolio company Soylent was acquired by Starco Brands." }
    ],
    holdings: []
  }
];
