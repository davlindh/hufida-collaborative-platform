import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "faving",
    title: "Faving: The Social Exchange Engine",
    description: "HUFIDA's groundbreaking digital platform designed to revolutionize social interactions, knowledge sharing, and collaboration.",
  },
  {
    id: "sustainable-waste-management",
    title: "Sustainable Waste Management in Bamenda",
    description: "A comprehensive plan to revolutionize waste management and composting operations in Bamenda, Cameroon, through the deployment of a mobile application integrated with Mappost's route optimization technology.",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Projects</h1>
      <p className="mb-6 sm:mb-8 text-sm sm:text-base">Explore our ongoing projects and initiatives that align with HUFIDA's objectives and methods.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{project.description}</CardDescription>
              <Button asChild>
                <Link to={`/projects/${project.id}`}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;