import React from 'react';
import RateMovieForm from './RateMovieForm';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
jest.mock('../apiCalls.js');

describe('Rate Movie Form', () => {
  it('should equal true', () => {
    expect(true).toBe(true)
  });

  it('Should render a rate movie form', () => {
    const { getByText } = render(
      <RateMovieForm />
    );

    const title = getByText('Rate This Movie:');
    const stars = getByText('/10 Stars');
    const rateBtn = getByText('Rate!');

    expect(title).toBeInTheDocument();
    expect(stars).toBeInTheDocument();
    expect(rateBtn).toBeInTheDocument();
  });

  it.skip('Should be able to rate movie', () => {
    const mockRate = jest.fn();
    const mockUpdateFormDisplay = jest.fn();

    const { getByText, getByPlaceholderText } = render(
      <RateMovieForm 
        updateFormDisplay={ mockUpdateFormDisplay }
        getRating={ mockUpdateFormDisplay }
      />
    );

    const starNum = document.getElementByClassName('select-stars')

    starNum.focus();

    fireEvent.mouseDown(getByText('1'));

    fireEvent.click(getByText('Rate!'));

    expect(mockRate).toHaveBeenCalledTimes(1);
    expect(mockUpdateFormDisplay).toHaveBeenCalledTimes(1);
  });
  
})