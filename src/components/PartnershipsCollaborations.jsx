import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PartnershipsCollaborations = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Partnerships and Collaborations</CardTitle>
      </CardHeader>
      <CardContent>
        <p>HUFIDA believes in the power of collaboration to amplify our impact. We work closely with various organizations, including:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Local NGOs and community organizations across Africa</li>
          <li>International development agencies such as USAID and DFID</li>
          <li>Academic institutions like the University of Nairobi and Makerere University</li>
          <li>Government bodies and policymakers in multiple African countries</li>
          <li>Corporate partners committed to sustainable development in Africa, including Microsoft and Unilever</li>
        </ul>
        <p className="mt-2">These partnerships enable us to leverage diverse expertise, resources, and networks to create more significant and lasting change. For example, our collaboration with Microsoft has led to the development of innovative digital literacy programs reaching 50,000 youth across rural Africa.</p>
      </CardContent>
    </Card>
  );
};

export default PartnershipsCollaborations;