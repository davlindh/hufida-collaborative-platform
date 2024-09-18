import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { neuCardStyles } from '../utils/styleUtils';

const ImpactStats = () => {
  const stats = [
    { value: '500K+', label: 'Lives Impacted' },
    { value: '50+', label: 'Projects Completed' },
    { value: '10', label: 'African Countries Served' },
    { value: '95%', label: 'Sustainable Solutions' }
  ];

  return (
    <div className={`${neuCardStyles({ elevation: "medium" })} bg-gradient-to-br from-deepGreen-700 to-deepGreen-600 p-8 rounded-lg`}>
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`${neuCardStyles({ elevation: "low" })} bg-deepGreen-600 text-white`}>
              <CardContent className="flex flex-col items-center justify-center p-4">
                <span className="text-3xl font-bold mb-2">{stat.value}</span>
                <span className="text-sm text-center">{stat.label}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStats;
