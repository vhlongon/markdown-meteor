import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './components/App';

// after meteor loads in the browser, render my app to the DOM
Meteor.startup(() => {
  render( <App />, document.querySelector('.root') )
});
