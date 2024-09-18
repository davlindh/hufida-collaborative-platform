import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { projectsData } from '../data/projectsData';
import ProjectHeader from '../components/ProjectHeader';
import ProjectTabs from '../components/ProjectTabs';
import ProjectFeatures from '../components/ProjectFeatures';
import ProjectVision from '../components/ProjectVision';
import ProjectMetadata from '../components/ProjectMetadata';
import GetInvolvedButton from '../components/GetInvolvedButton';
import SuggestDirectionDialog from '../components/SuggestDirectionDialog';
import ProjectNotFound from '../components/ProjectNotFound';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState("about");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const project = projectsData[projectId];

  if (!project) {
    return <ProjectNotFound />;
  }

  // Redirect to specific project page if it exists
  if (projectId === 'digital-literacy') {
    return <Navigate to="/digital-literacy-program" replace />;
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
        </motion.div>
      </ScrollArea>
    </TooltipProvider>
  );
};

export default ProjectDetails;
