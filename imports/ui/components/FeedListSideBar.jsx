import React from 'react';
import FeedListComponent from '../containers/FeedListContainer.jsx';
import { insertFeed } from '../../api/feedlist/methods.js';

export class FeedListSideBar extends React.Component {
  constructor(props) {
    super(props);
  };
  onSubmit(e) {
    e.preventDefault();
    let newfeed = this.refs.feedinput.value;
    console.log("insert new feed: ", newfeed);
    insertFeed.call({category:newfeed, url:"http://test1.com"});
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" placeholder="new feed here" ref="feedinput"/>
        </form>
        <FeedListComponent />
      </div>
    );
  };
}
