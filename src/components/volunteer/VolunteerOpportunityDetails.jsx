import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { neuCardStyles } from '../../utils/styleUtils';

const VolunteerOpportunityDetails = ({ opportunity }) => (
  <ScrollArea className="h-[60vh]">
    <div className={`space-y-4 p-4 ${neuCardStyles({ elevation: "low" })}`}>
      <h3 className="text-2xl font-bold text-white">{opportunity.title}</h3>
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
      <p className="text-white"><span className="font-semibold">Duration:</span> {opportunity.duration}</p>
      <p className="text-white"><span className="font-semibold">Location:</span> {opportunity.location}</p>
      <p className="text-white"><span className="font-semibold">Impact:</span> {opportunity.impact}</p>
    </div>
  </ScrollArea>
);

export default VolunteerOpportunityDetails;
