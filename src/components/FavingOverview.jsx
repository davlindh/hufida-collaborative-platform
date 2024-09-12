import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FavingOverview = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">What is Faving?</h2>
      <Card>
        <CardHeader>
          <CardTitle>A Platform for Collaborative Action</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Faving is more than just a digital platform; it's a movement designed to harness the power of collaboration, democratize access to knowledge, and amplify the impact of individual actions. By connecting people, skills, and ideas, Faving becomes a catalyst for positive change, empowering communities to shape their own destinies and build a brighter future.</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default FavingOverview;