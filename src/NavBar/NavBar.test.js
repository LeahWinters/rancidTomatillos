import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';


describe('NavBar', () => {
  
  it('Should be true', () => {
    expect(true).toEqual(true)
  })

  it('Should say name of application', () => {
    const { getByText } = render(<NavBar/>);
    expect(getByText('Rancid Tomatillos - The Site')).toBeInTheDocument();
  });

  it('Should have login button', () => {
    const {getByText} = render(<NavBar/>);
    expect(getByText('Login')).toBeInTheDocument();
  });

  // it('should link to the login page on click', () => {
  //   // //setup 
  //   // const { getByText, fireEvent } = render(<NavBar />);
  //   // const button = getByText('Login')
  //   // // execution 
  //   // fireEvent.click(button)
    
  //   // // assert 
  // })



})
  