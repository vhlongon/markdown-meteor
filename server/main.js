import { Meteor } from 'meteor/meteor';
import {Bins} from '../imports/collections/bins';

Meteor.startup(() => {
  // also use 'function' instead of fat arrow because 'this' will be bound to Meteor so we can get this.userId
  Meteor.publish('bins', function() {
    return Bins.find({ownerId: this.userId});
  });
});
