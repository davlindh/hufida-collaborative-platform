import React from 'react';

const ProjectFuture = ({ future }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Future Plans</h3>
      <p>{future}</p>
    </div>
  );
};

export default ProjectFuture;