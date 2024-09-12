import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Community Garden Initiative",
    description: "Transform unused urban spaces into thriving community gardens.",
    faveScore: 95,
  },
  {
    title: "Digital Literacy for Seniors",
    description: "Empower seniors with essential digital skills for the modern world.",
    faveScore: 88,
  },
  {
    title: "Clean Energy Innovation Challenge",
    description: "Crowdsource innovative solutions for sustainable energy production.",
    faveScore: 92,
  },
];

const ProjectShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>Fave Score: {project.faveScore}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{project.description}</p>
            <Button>Learn More</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectShowcase;