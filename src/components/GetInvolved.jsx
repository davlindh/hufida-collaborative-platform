import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const GetInvolved = () => {
  return (
    <section className="mb-12 text-center">
      <h2 className="text-3xl font-semibold mb-6">Get Involved</h2>
      <p className="mb-6">Join us in our mission to create positive change. There are many ways to contribute:</p>
      <div className="flex flex-wrap justify-center gap-4">
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
  );
};

export default GetInvolved;