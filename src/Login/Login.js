import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <section className='Login'>
        <form>
          <div className='name-form'>
            <p className='name'>Name:</p>
            <input className='login-input name-input' placeholder='Name'></input>
          </div>
          <div className='email-form'>
            <p className='email'>Email:</p>
            <input className='login-input email-input' placeholder='Email'></input>
          </div>
          <div className='password-form'>
            <p className='password'>Password:</p>
            <input className='login-input password-input' placeholder='Password'></input>
          </div>
          <button className='login-btn' type='button'>Login</button>
        </form>
      </section>
    )
  }
}

export default Login;
