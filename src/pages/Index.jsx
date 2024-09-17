import React from 'react';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import FeaturedProject from '../components/FeaturedProject';
import Testimonials from '../components/Testimonials';
import GetInvolved from '../components/GetInvolved';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
              <CardTitle className="text-2xl font-bold text-deepGreen-800">Key Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2 text-deepGreen-700">Sustainable Livelihoods and Economic Empowerment</h3>
              <p className="mb-4">We empower communities to break the cycle of poverty through sustainable economic opportunities:</p>
              <ul className="list-disc pl-5 space-y-2 text-deepGreen-600">
                <li><strong>Green Job Creation:</strong> Developing training programs in renewable energy, sustainable agriculture, and eco-friendly construction.</li>
                <li><strong>Microfinance Programs:</strong> Providing small business grants and access to microfinance services to help entrepreneurs launch and grow their businesses.</li>
                <li><strong>Skills Development:</strong> Offering vocational training in high-demand sectors to increase employability and promote economic resilience.</li>
                <li><strong>Digital Literacy:</strong> Equipping communities with essential digital skills to participate in the modern economy and access online opportunities.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 mt-6 text-deepGreen-700">Cultural and Heritage Restoration</h3>
              <p className="mb-4">HUFIDA is committed to preserving Africa's rich cultural heritage and ensuring that communities can maintain their unique identities:</p>
              <ul className="list-disc pl-5 space-y-2 text-deepGreen-600">
                <li><strong>Language Revitalization:</strong> Promoting the teaching and use of local languages to preserve cultural knowledge and foster intergenerational learning.</li>
                <li><strong>Cultural Festivals:</strong> Organizing community-driven events to celebrate African history, arts, and culture, while promoting social healing and unity.</li>
                <li><strong>Heritage Site Preservation:</strong> Working with local communities and international partners to protect important historical landmarks and cultural heritage sites.</li>
                <li><strong>Traditional Crafts Support:</strong> Providing resources and market access for artisans practicing traditional crafts, ensuring the continuation of cultural practices and creating economic opportunities.</li>
              </ul>
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
        </div>
      </footer>
    </div>
  );
};

export default Index;
