import React from 'react';

import './Work.scss';

function Work() {
  return (
    <div className="Work">
      <div className="work-content">
        <div className="curr">
          <h2>Current</h2>
          <div className="work-card">
            <img src={require('../../assets/img/ccc-logo.jpg')} />
            <div className="work-card-text">
              <h3>CCC Information Services</h3>
              <h4>Research & Development Intern</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
