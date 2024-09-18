import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useVolunteerOpportunities } from '../hooks/useVolunteerOpportunities';
import OpportunityList from '../components/volunteer/OpportunityList';
import VolunteerOpportunityDetails from '../components/volunteer/VolunteerOpportunityDetails';
import WhyVolunteerSection from '../components/volunteer/WhyVolunteerSection';
import VolunteerApplicationForm from '../components/volunteer/VolunteerApplicationForm';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-b from-deepGreen-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-deepGreen-800">Volunteer Opportunities</h1>
          <p className="text-xl text-deepGreen-600 max-w-2xl mx-auto">
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
            <Card className="mb-8 shadow-lg border-deepGreen-200">
              <CardHeader>
                <CardTitle className="text-2xl text-deepGreen-800">Search Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative mb-6">
                  <Input
                    type="text"
                    placeholder="Search opportunities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 py-6 text-lg bg-white border-deepGreen-300 focus:ring-deepGreen-500 focus:border-deepGreen-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-deepGreen-500" />
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
            <Card className="shadow-lg border-deepGreen-200">
              <CardContent className="p-6">
                {selectedOpportunity ? (
                  <>
                    <VolunteerOpportunityDetails opportunity={selectedOpportunity} />
                    {!showApplicationForm && (
                      <Button 
                        onClick={handleApplyClick}
                        className="w-full mt-4 bg-deepGreen-600 hover:bg-deepGreen-700 text-white text-lg py-6"
                      >
                        Apply for this Opportunity
                      </Button>
                    )}
                  </>
                ) : (
                  <p className="text-center text-deepGreen-600 text-lg">Select an opportunity to view details</p>
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
