import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "./index";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof Home> = {
  component: Home,
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
type Story = StoryObj<typeof Home>;

export const Primary: Story = {};
