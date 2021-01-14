import { Component } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import NotesContext from '../NotesContext';
import './NotePageDisplay.css';

export default class NotePageDisplay extends Component {
  static contextType = NotesContext;
  static defaultProps = {
    match: {
        params: {}
    }
}
  render() {
  const {noteId} = this.props.match.params
  const notes = this.context.notes
  console.log(notes)
  function findNote(notes=[], noteId) {
    return notes.find(note => note.id === noteId)
  }
  const note = findNote(notes, noteId);
  //console.log(note)
    return (
      <section key='i' className='NotePage'>
        <article className='Note__card'>
        </article>
        <article className='Note__content'>
            <p></p>
        </article>
      </section>
      )            
  }
}

