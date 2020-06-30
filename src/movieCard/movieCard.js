import React from "react";
import "./MovieCard.css";

const MovieCard = ( { title, movieImg, rating} ) => {
  return (
    <section className="MovieCard">
      <img
        alt="movie poster img"
        className="poster-img"
        src={ movieImg }
      />
      <p className="movie-title">{ title }</p>
      <p className="avg-rating">{ rating }</p>
    </section>
  );
};

export default MovieCard;
