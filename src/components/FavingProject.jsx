import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const FavingProject = () => {
  const [activeTab, setActiveTab] = useState("about");

  const sections = [
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
      id: "userExperience",
      title: "User Experience",
      content: "Faving prioritizes a streamlined user experience with intuitive navigation and engagement features, ensuring users of all technical abilities can interact seamlessly with the platform.",
      tooltip: "Discover how Faving enhances user experience"
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
  ];

  const features = [
    {
      title: "User Profiles",
      description: "Create personalized profiles showcasing skills, interests, and project involvements.",
      details: ["Customizable Avatars", "Skill Tags", "Project Portfolios", "Engagement Statistics"]
    },
    {
      title: "Collaboration Tools",
      description: "Suite of tools for initiating, managing, and contributing to collaborative projects.",
      details: ["Project Creation and Management", "Task Assignment and Tracking", "Real-time Document Editing", "Discussion Forums"]
    },
    {
      title: "Knowledge Portals",
      description: "Curated spaces for sharing and discovering articles, tutorials, and resources.",
      details: ["Content Submission and Categorization", "User Ratings and Reviews", "Expert Panels and Webinars", "Resource Libraries"]
    },
    {
      title: "Matching Algorithm",
      description: "Advanced system to connect users based on shared interests and project needs.",
      details: ["Contextual Matching", "Recommendations for Connections", "Skill-based Team Formations", "Matching Opportunity Notifications"]
    },
    {
      title: "Evaluation System",
      description: "Mechanisms for offering and receiving feedback on content and contributions.",
      details: ["Rating and Review System", "Feedback Loops", "Quality Indicators", "Community Endorsements"]
    }
  ];

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <motion.h1 
            className="text-4xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Faving: The Social Exchange Engine
          </motion.h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-5">
              {sections.map((section) => (
                <Tooltip key={section.id}>
                  <TooltipTrigger asChild>
                    <TabsTrigger value={section.id}>{section.title}</TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent><p>{section.tooltip}</p></TooltipContent>
                </Tooltip>
              ))}
            </TabsList>
            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardHeader><CardTitle>{section.title}</CardTitle></CardHeader>
                    <CardContent><p>{section.content}</p></CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Key Features of Faving</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardHeader><CardTitle className="text-lg">{feature.title}</CardTitle></CardHeader>
                      <CardContent><p className="text-sm">{feature.description}</p></CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <ul className="list-disc pl-4">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="text-sm">{detail}</li>
                      ))}
                    </ul>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </motion.div>

          <motion.section 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <Card>
              <CardContent className="p-6">
                <p>We envision Faving becoming a global platform for collective action, supporting initiatives in areas such as climate change mitigation, community development, and global cooperation. Future plans include integrating AI-driven insights and expanding to support multiple languages and cultures.</p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="w-full">Stay Updated on Faving's Progress</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sign up for updates and early access opportunities</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
};

export default FavingProject;