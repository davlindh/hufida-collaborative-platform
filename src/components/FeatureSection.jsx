import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    title: "Knowledge Sharing",
    description: "Access a curated knowledge base and connect with experts in various fields.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Skill Marketplace",
    description: "Find skilled individuals or offer your expertise to support meaningful projects.",
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: "Efficient Collaboration",
    description: "Utilize powerful tools for project management and seamless communication.",
  },
  {
    icon: <Globe className="h-8 w-8 text-green-500" />,
    title: "Global Impact",
    description: "Join a worldwide community working together to address pressing challenges.",
  },
];

const FeatureSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Faving?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {feature.icon}
                <span className="ml-2">{feature.title}</span>
              </CardTitle>
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

export default FeatureSection;