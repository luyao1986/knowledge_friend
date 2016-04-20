import { Meteor } from 'meteor/meteor';
import { KnowledgeList } from '../knowledgelist.js';

Meteor.publish('knowledgelist.all', function feedlist() {
    return KnowledgeList.find({}, {
        fields: KnowledgeList.publicFields,
        sort: { status:1, stage:-1, updatedAt:1 },
    });
});
