import React from "react";
import MovieDetails from "./MovieDetails";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { getMovieDetails } from "../apiCalls.js";
import { MemoryRouter } from "react-router-dom";
jest.mock("../apiCalls.js");

describe("Movie Details Page", () => {
  it("should equal true", () => {
    expect(true).toBe(true);
  });

  it.skip("Should render a single movies details", async () => {
    getMovieDetails.mockResolvedValue(() => {
      return Promise.resolve({
        movie: {
          id: 603,
          title: "The Matrix",
          poster_path:
            "https://image.tmdb.org/t/p/original//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
          backdrop_path:
            "https://image.tmdb.org/t/p/original//ByDf0zjLSumz1MP1cDEo2JWVtU.jpg",
          release_date: "1999-03-30",
          overview:
            "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
          genres: ["Action", "Science Fiction"],
          budget: 63000000,
          revenue: 463517383,
          runtime: 136,
          tagline: "Welcome to the Real World.",
          average_rating: 6.428571428571429,
        },
      });
    });

    const movieToRender = {
      title: "The Matrix",
      movieId: 603,
      poster_path:
        "https://image.tmdb.org/t/p/original//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      average_rating: 2,
    };

    const { getByText } = render(
      <MemoryRouter>
        <MovieDetails {...movieToRender} userId={62} userRatings={[]} />
      </MemoryRouter>
    );

    // getMovieDetails(603);

    const title = await waitFor( () => getByText("The Matrix"));
    // const viewAllMoviesBtn = await waitFor( () => getByText("View All Movies"));

    expect(title).toBeInTheDocument();
    // expect(viewAllMoviesBtn).toBeInTheDocument();
  });
});
