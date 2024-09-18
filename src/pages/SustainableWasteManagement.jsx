import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { projectsData } from '../data/projectsData';

const SustainableWasteManagement = () => {
  const project = projectsData["sustainable-waste-management"];

  return (
    <ProjectLayout
      title={project.title}
      subtitle="Revolutionizing waste management through innovation and community engagement"
      sections={project.sections}
      features={project.features}
      vision={project.vision}
      partnerships={project.partnerships}
    />
  );
};

export default SustainableWasteManagement;
