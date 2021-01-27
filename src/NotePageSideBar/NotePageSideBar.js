import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotesContext from '../NotesContext';
import {findNote, findFolder} from '../helperFunc';
import './NotePageSidebar.css';


export default class NotePageSideBar extends Component {

    render() {  
        return (
            <div className='Sidebar'>
                <h3>{folder.name}</h3>
            </div>
        )
    }
}
