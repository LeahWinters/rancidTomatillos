import React from 'react';
import './NavBar.css';
import { Link, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
function NavBar () {

  // handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  return (
    <Router>
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
    </Router>
  )
}

export default NavBar;