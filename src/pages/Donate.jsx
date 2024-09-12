import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Support Our Cause</h1>
      <p className="mb-8">Your donations help us create positive change in Africa through innovative development approaches and humanitarian efforts.</p>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Our Current Goal</h2>
        <Progress value={66} className="w-full h-4" />
        <p className="text-sm text-gray-600 mt-2">$66,000 raised of $100,000 goal</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Make a Donation</CardTitle>
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

        <Card>
          <CardHeader>
            <CardTitle>Choose a Project</CardTitle>
          </CardHeader>
          <CardContent>
            {projects.map((project) => (
              <div key={project.id} className="mb-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="project"
                    value={project.id}
                    checked={selectedProject === project.id}
                    onChange={() => setSelectedProject(project.id)}
                  />
                  <span>{project.name}</span>
                </label>
                <p className="text-sm text-gray-600 ml-6">{project.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">How Your Donation Helps</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Fund innovative projects for sustainable development in Africa</li>
          <li>Support our Information Clearing House and Documentation Center</li>
          <li>Assist in wildlife conservation and habitat protection efforts</li>
          <li>Provide humanitarian aid to vulnerable communities in conflict zones</li>
          <li>Produce educational materials and awareness campaigns</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
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