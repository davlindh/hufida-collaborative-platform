import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import Testimonials from '../components/Testimonials';
import GetInvolved from '../components/GetInvolved';

const FeaturedProject = ({ title, description, link, imageSrc }) => (
  <Card className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
    <CardHeader>
      <CardTitle className="text-xl font-bold text-deepGreen-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-deepGreen-600 mb-4">{description}</p>
      <Button asChild variant="outline" className="w-full bg-deepGreen-100 text-deepGreen-800 hover:bg-deepGreen-200">
        <Link to={link}>Learn More</Link>
      </Button>
    </CardContent>
  </Card>
);

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
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-deepGreen-800">About HUFIDA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-deepGreen-600">
                HUFIDA (Humanitarian Foundation for Innovative Development in Africa) is dedicated to empowering communities across Africa through sustainable development initiatives. Our innovative approach combines technology, education, and community engagement to create lasting positive change.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.div {...fadeInUp} className="mt-16">
          <ImpactStats />
        </motion.div>

        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-deepGreen-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
