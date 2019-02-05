import * as React from 'react';
import './App.css';

import Home from './Containers/Home'

class App extends React.Component {
  public render() {
    return (
      <div>
          <Home textToShow="Hello World" showIt={false}  />
      </div>
    );
  }
}

export default App;
