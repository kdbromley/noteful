import './NotePageDisplay.css';

export default function NotePageDisplay(props) {
    return (
      <div key={props.note.id}className='Note'>
        <div className='Note__card'>
            <h3>{props.note.name}</h3>
            <h4>{props.note.modified}</h4>
            <button 
             className='Note__del-button'
             type='button'>
                Delete
            </button>
        </div>
        <div className='Note__content'>
            <p>{props.note.content}</p>
        </div>
      </div>
    )
}
