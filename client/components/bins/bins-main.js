import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import BinsEditor from './bins-editor';
import BinsViewer from './bins-viewer';
import BinsShare from './bins-share';

class BinsMain extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.bin) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div>
          <BinsEditor bin={this.props.bin} />
          <BinsViewer bin={this.props.bin}  />
          <BinsShare bin={this.props.bin}  />
        </div>
      );
    }
  }
}

// the createContainer function always receive any props passed to the component as a first argument
export default createContainer( (props) => {
  // binId is the value passed from the Router (props.params.binId)
  const {binId} = props.params;
  // Subscribe to the collection in case the user type the direct url for the bin
  Meteor.subscribe('bins');
  return { bin:  Bins.findOne(binId) };
}, BinsMain);
