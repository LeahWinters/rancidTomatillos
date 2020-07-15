import React from 'react';
import NavBar from './NavBar';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('NavBar', () => {
  
  it('Should be true', () => {
    expect(true).toEqual(true)
  })

  it('Should display title of application', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar/>
      </MemoryRouter>
    );

    const title = getByText('Rancid Tomatillos - The Site');

    expect(title).toBeInTheDocument();
  });

  it('Should have a button that says Login when a user is not logged in', () => {
    const {getByText} = render(
      <MemoryRouter>
        <NavBar 
          isLoggedIn={ false }
        />
      </MemoryRouter>
    );
   
    const LoginBtn = getByText('Login')
    
    expect(LoginBtn).toBeInTheDocument();
  });

  it('Should have a button that says Login when a user is not logged in', () => {
    const {getByText} = render(
      <MemoryRouter>
        <NavBar 
          isLoggedIn={ true }
        />
      </MemoryRouter>
    );
   
    const LogoutBtn = getByText('Logout')
    
    expect(LogoutBtn).toBeInTheDocument();
  });

});
  