import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const GetInvolved = () => {
  const involvementOptions = [
    {
      title: "Volunteer",
      description: "Join our team and make a direct impact on the ground.",
      link: "/volunteer",
      icon: "👥"
    },
    {
      title: "Donate",
      description: "Support our projects financially and help us reach more communities.",
      link: "/donate",
      icon: "💰"
    },
    {
      title: "Partner",
      description: "Collaborate with us to create sustainable solutions.",
      link: "/partners",
      icon: "🤝"
    }
  ];

  return (
    <section className="mb-12 text-center">
      <h2 className="text-3xl font-semibold mb-6">Get Involved</h2>
      <p className="mb-8 text-lg">Join us in our mission to create positive change. There are many ways to contribute:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {involvementOptions.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="neu-card h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{option.icon}</CardTitle>
                <CardTitle>{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{option.description}</p>
                <Button asChild variant="outline" className="neu-button w-full">
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
        <Button asChild size="lg" className="neu-button bg-deepGreen-600 hover:bg-deepGreen-700 text-white">
          <Link to="/projects">Explore Our Projects</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default GetInvolved;
