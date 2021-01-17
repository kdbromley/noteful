import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import config from './config';
import NotesContext from './NotesContext';
import MainDisplay from './MainDisplay/MainDisplay';
import NotePageDisplay from './NotePageDisplay/NotePageDisplay';
import NotePageSidebar from './NotePageSidebar/NotePageSidebar';
import Sidebar from './Sidebar/SideBar';
import NotePageSideBar from './NotePageSidebar/NotePageSidebar';


class App extends Component {
  state = {
    notes: [],
    folders: [],
    currentFolder: {},
    currentNote: {}
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

  setCurrentFolder = folder => {
    this.setState({ currentFolder: folder })
  }

  setCurrentNote = note => {
    this.setState({ currentNote: note })
  }

  deleteNote = (noteId) => { 
    const updatedNotes = this.state.notes.filter(note => 
      !note.id === noteId
    )
    this.setState({updatedNotes}) }

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

  handleDeleteNote =  noteId => {
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
  
  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      currentFolder: this.state.currentFolder,
      currentNote: this.state.currentNote
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
          {this.renderMainDisplay()}
          {this.renderNotePage()}
        </main>
        </NotesContext.Provider>
      </div>
    );
  }
}

export default App;
