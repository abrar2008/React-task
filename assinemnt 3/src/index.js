import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start 
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
