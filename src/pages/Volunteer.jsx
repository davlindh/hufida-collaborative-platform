import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { useVolunteerOpportunities } from '../hooks/useVolunteerOpportunities';
import OpportunityList from '../components/volunteer/OpportunityList';
import VolunteerOpportunityDetails from '../components/volunteer/VolunteerOpportunityDetails';
import WhyVolunteerSection from '../components/volunteer/WhyVolunteerSection';
import VolunteerApplicationForm from '../components/volunteer/VolunteerApplicationForm';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import { neuCardStyles, neuInputStyles, neuButtonStyles } from '../utils/styleUtils';

const Volunteer = () => {
  const { searchTerm, setSearchTerm, filteredOpportunities } = useVolunteerOpportunities();
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleOpportunitySelect = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setShowApplicationForm(false);
  };

  const handleApplyClick = () => {
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-deepGreen-800 to-deepGreen-900 p-8">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-white">Volunteer Opportunities</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Join us in making a difference. Explore our volunteer opportunities and find a way to contribute your skills and passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className={`mb-8 ${neuCardStyles({ elevation: "medium" })}`}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Search Opportunities</h2>
                <div className="relative mb-6">
                  <Input
                    type="text"
                    placeholder="Search opportunities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`pl-10 py-3 text-lg ${neuInputStyles()}`}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-deepGreen-300" />
                </div>
                <ScrollArea className="h-[60vh] pr-4">
                  <OpportunityList 
                    opportunities={filteredOpportunities}
                    selectedOpportunity={selectedOpportunity}
                    onSelectOpportunity={handleOpportunitySelect}
                  />
                </ScrollArea>
              </CardContent>
            </Card>
            
            {!selectedOpportunity && (
              <WhyVolunteerSection />
            )}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:sticky lg:top-4 self-start"
          >
            <Card className={neuCardStyles({ elevation: "medium" })}>
              <CardContent className="p-6">
                {selectedOpportunity ? (
                  <>
                    <VolunteerOpportunityDetails opportunity={selectedOpportunity} />
                    {!showApplicationForm && (
                      <Button 
                        onClick={handleApplyClick}
                        className={`w-full mt-4 ${neuButtonStyles({ variant: "primary", size: "lg" })}`}
                      >
                        Apply for this Opportunity
                      </Button>
                    )}
                  </>
                ) : (
                  <p className="text-center text-white text-lg">Select an opportunity to view details</p>
                )}
                {showApplicationForm && selectedOpportunity && (
                  <VolunteerApplicationForm opportunity={selectedOpportunity} />
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
