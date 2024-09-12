import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Briefcase, ArrowRight, Users, Rocket, Globe, Lightbulb, Award } from 'lucide-react';

const ServicePath = () => {
  const services = [
    { title: "Sustainability Value Assessment", icon: <Target className="h-6 w-6" /> },
    { title: "Readiness & Baseline Assessment", icon: <Zap className="h-6 w-6" /> },
    { title: "Vision and Strategic Goals Development", icon: <Briefcase className="h-6 w-6" /> },
    { title: "Road Map & Prototyping", icon: <ArrowRight className="h-6 w-6" /> },
    { title: "Governance & Leadership", icon: <Users className="h-6 w-6" /> },
    { title: "Products & Services", icon: <Rocket className="h-6 w-6" /> },
    { title: "Culture", icon: <Globe className="h-6 w-6" /> },
    { title: "Brand & Communications", icon: <Lightbulb className="h-6 w-6" /> },
    { title: "Operations", icon: <Award className="h-6 w-6" /> }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Our Service Path for Sustainable Business</h2>
      <p className="mb-4">Our comprehensive, phased approach helps businesses understand and use sustainability to drive innovation and value creation. We offer services in the following areas:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex items-center p-4">
              {service.icon}
              <p className="ml-2">{service.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicePath;