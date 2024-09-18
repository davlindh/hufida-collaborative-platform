import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { getStatusColor, truncateText, neuCardStyles, neuButtonStyles } from '../utils/styleUtils';

const ProjectCard = ({ project, onSuggestDirection }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className={`${neuCardStyles({ elevation: "medium" })} bg-gradient-to-br from-deepGreen-50 to-deepGreen-100 overflow-hidden`}>
        <CardHeader className="pb-2 bg-deepGreen-200 bg-opacity-30">
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-2xl font-bold text-deepGreen-800">{project.title}</CardTitle>
            <Badge className={`${getStatusColor(project.status)} text-sm`}>{project.status}</Badge>
          </div>
          <p className="text-sm font-medium text-deepGreen-600">{project.category}</p>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between p-4">
          <p className="mb-4 text-deepGreen-700">{truncateText(project.description, 150)}</p>
          <div className="flex justify-between mt-auto">
            <Button 
              asChild 
              variant="outline" 
              className={neuButtonStyles({ variant: "secondary", size: "sm" })}
            >
              <Link to={project.id === 'renewable-energy' ? '/projects/renewable-energy-solutions' : `/projects/${project.id}`}>
                Learn More
              </Link>
            </Button>
            <Button 
              onClick={() => onSuggestDirection(project)} 
              className={neuButtonStyles({ variant: "primary", size: "sm" })}
            >
              Suggest Direction
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
