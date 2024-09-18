import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { neuCardStyles, neuTooltipStyles } from '../utils/styleUtils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full mb-8">
      {isMobile ? (
        <Select value={activeTab} onValueChange={handleTabChange}>
          <SelectTrigger className="w-full mb-4 bg-deepGreen-50 border-deepGreen-200 text-deepGreen-800 shadow-inner">
            <SelectValue placeholder="Select a section" />
          </SelectTrigger>
          <SelectContent className="bg-deepGreen-50 border-deepGreen-200">
            {sections.map((section) => (
              <SelectItem key={section.id} value={section.id} className="text-deepGreen-800 hover:bg-deepGreen-100">
                {section.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <TabsList className="flex flex-wrap justify-center w-full p-1 bg-deepGreen-100 rounded-lg shadow-md">
          {sections.map((section) => (
            <Tooltip key={section.id}>
              <TooltipTrigger asChild>
                <TabsTrigger 
                  value={section.id} 
                  className="flex-grow text-deepGreen-700 data-[state=active]:bg-deepGreen-200 data-[state=active]:shadow-inner focus:ring-2 focus:ring-deepGreen-300 focus:outline-none rounded-md transition-all duration-200 m-1 py-2 px-3 text-sm sm:text-base"
                >
                  {section.title}
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent className={neuTooltipStyles()}><p>{section.tooltip}</p></TooltipContent>
            </Tooltip>
          ))}
        </TabsList>
      )}
      {sections.map((section) => (
        <TabsContent key={section.id} value={section.id}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className={neuCardStyles({ elevation: "low" })}>
              <CardHeader><CardTitle className="text-deepGreen-700">{section.title}</CardTitle></CardHeader>
              <CardContent><p className="text-deepGreen-600">{section.content}</p></CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ProjectTabs;
