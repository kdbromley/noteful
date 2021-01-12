import NoteItem from '../NoteItem/NoteItem';
import './MainDisplay.css'

export default function MainDisplay() {
    return (
        <div className='MainDisplay'>
            <ul className='MainDisplay__list'>
                <NoteItem />
            </ul>
        </div>
    )
}