import { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from '../config';
import NotesContext from '../NotesContext';
import moment from 'moment';
import './NoteItem.css';


export default class NoteItem extends Component {
    static contextType = NotesContext;
    static defaultProps = {
        onDeleteNote: () => {},
        note: {}
    }

    deleteNote = e => {
        e.preventDefault()
        const noteId = this.props.note.id
         fetch(config.NOTES_ENDPOINT + `/${noteId}`, {
            method: 'DELETE'
          })
          .then(response => {
            if (!response.ok) {
              return response.json().then(e => Promise.reject(e))
            }
          })
          .then(() => {
              this.context.deleteNote(noteId)
              this.props.deleteNote(noteId)
          })
          .catch(err => {
            console.error(err)
          }) 
        } 

    render() {
    const { note } = this.props || {};
    const formattedDate = moment(note.date_created).format('M/D/YYYY')
    return (
        <div className='NoteItem'>
            <h3>
                <Link to={`/note/${note.id}`}>
                    {note.note_title}
                </Link>
            </h3>
            <h4>{formattedDate}</h4>
            <button 
            className='NoteItem__del-button'
            type='delete'
            onClick={this.deleteNote}>
                Delete
            </button>
        </div>
    )
  }
}

NoteItem.propsType = {
  note: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    note_title: PropTypes.string.isRequired,
    date_created: PropTypes.string.isRequired,
    folder: PropTypes.string.isRequired,
    content: PropTypes.string
  })).isRequired,
  deleteNote: PropTypes.func
}