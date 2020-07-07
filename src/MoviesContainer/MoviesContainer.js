import React from "react";
import "./MoviesContainer.css";
import MovieCard from "../MovieCard/MovieCard";

const MoviesContainer = ( { allMovies, userName, isLoggedIn } ) => {
  const movieCards = allMovies.map((movie) => {
    return (
      <MovieCard
        title={ movie.title }
        movieImg={ movie.poster_path }
        rating={ movie.average_rating }
        isLoggedIn= { isLoggedIn }
        movieId={ movie.id }
      />
      
    );
  });
  if(!isLoggedIn) {
    return (<section className="moviesContainer">{ movieCards }</section>);
  } else {
    return (<section className="moviesContainer-logged-in">
      <h3 className="welcome">Welcome { userName }</h3> 
      { movieCards }
      </section>);
  }
};

export default MoviesContainer;
