import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ProjectDetails = ({ project }) => {
  const [activeTab, setActiveTab] = useState("about");

  if (!project) {
    return <div>Loading project details...</div>;
  }

  const defaultSections = [
    { id: "about", title: "About", content: "Project details not available.", tooltip: "Learn about the project" },
    { id: "objectives", title: "Objectives", content: "Objectives not specified.", tooltip: "Discover the project's goals" },
    { id: "implementation", title: "Implementation", content: "Implementation details not available.", tooltip: "See how the project is being carried out" },
    { id: "impact", title: "Impact", content: "Impact information not available.", tooltip: "Understand the project's effects" },
    { id: "future", title: "Future Plans", content: "Future plans not specified.", tooltip: "Learn about upcoming initiatives" }
  ];

  const sections = project.sections || defaultSections;

  const defaultFeatures = [
    { title: "Feature 1", description: "Description not available.", details: ["No details available"] },
    { title: "Feature 2", description: "Description not available.", details: ["No details available"] },
    { title: "Feature 3", description: "Description not available.", details: ["No details available"] }
  ];

  const features = project.features || defaultFeatures;

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <ProjectHeader title={project.title || "Project Title"} />
          <ProjectTabs sections={sections} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProjectContent sections={sections} activeTab={activeTab} />
          <ProjectFeatures features={features} />
          <ProjectVision vision={project.vision || "Project vision not available."} />
          <GetInvolvedButton project={project} />
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
};

const ProjectHeader = ({ title }) => (
  <motion.h1 
    className="text-4xl font-bold mb-6 text-center"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {title}
  </motion.h1>
);

const ProjectTabs = ({ sections, activeTab, setActiveTab }) => (
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
  </Tabs>
);

const ProjectContent = ({ sections, activeTab }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card>
      <CardHeader><CardTitle>{sections.find(s => s.id === activeTab)?.title}</CardTitle></CardHeader>
      <CardContent>
        <p>{sections.find(s => s.id === activeTab)?.content}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const ProjectFeatures = ({ features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="mt-8"
  >
    <h2 className="text-2xl font-semibold mb-4">Key Features of the Project</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <FeatureDialog key={index} feature={feature} />
      ))}
    </div>
  </motion.div>
);

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

const ProjectVision = ({ vision }) => (
  <motion.section 
    className="mt-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <h2 className="text-2xl font-semibold mb-4">Project Vision</h2>
    <Card>
      <CardContent className="p-6">
        <p>{vision}</p>
      </CardContent>
    </Card>
  </motion.section>
);

const GetInvolvedButton = ({ project }) => (
  <motion.div
    className="mt-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <Button asChild className="w-full">
      <Link to={`/donate?project=${project.id}`}>Get Involved with {project.title}</Link>
    </Button>
  </motion.div>
);

export default ProjectDetails;
