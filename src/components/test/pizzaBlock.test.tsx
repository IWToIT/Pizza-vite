import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from './test-utils';
import { PizzaBlock } from '../PizzaBlock';

const pizzaBlockItem = {
  id: '1',
  title: 'Margherita',
  price: 10,
  imageUrl: 'https://example.com/pizza.jpg',
  types: [0, 1],
  sizes: [30, 40],
  rating: 2,
};

describe('pizzaBlockItem', () => {
  test('display the pizza block with all the contents', () => {
    render(<PizzaBlock {...pizzaBlockItem} />);

    expect(screen.getByAltText('Pizza')).toBeInTheDocument();
    expect(screen.getByText('Margherita')).toBeInTheDocument();
    expect(screen.getByText('от 10 руб.')).toBeInTheDocument();
    expect(screen.getByText('тонкое')).toBeInTheDocument();
    expect(screen.getByText('традиционное')).toBeInTheDocument();
    expect(screen.getByText('30 см.')).toBeInTheDocument();
    expect(screen.getByText('40 см.')).toBeInTheDocument();
  });
  test('check the asset class by clicking on different pizza widths', () => {
    render(<PizzaBlock {...pizzaBlockItem} />);

    fireEvent.click(screen.getByText('традиционное'));
    fireEvent.click(screen.getByText('40 см.'));

    expect(screen.getByText('традиционное')).toHaveClass('active');
    expect(screen.getByText('40 см.')).toHaveClass('active');
  });
});
