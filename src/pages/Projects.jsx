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
    details: {
      approach: "We're implementing a tiered pricing model for waste collection, with designated bins for organics, recyclables, and general waste. Our state-of-the-art facility will convert organic waste into high-quality compost, while recyclables will be processed and sold to manufacturers.",
      challenges: "Initial challenges include public education on waste segregation, establishing efficient collection routes, and securing partnerships with local businesses for recycled materials.",
      future: "We envision expanding this model to neighboring communities and developing a range of eco-friendly products from recycled materials, further boosting local employment and sustainability efforts."
    }
  },
  {
    title: "Information Clearing House",
    description: "Setting up a Documentation Center on African development to provide valuable resources and information.",
    objectives: [
      "Establish a comprehensive database of African development resources",
      "Provide easy access to information for researchers and policymakers",
      "Foster knowledge sharing and collaboration among development stakeholders"
    ],
    impact: "The Information Clearing House has become a central hub for African development research, serving over 5,000 users annually and contributing to evidence-based policy making across the continent."
  },
  {
    title: "Wildlife Conservation",
    description: "Assisting in the conservation, restoration, and protection of wildlife, habitats, and associated biodiversity in Africa.",
    objectives: [
      "Protect endangered species and their habitats",
      "Promote sustainable eco-tourism initiatives",
      "Engage local communities in conservation efforts"
    ],
    impact: "Our wildlife conservation projects have helped protect over 100,000 acres of critical habitat and contributed to the recovery of several endangered species populations."
  },
  {
    title: "Humanitarian Aid Delivery",
    description: "Delivering food and non-food items to vulnerable persons in conflict zones, focusing on women, children, the elderly, and disabled individuals.",
    objectives: [
      "Provide emergency relief to conflict-affected communities",
      "Ensure equitable distribution of aid to vulnerable groups",
      "Implement sustainable solutions for long-term recovery"
    ],
    impact: "Our humanitarian aid efforts have reached over 250,000 individuals in conflict zones, providing essential supplies and support for rebuilding lives."
  },
  {
    title: "Development Newsletter",
    description: "Producing a monthly newsletter on development and humanitarian challenges in Africa to raise awareness and share insights.",
    objectives: [
      "Increase awareness of African development challenges and opportunities",
      "Share best practices and success stories from across the continent",
      "Foster dialogue and collaboration among development practitioners"
    ],
    impact: "The Development Newsletter has grown to reach a global audience of over 1 million readers, becoming a trusted source of information on African development issues."
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