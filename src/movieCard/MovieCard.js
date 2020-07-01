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
      <div className="movie-name-rate">
        <p className="movie-title">{ title }</p>
        <p className="avg-rating">{ rating } Stars</p>
      </div>
      
    </section>
  );
};

export default MovieCard;
