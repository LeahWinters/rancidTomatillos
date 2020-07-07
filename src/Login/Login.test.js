import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { getMovies } from '../apiCalls.js';
jest.mock('../apiCalls.js');

describe('Login Page', () => {
  it('should equal true', () => {
    expect(true).toBe(true)
  })
  
})