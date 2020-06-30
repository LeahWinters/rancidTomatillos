import React from "react";
import "./MoviesContainer.css";
import MovieCard from "../MovieCard/MovieCard";

const MoviesContainer = ( { allMovies } ) => {
  const movieCards = allMovies.map((movie) => {
    return (
      <MovieCard
        title={ movie.title }
        movieImg={ movie.poster_path }
        rating={ movie.average_rating }
      />
    );
  });
  return <section className="moviesContainer">{ movieCards }</section>;
};

export default MoviesContainer;
