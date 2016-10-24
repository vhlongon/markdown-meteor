import {Mongo} from 'meteor/mongo';

Meteor.methods({
  // we use 'function' instead of arrow function because we want 'this' to be bound dynamically
  // so we have access to this.userId
  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId //this.userId is available across the whole app in Meteor when using Meteor native autentification functionality
    });
  },

  'bins.remove': function(bin) {
    // remove the bin send to the function from the collection
    return Bins.remove(bin);
  },

  'bins.update': function(bin, newContent) {
    // $set is a mongoDb modifier which we used to update a specific item on the colletion.
    // first we pass the _id of the bin item then we use $set to overwrite the content property
    //with the new content sent from your component on change
    return Bins.update(bin._id, {$set: {content: newContent }});
  },

  'bins.share': function(bin, email) {
    // the update a record on the collection we use the MongoDb modifier $push
    // because we dont want to reset the whole entry as above with $set, but only the 'SharedWith' property
    // SharedWith is expected to be an array
    return Bins.update(bin._id, {$push: {sharedWith: email} });
  }

});

export const Bins = new Mongo.Collection('bins');
