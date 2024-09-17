import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import { sections, features, vision } from '../data/humanitarianSupport';

const HumanitarianSupport = () => {
  const project = {
    title: "Humanitarian Support and Infrastructure Development",
    sections: sections,
    features: features,
    vision: vision
  };

  return <ProjectDetails project={project} />;
};

export default HumanitarianSupport;