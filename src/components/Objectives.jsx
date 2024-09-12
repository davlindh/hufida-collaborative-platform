import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const objectives = [
  { title: "Awareness", description: "Create awareness about poverty and sustainable development challenges in Africa" },
  { title: "Empowerment", description: "Empower vulnerable and marginalized groups with innovative tools for poverty alleviation" },
  { title: "Community Support", description: "Support local African communities for integrated development and socio-cultural cohesion" },
  { title: "Infrastructure", description: "Develop and deploy infrastructure for stable future aid" },
];

const Objectives = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Our Objectives</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {objectives.map((objective, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{objective.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{objective.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Objectives;