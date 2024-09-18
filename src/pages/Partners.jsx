import React from 'react';
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@/components/ui/tooltip";
import { partners } from '../data/partners';
import PartnerCard from '../components/PartnerCard';
import PartnershipBenefits from '../components/PartnershipBenefits';
import BecomePartner from '../components/BecomePartner';
import { neuContainerStyles, responsiveGridStyles } from '../utils/styleUtils';

const Partners = () => (
  <TooltipProvider>
    <div className="min-h-screen bg-gradient-to-b from-deepGreen-800 to-deepGreen-900 py-12">
      <div className={neuContainerStyles({ padding: "large" })}>
        <Header />
        <ScrollArea className="h-[70vh] px-4">
          <PartnerGrid partners={partners} />
          <PartnershipBenefits />
          <BecomePartner />
        </ScrollArea>
      </div>
    </div>
  </TooltipProvider>
);

const Header = () => (
  <motion.div 
    className="text-center mb-12"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-4xl font-bold mb-4 text-white">Our Partners</h1>
    <p className="text-xl text-deepGreen-100 max-w-2xl mx-auto">
      HUFIDA collaborates with various organizations to maximize our impact and reach. Together, we're driving innovation and sustainable development across Africa.
    </p>
  </motion.div>
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
    className={responsiveGridStyles({ cols: 3 })}
  >
    {partners.map((partner, index) => (
      <PartnerCard key={index} partner={partner} />
    ))}
  </motion.div>
);

export default Partners;
