import React from 'react';

const Team = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-deepGreen-800">Our Team and Leadership</h3>
      <p className="text-deepGreen-700 mb-4">
        HUFIDA is led by a diverse team of experienced professionals committed to our mission of innovative development in Africa. Our leadership brings together expertise from various sectors, ensuring a holistic approach to addressing Africa's development challenges.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-deepGreen-700">
        <li>David Lindh - Co-founder and Executive Director</li>
        <li>Babila Fofuleng - Co-founder and Director of Operations</li>
        <li>Shima Askari - Co-founder and Director of Innovation</li>
        <li>A team of 50+ dedicated professionals across Africa</li>
        <li>International Advisory Board comprising experts in sustainable development</li>
      </ul>
    </div>
  );
};

export default Team;