import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = {
    count: 10
  };

  multiplyBy2 = () => {
    const currentVal = this.state.count;
    this.setState({ count: currentVal * 2 });
  }

  divideBy2 = () => {
    const currentVal = this.state.count;
    this.setState({ count: currentVal / 2 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.multiplyBy2}>X/2</button>
        <button onClick={this.divideBy2}>/2</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));