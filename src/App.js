import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NoteItem from './NoteItem/NoteItem';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Noteful</h1>
      </header>
      <main>
        <NoteItem />
      </main>
    </div>
  );
}

export default App;
