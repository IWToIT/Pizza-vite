import type { Meta, StoryObj } from "@storybook/react";
import { CartItem } from "./index";

const meta: Meta<typeof CartItem> = {
  component: CartItem,
  args: {
    id: "1",
    title: "Pizza",
    type: "Vegetarian",
    size: 12,
    price: 10,
    count: 2,
    imageUrl: "pizza.jpg",
  },
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const Primary: Story = {};
