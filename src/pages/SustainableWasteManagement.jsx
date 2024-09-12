import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SustainableWasteManagement = () => {
  const project = {
    title: "Sustainable Waste Management in Bamenda",
    description: "A comprehensive plan to revolutionize waste management and composting operations in Bamenda, Cameroon, through the deployment of a mobile application integrated with Mappost's route optimization technology.",
    objectives: [
      "Optimize waste collection routes to reduce costs and fuel consumption",
      "Increase composting to enhance soil fertility and reduce landfill waste",
      "Educate and involve the community in waste segregation and composting",
      "Utilize real-time data for continuous improvement of waste management operations"
    ],
    outcomes: [
      "Up to 40% reduction in logistics-related expenses",
      "Lower greenhouse gas emissions and improved soil quality",
      "Streamlined waste collection routes and reduced vehicle miles traveled",
      "Increased public involvement in waste management initiatives"
    ],
    implementation: [
      "Conduct needs assessment through surveys and focus groups",
      "Deploy technology: Equip waste collection teams with GPS-enabled devices",
      "Provide training for waste management personnel",
      "Implement pilot testing in select neighborhoods",
      "Expand to full citywide deployment",
      "Launch community engagement and awareness campaigns"
    ],
    partnerships: [
      "HYSACAM and Green Care West Africa for waste collection infrastructure",
      "Bamenda City Council and Regional Delegation of Environment for regulatory support",
      "Cameroon Environmental Watch and Better World Cameroon for community outreach"
    ],
    funding: {
      budget: "$60,000",
      sources: [
        "International organizations (World Bank, UNEP)",
        "Development funds (EU Development Fund, USAID)",
        "Corporate sponsorships"
      ]
    },
    sustainability: [
      "Highlight reduced emissions and improved soil quality",
      "Develop strategy for scaling to other regions",
      "Ensure financial sustainability through revenue-generating opportunities"
    ]
  };

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <p className="mb-8 text-lg">{project.description}</p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="objectives">
          <AccordionTrigger>Objectives</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              {project.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="outcomes">
          <AccordionTrigger>Expected Outcomes</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              {project.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="implementation">
          <AccordionTrigger>Implementation Plan</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal pl-5 space-y-2">
              {project.implementation.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="partnerships">
          <AccordionTrigger>Key Partnerships</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              {project.partnerships.map((partnership, index) => (
                <li key={index}>{partnership}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="funding">
          <AccordionTrigger>Funding and Financial Planning</AccordionTrigger>
          <AccordionContent>
            <p><strong>Estimated Budget:</strong> {project.funding.budget}</p>
            <p><strong>Funding Sources:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              {project.funding.sources.map((source, index) => (
                <li key={index}>{source}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="sustainability">
          <AccordionTrigger>Sustainability and Impact</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              {project.sustainability.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SustainableWasteManagement;