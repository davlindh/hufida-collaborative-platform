import React from 'react';
import { Button } from "@/components/ui/button";
import { neuButtonStyles } from '../utils/styleUtils';

const GetInvolvedButton = ({ title, setIsDialogOpen, className }) => {
  return (
    <Button
      onClick={() => setIsDialogOpen(true)}
      className={`${neuButtonStyles({ variant: "primary", size: "lg" })} ${className} text-center break-words min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center w-full sm:w-auto px-6 py-3 text-base sm:text-lg whitespace-normal rounded-full`}
    >
      Get Involved with {title}
    </Button>
  );
};

export default GetInvolvedButton;
