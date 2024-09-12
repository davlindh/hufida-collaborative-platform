import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from 'lucide-react';

const FutureGoals = () => {
  const goals = [
    "Expanding our reach to 15 additional African countries by 2025",
    "Launching a digital platform to enhance access to our Information Clearing House resources, aiming to reach 1 million users annually",
    "Implementing innovative climate change adaptation projects in 100 vulnerable communities",
    "Developing a youth empowerment program focused on entrepreneurship and sustainable development, targeting 50,000 young Africans",
    "Strengthening our research capabilities to inform evidence-based development policies, with plans to publish 20 comprehensive studies by 2026",
    "Establishing a network of 1,000 community-based organizations to enhance grassroots development initiatives"
  ];

  return (
    <Card className="bg-palette-neutral-100 border-palette-primary">
      <CardHeader className="bg-palette-primary text-white">
        <CardTitle className="text-2xl">Future Goals and Initiatives</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="mb-4">As we look to the future, HUFIDA is committed to expanding our impact and addressing emerging challenges in African development. Our key goals and initiatives include:</p>
        <ul className="space-y-3">
          {goals.map((goal, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="mr-2 h-5 w-5 text-palette-primary-dark flex-shrink-0 mt-1" />
              <span>{goal}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-palette-primary-dark font-semibold">We are excited about these initiatives and invite our supporters to join us in shaping a brighter future for Africa. Together, we can create lasting positive change and empower communities across the continent.</p>
      </CardContent>
    </Card>
  );
};

export default FutureGoals;