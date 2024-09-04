import type { Meta, StoryObj } from "@storybook/react";
import { Sort } from "./index";

const meta: Meta<typeof Sort> = {
  component: Sort,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Sort>;

export const Primary: Story = {};
