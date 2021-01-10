import './NoteItem.css';
export default function NoteItem(props) {
    const note = props.note;
    return(
         <li key={note.id} className='NoteItem'>
            <section className='NoteItem__title-card'>
                <h3>{note.name}</h3>
                <h4>Date Created: {note.modified}</h4>
                <button className="NoteItem__delete-button">Delete</button>
            </section>
            <section className='NoteItem__content'>
                <p>{note.content}</p>
            </section>
         </li>
    )
}