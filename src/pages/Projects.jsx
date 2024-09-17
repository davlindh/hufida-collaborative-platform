import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProjectCard from '../components/ProjectCard';
import LearnMoreDialog from '../components/LearnMoreDialog';
import Pagination from '../components/Pagination';
import { motion } from "framer-motion";

const projectsData = [
  {
    id: "green-jobs",
    title: "Green Job Creation and Sustainable Livelihoods",
    description: "Creating sustainable employment opportunities in renewable energy, sustainable agriculture, and eco-friendly construction.",
    category: "Economic Empowerment",
    status: "Active",
    activities: [
      "Training in Renewable Energy",
      "Sustainable Agriculture",
      "Eco-Friendly Construction"
    ],
    impact: [
      "Increased Employment",
      "Improved Food Security",
      "Environmental Conservation"
    ],
    getInvolved: [
      "Sponsor a Training Program",
      "Volunteer"
    ]
  },
  {
    id: "cultural-restoration",
    title: "Cultural Restoration and Heritage Protection",
    description: "Restoring and preserving cultural identity through language revitalization, heritage site protection, and cultural events.",
    category: "Cultural Preservation",
    status: "Ongoing",
    activities: [
      "Language Revitalization",
      "Heritage Site Preservation",
      "Cultural Festivals"
    ],
    impact: [
      "Cultural Pride",
      "Intergenerational Learning",
      "Economic Opportunities"
    ],
    getInvolved: [
      "Donate",
      "Attend a Festival"
    ]
  },
  {
    id: "trauma-recovery",
    title: "Trauma Recovery and Mental Health Services",
    description: "Providing psychological support and building local capacity for long-term mental health care in conflict-affected communities.",
    category: "Health",
    status: "Active",
    activities: [
      "Establishing Trauma Recovery Centers",
      "Training Local Counselors",
      "Community Healing Circles"
    ],
    impact: [
      "Psychological Healing",
      "Community Resilience",
      "Sustainable Care"
    ],
    getInvolved: [
      "Sponsor a Center",
      "Volunteer"
    ]
  },
  {
    id: "agroforestry",
    title: "Agroforestry and Biodiversity Conservation",
    description: "Promoting sustainable land use practices through agroforestry and efforts to protect biodiversity.",
    category: "Environment",
    status: "Ongoing",
    activities: [
      "Agroforestry Training",
      "Conservation of Wildlife Habitats",
      "Soil and Water Management"
    ],
    impact: [
      "Enhanced Food Security",
      "Increased Biodiversity",
      "Climate Resilience"
    ],
    getInvolved: [
      "Plant a Tree",
      "Adopt a Conservation Project"
    ]
  },
  {
    id: "water-management",
    title: "Water Resource Management and Climate Action",
    description: "Ensuring access to clean water and promoting climate change adaptation through sustainable resource management.",
    category: "Climate Action",
    status: "Active",
    activities: [
      "Rainwater Harvesting Systems",
      "Drip Irrigation",
      "Climate Action Plans"
    ],
    impact: [
      "Improved Water Access",
      "Increased Agricultural Productivity",
      "Climate Adaptation"
    ],
    getInvolved: [
      "Donate a Water System",
      "Volunteer for Climate Action"
    ]
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development for Community Resilience",
    description: "Building essential community infrastructure to promote resilience and long-term development.",
    category: "Community Development",
    status: "Ongoing",
    activities: [
      "School Construction",
      "Health Centers",
      "Community Centers"
    ],
    impact: [
      "Education Access",
      "Improved Health Outcomes",
      "Social Cohesion"
    ],
    getInvolved: [
      "Fund a Building",
      "Volunteer Your Expertise"
    ]
  }
];

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
        {currentProjects.map((project) => (
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

      {filteredProjects.length > projectsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredProjects.length / projectsPerPage)}
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
