import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../components/ProjectCard';
import SuggestDirectionDialog from '../components/SuggestDirectionDialog';
import { TooltipProvider } from "@/components/ui/tooltip";
import { neuContainerStyles, responsiveGridStyles, neuCardStyles, neuInputStyles } from '../utils/styleUtils';

const Projects = () => {
  const { searchTerm, setSearchTerm, categoryFilter, setCategoryFilter, filteredProjects } = useProjects();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSuggestDirection = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-deepGreen-800 to-deepGreen-600 py-12 px-4 sm:px-6 lg:px-8">
      <TooltipProvider>
        <div className={`${neuContainerStyles({ padding: "large" })} max-w-7xl mx-auto`}>
          <motion.h1 
            className="text-5xl font-bold mb-2 text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Projects
          </motion.h1>
          <motion.p 
            className="mb-8 text-xl text-center text-deepGreen-100 max-w-3xl mx-auto"
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
              className={`${neuInputStyles({ state: "default" })} flex-grow text-deepGreen-800`}
            />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className={`${neuCardStyles({ elevation: "low" })} w-full sm:w-[180px] bg-deepGreen-100 text-deepGreen-800`}>
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
            className={`${responsiveGridStyles({ cols: 3 })} gap-8 mb-16`}
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
              className="text-center text-xl text-deepGreen-100 mt-12"
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
            projectTitle={selectedProject?.title}
          />
        </div>
      </TooltipProvider>
    </div>
  );
};

export default Projects;
