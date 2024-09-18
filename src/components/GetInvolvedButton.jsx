import React from 'react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { neuButtonStyles, neuTooltipStyles } from '../utils/styleUtils';

const GetInvolvedButton = ({ title, setIsDialogOpen }) => (
  <motion.div
    className="mt-8 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <Tooltip>
      <TooltipTrigger asChild>
        <Button 
          onClick={() => setIsDialogOpen(true)}
          className={`${neuButtonStyles({ variant: "primary", size: "lg" })} shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
          Get Involved with {title}
        </Button>
      </TooltipTrigger>
      <TooltipContent className={neuTooltipStyles()}>
        <p>Suggest a new direction for this project</p>
      </TooltipContent>
    </Tooltip>
  </motion.div>
);

export default GetInvolvedButton;