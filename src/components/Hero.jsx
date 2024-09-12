import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = ({ title, subtitle, description }) => {
  return (
    <section className="mb-12 text-center">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <h2 className="text-2xl font-semibold mb-4">{subtitle}</h2>
      <p className="text-xl mb-6">
        {description}
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild size="lg">
          <Link to="/about">Learn More</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/projects">Explore Projects</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;