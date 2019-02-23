import React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Main from './components/Main/Main';

import './index.scss';

render(
  <Router>
    <Main />
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById('app')
);
