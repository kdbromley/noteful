import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import FolderItem from '../FolderItem/FolderItem';

export default function Sidebar(props) {
    const folders = props.folders;
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

Sidebar.defaultProps = {
    folders: []
}