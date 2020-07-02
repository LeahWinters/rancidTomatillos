import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar () {

  // handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  return (
    <section className="NavBar">
      <h1>Rancid Tomatillos - The Site</h1>
      <Link to={`login`}>
        <button 
          className="login" 
          // onClick={this.handleSubmit()}
          type='button'
          >
            Login
        </button>
      </Link>
      
    </section>
  )
}

export default NavBar;