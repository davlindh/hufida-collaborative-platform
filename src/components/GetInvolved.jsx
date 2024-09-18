import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { neuCardStyles, neuButtonStyles, responsiveGridStyles } from '../utils/styleUtils';

const GetInvolved = () => {
  const options = [
    { title: 'Volunteer', description: 'Join our team of dedicated volunteers and make a direct impact on our projects.', link: '/volunteer' },
    { title: 'Donate', description: 'Support our initiatives financially and help us reach more communities in need.', link: '/donate' },
    { title: 'Partner', description: 'Collaborate with us to create sustainable solutions and drive innovation.', link: '/partners' }
  ];

  return (
    <section className={`${neuCardStyles({ elevation: "high" })} bg-gradient-to-br from-deepGreen-800 to-deepGreen-700 p-8 rounded-lg`}>
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Get Involved</h2>
      <div className={`${responsiveGridStyles({ cols: 3 })} gap-6`}>
        {options.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`${neuCardStyles({ elevation: "medium" })} h-full flex flex-col bg-deepGreen-600`}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-deepGreen-100 mb-4">{option.description}</p>
                <Button asChild className={`${neuButtonStyles({ variant: "secondary", size: "sm" })} mt-auto`}>
                  <Link to={option.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GetInvolved;
