import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getStatusColor, truncateText } from '../utils/projectUtils';

const ProjectCard = ({ project, onSuggestDirection }) => {
  return (
    <Card className="neu-card flex flex-col h-full bg-deepGreen-50 border-2 border-deepGreen-100 transform hover:scale-105 transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl text-deepGreen-800">{project.title}</CardTitle>
          <Badge className={`${getStatusColor(project.status)}`}>{project.status}</Badge>
        </div>
        <p className="text-sm text-deepGreen-600">{project.category}</p>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="mb-4 text-deepGreen-700">{truncateText(project.description, 150)}</p>
        <div className="flex justify-between mt-auto">
          <Button asChild variant="outline" className="neu-button bg-deepGreen-100 text-deepGreen-800 hover:bg-deepGreen-200 focus:ring-2 focus:ring-deepGreen-300 focus:outline-none">
            <Link to={`/projects/${project.id}`}>Learn More</Link>
          </Button>
          <Button onClick={() => onSuggestDirection(project)} className="neu-button bg-deepGreen-600 text-white hover:bg-deepGreen-700 focus:ring-2 focus:ring-deepGreen-300 focus:outline-none">
            Suggest Direction
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
