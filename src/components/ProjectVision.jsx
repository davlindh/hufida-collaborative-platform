import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { neuCardStyles } from '../utils/styleUtils';
import { ScrollArea } from "@/components/ui/scroll-area";

const ProjectVision = ({ vision, partnerships }) => (
  <motion.section 
    className="mt-12 px-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-white">Project Vision</h2>
    <Card className={`${neuCardStyles({ elevation: "medium" })} bg-gradient-to-br from-deepGreen-700 to-deepGreen-800 overflow-hidden`}>
      <CardContent className="p-6">
        <ScrollArea className="h-[300px] pr-4">
          <p className="text-white mb-6 leading-relaxed">{vision}</p>
          {partnerships && (
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Collaborative Partnerships</h3>
              <p className="text-white leading-relaxed">
                To bring this vision to life, we're proud to collaborate with{' '}
                {partnerships.map((partner, index) => (
                  <React.Fragment key={partner}>
                    <span className="font-semibold text-deepGreen-300">{partner}</span>
                    {index < partnerships.length - 2 && ', '}
                    {index === partnerships.length - 2 && ', and '}
                  </React.Fragment>
                ))}.
                These partnerships are crucial in driving innovation, sharing expertise, and maximizing our impact.
              </p>
              <p className="text-white mt-4 leading-relaxed">
                Together, we're not just envisioning a better future; we're actively building it. 
                Our collaborative approach ensures that we leverage diverse perspectives, 
                cutting-edge technologies, and sustainable practices to create lasting positive change.
              </p>
              <p className="text-white mt-4 leading-relaxed">
                Join us in this transformative journey as we work towards a more sustainable, 
                equitable, and prosperous future for all. Your support and involvement can help 
                turn this vision into a tangible reality, creating ripple effects of positive change 
                across communities and ecosystems.
              </p>
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  </motion.section>
);

export default ProjectVision;
