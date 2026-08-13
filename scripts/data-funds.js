/* ============================================================
   DATA-FUNDS.JS  —  structured fund history

   Promoted from the free-text fund events in data-firms.js
   timeline[] plus a sourced research pass, so the alerts engine
   can compute on fund sizes and vintages without parsing prose.

   FIELD NOTES
     sizeUSD   integer US dollars, or null. Set ONLY when a USD
               figure was actually published. It is never a
               conversion performed here.
     originalCurrency / sizeOriginal
               set when the fund is denominated in something other
               than USD. Sinovation's RMB Fund III has both (a
               published USD equivalent AND the CNY original);
               BDC Capital has sizeUSD null because no sourced USD
               figure exists for its CAD vehicles.
     complete  false means the firm has known funds that are not
               recorded here. Any metric that counts or totals a
               firm's funds must respect this flag.
     combinedVehicles
               true where a firm closed two vehicles together and
               disclosed only a combined total, so the record
               covers more than one fund.
     confidence
               "low" means a single secondary aggregator with no
               primary source found.
   ============================================================ */

const FIRM_FUNDS = {
  "softbank-vision-fund": {
    complete: false,
    note: "Separate LatAm funds exist but were not sized in research.",
    funds: [
      {
        name: "SoftBank Vision Fund 1",
        vintageYear: 2017,
        announcedDate: "2017-05",
        sizeUSD: 98600000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://bytebridge.medium.com/softbank-vision-fund-a-comprehensive-overview-76972710c52e"
      },
      {
        name: "SoftBank Vision Fund 2",
        vintageYear: 2019,
        announcedDate: null,
        sizeUSD: 56000000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "medium",
        source: "https://bytebridge.medium.com/softbank-vision-fund-a-comprehensive-overview-76972710c52e"
      }
    ]
  },
  "base10-partners": {
    complete: true,
    note: "The 2026 $850M close covers two vehicles; only the combined total was disclosed.",
    funds: [
      {
        name: "Fund I",
        vintageYear: 2018,
        announcedDate: null,
        sizeUSD: 137000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.forbes.com/sites/kenrickcai/2022/04/05/base10-becomes-first-black-led-vc-firm-to-cross-1-billion-aum-with-new-460-million-fund-iii/"
      },
      {
        name: "Fund II",
        vintageYear: 2020,
        announcedDate: null,
        sizeUSD: 250000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.forbes.com/sites/kenrickcai/2022/04/05/base10-becomes-first-black-led-vc-firm-to-cross-1-billion-aum-with-new-460-million-fund-iii/"
      },
      {
        name: "Advancement Initiative Growth Fund",
        vintageYear: 2021,
        announcedDate: null,
        sizeUSD: 300000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://news.crunchbase.com/business/base10-partners-raises-460m-fund/"
      },
      {
        name: "Fund III",
        vintageYear: 2022,
        announcedDate: "2022-04",
        sizeUSD: 460000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.forbes.com/sites/kenrickcai/2022/04/05/base10-becomes-first-black-led-vc-firm-to-cross-1-billion-aum-with-new-460-million-fund-iii/"
      },
      {
        name: "Fund IV and Series B Fund (combined close)",
        vintageYear: 2026,
        announcedDate: "2026-06",
        sizeUSD: 850000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: true,
        confidence: "high",
        source: "https://www.prnewswire.com/news-releases/base10-partners-hits-2-6b-aum-closes-850m-to-back-the-next-wave-of-real-economy-ai-302797885.html"
      }
    ]
  },
  "bond-capital": {
    complete: true,
    funds: [
      {
        name: "Fund I",
        vintageYear: 2019,
        announcedDate: "2019-04",
        sizeUSD: 1250000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.cnbc.com/2019/04/25/mary-meeker-one-of-the-most-followed-technology-forecasters-raises-1point25-billion-for-a-new-fund.html"
      },
      {
        name: "Fund II",
        vintageYear: 2021,
        announcedDate: "2021-03",
        sizeUSD: 2000000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://techcrunch.com/2021/03/03/mary-meeker-bond-2-billion/"
      },
      {
        name: "Fund III",
        vintageYear: 2022,
        announcedDate: null,
        sizeUSD: 2500000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "low",
        source: "https://vc-mapping.gilion.com/vc-firms/bond"
      }
    ]
  },
  "paradigm": {
    complete: true,
    note: "Fund I was structured as an open-ended vehicle rather than a closed-end fund.",
    funds: [
      {
        name: "Fund I",
        vintageYear: 2018,
        announcedDate: null,
        sizeUSD: 400000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "medium",
        source: "https://colossus.com/article/paradigm-shifts-matt-huang/"
      },
      {
        name: "Fund II",
        vintageYear: 2021,
        announcedDate: "2021-11",
        sizeUSD: 2500000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://techcrunch.com/2021/11/15/crypto-vc-firm-paradigm-debuts-monster-2-5-billion-fund/"
      },
      {
        name: "Fund III",
        vintageYear: 2024,
        announcedDate: "2024-06",
        sizeUSD: 850000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://cryptonews.com/news/paradigm-launches-850m-third-venture-fund-for-early-stage-crypto-projects/"
      },
      {
        name: "Fund IV",
        vintageYear: 2026,
        announcedDate: "2026-07",
        sizeUSD: 1200000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "medium",
        source: "https://angelinvestorsnetwork.com/venture-capital/paradigm-1-2-billion-crypto-vc-fund-technical-frontier"
      }
    ]
  },
  "hustle-fund": {
    complete: true,
    funds: [
      {
        name: "Fund I",
        vintageYear: 2018,
        announcedDate: "2018-09",
        sizeUSD: 11500000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://en.wikipedia.org/wiki/Hustle_Fund"
      },
      {
        name: "Fund II",
        vintageYear: 2020,
        announcedDate: null,
        sizeUSD: 33600000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.hustlefund.vc/faq"
      },
      {
        name: "Fund III",
        vintageYear: 2022,
        announcedDate: "2022-09",
        sizeUSD: 46100000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://techcrunch.com/2022/09/29/hustle-funds-side-hustle-just-helped-it-close-a-third-fund/"
      }
    ]
  },
  "addition": {
    complete: true,
    funds: [
      {
        name: "Addition One",
        vintageYear: 2020,
        announcedDate: "2020-06",
        sizeUSD: 1300000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "medium",
        source: "https://en.wikipedia.org/wiki/Addition_(investment_firm)"
      },
      {
        name: "Addition Two",
        vintageYear: 2020,
        announcedDate: "2020-10",
        sizeUSD: 1400000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://techcrunch.com/2020/10/19/lee-fixel-burnishes-his-reputation-raising-his-second-massive-fund-in-2020/"
      },
      {
        name: "Addition Three",
        vintageYear: 2021,
        announcedDate: null,
        sizeUSD: 1400000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "low",
        source: "https://vc-mapping.gilion.com/vc-firms/addition"
      },
      {
        name: "Addition Four",
        vintageYear: 2022,
        announcedDate: null,
        sizeUSD: 1500000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "low",
        source: "https://vc-mapping.gilion.com/vc-firms/addition"
      }
    ]
  },
  "a16z": {
    complete: false,
    note: "Partial: roughly 12 of a reported 28+ vehicles. Flagship Funds I-VII, Crypto I-III and the 2023 sector vintages are not recorded.",
    funds: [
      {
        name: "Fund VIII",
        vintageYear: 2022,
        announcedDate: "2022-01",
        sizeUSD: 2500000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://pitchbook.com/profiles/fund/20708-20F"
      },
      {
        name: "Crypto Fund IV",
        vintageYear: 2022,
        announcedDate: "2022-05",
        sizeUSD: 4500000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.calcalistech.com/ctechnews/article/yyhqr933d"
      },
      {
        name: "Growth (2024 vintage)",
        vintageYear: 2024,
        announcedDate: "2024-04",
        sizeUSD: 3500000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.inc.com/sam-blum/andreessen-horowitz-hails-new-era-in-vc-with-fresh-7-billion-fund.html"
      },
      {
        name: "Infrastructure/AI (2024 vintage)",
        vintageYear: 2024,
        announcedDate: "2024-04",
        sizeUSD: 1250000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.inc.com/sam-blum/andreessen-horowitz-hails-new-era-in-vc-with-fresh-7-billion-fund.html"
      },
      {
        name: "Apps (2024 vintage)",
        vintageYear: 2024,
        announcedDate: "2024-04",
        sizeUSD: 1000000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.inc.com/sam-blum/andreessen-horowitz-hails-new-era-in-vc-with-fresh-7-billion-fund.html"
      },
      {
        name: "American Dynamism (2024 vintage)",
        vintageYear: 2024,
        announcedDate: "2024-04",
        sizeUSD: 600000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.inc.com/sam-blum/andreessen-horowitz-hails-new-era-in-vc-with-fresh-7-billion-fund.html"
      },
      {
        name: "Games Fund (2024 vintage)",
        vintageYear: 2024,
        announcedDate: "2024-04",
        sizeUSD: 600000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.inc.com/sam-blum/andreessen-horowitz-hails-new-era-in-vc-with-fresh-7-billion-fund.html"
      },
      {
        name: "Fund IX",
        vintageYear: 2024,
        announcedDate: "2024-05",
        sizeUSD: 1250000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://pitchbook.com/profiles/fund/24659-47F"
      },
      {
        name: "Growth (2026 vintage)",
        vintageYear: 2026,
        announcedDate: "2026-01",
        sizeUSD: 6750000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "low",
        source: "https://www.siliconreport.com/a16z-ai-portfolio-by-the-numbers-eb24b3f6"
      },
      {
        name: "Apps (2026 vintage)",
        vintageYear: 2026,
        announcedDate: "2026-01",
        sizeUSD: 1700000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "low",
        source: "https://www.siliconreport.com/a16z-ai-portfolio-by-the-numbers-eb24b3f6"
      },
      {
        name: "Infrastructure (2026 vintage)",
        vintageYear: 2026,
        announcedDate: "2026-01",
        sizeUSD: 1700000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "low",
        source: "https://www.siliconreport.com/a16z-ai-portfolio-by-the-numbers-eb24b3f6"
      },
      {
        name: "American Dynamism (2026 vintage)",
        vintageYear: 2026,
        announcedDate: "2026-01",
        sizeUSD: 1176000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "low",
        source: "https://www.siliconreport.com/a16z-ai-portfolio-by-the-numbers-eb24b3f6"
      }
    ]
  },
  "nea": {
    complete: false,
    note: "NEA 2-14, 17 and 19 are known to exist but were not sized.",
    funds: [
      {
        name: "NEA I",
        vintageYear: 1978,
        announcedDate: null,
        sizeUSD: 16000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://pitchbook.com/news/articles/nea-makes-history-with-33b-fund"
      },
      {
        name: "NEA 15",
        vintageYear: 2015,
        announcedDate: "2015-04",
        sizeUSD: 2800000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://techcrunch.com/2015/04/15/nea-raises-north-of-3b-for-its-new-fund"
      },
      {
        name: "NEA 15 Opportunity Fund",
        vintageYear: 2015,
        announcedDate: "2015-04",
        sizeUSD: 350000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://techcrunch.com/2015/04/15/nea-raises-north-of-3b-for-its-new-fund"
      },
      {
        name: "NEA 16",
        vintageYear: 2017,
        announcedDate: null,
        sizeUSD: 3300000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://pitchbook.com/news/articles/nea-makes-history-with-33b-fund"
      },
      {
        name: "NEA 18 and NEA 18 VGE (combined close)",
        vintageYear: 2023,
        announcedDate: "2023-01",
        sizeUSD: 6200000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: true,
        confidence: "high",
        source: "https://www.prnewswire.com/news-releases/nea-closes-on-two-funds-totaling-6-2-billion-301731367.html"
      }
    ]
  },
  "bdc-capital": {
    complete: false,
    note: "Venture arm of a Canadian Crown corporation. Figures are CAD; sizeUSD is deliberately null because no sourced conversion was available.",
    funds: [
      {
        name: "Growth Equity Partners Fund III",
        vintageYear: 2024,
        announcedDate: null,
        sizeUSD: null,
        originalCurrency: "CAD",
        sizeOriginal: 300000000,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://betakit.com/bdc-capital-targets-late-stage-tech-companies-with-nearly-1-billion-in-new-fund-commitments/"
      },
      {
        name: "Growth Venture Fund (additional commitment)",
        vintageYear: 2025,
        announcedDate: "2025-02",
        sizeUSD: null,
        originalCurrency: "CAD",
        sizeOriginal: 500000000,
        status: "closed",
        vehicleType: "evergreen",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.newswire.ca/news-releases/bdc-to-commit-close-to-1-billion-to-spur-economic-growth-in-canada-828073589.html"
      },
      {
        name: "Growth Equity Partners (additional commitment)",
        vintageYear: 2025,
        announcedDate: "2025-02",
        sizeUSD: null,
        originalCurrency: "CAD",
        sizeOriginal: 450000000,
        status: "closed",
        vehicleType: "evergreen",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.newswire.ca/news-releases/bdc-to-commit-close-to-1-billion-to-spur-economic-growth-in-canada-828073589.html"
      }
    ]
  },
  "sinovation-ventures": {
    complete: true,
    funds: [
      {
        name: "Sinovation Fund I",
        vintageYear: 2011,
        announcedDate: null,
        sizeUSD: 180000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://en.wikipedia.org/wiki/Sinovation_Ventures"
      },
      {
        name: "Sinovation Fund II",
        vintageYear: 2012,
        announcedDate: null,
        sizeUSD: 275000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://en.wikipedia.org/wiki/Sinovation_Ventures"
      },
      {
        name: "RMB Fund I",
        vintageYear: 2012,
        announcedDate: null,
        sizeUSD: 48500000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://en.wikipedia.org/wiki/Sinovation_Ventures"
      },
      {
        name: "Sinovation Fund III",
        vintageYear: 2016,
        announcedDate: null,
        sizeUSD: 207000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://en.wikipedia.org/wiki/Sinovation_Ventures"
      },
      {
        name: "RMB Fund II",
        vintageYear: 2016,
        announcedDate: null,
        sizeUSD: 380000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://en.wikipedia.org/wiki/Sinovation_Ventures"
      },
      {
        name: "Sinovation Fund IV",
        vintageYear: 2018,
        announcedDate: "2018-04",
        sizeUSD: 500000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://nai500.com/blog/2018/04/chinas-sinovation-ventures-closes-new-fund-at-500-million/"
      },
      {
        name: "Artificial Intelligence Fund",
        vintageYear: 2018,
        announcedDate: "2018-05",
        sizeUSD: 391000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://en.wikipedia.org/wiki/Sinovation_Ventures"
      },
      {
        name: "RMB Fund III",
        vintageYear: 2019,
        announcedDate: null,
        sizeUSD: 361000000,
        originalCurrency: "CNY",
        sizeOriginal: 2500000000,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://en.wikipedia.org/wiki/Sinovation_Ventures"
      },
      {
        name: "Sinovation Fund V",
        vintageYear: 2022,
        announcedDate: null,
        sizeUSD: 203000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://en.wikipedia.org/wiki/Sinovation_Ventures"
      }
    ]
  },
  "greycroft": {
    complete: false,
    note: "Greycroft I-V and Growth I-II are not recorded.",
    funds: [
      {
        name: "Greycroft VI",
        vintageYear: 2020,
        announcedDate: null,
        sizeUSD: 310000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://finance.yahoo.com/news/greycroft-closes-over-1-billion-150058413.html"
      },
      {
        name: "Greycroft Growth III",
        vintageYear: 2020,
        announcedDate: null,
        sizeUSD: 368000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://finance.yahoo.com/news/greycroft-closes-over-1-billion-150058413.html"
      },
      {
        name: "Greycroft Partners VII and Growth IV (combined close)",
        vintageYear: 2023,
        announcedDate: "2023-04",
        sizeUSD: 980000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: true,
        confidence: "high",
        source: "https://www.businesswire.com/news/home/20230425006100/en/Greycroft-Closes-On-More-Than-$1-Billion-To-Back-the-Next-Generation-of-Category-Defining-Companies"
      }
    ]
  },
  "primary-venture-partners": {
    complete: false,
    note: "Funds I-III are not recorded. Fund V's vintage year was not stated in the source.",
    funds: [
      {
        name: "Fund IV",
        vintageYear: 2025,
        announcedDate: null,
        sizeUSD: 275000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "medium",
        source: "https://f4.fund/firms/primary-venture-partners"
      },
      {
        name: "Fund IV Select",
        vintageYear: 2025,
        announcedDate: "2025-09",
        sizeUSD: 150000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "medium",
        source: "https://f4.fund/firms/primary-venture-partners"
      },
      {
        name: "Fund V",
        vintageYear: null,
        announcedDate: null,
        sizeUSD: 625000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "medium",
        source: "https://finance.yahoo.com/news/primary-ventures-raises-healthy-625m-140000268.html"
      }
    ]
  },
  "revolution-ventures": {
    complete: false,
    note: "Revolution Ventures II was not sized. Rise of the Rest funds are recorded under their own firm entry.",
    funds: [
      {
        name: "Revolution Ventures I",
        vintageYear: 2013,
        announcedDate: "2013-09",
        sizeUSD: 200000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "medium",
        source: "https://golden.com/wiki/Revolution_Ventures-W4BK46V"
      },
      {
        name: "Revolution Growth III",
        vintageYear: 2016,
        announcedDate: "2016-06",
        sizeUSD: 525000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.forbes.com/sites/alexkonrad/2016/06/14/steve-cases-revolution-fund-raises-525-million-to-keep-backing-startups-far-from-silicon-valley/"
      },
      {
        name: "Revolution Ventures III",
        vintageYear: 2019,
        announcedDate: null,
        sizeUSD: 215000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "medium",
        source: "https://technical.ly/2020/01/13/revolution-100-investments-2019-exits-venture-capital/"
      }
    ]
  },
  "rise-of-the-rest-seed-fund": {
    complete: true,
    note: "Operates under the Revolution umbrella; recorded here because it is a separate firm entry.",
    funds: [
      {
        name: "Rise of the Rest Seed Fund I",
        vintageYear: 2017,
        announcedDate: "2017-12",
        sizeUSD: 150000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.revolution.com/press-release/investor-dream-team-back-rise-rest-entrepreneurs-new-150-million-fund"
      },
      {
        name: "Rise of the Rest Seed Fund II",
        vintageYear: 2019,
        announcedDate: "2019-10",
        sizeUSD: 150000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://techcrunch.com/2019/10/28/revolution-closes-its-second-rise-of-the-rest-fund-with-150-million/"
      }
    ]
  },
  "homebrew": {
    complete: true,
    note: "Fund IV is confirmed to exist but was never sized or dated. The firm's own site suggests it now invests partners' own capital.",
    funds: [
      {
        name: "Homebrew I",
        vintageYear: 2013,
        announcedDate: null,
        sizeUSD: 35000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://techcrunch.com/2018/02/12/homebrew-closed-90-million-fund/"
      },
      {
        name: "Homebrew II",
        vintageYear: 2015,
        announcedDate: null,
        sizeUSD: 50000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://techcrunch.com/2018/02/12/homebrew-closed-90-million-fund/"
      },
      {
        name: "Homebrew III",
        vintageYear: 2018,
        announcedDate: "2018-02",
        sizeUSD: 90000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://homebrewvc.tumblr.com/post/170809955053/announcing-homebrew-iii-finding-our"
      },
      {
        name: "Homebrew IV",
        vintageYear: null,
        announcedDate: null,
        sizeUSD: null,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "low",
        source: "https://pitchbook.com/profiles/fund/24026-50F"
      }
    ]
  },
  "cowboy-ventures": {
    complete: false,
    note: "A possible Fund V was referenced only as an estimate and is deliberately excluded.",
    funds: [
      {
        name: "Fund I",
        vintageYear: 2012,
        announcedDate: "2012-07",
        sizeUSD: 40000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://news.crunchbase.com/venture/cowboy-ventures-closes-capital-for-95-million-third-fund/"
      },
      {
        name: "Fund II",
        vintageYear: 2014,
        announcedDate: null,
        sizeUSD: 55000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "medium",
        source: "https://news.crunchbase.com/venture/cowboy-ventures-closes-capital-for-95-million-third-fund/"
      },
      {
        name: "Fund III",
        vintageYear: 2018,
        announcedDate: "2018-08",
        sizeUSD: 95000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://news.crunchbase.com/venture/cowboy-ventures-closes-capital-for-95-million-third-fund/"
      },
      {
        name: "Fund IV",
        vintageYear: 2023,
        announcedDate: "2023-01",
        sizeUSD: 140000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://techcrunch.com/2023/01/23/cowboy-ventures-goes-bigger-with-260m-across-two-new-funds-including-an-opportunity-fund/"
      },
      {
        name: "Mustang Fund",
        vintageYear: 2023,
        announcedDate: "2023-01",
        sizeUSD: 120000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://techcrunch.com/2023/01/23/cowboy-ventures-goes-bigger-with-260m-across-two-new-funds-including-an-opportunity-fund/"
      }
    ]
  },
  "zetta-venture-partners": {
    complete: true,
    note: "Fund I is confirmed but was never sized.",
    funds: [
      {
        name: "Fund I",
        vintageYear: 2013,
        announcedDate: null,
        sizeUSD: null,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "medium",
        source: "https://www.crunchbase.com/organization/zetta-venture-partners"
      },
      {
        name: "Fund II",
        vintageYear: 2017,
        announcedDate: null,
        sizeUSD: 125000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://pitchbook.com/newsletter/zetta-venture-partners-closes-ai-focused-fund-on-180m"
      },
      {
        name: "Fund III",
        vintageYear: 2020,
        announcedDate: "2020-01",
        sizeUSD: 180000000,
        originalCurrency: null,
        sizeOriginal: null,
        status: "closed",
        vehicleType: "fund",
        combinedVehicles: false,
        confidence: "high",
        source: "https://www.prnewswire.com/news-releases/zetta-venture-partners-fuels-the-future-of-ai-with-180-million-fund-301040135.html"
      }
    ]
  },
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FIRM_FUNDS };
}
