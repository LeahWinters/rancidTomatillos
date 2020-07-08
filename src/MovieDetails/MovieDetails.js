import React, { Component } from "react";
import "./MovieDetails.css";
import { getMovieDetails } from "../apiCalls";


class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: "",
      error: false,
    }
  }

  componentDidMount = async () => {
    try {
      const response  = await getMovieDetails(this.props.id);
      console.log("response",response)
      this.setState({...this.state, movieDetails: response.movie })
      
      if (response.error) {
        this.setState({error: true});
        throw Error(response.statusText);  
      }  
    } catch(error) {
      this.setState({ error: error })
    }
    
  }

  render() {
    console.log("movie", this.props)
    return(
      <h4>MovieDetails</h4>
    )
  }
}

export default MovieDetails;