import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SustainabilityIncubatorLab = () => {
  const sections = [
    {
      title: "About Us",
      content: "The Sustainability Project Incubator LAB is a national consultative firm with several projects at the local and national level. We have years of experience in advancing science, innovation and strategic leadership aimed at fostering a strong economy that thrives within nature's limits. Our vision is a sustainable society where individuals, communities, businesses, and institutions flourish within nature's limits."
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
      <h1 className="text-3xl font-bold mb-6">The Sustainability Project Incubator LAB</h1>
      
      <Accordion type="single" collapsible className="w-full">
        {sections.map((section, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{section.title}</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent>
                  <p>{section.content}</p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Service Path for Sustainable Business</h2>
        <p>Our comprehensive, phased approach helps businesses understand and use sustainability to drive innovation and value creation. We offer services in the following areas:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Sustainability Value Assessment</li>
          <li>Readiness & Baseline Assessment</li>
          <li>Vision and Strategic Goals Development</li>
          <li>Road Map & Prototyping</li>
          <li>Governance & Leadership</li>
          <li>Products & Services</li>
          <li>Culture</li>
          <li>Brand & Communications</li>
          <li>Operations</li>
        </ul>
      </section>
    </div>
  );
};

export default SustainabilityIncubatorLab;