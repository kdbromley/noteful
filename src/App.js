import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import {STORE as dummy} from './dummy-store';
import MainDisplay from './MainDisplay/MainDisplay';
import Sidebar from './Sidebar/SideBar';

class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    this.setState(dummy)
  }

  render() {
    const {notes, folders} = this.state;
    return (
      <div className="App">
        <header className='App__header'>
          <h1>Noteful</h1>
        </header>
        <main className='App__main'>
          <Route exact 
           path='/'
           render={(routeProps) =>
            <Sidebar folders={folders} notes={notes}
             {...routeProps} /> 
           }
          />
          <Route exact
           path='/folder/:folderId'
           render={(routeProps) =>
            <Sidebar folders={folders} notes={notes}
             {...routeProps} /> 
           } 
          />
        {/* </main>  <Route path='/folder/:folderId'>
            <Sidebar folder
          </Route>
          <Sidebar folders={this.state.folders}/>
          <MainDisplay notes={this.state.notes}/>
    */}
        </main>
      </div>
    );
  }
}

export default App;
