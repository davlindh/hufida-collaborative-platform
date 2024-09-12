import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("faving");

  const projects = [
    {
      id: "faving",
      title: "Faving: The Social Exchange Engine",
      sections: [
        {
          id: "about",
          title: "About Faving",
          content: "Faving is a groundbreaking digital platform designed to revolutionize social interactions, knowledge sharing, and collaboration. As the first Social Exchange Engine, Faving aims to empower communities and individuals to make informed decisions through collective intelligence.",
          tooltip: "Learn about Faving's mission and purpose"
        },
        {
          id: "features",
          title: "Key Features",
          content: "Faving integrates advanced technologies to create a dynamic, immersive environment where users can collaborate on projects, share knowledge, and drive meaningful change.",
          tooltip: "Explore Faving's innovative features"
        },
        {
          id: "impact",
          title: "Expected Impact",
          content: "Faving aims to transform how communities collaborate, share knowledge, and take action on complex global issues, potentially reaching millions of users worldwide.",
          tooltip: "Learn about Faving's potential impact"
        },
        {
          id: "getInvolved",
          title: "Get Involved",
          content: "Join us in shaping the future of collaborative action. We're looking for beta testers, early adopters, and partners to help refine and expand Faving's capabilities.",
          tooltip: "Find out how you can contribute to Faving"
        }
      ]
    },
    {
      id: "sustainable-waste-management",
      title: "Sustainable Waste Management in Bamenda",
      description: "A comprehensive plan to revolutionize waste management and composting operations in Bamenda, Cameroon, through the deployment of a mobile application integrated with Mappost's route optimization technology.",
    },
    {
      id: "sustainability-incubator-lab",
      title: "The Sustainability Project Incubator LAB",
      description: "A national consultative firm advancing science, innovation, and strategic leadership to foster a strong economy that thrives within nature's limits.",
    },
  ];

  const features = [
    {
      title: "User Profiles",
      description: "Create personalized profiles showcasing skills, interests, and project involvements.",
    },
    {
      title: "Collaboration Tools",
      description: "Suite of tools for initiating, managing, and contributing to collaborative projects.",
    },
    {
      title: "Knowledge Portals",
      description: "Curated spaces for sharing and discovering articles, tutorials, and resources.",
    },
    {
      title: "Matching Algorithm",
      description: "Advanced system to connect users based on shared interests and project needs.",
    },
    {
      title: "Evaluation System",
      description: "Mechanisms for offering and receiving feedback on content and contributions.",
    }
  ];

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3">
              {projects.map((project) => (
                <Tooltip key={project.id}>
                  <TooltipTrigger asChild>
                    <TabsTrigger value={project.id}>{project.title}</TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent><p>Learn more about {project.title}</p></TooltipContent>
                </Tooltip>
              ))}
            </TabsList>
            {projects.map((project) => (
              <TabsContent key={project.id} value={project.id}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardHeader><CardTitle>{project.title}</CardTitle></CardHeader>
                    <CardContent>
                      {project.id === "faving" ? (
                        <div>
                          <Tabs defaultValue="about" className="w-full">
                            <TabsList className="grid w-full grid-cols-4">
                              {project.sections.map((section) => (
                                <TabsTrigger key={section.id} value={section.id}>
                                  {section.title}
                                </TabsTrigger>
                              ))}
                            </TabsList>
                            {project.sections.map((section) => (
                              <TabsContent key={section.id} value={section.id}>
                                <Card>
                                  <CardHeader><CardTitle>{section.title}</CardTitle></CardHeader>
                                  <CardContent><p>{section.content}</p></CardContent>
                                </Card>
                              </TabsContent>
                            ))}
                          </Tabs>
                          <h3 className="text-xl font-semibold mt-6 mb-4">Key Features of Faving</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {features.map((feature, index) => (
                              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                                <CardHeader><CardTitle className="text-lg">{feature.title}</CardTitle></CardHeader>
                                <CardContent><p className="text-sm">{feature.description}</p></CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p>{project.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
};

export default Projects;