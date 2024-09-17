import { mentalHealthSocialHealingData } from './mentalHealthSocialHealing';
import { sustainableLivelihoodsData } from './sustainableLivelihoodsData';
import { sections as environmentalConservationSections, features as environmentalConservationFeatures, vision as environmentalConservationVision } from './environmentalConservation';
import { sections as culturalRestorationSections, features as culturalRestorationFeatures, vision as culturalRestorationVision } from './culturalRestoration';

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
    activities: culturalRestorationFeatures.slice(0, 3).map(feature => feature.title),
    impact: culturalRestorationSections.find(section => section.id === "impact").content.split(". ").slice(0, 3).map(sentence => sentence + "."),
    getInvolved: culturalRestorationFeatures.slice(0, 3).map(feature => `Support our ${feature.title.toLowerCase()} initiatives`),
    keyFeatures: culturalRestorationFeatures.slice(0, 3).map(feature => feature.title),
    vision: culturalRestorationVision.split('.')[0] + '.'
  }
];
