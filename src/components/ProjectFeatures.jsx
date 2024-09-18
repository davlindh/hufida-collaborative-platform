import React from 'react';
import { motion } from "framer-motion";
import { responsiveGridStyles } from '../utils/styleUtils';
import FeatureDialog from './FeatureDialog';

const ProjectFeatures = ({ features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Key Features</h2>
    <div className={responsiveGridStyles({ cols: 3 })}>
      {features.map((feature, index) => (
        <FeatureDialog key={index} feature={feature} />
      ))}
    </div>
  </motion.div>
);

export default ProjectFeatures;