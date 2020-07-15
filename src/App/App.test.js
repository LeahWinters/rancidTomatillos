import React from "react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getMovies, postLogin, getUserRatings, getMovieDetails } from "../apiCalls";
jest.mock("../apiCalls");

describe("App", () => {
  let mockGetAllMovies;
  let mockGetSingleMovie;
  let mockReturnLogin;
  let mockUserRating;

  beforeEach(() => {
    mockGetAllMovies = [
      {
        id: 475430,
        poster_path:
          "https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
        backdrop_path:
          "https://image.tmdb.org/t/p/original//o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
        title: "Artemis Fowl",
        average_rating: 3.6666666666666665,
        release_date: "2020-06-12",
      },
      {
        id: 338762,
        poster_path:
          "https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
        backdrop_path:
          "https://image.tmdb.org/t/p/original//lP5eKh8WOcPysfELrUpGhHJGZEH.jpg",
        title: "Bloodshot",
        average_rating: 6.5,
        release_date: "2020-03-05",
      },
    ];

    mockGetSingleMovie = {
      movie: {
        id: 475430,
        title: "Artemis Fowl",
        poster_path:
          "https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
        backdrop_path:
          "https://image.tmdb.org/t/p/original//o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
        release_date: "2020-06-12",
        overview:
          "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        genres: ["Adventure", "Fantasy", "Science Fiction", "Family"],
        budget: 125000000,
        revenue: 0,
        runtime: 95,
        tagline: "Remember the name",
        average_rating: 3.6666666666666665,
      },
    };

    mockReturnLogin = {
      user: {
        id: 62,
        name: "Rick",
        email: "rick@turing.io",
      },
    };

    mockUserRating = [
      {
        id: 1101,
        user_id: 62,
        movie_id: 603,
        rating: 7,
        created_at: "2020-07-11T19:12:20.204Z",
        updated_at: "2020-07-11T19:12:20.204Z",
      },
    ];

  });

  
  it("should be true", () => {
    expect(true).toEqual(true);
  });

  it("should render movie cards upon load of application", async () => {
    getMovies.mockResolvedValueOnce(mockGetAllMovies);

    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const title1 = await waitFor(() => getByText("Artemis Fowl"));
    const title2 = await waitFor(() => getByText("Bloodshot"));

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
  });

  it('Should see the login page when the login button is clicked', async () => {
    getMovies.mockResolvedValueOnce(mockGetAllMovies);

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const loginBtn = getByText("Login");

    fireEvent.click(loginBtn);
    
    await waitFor(() => {
      const name = getByPlaceholderText("Name");
      const email = getByPlaceholderText("Email");
      const password = getByPlaceholderText("Password");
      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(password).toBeInTheDocument();
    });

  });

  it.skip('Should bring user to user home page upon successful login', async () => {
    getMovies.mockResolvedValueOnce(mockGetAllMovies);
    postLogin.mockResolvedValue(mockReturnLogin);

    const { getByText, getByPlaceholderText, getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    console.log('initial', App.state)

    const loginBtn = getByText("Login");

    fireEvent.click(loginBtn);

    console.log('before login', App.state.isLoggedIn)

    const name = await waitFor(() => getByPlaceholderText('Name'));
    const email = await waitFor(() => getByPlaceholderText('Email'));
    const password = await waitFor(() => getByPlaceholderText('Password'));
    const submitLoginBtn = await waitFor(() => getByTestId('submit-login-btn'));

    fireEvent.change(name, {target: {value: 'Rick'}});
    fireEvent.change(email, {target: {value: 'rick.turing.io'}});
    fireEvent.change(password, {target: {value: 'asdf123'}});

    fireEvent.click(submitLoginBtn);

    console.log('after login', App.state.isLoggedIn)
    
    await waitFor(() => {
      const welcome = getByText("Welcome", {exact: false});
      const movieDetsBtn = getByText("View Movie Details");
      expect(welcome).toBeInTheDocument();
      expect(movieDetsBtn).toBeInTheDocument();
    })
    
  });
});
