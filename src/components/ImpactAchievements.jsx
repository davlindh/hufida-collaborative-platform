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
          <li>Empowered over 500,000 individuals through our innovative poverty alleviation programs</li>
          <li>Established 10 Information Clearing Houses, providing valuable resources to 5,000+ researchers and organizations</li>
          <li>Protected 100,000 acres of wildlife habitat through our conservation efforts</li>
          <li>Delivered humanitarian aid to 250,000 vulnerable individuals in conflict zones</li>
          <li>Published 200 monthly newsletters, reaching a global audience of 1 million readers</li>
          <li>Trained 10,000 local community leaders in sustainable development practices</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ImpactAchievements;