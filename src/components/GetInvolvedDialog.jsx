import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetInvolvedDialog = ({ project }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="flex items-center">
        <Info className="mr-2 h-4 w-4" />
        How to Get Involved
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Get Involved with {project.title}</DialogTitle>
      </DialogHeader>
      <div className="py-4">
        <h3 className="text-lg font-semibold mb-2">Ways to Contribute:</h3>
        <ul className="list-disc pl-5 space-y-2">
          {project.getInvolved.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Your involvement can make a real difference in the success of this project. 
          Whether through donations, volunteering, or spreading awareness, every action counts.
        </p>
      </div>
      <Button asChild className="w-full">
        <Link to={`/projects/${project.id}`}>
          Learn More and Get Involved
        </Link>
      </Button>
    </DialogContent>
  </Dialog>
);

export default GetInvolvedDialog;
