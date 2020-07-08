import React, { Component } from "react";
import "./MovieDetails.css";
import { getMovieDetails } from "../apiCalls";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: "",
      error: false,
    };
  }

  componentDidMount = async () => {
    try {
      const response = await getMovieDetails(this.props.id);
      this.setState({ ...this.state, movieDetails: response.movie });
      if (response.error) {
        this.setState({ error: true });
        throw Error(response.statusText);
      }
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    return (
      <section className="MovieDetails">
        <h2 className="movie-title-dets-page">{this.props.title}</h2>
        <div className="movie-dets-img-holder">
          <img
            className="backdrop-img"
            alt="movie poster"
            src={this.props.backdrop_path}
          ></img>
          <div className="movie-dets">
            <p>Release Date: {this.props.release_date}</p>
            <p>Generes: {this.state.movieDetails.genres}</p>
            <p>Budget: {this.state.movieDetails.budget}</p>
            <p>Revenue: {this.state.movieDetails.revenue}</p>
            <p>Runtime: {this.state.movieDetails.runtime}</p>
            <p>Tagline: {this.state.movieDetails.tagline}</p>
            <p>Average Rating: {this.state.movieDetails.average_rating}</p>
          </div>
        </div>
        <p className="movie-overview">Overview: {this.state.movieDetails.overview}</p>
      </section>
    );
  }
}

export default MovieDetails;
