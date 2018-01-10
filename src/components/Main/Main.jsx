import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
//import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import styles from './Main.scss';

import Header from '../Header/Header.jsx';
import About from '../About/About.jsx';
import Work from '../Work/Work.jsx';
import Projects from '../Projects/Projects.jsx';
import Footer from '../Footer/Footer.jsx';

class Main extends Component {

  render() {
    return(
      <div className='Main'>
        <Header />
        <div className='Content'>
          <Route exact path='/' component={About}/>
          <Route path='/work' component={Work}/>
          <Route path='/projects' component={Projects}/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main
