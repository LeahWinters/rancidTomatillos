import React, { Component } from "react";
import "./Login.css";
import { postLogin } from "../apiCalls";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.returnResponse();
  };

  returnResponse = async () => {
    try {
      const response = await postLogin(this.state.email, this.state.password);
      if (!response.ok) {
        this.setState({error: response.statusText})
        throw Error(response.statusText);  
      }
      this.props.loggingIn(this.state.name);
      return response;
    } catch (error) {
      this.setState({ error: error });
    }
  };


  render() {
    return (
      <section className="Login">
        <form onSubmit={ this.handleSubmit }>
          <div className="name-form">
            <p className="name">Name:</p>
            <input
              className="login-input name-input"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="email-form">
            <p className="email">Email:</p>
            <input
              className="login-input email-input"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="password-form">
            <p className="password">Password:</p>
            <input
              type="password"
              className="login-input password-input"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </div>
          <button
            className="login-btn"
            type="button"
            onClick={ this.handleSubmit }
          >
            Login
          </button>
          { this.state.error && <h2 className="login-error">Incorrect username or password. Please try again.</h2> }
        </form>
      </section>
    );
  }
}

export default Login;
