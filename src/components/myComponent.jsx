import React, { Component } from 'react';

export default class MyComponent extends Component {
  render() {
    const { myMessage } = this.props;

    return (
      <div>
        <h2>{myMessage}</h2>
      </div>
    );
  }
}
