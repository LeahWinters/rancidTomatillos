import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
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
      userId: "",
    };
  }

  loggingIn = (name) => {
    this.setState({ ...this.state, isLoggedIn: true, name });
  };

  getUserId = (id) => {
    this.setState({ ...this.state, userId: id });
    console.log("userId in app", this.state.userId);
  };

  signOut = () => {
    this.setState({ ...this.state, isLoggedIn: false });
  };

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
        <BrowserRouter>
          <Switch>
            <Route
              path="/user-movie-page"
              component={() => (
                <div className="home-page-logged-in">
                  <NavBar
                    isLoggedIn={this.state.isLoggedIn}
                    signOut={this.signOut}
                  />
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
                    getUserId={this.getUserId}
                  />
                </div>
              )}
            />
            <Route
              exact path="/"
              component={() => (
                <div className="home-page">
                  <NavBar
                    isLoggedIn={this.state.isLoggedIn}
                    signOut={this.signOut}
                  />
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
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
