import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import ProjectCard from '../components/ProjectCard';
import LearnMoreDialog from '../components/LearnMoreDialog';
import Pagination from '../components/Pagination';
import { useProjects } from '../hooks/useProjects';

const Projects = () => {
  const { searchTerm, setSearchTerm, currentPage, totalPages, currentProjects, paginate } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const [suggestion, setSuggestion] = useState('');
  const [nuanceValue, setNuanceValue] = useState([50]);

  const handleSuggestDirection = (project) => {
    setSelectedProject(project);
  };

  const handleSubmitSuggestion = () => {
    // Here you would typically send this suggestion to your backend
    console.log(`New direction suggested for ${selectedProject.title}: ${suggestion}`);
    console.log(`Nuance value: ${nuanceValue[0]}`);
    setSelectedProject(null);
    setSuggestion('');
    setNuanceValue([50]);
  };

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Projects</h1>
      <p className="mb-6 sm:mb-8 text-sm sm:text-base">Explore our ongoing projects and initiatives that align with HUFIDA's objectives and methods. You can suggest new directions for our projects!</p>
      
      <Input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentProjects.map((project) => (
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