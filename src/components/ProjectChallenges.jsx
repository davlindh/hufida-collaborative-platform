import React from 'react';

const ProjectChallenges = ({ challenges, solutions }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Challenges and Solutions</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Challenges:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Solutions:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {solutions.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectChallenges;