import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { formatDate, neuCardStyles } from '../utils/styleUtils';

const ProjectMetadata = ({ project }) => (
  <motion.section
    className="mt-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Project Details</h2>
    <Card className={neuCardStyles({ elevation: "low" })}>
      <CardContent className="p-6 grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-deepGreen-700">Start Date</h3>
          <p className="text-deepGreen-600">{formatDate(project.startDate)}</p>
        </div>
        <div>
          <h3 className="font-semibold text-deepGreen-700">Status</h3>
          <p className="text-deepGreen-600">{project.status}</p>
        </div>
        <div>
          <h3 className="font-semibold text-deepGreen-700">Category</h3>
          <p className="text-deepGreen-600">{project.category}</p>
        </div>
        <div>
          <h3 className="font-semibold text-deepGreen-700">Location</h3>
          <p className="text-deepGreen-600">{project.location}</p>
        </div>
      </CardContent>
    </Card>
  </motion.section>
);

export default ProjectMetadata;