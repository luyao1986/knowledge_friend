import React from 'react';

export class FeedListComponent extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    let feedlist = this.props.feedlist.map( function(feed) {
      return <li key={feed._id}>{feed.category}</li>
    });
    return (
        <ol>
          {feedlist}
        </ol>
    );
  };
}

FeedListComponent.propTypes = {
  feedlist: React.PropTypes.array,
  loading: React.PropTypes.bool,
};