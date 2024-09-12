import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <motion.section 
      className="text-center py-12 mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Faving</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Empowering communities to make a difference through collaboration, knowledge sharing, and impactful action.
      </p>
      <div className="flex justify-center space-x-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/find-service">Find a Service</Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Discover skilled individuals ready to help</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild variant="outline" size="lg">
              <Link to="/offer-skills">Offer Your Skills</Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Share your expertise and make an impact</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </motion.section>
  );
};

export default Hero;