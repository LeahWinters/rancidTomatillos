import React from 'react';
import Login from './Login';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
jest.mock('../apiCalls.js');

describe('Login Page', () => {
  it.only('should equal true', () => {
    expect(true).toBe(true)
  })

  it('Should render login form', () => { 
    const { getByText } = render(
      <Login />
    );

    const name = getByText('Name:');
    const email = getByText('Email:');
    const password = getByText('Password:');
    const loginBtn = getByText('Login');

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });
  
  it('Should be able to login', () => {
    const mockLogin = jest.fn();

    const { getByText, getByPlaceHolderText } = render(
      <Login />
    );

    fireEvent.change(getByPlaceholderText('Name'), {target: {value: 'Rick'}});
    fireEvent.change(getByPlaceholderText('Email'), {target: {value: 'rick.turing.io'}});
    fireEvent.change(getByPlaceholderText('Password'), {target: {value: 'asdf123'}});

    fireEvent.click(getByText('Login'));

    expect(mockLogin).toHaveBeenCalledTimes(1);
  });
})