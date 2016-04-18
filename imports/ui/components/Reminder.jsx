import React from 'react';

export class Reminder extends React.Component {
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
