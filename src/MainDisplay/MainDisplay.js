import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteItem from '../NoteItem/NoteItem';
import NotesContext from '../NotesContext';
import {getNotes} from '../helperFunc';
import PropTypes from 'prop-types';
import './MainDisplay.css';




class MainDisplay extends Component {
    static contextType = NotesContext;
    static defaultProps = {
        match: {
            params: {}
        }
    }

    onDeleteNote = () => {
        this.props.history.push(`/`)
      }

    render() {
        const { folderId } = this.props.match.params
        const { notes= [] } = this.context 
        const thisFolderNotes = getNotes(notes, folderId)

        return (
            <div className='MainDisplay'>
                <section className='MainDisplay__list'>
                    {thisFolderNotes.map(note => 
                       <NoteItem key={note.id} note={note} deleteNote={this.onDeleteNote}/>
                    )}
                </section>
                <button type='button'
                 className='MainDisplay__add-note'>
                    <Link to='/add-note'>
                        Add Note
                    </Link>
                </button>
            </div>
        )
    }
}

export default MainDisplay;

MainDisplay.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.shape({
        isExact: PropTypes.bool,
        params: PropTypes.object,
        path: PropTypes.string,
        url: PropTypes.string
    })
  }