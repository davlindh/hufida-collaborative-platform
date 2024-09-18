import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { partners } from '../data/partners';
import PartnerCard from '../components/PartnerCard';
import PartnershipBenefits from '../components/PartnershipBenefits';
import BecomePartner from '../components/BecomePartner';

const Partners = () => (
  <TooltipProvider>
    <div className="container mx-auto mt-8 px-4">
      <Header />
      <PartnerGrid partners={partners} />
      <PartnershipBenefits />
      <BecomePartner />
    </div>
  </TooltipProvider>
);

const Header = () => (
  <>
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
  </>
);

const PartnerGrid = ({ partners }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    {partners.map((partner, index) => (
      <PartnerCard key={index} partner={partner} />
    ))}
  </motion.div>
);

export default Partners;
