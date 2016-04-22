import React from 'react';
import FeedListComponent from '../containers/FeedListContainer.jsx';
import { insertFeed } from '../../api/feedlist/methods.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

export class FeedListSideBar extends React.Component {
  constructor(props) {
    super(props);
  };
  onSubmit(e) {
    e.preventDefault();
    let newfeed = this.refs.feedinput.value;
    console.log("insert new feed: ", newfeed);
    let retID = insertFeed.call({category:newfeed, url:"http://test1.com"});
    this.refs.feedinput.value = "";
    this.props.updateState(retID);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" placeholder="new feed here" ref="feedinput"/>
        </form>
        <FeedListComponent updateState={this.props.updateState} />
      </div>
    );
  };
}
