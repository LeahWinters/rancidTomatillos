import React, { Component } from "react";
import './RateMovieForm.css';
import { postUserRating, deleteUserRating } from '../apiCalls'

class RateMovieForm extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      isRated: false,
      stars: 1,
      error: ''
    };
  }

  handleSubmit = async () => {
    await postUserRating(this.props.userId, this.props.movieId, this.state.stars);
    this.props.updateFormDisplay();
    this.setState({isRated: true});
    this.props.getRating(this.state.stars)
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  };

  handleDelete = async () => {
    try {
      const message = await deleteUserRating(this.props.userId, this.props.ratedId)
      if(message.statusText !== "OK") {
        this.setState({ error: message.message})
      }
      this.setState({ isRated: false })
    } catch(error) {
      this.setState({ error: error.message})
    }
    this.props.updateFormDisplay();
  }
  
  render() {
    if(!this.props.isRated && !this.state.isRated) {
      return (
        <section className="RateMovieForm">
          <h4 className="rate-this-movie">Rate This Movie:</h4>
          <form className="rate-movie-form">
            <div className="rate-movie-select">
              <select
                alt="Select your star rating"
                name="stars"
                value={this.state.stars}
                onChange={this.handleChange}
                className="select-stars"
              >
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
                <option value="6"> 6 </option>
                <option value="7"> 7 </option>
                <option value="8"> 8 </option>
                <option value="9"> 9 </option>
                <option value="10"> 10 </option>
              </select>
              <p className="out-of-ten-stars"> /10 Stars</p>
            </div>
            <button
              className="submit-stars"
              type="button"
              onClick={this.handleSubmit}
            >
              Rate!
            </button>
          </form>
        </section>
      );
    } else {
      return (
        <section className="RateMovieForm">
          <div className="rate-this-movie">
            <h6 className="delete-this-movie">Delete Movie Rating</h6>
            <button
              className="delete-button"
              type="button"
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </div>
        </section>
      )
    }
  }
}

export default RateMovieForm;
