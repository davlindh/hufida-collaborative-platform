import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { neuCardStyles } from '../utils/styleUtils';

const FeatureDialog = ({ feature }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Card className={`${neuCardStyles({ elevation: "low" })} cursor-pointer`}>
        <CardHeader><CardTitle className="text-lg text-deepGreen-700">{feature.title}</CardTitle></CardHeader>
        <CardContent><p className="text-sm text-deepGreen-600">{feature.description}</p></CardContent>
      </Card>
    </DialogTrigger>
    <DialogContent className={neuCardStyles({ elevation: "medium" })}>
      <DialogHeader>
        <DialogTitle className="text-deepGreen-800">{feature.title}</DialogTitle>
      </DialogHeader>
      <div className="mt-4">
        <p className="text-deepGreen-700">{feature.description}</p>
        <ul className="list-disc pl-5 mt-2 text-deepGreen-600">
          {feature.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>
    </DialogContent>
  </Dialog>
);

export default FeatureDialog;