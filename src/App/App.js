import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import { getMovies } from "../apiCalls";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import Login from "../Login/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      error: "",
      isLoggedIn: false,
      name: "",
    };
  }

  loggingIn = (name) => {
    this.setState({ ...this.state, isLoggedIn: true, name });
  };

  // signOut = () => {
  //   this.setState({...this.state, isLoggedIn: false});
  // }

  componentDidMount = async () => {
    try {
      const movies = await getMovies();
      this.setState({ ...this.state, allMovies: movies });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    console.log("isLoggedIn:", this.state.isLoggedIn);

    return (
      <div className="App">
        <Switch>
          <Route
            path="user-movie-page"
            component={() => (
              <div className="home-page">
                <NavBar />
                <MoviesContainer 
                allMovies={this.state.allMovies}
                userName={this.state.name}
                isLoggedIn={this.state.isLoggedIn}
              />
              </div> 
            )}
          />
          <Route
            path="/login"
            component={() => (
              <div className="login-page">
                <Login
                  isLoggedIn={this.state.isLoggedIn}
                  loggingIn={this.loggingIn}
                />
              </div>
            )}
          />
          <Route
            path="/"
            component={() => (
              <div className="home-page">
                <NavBar />
                {this.state.error && (
                  <h2>Oops! Something went wrong. Please try again.</h2>
                )}
                <MoviesContainer
                  allMovies={this.state.allMovies}
                  userName={this.state.name}
                  isLoggedIn={this.state.isLoggedIn}
                />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
