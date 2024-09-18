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
      <Card className="h-full flex flex-col bg-gradient-to-br from-deepGreen-50 to-deepGreen-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        <CardHeader className="bg-deepGreen-200 bg-opacity-30">
          <CardTitle className="text-xl font-bold text-deepGreen-800">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between p-4">
          <p className="text-deepGreen-700 mb-4 flex-grow">{description}</p>
          <Button asChild variant="outline" className="w-full bg-deepGreen-200 text-deepGreen-800 hover:bg-deepGreen-300 border-deepGreen-400 hover:border-deepGreen-500 transition-colors duration-300 mt-auto">
            <Link to={link}>Learn More</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeaturedProject;
