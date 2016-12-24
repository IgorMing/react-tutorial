import React, { Component } from 'react';
import { render } from 'react-dom';

import MyComponent from './components/myComponent';

class App extends Component {
  constructor() {
    super();

    this.state = {
      msg: 'Igor!!!!!'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      msg: 'Igor Ming de Mesquita! :D'
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <MyComponent myMessage={this.state.msg} />
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

render(
  <App />,
  document.querySelector('#app')
);
