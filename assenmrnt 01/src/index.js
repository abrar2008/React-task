import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';

function hello () {
  console.log("ibrar")
}



class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div className = "body">
      <div className ="header" >
      {hello}

      </div>
      <div className = "menu" >
      {hello}
      </div>



      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
