import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { KnowledgeList } from './knowledgelist.js';

export const insertKnowledge = new ValidatedMethod({
    name: 'knowledgelist.insert',
    validate: null,
    run(knowledge) {
        return KnowledgeList.insert(knowledge);
    },
});
