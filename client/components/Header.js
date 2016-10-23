import React, {Component}  from 'react';
import Accounts from './Accounts';
import {Link, browserHistory} from 'react-router';
import {Bins} from '../../imports/collections/bins';

class Header extends Component {

  constructor(props) {
    super(props);
    displayName: 'Header';
  }

  onBinClick(e) {
    e.preventDefault();
    // insert a new entry to the bins collection
    // every meteor method accepts a callback that is run when the action has been executed
    // the first arg is an error (if something went wrong) and the second is whatever is returned from the methods
    //in our case is the newly created bin id
    Meteor.call('bins.insert', (error, binId) => {
      browserHistory.push(`/bins/${binId}`);
    });
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Markbin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
