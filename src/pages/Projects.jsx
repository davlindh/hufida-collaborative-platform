import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProjectCard from '../components/ProjectCard';
import LearnMoreDialog from '../components/LearnMoreDialog';
import Pagination from '../components/Pagination';
import { useProjects } from '../hooks/useProjects';

const Projects = () => {
  const { searchTerm, setSearchTerm, currentPage, totalPages, currentProjects, paginate } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const [suggestion, setSuggestion] = useState('');
  const [nuanceValue, setNuanceValue] = useState([50]);
  const [categoryFilter, setCategoryFilter] = useState('All');

  const handleSuggestDirection = (project) => {
    setSelectedProject(project);
  };

  const handleSubmitSuggestion = () => {
    console.log(`New direction suggested for ${selectedProject.title}: ${suggestion}`);
    console.log(`Nuance value: ${nuanceValue[0]}`);
    setSelectedProject(null);
    setSuggestion('');
    setNuanceValue([50]);
  };

  const filteredProjects = currentProjects.filter(project => 
    categoryFilter === 'All' || project.category === categoryFilter
  );

  const categories = ['All', ...new Set(currentProjects.map(project => project.category))];

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-deepGreen-800">Our Projects</h1>
      <p className="mb-6 text-lg text-deepGreen-600">Explore our ongoing projects and initiatives that align with HUFIDA's objectives and methods. You can suggest new directions for our projects!</p>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSuggestDirection={handleSuggestDirection}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={paginate}
        />
      )}

      <LearnMoreDialog
        project={selectedProject}
        suggestion={suggestion}
        setSuggestion={setSuggestion}
        nuanceValue={nuanceValue}
        setNuanceValue={setNuanceValue}
        onSubmitSuggestion={handleSubmitSuggestion}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;
