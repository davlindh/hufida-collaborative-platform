import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const LearnMoreDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="mt-8">Learn More About Volunteering</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Volunteering with HUFIDA</DialogTitle>
        <DialogDescription>
          Discover how you can make a difference by volunteering with HUFIDA.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <p>As a HUFIDA volunteer, you'll have the opportunity to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Work on impactful projects across Africa</li>
          <li>Collaborate with local and international experts</li>
          <li>Gain valuable experience in sustainable development</li>
          <li>Contribute to positive change in communities</li>
        </ul>
        <p>We offer both short-term and long-term volunteering opportunities, as well as remote and on-site positions. Join us in our mission to create innovative solutions for Africa's development challenges!</p>
      </div>
    </DialogContent>
  </Dialog>
);

export default LearnMoreDialog;