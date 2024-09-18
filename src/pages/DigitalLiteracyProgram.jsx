import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@/components/ui/tooltip";
import ProjectHeader from '../components/ProjectHeader';
import ProjectTabs from '../components/ProjectTabs';
import ProjectFeatures from '../components/ProjectFeatures';
import ProjectVision from '../components/ProjectVision';
import GetInvolvedButton from '../components/GetInvolvedButton';
import SuggestDirectionDialog from '../components/SuggestDirectionDialog';

const sections = [
  {
    id: "about",
    title: "About",
    content: "The Digital Literacy Program aims to bridge the digital divide in Cameroon by providing comprehensive digital skills training to underserved communities, with a focus on youth and women.",
    tooltip: "Learn about our digital empowerment initiative"
  },
  {
    id: "objectives",
    title: "Objectives",
    content: "Our key objectives include improving digital literacy rates, enhancing employability through tech skills, promoting digital entrepreneurship, and fostering innovation in local communities.",
    tooltip: "Discover our goals for digital empowerment"
  },
  {
    id: "approach",
    title: "Approach",
    content: "We employ a multi-faceted approach combining hands-on workshops, online learning platforms, mentorship programs, and partnerships with local tech companies to provide comprehensive digital education.",
    tooltip: "Explore our teaching methodology"
  },
  {
    id: "impact",
    title: "Impact",
    content: "Our program has trained over 5,000 individuals, with 60% reporting improved job prospects or starting their own digital businesses. We've also established 10 community tech hubs across Cameroon.",
    tooltip: "See the difference we're making"
  },
  {
    id: "future",
    title: "Future Plans",
    content: "We aim to expand our reach to rural areas, develop advanced courses in emerging technologies, and create a national digital skills certification program recognized by employers across Cameroon.",
    tooltip: "Learn about our future initiatives"
  }
];

const features = [
  { 
    title: "Basic Digital Skills Workshops", 
    description: "Foundational courses covering computer basics, internet use, and online safety.",
    details: [
      "Computer hardware and software basics",
      "Internet navigation and search techniques",
      "Email and online communication etiquette",
      "Cybersecurity and online privacy"
    ]
  },
  { 
    title: "Advanced Tech Training", 
    description: "Specialized courses in high-demand tech skills for career advancement.",
    details: [
      "Web development (HTML, CSS, JavaScript)",
      "Mobile app development",
      "Data analysis and visualization",
      "Cloud computing basics"
    ]
  },
  { 
    title: "Digital Entrepreneurship Program", 
    description: "Guidance and resources for starting and growing online businesses.",
    details: [
      "E-commerce platform setup and management",
      "Digital marketing strategies",
      "Online payment systems integration",
      "Social media for business growth"
    ]
  },
  { 
    title: "Community Tech Hubs", 
    description: "Accessible spaces with computers and internet for hands-on learning and practice.",
    details: [
      "Free computer and internet access",
      "Regular workshops and training sessions",
      "Collaborative workspace for tech projects",
      "Tech mentorship and support"
    ]
  },
  { 
    title: "Online Learning Platform", 
    description: "Self-paced digital courses accessible from anywhere with internet connection.",
    details: [
      "Interactive video lessons",
      "Quizzes and assignments",
      "Progress tracking and certificates",
      "Discussion forums for peer learning"
    ]
  },
  { 
    title: "Tech Mentorship Network", 
    description: "Connecting learners with experienced professionals in the tech industry.",
    details: [
      "One-on-one mentoring sessions",
      "Career guidance and job search support",
      "Networking events with tech companies",
      "Internship and job placement assistance"
    ]
  }
];

const DigitalLiteracyProgram = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <TooltipProvider>
      <ScrollArea className="h-screen">
        <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
          <ProjectHeader title="Digital Literacy Program" />
          <ProjectTabs sections={sections} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProjectFeatures features={features} />
          <ProjectVision vision="Our vision is to create a digitally empowered Cameroon where every citizen has the skills and access to thrive in the digital age. We envision a future where digital literacy bridges socioeconomic gaps, drives innovation, and positions Cameroon as a tech leader in Africa." />
          <GetInvolvedButton title="Digital Literacy Program" setIsDialogOpen={setIsDialogOpen} />
          <SuggestDirectionDialog
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
            projectTitle="Digital Literacy Program"
          />
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
};

export default DigitalLiteracyProgram;
