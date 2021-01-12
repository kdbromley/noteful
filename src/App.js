import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import {STORE as dummy} from './dummy-store';
import MainDisplay from './MainDisplay/MainDisplay';
import NotePageDisplay from './NotePageDisplay/NotePageDisplay';
import NotePageSidebar from './NotePageSidebar/NotePageSidebar';
import Sidebar from './Sidebar/SideBar';

class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    this.setState(dummy)
  }

  renderNotePage() {
    const {notes, folders} = this.state;
    function findNote(notes=[], noteId) {
      return notes.find(note => note.id === noteId)
    }
    function findFolder(folders=[], folderId) {
      return folders.find(folder => folder.id === folderId)
    }

    return (
      <>
        <Route 
         path='/note/:noteId'
         render={(routeProps) => {
           const noteId =  routeProps.match.params.noteId;
           const note = findNote(notes, noteId);
           const folderId = note.folderId;
           const folder = findFolder(folders, folderId)
          return(
         <> 
          <NotePageSidebar  folder={folder} 
          {...routeProps}/>
          <NotePageDisplay note={note} 
          {...routeProps}/>
         </>
          )
         }}
        />
      </>
    )
  }


  renderMainDisplay() {
    const {notes, folders} = this.state;
    function getNotes(notes=[], folderId) {
      return ((!folderId)
      ? notes
      : notes.filter(note => note.folderId === folderId) 
      )
    }

    return (
      <>
      <Route exact 
      path='/'
      render={(routeProps) =>
       <>
        <Sidebar folders={folders} notes={notes}
         {...routeProps} /> 
        <MainDisplay folders={folders} notes={notes} />
        </>
      }
     />
     <Route exact
      path='/folder/:folderId'
      render={(routeProps) => {
        const folderId = routeProps.match.params.folderId
        const filteredNotes = getNotes(notes, folderId)
        return(
         <>
          <Sidebar folders={folders} notes={notes}
          {...routeProps} /> 
          <MainDisplay folders={folders} notes={filteredNotes} 
          {...routeProps} />
         </>
        )
       }
      } 
     />
     </>
    )
  }
  
  render() {
    return (
      <div className="App">
        <header className='App__header'>
          <h1>
            <Link to='/'>Noteful</Link>
          </h1>
        </header>
        <main className='App__main'>
          {this.renderMainDisplay()}
          {this.renderNotePage()}
        </main>
      </div>
    );
  }
}

export default App;
