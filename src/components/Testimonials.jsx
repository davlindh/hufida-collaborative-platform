import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  { name: "John Doe", role: "Community Leader", quote: "HUFIDA's innovative approach has brought real change to our village." },
  { name: "Jane Smith", role: "Volunteer", quote: "Volunteering with HUFIDA has been a life-changing experience." },
  { name: "Dr. Amina Nkrumah", role: "Partner Organization", quote: "HUFIDA's commitment to sustainable development is truly inspiring." },
];

const Testimonials = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Testimonials</h2>
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-6">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
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