import React, { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from "@/components/ui/input";
import OpportunityList from '../components/volunteer/OpportunityList';
import WhyVolunteerSection from '../components/volunteer/WhyVolunteerSection';
import LearnMoreDialog from '../components/volunteer/LearnMoreDialog';
import { opportunities } from '../data/volunteerOpportunities';

const VolunteerOpportunityDetails = lazy(() => import('../components/VolunteerOpportunityDetails'));
const VolunteerApplicationForm = lazy(() => import('../components/VolunteerApplicationForm'));

const Volunteer = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOpportunities = opportunities.filter(opportunity =>
    opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opportunity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opportunity.requiredSkills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto mt-8 px-4">
      <motion.h1 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Volunteer Opportunities
      </motion.h1>
      <motion.p 
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Join us in our mission to create positive change in Africa. Explore our volunteer opportunities and find where your skills can make the biggest impact:
      </motion.p>
      
      <Input
        type="text"
        placeholder="Search opportunities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6"
      />
      
      <OpportunityList 
        opportunities={filteredOpportunities} 
        setSelectedOpportunity={setSelectedOpportunity}
      />
      
      <AnimatePresence>
        {selectedOpportunity && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <VolunteerOpportunityDetails opportunity={selectedOpportunity} />
              <VolunteerApplicationForm opportunity={selectedOpportunity} />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      <WhyVolunteerSection />
      <LearnMoreDialog />
    </div>
  );
};

export default Volunteer;