import type { Meta, StoryObj } from "@storybook/react";
import { CartEmpty } from "./index";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof CartEmpty> = {
  component: CartEmpty,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CartEmpty>;

export const Primary: Story = {};
