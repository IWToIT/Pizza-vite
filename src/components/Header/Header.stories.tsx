import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./index";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const meta: Meta<typeof Header> = {
  component: Header,
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
type Story = StoryObj<typeof Header>;

export const Primary: Story = {};
