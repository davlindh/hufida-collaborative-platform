import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">HUFIDA</h1>
          <p className="mt-2">Humanitarian Foundation for Innovative Development in Africa</p>
        </div>
      </header>
      
      <main className="container mx-auto mt-8 px-4">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Welcome to HUFIDA</h2>
          <p className="text-lg mb-4">
            We are dedicated to innovative development assistance through various projects and initiatives in Africa.
            Explore our ongoing efforts and learn how you can contribute to making a difference.
          </p>
          <Button asChild>
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Objectives</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Create awareness about poverty and sustainable development challenges in Africa</li>
            <li>Empower vulnerable and marginalized groups with innovative tools for poverty alleviation</li>
            <li>Support local African communities for integrated development and socio-cultural cohesion</li>
            <li>Develop and deploy infrastructure for stable future aid</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
          <p className="mb-4">Join us in our mission to create positive change. There are many ways to contribute:</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/volunteer">Volunteer</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/donate">Donate</Link>
            </Button>
          </div>
        </section>
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