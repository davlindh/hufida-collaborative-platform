import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const FavingProject = () => {
  const features = [
    {
      title: "User Profiles",
      description: "Create personalized profiles showcasing skills, interests, and project involvements.",
      details: [
        "Customizable Avatars",
        "Skill Tags",
        "Project Portfolios",
        "Engagement Statistics"
      ]
    },
    {
      title: "Collaboration Tools",
      description: "Suite of tools for initiating, managing, and contributing to collaborative projects.",
      details: [
        "Project Creation and Management",
        "Task Assignment and Tracking",
        "Real-time Document Editing",
        "Discussion Forums"
      ]
    },
    {
      title: "Knowledge Portals",
      description: "Curated spaces for sharing and discovering articles, tutorials, and resources.",
      details: [
        "Content Submission and Categorization",
        "User Ratings and Reviews",
        "Expert Panels and Webinars",
        "Resource Libraries"
      ]
    },
    {
      title: "Matching Algorithm",
      description: "Advanced system to connect users based on shared interests and project needs.",
      details: [
        "Contextual Matching",
        "Recommendations for Connections",
        "Skill-based Team Formations",
        "Matching Opportunity Notifications"
      ]
    },
    {
      title: "Evaluation System",
      description: "Mechanisms for offering and receiving feedback on content and contributions.",
      details: [
        "Rating and Review System",
        "Feedback Loops",
        "Quality Indicators",
        "Community Endorsements"
      ]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Introducing Faving: Our Latest Initiative</h2>
      <Card>
        <CardHeader>
          <CardTitle>Faving: The Social Exchange Engine</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            HUFIDA is proud to present Faving, our groundbreaking digital platform designed to revolutionize social interactions, knowledge sharing, and collaboration. As the first Social Exchange Engine, Faving aims to empower communities and individuals to make informed decisions through collective intelligence.
          </p>
          <p className="mb-4">
            Faving integrates advanced technologies such as digital twins and data recycling to create a dynamic, immersive environment where users can collaborate on projects, share knowledge, and drive meaningful change in areas like climate action and community development.
          </p>
          <p className="mb-4">Key features of Faving include:</p>
          <ScrollArea className="h-[300px] w-full rounded-md border p-4">
            <TooltipProvider>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Card className="hover:shadow-md transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <ul className="list-disc pl-4">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="text-sm">{detail}</li>
                        ))}
                      </ul>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </ScrollArea>
          <p className="mt-4">
            We're currently in the development phase of Faving, with plans to launch a beta version in the coming months. Stay tuned for updates on this exciting project!
          </p>
          <Button asChild className="mt-4">
            <Link to="/projects">Learn More About Our Projects</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default FavingProject;