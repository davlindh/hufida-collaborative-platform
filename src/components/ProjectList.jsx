import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects, onProjectSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          onLearnMore={() => onProjectSelect(project)}
        />
      ))}
    </div>
  );
};

export default ProjectList;