import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FutureGoals = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Future Goals and Initiatives</CardTitle>
      </CardHeader>
      <CardContent>
        <p>As we look to the future, HUFIDA is committed to expanding our impact and addressing emerging challenges in African development. Our key goals and initiatives include:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Expanding our reach to 15 additional African countries by 2025</li>
          <li>Launching a digital platform to enhance access to our Information Clearing House resources, aiming to reach 1 million users annually</li>
          <li>Implementing innovative climate change adaptation projects in 100 vulnerable communities</li>
          <li>Developing a youth empowerment program focused on entrepreneurship and sustainable development, targeting 50,000 young Africans</li>
          <li>Strengthening our research capabilities to inform evidence-based development policies, with plans to publish 20 comprehensive studies by 2026</li>
          <li>Establishing a network of 1,000 community-based organizations to enhance grassroots development initiatives</li>
        </ul>
        <p className="mt-2">We are excited about these initiatives and invite our supporters to join us in shaping a brighter future for Africa. Together, we can create lasting positive change and empower communities across the continent.</p>
      </CardContent>
    </Card>
  );
};

export default FutureGoals;