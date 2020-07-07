import React from 'react';
// import ReactDOM from 'react-dom';
import MovieCard from './MovieCard';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// import { getMovies } from '../apiCalls.js';
jest.mock('../apiCalls.js');

describe('MovieCard', () => {

  it('should equal true', () => {
    expect(true).toBe(true)
  })

  it('should render a card to the page', () => {

    const { getByText } = render(< MovieCard
      title="The Matrix"
      poster_path="https://image.tmdb.org/t/p/original//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
      average_rating={2}
    />)

    expect(getByText("The Matrix")).toBeInTheDocument();
    expect(getByText("Stars")).toBeInTheDocument();
  })
});
