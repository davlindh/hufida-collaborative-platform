import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { sections, features } from '../data/sustainableWasteManagementData';
import { neuCardStyles, neuButtonStyles, responsiveGridStyles, neuTooltipStyles, neuTextareaStyles, neuSliderStyles } from '../utils/styleUtils';

const SustainableWasteManagement = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [suggestion, setSuggestion] = useState('');
  const [nuanceValue, setNuanceValue] = useState([50]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmitSuggestion = () => {
    console.log(`New direction suggested: ${suggestion}`);
    console.log(`Nuance value: ${nuanceValue[0]}`);
    setIsDialogOpen(false);
    setSuggestion('');
    setNuanceValue([50]);
  };

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <ProjectHeader />
          <ProjectTabs sections={sections} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProjectFeatures features={features} />
          <ProjectVision />
          <GetInvolvedButton setIsDialogOpen={setIsDialogOpen} />
          <SuggestDirectionDialog
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
            suggestion={suggestion}
            setSuggestion={setSuggestion}
            nuanceValue={nuanceValue}
            setNuanceValue={setNuanceValue}
            onSubmit={handleSubmitSuggestion}
          />
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
};

const ProjectHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h1 className="text-4xl font-bold text-deepGreen-800 mb-4">
      Sustainable Waste Management in Bamenda
    </h1>
    <p className="text-xl text-deepGreen-600 max-w-3xl mx-auto">
      Revolutionizing waste management through innovation and community engagement
    </p>
  </motion.div>
);

const ProjectTabs = ({ sections, activeTab, setActiveTab }) => (
  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
    <TabsList className="grid w-full grid-cols-5 bg-deepGreen-100 p-1 rounded-lg border border-deepGreen-200">
      {sections.map((section) => (
        <Tooltip key={section.id}>
          <TooltipTrigger asChild>
            <TabsTrigger 
              value={section.id}
              className="text-deepGreen-700 data-[state=active]:bg-white data-[state=active]:text-deepGreen-800 transition-all duration-200 border-b-2 border-transparent data-[state=active]:border-deepGreen-500"
            >
              {section.title}
            </TabsTrigger>
          </TooltipTrigger>
          <TooltipContent className={neuTooltipStyles()}><p>{section.tooltip}</p></TooltipContent>
        </Tooltip>
      ))}
    </TabsList>
    {sections.map((section) => (
      <TabsContent key={section.id} value={section.id}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className={`${neuCardStyles({ elevation: "low" })} border border-deepGreen-200`}>
            <CardHeader><CardTitle className="text-deepGreen-800">{section.title}</CardTitle></CardHeader>
            <CardContent><p className="text-deepGreen-600">{section.content}</p></CardContent>
          </Card>
        </motion.div>
      </TabsContent>
    ))}
  </Tabs>
);

const ProjectFeatures = ({ features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="mb-12"
  >
    <h2 className="text-2xl font-semibold mb-6 text-deepGreen-800">Key Features of the Project</h2>
    <div className={responsiveGridStyles({ cols: 3 })}>
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </div>
  </motion.div>
);

const FeatureCard = ({ feature }) => (
  <Card className={`${neuCardStyles({ elevation: "low" })} hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-deepGreen-200`}>
    <CardHeader>
      <CardTitle className="text-lg text-deepGreen-700">{feature.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-deepGreen-600 mb-2">{feature.description}</p>
      <ul className="list-disc pl-5 text-xs text-deepGreen-500">
        {feature.details.slice(0, 2).map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const ProjectVision = () => (
  <motion.section 
    className="mt-12 mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Project Vision</h2>
    <Card className={`${neuCardStyles({ elevation: "medium" })} border-2 border-deepGreen-300`}>
      <CardContent className="p-6">
        <p className="text-deepGreen-700 leading-relaxed">
          Our vision is to transform Bamenda into a model city for sustainable waste management in Cameroon. 
          By leveraging technology and community engagement, we aim to create a cleaner, healthier environment 
          while also generating economic opportunities through improved waste management practices.
        </p>
      </CardContent>
    </Card>
  </motion.section>
);

const GetInvolvedButton = ({ setIsDialogOpen }) => (
  <motion.div
    className="mt-8 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <Tooltip>
      <TooltipTrigger asChild>
        <Button 
          onClick={() => setIsDialogOpen(true)}
          className={`${neuButtonStyles({ variant: "primary", size: "lg" })} shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
          Get Involved in Sustainable Waste Management
        </Button>
      </TooltipTrigger>
      <TooltipContent className={neuTooltipStyles()}>
        <p>Suggest a new direction for this project</p>
      </TooltipContent>
    </Tooltip>
  </motion.div>
);

const SuggestDirectionDialog = ({ isOpen, setIsOpen, suggestion, setSuggestion, nuanceValue, setNuanceValue, onSubmit }) => (
  <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogContent className={`${neuCardStyles({ elevation: "high" })} border-2 border-deepGreen-300`}>
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
        <Button onClick={onSubmit} className={neuButtonStyles({ variant: "primary" })}>
          Submit Suggestion
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

export default SustainableWasteManagement;
