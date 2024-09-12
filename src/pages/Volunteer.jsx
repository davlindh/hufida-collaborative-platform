import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Volunteer = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  const opportunities = [
    {
      title: "Event Organizer",
      description: "Help organize seminars, conferences, and workshops on sustainable development in Africa.",
      requiredSkills: ["Communication", "Project Management", "Networking"],
    },
    {
      title: "Research Assistant",
      description: "Contribute to the Information Clearing House by researching and documenting African development issues.",
      requiredSkills: ["Research", "Writing", "Data Analysis"],
    },
    {
      title: "Community Outreach",
      description: "Assist in creating awareness about poverty and sustainable development challenges in Africa.",
      requiredSkills: ["Public Speaking", "Social Media", "Community Engagement"],
    },
    {
      title: "Newsletter Contributor",
      description: "Write articles or help produce our monthly newsletter on development and humanitarian challenges in Africa.",
      requiredSkills: ["Writing", "Editing", "Journalism"],
    },
  ];

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
        Join us in our mission to create positive change in Africa. Here are some ways you can contribute your time and skills:
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {opportunities.map((opportunity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card 
              className={`cursor-pointer transition-shadow hover:shadow-lg ${selectedOpportunity === opportunity ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setSelectedOpportunity(opportunity)}
            >
              <CardHeader>
                <CardTitle>{opportunity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{opportunity.description}</CardDescription>
                <div className="mt-4">
                  <p className="text-sm font-semibold mb-2">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.requiredSkills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {selectedOpportunity && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
              <Label htmlFor="motivation">Motivation</Label>
              <Textarea id="motivation" placeholder="Tell us why you want to volunteer for this role" />
            </div>
            <Button className="w-full">Submit Application</Button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default Volunteer;