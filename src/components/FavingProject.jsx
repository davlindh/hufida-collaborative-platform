import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FavingProject = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Introducing Faving: Our Latest Initiative</h2>
      <Card>
        <CardHeader>
          <CardTitle>Faving: The Social Exchange Engine</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            HUFIDA is proud to present Faving, our groundbreaking digital platform designed to revolutionize social interactions, knowledge sharing, and collaboration. As the first Social Exchange Engine, Faving aims to empower communities and individuals to make informed decisions through collective intelligence.
          </p>
          <p className="mb-4">
            Faving integrates advanced technologies such as digital twins and data recycling to create a dynamic, immersive environment where users can collaborate on projects, share knowledge, and drive meaningful change in areas like climate action and community development.
          </p>
          <p className="mb-4">
            Key features of Faving include:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Real-time collaboration tools</li>
            <li>Personalized user experiences</li>
            <li>Data-driven decision-making support</li>
            <li>Virtual simulations for scenario planning</li>
            <li>Community engagement and knowledge sharing platforms</li>
          </ul>
          <p className="mb-4">
            We're currently in the development phase of Faving, with plans to launch a beta version in the coming months. Stay tuned for updates on this exciting project!
          </p>
          <Button asChild>
            <Link to="/projects">Learn More About Our Projects</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default FavingProject;