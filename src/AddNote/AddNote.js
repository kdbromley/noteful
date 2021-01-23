import { Component } from "react"
import { date, randomString } from "../helperFunc";
import NotesContext from "../NotesContext"
import ValidationError from "../ValidationError";
import config from '../config'
import './AddNote.css';
import { PropTypes } from "prop-types";

class AddNote extends Component {
    static contextType = NotesContext;
    
    constructor(props) {
        super(props)
        this.state = {
          name: {
            value: '',
            touched: false,
          }
        }
    }
  

  handleClickCancel = () => {
    this.props.history.push('/')
  };


  handleSubmit = e => {
    e.preventDefault(); 
    const { name, folder, content } = e.target
    const rand = randomString(3, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
      const note = {
      'id': `d26e0${rand}-ffaf-11e8-8eb2-f2801f1b9fd1`,
      'name': name.value,
      'modified': date,
      'folderId': folder.value,
      'content': content.value
      } 
    this.setState({ error: null })

    fetch(config.NOTES_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'content-type': 'application/json'
      }
      })
      .then(response => {
        if (!response.ok)
          return response.json().then(e => Promise.reject(e));
        return response.json()
      })
      .then(data => {
        name.value = ''
        content.value = ''
        this.context.addNote(data)
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ error })
      })
  }  

  updateNoteName(name) {
      this.setState({name: {
        value: name,
        touched: true
      }
    });
  }

    validateNoteName() {
      const name = this.state.name.value.trim();
      const touched = this.state.name.touched;
      if (touched === true && name.length === 0) {
          return 'Name is required'
      } 
    }

  render() {
    const { folders } = this.context;  
    return (
      <div className='AddNote'>
        <form className='AddNote__form'
          onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Note name: 
           <input id='name' name='name' type='text' required
            onChange={e => this.updateNoteName(e.target.value)}/>
            <ValidationError message={this.validateNoteName()} />
          </label>
          <label htmlFor='folder'>Folder: 
           <select id='folder' name='folder' 
            className='AddNote__folder'>
            {folders.map(folder => 
                <option key={folder.id} value={folder.id}>{folder.name}</option>
            )}
           </select>
          </label>
          <label htmlFor='content'>Content: 
           <textarea type='textbox' 
            id='content' name='content'
            rows='6' cols='25'
            defaultValue=''
           />
          </label>
          <button type='submit'>Save</button>
          <button 
           type='button'
           onClick={this.handleClickCancel}>
            Cancel
          </button>
        </form>
      </div>
    )
  }
}

AddNote.propTypes = { 
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
 }

export default AddNote;