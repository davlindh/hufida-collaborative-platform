import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { neuCardStyles } from '../utils/styleUtils';

const Methods = () => {
  const methods = [
    "Organize seminars, conferences, and workshops on sustainable development in Africa",
    "Set up an Information Clearing House and Documentation Center on African development",
    "Assist in wildlife conservation and habitat protection efforts",
    "Deliver humanitarian aid to vulnerable persons in conflict zones",
    "Produce a monthly newsletter on development and humanitarian challenges",
    "Collaborate with other organizations for knowledge sharing and capacity building"
  ];

  return (
    <Card className={`${neuCardStyles({ elevation: "medium" })} bg-deepGreen-700 text-white`}>
      <CardHeader>
        <CardTitle className="text-white">Our Methods</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 text-white">
          {methods.map((method, index) => (
            <li key={index}>{method}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Methods;
