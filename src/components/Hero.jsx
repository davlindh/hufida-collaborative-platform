import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative mb-12 text-center bg-gradient-to-r from-deepGreen-800 to-deepGreen-700 text-white p-4 sm:p-8 md:p-16 rounded-lg shadow-xl overflow-hidden neu-card">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-[60vh]"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
          <span className="bg-blue-600 px-2 py-1 inline-block mb-2">Empowering</span>
          <br />
          <span className="bg-blue-600 px-2 py-1 inline-block mb-2">Africa's</span>
          <br />
          <span className="bg-blue-600 px-2 py-1 inline-block">Future</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
          HUFIDA is at the forefront of innovative development and humanitarian efforts across Africa. Join us in creating lasting, sustainable change for millions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="neu-button bg-white text-deepGreen-800 hover:bg-deepGreen-100 text-lg px-6 py-3 sm:px-8 sm:py-4">
            <Link to="/about">Our Mission</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="neu-button bg-deepGreen-600 border-white text-white hover:bg-deepGreen-500 hover:text-white text-lg px-6 py-3 sm:px-8 sm:py-4 transition-colors duration-300">
            <Link to="/donate">Support Our Cause</Link>
          </Button>
        </div>
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
