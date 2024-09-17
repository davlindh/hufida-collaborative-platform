export const sections = [
  {
    id: "about",
    title: "About",
    content: "The Sustainable Livelihoods and Economic Empowerment project focuses on creating green jobs, providing microfinance opportunities, and fostering sustainable economic growth in African communities. Our goal is to build resilient local economies while promoting environmental conservation.",
    tooltip: "Learn about the project's goals and approach"
  },
  {
    id: "objectives",
    title: "Objectives",
    content: "Our key objectives include creating green jobs in renewable energy and sustainable agriculture, providing microfinance support for small businesses, developing skills in sustainable practices, and establishing eco-friendly supply chains.",
    tooltip: "Discover the project's main goals"
  },
  {
    id: "implementation",
    title: "Implementation",
    content: "We're partnering with local communities, NGOs, and government agencies to implement green job training programs, establish microfinance cooperatives, and create sustainable business incubators across multiple African countries.",
    tooltip: "Explore how we're putting the plan into action"
  },
  {
    id: "impact",
    title: "Impact",
    content: "To date, we've created over 5,000 green jobs, supported 10,000 small businesses through microfinance initiatives, and helped increase average household incomes by 30% in target communities.",
    tooltip: "See the project's achievements"
  },
  {
    id: "future",
    title: "Future Plans",
    content: "We aim to expand our green job creation efforts to 15 more countries, develop a continent-wide network of eco-entrepreneurs, and launch a digital platform for sustainable business education and networking.",
    tooltip: "Learn about our future goals"
  }
];

export const features = [
  { 
    title: "Green Job Creation", 
    description: "Developing employment opportunities in renewable energy, sustainable agriculture, and eco-friendly construction.",
    details: [
      "Solar panel installation and maintenance training programs",
      "Organic farming and permaculture workshops",
      "Green building techniques and materials production",
      "Waste management and recycling business development"
    ]
  },
  { 
    title: "Microfinance Programs", 
    description: "Providing financial support and services to small businesses and entrepreneurs focusing on sustainable practices.",
    details: [
      "Low-interest loans for eco-friendly startups",
      "Financial literacy training for small business owners",
      "Savings and credit cooperatives for green initiatives",
      "Mobile banking solutions for remote areas"
    ]
  },
  { 
    title: "Skill Development Workshops", 
    description: "Offering training in various sustainable practices and business management.",
    details: [
      "Renewable energy technology courses",
      "Sustainable agriculture and agroforestry training",
      "Eco-tourism development workshops",
      "Green business management and marketing seminars"
    ]
  },
  { 
    title: "Sustainable Supply Chain Development", 
    description: "Creating and optimizing eco-friendly supply chains for local and regional markets.",
    details: [
      "Local sourcing initiatives for sustainable materials",
      "Fair trade certification support",
      "Efficient logistics planning for reduced carbon footprint",
      "Blockchain technology for supply chain transparency"
    ]
  },
  { 
    title: "Eco-Entrepreneurship Incubators", 
    description: "Establishing support centers for aspiring green entrepreneurs.",
    details: [
      "Mentorship programs pairing experienced eco-entrepreneurs with startups",
      "Co-working spaces with sustainable infrastructure",
      "Access to green technology and resources",
      "Networking events and pitch competitions for eco-businesses"
    ]
  },
  { 
    title: "Community-Based Natural Resource Management", 
    description: "Empowering local communities to sustainably manage and benefit from their natural resources.",
    details: [
      "Community forest management programs",
      "Sustainable fishing cooperatives",
      "Ecotourism development in protected areas",
      "Benefit-sharing mechanisms for resource extraction"
    ]
  }
];

export const vision = "Our vision is to create a thriving, sustainable green economy across Africa, where millions of people are employed in jobs that not only provide livelihoods but also contribute to environmental conservation and climate resilience. We envision a future where every African community has access to clean energy, sustainable agricultural practices, and eco-friendly economic opportunities, leading to improved quality of life and a healthier planet.";

export const sustainableLivelihoodsData = {
  id: "sustainable-livelihoods",
  title: "Sustainable Livelihoods and Economic Empowerment",
  description: "Empowering communities through green job creation and microfinance programs, fostering economic resilience and environmental sustainability across Africa.",
  category: "Economic Empowerment",
  status: "Active",
  activities: [
    "Green Job Creation in renewable energy, sustainable agriculture, and eco-friendly construction",
    "Microfinance Programs for small business grants and services",
    "Skill Development Workshops focusing on sustainable practices",
    "Entrepreneurship Incubators for green businesses",
    "Sustainable Supply Chain Development"
  ],
  impact: [
    "Created 5,000+ green jobs across 10 African countries",
    "Supported 10,000+ small businesses through microfinance initiatives",
    "Increased average household income by 30% in target communities",
    "Reduced carbon emissions by an estimated 50,000 tons annually through green initiatives",
    "Established 20 green business incubators"
  ],
  getInvolved: [
    "Volunteer as a mentor for aspiring green entrepreneurs",
    "Donate to our microfinance fund to support local businesses",
    "Partner with us to create green job opportunities",
    "Attend our skill development workshops and share your expertise",
    "Invest in our sustainable business ventures"
  ],
  keyFeatures: features.map(feature => feature.title),
  vision: vision,
  sections: sections,
  features: features
};