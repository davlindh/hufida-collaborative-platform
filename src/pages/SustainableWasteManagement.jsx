import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { sections, features } from '../data/sustainableWasteManagementData';
import { neuCardStyles, neuButtonStyles, responsiveGridStyles, neuTooltipStyles } from '../utils/styleUtils';
import SuggestDirectionDialog from '../components/SuggestDirectionDialog';

const SustainableWasteManagement = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <ProjectHeader />
          <ProjectTabs sections={sections} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProjectFeatures features={features} />
          <ProjectVision />
          <GetInvolvedButton setIsDialogOpen={setIsDialogOpen} />
          <SuggestDirectionDialog
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
            projectTitle="Sustainable Waste Management in Bamenda"
          />
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
    className="text-center mb-12"
  >
    <h1 className="text-4xl font-bold text-deepGreen-800 mb-4">
      Sustainable Waste Management in Bamenda
    </h1>
    <p className="text-xl text-deepGreen-600 max-w-3xl mx-auto">
      Revolutionizing waste management through innovation and community engagement
    </p>
  </motion.div>
);

const ProjectTabs = ({ sections, activeTab, setActiveTab }) => (
  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
    <TabsList className="grid w-full grid-cols-5 bg-deepGreen-100 p-1 rounded-lg border border-deepGreen-200">
      {sections.map((section) => (
        <Tooltip key={section.id}>
          <TooltipTrigger asChild>
            <TabsTrigger 
              value={section.id}
              className="text-deepGreen-700 data-[state=active]:bg-white data-[state=active]:text-deepGreen-800 transition-all duration-200 border-b-2 border-transparent data-[state=active]:border-deepGreen-500"
            >
              {section.title}
            </TabsTrigger>
          </TooltipTrigger>
          <TooltipContent className={neuTooltipStyles()}><p>{section.tooltip}</p></TooltipContent>
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
          <Card className={`${neuCardStyles({ elevation: "low" })} border border-deepGreen-200`}>
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
    className="mb-12"
  >
    <h2 className="text-2xl font-semibold mb-6 text-deepGreen-800">Key Features of the Project</h2>
    <div className={responsiveGridStyles({ cols: 3 })}>
      {features.map((feature, index) => (
        <FeatureDialog key={index} feature={feature} />
      ))}
    </div>
  </motion.div>
);

const FeatureDialog = ({ feature }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Card className={`${neuCardStyles({ elevation: "low" })} hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-deepGreen-200 cursor-pointer`}>
        <CardHeader>
          <CardTitle className="text-lg text-deepGreen-700">{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-deepGreen-600 mb-2">{feature.description}</p>
        </CardContent>
      </Card>
    </DialogTrigger>
    <DialogContent className={neuCardStyles({ elevation: "medium" })}>
      <DialogHeader>
        <DialogTitle className="text-deepGreen-800">{feature.title}</DialogTitle>
      </DialogHeader>
      <div className="mt-4">
        <p className="text-deepGreen-700">{feature.description}</p>
        <ul className="list-disc pl-5 mt-2 text-deepGreen-600">
          {feature.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>
    </DialogContent>
  </Dialog>
);

const ProjectVision = () => (
  <motion.section 
    className="mt-12 mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Project Vision</h2>
    <Card className={`${neuCardStyles({ elevation: "medium" })} border-2 border-deepGreen-300`}>
      <CardContent className="p-6">
        <p className="text-deepGreen-700 leading-relaxed">
          Our vision is to transform Bamenda into a model city for sustainable waste management in Cameroon. 
          By leveraging technology and community engagement, we aim to create a cleaner, healthier environment 
          while also generating economic opportunities through improved waste management practices.
        </p>
      </CardContent>
    </Card>
  </motion.section>
);

const GetInvolvedButton = ({ setIsDialogOpen }) => (
  <motion.div
    className="mt-8 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <Tooltip>
      <TooltipTrigger asChild>
        <Button 
          onClick={() => setIsDialogOpen(true)}
          className={`${neuButtonStyles({ variant: "primary", size: "lg" })} shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
          Get Involved in Sustainable Waste Management
        </Button>
      </TooltipTrigger>
      <TooltipContent className={neuTooltipStyles()}>
        <p>Suggest a new direction for this project</p>
      </TooltipContent>
    </Tooltip>
  </motion.div>
);

export default SustainableWasteManagement;
