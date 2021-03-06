import { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteItem from '../NoteItem/NoteItem';
import NotesContext from '../NotesContext';
import {findNote} from '../helperFunc';
import './NotePageDisplay.css';
import  PropTypes  from 'prop-types';

export default class NotePageDisplay extends Component {
  static contextType = NotesContext;
  static defaultProps = {
    history: {
      goBack: () => { }
    },
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
   const note = findNote(notes, noteId) || { content: '' }
    return (
      <section className='NotePage'>
          <NoteItem note={note} key={note.id} deleteNote={this.handleDeleteNote}/>
        <div className='Note__content'>
            <p>{note.content}</p>
        </div>
        <button type='button'
         className='Note__edit-note-button'>
          <Link to='/edit-note'>
              Edit Note
          </Link>
        </button>
      </section>
    )            
  }
}

NotePageDisplay.propTypes = { 
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.shape({
      isExact: PropTypes.bool,
      params: PropTypes.object,
      path: PropTypes.string,
      url: PropTypes.string
  })
}


