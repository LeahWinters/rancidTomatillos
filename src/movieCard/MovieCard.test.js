import React from "react";
import MovieCard from "./MovieCard";
import MovieDetails from "../MovieDetails/MovieDetails";
import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { getMovieDetails } from "../apiCalls";
jest.mock("../apiCalls.js");

describe("MovieCard", () => {
  it("should equal true", () => {
    expect(true).toBe(true);
  });

  it("Should render a card to the page", () => {
    const { getByText } = render(
      <MemoryRouter>
        <MovieCard
          title="The Matrix"
          poster_path="https://image.tmdb.org/t/p/original//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
          average_rating={2}
          userRatings={[]}
        />
      </MemoryRouter>
    );

    const title = getByText("The Matrix");
    const rating = getByText("Average Rating: ", { exact: false });

    expect(title).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  });

  it("Should see, if logged in, a View Movie Details button and the users rating of the movie if rated", () => {
    const { getByText } = render(
      <MemoryRouter>
        <MovieCard
          title="The Matrix"
          movieId={603}
          poster_path="https://image.tmdb.org/t/p/original//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
          average_rating={2}
          userRatings={[
            {
              created_at: "2020-07-11T19:12:20.204Z",
              id: 1101,
              movie_id: 603,
              rating: 7,
              updated_at: "2020-07-11T19:12:20.204Z",
              user_id: 62,
            },
          ]}
          isLoggedIn={true}
          key={603}
        />
      </MemoryRouter>
    );

    const viewMovieDetsBtn = getByText("View Movie Details");
    const userRating = getByText("Your Rating: 7");

    expect(viewMovieDetsBtn).toBeInTheDocument();
    expect(userRating).toBeInTheDocument();
  });
});
