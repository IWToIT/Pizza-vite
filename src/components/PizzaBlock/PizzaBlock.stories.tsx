import type { Meta, StoryObj } from '@storybook/react';
import { PizzaBlock } from './index';

const meta: Meta<typeof PizzaBlock> = {
  component: PizzaBlock,
  args: {
    id: '1',
    title: 'Margherita',
    price: 10,
    imageUrl: 'https://example.com/pizza.jpg',
    types: [0, 1],
    sizes: [30, 40],
    rating: 3,
  },
};

export default meta;
type Story = StoryObj<typeof PizzaBlock>;

export const Primary: Story = {};
