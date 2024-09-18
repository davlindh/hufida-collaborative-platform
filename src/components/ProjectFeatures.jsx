import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { neuCardStyles, neuButtonStyles, responsiveGridStyles } from '../utils/styleUtils';
import FeatureDialog from './FeatureDialog';

const ProjectFeatures = ({ features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className={`${neuCardStyles({ elevation: "medium" })} mt-12 p-6 bg-gradient-to-br from-deepGreen-700 to-deepGreen-600`}
  >
    <h2 className="text-2xl font-semibold mb-6 text-white">Key Features</h2>
    <div className={`${responsiveGridStyles({ cols: 2 })} gap-6`}>
      {features.map((feature, index) => (
        <Card 
          key={index} 
          className={`${neuCardStyles({ elevation: "low" })} overflow-hidden rounded-xl bg-deepGreen-600 transition-all duration-300 hover:shadow-lg`}
        >
          <CardHeader>
            <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white mb-4">{feature.description}</p>
            <FeatureDialog feature={feature}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${neuButtonStyles({ variant: "secondary", size: "sm" })} w-full text-deepGreen-800 bg-white hover:bg-deepGreen-100`}
              >
                Learn More
              </motion.button>
            </FeatureDialog>
          </CardContent>
        </Card>
      ))}
    </div>
  </motion.div>
);

export default ProjectFeatures;
