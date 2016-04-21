import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export class FeedListComponent extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    let feedlist = this.props.feedlist.map( function(feed) {
      return <ListGroupItem key={feed._id} href={`/feedlist/${feed.category}`} onClick={console.log("call feed api")}>{feed.category}</ListGroupItem>
    });
    return (
        <ListGroup>
          {feedlist}
        </ListGroup>
    );
  };
}

FeedListComponent.propTypes = {
  feedlist: React.PropTypes.array,
  loading: React.PropTypes.bool,
};