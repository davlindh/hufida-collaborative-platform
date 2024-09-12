import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamLeadership = () => {
  const teamMembers = [
    { name: "David Lindh", role: "Co-founder", avatar: "/placeholder.svg" },
    { name: "Babila Fofuleng", role: "Co-founder", avatar: "/placeholder.svg" },
    { name: "Shima Askari", role: "Co-founder", avatar: "/placeholder.svg" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Our Team and Leadership</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">HUFIDA is led by a diverse team of experienced professionals committed to our mission of innovative development in Africa. Our leadership brings together expertise from various sectors, ensuring a holistic approach to addressing Africa's development challenges.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 text-center">
              <Avatar className="w-24 h-24">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4">Our team's diverse backgrounds and shared passion for Africa's development drive HUFIDA's innovative approaches and impactful initiatives.</p>
      </CardContent>
    </Card>
  );
};

export default TeamLeadership;