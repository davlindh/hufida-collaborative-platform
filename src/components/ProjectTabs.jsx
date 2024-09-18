import React from 'react';
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { neuCardStyles, neuTabStyles, neuButtonStyles } from '../utils/styleUtils';

const ProjectTabs = ({ sections, activeTab, setActiveTab }) => {
  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const tabVariants = {
    active: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } },
    inactive: { scale: 1 }
  };

  return (
    <div className={`${neuCardStyles({ elevation: "low" })} bg-gradient-to-r from-deepGreen-100 to-deepGreen-200 p-4 rounded-lg`}>
      <div className="md:hidden">
        <Select value={activeTab} onValueChange={handleTabChange}>
          <SelectTrigger className={`${neuButtonStyles({ variant: "secondary", size: "sm" })} w-full bg-white text-deepGreen-800 focus:ring-2 focus:ring-deepGreen-300 focus:outline-none rounded-md transition-all duration-200`}>
            <SelectValue placeholder="Select a section" />
          </SelectTrigger>
          <SelectContent>
            {sections.map((section) => (
              <SelectItem
                key={section.id}
                value={section.id}
                className={`${neuTabStyles({ state: activeTab === section.id ? "active" : "default" })} text-deepGreen-800 focus:bg-deepGreen-100 focus:text-deepGreen-900 rounded-md transition-all duration-200`}
              >
                {section.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="hidden md:block">
        <ScrollArea className="w-full">
          <div className={`${neuCardStyles({ elevation: "medium" })} bg-deepGreen-100 rounded-lg p-2 flex space-x-2 overflow-x-auto`}>
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => handleTabChange(section.id)}
                className={`${neuTabStyles({ state: activeTab === section.id ? "active" : "default" })} ${neuButtonStyles({ variant: "secondary", size: "sm" })} px-4 py-2 rounded-md text-deepGreen-800 focus:outline-none focus:ring-2 focus:ring-deepGreen-300 transition-all duration-200 whitespace-nowrap`}
                variants={tabVariants}
                animate={activeTab === section.id ? "active" : "inactive"}
              >
                {section.title}
              </motion.button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ProjectTabs;
