import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class KnowledgeListCollection extends Mongo.Collection {
    insert(Knowledge, callback) {
        return super.insert(Knowledge, callback);
    }
    remove(selector, callback) {
        return super.remove(selector, callback);
    }
    update(selector, callback) {
        return super.update(selector, callback);
    }
}

export const KnowledgeList = new KnowledgeListCollection('KnowledgeList');  //define a collection/table using uppercase

KnowledgeList.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});


KnowledgeList.schema = new SimpleSchema({
    title: { type: String },
    description: { type: String },
    url: { type: String, defaultValue: null},
    reviewedAt: { type: Date, defaultValue: new Date()},    //camelCased field names
    stage: { type: Number, defaultValue: 0, max:7},
    reviewed: { type: Boolean, defaultValue: true},
    reminder: { type: Boolean, defaultValue: false},
});

KnowledgeList.attachSchema(KnowledgeList.schema);

KnowledgeList.publicFields = {
    title: 1,
    url: 1,
    description: 1,
    stage: 1,
    reviewed: 1,
    reviewedAt: 1,
    reminder: 1,
};

KnowledgeList.helpers({
    hasDone() {
        return this.stage==7 && this.reviewed;
    },
    isReminder() {
        return this.reminder;
    },
});