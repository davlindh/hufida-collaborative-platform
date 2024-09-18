import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { neuCardStyles } from '../utils/styleUtils';

const PartnershipBenefits = () => (
  <motion.section 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="mt-16"
  >
    <Card className={`${neuCardStyles({ elevation: "medium" })} bg-deepGreen-700 border-deepGreen-600`}>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-deepGreen-100">Partnership Benefits</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 text-deepGreen-200">
          <li>Access to a wide network of development professionals and organizations</li>
          <li>Opportunities for knowledge sharing and capacity building</li>
          <li>Collaborative project development and implementation</li>
          <li>Increased visibility and recognition in the international development community</li>
          <li>Potential for joint funding applications and resource mobilization</li>
          <li>Participation in innovative, high-impact projects across Africa</li>
          <li>Contribution to the United Nations Sustainable Development Goals</li>
        </ul>
      </CardContent>
    </Card>
  </motion.section>
);

export default PartnershipBenefits;
