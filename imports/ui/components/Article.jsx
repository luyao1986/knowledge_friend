import React from 'react';
import { insertKnowledge } from '../../api/knowledgelist/methods.js';
// import { Panel, Button, ListGroupItem } from 'react-bootstrap';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export class Article extends React.Component {
  constructor(props) {
    super(props);
  };
  addKnowledge(article) {
    console.log(`add ${article.title} to knowledge`);
    insertKnowledge.call(article);
  };

  render() {
      const tooltip = (
          <Tooltip id="addKnowledge">put this item into your knowledge list.</Tooltip>
      );
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title pull-left"> {this.props.content.title} </h3>
                <OverlayTrigger placement="left" overlay={tooltip}>
                    <button onClick={this.addKnowledge.bind(this, this.props.content)} className="btn btn-info pull-right"><strong>+</strong></button>
                </OverlayTrigger>
                <div className="clearfix"></div>
            </div>
            <div className="panel-body">{this.props.content.description}</div>
        </div>
    );
  };
}
