import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { neuCardStyles } from '../utils/styleUtils';
import { ScrollArea } from "@/components/ui/scroll-area";

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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-4"
    >
      {isMobile ? (
        <ScrollArea className="w-full">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className={`flex w-max space-x-2 p-1 ${neuCardStyles({ elevation: "low" })} bg-white rounded-lg`}>
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  variants={tabVariants}
                  animate={activeTab === section.id ? "active" : "inactive"}
                >
                  <TabsTrigger
                    value={section.id}
                    className={`${neuCardStyles({ elevation: "low" })} text-deepGreen-700 data-[state=active]:bg-deepGreen-200 data-[state=active]:text-deepGreen-800 data-[state=active]:shadow-md focus:ring-2 focus:ring-deepGreen-300 focus:outline-none rounded-md transition-all duration-200 py-2 px-4 text-sm whitespace-nowrap`}
                  >
                    {section.title}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </Tabs>
        </ScrollArea>
      ) : (
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className={`flex justify-center w-full p-1 ${neuCardStyles({ elevation: "low" })} bg-white rounded-lg`}>
            {sections.map((section) => (
              <motion.div
                key={section.id}
                variants={tabVariants}
                animate={activeTab === section.id ? "active" : "inactive"}
              >
                <TabsTrigger
                  value={section.id}
                  className={`${neuCardStyles({ elevation: "low" })} text-deepGreen-700 data-[state=active]:bg-deepGreen-200 data-[state=active]:text-deepGreen-800 data-[state=active]:shadow-md focus:ring-2 focus:ring-deepGreen-300 focus:outline-none rounded-md transition-all duration-200 m-1 py-2 px-4 text-sm sm:text-base`}
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
