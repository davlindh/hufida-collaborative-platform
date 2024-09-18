import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { neuCardStyles } from '../utils/styleUtils';
import { Lightbulb, Users, Rocket, Globe, Leaf, Droplet, Zap, Recycle } from 'lucide-react';

const ProjectVision = ({ vision, partnerships, projectId }) => {
  const getProjectIcons = (id) => {
    switch (id) {
      case 'faving':
        return [
          { icon: Lightbulb, label: "Innovation", description: "Pioneering social exchange technology" },
          { icon: Users, label: "Collaboration", description: "Fostering global community engagement" },
          { icon: Rocket, label: "Progress", description: "Accelerating collective intelligence" },
          { icon: Globe, label: "Global Impact", description: "Addressing complex global issues" }
        ];
      case 'sustainable-waste-management':
        return [
          { icon: Recycle, label: "Waste Reduction", description: "Optimizing collection and recycling" },
          { icon: Leaf, label: "Composting", description: "Enhancing soil fertility" },
          { icon: Users, label: "Community Engagement", description: "Educating on waste segregation" },
          { icon: Rocket, label: "Innovation", description: "Implementing smart waste solutions" }
        ];
      case 'sustainability-incubator-lab':
        return [
          { icon: Lightbulb, label: "Innovation", description: "Advancing sustainable solutions" },
          { icon: Users, label: "Collaboration", description: "Fostering cross-sector partnerships" },
          { icon: Leaf, label: "Sustainability", description: "Embedding eco-friendly practices" },
          { icon: Globe, label: "National Impact", description: "Transforming Cameroon's economy" }
        ];
      case 'digital-literacy':
        return [
          { icon: Lightbulb, label: "Skills Development", description: "Enhancing digital competencies" },
          { icon: Users, label: "Inclusivity", description: "Bridging the digital divide" },
          { icon: Rocket, label: "Empowerment", description: "Boosting employability" },
          { icon: Globe, label: "Connectivity", description: "Expanding digital access" }
        ];
      case 'clean-water-initiative':
        return [
          { icon: Droplet, label: "Clean Water", description: "Providing safe drinking water" },
          { icon: Users, label: "Community Management", description: "Empowering local water stewardship" },
          { icon: Leaf, label: "Sustainability", description: "Implementing eco-friendly solutions" },
          { icon: Globe, label: "Health Impact", description: "Reducing water-borne diseases" }
        ];
      case 'renewable-energy-solutions':
        return [
          { icon: Zap, label: "Clean Energy", description: "Harnessing renewable sources" },
          { icon: Users, label: "Community Power", description: "Enabling local energy management" },
          { icon: Leaf, label: "Environmental Protection", description: "Reducing carbon emissions" },
          { icon: Rocket, label: "Economic Growth", description: "Fostering green job creation" }
        ];
      default:
        return [
          { icon: Lightbulb, label: "Innovation", description: "Pioneering sustainable solutions" },
          { icon: Users, label: "Collaboration", description: "Uniting diverse stakeholders" },
          { icon: Rocket, label: "Progress", description: "Accelerating positive change" },
          { icon: Globe, label: "Global Impact", description: "Creating worldwide ripple effects" }
        ];
    }
  };

  const visionIcons = getProjectIcons(projectId);

  return (
    <motion.section 
      className="mt-8 px-4 sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Project Vision</h2>
      <Card className={`${neuCardStyles({ elevation: "medium" })} bg-gradient-to-br from-deepGreen-700 to-deepGreen-800`}>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {visionIcons.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <item.icon className="w-10 h-10 text-deepGreen-300 mb-2" />
                <span className="text-white text-sm font-semibold mb-1">{item.label}</span>
                <span className="text-deepGreen-100 text-xs">{item.description}</span>
              </div>
            ))}
          </div>
          <p className="text-white mb-6 leading-relaxed text-sm">{vision}</p>
          {partnerships && partnerships.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Collaborative Partnerships</h3>
              <p className="text-deepGreen-100 leading-relaxed text-sm">
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
