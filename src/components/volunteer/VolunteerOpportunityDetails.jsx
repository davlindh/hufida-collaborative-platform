import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const VolunteerOpportunityDetails = ({ opportunity }) => (
  <Card className="bg-deepGreen-600 border-deepGreen-500 text-white">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-white">{opportunity.title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-white">{opportunity.description}</p>
      <div>
        <h4 className="font-semibold text-white mb-2">Required Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {opportunity.requiredSkills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-deepGreen-500 text-white">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-2">Responsibilities:</h4>
        <ul className="list-disc pl-5 text-white">
          {opportunity.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      <p><span className="font-semibold text-white">Duration:</span> {opportunity.duration}</p>
      <p><span className="font-semibold text-white">Location:</span> {opportunity.location}</p>
      <p><span className="font-semibold text-white">Impact:</span> {opportunity.impact}</p>
    </CardContent>
  </Card>
);

export default VolunteerOpportunityDetails;
