import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { Component } from 'react';
import NotesContext from '../NotesContext';

export default class Sidebar extends Component {
    static contextType = NotesContext
    render() {
        const folders = this.context.folders
    return (
        <nav className='Sidebar'>
            <ul className='Sidebar__list'> 
            {folders.map(folder => 
             <li className='FolderItem' key={folder.id}>
                <NavLink to={`/folder/${folder.id}`} className='FolderItem__link'>{folder.name}</NavLink>
            </li>
            )}
            </ul>
        </nav>
    )
  }
}

Sidebar.defaultProps = {
    folders: []
}