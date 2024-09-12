import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectSelection = ({ selectedProject, setSelectedProject }) => {
  const projects = [
    { id: 1, name: "Sustainable Waste Management in Bamenda", description: "Support our efforts to revolutionize waste management in Bamenda." },
    { id: 2, name: "Digital Literacy Program", description: "Help us provide digital skills training to underserved communities." },
    { id: 3, name: "Clean Water Initiative", description: "Contribute to our project bringing clean water to rural areas." },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">Choose a Project to Support</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
              <Button 
                className="mt-4 w-full"
                variant={selectedProject === project.id ? "default" : "outline"}
                onClick={() => setSelectedProject(project.id)}
              >
                {selectedProject === project.id ? "Selected" : "Select"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectSelection;