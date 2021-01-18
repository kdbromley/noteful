import { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import NotesContext from '../NotesContext';
import './NoteItem.css';


export default class NoteItem extends Component {
    static contextType = NotesContext;
    static defaultProps = {
        onDeleteNote: () => {}
    }

    deleteNote = e => {
        e.preventDefault()
        const noteId = this.props.note.id
         fetch(config.NOTES_ENDPOINT + `/${noteId}`, {
            method: 'DELETE',
            header: {
                'content-type': 'application/json'
            }
          })
          .then(response => {
            if (!response.ok)
              return response.json().then(e => Promise.reject(e));
            return response.json();
          })
          .then(() => {
              this.context.deleteNote(noteId)
          })
          .catch(err => {
            console.error(err)
          }) 
        } 

    render() {
    const note = this.props.note;
    return (
        <div className='NoteItem'>
            <h3>
                <Link to={`/note/${note.id}`}>
                    {note.name}
                </Link>
            </h3>
            <h4>{note.modified}</h4>
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