import { Meteor } from 'meteor/meteor';
import { FeedList } from '../feedlist.js';

Meteor.publish('feedlist', function feedlist() {
  return FeedList.find({}, {
    fields: FeedList.publicFields,
  });
});
