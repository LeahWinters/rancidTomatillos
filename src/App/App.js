import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import { getMovies, getUserRatings} from "../apiCalls";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import MovieDetails from "../MovieDetails/MovieDetails";
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
      userRatings: []
    };
  }
  
  loggingIn = async (name) => {
    this.setState({ ...this.state, isLoggedIn: true, name });
    await this.state.isLoggedIn;
    await this.getRatings();
  };

  signOut = () => {
    this.setState({ ...this.state, isLoggedIn: false });
  };

  getRatings = async () => {
    try {
      const currentUserRatings = await getUserRatings(this.state.userId);
      await this.setState({...this.state, userRatings: currentUserRatings.ratings})
      console.log("ratings",currentUserRatings)
    } catch(error) {
      this.setState({ error: error });
    }
  };

  getUserId = (id) => {
    this.setState({ ...this.state, userId: id });
    console.log("userId in app", this.state.userId);
  };

  updateComponent = async () => {
    await this.getRatings();
    const currentState = this.state;
    await this.setState(currentState);
  }

  componentDidMount = async () => {
    try {
      const movies = await getMovies();
      this.setState({ ...this.state, allMovies: movies });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path={"/:title/:id"}
              render={ ({ match }) => {
                const { id } = match.params;
                const movieToRender = this.state.allMovies.find((movie) => movie.id === parseInt(id));
                return (
                  <div className="movie-dets-and-form">
                    <MovieDetails { ...movieToRender }
                      userId= {this.state.userId }
                      userRatings={ this.state.userRatings }
                      updateComponent={ this.updateComponent }
                    />
                  </div>
                )
              }}
            />
            <Route
              path="/user-movie-page"
              component={() => (
                <div className="home-page-logged-in">
                  <NavBar
                    isLoggedIn={ this.state.isLoggedIn }
                    signOut={ this.signOut }
                  />
                  <MoviesContainer
                    allMovies={ this.state.allMovies }
                    userName={ this.state.name }
                    isLoggedIn={ this.state.isLoggedIn }
                    userRatings={ this.state.userRatings }
                    updateComponent={ this.updateComponent }
                  />
                </div>
              )}
            />
            <Route
              path="/login"
              component={() => (
                <div className="login-page">
                  <Login
                    isLoggedIn={ this.state.isLoggedIn }
                    loggingIn={ this.loggingIn }
                    getUserId={ this.getUserId }
                  />
                </div>
              )}
            />
            <Route
              exact path="/"
              component={() => (
                <div className="home-page">
                  <NavBar
                    isLoggedIn={ this.state.isLoggedIn }
                    signOut={ this.signOut }
                  />
                  {this.state.error && (
                    <h2>Oops! Something went wrong. Please try again.</h2>
                  )}
                  <MoviesContainer
                    allMovies={ this.state.allMovies }
                    userName={ this.state.name }
                    isLoggedIn={ this.state.isLoggedIn }
                    userRatings={ this.state.userRatings }
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
