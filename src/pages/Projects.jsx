import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

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

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-500';
      case 'in progress':
        return 'bg-yellow-500';
      case 'planning':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

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
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{project.title}</CardTitle>
                <Badge className={`${getStatusColor(project.status)} text-white`}>{project.status}</Badge>
              </div>
              <CardDescription>{project.category}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{project.description}</p>
              <Button asChild className="mt-auto">
                <Link to={`/projects/${project.id}`}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProjects.length > projectsPerPage && (
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(filteredProjects.length / projectsPerPage) }, (_, i) => (
            <Button
              key={i}
              onClick={() => paginate(i + 1)}
              variant={currentPage === i + 1 ? "default" : "outline"}
              className="mx-1"
            >
              {i + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;