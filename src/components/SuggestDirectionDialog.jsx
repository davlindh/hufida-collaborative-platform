import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { ExternalLink } from 'lucide-react';
import { neuButtonStyles, neuTextareaStyles, neuCardStyles } from '../utils/styleUtils';

const SuggestDirectionDialog = ({ isOpen, setIsOpen, projectTitle }) => {
  const [suggestion, setSuggestion] = useState('');
  const [changeValue, setChangeValue] = useState([50]);
  const [impactValue, setImpactValue] = useState([50]);
  const [feasibilityValue, setFeasibilityValue] = useState([50]);

  const sendEmail = async (emailContent) => {
    // In a real-world scenario, you would use a backend API to send emails
    // For this example, we'll just log the email content
    console.log('Sending email to listening@hufida.com');
    console.log('Email content:', emailContent);
    // Simulating an API call
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const handleSubmitSuggestion = async () => {
    const emailContent = {
      project: projectTitle,
      suggestion: suggestion,
      degreeOfChange: changeValue[0],
      potentialImpact: impactValue[0],
      feasibility: feasibilityValue[0],
    };

    try {
      await sendEmail(emailContent);
      console.log('Suggestion submitted successfully');
      setIsOpen(false);
      setSuggestion('');
      setChangeValue([50]);
      setImpactValue([50]);
      setFeasibilityValue([50]);
    } catch (error) {
      console.error('Error submitting suggestion:', error);
    }
  };

  const handlePressForward = () => {
    const revolutLink = `https://revolut.me/davidxt0s/10`;
    window.open(revolutLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={`${neuCardStyles({ elevation: "high" })} bg-deepGreen-800 text-white p-6 max-w-md w-full`}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">Suggest a New Direction</DialogTitle>
          <DialogDescription className="text-deepGreen-100 mb-4">
            Share your ideas to improve or redirect the {projectTitle} project.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label htmlFor="suggestion" className="block text-sm font-medium mb-2">
              Your Suggestion:
            </label>
            <Textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder="What direction would you like to see this project take?"
              className={`${neuTextareaStyles()} bg-deepGreen-700 text-white placeholder-deepGreen-300`}
              rows={4}
            />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="change-slider" className="block text-sm font-medium">
                Degree of Change:
              </label>
              <Slider
                id="change-slider"
                value={changeValue}
                onValueChange={setChangeValue}
                max={100}
                step={1}
                className="w-full h-2 bg-deepGreen-600 rounded-full"
              />
              <div className="flex items-center justify-between text-xs text-deepGreen-200">
                <span>Minor</span>
                <span>Major</span>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="impact-slider" className="block text-sm font-medium">
                Potential Impact:
              </label>
              <Slider
                id="impact-slider"
                value={impactValue}
                onValueChange={setImpactValue}
                max={100}
                step={1}
                className="w-full h-2 bg-deepGreen-600 rounded-full"
              />
              <div className="flex items-center justify-between text-xs text-deepGreen-200">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="feasibility-slider" className="block text-sm font-medium">
                Feasibility:
              </label>
              <Slider
                id="feasibility-slider"
                value={feasibilityValue}
                onValueChange={setFeasibilityValue}
                max={100}
                step={1}
                className="w-full h-2 bg-deepGreen-600 rounded-full"
              />
              <div className="flex items-center justify-between text-xs text-deepGreen-200">
                <span>Challenging</span>
                <span>Easily Achievable</span>
              </div>
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
