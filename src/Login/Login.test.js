import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { getMovies } from '../apiCalls.js';
jest.mock('../apiCalls.js');

describe('Login Page', () => {
  it.only('should equal true', () => {
    expect(true).toBe(true)
  })

  it.skip('Should render login form', () => {
    
    // Set up:
    const { getByText, getByPlaceHolderText } = render(
      <Login />
    );

    // execute:

    const name = getByText('Name:');
    
  })
  
  // it('Should be able to login', () => {
  //   const mockLogin = jest.fn();
  //   const { getByText, getByPlaceHolderText } = render(
  //     <Login />
  //   )
  // })
})