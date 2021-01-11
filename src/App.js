import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NoteItem from './NoteItem/NoteItem';
import NoteList from './NoteList/NoteList';
import MainSideBar from './MainSideBar/MainSideBar';
import NotePageSideBar from './NotePageSideBar/NotePageSideBar';
import { STORE } from './dummy-store';
import './App.css';


class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    this.setState(STORE)
  }

  renderSideBar() {
    const {notes, folders} = this.state;
    const findFolder = (folders=[], folderId) =>
    folders.find(folder => folder.id === folderId);

    const findNote = (notes=[], noteId) => 
    notes.find(note => note.id === noteId);

    return (
      <>
      {['/', '/folder/:folderId'].map(path => (
        <Route exact key={path}
          path={path}
          render={routeProps => (
            <MainSideBar 
              folders={folders}
              notes={notes}
              {...routeProps}
            />
          )}
        />
      ))}
      <Route path='/note/:noteId'
        render={routeProps => {
          const {noteId} = routeProps.match.params;
          const note = findNote(notes, noteId) || {};
          const folder = findFolder(folders, note.folderId);
          return <NotePageSideBar {...routeProps} folder={folder} />;
        }}
      />
    </>
    );
  }

  renderNoteList() {
    const {notes, folders} = this.state;
    const findNote = (notes=[], noteId) => 
    notes.find(note => note.id === noteId);

    const getNotesForFolder = (notes=[], folderId) => (
      (!folderId)
      ? notes
      : notes.filter(note => note.folderId === folderId)
    )
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route exact 
            key={path}
            path={path}
            render={routeProps => {
              const {folderId} = routeProps.match.params;
              const notesForFolder = getNotesForFolder(
                notes,
                folderId
              );
              return (
                <NoteList 
                  {...routeProps}
                  notes={notesForFolder}
                />
              )
            }}
          />
        ))}
        <Route 
          path='/note/:noteId'
          render={routeProps => {
            const {noteId} = routeProps.match.params;
            const note = findNote(notes, noteId)
            return <NoteItem {...routeProps} note={note} />
          }}
        />
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <nav className='App__nav'>{this.renderSideBar()}</nav>
          <header className='App__header'>
          <h1>
            <Link to='/'>Noteful</Link>{' '}
          </h1>
        </header>
        <main className='App__main'>{this.renderNoteList()}</main>
      </div>
    );
  }
}

export default App;
