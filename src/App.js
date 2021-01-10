import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { STORE } from './dummy-store'
import NoteList from './NoteList/NoteList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Noteful</h1>
        </header>
        <main>
          <>
            <Route path='/' render={() =>
              <NoteList store={STORE} /> }
            />
          </>
        </main>
      </div>
    );
  }
}

export default App;
