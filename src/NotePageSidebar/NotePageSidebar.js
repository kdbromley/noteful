import { Component } from 'react';
import { Link } from 'react-router-dom';
import NotesContext from '../NotesContext';
import './NotePageSidebar.css';

function findNote(notes=[], noteId) {
    return notes.find(note => note.id === noteId)
}
function findFolder(folders, folderId) {
    return folders.find(folder => folder.id === folderId)
}

export default class NotePageSideBar extends Component {
    static contextType = NotesContext;
    static defaultProps= {
        history: {
            goBack: () => { }
        },
        match: {
            params: {}
        }
    }

    render() {
       const { notes, folders } =  this.context
        const { noteId } = this.props.match.params
        const note = findNote(notes, noteId)
        const folder = findFolder(folders, note.folderId)
        return (
            <div key={folder.id} className='NotePageSideBar'>
                <button type='button' className='Sidebar__back'>
                <Link to='/'>Back</Link>
                </button>
                {folder && (
                    <h3 className='NotePageSidebar__folder-name'>
                      {folder.name}
                    </h3>
                )}
            </div>
        )
    }
}