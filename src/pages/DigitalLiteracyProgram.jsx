import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@/components/ui/tooltip";
import ProjectHeader from '../components/ProjectHeader';
import ProjectTabs from '../components/ProjectTabs';
import ProjectFeatures from '../components/ProjectFeatures';
import ProjectVision from '../components/ProjectVision';
import GetInvolvedButton from '../components/GetInvolvedButton';
import SuggestDirectionDialog from '../components/SuggestDirectionDialog';
import { projectsData } from '../data/projectsData';

const DigitalLiteracyProgram = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const project = projectsData["digital-literacy"];

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <ProjectHeader title={project.title} />
          <ProjectTabs sections={project.sections} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProjectFeatures features={project.features} />
          <ProjectVision vision={project.vision} />
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

export default DigitalLiteracyProgram;
