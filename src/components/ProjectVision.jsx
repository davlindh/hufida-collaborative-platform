import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { neuCardStyles } from '../utils/styleUtils';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Lightbulb, Users, Rocket, Globe } from 'lucide-react';

const ProjectVision = ({ vision, partnerships }) => {
  const visionIcons = [
    { icon: Lightbulb, label: "Innovation" },
    { icon: Users, label: "Collaboration" },
    { icon: Rocket, label: "Progress" },
    { icon: Globe, label: "Global Impact" }
  ];

  return (
    <motion.section 
      className="mt-12 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">Project Vision</h2>
      <Card className={`${neuCardStyles({ elevation: "medium" })} bg-gradient-to-br from-deepGreen-700 to-deepGreen-800 overflow-hidden`}>
        <CardContent className="p-6">
          <ScrollArea className="h-[400px] pr-4">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {visionIcons.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <item.icon className="w-12 h-12 text-deepGreen-300 mb-2" />
                  <span className="text-white text-sm">{item.label}</span>
                </div>
              ))}
            </div>
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
};

export default ProjectVision;
