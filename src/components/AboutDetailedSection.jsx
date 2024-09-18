import React, { lazy, Suspense } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import AboutSection from './AboutSection';

const AboutDetailedSection = ({ id, title, icon }) => {
  const Component = lazy(() => import(`./${id.charAt(0).toUpperCase() + id.slice(1)}`));

  return (
    <Card className="neu-card bg-white shadow-lg border-deepGreen-200">
      <CardContent className="p-6">
        <AboutSection
          icon={icon}
          title={title}
          content={
            <ScrollArea className="h-64 pr-4">
              <Suspense fallback={<div>Loading...</div>}>
                <Component />
              </Suspense>
            </ScrollArea>
          }
        />
      </CardContent>
    </Card>
  );
};

export default AboutDetailedSection;