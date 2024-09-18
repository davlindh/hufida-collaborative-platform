import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LearnMoreDialog = ({ project, suggestion, setSuggestion, nuanceValue, setNuanceValue, onSubmitSuggestion, onClose }) => {
  if (!project) return null;

  const handleDonation = () => {
    const revolutLink = `https://revolut.me/davidxt0s/10`;
    window.open(revolutLink, '_blank');
  };

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl neu-card bg-deepGreen-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-deepGreen-800">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <Card className="neu-card bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-deepGreen-700">Project Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-deepGreen-600">{project.description}</p>
            </CardContent>
          </Card>

          <Card className="neu-card bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-deepGreen-700">Current Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-deepGreen-600">{project.status}</p>
            </CardContent>
          </Card>

          <Card className="neu-card bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-deepGreen-700">Suggest a Direction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="What direction would you like to see this project take?"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                className="neu-input bg-deepGreen-50 text-deepGreen-700 placeholder-deepGreen-400"
              />
              <div>
                <label className="block text-sm font-medium text-deepGreen-700 mb-2">
                  Degree of Change:
                </label>
                <Slider
                  value={nuanceValue}
                  onValueChange={setNuanceValue}
                  max={100}
                  step={1}
                  className="neu-slider"
                />
                <div className="flex justify-between text-xs text-deepGreen-500 mt-2">
                  <span>Minor Adjustment</span>
                  <span>Moderate Change</span>
                  <span>Major Overhaul</span>
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <Button onClick={onSubmitSuggestion} className="neu-button bg-deepGreen-600 text-white hover:bg-deepGreen-700">
                  Submit Suggestion
                </Button>
                <Button 
                  className="neu-button bg-palette-accent hover:bg-palette-accent-dark text-white"
                  onClick={handleDonation}
                >
                  Press Forward <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LearnMoreDialog;
