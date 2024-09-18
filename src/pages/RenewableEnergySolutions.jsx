import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { projectsData } from '../data/projectsData';

const RenewableEnergySolutions = () => {
  const project = projectsData["renewable-energy-solutions"];

  return (
    <ProjectLayout
      title={project.title}
      subtitle="Empowering Africa with sustainable and accessible clean energy solutions"
      sections={project.sections}
      features={project.features}
      vision={project.vision}
    />
  );
};

export default RenewableEnergySolutions;