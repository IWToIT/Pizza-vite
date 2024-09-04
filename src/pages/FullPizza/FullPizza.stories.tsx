import type { Meta, StoryObj } from "@storybook/react";
import { FullPizza } from "./index";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof FullPizza> = {
  component: FullPizza,
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
type Story = StoryObj<typeof FullPizza>;

export const Primary: Story = {};
