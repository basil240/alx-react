import React from 'react';
import './App.css'; 

function App() {
  return (
    
  );
}

export default App;

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {{<div className="App">
    <header className="App-header">
      <img src="/holberton-logo.png" alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </header>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <div className="App-body">
<p>Login to access the full dashboard</p>
<div className="form-group">
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" />
</div>
<div className="form-group">
  <label htmlFor="password">Password:</label>
  <input type="password" id="password" name="password" />
</div>
<button type="button">OK</button>
</div>
    </div>
    <footer className="App-footer">
      <p>Copyright 2020 - Holberton School</p>
    </footer>
  </div>
    };
  }

  render() {

    return (
      <div>
        {
        it('App renders a div with the class App-footer', () => {
  const wrapper = shallow(<App />);
  const appFooter = wrapper.find('.App-footer');
  expect(appFooter.exists()).toBe(true);
}
      </div>
    );
  }
}

export default App;