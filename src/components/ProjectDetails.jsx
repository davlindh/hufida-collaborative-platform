import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const ProjectDetails = ({ project }) => {
  const [activeTab, setActiveTab] = useState("about");

  const ProjectSection = ({ section }) => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="neu-card bg-deepGreen-50 border-deepGreen-200">
        <CardHeader><CardTitle className="text-deepGreen-700">{section.title}</CardTitle></CardHeader>
        <CardContent><p className="text-deepGreen-600">{section.content}</p></CardContent>
      </Card>
    </motion.div>
  );

  const FeatureDialog = ({ feature }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="neu-card hover:shadow-md transition-shadow duration-300 cursor-pointer bg-deepGreen-50 border-deepGreen-200">
          <CardHeader><CardTitle className="text-lg text-deepGreen-700">{feature.title}</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-deepGreen-600">{feature.description}</p></CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="neu-card bg-deepGreen-50 border-deepGreen-200">
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

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <motion.h1 
            className="text-4xl font-bold mb-6 text-center text-deepGreen-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-5 neu-card p-1 bg-deepGreen-100">
              {project.sections.map((section) => (
                <Tooltip key={section.id}>
                  <TooltipTrigger asChild>
                    <TabsTrigger value={section.id} className="neu-button text-deepGreen-700 data-[state=active]:bg-deepGreen-200 focus:ring-2 focus:ring-deepGreen-300 focus:outline-none">
                      {section.title}
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent><p>{section.tooltip}</p></TooltipContent>
                </Tooltip>
              ))}
            </TabsList>
            {project.sections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <ProjectSection section={section} />
              </TabsContent>
            ))}
          </Tabs>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <FeatureDialog feature={feature} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Explore details about {feature.title}</p>
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
            <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Project Vision</h2>
            <Card className="neu-card bg-deepGreen-50 border-deepGreen-200">
              <CardContent className="p-6">
                <p className="text-deepGreen-700">{project.vision}</p>
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
                <Button className="w-full neu-button bg-deepGreen-600 hover:bg-deepGreen-700 text-white focus:ring-2 focus:ring-deepGreen-300 focus:outline-none">
                  Get Involved with {project.title}
                </Button>
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

export default ProjectDetails;
