import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const partners = [
  {
    name: "African Development Bank",
    description: "Collaborating on sustainable development projects across Africa.",
    logo: "/placeholder.svg"
  },
  {
    name: "UNICEF",
    description: "Working together to improve the lives of children in vulnerable communities.",
    logo: "/placeholder.svg"
  },
  {
    name: "World Wildlife Fund",
    description: "Partnering on wildlife conservation and habitat protection initiatives.",
    logo: "/placeholder.svg"
  },
  {
    name: "Local African NGOs",
    description: "Collaborating with grassroots organizations to implement community-driven projects.",
    logo: "/placeholder.svg"
  }
];

const Partners = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Partners</h1>
      <p className="mb-8">HUFIDA collaborates with various organizations to maximize our impact and reach. Here are some of our key partners:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partners.map((partner, index) => (
          <Card key={index}>
            <CardHeader>
              <img src={partner.logo} alt={partner.name} className="w-16 h-16 mb-4" />
              <CardTitle>{partner.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{partner.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Partners;