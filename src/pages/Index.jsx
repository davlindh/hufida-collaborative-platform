import React from 'react';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import Objectives from '../components/Objectives';
import Testimonials from '../components/Testimonials';
import GetInvolved from '../components/GetInvolved';
import FavingOverview from '../components/FavingOverview';
import FavingFeatures from '../components/FavingFeatures';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto mt-8 px-4">
        <Hero 
          title="Welcome to Faving"
          subtitle="The Social Exchange Engine for Collaborative Action"
          description="Faving is a revolutionary platform designed to connect individuals, communities, and organizations to drive positive change through knowledge sharing and collaborative projects."
        />
        <FavingOverview />
        <FavingFeatures />
        <ImpactStats />
        <Objectives />
        <Testimonials />
        <GetInvolved />
      </main>
      
      <footer className="bg-gray-200 p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Faving. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;