import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative mb-12 text-center bg-gradient-to-b from-deepGreen-800 to-deepGreen-700 text-white p-8 sm:p-16 rounded-lg shadow-xl overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-[60vh]"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-deepGreen-50">
          Empowering Africa's Future
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-deepGreen-100">
          HUFIDA is at the forefront of innovative development and humanitarian efforts across Africa. Join us in creating lasting, sustainable change for millions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-deepGreen-100 text-deepGreen-800 hover:bg-deepGreen-200 text-lg px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            <Link to="/about">Our Mission</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-deepGreen-100 text-deepGreen-50 hover:bg-deepGreen-600 hover:text-white text-lg px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
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
