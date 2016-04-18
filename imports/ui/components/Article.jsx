import React from 'react';

export class Article extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <li>{this.props.content.title}</li>
    );
  };
}
