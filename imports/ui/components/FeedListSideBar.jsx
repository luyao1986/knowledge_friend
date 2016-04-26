import React from 'react';
import FeedListComponent from '../containers/FeedListContainer.jsx';
import { insertFeed } from '../../api/feedlist/methods.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import moment from 'moment';

export class FeedListSideBar extends React.Component {
  constructor(props) {
    super(props);
  };
  callFeedAPI(url, lastPublished) {
    //TODO maybe can try https://developers.google.com/feed/
    console.log("try to get articles of feed:" + url);
    $.ajax({
      type: "GET",
      url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q="+url,
      dataType: "jsonp",
      success: function( data ) {
        if ( data['responseStatus'] !== 200 ) {
          console.log( "Could not fetch "+url );
        } else {
          var articles = data['responseData']['feed']['entries'];
          for ( var j = 0; j < articles.length; j++ ) {
            if ( moment(articles[j]['publishedDate'], 'ddd, DD MMM YYYY HH:mm:ss ZZ').isSameOrAfter(lastPublished) ) {
              console.log("find article: " + articles[j]['title']);
            }
          }
        }
      }
    });
  };
  onSubmit(e) {
    e.preventDefault();
    let url = `${this.refs.feedinput.value}/feed.xml`;

    this.callFeedAPI(url, 0);
    //
    // console.log("insert new feed: ", newfeed);
    // let retID = insertFeed.call({category:newfeed, url:"http://test1.com"});
    // this.refs.feedinput.value = "";
    // this.props.updateState(retID);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="url" placeholder="input feed url" ref="feedinput"/>
        </form>
        <FeedListComponent updateState={this.props.updateState} />
      </div>
    );
  };
}
