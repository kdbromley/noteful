import './NoteItem.css';

export default function NoteItem(props) {
    const note = props.note;
    return (
        <li key={note.id} className='NoteItem'>
            <h3>{note.name}</h3>
            <h4>{note.modified}</h4>
            <button 
             className='NoteItem__del-button'
             type='button'>
                Delete
            </button>
        </li>
    )
}