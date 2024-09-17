import { mentalHealthSocialHealingData } from './mentalHealthSocialHealing';
import { sustainableLivelihoodsData } from './sustainableLivelihoodsData';
import { sections as environmentalConservationSections, features as environmentalConservationFeatures, vision as environmentalConservationVision } from './environmentalConservation';

export const projectsData = [
  {
    id: mentalHealthSocialHealingData.id,
    title: mentalHealthSocialHealingData.title,
    description: mentalHealthSocialHealingData.description,
    category: mentalHealthSocialHealingData.category,
    status: mentalHealthSocialHealingData.status,
    activities: mentalHealthSocialHealingData.activities.slice(0, 3),
    impact: mentalHealthSocialHealingData.impact.slice(0, 3),
    getInvolved: mentalHealthSocialHealingData.getInvolved.slice(0, 3),
    keyFeatures: mentalHealthSocialHealingData.keyFeatures.slice(0, 3).map(feature => feature.title),
    vision: mentalHealthSocialHealingData.vision.split('.')[0] + '.'
  },
  {
    id: sustainableLivelihoodsData.id,
    title: sustainableLivelihoodsData.title,
    description: sustainableLivelihoodsData.description,
    category: sustainableLivelihoodsData.category,
    status: sustainableLivelihoodsData.status,
    activities: sustainableLivelihoodsData.activities.slice(0, 3),
    impact: sustainableLivelihoodsData.impact.slice(0, 3),
    getInvolved: sustainableLivelihoodsData.getInvolved.slice(0, 3),
    keyFeatures: sustainableLivelihoodsData.keyFeatures.slice(0, 3).map(feature => feature.title),
    vision: sustainableLivelihoodsData.vision.split('.')[0] + '.'
  },
  {
    id: "environmental-conservation",
    title: "Environmental Conservation and Climate Action",
    description: "Promoting sustainable practices, protecting biodiversity, and mitigating the effects of climate change across Africa.",
    category: "Environment",
    status: "Active",
    activities: environmentalConservationFeatures.slice(0, 3).map(feature => feature.title),
    impact: environmentalConservationSections.find(section => section.id === "impact").content.split(". ").slice(0, 3).map(sentence => sentence + "."),
    getInvolved: environmentalConservationFeatures.slice(0, 3).map(feature => `Support our ${feature.title.toLowerCase()} initiatives`),
    keyFeatures: environmentalConservationFeatures.slice(0, 3).map(feature => feature.title),
    vision: environmentalConservationVision.split('.')[0] + '.'
  },
  {
    id: "cultural-heritage-restoration",
    title: "Cultural and Heritage Restoration",
    description: "Preserving Africa's rich cultural heritage and fostering community identities through language revitalization, cultural events, and site preservation.",
    category: "Cultural Preservation",
    status: "Ongoing",
    activities: [
      "Language Revitalization Programs for endangered African languages",
      "Cultural Festivals and Events celebrating diverse African traditions",
      "Heritage Site Preservation and restoration projects"
    ],
    impact: [
      "Revitalized 15 endangered languages, reaching 100,000+ speakers",
      "Organized 50+ cultural festivals, attracting over 500,000 attendees",
      "Preserved and restored 30 significant heritage sites across Africa"
    ],
    getInvolved: [
      "Volunteer for language documentation and teaching programs",
      "Sponsor a cultural festival in your community",
      "Contribute to our heritage site restoration fund"
    ],
    keyFeatures: [
      "Digital language preservation platform",
      "Virtual reality tours of restored heritage sites",
      "Intergenerational cultural mentorship program"
    ],
    vision: "To create a vibrant, living cultural landscape across Africa where traditional knowledge, languages, and practices are valued, preserved, and seamlessly integrated into contemporary life."
  },
  {
    id: "humanitarian-infrastructure",
    title: "Humanitarian Support and Infrastructure Development",
    description: "Ensuring communities have necessary infrastructure for sustainable development while providing crucial humanitarian aid in times of crisis.",
    category: "Infrastructure",
    status: "Active",
    activities: [
      "Humanitarian Aid Distribution in crisis-affected areas",
      "Community Infrastructure Projects including schools, health centers, and water systems",
      "Disaster Preparedness and Resilience Building programs"
    ],
    impact: [
      "Provided humanitarian aid to 1 million people in crisis situations",
      "Built 100 schools and health centers in underserved communities",
      "Improved infrastructure and basic services for 200 rural communities"
    ],
    getInvolved: [
      "Volunteer for humanitarian aid distribution missions",
      "Donate to our infrastructure development projects",
      "Provide technical expertise for community development initiatives"
    ],
    keyFeatures: [
      "Rapid response humanitarian aid network",
      "Sustainable and climate-resilient infrastructure designs",
      "Community-led project planning and management"
    ],
    vision: "To build resilient African communities with access to essential infrastructure and services, capable of withstanding crises and fostering long-term sustainable development."
  }
];
