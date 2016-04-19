import { SyncedCron } from 'meteor/percolate:synced-cron';
import { KnowledgeList } from '../../api/knowledgelist/knowledgelist.js';
import { setKnowledgeReminder } from '../../api/knowledgelist/methods.js';
import moment from 'moment';

SyncedCron.add({
    name: 'set KnowledgeList.reminder to true when time is up',
    schedule: function(parser) {
        let interval = Meteor.settings.cronInterval || "1 hours";
        console.log(`cronjob runs every ${interval}`);
        return parser.text(`every ${interval}`);
    },
    job: function() {
        console.log("crontab job is running");
        KnowledgeList.find().forEach(function(knowledge) {
            if(!knowledge.isReminder()) {
                const time_passed = moment().diff(knowledge.reviewedAt, 'seconds');
                if(time_passed > 10) {
                    setKnowledgeReminder.call(knowledge);
                }
            }
        });
        return true;
    }
});

Meteor.startup(function(){
    console.log(Meteor.settings.cronInterval);
    SyncedCron.start();
});