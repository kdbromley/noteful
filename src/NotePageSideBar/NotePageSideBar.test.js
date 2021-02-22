import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NotePageSideBar from './NotePageSideBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <NotePageSideBar />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});
