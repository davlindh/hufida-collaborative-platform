import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const History = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Our History</CardTitle>
      </CardHeader>
      <CardContent>
        <p>HUFIDA was founded in [year] by a group of passionate individuals committed to addressing development challenges in Africa. Since our inception, we have grown from a small local initiative to an international organization with a significant impact across the continent.</p>
        <p className="mt-2">Key milestones in our journey include:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>[Year]: Establishment of HUFIDA</li>
          <li>[Year]: Launch of our first major project in [Country]</li>
          <li>[Year]: Expansion of operations to [number] African countries</li>
          <li>[Year]: Recognition by [important organization] for our innovative approach</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default History;