import React from 'react';
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Users, History, Target, BookOpen } from 'lucide-react';
import { neuCardStyles, neuButtonStyles, responsiveGridStyles } from '../utils/styleUtils';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    {
      id: "journey",
      title: "Our Journey",
      icon: <History className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p>In 2019, David Lindh and Babila Fofuleng founded the Humanitarian Foundation for Innovative Development in Africa (HUFIDA), an organization born from a clear purpose: to close the widening gap in essential information that was hindering development in African communities. HUFIDA's mission was simple but ambitious—to bring together resources, data, and local insights to help communities build stronger foundations for sustainable development across Africa.</p>
          <h3 className="text-xl font-semibold">Bridging Information Gaps in Development</h3>
          <p>As HUFIDA grew, the need for innovative approaches to sustainability became increasingly apparent. Across Africa, communities faced pressing questions in how they built and used resources, and one key question arose consistently: "How much energy does this require?" This question wasn't just about numbers; it was a call to understand the broader impact of every development choice, every building, and every initiative on energy consumption and environmental sustainability.</p>
        </div>
      )
    },
    {
      id: "gbc-cam",
      title: "GBC-CAM Project",
      icon: <Globe className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <p>To address sustainability challenges, HUFIDA launched GBC-CAM—a pioneering project aimed at guiding sustainability in construction across Cameroon. GBC-CAM's mission was to direct sustainability work for buildings, ensuring that construction in communities was energy-efficient, resilient, and adapted to local climates and needs. Through GBC-CAM, HUFIDA developed metrics and standards that helped answer the question of energy requirements, providing a clear framework for sustainable building practices in the region.</p>
          <h3 className="text-xl font-semibold">A Network Grows: The African Regional Network</h3>
          <p>As GBC-CAM took root, the momentum for a larger, more connected network became undeniable. In 2021, HUFIDA initiated the African Regional Network, bringing together regional organizations, NGOs, and governments to collaborate on sustainable development goals. This network enabled local leaders, builders, and experts to share knowledge and develop shared standards, strengthening Africa's ability to tackle climate challenges with a united front.</p>
        </div>
      )
    },
    {
      id: "global-impact",
      title: "Global Impact",
      icon: <Target className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">COP27 in Egypt</h3>
          <p>The African Regional Network's work led HUFIDA to the global stage in Egypt, where COP27 was held in 2022. For the first time, the organization could present its findings and advocate for a key, universal metric: "How much energy does this require?" At COP27, HUFIDA emphasized the importance of a standardized metric that could be applied globally to measure energy demands and environmental impacts in construction.</p>
          <h3 className="text-xl font-semibold">COP28 and Local Adaptability</h3>
          <p>Building on the discussions at COP27, COP28 turned the focus toward local adaptability. HUFIDA underscored that while a universal metric was essential, every region needed the flexibility to apply it in ways that aligned with their unique climates, cultures, and resources.</p>
        </div>
      )
    },
    {
      id: "future",
      title: "Future Vision",
      icon: <BookOpen className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">COP29 and the Power of Storytelling</h3>
          <p>Looking ahead to COP29, HUFIDA's message centers on a new insight: the need for people to tell their own stories to bridge knowledge gaps for the next generation. HUFIDA is advocating that every individual, builder, and community should be able to document and share the story of their sustainability journey.</p>
          <p>As HUFIDA prepares to present at COP29, it's clear that the foundation's mission has evolved from simply bridging gaps to building a lasting legacy. Through metrics, adaptable frameworks, and shared stories, HUFIDA is helping shape a future where African communities—and communities around the world—have the tools to create sustainable, resilient futures that honor both their local contexts and global goals.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-deepGreen-800 to-deepGreen-600 text-white p-4 sm:p-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          className="text-center mb-12"
          {...fadeIn}
        >
          <h1 className="text-4xl font-bold mb-4">The Journey of HUFIDA</h1>
          <h2 className="text-2xl text-deepGreen-100">From Bridging Gaps to Building Sustainable Futures</h2>
        </motion.div>
        
        <motion.div 
          className={`${neuCardStyles({ elevation: "medium" })} bg-deepGreen-700 mb-12 overflow-hidden`}
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="journey" className="w-full">
            <TabsList className={`${neuCardStyles({ elevation: "low" })} bg-deepGreen-600 p-2 rounded-t-lg flex justify-center flex-wrap`}>
              {sections.map(section => (
                <TabsTrigger 
                  key={section.id} 
                  value={section.id} 
                  className={`${neuButtonStyles({ variant: "secondary", size: "sm" })} text-sm flex items-center gap-2 p-2 m-1 text-white`}
                >
                  {section.icon}
                  <span>{section.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {sections.map(section => (
              <TabsContent key={section.id} value={section.id} className="p-6 text-white">
                <Card className="bg-deepGreen-600 border-deepGreen-500">
                  <CardContent className="p-6">
                    {section.content}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default About;