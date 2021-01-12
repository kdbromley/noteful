import { NavLink } from 'react-router-dom';
import './FolderItem.css'

export default function FolderItem(props) {
    const folder = props.folder;
    return (
        <li class='FolderItem' key={folder.id}>
            <NavLink to='/folder/{folder.id}' className='FolderItem__link'>{folder.name}</NavLink>
        </li>
    )
}