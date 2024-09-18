import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, DollarSign, Users, Globe } from 'lucide-react';
import { motion } from "framer-motion";

const ImpactStats = () => {
  const impactStats = [
    { icon: <Heart className="w-8 h-8 text-red-500" />, label: "Lives Impacted", value: "10,000+" },
    { icon: <DollarSign className="w-8 h-8 text-green-500" />, label: "Funds Raised", value: "$500,000+" },
    { icon: <Users className="w-8 h-8 text-blue-500" />, label: "Volunteers", value: "500+" },
    { icon: <Globe className="w-8 h-8 text-purple-500" />, label: "Countries Reached", value: "15" },
  ];

  return (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactStats.map((stat, index) => (
          <Card key={index} className="neu-card">
            <CardContent className="flex flex-col items-center p-6">
              {stat.icon}
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default ImpactStats;
