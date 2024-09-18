import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import Testimonials from '../components/Testimonials';
import GetInvolved from '../components/GetInvolved';
import FeaturedProject from '../components/FeaturedProject';

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-deepGreen-50 to-white">
      <main className="container mx-auto px-4 py-8">
        <Hero />
        
        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-deepGreen-800">About HUFIDA</h2>
          <p className="text-lg text-center text-deepGreen-600 max-w-3xl mx-auto">
            HUFIDA (Humanitarian Foundation for Innovative Development in Africa) is dedicated to empowering communities across Africa through sustainable development initiatives. Our innovative approach combines technology, education, and community engagement to create lasting positive change.
          </p>
        </motion.section>

        <motion.div {...fadeInUp} className="mt-16">
          <ImpactStats />
        </motion.div>

        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-deepGreen-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeaturedProject 
              title="Faving: Social Exchange Engine"
              description="A revolutionary platform for knowledge sharing and collaboration, empowering communities to make informed decisions."
              link="/projects/faving"
              imageSrc="/faving-project.jpg"
            />
            <FeaturedProject 
              title="Sustainable Waste Management"
              description="Transforming waste management practices in Bamenda, Cameroon through innovative technology and community engagement."
              link="/projects/sustainable-waste-management"
              imageSrc="/waste-management-project.jpg"
            />
            <FeaturedProject 
              title="Digital Literacy Program"
              description="Empowering communities with essential digital skills for the 21st century, bridging the digital divide across Africa."
              link="/projects/digital-literacy"
              imageSrc="/digital-literacy-project.jpg"
            />
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="bg-deepGreen-600 text-white hover:bg-deepGreen-700">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </motion.section>

        <motion.div {...fadeInUp} className="mt-16">
          <GetInvolved />
        </motion.div>

        <motion.div {...fadeInUp} className="mt-16">
          <Testimonials />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
