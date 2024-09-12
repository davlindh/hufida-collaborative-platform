import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">About HUFIDA</h1>
      <p className="mb-8">The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) is a voluntary not-for-profit association dedicated to addressing development challenges in Africa through innovative approaches.</p>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="mission">
          <AccordionTrigger>Mission and Nature</AccordionTrigger>
          <AccordionContent>
            <p>HUFIDA is a voluntary not-for-profit association (Ideell Forening) established to exist in perpetuity. Our mission is to create positive change in Africa through innovative development approaches and humanitarian efforts.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="objectives">
          <AccordionTrigger>Objectives</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Create awareness in Sweden and other countries of the North about the challenges of poverty and sustainable development in Africa</li>
              <li>Empower vulnerable and marginalized persons and groups in Africa with innovative tools for poverty alleviation and sustainable livelihood</li>
              <li>Support and foster solidarity amongst local African communities for meaningful integrated development, socio-cultural cohesion and peace</li>
              <li>Develop and deploy infrastructure in order to maintain a stable future of aid</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="methods">
          <AccordionTrigger>Methods and Activities</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Organize seminars, conferences, workshops and other activities on sustainable development in Africa</li>
              <li>Set up an Information Clearing House and Documentation Center on African development</li>
              <li>Assist to conserve, restore and protect wildlife, habitats and associated biodiversity in Africa</li>
              <li>Deliver humanitarian aid to vulnerable persons in conflict zones</li>
              <li>Produce a monthly newsletter on development and humanitarian challenges in Africa</li>
              <li>Collaborate with other organizations for knowledge sharing and capacity building</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="structure">
          <AccordionTrigger>Organizational Structure</AccordionTrigger>
          <AccordionContent>
            <p>HUFIDA has three main organs:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>General Assembly: The decision-making body consisting of all members</li>
              <li>Management Board: Responsible for day-to-day operations, led by a Director</li>
              <li>International Advisory Board: Composed of five persons of high moral and international repute</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="membership">
          <AccordionTrigger>Membership</AccordionTrigger>
          <AccordionContent>
            <p>Membership is open to any person or entity interested in contributing to HUFIDA's objectives. Applications are addressed to the Management Board.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="finances">
          <AccordionTrigger>Finances</AccordionTrigger>
          <AccordionContent>
            <p>HUFIDA's resources come from membership dues, annual contributions, donations, royalties, and other sources authorized by law. The financial year runs from January 1st to December 31st.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default About;