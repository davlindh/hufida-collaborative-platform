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
      <Card className={neuCardStyles({ elevation: "medium" })}>
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
            <Button asChild variant="outline" className={neuButtonStyles({ variant: "secondary" })}>
              <Link to={project.id === 'renewable-energy' ? '/projects/renewable-energy-solutions' : `/projects/${project.id}`}>
                Learn More
              </Link>
            </Button>
            <Button onClick={() => onSuggestDirection(project)} className={neuButtonStyles({ variant: "primary" })}>
              Suggest Direction
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
