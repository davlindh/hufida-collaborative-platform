import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const VolunteerOpportunityCard = ({ opportunity, isSelected, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card 
      className={`cursor-pointer transition-shadow hover:shadow-lg ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle>{opportunity.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2">{opportunity.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {opportunity.requiredSkills.map((skill, idx) => (
            <Badge key={idx} variant="secondary">{skill}</Badge>
          ))}
        </div>
        <p className="text-sm">
          <span className="font-semibold">Duration:</span> {opportunity.duration}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Location:</span> {opportunity.location}
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

export default VolunteerOpportunityCard;