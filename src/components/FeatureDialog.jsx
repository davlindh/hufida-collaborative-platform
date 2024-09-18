import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { neuCardStyles } from '../utils/styleUtils';

const FeatureDialog = ({ feature, children }) => (
  <Dialog>
    <DialogTrigger asChild>
      {children}
    </DialogTrigger>
    <DialogContent className={`${neuCardStyles({ elevation: "medium" })} bg-deepGreen-700 text-white`}>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-white">{feature.title}</DialogTitle>
      </DialogHeader>
      <div className="mt-4">
        <p className="text-white mb-4">{feature.description}</p>
        <h3 className="text-xl font-semibold mb-2 text-white">Details:</h3>
        <ul className="list-disc pl-5 space-y-2 text-white">
          {feature.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>
    </DialogContent>
  </Dialog>
);

export default FeatureDialog;
