import NoteItem from '../NoteItem/NoteItem';
import './NoteList.css'

export default function NoteList(props) {
    return (
        <ul class='NoteList'>
            <NoteItem />            
        </ul>
    )
}