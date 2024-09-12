import { useState, useMemo } from 'react';
import { opportunities } from '../data/volunteerOpportunities';

export const useVolunteerOpportunities = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter(opportunity =>
      opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.requiredSkills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return { searchTerm, setSearchTerm, filteredOpportunities };
};