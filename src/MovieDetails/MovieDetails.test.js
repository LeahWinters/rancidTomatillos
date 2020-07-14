import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetails from './MovieDetails';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { getMovies } from '../apiCalls.js';
jest.mock('../apiCalls.js');

describe('Movie Details Page', () => {
  it('should equal true', () => {
    expect(true).toBe(true)
  })
  
})