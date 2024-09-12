import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const SustainabilityIncubatorLab = () => {
  const [activeTab, setActiveTab] = useState("about");

  const sections = [
    {
      id: "about",
      title: "About",
      content: "The Sustainability Project Incubator LAB is a national consultative firm with several projects at the local and national level. We have years of experience in advancing science, innovation and strategic leadership aimed at fostering a strong economy that thrives within nature's limits.",
      tooltip: "Learn about our mission and expertise"
    },
    {
      id: "objectives",
      title: "Objectives",
      content: "Our key objectives include accelerating the transition to a sustainable society in Cameroon, transforming Cameroon into a work site for economic emergence, creating and distributing wealth fairly, and ensuring sustainable growth and enhanced food security.",
      tooltip: "Discover our main goals for Cameroon"
    },
    {
      id: "approach",
      title: "Approach",
      content: "We employ the Framework for Strategic Sustainable Development (FSSD), a science-based approach used successfully in hundreds of forward-thinking organizations worldwide. This framework helps organizations embed sustainability into their strategies, operations, products, services, and community plans.",
      tooltip: "Explore our scientific methodology"
    },
    {
      id: "impact",
      title: "Impact",
      content: "Our work has led to significant improvements in sustainable practices across various sectors in Cameroon, including agriculture, energy, and urban development. We've helped numerous organizations reduce their environmental footprint while improving their economic performance.",
      tooltip: "Learn about our achievements"
    },
    {
      id: "future",
      title: "Future Plans",
      content: "We aim to expand our reach to more regions in Cameroon and potentially other African countries. We're also developing new tools and methodologies to address emerging sustainability challenges, such as climate change adaptation and circular economy implementation.",
      tooltip: "See what's next for our lab"
    }
  ];

  const features = [
    { 
      title: "Sustainability Assessment", 
      description: "Comprehensive evaluation of organizational sustainability practices.",
      details: [
        "Carbon footprint analysis",
        "Supply chain sustainability audit",
        "Stakeholder engagement assessment",
        "Sustainability reporting guidance"
      ]
    },
    { 
      title: "Strategic Planning", 
      description: "Develop long-term sustainability strategies aligned with business goals.",
      details: [
        "Scenario planning workshops",
        "Sustainability goal setting",
        "Implementation roadmap development",
        "Performance indicator definition"
      ]
    },
    { 
      title: "Innovation Workshops", 
      description: "Facilitate sessions to generate sustainable solutions to complex problems.",
      details: [
        "Design thinking methodologies",
        "Circular economy ideation",
        "Biomimicry-inspired innovation",
        "Cross-sector collaboration forums"
      ]
    },
    { 
      title: "Policy Advocacy", 
      description: "Work with policymakers to promote sustainable development regulations.",
      details: [
        "Policy brief development",
        "Stakeholder consultation facilitation",
        "Impact assessment studies",
        "Legislative drafting support"
      ]
    },
    { 
      title: "Capacity Building", 
      description: "Train organizations and communities in sustainable practices.",
      details: [
        "Customized training programs",
        "E-learning platform development",
        "Sustainability leadership coaching",
        "Community-based learning initiatives"
      ]
    },
    { 
      title: "Monitoring and Evaluation", 
      description: "Track and report on sustainability progress and impact.",
      details: [
        "KPI development and tracking",
        "Impact measurement frameworks",
        "Real-time data collection systems",
        "Sustainability reporting to GRI standards"
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
            The Sustainability Project Incubator LAB
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
            <h2 className="text-2xl font-semibold mb-4">Key Features of Our Lab</h2>
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
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <Card>
              <CardContent className="p-6">
                <p>We envision a Cameroon where sustainable development is at the core of all economic activities, where businesses thrive while preserving natural resources, and where communities prosper in harmony with their environment. Through our work, we aim to position Cameroon as a leader in sustainable development in Africa, showcasing how economic growth and environmental stewardship can go hand in hand.</p>
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
                <Button className="w-full">Collaborate with Our Lab</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Explore partnership opportunities</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
};

export default SustainabilityIncubatorLab;