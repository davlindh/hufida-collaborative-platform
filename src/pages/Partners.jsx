import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from 'lucide-react';
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const partners = [
  {
    name: "Google",
    description: "Collaborating on innovative technology solutions for sustainable development. Google's expertise in AI, cloud computing, and data analytics helps us optimize our projects and reach more communities.",
    logo: "/placeholder.svg",
    partnerType: "Technology",
    website: "https://www.google.com"
  },
  {
    name: "GPT-Engineer",
    description: "Leveraging AI to accelerate and optimize our development projects. GPT-Engineer's cutting-edge AI technology enables us to rapidly prototype and implement innovative solutions for complex challenges.",
    logo: "/placeholder.svg",
    partnerType: "AI & Development",
    website: "https://gptengineer.app"
  },
  {
    name: "Supabase",
    description: "Powering our data infrastructure for efficient project management and reporting. Supabase's robust backend solutions ensure our data is secure, scalable, and easily accessible for real-time decision making.",
    logo: "/placeholder.svg",
    partnerType: "Database & Backend",
    website: "https://supabase.com"
  },
  {
    name: "ISTUDIOS VISUALS",
    description: "Creating compelling visual content to showcase our impact and engage supporters. ISTUDIOS VISUALS brings our projects to life through stunning photography, videography, and graphic design.",
    logo: "/placeholder.svg",
    partnerType: "Visual Communication",
    website: "https://www.istudiosvisuals.com"
  },
  {
    name: "African Development Bank",
    description: "Collaborating on sustainable development projects across Africa. The African Development Bank provides crucial financial support and expertise for large-scale initiatives.",
    logo: "/placeholder.svg",
    partnerType: "Financial Institution",
    website: "https://www.afdb.org"
  },
  {
    name: "UNICEF",
    description: "Working together to improve the lives of children in vulnerable communities. Our partnership with UNICEF focuses on education, health, and child protection initiatives.",
    logo: "/placeholder.svg",
    partnerType: "International Organization",
    website: "https://www.unicef.org"
  },
  {
    name: "World Wildlife Fund",
    description: "Partnering on wildlife conservation and habitat protection initiatives. Together with WWF, we're preserving biodiversity and promoting sustainable resource management.",
    logo: "/placeholder.svg",
    partnerType: "Environmental Conservation",
    website: "https://www.worldwildlife.org"
  },
  {
    name: "Local African NGOs",
    description: "Collaborating with grassroots organizations to implement community-driven projects. Our network of local partners ensures our initiatives are culturally relevant and sustainable.",
    logo: "/placeholder.svg",
    partnerType: "Local Organizations",
    website: "#"
  }
];

const Partners = () => {
  return (
    <TooltipProvider>
      <div className="container mx-auto mt-8 px-4">
        <motion.h1 
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Partners
        </motion.h1>
        <motion.p 
          className="mb-8 text-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          HUFIDA collaborates with various organizations to maximize our impact and reach. Together, we're driving innovation and sustainable development across Africa.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <img src={partner.logo} alt={partner.name} className="w-16 h-16 mb-4" />
                    <Badge variant="secondary">{partner.partnerType}</Badge>
                  </div>
                  <CardTitle className="flex items-center">
                    {partner.name}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a href={partner.website} target="_blank" rel="noopener noreferrer" className="ml-2">
                          <ExternalLink size={16} />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Visit {partner.name}'s website</p>
                      </TooltipContent>
                    </Tooltip>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{partner.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.section 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Partnership Benefits</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access to a wide network of development professionals and organizations</li>
            <li>Opportunities for knowledge sharing and capacity building</li>
            <li>Collaborative project development and implementation</li>
            <li>Increased visibility and recognition in the international development community</li>
            <li>Potential for joint funding applications and resource mobilization</li>
            <li>Participation in innovative, high-impact projects across Africa</li>
            <li>Contribution to the United Nations Sustainable Development Goals</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Become a Partner</h2>
          <p className="mb-4">
            We are always looking for new partners who share our vision for sustainable development in Africa. 
            If your organization is interested in partnering with HUFIDA, we'd love to explore potential collaboration opportunities.
          </p>
          <p>
            Please contact us at{' '}
            <a href="mailto:partnerships@hufida.org" className="text-blue-600 hover:underline">
              partnerships@hufida.org
            </a>
            {' '}to start a conversation about how we can work together to create lasting positive change.
          </p>
        </motion.section>
      </div>
    </TooltipProvider>
  );
};

export default Partners;