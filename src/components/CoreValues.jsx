import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const coreValues = [
  { title: "Innovation", description: "We strive for innovative solutions to address development challenges in Africa." },
  { title: "Empowerment", description: "We believe in empowering local communities to drive their own development." },
  { title: "Sustainability", description: "Our projects focus on long-term, sustainable impact." },
  { title: "Collaboration", description: "We work closely with partners to maximize our reach and effectiveness." },
];

const CoreValues = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coreValues.map((value, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-center text-blue-700">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;