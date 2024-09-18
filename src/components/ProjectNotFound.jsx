import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { neuCardStyles, neuButtonStyles } from '../utils/styleUtils';

const ProjectNotFound = () => (
  <motion.div
    className="container mx-auto mt-8 px-4 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className={neuCardStyles({ elevation: "medium" })}>
      <CardContent className="p-8">
        <h2 className="text-3xl font-semibold mb-4 text-deepGreen-800">Project Not Found</h2>
        <p className="text-xl text-deepGreen-600 mb-8">We couldn't find the project you're looking for. It may have been moved or doesn't exist.</p>
        <Button asChild className={neuButtonStyles({ variant: "primary", size: "lg" })}>
          <Link to="/projects">Return to Projects</Link>
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

export default ProjectNotFound;