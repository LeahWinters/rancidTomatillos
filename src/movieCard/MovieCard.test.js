import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './MovieCard';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { getMovies } from '../apiCalls.js';
jest.mock('../apiCalls.js');

describe('MovieCard', () => {
  it('should equal true', () => {
    expect(true).toBe(true)
  })

});
