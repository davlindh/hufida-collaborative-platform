import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import ValueProposition from '../components/sustainability/ValueProposition';
import ImpactChart from '../components/sustainability/ImpactChart';
import ServicePath from '../components/sustainability/ServicePath';

const SustainabilityIncubatorLab = () => {
  const sections = [
    {
      title: "About Us",
      content: "The Sustainability Project Incubator LAB is a national consultative firm with several projects at the local and national level. We have years of experience in advancing science, innovation and strategic leadership aimed at fostering a strong economy that thrives within nature's limits."
    },
    {
      title: "Our Mission",
      content: "Our mission is to accelerate the transition to a sustainable society in Cameroon, which has embarked on an ambitious programme for economic emergence by 2035. We seek to transform Cameroon into a work site for economic emergence, creating and distributing wealth fairly, offering equal development opportunities, and ensuring sustainable growth and enhanced food security."
    },
    {
      title: "Our Approach",
      content: "We employ the Framework for Strategic Sustainable Development (FSSD), a science-based approach used successfully in hundreds of forward-thinking organizations worldwide. This framework helps organizations embed sustainability into their strategies, operations, products, services, and community plans."
    },
    {
      title: "Our Services",
      content: "We offer a unique suite of advisory, coaching, training, and process facilitation services delivered by a national network of experienced professionals. Our services help businesses and communities integrate sustainability principles into core strategies, decisions, and operations."
    },
    {
      title: "Contact Us",
      content: "Fofuleng Babila, Sustainability Practitioner. Email: fofulengbabila@gmail.com, Telephone: 670172866/677554684, WhatsApp: +46700292915, Address: Vicky street Small Mankon Bamenda"
    }
  ];

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 text-center">The Sustainability Project Incubator LAB</h1>
      
      <Tabs defaultValue="about" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-5">
          {sections.map((section) => (
            <TabsTrigger key={section.title} value={section.title.toLowerCase().split(' ')[0]}>
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map((section) => (
          <TabsContent key={section.title} value={section.title.toLowerCase().split(' ')[0]}>
            <Card>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{section.content}</p>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      
      <ImpactChart />
      <ServicePath />
      <ValueProposition />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <Card>
          <CardContent className="p-6">
            <p>Originally founded after a formative meeting with scientists and sustainability leaders in Bamenda, Cameroon, The Sustainability Project Incubator LAB has built a solid track record in supporting the emergence of role models for sustainable communities and business. We have worked with dozens of organizations to help them embed sustainability into their strategies, operations, products, services, and community plans.</p>
          </CardContent>
        </Card>
      </section>

      <Accordion type="single" collapsible className="w-full mb-8">
        <AccordionItem value="success-stories">
          <AccordionTrigger>Success Stories</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>EcoTech Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>A local startup that developed sustainable energy solutions, reducing carbon emissions by 30% in their community.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Green Farms Initiative</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>An agricultural project that implemented sustainable farming practices, increasing crop yields by 40% while reducing water usage.</p>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full">Contact Us for Collaboration Opportunities</Button>
    </div>
  );
};

export default SustainabilityIncubatorLab;