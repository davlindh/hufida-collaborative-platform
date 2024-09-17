import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, DollarSign } from 'lucide-react';
import ImpactStats from '../components/ImpactStats';
import ProjectSelection from '../components/ProjectSelection';
import DonationOptions from '../components/DonationOptions';
import DonationFAQ from '../components/DonationFAQ';
import { projectsData } from '../data/projectsData';

const Donate = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [projects, setProjects] = useState([]);
  const projectSelectionRef = React.useRef(null);

  useEffect(() => {
    // Simulating an API call to fetch projects
    setProjects(projectsData.map(project => ({
      id: project.id,
      name: project.title,
      description: project.description.split('.')[0] + '.',
    })));
  }, []);

  const handleDonation = () => {
    if (!customAmount) {
      alert('Please select or enter an amount before donating.');
      return;
    }
    const revolutLink = `https://revolut.me/davidxt0s/${customAmount}`;
    window.open(revolutLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-deepGreen-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h1 
          className="text-5xl font-bold mb-6 text-center text-deepGreen-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Support Our Cause
        </motion.h1>
        <motion.p 
          className="mb-12 text-xl text-center text-deepGreen-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your donations help us create positive change in Africa through innovative development approaches and humanitarian efforts.
        </motion.p>
        
        <ImpactStats />
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-white shadow-lg border-deepGreen-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-deepGreen-800">Our Current Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={66} className="w-full h-8 mb-4" />
              <p className="text-lg text-center text-deepGreen-600 font-semibold">$66,000 raised of $100,000 goal</p>
            </CardContent>
          </Card>
        </motion.div>

        <div ref={projectSelectionRef}>
          <ProjectSelection 
            projects={projects}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        </div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mt-12 bg-white shadow-lg border-deepGreen-200">
              <CardContent className="p-8">
                <DonationOptions
                  customAmount={customAmount}
                  setCustomAmount={setCustomAmount}
                />
                <p className="mb-6 text-lg text-deepGreen-600">We use Revolut for secure and easy donations. Click the button below to proceed with your donation.</p>
                <Button 
                  className="w-full text-xl py-8 bg-deepGreen-600 hover:bg-deepGreen-700" 
                  onClick={handleDonation}
                  disabled={!customAmount}
                >
                  <DollarSign className="mr-2 h-6 w-6" />
                  Donate ${customAmount || '0'} via Revolut
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <DonationFAQ />

        {!selectedProject && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-2xl font-semibold mb-6 text-deepGreen-800">Ready to make a difference?</p>
            <Button 
              size="lg" 
              onClick={() => projectSelectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xl py-8 px-12 bg-deepGreen-600 hover:bg-deepGreen-700"
            >
              <Heart className="mr-2 h-6 w-6" />
              Choose a Project to Support
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Donate;
