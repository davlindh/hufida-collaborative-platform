import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedProject = ({ title, description, link, imageSrc }) => (
  <Card className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
    <CardHeader>
      <CardTitle className="text-xl font-bold text-deepGreen-800">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col h-full">
      <p className="text-deepGreen-600 mb-4 flex-grow">{description}</p>
      <Button asChild variant="outline" className="w-full bg-deepGreen-100 text-deepGreen-800 hover:bg-deepGreen-200">
        <Link to={link}>Learn More</Link>
      </Button>
    </CardContent>
  </Card>
);

export default FeaturedProject;
