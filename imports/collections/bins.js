import {Mongo} from 'meteor/mongo';

Meteor.methods({
  // we use 'function' instead of arrow function because we want 'this' to be bound dynamically
  // so we have access to this.userId
  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      SharedWidth: [],
      ownerId: this.userId //this.userId is available across the whole app in Meteor when using Meteor native autentification functionality
    });
  },
  'bins.remove': function(bin) {
    // remove the bin send to the function from the collection
    return Bins.remove(bin);
  }
});

export const Bins = new Mongo.Collection('bins');
