import React from 'react';
//import { Link } from 'react-router-dom';
import NoteItem from '../NoteItem/NoteItem';
import './NoteList.css';

export default function NoteList(props) {
    return (
        <section className='NoteList'>
         <ul>
            {props.notes.map(note =>
                <NoteItem key={note.id} note={note}/> 
            )}
         </ul>

         <div className='NoteList__button'>
            <button type='button'
             className='NoteList__button-add'
             disabled>
                Add Note
            </button>
         </div>
        </section>    
    )
}

NoteList.defaultProps = {
    notes: []
}