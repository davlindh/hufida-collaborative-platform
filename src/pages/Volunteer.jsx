import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

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

const OpportunityCard = ({ opportunity, isSelected, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card 
      className={`cursor-pointer transition-shadow hover:shadow-lg ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle>{opportunity.title}</CardTitle>
        <CardDescription>{opportunity.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-semibold mb-2">Required Skills:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {opportunity.requiredSkills.map((skill, idx) => (
            <Badge key={idx} variant="secondary">{skill}</Badge>
          ))}
        </div>
        <p className="text-sm">
          <span className="font-semibold">Duration:</span> {opportunity.duration}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Location:</span> {opportunity.location}
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

const OpportunityDetails = ({ opportunity }) => (
  <ScrollArea className="h-[60vh]">
    <div className="space-y-4 p-4">
      <h3 className="text-xl font-bold">{opportunity.title}</h3>
      <p>{opportunity.description}</p>
      <div>
        <h4 className="font-semibold">Required Skills:</h4>
        <ul className="list-disc pl-5">
          {opportunity.requiredSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">Responsibilities:</h4>
        <ul className="list-disc pl-5">
          {opportunity.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      <p><span className="font-semibold">Duration:</span> {opportunity.duration}</p>
      <p><span className="font-semibold">Location:</span> {opportunity.location}</p>
      <p><span className="font-semibold">Impact:</span> {opportunity.impact}</p>
    </div>
  </ScrollArea>
);

const Volunteer = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {opportunities.map((opportunity, index) => (
          <motion.div
            key={opportunity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <OpportunityCard 
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
            <h2 className="text-2xl font-semibold mb-4">Apply for {selectedOpportunity.title}</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your full name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email address" />
              </div>
              <div>
                <Label htmlFor="skills">Skills</Label>
                <div className="flex gap-2 mb-2">
                  <Input 
                    id="skills" 
                    value={newSkill} 
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill" 
                  />
                  <Button type="button" onClick={handleAddSkill}>Add</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="cursor-pointer" onClick={() => handleRemoveSkill(skill)}>
                      {skill} ✕
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="availability">Availability</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="weekends">Weekends</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="start-date">Preferred Start Date</Label>
                <Input id="start-date" type="date" />
              </div>
              <div>
                <Label htmlFor="experience">Relevant Experience</Label>
                <Textarea id="experience" placeholder="Briefly describe any relevant experience you have" />
              </div>
              <div>
                <Label htmlFor="motivation">Motivation</Label>
                <Textarea id="motivation" placeholder="Tell us why you want to volunteer for this role and what you hope to achieve" />
              </div>
              <div>
                <Label htmlFor="questions">Questions or Comments</Label>
                <Textarea id="questions" placeholder="Any questions or additional information you'd like to share?" />
              </div>
              <Button className="w-full">Submit Application</Button>
            </form>
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