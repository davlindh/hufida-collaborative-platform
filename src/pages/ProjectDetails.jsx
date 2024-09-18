import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { projectsData } from '../data/projectsData';
import { formatDate, neuCardStyles, neuButtonStyles, responsiveGridStyles, neuTooltipStyles } from '../utils/styleUtils';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState("about");
  const project = projectsData[projectId];

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <ProjectHeader title={project.title} />
          <ProjectTabs sections={project.sections} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProjectFeatures features={project.features} />
          <ProjectVision vision={project.vision} />
          <ProjectMetadata project={project} />
          <GetInvolvedButton title={project.title} />
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
};

const ProjectNotFound = () => (
  <div className="container mx-auto mt-8 px-4 text-center">
    <Card className={neuCardStyles({ elevation: "low" })}>
      <CardContent className="p-8">
        <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Project Not Found</h2>
        <p className="text-deepGreen-600 mb-6">We couldn't find the project you're looking for. It may have been moved or doesn't exist.</p>
        <Button asChild className={neuButtonStyles({ variant: "primary" })}>
          <Link to="/projects">Return to Projects</Link>
        </Button>
      </CardContent>
    </Card>
  </div>
);

const ProjectHeader = ({ title }) => (
  <motion.h1 
    className="text-4xl font-bold mb-6 text-center text-deepGreen-800"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {title}
  </motion.h1>
);

const ProjectTabs = ({ sections, activeTab, setActiveTab }) => (
  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
    <TabsList className="grid w-full grid-cols-5 p-1 bg-deepGreen-100 rounded-lg">
      {sections.map((section) => (
        <Tooltip key={section.id}>
          <TooltipTrigger asChild>
            <TabsTrigger 
              value={section.id} 
              className="text-deepGreen-700 data-[state=active]:bg-deepGreen-200 focus:ring-2 focus:ring-deepGreen-300 focus:outline-none rounded-md transition-all duration-200"
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
          <Card className={neuCardStyles({ elevation: "low" })}>
            <CardHeader><CardTitle className="text-deepGreen-700">{section.title}</CardTitle></CardHeader>
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
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Key Features</h2>
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
      <Card className={`${neuCardStyles({ elevation: "low" })} cursor-pointer`}>
        <CardHeader><CardTitle className="text-lg text-deepGreen-700">{feature.title}</CardTitle></CardHeader>
        <CardContent><p className="text-sm text-deepGreen-600">{feature.description}</p></CardContent>
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

const ProjectVision = ({ vision }) => (
  <motion.section 
    className="mt-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Project Vision</h2>
    <Card className={neuCardStyles({ elevation: "low" })}>
      <CardContent className="p-6">
        <p className="text-deepGreen-700">{vision}</p>
      </CardContent>
    </Card>
  </motion.section>
);

const ProjectMetadata = ({ project }) => (
  <motion.section
    className="mt-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Project Details</h2>
    <Card className={neuCardStyles({ elevation: "low" })}>
      <CardContent className="p-6 grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-deepGreen-700">Start Date</h3>
          <p className="text-deepGreen-600">{formatDate(project.startDate)}</p>
        </div>
        <div>
          <h3 className="font-semibold text-deepGreen-700">Status</h3>
          <p className="text-deepGreen-600">{project.status}</p>
        </div>
        <div>
          <h3 className="font-semibold text-deepGreen-700">Category</h3>
          <p className="text-deepGreen-600">{project.category}</p>
        </div>
        <div>
          <h3 className="font-semibold text-deepGreen-700">Location</h3>
          <p className="text-deepGreen-600">{project.location}</p>
        </div>
      </CardContent>
    </Card>
  </motion.section>
);

const GetInvolvedButton = ({ title }) => (
  <motion.div
    className="mt-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
  >
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className={neuButtonStyles({ variant: "primary", size: "lg" })}>
          Get Involved with {title}
        </Button>
      </TooltipTrigger>
      <TooltipContent className={neuTooltipStyles()}>
        <p>Learn how you can contribute to this project</p>
      </TooltipContent>
    </Tooltip>
  </motion.div>
);

export default ProjectDetails;
