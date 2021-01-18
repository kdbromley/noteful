import { Component } from 'react';
import { Link } from 'react-router-dom';
import NotesContext from '../NotesContext';
import {findNote, findFolder} from '../helperFunc';
import './NotePageSidebar.css';


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
            <div key={folder.id} className='Sidebar'>
                <button type='button' className='Sidebar__back-button'>
                <Link to='/'>Back</Link>
                </button>
                {folder && (
                    <h3 className='Sidebar__folder-name'>
                     <span>&#12304;</span> {folder.name} <span>&#12305;</span>
                    </h3>
                )}
            </div>
        )
    }
}