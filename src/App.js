import React, { Component } from 'react';
import './App.css';
import MapContainer from './containers/MapContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pather</h2>
        </div>
        <div className='App-body'>
          <MapContainer/>
        </div>
      </div>
    );
  }
}

export default App;
