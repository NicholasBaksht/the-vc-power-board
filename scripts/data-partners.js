const partnerProfiles = {
  "alfred-lin": {
    name: "Alfred Lin",
    firm: "Sequoia Capital",
    firmSlug: "sequoia",
    title: "Managing Partner",
    joinedYear: 2010,
    education: ["B.A. Applied Mathematics, Harvard University", "M.S. Statistics, Stanford University"],
    previousExperience: [
      "Chairman, COO & CFO, Zappos.com (2005–2010) — acquired by Amazon for $1.2B",
      "VP Finance & Business Development, Tellme Networks (2001–2005) — acquired by Microsoft",
      "Co-Founder, Venture Frogs (1999–2014)",
      "Co-Founder & VP Finance, LinkExchange (1996–1999) — acquired by Microsoft for $265M"
    ],
    investmentFocus: ["Consumer", "Marketplaces", "Enterprise Software"],
    notableInvestments: [
      { name: "Airbnb", ticker: "ABNB" },
      { name: "DoorDash", ticker: "DASH" },
      { name: "Uber", ticker: "UBER" },
      { name: "Reddit", ticker: "RDDT" },
      { name: "Houzz", ticker: null },
      { name: "OpenAI", ticker: null }
    ],
    boardSeats: ["Airbnb", "DoorDash", "Citadel Securities"],
    ipoCount: 3,
    majorExits: 2,
    careerTimeline: [
      { year: "1996", event: "Co-founds LinkExchange as VP Finance; the company is sold to Microsoft for $265M in 1999." },
      { year: "2001", event: "Joins Tellme Networks as VP Finance & Business Development, later acquired by Microsoft." },
      { year: "2005", event: "Becomes Chairman, COO, and CFO of Zappos.com." },
      { year: "2009", event: "Zappos is acquired by Amazon for $1.2 billion." },
      { year: "2010", event: "Joins Sequoia Capital as a partner, focused on consumer and enterprise investments." },
      { year: "2025", event: "Becomes co-steward (Managing Partner) of Sequoia Capital alongside Pat Grady." }
    ],
    biography: "Alfred Lin is a Taiwanese-American venture capitalist who joined Sequoia Capital in 2010 after building his career as an operator, not just an investor — a background that shapes how he evaluates founders today. Before Sequoia, he served as Chairman, COO, and CFO of Zappos, guiding the online retailer to a $1.2 billion acquisition by Amazon in 2009. He first crossed paths with Sequoia as an operator at LinkExchange, which the firm backed in the 1990s. At Sequoia, Lin has specialized in consumer, marketplace, and enterprise software investments, leading or co-leading the firm's positions in Airbnb, DoorDash, and OpenAI. He topped the Forbes Midas List of top venture capitalists in both 2021 and 2025.",
    sources: [
      { label: "Sequoia Capital — Alfred Lin", url: "https://www.sequoiacap.com/people/alfred-lin/" },
      { label: "Forbes Midas List Profile", url: "https://www.forbes.com/profile/alfred-lin/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Alfred_Lin" }
    ]
  },
  // ============ CAVALRY VENTURES ============
"claude-ritter": {
  name: "Claude Ritter",
  firm: "Cavalry Ventures",
  firmSlug: "cavalry-ventures",
  title: "Co-Founder & Managing Partner",
  joinedYear: 2015,
  education: ["University of Applied Sciences of Northwestern Switzerland (FHNW), Information Systems Management"],
  previousExperience: [
    "Co-Founder & CEO, NetCircle",
    "Co-Founder & CPO, Lieferheld/Delivery Hero (2010–2014)",
    "Co-Founder & CEO, Tiger Facility Services (2014–2019, acquired by Helpling)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "2010", event: "Co-founds Lieferheld (later Delivery Hero), serving as Chief Product Officer for four years as it expanded to 40 markets." },
    { year: "2014", event: "Co-founds Tiger Facility Services, a digital facility-services platform employing 500+ cleaning staff." },
    { year: "2015", event: "Co-founds Cavalry Ventures as an Entrepreneurial Partner." },
    { year: "2019", event: "Tiger Facility Services is acquired by Helpling." },
    { year: "2020", event: "Becomes Managing Partner at Cavalry Ventures." }
  ],
  biography: "Claude Ritter built his venture capital career on the back of two real operating companies — Delivery Hero and Tiger Facility Services — before co-founding Cavalry Ventures in 2015, becoming one of two founding partners who remain at the firm after several colleagues departed in 2024.",
  sources: [
    { label: "Streamly — Claude Ritter", url: "https://streamly.video/expert/claude-ritter" },
    { label: "Sifted — Cavalry Ventures partner departures", url: "https://sifted.eu/articles/cavalry-ventures-loses-third-partner-news" }
  ]
},
"stefan-walter": {
  name: "Stefan Walter",
  firm: "Cavalry Ventures",
  firmSlug: "cavalry-ventures",
  title: "Co-Founder & Managing Partner",
  joinedYear: 2015,
  education: ["Stenden University, Business Administration"],
  previousExperience: [
    "Co-Founder & Managing Director, undsoehne network",
    "Investment Manager, Rheingau Founders (2014–2015)"
  ],
  boardSeats: ["Loctax", "ShowHeroes Group", "Usercentrics", "PlanRadar"],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "2014", event: "Joins Rheingau Founders as an Investment Manager." },
    { year: "2015", event: "Co-founds Cavalry Ventures alongside Claude Ritter and four other partners." },
    { year: "2017", event: "Joins the board of PlanRadar as it becomes one of Cavalry's notable portfolio companies." }
  ],
  biography: "Stefan Walter co-founded Cavalry Ventures in 2015 after a background in tax, corporate law, and business economics, and remains one of two original founding partners still active at the firm today, sitting on the boards of several portfolio companies including PlanRadar and Usercentrics.",
  sources: [
    { label: "How to Web — Stefan Walter", url: "https://www.howtoweb.co/speaker/stefan-walter/" },
    { label: "Crunchbase — Stefan Walter", url: "https://www.crunchbase.com/person/stefan-walter" }
  ]
},

// ============ POINT72 VENTURES ============
"dan-gwak": {
  name: "Dan Gwak",
  firm: "Point72 Ventures",
  firmSlug: "point72-ventures",
  title: "Managing Partner",
  joinedYear: null,
  education: [],
  previousExperience: [
    "Fireteam Leader, United States Marine Corps (Operation Enduring Freedom, Helmand Province)",
    "Investment Banking Analyst, M&A Group, Credit Suisse",
    "Private Equity Associate, The Carlyle Group",
 "Partner, In-Q-Tel"
  ],
  firmHistory: [
    { firmSlug: "in-q-tel", role: "Partner", startYear: null, endYear: null }
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Serves as a Marine Corps fireteam leader in Helmand Province, Afghanistan, earning the Combat Action Ribbon and Purple Heart." },
    { year: null, event: "Works in investment banking M&A at Credit Suisse, then private equity at The Carlyle Group." },
    { year: null, event: "Joins In-Q-Tel, the CIA and U.S. intelligence community's strategic investment firm, focusing on enterprise analytics and infrastructure." },
    { year: null, event: "Joins Point72, eventually overseeing its Defense Tech and Growth investment teams as Managing Partner." }
  ],
  biography: "Dan Gwak brings a genuinely unusual path into venture capital — from combat service in Afghanistan as a Marine, through Wall Street and private equity, to strategic investing for the U.S. intelligence community at In-Q-Tel, before joining Point72 to lead its Defense Tech and Growth investing.",
  sources: [
    { label: "TechCrunch — Dan Gwak author bio", url: "https://techcrunch.com/author/dan-gwak" }
  ]
},
"sri-chandrasekar": {
  name: "Sri Chandrasekar",
  firm: "Point72 Ventures",
  firmSlug: "point72-ventures",
  title: "Managing Partner",
  joinedYear: null,
  education: [],
  previousExperience: [
    "Systems Engineer, BAE Systems (~10 years, military systems design)",
 "Investment Lead, In-Q-Tel"
  ],
  firmHistory: [
    { firmSlug: "in-q-tel", role: "Investment Lead", startYear: null, endYear: null }
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Spends nearly a decade at BAE Systems designing and building systems for the military." },
    { year: null, event: "Joins In-Q-Tel, leading investments and building research teams for U.S. intelligence community challenges." },
    { year: null, event: "Joins Point72 as Managing Partner, working alongside Dan Gwak." }
  ],
  biography: "Sri Chandrasekar moved from nearly a decade of hands-on military systems engineering at BAE Systems into strategic investing at In-Q-Tel, before joining Point72 Ventures as Managing Partner.",
  sources: [
    { label: "TechCrunch — Sri Chandrasekar author bio", url: "https://techcrunch.com/author/all-sri-chandrasekar" }
  ]
},

// ============ PLAYGROUND GLOBAL ============
"peter-barrett": {
  name: "Peter Barrett",
  firm: "Playground Global",
  firmSlug: "playground-global",
  title: "Co-Founder, General Partner & CTO",
  joinedYear: 2015,
  education: [],
  previousExperience: [
    "Engineer, SuperMac (through its IPO)",
    "Founder, Rocket Science Games (1993, mentored by Steve Blank; early employer of Elon Musk)",
    "Executive, WebTV (acquired by Microsoft)",
    "CTO, CloudCar"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "1993", event: "Co-founds video game company Rocket Science Games with Bruce Leak and Steve Blank as mentor; the company employs a young Elon Musk as a software engineer." },
    { year: null, event: "Joins WebTV, later acquired by Microsoft, working alongside future Playground co-founders Andy Rubin and Bruce Leak." },
    { year: null, event: "Serves as CTO of CloudCar, a cloud-based consumer products startup." },
    { year: "2015", event: "Co-founds Playground Global with Andy Rubin, Bruce Leak, and Matt Hershenson." },
    { year: "2023", event: "Playground closes Fund III at $410 million, bringing total AUM over $1.2 billion." }
  ],
  biography: "Peter Barrett's path into venture capital runs through video games, not finance — he co-founded Rocket Science Games in 1993 (where a young Elon Musk worked as an engineer), then WebTV and CloudCar, before co-founding Playground Global in 2015 to back deep-tech founders the way he wished someone had backed him.",
  sources: [
    { label: "TechCrunch — Playground Global Fund III", url: "https://techcrunch.com/2023/12/14/playground-global-fund-iii-410m-early-stage-deep-tech-venture-capital/" },
    { label: "Wikipedia — Peter Barrett (entrepreneur)", url: "https://en.wikipedia.org/wiki/Peter_Barrett_(entrepreneur)" }
  ]
},
"bruce-leak": {
  name: "Bruce Leak",
  firm: "Playground Global",
  firmSlug: "playground-global",
  title: "Co-Founder, Founding Partner & General Partner",
  joinedYear: 2015,
  education: ["Stanford University, M.S. Electrical Engineering"],
  previousExperience: [
    "Intern, Microsoft (tested early Word for IBM PC prototype)",
    "Engineer, Apple System Software team (led 32-bit Color QuickDraw, birth of QuickTime)",
    "Engineer, General Magic (recruited by Steve Perlman)",
    "Co-Founder, Rocket Science Games (1993)",
    "Co-Founder, WebTV (acquired by Microsoft)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Spends five years at Apple's System Software team, leading development of 32-bit Color QuickDraw, which becomes the foundation of QuickTime." },
    { year: null, event: "Recruited by Steve Perlman to General Magic to build a color gaming platform." },
    { year: "1993", event: "Joins Peter Barrett and Steve Blank to found Rocket Science Games." },
    { year: null, event: "Co-founds WebTV with General Magic alumni Steve Perlman and Phil Goldman; WebTV is later acquired by Microsoft." },
    { year: "2015", event: "Co-founds Playground Global." }
  ],
  biography: "Bruce Leak's career traces the earliest days of consumer computing — Apple's System Software team (where he helped invent QuickTime), General Magic, and WebTV — before co-founding Playground Global in 2015 to invest in the kind of deep-tech company he spent decades building.",
  sources: [
    { label: "Wikipedia — Bruce Leak", url: "https://en.wikipedia.org/wiki/Bruce_Leak" },
    { label: "Playground Global — Bruce Leak", url: "https://www.playground.vc/people/bruce-leak" }
  ]
},
"jory-bell": {
  name: "Jory Bell",
  firm: "Playground Global",
  firmSlug: "playground-global",
  title: "General Partner",
  joinedYear: null,
  education: ["Massachusetts Institute of Technology, Literature"],
  previousExperience: [
    "Design, Apple",
    "Co-Founder, CEO & Board Member, OQO",
    "CTO & Director, Miselu"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [],
  biography: "Jory Bell joined Playground Global as a General Partner after operating roles at Apple, OQO (which he co-founded), and Miselu, and now focuses much of his investing on biotech, including Playground's investment in Manifold Bio.",
  sources: [
    { label: "Crunchbase — Playground Global profiles", url: "https://www.crunchbase.com/organization/playground-global/profiles_and_contacts" }
  ]
},
"pat-gelsinger": {
  name: "Pat Gelsinger",
  firm: "Playground Global",
  firmSlug: "playground-global",
  title: "General Partner",
  joinedYear: 2025,
  education: ["Stanford University, EE & CS"],
  previousExperience: [
    "Chief Technology Officer, Intel (first CTO in company history)",
    "CEO, EMC (joined 2009)",
    "CEO, VMware (2012–2021)",
    "CEO, Intel (2021–2024)"
  ],
  boardSeats: ["xLight (Executive Chair)", "Gloo"],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "2009", event: "Leaves Intel after three decades, including serving as the company's first-ever Chief Technology Officer, to join EMC." },
    { year: "2012", event: "Becomes CEO of VMware, leading its transition to hybrid cloud and software-defined infrastructure." },
    { year: "2021", event: "Steps down as VMware CEO (effective February 12) to become CEO of Intel." },
    { year: "2024", event: "Departs Intel as CEO in December, following struggles with delayed chip generations and stock decline." },
    { year: "2025", event: "Joins Playground Global as a General Partner in March, focusing on semiconductors, and becomes Executive Chair of portfolio company xLight." }
  ],
  biography: "Pat Gelsinger's 45-year career shaped modern computing at the highest level — Intel's first CTO, then CEO of both VMware and Intel — before joining Playground Global in 2025 to invest in the next generation of deep-tech and semiconductor founders.",
  sources: [
    { label: "CNBC — Gelsinger joins Playground Global", url: "https://www.cnbc.com/2025/03/26/former-intel-ceo-pat-gelsinger-joins-venture-firm-playground-global.html" },
    { label: "VMware SEC 8-K — CEO transition", url: "https://www.sec.gov/Archives/edgar/data/1124610/000112461021000003/gelsinger11321newsrelease.htm" }
  ]
},

// ============ GRISHIN ROBOTICS ============
"dmitry-grishin": {
  name: "Dmitry Grishin",
  firm: "Grishin Robotics",
  firmSlug: "grishin-robotics",
  title: "Founding Partner",
  joinedYear: 2012,
  education: ["Moscow State Technical University, Robotics and Complex Automation"],
  previousExperience: [
    "Software Engineer, various projects (from 2001)",
    "CEO, Mail.Ru (2003–2010)",
    "Co-Founder & Chairman, Mail.Ru Group (2005–2022)"
  ],
  boardSeats: [],
  ipoCount: 1,
  majorExits: null,
  careerTimeline: [
    { year: "2003", event: "Becomes CEO of Mail.Ru." },
    { year: "2005", event: "Co-founds Mail.Ru Group." },
    { year: "2010", event: "Takes Mail.Ru Group public on the London Stock Exchange as CEO." },
    { year: "2012", event: "Founds Grishin Robotics with a $100M fund focused on smart hardware, robotics, and IoT." },
    { year: "2016", event: "Steps down as CEO of Mail.Ru, remaining as Chairman." },
    { year: "2022", event: "Steps down as Chairman of Mail.Ru Group in May." }
  ],
  biography: "Dmitry Grishin took Mail.Ru Group public on the London Stock Exchange in 2010 as one of Russia's most prominent internet entrepreneurs, then founded Grishin Robotics in 2012 to back early-stage hardware and robotics companies including Ring (acquired by Amazon) and Sphero.",
  sources: [
    { label: "Wikipedia — Dmitry Grishin", url: "https://en.wikipedia.org/wiki/Grishin_Robotics" },
    { label: "Grishin Robotics — Team", url: "https://www.grishinrobotics.com/team" }
  ]
},

// ============ DEFY PARTNERS ============
"neil-sequeira": {
  name: "Neil Sequeira",
  firm: "Defy Partners",
  firmSlug: "defy-partners",
  title: "Co-Founder & Partner",
  joinedYear: 2016,
  education: ["University of California, Santa Barbara", "Harvard Business School"],
  previousExperience: [
    "Senior Consultant, Accenture",
    "Investment Banking, Goldman Sachs & Co.",
    "Head of Mergers and Acquisitions, CMGI",
    "Founding Member, AOLTW Ventures / Managing Director, TimeWarner Investments",
  "Managing Director, General Catalyst Partners (12 years)"
  ],
  firmHistory: [
    { firmSlug: "general-catalyst", role: "Managing Director", startYear: null, endYear: null }
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Works as a senior consultant at Accenture, then in investment banking at Goldman Sachs." },
    { year: null, event: "Leads Mergers and Acquisitions at CMGI, a diversified technology holding company." },
    { year: null, event: "Becomes a founding member of AOLTW Ventures and Managing Director at TimeWarner Investments." },
    { year: null, event: "Joins General Catalyst Partners as Managing Director, investing for 12 years." },
    { year: "2016", event: "Co-founds Defy Partners with Trae Vassallo." }
  ],
  biography: "Neil Sequeira spent 12 years as a Managing Director at General Catalyst before co-founding Defy Partners in 2016, bringing decades of investing experience across internet and media, software, commerce, and network infrastructure.",
  sources: [
    { label: "Defy VC — Neil Sequeira", url: "https://defy.vc/team_member/neil-sequeira/" }
  ]
},
"trae-vassallo": {
  name: "Trae Vassallo",
  firm: "Defy Partners",
  firmSlug: "defy-partners",
  title: "Co-Founder & Managing Director",
  joinedYear: 2016,
  education: ["Stanford University, B.S. & M.S. Mechanical Engineering", "Stanford Graduate School of Business, MBA"],
  previousExperience: [
    "Design Engineer, IDEO (Palm V, Dell Latitude Docking Station)",
    "Co-Founder & Product Manager, Good Technology (2000–2002, acquired by Motorola)",
  "General Partner, Kleiner Perkins Caufield & Byers (2002–2014)"
  ],
  firmHistory: [
    { firmSlug: "kleiner-perkins", role: "General Partner", startYear: 2002, endYear: 2014 }
  ],
  boardSeats: ["Enlighted"],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Begins career as a design engineer at IDEO, developing products for Palm and Dell." },
    { year: "2000", event: "Co-founds Good Technology, an enterprise wireless email company later acquired by Motorola." },
    { year: "2002", event: "Joins Kleiner Perkins Caufield & Byers, eventually becoming a General Partner." },
    { year: null, event: "Originates Kleiner's investments in Enphase and Silver Spring Networks; leads investment in Nest Labs (acquired by Google)." },
    { year: "2014", event: "Departs Kleiner Perkins following a firm reorganization; co-authors 'Elephant in the Valley' study on women's experiences in tech." },
    { year: "2016", event: "Co-founds Defy Partners with Neil Sequeira." }
  ],
  biography: "Trae Vassallo holds 13 patents from her early engineering career at IDEO, co-founded Good Technology, then spent 14 years as a General Partner at Kleiner Perkins where she led the firm's investment in Nest Labs — before co-founding Defy Partners in 2016 and co-authoring an influential study on gender in the tech industry.",
  sources: [
    { label: "Kauffman Fellows — Trae Vassallo", url: "https://www.kauffmanfellows.org/fellows/trae-vassallo" },
    { label: "Broadway Angels — Trae Vassallo bio", url: "https://www.broadway-angels.com/trae-vassallo-bio" }
  ]
},

// ============ BAUKUNST ============
"kate-mcandrew": {
  name: "Kate McAndrew",
  firm: "Baukunst",
  firmSlug: "baukunst",
  title: "Co-Founder & General Partner",
  joinedYear: 2022,
  education: ["McGill University, Cultural Studies/Critical Theory and Analysis"],
  previousExperience: [
    "Investor, Social Capital",
    "Investor, Lightspeed Venture Partners",
"First Employee & Partner, Bolt (2012–2022)"
  ],
  firmHistory: [
    { firmSlug: "social-capital", role: "Investor", startYear: null, endYear: null },
    { firmSlug: "lightspeed", role: "Investor", startYear: null, endYear: null }
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "2012", event: "Enters venture capital, eventually joining Bolt as its first employee." },
    { year: null, event: "Spends nearly a decade at Bolt, building its venture capital practice and community across two funds, and founds Women in Hardware." },
    { year: "2022", event: "Co-founds Baukunst with Axel Bichara, Matt Thoms, and Tyler Mincey; the firm announces its $100M debut fund in April." }
  ],
  biography: "Kate McAndrew was Bolt's first employee and spent nearly a decade building its venture capital practice before co-founding Baukunst in 2022, which raised the largest debut pre-seed fund on record at $100 million.",
  sources: [
    { label: "YesPress — Kate McAndrew", url: "https://yespress.io/kate-mcandrew" },
    { label: "Startup Intros — Kate McAndrew", url: "https://startupintros.com/people/kate-mcandrew" }
  ]
},
"tyler-mincey": {
  name: "Tyler Mincey",
  firm: "Baukunst",
  firmSlug: "baukunst",
  title: "Co-Founder & General Partner",
  joinedYear: 2022,
  education: ["Princeton University, Mechanical and Aerospace Engineering"],
  previousExperience: [
    "Engineering, Apple (built the first iPhone and multiple iPod generations)",
    "Founding team, Pearl Automation",
    "VP of Engineering → Partner, Bolt (5 years)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Works as an engineer at Apple, part of the team that built the first iPhone and several generations of iPod." },
    { year: null, event: "Joins the founding team of Pearl Automation as VP of Product." },
    { year: null, event: "Joins Bolt as VP of Engineering, eventually becoming a Partner, and pioneers embedding a full in-house engineering team inside a venture fund." },
    { year: "2022", event: "Co-founds Baukunst in April with Kate McAndrew, Axel Bichara, and Matt Thoms." }
  ],
  biography: "Tyler Mincey helped build the first iPhone at Apple before moving into hardware startups and then venture capital at Bolt, where he pioneered embedding engineers directly inside a fund — a model that became Baukunst's blueprint when he co-founded it in 2022.",
  sources: [
    { label: "YesPress — Tyler Mincey", url: "https://yespress.io/tyler-mincey" }
  ]
},
"axel-bichara": {
  name: "Axel Bichara",
  firm: "Baukunst",
  firmSlug: "baukunst",
  title: "Co-Founder & General Partner",
  joinedYear: 2022,
  education: [],
  previousExperience: [
    "Co-Founder, two startups (both acquired)",
    "General Partner, Atlas Venture",
    "General Partner, Bolt"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Co-founds two startups, both later acquired." },
    { year: null, event: "Spends roughly 30 years as a first-round lead investor and company builder, including as General Partner at Atlas Venture and Bolt, raising and investing $2.8 billion as a managing partner." },
    { year: "2022", event: "Co-founds Baukunst with Kate McAndrew, Matt Thoms, and Tyler Mincey." }
  ],
  biography: "Axel Bichara brings roughly three decades of venture investing experience from Atlas Venture and Bolt, including two of his own startups that were acquired, to his role as a founding General Partner at Baukunst.",
  sources: [
    { label: "Baukunst — The Collective", url: "https://baukunst.co/collective" }
  ]
},
"matt-thoms": {
  name: "Matt Thoms",
  firm: "Baukunst",
  firmSlug: "baukunst",
  title: "Co-Founder & General Partner",
  joinedYear: 2022,
  education: ["Tufts University, Mechanical Engineering", "Massachusetts Institute of Technology, M.S."],
  previousExperience: [
    "Graduate Research Assistant, MIT (2010–2012)",
    "Management Consultant, OC&C Strategy Consultants (2012–2014)",
    "Vice President, Investment Team, Allied Minds (2014–2019)",
    "Partner, Bolt"
  ],
  boardSeats: ["Orange Charger", "Wildgrain"],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "2010", event: "Serves as a Graduate Research Assistant at MIT while earning his master's degree." },
    { year: "2012", event: "Joins OC&C Strategy Consultants as a Management Consultant." },
    { year: "2014", event: "Joins Allied Minds as Vice President on the investment team, leading investments including HawkEye 360 and Orbital Sidekick." },
    { year: "2019", event: "Leaves Allied Minds after 9 years combined investing experience there and later at Bolt." },
    { year: "2022", event: "Co-founds Baukunst with Kate McAndrew, Axel Bichara, and Tyler Mincey." }
  ],
  biography: "Matt Thoms combined mechanical engineering degrees from Tufts and MIT with nine years as a first-round investor at Allied Minds and Bolt — including founding several of his own startups — before co-founding Baukunst in 2022.",
  sources: [
    { label: "The Network — Matt Thoms", url: "https://www.thenetwork.com/profile/matt-thoms-07950a7a" }
  ]
},

// ============ MUCKER CAPITAL ============
"william-hsu": {
  name: "William Hsu",
  firm: "Mucker Capital",
  firmSlug: "mucker-capital",
  title: "Co-Founder & Managing Partner",
  joinedYear: 2011,
  education: [],
  previousExperience: [
    "Founder, BuildPoint (acquired by NYSE:ROP)",
    "Product Teams, eBay",
    "Product Teams, Green Dot (NYSE:GDOT)",
    "SVP & Chief Product Officer, AT&T Interactive"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Founds BuildPoint straight out of college, a bid-management SaaS company for commercial construction, later acquired by NYSE-listed Roper Technologies." },
    { year: null, event: "Leads product teams at eBay and Green Dot." },
    { year: null, event: "Serves as SVP and Chief Product Officer of AT&T Interactive, doubling revenue to over $1 billion in three years." },
    { year: "2011", event: "Co-founds Mucker Capital with Erik Rannala in Santa Monica." }
  ],
  biography: "William Hsu doubled AT&T Interactive's revenue to over $1 billion as its Chief Product Officer before co-founding Mucker Capital in 2011, which led the first institutional checks into Honey, AuditBoard, and ServiceTitan.",
  sources: [
    { label: "LA Business Journal — William Hsu", url: "https://labusinessjournal.com/news/william-hsu/" },
    { label: "Mucker Capital — William Hsu", url: "https://mucker.com/team/william-hsu/" }
  ]
},
"erik-rannala": {
  name: "Erik Rannala",
  firm: "Mucker Capital",
  firmSlug: "mucker-capital",
  title: "Co-Founder & Managing Partner",
  joinedYear: 2011,
  education: ["University of Delaware, B.S.", "Duke University, MBA"],
  previousExperience: [
    "Software Developer, Accenture (Internet strategy practice)",
    "White House Domestic Policy Council",
    "Various roles, eBay (grew premium features business to $400M+ revenue)",
    "VP Global Product Strategy, TripAdvisor",
    "Seed Investor, Harrison Metal Capital"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Serves at the White House Domestic Policy Council early in his career." },
    { year: null, event: "Works at Accenture as a software developer in its first internet strategy practice group." },
    { year: null, event: "Holds multiple roles at eBay, growing its premium features business to over $400 million in revenue." },
    { year: null, event: "Becomes VP of Global Product Strategy and Development at TripAdvisor." },
    { year: null, event: "Joins Harrison Metal Capital, one of the original seed-stage 'micro-VC' firms." },
    { year: "2011", event: "Co-founds Mucker Capital with William Hsu." }
  ],
  biography: "Erik Rannala's path ran from the White House Domestic Policy Council through Accenture, eBay, and TripAdvisor, then early-stage investing at Harrison Metal Capital, before co-founding Mucker Capital in 2011.",
  sources: [
    { label: "Mucker Capital — Erik Rannala", url: "https://mucker.com/team/erik-rannala/" }
  ]
},

// ============ STRUCK CAPITAL ============
"adam-struck": {
  name: "Adam Struck",
  firm: "Struck Capital",
  firmSlug: "struck-capital",
  title: "Founder & Managing Partner",
  joinedYear: 2015,
  education: ["Northwestern University, Kellogg School of Management", "Georgetown University Law Center, J.D."],
  previousExperience: [
    "M&A/PE Attorney, Kirkland & Ellis",
    "Co-Founder, Long Island Brand Beverages (taken public on NASDAQ, acquired by Cullen Investments)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Works as an M&A and private equity attorney at Kirkland & Ellis." },
    { year: "2011", event: "Co-founds Long Island Brand Beverages, a CPG company, with his brother." },
    { year: null, event: "Long Island Brand Beverages is taken public on NASDAQ and later acquired by Cullen Investments." },
    { year: "2015", event: "Founds Struck Capital in Santa Monica, an industry-agnostic seed fund." }
  ],
  biography: "Adam Struck left a law career at Kirkland & Ellis to co-found a beverage company that went public on NASDAQ, then founded Struck Capital in 2015, becoming an early backer of Postmates, Nutanix, Ramp, and Whatnot.",
  sources: [
    { label: "Struck Capital — Team", url: "https://struckcapital.com/team/" },
    { label: "AI for Good — Adam Struck", url: "https://aiforgood.itu.int/speaker/adam-struck/" }
  ]
},

// ============ SCIENCE INC. ============
"michael-jones": {
  name: "Michael Jones",
  firm: "Science Inc.",
  firmSlug: "science-inc",
  title: "Co-Founder & CEO",
  joinedYear: 2011,
  education: ["University of Oregon, B.A. International Business and Marketing"],
  previousExperience: [
    "Founder & CEO, Userplane (2001–2006, acquired by AOL)",
    "SVP, AOL",
    "Founder, Tsavo Media (2008, sold to Cybernex for $75M)",
    "CEO, Myspace (2010)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "2001", event: "Founds Userplane, an instant-messaging platform used by Myspace and Honda." },
    { year: "2006", event: "Userplane is acquired by AOL; Jones becomes the company's youngest-ever SVP." },
    { year: "2008", event: "Launches Tsavo Media, an online media network later sold to Cybernex for $75 million." },
    { year: "2010", event: "Appointed CEO of Myspace by News Corporation to lead its turnaround." },
    { year: "2011", event: "Co-founds Science Inc. as an incubator and venture capital firm in Santa Monica, securing initial funding from Google's Eric Schmidt." }
  ],
  biography: "Michael Jones built and sold Userplane to AOL, ran Myspace through a high-profile turnaround as its CEO, and then co-founded Science Inc. in 2011, which went on to incubate Dollar Shave Club and back Liquid Death.",
  sources: [
    { label: "Wikipedia — Michael Jones (entrepreneur)", url: "https://en.wikipedia.org/wiki/Michael_Jones_(entrepreneur)" },
    { label: "LA Business Journal — Michael Jones", url: "https://labusinessjournal.com/la500-2025/technology-2025/la500-2025-michael-jones/" }
  ]
},
"peter-pham": {
  name: "Peter Pham",
  firm: "Science Inc.",
  firmSlug: "science-inc",
  title: "President",
  joinedYear: null,
  education: [],
  previousExperience: [
    "Co-Founder & CEO, BillShrink/TruAxis (acquired by MasterCard, 2012)",
    "VP of Business Development, Photobucket (led growth to 61M users, $300M sale to Fox Interactive Media, 2007)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "2007", event: "As part of Photobucket's founding team and VP of Business Development, drives growth to 61 million users, leading to a $300 million sale to Fox Interactive Media." },
    { year: "2012", event: "BillShrink/TruAxis, which Pham co-founded and led as CEO, is acquired by MasterCard." },
    { year: null, event: "Joins Science Inc. as President." }
  ],
  biography: "Peter Pham led Photobucket's growth to a $300 million sale to Fox Interactive Media, then co-founded and sold BillShrink/TruAxis to MasterCard, before becoming President of Science Inc.",
  sources: [
    { label: "Science Inc. — Leadership", url: "https://dev.science-inc.com/ssac.html" }
  ]
},

// ============ SOMA CAPITAL ============
"aneel-ranadive": {
  name: "Aneel Ranadive",
  firm: "Soma Capital",
  firmSlug: "soma-capital",
  title: "Founder & Managing Partner",
  joinedYear: 2015,
  education: ["Columbia University, B.S. Mathematics (2006)"],
  previousExperience: [
    "Investment Banking Analyst, Bank of America",
    "Founder, BoredAt (early anonymous college social network)",
    "Co-Founder & CEO, Pinchit (backed by Eduardo Saverin, Tim Draper)",
    "Co-Founder, GlanceGuide (video analytics, sold to Nielsen)",
    "Founder, Tag (location-sharing app, acquired by Mark Cuban, 2015)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "2006", event: "Graduates Columbia University with a B.S. in Mathematics; begins in investment banking before pivoting to startups." },
    { year: null, event: "Launches BoredAt while at Columbia, one of the first anonymous college social networks." },
    { year: null, event: "Co-founds Pinchit, a daily-deal site backed by Eduardo Saverin and Tim Draper, generating $2M in first-year revenue." },
    { year: null, event: "Co-founds GlanceGuide, a video analytics company later sold to Nielsen." },
    { year: "2015", event: "Founds Tag, a location-sharing app, and separately founds Soma Capital, a seed-stage venture fund." },
    { year: "2015", event: "Tag is acquired by Mark Cuban." }
  ],
  biography: "Aneel Ranadive built and sold multiple startups — including Tag, acquired by Mark Cuban — before founding Soma Capital in 2015, which has since seeded more than 40 companies valued above $1 billion, including Ramp, Cognition, and Rippling.",
  sources: [
    { label: "Forbes — Aneel Ranadive", url: "https://www.forbes.com/profile/aneel-ranadive/" },
    { label: "Soma Capital — About", url: "https://somacap.com/about" }
  ]
},

// ============ VY CAPITAL ============
"alexander-tamas": {
  name: "Alexander Tamas",
  firm: "Vy Capital",
  firmSlug: "vy-capital",
  title: "Founder",
  joinedYear: null,
  education: ["Johann Wolfgang Goethe University, Frankfurt"],
  previousExperience: [
    "Technology M&A, Goldman Sachs, London",
    "Partner, DST Global (2008 onward)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Works in the technology mergers and acquisitions group at Goldman Sachs in London." },
    { year: "2008", event: "Joins DST Global as Partner, leading and sourcing early primary investments in Facebook, Airbnb, Spotify, Twitter, JD.com, Alibaba, Xiaomi, and Zalando." },
    { year: null, event: "Helps consolidate the Russian internet sector around Mail.ru as its Managing Director, taking the company public in 2010." },
    { year: null, event: "Leaves DST to found Vy Capital, which has since grown to manage over $5 billion in assets." }
  ],
  biography: "Alexander Tamas was described by Marc Andreessen and Ben Horowitz as 'Yuri Milner's human supercomputer' for the landmark early bets he sourced at DST Global — Facebook, Airbnb, Spotify, and Twitter among them — before founding Vy Capital, which later contributed to Elon Musk's Twitter acquisition.",
  sources: [
    { label: "SEC filing — Alexander Tamas bio", url: "https://www.sec.gov/Archives/edgar/data/1822877/000110465922035010/tm223923d1_10ka.htm" },
    { label: "The Frederik Journals — Alexander Tamas", url: "https://www.frederikjournals.com/p/alexander-tamas-the-vc-youve-never" }
  ]
},
"john-hering": {
  name: "John Hering",
  firm: "Vy Capital",
  firmSlug: "vy-capital",
  title: "Co-Founder",
  joinedYear: null,
  education: ["University of Southern California, Public Policy"],
  previousExperience: [
    "Founder, DailyWireless.com (acquired by Tippit, Inc.)",
    "Founder & CEO, Lookout (2007–2014, then Executive Chairman)",
    "Co-Founder, Coalition (cybersecurity insurance)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "2005", event: "While a USC student, hacks a Bluetooth network from over a mile away and scans celebrities' phones at the Academy Awards red carpet." },
    { year: "2007", event: "Co-founds Lookout, a mobile security company, while still attending USC." },
    { year: "2014", event: "Steps down as Lookout CEO in March, remaining as Executive Chairman; Lookout later protects over 175 million devices globally." },
    { year: null, event: "Co-founds Coalition, a cybersecurity insurance company backed by Allianz and other investors." },
    { year: null, event: "Co-founds Vy Capital with Alexander Tamas." }
  ],
  biography: "John Hering co-founded mobile security company Lookout while still a USC student, growing it to protect over 175 million devices, before co-founding both the cybersecurity insurer Coalition and Vy Capital.",
  sources: [
    { label: "Founders Pledge — John Hering", url: "https://www.founderspledge.com/members/2490" },
    { label: "Fortune 40 Under 40 — John Hering", url: "https://fortune.com/40-under-40/2012/john-hering/" }
  ]
},

// ============ ICONIQ CAPITAL ============
"divesh-makan": {
  name: "Divesh Makan",
  firm: "ICONIQ Capital",
  firmSlug: "iconiq-capital",
  title: "Co-Founder",
  joinedYear: 2011,
  education: ["University of Natal, South Africa, Electrical Engineering", "Wharton School, MBA"],
  previousExperience: [
    "Broker/Vice President, Goldman Sachs, San Francisco (met Mark Zuckerberg in 2004)",
    "Executive Director, Morgan Stanley (2008–2011)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "2004", event: "Meets Mark Zuckerberg while working as a broker at Goldman Sachs' San Francisco wealth advisory office." },
    { year: "2008", event: "Leaves Goldman Sachs and joins Morgan Stanley." },
    { year: "2011", event: "Leaves Morgan Stanley in December, co-founding ICONIQ Capital with Michael Anders and Chad Boeding to serve as independent wealth advisors to tech founders including Zuckerberg, Sheryl Sandberg, and Dustin Moskovitz." },
    { year: "2013", event: "Launches ICONIQ Growth, the firm's venture/growth investing arm, encouraged and seed-funded by early client Dave Goldberg." }
  ],
  biography: "Divesh Makan met Mark Zuckerberg in 2004 while working as a Goldman Sachs broker, and built that relationship into ICONIQ Capital, co-founded in 2011, which now manages tens of billions for a small roster of the tech industry's wealthiest families.",
  sources: [
    { label: "Fortune — Inside Iconiq Growth", url: "https://www.aol.com/inside-iconiq-growth-one-silicon-130000568.html" },
    { label: "Forbes India — Divesh Makan", url: "https://www.forbesindia.com/article/cross-border/how-divesh-makan-gained-entry-into-zuckerbergs-inner-circle/39295/1" }
  ]
},
"michael-anders": {
  name: "Michael Anders",
  firm: "ICONIQ Capital",
  firmSlug: "iconiq-capital",
  title: "Co-Founder & General Partner",
  joinedYear: 2011,
  education: ["University of Rhode Island, B.A./B.S. Political Science and Communication Studies", "Columbia University, Certificate in International Economics"],
  previousExperience: [
    "Credit Analyst, Société Générale, Paris/London (1997)",
    "Vice President, Franklin Templeton Investments",
    "Vice President, Fidelity Charitable Services (2005–2007)",
    "Founder, GivingCapital",
    "Vice President, Goldman Sachs (2008)",
    "Vice President, Morgan Stanley (2011)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "1997", event: "Begins career as a Credit Analyst at Société Générale in Paris and London." },
    { year: null, event: "Holds roles at Franklin Templeton and Fidelity Charitable Services; founds GivingCapital, building turnkey charitable-giving products for large financial firms." },
    { year: "2008", event: "Joins Goldman Sachs as Vice President." },
    { year: "2011", event: "Joins Morgan Stanley, then co-founds ICONIQ Capital in December with Divesh Makan and Chad Boeding." }
  ],
  biography: "Michael Anders spent over a decade across Société Générale, Franklin Templeton, Fidelity, Goldman Sachs, and Morgan Stanley — including founding a charitable-giving startup — before co-founding ICONIQ Capital in 2011.",
  sources: [
    { label: "Milken Institute — Mike Anders", url: "https://milkeninstitute.org/events/middle-east-and-africa-summit-2024/speakers/mike-anders" }
  ]
},

// ============ MFV PARTNERS ============
"karthee-madasamy": {
  name: "Karthee Madasamy",
  firm: "MFV Partners",
  firmSlug: "mfv-partners",
  title: "Founding Managing Partner",
  joinedYear: 2018,
  education: ["College of Engineering, Guindy (Chennai), B.E. Electronics and Communication", "University of Michigan, M.S. Electrical Engineering", "University of Chicago Booth School of Business, MBA"],
  previousExperience: [
    "Technical & product marketing roles, three Silicon Valley semiconductor/wireless startups (3G, WiFi, Bluetooth)",
    "Corporate Vice President & Managing Director, Qualcomm Ventures (11 years)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Leads technical and product marketing roles at three Silicon Valley semiconductor and wireless startups." },
    { year: null, event: "Joins Qualcomm Ventures, spending 11 years as Corporate VP and Managing Director, starting its investment activities in both Israel and India, and investing in Waze (acquired by Google) and BORQS (NASDAQ IPO)." },
    { year: "2018", event: "Founds MFV Partners, a Palo Alto deep-tech venture fund." }
  ],
  biography: "Karthee Madasamy spent 11 years running Qualcomm Ventures' investment activities across the US, Israel, and India — including an early bet on Waze — before founding MFV Partners in 2018 to back deep-tech companies like PsiQuantum and Agility Robotics.",
  sources: [
    { label: "Polsky Center — Karthee Madasamy", url: "https://polsky.uchicago.edu/people/karthee-madasamy/" }
  ]
},

// ============ LIQUID 2 VENTURES ============
"mike-miller": {
  name: "Mike Miller",
  firm: "Liquid 2 Ventures",
  firmSlug: "liquid2-ventures",
  title: "Co-Founder",
  joinedYear: 2015,
  education: ["Michigan State University, B.S. Physics and Philosophy", "Yale University, Ph.D. Particle Physics"],
  previousExperience: [
    "Undergraduate researcher, MSU Cyclotron",
    "Faculty positions, MIT and University of Washington",
    "Co-Founder, Cloudant (Y Combinator-backed, acquired by IBM in 2014)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Earns undergraduate degrees in Physics and Philosophy at Michigan State, conducting research at the Cyclotron." },
    { year: null, event: "Completes a Ph.D. in Particle Physics at Yale, followed by faculty positions at MIT and the University of Washington." },
    { year: null, event: "Co-founds Cloudant, a Y Combinator-backed company that helped create the NoSQL/database-as-a-service market." },
    { year: "2014", event: "Cloudant is acquired by IBM." },
    { year: "2015", event: "Co-founds Liquid 2 Ventures with Joe Montana and Michael Ma." }
  ],
  biography: "Mike Miller left a career path toward academic particle physics — with faculty positions at MIT and UW — to co-found Cloudant, a database company acquired by IBM in 2014, then co-founded Liquid 2 Ventures with Joe Montana the following year.",
  sources: [
    { label: "Liquid 2 Ventures — Team", url: "https://www.liquid2.vc/team" }
  ]
},

// ============ UNUSUAL VENTURES ============
"john-vrionis": {
  name: "John Vrionis",
  firm: "Unusual Ventures",
  firmSlug: "unusual-ventures",
  title: "Co-Founder & Managing Partner",
  joinedYear: 2018,
  education: [],
  previousExperience: [
    "Partner, Lightspeed Venture Partners (12 years)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Spends 12 years at Lightspeed Venture Partners, making early investments in AppDynamics, MuleSoft, Nimble Storage, and DataStax." },
    { year: null, event: "Makes an early investment in Jyoti Bansal's AppDynamics, which is later acquired by Cisco for $3.7 billion." },
    { year: "2018", event: "Co-founds Unusual Ventures with Jyoti Bansal." }
  ],
  biography: "John Vrionis spent 12 years investing at Lightspeed Venture Partners — including an early bet on AppDynamics — before teaming up with that company's own founder, Jyoti Bansal, to co-found Unusual Ventures in 2018.",
  sources: [
    { label: "Wikipedia — Unusual Ventures", url: "https://en.wikipedia.org/wiki/Unusual_Ventures" },
    { label: "Unusual Ventures — John Vrionis", url: "https://www.unusual.vc/team/john-vrionis/" }
  ]
},
"jyoti-bansal": {
  name: "Jyoti Bansal",
  firm: "Unusual Ventures",
  firmSlug: "unusual-ventures",
  title: "Co-Founder & Entrepreneur Partner",
  joinedYear: 2018,
  education: ["Indian Institute of Technology, Delhi, B.S. Computer Science"],
  previousExperience: [
    "Software Engineer & Architect, various Silicon Valley startups",
    "Founder & CEO, AppDynamics (2008–2016, then Chairman until 2017)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: 1,
  careerTimeline: [
    { year: "2008", event: "Founds AppDynamics, an application performance management company." },
    { year: "2017", event: "AppDynamics is acquired by Cisco Systems for $3.7 billion, a day before its scheduled IPO." },
    { year: "2017", event: "Launches BIG Labs, a startup studio, and co-founds Harness the same year." },
    { year: "2018", event: "Co-founds Unusual Ventures with John Vrionis." },
    { year: "2020", event: "Launches Traceable, a second company out of BIG Labs." },
    { year: "2025", event: "Merges Harness and Traceable into a single company worth approximately $5 billion." }
  ],
  biography: "Jyoti Bansal sold AppDynamics to Cisco for $3.7 billion a day before its scheduled IPO, then went on to found Harness and Traceable simultaneously while co-founding Unusual Ventures with longtime investor John Vrionis.",
  sources: [
    { label: "Wikipedia — Jyoti Bansal", url: "https://en.wikipedia.org/wiki/Jyoti_Bansal" },
    { label: "CNBC — Bansal merges Harness and Traceable", url: "https://www.cnbc.com/2025/02/10/appdynamics-founder-jyoti-bansal-merges-startups-harness-traceable-.html" }
  ]
},

// ============ COLLABORATIVE FUND ============
"craig-shapiro": {
  name: "Craig Shapiro",
  firm: "Collaborative Fund",
  firmSlug: "collaborative-fund",
  title: "Founder & Managing Partner",
  joinedYear: 2010,
  education: ["Washington University in St. Louis, B.A. Political Science"],
  previousExperience: [
    "President, GOOD Worldwide",
    "Early angel investor, Facebook and Kickstarter"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: null, event: "Serves as President of GOOD Worldwide before founding his own fund." },
    { year: null, event: "Makes early angel investments in Facebook and Kickstarter." },
    { year: "2010", event: "Founds Collaborative Fund in New York City." },
    { year: "2026", event: "Raises $250 million to launch Collab Holdings, a private equity fund for long-term consumer brands." }
  ],
  biography: "Craig Shapiro made early angel bets on Facebook and Kickstarter before founding Collaborative Fund in 2010, building it into a $1 billion-plus platform backing purpose-driven consumer companies including Lyft, Reddit, and Beyond Meat.",
  sources: [
    { label: "Collaborative Fund — Craig Shapiro", url: "https://collabfund.com/about/craig-shapiro" },
    { label: "Inc. — Craig Shapiro raises Collab Holdings", url: "https://www.inc.com/ali-donaldson/with-his-new-fund-this-investor-aims-to-win-over-private-equity-skeptics/91330857" }
  ]
},

// ============ SHRUG CAPITAL ============
"niv-dror": {
  name: "Niv Dror",
  firm: "Shrug Capital",
  firmSlug: "shrug-capital",
  title: "Founder & Managing Partner",
  joinedYear: 2018,
  education: ["University of California, Santa Barbara, B.A. Business Economics"],
  previousExperience: [
    "Analyst, DataFox Inc. (2013–2015)",
    "Community Manager, Meerkat/Houseparty (2015)",
    "Marketing, Product Hunt (2015–2018)",
    "Marketing, AngelList (2017–2018)"
  ],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "2013", event: "Works as an analyst at DataFox." },
    { year: "2015", event: "Serves as Community Manager at Meerkat/Houseparty, then joins Product Hunt in marketing." },
    { year: "2017", event: "Joins AngelList in marketing while continuing at Product Hunt." },
    { year: "2018", event: "Co-founds Shrug Capital with Moshe Lifschitz, growing what started as a viral tweet into a fund backed by Marc Andreessen, Chris Dixon, and Kevin Rose." }
  ],
  biography: "Niv Dror built his network through community and marketing roles at Product Hunt, AngelList, and Meerkat before co-founding Shrug Capital in 2018 — a fund whose origin, famously, was a joke tweet that turned into real backing from Marc Andreessen and Chris Dixon.",
  sources: [
    { label: "Signal — Niv Dror investing profile", url: "https://signal.nfx.com/investors/niv-dror" },
    { label: "Startup Intros — Shrug Capital", url: "https://startupintros.com/orgs/shrug-capital" }
  ]
},
"moshe-lifschitz": {
  name: "Moshe Lifschitz",
  firm: "Shrug Capital",
  firmSlug: "shrug-capital",
  title: "Founder & Managing Partner",
  joinedYear: 2018,
  education: [],
  previousExperience: [],
  boardSeats: [],
  ipoCount: null,
  majorExits: null,
  careerTimeline: [
    { year: "2018", event: "Co-founds Shrug Capital with Niv Dror." }
  ],
  biography: "Moshe Lifschitz co-founded Shrug Capital with Niv Dror in 2018; detailed pre-Shrug career history wasn't consistently confirmed across sources, so it's left out here rather than guessed.",
  sources: [
    { label: "Crunchbase — Shrug Capital", url: "https://www.crunchbase.com/organization/shrug-capital" }
  ]
},
  "samsung-ventures-lead": {
    name: "Samsung Venture Investment Corporation",
    firm: "Samsung Ventures",
    firmSlug: "samsung-ventures",
    title: "Corporate Venture Arm",
    joinedYear: 1999,
    education: [],
    previousExperience: [],
    investmentFocus: ["Semiconductors", "AI", "Robotics", "Cybersecurity"],
    notableInvestments: [
      { name: "SentinelOne", ticker: "S" },
      { name: "Niantic", ticker: null },
      { name: "Swiggy", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 24,
    majorExits: 65,
    careerTimeline: [
      { year: "1999", event: "Samsung establishes Samsung Venture Investment Corporation in Seoul as its corporate venture arm." },
      { year: "2021", event: "SentinelOne, a Samsung Ventures portfolio company, completes its NYSE IPO." },
      { year: "2025", event: "AUM reaches approximately $2.8 billion." }
    ],
    biography: "Samsung Venture Investment Corporation was established in 1999 as the corporate venture capital arm of Samsung Electronics, built to identify and back small and medium-sized companies developing breakthrough technologies across semiconductors, telecommunications, software, AI, robotics, and cybersecurity. Rather than offering capital alone, the fund provides portfolio companies with management support, technical resources, and market access drawn from Samsung's global manufacturing and distribution scale — a genuine structural advantage most standalone VCs can't replicate. Over more than 25 years, Samsung Ventures has invested in more than 200 companies across offices spanning South Korea, Silicon Valley, and Europe, producing 10-plus unicorns, 24 IPOs, and 65 acquisitions including SentinelOne, Niantic, and Swiggy, and now manages approximately $2.8 billion.",
    sources: [
      { label: "Samsung Ventures", url: "https://www.samsungventure.co.kr/en/company.do" },
      { label: "Tracxn — Samsung Venture Investment", url: "https://tracxn.com/d/venture-capital/samsung-venture-investment" }
    ]
  },

  "al-gore-david-blood": {
    name: "Al Gore & David Blood",
    firm: "Generation Investment Management",
    firmSlug: "generation-investment-management",
    title: "Chairman & Senior Partner",
    joinedYear: 2004,
    education: [],
    previousExperience: [
      "45th Vice President of the United States (Al Gore)",
      "CEO, Goldman Sachs Asset Management (David Blood)"
    ],
    investmentFocus: ["Sustainability", "Climate", "Public & Private Equity"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2001", event: "Al Gore, following his time as US Vice President, begins developing the thesis that would become Generation Investment Management." },
      { year: "2004", event: "Al Gore and David Blood co-found Generation Investment Management in London in April, alongside five other founding partners." },
      { year: "2021", event: "Launches Just Climate, a dedicated climate-focused investment business, as an offshoot of Generation." }
    ],
    biography: "Al Gore, the 45th Vice President of the United States, and David Blood, former CEO of Goldman Sachs Asset Management, co-founded Generation Investment Management in April 2004 alongside five other founding partners, built around a specific, at-the-time contrarian thesis: that integrating sustainability research into fundamental equity analysis would drive superior long-term returns, not sacrifice them. That conviction predated the current ESG investing boom by nearly two decades, and Generation has since built a global research platform spanning public and private equity strategies, investing worldwide with the explicit goal of making sustainable capitalism the enduring economic model rather than a niche. In 2021 the firm launched Just Climate, a dedicated climate investment business, extending its original thesis into a new standalone platform focused specifically on decarbonization at scale.",
    sources: [
      { label: "Wikipedia — Generation Investment Management", url: "https://en.wikipedia.org/wiki/Generation_Investment_Management" }
    ]
  },
"mary-meeker": {
    name: "Mary Meeker",
    firm: "Bond Capital",
    firmSlug: "bond-capital",
    title: "Founder & General Partner",
    joinedYear: 2018,
    education: ["BA, DePauw University", "MBA, Cornell University (Samuel Curtis Johnson Graduate School of Management)"],
    previousExperience: [
      "Stockbroker, Merrill Lynch",
      "Analyst, Morgan Stanley (technology & internet research)",
      "Growth Practice Partner, Kleiner Perkins (2010-2019)"
    ],
    investmentFocus: ["Enterprise Software", "Consumer", "AI", "Deep Tech"],
    notableInvestments: [
      { name: "Canva", ticker: null },
      { name: "Applied Intuition", ticker: null },
      { name: "AlphaSense", ticker: null }
    ],
    boardSeats: ["Block", "Genies", "OpenEvidence"],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "1995", event: "Publishes the first edition of her annual Internet Trends report while at Morgan Stanley, becoming the technology industry's most anticipated single document for the next two decades." },
      { year: "2010", event: "Joins Kleiner Perkins, leading its growth investing practice and backing Facebook, Spotify, Airbnb, Uber, Slack, and Plaid." },
      { year: "2018", event: "Leaves Kleiner Perkins in September, following an internal power struggle over the firm's direction, and founds Bond Capital with Mood Rowghani, Noah Knauf, and Juliet de Baubigny." },
      { year: "2019", event: "Bond closes its $1.25 billion debut fund in April and makes its first investment, $70 million into Canva, in May." },
      { year: "2024", event: "Revives the Internet Trends report after a five-year hiatus." }
    ],
    biography: "Mary Meeker earned the nickname 'Queen of the Internet' in the 1990s for her Internet Trends reports, published annually from 1995 through 2019, which synthesized hundreds of data points into directionally accurate predictions about where technology was heading — reports so influential that CEOs would rearrange their schedules to read them the day they dropped. She spent nearly a decade leading Kleiner Perkins' growth investing practice, backing Facebook, Spotify, Airbnb, Uber, and Slack, before an internal power struggle led her to leave in September 2018 and found Bond Capital with three fellow Kleiner alumni. Bond has grown into a $5.9 billion growth-equity platform applying Meeker's research-driven, data-first investment discipline to late-stage technology companies, with Canva — backed since 2019 and now valued at $42 billion — as its signature bet, alongside Applied Intuition, Checkr, and AI voice company ElevenLabs.",
    sources: [
      { label: "Forbes — Mary Meeker", url: "https://www.forbes.com/profile/mary-meeker/" },
      { label: "TechCrunch", url: "https://techcrunch.com/2019/04/24/mary-meeker-raises-1-25b-for-bond-her-debut-growth-fund" }
    ]
  },

  "divesh-makan": {
    name: "Divesh Makan",
    firm: "Iconiq Growth",
    firmSlug: "iconiq-growth",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2013,
    education: [],
    previousExperience: [
      "Wealth Advisor, Morgan Stanley"
    ],
    investmentFocus: ["Enterprise Software", "Fintech", "Consumer Internet", "Healthcare IT"],
    notableInvestments: [
      { name: "Snowflake", ticker: "SNOW" },
      { name: "Datadog", ticker: "DDOG" },
      { name: "GitLab", ticker: "GTLB" }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 4,
    careerTimeline: [
      { year: "2002", event: "Meets Dave Goldberg and Sheryl Sandberg, forming relationships that shape the next two decades of his career." },
      { year: "2011", event: "Leaves Morgan Stanley to found Iconiq Capital, managing wealth for Facebook's inner circle including Mark Zuckerberg and Sheryl Sandberg." },
      { year: "2013", event: "Launches Iconiq Growth with Will Griffith, encouraged by client and mentor Dave Goldberg, deliberately betting on SaaS over consumer technology." },
      { year: "2015", event: "Leads Iconiq's early investment in Snowflake." },
      { year: "2020", event: "Snowflake completes its NYSE IPO at a $68 billion valuation." },
      { year: "2024", event: "Closes Iconiq Growth's seventh fund, its largest ever, at $5.75 billion." }
    ],
    biography: "Divesh Makan left Morgan Stanley in 2011 to found Iconiq Capital, building a wealth management practice for Silicon Valley's most prominent tech executives, including early client and eventual mentor Dave Goldberg, the SurveyMonkey CEO whose sudden death in 2015 profoundly shaped Makan's approach to the business. It was Goldberg who encouraged Makan to launch Iconiq Growth in 2013, recruiting Will Griffith from Technology Crossover Ventures to lead it, and the two made a deliberately contrarian call to focus on enterprise SaaS rather than the consumer technology most investors chased at the time. That bet produced Snowflake, Datadog, and GitLab — three of Iconiq's clearest public-market outcomes — and Makan has grown Iconiq Growth into one of Silicon Valley's largest and most private growth funds, managing more than $21 billion deployed across 140-plus companies, with its seventh fund closing at $5.75 billion in 2024, its largest ever.",
    sources: [
      { label: "Fortune", url: "https://fortune.com/2024/07/22/iconiq-growth-venture-capital-fund-startups-divesh-makan/" },
      { label: "Wikipedia — Iconiq Capital", url: "https://en.wikipedia.org/wiki/Iconiq_Capital" }
    ]
  },

  "colin-beirne": {
    name: "Colin Beirne",
    firm: "Deviation Capital",
    firmSlug: "deviation-capital",
    title: "Founding Partner",
    joinedYear: 2012,
    education: ["BA (dual), Economics & Law, Jurisprudence and Social Thought, Amherst College"],
    previousExperience: [
      "Technology Investment Banker",
      "Corporate Strategist",
      "7 years, Two Sigma Investments (business strategy)"
    ],
    investmentFocus: ["AI", "Deep Tech", "Life Sciences", "Robotics"],
    notableInvestments: [
      { name: "Recursion Pharmaceuticals", ticker: "RXRX" },
      { name: "WHOOP", ticker: null },
      { name: "Kalshi", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "1990s", event: "Interns at Andromedia during the late-'90s dot-com boom, sparking a lasting interest in startups." },
      { year: "2005", event: "Joins Two Sigma Investments, spending seven years helping shape the quant hedge fund's business strategy." },
      { year: "2012", event: "Proposes and founds Two Sigma Ventures on Pi Day (March 14) at a Two Sigma strategy offsite." },
      { year: "2021", event: "Recursion Pharmaceuticals completes its NASDAQ IPO at $18 a share, an initial market cap of roughly $3 billion." },
      { year: "2026", event: "Leads Two Sigma Ventures' spinout into an independent firm, Deviation Capital, with $2 billion in AUM in May." }
    ],
    biography: "Colin Beirne spent seven years at Two Sigma Investments helping shape the quantitative hedge fund's business strategy before proposing, on Pi Day 2012, that the firm launch a venture arm betting on three convictions: New York was becoming a real startup ecosystem, data and advanced computing would drive innovation for decades, and Two Sigma had the technical talent to help. That thesis, effectively a bet on AI before the term became mainstream, produced Recursion Pharmaceuticals' 2021 IPO and stakes in WHOOP, Kalshi, and Etched. After 14 years building Two Sigma Ventures into an operationally mature platform, Beirne led its clean spinout into an independent firm, Deviation Capital, in May 2026, retaining $2 billion in AUM and access to Two Sigma's technical bench while gaining full GP autonomy over fund mechanics and succession.",
    sources: [
      { label: "Deviation Capital — Colin Beirne", url: "https://deviation.com/team/colin-beirne" },
      { label: "citybiz", url: "https://www.citybiz.co/article/841330/deviation-capital-launches-with-2-billion-aum-after-spinout-from-two-sigma-ventures/" }
    ]
  },
"adeyemi-ajao": {
    name: "Adeyemi 'Ade' Ajao",
    firm: "Base10 Partners",
    firmSlug: "base10-partners",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2017,
    education: [],
    previousExperience: [
      "Co-Founder, Tuenti (Spanish social media company, founded in college, acquired by Telefónica for $100 million)",
      "Founder, Jobandtalent",
      "Founder, Identified",
      "Founder, Cabify",
      "VP of Technology Product Strategy, Workday"
    ],
    investmentFocus: ["Automation", "AI", "Fintech", "Real Economy Infrastructure"],
    notableInvestments: [
      { name: "Notion", ticker: null },
      { name: "Figma", ticker: null },
      { name: "Nubank", ticker: "NU" }
    ],
    boardSeats: ["Motive"],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "2000s", event: "Co-founds Tuenti, a Spanish social media company, while still in college, later sold to Telefónica for $100 million." },
      { year: "2010s", event: "Founds Jobandtalent, Identified, and Cabify, then becomes VP of Technology Product Strategy at Workday." },
      { year: "2017", event: "Co-founds Base10 Partners with TJ Nahigian in San Francisco." },
      { year: "2026", event: "Closes $850 million for Base10's latest fund, pushing AUM to $2.6 billion, and joins the board of Motive." }
    ],
    biography: "Adeyemi 'Ade' Ajao, who has African, European, and Latin roots and was raised in Spain and Nigeria, built a genuinely rare multi-country founder track record before turning to venture capital — co-founding Tuenti while in college (sold to Telefónica for $100 million), then Jobandtalent, Identified, and Cabify, before joining Workday as VP of Technology Product Strategy. He co-founded Base10 Partners in 2017 with TJ Nahigian, building what Forbes has recognized as the world's largest Black-led VC firm, with an original thesis the two originally called 'Applied AI for the Real Economy' — a term LPs initially dismissed as too niche until AI became mainstream. Base10 commits up to 50% of its carried interest to fund student scholarships at Historically Black Colleges and Universities through its Advancement Initiative, and has grown to $2.6 billion in AUM, backing Notion, Figma, and Nubank among more than 110 investments.",
    sources: [
      { label: "PR Newswire", url: "https://www.prnewswire.com/news-releases/base10-partners-hits-2-6b-aum-closes-850m-to-back-the-next-wave-of-real-economy-ai-302797885.html" },
      { label: "AfroTech via Yahoo Finance", url: "https://finance.yahoo.com/technology/ai/articles/base10-vc-firm-co-founded-151255672.html" }
    ]
  },

  "ben-casnocha": {
    name: "Ben Casnocha",
    firm: "Village Global",
    firmSlug: "village-global",
    title: "Co-Founder & General Partner",
    joinedYear: 2017,
    education: [],
    previousExperience: [
      "Founder, Comcate Inc. (e-government technology, founded at age 14)",
      "Chief of Staff to Reid Hoffman, LinkedIn",
      "Co-Author, 'The Start-Up of You' (with Reid Hoffman, New York Times bestseller)"
    ],
    investmentFocus: ["Fintech", "SaaS", "Consumer", "AI", "Health"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 9,
    careerTimeline: [
      { year: "2002", event: "Founds Comcate Inc., an e-government technology firm, at age 14." },
      { year: "2012", event: "Co-authors 'The Start-Up of You' with Reid Hoffman, a New York Times bestseller applying startup thinking to individual careers." },
      { year: "2010s", event: "Serves as Chief of Staff to Reid Hoffman at LinkedIn." },
      { year: "2017", event: "Co-founds Village Global with Erik Torenberg, Anne Dwane, and Ross Fubini in September, chaired by Reid Hoffman." }
    ],
    biography: "Ben Casnocha founded his first company, Comcate Inc., at age 14, and went on to co-author 'The Start-Up of You' with Reid Hoffman, a New York Times bestseller that became foundational reading in Silicon Valley career thinking, before serving as Hoffman's Chief of Staff at LinkedIn. He co-founded Village Global in 2017 with Erik Torenberg, Anne Dwane, and Ross Fubini, building a genuinely network-first venture firm chaired by Hoffman and backed as limited partners by Bill Gates, Jeff Bezos, Mark Zuckerberg, and Anne Wojcicki. Rather than a traditional small partner team making all investment decisions, Village Global distributes deal sourcing and evaluation across a network of more than 400 operator-angels called 'Network Leaders,' writing $500,000 to $3 million pre-seed and seed checks. The firm has backed 233 companies over its history, producing 9 unicorns and 22 acquisitions, and manages more than $500 million in AUM.",
    sources: [
      { label: "Wikipedia — Ben Casnocha", url: "https://en.wikipedia.org/wiki/Ben_Casnocha" },
      { label: "Superscout — Village Global", url: "https://superscout.co/investor/village-global" }
    ]
  },

  "arjun-sethi": {
    name: "Arjun Sethi",
    firm: "Tribe Capital",
    firmSlug: "tribe-capital",
    title: "Co-Founder & General Partner",
    joinedYear: 2018,
    education: [],
    previousExperience: [
      "Partner, Social Capital"
    ],
    investmentFocus: ["Enterprise SaaS", "Fintech", "Crypto", "AI"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2010s", event: "Works as a Partner at Social Capital alongside future co-founders Jonathan Hsu and Ted Maidenberg." },
      { year: "2018", event: "Co-founds Tribe Capital in July with Hsu and Maidenberg, all three leaving Social Capital together; makes first investment in sFOX." },
      { year: "2021", event: "Sponsors a SPAC that goes public on NASDAQ with $240 million in capital." },
      { year: "2025", event: "Tribe Capital's assets under management reach $1.9 billion." }
    ],
    biography: "Arjun Sethi built his early venture career as a Partner at Social Capital before co-founding Tribe Capital in July 2018 with fellow Social Capital alumni Jonathan Hsu and Ted Maidenberg, applying Hsu's data-science background to a genuinely quantitative approach to venture investing. The firm's model blends rigorous data-driven diligence with deep founder relationships, backing enduring companies across enterprise SaaS, fintech, and crypto rather than chasing hype cycles, and Sethi has helped grow Tribe into a firm managing $1.9 billion, including a 2021 SPAC that went public on NASDAQ with $240 million in capital. Tribe's model reflects a broader wave of former Social Capital partners building independent, data-native venture platforms after Chamath Palihapitiya restructured that firm in 2018.",
    sources: [
      { label: "Wikipedia — Tribe Capital", url: "https://en.wikipedia.org/wiki/Tribe_Capital" },
      { label: "Wikipedia — Arjun Sethi", url: "https://en.wikipedia.org/wiki/Arjun_Sethi_(entrepreneur)" }
    ]
  },

  "ryan-floyd": {
    name: "Ryan Floyd",
    firm: "Storm Ventures",
    firmSlug: "storm-ventures",
    title: "Founding Managing Director",
    joinedYear: 2000,
    education: ["BS & MS, Earth Systems, Stanford University"],
    previousExperience: [
      "Sales, a technology company that IPO'd in the late 1990s and was later acquired in the early 2000s"
    ],
    investmentFocus: ["Enterprise Software", "Cloud Infrastructure", "Cybersecurity", "SaaS"],
    notableInvestments: [
      { name: "Workato", ticker: null },
      { name: "Talkdesk", ticker: null },
      { name: "Pipedrive", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 5,
    careerTimeline: [
      { year: "1990s", event: "Works in sales at a technology company that completes an IPO in the late 1990s before being acquired in the early 2000s." },
      { year: "2000", event: "Co-founds Storm Ventures with Tae Hea Nahm and Sanjay Subhedar in Palo Alto, raising its first fund the same year the dot-com bubble began unraveling." },
      { year: "2020s", event: "Continues leading early-stage B2B enterprise software investments, backing Workato, Talkdesk, and Pipedrive." }
    ],
    biography: "Ryan Floyd earned degrees in Earth Systems from Stanford before a sales career at a technology company that went public in the late 1990s and was later acquired, giving him direct exposure to a full startup lifecycle before he ever became an investor. He co-founded Storm Ventures in 2000 with Tae Hea Nahm and Sanjay Subhedar, raising the firm's first fund in the same turbulent year the dot-com bubble began collapsing — timing Floyd has called pure luck, since raising a year later would likely have been far harder. Storm has built a deliberately focused thesis in early-stage B2B enterprise software, SaaS, and cybersecurity ever since, avoiding the insular 'network of friends' funding pattern common among some venture firms in favor of a broader, more assertive sourcing approach, and has made more than 200 investments including Workato, Talkdesk, and Pipedrive over 25 years. Floyd remains active in diversity initiatives in tech, including support for Code2040.",
    sources: [
      { label: "Storm Ventures — Ryan Floyd", url: "https://www.stormventures.com/team-members/ryan-floyd" },
      { label: "Heavybit — Venture Confidential Podcast", url: "https://www.heavybit.com/library/podcasts/venture-confidential/ep-13-the-role-of-the-investor-with-ryan-floyd-of-storm" }
    ]
  },
  "ev-williams": {
    name: "Ev Williams",
    firm: "Obvious Ventures",
    firmSlug: "obvious-ventures",
    title: "Co-Founder",
    joinedYear: 2014,
    education: [],
    previousExperience: [
      "Co-Founder, Blogger (acquired by Google)",
      "Co-Founder & CEO, Twitter",
      "Founder, Medium"
    ],
    investmentFocus: ["Climate", "Healthcare", "Consumer", "Economic Infrastructure"],
    notableInvestments: [
      { name: "Beyond Meat", ticker: "BYND" },
      { name: "Planet Labs", ticker: "PL" },
      { name: "Recursion Pharmaceuticals", ticker: "RXRX" }
    ],
    boardSeats: ["Medium (Chairman)"],
    ipoCount: 3,
    majorExits: 3,
    careerTimeline: [
      { year: "2003", event: "Co-founds Blogger, which Google acquires the same year." },
      { year: "2006", event: "Co-founds Twitter, later serving as CEO." },
      { year: "2012", event: "Founds Medium." },
      { year: "2014", event: "Co-founds Obvious Ventures with James Joaquin and Vishal Vasishth in December, built around 'world positive' investing." },
      { year: "2019", event: "Beyond Meat completes its NASDAQ IPO; Obvious holds a 9% stake at the time." },
      { year: "2021", event: "Planet Labs completes its SPAC merger; Recursion Pharmaceuticals completes its NASDAQ IPO." }
    ],
    biography: "Ev Williams co-founded Blogger, sold it to Google, then co-founded Twitter and later founded Medium, building three of the internet's most consequential publishing platforms before turning to venture capital. He co-founded Obvious Ventures in 2014 with James Joaquin and Vishal Vasishth on a specific, non-obvious premise: that companies solving humanity's biggest problems profitably, not through charity, would become the most valuable businesses of the coming decades. That thesis, organized around planetary health, human health, and economic health, produced an early 9% stake in Beyond Meat ahead of its 2019 IPO, a 2015 investment in Planet Labs ahead of its 2021 SPAC listing, and a Series A bet on Recursion Pharmaceuticals. Williams remains Chairman of Medium while continuing to co-lead Obvious, which has playfully closed its five funds at mathematically significant numbers, from $123,456,789 to Euler's number, $271,828,182.",
    sources: [
      { label: "Obvious Ventures — Ev Williams", url: "https://obvious.com/team/ev-williams/" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/01/26/obvious-ventures-lands-fund-five-with-a-360-degree-view-of-planetary-human-economic-health/" }
    ]
  },
  "gaorong-founders": {
    name: "Zhang Zhen",
    firm: "Gaorong Capital",
    firmSlug: "gaorong-capital",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2014,
    education: [],
    previousExperience: [
      "Investment Professional, IDG Capital"
    ],
    investmentFocus: ["Consumer Internet", "Enterprise Software", "Healthcare"],
    notableInvestments: [
      { name: "Pinduoduo", ticker: "PDD" },
      { name: "Kuaishou", ticker: "1024.HK" }
    ],
    boardSeats: [],
    ipoCount: 5,
    majorExits: 8,
    careerTimeline: [
      { year: "2010s", event: "Works as an investment professional at IDG Capital, alongside future co-founders Gao Xiang and Yue Bin." },
      { year: "2014", event: "Co-founds Banyan Capital (later renamed Gaorong Capital) with Gao Xiang and Yue Bin in Beijing in January." },
      { year: "2020", event: "AUM reaches approximately $4 billion." }
    ],
    biography: "Zhang Zhen worked as an investment professional at IDG Capital, one of China's most established venture firms, alongside future co-founders Gao Xiang and Yue Bin, before the three left together in January 2014 to found their own firm, initially named Banyan Capital and later rebranded to Gaorong Capital (Gaorong Ventures). That shared IDG pedigree gave the trio a genuine head start on sourcing and evaluating Chinese technology deals, and Gaorong has since built a strong track record in consumer internet, enterprise software, and healthcare, backing companies including Pinduoduo and Kuaishou through to public listings. The firm now manages approximately $4 billion, reflecting the broader wave of spinout funds founded by veteran investors from China's earliest generation of institutional VCs.",
    sources: [
      { label: "Wikipedia — Gaorong Ventures", url: "https://en.wikipedia.org/wiki/Gaorong_Ventures" }
    ]
  },
  "marc-andreessen": {
    name: "Marc Andreessen",
    firm: "Andreessen Horowitz",
    firmSlug: "a16z",
    title: "Co-Founder & General Partner",
    joinedYear: 2009,
    education: ["B.S. Computer Science, University of Illinois Urbana-Champaign"],
    previousExperience: [
      "Co-Creator, Mosaic web browser (1993)",
      "Co-Founder, Netscape Communications (1994) — IPO 1995, acquired by AOL for $4.2B in 1999",
      "Co-Founder, Loudcloud / Opsware (1999) — acquired by Hewlett-Packard for $1.6B in 2007"
    ],
    investmentFocus: ["Software", "Crypto", "Fintech", "Consumer", "AI Infrastructure"],
    notableInvestments: [
      { name: "Airbnb", ticker: "ABNB" },
      { name: "Coinbase", ticker: "COIN" },
      { name: "GitHub", ticker: null },
      { name: "Facebook", ticker: "META" },
      { name: "Pinterest", ticker: "PINS" },
      { name: "Skype", ticker: null }
    ],
    boardSeats: ["Meta Platforms"],
    ipoCount: 3,
    majorExits: 2,
    careerTimeline: [
      { year: "1993", event: "Co-creates Mosaic, one of the first graphical web browsers, while a student at UIUC." },
      { year: "1994", event: "Co-founds Netscape Communications." },
      { year: "1995", event: "Netscape's IPO helps launch the commercial internet era and the dot-com boom." },
      { year: "1999", event: "AOL acquires Netscape for $4.2 billion." },
      { year: "2007", event: "Hewlett-Packard acquires Opsware (formerly Loudcloud) for $1.6 billion." },
      { year: "2009", event: "Co-founds Andreessen Horowitz (a16z) with Ben Horowitz on a $300 million debut fund." }
    ],
    biography: "Marc Andreessen co-created Mosaic, the graphical web browser that made the early internet accessible to ordinary people, while still a student at the University of Illinois. He went on to co-found Netscape, whose 1995 IPO is widely credited with igniting the dot-com boom, before AOL acquired the company for $4.2 billion in 1999. After a second exit — selling Opsware to Hewlett-Packard for $1.6 billion in 2007 — Andreessen co-founded Andreessen Horowitz in 2009, building it into one of the largest venture capital firms in the world. He sits on the board of Meta Platforms and has backed category-defining companies including Airbnb, Coinbase, and GitHub.",
    sources: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Marc_Andreessen" },
      { label: "a16z — Marc Andreessen", url: "https://a16z.com/author/marc-andreessen/" }
    ]
  },
  "mark-boggett": {
    name: "Mark Boggett",
    firm: "Seraphim Space",
    firmSlug: "seraphim-space",
    title: "Co-Founder & CEO",
    joinedYear: 2016,
    education: ["BA, Accounting & Finance, University of Leeds", "MA, Economics & Finance, University of Leeds"],
    previousExperience: [
      "YFM Equity Partners",
      "Brewin Dolphin",
      "Williams de Broe"
    ],
    investmentFocus: ["Space Technology", "Satellite Data", "Deep Tech"],
    notableInvestments: [
      { name: "Spire Global", ticker: "SPIR" },
      { name: "Arqit", ticker: "ARQQ" },
      { name: "LeoLabs", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 6,
    majorExits: 9,
    careerTimeline: [
      { year: "2000s", event: "Builds a career in public markets tech investing at YFM Equity Partners, Brewin Dolphin, and Williams de Broe." },
      { year: "2016", event: "Co-founds Seraphim with James Bruegger and Rob Desborough, launching the world's first venture capital fund dedicated exclusively to SpaceTech." },
      { year: "2021", event: "Seraphim Space Investment Trust (SSIT) completes its IPO on the London Stock Exchange." },
      { year: "2026", event: "Seraphim's portfolio and alumni companies have collectively raised more than $12 billion, producing nine unicorns and six IPOs." }
    ],
    biography: "Mark Boggett transitioned from public markets tech investing at YFM Equity Partners, Brewin Dolphin, and Williams de Broe into venture capital, co-founding Seraphim in 2016 with James Bruegger and Rob Desborough to launch the world's first VC fund dedicated exclusively to the commercial space sector. That first-mover conviction — betting that satellites would become as foundational to daily life as smartphones — produced a genuinely full-stack platform spanning early-stage venture funds, the Seraphim Space Accelerator (the largest VC-led program in the sector), and Seraphim Space Investment Trust, a growth-stage fund that itself completed a London Stock Exchange IPO in 2021. Under Boggett's leadership, Seraphim has backed more than 145 SpaceTech startups across 33 countries, including Spire Global, Arqit, and LeoLabs, with AUM exceeding $630 million and alumni companies collectively raising more than $12 billion.",
    sources: [
      { label: "Seraphim Space — Team", url: "https://seraphim.vc/about/team/" },
      { label: "Wikipedia — Seraphim Space", url: "https://en.wikipedia.org/wiki/Seraphim_Space" }
    ]
  },

  "amy-nauiokas": {
    name: "Amy Nauiokas",
    firm: "Anthemis Group",
    firmSlug: "anthemis-group",
    title: "Founder & CEO",
    joinedYear: 2010,
    education: [],
    previousExperience: [
      "Deutsche Bank",
      "Bear Stearns",
      "Senior Managing Director, Cantor Fitzgerald (brought its brokerage business online)",
      "eCommerce Lead, Barclays Capital",
      "CEO, Barclays Stockbrokers (2006-2008, grew revenue 40%)",
      "Co-Founder, Nauiokas Park (2008-2010, predecessor to Anthemis)"
    ],
    investmentFocus: ["Fintech", "Insurtech", "Embedded Finance"],
    notableInvestments: [
      { name: "Betterment", ticker: null },
      { name: "Zoopla", ticker: null },
      { name: "Currencycloud", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 5,
    careerTimeline: [
      { year: "2000s", event: "Rises to Senior Managing Director at Cantor Fitzgerald, bringing its brokerage business online, before moving to Barclays Capital." },
      { year: "2006", event: "Becomes CEO of Barclays Stockbrokers, Europe's largest e-brokerage, growing its revenue 40%." },
      { year: "2008", event: "Co-founds Nauiokas Park with Sean Park, a venture firm focused on disruptive financial technologies." },
      { year: "2010", event: "Nauiokas Park becomes Anthemis Group in the fall." },
      { year: "2021", event: "Leads Anthemis Digital Acquisitions I Corp, an all-female-led fintech SPAC, to its market debut in November." }
    ],
    biography: "Amy Nauiokas built a two-decade Wall Street career spanning Deutsche Bank, Bear Stearns, Cantor Fitzgerald (where she brought its brokerage business online as Senior Managing Director), and Barclays Capital, before becoming CEO of Barclays Stockbrokers in 2006 and growing Europe's largest e-brokerage by 40%. She left in 2008 to co-found Nauiokas Park with Sean Park, a venture firm betting on disruptive financial technology years before 'fintech' was a mainstream term, which became Anthemis Group in 2010. Nauiokas has led Anthemis to become one of the most active fintech and insurtech investors globally, backing more than 150 portfolio companies including Betterment, Zoopla, and Currencycloud, deploying 40% of capital into women- and people of color-backed companies, and led Anthemis Digital Acquisitions I Corp, an all-female-led SPAC, to market in 2021. She was named to Forbes' 50 Over 50 list in 2024.",
    sources: [
      { label: "Wikipedia — Amy Nauiokas", url: "https://en.wikipedia.org/wiki/Amy_Nauiokas" },
      { label: "SEC S-1 Filing", url: "https://www.sec.gov/Archives/edgar/data/1853928/000119312521289843/d79631ds1.htm" }
    ]
  },

  "uwe-horstmann": {
    name: "Uwe Horstmann",
    firm: "Project A Ventures",
    firmSlug: "project-a-ventures",
    title: "Co-Founder & General Partner",
    joinedYear: 2012,
    education: ["BS, Entrepreneurship, WHU-Otto Beisheim School of Management", "MS, Business Engineering, University of Stuttgart", "PhD, RWTH Aachen University"],
    previousExperience: [
      "Managing Director, Rocket Internet (2009-2011, one of the company's earliest staff members from its 2007 founding)"
    ],
    investmentFocus: ["Defense Tech", "Fintech", "Supply Chain Software"],
    notableInvestments: [
      { name: "Trade Republic", ticker: null },
      { name: "Stark", ticker: null },
      { name: "sennder", ticker: null }
    ],
    boardSeats: ["ARX (Aerospace and Defense)", "Dixa"],
    ipoCount: 0,
    majorExits: 3,
    careerTimeline: [
      { year: "2007", event: "Joins Rocket Internet as one of its earliest staff members, eventually becoming Managing Director." },
      { year: "2012", event: "Co-founds Project A Ventures with five colleagues, pioneering an 'operational VC' model combining capital with in-house operational support." },
      { year: "2022", event: "Leads Project A's early shift into defense technology, backing companies including Stark and Quantum Systems." },
      { year: "2026", event: "Becomes CEO of Stark, a Berlin-based defense drone company Project A backed as one of its earliest investors, while remaining active at Project A." }
    ],
    biography: "Uwe Horstmann joined Rocket Internet in 2007 as one of the company's earliest staff members, rising to Managing Director before co-founding Project A Ventures in 2012 with five colleagues to build a genuinely different early-stage model — 'operational VC,' combining financial capital with a team of more than 100 in-house experts across product, growth, data, and recruiting, exclusively available to portfolio companies. That model backed companies including Trade Republic, sennder, and WorldRemit, and Horstmann led Project A's early pivot into defense and dual-use technology starting in 2022, becoming one of the earliest investors in Stark, a Berlin-based defense drone maker. In a striking full-circle move in 2026, Horstmann became Stark's CEO himself while remaining active in Project A's investment activities, illustrating the firm's genuinely hands-on, operator-embedded approach to venture building.",
    sources: [
      { label: "Resilience Media", url: "https://resiliencemedia.co/uwe-horstmann-takes-the-reins-as-stark-ceo/" },
      { label: "Project A — Uwe Horstmann", url: "https://techround.co.uk/interviews/meet-uwe-horstmann-project-a-ventures/" }
    ]
  },

  "antoine-papiernik": {
    name: "Antoine Papiernik",
    firm: "Sofinnova Partners",
    firmSlug: "sofinnova-partners",
    title: "Chairman & Managing Partner",
    joinedYear: 1997,
    education: [],
    previousExperience: [],
    investmentFocus: ["Biotech", "MedTech", "Digital Medicine", "Industrial Biotech"],
    notableInvestments: [
      { name: "Shockwave Medical", ticker: null },
      { name: "DBV Technologies", ticker: "DBVT" },
      { name: "ProQR Therapeutics", ticker: "PRQR" }
    ],
    boardSeats: [],
    ipoCount: 8,
    majorExits: 21,
    careerTimeline: [
      { year: "1997", event: "Joins Sofinnova Partners, the Paris-based life sciences investment firm that split from its US counterpart, Sofinnova Investments, that same year." },
      { year: "2024", event: "Shockwave Medical, a decade-long Sofinnova investment, is acquired by Johnson & Johnson." },
      { year: "2025", event: "Leads Sofinnova to raise €1.2 billion across its investment platform, pushing total AUM past €4 billion." }
    ],
    biography: "Antoine Papiernik has spent nearly three decades at Sofinnova Partners, the Paris-based life sciences investment firm founded in 1972, which split from its American counterpart Sofinnova Investments (now based in Menlo Park) in 1997 — the same year he joined. As Chairman and Managing Partner, Papiernik has helped guide Sofinnova through its evolution into a hands-on company builder across the entire life sciences value chain, from seed-stage incubation through later-stage growth investing in biopharma, medtech, industrial biotech, and digital medicine. Under his leadership, Sofinnova supported Shockwave Medical over more than a decade before Johnson & Johnson's acquisition of the cardiovascular device company, and the firm has backed more than 500 companies over its 50-plus year history, raising €1.2 billion in a single year in 2025 to push total assets under management past €4 billion.",
    sources: [
      { label: "Sofinnova Partners", url: "https://sofinnovapartners.com/" },
      { label: "Caplight — Sofinnova Partners", url: "https://www.caplight.com/investor/sofinnovapartners" }
    ]
  },

  "jamie-montgomery": {
    name: "Jamie Montgomery",
    firm: "March Capital",
    firmSlug: "march-capital",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2013,
    education: ["BA, Political Science, University of California, San Diego", "MA, Economics, Pembroke College, University of Cambridge"],
    previousExperience: [
      "Founder & CEO, Montgomery & Co. (boutique investment bank, 25+ years)",
      "Founder, The Montgomery Summit (2004, annual technology conference)"
    ],
    investmentFocus: ["Enterprise Software", "Cybersecurity", "AI", "Cloud Infrastructure"],
    notableInvestments: [
      { name: "CrowdStrike", ticker: "CRWD" },
      { name: "ThoughtSpot", ticker: null },
      { name: "Forter", ticker: null }
    ],
    boardSeats: ["ASAPP", "Essential AI", "Forter", "Overjet"],
    ipoCount: 3,
    majorExits: 6,
    careerTimeline: [
      { year: "2004", event: "Founds The Montgomery Summit, an annual technology conference now drawing more than 1,000 entrepreneurs and investors to Santa Monica." },
      { year: "2013", event: "Co-founds March Capital in September, moving into a small Santa Monica office with three fellow tech industry veterans." },
      { year: "2016", event: "Closes a $240 million debut fund, then the largest first-time venture fund launched in Southern California." },
      { year: "2019", event: "CrowdStrike, where Montgomery served as a board observer, completes its NASDAQ IPO." }
    ],
    biography: "Jamie Montgomery spent more than 25 years as founder and CEO of Montgomery & Co., a boutique investment bank that financed hundreds of leading technology companies, before pivoting to venture capital in 2013 to co-found March Capital with three fellow industry veterans. That banking network, combined with The Montgomery Summit, an annual technology conference Montgomery founded in 2004 that now draws more than 1,000 global entrepreneurs and investors to Santa Monica, gave March Capital an unusually deep relationship base from day one. The firm centered its thesis on enterprise, cybersecurity, and AI investing, playing a key role in CrowdStrike's growth as a private company as a board observer before its 2019 IPO, and Montgomery now serves on the boards of ASAPP, Essential AI, Forter, and Overjet, with March Capital managing more than $1 billion across four funds.",
    sources: [
      { label: "March Capital — Jamie Montgomery", url: "https://marchcp.com/team_member/jamie-montgomery/" },
      { label: "March Capital — About", url: "https://marchcp.com/about/" }
    ]
  },

  "daniel-petre": {
    name: "Daniel Petre",
    firm: "AirTree Ventures",
    firmSlug: "airtree-ventures",
    title: "Co-Founder & Partner",
    joinedYear: 2014,
    education: [],
    previousExperience: [
      "Vice President, Microsoft (Worldwide Information Products Group)"
    ],
    investmentFocus: ["Fintech", "Consumer", "Enterprise Software", "Climate Tech"],
    notableInvestments: [
      { name: "Canva", ticker: null },
      { name: "Airwallex", ticker: null },
      { name: "Linktree", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 3,
    careerTimeline: [
      { year: "1990s", event: "Serves as a Vice President at Microsoft, becoming one of the most senior Australians in the company's global leadership." },
      { year: "2014", event: "Co-founds AirTree Ventures with Craig Blair in Sydney, betting Australian and New Zealand founders could build globally competitive technology companies." },
      { year: "2018", event: "Leads an early investment in Canva, backing the design platform years before it became a global unicorn." },
      { year: "2026", event: "AirTree's portfolio surpasses 125 companies, including eight valued above $1 billion." }
    ],
    biography: "Daniel Petre rose to Vice President at Microsoft during its global expansion before returning to Australia and co-founding AirTree Ventures in 2014 with Craig Blair, built on the conviction that Australian and New Zealand founders could build genuinely world-class technology companies rather than regional also-rans. That early, often pre-product and pre-revenue investing philosophy produced early stakes in Canva, Airwallex, Linktree, and Employment Hero, and AirTree has since evolved from a traditional early-stage fund into a network-powered platform offering talent networks, executive forums, and peer communities to portfolio founders. The firm's more than 125 investments have collectively created over 19,000 jobs, with eight companies reaching billion-dollar valuations, cementing AirTree's position as one of Australia's most influential venture capital firms.",
    sources: [
      { label: "AirTree Ventures", url: "https://www.airtree.vc" },
      { label: "StartupIntros — AirTree Ventures", url: "https://startupintros.com/orgs/airtree-ventures" }
    ]
  },
  "peter-thiel": {
    name: "Peter Thiel",
    firm: "Founders Fund",
    firmSlug: "founders-fund",
    title: "Co-Founder & Partner",
    joinedYear: 2005,
    education: ["B.A. Philosophy, Stanford University (1989)", "J.D., Stanford Law School (1992)"],
    previousExperience: [
      "Co-Founder & CEO, PayPal (1998–2002) — IPO 2002, acquired by eBay for $1.5B",
      "Founder, Clarium Capital Management (2002)",
      "Co-Founder & Chairman, Palantir Technologies (2003) — IPO 2020"
    ],
    investmentFocus: ["Aerospace", "Defense Tech", "Hard Tech", "Fintech"],
    notableInvestments: [
      { name: "Facebook", ticker: "META" },
      { name: "SpaceX", ticker: "SPCX" },
      { name: "Palantir", ticker: "PLTR" },
      { name: "LinkedIn", ticker: null },
      { name: "Airbnb", ticker: "ABNB" },
      { name: "Stripe", ticker: null }
    ],
    boardSeats: ["Palantir (Chairman)"],
    ipoCount: 3,
    majorExits: 1,
    careerTimeline: [
      { year: "1998", event: "Co-founds PayPal, serving as CEO and chairman." },
      { year: "2002", event: "PayPal goes public, then is acquired by eBay for $1.5 billion months later." },
      { year: "2003", event: "Co-founds Palantir Technologies, serving as chairman." },
      { year: "2004", event: "Makes the first outside investment in Facebook." },
      { year: "2005", event: "Co-founds Founders Fund with fellow PayPal alumni Ken Howery and Luke Nosek." },
      { year: "2008", event: "Founders Fund becomes an early investor in SpaceX." },
      { year: "2020", event: "Palantir goes public on the NYSE via direct listing." }
    ],
    biography: "Peter Thiel co-founded PayPal and led it through its 2002 IPO and subsequent $1.5 billion acquisition by eBay, then became Facebook's first outside investor in 2004 — a bet that returned enormously when the company went public in 2012. In 2005, alongside fellow PayPal alumni Ken Howery and Luke Nosek, he co-founded Founders Fund on a deliberately contrarian philosophy: back ambitious, technically difficult companies other investors pass on. That thesis led the firm to become the first institutional investor in both SpaceX and Palantir, the data-analytics company Thiel co-founded and still chairs. Palantir went public in 2020; SpaceX followed in 2026.",
    sources: [
      { label: "Founders Fund — Peter Thiel", url: "https://foundersfund.com/team/peter-thiel/" },
      { label: "Britannica", url: "https://www.britannica.com/money/Peter-Thiel" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Peter_Thiel" }
    ]
  },
  "bruce-booth": {
    name: "Bruce Booth",
    firm: "Atlas Venture",
    firmSlug: "atlas-venture",
    title: "Partner",
    joinedYear: 2005,
    education: ["BS, Biochemistry (summa cum laude), Penn State University", "DPhil, Molecular Immunology, University of Oxford (British Marshall Scholar)"],
    previousExperience: [
      "Consultant, McKinsey & Company (pharmaceutical & biotech R&D productivity, portfolio management)",
      "Investor, Caxton Health Holdings"
    ],
    investmentFocus: ["Biotechnology", "Drug Discovery", "Therapeutics"],
    notableInvestments: [
      { name: "Kymera Therapeutics", ticker: "KYMR" },
      { name: "Nimbus Therapeutics", ticker: null },
      { name: "AvroBio", ticker: "AVRO" }
    ],
    boardSeats: ["Kymera Therapeutics (Chairman)", "Hotspot Therapeutics (Chairman)", "AvroBio (Chairman)"],
    ipoCount: 6,
    majorExits: 12,
    careerTimeline: [
      { year: "1999", event: "Earns a DPhil in molecular immunology from Oxford University as a British Marshall Scholar, studying HIV and tumor immune response." },
      { year: "2000s", event: "Works as a consultant at McKinsey & Company and an investor at Caxton Health Holdings before joining venture capital." },
      { year: "2005", event: "Joins Atlas Venture as a Partner, focusing on capital-efficient models for drug discovery." },
      { year: "2009", event: "Co-founds and becomes founding CEO of Nimbus Therapeutics." },
      { year: "2022", event: "Nimbus Therapeutics sells its TYK2 inhibitor program to Takeda for a $4 billion upfront payment in December." },
      { year: "2025", event: "Vigil Neuroscience, a company he served on the board of, is acquired by Sanofi." }
    ],
    biography: "Bruce Booth studied biochemistry at Penn State before earning a DPhil in molecular immunology from Oxford as a British Marshall Scholar, then worked as a McKinsey consultant advising pharmaceutical and biotech clients on R&D productivity before joining Atlas Venture in 2005. He has since co-founded and served as founding CEO of Kymera Therapeutics and Nimbus Therapeutics, the latter selling its TYK2 inhibitor program to Takeda for a $4 billion upfront payment in 2022 — one of biotech venture's largest single-asset licensing deals. Booth has chaired numerous Atlas portfolio companies through IPO and acquisition, including AvroBio's NASDAQ listing and Vigil Neuroscience's acquisition by Sanofi, and has become one of biotech venture's most influential public voices through his LifeSciVC blog, syndicated on Forbes since 2011, where he publishes widely-read annual predictions and analysis on the biotech funding landscape.",
    sources: [
      { label: "Atlas Venture — Bruce Booth", url: "https://atlasventure.com/team/bruce-booth-dphil/" },
      { label: "Penn State University", url: "https://www.psu.edu/news/academics/story/bruce-booth-honored-penn-states-outstanding-science-alumni-award" }
    ]
  },
  "josh-stein": {
    name: "Josh Stein",
    firm: "Threshold Ventures",
    firmSlug: "threshold-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2019,
    education: ["BA, Dartmouth College", "MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "VP, Telephia (strategic analysis for the nation's largest wireless carrier)",
      "Co-Founder & Chief Strategy Officer, ViaFone (NYSE: SY)",
      "Consultant, Boston Consulting Group",
      "Product Manager, Microsoft",
      "Partner, Draper Fisher Jurvetson (2004-2019)"
    ],
    investmentFocus: ["Enterprise Software", "Developer Tools", "Fintech", "Healthcare"],
    notableInvestments: [
      { name: "Box", ticker: "BOX" },
      { name: "Twilio", ticker: "TWLO" },
      { name: "Doximity", ticker: "DOCS" }
    ],
    boardSeats: ["LaunchDarkly", "Talkdesk", "Databook", "Sanity"],
    ipoCount: 4,
    majorExits: 8,
    careerTimeline: [
      { year: "2000", event: "Co-founds ViaFone, a wireless enterprise applications provider, later acquired." },
      { year: "2004", event: "Joins Draper Fisher Jurvetson (DFJ) as a partner, after earlier roles at Microsoft, BCG, and Telephia." },
      { year: "2013", event: "Named to the Forbes Midas List." },
      { year: "2015", event: "Named Deloitte VC of the Year." },
      { year: "2019", event: "Co-founds Threshold Ventures with Emily Melton, rebranding from DFJ." }
    ],
    biography: "Josh Stein built a real operating background as co-founder and Chief Strategy Officer of ViaFone before joining Draper Fisher Jurvetson in 2004, where he spent 15 years backing enterprise and consumer technology companies. He led Box's first institutional investment and sat on its board through its NYSE IPO, and backed Redfin, Twilio, and Doximity in their early rounds. In 2019, Stein and longtime colleague Emily Melton rebranded DFJ as Threshold Ventures, continuing the firm's focus on developer tools, enterprise software, and fintech while emphasizing hands-on founder mentorship over capital alone. He currently holds board seats at LaunchDarkly, Talkdesk, and several other portfolio companies, and was named to the Forbes Midas List and named Deloitte's VC of the Year during his DFJ tenure.",
    sources: [
      { label: "Threshold — Josh Stein", url: "https://threshold.vc/team/josh-stein/" },
      { label: "Wikipedia — Josh B. Stein", url: "https://en.wikipedia.org/wiki/Josh_B._Stein" }
    ]
  },

  "emily-melton": {
    name: "Emily Melton",
    firm: "Threshold Ventures",
    firmSlug: "threshold-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2019,
    education: ["BA (Honors), Political Philosophy, Stanford University", "MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "Partner, Mayfield Fund",
      "Principal & Partner, Draper Fisher Jurvetson (2012-2019)"
    ],
    investmentFocus: ["Consumer Technology", "Digital Health", "Enterprise Software"],
    notableInvestments: [
      { name: "Redfin", ticker: "RDFN" },
      { name: "Livongo", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 3,
    careerTimeline: [
      { year: "2012", event: "Joins Draper Fisher Jurvetson (DFJ) as Principal, after an earlier stint at Mayfield Fund." },
      { year: "2018", event: "Co-founds All Raise, a nonprofit expanding access for women in venture capital and startups." },
      { year: "2019", event: "Co-founds Threshold Ventures with Josh Stein, rebranding from DFJ." },
      { year: "2020", event: "Livongo, an early investment, is acquired by Teladoc Health for $18.5 billion." },
      { year: "2022", event: "Elected Chair of the National Venture Capital Association board of directors for the 2022-23 term." }
    ],
    biography: "Emily Melton spent nearly a decade as a Draper Fisher Jurvetson venture partner, leading investments in digital health and consumer mobile startups including Redfin, before co-founding Threshold Ventures with Josh Stein in 2019 to continue backing what she calls founders who are genuine 'agents of change.' Her early conviction in Livongo, a patient-care platform for chronic conditions, culminated in Teladoc Health's $18.5 billion acquisition of the company in 2020 — one of Threshold's largest realized outcomes. Melton co-founded All Raise in 2018, a nonprofit dedicated to improving access to venture capital and startup leadership for women, and was elected Chair of the National Venture Capital Association's board of directors for the 2022-23 term.",
    sources: [
      { label: "Threshold — Emily Melton", url: "https://threshold.vc/team/emily-melton/" },
      { label: "Crunchbase News", url: "https://news.crunchbase.com/venture/threshold-formerly-known-as-dfj-targets-250m-for-latest-venture-fund/" }
    ]
  },
  "max-fowinkel": {
    name: "Max Fowinkel",
    firm: "Warburg Pincus",
    firmSlug: "warburg-pincus",
    title: "Managing Director, Head of European Technology & Telecommunications",
    joinedYear: 2007,
    education: ["Diploma, Mechanical Engineering & Business Administration, Technische Universität Berlin", "MBA, Harvard Business School"],
    previousExperience: [
      "Consultant, McKinsey & Company (financial services, automotive & technology clients across Europe)"
    ],
    investmentFocus: ["Enterprise Software", "Telecommunications", "Fintech"],
    notableInvestments: [
      { name: "Blue Yonder", ticker: null },
      { name: "Ionos", ticker: null }
    ],
    boardSeats: ["Ionos", "Community Fibre", "Infoniqa"],
    ipoCount: 0,
    majorExits: 3,
    careerTimeline: [
      { year: "2000s", event: "Works as a consultant at McKinsey & Company, advising European financial services, automotive, and technology clients." },
      { year: "2007", event: "Joins Warburg Pincus as Managing Director, based initially in London." },
      { year: "2019", event: "Relocates to Berlin, continuing to lead the firm's European Technology and Telecommunications group." },
      { year: "2021", event: "Blue Yonder, a supply-chain AI company he helped scale, is acquired by Panasonic for approximately $8.5 billion." }
    ],
    biography: "Max Fowinkel combines a genuinely technical foundation — a dual degree in mechanical engineering and business administration from TU Berlin — with a Harvard MBA and consulting experience at McKinsey, before joining Warburg Pincus in 2007 to lead its European Technology and Telecommunications group. He has led investments spanning enterprise software, telecommunications, and fintech across Europe, including PSI Software, Ionos, Network International, and Community Fibre, and helped scale Blue Yonder, a supply-chain AI company, through to its roughly $8.5 billion acquisition by Panasonic in 2021. Fowinkel remains an active voice on European technology investment, speaking at conferences including Handelsblatt's Tech summit on the intersection of industry, investment, and policy.",
    sources: [
      { label: "Warburg Pincus — Max Fowinkel", url: "https://warburgpincus.com/team/max-fowinkel/" },
      { label: "Mergr", url: "https://mergr.com/investor/warburg-pincus/team/max-fowinkel" }
    ]
  },
"elizabeth-yin": {
    name: "Elizabeth Yin",
    firm: "Hustle Fund",
    firmSlug: "hustle-fund",
    title: "Co-Founder & General Partner",
    joinedYear: 2017,
    education: ["BS, Electrical Engineering, Stanford University", "MBA, MIT Sloan School of Management"],
    previousExperience: [
      "Programmer (teenage, dot-com era)",
      "Marketing Engineer, National Instruments Japan",
      "Product Marketing Manager, Google (2007-2008, social APIs including OpenSocial)",
      "Co-Founder, LaunchBit (B2B ad network)",
      "Partner, 500 Startups (2014-2017, ran the Mountain View accelerator)"
    ],
    investmentFocus: ["Fintech", "Crypto", "Developer Tools", "Diversity"],
    notableInvestments: [
      { name: "Nova Credit", ticker: null },
      { name: "HoneyBook", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2007", event: "Joins Google as a Product Marketing Manager, leading marketing for social APIs including OpenSocial." },
      { year: "2008", event: "Leaves Google to co-found LaunchBit, a B2B ad network." },
      { year: "2014", event: "Joins 500 Startups as a partner, eventually running its Mountain View accelerator and writing more than 200 investment checks." },
      { year: "2017", event: "Resigns from 500 Startups in July, citing concerns about the firm's handling of harassment allegations against co-founder Dave McClure; co-founds Hustle Fund with Eric Bahn and Shiyan Koh." },
      { year: "2018", event: "Closes Hustle Fund's $11.5 million debut fund in September." }
    ],
    biography: "Elizabeth Yin started programming as a teenager during the dot-com boom, then worked as a Marketing Engineer at National Instruments Japan and a Product Marketing Manager at Google before co-founding LaunchBit, a B2B ad network. She joined 500 Startups in 2014, eventually running its Mountain View accelerator and writing more than 200 investment checks, before resigning in July 2017 over concerns about the firm's handling of harassment allegations against co-founder Dave McClure. She co-founded Hustle Fund shortly after with longtime friends Eric Bahn and Shiyan Koh, building a pre-seed fund specifically designed to back founders earlier than most firms will — often pre-revenue, sometimes pre-product — with a mission to democratize wealth creation through fast, founder-friendly investment terms. Yin is the author of 'Democratizing Knowledge: How to Build a Startup, Raise Money, Run a VC Firm, and Everything in Between.'",
    sources: [
      { label: "Seedlist — Elizabeth Yin", url: "https://seedlist.com/investors/elizabeth-yin.html" },
      { label: "Wikipedia — Hustle Fund", url: "https://en.wikipedia.org/wiki/Hustle_Fund" }
    ]
  },
"hjalmar-winbladh": {
    name: "Hjalmar Winbladh",
    firm: "EQT Ventures",
    firmSlug: "eqt-ventures",
    title: "Founding Partner (2016-2020)",
    joinedYear: 2016,
    education: ["Stockholm University"],
    previousExperience: [
      "Founder, Sendit (described as the world's first mobile internet company, acquired by Microsoft in 1999)",
      "Founder, Rebtel",
      "Founder, Wrapp",
      "Serial founder of seven companies"
    ],
    investmentFocus: ["Marketplaces", "Consumer Internet", "AI"],
    notableInvestments: [
      { name: "Wolt", ticker: null },
      { name: "Small Giant Games", ticker: null }
    ],
    boardSeats: ["Wolt (former)", "Banking Circle (former)", "Peltarion (former)"],
    ipoCount: 0,
    majorExits: 3,
    careerTimeline: [
      { year: "1999", event: "Sendit, a mobile internet company he founded, is acquired by Microsoft." },
      { year: "2016", event: "Joins EQT to help establish its venture capital arm, EQT Ventures, at a time Europe's venture ecosystem was still dwarfed by the US." },
      { year: "2016", event: "Leads EQT Ventures' investment in Wolt, backing founder Miki Kuusi's combination of grit, product focus, and operational discipline." },
      { year: "2020", event: "Leaves EQT Ventures in July after nearly a decade with the firm, remaining on the boards of Wolt, Banking Circle, and Peltarion." },
      { year: "2021", event: "Wolt is acquired by DoorDash for $8.1 billion, delivering a reported 200x multiple on EQT Ventures' original 2016 investment." }
    ],
    biography: "Hjalmar Winbladh is a seven-time Swedish entrepreneur, having built and managed global technology companies including Sendit — described as the world's first mobile internet company — before Microsoft acquired it in 1999. He joined EQT in 2016 to help establish its venture arm at a moment Europe's venture capital ecosystem remained far smaller than Silicon Valley's, and personally led EQT Ventures' early investment in Wolt, recognizing founder Miki Kuusi's rare combination of grit and product discipline. That conviction paid off spectacularly: Sifted reported DoorDash's $8.1 billion acquisition of Wolt in 2021 delivered a roughly 200x return multiple on EQT Ventures' original stake. Winbladh left EQT Ventures in 2020 to return to his entrepreneurial roots, remaining on the boards of several former portfolio companies.",
    sources: [
      { label: "TechCrunch", url: "https://techcrunch.com/2020/07/09/founding-partner-hjalmar-winbladh-is-leaving-eqt-ventures/" },
      { label: "Wikipedia — EQT Ventures", url: "https://en.wikipedia.org/wiki/EQT_Ventures" }
    ]
  },

  "ed-bussey": {
    name: "Ed Bussey",
    firm: "Oxford Science Enterprises",
    firmSlug: "oxford-science-enterprises",
    title: "Chief Executive Officer",
    joinedYear: 2023,
    education: ["BA, Natural Sciences, Emmanuel College, University of Cambridge"],
    previousExperience: [
      "Officer, Royal Navy",
      "National Security Roles, UK Diplomatic Service",
      "Founder & Global Marketing Director, figleaves.com (2000, named UK Internet Retailer of the Year 2004, sold to N Brown Plc, 2010)",
      "Founder & CEO, Quill (multi-language e-commerce content platform, sold to Jellyfish, 2020)"
    ],
    investmentFocus: ["Deep Tech Commercialization", "Biotech", "Advanced Materials"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "1987", event: "Begins studying Natural Sciences at Emmanuel College, Cambridge, then serves in the Royal Navy and the UK Diplomatic Service in national security roles." },
      { year: "2000", event: "Founds figleaves.com, later named UK Internet Retailer of the Year in 2004, growing it to more than a million customers across 66 countries before its 2010 sale to N Brown Plc." },
      { year: "2010s", event: "Founds Quill, a multi-language e-commerce content platform for partners including Google and eBay, selling it to Jellyfish in 2020 after a decade of building." },
      { year: "2023", event: "Appointed CEO of Oxford Science Enterprises in September, alongside Jack Edmondson as the newly created CIO." }
    ],
    biography: "Ed Bussey began his career in the Royal Navy and UK national security roles before becoming a genuine three-time successful founder — figleaves.com, named UK Internet Retailer of the Year in 2004 and sold to N Brown Plc in 2010, and Quill, a multi-language e-commerce content platform he built over a decade before selling to Jellyfish in 2020. That operating track record, plus his Cambridge Natural Sciences background, led Oxford Science Enterprises to appoint him CEO in September 2023, alongside Jack Edmondson as the firm's newly created Chief Investment Officer, following a period of leadership turnover in the fund's early years. Bussey now leads OSE's endowment-style, evergreen investment model, translating University of Oxford scientific research into transformational companies across a portfolio of more than 125 spinouts with a combined value exceeding £1.1 billion.",
    sources: [
      { label: "Wikipedia — Ed Bussey", url: "https://en.wikipedia.org/wiki/Ed_Bussey" },
      { label: "GlobeNewswire — CEO Appointment", url: "https://www.globenewswire.com/news-release/2023/08/31/2734925/0/en/Oxford-Science-Enterprises-Appoints-Ed-Bussey-as-Chief-Executive-Officer.html" }
    ]
  },

  "eric-collins": {
    name: "Eric D. Collins",
    firm: "Impact X Capital",
    firmSlug: "impact-x-capital",
    title: "Co-Founder & CEO",
    joinedYear: 2018,
    education: ["Harvard Law School"],
    previousExperience: [
      "Executive, Tegic (AOL subsidiary)",
      "Executive, Nuance Communications / Microsoft",
      "COO, Mobile Posse / Digital Turbine (2010-2013)",
      "Chief Revenue & Distribution Officer, SwiftKey / Microsoft (2014-2016)",
      "COO, Touch Surgery / Medtronic (2016-2018)"
    ],
    investmentFocus: ["Fintech", "Consumer", "ESG", "Diversity"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2002", event: "Enters the tech industry, beginning roles at Tegic (an AOL subsidiary) and later Nuance Communications." },
      { year: "2014", event: "Becomes Chief Revenue and Distribution Officer at SwiftKey, a predictive text firm later acquired by Microsoft, a role that brings him to London." },
      { year: "2016", event: "Becomes COO of Touch Surgery, later acquired by Medtronic." },
      { year: "2018", event: "Co-founds Impact X Capital Partners with Paula Groves and other Black European and US entrepreneurs and investors, backed by founding members including Ursula Burns and Lenny Henry." },
      { year: "2024", event: "Impact X announces a £100 million target for its second fund, IX Global I, backed by Bank of America and the Visa Foundation." }
    ],
    biography: "Eric D. Collins built a two-decade technology career spanning Tegic, Nuance Communications, Mobile Posse, SwiftKey, and Touch Surgery, holding COO and Chief Revenue Officer roles before co-founding Impact X Capital with Paula Groves in 2018. Motivated by the statistic that less than 1% of venture funding reaches Black entrepreneurs and less than 4% reaches women-led teams, Collins built Impact X as a genuinely double-bottom-line fund — pursuing both financial returns and structural change — backing underrepresented founders in fintech, healthtech, and creative media across the UK, Europe, and the US. He served on President Obama's Small Business Administration Council on Underserved Communities, authored the book 'We Don't Need Permission: How Black Business Can Change Our World,' and continues to lead Impact X as CEO while championing minority entrepreneurship across transatlantic networks.",
    sources: [
      { label: "Wikipedia — Eric Collins (investor)", url: "https://en.wikipedia.org/wiki/Eric_Collins_(investor)" },
      { label: "Wikipedia — Impact X", url: "https://en.wikipedia.org/wiki/Impact_X" }
    ]
  },

  "amir-gal-or": {
    name: "Amir Gal-Or",
    firm: "Infinity Group",
    firmSlug: "infinity-group",
    title: "Co-Founder & Managing Partner",
    joinedYear: 1993,
    education: ["MBA, Tel Aviv University", "Venture Capital & Private Equity Investments Program, Harvard University"],
    previousExperience: [
      "Pilot, Israeli Air Force (including its acrobatic team)",
      "Founder, TAN (high-grade refractory ceramic oxides)",
      "Co-Founder, joint venture with Paz Oil Company",
      "CEO, Israel's Entrepreneurship Development Center (investment arm of the Ministry of Economy)"
    ],
    investmentFocus: ["Cybersecurity", "IT", "Healthcare"],
    notableInvestments: [
      { name: "Shellcase", ticker: null },
      { name: "Nanomotion", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 10,
    majorExits: 75,
    careerTimeline: [
      { year: "1993", event: "Co-founds Infinity Group in Tel Aviv." },
      { year: "2004", event: "Establishes CSVC, the first onshore limited partnership venture capital fund in China, pioneering Israel-China cross-border investing." },
      { year: "2006", event: "Launches a $300 million China-focused fund." },
      { year: "2010", event: "Awarded France's Chevalier of the Legion of Honor." },
      { year: "2017", event: "Awarded the Chinese Government's Friendship Award for contributions to China-Israel business relations." }
    ],
    biography: "Amir Gal-Or served as a pilot in the Israeli Air Force's acrobatic team before founding a ceramics company and a joint venture with Paz Oil Company, then leading Israel's Entrepreneurship Development Center within the Ministry of Economy. He co-founded Infinity Group in 1993, and pioneered Israel-China venture investing in 2004 by establishing CSVC, the first onshore limited partnership venture fund in China — a genuinely first-mover position that predates nearly all Western institutional interest in Chinese venture capital. That two-decade head start produced real exits including Shellcase's sale to Tessera and Nanomotion's sale to Johnson Electric, and Gal-Or has grown Infinity into a $2 billion cross-border platform with 250-plus investments and 75 exits, earning France's Legion of Honor and China's Government Friendship Award for his role in Sino-Israeli business relations.",
    sources: [
      { label: "Wikipedia — Amir Gal-Or", url: "https://en.wikipedia.org/wiki/Amir_Gal-Or" },
      { label: "World Economic Forum", url: "https://www.weforum.org/people/amir-gal-or/" }
    ]
  },

  "james-tan": {
    name: "James Tan",
    firm: "Quest Ventures",
    firmSlug: "quest-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2011,
    education: ["MBA, Harvard Business School"],
    previousExperience: [
      "Partner, Accel Kuala Lumpur",
      "Co-Founder, 55tuan (NASDAQ-listed)"
    ],
    investmentFocus: ["Marketplaces", "E-commerce", "Fintech"],
    notableInvestments: [
      { name: "Carousell", ticker: null },
      { name: "ShopBack", ticker: null },
      { name: "99.co", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "2000s", event: "Co-founds 55tuan, a group-buying platform that lists on NASDAQ, alongside future Quest co-founder Wang Yunming." },
      { year: "2011", event: "Co-founds Quest Ventures (originally QuestVC) with Wang Yunming in Beijing." },
      { year: "2013", event: "Leads Quest's Series A investment in Carousell." },
      { year: "2015", event: "Leads Quest's investment in ShopBack." }
    ],
    biography: "James Tan co-founded 55tuan, a NASDAQ-listed group-buying platform, before turning to venture capital and co-founding Quest Ventures in 2011 with fellow 55tuan co-founder Wang Yunming, initially based in Beijing before expanding across Southeast Asia. Tan personally led Quest's early Series A investment in Carousell, a Craigslist-style marketplace, helping scale it from a seed-stage app to a unicorn valuation, and has been described by Vulcan Post as an investor with the 'Midas touch' for his track record spotting regional marketplace winners. Under his leadership, Quest has become one of Southeast Asia's most active early-stage investors, with a portfolio spanning Carousell, ShopBack, and 99.co, positioning itself as the first institutional investor in many of the region's category-defining digital commerce platforms.",
    sources: [
      { label: "Wikipedia — Quest Ventures", url: "https://en.wikipedia.org/wiki/Quest_Ventures" }
    ]
  },

  "feng-deng": {
    name: "Feng Deng",
    firm: "Northern Light Venture Capital",
    firmSlug: "northern-light-venture-capital",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2005,
    education: ["BS & MS, Electrical Engineering, Tsinghua University", "MS, Computer Engineering, University of Southern California", "MBA, The Wharton School, University of Pennsylvania"],
    previousExperience: [
      "Co-Founder, NetScreen Technologies (IPO'd on NASDAQ in 2001, acquired by Juniper Networks for $4.2B in 2004)"
    ],
    investmentFocus: ["Enterprise SaaS", "Healthcare IT", "TMT", "Consumer"],
    notableInvestments: [
      { name: "Meituan", ticker: "3690.HK" },
      { name: "Aerohive Networks", ticker: null },
      { name: "GigaDevice", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 15,
    majorExits: 23,
    careerTimeline: [
      { year: "1990s", event: "Co-founds NetScreen Technologies, an enterprise IT security company." },
      { year: "2001", event: "Leads NetScreen's IPO on NASDAQ." },
      { year: "2004", event: "NetScreen is acquired by Juniper Networks for $4.2 billion." },
      { year: "2005", event: "Co-founds Northern Light Venture Capital with Yan Ke and Jeffrey Lee on January 1." },
      { year: "2018", event: "Meituan, an early Northern Light bet, completes its Hong Kong IPO." }
    ],
    biography: "Feng Deng holds a genuinely rare combination of degrees — dual Tsinghua engineering degrees, a USC master's in computer engineering, and a Wharton MBA — that he applied first as co-founder of NetScreen Technologies, an enterprise security company that completed a NASDAQ IPO in 2001 before Juniper Networks acquired it for $4.2 billion in 2004. He used those proceeds and that operating credibility to co-found Northern Light Venture Capital in 2005 with fellow NetScreen co-founder Yan Ke and Jeffrey Lee, building a cross-border US-China fund that has backed nearly 200 companies, including Meituan, Aerohive Networks, GigaDevice, and Tencent Music. Deng was named Ernst & Young Entrepreneur of the Year in 2002 and CRN Innovator of the Year in 2003, and Northern Light now manages more than $4.5 billion across US-dollar and RMB-denominated funds.",
    sources: [
      { label: "Wikipedia — Northern Light Venture Capital", url: "https://en.wikipedia.org/wiki/Northern_Light_Venture_Capital" },
      { label: "NLVC — Feng Deng", url: "https://www3.nlvc.com/en/team/feng-deng" }
    ]
  },

  "yi-cao": {
    name: "Yi Cao",
    firm: "Source Code Capital",
    firmSlug: "source-code-capital",
    title: "Founder & Managing Partner",
    joinedYear: 2014,
    education: ["Computer Science, Tsinghua University"],
    previousExperience: [
      "Vice President, Sequoia Capital China"
    ],
    investmentFocus: ["AI", "Robotics", "Internet & Consumer", "Healthcare"],
    notableInvestments: [
      { name: "ByteDance", ticker: null },
      { name: "Meituan", ticker: "3690.HK" },
      { name: "Li Auto", ticker: "LI" }
    ],
    boardSeats: [],
    ipoCount: 6,
    majorExits: 10,
    careerTimeline: [
      { year: "2010s", event: "Works as a Vice President at Sequoia Capital China, gaining early access to China's technology investing ecosystem." },
      { year: "2014", event: "Founds Source Code Capital in Beijing in the spring, making an early bet on ByteDance." },
      { year: "2016", event: "Launches 'Code Brain,' a monthly gathering connecting entrepreneurs to improve knowledge sharing and decision-making." },
      { year: "2018", event: "Meituan completes its Hong Kong IPO." },
      { year: "2019", event: "Named to the Forbes Midas List in April." }
    ],
    biography: "Yi Cao studied computer science at Tsinghua University and worked as a Vice President at Sequoia Capital China before founding Source Code Capital in the spring of 2014, betting early on what became one of the most consequential Chinese technology investments of the decade: ByteDance, the parent company of TikTok. Cao built Source Code around a specific 'Big 3' investment thesis — Internet+, AI+, and Global+ — and a founder-first support model including the Code Class entrepreneur community and Code Brain knowledge-sharing sessions, backing more than 300 companies including Meituan, KE Holdings, Li Auto, and RELX Technology. He has been repeatedly named to the Forbes Midas List, and Source Code now manages approximately $7 billion across dual-currency funds.",
    sources: [
      { label: "Wikipedia — Source Code Capital", url: "https://en.wikipedia.org/wiki/Source_Code_Capital" },
      { label: "Source Code Capital — About", url: "https://sourcecodecap.com/about-en/" }
    ]
  },

  "yh-do": {
    name: "Y.H. Do",
    firm: "STIC Investments",
    firmSlug: "stic-investments",
    title: "Founder & Chairman",
    joinedYear: 1999,
    education: ["MBA, KAIST"],
    previousExperience: [
      "Telecom Executive, SK Telecom"
    ],
    investmentFocus: ["ICT", "Healthcare", "Materials"],
    notableInvestments: [
      { name: "Jeil Hydraulics", ticker: null },
      { name: "Golfzon", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 3,
    careerTimeline: [
      { year: "1990s", event: "Builds a career as a telecom executive at SK Telecom before moving into private investing." },
      { year: "1999", event: "Founds STIC (originally SoftBank Telecom Investment Company) in Seoul in July." },
      { year: "2012", event: "Sells Jeil Hydraulics, in which STIC held a 21% stake, to Eaton Corporation for approximately $29 million." },
      { year: "2014", event: "Rebrands from STIC Partners to STIC Investments, moving to an open-funds model." },
      { year: "2024", event: "STIC surpasses KRW 7.9 trillion (approximately $6.7 billion) in assets under management." }
    ],
    biography: "Y.H. Do built his early career as a telecom executive at SK Telecom before founding STIC in Seoul in 1999, originally as SoftBank Telecom Investment Company, growing it into one of South Korea's largest private equity and growth investment platforms. Under Do's leadership, STIC has combined late-stage growth equity and structured financing across ICT, healthcare, and materials, backing real outcomes including the sale of Jeil Hydraulics to Eaton Corporation and an exit from Golfzon, while also managing public REIT and CIM funds. The firm rebranded from STIC Partners to STIC Investments in 2014, reflecting a shift toward an open-funds model, and now manages approximately KRW 7.9 trillion (roughly $6.7 billion) across seven offices spanning Seoul, Busan, Hong Kong, Ho Chi Minh City, Shanghai, and Taipei.",
    sources: [
      { label: "Wikipedia — STIC Investments", url: "https://en.wikipedia.org/wiki/STIC_Investments" }
    ]
  },
  "eric-bahn": {
    name: "Eric Bahn",
    firm: "Hustle Fund",
    firmSlug: "hustle-fund",
    title: "Co-Founder & General Partner",
    joinedYear: 2017,
    education: ["MBA, Harvard Business School"],
    previousExperience: [
      "Early Employee, Ticketfly",
      "Founder, Boardlist"
    ],
    investmentFocus: ["Enterprise Software", "Fintech", "Crypto", "Diversity"],
    notableInvestments: [
      { name: "HoneyBook", ticker: null },
      { name: "Nova Credit", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2010s", event: "Works as an early employee at Ticketfly, then founds Boardlist, before earning an MBA at Harvard." },
      { year: "2017", event: "Co-founds Hustle Fund with longtime friend Elizabeth Yin and Shiyan Koh in mid-2017." },
      { year: "2018", event: "Closes Hustle Fund's $11.5 million debut fund." },
      { year: "2020", event: "Launches Angel Squad, a program letting individuals invest as little as $1,000 in startups from Hustle Fund's pipeline." }
    ],
    biography: "Eric Bahn built real operating experience as an early employee at Ticketfly and as founder of Boardlist before co-founding Hustle Fund in 2017 with his longtime friend and Stanford-era colleague Elizabeth Yin, alongside Shiyan Koh. Bahn combines that founder background with a genuinely quantitative, high-volume investing approach — Hustle Fund invests in roughly 250 companies per fund, a strategy some critics call 'spray and pray' but which Bahn defends as the right response to the extreme uncertainty and thin data available at the pre-seed stage. He has helped build Hustle Fund's Angel Squad program, which democratizes access to startup investing by letting individuals write checks as small as $1,000 into deals from the firm's pipeline, and continues to champion backing solo founders and underrepresented entrepreneurs that traditional VC wisdom often passes over.",
    sources: [
      { label: "CB Insights — Hustle Fund", url: "https://www.cbinsights.com/investor/hustle-fund" },
      { label: "Ignite VC Podcast", url: "https://teamignite.vc/blog/ignite-vc-how-hustle-fund-backs-founders" }
    ]
  },

  "lee-fixel": {
    name: "Lee Fixel",
    firm: "Addition",
    firmSlug: "addition",
    title: "Founder",
    joinedYear: 2020,
    education: ["BS, Business Administration, Finance & Accounting, Olin Business School, Washington University in St. Louis"],
    previousExperience: [
      "Head of Private Equity, Tiger Global Management (2006-2019)"
    ],
    investmentFocus: ["Fintech", "Consumer", "Enterprise Software", "AI"],
    notableInvestments: [
      { name: "dLocal", ticker: "DLO" },
      { name: "Stripe", ticker: null },
      { name: "Peloton", ticker: "PTON" }
    ],
    boardSeats: ["Peloton (former)"],
    ipoCount: 6,
    majorExits: 10,
    careerTimeline: [
      { year: "2006", event: "Joins Tiger Global Management, eventually leading its private equity business and expanding its private investment arm with bets on Spotify and Uber." },
      { year: "2018", event: "Leads Tiger Global's investment in Flipkart, which sells a stake to Walmart for $3.8 billion in 2023 (a later, separate transaction)." },
      { year: "2019", event: "Announces his departure from Tiger Global in March, after 13 years, departing formally on June 30." },
      { year: "2020", event: "Founds Addition, raising $1.3 billion for its debut fund." },
      { year: "2021", event: "dLocal, an early Addition investment, completes its IPO at a $6 billion valuation — the firm's first major exit." }
    ],
    biography: "Lee Fixel spent 13 years at Tiger Global Management, rising to head its private equity business and building its global internet portfolio with early bets on Spotify, Uber, Facebook, and Flipkart, before leaving in 2019 to found his own firm. He launched Addition in 2020 with $1.3 billion in debut capital, operating as the firm's sole publicly known decision-maker to keep the investment process fast and streamlined. That approach produced dLocal's $6 billion IPO in 2021 — Addition's first major public exit — and Fixel has continued backing category-defining companies including Snyk, Chainalysis, Hugging Face, and Applied Intuition, growing Addition to more than $7 billion in assets under management across five funds. He has been repeatedly named to the Forbes Midas List and, with his wife Lauren, is among the largest donors to the Michael J. Fox Foundation for Parkinson's research.",
    sources: [
      { label: "Wikipedia — Lee Fixel", url: "https://en.wikipedia.org/wiki/Lee_Fixel" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/lee-fixel/" }
    ]
  },

  "alexander-galitsky": {
    name: "Alexander Galitsky",
    firm: "Almaz Capital",
    firmSlug: "almaz-capital",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2008,
    education: ["Moscow Institute of Electronic Technology"],
    previousExperience: [
      "Defense scientist, Soviet space industry",
      "Founder, ELVIS+ (1991, pioneered early Wi-Fi hardware in partnership with Sun Microsystems)",
      "Founder, four additional technology companies (TrustWorks Systems, EzWIM, ELVIS Telecom, NPC ELVIS)"
    ],
    investmentFocus: ["AI/ML", "IoT", "Cybersecurity", "Enterprise Software"],
    notableInvestments: [
      { name: "Yandex", ticker: null },
      { name: "Xometry", ticker: "XMTR" },
      { name: "Acumatica", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 5,
    careerTimeline: [
      { year: "1990", event: "Sun Microsystems co-founder Bill Joy visits the USSR looking for technical talent, beginning a partnership that leads Galitsky's team to beat Motorola on early Wi-Fi hardware development." },
      { year: "1991", event: "Founds ELVIS+ to commercialize Soviet-era technology in the West." },
      { year: "2004", event: "Helps establish CSVC, the first onshore limited partnership venture fund in China." },
      { year: "2008", event: "Founds Almaz Capital, backed by Cisco, EBRD, and IFC." },
      { year: "2014", event: "His life story becomes the basis for the film 'Startup.'" }
    ],
    biography: "Alexander Galitsky built his early career as a defense scientist in the Soviet space industry before founding ELVIS+ in 1991 to commercialize Soviet-era technology in the West, partnering with Sun Microsystems co-founder Bill Joy on early Wi-Fi hardware development that beat out competitors including Motorola. He went on to found four more technology companies before turning to venture capital, founding Almaz Capital in 2008 with backing from Cisco, EBRD, and IFC to bridge Silicon Valley and Central/Eastern European technology ecosystems. That bridge-building has produced real outcomes including Yandex's NASDAQ IPO, Xometry's NASDAQ IPO, QIK's acquisition by Skype, Sensity Systems' acquisition by Verizon, and Acumatica's sale to EQT, across more than $300 million invested through three funds. Galitsky's own path from Soviet scientist to Silicon Valley investor became the basis for the 2014 film 'Startup,' and he continues to serve as an advisor to the B612 Foundation, focused on planetary defense from asteroid impacts.",
    sources: [
      { label: "Wikipedia — Alexander Galitsky", url: "https://en.wikipedia.org/wiki/Alexander_Galitsky" },
      { label: "Almaz Capital", url: "https://www.webit.org/en/2014/alexander_galitsky.html" }
    ]
  },

  "david-blumberg": {
    name: "David J. Blumberg",
    firm: "Blumberg Capital",
    firmSlug: "blumberg-capital",
    title: "Founder & Managing Partner",
    joinedYear: 1991,
    education: ["AB, Government (cum laude), Harvard College", "MBA, Stanford Graduate School of Business & INSEAD"],
    previousExperience: [
      "Senior Executive (one of the first four), Check Point Software Technologies",
      "International Investments, T. Rowe Price",
      "International Investments, Apax Partners",
      "International Investments, Adler & Co. Venture Capital",
      "International Investments, Bronfman Family Office (Claridge)"
    ],
    investmentFocus: ["AI", "Big Data", "Fintech", "Cybersecurity"],
    notableInvestments: [
      { name: "DoubleVerify", ticker: "DV" },
      { name: "Nutanix", ticker: "NTNX" },
      { name: "Braze", ticker: "BRZE" }
    ],
    boardSeats: [],
    ipoCount: 7,
    majorExits: 58,
    careerTimeline: [
      { year: "1980s", event: "Manages international investments at T. Rowe Price, Apax Partners, Adler & Co., and the Bronfman Family Office, and serves as one of Check Point Software's first four senior executives." },
      { year: "1991", event: "Founds Blumberg Capital in San Francisco." },
      { year: "2008", event: "Leads an early investment in DoubleVerify." },
      { year: "2021", event: "DoubleVerify completes its NYSE IPO in April, raising approximately $400 million at a valuation exceeding $3 billion, a reported 98x return for Blumberg; closes a $225 million Fund V, oversubscribed against a $200 million target." }
    ],
    biography: "David Blumberg built a rare combination of operating and international investing experience before founding his own firm — one of the first four senior executives at Check Point Software, followed by international investment roles at T. Rowe Price, Apax Partners, Adler & Co., and the Bronfman Family Office. He founded Blumberg Capital in 1991, building it into an early-stage investor specializing in AI, big data, fintech, and cybersecurity, with a hands-on approach as active board members and advisors from seed through exit. That approach has produced five unicorns and seven IPOs across the firm's history, including DoubleVerify's 2021 NYSE listing, which delivered a reported 98x return after Blumberg's early 2008 investment. Blumberg Capital now manages more than $750 million with offices spanning San Francisco, Tel Aviv, Miami, and New York.",
    sources: [
      { label: "Blumberg Capital — David Blumberg", url: "https://blumbergcapital.com/team/david-blumberg/" },
      { label: "TechCrunch", url: "https://techcrunch.com/2021/09/17/longtime-vc-and-happy-miami-resident-david-blumberg-has-raised-a-new-225-million-fund/" }
    ]
  },

  "bryan-roberts": {
    name: "Bryan Roberts",
    firm: "Venrock",
    firmSlug: "venrock",
    title: "Partner",
    joinedYear: 2000,
    education: ["BA, Dartmouth College", "PhD, Chemistry & Chemical Biology, Harvard University"],
    previousExperience: [],
    investmentFocus: ["Healthcare IT", "Digital Health", "Biotechnology"],
    notableInvestments: [
      { name: "athenahealth", ticker: null },
      { name: "Illumina", ticker: "ILMN" },
      { name: "Castlight Health", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 6,
    careerTimeline: [
      { year: "2000", event: "Joins Venrock as a partner, immediately after earning his PhD in Chemistry & Chemical Biology from Harvard." },
      { year: "2007", event: "Leads a partner-driven restructuring of Venrock, winnowing down the partner ranks to sharpen the firm's focus." },
      { year: "2010", event: "Helps establish equal-carry compensation across all Venrock partners, regardless of who led a given investment." },
      { year: "2018", event: "athenahealth, a long-held Venrock healthcare investment, completes its public journey before eventual acquisition." }
    ],
    biography: "Bryan Roberts joined Venrock in 2000 immediately after earning a PhD in Chemistry & Chemical Biology from Harvard, following an undergraduate degree at Dartmouth, bringing genuine scientific depth to healthcare investing. He became a driving force in restructuring Venrock starting in 2007, helping winnow the firm's partner ranks and later establishing an equal-carry compensation structure across all partners regardless of who sourced a given deal — a structural choice meant to incentivize collective success over individual credit. Roberts has anchored Venrock's healthcare practice for more than two decades, backing companies including athenahealth, Illumina, Castlight Health, and Grand Rounds, and remains one of the firm's most senior and long-tenured healthcare investors.",
    sources: [
      { label: "Venrock — Bryan Roberts", url: "https://www.venrock.com/teammember/bryan-roberts/" },
      { label: "Forbes — How Venrock Is Reinventing Itself", url: "https://www.forbes.com/sites/kerryadolan/2013/05/09/how-venrock-is-reinventing-itself/" }
    ]
  },

  "peter-dicks": {
    name: "Peter Dicks",
    firm: "Abingworth",
    firmSlug: "abingworth",
    title: "Co-Founder & Senior Partner",
    joinedYear: 1973,
    education: [],
    previousExperience: [
      "Stockbroker, London"
    ],
    investmentFocus: ["Biotechnology", "Pharmaceuticals"],
    notableInvestments: [
      { name: "Clovis Oncology", ticker: "CLVS" },
      { name: "Cantab Pharmaceuticals", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 5,
    careerTimeline: [
      { year: "1973", event: "Co-founds Abingworth with fellow London stockbroker Hon. Anthony Montagu." },
      { year: "1970s-80s", event: "Abingworth makes early investments in Apple and Silicon Graphics, before the firm's biotech pivot." },
      { year: "1987", event: "Establishes Abingworth's dedicated biotech investment arm, with an early investment in Immunology Ltd, later renamed Cantab Pharmaceuticals." },
      { year: "2014", event: "Algeta, a portfolio company, is acquired by Bayer." },
      { year: "2022", event: "Abingworth is acquired by The Carlyle Group in August, after nearly 50 years as an independent firm." }
    ],
    biography: "Peter Dicks and fellow London stockbroker Hon. Anthony Montagu founded Abingworth in 1973, initially making broader technology investments — including early stakes in Apple and Silicon Graphics — before Dicks led the firm's pivot to dedicated biotechnology investing with the establishment of its biotech arm in 1987. That pivot built Abingworth into one of the longest-running and most respected transatlantic life sciences investors, backing more than 180 companies across seed through late-stage development with 73-plus completed IPOs and 46 acquisitions, including Clovis Oncology's NASDAQ listing and Algeta's sale to Bayer. Dicks has chaired numerous biotech companies and advised UK health funds throughout his career, helping build Abingworth into a firm managing billions before its 2022 acquisition by The Carlyle Group.",
    sources: [
      { label: "Wikipedia — Abingworth", url: "https://en.wikipedia.org/wiki/Abingworth_(company)" },
      { label: "Abingworth", url: "https://www.abingworth.com/" }
    ]
  },

  "christoph-braun": {
    name: "Christoph Braun",
    firm: "Acton Capital",
    firmSlug: "acton-capital",
    title: "Managing Partner",
    joinedYear: 1999,
    education: ["MBA (United States)", "PhD, Ludwig Maximilian University of Munich (LMU)"],
    previousExperience: [
      "Strategy Consultant, Frankfurt & San Francisco"
    ],
    investmentFocus: ["Fintech", "SaaS", "Marketplaces", "Mobility"],
    notableInvestments: [
      { name: "Mambu", ticker: null },
      { name: "Zooplus", ticker: null },
      { name: "iwoca", ticker: null }
    ],
    boardSeats: ["Mambu"],
    ipoCount: 2,
    majorExits: 4,
    careerTimeline: [
      { year: "1990s", event: "Studies for an MBA in the US and becomes infected with what he calls the 'startup virus,' before earning a PhD from LMU Munich and working as a strategy consultant in Frankfurt and San Francisco." },
      { year: "1999", event: "Signs Acton Capital's first investment agreement in February with a young startup called Alando, founded by Oliver, Marc, and Alexander Samwer." },
      { year: "1999", event: "Alando is acquired by eBay within 100 days for $43 million, sparking a wave of German startups and helping establish Berlin as a startup hub." },
      { year: "2008", event: "Zooplus completes its IPO; AbeBooks, another Acton investment, is acquired by Amazon." },
      { year: "2019", event: "Closes Acton V at $215 million." }
    ],
    biography: "Christoph Braun caught what he calls the 'startup virus' while earning an MBA in the US, then completed a PhD at LMU Munich and worked as a strategy consultant in Frankfurt and San Francisco before co-founding Acton Capital in 1999. His first deal became legendary in German startup history: in February 1999, he signed an investment agreement with three young, energetic founders — the Samwer brothers — behind Alando, an online auction site that eBay acquired within 100 days for $43 million, creating the core of eBay Europe and sparking an entire wave of German startup activity. Braun has since built Acton into a leading European growth-stage investor, backing more than 100 startups including Mambu, Zooplus (IPO 2008), iwoca, and AlphaSights, with more than €400 million invested across six fund generations since founding.",
    sources: [
      { label: "Acton Capital — About", url: "https://medium.com/actoncapital/starting-up-within-the-bubble-42c1f4019f45" },
      { label: "Wikipedia — Acton Capital", url: "https://en.wikipedia.org/wiki/Acton_Capital" }
    ]
  },
  "matt-huang": {
    name: "Matt Huang",
    firm: "Paradigm",
    firmSlug: "paradigm",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2018,
    education: ["BS, Mathematics, MIT"],
    previousExperience: [
      "Founder, Hotspots (mobile startup, acquired by Twitter)",
      "Partner, Sequoia Capital"
    ],
    investmentFocus: ["Crypto/Web3", "AI", "Fintech"],
    notableInvestments: [
      { name: "Coinbase", ticker: "COIN" },
      { name: "Stripe", ticker: null },
      { name: "Kalshi", ticker: null }
    ],
    boardSeats: ["Stripe", "Kalshi"],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "2010s", event: "Founds Hotspots, a mobile startup later acquired by Twitter, before becoming a Partner at Sequoia Capital." },
      { year: "2018", event: "Leaves Sequoia to co-found Paradigm with Coinbase co-founder Fred Ehrsam in June." },
      { year: "2021", event: "Coinbase, co-founded by Paradigm co-founder Fred Ehrsam, completes its direct listing at an approximately $86 billion valuation." },
      { year: "2023", event: "Becomes Paradigm's day-to-day leader as managing partner after Ehrsam steps back from that role in October, remaining a co-founder and general partner." },
      { year: "2026", event: "Co-authors the announcement of Paradigm's $1.2 billion fourth fund, expanding the firm's mandate into AI and robotics." }
    ],
    biography: "Matt Huang built a track record spotting major technology waves early as a Partner at Sequoia Capital, backing companies including ByteDance and Instacart, before leaving in 2018 to co-found Paradigm with Fred Ehrsam, who had co-founded Coinbase. Huang has led Paradigm's expansion from a purely crypto-focused fund into a broader 'technical frontier' mandate spanning AI and robotics, co-founding Tempo, a blockchain payments network built with Stripe, and sitting on the boards of both Stripe and Kalshi, a regulated crypto futures exchange. He became the firm's day-to-day leader in 2023, and Paradigm has grown to more than $12.7 billion in assets under management under his leadership, with Fund III alone closing at $1.2 billion in 2026 to back frontier bets including drone delivery company Zipline and space company True Anomaly.",
    sources: [
      { label: "Paradigm — Matt Huang", url: "https://www.paradigm.xyz/team/matt-huang" },
      { label: "Wikipedia — Paradigm", url: "https://en.wikipedia.org/wiki/Paradigm_(venture_capital_firm)" }
    ]
  },

  "alana-palmedo": {
    name: "Alana Palmedo",
    firm: "Paradigm",
    firmSlug: "paradigm",
    title: "Managing Partner",
    joinedYear: 2018,
    education: ["BS, Finance, Pacific Lutheran University", "MBA, MIT Sloan School of Management"],
    previousExperience: [
      "Asset Management, Cascade Investments",
      "Asset Management, Russell Investments"
    ],
    investmentFocus: ["Crypto/Web3", "Financial Regulation", "AI", "Robotics"],
    notableInvestments: [
      { name: "True Anomaly", ticker: null },
      { name: "Zipline", ticker: null }
    ],
    boardSeats: ["True Anomaly"],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2010s", event: "Builds nearly two decades of asset management experience at Cascade Investments and Russell Investments." },
      { year: "2018", event: "Joins Paradigm at its founding as Managing Partner." },
      { year: "2019", event: "Joins the CFTC's Innovation Advisory Committee, advising on crypto market regulation." },
      { year: "2026", event: "Co-authors Paradigm's Fund III announcement with Matt Huang, becoming the public voice of the firm's expansion into AI and robotics." }
    ],
    biography: "Alana Palmedo brings nearly two decades of institutional asset management experience from Cascade Investments and Russell Investments to Paradigm, which she joined at its 2018 founding as Managing Partner. She has become one of the crypto industry's most credible regulatory voices, serving on the CFTC's Innovation Advisory Committee and advising on market structure and compliance policy as digital assets moved toward mainstream institutional acceptance. Alongside Matt Huang, Palmedo has led Paradigm's expansion beyond crypto into AI and robotics, telling Bloomberg 'there's so much else happening right now that's pretty hard to ignore,' and has backed frontier bets including True Anomaly, a space defense startup, and Zipline, an autonomous drone delivery company.",
    sources: [
      { label: "TechCrunch", url: "https://techcrunch.com/2026/07/08/crypto-vc-firm-paradigm-raises-1-2b-to-invest-in-technical-frontier-startups/" },
      { label: "CoinDesk", url: "https://www.coindesk.com/markets/2026/07/08/crypto-vc-paradigm-launches-usd1-2-billion-ai-fund-as-it-broadens-beyond-digital-assets-bbg" }
    ]
  },
  "jeff-horing": {
    name: "Jeff Horing",
    firm: "Insight Partners",
    firmSlug: "insight-partners",
    title: "Co-Founder & Managing Director",
    joinedYear: 1995,
    education: ["B.A. Electrical Engineering, University of Pennsylvania", "M.B.A., MIT Sloan School of Management"],
    previousExperience: [
      "Principal, Goldman Sachs",
      "Principal, Warburg Pincus & Company"
    ],
    investmentFocus: ["Software", "SaaS", "Data & Analytics", "Cybersecurity"],
    notableInvestments: [
      { name: "Alteryx", ticker: null },
      { name: "Wix", ticker: "WIX" },
      { name: "Shutterstock", ticker: "SSTK" },
      { name: "JFrog", ticker: "FROG" },
      { name: "nCino", ticker: "NCNO" },
      { name: "AirWatch", ticker: null }
    ],
    boardSeats: ["monday.com (Chairman)", "Wiz", "JFrog", "Alteryx"],
    ipoCount: 5,
    majorExits: 2,
    careerTimeline: [
      { year: "1995", event: "Co-founds Insight Partners with Jerry Murdock, betting that 'software is the best business in the world.'" },
      { year: "2012", event: "Leads Insight's investment in Shutterstock ahead of its IPO." },
      { year: "2013", event: "Leads Insight's investment in Wix ahead of its IPO." },
      { year: "2014", event: "AirWatch, an Insight portfolio company, is acquired by VMware for $1.5 billion." },
      { year: "2017", event: "Leads Insight's investment in Alteryx ahead of its IPO." },
      { year: "2025", event: "Insight Partners surpasses $90 billion in assets under management, with over 875 companies invested in to date." }
    ],
    biography: "Jeff Horing co-founded Insight Partners in 1995 after working as a principal at Goldman Sachs and Warburg Pincus, building the firm around a then-contrarian thesis: software, not hardware, was the best business in the world. In the firm's earliest years, Horing and his co-founder famously sourced deals by manually reading trade publications for growing software companies — an outbound, research-driven approach that still defines Insight's culture. Over three decades, he has led investments in more than 140 companies and personally led the firm to public exits including Wix, Shutterstock, Alteryx, JFrog, and nCino. He currently chairs the board of monday.com and sits on the boards of Wiz, JFrog, and Alteryx.",
    sources: [
      { label: "Insight Partners — Jeff Horing", url: "https://www.insightpartners.com/team/jeff-horing/" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/jeff-horing/" },
      { label: "Wikipedia — Insight Partners", url: "https://en.wikipedia.org/wiki/Insight_Partners" }
    ]
  },
  "chase-coleman": {
    name: "Chase Coleman",
    firm: "Tiger Global Management",
    firmSlug: "tiger-global",
    title: "Founder & Managing Partner",
    joinedYear: 2001,
    education: ["B.A. Economics & Spanish, Williams College (1997)"],
    previousExperience: [
      "Technology Analyst & Partner, Tiger Management (1997–2000) — under Julian Robertson"
    ],
    investmentFocus: ["Internet", "Fintech", "Consumer Tech", "Global Public & Private Equity"],
    notableInvestments: [
      { name: "Facebook", ticker: "META" },
      { name: "Coinbase", ticker: "COIN" },
      { name: "JD.com", ticker: "JD" },
      { name: "Stripe", ticker: null },
      { name: "Uber", ticker: "UBER" }
    ],
    boardSeats: ["Tiger Foundation", "Hospital for Special Surgery (Investment Committee Co-Chair)"],
    ipoCount: 4,
    majorExits: 1,
    careerTimeline: [
      { year: "1997", event: "Joins Julian Robertson's Tiger Management as a technology analyst straight out of Williams College." },
      { year: "2000", event: "Robertson closes Tiger Management and entrusts Coleman with over $25 million to manage as one of the original 'Tiger Cubs.'" },
      { year: "2001", event: "Launches Tiger Technology (later renamed Tiger Global Management) as a public-markets hedge fund." },
      { year: "2010s", event: "Builds an early pre-IPO stake in Facebook, later selling it for an estimated $1 billion." },
      { year: "2021", event: "Tiger Global becomes one of the most active venture investors globally, expanding aggressively into private markets." }
    ],
    biography: "Chase Coleman was only 25 when Julian Robertson closed Tiger Management in 2000 and handed him roughly $25 million to manage — one of the original 'Tiger Cubs' who launched their own funds from Tiger's wind-down. A childhood friend of Robertson's son, Coleman had joined Tiger Management as a technology analyst straight out of Williams College in 1997. He founded Tiger Global in 2001 and built it into a hybrid the industry hadn't quite seen before: a fund equally comfortable buying public stocks and writing private venture checks, moving unusually fast into deals other investors took months to close. His early, high-conviction stake in Facebook — sold for an estimated $1 billion in 2013 — remains one of the defining bets of his career.",
    sources: [
      { label: "Tiger Global — Chase Coleman", url: "https://www.tigerglobal.com/chase-coleman" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chase_Coleman_III" }
    ]
  },
  "hemant-taneja": {
    name: "Hemant Taneja",
    firm: "General Catalyst",
    firmSlug: "general-catalyst",
    title: "CEO & Managing Director",
    joinedYear: 2002,
    education: ["B.S. Biology, B.S. Mathematics, B.S. EECS, M.Eng. EECS, M.S. Operations Research — Massachusetts Institute of Technology"],
    previousExperience: [
      "Co-Founder, Chairman & CEO, Isovia — acquired by JP Mobile"
    ],
    investmentFocus: ["Healthcare", "AI Infrastructure", "Defense", "Fintech"],
    notableInvestments: [
      { name: "Snap", ticker: "SNAP" },
      { name: "Samsara", ticker: "IOT" },
      { name: "Stripe", ticker: null },
      { name: "GitLab", ticker: null },
      { name: "Anduril", ticker: null },
      { name: "Grammarly", ticker: null }
    ],
    boardSeats: ["Khan Academy", "Revolution Healthcare Acquisition"],
    ipoCount: 3,
    majorExits: 2,
    careerTimeline: [
      { year: "2002", event: "Joins General Catalyst as an entrepreneur-in-residence after selling his first company, Isovia." },
      { year: "2017", event: "Leads General Catalyst's investment in Snap ahead of its IPO." },
      { year: "2020", event: "Portfolio company Livongo is acquired for $18.5 billion — the largest digital health transaction to date at the time." },
      { year: "2021", event: "Becomes CEO of General Catalyst, succeeding the firm's earlier leadership." },
      { year: "2025", event: "Publishes 'The Transformation Principles,' laying out his thesis for AI-driven resilience across healthcare, defense, and industrials." }
    ],
    biography: "Hemant Taneja moved from Delhi, India to the U.S. as a teenager and went on to earn five degrees from MIT before dropping out of a PhD program to found his first company, Isovia, which he sold to JP Mobile. He joined General Catalyst as an entrepreneur-in-residence in 2002 and became CEO in 2021, architecting the firm's strategy around what he calls 'economies of unscale' — using AI to build platform companies aligned with long-term societal interests. He has led early investments in Stripe, Snap, Samsara, and Anthropic, and guided portfolio company Livongo through an $18.5 billion acquisition, the largest digital health deal of its era.",
    sources: [
      { label: "General Catalyst — Hemant Taneja", url: "https://www.generalcatalyst.com/team/hemant-taneja" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hemant_Taneja" }
    ]
  },
  "scott-sandell": {
    name: "Scott Sandell",
    firm: "New Enterprise Associates",
    firmSlug: "nea",
    title: "Executive Chairman & Chief Investment Officer",
    joinedYear: 1996,
    education: ["A.B. Engineering Sciences, Dartmouth College (1986)", "M.B.A., Stanford Graduate School of Business (1992)"],
    previousExperience: [
      "Product Manager, Microsoft — worked on Windows 95",
      "Co-Founder, European Subsidiary, C-ATS Software",
      "Consultant, Boston Consulting Group"
    ],
    investmentFocus: ["Enterprise Technology", "Cloud Infrastructure", "Fintech"],
    notableInvestments: [
      { name: "Salesforce", ticker: null },
      { name: "Workday", ticker: "WDAY" },
      { name: "Robinhood", ticker: "HOOD" },
      { name: "Cloudflare", ticker: null },
      { name: "Bloom Energy", ticker: null },
      { name: "Tableau", ticker: null }
    ],
    boardSeats: ["Cloudflare (Lead Independent Director)"],
    ipoCount: 5,
    majorExits: 2,
    careerTimeline: [
      { year: "1996", event: "Joins NEA after roles at Microsoft, C-ATS Software, and Boston Consulting Group." },
      { year: "2000s", event: "Leads NEA's early investments in Salesforce and WebEx." },
      { year: "2012", event: "Leads NEA's investment in Workday ahead of its IPO." },
      { year: "2021", event: "Leads NEA's investment in Robinhood ahead of its IPO." },
      { year: "2023", event: "Becomes CEO of NEA, later transitioning to Executive Chairman and Chief Investment Officer." }
    ],
    biography: "Scott Sandell joined NEA in 1996 after stints at Microsoft, where he worked as a product manager on Windows 95, and Boston Consulting Group. Over nearly three decades at the firm, he has personally led investments in a run of industry-transforming companies — Salesforce, WebEx, Workday, Tableau, Bloom Energy, and Robinhood among them — and been named to the Forbes Midas List repeatedly for it. He has held nearly every senior title at NEA, from Managing General Partner to CEO to his current role as Executive Chairman and Chief Investment Officer, and currently serves as lead independent director of Cloudflare.",
    sources: [
      { label: "NEA — Scott Sandell", url: "https://www.nea.com/team/scott-sandell" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/scott-sandell/" }
    ]
  },
  "jeremy-liew": {
    name: "Jeremy Liew",
    firm: "Lightspeed Venture Partners",
    firmSlug: "lightspeed",
    title: "Partner",
    joinedYear: 2006,
    education: ["B.Sc. & B.A. (Hons), Australian National University", "M.B.A., Stanford University (2000)"],
    previousExperience: [
      "SVP Corporate Development & Chief of Staff to CEO, AOL",
      "General Manager, Netscape",
      "VP Strategic Planning, IAC (InterActiveCorp)"
    ],
    investmentFocus: ["Consumer", "Mobile", "Social Media", "Fintech"],
    notableInvestments: [
      { name: "Snap", ticker: "SNAP" },
      { name: "Affirm", ticker: "AFRM" },
      { name: "The Honest Company", ticker: "HNST" },
      { name: "Bonobos", ticker: null },
      { name: "Giphy", ticker: null }
    ],
    boardSeats: ["Affirm", "Blockchain.com"],
    ipoCount: 3,
    majorExits: 3,
    careerTimeline: [
      { year: "1988", event: "Represents Australia at the International Mathematical Olympiad alongside future Fields Medalist Terence Tao." },
      { year: "1990s", event: "Works at early web pioneers Netscape, AOL, CitySearch, and IAC." },
      { year: "2006", event: "Joins Lightspeed Venture Partners as its first dedicated consumer specialist." },
      { year: "2012", event: "Makes the first institutional investment in a then-tiny app called Snapchat." },
      { year: "2017", event: "Snap goes public, five years after that first bet." },
      { year: "2021", event: "Steps back from leading new investments while remaining on the boards of his existing portfolio companies." }
    ],
    biography: "Jeremy Liew represented Australia at the International Mathematical Olympiad as a teenager before deciding, in his words, that he wasn't cut out to be a professional mathematician. He spent the 1990s and early 2000s as an operator at Netscape, AOL, CitySearch, and IAC before joining Lightspeed Venture Partners in 2006 as the firm's first dedicated consumer specialist. In 2012, he made the first institutional investment in a then-tiny disappearing-photo app called Snapchat, a bet that defined his career and the firm's consumer practice alike. He has also backed Affirm, The Honest Company, and Bonobos, and stepped back from new investments in 2021 while remaining active on his portfolio companies' boards.",
    sources: [
      { label: "Lightspeed — Jeremy Liew", url: "https://lsvp.com/team-member/jeremy-liew/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jeremy_Liew" }
    ]
  },
  "arthur-patterson": {
    name: "Arthur Patterson",
    firm: "Accel",
    firmSlug: "accel",
    title: "Founding Partner",
    joinedYear: 1983,
    education: ["A.B., Harvard University", "M.B.A., Harvard Business School"],
    previousExperience: [
      "General Partner, Adler & Company",
      "Venture Capital Investor, Citicorp Venture Capital",
      "International Office, U.S. Treasury Department"
    ],
    investmentFocus: ["Enterprise Software", "Consumer", "Services"],
    notableInvestments: [
      { name: "Facebook", ticker: "META" },
      { name: "MetroPCS", ticker: null },
      { name: "Veritas Software", ticker: null },
      { name: "Portal Software", ticker: null },
      { name: "UUNet", ticker: null }
    ],
    boardSeats: ["Aalyria", "Acalvio", "Integral Development", "QMC Telecom International"],
    ipoCount: 7,
    majorExits: 3,
    careerTimeline: [
      { year: "1983", event: "Co-founds Accel with Jim Swartz on a strategy of deep specialization in specific technology categories." },
      { year: "1990s", event: "Leads Accel investments through IPOs including Veritas Software, UUNet, and Portal Software." },
      { year: "2005", event: "Accel leads Facebook's Series A, a single check that became one of the highest-multiple returns in VC history." },
      { year: "2013", event: "Named MetroPCS's Presiding Director as the company merges with T-Mobile." },
      { year: "2022", event: "Receives the National Venture Capital Association's Lifetime Achievement Award." }
    ],
    biography: "Arthur Patterson co-founded Accel in 1983 after roles at Citicorp Venture Capital, Adler & Company, and the U.S. Treasury Department, betting on a strategy of deep specialization in specific technology categories rather than spreading investments broadly — an unusual approach at the time. Over four decades, he has led Accel investments through IPOs including Veritas Software, UUNet, Portal Software, and Actuate, and served as a director of MetroPCS through its eventual merger with T-Mobile. His most famous bet came in 2005, when he led Accel's Series A investment in Facebook, still cited as one of the highest-multiple returns in venture capital history. He received the National Venture Capital Association's Lifetime Achievement Award in 2022.",
    sources: [
      { label: "Accel — Arthur Patterson", url: "https://www.accel.com/team/arthur-patterson" },
      { label: "PitchBook Profile", url: "https://pitchbook.com/profiles/investor/167544-19" }
    ]
  },
  "vinod-khosla": {
    name: "Vinod Khosla",
    firm: "Khosla Ventures",
    firmSlug: "khosla-ventures",
    title: "Founder",
    joinedYear: 2004,
    education: ["B.Tech. Electrical Engineering, IIT Delhi", "M.S. Biomedical Engineering, Carnegie Mellon University", "M.B.A., Stanford University"],
    previousExperience: [
      "Co-Founder, Sun Microsystems (1982) — served as first CEO",
      "General Partner, Kleiner Perkins (1986–2004)"
    ],
    investmentFocus: ["Clean Energy", "Artificial Intelligence", "Deep Tech"],
    notableInvestments: [
      { name: "Block (Square)", ticker: "XYZ" },
      { name: "Instacart", ticker: "CART" },
      { name: "OpenAI", ticker: null },
      { name: "Impossible Foods", ticker: null }
    ],
    boardSeats: ["Multiple private portfolio companies across clean energy and AI"],
    ipoCount: 2,
    majorExits: 2,
    careerTimeline: [
      { year: "1982", event: "Co-founds Sun Microsystems, serving as its first CEO before transitioning to venture capital." },
      { year: "1986", event: "Joins Kleiner Perkins as a General Partner, investing there for nearly two decades." },
      { year: "2004", event: "Founds Khosla Ventures, focused on high-risk, high-reward technology bets others consider too early." },
      { year: "2009", event: "Makes an early investment in Square (now Block), years ahead of its 2015 IPO." },
      { year: "2019", event: "Becomes an early institutional backer of OpenAI, one of the firm's highest-profile recent bets." }
    ],
    biography: "Vinod Khosla co-founded Sun Microsystems in 1982, serving as its first CEO, before moving into venture capital as a General Partner at Kleiner Perkins for nearly two decades. In 2004, he founded his own firm, Khosla Ventures, built on the conviction that the biggest returns come from technology bets everyone else is too cautious to make — from early clean energy investments long before the category was fashionable to some of the earliest institutional capital behind OpenAI. True to his engineering training at IIT Delhi and Carnegie Mellon, Khosla has built a reputation for backing technically difficult, capital-intensive bets that more conservative investors pass on.",
    sources: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Vinod_Khosla" },
      { label: "Khosla Ventures", url: "https://www.khoslaventures.com" }
    ]
  },
  "joshua-kushner": {
    name: "Joshua Kushner",
    firm: "Thrive Capital",
    firmSlug: "thrive-capital",
    title: "Founder & Managing Partner",
    joinedYear: 2009,
    education: ["B.A., Harvard University (2008)", "M.B.A., Harvard Business School (2011)"],
    previousExperience: [
      "Private Equity Group, Goldman Sachs — distressed debt"
    ],
    investmentFocus: ["Consumer Internet", "AI", "Fintech", "Healthcare"],
    notableInvestments: [
      { name: "Instagram", ticker: null },
      { name: "OpenAI", ticker: null },
      { name: "Stripe", ticker: null },
      { name: "GitHub", ticker: null },
      { name: "Figma", ticker: "FIG" },
      { name: "Instacart", ticker: "CART" }
    ],
    boardSeats: ["Oscar Health (Vice Chairman)", "A24 Films"],
    ipoCount: 2,
    majorExits: 3,
    careerTimeline: [
      { year: "2008", event: "Graduates from Harvard College and joins Goldman Sachs' private equity group, working on distressed debt." },
      { year: "2009", event: "Founds Thrive Capital at age 24 with a $5 million first fund, initially funding it himself." },
      { year: "2012", event: "Makes one of his earliest and most famous bets on Instagram, years before its acquisition by Facebook." },
      { year: "2013", event: "Co-founds Oscar Health, serving as vice chairman." },
      { year: "2020s", event: "Becomes one of the earliest and largest institutional investors in OpenAI." }
    ],
    biography: "Joshua Kushner founded Thrive Capital in 2009 at just 24 years old, funding the firm's first, $5 million fund largely himself after a brief stint in Goldman Sachs' private equity group. Thrive has stayed deliberately small in deal volume — funding only a handful of new companies most years — while making some of the earliest bets on Instagram and, more recently, OpenAI, a concentrated approach that has made it one of the highest-returning firms of its size. Outside of Thrive, Kushner co-founded and serves as vice chairman of Oscar Health, the technology-driven health insurance company.",
    sources: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Joshua_Kushner" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/josh-kushner/" }
    ]
  },
  "byron-deeter": {
    name: "Byron Deeter",
    firm: "Bessemer Venture Partners",
    firmSlug: "bessemer",
    title: "Partner",
    joinedYear: 2005,
    education: ["B.A., University of California, Berkeley"],
    previousExperience: [
      "Co-Founder, President & CEO, Trigo Technologies (1999–2004) — acquired by IBM",
      "Business Development Executive, IBM",
      "Associate, TA Associates",
      "Analyst, McKinsey & Company"
    ],
    investmentFocus: ["Cloud Computing", "SaaS", "AI", "Enterprise Software"],
    notableInvestments: [
      { name: "Twilio", ticker: "TWLO" },
      { name: "DocuSign", ticker: "DOCU" },
      { name: "Box", ticker: null },
      { name: "HashiCorp", ticker: null },
      { name: "SendGrid", ticker: null },
      { name: "Anthropic", ticker: null }
    ],
    boardSeats: ["ServiceTitan", "MaintainX", "Syndio"],
    ipoCount: 13,
    majorExits: 11,
    careerTimeline: [
      { year: "1999", event: "Co-founds cloud-computing company Trigo Technologies, serving as President and CEO." },
      { year: "2004", event: "Trigo Technologies is acquired by IBM, where Deeter continues on as an executive." },
      { year: "2005", event: "Joins Bessemer Venture Partners to help build out the firm's global cloud practice." },
      { year: "2010", event: "Leads Bessemer's early investment in Twilio, years ahead of its 2016 IPO." },
      { year: "2016", event: "Twilio and SendGrid, two companies Deeter backed, both go public." },
      { year: "2024", event: "ServiceTitan, one of Deeter's Series A investments, goes public in a roughly $9 billion IPO." }
    ],
    biography: "Byron Deeter built and sold his own cloud-computing company, Trigo Technologies, to IBM before returning to venture capital in 2005 to help lead Bessemer's global cloud practice. Since then, he has backed more than 100 cloud companies, 13 of which have gone public — including Twilio, DocuSign, Box, HashiCorp, and SendGrid — and co-authored Bessemer's widely cited 'Ten Laws of Cloud Computing' along with the firm's annual State of the Cloud report. His early, contrarian bet on Twilio in 2010, when the company was widely dismissed as a niche tool with a small market, became one of the defining cloud investments of the decade after its 2016 IPO.",
    sources: [
      { label: "Bessemer — Byron Deeter", url: "https://www.bvp.com/team/byron-deeter" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/byron-deeter/" }
    ]
  },
  "bill-gurley": {
    name: "Bill Gurley",
    firm: "Benchmark",
    firmSlug: "benchmark",
    title: "General Partner",
    joinedYear: 1999,
    education: ["B.S. Computer Science, University of Florida (1989)", "M.B.A., University of Texas at Austin, McCombs School of Business (1993)"],
    previousExperience: [
      "Design Engineer, Compaq Computer",
      "Technical Marketing, AMD Embedded Processor Division",
      "Technology Research Analyst, CS First Boston",
      "General Partner, Hummer Winblad Venture Partners"
    ],
    investmentFocus: ["Consumer Internet", "Marketplaces", "Enterprise"],
    notableInvestments: [
      { name: "Uber", ticker: "UBER" },
      { name: "Zillow", ticker: null },
      { name: "GrubHub", ticker: null },
      { name: "OpenTable", ticker: null },
      { name: "Nextdoor", ticker: null },
      { name: "Stitch Fix", ticker: null }
    ],
    boardSeats: ["Nextdoor", "HackerOne", "Solv"],
    ipoCount: 5,
    majorExits: 2,
    careerTimeline: [
      { year: "1989", event: "Graduates from the University of Florida with a computer science degree and joins Compaq as a design engineer." },
      { year: "1993", event: "Earns an MBA from UT Austin, then moves into technology research on Wall Street, working on the Amazon IPO." },
      { year: "1999", event: "Joins Benchmark as a General Partner." },
      { year: "2011", event: "Leads Benchmark's early investment in Uber." },
      { year: "2017", event: "Steps down from Uber's board following the company's leadership turmoil, handing the seat to fellow Benchmark partner Matt Cohler." },
      { year: "2025", event: "Publishes 'Runnin' Down a Dream,' a book on building a career you love." }
    ],
    biography: "Bill Gurley built an unusually well-rounded technical and financial foundation before venture capital — a computer science degree from the University of Florida, engineering roles at Compaq and AMD, and years as a Wall Street technology analyst covering the Amazon IPO — before joining Benchmark as a General Partner in 1999. He became one of the most influential investors of the 2010s through early, high-conviction bets on Uber, Zillow, GrubHub, OpenTable, and Nextdoor, and built a parallel reputation as a widely read commentator through his blog, Above the Crowd. He stepped down from Uber's board in 2017 amid the company's leadership crisis and has since relocated to Austin, Texas, while remaining active on several portfolio company boards.",
 sources: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bill_Gurley" },
      { label: "Texas Exes Distinguished Alumnus", url: "https://www.texasexes.org/about-us/awards/distinguished-alumnus-award-0" }
    ]
  },
  "reid-hoffman": {
    name: "Reid Hoffman",
    firm: "Greylock Partners",
    firmSlug: "greylock",
    title: "Partner",
    joinedYear: 2009,
    education: ["B.S. Symbolic Systems, Stanford University", "M.St. Philosophy, Wolfson College, Oxford University (Marshall Scholar)"],
    previousExperience: [
      "Founder, SocialNet (1997) — an early social networking site",
      "Executive Vice President & Founding Board Member, PayPal (2000–2002) — acquired by eBay for $1.5B",
      "Co-Founder & Executive Chairman, LinkedIn (2003) — IPO 2011, acquired by Microsoft for $26.2B in 2016"
    ],
    investmentFocus: ["Consumer Internet", "Enterprise Software", "AI", "Marketplaces"],
    notableInvestments: [
      { name: "Facebook", ticker: "META" },
      { name: "Airbnb", ticker: "ABNB" },
      { name: "LinkedIn", ticker: null },
      { name: "Aurora Innovation", ticker: "AUR" },
      { name: "Groupon", ticker: "GRPN" }
    ],
    boardSeats: ["Microsoft", "Aurora Innovation"],
    ipoCount: 2,
    majorExits: 2,
    careerTimeline: [
      { year: "1997", event: "Founds SocialNet, an early and unsuccessful attempt at online social networking." },
      { year: "2000", event: "Joins PayPal as Executive Vice President and a founding board member." },
      { year: "2002", event: "eBay acquires PayPal for $1.5 billion." },
      { year: "2003", event: "Co-founds LinkedIn, serving as CEO for its first four years and later as Executive Chairman." },
      { year: "2009", event: "Joins Greylock Partners as a partner while still serving as LinkedIn's chairman." },
      { year: "2011", event: "LinkedIn goes public; Hoffman's stake is valued at over $2 billion." },
      { year: "2016", event: "Microsoft acquires LinkedIn for $26.2 billion; Hoffman joins Microsoft's board." }
    ],
    biography: "Reid Hoffman is part of the 'PayPal Mafia' — the group of early PayPal employees and executives who went on to found or fund a wave of major technology companies. After PayPal's $1.5 billion sale to eBay, Hoffman co-founded LinkedIn in 2003, growing it into the world's largest professional networking service before Microsoft acquired it for $26.2 billion in 2016. He joined Greylock Partners as a partner in 2009, focusing on businesses with strong network effects, and was an early investor in both Facebook and Airbnb. He is also the host of the podcast Masters of Scale and co-author of three best-selling books on entrepreneurship, including Blitzscaling.",
    sources: [
{ label: "Greylock — Reid Hoffman", url: "https://greylock.com/team/reid-hoffman/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Reid_Hoffman" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/reid-hoffman/" }
    ]
  },
  "john-doerr": {
    name: "John Doerr",
    firm: "Kleiner Perkins",
    firmSlug: "kleiner-perkins",
    title: "Chairman",
    joinedYear: 1980,
    education: ["B.S. & M.S. Electrical Engineering, Rice University", "M.B.A., Harvard Business School"],
    previousExperience: [
      "Engineering, Marketing & Sales Executive, Intel (1974–1980)"
    ],
    investmentFocus: ["Enterprise Software", "Internet Infrastructure", "Climate Tech"],
    notableInvestments: [
      { name: "Amazon", ticker: "AMZN" },
      { name: "Google", ticker: "GOOGL" },
      { name: "Netscape", ticker: null },
      { name: "Sun Microsystems", ticker: null },
      { name: "DoorDash", ticker: "DASH" },
      { name: "Slack", ticker: null }
    ],
    boardSeats: ["Alphabet (Google)"],
    ipoCount: 4,
    majorExits: 1,
    careerTimeline: [
      { year: "1974", event: "Joins Intel just as the company launches its landmark 8080 microprocessor." },
      { year: "1980", event: "Joins Kleiner Perkins as a partner." },
      { year: "1996", event: "Leads Kleiner Perkins' investment in Amazon.com, later helping recruit its early engineering leadership." },
      { year: "1999", event: "Leads a $12.5 million investment in Google alongside Sequoia Capital — the firm's largest check at the time." },
      { year: "2004", event: "Google goes public in one of the most celebrated venture bets in history." },
      { year: "2016", event: "Steps down from day-to-day leadership of Kleiner Perkins, becoming chairman." },
      { year: "2018", event: "Publishes 'Measure What Matters,' popularizing the OKR goal-setting framework he introduced to Google." }
    ],
    biography: "John Doerr joined Intel in 1974, just as the company launched its landmark 8080 microprocessor, before joining Kleiner Perkins as a partner in 1980. Over more than four decades at the firm, he led some of the most consequential venture investments in history: Amazon in 1996, and Google in 1999, when Kleiner Perkins and Sequoia Capital each wrote what was then their largest check ever on a 17-page pitch deck with no business model. Beyond capital, Doerr helped recruit key early executives at both companies and introduced the OKR (Objectives and Key Results) goal-setting framework to Google, later documenting it in his bestselling book Measure What Matters. He stepped down from day-to-day leadership of Kleiner Perkins in 2016 and remains a board director of Alphabet.",
  sources: [
      { label: "Kleiner Perkins — John Doerr", url: "https://www.kleinerperkins.com/people/john-doerr/" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/john-doerr/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/John_Doerr" }
    ]
  },
  "fred-wilson": {
    name: "Fred Wilson",
    firm: "Union Square Ventures",
    firmSlug: "union-square-ventures",
    title: "Co-Founder & Partner",
    joinedYear: 2003,
    education: ["B.S. Mechanical Engineering, Massachusetts Institute of Technology", "M.B.A., The Wharton School, University of Pennsylvania"],
    previousExperience: [
      "Associate to General Partner, Euclid Partners (1987–1996)",
      "Co-Founder, Flatiron Partners (1996–2001) — with Jerry Colonna"
    ],
    investmentFocus: ["Consumer Internet", "Marketplaces", "Fintech", "Crypto"],
    notableInvestments: [
      { name: "Twitter", ticker: null },
      { name: "Etsy", ticker: "ETSY" },
      { name: "Coinbase", ticker: "COIN" },
      { name: "Tumblr", ticker: null },
      { name: "MongoDB", ticker: "MDB" },
      { name: "Zynga", ticker: null }
    ],
    boardSeats: ["Etsy (former)", "Twitter (former)"],
    ipoCount: 5,
    majorExits: 1,
    careerTimeline: [
      { year: "1987", event: "Joins Euclid Partners as an associate, eventually becoming a General Partner." },
      { year: "1996", event: "Co-founds Flatiron Partners with Jerry Colonna, investing in early internet companies." },
      { year: "2001", event: "Shuts down Flatiron Partners following the dot-com crash." },
      { year: "2003", event: "Co-founds Union Square Ventures with Brad Burnham." },
      { year: "2007", event: "Leads USV's Series A investment in Twitter, then four months old." },
      { year: "2008", event: "Leads USV's investment in Etsy." },
      { year: "2013", event: "Portfolio company Tumblr is acquired by Yahoo for $1.1 billion." },
      { year: "2021", event: "Coinbase, an early USV bet, goes public via direct listing." }
    ],
    biography: "Fred Wilson has been a venture capitalist since 1987, working his way up from associate to General Partner at Euclid Partners before co-founding Flatiron Partners in 1996. After Flatiron closed following the dot-com crash, he co-founded Union Square Ventures in 2003 with Brad Burnham, built around a deliberately small-fund philosophy Wilson has stuck to for two decades. USV's early, thesis-driven bets on network-effect businesses — Twitter four months after launch, a then-unproven Etsy, and Coinbase years before crypto went mainstream — have made it one of the most consistently prescient firms in venture capital. Wilson is also known for AVC.com, his long-running blog on venture capital and startups, active continuously since 2003.",
    sources: [
      { label: "USV — Fred Wilson", url: "https://www.usv.com/people/fred-wilson/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fred_Wilson_(financier)" }
    ]
  },
  "geoff-yang": {
    name: "Geoff Yang",
    firm: "Redpoint Ventures",
    firmSlug: "redpoint",
    title: "Founding Partner & Managing Director",
    joinedYear: 1999,
    education: ["B.S.E. Operations Research & Financial Engineering, Princeton University (1981)", "M.B.A., Stanford Graduate School of Business (1985)"],
    previousExperience: [
      "Marketing Representative, IBM Corporation",
      "Associate, First Century Partners",
      "General Partner, Institutional Venture Partners (IVP) (1987–1999)"
    ],
    investmentFocus: ["Consumer Media", "Internet Infrastructure", "Networking"],
    notableInvestments: [
      { name: "TiVo", ticker: null },
      { name: "Juniper Networks", ticker: "JNPR" },
      { name: "MySpace", ticker: null },
      { name: "Ask Jeeves", ticker: null },
      { name: "Excite", ticker: null },
      { name: "Foundry Networks", ticker: null }
    ],
    boardSeats: ["Warner Bros. Discovery", "Franklin Templeton"],
    ipoCount: 5,
    majorExits: 2,
    careerTimeline: [
      { year: "1981", event: "Graduates from Princeton University with a degree in Operations Research and Financial Engineering." },
      { year: "1985", event: "Earns an MBA from Stanford Graduate School of Business." },
      { year: "1987", event: "Joins Institutional Venture Partners (IVP) as a General Partner." },
      { year: "1999", event: "Co-founds Redpoint Ventures, focused on consumer media and internet infrastructure." },
      { year: "2000s", event: "Leads investments through IPOs including Juniper Networks, TiVo, Ask Jeeves, and Excite." }
    ],
    biography: "Geoff Yang spent 12 years as a General Partner at Institutional Venture Partners before co-founding Redpoint Ventures in 1999, bringing decades of experience backing consumer media and internet infrastructure companies from their earliest days. His investments include Juniper Networks, TiVo, Ask Jeeves, Excite, and MySpace, several of which went public during his tenure. Beyond Redpoint, Yang has served as a director of AT&T and currently sits on the boards of Warner Bros. Discovery and Franklin Templeton, alongside advisory roles at Princeton University and the Stanford Graduate School of Business.",
    sources: [
 { label: "Redpoint — Geoff Yang", url: "https://www.redpoint.com/our-people/geoff-yang/" },
      { label: "USOPC Profile", url: "https://www.usopc.org/geoff-yang" }
    ]
  },
  "bijan-sabet": {
    name: "Bijan Sabet",
    firm: "Spark Capital",
    firmSlug: "spark-capital",
    title: "Co-Founder & Partner Emeritus",
    joinedYear: 2005,
    education: ["B.S., Boston College (1991)"],
    previousExperience: [
      "Senior Executive, WebTV and other Silicon Valley startups (1990s) — WebTV acquired by Microsoft for $425M in 1997",
      "Entrepreneur in Residence, Charles River Ventures"
    ],
    investmentFocus: ["Consumer Internet", "Social Media", "Marketplaces"],
    notableInvestments: [
      { name: "Twitter", ticker: null },
      { name: "Tumblr", ticker: null },
      { name: "Foursquare", ticker: null },
      { name: "Stack Overflow", ticker: null },
      { name: "Boxee", ticker: null }
    ],
    boardSeats: ["Twitter (2008–2011, former)", "Tumblr (2007–2013, former)"],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "1991", event: "Graduates from Boston College with a degree in accounting and computer science." },
      { year: "1990s", event: "Works at WebTV and other early consumer internet startups; WebTV is acquired by Microsoft for $425 million in 1997." },
      { year: "2005", event: "Co-founds Spark Capital with Santo Politi, Paul Conway, and Todd Dagres." },
      { year: "2007", event: "Leads Spark's investment in Twitter when the company has fewer than a dozen employees." },
      { year: "2013", event: "Twitter goes public; Tumblr, another Sabet-backed company, is acquired by Yahoo for $1.1 billion the same year." },
      { year: "2021", event: "Transitions from General Partner to Limited Partner to pursue public service." },
      { year: "2022", event: "Sworn in as U.S. Ambassador to the Czech Republic, serving until 2025." }
    ],
    biography: "Bijan Sabet co-founded Spark Capital in 2005 after a decade building early consumer internet startups, including WebTV, which Microsoft acquired for $425 million in 1997. He led Spark's investment in Twitter in 2007, when the company had fewer than a dozen employees, and served on its board until 2011 — two years before Twitter's 2013 IPO. He was also an early backer of Tumblr, which Yahoo acquired for $1.1 billion the same year. In 2021, Sabet transitioned from General Partner to Limited Partner at Spark to pursue public service, and was sworn in as U.S. Ambassador to the Czech Republic in 2022, serving until 2025 — a genuinely unusual second act for a venture capitalist.",
  
  sources: [
      { label: "Spark Capital — Bijan Sabet", url: "https://www.sparkcapital.com/team-members/bijan-sabet" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bijan_Sabet" }
    ]
  },
  "danny-rimer": {
    name: "Danny Rimer",
    firm: "Index Ventures",
    firmSlug: "index-ventures",
    title: "Partner",
    joinedYear: 2002,
    education: ["B.A. History & Literature, Harvard University"],
    previousExperience: [
      "Underwriting Analyst, Hambrecht & Quist — worked on the IPOs of Amazon, Netscape, and Verisign",
      "The Barksdale Group"
    ],
    investmentFocus: ["Consumer", "Design", "Marketplaces", "Creative Platforms"],
    notableInvestments: [
      { name: "Dropbox", ticker: "DBX" },
      { name: "Etsy", ticker: "ETSY" },
      { name: "Figma", ticker: "FIG" },
      { name: "Discord", ticker: null },
      { name: "Skype", ticker: null },
      { name: "King (Candy Crush)", ticker: null }
    ],
    boardSeats: ["Figma"],
    ipoCount: 4,
    majorExits: 2,
    careerTimeline: [
      { year: "1990s", event: "Works as an underwriting analyst at Hambrecht & Quist, helping take Amazon, Netscape, and Verisign public." },
      { year: "2002", event: "Joins Index Ventures and opens the firm's London office." },
      { year: "2012", event: "Opens Index's San Francisco office, bridging the firm's European and U.S. operations." },
      { year: "2015", event: "Portfolio company Etsy goes public at a $1.8 billion valuation." },
      { year: "2017", event: "Appointed an Officer of the Order of the British Empire (OBE) for services to business and charity." },
      { year: "2018", event: "Returns to Index's London office as a partner." },
      { year: "2025", event: "Portfolio company Figma goes public at a $56 billion valuation." }
    ],
    biography: "Danny Rimer joined Index Ventures in 2002, opening the firm's London office, after working as an underwriting analyst at Hambrecht & Quist where he helped take Amazon, Netscape, and Verisign public. The son of Index Securities founder Gerald Rimer and brother of Index co-founder Neil Rimer, he built a reputation for backing design-driven consumer and creative platforms — Dropbox, Etsy, Skype, Discord, and Figma among them. He led Index's Series B investment in Dropbox and has sat on the boards of Etsy, King, Skype, and Dropbox over his career. In 2017, he was appointed an Officer of the Order of the British Empire for services to business and charity, and his investment in Figma proved out spectacularly when the company went public in 2025 at a $56 billion valuation.",
    sources: [
      { label: "Index Ventures — Danny Rimer", url: "https://www.indexventures.com/team/danny-rimer/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Danny_Rimer" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/danny-rimer/" }
    ]
  },
  "josh-kopelman": {
    name: "Josh Kopelman",
    firm: "First Round Capital",
    firmSlug: "first-round-capital",
    title: "Founder & Managing Director",
    joinedYear: 2004,
    education: ["B.S. cum laude, Entrepreneurial Management & Marketing, Wharton School, University of Pennsylvania"],
    previousExperience: [
      "Co-Founder, Infonautics Corporation (1992) — IPO'd on NASDAQ in 1996",
      "Founder, Half.com (1999) — acquired by eBay in 2000",
      "Co-Founder, TurnTide (2003) — anti-spam startup acquired by Symantec six months later"
    ],
    investmentFocus: ["Seed-Stage", "Consumer Internet", "Marketplaces", "Fintech"],
    notableInvestments: [
      { name: "Uber", ticker: "UBER" },
      { name: "Square (Block)", ticker: "XYZ" },
      { name: "Roblox", ticker: "RBLX" },
      { name: "Warby Parker", ticker: "WRBY" },
      { name: "Notion", ticker: null },
      { name: "Blue Apron", ticker: null }
    ],
    boardSeats: ["The Philadelphia Inquirer (Chair Emeritus, former Chairman 2015–2024)"],
    ipoCount: 3,
    majorExits: 2,
    careerTimeline: [
      { year: "1992", event: "Co-founds Infonautics Corporation as a Wharton undergraduate." },
      { year: "1996", event: "Infonautics goes public on NASDAQ." },
      { year: "1999", event: "Founds Half.com, growing it into a major seller of used books, movies, and music." },
      { year: "2000", event: "eBay acquires Half.com." },
      { year: "2003", event: "Co-founds TurnTide, an anti-spam startup Symantec acquires just six months later." },
      { year: "2004", event: "Co-founds First Round Capital with Howard Morgan, built to reinvent seed-stage investing." },
      { year: "2010", event: "Leads First Round's roughly $1.25 million investment in UberCab — Uber's first-ever institutional funding." },
      { year: "2019", event: "Uber goes public at a valuation exceeding $70 billion." }
    ],
    biography: "Josh Kopelman was a serial entrepreneur before he was ever a venture capitalist — he co-founded Infonautics as a Wharton undergraduate in 1992 and took it public just four years later, then founded Half.com in 1999, selling it to eBay within a year. After a brief detour co-founding an anti-spam startup that Symantec acquired within six months, Kopelman co-founded First Round Capital in 2004 with Howard Morgan, built specifically to reinvent seed-stage investing with small initial checks to companies with little more than a founding team and an idea. First Round's most famous bet came in 2010, when Kopelman led the firm's roughly $1.25 million investment in a tiny startup called UberCab — the company's first-ever institutional funding, made when Uber was still working out of a First Round conference room. That seed investment became one of the highest-multiple returns in venture history when Uber went public in 2019 at a valuation exceeding $70 billion.",
 sources: [
      { label: "First Round — Josh Kopelman", url: "https://firstround.com/news/person/josh-kopelman/" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Josh_Kopelman" }
    ]
  },
  "saar-gur": {
    name: "Saar Gur",
    firm: "CRV",
    firmSlug: "crv",
    title: "General Partner",
    joinedYear: 2007,
    education: ["B.S. Biochemistry & Molecular Biology, University of Wisconsin–Madison (1998)", "M.B.A., Stanford Graduate School of Business (2003)"],
    previousExperience: [
      "VP Customer Acquisition, Adteractive (2004–2006)",
      "Co-Founder, BrightRoll (2006) — video ad platform acquired by Yahoo for $640M in 2014"
    ],
    investmentFocus: ["Consumer", "Marketplaces", "Fintech"],
    notableInvestments: [
      { name: "DoorDash", ticker: "DASH" },
      { name: "Ring", ticker: null },
      { name: "ClassPass", ticker: null },
      { name: "Patreon", ticker: null },
      { name: "Mercury", ticker: null },
      { name: "MileIQ", ticker: null }
    ],
    boardSeats: ["Cendana Capital (advisor)", "Progress Financial (advisor)"],
    ipoCount: 4,
    majorExits: 4,
    careerTimeline: [
      { year: "1998", event: "Graduates from the University of Wisconsin–Madison with a degree in biochemistry and molecular biology." },
      { year: "2003", event: "Earns an MBA from Stanford Graduate School of Business." },
      { year: "2006", event: "Co-founds BrightRoll, a video ad platform, building it out of his San Francisco apartment." },
      { year: "2007", event: "Joins CRV as a General Partner." },
      { year: "2013", event: "Leads CRV's seed investment in DoorDash, when the company is just nine weeks old." },
      { year: "2014", event: "Yahoo acquires BrightRoll for $640 million." },
      { year: "2018", event: "Amazon acquires Ring, another Gur-backed company, for $1 billion." },
      { year: "2020", event: "DoorDash goes public at a $39 billion valuation." }
    ],
    biography: "Saar Gur co-founded the video ad platform BrightRoll in 2006 — building it, in his own telling, out of his San Francisco apartment — before Yahoo acquired it for $640 million in 2014. He joined CRV as a General Partner in 2007 and built a reputation for seeding consumer and marketplace startups before their categories became obvious: he led CRV's seed investment in DoorDash when the company was just nine weeks old, and backed the smart-doorbell startup Ring after it was rejected on Shark Tank, a bet Amazon validated with a $1 billion acquisition in 2018. DoorDash went public in December 2020 at a $39 billion valuation, one of four IPOs in Gur's portfolio, and he has appeared on the Forbes Midas List five times since his 2021 debut.",
    sources: [
 { label: "CRV — Saar Gur", url: "https://www.crv.com/team/saar-gur" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/saar-gur/" }
    ]
  },
  "neeraj-agrawal": {
    name: "Neeraj Agrawal",
    firm: "Battery Ventures",
    firmSlug: "battery-ventures",
    title: "General Partner",
    joinedYear: 2000,
    education: ["B.S. Computer Science, Cornell University", "M.B.A., Harvard Business School"],
    previousExperience: [
      "Product Manager, RealNetworks",
      "Operating Executive, SkyTV"
    ],
    investmentFocus: ["SaaS", "B2B Software", "Cloud Infrastructure"],
    notableInvestments: [
      { name: "Wayfair", ticker: "W" },
      { name: "Coupa", ticker: null },
      { name: "Guidewire", ticker: "GWRE" },
      { name: "Nutanix", ticker: "NTNX" },
      { name: "Groupon", ticker: "GRPN" },
      { name: "Bazaarvoice", ticker: null }
    ],
    boardSeats: ["Braze", "Pendo.io", "Dataiku", "Workato"],
    ipoCount: 10,
    majorExits: 4,
    careerTimeline: [
      { year: "2000", event: "Joins Battery Ventures after working as a product manager at RealNetworks and an operating executive at SkyTV." },
      { year: "2011", event: "Leads Battery's first institutional investment in Wayfair, having known co-founder Niraj Shah since their Cornell days." },
      { year: "2014", event: "Wayfair goes public." },
      { year: "2017", event: "Named to the New York Times' Top 20 Venture Capitalists Worldwide." },
      { year: "2019", event: "Reaches #9 on the Forbes Midas List, his tenth consecutive year on the ranking." }
    ],
    biography: "Neeraj Agrawal joined Battery Ventures in 2000 after working as a product manager at RealNetworks and an operating executive at SkyTV, building a career focused on SaaS and B2B software investing. He led Battery's investment in Wayfair in 2011, jumping at the chance after having known co-founder Niraj Shah since their days together at Cornell University. He has since guided more than ten portfolio companies through IPOs, including Coupa, Guidewire, Nutanix, Bazaarvoice, and Groupon, and coined the widely used 'T2D3' framework for scaling SaaS companies. He has appeared on the Forbes Midas List for ten consecutive years, reaching as high as #9 in 2019, and was named to the New York Times' Top 20 Venture Capitalists Worldwide in 2017.",
sources: [
      { label: "Battery Ventures — Neeraj Agrawal", url: "https://www.battery.com/people/neeraj-agrawal/" },
      { label: "The Org", url: "https://theorg.com/org/battery-ventures/org-chart/neeraj-agrawal" }
    ]
  },
  "david-krane": {
    name: "David Krane",
    firm: "GV",
    firmSlug: "gv",
    title: "CEO & Managing Partner",
    joinedYear: 2010,
    education: ["B.A. Journalism, Indiana University Bloomington"],
    previousExperience: [
      "Corporate Communications Roles, Qualcomm & Apple",
      "Four11 (later became Yahoo Mail)",
      "Employee #84 & Director of Global Communications and Public Affairs, Google (2000–2010)"
    ],
    investmentFocus: ["Consumer Technology", "Life Sciences", "Enterprise"],
    notableInvestments: [
      { name: "Uber", ticker: "UBER" },
      { name: "Nest Labs", ticker: null },
      { name: "HomeAway", ticker: null },
      { name: "Blue Bottle Coffee", ticker: null },
      { name: "StockX", ticker: null },
      { name: "GitLab", ticker: "GTLB" }
    ],
    boardSeats: ["MGM Studios (former)"],
    ipoCount: 3,
    majorExits: 3,
    careerTimeline: [
      { year: "2000", event: "Joins Google as employee number 84, later leading global communications and public affairs." },
      { year: "2009", event: "Helps establish Google Ventures." },
      { year: "2010", event: "Becomes a General Partner at GV." },
      { year: "2011", event: "Personally leads GV's $258 million investment in Uber." },
      { year: "2016", event: "Becomes CEO and Managing Partner of GV, succeeding founding CEO Bill Maris." },
      { year: "2019", event: "Uber goes public." }
    ],
    biography: "David Krane joined Google in 2000 as employee number 84, rising to lead the company's global communications and public affairs group during its transformation into a multibillion-dollar enterprise. He helped establish Google Ventures in 2009 and became a General Partner in 2010, bringing an unusual communications-and-PR background rather than a traditional finance pedigree to venture investing. He personally led GV's landmark $258 million investment in Uber, which he has described as a 'relentless pursuit' of the founder, alongside early bets on Nest Labs, HomeAway, and Blue Bottle Coffee. Krane became CEO and Managing Partner of GV in 2016, succeeding founding CEO Bill Maris, and now oversees more than $13 billion in assets across roughly 400 active portfolio companies.",
    sources: [
      { label: "GV — David Krane", url: "https://www.gv.com/team/david-krane" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/David_Krane" }
    ]
  },
  "todd-chaffee": {
    name: "Todd Chaffee",
    firm: "IVP",
    firmSlug: "ivp",
    title: "Managing Director & General Partner",
    joinedYear: 2000,
    education: ["B.S. with honors, University of Minnesota Carlson School of Management", "Stanford Graduate School of Business Advanced Management Program", "Harvard Business School Venture Capital Program"],
    previousExperience: [
      "Management roles, American Express & TRW Information Systems Group",
      "Founder, Grand Expeditions, Inc. — luxury travel company with $200M+ in revenue",
      "SVP Advanced Payment Systems, then EVP, Visa International (1994–2000) — built Visa's venture capital arm, generating $1.2B+ in gains"
    ],
    investmentFocus: ["Media", "Travel", "Technology"],
    notableInvestments: [
      { name: "Twitter", ticker: null },
      { name: "Netflix", ticker: "NFLX" },
      { name: "Coinbase", ticker: "COIN" },
      { name: "HomeAway", ticker: null },
      { name: "Kayak", ticker: null },
      { name: "Yahoo", ticker: null }
    ],
    boardSeats: ["Domo (former)"],
    ipoCount: 10,
    majorExits: 3,
    careerTimeline: [
      { year: "1994", event: "Joins Visa as Senior Vice President of Advanced Payment Systems." },
      { year: "1995", event: "Launches Visa's venture capital arm from scratch." },
      { year: "2000", event: "Joins IVP as a General Partner, becoming the youngest Executive Vice President in Visa's history just before leaving." },
      { year: "2009", event: "Leads IVP's $44 million investment in Twitter at a $220 million valuation." },
      { year: "2013", event: "Twitter goes public." },
      { year: "2018", event: "IVP's original Twitter stake has grown into a return of nearly $5 billion." }
    ],
    biography: "Todd Chaffee built Visa's first venture capital arm from scratch starting in 1994, generating more than $1.2 billion in gains and a 32.8x return multiple before becoming the youngest Executive Vice President in Visa International's history. He joined IVP as a General Partner in 2000 and built a portfolio spanning Netflix, HomeAway, Kayak, Coinbase, and Yahoo — but his signature bet came in 2009, when he led IVP's $44 million investment in Twitter at a $220 million valuation. By 2018, that stake had grown into a return of nearly $5 billion. Chaffee has appeared on the Forbes Midas List every year from 2009 through 2018 and was named to the New York Times' Top 100 Venture Capitalists list for four consecutive years.",
    sources: [
      { label: "IVP — Todd Chaffee", url: "https://www.ivp.com/team/todd-chaffee/" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/todd-chaffee/" }
    ]
  },
  "jon-callaghan": {
    name: "Jon Callaghan",
    firm: "True Ventures",
    firmSlug: "true-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2005,
    education: ["B.A. Government, Dartmouth College", "M.B.A. with distinction, Harvard Business School"],
    previousExperience: [
      "Founder, Mountain Bike Outfitters, Inc. (1986) — founded at age 17, ran for eight years",
      "Associate, Summit Partners (1991)",
      "Greenhouse, AOL's venture capital incubator",
      "CMGI's @Ventures group (1996)",
      "Managing Director, Globespan Capital Partners"
    ],
    investmentFocus: ["Consumer", "Hardware & Wearables", "Media"],
    notableInvestments: [
      { name: "Fitbit", ticker: null },
      { name: "Peloton", ticker: "PTON" },
      { name: "BrightRoll", ticker: null },
      { name: "Ring", ticker: null },
      { name: "Automattic (WordPress)", ticker: null },
      { name: "HashiCorp", ticker: null }
    ],
    boardSeats: ["Peloton", "Madison Reed", "Fitbit (2015–2018, former Lead Independent Director)"],
    ipoCount: 4,
    majorExits: 4,
    careerTimeline: [
      { year: "1986", event: "Founds Mountain Bike Outfitters, Inc. at age 17, running the Jackson Hole shop for eight years." },
      { year: "1991", event: "Joins Summit Partners as an associate, beginning his venture career." },
      { year: "1996", event: "Joins CMGI's @Ventures group, entering the internet market early." },
      { year: "2005", event: "Co-founds True Ventures with Phil Black." },
      { year: "2015", event: "Fitbit goes public; Callaghan serves as Lead Independent Director." },
      { year: "2015", event: "Becomes Chairman of the National Venture Capital Association, serving through 2016." },
      { year: "2019", event: "Peloton, another True Ventures portfolio company, goes public." }
    ],
    biography: "Jon Callaghan founded his first company, Mountain Bike Outfitters, at just 17 years old, running the Jackson Hole shop for eight years before entering venture capital as an associate at Summit Partners in 1991. After roles at AOL's venture incubator and CMGI's early internet-focused @Ventures group, he co-founded True Ventures in 2005 with Phil Black, built around a deliberate strategy of maximizing risk at the earliest stages — backing category-defining companies before their categories even existed. That philosophy defined True's investment in Fitbit, made when the device looked like little more than a pedometer in a world with no wearables market; Callaghan served as the company's Lead Independent Director through its 2015 IPO. He has also led deals and sat on the boards of Peloton, BrightRoll, and Madison Reed, and served as Chairman of the National Venture Capital Association from 2015 to 2016.",
 sources: [
      { label: "True Ventures — Jon Callaghan", url: "https://www.trueventures.com/team/jon-callaghan" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/person/jon-callaghan" }
    ]
  },
  "shawn-carolan": {
    name: "Shawn Carolan",
    firm: "Menlo Ventures",
    firmSlug: "menlo-ventures",
    title: "Partner",
    joinedYear: 2002,
    education: ["B.S. & M.S. Electrical Engineering, University of Illinois Urbana-Champaign (highest honors)", "M.B.A., Stanford Graduate School of Business"],
    previousExperience: [
      "Developer, then Manager of Software Architecture, Open Port Technology — wrote wire protocols in C++, obtained a patent",
      "DARPA-funded fellowship in computational electromagnetics"
    ],
    investmentFocus: ["Consumer Technology", "Enterprise Software"],
    notableInvestments: [
      { name: "Uber", ticker: "UBER" },
      { name: "Roku", ticker: "ROKU" },
      { name: "Chime", ticker: null },
      { name: "Siri", ticker: null },
      { name: "PlaySpan", ticker: null },
      { name: "IMVU", ticker: null }
    ],
    boardSeats: ["Chime", "ShipBob", "Monarch Money", "OpenSpace", "Roku (through IPO, former)"],
    ipoCount: 3,
    majorExits: 4,
    careerTimeline: [
      { year: "2002", event: "Joins Menlo Ventures as an associate." },
      { year: "2004", event: "Promoted to Managing Director at age 30." },
      { year: "2005", event: "Menlo becomes Siri's first investor, years before Apple's 2010 acquisition." },
      { year: "2011", event: "Leads a $32 million Series B investment in Uber, a deal a16z had passed on." },
      { year: "2018", event: "A SoftBank-led group purchases roughly half of Menlo's Uber shares for $973 million, a 93x return." },
      { year: "2019", event: "Uber goes public." }
    ],
    biography: "Shawn Carolan joined Menlo Ventures in 2002 as an associate after earning electrical engineering degrees with highest honors from the University of Illinois and an MBA from Stanford, and was promoted to managing director just two years later at age 30. His technical background led him to some of Menlo's most distinctive early bets, including being the firm's first investor in Siri before Apple acquired it in 2010. His signature deal came in 2011, when he led Menlo's $32 million Series B investment in Uber — a deal a16z had walked away from — valuing the young ride-hailing startup at $322 million. When a SoftBank-led investor group bought roughly half of Menlo's Uber shares in 2018, the sale returned $973 million on an original $10.5 million stake, a 93x return. Carolan has also served on Roku's board through its IPO and currently sits on the boards of Chime, ShipBob, and Monarch Money.",
    sources: [
      { label: "Menlo Ventures — Shawn Carolan", url: "https://menlovc.com/team/shawn-carolan/" },
      { label: "TechCrunch", url: "https://techcrunch.com/2019/04/29/getting-a-piece-of-uber/" }
    ]
  },
  "jeff-crowe": {
    name: "Jeff Crowe",
    firm: "Norwest Venture Partners",
    firmSlug: "norwest-venture-partners",
    title: "Senior Managing Partner",
    joinedYear: 2004,
    education: ["B.A. History, summa cum laude & Phi Beta Kappa, Dartmouth College", "M.B.A., Stanford Graduate School of Business (Arjay Miller Scholar)"],
    previousExperience: [
      "Marketing & General Management, ROLM Corporation's voice messaging division",
      "Co-Founder & CEO, Edify Corporation (1990–1999) — led the company through its 1996 Nasdaq IPO; acquired by S1 Corporation in 1999",
      "President & COO, DoveBid, Inc. — grew revenue from $10M to $120M"
    ],
    investmentFocus: ["Internet", "Consumer", "Software"],
    notableInvestments: [
      { name: "Spotify", ticker: "SPOT" },
      { name: "Lending Club", ticker: "LC" },
      { name: "Jet.com", ticker: null },
      { name: "Glint", ticker: null },
      { name: "Plaid", ticker: null },
      { name: "Faire", ticker: null }
    ],
    boardSeats: ["HoneyBook", "Minted", "Madison Reed", "ICON", "Common"],
    ipoCount: 3,
    majorExits: 4,
    careerTimeline: [
      { year: "1978", event: "Graduates Dartmouth College summa cum laude and Phi Beta Kappa, majoring in history." },
      { year: "1990", event: "Co-founds Edify Corporation, a venture-backed enterprise software company." },
      { year: "1996", event: "Leads Edify through its IPO on Nasdaq." },
      { year: "1999", event: "Edify is acquired by S1 Corporation; Crowe moves to DoveBid as President and COO." },
      { year: "2004", event: "Joins Norwest Venture Partners." },
      { year: "2013", event: "Becomes Managing Partner." },
      { year: "2014", event: "Norwest is the largest institutional investor in Lending Club's IPO." },
      { year: "2018", event: "Portfolio company Spotify goes public; Glint is acquired by Microsoft-owned LinkedIn for $400 million." }
    ],
    biography: "Jeff Crowe spent his first career as a technology operator, not an investor — he co-founded the enterprise software company Edify Corporation in 1990, led it through a Nasdaq IPO in 1996, and later served as President and COO of DoveBid, growing the business auction firm's revenue twelvefold. He joined Norwest Venture Partners in 2004 and became Managing Partner in 2013, focusing on internet, consumer, and software investments. Crowe and Norwest were the largest investors in Lending Club at its 2014 IPO, and his portfolio includes Spotify's 2018 public listing, Jet.com's $3 billion acquisition by Walmart, and Glint's $400 million acquisition by Microsoft the same year Spotify went public. He has appeared on the Forbes Midas List six years running and is known for a hands-on, product-focused investing style — he has said he validated the opportunity behind Minted, the design marketplace, partly by discovering his own wife had been a loyal customer for years.",
    sources: [
   { label: "Norwest — Jeff Crowe", url: "https://www.norwest.com/team/jeff-crowe/" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/jeff-crowe/" }
    ]
  },
  "santi-subotovsky": {
    name: "Santi Subotovsky",
    firm: "Emergence Capital",
    firmSlug: "emergence-capital",
    title: "General Partner",
    joinedYear: 2010,
    education: ["B.S. Economics, Universidad de San Andrés, Argentina", "M.B.A. with Distinction, Harvard Business School"],
    previousExperience: [
      "Founder, AXG Tecnonexo (1999) — e-learning company grown to 150+ employees across Latin America and the U.S., with clients including Bank of America, Coca-Cola, and the World Bank",
      "Summer Associate, Storm Ventures",
      "Advisor, Aqua Capital Partners"
    ],
    investmentFocus: ["Cloud", "SaaS", "Enterprise Software", "Digital Media"],
    notableInvestments: [
      { name: "Zoom", ticker: "ZM" },
      { name: "Chorus", ticker: null },
      { name: "Openpath Security", ticker: null },
      { name: "Crunchbase", ticker: null },
      { name: "Logik.io", ticker: null },
      { name: "Zipline", ticker: null }
    ],
    boardSeats: ["Zoom", "Crunchbase", "Logik.io", "Zipline", "Tundra", "Class"],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "1999", event: "Founds AXG Tecnonexo, an e-learning company, in Argentina." },
      { year: "2010", event: "Moves to the U.S. after more than 70 VCs turn him down, then joins Emergence Capital as a Kauffman Fellow under Gordon Ritter's mentorship." },
      { year: "2010s", event: "Leads Emergence's investment in Zoom while it is still a little-known startup." },
      { year: "2019", event: "Zoom goes public." },
      { year: "2021", event: "Makes his Forbes Midas List debut, one of the first three Latin American venture capitalists named to the list." }
    ],
    biography: "Santi Subotovsky grew up in Argentina expecting to follow his father into mechanic work, but when no jobs were available, he founded his own company instead — AXG Tecnonexo, an e-learning platform he grew to 150 employees across Latin America and the U.S., landing clients like Bank of America and Coca-Cola. He moved to the United States in 2010 after more than 70 venture capital firms turned him down, eventually joining Emergence Capital as a Kauffman Fellow under founder Gordon Ritter's mentorship. He went on to lead Emergence's investment in Zoom when it was still a little-known startup, and remains on its board today. When Zoom founder Eric Yuan struggled to balance running the company with travel to meet investors, Subotovsky told him he'd go wherever Eric was, no matter the time or place — a gesture that came to define his hands-on investing style. He made his Forbes Midas List debut in 2021, becoming one of the first three Latin American venture capitalists to be named to the list.",
    sources: [
 { label: "Emergence Capital — Santi Subotovsky", url: "https://www.emcap.com/people/santi-subotovsky" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/santi-subotovsky/" }
    ]
  },
  "thomas-laffont": {
    name: "Thomas Laffont",
    firm: "Coatue Management",
    firmSlug: "coatue-management",
    title: "Co-Founder & Chief Investment Officer of Privates",
    joinedYear: 2003,
    education: ["B.A., Yale University (1997)"],
    previousExperience: [
      "Creative Artists Agency (CAA), Beverly Hills (1997–2003) — Agent Trainee, then Principal in the Motion Picture Group, representing film and television talent"
    ],
    investmentFocus: ["Technology", "Consumer", "Fintech"],
    notableInvestments: [
      { name: "Snap", ticker: "SNAP" },
      { name: "DoorDash", ticker: "DASH" },
      { name: "ByteDance", ticker: null },
      { name: "OpenAI", ticker: null },
      { name: "Lime", ticker: null },
      { name: "OneTrust", ticker: null }
    ],
    boardSeats: ["OneTrust", "Lime"],
    ipoCount: 2,
    majorExits: 1,
    careerTimeline: [
      { year: "1997", event: "Graduates Yale University." },
      { year: "1997", event: "Joins Creative Artists Agency in Beverly Hills, spending seven years representing film and television talent." },
      { year: "2003", event: "Joins his brother Philippe at Coatue Management to launch the firm's private investing business." },
      { year: "2013", event: "Leads an early investment in Snap, years before its IPO." },
      { year: "2017", event: "Snap goes public." },
      { year: "2020s", event: "Backs ByteDance, DoorDash, and OpenAI as Coatue's venture practice accelerates." }
    ],
    biography: "Thomas Laffont spent seven years at Creative Artists Agency in Beverly Hills, representing artists in film and television, before joining his brother Philippe at Coatue Management in 2003 to build the firm's private investing business from scratch. What started as a public equities hedge fund became one of the most prolific technology crossover investors of its era under Thomas's direction, backing ByteDance, Snap, DoorDash, and OpenAI as the venture and growth practice grew alongside Coatue's public portfolio. He led Coatue's early 2013 investment in Snap, years before its 2017 IPO, and continues to spearhead the firm's annual East Meets West Conference, which brings together technology founders and executives from the U.S. and Asia.",
    sources: [
      { label: "Coatue — Why CTEK (team bios)", url: "https://www.coatuectek.com/why-ctek" },
{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coatue_Management" }
    ]
  },
  "ajay-agarwal": {
    name: "Ajay Agarwal",
    firm: "Bain Capital Ventures",
    firmSlug: "bain-capital-ventures",
    title: "Partner",
    joinedYear: 2003,
    education: ["B.S. Electrical Engineering, Stanford University", "M.B.A., Harvard Business School"],
    previousExperience: [
      "Telemetry Design Engineer (summers), Hughes Aircraft Space and Communications Group — helped bid on the original DirecTV satellite",
      "Employee #18, Trilogy Software — ran Product and Sales for eight years, growing revenue from $1M to $300M",
      "Consultant, McKinsey & Company (Los Angeles)"
    ],
    investmentFocus: ["Early-Stage Application Software", "SaaS", "Commerce Enablement", "Product-Led Growth"],
    notableInvestments: [
      { name: "Kiva Systems", ticker: null },
      { name: "DocuSign", ticker: "DOCU" },
      { name: "SendGrid", ticker: null },
      { name: "Clari", ticker: null },
      { name: "Gainsight", ticker: null }
    ],
    boardSeats: ["Ike (former)"],
    ipoCount: 2,
    majorExits: 3,
    careerTimeline: [
      { year: "2003", event: "Joins Bain Capital Ventures as a partner, focused on early-stage application software." },
      { year: "2004", event: "Leads BCV's first institutional round in Kiva Systems, a warehouse robotics startup." },
      { year: "2012", event: "Amazon acquires Kiva Systems, rebranding it Amazon Robotics." },
      { year: "2012", event: "Named to the Forbes Midas List." },
      { year: "2013", event: "Named to the Forbes Midas List for a second consecutive year." }
    ],
    biography: "Ajay Agarwal spent two summers as a telemetry design engineer at Hughes Aircraft, helping bid on the original DirecTV satellite, before co-founding a software startup with a college classmate that grew into Trilogy Software — Agarwal joined as employee 18 and spent eight years running product and sales, growing revenue from $1 million to $300 million. After an MBA at Harvard and a stint at McKinsey, he joined Bain Capital Ventures in 2003. His signature bet came in 2004, when he led BCV's first institutional round in Kiva Systems, a warehouse robotics startup founded by Mick Mountz at a time when e-commerce was still nascent. Amazon acquired Kiva in 2012, rebranding it Amazon Robotics — its robots now power more than 2,000 fulfillment centers across Amazon's global network. Agarwal was named to the Forbes Midas List in both 2012 and 2013.",
    sources: [
      { label: "Bain Capital Ventures — Ajay Agarwal", url: "https://baincapitalventures.com/team/ajay-agarwal/" },
   { label: "Bain Capital", url: "https://www.baincapital.com/people/ajay-agarwal" }
    ]
  },
  "steve-anderson": {
    name: "Steve Anderson",
    firm: "Baseline Ventures",
    firmSlug: "baseline-ventures",
    title: "Founder",
    joinedYear: 2006,
    education: ["MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "Roles at Microsoft, eBay, and Starbucks before striking out on his own"
    ],
    investmentFocus: ["Consumer Internet", "Mobile", "Early-Stage Software"],
    notableInvestments: [
      { name: "Instagram", ticker: null },
      { name: "Stitch Fix", ticker: "SFIX" },
      { name: "PagerDuty", ticker: "PD" },
      { name: "Heroku", ticker: null },
      { name: "Machine Zone", ticker: null }
    ],
    boardSeats: ["Stitch Fix (former largest shareholder)"],
    ipoCount: 2,
    majorExits: 3,
    careerTimeline: [
      { year: "2006", event: "Founds Baseline Ventures as a one-person firm after working at Microsoft, eBay, and Starbucks." },
      { year: "2010", event: "Becomes Instagram's very first investor, writing an early check to founders Kevin Systrom and Mike Krieger." },
      { year: "2012", event: "Facebook acquires Instagram." },
      { year: "2017", event: "Stitch Fix goes public; Baseline is the company's largest shareholder." },
      { year: "2019", event: "PagerDuty goes public." }
    ],
    biography: "Steve Anderson left roles at Microsoft, eBay, and Starbucks to found Baseline Ventures in 2006, running it ever since as a genuine one-person operation — sourcing, deciding, and closing every deal himself, often within 30 minutes of meeting a founder. His defining bet came in 2010, when he became the very first investor in a photo-sharing app called Instagram, backing founders Kevin Systrom and Mike Krieger before the company had much more than an idea. Anderson turned roughly $70 million raised across his first three funds into $700 million, and was the largest shareholder in Stitch Fix at its 2017 IPO. He has also backed Heroku, Machine Zone, and PagerDuty, and remains one of the few investors in Silicon Valley still running a fund entirely solo.",
    sources: [
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/steve-anderson/" },
      { label: "Forbes — How Steve Anderson Struck Gold", url: "https://www.forbes.com/sites/ryanmac/2016/03/23/steve-anderson-baseline-ventures-instagram-venture-capital-raver/" }
    ]
  },
  "ron-conway": {
    name: "Ron Conway",
    firm: "SV Angel",
    firmSlug: "sv-angel",
    title: "Founder & Managing Partner",
    joinedYear: 2005,
    education: ["B.A. Political Science, San Jose State University"],
    previousExperience: [
      "Marketing roles, National Semiconductor Corporation (1973–1979)",
      "Co-Founder, President & CEO, Altos Computer Systems (1979–1990) — took the company public on Nasdaq in 1982",
      "Founder & Managing Partner, Angel Investors LP (1998–2005)"
    ],
    investmentFocus: ["Consumer Internet", "Early-Stage Technology"],
    notableInvestments: [
      { name: "Google", ticker: "GOOGL" },
      { name: "Facebook", ticker: "META" },
      { name: "Twitter", ticker: null },
      { name: "Airbnb", ticker: null },
      { name: "PayPal", ticker: null },
      { name: "Square", ticker: "XYZ" }
    ],
    boardSeats: [],
    ipoCount: 6,
    majorExits: 8,
    careerTimeline: [
      { year: "1979", event: "Co-founds Altos Computer Systems, taking it public on Nasdaq in 1982." },
      { year: "1998", event: "Founds Angel Investors LP, an early institutional angel fund." },
      { year: "2005", event: "Launches SV Angel, backing Google, Facebook, Twitter, and PayPal at the earliest stages." },
      { year: "2018", event: "Retires from active investing to focus on philanthropy." },
      { year: "2025", event: "SV Angel announces it will stop raising new funds, continuing to invest smaller amounts directly." }
    ],
    biography: "Ron Conway co-founded Altos Computer Systems and took it public in 1982 before turning to angel investing in the 1990s, eventually founding Angel Investors LP in 1998 and SV Angel in 2005. Known as the 'Godfather of Silicon Valley,' Conway built one of the most connected early-stage portfolios in technology history, with early stakes in Google, Facebook, Twitter, PayPal, and Airbnb. He retired from active day-to-day investing in 2018, and in 2025 SV Angel — now run alongside his sons Ronny and Topher — announced it would stop raising traditional funds in favor of writing smaller, more personal checks directly.",
    sources: [
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/ron-conway/" },
      { label: "SV Angel Team", url: "https://svangel.com/about/team" }
    ]
  },
  "jeff-clavier": {
    name: "Jeff Clavier",
    firm: "Uncork Capital",
    firmSlug: "uncork-capital",
    title: "Founding Partner",
    joinedYear: 2004,
    education: ["M.S. Computer Science, Université Paris Descartes"],
    previousExperience: [
      "CTO, Effix — French fintech startup acquired by Reuters",
      "General Partner, RVC (Reuters' $450M corporate venture fund)"
    ],
    investmentFocus: ["Seed-Stage", "Consumer Internet", "SaaS", "Marketplaces"],
    notableInvestments: [
      { name: "SendGrid", ticker: null },
      { name: "Fitbit", ticker: null },
      { name: "Eventbrite", ticker: "EB" },
      { name: "Postmates", ticker: null },
      { name: "Poshmark", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 4,
    majorExits: 5,
    careerTimeline: [
      { year: "2000", event: "Immigrates to the U.S., joining Reuters' $450 million corporate venture fund as a General Partner." },
      { year: "2004", event: "Leaves Reuters to found SoftTech VC, later renamed Uncork Capital." },
      { year: "2007", event: "Raises one of the first funds to be labeled 'micro-VC,' a $15 million Fund II." },
      { year: "2017", event: "Portfolio company SendGrid goes public." },
      { year: "2019", event: "Twilio acquires SendGrid." },
      { year: "2025", event: "Uncork raises $300 million combined across two new funds." }
    ],
    biography: "Jeff Clavier immigrated to the U.S. in 2000 after serving as CTO of a French fintech startup acquired by Reuters, joining Reuters' own $450 million corporate venture fund as a general partner. In 2004 he left to found Uncork Capital, then called SoftTech VC, one of the first dedicated seed-stage venture firms in Silicon Valley — and in 2007, one of the first funds to be labeled 'micro-VC.' Clavier and the firm he built have backed Fitbit, Eventbrite, Postmates, and Poshmark, but SendGrid stands out: Uncork backed the email infrastructure company as a seed investor, watched it go public in 2017, and saw Twilio acquire it just two years later. Clavier has stepped back from day-to-day management, with Andy McLoughlin now leading the firm as Managing Partner.",
    sources: [
      { label: "Uncork Capital — Jeff Clavier", url: "https://uncorkcapital.com/team/jeff-clavier" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Uncork_Capital" }
    ]
  },
  "chad-byers": {
    name: "Chad Byers",
    firm: "Susa Ventures",
    firmSlug: "susa-ventures",
    title: "Co-Founder & General Partner",
    joinedYear: 2013,
    education: ["B.A. Environmental Science, University of Colorado Boulder"],
    previousExperience: [
      "Senior Director of Platform, Integrate.com",
      "Marketing & Product roles, Silver Spring Networks, Bloom Energy, Electronic Arts"
    ],
    investmentFocus: ["Marketplaces", "Fintech", "Healthcare"],
    notableInvestments: [
      { name: "Robinhood", ticker: "HOOD" },
      { name: "Flexport", ticker: null },
      { name: "Newfront Insurance", ticker: null },
      { name: "Andela", ticker: null },
      { name: "Stord", ticker: null }
    ],
    boardSeats: ["Newfront Insurance", "Stord"],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "2013", event: "Co-founds Susa Ventures with Leo Polovets and Seth Berman after an 11-month fundraise for a $25 million debut fund." },
      { year: "2013", event: "Leads the firm's first-ever investment, a $250,000 seed check into Robinhood." },
      { year: "2021", event: "Robinhood goes public; Susa's original stake has grown into a return of roughly $400 million." },
      { year: "2025", event: "Susa closes its $175 million fifth flagship fund." }
    ],
    biography: "Chad Byers grew up around venture capital as the son of Kleiner Perkins co-founder Brook Byers and brother of former Google Ventures partner Blake Byers, but built his own path through operating roles at Electronic Arts, Bloom Energy, and Integrate.com before co-founding Susa Ventures in 2013 with Leo Polovets and Seth Berman. After an 11-month effort to raise a $25 million debut fund, Byers made the firm's very first investment: a $250,000 seed check into a fintech startup called Robinhood, after its founders demoed the app to him at a Sand Hill Road hotel. When Robinhood went public in 2021, that original check had grown into a return of roughly $400 million — close to a 1,000x multiple, and one of the most celebrated seed bets of its era. Susa has since raised more than $1 billion cumulatively, including a $175 million fifth flagship fund in 2025.",
    sources: [
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/chad-byers/" },
      { label: "Forbes — Meet the Robinhood Investor", url: "https://www.forbes.com/sites/kevindowd/2021/08/22/meet-the-robinhood-investor-who-turned-250000-into-400-million/" }
    ]
  },
  "charles-hudson": {
    name: "Charles Hudson",
    firm: "Precursor Ventures",
    firmSlug: "precursor-ventures",
    title: "Managing Partner & Founder",
    joinedYear: 2015,
    education: [],
    previousExperience: [
      "VP Business Development, Serious Business — acquired by Zynga in 2010",
      "Co-Founder & CEO, Bionic Panda Games",
      "Partner, SoftTech VC (now Uncork Capital) — focused on mobile infrastructure and marketplaces"
    ],
    investmentFocus: ["Pre-Seed", "Seed", "Generalist Software & Hardware"],
    notableInvestments: [
      { name: "The Athletic", ticker: null },
      { name: "Bobbie", ticker: null },
      { name: "Carrot Fertility", ticker: null },
      { name: "Modern Health", ticker: null },
      { name: "Superhuman", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "2010", event: "Serious Business, where Hudson serves as VP of Business Development, is acquired by Zynga." },
      { year: "2015", event: "Leaves Uncork Capital (then SoftTech VC) to found Precursor Ventures as a solo GP." },
      { year: "2022", event: "Portfolio company The Athletic is acquired by The New York Times for $525 million." },
      { year: "2025", event: "Precursor closes its fifth fund at $66 million." }
    ],
    biography: "Charles Hudson co-founded a mobile games startup and later served as VP of Business Development at Serious Business until its acquisition by Zynga in 2010, before joining SoftTech VC — later renamed Uncork Capital — as a partner focused on mobile infrastructure and marketplaces. In 2015, he left to found Precursor Ventures as a solo general partner, built specifically around backing first-time and underrepresented founders who often lack the traditional networks that open doors at bigger firms. Running an intentionally high-volume model of 75 to 100 investments per fund, Hudson backed The Athletic years before The New York Times acquired the sports media company for $525 million in 2022. Precursor has since raised five funds and grown past $250 million under management, with Hudson making all investment decisions himself.",
    sources: [
  { label: "TechCrunch — Charles Hudson", url: "https://techcrunch.com/author/charles-hudson/" },
      { label: "Fortune", url: "https://fortune.com/2024/06/19/precursor-ventures-founder-charles-hudson-on-investing-early-how-the-landscape-for-black-entrepreneurs-is-evolving-and-opera/" }
    ]
  },
  "eric-paley": {
    name: "Eric Paley",
    firm: "Founder Collective",
    firmSlug: "founder-collective",
    title: "Co-Founder & Partner Emeritus",
    joinedYear: 2009,
    education: ["B.A. Government, Dartmouth College", "M.B.A., Harvard Business School"],
    previousExperience: [
      "Co-Founder & CEO, Brontes Technologies — 3D imaging company spun out of MIT, acquired by 3M in 2006",
      "Entrepreneur-in-Residence, Harvard Business School"
    ],
    investmentFocus: ["Seed-Stage", "Sector-Agnostic"],
    notableInvestments: [
      { name: "Uber", ticker: "UBER" },
      { name: "The Trade Desk", ticker: "TTD" },
      { name: "PillPack", ticker: null },
      { name: "Airtable", ticker: null },
      { name: "WHOOP", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 3,
    careerTimeline: [
      { year: "2006", event: "3M acquires Brontes Technologies, the 3D imaging company Paley co-founded." },
      { year: "2009", event: "Co-founds Founder Collective with David Frankel and Micah Rosenbloom." },
      { year: "2010", event: "Leads Founder Collective's seed investment in Uber, one of the firm's earliest bets." },
      { year: "2016", event: "The Trade Desk goes public." },
      { year: "2018", event: "Amazon acquires PillPack, an early Founder Collective investment, for roughly $1 billion." },
      { year: "2019", event: "Uber goes public." }
    ],
    biography: "Eric Paley co-founded Brontes Technologies, a 3D imaging company spun out of MIT, and sold it to 3M in 2006 before earning an MBA at Harvard and co-founding Founder Collective in 2009 with David Frankel and Micah Rosenbloom. The firm built its reputation on a simple, disciplined approach: fund seed-stage founders directly, keep fund sizes small, and never take large pro-rata reserves that would dilute the very founders it backs. That approach led Founder Collective to one of its earliest seed investments in Uber in 2010, and to being among the first investors in PillPack, the online pharmacy Amazon acquired for roughly $1 billion in 2018. Paley has been named to the Forbes Midas List five times, ranking as the list's top seed investor in both 2018 and 2019, and now holds the title of Partner Emeritus at the firm.",
    sources: [
      { label: "Founder Collective — Eric Paley", url: "https://foundercollective.com/team/eric-paley/" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/eric-paley/" }
    ]
  },
  "semil-shah": {
    name: "Semil Shah",
    firm: "Haystack",
    firmSlug: "haystack",
    title: "Founder & General Partner",
    joinedYear: 2013,
    education: [],
    previousExperience: [
      "Product and operational roles at early-stage startups, most recently one acquired by Apple"
    ],
    investmentFocus: ["Pre-Seed", "Seed", "Consumer", "Cloud/SaaS", "AI"],
    notableInvestments: [
      { name: "DoorDash", ticker: "DASH" },
      { name: "Instacart", ticker: "CART" },
      { name: "Figma", ticker: "FIG" },
      { name: "HashiCorp", ticker: null },
      { name: "Carta", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 2,
    careerTimeline: [
      { year: "2013", event: "Semil Shah founds Haystack as a solo general partner." },
      { year: "2013", event: "Invests in DoorDash's $2.5 million seed round within Haystack's first six months." },
      { year: "2018", event: "Also joins Lightspeed Venture Partners as a Venture Partner." },
      { year: "2020", event: "DoorDash goes public." },
      { year: "2022", event: "Shah is named to the Forbes Midas Seed List for the first time, a recognition repeated in 2023 and 2024." }
    ],
    biography: "Semil Shah spent years in product and operational roles at early-stage startups — the most recent acquired by Apple — while building an audience through frequent writing about startups and venture capital that eventually drew in the early investors and LPs who helped fund his first bets. He founded Haystack in 2013 as one of the original solo general partners, a structure he adopted partly because he didn't fit the mold traditional venture firms were looking for at the time. Within Haystack's first six months, Shah invested in DoorDash's $2.5 million seed round — one of the earliest bets the firm ever made, and one that would grow into a company worth tens of billions of dollars by the time it went public in 2020. He has also backed Instacart, Figma, and HashiCorp — all of which either went public or were acquired for billions — and was named to the Forbes Midas Seed List in 2022, 2023, and 2024.",
    sources: [
      { label: "Haystack Team", url: "https://haystack.vc/team" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/semil-shah/" }
    ]
  },
  "rob-go": {
    name: "Rob Go",
    firm: "NextView Ventures",
    firmSlug: "nextview-ventures",
    title: "Co-Founder & Partner",
    joinedYear: 2010,
    education: ["B.S. Economics, Duke University (Magna Cum Laude)", "M.B.A., Harvard Business School"],
    previousExperience: [
      "Investor, Spark Capital — early-stage consumer internet and SaaS investments",
      "Business Product Lead, eBay — led major search, browse, and discovery product launches",
      "Consultant, The Parthenon Group",
      "Product Management roles, Fidelity Investments and BzzAgent"
    ],
    investmentFocus: ["Pre-Seed", "Seed", "Marketplaces", "Consumer", "Digital Health", "Vertical SaaS"],
    notableInvestments: [
      { name: "Attentive", ticker: null },
      { name: "ThredUp", ticker: "TDUP" },
      { name: "Boardable", ticker: null },
      { name: "Dover", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "2010", event: "Co-founds NextView Ventures with David Beisel and Lee Hower, on the thesis that the Everyday Economy needed a dedicated seed specialist outside the Bay Area." },
      { year: "2021", event: "Portfolio company ThredUp goes public on Nasdaq." }
    ],
    biography: "Rob Go spent his early career in product roles at eBay and Fidelity before joining Spark Capital as an early-stage investor focused on consumer internet and SaaS. In 2010, he co-founded NextView Ventures with David Beisel and Lee Hower on a contrarian thesis: that a dedicated seed-stage specialist firm belonged outside the Bay Area, built around what the firm calls the 'Everyday Economy' — startups that redesign the habitual moments of daily life for large populations. That focus led NextView to an early stake in Attentive, which grew into a roughly $10 billion company, and to backing ThredUp ahead of its 2021 Nasdaq IPO. Go has been recognized as one of Boston's most influential technology figures for his role building a seed ecosystem outside Silicon Valley's traditional hubs.",
    sources: [
      { label: "NextView Ventures — Rob Go", url: "https://nextview.vc/team/rob-go/" },
      { label: "Boston Globe", url: "https://www.bostonglobe.com/tech-power-players/year/2023/person/rob-go-nextview-ventures/" }
    ]
  },
  "manu-kumar": {
    name: "Manu Kumar",
    firm: "K9 Ventures",
    firmSlug: "k9-ventures",
    title: "Founder & Chief Firestarter",
    joinedYear: 2009,
    education: ["B.S. & M.S. Electrical & Computer Engineering, Carnegie Mellon University (University Honors)", "Ph.D. Computer Science, Stanford University (Distinction in Teaching)"],
    previousExperience: [
      "Founder, President & CEO, SneakerLabs — acquired in 2000",
      "VP Interactive Technologies, E.piphany",
      "Chairman & CEO, iMeet — merged with Netspoke, later acquired by Premiere Global Services"
    ],
    investmentFocus: ["Pre-Seed (a category he coined)", "New Technology", "New Markets"],
    notableInvestments: [
      { name: "Twilio", ticker: "TWLO" },
      { name: "Lyft", ticker: "LYFT" },
      { name: "DNAnexus", ticker: null },
      { name: "CrowdFlower", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 2,
    careerTimeline: [
      { year: "2000", event: "Sells his first company, SneakerLabs." },
      { year: "2009", event: "Founds K9 Ventures, coining the term 'Pre-Seed' as an investment category." },
      { year: "2010s", event: "Becomes the earliest investor in Twilio." },
      { year: "2016", event: "Twilio goes public." },
      { year: "2019", event: "Lyft, another early K9 bet, goes public." }
    ],
    biography: "Manu Kumar earned a PhD in Computer Science from Stanford after founding and selling SneakerLabs and running iMeet, before founding K9 Ventures in 2009 — a firm credited with coining the term 'Pre-Seed' as its own distinct investment category. Kumar, who calls himself K9's 'Chief Firestarter,' invests 'frighteningly early,' often before a company has a product or even a formal team, and by design makes just 4 to 6 investments a year rather than casting a wide net. That discipline led him to become the earliest investor in Twilio, years before its 2016 IPO, and an early backer of Lyft ahead of its 2019 public debut. K9 has kept its fund size small on purpose ever since, running one of the tightest, most concentrated portfolios of any firm on this page.",
    sources: [
      { label: "K9 Ventures — Meet Manu Kumar", url: "https://www.k9ventures.com/blog/2015/09/08/meet-manu-kumar-chief-firestarter-at-k9-ventures/" },
    { label: "The Twenty Minute VC", url: "https://www.thetwentyminutevc.com/manukumar" }
    ]
  },
  "ben-blumenrose": {
    name: "Ben Blumenrose",
    firm: "Designer Fund",
    firmSlug: "designer-fund",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2014,
    education: [],
    previousExperience: [
      "Design Lead / Manager, Facebook (5+ years)"
    ],
    investmentFocus: ["Design-Led Early-Stage Software", "Health", "Business Software"],
    notableInvestments: [
      { name: "Stripe", ticker: null },
      { name: "Notion", ticker: null },
      { name: "Gusto", ticker: null },
      { name: "Commure", ticker: null },
      { name: "Omada Health", ticker: null },
      { name: "Framer", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2014", event: "Co-founds Designer Fund after more than five years as a design lead at Facebook." },
      { year: "2017", event: "Launches the Bridge fellowship, connecting designers to startups." },
      { year: "2022", event: "Closes Designer Fund's $40 million Fund III." }
    ],
    biography: "Ben Blumenrose spent more than five years as a design lead at Facebook before co-founding Designer Fund in 2014, built on the then-unusual premise that design should shape a company's formation from day one rather than get bolted on after product-market fit. The firm has backed Stripe, Notion, Gusto, and Framer, among others — all still private, so none has produced a public exit yet, but Designer Fund's own materials put the combined value of its portfolio above $80 billion as of its 2022 Fund III close. Blumenrose has built the firm around operators and designers helping founders sharpen product quality and hire design talent, treating design as a compounding strategic advantage rather than a cosmetic layer.",
    sources: [
      { label: "Designer Fund", url: "https://designerfund.com" }
    ]
  },
  "victor-gutwein": {
    name: "Victor Gutwein",
    firm: "M25",
    firmSlug: "m25",
    title: "Founder & Managing Partner",
    joinedYear: 2015,
    education: ["Economics, University of Chicago"],
    previousExperience: [
      "Corporate Strategy, Walgreens",
      "Consumer Deal Team Lead, Hyde Park Angels (youngest member)"
    ],
    investmentFocus: ["Midwest Early-Stage Tech", "Software", "Fintech", "Healthcare IT"],
    notableInvestments: [
      { name: "Authenticx", ticker: null },
      { name: "XStereotype", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2015", event: "Launches M25 at age 23 with $1 million to invest exclusively in Midwest tech startups, after a stint at Walgreens." },
      { year: "2016", event: "Raises $11 million for M25's second fund." },
      { year: "2019", event: "Raises $31.8 million for M25's third fund alongside partner Mike Asem." },
      { year: "2025", event: "Closes M25's largest fund yet, $36.5 million Fund IV, on the firm's 10th anniversary." }
    ],
    biography: "Victor Gutwein grew up in rural Indiana in a family of entrepreneurs, launched a bubblegum vending business in middle school, and after a stint on Walgreens' corporate strategy team, started M25 at age 23 with $1 million to invest exclusively in Midwest tech startups — a region he felt was constantly overlooked by coastal venture capital. He simultaneously became the youngest member of Hyde Park Angels, investing in 21 startups as its consumer deal team lead. Alongside founding partner Mike Asem, Gutwein grew M25 into the most active early-stage investor in the Midwest, backing more than 150 startups across 11 states and closing the firm's largest fund yet, $36.5 million, on its 10-year anniversary in 2025. The firm's portfolio has gone on to raise more than $600 million in follow-on funding.",
    sources: [
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/victor-gutwein/" },
      { label: "Crain's Chicago Business", url: "https://www.chicagobusiness.com/finance-banking/m25-raises-365m-fund-amid-venture-slowdown/" }
    ]
  },
  "sumeet-singh": {
    name: "Sumeet Singh",
    firm: "Worldbuild",
    firmSlug: "worldbuild",
    title: "Founder & Managing Partner",
    joinedYear: 2025,
    education: ["Georgetown University"],
    previousExperience: [
      "Investor, Andreessen Horowitz (a16z)",
      "Roles at Brigit and Nyca Partners"
    ],
    investmentFocus: ["AI Infrastructure", "Developer Tools", "Aerospace", "Energy"],
    notableInvestments: [
      { name: "SF Compute", ticker: null },
      { name: "Browserbase", ticker: null },
      { name: "Cowboy Space Corp", ticker: null },
      { name: "Truffle", ticker: null },
      { name: "Fractal Power", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2025", event: "Begins building Worldbuild after roles at a16z, Brigit, and Nyca Partners." },
      { year: "2026", event: "Closes Worldbuild's $30 million debut fund." }
    ],
    biography: "Sumeet Singh spent time as an investor at Andreessen Horowitz and in operating and investing roles at Brigit and Nyca Partners before founding Worldbuild, a firm built around the idea that the best early bets require genuine intellectual conviction rather than pattern-matching against what other investors are already doing. Worldbuild closed a $30 million debut fund in 2026, backing early companies including SF Compute and Browserbase — bets Singh has said he was able to make early precisely because his thesis-driven approach let him form a point of view before a company looked obvious to generalist investors.",
    sources: [
      { label: "Worldbuild", url: "https://worldbuild.vc" }
    ]
  },
  "anu-duggal": {
    name: "Anu Duggal",
    firm: "Female Founders Fund",
    firmSlug: "female-founders-fund",
    title: "Founding Partner",
    joinedYear: 2014,
    education: [],
    previousExperience: [],
    investmentFocus: ["Digital Health", "AI-First Vertical Software", "Beauty & Personal Care", "Deep Tech"],
    notableInvestments: [
      { name: "Rent the Runway", ticker: "RENT" },
      { name: "Maven Clinic", ticker: null },
      { name: "Zola", ticker: null },
      { name: "Tala", ticker: null },
      { name: "Billie", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "2014", event: "Founds Female Founders Fund in New York City." },
      { year: "2021", event: "Portfolio company Rent the Runway goes public on Nasdaq." },
      { year: "2025", event: "Closes Female Founders Fund's $29 million Fund IV, bringing total firm capital to $140 million." }
    ],
    biography: "Anu Duggal founded Female Founders Fund in 2014 around a straightforward premise: female founders were being systematically underfunded relative to their performance, and a firm built specifically to be their first institutional check could both correct that gap and generate strong returns. The firm backed Jennifer Hyman's Rent the Runway years before its 2021 Nasdaq listing, along with Maven Clinic, Zola, and Tala. Duggal has scaled Female Founders Fund to $140 million in total capital across its funds, most recently closing a $29 million Fund IV in December 2025, while keeping the firm's core focus on seed-stage healthcare, AI-first software, and consumer categories underrepresented founders are building in.",
    sources: [
      { label: "Female Founders Fund", url: "https://femalefoundersfund.com" }
    ]
  },
  "amanda-robson": {
    name: "Amanda Robson",
    firm: "Modern Technical Fund",
    firmSlug: "modern-technical-fund",
    title: "Founder (Solo GP)",
    joinedYear: 2025,
    education: [],
    previousExperience: [
      "Partner, Cowboy Ventures (~5 years; youngest partner in firm history)",
      "Investor, Norwest Venture Partners",
      "Investment Banking, William Blair"
    ],
    investmentFocus: ["Infrastructure", "Data", "Security", "Developer Tooling"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2020s", event: "Becomes the youngest partner in Cowboy Ventures' history after roles at Norwest Venture Partners and William Blair." },
      { year: "2025", event: "Leaves Cowboy Ventures to found Modern Technical Fund, closing a $22 million debut fund." }
    ],
    biography: "Amanda Robson started her career in investment banking at William Blair before moving into venture capital at Norwest Venture Partners and then Cowboy Ventures, where she became the youngest partner in the firm's history. In 2025, she left to found Modern Technical Fund as a solo general partner, built specifically to back highly technical founders — often in infrastructure, data, and security — who tend to look strongest to specialists long before they look obvious to generalist investors.",
    sources: [
      { label: "Modern Technical Fund", url: "https://moderntechnical.com" }
    ]
  },
  "rex-salisbury": {
    name: "Rex Salisbury",
    firm: "Cambrian Ventures",
    firmSlug: "cambrian-ventures",
    title: "Founder & General Partner",
    joinedYear: 2022,
    education: [],
    previousExperience: [
      "Fintech Investor, Andreessen Horowitz (a16z)",
      "Software Engineer"
    ],
    investmentFocus: ["Fintech", "Fintech Infrastructure"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2022", event: "Founds Cambrian Ventures after a career as a software engineer and fintech investor at a16z, closing a $20 million debut fund." },
      { year: "2025", event: "Closes Cambrian's second $20 million fintech-focused fund." }
    ],
    biography: "Rex Salisbury worked as a software engineer before becoming a fintech investor at Andreessen Horowitz, where he built one of the best-networked founder communities in the category. In 2022, he used that network to launch Cambrian Ventures as a solo general partner, built around the thesis that fintech has captured only a small share of global financial-services value and that meaningful new category formation is still ahead. Salisbury has kept Cambrian focused exclusively on early-stage fintech through two $20 million funds, even as the broader venture cycle made specialist strategies harder to sustain.",
    sources: [
      { label: "Cambrian Ventures", url: "https://cambrian.vc" }
    ]
  },
  "sydney-thomas": {
    name: "Sydney Thomas",
    firm: "Symphonic Capital",
    firmSlug: "symphonic-capital",
    title: "Founder & General Partner",
    joinedYear: 2022,
    education: [],
    previousExperience: [
      "Early-stage investing roles prior to founding Symphonic Capital",
      "Creator, Black Women in VC list"
    ],
    investmentFocus: ["Health", "Wealth", "Climate Resilience"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2022", event: "Begins building the thesis behind Symphonic Capital." },
      { year: "2025", event: "Closes Symphonic Capital's $13.5 million debut fund in April." }
    ],
    biography: "Sydney Thomas built one of the most-cited resources in early-stage venture, the Black Women in VC list, before founding Symphonic Capital around a specific thesis: that the essential systems ordinary households depend on — healthcare access, financial resilience, climate adaptation — are chronically underbuilt and underfinanced relative to how much they matter. Symphonic closed its $13.5 million debut fund in April 2025, backing pre-seed and seed founders, often using AI, working to close access gaps in health and wealth for what Thomas has described as the 99%.",
    sources: [
      { label: "Symphonic Capital", url: "https://symphoniccapital.com" }
    ]
  },
  "nik-milanovic": {
    name: "Nik Milanović",
    firm: "The Fintech Fund",
    firmSlug: "the-fintech-fund",
    title: "Founder & General Partner",
    joinedYear: 2022,
    education: [],
    previousExperience: [
      "Founder, This Week in Fintech (media and community platform)"
    ],
    investmentFocus: ["Fintech", "Crypto", "DeFi"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2022", event: "Launches The Fintech Fund, building on the community from This Week in Fintech." },
      { year: "2024", event: "Closes The Fintech Fund's $10 million Fund II in September." }
    ],
    biography: "Nik Milanović built This Week in Fintech into one of the most-read newsletters and communities in the fintech industry, then converted that platform into The Fintech Fund in 2022 — a genuinely unusual media-to-fund path in venture capital. The fund closed a $10 million second vehicle in September 2024, investing across fintech, crypto, and DeFi globally, with Milanović's global fintech network functioning as the firm's primary sourcing advantage.",
 sources: [
      { label: "The Fintech Fund", url: "https://thefintechfund.com" }
    ]
  },
  "greg-sands": {
    name: "Greg Sands",
    firm: "Costanoa Ventures",
    firmSlug: "costanoa-ventures",
    title: "Founder & Managing Partner",
    joinedYear: 2012,
    education: [],
    previousExperience: [
      "Managing Director, Sutter Hill Ventures",
      "First Product Manager, Netscape",
      "Business Development Manager, Cisco"
    ],
    investmentFocus: ["Applied AI", "AI & Data Infrastructure", "Cybersecurity", "National Security", "Fintech"],
    notableInvestments: [
      { name: "SGNL", ticker: null },
      { name: "VictorOps", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 2,
    careerTimeline: [
      { year: "2012", event: "Founds Costanoa Ventures after roles as Netscape's first product manager and a Managing Director at Sutter Hill Ventures." },
      { year: "2013", event: "Publishes Costanoa's investment thesis behind VictorOps." },
      { year: "2017", event: "Closes Costanoa's $175 million Fund III." },
      { year: "2018", event: "VictorOps, backed at Series A, is acquired by Splunk." },
      { year: "2026", event: "SGNL, another Costanoa portfolio company, is acquired by CrowdStrike." }
    ],
    biography: "Greg Sands was Netscape's first product manager and a business development manager at Cisco before becoming a Managing Director at Sutter Hill Ventures, then founding Costanoa Ventures in 2012 to lead Seed and Series A rounds in complex, high-impact markets where deep sector expertise matters — applied AI, data infrastructure, cybersecurity, and fintech among them. Costanoa backed VictorOps at Series A, which Splunk acquired in 2018, and more recently backed SGNL, acquired by CrowdStrike in January 2026. The firm closed its $175 million Fund III in 2017 and has stayed disciplined about leading rounds in categories it believes require real technical depth to evaluate correctly.",
    sources: [
      { label: "Costanoa Ventures", url: "https://www.costanoavc.com" }
    ]
  },
  "rick-zullo": {
    name: "Rick Zullo",
    firm: "Equal Ventures",
    firmSlug: "equal-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2020,
    education: ["Columbia Business School"],
    previousExperience: [
      "Investor, Lightbank",
      "Investor, Lightview Capital",
      "Deloitte"
    ],
    investmentFocus: ["Climate", "Insurance", "Retail", "Supply Chain"],
    notableInvestments: [
      { name: "SmartHop", ticker: null },
      { name: "David Energy", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2020", event: "Co-founds Equal Ventures, launching a $56 million debut fund." },
      { year: "2022", event: "Closes a second fund and opportunity vehicle." },
      { year: "2024", event: "Announces $175 million in combined capital to 'bridge the digital divide' by bringing software into legacy industries." }
    ],
    biography: "Rick Zullo worked at Deloitte and as an investor at Lightbank and Lightview Capital before co-founding Equal Ventures in 2020, built around a deliberately research-heavy, thesis-driven approach to backing founders bringing software into legacy industries — climate, insurance, retail, and supply chain among them — rather than chasing generic software categories. Zullo has been closely associated with Equal's investments in SmartHop and David Energy, and helped grow the firm to $175 million in combined capital across its second fund and opportunity vehicle by 2024, while continuing to publish detailed sector research across insurance and climate.",
    sources: [
      { label: "Equal Ventures", url: "https://www.equal.vc" }
    ]
  },
  "nnamdi-okike": {
    name: "Nnamdi Okike",
    firm: "645 Ventures",
    firmSlug: "645-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2013,
    education: [],
    previousExperience: [
      "Investor, Insight Partners — credited with 19 investments and nine exits totaling more than $9B in exit value, including Mimecast and Privalia"
    ],
    investmentFocus: ["Fintech", "Enterprise", "Healthtech", "Cybersecurity", "Infrastructure & Developer Tools"],
    notableInvestments: [
      { name: "Iterable", ticker: null },
      { name: "Overtime", ticker: null },
      { name: "LeagueApps", ticker: null },
      { name: "Oort", ticker: null },
      { name: "RentSpree", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 2,
    careerTimeline: [
      { year: "2013", event: "Co-founds 645 Ventures after a career as an investor at Insight Partners." },
      { year: "2014", event: "Begins deploying 645's software-powered investing strategy." },
      { year: "2020", event: "Closes 645's $160 million Fund III." },
      { year: "2023", event: "Named to the Forbes Midas Brink list." }
    ],
    biography: "Nnamdi Okike spent his early career as an investor at Insight Partners, where his track record includes 19 investments and nine exits totaling more than $9 billion in exit value, including Mimecast and Privalia. He co-founded 645 Ventures in 2013, building the firm around an internal data platform, Voyager, that combines early-stage investing with a large operating network. 645's own portfolio has produced exits including Oort, acquired by Cisco, and LeagueApps, acquired by Accel-KKR, alongside investments in Iterable, Overtime, and RentSpree. The firm closed its $160 million Fund III in 2020, and Okike was named to the Forbes Midas Brink list in 2023.",
    sources: [
      { label: "645 Ventures", url: "https://www.645ventures.com" }
    ]
  },
  "nihal-mehta": {
    name: "Nihal Mehta",
    firm: "Eniac Ventures",
    firmSlug: "eniac-ventures",
    title: "Co-Founder & General Partner",
    joinedYear: 2009,
    education: [],
    previousExperience: [
      "Founder of five startups since 1999, including ipsh! (acquired by Omnicom) and LocalResponse (acquired by BlueCava)"
    ],
    investmentFocus: ["Technology", "Software", "Robotics", "SaaS"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "1999", event: "Begins founding the first of five startups, ahead of a later shift into venture capital." },
      { year: "2009", event: "Co-founds Eniac Ventures as a seed-stage specialist." },
      { year: "2025", event: "Closes Eniac's $160 million Fund VI." }
    ],
    biography: "Before co-founding Eniac Ventures in 2009, Nihal Mehta founded five startups himself, including ipsh!, acquired by Omnicom, and LocalResponse, acquired by BlueCava — a founder-first background that shaped Eniac's seed-stage, product-market-fit-focused approach ever since. The firm has grown its platform model with each successive fund, closing its sixth, at $160 million, in 2025, and continues to invest specifically at the seed stage across technology, software, robotics, and SaaS.",
    sources: [
      { label: "Eniac Ventures", url: "https://eniac.vc" }
    ]
  },
  "eva-ho": {
    name: "Eva Ho",
    firm: "Fika Ventures",
    firmSlug: "fika-ventures",
    title: "Co-Founder & General Partner",
    joinedYear: 2016,
    education: ["Harvard University", "Cornell University"],
    previousExperience: [
      "Founding General Partner, Susa Ventures",
      "Founding Executive, Factual",
      "Senior Product Marketing Manager, Google and YouTube"
    ],
    investmentFocus: ["B2B Software", "Fintech", "Marketplaces", "AI Services", "Manufacturing", "Supply Chain"],
    notableInvestments: [
      { name: "SGNL", ticker: null },
      { name: "Openpath Security", ticker: null },
      { name: "Berbix", ticker: null },
      { name: "Ivo", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 3,
    careerTimeline: [
      { year: "2016", event: "Co-founds Fika Ventures after roles at Google, YouTube, Factual, and as a founding partner at Susa Ventures." },
      { year: "2021", event: "Fika is widely discussed as a $77 million seed fund." },
      { year: "2024", event: "Closes Fika's $160 million Fund IV." },
      { year: "2026", event: "Portfolio company SGNL is acquired by CrowdStrike for $740 million." }
    ],
    biography: "Eva Ho was a senior product marketing manager at Google and YouTube, then a founding executive at Factual and a founding general partner at Susa Ventures, before co-founding Fika Ventures in 2016 around the idea that founder service — business development, recruiting, and capital strategy help — is itself the product a firm sells. That approach helped Fika back SGNL, which CrowdStrike acquired for $740 million in 2026, along with earlier exits like Openpath Security to Motorola Solutions and Berbix to Socure. Fika closed its $160 million Fund IV in 2024.",
    sources: [
      { label: "Fika Ventures", url: "https://fika.vc" }
    ]
  },
  "blair-garrou": {
    name: "Blair Garrou",
    firm: "Mercury Fund",
    firmSlug: "mercury-fund",
    title: "Managing Partner & Co-Founder",
    joinedYear: 2005,
    education: [],
    previousExperience: [
      "CEO, Intermat",
      "Principal, Genesis Park",
      "Director of Operations, Houston Technology Center",
      "Investment Banking, Credit Analysis, and Auditing"
    ],
    investmentFocus: ["AI", "Blockchain", "Frontier Technologies", "Defense & Security"],
    notableInvestments: [
      { name: "Performix", ticker: null },
      { name: "PactSafe", ticker: null },
      { name: "PatientIO", ticker: null },
      { name: "Venus Aerospace", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 3,
    careerTimeline: [
      { year: "2005", event: "Co-founds Mercury Fund after roles as CEO of Intermat and Principal at Genesis Park." },
      { year: "2021", event: "Portfolio company Performix is acquired by Honeywell." },
      { year: "2023", event: "Closes Mercury's $160 million Fund V." },
      { year: "2025", event: "Leads a major financing for defense-tech company Venus Aerospace as Mercury expands into frontier technology." }
    ],
    biography: "Blair Garrou spent his early career in investment banking, credit analysis, and auditing before becoming CEO of Intermat and a principal at Genesis Park, then co-founded Mercury Fund in 2005 on the premise that innovation is not a coastal phenomenon — building the firm into one of the most active early-stage investors across the U.S. Midcontinent. Mercury's portfolio has produced exits including Performix, acquired by Honeywell in 2021, and PactSafe, acquired by Ironclad. Garrou closed Mercury's $160 million Fund V in 2023 and has led the firm's recent expansion into defense and frontier technology, including a major financing for Venus Aerospace.",
    sources: [
      { label: "Mercury Fund", url: "https://mercuryfund.com" }
    ]
  },
  "jonathan-lehr": {
    name: "Jonathan Lehr",
    firm: "Work-Bench",
    firmSlug: "work-bench",
    title: "Co-Founder & General Partner",
    joinedYear: 2013,
    education: ["Bioengineering, University of Pennsylvania"],
    previousExperience: [
      "Office of the CIO, IT, Morgan Stanley"
    ],
    investmentFocus: ["Enterprise Software", "AI/ML", "Developer Tools", "Infrastructure", "Security"],
    notableInvestments: [
      { name: "Cockroach Labs", ticker: null },
      { name: "CoreOS", ticker: null },
      { name: "Semmle", ticker: null },
      { name: "FireHydrant", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 4,
    careerTimeline: [
      { year: "2013", event: "Co-founds Work-Bench in New York, building an enterprise-tech community around the firm from day one." },
      { year: "2016", event: "Publicly writes about backing Cockroach Labs as a foundational enterprise infrastructure bet." },
      { year: "2025", event: "Announces Work-Bench's new $160 million fund." }
    ],
    biography: "Jonathan Lehr worked in Morgan Stanley's Office of the CIO before co-founding Work-Bench in 2013, built around a highly specialized bet: that distribution, customer access, and enterprise community-building are as much a part of what a firm sells founders as the capital itself. Lehr publicly championed Cockroach Labs as a foundational enterprise infrastructure bet years before it became a major database company, and Work-Bench's broader portfolio has produced exits including CoreOS to Red Hat, Semmle to GitHub, and FireHydrant to Freshworks. The firm announced its new $160 million fund in 2025.",
    sources: [
      { label: "Work-Bench", url: "https://www.work-bench.com" }
    ]
  },
  "mark-grovic": {
    name: "Mark Grovic",
    firm: "New Markets Venture Partners",
    firmSlug: "new-markets-venture-partners",
    title: "Co-Founder & General Partner",
    joinedYear: 2003,
    education: ["B.A. Political Economies (Honors), University of California, Berkeley", "J.D., Georgetown University"],
    previousExperience: [
      "Portfolio Manager, Small Enterprise Assistance Funds (SEAF)",
      "Director, Baltic Small Equity Fund",
      "Co-Founder & Principal, Templeton Emerging Europe Fund",
      "Portfolio Manager of Private Equities, Calvert Group",
      "Professor of Private Equity, University of Maryland R.H. Smith School of Business (18 years)"
    ],
    investmentFocus: ["Education Technology", "Workforce Development", "Social-Impact Software"],
    notableInvestments: [
      { name: "PowerSchool", ticker: null },
      { name: "Galvanize", ticker: null },
      { name: "MediaSolv", ticker: null },
      { name: "Lightningcast", ticker: null },
      { name: "Moodlerooms", ticker: null }
    ],
    boardSeats: ["Credly", "Graduation Alliance"],
    ipoCount: 1,
    majorExits: 5,
    careerTimeline: [
      { year: "1992", event: "Begins investing in high-growth companies, including impact-oriented work at Calvert Group." },
      { year: "2003", event: "Co-founds New Markets Venture Partners in Fulton, Maryland." },
      { year: "2021", event: "Portfolio company PowerSchool goes public on NYSE." },
      { year: "2023", event: "Closes New Markets' oversubscribed fifth fund at over $160 million." }
    ],
    biography: "Mark Grovic has been investing in high-growth companies since 1992, including early impact-investing work at Calvert Group decades before ESG became mainstream, and co-founded the Templeton Emerging Europe Fund before co-founding New Markets Venture Partners in 2003. The firm has stayed exclusively focused on education and workforce technology for more than two decades, generating over $3.3 billion in enterprise value and completing 21 realized exits, including PowerSchool's 2021 IPO and Galvanize's acquisition by K12. Grovic closed New Markets' oversubscribed fifth fund at over $160 million in 2023, and has also taught private equity for 18 years as a professor at the University of Maryland's R.H. Smith School of Business.",
    sources: [
      { label: "Forbes", url: "https://www.forbes.com/sites/dereknewton/2023/05/31/meet-mark-grovic-veteran-education-investor-at-new-market-venture-partners/" },
      { label: "New Markets Venture Partners", url: "https://www.newmarketsvp.com/members/mark-grovic" }
    ]
  },
  "david-hall": {
    name: "David Hall",
    firm: "Rise of the Rest Seed Fund",
    firmSlug: "rise-of-the-rest-seed-fund",
    title: "Managing Partner",
    joinedYear: 2006,
    education: [],
    previousExperience: [
      "Investor, Revolution Growth",
      "Investor, Revolution Ventures"
    ],
    investmentFocus: ["Geographically Broad Early-Stage Investing (Outside Silicon Valley, Boston, and New York)"],
    notableInvestments: [
      { name: "Anduril", ticker: null },
      { name: "AppHarvest", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "2006", event: "Joins Revolution, working across Revolution Growth and Revolution Ventures." },
      { year: "2014", event: "The Rise of the Rest initiative launches with its first bus tour across overlooked startup regions." },
      { year: "2017", event: "The dedicated $150 million Rise of the Rest Seed Fund launches." },
      { year: "2018", event: "First fund investments are announced, including the fund's first check into Anduril." }
    ],
    biography: "David Hall joined Revolution in 2006 and worked across both Revolution Growth and Revolution Ventures before taking on leadership of the Rise of the Rest Seed Fund, a $150 million vehicle built around one of the clearest geography-led theses in venture capital: back high-growth startups outside Silicon Valley, Boston, and New York, and use Revolution's platform and brand to strengthen local ecosystems. The fund made its first-ever investment in Anduril at seed, years before the company became a major defense-technology player, and AppHarvest became Rise of the Rest's first publicly traded portfolio company, though it is no longer independently traded today.",
    sources: [
      { label: "Revolution", url: "https://www.revolution.com/rise-of-the-rest/" }
    ]
  },
  "paul-martino": {
    name: "Paul Martino",
    firm: "Bullpen Capital",
    firmSlug: "bullpen-capital",
    title: "Founder & Managing Partner",
    joinedYear: 2010,
    education: [],
    previousExperience: [],
    investmentFocus: ["Post-Seed / Early-Stage Technology (Generalist)"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2010s", event: "Founds Bullpen Capital around a timing-based 'post-seed' investing strategy, rather than a sector specialization." },
      { year: "2022", event: "Raises Bullpen's largest fund yet, $145 million Fund VI." },
      { year: "2023", event: "Public reporting describes the fund as centered on backing overlooked 'unloved gems' that already have product-market fit." }
    ],
    biography: "Paul Martino founded Bullpen Capital around a genuinely distinct strategy in venture capital: rather than specializing by sector, Bullpen specializes by timing, investing just after a company's earliest angel or seed round in businesses that have found real product-market fit but remain overlooked by other investors. That 'post-seed' and 'unloved gems' thesis has carried the firm through more than a decade of investing, including its largest fund yet, a $145 million Fund VI raised in 2022.",
    sources: [
      { label: "Bullpen Capital", url: "https://www.bullpencapital.com" }
    ]
  },
  "henri-pierre-jacques": {
    name: "Henri Pierre-Jacques",
    firm: "Harlem Capital",
    firmSlug: "harlem-capital",
    title: "Managing Partner & Co-Founder",
    joinedYear: 2015,
    education: ["Harvard Business School", "Duke University"],
    previousExperience: [
      "Private Equity",
      "Investment Banking"
    ],
    investmentFocus: ["Industry-Agnostic (Enterprise & Consumer Technology)", "Diverse Founders"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2015", event: "Co-founds Harlem Capital as an angel syndicate, launched in a Harlem living room." },
      { year: "2019", event: "Closes Harlem Capital's $40 million inaugural institutional fund." },
      { year: "2021", event: "Closes Harlem Capital's $134 million Fund II." },
      { year: "2023", event: "Harlem Capital has raised two funds and made 60 investments." }
    ],
    biography: "Henri Pierre-Jacques co-founded Harlem Capital in 2015 as an angel syndicate started in a Harlem living room, after earlier work in private equity and investment banking and an education at Duke University and Harvard Business School. He has built the firm around a multi-decade mission — changing the face of entrepreneurship by backing diverse founders — while still operating with the discipline of a focused seed fund, writing roughly $750,000 to $1.5 million checks for meaningful ownership stakes. Harlem Capital grew from a $40 million inaugural fund in 2019 to a $134 million Fund II in 2021, and had made 60 investments across both funds by 2023.",
    sources: [
      { label: "Harlem Capital", url: "https://www.harlem.capital" }
    ]
  },
  "jenny-lefcourt": {
    name: "Jenny Lefcourt",
    firm: "Freestyle",
    firmSlug: "freestyle",
    title: "General Partner",
    joinedYear: 2014,
    education: ["Wharton School, University of Pennsylvania", "Stanford Graduate School of Business"],
    previousExperience: [
      "Certified Public Accountant, New York",
      "Co-Founder, WeddingChannel (founded while at Stanford GSB)"
    ],
    investmentFocus: ["Generalist Early-Stage Technology"],
    notableInvestments: [
      { name: "Discord", ticker: null },
      { name: "BetterUp", ticker: null },
      { name: "Crexi", ticker: null },
      { name: "Artera", ticker: null },
      { name: "Narvar", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "1999", event: "Co-founds WeddingChannel while attending Stanford Graduate School of Business, after working as a CPA in New York." },
      { year: "2014", event: "Joins Freestyle as a General Partner." },
      { year: "2022", event: "Freestyle closes its $130 million Fund VI." },
      { year: "2025", event: "Named to Business Insider's Seed 40 list." }
    ],
    biography: "Jenny Lefcourt worked as a CPA in New York before co-founding WeddingChannel while attending Stanford Graduate School of Business, giving her direct founder experience before she became a full-time investor. She joined Freestyle as a General Partner in 2014, backing early-stage generalist technology companies including Discord, BetterUp, Crexi, and Narvar, and helped the firm close its $130 million Fund VI in 2022. Lefcourt was named to Business Insider's Seed 40 list in 2025, reflecting Freestyle's pitch to founders: experienced seed leadership grounded in real operator empathy rather than a narrow sector thesis.",
sources: [
      { label: "Freestyle", url: "https://freestyle.vc" }
    ]
  },
  "david-sacks": {
    name: "David Sacks",
    firm: "Craft Ventures",
    firmSlug: "craft-ventures",
    title: "Partner & Co-Founder",
    joinedYear: 2017,
    education: ["B.A. Economics, Stanford University", "J.D., University of Chicago Law School"],
    previousExperience: [
      "First Product Leader & COO, PayPal — part of the group later nicknamed the 'PayPal Mafia'",
      "Founder, Yammer — an enterprise social networking company acquired by Microsoft for $1.2 billion"
    ],
    investmentFocus: ["SaaS", "Marketplaces", "AI", "Cloud/Infrastructure", "Fintech"],
    notableInvestments: [
      { name: "Reddit", ticker: "RDDT" },
      { name: "Airbnb", ticker: null },
      { name: "Facebook", ticker: "META" },
      { name: "Palantir", ticker: "PLTR" },
      { name: "SpaceX", ticker: "SPCX" },
      { name: "Uber", ticker: "UBER" }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "1999", event: "Joins PayPal as its first product leader, later becoming COO." },
      { year: "2008", event: "Founds Yammer, an enterprise social networking company." },
      { year: "2012", event: "Microsoft acquires Yammer for $1.2 billion." },
      { year: "2017", event: "Co-founds Craft Ventures with Bill Lee." },
      { year: "2023", event: "Craft closes its IV and Growth II funds, bringing total AUM to $3.3 billion." },
      { year: "2024", event: "Portfolio company Reddit goes public on NYSE." }
    ],
    biography: "David Sacks was PayPal's first product leader and later its COO, part of the group later nicknamed the 'PayPal Mafia,' before founding Yammer, an enterprise social networking company he built and sold to Microsoft for $1.2 billion. He co-founded Craft Ventures in 2017 with Bill Lee, built around a deliberately operator-led model — the firm has grown to $3.3 billion in total assets under management following its 2023 Craft IV and Growth II funds. Craft's early investments include Airbnb, Facebook, Palantir, and SpaceX, and its 2017 investment in Reddit was still on the books when the company went public in 2024. Sacks has become known for being unusually public about his own investing framework, and has since taken on a public policy role advising on AI and crypto matters.",
  sources: [
      { label: "Craft Ventures — Announcing $1.3B", url: "https://www.craftventures.com/articles/announcing-1-3-billion-for-craft-ventures-iv-and-growth-ii" },
      { label: "Craft Ventures", url: "https://www.craftventures.com" }
    ]
  },
  "navin-chaddha": {
    name: "Navin Chaddha",
    firm: "Mayfield",
    firmSlug: "mayfield",
    title: "Managing Partner",
    joinedYear: 2006,
    education: ["B.Tech Electrical Engineering, IIT Delhi (Distinguished Alumni Award)", "M.S. Electrical Engineering, Stanford University"],
    previousExperience: [
      "Co-Founder, VXtreme — streaming media platform acquired by Microsoft to become Windows Media",
      "Co-Founder, iBeam Broadcasting — streaming media content delivery network, taken public on Nasdaq (IBEM)",
      "Co-Founder, Rivio — SaaS provider for small businesses, later merged with CPA.com"
    ],
    investmentFocus: ["AI", "Enterprise Software", "Consumer Technology", "Human & Planetary Health"],
    notableInvestments: [
      { name: "Lyft", ticker: "LYFT" },
      { name: "HashiCorp", ticker: null },
      { name: "Poshmark", ticker: null },
      { name: "Marketo", ticker: null },
      { name: "SolarCity", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 18,
    majorExits: 29,
    careerTimeline: [
      { year: "1992", event: "Graduates IIT Delhi with a B.Tech in Electrical Engineering, then begins a PhD at Stanford." },
      { year: "1996", event: "Leaves his PhD to found VXtreme, later acquired by Microsoft to become Windows Media." },
      { year: "2000s", event: "Founds iBeam Broadcasting, taking it public on Nasdaq, then founds Rivio, later merged with CPA.com." },
      { year: "2006", event: "Joins Mayfield as Managing Partner." },
      { year: "2019", event: "Portfolio company Lyft goes public." },
      { year: "2023", event: "Leads Mayfield XVII and Select III to a combined $955 million close, lifting total AUM to $3 billion." }
    ],
    biography: "Navin Chaddha grew up in India, graduated from IIT Delhi, and began a PhD at Stanford before walking away to found VXtreme, a streaming media platform later acquired by Microsoft to become Windows Media. He went on to found two more companies — iBeam Broadcasting, which he took public on Nasdaq, and Rivio, later merged with CPA.com — before joining Mayfield as Managing Partner in 2006. He has since backed more than 60 companies, 18 of which have gone public and 29 of which have been acquired, including Lyft, HashiCorp, and Poshmark, and has been named to the Forbes Midas List eighteen times, ranking in the Top Five in 2020, 2022, 2023, and 2024. Chaddha has led Mayfield's growth to $3 billion in assets under management, built around what he calls a 'people first' philosophy — backing founders primarily at the inception stage, before the broader market believes in them.",
    sources: [
      { label: "Mayfield — Navin Chaddha", url: "https://www.mayfield.com/team/navin-chaddha/" },
   { label: "World Economic Forum", url: "https://www.weforum.org/people/navin-chaddha/" }
    ]
  },
  "ilya-sukhar": {
    name: "Ilya Sukhar",
    firm: "Matrix Partners",
    firmSlug: "matrix-partners",
    title: "General Partner",
    joinedYear: 2016,
    education: ["B.S. Computer Science, Operations Research & Information Engineering, Cornell University", "M.Eng. Computer Science, Cornell University"],
    previousExperience: [
      "Senior Software Engineer, Ooyala",
      "Co-Founder & CEO, Parse — mobile backend infrastructure platform acquired by Facebook for approximately $100 million in 2013",
      "Head of Developer Products, Facebook",
      "Part-Time Partner, Y Combinator"
    ],
    investmentFocus: ["AI", "Infrastructure", "Developer Tools"],
    notableInvestments: [
      { name: "Fivetran", ticker: null },
      { name: "Flock Safety", ticker: null },
      { name: "Mashgin", ticker: null },
      { name: "Parabola", ticker: null },
      { name: "Airtable", ticker: null },
      { name: "Scale AI", ticker: null }
    ],
    boardSeats: ["Fivetran", "Flock Safety", "Mashgin", "Parabola"],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "2007", event: "Graduates Cornell University with a B.S. in Computer Science, Operations Research & Information Engineering." },
      { year: "2008", event: "Earns a Master of Engineering in Computer Science, also at Cornell." },
      { year: "2008", event: "Joins Ooyala as a Senior Software Engineer." },
      { year: "2011", event: "Co-founds Parse, a mobile backend infrastructure platform." },
      { year: "2013", event: "Facebook acquires Parse for approximately $100 million; becomes Head of Developer Products at Facebook." },
      { year: "2014", event: "Begins serving as a part-time Partner at Y Combinator." },
      { year: "2016", event: "Joins Matrix Partners as General Partner." }
    ],
    biography: "Ilya Sukhar studied computer science and operations research at Cornell before co-founding Parse in 2011, a mobile backend infrastructure platform that Facebook acquired for approximately $100 million in 2013 — he went on to lead Facebook's Developer Products team before fully transitioning out. After a stint as a part-time partner at Y Combinator, he joined Matrix Partners as a General Partner in 2016, where he concentrates on AI, infrastructure, and developer tools. His angel portfolio, built since 2014, includes early stakes in Scale AI and Airtable, and his Matrix investments include Fivetran, Flock Safety, Mashgin, and Parabola — the kind of infrastructure-first bets that reflect his own path as a founder-engineer who understood what technical teams needed before most investors did.",
    sources: [
     { label: "VentureBeat", url: "https://venturebeat.com/ai/parse-cofounder-and-y-combinator-partner-ilya-sukhar-joins-matrix-partners" },
      { label: "The Twenty Minute VC", url: "https://www.thetwentyminutevc.com/ilyasukhar" }
    ]
  },
  "aydin-senkut": {
    name: "Aydin Senkut",
    firm: "Felicis",
    firmSlug: "felicis",
    title: "Founder & Managing Partner",
    joinedYear: 2006,
    education: ["B.A., Boston University", "M.B.A., Wharton School, University of Pennsylvania", "M.A. International Studies, University of Pennsylvania"],
    previousExperience: [
      "Google's First Product Manager — helped launch Google's first ten international sites"
    ],
    investmentFocus: ["AI", "Cybersecurity & Defense", "Health & Bio", "Global Resilience/Energy", "Infrastructure/Software"],
    notableInvestments: [
      { name: "Shopify", ticker: "SHOP" },
      { name: "Credit Karma", ticker: null },
      { name: "Canva", ticker: null },
      { name: "Fitbit", ticker: null },
      { name: "Guardant Health", ticker: "GH" },
      { name: "Verkada", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 13,
    majorExits: 125,
    careerTimeline: [
      { year: "2000s", event: "Serves as Google's first product manager, helping launch the company's first ten international sites." },
      { year: "2006", event: "Founds Felicis in Menlo Park, California." },
      { year: "2015", event: "Portfolio companies Shopify and Fitbit both go public." },
      { year: "2023", event: "Felicis closes its $825 million Fund IX, bringing total AUM to $3 billion." },
      { year: "2025", event: "Closes Felicis's largest fund yet, $900 million Fund X, on the firm's 19th anniversary." }
    ],
    biography: "Aydin Senkut was Google's first product manager, helping launch the company's first ten international sites, before founding Felicis in 2006. Often described as one of the original 'super angels,' Senkut built a reputation for spotting non-consensus founders early and scaling that instinct into a full multi-stage investment platform — backing Shopify, Credit Karma, Canva, Fitbit, and Guardant Health among more than 50 unicorns and over 125 exits. Felicis closed its $825 million Fund IX in 2023, bringing total assets under management to $3 billion, and followed with a $900 million Fund X in 2025 — the firm's largest fund yet, closed on Senkut's 19th anniversary as an institutional investor. He frames Felicis's approach around measurement, instrumentation, and backing founders who are 'brave' enough to build before consensus forms, with every first check contractually barred from voting against the founder.",
    sources: [
      { label: "TechCrunch — Felicis Fund IX", url: "https://techcrunch.com/2023/03/02/felicis-funded-50-more-deals-last-year-than-in-2021-some-as-prices-were-still-rising-and-it-says-it-has-no-regrets" },
      { label: "TechCrunch — Felicis Fund X", url: "https://techcrunch.com/2025/06/12/after-a-string-of-successes-early-stage-fund-felicis-raises-fresh-900m/" }
     ]
  },
      "micky-malka": {
    name: "Micky Malka",
    firm: "Ribbit Capital",
    firmSlug: "ribbit-capital",
    title: "Founder & Managing Partner",
    joinedYear: 2012,
    education: [],
    previousExperience: [
      "Co-Builder, Patagon.com — online financial services platform acquired by Santander in 2000",
      "Co-Founder, Banco Lemon — Brazilian retail bank acquired by Banco do Brasil"
    ],
    investmentFocus: ["Fintech", "Crypto", "Money Movement", "Global Financial Services"],
    notableInvestments: [
      { name: "Coinbase", ticker: "COIN" },
      { name: "Nubank", ticker: "NU" },
      { name: "Robinhood", ticker: "HOOD" },
      { name: "Affirm", ticker: "AFRM" },
      { name: "SoFi", ticker: "SOFI" }
    ],
    boardSeats: ["Robinhood"],
    ipoCount: 3,
    majorExits: 2,
    careerTimeline: [
      { year: "2000", event: "Santander acquires Patagon.com, the online financial services platform Malka helped build." },
      { year: "2000s", event: "Co-founds Banco Lemon in Brazil, later acquired by Banco do Brasil." },
      { year: "2012", event: "Founds Ribbit Capital in Palo Alto, focused globally on financial technology." },
      { year: "2013", event: "Raises Ribbit's first $100 million fund and makes an early bet on Coinbase." },
      { year: "2021", event: "Walmart and Ribbit partner to form the fintech venture One; Coinbase and Nubank both reach the public markets." },
      { year: "2026", event: "Ribbit's Form ADV reports approximately $20.78 billion in regulatory assets under management." }
    ],
    biography: "Meyer 'Micky' Malka is a Venezuelan-born entrepreneur whose path into venture capital ran through regulated finance rather than software. He helped build the online financial services platform Patagon.com, acquired by Santander in 2000, then co-founded Banco Lemon, a Brazilian retail bank later acquired by Banco do Brasil — real operating experience inside brokerages and banks across Latin America and the United States. He founded Ribbit Capital in 2012 and used that background to identify category leaders in financial services years before generalist investors were comfortable underwriting them, making early bets on Coinbase, Nubank, and Robinhood that now sit among the most valuable fintech positions in venture capital. Ribbit's public messaging has broadened past fintech into commerce, identity, data, energy, and AI, but its center of gravity remains the same specialty it started with.",
    sources: [
      { label: "Ribbit Capital", url: "https://ribbitcap.com" },
      { label: "Wikipedia — Micky Malka", url: "https://en.wikipedia.org/wiki/Micky_Malka" },
      { label: "Wikipedia — Ribbit Capital", url: "https://en.wikipedia.org/wiki/Ribbit_Capital" }
    ]
  },
  "matt-mcilwain": {
    name: "Matt McIlwain",
    firm: "Madrona Venture Group",
    firmSlug: "madrona",
    title: "Managing Director",
    joinedYear: 2000,
    education: [],
    previousExperience: [
      "Vice President of Business Process, Genuine Parts Company",
      "Engagement Manager, McKinsey & Company",
      "Investment Banking, Credit Suisse"
    ],
    investmentFocus: ["AI & Intelligent Applications", "Cloud & Data Infrastructure", "Enterprise Software", "Marketplaces"],
    notableInvestments: [
      { name: "Smartsheet", ticker: null },
      { name: "Redfin", ticker: "RDFN" },
      { name: "Impinj", ticker: "PI" },
      { name: "Apptio", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2000", event: "Joins Madrona as a Managing Director after roles at Genuine Parts Company, McKinsey, and Credit Suisse." },
      { year: "2010s", event: "Backs a run of Seattle enterprise and cloud companies including Smartsheet and Apptio." },
      { year: "2018", event: "Portfolio company Smartsheet goes public; Madrona closes Fund VII and says it manages nearly $1.6 billion." },
      { year: "2022", event: "Madrona raises $690 million across Fund 9 and Acceleration Fund 3." }
    ],
    biography: "Matt McIlwain joined Madrona in 2000 from an unusually operational background for a venture investor — Vice President of Business Process at Genuine Parts Company, engagement manager at McKinsey, and earlier investment banking at Credit Suisse. He is closely identified with Madrona's long-duration company-building style and with the Seattle cloud and enterprise software ecosystem that grew up around the firm. The right story to attach to him isn't a single flashy seed check; it's Madrona's repeated 'day one to IPO' framing, where Smartsheet, Redfin, Impinj, and Apptio function as decades-long case studies in patient company formation rather than quick exits. Search-visible Madrona materials do not disclose his education, so that field is intentionally left blank here.",
    sources: [
      { label: "Madrona", url: "https://www.madrona.com" },
      { label: "Wikipedia — Madrona Venture Group", url: "https://en.wikipedia.org/wiki/Madrona_Venture_Group" }
    ]
},
  "ann-miura-ko": {
    name: "Ann Miura-Ko",
    firm: "Floodgate",
    firmSlug: "floodgate",
    title: "Co-Founding Partner",
    joinedYear: 2008,
    education: ["Ph.D., Stanford University", "B.S. Electrical Engineering, Yale University"],
    previousExperience: [
      "Investor, Charles River Ventures",
      "Consultant, McKinsey & Company"
    ],
    investmentFocus: ["Pre-Seed", "Seed", "Consumer Internet", "Marketplaces"],
    notableInvestments: [
      { name: "Lyft", ticker: "LYFT" },
      { name: "TaskRabbit", ticker: null },
      { name: "Twitch", ticker: null },
      { name: "Twitter", ticker: null },
      { name: "Okta", ticker: "OKTA" }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2008", event: "Co-founds Floodgate with Mike Maples Jr. during the financial crisis, after roles at Charles River Ventures and McKinsey." },
      { year: "2008", event: "Gives birth to her second child, defends her Stanford PhD six weeks later, and makes her first investment in TaskRabbit." },
      { year: "2010", event: "Makes her seed bet in Zimride, the company that becomes Lyft." },
      { year: "2018", event: "Co-founds All Raise, a nonprofit focused on diversity in venture capital." },
      { year: "2019", event: "Lyft goes public on Nasdaq." }
    ],
    biography: "Ann Miura-Ko co-founded Floodgate with Mike Maples Jr. in 2008, after an electrical engineering degree from Yale, PhD work at Stanford, and stints at Charles River Ventures and McKinsey. Her own account of the firm's founding is the most memorable thing about it: she was told she was 'insane' to start a fund in the middle of the financial crisis, gave birth to her second child, defended her PhD six weeks later, and was already on her way to making her first investment in TaskRabbit. Two years later she made the seed bet in Zimride that became Lyft, one of the best-known pre-seed checks in venture capital. She co-founded All Raise in 2018 and has spent her career at the earliest possible stage, where a firm's only real edge is conviction about people before there is anything else to evaluate.",
    sources: [
      { label: "Floodgate", url: "https://floodgate.com" },
      { label: "Wikipedia — Floodgate Fund", url: "https://en.wikipedia.org/wiki/Floodgate_Fund" }
    ]
 },
  "josh-wolfe": {
    name: "Josh Wolfe",
    firm: "Lux Capital",
    firmSlug: "lux-capital",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2000,
    education: ["Cornell University"],
    previousExperience: [],
    investmentFocus: ["AI", "Automation", "Biotech", "Defense", "Energy", "Robotics", "Frontier Science"],
    notableInvestments: [
      { name: "Anduril", ticker: null },
      { name: "Applied Intuition", ticker: null },
      { name: "Hugging Face", ticker: null },
      { name: "Runway", ticker: null },
      { name: "Together", ticker: null },
      { name: "Kallyope", ticker: null }
    ],
    boardSeats: ["Santa Fe Institute (Trustee)"],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "2000", event: "Co-founds Lux Capital with Peter Hébert and Robert Paull, backed early by Carlyle Group co-founder Bill Conway." },
      { year: "2011", event: "Lux-backed Kurion aids the cleanup of the Fukushima nuclear accident." },
      { year: "2012", event: "Lux invests in surgical robotics company Auris Health." },
      { year: "2016", event: "Kurion is acquired by Veolia for $350 million." },
      { year: "2017", event: "Lux helps fund the seed round for defense technology company Anduril Industries." },
      { year: "2019", event: "Johnson & Johnson acquires Auris Health for up to $6.1 billion." }
    ],
    biography: "Josh Wolfe co-founded Lux Capital in 2000 with Peter Hébert and Robert Paull, and is a Cornell alumnus, published scientist, and trustee of the Santa Fe Institute — a background that shows in how the firm invests. Lux's defining trait is that it does not treat hard science, difficult regulation, and long commercialization timelines as reasons to pass; Wolfe's own framing is that a first check can and should sit beside all three. That conviction put Lux into nuclear waste cleanup company Kurion before Fukushima made the category legible, into Auris Health seven years before Johnson & Johnson paid up to $6.1 billion for it, and into Anduril's seed round in 2017, when defense technology was still widely considered uninvestable by venture standards. He invests as a generalist across AI, automation, biotech, compute, defense, energy, infrastructure, and robotics.",
    sources: [
      { label: "Lux Capital", url: "https://www.luxcapital.com" },
      { label: "Wikipedia — Josh Wolfe", url: "https://en.wikipedia.org/wiki/Josh_Wolfe" },
      { label: "Wikipedia — Lux Capital", url: "https://en.wikipedia.org/wiki/Lux_Capital" }
    ]
},
  "zachary-bogue": {
    name: "Zachary Bogue",
    firm: "DCVC",
    firmSlug: "dcvc",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2011,
    education: [],
    previousExperience: [],
    investmentFocus: ["Deep Tech", "Advanced Computing", "Space", "Defense & Security", "Climate"],
    notableInvestments: [
      { name: "Rocket Lab", ticker: "RKLB" },
      { name: "SentinelOne", ticker: "S" },
      { name: "Planet Labs", ticker: "PL" },
      { name: "Element AI", ticker: null },
      { name: "Blue River Technology", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 1,
    careerTimeline: [
      { year: "2011", event: "Co-founds the firm as Data Collective with Matt Ocko in Palo Alto." },
      { year: "2017", event: "Portfolio company Blue River Technology is acquired by John Deere for $305 million." },
      { year: "2021", event: "Several DCVC-backed companies reach the public markets, including SentinelOne and Recursion." },
      { year: "2026", event: "DCVC publishes its inaugural Deep Tech Opportunities report." }
    ],
    biography: "Zachary Bogue co-founded DCVC — originally Data Collective — with Matt Ocko, building the firm around a model most venture funds don't attempt: pairing career investors with a standing bench of more than 35 technical experts, including CTOs, chief scientists, and professors at Stanford and Berkeley. The point of that structure is to make it possible to underwrite companies whose core risk is scientific rather than commercial. Bogue is closely associated with Rocket Lab, SentinelOne, and Element AI, and wrote and publicly discussed the Rocket Lab bet years before a broader aerospace-investor consensus existed — consistent with a firm willing to fund categories that need both patient capital and genuine technical fluency. Public DCVC materials do not disclose his education, so that field is intentionally left blank here rather than inferred.",
    sources: [
      { label: "DCVC — Team", url: "https://www.dcvc.com/team/" },
      { label: "DCVC", url: "https://www.dcvc.com" }
    ]
  },
   "leonid-boguslavsky": {
    name: "Leonid Boguslavsky",
    firm: "RTP Global",
    firmSlug: "rtp-global",
    title: "Founder & Partner",
    joinedYear: 2000,
    education: [],
    previousExperience: [
      "Entrepreneur and internet investor prior to founding RTP Global; funded the firm largely from reinvested proceeds of earlier ventures"
    ],
    investmentFocus: ["AI", "SaaS", "DevOps", "Fintech", "Global Consumer Internet"],
    notableInvestments: [
      { name: "Datadog", ticker: "DDOG" },
      { name: "Delivery Hero", ticker: null },
      { name: "Cred", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2000", event: "Founds RTP Global, funding the firm largely from proceeds of his own prior ventures rather than traditional outside LP capital." },
      { year: "2011", event: "Supports RTP's U.S. expansion through RTP Ventures in New York." },
      { year: "2012", event: "RTP backs Datadog's Series A round." },
      { year: "2018", event: "The firm, previously known as ru-Net, formally rebrands as RTP Global." },
      { year: "2023", event: "RTP announces Fund IV at $1 billion." }
    ],
    biography: "Leonid Boguslavsky founded RTP Global in 2000 after building wealth as an entrepreneur and internet investor, and funded the firm's early activity largely by reinvesting his own prior gains rather than raising extensively from outside limited partners — an unusual structure that still shapes how RTP operates today. That self-funded, founder-capitalized model gives the firm an unusually long time horizon and a reputation for fast decision-making, since it isn't bound by the same fundraising cycles as a traditional LP-backed fund. Boguslavsky's highest-profile bet came in 2012, when RTP backed Datadog's Series A round years before the observability company's 2019 Nasdaq IPO, and the firm has since built a global footprint spanning New York, London, Paris, and Bengaluru while staying close to his original founder-led model.",
    sources: [
      { label: "RTP Global", url: "https://rtp.vc" }
    ]
  },
"sunil-dhaliwal": {
    name: "Sunil Dhaliwal",
    firm: "Amplify Partners",
    firmSlug: "amplify-partners",
    title: "Founder & General Partner",
    joinedYear: 2012,
    education: ["B.S., Finance & International Business, Georgetown University"],
    previousExperience: [
      "Technology Investment Banking, Alex. Brown & Sons",
      "General Partner, Battery Ventures (14+ years)"
    ],
    investmentFocus: ["AI", "Developer Tools", "Data Infrastructure", "Cybersecurity", "Enterprise Software"],
    notableInvestments: [
      { name: "Datadog", ticker: "DDOG" },
      { name: "Fastly", ticker: "FSLY" },
      { name: "Splunk", ticker: null }
    ],
    boardSeats: ["Runway"],
    ipoCount: 3,
    majorExits: 0,
    careerTimeline: [
      { year: "1996", event: "Graduates from Georgetown University and joins Alex. Brown & Sons in technology investment banking." },
      { year: "1998", event: "Joins Battery Ventures, where he spends more than 14 years backing early-stage infrastructure companies including Splunk." },
      { year: "2012", event: "Leaves Battery to found Amplify Partners, closing a $40 million debut fund after 18 months of fundraising." },
      { year: "2019", event: "Portfolio companies Datadog and Fastly both go public." },
      { year: "2025", event: "Closes $900 million across Fund 6, Fund 6 Select, and Amplify's first dedicated biology fund." }
    ],
    biography: "Sunil Dhaliwal has spent more than 25 years investing in technical infrastructure, starting at Battery Ventures in 1998 after two years in technology banking at Alex. Brown & Sons following his 1996 Georgetown graduation. At Battery he spent over 14 years backing early-stage companies through multiple market cycles, including a formative early bet on Splunk, before leaving in 2012 to found Amplify Partners on a single conviction: that technical founders deserved an investor who understood their problem space as deeply as they did. His first fund raised just $40 million after 18 months of on-and-off fundraising; Amplify has since grown into a $900 million platform whose portfolio includes Datadog and Fastly, both public since 2019. Dhaliwal has said his instinct for backing builders in unfashionable technical corners traces back to watching his own father leave a corporate engineering job to start a company when Dhaliwal was still in grade school.",
    sources: [
      { label: "Amplify Partners", url: "https://www.amplifypartners.com/team/sunil-dhaliwal" },
      { label: "TechCrunch — Amplify Partners", url: "https://techcrunch.com/2018/09/18/amplify-partners-locks-in-200-million-to-transform-technical-founders-into-people-who-can-actually-lead-a-startup/" }
    ]
  },
"teymour-boutros-ghali": {
    name: "Teymour Boutros-Ghali",
    firm: "BOLD Capital Partners",
    firmSlug: "bold-capital-partners",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2015,
    education: ["BA, Electrical Engineering, Cambridge University", "PhD, Plasma Physics, MIT", "SM, Management, MIT Sloan School of Management"],
    previousExperience: [
      "General Partner, Monitor Ventures",
      "Senior Executive, Time Warner (operations and investments)",
      "CEO, AllBusiness (acquired by NBC)",
      "CEO, Zowie Intertainment (acquired by LEGO)",
      "CEO, Thrive Online (acquired by AOL)",
      "Consultant, Boston Consulting Group"
    ],
    investmentFocus: ["AI", "Healthcare", "Longevity", "Biotechnology", "Deep Tech"],
    notableInvestments: [
      { name: "Insilico Medicine", ticker: "3696.HK" },
      { name: "Colossal", ticker: null },
      { name: "Near Space Labs", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 3,
    careerTimeline: [
      { year: "2005", event: "Serves as General Partner at Monitor Ventures before co-founding BOLD." },
      { year: "2015", event: "Co-founds BOLD Capital Partners with Peter Diamandis." },
      { year: "2025", event: "Portfolio company Insilico Medicine completes its Hong Kong IPO, raising HKD 2.277 billion." }
    ],
    biography: "Teymour Boutros-Ghali brought an unusually operational background to venture investing when he co-founded BOLD Capital Partners with Peter Diamandis in 2015. After a Cambridge electrical engineering degree, a PhD in plasma physics and a management degree from MIT, and time at Boston Consulting Group, he spent years as a senior Time Warner executive before leading three companies to acquisitions himself — AllBusiness (sold to NBC), Zowie Intertainment (acquired by LEGO), and Thrive Online (sold to AOL) — then served as a General Partner at Monitor Ventures before starting BOLD. That mix of deep technical training and repeated hands-on company-building experience underpins BOLD's 'convergence' thesis, which treats longevity, synthetic biology, AI, and robotics as a single connected investment category rather than separate bets. The firm's clearest recent proof point is Insilico Medicine, one of BOLD's portfolio companies, which completed its Hong Kong Stock Exchange listing in December 2025.",
    sources: [
      { label: "BOLD Capital Partners", url: "https://boldcapitalpartners.com" },
      { label: "Wikipedia — Teymour Boutros-Ghali", url: "https://en.wikipedia.org/wiki/Teymour_Boutros-Ghali" }
    ]
  },
"matt-melymuka": {
    name: "Matt Melymuka",
    firm: "PeakSpan Capital",
    firmSlug: "peakspan-capital",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2015,
    education: ["B.S., Finance, Georgetown University (cum laude)"],
    previousExperience: [
      "Technology Investment Banker, Piper Jaffray (Technology, Media & Telecom group)",
      "Investor, Investor Growth Capital (B2B software investment team)",
      "Investor, Greycroft Partners' Growth Fund"
    ],
    investmentFocus: ["Applied AI", "B2B Software", "Go-to-Market Technology", "Hospitality Technology"],
    notableInvestments: [
      { name: "Ecwid", ticker: null }
    ],
    boardSeats: ["Letterhead"],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "2011", event: "Joins Investor Growth Capital's B2B software investment team, where he meets future PeakSpan co-founders Phil Dur and Brian Mulvey." },
      { year: "2015", event: "Co-founds PeakSpan Capital with Phil Dur and Brian Mulvey." },
      { year: "2021", event: "PeakSpan portfolio company Ecwid is acquired by Lightspeed Commerce for approximately $500 million." },
      { year: "2022", event: "Named to Crain's New York Business '40 Under 40' list." },
      { year: "2024", event: "Named to GrowthCap's Top 40 Under 40 Growth Investors list, a recognition repeated in 2025." }
    ],
    biography: "Matt Melymuka has spent his entire career on growth-stage software investing, starting as a technology investment banker on Piper Jaffray's Technology, Media & Telecom team before moving to Investor Growth Capital's B2B software investment team — where he met Phil Dur and Brian Mulvey, the two colleagues with whom he'd later found PeakSpan Capital in 2015. After refining their shared investment approach together at Investor Growth Capital and then Greycroft Partners' Growth Fund, the three co-founded PeakSpan around a specific bet: that applied AI B2B software companies scaling from roughly $3 million to $50 million in ARR needed a specialist partner, not a generalist growth fund. Melymuka has worked with more than 30 growth-stage software companies over 15-plus years at the firm, has been named to both Crain's and GrowthCap's 40 Under 40 lists, and leads PeakSpan's efforts in go-to-market and hospitality technology.",
    sources: [
      { label: "PeakSpan Capital", url: "https://www.peakspancapital.com/investment-team/matt-melymuka" }
    ]
  },
"gaurav-garg": {
    name: "Gaurav Garg",
    firm: "Wing Venture Capital",
    firmSlug: "wing-vc",
    title: "Founding Partner",
    joinedYear: 2013,
    education: ["BS & MS, Electrical Engineering, Washington University in St. Louis", "BS, Computer Science, Washington University in St. Louis"],
    previousExperience: [
      "Engineering roles, SynOptics and Bay Networks",
      "Founder & SVP of Product Management, Redback Networks (IPO 1999)",
      "Partner, Sequoia Capital (2001-2012)"
    ],
    investmentFocus: ["AI", "Data Infrastructure", "Enterprise Software", "Cybersecurity", "Developer Tools"],
    notableInvestments: [
      { name: "Snowflake", ticker: "SNOW" },
      { name: "Ruckus Wireless", ticker: null },
      { name: "FireEye", ticker: null },
      { name: "MobileIron", ticker: null }
    ],
    boardSeats: ["Ruckus Wireless", "FireEye", "MobileIron", "Cohesity"],
    ipoCount: 6,
    majorExits: 2,
    careerTimeline: [
      { year: "1996", event: "Founds Redback Networks after early engineering roles at SynOptics and Bay Networks." },
      { year: "1999", event: "Redback Networks completes its IPO." },
      { year: "2001", event: "Joins Sequoia Capital as a partner." },
      { year: "2002", event: "Founds Ruckus Wireless, which he builds toward IPO over the following decade." },
      { year: "2012", event: "Ruckus Wireless and FireEye both go public; Garg's decade at Sequoia ends." },
      { year: "2013", event: "Co-founds Wing Venture Capital with Peter Wagner." },
      { year: "2020", event: "Portfolio company Snowflake goes public, later valued at over $70 billion on its first trading day." }
    ],
    biography: "Gaurav Garg brought a rare founder-to-investor path to Wing Venture Capital when he co-founded the firm with Peter Wagner in 2013. After early engineering roles at SynOptics and Bay Networks, he founded Redback Networks in 1996 and took it public in 1999, then spent 2001 to 2012 as a partner at Sequoia Capital, where he helped build FireEye and Jasper from early stages and served on boards for more than ten years each. In between, he founded Ruckus Wireless in 2002 and guided it to its own 2012 IPO — giving him operating experience building two public companies from scratch, not just investing in others. That builder's instinct shows up directly in Wing's long-duration, company-building posture with founders, and in its highest-profile bet: Wing was a first-check investor in Snowflake years before its 2020 IPO, which valued the data cloud company at over $70 billion on its first day of trading.",
    sources: [
      { label: "Wing Venture Capital", url: "https://www.wing.vc/people/gaurav-garg" },
      { label: "Wing Launch Announcement", url: "https://www.wing.vc/content/wing-launches-with-new-111-million-venture-fund" }
    ]
  },
"lior-susan": {
    name: "Lior Susan",
    firm: "Eclipse Ventures",
    firmSlug: "eclipse-ventures",
    title: "Founder, Managing Partner & CEO",
    joinedYear: 2015,
    education: [],
    previousExperience: [
      "Co-Founder, Intucell (software-defined networking, acquired by Cisco for $475M in 2012)",
      "Founder & General Partner, Lab IX — Flextronics' hardware investment platform",
      "Special Forces reservist, Israel Defense Forces"
    ],
    investmentFocus: ["Manufacturing", "Logistics", "Energy", "Defense", "Industrial AI"],
    notableInvestments: [
      { name: "Enovix", ticker: "ENVX" },
      { name: "Bright Machines", ticker: null },
      { name: "Cerebras", ticker: null },
      { name: "Augury", ticker: null }
    ],
    boardSeats: ["Bright Machines", "Cerebras", "Augury", "Ursa Major"],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "2008", event: "Co-founds Intucell with his brother, building a software-defined networking company for global telecom networks." },
      { year: "2012", event: "Cisco acquires Intucell for $475 million." },
      { year: "2012", event: "Joins Flex as Founder & General Partner of Lab IX, its hardware investment platform, investing across energy storage, additive manufacturing, and robotics." },
      { year: "2015", event: "Founds Eclipse Ventures in Palo Alto to back founders rebuilding physical industries." },
      { year: "2020", event: "Eclipse invests in Enovix; Eclipse partner Greg Reichow joins its board." },
      { year: "2021", event: "Enovix becomes a public company via business combination." },
      { year: "2026", event: "Eclipse closes $1.3 billion across Fund VI and Early Growth Fund III, bringing total AUM to roughly $10 billion." }
    ],
    biography: "Lior Susan's path to venture capital runs through a kibbutz in Israel and an elite Special Forces unit, not a university — by his own account, he arrived in Silicon Valley in his mid-20s with no formal education and no experience working for anyone else. In 2008 he joined his brother to build Intucell, a software-defined networking startup for telecom networks, and sold it to Cisco for $475 million four years later. He then spent three years at Flex, the global manufacturing company, leading its Lab IX hardware investment platform and getting an inside view of the operational inefficiencies choking legacy physical industries — manufacturing, logistics, energy. That experience became the direct thesis behind Eclipse Ventures, which he founded in 2015 on the belief that rebuilding those industries, not just software-enabling them, would define the next generation of consequential companies. Eclipse's 2020 investment in battery maker Enovix, which went public the following year, remains one of the clearest proof points of that thesis.",
    sources: [
      { label: "Eclipse Ventures", url: "https://eclipse.capital/team/lior-susan/" },
      { label: "Heidrick & Struggles Interview", url: "https://www.heidrick.com/en/insights/podcasts/e189_traits-successful-venture-capital-leader-lior-susan" }
    ]
  },
"chris-arsenault": {
    name: "Chris Arsenault",
    firm: "Inovia Capital",
    firmSlug: "inovia-capital",
    title: "Co-Founder & General Partner",
    joinedYear: 2007,
    education: [],
    previousExperience: [
      "Founder & CEO, SIT Solutions Internet Technilogic (SIT Europe sold to Ubizen, 1999)",
      "Co-Founder, Copernic Technologies and Wanted Technologies",
      "Investment Director & Entrepreneur in Residence, Telesystem Group",
      "Partner, MSBi Capital (renamed Inovia Capital)"
    ],
    investmentFocus: ["Enterprise Software", "Commerce", "AI", "Growth-Stage Company Building"],
    notableInvestments: [
      { name: "Lightspeed Commerce", ticker: "LSPD" },
      { name: "AppDirect", ticker: null },
      { name: "Sonder", ticker: null }
    ],
    boardSeats: ["AppDirect", "Lightspeed Commerce", "Poka"],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "1993", event: "Founds SIT Solutions Internet Technilogic; its European division is later sold to Ubizen in 1999." },
      { year: "1999", event: "Joins the Telesystem Group as Investment Director & Entrepreneur in Residence, helping spin out subsidiaries of Teleglobe and Microcell." },
      { year: "2002", event: "Joins MSBi Capital as Partner, focused on the technology sector." },
      { year: "2007", event: "Co-founds Inovia Capital, building the firm out from MSBi's original platform." },
      { year: "2019", event: "Lightspeed Commerce, a company Arsenault has long supported as a board member, goes public on the NYSE and TSX." }
    ],
    biography: "Chris Arsenault arrived at Inovia Capital's founding in 2007 with more than a decade of operating experience already behind him, not a traditional finance background. He founded SIT Solutions in 1993, sold its European division to Ubizen in 1999, then spent years helping build Copernic Technologies and Wanted Technologies while also working inside the Telesystem Group, where he helped spin subsidiaries out of telecom giants Teleglobe and Microcell. He joined MSBi Capital in 2002 as its technology-focused partner, and when the firm relaunched as Inovia Capital in 2007, Arsenault became a co-founder shaping its culture and long-term platform strategy. That operator-first background is part of why Inovia frames itself as institution-building rather than opportunistic dealmaking — Arsenault has stayed closely involved with Lightspeed Commerce since its earliest days, sitting on its board through its 2019 IPO, alongside continued board seats at AppDirect and Poka.",
    sources: [
      { label: "Inovia Capital", url: "https://www.inovia.vc/team/chris-arsenault/" },
      { label: "Réseau Capital", url: "https://reseaucapital.com/en/speakers/chris-arsenault/" }
    ]
  },
"matt-bigge": {
    name: "Matt Bigge",
    firm: "Crosslink Capital",
    firmSlug: "crosslink-capital",
    title: "Partner",
    joinedYear: 2016,
    education: ["BS, International Relations, Georgetown University", "MBA, Harvard Business School"],
    previousExperience: [
      "Infantry Officer, U.S. Army, 10th Mountain Division (Airborne & Ranger qualified)",
      "Co-Founder & President, MILCOM Technologies",
      "CEO & Co-Founder, Strategic Social Holdings (acquired by Constellis Group)",
      "Venture Partner, Paladin Capital Group"
    ],
    investmentFocus: ["Cybersecurity", "Enterprise Infrastructure", "Digital Transformation", "National Security Tech"],
    notableInvestments: [
      { name: "ArcSight", ticker: null },
      { name: "CloudShield", ticker: null },
      { name: "Narus", ticker: null },
      { name: "MeshNetworks", ticker: null }
    ],
    boardSeats: ["Silicon Valley Defense Group"],
    ipoCount: 0,
    majorExits: 4,
    careerTimeline: [
      { year: "1992", event: "Serves as an Infantry Officer in the U.S. Army's 10th Mountain Division after graduating Georgetown." },
      { year: "1997", event: "Co-founds MILCOM Technologies, ultimately leading the commercialization of more than $2 billion in defense-focused R&D into ten product companies." },
      { year: "2012", event: "Becomes a Venture Partner at Paladin Capital Group, investing in enterprise and industrial infrastructure security." },
      { year: "2016", event: "Joins Crosslink Capital as Partner, focused on enterprise and industrial IT infrastructure, security, and what the firm calls 'plausible science fiction.'" }
    ],
    biography: "Matt Bigge's path to Crosslink Capital runs through the U.S. Army's 10th Mountain Division, where he served as an Airborne- and Ranger-qualified Infantry officer after graduating Georgetown, before earning his MBA at Harvard Business School. He co-founded MILCOM Technologies in 1997, spending years commercializing more than $2 billion of defense-focused R&D into ten separate product companies — work that led to a track record backing companies like ArcSight (acquired by HP), CloudShield (acquired by SAIC), and Narus (acquired by Boeing). After serving as CEO of Strategic Social Holdings and a Venture Partner at Paladin Capital, he joined Crosslink in 2016 with a two-decade relationship to the firm's team already in place — he'd worked with Crosslink partner Eric Chin years earlier at MILCOM. That military-to-venture pipeline is now a defining part of Crosslink's brand: Bigge pulls the firm's cybersecurity and national-security-adjacent investing into what Crosslink calls 'plausible science fiction,' broadening it well past a conventional enterprise SaaS identity.",
    sources: [
      { label: "Crosslink Capital", url: "https://www.crosslinkcapital.com/team/matt-bigge/" },
      { label: "Silicon Valley Defense Group", url: "https://www.siliconvalleydefense.org/our-team-1/matt-bigge" }
    ]
  },
"dan-levitan": {
    name: "Dan Levitan",
    firm: "Maveron",
    firmSlug: "maveron",
    title: "Co-Founder & General Partner",
    joinedYear: 1998,
    education: ["BA, Duke University", "MBA, Harvard Business School"],
    previousExperience: [
      "Managing Director, Consumer Group, Schroder Wertheim & Co. (led Starbucks' 1992 IPO)"
    ],
    investmentFocus: ["Consumer", "Commerce", "Health & Wellness", "Fintech"],
    notableInvestments: [
      { name: "Zulily", ticker: null },
      { name: "Allbirds", ticker: "BIRD" },
      { name: "Potbelly", ticker: "PBPB" },
      { name: "Trupanion", ticker: "TRUP" }
    ],
    boardSeats: ["Allbirds", "Trupanion", "Pacaso", "Two Chairs"],
    ipoCount: 4,
    majorExits: 0,
    careerTimeline: [
      { year: "1992", event: "Leads Starbucks' IPO as a Schroder Wertheim & Co. investment banker, forming a relationship with CEO Howard Schultz." },
      { year: "1998", event: "Co-founds Maveron with Howard Schultz in Seattle." },
      { year: "2009", event: "Leads Zulily's approximately $5 million Series A round." },
      { year: "2013", event: "Zulily and Potbelly both go public; Maveron's 22% Zulily stake is worth more than $1 billion at IPO." },
      { year: "2014", event: "Named to the Forbes Midas List of top venture investors." },
      { year: "2021", event: "Portfolio company Allbirds goes public on the Nasdaq." }
    ],
    biography: "Dan Levitan spent 15 years as a consumer-focused investment banker before co-founding Maveron, leading Starbucks' 1992 IPO as a managing director at Schroder Wertheim & Co. — the deal that formed his relationship with CEO Howard Schultz. The two co-founded Maveron together in 1998, built around a single conviction that has defined the firm ever since: invest only in consumer-facing brands and technology, never enterprise. Levitan's clearest proof point came in 2009, when he led a roughly $5 million Series A round in Zulily; by the time the ecommerce company went public in 2013 at a $4.6 billion valuation, Maveron's 22% stake was worth more than $1 billion. He was named to the Forbes Midas List in 2014, has sat on the boards of Allbirds, Trupanion, Pacaso, and Two Chairs, and remains the firm's most public face more than 25 years after co-founding it.",
    sources: [
      { label: "Maveron", url: "https://www.maveron.com" },
      { label: "Wikipedia — Dan Levitan", url: "https://en.wikipedia.org/wiki/Dan_Levitan" }
    ]
  },
"ho-nam": {
    name: "Ho Nam",
    firm: "Altos Ventures",
    firmSlug: "altos-ventures",
    title: "Co-Founder & Managing Director",
    joinedYear: 1996,
    education: ["BS, Engineering (minor, Philosophy, Politics & Economics), Harvey Mudd College", "MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "Associate Consultant, Bain & Company",
      "Associate, Trinity Ventures (early investor in Starbucks)",
      "Sales & Marketing, Silicon Graphics",
      "Product roles, Octel Communications"
    ],
    investmentFocus: ["Enterprise Software", "Consumer Internet", "Durable Founder-Led Businesses"],
    notableInvestments: [
      { name: "Coupang", ticker: "CPNG" },
      { name: "Roblox", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 0,
    careerTimeline: [
      { year: "1988", event: "Graduates Harvey Mudd College and joins Bain & Company as an Associate Consultant." },
      { year: "1990", event: "Joins Trinity Ventures as an Associate, an early investor in Starbucks among other companies." },
      { year: "1994", event: "Completes his Stanford MBA and joins Silicon Graphics in sales and marketing, later moving to Octel Communications." },
      { year: "1996", event: "Co-founds Altos Ventures with Han Kim and Anthony Lee." },
      { year: "2007", event: "Altos' relationship with Roblox begins." },
      { year: "2021", event: "Both Roblox and Coupang go public." }
    ],
    biography: "Ho Nam immigrated to the United States from Korea with his family at age nine, and has said that experience of starting over shaped the patient, long-horizon approach he later brought to venture investing. After a Harvey Mudd engineering degree, he began his career at Bain & Company, then moved into venture capital at Trinity Ventures — an early Starbucks investor — before earning his Stanford MBA and spending time at Silicon Graphics and Octel Communications. He co-founded Altos Ventures in 1996 with Han Kim and Anthony Lee, and the firm's defining trait under his leadership has been patience most funds don't attempt: Altos held its Roblox position for well over a decade before the company's 2021 IPO, and its early stake in Coupang was worth an implied $62.1 billion at that company's own 2021 listing. Nam has since become a public voice for what he calls venture capital's spiritual side, writing about kindness, curiosity, and service as core to long-term investing rather than just financial technique.",
    sources: [
      { label: "Harvey Mudd College Magazine", url: "https://magazine.hmc.edu/spring-2024/building-success-with-heart/" },
      { label: "uAspire", url: "https://www.uaspire.org/about/team/ho-nam" }
    ]
  },
"anthony-lin": {
    name: "Anthony Lin",
    firm: "Intel Capital",
    firmSlug: "intel-capital",
    title: "Managing Partner & Head of Intel Capital",
    joinedYear: 2008,
    education: ["BA, Economics, University of California, Berkeley"],
    previousExperience: [
      "Corporate Finance, M&A & Private Equity roles, Banc of America Securities",
      "Corporate Finance, ASAT",
      "Corporate Finance, Merrill Lynch",
      "Corporate Finance, PaineWebber"
    ],
    investmentFocus: ["AI", "Cloud", "Silicon", "Frontier Technology"],
    notableInvestments: [
      { name: "SambaNova Systems", ticker: null },
      { name: "Syntiant", ticker: null },
      { name: "Articul8", ticker: null }
    ],
    boardSeats: ["SambaNova Systems", "Syntiant Corp", "Articul8.AI", "RealSense"],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "1996", event: "Begins a 12-year career in corporate finance, M&A, and private equity at Banc of America Securities, ASAT, Merrill Lynch, and PaineWebber." },
      { year: "2008", event: "Joins Intel, initially leading mergers, acquisitions, and international investing." },
      { year: "2020", event: "Named interim head of Intel Capital following Wendell Brooks' departure." },
      { year: "2021", event: "Appointed permanent Managing Partner and Head of Intel Capital." },
      { year: "2022", event: "Launches a $1 billion investment fund with Intel Foundry Services to build out the fab-technology innovation ecosystem." }
    ],
    biography: "Anthony Lin spent 12 years in corporate finance, M&A, and private equity — at Banc of America Securities, ASAT, Merrill Lynch, and PaineWebber — before joining Intel in 2008, initially overseeing the company's own mergers, acquisitions, and international equity investments. He moved into Intel Capital and was named interim head in 2020 after Wendell Brooks' departure, taking the role permanently in February 2021. As a voting member of Intel Capital's investment committee, Lin now oversees all of the unit's equity investment activity, organized around four domains he's helped define — Cloud, Devices, Frontier, and Silicon — with 2023 alone seeing more than $350 million deployed across 30 new investments spanning AI infrastructure, robotics, and translation technology. He currently sits on the boards of SambaNova Systems, Syntiant, Articul8.AI, and RealSense.",
    sources: [
      { label: "Intel Newsroom", url: "https://newsroom.intel.com/biography/anthony-lin" },
      { label: "Intel Capital", url: "https://www.intelcapital.com/team/anthony-lin/" }
    ]
  },
"quinn-li": {
    name: "Quinn Li",
    firm: "Qualcomm Ventures",
    firmSlug: "qualcomm-ventures",
    title: "Senior Vice President & Global Head",
    joinedYear: 2005,
    education: ["BS, MS & PhD, Electrical Engineering, Washington University in St. Louis", "MBA, Cornell University"],
    previousExperience: [
      "3G Wireless Technology & Standards Engineer, Lucent Technologies",
      "Wireless Technology Development, Broadcom",
      "Product Management & Business Development, IBM Systems and Technology Group"
    ],
    investmentFocus: ["5G", "AI", "Automotive", "Enterprise & Data Center", "IoT"],
    notableInvestments: [
      { name: "Zoom", ticker: "ZM" },
      { name: "Enovix", ticker: "ENVX" },
      { name: "Eero", ticker: null },
      { name: "InvenSense", ticker: null }
    ],
    boardSeats: ["Augury", "Celona", "Cohesity", "Cresta", "Netradyne", "R-Zero"],
    ipoCount: 3,
    majorExits: 5,
    careerTimeline: [
      { year: "1996", event: "Begins his career as an engineer at Lucent Technologies, working on 3G wireless standards development." },
      { year: "2003", event: "Completes his MBA at Cornell, where he gets his first exposure to venture investing through a student-run VC fund." },
      { year: "2005", event: "Joins Qualcomm Ventures, calling it his 'dream company' after earlier roles at Broadcom and IBM." },
      { year: "2018", event: "Portfolio company Ring is acquired by Amazon for more than $1 billion." },
      { year: "2019", event: "Portfolio companies Zoom and Cloudflare both go public." },
      { year: "2021", event: "Portfolio companies SentinelOne, Enovix, Matterport, Spire, and Science 37 all go public." }
    ],
    biography: "Quinn Li's path to venture capital ran directly through engineering: after earning his PhD in electrical engineering, he spent years working on 3G wireless standards at Lucent Technologies before roles at Broadcom and IBM gave him exposure to product strategy and deal-making. He got his real introduction to venture investing during his Cornell MBA, working as an investment professional for a small, student-run VC fund, and joined Qualcomm Ventures in 2005 calling it his dream company. His investment philosophy is explicit about playing to Qualcomm's own technical edge — he's said the firm invests where its parent company's scale and industry position give it 'unfair knowledge' that generalist VCs don't have. That approach has produced more than a dozen exits, including A123 Systems, Eero, Enovix, InvenSense, Pensando, and Zoom, and Li now oversees Qualcomm's global venture portfolio of more than 150 active companies across seven regions.",
    sources: [
      { label: "Qualcomm Ventures", url: "https://www.qualcommventures.com/team/quinn-li/" },
      { label: "Corporate Venturing Insider", url: "https://medium.com/@corporateventuringinsider/qualcomm-ventures-quinn-li-levering-an-unfair-advantage-c18a04516f9e" }
    ]
  },
"noah-yago": {
    name: "Noah Yago",
    firm: "Cisco Investments",
    firmSlug: "cisco-investments",
    title: "Vice President",
    joinedYear: 2017,
    education: [],
    previousExperience: [
      "Investor, Triangle Peak Partners",
      "Venture roles, JVP (Jerusalem Venture Partners)",
      "Venture roles, Veronis Suhler Stevenson"
    ],
    investmentFocus: ["Enterprise Software", "AI", "Data Infrastructure"],
    notableInvestments: [
      { name: "HashiCorp", ticker: null },
      { name: "DataRobot", ticker: null },
      { name: "Dremio", ticker: null },
      { name: "AlphaSense", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2017", event: "Joins Cisco Investments from Triangle Peak Partners, after earlier venture roles at JVP and Veronis Suhler Stevenson." },
      { year: "2021", event: "Portfolio company HashiCorp, one of his led investments, goes public on the Nasdaq." }
    ],
    biography: "Noah Yago joined Cisco Investments in 2017 after venture roles at Triangle Peak Partners, JVP, and Veronis Suhler Stevenson, bringing a background spanning both financial and strategic investing before moving fully into Cisco's corporate venture platform. He has led investments in HashiCorp, DataRobot, Dremio, and AlphaSense, with HashiCorp's December 2021 IPO — at a roughly $14 billion valuation — standing as the clearest public proof point of his sourcing. His focus sits at the intersection of enterprise software, data infrastructure, and AI, the same categories Cisco Investments has doubled down on since launching its dedicated $1 billion AI fund in 2024.",
    sources: [
      { label: "Cisco Investments Team", url: "https://www.ciscoinvestments.com/team" }
    ]
  },
"john-somorjai": {
    name: "John Somorjai",
    firm: "Salesforce Ventures",
    firmSlug: "salesforce-ventures",
    title: "President",
    joinedYear: 2009,
    education: [],
    previousExperience: [
      "Corporate Development & M&A roles at Salesforce prior to founding Salesforce Ventures"
    ],
    investmentFocus: ["AI", "Enterprise Software", "Cloud Infrastructure", "Fintech"],
    notableInvestments: [
      { name: "Snowflake", ticker: "SNOW" },
      { name: "DocuSign", ticker: "DOCU" },
      { name: "Zoom", ticker: "ZM" },
      { name: "Databricks", ticker: null },
      { name: "Vlocity", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 4,
    majorExits: 1,
    careerTimeline: [
      { year: "2009", event: "Helps found Salesforce Ventures, becoming its President." },
      { year: "2020", event: "Vlocity, one of his notable investments, is acquired by parent company Salesforce for $1.33 billion." },
      { year: "2024", event: "Salesforce Ventures marks 15 years under his leadership, having deployed more than $6 billion across 630+ startups." }
    ],
    biography: "John Somorjai helped found Salesforce Ventures in 2009 and has run it as President ever since, building it into one of the largest and most active corporate venture platforms in enterprise software. His official bio credits him with involvement in a broad set of the firm's highest-profile bets, including Auth0, Databricks, DocuSign, nCino, Snowflake, Vlocity, and Zoom — a mix spanning identity, data infrastructure, e-signature, banking software, and communications. The clearest and most unusual proof point among them is Vlocity: Salesforce Ventures backed the industry-cloud software company as an outside investor, and Salesforce itself later acquired it for $1.33 billion in February 2020, a rare case of a corporate VC's portfolio company being absorbed directly by its own parent.",
    sources: [
      { label: "Salesforce Ventures People", url: "https://salesforceventures.com/people/" }
    ]
  },
"laela-sturdy": {
    name: "Laela Sturdy",
    firm: "CapitalG",
    firmSlug: "capitalg",
    title: "Managing Partner",
    joinedYear: 2013,
    education: [],
    previousExperience: [
      "Led emerging businesses at Google",
      "Leadership roles on YouTube and Google Search"
    ],
    investmentFocus: ["AI", "Enterprise Infrastructure", "Data & Analytics", "Fintech"],
    notableInvestments: [
      { name: "Duolingo", ticker: "DUOL" },
      { name: "UiPath", ticker: "PATH" },
      { name: "Stripe", ticker: null }
    ],
    boardSeats: ["Duolingo"],
    ipoCount: 2,
    majorExits: 0,
    careerTimeline: [
      { year: "2013", event: "Joins CapitalG shortly after its founding, coming from leadership roles on YouTube and Google Search." },
      { year: "2015", event: "Leads CapitalG's investment in Duolingo." },
      { year: "2021", event: "Duolingo goes public on the Nasdaq." }
    ],
    biography: "Laela Sturdy joined CapitalG shortly after Alphabet founded the growth fund in 2013, bringing years of internal Google leadership experience — she had led the company's emerging businesses group and held senior roles on both YouTube and Google Search. That internal operating background is central to CapitalG's pitch to founders: its investors aren't just financiers, they're people who've run large-scale consumer and enterprise products at Google itself. Sturdy has become one of the firm's most visible Managing Partners, with Duolingo standing as her clearest public outcome — she backed the language-learning company years before its 2021 Nasdaq IPO and continues to sit on its board.",
    sources: [
      { label: "CapitalG Team", url: "https://capitalg.com/team/" }
    ]
  },
"david-lee-samsung-next": {
    name: "David Lee",
    firm: "Samsung NEXT",
    firmSlug: "samsung-next",
    title: "Head of Samsung NEXT & EVP, Samsung Electronics",
    joinedYear: 2018,
    education: ["BA, Johns Hopkins University", "MS, Electrical Engineering, Stanford University (NSF Graduate Fellow)", "JD, New York University School of Law"],
    previousExperience: [
      "Corporate Attorney, technology law firms",
      "Business Development, StumbleUpon (acquired by eBay)",
      "Founding member, Google New Business Development team",
      "Investor, Baseline Ventures",
      "Co-Founder, SV Angel (backed Airbnb, Twitter, Dropbox, Pinterest, Stripe, DoorDash, Snap, Instacart)",
      "Co-Founder & Chairman, Refactor Capital"
    ],
    investmentFocus: ["AI", "Healthtech", "Frontier Technology", "SaaS"],
    notableInvestments: [
      { name: "Airbnb", ticker: "ABNB" },
      { name: "DoorDash", ticker: "DASH" },
      { name: "Stripe", ticker: null },
      { name: "Instacart", ticker: "CART" }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 0,
    careerTimeline: [
      { year: "2007", event: "StumbleUpon, where he worked in business development, is acquired by eBay." },
      { year: "2009", event: "Becomes a founding member of Google's New Business Development team, then joins Baseline Ventures." },
      { year: "2009", event: "Co-founds SV Angel, backing Airbnb, Twitter, Dropbox, Pinterest, Snap, Stripe, DoorDash, and Instacart at seed stage." },
      { year: "2018", event: "Co-founds and chairs Refactor Capital, a seed fund focused on health and biology, and joins Samsung as Head of Samsung NEXT." }
    ],
    biography: "David Lee's path to running Samsung NEXT ran through corporate law, Google, and some of Silicon Valley's most consequential seed bets. After a Stanford electrical engineering degree and an NYU law degree, he worked as a corporate attorney before moving into business development at StumbleUpon and then joining Google's New Business Development team at its founding. He co-founded SV Angel in 2009, where seed checks into Airbnb, Twitter, Dropbox, Pinterest, Snap, Stripe, DoorDash, and Instacart built one of the most recognizable angel track records of that era. A stage-four lymphoma diagnosis in the 1990s shaped a lasting focus on health and wellness investing, which led him to co-found and chair Refactor Capital, a seed fund dedicated to health and biology, before taking the helm at Samsung NEXT. He now runs Samsung's global startup investing arm despite not speaking Korean, bringing a distinctly Western venture sensibility to one of Asia's largest corporate investors.",
    sources: [
      { label: "Samsung NEXT Team", url: "https://www.samsungnext.com/team/" },
      { label: "Grokipedia — David Lee", url: "https://grokipedia.com/page/David_Lee_(investor)" }
    ]
  },
"michelle-gonzalez": {
    name: "Michelle Gonzalez",
    firm: "M12",
    firmSlug: "m12",
    title: "Corporate Vice President & Global Head",
    joinedYear: 2022,
    education: ["BA, Business Administration, University of Oklahoma", "JD, Yale Law School"],
    previousExperience: [
      "Consultant, McKinsey & Company",
      "Senior Product & Business Leader, Apple (News, Books & Movies, outside the U.S.)",
      "Partner, IBM Ventures (AI, blockchain & quantum computing)",
      "Entrepreneur-in-Residence & Investor, Comcast Ventures (including its Catalyst Fund for underrepresented founders)",
      "Managing Partner, Area 120 (Google's internal incubator)"
    ],
    investmentFocus: ["AI", "Enterprise Software", "Startup Incubation"],
    notableInvestments: [
      { name: "TaskUs", ticker: "TASK" },
      { name: "PandaDoc", ticker: null },
      { name: "Wallaroo", ticker: null }
    ],
    boardSeats: ["Go1", "SpyCloud", "Databook", "TaskUs"],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2016", event: "Joins IBM Ventures as a Partner, focused on AI, blockchain, and quantum computing partnerships." },
      { year: "2018", event: "Joins Google as Managing Partner of Area 120, its internal incubator." },
      { year: "2022", event: "Named Corporate Vice President and Global Head of M12, Microsoft's venture fund." },
      { year: "2023", event: "Under her leadership, Microsoft marks M12's track record at 100+ companies, 15 unicorns, and 6 IPOs." }
    ],
    biography: "Michelle Gonzalez brought an unusually wide-ranging background to M12 when she was named its Corporate Vice President and Global Head in 2022. After starting her career at McKinsey and spending more than seven years as a senior product leader at Apple, she moved into venture and incubation roles at Comcast Ventures — where she also managed capital deployment for its Catalyst Fund supporting Black and Latinx seed-stage founders — and then IBM Ventures, focused on AI, blockchain, and quantum computing partnerships. Immediately before M12 she ran Google's Area 120 internal incubator as Managing Partner, leading a strategic realignment that produced a record number of projects successfully 'spinning in' to become core Google products. That incubation-and-venture combination now defines how she runs M12: she has proactively aligned the fund closer to Microsoft's senior leadership while preserving autonomous investment decisions, and currently sits on the boards of Go1, SpyCloud, Databook, and TaskUs.",
    sources: [
      { label: "M12 Team", url: "https://m12.vc/team/michelle-gonzalez/" },
      { label: "Global Venturing Powerlist 2022", url: "https://globalventuring.com/corporate/gcv-powerlist-2022-13-michelle-gonzalez/" }
    ]
  },
"scott-darling": {
    name: "Scott Darling",
    firm: "Dell Technologies Capital",
    firmSlug: "dell-technologies-capital",
    title: "Founding Partner & President",
    joinedYear: 2012,
    education: ["BA, Economics & Computer Science, UC Santa Cruz", "MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "Product Marketing, High-End Systems, Apple",
      "Multiple General Manager & Marketing roles, Intel",
      "Vice President & Managing Director, Intel Capital",
      "General Partner, Frazier Technology Ventures (12 years)",
      "President, EMC Corporate Development and Ventures"
    ],
    investmentFocus: ["Silicon", "Cybersecurity", "Core Enterprise Software", "Ecommerce & Logistics"],
    notableInvestments: [
      { name: "Zscaler", ticker: "ZS" },
      { name: "DocuSign", ticker: "DOCU" },
      { name: "MongoDB", ticker: "MDB" },
      { name: "Nutanix", ticker: null }
    ],
    boardSeats: ["Zscaler", "Lightbend", "Exotec", "Datometry", "Noodle.ai", "VAST Data"],
    ipoCount: 7,
    majorExits: 0,
    careerTimeline: [
      { year: "1981", event: "Graduates UC Santa Cruz with a degree in economics and computer science." },
      { year: "1988", event: "Completes his MBA at Stanford, after early roles at Apple and two PC industry startups." },
      { year: "2000", event: "Joins Intel Capital as Vice President and Managing Director, managing teams supporting more than two-thirds of Intel's revenue." },
      { year: "2012", event: "Founds the venture practice inside EMC that becomes Dell Technologies Capital, leading Zscaler's Series A as its first institutional investor." },
      { year: "2018", event: "Zscaler goes public; Darling continues to serve on its board." },
      { year: "2021", event: "Served 11 years on DocuSign's board through its own path to and through the public markets." }
    ],
    biography: "Scott Darling has spent more than two decades moving between operating and venture roles at some of the largest technology companies in the world, giving Dell Technologies Capital an unusually deep bench of institutional experience for a corporate venture arm. After early product marketing roles at Apple and a decade rising through Intel — eventually becoming Vice President and Managing Director of Intel Capital, where he oversaw investment teams supporting more than two-thirds of Intel's total revenue — he spent 12 years as a General Partner at Frazier Technology Ventures before EMC recruited him to start its venture practice in 2012. That practice became Dell Technologies Capital after Dell's acquisition of EMC, and Darling has run it as President ever since, describing it as pulling the best of both his Intel Capital and Frazier experience. He led Zscaler's Series A as DTC's first institutional investment and still sits on its board today, alongside a run of other IPO outcomes — DocuSign, JFrog, MongoDB, Nutanix — that have made DTC one of the more consistently productive corporate venture arms in enterprise technology.",
    sources: [
      { label: "Dell Technologies Capital Team", url: "https://www.delltechnologiescapital.com/team/scott-darling" },
      { label: "Global Venturing Powerlist 2025", url: "https://globalventuring.com/corporate/awards/powerlist-2025-scott-darling/" }
    ]
  },
"ulrich-thiem": {
    name: "Ulrich Thiem",
    firm: "Porsche Ventures",
    firmSlug: "porsche-ventures",
    title: "Managing Director",
    joinedYear: 2019,
    education: ["PhD, Law, Universität Osnabrück"],
    previousExperience: [
      "Corporate Lawyer, CMS (Frankfurt)",
      "Legal Department, Porsche AG",
      "Director, Corporate Affairs & Investments, Porsche AG"
    ],
    investmentFocus: ["Auto Tech", "Intelligent Enterprise", "Sustainability", "Mobility"],
    notableInvestments: [
      { name: "Fleetonomy", ticker: null },
      { name: "Greyp Bikes", ticker: null },
      { name: "Cresta", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 2,
    careerTimeline: [
      { year: "2011", event: "Joins Porsche AG's legal department after working as a corporate lawyer at CMS in Frankfurt." },
      { year: "2016", event: "Porsche establishes Porsche Ventures; Thiem moves into corporate affairs and investments." },
      { year: "2019", event: "Becomes Managing Director of Porsche Ventures." },
      { year: "2020", event: "Oversees the sale of portfolio company Fleetonomy to Via." },
      { year: "2021", event: "Oversees Porsche's own acquisition of portfolio company Greyp Bikes." }
    ],
    biography: "Ulrich Thiem came to Porsche Ventures through law, not finance — a PhD in law from Universität Osnabrück and a stint as a corporate lawyer at CMS in Frankfurt before joining Porsche's legal department in 2011. That legal and corporate-affairs background shaped how he built out Porsche Ventures after taking over as Managing Director in 2019, three years after the unit's founding: a strategic investor focused on customer experience, mobility, and digital lifestyles, with a growing emphasis on AI and future technology. Under his leadership the firm has run a lean team — around 17 people managing roughly 35 active investments — while still producing real outcomes, including the 2020 sale of Israeli fleet mobility company Fleetonomy to Via and Porsche's own 2021 acquisition of ebike maker Greyp Bikes, a portfolio company Porsche liked enough to buy outright.",
    sources: [
      { label: "Global Venturing Powerlist 2022", url: "https://globalventuring.com/corporate/gcv-powerlist-2022-ulrich-thiem/" },
      { label: "Global Venturing Powerlist 2023", url: "https://globalventuring.com/corporate/corporate-venturer/powerlist-2023-ulrich-thiem/" }
    ]
  },
 "baris-guzel": {
    name: "Baris Guzel",
    firm: "BMW i Ventures",
    firmSlug: "bmw-i-ventures",
    title: "Partner",
    joinedYear: 2017,
    education: ["BS, Industrial Engineering, Istanbul Technical University", "MEM, Duke University", "MBA, UNC Kenan-Flagler Business School (Dean's Fellow)"],
    previousExperience: [
      "Venture capital roles in Hamburg, Germany (DAAD scholarship)",
      "Technology Investment Banking Associate, Deutsche Bank",
      "Venture Capital Associate, Presidio Partners"
    ],
    investmentFocus: ["Mobility", "Manufacturing", "Supply Chain", "Climate"],
    notableInvestments: [
      { name: "Xometry", ticker: "XMTR" },
      { name: "ChargePoint", ticker: "CHPT" },
      { name: "Tekion", ticker: null },
      { name: "Zūm", ticker: null }
    ],
    boardSeats: ["AMPECO", "Our Next Energy"],
    ipoCount: 2,
    majorExits: 1,
    careerTimeline: [
      { year: "2015", event: "Leads global expansion of VCIC, the world's largest venture capital competition, as a graduate student at UNC Kenan-Flagler." },
      { year: "2017", event: "Joins BMW i Ventures in March after roles at Deutsche Bank and Presidio Partners; leads Xometry's Series B as his first investment." },
      { year: "2019", event: "Leads or co-leads investments in Tekion, AutoFi, and Zūm." },
      { year: "2020", event: "Mapillary, a portfolio company he led the Series B for, is acquired by Facebook." },
      { year: "2021", event: "Xometry goes public on the Nasdaq in June; Guzel rings the opening bell with the company's team." }
    ],
    biography: "Baris Guzel's path into venture capital started on a manufacturing floor: growing up in Turkey obsessed with cars and technology, he interned conducting Kaizen studies at a car plant while studying industrial engineering at Istanbul Technical University. A DAAD scholarship took him into venture capital in Hamburg, Germany, and after a Duke engineering management degree and an MBA at UNC Kenan-Flagler — where he led VCIC, the world's largest venture capital competition — he worked in technology investment banking at Deutsche Bank before joining BMW i Ventures in 2017. His first investment for the firm was leading Xometry's Series B, and he stayed closely involved through the manufacturing marketplace's 2021 Nasdaq IPO, ringing the bell alongside its team. He has since led or co-led investments in Tekion, AutoFi, Zūm, and Solid Power, and continues to support ChargePoint and other public portfolio companies as they scale.",
    sources: [
      { label: "BMW i Ventures Team", url: "https://www.bmwiventures.com/team" },
      { label: "Xometry IPO Note", url: "https://www.bmwiventures.com/news/xometry-ipo" }
    ]
  },
"amy-burr": {
    name: "Amy Burr",
    firm: "SKY VC",
    firmSlug: "sky-vc",
    title: "CEO",
    joinedYear: 2018,
    education: [],
    previousExperience: [
      "Original Founder, Virgin America (strategy, corporate programs, commercial & revenue development)",
      "Led Virgin America's merger integration with Alaska Airlines"
    ],
    investmentFocus: ["Travel", "Hospitality", "Transportation", "Aviation"],
    notableInvestments: [
      { name: "Joby Aviation", ticker: "JOBY" }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2004", event: "Serves as an original founder of Virgin America, working across strategy and commercial development." },
      { year: "2016-2018", event: "Leads Virgin America's merger integration with Alaska Airlines before joining JetBlue Technology Ventures." },
      { year: "2018", event: "Joins JetBlue Technology Ventures as Managing Director of Operations and Partnerships." },
      { year: "2021", event: "Promoted to President following Bonny Simi's departure to Joby Aviation; Joby goes public in August." },
      { year: "2025", event: "Becomes CEO of SKY VC following the firm's transition from JetBlue Technology Ventures." }
    ],
    biography: "Amy Burr has spent more than 25 years at the intersection of aviation and technology, starting as an original founder of Virgin America in 2004, where she worked across strategy, corporate programs, and commercial development before leading the airline's merger integration with Alaska Airlines. She joined JetBlue Technology Ventures in 2018 as Managing Director of Operations and Partnerships, building the operational foundation that supported the fund's portfolio companies, and was promoted to President in 2021 after founding president Bonny Simi left to join portfolio company Joby Aviation directly following its public listing — a transition Simi has called a model for succession planning in corporate venture capital. Burr has since guided the fund's evolution from a wholly-owned JetBlue subsidiary into SKY VC, an independent fund under SKY Leasing, now leading its strategic vision as CEO across travel, hospitality, and transportation investing.",
    sources: [
      { label: "SKY VC Team", url: "https://www.sky-vc.com/team" },
      { label: "JetBlue Press Release", url: "https://news.jetblue.com/latest-news/press-release-details/2021/JetBlue-Promotes-Amy-Burr-to-President-JetBlue-Technology-Ventures-07-01-2021/default.aspx" }
    ]
  },
"arvind-purushotham": {
    name: "Arvind Purushotham",
    firm: "Citi Ventures",
    firmSlug: "citi-ventures",
    title: "Global Head of Citi Ventures",
    joinedYear: 2011,
    education: ["BSEE, Indian Institute of Technology, Madras", "MSEE, Case Western Reserve University", "MBA (Distinction), Harvard Business School"],
    previousExperience: [
      "Design Engineer & Program Manager, Intel Corporation (Pentium & Mobile Pentium II)",
      "Managing Director, Menlo Ventures (nearly a decade)"
    ],
    investmentFocus: ["Financial Services", "Cybersecurity", "Enterprise Infrastructure"],
    notableInvestments: [
      { name: "Betterment", ticker: null },
      { name: "Tanium", ticker: null },
      { name: "Pindrop", ticker: null },
      { name: "Silver Tail Systems", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "1995", event: "Joins Intel as a design engineer working on Pentium chip designs, later promoted to program manager for Mobile Pentium II." },
      { year: "1999", event: "Leaves Intel to pursue his MBA at Harvard Business School." },
      { year: "2001", event: "Joins Menlo Ventures as Managing Director, spending nearly a decade investing and serving on boards." },
      { year: "2011", event: "Joins Citi Ventures in January as Managing Director to help build its strategic venture investing program." },
      { year: "2020", event: "Helps launch the Citi Impact Fund, backing women and minority entrepreneurs." }
    ],
    biography: "Arvind Purushotham's path into venture capital started in electrical engineering, not finance: after a BSEE from IIT Madras and an MSEE from Case Western Reserve, he spent four years at Intel designing Pentium chips before earning his Harvard MBA and joining Menlo Ventures, where he spent nearly a decade as a Managing Director backing companies like Cavium Networks and nCircle Network Security. He joined Citi Ventures in January 2011 to help build its strategic venture investing program from the ground up, drawn by the realization that large banks needed exactly the kind of front-end and back-end technology overhaul that venture-backed startups were building. Under his leadership the group has invested in more than 120 companies including Betterment, Tanium, Pindrop, and Persado, with Silver Tail Systems' acquisition by EMC among its clearest realized outcomes, and in 2020 he helped launch the Citi Impact Fund, a dedicated vehicle for backing women and minority entrepreneurs across sustainability and financial inclusion.",
    sources: [
      { label: "Citi Ventures Bio", url: "https://www.citi.com/ventures/bio/arvind-purushotham.html" },
      { label: "Global Venturing Powerlist 2023", url: "https://globalventuring.com/corporate/corporate-venturer/powerlist-2023-arvind-purushotham/" }
    ]
  },
   "bernard-liautaud": {
    name: "Bernard Liautaud",
    firm: "Balderton Capital",
    firmSlug: "balderton-capital",
    title: "Managing Partner",
    joinedYear: 2008,
    education: [],
    previousExperience: [
      "Founder & CEO, Business Objects (15 years)"
    ],
    investmentFocus: ["Enterprise Software", "AI", "Data Infrastructure"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2008", event: "Joins Balderton Capital after 15 years founding and running Business Objects." },
      { year: "2016", event: "Named Managing Partner of Balderton Capital." }
    ],
    biography: "Bernard Liautaud gives Balderton a level of founder-operator credibility that few European venture firms can match, having founded and run Business Objects — one of Europe's first genuinely global enterprise software companies — for 15 years before joining Balderton in 2008. That history is central to why the firm has stayed comfortable backing technically ambitious, category-defining software businesses rather than chasing consumer growth stories alone. He was named Managing Partner in 2016 and has anchored Balderton's enterprise and AI investing ever since, drawing directly on his own experience building and scaling a category-leading software company from Europe.",
    sources: [
      { label: "Balderton Capital Team", url: "https://www.balderton.com/team/bernard-liautaud/" }
    ]
  },
   "niklas-zennstrom": {
    name: "Niklas Zennström",
    firm: "Atomico",
    firmSlug: "atomico",
    title: "Founder & CEO",
    joinedYear: 2006,
    education: ["Uppsala University"],
    previousExperience: [
      "Co-Founder, Skype",
      "Co-Founder, Kazaa",
      "Co-Founder, Joltid"
    ],
    investmentFocus: ["Enterprise Software", "Consumer Internet", "Global Scale-Ups"],
    notableInvestments: [
      { name: "Supercell", ticker: null },
      { name: "Klarna", ticker: null },
      { name: "DeepL", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "2001", event: "Co-founds Skype after earlier co-founding Kazaa and Joltid." },
      { year: "2006", event: "Founds Atomico in London, built specifically to help European founders scale globally." },
      { year: "2016", event: "Portfolio company Supercell is sold to Tencent for roughly $8.6 billion." }
    ],
    biography: "Niklas Zennström's contribution to Atomico is institutional rather than narrowly thematic: after co-founding Kazaa, Joltid, and Skype, he built Atomico in 2006 as a direct corrective to Europe's historical venture capital gap. The firm's long-running emphasis on helping European founders expand globally is inseparable from Skype's own cross-border story — a product built in Europe that became a genuinely global category leader. That thesis has been repeatedly validated, most visibly through Supercell's roughly $8.6 billion sale to Tencent in 2016, one of the largest outcomes in European venture history, and through continued bets on companies like Klarna and DeepL.",
    sources: [
      { label: "Atomico Team", url: "https://atomico.com/team/niklas-zennstrom" }
    ]
  },
   "ben-blume": {
    name: "Ben Blume",
    firm: "Atomico",
    firmSlug: "atomico",
    title: "Partner",
    joinedYear: 2021,
    education: [],
    previousExperience: [],
    investmentFocus: ["AI", "Enterprise Software", "Industrial Tech", "Healthcare"],
    notableInvestments: [
      { name: "Spacemaker", ticker: null },
      { name: "Onna", ticker: null },
      { name: "Automation Hero", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2017", event: "Leads Atomico's Series A investment in Spacemaker as an investor at the firm." },
      { year: "2021", event: "Promoted to Partner at Atomico." }
    ],
    biography: "Ben Blume exemplifies Atomico's newer applied-AI posture, having led the firm's Series A investment in Spacemaker before later backing Onna and Automation Hero and being promoted to Partner in 2021. His focus on automation in core enterprise functions and real-world verticals reflects exactly where European technical depth can translate into durable software moats — an area of the portfolio that has grown alongside Atomico's original consumer and enterprise scale-up thesis.",
    sources: [
      { label: "Atomico Insights", url: "https://atomico.com/insights/home-grown-talent-our-newest-partner-ben-blume-and-two-new-principals" }
    ]
  },
   "saul-klein": {
    name: "Saul Klein",
    firm: "LocalGlobe",
    firmSlug: "localglobe",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2003,
    education: [],
    previousExperience: [
      "General Partner, Index Ventures",
      "Co-Founder & Original CEO, Lovefilm",
      "Original Skype executive team",
      "Chief Privacy Officer, Microsoft (following Firefly's sale)",
      "UK's first Technology Business Ambassador to Israel"
    ],
    investmentFocus: ["Pre-Seed", "Seed", "Consumer Internet", "Marketplaces", "Ecosystem Building"],
    notableInvestments: [
      { name: "Lovefilm", ticker: null },
      { name: "Platoon", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2003", event: "Co-founds LocalGlobe with his father, Robin Klein." },
      { year: "2022", event: "Phoenix Court, the family of funds built around LocalGlobe, announces a $500 million first close." },
      { year: "2023", event: "Publicly discusses the ambition to help European companies scale all the way to megacap status." }
    ],
    biography: "Saul Klein is one of the architects of the modern European startup ecosystem rather than just a conventional General Partner. His career spans operating, policy, angel formation, and venture institution building: he was part of Skype's original executive team, co-founded and served as original CEO of Lovefilm, became the UK's first Technology Business Ambassador to Israel, and served as Chief Privacy Officer at Microsoft following Firefly's sale, before becoming a General Partner at Index Ventures. That range of experience helps explain why LocalGlobe has always felt more like a civic platform than a pure finance product, and why he co-founded it with his father Robin Klein in 2003 as a deliberately ecosystem-first vehicle.",
    sources: [
      { label: "Phoenix Court Team", url: "https://www.phoenixcourt.vc/phoenix-court-team/saul-klein" }
    ]
  },
   "filip-dames": {
    name: "Filip Dames",
    firm: "Cherry Ventures",
    firmSlug: "cherry-ventures",
    title: "Founding Partner",
    joinedYear: 2012,
    education: [],
    previousExperience: [
      "Founder, digital marketplace for art and collectibles",
      "Founding team member, Zalando (product, business development & international expansion)"
    ],
    investmentFocus: ["Seed", "Product-Led Startups", "Consumer & Marketplace-First Companies"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2012", event: "Co-founds Cherry Ventures with Christian Meermann after working on Zalando's founding team." }
    ],
    biography: "Filip Dames is the clearest embodiment of Cherry Ventures' original thesis that Europe needed founders-turned-investors who understood the mechanics of blitzscaling from the inside. Before co-founding Cherry in 2012, he founded a digital marketplace for art and collectibles and joined Zalando's founding team, working across product, business development, and international expansion during the company's earliest and most explosive growth years. That Zalando background remains central to the firm's credibility among first-time operators building across fragmented European markets.",
    sources: [
      { label: "Cherry Ventures About", url: "https://cherry.vc/about" }
    ]
  },
   "par-jorgen-parson": {
    name: "Pär-Jörgen Pärson",
    firm: "Northzone",
    firmSlug: "northzone",
    title: "Partner",
    joinedYear: 2004,
    education: [],
    previousExperience: [
      "Longtime venture investor prior to Northzone"
    ],
    investmentFocus: ["Climate", "Health", "Consumer", "AI"],
    notableInvestments: [
      { name: "Spotify", ticker: "SPOT" },
      { name: "fuboTV", ticker: "FUBO" },
      { name: "iZettle", ticker: null },
      { name: "Avito", ticker: null }
    ],
    boardSeats: ["fuboTV"],
    ipoCount: 2,
    majorExits: 0,
    careerTimeline: [
      { year: "2004", event: "Joins Northzone as Partner." },
      { year: "2018", event: "Spotify, one of his best-known investments, completes its direct listing." }
    ],
    biography: "Pär-Jörgen Pärson is the canonical franchise investor at Northzone: with the firm since 2004, he was early enough to matter in the Spotify era and remains active in newer waves like climate and AI investing today. That breadth is an important reason Northzone still feels current rather than nostalgic decades into its history. His track record spans Spotify, iZettle, Avito, fuboTV, Spring Health, and Tandem Health, and he continues to serve on the board of fuboTV.",
    sources: [
      { label: "Northzone Team", url: "https://northzone.com/team/par-jorgen-parson" }
    ]
  },
   "ben-wilkinson": {
    name: "Ben Wilkinson",
    firm: "Molten Ventures",
    firmSlug: "molten-ventures",
    title: "Chief Executive Officer",
    joinedYear: 2016,
    education: [],
    previousExperience: [
      "Chief Financial Officer, Molten Ventures / Draper Esprit"
    ],
    investmentFocus: ["Portfolio Construction", "Public-Market Discipline", "Venture Scaling"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2016", event: "Joins the group as CFO." },
      { year: "2019", event: "Joins the board." },
      { year: "2024", event: "Becomes Chief Executive Officer in October." }
    ],
    biography: "Ben Wilkinson's rise from CFO to CEO is unusually important because Molten Ventures' listed structure makes capital discipline part of the investment story, not just a back-office function. He joined the group as CFO in 2016, joined the board in 2019, and was named CEO in October 2024. His appointment signals that the firm's next phase is as much about portfolio monetization and platform scalability — the operational discipline required of a publicly listed venture vehicle — as about pure origination.",
    sources: [
      { label: "Molten Ventures People", url: "https://www.moltenventures.com/people/partnership/ben-wilkinson" }
    ]
  },
   "alex-clavel": {
    name: "Alex Clavel",
    firm: "SoftBank Vision Fund",
    firmSlug: "softbank-vision-fund",
    title: "CEO",
    joinedYear: 2015,
    education: ["East Asian Studies, Princeton University"],
    previousExperience: [
      "Nearly 20 years in investment banking, Morgan Stanley (New York, Hong Kong, Shanghai, Tokyo)",
      "CEO, SoftBank Group International"
    ],
    investmentFocus: ["Platform Strategy", "AI", "Portfolio Monetization", "Capital Markets"],
    notableInvestments: [
      { name: "DoorDash", ticker: "DASH" }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "2015", event: "Joins SoftBank after nearly 20 years in investment banking at Morgan Stanley." },
      { year: "2020", event: "DoorDash, a portfolio company, goes public at a $71.2 billion valuation." },
      { year: "2025", event: "Reports DoorDash as SVF1's best-performing fully exited asset, with a $7.3 billion gain." }
    ],
    biography: "Alex Clavel's role has been to impose process and portfolio discipline on a franchise once defined almost entirely by Masayoshi Son's personal appetite for scale. After a Princeton degree in East Asian Studies and nearly 20 years in investment banking at Morgan Stanley across New York, Hong Kong, Shanghai, and Tokyo, he joined SoftBank in 2015 and later served as CEO of SoftBank Group International before taking the helm of the Vision Funds. His 2025 annual-report message is especially telling: it frames SoftBank less as a vision-only investor and more as a large, cycle-aware asset manager for AI-era category leaders, citing DoorDash's $71.2 billion IPO and $7.3 billion realized gain as proof of that discipline paying off.",
    sources: [
      { label: "Vision Fund Team", url: "https://visionfund.com/team/alex-clavel" }
    ]
  },
   "yuri-milner": {
    name: "Yuri Milner",
    firm: "DST Global",
    firmSlug: "dst-global",
    title: "Founder",
    joinedYear: 2009,
    education: [],
    previousExperience: [
      "Built Digital Sky Technologies, which later became Mail.ru Group / VK"
    ],
    investmentFocus: ["Consumer Internet", "Social Platforms", "Global Growth Equity"],
    notableInvestments: [
      { name: "Meta Platforms", ticker: "META" },
      { name: "Alibaba", ticker: "BABA" },
      { name: "Spotify", ticker: "SPOT" }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 0,
    careerTimeline: [
      { year: "2009", event: "Founds DST Global after building Digital Sky Technologies, later Mail.ru Group." },
      { year: "2012", event: "Facebook, one of his best-known early crossover investments, goes public at a $104 billion valuation." }
    ],
    biography: "Yuri Milner's importance in venture history is less about operational platform building and more about capital formation: he helped normalize large private late-stage rounds for internet leaders before that market was institutionally mature. Before founding DST Global in 2009, he built Digital Sky Technologies, which later became Mail.ru Group and then VK. DST's enduring mystique comes from that original playbook — writing outsized, high-conviction checks into companies like Facebook, Alibaba, Twitter, and Spotify years before they went public, with Facebook's $104 billion 2012 IPO standing as the clearest proof of that early conviction.",
    sources: [
      { label: "DST Global", url: "https://dst-global.com" },
      { label: "Wikipedia — DST Global", url: "https://en.wikipedia.org/wiki/DST_Global" }
    ]
  },
   "jenny-lee": {
    name: "Jenny Lee",
    firm: "GGV Capital",
    firmSlug: "ggv-capital",
    title: "Senior Managing Partner (now Granite Asia)",
    joinedYear: 2005,
    education: ["Cornell University", "Kellogg School of Management"],
    previousExperience: [
      "Early career, Morgan Stanley",
      "Early career, JAFCO Asia"
    ],
    investmentFocus: ["Edtech", "Fintech", "Consumer Internet", "APAC Scale Investing"],
    notableInvestments: [
      { name: "Grab", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2005", event: "Establishes GGV's Shanghai office as one of the architects of the firm's Asia strategy." },
      { year: "2024", event: "Continues to lead the Asia franchise as it rebrands to Granite Asia following the GGV split." }
    ],
    biography: "Jenny Lee is the single most important person for understanding GGV Capital's Asia strategy. After early career roles at Morgan Stanley and JAFCO Asia, she joined GGV's senior leadership in 2005 and established its Shanghai office, helping turn a transpacific venture firm into one of the few franchises with durable credibility across Southeast Asia, China, and India. Her record includes Grab and other APAC champions, and she now anchors Granite Asia's post-split identity as the successor to GGV's Asia business.",
    sources: [
      { label: "Granite Asia", url: "https://www.graniteasia.com/who-we-are?p=jenny-lee" }
    ]
  },
   "rajan-anandan": {
    name: "Rajan Anandan",
    firm: "Peak XV Partners",
    firmSlug: "peak-xv-partners",
    title: "Managing Director",
    joinedYear: null,
    education: [],
    previousExperience: [
      "Led Google in India and Southeast Asia",
      "McKinsey & Company"
    ],
    investmentFocus: ["Seed", "Early-Stage", "Founder-Market Fit", "India & Global Software/Internet"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2000s", event: "Joins McKinsey & Company after college." },
      { year: "2010s", event: "Leads Google's business across India and Southeast Asia." }
    ],
    biography: "Rajan Anandan's value proposition at Peak XV Partners is founder judgment rather than a narrow sector label. Before joining the firm, he led Google's business across India and Southeast Asia after joining McKinsey & Company out of college. His current profile at Peak XV emphasizes resilience, curiosity, and founder-market fit — themes that fit the firm's long-running reputation for backing ambitious first-generation company builders across South Asia — and he also advises early-stage investments and mentors founders through Surge, Peak XV's accelerator program.",
    sources: [
      { label: "Peak XV Team", url: "https://www.peakxv.com/team/rajan-anandan" }
    ]
  },
   "robert-nelsen": {
    name: "Robert Nelsen",
    firm: "ARCH Venture Partners",
    firmSlug: "arch-venture-partners",
    title: "Co-Founder & Managing Director",
    joinedYear: 1986,
    education: ["BS, Economics & Biology, University of Puget Sound", "MBA, University of Chicago"],
    previousExperience: [],
    investmentFocus: ["Biotech", "Genomics", "AI-Driven Drug Discovery", "Cellular Rejuvenation"],
    notableInvestments: [
      { name: "Illumina", ticker: "ILMN" },
      { name: "Beam Therapeutics", ticker: "BEAM" },
      { name: "Karuna Therapeutics", ticker: null },
      { name: "Denali Therapeutics", ticker: "DNLI" }
    ],
    boardSeats: ["Vir Biotechnology", "Sana Biotechnology", "Lyell Immunopharma", "insitro", "Prime Medicine"],
    ipoCount: 8,
    majorExits: 3,
    careerTimeline: [
      { year: "1986", event: "Co-founds ARCH Venture Partners at its founding." },
      { year: "1992", event: "Makes his first biotech investment, in Aviron, developer of the nasal-spray flu vaccine." },
      { year: "2000", event: "Provides the first seed funding for Illumina, later a genomic sequencing leader." },
      { year: "2019", event: "Array BioPharma, one of his investments, is acquired by Pfizer for $10.6 billion." },
      { year: "2023", event: "Karuna Therapeutics is acquired by Bristol Myers Squibb for $14 billion in December." },
      { year: "2024", event: "Backs three major biotech rounds: Xaira Therapeutics ($1B round, $2.15B valuation), Metsera, and Mirador Therapeutics." }
    ],
    biography: "Robert Nelsen co-founded ARCH Venture Partners at its founding in 1986 and has spent nearly four decades since sourcing, financing, and building biotechnology companies from the earliest possible stage — often co-founding them directly alongside the scientists whose research they're built on. His track record is genuinely rare in venture capital: more than 150 companies financed, over 50 reaching billion-dollar valuations, including early seed funding for Illumina, which became one of the most consequential genomics companies in the world. His exits include Bristol Myers Squibb's $14 billion acquisition of Karuna Therapeutics in 2023 and Pfizer's $10.6 billion purchase of Array BioPharma in 2019, and he remains one of the most active biotech investors in the industry, backing three separate billion-dollar-plus rounds in 2024 alone.",
    sources: [
      { label: "ARCH Venture Partners Team", url: "https://www.archventure.com/team/robert-nelsen/" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/robert-nelsen/" }
    ]
  },
   "marc-stad": {
    name: "Marc Stad",
    firm: "Dragoneer Investment Group",
    firmSlug: "dragoneer-investment-group",
    title: "Founder & Managing Partner",
    joinedYear: 2012,
    education: ["AB, Government, Harvard College (magna cum laude)", "MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "Consultant, McKinsey & Company",
      "Investment Professional, TPG Capital",
      "Associate, Parthenon Capital",
      "Partner & Portfolio Manager, Investment Group of Santa Barbara",
      "President & Commissioner, City and County of San Francisco Finance Corporation"
    ],
    investmentFocus: ["Growth Equity", "Crossover Investing", "AI", "Enterprise Software", "Consumer Internet"],
    notableInvestments: [
      { name: "Airbnb", ticker: "ABNB" },
      { name: "DoorDash", ticker: "DASH" },
      { name: "Snowflake", ticker: "SNOW" },
      { name: "Anthropic", ticker: null },
      { name: "Roblox", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 5,
    majorExits: 2,
    careerTimeline: [
      { year: "2012", event: "Founds Dragoneer Investment Group after roles at McKinsey, TPG Capital, and the Investment Group of Santa Barbara." },
      { year: "2016", event: "Leads a $2.6 billion leveraged buyout of AmWINS Group." },
      { year: "2019", event: "Invests in DoorDash's Series F, ahead of its 2020 IPO at a $55 billion market cap." },
      { year: "2020", event: "Airbnb, another Dragoneer investment, debuts at approximately $47 billion." },
      { year: "2025", event: "Co-leads Anthropic's $30 billion funding round." }
    ],
    biography: "Marc Stad founded Dragoneer Investment Group in 2012 after a career built on depth over display — stints at McKinsey, TPG Capital, and the Investment Group of Santa Barbara, following a Harvard degree and Stanford MBA. His investing philosophy centers on long-duration capital and concentrated conviction rather than a large volume of smaller bets, a discipline that produced back-to-back landmark outcomes: Dragoneer backed both DoorDash and Airbnb ahead of their 2020 IPOs, and Stad personally led a $2.6 billion leveraged buyout of insurance services company AmWINS in 2016, becoming its largest outside shareholder. He has continued that pattern into the AI era, co-leading Anthropic's $30 billion funding round in 2025, and has been featured on the Forbes Midas List, Fortune's 40 Under 40, and the Recode 100.",
    sources: [
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/marc-stad/" },
      { label: "Milken Institute", url: "https://milkeninstitute.org/events/global-conference-2023/speakers/marc-stad" }
    ]
  },
   "eduardo-saverin": {
    name: "Eduardo Saverin",
    firm: "B Capital Group",
    firmSlug: "b-capital-group",
    title: "Co-Founder & Co-CEO",
    joinedYear: 2015,
    education: ["Harvard University"],
    previousExperience: [
      "Co-Founder, Facebook"
    ],
    investmentFocus: ["Southeast Asia & India", "Enterprise Software", "Fintech", "Cross-Border Technology"],
    notableInvestments: [
      { name: "Ninja Van", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2004", event: "Co-founds Facebook while a student at Harvard University." },
      { year: "2012", event: "Meets Raj Ganguly in Singapore through mutual Harvard connections." },
      { year: "2015", event: "Co-founds B Capital Group with Raj Ganguly and Howard Morgan." },
      { year: "2016", event: "B Capital raises more than $143.6 million in its first fund, after already backing Ninja Van and Evidation Health." }
    ],
    biography: "Eduardo Saverin's public identity is inseparable from Facebook, which he co-founded as a Harvard student in 2004, but his second act at B Capital Group has been built around a distinctly different bet: that the next generation of transformative technology companies would emerge from cross-border, multinational markets rather than Silicon Valley alone. He met co-founder Raj Ganguly in Singapore in 2012 through mutual Harvard acquaintances, and the two built B Capital in 2015 with that international lens baked in from day one — Saverin, based in Singapore, has focused especially on investments across Southeast Asia and India, while Ganguly has overseen more of the firm's day-to-day operations from Los Angeles.",
    sources: [
      { label: "B Capital About", url: "https://b.capital/about/" },
      { label: "Wikipedia — B Capital", url: "https://en.wikipedia.org/wiki/B_Capital" }
    ]
  },
   "garry-tan": {
    name: "Garry Tan",
    firm: "Y Combinator",
    firmSlug: "y-combinator",
    title: "President & CEO",
    joinedYear: 2011,
    education: ["BS, Computer Systems Engineering, Stanford University"],
    previousExperience: [
      "Early Designer & Engineering Manager, Palantir Technologies",
      "Co-Founder, Posterous (YC S08, acquired by Twitter)",
      "Partner, Y Combinator (2011-2015)",
      "Co-Founder, Initialized Capital"
    ],
    investmentFocus: ["AI", "Developer Tools", "Consumer", "Founder-Led Company Building"],
    notableInvestments: [
      { name: "Coinbase", ticker: "COIN" },
      { name: "Instacart", ticker: "CART" },
      { name: "DoorDash", ticker: "DASH" }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 1,
    careerTimeline: [
      { year: "2005", event: "Founds and later sells Posterous, a blogging platform acquired by Twitter, through YC's Summer 2008 batch." },
      { year: "2011", event: "Joins Y Combinator as a partner, building key parts of the founder experience including Bookface and the Demo Day website." },
      { year: "2011", event: "Co-founds Initialized Capital, which he grows into a firm managing more than $3.2 billion in assets." },
      { year: "2023", event: "Becomes President and CEO of Y Combinator in January, succeeding Geoff Ralston." }
    ],
    biography: "Garry Tan brings a genuinely rare builder-to-investor-to-CEO path to Y Combinator's top job. After early engineering and design work at Palantir — where he designed the company's logo — he co-founded Posterous, a blogging platform that sold to Twitter through YC's own Summer 2008 batch, then became a YC partner himself from 2011 to 2015, building foundational pieces of the founder experience like Bookface. In parallel he co-founded Initialized Capital, growing it into a firm managing more than $3.2 billion before returning to YC as President and CEO in January 2023. He remains one of the most publicly visible leaders in venture capital, maintaining a large YouTube following, continuing to write code and build YC's internal tools himself, and pushing the organization hard into AI-first investing during his tenure.",
    sources: [
      { label: "Y Combinator People", url: "https://www.ycombinator.com/people" },
      { label: "TechCrunch", url: "https://techcrunch.com/?p=2383301" }
    ]
  },
   "hernan-kazah": {
    name: "Hernán Kazah",
    firm: "Kaszek Ventures",
    firmSlug: "kaszek-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2011,
    education: [],
    previousExperience: [
      "Finance Analyst, United Nations Development Program",
      "Finance Analyst, Ministry of Economy of Argentina",
      "Brand Manager, Procter & Gamble",
      "Co-Founder & COO/CFO, MercadoLibre (12 years)"
    ],
    investmentFocus: ["Fintech", "Marketplaces", "Ecommerce", "Latin America"],
    notableInvestments: [
      { name: "Nubank", ticker: "NU" },
      { name: "QuintoAndar", ticker: null },
      { name: "Kavak", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "1999", event: "Co-founds MercadoLibre, Latin America's largest ecommerce and fintech company, from scratch." },
      { year: "2007", event: "Serves as COO as MercadoLibre completes its Nasdaq IPO." },
      { year: "2011", event: "Leaves MercadoLibre with Nicolás Szekasy to found Kaszek Ventures." },
      { year: "2021", event: "Nubank, one of Kaszek's earliest fintech bets, goes public on the NYSE." }
    ],
    biography: "Hernán Kazah spent 12 years building MercadoLibre from scratch as a co-founder and COO before its 2007 Nasdaq IPO, giving him a genuinely rare credential when he and Nicolás Szekasy founded Kaszek Ventures in 2011: he'd already built the exact kind of category-defining Latin American technology company he was now trying to back in others. That operating experience shaped Kaszek's founder-first approach from day one — offering hands-on strategic guidance and local network access, not just capital, at a time when institutional venture capital had largely written off the region. His early conviction in Nubank, when it was still just founder David Vélez and a slide deck, became one of the clearest validations of that thesis once the Brazilian neobank went public in 2021.",
    sources: [
      { label: "AS/COA", url: "https://www.as-coa.org/speakers/hernan-kazah" },
      { label: "Americas Quarterly", url: "https://www.americasquarterly.org/article/still-betting-big-argentine-venture-capitalists-hernan-kazah-and-nicolas-szekasy/" }
    ]
  },
   "bill-ford": {
    name: "Bill Ford",
    firm: "General Atlantic",
    firmSlug: "general-atlantic",
    title: "Chairman & CEO",
    joinedYear: 1991,
    education: ["Amherst College"],
    previousExperience: [],
    investmentFocus: ["Growth Equity", "Technology", "Financial Services", "Global Expansion"],
    notableInvestments: [
      { name: "ByteDance", ticker: null },
      { name: "Slack", ticker: null },
      { name: "Alibaba", ticker: "BABA" }
    ],
    boardSeats: ["BlackRock", "ByteDance"],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "1991", event: "Joins General Atlantic." },
      { year: "2007", event: "Becomes CEO of General Atlantic." },
      { year: "2019", event: "Portfolio company Slack completes its NYSE direct listing." },
      { year: "2021", event: "Appointed Chairman of General Atlantic, adding the title to his CEO role." },
      { year: "2025", event: "Under his leadership, firm AUM reaches approximately $126 billion." }
    ],
    biography: "Bill Ford has spent more than three decades at General Atlantic, joining in 1991 and becoming CEO in 2007 before adding the Chairman title in 2021. Under his leadership the firm has expanded from a small family office serving founder Charles F. Feeney into a $126 billion global growth investor spanning 20 countries, broadening its platform well beyond traditional growth equity into credit, climate, and sustainable infrastructure strategies. Ford has overseen the firm's highest-profile bets in this era, including ByteDance, Slack, and Alibaba, and currently sits on the boards of BlackRock and ByteDance, giving him a rare vantage point across both public financial markets and one of the world's largest private technology companies.",
    sources: [
      { label: "General Atlantic — Bill Ford", url: "https://www.generalatlantic.com/people/william-ford/" },
      { label: "World Economic Forum", url: "https://www.weforum.org/people/william-ford/" }
    ]
  },
   "maha-ibrahim": {
    name: "Maha Ibrahim",
    firm: "Canaan Partners",
    firmSlug: "canaan-partners",
    title: "General Partner",
    joinedYear: 2000,
    education: ["BA, Economics, Stanford University", "MA, Sociology, Stanford University", "PhD, Economics, MIT"],
    previousExperience: [
      "Vice President of Business Development & Internet Operations, Qwest",
      "Consultant, Boston Consulting Group",
      "Management Consultant, PricewaterhouseCoopers"
    ],
    investmentFocus: ["Ecommerce", "Enterprise & Cloud", "Social Gaming"],
    notableInvestments: [
      { name: "The RealReal", ticker: "REAL" }
    ],
    boardSeats: ["The RealReal"],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2000", event: "Joins Canaan Partners as General Partner after roles at Qwest, Boston Consulting Group, and PricewaterhouseCoopers." },
      { year: "2011", event: "Becomes the first investor in The RealReal, sitting on the company's board." },
      { year: "2018", event: "Co-founds All Raise, the nonprofit focused on diversity in venture capital." },
      { year: "2019", event: "The RealReal goes public on the Nasdaq." }
    ],
    biography: "Maha Ibrahim has spent more than two decades at Canaan Partners, joining as a General Partner in 2000 after a career spanning Qwest, Boston Consulting Group, and PricewaterhouseCoopers, and building a reputation for spotting technology trends early — she was among the first investors to recognize the potential of social gaming. Her clearest and most personal proof point is The RealReal: she was the company's first investor, stayed on its board through years of growth, and remained through its 2019 Nasdaq IPO. She's also a founding member of All Raise, the nonprofit dedicated to increasing the number of women in venture capital and startup leadership, reflecting a career-long focus on funding and elevating female entrepreneurs.",
    sources: [
      { label: "Canaan — Maha Ibrahim", url: "https://www.canaan.com/team/maha-ibrahim" }
    ]
  },
   "sean-osullivan": {
    name: "Sean O'Sullivan",
    firm: "SOSV",
    firmSlug: "sosv",
    title: "Founder & Managing General Partner",
    joinedYear: 1995,
    education: [],
    previousExperience: [
      "Founder, MapInfo (street mapping technology, IPO 1994)",
      "Founder, Carma Technology"
    ],
    investmentFocus: ["Deep Tech", "Hardware", "Biotech", "Climate"],
    notableInvestments: [
      { name: "Formlabs", ticker: null },
      { name: "BitMEX", ticker: null },
      { name: "Memphis Meats", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "1985", event: "Founds MapInfo, inventing street mapping technology for personal computers." },
      { year: "1994", event: "MapInfo goes public." },
      { year: "1995", event: "Founds SOSV as a personal 'super angel' investment vehicle." },
      { year: "2009", event: "Launches Chinaccelerator, the first software accelerator in China." },
      { year: "2012", event: "Co-founds HAX with Cyril Ebersweiler, SOSV's hardware-focused accelerator." },
      { year: "2020", event: "SOSV ranks as the world's most active seed and early-stage investor in Q2, per Crunchbase data." }
    ],
    biography: "Sean O'Sullivan founded MapInfo in 1985, inventing street mapping technology for personal computers and taking the company public in 1994 — the exit that funded his second act as an investor. He founded SOSV in 1995 initially as a personal 'super angel' vehicle, investing his own money into two dozen companies before beginning to institutionalize the firm in 2007. His defining insight was that hardware and biotech founders couldn't be served by the same software-centric accelerator model that worked for internet startups, which led him to co-found HAX in 2012 and launch IndieBio in 2014 — vertical accelerators with genuine lab and fabrication infrastructure built in-house. That model made SOSV, by his own account, the world's most active investor across the US, Asia, and Europe combined in Q2 2020, a distinction few generalist venture firms could match.",
    sources: [
      { label: "SOSV — Sean O'Sullivan", url: "https://sosv.com/team/sean-osullivan/" },
      { label: "Asia Tech Daily", url: "https://asiatechdaily.com/sean-osullivan-founder-and-managing-partner-of-sosv/" }
    ]
  },
   "jay-hoag": {
    name: "Jay Hoag",
    firm: "TCV",
    firmSlug: "tcv",
    title: "Founding General Partner",
    joinedYear: 1995,
    education: [],
    previousExperience: [
      "Managing Director, Chancellor Capital Management (12+ years)"
    ],
    investmentFocus: ["Consumer Internet", "Streaming & Media", "Crossover Investing"],
    notableInvestments: [
      { name: "Netflix", ticker: "NFLX" },
      { name: "Facebook", ticker: "META" },
      { name: "Zillow", ticker: null }
    ],
    boardSeats: ["Netflix (Chairman)", "Zillow"],
    ipoCount: 6,
    majorExits: 0,
    careerTimeline: [
      { year: "1995", event: "Co-founds Technology Crossover Ventures with Rick Kimball after 12+ years at Chancellor Capital Management." },
      { year: "1999", event: "Joins Netflix's board of directors." },
      { year: "2002", event: "Netflix goes public on the Nasdaq, with TCV owning roughly 43% pre-IPO." },
      { year: "2012", event: "Personally leads TCV's $260 million investment in Facebook ahead of its IPO." },
      { year: "2026", event: "Continues to serve as Chairman of Netflix's board, more than 25 years after joining." }
    ],
    biography: "Jay Hoag has been a technology investor for more than 40 years, spending 12 years as a Managing Director at Chancellor Capital Management before co-founding Technology Crossover Ventures with Rick Kimball in 1995 — inventing the 'crossover' model of investing in both private and public technology companies from a single fund. His defining relationship is with Netflix: he joined the company's board in 1999, back when TCV owned roughly 43% of the pre-IPO company, and has stayed on as Chairman through Netflix's growth into a company worth more than $400 billion. He personally led TCV's $260 million investment in Facebook ahead of its 2012 IPO, doubling the position within months, and continues to chair TCV's Investment Committee more than three decades after founding the firm.",
    sources: [
      { label: "TCV — Jay Hoag", url: "https://www.tcv.com/team/jay-hoag" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/jay-hoag/" }
    ]
  },
   "nenad-marovac": {
    name: "Nenad Marovac",
    firm: "DN Capital",
    firmSlug: "dn-capital",
    title: "Founder & Managing Partner",
    joinedYear: 2000,
    education: ["BSc, Business Administration (cum laude, Distinction in Finance), San Diego State University", "MBA, Harvard Business School"],
    previousExperience: [
      "Financial Analyst, Leveraged Buyout Group, Bankers Trust",
      "Advisor, Treuhandanstalt (East German privatization)",
      "Partner, Advent International (London, TMT investments)"
    ],
    investmentFocus: ["Digital Marketplaces", "SaaS", "Fintech", "Consumer Internet"],
    notableInvestments: [
      { name: "AUTO1 Group", ticker: "AG1.DE" },
      { name: "Shazam", ticker: null },
      { name: "GoStudent", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 4,
    majorExits: 5,
    careerTimeline: [
      { year: "1991", event: "Moves to Berlin, advising the Treuhandanstalt on privatizing East German state assets during reunification." },
      { year: "2000", event: "Co-founds DN Capital with Harvard Business School classmate Steve Schlenker after a partnership at Advent International." },
      { year: "2014", event: "Shazam, one of his select investments, is sold to Apple." },
      { year: "2018", event: "Becomes Chairman of Invest Europe (formerly EVCA) for 2018/2019." },
      { year: "2021", event: "AUTO1 Group goes public on the Frankfurt Stock Exchange at approximately €7.9 billion, Germany's largest tech IPO at the time." }
    ],
    biography: "Nenad Marovac's path to founding DN Capital ran through post-reunification Berlin, where he advised the Treuhandanstalt on privatizing East German state assets in the early 1990s — an experience that gave him deep, early relationships across Germany's business community, years before DACH became a fashionable venture destination. After a Harvard MBA and a partnership at Advent International, he co-founded DN Capital in 2000 with his Harvard classmate Steve Schlenker, and that German foothold compounded over two decades into a portfolio anchored by category leaders like AUTO1 Group, HomeToGo, and Mister Spex — all of which went public on the Frankfurt Stock Exchange in 2021. AUTO1's roughly €7.9 billion debut, Germany's largest tech IPO at the time, let DN Capital exit 95% of its stake, and Marovac has twice been named to the Forbes Midas List Europe for that track record.",
    sources: [
      { label: "DN Capital — Nenad Marovac", url: "https://www.dncapital.com/nenad" },
      { label: "The Marque", url: "https://www.themarque.com/profile/nenad-marovac" }
    ]
  },
   "roy-bahat": {
    name: "Roy Bahat",
    firm: "Bloomberg Beta",
    firmSlug: "bloomberg-beta",
    title: "Head & Partner",
    joinedYear: 2013,
    education: ["Harvard College (Rhodes Scholar)"],
    previousExperience: [
      "President, IGN Entertainment (5 years)",
      "Chairman, OUYA",
      "Board Member, Revision3 (through its acquisition by Discovery)",
      "Board Member, Flixster (through its purchase by Warner Bros.)"
    ],
    investmentFocus: ["Machine Intelligence", "Future of Work", "Enterprise Software"],
    notableInvestments: [
      { name: "Replit", ticker: null },
      { name: "Flexport", ticker: null },
      { name: "MasterClass", ticker: null },
      { name: "Weights & Biases", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2000s", event: "Leads IGN Entertainment for five years as its president, prior to Bloomberg Beta." },
      { year: "2012", event: "Becomes chairman of OUYA, the Kickstarter-backed game console startup." },
      { year: "2013", event: "Launches Bloomberg Beta with an initial $75 million fund from Bloomberg L.P." },
      { year: "2022", event: "Bloomberg Beta closes its fourth fund and first opportunity fund, both at $75 million." }
    ],
    biography: "Roy Bahat came to venture capital from media and gaming operations, not finance — a Harvard-educated Rhodes Scholar who spent five years running IGN Entertainment before chairing OUYA, the crowdfunded game console startup. He launched Bloomberg Beta in 2013 with a distinctly unconventional structure for a corporate-backed fund: full transparency, with the firm's entire operating manual published openly on GitHub, and a flat decision-making model where any of the firm's three partners can independently approve a deal. Bahat has been explicit that he measures success less by raw financial return and more by founder outcomes — he cites 93 founders who've become millionaires from Bloomberg Beta's backing as his proudest metric — and under his leadership the firm has grown from a single $75 million fund to $450 million while staying capitalized entirely by Bloomberg L.P.",
    sources: [
      { label: "Bloomberg Beta", url: "https://www.bloombergbeta.com" },
      { label: "Newcomer", url: "https://www.newcomer.co/p/my-conversation-with-roy-bahat-as" }
    ]
  },
   "allison-goldberg": {
    name: "Allison Goldberg",
    firm: "Comcast Ventures",
    firmSlug: "comcast-ventures",
    title: "Managing Partner",
    joinedYear: 2021,
    education: [],
    previousExperience: [
      "Group Managing Director & SVP, Time Warner Investments"
    ],
    investmentFocus: ["Consumer Internet", "Enterprise Software", "Media & Advertising Technology"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2021", event: "Joins Comcast Ventures as Managing Partner in November, after running Time Warner Investments, where she oversaw checks of up to $25 million into private companies." }
    ],
    biography: "Allison Goldberg took over as Managing Partner of Comcast Ventures in November 2021, arriving from Time Warner Investments, where she ran the group responsible for checks of up to $25 million into private companies for both strategic and financial return. That background in balancing corporate strategic value with genuine financial investing discipline is central to how she now runs Comcast Ventures — a firm whose entire premise depends on generating real returns while giving portfolio companies genuine access to one of the largest media and telecom platforms in the world.",
    sources: [
      { label: "Comcast Ventures Team", url: "https://comcastventures.com/team/" },
      { label: "Wikipedia — Comcast Ventures", url: "https://en.wikipedia.org/wiki/Comcast_Ventures" }
    ]
  },
 "saemin-ahn": {
    name: "Saemin Ahn",
    firm: "Rakuten Capital",
    firmSlug: "rakuten-capital",
    title: "Founding & Managing Partner",
    joinedYear: 2013,
    education: [],
    previousExperience: [],
    investmentFocus: ["Machine Learning & AI", "New Energy", "Robotics", "Aerospace", "Mobility"],
    notableInvestments: [
      { name: "Lyft", ticker: "LYFT" }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2013", event: "Founds Rakuten Ventures, later Rakuten Capital." },
      { year: "2015", event: "Leads Rakuten's $300 million investment in Lyft's Series E, part of a $530 million round." },
      { year: "2019", event: "Lyft goes public on the Nasdaq." }
    ],
    biography: "Saemin Ahn founded Rakuten Ventures — now Rakuten Capital — in 2013, and has run its international investment strategy from Singapore ever since, taking positions across machine learning, new energy, robotics, and aerospace on behalf of one of Japan's largest internet conglomerates. His clearest and boldest move came in 2015, when he led Rakuten's $300 million commitment to Lyft's $530 million Series E, buying an 11.9% stake in the ride-sharing company years before it went public. That willingness to write outsized, conviction-driven checks into American consumer technology — unusual for a Japanese ecommerce company at the time — has defined Rakuten Capital's identity as a genuinely global corporate investor rather than a firm limited to backing Rakuten's own strategic interests.",
    sources: [
      { label: "Rakuten Capital", url: "https://capital.rakuten.com/" }
    ]
  },
   "jim-adler": {
    name: "Jim Adler",
    firm: "Toyota Ventures",
    firmSlug: "toyota-ventures",
    title: "Founder & General Partner",
    joinedYear: 2017,
    education: [],
    previousExperience: [
      "VP of Data & Business Development, Toyota Research Institute",
      "VP of Products & Marketing, Metanautix (acquired by Microsoft)",
      "VP of Data Systems & Chief Privacy Officer, Intelius (acquired by H.I.G. Capital)",
      "Founder, VoteHere (cryptographic secure online voting, funded by Cisco and HP)"
    ],
    investmentFocus: ["AI", "Robotics", "Autonomous Mobility", "Climate & Frontier Technology"],
    notableInvestments: [
      { name: "Nuro", ticker: null },
      { name: "May Mobility", ticker: null },
      { name: "Boxbot", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 2,
    careerTimeline: [
      { year: "2016", event: "Joins Toyota Research Institute as VP of Data and Business Development, after founding VoteHere and operating roles at Metanautix and Intelius." },
      { year: "2017", event: "Founds Toyota AI Ventures in July, launching with an initial $100 million fund." },
      { year: "2021", event: "Leads the firm's rebrand to Toyota Ventures, launching dedicated Frontier and Climate funds." },
      { year: "2024", event: "Announces two additional $150 million funds, pushing total AUM above $800 million." }
    ],
    biography: "Jim Adler brought a genuinely unusual mix of entrepreneurial, privacy, and data engineering experience to Toyota when he joined Toyota Research Institute in 2016, having previously founded VoteHere, a cryptographic online voting startup funded by Cisco and HP, and held VP roles at Metanautix (acquired by Microsoft) and Intelius (acquired by H.I.G. Capital). What began as work training Toyota's AI systems on driving data turned into a pitch for a dedicated venture fund, and in July 2017 he became founding managing director of Toyota AI Ventures. He's structured the firm from day one around founders as the primary customer rather than Toyota itself — an intentional choice, he's said, to keep the firm credible with entrepreneurs rather than behaving like a typical strategic investor. Under his leadership Toyota Ventures rebranded in 2021, expanded into climate and frontier technology, and grew assets under management past $800 million by 2024.",
    sources: [
      { label: "Toyota Ventures", url: "https://toyota.ventures/" },
      { label: "Global Venturing Powerlist 2025", url: "https://globalventuring.com/corporate/awards/powerlist-2025-jim-adler/" }
    ]
  },
   "ben-davey": {
    name: "Ben Davey",
    firm: "Barclays UK Ventures",
    firmSlug: "barclays-uk-ventures",
    title: "CEO",
    joinedYear: 2019,
    education: [],
    previousExperience: [
      "Group Head of Strategy, Barclays",
      "Mergers & Acquisitions specialist"
    ],
    investmentFocus: ["Fintech", "Internal Venture Building", "Digital Banking Infrastructure"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2019", event: "Becomes CEO of Barclays UK Ventures, after serving as Barclays' Group Head of Strategy." }
    ],
    biography: "Ben Davey moved from mergers and acquisitions into Barclays' internal strategy function before taking the CEO role at Barclays UK Ventures, and his approach reflects that dealmaking background applied to venture building rather than pure corporate investing. He's described the unit's model explicitly as trying to replicate a startup mentality inside a large bank — a multidisciplinary team where developers, data scientists, and M&A professionals work alongside each other, with roughly half the team holding direct investment experience and 15 founders or co-founders on staff. Under his leadership, the unit explores new business models through a mix of organic build-out, commercial partnerships, and venture investments, rather than functioning as a conventional corporate VC writing checks into companies it never actively builds.",
    sources: [
      { label: "Barclays — Barclays UK Ventures", url: "https://home.barclays/news/2019/2/barclays-uk-ventures--developing-business-models-for-the-future-/" }
    ]
  },
   "sudhir-sethi": {
    name: "Sudhir Sethi",
    firm: "Chiratae Ventures",
    firmSlug: "chiratae-ventures",
    title: "Founder & Chairman",
    joinedYear: 2006,
    education: ["Engineering degree, Electronics & Telecommunications", "MBA, Faculty of Management Studies, University of Delhi"],
    previousExperience: [
      "12 years at Wipro before moving into venture capital"
    ],
    investmentFocus: ["Consumer Internet", "Deep Tech", "Fintech", "Enterprise Software", "Healthcare"],
    notableInvestments: [
      { name: "Flipkart", ticker: null },
      { name: "Lenskart", ticker: null },
      { name: "PolicyBazaar", ticker: null },
      { name: "FirstCry", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 5,
    majorExits: 18,
    careerTimeline: [
      { year: "1994", event: "Leaves Wipro after 12 years to move into venture capital." },
      { year: "2001", event: "Recognized by Red Herring as one of India's leading venture capitalists." },
      { year: "2006", event: "Founds IDG Ventures India with TC Meenakshisundaram." },
      { year: "2007", event: "Backs Flipkart at an early stage." },
      { year: "2018", event: "Leads the firm's rebrand from IDG Ventures India to Chiratae Ventures after IDG's global dissolution." },
      { year: "2021", event: "PolicyBazaar goes public, one of five IPOs Chiratae has backed." }
    ],
    biography: "Sudhir Sethi spent 12 years at Wipro before venture capital pulled him away from routine corporate life, and he founded what became Chiratae Ventures in 2006 with TC Meenakshisundaram, initially as the Indian arm of IDG Ventures. The defining test of his leadership came when IDG dissolved as a global conglomerate mid-way through the firm's second fundraise — rather than fold, Sethi rebuilt the firm entirely around domestic Indian capital, betting that local investors would back Indian entrepreneurs with more conviction than foreign LPs ever could. That bet built one of India's most consequential venture portfolios: early stakes in Flipkart, Myntra, Lenskart, and PolicyBazaar, five portfolio IPOs, and $1.3 billion under management across seven funds. Sethi sits on Chiratae's Global Advisory Board alongside Ratan Tata and continues to serve on India's National Venture Capital Association executive committee.",
    sources: [
      { label: "Chiratae Ventures Team", url: "https://www.chiratae.com/team/" },
      { label: "Wikipedia — Chiratae Ventures", url: "https://en.wikipedia.org/wiki/Chiratae_Ventures" }
    ]
  },
   "richard-liu-5y": {
    name: "Richard Liu",
    firm: "5Y Capital",
    firmSlug: "5y-capital",
    title: "Founding Partner",
    joinedYear: 2008,
    education: ["China Europe International Business School"],
    previousExperience: [
      "Investment Professional, Morningside Group"
    ],
    investmentFocus: ["Information Technology", "Biotechnology", "Consumer", "Electric Vehicles"],
    notableInvestments: [
      { name: "Xiaomi", ticker: "1810.HK" },
      { name: "XPeng", ticker: "XPEV" },
      { name: "Kingsoft", ticker: null },
      { name: "Horizon Robotics", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 4,
    majorExits: 0,
    careerTimeline: [
      { year: "1999", event: "Joins the Morningside Group after attending China Europe International Business School." },
      { year: "2008", event: "Co-founds Morningside Venture Capital, later 5Y Capital, with Ken Shi." },
      { year: "2018", event: "Xiaomi, where he was the first institutional investor, goes public in Hong Kong at a roughly 800x return." },
      { year: "2026", event: "Named to the Forbes Midas List for the eleventh consecutive year, with 5Y Capital managing $6 billion in global capital." }
    ],
    biography: "Richard Liu joined the Morningside Group in 1999 after meeting co-founder Ken Shi at business school, and the two spun out their own fund in 2008 under the Morningside name, with the Chan family's blessing and backing as anchor investor. His defining bet came early: Liu was the first institutional investor in Xiaomi, a position that returned a reported 800 times its original investment once the smartphone maker went public in Hong Kong in 2018. He's now spent 11 consecutive years on the Forbes Midas List, with a portfolio spanning information technology, biotechnology, and consumer businesses including Xiaomi, XPeng, Kingsoft, and Horizon Robotics, and 5Y Capital under his leadership now manages $6 billion in global capital.",
    sources: [
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/richard-liu/" },
      { label: "The Wire China", url: "https://www.thewirechina.com/2021/07/18/who-is-5y-capital/" }
    ]
  },
   "shinichi-fuki": {
    name: "Shinichi Fuki",
    firm: "JAFCO Group",
    firmSlug: "jafco-group",
    title: "President & CEO",
    joinedYear: null,
    education: [],
    previousExperience: [],
    investmentFocus: ["Venture Investment", "Buyout Investment", "AI", "Space Technology"],
    notableInvestments: [
      { name: "Mercari", ticker: "4385.T" },
      { name: "Cybozu", ticker: "4776.T" }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2018", event: "Portfolio company Mercari goes public on the Tokyo Stock Exchange during his tenure leading JAFCO." },
      { year: "2025", event: "Under his leadership, JAFCO's assets under management reach approximately $6.8 billion, with more than 1,041 cumulative portfolio IPOs." }
    ],
    biography: "Shinichi Fuki has led JAFCO Group through more than five decades of the firm's history as President and CEO, overseeing what has become Japan's largest and longest-running independent venture capital institution. Under his leadership, JAFCO has continued to operate its dual venture-and-buyout model, supporting startups from pre-founding stages through IPO while also managing later-stage buyout investments in established small and mid-sized businesses. Fuki has guided the firm through a period of renewed strategic focus on AI, space technology, and nuclear fusion, aligning JAFCO's more recent bets with Japan's broader national technology priorities, while the firm's total capital commitments across domestic and international funds have grown past ¥1 trillion.",
    sources: [
      { label: "JAFCO Group", url: "https://www.jafco.co.jp/english/" },
      { label: "SuperScout", url: "https://superscout.co/investor/jafco-group" }
    ]
  },
   "thomas-tsao": {
    name: "Thomas Tsao",
    firm: "Gobi Partners",
    firmSlug: "gobi-partners",
    title: "Co-Founder & Chairman",
    joinedYear: 2002,
    education: ["BA, Economics, Harvard University"],
    previousExperience: [
      "Investor, WI Harper",
      "CEO, DMG (2 years)",
      "Board Member, Middle East Venture Capital Association"
    ],
    investmentFocus: ["Fintech", "Consumer", "Mobility", "TaqwaTech (Muslim Digital Economy)"],
    notableInvestments: [
      { name: "Airwallex", ticker: null },
      { name: "Tuniu", ticker: null },
      { name: "Carsome", ticker: null },
      { name: "Prenetics", ticker: "PRE" }
    ],
    boardSeats: ["Endeavor Malaysia"],
    ipoCount: 2,
    majorExits: 4,
    careerTimeline: [
      { year: "2002", event: "Co-founds Gobi Partners with Lawrence Tse and Wai Kit Lau, all previously at WI Harper." },
      { year: "2006", event: "Founds SEO China, a nonprofit that has since provided more than 200 internships to underserved college students." },
      { year: "2013", event: "Named to the Forbes List of China's Top VCs, a recognition repeated annually through 2017." },
      { year: "2015", event: "Relocates to Kuala Lumpur, establishing several funds with Malaysia's MAVCAP." },
      { year: "2018", event: "Launches Gobi's ASEAN SuperSeed Fund, backing Carsome and Airwallex at early stages." }
    ],
    biography: "Thomas Tsao has spent more than 30 years across venture capital, operations, and investment banking, and co-founded Gobi Partners in 2002 with two fellow WI Harper alumni to build one of the earliest genuinely Pan-Asian venture platforms. His early China portfolio includes first-round bets on Airwallex, Teambition (acquired by Alibaba), and Tuniu (Nasdaq IPO), earning him five consecutive years on the Forbes List of China's Top VCs. His 2015 relocation to Kuala Lumpur opened an entirely new chapter for the firm, establishing funds with Malaysia's MAVCAP and expanding Gobi into Southeast Asian companies like Carsome, Funding Societies, and Kumu. He's now building Gobi's TaqwaTech practice, one of the first dedicated venture theses focused on the global Muslim digital economy, and remains active in nonprofit work through SEO China, which he founded in 2006.",
    sources: [
      { label: "Gobi Partners Team", url: "https://www.gobi.vc/team/thomas-g-tsao" },
      { label: "The Org", url: "https://theorg.com/org/gobi-partners/org-chart/thomas-g-tsao" }
    ]
  },
   "reshma-sohoni": {
    name: "Reshma Sohoni",
    firm: "Seedcamp",
    firmSlug: "seedcamp",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2007,
    education: ["BS, Engineering & Business, University of Pennsylvania", "MBA, INSEAD"],
    previousExperience: [
      "Vodafone",
      "Jefferies Broadview"
    ],
    investmentFocus: ["Fintech", "SaaS", "AI", "US Expansion for European Founders"],
    notableInvestments: [
      { name: "Wise", ticker: "WISE" },
      { name: "UiPath", ticker: "PATH" },
      { name: "Revolut", ticker: null },
      { name: "Synthesia", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2007", event: "Co-founds Seedcamp with Saul Klein in London, after roles at Vodafone and Jefferies Broadview." },
      { year: "2019", event: "Leads Seedcamp's first backing of Synthesia in April, years before its $4 billion Series E valuation." },
      { year: "2021", event: "Awarded an MBE by Queen Elizabeth II for contributions to the British tech ecosystem; UiPath goes public at a $35 billion valuation." },
      { year: "2025", event: "Returns to the Forbes Midas Seed List for the fourth time." },
      { year: "2026", event: "Leads Seedcamp's $320 million raise and US expansion in June." }
    ],
    biography: "Reshma Sohoni was born in India, raised in the U.S., and studied engineering and business at the University of Pennsylvania before an INSEAD MBA and roles at Vodafone and Jefferies Broadview — a genuinely international path that shaped Seedcamp's identity as a firm built to help European founders think globally from day one. She co-founded the firm with Saul Klein in 2007, and has stayed personally involved with its biggest outcomes ever since: she was Synthesia's first backer in 2019, years before its $4 billion valuation, and Seedcamp's early conviction in Wise, Revolut, and UiPath produced three of Europe's genuine decacorns. She received an MBE from Queen Elizabeth II in 2021 for her contributions to the British tech ecosystem, has advised the U.K. government's Digital Economy Council, and returned to the Forbes Midas Seed List for a fourth time in 2025.",
    sources: [
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/reshma-sohoni/" },
      { label: "Seedcamp Team", url: "https://seedcamp.com/our-team/" }
    ]
  },
   "alex-von-frankenberg": {
    name: "Alex von Frankenberg",
    firm: "High-Tech Gründerfonds",
    firmSlug: "high-tech-grunderfonds",
    title: "Co-Founder & Managing Director",
    joinedYear: 2005,
    education: [],
    previousExperience: [],
    investmentFocus: ["Deep Tech", "Industrial Tech", "Digital Tech", "Life Sciences"],
    notableInvestments: [
      { name: "CureVac", ticker: "CVAC" }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 0,
    careerTimeline: [
      { year: "2005", event: "Co-founds High-Tech Gründerfonds in Bonn, becoming Managing Director." },
      { year: "2020", event: "Portfolio company CureVac goes public on the Nasdaq during his tenure." },
      { year: "2026", event: "Continues leading HTGF more than two decades after its founding, with fund volume surpassing €3 billion." }
    ],
    biography: "Alex von Frankenberg has led High-Tech Gründerfonds as Managing Director since co-founding it in 2005, running what remains one of the most structurally distinctive venture funds in Europe — a public-private partnership where his investment committee includes not just venture professionals but representatives from the German government, KfW Capital, and corporate limited partners like BASF and Bosch. That hybrid governance model gives HTGF a genuine developmental mandate alongside its commercial one: closing the equity gap for early-stage German technology companies that might otherwise struggle to find seed capital. Under his two-decade leadership, the fund has financed more than 800 startups, achieved nearly 200 exits, and backed CureVac through its 2020 Nasdaq IPO, one of the clearest proof points that patient, mission-driven seed capital can still produce genuinely global outcomes.",
    sources: [
      { label: "Altss — HTGF Profile", url: "https://altss.com/profile/high-tech-grunderfonds" },
      { label: "High-Tech Gründerfonds", url: "https://www.htgf.de" }
    ]
  },
   "noubar-afeyan": {
    name: "Noubar Afeyan",
    firm: "Flagship Pioneering",
    firmSlug: "flagship-pioneering",
    title: "Founder & CEO",
    joinedYear: 2000,
    education: ["BS, McGill University", "PhD, Biochemical Engineering, MIT"],
    previousExperience: [
      "Founder & CEO, PerSeptive Biosystems (grew to $100M annual revenue, acquired by PerkinElmer/Applera)",
      "SVP & Chief Business Officer, Applera, overseeing the creation of Celera Genomics",
      "Founding team member & investor, Chemgenics Pharmaceuticals (acquired by Millennium), Color Kinetics (acquired by Philips), Adnexus Therapeutics (acquired by Bristol-Myers Squibb)"
    ],
    investmentFocus: ["Biotechnology", "mRNA Medicine", "Life Sciences", "Company Creation"],
    notableInvestments: [
      { name: "Moderna", ticker: "MRNA" },
      { name: "Rubius Therapeutics", ticker: null }
    ],
    boardSeats: ["Moderna (Chairman)"],
    ipoCount: 1,
    majorExits: 4,
    careerTimeline: [
      { year: "1987", event: "Completes his doctoral work in biochemical engineering at MIT." },
      { year: "1998", event: "PerSeptive Biosystems, which he founded and grew to $100 million in annual revenue, is acquired by PerkinElmer/Applera." },
      { year: "2000", event: "Founds Flagship Pioneering in Cambridge." },
      { year: "2010", event: "Co-founds Moderna within Flagship's internal venture creation process." },
      { year: "2018", event: "Moderna goes public on the Nasdaq in December." },
      { year: "2025", event: "Awarded the National Medal of Technology and Innovation." }
    ],
    biography: "Noubar Afeyan fled the Lebanese Civil War with his family as a teenager, immigrating first to Canada and then the United States, before completing his PhD in biochemical engineering at MIT in 1987. He founded and built PerSeptive Biosystems to $100 million in annual revenue before its acquisition, then founded Flagship Pioneering in 2000 with an unusual model for venture capital: inventing companies internally rather than only funding outside founders. His best-known creation is Moderna, which he co-founded in 2010 and has chaired ever since — a company whose mRNA platform, developed years before anyone anticipated a pandemic, became central to the world's COVID-19 response. Afeyan has helped launch more than 70 public and private life sciences and technology companies over his career and was awarded the National Medal of Technology and Innovation in 2025.",
    sources: [
      { label: "Flagship Pioneering", url: "https://www.flagshippioneering.com/people/noubar-afeyan" },
      { label: "Wikipedia — Noubar Afeyan", url: "https://en.wikipedia.org/wiki/Noubar_Afeyan" }
    ]
  },
   "nigel-morris": {
    name: "Nigel Morris",
    firm: "QED Investors",
    firmSlug: "qed-investors",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2007,
    education: [],
    previousExperience: [
      "Co-Founder & President, Capital One (led the company's IPO in the 1990s)"
    ],
    investmentFocus: ["Fintech", "Neobanking", "Consumer Credit", "Global Financial Services"],
    notableInvestments: [
      { name: "Nubank", ticker: "NU" },
      { name: "SoFi", ticker: "SOFI" },
      { name: "Klarna", ticker: null },
      { name: "AvidXchange", ticker: null }
    ],
    boardSeats: ["ClearScore (Chairman)", "Mission Lane (Chairman)", "Remitly", "Bitso", "Current"],
    ipoCount: 2,
    majorExits: 1,
    careerTimeline: [
      { year: "1990s", event: "Co-founds Capital One and leads the company through its IPO." },
      { year: "2007", event: "Co-founds QED Investors with Frank Rotman." },
      { year: "2021", event: "Leads QED's early investment into Nubank, sitting on its advisory board through its December NYSE IPO at a $41 billion market cap." },
      { year: "2024", event: "Named to the Forbes Midas List for the fourth consecutive year, rising 48 spots." }
    ],
    biography: "Nigel Morris co-founded Capital One and helped lead the company through its 1990s IPO before deciding fintech founders needed investors who'd actually run a financial services company, not just funded one. He co-founded QED Investors in 2007 with fellow Capital One alum Frank Rotman, and his clearest proof point since has been Nubank: he led QED's early investment in the Brazilian neobank and sat on its advisory board through its December 2021 NYSE IPO at a $41 billion market cap, since grown to $57 billion. He chairs ClearScore and Mission Lane, sits on the boards of Remitly, Bitso, and Current, and has appeared on the Forbes Midas List for four consecutive years, climbing 48 spots in 2024 alone — the second-largest jump of any investor that year.",
    sources: [
      { label: "QED Investors — Nigel Morris", url: "https://www.qedinvestors.com/team/nigel-morris" },
      { label: "BusinessWire", url: "https://www.businesswire.com/news/home/20240606701949/en/" }
    ]
  },
   "carmichael-roberts": {
    name: "Carmichael Roberts",
    firm: "Breakthrough Energy Ventures",
    firmSlug: "breakthrough-energy-ventures",
    title: "Investment Committee Co-Lead",
    joinedYear: 2016,
    education: ["BS, Organic Chemistry, Duke University", "PhD, Organic Chemistry, Duke University"],
    previousExperience: [
      "Business Development, GelTex Pharmaceuticals (acquired by Genzyme for $1.3B)",
      "New Product & Business Development, Dow Chemical (formerly Union Carbide)",
      "President/CEO or Chairman, multiple materials-innovation ventures",
      "Co-Founder & Managing Partner, Material Impact"
    ],
    investmentFocus: ["Materials Innovation", "Climate Technology", "Industrial & Commercial Applications"],
    notableInvestments: [],
    boardSeats: ["Consumer Technology Association", "WGBH", "Massachusetts General Hospital Physicians Organization"],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "1998", event: "Works in business development at GelTex Pharmaceuticals, later acquired by Genzyme for $1.3 billion." },
      { year: "2010s", event: "Co-founds Material Impact, a fund building technology companies around materials innovation." },
      { year: "2013", event: "Elected to Duke University's Board of Trustees, later serving as Vice Chairman." },
      { year: "2016", event: "Joins Breakthrough Energy Ventures as Investment Committee Co-Lead." }
    ],
    biography: "Carmichael Roberts brings a materials-science and commercialization background to Breakthrough Energy Ventures that's genuinely distinctive among climate investors. After a Duke PhD in organic chemistry and roles at GelTex Pharmaceuticals — acquired by Genzyme for $1.3 billion — and Dow Chemical, he built a career licensing university technology and commercializing it through targeted Fortune 500 partnerships, an approach he later formalized by co-founding Material Impact. That same licensing-and-commercialization playbook now shapes how he co-leads BEV's investment committee, evaluating climate technologies against the fund's unusually strict bar: real, credible potential to eliminate at least 1% of global emissions. He serves as Vice Chairman of Duke's Board of Trustees and on the boards of the Consumer Technology Association and Massachusetts General Hospital's Physicians Organization.",
    sources: [
      { label: "TechCrunch — Carmichael Roberts", url: "https://techcrunch.com/author/carmichael-roberts" },
      { label: "Breakthrough Energy", url: "https://breakthroughenergy.org" }
    ]
  },
   "carl-gordon": {
    name: "Carl Gordon",
    firm: "OrbiMed",
    firmSlug: "orbimed",
    title: "Managing Partner & Head of Private Equity",
    joinedYear: 1995,
    education: ["AB, Chemistry & Physics, Harvard University", "PhD, Biology, MIT", "Postdoctoral Fellow, Rockefeller University"],
    previousExperience: [
      "Research role, ImClone Systems (1987-1988)"
    ],
    investmentFocus: ["Biotechnology", "Pharmaceuticals", "Medical Devices", "Company Formation"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "1987", event: "Graduates Harvard with an AB in Chemistry & Physics, then joins ImClone Systems." },
      { year: "1993", event: "Completes his PhD in Biology at MIT, followed by a postdoctoral fellowship at Rockefeller University." },
      { year: "1995", event: "Joins OrbiMed's predecessor firm." },
      { year: "1998", event: "Becomes a founding General Partner of OrbiMed Advisors following its split from Mehta & Isaly." },
      { year: "2026", event: "Leads OrbiMed's private equity team as the platform manages approximately $20 billion across public equity, private equity, and credit strategies." }
    ],
    biography: "Carl Gordon brings a genuinely rare combination of deep scientific training and two decades of venture leadership to OrbiMed. After a Harvard degree in Chemistry & Physics, a research stint at ImClone Systems, and a PhD in Biology from MIT followed by a Rockefeller University postdoc, he joined OrbiMed's predecessor firm in 1995 and became a founding General Partner when OrbiMed Advisors formally split off in 1998. He now leads OrbiMed's private equity team, one of three arms (alongside public equity and private credit) that let the firm fund healthcare companies from seed through IPO and beyond within a single specialist platform — a structure widely viewed in biotech as a genuine stamp of validation, with many companies specifically seeking OrbiMed's backing to help secure Nasdaq or HKEX listings. Gordon has appeared on the Forbes Midas List multiple times, founded and invested in numerous biotechnology companies, and served on both public and private company boards throughout his career.",
    sources: [
      { label: "OrbiMed — Carl Gordon", url: "https://www.orbimed.com/leadership/carl-l-gordon-ph-d-cfa/" },
      { label: "Wikipedia — OrbiMed", url: "https://en.wikipedia.org/wiki/OrbiMed" }
    ]
  },
   "nino-marakovic": {
    name: "Nino Marakovic",
    firm: "Sapphire Ventures",
    firmSlug: "sapphire-ventures",
    title: "CEO & Partner (Co-Founder)",
    joinedYear: 2006,
    education: ["BA, Economics & Psychology, Williams College", "MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "Investment Banker, Morgan Stanley, Goldman Sachs & Robertson Stephens",
      "Partner, Draper Fisher Jurvetson",
      "Partner, IVF Ventures"
    ],
    investmentFocus: ["Enterprise Software", "AI", "SaaS", "Growth-Stage Investing"],
    notableInvestments: [
      { name: "MuleSoft", ticker: null },
      { name: "Braze", ticker: "BRZE" }
    ],
    boardSeats: ["ActivTrak", "Adverity"],
    ipoCount: 5,
    majorExits: 40,
    careerTimeline: [
      { year: "2006", event: "Joins SAP Ventures, later leading the team, after roles at Morgan Stanley, Goldman Sachs, and Draper Fisher Jurvetson." },
      { year: "2011", event: "Leads SAP Ventures' spinout into an independent VC firm." },
      { year: "2014", event: "The firm rebrands to Sapphire Ventures." },
      { year: "2018", event: "MuleSoft, one of the firm's portfolio companies, is acquired by Salesforce for $6.5 billion." },
      { year: "2021", event: "Relocates with his family to establish Sapphire's Austin office." }
    ],
    biography: "Nino Marakovic was born in Croatia and built his early career in investment banking at Morgan Stanley, Goldman Sachs, and Robertson Stephens before moving into venture capital at Draper Fisher Jurvetson. He joined SAP Ventures in 2006, eventually leading the team through its 2011 spinout into an independent venture firm — a deal he personally engineered — and the firm rebranded to Sapphire Ventures in 2014. Over 25 years of investing and operating, Marakovic has backed more than 100 private companies and venture funds and been affiliated with nearly 40 exits between IPOs and M&A, including LinkedIn, Monday.com, Integral Ad Science, OpsRamp, and Braze. Colleagues describe him as an unusually calm, no-nonsense investor who avoids getting caught up in ideology, and he now sits on the boards of ActivTrak and Adverity.",
    sources: [
      { label: "Sapphire Ventures — Nino Marakovic", url: "https://sapphireventures.com/team-member/nino-marakovic/" },
      { label: "Grokipedia — Sapphire Ventures", url: "https://grokipedia.com/page/Sapphire_Ventures" }
    ]
  },
   "kirsten-green": {
    name: "Kirsten Green",
    firm: "Forerunner Ventures",
    firmSlug: "forerunner-ventures",
    title: "Founder & Managing Partner",
    joinedYear: 2012,
    education: [],
    previousExperience: [
      "Equity Research Analyst, Banc of America Securities (retail sector)"
    ],
    investmentFocus: ["Consumer", "Commerce", "Digital Health", "Fintech"],
    notableInvestments: [
      { name: "Warby Parker", ticker: "WRBY" },
      { name: "Chime", ticker: null },
      { name: "Glossier", ticker: null },
      { name: "Faire", ticker: null }
    ],
    boardSeats: ["Nordstrom", "Glossier", "Ritual", "Faire", "Hims & Hers"],
    ipoCount: 3,
    majorExits: 0,
    careerTimeline: [
      { year: "2010", event: "Leads Forerunner's early seed check into Warby Parker, before the firm's formal 2012 founding." },
      { year: "2012", event: "Founds Forerunner Ventures in San Francisco at age 40, after a career as a retail equity research analyst." },
      { year: "2013", event: "Makes an early investment in Glossier, a year ahead of its official 2014 launch." },
      { year: "2018", event: "Recognized on Time's 100 Most Influential People list." },
      { year: "2021", event: "Warby Parker goes public via NYSE direct listing." },
      { year: "2022", event: "Closes Fund VI at $1 billion." }
    ],
    biography: "Kirsten Green spent her early career as a retail equity research analyst at Banc of America Securities, deeply analyzing cohort behavior and unit economics for public retail companies — a rigor she carried directly into venture capital when she founded Forerunner in 2012, entering VC for the first time at age 40. That background gave her an unusually early read on direct-to-consumer commerce, and Forerunner became one of Silicon Valley's most concentrated consumer-focused funds as a result, leading early checks into Warby Parker, Chime, Glossier, Dollar Shave Club, and Faire. She's raised nearly $3 billion in assets under management since founding the firm, been named to Time's 100 Most Influential People and The New York Times' Top 20 Venture Capitalists, and now serves on the boards of Nordstrom, Glossier, Ritual, Faire, and Hims & Hers — a rare bridge between legacy retail and next-generation consumer companies.",
    sources: [
      { label: "Forerunner Ventures — Kirsten Green", url: "https://www.forerunnerventures.com/team/kirsten-green" },
      { label: "Wikipedia — Forerunner Ventures", url: "https://en.wikipedia.org/wiki/Forerunner_Ventures" }
    ]
  },
   "stephen-knight": {
    name: "Stephen Knight",
    firm: "F-Prime Capital",
    firmSlug: "f-prime-capital",
    title: "President & Senior Managing Partner",
    joinedYear: 2003,
    education: ["MD, Yale University School of Medicine", "MBA"],
    previousExperience: [
      "Researcher, AT&T Bell Laboratories",
      "Researcher, National Institutes of Health",
      "Senior management roles, private & public biotechnology and consulting companies"
    ],
    investmentFocus: ["Biotechnology", "Rare Disease", "Gene Therapy", "Company Formation"],
    notableInvestments: [
      { name: "Beam Therapeutics", ticker: "BEAM" },
      { name: "Denali Therapeutics", ticker: "DNLI" },
      { name: "Blueprint Medicines", ticker: "BPMC" }
    ],
    boardSeats: ["Beam Therapeutics", "Iora Health", "Pulmocide"],
    ipoCount: 4,
    majorExits: 0,
    careerTimeline: [
      { year: "2003", event: "Joins F-Prime Capital, then known as Fidelity Biosciences." },
      { year: "2017", event: "Co-founds Denali Therapeutics; portfolio company Denali completes its IPO in December." },
      { year: "2017", event: "Joins Beam Therapeutics' board of directors in June." },
      { year: "2020", event: "Beam Therapeutics, which he co-founded, completes its Nasdaq IPO." }
    ],
    biography: "Stephen Knight brings an unusually technical foundation to biotech investing: an MD from Yale, an MBA, and early research experience at AT&T Bell Laboratories and the NIH, followed by more than 25 years operating inside pharmaceutical and biotechnology companies before joining F-Prime Capital (then Fidelity Biosciences) in 2003. Rather than simply writing checks, he's personally co-founded more than 30 platform biotech companies alongside academic researchers, including Beam Therapeutics and Denali Therapeutics — both of which he helped build from the earliest scientific idea through their respective Nasdaq IPOs. That hands-on, company-creation approach, drawing on Fidelity's resources and a distinctive 'technical-risk-yes, regulatory-risk-no' investment filter, has made him one of the most active builder-investors in healthcare venture capital, with SEC filings across multiple portfolio companies confirming his direct board involvement at each stage.",
    sources: [
      { label: "NVCA Member Spotlight", url: "https://nvca.org/member-spotlight-f-prime-capital/" },
      { label: "Beam Therapeutics SEC Filing", url: "https://www.sec.gov/Archives/edgar/data/1745999/000156459020014308/beam-10k_20191231.htm" }
    ]
  },
   "kevin-starr": {
    name: "Kevin Starr",
    firm: "Third Rock Ventures",
    firmSlug: "third-rock-ventures",
    title: "Co-Founding Partner",
    joinedYear: 2007,
    education: [],
    previousExperience: [
      "COO & CFO, Millennium Pharmaceuticals"
    ],
    investmentFocus: ["Rare & Orphan Diseases", "Gene Therapy", "Precision Oncology", "Company Creation"],
    notableInvestments: [
      { name: "Bluebird Bio", ticker: "BLUE" },
      { name: "Agios Pharmaceuticals", ticker: "AGIO" },
      { name: "Foundation Medicine", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 1,
    careerTimeline: [
      { year: "2006", event: "Meets future co-founders Mark Levin and Robert Tepper at a conference, lamenting the lack of funding for disruptive biotech ideas while all three still work at Millennium Pharmaceuticals." },
      { year: "2007", event: "Co-founds Third Rock Ventures in Boston, raising a $378 million debut fund within ten weeks." },
      { year: "2010s", event: "Helps build Bluebird Bio, Agios, and Foundation Medicine from early scientific concepts into category-defining public companies." },
      { year: "2016", event: "Steps back from active fund leadership to become an advisor for Fund IV, citing a deliberate pause on starting new companies." }
    ],
    biography: "Kevin Starr co-founded Third Rock Ventures in 2007 alongside two other former Millennium Pharmaceuticals executives, after the trio grew frustrated watching big pharma and traditional VCs abandon early-stage drug discovery. Rather than simply fund existing startups, they built a genuinely different model: touring academic research facilities, workshopping breakthrough science with scientists for one to three years, then constructing companies from scratch around it — a 'Discover-Launch-Build-Transform' approach that helped create Bluebird Bio, Agios Pharmaceuticals, and Foundation Medicine. Starr focused heavily on ultra-rare and orphan diseases throughout his active years at the firm, and in 2016 he stepped back to an advisory role for Third Rock's fourth fund, a deliberate pause he attributed to the firm's team-oriented, long-term operating model no longer requiring his direct day-to-day involvement in starting new companies.",
    sources: [
      { label: "The Org — Kevin Starr", url: "https://theorg.com/org/third-rock-ventures/org-chart/kevin-starr" },
      { label: "Fortune", url: "https://fortune.com/2015/02/19/third-rock-ventures-giving-birth-to-a-new-generation-of-biotechs/" }
    ]
  },
   "chris-sacca": {
    name: "Chris Sacca",
    firm: "Lowercarbon Capital",
    firmSlug: "lowercarbon-capital",
    title: "Co-Founder",
    joinedYear: 2018,
    education: [],
    previousExperience: [
      "Co-Founder, Lowercase Capital (early investor in Uber, Twitter, Instagram, Twilio, Docker, Stripe)"
    ],
    investmentFocus: ["Climate", "Carbon Removal", "Energy", "Advanced Manufacturing"],
    notableInvestments: [
      { name: "Commonwealth Fusion Systems", ticker: null },
      { name: "Charm Industrial", ticker: null },
      { name: "Solugen", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2010", event: "Co-founds Lowercase Capital with Crystal Sacca, making early bets on Uber, Twitter, Instagram, Twilio, Docker, and Stripe." },
      { year: "2017", event: "Steps back from broad-based venture capital, shifting focus toward climate innovation." },
      { year: "2018", event: "Co-founds Lowercarbon Capital with Crystal Sacca and Clay Dumas." },
      { year: "2021", event: "Raises $800 million, the firm's first outside capital, in a matter of days." },
      { year: "2022", event: "Raises a dedicated $350 million fund specifically for carbon removal startups." }
    ],
    biography: "Chris Sacca built one of the most successful venture funds in history through Lowercase Capital, the fund he co-founded with his wife Crystal that made early bets on Uber, Twitter, Instagram, Twilio, Docker, and Stripe and vaulted him to the number-two spot on the Forbes Midas List. He stepped back from broad-based tech investing in 2017, and in 2018 the couple co-founded Lowercarbon Capital, applying the same return expectations and pattern-recognition instincts to companies that profitably reduce or remove carbon rather than chasing the next consumer app. Known for blunt, unfiltered messaging about the urgency of the climate crisis, Sacca raised Lowercarbon's first $800 million in outside capital within days in 2021, turning away what he called 'flattering offers' to keep the fund intentionally small, and has since backed more than 100 companies spanning fusion energy, carbon removal, and industrial decarbonization.",
    sources: [
      { label: "Lowercarbon Capital — Chris Sacca", url: "https://lowercarbon.com/team/chris-sacca/" },
      { label: "ImpactAlpha", url: "https://impactalpha.com/chris-saccas-lowercarbon-capital-raises-800-million-for-climate-tech/" }
    ]
  },
   "hans-kobler": {
    name: "Hans Kobler",
    firm: "Energy Impact Partners",
    firmSlug: "energy-impact-partners",
    title: "Founder & Managing Partner",
    joinedYear: 2015,
    education: ["Masters, Aerospace Engineering, Technical University of Munich (with distinction)", "MBA, University of Texas at Austin", "MBA program, INSEAD"],
    previousExperience: [
      "Consultant, Bain & Company (Boston, Sydney & Munich offices)",
      "Led Power technology investment effort, General Electric",
      "Founder & CEO, Digital Power Capital",
      "Co-Founder, Chairman & CEO, ICx Technologies (led through Nasdaq IPO and strategic sale)"
    ],
    investmentFocus: ["Energy Transition", "Grid Technology", "Industrial Cybersecurity", "Smart Infrastructure"],
    notableInvestments: [
      { name: "Dragos", ticker: null }
    ],
    boardSeats: ["Enchanted Rock"],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "1993", event: "Attends INSEAD's MBA program." },
      { year: "2000s", event: "Pioneers General Electric's strategic investment model, later leading GE's Power technology investment effort." },
      { year: "2010s", event: "Founds Digital Power Capital, then co-founds ICx Technologies, leading it as CEO and Chairman through a Nasdaq IPO and later strategic sale." },
      { year: "2015", event: "Founds Energy Impact Partners in New York." },
      { year: "2017", event: "EIP partners with industrial cybersecurity company Dragos." },
      { year: "2025", event: "Accenture acquires a majority stake in Dragos at a $3.2 billion valuation." }
    ],
    biography: "Hans Kobler built his career at the intersection of energy, industrial technology, and finance before founding Energy Impact Partners in 2015. After consulting at Bain & Company, he pioneered General Electric's strategic investment model and led its Power technology investment effort, then founded Digital Power Capital and co-founded ICx Technologies, a sensor technology company he led as CEO and Chairman through a successful Nasdaq IPO and eventual strategic sale. That operator-investor combination shaped EIP's distinctive model: a coalition of more than 30 global energy companies invests alongside the fund, giving portfolio companies direct commercial access to utilities and industrial players that might otherwise take years to reach. EIP's 2017 partnership with industrial cybersecurity company Dragos became one of Kobler's clearest recent proof points, once Accenture acquired a majority stake in the company at a $3.2 billion valuation.",
    sources: [
      { label: "Energy Impact Partners Team", url: "https://www.energyimpactpartners.com/team/" },
      { label: "The Org — Hans Kobler", url: "https://theorg.com/org/energy-impact-partners/org-chart/hans-kobler" }
    ]
  },
   "alberto-yepez": {
    name: "Alberto Yépez",
    firm: "Forgepoint Capital",
    firmSlug: "forgepoint-capital",
    title: "Co-Founder & Managing Director",
    joinedYear: 2015,
    education: [],
    previousExperience: [
      "Founder, Chairman & CEO, enCommerce (acquired by Entrust)",
      "Co-CEO & President, Entrust (acquired by Thoma Bravo)",
      "Chairman & CEO, Thor Technologies (acquired by Oracle, 2005)",
      "Entrepreneur in Residence, Warburg Pincus",
      "Venture Consultant, Bain Capital",
      "Managing Director, Trident Capital (led cybersecurity investments including AlienVault, Solera Networks, BlueCat Networks, Neohapsis)"
    ],
    investmentFocus: ["Cybersecurity", "AI Security", "Infrastructure Software"],
    notableInvestments: [
      { name: "Attivo Networks", ticker: null },
      { name: "Area 1 Security", ticker: null },
      { name: "BehavioSec", ticker: null }
    ],
    boardSeats: ["Constella Intelligence", "CyberCube", "Huntress", "NowSecure", "ReversingLabs", "Uptycs"],
    ipoCount: 0,
    majorExits: 9,
    careerTimeline: [
      { year: "2005", event: "Thor Technologies, which he led as Chairman and CEO, is acquired by Oracle." },
      { year: "2008", event: "Joins Trident Capital as a venture partner and Entrepreneur-in-Residence, later becoming Managing Director leading its cybersecurity investments." },
      { year: "2015", event: "Co-founds Forgepoint Capital with Don Dixon, one of the first venture funds exclusively dedicated to cybersecurity." },
      { year: "2021", event: "Leads Attivo Networks' investment; the company is later acquired by SentinelOne." },
      { year: "2022", event: "Area 1, a Forgepoint portfolio company, is acquired by Cloudflare." }
    ],
    biography: "Alberto Yépez is widely regarded as one of the pioneers of the cybersecurity industry, having founded and sold enCommerce to Entrust, served as Entrust's Co-CEO and President through its own sale to Thoma Bravo, and led Thor Technologies to an acquisition by Oracle in 2005 — three exits before he ever became a full-time investor. He led cybersecurity investments as Managing Director at Trident Capital, backing companies later acquired by AT&T, Symantec, Madison Dearborn, and Cisco, before co-founding Forgepoint Capital with his Trident colleague Don Dixon in 2015 to build one of the first venture funds exclusively dedicated to cybersecurity. His investments at Forgepoint include Attivo Networks (acquired by SentinelOne), Area 1 (acquired by Cloudflare), and BehavioSec (acquired by LexisNexis Risk Solutions), and he currently sits on the boards of Constella Intelligence, CyberCube, Huntress, NowSecure, ReversingLabs, and Uptycs — recognized by Fortune as one of the top VCs dominating cybersecurity investing.",
    sources: [
      { label: "Forgepoint Capital — Alberto Yépez", url: "https://forgepointcap.com/team/alberto-yepez/" },
      { label: "Aspen Digital", url: "https://www.aspendigital.org/person/alberto-yepez/" }
    ]
  },
   "james-currier": {
    name: "James Currier",
    firm: "NFX",
    firmSlug: "nfx",
    title: "Co-Founder & General Partner",
    joinedYear: 2015,
    education: [],
    previousExperience: [
      "Founder & CEO, Tickle (acquired by Monster)",
      "Founder & CEO, WonderHill (acquired by Kabam)",
      "Founder & CEO, Iron Pearl (acquired by PayPal)",
      "Founder & CEO, Jiff (acquired by Castlight)"
    ],
    investmentFocus: ["Network Effects", "Marketplaces", "AI", "Consumer", "SaaS"],
    notableInvestments: [
      { name: "Lyft", ticker: "LYFT" },
      { name: "DoorDash", ticker: "DASH" },
      { name: "Patreon", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 4,
    careerTimeline: [
      { year: "1990s-2000s", event: "Founds and exits four companies — Tickle, WonderHill, Iron Pearl, and Jiff — pioneering user-generated content, viral marketing, and A/B testing techniques later adopted industry-wide." },
      { year: "2015", event: "Co-founds NFX with Pete Flint and Gigi Levy-Weiss." },
      { year: "2019", event: "Lyft, an early NFX portfolio bet, goes public on the Nasdaq." },
      { year: "2020", event: "DoorDash, another early NFX bet, goes public." }
    ],
    biography: "James Currier is a four-time founder — Tickle, WonderHill, Iron Pearl, and Jiff, all successfully acquired — turned one of Silicon Valley's most cited experts on network effects, having systematically categorized dozens of network-effect types that founders can now deliberately design for rather than stumble into. He co-founded NFX in 2015 with fellow serial entrepreneurs Pete Flint and Gigi Levy-Weiss, the three of whom collectively built ten companies with a combined $10 billion in exits before ever writing an outside investor check together. That operating pedigree shaped NFX's structure: a 45-plus-person platform team, proprietary tools like the Signal fundraising network, and an invite-only 'Guild' community where hundreds of portfolio CEOs share real KPIs and insights. Early NFX bets into Lyft and DoorDash, both public since 2019 and 2020 respectively, remain among the firm's clearest proof points.",
    sources: [
      { label: "NFX — James Currier", url: "https://www.nfx.com/team/james-currier" },
      { label: "KoreaTechDesk", url: "https://koreatechdesk.com/james-currier-nfx-the-investor-you-can-rely-on-for-grand-business-success" }
    ]
  },
   "christoph-janz": {
    name: "Christoph Janz",
    firm: "Point Nine",
    firmSlug: "point-nine",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2011,
    education: [],
    previousExperience: [
      "Founder, DealPilot (early ecommerce price comparison)",
      "Founder, PageFlakes"
    ],
    investmentFocus: ["B2B SaaS", "Marketplaces", "AI"],
    notableInvestments: [
      { name: "Zendesk", ticker: null },
      { name: "Loom", ticker: null },
      { name: "Clio", ticker: null },
      { name: "Delivery Hero", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "1990s", event: "Starts trading second-hand computers at age 12, never attending university." },
      { year: "2000s", event: "Founds and exits DealPilot and PageFlakes before moving into angel investing." },
      { year: "2009", event: "Makes an early angel investment in Zendesk, his first deal, and also invests in legal software company Clio." },
      { year: "2011", event: "Co-founds Point Nine Capital with Pawel Chudzinski and Kolja Hebenstreit in Berlin." },
      { year: "2014", event: "Zendesk goes public, closing its first trading day up 49% from its $9 IPO price." },
      { year: "2017", event: "Invests roughly $1 million in video tool Loom." },
      { year: "2022", event: "Zendesk is taken private by Hellman & Friedman and Permira for $10.2 billion." },
      { year: "2023", event: "Loom is acquired by Atlassian for $975 million." }
    ],
    biography: "Christoph Janz never attended university, starting out trading second-hand computers at age 12 before founding and exiting several companies including DealPilot and PageFlakes. He made his first-ever angel check into Zendesk, a bet that would eventually see the company go public in 2014 and later get taken private in a $10.2 billion deal led by Hellman & Friedman and Permira in 2022. He co-founded Point Nine Capital with Pawel Chudzinski in 2011, building one of Europe's most focused B2B SaaS specialist funds, and his instinct for early conviction repeated itself in 2017 when he put roughly $1 million into video recording tool Loom — a bet Atlassian validated by acquiring the company for $975 million in 2023. Janz remains one of Point Nine's most publicly visible voices, writing extensively about SaaS fundamentals on the firm's own essays platform.",
    sources: [
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/christoph-janz/" },
      { label: "Sifted", url: "https://sifted.eu/articles/brunch-with-point-nine-janz" }
    ]
  },
   "klaus-hommels": {
    name: "Klaus Hommels",
    firm: "Lakestar",
    firmSlug: "lakestar",
    title: "Founder & Chairman",
    joinedYear: 2012,
    education: ["PhD, Finance, University of Fribourg", "MBA, University of Fribourg"],
    previousExperience: [
      "Board Member, AOL Germany",
      "Venture Partner, Benchmark Capital Europe",
      "Founder, Hommels Holding"
    ],
    investmentFocus: ["Fintech", "Deep Tech", "Defense & Dual-Use", "Consumer Internet"],
    notableInvestments: [
      { name: "Spotify", ticker: "SPOT" },
      { name: "Revolut", ticker: null },
      { name: "Klarna", ticker: null },
      { name: "Skype", ticker: null }
    ],
    boardSeats: ["Spotify"],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "1995", event: "Becomes a board member of AOL Germany after starting his career at Bertelsmann." },
      { year: "2011", event: "Skype, an early personal investment, is acquired by Microsoft for $8.5 billion." },
      { year: "2012", event: "Founds Lakestar in Zurich, following a period running his own fund, Hommels Holding." },
      { year: "2018", event: "Spotify, an early Lakestar-era bet, completes its direct listing." },
      { year: "2023", event: "Named founding Chairman of the NATO Innovation Fund's Board of Directors." },
      { year: "2025", event: "Announces Lakestar will stop raising new generalist venture funds, shifting to invest primarily from personal capital." }
    ],
    biography: "Klaus Hommels built his reputation on a remarkable run of early bets — Skype, Xing, King, Facebook, Spotify, and Airbnb among them — well before founding Lakestar in Zurich in 2012 following stints at AOL Germany and as a venture partner at Benchmark Capital Europe. He grew Lakestar into one of Europe's largest venture funds, raising more than €2 billion across early-stage and growth vehicles and continuing his pattern of early conviction with Revolut, Klarna, and defense-tech unicorn Helsing. In October 2025, Hommels announced a significant strategic pivot: Lakestar will no longer raise new generalist funds from outside LPs, with his future bets — including a growing focus on European defense and dual-use technology — funded primarily from his own personal capital instead. He currently chairs the NATO Innovation Fund's Geopolitical and Strategic Advisory Council and remains one of the most vocal advocates for European technological sovereignty.",
    sources: [
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/klaus-hommels/" },
      { label: "Forbes — Lakestar Pivot", url: "https://www.forbes.com/sites/iainmartin/2025/10/23/europe-venture-fund-lakestar-calls-halt-on-new-startup-bets/" }
    ]
  },
   "eric-acher": {
    name: "Eric Acher",
    firm: "monashees",
    firmSlug: "monashees",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2005,
    education: ["BA, Communications, ESPM", "Diploma, Business Administration, Fundação Getulio Vargas", "MBA, Kellogg School of Management, Northwestern University"],
    previousExperience: [
      "Strategy Consultant, McKinsey & Company",
      "VC & PE Investor, General Atlantic (US & Latin America)"
    ],
    investmentFocus: ["Fintech", "Marketplaces", "Logistics", "Edtech", "Latin America"],
    notableInvestments: [
      { name: "99", ticker: null },
      { name: "Rappi", ticker: null },
      { name: "Elo7", ticker: null },
      { name: "Loft", ticker: null }
    ],
    boardSeats: ["Fazenda Futuro", "Nomad", "Jusbrasil", "Conta Azul", "MindLab"],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "1999", event: "Joins General Atlantic, doing VC and PE investing across the US and Latin America — his self-described 'investment school.'" },
      { year: "2005", event: "Co-founds monashees with Fabio Igel in São Paulo, starting with a $12 million fund at a time when almost no early-stage VC industry existed in Brazil." },
      { year: "2018", event: "99, a portfolio company, is acquired by Didi Chuxing for roughly $1 billion." },
      { year: "2021", event: "Reports monashees has raised 10 funds totaling $1.5 billion, backing 125 companies including 9 unicorns." }
    ],
    biography: "Eric Acher co-founded monashees in 2005 during what he calls Brazil's 'tech winter' — a period when essentially no local early-stage venture capital industry existed — after cutting his teeth in strategy consulting at McKinsey and growth investing at General Atlantic across the US and Latin America. He started with just a $12 million fund and no real playbook to follow, building both monashees and much of the broader Latin American VC ecosystem from scratch alongside a handful of other early players. Two decades later, the firm has raised 10 funds totaling $1.5 billion, backed 125 companies including nine unicorns — Rappi, 99, Loggi, MadeiraMadeira, and Loft among them — and Acher has become one of the most recognized voices in Latin American venture capital, frequently drawing comparisons between the region's tech ecosystem and Southeast Asia's.",
    sources: [
      { label: "LAVCA — Eric Acher", url: "https://www.lavca.org/team-member/eric-acher/" },
      { label: "Insignia Business Review", url: "https://review.insignia.vc/2021/07/13/parallels-and-synergies-between-latin-america-and-southeast-asia-from-eric-acher-founding-managing-partner-of-monashees-brazils-first-venture-capital-firm/" }
    ]
  },
   "willson-cuaca": {
    name: "Willson Cuaca",
    firm: "East Ventures",
    firmSlug: "east-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2009,
    education: ["Universitas Bina Nusantara (Binus)"],
    previousExperience: [
      "First Cisco Certified Instructor in Indonesia",
      "Sales & Support, Singapore security firm",
      "Founder, mobile startup (iPhone & Blackberry apps, 2008)",
      "Founder, SCOOP (Indonesia's largest digital newsstand)"
    ],
    investmentFocus: ["Consumer Internet", "Fintech", "Marketplaces", "Southeast Asia & Indonesia"],
    notableInvestments: [
      { name: "Tokopedia", ticker: "GOTO.JK" },
      { name: "Fore Coffee", ticker: "FORE.JK" },
      { name: "Traveloka", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 3,
    careerTimeline: [
      { year: "1997", event: "Begins teaching computer and networking courses during his first year of university." },
      { year: "1999", event: "Becomes the first Cisco Certified Instructor in Indonesia." },
      { year: "2008", event: "Founds a mobile startup building iPhone and Blackberry apps, after founding and selling SCOOP, Indonesia's largest digital newsstand." },
      { year: "2009", event: "Co-founds East Ventures with Batara Eto and Taiga Matsuyama, one of the first venture capital firms in Indonesia." },
      { year: "2022", event: "Tokopedia, East Ventures' most famous early bet, merges with Gojek and goes public as GoTo on the Indonesia Stock Exchange." }
    ],
    biography: "Willson Cuaca's path into venture capital ran through hands-on technology work, not finance — a computer science background that made him Indonesia's first Cisco Certified Instructor before he founded and sold SCOOP, the country's largest digital newsstand, and built an early iPhone and Blackberry app startup. He co-founded East Ventures in 2009 with Batara Eto and Taiga Matsuyama, at a time when, in his own words, 'no one believed in Indonesia's consumer internet potential.' That early conviction produced the region's clearest proof point: East Ventures was the seed investor in Tokopedia, which later merged with Gojek to form GoTo and complete one of Indonesia's largest-ever IPOs in 2022. Cuaca has since built East Ventures into a multi-asset platform spanning seed through growth across more than 300 portfolio companies, and has been named the Most Active Investor in Southeast Asia and Indonesia multiple times by CB Insights and Crunchbase.",
    sources: [
      { label: "East Ventures — Willson Cuaca", url: "https://east.vc/team/willson-cuaca" },
      { label: "Asia Tech Daily", url: "https://asiatechdaily.com/willson-cuaca-east-ventures/" }
    ]
  },
   "philippe-collombel": {
    name: "Philippe Collombel",
    firm: "Partech",
    firmSlug: "partech",
    title: "Founding & General Partner",
    joinedYear: 2008,
    education: ["Master in Science, CentraleSupélec", "MBA, HEC Paris"],
    previousExperience: [
      "Electrical Engineer, Cegelec (Nuclear Energy division)",
      "Investor, Finovelec (led two IPOs: WonderWare and Lannet)",
      "Founder, Genèse Investissement (France's first seed fund)"
    ],
    investmentFocus: ["Fintech", "Deep Tech", "Enterprise Software", "Africa & Europe Scaling"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 0,
    careerTimeline: [
      { year: "1996", event: "Jean-Marc Patouillaud establishes Partech's European office in Paris." },
      { year: "2000s", event: "Starts Genèse Investissement, France's first seed fund, after leading two IPOs at Finovelec." },
      { year: "2008", event: "Joins Jean-Marc Patouillaud to complete a management buyout of Partech, making the firm independent." },
      { year: "2026", event: "Continues to drive investment strategy as Partech manages approximately €2.5 billion across 220-plus companies in 40 countries." }
    ],
    biography: "Philippe Collombel began his career as an electrical engineer in the nuclear energy division of Cegelec before moving into venture capital at Finovelec, where he led two landmark IPOs — WonderWare and Lannet. He then started Genèse Investissement, France's first dedicated seed fund, before joining Jean-Marc Patouillaud at Partech to lead a 2008 management buyout that took the firm independent from its original bank ownership. Since then, Collombel has helped transform Partech from a single-region European operation into a genuinely global platform spanning San Francisco, Paris, Berlin, Dakar, Dubai, and Nairobi, and continues to drive the firm's investment strategy as Founding and General Partner, with a particular focus on scaling promising companies across Europe and Africa.",
    sources: [
      { label: "Equilar ExecAtlas", url: "https://people.equilar.com/bio/org/partech-partners/4209443" },
      { label: "EU Tech Future", url: "https://eutechfuture.com/venture-capital/partech-partners-a-deep-dive-into-the-global-tech-investment-powerhouse/" }
    ]
  },
   "maurizio-caio": {
    name: "Maurizio Caio",
    firm: "TLcom Capital",
    firmSlug: "tlcom-capital",
    title: "Founder & Managing Partner",
    joinedYear: 1999,
    education: ["Laurea (summa cum laude), Business Administration, Bocconi University & New York University", "MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "Director, Bain & Company (led EMEA Telecom & Technology practice)",
      "McKinsey & Company (technology & growth strategy, Europe)"
    ],
    investmentFocus: ["Fintech", "Agritech", "Edtech", "Sub-Saharan Africa"],
    notableInvestments: [
      { name: "Andela", ticker: null },
      { name: "Twiga Foods", ticker: null },
      { name: "Pula", ticker: null }
    ],
    boardSeats: ["Twiga Foods", "Pula", "Shara", "Ajua", "Littlefish"],
    ipoCount: 0,
    majorExits: 2,
    careerTimeline: [
      { year: "1999", event: "Founds TLcom Capital after 15 years advising telecom and technology CEOs at Bain & Company and McKinsey." },
      { year: "2017", event: "Launches the TIDE Africa Fund with $71 million, backing Andela, Twiga Foods, and Kobo360." },
      { year: "2021", event: "Andela, one of TLcom's earliest African bets, reaches a $1.5 billion valuation, becoming the continent's only non-fintech unicorn at the time." },
      { year: "2023", event: "Nears the final close of a second fund targeting $150 million." }
    ],
    biography: "Maurizio Caio spent 15 years advising CEOs of European and Silicon Valley telecommunications companies at Bain & Company and McKinsey before founding TLcom Capital in 1999, betting early that technology entrepreneurs would prove critical to transforming both established and emerging industries. That conviction eventually crystallized into one of the longest-running Africa-focused technology venture platforms, anchored by the 2017 launch of the TIDE Africa Fund. Caio was an early backer of Andela three years before it became one of Africa's few non-fintech unicorns, and he now represents TLcom on the boards of Twiga Foods, Pula, Shara, Ajua, and Littlefish. He co-chairs the venture capital committee at the Africa Venture Capital Association, teaches business strategy at universities across the continent, and remains one of the most publicly outspoken voices arguing that African tech needs to shift its focus from headline valuations toward real, realized returns.",
    sources: [
      { label: "TLcom Capital — Maurizio Caio", url: "https://tlcomcapital.com/maurizio-caio" },
      { label: "TechCrunch", url: "https://techcrunch.com/2021/11/10/tlcom-capital-managing-partner-maurizio-caio-on-african-unicorns-valuations-and-exits" }
    ]
  },
   "yoav-leitersdorf": {
    name: "Yoav Leitersdorf",
    firm: "YL Ventures",
    firmSlug: "yl-ventures",
    title: "Founder & Managing Partner",
    joinedYear: 2007,
    education: [],
    previousExperience: [
      "Founder, Managing Director & CEO, Movoto"
    ],
    investmentFocus: ["Cybersecurity", "AI Security"],
    notableInvestments: [
      { name: "Twistlock", ticker: null },
      { name: "Orca Security", ticker: null },
      { name: "Cybereason", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 5,
    careerTimeline: [
      { year: "2007", event: "Founds YL Ventures to help seed-stage Israeli entrepreneurs build global companies." },
      { year: "2019", event: "Twistlock, a portfolio company, is acquired by Palo Alto Networks for $410 million." },
      { year: "2022", event: "Closes Fund V at $400 million, the largest seed fund ever raised for cybersecurity." },
      { year: "2025", event: "Reports total funds under management reaching $800 million." }
    ],
    biography: "Yoav Leitersdorf founded YL Ventures in 2007 with a singular, narrow mission: help brilliant seed-stage Israeli entrepreneurs transform their ideas into global companies, before eventually focusing the firm exclusively on cybersecurity. That specialization, paired with a dual Tel Aviv-and-US presence and a network of more than 100 CISOs who advise on deals in exchange for carried interest, has given YL what Leitersdorf calls 'first dibs at every seed deal coming out of Israel.' The firm's track record includes Twistlock, acquired by Palo Alto Networks for $410 million, and Orca Security, one of the category's fastest-growing unicorns, and Leitersdorf closed Fund V at $400 million in 2022 — the largest seed fund ever raised specifically for cybersecurity — pushing the firm's total funds under management to $800 million.",
    sources: [
      { label: "YL Ventures — Yoav Leitersdorf", url: "https://www.ylventures.com/people/yoav-andrew-leitersdorf/" },
      { label: "TechCrunch", url: "https://techcrunch.com/2022/05/11/investors-reward-yl-ventures-for-selling-certain-stakes-when-the-market-was-still-bubbly/" }
    ]
  },
   "joshua-posamentier": {
    name: "Joshua Posamentier",
    firm: "Congruent Ventures",
    firmSlug: "congruent-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2017,
    education: ["BA, Physics, UC Berkeley", "MBA, Columbia Business School", "MBA, UC Berkeley Haas School of Business"],
    previousExperience: [
      "Semiconductor & Wireless Chip Engineer, Intel",
      "Semiconductor Engineer, National Semiconductor",
      "Semiconductor Engineer, Texas Instruments",
      "Partner, Prelude Ventures"
    ],
    investmentFocus: ["Climate Hardware", "Energy Transition", "Deep Tech"],
    notableInvestments: [
      { name: "AMP Robotics", ticker: null },
      { name: "Fervo Energy", ticker: null },
      { name: "Parallel Systems", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2000s", event: "Builds semiconductors and wireless chips as an engineer at Intel, National Semiconductor, and Texas Instruments, earning more than 50 patents." },
      { year: "2010s", event: "Moves into climate-focused venture investing as a Partner at Prelude Ventures." },
      { year: "2017", event: "Co-founds Congruent Ventures with Abe Yokell." },
      { year: "2021", event: "Closes a $175 million second fund, after originally targeting $125 million." },
      { year: "2023", event: "Closes a Continuity Fund exceeding $300 million, pushing total AUM past $700 million." }
    ],
    biography: "Joshua Posamentier brings a genuinely rare engineering depth to climate investing: a physics degree from UC Berkeley, dual MBAs from Columbia and Berkeley Haas, and years spent building semiconductors and wireless chips at Intel, National Semiconductor, and Texas Instruments, earning more than 50 patents along the way. That hardware background, honed further at climate-focused Prelude Ventures, shapes his specific investing lens at Congruent Ventures, which he co-founded with Abe Yokell in 2017: he focuses on real engineering risk in climate hardware rather than subsidy-dependent business models, evaluating complex physical systems most software-only investors can't meaningfully assess. Congruent has since grown into one of the largest early-stage climate portfolios in venture capital, with more than $1 billion raised across multiple funds and backing from CalSTRS, the Grantham Foundation, and other major institutional climate investors.",
    sources: [
      { label: "VC Sheet", url: "https://www.vcsheet.com/who/joshua-posamentier" },
      { label: "Congruent Ventures Team", url: "https://www.congruentvc.com/team" }
    ]
  },
   "marcos-toledo": {
    name: "Marcos Toledo",
    firm: "Canary",
    firmSlug: "canary",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2016,
    education: [],
    previousExperience: [],
    investmentFocus: ["Fintech", "Enterprise Software", "Consumer", "Latin America"],
    notableInvestments: [
      { name: "Méliuz", ticker: "CASH3.SA" },
      { name: "99", ticker: null },
      { name: "Clara", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 11,
    careerTimeline: [
      { year: "2016", event: "Co-founds Canary in São Paulo, backing early-stage Brazilian founders." },
      { year: "2021", event: "Announces a new $100 million Fund III for Latin American startups." },
      { year: "2024", event: "Reports a founder Net Promoter Score of 94 across the firm's portfolio." }
    ],
    biography: "Marcos Toledo co-founded Canary in São Paulo in 2016, building it into one of the most active early-stage investors in Latin America — the firm says it sees more than 90% of venture opportunities across the region and has analyzed more than 6,000 companies to date, investing in over 30% of those that later raised a Series A in Brazil. Under his leadership, Canary has backed 135-plus companies including three unicorns, one IPO, and 11 acquisitions, with Méliuz's public listing and continued involvement in 99 and Clara among its clearest proof points. Toledo has consistently framed Canary's role as more than capital — the firm positions itself as a genuine 'co-founder' to its portfolio companies, providing hands-on support across hiring, technology, business development, and fundraising.",
    sources: [
      { label: "LatamList", url: "https://latamlist.com/canary-vc-announces-new-100m-venture-fund/" },
      { label: "Canary", url: "https://www.canary.com.br" }
    ]
  },
   "amit-anand": {
    name: "Amit Anand",
    firm: "Jungle Ventures",
    firmSlug: "jungle-ventures",
    title: "Founding Partner & Managing Director",
    joinedYear: 2012,
    education: [],
    previousExperience: [
      "Sales & Business Development, Progress Software (NASDAQ-listed)",
      "Executive roles, Elipva (STT Communications-backed, acquired by Hong Kong-listed company)",
      "Tata Infotech (acquired by TCS for approximately $259 million)",
      "Founder, Ettamina Studios (Singapore-India animation studio)"
    ],
    investmentFocus: ["SaaS", "B2B", "Consumer Tech", "Fintech", "India & Southeast Asia"],
    notableInvestments: [
      { name: "Livspace", ticker: null },
      { name: "Kredivo", ticker: null },
      { name: "Moglix", ticker: null },
      { name: "Builder.ai", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 3,
    careerTimeline: [
      { year: "2006", event: "Founds Ettamina Studios, a Singapore-India animation studio, after earlier executive roles at Progress Software, Elipva, and Tata Infotech." },
      { year: "2012", event: "Co-founds Jungle Ventures with Anurag Srivastava, launching with a $10 million debut fund." },
      { year: "2015", event: "Leads the exit of portfolio company Zipdial to Twitter." },
      { year: "2020", event: "Leads the exit of portfolio company TradeGecko to Intuit." },
      { year: "2022", event: "Jungle Ventures crosses $1 billion in assets under management, the first independent Singapore-headquartered firm investing across Southeast Asia and India to do so." }
    ],
    biography: "Amit Anand has spent 25 years as a pioneer of South and Southeast Asia's venture capital industry, starting in sales and business development at Progress Software before founding Ettamina Studios, a Singapore-India animation studio, in 2006. He co-founded Jungle Ventures in 2012 with a modest $10 million debut fund, growing the firm's assets under management 100-fold over the following decade into the first independent Singapore-headquartered venture firm investing across Southeast Asia and India to cross $1 billion. Anand has personally sourced and mentored the firm's first four unicorns — Moglix, Kredivo, Livspace, and Builder.ai — and led earlier exits including Zipdial's sale to Twitter and TradeGecko's acquisition by Intuit. A Kauffman Fellow and former Vice Chairman of the Business Angels Network of Southeast Asia, he now sits on Singapore's Government Advisory Council on the Ethical Use of Artificial Intelligence and Data.",
    sources: [
      { label: "Jungle Ventures — Amit Anand", url: "https://www.jungle.vc/team/amit-anand" },
      { label: "Forbes Asia", url: "https://www.forbes.com/sites/ardianwibisono/2024/12/04/singapore-based-vc-firm-jungle-ventures-is-on-the-prowl-to-tap-new-frontiers/" }
    ]
  },
   "garheng-kong": {
    name: "Garheng Kong",
    firm: "HealthQuest Capital",
    firmSlug: "healthquest-capital",
    title: "Founder & Managing Partner",
    joinedYear: 2012,
    education: ["BS, Chemical Engineering, Stanford University", "BS, Biological Sciences, Stanford University", "MD, Duke University", "PhD, Duke University", "MBA, Duke University"],
    previousExperience: [
      "GlaxoSmithKline",
      "McKinsey & Company",
      "TherOx (medical device startup)",
      "Investor, Intersouth Partners",
      "Investor, Sofinnova Investments"
    ],
    investmentFocus: ["Medical Devices", "Diagnostics", "Digital Health", "Biopharma"],
    notableInvestments: [
      { name: "Castle Biosciences", ticker: "CSTL" },
      { name: "Pulmonx", ticker: "LUNG" },
      { name: "Amwell", ticker: "AMWL" }
    ],
    boardSeats: ["LabCorp (Lead Independent Director)", "Smith & Nephew", "Xeris Biopharma"],
    ipoCount: 13,
    majorExits: 40,
    careerTimeline: [
      { year: "2000s", event: "Works at GlaxoSmithKline, McKinsey, and medical device startup TherOx, before moving into venture investing at Intersouth Partners and Sofinnova Investments." },
      { year: "2012", event: "Founds HealthQuest Capital." },
      { year: "2013", event: "Closes HealthQuest Fund I at $111 million." },
      { year: "2022", event: "Closes HealthQuest Fund IV, the firm's largest, at $685 million." },
      { year: "2025", event: "Named GrowthCap's Healthcare Investor of the Year." }
    ],
    biography: "Garheng Kong is a physician, scientist, and engineer by training — a rare triple credential earned through a Stanford dual degree on athletic scholarship followed by an MD, PhD, and MBA from Duke, graduating at the top of his class each time. He spent his early career at GlaxoSmithKline, McKinsey, and medical device startup TherOx before moving into healthcare venture investing at Intersouth Partners and Sofinnova, then founded HealthQuest Capital in 2012 to focus specifically on growth-stage, commercial-stage healthcare companies. Over more than two decades investing, he's been part of 40 IPO and M&A exits, including public listings for Castle Biosciences, Pulmonx, Amwell, and Alimera, and currently serves as Lead Independent Director of LabCorp alongside board seats at Smith & Nephew and Xeris Biopharma. He was named GrowthCap's Healthcare Investor of the Year for 2024, presented in March 2025, capping three consecutive years on their Top 25 Healthcare Investors list.",
    sources: [
      { label: "HealthQuest Capital — Garheng Kong", url: "https://www.healthquestcapital.com/people/garheng-kong" },
      { label: "GrowthCap", url: "https://growthcapadvisory.com/top-healthcare-investor-healthquests-garheng-kong/" }
    ]
  },
   "gili-raanan": {
    name: "Gili Raanan",
    firm: "Cyberstarts",
    firmSlug: "cyberstarts",
    title: "Founder",
    joinedYear: 2018,
    education: [],
    previousExperience: [
      "10 years, Israeli Defense Forces Unit 8200 (Presidential Medal & Innovation Award)",
      "Founder, Sanctum (creator of the first web application firewall, AppShield)",
      "Founder, nLayers (acquired by EMC)",
      "VP of Strategy, EMC",
      "General Partner, Sequoia Capital (nearly 9 years, led Israel investing)"
    ],
    investmentFocus: ["Cybersecurity", "Cloud Security", "AI Security"],
    notableInvestments: [
      { name: "Wiz", ticker: null },
      { name: "Armis", ticker: null },
      { name: "Fireblocks", ticker: null },
      { name: "Cyera", ticker: null }
    ],
    boardSeats: ["Wiz", "Adallom", "Armis"],
    ipoCount: 0,
    majorExits: 6,
    careerTimeline: [
      { year: "1997", event: "Founds Sanctum, creator of the first web application firewall, AppShield." },
      { year: "2009", event: "Joins Sequoia Capital as a General Partner, leading its cybersecurity, internet, and mobile investing in Israel." },
      { year: "2018", event: "Leaves Sequoia after nearly nine years to found Cyberstarts." },
      { year: "2020", event: "Leads a $6 million seed round in Wiz, partnering with the company on day one." },
      { year: "2026", event: "Google completes its $32 billion acquisition of Wiz in March, the largest-ever buyout of a venture-backed startup." }
    ],
    biography: "Gili Raanan's cybersecurity career began inside Israel's elite Unit 8200 intelligence corps, where he served for a decade and won both the IDF Innovation Award and the Israel Defense Presidential Prize. He founded two security companies — Sanctum, creator of the first web application firewall, and nLayers, later acquired by EMC — before spending nearly nine years as a General Partner at Sequoia Capital leading its Israeli cybersecurity investing, including the earliest bet on Adallom, the company Wiz's founders had built before Wiz itself. He left Sequoia in 2018 to found Cyberstarts, and led Wiz's $6 million seed round in 2020, partnering with the company from day one. That bet became the largest venture-backed exit in history when Google completed its $32 billion acquisition of Wiz in March 2026. Raanan is also widely credited as the inventor of CAPTCHA and holds more than 10 U.S. patents in cybersecurity and application management.",
    sources: [
      { label: "Cyberstarts — Gili Raanan", url: "https://www.cyberstarts.com/team/gili-raanan" },
      { label: "Wikipedia — Gili Raanan", url: "https://en.wikipedia.org/wiki/Gili_Raanan" },
      { label: "Forbes Profile", url: "https://www.forbes.com/profile/gili-raanan/" }
    ]
  },
   "chemi-peres": {
    name: "Chemi Peres",
    firm: "Pitango Venture Capital",
    firmSlug: "pitango-venture-capital",
    title: "Co-Founder & Managing General Partner",
    joinedYear: 1996,
    education: ["BSc, Tel Aviv University"],
    previousExperience: [
      "Israeli Air Force Pilot",
      "Advisor, Israel Aerospace Industries (IAI Lavi project)",
      "Business Development, Decision Systems Israel (DSIT)",
      "Co-Founder, MOFET Israel Technology Fund (1992)"
    ],
    investmentFocus: ["Digital Health", "Deep Tech", "Fintech", "Mobility"],
    notableInvestments: [
      { name: "Via Transportation", ticker: null },
      { name: "Taboola", ticker: "TBLA" },
      { name: "CyberMDX", ticker: null }
    ],
    boardSeats: ["Via Transportation", "Taboola", "Radwin", "Venn.city", "Duda"],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "1992", event: "Co-founds the MOFET Israel Technology Fund, one of the first venture funds listed on the Tel Aviv Stock Exchange." },
      { year: "1996", event: "Joins Rami Kalish at Polaris Venture Capital, forming Polaris Fund II at more than $100 million." },
      { year: "2001", event: "Polaris rebrands as Pitango Venture Capital." },
      { year: "2022", event: "Portfolio company CyberMDX is acquired by ForeScout Technologies in February." }
    ],
    biography: "Chemi Peres, son of former Israeli President Shimon Peres, built his path to venture capital through the Israeli Air Force and Israel Aerospace Industries before co-founding the MOFET Israel Technology Fund in 1992 — one of the first venture funds listed on the Tel Aviv Stock Exchange. He joined Rami Kalish's Polaris Venture Capital in 1996, and the firm rebranded as Pitango in 2001, growing under his leadership as Managing General Partner into Israel's largest and longest-standing venture capital firm, with more than $3 billion under management across 13 funds and over 250 companies backed. Peres has been especially active in Pitango's health-tech practice and serves on the boards of Via Transportation, Taboola, Radwin, and several other portfolio companies, while also chairing the Peres Center for Peace and Innovation.",
    sources: [
      { label: "Wikipedia — Chemi Peres", url: "https://en.wikipedia.org/wiki/Chemi_Peres" },
      { label: "Pitango Venture Capital", url: "https://www.pitango.com" }
    ]
  },
   "erel-margalit": {
    name: "Erel Margalit",
    firm: "Jerusalem Venture Partners",
    firmSlug: "jerusalem-venture-partners",
    title: "Founder & Executive Chairman",
    joinedYear: 1993,
    education: ["PhD"],
    previousExperience: [
      "Director, Jerusalem Development Authority",
      "Member of Knesset, Israeli Parliament (2013-2018, Finance & Science and Technology Committees)"
    ],
    investmentFocus: ["Cybersecurity", "Vertical AI", "Enterprise Software", "Fintech", "Insurtech"],
    notableInvestments: [
      { name: "CyberArk", ticker: "CYBR" },
      { name: "QlikTech", ticker: "QLIK" },
      { name: "Cogent Communications", ticker: "CCOI" }
    ],
    boardSeats: ["Earnix (Chairman)", "ControlUp (Chairman)", "ThetaRay (Chairman)"],
    ipoCount: 3,
    majorExits: 4,
    careerTimeline: [
      { year: "1993", event: "Founds Jerusalem Venture Partners, initially operating one of Israel's first government-backed incubators." },
      { year: "1994", event: "Leads JVP's Series A investment in CyberArk." },
      { year: "2000", event: "Orchestrates Chromatis Networks' $4.8 billion sale to Lucent Technologies, then the largest sale of an Israeli company." },
      { year: "2013", event: "Elected to the Knesset, taking a five-year break from active VC leadership." },
      { year: "2014", event: "CyberArk goes public on the Nasdaq, with JVP holding roughly 47% ownership after a Goldman Sachs-backed secondary transaction." },
      { year: "2025", event: "CyberArk agrees to a $25 billion acquisition by Palo Alto Networks, announced in July." }
    ],
    biography: "Erel Margalit is widely credited as one of the architects of Israel's 'Startup Nation,' founding Jerusalem Venture Partners in 1993 after directing the Jerusalem Development Authority. He led JVP's Series A investment in CyberArk and later increased the firm's stake to roughly 47% through a secondary transaction with Goldman Sachs, positioning the identity security company for its 2014 Nasdaq IPO and, three decades later, a $25 billion acquisition by Palo Alto Networks. Margalit also orchestrated the $4.8 billion sale of Chromatis Networks to Lucent Technologies in 2000, then the largest Israeli tech exit on record, alongside public listings for QlikTech and Cogent Communications. He served in Israel's Knesset from 2013 to 2018 before returning to lead JVP full-time, and was recognized on the Forbes Midas List as, in the words of an Israeli business paper, 'the first venture capitalist with the golden touch.'",
    sources: [
      { label: "Wikipedia — Erel Margalit", url: "https://en.wikipedia.org/wiki/Erel_Margalit" },
      { label: "JVP — Erel Margalit", url: "https://jvpvc.com/jvp_team/erel-n-margalit-4/" }
    ]
  },
   "tope-lawani": {
    name: "Tope Lawani",
    firm: "Helios Investment Partners",
    firmSlug: "helios-investment-partners",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2004,
    education: ["BS, Chemical Engineering, MIT", "JD, Harvard Law School", "MBA, Harvard Business School"],
    previousExperience: [
      "9 years, Texas Pacific Group (TPG Capital), San Francisco & London (led acquisitions of Burger King, Debenhams, J. Crew)"
    ],
    investmentFocus: ["Telecom Infrastructure", "Fintech", "Financial Services", "Growth Equity"],
    notableInvestments: [
      { name: "Interswitch", ticker: null },
      { name: "Helios Towers", ticker: "HTWS.L" },
      { name: "Equity Bank", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 6,
    careerTimeline: [
      { year: "1995", event: "Joins Texas Pacific Group, spending nine years leading telecommunications and media investments across the US and Europe." },
      { year: "2004", event: "Co-founds Helios Investment Partners with Babatunde Soyoye in London." },
      { year: "2005", event: "Helios founds Africa's first independent telecom tower company, HTN Towers." },
      { year: "2011", event: "Leads Helios' investment in Interswitch, a Nigerian electronic payments processor." },
      { year: "2019", event: "Helios Towers completes its listing on the London Stock Exchange." }
    ],
    biography: "Tope Lawani grew up in Ibadan, Nigeria, before earning a chemical engineering degree from MIT and a joint JD/MBA from Harvard, then spending nine years at Texas Pacific Group leading telecommunications and media buyouts including Burger King, Debenhams, and J. Crew. He co-founded Helios Investment Partners with Babatunde Soyoye in 2004, initially intending to build businesses directly rather than run a traditional private equity fund — a plan that shifted when OPIC approached Helios to manage the struggling Modern Africa Growth Fund. Lawani and Soyoye stumbled into what became one of Helios' signature bets while researching a Nigerian mobile telecom license: recognizing that unreliable grid electricity made shared tower infrastructure essential across the continent, they founded Africa's first independent tower company. Under his leadership, Helios has grown into the largest Africa-focused private investment firm, generating more than $2 billion in aggregate exit proceeds through listings, dividend recaps, and strategic sales including Interswitch, Helios Towers, Vivo Energy, and Equity Bank.",
    sources: [
      { label: "How We Made It In Africa", url: "https://www.howwemadeitinafrica.com/the-nigerian-investor-behind-some-of-africas-biggest-deals/170376/" },
      { label: "Helios Investment Partners", url: "https://www.heliosinvestment.com/team" }
    ]
  },
   "kola-aina": {
    name: "Kola Aina",
    firm: "Ventures Platform",
    firmSlug: "ventures-platform",
    title: "Founding Partner",
    joinedYear: 2016,
    education: ["BSc, Electronics Engineering Technology, Savannah State University", "MBA, Bowling Green State University"],
    previousExperience: [
      "Founder, Emerging Platforms (edtech, enterprise & security products)",
      "Angel Investor, early backer of Moniepoint"
    ],
    investmentFocus: ["Fintech", "Healthtech", "Agritech", "Edtech", "AI"],
    notableInvestments: [
      { name: "Paystack", ticker: null },
      { name: "PiggyVest", ticker: null },
      { name: "Moniepoint", ticker: null },
      { name: "Tizeti", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "2016", event: "Founds Ventures Platform in Abuja in June, after early angel investing in Nigeria's tech ecosystem." },
      { year: "2020", event: "Paystack, one of Ventures Platform's earliest bets, is acquired by Stripe for approximately $200 million." },
      { year: "2025", event: "Closes $64 million for Fund II in November, with participation from the IFC, British International Investment, and Nigeria's government-backed iDICE program." }
    ],
    biography: "Kola Aina was already an active angel investor in Nigeria's tech ecosystem, backing companies like Moniepoint early, before formalizing his investment activity by founding Ventures Platform in Abuja in 2016. His firm became one of Africa's most active early-stage funds by taking a deliberately contrarian geographic approach — building from Abuja rather than the more crowded Lagos VC scene, and extending into Francophone West African markets that most Anglophone-focused firms overlook. Ventures Platform's clearest proof point came early: it backed Paystack before Stripe acquired the Nigerian payments company for approximately $200 million in 2020, and the firm has since backed more than 90 startups including PiggyVest, Moniepoint, Tizeti, and Thrive Agric. Aina serves on Nigeria's Presidential Committee for Job Creation and Youth Employment and chairs the board of Ventures Park, an innovation campus in Abuja.",
    sources: [
      { label: "TechCabal — Kola Aina", url: "https://techcabal.com/2025/09/01/kola-aina/" },
      { label: "Ventures Platform", url: "https://www.venturesplatform.com" }
    ]
  },
   "eghosa-omoigui": {
    name: "Eghosa Omoigui",
    firm: "EchoVC Partners",
    firmSlug: "echovc-partners",
    title: "Founder & Managing General Partner",
    joinedYear: 2011,
    education: ["JD, University of Nigeria & University of Pennsylvania Law School", "MBA, Olin Graduate School of Business, Babson College"],
    previousExperience: [
      "Chief of Staff, Intel Treasury (helped oversee an $18B cash platform)",
      "Chief of Staff to the President, Intel Capital",
      "Director, Strategic Investments, Consumer Internet & Semantic Technologies, Intel Capital (~10 years total at Intel)"
    ],
    investmentFocus: ["Fintech", "Health Services", "Commerce", "Energy", "Sustainable Mobility"],
    notableInvestments: [
      { name: "Lori Systems", ticker: null },
      { name: "Hotels.ng", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2000s", event: "Spends nearly a decade at Intel, rising to Director of Strategic Investments at Intel Capital, sourcing early bets on AdMob, Facebook, LinkedIn, and Pandora." },
      { year: "2011", event: "Founds EchoVC Partners in Lagos." },
      { year: "2019", event: "Participates in Lori Systems' $30 million Series A alongside Timon Capital and other investors." },
      { year: "2020s", event: "Launches EchoVC+, an early-growth-stage vehicle built in partnership with TPG Growth and the TPG Rise Fund." }
    ],
    biography: "Eghosa Omoigui spent nearly a decade at Intel, rising to Director of Strategic Investments at Intel Capital, where he sourced and developed the investment thesis behind early bets on AdMob, Facebook, LinkedIn, Pandora, and several other companies that became category leaders. He founded EchoVC Partners in Lagos in 2011, built explicitly around backing underrepresented founders and underserved markets — an intentional continuation of the platform-agnostic, geographically expansive sourcing instinct he'd developed inside Intel Capital. That approach has taken EchoVC's investing well beyond Africa into Southeast Asia and Latin America, and the firm has since built a dedicated growth-stage vehicle, EchoVC+, in partnership with TPG Growth and the TPG Rise Fund. Omoigui holds law degrees from the University of Nigeria and the University of Pennsylvania alongside an MBA from Babson College's Olin Graduate School of Business.",
    sources: [
      { label: "EchoVC Partners Team", url: "https://www.echovc.com/team" },
      { label: "Wharton FinTech", url: "https://medium.com/wharton-fintech/spotlight-on-the-african-fintech-ecosystem-podcast-with-eghosa-omoigui-founder-and-managing-23d05f1d425c" }
    ]
  },
   "olumide-soyombo": {
    name: "Olumide Soyombo",
    firm: "Voltron Capital",
    firmSlug: "voltron-capital",
    title: "Co-Founder",
    joinedYear: 2021,
    education: [],
    previousExperience: [
      "Co-Founder, LeadPath Nigeria (2014)",
      "Co-Founder, Bluechip Technologies",
      "Angel Investor (30+ African startups since 2014, including Paystack, PiggyVest, TeamApt/Moniepoint)"
    ],
    investmentFocus: ["Fintech", "Commerce", "Pre-Seed & Seed", "Pan-African"],
    notableInvestments: [
      { name: "Mono", ticker: null },
      { name: "PiggyVest", ticker: null },
      { name: "TeamApt (Moniepoint)", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "2014", event: "Co-founds LeadPath Nigeria with Kazeem Tewogbade, a Y Combinator-style accelerator, and begins angel investing." },
      { year: "2020", event: "Paystack, one of his personal angel investments, is acquired by Stripe." },
      { year: "2021", event: "Co-founds Voltron Capital with Abe Choi in July." },
      { year: "2022", event: "Voltron Capital launches its first fund, ultimately investing in 53 startups." }
    ],
    biography: "Olumide Soyombo began angel investing in 2014 after co-founding LeadPath Nigeria, a Y Combinator-style accelerator, when he discovered there were no real investors to pitch the startups he was mentoring to. Over the following years he built one of the most recognized personal angel portfolios in African tech, backing more than 30 startups including Mono, PiggyVest, TeamApt (now Moniepoint), and Paystack before Stripe acquired it. He co-founded Voltron Capital with U.S.-based investor Abe Choi in 2021, built specifically to formalize that individual track record into an institutional fund addressing what he's called a severe lack of access to early-stage capital for African founders. Voltron's $20,000-to-$100,000 check sizes target pre-seed and seed startups across Nigeria, Kenya, South Africa, and North Africa, and the firm invested in 53 companies through its first fund alone.",
    sources: [
      { label: "Wikipedia — Olumide Soyombo", url: "https://en.wikipedia.org/wiki/Olumide_Soyombo" },
      { label: "TechCrunch", url: "https://techcrunch.com/2021/07/26/one-of-nigerias-high-profile-angel-investors-is-launching-a-fund-for-african-startups/" }
    ]
  },
   "niklas-adalberth": {
    name: "Niklas Adalberth",
    firm: "Norrsken22",
    firmSlug: "norrsken22",
    title: "Co-Founder",
    joinedYear: 2022,
    education: [],
    previousExperience: [
      "Co-Founder, Klarna (2005)",
      "Founder, Norrsken Foundation"
    ],
    investmentFocus: ["Fintech", "Edtech", "Healthtech", "Market-Enabling Solutions"],
    notableInvestments: [
      { name: "TymeBank", ticker: null },
      { name: "Autochek", ticker: null },
      { name: "Smile Identity", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2005", event: "Co-founds Klarna, which grows into one of Europe's largest online payment companies." },
      { year: "2016", event: "Founds the Norrsken Foundation, building Norrsken House co-working hubs for impact entrepreneurs." },
      { year: "2022", event: "Co-founds Norrsken22 with Hans Otterling in January, based in Kigali, Rwanda." },
      { year: "2023", event: "Closes Norrsken22's debut African Tech Growth Fund at $205 million in November, above its $200 million target." }
    ],
    biography: "Niklas Adalberth co-founded Klarna in 2005 and helped build it into one of Europe's largest online payment companies before turning to impact-focused venture building through the Norrsken Foundation, which he founded in 2016 and which now runs Norrsken House co-working hubs in Stockholm and Kigali for impact entrepreneurs. He co-founded Norrsken22 in January 2022 with Hans Otterling, a partner at Northzone, to address a specific gap he'd identified in African venture capital: an abundance of pre-seed and seed capital but a real shortage of growth-stage funding for companies ready to scale. The fund's $205 million debut close in November 2023 was backed by more than 30 unicorn founders, including Flutterwave's Olugbenga Agboola and Skype's Niklas Zennström, and Norrsken22 has since backed TymeBank, Sabi, Smile Identity, Autochek, and Shara — all still-private growth-stage African companies.",
    sources: [
      { label: "TechCrunch", url: "https://techcrunch.com/2023/11/02/norrsken22s-debut-fund-closes-at-205m-to-back-growth-stage-startups-in-africa/" },
      { label: "Norrsken22", url: "https://www.norrsken22.com" }
    ]
  },
   "shane-shin": {
    name: "Shane Shin",
    firm: "Shorooq Partners",
    firmSlug: "shorooq-partners",
    title: "Co-Founding Partner",
    joinedYear: 2016,
    education: ["BA, The Wharton School, University of Pennsylvania (Summa Cum Laude, Joseph Wharton Scholar, Benjamin Franklin Scholar)"],
    previousExperience: [
      "Investment Banker, UBS",
      "Investment Banker, TD Securities",
      "Investment Banker, Lazard Frères & Co.",
      "Private Equity, Alpine Investors (San Francisco)",
      "GlobalFoundries (Mubadala Investment Company subsidiary)"
    ],
    investmentFocus: ["Fintech", "AI Infrastructure", "Applied AI", "Logistics"],
    notableInvestments: [
      { name: "Tamara", ticker: null },
      { name: "TruKKer", ticker: null },
      { name: "NymCard", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2017", event: "Leaves Silicon Valley and Mubadala's GlobalFoundries to co-found Shorooq Partners in Abu Dhabi with Mahmoud Adi." },
      { year: "2017", event: "Leads Shorooq's pre-seed and seed rounds in Pure Harvest, one of the firm's first regional investments." },
      { year: "2024", event: "Reports the firm meets 4,000-5,000 companies a year and invests in roughly 15." }
    ],
    biography: "Shane Shin grew up in South Korea, studied at the Wharton School, and built his early career as an investment banker at UBS, TD Securities, and Lazard Frères before moving into private equity at Alpine Investors and later Mubadala's GlobalFoundries. In 2017, he left Silicon Valley to co-found Shorooq Partners in Abu Dhabi with his close friend Mahmoud Adi, telling colleagues his parents called him 'insane' for leaving an established career to build a venture firm in a region with little existing venture infrastructure. That bet paid off: Shorooq became one of the most active early-stage investors across the Middle East, North Africa, and Pakistan, backing more than 45 companies including Tamara, TruKKer, NymCard, and Pure Harvest, and Shin has described the firm's approach as deliberately hands-on — proactive involvement in portfolio companies rather than passive capital.",
    sources: [
      { label: "Entrepreneur Middle East", url: "https://www.entrepreneur.com/en-ae/finance/vc-voices-shane-shin-founding-partner-shorooq/495382" },
      { label: "Zawya", url: "https://www.zawya.com/en/business/shorooq-partners-in-a-habit-to-back-winning-horses-yfzvh8h0" }
    ]
  },
   "dany-farha": {
    name: "Dany Farha",
    firm: "BECO Capital",
    firmSlug: "beco-capital",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2012,
    education: ["BA, Management Sciences & Finance, University College London"],
    previousExperience: [
      "Investment Banker, Lehman Brothers, London",
      "Founder, business support services company (UAE, 2000-2010)",
      "Co-Founder, Bayt.com (Arab world's largest job site)",
      "Co-Founder, Butlers (UAE's largest commercial laundry company)",
      "Co-Founder, Interact (catering company)",
      "Seed Investor, GoNabit (acquired by LivingSocial, 2011)"
    ],
    investmentFocus: ["Fintech", "Proptech", "Consumer/Retail Tech", "AI/Software"],
    notableInvestments: [
      { name: "Careem", ticker: null },
      { name: "Property Finder", ticker: null },
      { name: "Kitopi", ticker: null }
    ],
    boardSeats: ["Property Finder"],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "1995", event: "Returns to Dubai after working at Lehman Brothers in London, beginning a career as a serial entrepreneur." },
      { year: "2000", event: "Builds a business support services company over the following decade, alongside co-founding Bayt.com, Butlers, and Interact." },
      { year: "2011", event: "GoNabit, an early seed investment, is acquired by LivingSocial." },
      { year: "2012", event: "Co-founds BECO Capital with Abdulaziz Shikh Al Sagha and Yousef Hammad in Dubai." },
      { year: "2019", event: "Careem, one of BECO's earliest bets, is acquired by Uber for $3.1 billion." },
      { year: "2025", event: "Closes $370 million across two new funds in September, pushing total AUM beyond $820 million." }
    ],
    biography: "Dany Farha built a career as a serial entrepreneur in Dubai for nearly two decades before co-founding BECO Capital — starting at Lehman Brothers in London, then returning to the UAE in 1995 to build and exit a string of companies including Bayt.com, the Arab world's largest job site, Butlers, and Interact. That founder-first background shaped BECO's identity when he co-founded it in 2012 with Abdulaziz Shikh Al Sagha and Yousef Hammad, building what became the longest-serving Dubai-based VC firm investing in the MENA digital sector. Farha personally led BECO's early backing of Careem, the ride-hailing company Uber acquired for $3.1 billion in 2019 — one of two billion-dollar-plus exits in the firm's track record, alongside Property Finder. Under his leadership BECO has grown into the largest non-government early-stage venture firm in the Gulf, managing more than $820 million across five funds spanning Pre-Seed through pre-IPO.",
    sources: [
      { label: "Forbes Middle East", url: "https://www.forbesmiddleeast.com/lists/the-middle-easts-top-venture-capitalists-2024/dany-farha/" },
      { label: "Entrepreneur — The 100", url: "https://www.entrepreneur.com/en-ae/leadership/the-100-dany-farha-co-founder-and-ceo-beco-capital/484841" }
    ]
  },
   "sonia-weymuller": {
    name: "Sonia Weymuller",
    firm: "VentureSouq",
    firmSlug: "venturesouq",
    title: "Co-Founder & General Partner",
    joinedYear: 2013,
    education: [],
    previousExperience: [],
    investmentFocus: ["Fintech", "Climate Tech", "Enterprise Software"],
    notableInvestments: [
      { name: "Tabby", ticker: null },
      { name: "Substack", ticker: null },
      { name: "Zoomcar", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 9,
    careerTimeline: [
      { year: "2013", event: "Co-founds VentureSouq alongside Sonia Gokhale, Suneel Gokhale, and Tammer Qaddumi in Dubai." },
      { year: "2024", event: "VentureSouq portfolio company Minimum is named to Fast Company's Most Innovative Companies list." }
    ],
    biography: "Sonia Weymuller co-founded VentureSouq in Dubai in 2013 alongside Sonia Gokhale, Suneel Gokhale, and Tammer Qaddumi, building one of the earliest institutional venture platforms in the GCC at a time when the region's startup ecosystem was still nascent. The firm has since grown into a genuinely global early-stage investor with a distinctly thematic structure, running dedicated funds focused on fintech and climate tech rather than a single generalist vehicle, and has backed more than 300 companies including nine unicorns spanning Substack, Tabby, and Zoomcar. Weymuller has remained a public voice for VentureSouq's climate tech thesis, speaking on panels alongside other regional investors about the opportunity in decarbonization technology across the Gulf.",
    sources: [
      { label: "VentureSouq", url: "https://www.venturesouq.com" },
      { label: "Unicorn Nest", url: "https://unicorn-nest.com/funds/venturesouq/" }
    ]
  },
   "rick-heitzmann": {
    name: "Rick Heitzmann",
    firm: "FirstMark Capital",
    firmSlug: "firstmark-capital",
    title: "Co-Founder & Partner",
    joinedYear: 2008,
    education: ["BS, Georgetown University", "MBA, Harvard Business School"],
    previousExperience: [
      "Founder, First Advantage (NASDAQ: FADV), sold to First American (NYSE: FAF)"
    ],
    investmentFocus: ["Consumer Marketplaces", "Healthcare", "Software", "Gaming"],
    notableInvestments: [
      { name: "Pinterest", ticker: "PINS" },
      { name: "Airbnb", ticker: "ABNB" },
      { name: "DraftKings", ticker: "DKNG" }
    ],
    boardSeats: ["Ro"],
    ipoCount: 4,
    majorExits: 2,
    careerTimeline: [
      { year: "2000s", event: "Founds First Advantage, growing and selling it to First American." },
      { year: "2008", event: "Co-founds FirstMark Capital with Amish Jani, spinning out from Pequot Capital Management." },
      { year: "2010s", event: "Writes Pinterest's seed check and leads early investments in Airbnb, DraftKings, Riot Games, and StubHub." },
      { year: "2019", event: "Pinterest goes public on the NYSE." },
      { year: "2020", event: "Airbnb and DraftKings both go public; co-organizes a $360 million SPAC with Amish Jani." }
    ],
    biography: "Rick Heitzmann founded First Advantage before selling it to First American, giving him real operating and public-company experience before co-founding FirstMark Capital with Amish Jani in 2008 as a spinoff from Pequot Capital Management. The two built the firm around a specific conviction that New York, not just Silicon Valley, would become a dominant global hub for technology startups — a bet that looked contrarian in 2008 and has since been repeatedly validated. Heitzmann personally wrote Pinterest's seed check years before its 2019 IPO, and led early investments in Airbnb, DraftKings, Riot Games, and StubHub, earning him five consecutive years on the Forbes Midas List. He remains a regular contributor on CNBC discussing tech and IPO markets, and continues to advise founders and executives across FirstMark's portfolio.",
    sources: [
      { label: "FirstMark — Rick Heitzmann", url: "https://firstmark.com/team/rick-heitzmann/" },
      { label: "Wikipedia — FirstMark Capital", url: "https://en.wikipedia.org/wiki/FirstMark_Capital" }
    ]
  },
   "chamath-palihapitiya": {
    name: "Chamath Palihapitiya",
    firm: "Social Capital",
    firmSlug: "social-capital",
    title: "Founder & CEO",
    joinedYear: 2011,
    education: ["BASc, Electrical Engineering, University of Waterloo"],
    previousExperience: [
      "Youngest Vice President in company history, AOL",
      "Venture Investor, Mayfield",
      "VP of User Growth, Platform & Mobile, Facebook (2007-2011, grew platform from 50M to 1B+ users)"
    ],
    investmentFocus: ["AI", "Blockchain", "Healthcare", "Space Technology", "Climate"],
    notableInvestments: [
      { name: "Slack", ticker: null },
      { name: "Box", ticker: "BOX" },
      { name: "Virgin Galactic", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 3,
    careerTimeline: [
      { year: "2007", event: "Joins Facebook, leading Growth, Platform, and Mobile teams and scaling the platform past one billion users." },
      { year: "2011", event: "Leaves Facebook to found Social Capital (initially Social+Capital Partnership) with $60 million of his own money." },
      { year: "2018", event: "Restructures Social Capital into a single-GP family office model, stopping outside capital and becoming the firm's sole investing partner." },
      { year: "2019", event: "Slack, one of his signature bets, goes public on the NYSE." },
      { year: "2021", event: "Salesforce acquires Slack for more than $27 billion; co-launches the All-In Podcast." },
      { year: "2025", event: "Reports Social Capital manages $2.147 billion in his June annual letter." }
    ],
    biography: "Chamath Palihapitiya emigrated from Sri Lanka to Canada as a child, growing up in poverty before earning an electrical engineering degree from the University of Waterloo. He became the youngest Vice President in AOL's history, briefly worked as an investor at Mayfield, then joined Facebook in 2007, leading its Growth, Platform, and Mobile teams as the company scaled past a billion users. He left in 2011 to found Social Capital with $60 million of his own capital, backing Slack, Box, Yammer, and Virgin Galactic through its early years as a traditional venture fund. In 2018 he restructured the firm entirely, closing it to outside capital and becoming its sole investing partner — a 'technology Berkshire Hathaway' model funded by his own balance sheet, which he reported at $2.147 billion in his 2025 annual letter. Palihapitiya became one of the most prominent faces of the 2020-2021 SPAC boom, earned the nickname 'SPAC King,' co-hosts the widely-followed All-In Podcast, and was formerly a minority owner of the Golden State Warriors before selling his stake in 2022 for roughly $520 million.",
    sources: [
      { label: "Wikipedia — Chamath Palihapitiya", url: "https://en.wikipedia.org/wiki/Chamath_Palihapitiya" },
      { label: "All-In Podcast", url: "https://allin.com/about/chamath-palihapitiya" }
    ]
  },
   "raj-shah": {
    name: "Raj Shah",
    firm: "Shield Capital",
    firmSlug: "shield-capital",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2021,
    education: [],
    previousExperience: [
      "F-16 Fighter Pilot, U.S. Air Force",
      "Director of Strategy, Palo Alto Networks",
      "Managing Director, Defense Innovation Unit (DIU), U.S. Department of Defense (under both Obama and Trump administrations)"
    ],
    investmentFocus: ["AI", "Autonomy", "Cybersecurity", "Space", "Dual-Use Defense Technology"],
    notableInvestments: [
      { name: "HawkEye 360", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2000s", event: "Serves as an F-16 fighter pilot in the U.S. Air Force." },
      { year: "2010s", event: "Serves as Director of Strategy at Palo Alto Networks, working at the intersection of commercial cybersecurity and government needs." },
      { year: "2016", event: "Becomes Managing Director of the Defense Innovation Unit, leading the Pentagon's flagship innovation organization across both the Obama and Trump administrations." },
      { year: "2015", event: "Begins planning Shield Capital with Philip Bilden, initially focused on cybersecurity seed investments." },
      { year: "2021", event: "Formally launches Shield Capital with Bilden." },
      { year: "2022", event: "Closes Fund I oversubscribed at $186 million, 55% above target." }
    ],
    biography: "Raj Shah's path to venture capital ran directly through the cockpit and the Pentagon — an F-16 fighter pilot who later became Director of Strategy at Palo Alto Networks before being named Managing Director of the Defense Innovation Unit, the Pentagon's flagship technology innovation organization, serving across both the Obama and Trump administrations. That firsthand experience bridging Silicon Valley product cycles and Pentagon procurement bureaucracy became the direct thesis behind Shield Capital, which he began planning with Philip Bilden in 2015 and formally launched in 2021. Shah has argued publicly that startups able to serve both commercial and national-security customers will structurally outperform single-market competitors, and Shield's oversubscribed $186 million debut fund — closed 55% above target with commitments from endowments, pension funds, and insurance companies — reflects growing institutional conviction in that dual-use thesis.",
    sources: [
      { label: "Shield Capital Team", url: "https://shieldcap.com/team" },
      { label: "Axios", url: "https://www.axios.com/2022/03/16/national-security-focused-vc-firm-raises-125-million" }
    ]
  },
   "iyinoluwa-aboyeji": {
    name: "Iyinoluwa Aboyeji",
    firm: "Future Africa",
    firmSlug: "future-africa",
    title: "Founder & General Partner",
    joinedYear: 2019,
    education: ["BA, Legal Studies, University of Waterloo"],
    previousExperience: [
      "Co-Founder, Andela (billion-dollar African engineering talent network)",
      "Founding CEO, Flutterwave (2016-2018, processed $2B+ across 50M+ transactions)",
      "Deputy Director-General, Oby Ezekwesili 2019 Presidential Campaign"
    ],
    investmentFocus: ["Fintech", "Healthtech", "Edtech", "Climate", "Logistics"],
    notableInvestments: [
      { name: "Eden Life", ticker: null },
      { name: "EmPawa Africa", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2014", event: "Co-founds Andela, which grows into Africa's largest engineering organization, backed by the Chan Zuckerberg Initiative, Google Ventures, and SoftBank." },
      { year: "2016", event: "Co-founds Flutterwave, becoming its founding CEO." },
      { year: "2018", event: "Steps down as Flutterwave CEO in October, after growing it into one of the fastest-growing payments companies of all time." },
      { year: "2019", event: "Founds Future Africa in March, formalizing investment activity he'd been planning since 2015." },
      { year: "2021", event: "Flutterwave reaches unicorn status, raising $170 million at a valuation over $1 billion." },
      { year: "2022", event: "Co-founds Itana (formerly Talent City), a digital free zone project in Lagos." },
      { year: "2024", event: "Future Africa's portfolio reaches 100 companies with a collective value exceeding $6 billion." }
    ],
    biography: "Iyinoluwa Aboyeji co-founded two of Africa's first true unicorns before he ever became an investor — Andela, the continent's largest engineering talent organization, backed by the Chan Zuckerberg Initiative, Google Ventures, and SoftBank, and Flutterwave, the payments company he led as founding CEO through explosive early growth, processing more than $2 billion across 50 million transactions before stepping down in 2018. He founded Future Africa in March 2019, formalizing investment activity he'd been planning since 2015, built specifically to provide capital, coaching, and community to mission-driven African founders rather than capital alone. Describing himself as a faith-driven investor, Aboyeji has grown Future Africa into Africa's largest seed-stage investment platform, with a portfolio of more than 100 companies collectively valued above $6 billion, while continuing to build directly — co-founding Itana, a digital free zone project in Lagos, in 2022.",
    sources: [
      { label: "Wikipedia — Iyinoluwa Aboyeji", url: "https://en.wikipedia.org/wiki/Iyinoluwa_Aboyeji" },
      { label: "Future Africa — About Us", url: "https://www.future.africa/about-us" }
    ]
  },
   "andrew-carruthers": {
    name: "Andrew Carruthers",
    firm: "Novastar Ventures",
    firmSlug: "novastar-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2014,
    education: ["BSc, London School of Economics"],
    previousExperience: [
      "Chartered Accountant, KPMG",
      "Fund Manager, launched first fund on the London Stock Exchange (1999), managing 12 funds across Europe, India & China over 15 years",
      "Emerging markets investor, South Africa (2009)"
    ],
    investmentFocus: ["Mass-Market Consumer", "Climate & Energy", "Agriculture", "Healthcare"],
    notableInvestments: [
      { name: "Bridge International Academies", ticker: null },
      { name: "Sanergy", ticker: null },
      { name: "mPharma", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "1996", event: "Begins his investment career during the dot-com era." },
      { year: "1999", event: "Launches his first fund on the London Stock Exchange." },
      { year: "2009", event: "Begins applying venture capital techniques to emerging markets, starting in South Africa." },
      { year: "2014", event: "Co-founds Novastar Ventures with Steve Beck, raising the firm's first East Africa Fund." },
      { year: "2020", event: "Leads the close of Africa Fund II, anchored by the European Investment Bank and British International Investment." },
      { year: "2026", event: "Closes the Africa People and Planet Fund III at $147 million in early 2026, Novastar's first pan-African vehicle." }
    ],
    biography: "Andrew Carruthers built two decades of fund management experience in Europe, India, and China — launching his first fund on the London Stock Exchange in 1999 and managing 12 more over 15 years — before turning his attention to emerging markets in 2009. Born in Lesotho and raised partly in Ethiopia and Kenya, he co-founded Novastar Ventures with Steve Beck in 2014, applying his fund-management discipline to a specific mass-market thesis: that venture capital could profitably serve East and West Africa's largest underserved consumer needs, not just a narrow tech elite. That philosophy backed early bets on Bridge International Academies, Sanergy, mPharma, and SolarNow, and Carruthers has grown Novastar into one of Africa's largest and most established dedicated venture firms, with roughly $260 million under management across three funds, including a new pan-African vehicle that closed at $147 million in early 2026.",
    sources: [
      { label: "Novastar Ventures Team", url: "https://www.novastarventures.com/team/" },
      { label: "The Org — Andrew Carruthers", url: "https://theorg.com/org/novastar-ventures/org-chart/andrew-carruthers" }
    ]
  },
   "mike-mompi": {
    name: "Mike Mompi",
    firm: "Enza Capital",
    firmSlug: "enza-capital",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2019,
    education: ["BA, Economics & Communications, University of California, Davis"],
    previousExperience: [
      "Co-Founder, London-based fintech startup",
      "Built ClearlySo, a UK impact investment bank that raised more than $250 million for socially responsible businesses"
    ],
    investmentFocus: ["Fintech", "Logistics", "Healthcare", "Human Capital", "Climate Tech"],
    notableInvestments: [
      { name: "Djamo", ticker: null },
      { name: "Turaco", ticker: null },
      { name: "SeamlessHR", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2010s", event: "Co-founds a London-based fintech startup, then helps build ClearlySo, a UK impact investment bank that raises more than $250 million." },
      { year: "2019", event: "Co-founds Enza Capital in Nairobi, launching an early-stage fund focused on pre-seed and seed African tech startups." },
      { year: "2023", event: "Closes Fund II, bringing total AUM to $58 million across 48 investments in 31 companies; launches the Founder Partner Program, allocating 10% of the firm's ownership to founders." }
    ],
    biography: "Mike Mompi was born to a Ghanaian father and Slovak mother and raised in California, earning degrees in Economics and Communications from UC Davis before a career spanning entrepreneurship, public equity investing, and impact finance across four continents. He co-founded a fintech startup in London and helped build ClearlySo, a UK impact investment bank that raised more than $250 million for socially responsible businesses, before co-founding Enza Capital in Nairobi in 2019. Mompi built the firm around a specific thesis — back technology companies that 'organize the offline, digitize key industries, and redefine African life' — and introduced a genuinely distinctive Founder Partner Program in 2023 that allocates 10% of Enza Capital's own ownership to the founders it backs, aiming to align incentives beyond the traditional investor-founder relationship. Under his leadership, Enza has invested in more than 30 companies across eight African markets, spanning fintech, logistics, healthcare, human capital, and climate-smart sectors.",
    sources: [
      { label: "TechCrunch", url: "https://techcrunch.com/2023/09/28/african-vc-firm-enza-capital-launches-founder-partner-program-as-it-closes-funds-at-58m" },
      { label: "Empower Africa", url: "https://empowerafrica.com/fatimatou-ousmanou-samba-is-helping-the-african-diaspora-send-money-home-easily-copy/" }
    ]
  },
   "amar-inamdar": {
    name: "Amar Inamdar",
    firm: "KawiSafi Ventures",
    firmSlug: "kawisafi-ventures",
    title: "Managing Director",
    joinedYear: 2017,
    education: [],
    previousExperience: [
      "Managed a global investment portfolio, International Finance Corporation (IFC)",
      "25+ years of private sector experience building markets and businesses in emerging economies"
    ],
    investmentFocus: ["Off-Grid Solar", "Climate Tech", "Renewable Energy Access"],
    notableInvestments: [
      { name: "BBOXX", ticker: null },
      { name: "d.light", ticker: null },
      { name: "Sistema.bio", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "1990s", event: "Begins a 25-plus-year career as an investor, scientist, and entrepreneur across East Africa's emerging markets." },
      { year: "2010s", event: "Manages a global investment portfolio at the International Finance Corporation before joining KawiSafi." },
      { year: "2017", event: "Becomes Managing Director of KawiSafi Ventures as the fund launches with initial investors." },
      { year: "2019", event: "Leads KawiSafi to a nearly $70 million close in April, through Acumen's for-profit subsidiary Acumen Capital Partners." }
    ],
    biography: "Amar Inamdar built more than 25 years of private sector experience as an investor, scientist, and entrepreneur across East Africa's emerging markets before managing a global investment portfolio at the International Finance Corporation. He became Managing Director of KawiSafi Ventures as the fund launched in 2017, leading it to a nearly $70 million close in 2019 through Acumen Capital Partners — the for-profit investment subsidiary of Acumen, the internationally recognized impact investing nonprofit that created and developed the fund. Inamdar has been outspoken about the need for greater transparency in Africa's energy sector, arguing that differentiated pools of patient, catalytic capital are essential as off-grid solar companies mature from early-stage grants into commercially scalable businesses, and he sits on the boards of several of KawiSafi's portfolio companies.",
    sources: [
      { label: "NextBillion", url: "https://nextbillion.net/africa-energy-sector-kawisafi-ventures/" },
      { label: "KawiSafi Ventures Fund Team", url: "https://www.kawisafi.com/fund" }
    ]
  },
   "jake-cusack": {
    name: "Jake Cusack",
    firm: "CrossBoundary",
    firmSlug: "crossboundary",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2011,
    education: [],
    previousExperience: [
      "Private-sector development work, Iraq and Afghanistan (2010-2012)",
      "Research on capital access and bankable transactions with Afghan entrepreneurs"
    ],
    investmentFocus: ["Energy Infrastructure", "Mini-Grids", "Solar", "Emerging & Frontier Markets"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2010", event: "Begins private-sector development work in Iraq and Afghanistan alongside Matt Tilleard." },
      { year: "2011", event: "Co-founds CrossBoundary, initially focused on bottom-up private-sector solutions in conflict-affected states." },
      { year: "2010s", event: "Expands CrossBoundary into Sub-Saharan Africa, building out its advisory, energy, and mini-grid financing businesses." },
      { year: "2020s", event: "Announces a strategic partnership with Brown Advisory to expand access to sustainable and inclusive investment opportunities." }
    ],
    biography: "Jake Cusack co-founded CrossBoundary in 2011 after spending two years working on private-sector development in Iraq and Afghanistan, where his on-the-ground research with local entrepreneurs convinced him that bottom-up, locally-disciplined capital, not top-down state intervention, was the more sustainable path to development. That conviction shaped CrossBoundary's growth from a small advisory practice into a genuinely diversified investment platform spanning energy infrastructure, mini-grid financing, and direct investment across underserved and frontier markets, with a particular concentration in Sub-Saharan Africa. Cusack has emphasized the firm's deliberate localization over time — CrossBoundary now employs predominantly people from the societies where it invests rather than expatriate staff — and has grown the platform to more than 200 employees across offices including Nairobi and Dubai, while continuing to publish research on capital access and investment facilitation in emerging markets.",
    sources: [
      { label: "CrossBoundary — Jake Cusack", url: "https://crossboundary.com/people/jake-cusack/" },
      { label: "CrossBoundary Group", url: "https://crossboundary.com/crossboundary-group/" }
    ]
  },
   "zachariah-george": {
    name: "Zachariah George",
    firm: "Launch Africa Ventures",
    firmSlug: "launch-africa-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2020,
    education: [],
    previousExperience: [
      "M&A, Lehman Brothers",
      "M&A, Barclays (nearly a decade on Wall Street)",
      "Founder, Tech Lab Africa accelerator (with Barclays, later sold to Techstars)",
      "Co-Founder & Chief Investment Officer, Startupbootcamp AfriTech",
      "Angel Investor (50+ African startups, including Flutterwave, KudaBank, Mono, Yoco)"
    ],
    investmentFocus: ["Fintech", "Healthtech", "Agritech", "Logistics", "Edtech"],
    notableInvestments: [
      { name: "Kuda", ticker: null },
      { name: "Bitmama", ticker: null },
      { name: "Mano", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2010", event: "Moves to South Africa during the World Cup after nearly a decade in Wall Street M&A at Lehman Brothers and Barclays, and stays after spotting a gap in the continent's tech ecosystem." },
      { year: "2010s", event: "Builds the Tech Lab Africa accelerator with Barclays (later sold to Techstars) and co-founds Startupbootcamp AfriTech, becoming an active angel investor in more than 50 African startups." },
      { year: "2020", event: "Co-founds Launch Africa Ventures with Janade du Plessis, raising an oversubscribed $36 million debut fund from 238 investors across 40 countries." },
      { year: "2026", event: "Launch Africa completes 15 new investments in the first half of the year, growing its portfolio past 180 startups across 25 countries." }
    ],
    biography: "Zachariah George spent nearly a decade in Wall Street M&A at Lehman Brothers and Barclays before a trip to South Africa for the 2010 World Cup turned into a permanent relocation once he recognized how underdeveloped the continent's tech ecosystem was. He built the Tech Lab Africa accelerator with Barclays, later sold to Techstars, and co-founded Startupbootcamp AfriTech, becoming an active angel investor with stakes in more than 50 African startups including Flutterwave, KudaBank, Mono, and Yoco along the way. Recognizing a persistent funding gap for companies emerging from accelerators at the pre-Series A stage, he co-founded Launch Africa Ventures in 2020 with Janade du Plessis, then head of venture capital at Nedbank, raising an oversubscribed $36 million debut fund from 238 retail and institutional investors across 40 countries — notably without a single development finance institution among them. George has since grown Launch Africa into the continent's most active early-stage VC fund, backing more than 180 startups across 25 countries, and has been featured on the covers of Fast Company, Destiny Man, and Forbes.",
    sources: [
      { label: "Disrupt Africa", url: "https://disruptafrica.com/2024/11/26/meet-the-investor-zachariah-george-launch-africa-ventures/" },
      { label: "Launch Africa Ventures", url: "https://www.launchafrica.vc" }
    ]
  },
   "kathryn-gould": {
    name: "Kathryn Gould",
    firm: "Foundation Capital",
    firmSlug: "foundation-capital",
    title: "Co-Founder",
    joinedYear: 1995,
    education: [],
    previousExperience: [
      "General Partner, Merrill Pickard Anderson & Eyre",
      "One of the first prominent female venture capitalists in Silicon Valley"
    ],
    investmentFocus: ["Enterprise Software", "Fintech", "Consumer Internet"],
    notableInvestments: [
      { name: "Netflix", ticker: "NFLX" },
      { name: "LendingClub", ticker: "LC" }
    ],
    boardSeats: [],
    ipoCount: 26,
    majorExits: 120,
    careerTimeline: [
      { year: "1980s", event: "Builds an early venture career at Merrill Pickard Anderson & Eyre, becoming one of the first prominent women in Silicon Valley venture capital." },
      { year: "1995", event: "Co-founds Foundation Capital with Bill Elmore and Jim Anderson in Palo Alto, in October." },
      { year: "1990s", event: "Foundation Capital becomes one of Netflix's original investors, years before its public listing." },
      { year: "2014", event: "LendingClub, another Foundation-backed company, completes its NYSE IPO." }
    ],
    biography: "Kathryn Gould built her venture career at Merrill Pickard Anderson & Eyre, becoming one of the first prominent women in Silicon Valley venture capital at a time when the industry was almost entirely male. She co-founded Foundation Capital with Bill Elmore and Jim Anderson in October 1995, built around a distinctive philosophy the firm still describes as seeking out 'zero-billion-dollar markets' — emerging categories that don't yet exist until a visionary founder creates them. That approach made Foundation one of Netflix's original investors years before its public listing, and the firm has gone on to back more than 400 companies including LendingClub, Chegg, Sunrun, and Uber, with 26 IPOs and more than 80 acquisitions across three decades.",
    sources: [
      { label: "Wikipedia — Foundation Capital", url: "https://en.wikipedia.org/wiki/Foundation_Capital" },
      { label: "Foundation Capital", url: "https://foundationcapital.com" }
    ]
  },
   "sandeep-singhal": {
    name: "Sandeep Singhal",
    firm: "Nexus Venture Partners",
    firmSlug: "nexus-venture-partners",
    title: "Co-Founder",
    joinedYear: 2006,
    education: ["BS, Electrical Engineering, Stanford University (Phi Beta Kappa, Tau Beta Pi)", "MBA, The Wharton School (with Distinction, dual major in Finance & Marketing)"],
    previousExperience: [
      "McKinsey & Company",
      "Digital Equipment Corporation",
      "EDA Systems",
      "Co-Founder & CEO, Medusind Solutions (healthcare outsourcing)",
      "Co-Founder & Managing Director, eVentures India (1999, one of India's earliest VC firms)"
    ],
    investmentFocus: ["Enterprise Software", "Consumer Internet", "Fintech"],
    notableInvestments: [
      { name: "Delhivery", ticker: "DELHIVERY.NS" },
      { name: "MakeMyTrip", ticker: "MMYT" },
      { name: "Postman", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 4,
    careerTimeline: [
      { year: "1987", event: "Graduates from Stanford and joins a VC-backed Bay Area startup, beginning his technology career." },
      { year: "1999", event: "Co-founds eVentures India, one of the earliest Indian venture capital firms, backing MakeMyTrip among others." },
      { year: "2006", event: "Co-founds Nexus Venture Partners with Suvir Sujan and Naren Gupta." },
      { year: "2021", event: "Steps down as General Partner after growing the firm to $1.5 billion in AUM, transitioning to Senior Advisor." },
      { year: "2022", event: "Delhivery, a Nexus portfolio company, completes its IPO on Indian stock exchanges." }
    ],
    biography: "Sandeep Singhal graduated from Stanford in 1987 and joined a venture-backed Bay Area startup before moving through McKinsey, Digital Equipment, and EDA Systems, then co-founding Medusind Solutions, a healthcare outsourcing company. In 1999, alongside his operating career, he co-founded eVentures India, one of the country's earliest venture capital firms, backing MakeMyTrip years before its own public listing. He co-founded Nexus Venture Partners in 2006 with Suvir Sujan and the late Naren Gupta, building what became one of the first true India-US cross-border venture funds, investing in enterprise technology and digital consumer businesses on both sides of the Pacific from offices in Menlo Park, Bengaluru, and Mumbai. Singhal led the firm as General Partner until 2021, growing it to $1.5 billion under management before transitioning to Senior Advisor, and holds an MBA with Distinction from Wharton alongside a Stanford electrical engineering degree.",
    sources: [
      { label: "Stanford Seed — Grit & Growth", url: "https://www.gsb.stanford.edu/insights/masterclass-indias-venture-capital-ecosystem" },
      { label: "Strategic Investment Fund", url: "https://sif.gatesfoundation.org/our-team/sandeep-singhal/" }
    ]
  },
   "christine-tsai": {
    name: "Christine Tsai",
    firm: "500 Global",
    firmSlug: "500-global",
    title: "Co-Founder & CEO",
    joinedYear: 2010,
    education: [],
    previousExperience: [
      "Product Marketing Manager, Google (2003-2010) — AdSense, Analytics, YouTube APIs, Developer Platform Tools"
    ],
    investmentFocus: ["Fintech", "Enterprise Software", "Consumer Internet", "Global Emerging Markets"],
    notableInvestments: [
      { name: "Twilio", ticker: "TWLO" },
      { name: "Credit Karma", ticker: null },
      { name: "Canva", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 4,
    majorExits: 6,
    careerTimeline: [
      { year: "2003", event: "Joins Google, spending seven years in product marketing across AdSense, Analytics, and YouTube's developer platform." },
      { year: "2010", event: "Co-founds 500 Startups with Dave McClure in Mountain View, launching a seed accelerator model distinct from Silicon Valley's US-only focus." },
      { year: "2017", event: "Becomes CEO in July, after Dave McClure resigns following multiple allegations of inappropriate conduct toward female entrepreneurs." },
      { year: "2021", event: "Rebrands the firm to 500 Global, reflecting its expanded international investment strategy across more than 80 countries." },
      { year: "2025", event: "Reports the firm has grown to $2.7 billion in AUM and more than 2,600 portfolio companies." }
    ],
    biography: "Christine Tsai spent seven years at Google in product marketing roles spanning AdSense, Analytics, and YouTube's developer platform before co-founding 500 Startups with Dave McClure in 2010, built around a deliberately global thesis at a time most Silicon Valley firms invested almost exclusively in US-based founders. She became CEO in July 2017 after McClure resigned following multiple allegations of inappropriate conduct toward female entrepreneurs, steering the firm through that period and rebranding it to 500 Global in 2021 to reflect its genuinely international footprint. Under her leadership, the firm has backed founders across more than 80 countries, grown to $2.7 billion in assets under management and more than 2,600 portfolio companies, and produced 35-plus unicorns including Canva, Credit Karma, Grab, and Twilio.",
    sources: [
      { label: "Wikipedia — 500 Global", url: "https://en.wikipedia.org/wiki/500_Global" },
      { label: "Global Private Capital Association", url: "https://www.globalprivatecapital.org/team_member/christine-tsai/" }
    ]
  },
   "gilman-louie": {
    name: "Gilman Louie",
    firm: "In-Q-Tel",
    firmSlug: "in-q-tel",
    title: "Founding CEO",
    joinedYear: 1999,
    education: [],
    previousExperience: [
      "Video game designer and developer (co-created Falcon flight simulator)",
      "CEO, Spectrum Holobyte / MicroProse (video game publisher)"
    ],
    investmentFocus: ["AI", "Cybersecurity", "Biotech", "Space Technology", "Frontier Tech"],
    notableInvestments: [
      { name: "Palantir", ticker: "PLTR" },
      { name: "Keyhole (Google Earth)", ticker: null },
      { name: "Ginkgo Bioworks", ticker: "DNA" }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 3,
    careerTimeline: [
      { year: "1990s", event: "Builds a career as a video game designer and executive, co-creating the Falcon flight simulator and leading Spectrum Holobyte/MicroProse." },
      { year: "1999", event: "Named founding CEO of In-Q-Tel, chartered by CIA Director George Tenet to close the technology gap between Silicon Valley and the intelligence community." },
      { year: "2003", event: "Leads In-Q-Tel's roughly $2 million investment in Palantir, one of the company's only institutional backers in its earliest years." },
      { year: "2004", event: "In-Q-Tel-backed Keyhole is acquired by Google, later becoming Google Earth." },
      { year: "2020", event: "Palantir completes its direct listing on the NYSE under ticker PLTR." }
    ],
    biography: "Gilman Louie came to venture capital from an unlikely background — a video game industry executive who co-created the Falcon flight simulator and ran Spectrum Holobyte and MicroProse — before being named founding CEO of In-Q-Tel in 1999. Chartered by CIA Director George Tenet after the agency recognized it was falling behind Silicon Valley's pace of innovation, In-Q-Tel represented something unprecedented: a nonprofit venture fund built specifically to connect classified government needs with private-sector technology, rather than building everything in-house through traditional slow-moving procurement. Louie's most consequential bet came in 2003, when In-Q-Tel invested roughly $2 million in a then-unproven data analytics startup called Palantir — for years, In-Q-Tel and the CIA were essentially Palantir's only backers and only customers, providing critical early validation years before its 2020 direct listing at a valuation that eventually surpassed traditional defense contracting giants like Lockheed Martin and Northrop Grumman.",
    sources: [
      { label: "Fortune", url: "https://finance.yahoo.com/news/meet-cia-backed-venture-fund-100000286.html" },
      { label: "Boss Hunting", url: "https://www.bosshunting.com.au/hustle/in-q-tel-cia-venture-capital-firm" }
    ]
  },
   "james-robinson-iv": {
    name: "James D. Robinson IV",
    firm: "RRE Ventures",
    firmSlug: "rre-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 1994,
    education: ["BA, Computer Science & Business Administration, Antioch College", "MBA, Harvard Business School (1992)"],
    previousExperience: [
      "JP Morgan & Co. (global risk-management systems, then investment banking)",
      "H&Q Venture Capital, San Francisco (software & communications)",
      "Co-Founder, InterVideo Response (in-stadium touchscreen ordering, with Stuart Ellman)",
      "Founder, IV Systems (Unix-based applications, founded during college)"
    ],
    investmentFocus: ["Enterprise Software", "Fintech", "AI"],
    notableInvestments: [
      { name: "BuzzFeed", ticker: "BZFD" },
      { name: "Bark", ticker: "BARK" },
      { name: "BlackSky", ticker: "BKSY" }
    ],
    boardSeats: ["Bark (NYSE: BARK)", "Empire State Realty Trust", "Partnership Fund for New York City"],
    ipoCount: 3,
    majorExits: 4,
    careerTimeline: [
      { year: "1982", event: "Spends six months driving a NYC taxi overnight shift while at Antioch College." },
      { year: "1992", event: "Earns an MBA from Harvard Business School." },
      { year: "1994", event: "Co-founds RRE Ventures with Stuart Ellman, after first co-founding an in-stadium touchscreen ordering startup together that proved about a decade too early." },
      { year: "2013", event: "Braintree, an early RRE investment, is acquired by PayPal for $800 million." },
      { year: "2021", event: "BuzzFeed, a longtime RRE portfolio company, goes public via SPAC merger." }
    ],
    biography: "James D. Robinson IV built an unusually varied path into venture capital — a JP Morgan risk-management analyst and investment banker, then a software and communications investor at H&Q Venture Capital in San Francisco, having already founded a Unix applications company during college and spent a summer driving a New York City taxi overnight shift. In 1994, he co-founded RRE Ventures with Stuart Ellman, after the two had first tried building an in-stadium touchscreen ordering startup together that proved roughly a decade ahead of its time. Over more than three decades since, Robinson has invested in more than 60 companies and served on nearly 50 boards, building RRE into one of New York's oldest and largest venture capital firms with a portfolio spanning fintech, enterprise software, media, space, and robotics. He remains a senior advisor to the Chamber of Digital Commerce and sits on the boards of Empire State Realty Trust and the Partnership Fund for New York City.",
    sources: [
      { label: "RRE Ventures — Jim Robinson", url: "https://rre.com/team/jim-robinson" },
      { label: "Institutional Investor", url: "https://www.institutionalinvestor.com/article/2bsxtrq555krtftscxn9c/corner-office/the-fintech-finance-40-james-d-robinson-iii-and-james-d-robinson-iv" }
    ]
  },
   "joe-lonsdale": {
    name: "Joe Lonsdale",
    firm: "8VC",
    firmSlug: "8vc",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2015,
    education: ["BS, Stanford University"],
    previousExperience: [
      "Intern, PayPal",
      "Early Executive, Clarium Capital (Peter Thiel's hedge fund)",
      "Co-Founder, Palantir Technologies (2004-2009)",
      "Co-Founder, Addepar (2009, wealth management platform now overseeing trillions in assets)",
      "Co-Founder, OpenGov (cloud software for local governments)",
      "Co-Founder, Formation 8 (2011, VC firm and predecessor to 8VC)"
    ],
    investmentFocus: ["AI", "Defense Tech", "Fintech", "Healthcare", "Enterprise Software"],
    notableInvestments: [
      { name: "Palantir", ticker: "PLTR" },
      { name: "Oscar Health", ticker: "OSCR" },
      { name: "Wish", ticker: "WISH" },
      { name: "Joby Aviation", ticker: "JOBY" }
    ],
    boardSeats: [],
    ipoCount: 5,
    majorExits: 6,
    careerTimeline: [
      { year: "2004", event: "Co-founds Palantir Technologies alongside Peter Thiel, leaving the company in 2009." },
      { year: "2009", event: "Co-founds Addepar, a wealth management technology platform." },
      { year: "2011", event: "Co-founds Formation 8, a venture capital firm." },
      { year: "2015", event: "Founds 8VC after Formation 8's breakup, with Jake Medwell, Drew Oetting, Alex Kolicich, and Kimmy Scotti." },
      { year: "2020", event: "Wish, an early 8VC investment, completes its NASDAQ IPO in December at a $14.1 billion valuation; relocates 8VC from San Francisco to Austin." }
    ],
    biography: "Joe Lonsdale's path into venture capital ran directly through company-building — a PayPal internship and an early role at Peter Thiel's hedge fund Clarium Capital led him to co-found Palantir Technologies alongside Thiel in 2004, then Addepar in 2009, a wealth management platform that now oversees trillions of dollars in assets. That operating pattern, founding more than a dozen prominent companies before ever becoming a full-time investor, shapes 8VC's entire model: the firm doesn't just write checks, it actively builds companies from scratch through its 8VC Build program, leveraging Lonsdale's direct experience scaling Palantir and Addepar into category leaders. He founded 8VC in 2015 following the breakup of Formation 8, moved the firm from San Francisco to Austin in 2020, and has since become an outspoken advocate for American manufacturing and defense technology, founding the Cicero Institute think tank and co-founding the University of Austin alongside his venture work.",
    sources: [
      { label: "8VC — Joe Lonsdale", url: "https://8vc.com/team/joe-lonsdale" },
      { label: "Wikipedia — Joe Lonsdale", url: "https://en.wikipedia.org/wiki/Joe_Lonsdale" }
    ]
  },
   "kevin-colleran": {
    name: "Kevin Colleran",
    firm: "Slow Ventures",
    firmSlug: "slow-ventures",
    title: "Co-Founder & Managing Director",
    joinedYear: 2009,
    education: [],
    previousExperience: [
      "One of Facebook's first 10 employees, built its global sales strategy (2005-2011)"
    ],
    investmentFocus: ["Consumer", "Crypto", "Social Media", "Fintech"],
    notableInvestments: [
      { name: "Coinbase", ticker: "COIN" },
      { name: "PagerDuty", ticker: "PD" },
      { name: "BuzzFeed", ticker: "BZFD" }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 4,
    careerTimeline: [
      { year: "2005", event: "Joins Facebook as one of its first 10 employees, helping build the company's global sales strategy." },
      { year: "2009", event: "Co-founds Slow Ventures with Dave Morin, initially pooling personal angel investments alongside other early Facebook executives." },
      { year: "2011", event: "Leaves Facebook and formalizes Slow Ventures into an institutional venture firm, later joined by Sam Lessin as partner." },
      { year: "2014", event: "Leads an early investment in Coinbase." },
      { year: "2018", event: "PillPack, a Slow Ventures investment, is acquired by Amazon for $753 million." }
    ],
    biography: "Kevin Colleran was one of Facebook's first 10 employees, helping build the company's global sales strategy in its earliest years before leaving in 2011. He co-founded Slow Ventures with fellow early Facebook executive Dave Morin in 2009, initially as an informal way to pool personal angel investments alongside other Facebook alumni, before formalizing it into an institutional venture firm. That founding network of tech operators shaped Slow's distinctive limited-partner base — more than 100 technology founders, CEOs, and executives who commit to actively helping portfolio companies, not just university endowments and foundations. Colleran led Slow's early conviction bet on Coinbase years before its public listing, and the firm's patient, founder-first philosophy produced PillPack, which Amazon acquired for $753 million in 2018, alongside investments in Pinterest, Slack, and Postmates.",
    sources: [
      { label: "TechCrunch", url: "https://techcrunch.com/2015/11/02/slow-ventures-get-a-new-partner/" },
      { label: "Slow Ventures — About", url: "https://slow.co/about/" }
    ]
  },
   "brad-svrluga": {
    name: "Brad Svrluga",
    firm: "Primary Venture Partners",
    firmSlug: "primary-venture-partners",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2015,
    education: ["BA, Economics, Williams College"],
    previousExperience: [
      "Strategy Consulting",
      "Co-Founder, High Peaks Venture Partners (2003, predecessor to Primary)"
    ],
    investmentFocus: ["Enterprise Software", "Fintech", "Supply Chain", "Industrial Technology"],
    notableInvestments: [
      { name: "Jet.com", ticker: null },
      { name: "Mirror", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 2,
    careerTimeline: [
      { year: "2003", event: "Co-founds High Peaks Venture Partners, beginning nearly two decades of NYC-focused early-stage investing." },
      { year: "2015", event: "Co-founds Primary Venture Partners with Ben Sun, as a successor to High Peaks Ventures." },
      { year: "2016", event: "Jet.com, an early investment via the predecessor fund, is acquired by Walmart for approximately $3.3 billion." },
      { year: "2020", event: "Mirror is acquired by Lululemon for $500 million." },
      { year: "2024", event: "Closes $425 million across two new funds in February, a $275M seed fund and $150M continuation vehicle." }
    ],
    biography: "Brad Svrluga began his career in strategy consulting before co-founding High Peaks Venture Partners in 2003, spending more than a decade investing in and around New York's technology ecosystem. He co-founded Primary Venture Partners with Ben Sun in 2015 as High Peaks' successor, built around a specific conviction that took shape after the 2008 financial crisis: a wave of the city's most talented people were shifting from Wall Street and Madison Avenue into startups, and New York needed a seed fund with the scale and NYC-specific expertise to back them properly. That thesis produced early bets on Jet.com, acquired by Walmart for roughly $3.3 billion, and Mirror, acquired by Lululemon for $500 million, and Svrluga has grown Primary into New York's largest early-stage firm by operator headcount, with roughly 50 full-time staff and more than 20 dedicated platform operators supporting portfolio companies on hiring and go-to-market execution.",
    sources: [
      { label: "Primary VC Team", url: "https://www.primary.vc/brad-svrluga" },
      { label: "AlleyWatch", url: "https://www.alleywatch.com/2018/06/inside-the-mind-of-a-nyc-vc-brad-svrluga-of-primary-venture-partners/" }
    ]
  },
   "ben-lerer": {
    name: "Ben Lerer",
    firm: "Lerer Hippeau",
    firmSlug: "lerer-hippeau",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2010,
    education: ["BA, Princeton University"],
    previousExperience: [
      "Founder, Thrillist (later merged into Group Nine Media)",
      "CEO, Group Nine Media (parent of NowThis, The Dodo, Thrillist, Seeker, PopSugar)",
      "Chairman & CEO, Group9 Acquisition Corp. (NASDAQ: GNAC, a SPAC)"
    ],
    investmentFocus: ["Consumer", "Fintech", "Enterprise Software"],
    notableInvestments: [
      { name: "Warby Parker", ticker: "WRBY" },
      { name: "Casper", ticker: "CSPR" },
      { name: "Olo", ticker: "OLO" }
    ],
    boardSeats: ["Casper (NYSE: CSPR)"],
    ipoCount: 6,
    majorExits: 8,
    careerTimeline: [
      { year: "2010", event: "Founds Thrillist, a media company that later merges into Group Nine Media." },
      { year: "2010", event: "Co-founds Lerer Hippeau with Eric Hippeau, the same year." },
      { year: "2019", event: "Serves as CEO of Group Nine Media while continuing to lead Lerer Hippeau." },
      { year: "2020", event: "Casper completes its IPO; sits on its board." },
      { year: "2021", event: "BuzzFeed goes public via SPAC merger at a $1.5 billion valuation." }
    ],
    biography: "Ben Lerer spent more than a decade simultaneously running a high-growth media company — first Thrillist, which he founded, then Group Nine Media after Thrillist's merger — while co-founding and building Lerer Hippeau alongside Eric Hippeau in 2010. That dual operator-investor experience shaped a distinctly hands-on, 'activist' seed investing philosophy: Lerer Hippeau takes meaningful stakes and works directly on branding and strategy with portfolio companies, rather than writing passive checks. Lerer has described his own investment philosophy as deliberately contrarian — he wants Lerer Hippeau's portfolio to include companies whose best-case outcome is a genuine power-law winner, not just a safe, sensible business — and that approach produced early bets on Warby Parker, Casper, Glossier, and Allbirds before any of them were obvious winners. He has grown the firm across nine funds and nearly $1.5 billion in AUM, making it one of New York's most influential early-stage venture firms.",
    sources: [
      { label: "GTMnow Podcast", url: "https://gtmnow.com/early-stage-vc-founder-selection-ben-lerer-lerer-hippeau/" },
      { label: "SEC S-1 Filing", url: "https://www.sec.gov/Archives/edgar/data/1841948/000119312521041594/d87587ds1.htm" }
    ]
  },
   "david-tisch": {
    name: "David Tisch",
    firm: "BoxGroup",
    firmSlug: "boxgroup",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2007,
    education: [],
    previousExperience: [
      "Co-Founder & CEO, Spring (acquired by ShopRunner, 2016)",
      "Managing Director, Techstars NYC",
      "Adjunct Professor, NYU Stern School of Business"
    ],
    investmentFocus: ["Consumer Internet", "Marketplaces", "Fintech"],
    notableInvestments: [
      { name: "Warby Parker", ticker: "WRBY" },
      { name: "Plaid", ticker: null },
      { name: "Ramp", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 8,
    careerTimeline: [
      { year: "2007", event: "Co-founds BoxGroup with Adam Rothenberg." },
      { year: "2009", event: "Becomes the first Managing Director of Techstars NYC, helping build it into a cornerstone of the New York tech scene." },
      { year: "2012", event: "Leaves Techstars to focus on BoxGroup full-time, alongside Adam Rothenberg." },
      { year: "2013", event: "BoxGroup becomes one of the first investors in Plaid, then a small fintech startup founded by a former Techstars intern." },
      { year: "2018", event: "Flatiron Health, an early BoxGroup investment, is acquired by Roche for $1.9 billion." }
    ],
    biography: "David Tisch, grandson of Loews Corporation co-founder Laurence Tisch, co-founded BoxGroup in 2007 with Adam Rothenberg, running it initially alongside his role as the first Managing Director of Techstars NYC before leaving in 2012 to focus on BoxGroup full-time. The firm built its reputation on catching companies before anyone else believed in them — most famously becoming the first investor in Plaid after its founder turned down a job offer at BoxGroup to start the company instead, and backing Flatiron Health years before Roche acquired it for $1.9 billion in 2018. Tisch has described BoxGroup's core philosophy as being comfortable with genuine early-stage uncertainty — vision and raw product over traction — and has helped grow the firm into one of New York's most prolific seed investors, with more than 600 investments including Warby Parker, Ramp, Airtable, Glossier, and ClassPass.",
    sources: [
      { label: "TechCrunch", url: "https://techcrunch.com/2021/08/02/boxgroup-closes-on-255m-across-two-funds/" },
      { label: "Fortune", url: "https://fortune.com/2025/10/21/david-tisch-boxgroup-venture-capital-tech-nyc-ramp-cursor-early-stage/" }
    ]
  },
   "pejman-nozad": {
    name: "Pejman Nozad",
    firm: "Pear VC",
    firmSlug: "pear-vc",
    title: "Co-Founder & Founding Managing Partner",
    joinedYear: 2013,
    education: [],
    previousExperience: [
      "Sports Journalist & Radio Host",
      "Professional Soccer Player",
      "Rug Salesman, Palo Alto",
      "Angel Investor (17+ years, early bets on Dropbox, DoorDash, Lending Club, Addepar)"
    ],
    investmentFocus: ["Fintech", "AI", "Consumer", "Healthcare"],
    notableInvestments: [
      { name: "DoorDash", ticker: "DASH" },
      { name: "Dropbox", ticker: "DBX" },
      { name: "Guardant Health", ticker: "GH" },
      { name: "AppLovin", ticker: "APP" }
    ],
    boardSeats: [],
    ipoCount: 4,
    majorExits: 5,
    careerTimeline: [
      { year: "2000s", event: "Immigrates from Iran and works as a rug salesman in downtown Palo Alto, building relationships with the tech entrepreneurs and investors who frequented the store." },
      { year: "2010s", event: "Spends 17-plus years as an angel investor, becoming an early backer of Dropbox, Lending Club, and Addepar." },
      { year: "2013", event: "Co-founds Pejman Mar Ventures with Mar Hershenson in August; convinces her to back DoorDash as one of the firm's first five deals." },
      { year: "2016", event: "Rebrands the firm to Pear VC." },
      { year: "2020", event: "DoorDash goes public on the NYSE; Pear's roughly $1.9 million investment is worth more than $440 million." }
    ],
    biography: "Pejman Nozad may be tech's most unlikely venture capitalist — an Iranian immigrant who worked as a sports journalist, radio host, and professional soccer player before landing at a rug store in downtown Palo Alto, where he immersed himself in the local tech scene and slowly built a reputation for spotting promising founders. After 17 years as an angel investor backing Dropbox, Lending Club, and Addepar, he convinced Stanford lecturer and three-time founder Mar Hershenson to co-found Pejman Mar Ventures with him in 2013, rebranded as Pear VC in 2016. His conviction produced the firm's defining moment that same founding year: he burst into the office insisting they back a food delivery startup called DoorDash, despite Hershenson's initial skepticism, turning a roughly $1.9 million investment into more than $440 million at the company's 2020 IPO — a nearly 233-times return on Pear's entire first fund from a single bet. Nozad has ranked on the Forbes Midas List every year since 2021, taking the #1 spot on the Midas Seed List in 2024.",
    sources: [
      { label: "Forbes", url: "https://www.forbes.com/sites/alexkonrad/2020/12/11/their-venture-fund-was-a-sign-of-a-bubble-then-they-turned-19-million-in-doordash-into-440-million/" },
      { label: "Pear VC — Pejman Nozad", url: "https://pear.vc/team/pejman-nozad/" }
    ]
  },
   "mark-suster": {
    name: "Mark Suster",
    firm: "Upfront Ventures",
    firmSlug: "upfront-ventures",
    title: "Managing Partner",
    joinedYear: 2007,
    education: ["BA, University of California, San Diego", "MBA, University of Chicago"],
    previousExperience: [
      "Founder & CEO, BuildOnline (construction collaboration technology, 1999; merged with Citadon in 2006)",
      "Founder, Koral (content collaboration software, acquired by Salesforce.com, April 2007)",
      "VP of Product Management, Salesforce.com"
    ],
    investmentFocus: ["Enterprise SaaS", "Consumer Internet", "Fintech"],
    notableInvestments: [
      { name: "TrueCar", ticker: "TRUE" },
      { name: "Ring", ticker: null },
      { name: "Maker Studios", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 3,
    careerTimeline: [
      { year: "1999", event: "Founds BuildOnline, a construction collaboration technology company, later merging with Citadon in 2006." },
      { year: "2006", event: "Founds Koral, a content collaboration software business." },
      { year: "2007", event: "Koral is acquired by Salesforce.com in April; Suster briefly serves as VP of Product Management before joining GRP Partners (now Upfront Ventures) later that year." },
      { year: "2009", event: "Starts the Launchpad LA accelerator while continuing at Upfront." },
      { year: "2011", event: "Becomes Managing Partner." }
    ],
    biography: "Mark Suster built two enterprise software companies before becoming an investor — BuildOnline, a construction collaboration platform he founded in 1999, and Koral, a content collaboration business that Salesforce.com acquired in 2007, after which he briefly worked inside Salesforce as VP of Product Management. That real operating scar tissue shaped his approach when he joined GRP Partners (later renamed Upfront Ventures) later in 2007, becoming Managing Partner in 2011 and helping transform a firm that began by backing traditional retail chains like Costco and Starbucks into the largest and most established venture capital firm in Los Angeles. Suster also founded the Launchpad LA accelerator in 2009 and became one of the most widely-read voices in venture capital through his Both Sides of the Table blog, known for detailed, practitioner-level writing on term sheets, board dynamics, and fundraising that draws directly on his own founder experience.",
    sources: [
      { label: "Wikipedia — Mark Suster", url: "https://en.wikipedia.org/wiki/Mark_Suster" },
      { label: "Venture Unlocked", url: "https://ventureunlocked.substack.com/p/marksuster" }
    ]
  },
   "theresia-gouw": {
    name: "Theresia Gouw",
    firm: "Acrew Capital",
    firmSlug: "acrew-capital",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2019,
    education: ["BS, Engineering, Brown University", "MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "Management Consultant, Bain & Company",
      "Founding VP of Business Development & Sales, Release Software",
      "Managing General Partner, Accel Partners (15 years, first female partner and managing partner)",
      "Co-Founder, Aspect Ventures (2014)"
    ],
    investmentFocus: ["Fintech", "Cybersecurity", "Data & AI", "Healthcare"],
    notableInvestments: [
      { name: "Forescout", ticker: "FSCT" },
      { name: "Imperva", ticker: "IMPV" },
      { name: "Trulia", ticker: "TRLA" }
    ],
    boardSeats: [],
    ipoCount: 4,
    majorExits: 8,
    careerTimeline: [
      { year: "2000s", event: "Spends 15 years at Accel Partners, becoming the firm's first female partner and managing partner." },
      { year: "2014", event: "Co-founds Aspect Ventures with Jennifer Fonstad, a rare woman-led venture capital fund in Silicon Valley." },
      { year: "2019", event: "Aspect Ventures splits; Gouw co-founds Acrew Capital with Lauren Kolodny, Vishal Lugani, Asad Khaliq, and Mark Kraynak in December, closing a $250 million debut fund backed by Melinda Gates." },
      { year: "2024", event: "Raises $700 million in October, pushing total AUM to $1.7 billion." }
    ],
    biography: "Theresia Gouw emigrated from Indonesia as a child, studied engineering at Brown, and earned an MBA from Stanford before spending 15 years at Accel Partners, where she became the firm's first female partner and managing partner during a career that touched real, dollar-verified exits including Forescout, Imperva, Trulia, and HotelTonight's acquisition by Airbnb. She co-founded Aspect Ventures in 2014 with Jennifer Fonstad, and when the two split in 2019 over differing leadership styles, Gouw launched Acrew Capital with four Aspect colleagues, deliberately building it as a 'multigenerational' firm designed to avoid concentrating power at the top the way many venture partnerships do. She has been named to the Forbes Midas List eight times, co-founded All Raise, a nonprofit expanding women's representation in venture capital, and has made diversity of perspective a structural pillar of Acrew's investing thesis rather than a stated goal without teeth.",
    sources: [
      { label: "Wikipedia — Theresia Gouw", url: "https://en.wikipedia.org/wiki/Theresia_Gouw" },
      { label: "Forbes", url: "https://www.forbes.com/sites/alexkonrad/2019/12/18/theresia-gouw-acrew-capital-raises-250-million-debut-fund/" }
    ]
  },
   "chris-farmer": {
    name: "Chris Farmer",
    firm: "SignalFire",
    firmSlug: "signalfire",
    title: "Founder & CEO",
    joinedYear: 2013,
    education: [],
    previousExperience: [
      "Consultant, Bain & Company (technology buyouts)",
      "VP, Bessemer Venture Partners (2005-2009, digital media & mobile)",
      "Venture Partner, General Catalyst (2010-2013, led seed program: Coinbase, Discord, Stripe, Venmo, Zapier)",
      "Led turnaround of Skybitz (wireless SaaS, acquired by Telular Corporation)"
    ],
    investmentFocus: ["Applied AI", "Enterprise Software", "Healthcare", "Cybersecurity"],
    notableInvestments: [
      { name: "Grammarly", ticker: null },
      { name: "Grow Therapy", ticker: null },
      { name: "Stampli", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2009", event: "Leaves Bessemer Venture Partners after four years leading digital media and mobile investments." },
      { year: "2010", event: "Joins General Catalyst as a Venture Partner, leading its seed investment program and helping establish its California office." },
      { year: "2013", event: "Founds SignalFire with Ilya Kirnos, built from the ground up as a data-driven, technology-native venture firm." },
      { year: "2025", event: "Closes over $1 billion in new capital in April, pushing total AUM to approximately $3 billion." }
    ],
    biography: "Chris Farmer built his path to venture capital through Bain & Company technology consulting, a stint turning around wireless SaaS company Skybitz, and investing roles at Bessemer Venture Partners and General Catalyst, where he led a seed program that backed Coinbase, Discord, Stripe, Venmo, and Zapier before any of them were obvious winners. He founded SignalFire in 2013 with Ilya Kirnos on a genuinely different premise: build a venture firm the way a technology company builds a product, with an in-house engineering and data science team holding equal standing to investing partners, all sharing carry rather than crediting individual deal partners. That platform, called Beacon AI, tracks more than 650 million people and 80 million organizations to identify talent and market trends years ahead of consensus, and Farmer has personally bootstrapped the model from the start — running corporate advisory projects in SignalFire's early days just to cover AWS bills that exceeded the first fund's management fees. SignalFire has grown into a $3 billion applied-AI-focused firm, closing over $1 billion in new capital in a single raise in April 2025.",
    sources: [
      { label: "SignalFire — Chris Farmer", url: "https://www.signalfire.com/team/chris-farmer" },
      { label: "BusinessWire", url: "https://www.businesswire.com/news/home/20250407594969/en/AI-Native-VC-SignalFire-Raises-Over-$1B-to-Fuel-the-Next-Wave-of-Applied-AI-Startups-Pushing-AUM-to-$3B" }
    ]
  },
   "paul-bernard": {
    name: "Paul Bernard",
    firm: "Amazon Alexa Fund",
    firmSlug: "amazon-alexa-fund",
    title: "Director, Alexa Fund",
    joinedYear: 2015,
    education: ["BA, Vanderbilt University"],
    previousExperience: [
      "Senior positions, Intel",
      "Amazon Alexa devices team"
    ],
    investmentFocus: ["Voice Technology", "AI", "Connected Home", "Ambient Computing"],
    notableInvestments: [
      { name: "Ring", ticker: null },
      { name: "ecobee", ticker: null },
      { name: "TrackR", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "2015", event: "Launches and begins leading the Alexa Fund at its founding, with an initial $100 million commitment." },
      { year: "2017", event: "Amazon commits an additional $100 million to the fund, bringing total capital to $200 million." },
      { year: "2018", event: "Ring, an early Alexa Fund portfolio company, is acquired directly by Amazon." },
      { year: "2023", event: "Named to Global Venturing's Powerlist as one of the world's leading corporate venturing professionals." },
      { year: "2025", event: "Announces the fund's expansion into AI-enabled hardware and smart agents, broadening beyond its original voice-technology focus." }
    ],
    biography: "Paul Bernard came to the Alexa Fund from senior roles at Intel and Amazon's own Alexa devices team, and has led the fund since its 2015 launch — making him one of the longest-tenured leaders in corporate venture capital. Operating the fund 'off the balance sheet' with no fixed size constraint, Bernard has grown its footprint from an initial $100 million commitment to roughly $200 million, backing more than 140 companies including ecobee, TrackR, and Ring, the smart doorbell company Amazon itself later acquired directly in 2018. Rather than chasing pure financial exits, Bernard has described the fund's real goal as identifying startups building genuinely new experiences with Alexa or advancing voice technology broadly, and in 2025 he announced the fund's expansion into AI-enabled hardware and smart agents as large language models reshaped what's possible with ambient computing. He has been recognized on Global Venturing's Powerlist of top corporate venturing professionals in both 2023 and 2025.",
    sources: [
      { label: "TechCrunch", url: "https://techcrunch.com/2023/01/24/alexa-funds-paul-bernard-talks-openai-whats-catching-his-eye-and-remaining-relevant-as-amazon-restructures" },
      { label: "Global Venturing Powerlist", url: "https://globalventuring.com/corporate/corporate-venturer/powerlist-2023-paul-bernard/" }
    ]
  },
   "anna-patterson": {
    name: "Anna Patterson",
    firm: "Gradient Ventures",
    firmSlug: "gradient-ventures",
    title: "Founder & Managing Partner",
    joinedYear: 2017,
    education: [],
    previousExperience: [
      "Founder, Recall (search engine, acquired by Google)",
      "Founder, Cuil (search engine)",
      "VP of Engineering, Google Search Quality"
    ],
    investmentFocus: ["AI", "Machine Learning", "Developer Tools", "Enterprise Software"],
    notableInvestments: [
      { name: "WRITER", ticker: null },
      { name: "Lambda AI", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2000s", event: "Founds Recall, a search engine later acquired by Google, then founds Cuil, an ambitious rival search engine." },
      { year: "2010s", event: "Serves as VP of Engineering for Google Search Quality, working directly on the core algorithms behind Google's search product." },
      { year: "2017", event: "Founds Gradient Ventures as Google's early-stage AI-focused venture fund." },
      { year: "2025", event: "Gradient Ventures spins out from Google as an independent investment entity in October, no longer operating as a corporate venture arm." }
    ],
    biography: "Anna Patterson built a rare technical pedigree in search and AI before turning to venture capital — founding Recall, a search engine acquired by Google, then the ambitious rival search engine Cuil, before returning to Google as VP of Engineering for Search Quality, working directly on the algorithms underlying its core product. She founded Gradient Ventures in 2017 to give Google's AI-focused seed investing a genuinely technical edge, staffing the fund primarily with ex-Google engineers who provide hands-on support on model architecture and data pipelines rather than purely financial guidance. That approach helped Gradient build a portfolio of more than 175 companies including unicorns WRITER and Lambda AI, and in October 2025 the fund reached a new inflection point, spinning out from Google entirely to operate as an independent investment firm better positioned to compete in the rapidly evolving AI venture landscape.",
    sources: [
      { label: "Gradient Ventures Team", url: "https://www.gradient.com/team/" },
      { label: "f4.fund", url: "https://f4.fund/firms/gradient-ventures" }
    ]
  },
  "dana-settle": {
    name: "Dana Settle",
    firm: "Greycroft",
    firmSlug: "greycroft",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2006,
    education: ["BA, University of Michigan", "MBA, Harvard Business School"],
    previousExperience: [
      "M&A, Goldman Sachs",
      "Operations, Reuters"
    ],
    investmentFocus: ["Consumer Internet", "Fintech", "Enterprise Software"],
    notableInvestments: [
      { name: "Venmo", ticker: null },
      { name: "The RealReal", ticker: "REAL" },
      { name: "Bird Global", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "2000s", event: "Works in M&A at Goldman Sachs and operations at Reuters before moving into venture capital." },
      { year: "2006", event: "Co-founds Greycroft with Alan Patricof and Ian Sigalow." },
      { year: "2012", event: "Leads Greycroft's early seed investment in Venmo." },
      { year: "2013", event: "Braintree, which had acquired Venmo, is sold to PayPal for $800 million." },
      { year: "2019", event: "The RealReal, an early Greycroft investment Settle led, completes its IPO." }
    ],
    biography: "Dana Settle moved into venture capital after a career spanning M&A at Goldman Sachs and operations at Reuters, co-founding Greycroft in 2006 alongside veteran VC Alan Patricof and Ian Sigalow. She has been one of the firm's most consistently active investors in consumer payments and marketplaces, personally leading Greycroft's early seed bet on Venmo years before Braintree, which had acquired the payments app, sold to PayPal for $800 million in 2013. Settle also led Greycroft's early investment in The RealReal, the consignment marketplace that completed its own IPO in 2019, and has continued to anchor the firm's growth-stage fintech and marketplace investing as it has grown to more than $3 billion in assets under management.",
    sources: [
      { label: "Greycroft — Dana Settle", url: "https://www.greycroft.com/team/dana-settle/" },
      { label: "Wikipedia — Greycroft", url: "https://en.wikipedia.org/wiki/Greycroft" }
    ]
  },
  "kate-mitchell": {
    name: "Kate Mitchell",
    firm: "Scale Venture Partners",
    firmSlug: "scale-venture-partners",
    title: "Co-Founder & Partner Emeritus",
    joinedYear: 2000,
    education: [],
    previousExperience: [],
    investmentFocus: ["Enterprise Software", "SaaS", "AI"],
    notableInvestments: [
      { name: "HubSpot", ticker: "HUBS" },
      { name: "DocuSign", ticker: "DOCU" },
      { name: "Bill.com", ticker: "BILL" }
    ],
    boardSeats: ["SVB Financial Group", "Fortive Corporation"],
    ipoCount: 3,
    majorExits: 5,
    careerTimeline: [
      { year: "2000", event: "Co-founds BA Venture Partners with Rory O'Driscoll, Bank of America's internal venture arm." },
      { year: "2007", event: "Leads the spinout into an independent firm, renamed Scale Venture Partners." },
      { year: "2012", event: "Co-authors the IPO section of the JOBS Act, expanding public-market access for emerging growth companies." },
      { year: "2014", event: "Co-founds VentureForward, an NVCA initiative advancing opportunities for women and underrepresented minorities in venture capital." },
      { year: "2019", event: "Bill.com, a Scale portfolio company, completes its IPO." }
    ],
    biography: "Kate Mitchell co-founded what became Scale Venture Partners in 2000 as BA Venture Partners, Bank of America's internal venture arm, alongside Rory O'Driscoll, before leading its 2007 spinout into an independent firm. Beyond investing, Mitchell has been one of venture capital's most consequential policy voices — she co-authored the IPO section of the 2012 JOBS Act, expanding public-market access for emerging growth companies, and served as chairman of the National Venture Capital Association. Her investment track record includes HubSpot, DocuSign, and Bill.com, all of which went on to complete public listings, and she co-founded VentureForward in 2014, an NVCA initiative focused on advancing women and underrepresented minorities across the venture ecosystem, earning her the NVCA's American Spirit Award in 2021.",
    sources: [
      { label: "Scale Venture Partners — Kate Mitchell", url: "https://www.scalevp.com/team/kate-mitchell" },
      { label: "iHeart Podcast", url: "https://www.iheart.com/podcast/356-array-podcast-28107740/episode/rory-odriscoll-founder-of-scale-venture-49892844/" }
    ]
  },
  "bill-bowes": {
    name: "Bill Bowes",
    firm: "U.S. Venture Partners",
    firmSlug: "us-venture-partners",
    title: "Co-Founder",
    joinedYear: 1981,
    education: ["BA, Economics, Stanford University", "MBA, Harvard University"],
    previousExperience: [
      "Investment Banker, Blyth & Co.",
      "Board Member, Cetus Corporation (1972-1978)",
      "Board Member, Raychem (1961-late 1970s)",
      "Founding Shareholder, First Treasurer & Chairman, Amgen"
    ],
    investmentFocus: ["Enterprise Software", "Healthcare", "Biotechnology"],
    notableInvestments: [
      { name: "Check Point Software", ticker: "CHKP" },
      { name: "SanDisk", ticker: null },
      { name: "Ross Stores", ticker: "ROST" }
    ],
    boardSeats: [],
    ipoCount: 5,
    majorExits: 10,
    careerTimeline: [
      { year: "1961", event: "Joins the board of Raychem, serving until the late 1970s." },
      { year: "1972", event: "Joins the board of Cetus Corporation, a pioneering biotechnology company." },
      { year: "1980", event: "Becomes founding shareholder, first Treasurer, and Chairman of Amgen." },
      { year: "1981", event: "Co-founds U.S. Venture Partners with Stuart Moldaw and Robert Sackman." },
      { year: "2016", event: "Passes away on December 28, leaving behind a legacy as one of Silicon Valley's foundational biotech and venture figures." }
    ],
    biography: "Bill Bowes built a career at the very origins of both Silicon Valley venture capital and the modern biotechnology industry, joining the boards of Raychem and Cetus Corporation years before co-founding U.S. Venture Partners in 1981 with Stuart Moldaw and Robert Sackman. His most historically significant contribution came outside USVP entirely: Bowes was a founding shareholder and served as Amgen's first Treasurer and Chairman, helping build what became one of the world's largest biotechnology companies from its earliest days. At USVP, that same conviction in scientific and technical founders helped establish the firm as one of the longest-running and most successful early-stage investors in Silicon Valley history, backing more than 500 companies across four decades with 93-plus completed IPOs, spanning Check Point Software, SanDisk, Ross Stores, and Yammer. Bowes passed away in December 2016, leaving a legacy as one of the foundational figures connecting Silicon Valley's venture capital and biotechnology industries.",
    sources: [
      { label: "Wikipedia — Bill Bowes", url: "https://en.wikipedia.org/wiki/Bill_Bowes_(venture_capitalist)" },
      { label: "Wikipedia — U.S. Venture Partners", url: "https://en.wikipedia.org/wiki/U.S._Venture_Partners" }
    ]
  },
  "rebecca-lynn": {
    name: "Rebecca Lynn",
    firm: "Canvas Prime",
    firmSlug: "canvas-prime",
    title: "Co-Founder & Managing Director",
    joinedYear: 2013,
    education: ["BS, Chemical Engineering, University of Missouri", "JD/MBA, UC Berkeley"],
    previousExperience: [
      "New Product Development, Procter & Gamble",
      "Early Employee & VP Marketing, NextCard (scaled from 30 to 1,300 employees through IPO)",
      "General Partner, Morgenthaler Ventures (2007-2013)"
    ],
    investmentFocus: ["Fintech", "Healthtech", "AI"],
    notableInvestments: [
      { name: "LendingClub", ticker: "LC" },
      { name: "Doximity", ticker: "DOCS" },
      { name: "Luminar Technologies", ticker: "LAZR" }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 9,
    careerTimeline: [
      { year: "1998", event: "Moves to Silicon Valley as an early employee of NextCard, the first online credit card company, helping scale it from 30 to 1,300 employees through IPO." },
      { year: "2007", event: "Begins her venture career at Morgenthaler Ventures, becoming a partner in 2012." },
      { year: "2013", event: "Co-founds Canvas Ventures, a spinout from Morgenthaler; leads the firm's early-stage investment in LendingClub." },
      { year: "2014", event: "LendingClub completes its IPO in December, the largest U.S. tech IPO of the year." },
      { year: "2023", event: "Casetext, an early Canvas investment, is acquired by Thomson Reuters for $650 million in an all-cash deal." }
    ],
    biography: "Rebecca Lynn began her career as a chemical engineer, including work in a nuclear research reactor, before moving into product development at Procter & Gamble and then joining NextCard, the first online credit card company, as an early employee, helping scale it from 30 to 1,300 employees through its IPO. She began her venture career at Morgenthaler Ventures in 2007, becoming partner in 2012, before co-founding Canvas Ventures (now Canvas Prime) as a spinout in 2013 — closing her first fund the week Lehman Brothers collapsed. Her early-stage investment in LendingClub became the largest U.S. tech IPO of 2014, and her broader track record includes Doximity, Luminar Technologies, and Casetext, the AI-powered legal research platform Thomson Reuters acquired for $650 million in cash in 2023 after the company gained early access to GPT-4. A five-time Forbes Midas List honoree, Lynn has been recognized as a Senior Deal Maker by the Wall Street Journal and a Top Woman VC by the New York Times.",
    sources: [
      { label: "Canvas Prime — Rebecca Lynn", url: "https://www.canvas.vc/team-member/rebecca-lynn" },
      { label: "Wikipedia — Rebecca Lynn", url: "https://en.wikipedia.org/wiki/Rebecca_Lynn_(venture_capitalist)" }
    ]
  },
  "tige-savage": {
    name: "Tige Savage",
    firm: "Revolution Ventures",
    firmSlug: "revolution-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2005,
    education: ["BA, University of Michigan"],
    previousExperience: [
      "Executive, Riggs National Corporation",
      "Board Member, Allbritton Communications Company",
      "EVP, Riggs Capital Partners (1998-2000, technology & media investments)",
      "VP, Time Warner Ventures (2001-2003, technology & media investments)"
    ],
    investmentFocus: ["Consumer Technology", "Enterprise", "Marketplaces"],
    notableInvestments: [
      { name: "Booker", ticker: null },
      { name: "LivingSocial", ticker: null },
      { name: "Framebridge", ticker: null }
    ],
    boardSeats: ["Aiwyn", "ProRata.ai"],
    ipoCount: 0,
    majorExits: 10,
    careerTimeline: [
      { year: "1998", event: "Manages technology and media sector investments as EVP of Riggs Capital Partners." },
      { year: "2001", event: "Manages technology and media investments as VP of Time Warner Ventures." },
      { year: "2005", event: "Co-founds Revolution with Steve Case and Donn Davis in Washington, D.C." },
      { year: "2013", event: "Leads the close of Revolution Ventures' first institutional fund at $200 million, exceeding its $150 million target." },
      { year: "2018", event: "Booker, a Revolution Ventures portfolio company, is acquired by Mindbody for $150 million in March." }
    ],
    biography: "Tige Savage built nearly three decades of technology and media investing experience across Riggs Capital Partners and Time Warner Ventures before co-founding Revolution with Steve Case and Donn Davis in 2005. He now leads Revolution Ventures, the firm's institutionally-backed early-stage fund, built on the specific conviction that great companies are being systematically overlooked by investors concentrated in Silicon Valley, New York, and Boston. That geographic thesis produced real returns: Savage led or served on the board of numerous exited Revolution companies, including Booker (acquired by Mindbody), Framebridge (acquired by Graham Holdings), and Flexcar (acquired by Avis, the Zipcar predecessor deal), and Revolution Ventures has maintained top-quartile fund performance since inception by deliberately avoiding a strategy dependent on rare outlier bets. Savage has been named one of Washington, D.C.'s '100 Top Tech Titans' by Washingtonian Magazine five times, most recently in 2024.",
    sources: [
      { label: "Revolution — Tige Savage", url: "https://www.revolution.com/team-member/tige-savage" },
      { label: "Wikipedia — Tige Savage", url: "https://en.wikipedia.org/wiki/Tige_Savage" }
    ]
  },
  "hunter-walk": {
    name: "Hunter Walk",
    firm: "Homebrew",
    firmSlug: "homebrew",
    title: "Co-Founder & Partner",
    joinedYear: 2013,
    education: ["BA, History, Vassar College", "MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "Management Consultant, Deloitte",
      "Product & Marketing, Linden Lab (Second Life)",
      "Head of Consumer Product, YouTube / Google (~10 years)"
    ],
    investmentFocus: ["Fintech", "Developer Tools", "AI/ML", "Small Business Platforms"],
    notableInvestments: [
      { name: "Chime", ticker: "CHYM" },
      { name: "Cruise", ticker: null },
      { name: "Gusto", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "2000s", event: "Works in management consulting at Deloitte, then joins Linden Lab, creators of Second Life." },
      { year: "2007", event: "Joins Google, eventually leading consumer product for YouTube over nearly a decade." },
      { year: "2013", event: "Co-founds Homebrew with Satya Patel in San Francisco, closing a $35 million debut fund." },
      { year: "2025", event: "Chime, one of Homebrew's earliest and most defining bets, completes its Nasdaq IPO in June at an $11.6 billion valuation." }
    ],
    biography: "Hunter Walk built nearly a decade of consumer product leadership at Google, most notably heading product for YouTube, after earlier stints at Linden Lab and in management consulting at Deloitte. He co-founded Homebrew in 2013 with fellow Google veteran Satya Patel, built around what they call the 'Bottom Up Economy' thesis — betting on companies that give power back to individuals and small businesses who'd been underserved by incumbents. That conviction, applied deliberately narrow (the firm makes only 8-10 investments a year, working closely with each through Series B), produced one of the earliest and most successful bets in Chime, which completed its Nasdaq IPO in June 2025 at an $11.6 billion valuation after 12 years as a private company. Walk and Patel recently made the unusual decision to stop raising outside capital entirely, moving to a self-funded model called Homebrew Forever after a decade of what they've described as stellar returns across Chime, Plaid, and Gusto.",
    sources: [
      { label: "TechCrunch — Hunter Walk", url: "https://techcrunch.com/author/hunter-walk" },
      { label: "The Takeoff Podcast", url: "https://thetakeoff.substack.com/p/hunter-walk-co-founder-and-partner" }
    ]
  },
  "aileen-lee": {
    name: "Aileen Lee",
    firm: "Cowboy Ventures",
    firmSlug: "cowboy-ventures",
    title: "Founder & Managing Partner",
    joinedYear: 2012,
    education: ["BS, MIT Sloan School of Management", "MBA, Harvard Business School"],
    previousExperience: [
      "Financial Analyst, Morgan Stanley",
      "Operating roles, Gap Inc., The North Face, Odwalla",
      "Founding CEO, RMG Networks (digital out-of-home media, backed by Kleiner Perkins)",
      "Partner, Kleiner Perkins Caufield & Byers (1999-2012, 13 years)"
    ],
    investmentFocus: ["Consumer Internet", "Enterprise Software", "Future of Work"],
    notableInvestments: [
      { name: "Dollar Shave Club", ticker: null },
      { name: "Bloom Energy", ticker: "BE" },
      { name: "Rent the Runway", ticker: "RENT" }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 4,
    careerTimeline: [
      { year: "1999", event: "Joins Kleiner Perkins Caufield & Byers after operating roles at Gap Inc. and founding CEO of RMG Networks." },
      { year: "2012", event: "Leaves Kleiner Perkins after 13 years to found Cowboy Ventures in Palo Alto, with Kleiner as her anchor investor." },
      { year: "2013", event: "Coins the term 'unicorn' in a November TechCrunch article, 'Welcome to the Unicorn Club,' analyzing billion-dollar startups." },
      { year: "2016", event: "Dollar Shave Club, an early Cowboy investment, is acquired by Unilever for approximately $1 billion." },
      { year: "2018", event: "Co-founds All Raise, a nonprofit accelerating success for women across the venture ecosystem." }
    ],
    biography: "Aileen Lee spent 13 years at Kleiner Perkins, working hands-on with companies from Series A through IPO including Bloom Energy, Rent the Runway, and Trendyol, after earlier operating roles at Gap Inc. and as founding CEO of RMG Networks. She left in 2012 to found Cowboy Ventures in Palo Alto — one of the first venture firms founded by a woman — and the following year coined the term 'unicorn' in a widely-read TechCrunch article that has since become permanent industry vocabulary, though Lee herself has noted the term's imperfection: 'it's an ephemeral word, a point in time.' Her early conviction in Dollar Shave Club, whose founder she described as having 'such a clear brand voice' despite very little money, culminated in Unilever's roughly $1 billion acquisition in 2016. Lee co-founded All Raise in 2018 to accelerate success for women across venture capital, and has been named to the Forbes Midas List, Fortune's Most Powerful Women, and Time's 100 Most Influential People.",
    sources: [
      { label: "Forbes — Aileen Lee", url: "https://www.forbes.com/profile/aileen-lee/" },
      { label: "MIT Technology Review", url: "https://alum.mit.edu/slice/helping-startups-become-unicorns-and-women-become-vcs" }
    ]
  },
  "mark-gorenberg": {
    name: "Mark Gorenberg",
    firm: "Zetta Venture Partners",
    firmSlug: "zetta-venture-partners",
    title: "Founder & Managing Director",
    joinedYear: 2013,
    education: ["BS, MIT (1976)", "MS, Electrical Engineering, University of Minnesota (1979)", "MS, Engineering Management, Stanford University (1984)"],
    previousExperience: [
      "Member, original SPARCstation 1 team, Sun Microsystems",
      "Managing Director, Hummer Winblad Venture Partners (1990-2010, ~20 years)"
    ],
    investmentFocus: ["AI", "Machine Learning", "Enterprise Software", "Developer Tools"],
    notableInvestments: [
      { name: "Domino Data Lab", ticker: null },
      { name: "Domo", ticker: "DOMO" },
      { name: "Omniture", ticker: null }
    ],
    boardSeats: ["Domino Data Lab", "Domo", "Eventboard"],
    ipoCount: 5,
    majorExits: 8,
    careerTimeline: [
      { year: "1976", event: "Earns a BS from MIT, later joining the original SPARCstation 1 team at Sun Microsystems." },
      { year: "1990", event: "Joins Hummer Winblad Venture Partners shortly after its founding by John Hummer and Ann Winblad, investing out of its first fund." },
      { year: "2011", event: "Appointed by President Obama to the President's Council of Advisors on Science and Technology (PCAST)." },
      { year: "2013", event: "Leaves Hummer Winblad after roughly 20 years to found Zetta Venture Partners, the first venture fund dedicated exclusively to AI." },
      { year: "2015", event: "Closes Zetta's first fund at $100 million." }
    ],
    biography: "Mark Gorenberg spent three decades in venture capital before founding Zetta, joining Hummer Winblad Venture Partners in 1990 shortly after its founding and spending roughly 20 years there as Managing Director, serving on the boards of Omniture, AdForce, NetDynamics, and Scopus Technologies through IPOs and acquisitions by Adobe, CMGI, Sun Microsystems, and Siebel respectively. He left in 2013 to found Zetta Venture Partners, deliberately positioning it as the first venture fund investing exclusively in AI-native startups, years before the category became mainstream. Gorenberg brings a genuinely technical foundation to that specialization — he was a member of the original SPARCstation 1 team at Sun Microsystems before moving into venture — and beyond investing, he chairs the MIT Corporation's board of trustees and was appointed by President Obama to the President's Council of Advisors on Science and Technology in 2011.",
    sources: [
      { label: "Wikipedia — Mark Gorenberg", url: "https://en.wikipedia.org/wiki/Mark_Gorenberg" },
      { label: "Zetta Venture Partners — Mark Gorenberg", url: "https://www.zettavp.com/team/mark-gorenberg" }
    ]
  },
  "avidan-ross": {
    name: "Avidan Ross",
    firm: "Root Ventures",
    firmSlug: "root-ventures",
    title: "Founding Partner & Managing Partner",
    joinedYear: 2013,
    education: ["BS, Computer Science, Columbia University"],
    previousExperience: [
      "Embedded Network Application Developer, Excite@Home",
      "Chief Technology Officer, CIM Group ($15B investment firm, industrial internet investing)",
      "Robotics Designer, Food Network (industrial kitchen robotics)"
    ],
    investmentFocus: ["Deep Tech", "Robotics", "Hardware", "IoT"],
    notableInvestments: [
      { name: "Particle", ticker: null },
      { name: "Pivot Bio", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2000s", event: "Works as an embedded network application developer at Excite@Home before becoming CTO of CIM Group, a $15 billion investment firm, overseeing industrial internet investing." },
      { year: "2010s", event: "Designs industrial robotics for the Food Network's kitchens." },
      { year: "2013", event: "Founds Root Ventures in San Francisco, a deep-tech seed fund run by engineers for engineers." },
      { year: "2022", event: "Closes Fund III at $150 million." }
    ],
    biography: "Avidan Ross built a genuinely unusual path into venture capital — an embedded systems engineer at Excite@Home who became CTO of CIM Group, a $15 billion investment firm focused on industrial internet strategy, before literally designing robotics for the Food Network's kitchens. That hands-on engineering credibility, still visible in his hobby of building custom 1,000-degree pizza ovens, shapes Root Ventures' entire identity since he founded it in 2013: a seed fund explicitly run by engineers for engineers, backing startups where significant technical depth is required to launch or where engineers are the primary customer. Ross positions himself less as a financial backer and more as what he calls an engineering sherpa, helping portfolio founders debug hardware roadmaps and navigate early manufacturing decisions most generalist investors can't meaningfully advise on. He closed Root's third fund at $150 million in 2022, backing companies spanning robotics, aerospace, agricultural technology, and IoT.",
    sources: [
      { label: "Crunchbase — Avidan Ross", url: "https://www.crunchbase.com/person/avidan-ross" },
      { label: "Atoms and Bits Interview", url: "https://www.atomsandbits.io/p/interview-with-avidan-ross-founder" }
    ]
  },
  "jordan-jacobs": {
    name: "Jordan Jacobs",
    firm: "Radical Ventures",
    firmSlug: "radical-ventures",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2017,
    education: [],
    previousExperience: [
      "Entertainment Lawyer",
      "Co-Founder, Milq (cultural content discovery platform, 2011)",
      "Co-Founder & Co-CEO, Layer 6 AI (2016, acquired by TD Bank Group)",
      "Chief AI Officer (Business & Strategy), TD Bank Group"
    ],
    investmentFocus: ["AI", "Machine Learning", "Deep Learning"],
    notableInvestments: [
      { name: "Layer 6 AI", ticker: null },
      { name: "BenchSci", ticker: null },
      { name: "Cohere", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "2011", event: "Co-founds Milq, a cultural content discovery platform, with Tomi Poutanen." },
      { year: "2016", event: "Co-founds Layer 6 AI as an AI-focused offshoot of Milq, alongside Poutanen and Maks Volkovs." },
      { year: "2017", event: "Co-founds the Vector Institute for Artificial Intelligence in Toronto with Poutanen and Geoffrey Hinton; co-founds Radical Ventures the same year." },
      { year: "2018", event: "Layer 6 AI is acquired by TD Bank Group in January, roughly 15 months after founding; joins TD as Chief AI Officer." },
      { year: "2019", event: "Leaves TD Bank to run Radical Ventures full-time, launching a $471 million CAD fund." }
    ],
    biography: "Jordan Jacobs came to AI investing through an unusual path — a former entertainment lawyer who co-founded a cultural content platform called Milq in 2011, then spun out an AI-focused offshoot, Layer 6 AI, in 2016 with fellow Milq co-founder Tomi Poutanen and Maks Volkovs, a student of deep learning pioneer Geoffrey Hinton. TD Bank Group acquired Layer 6 just 15 months after its founding, and Jacobs joined as Chief AI Officer before co-founding the Vector Institute for Artificial Intelligence with Poutanen and Hinton, an initiative that became central to Canada's national AI strategy. He left TD in 2019 to run Radical Ventures full-time, building North America's first dedicated AI-focused venture fund, and has since recruited an unusually prominent scientific bench including Fei-Fei Li and Daphne Koller as Scientific Partners. Jacobs sits on the board of the Canadian Institute for Advanced Research, helped author Canada's national AI strategy, and was named one of Toronto's 50 Most Influential People.",
    sources: [
      { label: "Radical Ventures — Jordan Jacobs", url: "https://radical.vc/team/jordan-jacobs/" },
      { label: "The Globe and Mail", url: "https://www.theglobeandmail.com/business/article-radical-ventures-to-launch-350-million-ai-focused-venture-fund/" }
    ]
  },
  "mohamed-siddeek": {
    name: "Mohamed Siddeek",
    firm: "NVentures",
    firmSlug: "nventures",
    title: "Head of NVentures",
    joinedYear: 2021,
    education: [],
    previousExperience: [
      "General Partner, SoftBank Group",
      "Senior roles, KKR",
      "Senior roles, Morgan Stanley"
    ],
    investmentFocus: ["AI Infrastructure", "Robotics", "Digital Biology", "Applied AI"],
    notableInvestments: [
      { name: "Cohere", ticker: null },
      { name: "Skild AI", ticker: null },
      { name: "1X", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 4,
    careerTimeline: [
      { year: "2010s", event: "Builds a career across SoftBank Group, KKR, and Morgan Stanley in senior investment roles." },
      { year: "2021", event: "Becomes head of NVentures, NVIDIA's corporate venture capital arm." },
      { year: "2023", event: "Leads NVIDIA to become one of the most active large-scale AI investors, participating in 35 deals, a nearly sixfold increase from the prior year." },
      { year: "2026", event: "NVentures' portfolio reaches 81 companies including 22 unicorns and 2 IPOs, with 44 new investments in the prior 12 months alone." }
    ],
    biography: "Mohamed Siddeek leads NVentures, NVIDIA's corporate venture capital arm, bringing investment experience from SoftBank Group, KKR, and Morgan Stanley to a fund with a genuinely different mandate than traditional venture capital. Rather than optimizing purely for financial returns, Siddeek has been explicit that NVentures prioritizes companies that use and depend on NVIDIA technology, deploying capital directly off NVIDIA's balance sheet to accelerate the broader AI computing ecosystem the company's hardware powers. Under his leadership, NVIDIA has become one of the most active large-scale AI investors in the world, participating in 35 deals in 2023 alone — a nearly sixfold increase from the prior year — spanning AI infrastructure, robotics, digital biology, and frontier compute, with reported investments exceeding $872 million in non-affiliated companies over a single nine-month period.",
    sources: [
      { label: "Benzinga", url: "https://www.benzinga.com/government/23/12/36190510/whats-going-on-with-nvidia-stock-tuesday" },
      { label: "NVentures", url: "https://www.nventures.ai/" }
    ]
  },
  "thomas-dhalluin": {
    name: "Thomas d'Halluin",
    firm: "Airbus Ventures",
    firmSlug: "airbus-ventures",
    title: "Managing Partner",
    joinedYear: 2015,
    education: ["MS, Mechanical Engineering, McGill University / École des Mines"],
    previousExperience: [
      "Manufacturing, Procurement & Supply Chain roles, Airbus (Europe & China, including 3 years in Shanghai)",
      "Chief of Staff to the CFO, Airbus"
    ],
    investmentFocus: ["Aerospace", "Deep Tech", "AI/Autonomy", "Climate Tech"],
    notableInvestments: [
      { name: "IonQ", ticker: "IONQ" },
      { name: "Rocket Lab", ticker: "RKLB" },
      { name: "Astra", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 4,
    majorExits: 7,
    careerTimeline: [
      { year: "2000s", event: "Builds two decades of aerospace industry experience at Airbus, spanning manufacturing, procurement, supply chain, and finance roles across Europe and China." },
      { year: "2015", event: "Becomes Managing Partner of Airbus Ventures, based in Silicon Valley." },
      { year: "2016", event: "Named a French-American Foundation Young Leader for the United States." },
      { year: "2021", event: "IonQ completes its SPAC merger with dMY Technology Group III in April, becoming the world's first publicly traded pure-play quantum computing hardware and software company." }
    ],
    biography: "Thomas d'Halluin brings two decades of aerospace industry experience to venture capital, having worked across manufacturing, procurement, supply chain, and finance roles at Airbus in both Europe and China, including three years based in Shanghai, before serving as Chief of Staff to Airbus's CFO. As Managing Partner of Airbus Ventures, he runs the fund as a genuinely hybrid model — maintaining independence from Airbus's corporate structure while raising outside capital, combining real aerospace domain insight with financial discipline. That approach helped make Airbus Ventures a key early investor in IonQ, which completed its SPAC merger in 2021 to become the world's first publicly traded pure-play quantum computing company, with d'Halluin personally affirming the firm's continued support through 'this important next chapter.' He focuses on backing founders tackling foundational hardware problems in space infrastructure and flight performance rather than incremental improvements.",
    sources: [
      { label: "Airbus Ventures — Thomas d'Halluin", url: "https://www.airbusventures.vc/team/thomas-d-halluin" },
      { label: "SEC Filing", url: "https://www.sec.gov/Archives/edgar/data/1824920/000119312521109819/d17191d425.htm" }
    ]
  },
  "anand-kamannavar": {
    name: "Anand Kamannavar",
    firm: "Applied Ventures",
    firmSlug: "applied-ventures",
    title: "Founder & Global Head",
    joinedYear: 2006,
    education: [],
    previousExperience: [
      "Engineering & Business Development, Hewlett-Packard server group (held multiple US patents)",
      "Co-Founder, Precision Information Systems (financial data & tools for Ameritrade, New York Life, Intuit)",
      "Atlas Ventures",
      "Arch Development Partners"
    ],
    investmentFocus: ["Semiconductors", "Materials Science", "Deep Tech", "AI"],
    notableInvestments: [
      { name: "Enphase Energy", ticker: "ENPH" },
      { name: "Adesto Technologies", ticker: "IOTS" },
      { name: "Voltaix", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 12,
    careerTimeline: [
      { year: "2000s", event: "Works in engineering and business development at Hewlett-Packard's server group, earning multiple US patents; co-founds Precision Information Systems." },
      { year: "2006", event: "Joins Applied Ventures, focused on semiconductor, energy, materials, and India-based investments." },
      { year: "2010s", event: "Leads more than a dozen venture investments with successful exits including Enphase Energy and Adesto Technologies, both completing NASDAQ IPOs." },
      { year: "2020s", event: "Grows Applied Ventures' portfolio to more than 90 companies across 17-18 countries, managing more than $400 million." }
    ],
    biography: "Anand Kamannavar built his path to venture capital through hands-on engineering and business development at Hewlett-Packard's server group, where he earned multiple US patents, and co-founding Precision Information Systems, a financial data platform serving Ameritrade, New York Life, and Intuit. After stints at Atlas Ventures and Arch Development Partners, he joined Applied Ventures in 2006, eventually rising to Global Head of Applied Materials' venture capital fund. He has led more than a dozen venture investments with successful exits, including NASDAQ listings for Enphase Energy and Adesto Technologies and Voltaix's acquisition by Air Liquide, and now oversees a more than $400 million portfolio spanning 90-plus companies across 17 countries. Kamannavar has described Applied Ventures as deliberately stage-agnostic and 'very active,' reviewing roughly 700 applications a year and selecting just five or six new investments, with a particular focus on advancing Moore's Law through semiconductor, materials science, and deep tech breakthroughs.",
    sources: [
      { label: "Applied Materials — Anand Kamannavar", url: "https://www.appliedmaterials.com/us/en/applied-ventures/av-team/anand-kamannavar.html" },
      { label: "Electronics360", url: "https://electronics360.globalspec.com/article/18506/applied-ventures-applies-investments-around-the-world" }
    ]
  },
  "jacqueline-lesage": {
    name: "Jacqueline LeSage",
    firm: "Munich Re Ventures",
    firmSlug: "munich-re-ventures",
    title: "Founder & Managing General Partner",
    joinedYear: 2015,
    education: [],
    previousExperience: [
      "Corporate venture capital & strategy, The Hartford (~5 years)"
    ],
    investmentFocus: ["Insurtech", "Climate Tech", "Cybersecurity", "IoT"],
    notableInvestments: [
      { name: "Next Insurance", ticker: null },
      { name: "Mnubo", ticker: null },
      { name: "At-Bay", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 12,
    careerTimeline: [
      { year: "2010s", event: "Spends roughly five years building corporate venture capital and strategy expertise at The Hartford." },
      { year: "2015", event: "Founds Munich Re Ventures, backed initially by HSB Fund I." },
      { year: "2019", event: "Mnubo, an early portfolio company, is acquired by AspenTech." },
      { year: "2025", event: "Next Insurance, a Munich Re Ventures portfolio company, is acquired by Munich Re itself for $2.6 billion; named to Global Venturing's Powerlist as one of the top 100 corporate venturing professionals." },
      { year: "2025", event: "Munich Re announces it will wind down the venture unit by mid-2026, shifting portfolio oversight to MEAG, its asset management arm." }
    ],
    biography: "Jacqueline LeSage built roughly five years of corporate venture capital and strategy experience at The Hartford before founding Munich Re Ventures in 2015, telling colleagues she knew that if she ever built a CVC program again, she wanted to do it in reinsurance — and that opportunity arrived when Munich Re began exploring its own venture arm. Over a decade, LeSage grew the fund into one of the most sophisticated corporate venture platforms built by a global reinsurer, deploying approximately $1.2 billion across nearly 100 investments and integrating tightly with Munich Re's underwriting, engineering, and distribution capabilities rather than offering portfolio companies capital alone. That approach produced real outcomes: Mnubo's acquisition by AspenTech, and Next Insurance's $2.6 billion acquisition by Munich Re itself in 2025. Despite that track record and the parent company posting record profits, Munich Re announced in late 2025 that it would wind down the venture unit by mid-2026 amid a leadership transition, folding remaining portfolio oversight into its asset management arm, MEAG.",
    sources: [
      { label: "Global Venturing Powerlist 2025", url: "https://globalventuring.com/corporate/awards/powerlist-2025-jacqueline-lesage/" },
      { label: "Global Venturing — Wind-down coverage", url: "https://globalventuring.com/corporate/services/munich-re-winds-down-1-2bn-vc-arm-after-decade-of-investing/" }
    ]
  },
  "josh-bell": {
    name: "Josh Bell",
    firm: "Dawn Capital",
    firmSlug: "dawn-capital",
    title: "General Partner",
    joinedYear: 2006,
    education: ["BA, Mathematics, Oxford University", "Economics & Game Theory, Cambridge University & Harvard University"],
    previousExperience: [
      "5 years, McKinsey & Company (advising Fortune 500 financial institutions)"
    ],
    investmentFocus: ["Fintech", "Financial Software"],
    notableInvestments: [
      { name: "iZettle", ticker: null },
      { name: "Tink", ticker: null },
      { name: "Mimecast", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 3,
    careerTimeline: [
      { year: "2001", event: "Spends five years at McKinsey & Company advising Fortune 500 financial institutions, after studying maths at Oxford and economics and game theory at Cambridge and Harvard." },
      { year: "2006", event: "Helps found Dawn Capital at age 28, alongside Norman Fiore and Haakon Overli." },
      { year: "2018", event: "Leads Dawn's exit from iZettle, acquired by PayPal for $2.2 billion." },
      { year: "2021", event: "Leads Dawn's exit from Tink, Europe's leading open banking platform, acquired by Visa for approximately $2 billion." }
    ],
    biography: "Josh Bell helped found Dawn Capital in 2006 at just 28 years old, after five years at McKinsey advising Fortune 500 financial institutions and earlier studies in mathematics at Oxford and economics and game theory at Cambridge and Harvard. He has personally been the driving force behind Dawn's two largest fintech outcomes: iZettle, acquired by PayPal for $2.2 billion in 2018, and Tink, acquired by Visa for approximately $2 billion in 2021 — together the second and third largest fintech M&A exits in European history, with Dawn the only investor in both. Bell has described neither outcome as a straightforward trajectory, noting both companies navigated periods that felt existential before becoming category-defining exits, and credits real investing skill not to cheerleading during growth but to recognizing difficult periods for what they are and helping founders steer through them.",
    sources: [
      { label: "Dawn Capital — Josh Bell", url: "https://www.dawncapital.com/team/josh-bell" },
      { label: "GlobeNewswire", url: "https://www.globenewswire.com/en/news-release/2021/07/22/2267257/0/en/Dawn-Capital-raises-120-million-for-second-later-stage-fund-Dawn-Opportunities-Fund-II-bringing-total-raised-over-last-12-months-to-520-million.html" }
    ]
  },
  "stephen-chandler": {
    name: "Stephen Chandler",
    firm: "Notion Capital",
    firmSlug: "notion-capital",
    title: "Managing Partner & Co-Founder",
    joinedYear: 2008,
    education: [],
    previousExperience: [
      "Investment Banker, UBS",
      "Founding Team, Star Internet",
      "Founding Team & CFO/EMEA GM, MessageLabs"
    ],
    investmentFocus: ["SaaS", "Fintech", "Enterprise Software"],
    notableInvestments: [
      { name: "Currencycloud", ticker: null },
      { name: "GoCardless", ticker: null },
      { name: "Funding Circle", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "1990s", event: "Works as an investment banker at UBS before joining the founding team of Star Internet, one of the UK's first ISPs." },
      { year: "2000", event: "Joins the founding team of MessageLabs as CFO and EMEA GM, one of the world's first SaaS companies." },
      { year: "2008", event: "Leads MessageLabs' $700 million acquisition by Symantec in October, amid the Lehman Brothers collapse; co-founds Notion Capital the same year." },
      { year: "2021", event: "Currencycloud, an early Notion investment, is acquired by Visa." }
    ],
    biography: "Stephen Chandler left investment banking at UBS to join the founding team of Star Internet, one of the UK's first ISPs, before helping build MessageLabs as CFO and EMEA GM over a ten-year journey he's described as full of challenges and friendships. He personally led MessageLabs' $700 million acquisition by Symantec in October 2008, closing the deal amid the terrifying market upheaval following Lehman Brothers' collapse, then immediately co-founded Notion Capital with fellow MessageLabs executives Ben White, Jos White, Chris Tottman, and Ian Milbourn, using roughly £20 million of their own capital from the exit. Chandler has since built Notion into a leading European B2B SaaS investor, applying the operational lessons from a decade of building and selling technology companies directly to backing the next generation of European founders, with a portfolio including Currencycloud (acquired by Visa) and GoCardless.",
    sources: [
      { label: "Notion Capital — Stephen Chandler", url: "https://www.notioncapital.com/team/stephen-chandler" },
      { label: "Science|Business", url: "https://sciencebusiness.net/news/70003/After-$695-M-sale-of-MessageLabs,-founders-form-new-fund-to-invest-IT-companies" }
    ]
  },
  "hendrik-brandis": {
    name: "Hendrik Brandis",
    firm: "Earlybird Venture Capital",
    firmSlug: "earlybird-venture-capital",
    title: "Co-Founder & General Partner",
    joinedYear: 1997,
    education: ["Dipl.-Ing. (MSc equivalent), Aerospace Engineering", "PhD, Aerospace Engineering"],
    previousExperience: [
      "Partner, McKinsey & Company (led small and mid-sized company initiatives; supported the creation of McKinsey New Venture)"
    ],
    investmentFocus: ["Deep Tech", "Consumer Internet", "IoT", "Enterprise", "Manufacturing"],
    notableInvestments: [
      { name: "Aiven", ticker: null },
      { name: "Isar Aerospace", ticker: null },
      { name: "Marvel Fusion", ticker: null }
    ],
    boardSeats: ["Marvel Fusion", "Isar Aerospace", "Greenlyte", "Aiven", "Onefootball", "Simscale", "eleQtron"],
    ipoCount: 3,
    majorExits: 6,
    careerTimeline: [
      { year: "1990s", event: "Leads McKinsey's small and mid-sized company initiatives and helps establish McKinsey New Venture." },
      { year: "1997", event: "Co-founds Earlybird Venture Capital in Hamburg with Christian Nagel, Roland Manger, and Rolf Mathies." },
      { year: "2017", event: "Delivery Hero, a portfolio company, completes its IPO." },
      { year: "2019", event: "TeamViewer completes its IPO." },
      { year: "2021", event: "Babylon Health completes a SPAC merger at a roughly $4.2 billion valuation; the company later collapses into administration in 2023 after a troubled period as a public company." }
    ],
    biography: "Hendrik Brandis brought a genuinely technical foundation to venture capital — a PhD in Aerospace Engineering, followed by years leading McKinsey's small and mid-sized company initiatives — before co-founding Earlybird Venture Capital in Hamburg in 1997 with Christian Nagel, Roland Manger, and Rolf Mathies, making it one of Europe's oldest continuously operating venture firms. His current focus sits at the intersection of deep tech and hard science, with board seats at Marvel Fusion, a fusion energy startup, and Isar Aerospace, a European launch vehicle company, alongside enterprise bets like Aiven and eleQtron. Over nearly three decades, Brandis has helped build Earlybird into one of Europe's most established venture platforms, backing companies through IPOs including Delivery Hero and TeamViewer, and has served as an EVCA board member and Chairman of its Venture Capital Platform Council.",
    sources: [
      { label: "Earlybird — Hendrik Brandis", url: "https://earlybird.com/members/dr-hendrik-brandis" },
      { label: "Equilar ExecAtlas", url: "https://people.equilar.com/bio/org/earlybird-venture-capital/4289605" }
    ]
  },
  "fabricio-bloisi": {
    name: "Fabricio Bloisi",
    firm: "Prosus Ventures",
    firmSlug: "prosus-ventures",
    title: "CEO, Prosus (parent company)",
    joinedYear: 2023,
    education: ["BS, Computer Science, State University of Campinas (UNICAMP)", "MBA, Getúlio Vargas Foundation (FGV/EAESP)"],
    previousExperience: [
      "Founder & CEO, Movile (mobile technology firm, founded 1998 at age 21)",
      "Owner & CEO, iFood (bought as a 20-person startup in 2013, grew into Latin America's leading food delivery company)"
    ],
    investmentFocus: ["E-commerce Infrastructure", "Fintech", "AI/ML", "Logistics"],
    notableInvestments: [
      { name: "iFood", ticker: null },
      { name: "PayU", ticker: null }
    ],
    boardSeats: ["iFood (Chairman)"],
    ipoCount: 0,
    majorExits: 1,
    careerTimeline: [
      { year: "1998", event: "Founds Movile at age 21, a mobile technology company in Brazil." },
      { year: "2013", event: "Buys iFood, then a 20-person startup, and begins scaling it into Latin America's leading food delivery platform." },
      { year: "2013", event: "Prosus (then Naspers) first invests in iFood through Movile, entering food delivery with a $2 million investment." },
      { year: "2022", event: "Prosus acquires the final 33% stake in iFood, making it a wholly-owned subsidiary." },
      { year: "2023", event: "Named CEO of Prosus and Naspers, overseeing the group's global technology investment strategy including Prosus Ventures." },
      { year: "2025", event: "Advolve.AI, a Prosus Ventures portfolio company, is acquired by iFood." }
    ],
    biography: "Fabricio Bloisi founded Movile at just 21 years old in 1998, and by 2013 had bought iFood as a 20-person startup, growing it into Latin America's dominant food delivery platform with more than 96 million monthly orders and over 5,000 employees. That same operating pedigree, building a category-defining emerging-markets technology company from near-scratch, led Prosus to name him CEO of the entire group in 2023, overseeing both its portfolio of controlled businesses and Prosus Ventures, its early-stage investment arm backing the next generation of e-commerce, fintech, and AI companies across high-growth markets. Bloisi has been explicit that his food-delivery operating experience directly informs Prosus's broader growth strategy, and under his leadership Prosus Ventures deployed more than $400 million in FY25 across more than 40 new investments.",
    sources: [
      { label: "Reuters — Factbox on Fabricio Bloisi", url: "https://www.aol.com/news/factbox-prosus-naspers-ceo-fabricio-112515447.html" },
      { label: "Prosus Ventures", url: "https://www.prosus.com/prosus-ventures" }
  ]
    },
    "magnus-grimeland": {
    name: "Magnus Grimeland",
    firm: "Antler",
    firmSlug: "antler",
    title: "Founder & CEO",
    joinedYear: 2017,
    education: ["BA, Harvard College"],
    previousExperience: [
      "Norwegian Naval Special Forces",
      "Partner, McKinsey & Company",
      "Co-Founder, Zalora Group (Southeast Asia's first major fashion e-commerce platform, 2013)",
      "COO, Global Fashion Group (after Rocket Internet consolidated Zalora)"
    ],
    investmentFocus: ["Consumer Internet", "Enterprise SaaS", "Fintech", "AI"],
    notableInvestments: [
      { name: "Airalo", ticker: null },
      { name: "Lovable", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2013", event: "Co-founds Zalora, Southeast Asia's first major fashion e-commerce platform, after serving in Norway's Naval Special Forces and consulting at McKinsey." },
      { year: "2016", event: "Becomes COO of Global Fashion Group after Rocket Internet consolidates Zalora into the new entity." },
      { year: "2017", event: "Founds Antler in Singapore with Fridtjof Berge, pioneering a 'Day Zero' investing model that backs founders before they have a team or product." },
      { year: "2018", event: "Runs Antler's first residency program in Singapore." },
      { year: "2024", event: "Antler tops PitchBook's 'Most Active Venture Capital Globally' league table with 443 deals; both Airalo and Lovable reach unicorn status." }
    ],
    biography: "Magnus Grimeland's path to founding Antler ran through Norway's Naval Special Forces, McKinsey consulting, and building Zalora, Southeast Asia's first major fashion e-commerce platform, which became a training ground for a remarkable list of future founders — Gojek's Kevin Aluwi and Nadiem Makarim, StashAway's Michele Ferrario, and ShopBack's founding team all passed through Zalora before starting their own companies. That experience convinced Grimeland that talented people were often stuck in roles that didn't fully use their potential, and he founded Antler in Singapore in 2017 with Fridtjof Berge to back exceptional founders from 'Day Zero' — before they even have a team or a product. That model, offering founders up to $400,000 and access to a global mentor network through residency programs, has made Antler the world's most active early-stage venture firm by deal volume according to PitchBook, backing more than 1,800 startups across 27 countries including unicorns Airalo (eSIM marketplace) and Lovable (Swedish AI coding platform, valued at $6.6 billion).",
    sources: [
      { label: "Antler — About", url: "https://www.antler.co/about" },
      { label: "Fortune", url: "https://fortune.com/2026/05/20/antler-ceo-magnus-grimeland-innovation-global-silicon-valley/" }
    ]
  },
"ajay-chopra": {
    name: "Ajay Chopra",
    firm: "Trinity Ventures",
    firmSlug: "trinity-ventures",
    title: "General Partner",
    joinedYear: 2006,
    education: ["BS, Electronics & Computer Science, Birla Institute of Technology & Science (BITS), Pilani", "MS, Electronics & Computer Science, Stony Brook University"],
    previousExperience: [
      "Systems Architect, Atari Inc. (8-bit computer line)",
      "Engineering Manager, Mindset Corporation",
      "Co-Founder, Chairman & CEO, Pinnacle Systems (1986-2005, grew from his living room into a multibillion-dollar public company)"
    ],
    investmentFocus: ["Consumer Internet", "Enterprise Software", "Digital Health", "Mobility"],
    notableInvestments: [
      { name: "TubeMogul", ticker: null },
      { name: "Fitstar", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 3,
    careerTimeline: [
      { year: "1980s", event: "Works as a systems architect at Atari, then an engineering manager at Mindset Corporation." },
      { year: "1986", event: "Co-founds Pinnacle Systems with Randall Moore and Mirek Jiricka, building it into a global, multibillion-dollar digital video technology company that won an Emmy award and traded on NASDAQ." },
      { year: "2005", event: "Pinnacle Systems is acquired by Avid Technology after nearly two decades as an independent public company." },
      { year: "2006", event: "Joins Trinity Ventures as General Partner." },
      { year: "2016", event: "TubeMogul, a Trinity portfolio company, is acquired by Adobe for approximately $540 million." }
    ],
    biography: "Ajay Chopra co-founded Pinnacle Systems in 1986, growing it literally from his own living room into a global, multibillion-dollar digital video technology company that won an Emmy award and traded on NASDAQ for nearly two decades before its acquisition by Avid Technology. That founder's-eye view of the entire company-building journey — from a two-person operation to a public company — shapes his approach at Trinity Ventures, which he joined as General Partner in 2006, describing himself as 'a VC with an entrepreneur's heart' who empathizes directly with the emotional rollercoaster founders face. He has led Trinity's investments across consumer and enterprise applications, autonomy, mobility, and digital health, with notable exits including TubeMogul's roughly $540 million acquisition by Adobe in 2016 and Fitstar's acquisition by Under Armour.",
    sources: [
      { label: "Trinity Ventures — Ajay Chopra", url: "https://www.trinityventures.com/team/ajay-chopra" },
      { label: "Wikipedia — Pinnacle Systems", url: "https://en.wikipedia.org/wiki/Pinnacle_Systems" }
    ]
  },
"rob-coneybeer": {
    name: "Rob Coneybeer",
    firm: "Shasta Ventures",
    firmSlug: "shasta-ventures",
    title: "Co-Founder & Managing Director",
    joinedYear: 2004,
    education: ["BS, Mechanical Engineering, University of Virginia", "MS, Mechanical Engineering, Georgia Institute of Technology", "MBA, The Wharton School"],
    previousExperience: [
      "Engineer, Astro Space division, Martin Marietta (helped build the first A2100 satellite platform, still in production at Lockheed Martin today)"
    ],
    investmentFocus: ["Hardware", "Robotics", "Aerospace", "Automotive", "Consumer Internet"],
    notableInvestments: [
      { name: "Nest Labs", ticker: null },
      { name: "Spire Global", ticker: "SPIR" },
      { name: "Turo", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 2,
    careerTimeline: [
      { year: "1990s", event: "Works as an engineer in the Astro Space division of Martin Marietta, helping build the first A2100 satellite platform, which remains in production today." },
      { year: "2004", event: "Co-founds Shasta Ventures with Tod Francis and Ravi Mohan in Menlo Park." },
      { year: "2010", event: "Leads Shasta's Series A investment in Nest Labs." },
      { year: "2013", event: "Publicly declares a major bet on hardware startups, arguing Moore's Law-style improvements were making new categories of hardware possible." },
      { year: "2014", event: "Nest Labs is acquired by Google for $3.2 billion in January, a roughly 20x return on Shasta's investment that essentially repaid the firm's entire second fund." }
    ],
    biography: "Rob Coneybeer built his early career as an aerospace engineer at Martin Marietta, helping build the first A2100 satellite platform still in production at Lockheed Martin today, before co-founding Shasta Ventures in 2004 with Tod Francis and Ravi Mohan. A self-described enthusiast for 'anything with motors' — robots, satellites, race cars — Coneybeer personally led Shasta's Series A investment in Nest Labs, a bet that returned roughly 20x when Google acquired the smart thermostat company for $3.2 billion in 2014, almost single-handedly repaying the firm's entire second fund. That conviction that 'hardware is the new software' has anchored Shasta's investing ever since, and Coneybeer has continued backing companies across robotics, aerospace, and autonomous systems including Spire Global, Fetch Robotics, and Vector Launch, in what he describes as a 23-year career in Silicon Valley venture capital.",
    sources: [
      { label: "Robotics Summit & Expo", url: "https://www.roboticssummit.com/speaker/rob-coneybeer/" },
      { label: "TechCrunch", url: "https://techcrunch.com/2016/06/29/shasta-ventures-is-raising-a-300-million-fifth-fund/" }
    ]
  },
"scott-maxwell": {
    name: "Scott Maxwell",
    firm: "OpenView Venture Partners",
    firmSlug: "openview-venture-partners",
    title: "Founder & Managing Partner",
    joinedYear: 2006,
    education: ["BS & MA, University of California, Davis"],
    previousExperience: [
      "Senior VP & Division CFO, Lehman Brothers",
      "Partner & Managing Director of Corporate Development, Putnam Investments (ran alternative asset management program)",
      "Chief Operating Officer, Insight Venture Partners (2000-2006, institutionalized its investment process and value-add program)"
    ],
    investmentFocus: ["Enterprise Software", "SaaS", "Fintech"],
    notableInvestments: [
      { name: "Datadog", ticker: "DDOG" },
      { name: "Expensify", ticker: "EXFY" },
      { name: "Calendly", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 35,
    careerTimeline: [
      { year: "1990s", event: "Works in financial services throughout the decade, including as a Senior VP and division CFO at Lehman Brothers and a Partner at Putnam Investments." },
      { year: "2000", event: "Joins Insight Venture Partners as Chief Operating Officer, institutionalizing its investment process, outbound program, and value-add capabilities." },
      { year: "2001", event: "Begins leading deal work at Insight, ultimately investing in eight of its portfolio companies." },
      { year: "2006", event: "Founds OpenView Venture Partners in Boston, applying his institutionalization playbook to expansion-stage B2B software investing." },
      { year: "2021", event: "Expensify completes its NASDAQ IPO in November at a $1.82 billion market cap; Datadog, another OpenView investment, is independently listed on NASDAQ at a $7.83 billion market cap." }
    ],
    biography: "Scott Maxwell spent the 1990s in financial services, including as a division CFO at Lehman Brothers and a Partner at Putnam Investments running its alternative asset management program, before joining Insight Venture Partners in 2000 as Chief Operating Officer. There he institutionalized the firm's investment process, outbound sourcing program, and value-add capabilities, eventually leading deal work himself across eight portfolio companies. He applied that same institutionalization philosophy when he founded OpenView Venture Partners in 2006, built specifically around the conviction that expansion-stage software companies need genuine operational expertise, not just capital, to scale successfully. Under Maxwell, OpenView built a proprietary 'Expansion Platform' offering hands-on support in pricing, packaging, and go-to-market execution, backing more than 60 companies including Datadog and Expensify through public listings, and the firm has raised $2.4 billion across seven funds since founding.",
    sources: [
      { label: "OpenView — Scott Maxwell", url: "https://openviewpartners.com/people/scott-maxwell/" },
      { label: "Tracxn", url: "https://tracxn.com/d/venture-capital/openview" }
    ]
  },
"brad-feld": {
    name: "Brad Feld",
    firm: "Foundry Group",
    firmSlug: "foundry-group",
    title: "Co-Founder & Managing Director",
    joinedYear: 2006,
    education: ["BS, Management Science, MIT", "MS, Management Science, MIT"],
    previousExperience: [
      "Founder, Feld Technologies (custom software, founded in college, sold 1993)",
      "Co-Founder, Mobius Venture Capital (1996, one of the first internet-focused venture firms)",
      "Co-Founder, Techstars (global startup accelerator)"
    ],
    investmentFocus: ["Enterprise Software", "Consumer Internet", "AI"],
    notableInvestments: [
      { name: "Fitbit", ticker: "FIT" },
      { name: "Zynga", ticker: "ZNGA" },
      { name: "Gnip", ticker: null }
    ],
    boardSeats: ["Path Forward", "Kauffman Fellows", "Defy Ventures"],
    ipoCount: 1,
    majorExits: 3,
    careerTimeline: [
      { year: "1987", event: "Begins investing in and building technology startups, founding Feld Technologies while still in college." },
      { year: "1993", event: "Sells Feld Technologies and relocates to Boulder, Colorado, beginning decades of work building the city's startup ecosystem." },
      { year: "1996", event: "Co-founds Mobius Venture Capital, one of the first venture firms dedicated to internet investments." },
      { year: "2006", event: "Co-founds Foundry Group with Seth Levine, Ryan McIntyre, and Jason Mendelson, alongside Techstars." },
      { year: "2019", event: "Fitbit, an early Foundry investment, is acquired by Google for approximately $2.1 billion." },
      { year: "2024", event: "Foundry Group announces its final fund, Foundry 2022, in January, planning to conclude new investments after deploying it." }
    ],
    biography: "Brad Feld began investing in technology startups in 1987, founding Feld Technologies while still in college and selling it in 1993 before relocating to Boulder, Colorado, where he became a foundational figure in building the city's entrepreneurial ecosystem from near-scratch. After co-founding Mobius Venture Capital in 1996 and Techstars, he co-founded Foundry Group in 2006 with Seth Levine, Ryan McIntyre, and Jason Mendelson — four friends who'd worked together at Mobius and shared frustration with founder-unfriendly, opaque VC practices. That 'radical transparency' philosophy, including every partner publishing their personal email address, backed Fitbit (acquired by Google for $2.1 billion), Zynga (IPO'd at a $7 billion valuation), and Gnip (acquired by Twitter) across more than 200 portfolio companies. Feld coined the widely-cited 'Boulder Thesis' in his book Startup Communities, champions a 'Give First' philosophy of mentorship, and has completed 25 marathons toward a goal of finishing one in all 50 states. Foundry Group announced its final fund in January 2024, choosing a deliberate, planned conclusion after nearly two decades of staying intentionally small and partner-driven.",
    sources: [
      { label: "Wikipedia — Brad Feld", url: "https://en.wikipedia.org/wiki/Brad_Feld" },
      { label: "DevCuration — VC Spotlight: Foundry Group", url: "https://devcuration.substack.com/p/vc-spotlight-foundry-group" }
    ]
  },
"dixon-doll": {
    name: "Dixon Doll",
    firm: "DCM Ventures",
    firmSlug: "dcm-ventures",
    title: "Co-Founder & Partner Emeritus",
    joinedYear: 1996,
    education: ["PhD", "MS, University of Michigan"],
    previousExperience: [
      "Partner, Accel Partners (launched the venture industry's first telecom-focused fund)"
    ],
    investmentFocus: ["Semiconductors", "Networking", "Communications Technology"],
    notableInvestments: [
      { name: "Musical.ly (TikTok)", ticker: null },
      { name: "Bill.com", ticker: "BILL" },
      { name: "SoFi", ticker: "SOFI" }
    ],
    boardSeats: ["Airlinq"],
    ipoCount: 7,
    majorExits: 84,
    careerTimeline: [
      { year: "1980s", event: "Works as a Partner at Accel Partners, launching the venture industry's first telecom-focused fund." },
      { year: "1996", event: "Co-founds Doll Capital Management (later DCM Ventures) with David Chao in Menlo Park." },
      { year: "1999", event: "Leads DCM to become the first Silicon Valley firm to invest in early-stage technology in China." },
      { year: "2017", event: "Musical.ly, an early DCM portfolio company, is acquired by ByteDance and later merged into TikTok." },
      { year: "35+ years", event: "Continues advising and guiding entrepreneurs and investors as Partner Emeritus, following a career spanning more than three and a half decades in venture capital." }
    ],
    biography: "Dixon Doll built his early career at Accel Partners, where he launched the venture capital industry's first telecom-focused fund, before co-founding Doll Capital Management with David Chao in 1996 — a firm that later rebranded to DCM Ventures. Doll and Chao made an early, genuinely contrarian bet that technology company creation wouldn't stay confined to Silicon Valley, leading DCM to become the first American venture firm to invest in early-stage technology companies in China in 1999, years before cross-border investing became conventional wisdom. That geographic conviction produced one of the firm's most culturally significant outcomes: Musical.ly, the short-form video app DCM backed early, which ByteDance acquired in 2017 and later merged into what became TikTok. Over more than 35 years in venture capital, Doll has influenced and guided generations of entrepreneurs and investors, and now serves as Partner Emeritus at DCM, which has grown to more than $4.5 billion under management.",
    sources: [
      { label: "Wikipedia — DCM Ventures", url: "https://en.wikipedia.org/wiki/DCM_Ventures" },
      { label: "Crunchbase — Dixon Doll", url: "https://www.crunchbase.com/person/dixon-doll" }
    ]
  },
"hugo-shong": {
    name: "Hugo Shong",
    firm: "IDG Capital",
    firmSlug: "idg-capital",
    title: "Founding Chairman",
    joinedYear: 1993,
    education: ["BA, Hunan University", "MA, Chinese Academy of Social Sciences", "MS, Boston University College of Communication", "PhD Studies, Fletcher School of Law and Diplomacy"],
    previousExperience: [
      "Factory Worker",
      "Journalist, launched and published 40+ magazines across China and Vietnam (Chinese editions of Cosmopolitan, Harper's Bazaar, National Geographic)"
    ],
    investmentFocus: ["Consumer Internet", "AI", "Enterprise Software", "Fintech"],
    notableInvestments: [
      { name: "Tencent", ticker: "0700.HK" },
      { name: "Baidu", ticker: "BIDU" },
      { name: "Xiaomi", ticker: "1810.HK" }
    ],
    boardSeats: [],
    ipoCount: 15,
    majorExits: 100,
    careerTimeline: [
      { year: "1982", event: "Earns a BA from Hunan University, after working as a factory worker." },
      { year: "1987", event: "Earns an MS from Boston University's College of Communication, then begins PhD studies at the Fletcher School of Law and Diplomacy." },
      { year: "1993", event: "Partners with International Data Group founder Patrick McGovern to launch IDG Capital's China operations, the first foreign-backed venture capital firm to enter the country." },
      { year: "2004", event: "Tencent, an early IDG Capital investment, completes its IPO on the Hong Kong Stock Exchange." },
      { year: "2017", event: "IDG Capital and China Oceanwide Holdings acquire the firm's own former parent company, International Data Group, and its subsidiaries." }
    ],
    biography: "Hugo Shong's path to becoming known as 'the godfather of Chinese venture capital' began as a factory worker, then a journalist who launched more than 40 magazines across China and Vietnam, including Chinese editions of Cosmopolitan and National Geographic. A chance dinner conversation with International Data Group founder Patrick McGovern in the early 1990s led to a legendary pitch — Shong famously argued the size of China's opportunity using a whiteboard comparison to the US population and movie screen count — convincing McGovern to fund what became IDG Capital's China operations in 1993, the first foreign-backed venture capital firm to enter the country. That early, singular access produced a genuinely legendary portfolio: Tencent, Baidu, Xiaomi, Meituan, Pinduoduo, Nio, Ctrip, and SenseTime among more than 1,300 companies backed, with over 100 unicorns and nearly 400 successful exits. In a remarkable turn in 2017, IDG Capital and China Oceanwide Holdings acquired International Data Group itself, the American company that had originally backed Shong's China expansion 24 years earlier.",
    sources: [
      { label: "Wikipedia — Hugo Shong", url: "https://en.wikipedia.org/wiki/Hugo_Shong" },
      { label: "Boston University — Hugo Shong Profile", url: "https://www.bu.edu/articles/2014/hugo-shong-the-producer/" }
    ]
  },
"richard-li-legend": {
    name: "Richard Li",
    firm: "Legend Capital",
    firmSlug: "legend-capital",
    title: "President",
    joinedYear: 2001,
    education: [],
    previousExperience: [],
    investmentFocus: ["Enterprise Software", "Healthcare", "AI", "Consumer"],
    notableInvestments: [
      { name: "Meituan", ticker: "3690.HK" },
      { name: "NIO", ticker: "NIO" },
      { name: "ZTO Express", ticker: "ZTO" }
    ],
    boardSeats: [],
    ipoCount: 10,
    majorExits: 70,
    careerTimeline: [
      { year: "2001", event: "Legend Capital is founded as the venture capital arm of Legend Holdings, the parent company of Lenovo Group." },
      { year: "2023", event: "Named to the Forbes China Venture Capital 100 list, ranking in the top four." },
      { year: "2024", event: "Portfolio companies Aidite and Yonz Technology list on China's ChiNext and Shanghai Stock Exchange respectively; Qunabox Group goes public on the Hong Kong Stock Exchange." }
    ],
    biography: "Richard Li serves as President of Legend Capital, the venture capital and private equity arm of Legend Holdings, the parent company of Lenovo Group. Legend Capital's unique heritage — spinning out of the same conglomerate that built Lenovo into a global technology company — gives the firm deep relationships with entrepreneurs, government officials, and co-investors across China's innovation ecosystem, spanning enterprise software, healthcare, semiconductors, and consumer technology. Under Li's leadership as President, the firm has grown into one of China's most established and successful investors, backing more than 600 companies including Meituan, NIO, ZTO Express, and CATL, with more than $10 billion in committed capital across USD and RMB-denominated funds. Li was ranked in the top four on the Forbes China Venture Capital 100 list in 2023.",
    sources: [
      { label: "Legend Capital — Team", url: "https://www.legendcapitalco.com/c/we.html" },
      { label: "Legend Capital LinkedIn", url: "https://www.linkedin.com/company/legend-capital" }
    ]
  },
"zhang-lei": {
    name: "Zhang Lei",
    firm: "Hillhouse Investment Group",
    firmSlug: "hillhouse-investment-group",
    title: "Founder, Chairman & CEO",
    joinedYear: 2005,
    education: ["BA, Economics, Renmin University of China (1994)", "MBA, Yale School of Management (2002)", "MA, International Relations, Yale University (2002)"],
    previousExperience: [
      "Analyst, Yale Investments Office (under Chief Investment Officer David Swensen)"
    ],
    investmentFocus: ["Consumer Internet", "AI", "Biotech", "Enterprise Software"],
    notableInvestments: [
      { name: "Tencent", ticker: "0700.HK" },
      { name: "JD.com", ticker: "JD" },
      { name: "Baidu", ticker: "BIDU" }
    ],
    boardSeats: [],
    ipoCount: 20,
    majorExits: 50,
    careerTimeline: [
      { year: "1994", event: "Earns a bachelor's degree in economics from Renmin University of China on scholarship, after a childhood spent selling noodles, water, and magazines to support his family." },
      { year: "1999", event: "Takes a class taught by David Swensen, Yale's legendary chief investment officer, who becomes his mentor and later helps him secure Hillhouse's seed capital." },
      { year: "2002", event: "Earns an MBA and MA in international relations from Yale University." },
      { year: "2005", event: "Founds Hillhouse Capital in June with $20 million in seed capital from Yale's own endowment, becoming an early investor in Tencent." },
      { year: "2010", event: "Insists JD.com founder Richard Liu take a $255 million investment instead of the $75 million Liu requested; the stake is worth roughly $3.9 billion four years later at JD.com's IPO." }
    ],
    biography: "Zhang Lei grew up in modest circumstances in Henan province, once earning a total profit of 800 yuan selling noodles, water, and magazines to travelers at train stations as a teenager. A scholarship took him to Renmin University and eventually to Yale, where a class taught by legendary Yale endowment chief investment officer David Swensen changed the course of his life — Zhang translated Swensen's book into Chinese, coining new Mandarin terms for 'endowment' and 'fiduciary' along the way, and Swensen became his lasting mentor. Zhang founded Hillhouse in 2005 with $20 million in seed capital directly from Yale's own endowment, building an early, high-conviction stake in Tencent that the firm still holds today. His defining early bet came in 2010, when JD.com founder Richard Liu asked for a $75 million investment to build out logistics infrastructure competitors thought was too expensive — Zhang told him to take $255 million instead, a stake worth roughly $3.9 billion four years later at JD.com's IPO. Zhang has grown Hillhouse into one of Asia's largest investment platforms, managing more than $100 billion, while remaining a trustee of Yale University and Vice Chairman of Renmin University's board.",
    sources: [
      { label: "Wikipedia — Zhang Lei", url: "https://en.wikipedia.org/wiki/Zhang_Lei_(investor)" },
      { label: "The Wire China", url: "https://www.thewirechina.com/2020/09/27/who-is-hillhouse-capital/" }
    ]
  },
"arnold-snider": {
    name: "Arnold Snider",
    firm: "Deerfield Management",
    firmSlug: "deerfield-management",
    title: "Founder (Retired 2005; d. 2014)",
    joinedYear: 1994,
    education: [],
    previousExperience: [
      "Pharmaceutical Analyst, Kidder Peabody",
      "Managing Director, Tiger Management (under Julian Robertson)"
    ],
    investmentFocus: ["Healthcare", "Biotechnology", "Pharmaceuticals"],
    notableInvestments: [],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "1980s", event: "Works as a pharmaceutical analyst at Kidder Peabody before becoming a Managing Director at Julian Robertson's Tiger Management." },
      { year: "1994", event: "Founds Deerfield Management with $17 million in equity, becoming one of the original 'Tiger Cub' funds spun out of Tiger Management." },
      { year: "2000", event: "James Flynn joins Deerfield, beginning a transition period toward eventual leadership succession." },
      { year: "2005", event: "Formally retires from Deerfield, handing full leadership to James Flynn." },
      { year: "2014", event: "Passes away, leaving behind a firm that had grown into one of the largest dedicated healthcare investment platforms in the world." }
    ],
    biography: "Arnold Snider built his early career as a pharmaceutical analyst at Kidder Peabody before becoming a Managing Director at Julian Robertson's legendary Tiger Management, giving him both deep sector knowledge in healthcare and rigorous hedge-fund investing discipline. He founded Deerfield Management in 1994 with $17 million in equity, making it one of the original 'Tiger Cub' funds started by former Tiger Management employees, and built it specifically around dedicated healthcare and biotechnology investing at a time few generalist funds concentrated that deeply in one sector. James Flynn joined the firm in 2000, and Snider formally retired in 2005, handing full leadership to Flynn. Snider passed away in 2014, having built the foundation for what has grown into one of the world's largest dedicated healthcare investment firms.",
    sources: [
      { label: "Wikipedia — Deerfield Management", url: "https://en.wikipedia.org/wiki/Deerfield_Management" },
      { label: "Institutional Investor", url: "https://www.institutionalinvestor.com/article/b1d7hrkxb9sfnk/Deerfield-Posts-Another-Double-Digit-Gain-in-2018" }
    ]
  },
"alex-macpherson": {
    name: "Alex Macpherson",
    firm: "Octopus Ventures",
    firmSlug: "octopus-ventures",
    title: "Managing Director",
    joinedYear: 2007,
    education: [],
    previousExperience: [
      "Sold personal and business computers after leaving school",
      "Worked in a circus",
      "Derivatives Trader, City of London (11 years)",
      "Founder & CEO, Katalyst (private investor group, 2000-2007, acquired by Octopus)"
    ],
    investmentFocus: ["Deep Tech", "Consumer", "Fintech", "Health"],
    notableInvestments: [
      { name: "Depop", ticker: null },
      { name: "Zoopla", ticker: null },
      { name: "SwiftKey", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 5,
    majorExits: 81,
    careerTimeline: [
      { year: "1990s", event: "Spends 11 years as a derivatives trader in the City of London, after earlier work selling computers and, briefly, working in a circus." },
      { year: "2000", event: "Founds Katalyst, a private investor group making early-stage, startup, and expansion-stage investments." },
      { year: "2007", event: "Leads Katalyst's sale to Octopus in August, joining Octopus Ventures at its formation." },
      { year: "2021", event: "Depop, a portfolio company, is acquired by Etsy for $1.6 billion." }
    ],
    biography: "Alex Macpherson took a genuinely unconventional path into venture capital — selling computers after leaving school, working in a circus, then spending 11 years as a derivatives trader in the City of London before founding his own private investor group, Katalyst, in 2000. He led Katalyst as CEO for seven years, building a track record backing early-stage and expansion-stage companies, until Octopus acquired the business in August 2007, forming what became Octopus Ventures with Macpherson joining as a founding leader. That trading background shaped a distinctive investing philosophy he's described as knowing when 'the first cut is the cheapest' — recognizing early when to cut losses rather than compound them. Under his leadership, Octopus Ventures has grown into one of Europe's most active venture investors, backing more than 380 companies including Zoopla, SwiftKey, Graze.com, and Depop, which Etsy acquired for $1.6 billion in 2021.",
    sources: [
      { label: "Seedcamp — Alex Macpherson", url: "https://seedcamp.com/views/alex-macpherson-managing-director-of-octopus-ventures-on-backing-exceptional-founders/" },
      { label: "Octopus Ventures", url: "https://octopusventures.com" }
    ]
  },
"paul-grossinger": {
    name: "Paul Grossinger",
    firm: "Gaingels",
    firmSlug: "gaingels",
    title: "Co-Founder",
    joinedYear: 2014,
    education: ["BA, Political Science, Johns Hopkins University", "MS, Journalism, Columbia University"],
    previousExperience: [
      "Editor & Partner, L&M Media",
      "Co-Founder, Pervasive Group",
      "Founder, Blue Jay Syndicate",
      "General Partner, A-Level Capital"
    ],
    investmentFocus: ["Diverse Leadership", "Enterprise SaaS", "Marketplaces", "Fintech"],
    notableInvestments: [
      { name: "Databricks", ticker: null },
      { name: "Weights & Biases", ticker: null },
      { name: "Remote", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 0,
    careerTimeline: [
      { year: "2010", event: "Co-founds Pervasive Group, following earlier work as an editor and partner at L&M Media." },
      { year: "2014", event: "Co-founds Gaingels with David Beatty as an angel group for LGBTQIA+ investors backing LGBTQIA+ founders." },
      { year: "2018", event: "Gaingels transitions from an angel group into a formal venture investment firm in January." },
      { year: "2026", event: "Gaingels surpasses $1 billion in AUM across more than 2,500 companies, including 75-plus unicorns." }
    ],
    biography: "Paul Grossinger built an early career in media and entrepreneurship, co-founding Pervasive Group and later Blue Jay Syndicate, before co-founding Gaingels with David Beatty in 2014 as a small angel group of LGBTQIA+ investors backing LGBTQIA+ founders. After investing roughly $4 million between 2015 and 2017, Grossinger and Beatty transformed Gaingels into a formal venture investment firm in 2018, broadening its mandate to co-invest alongside established VCs in oversubscribed rounds while championing diverse leadership across the entire venture chain — founders, executives, board members, and check-writers alike. Under his continued leadership as co-founder, Gaingels has deployed more than $1 billion into over 2,500 companies including 75-plus unicorns such as Databricks, Weights & Biases, and Remote, while running programs like the Diversity Term Sheet Rider and an internal board-recruitment advisory to help portfolio companies build more inclusive leadership.",
    sources: [
      { label: "Gaingels — Who We Are", url: "https://gaingels.com/about/" },
      { label: "BBH — Next Gen Summit", url: "https://www.bbh.com/us/en/insights/capital-partners-insights/next-gen-summit-paul-grossinger-gayatri-sarkar-on-entrepreneurship.html" }
    ]
  },

  "kai-fu-lee": {
    name: "Kai-Fu Lee",
    firm: "Sinovation Ventures",
    firmSlug: "sinovation-ventures",
    title: "Chairman & CEO",
    joinedYear: 2009,
    education: ["BS, Computer Science, Columbia University", "PhD, Computer Science (Artificial Intelligence), Carnegie Mellon University"],
    previousExperience: [
      "Speech Recognition Researcher, Apple (developed Chinese dictation software, 1990-1996)",
      "Executive, Silicon Graphics (SGI)",
      "Founding Director, Microsoft Research China (later Microsoft Research Asia, 1998-2005)",
      "Corporate VP, Microsoft (2002-2005)",
      "President, Google Greater China (2005-2009)"
    ],
    investmentFocus: ["AI", "Robotics", "Edtech"],
    notableInvestments: [
      { name: "Megvii", ticker: null },
      { name: "4Paradigm", ticker: null },
      { name: "Insilico Medicine", ticker: "3696.HK" }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 5,
    careerTimeline: [
      { year: "1988", event: "Earns a PhD in computer science from Carnegie Mellon, developing the SPHINX speech recognition system." },
      { year: "1998", event: "Founds Microsoft Research China, later renamed Microsoft Research Asia, training a generation of AI leaders now at Baidu, Tencent, and Alibaba." },
      { year: "2005", event: "Becomes President of Google Greater China, launching Google.cn and doubling Google China's market share." },
      { year: "2009", event: "Resigns from Google in September and founds Innovation Works (later Sinovation Ventures) days later, with a $115 million debut fund." },
      { year: "2023", event: "Founds 01.AI, a Chinese artificial intelligence company, while continuing to lead Sinovation." }
    ],
    biography: "Kai-Fu Lee built one of the most distinguished technical careers in AI before turning to venture capital — a Carnegie Mellon PhD in computer science, speech recognition work at Apple, founding director of Microsoft Research China (later Microsoft Research Asia, which trained a generation of China's top AI leaders), and finally President of Google Greater China. Days after resigning from Google in 2009, he founded Innovation Works, later rebranded Sinovation Ventures, built specifically to identify and nurture Chinese AI entrepreneurs using his unmatched network spanning Silicon Valley and China. Sinovation was one of the first Chinese venture firms to establish a US presence, and Lee has grown it into a leading AI-focused investment platform managing $3 billion across dual-currency funds and more than 400 portfolio companies. He is the author of the bestselling book 'AI Superpowers' and has more than 50 million social media followers as one of the most recognized voices in global AI discourse.",
    sources: [
      { label: "Wikipedia — Kai-Fu Lee", url: "https://en.wikipedia.org/wiki/Kai-Fu_Lee" },
      { label: "Sinovation Ventures — Team", url: "https://www.sinovationventures.com/team" }
    ]
  },

  "yaron-valler": {
    name: "Yaron Valler",
    firm: "Target Global",
    firmSlug: "target-global",
    title: "Founder & CIO",
    joinedYear: 2015,
    education: [],
    previousExperience: [
      "Chip Design Engineer, Intel (contributed to the second-generation Pentium processor)",
      "Founded and sold several companies",
      "Partner, Hasso Plattner Ventures (from 2010, investing in Berlin's early startup ecosystem)"
    ],
    investmentFocus: ["Fintech", "Mobility", "Marketplaces", "Travel"],
    notableInvestments: [
      { name: "Delivery Hero", ticker: "DHER.DE" },
      { name: "TravelPerk", ticker: null },
      { name: "Auto1 Group", ticker: "AG1.DE" }
    ],
    boardSeats: [],
    ipoCount: 2,
    majorExits: 3,
    careerTimeline: [
      { year: "2000s", event: "Works as a chip design engineer at Intel, contributing to the design of the second-generation Pentium processor, before founding and selling several companies." },
      { year: "2010", event: "Moves to Berlin and joins Hasso Plattner Ventures, investing in the city's still-nascent startup ecosystem." },
      { year: "2015", event: "Co-founds Target Global with Shmuel Chafets, going international with the fund initially based in Berlin." },
      { year: "2017", event: "Delivery Hero, an early Target Global bet, completes its IPO on the Frankfurt Stock Exchange." },
      { year: "2024", event: "TravelPerk, a company Valler led the growth funding for, completes its public debut." }
    ],
    biography: "Yaron Valler brings a genuinely technical foundation to venture capital rare among European investors — an Intel engineer who contributed to the design of the second-generation Pentium processor before founding and selling several of his own companies. He moved to Berlin in 2010 to invest in the city's early startup ecosystem through Hasso Plattner Ventures, and co-founded Target Global with longtime partner Shmuel Chafets in 2015, building a pan-European fund with a specific focus on companies targeting trillion-dollar markets in fintech and mobility. That early conviction produced Delivery Hero's 2017 Frankfurt IPO and continued growth-stage support for TravelPerk through its own public debut, and Valler has helped grow Target Global into a firm managing more than €3 billion with a portfolio spanning Revolut, Auto1, and Rapyd.",
    sources: [
      { label: "EU-Startups — Shmuel Chafets interview", url: "https://www.eu-startups.com/2019/06/be-very-hungry-and-confident-about-your-business-interview-with-shmuel-chafets-general-partner-at-target-global/" },
      { label: "Tagesspiegel", url: "https://digitalpresent.tagesspiegel.de/die-einhornjaeger-vom-schinkelplatz" }
    ]
  },

  "gary-rieschel": {
    name: "Gary Rieschel",
    firm: "Qiming Venture Partners",
    firmSlug: "qiming-venture-partners",
    title: "Founding Managing Partner",
    joinedYear: 2006,
    education: [],
    previousExperience: [
      "Executive, SoftBank"
    ],
    investmentFocus: ["Enterprise Software", "AI", "Healthcare"],
    notableInvestments: [
      { name: "Xiaomi", ticker: "1810.HK" },
      { name: "Bilibili", ticker: "BILI" },
      { name: "Zhihu", ticker: "ZH" }
    ],
    boardSeats: [],
    ipoCount: 15,
    majorExits: 50,
    careerTimeline: [
      { year: "1990s", event: "Builds an investing career at SoftBank before turning to China-focused venture capital." },
      { year: "2006", event: "Co-founds Qiming Venture Partners with Duane Kuang in Shanghai." },
      { year: "2017", event: "Co-founds Qiming U.S. with ex-pharma executive Mark McDade, launching the firm's first independent US-based fund." },
      { year: "2022", event: "Qiming raises $2.4 billion from US institutional investors for its eighth dollar fund." }
    ],
    biography: "Gary Rieschel came to China-focused venture capital from SoftBank, co-founding Qiming Venture Partners with Duane Kuang, a former Intel Capital investor, in Shanghai in 2006. The two built one of China's most consistently successful venture firms over the following two decades, backing more than 480 companies with over 70 reaching unicorn status and more than 180 completing IPOs or acquisitions, including Xiaomi, Meituan, Bilibili, and Zhihu. Rieschel later co-founded Qiming U.S. with Mark McDade in 2017, extending the firm's model into an independent US dollar fund, and has remained a Founding Managing Partner across both entities as Qiming grew to $9.5 billion in assets under management — backed by longtime institutional partners including Princeton, Duke, MIT, and NYU.",
    sources: [
      { label: "The Wire China — Who is Qiming Venture Partners?", url: "https://www.thewirechina.com/2022/04/10/who-is-qiming-venture-partners/" },
      { label: "Wikipedia — Qiming Venture Partners", url: "https://en.wikipedia.org/wiki/Qiming_Venture_Partners" }
    ]
  },

  "annie-lamont": {
    name: "Annie Lamont",
    firm: "Oak HC/FT",
    firmSlug: "oak-hc-ft",
    title: "Co-Founder & Managing Partner",
    joinedYear: 2014,
    education: ["Stanford University"],
    previousExperience: [
      "Managing Partner, Oak Investment Partners (28 years, led healthcare & fintech practices)"
    ],
    investmentFocus: ["Healthcare", "Fintech"],
    notableInvestments: [
      { name: "Oscar Health", ticker: "OSCR" },
      { name: "athenahealth", ticker: null },
      { name: "One Medical", ticker: null }
    ],
    boardSeats: ["HCA Healthcare"],
    ipoCount: 4,
    majorExits: 8,
    careerTimeline: [
      { year: "1986", event: "Begins a 28-year career at Oak Investment Partners, eventually leading its healthcare and fintech practices as Managing Partner." },
      { year: "2014", event: "Co-founds Oak HC/FT with Andrew Adams and Patricia Kemp in Greenwich, Connecticut." },
      { year: "2019", event: "Closes an oversubscribed $800 million Fund III, five years after founding." },
      { year: "2023", event: "Oak HC/FT is named one of the ten best-performing venture capital firms in the world." }
    ],
    biography: "Annie Lamont spent 28 years at Oak Investment Partners, rising to Managing Partner and leading its healthcare and fintech practices, before co-founding Oak HC/FT in 2014 with Andrew Adams and Patricia Kemp to apply decades of combined experience exclusively to those two multi-trillion-dollar markets. That singular focus, rare among generalist growth-equity firms, produced early bets on athenahealth, One Medical, Devoted Health, and Oscar Health, and Lamont has been recognized on the Forbes Midas List, Modern Healthcare's 100 Most Influential People in Healthcare, and Institutional Investor's FinTech Finance 40. She serves on the board of HCA Healthcare and previously served on Stanford's Board of Trustees, and was the inaugural recipient of the NVCA's award for Excellence in Healthcare Innovation.",
    sources: [
      { label: "Oak HC/FT — Annie Lamont", url: "https://www.oakhcft.com/team-members/annie-lamont" },
      { label: "AcademyHealth", url: "https://academyhealth.org/about/people/annie-lamont-0" }
    ]
  },

  "ciaran-oleary": {
    name: "Ciarán O'Leary",
    firm: "BlueYard Capital",
    firmSlug: "blueyard-capital",
    title: "General Partner & Co-Founder",
    joinedYear: 2016,
    education: ["HHL Leipzig Graduate School of Management"],
    previousExperience: [
      "Partner, Earlybird Venture Capital"
    ],
    investmentFocus: ["Crypto/Web3", "Deep Tech", "Defense Tech", "Biotechnology"],
    notableInvestments: [
      { name: "Protocol Labs (Filecoin)", ticker: null },
      { name: "Wunderlist", ticker: null },
      { name: "Peak Games", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 0,
    majorExits: 2,
    careerTimeline: [
      { year: "2010s", event: "Works as a Partner at Earlybird Venture Capital in Berlin, where he meets future BlueYard co-founder Jason Whitmire and backs Wunderlist (acquired by Microsoft) and Peak Games (acquired by Zynga for $1.8 billion)." },
      { year: "2016", event: "Co-founds BlueYard Capital with Jason Whitmire in Berlin, closing a €111 million debut fund." },
      { year: "2017", event: "Leads BlueYard's seed investment in Protocol Labs, the company behind Filecoin." },
      { year: "2019", event: "Raises a €105 million second fund, BlueYard 2." }
    ],
    biography: "Ciarán O'Leary is the son of former IDA Ireland chief Barry O'Leary, giving him an unusually direct family-level view of how global technology investment decisions get made. He built his early venture career as a Partner at Earlybird Venture Capital in Berlin, where he backed Wunderlist (later acquired by Microsoft) and Peak Games (sold to Zynga for $1.8 billion) alongside future BlueYard co-founder Jason Whitmire. The two broke off to found BlueYard in 2016, organizing the firm's entire investment thesis around three forces — decentralization of markets, democratization of capabilities, and liberation of data — deliberately backing companies addressing what O'Leary calls civilization-scale problems years before they reach consensus with other investors. That conviction produced BlueYard's seed investment in Protocol Labs, the company behind Filecoin, and the firm's debut fund generated a 76% gross IRR and 3.4x DPI.",
    sources: [
      { label: "VC Sheet — Ciarán O'Leary", url: "https://www.vcsheet.com/who/ciaran-o-leary" },
      { label: "Newcomer", url: "https://www.newcomer.co/p/exclusive-blueyard-capital-returns" }
    ]
  },

  "dror-berman": {
    name: "Dror Berman",
    firm: "Innovation Endeavors",
    firmSlug: "innovation-endeavors",
    title: "Founding Partner",
    joinedYear: 2010,
    education: ["BS, Computer Science, Ben-Gurion University", "MBA, Stanford Graduate School of Business"],
    previousExperience: [
      "Team Leader, R&D, NICE Systems (NASDAQ: NICE)"
    ],
    investmentFocus: ["AI", "Space", "Agriculture", "Biotechnology"],
    notableInvestments: [
      { name: "Uber", ticker: null },
      { name: "SoFi", ticker: "SOFI" },
      { name: "Astra", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 3,
    majorExits: 6,
    careerTimeline: [
      { year: "2000s", event: "Leads an R&D team at NICE Systems before moving into venture capital." },
      { year: "2010", event: "Co-founds Innovation Endeavors with Eric Schmidt, Scott Brady, and Rick Scanlon in Palo Alto." },
      { year: "2019", event: "Announces Innovation Endeavors III, a $333 million fund, developing the firm's 'Super Evolution' thesis." },
      { year: "2024", event: "Closes Fund V at $630 million, with the firm having invested in 115 companies and 34 exits over 14 years." }
    ],
    biography: "Dror Berman led an R&D team at NICE Systems before earning an MBA from Stanford and co-founding Innovation Endeavors with Eric Schmidt in 2010. Berman developed the firm's core 'Super Evolution' thesis — the idea that converging advances in data, computing, and engineering are letting startups re-architect deeply physical industries like agriculture, space, and manufacturing in years rather than decades — and has personally led the firm's investments in Uber, SoFi, Planet, Zymergen, Freenome, and Blue River Technologies, the last of which was acquired by John Deere. He created Curiosity Camp, an invite-only unconference that strips away titles so participants engage by ideas rather than status, and continues to run Innovation Endeavors as a small, deeply technical team investing at the intersection of science and company-building, having grown the firm to $630 million in its fifth fund alone.",
    sources: [
      { label: "VC Sheet — Dror Berman", url: "https://www.vcsheet.com/who/dror-berman" },
      { label: "TechCrunch", url: "https://techcrunch.com/2024/01/25/innovation-endeavors-630m-fund-science-technology/" }
    ]
  },

  "tim-draper": {
    name: "Tim Draper",
    firm: "Draper Associates",
    firmSlug: "draper-associates",
    title: "Founder & Managing Partner",
    joinedYear: 1985,
    education: ["BS, Electrical Engineering, Stanford University (1980)", "MBA, Harvard Business School (1984)"],
    previousExperience: [
      "Alex. Brown & Sons (brief stint before founding Draper Associates)"
    ],
    investmentFocus: ["Crypto/Web3", "AI", "Space", "Fintech"],
    notableInvestments: [
      { name: "Tesla", ticker: "TSLA" },
      { name: "Baidu", ticker: "BIDU" },
      { name: "Coinbase", ticker: "COIN" }
    ],
    boardSeats: [],
    ipoCount: 8,
    majorExits: 15,
    careerTimeline: [
      { year: "1985", event: "Founds Draper Associates in July, borrowing $6 million from the US Small Business Administration's SBIC program." },
      { year: "1996", event: "Backs Hotmail, coining the term 'viral marketing' through its now-iconic email footer strategy." },
      { year: "1997", event: "The firm becomes known as Draper Fisher Jurvetson (DFJ) after John Fisher and Steve Jurvetson join." },
      { year: "2010", event: "Backs Tesla's Series D through Draper Associates, having already invested via DFJ's Series C in 2006." },
      { year: "2014", event: "Purchases nearly 30,000 bitcoin for roughly $19 million at a US Marshals auction, becoming one of Bitcoin's most prominent public advocates." }
    ],
    biography: "Tim Draper is a fourth-generation venture capitalist — his father Bill Draper and grandfather William H. Draper Jr. were both pioneering Silicon Valley investors — who founded Draper Associates in 1985 after graduating from Stanford with an electrical engineering degree and earning an MBA from Harvard. He grew the firm into Draper Fisher Jurvetson after John Fisher and Steve Jurvetson joined, backing Hotmail (where he pioneered viral marketing), Skype, Baidu, and Tesla, then relaunched the original Draper Associates in 2008 to focus on early-stage and frontier technology. Draper became one of Bitcoin's most visible advocates after purchasing nearly 30,000 bitcoin at a US Marshals auction in 2014, and founded Draper University in 2012, a live-in entrepreneurship bootcamp that has graduated more than 6,000 alumni from 104 countries. The firm now manages roughly $2 billion and has backed more than 60 unicorns since 1985.",
    sources: [
      { label: "Draper.vc — Tim Draper", url: "https://www.draper.vc/tim-draper" },
      { label: "Draper.vc — History", url: "https://www.draper.vc/history" }
    ]
  },

  "david-wei": {
    name: "David Wei",
    firm: "Vision Knight Capital",
    firmSlug: "vision-knight-capital",
    title: "Founding Partner & Chairman",
    joinedYear: 2011,
    education: [],
    previousExperience: [
      "Corporate Finance Manager, Coopers & Lybrand",
      "Head of Investment Banking, Orient Securities",
      "CFO, then CEO, B&Q China (2000-2006, grew it into China's largest home improvement retailer)",
      "CEO, Alibaba.com (led its 2007 listing on the Hong Kong Stock Exchange)"
    ],
    investmentFocus: ["Consumer", "E-Commerce", "Retail Brands"],
    notableInvestments: [
      { name: "POP MART", ticker: "1993.HK" },
      { name: "Anker", ticker: null },
      { name: "Smoore", ticker: null }
    ],
    boardSeats: [],
    ipoCount: 1,
    majorExits: 1,
    careerTimeline: [
      { year: "2000", event: "Becomes CFO, then CEO, of B&Q China, growing it into the country's largest home improvement retailer." },
      { year: "2006", event: "Becomes CEO of Alibaba.com." },
      { year: "2007", event: "Leads Alibaba.com's listing on the Hong Kong Stock Exchange." },
      { year: "2011", event: "Founds Vision Knight Capital with Daming Zhu in Shanghai." },
      { year: "2020", event: "POP MART, a company Vision Knight co-founded and invested in, completes its Hong Kong IPO." },
      { year: "2025", event: "Raises more than $560 million in new funds, pushing total AUM to nearly $2.8 billion." }
    ],
    biography: "David Wei built more than two decades of real operating experience in China before turning to venture capital — corporate finance at Coopers & Lybrand, investment banking at Orient Securities, then CFO and later CEO of B&Q China, where he grew the company into the country's largest home improvement retailer. He became CEO of Alibaba.com in 2006 and personally led its 2007 listing on the Hong Kong Stock Exchange, giving him a rare combination of consumer retail and public-markets experience. He founded Vision Knight Capital with Daming Zhu in 2011, applying that operating background to bold growth-stage bets in China's consumer and digital retail sectors, most notably co-founding and backing POP MART, whose 2020 Hong Kong IPO was the largest internet offering in the market that year. Wei has grown Vision Knight into a firm managing nearly $2.8 billion across USD and RMB funds, with a portfolio spanning POP MART, Anker, and Smoore.",
    sources: [
      { label: "Vision Knight Capital — About Us", url: "http://www.vkc-partners.com/htmlsen/about.php" },
      { label: "DealStreetAsia", url: "https://www.dealstreetasia.com/stories/vision-knight-new-funds-465981" }
    ]
  },
};
