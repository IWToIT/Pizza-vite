import type { Meta, StoryObj } from "@storybook/react";
import { Cart } from "./index";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof Cart> = {
  component: Cart,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </BrowserRouter>
    ),
  ],
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
type Story = StoryObj<typeof Cart>;

export const Primary: Story = {};
