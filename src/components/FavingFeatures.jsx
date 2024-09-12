import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Knowledge Sharing",
    description: "Access a curated knowledge base and connect with experts in various fields."
  },
  {
    title: "Skill Marketplace",
    description: "Offer your skills or find talented individuals for your projects."
  },
  {
    title: "Project Collaboration",
    description: "Initiate, join, or support impactful projects in your community and beyond."
  },
  {
    title: "Community Engagement",
    description: "Connect with like-minded individuals and organizations to drive positive change."
  }
];

const FavingFeatures = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Key Features of Faving</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FavingFeatures;