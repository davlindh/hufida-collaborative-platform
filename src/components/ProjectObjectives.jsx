import React from 'react';

const ProjectObjectives = ({ objectives }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Project Objectives</h3>
      <ul className="list-disc pl-5 space-y-2">
        {objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectObjectives;