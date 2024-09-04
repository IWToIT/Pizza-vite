import type { Meta, StoryObj } from "@storybook/react";
import { Categories } from "./index";

const meta: Meta<typeof Categories> = {
  component: Categories,
};

export default meta;
type Story = StoryObj<typeof Categories>;

export const Primary: Story = {
  args: {
    onChangeCategory: (index: number) => {},
    value: 0,
  },
};
