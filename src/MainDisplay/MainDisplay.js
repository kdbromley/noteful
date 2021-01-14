import React, { Component } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import NotesContext from '../NotesContext';
import './MainDisplay.css'


class MainDisplay extends Component {
    static contextType = NotesContext
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        const {folderId} = this.props.match.params
        const notes = this.context.notes || {}
        function getNotes(notes=[], folderId) {
            return ((!folderId)
            ? notes
            : notes.filter(note => note.folderId === folderId) 
            )
          }
        const thisFolderNotes = getNotes(notes, folderId)

        return (
            <div className='MainDisplay'>
                <ul className='MainDisplay__list'>
                    {thisFolderNotes.map(note => 
                    <NoteItem key={note.id} note={note}/>
                    )}
                </ul>
            </div>
        )
    }
}

export default MainDisplay;