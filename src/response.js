export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - lectures",
        totalResults: "823000000",
        searchTerms: "lectures",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "017576662512468239146:omuauf_lfve",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - lectures",
        totalResults: "823000000",
        searchTerms: "lectures",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "017576662512468239146:omuauf_lfve",
      },
    ],
  },
  context: {
    title: "CS Curriculum",
    facets: [
      [
        {
          anchor: "Lectures",
          label: "lectures",
          label_with_op: "more:lectures",
        },
      ],
      [
        {
          anchor: "Assignments",
          label: "assignments",
          label_with_op: "more:assignments",
        },
      ],
      [
        {
          anchor: "Reference",
          label: "reference",
          label_with_op: "more:reference",
        },
      ],
    ],
  },
  searchInformation: {
    searchTime: 0.329264,
    formattedSearchTime: "0.33",
    totalResults: "823000000",
    formattedTotalResults: "823,000,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "CS229 - Machine Learning",
      htmlTitle: "CS229 - Machine Learning",
      link: "https://see.stanford.edu/Course/CS229",
      displayLink: "see.stanford.edu",
      snippet:
        "Slides from Andrew's lecture on getting machine learning algorithms to work in \npractice can be found here. Previous projects: A list of last year's final projects ...",
      htmlSnippet:
        "Slides from Andrew&#39;s \u003cb\u003electure\u003c/b\u003e on getting machine learning algorithms to work in \u003cbr\u003e\npractice can be found here. Previous projects: A list of last year&#39;s final projects&nbsp;...",
      cacheId: "vB97xQjhxVcJ",
      formattedUrl: "https://see.stanford.edu/Course/CS229",
      htmlFormattedUrl: "https://see.stanford.edu/Course/CS229",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2_-hJWbczpcTOUvBJuymIrbHevHrTlAL-EhyPo--xfmFh0F0Ts8iCmOc",
            width: "148",
            height: "208",
          },
        ],
        metatags: [
          {
            viewport: "width=device-width, initial-scale=1",
          },
        ],
        cse_image: [
          {
            src: "https://see.stanford.edu/Content/Images/Instructors/ng.jpg",
          },
        ],
      },
      labels: [
        {
          name: "lectures",
          displayName: "Lectures",
          label_with_op: "more:lectures",
        },
      ],
    },
    {
      kind: "customsearch#result",
      title: "CSC2535S : lectures",
      htmlTitle: "CSC2535S : \u003cb\u003electures\u003c/b\u003e",
      link: "http://www.cs.toronto.edu/~hinton/csc2535/lectures.html",
      displayLink: "www.cs.toronto.edu",
      snippet:
        "CSC2535 Spring 2013 - Lectures. DRAFT LECTURE SCHEDULE: SUBJECT TO \nCHANGE. The final versions of the lecture notes will generally be posted on ...",
      htmlSnippet:
        "CSC2535 Spring 2013 - \u003cb\u003eLectures\u003c/b\u003e. DRAFT \u003cb\u003eLECTURE\u003c/b\u003e SCHEDULE: SUBJECT TO \u003cbr\u003e\nCHANGE. The final versions of the \u003cb\u003electure\u003c/b\u003e notes will generally be posted on&nbsp;...",
      cacheId: "N8wrLohIrBUJ",
      formattedUrl: "www.cs.toronto.edu/~hinton/csc2535/lectures.html",
      htmlFormattedUrl:
        "www.cs.toronto.edu/~hinton/csc2535/\u003cb\u003electures\u003c/b\u003e.html",
    },
    {
      kind: "customsearch#result",
      title:
        "Neural Networks for Machine Learning Lecture 6a Overview of mini ...",
      htmlTitle:
        "Neural Networks for Machine Learning \u003cb\u003eLecture\u003c/b\u003e 6a Overview of mini ...",
      link:
        "https://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf",
      displayLink: "www.cs.toronto.edu",
      snippet:
        "Neural Networks for Machine Learning. Lecture 6a. Overview of mini-‐batch \ngradient descent. Geoffrey Hinton with. NiRsh Srivastava. Kevin Swersky ...",
      htmlSnippet:
        "Neural Networks for Machine Learning. \u003cb\u003eLecture\u003c/b\u003e 6a. Overview of mini-‐batch \u003cbr\u003e\ngradient descent. Geoffrey Hinton with. NiRsh Srivastava. Kevin Swersky&nbsp;...",
      cacheId: "ba4RKgQC1ywJ",
      formattedUrl:
        "https://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf",
      htmlFormattedUrl:
        "https://www.cs.toronto.edu/~tijmen/csc321/slides/\u003cb\u003electure\u003c/b\u003e_slides_lec6.pdf",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7xQ9ncedQsb8gM80HHUW8dGymK2BmBb-RAesbeRsJIfs4c0cNtDZw2k",
            width: "268",
            height: "188",
          },
        ],
        metatags: [
          {
            moddate: "D:20121009195946Z00'00'",
            creator: "PowerPoint",
            creationdate: "D:20121009195946Z00'00'",
            author: "Geoffrey Hinton",
            producer: "Mac OS X 10.7.4 Quartz PDFContext",
          },
        ],
        cse_image: [
          {
            src:
              "x-raw-image:///cc231a2fef4933107b440e830b5f4991fd92571d23d40bfddfc9c5bf7e94d803",
          },
        ],
      },
      mime: "application/pdf",
      fileFormat: "PDF/Adobe Acrobat",
    },
    {
      kind: "customsearch#result",
      title: "John Hennessy and David Patterson Turing Lecture",
      htmlTitle:
        "John Hennessy and David Patterson Turing \u003cb\u003eLecture\u003c/b\u003e",
      link: "https://www.acm.org/hennessy-patterson-turing-lecture",
      displayLink: "www.acm.org",
      snippet:
        "A video of the lecture can be viewed below. Titled “A New Golden Age for \nComputer Architecture: Domain-Specific Hardware/Software Co-Design, \nEnhanced ...",
      htmlSnippet:
        "A video of the \u003cb\u003electure\u003c/b\u003e can be viewed below. Titled “A New Golden Age for \u003cbr\u003e\nComputer Architecture: Domain-Specific Hardware/Software Co-Design, \u003cbr\u003e\nEnhanced&nbsp;...",
      cacheId: "8V-Hwo9_hxkJ",
      formattedUrl: "https://www.acm.org/hennessy-patterson-turing-lecture",
      htmlFormattedUrl:
        "https://www.acm.org/hennessy-patterson-turing-\u003cb\u003electure\u003c/b\u003e",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRPBiOcm6qnq4LIENM30UWUCzSDFfEL-VC_ECkqKg6PxwVjwuzjvHAnsKI",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.acm.org/images/acm_rgb_grad_pos_diamond.png",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title":
              "John Hennessy and David Patterson Deliver Turing Lecture at ISCA 2018",
            "twitter:site": "@theofficialacm",
            viewport:
              "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
            "twitter:description":
              "webpage to host livestream of hennessy-patterson turing lecture",
            "og:title":
              "John Hennessy and David Patterson Deliver Turing Lecture at ISCA 2018",
            "og:url": "https://www.acm.org/hennessy-patterson-turing-lecture",
            "og:description":
              "webpage to host livestream of hennessy-patterson turing lecture",
            "twitter:image":
              "https://www.acm.org/images/acm_rgb_grad_pos_diamond.png",
          },
        ],
        cse_image: [
          {
            src: "https://www.acm.org/images/acm_rgb_grad_pos_diamond.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Variational Inference",
      htmlTitle: "Variational Inference",
      link:
        "https://www.cs.princeton.edu/courses/archive/fall11/cos597C/lectures/variational-inference-i.pdf",
      displayLink: "www.cs.princeton.edu",
      snippet:
        "See the exponential family lecture.) – So, the variational posterior mean and \nvariance of the cluster component k is. E[µk] = λ1 + ∑.",
      htmlSnippet:
        "See the exponential family \u003cb\u003electure\u003c/b\u003e.) – So, the variational posterior mean and \u003cbr\u003e\nvariance of the cluster component k is. E[µk] = λ1 + ∑.",
      cacheId: "AfaBncgk7Q8J",
      formattedUrl:
        "https://www.cs.princeton.edu/courses/.../lectures/variational-inference-i.pdf",
      htmlFormattedUrl:
        "https://www.cs.princeton.edu/courses/.../\u003cb\u003electures\u003c/b\u003e/variational-inference-i.pdf",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSjet4MJt464QaxYAAokLCpStWuOyt-E79-l50KgHoGAFBwUyHZI6FfJME",
            width: "312",
            height: "162",
          },
        ],
        metatags: [
          {
            moddate: "D:20111012063100-04'00'",
            creator: "TeX",
            creationdate: "D:20111012063100-04'00'",
            fullbanner:
              "This is pdfTeX, Version 3.1415926-1.40.10-2.2 (TeX Live 2009) kpathsea version 5.0.0",
            producer: "pdfTeX-1.40.10",
          },
        ],
        cse_image: [
          {
            src:
              "x-raw-image:///fc1a71da5994e9924c9344d49e37bc39eea0689c233a4754ef95d41ff66be566",
          },
        ],
      },
      mime: "application/pdf",
      fileFormat: "PDF/Adobe Acrobat",
      labels: [
        {
          name: "lectures",
          displayName: "Lectures",
          label_with_op: "more:lectures",
        },
      ],
    },
    {
      kind: "customsearch#result",
      title: "Lectures - CSCI 402, Summer 2014, MW Section - Merlot",
      htmlTitle:
        "\u003cb\u003eLectures\u003c/b\u003e - CSCI 402, Summer 2014, MW Section - Merlot",
      link: "http://merlot.usc.edu/cs402-m14/lectures.html",
      displayLink: "merlot.usc.edu",
      snippet:
        "Mar 12, 2020 ... Lecture 1 (PDF) (6-up PDF) (May 21, 2014) - administrative, warmup #1, \nintroduction (Ch 1); (May 26, 2014) - Memorial Day holiday; Lecture 2 ...",
      htmlSnippet:
        "Mar 12, 2020 \u003cb\u003e...\u003c/b\u003e \u003cb\u003eLecture\u003c/b\u003e 1 (PDF) (6-up PDF) (May 21, 2014) - administrative, warmup #1, \u003cbr\u003e\nintroduction (Ch 1); (May 26, 2014) - Memorial Day holiday; \u003cb\u003eLecture\u003c/b\u003e 2&nbsp;...",
      cacheId: "kcuQvEKDY24J",
      formattedUrl: "merlot.usc.edu/cs402-m14/lectures.html",
      htmlFormattedUrl:
        "merlot.usc.edu/cs402-m14/\u003cb\u003electures\u003c/b\u003e.html",
    },
    {
      kind: "customsearch#result",
      title: "Lectures - CSCI 402, Spring 2013, TuTh Section - Merlot",
      htmlTitle:
        "\u003cb\u003eLectures\u003c/b\u003e - CSCI 402, Spring 2013, TuTh Section - Merlot",
      link: "http://merlot.usc.edu/cs402tt-s13/lectures.html",
      displayLink: "merlot.usc.edu",
      snippet:
        "Mar 12, 2020 ... Lecture Slides. (Please note that access to lecture notes is restricted.) Lecture 1 (\nPDF) (6-up PDF) (Jan 15, 2013) - administrative; Lecture 2 ...",
      htmlSnippet:
        "Mar 12, 2020 \u003cb\u003e...\u003c/b\u003e \u003cb\u003eLecture\u003c/b\u003e Slides. (Please note that access to \u003cb\u003electure\u003c/b\u003e notes is restricted.) \u003cb\u003eLecture\u003c/b\u003e 1 (\u003cbr\u003e\nPDF) (6-up PDF) (Jan 15, 2013) - administrative; \u003cb\u003eLecture\u003c/b\u003e 2&nbsp;...",
      cacheId: "qW8wkAe51xQJ",
      formattedUrl: "merlot.usc.edu/cs402tt-s13/lectures.html",
      htmlFormattedUrl:
        "merlot.usc.edu/cs402tt-s13/\u003cb\u003electures\u003c/b\u003e.html",
    },
    {
      kind: "customsearch#result",
      title: "CSC148H: Lectures",
      htmlTitle: "CSC148H: \u003cb\u003eLectures\u003c/b\u003e",
      link: "http://www.cs.toronto.edu/~hojjat/148s07/lectures.shtml",
      displayLink: "www.cs.toronto.edu",
      snippet:
        "While this course will use a variety of these approaches, lecture slides are \nprovided. ... Slides will be added here as .pdf files, roughly prior to each lecture.",
      htmlSnippet:
        "While this course will use a variety of these approaches, \u003cb\u003electure\u003c/b\u003e slides are \u003cbr\u003e\nprovided. ... Slides will be added here as .pdf files, roughly prior to each \u003cb\u003electure\u003c/b\u003e.",
      cacheId: "EKeiWdQaBuoJ",
      formattedUrl: "www.cs.toronto.edu/~hojjat/148s07/lectures.shtml",
      htmlFormattedUrl:
        "www.cs.toronto.edu/~hojjat/148s07/\u003cb\u003electures\u003c/b\u003e.shtml",
    },
    {
      kind: "customsearch#result",
      title: "CIS 110 Lectures - CIS UPenn",
      htmlTitle: "CIS 110 \u003cb\u003eLectures\u003c/b\u003e - CIS UPenn",
      link: "https://www.cis.upenn.edu/~cis110/13su/lectures.shtml",
      displayLink: "www.cis.upenn.edu",
      snippet:
        "CIS 110 Lectures. A tentative list of lecture topics is given below. These may \nchange in the course of the semester. Lecture slides will be posted as they are ...",
      htmlSnippet:
        "CIS 110 \u003cb\u003eLectures\u003c/b\u003e. A tentative list of \u003cb\u003electure\u003c/b\u003e topics is given below. These may \u003cbr\u003e\nchange in the course of the semester. \u003cb\u003eLecture\u003c/b\u003e slides will be posted as they are&nbsp;...",
      cacheId: "Yq187elqqAkJ",
      formattedUrl: "https://www.cis.upenn.edu/~cis110/13su/lectures.shtml",
      htmlFormattedUrl:
        "https://www.cis.upenn.edu/~cis110/13su/\u003cb\u003electures\u003c/b\u003e.shtml",
      labels: [
        {
          name: "lectures",
          displayName: "Lectures",
          label_with_op: "more:lectures",
        },
      ],
    },
    {
      kind: "customsearch#result",
      title: "CSCE 312: Lectures - CS Course Webpages",
      htmlTitle:
        "CSCE 312: \u003cb\u003eLectures\u003c/b\u003e - CS Course Webpages",
      link: "http://courses.cs.tamu.edu/rabi/CPSC312/lectures.html",
      displayLink: "courses.cs.tamu.edu",
      snippet:
        "Lecture 6: Datapath Components Chapter 4. 10/13/2015: Lecture 7: Machine \nLevel Programming I Chapter 3 (Computer Systems by Bryant & O'Hallaron) ...",
      htmlSnippet:
        "\u003cb\u003eLecture\u003c/b\u003e 6: Datapath Components Chapter 4. 10/13/2015: \u003cb\u003eLecture\u003c/b\u003e 7: Machine \u003cbr\u003e\nLevel Programming I Chapter 3 (Computer Systems by Bryant &amp; O&#39;Hallaron)&nbsp;...",
      cacheId: "MpQ2AloYgiwJ",
      formattedUrl: "courses.cs.tamu.edu/rabi/CPSC312/lectures.html",
      htmlFormattedUrl:
        "courses.cs.tamu.edu/rabi/CPSC312/\u003cb\u003electures\u003c/b\u003e.html",
      pagemap: {
        metatags: [
          {
            author: "Suneil Mohan",
            originator: "Microsoft Word 14",
            progid: "Word.Document",
          },
        ],
      },
      labels: [
        {
          name: "lectures",
          displayName: "Lectures",
          label_with_op: "more:lectures",
        },
      ],
    },
  ],
};
