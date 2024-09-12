import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamLeadership = () => {
  const teamMembers = [
    { name: "Dr. Amina Nkrumah", role: "Executive Director", avatar: "/placeholder.svg" },
    { name: "John Okafor", role: "Director of Programs", avatar: "/placeholder.svg" },
    { name: "Sarah Mwangi", role: "Chief Financial Officer", avatar: "/placeholder.svg" },
    { name: "Dr. Kwame Asante", role: "Research Director", avatar: "/placeholder.svg" },
    { name: "Fatima El-Bashir", role: "Partnerships Manager", avatar: "/placeholder.svg" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Our Team and Leadership</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">HUFIDA is led by a diverse team of experienced professionals committed to our mission of innovative development in Africa.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Avatar>
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
      </CardContent>
    </Card>
  );
};

export default TeamLeadership;