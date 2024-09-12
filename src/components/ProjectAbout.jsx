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
    <div className="max-w-4xl mx-auto">
      <Tabs defaultValue="overview" className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="objectives">Objectives</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
          <TabsTrigger value="approach">Approach</TabsTrigger>
          <TabsTrigger value="challenges">Challenges & Solutions</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <TabContent title="Project Overview">
            <p>{project.description}</p>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Project Progress</h4>
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-gray-500 mt-1">{progress}% Complete</p>
            </div>
          </TabContent>
        </TabsContent>
        <TabsContent value="objectives">
          <TabContent title="Project Objectives">
            <ul className="list-disc pl-5 space-y-2">
              {project.objectives && project.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </TabContent>
        </TabsContent>
        <TabsContent value="impact">
          <TabContent title="Project Impact">
            <p>{project.impact}</p>
          </TabContent>
        </TabsContent>
        <TabsContent value="approach">
          <TabContent title="Project Approach">
            <p>{project.approach}</p>
          </TabContent>
        </TabsContent>
        <TabsContent value="challenges">
          <TabContent title="Challenges & Solutions">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Challenges:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {project.challenges && project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Solutions:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {project.solutions && project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </TabContent>
        </TabsContent>
      </Tabs>
      
      <ScrollArea className="h-[400px] w-full rounded-md border p-4 shadow-inner bg-gray-50">
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

export default ProjectAbout;