import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from 'lucide-react';
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { partners } from '../data/partners';

const Partners = () => {
  return (
    <TooltipProvider>
      <div className="container mx-auto mt-8 px-4">
        <motion.h1 
          className="text-4xl font-bold mb-6 text-center text-deepGreen-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Partners
        </motion.h1>
        <motion.p 
          className="mb-8 text-lg text-center text-deepGreen-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          HUFIDA collaborates with various organizations to maximize our impact and reach. Together, we're driving innovation and sustainable development across Africa.
        </motion.p>
        
        <PartnerGrid partners={partners} />

        <BenefitsSection />
        <BecomePartnerSection />
      </div>
    </TooltipProvider>
  );
};

const PartnerGrid = ({ partners }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {partners.map((partner, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <PartnerCard partner={partner} />
      </motion.div>
    ))}
  </div>
);

const PartnerCard = ({ partner }) => (
  <Card className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300 bg-white border-2 border-deepGreen-100">
    <CardHeader className="pb-2">
      <div className="flex items-center justify-between mb-2">
        <img src={partner.logo} alt={partner.name} className="w-20 h-20 object-contain" loading="lazy" />
        <Badge variant="outline" className="bg-deepGreen-50 text-deepGreen-700 border-deepGreen-200">
          {partner.partnerType}
        </Badge>
      </div>
      <CardTitle className="text-xl text-deepGreen-800 flex items-center">
        {partner.name}
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={partner.website} target="_blank" rel="noopener noreferrer" className="ml-2 text-deepGreen-600 hover:text-deepGreen-800 transition-colors">
              <ExternalLink size={18} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Visit {partner.name}'s website</p>
          </TooltipContent>
        </Tooltip>
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow pt-2">
      <CardDescription className="text-sm text-deepGreen-600">{partner.description}</CardDescription>
    </CardContent>
  </Card>
);

const BenefitsSection = () => (
  <motion.section 
    className="mt-16 bg-deepGreen-50 p-8 rounded-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Partnership Benefits</h2>
    <ul className="list-disc pl-5 space-y-2 text-deepGreen-700">
      <li>Access to a wide network of development professionals and organizations</li>
      <li>Opportunities for knowledge sharing and capacity building</li>
      <li>Collaborative project development and implementation</li>
      <li>Increased visibility and recognition in the international development community</li>
      <li>Potential for joint funding applications and resource mobilization</li>
      <li>Participation in innovative, high-impact projects across Africa</li>
      <li>Contribution to the United Nations Sustainable Development Goals</li>
    </ul>
  </motion.section>
);

const BecomePartnerSection = () => (
  <motion.section 
    className="mt-16 bg-white p-8 rounded-lg shadow-md border border-deepGreen-100"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <h2 className="text-3xl font-semibold mb-4 text-center text-deepGreen-800">Become a Partner</h2>
    <p className="mb-8 text-center text-deepGreen-600">
      Join us in our mission to create lasting positive change in Africa. We're always looking for innovative partners who share our vision for sustainable development.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <Card className="bg-deepGreen-50 border-deepGreen-200">
        <CardHeader>
          <CardTitle className="text-deepGreen-800">What We Offer</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-deepGreen-700">
            <li>Collaborative project opportunities</li>
            <li>Access to our network of African communities</li>
            <li>Expertise in sustainable development practices</li>
            <li>Platform for showcasing your impact</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-deepGreen-50 border-deepGreen-200">
        <CardHeader>
          <CardTitle className="text-deepGreen-800">What We're Looking For</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-deepGreen-700">
            <li>Innovative solutions for African development</li>
            <li>Commitment to sustainable practices</li>
            <li>Expertise in technology, finance, or social impact</li>
            <li>Willingness to engage in long-term partnerships</li>
          </ul>
        </CardContent>
      </Card>
    </div>
    <div className="text-center">
      <Button size="lg" className="px-8 bg-deepGreen-600 hover:bg-deepGreen-700 text-white">
        <a href="mailto:partnerships@hufida.org" className="text-white">
          Contact Us to Explore Partnership Opportunities
        </a>
      </Button>
    </div>
  </motion.section>
);

export default Partners;