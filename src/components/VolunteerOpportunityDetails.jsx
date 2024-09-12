import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const VolunteerOpportunityDetails = ({ opportunity }) => (
  <ScrollArea className="h-[60vh]">
    <div className="space-y-4 p-4">
      <h3 className="text-xl font-bold">{opportunity.title}</h3>
      <p>{opportunity.description}</p>
      <div>
        <h4 className="font-semibold">Required Skills:</h4>
        <ul className="list-disc pl-5">
          {opportunity.requiredSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">Responsibilities:</h4>
        <ul className="list-disc pl-5">
          {opportunity.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      <p><span className="font-semibold">Duration:</span> {opportunity.duration}</p>
      <p><span className="font-semibold">Location:</span> {opportunity.location}</p>
      <p><span className="font-semibold">Impact:</span> {opportunity.impact}</p>
    </div>
  </ScrollArea>
);

export default VolunteerOpportunityDetails;