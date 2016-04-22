import React from 'react';
import { Article } from './Article.jsx';
import { ListGroup } from 'react-bootstrap';
import faker from 'faker';

export class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // define this.state in constructor
      articles: [{title: `${faker.name.jobTitle()}:${this.props.feed}`, description: faker.name.jobDescriptor(), url: faker.internet.url()}],
      feed: this.props.feed,
    }
  };
  //TODO construtor can not be called when we use different props, so bug above
  //TODO need to call ws to get real data

  render() {
    console.log("ArticleList render ", this.props.feed);
    let articleList = this.state.articles.map(function(article) {
      return <Article key={article.title} content={article}/>;
    });
    return (
      <ListGroup>
        {articleList}
      </ListGroup>
    );
  };
}
