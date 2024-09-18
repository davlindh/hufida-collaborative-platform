import React from 'react';
import { motion } from "framer-motion";

const ProjectHeader = ({ title, subtitle }) => (
  <div className="bg-deepGreen-700 text-white py-8 px-6">
    <motion.h1 
      className="text-3xl sm:text-4xl font-bold mb-2 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h1>
    {subtitle && (
      <motion.p
        className="text-lg text-center text-deepGreen-100 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default ProjectHeader;
