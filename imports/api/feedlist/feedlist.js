import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class FeedListCollection extends Mongo.Collection {
  insert(list, callback) {
    return super.insert(list, callback);
  }
  remove(selector, callback) {
    return super.remove(selector, callback);
  }
}

export const FeedList = new FeedListCollection('FeedList');

FeedList.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});


FeedList.schema = new SimpleSchema({
  category: { type: String },
  url: { type: String},
  createdAt: { type: Date, denyUpdate: true },
});

FeedList.attachSchema(FeedList.schema);

FeedList.publicFields = {
  category: 1,
  url: 1,
  createdAt: 1,
};
