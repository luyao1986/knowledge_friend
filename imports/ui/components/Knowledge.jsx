import React from 'react';

export class Knowledge extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <li>
        {this.props.content.title}
      </li>
    );
  };
}
