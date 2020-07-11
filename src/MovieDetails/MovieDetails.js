import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MovieDetails.css";
import { getMovieDetails } from "../apiCalls";
import RateMovieForm from "../RateMovieForm/RateMovieForm";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: "",
      userRating: "",
      isRated: false,
    };
  }

  findRatedMovie = () => {
    const foundMovie = this.props.userRatings.find(
      (rating) => rating.movie_id === this.props.id
    );
    if (foundMovie) {
      this.setState({
        foundMovie: foundMovie,
        foundRating: foundMovie.rating,
        foundMovieId: foundMovie.id,
        isRated: true,
      });
    }
  };

  updateFormDisplay = () => {
    this.setState({isRated: !this.state.isRated})
  }

  componentDidMount = async () => {
    try {
      const response = await getMovieDetails(this.props.id);
      this.setState({ ...this.state, movieDetails: response.movie });
      this.findRatedMovie();
      if (response.error) {
        this.setState({ error: true });
        throw Error(response.statusText);
      }
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    if (!this.state.error) {
      return (
        <section className="MovieDetails">
          <div className="movie-title-and-back-btn">
            <h2 className="movie-title-dets-page">{this.props.title}</h2>
            <Link to="/user-movie-page">
              <button className="back-to-all-movies-btn" type="button" onClick={() => this.props.updateComponent()}>
                View All Movies
              </button>
            </Link>
          </div>
          <div className="movie-dets-img-holder">
            <img
              className="backdrop-img"
              alt="movie poster"
              src={this.props.backdrop_path}
            ></img>
            <div className="movie-dets">
              <p className="dets">Release Date: {this.props.release_date}</p>
              <p className="dets">Generes: {this.state.movieDetails.genres}</p>
              <p className="dets">Budget: {this.state.movieDetails.budget}</p>
              <p className="dets">Revenue: {this.state.movieDetails.revenue}</p>
              <p className="dets">Runtime: {this.state.movieDetails.runtime}</p>
              <p className="dets">Tagline: {this.state.movieDetails.tagline}</p>
              <p className="dets">
                Average Rating:{" "}
                {Math.round(this.state.movieDetails.average_rating)}
              </p>
              {this.state.isRated && (
                <p className="dets">Your Rating: {this.state.foundRating}</p>
              )}
            </div>
          </div>
          <p className="movie-overview">
            Overview: {this.state.movieDetails.overview}
          </p>
          <div className="rate-form">
            {
              <RateMovieForm
                userId={this.props.userId}
                foundMovie={this.state.foundMovie}
                userRatings={this.props.userRatings}
                movieId={this.state.movieDetails.id}
                ratedId={this.state.foundMovieId}
                rating={this.state.foundRating}
                isRated={this.state.isRated}
                updateFormDisplay={this.updateFormDisplay}
              />
            }
          </div>
        </section>
      );
    } else {
      console.log(this.state.error);
      return (
        <section className="MovieDetails">
          <div className="movie-title-and-back-btn">
            <h2 className="movie-title-dets-page">Opps!</h2>
            <button className="back-to-all-movies-btn" type="button">
              View All Movies
            </button>
          </div>
          <div className="movie-dets-img-holder error-message">
            Sorry! There was an error loading your movie, please try again!
          </div>
        </section>
      );
    }
  }
}

export default MovieDetails;
