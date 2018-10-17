import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import Main from './components/Main/Main.jsx';

render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('app'),
);
