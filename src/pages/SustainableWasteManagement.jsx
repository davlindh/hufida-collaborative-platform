import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { sections, features } from '../data/sustainableWasteManagementData';
import { neuCardStyles, neuButtonStyles, responsiveGridStyles } from '../utils/styleUtils';

const SustainableWasteManagement = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <ProjectHeader />
          <ProjectTabs sections={sections} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProjectFeatures features={features} />
          <ProjectVision />
          <GetInvolvedButton />
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
};

const ProjectHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center mb-8"
  >
    <h1 className="text-4xl font-bold text-deepGreen-800 mb-4">
      Sustainable Waste Management in Bamenda
    </h1>
    <p className="text-xl text-deepGreen-600">
      Revolutionizing waste management through innovation and community engagement
    </p>
  </motion.div>
);

const ProjectTabs = ({ sections, activeTab, setActiveTab }) => (
  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
    <TabsList className="grid w-full grid-cols-5 bg-deepGreen-100 p-1 rounded-lg">
      {sections.map((section) => (
        <Tooltip key={section.id}>
          <TooltipTrigger asChild>
            <TabsTrigger 
              value={section.id}
              className="text-deepGreen-700 data-[state=active]:bg-white data-[state=active]:text-deepGreen-800 transition-all duration-200"
            >
              {section.title}
            </TabsTrigger>
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
          <Card className={neuCardStyles({ elevation: "low" })}>
            <CardHeader><CardTitle className="text-deepGreen-800">{section.title}</CardTitle></CardHeader>
            <CardContent><p className="text-deepGreen-600">{section.content}</p></CardContent>
          </Card>
        </motion.div>
      </TabsContent>
    ))}
  </Tabs>
);

const ProjectFeatures = ({ features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Key Features of the Project</h2>
    <div className={responsiveGridStyles({ cols: 3 })}>
      {features.map((feature, index) => (
        <Card key={index} className={`${neuCardStyles({ elevation: "low" })} hover:shadow-lg transition-all duration-300`}>
          <CardHeader>
            <CardTitle className="text-lg text-deepGreen-700">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-deepGreen-600 mb-2">{feature.description}</p>
            <ul className="list-disc pl-5 text-xs text-deepGreen-500">
              {feature.details.slice(0, 2).map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </motion.div>
);

const ProjectVision = () => (
  <motion.section 
    className="mt-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Project Vision</h2>
    <Card className={neuCardStyles({ elevation: "medium" })}>
      <CardContent className="p-6">
        <p className="text-deepGreen-700">
          Our vision is to transform Bamenda into a model city for sustainable waste management in Cameroon. 
          By leveraging technology and community engagement, we aim to create a cleaner, healthier environment 
          while also generating economic opportunities through improved waste management practices.
        </p>
      </CardContent>
    </Card>
  </motion.section>
);

const GetInvolvedButton = () => (
  <motion.div
    className="mt-8 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className={neuButtonStyles({ variant: "primary", size: "lg" })}>
          Get Involved in Sustainable Waste Management
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Learn how you can contribute to this project</p>
      </TooltipContent>
    </Tooltip>
  </motion.div>
);

export default SustainableWasteManagement;
