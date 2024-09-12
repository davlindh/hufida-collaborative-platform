import React, { lazy, Suspense } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Globe, Users, Rocket, Target, BookOpen, History as HistoryIcon, Award, Handshake, Compass, UserPlus } from 'lucide-react';

const History = lazy(() => import('../components/History'));
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
    { id: "mission", title: "Mission", icon: <Globe className="mr-2 h-6 w-6 text-deepGreen-600" /> },
    { id: "objectives", title: "Objectives", icon: <Target className="mr-2 h-6 w-6 text-deepGreen-600" /> },
    { id: "methods", title: "Methods", icon: <Rocket className="mr-2 h-6 w-6 text-deepGreen-600" /> },
    { id: "structure", title: "Structure", icon: <Users className="mr-2 h-6 w-6 text-deepGreen-600" /> },
    { id: "values", title: "Values", icon: <BookOpen className="mr-2 h-6 w-6 text-deepGreen-600" /> },
  ];

  const detailedSections = [
    { id: "history", title: "Our History", icon: <HistoryIcon className="mr-2 h-6 w-6 text-deepGreen-600" />, component: History },
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
      
      <Tabs defaultValue="mission" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-5">
          {sections.map(section => (
            <TabsTrigger key={section.id} value={section.id}>
              <span className="flex items-center">
                {section.icon}
                {section.title}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map(section => (
          <TabsContent key={section.id} value={section.id}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Content for each section */}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {detailedSections.map((section, index) => (
          <Card key={section.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center">
                {section.icon}
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64">
                <Suspense fallback={<div>Loading...</div>}>
                  <section.component />
                </Suspense>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default About;