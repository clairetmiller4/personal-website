import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <h1>Claire Miller</h1>
      <nav className="navbar">
        <NavLink exact className="link" activeClassName="active-link" to="/">
          About
        </NavLink>
        <NavLink className="link" activeClassName="active-link" to="/work">
          Work
        </NavLink>
        <NavLink className="link" activeClassName="active-link" to="/projects">
          Projects
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
