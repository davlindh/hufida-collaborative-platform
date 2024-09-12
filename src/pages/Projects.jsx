import React from 'react';
import { Input } from "@/components/ui/input";
import ProjectCard from '../components/ProjectCard';
import Pagination from '../components/Pagination';
import { useProjects } from '../hooks/useProjects';

const Projects = () => {
  const { searchTerm, setSearchTerm, currentPage, totalPages, currentProjects, paginate } = useProjects();

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Projects</h1>
      <p className="mb-6 sm:mb-8 text-sm sm:text-base">Explore our ongoing projects and initiatives that align with HUFIDA's objectives and methods.</p>
      
      <Input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={paginate}
        />
      )}
    </div>
  );
};

export default Projects;