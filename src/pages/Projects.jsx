import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProjectCard from '../components/ProjectCard';
import LearnMoreDialog from '../components/LearnMoreDialog';
import Pagination from '../components/Pagination';
import { motion } from "framer-motion";
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [suggestion, setSuggestion] = useState('');
  const [nuanceValue, setNuanceValue] = useState([50]);

  const projectsPerPage = 4;

  const filteredProjects = projectsData.filter(project => 
    (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     project.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (categoryFilter === 'All' || project.category === categoryFilter)
  );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <PageHeader />
      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        categories={categories}
      />
      <ProjectGrid
        projects={currentProjects}
        handleSuggestDirection={handleSuggestDirection}
      />
      <PaginationSection
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProjects.length / projectsPerPage)}
        paginate={paginate}
        filteredProjects={filteredProjects}
        projectsPerPage={projectsPerPage}
      />
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

const PageHeader = () => (
  <>
    <motion.h1 
      className="text-4xl font-bold mb-6 text-center text-deepGreen-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Our Projects
    </motion.h1>
    <motion.p 
      className="mb-8 text-lg text-center text-deepGreen-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Explore our ongoing projects that empower African communities, preserve cultural heritage, and build a future of sustainable prosperity.
    </motion.p>
  </>
);

const SearchAndFilter = ({ searchTerm, setSearchTerm, categoryFilter, setCategoryFilter, categories }) => (
  <motion.div 
    className="flex flex-col sm:flex-row gap-4 mb-6"
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
        {categories.map((category) => (
          <SelectItem key={category} value={category}>{category}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </motion.div>
);

const ProjectGrid = ({ projects, handleSuggestDirection }) => (
  <motion.div 
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
    {projects.map((project) => (
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
);

const PaginationSection = ({ currentPage, totalPages, paginate, filteredProjects, projectsPerPage }) => (
  filteredProjects.length > projectsPerPage && (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={paginate}
    />
  )
);

export default Projects;
