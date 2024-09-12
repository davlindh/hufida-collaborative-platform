import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
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
  );
};

export default Hero;