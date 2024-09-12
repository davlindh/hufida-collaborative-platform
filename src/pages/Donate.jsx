import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import DonationOptions from '../components/DonationOptions';
import ImpactStats from '../components/ImpactStats';
import ProjectSelection from '../components/ProjectSelection';
import DonationFAQ from '../components/DonationFAQ';

const Donate = () => {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const projectSelectionRef = useRef(null);

  const scrollToProjectSelection = () => {
    if (projectSelectionRef.current) {
      projectSelectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4 max-w-4xl">
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Support Our Cause
      </motion.h1>
      <motion.p 
        className="mb-8 text-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Your donations help us create positive change in Africa through innovative development approaches and humanitarian efforts.
      </motion.p>
      
      <ImpactStats />
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Current Goal</h2>
        <Progress value={66} className="w-full h-6" />
        <p className="text-sm text-gray-600 mt-2 text-center">$66,000 raised of $100,000 goal</p>
      </div>

      <div ref={projectSelectionRef}>
        <ProjectSelection 
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
          <DonationOptions 
            customAmount={customAmount} 
            setCustomAmount={setCustomAmount} 
          />
        </motion.div>
      )}

      <motion.section 
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">How Your Donation Helps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Fund innovative projects for sustainable development in Africa</li>
                <li>Support our Information Clearing House and Documentation Center</li>
                <li>Assist in wildlife conservation and habitat protection efforts</li>
                <li>Provide humanitarian aid to vulnerable communities in conflict zones</li>
                <li>Produce educational materials and awareness campaigns</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4">Your donation directly contributes to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Empowering local communities</li>
                <li>Promoting sustainable development practices</li>
                <li>Improving access to education and healthcare</li>
                <li>Fostering innovation in African development</li>
                <li>Creating lasting positive change across the continent</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <DonationFAQ />

      {!selectedProject && (
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg font-semibold mb-4">Ready to make a difference?</p>
          <Button 
            size="lg" 
            onClick={scrollToProjectSelection}
          >
            Choose a Project to Support
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default Donate;