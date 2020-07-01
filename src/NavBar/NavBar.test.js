import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';


describe('NavBar', () => {
  it('Should say name of application', () => {
    const { getByText } = render(<NavBar/>);
    expect(getByText('Rancid Tomatillos')).toBeInTheDocument();
  });

  it('Should have login button', () => {
    const {getByText} = render(<NavBar/>);
    expect(getByText('Login')).toBeInTheDocument();
  });
})
