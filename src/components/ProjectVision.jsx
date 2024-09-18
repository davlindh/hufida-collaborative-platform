import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { neuCardStyles } from '../utils/styleUtils';

const ProjectVision = ({ vision, partnerships }) => (
  <motion.section 
    className="mt-12 px-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Project Vision</h2>
    <Card className={`${neuCardStyles({ elevation: "low" })} bg-gradient-to-br from-deepGreen-50 to-deepGreen-100`}>
      <CardContent className="p-6">
        <p className="text-deepGreen-700 mb-6">{vision}</p>
        {partnerships && (
          <div>
            <h3 className="text-xl font-semibold mb-3 text-deepGreen-800">Partnerships</h3>
            <p className="text-deepGreen-700">
              We're collaborating with{' '}
              {partnerships.map((partner, index) => (
                <React.Fragment key={partner}>
                  <span className="font-semibold text-deepGreen-800">{partner}</span>
                  {index < partnerships.length - 2 && ', '}
                  {index === partnerships.length - 2 && ', and '}
                </React.Fragment>
              ))}
              {partnerships.length > 1 ? ' to ensure the project\'s success.' : ' to ensure the project\'s success.'}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  </motion.section>
);

export default ProjectVision;
