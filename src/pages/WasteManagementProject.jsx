import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WasteManagementProject = () => {
  const project = {
    title: "Sustainable Waste Management",
    description: "Implementing an innovative waste management system in Bamenda that collects, processes, and converts waste into usable products, promoting sanitation and creating jobs.",
    objectives: [
      "Establish a comprehensive waste collection and segregation system",
      "Develop a waste-to-compost conversion facility",
      "Create employment opportunities in waste management and recycling",
      "Reduce environmental impact by minimizing landfill usage",
      "Promote public awareness about proper waste disposal and recycling"
    ],
    impact: "The Sustainable Waste Management project aims to process over 70% of Bamenda's household waste, create 200+ jobs, and significantly reduce landfill usage within the first two years of operation.",
    approach: "We're implementing a tiered pricing model for waste collection, with designated bins for organics, recyclables, and general waste. Our state-of-the-art facility will convert organic waste into high-quality compost, while recyclables will be processed and sold to manufacturers.",
    challenges: [
      "Public education on waste segregation",
      "Establishing efficient collection routes",
      "Securing partnerships with local businesses for recycled materials"
    ],
    solutions: [
      "Launch comprehensive public awareness campaigns through various media channels",
      "Implement route optimization software to enhance collection efficiency",
      "Develop strategic partnerships with local businesses and offer incentives for using recycled materials",
      "Create a mobile app for residents to access information and schedule pickups",
      "Introduce a community rewards program to encourage participation and proper waste segregation"
    ],
    future: "We envision expanding this model to neighboring communities and developing a range of eco-friendly products from recycled materials, further boosting local employment and sustainability efforts."
  };

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <p className="mb-8 text-lg">{project.description}</p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="objectives">
          <AccordionTrigger>Objectives</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              {project.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="impact">
          <AccordionTrigger>Impact</AccordionTrigger>
          <AccordionContent>
            <p>{project.impact}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="approach">
          <AccordionTrigger>Approach</AccordionTrigger>
          <AccordionContent>
            <p>{project.approach}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="challenges">
          <AccordionTrigger>Challenges and Solutions</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="future">
          <AccordionTrigger>Future Plans</AccordionTrigger>
          <AccordionContent>
            <p>{project.future}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default WasteManagementProject;