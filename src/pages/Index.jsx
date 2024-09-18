import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import Testimonials from '../components/Testimonials';
import GetInvolved from '../components/GetInvolved';
import { ArrowRight } from 'lucide-react';

const FeaturedProject = ({ title, description, link, imageSrc }) => (
  <Card className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-deepGreen-100">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
    <CardHeader>
      <CardTitle className="text-xl font-bold text-deepGreen-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-deepGreen-600 mb-4">{description}</p>
      <Button asChild variant="outline" className="w-full bg-deepGreen-50 text-deepGreen-800 hover:bg-deepGreen-100 border-deepGreen-200 hover:border-deepGreen-300 transition-colors duration-300">
        <Link to={link} className="flex items-center justify-center">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
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
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden border border-deepGreen-100">
            <CardHeader className="bg-deepGreen-50">
              <CardTitle className="text-2xl font-bold text-deepGreen-800">About HUFIDA</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-deepGreen-700 leading-relaxed">
                HUFIDA (Humanitarian Foundation for Innovative Development in Africa) is dedicated to empowering communities across Africa through sustainable development initiatives. Our innovative approach combines technology, education, and community engagement to create lasting positive change.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.div {...fadeInUp} className="mt-16">
          <ImpactStats />
        </motion.div>

        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-deepGreen-800 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="text-center mt-10">
            <Button asChild variant="default" size="lg" className="bg-deepGreen-600 text-white hover:bg-deepGreen-700 transition-colors duration-300 shadow-md hover:shadow-lg">
              <Link to="/projects" className="flex items-center">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.section>

        <motion.div {...fadeInUp} className="mt-20">
          <GetInvolved />
        </motion.div>

        <motion.div {...fadeInUp} className="mt-20 mb-16">
          <Testimonials />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
