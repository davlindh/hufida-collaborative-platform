import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { projectsData } from '../data/projectsData';
import GetInvolvedDialog from '../components/GetInvolvedDialog';
import ProjectAbout from '../components/ProjectAbout';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState("about");

  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  const sections = [
    { id: "about", title: "About", content: <ProjectAbout project={project} />, tooltip: "Learn about the project's goals and approach" },
    { id: "activities", title: "Activities", content: project.activities.join(", "), tooltip: "Discover the project's main activities" },
    { id: "impact", title: "Impact", content: project.impact.join(" "), tooltip: "See the project's achievements" },
    { id: "vision", title: "Vision", content: project.vision, tooltip: "Understand the project's long-term goals" },
    { id: "get-involved", title: "Get Involved", content: <GetInvolvedContent project={project} />, tooltip: "Learn how you can contribute" }
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
      <CardHeader><CardTitle>{sections.find(s => s.id === activeTab).title}</CardTitle></CardHeader>
      <CardContent>
        {typeof sections.find(s => s.id === activeTab).content === 'string' 
          ? <p>{sections.find(s => s.id === activeTab).content}</p>
          : sections.find(s => s.id === activeTab).content
        }
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
        <Card key={index} className="hover:shadow-md transition-shadow duration-300">
          <CardHeader><CardTitle className="text-lg">{feature}</CardTitle></CardHeader>
        </Card>
      ))}
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
        <p>{vision}</p>
      </CardContent>
    </Card>
  </motion.section>
);

const GetInvolvedContent = ({ project }) => (
  <div className="py-4">
    <h3 className="text-lg font-semibold mb-2">Ways to Contribute:</h3>
    <ul className="list-disc pl-5 space-y-2">
      {project.getInvolved.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <p className="mt-4">
      Your involvement can make a real difference in the success of this project. 
      Whether through donations, volunteering, or spreading awareness, every action counts.
    </p>
    <Button className="w-full mt-4">Donate to This Project</Button>
  </div>
);

export default ProjectDetails;
