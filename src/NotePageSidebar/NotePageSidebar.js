import { Link } from 'react-router-dom';
import './NotePageSidebar.css'

export default function NotePageSideBar(props) {
    return (
        <div class='NotePageSideBar'>
            <button type='buton' className='Sidebar__back'>
                <Link to='/'>Back</Link>
            </button>
    <h3>Folder</h3>
        </div>
    )
}