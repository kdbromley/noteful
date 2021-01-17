import { Component } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import NotesContext from '../NotesContext';
import {findNote} from '../helperFunc';
import './NotePageDisplay.css';

export default class NotePageDisplay extends Component {
  static contextType = NotesContext;
  static defaultProps = {
    match: {
        params: {}
    }
}

  handleDeleteNote = noteId => {
    this.props.history.push('/')
  }
  render() {
  const { noteId } = this.props.match.params
  const  { notes= [] } = this.context
  const note = findNote(notes, noteId) || {content: '' }
    return (
      <section className='NotePage'>
          <NoteItem note={note} key={note.id} onDeleteNot={this.handleDeleteNote}/>
        <div className='Note__content'>
            <p>{note.content}</p>
        </div>
      </section>
      )            
  }
}

