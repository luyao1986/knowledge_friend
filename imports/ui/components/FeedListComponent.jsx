import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export class FeedListComponent extends React.Component {
  constructor(props) {
    super(props);
  };
  updateState(feed) {
    this.props.updateState(feed);
  };
  render() {
    if(this.props.loading) {
      console.log("still loading feedlist");
      return <div>loading...</div>
    }
    else {
      console.log("done loading feedlist", this.props.feedlist);
      const updateState = this.props.updateState;
      let feedlist = this.props.feedlist.map(function(feed) { //inside map, you need to be very careful to use this since this here means each feed
        return <ListGroupItem key={feed._id} onClick={updateState.bind(this, feed)}> {feed.category} </ListGroupItem>
      });
      //TODO set active item
      return (
          <ListGroup>
            {feedlist}
          </ListGroup>
      );
    }
  };
}

FeedListComponent.propTypes = {
  feedlist: React.PropTypes.array,
  loading: React.PropTypes.bool,
};