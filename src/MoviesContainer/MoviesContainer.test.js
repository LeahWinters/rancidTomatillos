import React from 'react';
import ReactDOM from 'react-dom';
import MoviesContainer from './MoviesContainer';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { getMovies } from '../apiCalls.js';
jest.mock('../apiCalls.js');

describe('MoviesContainer', () => {
  it('should equal true', () => {
    expect(true).toBe(true)
  })
  // it('should display movie title', async () => {
  //   const allMovies = [
  //     {
  //       "id": 603,
  //       "poster_path": "https://image.tmdb.org/t/p/original//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  //       "backdrop_path": "https://image.tmdb.org/t/p/original//ByDf0zjLSumz1MP1cDEo2JWVtU.jpg",
  //       "title": "The Matrix",
  //       "average_rating": 2,
  //       "release_date": "1999-03-30"
  //     },{
  //       "id": 338762,
  //       "poster_path": "https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
  //       "backdrop_path": "https://image.tmdb.org/t/p/original//lP5eKh8WOcPysfELrUpGhHJGZEH.jpg",
  //       "title": "Bloodshot",
  //       "average_rating": 10,
  //       "release_date": "2020-03-05"
  //     },
  //   ]
  //   getMovies.mockResolvedValueOnce(allMovies);
  //   const { getByText } = render(<MoviesContainer/>);
  //   const movieTitle = getByText('The Matrix')
  //   expect(movieTitle).toBeInTheDocument();
  // });
})