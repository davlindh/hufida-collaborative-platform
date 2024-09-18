import React from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectHeader from './ProjectHeader';
import ProjectTabs from './ProjectTabs';
import ProjectFeatures from './ProjectFeatures';
import ProjectVision from './ProjectVision';
import GetInvolvedButton from './GetInvolvedButton';
import SuggestDirectionDialog from './SuggestDirectionDialog';

const ProjectLayout = ({ title, subtitle, sections, features, vision }) => {
  const [activeTab, setActiveTab] = React.useState("about");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <TooltipProvider>
      <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectHeader title={title} subtitle={subtitle} />
          <ProjectTabs sections={sections} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProjectFeatures features={features} />
          <ProjectVision vision={vision} />
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <GetInvolvedButton title={title} setIsDialogOpen={setIsDialogOpen} />
            <Button 
              onClick={() => window.location.href = '/donate'}
              className="w-full sm:w-auto bg-deepGreen-600 text-white hover:bg-deepGreen-700 transition-colors duration-300"
            >
              Donate to This Project
            </Button>
          </div>
          <SuggestDirectionDialog
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
            projectTitle={title}
          />
        </motion.div>
      </div>
    </TooltipProvider>
  );
};

export default ProjectLayout;
