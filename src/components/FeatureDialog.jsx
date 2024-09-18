import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { neuCardStyles } from '../utils/styleUtils';

const FeatureDialog = ({ feature }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Card className={`${neuCardStyles({ elevation: "low" })} cursor-pointer transition-all duration-300 hover:shadow-md`}>
        <CardHeader><CardTitle className="text-lg text-deepGreen-700">{feature.title}</CardTitle></CardHeader>
        <CardContent><p className="text-sm text-deepGreen-600">{feature.description}</p></CardContent>
      </Card>
    </DialogTrigger>
    <DialogContent className={`${neuCardStyles({ elevation: "medium" })} w-11/12 max-w-lg sm:max-w-xl md:max-w-2xl`}>
      <DialogHeader>
        <DialogTitle className="text-xl sm:text-2xl text-deepGreen-800">{feature.title}</DialogTitle>
      </DialogHeader>
      <ScrollArea className="mt-4 max-h-[60vh]">
        <div className="px-4">
          <p className="text-deepGreen-700 text-base sm:text-lg mb-4">{feature.description}</p>
          <h4 className="font-semibold text-lg sm:text-xl mb-2 text-deepGreen-800">Key Points:</h4>
          <ul className="list-disc pl-5 space-y-2 text-deepGreen-600">
            {feature.details.map((detail, idx) => (
              <li key={idx} className="text-sm sm:text-base">{detail}</li>
            ))}
          </ul>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export default FeatureDialog;
