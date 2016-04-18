import React from 'react';

export class ApplicationLayout extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div>
        <header>
          this is header
        </header>
        <div>
          {this.props.content()}
        </div>
      </div>
    );
  };
}
