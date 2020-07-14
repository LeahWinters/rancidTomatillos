import React from 'react';
import ReactDOM from 'react-dom';
import RateMovieForm from './RateMovieForm';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { getMovies } from '../apiCalls.js';
jest.mock('../apiCalls.js');

describe('Rate Movie Form', () => {
  it('should equal true', () => {
    expect(true).toBe(true)
  })
  
})