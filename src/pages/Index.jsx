import React from 'react';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import Objectives from '../components/Objectives';
import Testimonials from '../components/Testimonials';
import GetInvolved from '../components/GetInvolved';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto mt-8 px-4">
        <Hero />
        <ImpactStats />
        <Objectives />
        <Testimonials />
        <GetInvolved />
      </main>
      
      <footer className="bg-gray-200 p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 HUFIDA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;