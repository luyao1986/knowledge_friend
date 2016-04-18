import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class KnowledgeListCollection extends Mongo.Collection {
    insert(Knowledge, callback) {
        return super.insert(Knowledge, callback);
    }
    remove(selector, callback) {
        return super.remove(selector, callback);
    }
}

export const KnowledgeList = new KnowledgeListCollection('knowledgelist');

KnowledgeList.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});


KnowledgeList.schema = new SimpleSchema({
    title: { type: String },
    description: { type: String },
    url: { type: String, defaultValue: null},
    updatedAt: { type: Date, defaultValue: new Date()},
    stage: { type: Number, defaultValue: 0, max:7},
    status: { type: Boolean, defaultValue: true},
});

KnowledgeList.attachSchema(KnowledgeList.schema);

KnowledgeList.publicFields = {
    title: 1,
    url: 1,
    description: 1,
    stage: 1,
    status: 1,
    updatedAt: 1,
};

KnowledgeList.helpers({
    hasDone() {
        return this.stage==7 && this.status;
    },
    isReminder() {
        return this.status;
    },
});