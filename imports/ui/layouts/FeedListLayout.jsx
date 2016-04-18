import React from 'react';
import { FeedListSideBar } from '../components/FeedListSideBar.jsx';
import { ArticleList } from '../components/ArticleList.jsx';

export class FeedListLayout extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div>
        <FeedListSideBar />
        <ArticleList />
      </div>
    );
  };
}
