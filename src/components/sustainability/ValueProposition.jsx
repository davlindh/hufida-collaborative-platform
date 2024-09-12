import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Rocket, Globe } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    { icon: <Lightbulb className="h-8 w-8 text-yellow-500" />, title: "Innovation", description: "Drive product and service innovation through transparency" },
    { icon: <Users className="h-8 w-8 text-blue-500" />, title: "Talent Attraction", description: "Attract and retain top talent with greater force" },
    { icon: <Rocket className="h-8 w-8 text-green-500" />, title: "Growth", description: "Access capital more easily by establishing a lower risk profile" },
    { icon: <Globe className="h-8 w-8 text-purple-500" />, title: "Brand Enhancement", description: "Differentiate your brand via enhanced reputation and credibility" }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Value Creation Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((value, index) => (
          <Card key={index}>
            <CardContent className="flex items-start p-6">
              {value.icon}
              <div className="ml-4">
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ValueProposition;