import React from 'react';
import { motion } from "framer-motion";
import { neuCardStyles } from '../utils/styleUtils';

const PartnershipsSection = ({ partnerships }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="mt-12"
  >
    <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Partnerships</h2>
    <div className={`${neuCardStyles({ elevation: "low" })} p-6 rounded-xl bg-gradient-to-br from-deepGreen-50 to-deepGreen-100`}>
      <p className="text-deepGreen-700">
        We're collaborating with{' '}
        <span className="font-semibold text-deepGreen-800">HYSACAM</span>,{' '}
        <span className="font-semibold text-deepGreen-800">Green Care West Africa</span>,{' '}
        <span className="font-semibold text-deepGreen-800">Bamenda City Council</span>,{' '}
        and various environmental organizations to ensure the project's success.
      </p>
    </div>
  </motion.div>
);

export default PartnershipsSection;