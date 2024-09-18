import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { projectsData } from '../data/projectsData';
import { formatDate, neuCardStyles, neuButtonStyles, responsiveGridStyles, neuTooltipStyles } from '../utils/styleUtils';
import SuggestDirectionDialog from '../components/SuggestDirectionDialog';
import ProjectHeader from '../components/ProjectHeader';
import ProjectTabs from '../components/ProjectTabs';
import ProjectFeatures from '../components/ProjectFeatures';
import ProjectVision from '../components/ProjectVision';
import ProjectMetadata from '../components/ProjectMetadata';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState("about");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
          <GetInvolvedButton title={project.title} setIsDialogOpen={setIsDialogOpen} />
          <SuggestDirectionDialog
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
            projectTitle={project.title}
          />
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

const GetInvolvedButton = ({ title, setIsDialogOpen }) => (
  <motion.div
    className="mt-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
  >
    <Tooltip>
      <TooltipTrigger asChild>
        <Button 
          onClick={() => setIsDialogOpen(true)}
          className={neuButtonStyles({ variant: "primary", size: "lg" })}
        >
          Get Involved with {title}
        </Button>
      </TooltipTrigger>
      <TooltipContent className={neuTooltipStyles()}>
        <p>Suggest a new direction for this project</p>
      </TooltipContent>
    </Tooltip>
  </motion.div>
);

export default ProjectDetails;
