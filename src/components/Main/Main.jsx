import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './Main.scss';

import Header from '../Header/Header';
import About from '../About/About';
import Work from '../Work/Work';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <div className="Main">
      <Header />
      <div className="Content">
        <Route exact path="/" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/projects" component={Projects} />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
