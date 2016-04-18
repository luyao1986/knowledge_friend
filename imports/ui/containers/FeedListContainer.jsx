import { Meteor } from 'meteor/meteor';
import { FeedList } from '../../api/feedlist/feedlist.js';
import { createContainer } from 'meteor/react-meteor-data';
import { FeedListComponent } from '../components/FeedListComponent.jsx';

export default createContainer(() => {
    const feedlistHandle = Meteor.subscribe('feedlist');
    const loading = !feedlistHandle.ready();
    return {
        loading,
        feedlist: FeedList.find().fetch() || [],
    };
}, FeedListComponent);