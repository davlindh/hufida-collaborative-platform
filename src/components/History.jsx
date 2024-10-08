import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { neuCardStyles } from '../utils/styleUtils';

const History = () => {
  return (
    <Card className={`${neuCardStyles({ elevation: "medium" })} bg-deepGreen-700 text-white`}>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">Our History</h2>
        <p className="mb-4 text-white">HUFIDA was founded in 2005 by a group of passionate individuals committed to addressing development challenges in Africa. Since our inception, we have grown from a small local initiative to an international organization with a significant impact across the continent.</p>
        <p className="mb-4 text-white">Key milestones in our journey include:</p>
        <ul className="list-disc pl-5 space-y-2 text-white">
          <li>2005: Establishment of HUFIDA</li>
          <li>2008: Launch of our first major project in Ghana</li>
          <li>2012: Expansion of operations to 5 African countries</li>
          <li>2015: Recognition by the United Nations for our innovative approach to sustainable development</li>
          <li>2020: Celebration of 15 years of impact, reaching over 1 million beneficiaries</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default History;
