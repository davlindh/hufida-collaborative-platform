import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ project, onSuggestDirection }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-palette-primary';
      case 'ongoing':
        return 'bg-palette-secondary';
      case 'planning':
        return 'bg-palette-accent';
      default:
        return 'bg-palette-neutral-400';
    }
  };

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{project.title}</CardTitle>
          <Badge className={`${getStatusColor(project.status)} text-white`}>{project.status}</Badge>
        </div>
        <CardDescription>{project.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="mb-4">{project.description}</p>
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Key Activities:</h4>
          <ul className="list-disc pl-5 mb-4">
            {project.activities.slice(0, 2).map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between mt-auto">
          <Button asChild variant="outline">
            <Link to={`/projects/${project.id}`}>Learn More</Link>
          </Button>
          <Button onClick={() => onSuggestDirection(project)}>
            Suggest Direction
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
