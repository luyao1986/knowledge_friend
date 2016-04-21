import React from 'react';
import { Knowledge } from './Knowledge.jsx';
import { Grid, Row } from 'react-bootstrap';

export class KnowledgeListComponent extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    let knowledgelist = this.props.knowledgelist.map( function(knowledge) {
      return <Knowledge key={knowledge._id} content={knowledge}/>
    });
    return (
        <Grid>
          <Row>
              {knowledgelist}
          </Row>
        </Grid>
    );
  };
}

KnowledgeListComponent.propTypes = {
  knowledgelist: React.PropTypes.array,
  loading: React.PropTypes.bool,
};