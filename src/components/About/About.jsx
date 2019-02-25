import React from 'react';

import './About.scss';

function About() {
  return (
    <div className="About">
      <div className="about-content">
        <div className="about-img">
          <img src={require('../../assets/img/portrait.jpg')} />
        </div>
        <div className="about-text">
          <ul>
            <li>Software engineer at CCC Information Services</li>
            <li>University of Illinois at Urbana-Champaign alumni</li>
            <li>B.S. in Computer Science and Mathematics</li>
            <li>Minor in Spanish</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
