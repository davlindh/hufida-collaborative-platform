import React, { useState, lazy, Suspense } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ProjectList from '../components/ProjectList';

const ProjectDetails = lazy(() => import('../components/ProjectDetails'));

const projects = [
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
  // ... other projects remain unchanged
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