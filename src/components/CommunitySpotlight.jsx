import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Environmental Activist",
    quote: "Faving has revolutionized how we organize and collaborate on local sustainability projects.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Michael R.",
    role: "Tech Entrepreneur",
    quote: "The talent and passion I've found on Faving have been instrumental in launching my social impact startup.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Aisha K.",
    role: "Community Leader",
    quote: "Faving's platform has empowered our neighborhood to tackle local issues more effectively than ever before.",
    avatar: "/placeholder.svg",
  },
];

const CommunitySpotlight = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{testimonial.name}</CardTitle>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="italic">"{testimonial.quote}"</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CommunitySpotlight;