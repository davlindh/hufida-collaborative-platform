import React from 'react';
import { motion } from "framer-motion";
import { responsiveGridStyles, neuCardStyles } from '../utils/styleUtils';
import FeatureDialog from './FeatureDialog';

const ProjectFeatures = ({ features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="mt-12 px-6"
  >
    <h2 className="text-2xl font-semibold mb-6 text-deepGreen-800">Key Features</h2>
    <div className={`${responsiveGridStyles({ cols: 3 })} gap-6`}>
      {features.map((feature, index) => (
        <div key={index} className={`${neuCardStyles({ elevation: "low" })} overflow-hidden rounded-xl bg-gradient-to-br from-deepGreen-50 to-deepGreen-100 transition-all duration-300 hover:shadow-lg`}>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-deepGreen-800">{feature.title}</h3>
            <p className="text-sm text-deepGreen-700 mb-4">{feature.description}</p>
            <FeatureDialog feature={feature} />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default ProjectFeatures;
