import type { Meta, StoryObj } from "@storybook/react";
import { MainLayout } from "./index";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof MainLayout> = {
  component: MainLayout,
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
type Story = StoryObj<typeof MainLayout>;

export const Primary: Story = {};
