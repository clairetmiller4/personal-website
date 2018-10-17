import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.scss';

// import FaGithub from 'react-icons/lib/fa/github';
// import FaLinkedin from 'react-icons/lib/fa/linkedin';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        {/* <div>
          <a href={"https://github.com/clairetmiller4"}>
            <FaGithub className='social-icon' />
          </a>
        </div>
        <div>
          <a href={"https://www.linkedin.com/in/clairetmiller/"}>
            <FaLinkedin className='social-icon' />
          </a>
        </div> */}
      </div>
    );
  }
}

export default Footer;
