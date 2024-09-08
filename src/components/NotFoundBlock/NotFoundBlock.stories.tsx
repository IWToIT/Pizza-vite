import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundBlock } from "./index";

const meta: Meta<typeof NotFoundBlock> = {
  component: NotFoundBlock,
};

export default meta;
type Story = StoryObj<typeof NotFoundBlock>;

export const Primary: Story = {};
