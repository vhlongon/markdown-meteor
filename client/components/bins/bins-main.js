import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import BinsEditor from './bins-editor';

class BinsMain extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BinsEditor bin={this.props.bin}></BinsEditor>
      </div>
    );
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
