import React from 'react';
import { Article } from './Article.jsx';
import { ListGroup } from 'react-bootstrap';
import { callFeedAPI } from '../../api/googlefeedapi/api.js';
import moment from 'moment';

export class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // define this.state in constructor
      articles: []
    }
    this.updateArticles.bind(this);
  };

  updateArticles(data) {
    let lastPublished = 0; //this.props.feed.createdAt;
    var articles = data['responseData']['feed']['entries'];
    let newarticles = articles.filter((article)=>{
      return moment(article['publishedDate'], 'ddd, DD MMM YYYY HH:mm:ss ZZ').isSameOrAfter(lastPublished);
    });
    this.setState({articles: newarticles});
  };

  render() {
    console.log("ArticleList render ", this.props.feed);
    if(this.props.feed === null) {
      return <div>choose feed in sidebar...</div>
    }
    callFeedAPI(this.props.feed.url, 0, this.updateArticles);
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
