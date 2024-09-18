import React from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import ProjectHeader from './ProjectHeader';
import ProjectTabs from './ProjectTabs';
import ProjectFeatures from './ProjectFeatures';
import ProjectVision from './ProjectVision';
import GetInvolvedButton from './GetInvolvedButton';
import SuggestDirectionDialog from './SuggestDirectionDialog';
import { neuCardStyles, neuContainerStyles } from '../utils/styleUtils';

const ProjectLayout = ({ title, subtitle, sections, features, vision }) => {
  const [activeTab, setActiveTab] = React.useState("about");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <TooltipProvider>
      <div className={`${neuContainerStyles()} mt-8 px-4 sm:px-6 lg:px-8 pb-16`}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`${neuCardStyles({ elevation: "medium" })} p-6 rounded-xl`}
        >
          <ProjectHeader title={title} subtitle={subtitle} />
          <ProjectTabs sections={sections} activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className={`${neuCardStyles({ elevation: "low" })} mt-8 p-6 rounded-xl`}>
            <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Key Features</h2>
            <ProjectFeatures features={features} />
          </div>
          <div className={`${neuCardStyles({ elevation: "low" })} mt-8 p-6 rounded-xl`}>
            <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Our Vision</h2>
            <ProjectVision vision={vision} />
          </div>
          <div className="mt-8 flex justify-center">
            <GetInvolvedButton 
              title={title} 
              setIsDialogOpen={setIsDialogOpen} 
              className="w-full sm:w-auto"
            />
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
