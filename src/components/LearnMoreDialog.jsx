import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { ExternalLink } from 'lucide-react';
import { formatDate } from '../utils/styleUtils';
import { neuFormStyles, neuButtonStyles } from '../utils/styleUtils';

const LearnMoreDialog = ({ project, suggestion, setSuggestion, nuanceValue, setNuanceValue, onSubmitSuggestion, onClose }) => {
  if (!project) return null;

  const handleDonation = () => {
    const revolutLink = `https://revolut.me/davidxt0s/10`;
    window.open(revolutLink, '_blank');
  };

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-deepGreen-50 border-deepGreen-200 p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-deepGreen-800 mb-4">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-deepGreen-700">Project Description</h3>
            <p className="text-deepGreen-600">{project.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-deepGreen-700">Current Status</h3>
            <p className="text-deepGreen-600">{project.status}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-deepGreen-700">Start Date</h3>
            <p className="text-deepGreen-600">{formatDate(project.startDate)}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-deepGreen-700">Suggest a Direction</h3>
            <Textarea
              placeholder="What direction would you like to see this project take?"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className={`mb-4 ${neuFormStyles()}`}
            />
            <div className="mb-4">
              <label className="block text-sm font-medium text-deepGreen-700 mb-2">
                Degree of Change:
              </label>
              <Slider
                value={nuanceValue}
                onValueChange={setNuanceValue}
                max={100}
                step={1}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-deepGreen-600">
                <span>Minor Adjustment</span>
                <span>Moderate Change</span>
                <span>Major Overhaul</span>
              </div>
            </div>
            <div className="flex justify-between">
              <Button onClick={onSubmitSuggestion} className={neuButtonStyles({ variant: "primary" })}>
                Submit Suggestion
              </Button>
              <Button 
                className={neuButtonStyles({ variant: "secondary" })}
                onClick={handleDonation}
              >
                Press Forward <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LearnMoreDialog;
