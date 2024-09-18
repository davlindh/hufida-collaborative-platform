import React from 'react';
import { Button } from "@/components/ui/button";

const GetInvolvedButton = ({ title, setIsDialogOpen, className }) => {
  return (
    <Button
      onClick={() => setIsDialogOpen(true)}
      className={`${className} text-center break-words min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center`}
    >
      Get Involved with {title}
    </Button>
  );
};

export default GetInvolvedButton;
