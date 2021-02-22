import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NoteItem from './NoteItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <NoteItem />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});
