import React from 'react';
import { render } from './test-utils';
import { screen } from '@testing-library/react';
import { CartItem } from '../CartItem';

test('is the cart block displayed with all the properties', () => {
  const props = {
    id: '1',
    title: 'Pizza',
    type: 'Vegetarian',
    size: 12,
    price: 10,
    count: 2,
    imageUrl: 'pizza.jpg',
  };

  render(<CartItem {...props} />);
  expect(screen.getByTestId('cartItem-element')).toBeInTheDocument();
  expect(screen.getByTestId('cartItem-element')).toMatchSnapshot();
  expect(screen.getByAltText('Pizza')).toBeInTheDocument();
  expect(screen.getByText('Pizza')).toBeInTheDocument();
  expect(screen.getByText('Vegetarian, 12 см.')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('20 руб.')).toBeInTheDocument();
});
