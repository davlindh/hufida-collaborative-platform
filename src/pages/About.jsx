import React, { lazy, Suspense } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Globe, Users, Rocket, Target, BookOpen, HistoryIcon, Award, Handshake, Compass, UserPlus, FileText, Briefcase } from 'lucide-react';
import AboutSection from '../components/AboutSection';

const HistoryComponent = lazy(() => import('../components/History'));
const ImpactAchievements = lazy(() => import('../components/ImpactAchievements'));
const PartnershipsCollaborations = lazy(() => import('../components/PartnershipsCollaborations'));
const FutureGoals = lazy(() => import('../components/FutureGoals'));
const TeamLeadership = lazy(() => import('../components/TeamLeadership'));

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    { id: "nature", title: "Nature", icon: <Globe className="mr-2 h-6 w-6 text-deepGreen-600" />, content: "HUFIDA is a voluntary not-for-profit association (Ideell Forening) that exists in perpetuity, as established in our constitution." },
    { id: "objectives", title: "Objectives", icon: <Target className="mr-2 h-6 w-6 text-deepGreen-600" />, content: "Our objectives include creating awareness about poverty and sustainable development challenges in Africa, empowering vulnerable groups, supporting local African communities for integrated development and socio-cultural cohesion, and developing infrastructure for stable future aid." },
    { id: "methods", title: "Methods", icon: <Rocket className="mr-2 h-6 w-6 text-deepGreen-600" />, content: "We organize seminars and workshops, set up an Information Clearing House and Documentation Center, assist in wildlife conservation, deliver humanitarian aid, produce a monthly newsletter, and collaborate with other organizations for knowledge sharing and capacity building." },
    { id: "structure", title: "Structure", icon: <Users className="mr-2 h-6 w-6 text-deepGreen-600" />, content: "HUFIDA has three main organs: the General Assembly (decision-making body consisting of all members), the Management Board (responsible for day-to-day operations, led by a Director), and the International Advisory Board (composed of five persons of high moral and international repute)." },
    { id: "membership", title: "Membership", icon: <UserPlus className="mr-2 h-6 w-6 text-deepGreen-600" />, content: "Membership is open to any person or entity interested in contributing to our objectives. Applications are addressed to the Management Board. Members can serve as volunteers for the Association." },
    { id: "financials", title: "Financials", icon: <Briefcase className="mr-2 h-6 w-6 text-deepGreen-600" />, content: "Our resources come from membership dues, annual contributions, donations, royalties, and other sources authorized by law. The financial year runs from January 1st to December 31st. An auditor is appointed annually to review the accounts." },
    { id: "constitution", title: "Constitution", icon: <FileText className="mr-2 h-6 w-6 text-deepGreen-600" />, content: "Our constitution outlines the association's name, nature, objectives, methods, membership rules, organizational structure, and financial management. It can be amended upon approval by 2/3 of the General Assembly and validation by the Management Board." },
  ];

  const detailedSections = [
    { id: "history", title: "Our History", icon: <HistoryIcon className="mr-2 h-6 w-6 text-deepGreen-600" />, component: HistoryComponent },
    { id: "impact", title: "Impact and Achievements", icon: <Award className="mr-2 h-6 w-6 text-deepGreen-600" />, component: ImpactAchievements },
    { id: "partnerships", title: "Partnerships and Collaborations", icon: <Handshake className="mr-2 h-6 w-6 text-deepGreen-600" />, component: PartnershipsCollaborations },
    { id: "future", title: "Future Goals", icon: <Compass className="mr-2 h-6 w-6 text-deepGreen-600" />, component: FutureGoals },
    { id: "team", title: "Our Team and Leadership", icon: <UserPlus className="mr-2 h-6 w-6 text-deepGreen-600" />, component: TeamLeadership },
  ];

  return (
    <div className="container mx-auto mt-8 px-4 max-w-4xl">
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center text-deepGreen-800"
        {...fadeIn}
      >
        About HUFIDA
      </motion.h1>
      <motion.p 
        className="mb-8 text-lg text-center text-deepGreen-700"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) is a voluntary not-for-profit association dedicated to addressing development challenges in Africa through innovative approaches.
      </motion.p>
      
      <Tabs defaultValue="nature" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          {sections.slice(0, 4).map(section => (
            <TabsTrigger key={section.id} value={section.id}>
              <span className="flex items-center">
                {section.icon}
                <span className="hidden sm:inline">{section.title}</span>
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsList className="grid w-full grid-cols-3">
          {sections.slice(4).map(section => (
            <TabsTrigger key={section.id} value={section.id}>
              <span className="flex items-center">
                {section.icon}
                <span className="hidden sm:inline">{section.title}</span>
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map(section => (
          <TabsContent key={section.id} value={section.id}>
            <AboutSection icon={section.icon} title={section.title} content={section.content} />
          </TabsContent>
        ))}
      </Tabs>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {detailedSections.map((section) => (
          <AboutSection
            key={section.id}
            icon={section.icon}
            title={section.title}
            content={
              <ScrollArea className="h-64 pr-4">
                <Suspense fallback={<div>Loading...</div>}>
                  <section.component />
                </Suspense>
              </ScrollArea>
            }
          />
        ))}
      </motion.div>
    </div>
  );
};

export default About;