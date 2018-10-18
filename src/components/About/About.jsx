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
          <p>
            I'm a senior at the University of Illinois at Urbana-Champaign
            pursuing my Bachelor's degree in Computer Science and Mathematics. I
            also have a minor in Spanish.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
