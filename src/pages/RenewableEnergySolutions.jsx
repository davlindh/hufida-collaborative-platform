import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectLayout from '../components/ProjectLayout';
import { useQuery } from '@tanstack/react-query';
import { projectsData } from '../data/projectsData';

const fetchProjectData = () => {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projectsData["renewable-energy-solutions"]);
    }, 500);
  });
};

const RenewableEnergySolutions = () => {
  const { data: project, isLoading, error } = useQuery({
    queryKey: ['renewable-energy-solutions'],
    queryFn: fetchProjectData,
  });

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error loading project data</div>;
  if (!project) return <div className="text-center py-10">Project not found</div>;

  return (
    <>
      <Helmet>
        <title>{project.title} | HUFIDA</title>
        <meta name="description" content={project.subtitle} />
      </Helmet>
      <ProjectLayout
        title={project.title}
        subtitle={project.subtitle}
        sections={project.sections}
        features={project.features}
        vision={project.vision}
      />
    </>
  );
};

export default RenewableEnergySolutions;
