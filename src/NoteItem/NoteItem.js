import './NoteItem.css';
import { STORE } from '../dummy-store';

export default function NoteItem(props) {
    return(
        <div class='Note'>
         {STORE["notes"].map(note => {
             return(
         <li key={note.id} class='NoteItem'>
            <section class='NoteItem__title-card'>
                <h3>{note.name}</h3>
                <h4>Date Created: {note.modified}</h4>
                <button class="NoteItem__delete-button">Delete</button>
            </section>
            <section class='NoteItem__content'>
                <p>{note.content}</p>
            </section>
         </li>
             )
         })
    }
        </div>
    )
}