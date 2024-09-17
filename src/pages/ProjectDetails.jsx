import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { mentalHealthSocialHealingData } from '../data/mentalHealthSocialHealing';
import { sustainableLivelihoodsData } from '../data/sustainableLivelihoodsData';
import { sections as environmentalConservationSections, features as environmentalConservationFeatures, vision as environmentalConservationVision } from '../data/environmentalConservation';
import { sections as culturalRestorationSections, features as culturalRestorationFeatures, vision as culturalRestorationVision } from '../data/culturalRestoration';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = React.useState("about");

  const getProjectData = (id) => {
    switch (id) {
      case 'mental-health-social-healing':
        return mentalHealthSocialHealingData;
      case 'sustainable-livelihoods':
        return sustainableLivelihoodsData;
      case 'environmental-conservation':
        return {
          id: "environmental-conservation",
          title: "Environmental Conservation and Climate Action",
          description: environmentalConservationSections.find(section => section.id === "about").content,
          activities: environmentalConservationFeatures.map(feature => feature.title),
          impact: environmentalConservationSections.find(section => section.id === "impact").content,
          getInvolved: environmentalConservationFeatures.map(feature => `Support our ${feature.title.toLowerCase()} initiatives`),
          keyFeatures: environmentalConservationFeatures,
          vision: environmentalConservationVision
        };
      case 'cultural-heritage-restoration':
        return {
          id: "cultural-heritage-restoration",
          title: "Cultural and Heritage Restoration",
          description: culturalRestorationSections.find(section => section.id === "about").content,
          activities: culturalRestorationFeatures.map(feature => feature.title),
          impact: culturalRestorationSections.find(section => section.id === "impact").content,
          getInvolved: culturalRestorationFeatures.map(feature => `Support our ${feature.title.toLowerCase()} initiatives`),
          keyFeatures: culturalRestorationFeatures,
          vision: culturalRestorationVision
        };
      default:
        return null;
    }
  };

  const project = getProjectData(projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  const sections = [
    { id: "about", title: "About", content: project.description, tooltip: "Learn about the project's goals and approach" },
    { id: "activities", title: "Activities", content: project.activities.join(", "), tooltip: "Discover the project's main activities" },
    { id: "impact", title: "Impact", content: project.impact, tooltip: "See the project's achievements" },
    { id: "get-involved", title: "Get Involved", content: project.getInvolved.join(", "), tooltip: "Learn how you can contribute" },
    { id: "vision", title: "Vision", content: project.vision, tooltip: "Understand the project's long-term goals" }
  ];

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <ProjectHeader title={project.title} />
          <ProjectTabs sections={sections} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProjectFeatures features={project.keyFeatures} />
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

const GetInvolvedButton = ({ title }) => (
  <motion.div
    className="mt-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="w-full">Get Involved with {title}</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Learn how you can contribute to this project</p>
      </TooltipContent>
    </Tooltip>
  </motion.div>
);

export default ProjectDetails;
