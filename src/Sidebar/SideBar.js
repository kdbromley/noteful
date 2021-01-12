import './Sidebar.css';
import FolderItem from '../FolderItem/FolderItem';

export default function Sidebar() {
    return (
        <div className='Sidebar'>
            <ul className='Sidebar__list'>
                <FolderItem />
            </ul>
        </div>
    )
}