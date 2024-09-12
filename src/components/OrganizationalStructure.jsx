import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OrganizationalStructure = () => {
  const organs = [
    { name: "General Assembly", description: "The decision-making body consisting of all members" },
    { name: "Management Board", description: "Responsible for day-to-day operations, led by a Director" },
    { name: "International Advisory Board", description: "Composed of five persons of high moral and international repute" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Organizational Structure</CardTitle>
      </CardHeader>
      <CardContent>
        <p>HUFIDA operates with three main organs:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          {organs.map((organ, index) => (
            <li key={index}>
              <strong>{organ.name}:</strong> {organ.description}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default OrganizationalStructure;