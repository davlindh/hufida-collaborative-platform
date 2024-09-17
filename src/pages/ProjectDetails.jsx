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

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState("about");
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-deepGreen-800">Project Not Found</h1>
        <p className="mb-8 text-lg text-deepGreen-600">We couldn't find the project you're looking for. It may have been moved or doesn't exist.</p>
        <Button asChild>
          <Link to="/projects">View All Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <ProjectHeader title={project.title} />
          <EngagingInfo project={project} />
          <ProjectTabs sections={project.sections || []} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProjectFeatures features={project.features || []} />
          <ProjectVision vision={project.vision} />
          <GetInvolvedButton title={project.title} />
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
    {title || 'Project Details'}
  </motion.h1>
);

const EngagingInfo = ({ project }) => (
  <motion.div
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <Card className="bg-gradient-to-r from-deepGreen-100 to-deepGreen-200">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">{project.title} at a Glance</h2>
        <p className="mb-4 text-deepGreen-700">{project.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <StatItem label="People Impacted" value={project.peopleImpacted || '10,000+'} />
          <StatItem label="Project Duration" value={project.duration || '2 years'} />
          <StatItem label="Success Rate" value={project.successRate || '95%'} />
        </div>
        <Button className="w-full md:w-auto">Learn How You Can Help</Button>
      </CardContent>
    </Card>
  </motion.div>
);

const StatItem = ({ label, value }) => (
  <div className="text-center">
    <p className="text-3xl font-bold text-deepGreen-800">{value}</p>
    <p className="text-sm text-deepGreen-600">{label}</p>
  </div>
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
);

const ProjectFeatures = ({ features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h2 className="text-2xl font-semibold mb-4">Key Features of the Project</h2>
    {features.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeatureDialog key={index} feature={feature} />
        ))}
      </div>
    ) : (
      <p>No features are currently available for this project.</p>
    )}
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
          {feature.details && feature.details.map((detail, idx) => (
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
        <p>{vision || 'The project vision is currently being developed.'}</p>
      </CardContent>
    </Card>
  </motion.section>
);

const GetInvolvedButton = ({ title }) => (
  <motion.div
    className="mt-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="w-full">Get Involved with {title || 'This Project'}</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Learn how you can contribute to this project</p>
      </TooltipContent>
    </Tooltip>
  </motion.div>
);

export default ProjectDetails;
