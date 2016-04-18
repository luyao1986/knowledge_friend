import React from 'react';

export class FeedList extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div>
        <ol>
          <li>feed 1</li>
          <li>feed 2</li>
        </ol>
      </div>
    );
  };
}
