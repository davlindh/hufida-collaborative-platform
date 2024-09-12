import React, { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import VolunteerOpportunityCard from '../components/VolunteerOpportunityCard';
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

const WhyVolunteerSection = () => (
  <section className="mt-12">
    <h2 className="text-2xl font-semibold mb-4">Why Volunteer with HUFIDA?</h2>
    <ul className="list-disc pl-5 space-y-2">
      <li>Gain hands-on experience in international development</li>
      <li>Contribute to meaningful projects that make a real difference</li>
      <li>Develop new skills and enhance your professional network</li>
      <li>Work with diverse teams and learn about different cultures</li>
      <li>Receive mentorship from experienced professionals in the field</li>
    </ul>
  </section>
);

const LearnMoreDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="mt-8">Learn More About Volunteering</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Volunteering with HUFIDA</DialogTitle>
        <DialogDescription>
          Discover how you can make a difference by volunteering with HUFIDA.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <p>As a HUFIDA volunteer, you'll have the opportunity to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Work on impactful projects across Africa</li>
          <li>Collaborate with local and international experts</li>
          <li>Gain valuable experience in sustainable development</li>
          <li>Contribute to positive change in communities</li>
        </ul>
        <p>We offer both short-term and long-term volunteering opportunities, as well as remote and on-site positions. Join us in our mission to create innovative solutions for Africa's development challenges!</p>
      </div>
    </DialogContent>
  </Dialog>
);

export default Volunteer;