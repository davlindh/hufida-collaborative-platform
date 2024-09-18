import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import AboutSection from './AboutSection';
import History from './about/History';
import Impact from './about/Impact';
import Partnerships from './about/Partnerships';
import Future from './about/Future';
import Team from './about/Team';

const AboutDetailedSection = ({ id, title, icon }) => {
  const getComponent = () => {
    switch (id) {
      case 'history':
        return <History />;
      case 'impact':
        return <Impact />;
      case 'partnerships':
        return <Partnerships />;
      case 'future':
        return <Future />;
      case 'team':
        return <Team />;
      default:
        return null;
    }
  };

  return (
    <Card className="neu-card bg-deepGreen-700 shadow-lg border-deepGreen-600">
      <CardContent className="p-6">
        <AboutSection
          icon={icon}
          title={title}
          content={
            <ScrollArea className="h-64 pr-4">
              <div className="text-white">
                {getComponent()}
              </div>
            </ScrollArea>
          }
        />
      </CardContent>
    </Card>
  );
};

export default AboutDetailedSection;
