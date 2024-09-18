import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useProjects } from '../hooks/useProjects';

const Projects = () => {
  const { searchTerm, setSearchTerm, categoryFilter, setCategoryFilter, filteredProjects } = useProjects();

  const getStatusColor = (status) => {
    switch (status) {
      case 'Planning': return 'bg-yellow-200 text-yellow-800';
      case 'Active': return 'bg-green-200 text-green-800';
      case 'In Progress': return 'bg-blue-200 text-blue-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 min-h-screen bg-deepGreen-50 bg-opacity-50 bg-[url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/%3E%3Ccircle cx=\"13\" cy=\"13\" r=\"3\"/%3E%3C/g%3E%3C/svg%3E')]">
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
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-bold text-deepGreen-800">{project.title}</CardTitle>
                  <Badge className={`${getStatusColor(project.status)} text-sm`}>{project.status}</Badge>
                </div>
                <p className="text-sm font-medium text-deepGreen-600">{project.category}</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="mb-4 text-deepGreen-700">{project.description}</p>
                <div className="flex justify-between mt-auto">
                  <Button asChild variant="outline" className="bg-deepGreen-100 text-deepGreen-800 hover:bg-deepGreen-200">
                    <Link to={`/projects/${project.id}`}>Learn More</Link>
                  </Button>
                  <Button className="bg-deepGreen-600 text-white hover:bg-deepGreen-700">
                    Suggest Direction
                  </Button>
                </div>
              </CardContent>
            </Card>
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
    </div>
  );
};

export default Projects;
