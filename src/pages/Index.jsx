import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">HUFIDA</h1>
          <p className="mt-2">Humanitarian Foundation for Integrated Development Assistance</p>
        </div>
      </header>
      
      <main className="container mx-auto mt-8 px-4">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Welcome to HUFIDA</h2>
          <p className="text-lg">
            We are dedicated to integrated development assistance through various projects and initiatives.
            Explore our ongoing efforts and learn how you can contribute to making a difference.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p>Empowering communities through knowledge and skills development.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p>Improving access to quality healthcare services in underserved areas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Sustainable Development</h3>
              <p>Promoting eco-friendly practices and sustainable livelihoods.</p>
            </div>
          </div>
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