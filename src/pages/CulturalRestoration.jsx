import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import { sections, features, vision } from '../data/culturalRestoration';

const CulturalRestoration = () => {
  const project = {
    title: "Cultural and Heritage Restoration",
    sections: sections,
    features: features,
    vision: vision
  };

  return <ProjectDetails project={project} />;
};

export default CulturalRestoration;
