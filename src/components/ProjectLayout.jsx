import React from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import { Skeleton } from "@/components/ui/skeleton";
import ProjectHeader from './ProjectHeader';
import ProjectTabs from './ProjectTabs';
import ProjectFeatures from './ProjectFeatures';
import ProjectVision from './ProjectVision';
import GetInvolvedButton from './GetInvolvedButton';
import SuggestDirectionDialog from './SuggestDirectionDialog';
import { neuCardStyles } from '../utils/styleUtils';

const ErrorFallback = ({ error }) => (
  <div role="alert" className="text-center py-10 text-red-500">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
);

const LoadingSkeleton = () => (
  <div className="space-y-4" aria-label="Loading project content">
    <Skeleton className="h-8 w-3/4 mx-auto" />
    <Skeleton className="h-4 w-1/2 mx-auto" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[...Array(3)].map((_, i) => (
        <Skeleton key={i} className="h-40" />
      ))}
    </div>
  </div>
);

const ProjectLayout = ({ title, subtitle, sections, features, vision, partnerships, isLoading }) => {
  const [activeTab, setActiveTab] = React.useState("about");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  if (isLoading) return <LoadingSkeleton />;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <TooltipProvider>
        <main className="bg-gradient-to-b from-deepGreen-800 to-deepGreen-600 min-h-screen text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`${neuCardStyles({ elevation: "medium" })} bg-deepGreen-700 rounded-xl shadow-lg overflow-hidden`}
            >
              <ProjectHeader title={title} subtitle={subtitle} />
              <ProjectTabs sections={sections} activeTab={activeTab} setActiveTab={setActiveTab} />
              <AnimatePresence mode="sync">
                {sections.map((section) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: activeTab === section.id ? 1 : 0, y: activeTab === section.id ? 0 : 20 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`${activeTab === section.id ? 'block' : 'hidden'} p-6`}
                  >
                    <div className={`${neuCardStyles({ elevation: "low" })} bg-deepGreen-600 p-6 rounded-xl`}>
                      <h2 className="text-2xl font-semibold mb-4 text-white">{section.title}</h2>
                      <p className="text-white leading-relaxed">{section.content}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <ProjectFeatures features={features} />
              <ProjectVision vision={vision} partnerships={partnerships} />
              <div className="mt-8 flex justify-center p-6">
                <GetInvolvedButton 
                  title={title} 
                  setIsDialogOpen={setIsDialogOpen} 
                  className="w-full sm:w-auto"
                />
              </div>
            </motion.div>
          </div>
        </main>
      </TooltipProvider>
      <SuggestDirectionDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        projectTitle={title}
      />
    </ErrorBoundary>
  );
};

export default ProjectLayout;
