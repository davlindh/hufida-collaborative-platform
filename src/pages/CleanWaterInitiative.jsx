import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { projectsData } from '../data/projectsData';

const CleanWaterInitiative = () => {
  const project = projectsData["clean-water-initiative"];

  return (
    <ProjectLayout
      title={project.title}
      subtitle="Providing sustainable access to clean water in rural African communities"
      sections={project.sections}
      features={project.features}
      vision={project.vision}
    />
  );
};

export default CleanWaterInitiative;