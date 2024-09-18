import React from 'react';
import { motion } from "framer-motion";
import { responsiveGridStyles, neuCardStyles } from '../utils/styleUtils';
import FeatureDialog from './FeatureDialog';

const ProjectFeatures = ({ features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="mt-12"
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Key Features</h2>
    <div className={`${responsiveGridStyles({ cols: 3 })} gap-6`}>
      {features.map((feature, index) => (
        <div key={index} className={`${neuCardStyles({ elevation: "low" })} p-4 rounded-xl`}>
          <FeatureDialog feature={feature} />
        </div>
      ))}
    </div>
  </motion.div>
);

export default ProjectFeatures;
