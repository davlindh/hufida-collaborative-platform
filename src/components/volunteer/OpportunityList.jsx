import React from 'react';
import VolunteerOpportunityCard from './VolunteerOpportunityCard';

const OpportunityList = ({ opportunities, selectedOpportunity, onSelectOpportunity }) => {
  return (
    <div className="space-y-4">
      {opportunities.map((opportunity) => (
        <VolunteerOpportunityCard
          key={opportunity.id}
          opportunity={opportunity}
          isSelected={selectedOpportunity?.id === opportunity.id}
          onClick={() => onSelectOpportunity(opportunity)}
        />
      ))}
      {opportunities.length === 0 && (
        <p className="text-center text-gray-500">No opportunities found. Try adjusting your search.</p>
      )}
    </div>
  );
};

export default OpportunityList;
