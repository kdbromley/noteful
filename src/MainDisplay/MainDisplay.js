import NoteItem from '../NoteItem/NoteItem';
import './MainDisplay.css'

export default function MainDisplay(props) {
    const notes = props.notes;
    return (
        <div className='MainDisplay'>
            <ul className='MainDisplay__list'>
                {notes.map(note => 
                <NoteItem key={note.id} note={note}/>
                )}
            </ul>
        </div>
    )
}