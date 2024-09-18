export const culturalRestorationData = {
  id: "cultural-restoration",
  title: "Cultural and Heritage Restoration",
  description: "The Cultural Restoration and Heritage Protection project aims to preserve and revitalize cultural identities across Africa through language revitalization, heritage site protection, and cultural events.",
  category: "Culture",
  status: "Active",
  objectives: [
    "Safeguard endangered languages",
    "Protect cultural heritage sites",
    "Promote traditional arts and crafts",
    "Foster intergenerational knowledge transfer"
  ],
  impact: [
    "Revitalized 15 endangered languages",
    "Restored 30 heritage sites",
    "Engaged over 100,000 people in cultural preservation activities"
  ],
  challenges: [
    "Rapid modernization leading to loss of traditional practices",
    "Limited funding for cultural preservation projects",
    "Lack of awareness about the importance of cultural heritage",
    "Difficulty in engaging younger generations in traditional practices"
  ],
  solutions: [
    "Develop innovative cultural education programs",
    "Create partnerships with local and international organizations for funding",
    "Launch awareness campaigns on the value of cultural heritage",
    "Integrate traditional practices with modern technology to appeal to youth"
  ],
  approach: "We're collaborating with local communities, linguists, and cultural experts to develop language preservation programs, restore heritage sites, and organize cultural festivals and workshops.",
  future: "We aim to expand our language revitalization efforts to 50 more languages, develop a digital archive of African cultural heritage, and establish a network of community-led cultural centers across the continent.",
  keyFeatures: [
    { 
      title: "Language Revitalization", 
      description: "Preserving and promoting endangered African languages.",
      details: [
        "Language documentation and archiving",
        "Intergenerational language transfer programs",
        "Development of language learning materials",
        "Community-based language immersion camps"
      ]
    },
    { 
      title: "Heritage Site Protection", 
      description: "Safeguarding and restoring important cultural and historical sites.",
      details: [
        "Site conservation and restoration projects",
        "Community-based site management training",
        "Development of sustainable tourism initiatives",
        "Digital documentation of heritage sites"
      ]
    },
    { 
      title: "Cultural Festivals and Events", 
      description: "Organizing celebrations to showcase and preserve cultural traditions.",
      details: [
        "Annual cultural heritage festivals",
        "Traditional arts and crafts exhibitions",
        "Intergenerational knowledge sharing events",
        "Cultural exchange programs between communities"
      ]
    },
    { 
      title: "Traditional Arts and Crafts Workshops", 
      description: "Promoting the continuation of traditional artistic practices.",
      details: [
        "Apprenticeship programs for young artisans",
        "Marketing support for traditional craftspeople",
        "Documentation of traditional techniques",
        "Integration of traditional arts in contemporary design"
      ]
    },
    { 
      title: "Oral History Documentation", 
      description: "Preserving the stories and wisdom of elders for future generations.",
      details: [
        "Oral history collection and archiving",
        "Training community members in oral history methods",
        "Production of documentaries and books",
        "Integration of oral histories in educational curricula"
      ]
    },
    { 
      title: "Digital Cultural Heritage Platform", 
      description: "Creating an online repository of African cultural heritage.",
      details: [
        "Development of a user-friendly digital archive",
        "Virtual reality experiences of heritage sites",
        "Online language learning resources",
        "Interactive cultural mapping projects"
      ]
    }
  ],
  vision: "Our vision is to create a vibrant, living cultural landscape across Africa where traditional knowledge, languages, and practices are valued, preserved, and seamlessly integrated into contemporary life, ensuring the rich diversity of African cultures continues to thrive for generations to come."
};

export const sections = [
  {
    id: "about",
    title: "About",
    content: culturalRestorationData.description,
    tooltip: "Learn about the project's goals and approach"
  },
  {
    id: "objectives",
    title: "Objectives",
    content: culturalRestorationData.objectives.join(". "),
    tooltip: "Discover the project's main goals"
  },
  {
    id: "impact",
    title: "Impact",
    content: culturalRestorationData.impact.join(". "),
    tooltip: "See the project's achievements"
  },
  {
    id: "approach",
    title: "Approach",
    content: culturalRestorationData.approach,
    tooltip: "Learn about our implementation strategy"
  },
  {
    id: "challenges",
    title: "Challenges & Solutions",
    content: `Challenges: ${culturalRestorationData.challenges.join(". ")}. Solutions: ${culturalRestorationData.solutions.join(". ")}`,
    tooltip: "Understand project challenges and how we address them"
  },
  {
    id: "future",
    title: "Future Plans",
    content: culturalRestorationData.future,
    tooltip: "Learn about our future goals"
  }
];

export const features = culturalRestorationData.keyFeatures;

export const vision = culturalRestorationData.vision;
