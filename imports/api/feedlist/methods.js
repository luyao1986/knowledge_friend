import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { FeedList } from './feedlist.js';

export const insertFeed = new ValidatedMethod({
  name: 'feedlist.insert',
  validate: new SimpleSchema({
    category: { type: String },
    url: { type: String },
  }).validator(),
  run({category, url}) {
    const feed = { category, url, createdAt:new Date()};
    return FeedList.insert(feed);
  },
});

const LIST_ID_ONLY = new SimpleSchema({
  listId: { type: String },
}).validator();

export const removeFeed = new ValidatedMethod({
  name: 'feedlist.remove',
  validate: LIST_ID_ONLY,
  run({ listId }) {
    FeedList.remove(listId);
  },
});
