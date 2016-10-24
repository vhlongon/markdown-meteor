import { Meteor } from 'meteor/meteor';
import {Bins} from '../imports/collections/bins';

Meteor.startup(() => {
  // also use 'function' instead of fat arrow because 'this' will be bound to Meteor so we can get this.userId
  Meteor.publish('bins', function() {
    return Bins.find({ownerId: this.userId});
  });

  Meteor.publish('sharedBins', function() {
    // we have only access to the user id, so first we need to check if this email exist on your collection
    const user = Meteor.users.findOne(this.userId);

    if(!user) {
      return;
    }

    // this make sure we make only possible to add 1 email address per user, we only return the first email
    // register to a user
    const email = user.emails[0].address;

    // here we use a more complex query with mongoDb modifiers, first we look on Bins
    // to the property called SharedWith, which is expected to be an array,
    // then $elemMatch true to match the property with the email variable above
    // wuth another additional modifier, $eq, which instead for equals to.
    // {$eq: email} is called a subquery
    return Bins.find({
      sharedWith: {$elemMatch: {$eq: email}}
    });
  });
});
