import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import {Link} from 'react-router';

class BinsList extends Component {

  onBinRemove(bin) {
    Meteor.call('bins.remove', bin);
  }
  renderList() {
    return this.props.bins.map(bin => {
      return  (
        /*We need to pass this.onBinRemove as a callback so we create a different instance
          for each bin object, if you would just write {this.onBinRemove(bin)} the function would be
          call directly instead and we wouldn't have the correct refence for each bin created */
        <li className="list-group-item" key={bin._id}>
          <Link to={`bins/${bin._id}`}> Bin: {bin._id}</Link>
          <span className="pull-right">
            <button className="btn btn-danger"
              onClick={ () => this.onBinRemove(bin) }>
              Remove
            </button>
          </span>
        </li>
      );
    }

    );
  }
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('bins');

  return { bins: Bins.find({}).fetch() };
}, BinsList);
