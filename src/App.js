import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NoteList from './NoteList/NoteList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Noteful</h1>
      </header>
      <main>
        <NoteList />
      </main>
    </div>
  );
}

export default App;
