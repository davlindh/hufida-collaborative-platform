import React from 'react';
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Globe, Users, Rocket, Target, BookOpen, HistoryIcon, Award, Handshake, Compass, UserPlus } from 'lucide-react';
import { neuCardStyles, neuButtonStyles, responsiveGridStyles } from '../utils/styleUtils';
import AboutSection from '../components/AboutSection';
import AboutDetailedSection from '../components/AboutDetailedSection';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    { id: "nature", title: "Nature", icon: <Globe className="h-5 w-5" />, content: "HUFIDA is a voluntary not-for-profit association (Ideell Forening) that exists in perpetuity, as established in our constitution." },
    { id: "objectives", title: "Objectives", icon: <Target className="h-5 w-5" />, content: "Our objectives include creating awareness about poverty and sustainable development challenges in Africa, empowering vulnerable groups, supporting local African communities for integrated development and socio-cultural cohesion, and developing infrastructure for stable future aid." },
    { id: "methods", title: "Methods", icon: <Rocket className="h-5 w-5" />, content: "We organize seminars and workshops, set up an Information Clearing House and Documentation Center, assist in wildlife conservation, deliver humanitarian aid, produce a monthly newsletter, and collaborate with other organizations for knowledge sharing and capacity building." },
    { id: "structure", title: "Structure", icon: <Users className="h-5 w-5" />, content: "HUFIDA has three main organs: the General Assembly (decision-making body consisting of all members), the Management Board (responsible for day-to-day operations, led by a Director), and the International Advisory Board (composed of five persons of high moral and international repute)." },
    { id: "membership", title: "Membership", icon: <UserPlus className="h-5 w-5" />, content: "Membership is open to any person or entity interested in contributing to our objectives. Applications are addressed to the Management Board. Members can serve as volunteers for the Association." },
  ];

  const detailedSections = [
    { id: "history", title: "Our History", icon: <HistoryIcon className="h-6 w-6" /> },
    { id: "impact", title: "Impact and Achievements", icon: <Award className="h-6 w-6" /> },
    { id: "partnerships", title: "Partnerships and Collaborations", icon: <Handshake className="h-6 w-6" /> },
    { id: "future", title: "Future Goals", icon: <Compass className="h-6 w-6" /> },
    { id: "team", title: "Our Team and Leadership", icon: <UserPlus className="h-6 w-6" /> },
  ];

  return (
    <ScrollArea className="h-screen">
      <div className="min-h-screen bg-gradient-to-b from-deepGreen-800 to-deepGreen-600 text-white p-4 sm:p-8">
        <div className="container mx-auto max-w-5xl">
          <motion.h1 
            className="text-4xl font-bold mb-8 text-center"
            {...fadeIn}
          >
            About HUFIDA
          </motion.h1>
          <motion.p 
            className="mb-12 text-lg text-center"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) is dedicated to addressing development challenges in Africa through innovative approaches.
          </motion.p>
          
          <motion.div 
            className={`${neuCardStyles({ elevation: "medium" })} bg-deepGreen-700 mb-12 overflow-hidden`}
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Tabs defaultValue="nature" className="w-full">
              <TabsList className={`${neuCardStyles({ elevation: "low" })} bg-deepGreen-600 p-2 rounded-t-lg flex justify-center`}>
                {sections.map(section => (
                  <TabsTrigger 
                    key={section.id} 
                    value={section.id} 
                    className={`${neuButtonStyles({ variant: "secondary", size: "sm" })} text-sm flex items-center justify-center p-2 m-1`}
                  >
                    {section.icon}
                    <span className="hidden sm:inline ml-2">{section.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {sections.map(section => (
                <TabsContent key={section.id} value={section.id} className="p-6">
                  <AboutSection
                    icon={section.icon}
                    title={section.title}
                    content={section.content}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
          
          <motion.div
            className={`${responsiveGridStyles({ cols: 2 })} gap-6 mb-12`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {detailedSections.map((section) => (
              <AboutDetailedSection
                key={section.id}
                id={section.id}
                title={section.title}
                icon={section.icon}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default About;
