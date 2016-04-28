import React from 'react';
import FeedListComponent from '../containers/FeedListContainer.jsx';
import { insertFeed } from '../../api/feedlist/methods.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { callFeedAPI } from '../../api/googlefeedapi/api.js';

export class FeedListSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.callback.bind(this);
  };

  callback(data) {
    let newfeed = {category:data['responseData'].title, url:data['responseData'].url};
    console.log("insert new feed: ", newfeed);
    insertFeed.call(newfeed);
    this.props.updateState(newfeed);
  };

  addNewFeed(e) {
    e.preventDefault();
    let url = `${this.refs.feedinput.value}/feed.xml`;
    callFeedAPI(url, 0, this.callback);
    this.refs.feedinput.value = "";
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addNewFeed.bind(this)}>
          <input type="url" placeholder="input feed url" ref="feedinput"/>
        </form>
        <FeedListComponent updateState={this.props.updateState} />
      </div>
    );
  };
}
