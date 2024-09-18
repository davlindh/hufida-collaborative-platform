import React from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import ProjectHeader from './ProjectHeader';
import ProjectTabs from './ProjectTabs';
import ProjectFeatures from './ProjectFeatures';
import ProjectVision from './ProjectVision';
import GetInvolvedButton from './GetInvolvedButton';
import SuggestDirectionDialog from './SuggestDirectionDialog';
import { neuCardStyles } from '../utils/styleUtils';

const ProjectLayout = ({ title, subtitle, sections, features, vision, partnerships }) => {
  const [activeTab, setActiveTab] = React.useState("about");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <TooltipProvider>
      <div className="bg-gradient-to-b from-deepGreen-50 to-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${neuCardStyles({ elevation: "medium" })} bg-white rounded-xl shadow-lg overflow-hidden`}
          >
            <ProjectHeader title={title} subtitle={subtitle} />
            <ProjectTabs sections={sections} activeTab={activeTab} setActiveTab={setActiveTab} />
            <AnimatePresence mode="wait">
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: activeTab === section.id ? 1 : 0, y: activeTab === section.id ? 0 : 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`${activeTab === section.id ? 'block' : 'hidden'} p-6`}
                >
                  <div className={`${neuCardStyles({ elevation: "low" })} bg-white p-6 rounded-xl`}>
                    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-900">{section.title}</h2>
                    <p className="text-deepGreen-800 leading-relaxed">{section.content}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <ProjectFeatures features={features} />
            <ProjectVision vision={vision} partnerships={partnerships} />
            <div className="mt-8 flex justify-center p-6">
              <GetInvolvedButton 
                title={title} 
                setIsDialogOpen={setIsDialogOpen} 
                className="w-full sm:w-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <SuggestDirectionDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        projectTitle={title}
      />
    </TooltipProvider>
  );
};

export default ProjectLayout;
