import React from 'react';
import { motion } from "framer-motion";

const ProjectHeader = ({ title }) => (
  <motion.h1 
    className="text-4xl font-bold mb-6 mt-8 px-4 py-2 text-center text-deepGreen-900 bg-deepGreen-50"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {title}
  </motion.h1>
);

export default ProjectHeader;
