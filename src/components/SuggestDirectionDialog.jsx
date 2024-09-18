import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { ExternalLink } from 'lucide-react';
import { neuButtonStyles, neuTextareaStyles, neuSliderStyles, neuCardStyles } from '../utils/styleUtils';

const SuggestDirectionDialog = ({ isOpen, setIsOpen, projectTitle }) => {
  const [suggestion, setSuggestion] = useState('');
  const [nuanceValue, setNuanceValue] = useState([50]);

  const handleSubmitSuggestion = () => {
    console.log(`New direction suggested for ${projectTitle}: ${suggestion}`);
    console.log(`Degree of change: ${nuanceValue[0]}`);
    setIsOpen(false);
    setSuggestion('');
    setNuanceValue([50]);
  };

  const handlePressForward = () => {
    const revolutLink = `https://revolut.me/davidxt0s/10`;
    window.open(revolutLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={`${neuCardStyles({ elevation: "high" })} bg-deepGreen-700 text-white p-6 max-w-md w-full`}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">Suggest a New Direction</DialogTitle>
          <DialogDescription className="text-deepGreen-100 mb-4">
            Share your ideas to improve or redirect the {projectTitle} project.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div>
            <label htmlFor="suggestion" className="block text-sm font-medium mb-2">
              Your Suggestion:
            </label>
            <Textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder="What direction would you like to see this project take?"
              className={`${neuTextareaStyles()} bg-deepGreen-600 text-white placeholder-deepGreen-300`}
              rows={4}
            />
          </div>
          <div>
            <label htmlFor="nuance-slider" className="block text-sm font-medium mb-2">
              Degree of Change:
            </label>
            <Slider
              id="nuance-slider"
              value={nuanceValue}
              onValueChange={setNuanceValue}
              max={100}
              step={1}
              className={`${neuSliderStyles()} mb-2`}
            />
            <div className="flex justify-between text-xs text-deepGreen-200">
              <span>Minor Adjustment</span>
              <span>Major Overhaul</span>
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <Button
              onClick={handleSubmitSuggestion}
              className={`${neuButtonStyles({ variant: "primary" })} bg-deepGreen-500 hover:bg-deepGreen-600`}
            >
              Submit Suggestion
            </Button>
            <Button 
              onClick={handlePressForward}
              className={`${neuButtonStyles({ variant: "secondary" })} bg-deepGreen-300 text-deepGreen-800 hover:bg-deepGreen-400`}
            >
              Press Forward <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuggestDirectionDialog;
