import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Objectives = () => {
  const objectives = [
    "Create awareness about poverty and sustainable development challenges in Africa",
    "Empower vulnerable and marginalized groups with innovative tools for poverty alleviation",
    "Support local African communities for integrated development and socio-cultural cohesion",
    "Develop and deploy infrastructure for stable future aid"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Our Objectives</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Objectives;