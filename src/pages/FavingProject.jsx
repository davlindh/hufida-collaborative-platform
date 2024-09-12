import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FavingProject = () => {
  const project = {
    title: "Faving: The Social Exchange Engine",
    description: "HUFIDA's groundbreaking digital platform designed to revolutionize social interactions, knowledge sharing, and collaboration.",
    objectives: [
      "Create a dynamic platform for community engagement and decision-making",
      "Implement advanced technologies like digital twins and data recycling",
      "Foster collective intelligence and informed decision-making",
      "Support global initiatives such as climate action and sustainable development",
      "Provide personalized user experiences through data-driven insights"
    ],
    impact: "Faving aims to transform how communities collaborate, share knowledge, and take action on complex global issues, potentially reaching millions of users worldwide.",
    approach: "We're developing Faving using cutting-edge technologies and user-centric design principles. The platform will integrate features such as real-time collaboration tools, virtual simulations, and adaptive interfaces to create an immersive and effective user experience.",
    challenges: [
      "Ensuring data privacy and security",
      "Developing scalable infrastructure to support a growing user base",
      "Creating intuitive interfaces for complex functionalities"
    ],
    solutions: [
      "Implementing robust encryption and user authentication systems",
      "Utilizing cloud-based solutions and microservices architecture for scalability",
      "Conducting extensive user testing and iterative design processes",
      "Collaborating with cybersecurity experts to ensure data protection",
      "Developing comprehensive onboarding and tutorial systems for new users"
    ],
    future: "We envision Faving becoming a global platform for collective action, supporting initiatives in areas such as climate change mitigation, community development, and global cooperation. Future plans include integrating AI-driven insights and expanding to support multiple languages and cultures."
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

export default FavingProject;