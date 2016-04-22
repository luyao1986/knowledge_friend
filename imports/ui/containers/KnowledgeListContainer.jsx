import { Meteor } from 'meteor/meteor';
import { KnowledgeList } from '../../api/knowledgelist/knowledgelist';
import { createContainer } from 'meteor/react-meteor-data';
import { KnowledgeListComponent } from '../components/KnowledgeListComponent.jsx';

export default createContainer(() => {
    const knowledgelistHandle = Meteor.subscribe('knowledgelist.reminder');
    const loading = !knowledgelistHandle.ready();

    return {
        loading,
        knowledgelist: KnowledgeList.find().fetch() || [],
    };
}, KnowledgeListComponent);