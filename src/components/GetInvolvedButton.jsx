import React from 'react';
import { Button } from "@/components/ui/button";
import { neuButtonStyles } from '../utils/styleUtils';

const GetInvolvedButton = ({ title, setIsDialogOpen, className }) => {
  return (
    <Button
      onClick={() => setIsDialogOpen(true)}
      className={`
        ${neuButtonStyles({ variant: "primary", size: "lg" })}
        ${className}
        text-center
        break-words
        min-h-[2.5rem]
        sm:min-h-[3rem]
        flex
        items-center
        justify-center
        w-full
        sm:w-auto
        px-4
        sm:px-6
        py-2
        sm:py-3
        text-sm
        sm:text-base
        md:text-lg
        whitespace-normal
        rounded-full
        transition-all
        duration-300
        hover:shadow-lg
        focus:outline-none
        focus:ring-2
        focus:ring-deepGreen-300
        focus:ring-opacity-50
      `}
    >
      <span className="inline-block">Get Involved with {title}</span>
    </Button>
  );
};

export default GetInvolvedButton;
