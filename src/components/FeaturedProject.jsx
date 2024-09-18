import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const FeaturedProject = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center text-deepGreen-800">Featured Project</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="neu-card bg-deepGreen-50 border-deepGreen-200 overflow-hidden shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-deepGreen-800">Sustainable Waste Management in Bamenda</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <p className="mb-4 text-deepGreen-700">A comprehensive plan to revolutionize waste management and composting operations in Bamenda, Cameroon, through innovative technology and community engagement.</p>
                <ul className="list-disc pl-5 mb-4 text-deepGreen-600">
                  <li>Implementing smart waste collection routes</li>
                  <li>Establishing community composting centers</li>
                  <li>Creating jobs in the green economy</li>
                  <li>Reducing environmental impact and improving public health</li>
                </ul>
                <Button asChild className="neu-button bg-deepGreen-600 hover:bg-deepGreen-700 text-white">
                  <Link to="/projects/sustainable-waste-management">Learn More</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <img src="/waste-management-project.jpg" alt="Sustainable Waste Management Project" className="rounded-lg shadow-md w-full h-64 object-cover" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
