import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof App> = {
  component: App,
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
type Story = StoryObj<typeof App>;

export const Primary: Story = {};
