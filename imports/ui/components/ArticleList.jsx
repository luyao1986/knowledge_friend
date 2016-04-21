import React from 'react';
import { Article } from './Article.jsx';
import { ListGroup } from 'react-bootstrap';
import faker from 'faker';

export class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // define this.state in constructor
      articles: []
    }
  };

  componentDidMount() {
    this.serverRequest = $.get(this.props.feedID, function (result) {
      this.setState({
        articles: [{title: `${faker.name.jobTitle()}:${this.props.feedID}`, description: faker.name.jobDescriptor(), url: faker.internet.url()}]
      });
    }.bind(this));
    console.log("componentDidMount");
  };
  componentWillUnmount() {
    console.log("componentWillUnmount");
    this.serverRequest.abort();
  };
  //TODO need to call ws to get real data

  render() {
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
