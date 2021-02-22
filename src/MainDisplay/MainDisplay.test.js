import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainDisplay from './MainDisplay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <MainDisplay />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});
