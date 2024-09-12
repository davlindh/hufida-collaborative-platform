import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Donate = () => {
  const donationOptions = [
    {
      title: "One-Time Donation",
      description: "Make a single contribution to support our projects.",
      buttonText: "Donate Now",
    },
    {
      title: "Monthly Giving",
      description: "Set up a recurring donation to provide ongoing support.",
      buttonText: "Start Monthly Donation",
    },
    {
      title: "Corporate Sponsorship",
      description: "Partner with us to make a lasting impact in Africa.",
      buttonText: "Become a Sponsor",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Support Our Cause</h1>
      <p className="mb-8">Your donations help us create positive change in Africa through innovative development approaches and humanitarian efforts. Choose a donation option below:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {donationOptions.map((option, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{option.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{option.description}</CardDescription>
              <Button className="w-full">{option.buttonText}</Button>
            </CardContent>
          </Card>
        ))}
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
    </div>
  );
};

export default Donate;