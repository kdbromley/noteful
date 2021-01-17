import React, { Component } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import NotesContext from '../NotesContext';
import {findFolder, getNotes} from '../helperFunc';
import './MainDisplay.css'




class MainDisplay extends Component {
    static contextType = NotesContext
    static defaultProps = {
        match: {
            params: {}
        }
    }
    componentDidMount() { 
       if(!this.props.match.path == '/') { 
           console.log(this.props.match.params.folderId)
        /* const folderId  = this.props.match.params.folderId || ''
        const folders = this.context.folders || {}
        const currentFolder =  findFolder(folders, folderId)
        this.setState({ currentFolder: currentFolder }) */
        } else {
            console.log(0)
            //this.setState({ currentFolder: {} })
        }
    }
    render() {
        const { folderId } = this.props.match.params
        const { notes= [] } = this.context
        const thisFolderNotes = getNotes(notes, folderId)
        console.log(folderId, notes, thisFolderNotes)

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