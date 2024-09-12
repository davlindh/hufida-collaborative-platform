import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Dr. Amina Nkrumah",
    role: "Community Leader, Ghana",
    quote: "HUFIDA's innovative approach has brought real, sustainable change to our village. Their commitment to empowering local communities is truly inspiring.",
    avatar: "/avatars/amina.jpg"
  },
  {
    name: "Jean-Pierre Kouassi",
    role: "Environmental Scientist, Ivory Coast",
    quote: "Working with HUFIDA on the Sustainable Waste Management project has been a game-changer for Bamenda. Their expertise and dedication are unmatched.",
    avatar: "/avatars/jean-pierre.jpg"
  },
  {
    name: "Grace Okafor",
    role: "Education Advocate, Nigeria",
    quote: "HUFIDA's Digital Literacy Program has opened up a world of opportunities for our youth. It's not just about technology; it's about future-proofing our communities.",
    avatar: "/avatars/grace.jpg"
  },
];

const Testimonials = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8 text-center text-deepGreen-800">Voices of Impact</h2>
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="bg-deepGreen-50 border-deepGreen-200">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <p className="italic text-lg mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-deepGreen-700">{testimonial.name}</p>
                  <p className="text-sm text-deepGreen-600">{testimonial.role}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Testimonials;