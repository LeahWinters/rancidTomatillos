import React, { Component } from "react";

class RateMovieForm extends Component {
  constructor() {
    super();
    this.state = {
      stars: "one",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <section className="RateMovieForm">
        <h4 className="rate-this-movie">Rate This Movie:</h4>
        <form className="rate-movie-form">
          <div className="rate-movie-select">
            <select
              alt="Select your star rating"
              name="Stars"
              value={this.state.stars}
              onChange={this.handleChange}
              className="select-stars"
            >
              <option value="one"> 1 </option>
              <option value="two"> 2 </option>
              <option value="three"> 3 </option>
              <option value="four"> 4 </option>
              <option value="five"> 5 </option>
              <option value="six"> 6 </option>
              <option value="seven"> 7 </option>
              <option value="eight"> 8 </option>
              <option value="nine"> 9 </option>
              <option value="ten"> 10 </option>
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
  }
}

export default RateMovieForm;
