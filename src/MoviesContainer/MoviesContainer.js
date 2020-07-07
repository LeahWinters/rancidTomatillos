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
        // check project to see what info you need to display if user is logged in
        isLoggedIn= { isLoggedIn }
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
