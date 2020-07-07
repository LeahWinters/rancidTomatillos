import React, { Component } from "react";
import "./NavBar.css";
import { Link, Redirect } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.signOut();
  };

  render() {

    if (!this.props.isLoggedIn) {
      return (
        <section className="NavBar">
          <h1>Rancid Tomatillos - The Site</h1>
          <Link to={`login`}>
            <button
              className="login-btn-nav-bar"
              type="button"
            >
              Login
            </button>
          </Link>
        </section>
      );
    } else {
      return (
        <section className="NavBar">
          <h1>Rancid Tomatillos - The Site</h1>
          <Link to="/">
            <button
              className="login-btn-nav-bar"
              onClick={this.handleClick}
              type="button"
            >
              Logout
            </button>
          </Link>
        </section>
      );
    }
  }
}

export default NavBar;
