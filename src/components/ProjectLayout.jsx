import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import ProjectHeader from './ProjectHeader';
import ProjectTabs from './ProjectTabs';
import ProjectFeatures from './ProjectFeatures';
import ProjectVision from './ProjectVision';
import ProjectMetadata from './ProjectMetadata';
import GetInvolvedButton from './GetInvolvedButton';
import SuggestDirectionDialog from './SuggestDirectionDialog';

const ProjectLayout = ({ project }) => {
  const [activeTab, setActiveTab] = useState("about");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <motion.div 
          className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectHeader title={project.title} subtitle={project.subtitle} />
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
        </motion.div>
      </ScrollArea>
    </TooltipProvider>
  );
};

export default ProjectLayout;
