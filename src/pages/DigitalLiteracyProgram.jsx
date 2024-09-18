import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import ProjectHeader from '../components/ProjectHeader';
import ProjectTabs from '../components/ProjectTabs';
import ProjectFeatures from '../components/ProjectFeatures';
import ProjectVision from '../components/ProjectVision';
import GetInvolvedButton from '../components/GetInvolvedButton';
import SuggestDirectionDialog from '../components/SuggestDirectionDialog';
import { projectsData } from '../data/projectsData';
import { neuCardStyles, responsiveGridStyles } from '../utils/styleUtils';

const DigitalLiteracyProgram = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const project = projectsData["digital-literacy"];

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
                <motion.div
                  key={index}
                  className={`${neuCardStyles({ elevation: "low" })} p-4 rounded-lg`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg font-semibold mb-2 text-deepGreen-700">{feature.title}</h3>
                  <p className="text-sm text-deepGreen-600">{feature.description}</p>
                </motion.div>
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
