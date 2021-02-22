import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import config from './config';
import NotesContext from './NotesContext';
import MainDisplay from './MainDisplay/MainDisplay';
import NotePageDisplay from './NotePageDisplay/NotePageDisplay';
import NotePageSidebar from './NotePageSideBar/NotePageSideBar';
import Sidebar from './Sidebar/SideBar';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import ErrorBoundary from './ErrorBoundary';
import './App.css';


class App extends Component {
  state = {
    notes: [],
    folders: [],
    error: null
  }

  loadNotes = notes => {
    this.setState({
      notes: notes
    })
  }

  loadFolders = folders => {
    this.setState({
      folders: folders
    })
  }


  componentDidMount() {
    Promise.all([
    fetch(config.NOTES_ENDPOINT),
    fetch(config.FOLDERS_ENDPOINT)
    ])
    .then(([notesResponse, foldersResponse]) => {
      if(!notesResponse.ok) 
        return notesResponse.json().then(e => Promise.reject(e));
      if(!foldersResponse.ok)
        return foldersResponse.json().then(e => Promise.reject(e));
    
      return Promise.all([notesResponse.json(), foldersResponse.json()]);
    })
    .then(([notes, folders]) => {
      this.loadNotes(notes);
      this.loadFolders(folders);
    })
    .catch(err => {
      console.error({err})
    });
  }

  handleAddNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }

  handleAddFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    })
  }


  renderNotePage() {
    return (
      <>
          <Route
            exact
            path='/note/:noteId'
            component={NotePageSidebar}
          />
          <Route
            exact
            path='/note/:noteId'
            component={NotePageDisplay}
          />
      </>
    )
  }


  renderMainDisplay() {
    return (
      <>
        <Route
            exact
            path='/'
            component={Sidebar}
        />
        <Route
            exact
            path='/'
            component={MainDisplay}
        />

        <Route
            exact
            path='/folder/:folderId'
            component={Sidebar}
        />
        <Route
            exact
            path='/folder/:folderId'
            component={MainDisplay}
        />
      </>
    )
  }

  renderAddRoutes() {
    return(
      <>
        <Route
          path='/add-folder'
          component={AddFolder}
        />
        <Route
         path='/add-note'
         component={AddNote}
        />
      </>
    )
  }
  
  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      addNote: this.handleAddNote,
      addFolder: this.handleAddFolder,
      deleteNote: this.handleDeleteNote
    }
    return (
      <div className="App">
        <NotesContext.Provider value={value}>
        <header className='App__header'>
          <h1>
            <Link to='/'>Noteful</Link>
          </h1>
        </header>
        <main className='App__main'>
          <ErrorBoundary>
          {this.renderMainDisplay()}
          </ErrorBoundary>
          <ErrorBoundary>
          {this.renderNotePage()}
          </ErrorBoundary>
          <ErrorBoundary>
          {this.renderAddRoutes()}
          </ErrorBoundary>
        </main>
        </NotesContext.Provider>
      </div>
    );
  }
}

export default App;
