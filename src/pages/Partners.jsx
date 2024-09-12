import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from 'lucide-react';

const partners = [
  {
    name: "Google",
    description: "Collaborating on innovative technology solutions for sustainable development.",
    logo: "/placeholder.svg",
    partnerType: "Technology",
    website: "https://www.google.com"
  },
  {
    name: "GPT-Engineer",
    description: "Leveraging AI to accelerate and optimize our development projects.",
    logo: "/placeholder.svg",
    partnerType: "AI & Development",
    website: "https://gptengineer.app"
  },
  {
    name: "Supabase",
    description: "Powering our data infrastructure for efficient project management and reporting.",
    logo: "/placeholder.svg",
    partnerType: "Database & Backend",
    website: "https://supabase.com"
  },
  {
    name: "ISTUDIOS VISUALS",
    description: "Creating compelling visual content to showcase our impact and engage supporters.",
    logo: "/placeholder.svg",
    partnerType: "Visual Communication",
    website: "https://www.istudiosvisuals.com"
  },
  {
    name: "African Development Bank",
    description: "Collaborating on sustainable development projects across Africa.",
    logo: "/placeholder.svg",
    partnerType: "Financial Institution",
    website: "https://www.afdb.org"
  },
  {
    name: "UNICEF",
    description: "Working together to improve the lives of children in vulnerable communities.",
    logo: "/placeholder.svg",
    partnerType: "International Organization",
    website: "https://www.unicef.org"
  },
  {
    name: "World Wildlife Fund",
    description: "Partnering on wildlife conservation and habitat protection initiatives.",
    logo: "/placeholder.svg",
    partnerType: "Environmental Conservation",
    website: "https://www.worldwildlife.org"
  },
  {
    name: "Local African NGOs",
    description: "Collaborating with grassroots organizations to implement community-driven projects.",
    logo: "/placeholder.svg",
    partnerType: "Local Organizations",
    website: "#"
  }
];

const Partners = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Partners</h1>
      <p className="mb-8">HUFIDA collaborates with various organizations to maximize our impact and reach. Here are some of our key partners:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <img src={partner.logo} alt={partner.name} className="w-16 h-16 mb-4" />
                <Badge variant="secondary">{partner.partnerType}</Badge>
              </div>
              <CardTitle className="flex items-center">
                {partner.name}
                <a href={partner.website} target="_blank" rel="noopener noreferrer" className="ml-2">
                  <ExternalLink size={16} />
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{partner.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Partnership Benefits</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Access to a wide network of development professionals and organizations</li>
          <li>Opportunities for knowledge sharing and capacity building</li>
          <li>Collaborative project development and implementation</li>
          <li>Increased visibility and recognition in the international development community</li>
          <li>Potential for joint funding applications and resource mobilization</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Become a Partner</h2>
        <p>
          We are always looking for new partners who share our vision for sustainable development in Africa. 
          If your organization is interested in partnering with HUFIDA, please contact us at{' '}
          <a href="mailto:partnerships@hufida.org" className="text-blue-600 hover:underline">
            partnerships@hufida.org
          </a>
          . We look forward to exploring potential collaboration opportunities with you.
        </p>
      </section>
    </div>
  );
};

export default Partners;