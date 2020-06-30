import React, {Component} from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import { getMovies } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: []
    }
  }

  componentDidMount = async () => {
    const movies = await getMovies();
    this.setState({ ...this.state, allMovies: movies });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
