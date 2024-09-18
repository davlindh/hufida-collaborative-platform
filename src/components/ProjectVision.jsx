import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { neuCardStyles, neuButtonStyles } from '../utils/styleUtils';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const ProjectVision = ({ vision, partnerships }) => (
  <motion.section 
    className="mt-12 px-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Project Vision</h2>
    <Card className={`${neuCardStyles({ elevation: "medium" })} bg-gradient-to-br from-deepGreen-50 to-deepGreen-100 overflow-hidden`}>
      <CardContent className="p-6">
        <ScrollArea className="h-[200px] pr-4">
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
        </ScrollArea>
      </CardContent>
    </Card>
    <motion.div className="mt-6 flex justify-center">
      <Button
        className={`${neuButtonStyles({ variant: "primary", size: "lg" })} w-full sm:w-auto`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More About Our Vision
      </Button>
    </motion.div>
  </motion.section>
);

export default ProjectVision;
