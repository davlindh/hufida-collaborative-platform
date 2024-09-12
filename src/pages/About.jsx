import React, { lazy, Suspense } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Globe, Users, Rocket, Target, BookOpen } from 'lucide-react';

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
          <TabsTrigger value="mission">Mission</TabsTrigger>
          <TabsTrigger value="objectives">Objectives</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="values">Values</TabsTrigger>
        </TabsList>
        <TabsContent value="mission">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-6 w-6 text-deepGreen-600" />
                Mission and Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>HUFIDA's mission is to create positive change in Africa through innovative development approaches and humanitarian efforts. Our vision is an Africa where communities are empowered, sustainable, and thriving.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="objectives">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-6 w-6 text-deepGreen-600" />
                Our Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Create awareness about poverty and sustainable development challenges in Africa</li>
                <li>Empower vulnerable and marginalized groups with innovative tools for poverty alleviation</li>
                <li>Support local African communities for integrated development and socio-cultural cohesion</li>
                <li>Develop and deploy infrastructure for stable future aid</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="methods">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Rocket className="mr-2 h-6 w-6 text-deepGreen-600" />
                Our Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Organize seminars, conferences, and workshops on sustainable development in Africa</li>
                <li>Set up an Information Clearing House and Documentation Center on African development</li>
                <li>Assist in wildlife conservation and habitat protection efforts</li>
                <li>Deliver humanitarian aid to vulnerable persons in conflict zones</li>
                <li>Produce a monthly newsletter on development and humanitarian challenges</li>
                <li>Collaborate with other organizations for knowledge sharing and capacity building</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="structure">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-6 w-6 text-deepGreen-600" />
                Organizational Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>HUFIDA operates with three main organs:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>General Assembly:</strong> The decision-making body consisting of all members</li>
                <li><strong>Management Board:</strong> Responsible for day-to-day operations, led by a Director</li>
                <li><strong>International Advisory Board:</strong> Composed of five persons of high moral and international repute</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="values">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-6 w-6 text-deepGreen-600" />
                Our Core Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Innovation:</strong> We strive for innovative solutions to address development challenges in Africa.</li>
                <li><strong>Empowerment:</strong> We believe in empowering local communities to drive their own development.</li>
                <li><strong>Sustainability:</strong> Our projects focus on long-term, sustainable impact.</li>
                <li><strong>Collaboration:</strong> We work closely with partners to maximize our reach and effectiveness.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <ScrollArea className="h-[600px] w-full rounded-md border p-4 shadow-inner bg-gray-50">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="history">
            <AccordionTrigger>Our History</AccordionTrigger>
            <AccordionContent>
              <Suspense fallback={<div>Loading...</div>}>
                <History />
              </Suspense>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="impact">
            <AccordionTrigger>Impact and Achievements</AccordionTrigger>
            <AccordionContent>
              <Suspense fallback={<div>Loading...</div>}>
                <ImpactAchievements />
              </Suspense>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="partnerships">
            <AccordionTrigger>Partnerships and Collaborations</AccordionTrigger>
            <AccordionContent>
              <Suspense fallback={<div>Loading...</div>}>
                <PartnershipsCollaborations />
              </Suspense>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="future">
            <AccordionTrigger>Future Goals</AccordionTrigger>
            <AccordionContent>
              <Suspense fallback={<div>Loading...</div>}>
                <FutureGoals />
              </Suspense>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="team">
            <AccordionTrigger>Our Team and Leadership</AccordionTrigger>
            <AccordionContent>
              <Suspense fallback={<div>Loading...</div>}>
                <TeamLeadership />
              </Suspense>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
    </div>
  );
};

export default About;