import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import History from '../components/History';
import ImpactAchievements from '../components/ImpactAchievements';
import PartnershipsCollaborations from '../components/PartnershipsCollaborations';
import FutureGoals from '../components/FutureGoals';
import TeamLeadership from '../components/TeamLeadership';

const About = () => {
  const coreValues = [
    { title: "Innovation", description: "We strive for innovative solutions to address development challenges in Africa." },
    { title: "Empowerment", description: "We believe in empowering local communities to drive their own development." },
    { title: "Sustainability", description: "Our projects focus on long-term, sustainable impact." },
    { title: "Collaboration", description: "We work closely with partners to maximize our reach and effectiveness." },
  ];

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
          <Card>
            <CardHeader>
              <CardTitle>Mission and Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p>HUFIDA's mission is to create positive change in Africa through innovative development approaches and humanitarian efforts. Our vision is an Africa where communities are empowered, sustainable, and thriving.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="objectives">
          <Card>
            <CardHeader>
              <CardTitle>Our Objectives</CardTitle>
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
              <CardTitle>Our Methods</CardTitle>
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
              <CardTitle>Organizational Structure</CardTitle>
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
      </Tabs>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValues.map((value, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle className="text-center text-blue-700">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <ScrollArea className="h-[600px] w-full rounded-md border p-4 shadow-inner bg-gray-50">
        <div className="space-y-8">
          <History />
          <ImpactAchievements />
          <PartnershipsCollaborations />
          <FutureGoals />
          <TeamLeadership />
        </div>
      </ScrollArea>
    </div>
  );
};

export default About;