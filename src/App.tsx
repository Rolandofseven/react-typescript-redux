import * as React from 'react';
import './App.css';

import Home from './Containers/Home'
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    const x = "hell";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React- {x}</h1>
        </header>
        <p className="App-intro">
          <Home textToShow="Hello World" showIt={false}  />
        </p>
      </div>
    );
  }
}

export default App;
