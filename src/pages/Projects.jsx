import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../components/ProjectCard';
import SuggestDirectionDialog from '../components/SuggestDirectionDialog';

const Projects = () => {
  const { searchTerm, setSearchTerm, categoryFilter, setCategoryFilter, filteredProjects } = useProjects();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSuggestDirection = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 min-h-screen bg-deepGreen-50 bg-opacity-50 bg-[url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E')]">
      <motion.h1 
        className="text-5xl font-bold mb-2 text-center text-deepGreen-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Projects
      </motion.h1>
      <motion.p 
        className="mb-8 text-xl text-center text-deepGreen-600 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore our ongoing projects and initiatives that align with HUFIDA's objectives and methods. You can suggest new directions for our projects!
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
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
            <SelectItem value="All">All Categories</SelectItem>
            <SelectItem value="Technology">Technology</SelectItem>
            <SelectItem value="Environment">Environment</SelectItem>
            <SelectItem value="Research">Research</SelectItem>
            <SelectItem value="Education">Education</SelectItem>
            <SelectItem value="Health">Health</SelectItem>
            <SelectItem value="Energy">Energy</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSuggestDirection={handleSuggestDirection}
          />
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.p
          className="text-center text-xl text-deepGreen-600 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No projects found. Try adjusting your search or filter.
        </motion.p>
      )}

      <SuggestDirectionDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;
