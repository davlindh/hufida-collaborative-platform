import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const impactStats = [
  { title: "Lives Impacted", value: "10,000+" },
  { title: "Projects Completed", value: "50+" },
  { title: "Countries Reached", value: "15" },
  { title: "Volunteers Engaged", value: "500+" },
];

const ImpactStats = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-blue-600">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">{stat.title}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;