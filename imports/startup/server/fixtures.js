import faker from 'faker';
import { insertKnowledge } from '../../api/knowledgelist/methods.js';
import { FeedList } from '../../api/feedlist/feedlist.js';
import { insertFeed } from '../../api/feedlist/methods.js';
import _ from 'lodash';

//startup will be executed when hot code push or when dom is ready in client side or server started.
Meteor.startup(function() {
    if (FeedList.find().count() == 0) {
        _.times(10, function () {
            insertFeed.call({category: faker.name.findName(), url: faker.internet.url()});
            insertKnowledge.call({title: faker.name.jobTitle(), description: faker.name.jobDescriptor(), url: faker.internet.url()});
        });
    }
});



