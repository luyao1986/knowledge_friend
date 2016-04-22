import React from 'react';
import { FeedListSideBar } from '../components/FeedListSideBar.jsx';
import { ArticleList } from '../components/ArticleList.jsx';
import { Grid, Col } from 'react-bootstrap';

export class SubscribesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // define this.state in constructor
      feed: null  //TODO set feed by localStorage
    }
    this.updateState = this.updateState.bind(this);
  };
  updateState(feed) {
    console.log("updateState of",  feed);
    this.setState({feed});
  };
  render() {
    return (
      <Grid fluid={true}>
          <Col sm={2} md={2} visibleXsBlock={true} smHidden={true}> <FeedListSideBar updateState={this.updateState}/> </Col>
          <Col sm={10} md={10}> <ArticleList feed={this.state.feed} /> </Col>
      </Grid>
    );
  };
}
