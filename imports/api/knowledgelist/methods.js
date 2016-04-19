import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { KnowledgeList } from './knowledgelist.js';

export const insertKnowledge = new ValidatedMethod({
    name: 'knowledgelist.insert',
    validate: null,
    run(knowledge) {
        console.log("add knowledge:", knowledge);
        return KnowledgeList.insert(knowledge);
    },
});

export const setKnowledgeReviewed = new ValidatedMethod({
    name: 'knowledgelist.setReviewed',
    validate: null,
    run(knowledge) {
        console.log("update knowledge reviewed of:", knowledge);
        let updates = {reviewedAt:new Date(), reviewed:true, reminder:false};
        return KnowledgeList.update({_id: knowledge._id}, {$set: updates});
    },
});

export const setKnowledgeReminder = new ValidatedMethod({
    name: 'knowledgelist.setReminder',
    validate: null,
    run(knowledge) {
        console.log("update knowledge reminder of:", knowledge);
        let updates = {reviewed:false, reminder:true};
        return KnowledgeList.update({_id: knowledge._id}, {$set: updates});
    },
});