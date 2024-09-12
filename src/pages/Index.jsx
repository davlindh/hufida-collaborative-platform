import React from 'react';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import Objectives from '../components/Objectives';
import Testimonials from '../components/Testimonials';
import GetInvolved from '../components/GetInvolved';
import FeaturedProject from '../components/FeaturedProject';
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deepGreen-50 to-white">
      <main className="container mx-auto mt-8 px-4">
        <Hero />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ImpactStats />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Objectives />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FeaturedProject />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Testimonials />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <GetInvolved />
        </motion.div>
      </main>
      
      <footer className="bg-deepGreen-800 text-white p-8 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 HUFIDA. All rights reserved.</p>
          <p className="mt-2">Empowering Africa through innovative development and humanitarian efforts.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;