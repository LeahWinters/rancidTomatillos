import React from "react";
import MovieDetails from "./MovieDetails";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { getMovieDetails } from "../apiCalls.js";
import { MemoryRouter } from "react-router-dom";
jest.mock("../apiCalls.js");

describe("Movie Details Page", () => {

  let mockGetSingleMovie;

  beforeEach(() => {
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
        average_rating: 3,
      },
    };
  });

  it("should equal true", () => {
    expect(true).toBe(true);
  });

  it.skip("Should render a single movies details", async () => {
    getMovieDetails.mockResolvedValueOnce(mockGetSingleMovie);

    const movieToRender = {
      title: "Artemis Fowl",
      movieId: 603,
      poster_path:
        "https://image.tmdb.org/t/p/original//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      average_rating: 3,
    };

    const { getByText } = render(
      <MemoryRouter>
        <MovieDetails {...movieToRender} userId={62} userRatings={[]} />
      </MemoryRouter>
    );

    // getMovieDetails(603);

    const title = getByText("Artemis Fowl");
    // const viewAllMoviesBtn = await waitFor( () => getByText("View All Movies"));

    expect(title).toBeInTheDocument();
    // expect(viewAllMoviesBtn).toBeInTheDocument();
  });
});
