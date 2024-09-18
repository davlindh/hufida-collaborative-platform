import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useVolunteerOpportunities } from '../hooks/useVolunteerOpportunities';
import OpportunityList from '../components/volunteer/OpportunityList';
import VolunteerOpportunityDetails from '../components/volunteer/VolunteerOpportunityDetails';
import WhyVolunteerSection from '../components/volunteer/WhyVolunteerSection';
import VolunteerApplicationForm from '../components/volunteer/VolunteerApplicationForm';

const Volunteer = () => {
  const { searchTerm, setSearchTerm, filteredOpportunities } = useVolunteerOpportunities();
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Volunteer Opportunities
      </motion.h1>
      
      <Input
        type="text"
        placeholder="Search opportunities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ScrollArea className="h-[70vh]">
          <OpportunityList 
            opportunities={filteredOpportunities}
            setSelectedOpportunity={setSelectedOpportunity}
          />
        </ScrollArea>
        
        <div>
          {selectedOpportunity ? (
            <VolunteerOpportunityDetails opportunity={selectedOpportunity} />
          ) : (
            <WhyVolunteerSection />
          )}
        </div>
      </div>
      
      <VolunteerApplicationForm />
    </div>
  );
};

export default Volunteer;
