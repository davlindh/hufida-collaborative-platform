import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight, Lightbulb, Users, Rocket, Globe } from 'lucide-react';

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

  const impactData = [
    { name: 'Jobs Created', value: 500 },
    { name: 'Businesses Supported', value: 150 },
    { name: 'CO2 Reduction (tons)', value: 1000 },
    { name: 'Community Projects', value: 50 },
  ];

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 text-center">The Sustainability Project Incubator LAB</h1>
      
      <Tabs defaultValue="about" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="mission">Mission</TabsTrigger>
          <TabsTrigger value="approach">Approach</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        {sections.map((section, index) => (
          <TabsContent key={index} value={section.title.toLowerCase().split(' ')[0]}>
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
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Impact</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={impactData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Service Path for Sustainable Business</h2>
        <p className="mb-4">Our comprehensive, phased approach helps businesses understand and use sustainability to drive innovation and value creation. We offer services in the following areas:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {servicePath.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex items-center p-4">
                <ArrowRight className="mr-2 h-4 w-4" />
                <p>{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Value Creation Opportunities</h2>
        <p className="mb-4">Businesses that embrace sustainability can benefit from:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="flex items-start p-6">
              <Lightbulb className="mr-4 h-8 w-8 text-yellow-500" />
              <div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p>Drive product and service innovation through transparency</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-start p-6">
              <Users className="mr-4 h-8 w-8 text-blue-500" />
              <div>
                <h3 className="font-semibold mb-2">Talent Attraction</h3>
                <p>Attract and retain top talent with greater force</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-start p-6">
              <Rocket className="mr-4 h-8 w-8 text-green-500" />
              <div>
                <h3 className="font-semibold mb-2">Growth</h3>
                <p>Access capital more easily by establishing a lower risk profile</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-start p-6">
              <Globe className="mr-4 h-8 w-8 text-purple-500" />
              <div>
                <h3 className="font-semibold mb-2">Brand Enhancement</h3>
                <p>Differentiate your brand via enhanced reputation and credibility</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">Originally founded after a formative meeting with scientists and sustainability leaders in Bamenda, Cameroon, The Sustainability Project Incubator LAB has built a solid track record in supporting the emergence of role models for sustainable communities and business. We have worked with dozens of organizations to help them embed sustainability into their strategies, operations, products, services, and community plans.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Partnerships</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">We actively collaborate with like-minded organizations that share similar sustainability values and goals. Our partnerships generally support our two primary intended impact areas:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Enabling collaboration for systems change</li>
              <li>Building sustainability literacy</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Button className="w-full">Contact Us for Collaboration Opportunities</Button>
    </div>
  );
};

export default SustainabilityIncubatorLab;