import React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import Main from './components/Main/Main';

render(
  <Router>
    <Main />
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById('app')
);
