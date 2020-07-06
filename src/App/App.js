import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../NavBar/NavBar';
import { getMovies } from '../apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Login from '../Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      error: '',
      isLoggedIn: false,
      name: '',
    }
  }

  loggingIn = (name) => {
    this.setState({...this.state, isLoggedIn: true, name})
  }

  // signOut = () => {
  //   this.setState({...this.state, isLoggedIn: false});
  // }

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
        <Router>
          <Switch>
            <Route
              path="/login"
              component={() => (
                <div className="login-page">
                  <Login isLoggedIn={ this.state.isLoggedIn } loggingIn={ this.loggingIn }/>
                </div>
              )}
            />
            <Route
              path="/"
              component={() => (
                <div className="home-page">
                  <NavBar />
                  { this.state.error && <h2>Oops! Something went wrong. Please try again.</h2> }
                  <MoviesContainer allMovies={ this.state.allMovies } />
                </div>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
