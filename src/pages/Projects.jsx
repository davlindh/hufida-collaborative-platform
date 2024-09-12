import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Information Clearing House",
      description: "Setting up a Documentation Center on African development to provide valuable resources and information.",
    },
    {
      title: "Wildlife Conservation",
      description: "Assisting in the conservation, restoration, and protection of wildlife, habitats, and associated biodiversity in Africa.",
    },
    {
      title: "Humanitarian Aid Delivery",
      description: "Delivering food and non-food items to vulnerable persons in conflict zones, focusing on women, children, the elderly, and disabled individuals.",
    },
    {
      title: "Development Newsletter",
      description: "Producing a monthly newsletter on development and humanitarian challenges in Africa to raise awareness and share insights.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
      <p className="mb-8">Explore our ongoing projects and initiatives that align with HUFIDA's objectives and methods.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;