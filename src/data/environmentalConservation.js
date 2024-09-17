export const environmentalConservationData = {
  id: "environmental-conservation",
  title: "Environmental Conservation and Climate Action",
  description: "Promoting sustainable practices, protecting biodiversity, and mitigating the effects of climate change across Africa.",
  category: "Environment",
  status: "Active",
  activities: [
    "Reforestation and afforestation initiatives",
    "Sustainable agriculture training programs",
    "Renewable energy implementation projects",
    "Wildlife conservation and anti-poaching efforts",
    "Climate change education and awareness campaigns",
    "Coastal and marine ecosystem protection"
  ],
  impact: [
    "Planted over 5 million trees across 10 African countries",
    "Trained 50,000 farmers in sustainable agricultural practices",
    "Installed solar power systems in 1,000 rural communities",
    "Reduced poaching incidents by 60% in protected areas",
    "Educated 1 million students on climate change and conservation",
    "Restored 500 km of coastline and established 20 marine protected areas"
  ],
  getInvolved: [
    "Volunteer for tree planting initiatives",
    "Donate to support renewable energy projects",
    "Participate in community-based conservation programs",
    "Sponsor a student for environmental education",
    "Join our citizen science projects for biodiversity monitoring",
    "Advocate for stronger environmental policies"
  ],
  keyFeatures: [
    {
      title: "Ecosystem Restoration",
      description: "Large-scale reforestation and habitat restoration projects.",
      details: [
        "Native species planting programs",
        "Community-led forest management",
        "Soil conservation techniques",
        "Wetland and mangrove restoration"
      ]
    },
    {
      title: "Sustainable Agriculture",
      description: "Promoting eco-friendly farming practices to reduce environmental impact.",
      details: [
        "Agroforestry systems implementation",
        "Organic farming training",
        "Water-efficient irrigation techniques",
        "Crop diversification programs"
      ]
    },
    {
      title: "Renewable Energy Transition",
      description: "Accelerating the adoption of clean energy sources.",
      details: [
        "Solar panel installation in rural areas",
        "Wind farm development",
        "Micro-hydro projects for remote communities",
        "Biogas systems for agricultural waste"
      ]
    },
    {
      title: "Wildlife Conservation",
      description: "Protecting endangered species and their habitats.",
      details: [
        "Anti-poaching patrols and technology",
        "Wildlife corridor establishment",
        "Community-based conservation initiatives",
        "Species reintroduction programs"
      ]
    },
    {
      title: "Climate Education",
      description: "Raising awareness and promoting climate action.",
      details: [
        "School-based environmental curricula",
        "Community climate workshops",
        "Climate-focused media campaigns",
        "Training for local environmental leaders"
      ]
    },
    {
      title: "Coastal and Marine Protection",
      description: "Safeguarding critical water ecosystems.",
      details: [
        "Coral reef restoration",
        "Sustainable fisheries management",
        "Plastic pollution reduction initiatives",
        "Coastal community resilience programs"
      ]
    }
  ],
  vision: "Our vision is to create a sustainable and resilient Africa where ecosystems thrive, biodiversity flourishes, and communities prosper in harmony with nature. We aim to be at the forefront of innovative conservation practices and climate change mitigation, setting a global example for environmental stewardship.",
  objectives: [
    "Increase forest cover by 20% in target regions within the next decade",
    "Transition 1,000 communities to renewable energy sources by 2030",
    "Reduce carbon emissions by 50% in partnering urban areas",
    "Achieve zero extinction of known threatened species in our project areas",
    "Implement sustainable water management practices in 100 river basins",
    "Establish a network of 50 climate-resilient model villages across Africa"
  ],
  detailedImpact: [
    "Sequestered 10 million tons of CO2 through reforestation efforts",
    "Increased crop yields by 40% for farmers adopting sustainable practices",
    "Provided clean energy access to 5 million people in rural areas",
    "Restored 100,000 hectares of degraded land to productive use",
    "Reduced human-wildlife conflict incidents by 70% in project zones",
    "Improved water quality in 50 major rivers, benefiting 20 million people"
  ],
  challenges: [
    "Limited funding for large-scale conservation projects",
    "Balancing conservation with economic development needs",
    "Climate change impacts accelerating faster than mitigation efforts",
    "Illegal wildlife trade and poaching pressures",
    "Lack of consistent environmental policies across countries",
    "Resistance to change from industries reliant on unsustainable practices"
  ],
  solutions: [
    "Developing innovative conservation financing mechanisms",
    "Implementing integrated conservation and development projects",
    "Accelerating climate adaptation strategies alongside mitigation",
    "Strengthening law enforcement and community engagement in protected areas",
    "Advocating for harmonized regional environmental policies",
    "Creating green job programs to facilitate sustainable economic transitions"
  ],
  futurePlans: [
    "Launch a pan-African youth conservation leadership program",
    "Develop a blockchain-based platform for transparent carbon credit trading",
    "Establish an African Center for Climate Innovation and Technology",
    "Create a continent-wide biodiversity monitoring network using AI and drones",
    "Implement large-scale green infrastructure projects in 20 major African cities",
    "Initiate a 'Blue Carbon' program focusing on coastal ecosystem restoration"
  ]
};

export const sections = [
  {
    id: "about",
    title: "About",
    content: environmentalConservationData.description,
    tooltip: "Learn about the project's goals and approach"
  },
  {
    id: "objectives",
    title: "Objectives",
    content: environmentalConservationData.objectives.join(". "),
    tooltip: "Discover the project's main goals"
  },
  {
    id: "impact",
    title: "Impact",
    content: environmentalConservationData.detailedImpact.join(". "),
    tooltip: "See the project's achievements"
  },
  {
    id: "challenges",
    title: "Challenges & Solutions",
    content: `Challenges: ${environmentalConservationData.challenges.join(". ")}. Solutions: ${environmentalConservationData.solutions.join(". ")}`,
    tooltip: "Learn about project challenges and solutions"
  },
  {
    id: "future",
    title: "Future Plans",
    content: environmentalConservationData.futurePlans.join(". "),
    tooltip: "Learn about upcoming initiatives"
  }
];

export const features = environmentalConservationData.keyFeatures;

export const vision = environmentalConservationData.vision;
