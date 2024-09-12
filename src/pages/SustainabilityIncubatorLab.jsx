import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

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

  const servicePath = [
    "Sustainability Value Assessment",
    "Readiness & Baseline Assessment",
    "Vision and Strategic Goals Development",
    "Road Map & Prototyping",
    "Governance & Leadership",
    "Products & Services",
    "Culture",
    "Brand & Communications",
    "Operations"
  ];

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">The Sustainability Project Incubator LAB</h1>
      
      <Accordion type="single" collapsible className="w-full mb-8">
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
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Service Path for Sustainable Business</h2>
        <p className="mb-4">Our comprehensive, phased approach helps businesses understand and use sustainability to drive innovation and value creation. We offer services in the following areas:</p>
        <ul className="list-disc pl-5 mb-4">
          {servicePath.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Value Creation Opportunities</h2>
        <p className="mb-4">Businesses that embrace sustainability can benefit from:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Cost savings on resources, materials, and waste management</li>
          <li>Empowering and energizing the workplace by building a culture of sustainability</li>
          <li>Attracting talent with greater force</li>
          <li>Differentiating your brand via enhanced reputation and credibility</li>
          <li>Driving product and service innovation through transparency</li>
          <li>Mitigating risk by acting ahead of impending legislation and regulations</li>
          <li>Accessing capital more easily by establishing a lower risk profile</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">Originally founded after a formative meeting with scientists and sustainability leaders in Bamenda, Cameroon, The Sustainability Project Incubator LAB has built a solid track record in supporting the emergence of role models for sustainable communities and business. We have worked with dozens of organizations to help them embed sustainability into their strategies, operations, products, services, and community plans.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Partnerships</h2>
        <p className="mb-4">We actively collaborate with like-minded organizations that share similar sustainability values and goals. Our partnerships generally support our two primary intended impact areas:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Enabling collaboration for systems change</li>
          <li>Building sustainability literacy</li>
        </ul>
      </section>

      <Button className="w-full">Contact Us for Collaboration Opportunities</Button>
    </div>
  );
};

export default SustainabilityIncubatorLab;