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
  <div className="min-h-screen bg-gradient-to-b from-deepGreen-800 to-deepGreen-600 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <TooltipProvider>
      <div className={neuContainerStyles({ padding: "large" })}>
        <Header />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <ScrollArea className="h-[calc(100vh-200px)] pr-4">
            <PartnerGrid partners={partners} />
            <PartnershipBenefits />
            <BecomePartner />
          </ScrollArea>
        </motion.div>
      </div>
    </TooltipProvider>
  </div>
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
    className={`${responsiveGridStyles({ cols: 3 })} mb-12`}
  >
    {partners.map((partner, index) => (
      <PartnerCard key={index} partner={partner} />
    ))}
  </motion.div>
);

export default Partners;
