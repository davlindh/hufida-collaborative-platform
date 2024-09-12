import React, { lazy, Suspense } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import TabContent from './TabContent';

const ProjectObjectives = lazy(() => import('./ProjectObjectives'));
const ProjectImpact = lazy(() => import('./ProjectImpact'));
const ProjectChallenges = lazy(() => import('./ProjectChallenges'));
const ProjectFuture = lazy(() => import('./ProjectFuture'));

const ProjectAbout = ({ project }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    return <div>Loading project details...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Tabs defaultValue="overview" className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 gap-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="objectives">Objectives</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
          <TabsTrigger value="approach">Approach</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <TabContent title="Project Overview">
            <p className="text-sm sm:text-base">{project.description || 'No description available.'}</p>
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Project Progress</h4>
              <Progress value={progress} className="w-full" />
              <p className="text-xs sm:text-sm text-gray-500 mt-1">{progress}% Complete</p>
            </div>
          </TabContent>
        </TabsContent>
        <TabsContent value="objectives">
          <TabContent title="Project Objectives">
            <ProjectObjectivesList objectives={project.objectives} />
          </TabContent>
        </TabsContent>
        <TabsContent value="impact">
          <TabContent title="Project Impact">
            <p className="text-sm sm:text-base">{project.impact || 'Impact information not available.'}</p>
          </TabContent>
        </TabsContent>
        <TabsContent value="approach">
          <TabContent title="Project Approach">
            <p className="text-sm sm:text-base">{project.approach || 'Approach information not available.'}</p>
          </TabContent>
        </TabsContent>
        <TabsContent value="challenges">
          <TabContent title="Challenges & Solutions">
            <ProjectChallengesSolutions challenges={project.challenges} solutions={project.solutions} />
          </TabContent>
        </TabsContent>
      </Tabs>
      
      <ScrollArea className="h-[300px] sm:h-[400px] w-full rounded-md border p-4 shadow-inner bg-gray-50">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="objectives">
            <AccordionTrigger>Detailed Objectives</AccordionTrigger>
            <AccordionContent>
              <Suspense fallback={<div>Loading...</div>}>
                <ProjectObjectives objectives={project.objectives || []} />
              </Suspense>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="impact">
            <AccordionTrigger>Detailed Impact</AccordionTrigger>
            <AccordionContent>
              <Suspense fallback={<div>Loading...</div>}>
                <ProjectImpact impact={project.impact || ''} />
              </Suspense>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="challenges">
            <AccordionTrigger>Challenges and Solutions</AccordionTrigger>
            <AccordionContent>
              <Suspense fallback={<div>Loading...</div>}>
                <ProjectChallenges challenges={project.challenges || []} solutions={project.solutions || []} />
              </Suspense>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="future">
            <AccordionTrigger>Future Plans</AccordionTrigger>
            <AccordionContent>
              <Suspense fallback={<div>Loading...</div>}>
                <ProjectFuture future={project.future || ''} />
              </Suspense>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>

      <div className="mt-6 flex justify-center">
        <Button>Get Involved</Button>
      </div>
    </div>
  );
};

const ProjectObjectivesList = ({ objectives }) => (
  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
    {objectives && objectives.length > 0 ? (
      objectives.map((objective, index) => (
        <li key={index}>{objective}</li>
      ))
    ) : (
      <li>No objectives specified.</li>
    )}
  </ul>
);

const ProjectChallengesSolutions = ({ challenges, solutions }) => (
  <div className="space-y-4 text-sm sm:text-base">
    <div>
      <h4 className="font-semibold mb-2">Challenges:</h4>
      <ul className="list-disc pl-5 space-y-1">
        {challenges && challenges.length > 0 ? (
          challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))
        ) : (
          <li>No challenges specified.</li>
        )}
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-2">Solutions:</h4>
      <ul className="list-disc pl-5 space-y-1">
        {solutions && solutions.length > 0 ? (
          solutions.map((solution, index) => (
            <li key={index}>{solution}</li>
          ))
        ) : (
          <li>No solutions specified.</li>
        )}
      </ul>
    </div>
  </div>
);

export default ProjectAbout;