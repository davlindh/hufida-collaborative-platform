import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="mb-12 text-center bg-gradient-to-r from-deepGreen-800 to-deepGreen-700 text-white p-16 rounded-lg shadow-xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Empowering Africa's Future</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          HUFIDA is at the forefront of innovative development and humanitarian efforts across Africa. Join us in creating lasting, sustainable change for millions.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <Button asChild size="lg" className="bg-white text-deepGreen-800 hover:bg-deepGreen-100 text-lg px-8 py-6">
          <Link to="/about">Our Mission</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-deepGreen-700 text-lg px-8 py-6">
          <Link to="/donate">Support Our Cause</Link>
        </Button>
      </motion.div>
      <motion.img
        src="/hero-image.jpg"
        alt="HUFIDA in action"
        className="mt-12 rounded-lg shadow-2xl max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
    </section>
  );
};

export default Hero;