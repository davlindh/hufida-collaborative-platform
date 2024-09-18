import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { neuCardStyles } from '../utils/styleUtils';
import { Lightbulb, Users, Rocket, Globe, Leaf, Droplet, Zap, Recycle, BookOpen, Smartphone, Wifi, Code, Briefcase, Award } from 'lucide-react';

const ProjectVision = ({ vision, partnerships, projectId }) => {
  const getProjectIcons = (id) => {
    switch (id) {
      case 'faving':
        return [
          { icon: Globe, label: "Global Impact", description: "Addressing complex global issues" },
          { icon: Users, label: "Collaboration", description: "Fostering community engagement" },
          { icon: Rocket, label: "Innovation", description: "Advancing social exchange technology" },
          { icon: Lightbulb, label: "Collective Intelligence", description: "Harnessing shared knowledge" }
        ];
      case 'sustainable-waste-management':
        return [
          { icon: Recycle, label: "Waste Reduction", description: "Optimizing collection and recycling" },
          { icon: Leaf, label: "Environmental Impact", description: "Improving urban cleanliness" },
          { icon: Users, label: "Community Engagement", description: "Promoting responsible waste practices" },
          { icon: Smartphone, label: "Technology Integration", description: "Using apps for efficient management" }
        ];
      case 'sustainability-incubator-lab':
        return [
          { icon: Lightbulb, label: "Innovation", description: "Fostering sustainable solutions" },
          { icon: Briefcase, label: "Economic Growth", description: "Driving sustainable development" },
          { icon: Users, label: "Collaboration", description: "Facilitating cross-sector partnerships" },
          { icon: Award, label: "Leadership", description: "Promoting strategic sustainability" }
        ];
      case 'digital-literacy':
        return [
          { icon: BookOpen, label: "Education", description: "Providing digital skills training" },
          { icon: Globe, label: "Accessibility", description: "Bridging the digital divide" },
          { icon: Smartphone, label: "Mobile Learning", description: "Offering on-the-go education" },
          { icon: Rocket, label: "Empowerment", description: "Enhancing career opportunities" }
        ];
      case 'clean-water-initiative':
        return [
          { icon: Droplet, label: "Clean Water", description: "Providing safe drinking water" },
          { icon: Users, label: "Community Management", description: "Empowering local water stewardship" },
          { icon: Leaf, label: "Sustainability", description: "Implementing eco-friendly solutions" },
          { icon: Award, label: "Health Impact", description: "Reducing water-borne diseases" }
        ];
      case 'renewable-energy-solutions':
        return [
          { icon: Zap, label: "Clean Energy", description: "Harnessing renewable sources" },
          { icon: Leaf, label: "Environmental Protection", description: "Reducing carbon emissions" },
          { icon: Users, label: "Community Power", description: "Enabling local energy management" },
          { icon: Briefcase, label: "Economic Growth", description: "Creating green job opportunities" }
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
          <p className="text-white mb-6 leading-relaxed text-sm">{vision}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {visionIcons.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className="text-white text-xs font-semibold mb-2">{item.label}</span>
                <item.icon className="w-8 h-8 text-deepGreen-300 mb-2" />
                <span className="text-deepGreen-100 text-xs">{item.description}</span>
              </div>
            ))}
          </div>
          {partnerships && partnerships.length > 0 && (
            <div className="mt-6">
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
