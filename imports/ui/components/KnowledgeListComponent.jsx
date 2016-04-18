import React from 'react';
import { Knowledge } from './Knowledge.jsx';

export class KnowledgeListComponent extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    let knowledgelist = this.props.knowledgelist.map( function(knowledge) {
      return <Knowledge key={knowledge._id} content={knowledge}/>
    });
    return (
        <ol>
          {knowledgelist}
        </ol>
    );
  };
}

KnowledgeListComponent.propTypes = {
  knowledgelist: React.PropTypes.array,
  loading: React.PropTypes.bool,
};