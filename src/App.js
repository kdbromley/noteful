import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import dummy from './dummy-store';
import MainDisplay from './MainDisplay/MainDisplay';
import Sidebar from './Sidebar/SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='App__header'>
          <h1>Noteful</h1>
        </header>
        <main className='App__main'>
          <Sidebar />
          <MainDisplay />
        </main>
      </div>
    );
  }
}

export default App;
