import { Link } from 'react-router-dom';
import './NoteItem.css';

export default function NoteItem(props) {
    const note = props.note;
    return (
        <li key={note.id} className='NoteItem'>
            <h3><Link to={`/note/${note.id}`}>{note.name}</Link></h3>
            <h4>{note.modified}</h4>
            <button 
             className='NoteItem__del-button'
             type='button'>
                Delete
            </button>
        </li>
    )
}