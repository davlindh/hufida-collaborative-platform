import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import ImpactStats from '../components/ImpactStats';
import ProjectSelection from '../components/ProjectSelection';
import DonationFAQ from '../components/DonationFAQ';

const Donate = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const projectSelectionRef = React.useRef(null);

  const predefinedAmounts = [10, 25, 50, 100];

  const scrollToProjectSelection = () => {
    if (projectSelectionRef.current) {
      projectSelectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDonation = () => {
    if (!amount) {
      alert('Please select or enter an amount before donating.');
      return;
    }
    const revolutLink = `https://revolut.me/davidxt0s/${amount}`;
    window.open(revolutLink, '_blank');
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
          <Card className="mt-8">
            <CardContent className="pt-6">
              <Tabs value={donationType} onValueChange={setDonationType}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="one-time">One-time Donation</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
                </TabsList>
                <TabsContent value="one-time">
                  <h3 className="text-xl font-semibold mb-4">Make a One-time Donation</h3>
                  <p className="mb-4">Choose an amount or enter a custom value:</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {predefinedAmounts.map((presetAmount) => (
                      <Button
                        key={presetAmount}
                        variant={amount === presetAmount.toString() ? "default" : "outline"}
                        onClick={() => setAmount(presetAmount.toString())}
                      >
                        ${presetAmount}
                      </Button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="Custom amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mb-4"
                  />
                </TabsContent>
                <TabsContent value="monthly">
                  <h3 className="text-xl font-semibold mb-4">Set Up Monthly Donation</h3>
                  <p className="mb-4">Choose a monthly contribution amount:</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {[5, 10, 25, 50].map((monthlyAmount) => (
                      <Button
                        key={monthlyAmount}
                        variant={amount === monthlyAmount.toString() ? "default" : "outline"}
                        onClick={() => setAmount(monthlyAmount.toString())}
                      >
                        ${monthlyAmount}/month
                      </Button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="Custom monthly amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mb-4"
                  />
                </TabsContent>
              </Tabs>
              <p className="mb-4">We use Revolut for secure and easy donations. Click the button below to proceed with your donation.</p>
              <Button 
                className="w-full" 
                onClick={handleDonation}
              >
                Donate {amount ? `$${amount}` : ''} Now via Revolut
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}

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