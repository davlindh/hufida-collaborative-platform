import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectShowcase from '../components/ProjectShowcase';
import KnowledgeBaseHighlights from '../components/KnowledgeBaseHighlights';
import CommunitySpotlight from '../components/CommunitySpotlight';
import FeatureSection from '../components/FeatureSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <TooltipProvider>
        <ScrollArea className="h-screen">
          <main className="container mx-auto px-4 py-8">
            <Hero />
            
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Discover Faving</h2>
              <Tabs defaultValue="projects" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
                  <TabsTrigger value="community">Community</TabsTrigger>
                </TabsList>
                <TabsContent value="projects">
                  <ProjectShowcase />
                </TabsContent>
                <TabsContent value="knowledge">
                  <KnowledgeBaseHighlights />
                </TabsContent>
                <TabsContent value="community">
                  <CommunitySpotlight />
                </TabsContent>
              </Tabs>
            </motion.section>

            <FeatureSection />

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-12"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Join the Faving Movement</CardTitle>
                  <CardDescription>Be part of a community that's changing the world, one collaboration at a time.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center space-x-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button asChild size="lg">
                        <Link to="/signup">Sign Up Now</Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Create your Faving account and start collaborating</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button asChild variant="outline" size="lg">
                        <Link to="/about">Learn More</Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Discover how Faving is revolutionizing collaboration</p>
                    </TooltipContent>
                  </Tooltip>
                </CardContent>
              </Card>
            </motion.section>
          </main>
        </ScrollArea>
      </TooltipProvider>
      
      <footer className="bg-gray-100 p-4 mt-12">
        <div className="container mx-auto text-center text-sm text-gray-600">
          <p>&copy; 2024 Faving. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;