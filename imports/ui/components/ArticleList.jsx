import React from 'react';
import { Article } from './Article.jsx';

export class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    let articles = [{title: "a1"}, {title: "a2"}];
    return (
      <div>
        <Article content={articles[0]}/>
        <Article content={articles[1]}/>
      </div>
    );
  };
}
