import React from 'react';
import { motion } from 'framer-motion';
import VolunteerOpportunityCard from './VolunteerOpportunityCard';

const OpportunityList = ({ opportunities, setSelectedOpportunity }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    {opportunities.map((opportunity, index) => (
      <motion.div
        key={opportunity.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <VolunteerOpportunityCard 
          opportunity={opportunity}
          onClick={() => setSelectedOpportunity(opportunity)}
        />
      </motion.div>
    ))}
  </div>
);

export default OpportunityList;