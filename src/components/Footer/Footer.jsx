import React from 'react';

import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="Footer">
      <div>
        <a className="social-icon" href="https://github.com/clairetmiller4">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div>
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/clairetmiller/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
