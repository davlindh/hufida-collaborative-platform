import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProjectCard from '../components/ProjectCard';
import LearnMoreDialog from '../components/LearnMoreDialog';
import { useProjects } from '../hooks/useProjects';
import { motion } from "framer-motion";

const Projects = () => {
  const { searchTerm, setSearchTerm, projects } = useProjects();
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

  const filteredProjects = projects.filter(project => 
    (categoryFilter === 'All' || project.category === categoryFilter) &&
    (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     project.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-5xl font-bold mb-6 text-center text-deepGreen-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Projects
      </motion.h1>
      <motion.p 
        className="mb-12 text-xl text-center text-deepGreen-600 max-w-3xl mx-auto"
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
          className="flex-grow neu-input"
        />
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-[180px] neu-select">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                },
              },
            }}
          >
            <ProjectCard
              project={project}
              onSuggestDirection={handleSuggestDirection}
            />
          </motion.div>
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
