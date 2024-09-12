import React, { lazy, Suspense } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TabContent from '../components/TabContent';
import CoreValues from '../components/CoreValues';

const History = lazy(() => import('../components/History'));
const ImpactAchievements = lazy(() => import('../components/ImpactAchievements'));
const PartnershipsCollaborations = lazy(() => import('../components/PartnershipsCollaborations'));
const FutureGoals = lazy(() => import('../components/FutureGoals'));
const TeamLeadership = lazy(() => import('../components/TeamLeadership'));

const About = () => {
  return (
    <div className="container mx-auto mt-8 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center">About HUFIDA</h1>
      <p className="mb-8 text-lg text-center">The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) is a voluntary not-for-profit association dedicated to addressing development challenges in Africa through innovative approaches.</p>
      
      <Tabs defaultValue="mission" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="mission">Mission</TabsTrigger>
          <TabsTrigger value="objectives">Objectives</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="structure">Structure</TabsTrigger>
        </TabsList>
        <TabsContent value="mission">
          <TabContent title="Mission and Vision">
            <p>HUFIDA's mission is to create positive change in Africa through innovative development approaches and humanitarian efforts. Our vision is an Africa where communities are empowered, sustainable, and thriving.</p>
          </TabContent>
        </TabsContent>
        <TabsContent value="objectives">
          <TabContent title="Our Objectives">
            <ul className="list-disc pl-5 space-y-2">
              <li>Create awareness about poverty and sustainable development challenges in Africa</li>
              <li>Empower vulnerable and marginalized groups with innovative tools for poverty alleviation</li>
              <li>Support local African communities for integrated development and socio-cultural cohesion</li>
              <li>Develop and deploy infrastructure for stable future aid</li>
            </ul>
          </TabContent>
        </TabsContent>
        <TabsContent value="methods">
          <TabContent title="Our Methods">
            <ul className="list-disc pl-5 space-y-2">
              <li>Organize seminars, conferences, and workshops on sustainable development in Africa</li>
              <li>Set up an Information Clearing House and Documentation Center on African development</li>
              <li>Assist in wildlife conservation and habitat protection efforts</li>
              <li>Deliver humanitarian aid to vulnerable persons in conflict zones</li>
              <li>Produce a monthly newsletter on development and humanitarian challenges</li>
              <li>Collaborate with other organizations for knowledge sharing and capacity building</li>
            </ul>
          </TabContent>
        </TabsContent>
        <TabsContent value="structure">
          <TabContent title="Organizational Structure">
            <p>HUFIDA operates with three main organs:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>General Assembly:</strong> The decision-making body consisting of all members</li>
              <li><strong>Management Board:</strong> Responsible for day-to-day operations, led by a Director</li>
              <li><strong>International Advisory Board:</strong> Composed of five persons of high moral and international repute</li>
            </ul>
          </TabContent>
        </TabsContent>
      </Tabs>

      <CoreValues />
      
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