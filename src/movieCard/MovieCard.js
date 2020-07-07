import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ title, movieImg, rating, isLoggedIn, movieId }) => {
  if (!isLoggedIn) {
    return (
      <section className="MovieCard">
        <img alt="movie poster img" className="poster-img" src={movieImg} />
        <div className="movie-name-rate">
          <p className="movie-title">{title}</p>
          <p className="avg-rating">{rating} Stars</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="MovieCard">
        <img alt="movie poster img" className="poster-img" src={movieImg} />
        <div className="movie-name-rate">
          <p className="movie-title">{title}</p>
          <p className="avg-rating">{rating} Stars</p>
          <Link to={`/${title}/${movieId}`}>
            <button 
              className="view-movie-dets" 
              type="button">
                View Movie Details
            </button>
          </Link>
        </div>
      </section>
    );
  }
  
};

export default MovieCard;