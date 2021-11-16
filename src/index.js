import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import Actors from './components/Actors';

render (
  <App />,
  <Actors />,
  document.getElementById('root')
);
