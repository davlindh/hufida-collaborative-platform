import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { ExternalLink } from 'lucide-react';

const LearnMoreDialog = ({ project, suggestion, setSuggestion, nuanceValue, setNuanceValue, onSubmitSuggestion, onClose }) => {
  if (!project) return null;

  const handleDonation = () => {
    const revolutLink = `https://revolut.me/davidxt0s/10`;
    window.open(revolutLink, '_blank');
  };

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Project Description</h3>
          <p>{project.description}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Current Status</h3>
          <p>{project.status}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Suggest a Direction</h3>
          <Textarea
            placeholder="What direction would you like to see this project take?"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            className="mb-4"
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Degree of Change:
            </label>
            <Slider
              value={nuanceValue}
              onValueChange={setNuanceValue}
              max={100}
              step={1}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Minor Adjustment</span>
              <span>Moderate Change</span>
              <span>Major Overhaul</span>
            </div>
          </div>
          <div className="flex justify-between">
            <Button onClick={onSubmitSuggestion}>Submit Suggestion</Button>
            <Button 
              className="bg-palette-accent hover:bg-palette-accent-dark text-white"
              onClick={handleDonation}
            >
              Press Forward <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LearnMoreDialog;