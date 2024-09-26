import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import Testimonials from '../components/Testimonials';
import GetInvolved from '../components/GetInvolved';
import FeaturedProject from '../components/FeaturedProject';
import { ArrowRight } from 'lucide-react';
import { neuCardStyles, neuButtonStyles, neuContainerStyles, responsiveGridStyles } from '../utils/styleUtils';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const backgroundX = useTransform(mouseX, [0, window.innerWidth], [0, 100]);
  const backgroundY = useTransform(mouseY, [0, window.innerHeight], [0, 100]);

  const handleMouseMove = (event) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-deepGreen-900 to-deepGreen-800"
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${backgroundX}% ${backgroundY}%, rgba(0, 105, 75, 0.2), transparent 40%)`,
        }}
      />
      <main className={`${neuContainerStyles({ padding: "large" })} relative z-10`} role="main">
        <Hero />
        
        <motion.section {...fadeInUp} className="mt-16">
          <Card className={`${neuCardStyles({ elevation: "medium" })} bg-white/80 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden border border-deepGreen-100`}>
            <CardContent className="p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-deepGreen-800 mb-4">About HUFIDA</h2>
              <p className="text-white leading-relaxed">
                HUFIDA (Humanitarian Foundation for Innovative Development in Africa) is dedicated to empowering communities across Africa through sustainable development initiatives. Our innovative approach combines technology, education, and community engagement to create lasting positive change.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <LazyLoadComponent>
          <motion.div {...fadeInUp} className="mt-16">
            <ImpactStats />
          </motion.div>
        </LazyLoadComponent>

        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-deepGreen-50 text-center">Featured Projects</h2>
          <div className={`${responsiveGridStyles({ cols: 3 })} gap-8`}>
            <FeaturedProject 
              title="Faving: Social Exchange Engine"
              description="A revolutionary platform for knowledge sharing and collaboration, empowering communities to make informed decisions."
              link="/projects/faving"
              imageSrc="/faving-project.jpg"
            />
            <FeaturedProject 
              title="Sustainable Waste Management"
              description="Transforming waste management practices in Bamenda, Cameroon through innovative technology and community engagement."
              link="/projects/sustainable-waste-management"
              imageSrc="/waste-management-project.jpg"
            />
            <FeaturedProject 
              title="Digital Literacy Program"
              description="Empowering communities with essential digital skills for the 21st century, bridging the digital divide across Africa."
              link="/projects/digital-literacy"
              imageSrc="/digital-literacy-project.jpg"
            />
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="default" size="lg" className={`${neuButtonStyles({ variant: "primary", size: "lg" })} bg-deepGreen-600 text-white hover:bg-deepGreen-700`}>
              <Link to="/projects" className="flex items-center justify-center" aria-label="View all projects">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </motion.section>

        <LazyLoadComponent>
          <motion.div {...fadeInUp} className="mt-16">
            <GetInvolved />
          </motion.div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <motion.div {...fadeInUp} className="mt-16 mb-16">
            <Testimonials />
          </motion.div>
        </LazyLoadComponent>
      </main>
    </div>
  );
};

export default Index;
