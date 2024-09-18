import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const VolunteerOpportunityDetails = ({ opportunity }) => (
  <Card className="bg-white shadow-lg border-deepGreen-200">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-deepGreen-800">{opportunity.title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-deepGreen-600">{opportunity.description}</p>
      <div>
        <h4 className="font-semibold text-deepGreen-700">Required Skills:</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {opportunity.requiredSkills.map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-deepGreen-700">Responsibilities:</h4>
        <ul className="list-disc pl-5 text-deepGreen-600">
          {opportunity.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      <p><span className="font-semibold text-deepGreen-700">Duration:</span> {opportunity.duration}</p>
      <p><span className="font-semibold text-deepGreen-700">Location:</span> {opportunity.location}</p>
      <p><span className="font-semibold text-deepGreen-700">Impact:</span> {opportunity.impact}</p>
    </CardContent>
  </Card>
);

export default VolunteerOpportunityDetails;
