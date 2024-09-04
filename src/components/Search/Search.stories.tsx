import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "./index";

const meta: Meta<typeof Search> = {
  component: Search,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Primary: Story = {};
