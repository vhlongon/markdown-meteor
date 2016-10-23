import React, {Component} from 'react';
import {render} from 'react-dom';
import {Bins} from '../imports/collections/bins';
import App from './components/App';
import BinsMain from './components/bins/bins-main';
import BinsList from './components/bins/bins-list';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={BinsList} />
      <Route path="bins/:binId" component={BinsMain} />
    </Route>
  </Router>
);

// after meteor loads in the browser, render my app to the DOM
Meteor.startup(() => {
  render( routes, document.querySelector('.root') )
});
