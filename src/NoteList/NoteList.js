import NoteItem from '../NoteItem/NoteItem';
import './NoteList.css'

export default function NoteList(props) {
    return (
        <ul className='FolderList'>
        {props.store["notes"].map(note =>
            <NoteItem key={note.id} note={note}/> 
        )}
       </ul>
    )
}