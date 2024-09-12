import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const SustainableWasteManagement = () => {
  const [activeTab, setActiveTab] = useState("about");

  const sections = [
    {
      id: "about",
      title: "About",
      content: "A comprehensive plan to revolutionize waste management and composting operations in Bamenda, Cameroon, through the deployment of a mobile application integrated with Mappost's route optimization technology.",
      tooltip: "Learn about the project's goals and approach"
    },
    {
      id: "objectives",
      title: "Objectives",
      content: "Our key objectives include optimizing waste collection routes, increasing composting, educating the community, and utilizing real-time data for continuous improvement.",
      tooltip: "Discover the project's main goals"
    },
    {
      id: "implementation",
      title: "Implementation",
      content: "Our implementation plan includes needs assessment, technology deployment, training, pilot testing, citywide expansion, and community engagement campaigns.",
      tooltip: "Explore how we're putting the plan into action"
    },
    {
      id: "partnerships",
      title: "Partnerships",
      content: "We're collaborating with HYSACAM, Green Care West Africa, Bamenda City Council, and various environmental organizations to ensure the project's success.",
      tooltip: "See who we're working with"
    },
    {
      id: "impact",
      title: "Impact",
      content: "Expected outcomes include reduced logistics expenses, lower emissions, improved soil quality, and increased public involvement in waste management.",
      tooltip: "Learn about the project's potential impact"
    }
  ];

  const features = [
    { 
      title: "Route Optimization", 
      description: "Utilize Mappost's technology to optimize waste collection routes",
      details: [
        "AI-powered route planning algorithms",
        "Real-time traffic integration",
        "Fuel consumption optimization",
        "Dynamic scheduling based on waste volume"
      ]
    },
    { 
      title: "Mobile Application", 
      description: "Deploy a user-friendly app for waste management operations",
      details: [
        "GPS-enabled waste pickup requests",
        "Educational content on waste segregation",
        "Gamification for community engagement",
        "Real-time updates on collection schedules"
      ]
    },
    { 
      title: "Community Engagement", 
      description: "Educate and involve the community in waste segregation and composting",
      details: [
        "Interactive workshops and seminars",
        "School outreach programs",
        "Community composting initiatives",
        "Local green ambassador program"
      ]
    },
    { 
      title: "Real-time Data Analysis", 
      description: "Use data for continuous improvement of waste management",
      details: [
        "Waste volume prediction models",
        "Environmental impact assessments",
        "Performance metrics dashboard",
        "Integration with city planning systems"
      ]
    },
    { 
      title: "Composting Initiative", 
      description: "Increase composting to enhance soil fertility and reduce landfill waste",
      details: [
        "Household composting starter kits",
        "Large-scale composting facility",
        "Compost quality monitoring system",
        "Distribution network for finished compost"
      ]
    },
    { 
      title: "Partnerships", 
      description: "Collaborate with local and international organizations for project success",
      details: [
        "Knowledge exchange programs",
        "Joint research initiatives",
        "Funding and resource pooling",
        "Technology transfer agreements"
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
            Sustainable Waste Management in Bamenda
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
            <h2 className="text-2xl font-semibold mb-4">Key Features of the Project</h2>
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
                <p>Our vision is to transform Bamenda into a model city for sustainable waste management in Cameroon. By leveraging technology and community engagement, we aim to create a cleaner, healthier environment while also generating economic opportunities through improved waste management practices.</p>
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
                <Button className="w-full">Get Involved in Sustainable Waste Management</Button>
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

export default SustainableWasteManagement;