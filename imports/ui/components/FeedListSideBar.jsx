import React from 'react';
import { FeedList } from './FeedList.jsx';

export class FeedListSideBar extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="new feed here"/>
        </form>
        <FeedList />
      </div>
    );
  };
}
