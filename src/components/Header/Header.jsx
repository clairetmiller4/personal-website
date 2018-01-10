import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.scss'

class Header extends Component {

  render() {
    return(
      <div className='Header'>
        <h1>Claire Miller</h1>
        <nav className='navbar'>
          <NavLink exact className='link' activeClassName='active-link' to={'/'}>About</NavLink>
          <NavLink className='link' activeClassName='active-link' to={'/work'}>Work</NavLink>
          <NavLink className='link' activeClassName='active-link' to={'/projects'}>Projects</NavLink>
        </nav>
      </div>
    )
  }
}

export default Header
