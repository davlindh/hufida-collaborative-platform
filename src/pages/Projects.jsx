import React, { useState, lazy, Suspense } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ProjectList from '../components/ProjectList';

const ProjectDetails = lazy(() => import('../components/ProjectDetails'));

const projects = [
  {
    title: "Faving: The Social Exchange Engine",
    description: "HUFIDA's groundbreaking digital platform designed to revolutionize social interactions, knowledge sharing, and collaboration.",
    objectives: [
      "Create a dynamic platform for community engagement and decision-making",
      "Implement advanced technologies like digital twins and data recycling",
      "Foster collective intelligence and informed decision-making",
      "Support global initiatives such as climate action and sustainable development",
      "Provide personalized user experiences through data-driven insights"
    ],
    impact: "Faving aims to transform how communities collaborate, share knowledge, and take action on complex global issues, potentially reaching millions of users worldwide.",
    approach: "We're developing Faving using cutting-edge technologies and user-centric design principles. The platform will integrate features such as real-time collaboration tools, virtual simulations, and adaptive interfaces to create an immersive and effective user experience.",
    challenges: [
      "Ensuring data privacy and security",
      "Developing scalable infrastructure to support a growing user base",
      "Creating intuitive interfaces for complex functionalities"
    ],
    solutions: [
      "Implementing robust encryption and user authentication systems",
      "Utilizing cloud-based solutions and microservices architecture for scalability",
      "Conducting extensive user testing and iterative design processes",
      "Collaborating with cybersecurity experts to ensure data protection",
      "Developing comprehensive onboarding and tutorial systems for new users"
    ],
    future: "We envision Faving becoming a global platform for collective action, supporting initiatives in areas such as climate change mitigation, community development, and global cooperation. Future plans include integrating AI-driven insights and expanding to support multiple languages and cultures."
  },
  {
    title: "Sustainable Waste Management",
    description: "Implementing an innovative waste management system in Bamenda that collects, processes, and converts waste into usable products, promoting sanitation and creating jobs.",
    objectives: [
      "Establish a comprehensive waste collection and segregation system",
      "Develop a waste-to-compost conversion facility",
      "Create employment opportunities in waste management and recycling",
      "Reduce environmental impact by minimizing landfill usage",
      "Promote public awareness about proper waste disposal and recycling"
    ],
    impact: "The Sustainable Waste Management project aims to process over 70% of Bamenda's household waste, create 200+ jobs, and significantly reduce landfill usage within the first two years of operation.",
    approach: "We're implementing a tiered pricing model for waste collection, with designated bins for organics, recyclables, and general waste. Our state-of-the-art facility will convert organic waste into high-quality compost, while recyclables will be processed and sold to manufacturers.",
    challenges: [
      "Public education on waste segregation",
      "Establishing efficient collection routes",
      "Securing partnerships with local businesses for recycled materials"
    ],
    solutions: [
      "Launch comprehensive public awareness campaigns through various media channels",
      "Implement route optimization software to enhance collection efficiency",
      "Develop strategic partnerships with local businesses and offer incentives for using recycled materials",
      "Create a mobile app for residents to access information and schedule pickups",
      "Introduce a community rewards program to encourage participation and proper waste segregation"
    ],
    future: "We envision expanding this model to neighboring communities and developing a range of eco-friendly products from recycled materials, further boosting local employment and sustainability efforts."
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
      <p className="mb-8">Explore our ongoing projects and initiatives that align with HUFIDA's objectives and methods.</p>
      
      <ProjectList projects={projects} onProjectSelect={setSelectedProject} />

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Project Details</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectDetails project={selectedProject} />
            </Suspense>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;