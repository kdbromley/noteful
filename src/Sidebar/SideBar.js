import { Link, NavLink } from 'react-router-dom';
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
             <li className='Sidebar__folder-link' key={folder.id}>
                <NavLink to={`/folder/${folder.id}`} activeClassName='active'>{folder.folder_name}</NavLink>
            </li>
            )}
            </ul>
            <button className='Sidebar__add-folder-button'>
                <Link to='/add-folder'>
                    Add Folder
                </Link>
            </button>
            <button type='button' className='Sidebar__edit-folder-button'>
                <Link to='/edit-folder'>Edit Folder</Link>
            </button>
        </nav>
    )
  }
}

Sidebar.defaultProps = {
    folders: []
}