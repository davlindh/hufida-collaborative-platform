import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BecomePartner = () => (
  <motion.section 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="mt-16 bg-white p-8 rounded-lg shadow-md border border-deepGreen-100"
  >
    <h2 className="text-3xl font-semibold mb-4 text-center text-deepGreen-800">Become a Partner</h2>
    <p className="mb-8 text-center text-deepGreen-600">
      Join us in our mission to create lasting positive change in Africa. We're always looking for innovative partners who share our vision for sustainable development.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <PartnerOfferCard 
        title="What We Offer"
        items={[
          "Collaborative project opportunities",
          "Access to our network of African communities",
          "Expertise in sustainable development practices",
          "Platform for showcasing your impact"
        ]}
      />
      <PartnerOfferCard 
        title="What We're Looking For"
        items={[
          "Innovative solutions for African development",
          "Commitment to sustainable practices",
          "Expertise in technology, finance, or social impact",
          "Willingness to engage in long-term partnerships"
        ]}
      />
    </div>
    <div className="text-center">
      <Button size="lg" className="px-8 bg-deepGreen-600 hover:bg-deepGreen-700 text-white">
        <a href="mailto:partnerships@hufida.com" className="text-white">
          Contact Us to Explore Partnership Opportunities
        </a>
      </Button>
    </div>
  </motion.section>
);

const PartnerOfferCard = ({ title, items }) => (
  <Card className="bg-deepGreen-50 border-deepGreen-200">
    <CardHeader>
      <CardTitle className="text-deepGreen-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-5 space-y-2 text-deepGreen-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default BecomePartner;