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
    folders: []
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
    fetch(config.NOTES_ENDPOINT, {
      method: 'GET'
    })
    .then(response => {
      if(!response.ok) {
        throw new Error(response.status)
      }
      return response.json()
    })
    .then(this.loadNotes)
    .catch(err => alert(err.message));

    fetch(config.FOLDERS_ENDPOINT, {
      method: 'GET'
    })
    .then(response => {
      if(!response.ok) {
        throw new Error(response.status)
      }
      return response.json()
    })
    .then(this.loadFolders)
    .catch(err => alert(err.message))
  }

  renderNotePage() {
    return (
      <>
        <Route 
         path='/note/:noteId'
         >
           <NotePageSideBar />
           <NotePageDisplay />
         </Route>
      </>
    )
  }


  renderMainDisplay() {
    return (
      <>
      {['/', '/folder/:folderId'].map(path => (
        <Route
            exact
            key={path}
            path={path}
            component={Sidebar}
        />
      ))}

      {['/', '/folder/:folderId'].map(path => (
        <Route
            exact
            key={path}
            path={path}
            component={MainDisplay}
        />
      ))}
     </>
    )
  }
  
  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
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
