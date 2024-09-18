import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { projectsData } from '../data/projectsData';

const FavingProject = () => {
  const project = projectsData["faving"];

  return (
    <ProjectLayout
      title={project.title}
      subtitle="Revolutionizing social interactions and knowledge sharing through innovative technology"
      sections={project.sections}
      features={project.features}
      vision={project.vision}
    />
  );
};

export default FavingProject;
