import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ project, onSuggestDirection }) => {
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
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{project.title}</CardTitle>
          <Badge className={`${getStatusColor(project.status)} text-white`}>{project.status}</Badge>
        </div>
        <CardDescription>{project.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="mb-4">{project.description}</p>
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