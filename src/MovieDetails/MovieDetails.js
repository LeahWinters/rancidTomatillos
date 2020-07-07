import React, { Component } from "react";
import "./MovieDetails.css";
import { getMovieDetails } from "../apiCalls";


class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    }
  }
  returnDetails = async () => {
    try {
      const response = await getMovieDetails();
      console.log(response)
      if (response.error) {
        this.setState({error: true});
        throw Error(response.statusText);  
      }  
    } catch(error) {
      this.setState({ error: error })
    }

  }


  render() {
    // console.log("return details", this.returnDetails)
    console.log("movie", this.props)
    return(
      <h4>MovieDetails</h4>
    )
  }
}

export default MovieDetails;