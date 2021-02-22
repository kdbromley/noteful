import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import config from '../config';
import NotesContext from '../NotesContext';
import './AddFolder.css'

export default class AddFolder extends Component {
  static contextType = NotesContext;

  state = {
    error: null,
  };

  handleSubmit = e => {
    e.preventDefault()
    const { name } = e.target;
    const folder = {
      folder_name: name.value,
    }
    this.setState({ error: null })

    fetch(config.FOLDERS_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(folder),
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
        this.context.addFolder(data)
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ error })
      })
    }

  handleClickCancel = () => {
    this.props.history.push('/')
  };

  render() {
    const { error } = this.state
    return (
      <section className='AddFolder'>
        <h2>Add a new folder:</h2>
        <form
          className='AddFolder__form'
          onSubmit={this.handleSubmit}
        >
          <div className='AddFolder__error-msg'>
            {error && <p>{error.message}</p>}
          </div>
          <div>
            <label htmlFor='name'>
              Folder Name <sup>*</sup>
              {' '}
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Folder 1'
              required
            />
          </div>
          <div className='AddBookmark__buttons'>
            <button type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            {' '}
            <button type='submit'>
              Save
            </button>
          </div>
        </form>
      </section>
    );
  }  
}

AddFolder.propTypes = { 
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
 }
