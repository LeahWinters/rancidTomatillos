import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';

describe('App', () => {

  it('should be true', () => {
    expect(true).toEqual(true);
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render the nav bar' ,() => {

  })

  it('should render the movie container', () => {

  })

  it('should display an error on the home page if present', () => {

  })
  

})
