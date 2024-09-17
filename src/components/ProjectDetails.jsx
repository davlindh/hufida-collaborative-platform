import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ProjectDetails = ({ project }) => {
  const [activeTab, setActiveTab] = useState("about");

  if (!project) {
    return <div>Loading project details...</div>;
  }

  const sections = [
    { id: "about", title: "About", content: project.description },
    { id: "objectives", title: "Objectives", content: <List items={project.objectives} /> },
    { id: "impact", title: "Impact", content: <List items={project.impact} /> },
    { id: "approach", title: "Approach", content: project.approach },
    { id: "challenges", title: "Challenges & Solutions", content: <ChallengesAndSolutions challenges={project.challenges} solutions={project.solutions} /> },
    { id: "future", title: "Future Plans", content: project.future }
  ];

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <ProjectHeader title={project.title} />
          <ProjectTabs sections={sections} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProjectContent sections={sections} activeTab={activeTab} />
          <ProjectFeatures features={project.keyFeatures} />
          <ProjectVision vision={project.vision} />
          <GetInvolvedButton project={project} />
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
};

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    objectives: PropTypes.arrayOf(PropTypes.string),
    impact: PropTypes.arrayOf(PropTypes.string),
    approach: PropTypes.string,
    challenges: PropTypes.arrayOf(PropTypes.string),
    solutions: PropTypes.arrayOf(PropTypes.string),
    future: PropTypes.string,
    keyFeatures: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })),
    vision: PropTypes.string,
    id: PropTypes.string.isRequired
  }).isRequired
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
    <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
      {sections.map((section) => (
        <Tooltip key={section.id}>
          <TooltipTrigger asChild>
            <TabsTrigger value={section.id}>{section.title}</TabsTrigger>
          </TooltipTrigger>
          <TooltipContent><p>View {section.title.toLowerCase()} information</p></TooltipContent>
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
        {sections.find(s => s.id === activeTab)?.content || <p>No information available.</p>}
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
      {features?.map((feature, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow duration-300">
          <CardHeader><CardTitle className="text-lg">{feature.title}</CardTitle></CardHeader>
          <CardContent><p className="text-sm">{feature.description}</p></CardContent>
        </Card>
      )) || <p>No features specified</p>}
    </div>
  </motion.div>
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
        <p>{vision || "No vision specified"}</p>
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

const List = ({ items }) => (
  <ul className="list-disc pl-5 space-y-2">
    {items?.map((item, index) => (
      <li key={index}>{item}</li>
    )) || <li>No items specified</li>}
  </ul>
);

const ChallengesAndSolutions = ({ challenges, solutions }) => (
  <div className="space-y-4">
    <div>
      <h4 className="font-semibold mb-2">Challenges:</h4>
      <List items={challenges} />
    </div>
    <div>
      <h4 className="font-semibold mb-2">Solutions:</h4>
      <List items={solutions} />
    </div>
  </div>
);

export default ProjectDetails;
