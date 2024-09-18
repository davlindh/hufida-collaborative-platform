import React from 'react';
import { motion } from "framer-motion";

const PartnershipBenefits = () => (
  <motion.section 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="mt-16 bg-deepGreen-50 p-8 rounded-lg"
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Partnership Benefits</h2>
    <ul className="list-disc pl-5 space-y-2 text-deepGreen-700">
      <li>Access to a wide network of development professionals and organizations</li>
      <li>Opportunities for knowledge sharing and capacity building</li>
      <li>Collaborative project development and implementation</li>
      <li>Increased visibility and recognition in the international development community</li>
      <li>Potential for joint funding applications and resource mobilization</li>
      <li>Participation in innovative, high-impact projects across Africa</li>
      <li>Contribution to the United Nations Sustainable Development Goals</li>
    </ul>
  </motion.section>
);

export default PartnershipBenefits;