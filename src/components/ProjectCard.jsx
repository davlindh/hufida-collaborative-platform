import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ title, description, onLearnMore }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <Button onClick={onLearnMore} className="mt-4">Learn More</Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;