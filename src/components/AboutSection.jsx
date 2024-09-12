import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = ({ icon, title, content }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center text-xl font-semibold text-deepGreen-700">
        {icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
  </Card>
);

export default AboutSection;