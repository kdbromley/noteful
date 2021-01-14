import NoteItem from '../NoteItem/NoteItem';
import NotesContext from '../NotesContext';
import './NotePageDisplay.css';

export default function NotePageDisplay(props) {
    return (
      <NotesContext.Consumer>
       {(value) => {
         console.log(value)
         return(
          <section key={value.notes} className='NotePage'>
            <article className='Note__card'>
              <NoteItem 
               notes={value.notes} />
            </article>
            <article className='Note__content'>
                <p>{value.notes}</p>
            </article>
          </section>
          )           
         }  
        }
      </NotesContext.Consumer>
    )
}
