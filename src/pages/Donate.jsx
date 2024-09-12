import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Heart, DollarSign, Users, Globe } from 'lucide-react';

const Donate = () => {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const donationOptions = [
    { amount: 10, label: "$10" },
    { amount: 25, label: "$25" },
    { amount: 50, label: "$50" },
    { amount: 100, label: "$100" },
  ];

  const projects = [
    { id: 1, name: "Sustainable Waste Management in Bamenda", description: "Support our efforts to revolutionize waste management in Bamenda." },
    { id: 2, name: "Digital Literacy Program", description: "Help us provide digital skills training to underserved communities." },
    { id: 3, name: "Clean Water Initiative", description: "Contribute to our project bringing clean water to rural areas." },
  ];

  const faqs = [
    { question: "How is my donation used?", answer: "Your donation directly supports HUFIDA's projects and initiatives in Africa. We ensure that at least 85% of all donations go directly to our programs." },
    { question: "Is my donation tax-deductible?", answer: "Yes, HUFIDA is a registered non-profit organization, and your donations are tax-deductible to the extent allowed by law." },
    { question: "Can I donate monthly?", answer: "Absolutely! We offer a monthly giving option that allows you to provide sustained support to our projects." },
  ];

  const impactStats = [
    { icon: <Heart className="w-8 h-8 text-red-500" />, label: "Lives Impacted", value: "10,000+" },
    { icon: <DollarSign className="w-8 h-8 text-green-500" />, label: "Funds Raised", value: "$500,000+" },
    { icon: <Users className="w-8 h-8 text-blue-500" />, label: "Volunteers", value: "500+" },
    { icon: <Globe className="w-8 h-8 text-purple-500" />, label: "Countries Reached", value: "15" },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
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
      
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center p-6">
                {stat.icon}
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Current Goal</h2>
        <Progress value={66} className="w-full h-6" />
        <p className="text-sm text-gray-600 mt-2 text-center">$66,000 raised of $100,000 goal</p>
      </div>

      <Tabs defaultValue="one-time" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="one-time">One-time Donation</TabsTrigger>
          <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
        </TabsList>
        <TabsContent value="one-time">
          <Card>
            <CardHeader>
              <CardTitle>Make a One-time Donation</CardTitle>
              <CardDescription>Choose an amount or enter a custom value</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {donationOptions.map((option) => (
                  <Button
                    key={option.amount}
                    variant={customAmount === option.amount.toString() ? "default" : "outline"}
                    onClick={() => setCustomAmount(option.amount.toString())}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
              <Input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="mb-4"
              />
              <Button className="w-full">Donate Now</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="monthly">
          <Card>
            <CardHeader>
              <CardTitle>Set Up Monthly Donation</CardTitle>
              <CardDescription>Choose a monthly contribution amount</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[5, 10, 25, 50].map((amount) => (
                  <Button
                    key={amount}
                    variant={customAmount === amount.toString() ? "default" : "outline"}
                    onClick={() => setCustomAmount(amount.toString())}
                  >
                    ${amount}/month
                  </Button>
                ))}
              </div>
              <Input
                type="number"
                placeholder="Custom monthly amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="mb-4"
              />
              <Button className="w-full">Set Up Monthly Donation</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Choose a Project to Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
                <Button 
                  className="mt-4 w-full"
                  variant={selectedProject === project.id ? "default" : "outline"}
                  onClick={() => setSelectedProject(project.id)}
                >
                  {selectedProject === project.id ? "Selected" : "Select"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <section className="mt-12">
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
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default Donate;