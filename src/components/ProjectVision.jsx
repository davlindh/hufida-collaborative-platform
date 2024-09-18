import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { neuCardStyles } from '../utils/styleUtils';
import { Lightbulb, Users, Rocket, Globe } from 'lucide-react';

const ProjectVision = ({ vision, partnerships }) => {
  const visionIcons = [
    { icon: Lightbulb, label: "Innovation", description: "Pioneering sustainable solutions" },
    { icon: Users, label: "Collaboration", description: "Uniting diverse stakeholders" },
    { icon: Rocket, label: "Progress", description: "Accelerating positive change" },
    { icon: Globe, label: "Global Impact", description: "Creating worldwide ripple effects" }
  ];

  return (
    <motion.section 
      className="mt-12 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">Project Vision</h2>
      <Card className={`${neuCardStyles({ elevation: "medium" })} bg-gradient-to-br from-deepGreen-700 to-deepGreen-800`}>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            {visionIcons.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <item.icon className="w-12 h-12 text-deepGreen-300 mb-2" />
                <span className="text-white text-sm font-semibold mb-1">{item.label}</span>
                <span className="text-deepGreen-100 text-xs">{item.description}</span>
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
            </div>
          )}
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default ProjectVision;
