import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { projectsData } from '../data/projectsData';

const SustainabilityIncubatorLab = () => {
  const project = projectsData["sustainability-incubator-lab"];

  return (
    <ProjectLayout
      title={project.title}
      subtitle="Advancing science, innovation, and strategic leadership for a sustainable future"
      sections={project.sections}
      features={project.features}
      vision={project.vision}
    />
  );
};

export default SustainabilityIncubatorLab;
