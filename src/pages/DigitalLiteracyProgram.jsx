import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { projectsData } from '../data/projectsData';

const DigitalLiteracyProgram = () => {
  const project = projectsData["digital-literacy"];

  return (
    <ProjectLayout
      title={project.title}
      subtitle="Empowering communities across Africa with essential digital skills for the 21st century"
      sections={project.sections}
      features={project.features}
      vision={project.vision}
    />
  );
};

export default DigitalLiteracyProgram;
