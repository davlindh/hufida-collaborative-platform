import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Briefcase, ArrowRight, Users, Rocket, Globe, Lightbulb, Award } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ServicePath = () => {
  const services = [
    { 
      title: "Sustainability Value Assessment", 
      icon: <Target className="h-6 w-6" />,
      tooltip: "Evaluate the current sustainability practices and identify areas for improvement"
    },
    { 
      title: "Readiness & Baseline Assessment", 
      icon: <Zap className="h-6 w-6" />,
      tooltip: "Determine your organization's preparedness for sustainability initiatives"
    },
    { 
      title: "Vision and Strategic Goals Development", 
      icon: <Briefcase className="h-6 w-6" />,
      tooltip: "Create a clear sustainability vision and set achievable strategic goals"
    },
    { 
      title: "Road Map & Prototyping", 
      icon: <ArrowRight className="h-6 w-6" />,
      tooltip: "Develop a detailed plan and test sustainability solutions"
    },
    { 
      title: "Governance & Leadership", 
      icon: <Users className="h-6 w-6" />,
      tooltip: "Establish effective governance structures for sustainability management"
    },
    { 
      title: "Products & Services", 
      icon: <Rocket className="h-6 w-6" />,
      tooltip: "Integrate sustainability into your product and service offerings"
    },
    { 
      title: "Culture", 
      icon: <Globe className="h-6 w-6" />,
      tooltip: "Foster a culture of sustainability within your organization"
    },
    { 
      title: "Brand & Communications", 
      icon: <Lightbulb className="h-6 w-6" />,
      tooltip: "Align your brand and communications with sustainability goals"
    },
    { 
      title: "Operations", 
      icon: <Award className="h-6 w-6" />,
      tooltip: "Implement sustainable practices in day-to-day operations"
    }
  ];

  return (
    <TooltipProvider>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Service Path for Sustainable Business</h2>
        <p className="mb-4">Our comprehensive, phased approach helps businesses understand and use sustainability to drive innovation and value creation. We offer services in the following areas:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex items-center p-4">
                    {service.icon}
                    <p className="ml-2">{service.title}</p>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <p>{service.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </section>
    </TooltipProvider>
  );
};

export default ServicePath;