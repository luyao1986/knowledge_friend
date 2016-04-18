import React from 'react';

export class ApplicationLayout extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div>
        <header>
          <a href="/feedlist">Your Subscribes</a>
          <a href="/knowledge">Your Knowldege</a>
        </header>
        <div>
          {this.props.content()}
        </div>
      </div>
    );
  };
}
