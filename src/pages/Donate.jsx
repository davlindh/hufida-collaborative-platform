import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import ImpactStats from '../components/ImpactStats';
import ProjectSelection from '../components/ProjectSelection';
import DonationFAQ from '../components/DonationFAQ';
import { Heart, DollarSign, Users } from 'lucide-react';

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
                <Tabs value={donationType} onValueChange={setDonationType}>
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="one-time" className="text-lg">One-time Donation</TabsTrigger>
                    <TabsTrigger value="monthly" className="text-lg">Monthly Donation</TabsTrigger>
                  </TabsList>
                  <TabsContent value="one-time">
                    <h3 className="text-2xl font-semibold mb-6 text-deepGreen-800">Make a One-time Donation</h3>
                    <p className="mb-6 text-lg text-deepGreen-600">Choose an amount or enter a custom value:</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {predefinedAmounts.map((presetAmount) => (
                        <Button
                          key={presetAmount}
                          variant={amount === presetAmount.toString() ? "default" : "outline"}
                          onClick={() => setAmount(presetAmount.toString())}
                          className="text-xl py-6"
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
                      className="mb-6 text-xl py-6"
                    />
                  </TabsContent>
                  <TabsContent value="monthly">
                    <h3 className="text-2xl font-semibold mb-6 text-deepGreen-800">Set Up Monthly Donation</h3>
                    <p className="mb-6 text-lg text-deepGreen-600">Choose a monthly contribution amount:</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[5, 10, 25, 50].map((monthlyAmount) => (
                        <Button
                          key={monthlyAmount}
                          variant={amount === monthlyAmount.toString() ? "default" : "outline"}
                          onClick={() => setAmount(monthlyAmount.toString())}
                          className="text-xl py-6"
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
                      className="mb-6 text-xl py-6"
                    />
                  </TabsContent>
                </Tabs>
                <p className="mb-6 text-lg text-deepGreen-600">We use Revolut for secure and easy donations. Click the button below to proceed with your donation.</p>
                <Button 
                  className="w-full text-xl py-8 bg-deepGreen-600 hover:bg-deepGreen-700" 
                  onClick={handleDonation}
                  disabled={!amount}
                >
                  <DollarSign className="mr-2 h-6 w-6" />
                  Donate ${amount || '0'} {donationType === 'monthly' ? 'Monthly' : ''} via Revolut
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
              onClick={scrollToProjectSelection}
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