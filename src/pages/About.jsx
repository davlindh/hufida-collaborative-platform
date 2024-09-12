import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold mb-6">About HUFIDA</h1>
      <p className="mb-8 text-lg">The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) is a voluntary not-for-profit association dedicated to addressing development challenges in Africa through innovative approaches.</p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValues.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <History />
      <ImpactAchievements />
      <PartnershipsCollaborations />
      <FutureGoals />
      <TeamLeadership />
      
      <Accordion type="single" collapsible className="w-full mt-12">
        <AccordionItem value="mission">
          <AccordionTrigger>Mission and Vision</AccordionTrigger>
          <AccordionContent>
            <p>HUFIDA's mission is to create positive change in Africa through innovative development approaches and humanitarian efforts. Our vision is an Africa where communities are empowered, sustainable, and thriving.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="objectives">
          <AccordionTrigger>Our Objectives</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Create awareness about poverty and sustainable development challenges in Africa</li>
              <li>Empower vulnerable and marginalized groups with innovative tools for poverty alleviation</li>
              <li>Support local African communities for integrated development and socio-cultural cohesion</li>
              <li>Develop and deploy infrastructure for stable future aid</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="methods">
          <AccordionTrigger>Our Methods</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Organize seminars, conferences, and workshops on sustainable development in Africa</li>
              <li>Set up an Information Clearing House and Documentation Center on African development</li>
              <li>Assist in wildlife conservation and habitat protection efforts</li>
              <li>Deliver humanitarian aid to vulnerable persons in conflict zones</li>
              <li>Produce a monthly newsletter on development and humanitarian challenges</li>
              <li>Collaborate with other organizations for knowledge sharing and capacity building</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="structure">
          <AccordionTrigger>Organizational Structure</AccordionTrigger>
          <AccordionContent>
            <p>HUFIDA operates with three main organs:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>General Assembly:</strong> The decision-making body consisting of all members</li>
              <li><strong>Management Board:</strong> Responsible for day-to-day operations, led by a Director</li>
              <li><strong>International Advisory Board:</strong> Composed of five persons of high moral and international repute</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="membership">
          <AccordionTrigger>Membership</AccordionTrigger>
          <AccordionContent>
            <p>Membership is open to any person or entity interested in contributing to HUFIDA's objectives. Applications are addressed to the Management Board. Members play a crucial role in shaping our organization's direction and impact.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="finances">
          <AccordionTrigger>Financial Transparency</AccordionTrigger>
          <AccordionContent>
            <p>HUFIDA's resources come from membership dues, annual contributions, donations, grants, and other sources authorized by law. We are committed to financial transparency and responsible stewardship of our resources. The financial year runs from January 1st to December 31st, with annual reports available to all members and stakeholders.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default About;