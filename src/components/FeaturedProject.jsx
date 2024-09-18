import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const FeaturedProject = ({ title, description, link, imageSrc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        <CardHeader>
          <CardTitle className="text-xl font-bold text-deepGreen-800">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
          <p className="text-deepGreen-600 mb-4 flex-grow">{description}</p>
          <Button asChild variant="outline" className="w-full bg-deepGreen-100 text-deepGreen-800 hover:bg-deepGreen-200 mt-auto">
            <Link to={link}>Learn More</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeaturedProject;
