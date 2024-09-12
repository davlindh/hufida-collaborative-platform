import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Sustainable Urban Planning",
    description: "Explore innovative approaches to creating eco-friendly cities.",
    category: "Sustainability",
  },
  {
    title: "Effective Community Organizing",
    description: "Learn strategies for mobilizing your community for positive change.",
    category: "Community Development",
  },
  {
    title: "Introduction to Blockchain for Social Good",
    description: "Discover how blockchain technology can drive social impact.",
    category: "Technology",
  },
];

const KnowledgeBaseHighlights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{article.title}</CardTitle>
            <CardDescription>{article.category}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{article.description}</p>
            <Button variant="outline">Read More</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KnowledgeBaseHighlights;