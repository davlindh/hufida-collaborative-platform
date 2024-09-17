import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

  const projects = [
    {
      title: "Sustainable Livelihoods and Economic Empowerment",
      description: "Empowering communities through green job creation and microfinance programs.",
      initiatives: [
        "Green Job Creation in renewable energy, sustainable agriculture, and eco-friendly construction",
        "Microfinance Programs for small business grants and services"
      ],
      link: "/projects/sustainable-livelihoods",
      image: "/images/sustainable-livelihoods.jpg"
    },
    {
      title: "Cultural and Heritage Restoration",
      description: "Preserving Africa's rich cultural heritage and fostering community identities.",
      initiatives: [
        "Language Revitalization Programs",
        "Cultural Festivals and Events",
        "Heritage Site Preservation"
      ],
      link: "/projects/cultural-heritage-restoration",
      image: "/images/cultural-heritage.jpg"
    },
    {
      title: "Mental Health and Social Healing",
      description: "Addressing psychological impact of trauma in conflict-affected regions.",
      initiatives: [
        "Trauma Recovery Centers",
        "Training Local Counselors",
        "Community Healing Circles"
      ],
      link: "/projects/mental-health-social-healing",
      image: "/images/mental-health.jpg"
    },
    {
      title: "Environmental Conservation and Climate Action",
      description: "Promoting green and resilient development in Africa.",
      initiatives: [
        "Agroforestry and Biodiversity",
        "Conservation of Wildlife and Habitats",
        "Water and Resource Management"
      ],
      link: "/projects/environmental-conservation",
      image: "/images/environmental-conservation.jpg"
    },
    {
      title: "Humanitarian Support and Infrastructure Development",
      description: "Ensuring communities have necessary infrastructure for sustainable development.",
      initiatives: [
        "Humanitarian Aid Distribution",
        "Community Infrastructure Projects"
      ],
      link: "/projects/humanitarian-support",
      image: "/images/humanitarian-support.jpg"
    },
    {
      title: "Faving: The Social Exchange Engine",
      description: "Revolutionizing social interactions and knowledge sharing across communities.",
      initiatives: [
        "AI-Powered Skill Matching",
        "Cross-Cultural Exchange Hub",
        "Global Challenge Solver Platform"
      ],
      link: "/projects/faving",
      image: "/images/faving-project.jpg"
    }
  ];

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
          <FeaturedProject />
        </motion.div>
        <motion.div {...fadeInUp} className="mt-16">
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-deepGreen-800">Our Key Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-deepGreen-50 hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-xl font-semibold text-deepGreen-700 mb-2">{project.title}</CardTitle>
                      <p className="mb-4 text-deepGreen-600">{project.description}</p>
                      <ul className="list-disc pl-5 space-y-2 text-deepGreen-600 mb-4">
                        {project.initiatives.map((initiative, idx) => (
                          <li key={idx}>{initiative}</li>
                        ))}
                      </ul>
                      <Link to={project.link} className="text-deepGreen-600 hover:text-deepGreen-800 font-semibold inline-flex items-center">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
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
