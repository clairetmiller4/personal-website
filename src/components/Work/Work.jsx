import React from 'react';
import WorkCard from '../WorkCard/WorkCard';

import './Work.scss';

function Work() {
  const image = require('../../assets/img/ccc-logo.jpg');
  return (
    <div className="work-content">
      <h2>Current</h2>
      <WorkCard
        company="CCC Information Services"
        position="Junior Software Engineer, R&D"
        location="Chicago, IL"
        image={image}
      />
      <h2>Previous</h2>
      <WorkCard
        company="CCC Information Services"
        position="Software Engineering Intern, R&D"
        location="Chicago, IL"
        image={image}
      />
    </div>
  );
}

export default Work;
