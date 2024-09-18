import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { neuButtonStyles, neuTextareaStyles, neuSliderStyles } from '../utils/styleUtils';

const SuggestDirectionDialog = ({ isOpen, setIsOpen, projectTitle }) => {
  const [suggestion, setSuggestion] = useState('');
  const [nuanceValue, setNuanceValue] = useState([50]);

  const handleSubmitSuggestion = () => {
    console.log(`New direction suggested for ${projectTitle}: ${suggestion}`);
    console.log(`Nuance value: ${nuanceValue[0]}`);
    setIsOpen(false);
    setSuggestion('');
    setNuanceValue([50]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-deepGreen-50 border-2 border-deepGreen-300 p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-deepGreen-800">Suggest a New Direction</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-deepGreen-700 mb-2" htmlFor="suggestion">
              Your Suggestion:
            </label>
            <Textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder="What direction would you like to see this project take?"
              className={neuTextareaStyles()}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-deepGreen-700 mb-2">
              Degree of Change:
            </label>
            <Slider
              value={nuanceValue}
              onValueChange={setNuanceValue}
              max={100}
              step={1}
              className={neuSliderStyles()}
            />
            <div className="flex justify-between text-xs text-deepGreen-600 mt-1">
              <span>Minor Adjustment</span>
              <span>Moderate Change</span>
              <span>Major Overhaul</span>
            </div>
          </div>
          <Button onClick={handleSubmitSuggestion} className={neuButtonStyles({ variant: "primary" })}>
            Submit Suggestion
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuggestDirectionDialog;