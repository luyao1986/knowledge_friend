import React from 'react';
import { insertKnowledge } from '../../api/knowledgelist/methods.js';

export class Article extends React.Component {
  constructor(props) {
    super(props);
  };
  addKnowledge(article) {
    console.log(`add ${article.title} to knowledge`);
    insertKnowledge.call(article);
  };
  render() {
    return (
      <div>
        <li >{this.props.content.title}</li>
        <button type="button" onClick={this.addKnowledge.bind(this, this.props.content)}>put into knowledge</button>
      </div>
    );
  };
}
