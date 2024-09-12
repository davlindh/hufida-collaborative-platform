import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const FavingProject = () => {
  const [activeTab, setActiveTab] = useState("about");

  const sections = [
    {
      id: "about",
      title: "About",
      content: "Faving is a groundbreaking digital platform designed to revolutionize social interactions, knowledge sharing, and collaboration. As the first Social Exchange Engine, Faving aims to empower communities and individuals to make informed decisions through collective intelligence.",
      tooltip: "Learn about Faving's mission and purpose"
    },
    {
      id: "objectives",
      title: "Objectives",
      content: "Our key objectives include creating a dynamic platform for community engagement, implementing advanced technologies, fostering collective intelligence, supporting global initiatives, and providing personalized user experiences.",
      tooltip: "Discover Faving's main goals"
    },
    {
      id: "approach",
      title: "Approach",
      content: "We're developing Faving using cutting-edge technologies and user-centric design principles. The platform integrates features such as real-time collaboration tools, virtual simulations, and adaptive interfaces to create an immersive and effective user experience.",
      tooltip: "Explore how we're building Faving"
    },
    {
      id: "impact",
      title: "Impact",
      content: "Faving aims to transform how communities collaborate, share knowledge, and take action on complex global issues, potentially reaching millions of users worldwide.",
      tooltip: "Learn about Faving's potential impact"
    },
    {
      id: "future",
      title: "Future Plans",
      content: "We envision Faving becoming a global platform for collective action, supporting initiatives in areas such as climate change mitigation, community development, and global cooperation. Future plans include integrating AI-driven insights and expanding to support multiple languages and cultures.",
      tooltip: "See what's next for Faving"
    }
  ];

  const features = [
    { 
      title: "User Profiles", 
      description: "Create personalized profiles showcasing skills, interests, and project involvements.",
      details: [
        "Customizable avatars and backgrounds",
        "Skill tagging and endorsements",
        "Project portfolio showcase",
        "Integration with professional networks"
      ]
    },
    { 
      title: "Collaboration Tools", 
      description: "Suite of tools for initiating, managing, and contributing to collaborative projects.",
      details: [
        "Real-time document editing",
        "Task management and assignment",
        "Video conferencing integration",
        "Version control for project assets"
      ]
    },
    { 
      title: "Knowledge Portals", 
      description: "Curated spaces for sharing and discovering articles, tutorials, and resources.",
      details: [
        "AI-powered content recommendations",
        "User-generated content moderation",
        "Interactive learning paths",
        "Integration with academic databases"
      ]
    },
    { 
      title: "Matching Algorithm", 
      description: "Advanced system to connect users based on shared interests and project needs.",
      details: [
        "Machine learning-based compatibility scoring",
        "Cross-disciplinary collaboration suggestions",
        "Skill gap analysis for teams",
        "Dynamic network visualization"
      ]
    },
    { 
      title: "Evaluation System", 
      description: "Mechanisms for offering and receiving feedback on content and contributions.",
      details: [
        "Peer review process for projects",
        "Reputation scoring based on contributions",
        "Gamification elements for engagement",
        "Transparent impact metrics"
      ]
    },
    { 
      title: "Data Visualization", 
      description: "Interactive tools to visualize complex data and trends.",
      details: [
        "Customizable dashboards",
        "Real-time data streaming capabilities",
        "Integration with external data sources",
        "Collaborative annotation features"
      ]
    }
  ];

  const FeatureDialog = ({ feature }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="hover:shadow-md transition-shadow duration-300 cursor-pointer">
          <CardHeader><CardTitle className="text-lg">{feature.title}</CardTitle></CardHeader>
          <CardContent><p className="text-sm">{feature.description}</p></CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{feature.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p>{feature.description}</p>
          <ul className="list-disc pl-5 mt-2">
            {feature.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );

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
                <FeatureDialog key={index} feature={feature} />
              ))}
            </div>
          </motion.div>

          <motion.section 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Project Vision</h2>
            <Card>
              <CardContent className="p-6">
                <p>Our vision for Faving is to create a global ecosystem where knowledge, skills, and resources are seamlessly exchanged to address the world's most pressing challenges. By harnessing the power of collective intelligence and advanced technologies, we aim to empower individuals and communities to drive positive change on a scale never before possible.</p>
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
                <Button className="w-full">Get Involved with Faving</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Learn how you can contribute to this project</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
};

export default FavingProject;