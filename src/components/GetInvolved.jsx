import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, DollarSign, Handshake } from 'lucide-react';

const GetInvolved = () => {
  const involvementOptions = [
    {
      title: "Volunteer",
      description: "Join our team and make a direct impact on the ground.",
      link: "/volunteer",
      icon: <Heart className="w-8 h-8 text-deepGreen-300" />
    },
    {
      title: "Donate",
      description: "Support our projects financially and help us reach more communities.",
      link: "/donate",
      icon: <DollarSign className="w-8 h-8 text-deepGreen-300" />
    },
    {
      title: "Partner",
      description: "Collaborate with us to create sustainable solutions.",
      link: "/partners",
      icon: <Handshake className="w-8 h-8 text-deepGreen-300" />
    }
  ];

  return (
    <section className="mb-12 text-center">
      <h2 className="text-3xl font-semibold mb-6 text-deepGreen-800">Get Involved</h2>
      <p className="mb-8 text-lg text-deepGreen-600 max-w-3xl mx-auto">Join us in our mission to create positive change. There are many ways to contribute:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {involvementOptions.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gradient-to-br from-deepGreen-50 to-deepGreen-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden border border-deepGreen-200 h-full flex flex-col justify-between">
              <CardHeader>
                <div className="bg-deepGreen-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {option.icon}
                </div>
                <CardTitle className="text-xl text-deepGreen-800">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4 text-deepGreen-600">{option.description}</p>
                <Button asChild variant="outline" className="w-full bg-deepGreen-100 text-deepGreen-800 hover:bg-deepGreen-200 border-deepGreen-300 hover:border-deepGreen-400 transition-colors duration-300">
                  <Link to={option.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button asChild size="lg" className="bg-deepGreen-600 hover:bg-deepGreen-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
          <Link to="/projects">Explore Our Projects</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default GetInvolved;
