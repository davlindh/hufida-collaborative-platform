import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { neuCardStyles } from '../utils/styleUtils';

const Objectives = () => {
  const objectives = [
    "Create awareness about poverty and sustainable development challenges in Africa",
    "Empower vulnerable and marginalized groups with innovative tools for poverty alleviation",
    "Support local African communities for integrated development and socio-cultural cohesion",
    "Develop and deploy infrastructure for stable future aid"
  ];

  return (
    <Card className={`${neuCardStyles({ elevation: "medium" })} bg-deepGreen-700 text-white`}>
      <CardHeader>
        <CardTitle className="text-white">Our Objectives</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 text-white">
          {objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Objectives;
