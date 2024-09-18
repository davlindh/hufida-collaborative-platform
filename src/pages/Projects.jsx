import React from 'react';
import { Helmet } from 'react-helmet';
import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../components/ProjectCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Pagination from '../components/Pagination';

const Projects = () => {
  const { searchTerm, setSearchTerm, currentPage, totalPages, currentProjects, paginate } = useProjects();

  return (
    <>
      <Helmet>
        <title>Our Projects | HUFIDA</title>
        <meta name="description" content="Explore HUFIDA's ongoing projects and initiatives." />
      </Helmet>
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Projects;
