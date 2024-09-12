import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ImpactAchievements = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Impact and Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <p>At HUFIDA, we measure our success by the positive change we create in African communities. Some of our key achievements include:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Empowered over [number] individuals through our innovative poverty alleviation programs</li>
          <li>Established [number] Information Clearing Houses, providing valuable resources to [number] researchers and organizations</li>
          <li>Protected [number] acres of wildlife habitat through our conservation efforts</li>
          <li>Delivered humanitarian aid to [number] vulnerable individuals in conflict zones</li>
          <li>Published [number] monthly newsletters, reaching a global audience of [number] readers</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ImpactAchievements;