import React from 'react';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import FeaturedProject from '../components/FeaturedProject';
import Testimonials from '../components/Testimonials';
import GetInvolved from '../components/GetInvolved';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

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
        <motion.div {...fadeInUp} className="mt-16">
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <ImpactStats />
            </CardContent>
          </Card>
        </motion.div>
        <motion.div {...fadeInUp} className="mt-16">
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-deepGreen-800">Our Key Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2 text-deepGreen-700">Faving: The Social Exchange Engine</h3>
              <p className="mb-4">A groundbreaking digital platform designed to revolutionize social interactions, knowledge sharing, and collaboration across Africa.</p>
              <ul className="list-disc pl-5 space-y-2 text-deepGreen-600 mb-4">
                <li>Create personalized user profiles showcasing skills and interests</li>
                <li>Collaborate on projects with real-time tools and AI-powered matching</li>
                <li>Access curated knowledge portals and interactive learning paths</li>
              </ul>
              <Link to="/projects/faving" className="text-deepGreen-600 hover:text-deepGreen-800 font-semibold">
                Learn more about Faving →
              </Link>

              <h3 className="text-xl font-semibold mb-2 mt-6 text-deepGreen-700">Sustainable Waste Management in Bamenda</h3>
              <p className="mb-4">A comprehensive plan to revolutionize waste management and composting operations in Bamenda, Cameroon, through innovative technology and community engagement.</p>
              <ul className="list-disc pl-5 space-y-2 text-deepGreen-600 mb-4">
                <li>Implement smart waste collection routes using AI and IoT</li>
                <li>Establish community composting centers and recycling initiatives</li>
                <li>Create green jobs and improve public health through better sanitation</li>
              </ul>
              <Link to="/projects/sustainable-waste-management" className="text-deepGreen-600 hover:text-deepGreen-800 font-semibold">
                Explore the Waste Management Project →
              </Link>

              <h3 className="text-xl font-semibold mb-2 mt-6 text-deepGreen-700">Sustainability Incubator LAB</h3>
              <p className="mb-4">A national consultative firm advancing science, innovation, and strategic leadership for sustainable development in Cameroon and beyond.</p>
              <ul className="list-disc pl-5 space-y-2 text-deepGreen-600 mb-4">
                <li>Conduct sustainability assessments for organizations and communities</li>
                <li>Facilitate innovation workshops to generate sustainable solutions</li>
                <li>Provide policy advocacy and capacity building for long-term impact</li>
              </ul>
              <Link to="/projects/sustainability-incubator-lab" className="text-deepGreen-600 hover:text-deepGreen-800 font-semibold">
                Discover the Sustainability Incubator LAB →
              </Link>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div {...fadeInUp} className="mt-16">
          <FeaturedProject />
        </motion.div>
        <motion.div {...fadeInUp} className="mt-16">
          <Testimonials />
        </motion.div>
        <motion.div {...fadeInUp} className="mt-16">
          <GetInvolved />
        </motion.div>
      </main>
      
      <footer className="bg-deepGreen-800 text-white p-8 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold">&copy; 2024 HUFIDA. All rights reserved.</p>
          <p className="mt-2 text-deepGreen-100">Empowering Africa through innovative development and humanitarian efforts.</p>
          <Button asChild className="mt-4 bg-white text-deepGreen-800 hover:bg-deepGreen-100">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
