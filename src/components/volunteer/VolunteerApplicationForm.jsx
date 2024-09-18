import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const VolunteerApplicationForm = ({ opportunity }) => {
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

  if (!opportunity) {
    return (
      <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
        <p>No opportunity selected. Please choose a volunteer opportunity to apply for.</p>
      </div>
    );
  }

  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Apply for {opportunity.title}</h2>
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
  );
};

export default VolunteerApplicationForm;
