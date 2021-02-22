import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NotePageDisplay from './NotePageDisplay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
     <NotePageDisplay />
    </BrowserRouter>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
