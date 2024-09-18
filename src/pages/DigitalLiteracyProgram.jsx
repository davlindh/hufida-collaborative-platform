import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import ProjectHeader from '../components/ProjectHeader';
import ProjectTabs from '../components/ProjectTabs';
import ProjectVision from '../components/ProjectVision';
import GetInvolvedButton from '../components/GetInvolvedButton';
import SuggestDirectionDialog from '../components/SuggestDirectionDialog';
import FeatureDialog from '../components/FeatureDialog';
import { projectsData } from '../data/projectsData';
import { neuCardStyles, responsiveGridStyles } from '../utils/styleUtils';

const DigitalLiteracyProgram = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const project = projectsData["digital-literacy"];

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
          <ProjectHeader title={project.title} />
          <ProjectTabs sections={project.sections} activeTab={activeTab} setActiveTab={setActiveTab} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-deepGreen-800">Key Features</h2>
            <div className={`${responsiveGridStyles({ cols: 3 })} gap-6`}>
              {project.features.map((feature, index) => (
                <FeatureDialog key={index} feature={feature} />
              ))}
            </div>
          </motion.div>
          <ProjectVision vision={project.vision} />
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

export default DigitalLiteracyProgram;
