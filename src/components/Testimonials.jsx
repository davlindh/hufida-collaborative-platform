import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { neuCardStyles, responsiveGridStyles } from '../utils/styleUtils';

const Testimonials = () => {
  const testimonials = [
    { quote: "HUFIDA's digital literacy program has opened up a world of opportunities for our youth.", author: "Sarah M., Community Leader" },
    { quote: "The sustainable waste management project has transformed our city. We're grateful for HUFIDA's innovative approach.", author: "John D., Local Government Official" },
    { quote: "Partnering with HUFIDA has allowed us to make a real difference in African communities.", author: "Emma L., Corporate Partner" }
  ];

  return (
    <section className={`${neuCardStyles({ elevation: "high" })} bg-gradient-to-br from-deepGreen-700 to-deepGreen-600 p-8 rounded-lg`}>
      <h2 className="text-3xl font-bold mb-6 text-center text-white">What People Say</h2>
      <div className={`${responsiveGridStyles({ cols: 3 })} gap-6`}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`${neuCardStyles({ elevation: "medium" })} h-full bg-deepGreen-500`}>
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <p className="text-white mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-deepGreen-100 text-sm text-right">- {testimonial.author}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
