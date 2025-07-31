export const heroData = {
  headline: "Meet Shimona Dubey",
  profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  primaryCTA: "Get Started",
  secondaryCTA: "Contact Me"
};

export const metricsData = [
  {
    number: "7",
    value: "+",
    label: "Products Created",
    description: "End-to-end development"
  },
  {
    number: "999",
    value: "K+",
    label: "Lives Touched", 
    description: "User impact across platforms"
  },
  {
    number: "$5",
    value: "M+",
    label: "Saved to Clients",
    description: "Cost optimization and efficiency"
  },
  {
    number: "5",
    value: "+",
    label: "Startups Supported",
    description: "From 0 to 1 journey facilitation"
  }
];

export const qualificationCards = [
  {
    id: 1,
    front: {
      icon: "Settings",
      title: "2 years of experience in program management",
      subtitle: "Strategic planning & execution"
    },
    back: {
      content: [
        "4+ years in managing data, product & strategy.",
        "Shaped 4 startups their vision, roadmaps and launch.", 
        "User-focused strategy to shape products that solve problems for all."
      ]
    }
  },
  {
    id: 2,
    front: {
      icon: "BarChart3",
      title: "Experience with data analysis using SQL",
      subtitle: "Data-driven decision making"
    },
    back: {
      content: [
        "Data is my love, SQL is my language!",
        "Deloitte: Designed 5 data ingestions pipeline, with over 500+ KPIs at Deloitte.",
        "Xano: Architected feature specific framework for deep user research improving activation by 15%."
      ]
    }
  },
  {
    id: 3,
    front: {
      icon: "Cog",
      title: "Experience creating technical tools for automation of operations",
      subtitle: "Process optimization & efficiency"  
    },
    back: {
      content: [
        "Before bachelors, Automated Oracles (OFSS banking platform) testing using Selenium and invented dynamic variable handling in the company.",
        "At Axcelis, automated Regression platform testing cutting down 1 hours manual efforts to under 4 hours."
      ]
    }
  }
];

export const educationData = {
  graduate: {
    degree: "Master of Science in Engineering Management",
    university: "Tufts University",
    period: "2022-2024",
    details: [
      "Concentration: Technology Strategy & Innovation",
      "Relevant Coursework: Product Management, Entrepreneurship, New Product Innovation, Finance, Business Strategy & Operations, Marketing."
    ]
  },
  undergraduate: {
    degree: "Bachelor of Science in Computer Engineering",
    university: "Pune University", 
    period: "2015-2019",
    details: [
      "Concentration: Software Development & Database Management.",
      "Relevant Projects: Mouse Control via Eye movement for Handicaps (Computer Vision & ML), IOT Enabled, Smart Irrigation System, Code Refactoring Platform."
    ]
  }
};

export const experienceData = [
  {
    company: "Xano, Inc.",
    role: "Product Analyst",
    description: "No Code Backend Development Platform",
    period: "2024-Present",
    achievements: [
      "Defined metrics and built DBT data models, boosting user retention by 15%",
      "Designed AI-powered onboarding, increasing user engagement by 20%",
      "Optimized funnels, cutting churn by 18% and lifting activation by 15%"
    ]
  },
  {
    company: "Axcelis Technologies",
    role: "Summer Intern",
    description: "Semiconductor Equipment Manufacturing",
    period: "2024",
    achievements: [
      "Developed automation regression testing framework using Playwright on Azure DevOps",
      "Digitized OpCenter's process customizations, enhancing operational consistency",
      "Increased testing efficiency by 30%, significantly reducing manual testing hours"
    ]
  },
  {
    company: "SupplyRLink",
    role: "Product Manager",
    description: "AI-based Startup Streamlining Supplier Procurement",
    period: "2024",
    achievements: [
      "Led product roadmap and MVP strategy; aligned teams for rapid time-to-market",
      "Architected AWS Glue/Lambda data pipeline, increasing data accuracy by 25%",
      "Enabled advanced risk analytics through robust data ingestion"
    ]
  },
  {
    company: "Kathalyst",
    role: "Co-Founder & Product Manager",
    description: "AI-based SaaS Documentation Tool",
    period: "2022-2023",
    achievements: [
      "Defined product vision and GTM strategy; secured 5 enterprise clients and $10K funding",
      "Developed RAG-based quality module, improving scoring by 30% and NPS by 12 points",
      "Prioritized features from 150+ interviews, reducing time to MVP by 40%"
    ]
  },
  {
    company: "Deloitte",
    role: "Consultant",
    description: "Data Lead and Project Manager",
    period: "2019-2022",
    achievements: [
      "Directed SDLC for 4 data platforms, impacting 750K+ users, delivering $3M savings",
      "Led team to build real-time dashboards, cutting reporting latency by 85%",
      "Optimized ETL pipelines for 25+ sources, reducing ad-hoc requests by 60%"
    ]
  }
];

export const challengesData = [
  {
    id: 'governance',
    title: 'Data Governance & Compliance',
    description: 'Ensuring strict privacy and regulatory adherence for sensitive geospatial data.',
    iconClass: 'fa-solid fa-shield-halved', // High-quality icon for security/compliance
    impact: 'Lapses in handling sensitive geospatial data can result in severe legal penalties, loss of user trust, and irreparable brand damage.',
    analysis: { impact: 10, complexity: 9 } // Impact and complexity rating out of 10
  },
  {
    id: 'quality',
    title: 'Data Ingestion & Quality',
    description: 'Managing diverse, voluminous third-party data to ensure accuracy and freshness.',
    iconClass: 'fa-solid fa-chart-line', // High-quality icon for data trends/quality
    impact: 'Inconsistent or poor third-party data compromises map reliability, AI model performance, and user experience.',
    analysis: { impact: 9, complexity: 8 }
  },
  {
    id: 'efficiency',
    title: 'Operational Efficiency & Automation',
    description: 'Transforming manual, unscalable processes into streamlined, AI-led workflows.',
    iconClass: 'fa-solid fa-robot', // High-quality icon for automation/AI
    impact: 'Manual processes are unscalable, prone to error, and bottleneck the strategic shift to an AI-led environment.',
    analysis: { impact: 8, complexity: 7 }
  },
  {
    id: 'collaboration',
    title: 'Cross-Functional Collaboration',
    description: 'Bridging communication gaps across internal teams and external vendors for unified project delivery.',
    iconClass: 'fa-solid fa-handshake', // High-quality icon for collaboration
    impact: 'Misalignment across internal teams and external vendors causes project delays, scope creep, and failure to deliver product goals.',
    analysis: { impact: 7, complexity: 7 }
  },
  {
    id: 'talent',
    title: 'Talent & Resource Optimization',
    description: 'Addressing skill gaps and analyst fatigue to foster innovation and advanced AI solution development.',
    iconClass: 'fa-solid fa-lightbulb', // High-quality icon for innovation/talent
    impact: 'Skill gaps and analyst fatigue from manual tasks impede innovation and development of advanced AI solutions.',
    analysis: { impact: 6, complexity: 6 }
  }
];

export const dashboardData = {
  overview: {
    metrics: [
      { label: "Data Quality Score", value: "96%", change: "+4%", trend: "up" },
      { label: "Daily Data Volume", value: "8.4M", unit: "records processed", trend: "stable" },
      { label: "Automation Rate", value: "78%", change: "+12%", trend: "up" },
      { label: "Active Providers", value: "127", change: "3 new this week", trend: "up" }
    ],
    charts: {
      qualityTrends: [
        { month: "Jan", score: 92 },
        { month: "Feb", score: 94 },
        { month: "Mar", score: 93 },
        { month: "Apr", score: 95 },
        { month: "May", score: 96 },
        { month: "Jun", score: 96 }
      ],
      processingDistribution: [
        { name: "Automated", value: 78, color: "#1a73e8" },
        { name: "Manual Review", value: 15, color: "#fbbc04" },
        { name: "Failed", value: 7, color: "#ea4335" }
      ]
    }
  },
  providers: [
    { name: "Google Places API", status: "Active", quality: 98, lastUpdate: "2 hours ago", issues: 0 },
    { name: "Mapbox Geocoding", status: "Active", quality: 96, lastUpdate: "1 hour ago", issues: 1 },
    { name: "HERE Location Services", status: "Warning", quality: 89, lastUpdate: "4 hours ago", issues: 3 },
    { name: "TomTom Maps API", status: "Active", quality: 94, lastUpdate: "30 minutes ago", issues: 0 },
    { name: "OpenStreetMap", status: "Error", quality: 76, lastUpdate: "12 hours ago", issues: 8 }
  ],
  qualityControl: {
    validationRate: 94.2,
    pendingReviews: 234,
    criticalIssues: 12
  },
  pipeline: {
    stages: [
      { name: "Data Ingestion", status: "Active", rate: "1.2K/min" },
      { name: "Validation", status: "Active", rate: "1.1K/min" },
      { name: "Transformation", status: "Active", rate: "1.0K/min" },
      { name: "Quality Check", status: "Warning", rate: "950/min" },
      { name: "Integration", status: "Active", rate: "920/min" }
    ]
  },
  monitoring: {
    systemHealth: {
      cpu: 67,
      memory: 82,
      storage: 45
    }
  }
};