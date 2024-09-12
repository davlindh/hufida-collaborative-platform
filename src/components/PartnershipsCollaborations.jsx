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
          <li>International development agencies and foundations</li>
          <li>Academic institutions and research centers</li>
          <li>Government bodies and policymakers</li>
          <li>Corporate partners committed to sustainable development in Africa</li>
        </ul>
        <p className="mt-2">These partnerships enable us to leverage diverse expertise, resources, and networks to create more significant and lasting change.</p>
      </CardContent>
    </Card>
  );
};

export default PartnershipsCollaborations;