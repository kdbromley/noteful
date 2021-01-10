import './NoteItem.css';
import { STORE } from '../dummy-store';

export default function NoteItem(props) {
    return(
        <div class='Note'>
         {STORE["notes"].map(note => {
             return(
         <section key={note.id} class='NoteItem'>
            <article class='NoteItem__title-card'>
                <h3>{note.name}</h3>
                <h4>Date Created: {note.modified}</h4>
                <button class="NoteItem__delete-button">Delete</button>
            </article>
            <article class='NoteItem__content'>
                <p>{note.content}</p>
            </article>
         </section>
             )
         })
    }
        </div>
    )
}