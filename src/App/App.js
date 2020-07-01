import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import { getMovies } from '../apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      error: ''
    }
  }

  componentDidMount = async () => {
    try {
      const movies = await getMovies();
      this.setState({ ...this.state, allMovies: movies });
      
    } catch(error) {
      this.setState({error: error});
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        { this.state.error && <h2>Oops! Something went wrong. Please try again.</h2> }
        <MoviesContainer allMovies={ this.state.allMovies }/>
      </div>
    );
  }
}

export default App;
