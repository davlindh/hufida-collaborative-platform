import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from 'sonner';

const VolunteerApplicationForm = ({ opportunity }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: [],
    availability: '',
    startDate: '',
    experience: '',
    motivation: '',
    questions: ''
  });
  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleAddSkill = () => {
    if (newSkill && !formData.skills.includes(newSkill)) {
      setFormData(prevData => ({ ...prevData, skills: [...prevData.skills, newSkill] }));
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData(prevData => ({
      ...prevData,
      skills: prevData.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    toast.success('Application submitted successfully!');
    // Here you would typically send the form data to your backend
  };

  return (
    <Card className="bg-white shadow-lg border-deepGreen-200">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-deepGreen-800">Apply for {opportunity.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
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
              {formData.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="cursor-pointer" onClick={() => handleRemoveSkill(skill)}>
                  {skill} ✕
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="availability">Availability</Label>
            <Select name="availability" onValueChange={(value) => handleInputChange({ target: { name: 'availability', value } })}>
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
            <Input id="start-date" name="startDate" type="date" value={formData.startDate} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="experience">Relevant Experience</Label>
            <Textarea id="experience" name="experience" value={formData.experience} onChange={handleInputChange} placeholder="Briefly describe any relevant experience you have" />
          </div>
          <div>
            <Label htmlFor="motivation">Motivation</Label>
            <Textarea id="motivation" name="motivation" value={formData.motivation} onChange={handleInputChange} placeholder="Tell us why you want to volunteer for this role and what you hope to achieve" />
          </div>
          <div>
            <Label htmlFor="questions">Questions or Comments</Label>
            <Textarea id="questions" name="questions" value={formData.questions} onChange={handleInputChange} placeholder="Any questions or additional information you'd like to share?" />
          </div>
          <Button type="submit" className="w-full bg-deepGreen-600 hover:bg-deepGreen-700 text-white">Submit Application</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default VolunteerApplicationForm;
