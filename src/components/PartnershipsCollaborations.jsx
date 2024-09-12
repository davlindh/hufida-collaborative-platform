import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const PartnershipsCollaborations = () => {
  return (
    <Card className="bg-deepGreen-50 border-deepGreen-200">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Partnerships and Collaborations</h2>
        <p className="mb-4 text-deepGreen-700">HUFIDA believes in the power of collaboration to amplify our impact. We work closely with various organizations, including:</p>
        <ul className="list-disc pl-5 space-y-2 text-deepGreen-700">
          <li>Local NGOs and community organizations across Africa</li>
          <li>International development agencies such as USAID and DFID</li>
          <li>Academic institutions like the University of Nairobi and Makerere University</li>
          <li>Government bodies and policymakers in multiple African countries</li>
          <li>Corporate partners committed to sustainable development in Africa, including Microsoft and Unilever</li>
        </ul>
        <p className="mt-4 text-deepGreen-700">These partnerships enable us to leverage diverse expertise, resources, and networks to create more significant and lasting change. For example, our collaboration with Microsoft has led to the development of innovative digital literacy programs reaching 50,000 youth across rural Africa.</p>
      </CardContent>
    </Card>
  );
};

export default PartnershipsCollaborations;