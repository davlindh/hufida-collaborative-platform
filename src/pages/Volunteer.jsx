import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Volunteer = () => {
  const opportunities = [
    {
      title: "Event Organizer",
      description: "Help organize seminars, conferences, and workshops on sustainable development in Africa.",
    },
    {
      title: "Research Assistant",
      description: "Contribute to the Information Clearing House by researching and documenting African development issues.",
    },
    {
      title: "Community Outreach",
      description: "Assist in creating awareness about poverty and sustainable development challenges in Africa.",
    },
    {
      title: "Newsletter Contributor",
      description: "Write articles or help produce our monthly newsletter on development and humanitarian challenges in Africa.",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Volunteer Opportunities</h1>
      <p className="mb-8">Join us in our mission to create positive change in Africa. Here are some ways you can contribute your time and skills:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {opportunities.map((opportunity, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{opportunity.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{opportunity.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Button className="w-full">Apply to Volunteer</Button>
    </div>
  );
};

export default Volunteer;