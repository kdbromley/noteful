import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
        const { notes=[], folders=[] } =  this.context
        const { noteId } = this.props.match.params
        const note = findNote(notes, noteId) || {}
        const folder = findFolder(folders, note.folder) || {}
        return (
            <div key={folder.id} className='Sidebar'>
                <button type='button' className='Sidebar__back-button'>
                 <Link to='/'>Back</Link>
                </button>
                {folder && (
                    <h3 className='Sidebar__folder-name'>
                     <span>&#12304;</span> {folder.folder_name} <span>&#12305;</span>
                    </h3>
                )}
                <button type='button' className='Sidebar__edit-folder-button'>
                 <Link to='/edit-folder'>Edit Folder</Link>
                </button>
            </div>
        )
    }
}

NotePageSideBar.propTypes = { 
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.shape({
        isExact: PropTypes.bool,
        params: PropTypes.object,
        path: PropTypes.string,
        url: PropTypes.string
    })
}