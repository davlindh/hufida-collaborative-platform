import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const projectsData = {
  faving: {
    title: "Faving: The Social Exchange Engine",
    sections: [
      {
        id: "about",
        title: "About",
        content: "Faving is a groundbreaking digital platform designed to revolutionize social interactions, knowledge sharing, and collaboration. As the first Social Exchange Engine, Faving aims to empower communities and individuals to make informed decisions through collective intelligence.",
        tooltip: "Learn about Faving's mission and purpose"
      },
      {
        id: "objectives",
        title: "Objectives",
        content: "Our key objectives include creating a dynamic platform for community engagement, implementing advanced technologies, fostering collective intelligence, supporting global initiatives, and providing personalized user experiences.",
        tooltip: "Discover Faving's main goals"
      },
      {
        id: "approach",
        title: "Approach",
        content: "We're developing Faving using cutting-edge technologies and user-centric design principles. The platform integrates features such as real-time collaboration tools, virtual simulations, and adaptive interfaces to create an immersive and effective user experience.",
        tooltip: "Explore how we're building Faving"
      },
      {
        id: "impact",
        title: "Impact",
        content: "Faving aims to transform how communities collaborate, share knowledge, and take action on complex global issues, potentially reaching millions of users worldwide.",
        tooltip: "Learn about Faving's potential impact"
      },
      {
        id: "future",
        title: "Future Plans",
        content: "We envision Faving becoming a global platform for collective action, supporting initiatives in areas such as climate change mitigation, community development, and global cooperation. Future plans include integrating AI-driven insights and expanding to support multiple languages and cultures.",
        tooltip: "See what's next for Faving"
      }
    ],
    features: [
      { title: "User Profiles", description: "Create personalized profiles showcasing skills, interests, and project involvements." },
      { title: "Collaboration Tools", description: "Suite of tools for initiating, managing, and contributing to collaborative projects." },
      { title: "Knowledge Portals", description: "Curated spaces for sharing and discovering articles, tutorials, and resources." },
      { title: "Matching Algorithm", description: "Advanced system to connect users based on shared interests and project needs." },
      { title: "Evaluation System", description: "Mechanisms for offering and receiving feedback on content and contributions." },
      { title: "Data Visualization", description: "Interactive tools to visualize complex data and trends." }
    ],
    vision: "Our vision for Faving is to create a global ecosystem where knowledge, skills, and resources are seamlessly exchanged to address the world's most pressing challenges. By harnessing the power of collective intelligence and advanced technologies, we aim to empower individuals and communities to drive positive change on a scale never before possible."
  },
  "sustainable-waste-management": {
    title: "Sustainable Waste Management in Bamenda",
    sections: [
      {
        id: "about",
        title: "About",
        content: "A comprehensive plan to revolutionize waste management and composting operations in Bamenda, Cameroon, through the deployment of a mobile application integrated with Mappost's route optimization technology.",
        tooltip: "Learn about the project's goals and approach"
      },
      {
        id: "objectives",
        title: "Objectives",
        content: "Our key objectives include optimizing waste collection routes, increasing composting, educating the community, and utilizing real-time data for continuous improvement.",
        tooltip: "Discover the project's main goals"
      },
      {
        id: "implementation",
        title: "Implementation",
        content: "Our implementation plan includes needs assessment, technology deployment, training, pilot testing, citywide expansion, and community engagement campaigns.",
        tooltip: "Explore how we're putting the plan into action"
      },
      {
        id: "partnerships",
        title: "Partnerships",
        content: "We're collaborating with HYSACAM, Green Care West Africa, Bamenda City Council, and various environmental organizations to ensure the project's success.",
        tooltip: "See who we're working with"
      },
      {
        id: "impact",
        title: "Impact",
        content: "Expected outcomes include reduced logistics expenses, lower emissions, improved soil quality, and increased public involvement in waste management.",
        tooltip: "Learn about the project's potential impact"
      }
    ],
    features: [
      { title: "Route Optimization", description: "Utilize Mappost's technology to optimize waste collection routes" },
      { title: "Mobile Application", description: "Deploy a user-friendly app for waste management operations" },
      { title: "Community Engagement", description: "Educate and involve the community in waste segregation and composting" },
      { title: "Real-time Data Analysis", description: "Use data for continuous improvement of waste management" },
      { title: "Composting Initiative", description: "Increase composting to enhance soil fertility and reduce landfill waste" },
      { title: "Partnerships", description: "Collaborate with local and international organizations for project success" }
    ],
    vision: "Our vision is to transform Bamenda into a model city for sustainable waste management in Cameroon. By leveraging technology and community engagement, we aim to create a cleaner, healthier environment while also generating economic opportunities through improved waste management practices."
  },
  "sustainability-incubator-lab": {
    title: "The Sustainability Project Incubator LAB",
    sections: [
      {
        id: "about",
        title: "About",
        content: "The Sustainability Project Incubator LAB is a national consultative firm with several projects at the local and national level. We have years of experience in advancing science, innovation and strategic leadership aimed at fostering a strong economy that thrives within nature's limits.",
        tooltip: "Learn about our mission and expertise"
      },
      {
        id: "objectives",
        title: "Objectives",
        content: "Our key objectives include accelerating the transition to a sustainable society in Cameroon, transforming Cameroon into a work site for economic emergence, creating and distributing wealth fairly, and ensuring sustainable growth and enhanced food security.",
        tooltip: "Discover our main goals for Cameroon"
      },
      {
        id: "approach",
        title: "Approach",
        content: "We employ the Framework for Strategic Sustainable Development (FSSD), a science-based approach used successfully in hundreds of forward-thinking organizations worldwide. This framework helps organizations embed sustainability into their strategies, operations, products, services, and community plans.",
        tooltip: "Explore our scientific methodology"
      },
      {
        id: "impact",
        title: "Impact",
        content: "Our work has led to significant improvements in sustainable practices across various sectors in Cameroon, including agriculture, energy, and urban development. We've helped numerous organizations reduce their environmental footprint while improving their economic performance.",
        tooltip: "Learn about our achievements"
      },
      {
        id: "future",
        title: "Future Plans",
        content: "We aim to expand our reach to more regions in Cameroon and potentially other African countries. We're also developing new tools and methodologies to address emerging sustainability challenges, such as climate change adaptation and circular economy implementation.",
        tooltip: "See what's next for our lab"
      }
    ],
    features: [
      { title: "Sustainability Assessment", description: "Comprehensive evaluation of organizational sustainability practices." },
      { title: "Strategic Planning", description: "Develop long-term sustainability strategies aligned with business goals." },
      { title: "Innovation Workshops", description: "Facilitate sessions to generate sustainable solutions to complex problems." },
      { title: "Policy Advocacy", description: "Work with policymakers to promote sustainable development regulations." },
      { title: "Capacity Building", description: "Train organizations and communities in sustainable practices." },
      { title: "Monitoring and Evaluation", description: "Track and report on sustainability progress and impact." }
    ],
    vision: "We envision a Cameroon where sustainable development is at the core of all economic activities, where businesses thrive while preserving natural resources, and where communities prosper in harmony with their environment. Through our work, we aim to position Cameroon as a leader in sustainable development in Africa, showcasing how economic growth and environmental stewardship can go hand in hand."
  }
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState("about");
  const project = projectsData[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

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
            {project.title}
          </motion.h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-5">
              {project.sections.map((section) => (
                <Tooltip key={section.id}>
                  <TooltipTrigger asChild>
                    <TabsTrigger value={section.id}>{section.title}</TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent><p>{section.tooltip}</p></TooltipContent>
                </Tooltip>
              ))}
            </TabsList>
            {project.sections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardHeader><CardTitle>{section.title}</CardTitle></CardHeader>
                    <CardContent><p>{section.content}</p></CardContent>
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
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardHeader><CardTitle className="text-lg">{feature.title}</CardTitle></CardHeader>
                      <CardContent><p className="text-sm">{feature.description}</p></CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to learn more about this feature</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </motion.div>

          <motion.section 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Project Vision</h2>
            <Card>
              <CardContent className="p-6">
                <p>{project.vision}</p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="w-full">Get Involved with {project.title}</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Learn how you can contribute to this project</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
};

export default ProjectDetails;