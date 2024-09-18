import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { neuTabStyles, neuCardStyles } from '../utils/styleUtils';

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
    <div className="mb-8">
      {isMobile ? (
        <Select value={activeTab} onValueChange={handleTabChange}>
          <SelectTrigger className={`w-full mb-4 ${neuCardStyles({ elevation: "low" })} text-deepGreen-800`}>
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
          <TabsList className={`flex flex-wrap justify-center w-full p-1 ${neuCardStyles({ elevation: "low" })} bg-deepGreen-100 rounded-lg`}>
            {sections.map((section) => (
              <TabsTrigger
                key={section.id}
                value={section.id}
                className={`${neuTabStyles()} text-deepGreen-700 data-[state=active]:bg-deepGreen-200 data-[state=active]:shadow-inner focus:ring-2 focus:ring-deepGreen-300 focus:outline-none rounded-md transition-all duration-200 m-1 py-2 px-3 text-sm sm:text-base`}
              >
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}
    </div>
  );
};

export default ProjectTabs;
