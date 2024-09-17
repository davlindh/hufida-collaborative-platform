import { mentalHealthSocialHealingData } from './mentalHealthSocialHealing';
import { sustainableLivelihoodsData } from './sustainableLivelihoodsData';
import { sections as environmentalConservationSections, features as environmentalConservationFeatures, vision as environmentalConservationVision } from './environmentalConservation';
import { sections as culturalRestorationSections, features as culturalRestorationFeatures, vision as culturalRestorationVision } from './culturalRestoration';
import { sections as humanitarianSupportSections, features as humanitarianSupportFeatures, vision as humanitarianSupportVision } from './humanitarianSupport';
import { sections as favingProjectSections, features as favingProjectFeatures, vision as favingProjectVision } from './favingProjectData';
import { sections as sustainableWasteManagementSections, features as sustainableWasteManagementFeatures, vision as sustainableWasteManagementVision } from './sustainableWasteManagement';

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
  },
  {
    id: "humanitarian-support",
    title: "Humanitarian Support and Infrastructure Development",
    description: "Providing immediate relief to communities in crisis while building sustainable infrastructure for long-term development across Africa.",
    category: "Humanitarian Aid",
    status: "Active",
    activities: humanitarianSupportFeatures.slice(0, 3).map(feature => feature.title),
    impact: humanitarianSupportSections.find(section => section.id === "impact").content.split(". ").slice(0, 3).map(sentence => sentence + "."),
    getInvolved: humanitarianSupportFeatures.slice(0, 3).map(feature => `Support our ${feature.title.toLowerCase()} initiatives`),
    keyFeatures: humanitarianSupportFeatures.slice(0, 3).map(feature => feature.title),
    vision: humanitarianSupportVision.split('.')[0] + '.'
  },
  {
    id: "faving",
    title: "Faving: The Social Exchange Engine",
    description: "An innovative social exchange engine designed to facilitate the sharing of knowledge, skills, and resources across communities and borders.",
    category: "Technology",
    status: "In Development",
    activities: favingProjectFeatures.slice(0, 3).map(feature => feature.title),
    impact: favingProjectSections.find(section => section.id === "impact").content.split(". ").slice(0, 3).map(sentence => sentence + "."),
    getInvolved: favingProjectFeatures.slice(0, 3).map(feature => `Contribute to our ${feature.title.toLowerCase()} development`),
    keyFeatures: favingProjectFeatures.slice(0, 3).map(feature => feature.title),
    vision: favingProjectVision.split('.')[0] + '.'
  },
  {
    id: "sustainable-waste-management",
    title: "Sustainable Waste Management in Bamenda",
    description: "Revolutionizing waste management and composting operations in Bamenda, Cameroon, through innovative technology and community engagement.",
    category: "Environment",
    status: "Active",
    activities: sustainableWasteManagementFeatures.slice(0, 3).map(feature => feature.title),
    impact: sustainableWasteManagementSections.find(section => section.id === "impact").content.split(". ").slice(0, 3).map(sentence => sentence + "."),
    getInvolved: sustainableWasteManagementFeatures.slice(0, 3).map(feature => `Participate in our ${feature.title.toLowerCase()} programs`),
    keyFeatures: sustainableWasteManagementFeatures.slice(0, 3).map(feature => feature.title),
    vision: sustainableWasteManagementVision.split('.')[0] + '.'
  }
];
