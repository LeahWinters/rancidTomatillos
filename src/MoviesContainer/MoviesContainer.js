import React, { Component } from "react";
import "./MoviesContainer.css";
import MovieCard from "../MovieCard/MovieCard";
import { BrowserRouter } from "react-router-dom";
import { PropTypes } from 'prop-types';

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: null,
    };
  }

  render() {
    const movieCards = this.props.allMovies.map((movie) => {
      return (
          <MovieCard
            title={movie.title}
            movieImg={movie.poster_path}
            rating={movie.average_rating}
            isLoggedIn={this.props.isLoggedIn}
            movieId={movie.id}
            userRatings={this.props.userRatings}
            key={movie.id}
            updateComponent={this.updateComponent}
          />
      );
    });
    if (!this.props.isLoggedIn) {
      return <section className="moviesContainer">{movieCards}</section>;
    } else {
      return (
        <section className="moviesContainer-logged-in">
          <h3 className="welcome">Welcome {this.props.userName}</h3>
          {movieCards}
        </section>
      );
    }
  }
}

MoviesContainer.propTypes = {
  allMovies: PropTypes.arrayOf(PropTypes.object),
  userName: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  userRatings: PropTypes.arrayOf(PropTypes.object),
  updateComponent: PropTypes.func
}

export default MoviesContainer;
