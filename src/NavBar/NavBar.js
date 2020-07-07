import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn }) => {

  // handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  if(!isLoggedIn) {
    return (
      <section className="NavBar">
        <h1>Rancid Tomatillos - The Site</h1>
        <Link to={`login`}>
          <button 
            className="login-btn-nav-bar" 
            // onClick={this.handleSubmit()}
            type='button'
            >
              Login
          </button>
        </Link>
        
      </section>
    )
  } else {
    return (
      <section className="NavBar">
        <h1>Rancid Tomatillos - The Site</h1>
        <Link to='/'>
          <button 
            className="login-btn-nav-bar" 
            // onClick={this.handleSubmit()}
            type='button'
            >
              Logout
          </button>
        </Link>
        
      </section>
    )
  }

  
}

export default NavBar;