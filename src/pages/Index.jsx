import React from 'react';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import Objectives from '../components/Objectives';
import Testimonials from '../components/Testimonials';
import GetInvolved from '../components/GetInvolved';
import FavingProject from '../components/FavingProject';

const Index = () => {
  return (
    <div className="min-h-screen bg-deepGreen-50">
      <main className="container mx-auto mt-8 px-4">
        <Hero />
        <ImpactStats />
        <Objectives />
        <FavingProject />
        <Testimonials />
        <GetInvolved />
      </main>
      
      <footer className="bg-deepGreen-200 p-4 mt-12">
        <div className="container mx-auto text-center text-deepGreen-800">
          <p>&copy; 2024 HUFIDA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;