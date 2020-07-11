import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foundRating: null
    };
  }

  findRatedMovie = () => {
    const foundMovie = this.props.userRatings.find(rating => rating.movie_id === this.props.movieId);
    this.setState({foundRating: foundMovie});
  }

  componentDidMount = () => {
    this.findRatedMovie();
  }

  render() {
    if (!this.props.isLoggedIn) {
      return (
        <section className="MovieCard">
          <img
            alt="movie poster img"
            className="poster-img"
            src={this.props.movieImg}
          />
          <div className="movie-name-rate">
            <p className="movie-title">{this.props.title}</p>
            <p className="avg-rating">
              Average Rating: {Math.round(this.props.rating)} Stars
            </p>
          </div>
        </section>
      );
    } else {
      return (
        <section className="MovieCard">
          <img
            alt="movie poster img"
            className="poster-img"
            src={this.props.movieImg}
          />
          <div className="movie-name-rate">
            <p className="movie-title">{this.props.title}</p>
            <p className="avg-rating">
              Average Rating: {Math.round(this.props.rating)} Stars
            </p>
            {this.state.foundRating && (
              <p>Your Rating: {this.state.foundRating.rating}</p>
            )}
            <Link to={`/${this.props.title}/${this.props.movieId}`}>
              <button className="view-movie-dets" type="button">
                View Movie Details
              </button>
            </Link>
          </div>
        </section>
      );
    }
  }
}

export default MovieCard;
