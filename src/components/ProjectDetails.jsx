import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectDetails = ({ title, description, objectives, impact }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2">Description</h3>
        <p className="mb-4">{description}</p>
        <h3 className="font-semibold mb-2">Objectives</h3>
        <ul className="list-disc pl-5 mb-4">
          {objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
        <h3 className="font-semibold mb-2">Impact</h3>
        <p>{impact}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectDetails;