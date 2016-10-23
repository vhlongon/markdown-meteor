import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Bins} from '../imports/collections/bins';


// after meteor loads in the browser, render my app to the DOM
Meteor.startup(() => {
  render( <App />, document.querySelector('.root') )
});
