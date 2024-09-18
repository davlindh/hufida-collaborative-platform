import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { projectsData } from '../data/projectsData';
import ProjectHeader from './ProjectHeader';
import ProjectTabs from './ProjectTabs';
import ProjectFeatures from './ProjectFeatures';
import ProjectVision from './ProjectVision';
import ProjectMetadata from './ProjectMetadata';
import GetInvolvedButton from './GetInvolvedButton';
import SuggestDirectionDialog from './SuggestDirectionDialog';
import ProjectNotFound from './ProjectNotFound';

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
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectHeader title={project.title} />
          <div className="mb-8 text-center">
            <p className="text-lg md:text-xl text-deepGreen-600">{project.description}</p>
          </div>
          <ProjectTabs sections={project.sections} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProjectFeatures features={project.features} />
          <ProjectVision vision={project.vision} />
          <ProjectMetadata project={project} />
          <div className="mt-8 flex justify-center">
            <GetInvolvedButton title={project.title} setIsDialogOpen={setIsDialogOpen} />
          </div>
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
