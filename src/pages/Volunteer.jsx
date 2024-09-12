import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import VolunteerOpportunityCard from '../components/VolunteerOpportunityCard';
import VolunteerOpportunityDetails from '../components/VolunteerOpportunityDetails';
import VolunteerApplicationForm from '../components/VolunteerApplicationForm';

const opportunities = [
  {
    id: 1,
    title: "Event Organizer",
    description: "Help organize seminars, conferences, and workshops on sustainable development in Africa.",
    requiredSkills: ["Communication", "Project Management", "Networking"],
    responsibilities: [
      "Plan and coordinate events from conception to execution",
      "Manage event budgets and timelines",
      "Liaise with speakers, sponsors, and attendees",
      "Oversee marketing and promotion of events"
    ],
    duration: "3-6 months",
    location: "Various locations in Africa",
    impact: "Your work will directly contribute to raising awareness about sustainable development challenges and solutions in Africa."
  },
  {
    id: 2,
    title: "Research Assistant",
    description: "Contribute to the Information Clearing House by researching and documenting African development issues.",
    requiredSkills: ["Research", "Writing", "Data Analysis"],
    responsibilities: [
      "Conduct literature reviews on various development topics",
      "Collect and analyze data from multiple sources",
      "Write research reports and policy briefs",
      "Assist in maintaining the Information Clearing House database"
    ],
    duration: "6-12 months",
    location: "Remote, with occasional travel",
    impact: "Your research will inform policy decisions and contribute to evidence-based development strategies across Africa."
  },
  {
    id: 3,
    title: "Community Outreach Coordinator",
    description: "Assist in creating awareness about poverty and sustainable development challenges in Africa.",
    requiredSkills: ["Public Speaking", "Social Media", "Community Engagement"],
    responsibilities: [
      "Develop and implement community outreach strategies",
      "Organize and lead community workshops and information sessions",
      "Create engaging content for social media and other platforms",
      "Build and maintain relationships with local partners and stakeholders"
    ],
    duration: "6-12 months",
    location: "Various communities across Africa",
    impact: "Your efforts will empower local communities with knowledge and tools to address development challenges effectively."
  },
  {
    id: 4,
    title: "Newsletter Contributor",
    description: "Write articles or help produce our monthly newsletter on development and humanitarian challenges in Africa.",
    requiredSkills: ["Writing", "Editing", "Journalism"],
    responsibilities: [
      "Research and write articles on current development issues in Africa",
      "Interview experts and stakeholders in the field",
      "Edit and proofread newsletter content",
      "Collaborate with the design team on newsletter layout and visuals"
    ],
    duration: "3-6 months, with possibility of extension",
    location: "Remote",
    impact: "Your writing will reach a global audience, raising awareness about critical issues affecting African development."
  }
];

const Volunteer = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOpportunities = opportunities.filter(opportunity =>
    opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opportunity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opportunity.requiredSkills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto mt-8 px-4">
      <motion.h1 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Volunteer Opportunities
      </motion.h1>
      <motion.p 
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Join us in our mission to create positive change in Africa. Explore our volunteer opportunities and find where your skills can make the biggest impact:
      </motion.p>
      
      <Input
        type="text"
        placeholder="Search opportunities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {filteredOpportunities.map((opportunity, index) => (
          <motion.div
            key={opportunity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <VolunteerOpportunityCard 
              opportunity={opportunity}
              isSelected={selectedOpportunity === opportunity}
              onClick={() => setSelectedOpportunity(opportunity)}
            />
          </motion.div>
        ))}
      </div>
      
      <AnimatePresence>
        {selectedOpportunity && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <VolunteerOpportunityDetails opportunity={selectedOpportunity} />
            <VolunteerApplicationForm opportunity={selectedOpportunity} />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Why Volunteer with HUFIDA?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Gain hands-on experience in international development</li>
          <li>Contribute to meaningful projects that make a real difference</li>
          <li>Develop new skills and enhance your professional network</li>
          <li>Work with diverse teams and learn about different cultures</li>
          <li>Receive mentorship from experienced professionals in the field</li>
        </ul>
      </section>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-8">Learn More About Volunteering</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Volunteering with HUFIDA</DialogTitle>
            <DialogDescription>
              Discover how you can make a difference by volunteering with HUFIDA.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>As a HUFIDA volunteer, you'll have the opportunity to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Work on impactful projects across Africa</li>
              <li>Collaborate with local and international experts</li>
              <li>Gain valuable experience in sustainable development</li>
              <li>Contribute to positive change in communities</li>
            </ul>
            <p>We offer both short-term and long-term volunteering opportunities, as well as remote and on-site positions. Join us in our mission to create innovative solutions for Africa's development challenges!</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Volunteer;