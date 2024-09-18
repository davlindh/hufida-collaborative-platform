import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { neuCardStyles } from '../utils/styleUtils';

const ProjectTabs = ({ sections, activeTab, setActiveTab }) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const tabVariants = {
    active: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } },
    inactive: { scale: 1 }
  };

  return (
    <motion.div 
      className="mt-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isMobile ? (
        <Select value={activeTab} onValueChange={handleTabChange}>
          <SelectTrigger className={`w-full mb-4 ${neuCardStyles({ elevation: "low" })} text-deepGreen-800 bg-deepGreen-100`}>
            <SelectValue placeholder="Select a section" />
          </SelectTrigger>
          <SelectContent className={`${neuCardStyles({ elevation: "medium" })} bg-deepGreen-50 border-deepGreen-200`}>
            {sections.map((section) => (
              <SelectItem key={section.id} value={section.id} className="text-deepGreen-800 hover:bg-deepGreen-100">
                {section.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className={`flex justify-center w-full p-1 ${neuCardStyles({ elevation: "low" })} bg-deepGreen-100 rounded-lg`}>
            {sections.map((section) => (
              <motion.div
                key={section.id}
                variants={tabVariants}
                animate={activeTab === section.id ? "active" : "inactive"}
              >
                <TabsTrigger
                  value={section.id}
                  className={`${neuCardStyles({ elevation: "low" })} text-deepGreen-700 data-[state=active]:bg-white data-[state=active]:text-deepGreen-800 focus:ring-2 focus:ring-deepGreen-300 focus:outline-none rounded-md transition-all duration-200 m-1 py-2 px-4 text-sm sm:text-base`}
                >
                  {section.title}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>
        </Tabs>
      )}
    </motion.div>
  );
};

export default ProjectTabs;
