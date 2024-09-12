import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="mb-12 text-center bg-deepGreen-800 text-white p-12 rounded-lg shadow-xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to HUFIDA</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Empowering Africa through innovative development and humanitarian efforts. Join us in creating lasting change across the continent.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <Button asChild size="lg" className="bg-white text-deepGreen-800 hover:bg-deepGreen-100">
          <Link to="/about">Learn More</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-deepGreen-700">
          <Link to="/donate">Support Our Cause</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;