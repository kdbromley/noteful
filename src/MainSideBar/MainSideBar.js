import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './MainSideBar.css';


export default function MainSideBar(props) {
    return (
        <div className='MainSideBar'>
            <ul className='MainSideBar__list'>
                {props.folders.map(folder =>
                    <li key={folder.id}
                        className='MainSideBar__folder'>
                        <NavLink 
                          classname='MainSideBar__folder-link'
                          to={`/folder/${folder.id}`}
                        >
                            {folder.name}
                        </NavLink>
                    </li>
                )}
            </ul>
            <div className='MainSideBar__button'>
                <button type='button'
                 className='MainSideBar__button-add' 
                 disabled>
                    Add Folder
                </button>
            </div>
        </div>
    )
}

MainSideBar.defaultProps = {
    folders: []
}