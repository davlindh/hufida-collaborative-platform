import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock } from 'lucide-react';

const OpportunityList = ({ opportunities, selectedOpportunity, onSelectOpportunity }) => {
  return (
    <div className="space-y-6">
      {opportunities.map((opportunity, index) => (
        <motion.div
          key={opportunity.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg bg-deepGreen-600 ${
              selectedOpportunity?.id === opportunity.id ? 'ring-2 ring-white shadow-lg' : ''
            }`}
            onClick={() => onSelectOpportunity(opportunity)}
          >
            <CardHeader>
              <CardTitle className="text-xl text-white">{opportunity.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">{opportunity.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {opportunity.requiredSkills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-deepGreen-500 text-white">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center text-white mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{opportunity.location}</span>
              </div>
              <div className="flex items-center text-white">
                <Clock className="w-4 h-4 mr-2" />
                <span>{opportunity.duration}</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
      {opportunities.length === 0 && (
        <p className="text-center text-white text-lg">No opportunities found. Try adjusting your search.</p>
      )}
    </div>
  );
};

export default OpportunityList;
