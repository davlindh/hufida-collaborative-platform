import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="mb-12 text-center bg-deepGreen-100 p-8 rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-deepGreen-800">Welcome to HUFIDA</h1>
      <p className="text-xl mb-6 text-deepGreen-700">
        Empowering Africa through innovative development and humanitarian efforts.
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild size="lg" className="bg-deepGreen-600 hover:bg-deepGreen-700 text-white">
          <Link to="/about">Learn More</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-deepGreen-600 text-deepGreen-600 hover:bg-deepGreen-100">
          <Link to="/donate">Support Our Cause</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;