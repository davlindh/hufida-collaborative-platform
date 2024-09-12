import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const impactStats = [
    { title: "Lives Impacted", value: "10,000+" },
    { title: "Projects Completed", value: "50+" },
    { title: "Countries Reached", value: "15" },
    { title: "Volunteers Engaged", value: "500+" },
  ];

  const testimonials = [
    { name: "John Doe", role: "Community Leader", quote: "HUFIDA's innovative approach has brought real change to our village." },
    { name: "Jane Smith", role: "Volunteer", quote: "Volunteering with HUFIDA has been a life-changing experience." },
    { name: "Dr. Amina Nkrumah", role: "Partner Organization", quote: "HUFIDA's commitment to sustainable development is truly inspiring." },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto mt-8 px-4">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to HUFIDA</h1>
          <p className="text-xl mb-6">
            Empowering Africa through innovative development and humanitarian efforts.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/donate">Support Our Cause</Link>
            </Button>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-blue-600">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg">{stat.title}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Create awareness about poverty and sustainable development challenges in Africa</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Empower vulnerable and marginalized groups with innovative tools for poverty alleviation</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Support local African communities for integrated development and socio-cultural cohesion</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Develop and deploy infrastructure for stable future aid</CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
        
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
        
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">Get Involved</h2>
          <p className="mb-6">Join us in our mission to create positive change. There are many ways to contribute:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/volunteer">Volunteer</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/donate">Donate</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-200 p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 HUFIDA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;