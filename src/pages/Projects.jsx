import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import ProjectCard from '../components/ProjectCard';
import Pagination from '../components/Pagination';
import { useProjects } from '../hooks/useProjects';

const Projects = () => {
  const { searchTerm, setSearchTerm, currentPage, totalPages, currentProjects, paginate } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const [suggestion, setSuggestion] = useState('');

  const handleSuggestDirection = (project) => {
    setSelectedProject(project);
  };

  const handleSubmitSuggestion = () => {
    // Here you would typically send this suggestion to your backend
    console.log(`New direction suggested for ${selectedProject.title}: ${suggestion}`);
    setSelectedProject(null);
    setSuggestion('');
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
          <div key={project.id} className="flex flex-col">
            <ProjectCard project={project} />
            <Button 
              onClick={() => handleSuggestDirection(project)}
              className="mt-2"
            >
              Suggest Direction
            </Button>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={paginate}
        />
      )}

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Suggest a Direction for {selectedProject?.title}</DialogTitle>
          </DialogHeader>
          <Textarea
            placeholder="What direction would you like to see this project take?"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            className="mt-4"
          />
          <Button onClick={handleSubmitSuggestion} className="mt-4">Submit Suggestion</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;