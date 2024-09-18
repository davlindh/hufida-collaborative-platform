import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{project.description}</p>
        <Button asChild variant="outline" className="w-full">
          <Link to={`/projects/${project.id}`}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
