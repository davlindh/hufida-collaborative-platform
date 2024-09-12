import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamLeadership = () => {
  const teamMembers = [
    { name: "David Lindh", role: "Co-founder", avatar: "/placeholder.svg" },
    { name: "Babila Fofuleng", role: "Co-founder", avatar: "/placeholder.svg" },
    { name: "Shima Askari", role: "Co-founder", avatar: "/placeholder.svg" },
  ];

  return (
    <Card className="bg-deepGreen-50 border-deepGreen-200">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-deepGreen-800">Our Team and Leadership</h2>
        <p className="mb-6 text-deepGreen-700">HUFIDA is led by a diverse team of experienced professionals committed to our mission of innovative development in Africa. Our leadership brings together expertise from various sectors, ensuring a holistic approach to addressing Africa's development challenges.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-deepGreen-200 text-deepGreen-700 text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg text-deepGreen-700">{member.name}</h3>
                <p className="text-deepGreen-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-deepGreen-700 font-semibold">Our team's diverse backgrounds and shared passion for Africa's development drive HUFIDA's innovative approaches and impactful initiatives.</p>
      </CardContent>
    </Card>
  );
};

export default TeamLeadership;