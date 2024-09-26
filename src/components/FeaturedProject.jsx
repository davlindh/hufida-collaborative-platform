import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { neuCardStyles, neuButtonStyles } from '../utils/styleUtils';

const FeaturedProject = ({ title, description, link, imageSrc }) => {
  return (
    <Card className={`${neuCardStyles({ elevation: "medium" })} bg-deepGreen-700 overflow-hidden`}>
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <Button asChild variant="outline" size="sm" className={`${neuButtonStyles({ variant: "outline", size: "sm" })} text-white hover:text-deepGreen-100`}>
          <Link to={link} className="flex items-center">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeaturedProject;
