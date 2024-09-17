import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExternalLink } from 'lucide-react';

const LearnMoreDialog = ({ project, suggestion, setSuggestion, nuanceValue, setNuanceValue, onSubmitSuggestion, onClose }) => {
  if (!project) return null;

  const handleDonation = () => {
    const revolutLink = `https://revolut.me/davidxt0s/10`;
    window.open(revolutLink, '_blank');
  };

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-grow">
          <div className="space-y-6 p-4">
            <Section title="Project Description" content={project.description} />
            <Section title="Key Activities" content={
              <ul className="list-disc pl-5">
                {project.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            } />
            <Section title="Impact" content={
              <ul className="list-disc pl-5">
                {project.impact.map((impact, index) => (
                  <li key={index}>{impact}</li>
                ))}
              </ul>
            } />
            <Section title="Get Involved" content={
              <ul className="list-disc pl-5">
                {project.getInvolved.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            } />
            <Section title="Suggest a Direction" content={
              <>
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
              </>
            } />
          </div>
        </ScrollArea>
        <div className="flex justify-between mt-4 pt-4 border-t">
          <Button onClick={onSubmitSuggestion}>Submit Suggestion</Button>
          <Button 
            className="bg-palette-accent hover:bg-palette-accent-dark text-white"
            onClick={handleDonation}
          >
            Press Forward <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Section = ({ title, content }) => (
  <div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {typeof content === 'string' ? <p>{content}</p> : content}
  </div>
);

export default LearnMoreDialog;
