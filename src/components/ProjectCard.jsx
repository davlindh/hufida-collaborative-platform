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
      case 'in progress':
        return 'bg-palette-secondary';
      case 'planning':
        return 'bg-palette-accent';
      default:
        return 'bg-palette-neutral-400';
    }
  };

  return (
    <Card className="neu-card flex flex-col h-full bg-deepGreen-50 border-deepGreen-200">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-deepGreen-800">{project.title}</CardTitle>
          <Badge className={`${getStatusColor(project.status)} text-white`}>{project.status}</Badge>
        </div>
        <CardDescription className="text-deepGreen-600">{project.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="mb-4 text-deepGreen-700">{project.description}</p>
        <div className="flex justify-between mt-auto">
          <Button asChild variant="outline" className="neu-button bg-deepGreen-100 text-deepGreen-800 hover:bg-deepGreen-200">
            <Link to={`/projects/${project.id}`}>Learn More</Link>
          </Button>
          <Button onClick={() => onSuggestDirection(project)} className="neu-button bg-deepGreen-600 text-white hover:bg-deepGreen-700">
            Suggest Direction
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
