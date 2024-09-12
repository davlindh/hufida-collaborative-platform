import React from 'react';

const ProjectImpact = ({ impact }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Project Impact</h3>
      <p>{impact}</p>
    </div>
  );
};

export default ProjectImpact;