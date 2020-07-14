import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom';
import  { getMovies } from '../apiCalls'
jest.mock('../apiCalls');

describe('App', () => {
  getMovies.mockResolvedValue(() => {
    return Promise.resolve({
      movies: [
        {
          "id": 475430,
          "poster_path": "https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
          "title": "Artemis Fowl",
          "average_rating": 4,
          "release_date": "2020-06-12"
      },
      {
          "id": 338762,
          "poster_path": "https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//lP5eKh8WOcPysfELrUpGhHJGZEH.jpg",
          "title": "Bloodshot",
          "average_rating": 5,
          "release_date": "2020-03-05"
      },
      {
          "id": 508439,
          "poster_path": "https://image.tmdb.org/t/p/original//f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//dW6yBuKwiMeronJZw8kozYLMorB.jpg",
          "title": "Onward",
          "average_rating": 3,
          "release_date": "2020-02-29"
      },
      {
          "id": 603,
          "poster_path": "https://image.tmdb.org/t/p/original//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//ByDf0zjLSumz1MP1cDEo2JWVtU.jpg",
          "title": "The Matrix",
          "average_rating": 2,
          "release_date": "1999-03-30"
      }
      ] 
    })
  });

  it('should be true', () => {
    expect(true).toEqual(true);
  })

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });
  
  it.skip('should render the nav bar' ,() => { 

  });

  it.skip('should render the movie container', () => {

  });

  // it.skip('should display an error on the home page if present', () => {
    
  // });

  // should render movies

  it.skip('should render a movie card upon load of application', async () => {
    const { getByText } = render(<Router><App /></Router>)
    const mockedTitle1 = await wait( () => getByText("Onward"));
    const mockedTitle2 = await wait( () => getByText("The Matrix"));
    const mockedTitle3 = await wait( () => getByText("Bloodshot"));

    expect(mockedTitle1).toBeInTheDocument();
    expect(mockedTitle2).toBeInTheDocument();
    expect(mockedTitle3).toBeInTheDocument();
  });

  
  

})
