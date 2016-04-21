import React from 'react';
import { FeedListSideBar } from '../components/FeedListSideBar.jsx';
import { ArticleList } from '../components/ArticleList.jsx';
import { Grid, Col } from 'react-bootstrap';

export class FeedListLayout extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <Grid fluid={true}>
          <Col sm={2} md={2} visibleXsBlock={true} smHidden={true}> <FeedListSideBar /> </Col>
          <Col sm={10} md={10}> <ArticleList feedID={this.props.feedID} /> </Col>
      </Grid>
    );
  };
}
