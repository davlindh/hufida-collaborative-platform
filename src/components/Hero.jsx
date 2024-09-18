import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative mb-12 text-center bg-gradient-to-r from-deepGreen-800 to-deepGreen-700 text-white p-16 rounded-lg shadow-xl overflow-hidden neu-card">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
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
        className="flex flex-col sm:flex-row justify-center gap-4 relative z-10"
      >
        <Button asChild size="lg" className="neu-button bg-white text-deepGreen-800 hover:bg-deepGreen-100 text-lg px-8 py-6">
          <Link to="/about">Our Mission</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="neu-button bg-deepGreen-600 border-white text-white hover:bg-deepGreen-500 hover:text-white text-lg px-8 py-6 transition-colors duration-300">
          <Link to="/donate">Support Our Cause</Link>
        </Button>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/hero-image.jpg"
          alt="HUFIDA in action"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
