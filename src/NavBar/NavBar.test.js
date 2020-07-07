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
    // set up
    const { getByText } = render(<NavBar/>);
    // execution
    const title = getByText('Rancid Tomatillos - The Site');
    //assertion
    expect(title).toBeInTheDocument();
  });

  it('Should have login button', () => {
    // setup
    const {getByText} = render(<NavBar/>);
    // execution
    const buttonText = getByText('Login')
    // assertion
    expect(buttonText).toBeInTheDocument();
  });

  // it('should link to the login page on click', () => {
  //   // //setup 
  //   // const { getByText, fireEvent } = render(<NavBar />);
  //   // const button = getByText('Login')
  //   // // execution 
  //   // fireEvent.click(button)
    
  //   // // assert 
  // })

  it('should display username on page after correct login', () => {

  })

  it('after login, button should say log out', () => {
    
  })





})
  