import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import ValueProposition from '../components/sustainability/ValueProposition';
import ImpactChart from '../components/sustainability/ImpactChart';
import ServicePath from '../components/sustainability/ServicePath';
import { motion } from "framer-motion";

const SustainabilityIncubatorLab = () => {
  const [activeTab, setActiveTab] = useState("about");

  const sections = [
    {
      id: "about",
      title: "About Us",
      content: "The Sustainability Project Incubator LAB is a national consultative firm with several projects at the local and national level. We have years of experience in advancing science, innovation and strategic leadership aimed at fostering a strong economy that thrives within nature's limits.",
      tooltip: "Learn about our mission and expertise"
    },
    {
      id: "mission",
      title: "Our Mission",
      content: "Our mission is to accelerate the transition to a sustainable society in Cameroon, which has embarked on an ambitious programme for economic emergence by 2035. We seek to transform Cameroon into a work site for economic emergence, creating and distributing wealth fairly, offering equal development opportunities, and ensuring sustainable growth and enhanced food security.",
      tooltip: "Discover our goals for Cameroon's sustainable future"
    },
    {
      id: "approach",
      title: "Our Approach",
      content: "We employ the Framework for Strategic Sustainable Development (FSSD), a science-based approach used successfully in hundreds of forward-thinking organizations worldwide. This framework helps organizations embed sustainability into their strategies, operations, products, services, and community plans.",
      tooltip: "Explore our scientific methodology"
    },
    {
      id: "services",
      title: "Our Services",
      content: "We offer a unique suite of advisory, coaching, training, and process facilitation services delivered by a national network of experienced professionals. Our services help businesses and communities integrate sustainability principles into core strategies, decisions, and operations.",
      tooltip: "See how we can help your organization"
    },
    {
      id: "contact",
      title: "Contact Us",
      content: "Fofuleng Babila, Sustainability Practitioner. Email: fofulengbabila@gmail.com, Telephone: 670172866/677554684, WhatsApp: +46700292915, Address: Vicky street Small Mankon Bamenda",
      tooltip: "Get in touch with our team"
    }
  ];

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <motion.h1 
            className="text-4xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Sustainability Project Incubator LAB
          </motion.h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-5">
              {sections.map((section) => (
                <Tooltip key={section.id}>
                  <TooltipTrigger asChild>
                    <TabsTrigger value={section.id}>
                      {section.title}
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{section.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TabsList>
            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{section.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <ImpactChart />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visualize our impact on sustainability</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <ServicePath />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Explore our comprehensive service offerings</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <ValueProposition />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Understand the value we bring to your organization</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>

          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <Card>
              <CardContent className="p-6">
                <p>Originally founded after a formative meeting with scientists and sustainability leaders in Bamenda, Cameroon, The Sustainability Project Incubator LAB has built a solid track record in supporting the emergence of role models for sustainable communities and business. We have worked with dozens of organizations to help them embed sustainability into their strategies, operations, products, services, and community plans.</p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="w-full">Contact Us for Collaboration Opportunities</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Reach out to discuss how we can work together</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
};

export default SustainabilityIncubatorLab;