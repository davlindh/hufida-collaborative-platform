import React from 'react';
import ProjectAbout from './ProjectAbout';

const ProjectDetails = ({ project }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">{project.title}</h2>
      <ProjectAbout project={project} />
    </div>
  );
};

export default ProjectDetails;