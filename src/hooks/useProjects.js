import { useState, useMemo } from 'react';

const projects = [
  {
    id: "faving",
    title: "Faving: The Social Exchange Engine",
    description: "A groundbreaking digital platform designed to revolutionize social interactions, knowledge sharing, and collaboration.",
    status: "In Progress",
    category: "Technology"
  },
  {
    id: "sustainable-waste-management",
    title: "Sustainable Waste Management in Bamenda",
    description: "A comprehensive plan to revolutionize waste management and composting operations in Bamenda, Cameroon.",
    status: "Active",
    category: "Environment"
  },
  {
    id: "sustainability-incubator-lab",
    title: "The Sustainability Project Incubator LAB",
    description: "A national consultative firm advancing science, innovation, and strategic leadership for sustainable development.",
    status: "Ongoing",
    category: "Research"
  },
  {
    id: "digital-literacy",
    title: "Digital Literacy Program",
    description: "Empowering communities with essential digital skills for the 21st century.",
    status: "Planning",
    category: "Education"
  },
  {
    id: "clean-water-initiative",
    title: "Clean Water Initiative",
    description: "Providing access to clean and safe drinking water in rural African communities.",
    status: "Active",
    category: "Health"
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Solutions",
    description: "Implementing sustainable energy solutions in off-grid areas.",
    status: "In Progress",
    category: "Energy"
  }
];

export const useProjects = (projectsPerPage = 4) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    return projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const currentProjects = useMemo(() => {
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    return filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  }, [filteredProjects, currentPage, projectsPerPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return {
    searchTerm,
    setSearchTerm,
    currentPage,
    totalPages,
    currentProjects,
    paginate
  };
};