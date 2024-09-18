import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { neuCardStyles, neuTabStyles } from '../utils/styleUtils';

const ProjectTabs = ({ sections, activeTab, setActiveTab }) => {
  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const tabVariants = {
    active: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } },
    inactive: { scale: 1 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-4"
    >
      <ScrollArea className="w-full">
        <div className={`${neuCardStyles({ elevation: "low" })} bg-deepGreen-100 rounded-lg p-2`}>
          <Select value={activeTab} onValueChange={handleTabChange}>
            <SelectTrigger className={`${neuTabStyles({ state: "default" })} w-full bg-white text-deepGreen-800 focus:ring-2 focus:ring-deepGreen-300 focus:outline-none rounded-md transition-all duration-200`}>
              <SelectValue placeholder="Select a section" />
            </SelectTrigger>
            <SelectContent>
              <AnimatePresence mode="wait">
                {sections.map((section) => (
                  <SelectItem
                    key={section.id}
                    value={section.id}
                    className={`${neuTabStyles({ state: activeTab === section.id ? "active" : "default" })} text-deepGreen-800 focus:bg-deepGreen-100 focus:text-deepGreen-900 rounded-md transition-all duration-200`}
                  >
                    {section.title}
                  </SelectItem>
                ))}
              </AnimatePresence>
            </SelectContent>
          </Select>
        </div>
      </ScrollArea>
      <AnimatePresence mode="wait">
        {sections.map((section) => (
          activeTab === section.id && (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <div className={`${neuCardStyles({ elevation: "low" })} bg-white p-6 rounded-xl`}>
                <h2 className="text-2xl font-semibold mb-4 text-deepGreen-900">{section.title}</h2>
                <p className="text-deepGreen-800 leading-relaxed">{section.content}</p>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectTabs;
