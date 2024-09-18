import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, DollarSign, Users, Globe } from 'lucide-react';
import { motion } from "framer-motion";

const ImpactStats = () => {
  const impactStats = [
    { icon: <Heart className="w-8 h-8 text-deepGreen-300" />, label: "Lives Impacted", value: "10,000+" },
    { icon: <DollarSign className="w-8 h-8 text-deepGreen-300" />, label: "Funds Raised", value: "$500,000+" },
    { icon: <Users className="w-8 h-8 text-deepGreen-300" />, label: "Volunteers", value: "500+" },
    { icon: <Globe className="w-8 h-8 text-deepGreen-300" />, label: "Countries Reached", value: "15" },
  ];

  return (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-center text-deepGreen-800">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactStats.map((stat, index) => (
          <Card key={index} className="bg-gradient-to-br from-deepGreen-50 to-deepGreen-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden border border-deepGreen-200">
            <CardContent className="flex flex-col items-center p-6">
              <div className="bg-deepGreen-600 p-3 rounded-full mb-4">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold mb-2 text-deepGreen-800">{stat.value}</p>
              <p className="text-sm text-deepGreen-600">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default ImpactStats;
